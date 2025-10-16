import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, Activity } from 'lucide-react';

const ProfessionalG5Form = () => {
  const [formData, setFormData] = useState({
    ann_title: 'Intoxication Screening & Fitness to Work Format',
    ann_no: 'G5',
    ann_sop: 'SOP G.5 – Workplace Safety & Fitness Standards',
    ann_bylaws: 'Section 13.1 – Safety Standards; Section 13.3 – Workplace Hazards & Risk Management',
    ann_version: '1.0',
    ann_effective: '',
    ann_cust: 'Human Resources / Medical Services / Safety',
    ann_auth: 'Medical Officer / HR Manager / Compliance Officer',
    ann_purpose: 'This Annexure provides the format for screening employees suspected of intoxication and assessing their fitness to work at Koyili Hospital. It ensures compliance with SOP G.5 and Section 13.1 – Safety Standards; Section 13.3 – Workplace Hazards & Risk Management by maintaining a transparent and documented process for workplace safety. It also supports compliance with labour laws, occupational health and safety standards, and NABH/JCI accreditation.',
    emp_name: '',
    emp_id: '',
    emp_dept: '',
    emp_desig: '',
    assess_date: '',
    screening_reason: '',
    breath_result: '',
    breath_remarks: '',
    blood_result: '',
    blood_remarks: '',
    urine_result: '',
    urine_remarks: '',
    behavioral_result: '',
    behavioral_remarks: '',
    fitness_status: '',
    fitness_restrictions: '',
    sig_med_name: '',
    sig_med_date: '',
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
    a.download = 'Annexure_G5_Intoxication_Screening.json';
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
        ann_title: 'Intoxication Screening & Fitness to Work Format',
        ann_no: 'G5',
        ann_sop: 'SOP G.5 – Workplace Safety & Fitness Standards',
        ann_bylaws: 'Section 13.1 – Safety Standards; Section 13.3 – Workplace Hazards & Risk Management',
        ann_version: '1.0',
        ann_effective: '',
        ann_cust: 'Human Resources / Medical Services / Safety',
        ann_auth: 'Medical Officer / HR Manager / Compliance Officer',
        ann_purpose: 'This Annexure provides the format for screening employees suspected of intoxication and assessing their fitness to work at Koyili Hospital.',
        emp_name: '',
        emp_id: '',
        emp_dept: '',
        emp_desig: '',
        assess_date: '',
        screening_reason: '',
        breath_result: '',
        breath_remarks: '',
        blood_result: '',
        blood_remarks: '',
        urine_result: '',
        urine_remarks: '',
        behavioral_result: '',
        behavioral_remarks: '',
        fitness_status: '',
        fitness_restrictions: '',
        sig_med_name: '',
        sig_med_date: '',
        sig_hr_name: '',
        sig_hr_date: '',
        sig_comp_name: '',
        sig_comp_date: ''
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
                <h2 className="text-xl font-bold">INTOXICATION SCREENING & FITNESS TO WORK</h2>
              </div>
            </div>
            <div className="flex-shrink-0 text-right space-y-2">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
                <p className="text-2xl font-bold">G5</p>
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
            <span>📋 Safety</span>
            <div className="w-px h-4 bg-blue-300"></div>
            <span>SOP G.5 – Workplace Safety & Fitness Standards</span>
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
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Assessment</label><input type="date" name="assess_date" value={formData.assess_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" /><div className="flex items-center gap-2"><Activity className="text-blue-600" size={20} /><h3 className="text-lg font-bold text-gray-900">Reason for Screening / Referral</h3></div></div>
          <textarea name="screening_reason" value={formData.screening_reason} onChange={handleChange} rows="3" placeholder="Describe reason (e.g., observed signs, random screening, post-accident)" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" /><h3 className="text-lg font-bold text-gray-900">Medical Examination & Test Results</h3></div>
          <table className="w-full border-collapse text-sm">
            <thead><tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Test Conducted</th><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Result</th><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Remarks</th></tr></thead>
            <tbody>
              <tr><td className="border border-gray-200 px-3 py-2">Breath Alcohol Test</td><td className="border border-gray-200 px-3 py-2"><select name="breath_result" value={formData.breath_result} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded"><option value="">--</option><option value="Positive">Positive</option><option value="Negative">Negative</option></select></td><td className="border border-gray-200 px-3 py-2"><input name="breath_remarks" value={formData.breath_remarks} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">Blood Test (if required)</td><td className="border border-gray-200 px-3 py-2"><select name="blood_result" value={formData.blood_result} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded"><option value="">--</option><option value="Positive">Positive</option><option value="Negative">Negative</option></select></td><td className="border border-gray-200 px-3 py-2"><input name="blood_remarks" value={formData.blood_remarks} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">Urine Test (if required)</td><td className="border border-gray-200 px-3 py-2"><select name="urine_result" value={formData.urine_result} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded"><option value="">--</option><option value="Positive">Positive</option><option value="Negative">Negative</option></select></td><td className="border border-gray-200 px-3 py-2"><input name="urine_remarks" value={formData.urine_remarks} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">Behavioral / Clinical Observation</td><td className="border border-gray-200 px-3 py-2"><select name="behavioral_result" value={formData.behavioral_result} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded"><option value="">--</option><option value="Normal">Normal</option><option value="Abnormal">Abnormal</option></select></td><td className="border border-gray-200 px-3 py-2"><input name="behavioral_remarks" value={formData.behavioral_remarks} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" /><h3 className="text-lg font-bold text-gray-900">Fitness to Work Assessment</h3></div>
          <div className="space-y-3 mb-4">
            <label className="flex items-center gap-2"><input type="radio" name="fitness_status" value="Fit to Resume Duty" checked={formData.fitness_status === 'Fit to Resume Duty'} onChange={handleChange} /><span>Fit to Resume Duty</span></label>
            <label className="flex items-center gap-2"><input type="radio" name="fitness_status" value="Unfit for Duty" checked={formData.fitness_status === 'Unfit for Duty'} onChange={handleChange} /><span>Unfit for Duty – Immediate Removal from Workplace</span></label>
            <label className="flex items-center gap-2"><input type="radio" name="fitness_status" value="Fit with Restrictions" checked={formData.fitness_status === 'Fit with Restrictions'} onChange={handleChange} /><span>Fit with Restrictions (Specify below)</span></label>
          </div>
          {formData.fitness_status === 'Fit with Restrictions' && <input name="fitness_restrictions" value={formData.fitness_restrictions} onChange={handleChange} placeholder="Specify restrictions" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-4"><div className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-blue-900 rounded-full" /><h3 className="text-lg font-bold text-gray-900">Signatures & Verification</h3></div>
          <table className="w-full border-collapse text-sm"><thead><tr><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Role</th><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Signature</th><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Name</th><th className="border border-gray-200 bg-blue-50 text-blue-900 font-bold px-3 py-2 text-left">Date</th></tr></thead><tbody>
            <tr><td className="border border-gray-200 px-3 py-2">Medical Officer (Examination & Certification)</td><td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td><td className="border border-gray-200 px-3 py-2"><input name="sig_med_name" value={formData.sig_med_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td><td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_med_date" value={formData.sig_med_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            <tr><td className="border border-gray-200 px-3 py-2">HR Manager (Custodian & Policy Enforcement)</td><td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td><td className="border border-gray-200 px-3 py-2"><input name="sig_hr_name" value={formData.sig_hr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td><td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_hr_date" value={formData.sig_hr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
            <tr><td className="border border-gray-200 px-3 py-2">Compliance Officer (Oversight & Audit Check)</td><td className="border border-gray-200 px-3 py-2"><div className="h-12 border-b-2 border-dotted border-gray-400" /></td><td className="border border-gray-200 px-3 py-2"><input name="sig_comp_name" value={formData.sig_comp_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td><td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_comp_date" value={formData.sig_comp_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td></tr>
          </tbody></table>
        </div>

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
            <p className="text-sm font-bold">Form G5</p>
            <p className="text-xs text-blue-200">Intoxication Screening & Fitness</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalG5Form;
