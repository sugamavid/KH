import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer } from 'lucide-react';

const ProfessionalM1Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', grievanceNo: '', filingDate: '',
    empName: '', empId: '', dept: '', designation: '', contact: '',
    category: '', subject: '', description: '', witnesses: '', evidence: '',
    resolutionSought: '',
    empSign: '', empDate: '', empPlace: '',
    grcName: '', grcDate: ''
  });

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
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
    a.download = 'Annexure_M1_Grievance_Filing.json';
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
        effectiveDate: '', grievanceNo: '', filingDate: '',
        empName: '', empId: '', dept: '', designation: '', contact: '',
        category: '', subject: '', description: '', witnesses: '', evidence: '',
        resolutionSought: '',
        empSign: '', empDate: '', empPlace: '',
        grcName: '', grcDate: ''
      });
      setLogoData('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
    }
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6 flex justify-end gap-2 print:hidden">
        <button onClick={() => fileInputRef.current.click()} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Upload size={16} /><span>Upload Logo</span>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
        <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Save size={16} /><span>Save (JSON)</span>
        </button>
        <button onClick={() => loadInputRef.current.click()} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Upload size={16} /><span>Load (JSON)</span>
        </button>
        <input ref={loadInputRef} type="file" accept="application/json" onChange={handleLoad} className="hidden" />
        <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <RotateCcw size={16} /><span>Reset</span>
        </button>
        <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">
          <Printer size={16} /><span>Print / Save PDF</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 px-8 py-6">
          <div className="grid grid-cols-[200px_1fr_200px] gap-6 items-center">
            <div className="bg-white p-3 rounded-lg shadow-md">
              <img src={logoData} alt="Hospital Logo" className="w-full h-auto max-h-24 object-contain" />
            </div>
            <div className="text-center text-white">
              <h1 className="text-2xl font-bold mb-2">KOYILI HOSPITAL</h1>
              <p className="text-sm opacity-90 mb-1">Grievance Redressal Committee • Employee Relations</p>
              <p className="text-xs opacity-75">NABH Accredited • Fair & Transparent Process</p>
            </div>
            <div className="text-right space-y-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold">Annexure M1</div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold block mt-1">Version 1.0</div>
              <div className="inline-block bg-yellow-400 text-rose-900 px-3 py-1 rounded text-xs font-bold block mt-1">NABH</div>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 border-b-2 border-rose-900 px-8 py-4">
          <h2 className="text-xl font-bold text-rose-900 text-center">GRIEVANCE FILING FORM</h2>
        </div>

        <div className="p-8 space-y-6">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-rose-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-rose-700 rounded"></div>
                <h3 className="font-semibold text-rose-900">Grievance Details</h3>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Grievance No.</label>
                  <input type="text" name="grievanceNo" value={formData.grievanceNo} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Filing Date</label>
                  <input type="date" name="filingDate" value={formData.filingDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Category</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5">
                  <option value="">Select Category</option>
                  <option>Harassment</option>
                  <option>Discrimination</option>
                  <option>Work Conditions</option>
                  <option>Salary/Benefits</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Detailed Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 resize-vertical" rows="5" placeholder="Provide a detailed description of the grievance..."></textarea>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Resolution Sought</label>
                <textarea name="resolutionSought" value={formData.resolutionSought} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 resize-vertical" rows="3" placeholder="What resolution are you seeking?"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 px-8 py-4 mt-8">
          <div className="flex justify-between items-center text-white text-xs">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 text-rose-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px]">N</div>
              <span>© 2024 Koyili Hospital • NABH Accredited • Confidential Document</span>
            </div>
            <div className="font-semibold">Annexure M1 • Grievance Filing Form</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalM1Form;