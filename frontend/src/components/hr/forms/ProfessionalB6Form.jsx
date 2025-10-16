import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Award, ThumbsUp, ThumbsDown, Shield, Calendar, Users } from 'lucide-react';

const ProfessionalB6Form = () => {
  const [formData, setFormData] = useState({
    candidate_name: '', position: '', dept: '', eval_date: '',
    resume_score: '', interview_r1_score: '', interview_r2_score: '', tech_test_score: '',
    strengths: '', weaknesses: '', culture_fit: '',
    recommendation: 'Pending', offer_salary: '', joining_date: '',
    final_remarks: '',
    hr_name: '', hr_date: '', hod_name: '', hod_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('b6_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const totalFields = 15;
    let filled = Object.values(formData).filter(v => v && v !== 'Pending').length;
    setProgress(Math.min(100, Math.round((filled / totalFields) * 100)));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('b6_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'B6-Candidate-Evaluation-Summary.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('b6_form_data', JSON.stringify(data));
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
              <h2 className="text-xl font-bold">CANDIDATE EVALUATION SUMMARY</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">B6</p>
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

      <div className="bg-slate-50 px-8 py-4 border-b-2 border-rose-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded font-bold">B6</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">SOP:</span> B.6</div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Progress:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-rose-500 to-pink-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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
        <div className="inline-block px-4 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-semibold mb-4">Recruitment Annexure</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">CANDIDATE EVALUATION SUMMARY</h2>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Effective Date: 10/15/2025</span></div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>Approval Authority: HOD / HR Manager</span></div>
        </div>
      </div>

      <div className="px-8 py-8 space-y-8">
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-rose-700">
            <div className="w-8 h-8 bg-rose-700 rounded-lg flex items-center justify-center"><Users className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">1. Candidate Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Candidate Name *</label><input type="text" value={formData.candidate_name} onChange={(e) => handleChange('candidate_name', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Position Applied *</label><input type="text" value={formData.position} onChange={(e) => handleChange('position', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Department *</label><input type="text" value={formData.dept} onChange={(e) => handleChange('dept', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Evaluation Date *</label><input type="date" value={formData.eval_date} onChange={(e) => handleChange('eval_date', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-rose-700">
            <div className="w-8 h-8 bg-rose-700 rounded-lg flex items-center justify-center"><Award className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">2. Evaluation Scores</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Resume Screening Score</label><input type="text" value={formData.resume_score} onChange={(e) => handleChange('resume_score', e.target.value)} placeholder="e.g., 8/10" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Interview Round 1 Score</label><input type="text" value={formData.interview_r1_score} onChange={(e) => handleChange('interview_r1_score', e.target.value)} placeholder="e.g., 4.2/5" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Interview Round 2 Score</label><input type="text" value={formData.interview_r2_score} onChange={(e) => handleChange('interview_r2_score', e.target.value)} placeholder="e.g., 4.5/5" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Technical Test Score (if any)</label><input type="text" value={formData.tech_test_score} onChange={(e) => handleChange('tech_test_score', e.target.value)} placeholder="e.g., 85%" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-rose-700">
            <div className="w-8 h-8 bg-rose-700 rounded-lg flex items-center justify-center"><ThumbsUp className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">3. Assessment Summary</h3>
          </div>
          <div className="space-y-6">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Key Strengths *</label><textarea value={formData.strengths} onChange={(e) => handleChange('strengths', e.target.value)} placeholder="List candidate's key strengths..." rows={4} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Areas for Improvement</label><textarea value={formData.weaknesses} onChange={(e) => handleChange('weaknesses', e.target.value)} placeholder="List areas that need development..." rows={4} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Culture Fit & Team Compatibility</label><textarea value={formData.culture_fit} onChange={(e) => handleChange('culture_fit', e.target.value)} placeholder="Assessment of organizational fit..." rows={3} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-rose-700">
            <div className="w-8 h-8 bg-rose-700 rounded-lg flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">4. Final Recommendation</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-3">
              <label className="block text-sm font-semibold text-slate-700 mb-3">Recommendation Status *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className={`flex items-center justify-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${formData.recommendation === 'Strongly Recommended' ? 'bg-green-50 border-green-500' : 'border-slate-300 hover:border-green-300'}`}>
                  <input type="radio" name="recommendation" value="Strongly Recommended" checked={formData.recommendation === 'Strongly Recommended'} onChange={(e) => handleChange('recommendation', e.target.value)} className="w-5 h-5 text-green-600" />
                  <div><ThumbsUp className="w-6 h-6 text-green-600 mb-1" /><span className="font-semibold text-slate-900">Strongly Recommended</span></div>
                </label>
                <label className={`flex items-center justify-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${formData.recommendation === 'Recommended' ? 'bg-blue-50 border-blue-500' : 'border-slate-300 hover:border-blue-300'}`}>
                  <input type="radio" name="recommendation" value="Recommended" checked={formData.recommendation === 'Recommended'} onChange={(e) => handleChange('recommendation', e.target.value)} className="w-5 h-5 text-blue-600" />
                  <div><Award className="w-6 h-6 text-blue-600 mb-1" /><span className="font-semibold text-slate-900">Recommended</span></div>
                </label>
                <label className={`flex items-center justify-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${formData.recommendation === 'Not Recommended' ? 'bg-red-50 border-red-500' : 'border-slate-300 hover:border-red-300'}`}>
                  <input type="radio" name="recommendation" value="Not Recommended" checked={formData.recommendation === 'Not Recommended'} onChange={(e) => handleChange('recommendation', e.target.value)} className="w-5 h-5 text-red-600" />
                  <div><ThumbsDown className="w-6 h-6 text-red-600 mb-1" /><span className="font-semibold text-slate-900">Not Recommended</span></div>
                </label>
              </div>
            </div>
          </div>

          {(formData.recommendation === 'Strongly Recommended' || formData.recommendation === 'Recommended') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <div><label className="block text-sm font-semibold text-slate-700 mb-2">Proposed Salary/CTC</label><input type="text" value={formData.offer_salary} onChange={(e) => handleChange('offer_salary', e.target.value)} placeholder="e.g., ₹50,000/month" className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
              <div><label className="block text-sm font-semibold text-slate-700 mb-2">Proposed Joining Date</label><input type="date" value={formData.joining_date} onChange={(e) => handleChange('joining_date', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
            </div>
          )}

          <div><label className="block text-sm font-semibold text-slate-700 mb-2">Final Remarks *</label><textarea value={formData.final_remarks} onChange={(e) => handleChange('final_remarks', e.target.value)} placeholder="Overall assessment and final decision rationale..." rows={4} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-rose-500 focus:outline-none" /></div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-rose-700">
            <div className="w-8 h-8 bg-rose-700 rounded-lg flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">5. Approvals</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">HR Manager</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="space-y-2">
                <input type="text" value={formData.hr_name} onChange={(e) => handleChange('hr_name', e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-rose-500 focus:outline-none" />
                <input type="date" value={formData.hr_date} onChange={(e) => handleChange('hr_date', e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded focus:border-rose-500 focus:outline-none" />
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">Head of Department</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="space-y-2">
                <input type="text" value={formData.hod_name} onChange={(e) => handleChange('hod_name', e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-rose-500 focus:outline-none" />
                <input type="date" value={formData.hod_date} onChange={(e) => handleChange('hod_date', e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded focus:border-rose-500 focus:outline-none" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <p className="text-sm text-slate-800 leading-relaxed"><strong>Note:</strong> This summary consolidates all evaluation stages (B4-B5). Final offer letters shall only be issued upon approval and compliance with SOP B.6.</p>
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
            <p className="text-sm font-bold">Form B6</p>
            <p className="text-xs text-blue-200">Background Verification</p>
          </div>
        </div>
      </div>
    </div>

      
    </div>
  );
};

export default ProfessionalB6Form;
