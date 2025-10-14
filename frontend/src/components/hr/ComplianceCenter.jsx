import React, { useState } from 'react';
import { 
  X, Scale, CheckCircle, AlertTriangle, XCircle, TrendingUp, Calendar,
  Shield, FileText, Users, Activity, Lock, BookOpen, AlertCircle,
  Clock, Award, ChevronRight, Filter, Download, RefreshCw, Heart,
  Globe, Monitor, MessageSquare, Home, DollarSign, Search, Target,
  BarChart3, PieChart, List, Grid, Eye, CheckSquare
} from 'lucide-react';

const ComplianceCenter = ({ onClose, onNavigateToSection }) => {
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Compliance data based on By-Laws analysis
  const complianceAreas = [
    {
      id: 'code_conduct',
      name: 'Code of Conduct',
      section: 'section3',
      icon: Shield,
      color: 'red',
      score: 95,
      status: 'compliant',
      requirements: 8,
      completed: 8,
      lastAudit: '2024-01-15',
      nextAudit: '2024-04-15',
      violations: 0,
      criticalItems: [
        'Professional ethics adherence',
        'Confidentiality maintained',
        'Conflict of interest disclosed',
        'Professional appearance standards'
      ]
    },
    {
      id: 'training',
      name: 'Training & Certifications',
      section: 'section9',
      icon: BookOpen,
      color: 'orange',
      score: 82,
      status: 'at_risk',
      requirements: 12,
      completed: 10,
      lastAudit: '2024-01-20',
      nextAudit: '2024-03-20',
      violations: 2,
      criticalItems: [
        'Mandatory training completion - Due: 15 days',
        'CPR certification renewal - 24 staff pending',
        'Fire safety training - 89% complete',
        'HIPAA compliance training - Overdue: 5 staff'
      ]
    },
    {
      id: 'attendance',
      name: 'Attendance & Leave',
      section: 'section7',
      icon: Calendar,
      color: 'blue',
      score: 91,
      status: 'compliant',
      requirements: 10,
      completed: 9,
      lastAudit: '2024-02-01',
      nextAudit: '2024-05-01',
      violations: 1,
      criticalItems: [
        'Leave policy adherence',
        'Attendance tracking accuracy',
        'Leave approval workflow',
        'Unauthorized absence handling'
      ]
    },
    {
      id: 'performance',
      name: 'Performance Management',
      section: 'section8',
      icon: TrendingUp,
      color: 'purple',
      score: 88,
      status: 'compliant',
      requirements: 8,
      completed: 7,
      lastAudit: '2024-01-10',
      nextAudit: '2024-07-10',
      violations: 0,
      criticalItems: [
        'Annual appraisals - 95% complete',
        'Performance improvement plans active: 8',
        'Goal setting documentation',
        'Feedback documentation'
      ]
    },
    {
      id: 'data_protection',
      name: 'Data Protection & Privacy',
      section: 'section15',
      icon: Lock,
      color: 'indigo',
      score: 97,
      status: 'compliant',
      requirements: 9,
      completed: 9,
      lastAudit: '2024-01-25',
      nextAudit: '2024-04-25',
      violations: 0,
      criticalItems: [
        'Patient data confidentiality',
        'Access control compliance',
        'Data breach protocols',
        'Privacy training completion'
      ]
    },
    {
      id: 'health_safety',
      name: 'Health & Safety',
      section: 'section13',
      icon: Shield,
      color: 'red',
      score: 86,
      status: 'at_risk',
      requirements: 11,
      completed: 9,
      lastAudit: '2024-02-05',
      nextAudit: '2024-05-05',
      violations: 2,
      criticalItems: [
        'PPE usage compliance - 86%',
        'Incident reporting - 3 pending',
        'Safety equipment inspection - Due: 10 days',
        'Emergency drill participation'
      ]
    },
    {
      id: 'disciplinary',
      name: 'Disciplinary Actions',
      section: 'section14',
      icon: AlertCircle,
      color: 'orange',
      score: 93,
      status: 'compliant',
      requirements: 7,
      completed: 7,
      lastAudit: '2024-01-18',
      nextAudit: '2024-04-18',
      violations: 0,
      criticalItems: [
        'Fair disciplinary process',
        'Documentation completeness',
        'Appeal mechanism availability',
        'Progressive discipline adherence'
      ]
    },
    {
      id: 'industry_standards',
      name: 'Industry Standards',
      section: 'section29',
      icon: CheckSquare,
      color: 'teal',
      score: 90,
      status: 'compliant',
      requirements: 8,
      completed: 7,
      lastAudit: '2024-01-28',
      nextAudit: '2024-04-28',
      violations: 0,
      criticalItems: [
        'NABH accreditation compliance',
        'ISO standards adherence',
        'Healthcare quality benchmarks',
        'Best practices implementation'
      ]
    },
    {
      id: 'dei',
      name: 'Diversity & Inclusion',
      section: 'section5',
      icon: Heart,
      color: 'pink',
      score: 94,
      status: 'compliant',
      requirements: 6,
      completed: 6,
      lastAudit: '2024-02-10',
      nextAudit: '2024-08-10',
      violations: 0,
      criticalItems: [
        'Non-discrimination policy adherence',
        'Reasonable accommodations provided',
        'Inclusive hiring practices',
        'Cultural sensitivity training'
      ]
    },
    {
      id: 'environment',
      name: 'Environmental Responsibility',
      section: 'section18',
      icon: Globe,
      color: 'green',
      score: 85,
      status: 'at_risk',
      requirements: 7,
      completed: 6,
      lastAudit: '2024-01-22',
      nextAudit: '2024-07-22',
      violations: 1,
      criticalItems: [
        'Waste management compliance',
        'Energy conservation targets - 85% achieved',
        'Sustainability initiatives',
        'Environmental audit pending'
      ]
    }
  ];

  const overallCompliance = {
    score: Math.round(complianceAreas.reduce((sum, area) => sum + area.score, 0) / complianceAreas.length),
    compliant: complianceAreas.filter(a => a.status === 'compliant').length,
    atRisk: complianceAreas.filter(a => a.status === 'at_risk').length,
    nonCompliant: complianceAreas.filter(a => a.status === 'non_compliant').length,
    totalRequirements: complianceAreas.reduce((sum, area) => sum + area.requirements, 0),
    completedRequirements: complianceAreas.reduce((sum, area) => sum + area.completed, 0),
    totalViolations: complianceAreas.reduce((sum, area) => sum + area.violations, 0)
  };

  const upcomingAudits = complianceAreas
    .map(area => ({
      ...area,
      daysUntil: Math.floor((new Date(area.nextAudit) - new Date()) / (1000 * 60 * 60 * 24))
    }))
    .filter(area => area.daysUntil <= 30)
    .sort((a, b) => a.daysUntil - b.daysUntil);

  const recentViolations = complianceAreas
    .filter(area => area.violations > 0)
    .map(area => ({
      area: area.name,
      count: area.violations,
      section: area.section,
      icon: area.icon,
      color: area.color
    }));

  const views = [
    { id: 'dashboard', name: 'Dashboard', icon: Grid },
    { id: 'checklist', name: 'Checklist', icon: List },
    { id: 'requirements', name: 'Requirements', icon: FileText },
    { id: 'audits', name: 'Audits', icon: Calendar }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'compliant': return 'green';
      case 'at_risk': return 'orange';
      case 'non_compliant': return 'red';
      default: return 'slate';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'compliant': return CheckCircle;
      case 'at_risk': return AlertTriangle;
      case 'non_compliant': return XCircle;
      default: return AlertCircle;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'compliant': return 'Compliant';
      case 'at_risk': return 'At Risk';
      case 'non_compliant': return 'Non-Compliant';
      default: return status;
    }
  };

  const handleSectionClick = (sectionId) => {
    onNavigateToSection(sectionId);
    onClose();
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Overall Metrics */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-600 rounded-xl">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-4xl font-bold text-green-900">{overallCompliance.score}%</span>
          </div>
          <div className="text-green-800 font-semibold">Overall Compliance</div>
          <div className="text-green-600 text-sm mt-1">Across all areas</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-600 rounded-xl">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-4xl font-bold text-blue-900">{overallCompliance.compliant}</span>
          </div>
          <div className="text-blue-800 font-semibold">Compliant Areas</div>
          <div className="text-blue-600 text-sm mt-1">Meeting standards</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-600 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <span className="text-4xl font-bold text-orange-900">{overallCompliance.atRisk}</span>
          </div>
          <div className="text-orange-800 font-semibold">At Risk</div>
          <div className="text-orange-600 text-sm mt-1">Needs attention</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-600 rounded-xl">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-4xl font-bold text-purple-900">{overallCompliance.totalViolations}</span>
          </div>
          <div className="text-purple-800 font-semibold">Total Violations</div>
          <div className="text-purple-600 text-sm mt-1">Requires action</div>
        </div>
      </div>

      {/* Compliance Areas Grid */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">Compliance by Area</h3>
        <div className="grid grid-cols-2 gap-4">
          {complianceAreas.map((area) => {
            const AreaIcon = area.icon;
            const StatusIcon = getStatusIcon(area.status);
            const statusColor = getStatusColor(area.status);

            return (
              <div
                key={area.id}
                className="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-green-400 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleSectionClick(area.section)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 bg-${area.color}-100 rounded-lg`}>
                      <AreaIcon className={`w-5 h-5 text-${area.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">{area.name}</h4>
                      <div className="flex items-center gap-2">
                        <div className={`w-16 h-2 rounded-full bg-slate-200 overflow-hidden`}>
                          <div 
                            className={`h-full bg-${statusColor}-600`}
                            style={{ width: `${area.score}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-slate-700">{area.score}%</span>
                      </div>
                    </div>
                  </div>
                  <StatusIcon className={`w-5 h-5 text-${statusColor}-600 flex-shrink-0`} />
                </div>
                
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-slate-600">
                    {area.completed}/{area.requirements} Requirements
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold bg-${statusColor}-100 text-${statusColor}-700`}>
                    {getStatusLabel(area.status)}
                  </span>
                </div>

                <div className="text-xs text-slate-500 space-y-1">
                  <div>Last Audit: {new Date(area.lastAudit).toLocaleDateString()}</div>
                  <div>Next Audit: {new Date(area.nextAudit).toLocaleDateString()}</div>
                  {area.violations > 0 && (
                    <div className="text-red-600 font-semibold">
                      {area.violations} Violation{area.violations > 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Audits */}
      {upcomingAudits.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Upcoming Audits (Next 30 Days)</h3>
          <div className="space-y-2">
            {upcomingAudits.map((audit) => {
              const AuditIcon = audit.icon;
              return (
                <div
                  key={audit.id}
                  className="bg-white rounded-lg p-4 border-2 border-slate-200 hover:border-blue-400 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 bg-${audit.color}-100 rounded-lg`}>
                      <AuditIcon className={`w-5 h-5 text-${audit.color}-600`} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{audit.name}</div>
                      <div className="text-sm text-slate-600">
                        Next audit: {new Date(audit.nextAudit).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-lg font-bold ${
                    audit.daysUntil <= 7 
                      ? 'bg-red-100 text-red-700' 
                      : audit.daysUntil <= 14 
                      ? 'bg-orange-100 text-orange-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {audit.daysUntil} Days
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Recent Violations */}
      {recentViolations.length > 0 && (
        <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
          <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Areas with Violations
          </h3>
          <div className="space-y-2">
            {recentViolations.map((violation, index) => {
              const ViolationIcon = violation.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-red-200 flex items-center justify-between cursor-pointer hover:shadow-md transition-all"
                  onClick={() => handleSectionClick(violation.section)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-${violation.color}-100 rounded-lg`}>
                      <ViolationIcon className={`w-5 h-5 text-${violation.color}-600`} />
                    </div>
                    <span className="font-semibold text-slate-900">{violation.area}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold">
                      {violation.count} Violation{violation.count > 1 ? 's' : ''}
                    </span>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  const renderChecklist = () => (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-green-900 mb-2">Compliance Checklist</h3>
            <p className="text-green-700">
              {overallCompliance.completedRequirements} of {overallCompliance.totalRequirements} requirements completed
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-green-900">{overallCompliance.score}%</div>
            <div className="text-green-700 text-sm">Complete</div>
          </div>
        </div>
      </div>

      {complianceAreas.map((area) => {
        const AreaIcon = area.icon;
        return (
          <div key={area.id} className="bg-white rounded-xl p-6 border-2 border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 bg-${area.color}-100 rounded-lg`}>
                  <AreaIcon className={`w-6 h-6 text-${area.color}-600`} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{area.name}</h4>
                  <div className="text-sm text-slate-600">
                    {area.completed}/{area.requirements} items completed
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleSectionClick(area.section)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
              >
                View Section
              </button>
            </div>

            <div className="space-y-2">
              {area.criticalItems.map((item, index) => {
                const isCompleted = index < area.completed;
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${
                      isCompleted
                        ? 'bg-green-50 border-green-200'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0 mt-0.5"></div>
                    )}
                    <span className={`flex-1 text-sm ${
                      isCompleted ? 'text-green-900 font-medium' : 'text-slate-700'
                    }`}>
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Compliance Center
                </h2>
                <p className="text-green-100">Real-time compliance monitoring and management</p>
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
          {activeView === 'checklist' && renderChecklist()}
          {activeView === 'requirements' && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Requirements view coming soon</p>
            </div>
          )}
          {activeView === 'audits' && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Audit schedule view coming soon</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-8 py-4 bg-white border-t border-slate-200 flex items-center justify-between">
          <div className="text-sm text-slate-600">
            Last updated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-semibold">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceCenter;
