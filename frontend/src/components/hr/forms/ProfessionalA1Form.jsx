import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, FileText } from 'lucide-react';

const ProfessionalA1Form = () => {
  const [formData, setFormData] = useState({
    ann_title: 'HR Policy Revision Request Form',
    ann_no: 'A1',
    ann_sop: 'SOP A.1 – HR Policy Review & Update',
    ann_bylaws: 'Section 2 – Policy Governance',
    ann_version: '1.0',
    ann_effective: '',
    ann_cust: 'Human Resources / Compliance',
    ann_auth: 'HR Director / Compliance Officer / CEO',
    ann_purpose: 'This Annexure provides the standardized HR Policy Revision Request Form for Koyili Hospital. It ensures systematic review and update of HR policies with proper authorization and documentation.',
    req_name: '',
    req_emp_id: '',
    req_dept: '',
    req_desig: '',
    req_date: '',
    policy_title: '',
    policy_ver: '',
    policy_date: '',
    policy_clause: '',
    revision_type: '',
    revision_reason: '',
    revision_impact: '',
    revision_impl_date: '',
    hod_name: '',
    hod_date: '',
    hr_name: '',
    hr_date: '',
    compliance_name: '',
    compliance_date: '',
    ceo_name: '',
    ceo_date: ''
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
    a.download = 'Annexure_A1_Policy_Revision.json';
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
    if (window.confirm('Reset all fields to default values?')) {
      setFormData({
        ann_title: 'HR Policy Revision Request Form',
        ann_no: 'A1',
        ann_sop: 'SOP A.1 – HR Policy Review & Update',
        ann_bylaws: 'Section 2 – Policy Governance',
        ann_version: '1.0',
        ann_effective: '',
        ann_cust: 'Human Resources / Compliance',
        ann_auth: 'HR Director / Compliance Officer / CEO',
        ann_purpose: 'This Annexure provides the standardized HR Policy Revision Request Form for Koyili Hospital.',
        req_name: '',
        req_emp_id: '',
        req_dept: '',
        req_desig: '',
        req_date: '',
        policy_title: '',
        policy_ver: '',
        policy_date: '',
        policy_clause: '',
        revision_type: '',
        revision_reason: '',
        revision_impact: '',
        revision_impl_date: '',
        hod_name: '',
        hod_date: '',
        hr_name: '',
        hr_date: '',
        compliance_name: '',
        compliance_date: '',
        ceo_name: '',
        ceo_date: ''
      });
      setLogoData('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
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
              <h2 className="text-xl font-bold">HR POLICY REVISION REQUEST</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">A1</p>
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
          <textarea name="ann_purpose" value={formData.ann_purpose} onChange={handleChange} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Requestor Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Name</label><input type="text" name="req_name" value={formData.req_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label><input type="text" name="req_emp_id" value={formData.req_emp_id} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Department</label><input type="text" name="req_dept" value={formData.req_dept} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label><input type="text" name="req_desig" value={formData.req_desig} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Request Date</label><input type="date" name="req_date" value={formData.req_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><FileText className="w-5 h-5" />Policy Reference</h3>
          <div className="space-y-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Policy Title</label><input type="text" name="policy_title" value={formData.policy_title} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div className="grid grid-cols-3 gap-4">
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Version</label><input type="text" name="policy_ver" value={formData.policy_ver} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Policy Date</label><input type="date" name="policy_date" value={formData.policy_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Clause/Section</label><input type="text" name="policy_clause" value={formData.policy_clause} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Nature of Revision</h3>
          <div className="space-y-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Revision Type</label><select name="revision_type" value={formData.revision_type} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg"><option value="">Select type</option><option value="minor">Minor Amendment</option><option value="major">Major Update</option><option value="new">New Policy Addition</option><option value="removal">Policy Removal</option></select></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Reason for Revision</label><textarea name="revision_reason" value={formData.revision_reason} onChange={handleChange} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Impact Assessment</label><textarea name="revision_impact" value={formData.revision_impact} onChange={handleChange} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Proposed Implementation Date</label><input type="date" name="revision_impl_date" value={formData.revision_impl_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Approvals & Signatures</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-gray-200 px-3 py-2 text-left">Authority</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Name</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Head of Department</td>
                <td className="border border-gray-200 px-3 py-2"><input name="hod_name" value={formData.hod_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="hod_date" value={formData.hod_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">HR Director</td>
                <td className="border border-gray-200 px-3 py-2"><input name="hr_name" value={formData.hr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="hr_date" value={formData.hr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Compliance Officer</td>
                <td className="border border-gray-200 px-3 py-2"><input name="compliance_name" value={formData.compliance_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="compliance_date" value={formData.compliance_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">CEO</td>
                <td className="border border-gray-200 px-3 py-2"><input name="ceo_name" value={formData.ceo_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="ceo_date" value={formData.ceo_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
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
            <p className="text-sm font-bold">Form A1</p>
            <p className="text-xs text-blue-200">HR Policy Revision Request</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalA1Form;
