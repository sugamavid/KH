import React, { useState } from 'react';
import { X, BarChart3, TrendingUp, PieChart, Download, Filter, Calendar, Users, Target, Award } from 'lucide-react';

const SOPAnalyticsDashboard = ({ isOpen, onClose, onNavigate }) => {
  const [activeView, setActiveView] = useState('overview');
  const [timeRange, setTimeRange] = useState('month');

  // Mock analytics data
  const overviewMetrics = {
    totalSOPs: 12,
    activeSOPs: 10,
    underReview: 2,
    totalExecutions: 12543,
    avgComplianceRate: 93,
    totalTrainedUsers: 524,
    avgEffectivenessScore: 91,
  };

  const sopPerformance = [
    { sopId: 'SOP-003', title: 'Leave Application Process', executions: 1247, compliance: 94, effectiveness: 91, avgTime: '12 mins', deviations: 8 },
    { sopId: 'SOP-005', title: 'Emergency Response', executions: 342, compliance: 98, effectiveness: 97, avgTime: '8 mins', deviations: 2 },
    { sopId: 'SOP-009', title: 'Data Security Procedure', executions: 2156, compliance: 88, effectiveness: 85, avgTime: '25 mins', deviations: 24 },
    { sopId: 'SOP-011', title: 'Medication Administration', executions: 5432, compliance: 96, effectiveness: 95, avgTime: '15 mins', deviations: 5 },
    { sopId: 'SOP-001', title: 'Employee Onboarding', executions: 156, compliance: 92, effectiveness: 89, avgTime: '45 mins', deviations: 12 },
    { sopId: 'SOP-002', title: 'Performance Review Process', executions: 524, compliance: 85, effectiveness: 82, avgTime: '60 mins', deviations: 32 },
  ];

  const categoryBreakdown = [
    { category: 'HR Operations', count: 4, compliance: 90, color: 'bg-blue-500' },
    { category: 'Clinical', count: 3, compliance: 96, color: 'bg-green-500' },
    { category: 'Safety', count: 2, compliance: 98, color: 'bg-red-500' },
    { category: 'IT', count: 1, compliance: 88, color: 'bg-purple-500' },
    { category: 'Operations', count: 1, compliance: 92, color: 'bg-yellow-500' },
    { category: 'Environmental', count: 1, compliance: 85, color: 'bg-teal-500' },
  ];

  const complianceTrends = [
    { month: 'Jul', rate: 89 },
    { month: 'Aug', rate: 90 },
    { month: 'Sep', rate: 91 },
    { month: 'Oct', rate: 92 },
    { month: 'Nov', rate: 91 },
    { month: 'Dec', rate: 93 },
    { month: 'Jan', rate: 93 },
  ];

  const userAdoptionMetrics = {
    totalUsers: 524,
    activeUsers: 498,
    certifiedUsers: 487,
    trainingCompletion: 95,
    avgSatisfaction: 4.4,
  };

  const topPerformers = [
    { sopId: 'SOP-005', title: 'Emergency Response', score: 98 },
    { sopId: 'SOP-011', title: 'Medication Administration', score: 96 },
    { sopId: 'SOP-003', title: 'Leave Application Process', score: 94 },
  ];

  const improvementAreas = [
    { sopId: 'SOP-002', title: 'Performance Review Process', score: 85, issue: 'High deviation rate' },
    { sopId: 'SOP-009', title: 'Data Security Procedure', score: 88, issue: 'Below benchmark' },
    { sopId: 'SOP-001', title: 'Employee Onboarding', score: 92, issue: 'Documentation delays' },
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-bold">SOP Analytics Dashboard</h2>
              <p className="text-sm text-cyan-100">Performance Metrics & Insights</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg font-semibold focus:outline-none"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
            <button onClick={onClose} className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* View Tabs */}
        <div className="bg-gray-50 border-b border-gray-200 px-6">
          <div className="flex space-x-6">
            {['overview', 'compliance', 'performance', 'adoption'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`py-3 px-4 font-semibold border-b-2 transition-colors ${
                  activeView === view
                    ? 'border-cyan-600 text-cyan-600'
                    : 'border-transparent text-gray-600 hover:text-cyan-600'
                }`}
              >
                {view === 'overview' && 'Executive Overview'}
                {view === 'compliance' && 'Compliance Trends'}
                {view === 'performance' && 'SOP Performance'}
                {view === 'adoption' && 'User Adoption'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 160px)' }}>
          {/* Executive Overview */}
          {activeView === 'overview' && (
            <div>
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-600">TOTAL</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">{overviewMetrics.totalSOPs}</div>
                  <div className="text-sm text-gray-600">Total SOPs</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Target className="w-8 h-8 text-green-600" />
                    <span className="text-xs font-semibold text-green-600">AVG</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">{overviewMetrics.avgComplianceRate}%</div>
                  <div className="text-sm text-gray-600">Compliance Rate</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                    <span className="text-xs font-semibold text-purple-600">SCORE</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">{overviewMetrics.avgEffectivenessScore}%</div>
                  <div className="text-sm text-gray-600">Avg Effectiveness</div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="w-8 h-8 text-orange-600" />
                    <span className="text-xs font-semibold text-orange-600">USERS</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">{overviewMetrics.totalTrainedUsers}</div>
                  <div className="text-sm text-gray-600">Trained Users</div>
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">SOP Distribution by Category</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {categoryBreakdown.map((cat, index) => (
                    <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-gray-800">{cat.category}</h4>
                        <div className={`w-12 h-12 ${cat.color} rounded-lg flex items-center justify-center text-white font-bold text-xl`}>
                          {cat.count}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Avg Compliance:</span>
                        <span className={`font-bold ${getScoreColor(cat.compliance)}`}>{cat.compliance}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Performers & Improvement Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-800">Top Performing SOPs</h3>
                  </div>
                  <div className="space-y-3">
                    {topPerformers.map((sop, index) => (
                      <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-gray-800">{sop.title}</div>
                            <div className="text-sm text-gray-600">{sop.sopId}</div>
                          </div>
                          <div className="text-2xl font-bold text-green-600">{sop.score}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                    <h3 className="text-lg font-bold text-gray-800">Improvement Opportunities</h3>
                  </div>
                  <div className="space-y-3">
                    {improvementAreas.map((sop, index) => (
                      <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="font-bold text-gray-800">{sop.title}</div>
                            <div className="text-sm text-gray-600">{sop.sopId}</div>
                          </div>
                          <div className="text-2xl font-bold text-orange-600">{sop.score}%</div>
                        </div>
                        <div className="text-sm text-red-600">⚠️ {sop.issue}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Compliance Trends */}
          {activeView === 'compliance' && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Compliance Trends Over Time</h3>
                <p className="text-gray-600">Track compliance rate changes across all SOPs</p>
              </div>

              {/* Trend Chart Visualization (Simplified) */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
                <div className="flex items-end justify-between space-x-2" style={{ height: '300px' }}>
                  {complianceTrends.map((data, index) => (
                    <div key={index} className="flex flex-col items-center justify-end flex-1">
                      <div className="text-sm font-bold text-green-600 mb-2">{data.rate}%</div>
                      <div
                        className="w-full bg-gradient-to-t from-green-500 to-green-300 rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${(data.rate / 100) * 100}%` }}
                      ></div>
                      <div className="text-xs text-gray-600 mt-2 font-semibold">{data.month}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance by SOP */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Compliance by SOP</h3>
                <div className="space-y-3">
                  {sopPerformance.map((sop, index) => (
                    <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-bold text-gray-800">{sop.title}</span>
                          <span className="text-sm text-gray-600 ml-2">({sop.sopId})</span>
                        </div>
                        <span className={`text-lg font-bold ${getScoreColor(sop.compliance)}`}>{sop.compliance}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${getScoreBgColor(sop.compliance)}`}
                          style={{ width: `${sop.compliance}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SOP Performance */}
          {activeView === 'performance' && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Detailed SOP Performance Metrics</h3>
                <p className="text-gray-600">Comprehensive performance analysis for each SOP</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">SOP</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Executions</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Compliance</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Effectiveness</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Avg Time</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Deviations</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {sopPerformance.map((sop, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="font-bold">{sop.sopId}</div>
                          <div className="text-xs text-gray-500">{sop.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700">{sop.executions.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-sm font-bold ${getScoreColor(sop.compliance)}`}>{sop.compliance}%</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-sm font-bold ${getScoreColor(sop.effectiveness)}`}>{sop.effectiveness}%</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{sop.avgTime}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold">
                            {sop.deviations}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* User Adoption */}
          {activeView === 'adoption' && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">User Adoption Metrics</h3>
                <p className="text-gray-600">Track employee engagement and training completion</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-6">
                  <div className="text-center">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <div className="text-4xl font-bold text-gray-800 mb-2">{userAdoptionMetrics.totalUsers}</div>
                    <div className="text-sm text-gray-600">Total Users</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6">
                  <div className="text-center">
                    <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <div className="text-4xl font-bold text-gray-800 mb-2">{userAdoptionMetrics.activeUsers}</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                    <div className="text-xs text-green-600 mt-1">
                      {((userAdoptionMetrics.activeUsers / userAdoptionMetrics.totalUsers) * 100).toFixed(0)}% adoption
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-6">
                  <div className="text-center">
                    <Award className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <div className="text-4xl font-bold text-gray-800 mb-2">{userAdoptionMetrics.certifiedUsers}</div>
                    <div className="text-sm text-gray-600">Certified Users</div>
                    <div className="text-xs text-purple-600 mt-1">
                      {((userAdoptionMetrics.certifiedUsers / userAdoptionMetrics.totalUsers) * 100).toFixed(0)}% certified
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Training Completion Rate</h4>
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative w-48 h-48">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="96" cy="96" r="80" stroke="#E5E7EB" strokeWidth="16" fill="none" />
                        <circle
                          cx="96"
                          cy="96"
                          r="80"
                          stroke="#10B981"
                          strokeWidth="16"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 80}`}
                          strokeDashoffset={`${2 * Math.PI * 80 * (1 - userAdoptionMetrics.trainingCompletion / 100)}`}
                          className="transition-all duration-1000"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-gray-800">{userAdoptionMetrics.trainingCompletion}%</div>
                          <div className="text-sm text-gray-600">Complete</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-4">User Satisfaction</h4>
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-yellow-500 mb-2">{userAdoptionMetrics.avgSatisfaction}</div>
                      <div className="text-yellow-500 text-2xl mb-2">★★★★☆</div>
                      <div className="text-sm text-gray-600">Out of 5.0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">Last updated: {new Date().toLocaleString()}</div>
          <div className="flex items-center space-x-3">
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export Analytics Report</span>
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
              Schedule Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOPAnalyticsDashboard;