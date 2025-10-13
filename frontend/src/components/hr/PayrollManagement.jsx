import React, { useState } from 'react';
import { 
  DollarSign, Download, Calendar, TrendingUp, FileText, CreditCard, 
  Search, Filter, Eye, CheckCircle, AlertCircle, IndianRupee, 
  Receipt, PlusCircle, Edit
} from 'lucide-react';
import { DEMO_EMPLOYEES } from '../../data/hrDemoData';

const PayrollManagement = () => {
  const [activeView, setActiveView] = useState('salary'); // salary, reimbursement, bonus
  const [selectedMonth, setSelectedMonth] = useState('January 2025');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Calculate payroll data
  const payrollSummary = {
    totalSalary: DEMO_EMPLOYEES.reduce((sum, emp) => sum + emp.salary, 0),
    processed: DEMO_EMPLOYEES.filter(e => e.status === 'Active').length,
    pending: 0,
    avgSalary: DEMO_EMPLOYEES.reduce((sum, emp) => sum + emp.salary, 0) / DEMO_EMPLOYEES.length
  };

  // Mock reimbursement data
  const reimbursements = [
    { id: 'RMB001', employeeName: 'Dr. Rajesh Kumar', type: 'Travel', amount: 5000, date: '2025-01-10', status: 'Pending' },
    { id: 'RMB002', employeeName: 'Ms. Lakshmi Iyer', type: 'Medical', amount: 3500, date: '2025-01-08', status: 'Approved' },
    { id: 'RMB003', employeeName: 'Mr. Arun Sharma', type: 'Food', amount: 1200, date: '2025-01-12', status: 'Pending' }
  ];

  // Mock bonus data
  const bonuses = [
    { id: 'BON001', employeeName: 'Dr. Rajesh Kumar', type: 'Performance Bonus', amount: 25000, month: 'December 2024', status: 'Processed' },
    { id: 'BON002', employeeName: 'Ms. Priya Nair', type: 'Annual Bonus', amount: 15000, month: 'December 2024', status: 'Processed' }
  ];

  const filteredEmployees = DEMO_EMPLOYEES.filter(emp =>
    searchQuery === '' ||
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate salary components
  const calculateSalary = (baseSalary) => {
    const hra = baseSalary * 0.4; // 40% HRA
    const da = baseSalary * 0.2; // 20% DA
    const allowances = baseSalary * 0.1; // 10% Other Allowances
    const gross = baseSalary + hra + da + allowances;
    const pf = baseSalary * 0.12; // 12% PF
    const tds = gross * 0.1; // 10% TDS (simplified)
    const net = gross - pf - tds;
    return { baseSalary, hra, da, allowances, gross, pf, tds, net };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Payroll Management</h1>
            <p className="text-sm text-slate-600 mt-1">Process salaries, manage reimbursements and bonuses</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-semibold flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
            <button className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center shadow-md">
              <CreditCard className="w-5 h-5 mr-2" />
              Process Payroll
            </button>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveView('salary')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeView === 'salary' ? 'bg-green-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <DollarSign className="w-4 h-4 inline mr-1" />
            Salary Processing
          </button>
          <button
            onClick={() => setActiveView('reimbursement')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeView === 'reimbursement' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Receipt className="w-4 h-4 inline mr-1" />
            Reimbursements
          </button>
          <button
            onClick={() => setActiveView('bonus')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeView === 'bonus' ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-1" />
            Bonus & Incentives
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">₹{(payrollSummary.totalSalary / 100000).toFixed(2)}L</p>
            <p className="text-sm text-slate-600 mt-1">Total Monthly Payroll</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{payrollSummary.processed}</p>
            <p className="text-sm text-slate-600 mt-1">Salaries Processed</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{reimbursements.filter(r => r.status === 'Pending').length}</p>
            <p className="text-sm text-slate-600 mt-1">Pending Reimbursements</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">₹{(payrollSummary.avgSalary / 1000).toFixed(0)}K</p>
            <p className="text-sm text-slate-600 mt-1">Average Salary</p>
          </div>
        </div>

        {/* Salary Processing View */}
        {activeView === 'salary' && (
          <>
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by employee name or ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <select className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                  <option>January 2025</option>
                  <option>December 2024</option>
                  <option>November 2024</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {filteredEmployees.map((emp) => {
                const salary = calculateSalary(emp.salary);
                return (
                  <div key={emp.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-green-400 transition-all shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold">
                          {emp.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-slate-900">{emp.name}</h3>
                            <span className="text-xs text-slate-500">{emp.id}</span>
                          </div>
                          <p className="text-sm text-slate-600 mb-3">{emp.designation} • {emp.department}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                            <div>
                              <p className="text-xs text-slate-500">Basic Salary</p>
                              <p className="font-bold text-slate-900">₹{salary.baseSalary.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500">Gross Salary</p>
                              <p className="font-bold text-slate-900">₹{salary.gross.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500">Deductions</p>
                              <p className="font-bold text-red-600">-₹{(salary.pf + salary.tds).toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500">Net Salary</p>
                              <p className="font-bold text-green-600">₹{salary.net.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500">Status</p>
                              <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">
                                Processed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button 
                          onClick={() => setSelectedEmployee(emp)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold flex items-center"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View Slip
                        </button>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Reimbursement View */}
        {activeView === 'reimbursement' && (
          <>
            <div className="flex justify-end">
              <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center shadow-md">
                <PlusCircle className="w-5 h-5 mr-2" />
                Add Reimbursement
              </button>
            </div>

            <div className="space-y-3">
              {reimbursements.map((reimb) => (
                <div key={reimb.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-400 transition-all shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Receipt className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-bold text-slate-900">{reimb.employeeName}</h3>
                          <span className="text-xs text-slate-500">{reimb.id}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-xs text-slate-500">Type</p>
                            <p className="font-medium text-slate-900">{reimb.type}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Amount</p>
                            <p className="font-bold text-green-600">₹{reimb.amount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Submitted On</p>
                            <p className="font-medium text-slate-900">{new Date(reimb.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 ml-4">
                      <span className={`px-4 py-2 rounded-lg text-xs font-bold ${
                        reimb.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {reimb.status}
                      </span>
                      {reimb.status === 'Pending' && (
                        <>
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
                            Approve
                          </button>
                          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold">
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Bonus View */}
        {activeView === 'bonus' && (
          <>
            <div className="flex justify-end">
              <button className="px-5 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center shadow-md">
                <PlusCircle className="w-5 h-5 mr-2" />
                Add Bonus
              </button>
            </div>

            <div className="space-y-3">
              {bonuses.map((bonus) => (
                <div key={bonus.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-400 transition-all shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-bold text-slate-900">{bonus.employeeName}</h3>
                          <span className="text-xs text-slate-500">{bonus.id}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-xs text-slate-500">Bonus Type</p>
                            <p className="font-medium text-slate-900">{bonus.type}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Amount</p>
                            <p className="font-bold text-purple-600">₹{bonus.amount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">For Month</p>
                            <p className="font-medium text-slate-900">{bonus.month}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 ml-4">
                      <span className="px-4 py-2 rounded-lg text-xs font-bold bg-green-100 text-green-700">
                        {bonus.status}
                      </span>
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
      </div>

      {/* Salary Slip Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedEmployee(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Salary Slip</h2>
              <p className="text-slate-600">January 2025</p>
            </div>

            <div className="border-2 border-slate-200 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs font-semibold text-slate-500">Employee Name</p>
                  <p className="text-sm font-bold text-slate-900">{selectedEmployee.name}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Employee ID</p>
                  <p className="text-sm font-bold text-slate-900">{selectedEmployee.id}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Designation</p>
                  <p className="text-sm font-medium text-slate-900">{selectedEmployee.designation}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Department</p>
                  <p className="text-sm font-medium text-slate-900">{selectedEmployee.department}</p>
                </div>
              </div>

              {(() => {
                const salary = calculateSalary(selectedEmployee.salary);
                return (
                  <>
                    <div className="border-t border-slate-200 pt-4 mb-4">
                      <h3 className="font-bold text-slate-900 mb-3">Earnings</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Basic Salary</span>
                          <span className="font-medium">₹{salary.baseSalary.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">HRA (40%)</span>
                          <span className="font-medium">₹{salary.hra.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">DA (20%)</span>
                          <span className="font-medium">₹{salary.da.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Other Allowances</span>
                          <span className="font-medium">₹{salary.allowances.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-bold text-green-600 pt-2 border-t">
                          <span>Gross Salary</span>
                          <span>₹{salary.gross.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-4 mb-4">
                      <h3 className="font-bold text-slate-900 mb-3">Deductions</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Provident Fund (12%)</span>
                          <span className="font-medium">₹{salary.pf.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">TDS (10%)</span>
                          <span className="font-medium">₹{salary.tds.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-bold text-red-600 pt-2 border-t">
                          <span>Total Deductions</span>
                          <span>₹{(salary.pf + salary.tds).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-2 border-green-200">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-900 text-lg">Net Salary</span>
                        <span className="font-bold text-green-600 text-2xl">₹{salary.net.toLocaleString()}</span>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>

            <div className="flex space-x-3">
              <button 
                onClick={() => setSelectedEmployee(null)}
                className="flex-1 bg-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-300 transition-colors font-semibold"
              >
                Close
              </button>
              <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayrollManagement;
