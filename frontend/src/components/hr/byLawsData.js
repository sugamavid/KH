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
          'Attendance Recording: All employees must record their attendance using the Hospital\'s biometric attendance system, card-based system, or other approved methods at the start and end of each shift. Manual attendance entries require supervisor approval and HR verification.',
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
    searchTerms: ['performance', 'appraisal', 'evaluation', 'review', 'assessment', 'KPI', 'goals'],
    subsections: [
      {
        number: '5.1',
        title: 'Performance Management System - Framework and Philosophy',
        content: 'Koyili Hospital maintains a comprehensive, transparent, and objective performance management system designed to align individual performance with organizational goals, foster continuous improvement, recognize excellence, and support career development. The system is founded on principles of fairness, objectivity, regular feedback, and developmental focus:',
        points: [
          'Performance Management Cycle: The annual performance cycle runs from January to December with clearly defined phases - Goal Setting (January-February), Mid-Year Review (June-July), Year-End Assessment (December-January), and Calibration & Rating (January). This structured approach ensures consistency and adequate time for performance demonstration.',
          'Objective Setting and Cascading: Organizational objectives cascade down through departments to individual employees. Each employee has 4-8 SMART objectives (Specific, Measurable, Achievable, Relevant, Time-bound) aligned with departmental and Hospital goals. Objectives cover both quantitative targets and qualitative behavioral aspects.',
          'Key Performance Indicators (KPIs): Role-specific KPIs are defined measuring productivity, quality, efficiency, patient satisfaction, compliance, innovation, and teamwork. Clinical roles have clinical outcome KPIs, administrative roles have operational KPIs, and support roles have service delivery KPIs.',
          'Competency Framework: Performance evaluation includes assessment of core competencies (communication, teamwork, problem-solving, initiative) and functional competencies (technical skills, domain expertise, procedural knowledge) relevant to each role level.',
          'Continuous Feedback Culture: Managers provide ongoing informal feedback throughout the year through regular one-on-one meetings, coaching conversations, and real-time recognition or corrective guidance. Formal reviews complement continuous feedback.',
          'Self-Assessment Component: Employees complete self-appraisal documenting achievements, challenges, learnings, and aspirations. Self-reflection promotes ownership and provides employee perspective to managers.',
          '360-Degree Feedback: For leadership and managerial roles, feedback is collected from supervisors, peers, subordinates, and internal customers providing holistic performance view. 360-degree feedback identifies leadership strengths and development areas.',
          'Performance Documentation: All performance discussions, achievements, concerns, and improvement plans are documented in the Performance Management System (PMS). Documentation ensures fairness, consistency, and serves as reference for HR decisions.',
          'Rating Scale and Distribution: Performance is rated on a 5-point scale - Outstanding (5), Exceeds Expectations (4), Meets Expectations (3), Needs Improvement (2), Unsatisfactory (1). Rating distribution follows organizational guidelines ensuring objectivity and avoiding rating inflation.',
          'Performance Calibration: Department heads and HR conduct calibration sessions to ensure consistency in ratings across teams, eliminate bias, and maintain fairness. Calibration reviews comparative performance and validates ratings.',
          'Linkage to Rewards: Performance ratings directly influence annual increments, bonuses, promotions, training opportunities, and recognition programs. High performers receive accelerated career progression and enhanced rewards.',
          'Development Planning: Performance reviews identify skill gaps and create Individual Development Plans (IDP) with specific actions, training programs, mentoring, stretch assignments, or certifications to enhance capabilities.',
          'Underperformance Management: Employees rated as Needs Improvement or Unsatisfactory are placed on Performance Improvement Plans (PIP) with clear expectations, support, monitoring, and timelines for improvement.',
          'Performance Appeal Mechanism: Employees who disagree with their performance assessment can appeal to the next level manager or HR. Appeals are reviewed objectively considering documented evidence and multiple perspectives.'
        ]
      },
      {
        number: '5.2',
        title: 'Performance Appraisal Process - Detailed Procedures',
        content: 'Structured appraisal procedures ensure comprehensive, fair, and developmental performance evaluation:',
        points: [
          'Goal Setting Phase (January-February): Managers and employees collaboratively set performance objectives for the year aligned with departmental plans. Goals are documented in PMS with success metrics, weightages, and target timelines. Employees acknowledge and commit to goals.',
          'Mid-Year Review (June-July): Formal mid-year discussion reviews progress toward goals, identifies obstacles, adjusts objectives if needed based on business changes, and provides feedback. Mid-year reviews keep employees on track and allow course correction.',
          'Year-End Self-Appraisal (December): Employees complete self-assessment documenting accomplishments against each objective, key contributions, challenges faced, skills developed, and suggestions. Self-appraisal deadline is typically mid-December.',
          'Manager Assessment (December-January): Managers evaluate employee performance against objectives and competencies, provide detailed comments on strengths and areas for improvement, assign ratings, and recommend increment/promotion. Managers consider self-appraisal, work quality, peer feedback, and observable behaviors.',
          'One-on-One Performance Discussion: Manager conducts face-to-face appraisal discussion sharing assessment, explaining ratings, discussing career aspirations, identifying development needs, and jointly creating development plan. Discussion is developmental and two-way.',
          'Goal Rollover and New Goal Setting: Unachieved goals may be carried forward with revised timelines. New objectives for upcoming year are discussed during year-end review linking performance discussion with future planning.',
          'Reviewer/HOD Approval: Department heads review and approve performance ratings of their team ensuring consistency, fairness, and alignment with departmental performance. HODs may normalize ratings if needed.',
          'HR Review and Calibration: HR reviews all appraisals for completeness, compliance with process, distribution of ratings, and consistency. Calibration meetings are conducted with department heads to finalize ratings.',
          'Communication of Results: Final performance ratings, increment letters, and bonus communications are provided to employees by January-end. Employees acknowledge receipt of performance communication.',
          'Performance Data Analysis: HR analyzes performance data identifying high performers for talent pipeline, flight risks, skill gaps, training needs, and trends in performance distribution for organizational insights.',
          'Feedback to System: Employees and managers provide feedback on appraisal process effectiveness. Process improvements are implemented based on feedback ensuring continuous enhancement.'
        ]
      },
      {
        number: '5.3',
        title: 'Performance Improvement Plans (PIP)',
        content: 'Structured approach to address underperformance and support employees in meeting expected standards:',
        points: [
          'PIP Initiation: Employees rated Needs Improvement or Unsatisfactory are placed on formal PIP. PIP is documented specifying performance gaps, expected standards, improvement actions, support provided, and review timelines.',
          'Performance Gap Analysis: Detailed analysis identifies specific areas of underperformance - technical skills, quality of work, productivity, attendance, behavior, or competencies. Root causes are explored (lack of training, personal issues, role misfit).',
          'SMART Improvement Goals: PIP establishes 3-5 specific, measurable improvement goals with clear success criteria. Goals focus on closing performance gaps and achieving minimum acceptable standards.',
          'Support and Resources: Hospital provides necessary support - additional training, mentoring, coaching, resources, tools, revised work allocation, or accommodations. Manager commits to regular guidance and feedback.',
          'PIP Duration: Standard PIP period is 90 days (3 months) but may be extended to 180 days for complex roles or issues. PIP timeline is clearly communicated to employee.',
          'Progress Monitoring: Manager conducts fortnightly or monthly review meetings documenting progress, providing feedback, addressing obstacles, and adjusting plan if needed. Progress is objectively assessed against defined metrics.',
          'PIP Outcomes: At PIP conclusion, performance is assessed resulting in - (a) Successful completion: Employee meets standards, PIP concluded, regular performance management resumes, (b) Partial improvement: PIP extended for additional period, (c) No improvement: Employment termination or role reassignment considered.',
          'Documentation: All PIP meetings, feedback, progress assessments, and outcomes are thoroughly documented. Documentation protects both employee and Hospital and ensures due process.',
          'Employee Rights During PIP: Employees on PIP have right to understand expectations, receive fair opportunity to improve, access support resources, and present their perspective. PIP is developmental, not punitive.',
          'Post-PIP Support: Employees who successfully complete PIP receive continued monitoring and support for 3-6 months ensuring sustained performance improvement. Relapse may result in immediate termination.',
          'PIP and Employment Actions: Unsatisfactory PIP outcome may lead to termination, demotion, or transfer. Decisions consider performance history, conduct, improvement efforts, and operational needs. All actions follow due process.'
        ]
      },
      {
        number: '5.4',
        title: 'Recognition and Rewards Program',
        content: 'Comprehensive recognition framework celebrating excellence, motivating employees, and reinforcing desired behaviors:',
        points: [
          'Spot Recognition: Immediate recognition for exceptional contributions, extra mile efforts, innovative ideas, or exemplary patient service. Spot awards include certificates, gift vouchers, or public appreciation.',
          'Employee of the Month: Department-level recognition for outstanding performance, dedication, and positive attitude. Criteria include performance excellence, patient feedback, teamwork, and values demonstration. Winners receive certificate, cash award, and public recognition.',
          'Employee of the Quarter/Year: Hospital-wide recognition for sustained exceptional performance over quarter or year. Nominees are evaluated by selection committee. Winners receive trophy, substantial cash award, and special privileges.',
          'Team Recognition: Outstanding team achievements in quality improvement, patient safety, cost savings, or process innovations are recognized. Team awards foster collaboration and collective excellence.',
          'Long Service Awards: Employees completing 5, 10, 15, 20, 25 years of dedicated service receive appreciation certificates, mementos, and recognition events celebrating loyalty and contribution.',
          'Best Performer Awards: Annual awards for top performers in each department and category (clinical, nursing, administrative, support) based on performance ratings, achievements, and nominations.',
          'Innovation and Excellence Awards: Recognition for innovative ideas implemented, process improvements, research publications, quality certifications, or exceptional contributions to Hospital reputation.',
          'Patient Appreciation Awards: Employees receiving exceptional patient feedback, compliments, or gratitude are recognized through Patient Choice Awards based on patient satisfaction scores.',
          'Safety Champion Awards: Employees demonstrating exemplary safety practices, reporting hazards, preventing incidents, or promoting safety culture receive Safety Excellence recognition.',
          'Values Champion Recognition: Employees exemplifying Hospital values (integrity, compassion, excellence, teamwork, innovation) in daily work receive Values Awards.',
          'Performance Bonuses: Annual performance bonuses ranging from 10% to 30% of CTC for high performers (ratings 4 and 5) based on individual performance, departmental achievement, and Hospital financial performance.',
          'Fast-Track Promotions: Consistently high-performing employees are considered for accelerated promotions, special projects, leadership roles, or career advancement opportunities.',
          'Professional Development Opportunities: Top performers receive priority for sponsored training, conferences, certifications, higher education support, or international exposure programs.',
          'Recognition Events: Quarterly or annual award ceremonies celebrate achievers, share success stories, and create culture of appreciation. Events include senior leadership participation and peer recognition.'
        ]
      },
      {
        number: '5.5',
        title: 'Performance-Based Career Progression',
        content: 'Merit-based career advancement framework linking performance to growth opportunities:',
        points: [
          'Career Pathways: Clearly defined career progression paths for each role family (clinical, nursing, administrative, technical, support) showing advancement steps, eligibility criteria, and typical timelines.',
          'Promotion Eligibility: Minimum criteria include - 2 consecutive years of Exceeds or Outstanding ratings, completion of minimum tenure in current role, relevant certifications/qualifications, demonstrated leadership potential, and no major disciplinary issues.',
          'Promotion Process: Annual promotion cycle where eligible employees are nominated by managers, assessed by promotion committees considering performance, potential, readiness, and vacancy availability. Successful candidates receive promotion letters with revised designation and compensation.',
          'Skill-Based Progression: Employees can advance through skill certification programs, competency assessments, and demonstrated expertise even without designated vacancies in certain technical and specialist roles.',
          'Leadership Pipeline: High-performing employees are identified for leadership development programs, stretch assignments, cross-functional projects, mentoring by senior leaders preparing them for future leadership roles.',
          'Lateral Moves: High performers may be offered lateral moves to different departments or roles for broadening exposure, skill development, or career change interests supporting overall career growth.',
          'Succession Planning: Top performers are identified as successors for critical roles through talent review process. Successors receive targeted development, exposure, and readiness preparation.'
        ]
      },
      {
        number: '5.6',
        title: 'Performance Documentation and Records',
        content: 'Comprehensive record-keeping ensures transparency, compliance, and effective performance management:',
        points: [
          'Performance Management System (PMS): Digital platform maintains complete performance records - objectives, self-appraisals, manager assessments, ratings, feedback, development plans, and historical data.',
          'Confidentiality: Performance information is confidential and accessible only to the employee, reporting manager, department head, HR, and senior management on need-to-know basis.',
          'Record Retention: Performance records retained for duration of employment plus 7 years post-separation for legal compliance, references, and audit purposes.',
          'Access Rights: Employees can access their own performance records through HRMS self-service portal. Managers access records of their direct reports.',
          'Data Security: Performance data protected through access controls, encryption, audit trails, and compliance with data protection regulations.',
          'Performance Certificates: Employees may request performance certificates or reference letters. Certificates state factual information - tenure, designation, conduct - without disclosing confidential ratings.',
          'Audit Compliance: Performance records are subject to internal and external audits verifying process compliance, fairness, and documentation adequacy.'
        ]
      }
    ]
  },
  section6: {
    id: 'section6',
    number: 'SECTION VI',
    title: 'DISCIPLINARY PROCEDURES',
    searchTerms: ['disciplinary', 'misconduct', 'violations', 'penalties', 'punishment', 'termination', 'warning'],
    subsections: [
      {
        number: '6.1',
        title: 'Grounds for Disciplinary Action - Comprehensive Framework',
        content: 'Disciplinary action may be initiated when employee conduct, performance, or behavior violates Hospital policies, professional standards, or legal requirements. Misconduct is categorized by severity to ensure proportionate response:',
        points: [
          'Minor Misconduct: Occasional tardiness, minor dress code violations, failure to follow routine procedures, minor negligence in duties not causing harm, inappropriate language or behavior (first instance), unauthorized use of Hospital phone/internet for personal matters, failure to wear ID badge, minor breaches of workplace etiquette. Minor misconduct typically results in verbal warning or written warning.',
          'Major Misconduct: Repeated minor misconduct despite warnings, persistent unauthorized absence, insubordination or refusal to follow legitimate instructions, negligence causing patient dissatisfaction or operational disruption, breach of confidentiality (non-critical), misuse of Hospital resources, dishonest claims or misrepresentation, violation of safety protocols causing risk, unprofessional conduct affecting work environment. Major misconduct may result in written warning, suspension, demotion, or termination.',
          'Gross Misconduct: Theft, fraud, embezzlement, or misappropriation of Hospital property/funds/patient belongings, physical violence, assault, or threatening behavior, willful damage to Hospital property, serious breach of patient confidentiality or data protection, working under influence of alcohol/drugs or possessing prohibited substances, sexual harassment or creating hostile work environment, serious insubordination or willful disobedience, falsification of critical records (medical records, attendance, qualifications), gross negligence causing serious patient harm or safety incident, bribery, corruption, or kickbacks, unauthorized disclosure of trade secrets or proprietary information. Gross misconduct results in immediate termination, may involve police action, and forfeiture of benefits.',
          'Criminal Offenses: Conviction for criminal offenses whether work-related or personal that affect employee\'s suitability for Hospital employment or Hospital reputation. Criminal convictions may result in termination.',
          'Attendance Violations: Habitual tardiness (more than 5 instances per month), frequent unplanned absences, unauthorized absence for 3+ consecutive days (abandonment), providing false reasons for leave, abuse of sick leave privileges.',
          'Performance-Related Grounds: Persistent underperformance despite Performance Improvement Plans, willful negligence or dereliction of duty, refusal to perform assigned legitimate duties, sleeping on duty in critical roles.',
          'Breach of Professional Standards: For clinical staff - medical negligence, unethical medical practices, violation of medical council regulations, performing procedures without competence/authorization, improper prescribing practices.',
          'Conflict of Interest Violations: Undisclosed business relationships with Hospital vendors/competitors, using Hospital resources for personal business, accepting inappropriate gifts/kickbacks, engaging in prohibited outside employment.',
          'Information Security Breaches: Unauthorized access to systems/data, sharing login credentials, data theft or unauthorized copying, installing malware or compromising network security, violation of social media policy causing reputation damage.',
          'Discrimination and Harassment: Discrimination based on protected characteristics (race, religion, gender, age, disability, caste), bullying, intimidation, or victimization, creating hostile work environment, retaliation against complainants.'
        ]
      },
      {
        number: '6.2',
        title: 'Disciplinary Measures and Progressive Discipline',
        content: 'The Hospital follows progressive discipline approach where severity of action is proportionate to misconduct gravity, repetition, and employee history. Progressive discipline provides opportunity for correction before severe action:',
        points: [
          'Informal Counseling: For first-time minor issues, manager provides informal verbal counseling explaining concern, expected behavior, and consequences of repetition. Counseling is documented in manager notes but not formal record.',
          'Verbal Warning: Formal verbal warning issued by manager for minor misconduct or policy violations. Verbal warning is documented in employee file with date, issue, and employee acknowledgment. Valid for 6 months.',
          'Written Warning (First): First written warning formally documents misconduct, specifies violated policy, states expected behavior correction, and warns of escalated action if repeated. Employee receives copy and signs acknowledgment. Valid for 12 months.',
          'Written Warning (Final): Second written warning for repeated or more serious misconduct. Final warning emphasizes severity, potential for termination if not corrected, and last opportunity for improvement. Valid for 18-24 months.',
          'Suspension Without Pay: Temporary removal from duty and stoppage of salary for specified period (typically 1-7 days) for serious misconduct. Suspension serves as strong deterrent and reflection period. Employee must submit in writing understanding of issue and commitment to correction.',
          'Suspension Pending Investigation: For gross misconduct allegations requiring investigation, employee placed on suspension with partial or full pay preservation until investigation conclusion. Protects Hospital and employee during inquiry.',
          'Demotion: Reduction in designation, responsibilities, or grade for serious performance issues or misconduct. Demotion impacts salary, benefits, and career progression. Used when employee cannot meet current role demands but can contribute at lower level.',
          'Salary Increment Withholding: Annual salary increment may be withheld or reduced for employees with poor performance or disciplinary issues. Withheld increments may be released upon sustained improvement.',
          'Transfer: Disciplinary transfer to different department, location, or shift as consequence of misconduct or to separate conflicting parties. Transfer may be with or without employee consent depending on circumstances.',
          'Recovery of Damages: For financial losses caused to Hospital through negligence, fraud, or misconduct, responsible employees may be required to compensate Hospital through salary deduction or payment. Quantum is determined through inquiry.',
          'Termination for Cause: Employment termination due to gross misconduct, repeated violations despite warnings, serious policy breaches, or loss of trust. Termination for cause may involve immediate removal, forfeiture of certain benefits, and no separation pay.',
          'Termination Without Cause: In some cases, employment may be terminated without cause (e.g., during probation, redundancy, restructuring) with notice period or payment in lieu. This is separation, not disciplinary action.',
          'Immediate Dismissal: Summary termination without notice for gross misconduct warranting instant removal (theft, violence, gross negligence causing serious harm). Employee escorted out immediately, access revoked, full investigation conducted post-removal for confirmation.',
          'Progression Override: Hospital may skip progressive steps and impose severe penalty directly for gross misconduct, illegal acts, or where progressive discipline is inappropriate. Principle of proportionality is maintained.'
        ]
      },
      {
        number: '6.3',
        title: 'Principles of Natural Justice and Due Process',
        content: 'All disciplinary proceedings are conducted adhering to principles of natural justice ensuring fairness, transparency, and employee rights protection:',
        points: [
          'Right to be Informed: Employee is informed in writing of allegations, specific charges, policy violations, and potential consequences. Charge sheet or show cause notice provides complete details of misconduct.',
          'Right to be Heard: Employee given reasonable opportunity (typically 48-72 hours) to respond to charges through written explanation or personal hearing. Employee can present their version, provide evidence, and explain circumstances.',
          'Right to Representation: During disciplinary hearings, employee may be accompanied by colleague or staff representative (not external legal counsel unless permitted). Representative can support but cannot obstruct proceedings.',
          'Presumption of Innocence: Employee presumed innocent until proven guilty through fair inquiry. Burden of proof lies with Hospital to establish misconduct based on evidence and facts.',
          'Fair and Impartial Inquiry: Investigating officer or inquiry committee is independent, unbiased, and not directly involved in the incident. Inquiry examines all evidence, hears witnesses, and arrives at objective findings.',
          'Reasonable Timeline: Inquiry completed within reasonable timeframe (typically 15-30 days depending on complexity) ensuring justice is not delayed. Extensions with valid reasons communicated to employee.',
          'Documentation and Record: All inquiry proceedings, witness statements, evidence, employee responses, and findings are documented. Records maintained confidentially and made available to employee upon request.',
          'Opportunity to Examine Evidence: Employee has right to examine evidence, documents, and witness statements against them. Cross-examination of witnesses may be permitted in serious cases.',
          'Consideration of Mitigating Factors: Inquiry considers employee service record, provocation, personal circumstances, remorse, cooperation, first-time offense, and other mitigating factors before recommending penalty.',
          'Proportionate Penalty: Penalty imposed is proportionate to misconduct severity, consistent with precedents, and considers employee\'s length of service and previous record. Harsh or disproportionate penalties are avoided.',
          'Communication of Decision: Employee informed in writing of inquiry findings, decision, penalty imposed, rationale, and effective date. Communication is clear, specific, and delivered with dignity.',
          'Right to Appeal: Employee has right to appeal disciplinary decision to higher authority or appellate committee within specified timeline (typically 15 days from decision communication). Appeal is reviewed objectively.',
          'Confidentiality: Disciplinary matters handled confidentially to protect employee dignity and Hospital reputation. Information shared only on need-to-know basis.',
          'No Double Jeopardy: Employee cannot be punished twice for same offense. Once penalty imposed and concluded, matter is closed unless new evidence emerges.',
          'Protection from Victimization: No adverse action taken against employees raising genuine concerns or participating as witnesses in disciplinary proceedings. Retaliation is serious misconduct.'
        ]
      },
      {
        number: '6.4',
        title: 'Disciplinary Inquiry Process - Step by Step',
        content: 'Structured inquiry process ensures thorough, objective investigation of misconduct allegations:',
        points: [
          'Step 1 - Complaint/Incident Reporting: Misconduct brought to notice through complaint, incident report, audit finding, or managerial observation. Initial assessment determines if disciplinary action warranted.',
          'Step 2 - Preliminary Investigation: HR or designated officer conducts preliminary fact-finding to assess credibility, severity, and evidence availability. Immediate actions taken if required (suspension, evidence preservation).',
          'Step 3 - Show Cause Notice: If prima facie case established, employee issued show cause notice detailing allegations, evidence, policy violations, and requesting explanation within specified period (48-72 hours).',
          'Step 4 - Employee Response: Employee submits written explanation addressing each allegation, providing their version, evidence, witnesses, and mitigating circumstances. Extension may be granted for valid reasons.',
          'Step 5 - Decision on Inquiry: Based on show cause response, decision made to - (a) Close case if explanation satisfactory, (b) Issue warning without full inquiry for minor issues, (c) Proceed with formal inquiry for serious matters.',
          'Step 6 - Inquiry Committee Formation: For formal inquiries, committee of 2-3 senior managers (not from employee\'s department) appointed. Terms of reference, timelines, and process communicated.',
          'Step 7 - Evidence Collection: Inquiry committee collects documents, records, CCTV footage, emails, attendance data, witness statements, and all relevant evidence objectively.',
          'Step 8 - Witness Examination: Witnesses called for statements. Employee can suggest witnesses and question opposing witnesses. Witness testimonies recorded.',
          'Step 9 - Employee Hearing: Employee given personal hearing to present case, explain actions, provide evidence, and make submissions. Hearing is fair, respectful, and documented.',
          'Step 10 - Inquiry Report: Committee prepares detailed report containing - facts investigated, evidence examined, findings on each charge (proved/not proved), conclusions, and recommendations on penalty. Report submitted to competent authority.',
          'Step 11 - Disciplinary Authority Decision: Senior management/HR head reviews inquiry report and decides on - (a) Accept findings and impose recommended penalty, (b) Modify penalty, (c) Exonerate employee. Decision is reasoned.',
          'Step 12 - Communication: Decision communicated to employee in writing with rationale, penalty details, effective date, and appeal rights. Communication is delivered personally or through registered mail.',
          'Step 13 - Implementation: Penalty implemented - warning letter issued, suspension executed, salary adjustments made, termination processed. HR ensures compliance and documentation.',
          'Step 14 - Appeal Process: If employee appeals, appellate authority reviews case, may seek clarifications, and makes final decision. Appellate decision is binding.',
          'Step 15 - Closure and Record: Case closed with complete documentation filed. Record maintained confidentially. Learnings identified for future prevention.'
        ]
      },
      {
        number: '6.5',
        title: 'Appeal Procedure',
        content: 'Employees have right to challenge disciplinary decisions through structured appeal mechanism:',
        points: [
          'Appeal Eligibility: All disciplinary actions except minor verbal warnings are appealable. Employee can appeal against inquiry findings, penalty imposed, or both.',
          'Appeal Timeline: Appeal must be filed within 15 days from date of receiving disciplinary decision. Late appeals may be considered for valid reasons with condonation request.',
          'Appeal Submission: Written appeal submitted to appellate authority (typically next level manager or designated senior management committee) through HR. Appeal states grounds for challenge and desired relief.',
          'Grounds for Appeal: Valid grounds include - procedural irregularities, denial of natural justice, relevant facts not considered, penalty disproportionate to offense, new evidence available, bias or prejudice in inquiry.',
          'Appellate Authority: Independent senior manager or committee not involved in original inquiry. Appellate authority has full powers to review case, examine records, and make decisions.',
          'Stay on Penalty: Appeal filing may result in stay on penalty implementation (except termination which is typically effective immediately but subject to reinstatement if appeal succeeds).',
          'Appeal Hearing: Appellate authority may conduct hearing allowing employee to present case. Hearing is not full re-inquiry but focused review of contested aspects.',
          'Appeal Decision: Appellate authority can - (a) Uphold original decision, (b) Modify penalty to be more or less severe, (c) Overturn decision and exonerate employee. Decision is final and binding.',
          'Communication of Appeal Outcome: Appeal decision communicated within 30-45 days of filing. If decision modified, corrective actions taken (salary restoration, record correction).',
          'No Further Appeal: Appellate decision is final. No further internal appeal available. Employee may seek external remedies through labor courts or appropriate forums as per law.'
        ]
      },
      {
        number: '6.6',
        title: 'Special Situations',
        content: 'Certain disciplinary situations require special handling and procedures:',
        points: [
          'Sexual Harassment Cases: Handled through Internal Complaints Committee (ICC) as per POSH Act. ICC conducts inquiry following prescribed procedures. Disciplinary action based on ICC findings.',
          'Criminal Cases: If employee arrested or charged with criminal offense, Hospital may suspend employee pending trial. Conviction may lead to termination. Acquittal reviewed before reinstatement.',
          'Patient Safety Incidents: Clinical errors or patient safety incidents investigated by Medical Board/Quality Committee along with disciplinary inquiry. Clinical judgment errors differentiated from negligence.',
          'Whistleblower Protection: Employees reporting violations in good faith protected from retaliation. False or malicious complaints subject to disciplinary action against complainant.',
          'Mass Misconduct: If multiple employees involved (strike, vandalism, collective indiscipline), individual culpability assessed. Leaders and instigators face stringent action.',
          'Probationer Misconduct: Probationers may be terminated with shorter notice for misconduct without elaborate inquiry process, though basic fairness maintained.',
          'Off-Duty Misconduct: Misconduct outside work hours/premises considered if it affects Hospital reputation, trust, or employee\'s job fitness (criminal acts, social media attacks on Hospital).'
        ]
      }
    ]
  },
  section7: {
    id: 'section7',
    number: 'SECTION VII',
    title: 'GRIEVANCE REDRESSAL MECHANISM',
    searchTerms: ['grievance', 'complaints', 'redressal', 'dispute resolution', 'complaint procedure'],
    subsections: [
      {
        number: '7.1',
        title: 'Grievance Redressal Policy - Philosophy and Scope',
        content: 'Koyili Hospital is committed to maintaining a harmonious, fair, and respectful work environment where employees feel heard, valued, and supported. The grievance redressal mechanism provides formal channels for employees to raise concerns, seek resolution, and ensure their rights are protected:',
        points: [
          'Grievance Definition: A grievance is any real or perceived concern, dissatisfaction, complaint, or dispute raised by an employee regarding employment terms, working conditions, interpersonal relationships, policy interpretation, denial of rights, unfair treatment, or any work-related matter affecting the employee.',
          'Right to Raise Grievance: All employees, regardless of position or tenure, have the right to raise grievances without fear of retaliation or victimization. The Hospital encourages employees to voice concerns early before they escalate into serious issues.',
          'Coverage: The grievance mechanism covers all employee-related concerns except matters already covered under specific redressal mechanisms (sexual harassment handled by ICC, disciplinary appeals through established appeal process). However, the mechanism is flexible and accommodating.',
          'Multiple Channels: Employees can raise grievances through multiple channels - direct discussion with supervisor, HR Department, dedicated grievance officer, email grievance portal, suggestion boxes, or skip-level escalation to senior management.',
          'Confidentiality: All grievances are handled confidentially. Information is shared only on strict need-to-know basis with personnel involved in resolution. Employee identity is protected where feasible, though anonymous complaints have limited investigation scope.',
          'Non-Retaliation: Employees raising genuine grievances are protected from any form of retaliation, discrimination, or adverse consequences. Retaliation against complainants is serious misconduct subject to disciplinary action. However, frivolous or malicious complaints may attract consequences for the complainant.',
          'Fair and Timely Resolution: The Hospital is committed to acknowledging grievances promptly (within 3 working days), investigating thoroughly, resolving fairly, and communicating outcomes within reasonable timeframes (typically 30 days, complex cases may take longer with periodic updates).',
          'Escalation Mechanism: If resolution at one level is unsatisfactory or concerns are unresolved, employees have right to escalate to higher management levels ensuring their concerns receive adequate attention.',
          'Continuous Improvement: Grievance data is analyzed to identify systemic issues, policy gaps, managerial training needs, and areas for organizational improvement. Proactive measures are taken to prevent recurring grievances.'
        ]
      },
      {
        number: '7.2',
        title: 'Types of Grievances',
        content: 'Employees may raise grievances on a wide range of issues. Common categories include:',
        points: [
          'Employment Terms: Concerns regarding salary, benefits, allowances, increments, bonuses, leave entitlements, working hours, overtime payment, or any contractual terms discrepancies.',
          'Working Conditions: Issues related to workplace safety, inadequate facilities, equipment problems, unhygienic conditions, excessive workload, unsafe practices, or lack of resources to perform duties.',
          'Interpersonal Relations: Conflicts with colleagues, supervisor behavior issues, communication problems, lack of cooperation, favoritism, bullying (non-sexual), or toxic team dynamics.',
          'Policy Interpretation: Confusion or disputes regarding application or interpretation of HR policies, inconsistent policy enforcement, perceived unfairness in policy application, or requests for policy clarifications.',
          'Performance Management: Disagreement with performance ratings, perceived unfair evaluation, denial of promotion despite merit, non-recognition of achievements, or bias in performance assessment.',
          'Leave and Attendance: Denial or cancellation of approved leave, forced leave, attendance discrepancies, mismatch in leave records, or leave balance disputes.',
          'Career Development: Lack of training opportunities, denial of skill development programs, no career progression despite performance, blocked growth opportunities, or insufficient guidance.',
          'Transfers and Postings: Unwilling transfers without consultation, frequent reassignments causing hardship, lack of relocation support, or family circumstances not considered.',
          'Discrimination: Perceived discrimination based on gender, age, religion, caste, disability, marital status, or other protected characteristics in any employment decision.',
          'Harassment (Non-Sexual): Verbal abuse, intimidation, shouting, humiliation, unreasonable pressure, or creation of hostile work environment (sexual harassment through ICC).',
          'Denial of Rights: Non-payment or delayed payment of salary/dues, denial of statutory benefits, forced to work on holidays without compensation, denial of entitled leaves, or contract violations.',
          'Administrative Issues: Delay in issue of appointment/confirmation letters, errors in salary slips, insurance claims delays, PF/gratuity settlement delays, or documentation problems.',
          'Facility and Service Issues: Inadequate cafeteria services, transport problems, accommodation issues for transferred employees, medical facility access problems, or childcare facility concerns.',
          'Managerial Conduct: Supervisor micromanagement, unreasonable demands, public criticism or humiliation, biased behavior, lack of support, or abusive supervision.',
          'Change Management: Concerns about organizational changes, restructuring impacts, new systems/processes creating difficulties, inadequate training on changes, or communication gaps during transitions.'
        ]
      },
      {
        number: '7.3',
        title: 'Grievance Redressal Process - Step by Step',
        content: 'Structured process ensures systematic, fair, and timely handling of employee grievances:',
        points: [
          'Step 1 - Direct Resolution (Informal): Employees are encouraged to first discuss concerns directly with their immediate supervisor or concerned person informally. Many issues can be resolved through open communication and mutual understanding at this stage itself. Timeframe: Immediate to 3 days.',
          'Step 2 - Formal Grievance Submission: If informal resolution fails or issue is serious, employee submits formal grievance in writing through - (a) Grievance form available on HRMS, (b) Email to designated grievance officer or HR, (c) Physical letter to HR Department. Grievance should clearly state nature of complaint, persons involved, specific incidents with dates, impact on employee, and desired resolution.',
          'Step 3 - Acknowledgment: HR or grievance officer acknowledges receipt of grievance within 3 working days through email or written communication. Acknowledgment includes grievance reference number, name of officer handling, and expected timeline for resolution.',
          'Step 4 - Preliminary Assessment: Grievance officer reviews complaint to determine - nature and severity, jurisdiction (whether grievance mechanism applicable or other forum appropriate), evidence availability, urgency, and appropriate resolution approach. Timeframe: 3-5 days.',
          'Step 5 - Investigation: Based on assessment, investigation is conducted which may include - reviewing documents and records, interviewing complainant for detailed understanding, speaking with respondent/concerned persons for their perspective, examining evidence (emails, attendance records, CCTV if relevant), speaking with witnesses, and analyzing policies/procedures. Investigation is objective and unbiased. Timeframe: 10-15 days.',
          'Step 6 - Resolution Discussion: Based on investigation findings, resolution discussions held with parties involved. This may involve - mediation between conflicting parties, policy clarification and corrections, manager counseling on handling employee concerns, implementing corrective actions (policy compliance, process improvements), or disciplinary recommendations if policy violations found. Timeframe: 5-7 days.',
          'Step 7 - Decision and Communication: Grievance officer or resolution committee makes decision on - grievance validity (upheld, partially upheld, not upheld), actions taken or to be taken, rationale for decision, and recommendations. Decision communicated to complainant in writing explaining findings, actions, and rationale. Timeframe: 2-3 days after resolution discussions.',
          'Step 8 - Implementation and Follow-up: Agreed corrective actions are implemented promptly. HR follows up after 30 days to ensure - actions were effective, issue has not recurred, complainant is satisfied, and working relationship restored. Timeframe: Ongoing for 60-90 days.',
          'Step 9 - Escalation (if needed): If complainant is dissatisfied with resolution or believes issue not adequately addressed, escalation to next level (HOD, senior management, or appellate committee) is permitted. Escalation process similar but with higher authority review. Timeframe: Additional 15-30 days.',
          'Step 10 - Closure: Once resolution is implemented, verified effective, and parties are satisfied, grievance is formally closed. Closure communicated to complainant. Records maintained confidentially. Grievance remains closed unless new concerns emerge.'
        ]
      },
      {
        number: '7.4',
        title: 'Grievance Officer and Committee',
        content: 'Dedicated personnel ensure professional and unbiased grievance handling:',
        points: [
          'Grievance Officers: Hospital appoints trained grievance officers (typically senior HR personnel) responsible for receiving, investigating, and resolving grievances. Officers have necessary authority, independence, and skills for effective handling.',
          'Grievance Committee: For complex or serious grievances, a grievance committee may be constituted comprising senior managers from different departments, HR representative, and sometimes external expert. Committee ensures collective wisdom and fairness.',
          'Independence and Objectivity: Grievance officers/committees operate independently without interference. They are not involved in the matter being grieved. Investigations are objective, fact-based, and free from bias.',
          'Training: Grievance handling personnel receive training on - active listening, conflict resolution, mediation techniques, investigation methods, confidentiality, empathy, legal aspects, and documentation.',
          'Accessibility: Grievance officers are easily accessible to employees. Contact details published on intranet. Regular grievance awareness sessions conducted. Employees can meet officers confidentially.',
          'Reporting: Grievance officers periodically report to senior management on grievance trends, resolution rates, pending cases, systemic issues identified, and recommendations for preventive measures.'
        ]
      },
      {
        number: '7.5',
        title: 'Protection Against Retaliation',
        content: 'Robust safeguards protect employees from adverse consequences of raising grievances:',
        points: [
          'Non-Retaliation Policy: The Hospital has zero-tolerance for retaliation against employees who raise grievances in good faith, participate as witnesses, or assist in grievance investigations. Retaliation includes any adverse employment action - termination, demotion, transfer, denial of promotion, unfavorable shifts, excessive scrutiny, isolation, or any form of punishment.',
          'Monitoring: HR monitors for signs of retaliation after grievance filing. Complainants are contacted periodically to check if they face any adverse consequences. Any retaliation reports investigated immediately.',
          'Disciplinary Action: Proven retaliation is serious misconduct warranting disciplinary action against the retaliator, which may include termination. Managers are specifically trained on non-retaliation obligations.',
          'Confidentiality as Protection: Where possible, complainant identity is kept confidential during investigation. However, in cases requiring confrontation, identity may be disclosed but with strong warnings against retaliation.',
          'Transfer Options: In cases where working relationship is irretrievably damaged post-grievance, complainant may be offered transfer to different team/department as protective measure (if they desire).',
          'Whistleblower Protection: Employees reporting serious violations (fraud, safety hazards, legal breaches) receive enhanced protection. Anonymous reporting channels available for whistleblowers.'
        ]
      },
      {
        number: '7.6',
        title: 'Malicious and Frivolous Complaints',
        content: 'While the Hospital encourages genuine grievances, protection against abuse of the system is necessary:',
        points: [
          'Good Faith Requirement: Grievance mechanism is for genuine concerns raised in good faith. Employees should have reasonable basis for their complaints even if investigations prove otherwise.',
          'Malicious Complaints: False complaints made knowingly with intent to harm another person, settle personal scores, or gain unfair advantage are considered malicious. Malicious complaints are serious misconduct.',
          'Frivolous Complaints: Complaints that are clearly baseless, trivial matters blown out of proportion, or repeated complaints on same resolved issue without new facts are frivolous.',
          'Investigation: If complaint appears malicious/frivolous, investigation examines - complainant\'s intent, evidence of falsification, pattern of complaints, personal conflicts, and whether complaint was made in good faith despite being unsubstantiated.',
          'Consequences: Proven malicious or frivolous complaints result in - counseling for first instance, written warning for repeated instances, or disciplinary action including termination for serious abuse of grievance mechanism.',
          'Differentiation: Unsubstantiated genuine complaints are different from malicious complaints. Genuine complaints that cannot be proved are closed without prejudice to complainant.'
        ]
      },
      {
        number: '7.7',
        title: 'Record Keeping and Analysis',
        content: 'Comprehensive documentation supports fairness, learning, and continuous improvement:',
        points: [
          'Grievance Register: HR maintains confidential grievance register recording all formal grievances - date received, employee details, nature of grievance, assigned officer, investigation summary, resolution, and closure date.',
          'File Documentation: Each grievance has separate file containing - complaint letter, investigation notes, witness statements, evidence collected, correspondence, resolution decisions, and follow-up records.',
          'Data Analysis: Grievance data analyzed quarterly for trends - frequent complaint types, departments with high grievances, common policy issues, seasonal patterns, resolution timeframes, and satisfaction levels.',
          'Management Reporting: Summary grievance reports presented to senior management highlighting key issues, systemic problems, and recommendations for policy improvements, training needs, or managerial interventions.',
          'Confidentiality: Grievance records are highly confidential with access limited to grievance officers, concerned managers (need-to-know), and senior management. Records secured physically and digitally.',
          'Retention: Grievance records retained for 7 years post-closure for reference, audits, and legal compliance.',
          'Learning and Prevention: Insights from grievances used to improve policies, enhance manager training, fix systemic issues, improve communication, and prevent future grievances proactively.'
        ]
      }
    ]
  },
  section8: {
    id: 'section8',
    number: 'SECTION VIII',
    title: 'SEPARATION FROM EMPLOYMENT',
    searchTerms: ['separation', 'resignation', 'retirement', 'termination', 'exit', 'notice period', 'final settlement'],
    subsections: [
      {
        number: '8.1',
        title: 'Modes of Separation - Comprehensive Overview',
        content: 'Employment relationship at Koyili Hospital may end through various modes, each with specific procedures, notice requirements, and settlement terms:',
        points: [
          'Voluntary Resignation: Employee initiates separation by tendering resignation for personal reasons, career advancement, relocation, family circumstances, or better opportunities. Most common and mutual mode of separation.',
          'Retirement: Separation upon reaching retirement age or through voluntary early retirement schemes. Retirement is planned separation with defined benefits.',
          'Termination by Hospital: Employer-initiated separation due to misconduct, poor performance, redundancy, restructuring, or breach of contract. May be with or without cause.',
          'Mutual Separation: By mutual agreement between employee and Hospital, typically with negotiated terms, notice waivers, and settlement. Used when both parties agree separation is in best interest.',
          'End of Contract: Natural conclusion of fixed-term contracts upon completion of contract period or project. Contract employees separate automatically unless renewed.',
          'Death During Service: Unfortunate separation due to employee death. Benefits payable to legal heirs or nominees as per policy and law.',
          'Abandonment of Employment: Deemed separation when employee remains absent without authorization for extended period (typically 7-10 consecutive days) without communication, indicating intent to abandon employment.',
          'Medical Incapacity: Separation when employee is medically unfit to continue employment based on Medical Board assessment, and reasonable accommodations are not feasible.',
          'Superannuation: Compulsory retirement upon reaching maximum service age, providing dignified exit with full retirement benefits.',
          'Voluntary Retirement Scheme (VRS): Special schemes offering enhanced benefits to employees willing to retire voluntarily before reaching retirement age, used during restructuring or cost optimization.'
        ]
      },
      {
        number: '8.2',
        title: 'Voluntary Resignation - Detailed Procedures',
        content: 'When an employee decides to resign, the following comprehensive procedures ensure smooth transition and proper closure:',
        points: [
          'Resignation Letter: Employee submits formal written resignation letter addressed to immediate supervisor and copied to HR Department. Letter should state - intention to resign, last working day (respecting notice period), brief reason (optional), appreciation for opportunities. Letter date marks the start of notice period.',
          'Notice Period Requirements: Notice period as specified in appointment letter, typically - 30 days for junior staff, 60 days for middle management, 90 days for senior management and critical positions. Notice period cannot be shortened without mutual consent and HR approval.',
          'Acceptance of Resignation: Supervisor forwards resignation to HR with recommendation. HR formally accepts resignation acknowledging receipt, confirming last working day, and outlining exit procedures. Acceptance does not bind Hospital if employee reconsiders within reasonable time.',
          'Early Release Requests: Employee may request early release (shorter notice period) citing urgent circumstances. Early release is discretionary based on operational feasibility, replacement availability, and knowledge transfer status. May require payment in lieu of notice.',
          'Notice Period Buyout: In exceptional cases, employee may negotiate notice period buyout by paying Hospital equivalent of notice period salary. Hospital may accept, reject, or negotiate based on business needs.',
          'Withdrawal of Resignation: Employee may withdraw resignation before acceptance or within short grace period (typically 3 days) if accepted. Withdrawal subject to Hospital acceptance. Multiple resignation-withdrawal cycles viewed negatively.',
          'Retention Discussions: For valued employees, manager or HR may conduct retention discussions exploring concerns and possibilities to retain employee through role changes, compensation adjustments, development opportunities, or work arrangements. Counter-offers are made judiciously.',
          'Working During Notice: Employees must work diligently during notice period, maintain professional standards, and complete assigned tasks. Taking leave extensively during notice period requires approval. Sick leave during notice may extend notice period.',
          'Absconding During Notice: Leaving without completing notice period without approval is breach of contract. Hospital may withhold dues, recover notice period salary, and provide negative reference.'
        ]
      },
      {
        number: '8.3',
        title: 'Exit Formalities and Clearance Process',
        content: 'Comprehensive exit process ensures proper handover, recovery of Hospital property, settlement of dues, and knowledge preservation:',
        points: [
          'Exit Checklist: HR provides exit checklist outlining all clearances required, handover procedures, return of assets, and documentation. Checklist ensures no step is missed.',
          'Knowledge Transfer and Handover: Employee must document key responsibilities, ongoing projects, pending tasks, critical contacts, passwords, file locations, and processes. Detailed handover note prepared and discussed with supervisor or replacement. Handover period typically last week of notice.',
          'Return of Hospital Property: All Hospital property must be returned - ID card and access cards, laptops, mobile phones, tablets, office keys, files and documents, stationery, books from library, uniforms, vehicles (if provided), any other equipment or materials. IT Department verifies return of all devices and data deletion.',
          'IT Access Revocation: IT access (email, systems, networks, applications) revoked on last working day. Employee must backup personal data before revocation. Official data remains Hospital property.',
          'Departmental Clearances: Employee obtains clearance certificates from - Reporting Manager (work handover complete), Accounts (no pending dues, advances cleared), IT (devices returned, accounts closed), Library (books returned), Transport (vehicles returned, if applicable), Admin (keys, access cards returned), Payroll (final calculations confirmed). Each department signs clearance form.',
          'No Dues Certificate: After all departmental clearances, HR issues No Dues Certificate confirming employee has no outstanding liabilities, all dues settled, and clearance complete.',
          'Exit Interview: HR conducts confidential exit interview understanding - reasons for leaving, feedback on work environment, suggestions for improvement, concerns about policies or management, overall satisfaction, and likelihood to recommend Hospital as employer. Exit interview data provides valuable organizational insights.',
          'Service Certificate: Upon request, Hospital issues Service Certificate (experience letter) stating - period of employment, designation(s) held, brief job responsibilities, and conduct (typically "good" unless serious issues). Certificate is factual and professional.',
          'Full and Final Settlement: After complete clearance, final settlement calculated including - salary up to last working day, leave encashment for accumulated earned leave, any unpaid bonuses or incentives, reimbursements of pending expenses, recovery of advances or loans, notice period shortfall deduction (if applicable). Full and Final (F&F) statement provided to employee.',
          'Settlement Timeline: Final settlement processed within 30-45 days of last working day or as per local labor laws. Provident Fund withdrawal and gratuity settlement may take additional time as per statutory procedures.',
          'Reference and Recommendations: With prior consent, Hospital may provide employment references to prospective employers of resigned employees. References are factual and professional.'
        ]
      },
      {
        number: '8.4',
        title: 'Retirement - Procedures and Benefits',
        content: 'Retirement marks honorable conclusion of an employee\'s career. Hospital ensures dignified retirement with full benefits:',
        points: [
          'Retirement Age: Standard retirement age is 60 years as per Hospital policy. Employees attaining 60 years retire on the last day of the month in which birthday falls, unless service extension granted.',
          'Retirement Intimation: HR notifies employees 6 months before retirement date. Notification includes retirement procedures, benefits entitlements, documentation requirements, and contact person for queries.',
          'Pre-Retirement Planning: Hospital may conduct pre-retirement counseling sessions on financial planning, pension benefits, post-retirement health insurance, lifestyle adjustments, and legal matters.',
          'Service Extension: In exceptional cases and for specialized roles, Hospital may extend service beyond retirement age on year-to-year contract basis. Extension is discretionary, based on health fitness, organizational need, and mutual agreement.',
          'Retirement Benefits: Retiring employees receive - Full Provident Fund accumulation with employer contribution and interest, Gratuity as per Payment of Gratuity Act (15 days salary for each completed year of service, maximum INR 20 lakhs or as per law), Leave encashment for accumulated earned leave, Pension (if applicable under Hospital pension scheme), Any other contractual retirement benefits.',
          'Health Insurance Continuation: Post-retirement health insurance for retiree and spouse may be offered as per policy, with premium either subsidized by Hospital or fully employee-paid.',
          'Superannuation Fund: If enrolled in superannuation scheme, accumulated corpus paid out as per scheme terms - lump sum, annuity, or combination.',
          'Retirement Ceremony: Hospital organizes farewell or retirement ceremony recognizing retiree contributions, service years, and achievements. Token of appreciation presented.',
          'Retirement Gift: Monetary gift, memento, or gift voucher presented as mark of gratitude for long service.',
          'Alumni Network: Retirees invited to join Hospital alumni network for continued association, attending events, and maintaining connections.',
          'Settlement Processing: Retirement settlements processed expeditiously. PF and gratuity follow statutory timelines. Hospital dues settled within 30-45 days.'
        ]
      },
      {
        number: '8.5',
        title: 'Termination by Hospital - Types and Procedures',
        content: 'Employer-initiated separation is serious action taken for justifiable reasons following due process:',
        points: [
          'Termination for Cause (Misconduct): Separation due to proven gross misconduct, serious policy violations, criminal acts, or breach of trust after proper disciplinary inquiry as per Section VI. Termination for cause may be immediate without notice period or payment in lieu. Employee may forfeit certain benefits.',
          'Termination for Poor Performance: Separation due to sustained unsatisfactory performance despite Performance Improvement Plans, counseling, support, and reasonable opportunities to improve. Performance termination follows due process with documented performance issues and PIP records.',
          'Termination During Probation: Probationary employees may be terminated with shorter notice (typically 15-30 days or as per appointment letter) if found unsuitable for role, without elaborate inquiry process. Probation termination is not disciplinary but assessment-based.',
          'Redundancy and Retrenchment: Separation due to position elimination, department closure, restructuring, or downsizing driven by business needs. Redundancy is not employee fault. Notice period and redundancy compensation as per Industrial Disputes Act or employment contract provided.',
          'Medical Incapacity Termination: When employee is permanently unable to perform essential job functions due to illness, disability, or medical condition despite reasonable accommodations, and Medical Board certifies incapacity, employment may be terminated compassionately with full benefits.',
          'Contractual Expiry: Fixed-term or project-based contracts terminate automatically upon completion of term or project. Notice of non-renewal provided if contract is not being extended.',
          'Termination Procedure: For termination with cause - Disciplinary inquiry conducted as per Section VI, Findings documented, Employee given opportunity to respond, Termination decision made by competent authority, Termination letter issued stating grounds, last working day, and settlement terms. For performance termination - Performance issues documented, PIP implemented and outcome recorded, Decision reviewed by HR and senior management, Termination communicated professionally.',
          'Notice Period or Payment in Lieu: Terminations without cause (redundancy, restructuring) require notice period as per contract or payment in lieu of notice. Terminations for gross misconduct may not require notice.',
          'Severance Pay: For redundancy/retrenchment, severance payment as per law (typically 15 days average pay for each completed year of service) in addition to statutory benefits.',
          'Termination Communication: Termination communicated with sensitivity in private setting. Written termination letter provided stating effective date, reason (if not confidential), notice/payment terms, and final settlement process.',
          'Exit Formalities for Terminated Employees: Same clearance process as resignation, though access may be revoked immediately for security reasons. Final settlement completed as per timelines.',
          'Legal Compliance: All terminations comply with labor laws including Industrial Disputes Act, Standing Orders, and contract terms. Legal vetting for complex terminations.'
        ]
      },
      {
        number: '8.6',
        title: 'Full and Final Settlement Components',
        content: 'Comprehensive settlement ensures all financial dues are properly calculated and paid:',
        points: [
          'Salary for Working Days: Pro-rata salary from last salary payment date till last working day including basic, allowances, and variable pay.',
          'Leave Encashment: Encashment of accumulated earned leave balance at current basic salary rate. Maximum 240 days encashable.',
          'Notice Period Recovery: If employee did not serve full notice period without approval, salary equivalent to shortfall days deducted from settlement.',
          'Bonus and Incentives: Pro-rata annual bonus and pending performance incentives for the period worked in financial year.',
          'Expense Reimbursements: Any pending expense claims, travel reimbursements, or allowances due.',
          'Loan and Advance Recovery: Outstanding loans, salary advances, or other dues to Hospital deducted from settlement.',
          'Asset Recovery: Cost of unreturned assets or damaged property deducted.',
          'Tax Deductions: Income tax on leave encashment and other components deducted as per IT laws.',
          'Provident Fund: PF accumulation (employee + employer contribution + interest) withdrawn as per EPFO procedures. Employee submits withdrawal form. Transfer to new employer PF or withdrawal to bank account.',
          'Gratuity Payment: For employees with 5+ years service, gratuity calculated and paid. Gratuity payment within 30 days of separation as per Gratuity Act.',
          'Insurance Settlements: Group health insurance continues till month-end. Final premium adjustments. Personal accident insurance claim assistance if needed.',
          'Settlement Statement: Detailed F&F statement provided showing all credits, deductions, and net payable amount with breakup.',
          'Payment Mode: Settlement paid through bank transfer to employee account or cheque as per preference.',
          'Timeline Compliance: Settlement completed within 30-45 days of last working day for resignations, 45-60 days for terminations. PF and gratuity follow statutory timelines.'
        ]
      },
      {
        number: '8.7',
        title: 'Death During Service',
        content: 'In the unfortunate event of employee death during employment, Hospital provides support and benefits to family:',
        points: [
          'Immediate Support: Immediate assistance to family with hospital formalities, transportation, and any urgent financial needs.',
          'Nominee Benefits: All dues, benefits, and entitlements paid to registered nominee or legal heirs - salary till date of death, leave encashment, pending bonuses, Provident Fund accumulation, Gratuity (regardless of 5-year service requirement), Group Life Insurance claim (if applicable), Ex-gratia payment as per policy.',
          'Documentation: Family provides death certificate, legal heir certificate/succession certificate, nominee details, and bank account information.',
          'Expedited Processing: Death settlements processed expeditiously, typically within 30 days, to provide financial relief to family.',
          'Compassionate Appointment: As per Hospital policy and applicable laws, one family member may be considered for compassionate appointment to a suitable position.',
          'Continued Insurance: Health insurance for dependent family may be continued for specified period (typically 3-6 months) to ease transition.',
          'Memorial: Hospital may organize memorial service or condolence meeting honoring deceased employee contributions and offering support to family.'
        ]
      },
      {
        number: '8.8',
        title: 'Post-Separation Obligations',
        content: 'Certain obligations continue after employment ends:',
        points: [
          'Confidentiality: Confidentiality obligations regarding Hospital patient information, proprietary data, trade secrets, and sensitive information continue perpetually even after separation.',
          'Non-Compete: If non-compete clause exists in contract, employee bound not to join competing organizations or start competing ventures for specified period and geography.',
          'Non-Solicitation: Employee bound not to solicit Hospital clients, patients, or employees for specified period post-separation.',
          'Intellectual Property: All work products, inventions, research, or IP created during employment remain Hospital property.',
          'Return of Information: Any Hospital information in any form must be returned and not retained.',
          'Cooperation: Former employees may be required to cooperate in ongoing matters, investigations, or litigation involving their tenure.',
          'No Disparagement: Both parties should refrain from making negative or disparaging statements about each other publicly.'
        ]
      }
    ]
  },
  section9: {
    id: 'section9',
    number: 'SECTION IX',
    title: 'PROBATION AND CONFIRMATION',
    searchTerms: ['probation', 'confirmation', 'trial period', 'assessment', 'permanent status'],
    subsections: [
      {
        number: '9.1',
        title: 'Probation Policy - Purpose and Framework',
        content: 'Probation is a mutual assessment period allowing the Hospital to evaluate an employee\'s suitability, performance, skills, conduct, and cultural fit, while enabling the employee to assess role alignment and organizational compatibility:',
        points: [
          'Purpose of Probation: Probation provides structured opportunity to assess - technical competence and job knowledge, quality and consistency of work output, learning agility and adaptability, professional conduct and attitude, interpersonal skills and teamwork, alignment with Hospital values and culture, attendance and punctuality, compliance with policies and procedures. Probation benefits both employer and employee by reducing long-term commitment risk.',
          'Standard Probation Period: All new employees (except certain senior appointments with negotiated terms) serve standard probation period of 6 months from date of joining. Six months provides adequate time for comprehensive assessment across various work situations, seasons, and responsibilities.',
          'Probation Start Date: Probation commences from official date of joining as recorded in appointment letter. Absences during probation (other than approved leave) do not extend probation automatically but may be considered in assessment.',
          'Employment Status During Probation: Probationers are employees with specific terms - entitled to salary and basic benefits as per appointment letter, subject to abbreviated policies in some areas (shorter notice period, limited leave entitlements initially), performance under continuous evaluation, employment can be terminated with shorter notice by either party without extensive justification.',
          'No Automatic Confirmation: Completion of probation period does not automatically confer permanent status. Confirmation is an affirmative decision based on satisfactory performance assessment, not a passive process.',
          'Probation for Internal Transfers: Employees promoted or transferred to significantly different roles may serve probation period in new role (typically 3-6 months depending on role change magnitude). During this period, they retain permanent employee status but new role assignment is probationary.',
          'Probation for Re-hires: Former employees rejoining Hospital after gap may serve fresh probation or abbreviated probation depending on previous tenure, performance history, and gap duration as determined at time of re-hiring.',
          'Documentation: Probation terms including duration, assessment criteria, review schedule, and confirmation conditions are clearly specified in appointment letter ensuring transparency.'
        ]
      },
      {
        number: '9.2',
        title: 'Probation Period Duration and Extensions',
        content: 'While standard probation is 6 months, provisions exist for extensions based on assessment needs:',
        points: [
          'Standard Duration: Six months (180 days) from date of joining is standard probation for most roles - frontline staff, administrative roles, technical positions, middle management. Six months balances thorough assessment with reasonable commitment.',
          'Extended Probation for Complex Roles: Senior management positions, highly specialized roles, or positions requiring extensive training may have longer initial probation (9-12 months) specified in appointment letter upfront.',
          'Extension of Probation: If performance assessment at 6 months is inconclusive or shows improvement potential but not yet confirmation readiness, probation may be extended for additional period up to maximum 3 months (total 9 months). Extension requires - documented performance gaps or concerns, reasonable expectation that employee can meet standards with more time, specific improvement areas and support plan, formal extension letter to employee, typically not extended beyond 3 additional months.',
          'Extension Communication: Extension decision communicated to employee in writing before probation expiry, specifying - extended period duration, specific areas requiring improvement, support to be provided, next review date, consequences if improvement not demonstrated. Extension letter maintains transparency and fairness.',
          'Multiple Extensions: Generally, only one extension of up to 3 months is permitted. Multiple extensions are discouraged as they create uncertainty and usually indicate unsuitable hiring. If employee cannot demonstrate suitability in 9 months, separation is appropriate course.',
          'Exceptional Circumstances: In rare cases (extended medical leave, training delays, project postponement), probation may be extended for reasons beyond employee control. Such extensions are administrative, not performance-related.'
        ]
      },
      {
        number: '9.3',
        title: 'Performance Assessment During Probation',
        content: 'Structured assessment ensures objective evaluation and developmental support throughout probation:',
        points: [
          'Assessment Objectives: Probation assessment focuses on - role-specific technical competencies and skills, quality and accuracy of work output, productivity and ability to meet deadlines, learning curve and adaptation to Hospital systems, initiative and problem-solving approach, teamwork and collaboration, communication effectiveness, adherence to policies and professional conduct, attendance, punctuality, and reliability.',
          'Continuous Monitoring: Supervisors monitor probationer performance continuously through - daily work observation and interaction, review of work outputs and assignments, feedback from colleagues and internal customers, attendance and punctuality tracking, adherence to policies and procedures, response to feedback and coaching.',
          'Formal Review Checkpoints: Structured performance reviews conducted at - One Month: Initial settling-in review, early feedback, clarification of expectations, addressing initial challenges, Three Months: Mid-probation formal review, detailed assessment of progress, identification of development areas, corrective actions if needed, Six Months: Final probation assessment, comprehensive evaluation, confirmation decision. Reviews are documented with employee acknowledgment.',
          'Assessment Criteria and Tools: Probation evaluation uses - Probation Assessment Form covering technical competencies, behavioral competencies, and overall performance, Rating scale (typically Exceeds Expectations, Meets Expectations, Needs Improvement, Unsatisfactory), Specific examples and incidents supporting ratings, Supervisor comments and recommendations, Employee self-assessment and comments.',
          'Feedback and Development: Regular feedback is essential during probation - Immediate feedback on critical issues or excellent work, Weekly or bi-weekly one-on-one check-ins, Constructive guidance on improvement areas, Recognition of achievements and progress, Support through training, mentoring, resources.',
          'Documentation: All probation reviews, feedback sessions, improvement plans, and assessment forms are documented and maintained in employee file for transparency, fairness, and future reference.'
        ]
      },
      {
        number: '9.4',
        title: 'Confirmation Process and Criteria',
        content: 'Confirmation marks transition from probationary to permanent status with enhanced job security and full benefits:',
        points: [
          'Confirmation Eligibility: At successful completion of probation, employees become eligible for confirmation. Eligibility requires - Satisfactory or better performance ratings in all probation reviews, Consistent demonstration of required competencies, Good attendance record (no excessive absences), No major disciplinary issues or policy violations, Adherence to Hospital values and professional conduct, Positive feedback from supervisor and colleagues, Completion of mandatory training and induction programs.',
          'Confirmation Initiation: Approximately 15 days before probation completion, supervisor initiates confirmation process by - Completing final probation assessment form, Recommending confirmation or alternative action (extension, termination), Providing detailed performance summary, Submitting to HR with supporting documents.',
          'HR Review: HR reviews confirmation recommendation verifying - Probation period completion, Assessment documentation completeness, Performance ratings consistency, Attendance and conduct records, Compliance with policies, Any pending issues or concerns. HR may request additional information or clarifications.',
          'Competent Authority Approval: Based on supervisor recommendation and HR review, competent authority (typically Department Head or designated senior manager) approves confirmation. Authority reviews - Overall performance assessment, Organizational needs and role continuation, Any concerns or reservations, Final decision on confirmation.',
          'Confirmation Letter: Upon approval, HR issues formal Confirmation Letter stating - Confirmation of permanent employment status, Effective date of confirmation (typically day after probation completion), Congratulations and recognition of satisfactory performance, Reference to full benefits now applicable, Commitment to continued high performance. Confirmation letter is significant milestone in employee career.',
          'Benefits Upon Confirmation: Confirmed employees receive - Permanent employment status with enhanced job security, Full leave entitlements with accumulation rights, Eligibility for all benefits (medical, insurance, bonuses) as per policy, Participation in provident fund, gratuity, and retirement benefits, Consideration for promotions and career progression, Standard notice period for separation (longer than probationers).',
          'Confirmation Ceremony: Some departments conduct informal recognition or announcement welcoming confirmed employees as permanent team members.',
          'Confirmation Timeline: Confirmation process completed within 15 days of probation expiry ensuring no employment status uncertainty. Any delay in confirmation processing does not affect employee status - they are deemed confirmed if probation period elapsed without adverse communication.'
        ]
      },
      {
        number: '9.5',
        title: 'Non-Confirmation and Termination During Probation',
        content: 'When performance or suitability concerns exist, non-confirmation or termination during probation may occur:',
        points: [
          'Grounds for Non-Confirmation: Probation may not be confirmed due to - Consistently unsatisfactory performance despite feedback and support, Inability to meet role requirements and expectations, Lack of required technical skills or competencies, Poor attendance, frequent absenteeism, or tardiness, Serious misconduct or policy violations, Failure to adapt to Hospital culture or work environment, Negative feedback from colleagues or internal customers, Behavioral concerns or interpersonal conflicts, Qualification or credential discrepancies discovered post-hiring.',
          'Early Termination During Probation: Employment may be terminated before probation completion (even in first month) for - Gross misconduct (theft, violence, serious policy breach), Complete unsuitability for role evident early, Falsification of credentials or background verification failures, Abandonment or prolonged unauthorized absence, Serious performance deficiencies with no improvement potential.',
          'Notice Period for Probationers: Termination during probation requires shorter notice period as specified in appointment letter - Typically 15-30 days notice from either party, or Payment in lieu of notice by either party, Immediate termination without notice for gross misconduct. Shorter notice reflects mutual trial nature of probation.',
          'Termination Communication: Termination during probation communicated professionally - Private meeting with supervisor and HR, Verbal communication followed by written termination letter, Letter states effective date, mentions unsatisfactory probation outcome (without extensive details), Outlines exit formalities and settlement process.',
          'Exit Process for Probationers: Similar to regular separations - Return of Hospital property and assets, Departmental clearances, Exit formalities completion, Final settlement of salary up to last working day and pro-rata benefits, No exit interview mandatory but may be conducted.',
          'Termination Documentation: Reasons for probation termination documented internally for - Legal compliance and record-keeping, Defense against potential disputes, Learnings for future hiring, Maintain in personnel file. However, detailed reasons typically not disclosed to employee unless requested.',
          'Probation Termination Rights: While probation allows easier separation, basic fairness maintained - No discrimination based on protected characteristics, Termination for legitimate work-related reasons, Dignity and respect maintained in communication, Settlement of all legitimate dues.'
        ]
      },
      {
        number: '9.6',
        title: 'Probationer Rights and Support',
        content: 'While on probation, employees have specific rights and access to support ensuring fair treatment:',
        points: [
          'Right to Clear Expectations: Probationers entitled to - Clear written job description and performance expectations, Defined assessment criteria and review schedule, Information about probation terms, conditions, and confirmation process, Access to policies, procedures, and resources needed for success.',
          'Right to Fair Assessment: Objective, non-discriminatory performance evaluation based on - Job-relevant criteria and competencies, Observable work performance and behaviors, Documented evidence and specific examples, Consistent standards applied to all probationers.',
          'Right to Feedback and Support: Regular constructive feedback on performance, Guidance on improvement areas, Access to training and development resources, Reasonable opportunity to improve when issues identified, Support from supervisor and HR for successful probation completion.',
          'Right to Dignity and Respect: Professional treatment by all staff, Respect for privacy and confidentiality, No harassment, discrimination, or humiliation, Opportunity to voice concerns or challenges.',
          'Compensation and Benefits: Salary and benefits as specified in appointment letter (even if different from confirmed employees in some aspects), Timely and accurate salary payment, Statutory benefits (PF, ESI where applicable), Basic leave entitlements (though may be pro-rata).',
          'Right to Exit: Probationer can resign during probation with notice period as per appointment letter if role is not suitable. Resignation during probation is legitimate option without stigma.',
          'Grievance Rights: Probationers can raise legitimate grievances about - Unfair treatment, discrimination, or harassment, Policy violations, Unsafe work conditions, Non-payment or incorrect payment of dues. Grievances addressed through normal channels.'
        ]
      },
      {
        number: '9.7',
        title: 'Special Probation Situations',
        content: 'Certain situations require adapted probation handling:',
        points: [
          'Medical Leave During Probation: If probationer takes extended medical leave (beyond few days), probation period typically extended by leave duration to ensure adequate assessment opportunity. Extension is administrative, not performance-based.',
          'Maternity During Probation: Female employees who go on maternity leave during probation - Probation extended to allow post-maternity assessment, Employment continues with maternity benefits as per law, Confirmation deferred till return and adequate performance demonstration, No discrimination due to maternity.',
          'Change of Role During Probation: If probationer is transferred to different role during probation (due to restructuring or better fit), probation period may restart or be extended for new role assessment.',
          'Training-Intensive Roles: Roles requiring extensive initial training (specialized equipment, complex procedures) may have assessment focused on post-training performance, with training period considered as learning phase.',
          'Pandemic or Emergency Situations: During unusual circumstances (pandemics, natural disasters) affecting work arrangements or assessments, probation may be extended or assessment adjusted considering situation constraints.',
          'Second Probation (Promotional Probation): Employees promoted to significantly higher role may serve probation in new role while retaining permanent status in organization. Failure in promotional probation results in reversion to previous role, not termination.'
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
