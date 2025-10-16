import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, Plus, Trash2, CalendarDays, Calendar, Shield } from 'lucide-react';

const ProfessionalE4Form = () => {
  const [formData, setFormData] = useState({
    effective_date: '',
    calendar_year: '',
    holidays: [
      { date: '', day: '', holiday_name: '', type: '', remarks: '' }
    ],
    sig_hr_name: '', sig_hr_date: '',
    sig_dir_name: '', sig_dir_date: ''
  });

  const [logoData, setLogoData] = useState('');

  useEffect(() => {
    const logo = 'https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png';
    setLogoData(logo);
    const saved = localStorage.getItem('e4_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('e4_form_data', JSON.stringify(updated));
  };

  const handleArrayChange = (index, field, value) => {
    const updated = { ...formData };
    updated.holidays[index][field] = value;
    setFormData(updated);
    localStorage.setItem('e4_form_data', JSON.stringify(updated));
  };

  const addRow = () => {
    const updated = { ...formData };
    updated.holidays.push({ date: '', day: '', holiday_name: '', type: '', remarks: '' });
    setFormData(updated);
  };

  const removeRow = (index) => {
    if (formData.holidays.length > 1) {
      const updated = { ...formData };
      updated.holidays.splice(index, 1);
      setFormData(updated);
      localStorage.setItem('e4_form_data', JSON.stringify(updated));
    }
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'E4-Holiday-Calendar.json';
    link.click();
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        setFormData(data);
        localStorage.setItem('e4_form_data', JSON.stringify(data));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-8 py-6">
        <div className="flex items-center justify-between gap-6">
          <div className="flex-shrink-0">
            {logoData && <img src={logoData} alt="Koyili Hospital Logo" className="w-24 h-24 bg-white rounded-lg p-2 shadow-xl object-contain" />}
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-bold tracking-wide mb-1">KOYILI HOSPITAL</h1>
            <p className="text-blue-200 text-sm font-semibold">Human Resources Department</p>
            <p className="text-blue-300 text-xs">NABH Accredited • Pallikkunnu, Talap, Kannur, Kerala</p>
            <div className="mt-3 pt-3 border-t border-blue-400/30">
              <h2 className="text-xl font-bold">HOLIDAY CALENDAR FORMAT</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">E4</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200">Version 1.0</p>
            </div>
            <div className="bg-yellow-500/90 px-3 py-1 rounded-full">
              <p className="text-xs font-bold text-blue-900">NABH</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="bg-fuchsia-50 px-8 py-4 border-b-2 border-fuchsia-700 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-fuchsia-900">Annexure:</span>
            <span className="bg-fuchsia-100 text-fuchsia-800 px-3 py-1 rounded font-bold">E4</span>
          </div>
          <div className="w-px h-4 bg-fuchsia-300"></div>
          <div><span className="font-semibold text-fuchsia-900">SOP:</span> E.4</div>
          <div className="w-px h-4 bg-fuchsia-300"></div>
          <div><span className="font-semibold text-fuchsia-900">Version:</span> 1.0</div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-fuchsia-200 px-8 py-3 flex items-center justify-end gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700 transition-colors flex items-center gap-2 text-sm font-semibold">
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

      <div className="px-8 py-8 border-b border-fuchsia-200">
        <div className="inline-block px-4 py-1 bg-fuchsia-100 text-fuchsia-800 rounded-full text-sm font-semibold mb-4">Holiday Management</div>
        <h2 className="text-3xl font-bold text-fuchsia-900 mb-3">HOLIDAY CALENDAR FORMAT</h2>
        <div className="flex items-center gap-4 text-sm text-fuchsia-600">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>SOP E.4 – Holiday Calendar Management</span></div>
          <div className="w-px h-4 bg-fuchsia-300"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>By-Laws Section 6.6</span></div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        <section className="border-2 border-fuchsia-200 rounded-xl p-6 bg-fuchsia-50">
          <h3 className="text-lg font-bold text-fuchsia-900 mb-4 flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-fuchsia-700" />
            Document Control
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-fuchsia-600 font-semibold">Document Title:</span><p className="text-fuchsia-900">Holiday Calendar Format</p></div>
            <div><span className="text-fuchsia-600 font-semibold">Annexure Number:</span><p className="text-fuchsia-900">E4</p></div>
            <div><span className="text-fuchsia-600 font-semibold">Linked SOP:</span><p className="text-fuchsia-900">SOP E.4 – Holiday Calendar Management</p></div>
            <div><span className="text-fuchsia-600 font-semibold">By-Laws Reference:</span><p className="text-fuchsia-900">Section 6.6 – Public Holidays</p></div>
            <div><span className="text-fuchsia-600 font-semibold">Version No.:</span><p className="text-fuchsia-900">1.0</p></div>
            <div>
              <span className="text-fuchsia-600 font-semibold">Effective Date:</span>
              <input type="date" value={formData.effective_date} onChange={(e) => handleChange('effective_date', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-fuchsia-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500" />
            </div>
          </div>
        </section>

        <section className="border-2 border-fuchsia-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-fuchsia-900 mb-4">Calendar Year</h3>
          <div className="max-w-xs">
            <label className="block text-sm font-semibold text-fuchsia-700 mb-2">Year:</label>
            <input type="number" value={formData.calendar_year} onChange={(e) => handleChange('calendar_year', e.target.value)}
              placeholder="YYYY"
              className="w-full px-3 py-2 border border-fuchsia-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500" />
          </div>
        </section>

        <section className="border-2 border-fuchsia-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-fuchsia-900">Holiday List</h3>
            <button onClick={addRow} className="px-3 py-1 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700 text-xs font-semibold flex items-center gap-1">
              <Plus className="w-3 h-3" /> Add Holiday
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-fuchsia-700 text-white">
                  <th className="border border-fuchsia-300 px-3 py-3 text-left font-semibold w-12">Sl.</th>
                  <th className="border border-fuchsia-300 px-3 py-3 text-left font-semibold">Date</th>
                  <th className="border border-fuchsia-300 px-3 py-3 text-left font-semibold">Day</th>
                  <th className="border border-fuchsia-300 px-3 py-3 text-left font-semibold">Holiday Name</th>
                  <th className="border border-fuchsia-300 px-3 py-3 text-left font-semibold">Type</th>
                  <th className="border border-fuchsia-300 px-3 py-3 text-left font-semibold">Remarks</th>
                  <th className="border border-fuchsia-300 px-3 py-3 text-center font-semibold w-12">Del</th>
                </tr>
              </thead>
              <tbody>
                {formData.holidays.map((holiday, index) => (
                  <tr key={index} className="hover:bg-fuchsia-50">
                    <td className="border border-fuchsia-300 px-3 py-3 text-center font-bold">{index + 1}</td>
                    <td className="border border-fuchsia-300 px-3 py-3">
                      <input type="date" value={holiday.date} onChange={(e) => handleArrayChange(index, 'date', e.target.value)}
                        className="w-full px-2 py-1 border border-fuchsia-300 rounded focus:ring-1 focus:ring-fuchsia-400" />
                    </td>
                    <td className="border border-fuchsia-300 px-3 py-3">
                      <select value={holiday.day} onChange={(e) => handleArrayChange(index, 'day', e.target.value)}
                        className="w-full px-2 py-1 border border-fuchsia-300 rounded focus:ring-1 focus:ring-fuchsia-400">
                        <option value="">--</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                      </select>
                    </td>
                    <td className="border border-fuchsia-300 px-3 py-3">
                      <input type="text" value={holiday.holiday_name} onChange={(e) => handleArrayChange(index, 'holiday_name', e.target.value)}
                        placeholder="Holiday Name"
                        className="w-full px-2 py-1 border border-fuchsia-300 rounded focus:ring-1 focus:ring-fuchsia-400" />
                    </td>
                    <td className="border border-fuchsia-300 px-3 py-3">
                      <select value={holiday.type} onChange={(e) => handleArrayChange(index, 'type', e.target.value)}
                        className="w-full px-2 py-1 border border-fuchsia-300 rounded focus:ring-1 focus:ring-fuchsia-400">
                        <option value="">--</option>
                        <option value="National">National</option>
                        <option value="Religious">Religious</option>
                        <option value="Regional">Regional</option>
                        <option value="Hospital">Hospital</option>
                      </select>
                    </td>
                    <td className="border border-fuchsia-300 px-3 py-3">
                      <input type="text" value={holiday.remarks} onChange={(e) => handleArrayChange(index, 'remarks', e.target.value)}
                        placeholder="Notes"
                        className="w-full px-2 py-1 border border-fuchsia-300 rounded focus:ring-1 focus:ring-fuchsia-400" />
                    </td>
                    <td className="border border-fuchsia-300 px-3 py-3 text-center">
                      <button onClick={() => removeRow(index)} className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-fuchsia-600 mt-3">Total Holidays: <strong>{formData.holidays.length}</strong></p>
        </section>

        <section className="border-2 border-fuchsia-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-fuchsia-900 mb-4">Signatures & Approval</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-fuchsia-800 mb-3">HR Manager (Preparation)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-fuchsia-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_hr_name} onChange={(e) => handleChange('sig_hr_name', e.target.value)}
                    className="w-full px-3 py-2 border border-fuchsia-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500" /></div>
                <div><label className="block text-sm font-semibold text-fuchsia-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_hr_date} onChange={(e) => handleChange('sig_hr_date', e.target.value)}
                    className="w-full px-3 py-2 border border-fuchsia-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500" /></div>
              </div>
            </div>
            <div className="border-t-2 border-fuchsia-200 pt-6">
              <h4 className="font-semibold text-fuchsia-800 mb-3">Hospital Director (Final Approval)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-fuchsia-700 mb-2">Name:</label>
                  <input type="text" value={formData.sig_dir_name} onChange={(e) => handleChange('sig_dir_name', e.target.value)}
                    className="w-full px-3 py-2 border border-fuchsia-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500" /></div>
                <div><label className="block text-sm font-semibold text-fuchsia-700 mb-2">Date:</label>
                  <input type="date" value={formData.sig_dir_date} onChange={(e) => handleChange('sig_dir_date', e.target.value)}
                    className="w-full px-3 py-2 border border-fuchsia-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-fuchsia-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-fuchsia-900 mb-4">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-fuchsia-700">
            <li>Holiday calendar must be prepared and approved before December 31st for the following year.</li>
            <li>The calendar must be displayed on notice boards and circulated to all departments.</li>
            <li>Any changes to the holiday list must be approved by the Hospital Director.</li>
            <li>Emergency services departments must have separate on-call rosters for holidays.</li>
          </ul>
        </section>
      </div>

      <div className="bg-fuchsia-100 px-8 py-4 text-center text-xs text-fuchsia-600 border-t-2 border-fuchsia-200">
        © Koyili Hospital – Governance • Confidential • Version-controlled
      </div>
    </div>
  );
};

export default ProfessionalE4Form;