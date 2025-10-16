import React, { useState } from 'react';
import { 
  X, TrendingDown, User, Mail, Phone, AlertTriangle, 
  DollarSign, Calendar, Award, Brain, ChevronRight, Download,
  TrendingUp, Heart, MessageSquare, Briefcase
} from 'lucide-react';

const TurnoverRiskAnalyzerModal = ({ isOpen, onClose }) => {
  const [filterDepartment, setFilterDepartment] = useState('all');

  // High-value employees at flight risk
  const atRiskEmployees = [
    {
      id: 1,
      name: 'Dr. Rajesh Nair',
      department: 'Radiology',
      role: 'Senior Radiologist',
      tenure: '8 years',
      riskScore: 87,
      riskLevel: 'critical',
      lastRaise: '18 months ago',
      competitorOffers: 2,
      signals: [
        { type: 'Salary', detail: '25% below market rate', severity: 'critical' },
        { type: 'LinkedIn Activity', detail: 'Profile updated 3 times this month', severity: 'high' },
        { type: 'Engagement', detail: 'Declined last 2 social events', severity: 'medium' },
        { type: 'Performance', detail: 'Still excellent but morale dropping', severity: 'medium' }
      ],
      value: {
        expertise: 'Critical - Only qualified CT/MRI specialist',
        replacement: '₹12L recruitment + 6 months training',
        revenue: '₹45L annual revenue impact'
      },
      recommendations: [
        'Immediate salary review - recommend 30% increase',
        'Fast-track promotion to Department Head',
        'Offer conference sponsorship + CME allowance',
        'Schedule retention meeting this week'
      ]
    },
    {
      id: 2,
      name: 'Ms. Sreeja Thomas',
      department: 'Nursing',
      role: 'ICU Head Nurse',
      tenure: '6 years',
      riskScore: 82,
      riskLevel: 'high',
      lastRaise: '14 months ago',
      competitorOffers: 1,
      signals: [
        { type: 'External Interviews', detail: 'Attended interview at competitor hospital', severity: 'critical' },
        { type: 'Leave Pattern', detail: 'Multiple casual leaves for interviews', severity: 'high' },
        { type: 'Team Complaints', detail: '3 team members concerned about her leaving', severity: 'high' },
        { type: 'Satisfaction', detail: 'Workload concerns raised in last survey', severity: 'medium' }
      ],
      value: {
        expertise: 'Critical - 15+ years ICU experience',
        replacement: '₹6L + 3 months to find qualified replacement',
        revenue: 'ICU operations disruption risk'
      },
      recommendations: [
        'Counter-offer preparation (15-20% raise)',
        'Reduce workload - hire assistant head nurse',
        'Recognition program + leadership training',
        'Urgent meeting with HR + Department Head'
      ]
    },
    {
      id: 3,
      name: 'Mr. Anil Kumar',
      department: 'Laboratory',
      role: 'Lab Manager',
      tenure: '5 years',
      riskScore: 76,
      riskLevel: 'high',
      lastRaise: '12 months ago',
      competitorOffers: 1,
      signals: [
        { type: 'Job Applications', detail: 'Resume found on job portals', severity: 'high' },
        { type: 'Work Hours', detail: 'Leaving on time (used to stay late)', severity: 'medium' },
        { type: 'Initiative', detail: 'No new process improvements in 4 months', severity: 'medium' },
        { type: 'Career Growth', detail: 'Expressed desire for bigger role', severity: 'high' }
      ],
      value: {
        expertise: 'High - NABH audit expert, all certifications',
        replacement: '₹5L + knowledge loss',
        revenue: 'Lab accreditation risk'
      },
      recommendations: [
        'Create Lab Director position with promotion',
        '15% salary increase + variable pay',
        'Involve in hospital-level quality initiatives',
        'Career development plan discussion'
      ]
    },
    {
      id: 4,
      name: 'Dr. Meera Pillai',
      department: 'Emergency',
      role: 'Emergency Physician',
      tenure: '4 years',
      riskScore: 71,
      riskLevel: 'medium',
      lastRaise: '10 months ago',
      competitorOffers: 0,
      signals: [
        { type: 'Burnout', detail: 'High stress levels, 60+ hours/week', severity: 'high' },
        { type: 'Family Issues', detail: 'Relocation concerns (spouse transfer)', severity: 'medium' },
        { type: 'Skill Development', detail: 'Requested trauma certification (not approved)', severity: 'medium' },
        { type: 'Shift Preference', detail: 'Frequent shift change requests', severity: 'low' }
      ],
      value: {
        expertise: 'Medium-High - Trauma specialist',
        replacement: '₹8L + 4 months',
        revenue: 'Emergency dept efficiency impact'
      },
      recommendations: [
        'Approve trauma certification immediately',
        'Flexible scheduling to accommodate family',
        'Reduce shift load by 20%',
        'Remote work option for admin tasks'
      ]
    },
    {
      id: 5,
      name: 'Mr. Prakash Menon',
      department: 'Nursing',
      role: 'Senior Staff Nurse',
      tenure: '7 years',
      riskScore: 68,
      riskLevel: 'medium',
      lastRaise: '9 months ago',
      competitorOffers: 0,
      signals: [
        { type: 'Peer Influence', detail: '2 colleagues left recently for better pay', severity: 'medium' },
        { type: 'Satisfaction', detail: 'Low scores in recent engagement survey', severity: 'medium' },
        { type: 'Recognition', detail: 'Feels undervalued despite good performance', severity: 'medium' },
        { type: 'Growth', detail: 'No promotion in 4 years', severity: 'high' }
      ],
      value: {
        expertise: 'Medium - Experienced in multiple specialties',
        replacement: '₹4L + team morale impact',
        revenue: 'Moderate impact'
      },
      recommendations: [
        'Create senior nurse position with promotion',
        '10-12% salary adjustment',
        'Monthly recognition program',
        'Mentorship role for junior nurses'
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
      case 'critical': return 'text-red-600 font-bold';
      case 'high': return 'text-orange-600 font-bold';
      case 'medium': return 'text-yellow-600 font-semibold';
      default: return 'text-blue-600';
    }
  };

  if (!isOpen) return null;

  const filteredEmployees = filterDepartment === 'all' 
    ? atRiskEmployees 
    : atRiskEmployees.filter(emp => emp.department === filterDepartment);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <TrendingDown className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">Turnover Risk Analyzer</h2>
              <p className="text-yellow-100 text-sm">AI-powered retention intelligence & flight risk prediction</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Stats Summary */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-yellow-200 px-6 py-4">
          <div className="grid grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-3xl font-black text-red-600">5</div>
              <div className="text-xs font-semibold text-red-700">High-Value at Risk</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-orange-600">₹40L</div>
              <div className="text-xs font-semibold text-orange-700">Replacement Cost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-600">82%</div>
              <div className="text-xs font-semibold text-yellow-700">Avg Confidence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-purple-600">30</div>
              <div className="text-xs font-semibold text-purple-700">Days Avg Window</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600">3</div>
              <div className="text-xs font-semibold text-blue-700">External Offers</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <select 
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium"
            >
              <option value="all">All Departments</option>
              <option value="Radiology">Radiology</option>
              <option value="Nursing">Nursing</option>
              <option value="Laboratory">Laboratory</option>
              <option value="Emergency">Emergency</option>
            </select>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Showing:</span> {filteredEmployees.length} at-risk employees
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[55vh]">
          <div className="space-y-4">
            {filteredEmployees.map((employee) => {
              const colors = getRiskColor(employee.riskLevel);
              return (
                <div key={employee.id} className={`${colors.bg} border-2 ${colors.border} rounded-xl p-5`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-black text-xl">
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{employee.name}</h3>
                          <span className={`px-3 py-1 ${colors.badge} text-white rounded-full text-xs font-bold`}>
                            {employee.riskScore}% Flight Risk
                          </span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-bold">
                            {employee.tenure} tenure
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-700 mb-3">
                          <span className="font-semibold">{employee.role}</span>
                          <span className="text-gray-400">•</span>
                          <span>{employee.department}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-xs bg-white px-2 py-1 rounded">Last raise: {employee.lastRaise}</span>
                          {employee.competitorOffers > 0 && (
                            <>
                              <span className="text-gray-400">•</span>
                              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-bold">
                                {employee.competitorOffers} external offer(s)
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <button className="px-4 py-2 bg-white text-yellow-700 border-2 border-yellow-400 rounded-lg hover:bg-yellow-50 font-bold text-sm">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Contact Now
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Flight Risk Signals */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="text-xs font-bold text-gray-600 uppercase mb-3 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-1 text-orange-500" />
                        Flight Risk Signals
                      </h4>
                      <div className="space-y-2">
                        {employee.signals.map((signal, idx) => (
                          <div key={idx}>
                            <div className="flex items-center justify-between mb-1">
                              <span className={`text-xs font-semibold ${getSeverityColor(signal.severity)}`}>
                                {signal.type}
                              </span>
                              <span className={`px-2 py-0.5 rounded text-xs ${
                                signal.severity === 'critical' ? 'bg-red-100 text-red-700' :
                                signal.severity === 'high' ? 'bg-orange-100 text-orange-700' :
                                'bg-yellow-100 text-yellow-700'
                              }`}>
                                {signal.severity.toUpperCase()}
                              </span>
                            </div>
                            <div className="text-xs text-gray-600">{signal.detail}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Employee Value */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="text-xs font-bold text-gray-600 uppercase mb-3 flex items-center">
                        <DollarSign className="w-4 h-4 mr-1 text-green-500" />
                        Value & Impact
                      </h4>
                      <div className="space-y-2">
                        <div>
                          <div className="text-xs font-semibold text-gray-700 mb-1">Expertise Level</div>
                          <div className="text-xs text-gray-600">{employee.value.expertise}</div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-700 mb-1">Replacement Cost</div>
                          <div className="text-xs text-red-600 font-bold">{employee.value.replacement}</div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-700 mb-1">Revenue Impact</div>
                          <div className="text-xs text-orange-600 font-bold">{employee.value.revenue}</div>
                        </div>
                      </div>
                    </div>

                    {/* AI Recommendations */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="text-xs font-bold text-gray-600 uppercase mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-1 text-blue-500" />
                        Retention Strategy
                      </h4>
                      <ul className="space-y-1.5">
                        {employee.recommendations.map((rec, idx) => (
                          <li key={idx} className="text-xs text-gray-700 flex items-start">
                            <ChevronRight className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-300">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg hover:shadow-lg font-bold text-sm">
                      Schedule Retention Meeting
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold text-sm">
                      Prepare Counter-Offer
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold text-sm">
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
            <span className="font-semibold">AI Analysis:</span> LinkedIn activity, interview patterns, salary benchmarks, engagement scores
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg hover:shadow-lg font-bold text-sm">
            Export Retention Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default TurnoverRiskAnalyzerModal;
