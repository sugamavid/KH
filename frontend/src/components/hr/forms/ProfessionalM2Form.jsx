import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Plus, Trash2 } from 'lucide-react';

const ProfessionalM2Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', meetingDate: '', meetingTime: '', venue: '',
    chairName: '', chairSign: '', chairDate: '',
    secName: '', secSign: '', secDate: ''
  });

  const [attendees, setAttendees] = useState([
    { name: '', designation: '', dept: '', present: true }
  ]);

  const [agendaItems, setAgendaItems] = useState([
    { item: '', discussion: '', decision: '', actionOwner: '', timeline: '' }
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAttendeeChange = (index, field, value) => {
    const updated = [...attendees];
    updated[index][field] = value;
    setAttendees(updated);
  };

  const handleAgendaChange = (index, field, value) => {
    const updated = [...agendaItems];
    updated[index][field] = value;
    setAgendaItems(updated);
  };

  const addAttendee = () => {
    setAttendees([...attendees, { name: '', designation: '', dept: '', present: true }]);
  };

  const removeAttendee = (index) => {
    if (attendees.length > 1) {
      setAttendees(attendees.filter((_, i) => i !== index));
    }
  };

  const addAgenda = () => {
    setAgendaItems([...agendaItems, { item: '', discussion: '', decision: '', actionOwner: '', timeline: '' }]);
  };

  const removeAgenda = (index) => {
    if (agendaItems.length > 1) {
      setAgendaItems(agendaItems.filter((_, i) => i !== index));
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
    const data = { logo: logoData, formData, attendees, agendaItems };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_M2_GRC_Minutes.json';
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
          if (data.attendees) setAttendees(data.attendees);
          if (data.agendaItems) setAgendaItems(data.agendaItems);
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
        effectiveDate: '', meetingDate: '', meetingTime: '', venue: '',
        chairName: '', chairSign: '', chairDate: '',
        secName: '', secSign: '', secDate: ''
      });
      setAttendees([{ name: '', designation: '', dept: '', present: true }]);
      setAgendaItems([{ item: '', discussion: '', decision: '', actionOwner: '', timeline: '' }]);
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
        <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 px-8 py-6">
          <div className="grid grid-cols-[200px_1fr_200px] gap-6 items-center">
            <div className="bg-white p-3 rounded-lg shadow-md">
              <img src={logoData} alt="Hospital Logo" className="w-full h-auto max-h-24 object-contain" />
            </div>
            <div className="text-center text-white">
              <h1 className="text-2xl font-bold mb-2">KOYILI HOSPITAL</h1>
              <p className="text-sm opacity-90 mb-1">Grievance Redressal Committee • Meeting Records</p>
              <p className="text-xs opacity-75">NABH Accredited • Transparent Governance</p>
            </div>
            <div className="text-right space-y-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold">Annexure M2</div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold block mt-1">Version 1.0</div>
              <div className="inline-block bg-yellow-400 text-rose-900 px-3 py-1 rounded text-xs font-bold block mt-1">NABH</div>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 border-b-2 border-rose-900 px-8 py-4">
          <h2 className="text-xl font-bold text-rose-900 text-center">GRC MEETING MINUTES TEMPLATE</h2>
        </div>

        <div className="p-8 space-y-6">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-rose-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-rose-700 rounded"></div>
                <h3 className="font-semibold text-rose-900">Agenda & Decisions</h3>
              </div>
              <button onClick={addAgenda} className="flex items-center gap-1 px-3 py-1 bg-rose-700 text-white rounded text-xs hover:bg-rose-800 print:hidden">
                <Plus size={12} />Add Item
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-rose-900">Item</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-rose-900">Discussion</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-rose-900">Decision</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-rose-900">Action Owner</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-rose-900">Timeline</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-rose-900 print:hidden">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {agendaItems.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.item} onChange={(e) => handleAgendaChange(index, 'item', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><textarea value={row.discussion} onChange={(e) => handleAgendaChange(index, 'discussion', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs resize-vertical" rows="2"></textarea></td>
                      <td className="border border-gray-300 px-2 py-1"><textarea value={row.decision} onChange={(e) => handleAgendaChange(index, 'decision', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs resize-vertical" rows="2"></textarea></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.actionOwner} onChange={(e) => handleAgendaChange(index, 'actionOwner', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1"><input type="text" value={row.timeline} onChange={(e) => handleAgendaChange(index, 'timeline', e.target.value)} placeholder="7 days" className="w-full border-gray-300 rounded px-1 py-1 text-xs" /></td>
                      <td className="border border-gray-300 px-2 py-1 text-center print:hidden">
                        <button onClick={() => removeAgenda(index)} className="text-red-600 hover:text-red-800" disabled={agendaItems.length === 1}>
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

        <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 px-8 py-4 mt-8">
          <div className="flex justify-between items-center text-white text-xs">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 text-rose-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px]">N</div>
              <span>© 2024 Koyili Hospital • NABH Accredited • Confidential Document</span>
            </div>
            <div className="font-semibold">Annexure M2 • GRC Meeting Minutes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalM2Form;