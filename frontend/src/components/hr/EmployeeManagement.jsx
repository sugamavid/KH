import React, { useState } from 'react';
import { Search, Filter, UserPlus, Mail, Phone, MapPin, Briefcase, Calendar, Edit, Trash2, Eye } from 'lucide-react';
import { DEMO_EMPLOYEES } from '../../data/hrDemoData';

const EmployeeManagement = () => {
  const [employees] = useState(DEMO_EMPLOYEES);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDept, setFilterDept] = useState('All');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const departments = ['All', ...new Set(employees.map(e => e.department))];

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         emp.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         emp.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = filterDept === 'All' || emp.department === filterDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Employee Management</h1>
          <p className="text-slate-600 mt-1">Manage employee records and information</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center shadow-lg">
          <UserPlus className="w-5 h-5 mr-2" />
          Add New Employee
        </button>
      </div>

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
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-slate-900">{employees.length}</p>
            <p className="text-sm text-slate-600">Total Employees</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-600">{employees.filter(e => e.status === 'Active').length}</p>
            <p className="text-sm text-slate-600">Active</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">{employees.filter(e => e.employeeType === 'Permanent').length}</p>
            <p className="text-sm text-slate-600">Permanent</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-600">{employees.filter(e => e.employeeType === 'Contract').length}</p>
            <p className="text-sm text-slate-600">Contract</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;