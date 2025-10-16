import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Plus, Trash2 } from 'lucide-react';

const ProfessionalJ6Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', fromDate: '', toDate: '',
    hrName: '', hrDate: '', hrPlace: '',
    revName: '', revDate: '', revPlace: '',
    appName: '', appDate: '', appPlace: ''
  });

  const [successionRows, setSuccessionRows] = useState([
    { role: '', incumbent: '', successors: '', readiness: 'Ready Now', developmentNeeds: '', linkedSOP: '', remarks: '' }
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRowChange = (index, field, value) => {
    const updated = [...successionRows];
    updated[index][field] = value;
    setSuccessionRows(updated);
  };

  const addRow = () => {
    setSuccessionRows([...successionRows, { role: '', incumbent: '', successors: '', readiness: 'Ready Now', developmentNeeds: '', linkedSOP: '', remarks: '' }]);
  };

  const removeRow = (index) => {
    if (successionRows.length > 1) {
      setSuccessionRows(successionRows.filter((_, i) => i !== index));
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
    const data = { logo: logoData, formData, successionRows };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_J6_Succession_Plan.json';
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
          if (data.successionRows) setSuccessionRows(data.successionRows);
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
        hrName: '', hrDate: '', hrPlace: '',
        revName: '', revDate: '', revPlace: '',
        appName: '', appDate: '', appPlace: ''
      });
      setSuccessionRows([{ role: '', incumbent: '', successors: '', readiness: 'Ready Now', developmentNeeds: '', linkedSOP: '', remarks: '' }]);
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
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-8 py-6">
          <div className="grid grid-cols-[200px_1fr_200px] gap-6 items-center">
            <div className="bg-white p-3 rounded-lg shadow-md">
              <img src={logoData} alt="Hospital Logo" className="w-full h-auto max-h-24 object-contain" />
            </div>
            <div className="text-center text-white">
              <h1 className="text-2xl font-bold mb-2">KOYILI HOSPITAL</h1>
              <p className="text-sm opacity-90 mb-1">Human Resources Department • Executive Leadership Council</p>
              <p className="text-xs opacity-75">NABH Accredited • Leadership Development</p>
            </div>
            <div className="text-right space-y-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold">Annexure J6</div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold block mt-1">Version 1.0</div>
              <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded text-xs font-bold block mt-1">NABH</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-b-2 border-blue-900 px-8 py-4">
          <h2 className="text-xl font-bold text-blue-900 text-center">LEADERSHIP SUCCESSION PLAN MATRIX</h2>
        </div>

        <div className="p-8 space-y-6">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Succession Plan Matrix</h3>
              </div>
              <div className="flex gap-2 print:hidden">
                <button onClick={addRow} className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded text-xs hover:bg-blue-800">
                  <Plus size={12} />
                  Add Row
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[16%]">Critical Role</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[14%]">Current Incumbent</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[18%]">Potential Successor(s)</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[12%]">Readiness Level</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[20%]">Development Needs</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[12%]">Linked SOP/Annexures</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[8%]">Remarks</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 print:hidden">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {successionRows.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.role} onChange={(e) => handleRowChange(index, 'role', e.target.value)} placeholder="e.g., Nursing Superintendent" className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.incumbent} onChange={(e) => handleRowChange(index, 'incumbent', e.target.value)} placeholder="Name" className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.successors} onChange={(e) => handleRowChange(index, 'successors', e.target.value)} placeholder="Successor 1; Successor 2" className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <select value={row.readiness} onChange={(e) => handleRowChange(index, 'readiness', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs">
                          <option>Ready Now</option>
                          <option>1–2 Years</option>
                          <option>3–5 Years</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.developmentNeeds} onChange={(e) => handleRowChange(index, 'developmentNeeds', e.target.value)} placeholder="Training, Mentoring, Exposure" className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.linkedSOP} onChange={(e) => handleRowChange(index, 'linkedSOP', e.target.value)} placeholder="H2 / H3 / J1 refs" className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.remarks} onChange={(e) => handleRowChange(index, 'remarks', e.target.value)} placeholder="Notes" className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-center print:hidden">
                        <button onClick={() => removeRow(index)} className="text-red-600 hover:text-red-800" disabled={successionRows.length === 1}>
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-8 py-4 mt-8">
          <div className="flex justify-between items-center text-white text-xs">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 text-blue-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px]">N</div>
              <span>© 2024 Koyili Hospital • NABH Accredited • Confidential Document</span>
            </div>
            <div className="font-semibold">Annexure J6 • Leadership Succession Plan Matrix</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalJ6Form;