# Comprehensive seed data for Koyili Hospital Dashboard

DEPARTMENTS = [
    {
        "id": "hr",
        "name": "Human Resources",
        "description": "Manages recruitment, employee welfare, training, and organizational development",
        "icon": "users",
        "color": "blue",
        "populated": True,
        "stats": {
            "bylaws": 30,
            "sops": 68,
            "annexures": 85,
            "tools": 12
        }
    },
    {
        "id": "finance",
        "name": "Finance & Accounts",
        "description": "Manages financial planning, accounting, billing, and revenue cycle management",
        "icon": "dollar-sign",
        "color": "green",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "clinical",
        "name": "Clinical Services",
        "description": "Oversees medical care delivery, clinical protocols, and patient treatment",
        "icon": "stethoscope",
        "color": "red",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "nursing",
        "name": "Nursing Department",
        "description": "Manages nursing staff, patient care protocols, and nursing standards",
        "icon": "heart-pulse",
        "color": "pink",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "admin",
        "name": "Administration",
        "description": "Handles administrative functions, documentation, and office management",
        "icon": "briefcase",
        "color": "purple",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "operations",
        "name": "Operations & Facilities",
        "description": "Manages hospital operations, maintenance, housekeeping, and infrastructure",
        "icon": "building",
        "color": "orange",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "quality",
        "name": "Quality Assurance",
        "description": "Ensures quality standards, accreditation compliance, and continuous improvement",
        "icon": "award",
        "color": "yellow",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "pharmacy",
        "name": "Pharmacy",
        "description": "Manages medication dispensing, inventory, and pharmaceutical services",
        "icon": "pill",
        "color": "teal",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "laboratory",
        "name": "Laboratory",
        "description": "Handles diagnostic testing, sample processing, and lab operations",
        "icon": "flask",
        "color": "indigo",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "radiology",
        "name": "Radiology",
        "description": "Manages imaging services, radiological procedures, and diagnostic imaging",
        "icon": "scan",
        "color": "cyan",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "emergency",
        "name": "Emergency Services",
        "description": "Handles emergency care, trauma management, and critical response",
        "icon": "ambulance",
        "color": "rose",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "opd",
        "name": "Out Patient Department",
        "description": "Manages outpatient consultations, appointments, and follow-ups",
        "icon": "calendar-check",
        "color": "lime",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "ipd",
        "name": "In Patient Department",
        "description": "Manages inpatient admissions, bed management, and ward operations",
        "icon": "bed",
        "color": "amber",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "medical_records",
        "name": "Medical Records",
        "description": "Maintains patient records, documentation, and health information management",
        "icon": "folder",
        "color": "slate",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    },
    {
        "id": "it_biomedical",
        "name": "IT & Biomedical Engineering",
        "description": "Manages IT systems, medical equipment, and technology infrastructure",
        "icon": "computer",
        "color": "violet",
        "populated": False,
        "stats": {"bylaws": 0, "sops": 0, "annexures": 0, "tools": 0}
    }
]

