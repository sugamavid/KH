import React, { useState, useMemo } from 'react';
import { 
  X, FileText, Search, Filter, Download, Eye, Clock, CheckCircle,
  Users, Shield, Activity, Calendar, TrendingUp, BookOpen, Home,
  DollarSign, MessageSquare, Lock, LogOut, Monitor, Globe, Heart,
  MessageCircle, UserCheck, Smile, AlertTriangle, Zap, Gift,
  CheckSquare, Scale, Award, AlertCircle, Edit, Archive, RefreshCw,
  ChevronRight, Star, ExternalLink, History, Upload, Trash2
} from 'lucide-react';

const PolicyManager = ({ onClose, onNavigateToSection }) => {
  const [activeView, setActiveView] = useState('library');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Policy documents mapped from By-Laws
  const policyDocuments = [
    {
      id: 'DOC-001',
      sectionId: 'preamble',
      title: 'Preamble',
      category: 'Foundational',
      icon: BookOpen,
      color: 'amber',
      version: '2.0',
      status: 'active',
      owner: 'Board of Directors',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2025-02-01',
      pages: 2,
      keywords: ['introduction', 'purpose', 'objectives', 'commitment']
    },
    {
      id: 'DOC-002',
      sectionId: 'section1',
      title: 'Section 1: Preliminary',
      category: 'Foundational',
      icon: FileText,
      color: 'blue',
      version: '2.0',
      status: 'active',
      owner: 'HR Compliance Committee',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2025-02-01',
      pages: 3,
      keywords: ['definitions', 'scope', 'applicability', 'commencement']
    },
    {
      id: 'DOC-003',
      sectionId: 'section2',
      title: 'Section 2: Recruitment and Employment',
      category: 'Foundational',
      icon: Users,
      color: 'green',
      version: '2.0',
      status: 'active',
      owner: 'HR Director',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2025-02-01',
      pages: 4,
      keywords: ['hiring', 'selection', 'recruitment', 'onboarding']
    },
    {
      id: 'DOC-004',
      sectionId: 'section3',
      title: 'Section 3: Code of Conduct',
      category: 'Conduct & Ethics',
      icon: Shield,
      color: 'red',
      version: '2.0',
      status: 'active',
      owner: 'HR Compliance Committee',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 3,
      keywords: ['ethics', 'professional', 'conduct', 'standards']
    },
    {
      id: 'DOC-005',
      sectionId: 'section4',
      title: 'Section 4: Employee Rights and Responsibilities',
      category: 'Conduct & Ethics',
      icon: Award,
      color: 'purple',
      version: '2.0',
      status: 'active',
      owner: 'HR Director',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 4,
      keywords: ['rights', 'responsibilities', 'obligations', 'protections']
    },
    {
      id: 'DOC-006',
      sectionId: 'section5',
      title: 'Section 5: Diversity, Equity, and Inclusion (DEI)',
      category: 'Conduct & Ethics',
      icon: Heart,
      color: 'pink',
      version: '2.0',
      status: 'active',
      owner: 'DEI Coordinator',
      lastUpdated: '2024-02-10',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-10',
      pages: 3,
      keywords: ['diversity', 'inclusion', 'equity', 'non-discrimination']
    },
    {
      id: 'DOC-007',
      sectionId: 'section6',
      title: 'Section 6: Patient Interaction and Care Standards',
      category: 'Patient Care',
      icon: Activity,
      color: 'blue',
      version: '2.0',
      status: 'active',
      owner: 'Medical Director',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 5,
      keywords: ['patient care', 'clinical', 'standards', 'quality']
    },
    {
      id: 'DOC-008',
      sectionId: 'section7',
      title: 'Section 7: Attendance and Leave Policy',
      category: 'HR Operations',
      icon: Calendar,
      color: 'cyan',
      version: '2.0',
      status: 'active',
      owner: 'HR Manager',
      lastUpdated: '2024-02-01',
      approvedBy: 'HR Director',
      approvalDate: '2024-01-15',
      nextReview: '2025-02-01',
      pages: 4,
      keywords: ['leave', 'attendance', 'time off', 'working hours']
    },
    {
      id: 'DOC-009',
      sectionId: 'section8',
      title: 'Section 8: Performance Management',
      category: 'HR Operations',
      icon: TrendingUp,
      color: 'orange',
      version: '2.0',
      status: 'active',
      owner: 'HR Director',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 3,
      keywords: ['appraisal', 'performance', 'review', 'evaluation']
    },
    {
      id: 'DOC-010',
      sectionId: 'section9',
      title: 'Section 9: Training and Development',
      category: 'HR Operations',
      icon: BookOpen,
      color: 'teal',
      version: '2.0',
      status: 'active',
      owner: 'Training Coordinator',
      lastUpdated: '2024-02-01',
      approvedBy: 'HR Director',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 3,
      keywords: ['training', 'development', 'learning', 'skills']
    },
    {
      id: 'DOC-011',
      sectionId: 'section10',
      title: 'Section 10: Remote Work and Flexible Scheduling',
      category: 'HR Operations',
      icon: Home,
      color: 'lime',
      version: '2.1',
      status: 'under_review',
      owner: 'HR Director',
      lastUpdated: '2024-03-01',
      approvedBy: 'Pending',
      approvalDate: 'Pending',
      nextReview: '2024-09-01',
      pages: 3,
      keywords: ['remote work', 'flexible', 'hybrid', 'work from home']
    },
    {
      id: 'DOC-012',
      sectionId: 'section11',
      title: 'Section 11: Compensation and Benefits',
      category: 'HR Operations',
      icon: DollarSign,
      color: 'green',
      version: '2.0',
      status: 'active',
      owner: 'Payroll Manager',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2025-02-01',
      pages: 4,
      keywords: ['compensation', 'salary', 'benefits', 'payroll']
    },
    {
      id: 'DOC-013',
      sectionId: 'section12',
      title: 'Section 12: Grievance Redressal Mechanism',
      category: 'HR Operations',
      icon: MessageSquare,
      color: 'blue',
      version: '2.0',
      status: 'active',
      owner: 'Grievance Officer',
      lastUpdated: '2024-02-01',
      approvedBy: 'HR Director',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 3,
      keywords: ['grievance', 'complaints', 'redressal', 'resolution']
    },
    {
      id: 'DOC-014',
      sectionId: 'section13',
      title: 'Section 13: Workplace Health and Safety',
      category: 'Health & Safety',
      icon: Shield,
      color: 'red',
      version: '2.0',
      status: 'active',
      owner: 'Safety Officer',
      lastUpdated: '2024-02-05',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-05',
      pages: 4,
      keywords: ['safety', 'health', 'workplace', 'security']
    },
    {
      id: 'DOC-015',
      sectionId: 'section14',
      title: 'Section 14: Disciplinary Actions and Compliance',
      category: 'Compliance',
      icon: AlertCircle,
      color: 'orange',
      version: '2.0',
      status: 'active',
      owner: 'HR Compliance Committee',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 3,
      keywords: ['discipline', 'violations', 'penalties', 'compliance']
    },
    {
      id: 'DOC-016',
      sectionId: 'section15',
      title: 'Section 15: Data Protection and Confidentiality',
      category: 'Compliance',
      icon: Lock,
      color: 'purple',
      version: '2.0',
      status: 'active',
      owner: 'Compliance Officer',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 3,
      keywords: ['privacy', 'data protection', 'confidentiality', 'HIPAA']
    },
    {
      id: 'DOC-017',
      sectionId: 'section16',
      title: 'Section 16: Termination and Exit Process',
      category: 'Compliance',
      icon: LogOut,
      color: 'red',
      version: '2.0',
      status: 'active',
      owner: 'HR Director',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2025-02-01',
      pages: 3,
      keywords: ['termination', 'exit', 'resignation', 'separation']
    },
    {
      id: 'DOC-018',
      sectionId: 'section17',
      title: 'Section 17: Technology Use and Digital Conduct',
      category: 'Compliance',
      icon: Monitor,
      color: 'blue',
      version: '2.0',
      status: 'active',
      owner: 'IT Director',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 3,
      keywords: ['technology', 'IT', 'digital', 'cybersecurity']
    },
    {
      id: 'DOC-019',
      sectionId: 'section18',
      title: 'Section 18: Environmental Responsibility',
      category: 'Compliance',
      icon: Globe,
      color: 'green',
      version: '2.0',
      status: 'active',
      owner: 'Facilities Manager',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 2,
      keywords: ['environment', 'sustainability', 'green', 'eco']
    },
    {
      id: 'DOC-020',
      sectionId: 'section19',
      title: 'Section 19: Internal Communication',
      category: 'Support Programs',
      icon: MessageCircle,
      color: 'blue',
      version: '2.0',
      status: 'active',
      owner: 'Communications Manager',
      lastUpdated: '2024-02-01',
      approvedBy: 'HR Director',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 2,
      keywords: ['communication', 'internal', 'information', 'sharing']
    },
    {
      id: 'DOC-021',
      sectionId: 'section20',
      title: 'Section 20: Employee Assistance Programs (EAPs)',
      category: 'Support Programs',
      icon: Heart,
      color: 'pink',
      version: '2.0',
      status: 'active',
      owner: 'HR Manager',
      lastUpdated: '2024-02-01',
      approvedBy: 'HR Director',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 2,
      keywords: ['assistance', 'support', 'wellness', 'counseling']
    },
    {
      id: 'DOC-022',
      sectionId: 'section21',
      title: 'Section 21: Special Provisions',
      category: 'Support Programs',
      icon: UserCheck,
      color: 'purple',
      version: '2.0',
      status: 'active',
      owner: 'HR Director',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 3,
      keywords: ['special', 'provisions', 'sensitive', 'accommodations']
    },
    {
      id: 'DOC-023',
      sectionId: 'section22',
      title: 'Section 22: Compliance and Regular Audits',
      category: 'Governance',
      icon: CheckCircle,
      color: 'green',
      version: '2.0',
      status: 'active',
      owner: 'Compliance Officer',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-05-01',
      pages: 3,
      keywords: ['audit', 'compliance', 'review', 'monitoring']
    },
    {
      id: 'DOC-024',
      sectionId: 'section23',
      title: 'Section 23: Workplace Culture',
      category: 'Governance',
      icon: Users,
      color: 'blue',
      version: '2.0',
      status: 'active',
      owner: 'HR Director',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 2,
      keywords: ['culture', 'team building', 'workplace', 'engagement']
    },
    {
      id: 'DOC-025',
      sectionId: 'section24',
      title: 'Section 24: Employee Wellness',
      category: 'Governance',
      icon: Smile,
      color: 'amber',
      version: '2.0',
      status: 'active',
      owner: 'Wellness Coordinator',
      lastUpdated: '2024-02-01',
      approvedBy: 'HR Director',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 2,
      keywords: ['wellness', 'health', 'wellbeing', 'fitness']
    },
    {
      id: 'DOC-026',
      sectionId: 'section25',
      title: 'Section 25: Conflicts of Interest',
      category: 'Governance',
      icon: AlertTriangle,
      color: 'orange',
      version: '2.0',
      status: 'active',
      owner: 'Compliance Officer',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 2,
      keywords: ['conflict', 'interest', 'disclosure', 'ethics']
    },
    {
      id: 'DOC-027',
      sectionId: 'section26',
      title: 'Section 26: Innovation and Continuous Improvement',
      category: 'Governance',
      icon: Zap,
      color: 'yellow',
      version: '2.0',
      status: 'active',
      owner: 'Innovation Committee',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 2,
      keywords: ['innovation', 'improvement', 'continuous', 'quality']
    },
    {
      id: 'DOC-028',
      sectionId: 'section27',
      title: 'Section 27: Work-Life Balance',
      category: 'Governance',
      icon: Clock,
      color: 'blue',
      version: '2.0',
      status: 'active',
      owner: 'HR Manager',
      lastUpdated: '2024-02-01',
      approvedBy: 'HR Director',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 2,
      keywords: ['work-life', 'balance', 'flexibility', 'wellbeing']
    },
    {
      id: 'DOC-029',
      sectionId: 'section28',
      title: 'Section 28: Corporate Social Responsibility (CSR)',
      category: 'Governance',
      icon: Gift,
      color: 'green',
      version: '2.0',
      status: 'active',
      owner: 'CSR Committee',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 2,
      keywords: ['CSR', 'social responsibility', 'community', 'charity']
    },
    {
      id: 'DOC-030',
      sectionId: 'section29',
      title: 'Section 29: Industry Standards',
      category: 'Governance',
      icon: CheckSquare,
      color: 'blue',
      version: '2.0',
      status: 'active',
      owner: 'Compliance Officer',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-05-01',
      pages: 3,
      keywords: ['standards', 'industry', 'best practices', 'compliance']
    },
    {
      id: 'DOC-031',
      sectionId: 'section30',
      title: 'Section 30: Miscellaneous Provisions',
      category: 'Governance',
      icon: FileText,
      color: 'slate',
      version: '2.0',
      status: 'active',
      owner: 'HR Compliance Committee',
      lastUpdated: '2024-02-01',
      approvedBy: 'Board of Directors',
      approvalDate: '2024-01-15',
      nextReview: '2024-08-01',
      pages: 2,
      keywords: ['miscellaneous', 'general', 'provisions', 'other']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: policyDocuments.length },
    { id: 'Foundational', name: 'Foundational', count: policyDocuments.filter(d => d.category === 'Foundational').length },
    { id: 'Conduct & Ethics', name: 'Conduct & Ethics', count: policyDocuments.filter(d => d.category === 'Conduct & Ethics').length },
    { id: 'Patient Care', name: 'Patient Care', count: policyDocuments.filter(d => d.category === 'Patient Care').length },
    { id: 'HR Operations', name: 'HR Operations', count: policyDocuments.filter(d => d.category === 'HR Operations').length },
    { id: 'Health & Safety', name: 'Health & Safety', count: policyDocuments.filter(d => d.category === 'Health & Safety').length },
    { id: 'Compliance', name: 'Compliance', count: policyDocuments.filter(d => d.category === 'Compliance').length },
    { id: 'Support Programs', name: 'Support Programs', count: policyDocuments.filter(d => d.category === 'Support Programs').length },
    { id: 'Governance', name: 'Governance', count: policyDocuments.filter(d => d.category === 'Governance').length }
  ];

  const statuses = [
    { id: 'all', name: 'All Status', count: policyDocuments.length },
    { id: 'active', name: 'Active', count: policyDocuments.filter(d => d.status === 'active').length },
    { id: 'under_review', name: 'Under Review', count: policyDocuments.filter(d => d.status === 'under_review').length },
    { id: 'draft', name: 'Draft', count: policyDocuments.filter(d => d.status === 'draft').length },
    { id: 'archived', name: 'Archived', count: policyDocuments.filter(d => d.status === 'archived').length }
  ];

  const views = [
    { id: 'library', name: 'Library', icon: FileText },
    { id: 'recent', name: 'Recent Updates', icon: Clock },
    { id: 'pending', name: 'Pending Approvals', icon: AlertCircle },
    { id: 'archived', name: 'Archived', icon: Archive }
  ];

  // Filter documents
  const filteredDocuments = useMemo(() => {
    let filtered = policyDocuments;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }

    // Filter by status
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(d => d.status === selectedStatus);
    }

    // Filter by view
    if (activeView === 'recent') {
      filtered = filtered.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)).slice(0, 10);
    } else if (activeView === 'pending') {
      filtered = filtered.filter(d => d.status === 'under_review' || d.status === 'draft');
    } else if (activeView === 'archived') {
      filtered = filtered.filter(d => d.status === 'archived');
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(d =>
        d.title.toLowerCase().includes(query) ||
        d.owner.toLowerCase().includes(query) ||
        d.keywords.some(k => k.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedStatus, activeView]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'green';
      case 'under_review': return 'orange';
      case 'draft': return 'blue';
      case 'archived': return 'slate';
      default: return 'slate';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'active': return 'Active';
      case 'under_review': return 'Under Review';
      case 'draft': return 'Draft';
      case 'archived': return 'Archived';
      default: return status;
    }
  };

  const handleDocumentClick = (doc) => {
    setSelectedDocument(doc);
  };

  const handleViewDocument = (sectionId) => {
    onNavigateToSection(sectionId);
    onClose();
  };

  const renderDocumentCard = (doc) => {
    const DocIcon = doc.icon;
    const statusColor = getStatusColor(doc.status);

    return (
      <div
        key={doc.id}
        onClick={() => handleDocumentClick(doc)}
        className="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-purple-400 hover:shadow-lg transition-all cursor-pointer group"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3">
            <div className={`p-2 bg-${doc.color}-100 rounded-lg group-hover:bg-purple-100 transition-colors`}>
              <DocIcon className={`w-6 h-6 text-${doc.color}-600 group-hover:text-purple-600 transition-colors`} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors line-clamp-2">
                {doc.title}
              </h4>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-slate-600">{doc.id}</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-semibold">
                  v{doc.version}
                </span>
                <span className={`px-2 py-0.5 bg-${statusColor}-100 text-${statusColor}-700 rounded text-xs font-semibold`}>
                  {getStatusLabel(doc.status)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-600 mb-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-400" />
            <span>{doc.owner}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>Updated: {new Date(doc.lastUpdated).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-400" />
            <span>{doc.pages} pages</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleViewDocument(doc.sectionId);
            }}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold"
          >
            <Eye className="w-4 h-4" />
            View
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-semibold"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  const renderDocumentDetails = () => {
    if (!selectedDocument) return null;

    const DocIcon = selectedDocument.icon;
    const statusColor = getStatusColor(selectedDocument.status);

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-br from-${selectedDocument.color}-500 to-${selectedDocument.color}-600 px-8 py-6 text-white`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                  <DocIcon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold">{selectedDocument.id}</span>
                    <span className="px-2 py-0.5 bg-white/20 rounded text-xs font-bold">
                      v{selectedDocument.version}
                    </span>
                    <span className={`px-2 py-0.5 bg-${statusColor}-600 rounded text-xs font-bold`}>
                      {getStatusLabel(selectedDocument.status)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{selectedDocument.title}</h3>
                  <div className="text-white/90">{selectedDocument.category}</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedDocument(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-xs text-slate-600 mb-1">Document Owner</div>
                <div className="font-semibold text-slate-900">{selectedDocument.owner}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-xs text-slate-600 mb-1">Pages</div>
                <div className="font-semibold text-slate-900">{selectedDocument.pages} pages</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-xs text-slate-600 mb-1">Last Updated</div>
                <div className="font-semibold text-slate-900">
                  {new Date(selectedDocument.lastUpdated).toLocaleDateString()}
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-xs text-slate-600 mb-1">Next Review</div>
                <div className="font-semibold text-slate-900">
                  {new Date(selectedDocument.nextReview).toLocaleDateString()}
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-xs text-slate-600 mb-1">Approved By</div>
                <div className="font-semibold text-slate-900">{selectedDocument.approvedBy}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-xs text-slate-600 mb-1">Approval Date</div>
                <div className="font-semibold text-slate-900">
                  {selectedDocument.approvalDate !== 'Pending' 
                    ? new Date(selectedDocument.approvalDate).toLocaleDateString()
                    : 'Pending'}
                </div>
              </div>
            </div>

            {/* Keywords */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-900 mb-3">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {selectedDocument.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => handleViewDocument(selectedDocument.sectionId)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                <Eye className="w-5 h-5" />
                View Full Document
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-semibold">
                <Download className="w-5 h-5" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Policy Manager
                  </h2>
                  <p className="text-purple-100">Centralized document control and management system</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Search and Filters */}
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-600" />
                <input
                  type="text"
                  placeholder="Search policies by title, owner, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-white/30 bg-white/95 focus:outline-none focus:ring-2 focus:ring-white text-slate-900 placeholder-slate-500"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>

            {/* View Tabs */}
            <div className="flex gap-2 mt-4">
              {views.map((view) => {
                const ViewIcon = view.icon;
                return (
                  <button
                    key={view.id}
                    onClick={() => setActiveView(view.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                      activeView === view.id
                        ? 'bg-white text-purple-700 shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <ViewIcon className="w-4 h-4" />
                    {view.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filters */}
          <div className="px-8 py-4 bg-slate-50 border-b border-slate-200 flex gap-4 overflow-x-auto">
            <div className="flex gap-2">
              <span className="text-sm font-semibold text-slate-600 py-2">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          <div className="px-8 py-3 bg-white border-b border-slate-200 flex gap-4">
            <div className="flex gap-2">
              <span className="text-sm font-semibold text-slate-600 py-2">Status:</span>
              {statuses.map((stat) => (
                <button
                  key={stat.id}
                  onClick={() => setSelectedStatus(stat.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedStatus === stat.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {stat.name} ({stat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-slate-600">
                Showing {filteredDocuments.length} of {policyDocuments.length} documents
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm font-semibold border border-slate-200">
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDocuments.map(renderDocumentCard)}
            </div>

            {filteredDocuments.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">No documents found</p>
                <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Document Details Modal */}
      {selectedDocument && renderDocumentDetails()}
    </>
  );
};

export default PolicyManager;
