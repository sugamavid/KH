import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, CheckSquare } from 'lucide-react';

const ProfessionalG1Form = () => {
  const [formData, setFormData] = useState({
    ann_title: 'Dress Code Acknowledgment Form',
    ann_no: 'G1',
    ann_sop: 'SOP G.1 – Dress Code & Uniform Policy',
    ann_bylaws: 'Section 3.2 – Dress Code',
    ann_version: '1.0',
    ann_effective: '',
    ann_cust: 'Human Resources / Administration',
    ann_auth: 'HR Manager / Compliance Officer',
    ann_purpose: 'This Annexure provides the acknowledgment form for compliance with the hospital\'s Dress Code & Uniform Policy. It ensures employees adhere to professional appearance, infection control and safety standards in line with SOP G.1 and Section 3.2 – Dress Code. Signed copies are retained in Personnel Files (Annexure D1) for audit and compliance.',
    emp_name: '',
    emp_id: '',
    emp_dept: '',
    emp_desig: '',
    date_join: '',
    acknowledged: false,
    comply: false,
    discipline: false,
    undertake: false,
    sig_emp_name: '',
    sig_emp_date: '',
    sig_hr_name: '',
    sig_hr_date: ''
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
    a.download = 'Annexure_G1_Dress_Code_Acknowledgment.json';
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
        ann_title: 'Dress Code Acknowledgment Form',
        ann_no: 'G1',
        ann_sop: 'SOP G.1 – Dress Code & Uniform Policy',
        ann_bylaws: 'Section 3.2 – Dress Code',
        ann_version: '1.0',
        ann_effective: '',
        ann_cust: 'Human Resources / Administration',
        ann_auth: 'HR Manager / Compliance Officer',
        ann_purpose: 'This Annexure provides the acknowledgment form for compliance with the hospital\'s Dress Code & Uniform Policy.',
        emp_name: '',
        emp_id: '',
        emp_dept: '',
        emp_desig: '',
        date_join: '',
        acknowledged: false,
        comply: false,
        discipline: false,
        undertake: false,
        sig_emp_name: '',
        sig_emp_date: '',
        sig_hr_name: '',
        sig_hr_date: ''
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
        {/* Standardized NABH-Compliant Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white p-8">
          <div className="flex items-center gap-8">
            {/* Logo - Left Aligned */}
            <div className="flex-shrink-0">
              <img src={logo} alt="Koyili Hospital Logo" className="w-32 h-32 bg-white rounded-lg p-3 shadow-xl object-contain" />
            </div>
            
            {/* Hospital Details & Form Title */}
            <div className="flex-1">
              <div className="mb-4">
                <h1 className="text-4xl font-bold tracking-tight mb-1">KOYILI HOSPITAL</h1>
                <p className="text-blue-200 text-base font-semibold">Human Resources Department</p>
                <p className="text-blue-300 text-sm">NABH Accredited • Pallikkunnu, Talap, Kannur, Kerala</p>
              </div>
              <div className="border-t border-blue-400/30 pt-4">
                <h2 className="text-2xl font-bold mb-2">DRESS CODE ACKNOWLEDGMENT FORM</h2>
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-blue-700/50 px-3 py-1 rounded-full">Annexure G1</span>
                  <span className="bg-blue-700/50 px-3 py-1 rounded-full">SOP G.1</span>
                  <span className="bg-blue-700/50 px-3 py-1 rounded-full">Version 1.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Document Control Strip */}
        <div className="bg-blue-50 px-8 py-3 border-b-2 border-blue-900 flex items-center justify-between">
          <div className="flex items-center gap-6 text-xs font-semibold text-blue-900">
            <span>Compliance</span>
            <div className="w-px h-4 bg-blue-300"></div>
            <span>SOP G.1 – Dress Code & Uniform Policy</span>
            <div className="w-px h-4 bg-blue-300"></div>
            <span>By-Laws Section 3.2</span>
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
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Joining</label><input type="date" name="date_join" value={formData.date_join} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        {/* Acknowledgment Statement */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" />
            <div className="flex items-center gap-2">
              <CheckSquare className="text-indigo-600" size={20} />
              <h3 className="text-lg font-bold text-gray-900">Acknowledgment Statement</h3>
            </div>
          </div>
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="acknowledged" checked={formData.acknowledged} onChange={handleChange} className="w-5 h-5 mt-0.5" />
              <span className="text-sm">I have read and understood the hospital's Dress Code & Uniform Policy (SOP G.1).</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="comply" checked={formData.comply} onChange={handleChange} className="w-5 h-5 mt-0.5" />
              <span className="text-sm">I agree to comply with the prescribed uniform standards, grooming requirements, and safety gear protocols.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="discipline" checked={formData.discipline} onChange={handleChange} className="w-5 h-5 mt-0.5" />
              <span className="text-sm">I understand that non-compliance may invite disciplinary action as per Section 3.2 – Dress Code and hospital rules.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="undertake" checked={formData.undertake} onChange={handleChange} className="w-5 h-5 mt-0.5" />
              <span className="text-sm">I undertake to maintain professional appearance standards to uphold the reputation and values of Koyili Hospital.</span>
            </label>
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
                <td className="border border-gray-200 px-3 py-2">HR Manager (Verification & Record Custodian)</td>
                <td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_hr_name" value={formData.sig_hr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_hr_date" value={formData.sig_hr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Instructions */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <CheckSquare className="text-indigo-700" size={20} />
            <h3 className="text-lg font-bold text-indigo-900">Instructions for Use</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>This acknowledgment must be signed by all employees at the time of joining.</li>
            <li>HR must retain signed copies in the Personnel File (Annexure D1).</li>
            <li>Any changes in the Dress Code Policy must be re-acknowledged.</li>
            <li>Non-compliance incidents must be documented in Annexure G4 (Disciplinary Action Reporting Form).</li>
            <li>Records must be archived for 7 years for compliance and audit purposes.</li>
          </ul>
        </div>

        {/* Standardized NABH-Compliant Footer */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-8 py-4 border-t-4 border-blue-900">
          <div className="flex items-center justify-between text-sm">
            <span className="text-blue-900 font-semibold">© Koyili Hospital • NABH Accredited • Confidential • Version-controlled</span>
            <span className="text-blue-700 font-bold">Form G1 – Dress Code Acknowledgment Form</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="print:hidden h-16"></div>
    </div>
  );
};

export default ProfessionalG1Form;