import React, { useState } from 'react';
import { 
  X, Activity, AlertTriangle, TrendingUp, Clock, 
  Calendar, User, Mail, Phone, Brain, Heart,
  BarChart3, ChevronRight, Download
} from 'lucide-react';

const BurnoutDetectorModal = ({ isOpen, onClose }) => {
  const [sortBy, setSortBy] = useState('risk');

  // Employees showing burnout signals
  const atRiskEmployees = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      department: 'Emergency',
      role: 'Senior Physician',
      riskScore: 89,
      riskLevel: 'critical',
      signals: [
        { type: 'overtime', value: '68 hours this month', severity: 'high' },
        { type: 'leave', value: 'No leave taken in 4 months', severity: 'critical' },
        { type: 'performance', value: '15% drop in patient reviews', severity: 'medium' },
        { type: 'workload', value: '40% above department average', severity: 'high' }
      ],
      trends: {
        overtime: [45, 52, 61, 68],
        satisfaction: [92, 88, 82, 75],
        productivity: [95, 92, 87, 80]
      },
      lastIntervention: 'None',
      recommendations: [
        'Immediate mandatory 1-week leave',
        'Reduce shift load by 30%',
        'Schedule wellness consultation',
        'Assign support physician'
      ]
    },
    {
      id: 2,
      name: 'Nurse Lakshmi Iyer',
      department: 'ICU',
      role: 'Staff Nurse',
      riskScore: 82,
      riskLevel: 'critical',
      signals: [
        { type: 'overtime', value: '52 hours this month', severity: 'high' },
        { type: 'leave', value: 'Used only 2 days in 6 months', severity: 'high' },
        { type: 'schedule', value: '5 consecutive night shifts', severity: 'critical' },
        { type: 'complaints', value: '2 stress-related concerns filed', severity: 'high' }
      ],
      trends: {
        overtime: [38, 44, 48, 52],
        satisfaction: [85, 78, 72, 68],
        productivity: [92, 88, 85, 78]
      },
      lastIntervention: '2 months ago - Counseling',
      recommendations: [
        'Rotate to day shifts immediately',
        'Mandatory 3-day break',
        'Follow-up counseling session',
        'Review workload distribution'
      ]
    },
    {
      id: 3,
      name: 'Mr. Arun Kumar',
      department: 'Laboratory',
      role: 'Lab Technician',
      riskScore: 76,
      riskLevel: 'high',
      signals: [
        { type: 'overtime', value: '42 hours this month', severity: 'medium' },
        { type: 'leave', value: '4 sick leaves in 2 months', severity: 'medium' },
        { type: 'performance', value: 'Error rate increased 20%', severity: 'high' },
        { type: 'engagement', value: 'Declined team activities', severity: 'medium' }
      ],
      trends: {
        overtime: [28, 35, 38, 42],
        satisfaction: [88, 82, 76, 72],
        productivity: [94, 90, 85, 80]
      },
      lastIntervention: '3 weeks ago - Manager meeting',
      recommendations: [
        'Reduce overtime to zero for 2 weeks',
        'Quality assurance review',
        'Team engagement activities',
        'Check for personal issues'
      ]
    },
    {
      id: 4,
      name: 'Ms. Divya Menon',
      department: 'Nursing',
      role: 'Junior Nurse',
      riskScore: 71,
      riskLevel: 'high',
      signals: [
        { type: 'overtime', value: '35 hours this month', severity: 'medium' },
        { type: 'feedback', value: 'Negative peer feedback', severity: 'medium' },
        { type: 'absence', value: '3 late arrivals this week', severity: 'medium' },
        { type: 'training', value: 'Skipped 2 mandatory trainings', severity: 'low' }
      ],
      trends: {
        overtime: [22, 28, 32, 35],
        satisfaction: [90, 85, 80, 75],
        productivity: [88, 84, 80, 76]
      },
      lastIntervention: 'None',
      recommendations: [
        'One-on-one mentoring session',
        'Review shift preferences',
        'Stress management workshop',
        'Career development discussion'
      ]
    }
  ];

  const getRiskColor = (level) => {
    switch(level) {
      case 'critical': return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300', badge: 'bg-red-500' };
      case 'high': return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300', badge: 'bg-orange-500' };
      case 'medium': return { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300', badge: 'bg-yellow-500' };
      default: return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300', badge: 'bg-blue-500' };
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-orange-600';
      case 'medium': return 'text-yellow-600';
      default: return 'text-blue-600';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">Employee Burnout Detector</h2>
              <p className="text-orange-100 text-sm">AI-powered wellness monitoring & early intervention</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-200 px-6 py-4">
          <div className="grid grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-3xl font-black text-red-600">12</div>
              <div className="text-xs font-semibold text-red-700">At-Risk Staff</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-orange-600">4</div>
              <div className="text-xs font-semibold text-orange-700">Critical Cases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-600">8</div>
              <div className="text-xs font-semibold text-yellow-700">Needs Attention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-green-600">156</div>
              <div className="text-xs font-semibold text-green-700">Healthy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-purple-600">82%</div>
              <div className="text-xs font-semibold text-purple-700">Avg Confidence</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium"
            >
              <option value="risk">Sort by Risk Score</option>
              <option value="name">Sort by Name</option>
              <option value="department">Sort by Department</option>
            </select>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-semibold">
              Filter Departments
            </button>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Last Analysis:</span> 10 mins ago
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[55vh]">
          <div className="space-y-4">
            {atRiskEmployees.map((employee) => {
              const colors = getRiskColor(employee.riskLevel);
              return (
                <div key={employee.id} className={`${colors.bg} border-2 ${colors.border} rounded-xl p-5 hover:shadow-xl transition-all`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-black text-xl">
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{employee.name}</h3>
                          <span className={`px-3 py-1 ${colors.badge} text-white rounded-full text-xs font-bold`}>
                            Risk: {employee.riskScore}%
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-700 mb-3">
                          <span className="font-semibold">{employee.role}</span>
                          <span className="text-gray-400">•</span>
                          <span>{employee.department}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-xs bg-white px-2 py-1 rounded">Last intervention: {employee.lastIntervention}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <button className="px-4 py-2 bg-white text-orange-700 border-2 border-orange-400 rounded-lg hover:bg-orange-50 transition-all font-bold text-sm">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Contact
                      </button>
                      <button className="px-4 py-2 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-semibold text-sm">
                        View Profile
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Burnout Signals */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="text-xs font-bold text-gray-600 uppercase mb-3 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-1 text-orange-500" />
                        Detected Signals
                      </h4>
                      <div className="space-y-2">
                        {employee.signals.map((signal, idx) => (
                          <div key={idx} className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className={`text-sm font-semibold ${getSeverityColor(signal.severity)}`}>
                                {signal.type.charAt(0).toUpperCase() + signal.type.slice(1)}
                              </div>
                              <div className="text-xs text-gray-600">{signal.value}</div>
                            </div>
                            <span className={`px-2 py-1 ${signal.severity === 'critical' ? 'bg-red-100 text-red-700' : signal.severity === 'high' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'} rounded text-xs font-bold`}>
                              {signal.severity.toUpperCase()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="text-xs font-bold text-gray-600 uppercase mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-1 text-blue-500" />
                        AI Recommendations
                      </h4>
                      <ul className="space-y-2">
                        {employee.recommendations.map((rec, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <ChevronRight className="w-4 h-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Trend Indicators */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="text-xs font-bold text-gray-600 uppercase mb-3">4-Month Trends</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Overtime Hours</div>
                        <div className="flex items-end space-x-1 h-12">
                          {employee.trends.overtime.map((val, idx) => (
                            <div key={idx} className="flex-1 bg-red-500 rounded-t" style={{height: `${(val/70)*100}%`}}></div>
                          ))}
                        </div>
                        <div className="text-xs text-red-600 font-bold mt-1">↑ {employee.trends.overtime[3]}h</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Satisfaction Score</div>
                        <div className="flex items-end space-x-1 h-12">
                          {employee.trends.satisfaction.map((val, idx) => (
                            <div key={idx} className="flex-1 bg-orange-500 rounded-t" style={{height: `${val}%`}}></div>
                          ))}
                        </div>
                        <div className="text-xs text-orange-600 font-bold mt-1">↓ {employee.trends.satisfaction[3]}%</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Productivity Score</div>
                        <div className="flex items-end space-x-1 h-12">
                          {employee.trends.productivity.map((val, idx) => (
                            <div key={idx} className="flex-1 bg-yellow-500 rounded-t" style={{height: `${val}%`}}></div>
                          ))}
                        </div>
                        <div className="text-xs text-yellow-600 font-bold mt-1">↓ {employee.trends.productivity[3]}%</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-300">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:shadow-lg transition-all font-bold text-sm">
                      Schedule Intervention
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-semibold text-sm">
                      Send Wellness Survey
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-semibold text-sm">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Analysis based on:</span> Overtime patterns, Leave usage, Performance metrics, Engagement scores
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:shadow-lg transition-all font-bold text-sm">
            Export Wellness Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurnoutDetectorModal;
