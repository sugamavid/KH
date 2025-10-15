from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ============ MODELS ============

# Department Models
class Department(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    name: str
    description: str
    icon: str
    color: str
    populated: bool
    stats: Dict[str, int]

class DepartmentCreate(BaseModel):
    id: str
    name: str
    description: str
    icon: str = "folder"
    color: str = "blue"

# By-Law Models
class ByLaw(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    department_id: str
    section: int
    title: str
    description: str
    subsections: int

# SOP Models
class SOP(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    department_id: str
    category: str
    title: str
    sops: List[Dict[str, str]]

# Annexure Models
class Annexure(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    department_id: str
    code: str
    name: str
    category: str
    format: str
    approval: str
    pdf_url: Optional[str] = None

# Tool Models
class Tool(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    department_id: str
    name: str
    description: str
    icon: str
    color: str
    inputs: List[str]
    outputs: List[str]


# ============ ROUTES ============

@api_router.get("/")
async def root():
    return {"message": "Koyili Hospital Department Dashboard API"}

# Department Routes
@api_router.get("/departments", response_model=List[Department])
async def get_departments():
    """Get all departments"""
    departments = await db.departments.find({}, {"_id": 0}).to_list(100)
    if not departments:
        # Seed departments if not exists
        from seed_data import DEPARTMENTS
        await db.departments.insert_many(DEPARTMENTS)
        departments = DEPARTMENTS
    return departments

@api_router.get("/departments/{dept_id}", response_model=Department)
async def get_department(dept_id: str):
    """Get specific department details"""
    department = await db.departments.find_one({"id": dept_id}, {"_id": 0})
    if not department:
        raise HTTPException(status_code=404, detail="Department not found")
    return department

@api_router.post("/departments", response_model=Department)
async def create_department(dept: DepartmentCreate):
    """Create new department"""
    dept_dict = dept.model_dump()
    dept_dict["populated"] = False
    dept_dict["stats"] = {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    
    existing = await db.departments.find_one({"id": dept_dict["id"]})
    if existing:
        raise HTTPException(status_code=400, detail="Department already exists")
    
    await db.departments.insert_one(dept_dict)
    return dept_dict

# By-Laws Routes
@api_router.get("/bylaws/{dept_id}", response_model=List[ByLaw])
async def get_bylaws(dept_id: str):
    """Get all by-laws for a department"""
    bylaws = await db.bylaws.find({"department_id": dept_id}, {"_id": 0}).to_list(100)
    
    # Seed HR by-laws if department is HR and no bylaws exist
    if dept_id == "hr" and not bylaws:
        from seed_data import HR_BYLAWS
        hr_bylaws = []
        for bylaw in HR_BYLAWS:
            bylaw_doc = {
                "id": str(uuid.uuid4()),
                "department_id": "hr",
                **bylaw
            }
            hr_bylaws.append(bylaw_doc)
        await db.bylaws.insert_many(hr_bylaws)
        bylaws = hr_bylaws
    
    return bylaws

# SOP Routes
@api_router.get("/sops/{dept_id}", response_model=List[SOP])
async def get_sops(dept_id: str):
    """Get all SOPs for a department"""
    sops = await db.sops.find({"department_id": dept_id}, {"_id": 0}).to_list(100)
    
    # Seed HR SOPs if department is HR and no SOPs exist
    if dept_id == "hr" and not sops:
        from seed_data import HR_SOPS
        hr_sops = []
        for sop in HR_SOPS:
            sop_doc = {
                "id": str(uuid.uuid4()),
                "department_id": "hr",
                **sop
            }
            hr_sops.append(sop_doc)
        await db.sops.insert_many(hr_sops)
        sops = hr_sops
    
    return sops

# Annexure Routes
@api_router.get("/annexures/{dept_id}", response_model=List[Annexure])
async def get_annexures(dept_id: str):
    """Get all annexures/forms for a department"""
    annexures = await db.annexures.find({"department_id": dept_id}, {"_id": 0}).to_list(200)
    
    # Seed HR annexures if department is HR and no annexures exist
    if dept_id == "hr" and not annexures:
        from seed_data import HR_ANNEXURES
        hr_annexures = []
        for annexure in HR_ANNEXURES:
            annexure_doc = {
                "id": str(uuid.uuid4()),
                "department_id": "hr",
                "pdf_url": None,
                **annexure
            }
            hr_annexures.append(annexure_doc)
        await db.annexures.insert_many(hr_annexures)
        annexures = hr_annexures
    
    return annexures

@api_router.get("/annexures/{dept_id}/categories")
async def get_annexure_categories(dept_id: str):
    """Get unique categories for department annexures"""
    annexures = await db.annexures.find({"department_id": dept_id}, {"category": 1, "_id": 0}).to_list(200)
    categories = list(set([a["category"] for a in annexures]))
    return {"categories": sorted(categories)}

# Tool Routes
@api_router.get("/tools/{dept_id}", response_model=List[Tool])
async def get_tools(dept_id: str):
    """Get all ready reckoner tools for a department"""
    tools = await db.tools.find({"department_id": dept_id}, {"_id": 0}).to_list(100)
    
    # Seed HR tools if department is HR and no tools exist
    if dept_id == "hr" and not tools:
        from seed_data import HR_TOOLS
        hr_tools = []
        for tool in HR_TOOLS:
            tool_doc = {
                "department_id": "hr",
                **tool
            }
            hr_tools.append(tool_doc)
        await db.tools.insert_many(hr_tools)
        tools = hr_tools
    
    return tools

@api_router.get("/tools/{dept_id}/{tool_id}", response_model=Tool)
async def get_tool(dept_id: str, tool_id: str):
    """Get specific tool details"""
    tool = await db.tools.find_one({"department_id": dept_id, "id": tool_id}, {"_id": 0})
    if not tool:
        raise HTTPException(status_code=404, detail="Tool not found")
    return tool

# Search Route
@api_router.get("/search/{dept_id}")
async def search_department_content(dept_id: str, q: str):
    """Search across all department content"""
    results = {
        "bylaws": [],
        "sops": [],
        "annexures": [],
        "tools": []
    }
    
    # Search in by-laws
    bylaws = await db.bylaws.find({
        "department_id": dept_id,
        "$or": [
            {"title": {"$regex": q, "$options": "i"}},
            {"description": {"$regex": q, "$options": "i"}}
        ]
    }, {"_id": 0}).to_list(50)
    results["bylaws"] = bylaws
    
    # Search in SOPs
    sops = await db.sops.find({
        "department_id": dept_id,
        "$or": [
            {"title": {"$regex": q, "$options": "i"}},
            {"category": {"$regex": q, "$options": "i"}}
        ]
    }, {"_id": 0}).to_list(50)
    results["sops"] = sops
    
    # Search in annexures
    annexures = await db.annexures.find({
        "department_id": dept_id,
        "$or": [
            {"name": {"$regex": q, "$options": "i"}},
            {"category": {"$regex": q, "$options": "i"}},
            {"code": {"$regex": q, "$options": "i"}}
        ]
    }, {"_id": 0}).to_list(50)
    results["annexures"] = annexures
    
    # Search in tools
    tools = await db.tools.find({
        "department_id": dept_id,
        "$or": [
            {"name": {"$regex": q, "$options": "i"}},
            {"description": {"$regex": q, "$options": "i"}}
        ]
    }, {"_id": 0}).to_list(50)
    results["tools"] = tools
    
    return results

# Include the router in the main app
# ============ AI GUIDANCE SYSTEM ============

class GuidanceQuery(BaseModel):
    query: str
    context: Optional[str] = None
    session_id: Optional[str] = None

class GuidanceResponse(BaseModel):
    answer: str
    related_documents: List[Dict[str, Any]] = []
    suggested_actions: List[str] = []
    process_steps: List[Dict[str, Any]] = []

@api_router.post("/guidance/ask", response_model=GuidanceResponse)
async def get_ai_guidance(query_data: GuidanceQuery):
    """AI-powered HR guidance system"""
    try:
        from emergentintegrations.llm.chat import LlmChat, UserMessage
        
        # Initialize AI chat
        api_key = os.environ.get('EMERGENT_LLM_KEY')
        session_id = query_data.session_id or str(uuid.uuid4())
        
        # Create comprehensive system message with HR context
        system_message = """You are an expert HR Knowledge Assistant for Koyili Hospital.  
        
Your role is to provide comprehensive, step-by-step guidance on ALL HR-related processes, policies, and procedures based on the hospital's By-Laws, SOPs, and Administrative Annexures.

When answering questions, you should:
1. Provide detailed, step-by-step processes
2. Reference relevant By-Laws sections, SOPs, and Annexures
3. Explain the What, When, Where, How, Why, and Whom for each process
4. Include approval chains and timelines
5. Mention required documents and forms
6. Highlight compliance requirements
7. Suggest related processes or considerations

Key Hospital Documents Context:
- 30 By-Laws Sections covering governance, operations, HR policies
- 68 SOPs covering detailed procedures
- 85 Administrative Annexures with forms and templates

Example Topics You Handle:
- By-Laws implementation and amendment processes
- Recruitment and hiring procedures
- Leave policies and applications
- Disciplinary actions and grievances
- Performance management
- Training and development
- Payroll and benefits
- Compliance and legal requirements

Always provide actionable, practical guidance with specific steps and relevant document references."""

        chat = LlmChat(
            api_key=api_key,
            session_id=session_id,
            system_message=system_message
        ).with_model("openai", "gpt-4o-mini")
        
        # Create user message with context
        user_text = query_data.query
        if query_data.context:
            user_text = f"Context: {query_data.context}\n\nQuestion: {query_data.query}"
        
        user_message = UserMessage(text=user_text)
        
        # Get AI response
        ai_response = await chat.send_message(user_message)
        
        # Parse response and extract structured information
        # For now, return the full response
        # TODO: Add document retrieval and related content suggestions
        
        return GuidanceResponse(
            answer=ai_response,
            related_documents=[],
            suggested_actions=[],
            process_steps=[]
        )
        
    except Exception as e:
        logger.error(f"AI Guidance error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to process guidance request: {str(e)}")

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()