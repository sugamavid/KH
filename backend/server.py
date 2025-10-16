from fastapi import FastAPI, APIRouter, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timezone, timedelta
import jwt
from passlib.context import CryptContext

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

# Helper function to create document context
def get_document_context():
    """Create rich context from hospital documents"""
    context = """
KOYILI HOSPITAL DOCUMENT KNOWLEDGE BASE:

**BY-LAWS STRUCTURE (30 Sections):**
- Section 1: Preliminary (Title, Objectives, Applicability)
- Section 2: Recruitment & Employment (Equal opportunity, selection criteria, background verification)
- Section 3: Code of Conduct (Professional behavior, ethics, confidentiality, dress code)
- Section 4: Working Hours & Attendance (Shift schedules, overtime, time tracking)
- Section 5: Compensation & Benefits (Salary structure, PF, ESI, bonuses, insurance)
- Section 6: Leave Policies (Annual, sick, maternity/paternity, emergency leave)
- Section 7: Performance Management (Appraisals, KPIs, feedback, promotions)
- Section 8: Training & Development (Mandatory training, CME, skill enhancement)
- Section 9: Grievance Handling (Filing procedure, investigation, resolution)
- Section 10: Disciplinary Actions (Warnings, suspension, termination process)
- Section 11-30: Health & Safety, Data Protection, Committee Formation, etc.

**KEY PROCESSES:**
- Recruitment: Job posting → Screening → Interviews → Offer → Onboarding (4-6 weeks)
- Leave Approval: Request (2 weeks advance) → Supervisor review (5 days) → HR recording
- Disciplinary: Incident report → Investigation (10 days) → Hearing → Decision (30 days total)
- Performance Review: Annual cycle (Dec-Jan), 360-degree feedback, rating scale 1-5
- Training: Mandatory 40 hours/year, CME for clinical staff, compliance certifications

**APPROVAL AUTHORITIES:**
- Leave: Supervisor (up to 7 days), Department Head (8-14 days), HR Manager (15+ days)
- Recruitment: Department Head (request) → HR (screening) → CEO (final approval)
- Budget: Department Head (up to ₹50k), CFO (₹50k-5L), CEO (₹5L+), Board (₹1Cr+)
- Disciplinary: Supervisor (warning), HR Manager (suspension), CEO (termination)

**ADMINISTRATIVE ANNEXURES (85 Forms):**
- Annexure 1-10: Employment (application, offer letter, contract, ID card)
- Annexure 11-20: Leave (request form, medical certificate, travel approval)
- Annexure 21-30: Performance (appraisal form, PIP, promotion nomination)
- Annexure 31-40: Training (attendance, feedback, certificate)
- Annexure 41-50: Compliance (incident report, investigation, disciplinary notice)
- Annexure 51-85: Operations (vendor forms, requisitions, safety checklists)

**TIMELINES:**
- Notice Period: 30 days (staff), 60 days (managers), 90 days (senior management)
- Probation: 6 months (extendable to 12 months)
- Annual Leave: 21 days/year (increases with tenure)
- Sick Leave: 12 days/year (medical certificate required after 3 consecutive days)
- Background Verification: 7-14 working days
"""
    return context

