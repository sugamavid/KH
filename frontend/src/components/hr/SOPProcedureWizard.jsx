import React, { useState } from 'react';
import { X, Zap, CheckCircle, ArrowRight, FileText, Users, Calendar, Award } from 'lucide-react';

const SOPProcedureWizard = ({ isOpen, onClose, onNavigate }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const steps = [
    { number: 1, title: 'Select SOP Type', icon: FileText },
    { number: 2, title: 'Define Scope', icon: Users },
    { number: 3, title: 'Build Procedure', icon: Zap },
    { number: 4, title: 'Review & Approve', icon: CheckCircle },
    { number: 5, title: 'Publish & Train', icon: Award },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Zap className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-bold">SOP Procedure Wizard</h2>
              <p className="text-sm text-purple-100">Step-by-step guide to create new SOPs</p>
            </div>
          </div>
          <button onClick={onClose} className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            {steps.map((s, idx) => (
              <React.Fragment key={s.number}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    step >= s.number ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {s.number}
                  </div>
                  <span className={`text-xs mt-2 font-semibold ${
                    step >= s.number ? 'text-purple-600' : 'text-gray-500'
                  }`}>
                    {s.title}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 rounded ${
                    step > s.number ? 'bg-purple-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 200px)' }}>
          {step === 1 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Select SOP Type</h3>
              <p className="text-gray-600 mb-6">Choose the category that best fits your new procedure</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['HR Operations', 'Clinical Procedures', 'Safety Protocols', 'IT Security', 'Compliance', 'Quality Assurance'].map((type) => (
                  <button
                    key={type}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all text-left group"
                  >
                    <h4 className="font-bold text-gray-800 mb-2 group-hover:text-purple-600">{type}</h4>
                    <p className="text-sm text-gray-600">Standard operating procedures for {type.toLowerCase()}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Define Scope</h3>
              <p className="text-gray-600 mb-6">Specify who this SOP applies to and its coverage</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">SOP Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Enter SOP title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Department(s)</label>
                  <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                    <option>All Departments</option>
                    <option>Human Resources</option>
                    <option>Clinical Services</option>
                    <option>Emergency</option>
                    <option>IT</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Target Roles</label>
                  <textarea
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    rows="3"
                    placeholder="Specify who needs to follow this SOP"
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Build Procedure</h3>
              <p className="text-gray-600 mb-6">Add detailed steps and instructions</p>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-gray-800 mb-3">Procedure Steps</h4>
                <div className="space-y-3">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="bg-white rounded-lg p-4 border-2 border-gray-200">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          {num}
                        </span>
                        <input
                          type="text"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                          placeholder={`Step ${num} title`}
                        />
                      </div>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                        rows="2"
                        placeholder="Detailed instructions..."
                      ></textarea>
                    </div>
                  ))}
                </div>
                <button className="mt-4 text-purple-600 font-semibold hover:text-purple-700 flex items-center space-x-2">
                  <span>+ Add Step</span>
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Review & Approve</h3>
              <p className="text-gray-600 mb-6">Submit for review and get necessary approvals</p>
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Approval Chain</h4>
                  <div className="space-y-3">
                    {['Department Head', 'Quality Assurance', 'Compliance Officer', 'Medical Director'].map((role, idx) => (
                      <div key={role} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800">{role}</div>
                          <div className="text-sm text-gray-500">Pending approval</div>
                        </div>
                        <Calendar className="w-5 h-5 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Publish & Train</h3>
              <p className="text-gray-600 mb-6">Make the SOP available and schedule training</p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6 mb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Ready to Publish</h4>
                    <p className="text-sm text-gray-600">Your SOP is ready to be published</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">All approvals received</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Document formatted correctly</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Training materials prepared</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Publish SOP</span>
              </button>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className={`px-4 py-2 rounded-lg font-semibold ${
              step === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Previous
          </button>
          <div className="text-sm text-gray-600">
            Step {step} of {totalSteps}
          </div>
          <button
            onClick={() => setStep(Math.min(totalSteps, step + 1))}
            disabled={step === totalSteps}
            className={`px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 ${
              step === totalSteps
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SOPProcedureWizard;
