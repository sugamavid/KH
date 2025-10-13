import React from 'react';
import { Users, Clock, DollarSign, TrendingUp, AlertCircle, CheckCircle2, Calendar, Briefcase } from 'lucide-react';
import { DEMO_EMPLOYEES, DEMO_LEAVE_APPLICATIONS } from '../../data/hrDemoData';

const HRDashboardHome = () => {
  const stats = [
    { title: 'Total Employees', value: DEMO_EMPLOYEES.length, icon: Users, color: 'blue', change: '+2 this month' },
    { title: 'Present Today', value: '8', icon: CheckCircle2, color: 'green', change: '80% attendance' },
    { title: 'On Leave', value: DEMO_LEAVE_APPLICATIONS.filter(l => l.status === 'Approved').length, icon: Clock, color: 'orange', change: '3 applications' },
    { title: 'Pending Approvals', value: DEMO_LEAVE_APPLICATIONS.filter(l => l.status === 'Pending').length, icon: AlertCircle, color: 'red', change: 'Requires action' }
  ];

  const recentActivities = [
    { action: 'New Employee Onboarded', name: 'Ms. Divya Menon', time: '2 days ago', icon: Users },
    { action: 'Leave Approved', name: 'Mr. Arun Sharma - Sick Leave (3 days)', time: '5 hours ago', icon: CheckCircle2 },
    { action: 'Performance Review Completed', name: 'Ms. Lakshmi Iyer - Q4 2024', time: '1 day ago', icon: TrendingUp },
    { action: 'New Job Posted', name: 'Senior Staff Nurse - 2 positions', time: '3 days ago', icon: Briefcase }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">HR Dashboard</h1>
        <p className="text-slate-600 mt-1">Overview of human resources operations</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-all shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
            <p className="text-sm font-medium text-slate-600 mb-2">{stat.title}</p>
            <p className="text-xs text-slate-500">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <activity.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{activity.action}</p>
                  <p className="text-sm text-slate-600 mt-1">{activity.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm">
              Add New Employee
            </button>
            <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm">
              Approve Leave Requests
            </button>
            <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-sm">
              Process Payroll
            </button>
            <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm">
              Schedule Interview
            </button>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">Upcoming Tasks</p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-slate-700">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                Payroll Due: Jan 30
              </div>
              <div className="flex items-center text-sm text-slate-700">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                Training: Jan 20
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboardHome;