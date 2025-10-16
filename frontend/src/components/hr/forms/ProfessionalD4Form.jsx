import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Plus, Trash2, ClipboardCheck, Calendar, Shield } from 'lucide-react';

const ProfessionalD4Form = () => {
  const initialItems = [
    { req: 'Employee Wages & Statutory Deductions', location: 'Staff Notice Board' },
    { req: 'Working Hours & Shift Timings', location: 'Main Entrance' },
    { req: 'Leave Policy & Holidays', location: 'HR Notice Board' },
    { req: 'Grievance Redressal Mechanism', location: 'Staff Canteen' },
    { req: 'POSH Committee Details', location: 'All Departments' },
    { req: 'Fire Safety & Emergency Exits', location: 'All Floors' },
    { req: 'First Aid & Medical Facilities', location: 'Nursing Stations' }
  ];

  const [formData, setFormData] = useState({
    effective_date: '',
    checklist: initialItems.map(item => ({ ...item, displayed: '', verified_by: '', ver_date: '', remarks: '' })),
    sig_hr_name: '', sig_hr_date: '',
    sig_co_name: '', sig_co_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('d4_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const displayed = formData.checklist.filter(item => item.displayed === 'Yes').length;
    const total = formData.checklist.length;
    setProgress(Math.round((displayed / total) * 100));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('d4_form_data', JSON.stringify(updated));
  };

  const handleChecklistChange = (index, field, value) => {
    const updated = { ...formData };
    updated.checklist[index][field] = value;
    setFormData(updated);
    localStorage.setItem('d4_form_data', JSON.stringify(updated));
  };

  const addRow = () => {
    const updated = { ...formData };
    updated.checklist.push({ req: '', location: '', displayed: '', verified_by: '', ver_date: '', remarks: '' });
    setFormData(updated);
  };

  const removeRow = (index) => {
    if (formData.checklist.length > 1) {
      const updated = { ...formData };
      updated.checklist.splice(index, 1);
      setFormData(updated);
      localStorage.setItem('d4_form_data', JSON.stringify(updated));
    }
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'D4-Display-Board-Checklist.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('d4_form_data', JSON.stringify(data));
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
              <h2 className="text-xl font-bold">DISPLAY BOARD COMPLIANCE CHECKLIST</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">D4</p>
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

      <div className="bg-teal-50 px-8 py-4 border-b-2 border-teal-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-teal-900">Annexure:</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded font-bold">D4</span>
          </div>
          <div className="w-px h-4 bg-teal-300"></div>
          <div><span className="font-semibold text-teal-900">SOP:</span> D.4</div>
          <div className="w-px h-4 bg-teal-300"></div>
          <div><span className="font-semibold text-teal-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-teal-600">Displayed:</span>
            <div className="w-32 h-2 bg-teal-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-teal-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-teal-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-teal-200">
        <div className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-4">Compliance Management</div>
        <h2 className="text-3xl font-bold text-teal-900 mb-3">DISPLAY BOARD COMPLIANCE CHECKLIST</h2>
        <div className="flex items-center gap-4 text-sm text-teal-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP D.4 – Display Board & Public Notices Compliance</span></div>
          <div className="w-px h-4 bg-teal-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 22.5 & 30.4</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-teal-200 rounded-xl p-6 bg-teal-50">
          <h3 className="text-lg font-bold text-teal-900 mb-4 flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-teal-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-teal-600 font-semibold">Document Title:</span><p className="text-teal-900">Display Board Compliance Checklist</p></div>
            <div><span className="text-teal-600 font-semibold">Annexure Number:</span><p className="text-teal-900">D4</p></div>
            <div><span className="text-teal-600 font-semibold">Linked SOP:</span><p className="text-teal-900">SOP D.4 – Display Board & Public Notices Compliance</p></div>
            <div><span className="text-teal-600 font-semibold">By-Laws Reference:</span><p className="text-teal-900">Section 22.5, 30.4</p></div>
            <div><span className="text-teal-600 font-semibold">Version No.:</span><p className="text-teal-900">1.0</p></div>
            <div>
              <span className="text-teal-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effective_date} onChange={(e) => handleChange('effective_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-teal-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-teal-900 mb-4">Purpose</h3>
          <p className="text-sm text-teal-700 leading-relaxed">
            This Annexure ensures that all mandatory display requirements are maintained at Koyili Hospital as per labour laws, 
            statutory regulations, and accreditation standards. It demonstrates compliance with SOP D.4 and By-Laws Sections 22.5 & 30.4.
          </p>
        </section>

        <section className="border-2 border-teal-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-teal-900">Display Board Compliance Checklist</h3>
            <div className="flex items-center gap-3">
              <span className="text-sm text-teal-600">Items: <strong>{formData.checklist.length}</strong></span>
              <button onClick={addRow} className="px-3 py-1 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-xs font-semibold flex items-center gap-1">
                <Plus className="w-3 h-3" /> Add Row
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="border border-teal-300 px-3 py-3 text-left font-semibold w-12">Sl.</th>
                  <th className="border border-teal-300 px-3 py-3 text-left font-semibold">Display Requirement</th>
                  <th className="border border-teal-300 px-3 py-3 text-left font-semibold w-48">Location (To be Displayed)</th>
                  <th className="border border-teal-300 px-3 py-3 text-center font-semibold w-32">Displayed</th>
                  <th className="border border-teal-300 px-3 py-3 text-left font-semibold w-40">Verified By</th>
                  <th className="border border-teal-300 px-3 py-3 text-left font-semibold w-36">Verification Date</th>
                  <th className="border border-teal-300 px-3 py-3 text-left font-semibold">Remarks</th>
                  <th className="border border-teal-300 px-3 py-3 text-center font-semibold w-12">Del</th>
                </tr>
              </thead>
              <tbody>
                {formData.checklist.map((item, index) => (
                  <tr key={index} className={`border-b border-teal-300 ${item.displayed === 'Yes' ? 'bg-green-50' : 'bg-white'}`}>
                    <td className="border border-teal-300 px-3 py-3 text-center font-bold text-teal-700">{index + 1}</td>
                    <td className="border border-teal-300 px-3 py-3">
                      <input type="text" value={item.req} 
                        onChange={(e) => handleChecklistChange(index, 'req', e.target.value)}
                        className="w-full px-2 py-1 border border-teal-300 rounded focus:ring-1 focus:ring-teal-400" />
                    </td>
                    <td className="border border-teal-300 px-3 py-3">
                      <input type="text" value={item.location} 
                        onChange={(e) => handleChecklistChange(index, 'location', e.target.value)}
                        className="w-full px-2 py-1 border border-teal-300 rounded focus:ring-1 focus:ring-teal-400" />
                    </td>
                    <td className="border border-teal-300 px-3 py-3 text-center">
                      <select value={item.displayed} 
                        onChange={(e) => handleChecklistChange(index, 'displayed', e.target.value)}
                        className="w-full px-2 py-1 border border-teal-300 rounded focus:ring-1 focus:ring-teal-400">
                        <option value="">--</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="border border-teal-300 px-3 py-3">
                      <input type="text" value={item.verified_by} 
                        onChange={(e) => handleChecklistChange(index, 'verified_by', e.target.value)}
                        placeholder="Name"
                        className="w-full px-2 py-1 border border-teal-300 rounded focus:ring-1 focus:ring-teal-400" />
                    </td>
                    <td className="border border-teal-300 px-3 py-3">
                      <input type="date" value={item.ver_date} 
                        onChange={(e) => handleChecklistChange(index, 'ver_date', e.target.value)}
                        className="w-full px-2 py-1 border border-teal-300 rounded focus:ring-1 focus:ring-teal-400" />
                    </td>
                    <td className="border border-teal-300 px-3 py-3">
                      <input type="text" value={item.remarks} 
                        onChange={(e) => handleChecklistChange(index, 'remarks', e.target.value)}
                        placeholder="Notes"
                        className="w-full px-2 py-1 border border-teal-300 rounded focus:ring-1 focus:ring-teal-400" />
                    </td>
                    <td className="border border-teal-300 px-3 py-3 text-center">
                      <button onClick={() => removeRow(index)} className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-2 border-teal-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-teal-900 mb-4">Signatures & Verification</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-teal-800 mb-3">HR / Admin Custodian (Maintenance of Displays)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-teal-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500" /></div>
                <div><label className="block text-sm font-semibold text-teal-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-teal-200 pt-6">
              <h4 className="font-semibold text-teal-800 mb-3">Compliance Officer (Oversight & Audit Verification)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-teal-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_co_name} onChange={(e) => handleChange('sig_co_name', e.target.value)}
                    className="w-full px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500" /></div>
                <div><label className="block text-sm font-semibold text-teal-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_co_date} onChange={(e) => handleChange('sig_co_date', e.target.value)}
                    className="w-full px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-teal-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-teal-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
            <li>All display boards must be updated quarterly or whenever there is a change in policy/law.</li>
            <li>HR/Admin must verify physical display at each location monthly.</li>
            <li>Any missing or damaged display must be restored within 48 hours.</li>
            <li>Records must be retained for minimum 3 years for labour inspections and audits.</li>
          </ul>
        </section>
      </div>

      <div className="bg-teal-100 px-8 py-4 text-center text-xs text-teal-600 border-t-2 border-teal-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      </div>
    </div>
  );
};

export default ProfessionalD4Form;
