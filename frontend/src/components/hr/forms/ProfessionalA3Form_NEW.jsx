import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, CheckCircle } from 'lucide-react';

const ProfessionalA3Form = () => {
  const [formData, setFormData] = useState({
    emp_name: '', emp_id: '', dept: '', desig: '', join_date: '',
    photo_attached: false, aadhaar: false, pan: false, education: false,
    experience: false, relieving: false, medical: false, address_proof: false,
    bank_details: false, emergency_contact: false, nominee: false,
    hr_name: '', hr_date: ''
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
    a.download = 'Annexure_A3_Joining_Checklist.json';
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
        emp_name: '', emp_id: '', dept: '', desig: '', join_date: '',
        photo_attached: false, aadhaar: false, pan: false, education: false,
        experience: false, relieving: false, medical: false, address_proof: false,
        bank_details: false, emergency_contact: false, nominee: false,
        hr_name: '', hr_date: ''
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
              <h2 className="text-xl font-bold">JOINING FORM & DOCUMENT CHECKLIST</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">A3</p>
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
          <h3 className="text-lg font-bold text-gray-900 mb-4">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee Name</label><input type="text" name="emp_name" value={formData.emp_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label><input type="text" name="emp_id" value={formData.emp_id} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Department</label><input type="text" name="dept" value={formData.dept} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label><input type="text" name="desig" value={formData.desig} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Joining</label><input type="date" name="join_date" value={formData.join_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" />Document Checklist</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"><input type="checkbox" name="photo_attached" checked={formData.photo_attached} onChange={handleChange} className="w-4 h-4" /><span className="text-sm font-medium text-gray-700">Two Passport-size Photographs</span></label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"><input type="checkbox" name="aadhaar" checked={formData.aadhaar} onChange={handleChange} className="w-4 h-4" /><span className="text-sm font-medium text-gray-700">Aadhaar Card / PAN Card / Voter ID (Copy)</span></label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"><input type="checkbox" name="education" checked={formData.education} onChange={handleChange} className="w-4 h-4" /><span className="text-sm font-medium text-gray-700">Educational Certificates (Originals for verification)</span></label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"><input type="checkbox" name="experience" checked={formData.experience} onChange={handleChange} className="w-4 h-4" /><span className="text-sm font-medium text-gray-700">Experience Letters from Previous Employers</span></label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"><input type="checkbox" name="relieving" checked={formData.relieving} onChange={handleChange} className="w-4 h-4" /><span className="text-sm font-medium text-gray-700">Relieving Letter from Last Employer</span></label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"><input type="checkbox" name="medical" checked={formData.medical} onChange={handleChange} className="w-4 h-4" /><span className="text-sm font-medium text-gray-700">Medical Fitness Certificate</span></label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"><input type="checkbox" name="address_proof" checked={formData.address_proof} onChange={handleChange} className="w-4 h-4" /><span className="text-sm font-medium text-gray-700">Proof of Address (Utility Bill / Rental Agreement)</span></label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"><input type="checkbox" name="bank_details" checked={formData.bank_details} onChange={handleChange} className="w-4 h-4" /><span className="text-sm font-medium text-gray-700">Bank Account Details & Cancelled Cheque</span></label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"><input type="checkbox" name="emergency_contact" checked={formData.emergency_contact} onChange={handleChange} className="w-4 h-4" /><span className="text-sm font-medium text-gray-700">Emergency Contact Information</span></label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"><input type="checkbox" name="nominee" checked={formData.nominee} onChange={handleChange} className="w-4 h-4" /><span className="text-sm font-medium text-gray-700">Nominee Details for Insurance & PF</span></label>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">HR Verification</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">HR Representative</label><input type="text" name="hr_name" value={formData.hr_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date</label><input type="date" name="hr_date" value={formData.hr_date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
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
            <p className="text-sm font-bold">Form A3</p>
            <p className="text-xs text-blue-200">Joining Form & Document Checklist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalA3Form;
