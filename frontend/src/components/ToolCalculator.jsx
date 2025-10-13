import React, { useState } from 'react';
import { ArrowLeft, Calculator, Download } from 'lucide-react';

const ToolCalculator = ({ tool, onBack }) => {
  const [inputs, setInputs] = useState({});
  const [results, setResults] = useState(null);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateResults = () => {
    // Different calculation logic based on tool ID
    switch (tool.id) {
      case 'leave-calculator':
        calculateLeave();
        break;
      case 'overtime-calculator':
        calculateOvertime();
        break;
      case 'increment-calculator':
        calculateIncrement();
        break;
      case 'pf-esi-calculator':
        calculatePFESI();
        break;
      case 'notice-calculator':
        calculateNotice();
        break;
      case 'fnf-calculator':
        calculateFNF();
        break;
      case 'leave-encashment':
        calculateLeaveEncashment();
        break;
      default:
        setResults({ 'Result': 'Calculation complete' });
    }
  };

  const calculateLeave = () => {
    const joiningDate = new Date(inputs['Joining Date'] || new Date());
    const leavesTaken = parseFloat(inputs['Leaves Taken'] || 0);
    const monthsWorked = Math.floor((new Date() - joiningDate) / (1000 * 60 * 60 * 24 * 30));
    const accrued = monthsWorked * 1.25; // Assuming 1.25 leaves per month
    const available = Math.max(0, accrued - leavesTaken);
    
    setResults({
      'Available Balance': `${available.toFixed(1)} days`,
      'Leaves Accrued': `${accrued.toFixed(1)} days`,
      'Leaves Taken': `${leavesTaken} days`,
      'Next Accrual Date': new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleDateString(),
      'Encashment Eligible': available > 10 ? 'Yes' : 'No'
    });
  };

  const calculateOvertime = () => {
    const basicSalary = parseFloat(inputs['Basic Salary'] || 0);
    const overtimeHours = parseFloat(inputs['Overtime Hours'] || 0);
    const dayType = inputs['Day Type (Weekday/Weekend/Holiday)'] || 'Weekday';
    
    const hourlyRate = (basicSalary / 26) / 8;
    const multiplier = dayType === 'Holiday' ? 2.5 : dayType === 'Weekend' ? 2 : 1.5;
    const overtimeAmount = hourlyRate * overtimeHours * multiplier;
    const totalComp = basicSalary + overtimeAmount;
    
    setResults({
      'Hourly Rate': `₹${hourlyRate.toFixed(2)}`,
      'Multiplier': `${multiplier}x`,
      'Overtime Amount': `₹${overtimeAmount.toFixed(2)}`,
      'Total Compensation': `₹${totalComp.toFixed(2)}`,
      'Tax Implications': 'To be deducted as per IT rules'
    });
  };

  const calculateIncrement = () => {
    const currentCTC = parseFloat(inputs['Current CTC'] || 0);
    const incrementPercent = parseFloat(inputs['Increment Percentage'] || 0);
    
    const incrementAmount = (currentCTC * incrementPercent) / 100;
    const newCTC = currentCTC + incrementAmount;
    const monthlyIncrease = incrementAmount / 12;
    
    setResults({
      'Current CTC': `₹${currentCTC.toLocaleString()}`,
      'Increment %': `${incrementPercent}%`,
      'New CTC': `₹${newCTC.toLocaleString()}`,
      'Annual Increase': `₹${incrementAmount.toLocaleString()}`,
      'Monthly Increase': `₹${monthlyIncrease.toLocaleString()}`
    });
  };

  const calculatePFESI = () => {
    const basicSalary = parseFloat(inputs['Basic Salary'] || 0);
    const da = parseFloat(inputs['DA'] || 0);
    
    const pfBase = basicSalary + da;
    const employeePF = pfBase * 0.12;
    const employerPF = pfBase * 0.12;
    const esiContribution = basicSalary <= 21000 ? pfBase * 0.0075 : 0;
    
    setResults({
      'PF Base': `₹${pfBase.toLocaleString()}`,
      'Employee PF (12%)': `₹${employeePF.toLocaleString()}`,
      'Employer PF (12%)': `₹${employerPF.toLocaleString()}`,
      'Total PF': `₹${(employeePF + employerPF).toLocaleString()}`,
      'ESI Contribution (0.75%)': esiContribution > 0 ? `₹${esiContribution.toLocaleString()}` : 'Not Applicable'
    });
  };

  const calculateNotice = () => {
    const resignationDate = new Date(inputs['Resignation Date'] || new Date());
    const noticeDays = parseInt(inputs['Notice Period Days'] || 30);
    const leaveBalance = parseFloat(inputs['Leave Balance'] || 0);
    
    const lastWorkingDay = new Date(resignationDate);
    lastWorkingDay.setDate(lastWorkingDay.getDate() + noticeDays - leaveBalance);
    
    const shortfallDays = Math.max(0, noticeDays - leaveBalance);
    
    setResults({
      'Resignation Date': resignationDate.toLocaleDateString(),
      'Notice Period': `${noticeDays} days`,
      'Leave Adjustment': `${leaveBalance} days`,
      'Last Working Day': lastWorkingDay.toLocaleDateString(),
      'Shortfall Days': `${shortfallDays} days`,
      'Notice Buyout Required': shortfallDays > 0 ? 'Yes' : 'No'
    });
  };

  const calculateFNF = () => {
    const pendingSalary = parseFloat(inputs['Pending Salary'] || 0);
    const leaveBalance = parseFloat(inputs['Leave Balance'] || 0);
    const bonus = parseFloat(inputs['Bonus'] || 0);
    const deductions = parseFloat(inputs['Deductions'] || 0);
    
    const totalPayable = pendingSalary + (leaveBalance * (pendingSalary / 30)) + bonus;
    const netSettlement = totalPayable - deductions;
    
    setResults({
      'Pending Salary': `₹${pendingSalary.toLocaleString()}`,
      'Leave Encashment': `₹${(leaveBalance * (pendingSalary / 30)).toLocaleString()}`,
      'Bonus/Incentives': `₹${bonus.toLocaleString()}`,
      'Total Payable': `₹${totalPayable.toLocaleString()}`,
      'Deductions': `₹${deductions.toLocaleString()}`,
      'Net Settlement Amount': `₹${netSettlement.toLocaleString()}`
    });
  };

  const calculateLeaveEncashment = () => {
    const leaveBalance = parseFloat(inputs['Leave Balance'] || 0);
    const basicSalary = parseFloat(inputs['Basic Salary'] || 0);
    
    const encashableLeaves = Math.min(leaveBalance, 30); // Max 30 days
    const grossAmount = (basicSalary / 30) * encashableLeaves;
    const taxDeduction = grossAmount * 0.1; // Assuming 10% tax
    const netAmount = grossAmount - taxDeduction;
    
    setResults({
      'Total Leave Balance': `${leaveBalance} days`,
      'Encashable Leaves': `${encashableLeaves} days`,
      'Per Day Rate': `₹${(basicSalary / 30).toFixed(2)}`,
      'Gross Amount': `₹${grossAmount.toLocaleString()}`,
      'Tax Deduction (10%)': `₹${taxDeduction.toLocaleString()}`,
      'Net Amount After Tax': `₹${netAmount.toLocaleString()}`
    });
  };

  const resetCalculator = () => {
    setInputs({});
    setResults(null);
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        data-testid="back-to-tools"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Tools
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className={`bg-gradient-to-r from-${tool.color}-500 to-${tool.color}-600 p-6 text-white`}>
          <div className="flex items-center mb-2">
            <Calculator className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">{tool.name}</h2>
          </div>
          <p className="text-white/90">{tool.description}</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Input Values</h3>
              <div className="space-y-4">
                {tool.inputs.map((input, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {input}
                    </label>
                    {input.includes('Date') ? (
                      <input
                        type="date"
                        value={inputs[input] || ''}
                        onChange={(e) => handleInputChange(input, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        data-testid={`input-${idx}`}
                      />
                    ) : input.includes('Type') ? (
                      <select
                        value={inputs[input] || ''}
                        onChange={(e) => handleInputChange(input, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        data-testid={`input-${idx}`}
                      >
                        <option value="">Select...</option>
                        <option value="Weekday">Weekday</option>
                        <option value="Weekend">Weekend</option>
                        <option value="Holiday">Holiday</option>
                      </select>
                    ) : (
                      <input
                        type="number"
                        value={inputs[input] || ''}
                        onChange={(e) => handleInputChange(input, e.target.value)}
                        placeholder={`Enter ${input.toLowerCase()}`}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        data-testid={`input-${idx}`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  onClick={calculateResults}
                  className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                  data-testid="calculate-button"
                >
                  Calculate
                </button>
                <button
                  onClick={resetCalculator}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  data-testid="reset-button"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Results Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
              {results ? (
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-100">
                  <div className="space-y-4">
                    {Object.entries(results).map(([key, value], idx) => (
                      <div key={idx} className="flex justify-between items-center pb-3 border-b border-indigo-100 last:border-0">
                        <span className="text-sm font-medium text-gray-700">{key}:</span>
                        <span className="text-base font-bold text-gray-900" data-testid={`result-${idx}`}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 w-full bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-medium flex items-center justify-center border border-indigo-200">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </button>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-12 text-center border-2 border-dashed border-gray-200">
                  <Calculator className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Enter values and click Calculate to see results</p>
                </div>
              )}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> All calculations are approximate and for reference purposes only. 
              Please consult with the HR department for official calculations and confirmations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCalculator;
