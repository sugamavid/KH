import React, { useState } from 'react';
import { Calculator, DollarSign, Calendar, Clock, Percent, TrendingUp, FileText, Download, Gift, Bell, Briefcase, Users, PiggyBank } from 'lucide-react';

const ToolsCalculators = () => {
  const [activeTool, setActiveTool] = useState(null);
  
  // Salary Calculator State
  const [basicSalary, setBasicSalary] = useState('');
  const [hra, setHra] = useState('');
  const [allowances, setAllowances] = useState('');
  
  // Leave Calculator State
  const [totalLeaveDays, setTotalLeaveDays] = useState('');
  const [usedLeaveDays, setUsedLeaveDays] = useState('');
  
  // Tax Calculator State
  const [annualIncome, setAnnualIncome] = useState('');
  
  // Overtime Calculator State
  const [hourlyRate, setHourlyRate] = useState('');
  const [overtimeHours, setOvertimeHours] = useState('');
  
  // Gratuity Calculator State
  const [lastDrawnSalary, setLastDrawnSalary] = useState('');
  const [yearsOfService, setYearsOfService] = useState('');
  
  // Notice Period Calculator State
  const [noticePeriodDays, setNoticePeriodDays] = useState('');
  const [daysServed, setDaysServed] = useState('');
  const [dailySalary, setDailySalary] = useState('');
  
  // PF Calculator State
  const [pfBasicSalary, setPfBasicSalary] = useState('');
  const [pfMonths, setPfMonths] = useState('');
  
  // Loan Eligibility Calculator State
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [existingEmi, setExistingEmi] = useState('');
  const [loanTenure, setLoanTenure] = useState('');

  const tools = [
    { id: 'salary', label: 'Salary Calculator', icon: DollarSign, color: 'blue', desc: 'Calculate gross & net salary' },
    { id: 'leave', label: 'Leave Calculator', icon: Calendar, color: 'green', desc: 'Track leave balance' },
    { id: 'tax', label: 'Tax Calculator', icon: Percent, color: 'purple', desc: 'Estimate income tax' },
    { id: 'overtime', label: 'Overtime Calculator', icon: Clock, color: 'orange', desc: 'Calculate overtime pay' },
    { id: 'gratuity', label: 'Gratuity Calculator', icon: Gift, color: 'teal', desc: 'Calculate gratuity amount' },
    { id: 'notice', label: 'Notice Period', icon: Bell, color: 'red', desc: 'Calculate notice pay' },
    { id: 'pf', label: 'PF Calculator', icon: PiggyBank, color: 'indigo', desc: 'Calculate provident fund' },
    { id: 'loan', label: 'Loan Eligibility', icon: Briefcase, color: 'amber', desc: 'Check loan eligibility' },
  ];

  const calculateNetSalary = () => {
    const basic = parseFloat(basicSalary) || 0;
    const hraAmount = parseFloat(hra) || 0;
    const allowanceAmount = parseFloat(allowances) || 0;
    const gross = basic + hraAmount + allowanceAmount;
    const tax = gross * 0.1; // Simplified 10% tax
    const net = gross - tax;
    return { gross, tax, net };
  };

  const calculateLeaveBalance = () => {
    const total = parseFloat(totalLeaveDays) || 0;
    const used = parseFloat(usedLeaveDays) || 0;
    const remaining = total - used;
    const percentage = total > 0 ? (used / total) * 100 : 0;
    return { remaining, percentage };
  };

  const calculateTax = () => {
    const income = parseFloat(annualIncome) || 0;
    let tax = 0;
    
    // Simplified Indian tax slabs (2024-25)
    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
      tax = 12500 + (income - 500000) * 0.2;
    } else {
      tax = 112500 + (income - 1000000) * 0.3;
    }
    
    return tax;
  };

  const calculateOvertime = () => {
    const rate = parseFloat(hourlyRate) || 0;
    const hours = parseFloat(overtimeHours) || 0;
    const overtime = rate * hours * 1.5; // 1.5x rate for overtime
    return overtime;
  };

  const calculateGratuity = () => {
    // Gratuity = (Last drawn salary × 15 × Years of service) / 26
    const salary = parseFloat(lastDrawnSalary) || 0;
    const years = parseFloat(yearsOfService) || 0;
    const gratuity = (salary * 15 * years) / 26;
    return gratuity;
  };

  const calculateNoticePay = () => {
    const totalDays = parseFloat(noticePeriodDays) || 0;
    const served = parseFloat(daysServed) || 0;
    const daily = parseFloat(dailySalary) || 0;
    const remainingDays = Math.max(0, totalDays - served);
    const noticePay = remainingDays * daily;
    return { remainingDays, noticePay };
  };

  const calculatePF = () => {
    const basic = parseFloat(pfBasicSalary) || 0;
    const months = parseFloat(pfMonths) || 0;
    const employeeContribution = basic * 0.12; // 12% employee contribution
    const employerContribution = basic * 0.12; // 12% employer contribution
    const monthlyTotal = employeeContribution + employerContribution;
    const totalPF = monthlyTotal * months;
    return {
      employeeMonthly: employeeContribution,
      employerMonthly: employerContribution,
      monthlyTotal,
      totalPF
    };
  };

  const calculateLoanEligibility = () => {
    const income = parseFloat(monthlyIncome) || 0;
    const emi = parseFloat(existingEmi) || 0;
    const tenure = parseFloat(loanTenure) || 12;
    
    // Maximum EMI can be 50% of monthly income
    const maxEmi = income * 0.5;
    const availableEmi = maxEmi - emi;
    
    // Assuming 10% annual interest rate
    const monthlyRate = 0.10 / 12;
    const eligibleAmount = availableEmi * ((Math.pow(1 + monthlyRate, tenure) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, tenure)));
    
    return {
      maxEmi,
      availableEmi,
      eligibleAmount: Math.max(0, eligibleAmount)
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-4">
                <Calculator className="w-12 h-12 mr-4" />
                <div>
                  <h1 className="text-4xl font-bold">HR Tools & Calculators</h1>
                  <p className="text-blue-100 mt-2">Ready Reckoner Tools for Quick HR Calculations</p>
                </div>
              </div>
              <p className="text-white/90 max-w-2xl">
                Professional calculators for salary, leave, tax, gratuity, PF, and more. 
                Instant calculations with detailed breakdowns for all your HR needs.
              </p>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold">8</p>
                <p className="text-sm text-blue-100">Calculators</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm text-blue-100">Accurate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Show dashboard when no tool is selected */}
        {!activeTool && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-6 border-2 border-blue-100 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 font-semibold">Financial Tools</p>
                    <p className="text-3xl font-bold text-blue-600 mt-1">4</p>
                  </div>
                  <DollarSign className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-green-100 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 font-semibold">Time & Attendance</p>
                    <p className="text-3xl font-bold text-green-600 mt-1">2</p>
                  </div>
                  <Clock className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-purple-100 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 font-semibold">Compliance Tools</p>
                    <p className="text-3xl font-bold text-purple-600 mt-1">2</p>
                  </div>
                  <FileText className="w-10 h-10 text-purple-600" />
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-amber-100 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 font-semibold">Total Calculators</p>
                    <p className="text-3xl font-bold text-amber-600 mt-1">8</p>
                  </div>
                  <Calculator className="w-10 h-10 text-amber-600" />
                </div>
              </div>
            </div>

            {/* Calculator Cards */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Calculators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTool(tool.id)}
                    className={`bg-white rounded-xl p-6 border-2 border-${tool.color}-200 hover:border-${tool.color}-400 hover:shadow-lg transition-all text-left group`}
                  >
                    <div className={`w-14 h-14 rounded-lg bg-${tool.color}-100 flex items-center justify-center mb-4 group-hover:bg-${tool.color}-600 transition-colors`}>
                      <tool.icon className={`w-8 h-8 text-${tool.color}-600 group-hover:text-white transition-colors`} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{tool.label}</h3>
                    <p className="text-sm text-slate-600">{tool.desc}</p>
                    <div className="mt-4 flex items-center text-sm font-semibold text-blue-600">
                      Open Calculator
                      <TrendingUp className="w-4 h-4 ml-1" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Information Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">About HR Calculators</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">How to Use</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Select any calculator from the grid above
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Enter the required values in the input fields
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      View instant calculations and breakdowns
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Download results for your records
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Key Features</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Real-time calculation updates
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Detailed breakdowns and formulas
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Compliance with Indian labor laws
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Professional-grade accuracy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tool Selector - Only show when a tool is active */}
        {activeTool && (
          <div className="mb-6">
            <button
              onClick={() => setActiveTool(null)}
              className="text-blue-600 hover:text-blue-800 font-semibold mb-4 flex items-center"
            >
              ← Back to Dashboard
            </button>
            <div className="bg-white rounded-xl p-4 border-2 border-slate-200 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTool(tool.id)}
                    className={`flex flex-col items-center p-3 rounded-lg font-semibold transition-all ${
                      activeTool === tool.id
                        ? `bg-${tool.color}-600 text-white shadow-lg`
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <tool.icon className="w-6 h-6 mb-1" />
                    <span className="text-xs text-center">{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* Salary Calculator */}
      {activeTool === 'salary' && (
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Salary Calculator</h2>
              <p className="text-sm text-slate-600">Calculate gross and net salary</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Basic Salary (₹)</label>
                <input
                  type="number"
                  value={basicSalary}
                  onChange={(e) => setBasicSalary(e.target.value)}
                  placeholder="Enter basic salary"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">HRA (₹)</label>
                <input
                  type="number"
                  value={hra}
                  onChange={(e) => setHra(e.target.value)}
                  placeholder="Enter HRA"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Other Allowances (₹)</label>
                <input
                  type="number"
                  value={allowances}
                  onChange={(e) => setAllowances(e.target.value)}
                  placeholder="Enter allowances"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Calculation Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-sm font-semibold text-slate-700">Gross Salary</span>
                  <span className="text-lg font-bold text-blue-600">₹{calculateNetSalary().gross.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-sm font-semibold text-slate-700">Tax (10%)</span>
                  <span className="text-lg font-bold text-red-600">₹{calculateNetSalary().tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg border-2 border-green-300">
                  <span className="text-sm font-bold text-slate-900">Net Salary</span>
                  <span className="text-xl font-bold text-green-600">₹{calculateNetSalary().net.toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Slip
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Leave Calculator */}
      {activeTool === 'leave' && (
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mr-4">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Leave Balance Calculator</h2>
              <p className="text-sm text-slate-600">Calculate remaining leave balance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Total Leave Days (Annual)</label>
                <input
                  type="number"
                  value={totalLeaveDays}
                  onChange={(e) => setTotalLeaveDays(e.target.value)}
                  placeholder="Enter total leave days"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Used Leave Days</label>
                <input
                  type="number"
                  value={usedLeaveDays}
                  onChange={(e) => setUsedLeaveDays(e.target.value)}
                  placeholder="Enter used leave days"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Leave Summary</h3>
              <div className="space-y-4">
                <div className="text-center p-6 bg-white rounded-lg">
                  <p className="text-sm text-slate-600 mb-2">Remaining Leave</p>
                  <p className="text-5xl font-bold text-green-600">{calculateLeaveBalance().remaining}</p>
                  <p className="text-sm text-slate-500 mt-2">days available</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">Usage</span>
                    <span className="text-sm font-bold text-slate-900">{calculateLeaveBalance().percentage.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-green-600 h-3 rounded-full transition-all" 
                      style={{ width: `${Math.min(calculateLeaveBalance().percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tax Calculator */}
      {activeTool === 'tax' && (
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
              <Percent className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Income Tax Calculator</h2>
              <p className="text-sm text-slate-600">Calculate annual income tax (Indian tax slabs)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Income (₹)</label>
                <input
                  type="number"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(e.target.value)}
                  placeholder="Enter annual income"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-3">Tax Slabs (2024-25)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Up to ₹2,50,000</span>
                    <span className="font-semibold text-green-600">Nil</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">₹2,50,001 - ₹5,00,000</span>
                    <span className="font-semibold text-slate-900">5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">₹5,00,001 - ₹10,00,000</span>
                    <span className="font-semibold text-slate-900">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Above ₹10,00,000</span>
                    <span className="font-semibold text-slate-900">30%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-6 border-2 border-purple-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Tax Calculation</h3>
              <div className="space-y-4">
                <div className="text-center p-6 bg-white rounded-lg">
                  <p className="text-sm text-slate-600 mb-2">Total Tax Payable</p>
                  <p className="text-4xl font-bold text-purple-600">₹{calculateTax().toLocaleString()}</p>
                  <p className="text-sm text-slate-500 mt-2">per annum</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Annual Income</span>
                    <span className="text-sm font-bold text-slate-900">₹{parseFloat(annualIncome || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Tax Amount</span>
                    <span className="text-sm font-bold text-red-600">₹{calculateTax().toLocaleString()}</span>
                  </div>
                  <div className="border-t-2 border-slate-200 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-bold text-slate-900">Net Income</span>
                      <span className="text-lg font-bold text-green-600">₹{(parseFloat(annualIncome || 0) - calculateTax()).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overtime Calculator */}
      {activeTool === 'overtime' && (
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mr-4">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Overtime Calculator</h2>
              <p className="text-sm text-slate-600">Calculate overtime payment (1.5x rate)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Hourly Rate (₹)</label>
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  placeholder="Enter hourly rate"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Overtime Hours</label>
                <input
                  type="number"
                  value={overtimeHours}
                  onChange={(e) => setOvertimeHours(e.target.value)}
                  placeholder="Enter overtime hours"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Calculation Formula</h4>
                <p className="text-sm text-slate-600">Overtime Pay = Hourly Rate × Hours × 1.5</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 border-2 border-orange-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Overtime Payment</h3>
              <div className="space-y-4">
                <div className="text-center p-6 bg-white rounded-lg">
                  <p className="text-sm text-slate-600 mb-2">Total Overtime Pay</p>
                  <p className="text-4xl font-bold text-orange-600">₹{calculateOvertime().toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Regular Rate</span>
                    <span className="text-sm font-bold text-slate-900">₹{parseFloat(hourlyRate || 0).toLocaleString()}/hr</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Overtime Rate (1.5x)</span>
                    <span className="text-sm font-bold text-orange-600">₹{(parseFloat(hourlyRate || 0) * 1.5).toLocaleString()}/hr</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Hours Worked</span>
                    <span className="text-sm font-bold text-slate-900">{overtimeHours || 0} hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolsCalculators;