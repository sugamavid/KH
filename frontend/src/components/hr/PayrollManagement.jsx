import React, { useState } from 'react';
import { DollarSign, Download, Calendar, TrendingUp, FileText, CreditCard } from 'lucide-react';
import { DEMO_EMPLOYEES } from '../../data/hrDemoData';

const PayrollManagement = () => {
  const [selectedMonth, setSelectedMonth] = useState('January 2025');

  const payrollSummary = {
    totalSalary: DEMO_EMPLOYEES.reduce((sum, emp) => sum + emp.salary, 0),
    processed: 10,
    pending: 0,
    avgSalary: DEMO_EMPLOYEES.reduce((sum, emp) => sum + emp.salary, 0) / DEMO_EMPLOYEES.length
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Payroll Management</h1>
          <p className="text-slate-600 mt-1">Process salaries and manage payroll</p>
        </div>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center shadow-lg">
          <CreditCard className="w-5 h-5 mr-2" />
          Process Payroll
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <DollarSign className="w-8 h-8 text-green-600 mb-3" />
          <p className="text-3xl font-bold text-slate-900">₹{(payrollSummary.totalSalary / 100000).toFixed(2)}L</p>
          <p className="text-sm text-slate-600">Total Monthly Payroll</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <FileText className="w-8 h-8 text-blue-600 mb-3" />
          <p className="text-3xl font-bold text-slate-900">{payrollSummary.processed}</p>
          <p className="text-sm text-slate-600">Salaries Processed</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <Calendar className="w-8 h-8 text-orange-600 mb-3" />
          <p className="text-3xl font-bold text-slate-900">{payrollSummary.pending}</p>
          <p className="text-sm text-slate-600">Pending Approvals</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
          <p className="text-3xl font-bold text-slate-900">₹{(payrollSummary.avgSalary / 1000).toFixed(0)}K</p>
          <p className="text-sm text-slate-600">Average Salary</p>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-900">Payroll Details - {selectedMonth}</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Employee</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Designation</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Basic Salary</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Allowances</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Deductions</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Net Salary</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {DEMO_EMPLOYEES.map((employee) => {
                const allowances = employee.salary * 0.2;
                const deductions = employee.salary * 0.1;
                const netSalary = employee.salary + allowances - deductions;
                return (
                  <tr key={employee.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{employee.name}</p>
                          <p className="text-xs text-slate-500">{employee.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-700">{employee.designation}</td>
                    <td className="py-3 px-4 text-slate-900 font-semibold">₹{employee.salary.toLocaleString()}</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">₹{allowances.toLocaleString()}</td>
                    <td className="py-3 px-4 text-red-600 font-semibold">₹{deductions.toLocaleString()}</td>
                    <td className="py-3 px-4 text-slate-900 font-bold">₹{netSalary.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        Processed
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
  );
};

export default PayrollManagement;