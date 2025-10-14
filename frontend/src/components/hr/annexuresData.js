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
      { 
        name: 'Self-Appraisal Form', 
        code: 'PERF-001', 
        description: 'Annual self-assessment and achievement documentation',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Reporting Manager', 'Review Period: From ___ To ___', 'Date of Joining', 'Time in Current Role']
          },
          {
            title: 'Key Responsibilities',
            fields: ['List your primary job responsibilities during the review period:', '1. Responsibility 1', '2. Responsibility 2', '3. Responsibility 3', '4. Responsibility 4', '5. Responsibility 5']
          },
          {
            title: 'Goals Achievement',
            fields: ['For each goal set at the beginning of the year, provide:', 'Goal 1: [Description]', '  - Target: [Quantifiable target]', '  - Achievement: [% or status]', '  - Evidence/Impact: [Specific results]', '  - Self-Rating: (1-5)', '', 'Goal 2: [Description]', '  - Target:', '  - Achievement:', '  - Evidence/Impact:', '  - Self-Rating:', '', '[Repeat for all goals]']
          },
          {
            title: 'Key Achievements',
            fields: ['List significant achievements beyond set goals:', '1. Achievement/Project: [Name]', '   Impact: [Business impact, cost savings, quality improvement]', '   Recognition: [Any awards/appreciation received]', '', '2. Achievement/Project:', '   Impact:', '   Recognition:', '', '3. Additional contributions (process improvements, innovations, etc.)']
          },
          {
            title: 'Competency Self-Assessment',
            fields: ['Rate yourself on the following competencies (1-5 scale):', '', 'Technical/Functional Skills:', '  - Job-specific technical knowledge: ___', '  - Quality of work output: ___', '  - Efficiency and productivity: ___', '', 'Behavioral Competencies:', '  - Communication skills: ___', '  - Team collaboration: ___', '  - Problem-solving ability: ___', '  - Initiative and ownership: ___', '  - Adaptability to change: ___', '  - Time management: ___', '', 'Leadership (if applicable):', '  - Team management: ___', '  - Decision making: ___', '  - People development: ___']
          },
          {
            title: 'Challenges and Support Needed',
            fields: ['What challenges did you face during the review period?', 'What support or resources would have helped you perform better?', 'Any organizational/system barriers affecting performance?']
          },
          {
            title: 'Training and Development',
            fields: ['Training programs attended during the year:', '  - Training 1: [Name and dates]', '  - Training 2:', '', 'Certifications obtained:', '', 'Skills developed:', '', 'Areas where you need further training/development:']
          },
          {
            title: 'Goals for Next Year',
            fields: ['Proposed goals for the upcoming year:', 'Goal 1: [SMART goal description]', 'Goal 2:', 'Goal 3:', '', 'Career aspirations and development areas:', 'Short-term (1 year):', 'Long-term (3-5 years):']
          },
          {
            title: 'Overall Self-Rating',
            fields: ['Overall performance rating (1-5):', '1 - Needs Improvement', '2 - Below Expectations', '3 - Meets Expectations', '4 - Exceeds Expectations', '5 - Outstanding', '', 'Your Self-Rating: ___', 'Justification for rating:']
          },
          {
            title: 'Employee Declaration',
            fields: ['I confirm that the information provided is accurate and complete.', 'Employee Signature: ________', 'Date: ________']
          }
        ],
        instructions: 'Complete this form honestly and provide specific examples. Use quantifiable metrics where possible. Submit to your reporting manager 1 week before appraisal discussion.',
        approvalRequired: 'Self-submission to Manager',
        processingTime: 'Review within 2 weeks'
      },
      { 
        name: 'Supervisor Assessment Form', 
        code: 'PERF-002', 
        description: 'Manager evaluation of employee performance',
        sections: [
          {
            title: 'Employee Details',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Review Period', 'Supervisor Name', 'Supervisor Designation']
          },
          {
            title: 'Goals Achievement Assessment',
            fields: ['Review each goal set for the employee:', 'Goal 1: [Description]', '  - Target: [Original target]', '  - Employee Self-Rating: ___', '  - Supervisor Rating: ___', '  - Comments: [Specific feedback on achievement]', '', 'Goal 2:', '  - Target:', '  - Employee Self-Rating: ___', '  - Supervisor Rating: ___', '  - Comments:', '', '[Continue for all goals]']
          },
          {
            title: 'Competency Assessment',
            fields: ['Rate the employee on following competencies (1-5):', '', 'Technical/Functional Competencies:', '  - Job knowledge and expertise: ___', '  - Quality of work: ___', '  - Productivity and efficiency: ___', '  - Attention to detail: ___', '  - Innovation and creativity: ___', '', 'Behavioral Competencies:', '  - Communication (written and verbal): ___', '  - Team collaboration: ___', '  - Customer orientation: ___', '  - Problem-solving: ___', '  - Initiative and ownership: ___', '  - Reliability and dependability: ___', '  - Adaptability: ___', '', 'Leadership (if applicable):', '  - Team management: ___', '  - Decision making: ___', '  - Strategic thinking: ___', '  - People development: ___']
          },
          {
            title: 'Strengths',
            fields: ['List key strengths demonstrated by the employee:', '1.', '2.', '3.', 'Specific examples of strengths in action:']
          },
          {
            title: 'Areas for Improvement',
            fields: ['Identify areas where employee needs to improve:', '1.', '2.', '3.', 'Specific examples and suggestions for improvement:']
          },
          {
            title: 'Training and Development Recommendations',
            fields: ['Recommended training programs for skill enhancement:', 'Technical skills training:', 'Soft skills development:', 'Leadership development (if applicable):', '', 'Career development path recommended:']
          },
          {
            title: 'Overall Performance Rating',
            fields: ['Employee Self-Rating: ___', 'Supervisor Rating: ___', '', 'Rating Scale:', '1 - Unsatisfactory (Immediate improvement required)', '2 - Needs Improvement (Below expectations)', '3 - Meets Expectations (Satisfactory performance)', '4 - Exceeds Expectations (Consistently above standards)', '5 - Outstanding (Exceptional performance)', '', 'Justification for rating:', '', 'Recommendation: Promotion / Increment / Training / PIP / No Change']
          },
          {
            title: 'Goals for Next Year',
            fields: ['Goals agreed for the next review period:', 'Goal 1: [SMART goal]', 'Goal 2:', 'Goal 3:', 'Goal 4:', 'Goal 5:', '', 'Development plan for employee:', 'Timeline for goal review: Quarterly / Half-yearly']
          },
          {
            title: 'Supervisor Comments',
            fields: ['Additional comments or feedback:', '', '', '', 'Supervisor Signature: ________', 'Date: ________']
          }
        ],
        instructions: 'Complete after reviewing employee self-appraisal. Provide specific, actionable feedback with examples. Discuss ratings and feedback with employee before finalizing.',
        approvalRequired: 'Department Head, HR Review',
        processingTime: 'Complete within 2 weeks of receiving self-appraisal'
      },
      { 
        name: 'Goal Setting Template', 
        code: 'PERF-003', 
        description: 'Annual goals and KPIs documentation',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Review Year', 'Manager Name']
          },
          {
            title: 'Goal Setting Instructions',
            fields: ['Goals should be SMART:', 'S - Specific (clear and well-defined)', 'M - Measurable (quantifiable metrics)', 'A - Achievable (realistic within resources)', 'R - Relevant (aligned with organizational objectives)', 'T - Time-bound (clear timeline)', '', 'Set 3-5 key goals for the year covering:', '  - Core job responsibilities (60-70%)', '  - Developmental goals (20-30%)', '  - Organizational initiatives (10-20%)']
          },
          {
            title: 'Goal 1',
            fields: ['Goal Description:', 'Aligned to Organizational Objective:', 'Specific Target/Deliverable:', 'Success Metrics (KPIs):', 'Timeline: Start Date ___ | Target Date ___', 'Resources Required:', 'Weightage: ___% (of total goals)', 'Review Frequency: Monthly / Quarterly']
          },
          {
            title: 'Goal 2',
            fields: ['Goal Description:', 'Aligned to Organizational Objective:', 'Specific Target/Deliverable:', 'Success Metrics (KPIs):', 'Timeline:', 'Resources Required:', 'Weightage: ___%']
          },
          {
            title: 'Goal 3',
            fields: ['Goal Description:', 'Aligned to Organizational Objective:', 'Specific Target/Deliverable:', 'Success Metrics (KPIs):', 'Timeline:', 'Resources Required:', 'Weightage: ___%']
          },
          {
            title: 'Goal 4 (Optional)',
            fields: ['Goal Description:', 'Success Metrics:', 'Timeline:', 'Weightage: ___%']
          },
          {
            title: 'Goal 5 (Optional)',
            fields: ['Goal Description:', 'Success Metrics:', 'Timeline:', 'Weightage: ___%']
          },
          {
            title: 'Development Goals',
            fields: ['Skill Development Target 1:', '  - Current proficiency level:', '  - Target proficiency level:', '  - Action plan:', '', 'Skill Development Target 2:', '  - Current proficiency:', '  - Target proficiency:', '  - Action plan:']
          },
          {
            title: 'Support and Resources',
            fields: ['What support do you need from your manager?', 'Training requirements:', 'Tools/technology needs:', 'Cross-functional collaboration required:']
          },
          {
            title: 'Agreement and Signatures',
            fields: ['Employee confirms understanding and acceptance of goals:', 'Employee Signature: ________ Date: ____', '', 'Manager confirms goals are SMART and achievable:', 'Manager Signature: ________ Date: ____']
          }
        ],
        instructions: 'Complete during performance appraisal cycle or at beginning of year. Goals to be reviewed quarterly and updated as needed with manager approval.',
        approvalRequired: 'Manager, Department Head',
        processingTime: 'Finalize within appraisal period'
      },
      { 
        name: 'Performance Improvement Plan', 
        code: 'PERF-004', 
        description: 'PIP documentation for underperformance',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Reporting Manager', 'PIP Start Date', 'PIP Review Date', 'PIP End Date (typically 30-90 days)']
          },
          {
            title: 'Performance Concerns',
            fields: ['Areas of underperformance (specific and measurable):', '1. Performance Gap:', '   Current Performance:', '   Expected Standard:', '   Gap/Deficiency:', '', '2. Performance Gap:', '   Current Performance:', '   Expected Standard:', '   Gap/Deficiency:', '', '3. Additional concerns (attendance, conduct, quality):']
          },
          {
            title: 'Impact of Underperformance',
            fields: ['Impact on team:', 'Impact on department goals:', 'Impact on customers/patients:', 'Impact on quality/safety standards:']
          },
          {
            title: 'Improvement Expectations',
            fields: ['Specific, measurable improvement targets:', 'Expectation 1:', '  - Measurable target:', '  - Timeline:', '', 'Expectation 2:', '  - Measurable target:', '  - Timeline:', '', 'Expectation 3:', '  - Measurable target:', '  - Timeline:']
          },
          {
            title: 'Support and Resources',
            fields: ['Support provided by manager:', '  - Coaching sessions: [Frequency]', '  - Training programs: [Details]', '  - Mentoring: [Mentor name if applicable]', '  - Additional resources:', '', 'Employee responsibilities:', '  - Self-study requirements:', '  - Practice/application areas:', '  - Documentation/reporting expectations:']
          },
          {
            title: 'Review and Monitoring',
            fields: ['Weekly check-ins: Every [day] at [time]', 'Bi-weekly progress reviews: [Dates]', 'Mid-PIP formal review: [Date]', 'Final PIP review: [Date]', '', 'Progress tracking method:', 'Documentation requirements:']
          },
          {
            title: 'Consequences',
            fields: ['If improvement targets are met:', '  - PIP closure and return to normal performance management', '  - Recognition of improvement effort', '', 'If improvement targets are not met:', '  - PIP extension for [X] days (if close to target)', '  - Demotion/role change (if suitable alternative exists)', '  - Termination of employment (as per By-Laws)', '', 'Employee has been informed of potential consequences: Yes / No']
          },
          {
            title: 'Employee Acknowledgment',
            fields: ['I acknowledge that I have been informed of performance concerns and improvement expectations.', 'I understand the support provided and my responsibilities.', 'I am aware of the timeline and consequences.', 'I commit to making the required improvements.', '', 'Employee Signature: ________ Date: ____', 'Employee Comments (optional):']
          },
          {
            title: 'Manager Confirmation',
            fields: ['I confirm that performance concerns have been clearly communicated.', 'I commit to providing stated support and conducting regular reviews.', '', 'Manager Signature: ________ Date: ____']
          },
          {
            title: 'HR Acknowledgment',
            fields: ['PIP reviewed for compliance with policies and fairness.', 'HR Signature: ________ Date: ____']
          }
        ],
        instructions: 'PIP is a formal process. Document all meetings and progress. Provide fair opportunity for improvement. Consult HR before initiating PIP.',
        approvalRequired: 'Manager, Department Head, HR',
        processingTime: 'PIP duration: 30-90 days typically'
      },
      { 
        name: '360 Degree Feedback Form', 
        code: 'PERF-005', 
        description: 'Peer and stakeholder feedback for comprehensive assessment',
        sections: [
          {
            title: 'Feedback Provider Information',
            fields: ['Your Name (Optional for peer feedback)', 'Your Department', 'Your Relationship with Employee: (Peer / Reportee / Internal Customer / Cross-functional Colleague)', 'Feedback is: Confidential / Anonymous']
          },
          {
            title: 'Employee Being Reviewed',
            fields: ['Employee Name', 'Department', 'Designation', 'Review Period']
          },
          {
            title: 'Competency Ratings',
            fields: ['Rate the employee on following (1-5 scale, or N/A if not applicable):', '', 'Communication:', '  - Clarity in communication: ___', '  - Active listening: ___', '  - Responsiveness to queries: ___', '', 'Collaboration:', '  - Team player attitude: ___', '  - Cooperation and support: ___', '  - Conflict resolution: ___', '', 'Professionalism:', '  - Reliability and dependability: ___', '  - Meeting commitments: ___', '  - Professional conduct: ___', '', 'Technical/Functional:', '  - Job knowledge demonstrated: ___', '  - Quality of work output: ___', '  - Problem-solving ability: ___', '', 'Leadership (if applicable):', '  - Provides clear direction: ___', '  - Motivates and supports team: ___', '  - Decision-making: ___']
          },
          {
            title: 'Strengths',
            fields: ['What are the employee\'s key strengths?', '1.', '2.', '3.', 'Specific example where you observed these strengths:']
          },
          {
            title: 'Areas for Development',
            fields: ['What areas could the employee improve?', '1.', '2.', '3.', 'Constructive suggestions for improvement:']
          },
          {
            title: 'Additional Comments',
            fields: ['Any other feedback or comments:', '', '', '', 'Would you want to work with this person again? Yes / No / Neutral']
          },
          {
            title: 'Feedback Provider Signature',
            fields: ['Signature (if not anonymous): ________', 'Date: ________']
          }
        ],
        instructions: '360 feedback is developmental, not punitive. Provide honest, constructive feedback. Focus on behaviors, not personality. Give specific examples where possible.',
        approvalRequired: 'HR compiles and anonymizes feedback',
        processingTime: 'Compiled within 2 weeks of collection'
      }
    ]
  },
  annex5: {
    id: 'annex5',
    number: 'ANNEXURE V',
    title: 'Payroll & Benefits',
    searchTerms: ['payroll', 'salary', 'benefits', 'compensation'],
    category: 'Compensation',
    forms: [
      { 
        name: 'Salary Advance Request', 
        code: 'PAY-001', 
        description: 'Request for salary advance in case of emergency',
        sections: [
          {
            title: 'Employee Details',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Date of Joining', 'Current Monthly Salary (Gross)', 'Bank Account Number']
          },
          {
            title: 'Advance Request Details',
            fields: ['Advance Amount Requested: ₹ _____', 'Number of Installments for Repayment: ___ (Maximum 6 months)', 'Proposed Monthly Deduction: ₹ _____', 'Reason for Advance Request: (Medical Emergency / Family Function / Education / Home Repair / Debt Settlement / Other)', 'Detailed Justification:']
          },
          {
            title: 'Emergency Justification',
            fields: ['Brief description of emergency/need:', 'Supporting documents attached (if medical: bills, prescriptions):', 'Have you taken advance in last 12 months? Yes / No', 'If yes, previous advance amount and status:', 'Current outstanding loan/advance (if any): ₹ _____']
          },
          {
            title: 'Repayment Plan',
            fields: ['Repayment Start Month:', 'Monthly Installment: ₹ _____ for ___ months', 'Final repayment month:', 'I authorize the Hospital to deduct the above installment from my monthly salary.']
          },
          {
            title: 'Terms and Conditions',
            fields: ['1. Maximum advance: 50% of monthly gross salary or ₹25,000 (whichever is lower)', '2. Repayment will be through salary deduction over maximum 6 months', '3. If employment terminates before full repayment, balance will be deducted from final settlement', '4. Advance is interest-free but subject to approval and fund availability', '5. Only one advance allowed at a time', '', 'I accept the above terms and conditions.']
          },
          {
            title: 'Approvals',
            fields: ['Employee Signature: ________ Date: ____', 'Immediate Supervisor Recommendation: Approved / Not Approved', 'Supervisor Comments:', 'Signature: ________', '', 'HR Verification (eligibility and outstanding checks):', 'HR Signature: ________ Date: ____', '', 'Finance Approval (fund availability):', 'Finance Signature: ________ Date: ____']
          }
        ],
        instructions: 'Submit at least 10 days before salary processing. Advance subject to eligibility criteria and fund availability. Supporting documents required for emergency requests.',
        approvalRequired: 'Supervisor, HR, Finance',
        processingTime: '5-7 business days'
      },
      { 
        name: 'Reimbursement Claim Form', 
        code: 'PAY-002', 
        description: 'Claim reimbursement for medical, travel, and other approved expenses',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Claim Month/Period', 'Contact Number']
          },
          {
            title: 'Reimbursement Type',
            fields: ['Select Reimbursement Type:', '☐ Medical Reimbursement (self/family)', '☐ Travel/Conveyance (official duty)', '☐ Telephone/Internet (if eligible)', '☐ Professional Development (books, journals)', '☐ Relocation Expenses (if applicable)', '☐ Other (specify): _______']
          },
          {
            title: 'Medical Reimbursement Details',
            fields: ['(Complete only if claiming medical reimbursement)', 'Patient Name:', 'Relationship with Employee: (Self / Spouse / Child / Parent)', 'Nature of Illness/Treatment:', 'Hospital/Clinic Name:', 'Treatment Date(s):', 'Total Bill Amount: ₹ _____', 'Amount Claimed: ₹ _____', 'Documents Attached:', '  ☐ Original bills/invoices', '  ☐ Prescriptions', '  ☐ Diagnostic reports', '  ☐ Discharge summary (if hospitalization)']
          },
          {
            title: 'Travel Reimbursement Details',
            fields: ['(Complete only if claiming travel reimbursement)', 'Purpose of Travel: (Client Visit / Official Meeting / Training / Site Visit)', 'Travel Date(s): From ____ To ____', 'Origin: ________ Destination: ________', 'Mode of Transport: (Train / Bus / Taxi / Own Vehicle / Air)', 'Distance (if own vehicle): ____ km', 'Rate per km: ₹ ____ (as per policy)', 'Amount Claimed: ₹ _____', 'Documents Attached:', '  ☐ Tickets/boarding pass', '  ☐ Fuel bills (if own vehicle)', '  ☐ Taxi/cab receipts', '  ☐ Toll receipts']
          },
          {
            title: 'Other Expense Details',
            fields: ['Description of Expense:', 'Date of Expense:', 'Vendor/Service Provider:', 'Amount Claimed: ₹ _____', 'Justification for claim:', 'Approval obtained prior to expense? Yes / No', 'Documents Attached: (List all)']
          },
          {
            title: 'Summary of Claims',
            fields: ['Total Amount Claimed: ₹ _____', 'Previous reimbursements this year: ₹ _____', 'Annual limit as per policy: ₹ _____', 'Balance available: ₹ _____', 'Bank Account for credit: Account No. __________', 'IFSC Code: __________']
          },
          {
            title: 'Employee Declaration',
            fields: ['I declare that:', '1. All expenses claimed are genuine and incurred for purposes stated', '2. Original bills/receipts are attached', '3. These expenses have not been claimed from any other source', '4. Information provided is true and complete', '', 'Employee Signature: ________ Date: ____']
          },
          {
            title: 'Approvals',
            fields: ['Immediate Supervisor Verification:', 'Supervisor Signature: ________ Date: ____', '', 'HR Review (policy compliance and limit check):', 'HR Signature: ________ Date: ____', '', 'Finance Processing (payment):', 'Finance Signature: ________ Date: ____']
          }
        ],
        instructions: 'Submit within 30 days of expense. Attach all original bills/receipts. Medical reimbursement subject to annual limits. Travel reimbursement only for official duty with prior approval.',
        approvalRequired: 'Supervisor, HR, Finance',
        processingTime: '10-15 business days'
      },
      { 
        name: 'Tax Declaration Form', 
        code: 'PAY-005', 
        description: 'Annual tax declaration for income tax planning (Form 12BB)',
        sections: [
          {
            title: 'Employee Details',
            fields: ['Employee Name', 'Employee ID', 'PAN Number', 'Department', 'Financial Year: ____-____', 'Submission Date']
          },
          {
            title: 'Section 80C Deductions (Max ₹1,50,000)',
            fields: ['1. Life Insurance Premium: ₹ _____', '2. Public Provident Fund (PPF): ₹ _____', '3. Employee Provident Fund (EPF): ₹ _____ (auto-calculated)', '4. Equity Linked Savings Scheme (ELSS): ₹ _____', '5. National Savings Certificate (NSC): ₹ _____', '6. Fixed Deposits (5-year tax-saving): ₹ _____', '7. Principal repayment on Home Loan: ₹ _____', '8. Tuition Fees (2 children max): ₹ _____', '9. Sukanya Samriddhi Yojana: ₹ _____', '10. National Pension Scheme (NPS) Tier 1: ₹ _____', '', 'Total Section 80C: ₹ _____ (Max ₹1,50,000)']
          },
          {
            title: 'Section 80D - Health Insurance',
            fields: ['Medical Insurance Premium (Self, Spouse, Children): ₹ _____ (Max ₹25,000)', 'Medical Insurance Premium (Parents < 60 years): ₹ _____ (Max ₹25,000)', 'Medical Insurance Premium (Parents ≥ 60 years): ₹ _____ (Max ₹50,000)', 'Preventive Health Checkup: ₹ _____ (Max ₹5,000)', '', 'Total Section 80D: ₹ _____']
          },
          {
            title: 'Other Deductions',
            fields: ['Section 80E - Education Loan Interest: ₹ _____', 'Section 80G - Donations (with 100% exemption): ₹ _____', 'Section 80G - Donations (with 50% exemption): ₹ _____', 'Section 24(b) - Home Loan Interest: ₹ _____ (Max ₹2,00,000)', 'Section 80TTA - Interest on Savings Account: ₹ _____ (Max ₹10,000)', 'Section 80CCD(1B) - Additional NPS: ₹ _____ (Max ₹50,000)']
          },
          {
            title: 'House Rent Allowance (HRA) Exemption',
            fields: ['Do you live in rented accommodation? Yes / No', 'Annual Rent Paid: ₹ _____', 'Landlord Name:', 'Landlord PAN (if annual rent > ₹1,00,000):', 'City Type: Metro / Non-Metro', 'HRA Received (from salary): ₹ _____ (auto-calculated)', '', 'Rent receipts attached for months: Jan to Dec']
          },
          {
            title: 'Previous Employment Details',
            fields: ['(If joined mid-year)', 'Previous Employer Name:', 'Employment Period: From ____ To ____', 'Salary Earned: ₹ _____', 'TDS Deducted: ₹ _____', 'Professional Tax Paid: ₹ _____', '', 'Form 16 from previous employer attached: Yes / No']
          },
          {
            title: 'Document Submission Checklist',
            fields: ['☐ LIC Premium receipts', '☐ PPF passbook copy/statement', '☐ ELSS investment proof', '☐ Home loan interest certificate', '☐ Tuition fee receipts', '☐ Medical insurance premium receipts', '☐ Rent receipts (all 12 months)', '☐ Donation receipts (80G)', '☐ Education loan interest certificate', '☐ NPS contribution receipts', '☐ Previous employer Form 16 (if applicable)']
          },
          {
            title: 'Employee Declaration',
            fields: ['I declare that:', '1. Information provided is true and correct', '2. I will submit supporting documents by specified deadline', '3. If documents not submitted, I authorize deduction of applicable TDS', '4. I am responsible for accuracy of declarations', '', 'Employee Signature: ________ Date: ____']
          },
          {
            title: 'HR Processing',
            fields: ['Declaration received on: ________', 'Documents verified: Yes / No / Partial', 'TDS computation updated: Yes / No', 'Comments:', '', 'HR Signature: ________ Date: ____']
          }
        ],
        instructions: 'Submit by December 31st of financial year for timely tax planning. Supporting documents must be submitted by February 28th. Non-submission will result in higher TDS deduction.',
        approvalRequired: 'HR Verification',
        processingTime: 'Process by next payroll'
      }
    ]
  },
  annex6: {
    id: 'annex6',
    number: 'ANNEXURE VI',
    title: 'Training & Development',
    searchTerms: ['training', 'development', 'education'],
    category: 'Learning',
    forms: [
      { 
        name: 'Training Nomination Form', 
        code: 'TRN-001', 
        description: 'Nominate employee for training program',
        sections: [
          {
            title: 'Employee Details',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Reporting Manager', 'Years in Current Role']
          },
          {
            title: 'Training Program Details',
            fields: ['Training Program Name:', 'Training Provider/Institute:', 'Training Type: (Internal / External / Online / Certification)', 'Training Duration: From ____ To ____', 'Total Days/Hours:', 'Training Location:', 'Training Mode: (Classroom / Virtual / Blended / Self-paced)']
          },
          {
            title: 'Justification for Training',
            fields: ['Skill Gap Identified:', 'How will this training benefit employee performance?', 'How will this training benefit department/hospital?', 'Is this training mandatory for role? Yes / No', 'Is this training part of Individual Development Plan (IDP)? Yes / No', 'Priority: High / Medium / Low']
          },
          {
            title: 'Cost and Budget',
            fields: ['Training Fee: ₹ _____', 'Travel Expenses (if applicable): ₹ _____', 'Accommodation (if applicable): ₹ _____', 'Other Expenses: ₹ _____', 'Total Cost: ₹ _____', 'Budget Head:', 'Funding Source: Department Budget / Hospital Training Budget / Sponsorship']
          },
          {
            title: 'Post-Training Expectations',
            fields: ['Expected skills/knowledge gain:', 'How will employee apply learning?', 'Will employee train others (Train-the-Trainer)? Yes / No', 'Expected ROI/Impact within: 3 months / 6 months / 1 year', 'Certification expected: Yes / No']
          },
          {
            title: 'Approvals',
            fields: ['Nominated by (Supervisor): ________ Date: ____', 'Justification for nomination:', '', 'Department Head Approval:', 'Signature: ________ Date: ____', '', 'HR Approval (budget and policy compliance):', 'Signature: ________ Date: ____', '', 'Finance Approval (if cost > ₹10,000):', 'Signature: ________ Date: ____']
          }
        ],
        instructions: 'Submit at least 30 days before training start date. Budget approval required for external programs. Employee must complete post-training feedback and knowledge sharing.',
        approvalRequired: 'Supervisor, Department Head, HR, Finance',
        processingTime: '2-3 weeks'
      },
      { 
        name: 'Training Feedback Form', 
        code: 'TRN-002', 
        description: 'Post-training evaluation and feedback',
        sections: [
          {
            title: 'Training Details',
            fields: ['Training Program Name:', 'Training Provider:', 'Training Dates: From ____ To ____', 'Training Location/Mode:', 'Participant Name:', 'Employee ID:', 'Department']
          },
          {
            title: 'Training Content Evaluation',
            fields: ['Rate the following on scale of 1-5 (1=Poor, 5=Excellent):', '', '1. Relevance of content to your role: ___', '2. Quality of training material: ___', '3. Depth of coverage: ___', '4. Practical applicability: ___', '5. Updated and current information: ___', '', 'Overall Content Rating: ___/5']
          },
          {
            title: 'Trainer Evaluation',
            fields: ['Trainer Name(s):', '', 'Rate the trainer (1-5):', '1. Subject matter expertise: ___', '2. Clarity of explanation: ___', '3. Engagement and interaction: ___', '4. Ability to answer questions: ___', '5. Time management: ___', '', 'Overall Trainer Rating: ___/5']
          },
          {
            title: 'Logistics and Facilities',
            fields: ['Rate logistics (1-5):', '1. Training venue/platform: ___', '2. Audio-visual equipment: ___', '3. Training material distribution: ___', '4. Refreshments (if applicable): ___', '5. Registration and coordination: ___']
          },
          {
            title: 'Learning Outcomes',
            fields: ['Key learning points (list top 3-5):', '1.', '2.', '3.', '4.', '5.', '', 'Skills/knowledge gained:', 'Certification received: Yes / No', 'Certificate Number (if applicable):']
          },
          {
            title: 'Application Plan',
            fields: ['How will you apply this learning in your work?', '', '', 'Action plan for next 30 days:', '', '', 'Support needed from manager/organization:', '', '', 'Will you share knowledge with team? Yes / No / Scheduled for: ____']
          },
          {
            title: 'Overall Feedback',
            fields: ['Overall training rating (1-5): ___', '', 'What did you like most about the training?', '', '', 'What could be improved?', '', '', 'Would you recommend this training to colleagues? Yes / No', '', 'Additional comments or suggestions:']
          },
          {
            title: 'Certification',
            fields: ['I attended the training and completed the required hours/modules.', 'Employee Signature: ________ Date: ____', '', 'Supervisor Acknowledgment (post-training discussion held):', 'Supervisor Signature: ________ Date: ____']
          }
        ],
        instructions: 'Submit within 7 days of training completion. Feedback is used for vendor evaluation and future training planning. Mandatory for all external training programs.',
        approvalRequired: 'Submit to HR',
        processingTime: 'Immediate submission'
      }
    ]
  },
  annex7: {
    id: 'annex7',
    number: 'ANNEXURE VII',
    title: 'Grievance & Disciplinary',
    searchTerms: ['grievance', 'complaint', 'disciplinary'],
    category: 'Employee Relations',
    forms: [
      { 
        name: 'Grievance Form', 
        code: 'GRV-001', 
        description: 'File employee grievance or complaint',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Date of Joining', 'Contact Number', 'Email Address', 'Grievance Filing Date']
          },
          {
            title: 'Nature of Grievance',
            fields: ['Category of Grievance:', '☐ Working Conditions', '☐ Compensation/Benefits', '☐ Work Allocation/Assignment', '☐ Career Growth/Promotion', '☐ Transfer/Posting', '☐ Discrimination/Harassment', '☐ Supervisor/Management Issues', '☐ Safety Concerns', '☐ Policy Implementation', '☐ Colleague Behavior', '☐ Other (please specify): _______']
          },
          {
            title: 'Detailed Description of Grievance',
            fields: ['Please provide detailed description of your grievance:', '', '', '', 'When did this issue occur? (Date/Period):', 'Where did this incident take place?', 'Is this a recurring issue? Yes / No', 'If yes, frequency: _______', '', 'Persons involved (if any):', 'Name(s):', 'Designation(s):', 'Department(s):']
          },
          {
            title: 'Impact of Grievance',
            fields: ['How has this issue affected you?', '☐ Mental/emotional stress', '☐ Physical health impact', '☐ Work performance affected', '☐ Career advancement hindered', '☐ Financial loss', '☐ Professional reputation', '☐ Workplace relationships', '☐ Other: _______', '', 'Severity Level: High / Medium / Low']
          },
          {
            title: 'Previous Actions Taken',
            fields: ['Have you tried to resolve this issue before? Yes / No', '', 'If yes, what steps did you take?', '', '', 'Did you discuss with immediate supervisor? Yes / No', 'Supervisor response/action:', '', '', 'Did you discuss with HR informally? Yes / No', 'HR response:', '', '']
          },
          {
            title: 'Supporting Evidence',
            fields: ['Do you have supporting documents/evidence? Yes / No', '', 'Type of evidence:', '☐ Email communications', '☐ Written documents', '☐ Photographs', '☐ Witness statements', '☐ Audio/Video recordings', '☐ Other: _______', '', 'List of documents attached:', '', '', 'Witnesses (if any):', 'Name(s) and contact details:']
          },
          {
            title: 'Desired Resolution',
            fields: ['What resolution/action do you expect?', '', '', '', 'Would you prefer mediation? Yes / No', 'Are you willing to discuss with the concerned party? Yes / No', 'Timeline expected for resolution: Immediate / Within 1 week / Within 1 month']
          },
          {
            title: 'Confidentiality Request',
            fields: ['Do you want this grievance to be kept confidential? Yes / No', 'Can we disclose your identity to investigate? Yes / No / Partial', '', 'Note: Some investigations may require disclosure of identity for fair hearing.']
          },
          {
            title: 'Employee Declaration',
            fields: ['I declare that:', '1. The information provided is true and accurate to the best of my knowledge', '2. I have not filed this grievance with malicious intent', '3. I am willing to cooperate in the investigation', '4. I understand that false complaints may lead to disciplinary action', '', 'Employee Signature: ________ Date: ____']
          },
          {
            title: 'Acknowledgment by HR',
            fields: ['Grievance received on: ________', 'Grievance Reference Number: GRV-______', 'Received by (HR): ________', 'Acknowledged to employee: Yes / No', 'Expected resolution timeline: ________ days', '', 'HR Signature: ________ Date: ____']
          },
          {
            title: 'Investigation & Resolution (For HR Use)',
            fields: ['Investigation initiated on: ________', 'Investigating Officer: ________', 'Statements recorded from:', '- Employee:', '- Concerned party:', '- Witnesses:', '', 'Investigation findings:', '', '', 'Action taken:', '', '', 'Resolution date: ________', 'Employee informed on: ________', 'Grievance status: Resolved / Partially Resolved / Under Review / Escalated', '', 'HR Manager Signature: ________ Date: ____']
          }
        ],
        instructions: 'Submit to HR Department confidentially. Grievances will be investigated impartially. Retaliation against grievance filing is strictly prohibited. Resolution timeline: 15-30 days depending on complexity.',
        approvalRequired: 'HR Investigation',
        processingTime: '15-30 days'
      },
      { 
        name: 'Show Cause Notice Template', 
        code: 'DISC-001', 
        description: 'Disciplinary notice for misconduct',
        sections: [
          {
            title: 'Notice Header',
            fields: ['KOYILI HOSPITAL', 'SHOW CAUSE NOTICE', '', 'Notice No: SCN-________', 'Date: ________', '', 'CONFIDENTIAL']
          },
          {
            title: 'To',
            fields: ['Employee Name: ________', 'Employee ID: ________', 'Designation: ________', 'Department: ________']
          },
          {
            title: 'Subject',
            fields: ['Subject: Show Cause Notice for [Type of Misconduct]']
          },
          {
            title: 'Notice Body',
            fields: ['Dear [Employee Name],', '', 'This is to inform you that the Management has taken serious note of the following incident(s)/misconduct:']
          },
          {
            title: 'Charges/Allegations',
            fields: ['1. Nature of Misconduct:', '   ☐ Unauthorized absence', '   ☐ Late coming/early leaving', '   ☐ Insubordination', '   ☐ Negligence of duty', '   ☐ Violation of safety rules', '   ☐ Breach of confidentiality', '   ☐ Misuse of hospital property', '   ☐ Unprofessional conduct', '   ☐ Patient safety compromise', '   ☐ Fraudulent activity', '   ☐ Other: _______', '', '2. Specific Details of Incident:', 'Date of Incident: ________', 'Time: ________', 'Location: ________', '', '3. Description of Misconduct:', '', '', '', '', '4. Evidence/Witnesses:', 'Supporting documents: ________', 'Witness statements: ________', 'Supervisor report: ________']
          },
          {
            title: 'Policy Violation',
            fields: ['Your actions constitute violation of:', '- Employment Contract Clause: ________', '- HR By-Laws Section: ________', '- Hospital Policy: ________', '- Code of Conduct: ________', '', 'This conduct is considered: Gross Misconduct / Misconduct / Minor Infraction']
          },
          {
            title: 'Previous Warnings',
            fields: ['Previous disciplinary record:', 'Verbal Warning dated: ________ (if any)', 'Written Warning dated: ________ (if any)', 'Suspension dated: ________ (if any)', '', 'Despite previous warning(s), the misconduct has been repeated/continued.']
          },
          {
            title: 'Show Cause Requirement',
            fields: ['You are hereby required to submit a written explanation within **[X] working days** from receipt of this notice, stating:', '', '1. Why disciplinary action should not be taken against you', '2. Your version of the incident with supporting evidence', '3. Any mitigating circumstances', '4. Steps you will take to prevent recurrence', '', 'Your explanation should be submitted to:', 'Name: ________ (HR Manager/Designated Officer)', 'Department: Human Resources', 'Email: ________']
          },
          {
            title: 'Consequences of Non-Response',
            fields: ['Please note:', '- Failure to respond within stipulated time will be considered as admission of charges', '- Disciplinary action may be taken ex-parte without further notice', '- Possible actions include: warning, suspension, salary deduction, demotion, or termination', '- You have the right to seek representation from internal committee']
          },
          {
            title: 'Rights of Employee',
            fields: ['You have the right to:', '1. Submit written explanation', '2. Present your case before disciplinary committee', '3. Provide documentary evidence', '4. Call witnesses in your defense', '5. Seek representation (as per policy)', '', 'A fair and impartial inquiry will be conducted before any final decision.']
          },
          {
            title: 'Interim Measures',
            fields: ['Pending investigation:', '☐ You are suspended from duty with/without pay', '☐ You are transferred to [Department]', '☐ You will work under supervision', '☐ Access to [systems/areas] is restricted', '☐ No interim action', '', 'Effective from: ________']
          },
          {
            title: 'Issued By',
            fields: ['', '[Name]', '[Designation]', 'Human Resources Department', 'For Koyili Hospital', '', 'Date: ________', 'Signature: ________']
          },
          {
            title: 'Acknowledgment of Receipt',
            fields: ['I acknowledge receipt of this Show Cause Notice on [Date].', '', 'Employee Signature: ________', 'Date: ________', '', 'OR', '', 'Delivered by: ________ (if employee refuses to sign)', 'Witness 1: ________ Signature: ________', 'Witness 2: ________ Signature: ________']
          }
        ],
        instructions: 'Issue after preliminary investigation. Provide reasonable time to respond (typically 3-7 days). Maintain confidentiality. Document delivery and acknowledgment. Conduct fair inquiry before final action.',
        approvalRequired: 'Department Head, HR Manager, Legal (if gross misconduct)',
        processingTime: 'Issue after incident investigation'
      },
      { 
        name: 'Explanation Letter Format', 
        code: 'DISC-002', 
        description: 'Employee response to show cause notice',
        sections: [
          {
            title: 'Letter Header',
            fields: ['Date: ________', '', 'To:', '[Name of Issuing Authority]', '[Designation]', 'Human Resources Department', 'Koyili Hospital']
          },
          {
            title: 'Subject',
            fields: ['Subject: Explanation in response to Show Cause Notice No. ________ dated ________']
          },
          {
            title: 'Reference',
            fields: ['Ref: Show Cause Notice No: SCN-________', 'Date of Notice: ________', 'Employee Name: ________', 'Employee ID: ________', 'Designation: ________', 'Department: ________']
          },
          {
            title: 'Opening',
            fields: ['Dear Sir/Madam,', '', 'I am writing in response to the Show Cause Notice issued to me on [Date] regarding [brief mention of allegation].', '', 'I respectfully submit my explanation as follows:']
          },
          {
            title: 'Acknowledgment of Receipt',
            fields: ['I acknowledge receipt of the Show Cause Notice dated ________ on ________.', '', 'I have understood the charges/allegations mentioned in the notice.']
          },
          {
            title: 'Your Version of Events',
            fields: ['Regarding the incident on [Date]:', '', 'My version of what transpired is as follows:', '', '', '', '', '', 'I would like to clarify the following points:', '1.', '2.', '3.']
          },
          {
            title: 'Response to Specific Charges',
            fields: ['Addressing each charge mentioned in the notice:', '', 'Charge 1: [Restate charge]', 'My response: ', '', '', '', 'Charge 2: [Restate charge]', 'My response: ', '', '', '', '(Continue for all charges)']
          },
          {
            title: 'Mitigating Circumstances',
            fields: ['I would like to bring to your attention the following circumstances:', '', '', '', '', 'Factors beyond my control:', '', '', '', 'My past record: (mention clean record, years of service, previous commendations if applicable)']
          },
          {
            title: 'Supporting Evidence',
            fields: ['In support of my explanation, I am attaching the following documents:', '1.', '2.', '3.', '', 'Witness statements (if any):', 'Name: ________ Designation: ________ Contact: ________', 'Name: ________ Designation: ________ Contact: ________']
          },
          {
            title: 'Acceptance of Mistake (if applicable)',
            fields: ['(Use this section only if acknowledging partial/full mistake)', '', 'I accept that [describe what went wrong].', '', 'However, this was not intentional and occurred due to [reason].', '', 'I assure you that this was an isolated incident and not reflective of my character or work ethic.']
          },
          {
            title: 'Action Plan / Assurance',
            fields: ['I would like to assure you that:', '', '1. I will be more careful/diligent in future', '2. I will undergo any additional training if required', '3. I will strictly adhere to hospital policies and procedures', '4. This will not be repeated', '', 'Steps I propose to take:', '', '', '']
          },
          {
            title: 'Request for Leniency',
            fields: ['Considering:', '- My [X] years of service with the hospital', '- My clean disciplinary record', '- The circumstances mentioned above', '- My sincere regret for any inconvenience caused', '', 'I humbly request you to consider my explanation and take a lenient view of the matter.']
          },
          {
            title: 'Request for Personal Hearing',
            fields: ['I would appreciate an opportunity to present my case in person before the disciplinary committee.', '', 'I am available on [mention dates/times] for a personal hearing if deemed necessary.']
          },
          {
            title: 'Closing',
            fields: ['I trust that my explanation will be given due consideration. I remain committed to my duties and to upholding the values of Koyili Hospital.', '', 'Thank you for your understanding.', '', 'Respectfully,', '', '[Your Name]', '[Employee ID]', '[Designation]', '[Department]', '[Contact Number]', '[Email Address]', '', 'Date: ________', 'Signature: ________']
          },
          {
            title: 'Enclosures',
            fields: ['List of documents attached:', '1.', '2.', '3.']
          }
        ],
        instructions: 'Submit within stipulated timeline (usually 3-7 days). Be honest, factual, and professional. Avoid emotional language. Provide evidence if available. Maintain respectful tone. Keep a copy for your records.',
        approvalRequired: 'Submit to HR as per notice',
        processingTime: 'Submit as per deadline in Show Cause Notice'
      },
      { 
        name: 'Warning Letter Template', 
        code: 'DISC-003', 
        description: 'Verbal or written warning for misconduct',
        sections: [
          {
            title: 'Letter Header',
            fields: ['KOYILI HOSPITAL', '[TYPE: VERBAL WARNING / WRITTEN WARNING / FINAL WARNING]', '', 'Warning Letter No: WL-________', 'Date: ________', '', 'CONFIDENTIAL']
          },
          {
            title: 'To',
            fields: ['Employee Name: ________', 'Employee ID: ________', 'Designation: ________', 'Department: ________']
          },
          {
            title: 'Subject',
            fields: ['Subject: [Type] Warning for [Nature of Misconduct]']
          },
          {
            title: 'Opening',
            fields: ['Dear [Employee Name],', '', 'This letter serves as a [VERBAL / WRITTEN / FINAL] warning regarding your conduct/performance at Koyili Hospital.']
          },
          {
            title: 'Incident Details',
            fields: ['Date of Incident/Issue: ________', 'Time (if applicable): ________', 'Location: ________', '', 'Description of misconduct/issue:', '', '', '', '', 'This incident involved: (check applicable)', '☐ Violation of hospital policy', '☐ Breach of code of conduct', '☐ Performance deficiency', '☐ Attendance/punctuality issue', '☐ Insubordination', '☐ Patient care concern', '☐ Safety violation', '☐ Other: _______']
          },
          {
            title: 'Policy/Standard Violated',
            fields: ['Your conduct/performance falls short of expected standards as outlined in:', '- Employment Contract: Clause ________', '- HR By-Laws: Section ________', '- Hospital Policy: ________', '- Department SOP: ________', '- Code of Conduct: Article ________']
          },
          {
            title: 'Previous Discussions',
            fields: ['This matter was discussed with you on:', 'Date: ________ by [Supervisor Name]', '', 'Verbal counseling was provided on: ________ (if applicable)', '', 'Previous warning (if any):', 'Date: ________ Type: Verbal / Written', '', 'Despite previous counseling/warning, the issue has persisted.']
          },
          {
            title: 'Expected Standards',
            fields: ['You are expected to:', '1.', '2.', '3.', '4.', '', 'These expectations are in line with your job responsibilities and hospital policies.']
          },
          {
            title: 'Warning Statement',
            fields: ['This constitutes a [FIRST / SECOND / FINAL] warning.', '', 'You are hereby warned that:', '', '1. Any repetition of this conduct will lead to further disciplinary action', '', '2. Continued non-compliance may result in:', '   - Suspension (with/without pay)', '   - Demotion', '   - Salary deduction', '   - Termination of employment', '', '3. This warning will remain on your personnel file for [X] months/years', '', '4. It may affect your performance appraisal, increment, and promotion']
          },
          {
            title: 'Improvement Plan',
            fields: ['To correct this situation, you must:', '', 'Immediate actions:', '1.', '2.', '3.', '', 'Ongoing improvements:', '1.', '2.', '', 'Your performance/conduct will be monitored for the next [X] months.', '', 'Review meeting scheduled on: ________']
          },
          {
            title: 'Support Offered',
            fields: ['The Hospital is willing to support you through:', '☐ Additional training', '☐ Counseling', '☐ Mentoring', '☐ Clear communication of expectations', '☐ Regular feedback sessions', '', 'Please contact [Name, Designation] for assistance.']
          },
          {
            title: 'Warning Validity',
            fields: ['This warning is valid for: [X] months from date of issue', '', 'If no further incidents occur during this period, this warning will be removed from your active record (but may remain in permanent file as per policy).']
          },
          {
            title: 'Right to Respond',
            fields: ['You have the right to submit a written response to this warning within [X] days.', '', 'Submit response to:', '[Name]', '[Designation]', 'Email: ________']
          },
          {
            title: 'Issued By',
            fields: ['', '[Name]', '[Designation]', 'Department: ________', '', 'Reviewed and approved by:', '[HR Manager Name]', 'Human Resources Department', '', 'Date: ________', 'Signatures: ________________']
          },
          {
            title: 'Acknowledgment of Receipt',
            fields: ['I acknowledge receipt of this warning letter and understand its contents.', '', 'I understand that:', '1. This warning will remain on my file', '2. Further misconduct may lead to termination', '3. I have the right to submit a written response', '4. I can seek clarification from HR', '', 'Employee Signature: ________ Date: ________', '', 'OR', '', 'Employee refused to sign / unavailable', 'Delivered by: ________ Date: ________', 'Witness 1: ________ Signature: ________', 'Witness 2: ________ Signature: ________']
          },
          {
            title: 'HR Record',
            fields: ['Copy placed in employee personal file: Yes', 'Warning logged in HMIS: Yes', 'Supervisor informed: Yes', 'Follow-up review date: ________', '', 'HR Documentation Date: ________', 'Signed: ________']
          }
        ],
        instructions: 'Issue after proper investigation and giving employee opportunity to explain. Maintain professional, factual tone. Document delivery. Provide copy to employee, file, and supervisor. Schedule follow-up review.',
        approvalRequired: 'Supervisor/Manager, HR Manager',
        processingTime: 'Issue after investigation and show cause response'
      }
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
      { 
        name: 'ID Card Request Form', 
        code: 'ADM-001', 
        description: 'New or replacement ID card request',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Date of Joining', 'Contact Number', 'Email Address']
          },
          {
            title: 'Request Type',
            fields: ['Type of Request:', '☐ New ID Card (for new joiners)', '☐ Replacement - Lost', '☐ Replacement - Damaged', '☐ Replacement - Information Update', '☐ Duplicate Card (for multiple access points)', '☐ Temporary Card (for visitors/consultants)']
          },
          {
            title: 'Details for New ID Card',
            fields: ['(Complete only if requesting new card)', 'Blood Group', 'Emergency Contact Name', 'Emergency Contact Number', 'Recent passport-size photograph attached: Yes / No', 'ID Card required for:', '☐ Office access', '☐ Attendance marking', '☐ Cafeteria', '☐ Library', '☐ Parking', '☐ Other: _______']
          },
          {
            title: 'Details for Replacement Card',
            fields: ['(Complete only if requesting replacement)', 'Previous Card Number:', 'Date of Issue:', 'Reason for replacement:', '', 'If Lost:', 'Date of Loss:', 'Location where lost:', 'FIR filed: Yes / No (if applicable)', 'FIR Number: ________ (if filed)', '', 'If Damaged:', 'Nature of damage:', 'Damaged card to be returned: Yes / No', '', 'If Information Update:', 'Information to be updated:', '☐ Name change', '☐ Photo update', '☐ Designation change', '☐ Department change', '☐ Emergency contact update', 'Supporting documents attached: Yes / No']
          },
          {
            title: 'Biometric/Access Details',
            fields: ['Biometric registration completed: Yes / No / Not Applicable', 'Access areas required:', '☐ Main entrance', '☐ Department floor', '☐ Server room', '☐ Medical records', '☐ Pharmacy', '☐ OT complex', '☐ ICU', '☐ Administrative block', '☐ Parking', '☐ Other: _______']
          },
          {
            title: 'Card Collection Details',
            fields: ['Preferred collection date: ________', 'Will collect personally: Yes / No', 'If No, authorized person:', 'Name: ________', 'Relationship/Designation: ________', 'ID proof of authorized person attached: Yes / No']
          },
          {
            title: 'Charges (if applicable)',
            fields: ['First ID Card: Free', 'Replacement (Lost): ₹ 200', 'Replacement (Damaged): ₹ 100', 'Duplicate Card: ₹ 200', 'Update (Name/Photo): Free (with supporting documents)', '', 'Amount to be paid: ₹ ________', 'Payment method: Cash / Payroll Deduction']
          },
          {
            title: 'Declaration',
            fields: ['I declare that:', '1. Information provided is correct', '2. I will use the ID card only for authorized purposes', '3. I will not transfer or lend my ID card to anyone', '4. I will return the ID card upon termination of employment', '5. Loss of card will be reported immediately', '', 'Employee Signature: ________ Date: ____']
          },
          {
            title: 'Approvals',
            fields: ['Immediate Supervisor:', 'Signature: ________ Date: ____', '', 'Admin Department (ID card issuance):', 'Card Number issued: ________', 'Biometric registration: Complete / Pending', 'Access activated: Yes / No', 'Signature: ________ Date: ____', '', 'Card issued to employee on: ________', 'Employee Signature (acknowledgment): ________']
          }
        ],
        instructions: 'Submit to Admin Department. For lost cards, FIR may be required for sensitive access areas. Attach photograph and supporting documents. Replacement charges may apply.',
        approvalRequired: 'Supervisor, Admin',
        processingTime: '3-5 business days'
      },
      { 
        name: 'Loan Request Form', 
        code: 'ADM-002', 
        description: 'Employee loan request',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Date of Joining', 'Employment Type: Permanent / Contract', 'Current Monthly Salary (Gross): ₹ ________', 'Monthly Take-home Salary: ₹ ________', 'PF Number', 'Bank Account Number', 'IFSC Code']
          },
          {
            title: 'Loan Request Details',
            fields: ['Type of Loan:', '☐ Personal Loan', '☐ Medical Emergency Loan', '☐ Education Loan (Self/Children)', '☐ Home Renovation Loan', '☐ Vehicle Loan', '☐ Festival Advance', '☐ Marriage Loan (Self/Children)', '☐ Other: _______', '', 'Loan Amount Requested: ₹ ________', 'Loan Amount in words: ________', '', 'Purpose of Loan (detailed):', '', '', '']
          },
          {
            title: 'Loan Eligibility Check',
            fields: ['Years of service: ________ years ________ months', 'Minimum eligibility: 2 years (for major loans)', '', 'Current outstanding loans:', 'Previous loan amount: ₹ ________ (if any)', 'Amount repaid: ₹ ________', 'Outstanding balance: ₹ ________', '', 'Maximum eligibility:', '- Personal loan: Up to 3 months salary', '- Medical/Emergency: Up to 6 months salary', '- Education loan: Up to ₹2,00,000', '- Marriage loan: Up to ₹3,00,000', '', 'Eligible for current request: Yes / No']
          },
          {
            title: 'Repayment Plan',
            fields: ['Proposed repayment tenure: ________ months', 'Maximum allowed: 36 months (or service remaining, whichever is lower)', '', 'Monthly installment: ₹ ________', 'Interest rate: ___% per annum (as per policy)', '', 'Repayment schedule:', 'Start month: ________', 'End month: ________', '', 'Monthly salary deduction authorized: Yes / No', '', 'Total amount to be repaid: ₹ ________ (Principal + Interest)']
          },
          {
            title: 'Supporting Documents',
            fields: ['Documents attached:', '☐ Medical bills/prescriptions (for medical loan)', '☐ Admission letter/fee structure (for education loan)', '☐ Marriage invitation/booking receipts (for marriage loan)', '☐ Property documents/estimate (for home loan)', '☐ Vehicle quotation/booking (for vehicle loan)', '☐ Other supporting documents', '', 'List of documents:', '1.', '2.', '3.']
          },
          {
            title: 'Guarantor Details',
            fields: ['(Required for loans above ₹50,000)', '', 'Guarantor 1:', 'Name: ________', 'Employee ID: ________', 'Designation: ________', 'Department: ________', 'Relationship with applicant: Colleague / Supervisor / Other', 'Contact Number: ________', 'Signature: ________', '', 'Guarantor 2:', 'Name: ________', 'Employee ID: ________', 'Designation: ________', 'Department: ________', 'Relationship with applicant: Colleague / Supervisor / Other', 'Contact Number: ________', 'Signature: ________']
          },
          {
            title: 'Terms and Conditions',
            fields: ['I understand and accept that:', '1. Loan is subject to approval and fund availability', '2. Interest will be charged as per hospital policy', '3. Monthly installment will be deducted from salary', '4. If I resign/terminate, full outstanding will be deducted from final settlement', '5. If outstanding exceeds final settlement, I will pay the balance', '6. Delay in repayment may affect future loan eligibility', '7. Hospital reserves right to modify terms with notice', '8. Loan cannot be transferred to another party', '9. Early repayment allowed without penalty', '10. This loan is not transferable across group hospitals/companies']
          },
          {
            title: 'Employee Declaration',
            fields: ['I hereby declare that:', '1. Information provided is true and accurate', '2. I will repay the loan as per agreed schedule', '3. I authorize salary deduction for repayment', '4. I have disclosed all existing loans', '5. Loan amount will be used only for stated purpose', '', 'Employee Signature: ________ Date: ____']
          },
          {
            title: 'Approvals',
            fields: ['Immediate Supervisor Recommendation:', 'Comments:', 'Signature: ________ Date: ____', '', 'HR Verification:', '☐ Eligibility verified', '☐ Service period confirmed', '☐ Outstanding loans checked', '☐ Guarantor details verified', 'HR Signature: ________ Date: ____', '', 'Finance Approval:', 'Loan amount approved: ₹ ________', 'Repayment tenure: ________ months', 'Interest rate: ___% per annum', 'Monthly deduction: ₹ ________', 'Loan disbursement date: ________', 'Finance Signature: ________ Date: ____', '', 'CHRO Approval (for loans > ₹1,00,000):', 'Signature: ________ Date: ____']
          }
        ],
        instructions: 'Submit at least 15 days before fund requirement. Attach all supporting documents. Guarantors required for loans above ₹50,000. Subject to fund availability and management approval.',
        approvalRequired: 'Supervisor, HR, Finance, CHRO (for large loans)',
        processingTime: '15-30 days'
      },
      { 
        name: 'Address Change Form', 
        code: 'ADM-003', 
        description: 'Update personal contact details',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Date of Request']
          },
          {
            title: 'Type of Update',
            fields: ['Select information to be updated:', '☐ Current/Correspondence Address', '☐ Permanent Address', '☐ Contact Number (Mobile)', '☐ Alternate Contact Number', '☐ Email Address (Personal)', '☐ Emergency Contact Details', '☐ Family Details', '☐ Name Change', '☐ Marital Status Change', '☐ Other: _______']
          },
          {
            title: 'Current Information on Record',
            fields: ['Current Address:', '', '', 'City: ________ State: ________ PIN: ________', '', 'Permanent Address:', '', '', 'City: ________ State: ________ PIN: ________', '', 'Mobile Number: ________', 'Alternate Number: ________', 'Personal Email: ________', '', 'Emergency Contact:', 'Name: ________', 'Relationship: ________', 'Contact: ________']
          },
          {
            title: 'New/Updated Information',
            fields: ['New Current/Correspondence Address:', '', '', 'City: ________ State: ________ PIN: ________', 'Landmark: ________', 'Is this also your permanent address? Yes / No', '', 'If No, New Permanent Address:', '', '', 'City: ________ State: ________ PIN: ________', '', 'New Mobile Number: ________', 'New Alternate Number: ________', 'New Personal Email: ________', '', 'Updated Emergency Contact:', 'Name: ________', 'Relationship: ________', 'Contact: ________', 'Alternate Emergency Contact:', 'Name: ________', 'Relationship: ________', 'Contact: ________']
          },
          {
            title: 'Name Change Details',
            fields: ['(Complete only if updating name)', '', 'Old Name: ________', 'New Name: ________', '', 'Reason for name change:', '☐ Marriage', '☐ Divorce', '☐ Legal name correction', '☐ Religious conversion', '☐ Other: _______', '', 'Effective date of name change: ________', '', 'Supporting documents attached:', '☐ Marriage certificate', '☐ Gazette notification', '☐ Affidavit', '☐ Court order', '☐ Updated Aadhaar', '☐ Updated PAN', '☐ Passport (if applicable)']
          },
          {
            title: 'Marital Status Change',
            fields: ['(Complete only if marital status changed)', '', 'Previous Status: Single / Married / Divorced / Widowed', 'New Status: Single / Married / Divorced / Widowed', '', 'Effective date: ________', '', 'If married:', 'Spouse Name: ________', 'Marriage Date: ________', 'Marriage certificate attached: Yes / No', '', 'If divorced/widowed:', 'Date: ________', 'Supporting document attached: Yes / No', '', 'Update required in:', '☐ Medical insurance', '☐ PF nomination', '☐ Gratuity nomination', '☐ Leave records']
          },
          {
            title: 'Documents to be Updated',
            fields: ['Select records to be updated:', '☐ Employee master data', '☐ Salary records', '☐ PF account', '☐ Medical insurance', '☐ ID card', '☐ Email distribution lists', '☐ Payroll', '☐ Income tax records', '☐ Attendance system', '☐ Emergency contact database', '☐ All official records']
          },
          {
            title: 'Supporting Documents Checklist',
            fields: ['Attach relevant documents:', '☐ Address proof (Aadhaar/Passport/Voter ID/Utility bill)', '☐ PAN card (if name change)', '☐ Marriage certificate (if applicable)', '☐ Gazette notification (if name change)', '☐ Affidavit (if name change)', '☐ Rental agreement (if new address)', '☐ Previous ID proof showing old information']
          },
          {
            title: 'Reason for Update',
            fields: ['Reason for information change:', '☐ Relocation', '☐ Marriage', '☐ Divorce', '☐ Permanent shift', '☐ Change of contact number', '☐ Correction in records', '☐ Other: _______', '', 'Brief description (if needed):']
          },
          {
            title: 'Employee Declaration',
            fields: ['I declare that:', '1. All information provided is correct and accurate', '2. Supporting documents attached are genuine', '3. I have informed my department of this change', '4. Official communication should be sent to new address/contact', '5. I will update PF/insurance portals separately if required', '', 'Employee Signature: ________ Date: ____']
          },
          {
            title: 'HR Processing',
            fields: ['Documents verified: Yes / No / Partial', 'Updated in HRIS: Yes / Date: ________', 'Updated in Payroll: Yes / Date: ________', 'Updated in PF records: Yes / Date: ________', 'Updated in Insurance: Yes / Date: ________', 'ID card reissue required: Yes / No', 'Other departments notified: Yes / No', '', 'Processed by:', 'HR Executive Name: ________', 'Date of update: ________', 'Signature: ________']
          }
        ],
        instructions: 'Submit within 15 days of change. Attach address proof or relevant documents. Updates will reflect in next payroll cycle. Inform department for official correspondence.',
        approvalRequired: 'HR verification',
        processingTime: '5-7 business days'
      },
      { 
        name: 'Nomination Form', 
        code: 'ADM-004', 
        description: 'PF, Insurance, and Gratuity nomination',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Date of Joining', 'Date of Birth', 'Marital Status: Single / Married / Divorced / Widowed', 'PF Number', 'UAN Number', 'PAN Number', 'Aadhaar Number']
          },
          {
            title: 'Nomination Type',
            fields: ['This nomination is for:', '☐ Provident Fund (PF)', '☐ Gratuity', '☐ Group Life Insurance', '☐ Group Medical Insurance', '☐ Accidental Death Insurance', '☐ All of the above', '', 'Type of Nomination:', '☐ Fresh Nomination (first time)', '☐ Change in Nomination', '☐ Addition of Nominee', '☐ Deletion of Nominee']
          },
          {
            title: 'Nominee 1 - Details',
            fields: ['Full Name: ________', 'Date of Birth: ________', 'Age: ________ years', 'Relationship with Employee:', '☐ Spouse', '☐ Son', '☐ Daughter', '☐ Father', '☐ Mother', '☐ Brother', '☐ Sister', '☐ Other dependent: _______', '', 'Address: ', '', '', 'City: ________ State: ________ PIN: ________', 'Aadhaar Number: ________', 'Contact Number: ________', '', 'Percentage of share: _______%', '', 'If nominee is minor (below 18 years):', 'Guardian Name: ________', 'Guardian Relationship: ________', 'Guardian Address: ', '', '', 'Guardian Aadhaar: ________']
          },
          {
            title: 'Nominee 2 - Details',
            fields: ['(Optional - if multiple nominees)', '', 'Full Name: ________', 'Date of Birth: ________', 'Age: ________ years', 'Relationship with Employee: ________', '', 'Address: ', '', '', 'City: ________ State: ________ PIN: ________', 'Aadhaar Number: ________', 'Contact Number: ________', '', 'Percentage of share: _______%', '', 'If nominee is minor:', 'Guardian Name: ________', 'Guardian Relationship: ________', 'Guardian Address: ________', 'Guardian Aadhaar: ________']
          },
          {
            title: 'Nominee 3 - Details',
            fields: ['(Optional)', '', 'Full Name: ________', 'Date of Birth: ________', 'Age: ________ years', 'Relationship with Employee: ________', '', 'Address: ________', '', 'City: ________ State: ________ PIN: ________', 'Aadhaar Number: ________', 'Contact Number: ________', '', 'Percentage of share: _______%', '', 'Total percentage allocation: _____% (must total 100%)']
          },
          {
            title: 'Family Details (for PF)',
            fields: ['(As per EPF regulations - mandatory)', '', 'Spouse:', 'Name: ________', 'Date of Birth: ________', 'Aadhaar: ________', '', 'Children:', '1. Name: ________ DOB: ________ Aadhaar: ________', '2. Name: ________ DOB: ________ Aadhaar: ________', '3. Name: ________ DOB: ________ Aadhaar: ________', '', 'Father:', 'Name: ________', 'Date of Birth: ________', 'Aadhaar: ________', 'Dependent on employee: Yes / No', '', 'Mother:', 'Name: ________', 'Date of Birth: ________', 'Aadhaar: ________', 'Dependent on employee: Yes / No']
          },
          {
            title: 'Medical Insurance Dependent Nomination',
            fields: ['(For medical insurance coverage)', '', 'Dependents to be covered:', '☐ Self (employee)', '☐ Spouse: Name ________', '☐ Child 1: Name ________ DOB ________', '☐ Child 2: Name ________ DOB ________', '☐ Child 3: Name ________ DOB ________', '☐ Father: Name ________ DOB ________', '☐ Mother: Name ________ DOB ________', '', 'Maximum dependents allowed: As per policy', 'Premium deduction: As per policy', '', 'Documents required for each dependent:', '☐ Birth certificate (for children)', '☐ Marriage certificate (for spouse)', '☐ Aadhaar card', '☐ Photographs']
          },
          {
            title: 'Previous Nomination (if any)',
            fields: ['Have you made a previous nomination? Yes / No', '', 'If Yes:', 'Date of previous nomination: ________', 'Previous nominee name(s): ________', '', 'Reason for change:', '☐ Marriage', '☐ Birth of child', '☐ Divorce', '☐ Death of previous nominee', '☐ Change of preference', '☐ Other: _______']
          },
          {
            title: 'Supporting Documents Attached',
            fields: ['☐ Age proof of nominee(s) (Birth certificate/Aadhaar/School certificate)', '☐ Relationship proof (Marriage certificate/Birth certificate)', '☐ Aadhaar card of nominee(s)', '☐ Guardian documents (if nominee is minor)', '☐ Passport-size photograph of nominee(s)', '☐ Cancelled cheque/Bank details (for insurance)', '☐ Divorce decree (if applicable)', '☐ Death certificate (if replacing deceased nominee)']
          },
          {
            title: 'Declaration by Employee',
            fields: ['I hereby declare that:', '', '1. The information provided is true and correct', '2. The nominee(s) mentioned are my legal heirs/dependents', '3. I understand that this nomination supersedes all previous nominations', '4. In case of minor nominee, I have appointed a guardian', '5. I will inform HR of any changes in family circumstances', '6. I understand that nomination can be changed by submitting fresh form', '7. Nomination is made as per EPF Act 1952, Payment of Gratuity Act 1972, and Insurance regulations', '8. Percentage allocation totals 100%', '', 'Place: ________', 'Date: ________', '', 'Employee Signature: ________']
          },
          {
            title: 'Witness Details',
            fields: ['(Required for PF nomination)', '', 'Witness 1:', 'Name: ________', 'Designation: ________', 'Employee ID: ________', 'Signature: ________', '', 'Witness 2:', 'Name: ________', 'Designation: ________', 'Employee ID: ________', 'Signature: ________']
          },
          {
            title: 'HR Acknowledgment',
            fields: ['Nomination received on: ________', 'Updated in PF records: Yes / Date: ________', 'Updated in Gratuity records: Yes / Date: ________', 'Updated in Insurance: Yes / Date: ________', 'Updated in HRIS: Yes / Date: ________', 'Employee provided copy: Yes', '', 'Documents verified by:', 'HR Executive Name: ________', 'Signature: ________', 'Date: ________']
          }
        ],
        instructions: 'Submit within 30 days of joining or within 30 days of change in family status. Attach all supporting documents. Keep a copy for your records. Update in EPFO portal separately for PF.',
        approvalRequired: 'HR verification and update',
        processingTime: '7-10 business days'
      },
      { 
        name: 'NOC Request Template', 
        code: 'ADM-005', 
        description: 'No Objection Certificate for various purposes',
        sections: [
          {
            title: 'Employee Information',
            fields: ['Employee Name', 'Employee ID', 'Department', 'Designation', 'Date of Joining', 'Current Employment Status: Permanent / Contract / Probation', 'Contact Number', 'Email Address']
          },
          {
            title: 'Purpose of NOC',
            fields: ['NOC required for:', '☐ Passport Application/Renewal', '☐ Visa Application', '☐ Higher Education/Studies', '☐ Part-time Course/Training', '☐ Professional Certification', '☐ Renting/Leasing Property', '☐ Loan Application (Bank/Financial)', '☐ Vehicle Registration', '☐ Court/Legal Proceedings', '☐ Government Application', '☐ Professional Membership', '☐ Speaking Engagement/Conference', '☐ Publication of Research Paper', '☐ Part-time Work/Consultancy', '☐ Other: _______', '', 'Detailed purpose:', '', '']
          },
          {
            title: 'NOC Validity Details',
            fields: ['NOC required from: ________ (date)', 'NOC required until: ________ (date)', 'Duration: ________ months', '', 'Is this a one-time requirement? Yes / No', '', 'Issuing authority/organization requiring NOC:', 'Name: ________', 'Address: ________', 'Purpose description: ________']
          },
          {
            title: 'Impact on Employment',
            fields: ['Will this activity affect your work schedule? Yes / No', '', 'If Yes:', 'Expected time commitment: ________ hours per week', 'Will you take leave? Yes / No', 'Type of leave: Casual / Annual / Unpaid', '', 'Conflict of interest declaration:', 'Does this activity involve:', '☐ Competitor organization', '☐ Similar industry', '☐ Confidential information use', '☐ Hospital time/resources', '☐ None of the above', '', 'I declare no conflict of interest: Yes / No']
          },
          {
            title: 'Higher Education/Training Details',
            fields: ['(Complete only if NOC for studies)', '', 'Course/Program Name: ________', 'Institution Name: ________', 'Course Duration: ________ years/months', 'Course Type: Full-time / Part-time / Distance / Online', '', 'Schedule:', 'Days: ________', 'Timing: ________', 'Will it affect working hours? Yes / No', '', 'Relevance to current role:', '', '', 'Will Hospital benefit from this education? Yes / No', 'If Yes, how: ________']
          },
          {
            title: 'Part-time Work/Consultancy Details',
            fields: ['(Complete only if NOC for additional work)', '', 'Organization Name: ________', 'Nature of Work: ________', 'Time commitment: ________ hours per week', 'Compensation: Yes / No / Pro-bono', '', 'Justification for additional work:', '', '', 'Assurance that it will not:', '☐ Affect primary employment', '☐ Use hospital resources', '☐ Involve conflict of interest', '☐ Breach confidentiality', '☐ Compete with hospital services']
          },
          {
            title: 'Publication/Research Details',
            fields: ['(Complete only if NOC for publication)', '', 'Title of Paper/Publication: ________', 'Journal/Conference Name: ________', 'Co-authors (if any): ________', '', 'Does it involve hospital data? Yes / No', 'If Yes:', 'Patient data anonymized: Yes / No', 'Ethics committee approval obtained: Yes / No', 'Approval date: ________', '', 'Hospital affiliation to be mentioned: Yes / No']
          },
          {
            title: 'Supporting Documents',
            fields: ['Documents attached:', '☐ Course admission letter (for education)', '☐ Invitation letter (for conference)', '☐ Offer letter (for consultancy)', '☐ Passport copy (for visa/passport NOC)', '☐ Loan application form', '☐ Property agreement', '☐ Legal notice/court summons', '☐ Other: _______', '', 'List all attached documents:', '1.', '2.', '3.']
          },
          {
            title: 'Employee Undertaking',
            fields: ['I hereby undertake that:', '', '1. Information provided is true and correct', '2. The activity will not interfere with my primary employment', '3. I will not use hospital resources for this purpose', '4. I will maintain confidentiality of hospital information', '5. There is no conflict of interest', '6. I will inform if circumstances change', '7. I will complete this activity within specified timeline', '8. I will continue to fulfill my job responsibilities', '9. I will obtain separate approvals if activity parameters change', '10. I will immediately inform if NOC becomes invalid', '', 'Employee Signature: ________ Date: ____']
          },
          {
            title: 'Supervisor Recommendation',
            fields: ['Immediate Supervisor Comments:', '', 'Does this activity conflict with work responsibilities? Yes / No', '', 'Impact on department operations: None / Minor / Significant', '', 'Recommendation: Approve / Approve with conditions / Not recommended', '', 'Conditions (if any):', '', '', 'Supervisor Name: ________', 'Designation: ________', 'Signature: ________ Date: ____']
          },
          {
            title: 'Department Head Approval',
            fields: ['Comments:', '', '', 'Approved: Yes / No / With conditions', '', 'Conditions:', '', '', 'Department Head Name: ________', 'Signature: ________ Date: ____']
          },
          {
            title: 'HR Review',
            fields: ['HR Comments:', '', 'Policy compliance checked: Yes / No', 'Confidentiality risk: Low / Medium / High', 'Conflict of interest: None / Potential / Actual', '', 'HR Recommendation: Issue NOC / Reject / Refer to CHRO', '', 'HR Manager Name: ________', 'Signature: ________ Date: ____']
          },
          {
            title: 'Final Authorization',
            fields: ['(For CHRO or authorized signatory)', '', 'NOC Approved: Yes / No', 'Valid from: ________', 'Valid until: ________', '', 'Special conditions/remarks:', '', '', '', 'Authorized Signatory:', 'Name: ________', 'Designation: ________', 'Date: ________', 'Signature and Stamp: ________']
          }
        ],
        instructions: 'Submit at least 15 days before requirement. Clearly state purpose and duration. Attach supporting documents. NOC issued only after proper approvals. Separate NOC required for different purposes.',
        approvalRequired: 'Supervisor, Department Head, HR, CHRO (for sensitive matters)',
        processingTime: '7-15 business days'
      }
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
