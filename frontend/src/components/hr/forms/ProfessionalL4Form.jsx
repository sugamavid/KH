import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Plus, Trash2 } from 'lucide-react';

const ProfessionalL4Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', trackFrom: '', trackTo: '',
    coordDeclaration: '', coordName: '', coordSign: '', coordDate: '',
    hrName: '', hrSign: '', hrDate: '', hrPlace: ''
  });

  const [requests, setRequests] = useState([
    { reqNo: '', dateReq: '', empId: '', empName: '', dept: '', desig: '', supportType: '', mode: '', assignedTo: '', status: 'Open', followUpDate: '', notes: '', selected: false }
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRequestChange = (index, field, value) => {
    const updated = [...requests];
    updated[index][field] = value;
    setRequests(updated);
  };

  const toggleSelect = (index) => {
    const updated = [...requests];
    updated[index].selected = !updated[index].selected;
    setRequests(updated);
  };

  const toggleSelectAll = (e) => {
    const checked = e.target.checked;
    setRequests(requests.map(r => ({ ...r, selected: checked })));
  };

  const addRow = () => {
    setRequests([...requests, { reqNo: '', dateReq: '', empId: '', empName: '', dept: '', desig: '', supportType: '', mode: '', assignedTo: '', status: 'Open', followUpDate: '', notes: '', selected: false }]);
  };

  const deleteSelected = () => {
    const remaining = requests.filter(r => !r.selected);
    if (remaining.length > 0) {
      setRequests(remaining);
    } else {
      setRequests([{ reqNo: '', dateReq: '', empId: '', empName: '', dept: '', desig: '', supportType: '', mode: '', assignedTo: '', status: 'Open', followUpDate: '', notes: '', selected: false }]);
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
    const data = { logo: logoData, formData, requests };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_L4_Mental_Health_Tracker.json';
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
          if (data.requests) setRequests(data.requests);
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
        effectiveDate: '', trackFrom: '', trackTo: '',
        coordDeclaration: '', coordName: '', coordSign: '', coordDate: '',
        hrName: '', hrSign: '', hrDate: '', hrPlace: ''
      });
      setRequests([{ reqNo: '', dateReq: '', empId: '', empName: '', dept: '', desig: '', supportType: '', mode: '', assignedTo: '', status: 'Open', followUpDate: '', notes: '', selected: false }]);
      setLogoData('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
    }
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6 flex justify-end gap-2 print:hidden">
        <button onClick={() => fileInputRef.current.click()} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Upload size={16} /><span>Upload Logo</span>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
        <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Save size={16} /><span>Save (JSON)</span>
        </button>
        <button onClick={() => loadInputRef.current.click()} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Upload size={16} /><span>Load (JSON)</span>
        </button>
        <input ref={loadInputRef} type="file" accept="application/json" onChange={handleLoad} className="hidden" />
        <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <RotateCcw size={16} /><span>Reset</span>
        </button>
        <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">
          <Printer size={16} /><span>Print / Save PDF</span>
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
              <p className="text-sm opacity-90 mb-1">HR Department • Employee Wellness Program</p>
              <p className="text-xs opacity-75">NABH Accredited • Mental Health Support</p>
            </div>
            <div className="text-right space-y-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold">Annexure L4</div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold block mt-1">Version 1.0</div>
              <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded text-xs font-bold block mt-1">NABH</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-b-2 border-blue-900 px-8 py-4">
          <h2 className="text-xl font-bold text-blue-900 text-center">MENTAL HEALTH SUPPORT REQUEST TRACKER</h2>
        </div>

        <div className="p-8 space-y-6">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Request Tracker</h3>
              </div>
              <div className="flex gap-2 print:hidden">
                <button onClick={addRow} className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded text-xs hover:bg-blue-800">
                  <Plus size={12} />Add Request
                </button>
                <button onClick={deleteSelected} className="flex items-center gap-1 px-3 py-1 bg-red-700 text-white rounded text-xs hover:bg-red-800">
                  <Trash2 size={12} />Delete Selected
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2 print:hidden"><input type="checkbox" onChange={toggleSelectAll} className="w-4 h-4" /></th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Req. No.</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Date</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Emp ID</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Name</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Dept</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Designation</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Support Type</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Mode</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Assigned To</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Status</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Follow-Up</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 bg-yellow-50">Confidential Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-2 py-1 text-center print:hidden"><input type="checkbox" checked={row.selected} onChange={() => toggleSelect(index)} className="w-4 h-4" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.reqNo} onChange={(e) => handleRequestChange(index, 'reqNo', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="date" value={row.dateReq} onChange={(e) => handleRequestChange(index, 'dateReq', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.empId} onChange={(e) => handleRequestChange(index, 'empId', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.empName} onChange={(e) => handleRequestChange(index, 'empName', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.dept} onChange={(e) => handleRequestChange(index, 'dept', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.desig} onChange={(e) => handleRequestChange(index, 'desig', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.supportType} onChange={(e) => handleRequestChange(index, 'supportType', e.target.value)} placeholder="Counseling" className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.mode} onChange={(e) => handleRequestChange(index, 'mode', e.target.value)} placeholder="In-Person" className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.assignedTo} onChange={(e) => handleRequestChange(index, 'assignedTo', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1">
                        <select value={row.status} onChange={(e) => handleRequestChange(index, 'status', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs">
                          <option>Open</option><option>In Progress</option><option>Resolved</option><option>Closed</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 px-2 py-1"><input type="date" value={row.followUpDate} onChange={(e) => handleRequestChange(index, 'followUpDate', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1 bg-yellow-50"><textarea value={row.notes} onChange={(e) => handleRequestChange(index, 'notes', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs resize-vertical" rows="2"></textarea></td>
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
            <div className="font-semibold">Annexure L4 • Mental Health Support Request Tracker</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalL4Form;