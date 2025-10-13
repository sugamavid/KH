import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Home, Scale, BookOpen, FileText, Calendar, Clock, Users, 
  DollarSign, Award, AlertCircle, Download, Printer, Search,
  ChevronRight, TrendingUp, CheckCircle, Shield, X, ChevronDown,
  Menu, ArrowLeft, Filter, Zap
} from 'lucide-react';
import { byLawsData, quickReferenceData, keyHighlights } from './byLawsData';

const HRByLaws = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const contentRef = useRef(null);

  // Navigation structure
  const navigation = [
    { id: 'dashboard', title: 'Dashboard', icon: Home },
    { id: 'preamble', title: 'Preamble', icon: BookOpen },
    { id: 'section1', title: 'Section I: Definitions', icon: FileText },
    { id: 'section2', title: 'Section II: Code of Conduct', icon: Shield },
    { id: 'section3', title: 'Section III: Employment Terms', icon: Users },
    { id: 'section4', title: 'Section IV: Leave Policy', icon: Calendar },
    { id: 'section5', title: 'Section V: Performance', icon: Award },
    { id: 'section6', title: 'Section VI: Disciplinary', icon: AlertCircle },
    { id: 'section7', title: 'Section VII: Grievance', icon: Scale },
    { id: 'section8', title: 'Section VIII: Separation', icon: Users },
    { id: 'section9', title: 'Section IX: Amendments', icon: FileText }
  ];

  // Dashboard data extracted from by-laws
  const quickReferenceCards = [
    {
      title: 'Leave Entitlements',
      icon: Calendar,
      color: 'blue',
      items: [
        'Casual Leave: 12 days/year',
        'Sick Leave: 10 days/year',
        'Annual Leave: 20 days/year',
        'Maternity Leave: 26 weeks',
        'Paternity Leave: 7 days',
        'Compensatory Off: As earned'
      ]
    },
    {
      title: 'Working Hours',
      icon: Clock,
      color: 'green',
      items: [
        'Daily: 8 hours',
        'Weekly: 48 hours',
        'Shifts: As per roster',
        'Attendance: Biometric',
        'Overtime: 1.5x pay rate',
        'Break: As per schedule'
      ]
    },
    {
      title: 'Compensation Structure',
      icon: DollarSign,
      color: 'purple',
      items: [
        'HRA: 40% of basic',
        'DA: 20% of basic',
        'Allowances: 10% of basic',
        'PF: 12% contribution',
        'TDS: As per Income Tax',
        'Gratuity: As per Act'
      ]
    },
    {
      title: 'Probation & Notice',
      icon: Users,
      color: 'orange',
      items: [
        'Probation: 6 months',
        'Extension: Max 3 months',
        'Notice Period: 30 days',
        'Retirement Age: 60 years',
        'Confirmation: In writing',
        'Exit Clearance: Required'
      ]
    }
  ];

  const complianceChecklist = [
    { item: 'Complete probation period', status: 'active', section: 'Section III' },
    { item: 'Annual performance review', status: 'active', section: 'Section V' },
    { item: 'Leave balance verification', status: 'active', section: 'Section IV' },
    { item: 'Code of conduct acknowledgment', status: 'completed', section: 'Section II' },
    { item: 'Grievance mechanism awareness', status: 'active', section: 'Section VII' }
  ];

  const keyHighlights = [
    {
      section: 'Code of Conduct',
      highlight: 'Zero tolerance for harassment, discrimination, or misconduct',
      icon: Shield,
      color: 'red'
    },
    {
      section: 'Leave Policy',
      highlight: 'Medical certificate required for sick leave exceeding 3 days',
      icon: Calendar,
      color: 'blue'
    },
    {
      section: 'Disciplinary',
      highlight: 'Principles of natural justice followed in all proceedings',
      icon: Scale,
      color: 'purple'
    },
    {
      section: 'Grievance',
      highlight: 'All grievances acknowledged within 3 working days',
      icon: AlertCircle,
      color: 'orange'
    }
  ];

  const importantDates = [
    { label: 'Effective Date', date: 'February 1, 2024' },
    { label: 'Approved On', date: 'January 15, 2024' },
    { label: 'Revision', date: 'Version 2.0' },
    { label: 'Next Review', date: 'January 2027' }
  ];

  // Full document content
  const byLawsContent = {
    preamble: {
      title: 'PREAMBLE',
      content: 'WHEREAS, Koyili Hospital (hereinafter referred to as "the Hospital") is committed to maintaining the highest standards of human resource management, employee welfare, and organizational excellence; and WHEREAS, it is deemed necessary to establish comprehensive policies and procedures governing employment relationships, rights, responsibilities, and conduct within the Hospital; NOW THEREFORE, the Board of Directors of Koyili Hospital hereby enacts these Human Resources By-Laws to be effective from the date specified herein.'
    },
    section1: {
      number: 'SECTION I',
      title: 'DEFINITIONS AND INTERPRETATIONS',
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
            '"Competent Authority" means the designated officer authorized to make decisions under these By-Laws.'
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
            'In case of ambiguity, the Board of Directors decision shall be final.'
          ]
        }
      ]
    },
    section2: {
      number: 'SECTION II',
      title: 'CODE OF CONDUCT AND PROFESSIONAL ETHICS',
      subsections: [
        {
          number: '2.1',
          title: 'General Principles',
          content: 'All employees shall conduct themselves in a manner that upholds the dignity and reputation of the Hospital:',
          points: [
            'Maintain the highest standards of integrity, honesty, and ethical behavior.',
            'Demonstrate respect, courtesy, and professionalism in all interactions.',
            'Comply with all applicable laws, regulations, and Hospital policies.',
            'Avoid conflicts of interest and disclose any potential conflicts.',
            'Protect confidential information and respect patient privacy.'
          ]
        },
        {
          number: '2.2',
          title: 'Professional Responsibilities',
          points: [
            'Perform duties diligently and competently as per established standards.',
            'Maintain professional competence through continuous learning.',
            'Report to duty punctually and maintain regular attendance.',
            'Cooperate fully with colleagues for seamless operations.',
            'Use Hospital resources responsibly and only for authorized purposes.'
          ]
        },
        {
          number: '2.3',
          title: 'Prohibited Conduct',
          content: 'The following is strictly prohibited:',
          points: [
            'Any form of harassment, discrimination, or intimidation.',
            'Theft, fraud, or misappropriation of Hospital property.',
            'Unauthorized disclosure of confidential information.',
            'Acceptance of bribes or improper gifts.',
            'Reporting to duty under influence of alcohol or drugs.',
            'Creating conflicts of interest with Hospital duties.',
            'Insubordination or refusal to follow lawful instructions.',
            'Falsification of records or documents.'
          ]
        }
      ]
    },
    section3: {
      number: 'SECTION III',
      title: 'EMPLOYMENT TERMS AND CONDITIONS',
      subsections: [
        {
          number: '3.1',
          title: 'Employment Categories',
          points: [
            'Permanent Employees: Confirmed after successful probation.',
            'Probationary Employees: Under probation (max 6 months).',
            'Contractual Employees: Engaged for specific projects or terms.',
            'Temporary Employees: Short-term assignments.',
            'Part-Time Employees: Less than standard full-time hours.'
          ]
        },
        {
          number: '3.2',
          title: 'Working Hours and Attendance',
          points: [
            'Normal working hours: 8 hours per day, 48 hours per week.',
            'Shift timings determined by Hospital operational requirements.',
            'Regular attendance and punctuality mandatory.',
            'Attendance recorded through biometric system.',
            'Unauthorized absence may result in disciplinary action.'
          ]
        },
        {
          number: '3.3',
          title: 'Compensation and Benefits',
          points: [
            'Basic Salary as per appointment letter.',
            'HRA: 40% of basic salary for eligible employees.',
            'DA: 20% of basic salary, subject to periodic revision.',
            'Medical Allowance as per Hospital policy.',
            'PF: Statutory contribution as per applicable laws.',
            'Gratuity: As per Payment of Gratuity Act, 1972.',
            'Other benefits as specified in appointment letter.'
          ]
        }
      ]
    },
    section4: {
      number: 'SECTION IV',
      title: 'LEAVE POLICY',
      subsections: [
        {
          number: '4.1',
          title: 'Types of Leave',
          points: [
            'Casual Leave: 12 days per calendar year.',
            'Sick Leave: 10 days per year with medical certificate.',
            'Annual Leave: 20 days per calendar year.',
            'Maternity Leave: 26 weeks as per Maternity Benefit Act.',
            'Paternity Leave: 7 days within six months of childbirth.',
            'Compensatory Off: For additional hours worked.',
            'Leave Without Pay: Subject to approval.'
          ]
        },
        {
          number: '4.2',
          title: 'Leave Application Procedures',
          points: [
            'Submit through Hospital leave management system.',
            'Casual leave: Minimum 1 day advance notice.',
            'Annual leave: Minimum 7 days advance notice.',
            'Sick leave >3 days: Medical certificate required.',
            'Subject to approval by supervisor and HR.',
            'Unauthorized absence: Loss of pay and disciplinary action.'
          ]
        }
      ]
    },
    section5: {
      number: 'SECTION V',
      title: 'PERFORMANCE MANAGEMENT',
      subsections: [
        {
          number: '5.1',
          title: 'Performance Appraisal System',
          points: [
            'Annual performance reviews for all employees.',
            'Evaluation based on job-specific KPIs and competencies.',
            'Self-appraisal, supervisor assessment, and peer feedback.',
            'Ratings used for confirmation, increments, and promotions.',
            'Employees have right to discuss performance evaluation.'
          ]
        },
        {
          number: '5.2',
          title: 'Performance Improvement Plans',
          points: [
            'Identify performance gaps requiring improvement.',
            'Establish SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals.',
            'Provide necessary support, training, and resources.',
            'Regular monitoring and feedback sessions.',
            'Specify review period and consequences.'
          ]
        }
      ]
    },
    section6: {
      number: 'SECTION VI',
      title: 'DISCIPLINARY PROCEDURES',
      subsections: [
        {
          number: '6.1',
          title: 'Grounds for Disciplinary Action',
          points: [
            'Violation of By-Laws or Hospital policies.',
            'Misconduct, negligence, or dereliction of duty.',
            'Breach of professional standards or code of conduct.',
            'Unauthorized absence or persistent tardiness.',
            'Insubordination or refusal to comply with lawful instructions.'
          ]
        },
        {
          number: '6.2',
          title: 'Disciplinary Measures',
          points: [
            'Verbal Warning: For minor infractions.',
            'Written Warning: For repeated or serious violations.',
            'Suspension: Temporary with/without pay pending investigation.',
            'Demotion: Reduction in rank or responsibilities.',
            'Termination: Dismissal from service with/without notice.'
          ]
        },
        {
          number: '6.3',
          title: 'Principles of Natural Justice',
          points: [
            'Employee informed in writing of allegations.',
            'Reasonable opportunity to respond and present case.',
            'May be represented during proceedings.',
            'Decision based on facts and evidence.',
            'Right to appeal against disciplinary action.'
          ]
        }
      ]
    },
    section7: {
      number: 'SECTION VII',
      title: 'GRIEVANCE REDRESSAL',
      subsections: [
        {
          number: '7.1',
          title: 'Grievance Redressal Mechanism',
          points: [
            'Submit grievances in writing to HR or Grievance Officer.',
            'Acknowledgment within 3 working days.',
            'Investigation and resolution within 30 days.',
            'Employees informed of outcome and actions taken.',
            'Fair and transparent process maintained.'
          ]
        },
        {
          number: '7.2',
          title: 'Protection Against Retaliation',
          points: [
            'No retaliation for filing grievance in good faith.',
            'Protection for reporting violations.',
            'Safe environment for cooperating in investigations.',
            'Right to exercise rights under By-Laws protected.'
          ]
        }
      ]
    },
    section8: {
      number: 'SECTION VIII',
      title: 'SEPARATION FROM EMPLOYMENT',
      subsections: [
        {
          number: '8.1',
          title: 'Resignation',
          points: [
            'Submit written resignation to supervisor and HR.',
            'Notice period as per appointment letter (typically 30 days).',
            'Complete exit formalities and handover.',
            'Obtain clearance from all departments.',
            'Final settlement after clearance.'
          ]
        },
        {
          number: '8.2',
          title: 'Retirement',
          points: [
            'Retirement age: 60 years.',
            'Advance notice of retirement procedures.',
            'Complete exit formalities and knowledge transfer.',
            'Receive all statutory and contractual benefits.',
            'Extension possible at Hospital discretion.'
          ]
        }
      ]
    },
    section9: {
      number: 'SECTION IX',
      title: 'AMENDMENTS AND REVIEW',
      subsections: [
        {
          number: '9.1',
          title: 'Amendment Procedure',
          points: [
            'By Board of Directors resolution with majority approval.',
            'Consultation with stakeholders and employee representatives.',
            'Amendments communicated to all employees in writing.',
            'Effective from date specified in resolution.'
          ]
        },
        {
          number: '9.2',
          title: 'Periodic Review',
          content: 'These By-Laws shall be reviewed at least once every three years to ensure relevance, compliance, and alignment with Hospital objectives.'
        }
      ]
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 text-white shadow-lg">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">HR By-Laws Dashboard</h1>
            <p className="text-blue-200 mb-4">Quick Reference & Compliance Tools</p>
            <div className="flex items-center space-x-6 text-sm">
              {importantDates.map((date, idx) => (
                <div key={idx}>
                  <p className="text-blue-300">{date.label}</p>
                  <p className="font-semibold">{date.date}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </button>
            <button className="px-4 py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Quick Reference Cards */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Reference Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickReferenceCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className={`w-12 h-12 rounded-lg bg-${card.color}-100 flex items-center justify-center mb-4`}>
                <card.icon className={`w-6 h-6 text-${card.color}-600`} />
              </div>
              <h3 className="font-bold text-slate-900 mb-3">{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm text-slate-700 flex items-start">
                    <ChevronRight className="w-4 h-4 text-slate-400 mr-1 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Key Highlights */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">Key Policy Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyHighlights.map((highlight, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border-l-4 border-slate-200 hover:shadow-md transition-all" style={{ borderLeftColor: `var(--${highlight.color}-500)` }}>
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-lg bg-${highlight.color}-100 flex items-center justify-center flex-shrink-0`}>
                  <highlight.icon className={`w-5 h-5 text-${highlight.color}-600`} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{highlight.section}</h3>
                  <p className="text-sm text-slate-700">{highlight.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Checklist */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Compliance Checklist</h2>
        <div className="space-y-3">
          {complianceChecklist.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center space-x-3">
                {item.status === 'completed' ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <Clock className="w-5 h-5 text-orange-600" />
                )}
                <span className="text-slate-900 font-medium">{item.item}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-slate-500">{item.section}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  item.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {item.status === 'completed' ? 'Completed' : 'Active'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Navigator */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Navigate to Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {navigation.filter(nav => nav.id !== 'dashboard').map((nav) => (
            <button
              key={nav.id}
              onClick={() => setActiveSection(nav.id)}
              className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:border-blue-400 border border-slate-200 transition-all text-left"
            >
              <nav.icon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-slate-900">{nav.title}</span>
              <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSection = (sectionId) => {
    const section = byLawsContent[sectionId];
    if (!section) return null;

    if (sectionId === 'preamble') {
      return (
        <div className="bg-white rounded-xl shadow-lg">
          <div className="border-b-4 border-double border-slate-800 p-12 text-center bg-gradient-to-b from-slate-50 to-white">
            <Scale className="w-16 h-16 text-blue-900 mx-auto mb-4" />
            <h1 className="text-3xl font-serif font-bold text-slate-900 mb-6">{section.title}</h1>
          </div>
          <div className="p-12 bg-amber-50">
            <p className="text-base leading-relaxed text-justify font-serif text-slate-800 indent-12">
              {section.content}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl shadow-lg p-12">
        <div className="border-b-2 border-slate-700 pb-4 mb-8">
          <h2 className="text-2xl font-serif font-bold text-slate-900">{section.number}</h2>
          <h3 className="text-xl font-serif font-bold text-slate-800 mt-2">{section.title}</h3>
        </div>

        {section.subsections.map((subsection, idx) => (
          <div key={idx} className="mb-8 ml-6">
            <h4 className="text-lg font-serif font-bold text-slate-900 mb-3">
              {subsection.number} {subsection.title}
            </h4>
            {subsection.content && (
              <p className="text-base leading-relaxed text-justify font-serif text-slate-800 mb-4">
                {subsection.content}
              </p>
            )}
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
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Fixed Top Bar */}
      <div className="bg-white border-b-2 border-slate-300 px-6 py-4 sticky top-0 z-50 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-800 to-indigo-900 flex items-center justify-center">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">HR By-Laws</h1>
              <p className="text-sm text-slate-600">Koyili Hospital • Official Legal Document</p>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by-laws..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-2 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-80"
            />
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {navigation.map((nav) => (
            <button
              key={nav.id}
              onClick={() => setActiveSection(nav.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                activeSection === nav.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <nav.icon className="w-4 h-4" />
              <span>{nav.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {activeSection === 'dashboard' ? renderDashboard() : renderSection(activeSection)}
        </div>
      </div>
    </div>
  );
};

export default HRByLaws;
