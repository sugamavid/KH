import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Star, Plus, Trash2, Users, Shield, Calendar } from 'lucide-react';

const ProfessionalB5Form = () => {
  const [formData, setFormData] = useState({
    candidate_name: '', position: '', interview_date: '', interview_time: '',
    criteria: [
      { name: 'Technical Knowledge', rating: 0, remarks: '' },
      { name: 'Communication Skills', rating: 0, remarks: '' },
      { name: 'Problem Solving', rating: 0, remarks: '' },
      { name: 'Leadership Potential', rating: 0, remarks: '' }
    ],
    overall_remarks: '',
    panel_name: '', panel_desig: '', panel_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('b5_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const totalFields = 10;
    let filled = 0;
    if (formData.candidate_name) filled++;
    if (formData.position) filled++;
    if (formData.interview_date) filled++;
    if (formData.criteria.some(c => c.rating > 0)) filled += 3;
    if (formData.overall_remarks) filled++;
    if (formData.panel_name) filled += 2;
    setProgress(Math.min(100, Math.round((filled / totalFields) * 100)));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('b5_form_data', JSON.stringify(updated));
  };

  const handleCriteriaChange = (index, field, value) => {
    const updated = { ...formData };
    updated.criteria[index][field] = value;
    setFormData(updated);
    localStorage.setItem('b5_form_data', JSON.stringify(updated));
  };

  const addCriteria = () => {
    const updated = { ...formData };
    updated.criteria.push({ name: '', rating: 0, remarks: '' });
    setFormData(updated);
  };

  const removeCriteria = (index) => {
    const updated = { ...formData };
    updated.criteria.splice(index, 1);
    setFormData(updated);
    localStorage.setItem('b5_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'B5-Interview-Evaluation.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('b5_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  const calculateAverage = () => {
    const ratings = formData.criteria.filter(c => c.rating > 0).map(c => c.rating);
    if (ratings.length === 0) return 0;
    return (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-pink-700 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {logoData && <img src={logoData} alt="Logo" className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg object-contain" />}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
              <p className="text-violet-200 text-sm mt-1">Human Resources Department</p>
              <p className="text-violet-300 text-xs">Pallikkunnu, Talap, Kannur, Kerala</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-violet-200 mb-1">Document Classification</p>
              <p className="text-sm font-bold">OFFICIAL DOCUMENT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 px-8 py-4 border-b-2 border-violet-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded font-bold">B5</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">SOP:</span> B.5</div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Progress:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-violet-500 to-pink-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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
        <div className="inline-block px-4 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-semibold mb-4">Recruitment Annexure</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">INTERVIEW PANEL EVALUATION SHEET</h2>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Effective Date: 10/15/2025</span></div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>Approval Authority: HR Manager</span></div>
        </div>
      </div>

      <div className="px-8 py-8 space-y-8">
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-violet-700">
            <div className="w-8 h-8 bg-violet-700 rounded-lg flex items-center justify-center"><Users className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Interview Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Candidate Name *</label><input type="text" value={formData.candidate_name} onChange={(e) => handleChange('candidate_name', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Position Applied *</label><input type="text" value={formData.position} onChange={(e) => handleChange('position', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Interview Date *</label><input type="date" value={formData.interview_date} onChange={(e) => handleChange('interview_date', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Interview Time</label><input type="time" value={formData.interview_time} onChange={(e) => handleChange('interview_time', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none" /></div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 pb-2 border-b-2 border-violet-700 flex-1">
              <div className="w-8 h-8 bg-violet-700 rounded-lg flex items-center justify-center"><Star className="w-5 h-5 text-white" /></div>
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Evaluation Criteria (Rate 1-5)</h3>
            </div>
            <button onClick={addCriteria} className="ml-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm font-semibold flex items-center gap-2"><Plus className="w-4 h-4" /> Add Criteria</button>
          </div>

          <div className="space-y-4">
            {formData.criteria.map((criterion, index) => (
              <div key={index} className="border-2 border-slate-200 rounded-lg p-4 hover:border-violet-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Criteria {index + 1}</label>
                    <input type="text" value={criterion.name} onChange={(e) => handleCriteriaChange(index, 'name', e.target.value)} placeholder="e.g., Technical Knowledge" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none mb-3" />
                    
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Rating (1-5) *</label>
                    <div className="flex gap-2 mb-3">
                      {[1, 2, 3, 4, 5].map(rating => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => handleCriteriaChange(index, 'rating', rating)}
                          className={`w-12 h-12 rounded-lg font-bold transition-all ${
                            criterion.rating >= rating
                              ? 'bg-violet-600 text-white shadow-md'
                              : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                          }`}
                        >
                          {rating}
                        </button>
                      ))}
                    </div>

                    <label className="block text-sm font-semibold text-slate-700 mb-2">Remarks</label>
                    <input type="text" value={criterion.remarks} onChange={(e) => handleCriteriaChange(index, 'remarks', e.target.value)} placeholder="Comments" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none" />
                  </div>
                  <button onClick={() => removeCriteria(index)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg mt-8"><Trash2 className="w-5 h-5" /></button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-violet-50 border-2 border-violet-300 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-1">Average Rating</p>
                <p className="text-3xl font-bold text-violet-700">{calculateAverage()} / 5.0</p>
              </div>
              <Star className="w-16 h-16 text-violet-400" />
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-violet-700">
            <div className="w-8 h-8 bg-violet-700 rounded-lg flex items-center justify-center"><Users className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Overall Assessment</h3>
          </div>
          <textarea value={formData.overall_remarks} onChange={(e) => handleChange('overall_remarks', e.target.value)} placeholder="Overall remarks, strengths, areas for improvement, final recommendation..." rows={5} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none" />
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-violet-700">
            <div className="w-8 h-8 bg-violet-700 rounded-lg flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Panel Member Signature</h3>
          </div>
          <div className="border-2 border-slate-300 rounded-lg p-6">
            <div className="border-b-2 border-slate-400 mb-4 h-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div><label className="block text-sm font-semibold text-slate-700 mb-2">Name *</label><input type="text" value={formData.panel_name} onChange={(e) => handleChange('panel_name', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none" /></div>
              <div><label className="block text-sm font-semibold text-slate-700 mb-2">Designation *</label><input type="text" value={formData.panel_desig} onChange={(e) => handleChange('panel_desig', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none" /></div>
              <div><label className="block text-sm font-semibold text-slate-700 mb-2">Date *</label><input type="date" value={formData.panel_date} onChange={(e) => handleChange('panel_date', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none" /></div>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <p className="text-sm text-slate-800 leading-relaxed"><strong>Note:</strong> Each panel member must complete this evaluation independently. Final decision must be documented in Candidate Evaluation Summary (Annexure B6).</p>
        </section>
      </div>

      <div className="border-t-2 border-violet-700 bg-gradient-to-r from-violet-700 via-purple-700 to-violet-700 px-8 py-6 text-white">
        <div className="flex items-center justify-between text-sm">
          <p>© Koyili Hospital • Confidential • Version-controlled</p>
          <p>Annexure B5 • Version 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalB5Form;