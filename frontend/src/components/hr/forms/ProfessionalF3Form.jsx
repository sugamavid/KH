import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, Heart } from 'lucide-react';

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
    ann_purpose: 'This Annexure provides the standardized declaration form for Maternity, Paternity, and Bereavement Leave at Koyili Hospital. It ensures compliance with SOP F.3 and By-Laws Section 7.2(a), as well as statutory requirements under the Maternity Benefit Act, Shops & Establishments Act, and relevant labour laws.',
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

  const [logo, setLogo] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
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
    const data = { logo, formData };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_F3_Special_Leave_Declaration.json';
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
        ann_title: 'Maternity / Paternity / Bereavement Leave Declaration',
        ann_no: 'F3',
        ann_sop: 'SOP F.3 – Special Leave Management',
        ann_bylaws: 'Section 7.2(a)(iii) – Maternity / Paternity Leave; Section 7.5 – Special Leave Provisions',
        ann_version: '1.0',
        ann_effective: '',
        ann_cust: 'Human Resources',
        ann_auth: 'HR Manager / Compliance Officer / Hospital Director',
        ann_purpose: 'This Annexure provides the standardized declaration form for Maternity, Paternity, and Bereavement Leave at Koyili Hospital.',
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
      <div className="max-w-5xl mx-auto bg-white shadow-2xl">
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
        <div className="bg-blue-50 px-8 py-3 border-b-2 border-blue-900">
          <div className="flex items-center gap-6 text-xs font-semibold text-blue-900">
            <span>📋 Special Leave</span>
            <div className="w-px h-4 bg-blue-300"></div>
            <span>SOP F.3 – Special Leave Management</span>
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

        {/* Purpose */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Purpose</h3>
          </div>
          <textarea name="ann_purpose" value={formData.ann_purpose} onChange={handleChange} rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" />
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
          </div>
        </div>

        {/* Leave Details */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <div className="flex items-center gap-2">
              <Heart className="text-pink-600" size={20} />
              <h3 className="text-lg font-bold text-gray-900">Leave Details</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="leave_type" value="Maternity Leave" checked={formData.leave_type === 'Maternity Leave'} onChange={handleChange} className="w-4 h-4" />
              <span className="text-sm font-medium">Maternity Leave</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="leave_type" value="Paternity Leave" checked={formData.leave_type === 'Paternity Leave'} onChange={handleChange} className="w-4 h-4" />
              <span className="text-sm font-medium">Paternity Leave</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="leave_type" value="Bereavement Leave" checked={formData.leave_type === 'Bereavement Leave'} onChange={handleChange} className="w-4 h-4" />
              <span className="text-sm font-medium">Bereavement Leave</span>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Application</label><input type="date" name="app_date" value={formData.app_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Total Duration (Days)</label><input name="duration" value={formData.duration} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Leave Start Date</label><input type="date" name="start_date" value={formData.start_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Leave End Date</label><input type="date" name="end_date" value={formData.end_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Reason / Event</label>
            <textarea name="reason" value={formData.reason} onChange={handleChange} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Supporting Documents</label>
            <input name="support_doc" value={formData.support_doc} onChange={handleChange} placeholder="Medical Certificate / Birth Certificate / Death Certificate" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>

        {/* Employee Declaration */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Employee Declaration</h3>
          </div>
          <p className="mb-4 text-sm">I, <input name="dec_name" value={formData.dec_name} onChange={handleChange} className="inline-block w-96 px-2 py-1 border-b-2 border-gray-300 focus:border-blue-600 outline-none" />, hereby declare that the above details are correct and that I am applying for the above leave in accordance with hospital policy and applicable law.</p>
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
                <td className="border border-gray-200 px-3 py-2">Reporting Manager (Recommendation / Verification)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_mgr_name" value={formData.sig_mgr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_mgr_date" value={formData.sig_mgr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">HR Manager (Verification & Leave Balance Confirmation)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_hr_name" value={formData.sig_hr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_hr_date" value={formData.sig_hr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Compliance Officer / Hospital Director (Final Approval)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_comp_name" value={formData.sig_comp_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_comp_date" value={formData.sig_comp_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Instructions */}
        <div className="bg-pink-50 border border-pink-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="text-pink-700" size={20} />
            <h3 className="text-lg font-bold text-pink-900">Instructions for Use</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Maternity Leave: As per Maternity Benefit Act (up to 26 weeks).</li>
            <li>Paternity Leave: As per hospital policy (5–15 days).</li>
            <li>Bereavement Leave: As per hospital policy (case-to-case basis, usually 3–5 days).</li>
            <li>All applications must be supported with valid documents.</li>
            <li>HR must update leave balances and payroll records immediately.</li>
            <li>All records must be preserved for 7 years for compliance and audit purposes.</li>
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
            <p className="text-sm font-bold">Form F3</p>
            <p className="text-xs text-blue-200">Special Leave Declaration</p>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
  );
};

export default ProfessionalF3Form;