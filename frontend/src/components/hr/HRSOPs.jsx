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
        <div className="bg-white rounded-xl shadow-lg">
          <div className="bg-gradient-to-r from-green-50 to-emerald-100 border-b-2 border-green-300 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-green-900">Standard Operating Procedures</p>
                <p className="text-sm text-green-800">Koyili Hospital • HR Department</p>
              </div>
            </div>
          </div>

          <div className="border-b-4 border-double border-slate-800 p-12 text-center bg-gradient-to-b from-slate-50 to-white">
            <BookOpen className="w-16 h-16 text-green-900 mx-auto mb-4" />
            <h1 className="text-3xl font-serif font-bold text-slate-900 mb-6">{section.title}</h1>
          </div>
          <div className="p-12 bg-green-50">
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
          {section.category && (
            <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
              {section.category}
            </span>
          )}
        </div>

        {/* Simple content (for SOPs without subsections) */}
        {section.content && !section.subsections && (
          <div className="prose max-w-none">
            <p className="text-base leading-relaxed text-justify font-serif text-slate-800">
              {section.content}
            </p>
          </div>
        )}

        {/* Subsections (for detailed SOPs) */}
        {section.subsections && section.subsections.map((subsection, idx) => (
          <div key={idx} className="mb-8">
            <h4 className="text-lg font-serif font-bold text-slate-900 mb-3 bg-slate-100 px-4 py-2 rounded">
              {subsection.number} {subsection.title}
            </h4>
            {subsection.content && (
              <div className="ml-6 mb-4">
                <p className="text-base leading-relaxed text-justify font-serif text-slate-800 whitespace-pre-line">
                  {subsection.content}
                </p>
              </div>
            )}
            {subsection.points && (
              <ul className="space-y-2 ml-10 list-disc">
                {subsection.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="text-base leading-relaxed text-justify font-serif text-slate-800">
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {/* Nested subsections (like 4.1, 4.2 under section 4) */}
            {subsection.subsections && subsection.subsections.map((nestedSub, nestedIdx) => (
              <div key={nestedIdx} className="ml-8 mt-4 mb-4">
                <h5 className="text-md font-serif font-semibold text-slate-800 mb-2">
                  {nestedSub.number} {nestedSub.title}
                </h5>
                {nestedSub.content && (
                  <p className="text-base leading-relaxed text-justify font-serif text-slate-700 ml-4 whitespace-pre-line">
                    {nestedSub.content}
                  </p>
                )}
              </div>
            ))}
            {/* Table support (for roles & responsibilities) */}
            {subsection.table && (
              <div className="ml-6 mt-4 overflow-x-auto">
                <table className="min-w-full border-collapse border border-slate-300">
                  <thead>
                    <tr className="bg-slate-100">
                      {subsection.table.headers.map((header, hIdx) => (
                        <th key={hIdx} className="border border-slate-300 px-4 py-2 text-left font-bold text-slate-900">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {subsection.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="border border-slate-300 px-4 py-2 text-slate-800">
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
        <div className="p-4 border-b-2 border-slate-200 bg-gradient-to-r from-green-800 to-emerald-900">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white bg-opacity-20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">HR SOPs</h2>
                  <p className="text-xs text-green-200">10 Procedures</p>
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