import React, { useState, useRef } from 'react';
import {
  Download,
  Upload,
  Printer,
  Save,
  FileText,
  AlertCircle
} from 'lucide-react';

const A1HRPolicyRevisionForm = () => {
  const [formData, setFormData] = useState({
    effective_date: '',
    req_name: '',
    req_empid: '',
    req_desig: '',
    req_dept: '',
    policy_title: '',
    policy_ver: '',
    policy_clause: '',
    rev_type_add: false,
    rev_type_amend: false,
    rev_type_del: false,
    revision_rationale: '',
    hod_name: '',
    hod_date: '',
    hr_name: '',
    hr_date: '',
    co_name: '',
    co_date: '',
    ceo_name: '',
    ceo_date: ''
  });

  const [logoUrl, setLogoUrl] = useState('/images.jpeg');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setLogoUrl(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const dataToSave = {
      logo: logoUrl,
      data: formData
    };
    const blob = new Blob([JSON.stringify(dataToSave, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'A1_HR_Policy_Revision_Request.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoad = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const loaded = JSON.parse(reader.result);
          if (loaded.logo) setLogoUrl(loaded.logo);
          if (loaded.data) setFormData(loaded.data);
        } catch (err) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Toolbar */}
      <div className="sticky top-0 z-50 bg-white border-b-2 border-slate-200 px-6 py-3 print:hidden">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-slate-900">Annexure A1</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.svg"
              onChange={handleLogoUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 border-2 border-slate-300 rounded-lg hover:border-blue-400 flex items-center gap-2 font-semibold text-sm"
            >
              <Upload className="w-4 h-4" />
              Logo
            </button>
            
            <button
              onClick={handleSave}
              className="px-4 py-2 border-2 border-slate-300 rounded-lg hover:border-green-400 flex items-center gap-2 font-semibold text-sm"
            >
              <Save className="w-4 h-4" />
              Save JSON
            </button>
            
            <input
              ref={loadInputRef}
              type="file"
              accept="application/json"
              onChange={handleLoad}
              className="hidden"
            />
            <button
              onClick={() => loadInputRef.current?.click()}
              className="px-4 py-2 border-2 border-slate-300 rounded-lg hover:border-purple-400 flex items-center gap-2 font-semibold text-sm"
            >
              <Upload className="w-4 h-4" />
              Load JSON
            </button>
            
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 font-semibold text-sm"
            >
              <Printer className="w-4 h-4" />
              Print / PDF
            </button>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg border-2 border-slate-200 overflow-hidden">
          {/* Document Header */}
          <div className="grid grid-cols-[180px_1fr] gap-6 items-center p-6 border-b-4 border-blue-600">
            <img
              src={logoUrl}
              alt="Hospital Logo"
              className="w-full h-24 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">HR Policy Revision Request Format</h1>
              <p className="text-slate-600 font-semibold mt-1">HR • SOP A.1 – HR Policy Framework • Annexure A1</p>
            </div>
          </div>

          {/* Document Control */}
          <div className="p-6 border-b-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Document Control</h3>
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold w-64">Document Title</th>
                  <td className="border border-slate-300 p-3">HR Policy Revision Request Format</td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold">Annexure Number</th>
                  <td className="border border-slate-300 p-3">A1</td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold">Linked SOP</th>
                  <td className="border border-slate-300 p-3">SOP A.1 – HR Policy Framework</td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold">By-Laws Reference</th>
                  <td className="border border-slate-300 p-3">Section 4.2 – HR Governance & Compliance</td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold">Version No.</th>
                  <td className="border border-slate-300 p-3">1.0</td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold">Effective Date</th>
                  <td className="border border-slate-300 p-3">
                    <input
                      type="date"
                      name="effective_date"
                      value={formData.effective_date}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold">Custodian Department</th>
                  <td className="border border-slate-300 p-3">Human Resources</td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold">Approval Authority</th>
                  <td className="border border-slate-300 p-3">CEO / Medical Director</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Purpose */}
          <div className="p-6 border-b-2 border-slate-200 bg-blue-50">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Purpose</h3>
            <p className="text-slate-700 leading-relaxed">
              This Annexure provides a uniform and auditable mechanism through which revisions to HR policies at Koyili Hospital 
              are proposed, reviewed, and approved. It ensures that all amendments are made in line with statutory compliance requirements, 
              internal governance practices, and the By-Laws on HR Governance & Compliance.
            </p>
          </div>

          {/* Requestor Details */}
          <div className="p-6 border-b-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Requestor Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="req_name"
                  value={formData.req_name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Employee ID</label>
                <input
                  type="text"
                  name="req_empid"
                  value={formData.req_empid}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Designation</label>
                <input
                  type="text"
                  name="req_desig"
                  value={formData.req_desig}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Department</label>
                <input
                  type="text"
                  name="req_dept"
                  value={formData.req_dept}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Policy Reference */}
          <div className="p-6 border-b-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Policy Reference</h3>
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold w-64">Policy Title</th>
                  <td className="border border-slate-300 p-3">
                    <input
                      type="text"
                      name="policy_title"
                      value={formData.policy_title}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold">Current Version & Date</th>
                  <td className="border border-slate-300 p-3">
                    <input
                      type="text"
                      name="policy_ver"
                      value={formData.policy_ver}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold">Clause / Section for Revision</th>
                  <td className="border border-slate-300 p-3">
                    <input
                      type="text"
                      name="policy_clause"
                      value={formData.policy_clause}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Nature of Proposed Revision */}
          <div className="p-6 border-b-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Nature of Proposed Revision</h3>
            <div className="flex gap-6 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rev_type_add"
                  checked={formData.rev_type_add}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span className="font-semibold">Addition</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rev_type_amend"
                  checked={formData.rev_type_amend}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span className="font-semibold">Amendment</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rev_type_del"
                  checked={formData.rev_type_del}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span className="font-semibold">Deletion</span>
              </label>
            </div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Provide detailed rationale for the requested change (regulatory update, operational efficiency, compliance requirement, governance alignment). Attach relevant documents where applicable.
            </label>
            <textarea
              name="revision_rationale"
              value={formData.revision_rationale}
              onChange={handleInputChange}
              rows="6"
              className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Approval Workflow */}
          <div className="p-6 border-b-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Approval Workflow</h3>
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold w-64">Head of Department</th>
                  <td className="border border-slate-300 p-3">
                    <div className="h-16 border-b-2 border-dotted border-slate-400 mb-3"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="hod_name"
                        value={formData.hod_name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="date"
                        name="hod_date"
                        value={formData.hod_date}
                        onChange={handleInputChange}
                        className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold">HR Manager</th>
                  <td className="border border-slate-300 p-3">
                    <div className="h-16 border-b-2 border-dotted border-slate-400 mb-3"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="hr_name"
                        value={formData.hr_name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="date"
                        name="hr_date"
                        value={formData.hr_date}
                        onChange={handleInputChange}
                        className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold">Compliance Officer</th>
                  <td className="border border-slate-300 p-3">
                    <div className="h-16 border-b-2 border-dotted border-slate-400 mb-3"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="co_name"
                        value={formData.co_name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="date"
                        name="co_date"
                        value={formData.co_date}
                        onChange={handleInputChange}
                        className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3 text-left font-semibold">CEO / Medical Director (Final Authority)</th>
                  <td className="border border-slate-300 p-3">
                    <div className="h-16 border-b-2 border-dotted border-slate-400 mb-3"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="ceo_name"
                        value={formData.ceo_name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="date"
                        name="ceo_date"
                        value={formData.ceo_date}
                        onChange={handleInputChange}
                        className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="p-6 bg-amber-50">
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
              <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
              Notes
            </h3>
            <p className="text-slate-700 leading-relaxed">
              This Annexure shall be read in conjunction with SOP A.1 (Creation and Revision of Human Resource Policies and By-laws) 
              and the relevant provisions of the Hospital By-Laws governing HR Governance and Compliance. No revision shall be valid 
              unless approved and incorporated into the official HR Policy Manual through this format.
            </p>
          </div>

          {/* Footer */}
          <div className="p-4 text-center text-sm text-slate-500 border-t-2 border-slate-200">
            © Koyili Hospital • Confidential • Version-controlled
          </div>
        </div>
      </div>
    </div>
  );
};

export default A1HRPolicyRevisionForm;
