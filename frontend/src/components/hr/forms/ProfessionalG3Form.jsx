import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, AlertTriangle } from 'lucide-react';

const ProfessionalG3Form = () => {
  const [formData, setFormData] = useState({
    ann_title: 'Conflict of Interest Disclosure Form',
    ann_no: 'G3',
    ann_sop: 'SOP G.3 – Conflict of Interest Management',
    ann_bylaws: 'Section 3.4 – Conflict of Interest; Section 25 – Handling Conflict of Interest',
    ann_version: '1.0',
    ann_effective: '',
    ann_cust: 'Human Resources / Compliance',
    ann_auth: 'HR Manager / Compliance Officer / Hospital Director',
    ann_purpose: 'This Annexure provides the disclosure form for conflicts of interest (COI) at Koyili Hospital. It ensures compliance with SOP G.3 and By-Laws Section 3.4 – Conflict of Interest; Section 25 – Handling Conflict of Interest by documenting situations where employees\' personal, financial, or professional interests may conflict with organizational responsibilities. It also ensures readiness for compliance audits, NABH/JCI assessments, and governance standards.',
    emp_name: '',
    emp_id: '',
    emp_dept: '',
    emp_desig: '',
    date_join: '',
    financial_interest: '',
    secondary_employment: '',
    gifts_received: '',
    personal_relationships: '',
    dec_name: '',
    dec_date: '',
    sig_hr_name: '',
    sig_hr_date: '',
    sig_comp_name: '',
    sig_comp_date: '',
    sig_dir_name: '',
    sig_dir_date: ''
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
    a.download = 'Annexure_G3_Conflict_of_Interest.json';
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
    if (window.confirm('Reset all fields?')) {
      setFormData({
        ann_title: 'Conflict of Interest Disclosure Form',
        ann_no: 'G3',
        ann_sop: 'SOP G.3 – Conflict of Interest Management',
        ann_bylaws: 'Section 3.4 – Conflict of Interest; Section 25 – Handling Conflict of Interest',
        ann_version: '1.0',
        ann_effective: '',
        ann_cust: 'Human Resources / Compliance',
        ann_auth: 'HR Manager / Compliance Officer / Hospital Director',
        ann_purpose: 'This Annexure provides the disclosure form for conflicts of interest (COI) at Koyili Hospital.',
        emp_name: '',
        emp_id: '',
        emp_dept: '',
        emp_desig: '',
        date_join: '',
        financial_interest: '',
        secondary_employment: '',
        gifts_received: '',
        personal_relationships: '',
        dec_name: '',
        dec_date: '',
        sig_hr_name: '',
        sig_hr_date: '',
        sig_comp_name: '',
        sig_comp_date: '',
        sig_dir_name: '',
        sig_dir_date: ''
      });
      setLogo('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
    }
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-3 print:hidden">
        <div className="flex items-center gap-3 flex-wrap">
          <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><Upload size={16} /><span className="font-semibold text-sm">Upload Logo</span></button>
          <div className="flex-1" />
          <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><Save size={16} /><span className="font-semibold text-sm">Save (JSON)</span></button>
          <button onClick={() => loadInputRef.current?.click()} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><Download size={16} /><span className="font-semibold text-sm">Load (JSON)</span></button>
          <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2 border border-orange-300 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors"><RotateCcw size={16} /><span className="font-semibold text-sm">Reset</span></button>
          <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"><Printer size={16} /><span className="font-semibold text-sm">Print / Save PDF</span></button>
        </div>
      </div>

      <input ref={fileInputRef} type="file" accept="image/*,.svg" onChange={handleLogoUpload} className="hidden" />
      <input ref={loadInputRef} type="file" accept="application/json" onChange={handleLoad} className="hidden" />

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
                <h2 className="text-xl font-bold">CONFLICT OF INTEREST DISCLOSURE FORM</h2>
              </div>
            </div>
            <div className="flex-shrink-0 text-right space-y-2">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
                <p className="text-2xl font-bold">G3</p>
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
            <span>📋 Governance</span>
            <div className="w-px h-4 bg-blue-300"></div>
            <span>SOP G.3 – Conflict of Interest Management</span>
          </div>
        </div>
        <div className="px-6 py-8 print:py-4">

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" /><h3 className="text-lg font-bold text-gray-900">Document Control</h3></div>
          <table className="w-full border-collapse text-sm"><tbody>
            <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left w-1/3">Document Title</th><td className="border border-gray-200 px-3 py-2"><input name="ann_title" value={formData.ann_title} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Annexure Number</th><td className="border border-gray-200 px-3 py-2"><input name="ann_no" value={formData.ann_no} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Linked SOP</th><td className="border border-gray-200 px-3 py-2"><input name="ann_sop" value={formData.ann_sop} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">By-Laws Reference</th><td className="border border-gray-200 px-3 py-2"><input name="ann_bylaws" value={formData.ann_bylaws} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Version No.</th><td className="border border-gray-200 px-3 py-2"><input name="ann_version" value={formData.ann_version} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Effective Date</th><td className="border border-gray-200 px-3 py-2"><input type="date" name="ann_effective" value={formData.ann_effective} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Custodian Department</th><td className="border border-gray-200 px-3 py-2"><input name="ann_cust" value={formData.ann_cust} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            <tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Approved Authority</th><td className="border border-gray-200 px-3 py-2"><input name="ann_auth" value={formData.ann_auth} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
          </tbody></table>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" /><h3 className="text-lg font-bold text-gray-900">Purpose</h3></div>
          <textarea name="ann_purpose" value={formData.ann_purpose} onChange={handleChange} rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" /><h3 className="text-lg font-bold text-gray-900">Employee Details</h3></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Name</label><input name="emp_name" value={formData.emp_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label><input name="emp_id" value={formData.emp_id} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Department</label><input name="emp_dept" value={formData.emp_dept} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label><input name="emp_desig" value={formData.emp_desig} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Joining</label><input type="date" name="date_join" value={formData.date_join} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" /><div className="flex items-center gap-2"><AlertTriangle className="text-amber-600" size={20} /><h3 className="text-lg font-bold text-gray-900">Conflict of Interest Declaration</h3></div></div>
          <div className="space-y-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">1. Financial interests with entities doing business with Koyili Hospital?</label><select name="financial_interest" value={formData.financial_interest} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg"><option value="">-- Select --</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">2. Secondary employment, consultancy, or advisory role that may conflict?</label><select name="secondary_employment" value={formData.secondary_employment} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg"><option value="">-- Select --</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">3. Received or been offered gifts, favors, or hospitality?</label><select name="gifts_received" value={formData.gifts_received} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg"><option value="">-- Select --</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">4. Personal relationships that may compromise objectivity?</label><select name="personal_relationships" value={formData.personal_relationships} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg"><option value="">-- Select --</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" /><h3 className="text-lg font-bold text-gray-900">Employee Declaration</h3></div>
          <div className="mb-3"><label className="block text-sm font-semibold text-gray-700 mb-1">Employee Name</label><input name="dec_name" value={formData.dec_name} onChange={handleChange} className="w-3/5 px-3 py-2 border border-gray-300 rounded-lg" /></div>
          <p className="mb-4 text-sm">I hereby declare that the above information is true and complete. I understand that failure to disclose conflicts of interest may lead to disciplinary action under By-Laws Section 3.4 – Conflict of Interest; Section 25 – Handling Conflict of Interest.</p>
          <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-semibold text-gray-700 mb-1">Signature</label><div className="h-12 border-b-2 border-dotted border-gray-400" /></div><div><label className="block text-sm font-semibold text-gray-700 mb-1">Date</label><input type="date" name="dec_date" value={formData.dec_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" /><h3 className="text-lg font-bold text-gray-900">Approval & Verification</h3></div>
          <table className="w-full border-collapse text-sm"><thead><tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Role</th><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Signature</th><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Name</th><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Date</th></tr></thead><tbody>
            <tr><td className="border border-gray-200 px-3 py-2">HR Manager (Verification & Custodian)</td><td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td><td className="border border-gray-200 px-3 py-2"><input name="sig_hr_name" value={formData.sig_hr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td><td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_hr_date" value={formData.sig_hr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            <tr><td className="border border-gray-200 px-3 py-2">Compliance Officer (Review & Risk Mitigation)</td><td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td><td className="border border-gray-200 px-3 py-2"><input name="sig_comp_name" value={formData.sig_comp_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td><td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_comp_date" value={formData.sig_comp_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            <tr><td className="border border-gray-200 px-3 py-2">Hospital Director (Final Acknowledgment, if applicable)</td><td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td><td className="border border-gray-200 px-3 py-2"><input name="sig_dir_name" value={formData.sig_dir_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td><td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_dir_date" value={formData.sig_dir_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
          </tbody></table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5"><div className="flex items-center gap-3 mb-3"><AlertTriangle className="text-amber-700" size={20} /><h3 className="text-lg font-bold text-amber-900">Instructions for Use</h3></div><ul className="list-disc list-inside space-y-1 text-sm text-gray-700"><li>This form must be signed at joining and updated annually.</li><li>Employees must immediately disclose any new or emerging conflicts.</li><li>HR must retain signed forms in the Personnel File (Annexure D1).</li><li>Significant disclosures must be escalated to the Compliance Officer & Director.</li><li>Records must be preserved for 10 years for governance and accreditation audits.</li></ul></div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 text-xs text-gray-600 print:relative print:mt-8"><div className="flex justify-between items-center max-w-5xl mx-auto"><span>© Koyili Hospital • Confidential • Version-controlled</span><span>Form G3 – Conflict of Interest Disclosure Form</span></div></div>
    </div>
  );
};

export default ProfessionalG3Form;