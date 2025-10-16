import React, { useState, useEffect } from 'react';
import { Users, Save, Upload, Download, FileText, Shield, Calendar, DollarSign, Briefcase } from 'lucide-react';

const ProfessionalB1Form = () => {
  const [formData, setFormData] = useState({
    eff_date: '',
    req_dept: '',
    req_position: '',
    req_vacancies: '',
    req_type: 'Full-time',
    req_grade: '',
    req_location: '',
    req_reason: '',
    req_resp: '',
    req_qual: '',
    req_exp: '',
    req_skills: '',
    budget: 'Yes',
    budget_remarks: '',
    hod_name: '',
    hod_date: '',
    hr_name: '',
    hr_date: '',
    fin_name: '',
    fin_date: '',
    ceo_name: '',
    ceo_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);

    const saved = localStorage.getItem('b1_form_data');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const totalFields = 22;
    let filledFields = 0;
    if (formData.req_dept) filledFields++;
    if (formData.req_position) filledFields++;
    if (formData.req_vacancies) filledFields++;
    if (formData.req_reason) filledFields += 2;
    if (formData.req_resp) filledFields += 2;
    if (formData.req_qual) filledFields += 2;
    if (formData.req_exp) filledFields += 2;
    if (formData.req_skills) filledFields += 2;
    if (formData.hod_name) filledFields += 2;
    if (formData.hr_name) filledFields += 2;
    if (formData.fin_name) filledFields += 2;
    if (formData.ceo_name) filledFields += 2;

    setProgress(Math.round((filledFields / totalFields) * 100));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('b1_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'B1-Manpower-Requisition.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('b1_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl">
      {/* Professional Header */}
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
              <h2 className="text-xl font-bold">MANPOWER REQUISITION FORM</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">B1</p>
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
      </div>

      {/* Document Metadata Bar */}
      <div className="bg-slate-50 px-8 py-4 border-b-2 border-teal-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded font-bold">B1</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">SOP:</span> B.1</div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Progress:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-teal-500 to-blue-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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

      {/* Document Title */}
      <div className="px-8 py-8 border-b border-slate-200">
        <div className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-4">Recruitment Annexure</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">MANPOWER REQUISITION FORM</h2>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Effective Date: 10/15/2025</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Approval Authority: CEO / Medical Director</span>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="px-8 py-8 space-y-8">
        {/* Purpose */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-teal-700">
            <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Purpose</h3>
          </div>
          <p className="text-[15px] leading-relaxed text-slate-800 text-justify">
            This Annexure is used to formally request approval for new recruitment or replacement positions. It must be completed by the Head of Department and routed through HR, Finance, and final authority as per SOP B.1.
          </p>
        </section>

        {/* Requisition Details */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-teal-700">
            <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Requisition Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Department *</label>
              <input type="text" value={formData.req_dept} onChange={(e) => handleChange('req_dept', e.target.value)} placeholder="Enter department" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Position Title *</label>
              <input type="text" value={formData.req_position} onChange={(e) => handleChange('req_position', e.target.value)} placeholder="Enter position title" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Number of Vacancies *</label>
              <input type="text" value={formData.req_vacancies} onChange={(e) => handleChange('req_vacancies', e.target.value)} placeholder="e.g., 2" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Employment Type *</label>
              <select value={formData.req_type} onChange={(e) => handleChange('req_type', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Proposed Grade/Level</label>
              <input type="text" value={formData.req_grade} onChange={(e) => handleChange('req_grade', e.target.value)} placeholder="e.g., Grade 3" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Location/Unit</label>
              <input type="text" value={formData.req_location} onChange={(e) => handleChange('req_location', e.target.value)} placeholder="e.g., ICU, OPD" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none" />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Reason for Requisition *</label>
            <textarea value={formData.req_reason} onChange={(e) => handleChange('req_reason', e.target.value)} placeholder="e.g., Replacement, New Position, Workload Increase" rows={3} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none" />
          </div>
        </section>

        {/* Job Specifications */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-teal-700">
            <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Job Specifications</h3>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Key Responsibilities *</label>
              <textarea value={formData.req_resp} onChange={(e) => handleChange('req_resp', e.target.value)} placeholder="List main duties and responsibilities" rows={4} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Qualifications *</label>
              <textarea value={formData.req_qual} onChange={(e) => handleChange('req_qual', e.target.value)} placeholder="Educational qualifications required" rows={3} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Experience Required *</label>
              <textarea value={formData.req_exp} onChange={(e) => handleChange('req_exp', e.target.value)} placeholder="Years of experience and type" rows={3} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Skills/Competencies *</label>
              <textarea value={formData.req_skills} onChange={(e) => handleChange('req_skills', e.target.value)} placeholder="Required skills and competencies" rows={3} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none" />
            </div>
          </div>
        </section>

        {/* Budget & Approvals */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-teal-700">
            <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Budget & Approvals</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Budget Availability *</label>
              <select value={formData.budget} onChange={(e) => handleChange('budget', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Remarks</label>
              <textarea value={formData.budget_remarks} onChange={(e) => handleChange('budget_remarks', e.target.value)} placeholder="Additional comments or budget notes" rows={3} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none" />
            </div>
          </div>
        </section>

        {/* Approval Signatures */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-teal-700">
            <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Approval Signatures</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">Requested By (HOD)</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" value={formData.hod_name} onChange={(e) => handleChange('hod_name', e.target.value)} placeholder="Name" className="px-3 py-2 border border-slate-300 rounded focus:border-teal-500 focus:outline-none" />
                <input type="date" value={formData.hod_date} onChange={(e) => handleChange('hod_date', e.target.value)} className="px-3 py-2 border border-slate-300 rounded focus:border-teal-500 focus:outline-none" />
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">HR Manager</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" value={formData.hr_name} onChange={(e) => handleChange('hr_name', e.target.value)} placeholder="Name" className="px-3 py-2 border border-slate-300 rounded focus:border-teal-500 focus:outline-none" />
                <input type="date" value={formData.hr_date} onChange={(e) => handleChange('hr_date', e.target.value)} className="px-3 py-2 border border-slate-300 rounded focus:border-teal-500 focus:outline-none" />
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">Finance Manager</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" value={formData.fin_name} onChange={(e) => handleChange('fin_name', e.target.value)} placeholder="Name" className="px-3 py-2 border border-slate-300 rounded focus:border-teal-500 focus:outline-none" />
                <input type="date" value={formData.fin_date} onChange={(e) => handleChange('fin_date', e.target.value)} className="px-3 py-2 border border-slate-300 rounded focus:border-teal-500 focus:outline-none" />
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">CEO / Medical Director</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" value={formData.ceo_name} onChange={(e) => handleChange('ceo_name', e.target.value)} placeholder="Name" className="px-3 py-2 border border-slate-300 rounded focus:border-teal-500 focus:outline-none" />
                <input type="date" value={formData.ceo_date} onChange={(e) => handleChange('ceo_date', e.target.value)} className="px-3 py-2 border border-slate-300 rounded focus:border-teal-500 focus:outline-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Notes */}
        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <p className="text-sm text-slate-800 leading-relaxed">
            <strong>Note:</strong> This Annexure shall be read in conjunction with SOP B.1 (Manpower Planning) and SOP B.2 (Recruitment Approval Process). No recruitment shall commence without all approvals indicated above.
          </p>
        </section>
      </div>

      {/* Professional Footer */}
      <div className="border-t-2 border-teal-700 bg-gradient-to-r from-teal-700 via-cyan-700 to-teal-700 px-8 py-6 text-white">
        <div className="flex items-center justify-between text-sm">
          <p>© Koyili Hospital – HR Governance • Confidential • Version-controlled</p>
          <p>Annexure B1 • Version 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalB1Form;