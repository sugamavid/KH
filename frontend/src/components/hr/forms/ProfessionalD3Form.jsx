import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Plus, Trash2, BookOpen, Calendar, Shield } from 'lucide-react';

const ProfessionalD3Form = () => {
  const [formData, setFormData] = useState({
    effective_date: '',
    pf_records: [{ emp_id: '', emp_name: '', pf_no: '', uan: '', doj: '', wage_month: '', emp_contrib: '', emp_contrib2: '', total: '', payment_ref: '', remarks: '' }],
    esi_records: [{ emp_id: '', emp_name: '', esi_no: '', wage_month: '', emp_contrib: '', emp_contrib2: '', total: '', payment_ref: '', remarks: '' }],
    bonus_records: [{ emp_id: '', emp_name: '', fin_year: '', bonus_payable: '', bonus_date: '', payment_ref: '', remarks: '' }],
    gratuity_records: [{ emp_id: '', emp_name: '', doj: '', dol: '', tenure: '', gratuity_payable: '', payment_date: '', payment_ref: '', remarks: '' }],
    sig_hr_name: '', sig_hr_date: '',
    sig_fin_name: '', sig_fin_date: '',
    sig_co_name: '', sig_co_date: ''
  });

  const [logoData, setLogoData] = useState('');

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('d3_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('d3_form_data', JSON.stringify(updated));
  };

  const handleArrayChange = (arrayName, index, field, value) => {
    const updated = { ...formData };
    updated[arrayName][index][field] = value;
    setFormData(updated);
    localStorage.setItem('d3_form_data', JSON.stringify(updated));
  };

  const addRow = (arrayName, template) => {
    const updated = { ...formData };
    updated[arrayName].push(template);
    setFormData(updated);
  };

  const removeRow = (arrayName, index) => {
    if (formData[arrayName].length > 1) {
      const updated = { ...formData };
      updated[arrayName].splice(index, 1);
      setFormData(updated);
      localStorage.setItem('d3_form_data', JSON.stringify(updated));
    }
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'D3-Statutory-Register.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('d3_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-2xl">
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
              <h2 className="text-xl font-bold">STATUTORY REGISTER FORMAT</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">D3</p>
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
      </div>

      <div className="bg-purple-50 px-8 py-4 border-b-2 border-purple-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-purple-900">Annexure:</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded font-bold">D3</span>
          </div>
          <div className="w-px h-4 bg-purple-300"></div>
          <div><span className="font-semibold text-purple-900">SOP:</span> D.3</div>
          <div className="w-px h-4 bg-purple-300"></div>
          <div><span className="font-semibold text-purple-900">Version:</span> 1.0</div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-purple-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-purple-200">
        <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">Statutory Compliance</div>
        <h2 className="text-3xl font-bold text-purple-900 mb-3">STATUTORY REGISTER FORMAT</h2>
        <div className="flex items-center gap-4 text-sm text-purple-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP D.3 – Statutory Compliance Register</span></div>
          <div className="w-px h-4 bg-purple-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>PF, ESI, Bonus, Gratuity Acts</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
          <h3 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-purple-600 font-semibold">Document Title:</span><p className="text-purple-900">Statutory Register Format (PF, ESI, Bonus, Gratuity)</p></div>
            <div><span className="text-purple-600 font-semibold">Annexure Number:</span><p className="text-purple-900">D3</p></div>
            <div><span className="text-purple-600 font-semibold">Linked SOP:</span><p className="text-purple-900">SOP D.3 – Statutory Compliance Register</p></div>
            <div><span className="text-purple-600 font-semibold">Version No.:</span><p className="text-purple-900">1.0</p></div>
            <div>
              <span className="text-purple-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effective_date} onChange={(e) => handleChange('effective_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
        </section>

        {/* PF Register */}
        <section className="border-2 border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-purple-900">Provident Fund (PF) / UAN Register</h3>
            <div className="flex gap-2">
              <button onClick={() => addRow('pf_records', { emp_id: '', emp_name: '', pf_no: '', uan: '', doj: '', wage_month: '', emp_contrib: '', emp_contrib2: '', total: '', payment_ref: '', remarks: '' })}
                className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-xs font-semibold flex items-center gap-1">
                <Plus className="w-3 h-3" /> Add Row
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-purple-700 text-white">
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold w-8">Sl.</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Emp ID</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Name</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">PF No.</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">UAN</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">DOJ</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Wage Month</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Emp Contrib</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Empr Contrib</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Total</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Payment Ref</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Remarks</th>
                  <th className="border border-purple-300 px-2 py-2 text-center font-semibold w-8">Del</th>
                </tr>
              </thead>
              <tbody>
                {formData.pf_records.map((row, index) => (
                  <tr key={index} className="hover:bg-purple-50">
                    <td className="border border-purple-300 px-2 py-2 text-center">{index + 1}</td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.emp_id} onChange={(e) => handleArrayChange('pf_records', index, 'emp_id', e.target.value)} className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.emp_name} onChange={(e) => handleArrayChange('pf_records', index, 'emp_name', e.target.value)} className="w-28 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.pf_no} onChange={(e) => handleArrayChange('pf_records', index, 'pf_no', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.uan} onChange={(e) => handleArrayChange('pf_records', index, 'uan', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="date" value={row.doj} onChange={(e) => handleArrayChange('pf_records', index, 'doj', e.target.value)} className="w-28 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.wage_month} onChange={(e) => handleArrayChange('pf_records', index, 'wage_month', e.target.value)} placeholder="MM-YYYY" className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="number" value={row.emp_contrib} onChange={(e) => handleArrayChange('pf_records', index, 'emp_contrib', e.target.value)} className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="number" value={row.emp_contrib2} onChange={(e) => handleArrayChange('pf_records', index, 'emp_contrib2', e.target.value)} className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="number" value={row.total} onChange={(e) => handleArrayChange('pf_records', index, 'total', e.target.value)} className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.payment_ref} onChange={(e) => handleArrayChange('pf_records', index, 'payment_ref', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.remarks} onChange={(e) => handleArrayChange('pf_records', index, 'remarks', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2 text-center"><button onClick={() => removeRow('pf_records', index)} className="text-red-600 hover:text-red-800"><Trash2 className="w-3 h-3" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ESI Register */}
        <section className="border-2 border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-purple-900">ESIC Register</h3>
            <button onClick={() => addRow('esi_records', { emp_id: '', emp_name: '', esi_no: '', wage_month: '', emp_contrib: '', emp_contrib2: '', total: '', payment_ref: '', remarks: '' })}
              className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-xs font-semibold flex items-center gap-1">
              <Plus className="w-3 h-3" /> Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-purple-700 text-white">
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold w-8">Sl.</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Emp ID</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Name</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">ESIC No.</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Wage Month</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Emp Contrib</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Empr Contrib</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Total</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Payment Ref</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Remarks</th>
                  <th className="border border-purple-300 px-2 py-2 text-center font-semibold w-8">Del</th>
                </tr>
              </thead>
              <tbody>
                {formData.esi_records.map((row, index) => (
                  <tr key={index} className="hover:bg-purple-50">
                    <td className="border border-purple-300 px-2 py-2 text-center">{index + 1}</td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.emp_id} onChange={(e) => handleArrayChange('esi_records', index, 'emp_id', e.target.value)} className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.emp_name} onChange={(e) => handleArrayChange('esi_records', index, 'emp_name', e.target.value)} className="w-28 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.esi_no} onChange={(e) => handleArrayChange('esi_records', index, 'esi_no', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.wage_month} onChange={(e) => handleArrayChange('esi_records', index, 'wage_month', e.target.value)} placeholder="MM-YYYY" className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="number" value={row.emp_contrib} onChange={(e) => handleArrayChange('esi_records', index, 'emp_contrib', e.target.value)} className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="number" value={row.emp_contrib2} onChange={(e) => handleArrayChange('esi_records', index, 'emp_contrib2', e.target.value)} className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="number" value={row.total} onChange={(e) => handleArrayChange('esi_records', index, 'total', e.target.value)} className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.payment_ref} onChange={(e) => handleArrayChange('esi_records', index, 'payment_ref', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.remarks} onChange={(e) => handleArrayChange('esi_records', index, 'remarks', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2 text-center"><button onClick={() => removeRow('esi_records', index)} className="text-red-600 hover:text-red-800"><Trash2 className="w-3 h-3" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bonus Register */}
        <section className="border-2 border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-purple-900">Bonus Register</h3>
            <button onClick={() => addRow('bonus_records', { emp_id: '', emp_name: '', fin_year: '', bonus_payable: '', bonus_date: '', payment_ref: '', remarks: '' })}
              className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-xs font-semibold flex items-center gap-1">
              <Plus className="w-3 h-3" /> Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-purple-700 text-white">
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold w-8">Sl.</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Emp ID</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Name</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Financial Year</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Bonus Payable</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Paid Date</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Payment Ref</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Remarks</th>
                  <th className="border border-purple-300 px-2 py-2 text-center font-semibold w-8">Del</th>
                </tr>
              </thead>
              <tbody>
                {formData.bonus_records.map((row, index) => (
                  <tr key={index} className="hover:bg-purple-50">
                    <td className="border border-purple-300 px-2 py-2 text-center">{index + 1}</td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.emp_id} onChange={(e) => handleArrayChange('bonus_records', index, 'emp_id', e.target.value)} className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.emp_name} onChange={(e) => handleArrayChange('bonus_records', index, 'emp_name', e.target.value)} className="w-28 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.fin_year} onChange={(e) => handleArrayChange('bonus_records', index, 'fin_year', e.target.value)} placeholder="YYYY-YY" className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="number" value={row.bonus_payable} onChange={(e) => handleArrayChange('bonus_records', index, 'bonus_payable', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="date" value={row.bonus_date} onChange={(e) => handleArrayChange('bonus_records', index, 'bonus_date', e.target.value)} className="w-28 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.payment_ref} onChange={(e) => handleArrayChange('bonus_records', index, 'payment_ref', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.remarks} onChange={(e) => handleArrayChange('bonus_records', index, 'remarks', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2 text-center"><button onClick={() => removeRow('bonus_records', index)} className="text-red-600 hover:text-red-800"><Trash2 className="w-3 h-3" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Gratuity Register */}
        <section className="border-2 border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-purple-900">Gratuity Register</h3>
            <button onClick={() => addRow('gratuity_records', { emp_id: '', emp_name: '', doj: '', dol: '', tenure: '', gratuity_payable: '', payment_date: '', payment_ref: '', remarks: '' })}
              className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-xs font-semibold flex items-center gap-1">
              <Plus className="w-3 h-3" /> Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-purple-700 text-white">
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold w-8">Sl.</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Emp ID</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Name</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">DOJ</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">DOL</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Tenure (Yrs)</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Gratuity Payable</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Payment Date</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Payment Ref</th>
                  <th className="border border-purple-300 px-2 py-2 text-left font-semibold">Remarks</th>
                  <th className="border border-purple-300 px-2 py-2 text-center font-semibold w-8">Del</th>
                </tr>
              </thead>
              <tbody>
                {formData.gratuity_records.map((row, index) => (
                  <tr key={index} className="hover:bg-purple-50">
                    <td className="border border-purple-300 px-2 py-2 text-center">{index + 1}</td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.emp_id} onChange={(e) => handleArrayChange('gratuity_records', index, 'emp_id', e.target.value)} className="w-20 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.emp_name} onChange={(e) => handleArrayChange('gratuity_records', index, 'emp_name', e.target.value)} className="w-28 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="date" value={row.doj} onChange={(e) => handleArrayChange('gratuity_records', index, 'doj', e.target.value)} className="w-28 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="date" value={row.dol} onChange={(e) => handleArrayChange('gratuity_records', index, 'dol', e.target.value)} className="w-28 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="number" value={row.tenure} onChange={(e) => handleArrayChange('gratuity_records', index, 'tenure', e.target.value)} className="w-16 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="number" value={row.gratuity_payable} onChange={(e) => handleArrayChange('gratuity_records', index, 'gratuity_payable', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="date" value={row.payment_date} onChange={(e) => handleArrayChange('gratuity_records', index, 'payment_date', e.target.value)} className="w-28 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.payment_ref} onChange={(e) => handleArrayChange('gratuity_records', index, 'payment_ref', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2"><input type="text" value={row.remarks} onChange={(e) => handleArrayChange('gratuity_records', index, 'remarks', e.target.value)} className="w-24 px-1 py-1 border border-purple-200 rounded text-xs" /></td>
                    <td className="border border-purple-300 px-2 py-2 text-center"><button onClick={() => removeRow('gratuity_records', index)} className="text-red-600 hover:text-red-800"><Trash2 className="w-3 h-3" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-2 border-purple-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-purple-900 mb-4">Signatures</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-purple-800 mb-3">HR Manager (Record Maintenance)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-purple-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500" /></div>
                <div><label className="block text-sm font-semibold text-purple-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-purple-200 pt-6">
              <h4 className="font-semibold text-purple-800 mb-3">Finance Head (Payment Verification)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-purple-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_fin_name} onChange={(e) => handleChange('sig_fin_name', e.target.value)}
                    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500" /></div>
                <div><label className="block text-sm font-semibold text-purple-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_fin_date} onChange={(e) => handleChange('sig_fin_date', e.target.value)}
                    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-purple-200 pt-6">
              <h4 className="font-semibold text-purple-800 mb-3">Compliance Officer (Audit Verification)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-purple-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_co_name} onChange={(e) => handleChange('sig_co_name', e.target.value)}
                    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500" /></div>
                <div><label className="block text-sm font-semibold text-purple-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_co_date} onChange={(e) => handleChange('sig_co_date', e.target.value)}
                    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-purple-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-purple-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-purple-700">
            <li>All statutory contributions must be recorded monthly and verified before payment.</li>
            <li>Payment references must match bank/government portal transaction IDs.</li>
            <li>Records must be retained for minimum 7 years for statutory audits.</li>
            <li>Any discrepancy must be flagged and resolved before month-end closing.</li>
          </ul>
        </section>
      </div>

      <div className="bg-purple-100 px-8 py-4 text-center text-xs text-purple-600 border-t-2 border-purple-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      
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
            <p className="text-sm font-bold">Form D3</p>
            <p className="text-xs text-blue-200">Goal Setting Worksheet</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfessionalD3Form;
