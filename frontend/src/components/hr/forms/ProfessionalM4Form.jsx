import React, { useState } from 'react';

const ProfessionalM4Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '',
    empName: '',
    empId: '',
    empDept: '',
    empDesig: '',
    empContact: '',
    submissionDate: '',
    caseRef: '',
    caseNature: '',
    caseDecisionDate: '',
    caseAction: '',
    groundNew: false,
    groundProcess: false,
    groundPenalty: false,
    groundBias: false,
    groundOther: false,
    groundOtherText: '',
    appealExplanation: '',
    appealRelief: '',
    empDeclName: '',
    empDeclDate: '',
    empDeclPlace: '',
    appealRef: '',
    appealAckDate: '',
    appealNext: '',
    reviewName: '',
    reviewDate: '',
    approveName: '',
    approveDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'M4_Appeal_Submission.json';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Standardized Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="bg-white rounded-lg p-3 shadow-md">
            <div className="w-32 h-16 flex items-center justify-center">
              <span className="text-blue-900 font-bold text-sm">KOYILI</span>
            </div>
          </div>
          
          {/* Hospital Details */}
          <div className="flex-1 text-center px-6">
            <h1 className="text-2xl font-bold text-white mb-2">KOYILI HOSPITAL</h1>
            <p className="text-blue-100 text-sm font-semibold">HR Department - Grievance & Disciplinary Management</p>
            <p className="text-blue-200 text-xs mt-1">NABH Accredited • Confidential Document</p>
          </div>
          
          {/* Document Info */}
          <div className="text-right">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-2 text-sm font-bold">M4</div>
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
          <h2 className="text-3xl font-bold text-blue-900 mb-2">APPEAL SUBMISSION FORMAT</h2>
          <p className="text-gray-600">Annexure M4 - Appeals and Review Mechanism</p>
        </div>

        {/* Document Control */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Document Control</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Document Title</label>
              <p className="text-gray-900">Appeal Submission Format</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Annexure Number</label>
              <p className="text-gray-900">M4</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Linked SOP</label>
              <p className="text-gray-900">SOP M.4 – Appeals and Review Flow</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">By-Laws Reference</label>
              <p className="text-gray-900">Section 14.5 – Appeal Process</p>
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
              <p className="text-gray-900">Hospital Director / Appeals Review Committee</p>
            </div>
          </div>
        </section>

        {/* Purpose */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Purpose</h3>
          <p className="text-gray-700 text-justify leading-relaxed">
            This Annexure provides the Appeal Submission Format for Koyili Hospital employees. It ensures compliance with SOP M.4 and By-Laws Section 14.5 by standardizing the process for employees to appeal against disciplinary actions or GRC decisions. It also ensures adherence to natural justice, fair hearing, and NABH/JCI governance requirements.
          </p>
        </section>

        {/* Employee Details */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="empName"
                value={formData.empName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label>
              <input
                type="text"
                name="empId"
                value={formData.empId}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
              <input
                type="text"
                name="empDept"
                value={formData.empDept}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label>
              <input
                type="text"
                name="empDesig"
                value={formData.empDesig}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Contact No.</label>
              <input
                type="text"
                name="empContact"
                value={formData.empContact}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Submission</label>
              <input
                type="date"
                name="submissionDate"
                value={formData.submissionDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Details of Original Case */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Details of Original Case</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Case Reference No.</label>
              <input
                type="text"
                name="caseRef"
                value={formData.caseRef}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nature of Case / Misconduct</label>
              <input
                type="text"
                name="caseNature"
                value={formData.caseNature}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Original Decision</label>
              <input
                type="date"
                name="caseDecisionDate"
                value={formData.caseDecisionDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Disciplinary Action Taken</label>
              <input
                type="text"
                name="caseAction"
                value={formData.caseAction}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Grounds for Appeal */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Grounds for Appeal</h3>
          <div className="space-y-3 mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="groundNew"
                checked={formData.groundNew}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-gray-700">New evidence has emerged that was not considered in the original decision</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="groundProcess"
                checked={formData.groundProcess}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-gray-700">The disciplinary process was not followed as per SOP/By-Laws</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="groundPenalty"
                checked={formData.groundPenalty}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-gray-700">The penalty imposed is disproportionate to the misconduct</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="groundBias"
                checked={formData.groundBias}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-gray-700">Bias or unfair treatment in the original decision</span>
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="groundOther"
                checked={formData.groundOther}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-gray-700">Other (Specify):</span>
              <input
                type="text"
                name="groundOtherText"
                value={formData.groundOtherText}
                onChange={handleInputChange}
                className="flex-1 px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Explanation of Grounds for Appeal</label>
            <textarea
              name="appealExplanation"
              value={formData.appealExplanation}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Relief Sought / Outcome Requested</label>
            <textarea
              name="appealRelief"
              value={formData.appealRelief}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* Declaration */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Declaration by Employee</h3>
          <p className="text-gray-700 mb-4 italic">
            I declare that the information provided in this appeal is true, accurate, and submitted in good faith. I understand that filing frivolous or malicious appeals may attract disciplinary action.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="empDeclName"
                value={formData.empDeclName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="empDeclDate"
                value={formData.empDeclDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Place</label>
              <input
                type="text"
                name="empDeclPlace"
                value={formData.empDeclPlace}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* For Official Use Only */}
        <section className="mb-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">For Official Use Only</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Appeal Reference No.</label>
              <input
                type="text"
                name="appealRef"
                value={formData.appealRef}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Acknowledgment</label>
              <input
                type="date"
                name="appealAckDate"
                value={formData.appealAckDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Next Steps / Date of Appeal Hearing</label>
              <input
                type="text"
                name="appealNext"
                value={formData.appealNext}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <h4 className="text-lg font-bold text-gray-800 mb-3">Signatures & Approvals</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Reviewed By (Name)</label>
                <input
                  type="text"
                  name="reviewName"
                  value={formData.reviewName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  name="reviewDate"
                  value={formData.reviewDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Approved By (Hospital Director)</label>
                <input
                  type="text"
                  name="approveName"
                  value={formData.approveName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  name="approveDate"
                  value={formData.approveDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Appeals must be filed within 15 working days of the original decision.</li>
            <li>HR must acknowledge and forward appeals to the Appeals Review Committee within 3 working days.</li>
            <li>Appeals must be resolved within 30 days of submission.</li>
            <li>All appeal records must be linked with Annexure M3 (Disciplinary Process Tracker) for closure.</li>
            <li>Records must be archived for 7 years for compliance, audits, and NABH/JCI governance reviews.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 italic">
            Read with SOP M.4 (Appeals and Review Flow), By-Laws Section 14.5, and related annexures.
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
            <span className="font-semibold">Annexure M4 - Appeal Submission Format</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalM4Form;