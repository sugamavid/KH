import React, { useState } from 'react';
import { 
  Search, Download, Eye, ChevronRight, Scale, BookOpen, 
  FileText, Printer, ZoomIn, ZoomOut, Home, List
} from 'lucide-react';

const HRByLaws = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [viewMode, setViewMode] = useState('document'); // document or toc

  // Comprehensive HR By-Laws Content
  const byLawsDocument = {
    title: "HUMAN RESOURCES BY-LAWS",
    subtitle: "KOYILI HOSPITAL",
    location: "Pallikkunnu, PO, Talap, Kannur, Kerala 670002",
    approvalDate: "Approved by the Board of Directors on January 15, 2024",
    effectiveDate: "Effective from February 1, 2024",
    revisionNumber: "Revision 2.0",
    
    preamble: "WHEREAS, Koyili Hospital (hereinafter referred to as 'the Hospital') is committed to maintaining the highest standards of human resource management, employee welfare, and organizational excellence; and WHEREAS, it is deemed necessary to establish comprehensive policies and procedures governing employment relationships, rights, responsibilities, and conduct within the Hospital; NOW THEREFORE, the Board of Directors of Koyili Hospital hereby enacts these Human Resources By-Laws to be effective from the date specified herein.",
    
    sections: [
      {
        number: "SECTION I",
        title: "DEFINITIONS AND INTERPRETATIONS",
        subsections: [
          {
            number: "1.1",
            title: "Definitions",
            content: "For the purposes of these By-Laws, unless the context otherwise requires, the following terms shall have the meanings ascribed to them:",
            points: [
              '"Hospital" means Koyili Hospital, its branches, divisions, and all associated facilities.',
              '"Employee" means any person employed by the Hospital under a contract of service, whether permanent, temporary, contractual, or probationary.',
              '"Management" means the Board of Directors, Medical Director, Administrator, and designated senior management personnel.',
              '"Department" means any organizational unit, division, or functional area within the Hospital structure.',
              '"Competent Authority" means the designated officer or committee authorized to make decisions under these By-Laws.'
            ]
          },
          {
            number: "1.2",
            title: "Interpretation",
            content: "In the interpretation of these By-Laws:",
            points: [
              "Words importing the singular include the plural and vice versa.",
              "Words importing the masculine gender include the feminine and neuter genders.",
              "Headings are for convenience only and do not affect interpretation.",
              "Reference to any statute includes amendments, re-enactments, and subordinate legislation.",
              "In case of ambiguity, the decision of the Board of Directors shall be final and binding."
            ]
          }
        ]
      },
      {
        number: "SECTION II",
        title: "CODE OF CONDUCT AND PROFESSIONAL ETHICS",
        subsections: [
          {
            number: "2.1",
            title: "General Principles",
            content: "All employees shall conduct themselves in a manner that upholds the dignity, reputation, and values of the Hospital. The following principles shall govern employee conduct:",
            points: [
              "Maintain the highest standards of integrity, honesty, and ethical behavior in all professional activities.",
              "Demonstrate respect, courtesy, and professionalism in interactions with patients, colleagues, visitors, and the public.",
              "Comply with all applicable laws, regulations, Hospital policies, and professional standards.",
              "Avoid conflicts of interest and disclose any potential conflicts to the appropriate authority.",
              "Protect confidential information and respect patient privacy in accordance with applicable laws."
            ]
          },
          {
            number: "2.2",
            title: "Professional Responsibilities",
            content: "Employees shall:",
            points: [
              "Perform duties diligently, competently, and in accordance with established standards and procedures.",
              "Maintain professional competence through continuous learning and skill development.",
              "Report to duty punctually and maintain regular attendance as per Hospital requirements.",
              "Cooperate fully with colleagues and other departments to ensure seamless patient care and Hospital operations.",
              "Use Hospital resources, equipment, and property responsibly and only for authorized purposes."
            ]
          },
          {
            number: "2.3",
            title: "Prohibited Conduct",
            content: "The following conduct is strictly prohibited and may result in disciplinary action:",
            points: [
              "Any form of harassment, discrimination, or intimidation based on race, color, religion, sex, national origin, age, disability, or any other protected characteristic.",
              "Theft, fraud, misappropriation, or unauthorized use of Hospital property or resources.",
              "Disclosure of confidential information without proper authorization.",
              "Acceptance of bribes, kickbacks, or improper gifts from patients, vendors, or other parties.",
              "Reporting to duty under the influence of alcohol, drugs, or controlled substances.",
              "Engaging in activities that create a conflict of interest with Hospital duties.",
              "Insubordination or willful refusal to follow lawful and reasonable instructions.",
              "Falsification of records, documents, or information provided to the Hospital."
            ]
          },
          {
            number: "2.4",
            title: "Dress Code and Appearance",
            content: "Employees shall maintain a professional appearance appropriate to their role and responsibilities. Specific dress code requirements shall be established by each department considering safety, hygiene, and professional standards."
          }
        ]
      },
      {
        number: "SECTION III",
        title: "EMPLOYMENT TERMS AND CONDITIONS",
        subsections: [
          {
            number: "3.1",
            title: "Employment Categories",
            content: "The Hospital recognizes the following employment categories:",
            points: [
              "Permanent Employees: Employees confirmed after successful completion of probation period.",
              "Probationary Employees: Employees under probation for a specified period not exceeding six (6) months.",
              "Contractual Employees: Employees engaged for specific projects or fixed terms.",
              "Temporary Employees: Employees engaged for short-term assignments or specific purposes.",
              "Part-Time Employees: Employees working less than standard full-time hours."
            ]
          },
          {
            number: "3.2",
            title: "Appointment and Joining",
            content: "All appointments shall be made through a formal letter of appointment specifying:",
            points: [
              "Designation, department, and reporting relationships.",
              "Date of joining and employment category.",
              "Compensation, allowances, and benefits.",
              "Probation period, if applicable.",
              "Terms and conditions of employment.",
              "Documents required for completion of joining formalities."
            ]
          },
          {
            number: "3.3",
            title: "Probation Period",
            content: "Probationary employees shall be subject to the following conditions:",
            points: [
              "The standard probation period shall be six (6) months from the date of joining.",
              "The probation period may be extended by up to three (3) months based on performance evaluation.",
              "Employment may be terminated during probation with notice as specified in the appointment letter.",
              "Confirmation shall be subject to satisfactory performance and conduct during probation.",
              "Confirmed employees shall receive a confirmation letter specifying permanent employment status."
            ]
          },
          {
            number: "3.4",
            title: "Working Hours and Attendance",
            content: "Standard working hours and attendance requirements:",
            points: [
              "Normal working hours shall be eight (8) hours per day and forty-eight (48) hours per week.",
              "Shift timings shall be determined by the Hospital based on operational requirements.",
              "Employees must maintain regular attendance and punctuality as per their assigned schedule.",
              "Attendance shall be recorded through the Hospital's biometric or approved attendance system.",
              "Unauthorized absence or persistent tardiness may result in disciplinary action."
            ]
          },
          {
            number: "3.5",
            title: "Compensation and Benefits",
            content: "Employee compensation shall comprise:",
            points: [
              "Basic Salary: As specified in the appointment letter.",
              "House Rent Allowance (HRA): 40% of basic salary for eligible employees.",
              "Dearness Allowance (DA): 20% of basic salary, subject to periodic revision.",
              "Medical Allowance: As per Hospital policy for employee and dependents.",
              "Provident Fund: Statutory contribution as per applicable laws.",
              "Gratuity: Payable as per the Payment of Gratuity Act, 1972.",
              "Other benefits as specified in the appointment letter or Hospital policies."
            ]
          }
        ]
      },
      {
        number: "SECTION IV",
        title: "LEAVE POLICY",
        subsections: [
          {
            number: "4.1",
            title: "Types of Leave",
            content: "The Hospital provides the following types of leave:",
            points: [
              "Casual Leave: Twelve (12) days per calendar year.",
              "Sick Leave: Ten (10) days per calendar year with medical certificate.",
              "Annual Leave/Privilege Leave: Twenty (20) days per calendar year.",
              "Maternity Leave: As per Maternity Benefit Act, 1961 - Twenty-six (26) weeks.",
              "Paternity Leave: Seven (7) days within six months of childbirth.",
              "Compensatory Off: For additional hours worked beyond normal schedule.",
              "Leave Without Pay: Subject to approval by competent authority."
            ]
          },
          {
            number: "4.2",
            title: "Leave Application and Approval",
            content: "Leave application procedures:",
            points: [
              "All leave applications must be submitted through the Hospital's leave management system.",
              "Casual leave requires at least one (1) day advance notice except in emergency.",
              "Annual leave requires at least seven (7) days advance notice.",
              "Sick leave exceeding three (3) consecutive days requires medical certificate.",
              "Leave is subject to approval by the immediate supervisor and HR department.",
              "Unauthorized absence may result in loss of pay and disciplinary action."
            ]
          },
          {
            number: "4.3",
            title: "Leave Balance and Carry Forward",
            content: "Leave balance management:",
            points: [
              "Unused casual leave shall not be carried forward to the next year.",
              "Annual leave may be carried forward up to a maximum of ten (10) days.",
              "Encashment of leave may be permitted as per Hospital policy.",
              "Leave balance shall be calculated on a calendar year basis."
            ]
          }
        ]
      },
      {
        number: "SECTION V",
        title: "PERFORMANCE MANAGEMENT",
        subsections: [
          {
            number: "5.1",
            title: "Performance Appraisal System",
            content: "The Hospital shall maintain a structured performance appraisal system:",
            points: [
              "Annual performance reviews shall be conducted for all employees.",
              "Performance shall be evaluated based on job-specific KPIs, competencies, and behavioral standards.",
              "Self-appraisal, supervisor assessment, and peer feedback may be incorporated.",
              "Performance ratings shall be used for decisions regarding confirmation, increments, promotions, and training needs.",
              "Employees shall have the right to discuss and provide feedback on their performance evaluation."
            ]
          },
          {
            number: "5.2",
            title: "Performance Improvement Plans",
            content: "Employees whose performance is below expectations may be placed on a Performance Improvement Plan (PIP) which shall:",
            points: [
              "Clearly identify performance gaps and areas requiring improvement.",
              "Establish specific, measurable, achievable, relevant, and time-bound (SMART) goals.",
              "Provide necessary support, training, and resources.",
              "Include regular monitoring and feedback sessions.",
              "Specify the review period and consequences of non-improvement."
            ]
          }
        ]
      },
      {
        number: "SECTION VI",
        title: "DISCIPLINARY PROCEDURES",
        subsections: [
          {
            number: "6.1",
            title: "Grounds for Disciplinary Action",
            content: "Disciplinary action may be initiated for:",
            points: [
              "Violation of these By-Laws or Hospital policies.",
              "Misconduct, negligence, or dereliction of duty.",
              "Breach of professional standards or code of conduct.",
              "Unauthorized absence or persistent tardiness.",
              "Insubordination or refusal to comply with lawful instructions.",
              "Any act prejudicial to the interests or reputation of the Hospital."
            ]
          },
          {
            number: "6.2",
            title: "Disciplinary Measures",
            content: "Depending on the nature and severity of the misconduct, disciplinary measures may include:",
            points: [
              "Verbal Warning: For minor infractions, documented in personnel file.",
              "Written Warning: For repeated or more serious violations.",
              "Suspension: Temporary suspension with or without pay pending investigation.",
              "Demotion: Reduction in rank or responsibilities.",
              "Termination: Dismissal from service with or without notice."
            ]
          },
          {
            number: "6.3",
            title: "Principles of Natural Justice",
            content: "All disciplinary proceedings shall adhere to principles of natural justice:",
            points: [
              "The employee shall be informed in writing of the allegations or charges.",
              "The employee shall be given reasonable opportunity to respond and present their case.",
              "The employee may be represented or accompanied during disciplinary proceedings.",
              "Decision shall be based on facts, evidence, and in accordance with established procedures.",
              "The employee shall have the right to appeal against disciplinary action."
            ]
          }
        ]
      },
      {
        number: "SECTION VII",
        title: "GRIEVANCE REDRESSAL",
        subsections: [
          {
            number: "7.1",
            title: "Grievance Redressal Mechanism",
            content: "The Hospital shall maintain a fair and transparent grievance redressal mechanism:",
            points: [
              "Employees may submit grievances related to working conditions, treatment, or any other employment matter.",
              "Grievances shall be submitted in writing to the HR Department or designated Grievance Officer.",
              "All grievances shall be acknowledged within three (3) working days.",
              "Investigation and resolution shall be completed within thirty (30) days of receipt.",
              "Employees shall be informed of the outcome and actions taken."
            ]
          },
          {
            number: "7.2",
            title: "Protection Against Retaliation",
            content: "The Hospital shall ensure that no employee faces retaliation for:",
            points: [
              "Filing a grievance in good faith.",
              "Reporting violations of laws, regulations, or Hospital policies.",
              "Cooperating in investigations or proceedings.",
              "Exercising rights under these By-Laws or applicable laws."
            ]
          }
        ]
      },
      {
        number: "SECTION VIII",
        title: "SEPARATION FROM EMPLOYMENT",
        subsections: [
          {
            number: "8.1",
            title: "Resignation",
            content: "Employees wishing to resign shall:",
            points: [
              "Submit written resignation to the immediate supervisor and HR Department.",
              "Provide notice period as specified in the appointment letter (typically 30 days for confirmed employees).",
              "Complete all exit formalities including handover of responsibilities and Hospital property.",
              "Obtain clearance from all departments before final settlement."
            ]
          },
          {
            number: "8.2",
            title: "Retirement",
            content: "The retirement age shall be sixty (60) years. Employees approaching retirement shall:",
            points: [
              "Receive advance notice regarding retirement procedures and benefits.",
              "Complete exit formalities and knowledge transfer.",
              "Receive all statutory and contractual retirement benefits.",
              "The Hospital may, at its discretion, extend employment beyond retirement age in exceptional cases."
            ]
          },
          {
            number: "8.3",
            title: "Termination by Hospital",
            content: "The Hospital may terminate employment:",
            points: [
              "During probation with notice as specified in appointment letter.",
              "For misconduct or poor performance following due process.",
              "On grounds of redundancy with appropriate notice and compensation.",
              "Due to prolonged absence or medical incapacity.",
              "In accordance with applicable labor laws and employment contracts."
            ]
          }
        ]
      },
      {
        number: "SECTION IX",
        title: "AMENDMENTS AND REVIEW",
        subsections: [
          {
            number: "9.1",
            title: "Amendment Procedure",
            content: "These By-Laws may be amended:",
            points: [
              "By resolution of the Board of Directors with majority approval.",
              "After consultation with relevant stakeholders including employee representatives.",
              "Amendments shall be communicated to all employees in writing.",
              "Amendments shall be effective from the date specified in the resolution."
            ]
          },
          {
            number: "9.2",
            title: "Periodic Review",
            content: "These By-Laws shall be reviewed periodically (at least once every three years) to ensure relevance, compliance with current laws, and alignment with Hospital objectives."
          }
        ]
      }
    ],
    
    certification: "These By-Laws have been duly approved and adopted by the Board of Directors of Koyili Hospital and shall remain in force until amended or superseded by subsequent resolutions.",
    
    signatures: [
      { title: "Chairman, Board of Directors", name: "________________", date: "Date: ________________" },
      { title: "Medical Director", name: "________________", date: "Date: ________________" },
      { title: "Hospital Administrator", name: "________________", date: "Date: ________________" }
    ]
  };

  const filteredSections = byLawsDocument.sections.filter(section =>
    searchQuery === '' ||
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.subsections.some(sub => 
      sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Fixed Header */}
      <div className="bg-white border-b-2 border-slate-300 px-6 py-4 sticky top-0 z-50 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-800 to-indigo-900 flex items-center justify-center">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">HR By-Laws Document Viewer</h1>
              <p className="text-sm text-slate-600">Official Legal Document</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setZoomLevel(Math.max(75, zoomLevel - 10))}
                className="p-2 hover:bg-white rounded transition-colors"
              >
                <ZoomOut className="w-5 h-5 text-slate-700" />
              </button>
              <span className="px-3 text-sm font-semibold text-slate-700">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel(Math.min(150, zoomLevel + 10))}
                className="p-2 hover:bg-white rounded transition-colors"
              >
                <ZoomIn className="w-5 h-5 text-slate-700" />
              </button>
            </div>
            <button
              onClick={() => setViewMode(viewMode === 'document' ? 'toc' : 'document')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                viewMode === 'toc' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              <List className="w-4 h-4 inline mr-2" />
              Contents
            </button>
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold text-sm flex items-center">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </button>
            <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold text-sm flex items-center shadow-md">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by-laws content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
          />
        </div>
      </div>

      <div className="flex">
        {/* Table of Contents Sidebar */}
        {viewMode === 'toc' && (
          <div className="w-80 bg-white border-r-2 border-slate-300 h-[calc(100vh-180px)] overflow-y-auto sticky top-[180px] shadow-lg">
            <div className="p-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
              <h2 className="font-bold text-lg">TABLE OF CONTENTS</h2>
            </div>
            <div className="p-4">
              {byLawsDocument.sections.map((section, idx) => (
                <div key={idx} className="mb-3">
                  <button
                    onClick={() => {
                      setSelectedSection(section.number);
                      setViewMode('document');
                      document.getElementById(`section-${idx}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left p-3 hover:bg-blue-50 rounded-lg transition-colors border border-slate-200 hover:border-blue-400"
                  >
                    <p className="font-bold text-sm text-blue-800">{section.number}</p>
                    <p className="text-sm text-slate-700 mt-1">{section.title}</p>
                  </button>
                  <div className="ml-4 mt-2 space-y-1">
                    {section.subsections.map((sub, subIdx) => (
                      <button
                        key={subIdx}
                        onClick={() => {
                          setViewMode('document');
                          document.getElementById(`section-${idx}-${subIdx}`)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="block w-full text-left p-2 text-xs text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors"
                      >
                        {sub.number} {sub.title}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Document Area */}
        <div className="flex-1 p-8">
          <div 
            className="max-w-5xl mx-auto bg-white shadow-2xl"
            style={{ 
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: 'top center',
              marginBottom: `${(zoomLevel - 100) * 10}px`
            }}
          >
            {/* Document Header */}
            <div className="border-b-4 border-double border-slate-800 p-12 text-center bg-gradient-to-b from-slate-50 to-white">
              <div className="inline-block mb-6">
                <Scale className="w-16 h-16 text-blue-900 mx-auto mb-2" />
              </div>
              <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2 tracking-wide">
                {byLawsDocument.title}
              </h1>
              <h2 className="text-2xl font-serif text-slate-700 mb-4">
                {byLawsDocument.subtitle}
              </h2>
              <p className="text-sm text-slate-600 italic mb-2">{byLawsDocument.location}</p>
              <div className="mt-6 pt-6 border-t border-slate-300">
                <p className="text-sm font-semibold text-slate-700">{byLawsDocument.approvalDate}</p>
                <p className="text-sm font-semibold text-slate-700">{byLawsDocument.effectiveDate}</p>
                <p className="text-sm text-slate-600 mt-2">{byLawsDocument.revisionNumber}</p>
              </div>
            </div>

            {/* Preamble */}
            <div className="p-12 border-b border-slate-300 bg-amber-50">
              <h3 className="text-xl font-serif font-bold text-center mb-6 text-slate-900">PREAMBLE</h3>
              <p className="text-base leading-relaxed text-justify font-serif text-slate-800 indent-12">
                {byLawsDocument.preamble}
              </p>
            </div>

            {/* Sections */}
            <div className="p-12">
              {filteredSections.map((section, idx) => (
                <div key={idx} id={`section-${idx}`} className="mb-12 page-break-inside-avoid">
                  <div className="border-b-2 border-slate-700 pb-3 mb-6">
                    <h2 className="text-2xl font-serif font-bold text-slate-900">
                      {section.number}
                    </h2>
                    <h3 className="text-xl font-serif font-bold text-slate-800 mt-2">
                      {section.title}
                    </h3>
                  </div>

                  {section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx} id={`section-${idx}-${subIdx}`} className="mb-8 ml-6">
                      <h4 className="text-lg font-serif font-bold text-slate-900 mb-3">
                        {subsection.number} {subsection.title}
                      </h4>
                      <p className="text-base leading-relaxed text-justify font-serif text-slate-800 mb-4">
                        {subsection.content}
                      </p>
                      
                      {subsection.points && (
                        <ol className="space-y-3 ml-8">
                          {subsection.points.map((point, pointIdx) => (
                            <li key={pointIdx} className="text-base leading-relaxed text-justify font-serif text-slate-800 relative pl-6">
                              <span className="absolute left-0 font-bold text-slate-600">
                                {String.fromCharCode(97 + pointIdx)}.
                              </span>
                              {point}
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* Certification */}
              <div className="mt-16 pt-8 border-t-2 border-slate-700">
                <h3 className="text-xl font-serif font-bold text-center mb-6 text-slate-900">
                  CERTIFICATION
                </h3>
                <p className="text-base leading-relaxed text-justify font-serif text-slate-800 italic mb-12">
                  {byLawsDocument.certification}
                </p>

                {/* Signatures */}
                <div className="grid grid-cols-1 gap-12 mt-12">
                  {byLawsDocument.signatures.map((sig, idx) => (
                    <div key={idx} className="text-center">
                      <div className="border-b-2 border-slate-800 w-64 mx-auto mb-2"></div>
                      <p className="font-serif font-bold text-slate-900">{sig.title}</p>
                      <p className="font-serif text-sm text-slate-600 mt-2">{sig.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t-2 border-slate-300 p-6 bg-slate-50 text-center">
              <p className="text-xs text-slate-600 font-serif">
                This is an official document of Koyili Hospital. Unauthorized reproduction or distribution is prohibited.
              </p>
              <p className="text-xs text-slate-500 font-serif mt-2">
                For queries, contact: Human Resources Department • Email: hr@koyilihospital.com • Phone: 0497 271 4400
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRByLaws;
