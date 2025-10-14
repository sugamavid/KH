// Demo employee data for HRMS
export const DEMO_EMPLOYEES = [
  {
    id: "EMP001",
    name: "Dr. Rajesh Kumar",
    designation: "Chief Medical Officer",
    department: "Clinical Services",
    email: "rajesh.kumar@koyilihospital.com",
    phone: "9876543210",
    joiningDate: "2020-01-15",
    employeeType: "Permanent",
    status: "Active",
    reportingTo: "CEO",
    location: "Kannur",
    bloodGroup: "O+",
    emergencyContact: "9876543211",
    salary: 150000,
    photo: null
  },
  {
    id: "EMP002",
    name: "Ms. Priya Menon",
    designation: "HR Manager",
    department: "Human Resources",
    email: "priya.menon@koyilihospital.com",
    phone: "9876543212",
    joiningDate: "2021-03-10",
    employeeType: "Permanent",
    status: "Active",
    reportingTo: "EMP001",
    location: "Kannur",
    bloodGroup: "A+",
    emergencyContact: "9876543213",
    salary: 80000,
    photo: null
  },
  {
    id: "EMP003",
    name: "Mr. Arun Sharma",
    designation: "Senior Nurse",
    department: "Nursing Department",
    email: "arun.sharma@koyilihospital.com",
    phone: "9876543214",
    joiningDate: "2019-06-20",
    employeeType: "Permanent",
    status: "Active",
    reportingTo: "EMP001",
    location: "Kannur",
    bloodGroup: "B+",
    emergencyContact: "9876543215",
    salary: 45000,
    photo: null
  },
  {
    id: "EMP004",
    name: "Dr. Sneha Reddy",
    designation: "Radiologist",
    department: "Radiology",
    email: "sneha.reddy@koyilihospital.com",
    phone: "9876543216",
    joiningDate: "2022-01-05",
    employeeType: "Permanent",
    status: "Active",
    reportingTo: "EMP001",
    location: "Kannur",
    bloodGroup: "AB+",
    emergencyContact: "9876543217",
    salary: 120000,
    photo: null
  },
  {
    id: "EMP005",
    name: "Mr. Vijay Nair",
    designation: "Finance Manager",
    department: "Finance & Accounts",
    email: "vijay.nair@koyilihospital.com",
    phone: "9876543218",
    joiningDate: "2020-08-12",
    employeeType: "Permanent",
    status: "Active",
    reportingTo: "EMP001",
    location: "Kannur",
    bloodGroup: "O-",
    emergencyContact: "9876543219",
    salary: 90000,
    photo: null
  },
  {
    id: "EMP006",
    name: "Ms. Lakshmi Iyer",
    designation: "Lab Technician",
    department: "Laboratory",
    email: "lakshmi.iyer@koyilihospital.com",
    phone: "9876543220",
    joiningDate: "2021-11-08",
    employeeType: "Contract",
    status: "Active",
    reportingTo: "EMP001",
    location: "Kannur",
    bloodGroup: "A-",
    emergencyContact: "9876543221",
    salary: 35000,
    photo: null
  },
  {
    id: "EMP007",
    name: "Dr. Mohammed Ali",
    designation: "Emergency Physician",
    department: "Emergency Services",
    email: "mohammed.ali@koyilihospital.com",
    phone: "9876543222",
    joiningDate: "2019-04-15",
    employeeType: "Permanent",
    status: "Active",
    reportingTo: "EMP001",
    location: "Kannur",
    bloodGroup: "B-",
    emergencyContact: "9876543223",
    salary: 130000,
    photo: null
  },
  {
    id: "EMP008",
    name: "Ms. Anjali Krishnan",
    designation: "Pharmacist",
    department: "Pharmacy",
    email: "anjali.krishnan@koyilihospital.com",
    phone: "9876543224",
    joiningDate: "2022-07-01",
    employeeType: "Permanent",
    status: "Active",
    reportingTo: "EMP001",
    location: "Kannur",
    bloodGroup: "O+",
    emergencyContact: "9876543225",
    salary: 42000,
    photo: null
  },
  {
    id: "EMP009",
    name: "Mr. Kiran Patel",
    designation: "IT Manager",
    department: "IT & Biomedical",
    email: "kiran.patel@koyilihospital.com",
    phone: "9876543226",
    joiningDate: "2020-02-20",
    employeeType: "Permanent",
    status: "Active",
    reportingTo: "EMP001",
    location: "Kannur",
    bloodGroup: "AB-",
    emergencyContact: "9876543227",
    salary: 75000,
    photo: null
  },
  {
    id: "EMP010",
    name: "Ms. Divya Menon",
    designation: "Receptionist",
    department: "Administration",
    email: "divya.menon@koyilihospital.com",
    phone: "9876543228",
    joiningDate: "2023-01-10",
    employeeType: "Contract",
    status: "Active",
    reportingTo: "EMP002",
    location: "Kannur",
    bloodGroup: "A+",
    emergencyContact: "9876543229",
    salary: 25000,
    photo: null
  }
];

// Leave applications
export const DEMO_LEAVE_APPLICATIONS = [
  {
    id: "LV001",
    employeeId: "EMP003",
    employeeName: "Mr. Arun Sharma",
    leaveType: "Sick Leave",
    fromDate: "2025-01-20",
    toDate: "2025-01-22",
    days: 3,
    reason: "Fever and cold",
    status: "Approved",
    appliedDate: "2025-01-15",
    approvedBy: "EMP002"
  },
  {
    id: "LV002",
    employeeId: "EMP006",
    employeeName: "Ms. Lakshmi Iyer",
    leaveType: "Casual Leave",
    fromDate: "2025-01-25",
    toDate: "2025-01-26",
    days: 2,
    reason: "Personal work",
    status: "Pending",
    appliedDate: "2025-01-13",
    approvedBy: null
  },
  {
    id: "LV003",
    employeeId: "EMP008",
    employeeName: "Ms. Anjali Krishnan",
    leaveType: "Annual Leave",
    fromDate: "2025-02-10",
    toDate: "2025-02-15",
    days: 6,
    reason: "Family vacation",
    status: "Pending",
    appliedDate: "2025-01-12",
    approvedBy: null
  }
];

// Attendance records
export const DEMO_ATTENDANCE = [
  { employeeId: "EMP001", date: "2025-01-13", checkIn: "09:00", checkOut: "18:00", status: "Present" },
  { employeeId: "EMP002", date: "2025-01-13", checkIn: "09:15", checkOut: "17:45", status: "Present" },
  { employeeId: "EMP003", date: "2025-01-13", checkIn: "08:45", checkOut: "17:30", status: "Present" },
  { employeeId: "EMP004", date: "2025-01-13", checkIn: "09:30", checkOut: "18:15", status: "Present" },
  { employeeId: "EMP005", date: "2025-01-13", checkIn: "09:00", checkOut: "18:00", status: "Present" }
];

// Recruitment data
export const DEMO_JOB_POSTINGS = [
  {
    id: "JOB001",
    title: "Senior Staff Nurse",
    department: "Nursing Department",
    location: "Kannur",
    type: "Full-time",
    experience: "3-5 years",
    positions: 2,
    postedDate: "2025-01-05",
    deadline: "2025-01-30",
    status: "Active",
    applicants: 15
  },
  {
    id: "JOB002",
    title: "Junior Doctor - General Medicine",
    department: "Clinical Services",
    location: "Kannur",
    type: "Full-time",
    experience: "0-2 years",
    positions: 1,
    postedDate: "2025-01-08",
    deadline: "2025-02-05",
    status: "Active",
    applicants: 8
  },
  {
    id: "JOB003",
    title: "Medical Lab Technician",
    department: "Laboratory",
    location: "Kannur",
    type: "Contract",
    experience: "1-3 years",
    positions: 1,
    postedDate: "2025-01-10",
    deadline: "2025-01-25",
    status: "Active",
    applicants: 12
  }
];

