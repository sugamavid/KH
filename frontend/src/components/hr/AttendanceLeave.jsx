import React, { useState } from 'react';
import { 
  Clock, CheckCircle2, XCircle, Calendar, Filter, Download, Search, 
  ChevronLeft, ChevronRight, UserCheck, AlertCircle, CalendarDays,
  CheckCircle, Eye, FileText, TrendingUp
} from 'lucide-react';
import { DEMO_LEAVE_APPLICATIONS, DEMO_EMPLOYEES } from '../../data/hrDemoData';

const AttendanceLeave = () => {
  const [activeTab, setActiveTab] = useState('leave');
  const [leaveView, setLeaveView] = useState('applications'); // applications, calendar, balance
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Leave Balance Data
  const leaveBalanceData = DEMO_EMPLOYEES.slice(0, 5).map(emp => ({
    ...emp,
    leaveBalance: {
      casual: { total: 12, used: 3, remaining: 9 },
      sick: { total: 10, used: 2, remaining: 8 },
      annual: { total: 20, used: 8, remaining: 12 },
      compensatory: { total: 5, used: 0, remaining: 5 }
    }
  }));

  // Leave Types Configuration
  const leaveTypes = [
    { id: 'casual', name: 'Casual Leave', color: 'blue', annualQuota: 12 },
    { id: 'sick', name: 'Sick Leave', color: 'orange', annualQuota: 10 },
    { id: 'annual', name: 'Annual Leave', color: 'green', annualQuota: 20 },
    { id: 'compensatory', name: 'Compensatory Off', color: 'purple', annualQuota: 5 }
  ];

  // Calendar generation for leave view
  const generateCalendar = () => {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();
    const days = [];
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];

  const filteredLeaveApplications = DEMO_LEAVE_APPLICATIONS.filter(app =>
    searchQuery === '' || 
    app.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.leaveType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'Approved': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Attendance & Leave Management</h1>
            <p className="text-sm text-slate-600 mt-1">Track attendance, manage leave applications and balance</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-semibold flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
            <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center shadow-md">
              <Download className="w-5 h-5 mr-2" />
              Export Report
            </button>
          </div>
        </div>

        {/* Main Tabs */}
        <div className="flex space-x-2 mt-4">
          <button
            onClick={() => setActiveTab('leave')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'leave' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Leave Management
          </button>
          <button
            onClick={() => setActiveTab('attendance')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'attendance' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Attendance Tracking
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {activeTab === 'leave' && (
          <>
            {/* Leave Sub-tabs */}
            <div className="bg-white rounded-xl p-2 border border-slate-200 shadow-sm">
              <div className="flex space-x-2">
                <button
                  onClick={() => setLeaveView('applications')}
                  className={`flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    leaveView === 'applications' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <FileText className="w-4 h-4 inline mr-2" />
                  Applications
                </button>
                <button
                  onClick={() => setLeaveView('calendar')}
                  className={`flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    leaveView === 'calendar' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <CalendarDays className="w-4 h-4 inline mr-2" />
                  Leave Calendar
                </button>
                <button
                  onClick={() => setLeaveView('balance')}
                  className={`flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    leaveView === 'balance' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <TrendingUp className="w-4 h-4 inline mr-2" />
                  Leave Balance
                </button>
              </div>
            </div>

            {/* Leave Applications View */}
            {leaveView === 'applications' && (
              <>
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                        <AlertCircle className="w-6 h-6 text-yellow-600" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-slate-900">{DEMO_LEAVE_APPLICATIONS.filter(l => l.status === 'Pending').length}</p>
                    <p className="text-sm text-slate-600 mt-1">Pending Approvals</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-slate-900">{DEMO_LEAVE_APPLICATIONS.filter(l => l.status === 'Approved').length}</p>
                    <p className="text-sm text-slate-600 mt-1">Approved This Month</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                        <XCircle className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-slate-900">{DEMO_LEAVE_APPLICATIONS.filter(l => l.status === 'Rejected').length}</p>
                    <p className="text-sm text-slate-600 mt-1">Rejected</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-slate-900">{DEMO_LEAVE_APPLICATIONS.length}</p>
                    <p className="text-sm text-slate-600 mt-1">Total Applications</p>
                  </div>
                </div>

                {/* Search */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search by employee name or leave type..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Applications List */}
                <div className="space-y-3">
                  {filteredLeaveApplications.map((application) => (
                    <div key={application.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-400 transition-all shadow-sm">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                            {application.employeeName.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-bold text-slate-900">{application.employeeName}</h3>
                              <span className="text-xs text-slate-500">{application.id}</span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                              <div>
                                <p className="text-xs text-slate-500">Leave Type</p>
                                <p className="font-medium text-slate-900">{application.leaveType}</p>
                              </div>
                              <div>
                                <p className="text-xs text-slate-500">From Date</p>
                                <p className="font-medium text-slate-900">{new Date(application.startDate).toLocaleDateString()}</p>
                              </div>
                              <div>
                                <p className="text-xs text-slate-500">To Date</p>
                                <p className="font-medium text-slate-900">{new Date(application.endDate).toLocaleDateString()}</p>
                              </div>
                              <div>
                                <p className="text-xs text-slate-500">Duration</p>
                                <p className="font-medium text-slate-900">{application.days} days</p>
                              </div>
                            </div>
                            <p className="text-sm text-slate-600 mt-2"><span className="font-semibold">Reason:</span> {application.reason}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 ml-4">
                          <span className={`px-4 py-2 rounded-lg text-xs font-bold ${getStatusColor(application.status)}`}>
                            {application.status}
                          </span>
                          {application.status === 'Pending' && (
                            <>
                              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
                                Approve
                              </button>
                              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold">
                                Reject
                              </button>
                            </>
                          )}
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

            {/* Leave Calendar View */}
            {leaveView === 'calendar' && (
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900">{monthNames[selectedMonth]} {selectedYear}</h2>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => {
                        if (selectedMonth === 0) {
                          setSelectedMonth(11);
                          setSelectedYear(selectedYear - 1);
                        } else {
                          setSelectedMonth(selectedMonth - 1);
                        }
                      }}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-slate-600" />
                    </button>
                    <button 
                      onClick={() => {
                        if (selectedMonth === 11) {
                          setSelectedMonth(0);
                          setSelectedYear(selectedYear + 1);
                        } else {
                          setSelectedMonth(selectedMonth + 1);
                        }
                      }}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center font-bold text-slate-700 py-2">
                      {day}
                    </div>
                  ))}
                  {generateCalendar().map((day, idx) => (
                    <div 
                      key={idx} 
                      className={`aspect-square border border-slate-200 rounded-lg p-2 ${
                        day ? 'bg-white hover:bg-blue-50 cursor-pointer transition-colors' : 'bg-slate-50'
                      }`}
                    >
                      {day && (
                        <>
                          <div className="text-sm font-semibold text-slate-900">{day}</div>
                          {/* Mock leave indicators */}
                          {day === 15 && <div className="w-2 h-2 rounded-full bg-green-500 mt-1"></div>}
                          {day === 20 && <div className="w-2 h-2 rounded-full bg-blue-500 mt-1"></div>}
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-sm text-slate-600">Approved Leave</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-slate-600">Pending Leave</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                    <span className="text-sm text-slate-600">Holiday</span>
                  </div>
                </div>
              </div>
            )}

            {/* Leave Balance View */}
            {leaveView === 'balance' && (
              <div className="space-y-4">
                {/* Leave Types Summary */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {leaveTypes.map(type => (
                    <div key={type.id} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                      <h3 className="text-sm font-semibold text-slate-700 mb-3">{type.name}</h3>
                      <p className="text-3xl font-bold text-slate-900 mb-1">{type.annualQuota}</p>
                      <p className="text-xs text-slate-500">Days per year</p>
                    </div>
                  ))}
                </div>

                {/* Employee Leave Balance */}
                {leaveBalanceData.map(emp => (
                  <div key={emp.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                        {emp.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{emp.name}</h3>
                        <p className="text-sm text-slate-600">{emp.designation} • {emp.department}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {Object.entries(emp.leaveBalance).map(([type, balance]) => (
                        <div key={type} className="bg-slate-50 rounded-lg p-4">
                          <p className="text-xs font-semibold text-slate-500 mb-2 capitalize">{type} Leave</p>
                          <div className="flex items-end space-x-2 mb-2">
                            <p className="text-2xl font-bold text-slate-900">{balance.remaining}</p>
                            <p className="text-sm text-slate-500 mb-1">/ {balance.total}</p>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                              style={{ width: `${(balance.remaining / balance.total) * 100}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-slate-500 mt-2">{balance.used} days used</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === 'attendance' && (
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="text-center py-12">
              <UserCheck className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Attendance Tracking</h3>
              <p className="text-slate-600">Attendance module coming soon with biometric integration</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceLeave;
