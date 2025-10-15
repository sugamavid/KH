import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Plus, Trash2, UserCheck, Calendar, Shield } from 'lucide-react';

const ProfessionalD5Form = () => {
  const [formData, setFormData] = useState({
    effective_date: '',
    employees: [{ emp_id: '', emp_name: '', doj: '', aadhar: '', pan: '', uan: '', esi_no: '', bank_ac: '', remarks: '' }],
    sig_hr_name: '', sig_hr_date: '',
    sig_co_name: '', sig_co_date: ''
  });

  const [logoData, setLogoData] = useState('');

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('d5_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('d5_form_data', JSON.stringify(updated));
  };

  const handleArrayChange = (index, field, value) => {
    const updated = { ...formData };
    updated.employees[index][field] = value;
    setFormData(updated);
    localStorage.setItem('d5_form_data', JSON.stringify(updated));
  };

  const addRow = () => {
    const updated = { ...formData };
    updated.employees.push({ emp_id: '', emp_name: '', doj: '', aadhar: '', pan: '', uan: '', esi_no: '', bank_ac: '', remarks: '' });
    setFormData(updated);
  };

  const removeRow = (index) => {
    if (formData.employees.length > 1) {
      const updated = { ...formData };
      updated.employees.splice(index, 1);
      setFormData(updated);
      localStorage.setItem('d5_form_data', JSON.stringify(updated));
    }
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'D5-KYC-UAN-ESIC-Mapping.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('d5_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-orange-700 via-amber-600 to-orange-600 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {logoData && <img src={logoData} alt="Logo" className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg object-contain" />}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
              <p className="text-orange-200 text-sm mt-1">Human Resources Department</p>
              <p className="text-orange-300 text-xs">Pallikkunnu, Talap, Kannur, Kerala</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-orange-200 mb-1">KYC Document</p>
              <p className="text-sm font-bold">MAPPING SHEET</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 px-8 py-4 border-b-2 border-orange-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-orange-900">Annexure:</span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded font-bold">D5</span>
          </div>
          <div className="w-px h-4 bg-orange-300"></div>
          <div><span className="font-semibold text-orange-900">SOP:</span> D.5</div>
          <div className="w-px h-4 bg-orange-300"></div>
          <div><span className="font-semibold text-orange-900">Version:</span> 1.0</div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-orange-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-orange-200">
        <div className="inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">KYC Management</div>
        <h2 className="text-3xl font-bold text-orange-900 mb-3">KYC / UAN / ESIC MAPPING SHEET</h2>
        <div className="flex items-center gap-4 text-sm text-orange-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP D.5 – KYC & Statutory Mapping</span></div>
          <div className="w-px h-4 bg-orange-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 30.5</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-orange-200 rounded-xl p-6 bg-orange-50">
          <h3 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-orange-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-orange-600 font-semibold">Document Title:</span><p className="text-orange-900">KYC / UAN / ESIC Mapping Sheet</p></div>
            <div><span className="text-orange-600 font-semibold">Annexure Number:</span><p className="text-orange-900">D5</p></div>
            <div><span className="text-orange-600 font-semibold">Linked SOP:</span><p className="text-orange-900">SOP D.5 – KYC & Statutory Mapping</p></div>
            <div><span className="text-orange-600 font-semibold">By-Laws Reference:</span><p className="text-orange-900">Section 30.5</p></div>
            <div><span className="text-orange-600 font-semibold">Version No.:</span><p className="text-orange-900">1.0</p></div>
            <div>
              <span className="text-orange-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effective_date} onChange={(e) => handleChange('effective_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-orange-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-orange-900 mb-4">Purpose</h3>
          <p className="text-sm text-orange-700 leading-relaxed">
            This Annexure provides centralized mapping of employee KYC details with statutory identifiers (UAN, ESIC, PAN, Aadhar). 
            It ensures compliance with statutory requirements and facilitates quick reference for HR, Finance, and Compliance teams.
          </p>
        </section>

        <section className="border-2 border-orange-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-orange-900">Employee KYC Mapping</h3>
            <div className="flex items-center gap-3">
              <span className="text-sm text-orange-600">Employees: <strong>{formData.employees.length}</strong></span>
              <button onClick={addRow} className="px-3 py-1 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs font-semibold flex items-center gap-1">
                <Plus className="w-3 h-3" /> Add Row
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-orange-700 text-white">
                  <th className="border border-orange-300 px-2 py-2 text-left font-semibold w-8">Sl.</th>
                  <th className="border border-orange-300 px-2 py-2 text-left font-semibold">Emp ID</th>
                  <th className="border border-orange-300 px-2 py-2 text-left font-semibold">Employee Name</th>
                  <th className="border border-orange-300 px-2 py-2 text-left font-semibold">DOJ</th>
                  <th className="border border-orange-300 px-2 py-2 text-left font-semibold">Aadhar No.</th>
                  <th className="border border-orange-300 px-2 py-2 text-left font-semibold">PAN No.</th>
                  <th className="border border-orange-300 px-2 py-2 text-left font-semibold">UAN</th>
                  <th className="border border-orange-300 px-2 py-2 text-left font-semibold">ESIC No.</th>
                  <th className="border border-orange-300 px-2 py-2 text-left font-semibold">Bank A/C</th>
                  <th className="border border-orange-300 px-2 py-2 text-left font-semibold">Remarks</th>
                  <th className="border border-orange-300 px-2 py-2 text-center font-semibold w-8">Del</th>
                </tr>
              </thead>
              <tbody>
                {formData.employees.map((emp, index) => (
                  <tr key={index} className="hover:bg-orange-50">
                    <td className="border border-orange-300 px-2 py-2 text-center">{index + 1}</td>
                    <td className="border border-orange-300 px-2 py-2"><input type="text" value={emp.emp_id} onChange={(e) => handleArrayChange(index, 'emp_id', e.target.value)} className="w-20 px-1 py-1 border border-orange-200 rounded text-xs" /></td>
                    <td className="border border-orange-300 px-2 py-2"><input type="text" value={emp.emp_name} onChange={(e) => handleArrayChange(index, 'emp_name', e.target.value)} className="w-32 px-1 py-1 border border-orange-200 rounded text-xs" /></td>
                    <td className="border border-orange-300 px-2 py-2"><input type="date" value={emp.doj} onChange={(e) => handleArrayChange(index, 'doj', e.target.value)} className="w-28 px-1 py-1 border border-orange-200 rounded text-xs" /></td>
                    <td className="border border-orange-300 px-2 py-2"><input type="text" value={emp.aadhar} onChange={(e) => handleArrayChange(index, 'aadhar', e.target.value)} className="w-28 px-1 py-1 border border-orange-200 rounded text-xs" /></td>
                    <td className="border border-orange-300 px-2 py-2"><input type="text" value={emp.pan} onChange={(e) => handleArrayChange(index, 'pan', e.target.value)} className="w-24 px-1 py-1 border border-orange-200 rounded text-xs" /></td>
                    <td className="border border-orange-300 px-2 py-2"><input type="text" value={emp.uan} onChange={(e) => handleArrayChange(index, 'uan', e.target.value)} className="w-28 px-1 py-1 border border-orange-200 rounded text-xs" /></td>
                    <td className="border border-orange-300 px-2 py-2"><input type="text" value={emp.esi_no} onChange={(e) => handleArrayChange(index, 'esi_no', e.target.value)} className="w-28 px-1 py-1 border border-orange-200 rounded text-xs" /></td>
                    <td className="border border-orange-300 px-2 py-2"><input type="text" value={emp.bank_ac} onChange={(e) => handleArrayChange(index, 'bank_ac', e.target.value)} className="w-32 px-1 py-1 border border-orange-200 rounded text-xs" /></td>
                    <td className="border border-orange-300 px-2 py-2"><input type="text" value={emp.remarks} onChange={(e) => handleArrayChange(index, 'remarks', e.target.value)} className="w-24 px-1 py-1 border border-orange-200 rounded text-xs" /></td>
                    <td className="border border-orange-300 px-2 py-2 text-center"><button onClick={() => removeRow(index)} className="text-red-600 hover:text-red-800"><Trash2 className="w-3 h-3" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-2 border-orange-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-orange-900 mb-4">Signatures</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-orange-800 mb-3">HR Manager (Record Maintenance)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-orange-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500" /></div>
                <div><label className="block text-sm font-semibold text-orange-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-orange-200 pt-6">
              <h4 className="font-semibold text-orange-800 mb-3">Compliance Officer (Audit Verification)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-orange-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_co_name} onChange={(e) => handleChange('sig_co_name', e.target.value)}
                    className="w-full px-3 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500" /></div>
                <div><label className="block text-sm font-semibold text-orange-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_co_date} onChange={(e) => handleChange('sig_co_date', e.target.value)}
                    className="w-full px-3 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-orange-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-orange-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-orange-700">
            <li>HR must update this sheet within 7 days of new joiner onboarding.</li>
            <li>All statutory numbers must be verified against official documents.</li>
            <li>This sheet must be cross-referenced with D1 (Personnel File) and D3 (Statutory Register).</li>
            <li>Records must be retained for minimum 7 years for audits.</li>
          </ul>
        </section>
      </div>

      <div className="bg-orange-100 px-8 py-4 text-center text-xs text-orange-600 border-t-2 border-orange-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      </div>
    </div>
  );
};

export default ProfessionalD5Form;