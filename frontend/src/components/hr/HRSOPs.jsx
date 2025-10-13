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

  // Navigation structure for all SOPs
  const navigation = [
    { id: 'dashboard', title: 'Dashboard', icon: Home, category: 'Overview' },
    { id: 'preamble', title: 'Preamble', icon: BookOpen, category: 'Introduction' },
    { id: 'sop1', title: 'SOP 001: Onboarding', icon: Users, category: 'Recruitment' },
    { id: 'sop2', title: 'SOP 002: Leave Management', icon: Calendar, category: 'Operations' },
    { id: 'sop3', title: 'SOP 003: Performance Appraisal', icon: Award, category: 'Performance' },
    { id: 'sop4', title: 'SOP 004: Payroll Processing', icon: DollarSign, category: 'Payroll' },
    { id: 'sop5', title: 'SOP 005: Grievance Handling', icon: Scale, category: 'Employee Relations' },
    { id: 'sop6', title: 'SOP 006: Exit Process', icon: Users, category: 'Separation' },
    { id: 'sop7', title: 'SOP 007: Training', icon: BookOpen, category: 'Development' },
    { id: 'sop8', title: 'SOP 008: Attendance', icon: Clock, category: 'Operations' },
    { id: 'sop9', title: 'SOP 009: Recruitment', icon: Users, category: 'Recruitment' },
    { id: 'sop10', title: 'SOP 010: Document Management', icon: FileText, category: 'Administration' }
  ];

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
          {Object.entries(sopsQuickRef).map(([key, items]) => (
            <div key={key} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-900 mb-3 capitalize">{key} Process</h3>
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li key={idx} className="text-sm text-slate-700 flex items-start">
                    <ChevronRight className="w-4 h-4 text-slate-400 mr-1 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
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
                      {pointIdx + 1}.
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Standard Operating Procedures</h1>
            <p className="text-sm text-slate-600 mt-1">Standardized processes and operational guidelines</p>
          </div>
          <button className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center shadow-md">
            <Download className="w-5 h-5 mr-2" />
            Download All
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search SOPs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredSOPs.map((sopCategory) => (
            <div key={sopCategory.category} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-green-400 transition-all shadow-sm">
              <div className="flex justify-between items-start cursor-pointer" onClick={() => toggleExpand(`sop-${sopCategory.category}`)}>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">
                      Category {sopCategory.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{sopCategory.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">{sopCategory.sops.length} SOPs in this category</p>
                </div>
                <button className="ml-4 text-slate-400 hover:text-slate-600">
                  {expandedItems[`sop-${sopCategory.category}`] ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
              </div>
              
              {expandedItems[`sop-${sopCategory.category}`] && (
                <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
                  {sopCategory.sops.map((sop, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-sm font-bold text-green-600">{sop.code}</span>
                        <span className="text-slate-900 font-medium">{sop.name}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">View</button>
                        <button className="text-slate-600 hover:text-slate-700 text-sm font-semibold">Download</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HRSOPs;