import React, { useState } from 'react';
import { 
  Users, Clock, DollarSign, TrendingUp, AlertCircle, CheckCircle2, Calendar, 
  Briefcase, FileText, UserPlus, Award, Bell, AlertTriangle,
  Download, Zap, ArrowUpRight, UserX, UserCheck, Timer, 
  Megaphone, ClipboardList, Plus, Eye, Phone, Mail, X, Send
} from 'lucide-react';

const HRDashboardHome = ({ setActiveModule }) => {
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [announcementText, setAnnouncementText] = useState('');
  
  const handleNavigation = (module) => {
    if (setActiveModule) {
      setActiveModule(module);
    }
  };

  // TODAY'S REAL-TIME STATS
  const todayStats = {
    date: new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    totalEmployees: 168,
    present: 156,
    absent: 8,
    onLeave: 4,
    lateComers: 12,
    earlyExits: 3,
    overtime: 6
  };

  // LIVE ATTENDANCE METRICS
  const attendanceMetrics = [
    { 
      label: 'Present Today', 
      value: todayStats.present, 
      total: todayStats.totalEmployees,
      percentage: Math.round((todayStats.present / todayStats.totalEmployees) * 100),
      icon: UserCheck, 
      color: 'green',
      trend: '+2 vs yesterday'
    },
    { 
      label: 'Late Arrivals', 
      value: todayStats.lateComers, 
      icon: Clock, 
      color: 'orange',
      trend: '+5 vs yesterday',
      alert: true
    },
    { 
      label: 'Absent', 
      value: todayStats.absent, 
      icon: UserX, 
      color: 'red',
      trend: '-1 vs yesterday'
    },
    { 
      label: 'On Leave', 
      value: todayStats.onLeave, 
      icon: Calendar, 
      color: 'blue',
      trend: 'Same as yesterday'
    },
    { 
      label: 'Overtime Active', 
      value: todayStats.overtime, 
      icon: Timer, 
      color: 'purple',
      trend: '+2 vs yesterday'
    }
  ];

  // LATE COMERS TODAY
  const lateComers = [
    { id: 1, name: 'Rajesh Kumar', dept: 'Nursing', role: 'Staff Nurse', time: '09:45 AM', expected: '09:00 AM', delay: '45 mins', reason: 'Traffic jam', phone: '+91 98765 43210' },
    { id: 2, name: 'Priya Sharma', dept: 'Laboratory', role: 'Lab Tech', time: '09:30 AM', expected: '09:00 AM', delay: '30 mins', reason: 'Family emergency', phone: '+91 98765 43211' },
    { id: 3, name: 'Anil Menon', dept: 'Emergency', role: 'Physician', time: '08:20 AM', expected: '08:00 AM', delay: '20 mins', reason: 'Bus delayed', phone: '+91 98765 43212' },
    { id: 4, name: 'Divya Nair', dept: 'Radiology', role: 'Radiologist', time: '09:15 AM', expected: '09:00 AM', delay: '15 mins', reason: 'Personal work', phone: '+91 98765 43213' },
    { id: 5, name: 'Suresh Pillai', dept: 'ICU', role: 'Nurse', time: '08:25 AM', expected: '08:00 AM', delay: '25 mins', reason: 'Not specified', phone: '+91 98765 43214' }
  ];

  // ABSENTEES TODAY
  const absentees = [
    { id: 1, name: 'Lakshmi Iyer', dept: 'Nursing', role: 'Staff Nurse', reason: 'Sick Leave', status: 'Approved', contact: '+91 98765 54321', daysOff: 2, alert: false },
    { id: 2, name: 'Mohanan Das', dept: 'Support', role: 'Janitor', reason: 'No call/No show', status: 'Unmarked', contact: '+91 98765 54322', daysOff: 1, alert: true },
    { id: 3, name: 'Sreeja Thomas', dept: 'Admin', role: 'Receptionist', reason: 'Emergency Leave', status: 'Pending', contact: '+91 98765 54323', daysOff: 1, alert: false },
    { id: 4, name: 'Vinod Kumar', dept: 'Maintenance', role: 'Technician', reason: 'Casual Leave', status: 'Approved', contact: '+91 98765 54324', daysOff: 1, alert: false }
  ];

  // OVERTIME WORKERS (This Week)
  const overtimeWorkers = [
    { id: 1, name: 'Dr. Meera Nair', dept: 'Emergency', role: 'Senior Doctor', hours: 18.5, rate: 500, amount: 9250, week: 'This week', status: 'Pending', days: 4 },
    { id: 2, name: 'Nurse Anita Roy', dept: 'ICU', role: 'Head Nurse', hours: 15, rate: 400, amount: 6000, week: 'This week', status: 'Approved', days: 5 },
    { id: 3, name: 'Ramesh Kumar', dept: 'Laboratory', role: 'Lab Manager', hours: 12, rate: 400, amount: 4800, week: 'This week', status: 'Approved', days: 3 },
    { id: 4, name: 'Radha Krishna', dept: 'OT', role: 'OT Technician', hours: 10, rate: 500, amount: 5000, week: 'This week', status: 'Pending', days: 3 }
  ];

  // PENDING APPROVALS
  const pendingApprovals = [
    { id: 1, type: 'Leave', employee: 'Rajesh Kumar', detail: 'Annual Leave - 5 days (Feb 15-19)', dept: 'Nursing', urgent: true, time: '2 hours ago', priority: 'high' },
    { id: 2, type: 'Overtime', employee: 'Dr. Meera Nair', detail: '18.5 hours OT claim - ₹9,250', dept: 'Emergency', urgent: false, time: '5 hours ago', priority: 'medium' },
    { id: 3, type: 'Shift Change', employee: 'Anil Menon', detail: 'Night → Day shift swap request', dept: 'Emergency', urgent: true, time: '3 hours ago', priority: 'high' },
    { id: 4, type: 'Leave', employee: 'Divya Nair', detail: 'Sick Leave - 2 days + Medical cert', dept: 'Radiology', urgent: true, time: '1 hour ago', priority: 'high' },
    { id: 5, type: 'Document', employee: 'Priya Sharma', detail: 'Education certificate verification', dept: 'Laboratory', urgent: false, time: '1 day ago', priority: 'low' }
  ];

  // ANNOUNCEMENTS
  const announcements = [
    { id: 1, title: '🚨 NABH Audit Next Week', message: 'All HR documents must be ready by Friday. Mandatory meeting tomorrow at 10 AM.', priority: 'critical', date: 'Today, 9:00 AM', author: 'HR Manager', icon: AlertTriangle },
    { id: 2, title: '📢 New Payroll Schedule', message: 'Effective immediately: Salary processing moved to 28th. Direct deposit by 30th.', priority: 'high', date: 'Yesterday', author: 'Finance Dept', icon: DollarSign },
    { id: 3, title: '📅 Department Meeting - Feb 10', message: 'Mandatory for all HODs. Venue: Conference Room A. Time: 2:00 PM', priority: 'medium', date: '2 days ago', author: 'Administration', icon: Users }
  ];

  // QUICK ACTIONS
  const quickActions = [
    { title: 'Mark Attendance', icon: UserCheck, color: 'blue', desc: 'Bulk attendance entry', action: () => alert('Opening Attendance Marker...') },
    { title: 'Approve Leaves', icon: CheckCircle2, color: 'green', desc: `${pendingApprovals.filter(a => a.type === 'Leave').length} pending`, badge: pendingApprovals.filter(a => a.type === 'Leave').length, action: () => handleNavigation('attendance') },
    { title: 'Process Payroll', icon: DollarSign, color: 'indigo', desc: 'Generate salary slips', action: () => handleNavigation('payroll') },
    { title: 'New Announcement', icon: Megaphone, color: 'orange', desc: 'Broadcast message', action: () => setShowAnnouncementModal(true) },
    { title: 'Onboard Employee', icon: UserPlus, color: 'teal', desc: 'Add new hire', action: () => handleNavigation('employees') },
    { title: 'Download Reports', icon: ClipboardList, color: 'purple', desc: 'Attendance & payroll', action: () => handleNavigation('reports') }
  ];

  // UPCOMING EVENTS
  const upcomingEvents = [
    { id: 1, type: 'birthday', name: 'Rajesh Kumar', dept: 'Nursing', date: 'Today', icon: '🎂', color: 'blue' },
    { id: 2, type: 'anniversary', name: 'Dr. Priya Sharma', dept: 'Cardiology', date: 'Tomorrow', detail: '5 years', icon: '🎉', color: 'purple' },
    { id: 3, type: 'probation', name: 'Anita Menon', dept: 'Admin', date: 'Feb 28', detail: 'Review due', icon: '📋', color: 'orange' },
    { id: 4, type: 'retirement', name: 'Suresh Nair', dept: 'Finance', date: 'Next week', detail: 'Farewell', icon: '👋', color: 'red' }
  ];

  const getColorClass = (color) => {
    const colors = {
      green: { bg: 'bg-emerald-500', light: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', hover: 'hover:bg-emerald-600' },
      blue: { bg: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', hover: 'hover:bg-blue-600' },
      orange: { bg: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', hover: 'hover:bg-orange-600' },
      red: { bg: 'bg-red-500', light: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', hover: 'hover:bg-red-600' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', hover: 'hover:bg-purple-600' },
      indigo: { bg: 'bg-indigo-500', light: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', hover: 'hover:bg-indigo-600' },
      teal: { bg: 'bg-teal-500', light: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', hover: 'hover:bg-teal-600' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header with Live Time */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 border-b-4 border-blue-500 shadow-2xl px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-white flex items-center">
              <Activity className="w-8 h-8 mr-3 animate-pulse" />
              HR Admin Dashboard
            </h1>
            <p className="text-blue-100 mt-1 font-medium">{todayStats.date} • {todayStats.time}</p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => handleNavigation('intelligence')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-xl hover:shadow-2xl transition-all font-bold text-sm flex items-center group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Intelligence Center
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
            <button className="px-5 py-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white/30 transition-all font-semibold text-sm flex items-center border border-white/30">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Live Attendance Metrics */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
            <Activity className="w-6 h-6 mr-2 text-blue-600" />
            Live Attendance Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {attendanceMetrics.map((metric, idx) => {
              const colors = getColorClass(metric.color);
              return (
                <div 
                  key={idx} 
                  className={`${colors.light} border-2 ${colors.border} rounded-xl p-5 hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer ${metric.alert ? 'animate-pulse' : ''}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    {metric.alert && (
                      <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold animate-bounce">
                        Alert!
                      </span>
                    )}
                  </div>
                  <div className="mb-2">
                    <div className="flex items-baseline space-x-2">
                      <h3 className="text-3xl font-black text-slate-900">{metric.value}</h3>
                      {metric.total && <span className="text-sm text-slate-500">/ {metric.total}</span>}
                    </div>
                    {metric.percentage && (
                      <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                        <div className={`${colors.bg} h-2 rounded-full transition-all duration-500`} style={{width: `${metric.percentage}%`}}></div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-1">{metric.label}</p>
                  <p className="text-xs text-slate-500">{metric.trend}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-orange-600" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, idx) => {
              const colors = getColorClass(action.color);
              return (
                <button
                  key={idx}
                  onClick={action.action}
                  className={`${colors.light} border-2 ${colors.border} rounded-xl p-4 hover:shadow-lg transition-all group text-left relative cursor-pointer transform hover:scale-105`}
                >
                  {action.badge && (
                    <span className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                      {action.badge}
                    </span>
                  )}
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{action.title}</h3>
                  <p className="text-xs text-slate-600">{action.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Late Comers */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white">Late Arrivals Today ({lateComers.length})</h3>
              </div>
              <button className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-sm font-semibold hover:bg-white/30 transition-all">
                View All
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {lateComers.map((person) => (
                <div key={person.id} className="px-6 py-4 border-b border-orange-100 hover:bg-orange-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900">{person.name}</h4>
                      <p className="text-sm text-slate-600">{person.role} • {person.dept}</p>
                    </div>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                      {person.delay} late
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-slate-500">Expected:</span>
                      <span className="ml-2 font-semibold text-slate-700">{person.expected}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Actual:</span>
                      <span className="ml-2 font-semibold text-orange-600">{person.time}</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-xs text-slate-600">Reason: {person.reason}</p>
                    <button className="text-blue-600 hover:text-blue-700 text-xs font-semibold">
                      <Phone className="w-3 h-3 inline mr-1" />
                      Call
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Absentees */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-red-200 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <UserX className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white">Absentees Today ({absentees.length})</h3>
              </div>
              <button className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-sm font-semibold hover:bg-white/30 transition-all">
                View All
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {absentees.map((person) => (
                <div key={person.id} className={`px-6 py-4 border-b border-red-100 hover:bg-red-50 transition-colors ${person.alert ? 'bg-red-50' : ''}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-slate-900">{person.name}</h4>
                        {person.alert && (
                          <span className="px-2 py-0.5 bg-red-500 text-white rounded-full text-xs font-bold animate-pulse">
                            URGENT
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-600">{person.role} • {person.dept}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      person.status === 'Approved' ? 'bg-green-100 text-green-700' :
                      person.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {person.status}
                    </span>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm"><span className="text-slate-500">Reason:</span> <span className="font-semibold text-slate-700">{person.reason}</span></p>
                    <p className="text-xs text-slate-500 mt-1">Days off: {person.daysOff}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold hover:bg-blue-200 transition-all">
                      <Phone className="w-3 h-3 inline mr-1" />
                      Call: {person.contact}
                    </button>
                    {person.alert && (
                      <button className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-xs font-bold hover:bg-red-600 transition-all">
                        Mark Action
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Overtime Workers */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Timer className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white">Overtime This Week ({overtimeWorkers.length})</h3>
              </div>
              <div className="text-right">
                <p className="text-white text-sm font-semibold">Total: ₹{overtimeWorkers.reduce((sum, w) => sum + w.amount, 0).toLocaleString()}</p>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {overtimeWorkers.map((worker) => (
                <div key={worker.id} className="px-6 py-4 border-b border-purple-100 hover:bg-purple-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900">{worker.name}</h4>
                      <p className="text-sm text-slate-600">{worker.role} • {worker.dept}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      worker.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {worker.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-center bg-purple-50 rounded-lg p-2">
                      <p className="text-lg font-bold text-purple-600">{worker.hours}h</p>
                      <p className="text-xs text-slate-600">Hours</p>
                    </div>
                    <div className="text-center bg-indigo-50 rounded-lg p-2">
                      <p className="text-lg font-bold text-indigo-600">₹{worker.rate}</p>
                      <p className="text-xs text-slate-600">Rate/hr</p>
                    </div>
                    <div className="text-center bg-green-50 rounded-lg p-2">
                      <p className="text-lg font-bold text-green-600">₹{worker.amount}</p>
                      <p className="text-xs text-slate-600">Total</p>
                    </div>
                  </div>
                  {worker.status === 'Pending' && (
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg text-sm font-bold hover:bg-green-600 transition-all">
                        <CheckCircle2 className="w-4 h-4 inline mr-1" />
                        Approve
                      </button>
                      <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-all">
                        Review
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-6 h-6 text-white animate-bounce" />
                <h3 className="text-lg font-bold text-white">Pending Approvals ({pendingApprovals.length})</h3>
              </div>
              <button className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-sm font-semibold hover:bg-white/30 transition-all">
                View All
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {pendingApprovals.map((approval) => (
                <div key={approval.id} className={`px-6 py-4 border-b border-blue-100 hover:bg-blue-50 transition-colors ${approval.urgent ? 'bg-yellow-50' : ''}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                          approval.type === 'Leave' ? 'bg-blue-100 text-blue-700' :
                          approval.type === 'Overtime' ? 'bg-purple-100 text-purple-700' :
                          approval.type === 'Shift Change' ? 'bg-orange-100 text-orange-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {approval.type}
                        </span>
                        {approval.urgent && (
                          <span className="px-2 py-0.5 bg-red-500 text-white rounded-full text-xs font-bold animate-pulse">
                            URGENT
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-slate-900">{approval.employee}</h4>
                      <p className="text-sm text-slate-700 mt-1">{approval.detail}</p>
                      <p className="text-xs text-slate-500 mt-1">{approval.dept} • {approval.time}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <button className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg text-sm font-bold hover:bg-green-600 transition-all">
                      <CheckCircle2 className="w-4 h-4 inline mr-1" />
                      Approve
                    </button>
                    <button className="flex-1 px-3 py-2 bg-red-500 text-white rounded-lg text-sm font-bold hover:bg-red-600 transition-all">
                      Reject
                    </button>
                    <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-all">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Announcements & Events */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Announcements */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border-2 border-indigo-200 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Megaphone className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white">Important Announcements</h3>
              </div>
              <button 
                onClick={() => setShowAnnouncementModal(true)}
                className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white text-sm font-bold hover:bg-white/30 transition-all flex items-center"
              >
                <Plus className="w-4 h-4 mr-1" />
                New
              </button>
            </div>
            <div className="p-6 space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className={`p-4 rounded-xl border-2 ${
                  announcement.priority === 'critical' ? 'bg-red-50 border-red-300' :
                  announcement.priority === 'high' ? 'bg-orange-50 border-orange-300' :
                  'bg-blue-50 border-blue-300'
                }`}>
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      announcement.priority === 'critical' ? 'bg-red-500' :
                      announcement.priority === 'high' ? 'bg-orange-500' :
                      'bg-blue-500'
                    }`}>
                      <announcement.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">{announcement.title}</h4>
                      <p className="text-sm text-slate-700 mb-2">{announcement.message}</p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{announcement.author}</span>
                        <span>{announcement.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-teal-200 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 px-6 py-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white">Upcoming Events</h3>
              </div>
            </div>
            <div className="p-6 space-y-3">
              {upcomingEvents.map((event) => {
                const colors = getColorClass(event.color);
                return (
                  <div key={event.id} className={`${colors.light} border-2 ${colors.border} rounded-xl p-4 hover:shadow-md transition-all`}>
                    <div className="flex items-start space-x-3">
                      <div className="text-3xl">{event.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900">{event.name}</h4>
                        <p className="text-sm text-slate-600">{event.dept}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className={`px-2 py-1 ${colors.bg} text-white rounded-full text-xs font-bold`}>
                            {event.date}
                          </span>
                          {event.detail && (
                            <span className="text-xs text-slate-500">{event.detail}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Announcement Modal */}
      {showAnnouncementModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fade-in">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 px-6 py-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">New Announcement</h2>
              <button onClick={() => setShowAnnouncementModal(false)} className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Title</label>
                  <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Enter announcement title..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    value={announcementText}
                    onChange={(e) => setAnnouncementText(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" 
                    rows="4" 
                    placeholder="Type your announcement message..."
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Priority</label>
                  <select className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                    <option value="critical">Critical</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-3 mt-6">
                <button 
                  onClick={() => {
                    alert('Announcement broadcasted to all employees!');
                    setShowAnnouncementModal(false);
                    setAnnouncementText('');
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all font-bold flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Broadcast Now
                </button>
                <button 
                  onClick={() => setShowAnnouncementModal(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HRDashboardHome;
