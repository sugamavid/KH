import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle, AlertTriangle, XCircle, Clock, TrendingUp, Calendar,
  FileText, Shield, Users, Activity, Download, Printer, Plus, Edit,
  Trash2, Eye, Filter, Search, ChevronRight, ChevronDown, AlertCircle,
  Target, BarChart, PieChart, Award, BookOpen
} from 'lucide-react';

const ComplianceTracker = ({ onClose, onNavigateToSection, onOpenPolicyImplementation }) => {
  const [activeView, setActiveView] = useState('dashboard'); // dashboard, sections, checklist, violations, calendar, reports
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedSection, setSelectedSection] = useState(null);
  const [expandedViolation, setExpandedViolation] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  // Mock data for compliance tracking
  const complianceSections = [
    { id: 'section1', name: 'Preliminary Provisions', status: 'compliant', compliance: 100, lastAudit: '2024-09-15', nextAudit: '2024-12-15', violations: 0, requirements: 8, completed: 8, category: 'Foundational' },
    { id: 'section2', name: 'Recruitment and Employment', status: 'compliant', compliance: 95, lastAudit: '2024-09-10', nextAudit: '2024-12-10', violations: 1, requirements: 12, completed: 11, category: 'HR Operations' },
    { id: 'section3', name: 'Appointment and Joining', status: 'compliant', compliance: 98, lastAudit: '2024-09-12', nextAudit: '2024-12-12', violations: 0, requirements: 10, completed: 10, category: 'HR Operations' },
    { id: 'section4', name: 'Probation Period', status: 'partially-compliant', compliance: 78, lastAudit: '2024-08-20', nextAudit: '2024-11-20', violations: 3, requirements: 9, completed: 7, category: 'HR Operations' },
    { id: 'section5', name: 'Equal Opportunity Policy', status: 'compliant', compliance: 100, lastAudit: '2024-09-18', nextAudit: '2024-12-18', violations: 0, requirements: 11, completed: 11, category: 'Compliance' },
    { id: 'section6', name: 'Code of Conduct', status: 'compliant', compliance: 92, lastAudit: '2024-09-05', nextAudit: '2024-12-05', violations: 2, requirements: 15, completed: 14, category: 'Conduct & Ethics' },
    { id: 'section7', name: 'Attendance and Leave Policy', status: 'compliant', compliance: 96, lastAudit: '2024-09-08', nextAudit: '2024-12-08', violations: 1, requirements: 13, completed: 12, category: 'HR Operations' },
    { id: 'section8', name: 'Performance Management', status: 'partially-compliant', compliance: 82, lastAudit: '2024-08-25', nextAudit: '2024-11-25', violations: 2, requirements: 10, completed: 8, category: 'HR Operations' },
    { id: 'section9', name: 'Training and Development', status: 'compliant', compliance: 94, lastAudit: '2024-09-14', nextAudit: '2024-12-14', violations: 1, requirements: 12, completed: 11, category: 'HR Operations' },
    { id: 'section10', name: 'Remote Work Policy', status: 'compliant', compliance: 90, lastAudit: '2024-09-01', nextAudit: '2024-12-01', violations: 1, requirements: 8, completed: 7, category: 'HR Operations' },
    { id: 'section11', name: 'Compensation and Benefits', status: 'compliant', compliance: 97, lastAudit: '2024-09-20', nextAudit: '2024-12-20', violations: 0, requirements: 14, completed: 14, category: 'HR Operations' },
    { id: 'section12', name: 'Grievance Handling', status: 'non-compliant', compliance: 65, lastAudit: '2024-07-15', nextAudit: '2024-10-15', violations: 5, requirements: 11, completed: 7, category: 'Employee Relations' },
    { id: 'section13', name: 'Workplace Safety', status: 'partially-compliant', compliance: 75, lastAudit: '2024-08-28', nextAudit: '2024-11-28', violations: 4, requirements: 16, completed: 12, category: 'Safety & Compliance' },
    { id: 'section14', name: 'Data Privacy', status: 'compliant', compliance: 98, lastAudit: '2024-09-22', nextAudit: '2024-12-22', violations: 0, requirements: 12, completed: 12, category: 'Compliance' },
    { id: 'section15', name: 'Intellectual Property', status: 'compliant', compliance: 100, lastAudit: '2024-09-16', nextAudit: '2024-12-16', violations: 0, requirements: 7, completed: 7, category: 'Compliance' },
    { id: 'section16', name: 'Disciplinary Actions', status: 'compliant', compliance: 93, lastAudit: '2024-09-11', nextAudit: '2024-12-11', violations: 1, requirements: 10, completed: 9, category: 'Employee Relations' },
    { id: 'section17', name: 'Termination Policy', status: 'compliant', compliance: 95, lastAudit: '2024-09-13', nextAudit: '2024-12-13', violations: 1, requirements: 11, completed: 10, category: 'HR Operations' },
    { id: 'section18', name: 'Conflict of Interest', status: 'compliant', compliance: 100, lastAudit: '2024-09-19', nextAudit: '2024-12-19', violations: 0, requirements: 6, completed: 6, category: 'Conduct & Ethics' },
    { id: 'section19', name: 'Gifts and Hospitality', status: 'compliant', compliance: 97, lastAudit: '2024-09-17', nextAudit: '2024-12-17', violations: 0, requirements: 5, completed: 5, category: 'Conduct & Ethics' },
    { id: 'section20', name: 'Employee Wellness', status: 'partially-compliant', compliance: 80, lastAudit: '2024-08-30', nextAudit: '2024-11-30', violations: 2, requirements: 10, completed: 8, category: 'Support Programs' },
    { id: 'section21', name: 'Communication Policy', status: 'compliant', compliance: 92, lastAudit: '2024-09-06', nextAudit: '2024-12-06', violations: 1, requirements: 9, completed: 8, category: 'Governance' },
    { id: 'section22', name: 'Records Management', status: 'compliant', compliance: 96, lastAudit: '2024-09-09', nextAudit: '2024-12-09', violations: 0, requirements: 8, completed: 8, category: 'Governance' },
    { id: 'section23', name: 'Quality Assurance', status: 'compliant', compliance: 94, lastAudit: '2024-09-07', nextAudit: '2024-12-07', violations: 1, requirements: 11, completed: 10, category: 'Compliance' },
    { id: 'section24', name: 'Infection Control', status: 'compliant', compliance: 98, lastAudit: '2024-09-21', nextAudit: '2024-12-21', violations: 0, requirements: 13, completed: 13, category: 'Safety & Compliance' },
    { id: 'section25', name: 'Emergency Preparedness', status: 'partially-compliant', compliance: 77, lastAudit: '2024-08-22', nextAudit: '2024-11-22', violations: 3, requirements: 12, completed: 9, category: 'Safety & Compliance' },
    { id: 'section26', name: 'Patient Rights', status: 'compliant', compliance: 100, lastAudit: '2024-09-23', nextAudit: '2024-12-23', violations: 0, requirements: 10, completed: 10, category: 'Patient Care' },
    { id: 'section27', name: 'Research Ethics', status: 'compliant', compliance: 95, lastAudit: '2024-09-04', nextAudit: '2024-12-04', violations: 1, requirements: 8, completed: 7, category: 'Compliance' },
    { id: 'section28', name: 'External Partnerships', status: 'compliant', compliance: 91, lastAudit: '2024-09-03', nextAudit: '2024-12-03', violations: 1, requirements: 7, completed: 6, category: 'Governance' },
    { id: 'section29', name: 'Amendment Process', status: 'compliant', compliance: 100, lastAudit: '2024-09-24', nextAudit: '2024-12-24', violations: 0, requirements: 5, completed: 5, category: 'Governance' },
    { id: 'section30', name: 'Interpretation Guidelines', status: 'compliant', compliance: 100, lastAudit: '2024-09-25', nextAudit: '2024-12-25', violations: 0, requirements: 6, completed: 6, category: 'Governance' }
  ];

  const violations = [
    { id: 'V001', section: 'Grievance Handling', title: 'Delayed grievance resolution process', severity: 'high', status: 'open', reportedDate: '2024-09-15', dueDate: '2024-10-15', assignedTo: 'HR Manager', description: 'Multiple grievances pending beyond the 30-day resolution timeline' },
    { id: 'V002', section: 'Workplace Safety', title: 'Incomplete fire safety drills documentation', severity: 'medium', status: 'in-progress', reportedDate: '2024-09-10', dueDate: '2024-10-10', assignedTo: 'Safety Officer', description: 'Q2 fire safety drill records not properly documented' },
    { id: 'V003', section: 'Performance Management', title: 'Missing performance review records', severity: 'medium', status: 'in-progress', reportedDate: '2024-09-05', dueDate: '2024-10-05', assignedTo: 'HR Director', description: '15 employees pending annual performance reviews' },
    { id: 'V004', section: 'Probation Period', title: 'Probation evaluations not conducted timely', severity: 'high', status: 'open', reportedDate: '2024-09-12', dueDate: '2024-10-12', assignedTo: 'Department Heads', description: 'Several probation evaluations delayed by 2+ weeks' },
    { id: 'V005', section: 'Recruitment and Employment', title: 'Background verification incomplete', severity: 'critical', status: 'open', reportedDate: '2024-09-20', dueDate: '2024-10-01', assignedTo: 'Recruitment Officer', description: '3 new hires missing complete background checks' },
    { id: 'V006', section: 'Grievance Handling', title: 'Anonymous reporting system not functional', severity: 'high', status: 'open', reportedDate: '2024-09-08', dueDate: '2024-10-08', assignedTo: 'IT Manager', description: 'Online grievance portal experiencing technical issues' },
    { id: 'V007', section: 'Workplace Safety', title: 'Safety equipment inventory outdated', severity: 'medium', status: 'resolved', reportedDate: '2024-08-25', dueDate: '2024-09-25', resolvedDate: '2024-09-22', assignedTo: 'Facilities Manager', description: 'PPE inventory not updated for 6 months' },
    { id: 'V008', section: 'Employee Wellness', title: 'Wellness program participation below target', severity: 'low', status: 'in-progress', reportedDate: '2024-09-01', dueDate: '2024-10-31', assignedTo: 'Wellness Coordinator', description: 'Only 45% employee participation vs 70% target' },
    { id: 'V009', section: 'Emergency Preparedness', title: 'Emergency contact list not updated', severity: 'medium', status: 'open', reportedDate: '2024-09-14', dueDate: '2024-10-14', assignedTo: 'Admin Officer', description: 'Emergency contact database contains outdated information' },
    { id: 'V010', section: 'Code of Conduct', title: 'Ethics training completion rate low', severity: 'medium', status: 'in-progress', reportedDate: '2024-09-18', dueDate: '2024-10-30', assignedTo: 'Training Coordinator', description: '20% of staff yet to complete mandatory ethics training' }
  ];

  const upcomingAudits = [
    { section: 'Grievance Handling', date: '2024-10-15', type: 'Quarterly Review', auditor: 'External Auditor' },
    { section: 'Emergency Preparedness', date: '2024-11-22', type: 'Compliance Audit', auditor: 'Safety Committee' },
    { section: 'Workplace Safety', date: '2024-11-28', type: 'Safety Inspection', auditor: 'Regulatory Authority' },
    { section: 'Probation Period', date: '2024-11-20', type: 'Process Review', auditor: 'HR Committee' },
    { section: 'Performance Management', date: '2024-11-25', type: 'Annual Review', auditor: 'Internal Audit' },
    { section: 'Employee Wellness', date: '2024-11-30', type: 'Program Evaluation', auditor: 'Wellness Committee' },
    { section: 'Remote Work Policy', date: '2024-12-01', type: 'Policy Review', auditor: 'HR Director' }
  ];

  // Calculate stats
  const totalSections = complianceSections.length;
  const compliantSections = complianceSections.filter(s => s.status === 'compliant').length;
  const partiallyCompliant = complianceSections.filter(s => s.status === 'partially-compliant').length;
  const nonCompliant = complianceSections.filter(s => s.status === 'non-compliant').length;
  const avgCompliance = Math.round(complianceSections.reduce((sum, s) => sum + s.compliance, 0) / totalSections);
  const totalViolations = violations.filter(v => v.status !== 'resolved').length;
  const criticalIssues = violations.filter(v => v.severity === 'critical' && v.status !== 'resolved').length;

  const views = [
    { id: 'dashboard', name: 'Dashboard', icon: Activity },
    { id: 'sections', name: 'Sections', icon: FileText },
    { id: 'checklist', name: 'Checklist', icon: CheckCircle },
    { id: 'violations', name: 'Violations', icon: AlertTriangle },
    { id: 'calendar', name: 'Calendar', icon: Calendar },
    { id: 'reports', name: 'Reports', icon: BarChart }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'compliant': return 'green';
      case 'partially-compliant': return 'orange';
      case 'non-compliant': return 'red';
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
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold">{avgCompliance}%</div>
              <div className="text-green-100 text-sm font-semibold mt-1">Overall Compliance</div>
            </div>
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <TrendingUp className="w-7 h-7" />
            </div>
          </div>
          <div className="text-xs text-green-100">↑ 5% from last quarter</div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold text-green-700">{compliantSections}</div>
              <div className="text-slate-600 text-sm font-semibold mt-1">Compliant Sections</div>
            </div>
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <div className="text-xs text-slate-500">Out of {totalSections} total</div>
        </div>

        <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold text-orange-700">{totalViolations}</div>
              <div className="text-slate-600 text-sm font-semibold mt-1">Active Violations</div>
            </div>
            <AlertTriangle className="w-10 h-10 text-orange-600" />
          </div>
          <div className="text-xs text-slate-500">{criticalIssues} critical issues</div>
        </div>

        <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold text-blue-700">{upcomingAudits.length}</div>
              <div className="text-slate-600 text-sm font-semibold mt-1">Upcoming Audits</div>
            </div>
            <Calendar className="w-10 h-10 text-blue-600" />
          </div>
          <div className="text-xs text-slate-500">Next 90 days</div>
        </div>
      </div>

      {/* Compliance Status Breakdown */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-purple-600" />
            Compliance Status Breakdown
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span className="font-semibold text-slate-700">Compliant</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-green-900">{compliantSections} sections</div>
                <div className="text-xs text-green-700">{Math.round((compliantSections/totalSections)*100)}%</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                <span className="font-semibold text-slate-700">Partially Compliant</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-orange-900">{partiallyCompliant} sections</div>
                <div className="text-xs text-orange-700">{Math.round((partiallyCompliant/totalSections)*100)}%</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <span className="font-semibold text-slate-700">Non-Compliant</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-red-900">{nonCompliant} sections</div>
                <div className="text-xs text-red-700">{Math.round((nonCompliant/totalSections)*100)}%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            Critical Issues Requiring Attention
          </h4>
          <div className="space-y-3">
            {violations.filter(v => (v.severity === 'critical' || v.severity === 'high') && v.status !== 'resolved').slice(0, 4).map(v => (
              <div key={v.id} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start justify-between mb-1">
                  <div className="font-semibold text-slate-900 text-sm">{v.title}</div>
                  <span className={`px-2 py-0.5 bg-${getSeverityColor(v.severity)}-100 text-${getSeverityColor(v.severity)}-700 rounded text-xs font-bold`}>
                    {v.severity.toUpperCase()}
                  </span>
                </div>
                <div className="text-xs text-slate-600">{v.section}</div>
                <div className="text-xs text-red-700 mt-1">Due: {v.dueDate}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Recent Compliance Activity</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <div className="flex-1">
              <div className="font-semibold text-slate-900">Safety equipment inventory resolved</div>
              <div className="text-sm text-slate-600">Workplace Safety • Resolved on 2024-09-22</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
            <Activity className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div className="flex-1">
              <div className="font-semibold text-slate-900">Patient Rights audit completed</div>
              <div className="text-sm text-slate-600">100% compliance maintained • 2024-09-23</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0" />
            <div className="flex-1">
              <div className="font-semibold text-slate-900">New violation reported</div>
              <div className="text-sm text-slate-600">Background verification incomplete • 2024-09-20</div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Audits */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          Upcoming Audits (Next 90 Days)
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {upcomingAudits.map((audit, idx) => (
            <div key={idx} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="font-bold text-slate-900 mb-1">{audit.section}</div>
              <div className="text-sm text-slate-600 mb-2">{audit.type}</div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-blue-700 font-semibold">{audit.date}</span>
                <span className="text-slate-600">{audit.auditor}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSections = () => {
    const filteredSections = complianceSections.filter(section => {
      const matchesSearch = section.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           section.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filterStatus === 'all' || section.status === filterStatus;
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
              placeholder="Search sections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-green-500 focus:outline-none"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-green-500 focus:outline-none font-semibold"
          >
            <option value="all">All Status</option>
            <option value="compliant">Compliant</option>
            <option value="partially-compliant">Partially Compliant</option>
            <option value="non-compliant">Non-Compliant</option>
          </select>
        </div>

        {/* Sections Grid */}
        <div className="space-y-3">
          {filteredSections.map(section => {
            const statusColor = getStatusColor(section.status);
            return (
              <div
                key={section.id}
                onClick={() => setSelectedSection(section)}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h5 className="text-lg font-bold text-slate-900">{section.name}</h5>
                      <span className={`px-3 py-1 bg-${statusColor}-100 text-${statusColor}-700 rounded-full text-xs font-bold`}>
                        {section.status === 'partially-compliant' ? 'PARTIALLY COMPLIANT' : section.status.toUpperCase().replace('-', ' ')}
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-semibold">
                        {section.category}
                      </span>
                    </div>

                    <div className="grid grid-cols-5 gap-4 mb-3">
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Compliance</div>
                        <div className="font-bold text-slate-900">{section.compliance}%</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Requirements</div>
                        <div className="font-bold text-slate-900">{section.completed}/{section.requirements}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Violations</div>
                        <div className={`font-bold ${section.violations > 0 ? 'text-red-700' : 'text-green-700'}`}>
                          {section.violations}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Last Audit</div>
                        <div className="font-bold text-slate-900 text-sm">{section.lastAudit}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Next Audit</div>
                        <div className="font-bold text-blue-700 text-sm">{section.nextAudit}</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${statusColor}-600 transition-all duration-500`}
                        style={{ width: `${section.compliance}%` }}
                      />
                    </div>
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

  const renderChecklist = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
        <p className="text-blue-800 text-sm">
          <strong>Compliance Checklist:</strong> Track completion of requirements for each By-Laws section. 
          Check off items as they are completed and add evidence/notes.
        </p>
      </div>

      <div className="space-y-4">
        {complianceSections.filter(s => s.status !== 'compliant').map(section => (
          <div key={section.id} className="bg-white border-2 border-slate-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900">{section.name}</h4>
                <div className="text-sm text-slate-600">
                  {section.completed} of {section.requirements} requirements completed
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-700">{section.compliance}%</div>
                <div className="text-xs text-slate-600">Compliance</div>
              </div>
            </div>

            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-green-600 transition-all duration-500"
                style={{ width: `${section.compliance}%` }}
              />
            </div>

            <div className="space-y-2">
              {Array.from({ length: section.requirements }).map((_, idx) => {
                const isCompleted = idx < section.completed;
                return (
                  <label
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all cursor-pointer ${
                      isCompleted 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-white border-slate-200 hover:border-green-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      readOnly
                      className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                    />
                    <div className="flex-1">
                      <div className={`font-semibold ${isCompleted ? 'text-green-900' : 'text-slate-900'}`}>
                        Requirement {idx + 1}: Sample compliance requirement
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">
                        Due: 2024-10-{15 + idx}
                      </div>
                    </div>
                    {isCompleted && <CheckCircle className="w-5 h-5 text-green-600" />}
                  </label>
                );
              })}
            </div>

            <button
              onClick={() => onNavigateToSection && onNavigateToSection(section.id)}
              className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View Full Section in By-Laws
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderViolations = () => (
    <div className="space-y-6">
      {/* Filter */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold">
          All ({violations.length})
        </button>
        <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200">
          Critical ({violations.filter(v => v.severity === 'critical').length})
        </button>
        <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200">
          Open ({violations.filter(v => v.status === 'open').length})
        </button>
        <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200">
          In Progress ({violations.filter(v => v.status === 'in-progress').length})
        </button>
      </div>

      {/* Violations List */}
      <div className="space-y-3">
        {violations.map(violation => {
          const severityColor = getSeverityColor(violation.severity);
          const isExpanded = expandedViolation === violation.id;

          return (
            <div
              key={violation.id}
              className={`bg-white border-2 rounded-xl overflow-hidden transition-all ${
                violation.severity === 'critical' ? 'border-red-300' : 'border-slate-200'
              }`}
            >
              <div
                onClick={() => setExpandedViolation(isExpanded ? null : violation.id)}
                className="p-5 cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm font-bold text-slate-600">{violation.id}</span>
                      <span className={`px-3 py-1 bg-${severityColor}-100 text-${severityColor}-700 rounded-full text-xs font-bold`}>
                        {violation.severity.toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        violation.status === 'open' ? 'bg-red-100 text-red-700' :
                        violation.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {violation.status.toUpperCase().replace('-', ' ')}
                      </span>
                    </div>
                    <h5 className="text-lg font-bold text-slate-900 mb-1">{violation.title}</h5>
                    <div className="text-sm text-slate-600">{violation.section}</div>
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
                    <span>Reported: {violation.reportedDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-700 font-semibold">
                    <AlertCircle className="w-4 h-4" />
                    <span>Due: {violation.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="w-4 h-4" />
                    <span>{violation.assignedTo}</span>
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="px-5 pb-5 border-t border-slate-200 pt-4 bg-slate-50">
                  <div className="mb-4">
                    <h6 className="font-bold text-slate-900 mb-2">Description</h6>
                    <p className="text-slate-700 leading-relaxed">{violation.description}</p>
                  </div>

                  {violation.resolvedDate && (
                    <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800 font-semibold">
                        <CheckCircle className="w-5 h-5" />
                        <span>Resolved on {violation.resolvedDate}</span>
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
                      onClick={() => onNavigateToSection && onNavigateToSection(violation.section.toLowerCase().replace(' ', '_'))}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      View Section
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderCalendar = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-slate-900">Compliance Calendar - 2024</h4>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200">
              Today
            </button>
            <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200">
              Export
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <h5 className="text-lg font-bold text-slate-900 mb-4">Upcoming Events</h5>
          <div className="space-y-3">
            {upcomingAudits.map((audit, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">{audit.date.split('-')[2]}</div>
                  <div className="text-xs text-blue-600 font-semibold">{months[parseInt(audit.date.split('-')[1]) - 1]}</div>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900">{audit.section}</div>
                  <div className="text-sm text-slate-600">{audit.type}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-slate-700">{audit.auditor}</div>
                  <div className="text-xs text-slate-500">Auditor</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Month View */}
        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center font-bold text-slate-600 text-sm py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }).map((_, idx) => {
              const day = idx - 2;
              const hasEvent = [13, 20, 22, 25, 28, 30].includes(day);
              
              return (
                <div
                  key={idx}
                  className={`aspect-square p-2 border rounded-lg text-center ${
                    day < 1 || day > 31
                      ? 'bg-slate-50 text-slate-300'
                      : hasEvent
                      ? 'bg-blue-50 border-blue-300 cursor-pointer hover:bg-blue-100'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {day > 0 && day <= 31 && (
                    <>
                      <div className="font-semibold text-slate-900">{day}</div>
                      {hasEvent && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto mt-1"></div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderReports = () => (
    <div className="space-y-6">
      {/* Report Templates */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Quick Reports</h4>
        <div className="grid grid-cols-3 gap-4">
          <button className="p-4 bg-green-50 border-2 border-green-200 rounded-xl hover:bg-green-100 transition-all text-left">
            <Download className="w-6 h-6 text-green-600 mb-2" />
            <div className="font-bold text-slate-900">Overall Compliance</div>
            <div className="text-xs text-slate-600 mt-1">Full compliance report</div>
          </button>
          <button className="p-4 bg-red-50 border-2 border-red-200 rounded-xl hover:bg-red-100 transition-all text-left">
            <AlertTriangle className="w-6 h-6 text-red-600 mb-2" />
            <div className="font-bold text-slate-900">Violations Summary</div>
            <div className="text-xs text-slate-600 mt-1">Active violations report</div>
          </button>
          <button className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition-all text-left">
            <Calendar className="w-6 h-6 text-blue-600 mb-2" />
            <div className="font-bold text-slate-900">Audit Schedule</div>
            <div className="text-xs text-slate-600 mt-1">Upcoming audits report</div>
          </button>
        </div>
      </div>

      {/* Compliance Trends */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Compliance Trends</h4>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">Q1 2024</span>
              <span className="text-sm font-bold text-green-700">87%</span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-600" style={{ width: '87%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">Q2 2024</span>
              <span className="text-sm font-bold text-green-700">90%</span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-600" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">Q3 2024</span>
              <span className="text-sm font-bold text-green-700">{avgCompliance}%</span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-600" style={{ width: `${avgCompliance}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Performance */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Performance by Category</h4>
        <div className="space-y-3">
          {[
            { name: 'HR Operations', compliance: 92, count: 7 },
            { name: 'Safety & Compliance', compliance: 85, count: 4 },
            { name: 'Governance', compliance: 96, count: 6 },
            { name: 'Conduct & Ethics', compliance: 97, count: 3 },
            { name: 'Employee Relations', compliance: 79, count: 2 }
          ].map(cat => (
            <div key={cat.name} className="flex items-center gap-4">
              <div className="w-40 font-semibold text-slate-700 text-sm">{cat.name}</div>
              <div className="flex-1">
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${cat.compliance >= 90 ? 'bg-green-600' : cat.compliance >= 75 ? 'bg-orange-500' : 'bg-red-600'}`}
                    style={{ width: `${cat.compliance}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-16 text-right font-bold text-slate-900">{cat.compliance}%</div>
              <div className="w-20 text-right text-xs text-slate-600">{cat.count} sections</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Compliance Tracker</h2>
                  <p className="text-green-100">Real-time compliance monitoring and tracking system</p>
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
                        ? 'bg-white text-green-700 shadow-lg'
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
            {activeView === 'sections' && renderSections()}
            {activeView === 'checklist' && renderChecklist()}
            {activeView === 'violations' && renderViolations()}
            {activeView === 'calendar' && renderCalendar()}
            {activeView === 'reports' && renderReports()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplianceTracker;
