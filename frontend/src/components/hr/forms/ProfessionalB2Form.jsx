import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, FileCheck, Shield, Calendar, DollarSign, Users } from 'lucide-react';

const ProfessionalB2Form = () => {
  const [formData, setFormData] = useState({
    eff_date: '', req_ref: '', dept: '', req_sub_date: '', job_title: '', num_approved: '1',
    emp_perm: false, emp_contract: false, emp_temp: false, emp_intern: false,
    grade_level: '', location: '', justification: '', salary_ctc: '', budget_head: '',
    fin_verified: false, fin_not: false, fin_remarks: '',
    strat_internal: false, strat_external: false, strat_contract: false,
    hod_name: '', hod_desig: '', hod_place: '', hod_date: '',
    hr_name: '', hr_desig: '', hr_place: '', hr_date: '',
    fin_name: '', fin_desig: '', fin_place: '', fin_date: '',
    ceo_name: '', ceo_desig: '', ceo_place: '', ceo_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('b2_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const totalFields = 20;
    let filled = Object.values(formData).filter(v => v && v !== '1').length;
    setProgress(Math.min(100, Math.round((filled / totalFields) * 100)));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('b2_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'B2-Recruitment-Approval.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('b2_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-emerald-700 via-green-700 to-teal-700 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {logoData && <img src={logoData} alt="Logo" className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg object-contain" />}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
              <p className="text-emerald-200 text-sm mt-1">Human Resources Department</p>
              <p className="text-emerald-300 text-xs">Pallikkunnu, Talap, Kannur, Kerala</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-emerald-200 mb-1">Document Classification</p>
              <p className="text-sm font-bold">OFFICIAL DOCUMENT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 px-8 py-4 border-b-2 border-emerald-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded font-bold">B2</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">SOP:</span> B.2</div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Progress:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-slate-200">
        <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">Recruitment Annexure</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">RECRUITMENT APPROVAL NOTE</h2>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Effective Date: 10/15/2025</span></div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>Approval Authority: CEO / Medical Director</span></div>
        </div>
      </div>

      <div className="px-8 py-8 space-y-8">
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-emerald-700">
            <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center"><FileCheck className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">1. Request Reference</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Requisition No. *</label><input type="text" value={formData.req_ref} onChange={(e) => handleChange('req_ref', e.target.value)} placeholder="B1 reference" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Department *</label><input type="text" value={formData.dept} onChange={(e) => handleChange('dept', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Date of Submission *</label><input type="date" value={formData.req_sub_date} onChange={(e) => handleChange('req_sub_date', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none" /></div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-emerald-700">
            <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center"><Users className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">2. Position Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Job Title *</label><input type="text" value={formData.job_title} onChange={(e) => handleChange('job_title', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Number Approved *</label><input type="number" min="1" value={formData.num_approved} onChange={(e) => handleChange('num_approved', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Grade / Level</label><input type="text" value={formData.grade_level} onChange={(e) => handleChange('grade_level', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Location / Unit</label><input type="text" value={formData.location} onChange={(e) => handleChange('location', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none" /></div>
          </div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">Employment Type:</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-emerald-400 cursor-pointer"><input type="checkbox" checked={formData.emp_perm} onChange={(e) => handleChange('emp_perm', e.target.checked)} className="w-5 h-5 text-emerald-600 rounded" /><span className="font-semibold text-slate-900">Permanent</span></label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-emerald-400 cursor-pointer"><input type="checkbox" checked={formData.emp_contract} onChange={(e) => handleChange('emp_contract', e.target.checked)} className="w-5 h-5 text-emerald-600 rounded" /><span className="font-semibold text-slate-900">Contract</span></label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-emerald-400 cursor-pointer"><input type="checkbox" checked={formData.emp_temp} onChange={(e) => handleChange('emp_temp', e.target.checked)} className="w-5 h-5 text-emerald-600 rounded" /><span className="font-semibold text-slate-900">Temporary</span></label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-emerald-400 cursor-pointer"><input type="checkbox" checked={formData.emp_intern} onChange={(e) => handleChange('emp_intern', e.target.checked)} className="w-5 h-5 text-emerald-600 rounded" /><span className="font-semibold text-slate-900">Internship</span></label>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-emerald-700">
            <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center"><FileCheck className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">3. Justification for Approval</h3>
          </div>
          <textarea value={formData.justification} onChange={(e) => handleChange('justification', e.target.value)} placeholder="Provide summary of the necessity for this recruitment..." rows={4} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none" />
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-emerald-700">
            <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center"><DollarSign className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">4. Budget Confirmation</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Salary Range / CTC Approved</label><input type="text" value={formData.salary_ctc} onChange={(e) => handleChange('salary_ctc', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Budget Head / Code</label><input type="text" value={formData.budget_head} onChange={(e) => handleChange('budget_head', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none" /></div>
          </div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">Verified by Finance:</label>
          <div className="flex gap-4 mb-4">
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-emerald-400 cursor-pointer"><input type="checkbox" checked={formData.fin_verified} onChange={(e) => handleChange('fin_verified', e.target.checked)} className="w-5 h-5 text-emerald-600 rounded" /><span>Yes</span></label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-emerald-400 cursor-pointer"><input type="checkbox" checked={formData.fin_not} onChange={(e) => handleChange('fin_not', e.target.checked)} className="w-5 h-5 text-emerald-600 rounded" /><span>No</span></label>
          </div>
          <textarea value={formData.fin_remarks} onChange={(e) => handleChange('fin_remarks', e.target.value)} placeholder="Finance remarks" rows={2} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none" />
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-emerald-700">
            <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center"><Users className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">5. Recruitment Strategy</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-emerald-400 cursor-pointer"><input type="checkbox" checked={formData.strat_internal} onChange={(e) => handleChange('strat_internal', e.target.checked)} className="w-5 h-5 text-emerald-600 rounded mt-0.5" /><span className="text-slate-800">Internal Recruitment (Transfer / Promotion)</span></label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-emerald-400 cursor-pointer"><input type="checkbox" checked={formData.strat_external} onChange={(e) => handleChange('strat_external', e.target.checked)} className="w-5 h-5 text-emerald-600 rounded mt-0.5" /><span className="text-slate-800">External Recruitment (Consultant / Advertisement / Campus)</span></label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-emerald-400 cursor-pointer"><input type="checkbox" checked={formData.strat_contract} onChange={(e) => handleChange('strat_contract', e.target.checked)} className="w-5 h-5 text-emerald-600 rounded mt-0.5" /><span className="text-slate-800">Contractual / Outsourced Hiring</span></label>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-emerald-700">
            <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Approval Workflow</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {label: 'Head of Department', prefix: 'hod'},
              {label: 'HR Manager', prefix: 'hr'},
              {label: 'Finance Manager', prefix: 'fin'},
              {label: 'CEO / Medical Director', prefix: 'ceo'}
            ].map((approver) => (
              <div key={approver.prefix} className="border-2 border-slate-300 rounded-lg p-4">
                <p className="font-semibold text-slate-900 mb-3">{approver.label}</p>
                <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
                <div className="space-y-2">
                  <input type="text" value={formData[`${approver.prefix}_name`]} onChange={(e) => handleChange(`${approver.prefix}_name`, e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-emerald-500 focus:outline-none text-sm" />
                  <input type="text" value={formData[`${approver.prefix}_desig`]} onChange={(e) => handleChange(`${approver.prefix}_desig`, e.target.value)} placeholder="Designation" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-emerald-500 focus:outline-none text-sm" />
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" value={formData[`${approver.prefix}_place`]} onChange={(e) => handleChange(`${approver.prefix}_place`, e.target.value)} placeholder="Place" className="px-3 py-2 border border-slate-300 rounded focus:border-emerald-500 focus:outline-none text-sm" />
                    <input type="date" value={formData[`${approver.prefix}_date`]} onChange={(e) => handleChange(`${approver.prefix}_date`, e.target.value)} className="px-3 py-2 border border-slate-300 rounded focus:border-emerald-500 focus:outline-none text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <p className="text-sm text-slate-800 leading-relaxed"><strong>Note:</strong> This Annexure shall be read in conjunction with SOP B.2 (Recruitment Approval Process) and By-Laws Section 2.2(a–b) – Job Advertising & Selection.</p>
        </section>
      </div>

      <div className="border-t-2 border-emerald-700 bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-700 px-8 py-6 text-white">
        <div className="flex items-center justify-between text-sm">
          <p>© Koyili Hospital • Confidential • Version-controlled</p>
          <p>Annexure B2 • Version 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalB2Form;