import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Plus, Trash2 } from 'lucide-react';

const ProfessionalL2Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', fromDate: '', toDate: '',
    hrName: '', hrDate: ''
  });

  const [events, setEvents] = useState([
    { date: '', eventTitle: '', type: '', venue: '', duration: '', facilitator: '', target: '', linked: '', remarks: '' }
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEventChange = (index, field, value) => {
    const updated = [...events];
    updated[index][field] = value;
    setEvents(updated);
  };

  const addRow = () => {
    setEvents([...events, { date: '', eventTitle: '', type: '', venue: '', duration: '', facilitator: '', target: '', linked: '', remarks: '' }]);
  };

  const removeRow = (index) => {
    if (events.length > 1) {
      setEvents(events.filter((_, i) => i !== index));
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
    const data = { logo: logoData, formData, events };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_L2_Wellness_Calendar.json';
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
          if (data.events) setEvents(data.events);
        } catch (err) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all fields?')) {
      setFormData({ effectiveDate: '', fromDate: '', toDate: '', hrName: '', hrDate: '' });
      setEvents([{ date: '', eventTitle: '', type: '', venue: '', duration: '', facilitator: '', target: '', linked: '', remarks: '' }]);
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
              <p className="text-sm opacity-90 mb-1">HR Department • Health & Wellness Program</p>
              <p className="text-xs opacity-75">NABH Accredited • Employee Wellbeing</p>
            </div>
            <div className="text-right space-y-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold">Annexure L2</div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold block mt-1">Version 1.0</div>
              <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded text-xs font-bold block mt-1">NABH</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-b-2 border-blue-900 px-8 py-4">
          <h2 className="text-xl font-bold text-blue-900 text-center">HEALTH AND WELLNESS EVENT CALENDAR</h2>
        </div>

        <div className="p-8 space-y-6">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Wellness Events Calendar</h3>
              </div>
              <button onClick={addRow} className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded text-xs hover:bg-blue-800 print:hidden">
                <Plus size={12} />Add Event
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Date</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Event Title</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Type</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Venue</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Duration</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Facilitator</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Target Audience</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Linked SOP</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900">Remarks</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 print:hidden">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-2 py-1"><input type="date" value={row.date} onChange={(e) => handleEventChange(index, 'date', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.eventTitle} onChange={(e) => handleEventChange(index, 'eventTitle', e.target.value)} placeholder="Yoga Session" className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.type} onChange={(e) => handleEventChange(index, 'type', e.target.value)} placeholder="Workshop/Screening" className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.venue} onChange={(e) => handleEventChange(index, 'venue', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.duration} onChange={(e) => handleEventChange(index, 'duration', e.target.value)} placeholder="1 hr" className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.facilitator} onChange={(e) => handleEventChange(index, 'facilitator', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.target} onChange={(e) => handleEventChange(index, 'target', e.target.value)} placeholder="All Staff" className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.linked} onChange={(e) => handleEventChange(index, 'linked', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.remarks} onChange={(e) => handleEventChange(index, 'remarks', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center print:hidden">
                        <button onClick={() => removeRow(index)} className="text-red-600 hover:text-red-800" disabled={events.length === 1}>
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
            <div className="font-semibold">Annexure L2 • Health and Wellness Event Calendar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalL2Form;