import React, { useState, useMemo } from 'react';
import { 
  X, Search, Filter, FileText, Download, Calendar, Clock, Users,
  TrendingUp, CheckCircle, AlertCircle, BarChart, PieChart, Activity,
  Shield, BookOpen, Award, Target, Zap, RefreshCw, ChevronRight,
  Eye, Edit, Trash2, Plus, Settings, Mail, Send, FileSpreadsheet,
  FilePdf, File, Printer, Share2, Star, ArrowRight, ChevronDown
} from 'lucide-react';

const ReportGenerator = ({ onClose, onNavigateToSection }) => {
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

  // Report Templates
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
      icon: BarChart,
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
    { id: 'analytics', name: 'Analytics', icon: BarChart }
  ];

  const stats = {
    totalReports: reportHistory.length,
    thisMonth: reportHistory.filter(r => r.generatedDate.startsWith('2024-02')).length,
    totalDownloads: reportHistory.reduce((sum, r) => sum + r.downloads, 0),
    avgGenerationTime: '5 mins'
  };

  // Filter reports
  const filteredReports = useMemo(() => {
    let filtered = reportTemplates;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(r =>
        r.title.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query) ||
        r.category.toLowerCase().includes(query)
      );
    }

    return filtered.sort((a, b) => b.popularity - a.popularity);
  }, [searchQuery, selectedCategory]);

  const handleGenerateReport = (report) => {
    setSelectedReport(report);
    setReportConfig({
      ...reportConfig,
      type: report.id,
      title: report.title
    });
    setShowReportBuilder(true);
  };

  const handleViewSection = (sectionId) => {
    onNavigateToSection(sectionId);
    onClose();
  };

  const renderReportCard = (report) => {
    const ReportIcon = report.icon;
    
    return (
      <div
        key={report.id}
        className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-green-400 hover:shadow-lg transition-all group"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3 flex-1">
            <div className={`p-3 bg-${report.color}-100 rounded-xl group-hover:bg-green-100 transition-colors`}>
              <ReportIcon className={`w-6 h-6 text-${report.color}-600 group-hover:text-green-600 transition-colors`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                  {report.title}
                </h4>
                <div className="flex items-center gap-1">
                  {[...Array(report.popularity)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-3 line-clamp-2">{report.description}</p>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className={`px-2 py-1 rounded bg-${report.color}-100 text-${report.color}-700 font-semibold`}>
                  {report.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {report.frequency}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {report.estimatedTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-4 bg-slate-50 rounded-lg p-3">
          <div className="text-xs font-semibold text-slate-600 mb-2">Key Metrics</div>
          <div className="flex flex-wrap gap-1">
            {report.metrics.slice(0, 4).map((metric, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-white rounded border border-slate-200 text-slate-700">
                {metric}
              </span>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
          <div className="bg-blue-50 rounded p-2">
            <div className="text-blue-600 mb-1">Last Generated</div>
            <div className="font-semibold text-blue-900">{new Date(report.lastGenerated).toLocaleDateString()}</div>
          </div>
          <div className="bg-green-50 rounded p-2">
            <div className="text-green-600 mb-1">Page Count</div>
            <div className="font-semibold text-green-900">{report.pageCount}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => handleGenerateReport(report)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
          >
            <Zap className="w-4 h-4" />
            Generate Report
          </button>
          <button className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
            <Eye className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>
    );
  };

  const renderReportBuilder = () => {
    if (!showReportBuilder || !selectedReport) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Generate Report</h3>
                  <p className="text-green-100 text-sm">{selectedReport.title}</p>
                </div>
              </div>
              <button
                onClick={() => setShowReportBuilder(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-160px)]">
            {/* Date Range */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Date Range</label>
              <select 
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none"
                value={reportConfig.dateRange}
                onChange={(e) => setReportConfig({...reportConfig, dateRange: e.target.value})}
              >
                <option value="last_week">Last Week</option>
                <option value="last_month">Last Month</option>
                <option value="last_quarter">Last Quarter</option>
                <option value="last_year">Last Year</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>

            {/* Output Format */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Output Format</label>
              <div className="grid grid-cols-3 gap-3">
                {['pdf', 'excel', 'csv'].map((format) => (
                  <button
                    key={format}
                    onClick={() => setReportConfig({...reportConfig, format})}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                      reportConfig.format === format
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {format === 'pdf' && <FilePdf className="w-5 h-5" />}
                    {format === 'excel' && <FileSpreadsheet className="w-5 h-5" />}
                    {format === 'csv' && <File className="w-5 h-5" />}
                    <span className="font-semibold uppercase">{format}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-3">Report Options</label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={reportConfig.includeCharts}
                    onChange={(e) => setReportConfig({...reportConfig, includeCharts: e.target.checked})}
                    className="w-5 h-5 text-green-600 rounded"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">Include Charts & Graphs</div>
                    <div className="text-xs text-slate-600">Visual data representation</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={reportConfig.includeRecommendations}
                    onChange={(e) => setReportConfig({...reportConfig, includeRecommendations: e.target.checked})}
                    className="w-5 h-5 text-green-600 rounded"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">Include Recommendations</div>
                    <div className="text-xs text-slate-600">AI-powered insights and suggestions</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Related Sections */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Related By-Laws Sections ({selectedReport.sections.length})
              </label>
              <div className="flex flex-wrap gap-2">
                {selectedReport.sections.map((sectionId) => (
                  <button
                    key={sectionId}
                    onClick={() => handleViewSection(sectionId)}
                    className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-200 transition-colors flex items-center gap-1"
                  >
                    {sectionId.replace('section', 'Sec ')}
                    <ChevronRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>

            {/* Generation Info */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-2 text-green-900 font-semibold mb-2">
                <Clock className="w-4 h-4" />
                Estimated Generation Time
              </div>
              <div className="text-2xl font-bold text-green-700">{selectedReport.estimatedTime}</div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 flex gap-3">
            <button
              onClick={() => setShowReportBuilder(false)}
              className="flex-1 px-4 py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
              <Download className="w-5 h-5" />
              Generate & Download
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderHistory = () => (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-slate-600">
          Showing {reportHistory.length} reports
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm font-semibold border border-slate-200">
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase">Report</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase">Generated</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase">By</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase">Format</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase">Size</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase">Downloads</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {reportHistory.map((report) => (
              <tr key={report.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-semibold text-slate-900">{report.title}</div>
                  <div className="text-xs text-slate-500">{report.reportId}</div>
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {new Date(report.generatedDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">{report.generatedBy}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                    {report.format}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">{report.size}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 text-sm text-slate-600">
                    <Download className="w-4 h-4" />
                    {report.downloads}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-green-100 rounded transition-colors">
                      <Download className="w-4 h-4 text-green-600" />
                    </button>
                    <button className="p-1.5 hover:bg-blue-100 rounded transition-colors">
                      <Eye className="w-4 h-4 text-blue-600" />
                    </button>
                    <button className="p-1.5 hover:bg-slate-100 rounded transition-colors">
                      <Share2 className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Report Generator
                  </h2>
                  <p className="text-green-100">Comprehensive analytics and reporting suite</p>
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
            <div className="grid grid-cols-4 gap-3 mb-4">
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.totalReports}</div>
                <div className="text-xs text-green-100">Total Reports</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.thisMonth}</div>
                <div className="text-xs text-green-100">This Month</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.totalDownloads}</div>
                <div className="text-xs text-green-100">Downloads</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.avgGenerationTime}</div>
                <div className="text-xs text-green-100">Avg Time</div>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600" />
              <input
                type="text"
                placeholder="Search reports by title, category, or description..."
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

          {/* Filters - Only for templates view */}
          {activeView === 'templates' && (
            <div className="px-8 py-4 bg-slate-50 border-b border-slate-200">
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
            {activeView === 'templates' && (
              <>
                <div className="mb-4 text-sm text-slate-600">
                  Showing {filteredReports.length} of {reportTemplates.length} report templates
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredReports.map(renderReportCard)}
                </div>
                {filteredReports.length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">No reports found</p>
                    <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filters</p>
                  </div>
                )}
              </>
            )}

            {activeView === 'history' && renderHistory()}

            {activeView === 'scheduled' && (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">No scheduled reports</p>
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  Schedule a Report
                </button>
              </div>
            )}

            {activeView === 'analytics' && (
              <div className="text-center py-12">
                <BarChart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Analytics Dashboard</p>
                <p className="text-sm text-slate-500 mt-1">Coming soon</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Report Builder Modal */}
      {renderReportBuilder()}
    </>
  );
};

export default ReportGenerator;
