// Comprehensive Policy Implementation Encyclopedia
// Complete guide for implementing all By-Laws policies

export const committeesDatabase = {
  board_of_directors: {
    id: 'board_of_directors',
    name: 'Board of Directors',
    composition: [
      { role: 'Chairperson', count: 1, qualifications: 'Senior medical professional with admin experience', powers: ['Final approval authority', 'Strategic direction', 'Budget approval'] },
      { role: 'Medical Director', count: 1, qualifications: 'Senior physician, min 15 years experience', powers: ['Medical policy oversight', 'Clinical standards', 'Staff appointments'] },
      { role: 'Administrative Director', count: 1, qualifications: 'Healthcare administration degree, min 10 years', powers: ['Operational decisions', 'HR oversight', 'Facility management'] },
      { role: 'Finance Director', count: 1, qualifications: 'CA/CPA with healthcare finance experience', powers: ['Financial policies', 'Budget allocation', 'Audit oversight'] },
      { role: 'Independent Members', count: 3, qualifications: 'Healthcare experts or community leaders', powers: ['Advisory role', 'Policy review', 'Governance oversight'] }
    ],
    meetings: 'Monthly or as required',
    quorum: '5 members (including Chairperson or Medical Director)',
    powers: [
      'Approve all major policies and amendments',
      'Appoint senior management',
      'Approve annual budget and strategic plans',
      'Final authority on disciplinary matters',
      'Approve major contracts and agreements'
    ],
    reportingTo: 'Hospital Trust/Owner'
  },
  
  hr_committee: {
    id: 'hr_committee',
    name: 'Human Resources Committee',
    composition: [
      { role: 'HR Director', count: 1, qualifications: 'HR professional with healthcare experience', powers: ['HR policy implementation', 'Recruitment oversight', 'Employee relations'] },
      { role: 'Department Heads', count: 3, qualifications: 'Senior staff from major departments', powers: ['Departmental staffing', 'Performance review', 'Training needs'] },
      { role: 'Legal Advisor', count: 1, qualifications: 'Labor law specialist', powers: ['Legal compliance', 'Contract review', 'Dispute resolution'] },
      { role: 'Employee Representative', count: 1, qualifications: 'Elected by staff', powers: ['Staff concerns', 'Welfare matters', 'Policy feedback'] }
    ],
    meetings: 'Bi-weekly',
    quorum: '4 members (including HR Director)',
    powers: [
      'Implement recruitment policies',
      'Approve job descriptions and grading',
      'Review performance management',
      'Handle grievances and disciplinary matters',
      'Recommend policy changes to Board'
    ],
    reportingTo: 'Board of Directors'
  },
  
  medical_board: {
    id: 'medical_board',
    name: 'Medical Board',
    composition: [
      { role: 'Chief Medical Officer', count: 1, qualifications: 'Senior physician, board certified', powers: ['Clinical policy approval', 'Medical staff oversight', 'Quality standards'] },
      { role: 'Department Heads (Medical)', count: 5, qualifications: 'Specialists from each major department', powers: ['Departmental protocols', 'Staff privileges', 'Clinical standards'] },
      { role: 'Nursing Director', count: 1, qualifications: 'Senior nurse with management experience', powers: ['Nursing standards', 'Patient care protocols', 'Nursing staff oversight'] },
      { role: 'Quality Assurance Officer', count: 1, qualifications: 'Medical quality specialist', powers: ['Quality monitoring', 'Audit oversight', 'Compliance review'] }
    ],
    meetings: 'Monthly',
    quorum: '5 members (including CMO)',
    powers: [
      'Approve clinical protocols and guidelines',
      'Grant and revoke medical staff privileges',
      'Review clinical outcomes and quality',
      'Recommend clinical policy changes',
      'Oversee continuing medical education'
    ],
    reportingTo: 'Board of Directors'
  },
  
  safety_committee: {
    id: 'safety_committee',
    name: 'Safety & Infection Control Committee',
    composition: [
      { role: 'Safety Officer', count: 1, qualifications: 'Occupational safety certification', powers: ['Safety policy implementation', 'Hazard assessment', 'Incident investigation'] },
      { role: 'Infection Control Officer', count: 1, qualifications: 'Epidemiology or microbiology background', powers: ['Infection control protocols', 'Outbreak management', 'Hygiene standards'] },
      { role: 'Department Representatives', count: 5, qualifications: 'One from each major department', powers: ['Departmental safety', 'Protocol compliance', 'Incident reporting'] },
      { role: 'Facilities Manager', count: 1, qualifications: 'Engineering or facilities management', powers: ['Infrastructure safety', 'Equipment maintenance', 'Environmental controls'] }
    ],
    meetings: 'Monthly',
    quorum: '5 members',
    powers: [
      'Develop and implement safety protocols',
      'Conduct safety audits and inspections',
      'Investigate incidents and near-misses',
      'Recommend safety improvements',
      'Monitor compliance with safety standards'
    ],
    reportingTo: 'Medical Board & Administrative Director'
  },

  ethics_committee: {
    id: 'ethics_committee',
    name: 'Ethics Committee',
    composition: [
      { role: 'Ethics Officer/Chairperson', count: 1, qualifications: 'Medical ethics specialist', powers: ['Ethics review', 'Policy interpretation', 'Conflict resolution'] },
      { role: 'Senior Physicians', count: 2, qualifications: 'Experienced doctors from different specialties', powers: ['Clinical ethics guidance', 'Case review', 'Professional standards'] },
      { role: 'Legal Advisor', count: 1, qualifications: 'Healthcare law specialist', powers: ['Legal compliance', 'Rights protection', 'Regulatory guidance'] },
      { role: 'Community Representative', count: 1, qualifications: 'Respected community member', powers: ['Public perspective', 'Cultural sensitivity', 'Patient advocacy'] },
      { role: 'Chaplain/Religious Advisor', count: 1, qualifications: 'Spiritual care professional', powers: ['Spiritual guidance', 'End-of-life matters', 'Cultural practices'] }
    ],
    meetings: 'As required (minimum quarterly)',
    quorum: '4 members',
    powers: [
      'Review ethical dilemmas and conflicts',
      'Provide guidance on complex cases',
      'Develop ethical guidelines',
      'Review research protocols',
      'Advise on end-of-life decisions'
    ],
    reportingTo: 'Board of Directors'
  }
};

