import React, { useState } from 'react';
import { 
  Search, Filter, UserPlus, Mail, Phone, MapPin, Briefcase, Calendar, Edit, Trash2, Eye,
  FileText, CheckCircle, XCircle, Clock, Download, Upload, UserCheck, UserX, ArrowRight
} from 'lucide-react';
import { DEMO_EMPLOYEES } from '../../data/hrDemoData';

const EmployeeManagement = () => {
  const [employees] = useState(DEMO_EMPLOYEES);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDept, setFilterDept] = useState('All');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [activeView, setActiveView] = useState('all'); // all, onboarding, exit

  const departments = ['All', ...new Set(employees.map(e => e.department))];

  // Mock onboarding and exit data
  const onboardingEmployees = [
    { 
      id: 'EMP011', 
      name: 'Mr. Rahul Verma', 
      designation: 'Staff Nurse',
      joiningDate: '2025-01-20',
      department: 'Nursing Department',
      status: 'In Progress',
      completionPercentage: 65,
      pendingTasks: ['Medical Verification', 'ID Card Collection']
    },
    { 
      id: 'EMP012', 
      name: 'Ms. Priyanka Shah', 
      designation: 'Lab Technician',
      joiningDate: '2025-01-22',
      department: 'Laboratory',
      status: 'Pending',
      completionPercentage: 30,
      pendingTasks: ['Document Upload', 'Training Schedule', 'System Access']
    }
  ];

  const exitEmployees = [
    { 
      id: 'EMP013', 
      name: 'Dr. Suresh Kumar', 
      designation: 'Physician',
      lastWorkingDay: '2025-01-31',
      department: 'Clinical Services',
      status: 'In Progress',
      completionPercentage: 75,
      pendingTasks: ['Asset Return', 'Final Settlement']
    }
  ];

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         emp.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         emp.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = filterDept === 'All' || emp.department === filterDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Employee Lifecycle Management</h1>
            <p className="text-sm text-slate-600 mt-1">Complete employee journey from joining to exit</p>
          </div>
          <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center shadow-md">
            <UserPlus className="w-5 h-5 mr-2" />
            Onboard New Employee
          </button>
        </div>

        {/* View Toggle */}
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveView('all')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeView === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Employees ({employees.length})
          </button>
          <button
            onClick={() => setActiveView('onboarding')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeView === 'onboarding'
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Onboarding ({onboardingEmployees.length})
          </button>
          <button
            onClick={() => setActiveView('exit')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeView === 'exit'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Exit Process ({exitEmployees.length})
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Search and Filter - Only for All Employees view */}
        {activeView === 'all' && (
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, ID, or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={filterDept}
                  onChange={(e) => setFilterDept(e.target.value)}
                  className="pl-12 pr-8 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer min-w-[200px] bg-white"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Onboarding View */}
        {activeView === 'onboarding' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Active Onboarding Process</h3>
              <p className="text-sm text-slate-700">Track and complete new employee joining formalities</p>
            </div>

            {onboardingEmployees.map((emp) => (
              <div key={emp.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                      {emp.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{emp.name}</h3>
                      <p className="text-sm text-slate-600">{emp.designation} • {emp.department}</p>
                      <p className="text-xs text-slate-500 mt-1">Joining Date: {new Date(emp.joiningDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-lg text-sm font-bold ${
                    emp.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {emp.status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Onboarding Progress</span>
                    <span className="text-sm font-bold text-green-600">{emp.completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all"
                      style={{ width: `${emp.completionPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Pending Tasks */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Pending Tasks:</p>
                  <div className="flex flex-wrap gap-2">
                    {emp.pendingTasks.map((task, idx) => (
                      <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                        {task}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Complete Task
                  </button>
                  <button className="bg-slate-100 text-slate-700 px-4 py-2.5 rounded-lg hover:bg-slate-200 transition-colors font-semibold text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Exit Process View */}
        {activeView === 'exit' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Exit Clearance Process</h3>
              <p className="text-sm text-slate-700">Manage employee separation and clearance formalities</p>
            </div>

            {exitEmployees.map((emp) => (
              <div key={emp.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center text-white font-bold text-lg">
                      {emp.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{emp.name}</h3>
                      <p className="text-sm text-slate-600">{emp.designation} • {emp.department}</p>
                      <p className="text-xs text-slate-500 mt-1">Last Working Day: {new Date(emp.lastWorkingDay).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 rounded-lg text-sm font-bold bg-orange-100 text-orange-700">
                    {emp.status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Clearance Progress</span>
                    <span className="text-sm font-bold text-red-600">{emp.completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-rose-500 h-3 rounded-full transition-all"
                      style={{ width: `${emp.completionPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Pending Clearances */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Pending Clearances:</p>
                  <div className="flex flex-wrap gap-2">
                    {emp.pendingTasks.map((task, idx) => (
                      <span key={idx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        {task}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-red-600 text-white px-4 py-2.5 rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm flex items-center justify-center">
                    <UserX className="w-4 h-4 mr-2" />
                    Process Exit
                  </button>
                  <button className="bg-slate-100 text-slate-700 px-4 py-2.5 rounded-lg hover:bg-slate-200 transition-colors font-semibold text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* All Employees Grid */}
        {activeView === 'all' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredEmployees.map((employee) => (
                <div key={employee.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base">
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">{employee.name}</h3>
                        <p className="text-xs text-slate-500">{employee.id}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      employee.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {employee.status}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-600">
                      <Briefcase className="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{employee.designation}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{employee.department}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Mail className="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{employee.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Phone className="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                      {employee.phone}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Calendar className="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                      Joined: {new Date(employee.joiningDate).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setSelectedEmployee(employee)}
                      className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold flex items-center justify-center"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </button>
                    <button className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg hover:bg-slate-200 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="bg-red-100 text-red-700 px-3 py-2 rounded-lg hover:bg-red-200 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-slate-900">{employees.length}</p>
                  <p className="text-sm text-slate-600 mt-1">Total Employees</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">{employees.filter(e => e.status === 'Active').length}</p>
                  <p className="text-sm text-slate-600 mt-1">Active</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{employees.filter(e => e.employeeType === 'Permanent').length}</p>
                  <p className="text-sm text-slate-600 mt-1">Permanent</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-600">{employees.filter(e => e.employeeType === 'Contract').length}</p>
                  <p className="text-sm text-slate-600 mt-1">Contract</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Employee Details Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedEmployee(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl">
                  {selectedEmployee.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{selectedEmployee.name}</h2>
                  <p className="text-slate-600">{selectedEmployee.designation}</p>
                  <p className="text-sm text-slate-500">{selectedEmployee.id}</p>
                </div>
              </div>
              <button onClick={() => setSelectedEmployee(null)} className="text-slate-400 hover:text-slate-600 text-2xl">
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Department</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.department}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Employee Type</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.employeeType}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Email</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Phone</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.phone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Joining Date</p>
                <p className="text-sm font-medium text-slate-900">{new Date(selectedEmployee.joiningDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Location</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.location}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Blood Group</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.bloodGroup}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Emergency Contact</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.emergencyContact}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Reporting To</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.reportingTo}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Status</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedEmployee.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {selectedEmployee.status}
                </span>
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Edit Employee
              </button>
              <button className="bg-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-300 transition-colors font-semibold">
                View Documents
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;

      {/* Search and Filter */}
      <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, ID, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
              className="pl-12 pr-8 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 appearance-none cursor-pointer min-w-[200px] bg-white"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-md">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  {employee.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{employee.name}</h3>
                  <p className="text-xs text-slate-500">{employee.id}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                employee.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {employee.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-slate-600">
                <Briefcase className="w-4 h-4 mr-2 text-slate-400" />
                {employee.designation}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                {employee.department}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Mail className="w-4 h-4 mr-2 text-slate-400" />
                <span className="truncate">{employee.email}</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Phone className="w-4 h-4 mr-2 text-slate-400" />
                {employee.phone}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                Joined: {new Date(employee.joiningDate).toLocaleDateString()}
              </div>
            </div>

            <div className="flex space-x-2">
              <button 
                onClick={() => setSelectedEmployee(employee)}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold flex items-center justify-center"
              >
                <Eye className="w-4 h-4 mr-1" />
                View
              </button>
              <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
              <button className="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Employee Details Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedEmployee(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl">
                  {selectedEmployee.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{selectedEmployee.name}</h2>
                  <p className="text-slate-600">{selectedEmployee.designation}</p>
                  <p className="text-sm text-slate-500">{selectedEmployee.id}</p>
                </div>
              </div>
              <button onClick={() => setSelectedEmployee(null)} className="text-slate-400 hover:text-slate-600">
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Department</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.department}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Employee Type</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.employeeType}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Email</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Phone</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.phone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Joining Date</p>
                <p className="text-sm font-medium text-slate-900">{new Date(selectedEmployee.joiningDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Location</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.location}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Blood Group</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.bloodGroup}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Emergency Contact</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.emergencyContact}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Reporting To</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.reportingTo}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Status</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedEmployee.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {selectedEmployee.status}
                </span>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Edit Employee
              </button>
              <button className="bg-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-300 transition-colors font-semibold">
                View Documents
              </button>
            </div>
          </div>
        </div>
      )}

            {/* Summary Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-slate-900">{employees.length}</p>
                  <p className="text-sm text-slate-600 mt-1">Total Employees</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">{employees.filter(e => e.status === 'Active').length}</p>
                  <p className="text-sm text-slate-600 mt-1">Active</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{employees.filter(e => e.employeeType === 'Permanent').length}</p>
                  <p className="text-sm text-slate-600 mt-1">Permanent</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-600">{employees.filter(e => e.employeeType === 'Contract').length}</p>
                  <p className="text-sm text-slate-600 mt-1">Contract</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Employee Details Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedEmployee(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl">
                  {selectedEmployee.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{selectedEmployee.name}</h2>
                  <p className="text-slate-600">{selectedEmployee.designation}</p>
                  <p className="text-sm text-slate-500">{selectedEmployee.id}</p>
                </div>
              </div>
              <button onClick={() => setSelectedEmployee(null)} className="text-slate-400 hover:text-slate-600 text-2xl">
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Department</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.department}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Employee Type</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.employeeType}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Email</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Phone</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.phone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Joining Date</p>
                <p className="text-sm font-medium text-slate-900">{new Date(selectedEmployee.joiningDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Location</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.location}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Blood Group</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.bloodGroup}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Emergency Contact</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.emergencyContact}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Reporting To</p>
                <p className="text-sm font-medium text-slate-900">{selectedEmployee.reportingTo}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Status</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedEmployee.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {selectedEmployee.status}
                </span>
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Edit Employee
              </button>
              <button className="bg-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-300 transition-colors font-semibold">
                View Documents
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;