import React, { useState, useMemo, useRef } from 'react';
import { 
  Home, BookOpen, FileText, Calendar, Users, 
  DollarSign, Award, Download, Printer, Search,
  ChevronRight, CheckCircle, X, Menu, ArrowLeft, Zap, Clock, Scale,
  Target, GitBranch, TrendingUp, Activity, GraduationCap, BarChart3
} from 'lucide-react';
import { sopsData, sopsQuickRef } from './sopsData';

// Import SOP Tools
import SOPProcedureWizard from './SOPProcedureWizard';
import SOPProcessFlow from './SOPProcessFlow';
import SOPImpactAnalyzer from './SOPImpactAnalyzer';
import SOPChangeManagement from './SOPChangeManagement';
import SOPEffectivenessMonitor from './SOPEffectivenessMonitor';
import SOPTrainingCertification from './SOPTrainingCertification';
import SOPAuditReview from './SOPAuditReview';
import SOPAnalyticsDashboard from './SOPAnalyticsDashboard';

const HRSOPs = ({ setActiveModule }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const contentRef = useRef(null);

  // State for SOP Tools Modals
  const [isProcedureWizardOpen, setIsProcedureWizardOpen] = useState(false);
  const [isProcessFlowOpen, setIsProcessFlowOpen] = useState(false);
  const [isImpactAnalyzerOpen, setIsImpactAnalyzerOpen] = useState(false);
  const [isChangeManagementOpen, setIsChangeManagementOpen] = useState(false);
  const [isEffectivenessMonitorOpen, setIsEffectivenessMonitorOpen] = useState(false);
  const [isTrainingCertificationOpen, setIsTrainingCertificationOpen] = useState(false);
  const [isAuditReviewOpen, setIsAuditReviewOpen] = useState(false);
  const [isAnalyticsDashboardOpen, setIsAnalyticsDashboardOpen] = useState(false);

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
  }, [navigation]);

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
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full -ml-40 -mb-40"></div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-4">
                Standard Operating Procedures
              </div>
              <h1 className="text-4xl font-bold mb-3">HR SOPs Management System</h1>
              <p className="text-teal-100 text-lg max-w-3xl leading-relaxed">
                Comprehensive Standard Operating Procedures for HR operations at Koyili Hospital. 
                Streamline processes, ensure compliance, and maintain operational excellence across all HR functions.
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-6 py-3 bg-white text-teal-700 rounded-lg font-semibold hover:bg-teal-50 transition-all shadow-lg flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Create New SOP</span>
            </button>
            <button className="px-6 py-3 bg-teal-700 bg-opacity-30 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-opacity-40 transition-all border border-white border-opacity-30 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule Review</span>
            </button>
            <button className="px-6 py-3 bg-teal-700 bg-opacity-30 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-opacity-40 transition-all border border-white border-opacity-30 flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Training Hub</span>
            </button>
            <button className="px-6 py-3 bg-teal-700 bg-opacity-30 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-opacity-40 transition-all border border-white border-opacity-30 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Export Library</span>
            </button>
          </div>
        </div>
      </div>

      {/* SOP Management Tools */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">SOP Management Tools</h2>
          <p className="text-gray-600">Comprehensive tools for creating, managing, and optimizing Standard Operating Procedures</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* SOP Procedure Wizard */}
          <div
            onClick={() => setIsProcedureWizardOpen(true)}
            className="bg-gradient-to-br from-purple-50 to-indigo-100 border-2 border-purple-300 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all group"
          >
            <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">SOP Procedure Wizard</h3>
            <p className="text-sm text-gray-600 mb-4">Step-by-step guide to create and implement new SOPs with templates and best practices</p>
            <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
              <span>Launch Wizard</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* SOP Process Flow */}
          <div
            onClick={() => setIsProcessFlowOpen(true)}
            className="bg-gradient-to-br from-blue-50 to-cyan-100 border-2 border-blue-300 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all group"
          >
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <GitBranch className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">SOP Process Flow</h3>
            <p className="text-sm text-gray-600 mb-4">Visualize and map process workflows with interactive flowcharts and dependency tracking</p>
            <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
              <span>View Flows</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* SOP Impact Analyzer */}
          <div
            onClick={() => setIsImpactAnalyzerOpen(true)}
            className="bg-gradient-to-br from-purple-50 to-pink-100 border-2 border-purple-300 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all group"
          >
            <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">SOP Impact Analyzer</h3>
            <p className="text-sm text-gray-600 mb-4">Assess change impact, identify dependencies, and predict compliance risks before implementation</p>
            <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
              <span>Analyze Impact</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* SOP Change Management */}
          <div
            onClick={() => setIsChangeManagementOpen(true)}
            className="bg-gradient-to-br from-cyan-50 to-blue-100 border-2 border-cyan-300 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all group"
          >
            <div className="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <GitBranch className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Change Management</h3>
            <p className="text-sm text-gray-600 mb-4">Version control, approval workflows, and complete audit trail for all SOP modifications</p>
            <div className="flex items-center text-cyan-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
              <span>Manage Changes</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* SOP Effectiveness Monitor */}
          <div
            onClick={() => setIsEffectivenessMonitorOpen(true)}
            className="bg-gradient-to-br from-teal-50 to-emerald-100 border-2 border-teal-300 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all group"
          >
            <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Effectiveness Monitor</h3>
            <p className="text-sm text-gray-600 mb-4">Real-time tracking of SOP adherence, deviations, and performance metrics</p>
            <div className="flex items-center text-teal-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
              <span>Monitor Performance</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* SOP Training & Certification */}
          <div
            onClick={() => setIsTrainingCertificationOpen(true)}
            className="bg-gradient-to-br from-indigo-50 to-purple-100 border-2 border-indigo-300 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all group"
          >
            <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Training & Certification</h3>
            <p className="text-sm text-gray-600 mb-4">Manage SOP training programs, track competency assessments, and issue certifications</p>
            <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
              <span>Manage Training</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* SOP Audit & Review */}
          <div
            onClick={() => setIsAuditReviewOpen(true)}
            className="bg-gradient-to-br from-orange-50 to-red-100 border-2 border-orange-300 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all group"
          >
            <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Search className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Audit & Review System</h3>
            <p className="text-sm text-gray-600 mb-4">Schedule audits, track findings, manage corrective actions, and generate audit reports</p>
            <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
              <span>Open Audit System</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* SOP Analytics Dashboard */}
          <div
            onClick={() => setIsAnalyticsDashboardOpen(true)}
            className="bg-gradient-to-br from-cyan-50 to-blue-100 border-2 border-cyan-300 rounded-xl p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all group"
          >
            <div className="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Analytics Dashboard</h3>
            <p className="text-sm text-gray-600 mb-4">Comprehensive performance metrics, compliance trends, and predictive insights</p>
            <div className="flex items-center text-cyan-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
              <span>View Analytics</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Live Monitoring Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Activity className="w-6 h-6 mr-3 text-teal-600" />
          Live SOP Monitoring
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border-2 border-teal-200 shadow-sm">
            <div className="text-4xl font-bold text-teal-600 mb-2">12</div>
            <div className="text-sm text-gray-600 font-semibold">Total SOPs</div>
            <div className="text-xs text-gray-500 mt-1">Active Procedures</div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-sm">
            <div className="text-4xl font-bold text-green-600 mb-2">93%</div>
            <div className="text-sm text-gray-600 font-semibold">Compliance Rate</div>
            <div className="text-xs text-gray-500 mt-1">Average Adherence</div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">524</div>
            <div className="text-sm text-gray-600 font-semibold">Trained Users</div>
            <div className="text-xs text-gray-500 mt-1">All Departments</div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-purple-200 shadow-sm">
            <div className="text-4xl font-bold text-purple-600 mb-2">v3.0</div>
            <div className="text-sm text-gray-600 font-semibold">Current Version</div>
            <div className="text-xs text-gray-500 mt-1">Updated Jan 2024</div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(sopsQuickRef).map(([key, refData]) => (
            <div key={key} className="bg-white rounded-xl p-5 border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all hover:border-teal-400">
              <h3 className="font-bold text-gray-800 mb-3 text-lg">{refData.title}</h3>
              <ul className="space-y-2">
                {refData.steps.map((step, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Section Navigator */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Access to SOPs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {navigation.filter(nav => nav.id !== 'dashboard').map((nav) => {
            const IconComponent = nav.icon;
            return (
              <button
                key={nav.id}
                onClick={() => setActiveSection(nav.id)}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-teal-50 hover:border-teal-400 border-2 border-gray-200 transition-all text-left group"
              >
                <IconComponent className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-medium text-gray-900 flex-1">{nav.title}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
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
          <div className="bg-gradient-to-r from-teal-900 to-emerald-800 text-white px-16 py-8">
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
                  <p className="text-teal-200 text-sm mt-1">Human Resources Department</p>
                  <p className="text-teal-300 text-xs mt-0.5">Pallikkunnu, Talap, Kannur, Kerala</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <p className="text-xs text-teal-200">ISO 9001:2015 | NABH</p>
                </div>
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="px-16 py-10 bg-white border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{section.title}</h2>
            <p className="text-sm text-gray-600">Standard Operating Procedures Manual - 2025</p>
          </div>

          {/* Content with Justified Text */}
          <div className="px-16 py-12 bg-white">
            <div className="text-[15px] leading-[1.8] text-gray-800 text-justify space-y-4">
              {section.content.split('\n\n').map((para, idx) => {
                // Check if it's a bullet list
                if (para.includes('•')) {
                  const items = para.split('\n').filter(line => line.trim().startsWith('•'));
                  return (
                    <ul key={idx} className="space-y-2.5 pl-6 my-4">
                      {items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start">
                          <span className="text-teal-700 font-bold mr-3 mt-1 text-lg">●</span>
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
          <div className="border-t-2 border-teal-900 bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 px-16 py-8">
            <div className="grid grid-cols-4 gap-8 text-white mb-4">
              <div>
                <p className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-2">Version</p>
                <p className="text-sm font-semibold">3.0</p>
              </div>
              <div>
                <p className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-2">Effective Date</p>
                <p className="text-sm font-semibold">01 January 2024</p>
              </div>
              <div>
                <p className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-2">Approved By</p>
                <p className="text-sm font-semibold">Board of Directors</p>
              </div>
              <div>
                <p className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-2">Classification</p>
                <p className="text-sm font-semibold">Internal Use Only</p>
              </div>
            </div>
            <div className="border-t border-teal-700 pt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Scale className="w-4 h-4 text-amber-400" />
                <p className="text-xs text-teal-200">Compliant with NABH & ISO 9001:2015 Standards</p>
              </div>
              <p className="text-xs text-teal-300">© 2024 Koyili Hospital. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      );
    }

    // Regular SOP rendering (same as before)
    return (
      <div className="bg-white shadow-sm">
        {/* Professional Header with Logo */}
        <div className="bg-gradient-to-r from-teal-900 to-emerald-800 text-white px-16 py-6">
          {/* Top Row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-6">
              {/* Hospital Logo */}
              <img 
                src="https://customer-assets.emergentagent.com/job_project-hub-123/artifacts/mpnrrrfw_images.jpeg" 
                alt="Koyili Hospital Logo" 
                className="w-20 h-20 object-contain bg-white rounded-lg p-2 shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
                <p className="text-teal-200 text-sm mt-1">Human Resources Department</p>
                <p className="text-teal-300 text-xs mt-0.5">Standard Operating Procedures</p>
              </div>
            </div>
            <div className="text-right space-y-2">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 inline-block">
                <p className="text-xs text-teal-200">ISO 9001:2015 | NABH Accredited</p>
              </div>
              <div className="flex items-center justify-end space-x-4 text-xs text-teal-200">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold">Doc #:</span>
                  <span>{section.number}</span>
                </div>
                <div className="w-px h-4 bg-teal-600"></div>
                <div className="flex items-center space-x-1">
                  <span className="font-semibold">Version:</span>
                  <span>3.0</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* SOP Title Section */}
          <div className="border-t-2 border-teal-700/50 pt-6">
            <div className="flex items-baseline justify-between">
              <div className="flex-1">
                <div className="flex items-baseline space-x-4 mb-2">
                  <span className="text-amber-400 font-bold text-lg">{section.number}</span>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="flex items-center space-x-4 text-xs text-teal-300">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Effective: 01 Jan 2024</span>
                  </div>
                  <div className="w-px h-3 bg-teal-600"></div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Status: Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Document Metadata Bar */}
        <div className="bg-gray-50 px-16 py-3 border-b border-gray-300">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">Scope:</span>
                <span>Hospital-wide</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">Owner:</span>
                <span>HR Department</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">Next Review:</span>
                <span>01 Jan 2025</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Classification:</span>
              <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-semibold">Internal Use Only</span>
            </div>
          </div>
        </div>

        {/* Content with Professional Formatting */}
        <div className="px-16 py-12 bg-white">
          {/* Simple content */}
          {section.content && !section.subsections && (
            <p className="text-[15px] leading-[1.8] text-gray-800 text-justify" style={{ lineHeight: '1.8' }}>
              {section.content}
            </p>
          )}

          {/* Subsections with nested support */}
          {section.subsections && section.subsections.map((subsection, idx) => (
            <div key={idx} className="mb-10">
              <div className="mb-6 pb-3 border-b-2 border-teal-900 bg-gradient-to-r from-teal-50 to-transparent px-4 py-3 -mx-4">
                <div className="flex items-baseline space-x-4">
                  <span className="text-2xl font-bold text-teal-900 min-w-[3rem]">{subsection.number}</span>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">{subsection.title}</h3>
                </div>
              </div>

              {subsection.content && (
                <div className="mb-6 pl-12">
                  <div className="text-[15px] leading-[1.8] text-gray-800 text-justify space-y-4" style={{ lineHeight: '1.8' }}>
                    {subsection.content.split('\n\n').map((para, pIdx) => {
                      if (para.trim().startsWith('•') || para.trim().startsWith('-')) {
                        const items = para.split('\n').filter(line => line.trim());
                        return (
                          <ul key={pIdx} className="space-y-2.5 pl-6">
                            {items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start">
                                <span className="text-teal-700 font-bold mr-3 mt-1 text-lg">●</span>
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

              {subsection.points && (
                <ul className="pl-12 space-y-3 mb-6">
                  {subsection.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start">
                      <span className="text-teal-700 font-bold mr-3 mt-1 text-lg">●</span>
                      <p className="text-[15px] leading-[1.8] text-gray-800 flex-1 text-justify">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {subsection.table && (
                <div className="pl-12 mb-8">
                  <div className="border-2 border-gray-300 overflow-hidden rounded-lg shadow-sm">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-teal-900 to-emerald-800">
                          {subsection.table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="px-6 py-4 text-left text-sm font-bold text-white border-r border-teal-700 last:border-r-0">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {subsection.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={`${rIdx % 2 === 0 ? 'bg-white' : 'bg-teal-50'} border-b border-gray-200 last:border-b-0 hover:bg-teal-100 transition-colors`}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-6 py-3.5 text-[14px] leading-relaxed text-gray-800 border-r border-gray-200 last:border-r-0 align-top">
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

              {/* Nested subsections (level 2) */}
              {subsection.subsections && subsection.subsections.map((nestedSub, nestedIdx) => (
                <div key={nestedIdx} className="mb-8 pl-12">
                  <div className="mb-4 pb-2 border-b border-teal-600 bg-gradient-to-r from-teal-25 to-transparent px-3 py-2">
                    <div className="flex items-baseline space-x-3">
                      <span className="text-lg font-bold text-teal-800 min-w-[2.5rem]">{nestedSub.number}</span>
                      <h4 className="text-lg font-semibold text-gray-800 tracking-wide">{nestedSub.title}</h4>
                    </div>
                  </div>

                  {nestedSub.content && (
                    <div className="mb-4 pl-8">
                      <div className="text-[14px] leading-[1.8] text-gray-800 text-justify space-y-3" style={{ lineHeight: '1.8' }}>
                        {nestedSub.content.split('\n\n').map((para, pIdx) => {
                          if (para.trim().startsWith('•') || para.trim().startsWith('-')) {
                            const items = para.split('\n').filter(line => line.trim());
                            return (
                              <ul key={pIdx} className="space-y-2 pl-4">
                                {items.map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-start">
                                    <span className="text-teal-600 font-bold mr-2 mt-0.5">●</span>
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

                  {nestedSub.points && (
                    <ul className="pl-8 space-y-2 mb-4">
                      {nestedSub.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start">
                          <span className="text-teal-600 font-bold mr-2 mt-0.5">●</span>
                          <p className="text-[14px] leading-[1.8] text-gray-800 flex-1 text-justify">
                            {point}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Enhanced Footer */}
        <div className="border-t-2 border-teal-900 bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 px-16 py-8">
          <div className="grid grid-cols-3 gap-8 mb-4">
            <div>
              <p className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-2">Document Information</p>
              <div className="space-y-1 text-white">
                <p className="text-sm"><span className="font-semibold">Reference:</span> {section.number}</p>
                <p className="text-sm"><span className="font-semibold">Classification:</span> Internal Use Only</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-2">Version Control</p>
              <div className="space-y-1 text-white">
                <p className="text-sm"><span className="font-semibold">Version:</span> 3.0</p>
                <p className="text-sm"><span className="font-semibold">Last Updated:</span> Jan 2024</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-2">Status</p>
              <div className="space-y-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Active & Current
                </div>
                <p className="text-xs text-teal-200 mt-2">Next Review: Jan 2025</p>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-700 pt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Scale className="w-4 h-4 text-amber-400" />
              <p className="text-xs text-teal-200">Compliant with NABH, ISO 9001:2015 Standards</p>
            </div>
            <p className="text-xs text-teal-300">© 2024 Koyili Hospital. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Sidebar (same as before) */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-80'} bg-white border-r-2 border-gray-300 flex flex-col transition-all duration-300 shadow-xl`}>
        {setActiveModule && !sidebarCollapsed && (
          <div className="p-3 border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => setActiveModule('dashboard')}
              className="w-full flex items-center space-x-2 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to HR Dashboard</span>
            </button>
          </div>
        )}

        <div className="bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-900 p-4 border-b-2 border-amber-500">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-teal-900" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">HR SOPs Manual</h2>
                  <p className="text-xs text-teal-200">12 Procedures</p>
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

        <div className="flex-1 overflow-y-auto py-4">
          {!sidebarCollapsed ? (
            <div className="space-y-1 px-2">
              {Object.entries(navigationByCategory).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <div className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
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
                            ? 'bg-teal-600 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100'
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
                        ? 'bg-teal-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
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
        <div className="bg-white border-b-2 border-gray-300 px-6 py-4 shadow-lg z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <h1 className="text-xl font-bold text-gray-900">Koyili Hospital • HR SOPs</h1>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-full">
                  Standard Procedures
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search SOPs, procedures, keywords..."
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => searchQuery && setShowSearch(true)}
                  className="pl-12 pr-10 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent w-96 text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSearchResults([]);
                      setShowSearch(false);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                {searchQuery && <span className="absolute -bottom-6 left-0 text-xs text-gray-600">{searchResults.length} results found</span>}
              </div>

              {/* Action Buttons */}
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold flex items-center text-sm">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </button>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold flex items-center text-sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>

          {/* Search Results Dropdown */}
          {showSearch && searchResults.length > 0 && (
            <div className="absolute top-16 right-6 w-[450px] bg-white border-2 border-gray-300 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50 mt-2">
              <div className="p-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900">
                  Search Results ({searchResults.length})
                </span>
                <button
                  onClick={() => setShowSearch(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="divide-y divide-gray-100">
                {searchResults.slice(0, 20).map((result, idx) => (
                  <button
                    key={idx}
                    onClick={() => jumpToSection(result.sectionId)}
                    className="w-full p-4 text-left hover:bg-teal-50 transition-colors group"
                  >
                    <div className="flex items-start space-x-3">
                      <Zap className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-teal-600">
                          {result.title}
                        </p>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                          {result.preview}
                        </p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
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
          <div className="max-w-7xl mx-auto">
            {activeSection === 'dashboard' ? renderDashboard() : renderSection(activeSection)}
          </div>
        </div>
      </div>

      {/* SOP Tool Modals */}
      <SOPProcedureWizard 
        isOpen={isProcedureWizardOpen} 
        onClose={() => setIsProcedureWizardOpen(false)} 
        onNavigate={jumpToSection}
      />
      <SOPProcessFlow 
        isOpen={isProcessFlowOpen} 
        onClose={() => setIsProcessFlowOpen(false)} 
        onNavigate={jumpToSection}
      />
      <SOPImpactAnalyzer 
        isOpen={isImpactAnalyzerOpen} 
        onClose={() => setIsImpactAnalyzerOpen(false)} 
        onNavigate={jumpToSection}
      />
      <SOPChangeManagement 
        isOpen={isChangeManagementOpen} 
        onClose={() => setIsChangeManagementOpen(false)} 
        onNavigate={jumpToSection}
      />
      <SOPEffectivenessMonitor 
        isOpen={isEffectivenessMonitorOpen} 
        onClose={() => setIsEffectivenessMonitorOpen(false)} 
        onNavigate={jumpToSection}
      />
      <SOPTrainingCertification 
        isOpen={isTrainingCertificationOpen} 
        onClose={() => setIsTrainingCertificationOpen(false)} 
        onNavigate={jumpToSection}
      />
      <SOPAuditReview 
        isOpen={isAuditReviewOpen} 
        onClose={() => setIsAuditReviewOpen(false)} 
        onNavigate={jumpToSection}
      />
      <SOPAnalyticsDashboard 
        isOpen={isAnalyticsDashboardOpen} 
        onClose={() => setIsAnalyticsDashboardOpen(false)} 
        onNavigate={jumpToSection}
      />
    </div>
  );
};

export default HRSOPs;
