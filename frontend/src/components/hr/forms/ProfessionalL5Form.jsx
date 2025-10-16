import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer } from 'lucide-react';

const ProfessionalL5Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', empName: '', empId: '', dept: '', designation: '', date: '',
    q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', suggestions: '',
    empSign: '', empDate: '', empPlace: '',
    hrName: '', hrDate: ''
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
    a.download = 'Annexure_L5_Work_Life_Balance.json';
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
        effectiveDate: '', empName: '', empId: '', dept: '', designation: '', date: '',
        q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', suggestions: '',
        empSign: '', empDate: '', empPlace: '',
        hrName: '', hrDate: ''
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
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-8 py-6">
          <div className="grid grid-cols-[200px_1fr_200px] gap-6 items-center">
            <div className="bg-white p-3 rounded-lg shadow-md">
              <img src={logoData} alt="Hospital Logo" className="w-full h-auto max-h-24 object-contain" />
            </div>
            <div className="text-center text-white">
              <h1 className="text-2xl font-bold mb-2">KOYILI HOSPITAL</h1>
              <p className="text-sm opacity-90 mb-1">HR Department • Employee Wellness Program</p>
              <p className="text-xs opacity-75">NABH Accredited • Work-Life Balance</p>
            </div>
            <div className="text-right space-y-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold">Annexure L5</div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold block mt-1">Version 1.0</div>
              <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded text-xs font-bold block mt-1">NABH</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-b-2 border-blue-900 px-8 py-4">
          <h2 className="text-xl font-bold text-blue-900 text-center">WORK-LIFE BALANCE FEEDBACK FORM</h2>
        </div>

        <div className="p-8 space-y-6">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Employee Details</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                  <input type="text" name="empName" value={formData.empName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Employee ID</label>
                  <input type="text" name="empId" value={formData.empId} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Department</label>
                  <input type="text" name="dept" value={formData.dept} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Feedback Questions</h3>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">1. How satisfied are you with your current work-life balance?</label>
                <select name="q1" value={formData.q1} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
                  <option value="">Select</option>
                  <option>Very Satisfied</option>
                  <option>Satisfied</option>
                  <option>Neutral</option>
                  <option>Dissatisfied</option>
                  <option>Very Dissatisfied</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">2. Do you feel you have adequate time for personal activities?</label>
                <select name="q2" value={formData.q2} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
                  <option value="">Select</option>
                  <option>Always</option>
                  <option>Often</option>
                  <option>Sometimes</option>
                  <option>Rarely</option>
                  <option>Never</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">3. How would you rate your stress levels at work?</label>
                <select name="q3" value={formData.q3} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
                  <option value="">Select</option>
                  <option>Very Low</option>
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                  <option>Very High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">4. Do you feel supported by your manager regarding work-life balance?</label>
                <select name="q4" value={formData.q4} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
                  <option value="">Select</option>
                  <option>Strongly Agree</option>
                  <option>Agree</option>
                  <option>Neutral</option>
                  <option>Disagree</option>
                  <option>Strongly Disagree</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">5. Additional Suggestions</label>
                <textarea name="suggestions" value={formData.suggestions} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 resize-vertical" rows="4" placeholder="Please share any suggestions to improve work-life balance..."></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-8 py-4 mt-8">
          <div className="flex justify-between items-center text-white text-xs">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 text-blue-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px]">N</div>
              <span>© 2024 Koyili Hospital • NABH Accredited • Confidential Document</span>
            </div>
            <div className="font-semibold">Annexure L5 • Work-Life Balance Feedback Form</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalL5Form;