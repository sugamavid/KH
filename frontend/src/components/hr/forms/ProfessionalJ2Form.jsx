import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Plus, Trash2, Calendar } from 'lucide-react';

const ProfessionalJ2Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', yearFrom: '', yearTo: '',
    decName: '', decSign: '', decDate: '', decPlace: '',
    revName: '', revSign: '', revDate: '', revPlace: '',
    appName: '', appSign: '', appDate: '', appPlace: ''
  });

  const [trainings, setTrainings] = useState([
    { month: '', title: '', dept: '', trainer: '', mode: 'Internal', duration: '', target: '', competency: '', venue: '', remarks: '' }
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTableChange = (index, field, value) => {
    const updated = [...trainings];
    updated[index][field] = value;
    setTrainings(updated);
  };

  const addRow = () => {
    setTrainings([...trainings, { month: '', title: '', dept: '', trainer: '', mode: 'Internal', duration: '', target: '', competency: '', venue: '', remarks: '' }]);
  };

  const add12Months = () => {
    setTrainings(months.map(month => ({ month, title: '', dept: '', trainer: '', mode: 'Internal', duration: '', target: '', competency: '', venue: '', remarks: '' })));
  };

  const removeRow = (index) => {
    if (trainings.length > 1) {
      setTrainings(trainings.filter((_, i) => i !== index));
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setLogoData(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const data = { logo: logoData, formData, trainings };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_J2_Training_Calendar.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          if (data.logo) setLogoData(data.logo);
          if (data.formData) setFormData(data.formData);
          if (data.trainings) setTrainings(data.trainings);
        } catch (err) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all fields?')) {
      setFormData({
        effectiveDate: '', yearFrom: '', yearTo: '',
        decName: '', decSign: '', decDate: '', decPlace: '',
        revName: '', revSign: '', revDate: '', revPlace: '',
        appName: '', appSign: '', appDate: '', appPlace: ''
      });
      setTrainings([{ month: '', title: '', dept: '', trainer: '', mode: 'Internal', duration: '', target: '', competency: '', venue: '', remarks: '' }]);
      setLogoData('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
    }
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Toolbar */}
      <div className="mb-6 flex justify-end gap-2 print:hidden">
        <button onClick={() => fileInputRef.current.click()} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Upload size={16} />
          <span>Upload Logo</span>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
        
        <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Save size={16} />
          <span>Save (JSON)</span>
        </button>
        
        <button onClick={() => loadInputRef.current.click()} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Upload size={16} />
          <span>Load (JSON)</span>
        </button>
        <input ref={loadInputRef} type="file" accept="application/json" onChange={handleLoad} className="hidden" />
        
        <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <RotateCcw size={16} />
          <span>Reset</span>
        </button>
        
        <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">
          <Printer size={16} />
          <span>Print / Save PDF</span>
        </button>
      </div>

      {/* Document Container */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-8 py-6">
          <div className="grid grid-cols-[200px_1fr_200px] gap-6 items-center">
            <div className="bg-white p-3 rounded-lg shadow-md">
              <img src={logoData} alt="Hospital Logo" className="w-full h-auto max-h-24 object-contain" />
            </div>
            
            <div className="text-center text-white">
              <h1 className="text-2xl font-bold mb-2">KOYILI HOSPITAL</h1>
              <p className="text-sm opacity-90 mb-1">Human Resources Department • Training & Development Cell</p>
              <p className="text-xs opacity-75">NABH Accredited • Training Excellence Center</p>
            </div>
            
            <div className="text-right space-y-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold">
                Annexure J2
              </div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold block mt-1">
                Version 1.0
              </div>
              <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded text-xs font-bold block mt-1">
                NABH
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="bg-blue-50 border-b-2 border-blue-900 px-8 py-4">
          <h2 className="text-xl font-bold text-blue-900 text-center">TRAINING CALENDAR TEMPLATE</h2>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Document Control */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Document Control</h3>
              </div>
            </div>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold w-1/3">Document Title</td>
                  <td className="border border-gray-300 px-4 py-2">Training Calendar Template</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Annexure Number</td>
                  <td className="border border-gray-300 px-4 py-2">J2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Linked SOP</td>
                  <td className="border border-gray-300 px-4 py-2">SOP J.2 – Induction & Refresher Training Program Calendar</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">By-Laws Reference</td>
                  <td className="border border-gray-300 px-4 py-2">Section 9.2 – Professional Development; Section 9.3 – Needs Assessment</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Version</td>
                  <td className="border border-gray-300 px-4 py-2">1.0</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Effective Date</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input type="date" name="effectiveDate" value={formData.effectiveDate} onChange={handleChange} className="w-full border-gray-300 rounded px-2 py-1" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Custodian Department</td>
                  <td className="border border-gray-300 px-4 py-2">Training & Development Cell / HR</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Approved Authority</td>
                  <td className="border border-gray-300 px-4 py-2">HR Manager / Training Head / Hospital Director</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Purpose */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Purpose</h3>
              </div>
            </div>
            <div className="p-4 text-sm text-gray-700 leading-relaxed">
              This Annexure provides the Training Calendar Template for Koyili Hospital. It ensures compliance with SOP J.2 and By-Laws Section 9.2 & 9.3 by providing a structured plan of all training programs scheduled for employees. It also ensures readiness for competency building, professional growth, and NABH/JCI accreditation requirements.
            </div>
          </div>

          {/* Training Year */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Training Year</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">From</label>
                  <input type="date" name="yearFrom" value={formData.yearFrom} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">To</label>
                  <input type="date" name="yearTo" value={formData.yearTo} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Training Calendar Table */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Training Calendar</h3>
              </div>
              <div className="flex gap-2 print:hidden">
                <button onClick={addRow} className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded text-xs hover:bg-blue-800">
                  <Plus size={12} />
                  Add Row
                </button>
                <button onClick={add12Months} className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded text-xs hover:bg-blue-800">
                  <Calendar size={12} />
                  Prefill 12 Months
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Month</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Training Program Title</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Department(s)</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Trainer/Faculty</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Mode</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Duration</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Target Audience</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Linked Competency</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Venue</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Remarks</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 print:hidden">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {trainings.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-2 py-1">
                        <select value={row.month} onChange={(e) => handleTableChange(index, 'month', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs">
                          <option value="">—</option>
                          {months.map(m => <option key={m}>{m}</option>)}
                        </select>
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.title} onChange={(e) => handleTableChange(index, 'title', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.dept} onChange={(e) => handleTableChange(index, 'dept', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.trainer} onChange={(e) => handleTableChange(index, 'trainer', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <select value={row.mode} onChange={(e) => handleTableChange(index, 'mode', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs">
                          <option>Internal</option>
                          <option>External</option>
                          <option>Hybrid</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.duration} onChange={(e) => handleTableChange(index, 'duration', e.target.value)} placeholder="4 hrs / 2 days" className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.target} onChange={(e) => handleTableChange(index, 'target', e.target.value)} placeholder="Nurses, Admin" className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.competency} onChange={(e) => handleTableChange(index, 'competency', e.target.value)} placeholder="SOP refs" className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.venue} onChange={(e) => handleTableChange(index, 'venue', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.remarks} onChange={(e) => handleTableChange(index, 'remarks', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-center print:hidden">
                        <button onClick={() => removeRow(index)} className="text-red-600 hover:text-red-800" disabled={trainings.length === 1}>
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Declaration */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Declaration by Training Head / HR</h3>
              </div>
            </div>
            <div className="p-4 space-y-4 text-sm">
              <p className="text-gray-700">I confirm that the training calendar outlined above has been prepared in line with identified training needs (Annexure J1) and aligned with hospital goals and compliance requirements.</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                  <input type="text" name="decName" value={formData.decName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Signature</label>
                  <input type="text" name="decSign" value={formData.decSign} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                  <input type="date" name="decDate" value={formData.decDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Place</label>
                  <input type="text" name="decPlace" value={formData.decPlace} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Signatures & Approvals */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Signatures & Approvals</h3>
              </div>
            </div>
            <div className="p-4 space-y-6 text-sm">
              <div>
                <p className="font-semibold text-gray-800 mb-3">Reviewed By (HR Manager)</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="revName" value={formData.revName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Signature</label>
                    <input type="text" name="revSign" value={formData.revSign} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="revDate" value={formData.revDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Place</label>
                    <input type="text" name="revPlace" value={formData.revPlace} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-3">Approved By (Hospital Director)</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="appName" value={formData.appName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Signature</label>
                    <input type="text" name="appSign" value={formData.appSign} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="appDate" value={formData.appDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Place</label>
                    <input type="text" name="appPlace" value={formData.appPlace} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-8 py-4 mt-8">
          <div className="flex justify-between items-center text-white text-xs">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 text-blue-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px]">
                N
              </div>
              <span>© 2024 Koyili Hospital • NABH Accredited • Confidential Document</span>
            </div>
            <div className="font-semibold">
              Annexure J2 • Training Calendar Template
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalJ2Form;
