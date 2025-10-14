import React, { useState, useMemo } from 'react';
import { 
  X, AlertTriangle, Search, Filter, TrendingUp, TrendingDown, Shield,
  AlertCircle, CheckCircle, Clock, Target, BarChart, Activity, FileText,
  Users, Lock, DollarSign, Calendar, Flag, Eye, Download, RefreshCw,
  ChevronRight, XCircle, Minus, ArrowUp, ArrowDown, Zap, Globe
} from 'lucide-react';

const RiskMonitor = ({ onClose, onNavigateToSection }) => {
  const [activeView, setActiveView] = useState('register');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedRisk, setSelectedRisk] = useState(null);

  // Risk data based on By-Laws analysis
  const risks = [
    {
      id: 'RISK-001',
      title: 'HIPAA Compliance Violations',
      category: 'Compliance Risk',
      icon: Lock,
      color: 'red',
      severity: 'critical',
      likelihood: 'medium',
      impact: 'critical',
      status: 'active',
      riskScore: 25,
      identifiedDate: '2024-02-01',
      owner: 'Compliance Officer',
      description: 'Potential data breaches and HIPAA regulation violations due to inadequate access controls',
      consequences: 'Legal penalties, financial losses, reputation damage, patient trust erosion',
      mitigationStatus: 'in_progress',
      mitigationPlan: 'Enhanced access controls, mandatory training, regular audits',
      relatedSection: 'section15',
      lastReview: '2024-02-15',
      trend: 'stable'
    },
    {
      id: 'RISK-002',
      title: 'Workplace Safety Incidents',
      category: 'Safety Risk',
      icon: Shield,
      color: 'orange',
      severity: 'high',
      likelihood: 'high',
      impact: 'high',
      status: 'active',
      riskScore: 20,
      identifiedDate: '2024-01-15',
      owner: 'Safety Officer',
      description: 'Increased workplace accidents and safety protocol non-compliance',
      consequences: 'Employee injuries, operational disruptions, legal liability, insurance costs',
      mitigationStatus: 'planned',
      mitigationPlan: 'Safety training programs, equipment upgrades, protocol enforcement',
      relatedSection: 'section13',
      lastReview: '2024-02-10',
      trend: 'increasing'
    },
    {
      id: 'RISK-003',
      title: 'Code of Conduct Violations',
      category: 'Reputational Risk',
      icon: AlertCircle,
      color: 'red',
      severity: 'high',
      likelihood: 'medium',
      impact: 'high',
      status: 'under_review',
      riskScore: 16,
      identifiedDate: '2024-01-20',
      owner: 'HR Compliance Committee',
      description: 'Employee misconduct and ethical violations affecting organizational reputation',
      consequences: 'Brand damage, patient trust issues, staff morale decline, legal exposure',
      mitigationStatus: 'in_progress',
      mitigationPlan: 'Ethics training, whistleblower mechanism, disciplinary framework',
      relatedSection: 'section3',
      lastReview: '2024-02-12',
      trend: 'decreasing'
    },
    {
      id: 'RISK-004',
      title: 'Cybersecurity Threats',
      category: 'Data Security Risk',
      icon: Lock,
      color: 'purple',
      severity: 'critical',
      likelihood: 'medium',
      impact: 'critical',
      status: 'active',
      riskScore: 24,
      identifiedDate: '2024-01-10',
      owner: 'IT Security Team',
      description: 'Ransomware attacks, data breaches, and unauthorized system access',
      consequences: 'Data loss, system downtime, financial losses, regulatory penalties',
      mitigationStatus: 'in_progress',
      mitigationPlan: 'Security infrastructure upgrade, employee training, incident response plan',
      relatedSection: 'section17',
      lastReview: '2024-02-18',
      trend: 'stable'
    },
    {
      id: 'RISK-005',
      title: 'Training Non-Completion',
      category: 'Operational Risk',
      icon: Users,
      color: 'orange',
      severity: 'medium',
      likelihood: 'high',
      impact: 'medium',
      status: 'active',
      riskScore: 12,
      identifiedDate: '2024-01-25',
      owner: 'Training Coordinator',
      description: 'Staff failing to complete mandatory training programs on time',
      consequences: 'Skill gaps, compliance issues, reduced service quality, audit findings',
      mitigationStatus: 'in_progress',
      mitigationPlan: 'Training scheduling system, automated reminders, performance tracking',
      relatedSection: 'section9',
      lastReview: '2024-02-08',
      trend: 'stable'
    },
    {
      id: 'RISK-006',
      title: 'Attendance Policy Non-Compliance',
      category: 'Operational Risk',
      icon: Calendar,
      color: 'blue',
      severity: 'medium',
      likelihood: 'medium',
      impact: 'medium',
      status: 'mitigated',
      riskScore: 9,
      identifiedDate: '2024-01-05',
      owner: 'HR Manager',
      description: 'Unauthorized absences and leave policy violations',
      consequences: 'Staffing shortages, operational disruptions, payroll inaccuracies',
      mitigationStatus: 'completed',
      mitigationPlan: 'Automated attendance system, clear communication, disciplinary measures',
      relatedSection: 'section7',
      lastReview: '2024-02-05',
      trend: 'decreasing'
    },
    {
      id: 'RISK-007',
      title: 'Performance Management Gaps',
      category: 'Operational Risk',
      icon: TrendingUp,
      color: 'purple',
      severity: 'medium',
      likelihood: 'medium',
      impact: 'medium',
      status: 'active',
      riskScore: 10,
      identifiedDate: '2024-02-01',
      owner: 'HR Director',
      description: 'Inconsistent performance evaluations and feedback processes',
      consequences: 'Employee dissatisfaction, talent retention issues, productivity decline',
      mitigationStatus: 'planned',
      mitigationPlan: 'Standardized evaluation framework, manager training, regular reviews',
      relatedSection: 'section8',
      lastReview: '2024-02-10',
      trend: 'stable'
    },
    {
      id: 'RISK-008',
      title: 'Grievance Resolution Delays',
      category: 'Legal Risk',
      icon: AlertTriangle,
      color: 'red',
      severity: 'high',
      likelihood: 'low',
      impact: 'high',
      status: 'under_review',
      riskScore: 12,
      identifiedDate: '2024-01-18',
      owner: 'Grievance Officer',
      description: 'Delayed or inadequate resolution of employee complaints',
      consequences: 'Legal action, employee relations deterioration, hostile work environment',
      mitigationStatus: 'in_progress',
      mitigationPlan: 'Streamlined process, dedicated resources, timeline enforcement',
      relatedSection: 'section12',
      lastReview: '2024-02-14',
      trend: 'stable'
    },
    {
      id: 'RISK-009',
      title: 'DEI Policy Implementation Gaps',
      category: 'Reputational Risk',
      icon: Users,
      color: 'pink',
      severity: 'medium',
      likelihood: 'low',
      impact: 'medium',
      status: 'active',
      riskScore: 8,
      identifiedDate: '2024-02-05',
      owner: 'DEI Coordinator',
      description: 'Insufficient diversity initiatives and inclusion practices',
      consequences: 'Discrimination claims, talent acquisition challenges, cultural issues',
      mitigationStatus: 'planned',
      mitigationPlan: 'DEI training, inclusive hiring practices, monitoring mechanisms',
      relatedSection: 'section5',
      lastReview: '2024-02-18',
      trend: 'stable'
    },
    {
      id: 'RISK-010',
      title: 'Patient Care Quality Issues',
      category: 'Clinical Risk',
      icon: Activity,
      color: 'red',
      severity: 'critical',
      likelihood: 'low',
      impact: 'critical',
      status: 'active',
      riskScore: 20,
      identifiedDate: '2024-01-12',
      owner: 'Medical Director',
      description: 'Substandard patient care and clinical protocol deviations',
      consequences: 'Patient harm, malpractice suits, accreditation loss, reputation damage',
      mitigationStatus: 'in_progress',
      mitigationPlan: 'Quality assurance program, clinical training, protocol enforcement',
      relatedSection: 'section6',
      lastReview: '2024-02-16',
      trend: 'stable'
    },
    {
      id: 'RISK-011',
      title: 'Compensation Inequities',
      category: 'Financial Risk',
      icon: DollarSign,
      color: 'green',
      severity: 'medium',
      likelihood: 'medium',
      impact: 'medium',
      status: 'mitigated',
      riskScore: 9,
      identifiedDate: '2024-01-08',
      owner: 'Payroll Manager',
      description: 'Pay disparities and benefits administration errors',
      consequences: 'Legal liability, employee dissatisfaction, turnover increase',
      mitigationStatus: 'completed',
      mitigationPlan: 'Compensation review, transparent policies, regular audits',
      relatedSection: 'section11',
      lastReview: '2024-02-01',
      trend: 'decreasing'
    },
    {
      id: 'RISK-012',
      title: 'Environmental Compliance Violations',
      category: 'Compliance Risk',
      icon: Globe,
      color: 'green',
      severity: 'low',
      likelihood: 'low',
      impact: 'low',
      status: 'active',
      riskScore: 4,
      identifiedDate: '2024-02-10',
      owner: 'Sustainability Coordinator',
      description: 'Non-compliance with environmental regulations and sustainability standards',
      consequences: 'Regulatory fines, environmental damage, reputation impact',
      mitigationStatus: 'planned',
      mitigationPlan: 'Environmental audit, waste management upgrade, staff awareness',
      relatedSection: 'section18',
      lastReview: '2024-02-15',
      trend: 'stable'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: risks.length },
    { id: 'Compliance Risk', name: 'Compliance', count: risks.filter(r => r.category === 'Compliance Risk').length },
    { id: 'Safety Risk', name: 'Safety', count: risks.filter(r => r.category === 'Safety Risk').length },
    { id: 'Data Security Risk', name: 'Data Security', count: risks.filter(r => r.category === 'Data Security Risk').length },
    { id: 'Operational Risk', name: 'Operational', count: risks.filter(r => r.category === 'Operational Risk').length },
    { id: 'Legal Risk', name: 'Legal', count: risks.filter(r => r.category === 'Legal Risk').length },
    { id: 'Reputational Risk', name: 'Reputational', count: risks.filter(r => r.category === 'Reputational Risk').length },
    { id: 'Clinical Risk', name: 'Clinical', count: risks.filter(r => r.category === 'Clinical Risk').length },
    { id: 'Financial Risk', name: 'Financial', count: risks.filter(r => r.category === 'Financial Risk').length }
  ];

  const severityLevels = [
    { id: 'all', name: 'All Severity', count: risks.length },
    { id: 'critical', name: 'Critical', count: risks.filter(r => r.severity === 'critical').length },
    { id: 'high', name: 'High', count: risks.filter(r => r.severity === 'high').length },
    { id: 'medium', name: 'Medium', count: risks.filter(r => r.severity === 'medium').length },
    { id: 'low', name: 'Low', count: risks.filter(r => r.severity === 'low').length }
  ];

  const views = [
    { id: 'register', name: 'Risk Register', icon: FileText },
    { id: 'heatmap', name: 'Heat Map', icon: BarChart },
    { id: 'mitigation', name: 'Mitigation Plans', icon: Shield },
    { id: 'trends', name: 'Trends', icon: TrendingUp }
  ];

  const stats = {
    critical: risks.filter(r => r.severity === 'critical').length,
    high: risks.filter(r => r.severity === 'high').length,
    active: risks.filter(r => r.status === 'active').length,
    mitigated: risks.filter(r => r.status === 'mitigated').length,
    avgRiskScore: Math.round(risks.reduce((sum, r) => sum + r.riskScore, 0) / risks.length)
  };

  // Filter risks
  const filteredRisks = useMemo(() => {
    let filtered = risks;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    // Filter by severity
    if (selectedSeverity !== 'all') {
      filtered = filtered.filter(r => r.severity === selectedSeverity);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(r =>
        r.title.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query) ||
        r.owner.toLowerCase().includes(query)
      );
    }

    return filtered.sort((a, b) => b.riskScore - a.riskScore);
  }, [searchQuery, selectedCategory, selectedSeverity]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'red';
      case 'high': return 'orange';
      case 'medium': return 'yellow';
      case 'low': return 'green';
      default: return 'slate';
    }
  };

  const getSeverityLabel = (severity) => {
    return severity ? severity.toUpperCase() : '';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'red';
      case 'under_review': return 'orange';
      case 'mitigated': return 'green';
      case 'closed': return 'slate';
      default: return 'slate';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'active': return 'Active';
      case 'under_review': return 'Under Review';
      case 'mitigated': return 'Mitigated';
      case 'closed': return 'Closed';
      default: return status;
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return ArrowUp;
      case 'decreasing': return ArrowDown;
      case 'stable': return Minus;
      default: return Minus;
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'increasing': return 'red';
      case 'decreasing': return 'green';
      case 'stable': return 'blue';
      default: return 'slate';
    }
  };

  const handleRiskClick = (risk) => {
    setSelectedRisk(risk);
  };

  const handleViewSection = (sectionId) => {
    onNavigateToSection(sectionId);
    onClose();
  };

  const renderRiskCard = (risk) => {
    const RiskIcon = risk.icon;
    const severityColor = getSeverityColor(risk.severity);
    const statusColor = getStatusColor(risk.status);
    const TrendIcon = getTrendIcon(risk.trend);
    const trendColor = getTrendColor(risk.trend);

    return (
      <div
        key={risk.id}
        onClick={() => handleRiskClick(risk)}
        className="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer group"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3 flex-1">
            <div className={`p-3 bg-${risk.color}-100 rounded-xl group-hover:bg-orange-100 transition-colors`}>
              <RiskIcon className={`w-6 h-6 text-${risk.color}-600 group-hover:text-orange-600 transition-colors`} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-slate-900 mb-1 group-hover:text-orange-700 transition-colors line-clamp-2">
                {risk.title}
              </h4>
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="text-xs text-slate-600">{risk.id}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold bg-${severityColor}-100 text-${severityColor}-700`}>
                  {getSeverityLabel(risk.severity)}
                </span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold bg-${statusColor}-100 text-${statusColor}-700`}>
                  {getStatusLabel(risk.status)}
                </span>
              </div>
              <div className="text-xs text-slate-600 mb-2">
                <strong>Category:</strong> {risk.category}
              </div>
              <div className="text-xs text-slate-600">
                <strong>Owner:</strong> {risk.owner}
              </div>
            </div>
          </div>
        </div>

        {/* Risk Score */}
        <div className="mb-3 bg-slate-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-600 font-semibold">Risk Score</span>
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-bold text-${severityColor}-700`}>{risk.riskScore}</span>
              <TrendIcon className={`w-4 h-4 text-${trendColor}-600`} />
            </div>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-${severityColor}-600 transition-all`}
              style={{ width: `${Math.min((risk.riskScore / 25) * 100, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-xs">
          <div className="flex items-center gap-1 text-slate-600">
            <Flag className="w-3 h-3" />
            {risk.mitigationStatus}
          </div>
          <div className="text-slate-600">
            Last Review: {new Date(risk.lastReview).toLocaleDateString()}
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleViewSection(risk.relatedSection);
            }}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-semibold"
          >
            <FileText className="w-4 h-4" />
            View Policy
          </button>
        </div>
      </div>
    );
  };

  const renderRiskDetails = () => {
    if (!selectedRisk) return null;

    const RiskIcon = selectedRisk.icon;
    const severityColor = getSeverityColor(selectedRisk.severity);
    const statusColor = getStatusColor(selectedRisk.status);
    const TrendIcon = getTrendIcon(selectedRisk.trend);
    const trendColor = getTrendColor(selectedRisk.trend);

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-br from-${selectedRisk.color}-500 to-${selectedRisk.color}-600 px-8 py-6 text-white`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                  <RiskIcon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold">{selectedRisk.id}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold bg-${severityColor}-600`}>
                      {getSeverityLabel(selectedRisk.severity)}
                    </span>
                    <span className={`px-2 py-0.5 bg-${statusColor}-600 rounded text-xs font-bold`}>
                      {getStatusLabel(selectedRisk.status)}
                    </span>
                    <div className="flex items-center gap-1">
                      <TrendIcon className={`w-4 h-4 text-${trendColor}-100`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{selectedRisk.title}</h3>
                  <div className="text-white/90">{selectedRisk.category}</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedRisk(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
            {/* Risk Score */}
            <div className="mb-6 bg-orange-50 rounded-lg p-5 border border-orange-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-orange-900">Risk Assessment</h4>
                <div className="flex items-center gap-2">
                  <span className={`text-3xl font-bold text-${severityColor}-700`}>{selectedRisk.riskScore}</span>
                  <span className="text-sm text-slate-600">/ 25</span>
                </div>
              </div>
              <div className="w-full h-3 bg-orange-200 rounded-full overflow-hidden mb-3">
                <div 
                  className={`h-full bg-${severityColor}-600`}
                  style={{ width: `${Math.min((selectedRisk.riskScore / 25) * 100, 100)}%` }}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-xs text-slate-600 mb-1">Likelihood</div>
                  <div className={`font-bold text-${getSeverityColor(selectedRisk.likelihood)}-700 capitalize`}>
                    {selectedRisk.likelihood}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-xs text-slate-600 mb-1">Impact</div>
                  <div className={`font-bold text-${getSeverityColor(selectedRisk.impact)}-700 capitalize`}>
                    {selectedRisk.impact}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Risk Description</h4>
              <p className="text-slate-700 leading-relaxed">{selectedRisk.description}</p>
            </div>

            {/* Consequences */}
            <div className="mb-6 bg-red-50 rounded-lg p-5 border border-red-200">
              <h4 className="text-sm font-bold text-red-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Potential Consequences
              </h4>
              <p className="text-red-700 leading-relaxed text-sm">{selectedRisk.consequences}</p>
            </div>

            {/* Mitigation */}
            <div className="mb-6 bg-blue-50 rounded-lg p-5 border border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-blue-900">Mitigation Plan</h4>
                <span className={`px-2 py-1 rounded text-xs font-bold capitalize ${
                  selectedRisk.mitigationStatus === 'completed' ? 'bg-green-100 text-green-700' :
                  selectedRisk.mitigationStatus === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                  'bg-slate-100 text-slate-700'
                }`}>
                  {selectedRisk.mitigationStatus.replace('_', ' ')}
                </span>
              </div>
              <p className="text-blue-700 leading-relaxed text-sm">{selectedRisk.mitigationPlan}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-xs">Risk Owner</span>
                </div>
                <div className="font-semibold text-slate-900">{selectedRisk.owner}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs">Identified Date</span>
                </div>
                <div className="font-semibold text-slate-900">
                  {new Date(selectedRisk.identifiedDate).toLocaleDateString()}
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs">Last Review</span>
                </div>
                <div className="font-semibold text-slate-900">
                  {new Date(selectedRisk.lastReview).toLocaleDateString()}
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs">Trend</span>
                </div>
                <div className={`font-semibold text-${trendColor}-700 capitalize flex items-center gap-1`}>
                  <TrendIcon className="w-4 h-4" />
                  {selectedRisk.trend}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => handleViewSection(selectedRisk.relatedSection)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
              >
                <FileText className="w-5 h-5" />
                View Related Policy
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                <Download className="w-5 h-5" />
                Export
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
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Risk Monitor
                  </h2>
                  <p className="text-orange-100">Comprehensive risk assessment and threat analysis</p>
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
                <div className="text-2xl font-bold text-white">{stats.critical}</div>
                <div className="text-xs text-orange-100">Critical</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.high}</div>
                <div className="text-xs text-orange-100">High</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.active}</div>
                <div className="text-xs text-orange-100">Active</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.mitigated}</div>
                <div className="text-xs text-orange-100">Mitigated</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.avgRiskScore}</div>
                <div className="text-xs text-orange-100">Avg Score</div>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-600" />
              <input
                type="text"
                placeholder="Search risks by title, owner, or description..."
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
                        ? 'bg-white text-orange-700 shadow-lg'
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
          <div className="px-8 py-4 bg-slate-50 border-b border-slate-200">
            <div className="flex gap-4 overflow-x-auto">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-semibold text-slate-600 whitespace-nowrap">Category:</span>
                {categories.slice(0, 5).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-orange-600 text-white shadow-lg'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="px-8 py-3 bg-white border-b border-slate-200 flex gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-sm font-semibold text-slate-600">Severity:</span>
              {severityLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedSeverity(level.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedSeverity === level.id
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {level.name} ({level.count})
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-slate-600">
                Showing {filteredRisks.length} of {risks.length} risks
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm font-semibold border border-slate-200">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRisks.map(renderRiskCard)}
            </div>

            {filteredRisks.length === 0 && (
              <div className="text-center py-12">
                <AlertTriangle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">No risks found</p>
                <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Risk Details Modal */}
      {selectedRisk && renderRiskDetails()}
    </>
  );
};

export default RiskMonitor;
