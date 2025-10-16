import React, { useState, useEffect } from 'react';
import { Building, Save, Upload, Download, Users, CheckCircle, Calendar, FileText, Shield } from 'lucide-react';

const ProfessionalA2Form = () => {
  const [formData, setFormData] = useState({
    effective_date: '',
    approval_date: '',
    effective_from: '',
    version_ref: '',
    chk_exec: false,
    chk_clin: false,
    chk_admin: false,
    chk_sup: false,
    org_chart: '',
    departments: [
      { name: '', head: '', reporting: '', subordinates: '' },
      { name: '', head: '', reporting: '', subordinates: '' },
      { name: '', head: '', reporting: '', subordinates: '' }
    ],
    dept_list: '',
    sig_hod_name: '',
    sig_hod_date: '',
    sig_hr_name: '',
    sig_hr_date: '',
    sig_co_name: '',
    sig_co_date: '',
    sig_ceo_name: '',
    sig_ceo_date: ''
  });

  const [logoData, setLogoData] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Embed hospital logo
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);

    // Load saved data
    const saved = localStorage.getItem('a2_form_data');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    // Calculate progress
    const totalFields = 20;
    let filledFields = 0;
    if (formData.effective_date) filledFields++;
    if (formData.approval_date) filledFields++;
    if (formData.effective_from) filledFields++;
    if (formData.version_ref) filledFields++;
    if (formData.chk_exec || formData.chk_clin || formData.chk_admin || formData.chk_sup) filledFields += 2;
    if (formData.org_chart) filledFields += 2;
    if (formData.departments.some(d => d.name)) filledFields += 3;
    if (formData.sig_hod_name) filledFields += 2;
    if (formData.sig_hr_name) filledFields += 2;
    if (formData.sig_co_name) filledFields += 2;
    if (formData.sig_ceo_name) filledFields += 2;

    setProgress(Math.round((filledFields / totalFields) * 100));
  }, [formData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('a2_form_data', JSON.stringify(updated));
  };

  const handleDepartmentChange = (index, field, value) => {
    const updated = { ...formData };
    updated.departments[index][field] = value;
    setFormData(updated);
    localStorage.setItem('a2_form_data', JSON.stringify(updated));
  };

  const addDepartment = () => {
    const updated = { ...formData };
    updated.departments.push({ name: '', head: '', reporting: '', subordinates: '' });
    setFormData(updated);
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'A2-Organizational-Structure.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('a2_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl">
      {/* Professional Header */}
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
              <h2 className="text-xl font-bold">FINALIZED ORGANIZATIONAL STRUCTURE TEMPLATE</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">A2</p>
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

      {/* Document Metadata Bar */}
      <div className="bg-slate-50 px-8 py-4 border-b-2 border-blue-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Annexure:</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold">A2</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">SOP:</span> A.1</div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div><span className="font-semibold text-slate-900">Version:</span> 1.0</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Progress:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-green-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-bold text-slate-900">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="bg-white border-b-2 border-slate-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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

      {/* Document Title */}
      <div className="px-8 py-8 border-b border-slate-200">
        <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">Administrative Annexure</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">FINALIZED ORGANIZATIONAL STRUCTURE TEMPLATE</h2>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Effective Date: 10/15/2025</span>
          </div>
          <div className="w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Approval Authority: CEO / Medical Director</span>
          </div>
        </div>

      {/* Form Content */}
      <div className="px-8 py-8 space-y-8">
        {/* Purpose */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-blue-700">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Purpose</h3>
          </div>
          <p className="text-[15px] leading-relaxed text-slate-800 text-justify">
            This Annexure captures the finalized and board-approved organizational structure of Koyili Hospital. It serves as the authoritative reference for hierarchies, reporting lines, and departmental assignments.
          </p>
        </section>

        {/* Organizational Overview */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-blue-700">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Organizational Overview</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Date of Approval *</label>
              <input
                type="date"
                value={formData.approval_date}
                onChange={(e) => handleChange('approval_date', e.target.value)}
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Effective From *</label>
              <input
                type="date"
                value={formData.effective_from}
                onChange={(e) => handleChange('effective_from', e.target.value)}
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Version Reference No. *</label>
              <input
                type="text"
                value={formData.version_ref}
                onChange={(e) => handleChange('version_ref', e.target.value)}
                placeholder="e.g., ORG-2025-001"
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </section>

        {/* Hospital-wide Hierarchy */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-blue-700">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Hospital-wide Hierarchy (Tick Applicable)</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-blue-400 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={formData.chk_exec}
                onChange={(e) => handleChange('chk_exec', e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded mt-0.5"
              />
              <div>
                <span className="font-semibold text-slate-900">Executive Leadership Team</span>
                <p className="text-sm text-slate-600 mt-1">CEO, Medical Director, COO, CFO</p>
              </div>
            </label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-blue-400 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={formData.chk_clin}
                onChange={(e) => handleChange('chk_clin', e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded mt-0.5"
              />
              <div>
                <span className="font-semibold text-slate-900">Clinical Departments</span>
                <p className="text-sm text-slate-600 mt-1">Medicine, Surgery, Nursing, Diagnostics, etc.</p>
              </div>
            </label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-blue-400 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={formData.chk_admin}
                onChange={(e) => handleChange('chk_admin', e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded mt-0.5"
              />
              <div>
                <span className="font-semibold text-slate-900">Administrative Functions</span>
                <p className="text-sm text-slate-600 mt-1">HR, Finance, Operations, IT, Compliance, etc.</p>
              </div>
            </label>
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-blue-400 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={formData.chk_sup}
                onChange={(e) => handleChange('chk_sup', e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded mt-0.5"
              />
              <div>
                <span className="font-semibold text-slate-900">Support Services</span>
                <p className="text-sm text-slate-600 mt-1">Facilities, Security, Housekeeping, Transport, etc.</p>
              </div>
            </label>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Attach (or paste) approved organizational chart below:</label>
            <textarea
              value={formData.org_chart}
              onChange={(e) => handleChange('org_chart', e.target.value)}
              placeholder="Paste ASCII / description or note the file name of the attached chart"
              rows={4}
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>
        </section>

        {/* Departmental Structure */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-blue-700">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Departmental Structure & Reporting Lines</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-slate-300">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Department Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Head of Department</th>
                  <th className="px-4 py-3 text-left font-semibold">Reporting Authority</th>
                  <th className="px-4 py-3 text-left font-semibold">Direct Subordinates & Roles</th>
                </tr>
              </thead>
              <tbody>
                {formData.departments.map((dept, index) => (
                  <tr key={index} className="border-b border-slate-300">
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={dept.name}
                        onChange={(e) => handleDepartmentChange(index, 'name', e.target.value)}
                        placeholder="Department name"
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={dept.head}
                        onChange={(e) => handleDepartmentChange(index, 'head', e.target.value)}
                        placeholder="HOD name"
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={dept.reporting}
                        onChange={(e) => handleDepartmentChange(index, 'reporting', e.target.value)}
                        placeholder="Reports to"
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={dept.subordinates}
                        onChange={(e) => handleDepartmentChange(index, 'subordinates', e.target.value)}
                        placeholder="Subordinate roles"
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={addDepartment} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
            + Add Department
          </button>
          <div className="mt-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Or paste full departmental list:</label>
            <textarea
              value={formData.dept_list}
              onChange={(e) => handleChange('dept_list', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>
        </section>

        {/* Approval Workflow */}
        <section>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-blue-700">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Approval Workflow — Signatures</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">Head of Department</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" value={formData.sig_hod_name} onChange={(e) => handleChange('sig_hod_name', e.target.value)} placeholder="Name" className="px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
                <input type="date" value={formData.sig_hod_date} onChange={(e) => handleChange('sig_hod_date', e.target.value)} className="px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
              </div>
            </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">HR Manager</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)} placeholder="Name" className="px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
                <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)} className="px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
              </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">Compliance Officer</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" value={formData.sig_co_name} onChange={(e) => handleChange('sig_co_name', e.target.value)} placeholder="Name" className="px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
                <input type="date" value={formData.sig_co_date} onChange={(e) => handleChange('sig_co_date', e.target.value)} className="px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
              </div>
            <div className="border-2 border-slate-300 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-3">CEO / Medical Director (Final Authority)</p>
              <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" value={formData.sig_ceo_name} onChange={(e) => handleChange('sig_ceo_name', e.target.value)} placeholder="Name" className="px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
                <input type="date" value={formData.sig_ceo_date} onChange={(e) => handleChange('sig_ceo_date', e.target.value)} className="px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Notes */}
        <section className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <p className="text-sm text-slate-800 leading-relaxed">
            <strong>Note:</strong> This Annexure shall be read in conjunction with SOP A.1 (Organizational Structure Review) and By-Laws Section 2.1 – Organizational Hierarchy. No structural modifications shall be implemented without this documented approval.
          </p>
        </section>
      </div>

      {/* Professional Footer */}
      
    
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
            <p className="text-sm font-bold">Form A2</p>
            <p className="text-xs text-blue-200">Policy Dissemination Log</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalA2Form;