import React, { useState, useMemo } from 'react';
import { 
  X, CheckCircle, Search, Filter, Calendar, Clock, AlertCircle,
  Users, Shield, Activity, FileText, TrendingUp, BarChart, Target,
  ClipboardCheck, AlertTriangle, CheckSquare, XCircle, Download,
  Eye, Edit, RefreshCw, ChevronRight, Award, Star, Flag, Mail
} from 'lucide-react';

const AuditAssistant = ({ onClose, onNavigateToSection }) => {
  const [activeView, setActiveView] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedAudit, setSelectedAudit] = useState(null);

  // Audit data based on By-Laws Section 22
  const audits = [
    {
      id: 'AUD-001',
      title: 'Code of Conduct Compliance Audit',
      type: 'Compliance Audit',
      icon: Shield,
      color: 'blue',
      status: 'upcoming',
      scheduledDate: '2024-03-15',
      auditor: 'HR Compliance Committee',
      department: 'All Departments',
      checklist: 12,
      completed: 0,
      findings: 0,
      priority: 'high',
      description: 'Comprehensive review of code of conduct adherence across all departments',
      relatedSection: 'section3',
      estimatedDuration: '3 days',
      lastAudit: '2023-09-15',
      frequency: 'Semi-annual'
    },
    {
      id: 'AUD-002',
      title: 'HIPAA Compliance Review',
      type: 'Compliance Audit',
      icon: Shield,
      color: 'purple',
      status: 'in_progress',
      scheduledDate: '2024-02-20',
      startDate: '2024-02-20',
      auditor: 'Compliance Officer',
      department: 'All Departments',
      checklist: 18,
      completed: 12,
      findings: 3,
      priority: 'critical',
      description: 'Patient data protection and HIPAA regulation compliance verification',
      relatedSection: 'section15',
      estimatedDuration: '5 days',
      lastAudit: '2023-08-20',
      frequency: 'Quarterly'
    },
    {
      id: 'AUD-003',
      title: 'Workplace Safety Audit',
      type: 'Safety Audit',
      icon: AlertCircle,
      color: 'red',
      status: 'upcoming',
      scheduledDate: '2024-03-25',
      auditor: 'Safety Officer',
      department: 'All Departments',
      checklist: 15,
      completed: 0,
      findings: 0,
      priority: 'high',
      description: 'Comprehensive workplace safety and health standards assessment',
      relatedSection: 'section13',
      estimatedDuration: '4 days',
      lastAudit: '2023-11-25',
      frequency: 'Quarterly'
    },
    {
      id: 'AUD-004',
      title: 'Training Completion Audit',
      type: 'Internal Audit',
      icon: CheckSquare,
      color: 'teal',
      status: 'completed',
      scheduledDate: '2024-01-15',
      startDate: '2024-01-15',
      completedDate: '2024-01-18',
      auditor: 'Training Coordinator',
      department: 'All Departments',
      checklist: 10,
      completed: 10,
      findings: 2,
      priority: 'medium',
      description: 'Verification of mandatory training completion across all staff',
      relatedSection: 'section9',
      estimatedDuration: '3 days',
      lastAudit: '2023-07-15',
      frequency: 'Bi-annual'
    },
    {
      id: 'AUD-005',
      title: 'Performance Management Process Review',
      type: 'Internal Audit',
      icon: TrendingUp,
      color: 'orange',
      status: 'upcoming',
      scheduledDate: '2024-04-10',
      auditor: 'HR Director',
      department: 'All Departments',
      checklist: 14,
      completed: 0,
      findings: 0,
      priority: 'medium',
      description: 'Review of performance appraisal processes and documentation',
      relatedSection: 'section8',
      estimatedDuration: '4 days',
      lastAudit: '2023-10-10',
      frequency: 'Bi-annual'
    },
    {
      id: 'AUD-006',
      title: 'Data Protection & Privacy Audit',
      type: 'Compliance Audit',
      icon: Shield,
      color: 'indigo',
      status: 'in_progress',
      scheduledDate: '2024-02-25',
      startDate: '2024-02-25',
      auditor: 'IT Security Team',
      department: 'IT & Clinical',
      checklist: 20,
      completed: 8,
      findings: 1,
      priority: 'critical',
      description: 'Assessment of data protection measures and privacy protocols',
      relatedSection: 'section15',
      estimatedDuration: '5 days',
      lastAudit: '2023-08-25',
      frequency: 'Quarterly'
    },
    {
      id: 'AUD-007',
      title: 'Grievance Mechanism Effectiveness',
      type: 'Internal Audit',
      icon: Users,
      color: 'blue',
      status: 'upcoming',
      scheduledDate: '2024-04-20',
      auditor: 'Grievance Officer',
      department: 'HR Department',
      checklist: 8,
      completed: 0,
      findings: 0,
      priority: 'medium',
      description: 'Review of grievance handling procedures and resolution effectiveness',
      relatedSection: 'section12',
      estimatedDuration: '2 days',
      lastAudit: '2023-10-20',
      frequency: 'Bi-annual'
    },
    {
      id: 'AUD-008',
      title: 'Patient Care Standards Audit',
      type: 'Quality Audit',
      icon: Activity,
      color: 'pink',
      status: 'completed',
      scheduledDate: '2024-01-25',
      startDate: '2024-01-25',
      completedDate: '2024-01-30',
      auditor: 'Medical Director',
      department: 'Clinical Services',
      checklist: 16,
      completed: 16,
      findings: 4,
      priority: 'high',
      description: 'Comprehensive review of patient care quality and interaction standards',
      relatedSection: 'section6',
      estimatedDuration: '5 days',
      lastAudit: '2023-07-25',
      frequency: 'Bi-annual'
    },
    {
      id: 'AUD-009',
      title: 'DEI Policy Implementation Review',
      type: 'Internal Audit',
      icon: Users,
      color: 'green',
      status: 'upcoming',
      scheduledDate: '2024-05-05',
      auditor: 'DEI Coordinator',
      department: 'All Departments',
      checklist: 11,
      completed: 0,
      findings: 0,
      priority: 'medium',
      description: 'Assessment of diversity, equity, and inclusion initiatives implementation',
      relatedSection: 'section5',
      estimatedDuration: '3 days',
      lastAudit: '2023-11-05',
      frequency: 'Bi-annual'
    },
    {
      id: 'AUD-010',
      title: 'Environmental Sustainability Audit',
      type: 'Compliance Audit',
      icon: Activity,
      color: 'green',
      status: 'upcoming',
      scheduledDate: '2024-04-15',
      auditor: 'Sustainability Coordinator',
      department: 'Facilities',
      checklist: 9,
      completed: 0,
      findings: 0,
      priority: 'low',
      description: 'Review of environmental practices and sustainability initiatives',
      relatedSection: 'section18',
      estimatedDuration: '2 days',
      lastAudit: '2023-10-15',
      frequency: 'Bi-annual'
    },
    {
      id: 'AUD-011',
      title: 'Attendance & Leave Policy Compliance',
      type: 'Internal Audit',
      icon: Calendar,
      color: 'cyan',
      status: 'completed',
      scheduledDate: '2024-02-05',
      startDate: '2024-02-05',
      completedDate: '2024-02-08',
      auditor: 'HR Manager',
      department: 'All Departments',
      checklist: 10,
      completed: 10,
      findings: 1,
      priority: 'medium',
      description: 'Verification of attendance tracking and leave policy adherence',
      relatedSection: 'section7',
      estimatedDuration: '3 days',
      lastAudit: '2023-08-05',
      frequency: 'Bi-annual'
    },
    {
      id: 'AUD-012',
      title: 'Industry Standards Compliance Review',
      type: 'Compliance Audit',
      icon: CheckSquare,
      color: 'blue',
      status: 'upcoming',
      scheduledDate: '2024-05-01',
      auditor: 'Compliance Officer',
      department: 'All Departments',
      checklist: 13,
      completed: 0,
      findings: 0,
      priority: 'high',
      description: 'Assessment of compliance with NABH, ISO, and healthcare quality standards',
      relatedSection: 'section29',
      estimatedDuration: '4 days',
      lastAudit: '2023-11-01',
      frequency: 'Bi-annual'
    }
  ];

  const types = [
    { id: 'all', name: 'All Types', count: audits.length },
    { id: 'Compliance Audit', name: 'Compliance', count: audits.filter(a => a.type === 'Compliance Audit').length },
    { id: 'Internal Audit', name: 'Internal', count: audits.filter(a => a.type === 'Internal Audit').length },
    { id: 'Safety Audit', name: 'Safety', count: audits.filter(a => a.type === 'Safety Audit').length },
    { id: 'Quality Audit', name: 'Quality', count: audits.filter(a => a.type === 'Quality Audit').length }
  ];

  const views = [
    { id: 'upcoming', name: 'Upcoming', icon: Calendar },
    { id: 'in_progress', name: 'In Progress', icon: Clock },
    { id: 'completed', name: 'Completed', icon: CheckCircle },
    { id: 'findings', name: 'Findings & Actions', icon: AlertTriangle }
  ];

  const stats = {
    upcoming: audits.filter(a => a.status === 'upcoming').length,
    inProgress: audits.filter(a => a.status === 'in_progress').length,
    completed: audits.filter(a => a.status === 'completed').length,
    totalFindings: audits.reduce((sum, a) => sum + a.findings, 0),
    criticalAudits: audits.filter(a => a.priority === 'critical').length
  };

  // Filter audits
  const filteredAudits = useMemo(() => {
    let filtered = audits;

    // Filter by view
    if (activeView !== 'findings') {
      filtered = filtered.filter(a => a.status === activeView);
    } else {
      filtered = filtered.filter(a => a.findings > 0);
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(a => a.type === selectedType);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(a =>
        a.title.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query) ||
        a.department.toLowerCase().includes(query)
      );
    }

    return filtered.sort((a, b) => new Date(a.scheduledDate) - new Date(b.scheduledDate));
  }, [searchQuery, selectedType, activeView]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'blue';
      case 'in_progress': return 'orange';
      case 'completed': return 'green';
      default: return 'slate';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'upcoming': return 'Upcoming';
      case 'in_progress': return 'In Progress';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'red';
      case 'high': return 'orange';
      case 'medium': return 'blue';
      case 'low': return 'green';
      default: return 'slate';
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'critical': return 'CRITICAL';
      case 'high': return 'HIGH';
      case 'medium': return 'MEDIUM';
      case 'low': return 'LOW';
      default: return priority;
    }
  };

  const handleAuditClick = (audit) => {
    setSelectedAudit(audit);
  };

  const handleViewSection = (sectionId) => {
    onNavigateToSection(sectionId);
    onClose();
  };

  const renderAuditCard = (audit) => {
    const AuditIcon = audit.icon;
    const statusColor = getStatusColor(audit.status);
    const priorityColor = getPriorityColor(audit.priority);
    const progress = audit.checklist > 0 ? Math.round((audit.completed / audit.checklist) * 100) : 0;

    return (
      <div
        key={audit.id}
        onClick={() => handleAuditClick(audit)}
        className="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3 flex-1">
            <div className={`p-3 bg-${audit.color}-100 rounded-xl group-hover:bg-blue-100 transition-colors`}>
              <AuditIcon className={`w-6 h-6 text-${audit.color}-600 group-hover:text-blue-600 transition-colors`} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors line-clamp-2">
                {audit.title}
              </h4>
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="text-xs text-slate-600">{audit.id}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold bg-${priorityColor}-100 text-${priorityColor}-700`}>
                  {getPriorityLabel(audit.priority)}
                </span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold bg-${statusColor}-100 text-${statusColor}-700`}>
                  {getStatusLabel(audit.status)}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(audit.scheduledDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {audit.department}
                </div>
              </div>
              <div className="text-xs text-slate-600">
                <strong>Auditor:</strong> {audit.auditor}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar for in-progress audits */}
        {audit.status === 'in_progress' && (
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-slate-600">Checklist Progress</span>
              <span className="font-bold text-slate-900">{audit.completed}/{audit.checklist} ({progress}%)</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Stats Row */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-200">
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1 text-slate-600">
              <ClipboardCheck className="w-3 h-3" />
              {audit.checklist} items
            </div>
            {audit.findings > 0 && (
              <div className="flex items-center gap-1 text-red-600 font-semibold">
                <AlertTriangle className="w-3 h-3" />
                {audit.findings} finding{audit.findings > 1 ? 's' : ''}
              </div>
            )}
          </div>
          {audit.status === 'completed' && audit.completedDate && (
            <div className="text-xs text-green-600 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              {new Date(audit.completedDate).toLocaleDateString()}
            </div>
          )}
        </div>

        <div className="mt-3 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleViewSection(audit.relatedSection);
            }}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
          >
            <FileText className="w-4 h-4" />
            View Policy
          </button>
          {audit.status === 'completed' && (
            <button
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
            >
              <Download className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderAuditDetails = () => {
    if (!selectedAudit) return null;

    const AuditIcon = selectedAudit.icon;
    const statusColor = getStatusColor(selectedAudit.status);
    const priorityColor = getPriorityColor(selectedAudit.priority);
    const progress = selectedAudit.checklist > 0 ? Math.round((selectedAudit.completed / selectedAudit.checklist) * 100) : 0;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-br from-${selectedAudit.color}-500 to-${selectedAudit.color}-600 px-8 py-6 text-white`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                  <AuditIcon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold">{selectedAudit.id}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold bg-${priorityColor}-600`}>
                      {getPriorityLabel(selectedAudit.priority)}
                    </span>
                    <span className={`px-2 py-0.5 bg-${statusColor}-600 rounded text-xs font-bold`}>
                      {getStatusLabel(selectedAudit.status)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{selectedAudit.title}</h3>
                  <div className="text-white/90">{selectedAudit.type}</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedAudit(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
            {/* Description */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Audit Description</h4>
              <p className="text-slate-700 leading-relaxed">{selectedAudit.description}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs">Scheduled Date</span>
                </div>
                <div className="font-semibold text-slate-900">
                  {new Date(selectedAudit.scheduledDate).toLocaleDateString()}
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs">Duration</span>
                </div>
                <div className="font-semibold text-slate-900">{selectedAudit.estimatedDuration}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-xs">Auditor</span>
                </div>
                <div className="font-semibold text-slate-900">{selectedAudit.auditor}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <Target className="w-4 h-4" />
                  <span className="text-xs">Department</span>
                </div>
                <div className="font-semibold text-slate-900">{selectedAudit.department}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-xs">Frequency</span>
                </div>
                <div className="font-semibold text-slate-900">{selectedAudit.frequency}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs">Last Audit</span>
                </div>
                <div className="font-semibold text-slate-900">
                  {new Date(selectedAudit.lastAudit).toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* Progress (if in progress) */}
            {selectedAudit.status === 'in_progress' && (
              <div className="mb-6 bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h4 className="text-sm font-bold text-blue-900 mb-3">Audit Progress</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-700">Checklist Completion</span>
                  <span className="font-bold text-blue-900">{selectedAudit.completed}/{selectedAudit.checklist} ({progress}%)</span>
                </div>
                <div className="w-full h-3 bg-blue-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                {selectedAudit.findings > 0 && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 text-red-700 font-semibold text-sm">
                      <AlertTriangle className="w-4 h-4" />
                      {selectedAudit.findings} finding{selectedAudit.findings > 1 ? 's' : ''} identified
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Completed Info */}
            {selectedAudit.status === 'completed' && (
              <div className="mb-6 bg-green-50 rounded-lg p-5 border border-green-200">
                <div className="flex items-center gap-2 text-green-700 font-semibold mb-3">
                  <CheckCircle className="w-5 h-5" />
                  Audit Completed
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-green-600 mb-1">Completion Date</div>
                    <div className="font-semibold text-green-900">
                      {new Date(selectedAudit.completedDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-green-600 mb-1">Checklist Items</div>
                    <div className="font-semibold text-green-900">
                      {selectedAudit.completed}/{selectedAudit.checklist} Completed
                    </div>
                  </div>
                </div>
                {selectedAudit.findings > 0 && (
                  <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-center gap-2 text-amber-700 font-semibold text-sm">
                      <Flag className="w-4 h-4" />
                      {selectedAudit.findings} finding{selectedAudit.findings > 1 ? 's' : ''} require{selectedAudit.findings === 1 ? 's' : ''} follow-up
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => handleViewSection(selectedAudit.relatedSection)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <FileText className="w-5 h-5" />
                View Related Policy
              </button>
              {selectedAudit.status === 'completed' && (
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  <Download className="w-5 h-5" />
                  Download Report
                </button>
              )}
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Audit Assistant
                  </h2>
                  <p className="text-blue-100">Comprehensive audit management and compliance tracking</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-5 gap-3 mb-4">
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.upcoming}</div>
                <div className="text-xs text-blue-100">Upcoming</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.inProgress}</div>
                <div className="text-xs text-blue-100">In Progress</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.completed}</div>
                <div className="text-xs text-blue-100">Completed</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.totalFindings}</div>
                <div className="text-xs text-blue-100">Total Findings</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.criticalAudits}</div>
                <div className="text-xs text-blue-100">Critical</div>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-600" />
              <input
                type="text"
                placeholder="Search audits by title, department, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-white/30 bg-white/95 focus:outline-none focus:ring-2 focus:ring-white text-slate-900 placeholder-slate-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
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
                        ? 'bg-white text-blue-700 shadow-lg'
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

          {/* Type Filters */}
          <div className="px-8 py-4 bg-slate-50 border-b border-slate-200 flex gap-4 overflow-x-auto">
            <div className="flex gap-2">
              <span className="text-sm font-semibold text-slate-600 py-2">Type:</span>
              {types.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedType === type.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {type.name} ({type.count})
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-slate-600">
                Showing {filteredAudits.length} of {audits.length} audits
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm font-semibold border border-slate-200">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAudits.map(renderAuditCard)}
            </div>

            {filteredAudits.length === 0 && (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">No audits found</p>
                <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Audit Details Modal */}
      {selectedAudit && renderAuditDetails()}
    </>
  );
};

export default AuditAssistant;
