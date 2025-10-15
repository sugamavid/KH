import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Heart, Calendar, Shield } from 'lucide-react';

const ProfessionalF3Form = () => {
  const [formData, setFormData] = useState({
    effective_date: '',
    leave_category: '',
    emp_name: '', emp_id: '', emp_dept: '', emp_desig: '', emp_doj: '',
    leave_from: '', leave_to: '', total_days: '',
    maternity_edd: '', maternity_preg_weeks: '',
    paternity_child_dob: '', paternity_spouse_name: '',
    bereavement_deceased_name: '', bereavement_relation: '', bereavement_date: '',
    reason_details: '', supporting_docs: '',
    sig_emp_name: '', sig_emp_date: '',
    sig_dept_name: '', sig_dept_date: '',
    sig_hr_name: '', sig_hr_date: ''
  });

  const [logoData, setLogoData] = useState('');

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('f3_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('f3_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'F3-Special-Leave-Declaration.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('f3_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-violet-700 via-purple-600 to-violet-600 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {logoData && <img src={logoData} alt="Logo" className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg object-contain" />}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
              <p className="text-violet-200 text-sm mt-1">Human Resources Department</p>
              <p className="text-violet-300 text-xs">Pallikkunnu, Talap, Kannur, Kerala</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-violet-200 mb-1">Special Leave</p>
              <p className="text-sm font-bold">DECLARATION</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-violet-50 px-8 py-4 border-b-2 border-violet-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-violet-900">Annexure:</span>
            <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded font-bold">F3</span>
          </div>
          <div className="w-px h-4 bg-violet-300"></div>
          <div><span className="font-semibold text-violet-900">SOP:</span> F.3</div>
          <div className="w-px h-4 bg-violet-300"></div>
          <div><span className="font-semibold text-violet-900">Version:</span> 1.0</div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-violet-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-violet-200">
        <div className="inline-block px-4 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-semibold mb-4">Special Leave</div>
        <h2 className="text-3xl font-bold text-violet-900 mb-3">MATERNITY / PATERNITY / BEREAVEMENT LEAVE DECLARATION</h2>
        <div className="flex items-center gap-4 text-sm text-violet-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP F.3 – Special Leave Policy</span></div>
          <div className="w-px h-4 bg-violet-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 6.4-6.5</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-violet-200 rounded-xl p-6 bg-violet-50">
          <h3 className="text-lg font-bold text-violet-900 mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-violet-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-violet-600 font-semibold">Document Title:</span><p className="text-violet-900">Maternity / Paternity / Bereavement Leave Declaration</p></div>
            <div><span className="text-violet-600 font-semibold">Annexure Number:</span><p className="text-violet-900">F3</p></div>
            <div><span className="text-violet-600 font-semibold">Linked SOP:</span><p className="text-violet-900">SOP F.3 – Special Leave Policy</p></div>
            <div><span className="text-violet-600 font-semibold">By-Laws Reference:</span><p className="text-violet-900">Section 6.4-6.5</p></div>
            <div><span className="text-violet-600 font-semibold">Version No.:</span><p className="text-violet-900">1.0</p></div>
            <div>
              <span className="text-violet-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effective_date} onChange={(e) => handleChange('effective_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-violet-200 rounded-xl p-6 bg-amber-50">
          <h3 className="text-lg font-bold text-violet-900 mb-4">Leave Category</h3>
          <div>
            <label className="block text-sm font-semibold text-violet-700 mb-2">Select Leave Type:</label>
            <select value={formData.leave_category} onChange={(e) => handleChange('leave_category', e.target.value)}
              className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500">
              <option value="">-- Select --</option>
              <option value="Maternity Leave">Maternity Leave</option>
              <option value="Paternity Leave">Paternity Leave</option>
              <option value="Bereavement Leave">Bereavement Leave</option>
            </select>
          </div>
        </section>

        <section className="border-2 border-violet-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-violet-900 mb-4">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-violet-700 mb-2">Name:</label>
              <input type="text" value={formData.emp_name} onChange={(e) => handleChange('emp_name', e.target.value)}
                className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
            <div><label className="block text-sm font-semibold text-violet-700 mb-2">Employee ID:</label>
              <input type="text" value={formData.emp_id} onChange={(e) => handleChange('emp_id', e.target.value)}
                className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
            <div><label className="block text-sm font-semibold text-violet-700 mb-2">Department:</label>
              <input type="text" value={formData.emp_dept} onChange={(e) => handleChange('emp_dept', e.target.value)}
                className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
            <div><label className="block text-sm font-semibold text-violet-700 mb-2">Designation:</label>
              <input type="text" value={formData.emp_desig} onChange={(e) => handleChange('emp_desig', e.target.value)}
                className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
            <div><label className="block text-sm font-semibold text-violet-700 mb-2">Date of Joining:</label>
              <input type="date" value={formData.emp_doj} onChange={(e) => handleChange('emp_doj', e.target.value)}
                className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
          </div>
        </section>

        <section className="border-2 border-violet-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-violet-900 mb-4">Leave Period</h3>
          <div className="grid grid-cols-3 gap-4">
            <div><label className="block text-sm font-semibold text-violet-700 mb-2">From Date:</label>
              <input type="date" value={formData.leave_from} onChange={(e) => handleChange('leave_from', e.target.value)}
                className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
            <div><label className="block text-sm font-semibold text-violet-700 mb-2">To Date:</label>
              <input type="date" value={formData.leave_to} onChange={(e) => handleChange('leave_to', e.target.value)}
                className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
            <div><label className="block text-sm font-semibold text-violet-700 mb-2">Total Days:</label>
              <input type="number" value={formData.total_days} onChange={(e) => handleChange('total_days', e.target.value)}
                className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
          </div>
        </section>

        {formData.leave_category === 'Maternity Leave' && (
          <section className="border-2 border-pink-300 rounded-xl p-6 bg-pink-50">
            <h3 className="text-lg font-bold text-violet-900 mb-4">Maternity Leave Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-semibold text-violet-700 mb-2">Expected Delivery Date (EDD):</label>
                <input type="date" value={formData.maternity_edd} onChange={(e) => handleChange('maternity_edd', e.target.value)}
                  className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500" /></div>
              <div><label className="block text-sm font-semibold text-violet-700 mb-2">Pregnancy Weeks:</label>
                <input type="number" value={formData.maternity_preg_weeks} onChange={(e) => handleChange('maternity_preg_weeks', e.target.value)}
                  placeholder="e.g., 36"
                  className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500" /></div>
            </div>
          </section>
        )}

        {formData.leave_category === 'Paternity Leave' && (
          <section className="border-2 border-blue-300 rounded-xl p-6 bg-blue-50">
            <h3 className="text-lg font-bold text-violet-900 mb-4">Paternity Leave Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-semibold text-violet-700 mb-2">Child Date of Birth:</label>
                <input type="date" value={formData.paternity_child_dob} onChange={(e) => handleChange('paternity_child_dob', e.target.value)}
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
              <div><label className="block text-sm font-semibold text-violet-700 mb-2">Spouse Name:</label>
                <input type="text" value={formData.paternity_spouse_name} onChange={(e) => handleChange('paternity_spouse_name', e.target.value)}
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
            </div>
          </section>
        )}

        {formData.leave_category === 'Bereavement Leave' && (
          <section className="border-2 border-gray-400 rounded-xl p-6 bg-gray-50">
            <h3 className="text-lg font-bold text-violet-900 mb-4">Bereavement Leave Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-semibold text-violet-700 mb-2">Deceased Name:</label>
                <input type="text" value={formData.bereavement_deceased_name} onChange={(e) => handleChange('bereavement_deceased_name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-gray-500" /></div>
              <div><label className="block text-sm font-semibold text-violet-700 mb-2">Relationship:</label>
                <input type="text" value={formData.bereavement_relation} onChange={(e) => handleChange('bereavement_relation', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-gray-500" /></div>
              <div><label className="block text-sm font-semibold text-violet-700 mb-2">Date of Death:</label>
                <input type="date" value={formData.bereavement_date} onChange={(e) => handleChange('bereavement_date', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-gray-500" /></div>
            </div>
          </section>
        )}

        <section className="border-2 border-violet-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-violet-900 mb-4">Additional Information</h3>
          <div className="space-y-4">
            <div><label className="block text-sm font-semibold text-violet-700 mb-2">Detailed Reason / Declaration:</label>
              <textarea value={formData.reason_details} onChange={(e) => handleChange('reason_details', e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500"></textarea>
            </div>
            <div><label className="block text-sm font-semibold text-violet-700 mb-2">Supporting Documents Attached:</label>
              <input type="text" value={formData.supporting_docs} onChange={(e) => handleChange('supporting_docs', e.target.value)}
                placeholder="Medical certificate, death certificate, etc."
                className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
          </div>
        </section>

        <section className="border-2 border-violet-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-violet-900 mb-4">Signatures & Approvals</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-violet-800 mb-3">Employee (Declaration)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-violet-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_emp_name} onChange={(e) => handleChange('sig_emp_name', e.target.value)}
                    className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
                <div><label className="block text-sm font-semibold text-violet-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_emp_date} onChange={(e) => handleChange('sig_emp_date', e.target.value)}
                    className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-violet-200 pt-6">
              <h4 className="font-semibold text-violet-800 mb-3">Department Head (Recommendation)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-violet-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_dept_name} onChange={(e) => handleChange('sig_dept_name', e.target.value)}
                    className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
                <div><label className="block text-sm font-semibold text-violet-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_dept_date} onChange={(e) => handleChange('sig_dept_date', e.target.value)}
                    className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-violet-200 pt-6">
              <h4 className="font-semibold text-violet-800 mb-3">HR Manager (Final Approval)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-violet-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
                <div><label className="block text-sm font-semibold text-violet-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-violet-300 rounded-lg focus:ring-2 focus:ring-violet-500" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-violet-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-violet-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-violet-700">
            <li>Maternity Leave: Application must be submitted 4 weeks before EDD with medical certificate.</li>
            <li>Paternity Leave: Application must be submitted within 7 days of child birth with birth certificate.</li>
            <li>Bereavement Leave: Must be applied within 24 hours with death certificate.</li>
            <li>All supporting documents are mandatory for approval.</li>
          </ul>
        </section>
      </div>

      <div className="bg-violet-100 px-8 py-4 text-center text-xs text-violet-600 border-t-2 border-violet-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      </div>
    </div>
  );
};

export default ProfessionalF3Form;