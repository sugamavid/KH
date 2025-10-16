import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, DollarSign, Plus, Trash2 } from 'lucide-react';

const ProfessionalF4Form = () => {
  const [formData, setFormData] = useState({
    ann_title: 'Leave Encashment Approval Sheet',
    ann_no: 'F4',
    ann_sop: 'SOP F.4 – Leave Encashment Process',
    ann_bylaws: 'Section 11.5 – Leave Benefits',
    ann_version: '1.0',
    ann_effective: '',
    ann_cust: 'Human Resources / Finance',
    ann_auth: 'HR Manager / Finance Head / Compliance Officer',
    emp_name: '',
    emp_id: '',
    emp_dept: '',
    emp_desig: '',
    date_join: '',
    app_date: '',
    dec_name: '',
    dec_date: '',
    sig_hr_name: '',
    sig_hr_date: '',
    sig_fin_name: '',
    sig_fin_date: '',
    sig_comp_name: '',
    sig_comp_date: ''
  });

  const [rows, setRows] = useState([]);
  const [logo, setLogo] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRowChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    
    // Auto-calculate payable
    if (field === 'requested' || field === 'rate') {
      const requested = Number(newRows[index].requested || 0);
      const rate = Number(newRows[index].rate || 0);
      newRows[index].payable = (requested * rate).toFixed(2);
    }
    
    setRows(newRows);
  };

  const addRow = () => {
    setRows([...rows, {
      leave_type: '',
      total_earned: '',
      availed: '',
      balance: '',
      requested: '',
      rate: '',
      payable: '',
      verified_by: '',
      approved_by: '',
      remarks: ''
    }]);
  };

  const deleteSelected = () => {
    setRows(rows.filter((_, index) => !document.getElementById(`row-check-${index}`)?.checked));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setLogo(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const data = { logo, formData, rows };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_F4_Leave_Encashment.json';
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
          if (data.logo) setLogo(data.logo);
          if (data.formData) setFormData(data.formData);
          if (data.rows) setRows(data.rows);
        } catch (err) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all fields to default values?')) {
      setFormData({
        ann_title: 'Leave Encashment Approval Sheet',
        ann_no: 'F4',
        ann_sop: 'SOP F.4 – Leave Encashment Process',
        ann_bylaws: 'Section 11.5 – Leave Benefits',
        ann_version: '1.0',
        ann_effective: '',
        ann_cust: 'Human Resources / Finance',
        ann_auth: 'HR Manager / Finance Head / Compliance Officer',
        emp_name: '',
        emp_id: '',
        emp_dept: '',
        emp_desig: '',
        date_join: '',
        app_date: '',
        dec_name: '',
        dec_date: '',
        sig_hr_name: '',
        sig_hr_date: '',
        sig_fin_name: '',
        sig_fin_date: '',
        sig_comp_name: '',
        sig_comp_date: ''
      });
      setRows([]);
      setLogo('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toolbar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-3 print:hidden">
        <div className="flex items-center gap-3 flex-wrap">
          <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Upload size={16} />
            <span className="font-semibold text-sm">Upload Logo</span>
          </button>
          <div className="flex-1" />
          <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Save size={16} />
            <span className="font-semibold text-sm">Save (JSON)</span>
          </button>
          <button onClick={() => loadInputRef.current?.click()} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download size={16} />
            <span className="font-semibold text-sm">Load (JSON)</span>
          </button>
          <button onClick={addRow} className="flex items-center gap-2 px-4 py-2 border border-green-300 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
            <Plus size={16} />
            <span className="font-semibold text-sm">Add Row</span>
          </button>
          <button onClick={deleteSelected} className="flex items-center gap-2 px-4 py-2 border border-red-300 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
            <Trash2 size={16} />
            <span className="font-semibold text-sm">Delete Selected</span>
          </button>
          <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2 border border-orange-300 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
            <RotateCcw size={16} />
            <span className="font-semibold text-sm">Reset</span>
          </button>
          <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
            <Printer size={16} />
            <span className="font-semibold text-sm">Print / Save PDF</span>
          </button>
        </div>
      </div>

      <input ref={fileInputRef} type="file" accept="image/*,.svg" onChange={handleLogoUpload} className="hidden" />
      <input ref={loadInputRef} type="file" accept="application/json" onChange={handleLoad} className="hidden" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto bg-white shadow-2xl">
        {/* Compact NABH-Compliant Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-8 py-6">
          <div className="flex items-center justify-between gap-6">
            <div className="flex-shrink-0">
              <img src={logo} alt="Koyili Hospital Logo" className="w-24 h-24 bg-white rounded-lg p-2 shadow-xl object-contain" />
            </div>
            <div className="flex-1 text-center">
              <h1 className="text-3xl font-bold tracking-wide mb-1">KOYILI HOSPITAL</h1>
              <p className="text-blue-200 text-sm font-semibold">Human Resources Department</p>
              <p className="text-blue-300 text-xs">NABH Accredited • Pallikkunnu, Talap, Kannur, Kerala</p>
              <div className="mt-3 pt-3 border-t border-blue-400/30">
                <h2 className="text-xl font-bold">LEAVE ENCASHMENT APPROVAL SHEET</h2>
              </div>
            </div>
            <div className="flex-shrink-0 text-right space-y-2">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
                <p className="text-2xl font-bold">F4</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-lg border border-white/20">
                <p className="text-xs text-blue-200">Version 1.0</p>
              </div>
              <div className="bg-yellow-500/90 px-3 py-1 rounded-full">
                <p className="text-xs font-bold text-blue-900">NABH</p>
              </div>
            </div>
          </div>
        <div className="bg-blue-50 px-8 py-3 border-b-2 border-blue-900">
          <div className="flex items-center gap-6 text-xs font-semibold text-blue-900">
            <span>📋 Leave Benefits</span>
            <div className="w-px h-4 bg-blue-300"></div>
            <span>SOP F.4 – Leave Encashment Process</span>
          </div>
        </div>
        <div className="px-6 py-8 print:py-4">

        {/* Document Control */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Document Control</h3>
          </div>
          <table className="w-full border-collapse text-sm">
            <tbody>
              <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left w-1/3">Document Title</th><td className="border border-gray-200 px-3 py-2"><input name="ann_title" value={formData.ann_title} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Annexure Number</th><td className="border border-gray-200 px-3 py-2"><input name="ann_no" value={formData.ann_no} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Linked SOP</th><td className="border border-gray-200 px-3 py-2"><input name="ann_sop" value={formData.ann_sop} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">By-Laws Reference</th><td className="border border-gray-200 px-3 py-2"><input name="ann_bylaws" value={formData.ann_bylaws} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Version No.</th><td className="border border-gray-200 px-3 py-2"><input name="ann_version" value={formData.ann_version} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Effective Date</th><td className="border border-gray-200 px-3 py-2"><input type="date" name="ann_effective" value={formData.ann_effective} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Custodian Department</th><td className="border border-gray-200 px-3 py-2"><input name="ann_cust" value={formData.ann_cust} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Approved Authority</th><td className="border border-gray-200 px-3 py-2"><input name="ann_auth" value={formData.ann_auth} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            </tbody>
          </table>
        </div>

        {/* Employee Details */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Employee Details</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Name</label><input name="emp_name" value={formData.emp_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label><input name="emp_id" value={formData.emp_id} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Department</label><input name="emp_dept" value={formData.emp_dept} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label><input name="emp_desig" value={formData.emp_desig} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Joining</label><input type="date" name="date_join" value={formData.date_join} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Application</label><input type="date" name="app_date" value={formData.app_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        {/* Leave Balance & Encashment Calculation */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <div className="flex items-center gap-2">
              <DollarSign className="text-green-600" size={20} />
              <h3 className="text-lg font-bold text-gray-900">Leave Balance & Encashment Calculation</h3>
            </div>
          </div>
          <div className="mb-3 print:hidden">
            <span className="inline-block px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-sm font-bold">Rows: {rows.length}</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-2 py-2 print:hidden">☑</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-2 py-2">Sl.</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-2 py-2">Leave Type</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-2 py-2">Total Earned</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-2 py-2">Availed</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-2 py-2">Balance</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-2 py-2">Requested</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-2 py-2">Rate (₹)</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-2 py-2">Payable (₹)</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-2 py-2">Verified By</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-2 py-2">Approved By</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-2 py-2">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 px-2 py-1 text-center print:hidden"><input id={`row-check-${index}`} type="checkbox" className="w-4 h-4" /></td>
                    <td className="border border-gray-200 px-2 py-1 text-center">{index + 1}</td>
                    <td className="border border-gray-200 px-2 py-1"><input value={row.leave_type} onChange={(e) => handleRowChange(index, 'leave_type', e.target.value)} className="w-full px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-2 py-1"><input type="number" value={row.total_earned} onChange={(e) => handleRowChange(index, 'total_earned', e.target.value)} className="w-20 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-2 py-1"><input type="number" value={row.availed} onChange={(e) => handleRowChange(index, 'availed', e.target.value)} className="w-20 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-2 py-1"><input type="number" value={row.balance} onChange={(e) => handleRowChange(index, 'balance', e.target.value)} className="w-20 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-2 py-1"><input type="number" value={row.requested} onChange={(e) => handleRowChange(index, 'requested', e.target.value)} className="w-20 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-2 py-1"><input type="number" value={row.rate} onChange={(e) => handleRowChange(index, 'rate', e.target.value)} className="w-20 px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-2 py-1"><input type="number" value={row.payable} readOnly className="w-24 px-1 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-2 py-1"><input value={row.verified_by} onChange={(e) => handleRowChange(index, 'verified_by', e.target.value)} className="w-full px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-2 py-1"><input value={row.approved_by} onChange={(e) => handleRowChange(index, 'approved_by', e.target.value)} className="w-full px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                    <td className="border border-gray-200 px-2 py-1"><input value={row.remarks} onChange={(e) => handleRowChange(index, 'remarks', e.target.value)} className="w-full px-1 py-0.5 border border-gray-300 rounded text-xs" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Employee Declaration */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Employee Declaration</h3>
          </div>
          <p className="mb-4 text-sm">I, <input name="dec_name" value={formData.dec_name} onChange={handleChange} className="inline-block w-96 px-2 py-1 border-b-2 border-gray-300 focus:border-blue-600 outline-none" />, hereby request leave encashment as per the hospital's policy. I confirm that I have verified my leave balance with HR.</p>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Signature</label><div className="h-12 border-b-2 border-dotted border-gray-400" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date</label><input type="date" name="dec_date" value={formData.dec_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        {/* Approval Workflow */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Approval Workflow</h3>
          </div>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Role</th>
                <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Signature</th>
                <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Name</th>
                <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">HR Manager (Verification of Leave Balance & Eligibility)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_hr_name" value={formData.sig_hr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_hr_date" value={formData.sig_hr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Finance Head (Verification of Payment Calculation & Disbursement)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_fin_name" value={formData.sig_fin_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_fin_date" value={formData.sig_fin_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Compliance Officer (Oversight & Policy Compliance)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_comp_name" value={formData.sig_comp_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_comp_date" value={formData.sig_comp_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Instructions */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="text-green-700" size={20} />
            <h3 className="text-lg font-bold text-green-900">Instructions for Use</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Leave encashment will be processed as per hospital policy and statutory provisions.</li>
            <li>Only earned leave (EL) is eligible for encashment unless otherwise specified.</li>
            <li>HR must verify leave balances and eligibility before forwarding to Finance.</li>
            <li>Finance must verify calculations and disburse payment through salary or separate transfer.</li>
            <li>All encashment records must be retained for 7 years for payroll and audit compliance.</li>
          </ul>
        </div>
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
            <p className="text-sm font-bold">Form F4</p>
            <p className="text-xs text-blue-200">Leave Encashment Approval Sheet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalF4Form;