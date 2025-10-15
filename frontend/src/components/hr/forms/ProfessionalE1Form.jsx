import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Clock, Calendar, Shield } from 'lucide-react';

const ProfessionalE1Form = () => {
  const [formData, setFormData] = useState({
    report_month: '',
    report_year: '',
    dept_filter: '',
    generated_by: '', generated_date: '',
    sig_hr_name: '', sig_hr_date: ''
  });

  const [logoData, setLogoData] = useState('');

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('e1_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('e1_form_data', JSON.stringify(updated));
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'E1-Attendance-Report.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('e1_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-rose-700 via-pink-600 to-rose-600 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {logoData && <img src={logoData} alt="Logo" className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg object-contain" />}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
              <p className="text-rose-200 text-sm mt-1">HR / Time & Attendance Department</p>
              <p className="text-rose-300 text-xs">Pallikkunnu, Talap, Kannur, Kerala</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-rose-200 mb-1">Attendance Report</p>
              <p className="text-sm font-bold">BIOMETRIC DATA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-rose-50 px-8 py-4 border-b-2 border-rose-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-rose-900">Annexure:</span>
            <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded font-bold">E1</span>
          </div>
          <div className="w-px h-4 bg-rose-300"></div>
          <div><span className="font-semibold text-rose-900">SOP:</span> E.1</div>
          <div className="w-px h-4 bg-rose-300"></div>
          <div><span className="font-semibold text-rose-900">Version:</span> 1.0</div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-rose-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-rose-200">
        <div className="inline-block px-4 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-semibold mb-4">Attendance Management</div>
        <h2 className="text-3xl font-bold text-rose-900 mb-3">BIOMETRIC ATTENDANCE REPORT FORMAT</h2>
        <div className="flex items-center gap-4 text-sm text-rose-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP E.1 – Attendance & Leave Management</span></div>
          <div className="w-px h-4 bg-rose-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 5.1-5.4</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-rose-200 rounded-xl p-6 bg-rose-50">
          <h3 className="text-lg font-bold text-rose-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-rose-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-rose-600 font-semibold">Document Title:</span><p className="text-rose-900">Biometric Attendance Report Format</p></div>
            <div><span className="text-rose-600 font-semibold">Annexure Number:</span><p className="text-rose-900">E1</p></div>
            <div><span className="text-rose-600 font-semibold">Linked SOP:</span><p className="text-rose-900">SOP E.1 – Attendance & Leave Management</p></div>
            <div><span className="text-rose-600 font-semibold">By-Laws Reference:</span><p className="text-rose-900">Section 5.1-5.4 (Working Hours & Attendance)</p></div>
            <div><span className="text-rose-600 font-semibold">Version No.:</span><p className="text-rose-900">1.0</p></div>
          </div>
        </section>

        <section className="border-2 border-rose-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-rose-900 mb-4">Purpose</h3>
          <p className="text-sm text-rose-700 leading-relaxed">
            This Annexure provides the standardized format for generating biometric attendance reports at Koyili Hospital. 
            It ensures accurate tracking of employee attendance, compliance with working hours policy, and facilitates payroll processing.
          </p>
        </section>

        <section className="border-2 border-rose-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-rose-900 mb-4">Report Parameters</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-rose-700 mb-2">Report Month:</label>
              <select value={formData.report_month} onChange={(e) => handleChange('report_month', e.target.value)}
                className="w-full px-3 py-2 border border-rose-300 rounded-lg focus:ring-2 focus:ring-rose-500">
                <option value="">-- Select Month --</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-rose-700 mb-2">Report Year:</label>
              <input type="number" value={formData.report_year} onChange={(e) => handleChange('report_year', e.target.value)}
                placeholder="YYYY"
                className="w-full px-3 py-2 border border-rose-300 rounded-lg focus:ring-2 focus:ring-rose-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-rose-700 mb-2">Department Filter (Optional):</label>
              <input type="text" value={formData.dept_filter} onChange={(e) => handleChange('dept_filter', e.target.value)}
                placeholder="All Departments"
                className="w-full px-3 py-2 border border-rose-300 rounded-lg focus:ring-2 focus:ring-rose-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-rose-200 rounded-xl p-6 bg-amber-50">
          <h3 className="text-lg font-bold text-rose-900 mb-4">Report Data Structure</h3>
          <p className="text-sm text-rose-700 mb-4">This report should include the following columns when exported from biometric system:</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              <div><strong>Employee ID:</strong> Unique identifier</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              <div><strong>Employee Name:</strong> Full name</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              <div><strong>Department:</strong> Current department</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              <div><strong>Designation:</strong> Current role</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              <div><strong>Date:</strong> Attendance date</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              <div><strong>In Time:</strong> First punch-in</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              <div><strong>Out Time:</strong> Last punch-out</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              <div><strong>Total Hours:</strong> Calculated hours</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              <div><strong>Status:</strong> Present/Absent/Half Day/Leave</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              <div><strong>Late Minutes:</strong> Delay from shift start</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              <div><strong>Early Exit:</strong> Early departure if any</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              <div><strong>Remarks:</strong> Notes/explanations</div>
            </div>
          </div>
        </section>

        <section className="border-2 border-rose-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-rose-900 mb-4">Report Generation Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-rose-700 mb-2">Generated By:</label>
              <input type="text" value={formData.generated_by} onChange={(e) => handleChange('generated_by', e.target.value)}
                className="w-full px-3 py-2 border border-rose-300 rounded-lg focus:ring-2 focus:ring-rose-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-rose-700 mb-2">Generation Date:</label>
              <input type="date" value={formData.generated_date} onChange={(e) => handleChange('generated_date', e.target.value)}
                className="w-full px-3 py-2 border border-rose-300 rounded-lg focus:ring-2 focus:ring-rose-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-rose-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-rose-900 mb-4">Signatures</h3>
          <div>
            <h4 className="font-semibold text-rose-800 mb-3">HR Manager / Time & Attendance Officer (Report Verification)</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-rose-700 mb-2">Name:</label>
                <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                  className="w-full px-3 py-2 border border-rose-300 rounded-lg focus:ring-2 focus:ring-rose-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-rose-700 mb-2">Date:</label>
                <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                  className="w-full px-3 py-2 border border-rose-300 rounded-lg focus:ring-2 focus:ring-rose-500" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-rose-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-rose-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-rose-700">
            <li>Reports must be generated monthly by the 5th of the following month.</li>
            <li>Data must be exported directly from the biometric system without manual alterations.</li>
            <li>Any attendance discrepancies must be investigated and documented with supporting evidence.</li>
            <li>Reports must be shared with Finance for payroll processing and retained for 3 years.</li>
            <li>This format integrates with Annexure E2 (Leave Application) and E3 (Shift Roster).</li>
          </ul>
        </section>
      </div>

      <div className="bg-rose-100 px-8 py-4 text-center text-xs text-rose-600 border-t-2 border-rose-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      </div>
    </div>
  );
};

export default ProfessionalE1Form;