import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, Plus, Trash2 } from 'lucide-react';

const ProfessionalJ1Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '',
    assessmentFrom: '',
    assessmentTo: '',
    deptHeadSignature: '',
    deptHeadName: '',
    deptHeadDate: '',
    deptHeadPlace: '',
    hrSignature: '',
    hrName: '',
    hrDate: '',
    hrPlace: '',
    approverSignature: '',
    approverName: '',
    approverDate: '',
    approverPlace: ''
  });

  const [trainingNeeds, setTrainingNeeds] = useState([
    { empId: '', empName: '', dept: '', designation: '', competency: '', need: '', priority: 'High', training: '', timeline: '', remarks: '' }
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTableChange = (index, field, value) => {
    const updated = [...trainingNeeds];
    updated[index][field] = value;
    setTrainingNeeds(updated);
  };

  const addRow = () => {
    setTrainingNeeds([...trainingNeeds, { empId: '', empName: '', dept: '', designation: '', competency: '', need: '', priority: 'High', training: '', timeline: '', remarks: '' }]);
  };

  const removeRow = (index) => {
    if (trainingNeeds.length > 1) {
      setTrainingNeeds(trainingNeeds.filter((_, i) => i !== index));
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
    const data = { logo: logoData, formData, trainingNeeds };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_J1_Training_Needs_Assessment.json';
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
          if (data.trainingNeeds) setTrainingNeeds(data.trainingNeeds);
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
        effectiveDate: '', assessmentFrom: '', assessmentTo: '',
        deptHeadSignature: '', deptHeadName: '', deptHeadDate: '', deptHeadPlace: '',
        hrSignature: '', hrName: '', hrDate: '', hrPlace: '',
        approverSignature: '', approverName: '', approverDate: '', approverPlace: ''
      });
      setTrainingNeeds([{ empId: '', empName: '', dept: '', designation: '', competency: '', need: '', priority: 'High', training: '', timeline: '', remarks: '' }]);
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
      <div className="max-w-6xl mx-auto bg-white shadow-lg">
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
                Annexure J1
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
          <h2 className="text-xl font-bold text-blue-900 text-center">TRAINING NEEDS ASSESSMENT TRACKER</h2>
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
                  <td className="border border-gray-300 px-4 py-2">Training Needs Assessment Tracker</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Annexure Number</td>
                  <td className="border border-gray-300 px-4 py-2">J1</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Linked SOP</td>
                  <td className="border border-gray-300 px-4 py-2">SOP J.1 – Training Needs Assessment Process</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">By-Laws Reference</td>
                  <td className="border border-gray-300 px-4 py-2">Section 9.3 – Training Needs Assessment</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Version</td>
                  <td className="border border-gray-300 px-4 py-2">1.0</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Effective Date</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="date"
                      name="effectiveDate"
                      value={formData.effectiveDate}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded px-2 py-1"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Custodian Department</td>
                  <td className="border border-gray-300 px-4 py-2">Human Resources / Training & Development Cell</td>
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
              This Annexure provides the Training Needs Assessment (TNA) Tracker for Koyili Hospital. It ensures compliance with SOP J.1 and By-Laws Section 9.3 by systematically identifying and documenting training needs across clinical, technical, and behavioral competencies. It also ensures readiness for workforce capability development, accreditation requirements (NABH/JCI), and continuous professional growth.
            </div>
          </div>

          {/* Assessment Period */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Assessment Period</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">From</label>
                  <input
                    type="date"
                    name="assessmentFrom"
                    value={formData.assessmentFrom}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">To</label>
                  <input
                    type="date"
                    name="assessmentTo"
                    value={formData.assessmentTo}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Training Needs Assessment Table */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Training Needs Assessment Table</h3>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Employee ID</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Employee Name</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Department</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Designation</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Competency Area</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Training Need</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Priority</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Recommended Training</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Timeline</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Remarks</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 print:hidden">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {trainingNeeds.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="text"
                          value={row.empId}
                          onChange={(e) => handleTableChange(index, 'empId', e.target.value)}
                          className="w-full border-gray-300 rounded px-1 py-1 text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="text"
                          value={row.empName}
                          onChange={(e) => handleTableChange(index, 'empName', e.target.value)}
                          className="w-full border-gray-300 rounded px-1 py-1 text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="text"
                          value={row.dept}
                          onChange={(e) => handleTableChange(index, 'dept', e.target.value)}
                          className="w-full border-gray-300 rounded px-1 py-1 text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="text"
                          value={row.designation}
                          onChange={(e) => handleTableChange(index, 'designation', e.target.value)}
                          className="w-full border-gray-300 rounded px-1 py-1 text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="text"
                          value={row.competency}
                          onChange={(e) => handleTableChange(index, 'competency', e.target.value)}
                          placeholder="Clinical/Technical/Behavioral"
                          className="w-full border-gray-300 rounded px-1 py-1 text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="text"
                          value={row.need}
                          onChange={(e) => handleTableChange(index, 'need', e.target.value)}
                          className="w-full border-gray-300 rounded px-1 py-1 text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <select
                          value={row.priority}
                          onChange={(e) => handleTableChange(index, 'priority', e.target.value)}
                          className="w-full border-gray-300 rounded px-1 py-1 text-xs"
                        >
                          <option>High</option>
                          <option>Medium</option>
                          <option>Low</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="text"
                          value={row.training}
                          onChange={(e) => handleTableChange(index, 'training', e.target.value)}
                          placeholder="Internal/External"
                          className="w-full border-gray-300 rounded px-1 py-1 text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="text"
                          value={row.timeline}
                          onChange={(e) => handleTableChange(index, 'timeline', e.target.value)}
                          className="w-full border-gray-300 rounded px-1 py-1 text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="text"
                          value={row.remarks}
                          onChange={(e) => handleTableChange(index, 'remarks', e.target.value)}
                          className="w-full border-gray-300 rounded px-1 py-1 text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-center print:hidden">
                        <button
                          onClick={() => removeRow(index)}
                          className="text-red-600 hover:text-red-800"
                          disabled={trainingNeeds.length === 1}
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-gray-50 print:hidden">
              <button
                onClick={addRow}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-700 text-white rounded hover:bg-blue-800 text-sm"
              >
                <Plus size={14} />
                Add Row
              </button>
            </div>
          </div>

          {/* Declaration by Department Head */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Declaration by Department Head</h3>
              </div>
            </div>
            <div className="p-4 space-y-4 text-sm">
              <p className="text-gray-700">I confirm that the training needs identified above are accurate and align with departmental and organizational goals.</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Signature</label>
                  <input
                    type="text"
                    name="deptHeadSignature"
                    value={formData.deptHeadSignature}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-1.5"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    name="deptHeadName"
                    value={formData.deptHeadName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-1.5"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                  <input
                    type="date"
                    name="deptHeadDate"
                    value={formData.deptHeadDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-1.5"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Place</label>
                  <input
                    type="text"
                    name="deptHeadPlace"
                    value={formData.deptHeadPlace}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-1.5"
                  />
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
                <p className="font-semibold text-gray-800 mb-3">Reviewed By (HR – Consolidation & Compliance Check)</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Signature</label>
                    <input type="text" name="hrSignature" value={formData.hrSignature} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="hrName" value={formData.hrName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="hrDate" value={formData.hrDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Place</label>
                    <input type="text" name="hrPlace" value={formData.hrPlace} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-3">Approved By (Hospital Director / Training Head – Budget & Policy Alignment)</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Signature</label>
                    <input type="text" name="approverSignature" value={formData.approverSignature} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="approverName" value={formData.approverName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="approverDate" value={formData.approverDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Place</label>
                    <input type="text" name="approverPlace" value={formData.approverPlace} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions for Use */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Instructions for Use</h3>
              </div>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>Training Needs Assessment must be conducted annually (or bi-annually) for all employees.</li>
                <li>Competency gaps must be identified through appraisals (Annexure H2), feedback (Annexure H3), and competency assessments (Annexure J3).</li>
                <li>HR must consolidate TNA data and prepare the Training Calendar (Annexure J2) accordingly.</li>
                <li>Training records must be updated in Training Tracker (Annexure J5) and linked to employee files (Annexure D1).</li>
                <li>TNA records must be archived for 7 years for audit and accreditation purposes.</li>
                <li>This Annexure shall be read in conjunction with SOP J.1, By-Laws Section 9.3, and related annexures (J2, J3, J5).</li>
              </ul>
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
              Annexure J1 • Training Needs Assessment Tracker
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalJ1Form;
