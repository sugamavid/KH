import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download } from 'lucide-react';

const ProfessionalF3Form = () => {
  const [formData, setFormData] = useState({
    ann_title: 'Maternity / Paternity / Bereavement Leave Declaration',
    ann_no: 'F3',
    ann_sop: 'SOP F.3 – Special Leave Management',
    ann_bylaws: 'Section 7.2(a)(iii) – Maternity / Paternity Leave; Section 7.5 – Special Leave Provisions',
    ann_version: '1.0',
    ann_effective: '',
    ann_cust: 'Human Resources',
    ann_auth: 'HR Manager / Compliance Officer / Hospital Director',
    ann_purpose: 'This Annexure provides the standardized declaration form for Maternity, Paternity, and Bereavement Leave at Koyili Hospital. It ensures compliance with SOP F.3 and By-Laws Section 7.2(a), as well as statutory requirements under the Maternity Benefit Act.',
    emp_name: '',
    emp_id: '',
    emp_dept: '',
    emp_desig: '',
    leave_type: '',
    app_date: '',
    duration: '',
    start_date: '',
    end_date: '',
    reason: '',
    support_doc: '',
    dec_name: '',
    dec_date: '',
    sig_mgr_name: '',
    sig_mgr_date: '',
    sig_hr_name: '',
    sig_hr_date: '',
    sig_comp_name: '',
    sig_comp_date: ''
  });

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    a.download = 'Annexure_F3_Special_Leave.json';
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
      window.location.reload();
    }
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-3 print:hidden">
        <div className="flex items-center gap-3 flex-wrap">
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm font-semibold">
            <Save className="w-4 h-4" /> Save
          </button>
          <button onClick={() => loadInputRef.current?.click()} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm font-semibold">
            <Upload className="w-4 h-4" /> Load
          </button>
          <button onClick={handleReset} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2 text-sm font-semibold">
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
          <button onClick={handlePrint} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 text-sm font-semibold">
            <Printer className="w-4 h-4" /> Print
          </button>
          <button onClick={() => fileInputRef.current?.click()} className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 flex items-center gap-2 text-sm font-semibold">
            <Download className="w-4 h-4" /> Change Logo
          </button>
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
            <p className="text-blue-200 text-sm font-semibold">Human Resources Department</p>
            <p className="text-blue-300 text-xs">NABH Accredited • Pallikkunnu, Talap, Kannur, Kerala</p>
            <div className="mt-3 pt-3 border-t border-blue-400/30">
              <h2 className="text-xl font-bold">MATERNITY / PATERNITY / BEREAVEMENT LEAVE</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">F3</p>
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
          <h3 className="text-lg font-bold text-gray-900 mb-4">Document Control</h3>
          <table className="w-full border-collapse text-sm">
            <tbody>
              <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left w-1/3">Document Title</th><td className="border border-gray-200 px-3 py-2"><input name="ann_title" value={formData.ann_title} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Annexure Number</th><td className="border border-gray-200 px-3 py-2"><input name="ann_no" value={formData.ann_no} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Linked SOP</th><td className="border border-gray-200 px-3 py-2"><input name="ann_sop" value={formData.ann_sop} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">By-Laws Reference</th><td className="border border-gray-200 px-3 py-2"><input name="ann_bylaws" value={formData.ann_bylaws} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Purpose</h3>
          <textarea name="ann_purpose" value={formData.ann_purpose} onChange={handleChange} rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee Name</label><input type="text" name="emp_name" value={formData.emp_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label><input type="text" name="emp_id" value={formData.emp_id} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Department</label><input type="text" name="emp_dept" value={formData.emp_dept} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label><input type="text" name="emp_desig" value={formData.emp_desig} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Leave Application Details</h3>
          <div className="space-y-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Leave Type</label>
              <select name="leave_type" value={formData.leave_type} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option value="">Select Leave Type</option>
                <option value="Maternity">Maternity Leave</option>
                <option value="Paternity">Paternity Leave</option>
                <option value="Bereavement">Bereavement Leave</option>
              </select>
            </div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Application Date</label><input type="date" name="app_date" value={formData.app_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Duration (Days)</label><input type="text" name="duration" value={formData.duration} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Start Date</label><input type="date" name="start_date" value={formData.start_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">End Date</label><input type="date" name="end_date" value={formData.end_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            </div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Reason</label><textarea name="reason" value={formData.reason} onChange={handleChange} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Supporting Documents</label><input type="text" name="support_doc" value={formData.support_doc} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Signatures</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-gray-200 px-3 py-2 text-left">Role</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Name & Signature</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Employee</td>
                <td className="border border-gray-200 px-3 py-2"><input name="dec_name" value={formData.dec_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="dec_date" value={formData.dec_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Manager</td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_mgr_name" value={formData.sig_mgr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_mgr_date" value={formData.sig_mgr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">HR Manager</td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_hr_name" value={formData.sig_hr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_hr_date" value={formData.sig_hr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
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
            <p className="text-sm font-bold">Form F3</p>
            <p className="text-xs text-blue-200">Special Leave Declaration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalF3Form;