export const authorityLevels = {
  level_1: {
    title: 'Board of Directors',
    individuals: ['Board Chairperson', 'Medical Director', 'Administrative Director', 'Finance Director'],
    powers: [
      'Final approval on all major policies',
      'Hiring/termination of senior management',
      'Budget and financial decisions over $100,000',
      'Strategic planning and direction',
      'Major contracts and agreements',
      'Amendments to By-Laws'
    ],
    decisionMaking: 'Majority vote required; Chairperson has tie-breaking vote'
  },
  
  level_2: {
    title: 'Senior Management',
    individuals: ['HR Director', 'Chief Medical Officer', 'Department Heads', 'Finance Manager'],
    powers: [
      'Implement board-approved policies',
      'Operational decisions within budget',
      'Staff hiring (non-senior positions)',
      'Department-level policy interpretation',
      'Performance management',
      'Expenditure up to $50,000'
    ],
    decisionMaking: 'Independent within scope; escalate to Board for major issues'
  },
  
  level_3: {
    title: 'Supervisors & Team Leads',
    individuals: ['Unit Managers', 'Team Leaders', 'Senior Staff', 'Shift Supervisors'],
    powers: [
      'Day-to-day operational decisions',
      'Team scheduling and assignments',
      'First-level grievance handling',
      'Performance monitoring',
      'Minor procurement (up to $5,000)',
      'Leave approvals (within policy)'
    ],
    decisionMaking: 'Independent for routine matters; escalate complex issues to management'
  },
  
  level_4: {
    title: 'Staff Members',
    individuals: ['Doctors', 'Nurses', 'Allied Health Professionals', 'Administrative Staff'],
    powers: [
      'Professional clinical decisions within scope',
      'Patient care within protocols',
      'Reporting and documentation',
      'Participation in committees',
      'Feedback and suggestions',
      'Minor purchases (up to $500)'
    ],
    decisionMaking: 'Follow protocols and guidelines; escalate as per chain of command'
  }
};

export const policyImplementationGuides = {
  // SECTION 1: PRELIMINARY
  section1_preliminary: {
    policyName: 'Preliminary Provisions & Definitions',
    byLawsSection: 'preamble',
    category: 'Foundational',
    implementationSteps: [
      {
        step: 1,
        phase: 'Planning',
        activity: 'Establish Governance Framework',
        details: 'Set up Board of Directors and define organizational structure',
        responsibleCommittee: 'board_of_directors',
        responsibleIndividuals: ['Board Chairperson', 'Administrative Director'],
        timeline: '1-2 weeks',
        outputs: ['Organizational chart', 'Committee charters', 'Authority matrix'],
        checkpoints: ['Board formation complete', 'Roles defined', 'Documentation prepared']
      },
      {
        step: 2,
        phase: 'Planning',
        activity: 'Develop By-Laws Document',
        details: 'Draft comprehensive By-Laws covering all operational aspects',
        responsibleCommittee: 'board_of_directors',
        responsibleIndividuals: ['Board Chairperson', 'Legal Advisor', 'HR Director'],
        timeline: '2-4 weeks',
        outputs: ['Draft By-Laws', 'Review comments', 'Final approved By-Laws'],
        checkpoints: ['Draft completed', 'Legal review done', 'Board approval obtained']
      },
      {
        step: 3,
        phase: 'Communication',
        activity: 'Stakeholder Communication',
        details: 'Inform all staff about By-Laws through orientation and documentation',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Department Heads'],
        timeline: '1 week',
        outputs: ['Communication plan', 'Staff handbook', 'Orientation materials'],
        checkpoints: ['All staff informed', 'Materials distributed', 'Acknowledgments received']
      }
    ],
    criticalSuccess: [
      'Clear organizational structure established',
      'All stakeholders understand their roles',
      'Documentation accessible to all'
    ],
    risks: [
      { risk: 'Unclear authority lines', mitigation: 'Clear authority matrix and escalation paths' },
      { risk: 'Staff unaware of policies', mitigation: 'Comprehensive orientation and regular reminders' }
    ]
  },

  // SECTION 2: RECRUITMENT & EMPLOYMENT
  section2_recruitment: {
    policyName: 'Recruitment and Employment',
    byLawsSection: 'section2',
    category: 'HR Operations',
    implementationSteps: [
      {
        step: 1,
        phase: 'Planning',
        activity: 'Define Job Structures',
        details: 'Create comprehensive job descriptions for all positions with qualifications, responsibilities, and reporting lines',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Department Heads'],
        timeline: '2-3 weeks',
        outputs: ['Job description templates', 'Qualification matrix', 'Salary grades'],
        checkpoints: ['All positions documented', 'Qualifications verified', 'Grades approved by Finance']
      },
      {
        step: 2,
        phase: 'Preparation',
        activity: 'Establish Recruitment Process',
        details: 'Set up systematic recruitment workflow including advertising, screening, interviewing, and selection',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Recruitment Officer'],
        timeline: '1-2 weeks',
        outputs: ['Recruitment policy', 'Interview templates', 'Selection criteria'],
        checkpoints: ['Process documented', 'Templates ready', 'Team trained']
      },
      {
        step: 3,
        phase: 'Preparation',
        activity: 'Set Up Verification Systems',
        details: 'Establish credential verification, background checks, and reference checking procedures',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Admin Officer'],
        timeline: '1 week',
        outputs: ['Verification checklist', 'Background check process', 'Reference forms'],
        checkpoints: ['Verification partners identified', 'Process operational', 'Timeline defined']
      },
      {
        step: 4,
        phase: 'Implementation',
        activity: 'Onboarding Program',
        details: 'Create comprehensive onboarding process including orientation, training, and documentation',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Department Heads', 'Training Coordinator'],
        timeline: '2 weeks (develop), ongoing (execute)',
        outputs: ['Onboarding checklist', 'Orientation schedule', 'Welcome kit'],
        checkpoints: ['Program developed', 'Materials ready', 'Feedback mechanism in place']
      },
      {
        step: 5,
        phase: 'Implementation',
        activity: 'Probation Monitoring',
        details: 'Implement probation period evaluation with regular check-ins and performance assessment',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Direct Supervisors', 'HR Director'],
        timeline: 'Ongoing (typically 3-6 months)',
        outputs: ['Probation evaluation forms', 'Progress reports', 'Confirmation letters'],
        checkpoints: ['Monthly reviews conducted', 'Feedback documented', 'Confirmation decision made']
      }
    ],
    committeeInvolved: ['hr_committee', 'board_of_directors'],
    approvalChain: [
      { level: 'Department Head', for: 'Position requisition and candidate selection' },
      { level: 'HR Director', for: 'Process compliance and offer approval' },
      { level: 'Finance Director', for: 'Salary and benefits approval' },
      { level: 'Administrative Director', for: 'Final appointment (senior positions)' },
      { level: 'Board of Directors', for: 'Senior management appointments' }
    ],
    criticalSuccess: [
      'Clear, non-discriminatory recruitment process',
      'Proper credential verification',
      'Effective onboarding leading to retention'
    ],
    risks: [
      { risk: 'Unqualified hires', mitigation: 'Stringent verification and selection process' },
      { risk: 'Discriminatory practices', mitigation: 'Training on equal opportunity, diverse interview panels' },
      { risk: 'Poor retention', mitigation: 'Comprehensive onboarding and mentorship programs' }
    ],
    legalCompliance: [
      'Equal Employment Opportunity laws',
      'Labor laws regarding contracts',
      'Professional licensing requirements',
      'Background check regulations'
    ]
  },

  // SECTION 7: LEAVE & ATTENDANCE
  section7_leave_attendance: {
    policyName: 'Leave and Attendance Management',
    byLawsSection: 'section7',
    category: 'HR Operations',
    implementationSteps: [
      {
        step: 1,
        phase: 'Planning',
        activity: 'Define Leave Entitlements',
        details: 'Establish all leave types, entitlements, accrual rates, and conditions based on legal requirements and organizational needs',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Legal Advisor'],
        timeline: '1-2 weeks',
        outputs: ['Leave policy document', 'Leave types matrix', 'Entitlement calculator'],
        checkpoints: ['Legal compliance verified', 'Board approval obtained', 'Policy published']
      },
      {
        step: 2,
        phase: 'Preparation',
        activity: 'Implement Leave Management System',
        details: 'Set up digital or manual system for leave application, approval, and tracking',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'IT Support'],
        timeline: '2-3 weeks',
        outputs: ['Leave management system', 'User manuals', 'Training materials'],
        checkpoints: ['System configured', 'Staff trained', 'Test runs successful']
      },
      {
        step: 3,
        phase: 'Preparation',
        activity: 'Establish Approval Workflow',
        details: 'Define clear approval chain for different leave types with timelines',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Department Heads'],
        timeline: '1 week',
        outputs: ['Approval workflow chart', 'Timeline policy', 'Escalation procedures'],
        checkpoints: ['Workflow documented', 'Approvers identified', 'Communication sent']
      },
      {
        step: 4,
        phase: 'Implementation',
        activity: 'Attendance Tracking System',
        details: 'Implement time and attendance tracking (biometric, swipe cards, or manual)',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Admin Officer', 'IT Support'],
        timeline: '2-4 weeks',
        outputs: ['Attendance system', 'Shift schedules', 'Reporting dashboards'],
        checkpoints: ['Hardware/software installed', 'Staff enrolled', 'Reports generated']
      },
      {
        step: 5,
        phase: 'Monitoring',
        activity: 'Regular Monitoring & Reporting',
        details: 'Monthly review of attendance patterns, leave usage, and policy compliance',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Supervisors'],
        timeline: 'Ongoing (monthly reviews)',
        outputs: ['Monthly attendance reports', 'Leave balance statements', 'Trend analysis'],
        checkpoints: ['Reports generated monthly', 'Issues identified', 'Corrective actions taken']
      }
    ],
    leaveTypes: {
      annual_leave: { entitlement: '21-30 days per year', accrual: 'Monthly', carryover: 'Up to 15 days', cashable: 'Partial on resignation' },
      sick_leave: { entitlement: '15 days per year', accrual: 'Annual', documentation: 'Medical certificate required >2 days', cashable: 'No' },
      maternity_leave: { entitlement: '180 days', eligibility: 'After 1 year service', paid: '12 weeks at full pay', cashable: 'No' },
      paternity_leave: { entitlement: '15 days', eligibility: 'All male employees', paid: 'Full pay', cashable: 'No' },
      compassionate_leave: { entitlement: '3-5 days', eligibility: 'Immediate family', approval: 'Department Head', cashable: 'No' },
      study_leave: { entitlement: 'As per agreement', eligibility: 'Job-related courses', approval: 'HR Director + Board', cashable: 'No' }
    },
    committeeInvolved: ['hr_committee'],
    approvalChain: [
      { level: 'Immediate Supervisor', for: 'Annual leave up to 5 days' },
      { level: 'Department Head', for: 'Annual leave >5 days, sick leave, compassionate leave' },
      { level: 'HR Director', for: 'Maternity/paternity leave, unpaid leave, study leave' },
      { level: 'Administrative Director', for: 'Extended leave, special circumstances' }
    ],
    criticalSuccess: [
      'Clear leave policy understood by all',
      'Efficient approval process',
      'Accurate tracking and records',
      'Fair application of rules'
    ],
    risks: [
      { risk: 'Leave abuse', mitigation: 'Clear policy, verification requirements, monitoring patterns' },
      { risk: 'Staffing shortages', mitigation: 'Advance notice requirements, leave planning, adequate coverage' },
      { risk: 'System failures', mitigation: 'Backup manual processes, regular system maintenance' }
    ],
    legalCompliance: [
      'Labor laws on minimum leave entitlements',
      'Maternity and paternity leave regulations',
      'Equal treatment requirements',
      'Documentation and record-keeping requirements'
    ]
  }
};

// Add similar detailed guides for all other sections...
// This structure provides the encyclopedia format requested
