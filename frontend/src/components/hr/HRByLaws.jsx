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
  const contentRef = useRef(null);

  // Complete Navigation structure for all 30 sections
  const navigation = [
    { id: 'dashboard', title: 'Dashboard', icon: Home, category: 'Overview' },
    { id: 'preamble', title: 'Preamble', icon: BookOpen, category: 'Introduction' },
    { id: 'section1', title: 'Section I: Definitions', icon: FileText, category: 'Introduction' },
    { id: 'section2', title: 'Section II: Code of Conduct', icon: Shield, category: 'Core Policies' },
    { id: 'section3', title: 'Section III: Employment Terms', icon: Users, category: 'Core Policies' },
    { id: 'section4', title: 'Section IV: Leave Policy', icon: Calendar, category: 'Core Policies' },
    { id: 'section5', title: 'Section V: Performance Management', icon: Award, category: 'Performance' },
    { id: 'section6', title: 'Section VI: Disciplinary Procedures', icon: AlertCircle, category: 'Compliance' },
    { id: 'section7', title: 'Section VII: Grievance Redressal', icon: Scale, category: 'Compliance' },
    { id: 'section8', title: 'Section VIII: Separation', icon: Users, category: 'Employee Lifecycle' },
    { id: 'section9', title: 'Section IX: Probation', icon: Clock, category: 'Employee Lifecycle' },
    { id: 'section10', title: 'Section X: Working Hours & Overtime', icon: Clock, category: 'Operations' },
    { id: 'section11', title: 'Section XI: Compensation', icon: DollarSign, category: 'Compensation' },
    { id: 'section12', title: 'Section XII: Medical Benefits', icon: Award, category: 'Benefits' },
    { id: 'section13', title: 'Section XIII: Insurance', icon: Shield, category: 'Benefits' },
    { id: 'section14', title: 'Section XIV: Training', icon: BookOpen, category: 'Development' },
    { id: 'section15', title: 'Section XV: Career Development', icon: TrendingUp, category: 'Development' },
    { id: 'section16', title: 'Section XVI: Transfer', icon: Users, category: 'Mobility' },
    { id: 'section17', title: 'Section XVII: Promotion', icon: TrendingUp, category: 'Mobility' },
    { id: 'section18', title: 'Section XVIII: Confidentiality', icon: Shield, category: 'Information Security' },
    { id: 'section19', title: 'Section XIX: Intellectual Property', icon: FileText, category: 'Information Security' },
    { id: 'section20', title: 'Section XX: Workplace Safety', icon: Shield, category: 'Health & Safety' },
    { id: 'section21', title: 'Section XXI: Occupational Health', icon: Award, category: 'Health & Safety' },
    { id: 'section22', title: 'Section XXII: Security', icon: Shield, category: 'Security' },
    { id: 'section23', title: 'Section XXIII: IT Use', icon: FileText, category: 'Technology' },
    { id: 'section24', title: 'Section XXIV: Communication', icon: FileText, category: 'Communication' },
    { id: 'section25', title: 'Section XXV: Sexual Harassment', icon: AlertCircle, category: 'Workplace Culture' },
    { id: 'section26', title: 'Section XXVI: Equal Opportunity', icon: Users, category: 'Workplace Culture' },
    { id: 'section27', title: 'Section XXVII: Sustainability', icon: BookOpen, category: 'Corporate Responsibility' },
    { id: 'section28', title: 'Section XXVIII: CSR', icon: Award, category: 'Corporate Responsibility' },
    { id: 'section29', title: 'Section XXIX: Compliance', icon: CheckCircle, category: 'Governance' },
    { id: 'section30', title: 'Section XXX: Amendments', icon: FileText, category: 'Governance' }
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
        <div className="bg-white rounded-xl shadow-lg">
          {/* Board Approval Banner */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-b-2 border-amber-300 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-amber-900">Official Board-Approved Document</p>
                <p className="text-sm text-amber-800">Effective February 1, 2024 • Version 2.0</p>
              </div>
            </div>
          </div>

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

        {section.subsections && section.subsections.map((subsection, idx) => (
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
                    return (
                      <button
                        key={nav.id}
                        onClick={() => jumpToSection(nav.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                          activeSection === nav.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm font-medium truncate">{nav.title.replace('Section ', 'Sec ')}</span>
                        {activeSection === nav.id && (
                          <ChevronRight className="w-4 h-4 ml-auto" />
                        )}
                      </button>
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
