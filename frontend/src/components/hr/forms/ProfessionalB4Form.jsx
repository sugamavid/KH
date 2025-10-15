import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Users, Plus, Trash2, FileSearch, Shield, Calendar } from 'lucide-react';

const ProfessionalB4Form = () => {
  const [formData, setFormData] = useState({
    position: '', dept: '', screening_date: '', screener_name: '',
    candidates: [
      { name: '', exp: '', qual: '', skills: '', status: 'Pending', remarks: '' },
      { name: '', exp: '', qual: '', skills: '', status: 'Pending', remarks: '' }
    ]
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('b4_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const totalFields = 4 + (formData.candidates.length * 2);
    let filled = 0;
    if (formData.position) filled++;
    if (formData.dept) filled++;
    if (formData.screening_date) filled++;
    if (formData.screener_name) filled++;
    formData.candidates.forEach(c => {
      if (c.name) filled++;
      if (c.status !== 'Pending') filled++;
    });
    setProgress(Math.min(100, Math.round((filled / totalFields) * 100)));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('b4_form_data', JSON.stringify(updated));
  };

  const handleCandidateChange = (index, field, value) => {
    const updated = { ...formData };
    updated.candidates[index][field] = value;
    setFormData(updated);
    localStorage.setItem('b4_form_data', JSON.stringify(updated));
  };

  const addCandidate = () => {
    const updated = { ...formData };
    updated.candidates.push({ name: '', exp: '', qual: '', skills: '', status: 'Pending', remarks: '' });
    setFormData(updated);
  };

  const removeCandidate = (index) => {
    const updated = { ...formData };
    updated.candidates.splice(index, 1);
    setFormData(updated);
    localStorage.setItem('b4_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'B4-Resume-Screening.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('b4_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  const exportToCSV = () => {
    let csv = 'Candidate Name,Experience,Qualifications,Skills,Status,Remarks\n';
    formData.candidates.forEach(c => {
      csv += `"${c.name}","${c.exp}","${c.qual}","${c.skills}","${c.status}","${c.remarks}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'screening-tracker.csv';
    link.click();
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-cyan-700 via-blue-600 to-teal-700 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {logoData && <img src={logoData} alt="Logo" className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg object-contain" />}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
              <p className="text-cyan-200 text-sm mt-1">Human Resources Department</p>
              <p className="text-cyan-300 text-xs">Pallikkunnu, Talap, Kannur, Kerala</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-cyan-200 mb-1">Document Classification</p>
              <p className="text-sm font-bold">OFFICIAL DOCUMENT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 px-8 py-4 border-b-2 border-cyan-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded font-bold">B4</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">SOP:</span> B.4</div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Progress:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={exportToCSV} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      <div className="px-8 py-8 border-b border-slate-200">
        <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold mb-4">Recruitment Annexure</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">RESUME SCREENING TRACKER</h2>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Effective Date: 10/15/2025</span></div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>Approval Authority: HR Manager</span></div>
        </div>
      </div>

      <div className="px-8 py-8 space-y-8">
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-cyan-700">
            <div className="w-8 h-8 bg-cyan-700 rounded-lg flex items-center justify-center"><FileSearch className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Screening Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Position *</label><input type="text" value={formData.position} onChange={(e) => handleChange('position', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-cyan-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Department *</label><input type="text" value={formData.dept} onChange={(e) => handleChange('dept', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-cyan-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Screening Date *</label><input type="date" value={formData.screening_date} onChange={(e) => handleChange('screening_date', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-cyan-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Screened By *</label><input type="text" value={formData.screener_name} onChange={(e) => handleChange('screener_name', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-cyan-500 focus:outline-none" /></div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 pb-2 border-b-2 border-cyan-700 flex-1">
              <div className="w-8 h-8 bg-cyan-700 rounded-lg flex items-center justify-center"><Users className="w-5 h-5 text-white" /></div>
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Candidates Screening</h3>
            </div>
            <button onClick={addCandidate} className="ml-4 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm font-semibold flex items-center gap-2"><Plus className="w-4 h-4" /> Add Candidate</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-slate-300">
              <thead>
                <tr className="bg-cyan-700 text-white">
                  <th className="px-3 py-3 text-left font-semibold text-sm">#</th>
                  <th className="px-3 py-3 text-left font-semibold">Candidate Name</th>
                  <th className="px-3 py-3 text-left font-semibold">Experience</th>
                  <th className="px-3 py-3 text-left font-semibold">Qualifications</th>
                  <th className="px-3 py-3 text-left font-semibold">Skills</th>
                  <th className="px-3 py-3 text-left font-semibold">Status</th>
                  <th className="px-3 py-3 text-left font-semibold">Remarks</th>
                  <th className="px-3 py-3 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.candidates.map((candidate, index) => (
                  <tr key={index} className="border-b border-slate-300 hover:bg-slate-50">
                    <td className="px-3 py-3 font-bold text-slate-700">{index + 1}</td>
                    <td className="px-3 py-3"><input type="text" value={candidate.name} onChange={(e) => handleCandidateChange(index, 'name', e.target.value)} placeholder="Full name" className="w-full px-2 py-1 border border-slate-300 rounded focus:border-cyan-500 focus:outline-none text-sm" /></td>
                    <td className="px-3 py-3"><input type="text" value={candidate.exp} onChange={(e) => handleCandidateChange(index, 'exp', e.target.value)} placeholder="Years" className="w-full px-2 py-1 border border-slate-300 rounded focus:border-cyan-500 focus:outline-none text-sm" /></td>
                    <td className="px-3 py-3"><input type="text" value={candidate.qual} onChange={(e) => handleCandidateChange(index, 'qual', e.target.value)} placeholder="Degree" className="w-full px-2 py-1 border border-slate-300 rounded focus:border-cyan-500 focus:outline-none text-sm" /></td>
                    <td className="px-3 py-3"><input type="text" value={candidate.skills} onChange={(e) => handleCandidateChange(index, 'skills', e.target.value)} placeholder="Key skills" className="w-full px-2 py-1 border border-slate-300 rounded focus:border-cyan-500 focus:outline-none text-sm" /></td>
                    <td className="px-3 py-3">
                      <select value={candidate.status} onChange={(e) => handleCandidateChange(index, 'status', e.target.value)} className="w-full px-2 py-1 border border-slate-300 rounded focus:border-cyan-500 focus:outline-none text-sm">
                        <option>Pending</option>
                        <option>Shortlisted</option>
                        <option>Rejected</option>
                      </select>
                    </td>
                    <td className="px-3 py-3"><input type="text" value={candidate.remarks} onChange={(e) => handleCandidateChange(index, 'remarks', e.target.value)} placeholder="Notes" className="w-full px-2 py-1 border border-slate-300 rounded focus:border-cyan-500 focus:outline-none text-sm" /></td>
                    <td className="px-3 py-3 text-center"><button onClick={() => removeCandidate(index)} className="p-1 text-red-600 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <p className="text-sm text-slate-800 leading-relaxed"><strong>Note:</strong> All shortlisted candidates must proceed to the Interview Panel Evaluation (Annexure B5). Screening criteria must align with the Job Description (Annexure A3).</p>
        </section>
      </div>

      <div className="border-t-2 border-cyan-700 bg-gradient-to-r from-cyan-700 via-blue-600 to-cyan-700 px-8 py-6 text-white">
        <div className="flex items-center justify-between text-sm">
          <p>© Koyili Hospital • Confidential • Version-controlled</p>
          <p>Annexure B4 • Version 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalB4Form;
