import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Heart, Plus, Trash2, Shield, Calendar } from 'lucide-react';

const ProfessionalB8Form = () => {
  const [formData, setFormData] = useState({
    cand_name: '', cand_age: '', cand_gender: 'Male', position: '', exam_date: '',
    examinations: [
      { parameter: 'Blood Pressure', value: '', normal_range: '120/80 mmHg' },
      { parameter: 'Pulse Rate', value: '', normal_range: '60-100 bpm' },
      { parameter: 'Temperature', value: '', normal_range: '98.6°F' }
    ],
    investigations: [
      { test: 'Complete Blood Count (CBC)', result: '', remarks: '' },
      { test: 'Blood Sugar (Fasting)', result: '', remarks: '' }
    ],
    findings: '', fitness: 'Fit', restrictions: '',
    med_officer_name: '', med_officer_reg: '', med_officer_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('b8_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const totalFields = 10;
    let filled = [formData.cand_name, formData.position, formData.exam_date, formData.findings, formData.med_officer_name].filter(Boolean).length;
    setProgress(Math.min(100, Math.round((filled / totalFields) * 100)));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('b8_form_data', JSON.stringify(updated));
  };

  const handleArrayChange = (arrayName, index, field, value) => {
    const updated = { ...formData };
    updated[arrayName][index][field] = value;
    setFormData(updated);
    localStorage.setItem('b8_form_data', JSON.stringify(updated));
  };

  const addItem = (arrayName, template) => {
    const updated = { ...formData };
    updated[arrayName].push(template);
    setFormData(updated);
  };

  const removeItem = (arrayName, index) => {
    const updated = { ...formData };
    updated[arrayName].splice(index, 1);
    setFormData(updated);
    localStorage.setItem('b8_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'B8-Medical-Fitness.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('b8_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {logoData && <img src={logoData} alt="Logo" className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg object-contain" />}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
              <p className="text-green-200 text-sm mt-1">Human Resources Department</p>
              <p className="text-green-300 text-xs">Pallikkunnu, Talap, Kannur, Kerala</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-green-200 mb-1">Document Classification</p>
              <p className="text-sm font-bold">MEDICAL CERTIFICATE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 px-8 py-4 border-b-2 border-green-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">B8</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">SOP:</span> B.8</div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Progress:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-teal-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-slate-200">
        <div className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">Medical Annexure</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">PRE-EMPLOYMENT MEDICAL FITNESS CERTIFICATE</h2>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Effective Date: 10/15/2025</span></div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>Medical Authority: Registered Medical Practitioner</span></div>
        </div>
      </div>

      <div className="px-8 py-8 space-y-8">
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-green-700">
            <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center"><Heart className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Candidate Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Candidate Name *</label><input type="text" value={formData.cand_name} onChange={(e) => handleChange('cand_name', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-green-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Age *</label><input type="number" value={formData.cand_age} onChange={(e) => handleChange('cand_age', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-green-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Gender *</label><select value={formData.cand_gender} onChange={(e) => handleChange('cand_gender', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-green-500 focus:outline-none"><option>Male</option><option>Female</option><option>Other</option></select></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Position Applied *</label><input type="text" value={formData.position} onChange={(e) => handleChange('position', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-green-500 focus:outline-none" /></div>
            <div className="md:col-span-2"><label className="block text-sm font-semibold text-slate-700 mb-2">Date of Examination *</label><input type="date" value={formData.exam_date} onChange={(e) => handleChange('exam_date', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-green-500 focus:outline-none" /></div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 pb-2 border-b-2 border-green-700 flex-1">
              <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center"><Heart className="w-5 h-5 text-white" /></div>
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Clinical Examination</h3>
            </div>
            <button onClick={() => addItem('examinations', { parameter: '', value: '', normal_range: '' })} className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold flex items-center gap-2"><Plus className="w-4 h-4" /> Add</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-slate-300">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                  <th className="px-4 py-3 text-left font-semibold">Value</th>
                  <th className="px-4 py-3 text-left font-semibold">Normal Range</th>
                  <th className="px-4 py-3 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.examinations.map((exam, index) => (
                  <tr key={index} className="border-b border-slate-300">
                    <td className="px-4 py-3"><input type="text" value={exam.parameter} onChange={(e) => handleArrayChange('examinations', index, 'parameter', e.target.value)} className="w-full px-2 py-1 border border-slate-300 rounded focus:border-green-500 focus:outline-none text-sm" /></td>
                    <td className="px-4 py-3"><input type="text" value={exam.value} onChange={(e) => handleArrayChange('examinations', index, 'value', e.target.value)} className="w-full px-2 py-1 border border-slate-300 rounded focus:border-green-500 focus:outline-none text-sm" /></td>
                    <td className="px-4 py-3"><input type="text" value={exam.normal_range} onChange={(e) => handleArrayChange('examinations', index, 'normal_range', e.target.value)} className="w-full px-2 py-1 border border-slate-300 rounded focus:border-green-500 focus:outline-none text-sm" /></td>
                    <td className="px-4 py-3 text-center"><button onClick={() => removeItem('examinations', index)} className="p-1 text-red-600 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 pb-2 border-b-2 border-green-700 flex-1">
              <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Lab/Diagnostic Investigations</h3>
            </div>
            <button onClick={() => addItem('investigations', { test: '', result: '', remarks: '' })} className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold flex items-center gap-2"><Plus className="w-4 h-4" /> Add</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-slate-300">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Investigation/Test</th>
                  <th className="px-4 py-3 text-left font-semibold">Result</th>
                  <th className="px-4 py-3 text-left font-semibold">Remarks</th>
                  <th className="px-4 py-3 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.investigations.map((inv, index) => (
                  <tr key={index} className="border-b border-slate-300">
                    <td className="px-4 py-3"><input type="text" value={inv.test} onChange={(e) => handleArrayChange('investigations', index, 'test', e.target.value)} className="w-full px-2 py-1 border border-slate-300 rounded focus:border-green-500 focus:outline-none text-sm" /></td>
                    <td className="px-4 py-3"><input type="text" value={inv.result} onChange={(e) => handleArrayChange('investigations', index, 'result', e.target.value)} className="w-full px-2 py-1 border border-slate-300 rounded focus:border-green-500 focus:outline-none text-sm" /></td>
                    <td className="px-4 py-3"><input type="text" value={inv.remarks} onChange={(e) => handleArrayChange('investigations', index, 'remarks', e.target.value)} className="w-full px-2 py-1 border border-slate-300 rounded focus:border-green-500 focus:outline-none text-sm" /></td>
                    <td className="px-4 py-3 text-center"><button onClick={() => removeItem('investigations', index)} className="p-1 text-red-600 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-green-700">
            <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center"><Heart className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Medical Officer's Findings</h3>
          </div>
          <textarea value={formData.findings} onChange={(e) => handleChange('findings', e.target.value)} placeholder="Detailed medical findings and observations..." rows={4} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-green-500 focus:outline-none" />
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-green-700">
            <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Certification of Fitness</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <label className={`flex items-center justify-center gap-3 p-4 rounded-lg border-2 cursor-pointer ${formData.fitness === 'Fit' ? 'bg-green-50 border-green-500' : 'border-slate-300'}`}>
              <input type="radio" name="fitness" value="Fit" checked={formData.fitness === 'Fit'} onChange={(e) => handleChange('fitness', e.target.value)} className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-slate-900">Fit for Duty</span>
            </label>
            <label className={`flex items-center justify-center gap-3 p-4 rounded-lg border-2 cursor-pointer ${formData.fitness === 'Unfit' ? 'bg-red-50 border-red-500' : 'border-slate-300'}`}>
              <input type="radio" name="fitness" value="Unfit" checked={formData.fitness === 'Unfit'} onChange={(e) => handleChange('fitness', e.target.value)} className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-slate-900">Unfit</span>
            </label>
            <label className={`flex items-center justify-center gap-3 p-4 rounded-lg border-2 cursor-pointer ${formData.fitness === 'Fit with Restrictions' ? 'bg-yellow-50 border-yellow-500' : 'border-slate-300'}`}>
              <input type="radio" name="fitness" value="Fit with Restrictions" checked={formData.fitness === 'Fit with Restrictions'} onChange={(e) => handleChange('fitness', e.target.value)} className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold text-slate-900">Fit with Restrictions</span>
            </label>
          </div>
          {formData.fitness === 'Fit with Restrictions' && (
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Specify Restrictions</label><textarea value={formData.restrictions} onChange={(e) => handleChange('restrictions', e.target.value)} rows={3} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-green-500 focus:outline-none" /></div>
          )}
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-green-700">
            <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Medical Officer Certification</h3>
          </div>
          <div className="border-2 border-slate-300 rounded-lg p-6">
            <div className="border-b-2 border-slate-400 mb-4 h-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div><label className="block text-sm font-semibold text-slate-700 mb-2">Name *</label><input type="text" value={formData.med_officer_name} onChange={(e) => handleChange('med_officer_name', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-green-500 focus:outline-none" /></div>
              <div><label className="block text-sm font-semibold text-slate-700 mb-2">Registration No. *</label><input type="text" value={formData.med_officer_reg} onChange={(e) => handleChange('med_officer_reg', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-green-500 focus:outline-none" /></div>
              <div><label className="block text-sm font-semibold text-slate-700 mb-2">Date *</label><input type="date" value={formData.med_officer_date} onChange={(e) => handleChange('med_officer_date', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-green-500 focus:outline-none" /></div>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <p className="text-sm text-slate-800 leading-relaxed"><strong>Note:</strong> This Annexure shall be read in conjunction with SOP B.8 (Pre-Employment Medical Examination) and By-Laws Section 2.2(d). No employee shall join duty without submission of a duly certified Medical Fitness Certificate in this format.</p>
        </section>
      </div>

      <div className="border-t-2 border-green-700 bg-gradient-to-r from-green-700 via-emerald-700 to-green-700 px-8 py-6 text-white">
        <div className="flex items-center justify-between text-sm">
          <p>© Koyili Hospital • Medical Certificate • Version-controlled</p>
          <p>Annexure B8 • Version 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalB8Form;
