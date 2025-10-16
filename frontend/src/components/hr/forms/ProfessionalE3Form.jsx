import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Plus, Trash2, FileText, Calendar, Shield } from 'lucide-react';

const ProfessionalE3Form = () => {
  const [formData, setFormData] = useState({
    effective_date: '',
    log_month: '', log_year: '',
    entries: [{ date: '', emp_id: '', emp_name: '', dept: '', leave_type: '', from_time: '', to_time: '', duration: '', reason: '', approved_by: '', remarks: '' }],
    sig_hr_name: '', sig_hr_date: '',
    sig_co_name: '', sig_co_date: ''
  });

  const [logoData, setLogoData] = useState('');

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('e3_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('e3_form_data', JSON.stringify(updated));
  };

  const handleArrayChange = (index, field, value) => {
    const updated = { ...formData };
    updated.entries[index][field] = value;
    setFormData(updated);
    localStorage.setItem('e3_form_data', JSON.stringify(updated));
  };

  const addRow = () => {
    const updated = { ...formData };
    updated.entries.push({ date: '', emp_id: '', emp_name: '', dept: '', leave_type: '', from_time: '', to_time: '', duration: '', reason: '', approved_by: '', remarks: '' });
    setFormData(updated);
  };

  const removeRow = (index) => {
    if (formData.entries.length > 1) {
      const updated = { ...formData };
      updated.entries.splice(index, 1);
      setFormData(updated);
      localStorage.setItem('e3_form_data', JSON.stringify(updated));
    }
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'E3-Leave-Entry-Log.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('e3_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-2xl">
      {/* Compact NABH-Compliant Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-8 py-6">
        <div className="flex items-center justify-between gap-6">
          <div className="flex-shrink-0">
            {logoData && <img src={logoData} alt="Koyili Hospital Logo" className="w-24 h-24 bg-white rounded-lg p-2 shadow-xl object-contain" />}
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-bold tracking-wide mb-1">KOYILI HOSPITAL</h1>
            <p className="text-blue-200 text-sm font-semibold">Human Resources Department</p>
            <p className="text-blue-300 text-xs">NABH Accredited • Pallikkunnu, Talap, Kannur, Kerala</p>
            <div className="mt-3 pt-3 border-t border-blue-400/30">
              <h2 className="text-xl font-bold">LEAVE & SHORT LEAVE ENTRY LOG</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">E3</p>
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
      <div className="bg-blue-50 px-8 py-3 border-b-2 border-blue-900">
        <div className="flex items-center gap-6 text-xs font-semibold text-blue-900">
          <span>📋 Leave Management</span>
          <div className="w-px h-4 bg-blue-300"></div>
          <span>SOP E.3 – Leave Entry Log</span>
        </div>
      </div>

      <div className="bg-white border-b-2 border-blue-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-emerald-200">
        <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">Leave Management</div>
        <h2 className="text-3xl font-bold text-emerald-900 mb-3">LEAVE / SHORT LEAVE ENTRY LOG</h2>
        <div className="flex items-center gap-4 text-sm text-emerald-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP E.3 – Leave & Short Leave Management</span></div>
          <div className="w-px h-4 bg-emerald-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 6.1-6.5</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-emerald-200 rounded-xl p-6 bg-emerald-50">
          <h3 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-emerald-600 font-semibold">Document Title:</span><p className="text-emerald-900">Leave / Short Leave Entry Log</p></div>
            <div><span className="text-emerald-600 font-semibold">Annexure Number:</span><p className="text-emerald-900">E3</p></div>
            <div><span className="text-emerald-600 font-semibold">Linked SOP:</span><p className="text-emerald-900">SOP E.3 – Leave & Short Leave Management</p></div>
            <div><span className="text-emerald-600 font-semibold">By-Laws Reference:</span><p className="text-emerald-900">Section 6.1-6.5</p></div>
            <div><span className="text-emerald-600 font-semibold">Version No.:</span><p className="text-emerald-900">1.0</p></div>
            <div>
              <span className="text-emerald-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effective_date} onChange={(e) => handleChange('effective_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-emerald-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-emerald-900 mb-4">Log Period</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-emerald-700 mb-2">Month:</label>
              <select value={formData.log_month} onChange={(e) => handleChange('log_month', e.target.value)}
                className="w-full px-3 py-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500">
                <option value="">-- Select --</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-emerald-700 mb-2">Year:</label>
              <input type="number" value={formData.log_year} onChange={(e) => handleChange('log_year', e.target.value)}
                placeholder="YYYY"
                className="w-full px-3 py-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-emerald-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-emerald-900">Leave Entry Log</h3>
            <button onClick={addRow} className="px-3 py-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-xs font-semibold flex items-center gap-1">
              <Plus className="w-3 h-3" /> Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-emerald-700 text-white">
                  <th className="border border-emerald-300 px-2 py-2 text-left font-semibold w-8">Sl.</th>
                  <th className="border border-emerald-300 px-2 py-2 text-left font-semibold">Date</th>
                  <th className="border border-emerald-300 px-2 py-2 text-left font-semibold">Emp ID</th>
                  <th className="border border-emerald-300 px-2 py-2 text-left font-semibold">Name</th>
                  <th className="border border-emerald-300 px-2 py-2 text-left font-semibold">Department</th>
                  <th className="border border-emerald-300 px-2 py-2 text-left font-semibold">Leave Type</th>
                  <th className="border border-emerald-300 px-2 py-2 text-left font-semibold">From</th>
                  <th className="border border-emerald-300 px-2 py-2 text-left font-semibold">To</th>
                  <th className="border border-emerald-300 px-2 py-2 text-left font-semibold">Duration</th>
                  <th className="border border-emerald-300 px-2 py-2 text-left font-semibold">Reason</th>
                  <th className="border border-emerald-300 px-2 py-2 text-left font-semibold">Approved By</th>
                  <th className="border border-emerald-300 px-2 py-2 text-left font-semibold">Remarks</th>
                  <th className="border border-emerald-300 px-2 py-2 text-center font-semibold w-8">Del</th>
                </tr>
              </thead>
              <tbody>
                {formData.entries.map((entry, index) => (
                  <tr key={index} className="hover:bg-emerald-50">
                    <td className="border border-emerald-300 px-2 py-2 text-center">{index + 1}</td>
                    <td className="border border-emerald-300 px-2 py-2"><input type="date" value={entry.date} onChange={(e) => handleArrayChange(index, 'date', e.target.value)} className="w-28 px-1 py-1 border border-emerald-200 rounded text-xs" /></td>
                    <td className="border border-emerald-300 px-2 py-2"><input type="text" value={entry.emp_id} onChange={(e) => handleArrayChange(index, 'emp_id', e.target.value)} className="w-20 px-1 py-1 border border-emerald-200 rounded text-xs" /></td>
                    <td className="border border-emerald-300 px-2 py-2"><input type="text" value={entry.emp_name} onChange={(e) => handleArrayChange(index, 'emp_name', e.target.value)} className="w-28 px-1 py-1 border border-emerald-200 rounded text-xs" /></td>
                    <td className="border border-emerald-300 px-2 py-2"><input type="text" value={entry.dept} onChange={(e) => handleArrayChange(index, 'dept', e.target.value)} className="w-24 px-1 py-1 border border-emerald-200 rounded text-xs" /></td>
                    <td className="border border-emerald-300 px-2 py-2">
                      <select value={entry.leave_type} onChange={(e) => handleArrayChange(index, 'leave_type', e.target.value)} className="w-28 px-1 py-1 border border-emerald-200 rounded text-xs">
                        <option value="">--</option>
                        <option value="Casual Leave">Casual Leave</option>
                        <option value="Sick Leave">Sick Leave</option>
                        <option value="Earned Leave">Earned Leave</option>
                        <option value="Short Leave">Short Leave</option>
                        <option value="Emergency Leave">Emergency Leave</option>
                      </select>
                    </td>
                    <td className="border border-emerald-300 px-2 py-2"><input type="time" value={entry.from_time} onChange={(e) => handleArrayChange(index, 'from_time', e.target.value)} className="w-20 px-1 py-1 border border-emerald-200 rounded text-xs" /></td>
                    <td className="border border-emerald-300 px-2 py-2"><input type="time" value={entry.to_time} onChange={(e) => handleArrayChange(index, 'to_time', e.target.value)} className="w-20 px-1 py-1 border border-emerald-200 rounded text-xs" /></td>
                    <td className="border border-emerald-300 px-2 py-2"><input type="text" value={entry.duration} onChange={(e) => handleArrayChange(index, 'duration', e.target.value)} placeholder="hrs" className="w-16 px-1 py-1 border border-emerald-200 rounded text-xs" /></td>
                    <td className="border border-emerald-300 px-2 py-2"><input type="text" value={entry.reason} onChange={(e) => handleArrayChange(index, 'reason', e.target.value)} className="w-32 px-1 py-1 border border-emerald-200 rounded text-xs" /></td>
                    <td className="border border-emerald-300 px-2 py-2"><input type="text" value={entry.approved_by} onChange={(e) => handleArrayChange(index, 'approved_by', e.target.value)} className="w-24 px-1 py-1 border border-emerald-200 rounded text-xs" /></td>
                    <td className="border border-emerald-300 px-2 py-2"><input type="text" value={entry.remarks} onChange={(e) => handleArrayChange(index, 'remarks', e.target.value)} className="w-24 px-1 py-1 border border-emerald-200 rounded text-xs" /></td>
                    <td className="border border-emerald-300 px-2 py-2 text-center"><button onClick={() => removeRow(index)} className="text-red-600 hover:text-red-800"><Trash2 className="w-3 h-3" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-2 border-emerald-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-emerald-900 mb-4">Signatures</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-emerald-800 mb-3">HR Manager (Record Maintenance)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-emerald-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500" /></div>
                <div><label className="block text-sm font-semibold text-emerald-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-emerald-200 pt-6">
              <h4 className="font-semibold text-emerald-800 mb-3">Compliance Officer (Audit Verification)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-emerald-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_co_name} onChange={(e) => handleChange('sig_co_name', e.target.value)}
                    className="w-full px-3 py-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500" /></div>
                <div><label className="block text-sm font-semibold text-emerald-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_co_date} onChange={(e) => handleChange('sig_co_date', e.target.value)}
                    className="w-full px-3 py-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-emerald-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-emerald-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-emerald-700">
            <li>All leave entries must be logged within 24 hours of approval.</li>
            <li>Short leave must be logged with exact from/to times for deduction calculation.</li>
            <li>This log must be reconciled monthly with leave application forms.</li>
            <li>Records must be retained for minimum 3 years for audits.</li>
          </ul>
        </section>
      </div>

      {/* Matching Blue Gradient Footer */}
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
            <p className="text-sm font-bold">Form E3</p>
            <p className="text-xs text-blue-200">Leave Entry Log</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalE3Form;