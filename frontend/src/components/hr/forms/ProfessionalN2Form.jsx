import React, { useState } from 'react';

const ProfessionalN2Form = () => {
  const [formData, setFormData] = useState({
    effectiveDate: '', empName: '', empId: '', empDept: '', empDesig: '', empDoj: '', repMgr: '',
    eiDate: '', eiMode: 'in_person', lwdFinal: '', sepReason: '', forwardContact: '',
    empDeclName: '', empDeclDate: '', empDeclPlace: '', eiFindings: '', eiRisks: '', eiRecos: '',
    intName: '', intDate: '', dirName: '', dirDate: ''
  });

  const [questions, setQuestions] = useState([
    { theme: 'Onboarding experience & role clarity', rating: '', comment: '' },
    { theme: 'Work environment & team dynamics', rating: '', comment: '' },
    { theme: 'Training & growth opportunities', rating: '', comment: '' }
  ]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const addQuestion = () => setQuestions([...questions, { theme: '', rating: '', comment: '' }]);
  const removeQuestion = (index) => setQuestions(questions.filter((_, i) => i !== index));
  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handlePrint = () => window.print();
  const handleSave = () => {
    const dataStr = JSON.stringify({ formData, questions }, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'N2_Exit_Interview.json';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="bg-white rounded-lg p-3 shadow-md"><div className="w-32 h-16 flex items-center justify-center"><span className="text-blue-900 font-bold text-sm">KOYILI</span></div></div>
          <div className="flex-1 text-center px-6">
            <h1 className="text-2xl font-bold text-white mb-2">KOYILI HOSPITAL</h1>
            <p className="text-blue-100 text-sm font-semibold">HR Department - Exit Interview & Feedback</p>
            <p className="text-blue-200 text-xs mt-1">NABH Accredited • Confidential Document</p>
          </div>
          <div className="text-right">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-2 text-sm font-bold">N2</div>
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
          <h2 className="text-3xl font-bold text-blue-900 mb-2">EXIT INTERVIEW QUESTIONNAIRE</h2>
          <p className="text-gray-600">Annexure N2 - Exit Feedback & Review Process</p>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">PART A – Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input type="text" name="empName" value={formData.empName} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label>
              <input type="text" name="empId" value={formData.empId} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
              <input type="text" name="empDept" value={formData.empDept} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label>
              <input type="text" name="empDesig" value={formData.empDesig} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Exit Interview Date</label>
              <input type="date" name="eiDate" value={formData.eiDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Last Working Day</label>
              <input type="date" name="lwdFinal" value={formData.lwdFinal} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg" /></div>
          </div>
        </section>

        <section className="mb-8 bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">PART B – Exit Interview Questionnaire</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">Question / Theme</th>
                  <th className="border border-gray-300 px-3 py-2 text-center w-32">Rating (1-5)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Comments</th>
                  <th className="border border-gray-300 px-3 py-2 text-center w-20">Del</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((q, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">
                      <input type="text" value={q.theme} onChange={(e) => handleQuestionChange(index, 'theme', e.target.value)} className="w-full px-2 py-1 border rounded" /></td>
                    <td className="border border-gray-300 p-2">
                      <select value={q.rating} onChange={(e) => handleQuestionChange(index, 'rating', e.target.value)} className="w-full px-2 py-1 border rounded">
                        <option value="">-</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
                      </select></td>
                    <td className="border border-gray-300 p-2">
                      <input type="text" value={q.comment} onChange={(e) => handleQuestionChange(index, 'comment', e.target.value)} className="w-full px-2 py-1 border rounded" /></td>
                    <td className="border border-gray-300 p-2 text-center">
                      <button onClick={() => removeQuestion(index)} className="px-2 py-1 bg-red-500 text-white rounded text-sm">✕</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={addQuestion} className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">+ Add Question</button>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">PART C – Interviewer Summary</h3>
          <div className="space-y-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Key Findings</label>
              <textarea name="eiFindings" value={formData.eiFindings} onChange={handleInputChange} rows="3" className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Risks / Sensitivities</label>
              <textarea name="eiRisks" value={formData.eiRisks} onChange={handleInputChange} rows="3" className="w-full px-3 py-2 border rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Recommendations</label>
              <textarea name="eiRecos" value={formData.eiRecos} onChange={handleInputChange} rows="3" className="w-full px-3 py-2 border rounded-lg" /></div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-3">Instructions for Use</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Conduct exit interview prior to final working day.</li>
            <li>Link with N1 (Resignation), N3 (Clearance), and N4 (Full & Final).</li>
            <li>Retain records for 7 years for compliance.</li>
          </ul>
        </section>
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between text-white text-sm">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-400 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">N</div>
            <span>© 2024 Koyili Hospital • NABH Accredited • Confidential Document</span>
          </div>
          <div className="text-right"><span className="font-semibold">Annexure N2 - Exit Interview</span></div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalN2Form;