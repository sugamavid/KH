// Real Interactive Form Templates with Fillable Fields

export const formTemplates = {
  employmentApplication: {
    code: 'ANX-A-1',
    title: 'Employment Application Form',
    category: 'Recruitment',
    sections: [
      {
        title: 'Personal Information',
        description: 'Please provide your personal details',
        fields: [
          { id: 'firstName', label: 'First Name', type: 'text', required: true, placeholder: 'Enter your first name' },
          { id: 'middleName', label: 'Middle Name', type: 'text', placeholder: 'Enter your middle name' },
          { id: 'lastName', label: 'Last Name', type: 'text', required: true, placeholder: 'Enter your last name' },
          { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
          { id: 'gender', label: 'Gender', type: 'select', required: true, options: ['Male', 'Female', 'Other', 'Prefer not to say'] },
          { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'your.email@example.com' },
          { id: 'phone', label: 'Phone Number', type: 'tel', required: true, placeholder: '+91 XXXXX XXXXX' },
          { id: 'alternatePhone', label: 'Alternate Phone', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
        ],
      },
      {
        title: 'Address Details',
        description: 'Current and permanent address information',
        fields: [
          { id: 'currentAddress', label: 'Current Address', type: 'textarea', required: true, rows: 3, placeholder: 'House/Flat No., Street, Landmark' },
          { id: 'city', label: 'City', type: 'text', required: true },
          { id: 'state', label: 'State', type: 'text', required: true },
          { id: 'pincode', label: 'PIN Code', type: 'text', required: true, placeholder: '6 digit PIN' },
          { id: 'sameAsAbove', label: 'Permanent address same as current', type: 'checkbox', text: 'Check if permanent address is same as current address' },
        ],
      },
      {
        title: 'Educational Qualifications',
        description: 'Highest educational qualification details',
        fields: [
          { id: 'degree', label: 'Highest Degree', type: 'select', required: true, options: ['High School', 'Diploma', 'Bachelor', 'Master', 'PhD', 'Other'] },
          { id: 'specialization', label: 'Specialization/Major', type: 'text', required: true, placeholder: 'e.g., Computer Science, Nursing' },
          { id: 'university', label: 'University/Institution', type: 'text', required: true },
          { id: 'yearOfPassing', label: 'Year of Passing', type: 'text', required: true, placeholder: 'YYYY' },
          { id: 'percentage', label: 'Percentage/CGPA', type: 'text', required: true, placeholder: 'e.g., 85% or 8.5 CGPA' },
        ],
      },
      {
        title: 'Professional Experience',
        description: 'Current/Most recent employment details',
        fields: [
          { id: 'currentCompany', label: 'Current/Last Company', type: 'text', placeholder: 'Company name' },
          { id: 'designation', label: 'Designation', type: 'text', placeholder: 'Your job title' },
          { id: 'joiningDate', label: 'Joining Date', type: 'date' },
          { id: 'relievingDate', label: 'Relieving Date', type: 'date', helperText: 'Leave blank if currently employed' },
          { id: 'currentSalary', label: 'Current CTC (Annual)', type: 'text', placeholder: 'In INR' },
          { id: 'responsibilities', label: 'Key Responsibilities', type: 'textarea', rows: 4, placeholder: 'Describe your main duties and achievements' },
        ],
      },
      {
        title: 'Position Applied & References',
        description: 'Job application and reference details',
        fields: [
          { id: 'position', label: 'Position Applied For', type: 'select', required: true, options: [
            'Nurse',
            'Staff Nurse',
            'Medical Officer',
            'HR Manager',
            'Administrative Officer',
            'IT Officer',
            'Pharmacist',
            'Lab Technician',
            'Other'
          ]},
          { id: 'department', label: 'Preferred Department', type: 'select', required: true, options: [
            'Emergency', 'ICU', 'General Ward', 'OPD', 'Surgery', 'Pediatrics',
            'Human Resources', 'Administration', 'IT', 'Pharmacy', 'Laboratory'
          ]},
          { id: 'expectedSalary', label: 'Expected CTC (Annual)', type: 'text', placeholder: 'In INR' },
          { id: 'noticePeriod', label: 'Notice Period', type: 'select', options: ['Immediate', '15 days', '30 days', '60 days', '90 days'] },
          { id: 'reference1Name', label: 'Reference 1 - Name', type: 'text', required: true },
          { id: 'reference1Contact', label: 'Reference 1 - Contact', type: 'tel', required: true },
          { id: 'reference1Designation', label: 'Reference 1 - Designation & Company', type: 'text', required: true },
        ],
      },
      {
        title: 'Documents & Declaration',
        description: 'Upload required documents and declaration',
        fields: [
          { id: 'resume', label: 'Resume/CV', type: 'file', required: true, accept: '.pdf,.doc,.docx', acceptedFormats: 'PDF, DOC, DOCX (max 2MB)' },
          { id: 'photo', label: 'Passport Size Photograph', type: 'file', required: true, accept: 'image/*', acceptedFormats: 'JPG, PNG (max 1MB)' },
          { id: 'certificates', label: 'Educational Certificates', type: 'file', accept: '.pdf', acceptedFormats: 'PDF (max 5MB)' },
          { id: 'declaration', label: 'I hereby declare that all information provided is accurate', type: 'checkbox', required: true, text: 'I hereby declare that all the information provided above is true and accurate to the best of my knowledge. I understand that any false information may result in rejection of my application or termination of employment.' },
        ],
      },
    ],
  },

  leaveApplication: {
    code: 'ANX-B-1',
    title: 'Leave Application Form',
    category: 'Leave Management',
    sections: [
      {
        title: 'Employee Information',
        description: 'Your employment details',
        fields: [
          { id: 'employeeId', label: 'Employee ID', type: 'text', required: true, placeholder: 'Enter your employee ID' },
          { id: 'employeeName', label: 'Full Name', type: 'text', required: true, placeholder: 'As per records' },
          { id: 'designation', label: 'Designation', type: 'text', required: true },
          { id: 'department', label: 'Department', type: 'select', required: true, options: [
            'Emergency', 'ICU', 'General Ward', 'OPD', 'Surgery',
            'Human Resources', 'Administration', 'IT', 'Pharmacy', 'Laboratory'
          ]},
          { id: 'reportingManager', label: 'Reporting Manager', type: 'text', required: true },
        ],
      },
      {
        title: 'Leave Details',
        description: 'Specify your leave requirements',
        fields: [
          { id: 'leaveType', label: 'Type of Leave', type: 'select', required: true, options: [
            'Casual Leave (CL)',
            'Earned Leave (EL)',
            'Sick Leave (SL)',
            'Maternity Leave',
            'Paternity Leave',
            'Compensatory Off',
            'Loss of Pay (LOP)',
            'Other'
          ]},
          { id: 'fromDate', label: 'From Date', type: 'date', required: true },
          { id: 'toDate', label: 'To Date', type: 'date', required: true },
          { id: 'totalDays', label: 'Total Days', type: 'text', helperText: 'Calculated automatically' },
          { id: 'halfDay', label: 'Half Day Leave', type: 'radio', options: ['Full Day', 'First Half', 'Second Half'] },
          { id: 'reason', label: 'Reason for Leave', type: 'textarea', required: true, rows: 4, placeholder: 'Please provide reason for leave application' },
          { id: 'contactDuringLeave', label: 'Contact Number During Leave', type: 'tel', required: true },
          { id: 'emergencyContact', label: 'Emergency Contact Person', type: 'text' },
        ],
      },
      {
        title: 'Supporting Documents',
        description: 'Attach relevant documents if required',
        fields: [
          { id: 'medicalCertificate', label: 'Medical Certificate', type: 'file', accept: '.pdf,image/*', acceptedFormats: 'PDF, JPG, PNG (Required for sick leave > 2 days)' },
          { id: 'otherDocuments', label: 'Other Supporting Documents', type: 'file', accept: '.pdf,image/*', acceptedFormats: 'PDF, JPG, PNG' },
          { id: 'acknowledgement', label: 'I acknowledge company leave policy', type: 'checkbox', required: true, text: 'I have read and understood the hospital leave policy. I will complete pending work handover before proceeding on leave.' },
        ],
      },
    ],
  },

  performanceAppraisal: {
    code: 'ANX-C-1',
    title: 'Performance Appraisal Form',
    category: 'Performance Management',
    sections: [
      {
        title: 'Employee Details',
        description: 'Basic employee information for appraisal',
        fields: [
          { id: 'employeeId', label: 'Employee ID', type: 'text', required: true },
          { id: 'employeeName', label: 'Employee Name', type: 'text', required: true },
          { id: 'designation', label: 'Designation', type: 'text', required: true },
          { id: 'department', label: 'Department', type: 'text', required: true },
          { id: 'reviewPeriod', label: 'Review Period', type: 'text', required: true, placeholder: 'e.g., Jan 2024 - Dec 2024' },
          { id: 'dateOfJoining', label: 'Date of Joining', type: 'date', required: true },
        ],
      },
      {
        title: 'Self Assessment',
        description: 'Rate yourself on the following parameters',
        fields: [
          { id: 'goalAchievement', label: 'Goal Achievement (40%)', type: 'select', required: true, options: ['5 - Outstanding', '4 - Exceeds Expectations', '3 - Meets Expectations', '2 - Needs Improvement', '1 - Unsatisfactory'] },
          { id: 'jobKnowledge', label: 'Job Knowledge & Skills (25%)', type: 'select', required: true, options: ['5 - Outstanding', '4 - Exceeds Expectations', '3 - Meets Expectations', '2 - Needs Improvement', '1 - Unsatisfactory'] },
          { id: 'qualityOfWork', label: 'Quality of Work (15%)', type: 'select', required: true, options: ['5 - Outstanding', '4 - Exceeds Expectations', '3 - Meets Expectations', '2 - Needs Improvement', '1 - Unsatisfactory'] },
          { id: 'initiative', label: 'Initiative & Innovation (10%)', type: 'select', required: true, options: ['5 - Outstanding', '4 - Exceeds Expectations', '3 - Meets Expectations', '2 - Needs Improvement', '1 - Unsatisfactory'] },
          { id: 'teamwork', label: 'Teamwork & Collaboration (10%)', type: 'select', required: true, options: ['5 - Outstanding', '4 - Exceeds Expectations', '3 - Meets Expectations', '2 - Needs Improvement', '1 - Unsatisfactory'] },
          { id: 'achievements', label: 'Key Achievements This Year', type: 'textarea', required: true, rows: 4, placeholder: 'List your major accomplishments and contributions' },
          { id: 'challenges', label: 'Challenges Faced', type: 'textarea', rows: 3, placeholder: 'Describe any significant challenges encountered' },
          { id: 'trainingNeeds', label: 'Training & Development Needs', type: 'textarea', rows: 3, placeholder: 'Areas where you need training or skill development' },
        ],
      },
      {
        title: 'Goals for Next Year',
        description: 'Set objectives for the upcoming period',
        fields: [
          { id: 'goal1', label: 'Goal 1', type: 'textarea', required: true, rows: 2, placeholder: 'Specific, Measurable, Achievable goal' },
          { id: 'goal2', label: 'Goal 2', type: 'textarea', required: true, rows: 2, placeholder: 'Specific, Measurable, Achievable goal' },
          { id: 'goal3', label: 'Goal 3', type: 'textarea', rows: 2, placeholder: 'Specific, Measurable, Achievable goal' },
          { id: 'careerAspirations', label: 'Career Aspirations', type: 'textarea', rows: 3, placeholder: 'Where do you see yourself in the next 2-3 years?' },
        ],
      },
    ],
  },

  resignationLetter: {
    code: 'ANX-F-1',
    title: 'Resignation Letter',
    category: 'Separation',
    sections: [
      {
        title: 'Employee Information',
        description: 'Your current employment details',
        fields: [
          { id: 'employeeId', label: 'Employee ID', type: 'text', required: true },
          { id: 'fullName', label: 'Full Name', type: 'text', required: true },
          { id: 'designation', label: 'Current Designation', type: 'text', required: true },
          { id: 'department', label: 'Department', type: 'text', required: true },
          { id: 'dateOfJoining', label: 'Date of Joining', type: 'date', required: true },
        ],
      },
      {
        title: 'Resignation Details',
        description: 'Details about your resignation',
        fields: [
          { id: 'resignationDate', label: 'Resignation Submission Date', type: 'date', required: true },
          { id: 'lastWorkingDate', label: 'Proposed Last Working Date', type: 'date', required: true, helperText: 'As per notice period' },
          { id: 'noticePeriod', label: 'Notice Period', type: 'select', required: true, options: ['30 days', '60 days', '90 days', 'As per contract'] },
          { id: 'reasonForLeaving', label: 'Reason for Leaving', type: 'select', required: true, options: [
            'Better Opportunity',
            'Higher Studies',
            'Personal Reasons',
            'Health Reasons',
            'Relocation',
            'Career Change',
            'Prefer not to say'
          ]},
          { id: 'detailedReason', label: 'Detailed Reason (Optional)', type: 'textarea', rows: 4, placeholder: 'You may provide additional details if you wish' },
          { id: 'exitInterview', label: 'Willing to participate in exit interview', type: 'radio', required: true, options: ['Yes', 'No'] },
        ],
      },
      {
        title: 'Handover & Clearance',
        description: 'Transition planning',
        fields: [
          { id: 'handoverPlan', label: 'Handover Plan', type: 'textarea', rows: 4, placeholder: 'Brief plan for knowledge transfer and pending work completion' },
          { id: 'acknowledgement', label: 'I will complete all exit formalities', type: 'checkbox', required: true, text: 'I acknowledge that I will complete all exit formalities including handover of responsibilities, return of company property, and clearance from all departments.' },
        ],
      },
    ],
  },

  trainingNomination: {
    code: 'ANX-D-1',
    title: 'Training Nomination Form',
    category: 'Training',
    sections: [
      {
        title: 'Employee & Training Details',
        fields: [
          { id: 'employeeId', label: 'Employee ID', type: 'text', required: true },
          { id: 'employeeName', label: 'Employee Name', type: 'text', required: true },
          { id: 'designation', label: 'Designation', type: 'text', required: true },
          { id: 'department', label: 'Department', type: 'text', required: true },
          { id: 'trainingTitle', label: 'Training Program Name', type: 'text', required: true },
          { id: 'trainingProvider', label: 'Training Provider/Organizer', type: 'text', required: true },
          { id: 'trainingType', label: 'Training Type', type: 'select', required: true, options: ['Internal', 'External', 'Online', 'Workshop', 'Conference', 'Certification Course'] },
          { id: 'fromDate', label: 'Start Date', type: 'date', required: true },
          { id: 'toDate', label: 'End Date', type: 'date', required: true },
          { id: 'location', label: 'Training Location', type: 'text', required: true },
          { id: 'cost', label: 'Training Cost (INR)', type: 'text', placeholder: 'Enter total cost' },
          { id: 'justification', label: 'Training Justification', type: 'textarea', required: true, rows: 4, placeholder: 'Why is this training necessary? How will it benefit your role?' },
        ],
      },
    ],
  },

  incidentReport: {
    code: 'ANX-G-2',
    title: 'Incident Report Form',
    category: 'Compliance',
    sections: [
      {
        title: 'Reporter Information',
        fields: [
          { id: 'reporterName', label: 'Your Name', type: 'text', required: true },
          { id: 'reporterDesignation', label: 'Your Designation', type: 'text', required: true },
          { id: 'reporterDepartment', label: 'Your Department', type: 'text', required: true },
          { id: 'reportDate', label: 'Report Date', type: 'date', required: true },
        ],
      },
      {
        title: 'Incident Details',
        fields: [
          { id: 'incidentType', label: 'Type of Incident', type: 'select', required: true, options: [
            'Workplace Accident',
            'Near Miss',
            'Safety Hazard',
            'Equipment Malfunction',
            'Security Breach',
            'Policy Violation',
            'Other'
          ]},
          { id: 'incidentDate', label: 'Incident Date', type: 'date', required: true },
          { id: 'incidentTime', label: 'Incident Time', type: 'text', required: true, placeholder: 'HH:MM' },
          { id: 'location', label: 'Location of Incident', type: 'text', required: true },
          { id: 'personsInvolved', label: 'Persons Involved', type: 'textarea', rows: 2, placeholder: 'Names and designations' },
          { id: 'witnesses', label: 'Witnesses', type: 'textarea', rows: 2, placeholder: 'Names and contact information' },
          { id: 'description', label: 'Detailed Description', type: 'textarea', required: true, rows: 6, placeholder: 'Describe what happened in detail' },
          { id: 'injuries', label: 'Any Injuries?', type: 'radio', required: true, options: ['Yes', 'No'] },
          { id: 'medicalAttention', label: 'Medical Attention Required?', type: 'radio', options: ['Yes', 'No'] },
          { id: 'actionTaken', label: 'Immediate Action Taken', type: 'textarea', rows: 3, placeholder: 'What actions were taken immediately after the incident?' },
          { id: 'evidence', label: 'Upload Evidence (Photos, Documents)', type: 'file', accept: 'image/*,.pdf' },
        ],
      },
    ],
  },

  salaryCertificate: {
    code: 'ANX-H-2',
    title: 'Salary Certificate Request',
    category: 'Certificates',
    sections: [
      {
        title: 'Employee Information',
        fields: [
          { id: 'employeeId', label: 'Employee ID', type: 'text', required: true },
          { id: 'fullName', label: 'Full Name', type: 'text', required: true },
          { id: 'designation', label: 'Designation', type: 'text', required: true },
          { id: 'department', label: 'Department', type: 'text', required: true },
          { id: 'dateOfJoining', label: 'Date of Joining', type: 'date', required: true },
        ],
      },
      {
        title: 'Certificate Requirements',
        fields: [
          { id: 'purpose', label: 'Purpose of Certificate', type: 'select', required: true, options: [
            'Loan Application',
            'Visa Processing',
            'Rental Agreement',
            'Credit Card Application',
            'Other Official Purpose'
          ]},
          { id: 'addressedTo', label: 'To be Addressed To', type: 'text', required: true, placeholder: 'e.g., Bank Name, Embassy' },
          { id: 'includeBreakup', label: 'Include Salary Breakup?', type: 'radio', required: true, options: ['Yes', 'No'] },
          { id: 'numberOfCopies', label: 'Number of Copies Required', type: 'select', required: true, options: ['1', '2', '3', '4', '5'] },
          { id: 'urgency', label: 'Urgency', type: 'select', required: true, options: ['Standard (3 days)', 'Urgent (1 day - Additional charges may apply)'] },
        ],
      },
    ],
  },

  overtimeAuthorization: {
    code: 'ANX-I-1',
    title: 'Overtime Authorization Form',
    category: 'Operations',
    sections: [
      {
        title: 'Employee & Overtime Details',
        fields: [
          { id: 'employeeId', label: 'Employee ID', type: 'text', required: true },
          { id: 'employeeName', label: 'Employee Name', type: 'text', required: true },
          { id: 'designation', label: 'Designation', type: 'text', required: true },
          { id: 'department', label: 'Department', type: 'text', required: true },
          { id: 'overtimeDate', label: 'Date of Overtime', type: 'date', required: true },
          { id: 'fromTime', label: 'From Time', type: 'text', required: true, placeholder: 'HH:MM' },
          { id: 'toTime', label: 'To Time', type: 'text', required: true, placeholder: 'HH:MM' },
          { id: 'totalHours', label: 'Total Hours', type: 'text', required: true, placeholder: 'Auto-calculated' },
          { id: 'reason', label: 'Reason for Overtime', type: 'textarea', required: true, rows: 4, placeholder: 'Explain why overtime is necessary' },
          { id: 'workDescription', label: 'Work to be Performed', type: 'textarea', required: true, rows: 3, placeholder: 'Describe the tasks/activities' },
          { id: 'compensation', label: 'Compensation Type', type: 'radio', required: true, options: ['Overtime Pay', 'Compensatory Off'] },
        ],
      },
    ],
  },

  transferRequest: {
    code: 'ANX-I-2',
    title: 'Transfer Request Form',
    category: 'Operations',
    sections: [
      {
        title: 'Current Details',
        fields: [
          { id: 'employeeId', label: 'Employee ID', type: 'text', required: true },
          { id: 'employeeName', label: 'Full Name', type: 'text', required: true },
          { id: 'currentDesignation', label: 'Current Designation', type: 'text', required: true },
          { id: 'currentDepartment', label: 'Current Department', type: 'text', required: true },
          { id: 'dateOfJoining', label: 'Date of Joining Current Role', type: 'date', required: true },
        ],
      },
      {
        title: 'Transfer Request Details',
        fields: [
          { id: 'transferType', label: 'Type of Transfer', type: 'select', required: true, options: [
            'Department Transfer',
            'Shift Change',
            'Location Transfer',
            'Role Change'
          ]},
          { id: 'requestedDepartment', label: 'Requested Department', type: 'text', required: true },
          { id: 'requestedShift', label: 'Requested Shift (if applicable)', type: 'select', options: ['Day Shift', 'Night Shift', 'Rotating'] },
          { id: 'preferredDate', label: 'Preferred Transfer Date', type: 'date', required: true },
          { id: 'reason', label: 'Reason for Transfer Request', type: 'textarea', required: true, rows: 5, placeholder: 'Explain why you are requesting this transfer' },
          { id: 'relevantSkills', label: 'Relevant Skills/Experience', type: 'textarea', rows: 3, placeholder: 'Skills that make you suitable for the requested position' },
        ],
      },
    ],
  },

  grievanceComplaint: {
    code: 'ANX-G-3',
    title: 'Grievance Complaint Form',
    category: 'Compliance',
    sections: [
      {
        title: 'Complainant Information',
        fields: [
          { id: 'employeeId', label: 'Employee ID', type: 'text', required: true },
          { id: 'name', label: 'Your Name', type: 'text', required: true },
          { id: 'designation', label: 'Designation', type: 'text', required: true },
          { id: 'department', label: 'Department', type: 'text', required: true },
          { id: 'contactNumber', label: 'Contact Number', type: 'tel', required: true },
          { id: 'email', label: 'Email Address', type: 'email', required: true },
        ],
      },
      {
        title: 'Grievance Details',
        fields: [
          { id: 'grievanceType', label: 'Type of Grievance', type: 'select', required: true, options: [
            'Workplace Harassment',
            'Discrimination',
            'Unfair Treatment',
            'Safety Concern',
            'Policy Violation',
            'Payment/Benefits Issue',
            'Other'
          ]},
          { id: 'dateOfIncident', label: 'Date of Incident/Issue', type: 'date', required: true },
          { id: 'personsConcerned', label: 'Person(s) Concerned', type: 'textarea', rows: 2, placeholder: 'Names and designations (if applicable)' },
          { id: 'detailedComplaint', label: 'Detailed Description of Grievance', type: 'textarea', required: true, rows: 8, placeholder: 'Provide a complete and accurate description of the issue' },
          { id: 'witnesses', label: 'Witnesses (if any)', type: 'textarea', rows: 2, placeholder: 'Names and contact information' },
          { id: 'previousAttempts', label: 'Previous Attempts to Resolve', type: 'textarea', rows: 3, placeholder: 'Have you tried to resolve this issue before? If yes, please describe' },
          { id: 'expectedResolution', label: 'Expected Resolution', type: 'textarea', required: true, rows: 3, placeholder: 'What outcome are you seeking?' },
          { id: 'supportingDocuments', label: 'Supporting Documents/Evidence', type: 'file', accept: '.pdf,image/*', acceptedFormats: 'PDF, Images' },
          { id: 'confidentiality', label: 'Request confidential handling', type: 'checkbox', text: 'I request that this grievance be handled with strict confidentiality' },
        ],
      },
    ],
  },
};

// Scenario-based form suggestions
export const formScenarios = [
  {
    id: 'joining',
    title: "I'm Joining the Hospital",
    icon: '👋',
    description: 'New employee onboarding forms',
    color: 'from-green-500 to-emerald-600',
    forms: ['employmentApplication', 'backgroundVerification', 'joiningForm']
  },
  {
    id: 'leave',
    title: "I Need Time Off",
    icon: '🌴',
    description: 'Leave application and approval',
    color: 'from-blue-500 to-cyan-600',
    forms: ['leaveApplication', 'medicalCertificate']
  },
  {
    id: 'performance',
    title: "Performance Review",
    icon: '⭐',
    description: 'Appraisal and goal setting',
    color: 'from-purple-500 to-pink-600',
    forms: ['performanceAppraisal', 'goalSetting']
  },
  {
    id: 'leaving',
    title: "I'm Planning to Leave",
    icon: '👋',
    description: 'Resignation and exit process',
    color: 'from-orange-500 to-red-600',
    forms: ['resignationLetter', 'exitInterview']
  },
  {
    id: 'incident',
    title: "Report an Issue",
    icon: '⚠️',
    description: 'Incidents and grievances',
    color: 'from-red-500 to-rose-600',
    forms: ['incidentReport', 'grievanceComplaint']
  },
  {
    id: 'certificate',
    title: "I Need a Certificate",
    icon: '📜',
    description: 'Official certificates and letters',
    color: 'from-amber-500 to-yellow-600',
    forms: ['salaryCertificate', 'experienceCertificate']
  },
  {
    id: 'training',
    title: "Training & Development",
    icon: '📚',
    description: 'Training nominations and feedback',
    color: 'from-indigo-500 to-blue-600',
    forms: ['trainingNomination', 'trainingFeedback']
  },
  {
    id: 'operations',
    title: "Work Related Requests",
    icon: '⚙️',
    description: 'Overtime, transfers, equipment',
    color: 'from-gray-500 to-slate-600',
    forms: ['overtimeAuthorization', 'transferRequest']
  },
];

export default formTemplates;
