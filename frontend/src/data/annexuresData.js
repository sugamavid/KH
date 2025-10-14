// Administrative Annexures Data Structure
// Modeled after By-Laws and SOPs format for consistency

export const annexuresData = {
  preamble: {
    title: 'Preamble',
    content: `These Administrative Annexures constitute the official forms, templates, and administrative documents of Koyili Hospital Human Resources Department. They are designed to ensure standardized processes, legal compliance, and operational efficiency across all HR functions.

All forms and templates contained herein are approved by the Board of Directors and are binding upon all employees, departments, and stakeholders of Koyili Hospital. These annexures shall be used in conjunction with the Hospital By-Laws and Standard Operating Procedures (SOPs).

The forms are categorized for ease of reference and are regularly reviewed and updated to reflect current legal requirements, best practices, and organizational needs. All completed forms must be submitted through proper channels and maintained as per the Hospital's document retention policy.`,
    effectiveDate: '01 January 2024',
    version: '1.0',
    searchTerms: ['introduction', 'overview', 'purpose', 'forms', 'templates'],
  },

  // SECTION A: RECRUITMENT & ONBOARDING
  annexureA1: {
    number: 'ANNEXURE A-1',
    title: 'Employment Application Form',
    category: 'Recruitment',
    subsections: [
      {
        number: 'A-1.1',
        title: 'Purpose',
        content: 'This form is to be completed by all candidates applying for employment at Koyili Hospital. It serves as the primary document for collecting essential information about the applicant and forms the basis for the recruitment process.',
      },
      {
        number: 'A-1.2',
        title: 'Instructions for Completion',
        points: [
          'Complete all sections in BLOCK LETTERS or type',
          'Attach recent passport-size photograph',
          'Provide accurate and verifiable information',
          'Submit along with copies of educational certificates, experience letters, and ID proof',
          'Sign and date the form in the designated section',
          'Incomplete forms will not be processed',
        ],
      },
      {
        number: 'A-1.3',
        title: 'Form Sections',
        content: 'The application form is divided into the following sections:',
        table: {
          headers: ['Section', 'Details Required', 'Mandatory'],
          rows: [
            ['Personal Information', 'Name, Date of Birth, Contact Details, Address', 'Yes'],
            ['Educational Qualifications', 'Academic credentials with marks/grades', 'Yes'],
            ['Professional Experience', 'Previous employment details with dates', 'Yes'],
            ['Skills & Competencies', 'Technical and soft skills relevant to position', 'Yes'],
            ['References', 'Two professional references with contact information', 'Yes'],
            ['Declarations', 'Acknowledgment of accuracy and consent', 'Yes'],
          ],
        },
      },
      {
        number: 'A-1.4',
        title: 'Submission Process',
        points: [
          'Submit completed form to HR Department or upload through recruitment portal',
          'Acknowledgment receipt will be provided upon submission',
          'Applications are valid for the specific position applied',
          'Retain a copy for your records',
        ],
      },
    ],
    searchTerms: ['employment', 'application', 'job', 'recruitment', 'hiring', 'candidate'],
  },

  annexureA2: {
    number: 'ANNEXURE A-2',
    title: 'Offer Letter Template',
    category: 'Recruitment',
    subsections: [
      {
        number: 'A-2.1',
        title: 'Purpose',
        content: 'This template is used by the HR Department to extend formal offers of employment to selected candidates. It outlines the terms and conditions of employment, compensation, and joining formalities.',
      },
      {
        number: 'A-2.2',
        title: 'Contents of Offer Letter',
        points: [
          'Position title and department',
          'Date of joining and reporting location',
          'Compensation structure (basic salary, allowances, benefits)',
          'Probation period duration and terms',
          'Working hours and schedule',
          'Terms of employment (permanent/contractual)',
          'Acceptance timeline and procedure',
          'Documents required at joining',
        ],
      },
      {
        number: 'A-2.3',
        title: 'Candidate Response',
        content: 'The candidate must accept or decline the offer within the specified timeline. Acceptance must be in writing (email or physical letter) and include acknowledgment of all terms and conditions.',
      },
    ],
    searchTerms: ['offer', 'letter', 'employment', 'joining', 'appointment'],
  },

  annexureA3: {
    number: 'ANNEXURE A-3',
    title: 'Joining Form & Document Checklist',
    category: 'Recruitment',
    subsections: [
      {
        number: 'A-3.1',
        title: 'Purpose',
        content: 'This form must be completed on the first day of employment. It ensures all necessary documents are collected and employee information is recorded in the HRIS.',
      },
      {
        number: 'A-3.2',
        title: 'Document Checklist',
        content: 'New employees must submit the following documents:',
        points: [
          'Two passport-size photographs',
          'Copy of Aadhaar Card / PAN Card / Voter ID',
          'Educational certificates (original for verification)',
          'Experience letters from previous employers',
          'Relieving letter from last employer',
          'Medical fitness certificate',
          'Proof of address (utility bill / rental agreement)',
          'Bank account details and cancelled cheque',
          'Emergency contact information',
          'Nominee details for insurance and provident fund',
        ],
      },
      {
        number: 'A-3.3',
        title: 'Induction Process',
        content: 'Upon submission of documents, new employees will undergo hospital induction covering policies, safety procedures, IT systems access, and department-specific orientation.',
      },
    ],
    searchTerms: ['joining', 'onboarding', 'documents', 'checklist', 'induction'],
  },

  annexureA4: {
    number: 'ANNEXURE A-4',
    title: 'Background Verification Consent Form',
    category: 'Recruitment',
    subsections: [
      {
        number: 'A-4.1',
        title: 'Purpose',
        content: 'This form obtains the candidate\'s consent for conducting background verification checks including employment history, educational credentials, criminal records, and reference checks.',
      },
      {
        number: 'A-4.2',
        title: 'Scope of Verification',
        points: [
          'Identity verification',
          'Educational qualification verification',
          'Employment history verification',
          'Criminal background check',
          'Address verification',
          'Professional reference checks',
        ],
      },
      {
        number: 'A-4.3',
        title: 'Confidentiality',
        content: 'All information collected during background verification is treated as strictly confidential and used solely for employment purposes. Results are shared only with authorized personnel.',
      },
    ],
    searchTerms: ['background', 'verification', 'consent', 'check', 'screening'],
  },

  // SECTION B: LEAVE MANAGEMENT
  annexureB1: {
    number: 'ANNEXURE B-1',
    title: 'Leave Application Form',
    category: 'Leave Management',
    subsections: [
      {
        number: 'B-1.1',
        title: 'Purpose',
        content: 'This form is used by employees to apply for all types of leave including casual leave, earned leave, sick leave, and other special leaves as per hospital policy.',
      },
      {
        number: 'B-1.2',
        title: 'Application Process',
        points: [
          'Submit application at least 7 days in advance for planned leaves',
          'For emergency/sick leave, inform supervisor immediately and submit form within 24 hours',
          'Specify type of leave, duration, and reason',
          'Provide contact information during leave period',
          'Attach supporting documents if required (medical certificate for sick leave)',
          'Obtain supervisor approval before proceeding on leave',
        ],
      },
      {
        number: 'B-1.3',
        title: 'Approval Hierarchy',
        content: 'Leave applications are approved as follows:',
        table: {
          headers: ['Duration', 'Approving Authority', 'Processing Time'],
          rows: [
            ['1-3 days', 'Reporting Manager', '24 hours'],
            ['4-7 days', 'Department Head', '48 hours'],
            ['8-15 days', 'Department Head + HR Manager', '3-5 days'],
            ['> 15 days', 'Department Head + HR Director', '5-7 days'],
          ],
        },
      },
    ],
    searchTerms: ['leave', 'application', 'vacation', 'absence', 'time off'],
  },

  annexureB2: {
    number: 'ANNEXURE B-2',
    title: 'Medical Certificate Format',
    category: 'Leave Management',
    subsections: [
      {
        number: 'B-2.1',
        title: 'Purpose',
        content: 'Medical certificates must be submitted for sick leave exceeding 2 consecutive days. The certificate should be from a registered medical practitioner.',
      },
      {
        number: 'B-2.2',
        title: 'Required Information',
        points: [
          'Patient name and employee ID',
          'Date of examination',
          'Diagnosis (brief)',
          'Recommended rest period',
          'Doctor\'s name, qualification, and registration number',
          'Doctor\'s signature and stamp',
          'Hospital/Clinic name and contact information',
        ],
      },
      {
        number: 'B-2.3',
        title: 'Submission',
        content: 'Medical certificates must be submitted to HR Department within 48 hours of resuming work. Failure to submit may result in leave being treated as unpaid.',
      },
    ],
    searchTerms: ['medical', 'certificate', 'sick', 'leave', 'doctor', 'illness'],
  },

  annexureB3: {
    number: 'ANNEXURE B-3',
    title: 'Leave Encashment Request Form',
    category: 'Leave Management',
    subsections: [
      {
        number: 'B-3.1',
        title: 'Purpose',
        content: 'This form enables eligible employees to encash accumulated leave balance as per hospital policy. Only earned leave can be encashed subject to minimum service requirements.',
      },
      {
        number: 'B-3.2',
        title: 'Eligibility Criteria',
        points: [
          'Minimum 1 year of continuous service',
          'Maximum leave balance must exceed minimum required balance',
          'Only earned leave (EL) is eligible for encashment',
          'Encashment allowed once per year',
          'Not applicable during notice period',
        ],
      },
      {
        number: 'B-3.3',
        title: 'Calculation',
        content: 'Leave encashment is calculated as: (Number of days encashed × Daily salary). The amount will be processed through payroll in the following month.',
      },
    ],
    searchTerms: ['leave', 'encashment', 'cash', 'balance', 'earned leave'],
  },

  // SECTION C: PERFORMANCE MANAGEMENT
  annexureC1: {
    number: 'ANNEXURE C-1',
    title: 'Performance Appraisal Form',
    category: 'Performance',
    subsections: [
      {
        number: 'C-1.1',
        title: 'Purpose',
        content: 'This form is used for annual performance evaluation of all employees. It assesses performance against defined objectives, competencies, and behavioral standards.',
      },
      {
        number: 'C-1.2',
        title: 'Evaluation Criteria',
        content: 'Performance is evaluated on the following parameters:',
        table: {
          headers: ['Parameter', 'Weightage', 'Description'],
          rows: [
            ['Goal Achievement', '40%', 'Achievement of annual objectives and KPIs'],
            ['Job Knowledge & Skills', '25%', 'Technical competence and expertise'],
            ['Quality of Work', '15%', 'Accuracy, thoroughness, and attention to detail'],
            ['Initiative & Innovation', '10%', 'Proactive approach and creative solutions'],
            ['Teamwork & Collaboration', '10%', 'Cooperation and support to colleagues'],
          ],
        },
      },
      {
        number: 'C-1.3',
        title: 'Rating Scale',
        points: [
          '5 - Outstanding: Consistently exceeds expectations',
          '4 - Exceeds Expectations: Frequently exceeds expectations',
          '3 - Meets Expectations: Fully meets job requirements',
          '2 - Needs Improvement: Performance below expectations',
          '1 - Unsatisfactory: Significant performance gaps',
        ],
      },
      {
        number: 'C-1.4',
        title: 'Review Process',
        content: 'Self-assessment by employee → Evaluation by reporting manager → Review by department head → Discussion meeting → Final rating → HR approval',
      },
    ],
    searchTerms: ['performance', 'appraisal', 'review', 'evaluation', 'assessment', 'rating'],
  },

  annexureC2: {
    number: 'ANNEXURE C-2',
    title: 'Goal Setting Worksheet',
    category: 'Performance',
    subsections: [
      {
        number: 'C-2.1',
        title: 'Purpose',
        content: 'This worksheet is used at the beginning of each performance cycle to set SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals for employees.',
      },
      {
        number: 'C-2.2',
        title: 'Goal Categories',
        points: [
          'Operational Goals: Related to daily job responsibilities',
          'Strategic Goals: Aligned with department/hospital objectives',
          'Development Goals: Personal and professional growth',
          'Quality Goals: Improvement in service delivery',
          'Innovation Goals: Process improvements and initiatives',
        ],
      },
      {
        number: 'C-2.3',
        title: 'Goal Documentation',
        content: 'Each goal must include: Clear objective statement, measurable success criteria, timeline for achievement, resources required, and potential challenges.',
      },
    ],
    searchTerms: ['goal', 'setting', 'objectives', 'KPI', 'targets', 'SMART'],
  },

  annexureC3: {
    number: 'ANNEXURE C-3',
    title: 'Performance Improvement Plan (PIP) Template',
    category: 'Performance',
    subsections: [
      {
        number: 'C-3.1',
        title: 'Purpose',
        content: 'This template is used when an employee\'s performance falls below acceptable standards. It outlines specific improvement areas, support measures, and expected outcomes.',
      },
      {
        number: 'C-3.2',
        title: 'PIP Components',
        points: [
          'Performance gaps identified with specific examples',
          'Expected performance standards and behaviors',
          'Action plan with specific steps and milestones',
          'Support and resources to be provided',
          'Timeline for improvement (typically 30-90 days)',
          'Review checkpoints and progress monitoring',
          'Consequences if improvement not achieved',
        ],
      },
      {
        number: 'C-3.3',
        title: 'Monitoring',
        content: 'Weekly meetings between employee and manager to review progress. HR involvement throughout the PIP period. Final assessment at end of PIP period determines next steps.',
      },
    ],
    searchTerms: ['PIP', 'improvement', 'plan', 'performance', 'underperformance'],
  },

  // SECTION D: TRAINING & DEVELOPMENT
  annexureD1: {
    number: 'ANNEXURE D-1',
    title: 'Training Nomination Form',
    category: 'Training',
    subsections: [
      {
        number: 'D-1.1',
        title: 'Purpose',
        content: 'This form is used to nominate employees for internal or external training programs. It ensures training aligns with employee development needs and organizational objectives.',
      },
      {
        number: 'D-1.2',
        title: 'Information Required',
        points: [
          'Employee details and current role',
          'Training program name and provider',
          'Training objectives and expected outcomes',
          'Duration, dates, and location',
          'Cost details (if external)',
          'Justification for training need',
          'Manager recommendation and approval',
        ],
      },
      {
        number: 'D-1.3',
        title: 'Approval Process',
        content: 'Department Head approval → HR Training Team review → Budget approval (if required) → Final confirmation to employee',
      },
    ],
    searchTerms: ['training', 'nomination', 'development', 'learning', 'workshop', 'course'],
  },

  annexureD2: {
    number: 'ANNEXURE D-2',
    title: 'Training Feedback & Evaluation Form',
    category: 'Training',
    subsections: [
      {
        number: 'D-2.1',
        title: 'Purpose',
        content: 'This form collects feedback from participants after completing a training program. It assesses training effectiveness, content quality, and applicability.',
      },
      {
        number: 'D-2.2',
        title: 'Evaluation Criteria',
        content: 'Training is evaluated on:',
        points: [
          'Relevance of content to job role',
          'Quality of training material and delivery',
          'Trainer knowledge and effectiveness',
          'Achievement of learning objectives',
          'Practical applicability of concepts',
          'Overall satisfaction and recommendations',
        ],
      },
    ],
    searchTerms: ['training', 'feedback', 'evaluation', 'assessment'],
  },

  // SECTION E: EMPLOYEE INFORMATION
  annexureE1: {
    number: 'ANNEXURE E-1',
    title: 'Personal Information Update Form',
    category: 'Employee Records',
    subsections: [
      {
        number: 'E-1.1',
        title: 'Purpose',
        content: 'This form enables employees to update their personal information in the HRIS. Employees must notify HR of any changes within 7 days.',
      },
      {
        number: 'E-1.2',
        title: 'Updatable Information',
        points: [
          'Contact details (phone, email, address)',
          'Emergency contact information',
          'Marital status',
          'Number of dependents',
          'Bank account details',
          'Nominee for insurance and PF',
        ],
      },
      {
        number: 'E-1.3',
        title: 'Documentation',
        content: 'Supporting documents must be attached for verification (address proof, bank statement, marriage certificate, etc.)',
      },
    ],
    searchTerms: ['personal', 'information', 'update', 'change', 'details'],
  },

  // SECTION F: SEPARATION & EXIT
  annexureF1: {
    number: 'ANNEXURE F-1',
    title: 'Resignation Letter Format',
    category: 'Separation',
    subsections: [
      {
        number: 'F-1.1',
        title: 'Purpose',
        content: 'This format must be followed by employees wishing to resign from their position. The resignation must be submitted in writing as per notice period requirements.',
      },
      {
        number: 'F-1.2',
        title: 'Contents',
        points: [
          'Date of submission',
          'Addressee (reporting manager and HR)',
          'Statement of resignation',
          'Last working date (per notice period)',
          'Brief reason for leaving (optional)',
          'Expression of gratitude',
          'Offer to assist with transition',
          'Employee signature',
        ],
      },
      {
        number: 'F-1.3',
        title: 'Notice Period',
        content: 'As per employment contract and hospital policy. Typically ranges from 30-90 days depending on position and seniority.',
      },
    ],
    searchTerms: ['resignation', 'letter', 'leaving', 'exit', 'notice'],
  },

  annexureF2: {
    number: 'ANNEXURE F-2',
    title: 'Exit Interview Questionnaire',
    category: 'Separation',
    subsections: [
      {
        number: 'F-2.1',
        title: 'Purpose',
        content: 'This questionnaire is completed during the exit interview to gather feedback about the employee\'s experience and identify areas for organizational improvement.',
      },
      {
        number: 'F-2.2',
        title: 'Topics Covered',
        points: [
          'Reason for leaving',
          'Job satisfaction and work environment',
          'Relationship with manager and colleagues',
          'Training and development opportunities',
          'Compensation and benefits',
          'Suggestions for improvement',
          'Likelihood to recommend hospital as employer',
        ],
      },
      {
        number: 'F-2.3',
        title: 'Confidentiality',
        content: 'All responses are treated confidentially and used for improvement purposes only. Aggregated data may be shared with management.',
      },
    ],
    searchTerms: ['exit', 'interview', 'questionnaire', 'feedback', 'separation'],
  },

  annexureF3: {
    number: 'ANNEXURE F-3',
    title: 'Full & Final Settlement Form',
    category: 'Separation',
    subsections: [
      {
        number: 'F-3.1',
        title: 'Purpose',
        content: 'This form is used to process the final settlement of an exiting employee, including pending salary, leave encashment, and recovery of dues.',
      },
      {
        number: 'F-3.2',
        title: 'Settlement Components',
        content: 'Final settlement includes:',
        table: {
          headers: ['Component', 'Description', 'Calculation'],
          rows: [
            ['Salary for worked days', 'Pro-rata salary till last working day', 'Days worked / Total days × Monthly salary'],
            ['Leave encashment', 'Unutilized earned leave balance', 'Leave days × Daily salary'],
            ['Notice pay', 'Payment in lieu if notice waived', 'Notice days × Daily salary'],
            ['Bonus/Incentives', 'Pro-rata annual bonus if applicable', 'As per policy'],
            ['Gratuity', 'If eligible (5+ years service)', 'As per Payment of Gratuity Act'],
            ['PF withdrawal', 'Employee PF accumulation', 'Total PF balance'],
            ['Recoveries', 'Outstanding dues, loans, advances', 'As applicable'],
          ],
        },
      },
      {
        number: 'F-3.3',
        title: 'Processing Timeline',
        content: 'Final settlement is processed within 45 days of last working day, subject to completion of exit formalities and clearance from all departments.',
      },
    ],
    searchTerms: ['settlement', 'final', 'clearance', 'exit', 'FnF'],
  },

  annexureF4: {
    number: 'ANNEXURE F-4',
    title: 'No Objection Certificate (NOC) Format',
    category: 'Separation',
    subsections: [
      {
        number: 'F-4.1',
        title: 'Purpose',
        content: 'This certificate is issued to employees who have completed exit formalities and have no pending dues with the hospital.',
      },
      {
        number: 'F-4.2',
        title: 'Certificate Contents',
        points: [
          'Employee name and designation',
          'Employment period',
          'Statement confirming completion of exit formalities',
          'Confirmation of no outstanding dues',
          'Authorized signatory details',
          'Hospital seal',
        ],
      },
    ],
    searchTerms: ['NOC', 'no objection', 'certificate', 'clearance'],
  },

  // SECTION G: DISCIPLINARY & COMPLIANCE
  annexureG1: {
    number: 'ANNEXURE G-1',
    title: 'Show Cause Notice Format',
    category: 'Disciplinary',
    subsections: [
      {
        number: 'G-1.1',
        title: 'Purpose',
        content: 'This notice is issued to an employee for alleged misconduct or violation of hospital policies. It requires the employee to explain their conduct.',
      },
      {
        number: 'G-1.2',
        title: 'Contents',
        points: [
          'Date of issuance',
          'Employee details',
          'Description of alleged misconduct with dates and specifics',
          'Applicable policy/rule violated',
          'Request for written explanation',
          'Deadline for response (typically 48-72 hours)',
          'Warning of potential consequences',
          'Authorized signatory',
        ],
      },
      {
        number: 'G-1.3',
        title: 'Employee Response',
        content: 'Employee must submit a written explanation within the specified time. Failure to respond may be considered as admission of charges.',
      },
    ],
    searchTerms: ['show cause', 'notice', 'disciplinary', 'misconduct', 'warning'],
  },

  annexureG2: {
    number: 'ANNEXURE G-2',
    title: 'Incident Report Form',
    category: 'Compliance',
    subsections: [
      {
        number: 'G-2.1',
        title: 'Purpose',
        content: 'This form is used to report any incident, accident, safety violation, or unusual occurrence in the workplace.',
      },
      {
        number: 'G-2.2',
        title: 'When to Report',
        points: [
          'Workplace accidents or injuries',
          'Near-miss incidents',
          'Safety hazards',
          'Equipment malfunction',
          'Security breaches',
          'Policy violations',
          'Patient complaints (if HR-related)',
        ],
      },
      {
        number: 'G-2.3',
        title: 'Reporting Timeline',
        content: 'All incidents must be reported within 24 hours of occurrence. Critical incidents must be reported immediately to supervisor and safety officer.',
      },
    ],
    searchTerms: ['incident', 'report', 'accident', 'safety', 'violation'],
  },

  annexureG3: {
    number: 'ANNEXURE G-3',
    title: 'Grievance Complaint Form',
    category: 'Compliance',
    subsections: [
      {
        number: 'G-3.1',
        title: 'Purpose',
        content: 'This form enables employees to formally register grievances related to workplace issues, harassment, discrimination, or violation of their rights.',
      },
      {
        number: 'G-3.2',
        title: 'Complaint Process',
        points: [
          'Describe the grievance in detail with dates and witnesses',
          'Provide supporting evidence if available',
          'Submit to HR Grievance Cell or designated officer',
          'Complaint will be acknowledged within 48 hours',
          'Investigation conducted maintaining confidentiality',
          'Resolution communicated within 15 days',
          'Appeal process available if not satisfied',
        ],
      },
      {
        number: 'G-3.3',
        title: 'Confidentiality & Non-Retaliation',
        content: 'All grievances are handled confidentially. Hospital prohibits any form of retaliation against employees who raise genuine concerns.',
      },
    ],
    searchTerms: ['grievance', 'complaint', 'harassment', 'discrimination', 'issue'],
  },

  // SECTION H: CERTIFICATES & LETTERS
  annexureH1: {
    number: 'ANNEXURE H-1',
    title: 'Experience Certificate Format',
    category: 'Certificates',
    subsections: [
      {
        number: 'H-1.1',
        title: 'Purpose',
        content: 'This certificate is issued to employees upon successful completion of their tenure, certifying their employment period, designation, and conduct.',
      },
      {
        number: 'H-1.2',
        title: 'Certificate Contents',
        points: [
          'Employee name',
          'Designation and department',
          'Period of employment (joining and leaving dates)',
          'Brief description of roles and responsibilities',
          'Statement of satisfactory conduct (if applicable)',
          'Authorized signatory with designation',
          'Hospital seal and letterhead',
        ],
      },
      {
        number: 'H-1.3',
        title: 'Issuance',
        content: 'Certificate is issued after completion of exit formalities and full & final settlement. Processing time: 7-10 working days from request.',
      },
    ],
    searchTerms: ['experience', 'certificate', 'employment', 'service'],
  },

  annexureH2: {
    number: 'ANNEXURE H-2',
    title: 'Salary Certificate Format',
    category: 'Certificates',
    subsections: [
      {
        number: 'H-2.1',
        title: 'Purpose',
        content: 'This certificate provides details of employee\'s salary structure and is typically required for loan applications, visa processing, or other official purposes.',
      },
      {
        number: 'H-2.2',
        title: 'Information Included',
        points: [
          'Employee name and designation',
          'Employee ID',
          'Date of joining',
          'Current CTC (Cost to Company)',
          'Salary breakup (basic, allowances)',
          'Monthly gross and net salary',
          'Purpose of certificate (if specified)',
          'Valid as on date',
        ],
      },
      {
        number: 'H-2.3',
        title: 'Request Process',
        content: 'Employees can request salary certificate through HR portal or written application. Issued within 3 working days. One certificate free per year, nominal charge for additional copies.',
      },
    ],
    searchTerms: ['salary', 'certificate', 'compensation', 'pay', 'income'],
  },

  annexureH3: {
    number: 'ANNEXURE H-3',
    title: 'Relieving Letter Format',
    category: 'Certificates',
    subsections: [
      {
        number: 'H-3.1',
        title: 'Purpose',
        content: 'This letter confirms that the employee has been relieved from their duties and is no longer on the hospital\'s rolls.',
      },
      {
        number: 'H-3.2',
        title: 'Letter Contents',
        points: [
          'Employee name and designation',
          'Last working date',
          'Statement confirming relieving',
          'Confirmation of handover completion',
          'Statement on dues clearance (if applicable)',
          'Wishes for future endeavors',
          'Authorized signature and hospital seal',
        ],
      },
    ],
    searchTerms: ['relieving', 'letter', 'separation', 'exit'],
  },

  // SECTION I: OPERATIONAL FORMS
  annexureI1: {
    number: 'ANNEXURE I-1',
    title: 'Overtime Authorization Form',
    category: 'Operations',
    subsections: [
      {
        number: 'I-1.1',
        title: 'Purpose',
        content: 'This form is used to request and approve overtime work. Overtime must be pre-approved except in emergency situations.',
      },
      {
        number: 'I-1.2',
        title: 'Authorization Process',
        points: [
          'Employee/Manager initiates request specifying date, hours, and reason',
          'Department Head approves based on workload and budget',
          'HR validates against policy limits',
          'Approved overtime recorded in attendance system',
          'Compensation as per policy (overtime pay or compensatory off)',
        ],
      },
    ],
    searchTerms: ['overtime', 'authorization', 'extra', 'hours', 'compensation'],
  },

  annexureI2: {
    number: 'ANNEXURE I-2',
    title: 'Transfer Request Form',
    category: 'Operations',
    subsections: [
      {
        number: 'I-1.1',
        title: 'Purpose',
        content: 'This form enables employees to request transfer to another department, location, or shift within the hospital.',
      },
      {
        number: 'I-2.2',
        title: 'Transfer Types',
        points: [
          'Inter-department transfer',
          'Location transfer (if multiple branches)',
          'Shift change',
          'Role change within department',
        ],
      },
      {
        number: 'I-2.3',
        title: 'Approval Requirements',
        content: 'Current department head approval → Receiving department head approval → HR review → Final approval. Transfer effective from specified date with proper handover.',
      },
    ],
    searchTerms: ['transfer', 'request', 'change', 'movement', 'relocation'],
  },

  annexureI3: {
    number: 'ANNEXURE I-3',
    title: 'Equipment Handover Form',
    category: 'Operations',
    subsections: [
      {
        number: 'I-3.1',
        title: 'Purpose',
        content: 'This form records the issuance and return of hospital equipment, devices, or assets to employees.',
      },
      {
        number: 'I-3.2',
        title: 'Covered Items',
        points: [
          'Laptops and computers',
          'Mobile phones and tablets',
          'ID cards and access cards',
          'Uniforms and PPE',
          'Medical equipment (if applicable)',
          'Keys and locks',
          'Any other hospital property',
        ],
      },
      {
        number: 'I-3.3',
        title: 'Responsibilities',
        content: 'Employee is responsible for safekeeping and proper use of issued items. Damage or loss must be reported immediately. All items must be returned in good condition during exit.',
      },
    ],
    searchTerms: ['equipment', 'handover', 'asset', 'issuance', 'return'],
  },
};

// Quick reference data
export const annexuresQuickRef = {
  recruitment: {
    title: 'Recruitment Process Forms',
    steps: [
      'Employment Application Form (A-1)',
      'Offer Letter Template (A-2)',
      'Joining Form & Checklist (A-3)',
      'Background Verification Consent (A-4)',
    ],
  },
  performance: {
    title: 'Performance Management Forms',
    steps: [
      'Performance Appraisal Form (C-1)',
      'Goal Setting Worksheet (C-2)',
      'Performance Improvement Plan (C-3)',
    ],
  },
  separation: {
    title: 'Exit Process Forms',
    steps: [
      'Resignation Letter (F-1)',
      'Exit Interview Questionnaire (F-2)',
      'Full & Final Settlement (F-3)',
      'No Objection Certificate (F-4)',
    ],
  },
};

export default annexuresData;
