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

  // SECTION 8: PERFORMANCE MANAGEMENT
  section8_performance: {
    policyName: 'Performance Management System',
    byLawsSection: 'section8',
    category: 'HR Operations',
    implementationSteps: [
      {
        step: 1,
        phase: 'Planning',
        activity: 'Define Performance Framework',
        details: 'Establish performance criteria, KPIs, evaluation methods, and rating scales for all positions',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Department Heads', 'Senior Management'],
        timeline: '3-4 weeks',
        outputs: ['Performance framework document', 'KPI library', 'Rating scale definitions', 'Competency matrix'],
        checkpoints: ['Framework approved by Board', 'KPIs defined for all roles', 'Rating scales validated']
      },
      {
        step: 2,
        phase: 'Planning',
        activity: 'Set Evaluation Cycles',
        details: 'Determine frequency (annual, semi-annual, quarterly), timeline, and evaluation periods',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Administrative Director'],
        timeline: '1 week',
        outputs: ['Annual performance calendar', 'Evaluation timeline', 'Notification schedule'],
        checkpoints: ['Calendar published', 'All stakeholders informed', 'System dates configured']
      },
      {
        step: 3,
        phase: 'Preparation',
        activity: 'Develop Appraisal Tools',
        details: 'Create evaluation forms, self-assessment templates, 360-degree feedback tools',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Training Coordinator'],
        timeline: '2 weeks',
        outputs: ['Appraisal forms', 'Self-assessment templates', '360-feedback questionnaires', 'Goal-setting forms'],
        checkpoints: ['Forms validated', 'Pilot tested', 'Feedback incorporated']
      },
      {
        step: 4,
        phase: 'Preparation',
        activity: 'Train Evaluators',
        details: 'Comprehensive training for all managers and supervisors on conducting fair, objective evaluations',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Training Coordinator', 'External Consultant'],
        timeline: '2 weeks',
        outputs: ['Training modules', 'Evaluator handbook', 'Training completion certificates'],
        checkpoints: ['All managers trained', 'Competency assessments passed', 'Practice evaluations completed']
      },
      {
        step: 5,
        phase: 'Implementation',
        activity: 'Goal Setting Phase',
        details: 'Annual goal-setting sessions between employees and supervisors using SMART criteria',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Direct Supervisors', 'Department Heads'],
        timeline: 'First month of evaluation cycle',
        outputs: ['Individual performance plans', 'SMART goals documented', 'Development plans'],
        checkpoints: ['100% employees have goals', 'Goals aligned with organizational objectives', 'Signed acknowledgments']
      },
      {
        step: 6,
        phase: 'Implementation',
        activity: 'Continuous Feedback & Check-ins',
        details: 'Regular progress reviews (monthly/quarterly) with documented feedback',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Direct Supervisors', 'HR Support'],
        timeline: 'Ongoing throughout cycle',
        outputs: ['Progress notes', 'Feedback records', 'Mid-cycle reviews'],
        checkpoints: ['Regular check-ins documented', 'Issues identified early', 'Support provided']
      },
      {
        step: 7,
        phase: 'Implementation',
        activity: 'Formal Evaluation',
        details: 'Structured evaluation using approved forms, including self-assessment and 360 feedback',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Direct Supervisors', 'Department Heads', 'HR Director'],
        timeline: 'End of evaluation period (2-3 weeks)',
        outputs: ['Completed evaluation forms', 'Performance ratings', 'Development recommendations'],
        checkpoints: ['All evaluations completed on time', 'Ratings calibrated', 'Reviews documented']
      },
      {
        step: 8,
        phase: 'Implementation',
        activity: 'Performance Review Meetings',
        details: 'One-on-one meetings to discuss performance, provide feedback, and plan development',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Direct Supervisors', 'Employees'],
        timeline: '1-2 weeks after evaluation',
        outputs: ['Meeting minutes', 'Development plans', 'Signed evaluation forms'],
        checkpoints: ['All meetings conducted', 'Feedback delivered constructively', 'Employee signatures obtained']
      },
      {
        step: 9,
        phase: 'Monitoring',
        activity: 'Link to Rewards & Development',
        details: 'Connect performance ratings to salary increments, bonuses, promotions, and training',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Finance Director', 'Department Heads'],
        timeline: '2-3 weeks post-reviews',
        outputs: ['Increment recommendations', 'Promotion proposals', 'Training plans'],
        checkpoints: ['Rewards aligned with performance', 'Budget approved', 'Communications sent']
      },
      {
        step: 10,
        phase: 'Monitoring',
        activity: 'System Evaluation & Improvement',
        details: 'Annual review of performance management system effectiveness with stakeholder feedback',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'All Managers'],
        timeline: 'Post-cycle (1-2 weeks)',
        outputs: ['System evaluation report', 'Improvement recommendations', 'Updated processes'],
        checkpoints: ['Feedback collected', 'Analysis completed', 'Improvements implemented']
      }
    ],
    committeeInvolved: ['hr_committee', 'board_of_directors'],
    approvalChain: [
      { level: 'Direct Supervisor', for: 'Initial evaluation and rating' },
      { level: 'Department Head', for: 'Review and calibration of ratings' },
      { level: 'HR Director', for: 'Process compliance and appeals' },
      { level: 'Administrative Director', for: 'Increment and promotion approvals' },
      { level: 'Board of Directors', for: 'Senior management evaluations and major rewards' }
    ],
    criticalSuccess: [
      'Clear, measurable performance criteria',
      'Regular feedback and communication',
      'Fair and objective evaluations',
      'Link between performance and rewards',
      'Employee development focus'
    ],
    risks: [
      { risk: 'Bias in evaluations', mitigation: 'Evaluator training, calibration sessions, 360-degree feedback, HR oversight' },
      { risk: 'Demotivation from poor ratings', mitigation: 'Constructive feedback, development plans, appeals process' },
      { risk: 'Gaming the system', mitigation: 'Balanced scorecard approach, qualitative and quantitative measures' },
      { risk: 'Administrative burden', mitigation: 'User-friendly tools, HR support, realistic timelines' }
    ],
    legalCompliance: [
      'Equal treatment and non-discrimination',
      'Documentation requirements for disciplinary actions',
      'Privacy of performance records',
      'Due process in appeals'
    ]
  },

  // SECTION 12: GRIEVANCE HANDLING
  section12_grievance: {
    policyName: 'Grievance Handling Mechanism',
    byLawsSection: 'section12',
    category: 'Employee Relations',
    implementationSteps: [
      {
        step: 1,
        phase: 'Planning',
        activity: 'Establish Grievance Policy',
        details: 'Define grievance types, coverage, confidentiality, and non-retaliation principles',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Legal Advisor', 'Employee Representative'],
        timeline: '1-2 weeks',
        outputs: ['Grievance policy document', 'Definitions and scope', 'Rights and protections'],
        checkpoints: ['Policy drafted', 'Legal review completed', 'Board approval obtained']
      },
      {
        step: 2,
        phase: 'Planning',
        activity: 'Set Up Grievance Committee',
        details: 'Form dedicated committee with representatives from HR, management, and employees',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Administrative Director'],
        timeline: '1 week',
        outputs: ['Committee charter', 'Member appointments', 'Terms of reference'],
        checkpoints: ['Committee formed', 'Roles defined', 'Training scheduled']
      },
      {
        step: 3,
        phase: 'Preparation',
        activity: 'Define Process & Timeline',
        details: 'Create step-by-step grievance handling process with clear timelines at each stage',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Legal Advisor'],
        timeline: '1 week',
        outputs: ['Process flowchart', 'Timeline standards', 'Escalation path'],
        checkpoints: ['Process documented', 'Timelines realistic', 'Escalation clear']
      },
      {
        step: 4,
        phase: 'Preparation',
        activity: 'Develop Forms & Templates',
        details: 'Create grievance submission forms, investigation templates, and resolution documentation',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Admin Officer'],
        timeline: '1 week',
        outputs: ['Grievance form', 'Investigation checklist', 'Resolution template', 'Appeal form'],
        checkpoints: ['Forms user-friendly', 'Legal compliance verified', 'Pilot tested']
      },
      {
        step: 5,
        phase: 'Preparation',
        activity: 'Train Committee & Managers',
        details: 'Comprehensive training on grievance handling, investigation techniques, and conflict resolution',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'External Trainer', 'Legal Advisor'],
        timeline: '1-2 weeks',
        outputs: ['Training materials', 'Case studies', 'Best practices guide'],
        checkpoints: ['Committee trained', 'Managers trained', 'Competency assessed']
      },
      {
        step: 6,
        phase: 'Implementation',
        activity: 'Communicate to All Staff',
        details: 'Inform all employees about grievance mechanism, how to file, confidentiality, and protection',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Department Heads'],
        timeline: '1 week',
        outputs: ['Communication plan', 'Staff handbook section', 'Awareness posters', 'FAQs'],
        checkpoints: ['All staff informed', 'Q&A sessions held', 'Contact points published']
      },
      {
        step: 7,
        phase: 'Implementation',
        activity: 'Receive & Log Grievances',
        details: 'Establish confidential channels (email, box, in-person) and systematic logging',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Officer', 'Grievance Committee Secretary'],
        timeline: 'Ongoing',
        outputs: ['Grievance register', 'Acknowledgment receipts', 'Case numbers'],
        checkpoints: ['All grievances logged', 'Acknowledgments sent within 24 hours', 'Confidentiality maintained']
      },
      {
        step: 8,
        phase: 'Implementation',
        activity: 'Preliminary Assessment',
        details: 'Initial review to determine validity, severity, and appropriate handling level',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Grievance Committee Chair'],
        timeline: '2-3 days per case',
        outputs: ['Assessment report', 'Severity classification', 'Action plan'],
        checkpoints: ['Assessment completed', 'Classification appropriate', 'Timeline set']
      },
      {
        step: 9,
        phase: 'Implementation',
        activity: 'Investigation',
        details: 'Fact-finding through interviews, document review, and evidence gathering',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Grievance Committee', 'HR Officer', 'Legal Advisor (if needed)'],
        timeline: '5-15 working days depending on complexity',
        outputs: ['Investigation report', 'Evidence documentation', 'Witness statements'],
        checkpoints: ['All parties heard', 'Evidence collected', 'Fairness maintained']
      },
      {
        step: 10,
        phase: 'Implementation',
        activity: 'Resolution & Communication',
        details: 'Committee decision, corrective actions, and communication to all parties',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Grievance Committee', 'HR Director'],
        timeline: '3-5 days post-investigation',
        outputs: ['Decision letter', 'Action plan', 'Resolution documentation'],
        checkpoints: ['Decision fair and justified', 'Actions defined', 'Parties informed']
      },
      {
        step: 11,
        phase: 'Implementation',
        activity: 'Appeals Process (if requested)',
        details: 'Higher-level review if employee is dissatisfied with initial resolution',
        responsibleCommittee: 'board_of_directors',
        responsibleIndividuals: ['Administrative Director', 'Board Member', 'External Mediator (if needed)'],
        timeline: '10-15 working days',
        outputs: ['Appeal decision', 'Final resolution', 'Closure documentation'],
        checkpoints: ['Appeal heard fairly', 'Final decision made', 'Case closed']
      },
      {
        step: 12,
        phase: 'Monitoring',
        activity: 'Follow-up & Monitoring',
        details: 'Ensure corrective actions implemented and monitor for retaliation',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Department Heads'],
        timeline: '1-3 months post-resolution',
        outputs: ['Follow-up reports', 'Action compliance check', 'Employee feedback'],
        checkpoints: ['Actions implemented', 'No retaliation', 'Satisfaction verified']
      },
      {
        step: 13,
        phase: 'Monitoring',
        activity: 'Trend Analysis & Improvement',
        details: 'Quarterly review of grievance patterns to identify systemic issues',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Grievance Committee'],
        timeline: 'Quarterly',
        outputs: ['Trend analysis report', 'Root cause analysis', 'Preventive recommendations'],
        checkpoints: ['Patterns identified', 'Systemic issues addressed', 'Improvements implemented']
      }
    ],
    grievanceTypes: {
      workplace_harassment: { severity: 'High', timeline: 'Fast-track 7 days', confidentiality: 'Strict' },
      discrimination: { severity: 'High', timeline: 'Fast-track 7 days', confidentiality: 'Strict' },
      unfair_treatment: { severity: 'Medium', timeline: 'Standard 15 days', confidentiality: 'High' },
      work_conditions: { severity: 'Medium', timeline: 'Standard 15 days', confidentiality: 'Normal' },
      interpersonal_conflict: { severity: 'Low-Medium', timeline: 'Standard 15 days', confidentiality: 'Normal' },
      policy_concerns: { severity: 'Low', timeline: 'Standard 20 days', confidentiality: 'Normal' }
    },
    committeeInvolved: ['hr_committee', 'board_of_directors'],
    approvalChain: [
      { level: 'HR Officer', for: 'Receive and log grievance' },
      { level: 'Grievance Committee', for: 'Investigation and initial resolution' },
      { level: 'HR Director', for: 'Review and approve resolution' },
      { level: 'Administrative Director', for: 'Appeals and complex cases' },
      { level: 'Board of Directors', for: 'Final appeals and major disciplinary actions' }
    ],
    criticalSuccess: [
      'Confidential and safe reporting channels',
      'Timely and fair investigation',
      'Clear communication to parties',
      'Effective resolution and follow-up',
      'No retaliation against complainants'
    ],
    risks: [
      { risk: 'Retaliation against complainant', mitigation: 'Strong anti-retaliation policy, monitoring, severe consequences for retaliation' },
      { risk: 'Breach of confidentiality', mitigation: 'Limited access to case files, training on confidentiality, disciplinary action for breaches' },
      { risk: 'Delay in resolution', mitigation: 'Clear timelines, tracking system, escalation for delays' },
      { risk: 'Perceived bias', mitigation: 'Diverse committee, external involvement for sensitive cases, transparent process' }
    ],
    legalCompliance: [
      'Labor laws on grievance redressal',
      'Anti-discrimination and harassment laws',
      'Due process requirements',
      'Confidentiality and data protection',
      'Whistleblower protection laws'
    ]
  },

  // SECTION 13: SAFETY & HEALTH
  section13_safety: {
    policyName: 'Workplace Safety and Health',
    byLawsSection: 'section13',
    category: 'Safety & Compliance',
    implementationSteps: [
      {
        step: 1,
        phase: 'Planning',
        activity: 'Conduct Comprehensive Risk Assessment',
        details: 'Identify all workplace hazards - biological, chemical, physical, ergonomic, psychosocial',
        responsibleCommittee: 'safety_committee',
        responsibleIndividuals: ['Safety Officer', 'Department Heads', 'External Safety Consultant'],
        timeline: '3-4 weeks',
        outputs: ['Risk assessment report', 'Hazard register', 'Risk matrix', 'Priority action list'],
        checkpoints: ['All areas assessed', 'Hazards documented', 'Risks prioritized']
      },
      {
        step: 2,
        phase: 'Planning',
        activity: 'Develop Safety Policies & Procedures',
        details: 'Create comprehensive safety manual covering all identified risks and standard operating procedures',
        responsibleCommittee: 'safety_committee',
        responsibleIndividuals: ['Safety Officer', 'Medical Board', 'Facilities Manager'],
        timeline: '2-3 weeks',
        outputs: ['Safety manual', 'SOPs for high-risk activities', 'Emergency procedures', 'PPE policy'],
        checkpoints: ['Manual complete', 'SOPs validated', 'Board approval obtained']
      },
      {
        step: 3,
        phase: 'Preparation',
        activity: 'Procure Safety Equipment & PPE',
        details: 'Purchase all required personal protective equipment, safety devices, and emergency equipment',
        responsibleCommittee: 'safety_committee',
        responsibleIndividuals: ['Safety Officer', 'Procurement Officer', 'Finance Director'],
        timeline: '4-6 weeks',
        outputs: ['Equipment inventory', 'PPE stock', 'Safety devices', 'Emergency kits'],
        checkpoints: ['Budget approved', 'Equipment procured', 'Quality verified', 'Stock adequate']
      },
      {
        step: 4,
        phase: 'Preparation',
        activity: 'Infrastructure Modifications',
        details: 'Implement physical safety measures - signage, barriers, ventilation, fire systems, emergency exits',
        responsibleCommittee: 'safety_committee',
        responsibleIndividuals: ['Facilities Manager', 'Safety Officer', 'Engineering Team'],
        timeline: '4-8 weeks',
        outputs: ['Safety signage', 'Emergency exits', 'Fire suppression systems', 'Ventilation upgrades'],
        checkpoints: ['Work completed', 'Systems tested', 'Inspections passed']
      },
      {
        step: 5,
        phase: 'Preparation',
        activity: 'Establish Emergency Response Systems',
        details: 'Set up emergency alarms, evacuation plans, fire drills, first aid stations, emergency contacts',
        responsibleCommittee: 'safety_committee',
        responsibleIndividuals: ['Safety Officer', 'Facilities Manager', 'Department Heads'],
        timeline: '2-3 weeks',
        outputs: ['Emergency response plan', 'Evacuation maps', 'Emergency contact list', 'First aid stations'],
        checkpoints: ['Plans approved', 'Systems operational', 'Team trained']
      },
      {
        step: 6,
        phase: 'Implementation',
        activity: 'Comprehensive Safety Training',
        details: 'Train ALL staff on safety policies, hazard identification, PPE use, emergency procedures',
        responsibleCommittee: 'safety_committee',
        responsibleIndividuals: ['Safety Officer', 'Training Coordinator', 'Department Heads'],
        timeline: '3-4 weeks (initial), ongoing refreshers',
        outputs: ['Training modules', 'Attendance records', 'Competency assessments', 'Certificates'],
        checkpoints: ['100% staff trained', 'Competency verified', 'Records maintained']
      },
      {
        step: 7,
        phase: 'Implementation',
        activity: 'Incident Reporting System',
        details: 'Implement mandatory reporting system for all incidents, near-misses, and hazards',
        responsibleCommittee: 'safety_committee',
        responsibleIndividuals: ['Safety Officer', 'HR Officer', 'IT Support'],
        timeline: '1-2 weeks',
        outputs: ['Incident reporting portal/forms', 'Investigation templates', 'Reporting guidelines'],
        checkpoints: ['System operational', 'Staff aware', 'Reports being submitted']
      },
      {
        step: 8,
        phase: 'Implementation',
        activity: 'Regular Safety Inspections',
        details: 'Schedule and conduct regular safety audits, inspections, and workplace walkarounds',
        responsibleCommittee: 'safety_committee',
        responsibleIndividuals: ['Safety Officer', 'Department Representatives', 'External Auditor (annually)'],
        timeline: 'Ongoing (weekly/monthly/quarterly)',
        outputs: ['Inspection checklists', 'Audit reports', 'Corrective action plans'],
        checkpoints: ['Inspections on schedule', 'Findings documented', 'Actions tracked']
      },
      {
        step: 9,
        phase: 'Monitoring',
        activity: 'Incident Investigation & Root Cause Analysis',
        details: 'Thorough investigation of all incidents to identify root causes and prevent recurrence',
        responsibleCommittee: 'safety_committee',
        responsibleIndividuals: ['Safety Officer', 'Department Head', 'Medical Board (if medical incident)'],
        timeline: 'Within 48 hours of incident',
        outputs: ['Investigation reports', 'Root cause analysis', 'Corrective actions', 'Lessons learned'],
        checkpoints: ['All incidents investigated', 'Root causes identified', 'Actions implemented']
      },
      {
        step: 10,
        phase: 'Monitoring',
        activity: 'Safety Performance Metrics',
        details: 'Track KPIs - incident rates, training completion, audit scores, corrective action closure',
        responsibleCommittee: 'safety_committee',
        responsibleIndividuals: ['Safety Officer', 'Quality Assurance'],
        timeline: 'Monthly reporting',
        outputs: ['Safety dashboard', 'Monthly safety reports', 'Trend analysis'],
        checkpoints: ['Metrics tracked', 'Trends analyzed', 'Improvements implemented']
      },
      {
        step: 11,
        phase: 'Monitoring',
        activity: 'Continuous Improvement',
        details: 'Regular review and update of safety policies based on incidents, best practices, regulations',
        responsibleCommittee: 'safety_committee',
        responsibleIndividuals: ['Safety Officer', 'Management'],
        timeline: 'Quarterly reviews',
        outputs: ['Updated policies', 'Improvement plans', 'Best practices documentation'],
        checkpoints: ['Reviews conducted', 'Updates implemented', 'Staff informed']
      }
    ],
    committeeInvolved: ['safety_committee', 'medical_board'],
    approvalChain: [
      { level: 'Safety Officer', for: 'Day-to-day safety decisions and incident investigations' },
      { level: 'Safety Committee', for: 'Safety policies and major improvements' },
      { level: 'Medical Board', for: 'Clinical safety protocols and infection control' },
      { level: 'Administrative Director', for: 'Budget for safety improvements' },
      { level: 'Board of Directors', for: 'Major safety investments and policy changes' }
    ],
    criticalSuccess: [
      'Zero or low incident rates',
      '100% staff trained and compliant',
      'Prompt incident response and investigation',
      'Continuous improvement culture',
      'Regulatory compliance maintained'
    ],
    risks: [
      { risk: 'Staff non-compliance', mitigation: 'Regular training, monitoring, disciplinary action for violations' },
      { risk: 'Equipment failure', mitigation: 'Preventive maintenance, regular testing, backup systems' },
      { risk: 'Emergency unpreparedness', mitigation: 'Regular drills, clear procedures, trained response teams' },
      { risk: 'Incident underreporting', mitigation: 'No-blame culture for reporting, easy reporting systems, rewards for safety awareness' }
    ],
    legalCompliance: [
      'Occupational Safety and Health Act',
      'Fire safety regulations',
      'Infection control standards (healthcare-specific)',
      'Hazardous materials handling regulations',
      'Emergency preparedness requirements'
    ]
  },

  // SECTION 17: TERMINATION
  section17_termination: {
    policyName: 'Employment Termination Procedures',
    byLawsSection: 'section17',
    category: 'HR Operations',
    implementationSteps: [
      {
        step: 1,
        phase: 'Planning',
        activity: 'Define Termination Types & Grounds',
        details: 'Clearly document all types of termination - resignation, retirement, dismissal, redundancy, contract end',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Legal Advisor'],
        timeline: '1-2 weeks',
        outputs: ['Termination policy document', 'Grounds for dismissal list', 'Notice period matrix'],
        checkpoints: ['All types defined', 'Legal compliance verified', 'Board approval obtained']
      },
      {
        step: 2,
        phase: 'Planning',
        activity: 'Establish Due Process for Dismissals',
        details: 'Create step-by-step process ensuring fairness, warnings, hearings, and appeal rights',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Legal Advisor', 'Employee Representative'],
        timeline: '1 week',
        outputs: ['Disciplinary procedure', 'Warning templates', 'Hearing process', 'Appeal process'],
        checkpoints: ['Process documented', 'Natural justice ensured', 'Timeline defined']
      },
      {
        step: 3,
        phase: 'Preparation',
        activity: 'Develop Exit Documentation',
        details: 'Create all required forms - resignation letters, clearance forms, exit interviews, final settlement',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Finance Officer'],
        timeline: '1 week',
        outputs: ['Resignation template', 'Clearance checklist', 'Exit interview form', 'Settlement calculator'],
        checkpoints: ['All forms ready', 'Legal compliance checked', 'Workflow tested']
      },
      {
        step: 4,
        phase: 'Implementation',
        activity: 'Resignation Processing',
        details: 'Receive resignation, verify notice period, initiate exit process',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Officer', 'Department Head'],
        timeline: 'Per case (as per notice period)',
        outputs: ['Resignation acceptance letter', 'Notice period confirmation', 'Exit timeline'],
        checkpoints: ['Resignation accepted', 'Notice period agreed', 'Handover planned']
      },
      {
        step: 5,
        phase: 'Implementation',
        activity: 'Dismissal Process (if applicable)',
        details: 'Follow due process - investigation, show cause, hearing, decision, communication',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Department Head', 'Disciplinary Committee'],
        timeline: '2-4 weeks (depending on complexity)',
        outputs: ['Investigation report', 'Show cause notice', 'Hearing minutes', 'Termination letter'],
        checkpoints: ['Due process followed', 'Evidence documented', 'Fair hearing conducted']
      },
      {
        step: 6,
        phase: 'Implementation',
        activity: 'Knowledge Transfer & Handover',
        details: 'Ensure proper handover of responsibilities, documents, and institutional knowledge',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Departing Employee', 'Supervisor', 'Replacement/Team'],
        timeline: 'During notice period',
        outputs: ['Handover checklist', 'Documentation', 'Training of successor', 'Knowledge base updated'],
        checkpoints: ['Handover complete', 'Critical information transferred', 'No operational gaps']
      },
      {
        step: 7,
        phase: 'Implementation',
        activity: 'Exit Clearance',
        details: 'Systematic clearance from all departments - return of assets, dues clearance, access revocation',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Officer', 'IT', 'Finance', 'Facilities', 'Department Head'],
        timeline: 'Last week of service',
        outputs: ['Clearance certificate', 'Asset return confirmation', 'No-dues certificate'],
        checkpoints: ['All assets returned', 'All departments cleared', 'Access revoked']
      },
      {
        step: 8,
        phase: 'Implementation',
        activity: 'Exit Interview',
        details: 'Confidential interview to gather feedback on experience, reasons for leaving, suggestions',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director or Senior HR Officer'],
        timeline: 'Last week of service',
        outputs: ['Exit interview report', 'Feedback summary', 'Improvement suggestions'],
        checkpoints: ['Interview conducted', 'Feedback documented', 'Insights captured']
      },
      {
        step: 9,
        phase: 'Implementation',
        activity: 'Final Settlement',
        details: 'Calculate and process all dues - salary, leave encashment, gratuity, deductions',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Finance Officer', 'HR Officer'],
        timeline: 'Within 30 days of last working day',
        outputs: ['Final settlement statement', 'Payment confirmation', 'Tax documents'],
        checkpoints: ['Calculations verified', 'Approvals obtained', 'Payment processed']
      },
      {
        step: 10,
        phase: 'Implementation',
        activity: 'Provide Service Documentation',
        details: 'Issue experience certificate, relieving letter, and other required documents',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director'],
        timeline: 'Last working day',
        outputs: ['Experience certificate', 'Relieving letter', 'Service records'],
        checkpoints: ['Documents prepared', 'Signatures obtained', 'Documents provided']
      },
      {
        step: 11,
        phase: 'Monitoring',
        activity: 'Post-Exit Administration',
        details: 'Update records, inform relevant parties, archive documents, update systems',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Officer', 'IT Support'],
        timeline: 'Within 1 week post-exit',
        outputs: ['Updated org chart', 'System updates', 'Archived personnel file'],
        checkpoints: ['All records updated', 'Systems updated', 'File archived']
      },
      {
        step: 12,
        phase: 'Monitoring',
        activity: 'Turnover Analysis',
        details: 'Monthly/quarterly analysis of turnover data, exit reasons, trends, and retention strategies',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Management'],
        timeline: 'Monthly/Quarterly',
        outputs: ['Turnover report', 'Trend analysis', 'Retention recommendations'],
        checkpoints: ['Data analyzed', 'Patterns identified', 'Strategies developed']
      }
    ],
    terminationTypes: {
      resignation: { noticePeriod: '30-90 days', finalSettlement: 'Within 30 days', documentation: 'Resignation letter, exit interview' },
      retirement: { noticePeriod: '90 days (optional)', finalSettlement: 'Within 30 days', documentation: 'Retirement letter, gratuity, pension docs' },
      dismissal_with_cause: { noticePeriod: 'None or as per severity', finalSettlement: 'Within 30 days', documentation: 'Termination letter, investigation report' },
      redundancy: { noticePeriod: '60-90 days', finalSettlement: 'Within 30 days + severance', documentation: 'Redundancy letter, severance calculation' },
      contract_end: { noticePeriod: 'Per contract', finalSettlement: 'Last working day', documentation: 'Contract completion letter' },
      mutual_separation: { noticePeriod: 'Negotiable', finalSettlement: 'As agreed', documentation: 'Separation agreement' }
    },
    committeeInvolved: ['hr_committee', 'board_of_directors'],
    approvalChain: [
      { level: 'Department Head', for: 'Initiate termination recommendation' },
      { level: 'HR Director', for: 'Process compliance and documentation' },
      { level: 'Disciplinary Committee', for: 'Dismissal cases - investigation and hearing' },
      { level: 'Administrative Director', for: 'Final approval for all terminations' },
      { level: 'Board of Directors', for: 'Senior management terminations and major settlements' }
    ],
    criticalSuccess: [
      'Due process followed in all dismissals',
      'Proper documentation maintained',
      'Timely final settlements',
      'Smooth knowledge transfer',
      'Positive alumni relations'
    ],
    risks: [
      { risk: 'Wrongful termination claims', mitigation: 'Strict adherence to due process, legal review, documentation' },
      { risk: 'Knowledge loss', mitigation: 'Adequate handover period, documentation, knowledge management' },
      { risk: 'Operational disruption', mitigation: 'Succession planning, cross-training, transition support' },
      { risk: 'Negative publicity', mitigation: 'Professional handling, fair treatment, positive exit experience' }
    ],
    legalCompliance: [
      'Labor laws on termination and notice periods',
      'Due process and natural justice requirements',
      'Final settlement timelines',
      'Gratuity and provident fund regulations',
      'Documentation and record retention'
    ]
  },

  // SECTION 3: STAFF APPOINTMENT & INDUCTION
  section3_appointment: {
    policyName: 'Staff Appointment and Induction',
    byLawsSection: 'section3',
    category: 'HR Operations',
    implementationSteps: [
      {
        step: 1,
        phase: 'Planning',
        activity: 'Prepare Appointment Documentation',
        details: 'Create appointment letter templates, employment contracts, and offer letter formats for all position types',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Legal Advisor'],
        timeline: '1-2 weeks',
        outputs: ['Appointment letter templates', 'Employment contract templates', 'Offer letter formats', 'Terms of employment document'],
        checkpoints: ['Templates legally compliant', 'All position types covered', 'Board approval obtained']
      },
      {
        step: 2,
        phase: 'Preparation',
        activity: 'Pre-joining Formalities',
        details: 'Collect required documents, conduct medical examination, police verification, and pre-employment checks',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Officer', 'Medical Officer', 'Admin Officer'],
        timeline: '1-2 weeks before joining',
        outputs: ['Document checklist completion', 'Medical fitness certificate', 'Verification reports', 'Pre-employment clearance'],
        checkpoints: ['All documents received', 'Medical clearance obtained', 'Verifications completed']
      },
      {
        step: 3,
        phase: 'Implementation',
        activity: 'Issue Appointment Letter',
        details: 'Formal appointment letter issuance with clear terms, designation, salary, benefits, and joining date',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Department Head'],
        timeline: '3-5 days before joining',
        outputs: ['Signed appointment letter', 'Employee acknowledgment', 'Personnel file creation'],
        checkpoints: ['Letter issued on time', 'Employee acceptance received', 'File created']
      },
      {
        step: 4,
        phase: 'Implementation',
        activity: 'First Day Onboarding',
        details: 'Welcome, ID card, access provisioning, workstation setup, introduction to team and facilities tour',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Officer', 'IT Support', 'Facilities', 'Department Head'],
        timeline: 'Day 1',
        outputs: ['ID card', 'Access credentials', 'Workstation setup', 'Welcome kit', 'Attendance enrollment'],
        checkpoints: ['All systems access granted', 'Workspace ready', 'Team introductions done']
      },
      {
        step: 5,
        phase: 'Implementation',
        activity: 'Comprehensive Induction Program',
        details: 'Multi-day induction covering organization, policies, safety, compliance, department-specific training',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Department Heads', 'Safety Officer', 'Compliance Officer'],
        timeline: 'Week 1-2',
        outputs: ['Induction schedule', 'Training materials', 'Completion certificates', 'Assessment results'],
        checkpoints: ['All sessions attended', 'Understanding verified', 'Assessments passed']
      },
      {
        step: 6,
        phase: 'Implementation',
        activity: 'Role-Specific Training',
        details: 'Job-specific training, SOPs, systems training, shadowing experienced staff',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Department Head', 'Supervisor', 'Assigned Mentor'],
        timeline: 'Week 2-4',
        outputs: ['Training plan', 'SOP training records', 'System access training', 'Competency assessment'],
        checkpoints: ['Job requirements understood', 'Systems proficiency achieved', 'Ready for independent work']
      },
      {
        step: 7,
        phase: 'Monitoring',
        activity: 'Buddy/Mentor Assignment',
        details: 'Assign experienced staff member as buddy for guidance and support during initial months',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Department Head', 'Assigned Buddy/Mentor'],
        timeline: 'First 3 months',
        outputs: ['Buddy assignment', 'Regular check-in meetings', 'Support documentation'],
        checkpoints: ['Buddy engaged', 'Regular meetings held', 'Issues addressed']
      },
      {
        step: 8,
        phase: 'Monitoring',
        activity: 'Regular Check-ins',
        details: 'Weekly/bi-weekly meetings with supervisor to review progress, address concerns, provide feedback',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Direct Supervisor', 'HR Officer'],
        timeline: 'First 3 months',
        outputs: ['Meeting minutes', 'Feedback records', 'Progress notes'],
        checkpoints: ['Regular meetings conducted', 'Concerns addressed', 'Progress tracked']
      },
      {
        step: 9,
        phase: 'Monitoring',
        activity: 'End of Induction Assessment',
        details: 'Formal assessment at end of induction period to evaluate readiness and address gaps',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Department Head', 'HR Director'],
        timeline: 'End of Month 1',
        outputs: ['Assessment report', 'Competency evaluation', 'Development plan (if needed)'],
        checkpoints: ['Assessment completed', 'Readiness confirmed', 'Support plan created if needed']
      }
    ],
    committeeInvolved: ['hr_committee', 'board_of_directors'],
    approvalChain: [
      { level: 'Department Head', for: 'Appointment recommendation and induction oversight' },
      { level: 'HR Director', for: 'Appointment letter issuance and induction program' },
      { level: 'Administrative Director', for: 'Senior position appointments' },
      { level: 'Board of Directors', for: 'Senior management appointments' }
    ],
    criticalSuccess: [
      'Smooth joining experience',
      'Comprehensive understanding of role and organization',
      'Quick productivity ramp-up',
      'Strong early engagement and retention'
    ],
    risks: [
      { risk: 'Information overload', mitigation: 'Structured phased induction over multiple weeks' },
      { risk: 'Poor first impression', mitigation: 'Well-prepared onboarding, warm welcome, ready workspace' },
      { risk: 'Early disengagement', mitigation: 'Buddy system, regular check-ins, clear expectations' },
      { risk: 'Documentation gaps', mitigation: 'Comprehensive checklist, verification at each stage' }
    ],
    legalCompliance: [
      'Employment contract requirements',
      'Medical fitness standards',
      'Background verification regulations',
      'Induction training mandates (safety, compliance)'
    ]
  },
  // SECTION 4: PROBATION PERIOD MANAGEMENT
  section4_probation: {
    policyName: 'Probation Period Management',
    byLawsSection: 'section4',
    category: 'HR Operations',
    implementationSteps: [
      {
        step: 1,
        phase: 'Planning',
        activity: 'Define Probation Policy',
        details: 'Establish probation duration (typically 3-6 months), evaluation criteria, extension rules, and confirmation process',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Department Heads'],
        timeline: '1 week',
        outputs: ['Probation policy document', 'Evaluation criteria', 'Timeline standards'],
        checkpoints: ['Policy approved', 'Criteria clear and measurable', 'Process documented']
      },
      {
        step: 2,
        phase: 'Preparation',
        activity: 'Create Evaluation Tools',
        details: 'Develop probation evaluation forms, feedback templates, and assessment rubrics',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Director', 'Training Coordinator'],
        timeline: '1 week',
        outputs: ['Probation evaluation form', 'Monthly review template', 'Final assessment form'],
        checkpoints: ['Forms comprehensive', 'Criteria aligned with job description', 'Easy to use']
      },
      {
        step: 3,
        phase: 'Implementation',
        activity: 'Probation Commencement Meeting',
        details: 'Initial meeting to explain probation terms, expectations, evaluation process, and support available',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Direct Supervisor', 'HR Officer'],
        timeline: 'Day 1 or Week 1',
        outputs: ['Probation terms acknowledgment', 'Goal setting document', 'Evaluation schedule'],
        checkpoints: ['Employee understands terms', 'Goals set', 'Schedule communicated']
      },
      {
        step: 4,
        phase: 'Implementation',
        activity: 'Monthly Progress Reviews',
        details: 'Regular formal reviews to assess performance, provide feedback, and identify development needs',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Direct Supervisor', 'HR Support'],
        timeline: 'Monthly during probation',
        outputs: ['Monthly review reports', 'Feedback documentation', 'Development plans'],
        checkpoints: ['Reviews conducted on time', 'Feedback documented', 'Issues addressed promptly']
      },
      {
        step: 5,
        phase: 'Implementation',
        activity: 'Mid-Probation Assessment',
        details: 'Formal mid-point evaluation to review progress and determine if probation is on track',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Department Head', 'HR Director'],
        timeline: 'Month 2-3 (mid-point)',
        outputs: ['Mid-probation assessment report', 'Decision on continuation/support needed'],
        checkpoints: ['Assessment completed', 'Employee informed', 'Support provided if needed']
      },
      {
        step: 6,
        phase: 'Implementation',
        activity: 'Final Probation Evaluation',
        details: 'Comprehensive end-of-probation assessment covering all performance criteria',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Direct Supervisor', 'Department Head', 'HR Director'],
        timeline: '2 weeks before probation end',
        outputs: ['Final evaluation report', 'Recommendation (confirm/extend/terminate)', 'Documentation'],
        checkpoints: ['Thorough evaluation', 'Justified recommendation', 'Documentation complete']
      },
      {
        step: 7,
        phase: 'Implementation',
        activity: 'Confirmation or Extension Decision',
        details: 'Management decision on confirmation, probation extension, or termination based on evaluation',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['Department Head', 'HR Director', 'Administrative Director'],
        timeline: '1 week before probation end',
        outputs: ['Decision letter (confirmation/extension/termination)', 'Updated employment status'],
        checkpoints: ['Decision timely', 'Employee informed', 'Records updated']
      },
      {
        step: 8,
        phase: 'Monitoring',
        activity: 'Post-Confirmation Integration',
        details: 'For confirmed employees, ensure smooth transition to regular employment with updated benefits',
        responsibleCommittee: 'hr_committee',
        responsibleIndividuals: ['HR Officer', 'Payroll'],
        timeline: 'At confirmation',
        outputs: ['Confirmation letter', 'Updated benefits', 'Permanent employee orientation'],
        checkpoints: ['All benefits activated', 'Systems updated', 'Employee informed of rights']
      }
    ],
    committeeInvolved: ['hr_committee'],
    approvalChain: [
      { level: 'Direct Supervisor', for: 'Monthly reviews and initial recommendation' },
      { level: 'Department Head', for: 'Final evaluation and recommendation' },
      { level: 'HR Director', for: 'Process compliance and documentation' },
      { level: 'Administrative Director', for: 'Final confirmation decision' }
    ],
    criticalSuccess: [
      'Clear expectations set from day one',
      'Regular feedback and support',
      'Fair and documented evaluation',
      'Timely decision-making'
    ],
    risks: [
      { risk: 'Inadequate feedback', mitigation: 'Structured monthly reviews, documentation requirements' },
      { risk: 'Last-minute surprises', mitigation: 'Continuous feedback, mid-probation check, no surprises policy' },
      { risk: 'Bias in evaluation', mitigation: 'Multiple evaluators, objective criteria, HR oversight' },
      { risk: 'Missed deadlines', mitigation: 'Automated reminders, HR monitoring, clear timelines' }
    ],
    legalCompliance: [
      'Labor law probation period limits',
      'Due process in termination during probation',
      'Documentation requirements',
      'Notice period during probation'
    ]
  },
  section5_equal_opportunity: { policyName: 'Equal Opportunity and DEI', byLawsSection: 'section5', category: 'Compliance', status: 'detailed_guide_pending' },
  section6_code_conduct: { policyName: 'Code of Conduct and Ethics', byLawsSection: 'section6', category: 'Governance', status: 'detailed_guide_pending' },
  section9_training: { policyName: 'Training and Development', byLawsSection: 'section9', category: 'HR Development', status: 'detailed_guide_pending' },
  section10_remote_work: { policyName: 'Remote Work and Flexibility', byLawsSection: 'section10', category: 'HR Operations', status: 'detailed_guide_pending' },
  section11_compensation: { policyName: 'Compensation and Benefits', byLawsSection: 'section11', category: 'HR Operations', status: 'detailed_guide_pending' },
  section14_data_privacy: { policyName: 'Data Privacy and Confidentiality', byLawsSection: 'section14', category: 'Compliance', status: 'detailed_guide_pending' },
  section15_intellectual_property: { policyName: 'Intellectual Property Rights', byLawsSection: 'section15', category: 'Legal', status: 'detailed_guide_pending' },
  section16_discipline: { policyName: 'Disciplinary Procedures', byLawsSection: 'section16', category: 'HR Operations', status: 'detailed_guide_pending' },
  section18_conflict_interest: { policyName: 'Conflict of Interest Management', byLawsSection: 'section18', category: 'Ethics', status: 'detailed_guide_pending' },
  section19_gifts_hospitality: { policyName: 'Gifts and Hospitality Policy', byLawsSection: 'section19', category: 'Ethics', status: 'detailed_guide_pending' },
  section20_wellness: { policyName: 'Employee Wellness Programs', byLawsSection: 'section20', category: 'Employee Relations', status: 'detailed_guide_pending' },
  section21_communication: { policyName: 'Communication and Information Sharing', byLawsSection: 'section21', category: 'Operations', status: 'detailed_guide_pending' },
  section22_records: { policyName: 'Record Management and Retention', byLawsSection: 'section22', category: 'Compliance', status: 'detailed_guide_pending' },
  section23_quality: { policyName: 'Quality Assurance and Improvement', byLawsSection: 'section23', category: 'Clinical', status: 'detailed_guide_pending' },
  section24_infection_control: { policyName: 'Infection Prevention and Control', byLawsSection: 'section24', category: 'Clinical Safety', status: 'detailed_guide_pending' },
  section25_emergency_preparedness: { policyName: 'Emergency Preparedness and Response', byLawsSection: 'section25', category: 'Safety', status: 'detailed_guide_pending' },
  section26_patient_rights: { policyName: 'Patient Rights and Responsibilities', byLawsSection: 'section26', category: 'Clinical', status: 'detailed_guide_pending' },
  section27_research_ethics: { policyName: 'Research and Clinical Trials Ethics', byLawsSection: 'section27', category: 'Ethics', status: 'detailed_guide_pending' },
  section28_partnerships: { policyName: 'External Partnerships and Collaboration', byLawsSection: 'section28', category: 'Operations', status: 'detailed_guide_pending' },
  section29_amendments: { policyName: 'By-Laws Amendments and Reviews', byLawsSection: 'section29', category: 'Governance', status: 'detailed_guide_pending' },
  section30_interpretation: { policyName: 'Interpretation and Dispute Resolution', byLawsSection: 'section30', category: 'Governance', status: 'detailed_guide_pending' }
};
