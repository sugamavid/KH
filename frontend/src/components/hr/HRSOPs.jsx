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
        <div className="bg-white shadow-sm">
          {/* Professional Blue Header with Logo */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-16 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                {/* Hospital Logo */}
                <img 
                  src="https://customer-assets.emergentagent.com/job_project-hub-123/artifacts/mpnrrrfw_images.jpeg" 
                  alt="Koyili Hospital Logo" 
                  className="w-20 h-20 object-contain bg-white rounded-lg p-2"
                />
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
                  <p className="text-blue-200 text-sm mt-1">Human Resources Department</p>
                  <p className="text-blue-300 text-xs mt-0.5">Pallikkunnu, Talap, Kannur, Kerala</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <p className="text-xs text-blue-200">ISO 9001:2015 | NABH</p>
                </div>
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="px-16 py-10 bg-white border-b border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{section.title}</h2>
            <p className="text-sm text-slate-600">Standard Operating Procedures Manual - 2025</p>
          </div>

          {/* Content with Justified Text */}
          <div className="px-16 py-12 bg-white">
            <div className="text-[15px] leading-[1.8] text-slate-800 text-justify space-y-4">
              {section.content.split('\n\n').map((para, idx) => {
                // Check if it's a bullet list
                if (para.includes('•')) {
                  const items = para.split('\n').filter(line => line.trim().startsWith('•'));
                  return (
                    <ul key={idx} className="space-y-2.5 pl-6 my-4">
                      {items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start">
                          <span className="text-blue-700 font-bold mr-3 mt-1 text-lg">●</span>
                          <span className="flex-1 text-justify">{item.replace(/^•\s*/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={idx} className="text-justify">{para}</p>;
              })}
            </div>
          </div>

          {/* Enhanced Footer with Color */}
          <div className="border-t-2 border-blue-900 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 px-16 py-8">
            <div className="grid grid-cols-4 gap-8 text-white mb-4">
              <div>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Version</p>
                <p className="text-sm font-semibold">3.0</p>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Effective Date</p>
                <p className="text-sm font-semibold">01 January 2024</p>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Approved By</p>
                <p className="text-sm font-semibold">Board of Directors</p>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Classification</p>
                <p className="text-sm font-semibold">Internal Use Only</p>
              </div>
            </div>
            <div className="border-t border-blue-700 pt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Scale className="w-4 h-4 text-amber-400" />
                <p className="text-xs text-blue-200">Compliant with NABH & ISO 9001:2015 Standards</p>
              </div>
              <p className="text-xs text-blue-300">© 2024 Koyili Hospital. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      );
    }

    // Regular SOP with Blue Header
    return (
      <div className="bg-white shadow-sm">
        {/* Professional Blue Header with Logo - NO Document Number */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-16 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-6">
              {/* Hospital Logo */}
              <img 
                src="https://customer-assets.emergentagent.com/job_project-hub-123/artifacts/mpnrrrfw_images.jpeg" 
                alt="Koyili Hospital Logo" 
                className="w-16 h-16 object-contain bg-white rounded-lg p-2"
              />
              <div>
                <h1 className="text-2xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
                <p className="text-blue-200 text-sm">Human Resources Department</p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <p className="text-xs text-blue-200">ISO 9001:2015 Certified</p>
              </div>
            </div>
          </div>
          
          {/* SOP Title - Clean without Document Number */}
          <div className="border-t border-blue-700 pt-6">
            <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
            {section.category && (
              <p className="text-blue-200 text-sm">{section.category}</p>
            )}
          </div>
        </div>

        {/* Document Metadata */}
        <div className="bg-white px-16 py-4 border-b border-slate-200">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-8">
              <div>
                <span className="text-slate-500">Version:</span>
                <span className="text-slate-900 font-semibold ml-2">3.0</span>
              </div>
              <div>
                <span className="text-slate-500">Effective:</span>
                <span className="text-slate-900 font-semibold ml-2">01 Jan 2024</span>
              </div>
              <div>
                <span className="text-slate-500">Review:</span>
                <span className="text-slate-900 font-semibold ml-2">01 Jan 2025</span>
              </div>
              <div>
                <span className="text-slate-500">Owner:</span>
                <span className="text-slate-900 font-semibold ml-2">HR Department</span>
              </div>
            </div>
            <div>
              <span className="text-slate-500">Status:</span>
              <span className="text-green-700 font-semibold ml-2">Active</span>
            </div>
          </div>
        </div>

        {/* Content with Legal Document Formatting */}
        <div className="px-16 py-12 bg-white">
          {/* Simple content */}
          {section.content && !section.subsections && (
            <p className="text-[15px] leading-[1.8] text-slate-800 text-justify" style={{ lineHeight: '1.8' }}>
              {section.content}
            </p>
          )}

          {/* Subsections with Professional Legal Formatting */}
          {section.subsections && section.subsections.map((subsection, idx) => (
            <div key={idx} className="mb-10">
              {/* Section Header with Professional Styling */}
              <div className="mb-6 pb-3 border-b-2 border-blue-900 bg-gradient-to-r from-blue-50 to-transparent px-4 py-3 -mx-4">
                <div className="flex items-baseline space-x-4">
                  <span className="text-2xl font-bold text-blue-900 min-w-[3rem]">{subsection.number}</span>
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">{subsection.title}</h3>
                </div>
              </div>

              {/* Content with Justified Text and Proper Spacing */}
              {subsection.content && (
                <div className="mb-6 pl-12">
                  <div className="text-[15px] leading-[1.8] text-slate-800 text-justify space-y-4" style={{ lineHeight: '1.8' }}>
                    {subsection.content.split('\n\n').map((para, pIdx) => {
                      // Check if it's a bullet point paragraph
                      if (para.trim().startsWith('•') || para.trim().startsWith('-')) {
                        const items = para.split('\n').filter(line => line.trim());
                        return (
                          <ul key={pIdx} className="space-y-2.5 pl-6">
                            {items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start">
                                <span className="text-blue-700 font-bold mr-3 mt-1 text-lg">●</span>
                                <span className="flex-1 text-justify">{item.replace(/^[•\-]\s*/, '')}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return <p key={pIdx} className="text-justify">{para}</p>;
                    })}
                  </div>
                </div>
              )}

              {/* Bullet Points with Enhanced Styling */}
              {subsection.points && (
                <ul className="pl-12 space-y-3 mb-6">
                  {subsection.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start">
                      <span className="text-blue-700 font-bold mr-3 mt-1 text-lg">●</span>
                      <p className="text-[15px] leading-[1.8] text-slate-800 flex-1 text-justify">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {/* Nested subsections with Better Formatting */}
              {subsection.subsections && subsection.subsections.map((nestedSub, nestedIdx) => (
                <div key={nestedIdx} className="pl-12 mb-6">
                  <div className="border-l-4 border-blue-400 bg-blue-50/30 pl-8 py-4 rounded-r">
                    <h4 className="text-base font-bold text-blue-900 mb-3">
                      {nestedSub.number} {nestedSub.title}
                    </h4>
                    {nestedSub.content && (
                      <div className="text-[15px] leading-[1.8] text-slate-800 space-y-3">
                        {nestedSub.content.split('\n\n').map((para, pIdx) => {
                          // Handle bullet points in nested content
                          if (para.includes('•') || (para.match(/^\s*\(/))) {
                            const lines = para.split('\n');
                            return (
                              <div key={pIdx} className="space-y-2">
                                {lines.map((line, lIdx) => {
                                  const trimmed = line.trim();
                                  if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
                                    return (
                                      <div key={lIdx} className="flex items-start ml-6">
                                        <span className="text-blue-600 font-bold mr-2 text-sm">◆</span>
                                        <span className="text-justify flex-1">{trimmed.replace(/^[•\-]\s*/, '')}</span>
                                      </div>
                                    );
                                  }
                                  if (trimmed.match(/^\(i+\)/)) {
                                    return (
                                      <div key={lIdx} className="ml-4">
                                        <span className="font-semibold text-slate-900">{trimmed}</span>
                                      </div>
                                    );
                                  }
                                  if (trimmed) {
                                    return (
                                      <p key={lIdx} className="text-justify ml-8">{trimmed}</p>
                                    );
                                  }
                                  return null;
                                })}
                              </div>
                            );
                          }
                          return <p key={pIdx} className="text-justify">{para}</p>;
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Tables with Enhanced Styling */}
              {subsection.table && (
                <div className="pl-12 mb-8">
                  <div className="border-2 border-slate-300 overflow-hidden rounded-lg shadow-sm">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-900 to-blue-800">
                          {subsection.table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="px-6 py-4 text-left text-sm font-bold text-white border-r border-blue-700 last:border-r-0">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {subsection.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={`${rIdx % 2 === 0 ? 'bg-white' : 'bg-blue-50'} border-b border-slate-200 last:border-b-0 hover:bg-blue-100 transition-colors`}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-6 py-3.5 text-[14px] leading-relaxed text-slate-800 border-r border-slate-200 last:border-r-0 align-top">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Footer with Color Gradient */}
        <div className="border-t-2 border-blue-900 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 px-16 py-8">
          <div className="grid grid-cols-3 gap-8 mb-4">
            <div>
              <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Document Information</p>
              <div className="space-y-1 text-white">
                <p className="text-sm"><span className="font-semibold">Reference:</span> {section.number}</p>
                <p className="text-sm"><span className="font-semibold">Classification:</span> Internal Use Only</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Version Control</p>
              <div className="space-y-1 text-white">
                <p className="text-sm"><span className="font-semibold">Version:</span> 3.0</p>
                <p className="text-sm"><span className="font-semibold">Last Updated:</span> Jan 2024</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Status</p>
              <div className="space-y-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Active & Current
                </div>
                <p className="text-xs text-blue-200 mt-2">Next Review: Jan 2025</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700 pt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Scale className="w-4 h-4 text-amber-400" />
              <p className="text-xs text-blue-200">Compliant with NABH, ISO 9001:2015 Standards</p>
            </div>
            <p className="text-xs text-blue-300">© 2024 Koyili Hospital. All Rights Reserved.</p>
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