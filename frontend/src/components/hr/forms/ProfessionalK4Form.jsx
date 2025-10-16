import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Plus, Trash2 } from 'lucide-react';

const ProfessionalK4Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', fromDate: '', toDate: '',
    filterDept: '', filterMode: '', filterAccess: '', search: '',
    empDeclaration: false,
    mgrName: '', mgrDate: '', mgrPlace: '',
    itName: '', itDate: '', itPlace: '',
    hrName: '', hrDate: '', hrPlace: ''
  });

  const [remoteWorkRecords, setRemoteWorkRecords] = useState([
    { empId: '', empName: '', dept: '', designation: '', location: '', mode: 'WFH', dates: '', accessProvided: 'Y', vpnId: '', kpi: '', issues: '', verifiedBy: '', remarks: '', selected: false }
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleRecordChange = (index, field, value) => {
    const updated = [...remoteWorkRecords];
    updated[index][field] = value;
    setRemoteWorkRecords(updated);
  };

  const toggleSelect = (index) => {
    const updated = [...remoteWorkRecords];
    updated[index].selected = !updated[index].selected;
    setRemoteWorkRecords(updated);
  };

  const toggleSelectAll = (e) => {
    const checked = e.target.checked;
    setRemoteWorkRecords(remoteWorkRecords.map(r => ({ ...r, selected: checked })));
  };

  const addRow = () => {
    setRemoteWorkRecords([...remoteWorkRecords, { empId: '', empName: '', dept: '', designation: '', location: '', mode: 'WFH', dates: '', accessProvided: 'Y', vpnId: '', kpi: '', issues: '', verifiedBy: '', remarks: '', selected: false }]);
  };

  const deleteSelected = () => {
    const remaining = remoteWorkRecords.filter(r => !r.selected);
    if (remaining.length > 0) {
      setRemoteWorkRecords(remaining);
    } else {
      setRemoteWorkRecords([{ empId: '', empName: '', dept: '', designation: '', location: '', mode: 'WFH', dates: '', accessProvided: 'Y', vpnId: '', kpi: '', issues: '', verifiedBy: '', remarks: '', selected: false }]);
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
    const data = { logo: logoData, formData, remoteWorkRecords };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_K4_Remote_Work_Tracker.json';
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
          if (data.remoteWorkRecords) setRemoteWorkRecords(data.remoteWorkRecords);
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
        filterDept: '', filterMode: '', filterAccess: '', search: '',
        empDeclaration: false,
        mgrName: '', mgrDate: '', mgrPlace: '',
        itName: '', itDate: '', itPlace: '',
        hrName: '', hrDate: '', hrPlace: ''
      });
      setRemoteWorkRecords([{ empId: '', empName: '', dept: '', designation: '', location: '', mode: 'WFH', dates: '', accessProvided: 'Y', vpnId: '', kpi: '', issues: '', verifiedBy: '', remarks: '', selected: false }]);
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
              <p className="text-sm opacity-90 mb-1">IT Department • Remote Work & Telemedicine</p>
              <p className="text-xs opacity-75">NABH Accredited • Work From Home Tracking</p>
            </div>
            <div className="text-right space-y-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold">Annexure K4</div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold block mt-1">Version 1.0</div>
              <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded text-xs font-bold block mt-1">NABH</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-b-2 border-blue-900 px-8 py-4">
          <h2 className="text-xl font-bold text-blue-900 text-center">REMOTE WORK TRACKER</h2>
        </div>

        <div className="p-8 space-y-6">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Tracking Period</h3>
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

          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Remote Work Register</h3>
              </div>
              <div className="flex gap-2 print:hidden">
                <button onClick={addRow} className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded text-xs hover:bg-blue-800">
                  <Plus size={12} />Add Row
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
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Emp ID</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Emp Name</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Dept</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Designation</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Location</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Mode</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Dates</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Access</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">VPN/ID</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">KPI</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Issues</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Verified By</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {remoteWorkRecords.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-2 py-1 text-center print:hidden">
                        <input type="checkbox" checked={row.selected} onChange={() => toggleSelect(index)} className="w-4 h-4" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.empId} onChange={(e) => handleRecordChange(index, 'empId', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.empName} onChange={(e) => handleRecordChange(index, 'empName', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.dept} onChange={(e) => handleRecordChange(index, 'dept', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.designation} onChange={(e) => handleRecordChange(index, 'designation', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.location} onChange={(e) => handleRecordChange(index, 'location', e.target.value)} placeholder="City/Home" className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1">
                        <select value={row.mode} onChange={(e) => handleRecordChange(index, 'mode', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs">
                          <option>WFH</option><option>Telemedicine</option><option>Hybrid</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.dates} onChange={(e) => handleRecordChange(index, 'dates', e.target.value)} placeholder="Jan 1-5" className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1">
                        <select value={row.accessProvided} onChange={(e) => handleRecordChange(index, 'accessProvided', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs">
                          <option>Y</option><option>N</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.vpnId} onChange={(e) => handleRecordChange(index, 'vpnId', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.kpi} onChange={(e) => handleRecordChange(index, 'kpi', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.issues} onChange={(e) => handleRecordChange(index, 'issues', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.verifiedBy} onChange={(e) => handleRecordChange(index, 'verifiedBy', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.remarks} onChange={(e) => handleRecordChange(index, 'remarks', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
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
            <div className="font-semibold">Annexure K4 • Remote Work Tracker</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalK4Form;