import React, { useState, useEffect } from 'react';
import { CheckSquare, Save, Upload, Download, FileText, Shield, Calendar, User } from 'lucide-react';

const ProfessionalA4Form = () => {
  const [formData, setFormData] = useState({
    a4_eff: '',
    full_name: '',
    emp_id: '',
    desig: '',
    dept: '',
    dec_received: false,
    dec_understand: false,
    dec_condition: false,
    dec_noncomp: false,
    dec_resp: false,
    ack_name: '',
    ack_desig: '',
    ack_dept: '',
    ack_place: '',
    ack_date: '',
    hr_name: '',
    hr_desig: '',
    hr_place: '',
    hr_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);

    const saved = localStorage.getItem('a4_form_data');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const totalFields = 19;
    let filledFields = 0;
    if (formData.full_name) filledFields++;
    if (formData.emp_id) filledFields++;
    if (formData.desig) filledFields++;
    if (formData.dept) filledFields++;
    if (formData.dec_received) filledFields++;
    if (formData.dec_understand) filledFields++;
    if (formData.dec_condition) filledFields++;
    if (formData.dec_noncomp) filledFields++;
    if (formData.dec_resp) filledFields++;
    if (formData.ack_name) filledFields += 3;
    if (formData.ack_date) filledFields++;
    if (formData.hr_name) filledFields += 3;
    if (formData.hr_date) filledFields++;

    setProgress(Math.round((filledFields / totalFields) * 100));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('a4_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'A4-Employee-Handbook-Acknowledgment.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('a4_form_data', JSON.stringify(data));
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
              <h2 className="text-xl font-bold">EMPLOYEE HANDBOOK ACKNOWLEDGMENT FORM</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">A4</p>
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
      <div className="bg-slate-50 px-8 py-4 border-b-2 border-orange-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded font-bold">A4</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">SOP:</span> A.4</div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Progress:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-500 to-pink-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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
        <div className="inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">Onboarding Annexure</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">EMPLOYEE HANDBOOK ACKNOWLEDGMENT FORM</h2>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Effective Date: 10/15/2025</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Approval Authority: HR Manager / Compliance Officer</span>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="px-8 py-8 space-y-8">
        {/* Purpose */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-orange-700">
            <div className="w-8 h-8 bg-orange-700 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Purpose</h3>
          </div>
          <p className="text-[15px] leading-relaxed text-slate-800 text-justify">
            This Annexure serves to document that the employee has received, read, and agreed to comply with the Employee Handbook of Koyili Hospital. Acknowledgment is mandatory and forms part of the onboarding process.
          </p>
        </section>

        {/* Employee Details */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-orange-700">
            <div className="w-8 h-8 bg-orange-700 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Employee Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
              <input type="text" value={formData.full_name} onChange={(e) => handleChange('full_name', e.target.value)} placeholder="Employee full name" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Employee ID *</label>
              <input type="text" value={formData.emp_id} onChange={(e) => handleChange('emp_id', e.target.value)} placeholder="Employee ID" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Designation *</label>
              <input type="text" value={formData.desig} onChange={(e) => handleChange('desig', e.target.value)} placeholder="Designation" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Department *</label>
              <input type="text" value={formData.dept} onChange={(e) => handleChange('dept', e.target.value)} placeholder="Department" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
            </div>
          </div>
        </section>

        {/* Declaration by Employee */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-orange-700">
            <div className="w-8 h-8 bg-orange-700 rounded-lg flex items-center justify-center">
              <CheckSquare className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Declaration by Employee</h3>
          </div>
          <div className="space-y-4">
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-orange-400 cursor-pointer transition-colors">
              <input type="checkbox" checked={formData.dec_received} onChange={(e) => handleChange('dec_received', e.target.checked)} className="w-5 h-5 text-orange-600 rounded mt-1" />
              <span className="text-slate-800">I have received a copy of the Employee Handbook of Koyili Hospital.</span>
            </label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-orange-400 cursor-pointer transition-colors">
              <input type="checkbox" checked={formData.dec_understand} onChange={(e) => handleChange('dec_understand', e.target.checked)} className="w-5 h-5 text-orange-600 rounded mt-1" />
              <span className="text-slate-800">I understand that the Handbook contains the hospital's policies, standards of conduct, HR practices and compliance requirements.</span>
            </label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-orange-400 cursor-pointer transition-colors">
              <input type="checkbox" checked={formData.dec_condition} onChange={(e) => handleChange('dec_condition', e.target.checked)} className="w-5 h-5 text-orange-600 rounded mt-1" />
              <span className="text-slate-800">I understand that adherence to the Handbook is a condition of my employment.</span>
            </label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-orange-400 cursor-pointer transition-colors">
              <input type="checkbox" checked={formData.dec_noncomp} onChange={(e) => handleChange('dec_noncomp', e.target.checked)} className="w-5 h-5 text-orange-600 rounded mt-1" />
              <span className="text-slate-800">I understand that non-compliance may attract disciplinary action as per SOP A.4 and By‑Laws Section 1.3 and Section 3.</span>
            </label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-orange-400 cursor-pointer transition-colors">
              <input type="checkbox" checked={formData.dec_resp} onChange={(e) => handleChange('dec_resp', e.target.checked)} className="w-5 h-5 text-orange-600 rounded mt-1" />
              <span className="text-slate-800">I am responsible for familiarizing myself with the contents and seeking clarification from HR whenever required.</span>
            </label>
          </div>
        </section>

        {/* Employee Acknowledgment */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-orange-700">
            <div className="w-8 h-8 bg-orange-700 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Employee Acknowledgment</h3>
          </div>
          <div className="border-2 border-slate-300 rounded-lg p-6">
            <div className="border-b-2 border-slate-400 mb-4 h-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                <input type="text" value={formData.ack_name} onChange={(e) => handleChange('ack_name', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Designation *</label>
                <input type="text" value={formData.ack_desig} onChange={(e) => handleChange('ack_desig', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Department *</label>
                <input type="text" value={formData.ack_dept} onChange={(e) => handleChange('ack_dept', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Place *</label>
                <input type="text" value={formData.ack_place} onChange={(e) => handleChange('ack_place', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Date *</label>
                <input type="date" value={formData.ack_date} onChange={(e) => handleChange('ack_date', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
              </div>
            </div>
          </div>
        </section>

        {/* HR Confirmation */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-orange-700">
            <div className="w-8 h-8 bg-orange-700 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">HR Confirmation (For Office Use Only)</h3>
          </div>
          <div className="border-2 border-slate-300 rounded-lg p-6 bg-slate-50">
            <div className="border-b-2 border-slate-400 mb-4 h-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">HR Name *</label>
                <input type="text" value={formData.hr_name} onChange={(e) => handleChange('hr_name', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Designation *</label>
                <input type="text" value={formData.hr_desig} onChange={(e) => handleChange('hr_desig', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Place *</label>
                <input type="text" value={formData.hr_place} onChange={(e) => handleChange('hr_place', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Date *</label>
                <input type="date" value={formData.hr_date} onChange={(e) => handleChange('hr_date', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Notes */}
        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <p className="text-sm text-slate-800 leading-relaxed">
            <strong>Note:</strong> This Annexure shall be read in conjunction with SOP A.4 (Employee Handbook Implementation) and By‑Laws Section 1.3 – Applicability; Section 3 – Code of Conduct. The signed form shall be retained in the employee's personnel file.
          </p>
        </section>
      </div>

      {/* Professional Footer */}
      <div className="border-t-2 border-orange-700 bg-gradient-to-r from-orange-700 via-red-700 to-orange-700 px-8 py-6 text-white">
        <div className="flex items-center justify-between text-sm">
          <p>© Koyili Hospital – HR • Confidential • Version‑controlled</p>
          <p>Annexure A4 • Version 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalA4Form;