import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Award, Calendar, Shield } from 'lucide-react';

const ProfessionalE5Form = () => {
  const [formData, setFormData] = useState({
    effective_date: '',
    emp_name: '', emp_id: '', emp_dept: '', emp_desig: '', emp_doj: '',
    work_date: '', work_day: '', work_from: '', work_to: '', work_hours: '', work_reason: '',
    comp_off_date: '', comp_off_applied: '',
    sig_emp_name: '', sig_emp_date: '',
    sig_dept_name: '', sig_dept_date: '',
    sig_hr_name: '', sig_hr_date: ''
  });

  const [logoData, setLogoData] = useState('');

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('e5_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('e5_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'E5-Comp-Off-Application.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('e5_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-cyan-700 via-blue-600 to-cyan-600 text-white p-8">
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
              <p className="text-xs text-cyan-200 mb-1">Leave Application</p>
              <p className="text-sm font-bold">COMP OFF</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cyan-50 px-8 py-4 border-b-2 border-cyan-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyan-900">Annexure:</span>
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded font-bold">E5</span>
          </div>
          <div className="w-px h-4 bg-cyan-300"></div>
          <div><span className="font-semibold text-cyan-900">SOP:</span> E.5</div>
          <div className="w-px h-4 bg-cyan-300"></div>
          <div><span className="font-semibold text-cyan-900">Version:</span> 1.0</div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-cyan-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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

      <div className="px-8 py-8 border-b border-cyan-200">
        <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold mb-4">Leave Management</div>
        <h2 className="text-3xl font-bold text-cyan-900 mb-3">COMPENSATORY OFF APPLICATION FORM</h2>
        <div className="flex items-center gap-4 text-sm text-cyan-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP E.5 – Compensatory Off Policy</span></div>
          <div className="w-px h-4 bg-cyan-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 6.7</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-cyan-200 rounded-xl p-6 bg-cyan-50">
          <h3 className="text-lg font-bold text-cyan-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-cyan-600 font-semibold">Document Title:</span><p className="text-cyan-900">Compensatory Off Application Form</p></div>
            <div><span className="text-cyan-600 font-semibold">Annexure Number:</span><p className="text-cyan-900">E5</p></div>
            <div><span className="text-cyan-600 font-semibold">Linked SOP:</span><p className="text-cyan-900">SOP E.5 – Compensatory Off Policy</p></div>
            <div><span className="text-cyan-600 font-semibold">By-Laws Reference:</span><p className="text-cyan-900">Section 6.7</p></div>
            <div><span className="text-cyan-600 font-semibold">Version No.:</span><p className="text-cyan-900">1.0</p></div>
            <div>
              <span className="text-cyan-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effective_date} onChange={(e) => handleChange('effective_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-cyan-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-cyan-900 mb-4">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Name:</label>
              <input type="text" value={formData.emp_name} onChange={(e) => handleChange('emp_name', e.target.value)}
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
            <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Employee ID:</label>
              <input type="text" value={formData.emp_id} onChange={(e) => handleChange('emp_id', e.target.value)}
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
            <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Department:</label>
              <input type="text" value={formData.emp_dept} onChange={(e) => handleChange('emp_dept', e.target.value)}
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
            <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Designation:</label>
              <input type="text" value={formData.emp_desig} onChange={(e) => handleChange('emp_desig', e.target.value)}
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
            <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Date of Joining:</label>
              <input type="date" value={formData.emp_doj} onChange={(e) => handleChange('emp_doj', e.target.value)}
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
          </div>
        </section>

        <section className="border-2 border-cyan-200 rounded-xl p-6 bg-amber-50">
          <h3 className="text-lg font-bold text-cyan-900 mb-4">Details of Work on Holiday/Weekly Off</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Date of Work:</label>
              <input type="date" value={formData.work_date} onChange={(e) => handleChange('work_date', e.target.value)}
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
            <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Day:</label>
              <select value={formData.work_day} onChange={(e) => handleChange('work_day', e.target.value)}
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500">
                <option value="">-- Select --</option>
                <option value="Holiday">Holiday</option>
                <option value="Weekly Off">Weekly Off</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Work From (Time):</label>
              <input type="time" value={formData.work_from} onChange={(e) => handleChange('work_from', e.target.value)}
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
            <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Work To (Time):</label>
              <input type="time" value={formData.work_to} onChange={(e) => handleChange('work_to', e.target.value)}
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
            <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Total Hours Worked:</label>
              <input type="text" value={formData.work_hours} onChange={(e) => handleChange('work_hours', e.target.value)}
                placeholder="e.g., 8 hrs"
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
            <div className="col-span-2"><label className="block text-sm font-semibold text-cyan-700 mb-2">Reason for Working:</label>
              <textarea value={formData.work_reason} onChange={(e) => handleChange('work_reason', e.target.value)}
                placeholder="Describe the reason for working on holiday/weekly off"
                rows="3"
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500"></textarea>
            </div>
          </div>
        </section>

        <section className="border-2 border-cyan-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-cyan-900 mb-4">Compensatory Off Request</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Requested Comp Off Date:</label>
              <input type="date" value={formData.comp_off_date} onChange={(e) => handleChange('comp_off_date', e.target.value)}
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
            <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Application Date:</label>
              <input type="date" value={formData.comp_off_applied} onChange={(e) => handleChange('comp_off_applied', e.target.value)}
                className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
          </div>
        </section>

        <section className="border-2 border-cyan-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-cyan-900 mb-4">Signatures & Approvals</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-cyan-800 mb-3">Employee (Applicant)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_emp_name} onChange={(e) => handleChange('sig_emp_name', e.target.value)}
                    className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
                <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_emp_date} onChange={(e) => handleChange('sig_emp_date', e.target.value)}
                    className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-cyan-200 pt-6">
              <h4 className="font-semibold text-cyan-800 mb-3">Department Head (Verification & Approval)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_dept_name} onChange={(e) => handleChange('sig_dept_name', e.target.value)}
                    className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
                <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_dept_date} onChange={(e) => handleChange('sig_dept_date', e.target.value)}
                    className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-cyan-200 pt-6">
              <h4 className="font-semibold text-cyan-800 mb-3">HR Manager (Final Approval & Record)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
                <div><label className="block text-sm font-semibold text-cyan-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-cyan-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-cyan-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-cyan-700">
            <li>Comp off must be applied within 7 days of working on holiday/weekly off.</li>
            <li>The comp off must be availed within 30 days of the work date.</li>
            <li>Comp off is granted only if employee worked minimum 8 hours on the specified day.</li>
            <li>Department head must verify and approve based on attendance records.</li>
            <li>HR must maintain records for minimum 3 years for audits.</li>
          </ul>
        </section>
      </div>

      <div className="bg-cyan-100 px-8 py-4 text-center text-xs text-cyan-600 border-t-2 border-cyan-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      </div>
    </div>
  );
};

export default ProfessionalE5Form;