# HR By-Laws - 30 Sections
HR_BYLAWS = [
    {"section": 1, "title": "Preliminary", "description": "Short Title, Extent, Commencement, Objective, and Applicability", "subsections": 3},
    {"section": 2, "title": "Recruitment and Employment", "description": "Equal Employment Opportunity, Recruitment Process, Probation, Job Classification", "subsections": 4},
    {"section": 3, "title": "Code of Conduct", "description": "Professional Ethics, Respect and Dignity, Confidentiality, Dress Code, Behavioral Expectations", "subsections": 5},
    {"section": 4, "title": "Employee Rights and Responsibilities", "description": "Rights to Fair Treatment, Confidentiality, Duty of Care, Workplace Conduct", "subsections": 5},
    {"section": 5, "title": "Diversity, Equity, and Inclusion (DEI)", "description": "Diversity Commitment, Inclusion Programs, Non-Discrimination Policy", "subsections": 5},
    {"section": 6, "title": "Patient Interaction and Care Standards", "description": "Patient Rights, Professional Conduct, Ethical Standards, Professional Boundaries", "subsections": 6},
    {"section": 7, "title": "Attendance and Leave Policy", "description": "Attendance Standards, Leave Entitlements, Application Process, Monitoring", "subsections": 4},
    {"section": 8, "title": "Performance Management", "description": "Performance Appraisals, Continuous Feedback, Promotion Criteria, PIPs, Recognition", "subsections": 5},
    {"section": 9, "title": "Training and Development", "description": "Mandatory Training, Professional Development, Training Needs Assessment", "subsections": 7},
    {"section": 10, "title": "Remote Work and Flexible Scheduling", "description": "Remote Work Policy, Flexible Scheduling, Expectations and Accountability", "subsections": 6},
    {"section": 11, "title": "Compensation and Benefits", "description": "Salary Structure, Overtime, Benefits and Allowances, Bonuses, EAPs", "subsections": 7},
    {"section": 12, "title": "Grievance Redressal Mechanism", "description": "Objective, Scope, Reporting Procedures, Resolution Process, Confidentiality", "subsections": 10},
    {"section": 13, "title": "Workplace Health and Safety", "description": "Safety Standards, Incident Reporting, Workplace Hazards, Infection Control", "subsections": 7},
    {"section": 14, "title": "Disciplinary Actions and Compliance", "description": "Compliance, Types of Actions, Grounds, Investigation, Appeal Process", "subsections": 7},
    {"section": 15, "title": "Data Protection and Confidentiality", "description": "Patient Data Protection, Employee Data Privacy, Confidentiality Obligations", "subsections": 7},
    {"section": 16, "title": "Termination and Exit Process", "description": "Types of Termination, Resignation Process, Exit Interviews, Final Settlement", "subsections": 7},
    {"section": 17, "title": "Technology Use and Digital Conduct", "description": "Acceptable Use, Internet and Email Usage, Mobile Device Policy, Password Management", "subsections": 8},
    {"section": 18, "title": "Environmental Responsibility and Sustainability", "description": "Commitment to Sustainability, Waste Management, Energy Efficiency, Water Conservation", "subsections": 8},
    {"section": 19, "title": "Internal Communication and Information Sharing", "description": "Purpose, Communication Channels, Information Sharing Policies, Etiquette", "subsections": 8},
    {"section": 20, "title": "Employee Assistance Programs (EAPs)", "description": "Purpose, Types of Services, Accessibility, Confidentiality, Employee Awareness", "subsections": 7},
    {"section": 21, "title": "Special Provisions for Sensitive Situations", "description": "Purpose, Reporting, Investigation, Confidentiality, Support for Affected Employees", "subsections": 9},
    {"section": 22, "title": "Compliance and Regular Audits", "description": "Purpose, Types of Audits, Responsibilities, Audit Procedures, Compliance Reporting", "subsections": 8},
    {"section": 23, "title": "Workplace Culture and Team Building", "description": "Purpose, Core Values, Team Building Activities, Open Communication, Diversity", "subsections": 8},
    {"section": 24, "title": "Employee Wellness and Support Programs", "description": "Purpose, Types of Programs, Work-Life Balance, Wellness Committees, Monitoring", "subsections": 8},
    {"section": 25, "title": "Handling Conflicts of Interest", "description": "Purpose, Types of Conflicts, Disclosure Requirements, Managing Conflicts, Prohibited Conduct", "subsections": 8},
    {"section": 26, "title": "Innovation and Continuous Improvement", "description": "Purpose, Fostering Innovation, Innovation Committee, Pilot Programs, Training", "subsections": 9},
    {"section": 27, "title": "Work-Life Balance Initiatives", "description": "Purpose, Flexible Work Arrangements, Leave Policies, Wellness Programs, Support for Caregivers", "subsections": 8},
    {"section": 28, "title": "Corporate Social Responsibility (CSR) Policies", "description": "Purpose, CSR Focus Areas, Employee Involvement, Partnerships, Monitoring", "subsections": 8},
    {"section": 29, "title": "Compliance with Industry Standards and Best Practices", "description": "Purpose, Regulatory Compliance, Clinical Best Practices, Training, Data Protection", "subsections": 9},
    {"section": 30, "title": "Miscellaneous Provisions", "description": "General Application, Amendments, Severability, Compliance, Records, Dispute Resolution", "subsections": 9}
]

