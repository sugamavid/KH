import React, { useState, useMemo } from 'react';
import { 
  BarChart3, TrendingUp, Users, Clock, DollarSign, Award, FileText, Download, Calendar,
  Search, Filter, Shield, BookOpen, AlertCircle, Activity, Target, Zap, RefreshCw,
  Eye, Edit, Trash2, Plus, Settings, Mail, Send, FileSpreadsheet, File, Printer,
  Share2, Star, ArrowRight, ChevronDown, ChevronRight, PieChart, X
} from 'lucide-react';

const ReportsAnalytics = () => {
  const [activeView, setActiveView] = useState('templates');
  const [selectedReport, setSelectedReport] = useState(null);
  const [showReportBuilder, setShowReportBuilder] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [reportConfig, setReportConfig] = useState({
    type: '',
    title: '',
    dateRange: 'last_month',
    departments: [],
    sections: [],
    format: 'pdf',
    includeCharts: true,
    includeRecommendations: true
  });

  // Comprehensive Report Templates
  const reportTemplates = [
    {
      id: 'RPT-001',
      title: 'Comprehensive Compliance Report',
      category: 'Compliance',
      icon: Shield,
      color: 'green',
      description: 'Complete overview of compliance status across all By-Laws sections',
      frequency: 'Monthly',
      lastGenerated: '2024-02-15',
      sections: ['section3', 'section14', 'section15', 'section22', 'section29'],
      metrics: ['Compliance Score', 'Violations', 'Remediation Status', 'Audit Findings'],
      popularity: 5,
      estimatedTime: '5 minutes',
      pageCount: '12-15 pages'
    },
    {
      id: 'RPT-002',
      title: 'Training Completion Summary',
      category: 'Training',
      icon: BookOpen,
      color: 'blue',
      description: 'Detailed analysis of training program completion rates and certifications',
      frequency: 'Quarterly',
      lastGenerated: '2024-02-10',
      sections: ['section9'],
      metrics: ['Completion Rate', 'Certifications Earned', 'Pending Training', 'Overdue Training'],
      popularity: 4,
      estimatedTime: '3 minutes',
      pageCount: '8-10 pages'
    },
    {
      id: 'RPT-003',
      title: 'Risk Assessment Dashboard',
      category: 'Risk Management',
      icon: AlertCircle,
      color: 'orange',
      description: 'Comprehensive risk analysis with severity ratings and mitigation tracking',
      frequency: 'Monthly',
      lastGenerated: '2024-02-18',
      sections: ['section13', 'section14', 'section15', 'section17', 'section18'],
      metrics: ['Critical Risks', 'Risk Score', 'Mitigation Progress', 'Open Issues'],
      popularity: 5,
      estimatedTime: '7 minutes',
      pageCount: '15-18 pages'
    },
    {
      id: 'RPT-004',
      title: 'Attendance & Leave Analysis',
      category: 'HR Operations',
      icon: Calendar,
      color: 'purple',
      description: 'Staff attendance patterns, leave utilization, and absence trends',
      frequency: 'Monthly',
      lastGenerated: '2024-02-12',
      sections: ['section7'],
      metrics: ['Attendance Rate', 'Leave Utilization', 'Unauthorized Absences', 'Overtime Hours'],
      popularity: 4,
      estimatedTime: '4 minutes',
      pageCount: '10-12 pages'
    },
    {
      id: 'RPT-005',
      title: 'Performance Management Review',
      category: 'Performance',
      icon: TrendingUp,
      color: 'indigo',
      description: 'Employee performance evaluations, KPIs, and development progress',
      frequency: 'Quarterly',
      lastGenerated: '2024-01-28',
      sections: ['section8'],
      metrics: ['Performance Score', 'KPI Achievement', 'Development Plans', 'Promotion Readiness'],
      popularity: 4,
      estimatedTime: '6 minutes',
      pageCount: '14-16 pages'
    },
    {
      id: 'RPT-006',
      title: 'Audit Findings & Recommendations',
      category: 'Audit',
      icon: Target,
      color: 'red',
      description: 'Summary of audit findings, non-conformances, and corrective actions',
      frequency: 'Quarterly',
      lastGenerated: '2024-02-05',
      sections: ['section22'],
      metrics: ['Total Findings', 'Critical Issues', 'Actions Completed', 'Pending Actions'],
      popularity: 3,
      estimatedTime: '5 minutes',
      pageCount: '12-14 pages'
    },
    {
      id: 'RPT-007',
      title: 'Employee Wellness Report',
      category: 'Wellness',
      icon: Activity,
      color: 'pink',
      description: 'Wellness program participation, EAP utilization, and health metrics',
      frequency: 'Monthly',
      lastGenerated: '2024-02-14',
      sections: ['section20', 'section24', 'section27'],
      metrics: ['Program Participation', 'EAP Usage', 'Wellness Score', 'Satisfaction Rate'],
      popularity: 3,
      estimatedTime: '4 minutes',
      pageCount: '8-10 pages'
    },
    {
      id: 'RPT-008',
      title: 'Grievance Resolution Tracker',
      category: 'Employee Relations',
      icon: Users,
      color: 'yellow',
      description: 'Grievance cases, resolution timelines, and outcome analysis',
      frequency: 'Monthly',
      lastGenerated: '2024-02-11',
      sections: ['section12'],
      metrics: ['Open Cases', 'Resolution Time', 'Outcome Types', 'Recurring Issues'],
      popularity: 3,
      estimatedTime: '3 minutes',
      pageCount: '6-8 pages'
    },
    {
      id: 'RPT-009',
      title: 'DEI Progress Dashboard',
      category: 'Diversity',
      icon: Award,
      color: 'teal',
      description: 'Diversity metrics, inclusion initiatives, and equity assessments',
      frequency: 'Quarterly',
      lastGenerated: '2024-01-30',
      sections: ['section5'],
      metrics: ['Diversity Index', 'Hiring Diversity', 'Inclusion Score', 'Pay Equity'],
      popularity: 4,
      estimatedTime: '5 minutes',
      pageCount: '10-12 pages'
    },
    {
      id: 'RPT-010',
      title: 'Policy Review Status',
      category: 'Policy Management',
      icon: FileText,
      color: 'cyan',
      description: 'Policy update status, review schedules, and version control',
      frequency: 'Monthly',
      lastGenerated: '2024-02-16',
      sections: ['preamble', 'section1', 'section2', 'section3', 'section4', 'section5'],
      metrics: ['Policies Reviewed', 'Pending Reviews', 'Updates Required', 'Version Status'],
      popularity: 3,
      estimatedTime: '4 minutes',
      pageCount: '8-10 pages'
    },
    {
      id: 'RPT-011',
      title: 'Workplace Safety Metrics',
      category: 'Safety',
      icon: Shield,
      color: 'orange',
      description: 'Incident reports, safety training, and hazard assessments',
      frequency: 'Monthly',
      lastGenerated: '2024-02-13',
      sections: ['section13'],
      metrics: ['Incident Count', 'Safety Score', 'Training Completion', 'Near Misses'],
      popularity: 4,
      estimatedTime: '5 minutes',
      pageCount: '10-12 pages'
    },
    {
      id: 'RPT-012',
      title: 'Executive Summary - All Areas',
      category: 'Executive',
      icon: BarChart3,
      color: 'slate',
      description: 'High-level overview of all HR metrics and key performance indicators',
      frequency: 'Monthly',
      lastGenerated: '2024-02-17',
      sections: ['preamble', 'section1', 'section3', 'section7', 'section8', 'section9'],
      metrics: ['Overall Health', 'Key Risks', 'Achievements', 'Priorities'],
      popularity: 5,
      estimatedTime: '8 minutes',
      pageCount: '18-20 pages'
    }
  ];

  // Report History
  const reportHistory = [
    {
      id: 'HIST-001',
      reportId: 'RPT-001',
      title: 'Comprehensive Compliance Report',
      generatedDate: '2024-02-15',
      generatedBy: 'Admin User',
      format: 'PDF',
      size: '2.4 MB',
      status: 'completed',
      downloads: 12
    },
    {
      id: 'HIST-002',
      reportId: 'RPT-012',
      title: 'Executive Summary - All Areas',
      generatedDate: '2024-02-17',
      generatedBy: 'HR Director',
      format: 'PDF',
      size: '3.1 MB',
      status: 'completed',
      downloads: 8
    },
    {
      id: 'HIST-003',
      reportId: 'RPT-003',
      title: 'Risk Assessment Dashboard',
      generatedDate: '2024-02-18',
      generatedBy: 'Compliance Officer',
      format: 'Excel',
      size: '1.8 MB',
      status: 'completed',
      downloads: 15
    },
    {
      id: 'HIST-004',
      reportId: 'RPT-002',
      title: 'Training Completion Summary',
      generatedDate: '2024-02-10',
      generatedBy: 'Training Coordinator',
      format: 'PDF',
      size: '1.5 MB',
      status: 'completed',
      downloads: 20
    },
    {
      id: 'HIST-005',
      reportId: 'RPT-009',
      title: 'DEI Progress Dashboard',
      generatedDate: '2024-01-30',
      generatedBy: 'DEI Coordinator',
      format: 'PDF',
      size: '2.0 MB',
      status: 'completed',
      downloads: 6
    }
  ];

  const categories = [
    { id: 'all', name: 'All Reports', count: reportTemplates.length },
    { id: 'Compliance', name: 'Compliance', count: reportTemplates.filter(r => r.category === 'Compliance').length },
    { id: 'Training', name: 'Training', count: reportTemplates.filter(r => r.category === 'Training').length },
    { id: 'Risk Management', name: 'Risk Management', count: reportTemplates.filter(r => r.category === 'Risk Management').length },
    { id: 'HR Operations', name: 'HR Operations', count: reportTemplates.filter(r => r.category === 'HR Operations').length },
    { id: 'Performance', name: 'Performance', count: reportTemplates.filter(r => r.category === 'Performance').length },
    { id: 'Audit', name: 'Audit', count: reportTemplates.filter(r => r.category === 'Audit').length }
  ];

  const views = [
    { id: 'templates', name: 'Report Templates', icon: FileText },
    { id: 'history', name: 'Report History', icon: Clock },
    { id: 'scheduled', name: 'Scheduled Reports', icon: Calendar },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 }
  ];

  const stats = {
    totalReports: reportHistory.length,
    thisMonth: reportHistory.filter(r => r.generatedDate.startsWith('2024-02')).length,
    totalDownloads: reportHistory.reduce((sum, r) => sum + r.downloads, 0),
    avgGenerationTime: '5 mins'
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Reports & Analytics</h1>
          <p className="text-slate-600 mt-1">Comprehensive HR metrics and insights</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
          >
            <option value="weekly">This Week</option>
            <option value="monthly">This Month</option>
            <option value="quarterly">This Quarter</option>
            <option value="yearly">This Year</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center shadow-lg">
            <Download className="w-5 h-5 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Report Type Selector */}
      <div className="bg-white rounded-xl p-4 border-2 border-slate-200 shadow-sm">
        <div className="flex space-x-2 overflow-x-auto">
          {reportTypes.map((report) => (
            <button
              key={report.id}
              onClick={() => setSelectedReport(report.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                selectedReport === report.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <report.icon className="w-5 h-5 mr-2" />
              {report.label}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-1">{totalEmployees}</h3>
          <p className="text-sm text-slate-600 mb-2">Total Employees</p>
          <p className="text-xs text-green-600 font-semibold">+2 from last month</p>
        </div>

        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-1">92%</h3>
          <p className="text-sm text-slate-600 mb-2">Attendance Rate</p>
          <p className="text-xs text-green-600 font-semibold">+3% from last month</p>
        </div>

        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-1">₹{(totalPayroll / 100000).toFixed(1)}L</h3>
          <p className="text-sm text-slate-600 mb-2">Monthly Payroll</p>
          <p className="text-xs text-slate-500">Avg: ₹{(totalPayroll / totalEmployees / 1000).toFixed(0)}K/emp</p>
        </div>

        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-1">{avgPerformance}</h3>
          <p className="text-sm text-slate-600 mb-2">Avg Performance</p>
          <p className="text-xs text-green-600 font-semibold">Excellent rating</p>
        </div>

        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center">
              <FileText className="w-6 h-6 text-teal-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-1">{trainingCompletion}%</h3>
          <p className="text-sm text-slate-600 mb-2">Training Completion</p>
          <p className="text-xs text-slate-500">{DEMO_TRAINING_PROGRAMS.filter(t => t.status === 'Completed').length} programs done</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Distribution */}
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Department Distribution</h2>
          <div className="space-y-4">
            {Object.entries(departmentStats)
              .sort((a, b) => b[1] - a[1])
              .map(([dept, count], idx) => (
                <div key={dept}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">{dept}</span>
                    <span className="text-sm font-bold text-slate-900">{count} ({((count / totalEmployees) * 100).toFixed(0)}%)</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all ${
                        idx === 0 ? 'bg-blue-600' :
                        idx === 1 ? 'bg-green-600' :
                        idx === 2 ? 'bg-purple-600' :
                        idx === 3 ? 'bg-orange-600' :
                        'bg-slate-600'
                      }`}
                      style={{ width: `${(count / totalEmployees) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Leave Statistics */}
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Leave Statistics</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <p className="text-sm font-semibold text-slate-700">Approved Leaves</p>
                <p className="text-2xl font-bold text-green-600">{DEMO_LEAVE_APPLICATIONS.filter(l => l.status === 'Approved').length}</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <div>
                <p className="text-sm font-semibold text-slate-700">Pending Requests</p>
                <p className="text-2xl font-bold text-orange-600">{DEMO_LEAVE_APPLICATIONS.filter(l => l.status === 'Pending').length}</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <p className="text-sm font-semibold text-slate-700">Total Applications</p>
                <p className="text-2xl font-bold text-blue-600">{DEMO_LEAVE_APPLICATIONS.length}</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Performance Reviews */}
      <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Recent Performance Reviews</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Employee</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Period</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Overall Rating</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">KPI Score</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Review Date</th>
              </tr>
            </thead>
            <tbody>
              {DEMO_PERFORMANCE_REVIEWS.map((review, idx) => (
                <tr key={review.id} className={`border-b border-slate-100 ${idx % 2 === 0 ? 'bg-slate-50' : ''}`}>
                  <td className="py-3 px-4 font-medium text-slate-900">{review.employeeName}</td>
                  <td className="py-3 px-4 text-slate-600">{review.reviewPeriod}</td>
                  <td className="py-3 px-4">
                    <span className={`font-bold ${
                      review.overallRating >= 4.5 ? 'text-green-600' :
                      review.overallRating >= 4.0 ? 'text-blue-600' :
                      review.overallRating ? 'text-orange-600' : 'text-slate-400'
                    }`}>
                      {review.overallRating ? `${review.overallRating}/5.0` : 'N/A'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`font-bold ${
                      review.kpiScore >= 90 ? 'text-green-600' :
                      review.kpiScore >= 80 ? 'text-blue-600' :
                      review.kpiScore ? 'text-orange-600' : 'text-slate-400'
                    }`}>
                      {review.kpiScore ? `${review.kpiScore}%` : 'N/A'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      review.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {review.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">{review.reviewDate || 'Not reviewed'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Export Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white text-slate-700 px-6 py-4 rounded-lg hover:bg-slate-50 transition-colors font-semibold border-2 border-slate-200 flex items-center justify-center">
            <FileText className="w-5 h-5 mr-2" />
            Export as PDF
          </button>
          <button className="bg-white text-slate-700 px-6 py-4 rounded-lg hover:bg-slate-50 transition-colors font-semibold border-2 border-slate-200 flex items-center justify-center">
            <FileText className="w-5 h-5 mr-2" />
            Export as Excel
          </button>
          <button className="bg-white text-slate-700 px-6 py-4 rounded-lg hover:bg-slate-50 transition-colors font-semibold border-2 border-slate-200 flex items-center justify-center">
            <FileText className="w-5 h-5 mr-2" />
            Export as CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;