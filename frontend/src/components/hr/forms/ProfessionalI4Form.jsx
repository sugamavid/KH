import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, Plus, Trash2, TrendingUp, Calculator } from 'lucide-react';

const ProfessionalI4Form = () => {
  const [formData, setFormData] = useState({
    bonus_type: '', financial_year: '', prep_name: '', prep_date: '',
    hr_name: '', hr_date: '', fin_name: '', fin_date: '', dir_name: '', dir_date: ''
  });

  const [bonusRows, setBonusRows] = useState([
    { emp_id: '', emp_name: '', dept: '', desig: '', basic_salary: '', performance_score: '', attendance: '', bonus_percent: '', bonus_amount: '', remarks: '' }
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRowChange = (index, field, value) => {
    const updated = [...bonusRows];
    updated[index][field] = value;
    
    if (['basic_salary', 'bonus_percent'].includes(field)) {
      const basic = parseFloat(updated[index].basic_salary) || 0;
      const percent = parseFloat(updated[index].bonus_percent) || 0;
      updated[index].bonus_amount = ((basic * percent) / 100).toFixed(2);
    }
    
    setBonusRows(updated);
  };

  const addRow = () => setBonusRows([...bonusRows, { emp_id: '', emp_name: '', dept: '', desig: '', basic_salary: '', performance_score: '', attendance: '', bonus_percent: '', bonus_amount: '', remarks: '' }]);
  const removeRow = (index) => bonusRows.length > 1 && setBonusRows(bonusRows.filter((_, i) => i !== index));

  const calculateAll = () => {
    const updated = bonusRows.map(row => ({
      ...row,
      bonus_amount: (((parseFloat(row.basic_salary) || 0) * (parseFloat(row.bonus_percent) || 0)) / 100).toFixed(2)
    }));
    setBonusRows(updated);
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
    const data = { logo: logoData, formData, bonusRows };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_I4_Bonus_Calculation.json';
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
          if (data.bonusRows) setBonusRows(data.bonusRows);
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
        bonus_type: '', financial_year: '', prep_name: '', prep_date: '',
        hr_name: '', hr_date: '', fin_name: '', fin_date: '', dir_name: '', dir_date: ''
      });
      setBonusRows([{ emp_id: '', emp_name: '', dept: '', desig: '', basic_salary: '', performance_score: '', attendance: '', bonus_percent: '', bonus_amount: '', remarks: '' }]);
      setLogoData('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
    }
  };

  const handlePrint = () => window.print();

  const totalBonus = bonusRows.reduce((sum, row) => sum + (parseFloat(row.bonus_amount) || 0), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-3 print:hidden">
        <div className="flex items-center gap-3 flex-wrap">
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm font-semibold"><Save className="w-4 h-4" /> Save</button>
          <button onClick={() => loadInputRef.current?.click()} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm font-semibold"><Upload className="w-4 h-4" /> Load</button>
          <button onClick={handleReset} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2 text-sm font-semibold"><RotateCcw className="w-4 h-4" /> Reset</button>
          <button onClick={handlePrint} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 text-sm font-semibold"><Printer className="w-4 h-4" /> Print</button>
          <button onClick={() => fileInputRef.current?.click()} className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 flex items-center gap-2 text-sm font-semibold"><Download className="w-4 h-4" /> Change Logo</button>
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
              <h2 className="text-xl font-bold">BONUS CALCULATION FORMAT</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">I4</p>
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

      <div className="max-w-[95%] mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Bonus Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Bonus Type</label><select name="bonus_type" value={formData.bonus_type} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg"><option value="">Select</option><option value="annual">Annual Performance Bonus</option><option value="diwali">Festival Bonus (Diwali)</option><option value="retention">Retention Bonus</option><option value="spot">Spot Award Bonus</option><option value="referral">Referral Bonus</option><option value="project">Project Completion Bonus</option></select></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Financial Year</label><input type="text" name="financial_year" value={formData.financial_year} onChange={handleChange} placeholder="e.g., 2024-2025" className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><TrendingUp className="w-5 h-5" />Bonus Calculation ({bonusRows.length} employees)</h3>
              <p className="text-sm text-gray-600">Total Bonus: ₹{totalBonus.toFixed(2)}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={calculateAll} className="px-3 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 text-sm font-semibold">
                <Calculator className="w-4 h-4" /> Calculate All
              </button>
              <button onClick={addRow} className="px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm font-semibold">
                <Plus className="w-4 h-4" /> Add Row
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-200 px-1 py-2">#</th>
                  <th className="border border-gray-200 px-1 py-2">Emp ID</th>
                  <th className="border border-gray-200 px-1 py-2">Name</th>
                  <th className="border border-gray-200 px-1 py-2">Dept</th>
                  <th className="border border-gray-200 px-1 py-2">Desig</th>
                  <th className="border border-gray-200 px-1 py-2">Basic(₹)</th>
                  <th className="border border-gray-200 px-1 py-2">Perf Score</th>
                  <th className="border border-gray-200 px-1 py-2">Attend%</th>
                  <th className="border border-gray-200 px-1 py-2">Bonus%</th>
                  <th className="border border-gray-200 px-1 py-2 bg-green-50">Bonus(₹)</th>
                  <th className="border border-gray-200 px-1 py-2">Remarks</th>
                  <th className="border border-gray-200 px-1 py-2">Del</th>
                </tr>
              </thead>
              <tbody>
                {bonusRows.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 px-1 py-1 text-center">{index + 1}</td>
                    <td className="border border-gray-200 px-1 py-1"><input value={row.emp_id} onChange={(e) => handleRowChange(index, 'emp_id', e.target.value)} className="w-20 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-1 py-1"><input value={row.emp_name} onChange={(e) => handleRowChange(index, 'emp_name', e.target.value)} className="w-32 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-1 py-1"><input value={row.dept} onChange={(e) => handleRowChange(index, 'dept', e.target.value)} className="w-20 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-1 py-1"><input value={row.desig} onChange={(e) => handleRowChange(index, 'desig', e.target.value)} className="w-20 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-1 py-1"><input type="number" step="0.01" value={row.basic_salary} onChange={(e) => handleRowChange(index, 'basic_salary', e.target.value)} className="w-24 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-1 py-1"><input type="number" min="0" max="5" step="0.1" value={row.performance_score} onChange={(e) => handleRowChange(index, 'performance_score', e.target.value)} className="w-14 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-1 py-1"><input type="number" min="0" max="100" value={row.attendance} onChange={(e) => handleRowChange(index, 'attendance', e.target.value)} className="w-14 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-1 py-1"><input type="number" step="0.1" value={row.bonus_percent} onChange={(e) => handleRowChange(index, 'bonus_percent', e.target.value)} className="w-14 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-1 py-1 bg-green-50"><input value={row.bonus_amount} readOnly className="w-24 px-1 py-0.5 bg-green-50 border border-gray-300 rounded text-xs font-semibold" /></td>
                    <td className="border border-gray-200 px-1 py-1"><input value={row.remarks} onChange={(e) => handleRowChange(index, 'remarks', e.target.value)} className="w-28 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-1 py-1 text-center">
                      <button onClick={() => removeRow(index)} disabled={bonusRows.length === 1} className="p-0.5 text-red-600 hover:text-red-800 disabled:text-gray-400">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Approvals</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-gray-200 px-3 py-2 text-left">Role</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Name</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Prepared By</td>
                <td className="border border-gray-200 px-3 py-2"><input name="prep_name" value={formData.prep_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="prep_date" value={formData.prep_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">HR Verification</td>
                <td className="border border-gray-200 px-3 py-2"><input name="hr_name" value={formData.hr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="hr_date" value={formData.hr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Finance Approval</td>
                <td className="border border-gray-200 px-3 py-2"><input name="fin_name" value={formData.fin_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="fin_date" value={formData.fin_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Director Approval</td>
                <td className="border border-gray-200 px-3 py-2"><input name="dir_name" value={formData.dir_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="dir_date" value={formData.dir_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
            </tbody>
          </table>
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
            <p className="text-sm font-bold">Form I4</p>
            <p className="text-xs text-blue-200">Bonus Calculation Format</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalI4Form;
