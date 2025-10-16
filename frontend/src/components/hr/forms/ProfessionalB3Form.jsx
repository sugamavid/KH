import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Megaphone, CheckSquare, Users, Shield, Calendar, Plus, Trash2 } from 'lucide-react';

const ProfessionalB3Form = () => {
  const [formData, setFormData] = useState({
    ref_num: '', eff_date: '', job_title: '', dept: '', location: '', emp_type: 'Full-time',
    salary_range: '', reports_to: '', job_summary: '',
    responsibilities: [
      { text: 'Provide quality patient care according to hospital standards' },
      { text: 'Maintain accurate medical records and documentation' }
    ],
    qualifications: '', experience: '', skills: '', benefits: '',
    ch_internal: false, ch_website: false, ch_job_portals: false, ch_social: false,
    ch_newspapers: false, ch_campus: false, ch_consultant: false,
    app_deadline: '', contact_email: '', contact_phone: '',
    hod_name: '', hod_date: '', hr_name: '', hr_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('b3_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const totalFields = 18;
    let filled = Object.values(formData).filter(v => v && v !== 'Full-time').length;
    setProgress(Math.min(100, Math.round((filled / totalFields) * 100)));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('b3_form_data', JSON.stringify(updated));
  };

  const handleArrayChange = (index, value) => {
    const updated = { ...formData };
    updated.responsibilities[index].text = value;
    setFormData(updated);
    localStorage.setItem('b3_form_data', JSON.stringify(updated));
  };

  const addResponsibility = () => {
    const updated = { ...formData };
    updated.responsibilities.push({ text: '' });
    setFormData(updated);
  };

  const removeResponsibility = (index) => {
    const updated = { ...formData };
    updated.responsibilities.splice(index, 1);
    setFormData(updated);
    localStorage.setItem('b3_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'B3-Job-Advertisement.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('b3_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl">
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
              <h2 className="text-xl font-bold">JOB ADVERTISEMENT & POSTING TEMPLATE</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">B3</p>
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

      <div className="bg-slate-50 px-8 py-4 border-b-2 border-indigo-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded font-bold">B3</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">SOP:</span> B.3</div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Progress:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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
        <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">Recruitment Annexure</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">JOB ADVERTISEMENT & POSTING TEMPLATE</h2>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Effective Date: 10/15/2025</span></div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>Approval Authority: HR Manager</span></div>
        </div>
      </div>

      <div className="px-8 py-8 space-y-8">
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-indigo-700">
            <div className="w-8 h-8 bg-indigo-700 rounded-lg flex items-center justify-center"><Megaphone className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">1. Position Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Reference Number</label><input type="text" value={formData.ref_num} onChange={(e) => handleChange('ref_num', e.target.value)} placeholder="Job Ref #" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Job Title *</label><input type="text" value={formData.job_title} onChange={(e) => handleChange('job_title', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Department *</label><input type="text" value={formData.dept} onChange={(e) => handleChange('dept', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Location</label><input type="text" value={formData.location} onChange={(e) => handleChange('location', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Employment Type *</label><select value={formData.emp_type} onChange={(e) => handleChange('emp_type', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none"><option>Full-time</option><option>Part-time</option><option>Contract</option><option>Internship</option></select></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Salary Range</label><input type="text" value={formData.salary_range} onChange={(e) => handleChange('salary_range', e.target.value)} placeholder="e.g., 40,000 - 60,000" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" /></div>
            <div className="md:col-span-2"><label className="block text-sm font-semibold text-slate-700 mb-2">Reports To</label><input type="text" value={formData.reports_to} onChange={(e) => handleChange('reports_to', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" /></div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-indigo-700">
            <div className="w-8 h-8 bg-indigo-700 rounded-lg flex items-center justify-center"><Users className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">2. Job Summary</h3>
          </div>
          <textarea value={formData.job_summary} onChange={(e) => handleChange('job_summary', e.target.value)} placeholder="Brief overview of the position..." rows={4} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" />
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-indigo-700">
            <div className="w-8 h-8 bg-indigo-700 rounded-lg flex items-center justify-center"><CheckSquare className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">3. Key Responsibilities</h3>
          </div>
          <div className="space-y-3">
            {formData.responsibilities.map((resp, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="font-bold text-slate-700 w-8">{index + 1}.</span>
                <input type="text" value={resp.text} onChange={(e) => handleArrayChange(index, e.target.value)} placeholder="Enter responsibility" className="flex-1 px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" />
                <button onClick={() => removeResponsibility(index)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="w-5 h-5" /></button>
              </div>
            ))}
          </div>
          <button onClick={addResponsibility} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-semibold flex items-center gap-2"><Plus className="w-4 h-4" /> Add Responsibility</button>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-indigo-700">
            <div className="w-8 h-8 bg-indigo-700 rounded-lg flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">4. Qualifications & Skills</h3>
          </div>
          <div className="space-y-4">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Qualifications *</label><textarea value={formData.qualifications} onChange={(e) => handleChange('qualifications', e.target.value)} placeholder="Educational qualifications required..." rows={3} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Experience *</label><textarea value={formData.experience} onChange={(e) => handleChange('experience', e.target.value)} placeholder="Years and type of experience..." rows={3} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Skills & Competencies *</label><textarea value={formData.skills} onChange={(e) => handleChange('skills', e.target.value)} placeholder="Required skills..." rows={3} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" /></div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-indigo-700">
            <div className="w-8 h-8 bg-indigo-700 rounded-lg flex items-center justify-center"><CheckSquare className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">5. Benefits</h3>
          </div>
          <textarea value={formData.benefits} onChange={(e) => handleChange('benefits', e.target.value)} placeholder="Health insurance, PF, leave policy, training opportunities..." rows={3} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" />
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-indigo-700">
            <div className="w-8 h-8 bg-indigo-700 rounded-lg flex items-center justify-center"><Megaphone className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">6. Advertisement Channels</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-indigo-400 cursor-pointer"><input type="checkbox" checked={formData.ch_internal} onChange={(e) => handleChange('ch_internal', e.target.checked)} className="w-5 h-5 text-indigo-600 rounded" /><span className="text-sm font-semibold">Internal</span></label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-indigo-400 cursor-pointer"><input type="checkbox" checked={formData.ch_website} onChange={(e) => handleChange('ch_website', e.target.checked)} className="w-5 h-5 text-indigo-600 rounded" /><span className="text-sm font-semibold">Website</span></label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-indigo-400 cursor-pointer"><input type="checkbox" checked={formData.ch_job_portals} onChange={(e) => handleChange('ch_job_portals', e.target.checked)} className="w-5 h-5 text-indigo-600 rounded" /><span className="text-sm font-semibold">Job Portals</span></label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-indigo-400 cursor-pointer"><input type="checkbox" checked={formData.ch_social} onChange={(e) => handleChange('ch_social', e.target.checked)} className="w-5 h-5 text-indigo-600 rounded" /><span className="text-sm font-semibold">Social Media</span></label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-indigo-400 cursor-pointer"><input type="checkbox" checked={formData.ch_newspapers} onChange={(e) => handleChange('ch_newspapers', e.target.checked)} className="w-5 h-5 text-indigo-600 rounded" /><span className="text-sm font-semibold">Newspapers</span></label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-indigo-400 cursor-pointer"><input type="checkbox" checked={formData.ch_campus} onChange={(e) => handleChange('ch_campus', e.target.checked)} className="w-5 h-5 text-indigo-600 rounded" /><span className="text-sm font-semibold">Campus</span></label>
            <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-indigo-400 cursor-pointer"><input type="checkbox" checked={formData.ch_consultant} onChange={(e) => handleChange('ch_consultant', e.target.checked)} className="w-5 h-5 text-indigo-600 rounded" /><span className="text-sm font-semibold">Consultant</span></label>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-indigo-700">
            <div className="w-8 h-8 bg-indigo-700 rounded-lg flex items-center justify-center"><Calendar className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">7. Application Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Application Deadline *</label><input type="date" value={formData.app_deadline} onChange={(e) => handleChange('app_deadline', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Contact Email *</label><input type="email" value={formData.contact_email} onChange={(e) => handleChange('contact_email', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Contact Phone</label><input type="tel" value={formData.contact_phone} onChange={(e) => handleChange('contact_phone', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none" /></div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-indigo-700">
            <div className="w-8 h-8 bg-indigo-700 rounded-lg flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Approval</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">HOD Approval</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="space-y-2">
                <input type="text" value={formData.hod_name} onChange={(e) => handleChange('hod_name', e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-indigo-500 focus:outline-none" />
                <input type="date" value={formData.hod_date} onChange={(e) => handleChange('hod_date', e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded focus:border-indigo-500 focus:outline-none" />
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">HR Manager Approval</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="space-y-2">
                <input type="text" value={formData.hr_name} onChange={(e) => handleChange('hr_name', e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-indigo-500 focus:outline-none" />
                <input type="date" value={formData.hr_date} onChange={(e) => handleChange('hr_date', e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded focus:border-indigo-500 focus:outline-none" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <p className="text-sm text-slate-800 leading-relaxed"><strong>Note:</strong> This advertisement template must be approved before posting. All information must be consistent with the approved Job Description (Annexure A3).</p>
        </section>
      </div>

      <div className="border-t-2 border-indigo-700 bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-700 px-8 py-6 text-white">
        <div className="flex items-center justify-between text-sm">
          <p>© Koyili Hospital • Confidential • Version-controlled</p>
          <p>Annexure B3 • Version 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalB3Form;