import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, FileText, Calendar, Shield } from 'lucide-react';

const ProfessionalD1Form = () => {
  const checklistItems = [
    'Appointment Letter',
    'Employment Agreement / Contract',
    'Joining Report',
    'Proof of Identity (Aadhaar / PAN / Passport)',
    'Proof of Address',
    'Educational Certificates & Marksheets',
    'Professional Qualification Certificates (if applicable)',
    'Medical Fitness Certificate (Annexure B8)',
    'Background Verification Report (Annexure B7)',
    'Confidentiality Declaration Form (Annexure C4)',
    'Clinical Credentialing Form (for clinical staff) (C5)',
    'Bank Account & Salary Details',
    'KYC/UAN/ESIC Mapping Sheet (Annexure D5)',
    'Nomination Forms (PF/Gratuity)',
    'Statutory Declarations (as applicable)',
    'ID Card & Uniform Issue Record (Annexure C2)',
    'Attendance & Biometric Registration Form (C3)',
    'Other Documents (Specify)'
  ];

  const [formData, setFormData] = useState({
    effective_date: '',
    emp_name: '', emp_id: '', emp_dept: '', emp_desig: '', emp_doj: '',
    checklist: checklistItems.map(() => ({ available: '', date: '', verified_by: '', remarks: '' })),
    sig_hr_name: '', sig_hr_date: '',
    sig_co_name: '', sig_co_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('d1_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const completed = formData.checklist.filter(item => item.available === 'Yes').length;
    const total = formData.checklist.length;
    setProgress(Math.round((completed / total) * 100));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('d1_form_data', JSON.stringify(updated));
  };

  const handleChecklistChange = (index, field, value) => {
    const updated = { ...formData };
    updated.checklist[index][field] = value;
    setFormData(updated);
    localStorage.setItem('d1_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'D1-Personnel-File-Checklist.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('d1_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-slate-700 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {logoData && <img src={logoData} alt="Logo" className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg object-contain" />}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
              <p className="text-gray-200 text-sm mt-1">Human Resources Department</p>
              <p className="text-gray-300 text-xs">Pallikkunnu, Talap, Kannur, Kerala</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-gray-200 mb-1">Document Classification</p>
              <p className="text-sm font-bold">PERSONNEL FILE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-8 py-4 border-b-2 border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">Annexure:</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded font-bold">D1</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div><span className="font-semibold text-gray-900">SOP:</span> D.1</div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div><span className="font-semibold text-gray-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">Completion:</span>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-gray-500 to-slate-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-gray-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-gray-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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

      <div className="px-8 py-8 border-b border-gray-200">
        <div className="inline-block px-4 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold mb-4">Personnel Management</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">PERSONNEL FILE CHECKLIST</h2>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP D.1 – Personnel File Management</span></div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 30.5, 15.2 & 15.6</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-gray-200 rounded-xl p-6 bg-gray-50">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600 font-semibold">Document Title:</span>
              <p className="text-gray-900">Personnel File Checklist</p>
            </div>
            <div>
              <span className="text-gray-600 font-semibold">Annexure Number:</span>
              <p className="text-gray-900">D1</p>
            </div>
            <div>
              <span className="text-gray-600 font-semibold">Linked SOP:</span>
              <p className="text-gray-900">SOP D.1 – Personnel File Management</p>
            </div>
            <div>
              <span className="text-gray-600 font-semibold">By-Laws Reference:</span>
              <p className="text-gray-900">Section 30.5, 15.2 & 15.6</p>
            </div>
            <div>
              <span className="text-gray-600 font-semibold">Version No.:</span>
              <p className="text-gray-900">1.0</p>
            </div>
            <div>
              <span className="text-gray-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effective_date} onChange={(e) => handleChange('effective_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Purpose</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            This Annexure provides the standardized checklist for maintaining employee personnel files at Koyili Hospital. 
            It ensures compliance with SOP D.1 and By-Laws Sections 30.5, 15.2 & 15.6 by maintaining accurate, verifiable, 
            and auditable employee records.
          </p>
        </section>

        <section className="border-2 border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Name:</label>
              <input type="text" value={formData.emp_name} onChange={(e) => handleChange('emp_name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Employee ID:</label>
              <input type="text" value={formData.emp_id} onChange={(e) => handleChange('emp_id', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Department:</label>
              <input type="text" value={formData.emp_dept} onChange={(e) => handleChange('emp_dept', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Designation:</label>
              <input type="text" value={formData.emp_desig} onChange={(e) => handleChange('emp_desig', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Joining:</label>
              <input type="date" value={formData.emp_doj} onChange={(e) => handleChange('emp_doj', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Personnel File Checklist</h3>
            <span className="text-sm text-gray-600">Items: <strong>{checklistItems.length}</strong></span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold w-12">Sl.</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Document / Record Required</th>
                  <th className="border border-gray-300 px-3 py-3 text-center font-semibold w-32">Available (Yes/No)</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold w-40">Date of Submission</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold w-40">Verified By</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {checklistItems.map((item, index) => (
                  <tr key={index} className={`border-b border-gray-300 ${formData.checklist[index]?.available === 'Yes' ? 'bg-green-50' : 'bg-white'}`}>
                    <td className="border border-gray-300 px-3 py-3 text-center font-bold text-gray-700">{index + 1}</td>
                    <td className="border border-gray-300 px-3 py-3 text-sm">{item}</td>
                    <td className="border border-gray-300 px-3 py-3 text-center">
                      <select value={formData.checklist[index]?.available || ''} 
                        onChange={(e) => handleChecklistChange(index, 'available', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500">
                        <option value="">--</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="border border-gray-300 px-3 py-3">
                      <input type="date" value={formData.checklist[index]?.date || ''} 
                        onChange={(e) => handleChecklistChange(index, 'date', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400" />
                    </td>
                    <td className="border border-gray-300 px-3 py-3">
                      <input type="text" value={formData.checklist[index]?.verified_by || ''} 
                        onChange={(e) => handleChecklistChange(index, 'verified_by', e.target.value)}
                        placeholder="Name"
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400" />
                    </td>
                    <td className="border border-gray-300 px-3 py-3">
                      <input type="text" value={formData.checklist[index]?.remarks || ''} 
                        onChange={(e) => handleChecklistChange(index, 'remarks', e.target.value)}
                        placeholder="Notes"
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">Ensure originals/copies are legible and cross-verified against Annexure D2.</p>
        </section>

        <section className="border-2 border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Signatures & Validation</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">HR Custodian (Record Maintenance)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500" />
                </div>
              </div>
            </div>
            <div className="border-t-2 border-gray-200 pt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Compliance Officer (Oversight & Audit Validation)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_co_name} onChange={(e) => handleChange('sig_co_name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_co_date} onChange={(e) => handleChange('sig_co_date', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-gray-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>HR must ensure all mandatory documents are collected, verified, and filed before confirmation of employment.</li>
            <li>Cross-verification must be conducted using Document Verification Register (Annexure D2).</li>
            <li>Missing or pending documents must be updated within 30 days of joining.</li>
            <li>Each file must be reviewed annually to ensure updated records.</li>
            <li>Personnel files must be retained for a minimum of 7 years post-employment, or longer if required by law.</li>
            <li>Non-compliance must be escalated to the HR Manager & Compliance Officer.</li>
          </ul>
        </section>
      </div>

      <div className="bg-gray-100 px-8 py-4 text-center text-xs text-gray-600 border-t-2 border-gray-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      </div>
    </div>
  );
};

export default ProfessionalD1Form;
