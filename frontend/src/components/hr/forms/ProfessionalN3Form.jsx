import React, { useState } from 'react';

const ProfessionalN3Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', empName: '', empId: '', empDept: '', empDesig: '', empDoj: '', empExit: '',
    empDeclName: '', empDeclDate: '', empDeclPlace: '', hrName: '', hrDate: '', hrPlace: '',
    dirName: '', dirDate: '', dirPlace: ''
  });

  const [clearances, setClearances] = useState([
    { dept: 'IT Department', items: 'Laptop, Mobile, Access Cards', status: '', signatory: '', date: '', remarks: '' },
    { dept: 'Finance', items: 'Pending Dues, Advances', status: '', signatory: '', date: '', remarks: '' },
    { dept: 'HR', items: 'Personnel File, Documents', status: '', signatory: '', date: '', remarks: '' }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addClearance = () => setClearances([...clearances, { dept: '', items: '', status: '', signatory: '', date: '', remarks: '' }]);
  const removeClearance = (index) => setClearances(clearances.filter((_, i) => i !== index));
  const handleClearanceChange = (index, field, value) => {
    const newClearances = [...clearances];
    newClearances[index][field] = value;
    setClearances(newClearances);
  };

  const handlePrint = () => window.print();
  const handleSave = () => {
    const dataStr = JSON.stringify({ formData, clearances }, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'N3_Clearance_Certificate.json';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="bg-white rounded-lg p-3 shadow-md"><div className="w-32 h-16 flex items-center justify-center"><span className="text-blue-900 font-bold text-sm">KOYILI</span></div></div>
          <div className="flex-1 text-center px-6">
            <h1 className="text-2xl font-bold text-white mb-2">KOYILI HOSPITAL</h1>
            <p className="text-blue-100 text-sm font-semibold">HR Department - Departmental Clearance Process</p>
            <p className="text-blue-200 text-xs mt-1">NABH Accredited • Confidential Document</p>
          </div>
          <div className="text-right">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-2 text-sm font-bold">N3</div>
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
          <h2 className="text-3xl font-bold text-blue-900 mb-2">DEPARTMENTAL CLEARANCE CERTIFICATE</h2>
          <p className="text-gray-600">Annexure N3 - Asset Return & Clearance Process</p>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Document Control</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Document Title</label><p className="text-gray-900">Departmental Clearance Certificate</p></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Linked SOP</label><p className="text-gray-900">SOP N.3 – Departmental Clearance Process</p></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Effective Date</label>
              <input type="date" name="effectiveDate" value={formData.effectiveDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
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
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Exit</label>
              <input type="date" name="empExit" value={formData.empExit} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
          </div>
        </section>

        <section className="mb-8 bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
          <h3 className="text-xl font-bold text-yellow-900 mb-4 border-l-4 border-yellow-600 pl-3">Clearance Checklist</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">Department / Section</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Items to be Cleared</th>
                  <th className="border border-gray-300 px-3 py-2 text-center w-32">Status</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Signatory</th>
                  <th className="border border-gray-300 px-3 py-2 text-center w-32">Date</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Remarks</th>
                  <th className="border border-gray-300 px-3 py-2 text-center w-20">Del</th>
                </tr>
              </thead>
              <tbody>
                {clearances.map((clr, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2"><input type="text" value={clr.dept} onChange={(e) => handleClearanceChange(index, 'dept', e.target.value)} className="w-full px-2 py-1 border rounded" /></td>
                    <td className="border border-gray-300 p-2"><input type="text" value={clr.items} onChange={(e) => handleClearanceChange(index, 'items', e.target.value)} className="w-full px-2 py-1 border rounded" /></td>
                    <td className="border border-gray-300 p-2"><select value={clr.status} onChange={(e) => handleClearanceChange(index, 'status', e.target.value)} className="w-full px-2 py-1 border rounded">
                      <option value="">-</option><option>Cleared</option><option>Pending</option><option>N/A</option></select></td>
                    <td className="border border-gray-300 p-2"><input type="text" value={clr.signatory} onChange={(e) => handleClearanceChange(index, 'signatory', e.target.value)} className="w-full px-2 py-1 border rounded" /></td>
                    <td className="border border-gray-300 p-2"><input type="date" value={clr.date} onChange={(e) => handleClearanceChange(index, 'date', e.target.value)} className="w-full px-2 py-1 border rounded" /></td>
                    <td className="border border-gray-300 p-2"><input type="text" value={clr.remarks} onChange={(e) => handleClearanceChange(index, 'remarks', e.target.value)} className="w-full px-2 py-1 border rounded" /></td>
                    <td className="border border-gray-300 p-2 text-center"><button onClick={() => removeClearance(index)} className="px-2 py-1 bg-red-500 text-white rounded text-sm">✕</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={addClearance} className="px-3 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 text-sm">+ Add Clearance Row</button>
        </section>

        <section className="mb-8 bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-900 mb-4 border-l-4 border-green-600 pl-3">Final Certification</h3>
          <p className="text-gray-700 mb-4 italic">
            This is to certify that Mr./Ms. <strong>{formData.empName || '________________'}</strong> (Employee ID: <strong>{formData.empId || '____________'}</strong>) has completed all departmental clearance requirements and is eligible for Full & Final Settlement and issuance of Service Certificate (Annexure N4).
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee Name</label>
                <input type="text" name="empDeclName" value={formData.empDeclName} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                <input type="date" name="empDeclDate" value={formData.empDeclDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Place</label>
                <input type="text" name="empDeclPlace" value={formData.empDeclPlace} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Verified by (HR)</label>
                <input type="text" name="hrName" value={formData.hrName} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                <input type="date" name="hrDate" value={formData.hrDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Place</label>
                <input type="text" name="hrPlace" value={formData.hrPlace} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Approved by (Director)</label>
                <input type="text" name="dirName" value={formData.dirName} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                <input type="date" name="dirDate" value={formData.dirDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-1">Place</label>
                <input type="text" name="dirPlace" value={formData.dirPlace} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Clearance certificate must be completed before processing F&F settlement (Annexure N4).</li>
            <li>Each department is responsible for ensuring assets, dues, and responsibilities are cleared.</li>
            <li>HR must coordinate and maintain the master clearance record.</li>
            <li>Employees cannot be relieved until this certificate is completed and approved.</li>
            <li>Records must be archived for 7 years for compliance and audits.</li>
          </ul>
        </section>
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between text-white text-sm">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-400 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">N</div>
            <span>© 2024 Koyili Hospital • NABH Accredited • Confidential Document</span>
          </div>
          <div className="text-right"><span className="font-semibold">Annexure N3 - Clearance Certificate</span></div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalN3Form;