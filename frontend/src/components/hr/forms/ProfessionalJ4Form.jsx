import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Plus, Trash2, FileText } from 'lucide-react';

const ProfessionalJ4Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', empName: '', empId: '', department: '', designation: '', applicationDate: '', contact: '',
    trainingTitle: '', organizer: '', locationMode: '', startDate: '', endDate: '', duration: '', fee: '', travelCost: '', costCentre: '',
    justificationDetails: '', docBrochure: false, docNomination: false, docTNA: false, docApproval: false, docOther: '',
    empSignName: '', empSignDate: '', empSignPlace: '',
    headSignName: '', headSignDate: '', headSignPlace: '',
    hrSignName: '', hrSignDate: '', hrSignPlace: '',
    dirSignName: '', dirSignDate: '', dirSignPlace: ''
  });

  const [justificationPoints, setJustificationPoints] = useState([
    'Explain how this program benefits the role, department, and hospital goals…'
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleJustificationChange = (index, value) => {
    const updated = [...justificationPoints];
    updated[index] = value;
    setJustificationPoints(updated);
  };

  const addJustificationRow = () => {
    setJustificationPoints([...justificationPoints, '']);
  };

  const removeJustificationRow = (index) => {
    if (justificationPoints.length > 1) {
      setJustificationPoints(justificationPoints.filter((_, i) => i !== index));
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
    const data = { logo: logoData, formData, justificationPoints };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_J4_External_Training_Request.json';
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
          if (data.justificationPoints) setJustificationPoints(data.justificationPoints);
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
        effectiveDate: '', empName: '', empId: '', department: '', designation: '', applicationDate: '', contact: '',
        trainingTitle: '', organizer: '', locationMode: '', startDate: '', endDate: '', duration: '', fee: '', travelCost: '', costCentre: '',
        justificationDetails: '', docBrochure: false, docNomination: false, docTNA: false, docApproval: false, docOther: '',
        empSignName: '', empSignDate: '', empSignPlace: '',
        headSignName: '', headSignDate: '', headSignPlace: '',
        hrSignName: '', hrSignDate: '', hrSignPlace: '',
        dirSignName: '', dirSignDate: '', dirSignPlace: ''
      });
      setJustificationPoints(['Explain how this program benefits the role, department, and hospital goals…']);
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
              <p className="text-xs opacity-75">NABH Accredited • Professional Development</p>
            </div>
            
            <div className="text-right space-y-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold">
                Annexure J4
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
          <h2 className="text-xl font-bold text-blue-900 text-center">EXTERNAL TRAINING APPROVAL REQUEST</h2>
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
                  <td className="border border-gray-300 px-4 py-2">External Training Approval Request</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Annexure Number</td>
                  <td className="border border-gray-300 px-4 py-2">J4</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Linked SOP</td>
                  <td className="border border-gray-300 px-4 py-2">SOP J.4 – External Training Reimbursement Workflow</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">By-Laws Reference</td>
                  <td className="border border-gray-300 px-4 py-2">Section 9.2 – Professional Development</td>
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
                  <td className="border border-gray-300 px-4 py-2">Training & Development Cell / HR</td>
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
              This Annexure standardizes requests for external training, workshops, conferences, and certifications, ensuring alignment with SOP J.4, By-Laws Section 9.2, hospital objectives, budgetary feasibility, and accreditation expectations (NABH/JCI).
            </div>
          </div>

          {/* Employee Details */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Employee Details</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                  <input type="text" name="empName" value={formData.empName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Employee ID</label>
                  <input type="text" name="empId" value={formData.empId} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Department</label>
                  <input type="text" name="department" value={formData.department} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Designation</label>
                  <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Date of Application</label>
                  <input type="date" name="applicationDate" value={formData.applicationDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Contact (Email/Phone)</label>
                  <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Training Program Details */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Training Program Details</h3>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Title of Training/Workshop</label>
                <input type="text" name="trainingTitle" value={formData.trainingTitle} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Organizing Institution/Body</label>
                  <input type="text" name="organizer" value={formData.organizer} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Location / Mode</label>
                  <input type="text" name="locationMode" value={formData.locationMode} onChange={handleChange} placeholder="Onsite / Online / Hybrid" className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Start Date</label>
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">End Date</label>
                  <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Duration (Hours/Days)</label>
                  <input type="text" name="duration" value={formData.duration} onChange={handleChange} placeholder="e.g., 8 hrs / 2 days" className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Training Fee (₹)</label>
                  <input type="number" name="fee" value={formData.fee} onChange={handleChange} step="0.01" className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Travel / Accommodation Cost (₹)</label>
                  <input type="number" name="travelCost" value={formData.travelCost} onChange={handleChange} step="0.01" className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Budget Head / Cost Centre</label>
                  <input type="text" name="costCentre" value={formData.costCentre} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Justification */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Justification for Training Request</h3>
              </div>
              <div className="flex gap-2 print:hidden">
                <button onClick={addJustificationRow} className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded text-xs hover:bg-blue-800">
                  <Plus size={12} />
                  Add Row
                </button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                {justificationPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-gray-600 font-semibold text-sm mt-2">{index + 1}.</span>
                    <textarea
                      value={point}
                      onChange={(e) => handleJustificationChange(index, e.target.value)}
                      className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm resize-vertical"
                      rows="2"
                      placeholder="Explain how this program benefits the role, department, and hospital goals…"
                    />
                    {justificationPoints.length > 1 && (
                      <button onClick={() => removeJustificationRow(index)} className="text-red-600 hover:text-red-800 mt-2 print:hidden">
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Detailed Justification (Overall Explanation)</label>
                <textarea
                  name="justificationDetails"
                  value={formData.justificationDetails}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-vertical"
                  rows="4"
                  placeholder="Provide a detailed justification including objectives, expected outcomes, and linkage to competency gaps / accreditation requirements."
                />
              </div>
            </div>
          </div>

          {/* Supporting Documents */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Supporting Documents</h3>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-sm text-gray-600">Checklist:</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="docBrochure" checked={formData.docBrochure} onChange={handleChange} className="w-4 h-4" />
                  <span>Program Brochure</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="docNomination" checked={formData.docNomination} onChange={handleChange} className="w-4 h-4" />
                  <span>Nomination Letter</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="docTNA" checked={formData.docTNA} onChange={handleChange} className="w-4 h-4" />
                  <span>TNA Reference</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="docApproval" checked={formData.docApproval} onChange={handleChange} className="w-4 h-4" />
                  <span>Dept. Head Pre-Approval</span>
                </label>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Other (Specify)</label>
                <input type="text" name="docOther" value={formData.docOther} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
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
                <p className="font-semibold text-gray-800 mb-3">Employee (Requestor)</p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="empSignName" value={formData.empSignName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="empSignDate" value={formData.empSignDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Place</label>
                    <input type="text" name="empSignPlace" value={formData.empSignPlace} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-3">Department Head (Relevance Check)</p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="headSignName" value={formData.headSignName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="headSignDate" value={formData.headSignDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Place</label>
                    <input type="text" name="headSignPlace" value={formData.headSignPlace} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-3">HR Manager (Policy Check)</p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="hrSignName" value={formData.hrSignName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="hrSignDate" value={formData.hrSignDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Place</label>
                    <input type="text" name="hrSignPlace" value={formData.hrSignPlace} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-3">Hospital Director (Final Approval)</p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="dirSignName" value={formData.dirSignName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="dirSignDate" value={formData.dirSignDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Place</label>
                    <input type="text" name="dirSignPlace" value={formData.dirSignPlace} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
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
                <li>Submit requests at least 30 days in advance of the program dates.</li>
                <li>Ensure linkage with identified gaps from Annexure J1 (TNA) and alignment with Annexure J2 (Training Calendar).</li>
                <li>Finance validation is required for any costs before disbursement.</li>
                <li>Post-training, submit completion report & certificate (Annexure J5) within 7 days.</li>
                <li>Archive all records for a minimum of 7 years for compliance and audits.</li>
                <li>Read with SOP J.4, By-Laws Section 9.2, and annexures J1, J2, J5.</li>
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
              Annexure J4 • External Training Approval Request
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalJ4Form;
