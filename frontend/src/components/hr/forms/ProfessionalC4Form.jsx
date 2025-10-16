import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Shield, Calendar } from 'lucide-react';

const ProfessionalC4Form = () => {
  const [formData, setFormData] = useState({
    eff_date: '',
    emp_name: '', emp_id: '', emp_dept: '', emp_desig: '', emp_doj: '',
    sign_emp_name: '', sign_emp_sig: '', sign_emp_date: '',
    sign_hr_name: '', sign_hr_sig: '', sign_hr_date: '',
    sign_co_name: '', sign_co_sig: '', sign_co_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('c4_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const totalFields = 6;
    let filled = [formData.emp_name, formData.emp_id, formData.sign_emp_name, formData.sign_hr_name, formData.sign_co_name].filter(Boolean).length;
    setProgress(Math.min(100, Math.round((filled / totalFields) * 100)));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('c4_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'C4-Confidentiality-Declaration.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('c4_form_data', JSON.stringify(data));
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
              <h2 className="text-xl font-bold">CONFIDENTIALITY DECLARATION FORM</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">C4</p>
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

      <div className="bg-stone-50 px-8 py-4 border-b-2 border-stone-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-900">Annexure:</span>
            <span className="bg-stone-100 text-stone-800 px-3 py-1 rounded font-bold">C4</span>
          </div>
          <div className="w-px h-4 bg-stone-300"></div>
          <div><span className="font-semibold text-stone-900">SOP:</span> C.4</div>
          <div className="w-px h-4 bg-stone-300"></div>
          <div><span className="font-semibold text-stone-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-600">Progress:</span>
            <div className="w-32 h-2 bg-stone-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-stone-500 to-neutral-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-stone-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-stone-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-stone-600 text-white rounded-lg hover:bg-stone-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-neutral-600 text-white rounded-lg hover:bg-neutral-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-stone-200">
        <div className="inline-block px-4 py-1 bg-stone-100 text-stone-800 rounded-full text-sm font-semibold mb-4">Compliance Annexure</div>
        <h2 className="text-3xl font-bold text-stone-900 mb-3">CONFIDENTIALITY DECLARATION FORM</h2>
        <div className="flex items-center gap-4 text-sm text-stone-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP C.4 – Policy Orientation & Confidentiality Briefing</span></div>
          <div className="w-px h-4 bg-stone-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 4.2 & 15.3</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-stone-200 rounded-xl p-6 bg-stone-50">
          <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-stone-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-stone-600 font-semibold">Document Title:</span>
              <p className="text-stone-900">Confidentiality Declaration Form</p>
            </div>
            <div>
              <span className="text-stone-600 font-semibold">Annexure Number:</span>
              <p className="text-stone-900">C4</p>
            </div>
            <div>
              <span className="text-stone-600 font-semibold">Linked SOP:</span>
              <p className="text-stone-900">SOP C.4 – Policy Orientation & Confidentiality Briefing</p>
            </div>
            <div>
              <span className="text-stone-600 font-semibold">By-Laws Reference:</span>
              <p className="text-stone-900">Section 4.2 – Confidentiality; Section 15.3</p>
            </div>
            <div>
              <span className="text-stone-600 font-semibold">Version No.:</span>
              <p className="text-stone-900">1.0</p>
            </div>
            <div>
              <span className="text-stone-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.eff_date} onChange={(e) => handleChange('eff_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-stone-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-stone-900 mb-4">Purpose</h3>
          <p className="text-sm text-stone-700 leading-relaxed">
            This Annexure provides the standardized Confidentiality Declaration Form for employees of Koyili Hospital. 
            It ensures compliance with SOP C.4 and By-Laws Section 4.2 & 15.3 by safeguarding patient information, hospital records, 
            and proprietary data.
          </p>
        </section>

        <section className="border-2 border-stone-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-stone-900 mb-4">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">Name:</label>
              <input type="text" value={formData.emp_name} onChange={(e) => handleChange('emp_name', e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">Employee ID:</label>
              <input type="text" value={formData.emp_id} onChange={(e) => handleChange('emp_id', e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">Department:</label>
              <input type="text" value={formData.emp_dept} onChange={(e) => handleChange('emp_dept', e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">Designation:</label>
              <input type="text" value={formData.emp_desig} onChange={(e) => handleChange('emp_desig', e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">Date of Joining:</label>
              <input type="date" value={formData.emp_doj} onChange={(e) => handleChange('emp_doj', e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-amber-300 rounded-xl p-6 bg-amber-50">
          <h3 className="text-lg font-bold text-stone-900 mb-4">Declaration</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-stone-700">
            <li>I shall maintain strict confidentiality regarding all patient records, medical data, research information, hospital policies, and proprietary information of Koyili Hospital.</li>
            <li>I shall not disclose, reproduce, or share any confidential information with unauthorized persons during or after my employment.</li>
            <li>I understand that any breach of confidentiality will invite disciplinary action including termination, legal proceedings, and claims for damages.</li>
            <li>I shall immediately report to my Manager/HR/Compliance Officer if I become aware of any unauthorized disclosure or misuse of confidential information.</li>
            <li>I acknowledge that this obligation continues even after cessation of my employment.</li>
            <li>I shall comply with hospital's policies on data privacy, IT security, patient rights, and legal confidentiality obligations.</li>
          </ol>
        </section>

        <section className="border-2 border-stone-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-stone-900 mb-4">Signatures</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-stone-800 mb-3">Employee (Declaration & Acknowledgment)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Name:</label>
                  <input type="text" value={formData.sign_emp_name} onChange={(e) => handleChange('sign_emp_name', e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Date:</label>
                  <input type="date" value={formData.sign_emp_date} onChange={(e) => handleChange('sign_emp_date', e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500" />
                </div>
              </div>
            </div>
            <div className="border-t-2 border-stone-200 pt-6">
              <h4 className="font-semibold text-stone-800 mb-3">HR Manager (Witness & Custodian)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Name:</label>
                  <input type="text" value={formData.sign_hr_name} onChange={(e) => handleChange('sign_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Date:</label>
                  <input type="date" value={formData.sign_hr_date} onChange={(e) => handleChange('sign_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500" />
                </div>
              </div>
            </div>
            <div className="border-t-2 border-stone-200 pt-6">
              <h4 className="font-semibold text-stone-800 mb-3">Compliance Officer (Oversight & Audit Validation)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Name:</label>
                  <input type="text" value={formData.sign_co_name} onChange={(e) => handleChange('sign_co_name', e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Date:</label>
                  <input type="date" value={formData.sign_co_date} onChange={(e) => handleChange('sign_co_date', e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-stone-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-stone-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-stone-700">
            <li>This form must be signed by every employee at the time of joining and whenever confidentiality policies are revised.</li>
            <li>The signed form must be filed in the Personnel File (Annexure D1).</li>
            <li>Any refusal to sign must be escalated to the Hospital Director & Compliance Officer.</li>
            <li>HR must retain this form for a minimum of 7 years post-employment to demonstrate compliance during legal or accreditation audits.</li>
            <li>This form must be cross-referenced with Annexure B7 (Background Verification), Annexure B8 (Medical Fitness Certificate), and Annexure C5 (Clinical Credentialing).</li>
          </ul>
        </section>
      </div>

      <div className="bg-stone-100 px-8 py-4 text-center text-xs text-stone-600 border-t-2 border-stone-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      
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
            <p className="text-sm font-bold">Form C4</p>
            <p className="text-xs text-blue-200">Confidentiality Declaration</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfessionalC4Form;