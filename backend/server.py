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