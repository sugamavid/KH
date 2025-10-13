// Annexures Data - HR Forms and Templates
export const annexuresData = {
  preamble: {
    id: 'preamble',
    title: 'PREAMBLE',
    searchTerms: ['preamble', 'introduction', 'forms', 'templates'],
    content: `These Annexures contain standardized forms, templates, and documents used in HR operations at Koyili Hospital. All forms comply with legal requirements and organizational policies. Employees must use these official templates for consistency and compliance. Forms are available in both digital and printable formats.`
  },
  annex1: {
    id: 'annex1',
    number: 'ANNEXURE I',
    title: 'Employment Forms',
    searchTerms: ['employment', 'joining', 'appointment'],
    category: 'Recruitment & Onboarding',
    forms: [
      { name: 'Employment Application Form', code: 'EMP-001', description: 'Standard application form for job applicants' },
      { name: 'Offer Letter Template', code: 'EMP-002', description: 'Official offer letter format' },
      { name: 'Appointment Letter Template', code: 'EMP-003', description: 'Formal appointment letter' },
      { name: 'Employee Information Form', code: 'EMP-004', description: 'Personal and contact details' },
      { name: 'Emergency Contact Form', code: 'EMP-005', description: 'Emergency contact information' },
      { name: 'Bank Details Form', code: 'EMP-006', description: 'Salary account information' }
    ]
  },
  annex2: {
    id: 'annex2',
    number: 'ANNEXURE II',
    title: 'Leave Forms',
    searchTerms: ['leave', 'absence', 'vacation'],
    category: 'Leave Management',
    forms: [
      { name: 'Leave Application Form', code: 'LV-001', description: 'Standard leave application' },
      { name: 'Medical Certificate Format', code: 'LV-002', description: 'Required for sick leave >3 days' },
      { name: 'Leave Encashment Form', code: 'LV-003', description: 'Request for leave encashment' },
      { name: 'Compensatory Off Request', code: 'LV-004', description: 'Claim compensatory leave' },
      { name: 'Leave Cancellation Form', code: 'LV-005', description: 'Cancel approved leave' }
    ]
  },
  annex3: {
    id: 'annex3',
    number: 'ANNEXURE III',
    title: 'Attendance & Time',
    searchTerms: ['attendance', 'time', 'timesheet'],
    category: 'Time Management',
    forms: [
      { name: 'Attendance Regularization Form', code: 'ATT-001', description: 'Correct attendance discrepancies' },
      { name: 'Overtime Request Form', code: 'ATT-002', description: 'Request overtime approval' },
      { name: 'Shift Change Request', code: 'ATT-003', description: 'Request shift modification' },
      { name: 'Manual Attendance Entry', code: 'ATT-004', description: 'Manual punch entry' }
    ]
  },
  annex4: {
    id: 'annex4',
    number: 'ANNEXURE IV',
    title: 'Performance Forms',
    searchTerms: ['performance', 'appraisal', 'evaluation'],
    category: 'Performance Management',
    forms: [
      { name: 'Self-Appraisal Form', code: 'PERF-001', description: 'Annual self-assessment' },
      { name: 'Supervisor Assessment Form', code: 'PERF-002', description: 'Manager evaluation' },
      { name: 'Goal Setting Template', code: 'PERF-003', description: 'Annual goals and KPIs' },
      { name: 'Performance Improvement Plan', code: 'PERF-004', description: 'PIP documentation' },
      { name: '360 Degree Feedback Form', code: 'PERF-005', description: 'Peer and stakeholder feedback' }
    ]
  },
  annex5: {
    id: 'annex5',
    number: 'ANNEXURE V',
    title: 'Payroll & Benefits',
    searchTerms: ['payroll', 'salary', 'benefits', 'compensation'],
    category: 'Compensation',
    forms: [
      { name: 'Salary Advance Request', code: 'PAY-001', description: 'Request salary advance' },
      { name: 'Reimbursement Claim Form', code: 'PAY-002', description: 'Medical/travel reimbursement' },
      { name: 'Bonus Calculation Template', code: 'PAY-003', description: 'Performance bonus calculation' },
      { name: 'PF Withdrawal Form', code: 'PAY-004', description: 'Provident Fund withdrawal' },
      { name: 'Tax Declaration Form', code: 'PAY-005', description: 'Annual tax declaration' }
    ]
  },
  annex6: {
    id: 'annex6',
    number: 'ANNEXURE VI',
    title: 'Training & Development',
    searchTerms: ['training', 'development', 'education'],
    category: 'Learning',
    forms: [
      { name: 'Training Nomination Form', code: 'TRN-001', description: 'Nominate for training' },
      { name: 'Training Feedback Form', code: 'TRN-002', description: 'Post-training evaluation' },
      { name: 'Educational Assistance Request', code: 'TRN-003', description: 'Request for education support' },
      { name: 'Training Attendance Sheet', code: 'TRN-004', description: 'Training session attendance' }
    ]
  },
  annex7: {
    id: 'annex7',
    number: 'ANNEXURE VII',
    title: 'Grievance & Disciplinary',
    searchTerms: ['grievance', 'complaint', 'disciplinary'],
    category: 'Employee Relations',
    forms: [
      { name: 'Grievance Form', code: 'GRV-001', description: 'File employee grievance' },
      { name: 'Show Cause Notice Template', code: 'DISC-001', description: 'Disciplinary notice' },
      { name: 'Explanation Letter Format', code: 'DISC-002', description: 'Employee response format' },
      { name: 'Warning Letter Template', code: 'DISC-003', description: 'Verbal/written warning' }
    ]
  },
  annex8: {
    id: 'annex8',
    number: 'ANNEXURE VIII',
    title: 'Separation & Exit',
    searchTerms: ['exit', 'resignation', 'separation'],
    category: 'Separation',
    forms: [
      { name: 'Resignation Letter Format', code: 'EXIT-001', description: 'Formal resignation letter' },
      { name: 'Exit Interview Form', code: 'EXIT-002', description: 'Exit interview questions' },
      { name: 'Clearance Checklist', code: 'EXIT-003', description: 'Department clearances' },
      { name: 'Full & Final Settlement', code: 'EXIT-004', description: 'Final dues calculation' },
      { name: 'Experience Certificate', code: 'EXIT-005', description: 'Work experience certificate' },
      { name: 'Relieving Letter', code: 'EXIT-006', description: 'Official relieving letter' }
    ]
  },
  annex9: {
    id: 'annex9',
    number: 'ANNEXURE IX',
    title: 'Administrative Forms',
    searchTerms: ['administration', 'general', 'miscellaneous'],
    category: 'Administration',
    forms: [
      { name: 'ID Card Request Form', code: 'ADM-001', description: 'New/replacement ID card' },
      { name: 'Loan Request Form', code: 'ADM-002', description: 'Employee loan request' },
      { name: 'Address Change Form', code: 'ADM-003', description: 'Update personal details' },
      { name: 'Nomination Form', code: 'ADM-004', description: 'Insurance/PF nomination' },
      { name: 'NOC Request Template', code: 'ADM-005', description: 'No objection certificate' }
    ]
  },
  annex10: {
    id: 'annex10',
    number: 'ANNEXURE X',
    title: 'Statutory Forms',
    searchTerms: ['statutory', 'legal', 'compliance'],
    category: 'Compliance',
    forms: [
      { name: 'Form 11 (PF)', code: 'STAT-001', description: 'PF registration form' },
      { name: 'Form 16 Template', code: 'STAT-002', description: 'TDS certificate' },
      { name: 'Form I-9 (Identity)', code: 'STAT-003', description: 'Identity verification' },
      { name: 'POSH Complaint Form', code: 'STAT-004', description: 'Sexual harassment complaint' },
      { name: 'Accident Report Form', code: 'STAT-005', description: 'Workplace accident reporting' }
    ]
  }
};

// Form categories
export const annexCategories = [
  { id: 'recruitment', name: 'Recruitment & Onboarding', count: 6 },
  { id: 'leave', name: 'Leave Management', count: 5 },
  { id: 'time', name: 'Time Management', count: 4 },
  { id: 'performance', name: 'Performance', count: 5 },
  { id: 'compensation', name: 'Compensation', count: 5 },
  { id: 'learning', name: 'Learning', count: 4 },
  { id: 'relations', name: 'Employee Relations', count: 4 },
  { id: 'separation', name: 'Separation', count: 6 },
  { id: 'administration', name: 'Administration', count: 5 },
  { id: 'compliance', name: 'Compliance', count: 5 }
];
