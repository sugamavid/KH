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
        <div className="bg-white shadow-sm border border-slate-200">
          {/* Clean Professional Header */}
          <div className="border-b-4 border-blue-900 bg-white px-16 py-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-6">
                {/* Simple Professional Logo */}
                <div className="w-16 h-16 border-2 border-blue-900 flex items-center justify-center bg-blue-900">
                  <span className="text-white font-bold text-2xl">KH</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 tracking-tight">KOYILI HOSPITAL</h1>
                  <p className="text-sm text-slate-600 mt-0.5">Pallikkunnu, Talap, Kannur - 670 002, Kerala, India</p>
                </div>
              </div>
              <div className="text-right text-xs text-slate-600">
                <p>ISO 9001:2015 Certified</p>
                <p>NABH Accredited</p>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">Human Resources Department</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-1">Standard Operating Procedures</h2>
            </div>
          </div>

          {/* Title */}
          <div className="px-16 py-12 border-b border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">{section.title}</h3>
            <p className="text-sm text-slate-600">Document Type: Foundational Policy Document</p>
          </div>

          {/* Content */}
          <div className="px-16 py-12">
            <p className="text-base leading-relaxed text-slate-800 text-justify">
              {section.content}
            </p>
          </div>

          {/* Clean Footer */}
          <div className="border-t border-slate-200 px-16 py-6 bg-slate-50">
            <div className="grid grid-cols-4 gap-8 text-xs text-slate-600">
              <div>
                <p className="font-semibold text-slate-900">Version</p>
                <p>3.0</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Effective Date</p>
                <p>01 January 2024</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Approved By</p>
                <p>Board of Directors</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Classification</p>
                <p>Internal Use Only</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Professional SOP Layout
    return (
      <div className="bg-white shadow-sm border border-slate-200">
        {/* Clean Header */}
        <div className="border-b-4 border-blue-900 bg-white">
          <div className="px-16 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 border-2 border-blue-900 flex items-center justify-center bg-blue-900">
                  <span className="text-white font-bold text-lg">KH</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-slate-900">KOYILI HOSPITAL</h1>
                  <p className="text-xs text-slate-600">Human Resources Department</p>
                </div>
              </div>
              <div className="text-right text-xs text-slate-600">
                <p className="font-semibold text-slate-900">Document No.</p>
                <p>{section.number}</p>
              </div>
            </div>
          </div>
          
          {/* Title Section */}
          <div className="px-16 py-6 border-t border-slate-200 bg-slate-50">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{section.title}</h2>
            {section.category && (
              <p className="text-sm text-slate-600">Category: {section.category}</p>
            )}
          </div>
        </div>

        {/* Metadata Bar */}
        <div className="bg-white px-16 py-4 border-b border-slate-200">
          <div className="grid grid-cols-5 gap-6 text-xs">
            <div>
              <p className="text-slate-500 uppercase tracking-wider mb-1">Version</p>
              <p className="text-slate-900 font-semibold">3.0</p>
            </div>
            <div>
              <p className="text-slate-500 uppercase tracking-wider mb-1">Effective</p>
              <p className="text-slate-900 font-semibold">01 Jan 2024</p>
            </div>
            <div>
              <p className="text-slate-500 uppercase tracking-wider mb-1">Review</p>
              <p className="text-slate-900 font-semibold">01 Jan 2025</p>
            </div>
            <div>
              <p className="text-slate-500 uppercase tracking-wider mb-1">Owner</p>
              <p className="text-slate-900 font-semibold">HR Department</p>
            </div>
            <div>
              <p className="text-slate-500 uppercase tracking-wider mb-1">Status</p>
              <p className="text-green-700 font-semibold">Active</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-16 py-12">
          {/* Simple content */}
          {section.content && !section.subsections && (
            <p className="text-base leading-relaxed text-slate-800">
              {section.content}
            </p>
          )}

          {/* Subsections */}
          {section.subsections && section.subsections.map((subsection, idx) => (
            <div key={idx} className="mb-12">
              {/* Section Header */}
              <div className="mb-6 pb-2 border-b-2 border-slate-900">
                <div className="flex items-baseline space-x-3">
                  <span className="text-xl font-bold text-blue-900 min-w-[3rem]">{subsection.number}</span>
                  <h3 className="text-xl font-bold text-slate-900 uppercase">{subsection.title}</h3>
                </div>
              </div>

              {/* Content */}
              {subsection.content && (
                <div className="mb-6 pl-14">
                  <p className="text-base leading-relaxed text-slate-800 whitespace-pre-line">
                    {subsection.content}
                  </p>
                </div>
              )}

              {/* Bullet Points */}
              {subsection.points && (
                <ul className="pl-14 space-y-2 mb-6">
                  {subsection.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start">
                      <span className="text-blue-900 mr-3 mt-1.5">•</span>
                      <p className="text-base leading-relaxed text-slate-800 flex-1">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {/* Nested subsections */}
              {subsection.subsections && subsection.subsections.map((nestedSub, nestedIdx) => (
                <div key={nestedIdx} className="pl-14 mb-6 border-l-2 border-slate-300 ml-2">
                  <div className="pl-6">
                    <h4 className="text-base font-bold text-slate-900 mb-3">
                      {nestedSub.number} {nestedSub.title}
                    </h4>
                    {nestedSub.content && (
                      <p className="text-base leading-relaxed text-slate-800 whitespace-pre-line">
                        {nestedSub.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Tables */}
              {subsection.table && (
                <div className="pl-14 mb-6">
                  <table className="min-w-full border border-slate-300">
                    <thead>
                      <tr className="bg-slate-900">
                        {subsection.table.headers.map((header, hIdx) => (
                          <th key={hIdx} className="px-6 py-3 text-left text-sm font-semibold text-white border-r border-slate-700 last:border-r-0">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {subsection.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={`${rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-b border-slate-300`}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-6 py-3 text-sm text-slate-800 border-r border-slate-200 last:border-r-0">
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

        {/* Footer */}
        <div className="border-t-4 border-blue-900 bg-slate-50 px-16 py-6">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <div className="space-y-0.5">
              <p className="font-semibold text-slate-900">Document Reference: {section.number}</p>
              <p>Classification: Internal Use Only • Status: Active & Current</p>
            </div>
            <div className="text-right space-y-0.5">
              <p>© 2024 Koyili Hospital</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Dedicated Left Sidebar */}
                  </div>
                </div>
                
                {/* Certification Badges */}
                <div className="flex flex-col items-end space-y-2">
                  <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-blue-950 px-4 py-2 rounded-lg font-black text-sm shadow-xl border-2 border-amber-300">
                    ✓ ISO 9001:2015
                  </div>
                  <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-lg font-bold text-xs shadow-lg">
                    NABH Accredited
                  </div>
                </div>
              </div>
              
              {/* Department Banner */}
              <div className="bg-gradient-to-r from-blue-800/50 to-blue-900/50 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-600/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-950" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Human Resources Department</h2>
                      <p className="text-blue-300 text-sm">Standard Operating Procedures Manual</p>
                    </div>
                  </div>
                  <div className="bg-blue-950 px-4 py-2 rounded-lg">
                    <p className="text-amber-400 text-xs font-bold">Version 3.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document Title Section */}
          <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 px-12 py-12 border-b-4 border-amber-500">
            <div className="text-center">
              <div className="inline-block bg-blue-50 rounded-2xl px-8 py-4 mb-4 border-2 border-blue-200">
                <BookOpen className="w-16 h-16 text-blue-900 mx-auto mb-3" />
                <h3 className="text-3xl font-black text-blue-950 uppercase tracking-wider">{section.title}</h3>
              </div>
              <p className="text-slate-600 text-sm mt-4 font-semibold">Foundation Document for HR Standard Operating Procedures</p>
            </div>
          </div>

          {/* Content with Decorative First Letter */}
          <div className="px-16 py-12 bg-gradient-to-b from-white to-slate-50">
            <div className="prose prose-xl max-w-none">
              <p className="text-lg leading-loose text-slate-800 text-justify first-letter:text-7xl first-letter:font-black first-letter:text-blue-900 first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:leading-none">
                {section.content}
              </p>
            </div>
          </div>

          {/* Premium Footer */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-12 py-8 border-t-4 border-amber-500">
            <div className="grid grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Version</p>
                <p className="text-amber-400 font-bold text-lg">3.0</p>
              </div>
              <div className="text-center border-l border-slate-700">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Effective Date</p>
                <p className="text-white font-bold">01 January 2024</p>
              </div>
              <div className="text-center border-l border-slate-700">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Approved By</p>
                <p className="text-green-400 font-bold">Board of Directors</p>
              </div>
              <div className="text-center border-l border-slate-700">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Status</p>
                <p className="text-green-400 font-bold flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 mr-1" /> Active
                </p>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
              <p className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Digitally Signed & Authenticated
              </p>
              <p>© 2024 Koyili Hospital. All Rights Reserved. Confidential Document.</p>
            </div>
          </div>
        </div>
      );
    }

    // For regular SOPs - Enhanced Premium Design
    return (
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-200">
        {/* Premium SOP Header with Logo */}
        <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full -ml-32 -mb-32"></div>
          </div>
          
          <div className="relative z-10 px-12 py-8">
            <div className="flex items-center justify-between mb-6">
              {/* Logo and Hospital Name */}
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-black text-blue-950">K</div>
                      <div className="text-xs font-bold text-blue-900 -mt-1">H</div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-black tracking-tight">KOYILI HOSPITAL</h1>
                  <p className="text-blue-200 text-xs">Human Resources Department</p>
                </div>
              </div>
              
              {/* Document Control Badges */}
              <div className="flex items-center space-x-3">
                <div className="bg-amber-500 text-blue-950 px-3 py-1.5 rounded-lg font-black text-xs shadow-xl border-2 border-amber-400">
                  CONTROLLED DOCUMENT
                </div>
                <div className="bg-blue-950 text-amber-400 px-3 py-1.5 rounded-lg font-bold text-xs border border-amber-500">
                  {section.number}
                </div>
              </div>
            </div>
            
            {/* SOP Title */}
            <div className="bg-gradient-to-r from-blue-900/60 to-blue-800/60 backdrop-blur-sm rounded-2xl px-8 py-6 border border-blue-600/30 shadow-xl">
              <h2 className="text-3xl font-black text-white mb-3 tracking-wide">{section.title}</h2>
              {section.category && (
                <div className="flex items-center space-x-2">
                  <span className="bg-amber-500 text-blue-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                    {section.category}
                  </span>
                  <span className="text-blue-300 text-xs">• Procedure Manual</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Document Control Panel */}
        <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-12 py-5 border-b-4 border-amber-500">
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-white rounded-xl px-4 py-3 shadow-md border border-blue-100">
              <p className="text-slate-500 text-xs font-semibold mb-1">VERSION</p>
              <p className="text-blue-950 font-black text-lg">3.0</p>
            </div>
            <div className="bg-white rounded-xl px-4 py-3 shadow-md border border-blue-100">
              <p className="text-slate-500 text-xs font-semibold mb-1">EFFECTIVE</p>
              <p className="text-slate-900 font-bold text-sm">01 Jan 2024</p>
            </div>
            <div className="bg-white rounded-xl px-4 py-3 shadow-md border border-blue-100">
              <p className="text-slate-500 text-xs font-semibold mb-1">REVIEW</p>
              <p className="text-slate-900 font-bold text-sm">01 Jan 2025</p>
            </div>
            <div className="bg-white rounded-xl px-4 py-3 shadow-md border border-blue-100">
              <p className="text-slate-500 text-xs font-semibold mb-1">OWNER</p>
              <p className="text-slate-900 font-bold text-sm">HR Dept</p>
            </div>
            <div className="bg-green-50 rounded-xl px-4 py-3 shadow-md border border-green-200">
              <p className="text-green-600 text-xs font-semibold mb-1">STATUS</p>
              <p className="text-green-700 font-bold text-sm flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Active
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area with Premium Styling */}
        <div className="px-12 py-10 bg-gradient-to-b from-white via-slate-50 to-white">
          {/* Watermark */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <div className="text-9xl font-black text-blue-900 transform rotate-12">KH</div>
          </div>

          {/* Simple content */}
          {section.content && !section.subsections && (
            <div className="prose prose-lg max-w-none relative z-10">
              <p className="text-base leading-relaxed text-justify text-slate-800">
                {section.content}
              </p>
            </div>
          )}

          {/* Subsections with Enhanced Design */}
          {section.subsections && section.subsections.map((subsection, idx) => (
            <div key={idx} className="mb-12 relative z-10">
              {/* Section Header with Premium Badge */}
              <div className="flex items-center space-x-4 mb-6 pb-4 border-b-2 border-blue-900">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform">
                    <span className="text-white font-black text-2xl">{subsection.number}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-blue-950 uppercase tracking-wide">{subsection.title}</h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent rounded-full mt-2"></div>
                </div>
              </div>

              {/* Content */}
              {subsection.content && (
                <div className="ml-20 mb-6 bg-white rounded-xl p-6 border-l-4 border-amber-500 shadow-md">
                  <p className="text-base leading-loose text-slate-800 text-justify whitespace-pre-line">
                    {subsection.content}
                  </p>
                </div>
              )}

              {/* Bullet Points */}
              {subsection.points && (
                <ul className="ml-20 space-y-3">
                  {subsection.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start space-x-3 group">
                      <div className="w-3 h-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform shadow-md"></div>
                      <p className="text-base leading-relaxed text-slate-800 flex-1">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {/* Nested subsections */}
              {subsection.subsections && subsection.subsections.map((nestedSub, nestedIdx) => (
                <div key={nestedIdx} className="ml-20 mt-6 mb-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center space-x-3">
                    <span className="bg-blue-900 text-white px-4 py-1.5 rounded-lg text-sm font-black shadow-md">{nestedSub.number}</span>
                    <span>{nestedSub.title}</span>
                  </h4>
                  {nestedSub.content && (
                    <p className="text-base leading-relaxed text-slate-700 whitespace-pre-line ml-2">
                      {nestedSub.content}
                    </p>
                  )}
                </div>
              ))}

              {/* Enhanced Table */}
              {subsection.table && (
                <div className="ml-20 mt-6 overflow-hidden rounded-2xl border-4 border-blue-200 shadow-2xl">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950">
                        {subsection.table.headers.map((header, hIdx) => (
                          <th key={hIdx} className="px-8 py-5 text-left font-black text-white text-sm uppercase tracking-wider border-r border-blue-800 last:border-r-0">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {subsection.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={`${rIdx % 2 === 0 ? 'bg-white' : 'bg-blue-50'} hover:bg-amber-50 transition-colors border-b border-blue-100 last:border-b-0`}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-8 py-4 text-slate-800 text-sm leading-relaxed border-r border-blue-100 last:border-r-0">
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

        {/* Premium Footer */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white border-t-4 border-amber-500">
          <div className="px-12 py-8">
            <div className="grid grid-cols-3 gap-8 mb-6">
              <div className="border-r border-slate-700">
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Document Reference</p>
                <p className="font-bold text-lg text-amber-400">{section.number}</p>
                <p className="text-xs text-slate-500 mt-1">Standard Operating Procedure</p>
              </div>
              <div className="border-r border-slate-700">
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Classification</p>
                <p className="font-bold text-white">Internal Use Only</p>
                <p className="text-xs text-slate-500 mt-1">Confidential & Controlled</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Document Status</p>
                <p className="font-bold text-green-400 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Active & Current
                </p>
                <p className="text-xs text-slate-500 mt-1">Version 3.0 • 2024</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-700 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-slate-400">Digitally Signed & Authenticated</span>
                </div>
                <div className="text-slate-600">•</div>
                <span className="text-slate-400">Approved by Board of Directors</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <span>© 2024 Koyili Hospital</span>
                <span>•</span>
                <span>All Rights Reserved</span>
              </div>
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