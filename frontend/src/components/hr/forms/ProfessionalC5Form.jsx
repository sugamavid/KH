import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Plus, Trash2, Award, Calendar, Shield } from 'lucide-react';

const ProfessionalC5Form = () => {
  const [formData, setFormData] = useState({
    eff_date: '',
    full_name: '', emp_id: '', dob: '', contact: '', email: '', address: '',
    profDetails: [{ qual: '', inst: '', year: '', reg_no: '', valid_till: '', verified_by: '', remarks: '' }],
    empHistory: [{ hospital: '', desig: '', from_date: '', to_date: '', reason: '', verified: '' }],
    privileges: [{ specialty: '', procedures: '', experience: '', docs_attached: '', approved: '' }],
    decl_name: '', decl_name2: '', decl_date: '',
    hr_name: '', hr_date: '', co_name: '', co_date: '', md_name: '', md_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('c5_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const totalFields = 8;
    let filled = [formData.full_name, formData.contact, formData.decl_name, formData.hr_name, formData.md_name].filter(Boolean).length;
    setProgress(Math.min(100, Math.round((filled / totalFields) * 100)));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('c5_form_data', JSON.stringify(updated));
  };

  const handleArrayChange = (arrayName, index, field, value) => {
    const updated = { ...formData };
    updated[arrayName][index][field] = value;
    setFormData(updated);
    localStorage.setItem('c5_form_data', JSON.stringify(updated));
  };

  const addRow = (arrayName, template) => {
    const updated = { ...formData };
    updated[arrayName].push(template);
    setFormData(updated);
  };

  const removeRow = (arrayName, index) => {
    const updated = { ...formData };
    updated[arrayName].splice(index, 1);
    setFormData(updated);
    localStorage.setItem('c5_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'C5-Clinical-Credentialing.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('c5_form_data', JSON.stringify(data));
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
              <h2 className="text-xl font-bold">CLINICAL CREDENTIALING APPLICATION FORM</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">C5</p>
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

      <div className="bg-neutral-50 px-8 py-4 border-b-2 border-neutral-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-900">Annexure:</span>
            <span className="bg-neutral-100 text-neutral-800 px-3 py-1 rounded font-bold">C5</span>
          </div>
          <div className="w-px h-4 bg-neutral-300"></div>
          <div><span className="font-semibold text-neutral-900">SOP:</span> C.5</div>
          <div className="w-px h-4 bg-neutral-300"></div>
          <div><span className="font-semibold text-neutral-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-600">Progress:</span>
            <div className="w-32 h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-neutral-500 to-gray-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-neutral-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-neutral-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-neutral-600 text-white rounded-lg hover:bg-neutral-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-neutral-200">
        <div className="inline-block px-4 py-1 bg-neutral-100 text-neutral-800 rounded-full text-sm font-semibold mb-4">Clinical Annexure</div>
        <h2 className="text-3xl font-bold text-neutral-900 mb-3">CLINICAL CREDENTIALING APPLICATION FORM</h2>
        <div className="flex items-center gap-4 text-sm text-neutral-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP C.5 – Clinical Credentialing & Privileging</span></div>
          <div className="w-px h-4 bg-neutral-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 2.4(a) & Section 6</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-neutral-200 rounded-xl p-6 bg-neutral-50">
          <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-neutral-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-neutral-600 font-semibold">Document Title:</span><p className="text-neutral-900">Clinical Credentialing Application Form</p></div>
            <div><span className="text-neutral-600 font-semibold">Annexure Number:</span><p className="text-neutral-900">C5</p></div>
            <div><span className="text-neutral-600 font-semibold">Linked SOP:</span><p className="text-neutral-900">SOP C.5 – Clinical Credentialing & Privileging</p></div>
            <div><span className="text-neutral-600 font-semibold">By-Laws Reference:</span><p className="text-neutral-900">Section 2.4(a), Section 6</p></div>
            <div><span className="text-neutral-600 font-semibold">Version No.:</span><p className="text-neutral-900">1.0</p></div>
            <div>
              <span className="text-neutral-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.eff_date} onChange={(e) => handleChange('eff_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-neutral-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-neutral-900 mb-4">Personal Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Full Name:</label>
              <input type="text" value={formData.full_name} onChange={(e) => handleChange('full_name', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
            <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Employee ID:</label>
              <input type="text" value={formData.emp_id} onChange={(e) => handleChange('emp_id', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
            <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Date of Birth:</label>
              <input type="date" value={formData.dob} onChange={(e) => handleChange('dob', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
            <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Contact:</label>
              <input type="text" value={formData.contact} onChange={(e) => handleChange('contact', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
            <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Email:</label>
              <input type="text" value={formData.email} onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
            <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Address:</label>
              <textarea value={formData.address} onChange={(e) => handleChange('address', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" rows="2"></textarea></div>
          </div>
        </section>

        <section className="border-2 border-neutral-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-neutral-900">Professional Details</h3>
            <button onClick={() => addRow('profDetails', { qual: '', inst: '', year: '', reg_no: '', valid_till: '', verified_by: '', remarks: '' })}
              className="px-4 py-2 bg-neutral-600 text-white rounded-lg hover:bg-neutral-700 transition-colors flex items-center gap-2 text-sm font-semibold">
              <Plus className="w-4 h-4" /> Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Sl.</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Qualification</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Institution</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Year</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Registration No.</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Valid Till</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Verified By</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Remarks</th>
                  <th className="border border-neutral-300 px-3 py-2 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.profDetails.map((row, index) => (
                  <tr key={index} className="hover:bg-neutral-50">
                    <td className="border border-neutral-300 px-3 py-2 text-center">{index + 1}</td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.qual} onChange={(e) => handleArrayChange('profDetails', index, 'qual', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.inst} onChange={(e) => handleArrayChange('profDetails', index, 'inst', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.year} onChange={(e) => handleArrayChange('profDetails', index, 'year', e.target.value)}
                        className="w-24 px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.reg_no} onChange={(e) => handleArrayChange('profDetails', index, 'reg_no', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="date" value={row.valid_till} onChange={(e) => handleArrayChange('profDetails', index, 'valid_till', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.verified_by} onChange={(e) => handleArrayChange('profDetails', index, 'verified_by', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.remarks} onChange={(e) => handleArrayChange('profDetails', index, 'remarks', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2 text-center">
                      <button onClick={() => removeRow('profDetails', index)} className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-2 border-neutral-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-neutral-900">Employment History</h3>
            <button onClick={() => addRow('empHistory', { hospital: '', desig: '', from_date: '', to_date: '', reason: '', verified: '' })}
              className="px-4 py-2 bg-neutral-600 text-white rounded-lg hover:bg-neutral-700 transition-colors flex items-center gap-2 text-sm font-semibold">
              <Plus className="w-4 h-4" /> Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Sl.</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Hospital/Institution</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Designation</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">From</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">To</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Reason for Leaving</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Verified By</th>
                  <th className="border border-neutral-300 px-3 py-2 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.empHistory.map((row, index) => (
                  <tr key={index} className="hover:bg-neutral-50">
                    <td className="border border-neutral-300 px-3 py-2 text-center">{index + 1}</td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.hospital} onChange={(e) => handleArrayChange('empHistory', index, 'hospital', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.desig} onChange={(e) => handleArrayChange('empHistory', index, 'desig', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="date" value={row.from_date} onChange={(e) => handleArrayChange('empHistory', index, 'from_date', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="date" value={row.to_date} onChange={(e) => handleArrayChange('empHistory', index, 'to_date', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.reason} onChange={(e) => handleArrayChange('empHistory', index, 'reason', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.verified} onChange={(e) => handleArrayChange('empHistory', index, 'verified', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2 text-center">
                      <button onClick={() => removeRow('empHistory', index)} className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-2 border-neutral-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-neutral-900">Clinical Privileges Requested</h3>
            <button onClick={() => addRow('privileges', { specialty: '', procedures: '', experience: '', docs_attached: '', approved: '' })}
              className="px-4 py-2 bg-neutral-600 text-white rounded-lg hover:bg-neutral-700 transition-colors flex items-center gap-2 text-sm font-semibold">
              <Plus className="w-4 h-4" /> Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Sl.</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Specialty/Department</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Procedures/Privileges</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Experience</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Docs Attached</th>
                  <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Approved By</th>
                  <th className="border border-neutral-300 px-3 py-2 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.privileges.map((row, index) => (
                  <tr key={index} className="hover:bg-neutral-50">
                    <td className="border border-neutral-300 px-3 py-2 text-center">{index + 1}</td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.specialty} onChange={(e) => handleArrayChange('privileges', index, 'specialty', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.procedures} onChange={(e) => handleArrayChange('privileges', index, 'procedures', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.experience} onChange={(e) => handleArrayChange('privileges', index, 'experience', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.docs_attached} onChange={(e) => handleArrayChange('privileges', index, 'docs_attached', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2">
                      <input type="text" value={row.approved} onChange={(e) => handleArrayChange('privileges', index, 'approved', e.target.value)}
                        className="w-full px-2 py-1 border border-neutral-200 rounded" /></td>
                    <td className="border border-neutral-300 px-3 py-2 text-center">
                      <button onClick={() => removeRow('privileges', index)} className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-2 border-amber-300 rounded-xl p-6 bg-amber-50">
          <h3 className="text-lg font-bold text-neutral-900 mb-4">Declaration by Applicant</h3>
          <p className="text-sm text-neutral-700 mb-4">
            I, <input type="text" value={formData.decl_name} onChange={(e) => handleChange('decl_name', e.target.value)}
              className="inline-block w-64 px-2 py-1 border-b-2 border-neutral-400 bg-transparent" placeholder="Name" />,
            hereby declare that the information provided above is true and correct to the best of my knowledge.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Name:</label>
              <input type="text" value={formData.decl_name2} onChange={(e) => handleChange('decl_name2', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
            <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Date:</label>
              <input type="date" value={formData.decl_date} onChange={(e) => handleChange('decl_date', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
          </div>
        </section>

        <section className="border-2 border-neutral-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-neutral-900 mb-4">Approval Workflow</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-neutral-800 mb-3">HR Manager (Verification of Documents)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Name:</label>
                  <input type="text" value={formData.hr_name} onChange={(e) => handleChange('hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
                <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Date:</label>
                  <input type="date" value={formData.hr_date} onChange={(e) => handleChange('hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-neutral-200 pt-6">
              <h4 className="font-semibold text-neutral-800 mb-3">Compliance Officer (Regulatory Validation)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Name:</label>
                  <input type="text" value={formData.co_name} onChange={(e) => handleChange('co_name', e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
                <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Date:</label>
                  <input type="date" value={formData.co_date} onChange={(e) => handleChange('co_date', e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-neutral-200 pt-6">
              <h4 className="font-semibold text-neutral-800 mb-3">Medical Director (Final Approval of Clinical Privileges)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Name:</label>
                  <input type="text" value={formData.md_name} onChange={(e) => handleChange('md_name', e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
                <div><label className="block text-sm font-semibold text-neutral-700 mb-2">Date:</label>
                  <input type="date" value={formData.md_date} onChange={(e) => handleChange('md_date', e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-neutral-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-neutral-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-neutral-700">
            <li>This form must be completed at the time of joining and every renewal cycle.</li>
            <li>HR must verify all documents and cross-check with issuing authorities.</li>
            <li>Compliance Officer must validate regulatory requirements.</li>
            <li>The Medical Director must review clinical privileges and approve only after competence assessment.</li>
            <li>Completed forms must be filed in the Credentialing File and linked with Annexure D1.</li>
            <li>Records must be retained for minimum 10 years to meet NABH/JCI audit requirements.</li>
          </ul>
        </section>
      </div>

      <div className="bg-neutral-100 px-8 py-4 text-center text-xs text-neutral-600 border-t-2 border-neutral-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      
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
            <p className="text-sm font-bold">Form C5</p>
            <p className="text-xs text-blue-200">Clinical Credentialing</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfessionalC5Form;
