import React, { useState } from 'react';
import { 
  X, AlertTriangle, Users, Calendar, TrendingUp, Clock, 
  ChevronRight, CheckCircle, XCircle, AlertCircle, Brain,
  Download, Filter, Search, BarChart3, ArrowRight
} from 'lucide-react';

const StaffShortagePredictorModal = ({ isOpen, onClose }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [timeframe, setTimeframe] = useState('week');

  // Predicted shortages with AI-analysis
  const predictions = [
    {
      department: 'ICU',
      date: 'Jan 25, 2025 (Saturday)',
      shift: 'Night Shift',
      requiredStaff: 6,
      predictedAvailable: 4,
      shortage: 2,
      confidence: 92,
      reasons: [
        '2 nurses on approved leave',
        'Historical pattern: Low weekend availability',
        '1 nurse on sick leave (pattern detected)',
      ],
      riskLevel: 'critical',
      recommendations: [
        'Call backup pool immediately',
        'Offer overtime to day shift staff',
        'Contact external agency as backup'
      ]
    },
    {
      department: 'Emergency',
      date: 'Jan 27, 2025 (Monday)',
      shift: 'Morning Shift',
      requiredStaff: 8,
      predictedAvailable: 6,
      shortage: 2,
      confidence: 85,
      reasons: [
        'Long weekend effect - extended leaves',
        '3 staff on training program',
        'High absenteeism pattern on post-weekend Mondays',
      ],
      riskLevel: 'high',
      recommendations: [
        'Reschedule non-critical training',
        'Prepare backup staff list',
        'Monitor leave requests closely'
      ]
    },
    {
      department: 'OT',
      date: 'Jan 28, 2025 (Tuesday)',
      shift: 'Afternoon Shift',
      requiredStaff: 5,
      predictedAvailable: 4,
      shortage: 1,
      confidence: 78,
      reasons: [
        '1 staff on maternity leave',
        'Seasonal flu affecting 20% staff',
        'Historical shortage pattern during this period',
      ],
      riskLevel: 'medium',
      recommendations: [
        'Keep backup technician on standby',
        'Reschedule non-emergency surgeries if needed',
        'Cross-train staff from other departments'
      ]
    },
    {
      department: 'Laboratory',
      date: 'Feb 2, 2025 (Sunday)',
      shift: 'Night Shift',
      requiredStaff: 3,
      predictedAvailable: 2,
      shortage: 1,
      confidence: 81,
      reasons: [
        'Sunday shift - historically low volunteer rate',
        '1 technician on annual leave',
        'Recent workload increase affecting morale',
      ],
      riskLevel: 'medium',
      recommendations: [
        'Offer incentive for Sunday shifts',
        'Ensure automated equipment running',
        'Prepare emergency contact list'
      ]
    }
  ];

  const getRiskColor = (risk) => {
    switch(risk) {
      case 'critical': return 'bg-red-100 text-red-700 border-red-300';
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      default: return 'bg-blue-100 text-blue-700 border-blue-300';
    }
  };

  const getRiskIcon = (risk) => {
    switch(risk) {
      case 'critical': return <XCircle className="w-5 h-5 text-red-600" />;
      case 'high': return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'medium': return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      default: return <CheckCircle className="w-5 h-5 text-blue-600" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">AI Staff Shortage Predictor</h2>
              <p className="text-red-100 text-sm">Predictive analytics for staffing optimization</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-4">
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Department</label>
              <select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="all">All Departments</option>
                <option value="icu">ICU</option>
                <option value="emergency">Emergency</option>
                <option value="ot">OT</option>
                <option value="lab">Laboratory</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Timeframe</label>
              <select 
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="week">Next 7 Days</option>
                <option value="2weeks">Next 14 Days</option>
                <option value="month">Next 30 Days</option>
              </select>
            </div>
            <button className="mt-5 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-semibold text-sm">
              <Filter className="w-4 h-4 inline mr-2" />
              Apply Filters
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Summary Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <div className="text-3xl font-black text-red-600 mb-1">3</div>
              <div className="text-xs font-semibold text-red-700">Critical Shortages</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
              <div className="text-3xl font-black text-orange-600 mb-1">1</div>
              <div className="text-xs font-semibold text-orange-700">High Risk</div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="text-3xl font-black text-green-600 mb-1">87%</div>
              <div className="text-xs font-semibold text-green-700">Avg Confidence</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="text-3xl font-black text-blue-600 mb-1">7</div>
              <div className="text-xs font-semibold text-blue-700">Days Analyzed</div>
            </div>
          </div>

          {/* Predictions List */}
          <div className="space-y-4">
            {predictions.map((pred, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    {getRiskIcon(pred.riskLevel)}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{pred.department}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getRiskColor(pred.riskLevel)}`}>
                          {pred.riskLevel.toUpperCase()}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">
                          {pred.confidence}% Confidence
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 text-sm mb-3">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700 font-medium">{pred.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700 font-medium">{pred.shift}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-gray-600">Staffing Analysis</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-black text-blue-600">{pred.requiredStaff}</div>
                            <div className="text-xs text-gray-600 font-semibold">Required</div>
                          </div>
                          <div>
                            <div className="text-2xl font-black text-orange-600">{pred.predictedAvailable}</div>
                            <div className="text-xs text-gray-600 font-semibold">Predicted</div>
                          </div>
                          <div>
                            <div className="text-2xl font-black text-red-600">-{pred.shortage}</div>
                            <div className="text-xs text-gray-600 font-semibold">Shortage</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-gray-600 uppercase mb-2 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Contributing Factors
                    </h4>
                    <ul className="space-y-1">
                      {pred.reasons.map((reason, rIdx) => (
                        <li key={rIdx} className="text-sm text-gray-700 flex items-start">
                          <ChevronRight className="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-600 uppercase mb-2 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Recommended Actions
                    </h4>
                    <ul className="space-y-1">
                      {pred.recommendations.map((rec, rIdx) => (
                        <li key={rIdx} className="text-sm text-gray-700 flex items-start">
                          <ArrowRight className="w-4 h-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-200">
                  <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-semibold text-sm">
                    Activate Emergency Protocol
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-semibold text-sm">
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-semibold text-sm">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">AI Model:</span> Trained on 12 months of historical data • Last updated: 5 mins ago
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all font-bold text-sm">
            Export Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffShortagePredictorModal;
