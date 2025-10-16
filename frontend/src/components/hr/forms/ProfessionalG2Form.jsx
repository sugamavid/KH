import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, Shield } from 'lucide-react';

const ProfessionalG2Form = () => {
  const [formData, setFormData] = useState({
    ann_title: 'Code of Ethics & Conduct Declaration',
    ann_no: 'G2',
    ann_sop: 'SOP G.2 – Code of Ethics & Professional Conduct',
    ann_bylaws: 'Section 3.1 – Professional Ethics; Section 3.3 – Behavioral Expectations',
    ann_version: '1.0',
    ann_effective: '',
    ann_cust: 'Human Resources / Compliance',
    ann_auth: 'HR Manager / Compliance Officer / Hospital Director',
    ann_purpose: 'This Annexure provides the declaration form for adherence to the hospital\'s Code of Ethics and Professional Conduct. It ensures compliance with SOP G.2 and Section 3.1 – Professional Ethics; Section 3.3 – Behavioral Expectations by affirming employee commitment to ethical practices, patient confidentiality, integrity, and professional behavior. It also ensures readiness for statutory compliance, NABH/JCI accreditation, and organizational discipline.',
    emp_name: '',
    emp_id: '',
    emp_dept: '',
    emp_desig: '',
    date_join: '',
    decl_read: false,
    decl_uphold: false,
    decl_refrain: false,
    decl_violations: false,
    decl_report: false,
    sig_emp_name: '',
    sig_emp_date: '',
    sig_hr_name: '',
    sig_hr_date: '',
    sig_comp_name: '',
    sig_comp_date: ''
  });

  const [logo, setLogo] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
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
    a.download = 'Annexure_G2_Code_of_Ethics.json';
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
        ann_title: 'Code of Ethics & Conduct Declaration',
        ann_no: 'G2',
        ann_sop: 'SOP G.2 – Code of Ethics & Professional Conduct',
        ann_bylaws: 'Section 3.1 – Professional Ethics; Section 3.3 – Behavioral Expectations',
        ann_version: '1.0',
        ann_effective: '',
        ann_cust: 'Human Resources / Compliance',
        ann_auth: 'HR Manager / Compliance Officer / Hospital Director',
        ann_purpose: 'This Annexure provides the declaration form for adherence to the hospital\'s Code of Ethics and Professional Conduct.',
        emp_name: '',
        emp_id: '',
        emp_dept: '',
        emp_desig: '',
        date_join: '',
        decl_read: false,
        decl_uphold: false,
        decl_refrain: false,
        decl_violations: false,
        decl_report: false,
        sig_emp_name: '',
        sig_emp_date: '',
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
      <div className="max-w-5xl mx-auto px-6 py-8 print:py-4">
        {/* Header */}
        <div className="grid grid-cols-[240px_1fr] gap-6 items-center pb-6 border-b-4 border-blue-900 mb-6">
          <img src={logo} alt="Koyili Hospital Logo" className="w-full max-h-36 object-contain" />
          <div>
            <h1 className="text-2xl font-black text-blue-900 uppercase tracking-tight">Code of Ethics & Conduct Declaration</h1>
            <p className="text-gray-600 font-bold mt-2">HR • SOP G.2 – Code of Ethics & Professional Conduct • Annexure G2</p>
          </div>
        </div>

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
        </div>

        {/* Purpose */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Purpose</h3>
          </div>
          <textarea name="ann_purpose" value={formData.ann_purpose} onChange={handleChange} rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" />
        </div>
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
          </div>
        </div>
        </div>

        {/* Declaration Statement */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <div className="flex items-center gap-2">
              <Shield className="text-purple-600" size={20} />
              <h3 className="text-lg font-bold text-gray-900">Declaration Statement</h3>
            </div>
          </div>
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="decl_read" checked={formData.decl_read} onChange={handleChange} className="w-5 h-5 mt-0.5" />
              <span className="text-sm">I have read and understood the hospital's Code of Ethics & Professional Conduct (SOP G.2).</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="decl_uphold" checked={formData.decl_uphold} onChange={handleChange} className="w-5 h-5 mt-0.5" />
              <span className="text-sm">I agree to uphold honesty, integrity, accountability, patient confidentiality, and non-discrimination in all professional dealings.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="decl_refrain" checked={formData.decl_refrain} onChange={handleChange} className="w-5 h-5 mt-0.5" />
              <span className="text-sm">I shall refrain from any activity constituting misconduct, corruption, harassment, abuse of authority, or conflict of interest.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="decl_violations" checked={formData.decl_violations} onChange={handleChange} className="w-5 h-5 mt-0.5" />
              <span className="text-sm">I understand that violations may result in disciplinary action as per Section 3.1 – Professional Ethics; Section 3.3 – Behavioral Expectations.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="decl_report" checked={formData.decl_report} onChange={handleChange} className="w-5 h-5 mt-0.5" />
              <span className="text-sm">I undertake to immediately report any unethical practices as per the hospital's grievance redressal mechanism.</span>
            </label>
          </div>
        </div>
        </div>

        {/* Signatures */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Signatures</h3>
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
                <td className="border border-gray-200 px-3 py-2">Employee (Acknowledgment & Undertaking)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_emp_name" value={formData.sig_emp_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_emp_date" value={formData.sig_emp_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">HR Manager (Verification & Custodian)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_hr_name" value={formData.sig_hr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_hr_date" value={formData.sig_hr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Compliance Officer (Oversight & Validation)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_comp_name" value={formData.sig_comp_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_comp_date" value={formData.sig_comp_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>

        {/* Instructions */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="text-purple-700" size={20} />
            <h3 className="text-lg font-bold text-purple-900">Instructions for Use</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Every employee must sign this declaration at joining and re-confirm it every 2 years.</li>
            <li>HR must retain signed forms in the Personnel File (Annexure D1).</li>
            <li>Breaches of ethics must be documented in Annexure G4 (Disciplinary Action Reporting Form).</li>
            <li>For conflict of interest, employees must also submit Annexure G3 (Conflict of Interest Disclosure Form).</li>
            <li>Records must be archived for 10 years for statutory and accreditation audits.</li>
          </ul>
        </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 text-xs text-gray-600 print:relative print:mt-8">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <span>© Koyili Hospital • Confidential • Version-controlled</span>
          <span>Form G2 – Code of Ethics & Conduct Declaration</span>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalG2Form;