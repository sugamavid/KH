import React, { useState } from 'react';
import { Star, TrendingUp, Target, Award, FileText } from 'lucide-react';
import { DEMO_PERFORMANCE_REVIEWS, DEMO_EMPLOYEES } from '../../data/hrDemoData';

const PerformanceManagement = () => {
  const [reviews] = useState(DEMO_PERFORMANCE_REVIEWS);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Performance Management</h1>
        <p className="text-slate-600 mt-1">Track and manage employee performance</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <Award className="w-8 h-8 text-blue-600 mb-3" />
          <p className="text-3xl font-bold text-slate-900">{reviews.length}</p>
          <p className="text-sm text-slate-600">Total Reviews</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <Star className="w-8 h-8 text-yellow-600 mb-3" />
          <p className="text-3xl font-bold text-slate-900">4.4</p>
          <p className="text-sm text-slate-600">Average Rating</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <FileText className="w-8 h-8 text-green-600 mb-3" />
          <p className="text-3xl font-bold text-slate-900">{reviews.filter(r => r.status === 'Completed').length}</p>
          <p className="text-sm text-slate-600">Completed</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <Target className="w-8 h-8 text-orange-600 mb-3" />
          <p className="text-3xl font-bold text-slate-900">{reviews.filter(r => r.status === 'Pending').length}</p>
          <p className="text-sm text-slate-600">Pending</p>
        </div>
      </div>

      {/* Reviews List */}
      <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Performance Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review) => {
            const employee = DEMO_EMPLOYEES.find(e => e.id === review.employeeId);
            return (
              <div key={review.id} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-400 transition-all">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                      {review.employeeName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg">{review.employeeName}</h3>
                      <p className="text-sm text-slate-600">{employee?.designation} • {employee?.department}</p>
                      <p className="text-sm text-slate-500 mt-1">Review Period: {review.reviewPeriod}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-lg text-xs font-semibold ${
                    review.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {review.status}
                  </span>
                </div>

                {review.status === 'Completed' && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">{review.overallRating}</p>
                      <p className="text-xs text-slate-600 mt-1">Overall Rating</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{review.kpiScore}%</p>
                      <p className="text-xs text-slate-600 mt-1">KPI Score</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">{review.managerRating}</p>
                      <p className="text-xs text-slate-600 mt-1">Manager Rating</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">{review.peerRating}</p>
                      <p className="text-xs text-slate-600 mt-1">Peer Rating</p>
                    </div>
                  </div>
                )}

                <div className="mt-4 flex space-x-3">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm">
                    View Details
                  </button>
                  {review.status === 'Pending' && (
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm">
                      Start Review
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PerformanceManagement;