// Standard Operating Procedures Data
export const sopsData = {
  preamble: {
    id: 'preamble',
    title: 'PREAMBLE',
    searchTerms: ['preamble', 'introduction', 'purpose'],
    content: `These Standard Operating Procedures (SOPs) are established to ensure consistent, efficient, and compliant HR operations at Koyili Hospital. These procedures complement the HR By-Laws and provide step-by-step guidance for various HR processes. All HR personnel and relevant stakeholders must adhere to these procedures to maintain operational excellence and regulatory compliance.`
  },
  sop1: {
    id: 'sop1',
    number: 'SOP 001',
    title: 'Employee Onboarding Process',
    searchTerms: ['onboarding', 'joining', 'new employee', 'induction'],
    category: 'Recruitment & Onboarding',
    subsections: [
      {
        number: '1.1',
        title: 'Pre-Joining Activities',
        content: 'Activities to be completed before employee joining date:',
        points: [
          'Send appointment letter and obtain signed acceptance.',
          'Request pre-employment documents (ID proof, education certificates, previous employment records).',
          'Conduct background verification and reference checks.',
          'Prepare employee file and assign employee ID.',
          'Coordinate with IT for system access and email creation.',
          'Arrange for workspace, equipment, and access cards.',
          'Schedule orientation program and assign buddy/mentor.'
        ]
      },
      {
        number: '1.2',
        title: 'Day 1 Activities',
        content: 'Activities on employee first day:',
        points: [
          'Welcome employee and provide induction kit.',
          'Complete documentation (Form I-9, tax forms, bank details, emergency contacts).',
          'Issue ID card, access card, and necessary equipment.',
          'Provide IT system access and credentials.',
          'Conduct facility tour and introduce to team.',
          'Review organizational structure and reporting relationships.',
          'Explain policies, code of conduct, and safety procedures.',
          'Assign initial training modules.'
        ]
      },
      {
        number: '1.3',
        title: 'First Week & Month',
        content: 'Ongoing onboarding activities:',
        points: [
          'Schedule meetings with key stakeholders.',
          'Complete mandatory training and compliance modules.',
          'Set initial goals and performance expectations.',
          'Regular check-ins with supervisor and HR.',
          'Gather feedback on onboarding experience.',
          'Review and confirm understanding of role responsibilities.',
          'End of probation evaluation planning.'
        ]
      }
    ]
  },
  sop2: {
    id: 'sop2',
    number: 'SOP 002',
    title: 'Leave Application and Approval',
    searchTerms: ['leave', 'vacation', 'time off', 'absence'],
    category: 'Leave Management',
    subsections: [
      {
        number: '2.1',
        title: 'Leave Application Process',
        content: 'Steps for applying leave:',
        points: [
          'Access leave management system with employee credentials.',
          'Select leave type (Casual, Sick, Annual, etc.).',
          'Specify leave dates and duration.',
          'Provide reason for leave.',
          'Attach supporting documents if required (medical certificate for sick leave >3 days).',
          'Submit application to immediate supervisor.',
          'Receive automated acknowledgment of submission.'
        ]
      },
      {
        number: '2.2',
        title: 'Approval Workflow',
        content: 'Leave approval process:',
        points: [
          'Supervisor reviews leave request within 24 hours.',
          'Check team coverage and operational requirements.',
          'Verify leave balance and eligibility.',
          'Approve or reject with comments.',
          'HR receives notification for record keeping.',
          'Employee notified of decision via email.',
          'Approved leave reflected in attendance system.'
        ]
      },
      {
        number: '2.3',
        title: 'Emergency Leave',
        content: 'Process for unplanned absence:',
        points: [
          'Inform supervisor via call/message as soon as possible.',
          'Submit leave application within 24 hours of return.',
          'Provide supporting documentation.',
          'Supervisor reviews and approves/rejects.',
          'Unauthorized absence treated as per disciplinary policy.'
        ]
      }
    ]
  },
  sop3: {
    id: 'sop3',
    number: 'SOP 003',
    title: 'Performance Appraisal Cycle',
    searchTerms: ['performance', 'appraisal', 'review', 'evaluation'],
    category: 'Performance Management',
    subsections: [
      {
        number: '3.1',
        title: 'Annual Appraisal Timeline',
        content: 'Key milestones in appraisal cycle:',
        points: [
          'January: Goal setting and KPI finalization for the year.',
          'June: Mid-year review and feedback session.',
          'December: Self-appraisal submission by employees.',
          'December-January: Supervisor assessment and rating.',
          'January-February: Appraisal discussions and feedback.',
          'February: HR consolidation and calibration.',
          'March: Communication of increments and promotions.'
        ]
      },
      {
        number: '3.2',
        title: 'Self-Appraisal Process',
        content: 'Employee self-assessment procedure:',
        points: [
          'Access performance management system.',
          'Review goals and KPIs set at beginning of year.',
          'Provide achievements and accomplishments against each goal.',
          'Rate own performance on competencies.',
          'Highlight major projects and contributions.',
          'Identify training and development needs.',
          'Submit by specified deadline.'
        ]
      },
      {
        number: '3.3',
        title: 'Supervisor Assessment',
        content: 'Manager evaluation process:',
        points: [
          'Review employee self-appraisal.',
          'Assess performance against KPIs and competencies.',
          'Gather 360-degree feedback from peers and stakeholders.',
          'Rate employee on predefined scale.',
          'Provide constructive feedback and comments.',
          'Identify strengths and areas for improvement.',
          'Recommend increment, promotion, or development plan.'
        ]
      }
    ]
  },
  sop4: {
    id: 'sop4',
    number: 'SOP 004',
    title: 'Payroll Processing',
    searchTerms: ['payroll', 'salary', 'compensation', 'wages'],
    category: 'Payroll Management',
    subsections: [
      {
        number: '4.1',
        title: 'Monthly Payroll Cycle',
        content: 'Steps for processing monthly payroll:',
        points: [
          'Day 1-5: Collect attendance data from biometric system.',
          'Day 5-10: Process leave applications and adjustments.',
          'Day 10-15: Calculate overtime, incentives, and reimbursements.',
          'Day 15-20: Process statutory deductions (PF, TDS, professional tax).',
          'Day 20-23: Generate salary slips and obtain approvals.',
          'Day 23-25: Process salary transfer to employee bank accounts.',
          'Day 25-28: Distribute salary slips and address queries.',
          'Day 28-30: Submit statutory returns and maintain records.'
        ]
      },
      {
        number: '4.2',
        title: 'Salary Components Calculation',
        content: 'Method for calculating salary components:',
        points: [
          'Basic Salary: As per appointment letter.',
          'HRA: 40% of basic salary.',
          'Dearness Allowance: 20% of basic salary.',
          'Other Allowances: As per grade and policy.',
          'Gross Salary: Sum of all earnings.',
          'PF Deduction: 12% of basic salary.',
          'TDS: As per Income Tax slab.',
          'Net Salary: Gross minus all deductions.'
        ]
      }
    ]
  },
  sop5: {
    id: 'sop5',
    number: 'SOP 005',
    title: 'Grievance Handling',
    searchTerms: ['grievance', 'complaint', 'issue', 'concern'],
    category: 'Employee Relations',
    subsections: [
      {
        number: '5.1',
        title: 'Grievance Registration',
        content: 'Process for logging grievances:',
        points: [
          'Employee submits grievance in writing to HR or Grievance Officer.',
          'Use prescribed grievance form or email.',
          'Provide details: nature of grievance, persons involved, supporting evidence.',
          'HR acknowledges receipt within 3 working days.',
          'Grievance assigned unique reference number.',
          'Confidentiality maintained throughout process.'
        ]
      },
      {
        number: '5.2',
        title: 'Investigation Process',
        content: 'Steps for investigating grievance:',
        points: [
          'Grievance Officer reviews complaint and determines severity.',
          'Collect statements from complainant, respondent, and witnesses.',
          'Review relevant documents and evidence.',
          'Conduct fair and impartial investigation.',
          'Maintain documentation of all proceedings.',
          'Complete investigation within 30 days.',
          'Prepare investigation report with findings.'
        ]
      },
      {
        number: '5.3',
        title: 'Resolution and Follow-up',
        content: 'Closure of grievance:',
        points: [
          'Communicate findings and resolution to complainant.',
          'Take corrective action if grievance substantiated.',
          'Disciplinary action against respondent if required.',
          'Implement preventive measures to avoid recurrence.',
          'Document closure in grievance register.',
          'Follow up with complainant after 30 days.',
          'Monitor for any retaliation.'
        ]
      }
    ]
  },
  sop6: {
    id: 'sop6',
    number: 'SOP 006',
    title: 'Exit and Separation',
    searchTerms: ['exit', 'resignation', 'separation', 'termination', 'leaving'],
    category: 'Separation Management',
    subsections: [
      {
        number: '6.1',
        title: 'Resignation Process',
        content: 'Steps when employee resigns:',
        points: [
          'Employee submits written resignation to supervisor and HR.',
          'Resignation acknowledgment issued within 2 days.',
          'Notice period calculated as per appointment terms.',
          'Exit interview scheduled.',
          'Handover checklist prepared.',
          'Knowledge transfer plan initiated.',
          'Clearance process communicated to employee.'
        ]
      },
      {
        number: '6.2',
        title: 'Clearance Process',
        content: 'Exit formalities and clearance:',
        points: [
          'Employee completes handover to designated person.',
          'Returns all company property (ID card, laptop, keys, documents).',
          'Obtains clearance from all departments (IT, Admin, Accounts, Library).',
          'IT deactivates system access.',
          'HR conducts exit interview and collects feedback.',
          'Accounts calculates full and final settlement.',
          'Issue experience certificate and relieving letter.'
        ]
      },
      {
        number: '6.3',
        title: 'Final Settlement',
        content: 'Processing final dues:',
        points: [
          'Calculate salary for worked days in final month.',
          'Process leave encashment for unutilized leave.',
          'Calculate gratuity if applicable.',
          'Deduct notice period shortfall if applicable.',
          'Process PF transfer or withdrawal.',
          'Generate Form 16 for tax purposes.',
          'Transfer final settlement within 45 days of last working day.'
        ]
      }
    ]
  },
  sop7: {
    id: 'sop7',
    number: 'SOP 007',
    title: 'Training and Development',
    searchTerms: ['training', 'development', 'learning', 'education'],
    category: 'Learning & Development',
    subsections: [
      {
        number: '7.1',
        title: 'Training Need Identification',
        content: 'Identifying training requirements:',
        points: [
          'Annual training needs assessment based on performance appraisals.',
          'Supervisor recommendations for skill gaps.',
          'Employee requests for specific training.',
          'Mandatory compliance training requirements.',
          'New technology or process training.',
          'Consolidate all training needs by Q1.',
          'Prepare annual training calendar.'
        ]
      },
      {
        number: '7.2',
        title: 'Training Delivery',
        content: 'Conducting training programs:',
        points: [
          'Select internal trainers or external vendors.',
          'Schedule training with adequate notice to participants.',
          'Prepare training materials and resources.',
          'Conduct training as per schedule.',
          'Collect participant feedback.',
          'Conduct pre and post-training assessments.',
          'Maintain training attendance records.'
        ]
      }
    ]
  },
  sop8: {
    id: 'sop8',
    number: 'SOP 008',
    title: 'Attendance and Time Management',
    searchTerms: ['attendance', 'time', 'biometric', 'timesheet'],
    category: 'Time Management',
    subsections: [
      {
        number: '8.1',
        title: 'Attendance Recording',
        content: 'Daily attendance capture process:',
        points: [
          'Employees mark attendance using biometric system.',
          'Punch in at start of shift and punch out at end.',
          'System automatically records time.',
          'Late arrival flagged if after shift start time.',
          'Early departure requires supervisor approval.',
          'Missed punch requires manual attendance request.',
          'Supervisor approves manual attendance entries.'
        ]
      },
      {
        number: '8.2',
        title: 'Attendance Regularization',
        content: 'Correcting attendance discrepancies:',
        points: [
          'Employee identifies attendance discrepancy.',
          'Submit attendance regularization request with reason.',
          'Attach supporting documents if applicable.',
          'Supervisor reviews and approves/rejects.',
          'HR updates attendance record.',
          'Regularization must be done within 7 days.'
        ]
      }
    ]
  },
  sop9: {
    id: 'sop9',
    number: 'SOP 009',
    title: 'Recruitment and Selection',
    searchTerms: ['recruitment', 'hiring', 'selection', 'interview'],
    category: 'Recruitment',
    subsections: [
      {
        number: '9.1',
        title: 'Recruitment Requisition',
        content: 'Initiating hiring process:',
        points: [
          'Department Head submits manpower requisition form.',
          'Specify position, qualifications, experience, budget.',
          'HR reviews requisition and obtains management approval.',
          'HR prepares job description.',
          'Determine sourcing channels (job portals, referrals, campus hiring).',
          'Create and post job advertisement.',
          'Set timeline for recruitment process.'
        ]
      },
      {
        number: '9.2',
        title: 'Selection Process',
        content: 'Candidate evaluation steps:',
        points: [
          'Screen applications against job requirements.',
          'Shortlist candidates for interviews.',
          'Conduct initial HR screening interview.',
          'Technical interview by department panel.',
          'Final interview by senior management.',
          'Conduct reference checks for selected candidate.',
          'Prepare and issue offer letter.',
          'Initiate background verification.'
        ]
      }
    ]
  },
  sop10: {
    id: 'sop10',
    number: 'SOP 010',
    title: 'Document Management',
    searchTerms: ['documents', 'records', 'files', 'archival'],
    category: 'Administration',
    subsections: [
      {
        number: '10.1',
        title: 'Employee File Maintenance',
        content: 'Managing employee documents:',
        points: [
          'Create employee file upon joining.',
          'Maintain physical and digital copies.',
          'Store documents in secure location.',
          'Include: appointment letter, ID proofs, certificates, PF forms, appraisals.',
          'Update file with any new documents.',
          'Restrict access to authorized personnel only.',
          'Retain files for 7 years post separation.'
        ]
      }
    ]
  }
};

// Quick reference data
export const sopsQuickRef = {
  onboarding: ['Pre-joining prep', 'Day 1 activities', 'First week', 'Probation review'],
  leave: ['Apply in system', 'Supervisor approval', 'HR notification', 'Balance update'],
  payroll: ['Day 1-5: Attendance', 'Day 10-15: Calculations', 'Day 20-25: Processing', 'Day 25-30: Distribution'],
  exit: ['Resignation letter', 'Notice period', 'Handover', 'Clearance', 'Final settlement']
};
