import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, AlertCircle } from 'lucide-react';

const ProfessionalF2Form = () => {
  const [formData, setFormData] = useState({
    ann_title: 'Emergency Leave Escalation Note',
    ann_no: 'F2',
    ann_sop: 'SOP F.2 – Emergency Leave Escalation Note',
    ann_bylaws: 'Section 7.3(c) – Emergency Leave Protocol',
    ann_version: '1.0',
    ann_effective: '',
    ann_cust: 'Human Resources / Department Heads',
    ann_auth: 'Reporting Manager / HR Manager / Compliance Officer',
    ann_purpose: 'This Annexure provides the standardized Emergency Leave Escalation Note for employees of Koyili Hospital. It ensures compliance with SOP F.2 and By-Laws Section 7.3, by documenting emergency leave requests, escalation workflows, and approvals. It also ensures continuity of services in critical care, emergency, and clinical operations, and readiness for audit verification.',
    emp_name: '',
    emp_id: '',
    emp_dept: '',
    emp_desig: '',
    req_date: '',
    leave_dates: '',
    em_type: '',
    nature: '',
    reason: '',
    support_doc: '',
    lvl1_action: 'Initial approval / decline',
    lvl1_time: 'Within 2 hours',
    lvl1_remarks: '',
    lvl2_action: 'Verify leave records & arrange substitute',
    lvl2_time: 'Within 4 hours',
    lvl2_remarks: '',
    lvl3_action: 'Approve exceptions / ensure service continuity',
    lvl3_time: 'Within 6 hours',
    lvl3_remarks: '',
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
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    a.download = 'Annexure_F2_Emergency_Leave_Escalation.json';
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
        ann_title: 'Emergency Leave Escalation Note',
        ann_no: 'F2',
        ann_sop: 'SOP F.2 – Emergency Leave Escalation Note',
        ann_bylaws: 'Section 7.3(c) – Emergency Leave Protocol',
        ann_version: '1.0',
        ann_effective: '',
        ann_cust: 'Human Resources / Department Heads',
        ann_auth: 'Reporting Manager / HR Manager / Compliance Officer',
        ann_purpose: 'This Annexure provides the standardized Emergency Leave Escalation Note for employees of Koyili Hospital.',
        emp_name: '',
        emp_id: '',
        emp_dept: '',
        emp_desig: '',
        req_date: '',
        leave_dates: '',
        em_type: '',
        nature: '',
        reason: '',
        support_doc: '',
        lvl1_action: 'Initial approval / decline',
        lvl1_time: 'Within 2 hours',
        lvl1_remarks: '',
        lvl2_action: 'Verify leave records & arrange substitute',
        lvl2_time: 'Within 4 hours',
        lvl2_remarks: '',
        lvl3_action: 'Approve exceptions / ensure service continuity',
        lvl3_time: 'Within 6 hours',
        lvl3_remarks: '',
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
                <h2 className="text-xl font-bold">EMERGENCY LEAVE ESCALATION NOTE</h2>
              </div>
            </div>
            <div className="flex-shrink-0 text-right space-y-2">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
                <p className="text-2xl font-bold">F2</p>
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
            <span>SOP F.2 – Emergency Leave Escalation Note</span>
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

        {/* Emergency Leave Request */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <div className="flex items-center gap-2">
              <AlertCircle className="text-red-600" size={20} />
              <h3 className="text-lg font-bold text-gray-900">Emergency Leave Request</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Request</label><input type="date" name="req_date" value={formData.req_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Leave Date(s)</label><input name="leave_dates" value={formData.leave_dates} onChange={handleChange} placeholder="YYYY-MM-DD to YYYY-MM-DD" className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Type of Emergency</label>
            <select name="em_type" value={formData.em_type} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">-- Select --</option>
              <option value="Medical">Medical</option>
              <option value="Family">Family</option>
              <option value="Accident">Accident</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nature of Leave</label>
            <select name="nature" value={formData.nature} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">-- Select --</option>
              <option value="Full Day">Full Day</option>
              <option value="Half Day">Half Day</option>
              <option value="Short Duration">Short Duration</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Reason for Leave</label>
            <textarea name="reason" value={formData.reason} onChange={handleChange} rows="3" placeholder="Describe reason" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Supporting Document (if applicable)</label>
            <input name="support_doc" value={formData.support_doc} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>

        {/* Escalation Workflow */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Escalation Workflow</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2">Level</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2">Responsible Authority</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2">Action Required</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2">Timeframe</th>
                  <th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2">Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">Level 1</td>
                  <td className="border border-gray-200 px-3 py-2">Reporting Manager</td>
                  <td className="border border-gray-200 px-3 py-2"><input name="lvl1_action" value={formData.lvl1_action} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                  <td className="border border-gray-200 px-3 py-2"><input name="lvl1_time" value={formData.lvl1_time} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                  <td className="border border-gray-200 px-3 py-2"><input name="lvl1_remarks" value={formData.lvl1_remarks} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">Level 2</td>
                  <td className="border border-gray-200 px-3 py-2">HR Manager</td>
                  <td className="border border-gray-200 px-3 py-2"><input name="lvl2_action" value={formData.lvl2_action} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                  <td className="border border-gray-200 px-3 py-2"><input name="lvl2_time" value={formData.lvl2_time} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                  <td className="border border-gray-200 px-3 py-2"><input name="lvl2_remarks" value={formData.lvl2_remarks} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">Level 3</td>
                  <td className="border border-gray-200 px-3 py-2">Compliance Officer</td>
                  <td className="border border-gray-200 px-3 py-2"><input name="lvl3_action" value={formData.lvl3_action} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                  <td className="border border-gray-200 px-3 py-2"><input name="lvl3_time" value={formData.lvl3_time} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                  <td className="border border-gray-200 px-3 py-2"><input name="lvl3_remarks" value={formData.lvl3_remarks} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Declaration by Employee */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Declaration by Employee</h3>
          </div>
          <p className="mb-4 text-sm">I, <input name="dec_name" value={formData.dec_name} onChange={handleChange} className="inline-block w-96 px-2 py-1 border-b-2 border-gray-300 focus:border-blue-600 outline-none" />, request emergency leave due to unavoidable circumstances and confirm that the above details are true.</p>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Signature</label><div className="h-12 border-b-2 border-dotted border-gray-400" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date</label><input type="date" name="dec_date" value={formData.dec_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        {/* Signatures - Approval Workflow */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Signatures – Approval Workflow</h3>
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
                <td className="border border-gray-200 px-3 py-2">Reporting Manager (Immediate Action)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_mgr_name" value={formData.sig_mgr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_mgr_date" value={formData.sig_mgr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">HR Manager (Verification & Substitution Arrangements)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_hr_name" value={formData.sig_hr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_hr_date" value={formData.sig_hr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Compliance Officer (Oversight & Final Validation)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_comp_name" value={formData.sig_comp_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_comp_date" value={formData.sig_comp_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="text-blue-700" size={20} />
            <h3 className="text-lg font-bold text-blue-900">Instructions for Use</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Emergency leave requests must be submitted immediately via manual form, HRMS, or phone/email escalation.</li>
            <li>Reporting Manager must act within 2 hours, ensuring critical services are covered.</li>
            <li>HR must ensure alternate staff or duty redistribution within 4 hours.</li>
            <li>Escalation beyond 1 day must be routed through Annexure F1 (Leave Application Form).</li>
            <li>All Emergency Leave Notes must be retained for 7 years for compliance and audit.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 text-xs text-gray-600 print:relative print:mt-8">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <span>© Koyili Hospital • Confidential • Version-controlled</span>
          <span>Form F2 – Emergency Leave Escalation Note</span>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalF2Form;