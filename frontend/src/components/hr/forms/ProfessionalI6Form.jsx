import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, Receipt } from 'lucide-react';

const ProfessionalI6Form = () => {
  const [formData, setFormData] = useState({
    emp_name: '', emp_id: '', dept: '', desig: '', bank_account: '', pan: '', pf_no: '',
    month: '', year: '', pay_date: '', basic: '', hra: '', transport: '', medical: '',
    special: '', overtime: '', bonus: '', gross: '', pf_ded: '', esi_ded: '', tax_ded: '',
    loan_ded: '', other_ded: '', total_ded: '', net: '', query_subject: '', query_desc: '',
    query_date: '', hr_response: '', hr_name: '', hr_date: ''
  });

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateSalary = () => {
    const basic = parseFloat(formData.basic) || 0;
    const hra = parseFloat(formData.hra) || 0;
    const transport = parseFloat(formData.transport) || 0;
    const medical = parseFloat(formData.medical) || 0;
    const special = parseFloat(formData.special) || 0;
    const overtime = parseFloat(formData.overtime) || 0;
    const bonus = parseFloat(formData.bonus) || 0;
    const gross = basic + hra + transport + medical + special + overtime + bonus;

    const pf_ded = parseFloat(formData.pf_ded) || 0;
    const esi_ded = parseFloat(formData.esi_ded) || 0;
    const tax_ded = parseFloat(formData.tax_ded) || 0;
    const loan_ded = parseFloat(formData.loan_ded) || 0;
    const other_ded = parseFloat(formData.other_ded) || 0;
    const total_ded = pf_ded + esi_ded + tax_ded + loan_ded + other_ded;
    const net = gross - total_ded;

    setFormData(prev => ({
      ...prev,
      gross: gross.toFixed(2),
      total_ded: total_ded.toFixed(2),
      net: net.toFixed(2)
    }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setLogoData(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const data = { logo: logoData, formData };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_I6_Salary_Slip.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          if (data.logo) setLogoData(data.logo);
          if (data.formData) setFormData(data.formData);
        } catch (err) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all fields?')) {
      setFormData({
        emp_name: '', emp_id: '', dept: '', desig: '', bank_account: '', pan: '', pf_no: '',
        month: '', year: '', pay_date: '', basic: '', hra: '', transport: '', medical: '',
        special: '', overtime: '', bonus: '', gross: '', pf_ded: '', esi_ded: '', tax_ded: '',
        loan_ded: '', other_ded: '', total_ded: '', net: '', query_subject: '', query_desc: '',
        query_date: '', hr_response: '', hr_name: '', hr_date: ''
      });
      setLogoData('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
    }
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-3 print:hidden">
        <div className="flex items-center gap-3 flex-wrap">
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm font-semibold"><Save className="w-4 h-4" /> Save</button>
          <button onClick={() => loadInputRef.current?.click()} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm font-semibold"><Upload className="w-4 h-4" /> Load</button>
          <button onClick={handleReset} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2 text-sm font-semibold"><RotateCcw className="w-4 h-4" /> Reset</button>
          <button onClick={handlePrint} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 text-sm font-semibold"><Printer className="w-4 h-4" /> Print</button>
          <button onClick={() => fileInputRef.current?.click()} className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 flex items-center gap-2 text-sm font-semibold"><Download className="w-4 h-4" /> Change Logo</button>
          <button onClick={calculateSalary} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2 text-sm font-semibold"><Receipt className="w-4 h-4" /> Calculate</button>
        </div>
      </div>
      <input ref={fileInputRef} type="file" accept="image/*,.svg" onChange={handleLogoUpload} className="hidden" />
      <input ref={loadInputRef} type="file" accept=".json" onChange={handleLoad} className="hidden" />

      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-8 py-6">
        <div className="flex items-center justify-between gap-6">
          <div className="flex-shrink-0">
            {logoData && <img src={logoData} alt="Koyili Hospital Logo" className="w-24 h-24 bg-white rounded-lg p-2 shadow-xl object-contain" />}
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-bold tracking-wide mb-1">KOYILI HOSPITAL</h1>
            <p className="text-blue-200 text-sm font-semibold">Finance & Payroll Department</p>
            <p className="text-blue-300 text-xs">NABH Accredited • Pallikkunnu, Talap, Kannur, Kerala</p>
            <div className="mt-3 pt-3 border-t border-blue-400/30">
              <h2 className="text-xl font-bold">SALARY SLIP</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">I6</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200">Version 1.0</p>
            </div>
            <div className="bg-yellow-500/90 px-3 py-1 rounded-full">
              <p className="text-xs font-bold text-blue-900">NABH</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Name</label><input type="text" name="emp_name" value={formData.emp_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label><input type="text" name="emp_id" value={formData.emp_id} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Department</label><input type="text" name="dept" value={formData.dept} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label><input type="text" name="desig" value={formData.desig} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Bank Account</label><input type="text" name="bank_account" value={formData.bank_account} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">PAN No</label><input type="text" name="pan" value={formData.pan} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">PF No</label><input type="text" name="pf_no" value={formData.pf_no} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pay Period</h3>
          <div className="grid grid-cols-3 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Month</label><select name="month" value={formData.month} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg"><option value="">Select</option><option value="january">January</option><option value="february">February</option><option value="march">March</option><option value="april">April</option><option value="may">May</option><option value="june">June</option><option value="july">July</option><option value="august">August</option><option value="september">September</option><option value="october">October</option><option value="november">November</option><option value="december">December</option></select></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Year</label><input type="number" name="year" value={formData.year} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Payment Date</label><input type="date" name="pay_date" value={formData.pay_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-5">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-green-900 mb-4">Earnings</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center"><label className="text-sm font-medium text-gray-700">Basic Salary</label><input type="number" step="0.01" name="basic" value={formData.basic} onChange={handleChange} className="w-32 px-2 py-1 border border-gray-300 rounded text-right" /></div>
              <div className="flex justify-between items-center"><label className="text-sm font-medium text-gray-700">HRA</label><input type="number" step="0.01" name="hra" value={formData.hra} onChange={handleChange} className="w-32 px-2 py-1 border border-gray-300 rounded text-right" /></div>
              <div className="flex justify-between items-center"><label className="text-sm font-medium text-gray-700">Transport Allowance</label><input type="number" step="0.01" name="transport" value={formData.transport} onChange={handleChange} className="w-32 px-2 py-1 border border-gray-300 rounded text-right" /></div>
              <div className="flex justify-between items-center"><label className="text-sm font-medium text-gray-700">Medical Allowance</label><input type="number" step="0.01" name="medical" value={formData.medical} onChange={handleChange} className="w-32 px-2 py-1 border border-gray-300 rounded text-right" /></div>
              <div className="flex justify-between items-center"><label className="text-sm font-medium text-gray-700">Special Allowance</label><input type="number" step="0.01" name="special" value={formData.special} onChange={handleChange} className="w-32 px-2 py-1 border border-gray-300 rounded text-right" /></div>
              <div className="flex justify-between items-center"><label className="text-sm font-medium text-gray-700">Overtime</label><input type="number" step="0.01" name="overtime" value={formData.overtime} onChange={handleChange} className="w-32 px-2 py-1 border border-gray-300 rounded text-right" /></div>
              <div className="flex justify-between items-center"><label className="text-sm font-medium text-gray-700">Bonus</label><input type="number" step="0.01" name="bonus" value={formData.bonus} onChange={handleChange} className="w-32 px-2 py-1 border border-gray-300 rounded text-right" /></div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-300"><label className="text-sm font-bold text-gray-900">Gross Salary</label><input type="text" name="gross" value={formData.gross} readOnly className="w-32 px-2 py-1 bg-green-50 border border-gray-300 rounded text-right font-bold" /></div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-red-900 mb-4">Deductions</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center"><label className="text-sm font-medium text-gray-700">PF Deduction</label><input type="number" step="0.01" name="pf_ded" value={formData.pf_ded} onChange={handleChange} className="w-32 px-2 py-1 border border-gray-300 rounded text-right" /></div>
              <div className="flex justify-between items-center"><label className="text-sm font-medium text-gray-700">ESI Deduction</label><input type="number" step="0.01" name="esi_ded" value={formData.esi_ded} onChange={handleChange} className="w-32 px-2 py-1 border border-gray-300 rounded text-right" /></div>
              <div className="flex justify-between items-center"><label className="text-sm font-medium text-gray-700">Tax Deduction (TDS)</label><input type="number" step="0.01" name="tax_ded" value={formData.tax_ded} onChange={handleChange} className="w-32 px-2 py-1 border border-gray-300 rounded text-right" /></div>
              <div className="flex justify-between items-center"><label className="text-sm font-medium text-gray-700">Loan Deduction</label><input type="number" step="0.01" name="loan_ded" value={formData.loan_ded} onChange={handleChange} className="w-32 px-2 py-1 border border-gray-300 rounded text-right" /></div>
              <div className="flex justify-between items-center"><label className="text-sm font-medium text-gray-700">Other Deductions</label><input type="number" step="0.01" name="other_ded" value={formData.other_ded} onChange={handleChange} className="w-32 px-2 py-1 border border-gray-300 rounded text-right" /></div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-300"><label className="text-sm font-bold text-gray-900">Total Deductions</label><input type="text" name="total_ded" value={formData.total_ded} readOnly className="w-32 px-2 py-1 bg-red-50 border border-gray-300 rounded text-right font-bold" /></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-5 mb-5">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">NET SALARY PAYABLE</h3>
            <div className="text-3xl font-bold">₹ {formData.net || '0.00'}</div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Payroll Helpdesk Query (Optional)</h3>
          <div className="space-y-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Query Subject</label><input type="text" name="query_subject" value={formData.query_subject} onChange={handleChange} placeholder="e.g., Salary component mismatch" className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Query Description</label><textarea name="query_desc" value={formData.query_desc} onChange={handleChange} rows="3" placeholder="Describe your query..." className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Query Date</label><input type="date" name="query_date" value={formData.query_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">HR Response</label><textarea name="hr_response" value={formData.hr_response} onChange={handleChange} rows="3" placeholder="HR response..." className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Responded By</label><input type="text" name="hr_name" value={formData.hr_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Response Date</label><input type="date" name="hr_date" value={formData.hr_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-8 py-5 mt-8">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xs">NABH</span>
            </div>
            <div>
              <p className="text-sm font-semibold">© 2024 Koyili Hospital</p>
              <p className="text-xs text-blue-200">NABH Accredited • Confidential Document • Version-controlled</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold">Form I6</p>
            <p className="text-xs text-blue-200">Salary Slip & Helpdesk Query</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalI6Form;
