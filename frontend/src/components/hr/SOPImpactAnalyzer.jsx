import React, { useState } from 'react';
import { X, Target, GitBranch, TrendingUp, AlertTriangle, DollarSign, Users, Calendar, CheckCircle, ArrowRight, FileText } from 'lucide-react';

const SOPImpactAnalyzer = ({ isOpen, onClose, onNavigate }) => {
  const [selectedSOP, setSelectedSOP] = useState(null);
  const [activeView, setActiveView] = useState('selector');

  // Mock SOP data for impact analysis
  const sops = [
    { id: 'SOP-001', title: 'Employee Onboarding', category: 'HR Operations', currentVersion: 'v2.1', departments: 5, users: 85 },
    { id: 'SOP-002', title: 'Performance Review Process', category: 'HR Operations', currentVersion: 'v3.0', departments: 8, users: 120 },
    { id: 'SOP-003', title: 'Leave Application Process', category: 'HR Operations', currentVersion: 'v2.3', departments: 10, users: 524 },
    { id: 'SOP-004', title: 'Patient Admission Protocol', category: 'Clinical', currentVersion: 'v4.1', departments: 3, users: 68 },
    { id: 'SOP-005', title: 'Emergency Response', category: 'Safety', currentVersion: 'v3.5', departments: 12, users: 524 },
    { id: 'SOP-006', title: 'Incident Reporting', category: 'Safety', currentVersion: 'v2.0', departments: 12, users: 524 },
    { id: 'SOP-007', title: 'Equipment Maintenance', category: 'Operations', currentVersion: 'v1.8', departments: 4, users: 45 },
    { id: 'SOP-008', title: 'Quality Assurance Protocol', category: 'Compliance', currentVersion: 'v3.2', departments: 6, users: 92 },
    { id: 'SOP-009', title: 'Data Security Procedure', category: 'IT', currentVersion: 'v5.0', departments: 11, users: 450 },
    { id: 'SOP-010', title: 'Patient Discharge Process', category: 'Clinical', currentVersion: 'v2.9', departments: 4, users: 78 },
    { id: 'SOP-011', title: 'Medication Administration', category: 'Clinical', currentVersion: 'v4.3', departments: 5, users: 156 },
    { id: 'SOP-012', title: 'Waste Management', category: 'Environmental', currentVersion: 'v1.5', departments: 8, users: 230 },
  ];

  // Mock impact analysis data
  const impactData = {
    'SOP-003': {
      dependencies: [
        { id: 'SOP-002', title: 'Performance Review Process', relationship: 'Uses leave data for evaluation', impact: 'High' },
        { id: 'SOP-001', title: 'Employee Onboarding', relationship: 'New employees need leave policy training', impact: 'Medium' },
        { id: 'SOP-008', title: 'Quality Assurance Protocol', relationship: 'Leave tracking affects audit compliance', impact: 'Medium' },
      ],
      affectedDepartments: [
        { name: 'Human Resources', users: 24, criticality: 'Critical' },
        { name: 'Clinical Services', users: 156, criticality: 'High' },
        { name: 'Administration', users: 45, criticality: 'High' },
        { name: 'Emergency', users: 68, criticality: 'Medium' },
        { name: 'IT', users: 32, criticality: 'Low' },
        { name: 'Finance', users: 28, criticality: 'Medium' },
        { name: 'Facilities', users: 89, criticality: 'Low' },
        { name: 'Research', users: 82, criticality: 'Low' },
      ],
      riskAssessment: [
        { risk: 'Process disruption during implementation', likelihood: 'High', severity: 'Medium', mitigation: 'Phased rollout approach' },
        { risk: 'User resistance to new workflow', likelihood: 'Medium', severity: 'High', mitigation: 'Comprehensive training program' },
        { risk: 'Data migration errors', likelihood: 'Low', severity: 'Critical', mitigation: 'Automated validation scripts' },
        { risk: 'Compliance gaps during transition', likelihood: 'Medium', severity: 'High', mitigation: 'Parallel run period' },
      ],
      costBenefit: {
        implementationCost: 45000,
        trainingCost: 12000,
        maintenanceCost: 8000,
        annualSavings: 78000,
        productivityGain: '15%',
        errorReduction: '42%',
        roi: '6 months',
      },
      stakeholders: [
        { role: 'HR Director', involvement: 'Sponsor', impact: 'High', engagement: 'Active' },
        { role: 'Department Heads', involvement: 'Approver', impact: 'High', engagement: 'Active' },
        { role: 'HR Managers', involvement: 'Owner', impact: 'Critical', engagement: 'Active' },
        { role: 'All Employees', involvement: 'End User', impact: 'High', engagement: 'Passive' },
        { role: 'Payroll Team', involvement: 'Integration', impact: 'Medium', engagement: 'Active' },
        { role: 'IT Team', involvement: 'Technical Support', impact: 'Medium', engagement: 'Active' },
      ],
    },
  };

  const handleSOPSelect = (sop) => {
    setSelectedSOP(sop);
    setActiveView('analysis');
  };

  const getCriticalityColor = (criticality) => {
    const colors = {
      'Critical': 'bg-red-100 text-red-700 border-red-300',
      'High': 'bg-orange-100 text-orange-700 border-orange-300',
      'Medium': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'Low': 'bg-green-100 text-green-700 border-green-300',
    };
    return colors[criticality] || colors['Medium'];
  };

  const getImpactColor = (impact) => {
    const colors = {
      'High': 'text-red-600',
      'Medium': 'text-orange-600',
      'Low': 'text-green-600',
    };
    return colors[impact] || colors['Medium'];
  };

  const getSeverityColor = (severity) => {
    const colors = {
      'Critical': 'bg-red-500',
      'High': 'bg-orange-500',
      'Medium': 'bg-yellow-500',
      'Low': 'bg-green-500',
    };
    return colors[severity] || colors['Medium'];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Target className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-bold">SOP Impact Analyzer</h2>
              <p className="text-sm text-purple-100">Assess Change Impact & Dependencies</p>
            </div>
          </div>
          <button onClick={onClose} className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 80px)' }}>
          {activeView === 'selector' && (
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Select SOP for Impact Analysis</h3>
                <p className="text-gray-600">Choose an SOP to analyze its dependencies, risks, and organizational impact</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sops.map((sop) => (
                  <div
                    key={sop.id}
                    onClick={() => handleSOPSelect(sop)}
                    className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-purple-500 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {sop.id}
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{sop.title}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-between">
                        <span>Category:</span>
                        <span className="font-semibold text-gray-700">{sop.category}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Version:</span>
                        <span className="font-semibold text-gray-700">{sop.currentVersion}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Departments:</span>
                        <span className="font-semibold text-gray-700">{sop.departments}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Active Users:</span>
                        <span className="font-semibold text-gray-700">{sop.users}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === 'analysis' && selectedSOP && impactData[selectedSOP.id] && (
            <div className="p-6">
              {/* Back Button and SOP Info */}
              <div className="mb-6">
                <button
                  onClick={() => setActiveView('selector')}
                  className="mb-4 text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-2"
                >
                  <ArrowRight className="w-4 h-4 transform rotate-180" />
                  <span>Back to SOP Selection</span>
                </button>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {selectedSOP.id}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800">{selectedSOP.title}</h3>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span><strong>Category:</strong> {selectedSOP.category}</span>
                        <span><strong>Version:</strong> {selectedSOP.currentVersion}</span>
                        <span><strong>Departments:</strong> {selectedSOP.departments}</span>
                        <span><strong>Users:</strong> {selectedSOP.users}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dependencies Section */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <GitBranch className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-bold text-gray-800">Dependencies & Relationships</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {impactData[selectedSOP.id].dependencies.map((dep, index) => (
                    <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-semibold">
                            {dep.id}
                          </span>
                          <h4 className="font-bold text-gray-800">{dep.title}</h4>
                        </div>
                        <span className={`font-semibold ${getImpactColor(dep.impact)}`}>{dep.impact} Impact</span>
                      </div>
                      <p className="text-sm text-gray-600">{dep.relationship}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Affected Departments */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-bold text-gray-800">Affected Departments</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {impactData[selectedSOP.id].affectedDepartments.map((dept, index) => (
                    <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-800">{dept.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getCriticalityColor(dept.criticality)}`}>
                          {dept.criticality}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{dept.users} affected users</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Assessment */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-bold text-gray-800">Risk Assessment</h3>
                </div>
                <div className="space-y-3">
                  {impactData[selectedSOP.id].riskAssessment.map((risk, index) => (
                    <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-gray-800 flex-1">{risk.risk}</h4>
                        <div className="flex items-center space-x-2">
                          <div className="text-center">
                            <div className="text-xs text-gray-500 mb-1">Likelihood</div>
                            <div className={`w-16 h-2 ${getSeverityColor(risk.likelihood)} rounded-full`}></div>
                            <div className="text-xs font-semibold text-gray-700 mt-1">{risk.likelihood}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-gray-500 mb-1">Severity</div>
                            <div className={`w-16 h-2 ${getSeverityColor(risk.severity)} rounded-full`}></div>
                            <div className="text-xs font-semibold text-gray-700 mt-1">{risk.severity}</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-green-700 mb-1">Mitigation Strategy</div>
                            <div className="text-sm text-gray-700">{risk.mitigation}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost-Benefit Analysis */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-bold text-gray-800">Cost-Benefit Analysis</h3>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Implementation Cost</div>
                      <div className="text-2xl font-bold text-gray-800">${impactData[selectedSOP.id].costBenefit.implementationCost.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Training Cost</div>
                      <div className="text-2xl font-bold text-gray-800">${impactData[selectedSOP.id].costBenefit.trainingCost.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Annual Maintenance</div>
                      <div className="text-2xl font-bold text-gray-800">${impactData[selectedSOP.id].costBenefit.maintenanceCost.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Annual Savings</div>
                      <div className="text-2xl font-bold text-green-600">${impactData[selectedSOP.id].costBenefit.annualSavings.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-600 mb-1">Productivity Gain</div>
                      <div className="text-xl font-bold text-blue-600">{impactData[selectedSOP.id].costBenefit.productivityGain}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-600 mb-1">Error Reduction</div>
                      <div className="text-xl font-bold text-blue-600">{impactData[selectedSOP.id].costBenefit.errorReduction}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-600 mb-1">ROI Timeline</div>
                      <div className="text-xl font-bold text-green-600">{impactData[selectedSOP.id].costBenefit.roi}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stakeholder Identification */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-bold text-gray-800">Stakeholder Identification</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {impactData[selectedSOP.id].stakeholders.map((stakeholder, index) => (
                    <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-gray-800">{stakeholder.role}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getCriticalityColor(stakeholder.impact)}`}>
                          {stakeholder.impact} Impact
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-600">Involvement:</span>
                          <div className="font-semibold text-gray-700">{stakeholder.involvement}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Engagement:</span>
                          <div className="font-semibold text-gray-700">{stakeholder.engagement}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Generate Impact Report</span>
                </button>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Approve Implementation</span>
                </button>
                <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                  Save Analysis
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SOPImpactAnalyzer;