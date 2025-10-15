import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, FileText, Calendar, Shield } from 'lucide-react';

const ProfessionalF1Form = () => {
  const [formData, setFormData] = useState({
    effective_date: '',
    emp_name: '', emp_id: '', emp_dept: '', emp_desig: '', emp_doj: '',
    leave_type: '', from_date: '', to_date: '', total_days: '', reason: '',
    contact_during_leave: '', address_during_leave: '',
    handover_to: '', handover_details: '',
    sig_emp_name: '', sig_emp_date: '',
    sig_dept_name: '', sig_dept_date: '', sig_dept_remarks: '',
    sig_hr_name: '', sig_hr_date: '', sig_hr_remarks: ''
  });

  const [logoData, setLogoData] = useState('');

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('f1_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('f1_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'F1-Leave-Application.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('f1_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl">
      {/* Compact NABH-Compliant Header with Blue Gradient */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-8 py-6">
        <div className="flex items-center justify-between gap-6">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            {logoData && <img src={logoData} alt="Koyili Hospital Logo" className="w-24 h-24 bg-white rounded-lg p-2 shadow-xl object-contain" />}
          </div>
          
          {/* Hospital Details - Center */}
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-bold tracking-wide mb-1">KOYILI HOSPITAL</h1>
            <p className="text-blue-200 text-sm font-semibold">Human Resources Department</p>
            <p className="text-blue-300 text-xs">NABH Accredited • Pallikkunnu, Talap, Kannur, Kerala</p>
            <div className="mt-3 pt-3 border-t border-blue-400/30">
              <h2 className="text-xl font-bold">LEAVE APPLICATION FORM</h2>
            </div>
          </div>
          
          {/* Document Control - Right */}
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">F1</p>
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

      {/* Document Control Strip */}
      <div className="bg-blue-50 px-8 py-3 border-b-2 border-blue-900 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs font-semibold text-blue-900">
          <span>📋 Leave Management</span>
          <div className="w-px h-4 bg-blue-300"></div>
          <span>SOP F.1 – Leave Application & Approval</span>
          <div className="w-px h-4 bg-blue-300"></div>
          <span>By-Laws Section 6.1-6.9</span>
        </div>
      </div>

      <div className="bg-white border-b-2 border-green-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-green-200">
        <div className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">Leave Management</div>
        <h2 className="text-3xl font-bold text-green-900 mb-3">LEAVE APPLICATION FORM</h2>
        <div className="flex items-center gap-4 text-sm text-green-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP F.1 – Leave Application & Approval</span></div>
          <div className="w-px h-4 bg-green-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 6.1-6.9</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
          <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-green-600 font-semibold">Document Title:</span><p className="text-green-900">Leave Application Form</p></div>
            <div><span className="text-green-600 font-semibold">Annexure Number:</span><p className="text-green-900">F1</p></div>
            <div><span className="text-green-600 font-semibold">Linked SOP:</span><p className="text-green-900">SOP F.1 – Leave Application & Approval</p></div>
            <div><span className="text-green-600 font-semibold">By-Laws Reference:</span><p className="text-green-900">Section 6.1-6.9</p></div>
            <div><span className="text-green-600 font-semibold">Version No.:</span><p className="text-green-900">1.0</p></div>
            <div>
              <span className="text-green-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effective_date} onChange={(e) => handleChange('effective_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-900 mb-4">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-green-700 mb-2">Name:</label>
              <input type="text" value={formData.emp_name} onChange={(e) => handleChange('emp_name', e.target.value)}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
            <div><label className="block text-sm font-semibold text-green-700 mb-2">Employee ID:</label>
              <input type="text" value={formData.emp_id} onChange={(e) => handleChange('emp_id', e.target.value)}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
            <div><label className="block text-sm font-semibold text-green-700 mb-2">Department:</label>
              <input type="text" value={formData.emp_dept} onChange={(e) => handleChange('emp_dept', e.target.value)}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
            <div><label className="block text-sm font-semibold text-green-700 mb-2">Designation:</label>
              <input type="text" value={formData.emp_desig} onChange={(e) => handleChange('emp_desig', e.target.value)}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
            <div><label className="block text-sm font-semibold text-green-700 mb-2">Date of Joining:</label>
              <input type="date" value={formData.emp_doj} onChange={(e) => handleChange('emp_doj', e.target.value)}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
          </div>
        </section>

        <section className="border-2 border-green-200 rounded-xl p-6 bg-amber-50">
          <h3 className="text-lg font-bold text-green-900 mb-4">Leave Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-green-700 mb-2">Leave Type:</label>
              <select value={formData.leave_type} onChange={(e) => handleChange('leave_type', e.target.value)}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500">
                <option value="">-- Select --</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Earned Leave">Earned Leave</option>
                <option value="Emergency Leave">Emergency Leave</option>
                <option value="Maternity Leave">Maternity Leave</option>
                <option value="Paternity Leave">Paternity Leave</option>
                <option value="Bereavement Leave">Bereavement Leave</option>
              </select>
            </div>
            <div><label className="block text-sm font-semibold text-green-700 mb-2">Total Days:</label>
              <input type="number" value={formData.total_days} onChange={(e) => handleChange('total_days', e.target.value)}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
            <div><label className="block text-sm font-semibold text-green-700 mb-2">From Date:</label>
              <input type="date" value={formData.from_date} onChange={(e) => handleChange('from_date', e.target.value)}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
            <div><label className="block text-sm font-semibold text-green-700 mb-2">To Date:</label>
              <input type="date" value={formData.to_date} onChange={(e) => handleChange('to_date', e.target.value)}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
            <div className="col-span-2"><label className="block text-sm font-semibold text-green-700 mb-2">Reason for Leave:</label>
              <textarea value={formData.reason} onChange={(e) => handleChange('reason', e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"></textarea>
            </div>
          </div>
        </section>

        <section className="border-2 border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-900 mb-4">Contact During Leave</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-green-700 mb-2">Contact Number:</label>
              <input type="text" value={formData.contact_during_leave} onChange={(e) => handleChange('contact_during_leave', e.target.value)}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
            <div><label className="block text-sm font-semibold text-green-700 mb-2">Address During Leave:</label>
              <input type="text" value={formData.address_during_leave} onChange={(e) => handleChange('address_during_leave', e.target.value)}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
          </div>
        </section>

        <section className="border-2 border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-900 mb-4">Work Handover Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-green-700 mb-2">Handed Over To:</label>
              <input type="text" value={formData.handover_to} onChange={(e) => handleChange('handover_to', e.target.value)}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
            <div><label className="block text-sm font-semibold text-green-700 mb-2">Handover Details:</label>
              <textarea value={formData.handover_details} onChange={(e) => handleChange('handover_details', e.target.value)}
                rows="2"
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"></textarea>
            </div>
          </div>
        </section>

        <section className="border-2 border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-900 mb-4">Signatures & Approvals</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-800 mb-3">Employee (Applicant)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-green-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_emp_name} onChange={(e) => handleChange('sig_emp_name', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
                <div><label className="block text-sm font-semibold text-green-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_emp_date} onChange={(e) => handleChange('sig_emp_date', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-green-200 pt-6">
              <h4 className="font-semibold text-green-800 mb-3">Department Head (Recommendation)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-green-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_dept_name} onChange={(e) => handleChange('sig_dept_name', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
                <div><label className="block text-sm font-semibold text-green-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_dept_date} onChange={(e) => handleChange('sig_dept_date', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
                <div className="col-span-2"><label className="block text-sm font-semibold text-green-700 mb-2">Remarks:</label>
                  <textarea value={formData.sig_dept_remarks} onChange={(e) => handleChange('sig_dept_remarks', e.target.value)}
                    rows="2"
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"></textarea>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-green-200 pt-6">
              <h4 className="font-semibold text-green-800 mb-3">HR Manager (Final Approval)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-green-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
                <div><label className="block text-sm font-semibold text-green-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
                <div className="col-span-2"><label className="block text-sm font-semibold text-green-700 mb-2">Remarks:</label>
                  <textarea value={formData.sig_hr_remarks} onChange={(e) => handleChange('sig_hr_remarks', e.target.value)}
                    rows="2"
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"></textarea>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-green-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-green-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-green-700">
            <li>Leave application must be submitted minimum 7 days in advance (except emergency).</li>
            <li>All fields must be completed accurately for processing.</li>
            <li>Work handover must be completed before availing leave.</li>
            <li>Approved leave must be recorded in Leave Entry Log (Annexure E3).</li>
          </ul>
        </section>
      </div>

      {/* Standardized NABH-Compliant Footer */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-8 py-4 border-t-4 border-blue-900">
        <div className="flex items-center justify-between text-sm">
          <span className="text-blue-900 font-semibold">© Koyili Hospital • NABH Accredited • Confidential • Version-controlled</span>
          <span className="text-blue-700 font-bold">Form F1 – Leave Application Form</span>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalF1Form;