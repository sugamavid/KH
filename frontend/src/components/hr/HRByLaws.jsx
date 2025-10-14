import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Home, Scale, BookOpen, FileText, Calendar, Clock, Users, 
  DollarSign, Award, AlertCircle, Download, Printer, Search,
  ChevronRight, TrendingUp, CheckCircle, Shield, X, ChevronDown,
  Menu, ArrowLeft, Filter, Zap, Activity, Heart, Lock, LogOut, 
  Monitor, Globe, MessageCircle, MessageSquare, UserCheck, Smile, 
  AlertTriangle, Gift, CheckSquare, Mail
} from 'lucide-react';
import { byLawsData, sections as sectionsData, quickReferenceData, keyHighlights } from './byLawsData';
import GovernanceWizard from './GovernanceWizard';
import AuthorityFinder from './AuthorityFinder';
import ComplianceCenter from './ComplianceCenter';
import PolicyManager from './PolicyManager';
import TrainingHub from './TrainingHub';
import AuditAssistant from './AuditAssistant';
import RiskMonitor from './RiskMonitor';
import ReportGenerator from './ReportGenerator';

const HRByLaws = ({ setActiveModule }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [showGovernanceWizard, setShowGovernanceWizard] = useState(false);
  const [showAuthorityFinder, setShowAuthorityFinder] = useState(false);
  const [showComplianceCenter, setShowComplianceCenter] = useState(false);
  const [showPolicyManager, setShowPolicyManager] = useState(false);
  const [showTrainingHub, setShowTrainingHub] = useState(false);
  const [showAuditAssistant, setShowAuditAssistant] = useState(false);
  const [showRiskMonitor, setShowRiskMonitor] = useState(false);
  const contentRef = useRef(null);

  // Professional Legal Document Formatter
  const renderFormattedContent = (content) => {
    if (!content) return null;
    
    const lines = content.split('\n');
    const elements = [];
    let key = 0;
    
    // Helper function to convert **text** to bold
    const renderTextWithBold = (text) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={idx} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      if (!trimmedLine) continue;
      
      // Main clause with badge styling: (a), (b), (c), (d)
      const mainClauseMatch = trimmedLine.match(/^\(([a-z])\)\s+(.+)$/);
      if (mainClauseMatch && trimmedLine.includes('**')) {
        elements.push(
          <div key={key++} className="mt-6 mb-4">
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-blue-100 text-blue-800 font-bold text-sm flex-shrink-0 border border-blue-200">
                {mainClauseMatch[1]}
              </span>
              <div className="flex-1">
                <div className="font-bold text-slate-900 text-[15px] leading-[1.6]">
                  {renderTextWithBold(mainClauseMatch[2])}
                </div>
              </div>
            </div>
          </div>
        );
        continue;
      }
      
      // Sub-clause with light blue badge: (i), (ii), (iii), (iv)
      const subClauseMatch = line.match(/^\s+((?:i{1,3}|iv|v|vi{0,3}|ix|x))\)\s+(.+)$/);
      if (subClauseMatch) {
        elements.push(
          <div key={key++} className="ml-10 mt-3 mb-2 flex items-start gap-2.5">
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold text-xs flex-shrink-0 mt-1 border border-blue-100">
              {subClauseMatch[1]}
            </span>
            <span className="flex-1 text-slate-700 leading-[1.6] text-justify" style={{ fontFamily: "'Noto Serif', Georgia, serif" }}>
              {renderTextWithBold(subClauseMatch[2])}
            </span>
          </div>
        );
        continue;
      }
      
      // Bullet point with proper indentation
      const bulletMatch = line.match(/^\s+•\s+(.+)$/);
      if (bulletMatch) {
        elements.push(
          <div key={key++} className="ml-10 mt-2.5 mb-2.5 flex items-start gap-3">
            <span className="text-blue-600 font-bold text-base flex-shrink-0 mt-1">•</span>
            <span className="flex-1 text-slate-700 leading-[1.6] text-justify" style={{ fontFamily: "'Noto Serif', Georgia, serif" }}>
              {renderTextWithBold(bulletMatch[1])}
            </span>
          </div>
        );
        continue;
      }
      
      // Regular paragraph with serif font
      elements.push(
        <p key={key++} className="mt-2 mb-3 text-slate-700 leading-[1.6] text-justify" style={{ fontFamily: "'Noto Serif', Georgia, serif" }}>
          {renderTextWithBold(trimmedLine)}
        </p>
      );
    }
    
    return <div className="space-y-1">{elements}</div>;
  };

  // Complete Navigation structure for all 30 sections
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

  // Advanced search functionality
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearch(false);
      return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    Object.entries(byLawsData).forEach(([sectionId, section]) => {
      if (section.title && section.title.toLowerCase().includes(lowerQuery)) {
        results.push({
          sectionId,
          title: section.title,
          type: 'title',
          preview: section.title
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
        });
      }
    });

    setSearchResults(results.slice(0, 10));
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

  // Print functionality
  const handlePrint = () => {
    window.print();
  };

  // Dashboard render with comprehensive professional design
  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Hero Section - Koyili Hospital Branding */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                <Scale className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  KOYILI HOSPITAL
                </h1>
                <p className="text-blue-100 text-lg font-semibold">HR BYLAWS IMPLEMENTATION CENTER</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white rounded-lg transition-all font-semibold"
              >
                <Printer className="w-5 h-5" />
                Print
              </button>
              <button className="flex items-center gap-2 px-5 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-all font-semibold shadow-lg">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>
          
          <p className="text-white/90 text-lg leading-relaxed max-w-4xl mb-8" style={{ fontFamily: "'Noto Serif', Georgia, serif" }}>
            Transform your understanding into action with our comprehensive implementation center. This advanced platform provides interactive tools, guided workflows, and real-time compliance tracking to ensure seamless execution of HR bylaws across all hospital operations with precision and efficiency.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold shadow-lg transition-all transform hover:scale-105">
              <FileText className="w-5 h-5" />
              Generate Report
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold shadow-lg transition-all transform hover:scale-105">
              <Calendar className="w-5 h-5" />
              Schedule Audit
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold shadow-lg transition-all transform hover:scale-105">
              <AlertCircle className="w-5 h-5" />
              Get Support
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-semibold shadow-lg transition-all transform hover:scale-105">
              <Download className="w-5 h-5" />
              Export Policies
            </button>
          </div>
        </div>
      </div>

      {/* Governance & Compliance Tools */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>
              Governance & Compliance Tools
            </h2>
            <p className="text-slate-600 text-sm">Comprehensive toolkit for governance, compliance, and administrative management</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Governance Wizard */}
          <div 
            onClick={() => setShowGovernanceWizard(true)}
            className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Governance Wizard</h3>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold inline-block">SMART GUIDANCE</div>
          </div>
          
          {/* Authority Finder */}
          <div 
            onClick={() => setShowAuthorityFinder(true)}
            className="group bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Authority Finder</h3>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold inline-block">QUICK LOOKUP</div>
          </div>
          
          {/* Compliance Center */}
          <div 
            onClick={() => setShowComplianceCenter(true)}
            className="group bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur">
              <Scale className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Compliance Center</h3>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold inline-block">COMPLIANCE MGMT</div>
          </div>
          
          {/* Policy Manager */}
          <div 
            onClick={() => setShowPolicyManager(true)}
            className="group bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur">
              <CheckSquare className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Policy Manager</h3>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold inline-block">DOCUMENT CONTROL</div>
          </div>
          
          {/* Training Hub */}
          <div 
            onClick={() => setShowTrainingHub(true)}
            className="group bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-6 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Training Hub</h3>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold inline-block">SKILL DEVELOPMENT</div>
          </div>
          
          {/* Audit Assistant */}
          <div 
            onClick={() => setShowAuditAssistant(true)}
            className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Audit Assistant</h3>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold inline-block">REVIEW SYSTEM</div>
          </div>
          
          {/* Risk Monitor */}
          <div 
            onClick={() => setShowRiskMonitor(true)}
            className="group bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Risk Monitor</h3>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold inline-block">THREAT ANALYSIS</div>
          </div>
          
          {/* Report Generator */}
          <div className="group bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Report Generator</h3>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold inline-block">ANALYTICS SUITE</div>
          </div>
        </div>
      </div>

      {/* Live Monitoring */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>
              Live Monitoring
            </h2>
            <p className="text-slate-600 text-sm">Real-time insights and analytics for organizational oversight</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Bylaw Sections */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">EXPLORE</span>
            </div>
            <div className="text-4xl font-bold text-blue-900 mb-2">30</div>
            <div className="text-blue-800 font-semibold mb-1">Bylaw Sections</div>
            <div className="text-blue-600 text-sm">Comprehensive coverage</div>
          </div>
          
          {/* Implementation */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-600 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">TRACK</span>
            </div>
            <div className="text-4xl font-bold text-green-900 mb-2">85%</div>
            <div className="text-green-800 font-semibold mb-1">Implementation</div>
            <div className="text-green-600 text-sm">Real-time tracking</div>
          </div>
          
          {/* Active Users */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-600 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">LIVE</span>
            </div>
            <div className="text-4xl font-bold text-orange-900 mb-2">524</div>
            <div className="text-orange-800 font-semibold mb-1">Active Users</div>
            <div className="text-orange-600 text-sm">Staff engagement</div>
          </div>
          
          {/* Latest Version */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-600 rounded-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">CURRENT</span>
            </div>
            <div className="text-4xl font-bold text-purple-900 mb-2">2.0</div>
            <div className="text-purple-800 font-semibold mb-1">Latest Version</div>
            <div className="text-purple-600 text-sm">Updated Feb 1, 2024</div>
          </div>
        </div>
      </div>

      {/* Implementation Toolkit */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>
              Implementation Toolkit
            </h2>
            <p className="text-slate-600 text-sm">Transform policy into practice with powerful tools and workflows</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Policy Implementation */}
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                <Zap className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Policy Implementation</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">Guided implementation with automated checklists and timelines</p>
          </div>
          
          {/* Compliance Tracker */}
          <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:shadow-lg hover:border-green-400 transition-all cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-600 transition-colors">
                <TrendingUp className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors">Compliance Tracker</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">Real-time monitoring of compliance status and metrics</p>
          </div>
          
          {/* Training Manager */}
          <div className="bg-white border-2 border-orange-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-400 transition-all cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-600 transition-colors">
                <BookOpen className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Training Manager</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">Schedule and track staff training programs and certifications</p>
          </div>
          
          {/* Document Generator */}
          <div className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-400 transition-all cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-600 transition-colors">
                <FileText className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Document Generator</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">Generate customized policy documents and templates</p>
          </div>
          
          {/* Audit Module */}
          <div className="bg-white border-2 border-red-200 rounded-xl p-6 hover:shadow-lg hover:border-red-400 transition-all cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-100 rounded-lg group-hover:bg-red-600 transition-colors">
                <Search className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">Audit Module</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">Conduct internal audits and compliance assessments</p>
          </div>
          
          {/* Reporting Dashboard */}
          <div className="bg-white border-2 border-teal-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-400 transition-all cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-teal-100 rounded-lg group-hover:bg-teal-600 transition-colors">
                <TrendingUp className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">Reporting Dashboard</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">Generate comprehensive reports and analytics</p>
          </div>
        </div>
      </div>

      {/* Section Navigator - Quick Access */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Quick Access to Sections
              </h2>
              <p className="text-slate-600 text-sm">Navigate directly to any By-Law section</p>
            </div>
          </div>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">30 Sections</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {navigation.filter(nav => nav.id !== 'dashboard').map((nav) => {
            const IconComponent = nav.icon;
            return (
              <button
                key={nav.id}
                onClick={() => setActiveSection(nav.id)}
                className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:border-blue-300 border border-slate-200 transition-all text-left group"
              >
                <div className="p-2 bg-white rounded-lg border border-slate-200 group-hover:border-blue-300 group-hover:bg-blue-50 transition-all">
                  <IconComponent className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                </div>
                <span className="text-sm font-semibold text-slate-900 flex-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {nav.title}
                </span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Section render with professional legal formatting
  const renderSection = (sectionId) => {
    const section = byLawsData[sectionId];
    if (!section) return null;

    if (sectionId === 'preamble') {
      return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
          {/* Board Approval Banner */}
          <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-b-2 border-amber-300 px-8 py-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-lg font-bold text-amber-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Official Board-Approved Document
                  </p>
                  <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">
                    CERTIFIED
                  </span>
                </div>
                <div className="flex items-center gap-6 text-sm text-amber-800">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Effective: February 1, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    Version 2.0
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Board Approved: January 15, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Preamble Header */}
          <div className="bg-gradient-to-b from-slate-50 to-white px-12 py-10 text-center border-b-2 border-slate-200">
            <Scale className="w-16 h-16 text-blue-900 mx-auto mb-4 opacity-70" />
            <h1 className="text-4xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Noto Serif', Georgia, serif" }}>
              {section.title}
            </h1>
            <div className="w-24 h-0.5 bg-blue-600 mx-auto mt-4"></div>
          </div>

          {/* Content */}
          <div className="px-12 py-10" style={{ backgroundColor: '#F9FAFB' }}>
            <div className="max-w-4xl mx-auto">
              {section.content && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                  <div className="text-[15px]" style={{ fontFamily: "'Noto Serif', Georgia, serif", lineHeight: '1.6' }}>
                    {renderFormattedContent(section.content)}
                  </div>
                </div>
              )}
              
              {section.subsections && section.subsections.map((subsection, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 mt-6">
                  {subsection.title && (
                    <h3 className="text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-semibold mr-3">
                        {subsection.number}
                      </span>
                      {subsection.title}
                    </h3>
                  )}
                  <div className="text-[15px]" style={{ fontFamily: "'Noto Serif', Georgia, serif", lineHeight: '1.6' }}>
                    {renderFormattedContent(subsection.content)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Regular sections (1-30)
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
        {/* Section Header with Dark Avid Blue */}
        <div className="px-8 py-6" style={{ backgroundColor: '#0A3D79' }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-bold">
                  {section.section || `Section ${sectionId.replace('section', '')}`}
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-md text-xs font-bold">
                  OFFICIAL DOCUMENT
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter', 'Source Sans Pro', sans-serif" }}>
                {section.title}
              </h1>
            </div>
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/30"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-8 py-8" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-5xl mx-auto">
            {section.content && !section.subsections && (
              <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <div className="text-[15px]" style={{ fontFamily: "'Noto Serif', Georgia, serif", lineHeight: '1.6' }}>
                  {renderFormattedContent(section.content)}
                </div>
              </div>
            )}
            
            {section.subsections && section.subsections.map((subsection, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 mb-6">
                {subsection.title && (
                  <h3 className="text-lg font-bold text-slate-900 mb-5 pb-3 border-b border-slate-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-semibold mr-3 border border-blue-200">
                      {subsection.number}
                    </span>
                    {subsection.title}
                  </h3>
                )}
                <div className="text-[15px]" style={{ fontFamily: "'Noto Serif', Georgia, serif", lineHeight: '1.6' }}>
                  {renderFormattedContent(subsection.content)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Fixed Sidebar with Professional Styling */}
      <div 
        className={`${sidebarCollapsed ? 'w-16' : 'w-72'} bg-white border-r border-slate-200 flex flex-col transition-all duration-300 flex-shrink-0`}
        style={{ boxShadow: '2px 0 8px rgba(0,0,0,0.05)' }}
      >
        {/* Sidebar Header */}
        <div className="p-5 border-b border-slate-200" style={{ backgroundColor: '#0A3D79' }}>
          {!sidebarCollapsed && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Scale className="w-6 h-6 text-white" />
                <h2 className="text-lg font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                  HR By-Laws
                </h2>
              </div>
              <p className="text-xs text-blue-100">Koyili Hospital</p>
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="absolute top-5 right-3 p-1.5 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Search Bar */}
        {!sidebarCollapsed && (
          <div className="p-4 border-b border-slate-200 bg-slate-50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by-laws..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            
            {/* Search Results Dropdown */}
            {showSearch && searchResults.length > 0 && (
              <div className="absolute left-4 right-4 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
                {searchResults.map((result, idx) => (
                  <button
                    key={idx}
                    onClick={() => jumpToSection(result.sectionId)}
                    className="w-full text-left p-3 hover:bg-blue-50 border-b border-slate-100 last:border-b-0 transition-colors"
                  >
                    <div className="font-semibold text-sm text-slate-900">{result.title}</div>
                    <div className="text-xs text-slate-600 mt-1 line-clamp-2">{result.preview}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Navigation by Category */}
        <div className="flex-1 overflow-y-auto">
          {!sidebarCollapsed && (
            <div className="p-3">
              {Object.entries(navigationByCategory).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {category}
                  </div>
                  {items.map((nav) => {
                    const IconComponent = nav.icon;
                    const isActive = activeSection === nav.id;
                    return (
                      <button
                        key={nav.id}
                        onClick={() => jumpToSection(nav.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all ${
                          isActive 
                            ? 'text-white font-semibold shadow-sm' 
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                        style={{ 
                          backgroundColor: isActive ? '#0A3D79' : 'transparent',
                          fontFamily: "'Inter', sans-serif"
                        }}
                      >
                        <IconComponent className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                        <span className="text-sm truncate flex-1 text-left">
                          {nav.title.replace(/^Sec [IVXLCDM]+:\s*/, '')}
                        </span>
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Official Badge at Bottom */}
        {!sidebarCollapsed && (
          <div className="p-4 border-t border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="font-semibold">Official Legal Document</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">Version 2.0 • Feb 2024</div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setActiveModule('dashboard')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Back to HR Dashboard</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">
              ACTIVE
            </span>
            <span className="text-sm text-slate-600">
              {navigation.find(n => n.id === activeSection)?.title || 'Dashboard'}
            </span>
          </div>
        </div>

        {/* Content Area with Scroll */}
        <div 
          ref={contentRef}
          className="flex-1 overflow-y-auto p-8"
          style={{ backgroundColor: '#F9FAFB' }}
        >
          {activeSection === 'dashboard' ? renderDashboard() : renderSection(activeSection)}
        </div>
      </div>

      {/* Governance Wizard Modal */}
      {showGovernanceWizard && (
        <GovernanceWizard 
          onClose={() => setShowGovernanceWizard(false)}
          onNavigateToSection={(sectionId) => {
            setActiveSection(sectionId);
            if (contentRef.current) {
              contentRef.current.scrollTop = 0;
            }
          }}
        />
      )}

      {/* Authority Finder Modal */}
      {showAuthorityFinder && (
        <AuthorityFinder 
          onClose={() => setShowAuthorityFinder(false)}
          onNavigateToSection={(sectionId) => {
            setActiveSection(sectionId);
            if (contentRef.current) {
              contentRef.current.scrollTop = 0;
            }
          }}
        />
      )}

      {/* Compliance Center Modal */}
      {showComplianceCenter && (
        <ComplianceCenter 
          onClose={() => setShowComplianceCenter(false)}
          onNavigateToSection={(sectionId) => {
            setActiveSection(sectionId);
            if (contentRef.current) {
              contentRef.current.scrollTop = 0;
            }
          }}
        />
      )}

      {/* Policy Manager Modal */}
      {showPolicyManager && (
        <PolicyManager 
          onClose={() => setShowPolicyManager(false)}
          onNavigateToSection={(sectionId) => {
            setActiveSection(sectionId);
            if (contentRef.current) {
              contentRef.current.scrollTop = 0;
            }
          }}
        />
      )}

      {/* Training Hub Modal */}
      {showTrainingHub && (
        <TrainingHub 
          onClose={() => setShowTrainingHub(false)}
          onNavigateToSection={(sectionId) => {
            setActiveSection(sectionId);
            if (contentRef.current) {
              contentRef.current.scrollTop = 0;
            }
          }}
        />
      )}

      {/* Audit Assistant Modal */}
      {showAuditAssistant && (
        <AuditAssistant 
          onClose={() => setShowAuditAssistant(false)}
          onNavigateToSection={(sectionId) => {
            setActiveSection(sectionId);
            if (contentRef.current) {
              contentRef.current.scrollTop = 0;
            }
          }}
        />
      )}

      {/* Risk Monitor Modal */}
      {showRiskMonitor && (
        <RiskMonitor 
          onClose={() => setShowRiskMonitor(false)}
          onNavigateToSection={(sectionId) => {
            setActiveSection(sectionId);
            if (contentRef.current) {
              contentRef.current.scrollTop = 0;
            }
          }}
        />
      )}

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          @page {
            margin: 2cm 2.5cm;
            size: A4;
          }
          
          body {
            font-family: 'Noto Serif', Georgia, serif;
            line-height: 1.6;
            color: #000;
          }
          
          .no-print {
            display: none !important;
          }
          
          h1, h2, h3, h4 {
            font-family: 'Inter', 'Source Sans Pro', sans-serif;
            page-break-after: avoid;
          }
          
          p {
            text-align: justify;
            orphans: 3;
            widows: 3;
          }
          
          @page :first {
            margin-top: 3cm;
          }
          
          .page-break {
            page-break-before: always;
          }
        }
      `}</style>
    </div>
  );
};

export default HRByLaws;
