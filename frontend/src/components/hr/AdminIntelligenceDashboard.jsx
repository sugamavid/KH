import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, TrendingDown, TrendingUp, Shield, Users, Clock, 
  DollarSign, Target, Activity, Award, Brain, Zap, AlertCircle,
  CheckCircle, XCircle, MinusCircle, ArrowUpRight, ArrowDownRight,
  Calendar, FileText, BarChart3, PieChart, LineChart, Briefcase
} from 'lucide-react';
import StaffShortagePredictorModal from './StaffShortagePredictorModal';
import BurnoutDetectorModal from './BurnoutDetectorModal';

const AdminIntelligenceDashboard = ({ setActiveModule }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');
  const [criticalAlerts, setCriticalAlerts] = useState([]);
  
  // Modal states
  const [showShortagePredictor, setShowShortagePredictor] = useState(false);
  const [showBurnoutDetector, setShowBurnoutDetector] = useState(false);

  // CEO-Critical Metrics
  const executiveInsights = [
    {
      title: 'Workforce Health Score',
      value: 78,
      outOf: 100,
      icon: Activity,
      color: 'emerald',
      trend: '+5',
      status: 'Good',
      insight: 'Staff morale improving, burnout cases down 12%',
      action: 'Review high-performing departments'
    },
    {
      title: 'Compliance Risk Level',
      value: 'Medium',
      score: 65,
      icon: Shield,
      color: 'orange',
      trend: '-3',
      urgentItems: 8,
      insight: '8 certifications expiring in 30 days',
      action: 'Schedule renewal training immediately'
    },
    {
      title: 'Staffing Adequacy',
      value: '92%',
      icon: Users,
      color: 'blue',
      trend: '-2%',
      criticalDepts: 2,
      insight: 'ICU & Emergency at 85% - below threshold',
      action: 'Initiate emergency hiring protocol'
    },
    {
      title: 'Cost Efficiency Index',
      value: 'Optimal',
      score: 82,
      icon: DollarSign,
      color: 'green',
      savings: '₹2.3L',
      insight: 'Overtime reduced, temp staff costs down',
      action: 'Maintain current roster optimization'
    }
  ];

  // Strategic Intelligence Tools
  const intelligenceTools = [
    {
      name: 'Staff Shortage Predictor',
      icon: AlertTriangle,
      color: 'red',
      insight: '3 critical shortages predicted next week',
      departments: ['ICU', 'Emergency', 'OT'],
      confidence: '89%',
      action: 'View Predictions',
      severity: 'high',
      onClick: () => setShowShortagePredictor(true)
    },
    {
      name: 'Employee Burnout Detector',
      icon: Activity,
      color: 'orange',
      insight: '12 employees showing burnout signals',
      metrics: 'Excessive overtime, low leave usage',
      confidence: '76%',
      action: 'View At-Risk Staff',
      severity: 'medium',
      onClick: () => setShowBurnoutDetector(true)
    },
    {
      name: 'Turnover Risk Analyzer',
      icon: TrendingDown,
      color: 'yellow',
      insight: '5 high-value employees at flight risk',
      departments: ['Nursing', 'Lab', 'Radiology'],
      confidence: '82%',
      action: 'View Risk Report',
      severity: 'medium',
      onClick: () => alert('Turnover Risk Analyzer - Coming Soon!')
    },
    {
      name: 'Compliance Deadline Tracker',
      icon: Clock,
      color: 'purple',
      insight: '15 critical deadlines in next 30 days',
      categories: ['Certifications', 'Training', 'Licenses'],
      confidence: '100%',
      action: 'View Timeline',
      severity: 'high',
      onClick: () => alert('Compliance Deadline Tracker - Coming Soon!')
    },
    {
      name: 'Skill Gap Analyzer',
      icon: Brain,
      color: 'blue',
      insight: 'Critical skill gaps in 4 departments',
      gaps: ['ACLS', 'BLS', 'Infection Control'],
      confidence: '94%',
      action: 'View Gap Analysis',
      severity: 'low',
      onClick: () => alert('Skill Gap Analyzer - Coming Soon!')
    },
    {
      name: 'Cost Optimization Engine',
      icon: DollarSign,
      color: 'green',
      insight: 'Potential savings: ₹4.2L/month',
      areas: ['Overtime', 'Temp Staff', 'Idle Time'],
      confidence: '87%',
      action: 'View Opportunities',
      severity: 'low',
      onClick: () => alert('Cost Optimization Engine - Coming Soon!')
    }
  ];

  // Real-time Critical Alerts
  const liveAlerts = [
    {
      type: 'critical',
      title: 'ICU Staffing Below Safe Threshold',
      message: 'Only 4 nurses on duty tonight (Minimum: 6). Patient load: 12 critical patients.',
      time: '12 mins ago',
      department: 'ICU',
      action: 'Call Emergency Pool',
      severity: 'critical'
    },
    {
      type: 'urgent',
      title: 'Mass Leave Applications - Diwali Week',
      message: '45% staff applied leave for same week. Risk of understaffing.',
      time: '1 hour ago',
      department: 'Multiple',
      action: 'Review & Stagger',
      severity: 'high'
    },
    {
      type: 'warning',
      title: '3 Senior Nurses Submitted Resignation',
      message: 'High attrition in Nursing - Exit interviews show salary concerns.',
      time: '3 hours ago',
      department: 'Nursing',
      action: 'Schedule Retention Meeting',
      severity: 'medium'
    },
    {
      type: 'info',
      title: 'NABH Audit Scheduled',
      message: 'HR document review required. 15 days remaining for preparation.',
      time: '1 day ago',
      department: 'HR',
      action: 'Start Audit Prep',
      severity: 'low'
    }
  ];

  // Department Performance Matrix
  const departmentMatrix = [
    { 
      dept: 'Emergency', 
      staffing: 88, 
      performance: 92, 
      compliance: 95, 
      satisfaction: 78,
      status: 'attention',
      issues: ['Staffing below target', 'High overtime']
    },
    { 
      dept: 'ICU', 
      staffing: 85, 
      performance: 95, 
      compliance: 98, 
      satisfaction: 82,
      status: 'critical',
      issues: ['Immediate hiring needed', 'Burnout risk']
    },
    { 
      dept: 'Nursing', 
      staffing: 94, 
      performance: 88, 
      compliance: 92, 
      satisfaction: 75,
      status: 'attention',
      issues: ['Low morale', 'High attrition']
    },
    { 
      dept: 'Laboratory', 
      staffing: 96, 
      performance: 94, 
      compliance: 100, 
      satisfaction: 88,
      status: 'excellent',
      issues: []
    },
    { 
      dept: 'Radiology', 
      staffing: 92, 
      performance: 90, 
      compliance: 94, 
      satisfaction: 85,
      status: 'good',
      issues: []
    },
    { 
      dept: 'OT', 
      staffing: 87, 
      performance: 96, 
      compliance: 97, 
      satisfaction: 80,
      status: 'attention',
      issues: ['Understaffed during peak hours']
    }
  ];

  // Automation Tools
  const automationTools = [
    {
      name: 'Auto-Roster Generator',
      icon: Calendar,
      description: 'AI-powered shift scheduling considering skills, preferences & regulations',
      status: 'active',
      savings: '40 hrs/month'
    },
    {
      name: 'Smart Leave Balancer',
      icon: Target,
      description: 'Prevents mass leaves, suggests optimal leave distribution',
      status: 'active',
      savings: 'Prevents 90% conflicts'
    },
    {
      name: 'Compliance Auto-Alerts',
      icon: Bell,
      description: 'Automatic reminders 90/60/30 days before certification expiry',
      status: 'active',
      savings: '100% compliance'
    },
    {
      name: 'Emergency Pool Activator',
      icon: Zap,
      description: 'One-click emergency staff calling during critical shortages',
      status: 'ready',
      savings: 'Response in < 15 mins'
    },
    {
      name: 'Budget Impact Simulator',
      icon: Calculator,
      description: 'What-if scenarios for hiring, salary changes, benefits',
      status: 'ready',
      savings: 'Informed decisions'
    },
    {
      name: 'Training Auto-Scheduler',
      icon: Award,
      description: 'Automatic training scheduling based on skill gaps & deadlines',
      status: 'active',
      savings: '95% training completion'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: { bg: 'bg-red-500', light: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
      orange: { bg: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
      yellow: { bg: 'bg-yellow-500', light: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200' },
      green: { bg: 'bg-green-500', light: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      blue: { bg: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      emerald: { bg: 'bg-emerald-500', light: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' }
    };
    return colors[color] || colors.blue;
  };

  const getStatusColor = (status) => {
    const statusColors = {
      excellent: 'bg-green-100 text-green-700 border-green-300',
      good: 'bg-blue-100 text-blue-700 border-blue-300',
      attention: 'bg-yellow-100 text-yellow-700 border-yellow-300',
      critical: 'bg-red-100 text-red-700 border-red-300'
    };
    return statusColors[status] || statusColors.good;
  };

  const getSeverityIcon = (severity) => {
    switch(severity) {
      case 'critical': return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'high': return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'medium': return <MinusCircle className="w-5 h-5 text-yellow-600" />;
      default: return <CheckCircle className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Futuristic Header */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 border-b-4 border-blue-500 shadow-2xl">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-white tracking-tight flex items-center">
                <Brain className="w-10 h-10 mr-3 text-cyan-400 animate-pulse" />
                HR Intelligence Command Center
              </h1>
              <p className="text-cyan-300 mt-2 font-medium">Real-time insights • Predictive analytics • Strategic automation</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20">
                <div className="text-xs text-cyan-300 mb-1">System Status</div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-bold">All Systems Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        {/* CEO Executive Summary */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-2 text-cyan-400" />
            Executive Health Scorecard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {executiveInsights.map((metric, idx) => {
              const colors = getColorClasses(metric.color);
              return (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border-2 border-slate-700 hover:border-cyan-500 transition-all shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center shadow-lg`}>
                      <metric.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${metric.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {metric.trend}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-1">{metric.value}</h3>
                  {metric.outOf && <p className="text-sm text-gray-400 mb-2">out of {metric.outOf}</p>}
                  <p className="text-sm font-semibold text-gray-300 mb-3">{metric.title}</p>
                  <div className="border-t border-slate-700 pt-3 mt-3">
                    <p className="text-xs text-cyan-400 mb-2">{metric.insight}</p>
                    <button className="text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1.5 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all">
                      {metric.action} →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real-Time Critical Alerts */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-red-400 animate-pulse" />
            Live Critical Alerts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {liveAlerts.map((alert, idx) => (
              <div key={idx} className={`bg-slate-800/70 backdrop-blur-md rounded-xl p-5 border-l-4 ${
                alert.severity === 'critical' ? 'border-red-500 bg-red-900/10' :
                alert.severity === 'high' ? 'border-orange-500 bg-orange-900/10' :
                alert.severity === 'medium' ? 'border-yellow-500 bg-yellow-900/10' :
                'border-blue-500 bg-blue-900/10'
              } shadow-lg hover:shadow-2xl transition-all`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    {getSeverityIcon(alert.severity)}
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-sm mb-1">{alert.title}</h3>
                      <p className="text-gray-300 text-xs leading-relaxed">{alert.message}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-3 text-xs">
                    <span className="text-gray-400">{alert.time}</span>
                    <span className="px-2 py-1 bg-slate-700 text-cyan-400 rounded font-semibold">{alert.department}</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all">
                    {alert.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intelligence Tools Grid */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Brain className="w-6 h-6 mr-2 text-purple-400" />
            AI-Powered Strategic Intelligence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {intelligenceTools.map((tool, idx) => {
              const colors = getColorClasses(tool.color);
              return (
                <div 
                  key={idx} 
                  onClick={tool.onClick}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all shadow-xl hover:shadow-purple-500/20 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      tool.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                      tool.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {tool.confidence}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{tool.name}</h3>
                  <p className="text-cyan-400 text-sm font-semibold mb-2">{tool.insight}</p>
                  {tool.departments && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {tool.departments.map((dept, dIdx) => (
                        <span key={dIdx} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                          {dept}
                        </span>
                      ))}
                    </div>
                  )}
                  <button className="w-full mt-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all">
                    {tool.action} →
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Department Performance Matrix */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <BarChart3 className="w-6 h-6 mr-2 text-green-400" />
            Department Performance Matrix
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl border-2 border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-900 to-slate-800 border-b-2 border-slate-700">
                    <th className="px-6 py-4 text-left text-xs font-bold text-cyan-400 uppercase tracking-wider">Department</th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-cyan-400 uppercase tracking-wider">Staffing</th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-cyan-400 uppercase tracking-wider">Performance</th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-cyan-400 uppercase tracking-wider">Compliance</th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-cyan-400 uppercase tracking-wider">Satisfaction</th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-cyan-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-cyan-400 uppercase tracking-wider">Issues</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentMatrix.map((dept, idx) => (
                    <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-white font-bold">{dept.dept}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center">
                          <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className={`h-full ${dept.staffing >= 90 ? 'bg-green-500' : dept.staffing >= 85 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{width: `${dept.staffing}%`}}></div>
                          </div>
                          <span className={`ml-2 text-sm font-bold ${dept.staffing >= 90 ? 'text-green-400' : dept.staffing >= 85 ? 'text-yellow-400' : 'text-red-400'}`}>{dept.staffing}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`text-sm font-bold ${dept.performance >= 90 ? 'text-green-400' : 'text-yellow-400'}`}>{dept.performance}%</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`text-sm font-bold ${dept.compliance >= 95 ? 'text-green-400' : 'text-yellow-400'}`}>{dept.compliance}%</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`text-sm font-bold ${dept.satisfaction >= 85 ? 'text-green-400' : dept.satisfaction >= 75 ? 'text-yellow-400' : 'text-red-400'}`}>{dept.satisfaction}%</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(dept.status)}`}>
                          {dept.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {dept.issues.length > 0 ? (
                          <div className="space-y-1">
                            {dept.issues.map((issue, iIdx) => (
                              <div key={iIdx} className="text-xs text-orange-400 flex items-center">
                                <AlertCircle className="w-3 h-3 mr-1" />
                                {issue}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-green-400 text-xs flex items-center">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            No Issues
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Automation Suite */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-yellow-400" />
            Active Automation Suite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {automationTools.map((tool, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 border border-slate-700 hover:border-cyan-500 transition-all shadow-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg">
                    <tool.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    tool.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {tool.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-white font-bold mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{tool.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                  <span className="text-cyan-400 text-xs font-semibold">💡 {tool.savings}</span>
                  <button className="text-cyan-400 text-xs font-bold hover:text-cyan-300">Configure →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIntelligenceDashboard;
