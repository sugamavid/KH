import React, { useState } from 'react';
import { 
  FileText, Search, ArrowRight, TrendingUp, Clock, CheckCircle, 
  Users, Calendar, Award, AlertCircle, Download, Sparkles, Zap
} from 'lucide-react';
import InteractiveFormViewer from './InteractiveFormViewer';
import formTemplates, { formScenarios } from '../../data/formTemplates';

const HRAnnexures = ({ setActiveModule }) => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for dashboard stats
  const dashboardStats = {
    pendingForms: 5,
    submittedThisMonth: 23,
    approvedForms: 18,
    deadlinesThisWeek: 2
  };

  // Popular forms
  const popularForms = [
    { key: 'leaveApplication', title: 'Leave Application', uses: 156, trend: '+12%' },
    { key: 'performanceAppraisal', title: 'Performance Appraisal', uses: 89, trend: '+8%' },
    { key: 'salaryCertificate', title: 'Salary Certificate', uses: 67, trend: '+15%' },
    { key: 'overtimeAuthorization', title: 'Overtime Authorization', uses: 54, trend: '+5%' },
  ];

  // Recent activity
  const recentActivity = [
    { form: 'Leave Application', action: 'Submitted', time: '2 hours ago', status: 'pending' },
    { form: 'Training Nomination', action: 'Approved', time: '5 hours ago', status: 'approved' },
    { form: 'Transfer Request', action: 'Under Review', time: '1 day ago', status: 'review' },
  ];

  const getFormByKey = (key) => {
    return formTemplates[key];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
        
        <div className="relative px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_project-hub-123/artifacts/mpnrrrfw_images.jpeg" 
                  alt="Koyili Hospital" 
                  className="w-20 h-20 bg-white rounded-xl p-2 shadow-2xl"
                />
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">Administrative Annexures</h1>
                  <p className="text-blue-100 text-lg">Interactive Forms & Templates Portal</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl px-6 py-3 border border-white border-opacity-30">
                  <div className="text-white text-sm mb-1">Active Forms</div>
                  <div className="text-3xl font-bold text-white">35+</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl px-6 py-3 border border-white border-opacity-30">
                  <div className="text-white text-sm mb-1">Categories</div>
                  <div className="text-3xl font-bold text-white">9</div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search forms by name, category, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-5 rounded-2xl border-0 shadow-2xl text-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Quick Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-10 h-10" />
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-bold">ACTION NEEDED</span>
            </div>
            <div className="text-4xl font-bold mb-2">{dashboardStats.pendingForms}</div>
            <div className="text-sm opacity-90">Pending Forms</div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-10 h-10" />
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-bold">APPROVED</span>
            </div>
            <div className="text-4xl font-bold mb-2">{dashboardStats.approvedForms}</div>
            <div className="text-sm opacity-90">Approved This Month</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-10 h-10" />
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-bold">ACTIVITY</span>
            </div>
            <div className="text-4xl font-bold mb-2">{dashboardStats.submittedThisMonth}</div>
            <div className="text-sm opacity-90">Submitted This Month</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <AlertCircle className="w-10 h-10" />
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-bold">UPCOMING</span>
            </div>
            <div className="text-4xl font-bold mb-2">{dashboardStats.deadlinesThisWeek}</div>
            <div className="text-sm opacity-90">Deadlines This Week</div>
          </div>
        </div>

        {/* Scenario-Based Cards */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">What would you like to do today?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formScenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-transparent hover:scale-105 transition-all cursor-pointer overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${scenario.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative">
                  <div className="text-5xl mb-4">{scenario.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{scenario.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{scenario.description}</p>
                  <div className="flex items-center text-sm font-semibold text-purple-600 group-hover:text-purple-700">
                    <span>View Forms</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="text-xs text-gray-500">{scenario.forms.length} forms available</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Forms */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Popular Forms</h2>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1">
                <span>View All</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
              <div className="space-y-4">
                {popularForms.map((form, idx) => {
                  const formTemplate = getFormByKey(form.key);
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedForm(formTemplate)}
                      className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 border-2 border-transparent hover:border-blue-200 transition-all group text-left"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 group-hover:text-blue-600">{form.title}</div>
                          <div className="text-sm text-gray-500">{form.uses} uses this month</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-green-600 font-semibold text-sm">
                          <TrendingUp className="w-4 h-4" />
                          <span>{form.trend}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
              <div className="space-y-4">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activity.status === 'pending' ? 'bg-orange-100 text-orange-600' :
                      activity.status === 'approved' ? 'bg-green-100 text-green-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {activity.status === 'pending' && <Clock className="w-5 h-5" />}
                      {activity.status === 'approved' && <CheckCircle className="w-5 h-5" />}
                      {activity.status === 'review' && <FileText className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">{activity.form}</div>
                      <div className="text-xs text-gray-600">{activity.action}</div>
                      <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center justify-center space-x-1">
                <span>View All Activity</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* All Forms Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">All Forms & Templates</h2>
            </div>
            <div className="flex items-center space-x-2">
              <select className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600">
                <option>All Categories</option>
                <option>Recruitment</option>
                <option>Leave Management</option>
                <option>Performance</option>
                <option>Training</option>
                <option>Separation</option>
                <option>Compliance</option>
                <option>Operations</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(formTemplates).map(([key, form]) => (
              <button
                key={key}
                onClick={() => setSelectedForm(form)}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-indigo-300 transition-all text-left group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
                    {form.code}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                  {form.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{form.category}</span>
                  <span>{form.sections.length} sections</span>
                </div>
                <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  <Zap className="w-4 h-4 mr-2" />
                  <span>Fill Form</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Help with Forms?</h3>
              <p className="text-blue-100 mb-4">Our HR team is here to assist you with any queries</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Contact HR Support
              </button>
            </div>
            <div className="hidden lg:block">
              <Users className="w-32 h-32 opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Form Modal */}
      {selectedForm && (
        <InteractiveFormViewer
          form={selectedForm}
          onClose={() => setSelectedForm(null)}
        />
      )}
    </div>
  );
};

export default HRAnnexures;