# HR SOPs - 14 Categories with 68 SOPs
HR_SOPS = [
    {
        "category": "A",
        "title": "Organisational Governance",
        "sops": [
            {"code": "A.1", "name": "Creation & Revision of HR Policies and By-Laws"},
            {"code": "A.2", "name": "Organizational Structure and Role Hierarchy Finalization"},
            {"code": "A.3", "name": "Reporting Matrix & Job Description Repository"},
            {"code": "A.4", "name": "Employee Handbook Issuance & Acknowledgment"}
        ]
    },
    {
        "category": "B",
        "title": "Recruitment, Selection & Appointment",
        "sops": [
            {"code": "B.1", "name": "Workforce Planning and Manpower Budgeting"},
            {"code": "B.2", "name": "Vacancy Identification & Requisition Approval"},
            {"code": "B.3", "name": "Job Posting, Advertisement & Sourcing"},
            {"code": "B.4", "name": "Resume Screening & Shortlisting Protocol"},
            {"code": "B.5", "name": "Interview Scheduling & Panel Process"},
            {"code": "B.6", "name": "Candidate Evaluation Documentation"},
            {"code": "B.7", "name": "Background Verification"},
            {"code": "B.8", "name": "Pre-Employment Medical Fitness Clearance"},
            {"code": "B.9", "name": "Offer Letter Generation & Negotiation"},
            {"code": "B.10", "name": "Appointment Letter Signing & Joining Checklist"}
        ]
    },
    {
        "category": "C",
        "title": "Onboarding & Access Control",
        "sops": [
            {"code": "C.1", "name": "Orientation Program (HR & Departmental)"},
            {"code": "C.2", "name": "Uniform, ID Card & Biometric Enrollment"},
            {"code": "C.3", "name": "HRMS & Payroll System Access Creation"},
            {"code": "C.4", "name": "Policy Orientation & Confidentiality Briefing"},
            {"code": "C.5", "name": "Credentialing & Clinical Privileging"}
        ]
    },
    {
        "category": "D",
        "title": "Employee Records & Statutory Compliance",
        "sops": [
            {"code": "D.1", "name": "Personnel File Creation & Document Archiving"},
            {"code": "D.2", "name": "Document Verification & Retention Standards"},
            {"code": "D.3", "name": "Statutory Compliance Filing & Registers"},
            {"code": "D.4", "name": "Display Boards & Legal Disclosures Maintenance"},
            {"code": "D.5", "name": "KYC/ESIC/UAN/Bank Account Mapping"}
        ]
    },
    {
        "category": "E",
        "title": "Attendance & Shift Management",
        "sops": [
            {"code": "E.1", "name": "Attendance Monitoring & Biometric Protocol"},
            {"code": "E.2", "name": "Shift Roster Creation and Approval"},
            {"code": "E.3", "name": "Half-Day, Short Leave & Late Entry Management"},
            {"code": "E.4", "name": "Weekly Off and Holiday Calendar Issuance"}
        ]
    },
    {
        "category": "F",
        "title": "Leave Management",
        "sops": [
            {"code": "F.1", "name": "Leave Application & Workflow Process"},
            {"code": "F.2", "name": "Emergency Leave Escalation Procedure"},
            {"code": "F.3", "name": "Special Leaves (Maternity, Paternity, Study, Bereavement)"},
            {"code": "F.4", "name": "Leave Encashment Process"},
            {"code": "F.5", "name": "Leave Without Pay (LOP) Tracking & Approval"}
        ]
    },
    {
        "category": "G",
        "title": "Code of Conduct & Disciplinary Control",
        "sops": [
            {"code": "G.1", "name": "Dress Code Enforcement (Clinical/Non-Clinical)"},
            {"code": "G.2", "name": "Ethical Conduct & Monitoring Protocol"},
            {"code": "G.3", "name": "Conflict of Interest Declaration"},
            {"code": "G.4", "name": "Reporting & Action on Misconduct"},
            {"code": "G.5", "name": "Intoxication, Behavioural Checks & Fitness to Work"}
        ]
    },
    {
        "category": "H",
        "title": "Performance Management",
        "sops": [
            {"code": "H.1", "name": "Annual Goal Setting & KPI Process"},
            {"code": "H.2", "name": "Mid-Year & Year-End Appraisals"},
            {"code": "H.3", "name": "Feedback Mechanisms (360° & Peer Review)"},
            {"code": "H.4", "name": "PIP (Performance Improvement Plan) Process"},
            {"code": "H.5", "name": "Promotion Review & IJP Management"},
            {"code": "H.6", "name": "Employee Recognition & Award Nomination"}
        ]
    },
    {
        "category": "I",
        "title": "Payroll, Compensation & Allowances",
        "sops": [
            {"code": "I.1", "name": "Monthly Payroll Processing"},
            {"code": "I.2", "name": "Overtime Logging & Approval"},
            {"code": "I.3", "name": "Allowance Disbursement Protocols"},
            {"code": "I.4", "name": "Bonus (Annual/Festival/Spot) Management"},
            {"code": "I.5", "name": "Salary Revision & Increment Cycle"},
            {"code": "I.6", "name": "Salary Slip Dissemination & Helpdesk"}
        ]
    },
    {
        "category": "J",
        "title": "Training, Certification & Development",
        "sops": [
            {"code": "J.1", "name": "Training Needs Assessment Process"},
            {"code": "J.2", "name": "Induction & Refresher Training Program Calendar"},
            {"code": "J.3", "name": "Clinical Competency Validation Protocol"},
            {"code": "J.4", "name": "External Training Reimbursement Workflow"},
            {"code": "J.5", "name": "Certificate Recording & Training Tracker"},
            {"code": "J.6", "name": "Leadership Development & Succession Planning"}
        ]
    },
    {
        "category": "K",
        "title": "Technology Usage & Digital Security",
        "sops": [
            {"code": "K.1", "name": "Employee Use of Internet, Email & Communication Tools"},
            {"code": "K.2", "name": "Password Management & IT Security Policy"},
            {"code": "K.3", "name": "Digital Device Allocation & Return Protocol"},
            {"code": "K.4", "name": "Remote Work Monitoring & Task Logging"},
            {"code": "K.5", "name": "Cybersecurity Breach Reporting Protocol"}
        ]
    },
    {
        "category": "L",
        "title": "Wellness, Work-Life Balance & EAP",
        "sops": [
            {"code": "L.1", "name": "EAP Access (Employee Assistance Program)"},
            {"code": "L.2", "name": "Wellness Camps, Health Days & Fitness Drives"},
            {"code": "L.3", "name": "Health Screening & Doctor on Call Framework"},
            {"code": "L.4", "name": "Mental Health Support & Referral Flow"},
            {"code": "L.5", "name": "Work-Life Balance Support Initiatives"}
        ]
    },
    {
        "category": "M",
        "title": "Grievance, Complaints & Redressal",
        "sops": [
            {"code": "M.1", "name": "Filing & Escalation of Grievances"},
            {"code": "M.2", "name": "Grievance Redressal Committee Functioning"},
            {"code": "M.3", "name": "Disciplinary Process – Show Cause, Hearings, Action"},
            {"code": "M.4", "name": "Appeals and Review Flow"},
            {"code": "M.5", "name": "POSH Complaints & ICC Protocol"}
        ]
    },
    {
        "category": "N",
        "title": "Exit & Separation Management",
        "sops": [
            {"code": "N.1", "name": "Resignation Filing and Withdrawal Process"},
            {"code": "N.2", "name": "Exit Interview & Feedback Review Process"},
            {"code": "N.3", "name": "Departmental Clearance & Asset Return"},
            {"code": "N.4", "name": "Full & Final Settlement & Service Certificate Issuance"}
        ]
    }
]

# HR Annexures - 85+ Forms
HR_ANNEXURES = [
    # Employment Forms & Documents
    {"code": "A1", "name": "HR Policy Revision Request", "category": "HR Policy", "format": "Digital Form", "approval": "HR Manager"},
    {"code": "A2", "name": "Organizational Structure Template", "category": "Organization", "format": "Template", "approval": "Management"},
    {"code": "A3", "name": "Standard Job Description Template", "category": "Job Description", "format": "Template", "approval": "Department Head"},
    {"code": "A4", "name": "Employee Handbook Acknowledgment", "category": "Onboarding", "format": "Acknowledgment", "approval": "HR"},
    
    # Recruitment & Hiring Forms
    {"code": "B1", "name": "Manpower Requisition Form", "category": "Recruitment", "format": "Request Form", "approval": "Department Head"},
    {"code": "B2", "name": "Recruitment Approval Note", "category": "Approval", "format": "Authorization", "approval": "HR Director"},
    {"code": "B3", "name": "Job Posting Advertisement Template", "category": "Recruitment", "format": "Template", "approval": "HR Manager"},
    {"code": "B4", "name": "Resume Screening Checklist", "category": "Recruitment", "format": "Checklist", "approval": "Recruiter"},
    {"code": "B5", "name": "Interview Schedule Format", "category": "Recruitment", "format": "Schedule", "approval": "HR Coordinator"},
    {"code": "B6", "name": "Interview Evaluation Form", "category": "Recruitment", "format": "Assessment", "approval": "Interview Panel"},
    {"code": "B7", "name": "Background Verification Consent", "category": "Recruitment", "format": "Consent Form", "approval": "Candidate"},
    {"code": "B8", "name": "Pre-Employment Medical Form", "category": "Recruitment", "format": "Medical Form", "approval": "Medical Officer"},
    {"code": "B9", "name": "Offer Letter Template", "category": "Recruitment", "format": "Letter", "approval": "HR Director"},
    {"code": "B10", "name": "Appointment Letter Template", "category": "Recruitment", "format": "Letter", "approval": "CEO"},
    {"code": "B11", "name": "Joining Checklist", "category": "Onboarding", "format": "Checklist", "approval": "HR"},
    
    # Performance Management
    {"code": "H1", "name": "Annual Goal Setting Form", "category": "Performance", "format": "Goal Sheet", "approval": "Supervisor"},
    {"code": "H2", "name": "Self-Appraisal Form", "category": "Performance", "format": "Assessment", "approval": "Employee"},
    {"code": "H3", "name": "Manager Appraisal Form", "category": "Performance", "format": "Assessment", "approval": "Manager"},
    {"code": "H4", "name": "360-Degree Feedback Form", "category": "Performance", "format": "Feedback", "approval": "Multiple"},
    {"code": "H5", "name": "PIP Documentation Template", "category": "Performance", "format": "Action Plan", "approval": "HR Manager"},
    {"code": "H6", "name": "Promotion Nomination Form", "category": "Performance", "format": "Nomination", "approval": "Department Head"},
    {"code": "H7", "name": "Employee Recognition Nomination", "category": "Performance", "format": "Nomination", "approval": "Supervisor"},
    
    # Attendance & Leave
    {"code": "E1", "name": "Attendance Regularization Request", "category": "Attendance", "format": "Request Form", "approval": "Manager"},
    {"code": "E2", "name": "Shift Roster Template", "category": "Attendance", "format": "Schedule", "approval": "Department Head"},
    {"code": "E3", "name": "Leave Application Form", "category": "Leave", "format": "Application", "approval": "Supervisor"},
    {"code": "E4", "name": "Emergency Leave Intimation", "category": "Leave", "format": "Notification", "approval": "Manager"},
    {"code": "F1", "name": "Maternity Leave Application", "category": "Leave", "format": "Application", "approval": "HR Manager"},
    {"code": "F2", "name": "Paternity Leave Application", "category": "Leave", "format": "Application", "approval": "HR Manager"},
    {"code": "F3", "name": "Medical Certificate Format", "category": "Leave", "format": "Certificate", "approval": "Doctor"},
    {"code": "F4", "name": "Leave Encashment Request", "category": "Leave", "format": "Request", "approval": "HR Director"},
    {"code": "F5", "name": "LOP Approval Form", "category": "Leave", "format": "Approval", "approval": "Manager"},
    
    # Training & Development
    {"code": "J1", "name": "Training Needs Assessment Form", "category": "Training", "format": "Assessment", "approval": "Manager"},
    {"code": "J2", "name": "Training Nomination Form", "category": "Training", "format": "Nomination", "approval": "Department Head"},
    {"code": "J3", "name": "Training Attendance Sheet", "category": "Training", "format": "Attendance", "approval": "Trainer"},
    {"code": "J4", "name": "Training Feedback Form", "category": "Training", "format": "Feedback", "approval": "Participant"},
    {"code": "J5", "name": "External Training Reimbursement", "category": "Training", "format": "Claim Form", "approval": "Finance"},
    {"code": "J6", "name": "Certificate Submission Form", "category": "Training", "format": "Submission", "approval": "HR"},
    
    # Compliance & Grievance
    {"code": "D1", "name": "Document Submission Checklist", "category": "Compliance", "format": "Checklist", "approval": "HR"},
    {"code": "D2", "name": "Statutory Register Template", "category": "Compliance", "format": "Register", "approval": "Compliance Officer"},
    {"code": "G1", "name": "Conflict of Interest Declaration", "category": "Compliance", "format": "Declaration", "approval": "Ethics Committee"},
    {"code": "M1", "name": "Grievance Filing Form", "category": "Grievance", "format": "Complaint", "approval": "Grievance Committee"},
    {"code": "M2", "name": "Show Cause Notice Template", "category": "Disciplinary", "format": "Notice", "approval": "HR Director"},
    {"code": "M3", "name": "Employee Response Form", "category": "Disciplinary", "format": "Response", "approval": "Employee"},
    {"code": "M4", "name": "POSH Complaint Form", "category": "Grievance", "format": "Complaint", "approval": "ICC"},
    
    # Payroll & Compensation
    {"code": "I1", "name": "Overtime Authorization Form", "category": "Payroll", "format": "Authorization", "approval": "Manager"},
    {"code": "I2", "name": "Allowance Claim Form", "category": "Payroll", "format": "Claim", "approval": "Finance"},
    {"code": "I3", "name": "Bonus Recommendation Form", "category": "Payroll", "format": "Recommendation", "approval": "Department Head"},
    {"code": "I4", "name": "Salary Revision Proposal", "category": "Payroll", "format": "Proposal", "approval": "CEO"},
    {"code": "I5", "name": "Bank Account Change Form", "category": "Payroll", "format": "Change Request", "approval": "HR"},
    {"code": "I6", "name": "PF Withdrawal Form", "category": "Payroll", "format": "Withdrawal", "approval": "Finance"},
    
    # Exit Management
    {"code": "N1", "name": "Resignation Letter Template", "category": "Exit", "format": "Letter", "approval": "Manager"},
    {"code": "N2", "name": "Resignation Acceptance Letter", "category": "Exit", "format": "Letter", "approval": "HR Director"},
    {"code": "N3", "name": "Exit Interview Form", "category": "Exit", "format": "Interview", "approval": "HR"},
    {"code": "N4", "name": "Clearance Certificate", "category": "Exit", "format": "Certificate", "approval": "Multiple Departments"},
    {"code": "N5", "name": "Asset Return Checklist", "category": "Exit", "format": "Checklist", "approval": "IT/Admin"},
    {"code": "N6", "name": "Full & Final Settlement Sheet", "category": "Exit", "format": "Settlement", "approval": "Finance"},
    {"code": "N7", "name": "Experience Certificate Template", "category": "Exit", "format": "Certificate", "approval": "HR Director"},
    {"code": "N8", "name": "Relieving Letter Template", "category": "Exit", "format": "Letter", "approval": "HR Director"},
    
    # Employee Wellness
    {"code": "L1", "name": "EAP Access Request Form", "category": "Wellness", "format": "Request", "approval": "HR"},
    {"code": "L2", "name": "Health Screening Enrollment", "category": "Wellness", "format": "Enrollment", "approval": "Medical Team"},
    {"code": "L3", "name": "Wellness Program Feedback", "category": "Wellness", "format": "Feedback", "approval": "Wellness Committee"},
    
    # Technology & Security
    {"code": "K1", "name": "IT Access Request Form", "category": "IT", "format": "Request", "approval": "IT Manager"},
    {"code": "K2", "name": "Device Allocation Form", "category": "IT", "format": "Allocation", "approval": "IT"},
    {"code": "K3", "name": "Password Reset Request", "category": "IT", "format": "Request", "approval": "IT Helpdesk"},
    {"code": "K4", "name": "Cybersecurity Incident Report", "category": "IT", "format": "Incident Report", "approval": "IT Security"},
    {"code": "K5", "name": "Remote Work Agreement", "category": "IT", "format": "Agreement", "approval": "Manager"},
    
    # Miscellaneous
    {"code": "C1", "name": "ID Card Application Form", "category": "Admin", "format": "Application", "approval": "HR"},
    {"code": "C2", "name": "Uniform Request Form", "category": "Admin", "format": "Request", "approval": "Admin"},
    {"code": "C3", "name": "Biometric Enrollment Form", "category": "Admin", "format": "Enrollment", "approval": "HR"},
    {"code": "C4", "name": "Confidentiality Agreement", "category": "Legal", "format": "Agreement", "approval": "Legal/HR"},
    {"code": "C5", "name": "Code of Conduct Acknowledgment", "category": "Compliance", "format": "Acknowledgment", "approval": "HR"},
    
    # Additional Forms
    {"code": "X1", "name": "Transfer Request Form", "category": "HR", "format": "Request", "approval": "Department Heads"},
    {"code": "X2", "name": "Deputation Request Form", "category": "HR", "format": "Request", "approval": "Management"},
    {"code": "X3", "name": "Work from Home Request", "category": "HR", "format": "Request", "approval": "Manager"},
    {"code": "X4", "name": "Shift Change Request", "category": "Operations", "format": "Request", "approval": "Operations Manager"},
    {"code": "X5", "name": "Employee Data Update Form", "category": "HR", "format": "Update", "approval": "HR"},
    {"code": "X6", "name": "Emergency Contact Update", "category": "HR", "format": "Update", "approval": "HR"},
    {"code": "X7", "name": "Nomination Form (PF/Gratuity)", "category": "Payroll", "format": "Nomination", "approval": "HR"},
    {"code": "X8", "name": "Loan Request Form", "category": "Finance", "format": "Request", "approval": "Finance Manager"},
    {"code": "X9", "name": "Advance Salary Request", "category": "Payroll", "format": "Request", "approval": "Finance"},
    {"code": "X10", "name": "Transport Facility Request", "category": "Admin", "format": "Request", "approval": "Admin Manager"}
]

# HR Ready Reckoner Tools
HR_TOOLS = [
    {
        "id": "leave-calculator",
        "name": "Leave Balance Calculator",
        "description": "Calculate available leave balance, accruals, and eligibility",
        "icon": "calendar",
        "color": "blue",
        "inputs": ["Employee Type", "Joining Date", "Leaves Taken", "Leave Type"],
        "outputs": ["Available Balance", "Next Accrual Date", "Encashment Eligible"]
    },
    {
        "id": "overtime-calculator",
        "name": "Overtime Calculator",
        "description": "Calculate overtime hours and compensation",
        "icon": "clock",
        "color": "green",
        "inputs": ["Basic Salary", "Overtime Hours", "Day Type (Weekday/Weekend/Holiday)"],
        "outputs": ["Overtime Amount", "Total Compensation", "Tax Implications"]
    },
    {
        "id": "increment-calculator",
        "name": "Salary Increment Calculator",
        "description": "Calculate salary increments and revised CTC",
        "icon": "trending-up",
        "color": "emerald",
        "inputs": ["Current CTC", "Increment Percentage", "Effective Date"],
        "outputs": ["New CTC", "Monthly Increase", "Annual Increase"]
    },
    {
        "id": "pf-esi-calculator",
        "name": "PF/ESI Calculator",
        "description": "Calculate PF and ESI contributions",
        "icon": "piggy-bank",
        "color": "purple",
        "inputs": ["Basic Salary", "DA", "Employee Type"],
        "outputs": ["Employee PF", "Employer PF", "ESI Contribution"]
    },
    {
        "id": "notice-calculator",
        "name": "Notice Period Calculator",
        "description": "Calculate notice period and last working day",
        "icon": "bell",
        "color": "orange",
        "inputs": ["Resignation Date", "Notice Period Days", "Leave Balance"],
        "outputs": ["Last Working Day", "Notice Buyout Amount", "Shortfall Days"]
    },
    {
        "id": "fnf-calculator",
        "name": "Full & Final Settlement Calculator",
        "description": "Calculate F&F settlement amount",
        "icon": "calculator",
        "color": "red",
        "inputs": ["Last Working Day", "Pending Salary", "Leave Balance", "Bonus", "Deductions"],
        "outputs": ["Total Payable", "Deductions", "Net Settlement Amount"]
    },
    {
        "id": "attendance-regularization",
        "name": "Attendance Regularization Tool",
        "description": "Track and regularize attendance discrepancies",
        "icon": "user-check",
        "color": "teal",
        "inputs": ["Employee ID", "Date", "Actual In-Out Time", "Reason"],
        "outputs": ["Regularization Status", "Approval Required", "Impact on Salary"]
    },
    {
        "id": "training-tracker",
        "name": "Training Hours Tracker",
        "description": "Track mandatory and optional training hours",
        "icon": "book-open",
        "color": "indigo",
        "inputs": ["Employee ID", "Training Type", "Duration", "Completion Date"],
        "outputs": ["Total Hours Completed", "Pending Hours", "Certification Status"]
    },
    {
        "id": "performance-calculator",
        "name": "Performance Score Calculator",
        "description": "Calculate overall performance score and rating",
        "icon": "star",
        "color": "yellow",
        "inputs": ["KPI Scores", "Weightages", "Peer Feedback", "Manager Rating"],
        "outputs": ["Overall Score", "Performance Band", "Eligible for Promotion"]
    },
    {
        "id": "probation-tracker",
        "name": "Probation Period Tracker",
        "description": "Track probation status and confirmation eligibility",
        "icon": "timer",
        "color": "pink",
        "inputs": ["Joining Date", "Probation Duration", "Performance Score"],
        "outputs": ["Days Remaining", "Confirmation Date", "Extension Required"]
    },
    {
        "id": "appraisal-eligibility",
        "name": "Appraisal Eligibility Checker",
        "description": "Check eligibility for annual appraisal",
        "icon": "check-circle",
        "color": "cyan",
        "inputs": ["Joining Date", "Last Appraisal Date", "Performance Rating"],
        "outputs": ["Eligible", "Eligible From Date", "Expected Increment Range"]
    },
    {
        "id": "leave-encashment",
        "name": "Leave Encashment Calculator",
        "description": "Calculate leave encashment amount",
        "icon": "banknote",
        "color": "lime",
        "inputs": ["Leave Balance", "Basic Salary", "Encashment Type"],
        "outputs": ["Encashable Leaves", "Gross Amount", "Net Amount After Tax"]
    }
]
