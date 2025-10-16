import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, FileCheck, Calendar, Shield } from 'lucide-react';

const ProfessionalD2Form = () => {
  const documentItems = [
    'Aadhaar / Passport / Voter ID',
    'PAN Card',
    'Educational Certificates',
    'Professional Qualification Certificates',
    'Medical Fitness Certificate (B8)',
    'Background Verification Report (B7)',
    'Confidentiality Declaration (C4)',
    'Clinical Credentialing Form (C5)',
    'Bank Account Proof & Salary Details',
    'KYC/UAN/ESIC Mapping Sheet (D5)',
    'Nomination Forms (PF/Gratuity)',
    'Other Documents (Specify)'
  ];

  const [formData, setFormData] = useState({
    effective_date: '',
    emp_name: '', emp_id: '', emp_dept: '', emp_desig: '', emp_doj: '',
    documents: documentItems.map(() => ({ doc_ref: '', sub_date: '', verified: '', ver_by: '', ver_date: '', remarks: '' })),
    sig_hr_name: '', sig_hr_date: '',
    sig_co_name: '', sig_co_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('d2_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const verified = formData.documents.filter(doc => doc.verified === 'Yes').length;
    const total = formData.documents.length;
    setProgress(Math.round((verified / total) * 100));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('d2_form_data', JSON.stringify(updated));
  };

  const handleDocChange = (index, field, value) => {
    const updated = { ...formData };
    updated.documents[index][field] = value;
    setFormData(updated);
    localStorage.setItem('d2_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'D2-Document-Verification.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('d2_form_data', JSON.stringify(data));
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
              <h2 className="text-xl font-bold">DOCUMENT VERIFICATION REGISTER</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">D2</p>
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

      <div className="bg-indigo-50 px-8 py-4 border-b-2 border-indigo-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-indigo-900">Annexure:</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded font-bold">D2</span>
          </div>
          <div className="w-px h-4 bg-indigo-300"></div>
          <div><span className="font-semibold text-indigo-900">SOP:</span> D.2</div>
          <div className="w-px h-4 bg-indigo-300"></div>
          <div><span className="font-semibold text-indigo-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-indigo-600">Verified:</span>
            <div className="w-32 h-2 bg-indigo-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-blue-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-indigo-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-indigo-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-indigo-200">
        <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">Personnel Management</div>
        <h2 className="text-3xl font-bold text-indigo-900 mb-3">DOCUMENT VERIFICATION REGISTER</h2>
        <div className="flex items-center gap-4 text-sm text-indigo-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP D.2 – Document Verification</span></div>
          <div className="w-px h-4 bg-indigo-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 30.5, 22.4 & 22.5</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-indigo-200 rounded-xl p-6 bg-indigo-50">
          <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-indigo-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-indigo-600 font-semibold">Document Title:</span><p className="text-indigo-900">Document Verification Register</p></div>
            <div><span className="text-indigo-600 font-semibold">Annexure Number:</span><p className="text-indigo-900">D2</p></div>
            <div><span className="text-indigo-600 font-semibold">Linked SOP:</span><p className="text-indigo-900">SOP D.2 – Document Verification</p></div>
            <div><span className="text-indigo-600 font-semibold">By-Laws Reference:</span><p className="text-indigo-900">Section 30.5, 22.4 & 22.5</p></div>
            <div><span className="text-indigo-600 font-semibold">Version No.:</span><p className="text-indigo-900">1.0</p></div>
            <div>
              <span className="text-indigo-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effective_date} onChange={(e) => handleChange('effective_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-indigo-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-indigo-900 mb-4">Purpose</h3>
          <p className="text-sm text-indigo-700 leading-relaxed">
            This Annexure provides the standardized register for recording and verifying all mandatory employee documents at Koyili Hospital. 
            It ensures compliance with SOP D.2 and By-Laws Sections 30.5, 22.4 & 22.5 by maintaining traceable, verifiable, and auditable documentation.
          </p>
        </section>

        <section className="border-2 border-indigo-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-indigo-900 mb-4">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-indigo-700 mb-2">Name:</label>
              <input type="text" value={formData.emp_name} onChange={(e) => handleChange('emp_name', e.target.value)}
                className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" /></div>
            <div><label className="block text-sm font-semibold text-indigo-700 mb-2">Employee ID:</label>
              <input type="text" value={formData.emp_id} onChange={(e) => handleChange('emp_id', e.target.value)}
                className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" /></div>
            <div><label className="block text-sm font-semibold text-indigo-700 mb-2">Department:</label>
              <input type="text" value={formData.emp_dept} onChange={(e) => handleChange('emp_dept', e.target.value)}
                className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" /></div>
            <div><label className="block text-sm font-semibold text-indigo-700 mb-2">Designation:</label>
              <input type="text" value={formData.emp_desig} onChange={(e) => handleChange('emp_desig', e.target.value)}
                className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" /></div>
            <div><label className="block text-sm font-semibold text-indigo-700 mb-2">Date of Joining:</label>
              <input type="date" value={formData.emp_doj} onChange={(e) => handleChange('emp_doj', e.target.value)}
                className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" /></div>
          </div>
        </section>

        <section className="border-2 border-indigo-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-indigo-900">Document Verification Register</h3>
            <span className="text-sm text-indigo-600">Entries: <strong>{documentItems.length}</strong></span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-indigo-700 text-white">
                  <th className="border border-indigo-300 px-3 py-3 text-left font-semibold w-12">Sl.</th>
                  <th className="border border-indigo-300 px-3 py-3 text-left font-semibold">Document Name</th>
                  <th className="border border-indigo-300 px-3 py-3 text-left font-semibold w-40">Doc Ref/No.</th>
                  <th className="border border-indigo-300 px-3 py-3 text-left font-semibold w-36">Submitted</th>
                  <th className="border border-indigo-300 px-3 py-3 text-center font-semibold w-32">Verified</th>
                  <th className="border border-indigo-300 px-3 py-3 text-left font-semibold w-36">Verified By</th>
                  <th className="border border-indigo-300 px-3 py-3 text-left font-semibold w-36">Verified Date</th>
                  <th className="border border-indigo-300 px-3 py-3 text-left font-semibold">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {documentItems.map((item, index) => (
                  <tr key={index} className={`border-b border-indigo-300 ${formData.documents[index]?.verified === 'Yes' ? 'bg-green-50' : 'bg-white'}`}>
                    <td className="border border-indigo-300 px-3 py-3 text-center font-bold text-indigo-700">{index + 1}</td>
                    <td className="border border-indigo-300 px-3 py-3 text-sm">{item}</td>
                    <td className="border border-indigo-300 px-3 py-3">
                      <input type="text" value={formData.documents[index]?.doc_ref || ''} 
                        onChange={(e) => handleDocChange(index, 'doc_ref', e.target.value)}
                        placeholder="Ref/No."
                        className="w-full px-2 py-1 border border-indigo-300 rounded focus:ring-1 focus:ring-indigo-400" />
                    </td>
                    <td className="border border-indigo-300 px-3 py-3">
                      <input type="date" value={formData.documents[index]?.sub_date || ''} 
                        onChange={(e) => handleDocChange(index, 'sub_date', e.target.value)}
                        className="w-full px-2 py-1 border border-indigo-300 rounded focus:ring-1 focus:ring-indigo-400" />
                    </td>
                    <td className="border border-indigo-300 px-3 py-3 text-center">
                      <select value={formData.documents[index]?.verified || ''} 
                        onChange={(e) => handleDocChange(index, 'verified', e.target.value)}
                        className="w-full px-2 py-1 border border-indigo-300 rounded focus:ring-1 focus:ring-indigo-400">
                        <option value="">--</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="border border-indigo-300 px-3 py-3">
                      <input type="text" value={formData.documents[index]?.ver_by || ''} 
                        onChange={(e) => handleDocChange(index, 'ver_by', e.target.value)}
                        placeholder="Name"
                        className="w-full px-2 py-1 border border-indigo-300 rounded focus:ring-1 focus:ring-indigo-400" />
                    </td>
                    <td className="border border-indigo-300 px-3 py-3">
                      <input type="date" value={formData.documents[index]?.ver_date || ''} 
                        onChange={(e) => handleDocChange(index, 'ver_date', e.target.value)}
                        className="w-full px-2 py-1 border border-indigo-300 rounded focus:ring-1 focus:ring-indigo-400" />
                    </td>
                    <td className="border border-indigo-300 px-3 py-3">
                      <input type="text" value={formData.documents[index]?.remarks || ''} 
                        onChange={(e) => handleDocChange(index, 'remarks', e.target.value)}
                        placeholder="Notes"
                        className="w-full px-2 py-1 border border-indigo-300 rounded focus:ring-1 focus:ring-indigo-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-indigo-600 mt-3">All verifications must be signed, dated, and cross-checked against supporting records.</p>
        </section>

        <section className="border-2 border-indigo-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-indigo-900 mb-4">Signatures & Validation</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-indigo-800 mb-3">HR Custodian (Verification & Record Maintenance)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-indigo-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" /></div>
                <div><label className="block text-sm font-semibold text-indigo-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-indigo-200 pt-6">
              <h4 className="font-semibold text-indigo-800 mb-3">Compliance Officer (Oversight & Audit Validation)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-indigo-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_co_name} onChange={(e) => handleChange('sig_co_name', e.target.value)}
                    className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" /></div>
                <div><label className="block text-sm font-semibold text-indigo-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_co_date} onChange={(e) => handleChange('sig_co_date', e.target.value)}
                    className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-indigo-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-indigo-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-indigo-700">
            <li>HR must verify all documents within 7 calendar days of submission.</li>
            <li>Each verification must be signed and dated by the responsible verifier.</li>
            <li>Any discrepancy must be recorded in the Remarks column and escalated immediately.</li>
            <li>The register must be reviewed quarterly by the Compliance Officer.</li>
            <li>Records must be preserved for minimum 7 years for statutory and accreditation audits.</li>
          </ul>
        </section>
      </div>

      <div className="bg-indigo-100 px-8 py-4 text-center text-xs text-indigo-600 border-t-2 border-indigo-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      </div>
    </div>
  );
};

export default ProfessionalD2Form;
