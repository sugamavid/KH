import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Plus, Trash2, Users, Calendar, Shield } from 'lucide-react';

const ProfessionalC2Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '',
    registerRows: [
      { emp_id: '', emp_name: '', dept: '', desig: '', uniform_details: '', no_sets: '', id_card_no: '', date_issue: '', issued_by: '', emp_sig: '', remarks: '' }
    ],
    sig_emp_name: '', sig_emp_date: '',
    sig_hr_name: '', sig_hr_desig: '', sig_hr_date: '', sig_hr_place: '',
    sig_co_name: '', sig_co_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('c2_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const totalFields = 5;
    let filled = [formData.effectiveDate, formData.sig_hr_name, formData.sig_co_name].filter(Boolean).length;
    filled += formData.registerRows.filter(r => r.emp_name && r.emp_id).length;
    setProgress(Math.min(100, Math.round((filled / (totalFields + 5)) * 100)));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('c2_form_data', JSON.stringify(updated));
  };

  const handleRowChange = (index, field, value) => {
    const updated = { ...formData };
    updated.registerRows[index][field] = value;
    setFormData(updated);
    localStorage.setItem('c2_form_data', JSON.stringify(updated));
  };

  const addRow = () => {
    const updated = { ...formData };
    updated.registerRows.push({ emp_id: '', emp_name: '', dept: '', desig: '', uniform_details: '', no_sets: '', id_card_no: '', date_issue: '', issued_by: '', emp_sig: '', remarks: '' });
    setFormData(updated);
  };

  const removeRow = (index) => {
    const updated = { ...formData };
    updated.registerRows.splice(index, 1);
    setFormData(updated);
    localStorage.setItem('c2_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'C2-Uniform-ID-Register.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('c2_form_data', JSON.stringify(data));
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
              <h2 className="text-xl font-bold">UNIFORM & ID CARD ISSUE REGISTER</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">C2</p>
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

      <div className="bg-slate-50 px-8 py-4 border-b-2 border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded font-bold">C2</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">SOP:</span> C.2</div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Progress:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-slate-500 to-gray-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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

      <div className="px-8 py-8 border-b border-slate-200">
        <div className="inline-block px-4 py-1 bg-slate-100 text-slate-800 rounded-full text-sm font-semibold mb-4">Onboarding Annexure</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">UNIFORM & ID CARD ISSUE REGISTER</h2>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP C.2 – Uniform, ID Card & Biometric Enrollment</span></div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 3.2 – Dress Code</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-slate-200 rounded-xl p-6 bg-slate-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-slate-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-slate-600 font-semibold">Document Title:</span>
              <p className="text-slate-900">Uniform & ID Card Issue Register</p>
            </div>
            <div>
              <span className="text-slate-600 font-semibold">Annexure Number:</span>
              <p className="text-slate-900">C2</p>
            </div>
            <div>
              <span className="text-slate-600 font-semibold">Linked SOP:</span>
              <p className="text-slate-900">SOP C.2 – Uniform, ID Card & Biometric Enrollment</p>
            </div>
            <div>
              <span className="text-slate-600 font-semibold">By-Laws Reference:</span>
              <p className="text-slate-900">Section 3.2 – Dress Code</p>
            </div>
            <div>
              <span className="text-slate-600 font-semibold">Version No.:</span>
              <p className="text-slate-900">1.0</p>
            </div>
            <div>
              <span className="text-slate-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effectiveDate} onChange={(e) => handleChange('effectiveDate', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent" />
            </div>
          </div>
        </section>

        <section className="border-2 border-slate-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Purpose</h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            This Annexure provides the standardized register for issuing uniforms and ID cards to employees of Koyili Hospital. 
            It ensures compliance with SOP C.2 and By-Laws Section 3.2 by safeguarding institutional identity, controlling workforce access, 
            and ensuring professional presentation. It also demonstrates compliance with workplace safety, security, and NABH/JCI audit requirements.
          </p>
        </section>

        <section className="border-2 border-slate-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900">Uniform & ID Card Issue Register</h3>
            <button onClick={addRow} className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm font-semibold">
              <Plus className="w-4 h-4" /> Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold">Sl. No.</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold">Employee ID</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold">Employee Name</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold">Department</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold">Designation</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold">Uniform Items</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold">No. of Sets</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold">ID Card No.</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold">Date of Issue</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold">Issued By</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold">Remarks</th>
                  <th className="border border-slate-300 px-3 py-2 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.registerRows.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 text-center">{index + 1}</td>
                    <td className="border border-slate-300 px-3 py-2">
                      <input type="text" value={row.emp_id} onChange={(e) => handleRowChange(index, 'emp_id', e.target.value)}
                        className="w-full px-2 py-1 border border-slate-200 rounded focus:ring-1 focus:ring-slate-400" />
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      <input type="text" value={row.emp_name} onChange={(e) => handleRowChange(index, 'emp_name', e.target.value)}
                        className="w-full px-2 py-1 border border-slate-200 rounded focus:ring-1 focus:ring-slate-400" />
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      <input type="text" value={row.dept} onChange={(e) => handleRowChange(index, 'dept', e.target.value)}
                        className="w-full px-2 py-1 border border-slate-200 rounded focus:ring-1 focus:ring-slate-400" />
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      <input type="text" value={row.desig} onChange={(e) => handleRowChange(index, 'desig', e.target.value)}
                        className="w-full px-2 py-1 border border-slate-200 rounded focus:ring-1 focus:ring-slate-400" />
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      <input type="text" value={row.uniform_details} onChange={(e) => handleRowChange(index, 'uniform_details', e.target.value)}
                        className="w-full px-2 py-1 border border-slate-200 rounded focus:ring-1 focus:ring-slate-400" />
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      <input type="text" value={row.no_sets} onChange={(e) => handleRowChange(index, 'no_sets', e.target.value)}
                        className="w-24 px-2 py-1 border border-slate-200 rounded focus:ring-1 focus:ring-slate-400" />
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      <input type="text" value={row.id_card_no} onChange={(e) => handleRowChange(index, 'id_card_no', e.target.value)}
                        className="w-full px-2 py-1 border border-slate-200 rounded focus:ring-1 focus:ring-slate-400" />
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      <input type="date" value={row.date_issue} onChange={(e) => handleRowChange(index, 'date_issue', e.target.value)}
                        className="w-full px-2 py-1 border border-slate-200 rounded focus:ring-1 focus:ring-slate-400" />
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      <input type="text" value={row.issued_by} onChange={(e) => handleRowChange(index, 'issued_by', e.target.value)}
                        className="w-full px-2 py-1 border border-slate-200 rounded focus:ring-1 focus:ring-slate-400" />
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      <input type="text" value={row.remarks} onChange={(e) => handleRowChange(index, 'remarks', e.target.value)}
                        className="w-full px-2 py-1 border border-slate-200 rounded focus:ring-1 focus:ring-slate-400" />
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
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

        <section className="border-2 border-slate-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Signatures</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">HR/Admin Custodian Name:</label>
                <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Designation:</label>
                <input type="text" value={formData.sig_hr_desig} onChange={(e) => handleChange('sig_hr_desig', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Date:</label>
                <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Place:</label>
                <input type="text" value={formData.sig_hr_place} onChange={(e) => handleChange('sig_hr_place', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500" />
              </div>
            </div>
            <div className="border-t-2 border-slate-200 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Compliance Officer Name:</label>
                  <input type="text" value={formData.sig_co_name} onChange={(e) => handleChange('sig_co_name', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_co_date} onChange={(e) => handleChange('sig_co_date', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-slate-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>HR/Admin must record all uniform & ID card issuances at the time of joining and during replacements.</li>
            <li>Uniform details must specify size, type (summer/winter/clinical coat, etc.), and count.</li>
            <li>ID card numbers must be unique and linked to the Biometric/HRMS system (Annexure C3).</li>
            <li>Employees must sign at the time of receipt to confirm accountability.</li>
            <li>Any lost/damaged uniform or ID must be logged, with replacement approval from HR Manager.</li>
            <li>Records must be reviewed quarterly by the Compliance Officer and retained for 7 years for statutory and accreditation purposes.</li>
          </ul>
        </section>
      </div>

      <div className="bg-slate-100 px-8 py-4 text-center text-xs text-slate-600 border-t-2 border-slate-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      </div>
    </div>
  );
};

export default ProfessionalC2Form;
