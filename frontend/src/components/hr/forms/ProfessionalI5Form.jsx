import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Plus, Trash2, Calculator } from 'lucide-react';

const ProfessionalI5Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '',
    revFrom: '',
    revTo: '',
    declName: '',
    hrName: '',
    hrDate: '',
    finName: '',
    finDate: '',
    dirName: '',
    dirDate: ''
  });

  const [incrementRows, setIncrementRows] = useState([
    { empId: '', empName: '', dept: '', designation: '', doj: '', currentSalary: '', incrementPct: '', newSalary: '', basis: '', remarks: '', selected: false }
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRowChange = (index, field, value) => {
    const updated = [...incrementRows];
    updated[index][field] = value;
    
    // Auto-calculate new salary when current salary or increment % changes
    if (field === 'currentSalary' || field === 'incrementPct') {
      const current = parseFloat(updated[index].currentSalary) || 0;
      const pct = parseFloat(updated[index].incrementPct) || 0;
      updated[index].newSalary = (current * (1 + pct / 100)).toFixed(2);
    }
    
    setIncrementRows(updated);
  };

  const toggleSelect = (index) => {
    const updated = [...incrementRows];
    updated[index].selected = !updated[index].selected;
    setIncrementRows(updated);
  };

  const toggleSelectAll = (e) => {
    const checked = e.target.checked;
    setIncrementRows(incrementRows.map(r => ({ ...r, selected: checked })));
  };

  const addRow = () => {
    setIncrementRows([...incrementRows, { empId: '', empName: '', dept: '', designation: '', doj: '', currentSalary: '', incrementPct: '', newSalary: '', basis: '', remarks: '', selected: false }]);
  };

  const deleteSelected = () => {
    const remaining = incrementRows.filter(r => !r.selected);
    if (remaining.length > 0) {
      setIncrementRows(remaining);
    } else {
      setIncrementRows([{ empId: '', empName: '', dept: '', designation: '', doj: '', currentSalary: '', incrementPct: '', newSalary: '', basis: '', remarks: '', selected: false }]);
    }
  };

  const calculateAllSalaries = () => {
    const updated = incrementRows.map(row => {
      const current = parseFloat(row.currentSalary) || 0;
      const pct = parseFloat(row.incrementPct) || 0;
      return {
        ...row,
        newSalary: (current * (1 + pct / 100)).toFixed(2)
      };
    });
    setIncrementRows(updated);
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
    const data = { logo: logoData, formData, incrementRows };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_I5_Increment_Recommendation.json';
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
          if (data.incrementRows) setIncrementRows(data.incrementRows);
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
        effectiveDate: '', revFrom: '', revTo: '', declName: '',
        hrName: '', hrDate: '', finName: '', finDate: '', dirName: '', dirDate: ''
      });
      setIncrementRows([{ empId: '', empName: '', dept: '', designation: '', doj: '', currentSalary: '', incrementPct: '', newSalary: '', basis: '', remarks: '', selected: false }]);
      setLogoData('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
    }
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
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

      <div className="max-w-7xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-8 py-6">
          <div className="grid grid-cols-[200px_1fr_200px] gap-6 items-center">
            <div className="bg-white p-3 rounded-lg shadow-md">
              <img src={logoData} alt="Hospital Logo" className="w-full h-auto max-h-24 object-contain" />
            </div>
            
            <div className="text-center text-white">
              <h1 className="text-2xl font-bold mb-2">KOYILI HOSPITAL</h1>
              <p className="text-sm opacity-90 mb-1">Human Resources Department • Compensation Management</p>
              <p className="text-xs opacity-75">NABH Accredited • Salary Revision & Increment</p>
            </div>
            
            <div className="text-right space-y-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold">
                Annexure I5
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
          <h2 className="text-xl font-bold text-blue-900 text-center">INCREMENT RECOMMENDATION SHEET</h2>
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
                  <td className="border border-gray-300 px-4 py-2">Increment Recommendation Sheet</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Annexure Number</td>
                  <td className="border border-gray-300 px-4 py-2">I5</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Linked SOP</td>
                  <td className="border border-gray-300 px-4 py-2">SOP I.5 – Salary Revision & Increment Cycle</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">By-Laws Reference</td>
                  <td className="border border-gray-300 px-4 py-2">Section 11.1 – Salary Structure; Section 11.4 – Incentives</td>
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
                  <td className="border border-gray-300 px-4 py-2">Human Resources / Finance</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Approved Authority</td>
                  <td className="border border-gray-300 px-4 py-2">HR Manager / Finance Head / Hospital Director</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Review Period */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Review Period</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">From</label>
                  <input
                    type="date"
                    name="revFrom"
                    value={formData.revFrom}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">To</label>
                  <input
                    type="date"
                    name="revTo"
                    value={formData.revTo}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Increment Recommendations Table */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Increment Recommendations</h3>
              </div>
              <div className="flex gap-2 print:hidden">
                <button onClick={calculateAllSalaries} className="flex items-center gap-1 px-3 py-1 bg-green-700 text-white rounded text-xs hover:bg-green-800">
                  <Calculator size={12} />
                  Calculate All
                </button>
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
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Sl.</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Employee ID</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Employee Name</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Department</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Designation</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Date of Joining</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Current Salary (₹)</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Increment (%)</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">New Salary (₹)</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Basis</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {incrementRows.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-2 py-1 text-center print:hidden">
                        <input type="checkbox" checked={row.selected} onChange={() => toggleSelect(index)} className="w-4 h-4" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-center">{index + 1}</td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.empId} onChange={(e) => handleRowChange(index, 'empId', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.empName} onChange={(e) => handleRowChange(index, 'empName', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.dept} onChange={(e) => handleRowChange(index, 'dept', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.designation} onChange={(e) => handleRowChange(index, 'designation', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="date" value={row.doj} onChange={(e) => handleRowChange(index, 'doj', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="number" step="0.01" min="0" value={row.currentSalary} onChange={(e) => handleRowChange(index, 'currentSalary', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="number" step="0.01" min="0" value={row.incrementPct} onChange={(e) => handleRowChange(index, 'incrementPct', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 bg-gray-50">
                        <input type="number" step="0.01" value={row.newSalary} readOnly className="w-full border-gray-300 rounded px-1 py-1 text-xs bg-gray-50 font-semibold text-green-700" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.basis} onChange={(e) => handleRowChange(index, 'basis', e.target.value)} placeholder="Performance, Tenure" className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.remarks} onChange={(e) => handleRowChange(index, 'remarks', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-blue-50 text-xs text-gray-600">
              <strong>Formula:</strong> Recommended New Salary = Current Salary × (1 + Recommended Increment / 100). HR must ensure affordability and alignment with budget before sending for approvals.
            </div>
          </div>

          {/* Declaration by Reporting Manager */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Declaration by Reporting Manager</h3>
              </div>
            </div>
            <div className="p-4 space-y-4 text-sm">
              <p className="text-gray-700">
                I{' '}
                <input
                  type="text"
                  name="declName"
                  value={formData.declName}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className="inline-block w-64 border border-gray-300 rounded px-3 py-1 mx-1"
                />
                {' '}recommend the above increment(s) based on employee performance (linked to Annexures H1, H2, H3), tenure, and contribution to hospital goals.
              </p>
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
                <p className="font-semibold text-gray-800 mb-3">Reviewed By (HR Manager – Policy & Compliance Check)</p>
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
                <p className="font-semibold text-gray-800 mb-3">Verified By (Finance – Budgetary Feasibility & Payroll Integration)</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="finName" value={formData.finName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="finDate" value={formData.finDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-3">Approved By (Hospital Director – Final Authorization)</p>
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
                <li>Increment recommendations must align with SOP I.5 and By-Laws Section 15.5.</li>
                <li>HR must ensure recommendations are based on appraisal results, KPI achievement, and feedback.</li>
                <li>Finance must verify affordability within budgetary limits prior to approval.</li>
                <li>Approved increments must be reflected in the Payroll Input Sheet (Annexure I1).</li>
                <li>Increment records must be archived for 7 years for compliance and audits.</li>
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
              Annexure I5 • Increment Recommendation Sheet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalI5Form;
