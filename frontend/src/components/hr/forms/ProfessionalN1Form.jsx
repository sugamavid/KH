import React, { useState } from 'react';

const ProfessionalN1Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', empName: '', empId: '', empDept: '', empDesig: '', empDoj: '', empContact: '',
    resigDate: '', rCareer: false, rEducation: false, rRelocation: false, rHealth: false, rComp: false,
    rEnv: false, rOtherText: '', lwdReq: '', resigName: '', resigDeclDate: '', resigPlace: '',
    withdOriginalDate: '', withdRequestDate: '', withdReasons: '', withdName: '', withdDeclDate: '',
    withdPlace: '', dirName: '', dirDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handlePrint = () => window.print();
  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'N1_Resignation_Withdrawal.json';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="bg-white rounded-lg p-3 shadow-md">
            <div className="w-32 h-16 flex items-center justify-center">
              <span className="text-blue-900 font-bold text-sm">KOYILI</span>
            </div>
          </div>
          <div className="flex-1 text-center px-6">
            <h1 className="text-2xl font-bold text-white mb-2">KOYILI HOSPITAL</h1>
            <p className="text-blue-100 text-sm font-semibold">HR Department - Employee Separation & Exit Management</p>
            <p className="text-blue-200 text-xs mt-1">NABH Accredited • Confidential Document</p>
          </div>
          <div className="text-right">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-2 text-sm font-bold">N1</div>
            <div className="bg-white text-blue-900 px-3 py-1 rounded text-xs font-semibold mb-1">Version 1.0</div>
            <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded text-xs font-bold">NABH</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-end gap-3 mb-6 print:hidden">
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Form</button>
          <button onClick={handlePrint} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Print / PDF</button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">RESIGNATION FORM & WITHDRAWAL REQUEST</h2>
          <p className="text-gray-600">Annexure N1 - Employee Separation Process</p>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Document Control</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Document Title</label><p className="text-gray-900">Resignation Form & Withdrawal Request</p></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Linked SOP</label><p className="text-gray-900">SOP N.1 – Resignation Filing Process</p></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Effective Date</label>
              <input type="date" name="effectiveDate" value={formData.effectiveDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
          </div>
        </section>

        <section className="mb-8 bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="text-xl font-bold text-green-900 mb-4 border-l-4 border-green-600 pl-3">PART A – Resignation Form</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input type="text" name="empName" value={formData.empName} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label>
              <input type="text" name="empId" value={formData.empId} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
              <input type="text" name="empDept" value={formData.empDept} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label>
              <input type="text" name="empDesig" value={formData.empDesig} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Joining</label>
              <input type="date" name="empDoj" value={formData.empDoj} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Resignation Date</label>
              <input type="date" name="resigDate" value={formData.resigDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
          </div>
          <div className="bg-white p-4 rounded-lg mb-4">
            <h4 className="font-bold text-gray-800 mb-3">Reason for Resignation</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2"><input type="checkbox" name="rCareer" checked={formData.rCareer} onChange={handleInputChange} className="w-4 h-4" /><span>Career Growth Opportunity</span></label>
              <label className="flex items-center space-x-2"><input type="checkbox" name="rEducation" checked={formData.rEducation} onChange={handleInputChange} className="w-4 h-4" /><span>Higher Education / Training</span></label>
              <label className="flex items-center space-x-2"><input type="checkbox" name="rRelocation" checked={formData.rRelocation} onChange={handleInputChange} className="w-4 h-4" /><span>Relocation / Personal Reasons</span></label>
              <label className="flex items-center space-x-2"><input type="checkbox" name="rHealth" checked={formData.rHealth} onChange={handleInputChange} className="w-4 h-4" /><span>Health / Family Reasons</span></label>
              <div className="flex items-center space-x-2"><input type="checkbox" name="rOther" className="w-4 h-4" /><span>Other:</span>
                <input type="text" name="rOtherText" value={formData.rOtherText} onChange={handleInputChange} className="flex-1 px-3 py-1 border rounded-lg" /></div>
            </div>
          </div>
          <div><label className="block text-sm font-semibold text-gray-700 mb-1">Last Working Day Requested</label>
            <input type="date" name="lwdReq" value={formData.lwdReq} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
        </section>

        <section className="mb-8 bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
          <h3 className="text-xl font-bold text-orange-900 mb-4 border-l-4 border-orange-600 pl-3">PART B – Withdrawal of Resignation</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Original Resignation Date</label>
              <input type="date" name="withdOriginalDate" value={formData.withdOriginalDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Withdrawal Request Date</label>
              <input type="date" name="withdRequestDate" value={formData.withdRequestDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
          </div>
          <div><label className="block text-sm font-semibold text-gray-700 mb-1">Reason(s) for Withdrawal</label>
            <textarea name="withdReasons" value={formData.withdReasons} onChange={handleInputChange} rows="4" className="w-full px-3 py-2 border rounded-lg" /></div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>All resignations must be filed using Part A of this annexure.</li>
            <li>Withdrawal requests (Part B) must be filed within the notice period.</li>
            <li>Records must be linked with N2 (Exit Interview) and N3 (Clearance Certificate).</li>
            <li>Archive for 7 years for compliance and NABH/JCI accreditation.</li>
          </ul>
        </section>
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between text-white text-sm">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-400 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">N</div>
            <span>© 2024 Koyili Hospital • NABH Accredited • Confidential Document</span>
          </div>
          <div className="text-right"><span className="font-semibold">Annexure N1 - Resignation & Withdrawal</span></div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalN1Form;