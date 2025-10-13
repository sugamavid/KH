import React, { useState } from 'react';
import { 
  Star, TrendingUp, Target, Award, FileText, Search, Filter, 
  Eye, PlusCircle, CheckCircle, Clock, BarChart3, Download
} from 'lucide-react';
import { DEMO_PERFORMANCE_REVIEWS, DEMO_EMPLOYEES } from '../../data/hrDemoData';

const PerformanceManagement = () => {
  const [activeView, setActiveView] = useState('reviews');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const reviews = DEMO_PERFORMANCE_REVIEWS;
  
  // Mock goal data
  const goals = [
    { id: 'G001', employee: 'Dr. Rajesh Kumar', title: 'Patient Satisfaction Improvement', progress: 85, status: 'On Track', dueDate: '2025-03-31' },
    { id: 'G002', employee: 'Ms. Lakshmi Iyer', title: 'Complete Advanced Training', progress: 60, status: 'On Track', dueDate: '2025-02-28' },
    { id: 'G003', employee: 'Mr. Arun Sharma', title: 'Reduce Processing Time', progress: 40, status: 'At Risk', dueDate: '2025-01-31' }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = searchQuery === '' || review.employeeName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'All' || review.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'from-green-500 to-emerald-500';
    if (progress >= 60) return 'from-blue-500 to-indigo-500';
    if (progress >= 40) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-rose-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Performance Management</h1>
            <p className="text-sm text-slate-600 mt-1">Track employee performance, goals and KPIs</p>
          </div>
          <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center shadow-md">
            <PlusCircle className="w-5 h-5 mr-2" />
            New Review
          </button>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => setActiveView('reviews')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeView === 'reviews' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}>
            <FileText className="w-4 h-4 inline mr-1" />
            Performance Reviews
          </button>
          <button
            onClick={() => setActiveView('goals')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeView === 'goals' ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}>
            <Target className="w-4 h-4 inline mr-1" />
            Goals & KPIs
          </button>
          <button
            onClick={() => setActiveView('analytics')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeView === 'analytics' ? 'bg-green-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}>
            <BarChart3 className="w-4 h-4 inline mr-1" />
            Analytics
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{reviews.length}</p>
            <p className="text-sm text-slate-600 mt-1">Total Reviews</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">4.4</p>
            <p className="text-sm text-slate-600 mt-1">Average Rating</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{reviews.filter(r => r.status === 'Completed').length}</p>
            <p className="text-sm text-slate-600 mt-1">Completed</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{reviews.filter(r => r.status === 'Pending').length}</p>
            <p className="text-sm text-slate-600 mt-1">Pending</p>
          </div>
        </div>

        {activeView === 'reviews' && (
          <>
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by employee name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                  <option>All</option>
                  <option>Completed</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {filteredReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-400 transition-all shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                        {review.employeeName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-bold text-slate-900">{review.employeeName}</h3>
                          <span className="text-xs text-slate-500">{review.id}</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                          <div>
                            <p className="text-xs text-slate-500">Review Period</p>
                            <p className="font-medium text-slate-900">{review.reviewPeriod}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Overall Rating</p>
                            <div className="flex items-center space-x-1">
                              {review.overallRating ? (
                                <>
                                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                  <span className="font-bold text-slate-900">{review.overallRating}/5.0</span>
                                </>
                              ) : (
                                <span className="text-slate-400">Not Rated</span>
                              )}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">KPI Score</p>
                            <p className="font-bold text-blue-600">{review.kpiScore || 'N/A'}%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Review Date</p>
                            <p className="font-medium text-slate-900">{review.reviewDate || 'Pending'}</p>
                          </div>
                        </div>
                        {review.kpiScore && (
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div className={`bg-gradient-to-r ${getProgressColor(review.kpiScore)} h-2 rounded-full`} style={{ width: `${review.kpiScore}%` }}></div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 ml-4">
                      <span className={`px-4 py-2 rounded-lg text-xs font-bold ${
                        review.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {review.status}
                      </span>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <Eye className="w-5 h-5 text-slate-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeView === 'goals' && (
          <div className="space-y-3">
            {goals.map((goal) => (
              <div key={goal.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-400 transition-all shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-bold text-slate-900">{goal.title}</h3>
                        <span className="text-xs text-slate-500">{goal.id}</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">Assigned to: {goal.employee}</p>
                      <div className="flex items-center space-x-4 text-sm mb-3">
                        <span className="text-slate-600">Due: {new Date(goal.dueDate).toLocaleDateString()}</span>
                        <span className="text-slate-400">•</span>
                        <span className={`font-semibold ${
                          goal.status === 'On Track' ? 'text-green-600' : 'text-orange-600'
                        }`}>{goal.status}</span>
                      </div>
                      <div className="mb-2">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-slate-600">Progress</span>
                          <span className="font-bold text-slate-900">{goal.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-3">
                          <div className={`bg-gradient-to-r ${getProgressColor(goal.progress)} h-3 rounded-full`} style={{ width: `${goal.progress}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold">
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeView === 'analytics' && (
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="text-center py-12">
              <TrendingUp className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Performance Analytics</h3>
              <p className="text-slate-600">Detailed analytics and insights coming soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceManagement;