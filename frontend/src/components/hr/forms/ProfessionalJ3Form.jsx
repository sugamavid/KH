import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Plus, Trash2 } from 'lucide-react';

const ProfessionalJ3Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', empName: '', empId: '', dept: '', designation: '', assessmentDate: '', assessorName: '',
    decName: '', decSign: '', decDate: '', decDesig: '',
    empAck: '', empSign: '', empDate: '', empPlace: '',
    headName: '', headSign: '', headDate: '', headPlace: '',
    hrName: '', hrSign: '', hrDate: '', hrPlace: ''
  });

  const [clinicalSkills, setClinicalSkills] = useState([
    { skill: 'Patient Admission & Documentation', criteria: 'Accurate, timely recording', rating: '', comments: '' },
    { skill: 'Vital Signs Monitoring', criteria: 'Correct technique, timely escalation', rating: '', comments: '' },
    { skill: 'Infection Control Practices', criteria: 'Hand hygiene, PPE, waste segregation', rating: '', comments: '' },
    { skill: 'Medication Administration', criteria: 'Right patient, dose, route, time', rating: '', comments: '' },
    { skill: 'Emergency Response', criteria: 'CPR/BLS/ALS readiness', rating: '', comments: '' },
    { skill: 'Clinical Equipment Handling', criteria: 'Safe use of monitors, IV pumps, etc.', rating: '', comments: '' },
    { skill: 'Patient Communication', criteria: 'Clarity, empathy, confidentiality', rating: '', comments: '' }
  ]);

  const [behavioralComp, setBehavioralComp] = useState([
    { parameter: 'Teamwork & Collaboration', rating: '', comments: '' },
    { parameter: 'Compliance with Policies', rating: '', comments: '' },
    { parameter: 'Patient-Centric Approach', rating: '', comments: '' },
    { parameter: 'Continuous Learning & Development', rating: '', comments: '' }
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (index, field, value) => {
    const updated = [...clinicalSkills];
    updated[index][field] = value;
    setClinicalSkills(updated);
  };

  const handleBehavioralChange = (index, field, value) => {
    const updated = [...behavioralComp];
    updated[index][field] = value;
    setBehavioralComp(updated);
  };

  const addSkillRow = () => {
    setClinicalSkills([...clinicalSkills, { skill: '', criteria: '', rating: '', comments: '' }]);
  };

  const removeSkillRow = (index) => {
    if (clinicalSkills.length > 1) {
      setClinicalSkills(clinicalSkills.filter((_, i) => i !== index));
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
    const data = { logo: logoData, formData, clinicalSkills, behavioralComp };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_J3_Competency_Assessment.json';
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
          if (data.clinicalSkills) setClinicalSkills(data.clinicalSkills);
          if (data.behavioralComp) setBehavioralComp(data.behavioralComp);
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
        effectiveDate: '', empName: '', empId: '', dept: '', designation: '', assessmentDate: '', assessorName: '',
        decName: '', decSign: '', decDate: '', decDesig: '',
        empAck: '', empSign: '', empDate: '', empPlace: '',
        headName: '', headSign: '', headDate: '', headPlace: '',
        hrName: '', hrSign: '', hrDate: '', hrPlace: ''
      });
      setClinicalSkills([
        { skill: 'Patient Admission & Documentation', criteria: 'Accurate, timely recording', rating: '', comments: '' },
        { skill: 'Vital Signs Monitoring', criteria: 'Correct technique, timely escalation', rating: '', comments: '' },
        { skill: 'Infection Control Practices', criteria: 'Hand hygiene, PPE, waste segregation', rating: '', comments: '' },
        { skill: 'Medication Administration', criteria: 'Right patient, dose, route, time', rating: '', comments: '' },
        { skill: 'Emergency Response', criteria: 'CPR/BLS/ALS readiness', rating: '', comments: '' },
        { skill: 'Clinical Equipment Handling', criteria: 'Safe use of monitors, IV pumps, etc.', rating: '', comments: '' },
        { skill: 'Patient Communication', criteria: 'Clarity, empathy, confidentiality', rating: '', comments: '' }
      ]);
      setBehavioralComp([
        { parameter: 'Teamwork & Collaboration', rating: '', comments: '' },
        { parameter: 'Compliance with Policies', rating: '', comments: '' },
        { parameter: 'Patient-Centric Approach', rating: '', comments: '' },
        { parameter: 'Continuous Learning & Development', rating: '', comments: '' }
      ]);
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
              <p className="text-sm opacity-90 mb-1">Human Resources Department • Clinical Skills Validation</p>
              <p className="text-xs opacity-75">NABH Accredited • Excellence in Clinical Training</p>
            </div>
            
            <div className="text-right space-y-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-semibold">
                Annexure J3
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
          <h2 className="text-xl font-bold text-blue-900 text-center">CLINICAL COMPETENCY ASSESSMENT CHECKLIST</h2>
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
                  <td className="border border-gray-300 px-4 py-2">Clinical Competency Assessment Checklist</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Annexure Number</td>
                  <td className="border border-gray-300 px-4 py-2">J3</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Linked SOP</td>
                  <td className="border border-gray-300 px-4 py-2">SOP J.3 – Clinical Competency Validation Protocol</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">By-Laws Reference</td>
                  <td className="border border-gray-300 px-4 py-2">Section 9.1(c) – Clinical & Safety Training</td>
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
                  <td className="border border-gray-300 px-4 py-2">Nursing / Medical Education & HR</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold">Approved Authority</td>
                  <td className="border border-gray-300 px-4 py-2">Clinical Head / Nursing Superintendent / HR Manager</td>
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
              This Annexure provides the Clinical Competency Assessment Checklist for Koyili Hospital. It ensures compliance with SOP J.3 and By-Laws Section 9.1 by evaluating clinical, technical, and behavioral competencies of healthcare staff through a structured checklist. It also ensures alignment with patient safety standards, accreditation requirements (NABH/JCI), and continuous professional development.
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
                  <input type="text" name="dept" value={formData.dept} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Designation</label>
                  <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Assessment Date</label>
                  <input type="date" name="assessmentDate" value={formData.assessmentDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Assessor Name & Designation</label>
                  <input type="text" name="assessorName" value={formData.assessorName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Table A - Clinical Skills */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Table A – Clinical Skills Assessment</h3>
              </div>
              <button onClick={addSkillRow} className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded text-xs hover:bg-blue-800 print:hidden">
                <Plus size={12} />
                Add Skill Row
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[7%]">Sl. No.</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[23%]">Skill Area</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[30%]">Competency Criteria</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[12%]">Rating (1-5)</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[20%]">Assessor Comments</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold text-blue-900 w-[8%] print:hidden">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {clinicalSkills.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-2 py-1 text-center">{index + 1}</td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.skill} onChange={(e) => handleSkillChange(index, 'skill', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.criteria} onChange={(e) => handleSkillChange(index, 'criteria', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="number" min="1" max="5" value={row.rating} onChange={(e) => handleSkillChange(index, 'rating', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input type="text" value={row.comments} onChange={(e) => handleSkillChange(index, 'comments', e.target.value)} className="w-full border-gray-300 rounded px-1 py-1 text-xs" />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-center print:hidden">
                        <button onClick={() => removeSkillRow(index)} className="text-red-600 hover:text-red-800" disabled={clinicalSkills.length === 1}>
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table B - Behavioral Competency */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Table B – Behavioral & Professional Competency</h3>
              </div>
            </div>
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 font-semibold text-blue-900 w-[40%]">Parameter</th>
                  <th className="border border-gray-300 px-3 py-2 font-semibold text-blue-900 w-[15%]">Rating (1-5)</th>
                  <th className="border border-gray-300 px-3 py-2 font-semibold text-blue-900 w-[45%]">Comments</th>
                </tr>
              </thead>
              <tbody>
                {behavioralComp.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-3 py-2">{row.parameter}</td>
                    <td className="border border-gray-300 px-3 py-2">
                      <input type="number" min="1" max="5" value={row.rating} onChange={(e) => handleBehavioralChange(index, 'rating', e.target.value)} className="w-full border-gray-300 rounded px-2 py-1 text-xs" />
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      <input type="text" value={row.comments} onChange={(e) => handleBehavioralChange(index, 'comments', e.target.value)} className="w-full border-gray-300 rounded px-2 py-1 text-xs" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Declaration by Assessor */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-blue-700 rounded"></div>
                <h3 className="font-semibold text-blue-900">Declaration by Assessor</h3>
              </div>
            </div>
            <div className="p-4 space-y-4 text-sm">
              <p className="text-gray-700">I confirm that the assessment recorded above is accurate, evidence-based, and conducted as per SOP J.3 and hospital policy.</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                  <input type="text" name="decName" value={formData.decName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Signature</label>
                  <input type="text" name="decSign" value={formData.decSign} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                  <input type="date" name="decDate" value={formData.decDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Designation</label>
                  <input type="text" name="decDesig" value={formData.decDesig} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
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
                <p className="font-semibold text-gray-800 mb-3">Employee (Acknowledgment)</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="empAck" value={formData.empAck} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Signature</label>
                    <input type="text" name="empSign" value={formData.empSign} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="empDate" value={formData.empDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Place</label>
                    <input type="text" name="empPlace" value={formData.empPlace} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-3">Department/Clinical Head</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="headName" value={formData.headName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Signature</label>
                    <input type="text" name="headSign" value={formData.headSign} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                    <input type="date" name="headDate" value={formData.headDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Place</label>
                    <input type="text" name="headPlace" value={formData.headPlace} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-3">HR Manager</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                    <input type="text" name="hrName" value={formData.hrName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Signature</label>
                    <input type="text" name="hrSign" value={formData.hrSign} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-1.5" />
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
                <li>Competency assessments must be conducted annually or upon new role allocation.</li>
                <li>The checklist must be tailored for nurses, doctors, technicians, and support staff.</li>
                <li>Competency results must inform training needs (Annexure J1), training calendar (Annexure J2), and training tracker (Annexure J5).</li>
                <li>Non-competency may trigger PIP (Annexure H4) or retraining.</li>
                <li>All assessment records must be archived for 7 years for compliance and audits.</li>
                <li>This Annexure shall be read in conjunction with SOP J.3, By-Laws Section 9.1, and related annexures (J1, J2, J5, H4).</li>
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
              Annexure J3 • Clinical Competency Assessment Checklist
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalJ3Form;
