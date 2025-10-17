import React, { useState } from 'react';
import { 
  Users, Clock, DollarSign, TrendingUp, AlertCircle, CheckCircle2, Calendar, 
  Briefcase, FileText, UserPlus, LogOut, Award, Bell, AlertTriangle,
  Download, Upload, Search, Filter, ArrowUpRight, Activity, Target, Zap,
  UserX, UserCheck, Timer, Coffee, Megaphone, FileCheck, ClipboardList,
  TrendingDown, Plus, Send, Eye, Edit, Trash2, PlayCircle, MessageSquare
} from 'lucide-react';
import { DEMO_EMPLOYEES, DEMO_LEAVE_APPLICATIONS } from '../../data/hrDemoData';

const HRDashboardHome = ({ setActiveModule }) => {
  const [activeTab, setActiveTab] = useState('today');
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);

  // Navigation handler
  const handleNavigation = (module) => {
    if (setActiveModule) {
      setActiveModule(module);
    }
  };

  // TODAY'S REAL-TIME DATA
  const todayData = {
    date: new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    totalEmployees: 168,
    present: 156,
    absent: 8,
    onLeave: 4,
    lateComers: 12,
    overtime: 6,
    pendingApprovals: 7
  };

  // LATE COMERS TODAY
  const lateComers = [
    { id: 1, name: 'Rajesh Kumar', dept: 'Nursing', time: '09:45 AM', expected: '09:00 AM', delay: '45 mins', reason: 'Traffic' },
    { id: 2, name: 'Priya Sharma', dept: 'Laboratory', time: '09:30 AM', expected: '09:00 AM', delay: '30 mins', reason: 'Not specified' },
    { id: 3, name: 'Anil Menon', dept: 'Emergency', time: '08:20 AM', expected: '08:00 AM', delay: '20 mins', reason: 'Bus delay' },
    { id: 4, name: 'Divya Nair', dept: 'Radiology', time: '09:15 AM', expected: '09:00 AM', delay: '15 mins', reason: 'Personal' },
    { id: 5, name: 'Suresh Pillai', dept: 'ICU', time: '08:25 AM', expected: '08:00 AM', delay: '25 mins', reason: 'Not specified' }
  ];

  // ABSENTEES TODAY
  const absentees = [
    { id: 1, name: 'Lakshmi Iyer', dept: 'Nursing', reason: 'Sick Leave', status: 'Approved', contact: '+91 98765 43210' },
    { id: 2, name: 'Mohanan Das', dept: 'Support', reason: 'No call/No show', status: 'Unmarked', contact: '+91 98765 43211', alert: true },
    { id: 3, name: 'Sreeja Thomas', dept: 'Admin', reason: 'Emergency Leave', status: 'Pending', contact: '+91 98765 43212' },
    { id: 4, name: 'Vinod Kumar', dept: 'Maintenance', reason: 'Casual Leave', status: 'Approved', contact: '+91 98765 43213' }
  ];

  // OVERTIME WORKERS (This week)
  const overtimeWorkers = [
    { id: 1, name: 'Dr. Meera Nair', dept: 'Emergency', hours: 18, amount: '₹9,000', week: 'This week', status: 'Pending approval' },
    { id: 2, name: 'Nurse Anita Roy', dept: 'ICU', hours: 15, amount: '₹6,000', week: 'This week', status: 'Approved' },
    { id: 3, name: 'Lab Tech Ramesh', dept: 'Laboratory', hours: 12, amount: '₹4,800', week: 'This week', status: 'Approved' },
    { id: 4, name: 'Radha Krishna', dept: 'OT', hours: 10, amount: '₹5,000', week: 'This week', status: 'Pending approval' }
  ];

  // PENDING APPROVALS
  const pendingApprovals = [
    { id: 1, type: 'Leave', employee: 'Rajesh Kumar', detail: 'Annual Leave - 5 days (Feb 15-19)', urgent: true, time: '2 hours ago' },
    { id: 2, type: 'Overtime', employee: 'Dr. Meera Nair', detail: '18 hours overtime claim', urgent: false, time: '5 hours ago' },
    { id: 3, type: 'Document', employee: 'Priya Sharma', detail: 'Medical certificate submission', urgent: false, time: '1 day ago' },
    { id: 4, type: 'Shift Change', employee: 'Anil Menon', detail: 'Night shift to day shift request', urgent: true, time: '3 hours ago' },
    { id: 5, type: 'Leave', employee: 'Divya Nair', detail: 'Sick Leave - 2 days', urgent: true, time: '1 hour ago' }
  ];

  // ANNOUNCEMENTS
  const announcements = [
    { id: 1, title: 'NABH Audit Next Week', message: 'All documents must be ready by Friday', priority: 'high', date: 'Today', author: 'HR Manager' },
    { id: 2, title: 'New Payroll Schedule', message: 'Salary processing moved to 28th of every month', priority: 'medium', date: 'Yesterday', author: 'Finance' },
    { id: 3, title: 'Staff Meeting - Feb 10', message: 'Mandatory attendance for all HODs', priority: 'high', date: '2 days ago', author: 'Administration' }
  ];

  // UPCOMING EVENTS
  const upcomingEvents = [
    { id: 1, type: 'birthday', name: 'Rajesh Kumar', dept: 'Nursing', date: 'Today', icon: '🎂' },
    { id: 2, type: 'anniversary', name: 'Dr. Priya Sharma', dept: 'Cardiology', date: 'Tomorrow', years: '5 years', icon: '🎉' },
    { id: 3, type: 'retirement', name: 'Mr. Suresh Nair', dept: 'Admin', date: 'Next week', icon: '👋' },
    { id: 4, type: 'birthday', name: 'Nurse Anita', dept: 'ICU', date: 'Feb 25', icon: '🎂' }
  ];

  // QUICK ACTIONS for HR Admin
  const quickActions = [
    { 
      title: 'Mark Attendance', 
      icon: UserCheck, 
      color: 'blue', 
      description: 'Quick attendance marking',
      action: () => alert('Opening Attendance Marker...')
    },
    { 
      title: 'Approve Leaves', 
      icon: CheckCircle2, 
      color: 'green', 
      description: pendingApprovals.filter(a => a.type === 'Leave').length + ' pending',
      action: () => handleNavigation('attendance')
    },
    { 
      title: 'Generate Payslip', 
      icon: FileText, 
      color: 'purple', 
      description: 'Salary slip generation',
      action: () => handleNavigation('payroll')
    },
    { 
      title: 'New Announcement', 
      icon: Megaphone, 
      color: 'orange', 
      description: 'Broadcast message',
      action: () => setShowAnnouncementModal(true)
    },
    { 
      title: 'Onboard Employee', 
      icon: UserPlus, 
      color: 'indigo', 
      description: 'Add new employee',
      action: () => handleNavigation('employees')
    },
    { 
      title: 'Attendance Report', 
      icon: ClipboardList, 
      color: 'teal', 
      description: 'Download reports',
      action: () => handleNavigation('reports')
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-500', light: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      orange: { bg: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      indigo: { bg: 'bg-indigo-500', light: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
      teal: { bg: 'bg-teal-500', light: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
      red: { bg: 'bg-red-500', light: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' }
    };
    return colors[color] || colors.blue;
  };

  // Executive Summary KPIs
  const executiveKPIs = [
    { 
      title: 'Active Employees', 
      value: DEMO_EMPLOYEES.filter(e => e.status === 'Active').length, 
      total: DEMO_EMPLOYEES.length,
      icon: Users, 
      color: 'blue',
      trend: '+2',
      trendLabel: 'vs last month',
      percentage: ((DEMO_EMPLOYEES.filter(e => e.status === 'Active').length / DEMO_EMPLOYEES.length) * 100).toFixed(0),
      module: 'employees'
    },
    { 
      title: 'Attendance Rate', 
      value: '92%', 
      icon: CheckCircle2, 
      color: 'green',
      trend: '+3%',
      trendLabel: 'vs last month',
      status: 'Excellent',
      module: 'attendance'
    },
    { 
      title: 'Pending Clearances', 
      value: '3', 
      icon: AlertCircle, 
      color: 'orange',
      trend: '-2',
      trendLabel: 'vs last week',
      urgent: true,
      module: 'employees'
    },
    { 
      title: 'Payroll Status', 
      value: 'On Track', 
      icon: DollarSign, 
      color: 'emerald',
      subtitle: 'Next: Jan 30, 2025',
      amount: '₹8.1L',
      module: 'payroll'
    }
  ];

  // Quick Action Cards
  const quickActions = [
    { 
      title: 'Employee Management', 
      icon: UserPlus, 
      color: 'blue', 
      description: 'Manage staff records',
      module: 'employees'
    },
    { 
      title: 'Attendance & Leave', 
      icon: Calendar, 
      color: 'green', 
      description: '2 pending approvals',
      module: 'attendance',
      badge: '2'
    },
    { 
      title: 'Payroll', 
      icon: DollarSign, 
      color: 'purple', 
      description: 'Salary processing',
      module: 'payroll'
    },
    { 
      title: 'By-Laws', 
      icon: FileText, 
      color: 'indigo', 
      description: '30 comprehensive sections',
      module: 'bylaws'
    },
    { 
      title: 'SOPs', 
      icon: Briefcase, 
      color: 'teal', 
      description: '75 standard procedures',
      module: 'sops'
    },
    { 
      title: 'Annexures', 
      icon: Upload, 
      color: 'orange', 
      description: '76 professional forms',
      module: 'annexures'
    },
    { 
      title: 'Performance', 
      icon: TrendingUp, 
      color: 'emerald', 
      description: 'Appraisals & KPIs',
      module: 'performance'
    },
    { 
      title: 'Recruitment', 
      icon: Users, 
      color: 'pink', 
      description: 'Hiring management',
      module: 'recruitment'
    },
    { 
      title: 'Training', 
      icon: Award, 
      color: 'cyan', 
      description: '16 training programs',
      module: 'training'
    },
    { 
      title: 'Departments', 
      icon: Target, 
      color: 'violet', 
      description: 'Department management',
      module: 'departments'
    },
    { 
      title: 'Reports', 
      icon: Activity, 
      color: 'amber', 
      description: 'Analytics & insights',
      module: 'reports'
    },
    { 
      title: 'Tools', 
      icon: Briefcase, 
      color: 'rose', 
      description: 'HR calculators',
      module: 'tools'
    }
  ];

  // Alerts & Notifications
  const alerts = [
    { type: 'urgent', title: 'Contract Expiring', message: '2 employment contracts expire this month', icon: AlertTriangle, module: 'employees' },
    { type: 'warning', title: 'Document Renewal', message: '5 compliance certificates need renewal', icon: FileText, module: 'documents' },
    { type: 'info', title: 'Training Due', message: 'Infection Control training starts in 5 days', icon: Award, module: 'training' }
  ];

  // Recent Activities
  const recentActivities = [
    { action: 'Employee Onboarded', name: 'Ms. Divya Menon - Receptionist', time: '2 hours ago', type: 'success' },
    { action: 'Leave Approved', name: 'Mr. Arun Sharma - Sick Leave (3 days)', time: '5 hours ago', type: 'info' },
    { action: 'Salary Slip Generated', name: 'December 2024 - 10 employees', time: '1 day ago', type: 'success' },
    { action: 'Document Uploaded', name: 'Annual Policy Review - HR Department', time: '2 days ago', type: 'info' },
    { action: 'Performance Review', name: 'Ms. Lakshmi Iyer - Q4 2024', time: '3 days ago', type: 'success' }
  ];

  // Pending Tasks
  const pendingTasks = [
    { task: 'Complete onboarding for 1 new hire', priority: 'high', dueDate: 'Today' },
    { task: 'Review and approve 2 leave requests', priority: 'high', dueDate: 'Today' },
    { task: 'Process monthly payroll', priority: 'medium', dueDate: 'Jan 30' },
    { task: 'Conduct exit interview - Dr. Kumar', priority: 'medium', dueDate: 'Tomorrow' },
    { task: 'Upload compliance certificates', priority: 'low', dueDate: 'This Week' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 border-b-4 border-blue-400 shadow-xl px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-white">HR Admin Dashboard</h1>
            <p className="text-blue-100 mt-1 font-medium">{todayData.date}</p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => handleNavigation('intelligence')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-xl hover:shadow-2xl transition-all font-bold text-sm flex items-center animate-pulse hover:animate-none group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              CEO Intelligence Center
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
            <button className="px-4 py-2.5 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/30 transition-all font-semibold text-sm flex items-center border border-white/30">
              <Download className="w-4 h-4 mr-2" />
              Reports
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Executive Summary - KPI Cards */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4">Executive Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {executiveKPIs.map((kpi, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigation(kpi.module)}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer text-left w-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-11 h-11 rounded-lg ${getColorClasses(kpi.color, 'light')} flex items-center justify-center`}>
                    <kpi.icon className={`w-6 h-6 ${getColorClasses(kpi.color, 'text')}`} />
                  </div>
                  {kpi.urgent && (
                    <span className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs font-bold">URGENT</span>
                  )}
                </div>
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">{kpi.value}</h3>
                  {kpi.total && <p className="text-xs text-slate-500">of {kpi.total} total</p>}
                </div>
                <p className="text-sm font-medium text-slate-600 mb-2">{kpi.title}</p>
                <div className="flex items-center justify-between text-xs">
                  {kpi.trend && (
                    <span className={`font-semibold ${kpi.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {kpi.trend} {kpi.trendLabel}
                    </span>
                  )}
                  {kpi.subtitle && <span className="text-slate-500">{kpi.subtitle}</span>}
                  {kpi.amount && <span className="font-bold text-slate-900">{kpi.amount}</span>}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions Widget Section */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, idx) => (
              <button 
                key={idx}
                onClick={() => handleNavigation(action.module)}
                className="bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group text-left relative cursor-pointer"
              >
                {action.badge && (
                  <span className="absolute top-2 right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {action.badge}
                  </span>
                )}
                <div className={`w-12 h-12 rounded-lg ${getColorClasses(action.color, 'light')} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <action.icon className={`w-6 h-6 ${getColorClasses(action.color, 'text')}`} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{action.title}</h3>
                <p className="text-xs text-slate-600">{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Tab-Based Categories */}
        <div>
          <div className="bg-white rounded-t-xl border border-slate-200 border-b-0">
            <div className="flex space-x-1 p-2">
              {[
                { id: 'operations', label: 'HR Operations', icon: Activity },
                { id: 'payroll', label: 'Leave & Payroll', icon: DollarSign },
                { id: 'documents', label: 'Documents', icon: FileText },
                { id: 'reports', label: 'Reports', icon: TrendingUp }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-b-xl border border-slate-200 p-6">
            {activeTab === 'operations' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Alerts & Notifications */}
                <div className="lg:col-span-2">
                  <h3 className="text-base font-bold text-slate-900 mb-4">Alerts & Notifications</h3>
                  <div className="space-y-3">
                    {alerts.map((alert, idx) => (
                      <div key={idx} className={`p-4 rounded-lg border-l-4 ${
                        alert.type === 'urgent' ? 'bg-red-50 border-red-500' :
                        alert.type === 'warning' ? 'bg-orange-50 border-orange-500' :
                        'bg-blue-50 border-blue-500'
                      }`}>
                        <div className="flex items-start space-x-3">
                          <alert.icon className={`w-5 h-5 mt-0.5 ${
                            alert.type === 'urgent' ? 'text-red-600' :
                            alert.type === 'warning' ? 'text-orange-600' :
                            'text-blue-600'
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm font-bold text-slate-900">{alert.title}</p>
                            <p className="text-sm text-slate-600 mt-1">{alert.message}</p>
                          </div>
                          <button 
                            onClick={() => handleNavigation(alert.module)}
                            className="text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-base font-bold text-slate-900 mb-4">Recent Activities</h3>
                    <div className="space-y-2">
                      {recentActivities.map((activity, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                          }`}></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                            <p className="text-xs text-slate-600">{activity.name}</p>
                          </div>
                          <span className="text-xs text-slate-500">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pending Tasks */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-4">Pending Tasks</h3>
                  <div className="space-y-3">
                    {pendingTasks.map((task, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="flex items-start justify-between mb-2">
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                            task.priority === 'high' ? 'bg-red-100 text-red-700' :
                            task.priority === 'medium' ? 'bg-orange-100 text-orange-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {task.priority.toUpperCase()}
                          </span>
                          <span className="text-xs text-slate-500">{task.dueDate}</span>
                        </div>
                        <p className="text-sm font-medium text-slate-900">{task.task}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'payroll' && (
              <div className="text-center py-12">
                <DollarSign className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Leave & Payroll Overview</h3>
                <p className="text-slate-600 mb-4">Navigate to specific modules for detailed operations</p>
                <div className="flex justify-center space-x-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Go to Payroll
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Manage Leaves
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Document Management</h3>
                <p className="text-slate-600 mb-4">Central repository for all HR documents and compliance files</p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Access Document Center
                </button>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Reports & Analytics</h3>
                <p className="text-slate-600 mb-4">Comprehensive insights and data-driven decisions</p>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  View Analytics
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboardHome;