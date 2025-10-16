import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Shield, CheckSquare, Calendar, User } from 'lucide-react';

const ProfessionalB7Form = () => {
  const [formData, setFormData] = useState({
    full_name: '', father_mother_name: '', dob: '', address: '', contact: '', email: '',
    position: '', dept: '', app_date: '',
    consent_academic: true, consent_employment: true, consent_address: true,
    consent_criminal: true, consent_reference: true,
    cand_name: '', cand_date: '', cand_place: '',
    hr_name: '', hr_desig: '', hr_date: '', hr_place: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('b7_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const totalFields = 15;
    let filled = Object.values(formData).filter(v => v && v !== true).length;
    setProgress(Math.min(100, Math.round((filled / totalFields) * 100)));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('b7_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'B7-Background-Verification.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('b7_form_data', JSON.stringify(data));
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
              <h2 className="text-xl font-bold">BACKGROUND VERIFICATION AUTHORIZATION FORM</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">B7</p>
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

      <div className="bg-slate-50 px-8 py-4 border-b-2 border-amber-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded font-bold">B7</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">SOP:</span> B.7</div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Progress:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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
        <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">Recruitment Annexure</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">BACKGROUND VERIFICATION AUTHORIZATION FORM</h2>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Effective Date: 10/15/2025</span></div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>Approval Authority: HR Manager</span></div>
        </div>
      </div>

      <div className="px-8 py-8 space-y-8">
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-amber-700">
            <div className="w-8 h-8 bg-amber-700 rounded-lg flex items-center justify-center"><User className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">1. Candidate Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label><input type="text" value={formData.full_name} onChange={(e) => handleChange('full_name', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Father's / Mother's Name</label><input type="text" value={formData.father_mother_name} onChange={(e) => handleChange('father_mother_name', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Date of Birth *</label><input type="date" value={formData.dob} onChange={(e) => handleChange('dob', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Contact Number *</label><input type="tel" value={formData.contact} onChange={(e) => handleChange('contact', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none" /></div>
            <div className="md:col-span-2"><label className="block text-sm font-semibold text-slate-700 mb-2">Address *</label><textarea value={formData.address} onChange={(e) => handleChange('address', e.target.value)} rows={2} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Email ID *</label><input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none" /></div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-amber-700">
            <div className="w-8 h-8 bg-amber-700 rounded-lg flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">2. Employment Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Position Applied For *</label><input type="text" value={formData.position} onChange={(e) => handleChange('position', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Department *</label><input type="text" value={formData.dept} onChange={(e) => handleChange('dept', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Date of Application</label><input type="date" value={formData.app_date} onChange={(e) => handleChange('app_date', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none" /></div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-amber-700">
            <div className="w-8 h-8 bg-amber-700 rounded-lg flex items-center justify-center"><CheckSquare className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">3. Declaration & Consent by Candidate</h3>
          </div>
          <p className="text-slate-800 mb-4">I, <span className="font-bold">{formData.full_name || '__________'}</span>, hereby authorize Koyili Hospital and its authorized representatives to conduct a background verification on me, which may include but is not limited to:</p>
          <div className="space-y-3">
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-amber-400 cursor-pointer">
              <input type="checkbox" checked={formData.consent_academic} onChange={(e) => handleChange('consent_academic', e.target.checked)} className="w-5 h-5 text-amber-600 rounded mt-0.5" />
              <span className="text-slate-800">Verification of academic and professional qualifications</span>
            </label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-amber-400 cursor-pointer">
              <input type="checkbox" checked={formData.consent_employment} onChange={(e) => handleChange('consent_employment', e.target.checked)} className="w-5 h-5 text-amber-600 rounded mt-0.5" />
              <span className="text-slate-800">Previous employment checks</span>
            </label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-amber-400 cursor-pointer">
              <input type="checkbox" checked={formData.consent_address} onChange={(e) => handleChange('consent_address', e.target.checked)} className="w-5 h-5 text-amber-600 rounded mt-0.5" />
              <span className="text-slate-800">Address and identity verification</span>
            </label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-amber-400 cursor-pointer">
              <input type="checkbox" checked={formData.consent_criminal} onChange={(e) => handleChange('consent_criminal', e.target.checked)} className="w-5 h-5 text-amber-600 rounded mt-0.5" />
              <span className="text-slate-800">Criminal record checks (if permissible by law)</span>
            </label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-amber-400 cursor-pointer">
              <input type="checkbox" checked={formData.consent_reference} onChange={(e) => handleChange('consent_reference', e.target.checked)} className="w-5 h-5 text-amber-600 rounded mt-0.5" />
              <span className="text-slate-800">Reference checks with previous employers or institutions</span>
            </label>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-amber-700">
            <div className="w-8 h-8 bg-amber-700 rounded-lg flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Authorization & HR Witness</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">4. Candidate Authorization</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="space-y-2">
                <input type="text" value={formData.cand_name} onChange={(e) => handleChange('cand_name', e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-amber-500 focus:outline-none" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" value={formData.cand_place} onChange={(e) => handleChange('cand_place', e.target.value)} placeholder="Place" className="px-3 py-2 border border-slate-300 rounded focus:border-amber-500 focus:outline-none" />
                  <input type="date" value={formData.cand_date} onChange={(e) => handleChange('cand_date', e.target.value)} className="px-3 py-2 border border-slate-300 rounded focus:border-amber-500 focus:outline-none" />
                </div>
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">5. HR Witness / Receiving Officer</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="space-y-2">
                <input type="text" value={formData.hr_name} onChange={(e) => handleChange('hr_name', e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-amber-500 focus:outline-none" />
                <input type="text" value={formData.hr_desig} onChange={(e) => handleChange('hr_desig', e.target.value)} placeholder="Designation" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-amber-500 focus:outline-none" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" value={formData.hr_place} onChange={(e) => handleChange('hr_place', e.target.value)} placeholder="Place" className="px-3 py-2 border border-slate-300 rounded focus:border-amber-500 focus:outline-none" />
                  <input type="date" value={formData.hr_date} onChange={(e) => handleChange('hr_date', e.target.value)} className="px-3 py-2 border border-slate-300 rounded focus:border-amber-500 focus:outline-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <p className="text-sm text-slate-800 leading-relaxed"><strong>Note:</strong> This Annexure shall be read in conjunction with SOP B.7 (Background Verification Process) and By-Laws Section 2.2(c). No background verification shall be undertaken without a signed authorization in this format.</p>
        </section>
      
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
            <p className="text-sm font-bold">Form B7</p>
            <p className="text-xs text-blue-200">Joining Formalities</p>
          </div>
        </div>
      </div>
    </div>

      
    </div>
  );
};

export default ProfessionalB7Form;
