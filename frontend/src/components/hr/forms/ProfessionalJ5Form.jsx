import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Plus, Trash2 } from 'lucide-react';

const ProfessionalJ5Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', fromDate: '', toDate: '',
    declName: '', declDate: '',
    hrName: '', hrDate: '',
    dirName: '', dirDate: ''
  });

  const [trainingRecords, setTrainingRecords] = useState([
    { empId: '', empName: '', dept: '', designation: '', title: '', mode: '', trainer: '', date: '', duration: '', certIssued: '', certNo: '', linkedSOP: '', remarks: '', selected: false }
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRecordChange = (index, field, value) => {
    const updated = [...trainingRecords];
    updated[index][field] = value;
    setTrainingRecords(updated);
  };

  const toggleSelect = (index) => {
    const updated = [...trainingRecords];
    updated[index].selected = !updated[index].selected;
    setTrainingRecords(updated);
  };

  const toggleSelectAll = (e) => {
    const checked = e.target.checked;
    setTrainingRecords(trainingRecords.map(r => ({ ...r, selected: checked })));
  };

  const addRow = () => {
    setTrainingRecords([...trainingRecords, { empId: '', empName: '', dept: '', designation: '', title: '', mode: '', trainer: '', date: '', duration: '', certIssued: '', certNo: '', linkedSOP: '', remarks: '', selected: false }]);
  };

  const deleteSelected = () => {
    const remaining = trainingRecords.filter(r => !r.selected);
    if (remaining.length > 0) {
      setTrainingRecords(remaining);
    } else {
      setTrainingRecords([{ empId: '', empName: '', dept: '', designation: '', title: '', mode: '', trainer: '', date: '', duration: '', certIssued: '', certNo: '', linkedSOP: '', remarks: '', selected: false }]);
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
    const data = { logo: logoData, formData, trainingRecords };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_J5_Training_Tracker.json';
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
          if (data.trainingRecords) setTrainingRecords(data.trainingRecords);
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
        effectiveDate: '', fromDate: '', toDate: '',
        declName: '', declDate: '',
        hrName: '', hrDate: '',
        dirName: '', dirDate: ''
      });
      setTrainingRecords([{ empId: '', empName: '', dept: '', designation: '', title: '', mode: '', trainer: '', date: '', duration: '', certIssued: '', certNo: '', linkedSOP: '', remarks: '', selected: false }]);
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
              <p className="text-xs opacity-75">NABH Accredited • Training Record Management</p>
            </div>
            
            <div className="text-right space-y-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold">
                Annexure J5
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
          <h2 className="text-xl font-bold text-blue-900 text-center">TRAINING TRACKER & CERTIFICATE RECORD</h2>
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
                  <td className="border border-gray-300 px-4 py-2">Training Tracker & Certificate Record</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Annexure Number</td>
                  <td className="border border-gray-300 px-4 py-2">J5</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Linked SOP</td>
                  <td className="border border-gray-300 px-4 py-2">SOP J.5 – Certificate Recording & Training Tracker</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">By-Laws Reference</td>
                  <td className="border border-gray-300 px-4 py-2">Section 9.4 – Participation & Attendance; Section 9.5 – Support & Resources</td>
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
                  <td className="border border-gray-300 px-4 py-2">HR / Training & Development Cell</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Approved Authority</td>
                  <td className="border border-gray-300 px-4 py-2">HR Manager / Training Head / Hospital Director</td>
                </tr>
              </tbody>
            </table>
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
                  <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">To</label>
                  <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Training Tracker Table */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Training Tracker</h3>
              </div>
              <div className="flex gap-2 print:hidden">
                <button onClick={addRow} className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded text-xs hover:bg-blue-800">
                  <Plus size={12} />
                  Add Row
                </button>
                <button onClick={deleteSelected} className="flex items-center gap-1 px-3 py-1 bg-red-700 text-white rounded text-xs hover:bg-red-800">
                  <Trash2 size={12} />
                  Delete Selected
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2 print:hidden">
                      <input type="checkbox" onChange={toggleSelectAll} className="w-4 h-4" />
                    </th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Emp ID</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Emp Name</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Dept</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Designation</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Training Title</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Mode</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Trainer</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Date</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Duration</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Cert Issued</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Cert No.</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Linked SOP</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {trainingRecords.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-2 py-1 text-center print:hidden">
                        <input type="checkbox" checked={row.selected} onChange={() => toggleSelect(index)} className="w-4 h-4" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.empId} onChange={(e) => handleRecordChange(index, 'empId', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.empName} onChange={(e) => handleRecordChange(index, 'empName', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.dept} onChange={(e) => handleRecordChange(index, 'dept', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.designation} onChange={(e) => handleRecordChange(index, 'designation', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.title} onChange={(e) => handleRecordChange(index, 'title', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.mode} onChange={(e) => handleRecordChange(index, 'mode', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.trainer} onChange={(e) => handleRecordChange(index, 'trainer', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="date" value={row.date} onChange={(e) => handleRecordChange(index, 'date', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.duration} onChange={(e) => handleRecordChange(index, 'duration', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.certIssued} onChange={(e) => handleRecordChange(index, 'certIssued', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.certNo} onChange={(e) => handleRecordChange(index, 'certNo', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.linkedSOP} onChange={(e) => handleRecordChange(index, 'linkedSOP', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.remarks} onChange={(e) => handleRecordChange(index, 'remarks', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
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
                <h3 className="font-semibold text-blue-900">Declaration by Training Admin / HR</h3>
              </div>
            </div>
            <div className="p-4 space-y-4 text-sm">
              <p className="text-gray-700">I confirm that the training records maintained above are accurate, up-to-date, and supported by attendance sheets, evaluation forms, and certificates.</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                  <input type="text" name="declName" value={formData.declName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                  <input type="date" name="declDate" value={formData.declDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
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
                <p className="font-semibold text-gray-800 mb-3">Verified By (HR Manager – Compliance Check)</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="hrName" value={formData.hrName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="hrDate" value={formData.hrDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-3">Approved By (Hospital Director – Oversight & Validation)</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="dirName" value={formData.dirName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="dirDate" value={formData.dirDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Instructions for Use</h3>
              </div>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>All trainings must be recorded in this tracker.</li>
                <li>Certificates must be catalogued with unique certificate numbers.</li>
                <li>HR must update the tracker within 7 days of training completion.</li>
                <li>Records must be archived for 7 years for compliance and audits.</li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">Read in conjunction with SOP J.5, By-Laws Section 9.4 & 9.5, and related annexures (J1–J4).</p>
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
              Annexure J5 • Training Tracker & Certificate Record
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalJ5Form;
