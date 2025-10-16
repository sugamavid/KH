import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Plus, Trash2, Lock, Calendar, Shield } from 'lucide-react';

const ProfessionalC3Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '',
    employeeName: '', employeeId: '', employeeDepartment: '', employeeDesignation: '', employeeJoiningDate: '',
    accessRequests: [
      { system: '', access_type: '', reason: '', requested_by: '', approved_by: '', req_date: '', req_remarks: '' }
    ],
    declarationName: '', declarationName2: '', declarationDate: '',
    hrName: '', hrDate: '', itName: '', itDate: '', complianceName: '', complianceDate: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('c3_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const totalFields = 8;
    let filled = [formData.employeeName, formData.employeeId, formData.declarationName, formData.hrName, formData.itName].filter(Boolean).length;
    setProgress(Math.min(100, Math.round((filled / totalFields) * 100)));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('c3_form_data', JSON.stringify(updated));
  };

  const handleRequestChange = (index, field, value) => {
    const updated = { ...formData };
    updated.accessRequests[index][field] = value;
    setFormData(updated);
    localStorage.setItem('c3_form_data', JSON.stringify(updated));
  };

  const addRequest = () => {
    const updated = { ...formData };
    updated.accessRequests.push({ system: '', access_type: '', reason: '', requested_by: '', approved_by: '', req_date: '', req_remarks: '' });
    setFormData(updated);
  };

  const removeRequest = (index) => {
    const updated = { ...formData };
    updated.accessRequests.splice(index, 1);
    setFormData(updated);
    localStorage.setItem('c3_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'C3-Biometric-Access.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('c3_form_data', JSON.stringify(data));
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
              <h2 className="text-xl font-bold">HRMS / BIOMETRIC ACCESS REQUEST FORM</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">C3</p>
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

      <div className="bg-zinc-50 px-8 py-4 border-b-2 border-zinc-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900">Annexure:</span>
            <span className="bg-zinc-100 text-zinc-800 px-3 py-1 rounded font-bold">C3</span>
          </div>
          <div className="w-px h-4 bg-zinc-300"></div>
          <div><span className="font-semibold text-zinc-900">SOP:</span> C.3</div>
          <div className="w-px h-4 bg-zinc-300"></div>
          <div><span className="font-semibold text-zinc-900">Version:</span> 1.0</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-600">Progress:</span>
            <div className="w-32 h-2 bg-zinc-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-zinc-500 to-stone-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-zinc-900">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-zinc-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-stone-600 text-white rounded-lg hover:bg-stone-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-zinc-200">
        <div className="inline-block px-4 py-1 bg-zinc-100 text-zinc-800 rounded-full text-sm font-semibold mb-4">Security Annexure</div>
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">HRMS / BIOMETRIC ACCESS REQUEST FORM</h2>
        <div className="flex items-center gap-4 text-sm text-zinc-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP C.3 – HRMS & Biometric Access Management</span></div>
          <div className="w-px h-4 bg-zinc-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 15.4 & 17.1-17.4</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-zinc-200 rounded-xl p-6 bg-zinc-50">
          <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-zinc-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-zinc-600 font-semibold">Document Title:</span>
              <p className="text-zinc-900">HRMS / Biometric Access Request Form</p>
            </div>
            <div>
              <span className="text-zinc-600 font-semibold">Annexure Number:</span>
              <p className="text-zinc-900">C3</p>
            </div>
            <div>
              <span className="text-zinc-600 font-semibold">Linked SOP:</span>
              <p className="text-zinc-900">SOP C.3 – HRMS & Biometric Access Management</p>
            </div>
            <div>
              <span className="text-zinc-600 font-semibold">By-Laws Reference:</span>
              <p className="text-zinc-900">Section 15.4, 17.1-17.4</p>
            </div>
            <div>
              <span className="text-zinc-600 font-semibold">Version No.:</span>
              <p className="text-zinc-900">1.0</p>
            </div>
            <div>
              <span className="text-zinc-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effectiveDate} onChange={(e) => handleChange('effectiveDate', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-zinc-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-zinc-900 mb-4">Purpose</h3>
          <p className="text-sm text-zinc-700 leading-relaxed">
            This Annexure provides the standardized form for requesting HRMS and Biometric system access at Koyili Hospital. 
            It ensures compliance with SOP C.3 and By-Laws Section 15.4 & Section 17 by safeguarding employee identity, 
            ensuring secure access, and maintaining accountability in workforce management.
          </p>
        </section>

        <section className="border-2 border-zinc-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-zinc-900 mb-4">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Name:</label>
              <input type="text" value={formData.employeeName} onChange={(e) => handleChange('employeeName', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Employee ID:</label>
              <input type="text" value={formData.employeeId} onChange={(e) => handleChange('employeeId', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Department:</label>
              <input type="text" value={formData.employeeDepartment} onChange={(e) => handleChange('employeeDepartment', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Designation:</label>
              <input type="text" value={formData.employeeDesignation} onChange={(e) => handleChange('employeeDesignation', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Date of Joining:</label>
              <input type="date" value={formData.employeeJoiningDate} onChange={(e) => handleChange('employeeJoiningDate', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-zinc-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-zinc-900">Access Request Details</h3>
            <button onClick={addRequest} className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 transition-colors flex items-center gap-2 text-sm font-semibold">
              <Plus className="w-4 h-4" /> Add Request
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-zinc-100">
                  <th className="border border-zinc-300 px-3 py-2 text-left font-semibold">Sl. No.</th>
                  <th className="border border-zinc-300 px-3 py-2 text-left font-semibold">System / Device</th>
                  <th className="border border-zinc-300 px-3 py-2 text-left font-semibold">Access Type</th>
                  <th className="border border-zinc-300 px-3 py-2 text-left font-semibold">Reason</th>
                  <th className="border border-zinc-300 px-3 py-2 text-left font-semibold">Requested By</th>
                  <th className="border border-zinc-300 px-3 py-2 text-left font-semibold">Approved By</th>
                  <th className="border border-zinc-300 px-3 py-2 text-left font-semibold">Date</th>
                  <th className="border border-zinc-300 px-3 py-2 text-left font-semibold">Remarks</th>
                  <th className="border border-zinc-300 px-3 py-2 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.accessRequests.map((req, index) => (
                  <tr key={index} className="hover:bg-zinc-50">
                    <td className="border border-zinc-300 px-3 py-2 text-center">{index + 1}</td>
                    <td className="border border-zinc-300 px-3 py-2">
                      <input type="text" value={req.system} onChange={(e) => handleRequestChange(index, 'system', e.target.value)}
                        className="w-full px-2 py-1 border border-zinc-200 rounded focus:ring-1 focus:ring-zinc-400" />
                    </td>
                    <td className="border border-zinc-300 px-3 py-2">
                      <select value={req.access_type} onChange={(e) => handleRequestChange(index, 'access_type', e.target.value)}
                        className="w-full px-2 py-1 border border-zinc-200 rounded focus:ring-1 focus:ring-zinc-400">
                        <option value="">--</option>
                        <option value="New">New</option>
                        <option value="Modification">Modification</option>
                        <option value="Deactivation">Deactivation</option>
                      </select>
                    </td>
                    <td className="border border-zinc-300 px-3 py-2">
                      <input type="text" value={req.reason} onChange={(e) => handleRequestChange(index, 'reason', e.target.value)}
                        className="w-full px-2 py-1 border border-zinc-200 rounded focus:ring-1 focus:ring-zinc-400" />
                    </td>
                    <td className="border border-zinc-300 px-3 py-2">
                      <input type="text" value={req.requested_by} onChange={(e) => handleRequestChange(index, 'requested_by', e.target.value)}
                        className="w-full px-2 py-1 border border-zinc-200 rounded focus:ring-1 focus:ring-zinc-400" />
                    </td>
                    <td className="border border-zinc-300 px-3 py-2">
                      <input type="text" value={req.approved_by} onChange={(e) => handleRequestChange(index, 'approved_by', e.target.value)}
                        className="w-full px-2 py-1 border border-zinc-200 rounded focus:ring-1 focus:ring-zinc-400" />
                    </td>
                    <td className="border border-zinc-300 px-3 py-2">
                      <input type="date" value={req.req_date} onChange={(e) => handleRequestChange(index, 'req_date', e.target.value)}
                        className="w-full px-2 py-1 border border-zinc-200 rounded focus:ring-1 focus:ring-zinc-400" />
                    </td>
                    <td className="border border-zinc-300 px-3 py-2">
                      <input type="text" value={req.req_remarks} onChange={(e) => handleRequestChange(index, 'req_remarks', e.target.value)}
                        className="w-full px-2 py-1 border border-zinc-200 rounded focus:ring-1 focus:ring-zinc-400" />
                    </td>
                    <td className="border border-zinc-300 px-3 py-2 text-center">
                      <button onClick={() => removeRequest(index)} className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-2 border-zinc-200 rounded-xl p-6 bg-amber-50">
          <h3 className="text-lg font-bold text-zinc-900 mb-4">Declaration by Employee</h3>
          <p className="text-sm text-zinc-700 mb-4">
            I, <input type="text" value={formData.declarationName} onChange={(e) => handleChange('declarationName', e.target.value)}
              className="inline-block w-64 px-2 py-1 border-b-2 border-zinc-400 focus:border-zinc-600 bg-transparent" placeholder="Name" />,
            acknowledge that I will use the HRMS/Biometric access provided to me solely for official purposes. I agree to comply with the hospital's IT security policies, 
            confidentiality obligations, and disciplinary rules.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Name:</label>
              <input type="text" value={formData.declarationName2} onChange={(e) => handleChange('declarationName2', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Date:</label>
              <input type="date" value={formData.declarationDate} onChange={(e) => handleChange('declarationDate', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-zinc-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-zinc-900 mb-4">Approval Workflow</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-zinc-800 mb-3">HR Manager (Access Validation)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Name:</label>
                  <input type="text" value={formData.hrName} onChange={(e) => handleChange('hrName', e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Date:</label>
                  <input type="date" value={formData.hrDate} onChange={(e) => handleChange('hrDate', e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
                </div>
              </div>
            </div>
            <div className="border-t-2 border-zinc-200 pt-6">
              <h4 className="font-semibold text-zinc-800 mb-3">IT Administrator (Access Creation / Modification / Revocation)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Name:</label>
                  <input type="text" value={formData.itName} onChange={(e) => handleChange('itName', e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Date:</label>
                  <input type="date" value={formData.itDate} onChange={(e) => handleChange('itDate', e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
                </div>
              </div>
            </div>
            <div className="border-t-2 border-zinc-200 pt-6">
              <h4 className="font-semibold text-zinc-800 mb-3">Compliance Officer (Oversight & Audit Check)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Name:</label>
                  <input type="text" value={formData.complianceName} onChange={(e) => handleChange('complianceName', e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Date:</label>
                  <input type="date" value={formData.complianceDate} onChange={(e) => handleChange('complianceDate', e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-zinc-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-zinc-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700">
            <li>This form must be completed at the time of joining or whenever there is a change in access.</li>
            <li>Access must be created only after HR and IT approvals.</li>
            <li>Any access revocation must be logged within 24 hours of separation or transfer.</li>
            <li>Completed forms must be filed in the Personnel File (Annexure D1).</li>
            <li>Records must be retained for 7 years for statutory and accreditation audits.</li>
          </ul>
        </section>
      </div>

      <div className="bg-zinc-100 px-8 py-4 text-center text-xs text-zinc-600 border-t-2 border-zinc-200">
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
            <p className="text-sm font-bold">Form C3</p>
            <p className="text-xs text-blue-200">IT Access Request</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfessionalC3Form;
