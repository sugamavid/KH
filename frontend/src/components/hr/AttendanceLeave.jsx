import React, { useState } from 'react';
import { Clock, CheckCircle2, XCircle, Calendar, Filter, Download } from 'lucide-react';
import { DEMO_LEAVE_APPLICATIONS, DEMO_ATTENDANCE, DEMO_EMPLOYEES } from '../../data/hrDemoData';

const AttendanceLeave = () => {
  const [activeTab, setActiveTab] = useState('attendance');
  const [leaveApplications] = useState(DEMO_LEAVE_APPLICATIONS);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Attendance & Leave Management</h1>
        <p className="text-slate-600 mt-1">Track attendance and manage leave applications</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('attendance')}
          className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === 'attendance'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Attendance Tracking
        </button>
        <button
          onClick={() => setActiveTab('leave')}
          className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === 'leave'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Leave Management
        </button>
      </div>

      {activeTab === 'attendance' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900">8</p>
              <p className="text-sm text-slate-600">Present Today</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900">2</p>
              <p className="text-sm text-slate-600">Absent Today</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900">0</p>
              <p className="text-sm text-slate-600">Late Today</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900">80%</p>
              <p className="text-sm text-slate-600">Attendance Rate</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-slate-900">Today's Attendance</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Employee</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Check In</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Check Out</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {DEMO_ATTENDANCE.map((record, idx) => {
                    const employee = DEMO_EMPLOYEES.find(e => e.id === record.employeeId);
                    return (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                              {employee?.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900">{employee?.name}</p>
                              <p className="text-xs text-slate-500">{employee?.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-slate-700">{record.checkIn}</td>
                        <td className="py-3 px-4 text-slate-700">{record.checkOut}</td>
                        <td className="py-3 px-4">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'leave' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
              <p className="text-3xl font-bold text-slate-900">{leaveApplications.length}</p>
              <p className="text-sm text-slate-600 mt-1">Total Applications</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
              <p className="text-3xl font-bold text-green-600">{leaveApplications.filter(l => l.status === 'Approved').length}</p>
              <p className="text-sm text-slate-600 mt-1">Approved</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
              <p className="text-3xl font-bold text-orange-600">{leaveApplications.filter(l => l.status === 'Pending').length}</p>
              <p className="text-sm text-slate-600 mt-1">Pending Approval</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Leave Applications</h2>
            <div className="space-y-4">
              {leaveApplications.map((application) => (
                <div key={application.id} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-400 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                          {application.employeeName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">{application.employeeName}</h3>
                          <p className="text-xs text-slate-500">{application.employeeId}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                        <div>
                          <p className="text-xs font-semibold text-slate-500">Leave Type</p>
                          <p className="text-sm font-medium text-slate-900">{application.leaveType}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-500">From Date</p>
                          <p className="text-sm font-medium text-slate-900">{new Date(application.fromDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-500">To Date</p>
                          <p className="text-sm font-medium text-slate-900">{new Date(application.toDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-500">Days</p>
                          <p className="text-sm font-medium text-slate-900">{application.days} days</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <p className="text-xs font-semibold text-slate-500 mb-1">Reason</p>
                        <p className="text-sm text-slate-700">{application.reason}</p>
                      </div>
                    </div>
                    <div className="ml-4 flex flex-col items-end space-y-2">
                      <span className={`px-4 py-2 rounded-lg text-xs font-semibold ${
                        application.status === 'Approved'
                          ? 'bg-green-100 text-green-700'
                          : application.status === 'Pending'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {application.status}
                      </span>
                      {application.status === 'Pending' && (
                        <div className="flex space-x-2">
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-xs font-semibold">
                            Approve
                          </button>
                          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-xs font-semibold">
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceLeave;