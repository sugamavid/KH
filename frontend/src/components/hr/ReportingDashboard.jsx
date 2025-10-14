import React, { useState } from 'react';
import { 
  X, BarChart, TrendingUp, PieChart, Activity, Download, Printer,
  Calendar, Filter, Search, Plus, Eye, Settings, Mail, Clock,
  Target, Users, FileText, Shield, BookOpen, Award, AlertTriangle,
  CheckCircle, Star, Zap, ArrowUp, ArrowDown, Minus, RefreshCw
} from 'lucide-react';

const ReportingDashboard = ({ onClose, onNavigateToSection }) => {
  const [activeView, setActiveView] = useState('overview'); // overview, analytics, reports, custom, scheduled
  const [selectedPeriod, setSelectedPeriod] = useState('quarter');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Comprehensive reporting data
  const keyMetrics = {
    compliance: {
      overall: 92,
      trend: 5,
      sections: {
        compliant: 24,
        partiallyCompliant: 5,
        nonCompliant: 1
      },
      byCategory: [
        { category: 'HR Operations', compliance: 88, sections: 8 },
        { category: 'Safety & Compliance', compliance: 94, sections: 5 },
        { category: 'Employee Relations', compliance: 85, sections: 3 },
        { category: 'Governance', compliance: 98, sections: 6 },
        { category: 'Clinical', compliance: 96, sections: 4 },
        { category: 'Ethics & Compliance', compliance: 100, sections: 4 }
      ]
    },
    training: {
      completionRate: 87,
      trend: 8,
      enrolled: 456,
      completed: 398,
      inProgress: 45,
      pending: 13,
      byCategory: [
        { category: 'Mandatory', completion: 92, total: 250 },
        { category: 'Safety', completion: 95, total: 120 },
        { category: 'Professional Dev', completion: 68, total: 86 }
      ]
    },
    audits: {
      avgScore: 94,
      trend: 3,
      completed: 5,
      scheduled: 4,
      inProgress: 2,
      overdue: 1,
      findings: {
        total: 7,
        open: 3,
        inProgress: 2,
        resolved: 2
      }
    },
    documents: {
      generated: 1245,
      trend: 12,
      thisMonth: 87,
      templates: 32,
      popular: [
        { name: 'Offer Letter', count: 245 },
        { name: 'Leave Application', count: 523 },
        { name: 'Salary Certificate', count: 398 }
      ]
    },
    employees: {
      total: 456,
      newHires: 24,
      departures: 8,
      activeTraining: 45,
      certifications: 234
    }
  };

  const reportTemplates = [
    { id: 'RPT-001', name: 'Comprehensive Compliance Report', category: 'Compliance', frequency: 'Monthly', lastGenerated: '2024-10-01', pages: 24, format: 'PDF', popular: true },
    { id: 'RPT-002', name: 'Training Completion Analysis', category: 'Training', frequency: 'Weekly', lastGenerated: '2024-10-14', pages: 12, format: 'Excel', popular: true },
    { id: 'RPT-003', name: 'Audit Findings Summary', category: 'Audit', frequency: 'Quarterly', lastGenerated: '2024-10-01', pages: 18, format: 'PDF', popular: false },
    { id: 'RPT-004', name: 'Document Generation Statistics', category: 'Documents', frequency: 'Monthly', lastGenerated: '2024-10-01', pages: 8, format: 'Excel', popular: true },
    { id: 'RPT-005', name: 'Employee Lifecycle Report', category: 'HR', frequency: 'Monthly', lastGenerated: '2024-10-01', pages: 16, format: 'PDF', popular: false },
    { id: 'RPT-006', name: 'Policy Implementation Progress', category: 'Implementation', frequency: 'Quarterly', lastGenerated: '2024-10-01', pages: 20, format: 'PDF', popular: true },
    { id: 'RPT-007', name: 'Risk Assessment Dashboard', category: 'Risk', frequency: 'Monthly', lastGenerated: '2024-10-01', pages: 14, format: 'PDF', popular: false },
    { id: 'RPT-008', name: 'Grievance Resolution Metrics', category: 'Employee Relations', frequency: 'Monthly', lastGenerated: '2024-09-30', pages: 10, format: 'Excel', popular: false },
    { id: 'RPT-009', name: 'Safety Incident Analysis', category: 'Safety', frequency: 'Weekly', lastGenerated: '2024-10-14', pages: 6, format: 'PDF', popular: true },
    { id: 'RPT-010', name: 'Executive Summary Dashboard', category: 'Executive', frequency: 'Monthly', lastGenerated: '2024-10-01', pages: 4, format: 'PDF', popular: true }
  ];

  const scheduledReports = [
    { id: 'SCH-001', report: 'Comprehensive Compliance Report', frequency: 'Monthly', nextRun: '2024-11-01', recipients: ['hr@koyilihospital.com', 'admin@koyilihospital.com'], active: true },
    { id: 'SCH-002', report: 'Training Completion Analysis', frequency: 'Weekly', nextRun: '2024-10-21', recipients: ['training@koyilihospital.com'], active: true },
    { id: 'SCH-003', report: 'Audit Findings Summary', frequency: 'Quarterly', nextRun: '2025-01-01', recipients: ['audit@koyilihospital.com'], active: true },
    { id: 'SCH-004', report: 'Executive Summary Dashboard', frequency: 'Monthly', nextRun: '2024-11-01', recipients: ['ceo@koyilihospital.com', 'coo@koyilihospital.com'], active: true }
  ];

  const complianceTrends = [
    { month: 'Apr', score: 85 },
    { month: 'May', score: 87 },
    { month: 'Jun', score: 88 },
    { month: 'Jul', score: 89 },
    { month: 'Aug', score: 90 },
    { month: 'Sep', score: 92 }
  ];

  const views = [
    { id: 'overview', name: 'Overview', icon: Activity },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp },
    { id: 'reports', name: 'Reports', icon: FileText },
    { id: 'custom', name: 'Custom', icon: Plus },
    { id: 'scheduled', name: 'Scheduled', icon: Clock }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold">{keyMetrics.compliance.overall}%</div>
              <div className="text-green-100 text-sm font-semibold mt-1">Compliance Score</div>
            </div>
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <Shield className="w-7 h-7" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-green-100">
            <ArrowUp className="w-4 h-4" />
            <span>{keyMetrics.compliance.trend}% from last period</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold">{keyMetrics.training.completionRate}%</div>
              <div className="text-blue-100 text-sm font-semibold mt-1">Training Rate</div>
            </div>
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <BookOpen className="w-7 h-7" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-100">
            <ArrowUp className="w-4 h-4" />
            <span>{keyMetrics.training.trend}% from last period</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold">{keyMetrics.audits.avgScore}%</div>
              <div className="text-purple-100 text-sm font-semibold mt-1">Audit Score</div>
            </div>
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <Target className="w-7 h-7" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-purple-100">
            <ArrowUp className="w-4 h-4" />
            <span>{keyMetrics.audits.trend}% from last period</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold">{keyMetrics.documents.generated}</div>
              <div className="text-orange-100 text-sm font-semibold mt-1">Documents</div>
            </div>
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <FileText className="w-7 h-7" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-orange-100">
            <ArrowUp className="w-4 h-4" />
            <span>{keyMetrics.documents.trend}% from last period</span>
          </div>
        </div>
      </div>

      {/* Compliance Trends Chart */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Compliance Trends (Last 6 Months)
          </h4>
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none font-semibold text-sm"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
        </div>

        {/* Simple Bar Chart */}
        <div className="space-y-3">
          {complianceTrends.map(trend => (
            <div key={trend.month} className="flex items-center gap-4">
              <div className="w-12 text-sm font-semibold text-slate-600">{trend.month}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-8 bg-slate-100 rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-end pr-3"
                      style={{ width: `${trend.score}%` }}
                    >
                      <span className="text-xs font-bold text-white">{trend.score}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-blue-600" />
            Compliance by Category
          </h4>
          <div className="space-y-3">
            {keyMetrics.compliance.byCategory.map(cat => (
              <div key={cat.category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-700">{cat.category}</span>
                  <span className="text-sm font-bold text-green-700">{cat.compliance}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      cat.compliance >= 95 ? 'bg-green-600' :
                      cat.compliance >= 85 ? 'bg-blue-600' :
                      'bg-orange-500'
                    }`}
                    style={{ width: `${cat.compliance}%` }}
                  ></div>
                </div>
                <div className="text-xs text-slate-500 mt-1">{cat.sections} sections</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <BarChart className="w-5 h-5 text-purple-600" />
            Training Progress
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-900">{keyMetrics.training.enrolled}</div>
                <div className="text-xs font-semibold text-blue-700">Enrolled</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-900">{keyMetrics.training.completed}</div>
                <div className="text-xs font-semibold text-green-700">Completed</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-900">{keyMetrics.training.inProgress}</div>
                <div className="text-xs font-semibold text-purple-700">In Progress</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-orange-900">{keyMetrics.training.pending}</div>
                <div className="text-xs font-semibold text-orange-700">Pending</div>
              </div>
            </div>

            <div className="space-y-2">
              {keyMetrics.training.byCategory.map(cat => (
                <div key={cat.category}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-700">{cat.category}</span>
                    <span className="text-xs font-bold text-blue-700">{cat.completion}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600"
                      style={{ width: `${cat.completion}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <h5 className="text-sm font-bold text-slate-600 mb-3">Audit Summary</h5>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Completed</span>
              <span className="font-bold text-green-700">{keyMetrics.audits.completed}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">In Progress</span>
              <span className="font-bold text-blue-700">{keyMetrics.audits.inProgress}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Scheduled</span>
              <span className="font-bold text-purple-700">{keyMetrics.audits.scheduled}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Overdue</span>
              <span className="font-bold text-red-700">{keyMetrics.audits.overdue}</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <h5 className="text-sm font-bold text-slate-600 mb-3">Findings Status</h5>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Total</span>
              <span className="font-bold text-slate-900">{keyMetrics.audits.findings.total}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Open</span>
              <span className="font-bold text-red-700">{keyMetrics.audits.findings.open}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">In Progress</span>
              <span className="font-bold text-blue-700">{keyMetrics.audits.findings.inProgress}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Resolved</span>
              <span className="font-bold text-green-700">{keyMetrics.audits.findings.resolved}</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <h5 className="text-sm font-bold text-slate-600 mb-3">Employee Stats</h5>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Total</span>
              <span className="font-bold text-slate-900">{keyMetrics.employees.total}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">New Hires</span>
              <span className="font-bold text-green-700">{keyMetrics.employees.newHires}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">In Training</span>
              <span className="font-bold text-blue-700">{keyMetrics.employees.activeTraining}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Certifications</span>
              <span className="font-bold text-purple-700">{keyMetrics.employees.certifications}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Documents */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Most Generated Documents</h4>
        <div className="grid grid-cols-3 gap-4">
          {keyMetrics.documents.popular.map(doc => (
            <div key={doc.name} className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="font-bold text-slate-900 mb-1">{doc.name}</div>
              <div className="text-2xl font-bold text-orange-700">{doc.count}</div>
              <div className="text-xs text-slate-600">times generated</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
          <div className="text-3xl font-bold text-blue-900">{reportTemplates.length}</div>
          <div className="text-sm font-semibold text-blue-700">Report Templates</div>
        </div>
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
          <div className="text-3xl font-bold text-green-900">{reportTemplates.filter(r => r.popular).length}</div>
          <div className="text-sm font-semibold text-green-700">Popular Reports</div>
        </div>
        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5">
          <div className="text-3xl font-bold text-purple-900">{scheduledReports.length}</div>
          <div className="text-sm font-semibold text-purple-700">Scheduled</div>
        </div>
        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5">
          <div className="text-3xl font-bold text-orange-900">87</div>
          <div className="text-sm font-semibold text-orange-700">This Month</div>
        </div>
      </div>

      {/* Report Templates */}
      <div className="grid grid-cols-2 gap-4">
        {reportTemplates.map(report => (
          <div
            key={report.id}
            className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-red-400 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-slate-600">{report.id}</span>
                  <h5 className="font-bold text-slate-900">{report.name}</h5>
                  {report.popular && (
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-700" />
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-600">
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded font-semibold">{report.category}</span>
                  <span>{report.frequency}</span>
                  <span>{report.pages} pages</span>
                  <span>{report.format}</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-slate-500 mb-3">Last generated: {report.lastGenerated}</div>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                Generate
              </button>
              <button className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-semibold text-sm">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderScheduled = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold text-slate-900">Scheduled Reports</h4>
        <button className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-bold flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Schedule New Report
        </button>
      </div>

      <div className="space-y-3">
        {scheduledReports.map(schedule => (
          <div key={schedule.id} className="bg-white border-2 border-slate-200 rounded-xl p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-sm font-bold text-slate-600">{schedule.id}</span>
                  <h5 className="text-lg font-bold text-slate-900">{schedule.report}</h5>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    schedule.active 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {schedule.active ? 'ACTIVE' : 'PAUSED'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                  <div>
                    <div className="text-xs text-slate-600 mb-1">Frequency</div>
                    <div className="font-semibold text-slate-900 flex items-center gap-1">
                      <RefreshCw className="w-4 h-4" />
                      {schedule.frequency}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 mb-1">Next Run</div>
                    <div className="font-semibold text-blue-700 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {schedule.nextRun}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 mb-1">Recipients</div>
                    <div className="font-semibold text-slate-900 flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {schedule.recipients.length} emails
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-600">
                  Recipients: {schedule.recipients.join(', ')}
                </div>
              </div>

              <div className="flex gap-2 ml-4">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Reporting Dashboard</h2>
                  <p className="text-red-100">Comprehensive analytics and insights</p>
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
                        ? 'bg-white text-red-700 shadow-lg'
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
            {activeView === 'overview' && renderOverview()}
            {activeView === 'analytics' && (
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Advanced Analytics</p>
                <p className="text-sm text-slate-500 mt-1">Building detailed analytics dashboards...</p>
              </div>
            )}
            {activeView === 'reports' && renderReports()}
            {activeView === 'custom' && (
              <div className="text-center py-12">
                <Plus className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Custom Report Builder</p>
                <p className="text-sm text-slate-500 mt-1">Building custom report creator...</p>
              </div>
            )}
            {activeView === 'scheduled' && renderScheduled()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportingDashboard;
