// Complete By-Laws Content - 30 Sections
export const byLawsData = {
  preamble: {
    id: 'preamble',
    title: 'PREAMBLE',
    searchTerms: ['preamble', 'introduction', 'purpose', 'objectives'],
    content: `WHEREAS, Koyili Hospital (hereinafter referred to as "the Hospital") is committed to maintaining the highest standards of human resource management, employee welfare, and organizational excellence; and WHEREAS, it is deemed necessary to establish comprehensive policies and procedures governing employment relationships, rights, responsibilities, and conduct within the Hospital; NOW THEREFORE, the Board of Directors of Koyili Hospital hereby enacts these Human Resources By-Laws to be effective from the date specified herein.`
  },
  section1: {
    id: 'section1',
    number: 'SECTION I',
    title: 'DEFINITIONS AND INTERPRETATIONS',
    searchTerms: ['definitions', 'interpretations', 'terms', 'glossary'],
    subsections: [
      {
        number: '1.1',
        title: 'Definitions',
        content: 'For the purposes of these By-Laws, unless the context otherwise requires:',
        points: [
          '"Hospital" means Koyili Hospital, its branches, divisions, and all associated facilities.',
          '"Employee" means any person employed by the Hospital under a contract of service.',
          '"Management" means the Board of Directors, Medical Director, Administrator, and designated senior management.',
          '"Department" means any organizational unit within the Hospital structure.',
          '"Competent Authority" means the designated officer authorized to make decisions under these By-Laws.',
          '"Working Day" means any day other than Sunday or a public holiday as declared by the Hospital.',
          '"Continuous Service" means uninterrupted service with the Hospital, including authorized leaves.',
          '"Basic Salary" means the fixed monthly remuneration excluding allowances and benefits.'
        ]
      },
      {
        number: '1.2',
        title: 'Interpretation',
        content: 'In the interpretation of these By-Laws:',
        points: [
          'Words importing the singular include the plural and vice versa.',
          'Words importing the masculine gender include the feminine and neuter genders.',
          'Headings are for convenience only and do not affect interpretation.',
          'Reference to any statute includes amendments and subordinate legislation.',
          'In case of ambiguity, the Board of Directors decision shall be final.',
          'These By-Laws shall be read in conjunction with applicable laws and regulations.',
          'Specific provisions shall prevail over general provisions in case of conflict.'
        ]
      }
    ]
  },
  section2: {
    id: 'section2',
    number: 'SECTION II',
    title: 'CODE OF CONDUCT AND PROFESSIONAL ETHICS',
    searchTerms: ['code of conduct', 'ethics', 'professional standards', 'behavior'],
    subsections: [
      {
        number: '2.1',
        title: 'General Principles',
        content: 'All employees shall conduct themselves in a manner that upholds the dignity and reputation of the Hospital:',
        points: [
          'Maintain the highest standards of integrity, honesty, and ethical behavior in all professional dealings.',
          'Demonstrate respect, courtesy, and professionalism in all interactions with patients, colleagues, and stakeholders.',
          'Comply with all applicable laws, regulations, and Hospital policies without exception.',
          'Avoid conflicts of interest and disclose any potential conflicts immediately to management.',
          'Protect confidential information and respect patient privacy in accordance with applicable laws.',
          'Promote a culture of mutual respect, collaboration, and teamwork.',
          'Act in the best interests of the Hospital and its patients at all times.'
        ]
      },
      {
        number: '2.2',
        title: 'Professional Responsibilities',
        content: 'Every employee is expected to:',
        points: [
          'Perform duties diligently and competently as per established standards and protocols.',
          'Maintain professional competence through continuous learning and skill development.',
          'Report to duty punctually and maintain regular attendance as per assigned schedule.',
          'Cooperate fully with colleagues and other departments for seamless operations.',
          'Use Hospital resources responsibly and only for authorized purposes.',
          'Maintain accurate records and documentation as required by their role.',
          'Report any unsafe conditions or practices to appropriate authorities promptly.'
        ]
      },
      {
        number: '2.3',
        title: 'Prohibited Conduct',
        content: 'The following conduct is strictly prohibited and may result in disciplinary action:',
        points: [
          'Any form of harassment, discrimination, or intimidation based on race, religion, gender, age, or disability.',
          'Theft, fraud, or misappropriation of Hospital property, funds, or resources.',
          'Unauthorized disclosure of confidential information or patient data.',
          'Acceptance of bribes, kickbacks, or improper gifts from patients, vendors, or third parties.',
          'Reporting to duty under the influence of alcohol or drugs.',
          'Creating or maintaining conflicts of interest with Hospital duties.',
          'Insubordination or willful refusal to follow lawful and reasonable instructions.',
          'Falsification of records, documents, or information.',
          'Engaging in activities that damage the Hospital\'s reputation or interests.',
          'Use of Hospital resources for personal gain or unauthorized purposes.'
        ]
      }
    ]
  },
  section3: {
    id: 'section3',
    number: 'SECTION III',
    title: 'EMPLOYMENT TERMS AND CONDITIONS',
    searchTerms: ['employment', 'terms', 'conditions', 'working hours', 'compensation', 'appointment', 'categories'],
    subsections: [
      {
        number: '3.1',
        title: 'Employment Categories and Classifications',
        content: 'The Hospital recognizes and maintains the following distinct categories of employment, each with specific terms, conditions, and entitlements. Classification is determined at the time of appointment and may be revised based on organizational requirements and employee performance:',
        points: [
          'Permanent Employees: Individuals who have successfully completed their probation period and have been confirmed in writing by the Hospital. Permanent employees are entitled to all benefits, privileges, and protections under these By-Laws and applicable employment laws. They are considered as regular, full-time members of the Hospital workforce.',
          'Probationary Employees: New hires undergoing an initial assessment period, typically lasting six months from the date of joining. During probation, employees are evaluated on their technical competence, professional conduct, adaptability, and overall suitability for the role. Probationers are entitled to basic benefits but may have restricted access to certain privileges until confirmation.',
          'Contractual Employees: Personnel engaged for specific projects, assignments, or fixed durations as per written contracts. Contract terms specify the scope of work, duration, compensation, and applicable terms. Contractual employees may be renewed based on performance and organizational needs, but renewal does not automatically confer permanent status.',
          'Temporary Employees: Staff engaged for short-term assignments, seasonal requirements, leave replacements, or surge capacity needs. Temporary employment is strictly time-bound and does not create expectancy of permanent employment. Terms and benefits are specified in the temporary appointment letter.',
          'Part-Time Employees: Individuals working less than the standard full-time hours (typically less than 40 hours per week). Part-time employees receive pro-rata compensation and benefits based on actual hours worked. They are expected to maintain the same standards of performance and conduct as full-time employees.',
          'Consultants and Advisors: External experts engaged on a retainer or project basis to provide specialized professional services, advice, or expertise not available within the Hospital. Consultants work under consulting agreements rather than employment contracts and are typically not entitled to employee benefits.',
          'Visiting Medical Staff: Medical practitioners granted privileges to practice at the Hospital while maintaining primary employment elsewhere. Terms of engagement are governed by credentialing and privileging policies in addition to these By-Laws.',
          'Trainees and Interns: Medical graduates, nursing students, or other professionals undergoing training programs at the Hospital. Trainees receive stipends or training allowances as per applicable regulations and Hospital policy.',
          'Casual Workers: Daily wage workers engaged for specific tasks or manual work on a day-to-day basis without any commitment for continued employment beyond the immediate assignment.',
          'Employees on Deputation: Personnel seconded from other organizations or government agencies for specified periods under mutual agreements. Terms of deputation are governed by the deputation orders and inter-organizational agreements.'
        ]
      },
      {
        number: '3.2',
        title: 'Working Hours, Schedules, and Attendance',
        content: 'The Hospital operates 24x7 to provide uninterrupted healthcare services. Working hours and attendance requirements vary by department, role, and operational needs while ensuring compliance with labor laws and employee welfare:',
        points: [
          'Standard Working Hours: For administrative and non-shift positions, normal working hours are 8 hours per day (exclusive of lunch break) and 48 hours per week, typically from 9:00 AM to 6:00 PM, Monday through Saturday, with Sundays and declared holidays as weekly off days. Actual timings may vary by department.',
          'Shift Work: Clinical departments, emergency services, nursing, housekeeping, security, and other essential services operate on shift basis. Shift patterns include morning shift (6 AM to 2 PM), afternoon shift (2 PM to 10 PM), night shift (10 PM to 6 AM), or 12-hour shifts as per rostering. Advance shift schedules are communicated to employees.',
          'Flexible Working Arrangements: Subject to managerial approval and operational feasibility, eligible employees may be permitted flexible work hours, compressed work weeks, or work-from-home arrangements for specific roles and circumstances, particularly for administrative and support functions.',
          'Attendance Recording: All employees must record their attendance using the Hospital's biometric attendance system, card-based system, or other approved methods at the start and end of each shift. Manual attendance entries require supervisor approval and HR verification.',
          'Punctuality Requirements: Employees are expected to report to duty punctually at their assigned time. Late arrival (beyond 15 minutes of scheduled start time without prior intimation) is considered tardiness and may result in loss of pay for the period of absence and disciplinary action for repeated instances.',
          'Break and Meal Periods: Employees are entitled to meal breaks and rest periods as per applicable labor laws. Typically, a 30 to 60-minute unpaid lunch break is provided for 8-hour shifts. Additional short breaks may be permitted at supervisor discretion without deduction from working hours.',
          'Unauthorized Absence: Absence from duty without prior approval or without intimation and valid reasons is considered unauthorized absence and will result in loss of pay for the absent period. Three consecutive days of unauthorized absence may be treated as voluntary abandonment of employment.',
          'Overtime Work: Work performed beyond standard working hours requires prior written approval from the immediate supervisor and department head. Overtime is compensated either through additional payment at prescribed rates (typically 1.5 times regular hourly wage) or through compensatory time off, as per Hospital policy and labor law requirements.',
          'On-Call Duty: Certain employees, particularly medical and technical staff, may be required to be on-call during off-duty hours to respond to emergencies. On-call schedules, compensation, and response time expectations are defined by departmental policies.',
          'Weekend and Holiday Work: Employees in essential services work on weekends and holidays as per roster. Those required to work on declared holidays receive holiday pay or compensatory off as per entitlement.',
          'Attendance Regularization: Minor discrepancies in attendance records due to system errors, forgotten punches, or valid reasons may be regularized through a formal attendance regularization request approved by the supervisor and HR. Frequent regularization requests are viewed as non-compliance.',
          'Remote Work Monitoring: Employees approved for remote work must maintain regular communication, meet deliverables, and be available during working hours as per remote work policy. Attendance is marked based on login to systems and work output.',
          'Timesheet Submission: Employees whose roles require timesheet-based tracking (project staff, consultants) must submit accurate timesheets weekly or bi-weekly for payroll processing and project costing.'
        ]
      },
      {
        number: '3.3',
        title: 'Compensation Structure and Components',
        content: 'The Hospital maintains a comprehensive, competitive, and equitable compensation structure designed to attract, retain, and motivate talented professionals. Compensation is determined based on role, qualifications, experience, market benchmarks, and performance:',
        points: [
          'Basic Salary: The fixed component of monthly remuneration forming the foundation for calculation of other allowances and statutory contributions. Basic salary is determined based on grade, role, qualifications, and experience, and is subject to annual review and revision based on performance and market conditions.',
          'House Rent Allowance (HRA): A monthly allowance to assist employees with accommodation expenses. HRA is typically 40% of basic salary for employees in metro cities, 30% in non-metro cities, or as per applicable income tax regulations. Employees provided with Hospital accommodation receive reduced or nil HRA.',
          'Dearness Allowance (DA): A cost-of-living adjustment allowance linked to inflation indices, typically 20% of basic salary or as revised periodically by management. DA helps employees cope with price increases in essential commodities.',
          'Transport Allowance: Monthly reimbursement or allowance for commuting expenses, typically ranging from INR 1,600 to INR 3,200 per month based on grade, or as per actual expenses for eligible roles. Hospital-provided transport reduces or eliminates this allowance.',
          'Medical Allowance: A monthly allowance or reimbursement facility for medical expenses incurred by the employee and dependent family members. The Hospital also provides group health insurance coverage and medical benefits as detailed in Section XII.',
          'Special Allowances: Role-specific or location-specific allowances such as shift allowance for night shifts, emergency duty allowance, critical skill allowance, hazard allowance for high-risk roles, on-call allowance, or station allowance for remote postings.',
          'Performance-Linked Incentives: Variable pay component based on individual performance against set objectives (KPIs), departmental performance, and overall Hospital performance. Incentives are typically paid quarterly or annually and may range from 10% to 30% of annual compensation for eligible roles.',
          'Provident Fund (PF): Statutory retirement savings under the Employees Provident Fund Organization (EPFO) scheme. Both employee and employer contribute 12% of basic salary (or such percentage as notified) monthly. Employees receive a Universal Account Number (UAN) for tracking and portability.',
          'Gratuity: A lump sum retirement benefit payable upon completion of 5 years of continuous service, calculated as 15 days of last drawn salary for each completed year of service, as per the Payment of Gratuity Act, 1972. Maximum gratuity is capped at INR 20 lakhs or as per applicable law.',
          'Employee State Insurance (ESI): For employees earning below the wage ceiling as per ESI Act, contributions are made to ESI for medical and income security benefits. The Hospital contributes 4.75% and employees contribute 1.75% of wages.',
          'Professional Tax: Deducted as per applicable state professional tax regulations and remitted to state government authorities.',
          'Income Tax Deduction at Source (TDS): Tax deducted from salary income as per Income Tax Act provisions based on employee declarations, investments, and applicable exemptions.',
          'Bonus: Annual bonus as per Payment of Bonus Act or Hospital bonus policy, typically ranging from 8.33% to 20% of annual earnings, payable during festive season or financial year-end.',
          'Allowances for Overtime, Holiday Work, and Night Shifts: Additional compensation for work beyond normal hours as specified in relevant sections.',
          'Leave Encashment: Monetization of accumulated earned leave subject to policy terms, either annually or at the time of separation.',
          'Relocation and Transfer Assistance: Financial assistance for employees transferred to other locations, covering transportation, packing, and temporary accommodation costs.',
          'Educational Assistance: Reimbursement or sponsorship for job-related courses, certifications, or professional development programs as per learning and development policy.',
          'Other Benefits: Cafeteria facilities, employee assistance programs, staff discount on medical services, group personal accident insurance, life insurance, uniforms or dress allowance where applicable.'
        ]
      },
      {
        number: '3.4',
        title: 'Appointment, Offer Letter, and Joining Formalities',
        content: 'All appointments at Koyili Hospital follow a structured process ensuring transparency, documentation, and compliance:',
        points: [
          'Offer Letter: Selected candidates receive a formal offer letter specifying the position, reporting relationship, location, compensation, joining date, probation terms, and key employment conditions. The offer is valid for the period specified in the letter (typically 15 days) and is subject to candidate acceptance.',
          'Pre-Joining Formalities: Candidates must submit required documents including educational certificates, experience letters, identity and address proofs, medical fitness certificate, police verification (if applicable), resignation acceptance from previous employer, and any other documents as specified.',
          'Background Verification: The Hospital conducts background checks including education verification, employment verification, reference checks, criminal record checks, and identity verification. Appointment is subject to satisfactory background verification.',
          'Medical Fitness: All employees must undergo pre-employment medical examination at designated Hospital facilities or approved diagnostic centers. The examination includes general health assessment, vision and hearing tests, and role-specific health checks (e.g., hepatitis B immunity for clinical staff).',
          'Appointment Letter: Upon successful completion of joining formalities and verification, the Hospital issues a formal appointment letter that serves as the official employment contract. The appointment letter details designation, grade, department, reporting manager, compensation, benefits, probation terms, working hours, location, and references to applicable policies.',
          'Probation Period: New employees serve a probation period of six months from the date of joining to assess their suitability, competence, performance, conduct, and cultural fit. During probation, performance is reviewed periodically by the supervisor.',
          'Extension of Probation: If performance during probation is not satisfactory but shows potential, the probation period may be extended for up to three additional months with written notice to the employee specifying areas requiring improvement.',
          'Confirmation Process: Upon successful completion of probation, employees are confirmed in writing by the HR Department based on supervisor recommendation. Confirmation entitles employees to full benefits and enhanced job security.',
          'Induction and Orientation: All new employees undergo a structured induction program covering Hospital overview, organizational structure, policies, procedures, safety, compliance, systems access, role introduction, and team integration.',
          'Identification and Access: Employees are issued Hospital ID cards, access cards, email accounts, system login credentials, and other necessary tools and resources to perform their duties.',
          'Policy Acknowledgment: Employees must read and acknowledge understanding of these By-Laws, code of conduct, data protection policy, confidentiality obligations, and other key policies within the first week of employment.',
          'Probationary Performance Reviews: Probationers receive formal performance feedback at three-month and six-month intervals, documenting strengths, areas for improvement, and progress toward confirmation.',
          'Termination During Probation: Either party may terminate the employment during probation with shorter notice (typically one month or as per appointment letter). Termination during probation does not require extensive justification but should be based on performance, conduct, or suitability considerations.',
          'Confirmation Eligibility: Confirmation requires satisfactory performance ratings, adherence to policies, acceptable attendance record, completion of mandatory training, and positive behavioral feedback.'
        ]
      },
      {
        number: '3.5',
        title: 'Job Description and Duties',
        content: 'Each position at the Hospital has a defined job description outlining responsibilities, accountabilities, reporting relationships, and performance expectations:',
        points: [
          'Role Clarity: Job descriptions provide clarity on the scope of work, key responsibilities, decision-making authority, and expected outcomes for each position.',
          'Dynamic Nature: Job descriptions may evolve based on organizational changes, technological advancements, or business requirements. Employees are expected to adapt to reasonable changes in duties.',
          'Performance Standards: Job descriptions form the basis for performance evaluation, goal setting, and career development discussions.',
          'Additional Duties: Employees may be assigned additional or temporary duties beyond their primary role based on organizational needs, provided such duties are reasonable and within their competence.',
          'Duty of Care: All employees have a duty to perform their work with reasonable care, skill, and diligence, maintaining professional standards and quality benchmarks.',
          'Cross-Functional Collaboration: Employees are expected to collaborate across departments, participate in institutional initiatives, and contribute to organizational goals beyond their immediate responsibilities.'
        ]
      },
      {
        number: '3.6',
        title: 'Modification of Employment Terms',
        content: 'The Hospital reserves the right to modify employment terms and conditions based on business requirements, legal changes, or other justifiable reasons:',
        points: [
          'Salary Revisions: Compensation is reviewed annually based on performance, inflation, market benchmarking, and organizational performance. Salary revisions are communicated in writing and typically effective from January each year.',
          'Role Changes: Employees may be promoted, transferred, reassigned, or their roles may be restructured based on organizational needs, performance, or career development considerations.',
          'Notification of Changes: Material changes to employment terms are communicated to affected employees in writing with advance notice (typically 30 to 90 days depending on the nature of change).',
          'Employee Consent: Changes requiring significant alterations to compensation, location, or role may require employee consent. However, reasonable operational changes within the scope of employment do not require explicit consent.',
          'Grievance Rights: Employees aggrieved by changes to employment terms may utilize the grievance redressal mechanism outlined in Section VII.',
          'Continued Employment: Continued employment after notification of changes is deemed acceptance unless the employee formally disputes the changes through proper channels within specified timelines.'
        ]
      }
    ]
  },
  section4: {
    id: 'section4',
    number: 'SECTION IV',
    title: 'LEAVE POLICY',
    searchTerms: ['leave', 'vacation', 'absence', 'time off', 'holidays', 'annual leave', 'sick leave', 'maternity'],
    subsections: [
      {
        number: '4.1',
        title: 'Types of Leave - Comprehensive Framework',
        content: 'Koyili Hospital provides a comprehensive leave framework recognizing employees need for rest, personal matters, health, family responsibilities, and work-life balance. Leave entitlements vary by employment category and tenure:',
        points: [
          'Casual Leave (CL): 12 days per calendar year for short-term personal matters, family events, urgent situations, or rest. CL cannot be combined with any other leave. Maximum 3 consecutive days can be availed at one time unless in exceptional circumstances with approval. Un-availed CL lapses at year-end and cannot be carried forward or encashed.',
          'Sick Leave (SL): 10 days per calendar year for illness, injury, medical treatment, or recovery. Medical certificate from a registered medical practitioner is mandatory for sick leave exceeding 3 consecutive days. Hospital medical officer may examine the employee upon return from extended sick leave. Un-availed SL can be accumulated up to 90 days during service.',
          'Earned Leave/Annual Leave (EL): 20 days per calendar year for vacation, rest, and personal pursuits. EL accrues monthly at 1.67 days per month. EL can be accumulated up to 240 days (approximately 10 months) during service. Accumulated EL can be encashed subject to conditions. Minimum 7 days prior notice required except in emergencies.',
          'Maternity Leave: Female employees are entitled to 26 weeks of maternity leave as per the Maternity Benefit Act, 1961, as amended. For the first two children, 26 weeks leave includes pre-natal and post-natal periods. For third and subsequent children, 12 weeks. Adoptive mothers and commissioning mothers (surrogacy) are entitled to 12 weeks leave from the date of handing over the child. Miscarriage or medical termination of pregnancy entitles 6 weeks leave. Employees must provide medical certificate and advance intimation.',
          'Paternity Leave: Male employees are entitled to 7 days of paternity leave to be availed within 6 months from the date of childbirth or adoption. Paternity leave helps fathers support their partners and bond with newborns. Documentary proof may be required.',
          'Compensatory Off (Comp Off): Employees required to work beyond normal working hours, on weekly offs, or public holidays may be granted compensatory time off equivalent to extra hours worked. Comp off must be claimed within one month and availed within 3 months of earning, failing which it lapses. Supervisor approval is required.',
          'Leave Without Pay (LWP): Employees may request unpaid leave for personal reasons beyond available paid leave. LWP requires approval from department head and HR. LWP periods are not counted as continuous service for benefit calculations. Prolonged LWP may affect confirmation, increments, or benefits.',
          'Study Leave: Employees pursuing job-related higher education, certifications, or professional courses with Hospital approval may be granted study leave up to 30 days per year. Study leave may be paid or unpaid depending on course relevance and sponsorship terms. Bond agreements may apply.',
          'Bereavement Leave: Up to 5 days paid leave for the death of immediate family members (spouse, children, parents, siblings, in-laws, grandparents). Documentary proof such as death certificate is required. Additional leave may be granted on compassionate grounds.',
          'Special Leave: Additional leave may be granted for exceptional circumstances such as serious illness requiring prolonged treatment, accidents, natural calamities affecting employee/family, or other humanitarian grounds at management discretion.',
          'Sabbatical Leave: Long-serving employees (typically 5+ years) may request sabbatical leave for personal development, research, travel, or family commitments. Sabbaticals are unpaid, subject to operational feasibility, and require advance approval. Maximum duration typically 3-6 months.',
          'Public Holidays: The Hospital observes national holidays (Republic Day, Independence Day, Gandhi Jayanti), religious festivals (Diwali, Eid, Christmas, etc.), and state-specific holidays as per applicable laws and management decision. Essential services staff working on public holidays receive compensatory off or holiday pay.',
          'Quarantine Leave: In case of infectious disease exposure or outbreak situations, employees may be placed on quarantine leave as per medical advice and government directives. Quarantine leave is generally paid if work-related exposure.',
          'Jury Duty and Civic Obligations: Leave for serving as juror, witness in court proceedings, voting, blood donation, or other civic duties. Appropriate documentation required. Such leave is typically paid.'
        ]
      },
      {
        number: '4.2',
        title: 'Leave Application and Approval Process',
        content: 'Structured procedures ensure systematic leave management while maintaining operational continuity:',
        points: [
          'Advance Application: Leave applications must be submitted through the Hospital Leave Management System (HLMS) or designated forms with appropriate advance notice - Casual Leave: 1 day (emergencies exempted), Sick Leave: As soon as possible (same day for emergencies), Annual Leave: 7 days minimum, extended leave 15+ days advance notice. Emergency/unplanned sick leave requires immediate telephonic/message intimation to supervisor.',
          'Approval Workflow: Leave requests route through immediate supervisor for approval, then to HOD for leaves exceeding 7 days, and HR for final processing. Approvals are subject to operational needs, manpower availability, and leave balance verification.',
          'Documentation Requirements: Sick leave exceeding 3 days requires medical certificate. Maternity leave requires medical certificate from gynecologist. Other leaves may require supporting documents (marriage invitation, death certificate, court summons, etc.).',
          'Leave Scheduling: Annual leave should be planned and communicated well in advance. Departments maintain leave rosters ensuring adequate staffing. Peak periods, audit times, or critical project phases may have leave restrictions.',
          'Emergency Leave Procedures: Genuine emergencies (sudden illness, family crisis, accidents) allow relaxed procedural requirements, but employees must inform supervisor immediately via phone/SMS and submit formal application at the earliest.',
          'Leave Balance Verification: Employees can check leave balances through HRMS portal. HR maintains accurate leave records. Leave applications are system-validated against available balance before approval.',
          'Denial and Rescheduling: Management reserves right to deny or reschedule leave due to operational exigencies. Affected employees are informed with reasons and alternative dates are mutually agreed upon.',
          'Cancellation of Approved Leave: Approved leave may be cancelled or curtailed in genuine emergency situations requiring employee presence. Reasonable notice and assistance for travel cancellations are provided.',
          'Half-Day Leave: Casual and sick leave can be availed in half-day units subject to supervisor approval and operational feasibility.',
          'Sandwich Leave: Availing leave immediately before and after public holidays or weekly offs may be subject to additional scrutiny and requires proper justification and approval.',
          'Leave During Notice Period: Employees serving notice period may be required to exhaust accumulated leave or forfeit leave entitlements as per resignation terms and operational requirements.'
        ]
      },
      {
        number: '4.3',
        title: 'Leave Accumulation and Carry Forward',
        content: 'Leave accumulation rules balance employee interests with organizational operational needs:',
        points: [
          'Earned Leave Accumulation: Unused earned leave accumulates year-on-year up to maximum 240 days. Employees are encouraged to take regular leave for health and well-being while maintaining operational continuity.',
          'Sick Leave Accumulation: Unused sick leave accumulates up to 90 days. Accumulated sick leave is available for serious illness or hospitalization requiring extended absence.',
          'Casual Leave Non-Accumulation: Casual leave cannot be carried forward to the next year. Unused CL lapses on December 31st annually.',
          'Lapse Provisions: Management may direct employees to avail leave if accumulation reaches maximum limits or if prolonged absence from leave is affecting health/performance.',
          'Transfer of Accumulated Leave: Accumulated leave balance transfers when employee moves between departments within the Hospital. Upon separation, only earned leave is eligible for encashment.'
        ]
      },
      {
        number: '4.4',
        title: 'Leave Encashment Provisions',
        content: 'Monetization of accumulated earned leave under specified conditions:',
        points: [
          'During Service Encashment: Employees may encash accumulated earned leave once per year, subject to maintaining minimum balance of 15 days. Maximum encashable leave per year is 50% of accumulated balance or 15 days, whichever is lower.',
          'Encashment Rate: Leave encashment is calculated at current basic salary rate per day basis (Basic Salary / 30 days).',
          'Application Process: Leave encashment requests must be submitted to HR during open windows (typically during June and December). Encashment is processed with salary for the month.',
          'Separation Encashment: Upon resignation, retirement, termination, or death during service, accumulated earned leave balance is fully encashed and paid to the employee or legal heirs. Maximum encashment at separation is 240 days.',
          'Taxation: Leave encashment is subject to income tax deduction as per applicable IT laws and regulations.',
          'Encashment During LWP: Leave cannot be encashed if employee is on leave without pay status.',
          'Non-Encashable Leaves: Casual leave and sick leave cannot be encashed except in case of retirement or death where accumulated sick leave may be partially encashed as per compassionate grounds at management discretion.'
        ]
      },
      {
        number: '4.5',
        title: 'Medical and Hospitalization Leave',
        content: 'Extended provisions for serious illness, major surgeries, or hospitalization:',
        points: [
          'Extended Sick Leave: For serious illness or major surgery requiring extended absence, employees can combine accumulated sick leave and earned leave for continuous medical leave up to 90 days.',
          'Medical Board Review: Leave for critical illness exceeding 90 days requires Medical Board assessment. The Board examines medical reports, prognosis, and expected recovery timeline before recommending leave extension.',
          'Recovery Period: Post-hospitalization recovery leave is granted based on medical recommendation and fitness-to-resume certification.',
          'Partial Sick Leave Pay: After exhaustion of paid sick leave, employees on extended medical leave may receive partial pay (typically 50% of basic salary) for humanitarian considerations.',
          'Return to Work: Employees returning from extended medical leave must submit fitness certificate from treating physician and may undergo Hospital medical examination before resuming duties.',
          'Work Restrictions Post-Illness: Employees may be assigned modified duties or reduced hours temporarily based on medical recommendations during recovery phase.',
          'Critical Illness: For life-threatening illnesses requiring intensive treatment (cancer, organ failure, major accidents), Hospital may extend compassionate leave beyond normal entitlements.'
        ]
      },
      {
        number: '4.6',
        title: 'Leave Records and Compliance',
        content: 'Maintaining accurate leave records ensures compliance and transparency:',
        points: [
          'Leave Register: HR maintains comprehensive leave registers recording all leave applications, approvals, denials, and balances for each employee.',
          'Digital Records: Leave Management System provides digital trail of all leave transactions, approvals, and communications.',
          'Audit Trail: Leave records are subject to internal audit and statutory compliance verification.',
          'Employee Access: Employees can view their leave history, pending applications, and current balances through self-service portal.',
          'Confidentiality: Medical reasons for sick leave are treated confidentially and access is restricted to authorized HR personnel.',
          'Statutory Compliance: Leave policies comply with Shops and Establishments Act, Factories Act (where applicable), Maternity Benefit Act, and other relevant labor legislations.',
          'Record Retention: Leave records are maintained for the duration of employment plus 7 years post-separation as per document retention policy.'
        ]
      }
    ]
  },
  section5: {
    id: 'section5',
    number: 'SECTION V',
    title: 'PERFORMANCE MANAGEMENT',
    searchTerms: ['performance', 'appraisal', 'evaluation', 'review', 'assessment'],
    subsections: [
      {
        number: '5.1',
        title: 'Performance Appraisal System',
        content: 'The Hospital maintains a comprehensive performance management system:',
        points: [
          'Annual performance reviews conducted for all employees.',
          'Evaluation based on job-specific KPIs, competencies, and behavioral attributes.',
          'Self-appraisal, supervisor assessment, and peer feedback components.',
          'Mid-year reviews to track progress and provide feedback.',
          'Performance ratings used for confirmation, increments, promotions, and training needs.',
          'Employees have the right to discuss and understand their performance evaluation.',
          'Appeals process available for employees who disagree with their assessment.'
        ]
      },
      {
        number: '5.2',
        title: 'Performance Improvement Plans (PIP)',
        content: 'For employees requiring performance improvement:',
        points: [
          'Identify specific performance gaps and areas requiring improvement.',
          'Establish SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals.',
          'Provide necessary support, training, resources, and mentorship.',
          'Regular monitoring and feedback sessions with supervisor.',
          'Specify review period (typically 3-6 months) and consequences of non-improvement.',
          'Fair opportunity for improvement before any adverse action.',
          'Documentation of all PIP meetings and progress.'
        ]
      },
      {
        number: '5.3',
        title: 'Recognition and Rewards',
        content: 'Outstanding performance is recognized through:',
        points: [
          'Performance-based bonuses and incentives.',
          'Employee of the Month/Quarter/Year awards.',
          'Accelerated career advancement opportunities.',
          'Public recognition and appreciation.',
          'Additional training and development opportunities.'
        ]
      }
    ]
  },
  section6: {
    id: 'section6',
    number: 'SECTION VI',
    title: 'DISCIPLINARY PROCEDURES',
    searchTerms: ['disciplinary', 'misconduct', 'violations', 'penalties', 'punishment'],
    subsections: [
      {
        number: '6.1',
        title: 'Grounds for Disciplinary Action',
        content: 'Disciplinary action may be initiated for:',
        points: [
          'Violation of these By-Laws or any Hospital policy.',
          'Misconduct, negligence, or dereliction of duty.',
          'Breach of professional standards or code of conduct.',
          'Unauthorized absence or persistent tardiness without valid reason.',
          'Insubordination or refusal to comply with lawful instructions.',
          'Theft, fraud, or misappropriation of Hospital property.',
          'Harassment, discrimination, or creating hostile work environment.',
          'Breach of confidentiality or data protection policies.'
        ]
      },
      {
        number: '6.2',
        title: 'Disciplinary Measures',
        content: 'Depending on the severity of misconduct, measures include:',
        points: [
          'Verbal Warning: For minor first-time infractions.',
          'Written Warning: For repeated or more serious violations.',
          'Suspension: Temporary suspension with or without pay pending investigation.',
          'Demotion: Reduction in rank, responsibilities, or compensation.',
          'Termination: Dismissal from service with or without notice period.',
          'Recovery of damages: For financial losses caused to the Hospital.',
          'Progressive discipline applied except for gross misconduct.'
        ]
      },
      {
        number: '6.3',
        title: 'Principles of Natural Justice',
        content: 'All disciplinary proceedings shall adhere to:',
        points: [
          'Employee shall be informed in writing of the allegations and charges.',
          'Reasonable opportunity to respond and present their case.',
          'Employee may be represented by a colleague during proceedings.',
          'Decision based on facts, evidence, and fair assessment.',
          'Right to appeal against disciplinary action to higher authority.',
          'Documentation of all proceedings maintained confidentially.',
          'Timely completion of investigations and proceedings.'
        ]
      }
    ]
  },
  section7: {
    id: 'section7',
    number: 'SECTION VII',
    title: 'GRIEVANCE REDRESSAL MECHANISM',
    searchTerms: ['grievance', 'complaints', 'redressal', 'dispute resolution'],
    subsections: [
      {
        number: '7.1',
        title: 'Grievance Redressal Process',
        content: 'The Hospital maintains a fair grievance redressal mechanism:',
        points: [
          'Submit grievances in writing to HR Department or designated Grievance Officer.',
          'Acknowledgment of receipt within 3 working days.',
          'Investigation and resolution within 30 days of receipt.',
          'Employees informed of outcome and actions taken.',
          'Fair, transparent, and unbiased process maintained throughout.',
          'Confidentiality maintained to protect employee privacy.',
          'Multiple levels of escalation available if initial resolution unsatisfactory.'
        ]
      },
      {
        number: '7.2',
        title: 'Types of Grievances',
        content: 'Employees may raise grievances regarding:',
        points: [
          'Terms and conditions of employment.',
          'Work environment and workplace relations.',
          'Performance evaluation and career progression.',
          'Compensation and benefits.',
          'Disciplinary actions.',
          'Harassment or discrimination.',
          'Any other work-related concerns.'
        ]
      },
      {
        number: '7.3',
        title: 'Protection Against Retaliation',
        content: 'The Hospital ensures:',
        points: [
          'No retaliation against employees filing grievances in good faith.',
          'Protection for employees reporting violations or misconduct.',
          'Safe environment for cooperating in investigations.',
          'Right to exercise rights under these By-Laws protected.',
          'Any retaliation treated as serious misconduct.'
        ]
      }
    ]
  },
  section8: {
    id: 'section8',
    number: 'SECTION VIII',
    title: 'SEPARATION FROM EMPLOYMENT',
    searchTerms: ['separation', 'resignation', 'retirement', 'termination', 'exit'],
    subsections: [
      {
        number: '8.1',
        title: 'Resignation',
        content: 'Voluntary resignation procedures:',
        points: [
          'Submit written resignation to immediate supervisor and HR Department.',
          'Notice period as per appointment letter, typically 30 days minimum.',
          'Complete all exit formalities including handover of responsibilities.',
          'Obtain clearance from all departments including accounts, IT, and library.',
          'Return all Hospital property including ID card, keys, equipment, and documents.',
          'Final settlement processed after complete clearance.',
          'Exit interview may be conducted to gather feedback.'
        ]
      },
      {
        number: '8.2',
        title: 'Retirement',
        content: 'Retirement procedures and benefits:',
        points: [
          'Retirement age: 60 years as per Hospital policy.',
          'Advance notice of retirement procedures provided.',
          'Complete exit formalities and knowledge transfer.',
          'Receive all statutory and contractual benefits including gratuity, PF, and leave encashment.',
          'Extension of service possible at Hospital discretion on case-by-case basis.',
          'Retirement benefits processed within 30 days of retirement date.'
        ]
      },
      {
        number: '8.3',
        title: 'Termination by Hospital',
        content: 'The Hospital may terminate employment in case of:',
        points: [
          'Gross misconduct or serious violations.',
          'Continued unsatisfactory performance despite PIP.',
          'Redundancy or organizational restructuring.',
          'Termination during probation period.',
          'Notice period or payment in lieu as per appointment terms.',
          'Immediate termination for gross misconduct without notice.'
        ]
      }
    ]
  },
  section9: {
    id: 'section9',
    number: 'SECTION IX',
    title: 'PROBATION AND CONFIRMATION',
    searchTerms: ['probation', 'confirmation', 'trial period'],
    subsections: [
      {
        number: '9.1',
        title: 'Probation Period',
        content: 'All new employees undergo probation:',
        points: [
          'Standard probation period: 6 months from date of joining.',
          'Extension possible for maximum 3 additional months if required.',
          'Performance assessed against predefined objectives and competencies.',
          'Regular feedback provided during probation period.',
          'Either party may terminate with shorter notice during probation.'
        ]
      },
      {
        number: '9.2',
        title: 'Confirmation Process',
        content: 'Confirmation subject to:',
        points: [
          'Satisfactory performance throughout probation period.',
          'Good conduct and adherence to Hospital policies.',
          'Recommendation by immediate supervisor.',
          'Approval by HR Department and Competent Authority.',
          'Confirmation communicated in writing.',
          'Confirmed employees entitled to all benefits as per policy.'
        ]
      }
    ]
  },
  section10: {
    id: 'section10',
    number: 'SECTION X',
    title: 'WORKING HOURS, SHIFTS, AND OVERTIME',
    searchTerms: ['working hours', 'shifts', 'overtime', 'schedule', 'roster'],
    subsections: [
      {
        number: '10.1',
        title: 'Standard Working Hours',
        content: 'Working hours and shift arrangements:',
        points: [
          'Standard working day: 8 hours excluding breaks.',
          'Standard working week: 48 hours for full-time employees.',
          'Break time: As per shift schedule, not counted as working hours.',
          'Shift timings determined by operational requirements.',
          'Advance notice provided for shift changes where possible.'
        ]
      },
      {
        number: '10.2',
        title: 'Overtime Policy',
        content: 'Overtime work provisions:',
        points: [
          'Overtime requires prior approval from supervisor.',
          'Overtime calculated beyond standard working hours.',
          'Overtime compensation: 1.5 times regular hourly rate.',
          'Compensatory off may be granted in lieu of overtime payment.',
          'Overtime records maintained for compliance purposes.',
          'Emergency overtime may be required in critical situations.'
        ]
      },
      {
        number: '10.3',
        title: 'Shift Allowances',
        content: 'Employees working in shifts may be eligible for:',
        points: [
          'Night shift allowance for shifts between 10 PM and 6 AM.',
          'Shift rotation as per departmental requirements.',
          'Adequate rest period between consecutive shifts.'
        ]
      }
    ]
  },
  section11: {
    id: 'section11',
    number: 'SECTION XI',
    title: 'COMPENSATION STRUCTURE AND SALARY ADMINISTRATION',
    searchTerms: ['compensation', 'salary', 'wages', 'pay', 'remuneration'],
    subsections: [
      {
        number: '11.1',
        title: 'Salary Components',
        content: 'Salary structure comprises:',
        points: [
          'Basic Salary: Fixed component forming base for other calculations.',
          'House Rent Allowance (HRA): 40% of basic salary.',
          'Dearness Allowance (DA): 20% of basic salary.',
          'Transport Allowance: As per grade and policy.',
          'Medical Allowance: For medical expenses.',
          'Special Allowances: Role-specific or location-specific allowances.',
          'Performance Incentives: Based on individual and organizational performance.'
        ]
      },
      {
        number: '11.2',
        title: 'Salary Payment',
        content: 'Salary payment procedures:',
        points: [
          'Salary paid monthly through bank transfer by last working day.',
          'Detailed salary slip provided showing all components and deductions.',
          'Deductions include PF, TDS, professional tax, and loan recoveries.',
          'Advance salary may be provided in exceptional circumstances.',
          'Queries regarding salary addressed by accounts department promptly.'
        ]
      },
      {
        number: '11.3',
        title: 'Increments and Revisions',
        content: 'Salary increments based on:',
        points: [
          'Annual performance appraisal ratings.',
          'Market benchmarking and cost of living adjustments.',
          'Promotions and role changes.',
          'Organizational performance and financial health.',
          'Increments typically effective from January each year.'
        ]
      }
    ]
  },
  section12: {
    id: 'section12',
    number: 'SECTION XII',
    title: 'MEDICAL BENEFITS AND HEALTHCARE',
    searchTerms: ['medical', 'healthcare', 'health benefits', 'insurance'],
    subsections: [
      {
        number: '12.1',
        title: 'Medical Benefits',
        content: 'The Hospital provides comprehensive medical benefits:',
        points: [
          'Free or subsidized treatment at Hospital facilities for employees.',
          'Coverage for spouse and dependent children.',
          'Preventive health check-ups annually.',
          'Emergency medical care available 24/7.',
          'Reimbursement for external medical expenses as per policy.',
          'Mental health and wellness support programs.'
        ]
      },
      {
        number: '12.2',
        title: 'Group Health Insurance',
        content: 'Group insurance coverage includes:',
        points: [
          'Hospitalization expenses covered up to specified limits.',
          'Pre and post-hospitalization expenses.',
          'Day care procedures.',
          'Coverage for critical illnesses.',
          'Maternity expenses as per policy terms.',
          'Claim procedures as per insurance provider guidelines.'
        ]
      }
    ]
  },
  section13: {
    id: 'section13',
    number: 'SECTION XIII',
    title: 'INSURANCE AND RISK COVERAGE',
    searchTerms: ['insurance', 'risk', 'coverage', 'protection'],
    subsections: [
      {
        number: '13.1',
        title: 'Group Life Insurance',
        content: 'Life insurance coverage for employees:',
        points: [
          'Life insurance coverage for all permanent employees.',
          'Sum assured based on salary level or fixed amount.',
          'Beneficiary nomination by employee.',
          'Claims processed through insurance provider.',
          'Premium borne by Hospital.'
        ]
      },
      {
        number: '13.2',
        title: 'Personal Accident Insurance',
        content: 'Accident insurance provisions:',
        points: [
          'Coverage for accidental death or permanent disability.',
          'Coverage applicable 24x7, not limited to working hours.',
          'Compensation as per policy terms.',
          'Claims require medical and police documentation.'
        ]
      },
      {
        number: '13.3',
        title: 'Professional Indemnity',
        content: 'For clinical and medical staff:',
        points: [
          'Professional indemnity coverage for medical practitioners.',
          'Protection against claims of professional negligence.',
          'Coverage limits as per policy.',
          'Hospital provides legal support in covered claims.'
        ]
      }
    ]
  },
  section14: {
    id: 'section14',
    number: 'SECTION XIV',
    title: 'TRAINING AND DEVELOPMENT',
    searchTerms: ['training', 'development', 'learning', 'education', 'skills'],
    subsections: [
      {
        number: '14.1',
        title: 'Training Programs',
        content: 'The Hospital is committed to continuous learning:',
        points: [
          'Induction training for all new employees.',
          'Regular technical and soft skills training programs.',
          'Mandatory compliance and safety training.',
          'Specialized clinical and medical training for healthcare staff.',
          'Leadership development programs for managers.',
          'E-learning platforms and resources available.'
        ]
      },
      {
        number: '14.2',
        title: 'Educational Assistance',
        content: 'Support for further education:',
        points: [
          'Financial assistance for job-related certifications and courses.',
          'Study leave for pursuing relevant degrees or diplomas.',
          'Bond requirements may apply for substantial educational investments.',
          'Prior approval required from management.',
          'Reimbursement upon successful completion.'
        ]
      },
      {
        number: '14.3',
        title: 'Continuing Medical Education (CME)',
        content: 'For medical professionals:',
        points: [
          'Mandatory CME hours as per regulatory requirements.',
          'Support for attending conferences and seminars.',
          'In-house CME programs conducted regularly.',
          'Credits tracked for license renewal purposes.'
        ]
      }
    ]
  },
  section15: {
    id: 'section15',
    number: 'SECTION XV',
    title: 'CAREER DEVELOPMENT AND PROGRESSION',
    searchTerms: ['career', 'progression', 'advancement', 'growth', 'promotion'],
    subsections: [
      {
        number: '15.1',
        title: 'Career Paths',
        content: 'Clear career progression paths available:',
        points: [
          'Defined career ladders for each department and role.',
          'Opportunities for vertical and lateral movement.',
          'Internal job postings for vacant positions.',
          'Employees encouraged to apply for suitable openings.',
          'Preference given to internal candidates with requisite qualifications.'
        ]
      },
      {
        number: '15.2',
        title: 'Succession Planning',
        content: 'Identifying and developing future leaders:',
        points: [
          'Identification of high-potential employees.',
          'Targeted development programs for identified successors.',
          'Mentoring and coaching by senior leaders.',
          'Rotational assignments for broader exposure.',
          'Regular review of succession pipeline.'
        ]
      }
    ]
  },
  section16: {
    id: 'section16',
    number: 'SECTION XVI',
    title: 'TRANSFER AND RELOCATION',
    searchTerms: ['transfer', 'relocation', 'posting', 'movement'],
    subsections: [
      {
        number: '16.1',
        title: 'Transfer Policy',
        content: 'Transfers may be initiated for:',
        points: [
          'Operational requirements and staffing needs.',
          'Employee development and career growth.',
          'At employee request subject to approval.',
          'Administrative reasons.',
          'Adequate notice provided for transfers where feasible.',
          'Family and personal circumstances considered.'
        ]
      },
      {
        number: '16.2',
        title: 'Relocation Assistance',
        content: 'For transfers requiring relocation:',
        points: [
          'Transportation costs for employee and family.',
          'Packing and moving of household goods.',
          'Temporary accommodation assistance.',
          'Settling-in allowance as per policy.',
          'Support in finding accommodation at new location.'
        ]
      }
    ]
  },
  section17: {
    id: 'section17',
    number: 'SECTION XVII',
    title: 'PROMOTION POLICY',
    searchTerms: ['promotion', 'advancement', 'elevation'],
    subsections: [
      {
        number: '17.1',
        title: 'Promotion Criteria',
        content: 'Promotions based on:',
        points: [
          'Consistent high performance over multiple years.',
          'Demonstrated competence for next level role.',
          'Availability of vacancy at higher level.',
          'Completion of minimum tenure in current role.',
          'Relevant qualifications and certifications.',
          'Leadership potential and behavioral competencies.'
        ]
      },
      {
        number: '17.2',
        title: 'Promotion Process',
        content: 'Transparent promotion procedures:',
        points: [
          'Annual promotion cycle based on performance appraisals.',
          'Nominations by supervisors and department heads.',
          'Review by promotion committee.',
          'Promotions effective from specified date.',
          'Salary revision accompanying promotion as per policy.',
          'Promotion letters issued documenting new role and terms.'
        ]
      }
    ]
  },
  section18: {
    id: 'section18',
    number: 'SECTION XVIII',
    title: 'CONFIDENTIALITY AND DATA PROTECTION',
    searchTerms: ['confidentiality', 'data protection', 'privacy', 'information security'],
    subsections: [
      {
        number: '18.1',
        title: 'Confidentiality Obligations',
        content: 'All employees must maintain strict confidentiality regarding:',
        points: [
          'Patient medical records and personal information.',
          'Hospital business strategies, plans, and financial information.',
          'Proprietary processes, methodologies, and systems.',
          'Employee personal and salary information.',
          'Any information marked or understood to be confidential.',
          'Confidentiality obligations continue after employment ends.'
        ]
      },
      {
        number: '18.2',
        title: 'Data Protection Compliance',
        content: 'Adherence to data protection laws:',
        points: [
          'Compliance with applicable data protection and privacy laws.',
          'Collect and process personal data only for legitimate purposes.',
          'Implement appropriate security measures.',
          'Provide data subjects rights as per law.',
          'Report data breaches as per legal requirements.',
          'Regular training on data protection provided.'
        ]
      }
    ]
  },
  section19: {
    id: 'section19',
    number: 'SECTION XIX',
    title: 'INTELLECTUAL PROPERTY RIGHTS',
    searchTerms: ['intellectual property', 'IP', 'patents', 'copyright', 'inventions'],
    subsections: [
      {
        number: '19.1',
        title: 'Ownership of Work Product',
        content: 'Intellectual property created during employment:',
        points: [
          'All work product created in course of employment belongs to Hospital.',
          'Includes inventions, designs, processes, software, and documentation.',
          'Employees must disclose all potentially patentable inventions.',
          'Hospital has sole right to patent, copyright, or protect IP.',
          'Employees cooperate in IP protection processes.',
          'Moral rights waived to extent permitted by law.'
        ]
      },
      {
        number: '19.2',
        title: 'Pre-existing IP',
        content: 'IP brought by employee:',
        points: [
          'Employees must disclose pre-existing IP at time of joining.',
          'Pre-existing IP remains property of employee.',
          'Hospital obtains license to use disclosed pre-existing IP if necessary.'
        ]
      }
    ]
  },
  section20: {
    id: 'section20',
    number: 'SECTION XX',
    title: 'WORKPLACE SAFETY',
    searchTerms: ['safety', 'workplace safety', 'health and safety', 'accidents'],
    subsections: [
      {
        number: '20.1',
        title: 'Safety Responsibilities',
        content: 'Ensuring a safe workplace is shared responsibility:',
        points: [
          'Hospital provides safe working environment and equipment.',
          'Employees must follow safety protocols and guidelines.',
          'Use of personal protective equipment (PPE) mandatory where required.',
          'Report unsafe conditions or practices immediately.',
          'Participate in safety training and drills.',
          'Zero tolerance for willful safety violations.'
        ]
      },
      {
        number: '20.2',
        title: 'Accident Reporting',
        content: 'All accidents and incidents must be:',
        points: [
          'Reported immediately to supervisor and safety officer.',
          'Documented in incident report within 24 hours.',
          'Investigated to determine root cause.',
          'Corrective actions implemented to prevent recurrence.',
          'Serious accidents reported to regulatory authorities as required.'
        ]
      },
      {
        number: '20.3',
        title: 'Emergency Procedures',
        content: 'Emergency response protocols:',
        points: [
          'Emergency evacuation plans posted and communicated.',
          'Regular fire drills and disaster preparedness exercises.',
          'Emergency contacts and assembly points clearly marked.',
          'First aid facilities available.',
          'Employees trained in basic emergency response.'
        ]
      }
    ]
  },
  section21: {
    id: 'section21',
    number: 'SECTION XXI',
    title: 'OCCUPATIONAL HEALTH',
    searchTerms: ['occupational health', 'employee health', 'wellness'],
    subsections: [
      {
        number: '21.1',
        title: 'Health Surveillance',
        content: 'Occupational health programs include:',
        points: [
          'Pre-employment medical examinations.',
          'Periodic health check-ups for all employees.',
          'Specific health monitoring for employees in high-risk roles.',
          'Immunization programs for healthcare workers.',
          'Fitness for duty certifications as needed.',
          'Medical confidentiality maintained.'
        ]
      },
      {
        number: '21.2',
        title: 'Wellness Programs',
        content: 'Employee wellness initiatives:',
        points: [
          'Health awareness campaigns and workshops.',
          'Mental health support and counseling services.',
          'Stress management programs.',
          'Fitness and recreation facilities.',
          'Support for work-life balance.'
        ]
      }
    ]
  },
  section22: {
    id: 'section22',
    number: 'SECTION XXII',
    title: 'SECURITY AND ACCESS CONTROL',
    searchTerms: ['security', 'access control', 'physical security'],
    subsections: [
      {
        number: '22.1',
        title: 'Physical Security',
        content: 'Security measures in place:',
        points: [
          'Access control systems at all entry points.',
          'ID cards must be displayed at all times.',
          'Visitor management system in place.',
          'CCTV surveillance for security and safety.',
          'Security personnel on duty 24x7.',
          'Restricted areas require special authorization.'
        ]
      },
      {
        number: '22.2',
        title: 'Asset Protection',
        content: 'Protection of Hospital assets:',
        points: [
          'Employees responsible for Hospital property in their custody.',
          'Report loss, theft, or damage immediately.',
          'Proper check-out procedures for removing Hospital property.',
          'Personal belongings security is employee responsibility.',
          'Searches may be conducted as per policy and law.'
        ]
      }
    ]
  },
  section23: {
    id: 'section23',
    number: 'SECTION XXIII',
    title: 'INFORMATION TECHNOLOGY USE',
    searchTerms: ['IT', 'information technology', 'computers', 'email', 'internet'],
    subsections: [
      {
        number: '23.1',
        title: 'Acceptable Use Policy',
        content: 'Use of Hospital IT systems and resources:',
        points: [
          'IT systems provided for business purposes.',
          'Limited personal use permitted if it doesn\'t interfere with work.',
          'Prohibited: Illegal activities, offensive content, unauthorized access.',
          'Email and internet usage monitored for compliance and security.',
          'Password security and confidentiality mandatory.',
          'Report security incidents and suspicious activities immediately.'
        ]
      },
      {
        number: '23.2',
        title: 'Data Security',
        content: 'Information security responsibilities:',
        points: [
          'Protect login credentials and do not share.',
          'Use strong passwords and change periodically.',
          'Encrypt sensitive data as per policy.',
          'Do not install unauthorized software.',
          'Use only approved devices and applications.',
          'Backup critical data regularly.',
          'Report lost or stolen devices immediately.'
        ]
      },
      {
        number: '23.3',
        title: 'Social Media Guidelines',
        content: 'Social media use by employees:',
        points: [
          'Personal social media use should not impact work.',
          'Do not disclose confidential Hospital information.',
          'Clearly state views are personal, not Hospital\'s.',
          'Do not post on behalf of Hospital without authorization.',
          'Respectful and professional conduct expected.',
          'Violation may lead to disciplinary action.'
        ]
      }
    ]
  },
  section24: {
    id: 'section24',
    number: 'SECTION XXIV',
    title: 'COMMUNICATION AND CORRESPONDENCE',
    searchTerms: ['communication', 'correspondence', 'official communication'],
    subsections: [
      {
        number: '24.1',
        title: 'Official Communication',
        content: 'Guidelines for official communication:',
        points: [
          'Use official email for business correspondence.',
          'Professional tone and language in all communications.',
          'Proper email etiquette including appropriate subject lines.',
          'Respond to emails and calls in timely manner.',
          'Copy relevant stakeholders on important communications.',
          'Use appropriate communication channels for different purposes.'
        ]
      },
      {
        number: '24.2',
        title: 'Media Relations',
        content: 'Interaction with media:',
        points: [
          'Only authorized spokespersons may speak to media.',
          'Employees must not make statements on behalf of Hospital.',
          'Refer all media inquiries to PR or management.',
          'Social media posts about Hospital require approval.',
          'Violation treated seriously as it impacts reputation.'
        ]
      }
    ]
  },
  section25: {
    id: 'section25',
    number: 'SECTION XXV',
    title: 'PREVENTION OF SEXUAL HARASSMENT',
    searchTerms: ['sexual harassment', 'POSH', 'harassment prevention', 'workplace harassment'],
    subsections: [
      {
        number: '25.1',
        title: 'Policy Statement',
        content: 'Zero tolerance for sexual harassment:',
        points: [
          'Hospital committed to providing workplace free from sexual harassment.',
          'All employees entitled to respectful and dignified treatment.',
          'Sexual harassment strictly prohibited under all circumstances.',
          'Applies to all employees regardless of gender or position.',
          'Covers conduct at workplace and work-related events.'
        ]
      },
      {
        number: '25.2',
        title: 'Definition of Sexual Harassment',
        content: 'Sexual harassment includes unwelcome:',
        points: [
          'Physical contact and advances.',
          'Demand or request for sexual favors.',
          'Sexually colored remarks.',
          'Showing pornography.',
          'Any other unwelcome physical, verbal, or non-verbal conduct of sexual nature.',
          'Creating hostile or intimidating work environment.'
        ]
      },
      {
        number: '25.3',
        title: 'Internal Complaints Committee (ICC)',
        content: 'Complaint mechanism:',
        points: [
          'Internal Complaints Committee (ICC) constituted as per law.',
          'Complaints submitted to ICC in writing.',
          'ICC conducts inquiry in fair and time-bound manner.',
          'Confidentiality maintained throughout process.',
          'Protection against retaliation provided to complainants.',
          'Strict action against perpetrators after due inquiry.',
          'Awareness training conducted regularly.'
        ]
      }
    ]
  },
  section26: {
    id: 'section26',
    number: 'SECTION XXVI',
    title: 'EQUAL OPPORTUNITY AND NON-DISCRIMINATION',
    searchTerms: ['equal opportunity', 'non-discrimination', 'diversity', 'inclusion'],
    subsections: [
      {
        number: '26.1',
        title: 'Equal Employment Opportunity',
        content: 'Hospital is an equal opportunity employer:',
        points: [
          'Employment decisions based on merit, qualifications, and performance.',
          'No discrimination based on race, religion, caste, gender, age, disability, or sexual orientation.',
          'Equal pay for equal work.',
          'Fair access to opportunities for growth and development.',
          'Reasonable accommodations for employees with disabilities.',
          'Diversity valued and promoted at all levels.'
        ]
      },
      {
        number: '26.2',
        title: 'Inclusive Workplace',
        content: 'Creating inclusive environment:',
        points: [
          'Respect for diverse backgrounds, perspectives, and experiences.',
          'Zero tolerance for discrimination or bias.',
          'Unconscious bias training provided.',
          'Inclusive recruitment and promotion practices.',
          'Employee resource groups and support networks encouraged.'
        ]
      }
    ]
  },
  section27: {
    id: 'section27',
    number: 'SECTION XXVII',
    title: 'ENVIRONMENTAL SUSTAINABILITY',
    searchTerms: ['environment', 'sustainability', 'green practices', 'eco-friendly'],
    subsections: [
      {
        number: '27.1',
        title: 'Environmental Commitment',
        content: 'Hospital committed to environmental sustainability:',
        points: [
          'Minimize environmental impact of operations.',
          'Comply with environmental laws and regulations.',
          'Efficient use of energy, water, and resources.',
          'Waste segregation and proper disposal.',
          'Reduce, reuse, and recycle initiatives.',
          'Green procurement practices where feasible.'
        ]
      },
      {
        number: '27.2',
        title: 'Employee Participation',
        content: 'Employees expected to:',
        points: [
          'Follow waste segregation guidelines.',
          'Conserve electricity and water.',
          'Use resources responsibly.',
          'Participate in environmental initiatives.',
          'Suggest improvement ideas.'
        ]
      }
    ]
  },
  section28: {
    id: 'section28',
    number: 'SECTION XXVIII',
    title: 'CORPORATE SOCIAL RESPONSIBILITY',
    searchTerms: ['CSR', 'corporate social responsibility', 'community service'],
    subsections: [
      {
        number: '28.1',
        title: 'CSR Initiatives',
        content: 'Hospital engages in social responsibility activities:',
        points: [
          'Healthcare camps and community outreach programs.',
          'Support for underprivileged patients.',
          'Health awareness and education initiatives.',
          'Partnerships with NGOs and community organizations.',
          'Employee volunteering encouraged and supported.',
          'Transparent reporting of CSR activities.'
        ]
      }
    ]
  },
  section29: {
    id: 'section29',
    number: 'SECTION XXIX',
    title: 'COMPLIANCE AND LEGAL REQUIREMENTS',
    searchTerms: ['compliance', 'legal', 'regulatory', 'laws'],
    subsections: [
      {
        number: '29.1',
        title: 'Regulatory Compliance',
        content: 'Compliance with applicable laws:',
        points: [
          'All operations comply with central and state laws.',
          'Healthcare regulations and medical council guidelines followed.',
          'Labor laws compliance including minimum wages, working hours, PF, ESI.',
          'Tax laws including TDS, GST compliance.',
          'Environmental and safety regulations.',
          'Data protection and privacy laws.',
          'Regular compliance audits conducted.'
        ]
      },
      {
        number: '29.2',
        title: 'Employee Responsibilities',
        content: 'Employees must:',
        points: [
          'Comply with all applicable laws and regulations.',
          'Complete mandatory compliance training.',
          'Report violations or suspected violations.',
          'Cooperate in audits and investigations.',
          'Maintain required licenses and certifications current.'
        ]
      }
    ]
  },
  section30: {
    id: 'section30',
    number: 'SECTION XXX',
    title: 'AMENDMENTS AND INTERPRETATIONS',
    searchTerms: ['amendments', 'changes', 'modifications', 'revisions'],
    subsections: [
      {
        number: '30.1',
        title: 'Amendment Procedure',
        content: 'These By-Laws may be amended:',
        points: [
          'By Board of Directors resolution with majority approval.',
          'Consultation with stakeholders and employee representatives.',
          'Amendments communicated to all employees in writing.',
          'Effective from date specified in resolution.',
          'Updated By-Laws made available to all employees.',
          'Acknowledgment of amendments may be required.'
        ]
      },
      {
        number: '30.2',
        title: 'Periodic Review',
        content: 'These By-Laws shall be:',
        points: [
          'Reviewed at least once every three years.',
          'Updated to reflect changes in law and best practices.',
          'Revised to ensure relevance and effectiveness.',
          'Aligned with Hospital strategic objectives.',
          'Compliance with current regulatory requirements ensured.'
        ]
      },
      {
        number: '30.3',
        title: 'Interpretation and Disputes',
        content: 'In case of interpretation issues:',
        points: [
          'Management decision shall be final on interpretations.',
          'Good faith interpretation principle applied.',
          'Legal advice sought for complex matters.',
          'Disputes resolved through internal mechanisms first.',
          'Applicable laws shall prevail in case of conflict with By-Laws.'
        ]
      }
    ]
  }
};

