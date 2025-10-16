import React, { useState } from 'react';

const ProfessionalN4Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', empName: '', empId: '', dept: '', desig: '', doj: '', doe: '',
    netAmt: '', finName: '', finDesig: '', finDate: '', hrName: '', hrDesig: '', hrDate: '',
    dirName: '', dirDesig: '', dirDate: '', scDate: '', scName: '', scId: '', scDesig: '',
    scDept: '', scFrom: '', scTo: '', scAuthName: '', scAuthDesig: '', scAuthDate: ''
  });

  const [ffRows, setFfRows] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addFFRow = () => {
    setFfRows([...ffRows, { component: '', amount: '', remarks: '' }]);
  };

  const removeFFRow = (index) => {
    setFfRows(ffRows.filter((_, i) => i !== index));
  };

  const handleFFRowChange = (index, field, value) => {
    const newRows = [...ffRows];
    newRows[index][field] = value;
    setFfRows(newRows);
  };

  const calculateTotal = () => {
    return ffRows.reduce((sum, row) => sum + (parseFloat(row.amount) || 0), 0).toFixed(2);
  };

  const prefillStandardLines = () => {
    setFfRows([
      { component: 'Unpaid Salary (till LWD)', amount: '', remarks: '' },
      { component: 'Leave Encashment (as per policy)', amount: '', remarks: '' },
      { component: 'Bonus / Incentives (if applicable)', amount: '', remarks: '' },
      { component: 'Reimbursements Pending', amount: '', remarks: '' },
      { component: 'Deductions (Loans/Advances/Notice Pay)', amount: '', remarks: '' },
      { component: 'Statutory Deductions (PF/ESI/Tax)', amount: '', remarks: '' },
      { component: 'Other Adjustments', amount: '', remarks: '' }
    ]);
  };

  const clearAll = () => {
    if (window.confirm('Clear all components?')) {
      setFfRows([]);
    }
  };

  const handlePrint = () => window.print();
  const handleSave = () => {
    const dataStr = JSON.stringify({ formData, ffRows }, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'N4_FF_Settlement_Service_Certificate.json';
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
            <p className="text-blue-100 text-sm font-semibold">HR/Finance Department - Final Settlement & Service Certificate</p>
            <p className="text-blue-200 text-xs mt-1">NABH Accredited • Confidential Document</p>
          </div>
          <div className="text-right">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-2 text-sm font-bold">N4</div>
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
          <h2 className="text-3xl font-bold text-blue-900 mb-2">FULL & FINAL SETTLEMENT & SERVICE CERTIFICATE</h2>
          <p className="text-gray-600">Annexure N4 - Employee Separation Closure</p>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Document Control</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Document Title</label>
              <p className="text-gray-900">Full & Final Settlement & Service Certificate</p></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Linked SOP</label>
              <p className="text-gray-900">SOP N.4 – F&F Settlement & Service Certificate Issuance</p></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Effective Date</label>
              <input type="date" name="effectiveDate" value={formData.effectiveDate} onChange={handleInputChange} 
                className="w-full px-3 py-2 border rounded-lg" /></div>
          </div>
        </section>

        <section className="mb-8 bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="text-xl font-bold text-green-900 mb-4 border-l-4 border-green-600 pl-3">PART A – Full & Final Settlement Sheet</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input type="text" name="empName" value={formData.empName} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label>
              <input type="text" name="empId" value={formData.empId} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
              <input type="text" name="dept" value={formData.dept} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label>
              <input type="text" name="desig" value={formData.desig} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Joining</label>
              <input type="date" name="doj" value={formData.doj} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Date of Exit</label>
              <input type="date" name="doe" value={formData.doe} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
          </div>

          <h4 className="text-lg font-bold text-gray-800 mb-3">Settlement Components</h4>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">Component</th>
                  <th className="border border-gray-300 px-3 py-2 text-center w-32">Amount (₹)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Remarks</th>
                  <th className="border border-gray-300 px-3 py-2 text-center w-20">Del</th>
                </tr>
              </thead>
              <tbody>
                {ffRows.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">
                      <input type="text" value={row.component} onChange={(e) => handleFFRowChange(index, 'component', e.target.value)} 
                        className="w-full px-2 py-1 border rounded" /></td>
                    <td className="border border-gray-300 p-2">
                      <input type="number" step="0.01" value={row.amount} onChange={(e) => handleFFRowChange(index, 'amount', e.target.value)} 
                        className="w-full px-2 py-1 border rounded" /></td>
                    <td className="border border-gray-300 p-2">
                      <input type="text" value={row.remarks} onChange={(e) => handleFFRowChange(index, 'remarks', e.target.value)} 
                        className="w-full px-2 py-1 border rounded" /></td>
                    <td className="border border-gray-300 p-2 text-center">
                      <button onClick={() => removeFFRow(index)} className="px-2 py-1 bg-red-500 text-white rounded text-sm">✕</button></td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-100 font-bold">
                <tr>
                  <td className="border border-gray-300 px-3 py-2 text-right">Total</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">₹{calculateTotal()}</td>
                  <td className="border border-gray-300" colSpan="2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 text-right">Net Payable / (Recoverable)</td>
                  <td className="border border-gray-300 px-3 py-2">
                    <input type="number" step="0.01" name="netAmt" value={formData.netAmt} onChange={handleInputChange} 
                      className="w-full px-2 py-1 border rounded font-bold" /></td>
                  <td className="border border-gray-300" colSpan="2"></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="flex gap-2 justify-end mb-4">
            <button onClick={addFFRow} className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">+ Add Component</button>
            <button onClick={prefillStandardLines} className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Prefill Standard Lines</button>
            <button onClick={clearAll} className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm">Clear All</button>
          </div>

          <h4 className="text-lg font-bold text-gray-800 mb-3">Certifications</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-3">
              <div><label className="text-sm font-semibold text-gray-700">Finance Dept</label></div>
              <div><input type="text" placeholder="Name" name="finName" value={formData.finName} onChange={handleInputChange} className="w-full px-2 py-1 border rounded" /></div>
              <div><input type="text" placeholder="Designation" name="finDesig" value={formData.finDesig} onChange={handleInputChange} className="w-full px-2 py-1 border rounded" /></div>
              <div><input type="date" name="finDate" value={formData.finDate} onChange={handleInputChange} className="w-full px-2 py-1 border rounded" /></div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div><label className="text-sm font-semibold text-gray-700">HR Verification</label></div>
              <div><input type="text" placeholder="Name" name="hrName" value={formData.hrName} onChange={handleInputChange} className="w-full px-2 py-1 border rounded" /></div>
              <div><input type="text" placeholder="Designation" name="hrDesig" value={formData.hrDesig} onChange={handleInputChange} className="w-full px-2 py-1 border rounded" /></div>
              <div><input type="date" name="hrDate" value={formData.hrDate} onChange={handleInputChange} className="w-full px-2 py-1 border rounded" /></div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div><label className="text-sm font-semibold text-gray-700">Director Approval</label></div>
              <div><input type="text" placeholder="Name" name="dirName" value={formData.dirName} onChange={handleInputChange} className="w-full px-2 py-1 border rounded" /></div>
              <div><input type="text" placeholder="Designation" name="dirDesig" value={formData.dirDesig} onChange={handleInputChange} className="w-full px-2 py-1 border rounded" /></div>
              <div><input type="date" name="dirDate" value={formData.dirDate} onChange={handleInputChange} className="w-full px-2 py-1 border rounded" /></div>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
          <h3 className="text-xl font-bold text-purple-900 mb-4 border-l-4 border-purple-600 pl-3">PART B – Service Certificate</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Certificate Date</label>
              <input type="date" name="scDate" value={formData.scDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee Name</label>
              <input type="text" name="scName" value={formData.scName} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label>
              <input type="text" name="scId" value={formData.scId} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label>
              <input type="text" name="scDesig" value={formData.scDesig} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
              <input type="text" name="scDept" value={formData.scDept} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Period of Service</label>
              <div className="flex gap-2 items-center">
                <span>From</span>
                <input type="date" name="scFrom" value={formData.scFrom} onChange={handleInputChange} className="flex-1 px-3 py-2 border rounded-lg" />
                <span>to</span>
                <input type="date" name="scTo" value={formData.scTo} onChange={handleInputChange} className="flex-1 px-3 py-2 border rounded-lg" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg mb-4 border border-purple-300">
            <p className="text-gray-700 leading-relaxed text-justify">
              This is to certify that <strong>Mr./Ms. {formData.scName || '_______________'}</strong> (Employee ID: <strong>{formData.scId || '___________'}</strong>), was employed with Koyili Hospital from <strong>{formData.scFrom || '__________'}</strong> to <strong>{formData.scTo || '__________'}</strong> as <strong>{formData.scDesig || '_______________'}</strong> in the <strong>{formData.scDept || '_______________'}</strong> Department. During their tenure, the employee has satisfactorily discharged their duties and responsibilities as per hospital standards and policies. We extend our best wishes for their future endeavours.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div><label className="text-sm font-semibold text-gray-700">Authorized Signatory</label></div>
            <div><input type="text" placeholder="Name" name="scAuthName" value={formData.scAuthName} onChange={handleInputChange} className="w-full px-2 py-1 border rounded" /></div>
            <div><input type="text" placeholder="Designation" name="scAuthDesig" value={formData.scAuthDesig} onChange={handleInputChange} className="w-full px-2 py-1 border rounded" /></div>
            <div><input type="date" name="scAuthDate" value={formData.scAuthDate} onChange={handleInputChange} className="w-full px-2 py-1 border rounded" /></div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Prepare F&F only after successful completion of <strong>N3 Clearance</strong>.</li>
            <li>Ensure settlements comply with statutory requirements (PF, Gratuity, ESI, TDS, etc.).</li>
            <li>Service Certificate to be issued only after all exit formalities are complete.</li>
            <li>Archive all records for 7 years for compliance, audits, and NABH/JCI governance.</li>
          </ul>
        </section>
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between text-white text-sm">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-400 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">N</div>
            <span>© 2024 Koyili Hospital • NABH Accredited • Confidential Document</span>
          </div>
          <div className="text-right"><span className="font-semibold">Annexure N4 - F&F Settlement & Service Certificate</span></div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalN4Form;
