import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Home, Scale, BookOpen, FileText, Calendar, Clock, Users, 
  DollarSign, Award, AlertCircle, Download, Printer, Search,
  ChevronRight, TrendingUp, CheckCircle, Shield, X, ChevronDown,
  Menu, ArrowLeft, Filter, Zap
} from 'lucide-react';
import { byLawsData, quickReferenceData, keyHighlights } from './byLawsData';

const HRByLaws = ({ setActiveModule }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const contentRef = useRef(null);

  // Complete Navigation structure for all 30 sections (User's Original By-Laws)
  const navigation = [
    { id: 'dashboard', title: 'Dashboard', icon: Home, category: 'Overview' },
    { id: 'preamble', title: 'Preamble', icon: BookOpen, category: 'Introduction' },
    { id: 'section1', title: 'Sec I: Preliminary', icon: FileText, category: 'Foundational' },
    { id: 'section2', title: 'Sec II: Recruitment and Employment', icon: Users, category: 'Foundational' },
    { id: 'section3', title: 'Sec III: Code of Conduct', icon: Shield, category: 'Conduct & Ethics' },
    { id: 'section4', title: 'Sec IV: Employee Rights and Responsibilities', icon: Award, category: 'Conduct & Ethics' },
    { id: 'section5', title: 'Sec V: Diversity, Equity, and Inclusion (DEI)', icon: Heart, category: 'Conduct & Ethics' },
    { id: 'section6', title: 'Sec VI: Patient Interaction and Care Standards', icon: Activity, category: 'Patient Care' },
    { id: 'section7', title: 'Sec VII: Attendance and Leave Policy', icon: Calendar, category: 'HR Operations' },
    { id: 'section8', title: 'Sec VIII: Performance Management', icon: TrendingUp, category: 'HR Operations' },
    { id: 'section9', title: 'Sec IX: Training and Development', icon: BookOpen, category: 'HR Operations' },
    { id: 'section10', title: 'Sec X: Remote Work and Flexible Scheduling', icon: Home, category: 'HR Operations' },
    { id: 'section11', title: 'Sec XI: Compensation and Benefits', icon: DollarSign, category: 'HR Operations' },
    { id: 'section12', title: 'Sec XII: Grievance Redressal Mechanism', icon: MessageSquare, category: 'HR Operations' },
    { id: 'section13', title: 'Sec XIII: Workplace Health and Safety', icon: Shield, category: 'Health & Safety' },
    { id: 'section14', title: 'Sec XIV: Disciplinary Actions and Compliance', icon: AlertCircle, category: 'Compliance' },
    { id: 'section15', title: 'Sec XV: Data Protection and Confidentiality', icon: Lock, category: 'Compliance' },
    { id: 'section16', title: 'Sec XVI: Termination and Exit Process', icon: LogOut, category: 'Compliance' },
    { id: 'section17', title: 'Sec XVII: Technology Use and Digital Conduct', icon: Monitor, category: 'Compliance' },
    { id: 'section18', title: 'Sec XVIII: Environmental Responsibility and Sustainability', icon: Globe, category: 'Compliance' },
    { id: 'section19', title: 'Sec XIX: Internal Communication and Information Sharing', icon: MessageCircle, category: 'Support Programs' },
    { id: 'section20', title: 'Sec XX: Employee Assistance Programs (EAPs)', icon: Heart, category: 'Support Programs' },
    { id: 'section21', title: 'Sec XXI: Special Provisions for Sensitive Situations', icon: UserCheck, category: 'Support Programs' },
    { id: 'section22', title: 'Sec XXII: Compliance and Regular Audits', icon: CheckCircle, category: 'Governance' },
    { id: 'section23', title: 'Sec XXIII: Workplace Culture and Team Building', icon: Users, category: 'Governance' },
    { id: 'section24', title: 'Sec XXIV: Employee Wellness and Support Programs', icon: Smile, category: 'Governance' },
    { id: 'section25', title: 'Sec XXV: Handling Conflicts of Interest', icon: AlertTriangle, category: 'Governance' },
    { id: 'section26', title: 'Sec XXVI: Innovation and Continuous Improvement', icon: Zap, category: 'Governance' },
    { id: 'section27', title: 'Sec XXVII: Work-Life Balance Initiatives', icon: Clock, category: 'Governance' },
    { id: 'section28', title: 'Sec XXVIII: Corporate Social Responsibility (CSR) Policies', icon: Gift, category: 'Governance' },
    { id: 'section29', title: 'Sec XXIX: Compliance with Industry Standards and Best Practices', icon: CheckSquare, category: 'Governance' },
    { id: 'section30', title: 'Sec XXX: Miscellaneous Provisions', icon: FileText, category: 'Governance' }
  ];

  // Group navigation by category
  const navigationByCategory = useMemo(() => {
    const grouped = {};
    navigation.forEach(nav => {
      if (!grouped[nav.category]) {
        grouped[nav.category] = [];
      }
      grouped[nav.category].push(nav);
    });
    return grouped;
  }, []);

  // Advanced search with fuzzy matching
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearch(false);
      return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    Object.entries(byLawsData).forEach(([sectionId, section]) => {
      // Search in title
      if (section.title && section.title.toLowerCase().includes(lowerQuery)) {
        results.push({
          sectionId,
          title: section.title,
          type: 'title',
          preview: section.title
        });
      }

      // Search in search terms
      if (section.searchTerms) {
        section.searchTerms.forEach(term => {
          if (term.toLowerCase().includes(lowerQuery)) {
            results.push({
              sectionId,
              title: section.title,
              type: 'keyword',
              preview: `Keyword match: ${term}`
            });
          }
        });
      }

      // Search in content
      if (section.content && section.content.toLowerCase().includes(lowerQuery)) {
        const index = section.content.toLowerCase().indexOf(lowerQuery);
        const preview = section.content.substring(Math.max(0, index - 50), Math.min(section.content.length, index + 150));
        results.push({
          sectionId,
          title: section.title,
          type: 'content',
          preview: '...' + preview + '...'
        });
      }

      // Search in subsections
      if (section.subsections) {
        section.subsections.forEach((subsection, idx) => {
          if (subsection.title && subsection.title.toLowerCase().includes(lowerQuery)) {
            results.push({
              sectionId,
              subsectionIdx: idx,
              title: `${section.title} - ${subsection.title}`,
              type: 'subsection',
              preview: subsection.title
            });
          }

          if (subsection.content && subsection.content.toLowerCase().includes(lowerQuery)) {
            const index = subsection.content.toLowerCase().indexOf(lowerQuery);
            const preview = subsection.content.substring(Math.max(0, index - 50), Math.min(subsection.content.length, index + 150));
            results.push({
              sectionId,
              subsectionIdx: idx,
              title: `${section.title} - ${subsection.title}`,
              type: 'content',
              preview: '...' + preview + '...'
            });
          }

          if (subsection.points) {
            subsection.points.forEach((point, pointIdx) => {
              if (point.toLowerCase().includes(lowerQuery)) {
                results.push({
                  sectionId,
                  subsectionIdx: idx,
                  pointIdx,
                  title: `${section.title} - ${subsection.title}`,
                  type: 'point',
                  preview: point.substring(0, 150) + (point.length > 150 ? '...' : '')
                });
              }
            });
          }
        });
      }
    });

    setSearchResults(results);
    setShowSearch(true);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    performSearch(query);
  };

  const jumpToSection = (sectionId) => {
    setActiveSection(sectionId);
    setShowSearch(false);
    setSearchQuery('');
    setSearchResults([]);
    // Scroll to top of content
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  };

  const quickReferenceCards = [
    {
      title: 'Leave Entitlements',
      icon: Calendar,
      color: 'blue',
      items: quickReferenceData.leaveEntitlements
    },
    {
      title: 'Working Hours',
      icon: Clock,
      color: 'green',
      items: quickReferenceData.workingHours
    },
    {
      title: 'Compensation Structure',
      icon: DollarSign,
      color: 'purple',
      items: quickReferenceData.compensation
    },
    {
      title: 'Probation & Notice',
      icon: Users,
      color: 'orange',
      items: quickReferenceData.probationNotice
    }
  ];

  const complianceChecklist = [
    { item: 'Complete probation period', status: 'active', section: 'Section IX' },
    { item: 'Annual performance review', status: 'active', section: 'Section V' },
    { item: 'Leave balance verification', status: 'active', section: 'Section IV' },
    { item: 'Code of conduct acknowledgment', status: 'completed', section: 'Section II' },
    { item: 'Grievance mechanism awareness', status: 'active', section: 'Section VII' },
    { item: 'Safety training completion', status: 'active', section: 'Section XX' }
  ];

  const importantDates = [
    { label: 'Effective Date', date: 'February 1, 2024' },
    { label: 'Approved On', date: 'January 15, 2024' },
    { label: 'Revision', date: 'Version 2.0' },
    { label: 'Next Review', date: 'January 2027' }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Enhanced Board Approval Banner */}
      <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 border-2 border-amber-400 rounded-2xl p-8 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full opacity-10 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-200 rounded-full opacity-10 -ml-24 -mb-24"></div>
        <div className="relative flex items-start space-x-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center flex-shrink-0 shadow-lg">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-2xl font-bold text-amber-900">Official Board-Approved Document</h3>
              <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full shadow-sm">
                CERTIFIED
              </span>
            </div>
            <p className="text-base text-amber-900 mb-3 leading-relaxed">
              This comprehensive Human Resources By-Laws document has been officially reviewed, ratified, 
              and approved by the Board of Directors of Koyili Hospital in their meeting held on 
              <span className="font-bold"> January 15, 2024</span>. These by-laws are effective from 
              <span className="font-bold"> February 1, 2024</span> and supersede all previous HR policies.
            </p>
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-amber-300">
              <div>
                <p className="text-xs text-amber-700 font-semibold">Document Code</p>
                <p className="text-sm font-bold text-amber-900">KH-HR-BL/001/2024</p>
              </div>
              <div>
                <p className="text-xs text-amber-700 font-semibold">Version</p>
                <p className="text-sm font-bold text-amber-900">2.0</p>
              </div>
              <div>
                <p className="text-xs text-amber-700 font-semibold">Classification</p>
                <p className="text-sm font-bold text-amber-900">Official - Binding</p>
              </div>
              <div>
                <p className="text-xs text-amber-700 font-semibold">Next Review</p>
                <p className="text-sm font-bold text-amber-900">January 2027</p>
              </div>
            </div>
            <p className="text-sm text-amber-800 mt-4 italic">
              All employees, contractors, and personnel associated with Koyili Hospital are required to 
              read, understand, acknowledge, and comply with these by-laws in their entirety.
            </p>
          </div>
        </div>
      </div>

      {/* Premium Header */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 rounded-2xl p-10 text-white shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700 rounded-full opacity-10 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-700 rounded-full opacity-10 -ml-32 -mb-32"></div>
        <div className="relative flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <Scale className="w-10 h-10 text-blue-300" />
              <div>
                <h1 className="text-4xl font-bold">HR By-Laws Dashboard</h1>
                <p className="text-blue-300 text-sm mt-1">Koyili Hospital • Legal & Compliance Framework</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 text-lg max-w-3xl">
              Comprehensive policy reference, quick compliance tools, and instant access to all 30 sections 
              of the Human Resources By-Laws governing employment at Koyili Hospital.
            </p>
            <div className="grid grid-cols-4 gap-6 bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
              {importantDates.map((date, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-blue-300 text-xs font-semibold uppercase tracking-wide">{date.label}</p>
                  <p className="font-bold text-white text-lg mt-1">{date.date}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-3 ml-6">
            <button className="px-6 py-3 bg-white text-blue-900 rounded-xl hover:bg-blue-50 transition-all font-bold flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <Printer className="w-5 h-5 mr-2" />
              Print Document
            </button>
            <button className="px-6 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-all font-bold flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Quick Reference Cards */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Quick Reference Guide</h2>
            <p className="text-slate-600 text-sm mt-1">Essential HR policies at a glance</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Download as PDF
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickReferenceCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:border-slate-300 transition-all transform hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-xl bg-${card.color}-100 flex items-center justify-center mb-4 shadow-md`}>
                <card.icon className={`w-7 h-7 text-${card.color}-600`} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-4">{card.title}</h3>
              <ul className="space-y-2.5">
                {card.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm text-slate-700 flex items-start leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0 mt-0.5" />
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
          {keyHighlights.map((highlight, idx) => {
            const IconComponent = {
              Shield, Calendar, Scale, AlertCircle
            }[highlight.icon] || Shield;
            
            return (
              <div key={idx} className="bg-white rounded-xl p-5 border-l-4 border-slate-200 hover:shadow-md transition-all" style={{ borderLeftColor: `var(--${highlight.color}-500)` }}>
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-lg bg-${highlight.color}-100 flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-5 h-5 text-${highlight.color}-600`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{highlight.section}</h3>
                    <p className="text-sm text-slate-700">{highlight.highlight}</p>
                  </div>
                </div>
              </div>
            );
          })}
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
          {navigation.filter(nav => nav.id !== 'dashboard').map((nav) => {
            const IconComponent = nav.icon;
            return (
              <button
                key={nav.id}
                onClick={() => setActiveSection(nav.id)}
                className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:border-blue-400 border border-slate-200 transition-all text-left"
              >
                <IconComponent className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-900">{nav.title}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderSection = (sectionId) => {
    const section = byLawsData[sectionId];
    if (!section) return null;

    if (sectionId === 'preamble') {
      return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Enhanced Board Approval Banner for Preamble */}
          <div className="bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 border-b-4 border-amber-400 p-8">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-xl bg-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-1">
                  <p className="text-xl font-bold text-amber-900">Official Board-Approved Document</p>
                  <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">
                    CERTIFIED
                  </span>
                </div>
                <div className="flex items-center space-x-6 text-sm text-amber-800">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Effective: February 1, 2024
                  </span>
                  <span className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    Version 2.0
                  </span>
                  <span className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Board Approved: January 15, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Preamble Header */}
          <div className="border-b-4 border-double border-slate-800 p-16 text-center bg-gradient-to-b from-slate-50 via-white to-slate-50">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Scale className="w-20 h-20 text-blue-900 mx-auto opacity-80" />
              </div>
              <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4 tracking-wide">
                {section.title}
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"></div>
            </div>
          </div>

          {/* Enhanced Content Area with Subsections */}
          <div className="p-16 bg-gradient-to-b from-amber-50 to-white">
            <div className="max-w-4xl mx-auto space-y-10">
              {/* Render direct content if no subsections */}
              {section.content && !section.subsections && (
                <div className="bg-white rounded-xl p-10 shadow-inner border-2 border-amber-200">
                  <div 
                    className="text-lg leading-loose text-justify font-serif text-slate-800 tracking-wide whitespace-pre-line" 
                    style={{lineHeight: '2'}}
                    dangerouslySetInnerHTML={{ __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                  />
                </div>
              )}
              
              {/* Render subsections if they exist */}
              {section.subsections && section.subsections.map((subsection, idx) => (
                <div key={idx} className="bg-white rounded-xl p-10 shadow-inner border-2 border-amber-200">
                  {subsection.title && (
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 pb-3 border-b-2 border-amber-300">
                      {subsection.title}
                    </h3>
                  )}
                  <div 
                    className="text-lg leading-loose text-justify font-serif text-slate-800 tracking-wide whitespace-pre-line" 
                    style={{lineHeight: '2'}}
                    dangerouslySetInnerHTML={{ __html: subsection.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                  />
                </div>
              ))}
              
              {/* Document Metadata */}
              <div className="mt-10 pt-8 border-t-2 border-slate-200">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs text-slate-600 font-semibold uppercase">Document Code</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">KH-HR-BL/001/2024</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs text-slate-600 font-semibold uppercase">Classification</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">Official - Binding</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs text-slate-600 font-semibold uppercase">Total Sections</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">30 Sections</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-10 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white bg-opacity-20 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider">{section.number}</p>
                <h2 className="text-3xl font-serif font-bold mt-1">{section.title}</h2>
              </div>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-white to-blue-400 opacity-30"></div>
          </div>
        </div>

        {/* Enhanced Content Body */}
        <div className="p-12">
          <div className="max-w-4xl mx-auto">
            {section.subsections && section.subsections.map((subsection, idx) => (
              <div key={idx} className="mb-10">
                {/* Subsection Header */}
                <div className="mb-6 pb-4 border-b-2 border-slate-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-700 font-bold text-sm">{subsection.number}</span>
                    </div>
                    <h4 className="text-xl font-serif font-bold text-slate-900 flex-1 pt-2">
                      {subsection.title}
                    </h4>
                  </div>
                </div>

                {/* Subsection Content */}
                {subsection.content && (
                  <div className="mb-6 ml-14">
                    <p className="text-base leading-relaxed text-justify font-serif text-slate-800 tracking-wide" style={{lineHeight: '1.8'}}>
                      {subsection.content}
                    </p>
                  </div>
                )}

                {/* Subsection Points */}
                {subsection.points && (
                  <div className="ml-14 space-y-4">
                    {subsection.points.map((point, pointIdx) => (
                      <div key={pointIdx} className="flex items-start group hover:bg-slate-50 p-4 rounded-lg transition-all">
                        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4 transition-colors">
                          <span className="text-slate-600 group-hover:text-blue-700 font-bold text-sm transition-colors">
                            {String.fromCharCode(97 + pointIdx)}
                          </span>
                        </div>
                        <p className="text-base leading-relaxed text-justify font-serif text-slate-800 flex-1 pt-1" style={{lineHeight: '1.8'}}>
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Nested Subsections (if any) */}
                {subsection.subsections && (
                  <div className="ml-14 mt-6 space-y-6">
                    {subsection.subsections.map((nestedSub, nestedIdx) => (
                      <div key={nestedIdx} className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-400">
                        <h5 className="text-lg font-serif font-bold text-slate-900 mb-4">
                          {nestedSub.title}
                        </h5>
                        {nestedSub.points && (
                          <ul className="space-y-3">
                            {nestedSub.points.map((point, pointIdx) => (
                              <li key={pointIdx} className="text-base leading-relaxed text-justify font-serif text-slate-700 flex items-start">
                                <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <div className="bg-slate-50 px-12 py-6 border-t-2 border-slate-200">
          <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-slate-600">
            <div>
              <span className="font-semibold">Document:</span> Koyili Hospital HR By-Laws • {section.number}
            </div>
            <div>
              <span className="font-semibold">Version:</span> 2.0 • <span className="font-semibold">Effective:</span> February 1, 2024
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Dedicated Left Sidebar for Navigation */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-80'} bg-white border-r-2 border-slate-300 flex flex-col transition-all duration-300 shadow-xl`}>
        {/* Back to HR Dashboard Button */}
        {setActiveModule && !sidebarCollapsed && (
          <div className="p-3 border-b border-slate-200 bg-slate-50">
            <button
              onClick={() => setActiveModule('dashboard')}
              className="w-full flex items-center space-x-2 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to HR Dashboard</span>
            </button>
          </div>
        )}

        {/* Sidebar Header */}
        <div className="p-4 border-b-2 border-slate-200 bg-gradient-to-r from-blue-800 to-indigo-900">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white bg-opacity-20 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">HR By-Laws</h2>
                  <p className="text-xs text-blue-200">30 Sections</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Navigation Links - Scrollable */}
        <div className="flex-1 overflow-y-auto py-4">
          {!sidebarCollapsed ? (
            <div className="space-y-1 px-2">
              {Object.entries(navigationByCategory).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {category}
                  </div>
                  {items.map((nav) => {
                    const IconComponent = nav.icon;
                    const sectionData = byLawsData[nav.id];
                    const hasSubsections = sectionData && sectionData.subsections && sectionData.subsections.length > 0;
                    const isExpanded = expandedSections[nav.id];
                    
                    return (
                      <div key={nav.id}>
                        <button
                          onClick={() => {
                            jumpToSection(nav.id);
                            if (hasSubsections) {
                              setExpandedSections(prev => ({
                                ...prev,
                                [nav.id]: !prev[nav.id]
                              }));
                            }
                          }}
                          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                            activeSection === nav.id
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <IconComponent className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm font-medium truncate flex-1">{nav.title.replace('Section ', 'Sec ')}</span>
                          {hasSubsections && (
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`}
                            />
                          )}
                          {activeSection === nav.id && !hasSubsections && (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                        
                        {/* Subsections */}
                        {hasSubsections && isExpanded && activeSection === nav.id && (
                          <div className="ml-8 mt-1 space-y-1">
                            {sectionData.subsections.slice(0, 10).map((subsection, idx) => (
                              <div 
                                key={idx}
                                className="px-3 py-1.5 text-xs text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                                title={subsection.title}
                              >
                                {subsection.number && `${subsection.number}. `}
                                {subsection.title && subsection.title.length > 30 
                                  ? subsection.title.substring(0, 30) + '...' 
                                  : subsection.title}
                              </div>
                            ))}
                            {sectionData.subsections.length > 10 && (
                              <div className="px-3 py-1 text-xs text-slate-400 italic">
                                +{sectionData.subsections.length - 10} more...
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2 px-2">
              {navigation.map((nav) => {
                const IconComponent = nav.icon;
                return (
                  <button
                    key={nav.id}
                    onClick={() => jumpToSection(nav.id)}
                    className={`w-full p-3 rounded-lg transition-all ${
                      activeSection === nav.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                    title={nav.title}
                  >
                    <IconComponent className="w-5 h-5 mx-auto" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <div className="bg-white border-b-2 border-slate-300 px-6 py-4 shadow-lg z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <h1 className="text-xl font-bold text-slate-900">Koyili Hospital • HR By-Laws</h1>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                  Official Legal Document
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by-laws, sections, keywords..."
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => searchQuery && setShowSearch(true)}
                  className="pl-12 pr-10 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-96 text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSearchResults([]);
                      setShowSearch(false);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                {searchQuery && <span className="absolute -bottom-6 left-0 text-xs text-slate-600">{searchResults.length} results found</span>}
              </div>

              {/* Action Buttons */}
              <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-semibold flex items-center text-sm">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center text-sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>

          {/* Search Results Dropdown */}
          {showSearch && searchResults.length > 0 && (
            <div className="absolute top-16 right-6 w-[450px] bg-white border-2 border-slate-300 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50 mt-2">
              <div className="p-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">
                  Search Results ({searchResults.length})
                </span>
                <button
                  onClick={() => setShowSearch(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {searchResults.slice(0, 20).map((result, idx) => (
                  <button
                    key={idx}
                    onClick={() => jumpToSection(result.sectionId)}
                    className="w-full p-4 text-left hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex items-start space-x-3">
                      <Zap className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                          {result.title}
                        </p>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                          {result.preview}
                        </p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">
                          {result.type}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Scrollable Content Area */}
        <div ref={contentRef} className="flex-1 overflow-auto p-8">
          <div className="max-w-5xl mx-auto">
            {activeSection === 'dashboard' ? renderDashboard() : renderSection(activeSection)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRByLaws;