// Quick reference data for dashboard
export const quickReferenceData = {
  leaveEntitlements: [
    'Casual Leave: 12 days/year',
    'Sick Leave: 10 days/year',
    'Annual Leave: 20 days/year',
    'Maternity Leave: 26 weeks',
    'Paternity Leave: 7 days',
    'Compensatory Off: As earned'
  ],
  workingHours: [
    'Daily: 8 hours',
    'Weekly: 48 hours',
    'Shifts: As per roster',
    'Attendance: Biometric',
    'Overtime: 1.5x pay rate',
    'Break: As per schedule'
  ],
  compensation: [
    'HRA: 40% of basic',
    'DA: 20% of basic',
    'Allowances: As per grade',
    'PF: 12% contribution',
    'TDS: As per Income Tax',
    'Gratuity: As per Act'
  ],
  probationNotice: [
    'Probation: 6 months',
    'Extension: Max 3 months',
    'Notice Period: 30 days',
    'Retirement Age: 60 years',
    'Confirmation: In writing',
    'Exit Clearance: Required'
  ]
};

export const keyHighlights = [
  {
    section: 'Code of Conduct',
    highlight: 'Zero tolerance for harassment, discrimination, or misconduct',
    icon: 'Shield',
    color: 'red'
  },
  {
    section: 'Leave Policy',
    highlight: 'Medical certificate required for sick leave exceeding 3 days',
    icon: 'Calendar',
    color: 'blue'
  },
  {
    section: 'Disciplinary Procedures',
    highlight: 'Principles of natural justice followed in all proceedings',
    icon: 'Scale',
    color: 'purple'
  },
  {
    section: 'Grievance Redressal',
    highlight: 'All grievances acknowledged within 3 working days',
    icon: 'AlertCircle',
    color: 'orange'
  }
];