@api_router.post("/guidance/ask", response_model=GuidanceResponse)
async def get_ai_guidance(query_data: GuidanceQuery):
    """AI-powered HR guidance system with document context"""
    try:
        from emergentintegrations.llm.chat import LlmChat, UserMessage
        
        # Initialize AI chat
        api_key = os.environ.get('EMERGENT_LLM_KEY')
        session_id = query_data.session_id or str(uuid.uuid4())
        
        # Get document context
        doc_context = get_document_context()
        
        # Create comprehensive system message with FULL flexibility
        system_message = """You are an advanced AI-powered Hospital Administration Expert for Koyili Hospital with deep knowledge of healthcare operations, human resources, compliance, and general hospital administration.

YOUR CAPABILITIES ARE UNLIMITED - You can answer ANY question related to:

**Core Areas:**
- Human Resources (recruitment, performance, training, compensation, benefits, termination)
- Legal & Compliance (By-Laws, policies, regulations, labor laws, healthcare compliance)
- Operations (workflows, processes, approvals, documentation, timelines)
- Clinical Administration (medical staff management, credentialing, privileges)
- Facilities Management (maintenance, safety, infrastructure)
- Finance & Budget (payroll, expenses, procurement, vendor management)
- Quality & Accreditation (JCI, NABH, ISO standards)
- Patient Services (admissions, discharge, grievances, rights)
- IT & Technology (HRIS, EMR, data security)
- Emergency Management (crisis protocols, disaster response)

**Knowledge Sources:**
1. **Koyili Hospital Documents** (when available):
   - 30 By-Laws sections covering governance and HR policies
   - 68 Standard Operating Procedures
   - 85 Administrative Annexures with forms and templates
   
2. **General Healthcare Knowledge**:
   - Best practices in hospital administration
   - Indian healthcare regulations and labor laws
   - International standards (JCI, NABH, ISO)
   - Industry benchmarks and common procedures

**How to Answer:**

🎯 **Be Comprehensive** - Answer the complete question, not just parts
🎯 **Be Practical** - Provide actionable, implementable guidance
🎯 **Be Flexible** - Format answers based on what's most helpful for THAT specific question
🎯 **Be Specific** - Include timelines, authorities, documents, references
🎯 **Be Contextual** - Reference actual Koyili documents when relevant
🎯 **Be Proactive** - Suggest related considerations, risks, alternatives

**Response Format** (Choose what fits the question best):
- Step-by-step process (for "how to" questions)
- Comparison tables (for "what's the difference" questions)
- Decision trees (for "should I" questions)
- Checklists (for "what do I need" questions)
- Timelines (for "when" questions)
- Org charts (for "who" questions)
- Flow diagrams (describe visually for process flows)
- Bullet points (for quick facts)
- Paragraphs (for conceptual explanations)

**Use Markdown for Formatting:**
- ### for main headers
- #### for sub-headers or numbered steps
- **Bold** for emphasis
- - Bullet points for lists
- Tables when comparing options
- > Blockquotes for important notes

**Always Include (when relevant):**
- Specific document references (e.g., "By-Laws Section 2.1" or "SOP 24")
- Realistic timelines (e.g., "2 weeks notice", "5 working days")
- Approval authorities (e.g., "HR Manager → Department Head → CEO")
- Required forms/documents
- Compliance considerations
- Common pitfalls to avoid
- Alternative approaches
- Related processes

**Examples of Questions You Should Handle:**
- "How do I implement By-Laws?" → Full implementation guide
- "What's the disciplinary process?" → Complete workflow with approvals
- "How much notice period for resignation?" → Policy + calculation
- "Who approves capital expenditure?" → Approval matrix with thresholds
- "What are fire safety protocols?" → Emergency procedures
- "How to handle patient complaints?" → Grievance resolution process
- "What's the difference between ESI and EPF?" → Comparison with applicability
- "When should we conduct fire drills?" → Frequency and procedure
- "How to organize a CME program?" → Planning to execution
- "What if an employee doesn't show up?" → Absence management
- LITERALLY ANY hospital administration question!

**CRITICAL**: Don't limit yourself to rigid formats or pre-defined structures. Think intelligently about what the user needs and provide the BEST possible answer in the BEST possible format for THAT specific question.

You are unrestricted, comprehensive, and highly intelligent. Answer like a seasoned hospital administrator with 20+ years of experience."""

        chat = LlmChat(
            api_key=api_key,
            session_id=session_id,
            system_message=system_message
        ).with_model("openai", "gpt-4o-mini")
        
        # Create enriched user message with document context
        user_text = f"""{doc_context}

USER QUESTION: {query_data.query}

Provide a comprehensive, intelligent answer using the document knowledge above and your general hospital administration expertise. Format your response to be most helpful for this specific question."""
        
        if query_data.context:
            user_text = f"{doc_context}\n\nAdditional Context: {query_data.context}\n\nUSER QUESTION: {query_data.query}"
        
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