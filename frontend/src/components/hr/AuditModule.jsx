import React, { useState } from 'react';
import { 
  X, Shield, Calendar, CheckCircle, AlertTriangle, XCircle, Clock,
  FileText, Download, Printer, Search, Filter, Plus, Edit, Eye,
  TrendingUp, BarChart, Target, Users, Briefcase, Award, Activity,
  ChevronRight, ChevronDown, Star, AlertCircle, Settings, Upload,
  Check, Clipboard, BookOpen, Zap, ThumbsUp, ThumbsDown
} from 'lucide-react';

const AuditModule = ({ onClose, onNavigateToSection }) => {
  const [activeView, setActiveView] = useState('dashboard'); // dashboard, schedule, checklists, findings, reports, history
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedAudit, setSelectedAudit] = useState(null);
  const [expandedFinding, setExpandedFinding] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  // Comprehensive audit data
  const auditSchedule = [
    { id: 'AUD-2024-001', section: 'Recruitment and Employment', type: 'Compliance Audit', status: 'completed', auditor: 'Internal Audit Team', scheduledDate: '2024-09-10', completedDate: '2024-09-12', score: 92, findings: 2, category: 'HR Operations', priority: 'high' },
    { id: 'AUD-2024-002', section: 'Code of Conduct', type: 'Policy Review', status: 'in-progress', auditor: 'Compliance Officer', scheduledDate: '2024-10-05', completedDate: null, score: null, findings: 1, category: 'Ethics & Compliance', priority: 'high' },
    { id: 'AUD-2024-003', section: 'Workplace Safety', type: 'Safety Inspection', status: 'scheduled', auditor: 'Safety Committee', scheduledDate: '2024-10-28', completedDate: null, score: null, findings: 0, category: 'Safety & Health', priority: 'critical' },
    { id: 'AUD-2024-004', section: 'Data Privacy', type: 'HIPAA Compliance', status: 'completed', auditor: 'External Auditor', scheduledDate: '2024-09-22', completedDate: '2024-09-23', score: 98, findings: 0, category: 'Compliance', priority: 'critical' },
    { id: 'AUD-2024-005', section: 'Performance Management', type: 'Process Audit', status: 'scheduled', auditor: 'HR Director', scheduledDate: '2024-11-25', completedDate: null, score: null, findings: 0, category: 'HR Operations', priority: 'medium' },
    { id: 'AUD-2024-006', section: 'Grievance Handling', type: 'Compliance Audit', status: 'overdue', auditor: 'HR Committee', scheduledDate: '2024-10-15', completedDate: null, score: null, findings: 3, category: 'Employee Relations', priority: 'high' },
    { id: 'AUD-2024-007', section: 'Infection Control', type: 'Clinical Audit', status: 'completed', auditor: 'Infection Control Officer', scheduledDate: '2024-09-21', completedDate: '2024-09-21', score: 96, findings: 1, category: 'Clinical', priority: 'critical' },
    { id: 'AUD-2024-008', section: 'Training and Development', type: 'Program Review', status: 'in-progress', auditor: 'Training Coordinator', scheduledDate: '2024-10-14', completedDate: null, score: null, findings: 0, category: 'HR Operations', priority: 'medium' },
    { id: 'AUD-2024-009', section: 'Patient Rights', type: 'Compliance Audit', status: 'completed', auditor: 'Medical Director', scheduledDate: '2024-09-23', completedDate: '2024-09-23', score: 100, findings: 0, category: 'Patient Care', priority: 'critical' },
    { id: 'AUD-2024-010', section: 'Emergency Preparedness', type: 'Readiness Audit', status: 'scheduled', auditor: 'Safety Committee', scheduledDate: '2024-11-22', completedDate: null, score: null, findings: 0, category: 'Safety & Health', priority: 'high' },
    { id: 'AUD-2024-011', section: 'Compensation and Benefits', type: 'Compliance Review', status: 'completed', auditor: 'Payroll Manager', scheduledDate: '2024-09-20', completedDate: '2024-09-20', score: 94, findings: 1, category: 'HR Operations', priority: 'medium' },
    { id: 'AUD-2024-012', section: 'Disciplinary Actions', type: 'Process Audit', status: 'scheduled', auditor: 'Legal Advisor', scheduledDate: '2024-11-11', completedDate: null, score: null, findings: 0, category: 'Employee Relations', priority: 'medium' }
  ];

  const auditFindings = [
    { id: 'FIND-001', auditId: 'AUD-2024-001', section: 'Recruitment and Employment', title: 'Background verification delays', severity: 'medium', status: 'open', description: 'Background checks for 3 new hires exceeded the 2-week timeline', recommendation: 'Streamline background check process with vendor', responsiblePerson: 'HR Manager', dueDate: '2024-10-30', reportedDate: '2024-09-12' },
    { id: 'FIND-002', auditId: 'AUD-2024-001', section: 'Recruitment and Employment', title: 'Incomplete job descriptions', severity: 'low', status: 'resolved', description: 'Two job descriptions missing required competency details', recommendation: 'Update JD template with mandatory fields', responsiblePerson: 'Recruitment Officer', dueDate: '2024-10-15', reportedDate: '2024-09-12', resolvedDate: '2024-09-25' },
    { id: 'FIND-003', auditId: 'AUD-2024-002', section: 'Code of Conduct', title: 'Training completion gaps', severity: 'high', status: 'in-progress', description: '15% of staff have not completed mandatory ethics training', recommendation: 'Schedule mandatory training sessions', responsiblePerson: 'Training Coordinator', dueDate: '2024-10-31', reportedDate: '2024-10-05' },
    { id: 'FIND-004', auditId: 'AUD-2024-006', section: 'Grievance Handling', title: 'Delayed grievance resolution', severity: 'high', status: 'open', description: 'Multiple grievances pending beyond 30-day resolution timeline', recommendation: 'Allocate additional resources to grievance committee', responsiblePerson: 'HR Director', dueDate: '2024-11-01', reportedDate: '2024-10-15' },
    { id: 'FIND-005', auditId: 'AUD-2024-006', section: 'Grievance Handling', title: 'Incomplete grievance records', severity: 'medium', status: 'open', description: 'Documentation gaps in grievance case files', recommendation: 'Implement standardized documentation checklist', responsiblePerson: 'HR Specialist', dueDate: '2024-10-25', reportedDate: '2024-10-15' },
    { id: 'FIND-006', auditId: 'AUD-2024-007', section: 'Infection Control', title: 'PPE inventory tracking', severity: 'low', status: 'resolved', description: 'Manual tracking causing occasional stock discrepancies', recommendation: 'Implement digital inventory management system', responsiblePerson: 'Facilities Manager', dueDate: '2024-10-10', reportedDate: '2024-09-21', resolvedDate: '2024-10-08' },
    { id: 'FIND-007', auditId: 'AUD-2024-011', section: 'Compensation and Benefits', title: 'Payroll processing delays', severity: 'medium', status: 'in-progress', description: 'Occasional delays in processing variable pay components', recommendation: 'Automate variable pay calculations', responsiblePerson: 'Payroll Officer', dueDate: '2024-11-15', reportedDate: '2024-09-20' }
  ];

  const auditChecklists = {
    'recruitment': {
      name: 'Recruitment and Employment Audit',
      sections: [
        { id: 1, item: 'Job descriptions are comprehensive and up-to-date', mandatory: true, checked: true },
        { id: 2, item: 'Equal opportunity policy compliance verified', mandatory: true, checked: true },
        { id: 3, item: 'Background verification completed within timeline', mandatory: true, checked: false },
        { id: 4, item: 'Interview panel composition follows guidelines', mandatory: true, checked: true },
        { id: 5, item: 'Offer letters issued as per standard template', mandatory: true, checked: true },
        { id: 6, item: 'Employee records maintained systematically', mandatory: false, checked: true },
        { id: 7, item: 'Recruitment metrics tracked and reported', mandatory: false, checked: true }
      ]
    },
    'safety': {
      name: 'Workplace Safety Audit',
      sections: [
        { id: 1, item: 'Fire safety equipment functional and accessible', mandatory: true, checked: false },
        { id: 2, item: 'Emergency evacuation plans displayed', mandatory: true, checked: false },
        { id: 3, item: 'Safety training conducted as scheduled', mandatory: true, checked: false },
        { id: 4, item: 'PPE available and properly maintained', mandatory: true, checked: false },
        { id: 5, item: 'Incident reporting system operational', mandatory: true, checked: false },
        { id: 6, item: 'Safety committee meetings conducted', mandatory: false, checked: false },
        { id: 7, item: 'Safety audit recommendations implemented', mandatory: true, checked: false }
      ]
    }
  };

  // Stats
  const totalAudits = auditSchedule.length;
  const completedAudits = auditSchedule.filter(a => a.status === 'completed').length;
  const scheduledAudits = auditSchedule.filter(a => a.status === 'scheduled').length;
  const inProgressAudits = auditSchedule.filter(a => a.status === 'in-progress').length;
  const overdueAudits = auditSchedule.filter(a => a.status === 'overdue').length;
  const criticalAudits = auditSchedule.filter(a => a.priority === 'critical').length;
  const totalFindings = auditFindings.length;
  const openFindings = auditFindings.filter(f => f.status === 'open').length;
  const resolvedFindings = auditFindings.filter(f => f.status === 'resolved').length;
  const avgScore = Math.round(auditSchedule.filter(a => a.score).reduce((sum, a) => sum + a.score, 0) / completedAudits);

  const views = [
    { id: 'dashboard', name: 'Dashboard', icon: Activity },
    { id: 'schedule', name: 'Schedule', icon: Calendar },
    { id: 'checklists', name: 'Checklists', icon: Clipboard },
    { id: 'findings', name: 'Findings', icon: AlertTriangle },
    { id: 'reports', name: 'Reports', icon: BarChart },
    { id: 'history', name: 'History', icon: Clock }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'green';
      case 'in-progress': return 'blue';
      case 'scheduled': return 'purple';
      case 'overdue': return 'red';
      default: return 'slate';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'red';
      case 'high': return 'orange';
      case 'medium': return 'yellow';
      case 'low': return 'blue';
      default: return 'slate';
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold">{totalAudits}</div>
              <div className="text-blue-100 text-sm font-semibold mt-1">Total Audits</div>
            </div>
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <Shield className="w-7 h-7" />
            </div>
          </div>
          <div className="text-xs text-blue-100">{completedAudits} completed this quarter</div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold text-green-700">{avgScore}%</div>
              <div className="text-slate-600 text-sm font-semibold mt-1">Avg. Score</div>
            </div>
            <Target className="w-10 h-10 text-green-600" />
          </div>
          <div className="text-xs text-slate-500">Based on {completedAudits} audits</div>
        </div>

        <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold text-orange-700">{openFindings}</div>
              <div className="text-slate-600 text-sm font-semibold mt-1">Open Findings</div>
            </div>
            <AlertTriangle className="w-10 h-10 text-orange-600" />
          </div>
          <div className="text-xs text-slate-500">{totalFindings} total findings</div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold text-purple-700">{scheduledAudits}</div>
              <div className="text-slate-600 text-sm font-semibold mt-1">Upcoming</div>
            </div>
            <Calendar className="w-10 h-10 text-purple-600" />
          </div>
          <div className="text-xs text-slate-500">{criticalAudits} critical priority</div>
        </div>
      </div>

      {/* Audit Status Overview */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Audit Status Overview
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-slate-700">Completed</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-green-900">{completedAudits} audits</div>
                <div className="text-xs text-green-700">{Math.round((completedAudits/totalAudits)*100)}%</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-slate-700">In Progress</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-blue-900">{inProgressAudits} audits</div>
                <div className="text-xs text-blue-700">{Math.round((inProgressAudits/totalAudits)*100)}%</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-slate-700">Scheduled</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-purple-900">{scheduledAudits} audits</div>
                <div className="text-xs text-purple-700">{Math.round((scheduledAudits/totalAudits)*100)}%</div>
              </div>
            </div>
            {overdueAudits > 0 && (
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-slate-700">Overdue</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-red-900">{overdueAudits} audits</div>
                  <div className="text-xs text-red-700">Needs attention</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            Critical Findings
          </h4>
          <div className="space-y-3">
            {auditFindings.filter(f => (f.severity === 'critical' || f.severity === 'high') && f.status !== 'resolved').slice(0, 4).map(finding => (
              <div key={finding.id} className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-start justify-between mb-1">
                  <div className="font-semibold text-slate-900 text-sm">{finding.title}</div>
                  <span className={`px-2 py-0.5 bg-${getSeverityColor(finding.severity)}-100 text-${getSeverityColor(finding.severity)}-700 rounded text-xs font-bold`}>
                    {finding.severity.toUpperCase()}
                  </span>
                </div>
                <div className="text-xs text-slate-600">{finding.section}</div>
                <div className="text-xs text-orange-700 mt-1 font-semibold">Due: {finding.dueDate}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Audit Activity */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Recent Audit Activity</h4>
        <div className="space-y-3">
          {auditSchedule.filter(a => a.status === 'completed' || a.status === 'in-progress').slice(0, 5).map(audit => (
            <div key={audit.id} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                audit.status === 'completed' ? 'bg-green-100' : 'bg-blue-100'
              }`}>
                {audit.status === 'completed' ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <Activity className="w-6 h-6 text-blue-600" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-bold text-slate-900">{audit.section}</div>
                <div className="text-sm text-slate-600">{audit.type} • {audit.auditor}</div>
              </div>
              {audit.score && (
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-700">{audit.score}%</div>
                  <div className="text-xs text-slate-600">Score</div>
                </div>
              )}
              <span className={`px-3 py-1 bg-${getStatusColor(audit.status)}-100 text-${getStatusColor(audit.status)}-700 rounded-full text-xs font-bold`}>
                {audit.status.toUpperCase().replace('-', ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Audits */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-600" />
          Upcoming Audits (Next 30 Days)
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {auditSchedule.filter(a => a.status === 'scheduled').slice(0, 4).map(audit => (
            <div key={audit.id} className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="font-bold text-slate-900 mb-1">{audit.section}</div>
              <div className="text-sm text-slate-600 mb-2">{audit.type}</div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-purple-700 font-semibold">{audit.scheduledDate}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                  audit.priority === 'critical' ? 'bg-red-100 text-red-700' :
                  audit.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {audit.priority.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => {
    const filteredAudits = auditSchedule.filter(audit => {
      const matchesSearch = audit.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           audit.type.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filterStatus === 'all' || audit.status === filterStatus;
      return matchesSearch && matchesFilter;
    });

    return (
      <div className="space-y-6">
        {/* Search and Filter */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search audits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none font-semibold"
          >
            <option value="all">All Status</option>
            <option value="scheduled">Scheduled</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="overdue">Overdue</option>
          </select>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-bold flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Schedule Audit
          </button>
        </div>

        {/* Audit Cards */}
        <div className="space-y-3">
          {filteredAudits.map(audit => {
            const statusColor = getStatusColor(audit.status);
            return (
              <div
                key={audit.id}
                onClick={() => setSelectedAudit(audit)}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-slate-600">{audit.id}</span>
                      <h5 className="text-lg font-bold text-slate-900">{audit.section}</h5>
                      <span className={`px-3 py-1 bg-${statusColor}-100 text-${statusColor}-700 rounded-full text-xs font-bold`}>
                        {audit.status.toUpperCase().replace('-', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        audit.priority === 'critical' ? 'bg-red-100 text-red-700' :
                        audit.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {audit.priority.toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-5 gap-4 mb-3 text-sm">
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Type</div>
                        <div className="font-semibold text-slate-900">{audit.type}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Auditor</div>
                        <div className="font-semibold text-slate-900">{audit.auditor}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Scheduled</div>
                        <div className="font-semibold text-slate-900">{audit.scheduledDate}</div>
                      </div>
                      {audit.completedDate && (
                        <div>
                          <div className="text-xs text-slate-600 mb-1">Completed</div>
                          <div className="font-semibold text-green-700">{audit.completedDate}</div>
                        </div>
                      )}
                      {audit.score && (
                        <div>
                          <div className="text-xs text-slate-600 mb-1">Score</div>
                          <div className="font-bold text-2xl text-green-700">{audit.score}%</div>
                        </div>
                      )}
                    </div>

                    {audit.findings > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span className="font-semibold text-orange-700">{audit.findings} findings</span>
                      </div>
                    )}
                  </div>
                  <ChevronRight className="w-6 h-6 text-slate-400 flex-shrink-0 ml-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderChecklists = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
        <p className="text-blue-800 text-sm">
          <strong>Audit Checklists:</strong> Use these standardized checklists to ensure comprehensive coverage 
          of all audit requirements. Check off items as you verify compliance.
        </p>
      </div>

      <div className="space-y-4">
        {Object.entries(auditChecklists).map(([key, checklist]) => (
          <div key={key} className="bg-white border-2 border-slate-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-slate-900">{checklist.name}</h4>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-700">
                  {checklist.sections.filter(s => s.checked).length}/{checklist.sections.length}
                </div>
                <div className="text-xs text-slate-600">Completed</div>
              </div>
            </div>

            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-green-600 transition-all duration-500"
                style={{ width: `${(checklist.sections.filter(s => s.checked).length / checklist.sections.length) * 100}%` }}
              />
            </div>

            <div className="space-y-2">
              {checklist.sections.map(item => (
                <label
                  key={item.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all cursor-pointer ${
                    item.checked 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-white border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                    readOnly
                    className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <div className={`font-semibold ${item.checked ? 'text-green-900' : 'text-slate-900'}`}>
                      {item.item}
                    </div>
                    {item.mandatory && (
                      <span className="text-xs text-red-600 font-bold">* Mandatory</span>
                    )}
                  </div>
                  {item.checked && <CheckCircle className="w-5 h-5 text-green-600" />}
                </label>
              ))}
            </div>

            <div className="flex gap-3 mt-4">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Save Progress
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Complete Audit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFindings = () => (
    <div className="space-y-6">
      {/* Filter */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg font-semibold">
          All ({totalFindings})
        </button>
        <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200">
          Open ({openFindings})
        </button>
        <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200">
          In Progress ({auditFindings.filter(f => f.status === 'in-progress').length})
        </button>
        <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200">
          Resolved ({resolvedFindings})
        </button>
      </div>

      {/* Findings List */}
      <div className="space-y-3">
        {auditFindings.map(finding => {
          const severityColor = getSeverityColor(finding.severity);
          const isExpanded = expandedFinding === finding.id;

          return (
            <div
              key={finding.id}
              className={`bg-white border-2 rounded-xl overflow-hidden transition-all ${
                finding.severity === 'critical' || finding.severity === 'high' 
                  ? 'border-orange-300' 
                  : 'border-slate-200'
              }`}
            >
              <div
                onClick={() => setExpandedFinding(isExpanded ? null : finding.id)}
                className="p-5 cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm font-bold text-slate-600">{finding.id}</span>
                      <span className={`px-3 py-1 bg-${severityColor}-100 text-${severityColor}-700 rounded-full text-xs font-bold`}>
                        {finding.severity.toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        finding.status === 'open' ? 'bg-red-100 text-red-700' :
                        finding.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {finding.status.toUpperCase().replace('-', ' ')}
                      </span>
                    </div>
                    <h5 className="text-lg font-bold text-slate-900 mb-1">{finding.title}</h5>
                    <div className="text-sm text-slate-600">{finding.section}</div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-slate-400" />
                  )}
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>Reported: {finding.reportedDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-700 font-semibold">
                    <AlertCircle className="w-4 h-4" />
                    <span>Due: {finding.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="w-4 h-4" />
                    <span>{finding.responsiblePerson}</span>
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="px-5 pb-5 border-t border-slate-200 pt-4 bg-slate-50">
                  <div className="space-y-4">
                    <div>
                      <h6 className="font-bold text-slate-900 mb-2">Description</h6>
                      <p className="text-slate-700 leading-relaxed">{finding.description}</p>
                    </div>

                    <div>
                      <h6 className="font-bold text-slate-900 mb-2">Recommendation</h6>
                      <p className="text-slate-700 leading-relaxed">{finding.recommendation}</p>
                    </div>

                    {finding.resolvedDate && (
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-2 text-green-800 font-semibold">
                          <CheckCircle className="w-5 h-5" />
                          <span>Resolved on {finding.resolvedDate}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                        Update Status
                      </button>
                      <button className="flex-1 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-semibold">
                        Add Comment
                      </button>
                      <button 
                        onClick={() => onNavigateToSection && onNavigateToSection(finding.section.toLowerCase().replace(/ /g, '_'))}
                        className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                      >
                        View By-Laws
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Audit Module</h2>
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

            {/* View Tabs */}
            <div className="flex gap-2">
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

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
            {activeView === 'dashboard' && renderDashboard()}
            {activeView === 'schedule' && renderSchedule()}
            {activeView === 'checklists' && renderChecklists()}
            {activeView === 'findings' && renderFindings()}
            {activeView === 'reports' && (
              <div className="text-center py-12">
                <BarChart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Audit Reports & Analytics</p>
                <p className="text-sm text-slate-500 mt-1">Building comprehensive reports view...</p>
              </div>
            )}
            {activeView === 'history' && (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Audit History</p>
                <p className="text-sm text-slate-500 mt-1">Building historical audit records view...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditModule;
