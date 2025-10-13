// KOYILI HOSPITAL – HUMAN RESOURCES BY-LAWS
// Complete Comprehensive Content - 115 Pages - 30 Sections
// Board Approved Document - Version 2.0 - Effective February 1, 2024

export const byLawsMetadata = {
  title: 'KOYILI HOSPITAL – HUMAN RESOURCES BY-LAWS',
  documentCode: 'KH-HR-BL/001/2024',
  versionNumber: '2.0',
  effectiveDate: 'February 1, 2024',
  approvedOn: 'January 15, 2024',
  approvedBy: 'Board of Directors, Koyili Hospital',
  issuedBy: 'Human Resource Department, Koyili Hospital',
  classification: 'Official Board-Approved Document',
  nextReviewDate: 'January 2027'
};

export const byLawsData = {
  preamble: {
    id: 'preamble',
    title: 'PREAMBLE',
    searchTerms: ['preamble', 'introduction', 'purpose', 'objectives', 'whereas'],
    content: `WHEREAS, Koyili Hospital (hereinafter referred to as "the Hospital") is a distinguished healthcare institution committed to delivering excellence in patient care, medical education, research, and community health services; and

WHEREAS, the Hospital recognizes that its most valuable asset is its human capital, comprising medical professionals, paramedical staff, administrative personnel, technical experts, and support staff who collectively contribute to the Hospital's mission and vision; and

WHEREAS, it is imperative to establish a comprehensive, transparent, and equitable framework governing all aspects of human resource management, including recruitment, employment terms, compensation, benefits, performance management, career development, conduct standards, and separation procedures; and

WHEREAS, the Hospital is committed to fostering a workplace culture founded upon principles of dignity, respect, equal opportunity, professional excellence, ethical conduct, and continuous improvement; and

WHEREAS, these By-Laws are designed to ensure compliance with all applicable laws, statutes, regulations, and industry best practices while promoting organizational effectiveness and employee welfare; and

WHEREAS, the Board of Directors of Koyili Hospital, in exercise of the powers vested in them and in furtherance of the Hospital's commitment to institutional excellence, deems it necessary and expedient to enact comprehensive Human Resources By-Laws;

NOW THEREFORE, the Board of Directors of Koyili Hospital hereby enacts, ordains, and establishes these Human Resources By-Laws, which shall be binding upon all employees, contractors, consultants, and personnel associated with the Hospital, and shall be effective from the date specified herein.

These By-Laws supersede all previous HR policies, directives, circulars, and guidelines to the extent of any inconsistency, and shall be read in conjunction with applicable employment contracts, regulatory requirements, and supplementary policies as may be issued from time to time.`
  },

  section1: {
    id: 'section1',
    number: 'SECTION I',
    title: 'DEFINITIONS AND INTERPRETATIONS',
    searchTerms: ['definitions', 'interpretations', 'terms', 'glossary', 'meaning'],
    subsections: [
      {
        number: '1.1',
        title: 'Definitions',
        content: 'For the purposes of these By-Laws, unless the context otherwise requires, the following terms shall have the meanings assigned to them below:',
        points: [
          '"Hospital" means Koyili Hospital, a healthcare institution established under applicable laws, and includes all its branches, divisions, departments, units, affiliated centers, and associated facilities, wherever located.',
          '"Employee" means any person who is employed by the Hospital under a contract of service, whether permanent, probationary, contractual, temporary, part-time, or on any other basis, and includes medical practitioners, nursing staff, paramedical personnel, administrative staff, technical staff, and support staff.',
          '"Management" means the Board of Directors, Medical Director, Chief Executive Officer, Administrator, Chief Operating Officer, and such other senior management personnel as may be designated by the Board from time to time.',
          '"Board" or "Board of Directors" means the governing body of Koyili Hospital vested with the supreme authority for policy formulation, strategic direction, and oversight of the Hospital\'s operations.',
          '"Department" means any organizational unit, division, section, or functional area within the Hospital structure, including but not limited to clinical departments, administrative departments, support services, and ancillary services.',
          '"Competent Authority" means the designated officer, manager, director, or committee authorized to make decisions, grant approvals, or exercise powers under these By-Laws, as may be specified in the organizational delegation of authority matrix.',
          '"Working Day" or "Business Day" means any day other than Sunday, Saturday (if applicable), national holidays, state holidays, and such other holidays as may be declared by the Hospital from time to time.',
          '"Continuous Service" means uninterrupted service with the Hospital, calculated from the date of joining to the relevant date of reference, and includes authorized leaves, approved absences, and periods of suspension where the employee is subsequently exonerated.',
          '"Basic Salary" means the fixed monthly remuneration paid to an employee, excluding all allowances, benefits, incentives, bonuses, and other variable components of compensation.',
          '"Gross Salary" means the total monthly remuneration including Basic Salary and all allowances such as House Rent Allowance, Dearness Allowance, Transport Allowance, Special Allowances, and any other recurring components before deductions.',
          '"Cost to Company" (CTC) means the total annual cost incurred by the Hospital on an employee, including Gross Salary, employer\'s statutory contributions (Provident Fund, ESI, Gratuity), insurance premiums, and other benefits.',
          '"Grade" or "Cadre" means the hierarchical level or classification assigned to an employee based on role, responsibilities, qualifications, experience, and organizational structure.',
          '"Immediate Supervisor" means the person to whom an employee directly reports in the organizational hierarchy and who is responsible for the employee\'s day-to-day direction, supervision, and performance management.',
          '"Probation" means the initial period of employment during which an employee\'s suitability, performance, conduct, and compatibility with the Hospital\'s culture and requirements are assessed before confirmation.',
          '"Confirmation" means the formal recognition of an employee\'s successful completion of the probation period and the grant of permanent status as per these By-Laws.',
          '"Notice Period" means the advance notice required to be given by either the employee or the Hospital for termination of employment, as specified in the appointment letter or these By-Laws.',
          '"Misconduct" means any act, omission, or conduct by an employee that violates these By-Laws, Hospital policies, code of conduct, professional standards, or applicable laws, and includes both minor and major misconduct as may be classified.',
          '"Disciplinary Action" means any measure taken by the Hospital in response to an employee\'s misconduct, including warnings, suspension, demotion, termination, or any other penalty as provided in these By-Laws.',
          '"Grievance" means any concern, complaint, dissatisfaction, or dispute raised by an employee regarding employment terms, working conditions, workplace relationships, policy interpretation, or any other work-related matter.',
          '"Working Hours" means the standard daily or weekly hours of work as prescribed by the Hospital for different categories of employees, excluding meal breaks and rest periods.',
          '"Overtime" means work performed by an employee beyond the standard working hours, which may be compensated through additional payment or compensatory time off as per Hospital policy.',
          '"Leave" means authorized absence from work granted to an employee under various categories such as casual leave, sick leave, annual leave, maternity leave, paternity leave, or any other leave type as provided in these By-Laws.',
          '"Transfer" means the movement of an employee from one department, location, shift, or role to another within the Hospital, whether temporary or permanent.',
          '"Promotion" means the advancement of an employee to a higher grade, position, or level of responsibility, typically accompanied by enhanced compensation and benefits.',
          '"Separation" means the cessation of employment relationship between the Hospital and an employee, whether through resignation, retirement, termination, or any other mode.',
          '"Retirement" means separation from employment upon attaining the retirement age prescribed by the Hospital or as mutually agreed upon in exceptional circumstances.',
          '"Gratuity" means the lump sum payment made to an employee upon separation after completion of minimum qualifying service, as per the Payment of Gratuity Act, 1972, or Hospital policy, whichever is more favorable.',
          '"Provident Fund" (PF) means the retirement savings scheme under the Employees\' Provident Funds and Miscellaneous Provisions Act, 1952, to which both employer and employee contribute.',
          '"These By-Laws" means this document entitled "Koyili Hospital Human Resources By-Laws" including all sections, subsections, schedules, annexures, and amendments made from time to time.'
        ]
      },
      {
        number: '1.2',
        title: 'Principles of Interpretation',
        content: 'In the interpretation and application of these By-Laws, the following principles shall apply:',
        points: [
          'Words importing the singular number shall include the plural number and vice versa. Words importing the masculine gender shall include the feminine and neuter genders, and vice versa.',
          'Headings, titles, and marginal notes are inserted for convenience and ease of reference only and shall not affect the interpretation or construction of the provisions of these By-Laws.',
          'References to any statute, act, regulation, rule, or ordinance shall include amendments, re-enactments, modifications, and subordinate legislation made thereunder from time to time.',
          'In case of any ambiguity, uncertainty, or conflict in the interpretation of any provision of these By-Laws, the decision of the Board of Directors or its designated committee shall be final and binding.',
          'These By-Laws shall be read and construed in harmony with applicable central and state laws, regulations, and judicial pronouncements. In the event of any conflict between these By-Laws and mandatory legal provisions, the legal provisions shall prevail.',
          'Specific provisions contained in these By-Laws shall prevail over general provisions in case of any inconsistency or conflict between them.',
          'Where these By-Laws provide for discretion to be exercised by any authority, such discretion shall be exercised in good faith, reasonably, and in accordance with principles of natural justice and fairness.',
          'Unless expressly stated otherwise, any period of time specified in these By-Laws shall be computed excluding the first day and including the last day. If the last day falls on a non-working day, the period shall extend to the next working day.',
          'Any communication, notice, or intimation required under these By-Laws may be delivered personally, sent by registered post, courier, or electronic mail to the last known address of the recipient, and shall be deemed to have been duly served.',
          'The annexures, schedules, forms, and templates attached to or referred to in these By-Laws form an integral part of these By-Laws and shall have the same force and effect.',
          'Words and expressions used but not defined in these By-Laws shall have the meanings assigned to them in the employment contract, applicable laws, or as commonly understood in the context of human resource management.',
          'These By-Laws shall be liberally construed to advance their objectives of promoting fairness, transparency, efficiency, and compliance in human resource management.'
        ]
      },
      {
        number: '1.3',
        title: 'Precedence and Hierarchy',
        content: 'In the event of any inconsistency or conflict between documents, the following order of precedence shall apply:',
        points: [
          'Applicable central and state laws, statutes, and regulations shall have the highest precedence.',
          'These Human Resources By-Laws, as approved by the Board of Directors.',
          'Individual employment contracts and appointment letters, to the extent not inconsistent with these By-Laws.',
          'Specific HR policies, procedures, and guidelines issued by the Hospital from time to time.',
          'Departmental rules, standing orders, and operational procedures.',
          'Circulars, notices, and administrative directives issued by competent authorities.'
        ]
      }
    ]
  },

  section2: {
    id: 'section2',
    number: 'SECTION II',
    title: 'CODE OF CONDUCT AND PROFESSIONAL ETHICS',
    searchTerms: ['code of conduct', 'ethics', 'professional standards', 'behavior', 'integrity', 'conduct'],
    subsections: [
      {
        number: '2.1',
        title: 'Foundational Principles',
        content: 'The Code of Conduct at Koyili Hospital is founded upon the following core principles that shall guide the behavior and decision-making of all employees:',
        points: [
          'Patient-Centricity: The welfare, safety, dignity, and rights of patients shall be paramount in all decisions and actions. Every employee shall strive to provide compassionate, competent, and ethical care.',
          'Integrity and Honesty: Employees shall conduct themselves with the highest degree of integrity, honesty, and truthfulness in all professional dealings, maintaining public trust and confidence.',
          'Professionalism: Employees shall demonstrate competence, diligence, and commitment to excellence in their respective roles, maintaining and enhancing professional standards.',
          'Respect and Dignity: Employees shall treat patients, colleagues, visitors, and all stakeholders with respect, courtesy, and dignity, regardless of their position, background, or circumstances.',
          'Accountability: Employees shall take responsibility for their actions, decisions, and performance, and shall be answerable for compliance with Hospital policies and professional standards.',
          'Transparency: Employees shall promote openness and transparency in their work, ensuring that information is shared appropriately and decisions are made through fair processes.',
          'Compliance: Employees shall comply with all applicable laws, regulations, professional codes, Hospital policies, and these By-Laws without exception.',
          'Confidentiality: Employees shall maintain strict confidentiality of patient information, Hospital proprietary information, and sensitive data in accordance with legal and ethical obligations.',
          'Teamwork and Collaboration: Employees shall work cooperatively with colleagues across departments and disciplines, fostering a culture of mutual support and collective achievement.',
          'Continuous Improvement: Employees shall engage in lifelong learning, embrace change, seek feedback, and contribute to organizational improvement initiatives.'
        ]
      },
      {
        number: '2.2',
        title: 'General Conduct Expectations',
        content: 'All employees shall adhere to the following standards of general conduct:',
        points: [
          'Report to duty punctually and regularly as per assigned schedule, roster, or shift timings. Unauthorized absence, habitual lateness, or absenteeism shall be viewed seriously.',
          'Maintain professional appearance and dress in accordance with Hospital dress code policy. Wear identification badges prominently at all times while on duty.',
          'Perform assigned duties diligently, efficiently, and to the best of their ability, exercising reasonable care, skill, and judgment appropriate to their role.',
          'Follow lawful and reasonable instructions, orders, and directives issued by supervisors and management through proper channels.',
          'Maintain accurate, complete, and legible records, documentation, and reports as required by their role, professional standards, and Hospital policies.',
          'Use Hospital resources, equipment, facilities, and property responsibly, efficiently, and only for authorized purposes. Prevent waste, misuse, or damage.',
          'Cooperate fully with colleagues, other departments, and external stakeholders to ensure seamless operations and effective service delivery.',
          'Report unsafe conditions, practices, near-misses, incidents, and accidents promptly to appropriate authorities and take reasonable steps to prevent harm.',
          'Participate constructively in meetings, training programs, quality improvement initiatives, and institutional activities as required.',
          'Maintain confidentiality of sensitive and proprietary information and refrain from unauthorized disclosure or use of such information.',
          'Avoid engaging in any activity that may create actual or perceived conflicts of interest with Hospital duties and responsibilities.',
          'Refrain from accepting gifts, favors, bribes, kickbacks, or any form of gratification from patients, vendors, contractors, or other parties that may influence professional judgment.',
          'Communicate professionally, courteously, and respectfully in all interactions, whether verbal, written, or electronic.',
          'Adhere to infection control practices, safety protocols, and quality standards applicable to their role and work environment.',
          'Respect the privacy, autonomy, and rights of patients and maintain appropriate professional boundaries at all times.'
        ]
      },
      {
        number: '2.3',
        title: 'Professional Responsibilities by Category',
        content: 'In addition to general conduct expectations, employees in different categories shall observe the following specific responsibilities:',
        subsections: [
          {
            title: 'Medical Professionals',
            points: [
              'Practice medicine in accordance with established medical ethics, evidence-based protocols, and clinical guidelines.',
              'Obtain informed consent from patients or authorized representatives before providing treatment, performing procedures, or conducting research.',
              'Maintain patient confidentiality and comply with regulations regarding protected health information.',
              'Participate in continuing medical education, clinical audits, morbidity and mortality reviews, and quality improvement initiatives.',
              'Maintain valid medical registration, licenses, and certifications required for practice.',
              'Provide on-call services, emergency coverage, and weekend/holiday duties as per rostering requirements.'
            ]
          },
          {
            title: 'Nursing and Paramedical Staff',
            points: [
              'Provide patient care in accordance with nursing standards, care protocols, and professional guidelines.',
              'Maintain patient safety through medication administration checks, fall prevention, infection control, and vigilant monitoring.',
              'Document patient assessments, interventions, and outcomes accurately and timely in medical records.',
              'Participate in shift handovers, ensuring continuity and quality of care.',
              'Maintain valid professional licenses, registrations, and certifications.',
              'Respond promptly to patient calls, emergencies, and clinical needs.'
            ]
          },
          {
            title: 'Administrative and Support Staff',
            points: [
              'Provide efficient, courteous, and professional service to patients, visitors, and internal customers.',
              'Maintain confidentiality of patient information and institutional data.',
              'Process documentation, billing, records, and transactions accurately and in compliance with procedures.',
              'Maintain cleanliness, hygiene, and orderliness in work areas.',
              'Support clinical and operational staff in delivering seamless patient care.',
              'Adhere to data protection, information security, and record-keeping requirements.'
            ]
          }
        ]
      },
      {
        number: '2.4',
        title: 'Prohibited Conduct',
        content: 'The following conduct is strictly prohibited and shall constitute misconduct liable for disciplinary action up to and including termination of employment:',
        points: [
          'Any form of harassment, discrimination, intimidation, bullying, or victimization based on race, color, religion, caste, gender, age, disability, sexual orientation, marital status, pregnancy, or any other protected characteristic.',
          'Sexual harassment, unwelcome sexual advances, requests for sexual favors, or any conduct of a sexual nature that creates a hostile, offensive, or intimidating work environment.',
          'Theft, fraud, embezzlement, forgery, misappropriation, or dishonest handling of Hospital property, funds, patient belongings, or resources.',
          'Bribery, corruption, acceptance of kickbacks, or solicitation of improper payments or benefits from patients, vendors, or third parties.',
          'Unauthorized disclosure, leakage, or misuse of confidential information including patient records, proprietary data, trade secrets, or sensitive institutional information.',
          'Reporting to duty under the influence of alcohol, drugs, or intoxicating substances, or possession, use, sale, or distribution of prohibited substances on Hospital premises.',
          'Willful insubordination, refusal to follow lawful and reasonable instructions, or defiance of legitimate authority.',
          'Falsification, alteration, or destruction of records, documents, reports, medical records, attendance registers, or any official information.',
          'Unauthorized absence from duty, abandonment of responsibilities, or leaving the workplace without proper authorization during working hours.',
          'Negligence, recklessness, or deliberate acts that endanger the safety, health, or well-being of patients, colleagues, or visitors.',
          'Engaging in private practice, outside employment, or business activities that conflict with Hospital duties or are undertaken without proper authorization.',
          'Misuse of Hospital name, logo, letterhead, or resources for personal gain or unauthorized purposes.',
          'Creating or maintaining conflicts of interest that compromise professional judgment or institutional interests.',
          'Engaging in activities that bring disrepute, scandal, or adverse publicity to the Hospital.',
          'Violation of patient rights, unethical medical practices, or deviation from established clinical protocols that compromise patient safety.',
          'Physical violence, assault, threatening behavior, or creation of a hostile or unsafe work environment.',
          'Unauthorized use, access, or disclosure of information technology systems, networks, or data.',
          'Gambling, organizing betting activities, or engaging in speculative transactions on Hospital premises.',
          'Sleeping on duty (except where authorized rest periods are designated), dereliction of duty, or willful negligence in the performance of responsibilities.',
          'Unauthorized recording, photographing, or videography of patients, clinical procedures, or Hospital operations without proper consent and authorization.',
          'Violation of intellectual property rights, plagiarism, or unauthorized use of copyrighted materials.',
          'Failure to report known violations of laws, regulations, policies, or ethical standards (where reporting is mandated).',
          'Retaliation or victimization against employees who raise concerns, report violations, or participate in investigations in good faith.'
        ]
      },
      {
        number: '2.5',
        title: 'Conflict of Interest',
        content: 'Employees shall avoid situations that may create actual, potential, or perceived conflicts of interest:',
        points: [
          'Disclose in writing any financial interests, business relationships, or personal circumstances that may influence or appear to influence professional judgment or decisions.',
          'Seek prior written approval before engaging in outside employment, private practice, consultancy, or business activities.',
          'Refrain from participating in decisions where personal interests may conflict with Hospital interests (e.g., procurement decisions involving family-owned suppliers).',
          'Not accept positions on boards, committees, or advisory bodies of competing organizations without prior approval.',
          'Disclose family relationships or personal connections with vendors, contractors, or other stakeholders with whom the Hospital conducts business.',
          'Abstain from situations where personal relationships may compromise objectivity in hiring, promotion, performance evaluation, or other employment decisions.',
          'Report any situations where conflicts of interest arise inadvertently and seek guidance on appropriate resolution.',
          'Management reserves the right to reassign duties, modify reporting relationships, or take other measures to mitigate conflicts of interest.'
        ]
      },
      {
        number: '2.6',
        title: 'Gifts and Hospitality',
        content: 'The following guidelines apply to acceptance of gifts, hospitality, and benefits:',
        points: [
          'Employees shall not solicit or accept gifts, money, favors, or benefits from patients, their families, vendors, contractors, or other parties in connection with their employment.',
          'Token gifts of nominal value (not exceeding INR 1,000) offered as a gesture of goodwill on special occasions may be accepted, provided they do not create any obligation or expectation.',
          'All gifts exceeding nominal value must be reported to the supervisor and HR Department. The Hospital may require such gifts to be returned or donated to charity.',
          'Acceptance of hospitality (meals, travel, accommodation) in the context of legitimate business activities, conferences, or training programs is permitted with prior approval.',
          'Employees shall not accept discounts, preferential treatment, or benefits from vendors, service providers, or others with whom the Hospital has or may have business relationships.',
          'Any offer of substantial gifts, cash, or valuable consideration must be declined politely and reported immediately to management.',
          'Medical representatives, pharmaceutical companies, and medical device suppliers shall not provide personal gifts, incentives, or benefits to clinical staff except as permitted by law and Hospital policy.',
          'Violations of gift and hospitality guidelines may result in disciplinary action and recovery of the value of improper benefits received.'
        ]
      },
      {
        number: '2.7',
        title: 'Use of Social Media and Public Communication',
        content: 'Employees shall exercise caution and responsibility in the use of social media and public communication platforms:',
        points: [
          'Personal use of social media during working hours should be limited and should not interfere with work responsibilities.',
          'Employees shall not disclose confidential Hospital information, patient information, proprietary data, or internal communications on social media or public platforms.',
          'When expressing personal views on social media, employees should clearly indicate that views are personal and do not represent the Hospital\'s position.',
          'Employees shall not post content that is defamatory, offensive, discriminatory, or that may bring disrepute to the Hospital.',
          'Employees shall not post photographs, videos, or information about patients, clinical procedures, or Hospital operations without proper authorization and patient consent.',
          'Only authorized spokespersons may make official statements or respond to media inquiries on behalf of the Hospital. All media requests should be directed to the Public Relations or Administration Department.',
          'Employees participating in professional social media or online forums should maintain professional standards and ethical conduct.',
          'Violations of social media guidelines may result in disciplinary action, including termination of employment.',
          'Employees should be aware that social media posts, even if marked private, may become public and may have professional consequences.'
        ]
      },
      {
        number: '2.8',
        title: 'Acknowledgment and Compliance',
        content: 'All employees are required to:',
        points: [
          'Read, understand, and comply with this Code of Conduct and all other Hospital policies.',
          'Sign an acknowledgment form confirming receipt, understanding, and commitment to adhere to the Code of Conduct.',
          'Participate in periodic training and refresher programs on ethics, compliance, and professional conduct.',
          'Seek clarification from supervisors or the HR Department when in doubt about the application or interpretation of conduct standards.',
          'Report violations or suspected violations of the Code of Conduct through appropriate channels without fear of retaliation.',
          'Cooperate fully and honestly in any investigations or inquiries related to conduct or ethics matters.',
          'Update disclosures and declarations whenever circumstances change that may affect compliance with conduct standards.',
          'Management reserves the right to amend, modify, or supplement this Code of Conduct from time to time, and employees shall be bound by such changes upon notification.'
        ]
      }
    ]
  }
};

// This is Part 1 of the comprehensive By-Laws data
// The file will be continued with remaining sections...
