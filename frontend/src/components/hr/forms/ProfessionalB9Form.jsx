import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, FileText, Calendar, User, Plus, Trash2 } from 'lucide-react';

const ProfessionalB9Form = () => {
  const [formData, setFormData] = useState({
    ref_no: '', letter_date: '', to_name: '', subject: 'Offer of Employment',
    salutation: 'Dear', cand_name: '', position: '', reporting_to: '', compensation: '',
    place_posting: '', probation: '6 months', joining_date: '',
    preconditions: [
      { text: 'Submission of original educational certificates' },
      { text: 'Pre-employment medical fitness certificate (Annexure B8)' },
      { text: 'Background verification clearance (Annexure B7)' }
    ],
    issuer_name: '', issuer_desig: '', hr_ack_name: '', hr_ack_date: '',
    accept_name: '', accept_date: ''
  });

  const [logoData, setLogoData] = useState('');

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('b9_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('b9_form_data', JSON.stringify(updated));
  };

  const handleArrayChange = (index, value) => {
    const updated = { ...formData };
    updated.preconditions[index].text = value;
    setFormData(updated);
    localStorage.setItem('b9_form_data', JSON.stringify(updated));
  };

  const addPrecondition = () => {
    const updated = { ...formData };
    updated.preconditions.push({ text: '' });
    setFormData(updated);
  };

  const removePrecondition = (index) => {
    const updated = { ...formData };
    updated.preconditions.splice(index, 1);
    setFormData(updated);
    localStorage.setItem('b9_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'B9-Offer-Letter.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('b9_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl">
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
              <p className="text-2xl font-bold">B9</p>
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

      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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

      <div className="px-12 py-10 space-y-6">
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div><label className="block text-xs font-semibold text-slate-600 mb-2">Ref. No.</label><input type="text" value={formData.ref_no} onChange={(e) => handleChange('ref_no', e.target.value)} placeholder="HR/OFF/2025/001" className="w-full px-3 py-2 border-2 border-slate-300 rounded focus:border-sky-500 focus:outline-none text-sm" /></div>
          <div><label className="block text-xs font-semibold text-slate-600 mb-2">Date</label><input type="date" value={formData.letter_date} onChange={(e) => handleChange('letter_date', e.target.value)} className="w-full px-3 py-2 border-2 border-slate-300 rounded focus:border-sky-500 focus:outline-none text-sm" /></div>
        </div>

        <div className="mb-6">
          <label className="block text-xs font-semibold text-slate-600 mb-2">To</label>
          <input type="text" value={formData.to_name} onChange={(e) => handleChange('to_name', e.target.value)} placeholder="Candidate Name" className="w-full px-4 py-2 border-2 border-slate-300 rounded focus:border-sky-500 focus:outline-none" />
        </div>

        <div className="mb-6">
          <label className="block text-xs font-semibold text-slate-600 mb-2">Subject</label>
          <input type="text" value={formData.subject} onChange={(e) => handleChange('subject', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded focus:border-sky-500 focus:outline-none" />
        </div>

        <div className="mb-8">
          <p className="text-slate-800 mb-4">
            <input type="text" value={formData.salutation} onChange={(e) => handleChange('salutation', e.target.value)} className="inline-block w-24 px-2 py-1 border-b-2 border-slate-400 focus:border-sky-500 focus:outline-none" />
            <span className="ml-2">
              <input type="text" value={formData.cand_name} onChange={(e) => handleChange('cand_name', e.target.value)} placeholder="Candidate Name" className="inline-block w-64 px-2 py-1 border-b-2 border-slate-400 focus:border-sky-500 focus:outline-none" />
            </span>,
          </p>
          <p className="text-slate-800 leading-relaxed mb-4">
            We are pleased to offer you employment at Koyili Hospital for the position of:
          </p>
        </div>

        <div className="bg-sky-50 border-2 border-sky-300 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 gap-4">
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Position *</label><input type="text" value={formData.position} onChange={(e) => handleChange('position', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded focus:border-sky-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Reporting To</label><input type="text" value={formData.reporting_to} onChange={(e) => handleChange('reporting_to', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded focus:border-sky-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Compensation Package</label><input type="text" value={formData.compensation} onChange={(e) => handleChange('compensation', e.target.value)} placeholder="As per hospital policy" className="w-full px-4 py-2 border-2 border-slate-300 rounded focus:border-sky-500 focus:outline-none" /></div>
            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Place of Posting</label><input type="text" value={formData.place_posting} onChange={(e) => handleChange('place_posting', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded focus:border-sky-500 focus:outline-none" /></div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-slate-900 mb-3">Pre-conditions of Offer:</h3>
          <div className="space-y-2 mb-4">
            {formData.preconditions.map((pre, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="font-bold text-slate-700">{index + 1}.</span>
                <input type="text" value={pre.text} onChange={(e) => handleArrayChange(index, e.target.value)} className="flex-1 px-3 py-2 border-2 border-slate-300 rounded focus:border-sky-500 focus:outline-none text-sm" />
                <button onClick={() => removePrecondition(index)} className="p-2 text-red-600 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
          <button onClick={addPrecondition} className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition-colors text-sm font-semibold flex items-center gap-2"><Plus className="w-4 h-4" /> Add Condition</button>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div><label className="block text-sm font-semibold text-slate-700 mb-2">Probation Period</label><input type="text" value={formData.probation} onChange={(e) => handleChange('probation', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded focus:border-sky-500 focus:outline-none" /></div>
          <div><label className="block text-sm font-semibold text-slate-700 mb-2">Expected Joining Date *</label><input type="date" value={formData.joining_date} onChange={(e) => handleChange('joining_date', e.target.value)} className="w-full px-4 py-2 border-2 border-slate-300 rounded focus:border-sky-500 focus:outline-none" /></div>
        </div>

        <div className="mb-8">
          <p className="text-slate-800">We look forward to welcoming you to our team.</p>
          <p className="text-slate-800 mt-2">Sincerely,</p>
        </div>

        <div className="border-t-2 border-slate-300 pt-6 mb-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-2">For Koyili Hospital</p>
              <div className="border-b-2 border-slate-400 mb-3 h-16"></div>
              <input type="text" value={formData.issuer_name} onChange={(e) => handleChange('issuer_name', e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-sky-500 focus:outline-none mb-2 text-sm" />
              <input type="text" value={formData.issuer_desig} onChange={(e) => handleChange('issuer_desig', e.target.value)} placeholder="Designation" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-sky-500 focus:outline-none text-sm" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-2">HR Acknowledgment</p>
              <div className="border-b-2 border-slate-400 mb-3 h-16"></div>
              <input type="text" value={formData.hr_ack_name} onChange={(e) => handleChange('hr_ack_name', e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-sky-500 focus:outline-none mb-2 text-sm" />
              <input type="date" value={formData.hr_ack_date} onChange={(e) => handleChange('hr_ack_date', e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded focus:border-sky-500 focus:outline-none text-sm" />
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
          <h3 className="font-bold text-slate-900 mb-4">Candidate Acceptance</h3>
          <p className="text-sm text-slate-800 mb-4">I accept the above offer and will join on the specified date.</p>
          <div className="border-b-2 border-slate-400 mb-4 h-16"></div>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" value={formData.accept_name} onChange={(e) => handleChange('accept_name', e.target.value)} placeholder="Candidate Name" className="px-3 py-2 border border-slate-300 rounded focus:border-green-500 focus:outline-none text-sm" />
            <input type="date" value={formData.accept_date} onChange={(e) => handleChange('accept_date', e.target.value)} className="px-3 py-2 border border-slate-300 rounded focus:border-green-500 focus:outline-none text-sm" />
          </div>
        </div>
      </div>

      <div className="border-t-2 border-sky-700 bg-gradient-to-r from-sky-700 via-blue-600 to-sky-700 px-8 py-4 text-white text-center text-sm">
        <p>© Koyili Hospital • Offer Letter • Annexure B9 • Version 1.0</p>
      </div>
    </div>
  );
};

export default ProfessionalB9Form;
