import React, { useState, useEffect } from 'react';
import { Briefcase, Save, Upload, Download, Plus, Trash2, FileText, Shield, Calendar, CheckCircle } from 'lucide-react';

const ProfessionalA3Form = () => {
  const [formData, setFormData] = useState({
    effective_date: '',
    job_title: '',
    job_dept: '',
    job_loc: '',
    job_report: '',
    job_purpose: '',
    responsibilities: [
      { text: 'Provide quality patient care in line with hospital protocols' },
      { text: 'Ensure accurate documentation and record-keeping' },
      { text: 'Support training and mentoring of junior staff' }
    ],
    qualifications: [
      { text: "Bachelor's degree in relevant field" },
      { text: 'Minimum 3 years of relevant hospital/clinical experience' }
    ],
    skill_clin: true,
    skill_lead: false,
    skill_comm: true,
    skill_it: false,
    skill_other: 'Problem-solving, Adaptability',
    competencies: [
      { text: 'Ability to work under pressure' },
      { text: 'Strong ethical standards and integrity' }
    ],
    performance_indicators: [
      { text: 'Patient satisfaction scores' },
      { text: 'Accuracy and timeliness of documentation' },
      { text: 'Adherence to clinical protocols and standards' }
    ],
    hod_name: '',
    hod_date: '',
    hr_name: '',
    hr_date: '',
    emp_name_ack: '',
    emp_date_ack: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);

    const saved = localStorage.getItem('a3_form_data');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const totalFields = 15;
    let filledFields = 0;
    if (formData.job_title) filledFields++;
    if (formData.job_dept) filledFields++;
    if (formData.job_purpose) filledFields++;
    if (formData.responsibilities.some(r => r.text)) filledFields += 2;
    if (formData.qualifications.some(q => q.text)) filledFields += 2;
    if (formData.competencies.some(c => c.text)) filledFields += 2;
    if (formData.performance_indicators.some(p => p.text)) filledFields += 2;
    if (formData.hod_name) filledFields += 2;
    if (formData.hr_name) filledFields += 2;

    setProgress(Math.round((filledFields / totalFields) * 100));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('a3_form_data', JSON.stringify(updated));
  };

  const handleArrayChange = (arrayName, index, value) => {
    const updated = { ...formData };
    updated[arrayName][index].text = value;
    setFormData(updated);
    localStorage.setItem('a3_form_data', JSON.stringify(updated));
  };

  const addArrayItem = (arrayName) => {
    const updated = { ...formData };
    updated[arrayName].push({ text: '' });
    setFormData(updated);
  };

  const removeArrayItem = (arrayName, index) => {
    const updated = { ...formData };
    updated[arrayName].splice(index, 1);
    setFormData(updated);
    localStorage.setItem('a3_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'A3-Job-Description.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('a3_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {logoData && (
              <img src={logoData} alt="Koyili Hospital Logo" className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg object-contain" />
            )}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
              <p className="text-purple-200 text-sm mt-1">Human Resources Department</p>
              <p className="text-purple-300 text-xs">Pallikkunnu, Talap, Kannur, Kerala</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-purple-200 mb-1">Document Classification</p>
              <p className="text-sm font-bold">OFFICIAL DOCUMENT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Document Metadata Bar */}
      <div className="bg-slate-50 px-8 py-4 border-b-2 border-purple-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded font-bold">A3</span>
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
              <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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
        <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">Recruitment Annexure</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">STANDARD JOB DESCRIPTION TEMPLATE</h2>
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
        {/* Position Details */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-purple-700">
            <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">1. Position Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Job Title *</label>
              <input type="text" value={formData.job_title} onChange={(e) => handleChange('job_title', e.target.value)} placeholder="Enter job title" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-purple-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Department *</label>
              <input type="text" value={formData.job_dept} onChange={(e) => handleChange('job_dept', e.target.value)} placeholder="Enter department" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-purple-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Location / Unit</label>
              <input type="text" value={formData.job_loc} onChange={(e) => handleChange('job_loc', e.target.value)} placeholder="Enter location/unit" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-purple-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Reporting To (Designation) *</label>
              <input type="text" value={formData.job_report} onChange={(e) => handleChange('job_report', e.target.value)} placeholder="Enter reporting authority" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-purple-500 focus:outline-none" />
            </div>
          </div>
        </section>

        {/* Job Purpose */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-purple-700">
            <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">2. Job Purpose</h3>
          </div>
          <textarea
            value={formData.job_purpose}
            onChange={(e) => handleChange('job_purpose', e.target.value)}
            placeholder="Provide a concise statement summarizing the key objectives of the role and its importance to the hospital's operations and patient care."
            rows={4}
            className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-purple-500 focus:outline-none"
          />
        </section>

        {/* Key Responsibilities */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-purple-700">
            <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">3. Key Responsibilities</h3>
          </div>
          <div className="space-y-3">
            {formData.responsibilities.map((resp, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="font-bold text-slate-700 w-8">{index + 1}.</span>
                <input
                  type="text"
                  value={resp.text}
                  onChange={(e) => handleArrayChange('responsibilities', index, e.target.value)}
                  placeholder="Enter responsibility"
                  className="flex-1 px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-purple-500 focus:outline-none"
                />
                <button onClick={() => removeArrayItem('responsibilities', index)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <button onClick={() => addArrayItem('responsibilities')} className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Responsibility
          </button>
        </section>

        {/* Qualifications & Experience */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-purple-700">
            <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">4. Qualifications & Experience</h3>
          </div>
          <div className="space-y-3">
            {formData.qualifications.map((qual, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="font-bold text-slate-700 w-8">{index + 1}.</span>
                <input
                  type="text"
                  value={qual.text}
                  onChange={(e) => handleArrayChange('qualifications', index, e.target.value)}
                  placeholder="Enter qualification/experience"
                  className="flex-1 px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-purple-500 focus:outline-none"
                />
                <button onClick={() => removeArrayItem('qualifications', index)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <button onClick={() => addArrayItem('qualifications')} className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Qualification
          </button>
        </section>

        {/* Skills & Competencies */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-purple-700">
            <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">5. Skills & Competencies</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <label className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-purple-400 cursor-pointer">
              <input type="checkbox" checked={formData.skill_clin} onChange={(e) => handleChange('skill_clin', e.target.checked)} className="w-5 h-5 text-purple-600 rounded" />
              <span className="font-semibold text-slate-900">Clinical/Technical Knowledge</span>
            </label>
            <label className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-purple-400 cursor-pointer">
              <input type="checkbox" checked={formData.skill_lead} onChange={(e) => handleChange('skill_lead', e.target.checked)} className="w-5 h-5 text-purple-600 rounded" />
              <span className="font-semibold text-slate-900">Leadership & Team Management</span>
            </label>
            <label className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-purple-400 cursor-pointer">
              <input type="checkbox" checked={formData.skill_comm} onChange={(e) => handleChange('skill_comm', e.target.checked)} className="w-5 h-5 text-purple-600 rounded" />
              <span className="font-semibold text-slate-900">Communication Skills</span>
            </label>
            <label className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-purple-400 cursor-pointer">
              <input type="checkbox" checked={formData.skill_it} onChange={(e) => handleChange('skill_it', e.target.checked)} className="w-5 h-5 text-purple-600 rounded" />
              <span className="font-semibold text-slate-900">IT Proficiency / Hospital Systems</span>
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Other Skills:</label>
            <input type="text" value={formData.skill_other} onChange={(e) => handleChange('skill_other', e.target.value)} placeholder="e.g., Problem-solving, Adaptability" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-purple-500 focus:outline-none" />
          </div>
          <p className="font-semibold text-slate-900 mb-3">Specific Competencies:</p>
          <div className="space-y-3">
            {formData.competencies.map((comp, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="font-bold text-slate-700 w-8">{index + 1}.</span>
                <input
                  type="text"
                  value={comp.text}
                  onChange={(e) => handleArrayChange('competencies', index, e.target.value)}
                  placeholder="Enter competency"
                  className="flex-1 px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-purple-500 focus:outline-none"
                />
                <button onClick={() => removeArrayItem('competencies', index)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <button onClick={() => addArrayItem('competencies')} className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Competency
          </button>
        </section>

        {/* Performance Indicators */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-purple-700">
            <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">6. Performance Indicators</h3>
          </div>
          <div className="space-y-3">
            {formData.performance_indicators.map((pi, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="font-bold text-slate-700 w-8">{index + 1}.</span>
                <input
                  type="text"
                  value={pi.text}
                  onChange={(e) => handleArrayChange('performance_indicators', index, e.target.value)}
                  placeholder="Enter performance indicator"
                  className="flex-1 px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-purple-500 focus:outline-none"
                />
                <button onClick={() => removeArrayItem('performance_indicators', index)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <button onClick={() => addArrayItem('performance_indicators')} className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Performance Indicator
          </button>
        </section>

        {/* Approval & Acknowledgment */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-purple-700">
            <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">7. Approval & Acknowledgment</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">Head of Department</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="space-y-2">
                <input type="text" value={formData.hod_name} onChange={(e) => handleChange('hod_name', e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-purple-500 focus:outline-none" />
                <input type="date" value={formData.hod_date} onChange={(e) => handleChange('hod_date', e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded focus:border-purple-500 focus:outline-none" />
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">HR Manager</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="space-y-2">
                <input type="text" value={formData.hr_name} onChange={(e) => handleChange('hr_name', e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-purple-500 focus:outline-none" />
                <input type="date" value={formData.hr_date} onChange={(e) => handleChange('hr_date', e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded focus:border-purple-500 focus:outline-none" />
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">Employee Acknowledgment</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="space-y-2">
                <input type="text" value={formData.emp_name_ack} onChange={(e) => handleChange('emp_name_ack', e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-purple-500 focus:outline-none" />
                <input type="date" value={formData.emp_date_ack} onChange={(e) => handleChange('emp_date_ack', e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded focus:border-purple-500 focus:outline-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Notes */}
        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <p className="text-sm text-slate-800 leading-relaxed">
            <strong>Note:</strong> This Annexure shall be read in conjunction with SOP A.3 (Job Description Framework) and By-Laws Section 2.4 – Job Classification; Section 8 – Performance Management. No employee shall assume duties under a role unless a JD in this format has been approved and acknowledged.
          </p>
        </section>
      </div>

      {/* Professional Footer */}
      <div className="border-t-2 border-purple-700 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-700 px-8 py-6 text-white">
        <div className="flex items-center justify-between text-sm">
          <p>© Koyili Hospital • Confidential • Version-controlled</p>
          <p>Annexure A3 • Version 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalA3Form;
