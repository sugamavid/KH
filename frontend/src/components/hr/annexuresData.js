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
      { 
        name: 'Employment Application Form', 
        code: 'EMP-001', 
        description: 'Standard application form for job applicants',
        sections: [
          {
            title: 'Personal Information',
            fields: ['Full Name (as per official documents)', 'Date of Birth', 'Gender', 'Blood Group', 'Nationality', 'Religion', 'Marital Status', 'Father\'s/Spouse Name', 'Current Address', 'Permanent Address', 'Contact Numbers (Mobile, Alternate)', 'Email Address (Personal)', 'Aadhaar Number', 'PAN Card Number']
          },
          {
            title: 'Position Applied For',
            fields: ['Department', 'Designation', 'Specialization (if applicable)', 'Employment Type (Permanent/Contract/Temporary)', 'Expected Salary', 'Available to Join From', 'Notice Period (if currently employed)', 'Preferred Location', 'Willingness to Relocate']
          },
          {
            title: 'Educational Qualifications',
            fields: ['Highest Qualification', 'Degree/Diploma Name', 'Specialization', 'University/Board', 'Year of Passing', 'Percentage/CGPA', 'Professional Certifications (if any)', 'Registration Numbers (Medical Council, Nursing Council, etc.)', 'Continuing Medical Education (CME) Credits']
          },
          {
            title: 'Work Experience',
            fields: ['Total Years of Experience', 'Current Employer Name', 'Current Designation', 'Current Salary (CTC)', 'Date of Joining Current Organization', 'Reason for Leaving', 'Previous Employers (Company, Designation, Duration)', 'Key Responsibilities', 'Major Achievements', 'Clinical Experience (for medical staff)', 'Surgical Experience Details (for doctors)']
          },
          {
            title: 'Skills & Competencies',
            fields: ['Technical Skills', 'Software Proficiency (HMIS, EMR, MS Office)', 'Languages Known (Read, Write, Speak)', 'Special Skills/Training', 'Research Publications (if any)', 'Conference Presentations']
          },
          {
            title: 'References',
            fields: ['Reference 1: Name, Designation, Organization, Contact Number, Email', 'Reference 2: Name, Designation, Organization, Contact Number, Email', 'Professional Reference (if applicable)']
          },
          {
            title: 'Declaration',
            fields: ['I hereby declare that all information provided is true and correct. I understand that any false information may lead to rejection of application or termination if employed.', 'Place:', 'Date:', 'Applicant Signature:']
          }
        ],
        instructions: 'Fill all sections completely. Attach copies of educational certificates, experience letters, ID proof, and recent passport-size photograph. Incomplete applications will not be considered.',
        approvalRequired: 'HR Department',
        processingTime: '7-10 business days'
      },
      { 
        name: 'Offer Letter Template', 
        code: 'EMP-002', 
        description: 'Official offer letter format',
        sections: [
          {
            title: 'Letter Head',
            fields: ['Koyili Hospital Logo', 'Hospital Address', 'Date', 'Reference Number']
          },
          {
            title: 'Candidate Details',
            fields: ['Candidate Name', 'Candidate Address', 'Subject: Offer of Employment']
          },
          {
            title: 'Body Content',
            fields: ['Dear [Candidate Name],', 'We are pleased to offer you the position of [Designation] in the [Department] at Koyili Hospital. Your employment will commence on [Date of Joining] and will be subject to the following terms and conditions:', '1. Designation and Department', '2. Reporting To: [Supervisor Name and Designation]', '3. Location: Koyili Hospital, Kannur', '4. Probation Period: 6 months from date of joining', '5. Compensation Details: Basic Salary, HRA, DA, Special Allowances, Total CTC', '6. Benefits: Medical Insurance, PF, Gratuity, Leave Entitlements', '7. Working Hours: As per department requirements', '8. Notice Period: As per By-Laws', '9. Confidentiality: Bound by confidentiality agreement', '10. Background Verification: Subject to satisfactory verification']
          },
          {
            title: 'Documents Required',
            fields: ['Educational Certificates (Originals for verification)', 'Experience Letters', 'Relieving Letter from Previous Employer', 'ID Proofs (Aadhaar, PAN, Passport)', 'Passport Size Photographs', 'Medical Fitness Certificate', 'Police Verification Certificate', 'Professional Registration Certificates']
          },
          {
            title: 'Acceptance',
            fields: ['Please confirm your acceptance by signing and returning this letter by [Date]. This offer is valid for 7 days from the date of issue.', 'We look forward to welcoming you to Koyili Hospital.', 'Sincerely,', '[Name]', '[Designation]', 'Chief Human Resources Officer', 'For Koyili Hospital']
          },
          {
            title: 'Acceptance by Candidate',
            fields: ['I, [Candidate Name], accept the above terms and conditions of employment.', 'Signature:', 'Date:', 'Place:']
          }
        ],
        instructions: 'To be issued after final interview and approval by department head and CHRO. Verify all details before issuing.',
        approvalRequired: 'CHRO',
        processingTime: '2-3 business days'
      },
      { 
        name: 'Appointment Letter Template', 
        code: 'EMP-003', 
        description: 'Formal appointment letter (post joining)',
        sections: [
          {
            title: 'Appointment Confirmation',
            fields: ['This is to confirm your appointment as [Designation] in [Department] effective [Date].', 'Your employee ID is: [EMP-ID]', 'Your employment is governed by Koyili Hospital HR By-Laws and applicable policies.']
          },
          {
            title: 'Terms of Employment',
            fields: ['Employment Type: Permanent/Contract/Probationary', 'Probation Period: 6 months', 'Confirmation: Subject to satisfactory performance', 'Remuneration: As per offer letter', 'Reporting: [Immediate Supervisor Name and Designation]', 'Working Hours: [Shift timings or standard hours]', 'Weekly Off: As per roster/policy', 'Leave Entitlements: Casual Leave (12 days), Sick Leave (10 days), Annual Leave (20 days)', 'Notice Period: 30 days (or as per By-Laws)', 'Retirement Age: 60 years']
          },
          {
            title: 'Roles and Responsibilities',
            fields: ['Job Description: [Detailed responsibilities]', 'Key Performance Indicators', 'Quality and Safety Standards', 'Compliance Requirements', 'Continuing Education Expectations']
          },
          {
            title: 'Code of Conduct',
            fields: ['You are required to comply with Hospital policies, by-laws, and code of conduct', 'Maintain confidentiality of patient and organizational information', 'Adhere to professional ethics and standards', 'Report any violations or concerns to appropriate authorities']
          },
          {
            title: 'Signature',
            fields: ['Authorized Signatory', 'Name and Designation', 'Date', 'Hospital Seal']
          },
          {
            title: 'Acknowledgment',
            fields: ['I acknowledge receipt of this appointment letter and agree to the terms stated.', 'Employee Signature:', 'Employee Name:', 'Date:']
          }
        ],
        instructions: 'Issued after candidate joins and completes initial documentation. One copy to be filed in personnel file.',
        approvalRequired: 'HR Head',
        processingTime: '1-2 business days'
      },
      { 
        name: 'Employee Information Form', 
        code: 'EMP-004', 
        description: 'Comprehensive personal and professional details',
        sections: [
          {
            title: 'Basic Information',
            fields: ['Employee ID', 'Full Name', 'Date of Birth', 'Age', 'Gender', 'Blood Group', 'Marital Status', 'Anniversary Date (if married)', 'Number of Dependents']
          },
          {
            title: 'Contact Information',
            fields: ['Current Residential Address', 'Permanent Address', 'City, State, PIN Code', 'Mobile Number (Primary)', 'Mobile Number (Alternate)', 'Personal Email', 'Official Email']
          },
          {
            title: 'Identity Documents',
            fields: ['Aadhaar Number', 'PAN Card Number', 'Passport Number (if available)', 'Driving License Number', 'Voter ID Number']
          },
          {
            title: 'Family Details',
            fields: ['Father\'s Name', 'Mother\'s Name', 'Spouse Name (if married)', 'Spouse Occupation', 'Children Details (Name, Age, School/College)']
          },
          {
            title: 'Educational Background',
            fields: ['Highest Qualification', 'Degree/Diploma Details', 'University Name', 'Year of Passing', 'Additional Certifications', 'Professional Registrations']
          },
          {
            title: 'Employment Details',
            fields: ['Date of Joining', 'Department', 'Designation', 'Employment Type', 'Reporting Manager', 'Work Location', 'Shift Pattern', 'Employee Status (Active/Probation/Confirmed)']
          },
          {
            title: 'Previous Employment',
            fields: ['Last Employer Name', 'Last Designation', 'Duration of Employment', 'Reason for Leaving', 'Total Experience (Years)']
          },
          {
            title: 'Languages Known',
            fields: ['Mother Tongue', 'Languages (Read, Write, Speak proficiency)']
          }
        ],
        instructions: 'Complete all fields accurately. Update any changes in personal information within 7 days.',
        approvalRequired: 'None (Self-declaration)',
        processingTime: 'Immediate'
      },
      { 
        name: 'Emergency Contact Form', 
        code: 'EMP-005', 
        description: 'Emergency contact information for critical situations',
        sections: [
          {
            title: 'Primary Emergency Contact',
            fields: ['Contact Name', 'Relationship with Employee', 'Mobile Number', 'Alternate Number', 'Residential Address', 'Email Address (if available)', 'Availability (24x7 or specific hours)']
          },
          {
            title: 'Secondary Emergency Contact',
            fields: ['Contact Name', 'Relationship with Employee', 'Mobile Number', 'Alternate Number', 'Residential Address']
          },
          {
            title: 'Medical Information',
            fields: ['Blood Group', 'Known Allergies', 'Chronic Medical Conditions', 'Current Medications', 'Preferred Hospital (in case of emergency)', 'Medical Insurance Details', 'Policy Number', 'Insurance Provider']
          },
          {
            title: 'Additional Information',
            fields: ['Person Authorized to Take Decisions (if employee incapacitated)', 'Special Instructions or Considerations', 'Organ Donor Status (Yes/No/Not Decided)']
          },
          {
            title: 'Declaration',
            fields: ['I authorize Koyili Hospital to contact the above persons in case of emergency.', 'Employee Signature:', 'Date:']
          }
        ],
        instructions: 'Keep this information updated. Notify HR immediately of any changes.',
        approvalRequired: 'None',
        processingTime: 'Immediate'
      },
      { 
        name: 'Bank Details Form', 
        code: 'EMP-006', 
        description: 'Salary account and payment information',
        sections: [
          {
            title: 'Bank Account Details',
            fields: ['Bank Name', 'Branch Name', 'Branch Address', 'Account Holder Name (as per bank records)', 'Account Number', 'Account Type (Savings/Current)', 'IFSC Code', 'MICR Code', 'Bank Contact Number']
          },
          {
            title: 'Verification',
            fields: ['Attach cancelled cheque or bank statement', 'Ensure account holder name matches official records', 'Account must be active and operational']
          },
          {
            title: 'Payment Mode Preference',
            fields: ['Salary Credit: Bank Transfer', 'Reimbursements: Bank Transfer/Cheque', 'Final Settlement: Bank Transfer']
          },
          {
            title: 'Declaration',
            fields: ['I declare that the above bank account details are correct. I understand that salary will be credited to this account.', 'Any changes to bank details must be communicated in writing 7 days before salary processing.', 'Employee Signature:', 'Date:']
          }
        ],
        instructions: 'Submit with cancelled cheque or bank statement copy. Changes require 7 days notice before salary processing.',
        approvalRequired: 'HR Department',
        processingTime: '2-3 business days for activation'
      }
    ]
  },
  annex2: {
    id: 'annex2',
    number: 'ANNEXURE II',
    title: 'Leave Forms',
    searchTerms: ['leave', 'absence', 'vacation'],
    category: 'Leave Management',
    forms: [
      { 
        name: 'Leave Application Form', 
        code: 'LV-001', 
        description: 'Standard leave application for all leave types',
        sections: [
          {
            title: 'Employee Details',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Date of Joining', 'Contact Number During Leave']
          },
          {
            title: 'Leave Details',
            fields: ['Leave Type (Casual/Sick/Annual/Maternity/Paternity/Compensatory)', 'From Date', 'To Date', 'Total Days Applied', 'First Half/Second Half (if applicable)', 'Reason for Leave', 'Leave Balance Available (before this application)', 'Previous Leave Taken (this year)']
          },
          {
            title: 'Contact During Leave',
            fields: ['Address During Leave', 'Contact Number', 'Email', 'Emergency Contact Person']
          },
          {
            title: 'Work Handover',
            fields: ['Pending Tasks Handed Over To: [Name]', 'Critical Deadlines Communicated: Yes/No', 'Backup Person Identified: [Name]']
          },
          {
            title: 'Medical Certificate',
            fields: ['Required for sick leave exceeding 3 days', 'Attached: Yes/No', 'Doctor Name and Registration Number']
          },
          {
            title: 'Approvals',
            fields: ['Employee Signature and Date', 'Immediate Supervisor: Approved/Rejected, Signature, Date', 'Department Head: Approved/Rejected, Signature, Date', 'HR Remarks:', 'HR Approval: Approved/Rejected, Signature, Date']
          }
        ],
        instructions: 'Submit at least 3 days in advance for planned leave. For emergency/sick leave, inform supervisor immediately and submit form within 24 hours.',
        approvalRequired: 'Supervisor, Department Head, HR',
        processingTime: '1-2 business days'
      },
      { 
        name: 'Medical Certificate Format', 
        code: 'LV-002', 
        description: 'Required for sick leave exceeding 3 consecutive days',
        sections: [
          {
            title: 'Medical Certificate',
            fields: ['To Whom It May Concern / To: HR Department, Koyili Hospital', 'This is to certify that [Patient Name], [Age], [Gender], Employee ID: [EMP-ID] was examined by me on [Date of Examination].']
          },
          {
            title: 'Diagnosis',
            fields: ['Patient is suffering from: [Medical Condition/Diagnosis]', 'Clinical Findings: [Brief medical findings]', 'ICD-10 Code (if applicable)']
          },
          {
            title: 'Medical Advice',
            fields: ['Patient is advised rest from [Start Date] to [End Date]', 'Total Days of Rest Recommended: [Number of days]', 'Patient is: Fit to Resume Work from [Date] / Requires Extended Rest (specify duration)', 'Restrictions/Precautions: [Any work restrictions]']
          },
          {
            title: 'Doctor Details',
            fields: ['Doctor Name', 'Medical Registration Number', 'Specialization', 'Clinic/Hospital Name', 'Clinic Address', 'Doctor Signature and Stamp', 'Date']
          }
        ],
        instructions: 'Certificate must be on doctor\'s letterhead with registration number and stamp. Submit original to HR.',
        approvalRequired: 'Registered Medical Practitioner',
        processingTime: 'Immediate submission to HR'
      },
      { 
        name: 'Leave Encashment Form', 
        code: 'LV-003', 
        description: 'Request for encashment of accumulated leave',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Date of Joining', 'Years of Service']
          },
          {
            title: 'Leave Encashment Request',
            fields: ['Type of Leave to Encash: (Annual/Earned Leave only)', 'Total Leave Balance', 'Number of Days to Encash', 'Remaining Balance After Encashment', 'Reason for Encashment', 'Financial Year', 'Preferred Month for Encashment']
          },
          {
            title: 'Eligibility Criteria',
            fields: ['Completed minimum 1 year of service: Yes/No', 'Leave balance exceeds minimum threshold: Yes/No', 'Not on probation: Yes/No', 'Maximum encashment limit: 15 days per year (as per policy)']
          },
          {
            title: 'Calculation',
            fields: ['Basic Salary: ₹ _____', 'Days to Encash: _____', 'Encashment Amount = (Basic/30) × Days = ₹ _____', 'Tax Deduction (if applicable): ₹ _____', 'Net Amount Payable: ₹ _____']
          },
          {
            title: 'Declarations and Approvals',
            fields: ['I understand that encashed leave cannot be reclaimed. I voluntarily opt for encashment.', 'Employee Signature and Date', 'Supervisor Recommendation', 'HR Verification of Leave Balance', 'Finance Approval', 'Final Approval: CHRO']
          }
        ],
        instructions: 'Can be applied during annual appraisal cycle or financial year-end. Subject to organizational policy and fund availability.',
        approvalRequired: 'Supervisor, HR, Finance, CHRO',
        processingTime: '10-15 business days'
      },
      { 
        name: 'Compensatory Off Request', 
        code: 'LV-004', 
        description: 'Claim compensatory leave for working on weekly off/holidays',
        sections: [
          {
            title: 'Employee Details',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation']
          },
          {
            title: 'Comp-Off Details',
            fields: ['Date(s) Worked: [Date when worked on off day]', 'Day: (Sunday/Holiday - specify)', 'Reason for Working: (Emergency/Project/Event)', 'Hours Worked', 'Task/Project Details', 'Authorization for Working: [Supervisor who approved overtime]']
          },
          {
            title: 'Comp-Off Availing',
            fields: ['Proposed Comp-Off Date: [When you want to avail]', 'Must be availed within 30 days of earning', 'Work Handover Arrangements']
          },
          {
            title: 'Verification',
            fields: ['Attendance records verified for the date worked', 'Supervisor confirms necessity of working on off day', 'Biometric/timesheet evidence attached']
          },
          {
            title: 'Approvals',
            fields: ['Employee Signature', 'Immediate Supervisor: Verified and Approved', 'Department Head Approval', 'HR Approval and Record Update']
          }
        ],
        instructions: 'Submit within 7 days of working on off day. Comp-off must be availed within 30 days or will lapse.',
        approvalRequired: 'Supervisor, Department Head, HR',
        processingTime: '2-3 business days'
      },
      { 
        name: 'Leave Cancellation Form', 
        code: 'LV-005', 
        description: 'Cancel previously approved leave application',
        sections: [
          {
            title: 'Original Leave Details',
            fields: ['Leave Application Number/Reference', 'Leave Type', 'Approved Leave From Date', 'Approved Leave To Date', 'Total Days Approved', 'Approval Date']
          },
          {
            title: 'Cancellation Request',
            fields: ['Reason for Cancellation', 'Cancellation Request Date', 'Full Cancellation / Partial Cancellation', 'If Partial: New From Date', 'If Partial: New To Date', 'Revised Total Days (if partial)']
          },
          {
            title: 'Impact Assessment',
            fields: ['Travel bookings cancelled: Yes/No', 'Team notified of availability: Yes/No', 'Work plans adjusted: Yes/No']
          },
          {
            title: 'Approvals',
            fields: ['Employee Signature and Date', 'Supervisor Acknowledgment', 'HR Processing: Leave balance credited back', 'Attendance records updated', 'HR Signature and Date']
          }
        ],
        instructions: 'Submit as soon as decision to cancel is made. Cancellation at least 2 days before leave start date preferred.',
        approvalRequired: 'Supervisor, HR',
        processingTime: '1 business day'
      }
    ]
  },
  annex3: {
    id: 'annex3',
    number: 'ANNEXURE III',
    title: 'Attendance & Time',
    searchTerms: ['attendance', 'time', 'timesheet'],
    category: 'Time Management',
    forms: [
      { 
        name: 'Attendance Regularization Form', 
        code: 'ATT-001', 
        description: 'Correct attendance discrepancies and missed punch entries',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Reporting Manager']
          },
          {
            title: 'Regularization Details',
            fields: ['Date(s) Requiring Regularization', 'Type of Issue: (Missed In-Punch / Missed Out-Punch / Both / Wrong Punch)', 'Actual Time of Arrival (if missed in-punch)', 'Actual Time of Departure (if missed out-punch)', 'Reason for Discrepancy', 'Supporting Evidence: (Meeting invite, email, work logs, colleague confirmation)']
          },
          {
            title: 'Justification',
            fields: ['Detailed explanation of why punch was missed', 'Were you on official duty during this time? Yes/No', 'If yes, specify: (Meeting, Site Visit, Training, Client Meeting)', 'Location during work hours', 'Work performed during the period']
          },
          {
            title: 'Manager Verification',
            fields: ['Manager confirms employee was present: Yes/No', 'Manager comments on work performed', 'Exception frequency (if repeated regularizations)', 'Recommendation: Approve/Reject']
          },
          {
            title: 'Approvals',
            fields: ['Employee Signature and Date', 'Immediate Supervisor Approval', 'HR Verification and System Update', 'Date of Processing']
          }
        ],
        instructions: 'Submit within 3 days of the discrepancy. Frequent regularizations may require additional approval. Attach supporting documents.',
        approvalRequired: 'Supervisor, HR',
        processingTime: '2-3 business days'
      },
      { 
        name: 'Overtime Request Form', 
        code: 'ATT-002', 
        description: 'Request approval for working beyond regular hours',
        sections: [
          {
            title: 'Employee Details',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Regular Working Hours', 'Current Month Overtime Hours (if any)']
          },
          {
            title: 'Overtime Request',
            fields: ['Proposed Overtime Date(s)', 'Start Time', 'End Time', 'Total Hours Requested', 'Day Type: (Weekday / Weekend / Holiday)', 'Work Location: (Office / Site / Remote)']
          },
          {
            title: 'Justification',
            fields: ['Reason for Overtime: (Project Deadline / Emergency / Staff Shortage / Event)', 'Specific Tasks to be Completed', 'Why work cannot be completed during regular hours', 'Impact if overtime not approved', 'Expected Deliverables', 'Is this a recurring need? Yes/No']
          },
          {
            title: 'Compensation Details',
            fields: ['Overtime Rate: 1.5x regular hourly rate', 'Estimated Overtime Pay: ₹ _____', 'Alternative: Compensatory Off (if applicable)', 'Meal Allowance (if applicable): ₹ _____', 'Transport Arrangement (if late night)']
          },
          {
            title: 'Approvals',
            fields: ['Employee Signature', 'Immediate Supervisor: Approved/Rejected', 'Department Head: Approved/Rejected', 'HR Approval for Payment Processing', 'Finance Approval']
          }
        ],
        instructions: 'Submit at least 2 days in advance for planned overtime. For emergency, inform supervisor immediately and submit within 24 hours. Overtime exceeding 10 hours/week requires additional approval.',
        approvalRequired: 'Supervisor, Department Head, HR, Finance',
        processingTime: '3-5 business days'
      },
      { 
        name: 'Shift Change Request', 
        code: 'ATT-003', 
        description: 'Request modification of assigned shift or roster',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Current Shift Pattern', 'Date of Joining Current Shift']
          },
          {
            title: 'Change Request',
            fields: ['Type of Change: (Permanent / Temporary)', 'Current Shift: (Morning/Evening/Night/Rotating)', 'Requested Shift: (Morning/Evening/Night/Rotating)', 'Effective From Date', 'Duration (if temporary)', 'Return to Original Shift Date (if temporary)']
          },
          {
            title: 'Reason for Change',
            fields: ['Primary Reason: (Personal / Medical / Family / Transportation / Education)', 'Detailed Justification', 'Medical Certificate (if health reasons)', 'Supporting Documents', 'How will this benefit employee performance', 'Previous shift change requests (if any)']
          },
          {
            title: 'Impact Assessment',
            fields: ['Impact on current shift staffing', 'Replacement availability', 'Team coordination considerations', 'Client/service coverage impact', 'Training or handover required']
          },
          {
            title: 'Manager Recommendation',
            fields: ['Manager assessment of request', 'Operational feasibility', 'Alternatives considered', 'Recommendation: Approve/Reject/Conditional']
          },
          {
            title: 'Approvals',
            fields: ['Employee Signature', 'Immediate Supervisor', 'Department Head', 'HR Approval and Roster Update']
          }
        ],
        instructions: 'Submit at least 2 weeks in advance for permanent changes, 1 week for temporary. Approval subject to operational requirements and staffing availability.',
        approvalRequired: 'Supervisor, Department Head, HR',
        processingTime: '7-10 business days'
      },
      { 
        name: 'Manual Attendance Entry', 
        code: 'ATT-004', 
        description: 'Record attendance when biometric system is unavailable',
        sections: [
          {
            title: 'Employee Details',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation']
          },
          {
            title: 'Manual Entry Details',
            fields: ['Date(s) for Manual Entry', 'In-Time', 'Out-Time', 'Total Hours Worked', 'Location: (Office / Site / Field / Client Location)']
          },
          {
            title: 'Reason for Manual Entry',
            fields: ['Biometric Device Issue: (Device Down / Fingerprint Not Reading / New Joinee)', 'Field Duty / Site Work', 'Client Office Visit', 'Hospital Facility Issue', 'Other Reason (specify)']
          },
          {
            title: 'Verification',
            fields: ['Colleague/Witness Name (if applicable)', 'Work Evidence: (Emails sent, deliverables, meeting minutes)', 'Site Entry Register (if applicable)', 'Client Confirmation (if applicable)', 'Manager observed presence: Yes/No']
          },
          {
            title: 'Approvals',
            fields: ['Employee Signature and Date', 'Supervisor Verification and Approval', 'HR Processing: Manual entry made in system', 'Date of System Update']
          }
        ],
        instructions: 'Submit on the same day or next working day. Attach supporting documents. Repeated manual entries may require investigation.',
        approvalRequired: 'Supervisor, HR',
        processingTime: '1-2 business days'
      }
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
      { 
        name: 'Resignation Letter Format', 
        code: 'EXIT-001', 
        description: 'Formal resignation letter template',
        sections: [
          {
            title: 'Letter Format',
            fields: ['Date', 'To: [Manager Name]', '[Designation]', '[Department]', 'Koyili Hospital', '', 'Subject: Resignation from the position of [Your Designation]', '', 'Dear [Manager Name],']
          },
          {
            title: 'Resignation Statement',
            fields: ['I am writing to formally notify you of my resignation from the position of [Your Designation] in the [Department] at Koyili Hospital.', '', 'As per my employment contract, I am providing [X days] notice. My last working day will be [Date].', '', 'I have made this decision after careful consideration due to [brief reason - optional: career growth, personal reasons, relocation, higher studies].']
          },
          {
            title: 'Transition Commitment',
            fields: ['During my notice period, I am committed to:', '- Completing all pending assignments and projects', '- Documenting my work processes and procedures', '- Training my replacement or team members', '- Ensuring smooth handover of responsibilities', '- Being available for any clarifications post-departure (if needed)']
          },
          {
            title: 'Acknowledgment',
            fields: ['I would like to express my sincere gratitude for the opportunities provided during my tenure at Koyili Hospital. I have gained valuable experience and skills working with the team.', '', 'I wish the Hospital and my colleagues continued success.']
          },
          {
            title: 'Closing',
            fields: ['Thank you for your understanding.', '', 'Sincerely,', '[Your Name]', '[Employee ID]', '[Contact Number]', '[Personal Email]']
          }
        ],
        instructions: 'Submit formal resignation letter to immediate supervisor and HR. Maintain professional tone. Provide adequate notice period as per employment contract.',
        approvalRequired: 'Manager acknowledgment, HR processing',
        processingTime: 'Immediate acknowledgment, exit process as per notice period'
      },
      { 
        name: 'Exit Interview Form', 
        code: 'EXIT-002', 
        description: 'Feedback questionnaire for departing employees',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Date of Joining', 'Last Working Day', 'Reason for Leaving: (Career Growth/Higher Studies/Relocation/Personal/Health/Better Opportunity/Other)']
          },
          {
            title: 'Job Satisfaction',
            fields: ['How satisfied were you with your role? (1-5 scale)', 'Were job responsibilities clearly defined? Yes/No', 'Did you have necessary resources and tools? Yes/No', 'Was workload manageable? Yes/No', 'Work-life balance rating (1-5)', 'What did you like most about your job?', 'What did you like least?']
          },
          {
            title: 'Team & Management',
            fields: ['Relationship with immediate supervisor (1-5)', 'Did you receive adequate support from management? Yes/No', 'Communication effectiveness rating (1-5)', 'Team collaboration rating (1-5)', 'Recognition and appreciation for work (1-5)', 'What could management have done better?']
          },
          {
            title: 'Growth & Development',
            fields: ['Training and development opportunities (1-5)', 'Career advancement opportunities available? Yes/No', 'Skills developed during tenure', 'Were your career goals discussed? Yes/No', 'Performance feedback frequency (1-5)']
          },
          {
            title: 'Compensation & Benefits',
            fields: ['Satisfaction with compensation (1-5)', 'Benefits package adequacy (1-5)', 'Compared to industry standards: Above/At Par/Below', 'Were benefits clearly communicated? Yes/No']
          },
          {
            title: 'Work Environment',
            fields: ['Physical work environment (1-5)', 'Safety and security measures (1-5)', 'Organizational culture rating (1-5)', 'Diversity and inclusion (1-5)', 'Work environment suggestions']
          },
          {
            title: 'Reason for Leaving',
            fields: ['Primary reason for resignation (detailed)', 'What could have been done to retain you?', 'Would you consider returning in future? Yes/No/Maybe', 'Would you recommend Koyili Hospital to others? Yes/No', 'Any specific incidents that influenced decision?']
          },
          {
            title: 'Suggestions',
            fields: ['What should Hospital start doing?', 'What should Hospital stop doing?', 'What should Hospital continue doing?', 'Any other feedback or suggestions']
          },
          {
            title: 'New Employment',
            fields: ['New organization (optional)', 'New role (optional)', 'What attracted you to new opportunity?']
          }
        ],
        instructions: 'Confidential feedback for organizational improvement. Honest responses appreciated. Exit interview conducted by HR, not reporting manager.',
        approvalRequired: 'None (Confidential feedback)',
        processingTime: 'Completed during notice period'
      },
      { 
        name: 'Clearance Checklist', 
        code: 'EXIT-003', 
        description: 'Department-wise clearance for exit formalities',
        sections: [
          {
            title: 'Employee Details',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Last Working Day', 'Resignation Date']
          },
          {
            title: 'Department Clearances',
            fields: ['1. Immediate Supervisor: Work handover completed, Pending tasks documented, Team briefed, Clearance Signature & Date', '2. Department Head: All departmental assets returned, No pending projects, Final approval, Clearance Signature & Date', '3. IT Department: Laptop/desktop returned, Mobile/tablet returned, Access cards/tokens returned, Email access to be deactivated, Software licenses deactivated, Clearance Signature & Date', '4. HR Department: HR records updated, Exit interview completed, Full & Final settlement initiated, ID card returned, Clearance Signature & Date', '5. Finance Department: Advances settled, Expense claims submitted, No outstanding dues, Salary hold lifts approved, Clearance Signature & Date', '6. Administration: Office keys returned, Parking pass returned, Locker cleared, Cafeteria card returned, Clearance Signature & Date', '7. Library (if applicable): Books returned, Outstanding fines cleared, Clearance Signature & Date', '8. Medical Department (if applicable): Medical equipment returned, Patient handover completed (for clinical staff), Clearance Signature & Date', '9. Security: Gate pass clearance, Visitor management records cleared, Security badge returned, Clearance Signature & Date']
          },
          {
            title: 'Final HR Clearance',
            fields: ['All departmental clearances obtained: Yes/No', 'Experience certificate issued: Yes/No', 'Relieving letter issued: Yes/No', 'Final settlement processed: Yes/No', 'HR Final Approval: Name, Signature, Date']
          }
        ],
        instructions: 'Obtain clearances from all departments before last working day. Submit completed form to HR. No dues certificate will be issued only after all clearances.',
        approvalRequired: 'All Departments, Final HR Approval',
        processingTime: 'Complete during notice period, final processing on last working day'
      },
      { 
        name: 'Full & Final Settlement', 
        code: 'EXIT-004', 
        description: 'Final dues calculation and settlement statement',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Date of Joining', 'Last Working Day', 'Total Service: __ Years __ Months', 'Reason for Exit']
          },
          {
            title: 'Salary Components - Credits',
            fields: ['Basic Salary (for notice period worked): ₹ _____', 'HRA: ₹ _____', 'Other Allowances: ₹ _____', 'Overtime Payment (if any): ₹ _____', 'Performance Bonus (if applicable): ₹ _____', 'Total Salary Credit: ₹ _____']
          },
          {
            title: 'Leave Encashment',
            fields: ['Leave Balance: __ days', 'Encashment Rate: ₹ _____/day', 'Total Leave Encashment: ₹ _____']
          },
          {
            title: 'Gratuity (if applicable)',
            fields: ['Service Period: __ Years __ Months', 'Gratuity Eligibility: Yes/No (minimum 5 years required)', 'Last Drawn Salary: ₹ _____', 'Gratuity Formula: (Last Salary × 15 × Years) / 26', 'Gratuity Amount: ₹ _____']
          },
          {
            title: 'Notice Period Settlement',
            fields: ['Notice Period Required: __ days', 'Notice Period Served: __ days', 'Shortfall/Excess: __ days', 'Recovery/Payment: ₹ _____ (Debit/Credit)']
          },
          {
            title: 'Deductions',
            fields: ['Notice Period Shortfall (if any): ₹ _____', 'Advance/Loan Outstanding: ₹ _____', 'Uniform/Equipment Not Returned: ₹ _____', 'Canteen/Cafeteria Dues: ₹ _____', 'Provident Fund (Employee Share): ₹ _____', 'Professional Tax: ₹ _____', 'Income Tax (TDS): ₹ _____', 'Other Deductions: ₹ _____', 'Total Deductions: ₹ _____']
          },
          {
            title: 'Reimbursements',
            fields: ['Medical Reimbursement: ₹ _____', 'Travel Reimbursement: ₹ _____', 'Other Reimbursements: ₹ _____', 'Total Reimbursements: ₹ _____']
          },
          {
            title: 'Final Settlement Summary',
            fields: ['Total Credits: ₹ _____', 'Total Debits: ₹ _____', 'Net Amount Payable: ₹ _____', 'Payment Mode: (Bank Transfer/Cheque)', 'Payment Date: _____', 'Bank Account: Account Number ________']
          },
          {
            title: 'Statutory Compliances',
            fields: ['PF Account Transfer/Withdrawal: Form submitted/Processed', 'Form 16 (TDS Certificate): To be issued', 'Service Certificate: Issued', 'Experience Certificate: Issued', 'Relieving Letter: Issued']
          },
          {
            title: 'Acknowledgment',
            fields: ['I acknowledge receipt of the above settlement amount in full and final settlement of all my dues from Koyili Hospital.', 'I have no further claims against the Hospital.', 'Employee Signature: _____', 'Date: _____', '', 'HR Signature: _____', 'Finance Signature: _____', 'Date: _____']
          }
        ],
        instructions: 'Final settlement processed after completion of notice period and all clearances. PF withdrawal forms to be submitted separately. Settlement payment within 45 days of last working day.',
        approvalRequired: 'HR, Finance',
        processingTime: '30-45 days from last working day'
      },
      { 
        name: 'Experience Certificate', 
        code: 'EXIT-005', 
        description: 'Official work experience certificate',
        sections: [
          {
            title: 'Certificate Header',
            fields: ['KOYILI HOSPITAL', 'To Whom It May Concern', '', 'EXPERIENCE CERTIFICATE', '', 'Ref No: KH/HR/EXP/____', 'Date: _____']
          },
          {
            title: 'Employee Details',
            fields: ['This is to certify that [Employee Name], [Designation], was employed with Koyili Hospital from [Date of Joining] to [Last Working Day].', '', 'Employee ID: [EMP-ID]', 'Department: [Department Name]', 'Reporting To: [Manager Name and Designation]']
          },
          {
            title: 'Role & Responsibilities',
            fields: ['During [his/her] tenure, [Employee Name] was primarily responsible for:', '- [Key responsibility 1]', '- [Key responsibility 2]', '- [Key responsibility 3]', '- [Key responsibility 4]', '', '[He/She] handled [specific projects, teams, clients, etc.] with professionalism and dedication.']
          },
          {
            title: 'Performance & Conduct',
            fields: ['[Employee Name] demonstrated [excellent/good] performance throughout [his/her] tenure.', '[His/Her] technical skills, dedication, and team collaboration were commendable.', '[He/She] maintained high standards of professional conduct and ethics.']
          },
          {
            title: 'Reason for Leaving',
            fields: ['[He/She] resigned from [his/her] position on [Resignation Date] due to [reason - personal/career growth/relocation].', '[His/Her] last working day was [Date].']
          },
          {
            title: 'Closing',
            fields: ['We wish [him/her] all the best in [his/her] future endeavors.', '', 'For Koyili Hospital', '', '[CHRO Name]', 'Chief Human Resources Officer', 'Koyili Hospital', '', 'Hospital Seal']
          }
        ],
        instructions: 'Issued after completion of exit formalities and clearance. Request should be made to HR before or on last working day.',
        approvalRequired: 'CHRO',
        processingTime: '7-10 business days from request'
      },
      { 
        name: 'Relieving Letter', 
        code: 'EXIT-006', 
        description: 'Official relieving letter confirming exit date',
        sections: [
          {
            title: 'Letter Header',
            fields: ['KOYILI HOSPITAL', '[Hospital Address]', '', 'Date: [Date]', 'Ref No: KH/HR/REL/____']
          },
          {
            title: 'Employee Details',
            fields: ['To,', '[Employee Name]', '[Address]', '', 'Subject: Relieving from Services']
          },
          {
            title: 'Relieving Statement',
            fields: ['Dear [Employee Name],', '', 'This is to inform you that your resignation from the position of [Designation] in the [Department] has been accepted.', '', 'As per your resignation letter dated [Date] and after serving the notice period of [X] days, you are relieved from your duties at Koyili Hospital with effect from [Last Working Day].']
          },
          {
            title: 'Clearance Confirmation',
            fields: ['We confirm that you have completed all exit formalities and obtained necessary clearances from all departments.', 'Your Full & Final settlement has been processed and will be credited to your account as per policy.']
          },
          {
            title: 'Acknowledgment',
            fields: ['We acknowledge your contributions during your tenure with Koyili Hospital and appreciate your services.', 'We wish you success in your future career.']
          },
          {
            title: 'Closing',
            fields: ['Yours sincerely,', '', 'For Koyili Hospital', '', '[Name]', '[Designation]', 'Chief Human Resources Officer', '', 'Hospital Seal']
          }
        ],
        instructions: 'Issued on or after last working day. Required for joining new employment. Submit request to HR before last day.',
        approvalRequired: 'CHRO',
        processingTime: 'Issued on last working day'
      }
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
