import React, { useState } from 'react';

const ProfessionalM5Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '',
    // Part A - Complaint Form
    cName: '',
    cId: '',
    cDept: '',
    cDesig: '',
    cContact: '',
    cDate: '',
    rName: '',
    rId: '',
    rDept: '',
    rDesig: '',
    nPhysical: false,
    nVerbal: false,
    nAdvances: false,
    nWritten: false,
    nOther: false,
    nOtherText: '',
    incDate: '',
    incTime: '',
    incLoc: '',
    incWitness: '',
    incEvidence: '',
    compRef: '',
    complaintDesc: '',
    cDeclName: '',
    cDeclDate: '',
    cDeclPlace: '',
    // Part B - ICC Meeting
    mRef: '',
    mDate: '',
    mVenue: '',
    mSummary: '',
    prepName: '',
    prepDate: '',
    revName: '',
    revDate: '',
    apprName: '',
    apprDate: ''
  });

  const [attendees, setAttendees] = useState([]);
  const [complaints, setComplaints] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const addAttendee = () => {
    setAttendees([...attendees, { name: '', designation: '', role: '', signature: '' }]);
  };

  const removeAttendee = (index) => {
    setAttendees(attendees.filter((_, i) => i !== index));
  };

  const handleAttendeeChange = (index, field, value) => {
    const newAttendees = [...attendees];
    newAttendees[index][field] = value;
    setAttendees(newAttendees);
  };

  const addComplaint = () => {
    setComplaints([...complaints, { 
      ref: '', 
      complainant: '', 
      respondent: '', 
      nature: '', 
      observations: '', 
      decision: '', 
      timeline: '', 
      authority: '' 
    }]);
  };

  const removeComplaint = (index) => {
    setComplaints(complaints.filter((_, i) => i !== index));
  };

  const handleComplaintChange = (index, field, value) => {
    const newComplaints = [...complaints];
    newComplaints[index][field] = value;
    setComplaints(newComplaints);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    const dataStr = JSON.stringify({ formData, attendees, complaints }, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'M5_POSH_Complaint_ICC_Meeting.json';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Standardized Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="bg-white rounded-lg p-3 shadow-md">
            <div className="w-32 h-16 flex items-center justify-center">
              <span className="text-blue-900 font-bold text-sm">KOYILI</span>
            </div>
          </div>
          
          <div className="flex-1 text-center px-6">
            <h1 className="text-2xl font-bold text-white mb-2">KOYILI HOSPITAL</h1>
            <p className="text-blue-100 text-sm font-semibold">HR Department - POSH Compliance & ICC Governance</p>
            <p className="text-blue-200 text-xs mt-1">NABH Accredited • Confidential Document</p>
          </div>
          
          <div className="text-right">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-2 text-sm font-bold">M5</div>
            <div className="bg-white text-blue-900 px-3 py-1 rounded text-xs font-semibold mb-1">Version 1.0</div>
            <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded text-xs font-bold">NABH</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mb-6 print:hidden">
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Save Form
          </button>
          <button onClick={handlePrint} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Print / PDF
          </button>
        </div>

        {/* Form Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">POSH COMPLAINT FORM & ICC MEETING REGISTER</h2>
          <p className="text-gray-600">Annexure M5 - POSH Act 2013 Compliance</p>
        </div>

        {/* Document Control */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Document Control</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Document Title</label>
              <p className="text-gray-900">POSH Complaint Form & ICC Meeting Register</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Annexure Number</label>
              <p className="text-gray-900">M5</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Linked SOP</label>
              <p className="text-gray-900">SOP M.5 – POSH Complaints & ICC Protocol</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">By-Laws Reference</label>
              <p className="text-gray-900">Section 21.6, Section 5.3</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Effective Date</label>
              <input
                type="date"
                name="effectiveDate"
                value={formData.effectiveDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Approved Authority</label>
              <p className="text-gray-900">ICC Chairperson / Hospital Director</p>
            </div>
          </div>
        </section>

        {/* Purpose */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Purpose</h3>
          <p className="text-gray-700 text-justify leading-relaxed">
            This Annexure provides the formal POSH Complaint Form and ICC Meeting Register for Koyili Hospital. It ensures compliance with SOP M.5 and By-Laws Section 21.6 and Section 5.3 by standardising complaint filing and recording of ICC proceedings under the POSH Act, 2013, with alignment to principles of natural justice and NABH/JCI governance requirements.
          </p>
        </section>

        {/* PART A - POSH Complaint Form */}
        <section className="mb-8 bg-red-50 p-6 rounded-lg border-2 border-red-200">
          <h3 className="text-xl font-bold text-red-900 mb-4 border-l-4 border-red-600 pl-3">PART A – POSH Complaint Form</h3>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Complainant Details */}
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Complainant Details</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                  <input type="text" name="cName" value={formData.cName} onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label>
                  <input type="text" name="cId" value={formData.cId} onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
                  <input type="text" name="cDept" value={formData.cDept} onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label>
                  <input type="text" name="cDesig" value={formData.cDesig} onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Contact No.</label>
                  <input type="text" name="cContact" value={formData.cContact} onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Complaint</label>
                  <input type="date" name="cDate" value={formData.cDate} onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            </div>

            {/* Respondent Details */}
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Respondent Details</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                  <input type="text" name="rName" value={formData.rName} onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label>
                  <input type="text" name="rId" value={formData.rId} onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
                  <input type="text" name="rDept" value={formData.rDept} onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label>
                  <input type="text" name="rDesig" value={formData.rDesig} onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Nature of Complaint */}
          <div className="bg-white p-4 rounded-lg mb-4">
            <h4 className="font-bold text-gray-800 mb-3">Nature of Complaint</h4>
            <div className="space-y-2 mb-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="nPhysical" checked={formData.nPhysical} onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded" />
                <span className="text-gray-700">Unwelcome Physical Conduct</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="nVerbal" checked={formData.nVerbal} onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded" />
                <span className="text-gray-700">Verbal Harassment</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="nAdvances" checked={formData.nAdvances} onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded" />
                <span className="text-gray-700">Sexual Advances / Requests for Favours</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="nWritten" checked={formData.nWritten} onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded" />
                <span className="text-gray-700">Written/Electronic Harassment</span>
              </label>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="nOther" checked={formData.nOther} onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded" />
                <span className="text-gray-700">Other:</span>
                <input type="text" name="nOtherText" value={formData.nOtherText} onChange={handleInputChange}
                  className="flex-1 px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Incident</label>
                <input type="date" name="incDate" value={formData.incDate} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Time</label>
                <input type="time" name="incTime" value={formData.incTime} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                <input type="text" name="incLoc" value={formData.incLoc} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Witnesses (if any)</label>
                <input type="text" name="incWitness" value={formData.incWitness} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Complaint Ref. No.</label>
                <input type="text" name="compRef" value={formData.compRef} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Description of Complaint</label>
              <textarea name="complaintDesc" value={formData.complaintDesc} onChange={handleInputChange} rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          {/* Declaration */}
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-3">Declaration by Complainant</h4>
            <p className="text-gray-700 mb-4 italic">
              I declare that the information provided is true and submitted in good faith. I understand that false complaints may attract disciplinary action.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                <input type="text" name="cDeclName" value={formData.cDeclName} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                <input type="date" name="cDeclDate" value={formData.cDeclDate} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Place</label>
                <input type="text" name="cDeclPlace" value={formData.cDeclPlace} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </div>
        </section>

        {/* PART B - ICC Meeting Register */}
        <section className="mb-8 bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
          <h3 className="text-xl font-bold text-purple-900 mb-4 border-l-4 border-purple-600 pl-3">PART B – ICC Meeting Register</h3>
          
          <div className="bg-white p-4 rounded-lg mb-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Meeting Reference No.</label>
                <input type="text" name="mRef" value={formData.mRef} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Meeting</label>
                <input type="date" name="mDate" value={formData.mDate} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Venue</label>
                <input type="text" name="mVenue" value={formData.mVenue} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </div>

          {/* Attendees Table */}
          <div className="bg-white p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-gray-800">Attendees</h4>
              <button onClick={addAttendee} className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm">
                + Add Attendee
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-3 py-2 text-left">Name</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Designation</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Role</th>
                    <th className="border border-gray-300 px-3 py-2 text-center w-20">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {attendees.map((attendee, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 p-2">
                        <input type="text" value={attendee.name}
                          onChange={(e) => handleAttendeeChange(index, 'name', e.target.value)}
                          className="w-full px-2 py-1 border border-gray-300 rounded" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input type="text" value={attendee.designation}
                          onChange={(e) => handleAttendeeChange(index, 'designation', e.target.value)}
                          className="w-full px-2 py-1 border border-gray-300 rounded" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input type="text" value={attendee.role}
                          onChange={(e) => handleAttendeeChange(index, 'role', e.target.value)}
                          className="w-full px-2 py-1 border border-gray-300 rounded" />
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        <button onClick={() => removeAttendee(index)}
                          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white p-4 rounded-lg">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Summary of Action Items</label>
            <textarea name="mSummary" value={formData.mSummary} onChange={handleInputChange} rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
        </section>

        {/* Signatures & Approvals */}
        <section className="mb-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Signatures & Approvals</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Prepared By (ICC Secretary)</label>
                <input type="text" name="prepName" value={formData.prepName} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                <input type="date" name="prepDate" value={formData.prepDate} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Reviewed By (ICC Chairperson)</label>
                <input type="text" name="revName" value={formData.revName} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                <input type="date" name="revDate" value={formData.revDate} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Approved By (Hospital Director)</label>
                <input type="text" name="apprName" value={formData.apprName} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                <input type="date" name="apprDate" value={formData.apprDate} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Complaints under POSH must be filed using Part A of this form.</li>
            <li>ICC must acknowledge complaints within <strong>7 working days</strong>.</li>
            <li>Hearings must be conducted within <strong>90 days</strong> as per POSH Act timelines.</li>
            <li>ICC meeting minutes must be recorded in Part B of this annexure.</li>
            <li>All records must be archived for <strong>7 years</strong> under strict confidentiality.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 italic">
            Read with SOP M.5, By-Laws Section 21.6 & 5.3, and related annexures (M1-M4).
          </p>
        </section>
      </div>

      {/* Standardized Footer */}
      <div className="mt-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between text-white text-sm">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-400 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">
              N
            </div>
            <span>© 2024 Koyili Hospital • NABH Accredited • Confidential Document</span>
          </div>
          <div className="text-right">
            <span className="font-semibold">Annexure M5 - POSH Complaint & ICC Meeting</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalM5Form;
