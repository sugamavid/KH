import React, { useState } from 'react';
import { X, Activity, TrendingUp, AlertCircle, CheckCircle, Target, BarChart3, Calendar, Users, Award } from 'lucide-react';

const SOPEffectivenessMonitor = ({ isOpen, onClose, onNavigate }) => {
  const [activeView, setActiveView] = useState('overview');
  const [selectedSOP, setSelectedSOP] = useState(null);

  // Mock effectiveness data
  const effectivenessData = [
    {
      id: 'SOP-003',
      title: 'Leave Application Process',
      category: 'HR Operations',
      adherenceScore: 94,
      effectivenessScore: 91,
      completionRate: 96,
      averageTime: '12 mins',
      deviations: 8,
      userSatisfaction: 4.6,
      trend: 'up',
      lastAudit: '2024-01-15',
      totalExecutions: 1247,
      benchmarkScore: 88,
    },
    {
      id: 'SOP-005',
      title: 'Emergency Response',
      category: 'Safety',
      adherenceScore: 98,
      effectivenessScore: 97,
      completionRate: 99,
      averageTime: '8 mins',
      deviations: 2,
      userSatisfaction: 4.9,
      trend: 'up',
      lastAudit: '2024-01-18',
      totalExecutions: 342,
      benchmarkScore: 95,
    },
    {
      id: 'SOP-009',
      title: 'Data Security Procedure',
      category: 'IT',
      adherenceScore: 88,
      effectivenessScore: 85,
      completionRate: 91,
      averageTime: '25 mins',
      deviations: 24,
      userSatisfaction: 3.8,
      trend: 'down',
      lastAudit: '2024-01-12',
      totalExecutions: 2156,
      benchmarkScore: 92,
    },
    {
      id: 'SOP-001',
      title: 'Employee Onboarding',
      category: 'HR Operations',
      adherenceScore: 92,
      effectivenessScore: 89,
      completionRate: 94,
      averageTime: '45 mins',
      deviations: 12,
      userSatisfaction: 4.4,
      trend: 'stable',
      lastAudit: '2024-01-10',
      totalExecutions: 156,
      benchmarkScore: 90,
    },
    {
      id: 'SOP-011',
      title: 'Medication Administration',
      category: 'Clinical',
      adherenceScore: 96,
      effectivenessScore: 95,
      completionRate: 98,
      averageTime: '15 mins',
      deviations: 5,
      userSatisfaction: 4.7,
      trend: 'up',
      lastAudit: '2024-01-17',
      totalExecutions: 5432,
      benchmarkScore: 93,
    },
    {
      id: 'SOP-002',
      title: 'Performance Review Process',
      category: 'HR Operations',
      adherenceScore: 85,
      effectivenessScore: 82,
      completionRate: 88,
      averageTime: '60 mins',
      deviations: 32,
      userSatisfaction: 3.9,
      trend: 'down',
      lastAudit: '2024-01-08',
      totalExecutions: 524,
      benchmarkScore: 87,
    },
  ];

  // Mock deviation patterns
  const deviationPatterns = [
    { type: 'Step Skipped', count: 45, impact: 'Medium', trend: 'Increasing' },
    { type: 'Time Overrun', count: 32, impact: 'Low', trend: 'Stable' },
    { type: 'Incorrect Sequence', count: 18, impact: 'High', trend: 'Decreasing' },
    { type: 'Documentation Missing', count: 28, impact: 'High', trend: 'Increasing' },
    { type: 'Approval Delay', count: 15, impact: 'Medium', trend: 'Stable' },
  ];

  // Mock improvement recommendations
  const recommendations = [
    {
      sopId: 'SOP-009',
      title: 'Data Security Procedure',
      issue: 'Below benchmark adherence (88% vs 92%)',
      recommendation: 'Implement automated validation checkpoints',
      priority: 'High',
      estimatedImprovement: '+8%',
      effort: '40 hours',
    },
    {
      sopId: 'SOP-002',
      title: 'Performance Review Process',
      issue: 'High deviation rate and low satisfaction',
      recommendation: 'Simplify review templates and add guided workflow',
      priority: 'High',
      estimatedImprovement: '+12%',
      effort: '60 hours',
    },
    {
      sopId: 'SOP-001',
      title: 'Employee Onboarding',
      issue: 'Documentation completion delays',
      recommendation: 'Create digital checklist with automated reminders',
      priority: 'Medium',
      estimatedImprovement: '+6%',
      effort: '25 hours',
    },
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (trend === 'down') return <TrendingUp className="w-4 h-4 text-red-600 transform rotate-180" />;
    return <Activity className="w-4 h-4 text-gray-400" />;
  };

  const getImpactColor = (impact) => {
    const colors = {
      'High': 'bg-red-100 text-red-700 border-red-300',
      'Medium': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'Low': 'bg-green-100 text-green-700 border-green-300',
    };
    return colors[impact] || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'High': 'bg-red-100 text-red-700 border-red-300',
      'Medium': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'Low': 'bg-green-100 text-green-700 border-green-300',
    };
    return colors[priority] || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Activity className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-bold">SOP Effectiveness Monitor</h2>
              <p className="text-sm text-teal-100">Real-Time Performance & Adherence Tracking</p>
            </div>
          </div>
          <button onClick={onClose} className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* View Tabs */}
        <div className="bg-gray-50 border-b border-gray-200 px-6">
          <div className="flex space-x-6">
            {['overview', 'deviations', 'benchmarks', 'recommendations'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`py-3 px-4 font-semibold border-b-2 transition-colors ${
                  activeView === view
                    ? 'border-teal-600 text-teal-600'
                    : 'border-transparent text-gray-600 hover:text-teal-600'
                }`}
              >
                {view === 'overview' && 'Performance Overview'}
                {view === 'deviations' && 'Deviation Analysis'}
                {view === 'benchmarks' && 'Industry Benchmarks'}
                {view === 'recommendations' && 'Improvement Plans'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 160px)' }}>
          {/* Performance Overview */}
          {activeView === 'overview' && (
            <div>
              {/* Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Target className="w-8 h-8 text-green-600" />
                    <span className="text-xs font-semibold text-green-600">AVERAGE</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">92%</div>
                  <div className="text-sm text-gray-600">Overall Adherence</div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="w-8 h-8 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-600">ACTIVE</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">6</div>
                  <div className="text-sm text-gray-600">Monitored SOPs</div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <AlertCircle className="w-8 h-8 text-orange-600" />
                    <span className="text-xs font-semibold text-orange-600">ALERTS</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">101</div>
                  <div className="text-sm text-gray-600">Total Deviations</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Award className="w-8 h-8 text-purple-600" />
                    <span className="text-xs font-semibold text-purple-600">RATING</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">4.4</div>
                  <div className="text-sm text-gray-600">Avg Satisfaction</div>
                </div>
              </div>

              {/* SOP Performance Cards */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">SOP Performance Metrics</h3>
                <div className="space-y-4">
                  {effectivenessData.map((sop) => (
                    <div key={sop.id} className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-teal-300 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-bold">
                              {sop.id}
                            </span>
                            <h4 className="font-bold text-gray-800 text-lg">{sop.title}</h4>
                            {getTrendIcon(sop.trend)}
                          </div>
                          <span className="text-sm text-gray-600">{sop.category}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 mb-1">Last Audit</div>
                          <div className="text-sm font-semibold text-gray-700">{sop.lastAudit}</div>
                        </div>
                      </div>

                      {/* Score Bars */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">Adherence</span>
                            <span className={`text-sm font-bold ${getScoreColor(sop.adherenceScore)}`}>{sop.adherenceScore}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className={`h-2 rounded-full ${getScoreBgColor(sop.adherenceScore)}`} style={{ width: `${sop.adherenceScore}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">Effectiveness</span>
                            <span className={`text-sm font-bold ${getScoreColor(sop.effectivenessScore)}`}>{sop.effectivenessScore}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className={`h-2 rounded-full ${getScoreBgColor(sop.effectivenessScore)}`} style={{ width: `${sop.effectivenessScore}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">Completion</span>
                            <span className={`text-sm font-bold ${getScoreColor(sop.completionRate)}`}>{sop.completionRate}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className={`h-2 rounded-full ${getScoreBgColor(sop.completionRate)}`} style={{ width: `${sop.completionRate}%` }}></div>
                          </div>
                        </div>
                      </div>

                      {/* Additional Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm bg-gray-50 rounded-lg p-3">
                        <div>
                          <span className="text-gray-500">Avg Time:</span>
                          <div className="font-bold text-gray-700">{sop.averageTime}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Deviations:</span>
                          <div className="font-bold text-orange-600">{sop.deviations}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Executions:</span>
                          <div className="font-bold text-gray-700">{sop.totalExecutions.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Satisfaction:</span>
                          <div className="font-bold text-gray-700">{sop.userSatisfaction}/5.0</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Benchmark:</span>
                          <div className={`font-bold ${sop.adherenceScore >= sop.benchmarkScore ? 'text-green-600' : 'text-red-600'}`}>
                            {sop.benchmarkScore}%
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-3">
                        <button
                          onClick={() => setSelectedSOP(sop)}
                          className="text-teal-600 hover:text-teal-700 font-semibold text-sm"
                        >
                          View Detailed Analysis →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Deviation Analysis */}
          {activeView === 'deviations' && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Deviation Patterns</h3>
                <p className="text-gray-600">Identify common non-compliance patterns and root causes</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deviationPatterns.map((pattern, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{pattern.type}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-orange-600">{pattern.count}</span>
                          <span className="text-sm text-gray-600">occurrences</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getImpactColor(pattern.impact)}`}>
                        {pattern.impact} Impact
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-gray-600">Trend:</span>
                      <span className={`font-semibold ${
                        pattern.trend === 'Increasing' ? 'text-red-600' :
                        pattern.trend === 'Decreasing' ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {pattern.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Improvement Recommendations */}
          {activeView === 'recommendations' && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Continuous Improvement Recommendations</h3>
                <p className="text-gray-600">AI-powered suggestions to enhance SOP effectiveness</p>
              </div>

              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-semibold">
                            {rec.sopId}
                          </span>
                          <h4 className="font-bold text-gray-800">{rec.title}</h4>
                        </div>
                        <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded mb-3">
                          <div className="flex items-start space-x-2">
                            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-xs font-semibold text-red-700 mb-1">Identified Issue</div>
                              <div className="text-sm text-gray-700">{rec.issue}</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-xs font-semibold text-green-700 mb-1">Recommended Action</div>
                              <div className="text-sm text-gray-700">{rec.recommendation}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className={`ml-4 px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(rec.priority)}`}>
                        {rec.priority} Priority
                      </span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm bg-gray-50 rounded-lg p-3">
                      <div>
                        <span className="text-gray-600">Expected Improvement:</span>
                        <span className="font-bold text-green-600 ml-2">{rec.estimatedImprovement}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Implementation Effort:</span>
                        <span className="font-bold text-gray-700 ml-2">{rec.effort}</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center space-x-2">
                      <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors">
                        Approve & Implement
                      </button>
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors">
                        Schedule Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SOPEffectivenessMonitor;