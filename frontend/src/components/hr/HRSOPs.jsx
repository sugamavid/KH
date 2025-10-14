import React, { useState, useMemo, useRef } from 'react';
import { 
  Home, BookOpen, FileText, Calendar, Users, 
  DollarSign, Award, Download, Printer, Search,
  ChevronRight, CheckCircle, X, Menu, ArrowLeft, Zap, Clock, Scale
} from 'lucide-react';
import { sopsData, sopsQuickRef } from './sopsData';

const HRSOPs = ({ setActiveModule }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const contentRef = useRef(null);

  // Navigation structure - dynamically built from sopsData
  const navigation = useMemo(() => {
    const navItems = [
      { id: 'dashboard', title: 'Dashboard', icon: Home, category: 'Overview' },
      { id: 'preamble', title: 'Preamble', icon: BookOpen, category: 'Introduction' }
    ];
    
    // Add all SOPs from sopsData
    Object.entries(sopsData).forEach(([key, sop]) => {
      if (key !== 'preamble' && sop.number && sop.title) {
        navItems.push({
          id: key,
          title: `${sop.number}: ${sop.title}`,
          icon: FileText,
          category: sop.category || 'General'
        });
      }
    });
    
    return navItems;
  }, []);

  // Group by category
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

  // Search functionality
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearch(false);
      return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    Object.entries(sopsData).forEach(([sectionId, section]) => {
      if (section.title && section.title.toLowerCase().includes(lowerQuery)) {
        results.push({
          sectionId,
          title: section.title,
          type: 'title',
          preview: section.title
        });
      }

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
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Board Approval Banner */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-100 border-l-4 border-green-600 rounded-lg p-6 shadow-md">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-green-900 mb-1">Standardized Procedures</h3>
            <p className="text-sm text-green-800">
              These Standard Operating Procedures ensure consistent and compliant HR operations at Koyili Hospital.
              All procedures are regularly reviewed and updated.
            </p>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 to-emerald-900 rounded-xl p-8 text-white shadow-lg">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">HR SOPs Dashboard</h1>
            <p className="text-green-200 mb-4">Standard Operating Procedures & Process Guidelines</p>
            <div className="flex items-center space-x-6 text-sm">
              <div>
                <p className="text-green-300">Total SOPs</p>
                <p className="font-semibold">10 Procedures</p>
              </div>
              <div>
                <p className="text-green-300">Last Updated</p>
                <p className="font-semibold">February 2024</p>
              </div>
              <div>
                <p className="text-green-300">Status</p>
                <p className="font-semibold">Active</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-white text-green-900 rounded-lg hover:bg-green-50 transition-colors font-semibold flex items-center">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </button>
            <button className="px-4 py-2 bg-white text-green-900 rounded-lg hover:bg-green-50 transition-colors font-semibold flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Reference Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(sopsQuickRef).map(([key, refData]) => (
            <div key={key} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-900 mb-3">{refData.title}</h3>
              <ul className="space-y-2">
                {refData.steps.map((step, idx) => (
                  <li key={idx} className="text-sm text-slate-700 flex items-start">
                    <ChevronRight className="w-4 h-4 text-slate-400 mr-1 flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Section Navigator */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Browse SOPs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {navigation.filter(nav => nav.id !== 'dashboard').map((nav) => {
            const IconComponent = nav.icon;
            return (
              <button
                key={nav.id}
                onClick={() => setActiveSection(nav.id)}
                className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-green-50 hover:border-green-400 border border-slate-200 transition-all text-left"
              >
                <IconComponent className="w-5 h-5 text-green-600" />
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
    const section = sopsData[sectionId];
    if (!section) return null;

    if (sectionId === 'preamble') {
      return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Professional Document Header */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white px-12 py-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
                <p className="text-blue-200 text-sm mt-1">Pallikkunnu, Talap, Kannur, Kerala</p>
              </div>
              <div className="text-right">
                <div className="bg-amber-500 text-blue-900 px-4 py-2 rounded-lg font-bold text-sm">
                  ISO 9001:2015 Certified
                </div>
              </div>
            </div>
            <div className="border-t border-blue-700 pt-4">
              <h2 className="text-xl font-semibold">Human Resources Department</h2>
              <p className="text-blue-300 text-sm">Standard Operating Procedures Manual</p>
            </div>
          </div>

          {/* Document Title */}
          <div className="bg-gradient-to-b from-slate-50 to-white px-12 py-10 border-b-4 border-amber-500">
            <div className="flex items-center space-x-4 mb-4">
              <BookOpen className="w-12 h-12 text-blue-900" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{section.title}</h3>
                <p className="text-slate-600 text-sm mt-1">Introduction to Standard Operating Procedures</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-12 py-10 bg-white">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-slate-800 text-justify font-serif indent-8 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {section.content}
              </p>
            </div>
          </div>

          {/* Professional Footer */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-12 py-6">
            <div className="flex items-center justify-between text-sm">
              <div>
                <p className="font-semibold">Document Control</p>
                <p className="text-slate-400 text-xs">Version 3.0 | Effective Date: January 2024</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">Approved By</p>
                <p className="text-slate-400 text-xs">Chief Executive Officer | Board of Directors</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // For regular SOPs
    return (
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Professional SOP Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="px-12 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-blue-900" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
                  <p className="text-blue-200 text-sm">Human Resources Department</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-amber-500 text-blue-900 px-3 py-1 rounded-md font-bold text-xs mb-2">
                  CONTROLLED DOCUMENT
                </div>
                <p className="text-blue-300 text-xs">Reference: {section.number}</p>
              </div>
            </div>
          </div>
          
          {/* Document Title Bar */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 px-12 py-6 border-t border-blue-700">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{section.title}</h2>
                {section.category && (
                  <div className="flex items-center space-x-2 mt-3">
                    <span className="bg-amber-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                      {section.category}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Document Metadata Bar */}
        <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-12 py-4 border-b-2 border-amber-500">
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-slate-600 text-xs font-semibold">Version</p>
              <p className="text-slate-900 font-bold">3.0</p>
            </div>
            <div>
              <p className="text-slate-600 text-xs font-semibold">Effective Date</p>
              <p className="text-slate-900 font-bold">01 Jan 2024</p>
            </div>
            <div>
              <p className="text-slate-600 text-xs font-semibold">Review Date</p>
              <p className="text-slate-900 font-bold">01 Jan 2025</p>
            </div>
            <div>
              <p className="text-slate-600 text-xs font-semibold">Owner</p>
              <p className="text-slate-900 font-bold">HR Department</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="px-12 py-10 bg-white">
          {/* Simple content (for SOPs without subsections) */}
          {section.content && !section.subsections && (
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed text-justify text-slate-800">
                {section.content}
              </p>
            </div>
          )}

          {/* Subsections (for detailed SOPs) */}
          {section.subsections && section.subsections.map((subsection, idx) => (
            <div key={idx} className="mb-10">
              {/* Section Header with Number Badge */}
              <div className="flex items-center space-x-4 mb-6 pb-3 border-b-2 border-blue-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg">{subsection.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 uppercase tracking-wide">{subsection.title}</h3>
              </div>

              {/* Content */}
              {subsection.content && (
                <div className="ml-16 mb-6">
                  <p className="text-base leading-relaxed text-justify text-slate-800 whitespace-pre-line font-serif">
                    {subsection.content}
                  </p>
                </div>
              )}

              {/* Bullet Points */}
              {subsection.points && (
                <ul className="ml-16 space-y-3">
                  {subsection.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base leading-relaxed text-slate-800 flex-1 font-serif">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {/* Nested subsections (like 4.1, 4.2 under section 4) */}
              {subsection.subsections && subsection.subsections.map((nestedSub, nestedIdx) => (
                <div key={nestedIdx} className="ml-16 mt-6 mb-6 bg-slate-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h4 className="text-lg font-bold text-blue-800 mb-3 flex items-center space-x-2">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-lg text-sm">{nestedSub.number}</span>
                    <span>{nestedSub.title}</span>
                  </h4>
                  {nestedSub.content && (
                    <p className="text-base leading-relaxed text-slate-700 whitespace-pre-line font-serif">
                      {nestedSub.content}
                    </p>
                  )}
                </div>
              ))}

              {/* Table support (for roles & responsibilities) */}
              {subsection.table && (
                <div className="ml-16 mt-6 overflow-hidden rounded-xl border-2 border-blue-200 shadow-lg">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-900 to-blue-800">
                        {subsection.table.headers.map((header, hIdx) => (
                          <th key={hIdx} className="px-6 py-4 text-left font-bold text-white text-sm uppercase tracking-wide">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {subsection.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={`${rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors`}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-6 py-4 text-slate-800 text-sm border-b border-slate-200">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Professional Footer */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <div className="px-12 py-6 border-t-4 border-amber-500">
            <div className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <p className="text-slate-400 text-xs mb-1">DOCUMENT REFERENCE</p>
                <p className="font-semibold">{section.number}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs mb-1">CLASSIFICATION</p>
                <p className="font-semibold">Internal Use Only</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs mb-1">DOCUMENT STATUS</p>
                <p className="font-semibold text-green-400">Active & Current</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <p className="text-xs text-slate-400">Digitally Signed & Approved by Board of Directors</p>
              </div>
              <p className="text-xs text-slate-400">© 2024 Koyili Hospital. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Dedicated Left Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-80'} bg-white border-r-2 border-slate-300 flex flex-col transition-all duration-300 shadow-xl`}>
        {/* Back to HR Dashboard */}
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
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-4 border-b-2 border-amber-500">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">HR SOPs Manual</h2>
                  <p className="text-xs text-blue-200">75 Procedures</p>
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

        {/* Navigation Links */}
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
                            ? 'bg-green-600 text-white shadow-md'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm font-medium truncate">{nav.title}</span>
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
                        ? 'bg-green-600 text-white'
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="bg-white border-b-2 border-slate-300 px-6 py-4 shadow-lg z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <h1 className="text-xl font-bold text-slate-900">Koyili Hospital • HR SOPs</h1>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
                  Standard Procedures
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search SOPs, procedures, keywords..."
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => searchQuery && setShowSearch(true)}
                  className="pl-12 pr-10 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent w-96 text-sm"
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
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center text-sm">
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
                    className="w-full p-4 text-left hover:bg-green-50 transition-colors group"
                  >
                    <div className="flex items-start space-x-3">
                      <Zap className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-green-600">
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

        {/* Scrollable Content */}
        <div ref={contentRef} className="flex-1 overflow-auto p-8">
          <div className="max-w-5xl mx-auto">
            {activeSection === 'dashboard' ? renderDashboard() : renderSection(activeSection)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRSOPs;