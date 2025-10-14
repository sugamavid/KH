import React, { useState } from 'react';
import { X, ChevronRight, ChevronDown, CheckCircle, Play, ArrowRight, BookOpen, FileText, Users } from 'lucide-react';

const SOPProcedureWizard = ({ onClose, onNavigateToSection }) => {
  const [selectedSOP, setSelectedSOP] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const sopProcedures = [
    {
      id: 'recruitment',
      title: 'Employee Recruitment Process',
      category: 'Recruitment',
      sopReference: 'SOP B.1',
      steps: [
        { id: 1, title: 'Requisition Approval', description: 'Obtain HOD approval for new position', responsible: 'Department Head', duration: '1-2 days', checklist: ['Budget approval', 'Position justification', 'JD prepared'] },
        { id: 2, title: 'Job Posting', description: 'Post vacancy on internal and external channels', responsible: 'HR Recruiter', duration: '3-5 days', checklist: ['Job description finalized', 'Posting on job portals', 'Social media announcement'] },
        { id: 3, title: 'Application Screening', description: 'Review and shortlist candidates', responsible: 'HR Team', duration: '5-7 days', checklist: ['Resume screening', 'Qualification verification', 'Shortlist preparation'] },
        { id: 4, title: 'Interview Process', description: 'Conduct technical and HR interviews', responsible: 'Interview Panel', duration: '7-10 days', checklist: ['Schedule interviews', 'Conduct interviews', 'Evaluation forms'] },
        { id: 5, title: 'Selection & Offer', description: 'Select candidate and issue offer letter', responsible: 'HR Director', duration: '2-3 days', checklist: ['Reference check', 'Offer letter approval', 'Salary negotiation'] },
        { id: 6, title: 'Documentation', description: 'Complete pre-joining formalities', responsible: 'HR Admin', duration: '5-7 days', checklist: ['Document collection', 'Background verification', 'Medical check-up'] }
      ]
    },
    {
      id: 'onboarding',
      title: 'New Employee Onboarding',
      category: 'Onboarding',
      sopReference: 'SOP B.2',
      steps: [
        { id: 1, title: 'Pre-Arrival Preparation', description: 'Prepare workstation and access', responsible: 'IT & Admin', duration: '2-3 days', checklist: ['Workstation setup', 'Email creation', 'Access cards'] },
        { id: 2, title: 'Day 1 Orientation', description: 'Welcome and introduce to team', responsible: 'HR & Manager', duration: '1 day', checklist: ['Welcome kit', 'Tour of facility', 'Team introduction'] },
        { id: 3, title: 'HR Induction', description: 'Policies and procedures training', responsible: 'HR Department', duration: '2-3 days', checklist: ['Policy handbook', 'Benefits enrollment', 'Statutory compliance'] },
        { id: 4, title: 'Role-Specific Training', description: 'Department and job-specific training', responsible: 'Department Trainer', duration: '1-2 weeks', checklist: ['Job responsibilities', 'SOPs training', 'System access'] },
        { id: 5, title: 'Follow-up & Feedback', description: 'Check progress and gather feedback', responsible: 'HR & Manager', duration: 'Ongoing', checklist: ['30-day check-in', '60-day review', '90-day evaluation'] }
      ]
    },
    {
      id: 'leave',
      title: 'Leave Application & Approval',
      category: 'Leave Management',
      sopReference: 'SOP C.1',
      steps: [
        { id: 1, title: 'Leave Application', description: 'Employee submits leave request', responsible: 'Employee', duration: '15 mins', checklist: ['Fill leave form', 'Select leave type', 'Specify dates'] },
        { id: 2, title: 'Supervisor Review', description: 'Immediate supervisor reviews request', responsible: 'Supervisor', duration: '1-2 days', checklist: ['Check leave balance', 'Review work coverage', 'Approve/reject'] },
        { id: 3, title: 'HR Verification', description: 'HR verifies leave balance and policy', responsible: 'HR Department', duration: '1 day', checklist: ['Verify balance', 'Check policy compliance', 'Update records'] },
        { id: 4, title: 'Final Approval', description: 'Final approval by authorized person', responsible: 'HOD/HR Director', duration: '1 day', checklist: ['Final review', 'System update', 'Notification to employee'] }
      ]
    }
  ];

  const handleStepComplete = (stepId) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Procedure Wizard</h2>
                <p className="text-indigo-100">Step-by-step guided SOP procedures</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
          {!selectedSOP ? (
            <div className="space-y-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Select a Procedure</h3>
                <p className="text-blue-800 text-sm">Choose an SOP procedure to get step-by-step guidance</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {sopProcedures.map(sop => (
                  <div
                    key={sop.id}
                    onClick={() => setSelectedSOP(sop)}
                    className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-indigo-400 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-bold text-slate-900">{sop.title}</h4>
                          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold">
                            {sop.sopReference}
                          </span>
                        </div>
                        <div className="text-sm text-slate-600 mb-3">{sop.category}</div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <FileText className="w-4 h-4" />
                          <span>{sop.steps.length} steps</span>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Header */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{selectedSOP.title}</h3>
                    <p className="text-slate-600">Reference: {selectedSOP.sopReference}</p>
                  </div>
                  <button
                    onClick={() => { setSelectedSOP(null); setCurrentStep(0); setCompletedSteps([]); }}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-semibold"
                  >
                    ← Back
                  </button>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-slate-700">Progress</span>
                    <span className="text-sm font-bold text-indigo-700">
                      {completedSteps.length} / {selectedSOP.steps.length} steps
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 transition-all duration-500"
                      style={{ width: `${(completedSteps.length / selectedSOP.steps.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {selectedSOP.steps.map((step, idx) => {
                  const isCompleted = completedSteps.includes(step.id);
                  const isActive = currentStep === idx;

                  return (
                    <div
                      key={step.id}
                      className={`border-2 rounded-xl overflow-hidden transition-all ${
                        isCompleted ? 'border-green-300 bg-green-50' :
                        isActive ? 'border-indigo-400 bg-white' :
                        'border-slate-200 bg-white'
                      }`}
                    >
                      <div
                        onClick={() => setCurrentStep(idx)}
                        className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                            isCompleted ? 'bg-green-600 text-white' :
                            isActive ? 'bg-indigo-600 text-white' :
                            'bg-slate-200 text-slate-600'
                          }`}>
                            {isCompleted ? <CheckCircle className="w-6 h-6" /> : step.id}
                          </div>
                          <div className="flex-1">
                            <h5 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h5>
                            <p className="text-sm text-slate-600">{step.description}</p>
                          </div>
                          {isActive ? <ChevronDown className="w-6 h-6 text-slate-400" /> : <ChevronRight className="w-6 h-6 text-slate-400" />}
                        </div>
                      </div>

                      {isActive && (
                        <div className="px-6 pb-6 border-t border-slate-200">
                          <div className="pt-4 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="p-4 bg-slate-50 rounded-lg">
                                <div className="text-xs font-bold text-slate-600 mb-1">Responsible</div>
                                <div className="font-semibold text-slate-900 flex items-center gap-2">
                                  <Users className="w-4 h-4" />
                                  {step.responsible}
                                </div>
                              </div>
                              <div className="p-4 bg-slate-50 rounded-lg">
                                <div className="text-xs font-bold text-slate-600 mb-1">Duration</div>
                                <div className="font-semibold text-slate-900">{step.duration}</div>
                              </div>
                            </div>

                            <div>
                              <h6 className="font-bold text-slate-900 mb-2">Checklist</h6>
                              <div className="space-y-2">
                                {step.checklist.map((item, i) => (
                                  <label key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 cursor-pointer">
                                    <input type="checkbox" className="w-5 h-5 text-indigo-600" />
                                    <span className="text-sm text-slate-700">{item}</span>
                                  </label>
                                ))}
                              </div>
                            </div>

                            <button
                              onClick={() => handleStepComplete(step.id)}
                              disabled={isCompleted}
                              className={`w-full px-6 py-3 rounded-xl font-bold transition-colors ${
                                isCompleted
                                  ? 'bg-green-100 text-green-700 cursor-not-allowed'
                                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
                              }`}
                            >
                              {isCompleted ? 'Completed ✓' : 'Mark as Complete'}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SOPProcedureWizard;