// Training programs
export const DEMO_TRAINING_PROGRAMS = [
  {
    id: "TRN001",
    title: "Infection Control & Prevention",
    type: "Mandatory",
    department: "All Departments",
    duration: "4 hours",
    startDate: "2025-01-20",
    endDate: "2025-01-20",
    trainer: "Dr. Health Expert",
    enrolled: 45,
    capacity: 50,
    status: "Upcoming"
  },
  {
    id: "TRN002",
    title: "Advanced Life Support (ALS)",
    type: "Certification",
    department: "Emergency Services",
    duration: "2 days",
    startDate: "2025-02-01",
    endDate: "2025-02-02",
    trainer: "Emergency Care Institute",
    enrolled: 12,
    capacity: 15,
    status: "Upcoming"
  },
  {
    id: "TRN003",
    title: "Hospital Management Software",
    type: "Technical",
    department: "All Departments",
    duration: "3 hours",
    startDate: "2025-01-15",
    endDate: "2025-01-15",
    trainer: "IT Team",
    enrolled: 30,
    capacity: 40,
    status: "Completed"
  }
];

// Performance reviews
export const DEMO_PERFORMANCE_REVIEWS = [
  {
    id: "PR001",
    employeeId: "EMP003",
    employeeName: "Mr. Arun Sharma",
    reviewPeriod: "July-Dec 2024",
    overallRating: 4.5,
    kpiScore: 90,
    managerRating: 4.6,
    peerRating: 4.4,
    status: "Completed",
    reviewDate: "2024-12-28"
  },
  {
    id: "PR002",
    employeeId: "EMP006",
    employeeName: "Ms. Lakshmi Iyer",
    reviewPeriod: "July-Dec 2024",
    overallRating: 4.2,
    kpiScore: 85,
    managerRating: 4.3,
    peerRating: 4.1,
    status: "Completed",
    reviewDate: "2024-12-29"
  },
  {
    id: "PR003",
    employeeId: "EMP008",
    employeeName: "Ms. Anjali Krishnan",
    reviewPeriod: "Jan-June 2025",
    overallRating: null,
    kpiScore: null,
    managerRating: null,
    peerRating: null,
    status: "Pending",
    reviewDate: null
  }
];

// Contracts
export const DEMO_CONTRACTS = [
  {
    id: "CNT001",
    type: "Employment Contract",
    party: "Hospital Staff",
    title: "Permanent Employment Agreement",
    startDate: "2024-01-01",
    endDate: "2025-12-31",
    status: "Active",
    value: "As per policy"
  },
  {
    id: "CNT002",
    type: "Vendor Contract",
    party: "Medical Supplies Co.",
    title: "Medical Equipment Supply Agreement",
    startDate: "2024-06-01",
    endDate: "2025-05-31",
    status: "Active",
    value: "₹50,00,000"
  },
  {
    id: "CNT003",
    type: "Service Contract",
    party: "Housekeeping Services Ltd.",
    title: "Facility Management Agreement",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "Expiring Soon",
    value: "₹30,00,000"
  }
];

// HR By-Laws
export const HR_BYLAWS = [
  {
    section: "1",
    title: "Code of Conduct",
    description: "Guidelines for professional behavior and ethical standards",
    subsections: 8
  },
  {
    section: "2",
    title: "Employment Terms",
    description: "Policies regarding employment contracts and terms",
    subsections: 12
  },
  {
    section: "3",
    title: "Leave Policy",
    description: "Regulations for various types of leave and time off",
    subsections: 6
  }
];

// HR SOPs
export const HR_SOPS = [
  {
    category: "A",
    title: "Recruitment & Onboarding",
    sops: [
      { code: "SOP-HR-001", name: "Employee Recruitment Process" },
      { code: "SOP-HR-002", name: "New Employee Onboarding" }
    ]
  },
  {
    category: "B",
    title: "Performance Management",
    sops: [
      { code: "SOP-HR-003", name: "Annual Performance Review" },
      { code: "SOP-HR-004", name: "Goal Setting and KPIs" }
    ]
  }
];

// HR Annexures
export const HR_ANNEXURES = [
  {
    code: "ANX-001",
    name: "Employment Application Form",
    category: "Recruitment",
    format: "PDF",
    approval: "HR Manager"
  },
  {
    code: "ANX-002",
    name: "Leave Application Form",
    category: "Leave Management",
    format: "PDF",
    approval: "Department Head"
  },
  {
    code: "ANX-003",
    name: "Performance Appraisal Form",
    category: "Performance",
    format: "PDF",
    approval: "HR & Reporting Manager"
  },
  {
    code: "ANX-004",
    name: "Employee Information Update Form",
    category: "Operations",
    format: "PDF",
    approval: "HR Manager"
  },
  {
    code: "ANX-005",
    name: "Resignation Letter Template",
    category: "Operations",
    format: "PDF",
    approval: "Department Head"
  },
  {
    code: "ANX-006",
    name: "Termination Notice",
    category: "Legal",
    format: "PDF",
    approval: "HR Director & Legal Counsel"
  },
  {
    code: "ANX-007",
    name: "Employee Warning Letter",
    category: "Compliance",
    format: "PDF",
    approval: "HR Manager & Department Head"
  },
  {
    code: "ANX-008",
    name: "Training Request Form",
    category: "Performance",
    format: "PDF",
    approval: "Department Head"
  },
  {
    code: "ANX-009",
    name: "Incident Report Form",
    category: "Compliance",
    format: "PDF",
    approval: "Safety Officer"
  },
  {
    code: "ANX-010",
    name: "Salary Certificate Request",
    category: "Operations",
    format: "PDF",
    approval: "HR Manager"
  },
  {
    code: "ANX-011",
    name: "Experience Certificate Template",
    category: "Operations",
    format: "PDF",
    approval: "HR Manager"
  },
  {
    code: "ANX-012",
    name: "Grievance Complaint Form",
    category: "Compliance",
    format: "PDF",
    approval: "HR Director"
  },
  {
    code: "ANX-013",
    name: "Overtime Authorization Form",
    category: "Operations",
    format: "PDF",
    approval: "Department Head"
  },
  {
    code: "ANX-014",
    name: "Medical Leave Certificate",
    category: "Leave Management",
    format: "PDF",
    approval: "Medical Officer"
  },
  {
    code: "ANX-015",
    name: "Transfer Request Form",
    category: "Operations",
    format: "PDF",
    approval: "HR Manager & Dept Heads"
  },
  {
    code: "ANX-016",
    name: "Employment Contract Template",
    category: "Legal",
    format: "PDF",
    approval: "HR Director & Legal Counsel"
  },
  {
    code: "ANX-017",
    name: "Non-Disclosure Agreement",
    category: "Legal",
    format: "PDF",
    approval: "Legal Counsel"
  },
  {
    code: "ANX-018",
    name: "Exit Interview Questionnaire",
    category: "Recruitment",
    format: "PDF",
    approval: "HR Manager"
  },
  {
    code: "ANX-019",
    name: "Background Verification Form",
    category: "Recruitment",
    format: "PDF",
    approval: "HR Manager"
  },
  {
    code: "ANX-020",
    name: "Job Description Template",
    category: "Recruitment",
    format: "PDF",
    approval: "Department Head"
  },
  {
    code: "ANX-021",
    name: "Employee Self-Assessment Form",
    category: "Performance",
    format: "PDF",
    approval: "Reporting Manager"
  },
  {
    code: "ANX-022",
    name: "Disciplinary Action Form",
    category: "Compliance",
    format: "PDF",
    approval: "HR Director"
  },
  {
    code: "ANX-023",
    name: "Equipment Handover Form",
    category: "Operations",
    format: "PDF",
    approval: "IT & Admin Manager"
  },
  {
    code: "ANX-024",
    name: "Attendance Regularization Request",
    category: "Operations",
    format: "PDF",
    approval: "Department Head"
  }
];
