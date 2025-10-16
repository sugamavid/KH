import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, CheckSquare, Calendar, User } from 'lucide-react';

const ProfessionalC1Form = () => {
  const [formData, setFormData] = useState({
    emp_name: '', emp_id: '', designation: '', dept: '', join_date: '',
    checklist: [
      { item: 'Hospital Tour & Facilities Overview', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'Introduction to Department & Team', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'By-Laws & Code of Conduct Briefing', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'Employee Handbook Review (Annexure A4)', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'HR Policies & Benefits Explanation', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'IT Systems & HRMS Access Setup (Annexure C3)', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'Email & Communication Tools Training', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'ID Card & Uniform Issuance (Annexure C2)', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'Confidentiality Declaration (Annexure C4)', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'Safety & Emergency Procedures', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'Infection Control & Hygiene Protocols', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'NABH/JCI Standards Overview', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'Clinical Credentialing (if applicable - Annexure C5)', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'Job Description Review & Expectations', completed: false, trainer: '', date: '', remarks: '' },
      { item: 'Performance Evaluation Process', completed: false, trainer: '', date: '', remarks: '' }
    ],
    emp_ack_name: '', emp_ack_date: '',
    trainer_name: '', trainer_date: '',
    hr_name: '', hr_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('c1_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const completed = formData.checklist.filter(item => item.completed).length;
    const total = formData.checklist.length;
    setProgress(Math.round((completed / total) * 100));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('c1_form_data', JSON.stringify(updated));
  };

  const handleChecklistChange = (index, field, value) => {
    const updated = { ...formData };
    updated.checklist[index][field] = value;
    setFormData(updated);
    localStorage.setItem('c1_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'C1-Orientation-Checklist.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('c1_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-2xl">
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
              <h2 className="text-xl font-bold">FORM</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">C1</p>
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

      <div className="bg-slate-50 px-8 py-4 border-b-2 border-lime-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-lime-100 text-lime-800 px-3 py-1 rounded font-bold">C1</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">SOP:</span> C.1</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Completion:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-lime-500 to-green-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print
        </button>
      </div>

      <div className="px-8 py-8 space-y-8">
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-lime-700">
            <div className="w-8 h-8 bg-lime-700 rounded-lg flex items-center justify-center"><User className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Employee Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Employee Name *</label>
              <input type="text" value={formData.emp_name} onChange={(e) => handleChange('emp_name', e.target.value)} 
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-lime-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Employee ID *</label>
              <input type="text" value={formData.emp_id} onChange={(e) => handleChange('emp_id', e.target.value)} 
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-lime-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Designation *</label>
              <input type="text" value={formData.designation} onChange={(e) => handleChange('designation', e.target.value)} 
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-lime-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Department *</label>
              <input type="text" value={formData.dept} onChange={(e) => handleChange('dept', e.target.value)} 
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-lime-500 focus:outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Date of Joining *</label>
              <input type="date" value={formData.join_date} onChange={(e) => handleChange('join_date', e.target.value)} 
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-lime-500 focus:outline-none" />
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-lime-700">
            <div className="w-8 h-8 bg-lime-700 rounded-lg flex items-center justify-center"><CheckSquare className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Orientation Checklist</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-slate-300">
              <thead>
                <tr className="bg-lime-700 text-white">
                  <th className="px-3 py-3 text-left font-semibold text-sm w-8">#</th>
                  <th className="px-3 py-3 text-left font-semibold">Orientation Item</th>
                  <th className="px-3 py-3 text-center font-semibold w-24">Completed</th>
                  <th className="px-3 py-3 text-left font-semibold">Trainer</th>
                  <th className="px-3 py-3 text-left font-semibold w-32">Date</th>
                  <th className="px-3 py-3 text-left font-semibold">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {formData.checklist.map((item, index) => (
                  <tr key={index} className={`border-b border-slate-300 ${item.completed ? 'bg-green-50' : 'bg-white'}`}>
                    <td className="px-3 py-3 font-bold text-slate-700">{index + 1}</td>
                    <td className="px-3 py-3 text-sm">{item.item}</td>
                    <td className="px-3 py-3 text-center">
                      <input type="checkbox" checked={item.completed} 
                        onChange={(e) => handleChecklistChange(index, 'completed', e.target.checked)} 
                        className="w-5 h-5 text-lime-600 rounded" />
                    </td>
                    <td className="px-3 py-3">
                      <input type="text" value={item.trainer} 
                        onChange={(e) => handleChecklistChange(index, 'trainer', e.target.value)} 
                        placeholder="Name" 
                        className="w-full px-2 py-1 border border-slate-300 rounded focus:border-lime-500 focus:outline-none text-sm" />
                    </td>
                    <td className="px-3 py-3">
                      <input type="date" value={item.date} 
                        onChange={(e) => handleChecklistChange(index, 'date', e.target.value)} 
                        className="w-full px-2 py-1 border border-slate-300 rounded focus:border-lime-500 focus:outline-none text-sm" />
                    </td>
                    <td className="px-3 py-3">
                      <input type="text" value={item.remarks} 
                        onChange={(e) => handleChecklistChange(index, 'remarks', e.target.value)} 
                        placeholder="Notes" 
                        className="w-full px-2 py-1 border border-slate-300 rounded focus:border-lime-500 focus:outline-none text-sm" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-lime-700">
            <div className="w-8 h-8 bg-lime-700 rounded-lg flex items-center justify-center"><CheckSquare className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Acknowledgments</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">Employee Acknowledgment</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="space-y-2">
                <input type="text" value={formData.emp_ack_name} 
                  onChange={(e) => handleChange('emp_ack_name', e.target.value)} 
                  placeholder="Name" 
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:border-lime-500 focus:outline-none text-sm" />
                <input type="date" value={formData.emp_ack_date} 
                  onChange={(e) => handleChange('emp_ack_date', e.target.value)} 
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:border-lime-500 focus:outline-none text-sm" />
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">Trainer/Supervisor</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="space-y-2">
                <input type="text" value={formData.trainer_name} 
                  onChange={(e) => handleChange('trainer_name', e.target.value)} 
                  placeholder="Name" 
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:border-lime-500 focus:outline-none text-sm" />
                <input type="date" value={formData.trainer_date} 
                  onChange={(e) => handleChange('trainer_date', e.target.value)} 
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:border-lime-500 focus:outline-none text-sm" />
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">HR Manager Verification</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="space-y-2">
                <input type="text" value={formData.hr_name} 
                  onChange={(e) => handleChange('hr_name', e.target.value)} 
                  placeholder="Name" 
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:border-lime-500 focus:outline-none text-sm" />
                <input type="date" value={formData.hr_date} 
                  onChange={(e) => handleChange('hr_date', e.target.value)} 
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:border-lime-500 focus:outline-none text-sm" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <p className="text-sm text-slate-800 leading-relaxed">
            <strong>Note:</strong> This Annexure shall be read in conjunction with SOP C.1 (Orientation Program). 
            All items must be completed before the end of probation period. This is a key document for NABH/JCI audits.
          </p>
        </section>
      </div>

      <div className="border-t-2 border-lime-700 bg-gradient-to-r from-lime-700 via-green-600 to-lime-700 px-8 py-6 text-white">
        <div className="flex items-center justify-between text-sm">
          <p>© Koyili Hospital • Onboarding • Version-controlled</p>
          <p>Annexure C1 • Version 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalC1Form;
