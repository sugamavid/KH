import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, Award, Star } from 'lucide-react';

const ProfessionalH6Form = () => {
  const [formData, setFormData] = useState({
    eff_date: '', nom_name: '', nom_empid: '', nom_dept: '', nom_desig: '',
    nom_doj: '', nom_length: '', nom_category: '', nom_category_other: '',
    nom_reason: '', supp_appraisal: false, supp_feedback: false, supp_training: false,
    supp_awards: false, supp_other: false, supp_other_text: '',
    nominee_submitter: '', review_manager: '', final_approver: '',
    sign_name: '', sign_date: '', sign_place: ''
  });

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
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
    a.download = 'Annexure_H6_Recognition_Nomination.json';
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
    if (window.confirm('Reset all fields?')) {
      setFormData({
        eff_date: '', nom_name: '', nom_empid: '', nom_dept: '', nom_desig: '',
        nom_doj: '', nom_length: '', nom_category: '', nom_category_other: '',
        nom_reason: '', supp_appraisal: false, supp_feedback: false, supp_training: false,
        supp_awards: false, supp_other: false, supp_other_text: '',
        nominee_submitter: '', review_manager: '', final_approver: '',
        sign_name: '', sign_date: '', sign_place: ''
      });
      setLogoData('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
    }
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-3 print:hidden">
        <div className="flex items-center gap-3 flex-wrap">
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm font-semibold"><Save className="w-4 h-4" /> Save</button>
          <button onClick={() => loadInputRef.current?.click()} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm font-semibold"><Upload className="w-4 h-4" /> Load</button>
          <button onClick={handleReset} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2 text-sm font-semibold"><RotateCcw className="w-4 h-4" /> Reset</button>
          <button onClick={handlePrint} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 text-sm font-semibold"><Printer className="w-4 h-4" /> Print</button>
          <button onClick={() => fileInputRef.current?.click()} className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 flex items-center gap-2 text-sm font-semibold"><Download className="w-4 h-4" /> Change Logo</button>
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
              <h2 className="text-xl font-bold">EMPLOYEE RECOGNITION NOMINATION</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">H6</p>
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
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><Star className="w-5 h-5 text-yellow-500" />Employee Details (Nominee)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Name</label><input type="text" name="nom_name" value={formData.nom_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label><input type="text" name="nom_empid" value={formData.nom_empid} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Department</label><input type="text" name="nom_dept" value={formData.nom_dept} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label><input type="text" name="nom_desig" value={formData.nom_desig} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Joining</label><input type="date" name="nom_doj" value={formData.nom_doj} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Length of Service</label><input type="text" name="nom_length" value={formData.nom_length} onChange={handleChange} placeholder="e.g., 5 years" className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><Award className="w-5 h-5 text-purple-600" />Nomination Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Category of Recognition</label>
              <select name="nom_category" value={formData.nom_category} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option value="">Select Category</option>
                <option value="employee_of_month">Employee of the Month</option>
                <option value="clinical_excellence">Clinical Excellence</option>
                <option value="patient_care">Outstanding Patient Care</option>
                <option value="teamwork">Team Player Award</option>
                <option value="innovation">Innovation & Process Improvement</option>
                <option value="safety">Safety Champion</option>
                <option value="leadership">Leadership Excellence</option>
                <option value="other">Other (Please Specify)</option>
              </select>
              {formData.nom_category === 'other' && (
                <input type="text" name="nom_category_other" value={formData.nom_category_other} onChange={handleChange} placeholder="Specify category" className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-2" />
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Reason for Nomination</label>
              <textarea name="nom_reason" value={formData.nom_reason} onChange={handleChange} rows="5" placeholder="Provide specific examples, achievements, and impact on hospital operations or patient care..." className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Supporting Evidence</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" name="supp_appraisal" checked={formData.supp_appraisal} onChange={handleChange} className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-700">Performance Appraisal Reports (Annexure H2)</span>
            </label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" name="supp_feedback" checked={formData.supp_feedback} onChange={handleChange} className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-700">Feedback & Patient Compliments (Annexure H3)</span>
            </label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" name="supp_training" checked={formData.supp_training} onChange={handleChange} className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-700">Training & Development Records</span>
            </label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" name="supp_awards" checked={formData.supp_awards} onChange={handleChange} className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-700">Awards / Certifications</span>
            </label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" name="supp_other" checked={formData.supp_other} onChange={handleChange} className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-700">Other</span>
            </label>
            {formData.supp_other && (
              <input type="text" name="supp_other_text" value={formData.supp_other_text} onChange={handleChange} placeholder="Specify other supporting evidence" className="w-full px-3 py-2 border border-gray-300 rounded-lg ml-7" />
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Signatures & Recommendations</h3>
          <div className="space-y-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Nominator (Employee/Manager)</label><input type="text" name="nominee_submitter" value={formData.nominee_submitter} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Reviewing Manager / Department Head</label><input type="text" name="review_manager" value={formData.review_manager} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Hospital Director / Recognition Committee (Final Approval)</label><input type="text" name="final_approver" value={formData.final_approver} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Name</label><input type="text" name="sign_name" value={formData.sign_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date</label><input type="date" name="sign_date" value={formData.sign_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Place</label><input type="text" name="sign_place" value={formData.sign_place} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            </div>
          </div>
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
            <p className="text-sm font-bold">Form H6</p>
            <p className="text-xs text-blue-200">Employee Recognition Nomination</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalH6Form;
