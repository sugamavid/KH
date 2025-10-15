import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, AlertCircle, Calendar, Shield } from 'lucide-react';

const ProfessionalF2Form = () => {
  const [formData, setFormData] = useState({
    effective_date: '',
    emp_name: '', emp_id: '', emp_dept: '', emp_desig: '',
    emergency_date: '', emergency_time: '', emergency_nature: '',
    leave_from: '', leave_to: '', total_days: '',
    reason_details: '', supporting_docs: '',
    informed_to: '', informed_at: '', informed_method: '',
    sig_emp_name: '', sig_emp_date: '',
    sig_dept_name: '', sig_dept_date: '', sig_dept_action: '',
    sig_hr_name: '', sig_hr_date: '', sig_hr_action: ''
  });

  const [logoData, setLogoData] = useState('');

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('f2_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('f2_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'F2-Emergency-Leave-Escalation.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('f2_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-red-700 via-orange-600 to-red-600 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {logoData && <img src={logoData} alt="Logo" className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg object-contain" />}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
              <p className="text-red-200 text-sm mt-1">Human Resources Department</p>
              <p className="text-red-300 text-xs">Pallikkunnu, Talap, Kannur, Kerala</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-red-200 mb-1">URGENT</p>
              <p className="text-sm font-bold">EMERGENCY LEAVE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-50 px-8 py-4 border-b-2 border-red-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-red-900">Annexure:</span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded font-bold">F2</span>
          </div>
          <div className="w-px h-4 bg-red-300"></div>
          <div><span className="font-semibold text-red-900">SOP:</span> F.2</div>
          <div className="w-px h-4 bg-red-300"></div>
          <div><span className="font-semibold text-red-900">Version:</span> 1.0</div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-red-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-red-200">
        <div className="inline-block px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">Emergency Leave</div>
        <h2 className="text-3xl font-bold text-red-900 mb-3">EMERGENCY LEAVE ESCALATION NOTE</h2>
        <div className="flex items-center gap-4 text-sm text-red-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP F.2 – Emergency Leave Protocol</span></div>
          <div className="w-px h-4 bg-red-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 6.3</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-red-200 rounded-xl p-6 bg-red-50">
          <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-red-600 font-semibold">Document Title:</span><p className="text-red-900">Emergency Leave Escalation Note</p></div>
            <div><span className="text-red-600 font-semibold">Annexure Number:</span><p className="text-red-900">F2</p></div>
            <div><span className="text-red-600 font-semibold">Linked SOP:</span><p className="text-red-900">SOP F.2 – Emergency Leave Protocol</p></div>
            <div><span className="text-red-600 font-semibold">By-Laws Reference:</span><p className="text-red-900">Section 6.3 – Emergency Leave</p></div>
            <div><span className="text-red-600 font-semibold">Version No.:</span><p className="text-red-900">1.0</p></div>
            <div>
              <span className="text-red-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effective_date} onChange={(e) => handleChange('effective_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-red-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-red-900 mb-4">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-red-700 mb-2">Name:</label>
              <input type="text" value={formData.emp_name} onChange={(e) => handleChange('emp_name', e.target.value)}
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
            <div><label className="block text-sm font-semibold text-red-700 mb-2">Employee ID:</label>
              <input type="text" value={formData.emp_id} onChange={(e) => handleChange('emp_id', e.target.value)}
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
            <div><label className="block text-sm font-semibold text-red-700 mb-2">Department:</label>
              <input type="text" value={formData.emp_dept} onChange={(e) => handleChange('emp_dept', e.target.value)}
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
            <div><label className="block text-sm font-semibold text-red-700 mb-2">Designation:</label>
              <input type="text" value={formData.emp_desig} onChange={(e) => handleChange('emp_desig', e.target.value)}
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
          </div>
        </section>

        <section className="border-2 border-amber-300 rounded-xl p-6 bg-amber-50">
          <h3 className="text-lg font-bold text-red-900 mb-4">Emergency Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-red-700 mb-2">Date of Emergency:</label>
              <input type="date" value={formData.emergency_date} onChange={(e) => handleChange('emergency_date', e.target.value)}
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
            <div><label className="block text-sm font-semibold text-red-700 mb-2">Time:</label>
              <input type="time" value={formData.emergency_time} onChange={(e) => handleChange('emergency_time', e.target.value)}
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
            <div className="col-span-2"><label className="block text-sm font-semibold text-red-700 mb-2">Nature of Emergency:</label>
              <select value={formData.emergency_nature} onChange={(e) => handleChange('emergency_nature', e.target.value)}
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500">
                <option value="">-- Select --</option>
                <option value="Medical Emergency">Medical Emergency</option>
                <option value="Family Emergency">Family Emergency</option>
                <option value="Death in Family">Death in Family</option>
                <option value="Natural Disaster">Natural Disaster</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </section>

        <section className="border-2 border-red-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-red-900 mb-4">Leave Period</h3>
          <div className="grid grid-cols-3 gap-4">
            <div><label className="block text-sm font-semibold text-red-700 mb-2">From Date:</label>
              <input type="date" value={formData.leave_from} onChange={(e) => handleChange('leave_from', e.target.value)}
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
            <div><label className="block text-sm font-semibold text-red-700 mb-2">To Date:</label>
              <input type="date" value={formData.leave_to} onChange={(e) => handleChange('leave_to', e.target.value)}
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
            <div><label className="block text-sm font-semibold text-red-700 mb-2">Total Days:</label>
              <input type="number" value={formData.total_days} onChange={(e) => handleChange('total_days', e.target.value)}
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
            <div className="col-span-3"><label className="block text-sm font-semibold text-red-700 mb-2">Detailed Reason:</label>
              <textarea value={formData.reason_details} onChange={(e) => handleChange('reason_details', e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500"></textarea>
            </div>
            <div className="col-span-3"><label className="block text-sm font-semibold text-red-700 mb-2">Supporting Documents (if any):</label>
              <input type="text" value={formData.supporting_docs} onChange={(e) => handleChange('supporting_docs', e.target.value)}
                placeholder="List of documents submitted"
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
          </div>
        </section>

        <section className="border-2 border-red-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-red-900 mb-4">Notification Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-red-700 mb-2">Informed To:</label>
              <input type="text" value={formData.informed_to} onChange={(e) => handleChange('informed_to', e.target.value)}
                placeholder="Supervisor/Manager name"
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
            <div><label className="block text-sm font-semibold text-red-700 mb-2">Informed At:</label>
              <input type="datetime-local" value={formData.informed_at} onChange={(e) => handleChange('informed_at', e.target.value)}
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
            <div><label className="block text-sm font-semibold text-red-700 mb-2">Method:</label>
              <select value={formData.informed_method} onChange={(e) => handleChange('informed_method', e.target.value)}
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500">
                <option value="">-- Select --</option>
                <option value="Phone Call">Phone Call</option>
                <option value="Email">Email</option>
                <option value="SMS">SMS</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="In Person">In Person</option>
              </select>
            </div>
          </div>
        </section>

        <section className="border-2 border-red-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-red-900 mb-4">Approvals & Actions</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-red-800 mb-3">Employee (Declaration)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-red-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_emp_name} onChange={(e) => handleChange('sig_emp_name', e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
                <div><label className="block text-sm font-semibold text-red-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_emp_date} onChange={(e) => handleChange('sig_emp_date', e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-red-200 pt-6">
              <h4 className="font-semibold text-red-800 mb-3">Department Head (Acknowledgment & Recommendation)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-red-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_dept_name} onChange={(e) => handleChange('sig_dept_name', e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
                <div><label className="block text-sm font-semibold text-red-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_dept_date} onChange={(e) => handleChange('sig_dept_date', e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
                <div className="col-span-2"><label className="block text-sm font-semibold text-red-700 mb-2">Action/Remarks:</label>
                  <textarea value={formData.sig_dept_action} onChange={(e) => handleChange('sig_dept_action', e.target.value)}
                    rows="2"
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500"></textarea>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-red-200 pt-6">
              <h4 className="font-semibold text-red-800 mb-3">HR Manager (Final Approval & Recording)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-red-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
                <div><label className="block text-sm font-semibold text-red-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500" /></div>
                <div className="col-span-2"><label className="block text-sm font-semibold text-red-700 mb-2">Action/Remarks:</label>
                  <textarea value={formData.sig_hr_action} onChange={(e) => handleChange('sig_hr_action', e.target.value)}
                    rows="2"
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500"></textarea>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-red-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-red-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-red-700">
            <li>This form must be filled within 24 hours of taking emergency leave.</li>
            <li>Supporting documents must be submitted within 7 days.</li>
            <li>Formal leave application (Annexure F1) must follow upon return.</li>
            <li>Emergency leave is subject to verification and approval.</li>
          </ul>
        </section>
      </div>

      <div className="bg-red-100 px-8 py-4 text-center text-xs text-red-600 border-t-2 border-red-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      </div>
    </div>
  );
};

export default ProfessionalF2Form;