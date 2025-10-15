import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Plus, Trash2, Calendar, Clock, Shield } from 'lucide-react';

const ProfessionalE2Form = () => {
  const standardShifts = [
    { shift_type: 'Morning Shift', in_time: '06:00', out_time: '14:00', total_hrs: '8', break: '1 hour', notes: '' },
    { shift_type: 'Day Shift', in_time: '08:00', out_time: '16:00', total_hrs: '8', break: '1 hour', notes: '' },
    { shift_type: 'Evening Shift', in_time: '14:00', out_time: '22:00', total_hrs: '8', break: '1 hour', notes: '' },
    { shift_type: 'Night Shift', in_time: '22:00', out_time: '06:00', total_hrs: '8', break: '1 hour', notes: '' }
  ];

  const [formData, setFormData] = useState({
    effective_date: '',
    department: '', period_from: '', period_to: '',
    roster: [{ date: '', emp_id: '', emp_name: '', desig: '', shift: '', in_time: '', out_time: '', total_hrs: '', weekly_off: '', overtime: '', approved_by: '', remarks: '' }],
    shifts: standardShifts,
    sig_dept_name: '', sig_dept_date: '',
    sig_hr_name: '', sig_hr_date: '',
    sig_co_name: '', sig_co_date: ''
  });

  const [logoData, setLogoData] = useState('');

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('e2_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('e2_form_data', JSON.stringify(updated));
  };

  const handleArrayChange = (arrayName, index, field, value) => {
    const updated = { ...formData };
    updated[arrayName][index][field] = value;
    setFormData(updated);
    localStorage.setItem('e2_form_data', JSON.stringify(updated));
  };

  const addRow = (arrayName, template) => {
    const updated = { ...formData };
    updated[arrayName].push(template);
    setFormData(updated);
  };

  const removeRow = (arrayName, index) => {
    if (formData[arrayName].length > 1) {
      const updated = { ...formData };
      updated[arrayName].splice(index, 1);
      setFormData(updated);
      localStorage.setItem('e2_form_data', JSON.stringify(updated));
    }
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'E2-Shift-Roster.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('e2_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-600 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {logoData && <img src={logoData} alt="Logo" className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg object-contain" />}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
              <p className="text-blue-200 text-sm mt-1">Time & Attendance Department</p>
              <p className="text-blue-300 text-xs">Pallikkunnu, Talap, Kannur, Kerala</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-1">Shift Management</p>
              <p className="text-sm font-bold">ROSTER TEMPLATE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 px-8 py-4 border-b-2 border-blue-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-blue-900">Annexure:</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold">E2</span>
          </div>
          <div className="w-px h-4 bg-blue-300"></div>
          <div><span className="font-semibold text-blue-900">SOP:</span> E.2</div>
          <div className="w-px h-4 bg-blue-300"></div>
          <div><span className="font-semibold text-blue-900">Version:</span> 1.0</div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-blue-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Save className="w-4 h-4" /> Save
        </button>
        <label className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer">
          <Upload className="w-4 h-4" /> Load
          <input type="file" accept=".json" onChange={handleLoad} className="hidden" />
        </label>
        <button onClick={() => window.print()} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm font-semibold">
          <Download className="w-4 h-4" /> Print/PDF
        </button>
      </div>

      <div className="px-8 py-8 border-b border-blue-200">
        <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">Shift Management</div>
        <h2 className="text-3xl font-bold text-blue-900 mb-3">SHIFT ROSTER TEMPLATE</h2>
        <div className="flex items-center gap-4 text-sm text-blue-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP E.2 – Shift Scheduling & Roster Management</span></div>
          <div className="w-px h-4 bg-blue-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 5.1-5.4</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-blue-600 font-semibold">Document Title:</span><p className="text-blue-900">Shift Roster Template</p></div>
            <div><span className="text-blue-600 font-semibold">Annexure Number:</span><p className="text-blue-900">E2</p></div>
            <div><span className="text-blue-600 font-semibold">Linked SOP:</span><p className="text-blue-900">SOP E.2 – Shift Scheduling & Roster Management</p></div>
            <div><span className="text-blue-600 font-semibold">By-Laws Reference:</span><p className="text-blue-900">Section 5.1-5.4</p></div>
            <div><span className="text-blue-600 font-semibold">Version No.:</span><p className="text-blue-900">1.0</p></div>
            <div>
              <span className="text-blue-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effective_date} onChange={(e) => handleChange('effective_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Department & Roster Period</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-2">Department:</label>
              <input type="text" value={formData.department} onChange={(e) => handleChange('department', e.target.value)}
                placeholder="Department Name"
                className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-2">From:</label>
              <input type="date" value={formData.period_from} onChange={(e) => handleChange('period_from', e.target.value)}
                className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-2">To:</label>
              <input type="date" value={formData.period_to} onChange={(e) => handleChange('period_to', e.target.value)}
                className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-blue-900">Shift Roster</h3>
            <button onClick={() => addRow('roster', { date: '', emp_id: '', emp_name: '', desig: '', shift: '', in_time: '', out_time: '', total_hrs: '', weekly_off: '', overtime: '', approved_by: '', remarks: '' })}
              className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs font-semibold flex items-center gap-1">
              <Plus className="w-3 h-3" /> Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold w-8">Sl.</th>
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold">Date</th>
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold">Emp ID</th>
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold">Name</th>
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold">Designation</th>
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold">Shift</th>
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold">In-Time</th>
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold">Out-Time</th>
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold">Total Hrs</th>
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold">Weekly Off</th>
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold">OT</th>
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold">Approved By</th>
                  <th className="border border-blue-300 px-2 py-2 text-left font-semibold">Remarks</th>
                  <th className="border border-blue-300 px-2 py-2 text-center font-semibold w-8">Del</th>
                </tr>
              </thead>
              <tbody>
                {formData.roster.map((row, index) => (
                  <tr key={index} className="hover:bg-blue-50">
                    <td className="border border-blue-300 px-2 py-2 text-center">{index + 1}</td>
                    <td className="border border-blue-300 px-2 py-2"><input type="date" value={row.date} onChange={(e) => handleArrayChange('roster', index, 'date', e.target.value)} className="w-28 px-1 py-1 border border-blue-200 rounded text-xs" /></td>
                    <td className="border border-blue-300 px-2 py-2"><input type="text" value={row.emp_id} onChange={(e) => handleArrayChange('roster', index, 'emp_id', e.target.value)} className="w-20 px-1 py-1 border border-blue-200 rounded text-xs" /></td>
                    <td className="border border-blue-300 px-2 py-2"><input type="text" value={row.emp_name} onChange={(e) => handleArrayChange('roster', index, 'emp_name', e.target.value)} className="w-28 px-1 py-1 border border-blue-200 rounded text-xs" /></td>
                    <td className="border border-blue-300 px-2 py-2"><input type="text" value={row.desig} onChange={(e) => handleArrayChange('roster', index, 'desig', e.target.value)} className="w-24 px-1 py-1 border border-blue-200 rounded text-xs" /></td>
                    <td className="border border-blue-300 px-2 py-2"><input type="text" value={row.shift} onChange={(e) => handleArrayChange('roster', index, 'shift', e.target.value)} className="w-20 px-1 py-1 border border-blue-200 rounded text-xs" /></td>
                    <td className="border border-blue-300 px-2 py-2"><input type="time" value={row.in_time} onChange={(e) => handleArrayChange('roster', index, 'in_time', e.target.value)} className="w-20 px-1 py-1 border border-blue-200 rounded text-xs" /></td>
                    <td className="border border-blue-300 px-2 py-2"><input type="time" value={row.out_time} onChange={(e) => handleArrayChange('roster', index, 'out_time', e.target.value)} className="w-20 px-1 py-1 border border-blue-200 rounded text-xs" /></td>
                    <td className="border border-blue-300 px-2 py-2"><input type="text" value={row.total_hrs} onChange={(e) => handleArrayChange('roster', index, 'total_hrs', e.target.value)} className="w-16 px-1 py-1 border border-blue-200 rounded text-xs" /></td>
                    <td className="border border-blue-300 px-2 py-2"><input type="text" value={row.weekly_off} onChange={(e) => handleArrayChange('roster', index, 'weekly_off', e.target.value)} className="w-16 px-1 py-1 border border-blue-200 rounded text-xs" /></td>
                    <td className="border border-blue-300 px-2 py-2"><input type="text" value={row.overtime} onChange={(e) => handleArrayChange('roster', index, 'overtime', e.target.value)} className="w-16 px-1 py-1 border border-blue-200 rounded text-xs" /></td>
                    <td className="border border-blue-300 px-2 py-2"><input type="text" value={row.approved_by} onChange={(e) => handleArrayChange('roster', index, 'approved_by', e.target.value)} className="w-24 px-1 py-1 border border-blue-200 rounded text-xs" /></td>
                    <td className="border border-blue-300 px-2 py-2"><input type="text" value={row.remarks} onChange={(e) => handleArrayChange('roster', index, 'remarks', e.target.value)} className="w-24 px-1 py-1 border border-blue-200 rounded text-xs" /></td>
                    <td className="border border-blue-300 px-2 py-2 text-center"><button onClick={() => removeRow('roster', index)} className="text-red-600 hover:text-red-800"><Trash2 className="w-3 h-3" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-2 border-blue-200 rounded-xl p-6 bg-amber-50">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Standard Shift Timings (Hospital Policy)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="border border-blue-300 px-3 py-2 text-left font-semibold w-8">Sl.</th>
                  <th className="border border-blue-300 px-3 py-2 text-left font-semibold">Shift Type</th>
                  <th className="border border-blue-300 px-3 py-2 text-left font-semibold">In-Time</th>
                  <th className="border border-blue-300 px-3 py-2 text-left font-semibold">Out-Time</th>
                  <th className="border border-blue-300 px-3 py-2 text-left font-semibold">Total Hours</th>
                  <th className="border border-blue-300 px-3 py-2 text-left font-semibold">Break Duration</th>
                  <th className="border border-blue-300 px-3 py-2 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {formData.shifts.map((shift, index) => (
                  <tr key={index} className="hover:bg-blue-50">
                    <td className="border border-blue-300 px-3 py-2 text-center">{index + 1}</td>
                    <td className="border border-blue-300 px-3 py-2">{shift.shift_type}</td>
                    <td className="border border-blue-300 px-3 py-2">{shift.in_time}</td>
                    <td className="border border-blue-300 px-3 py-2">{shift.out_time}</td>
                    <td className="border border-blue-300 px-3 py-2">{shift.total_hrs}</td>
                    <td className="border border-blue-300 px-3 py-2">{shift.break}</td>
                    <td className="border border-blue-300 px-3 py-2"><input type="text" value={shift.notes} onChange={(e) => handleArrayChange('shifts', index, 'notes', e.target.value)} className="w-full px-2 py-1 border border-blue-200 rounded text-sm" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-2 border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Signatures</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">Department Head (Roster Preparation)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-blue-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_dept_name} onChange={(e) => handleChange('sig_dept_name', e.target.value)}
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
                <div><label className="block text-sm font-semibold text-blue-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_dept_date} onChange={(e) => handleChange('sig_dept_date', e.target.value)}
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-blue-200 pt-6">
              <h4 className="font-semibold text-blue-800 mb-3">HR Manager (Approval & Verification)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-blue-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
                <div><label className="block text-sm font-semibold text-blue-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-blue-200 pt-6">
              <h4 className="font-semibold text-blue-800 mb-3">Compliance Officer (Oversight & Audit)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-blue-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_co_name} onChange={(e) => handleChange('sig_co_name', e.target.value)}
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
                <div><label className="block text-sm font-semibold text-blue-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_co_date} onChange={(e) => handleChange('sig_co_date', e.target.value)}
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-blue-200 rounded-xl p-6 bg-green-50">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-blue-700">
            <li>Rosters must be prepared 7 days in advance and approved by department head and HR.</li>
            <li>All shift assignments must comply with labour laws and hospital policies.</li>
            <li>Overtime must be pre-approved by department head and logged in this roster.</li>
            <li>Weekly offs must be rotational and fair across all employees.</li>
            <li>Any changes to the roster must be documented with proper justification.</li>
          </ul>
        </section>
      </div>

      <div className="bg-blue-100 px-8 py-4 text-center text-xs text-blue-600 border-t-2 border-blue-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      </div>
    </div>
  );
};

export default ProfessionalE2Form;
