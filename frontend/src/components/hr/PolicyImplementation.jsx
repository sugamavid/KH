import React, { useState } from 'react';
import { 
  X, BookOpen, Users, Shield, Target, ChevronDown, ChevronRight,
  CheckCircle, Clock, AlertTriangle, FileText, Award, Building,
  Scale, Download, Printer, Search, Filter, Info, List, GitBranch,
  TrendingUp, Zap, Eye, PlayCircle, Calendar, ClipboardCheck,
  UserCheck, Briefcase
} from 'lucide-react';
import { committeesDatabase, authorityLevels, policyImplementationGuides } from '../../data/policyImplementationData';

const PolicyImplementation = ({ onClose, onNavigateToSection }) => {
  const [activeView, setActiveView] = useState('overview'); // overview, policies, committees, authorities, wizard
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [selectedCommittee, setSelectedCommittee] = useState(null);
  const [expandedStep, setExpandedStep] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Wizard state
  const [wizardStep, setWizardStep] = useState(1); // 1-6
  const [selectedWizardPolicy, setSelectedWizardPolicy] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [stepProgress, setStepProgress] = useState({});

  const views = [
    { id: 'overview', name: 'Overview', icon: BookOpen },
    { id: 'policies', name: 'Policy Library', icon: FileText },
    { id: 'committees', name: 'Committees', icon: Users },
    { id: 'authorities', name: 'Authority Matrix', icon: Shield },
    { id: 'wizard', name: 'Implementation Wizard', icon: Zap }
  ];

  // Get all policies
  const allPolicies = Object.entries(policyImplementationGuides).map(([key, policy]) => ({
    ...policy,
    id: key
  }));

  const detailedPolicies = allPolicies.filter(p => p.implementationSteps);
  const pendingPolicies = allPolicies.filter(p => p.status === 'detailed_guide_pending');

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold text-blue-900">{allPolicies.length}</div>
          </div>
          <div className="text-sm font-semibold text-blue-700">Total Policies</div>
        </div>
        
        <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-600 rounded-lg">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold text-green-900">{detailedPolicies.length}</div>
          </div>
          <div className="text-sm font-semibold text-green-700">Detailed Guides</div>
        </div>
        
        <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-600 rounded-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold text-purple-900">{Object.keys(committeesDatabase).length}</div>
          </div>
          <div className="text-sm font-semibold text-purple-700">Committees</div>
        </div>
        
        <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-600 rounded-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold text-orange-900">{Object.keys(authorityLevels).length}</div>
          </div>
          <div className="text-sm font-semibold text-orange-700">Authority Levels</div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-3">Policy Implementation Encyclopedia</h3>
        <p className="text-blue-100 mb-4 leading-relaxed">
          Comprehensive guide for implementing all By-Laws policies with detailed step-by-step processes, 
          committee structures, authority matrices, and best practices for directors and management.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5" />
              <span className="font-semibold">What's Included</span>
            </div>
            <ul className="text-sm space-y-1 text-blue-50">
              <li>• Step-by-step implementation guides</li>
              <li>• Committee compositions & powers</li>
              <li>• Authority and approval chains</li>
              <li>• Risk mitigation strategies</li>
              <li>• Timeline templates</li>
            </ul>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Who Should Use This</span>
            </div>
            <ul className="text-sm space-y-1 text-blue-50">
              <li>• Board of Directors</li>
              <li>• Senior Management</li>
              <li>• HR Department</li>
              <li>• Department Heads</li>
              <li>• Compliance Officers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div>
        <h4 className="text-lg font-bold text-slate-900 mb-4">Quick Access - Priority Policies</h4>
        <div className="grid grid-cols-2 gap-4">
          {detailedPolicies.slice(0, 6).map(policy => (
            <div
              key={policy.id}
              onClick={() => {
                setSelectedPolicy(policy);
                setActiveView('policies');
              }}
              className="bg-white border-2 border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <h5 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{policy.policyName}</h5>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                {policy.category}
              </span>
              <div className="mt-3 text-sm text-slate-600">
                {policy.implementationSteps?.length || 0} implementation steps
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPolicyLibrary = () => {
    const filteredPolicies = searchQuery 
      ? allPolicies.filter(p => 
          p.policyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : allPolicies;

    return (
      <div className="space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search policies by name or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Policy Categories */}
        <div>
          <h4 className="text-lg font-bold text-slate-900 mb-4">
            Detailed Implementation Guides ({detailedPolicies.length} Policies)
          </h4>
          <div className="space-y-3">
            {detailedPolicies.filter(p => !searchQuery || 
              p.policyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.category.toLowerCase().includes(searchQuery.toLowerCase())
            ).map(policy => (
              <div
                key={policy.id}
                onClick={() => setSelectedPolicy(policy)}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h5 className="text-lg font-bold text-slate-900">{policy.policyName}</h5>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Complete Guide
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {policy.implementationSteps.length} Steps
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {policy.committeeInvolved?.length || 0} Committees
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                        {policy.category}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Guides */}
        {!searchQuery && pendingPolicies.length > 0 && (
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">
              Additional Policies ({pendingPolicies.length} Policies)
            </h4>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5 mb-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <strong>Note:</strong> Detailed implementation guides for these policies are being developed. 
                  Contact HR Director or refer to the full By-Laws document for current procedures.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {pendingPolicies.map(policy => (
                <div
                  key={policy.id}
                  className="bg-white border-2 border-slate-200 rounded-lg p-4"
                >
                  <div className="font-semibold text-slate-900 mb-1">{policy.policyName}</div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-semibold">
                      {policy.category}
                    </span>
                    <span className="text-xs text-slate-500">Guide pending</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderPolicyDetails = () => {
    if (!selectedPolicy || !selectedPolicy.implementationSteps) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full my-8">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white rounded-t-2xl sticky top-0 z-10">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-2xl font-bold mb-1">{selectedPolicy.policyName}</h3>
                <p className="text-blue-100">Complete Implementation Guide</p>
              </div>
              <button
                onClick={() => setSelectedPolicy(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">
                {selectedPolicy.category}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm">
                {selectedPolicy.implementationSteps.length} Steps
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 max-h-[70vh] overflow-y-auto">
            {/* Implementation Steps */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <List className="w-6 h-6 text-blue-600" />
                Implementation Steps
              </h4>
              <div className="space-y-3">
                {selectedPolicy.implementationSteps.map((step, idx) => (
                  <div key={idx} className="border-2 border-slate-200 rounded-xl overflow-hidden">
                    <div
                      onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
                      className="flex items-center gap-4 p-5 bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-900 mb-1">{step.activity}</div>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs font-semibold">
                            {step.phase}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {step.timeline}
                          </span>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedStep === idx ? 'rotate-180' : ''}`} />
                    </div>
                    
                    {expandedStep === idx && (
                      <div className="p-6 bg-white space-y-4">
                        <div>
                          <div className="text-sm font-bold text-slate-700 mb-2">Details:</div>
                          <p className="text-slate-700 leading-relaxed">{step.details}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm font-bold text-slate-700 mb-2 flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              Responsible Committee:
                            </div>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold inline-block">
                              {committeesDatabase[step.responsibleCommittee]?.name || step.responsibleCommittee}
                            </span>
                          </div>
                          
                          <div>
                            <div className="text-sm font-bold text-slate-700 mb-2 flex items-center gap-1">
                              <UserCheck className="w-4 h-4" />
                              Responsible Individuals:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {step.responsibleIndividuals.map((person, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                                  {person}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-bold text-slate-700 mb-2">Outputs/Deliverables:</div>
                          <ul className="space-y-1">
                            {step.outputs.map((output, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                {output}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <div className="text-sm font-bold text-slate-700 mb-2">Checkpoints:</div>
                          <ul className="space-y-1">
                            {step.checkpoints.map((checkpoint, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                <ClipboardCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                {checkpoint}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Approval Chain */}
            {selectedPolicy.approvalChain && (
              <div className="mb-8 bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                <h4 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  Approval & Decision-Making Chain
                </h4>
                <div className="space-y-3">
                  {selectedPolicy.approvalChain.map((approval, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-purple-900">{approval.level}</div>
                        <div className="text-sm text-purple-700">{approval.for}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Critical Success Factors */}
            {selectedPolicy.criticalSuccess && (
              <div className="mb-8 bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h4 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Critical Success Factors
                </h4>
                <ul className="space-y-2">
                  {selectedPolicy.criticalSuccess.map((factor, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-green-800">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Risks & Mitigation */}
            {selectedPolicy.risks && (
              <div className="mb-8 bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                <h4 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Risks & Mitigation Strategies
                </h4>
                <div className="space-y-3">
                  {selectedPolicy.risks.map((risk, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4">
                      <div className="font-bold text-orange-900 mb-1">⚠️ Risk: {risk.risk}</div>
                      <div className="text-sm text-orange-700">✓ Mitigation: {risk.mitigation}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Legal Compliance */}
            {selectedPolicy.legalCompliance && (
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  Legal & Regulatory Compliance
                </h4>
                <ul className="space-y-2">
                  {selectedPolicy.legalCompliance.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-blue-800">
                      <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl flex gap-3">
            <button
              onClick={() => {
                onNavigateToSection(selectedPolicy.byLawsSection);
                setSelectedPolicy(null);
                onClose();
              }}
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5" />
              View Full By-Laws Section
            </button>
            <button
              onClick={() => setSelectedPolicy(null)}
              className="px-6 py-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderCommittees = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-purple-900 mb-2 flex items-center gap-2">
          <Info className="w-5 h-5" />
          About Committees
        </h4>
        <p className="text-purple-800 text-sm leading-relaxed">
          Committees are the backbone of policy implementation. Each committee has specific composition requirements,
          powers, and responsibilities. Understanding these structures is essential for effective governance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {Object.entries(committeesDatabase).map(([key, committee]) => (
          <div
            key={key}
            onClick={() => setSelectedCommittee(committee)}
            className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h5 className="text-xl font-bold text-slate-900 mb-2">{committee.name}</h5>
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex items-center gap-1 text-slate-600">
                    <Users className="w-4 h-4" />
                    {committee.composition.length} Roles
                  </span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    Meets: {committee.meetings}
                  </span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <Building className="w-4 h-4" />
                    Reports to: {committee.reportingTo}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-slate-400" />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-lg p-3">
                <div className="text-xs font-bold text-slate-600 mb-1">Quorum</div>
                <div className="text-sm text-slate-900">{committee.quorum}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3">
                <div className="text-xs font-bold text-slate-600 mb-1">Key Powers</div>
                <div className="text-sm text-slate-900">{committee.powers.length} defined</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCommitteeDetails = () => {
    if (!selectedCommittee) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full my-8">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 text-white rounded-t-2xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-2xl font-bold mb-1">{selectedCommittee.name}</h3>
                <p className="text-purple-100">Complete Committee Structure & Powers</p>
              </div>
              <button
                onClick={() => setSelectedCommittee(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 max-h-[70vh] overflow-y-auto space-y-6">
            {/* Composition */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Committee Composition
              </h4>
              <div className="space-y-3">
                {selectedCommittee.composition.map((member, idx) => (
                  <div key={idx} className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-bold text-purple-900 text-lg mb-1">{member.role}</div>
                        <div className="text-sm text-purple-700">Number required: {member.count}</div>
                      </div>
                      <div className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-bold">
                        {member.count}
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="text-xs font-bold text-purple-700 mb-1">QUALIFICATIONS:</div>
                      <div className="text-sm text-purple-900">{member.qualifications}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-purple-700 mb-1">POWERS & RESPONSIBILITIES:</div>
                      <ul className="space-y-1">
                        {member.powers.map((power, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-purple-900">
                            <Shield className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            {power}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Committee Powers */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Committee Powers & Authority
              </h4>
              <ul className="space-y-2">
                {selectedCommittee.powers.map((power, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-green-800">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{power}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meeting Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                <div className="text-sm font-bold text-blue-700 mb-1">Meeting Frequency</div>
                <div className="text-blue-900 font-semibold">{selectedCommittee.meetings}</div>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
                <div className="text-sm font-bold text-orange-700 mb-1">Quorum Required</div>
                <div className="text-orange-900 font-semibold">{selectedCommittee.quorum}</div>
              </div>
              <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4">
                <div className="text-sm font-bold text-slate-700 mb-1">Reports To</div>
                <div className="text-slate-900 font-semibold">{selectedCommittee.reportingTo}</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl">
            <button
              onClick={() => setSelectedCommittee(null)}
              className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderAuthorityMatrix = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-orange-900 mb-2 flex items-center gap-2">
          <Info className="w-5 h-5" />
          Understanding Authority Levels
        </h4>
        <p className="text-orange-800 text-sm leading-relaxed">
          The authority matrix defines decision-making power at each organizational level. Understanding this structure
          is crucial for proper escalation, approvals, and accountability.
        </p>
      </div>

      <div className="space-y-4">
        {Object.entries(authorityLevels).map(([key, level], idx) => (
          <div
            key={key}
            className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden"
          >
            <div className={`p-6 ${
              idx === 0 ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' :
              idx === 1 ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' :
              idx === 2 ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' :
              'bg-gradient-to-r from-green-500 to-green-600 text-white'
            }`}>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-xl font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h5 className="text-2xl font-bold">{level.title}</h5>
                  <p className="opacity-90 text-sm">Decision-making authority level {idx + 1}</p>
                </div>
              </div>
              <div className="text-sm opacity-90">{level.decisionMaking}</div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <div className="text-sm font-bold text-slate-700 mb-2">Key Individuals/Roles:</div>
                <div className="flex flex-wrap gap-2">
                  {level.individuals.map((individual, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold">
                      {individual}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-sm font-bold text-slate-700 mb-2">Powers & Decision Authority:</div>
                <ul className="space-y-2">
                  {level.powers.map((power, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Shield className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {power}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderImplementationWizard = () => {
    const policiesWithGuides = allPolicies.filter(p => p.implementationSteps);

    // Wizard Step 1: Policy Selection
    if (wizardStep === 1) {
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <Zap className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Implementation Wizard</h3>
                <p className="text-purple-100">Step-by-step guided implementation process</p>
              </div>
            </div>
            <p className="text-purple-100 leading-relaxed">
              This wizard will guide you through the complete implementation process for any By-Laws policy.
              Select a policy below to begin the structured implementation journey.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Step 1: Select Policy to Implement</h4>
            <div className="grid grid-cols-2 gap-4">
              {policiesWithGuides.map(policy => (
                <div
                  key={policy.id}
                  onClick={() => {
                    setSelectedWizardPolicy(policy);
                    setWizardStep(2);
                    setCompletedSteps([]);
                    setStepProgress({});
                  }}
                  className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h5 className="font-bold text-slate-900 group-hover:text-purple-700 transition-colors flex-1">
                      {policy.policyName}
                    </h5>
                    <PlayCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                      {policy.category}
                    </span>
                    <span className="text-sm text-slate-600">
                      {policy.implementationSteps.length} steps
                    </span>
                  </div>
                  <div className="text-sm text-slate-600">
                    Click to start implementation →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Wizard Step 2+: Implementation Process
    if (!selectedWizardPolicy) return null;

    const totalSteps = selectedWizardPolicy.implementationSteps.length;
    const completedCount = completedSteps.length;
    const progressPercent = (completedCount / totalSteps) * 100;

    return (
      <div className="space-y-6">
        {/* Header with Progress */}
        <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">{selectedWizardPolicy.policyName}</h3>
              <p className="text-slate-600">Implementation in Progress</p>
            </div>
            <button
              onClick={() => {
                setWizardStep(1);
                setSelectedWizardPolicy(null);
                setCompletedSteps([]);
                setStepProgress({});
              }}
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-semibold"
            >
              ← Change Policy
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-slate-700">Overall Progress</span>
              <span className="text-sm font-bold text-purple-700">
                {completedCount} / {totalSteps} Steps Complete ({Math.round(progressPercent)}%)
              </span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Wizard Steps Navigation */}
          <div className="flex gap-2">
            {[
              { step: 2, label: 'Roadmap', icon: GitBranch },
              { step: 3, label: 'Execute Steps', icon: ClipboardCheck },
              { step: 4, label: 'Track Progress', icon: TrendingUp },
              { step: 5, label: 'Resources', icon: FileText },
              { step: 6, label: 'Summary', icon: Award }
            ].map(({ step, label, icon: Icon }) => (
              <button
                key={step}
                onClick={() => setWizardStep(step)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                  wizardStep === step
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden lg:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Roadmap */}
        {wizardStep === 2 && (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <GitBranch className="w-6 h-6 text-purple-600" />
              Implementation Roadmap
            </h4>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
              <p className="text-blue-800 text-sm">
                <strong>Overview:</strong> This roadmap shows all implementation steps in sequence. Each step includes
                activities, responsible parties, timelines, and expected outputs.
              </p>
            </div>
            
            <div className="space-y-3">
              {selectedWizardPolicy.implementationSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`border-2 rounded-xl overflow-hidden transition-all ${
                    completedSteps.includes(idx)
                      ? 'border-green-300 bg-green-50'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                        completedSteps.includes(idx)
                          ? 'bg-green-600 text-white'
                          : 'bg-purple-600 text-white'
                      }`}>
                        {completedSteps.includes(idx) ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          step.step
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="text-lg font-bold text-slate-900">{step.activity}</h5>
                            <p className="text-sm text-slate-600">{step.details}</p>
                          </div>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold whitespace-nowrap ml-2">
                            {step.phase}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="bg-slate-50 rounded-lg p-3">
                            <div className="text-xs font-bold text-slate-600 mb-1">Timeline</div>
                            <div className="text-sm font-semibold text-slate-900 flex items-center gap-1">
                              <Clock className="w-4 h-4 text-slate-600" />
                              {step.timeline}
                            </div>
                          </div>
                          <div className="bg-slate-50 rounded-lg p-3">
                            <div className="text-xs font-bold text-slate-600 mb-1">Responsible</div>
                            <div className="text-sm font-semibold text-slate-900 flex items-center gap-1">
                              <UserCheck className="w-4 h-4 text-slate-600" />
                              {step.responsibleIndividuals[0]}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Execute Steps */}
        {wizardStep === 3 && (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ClipboardCheck className="w-6 h-6 text-purple-600" />
              Execute Implementation Steps
            </h4>
            
            <div className="space-y-4">
              {selectedWizardPolicy.implementationSteps.map((step, idx) => {
                const isCompleted = completedSteps.includes(idx);
                const isExpanded = expandedStep === idx;
                
                return (
                  <div
                    key={idx}
                    className={`border-2 rounded-xl overflow-hidden ${
                      isCompleted ? 'border-green-300 bg-green-50' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div
                      onClick={() => setExpandedStep(isExpanded ? null : idx)}
                      className="p-5 cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                          isCompleted ? 'bg-green-600 text-white' : 'bg-purple-600 text-white'
                        }`}>
                          {isCompleted ? <CheckCircle className="w-6 h-6" /> : step.step}
                        </div>
                        <div className="flex-1">
                          <h5 className="text-lg font-bold text-slate-900">{step.activity}</h5>
                          <p className="text-sm text-slate-600">{step.phase} Phase • {step.timeline}</p>
                        </div>
                        {isExpanded ? (
                          <ChevronDown className="w-6 h-6 text-slate-400" />
                        ) : (
                          <ChevronRight className="w-6 h-6 text-slate-400" />
                        )}
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="px-5 pb-5 space-y-4 border-t border-slate-200">
                        <div className="pt-4">
                          <h6 className="font-bold text-slate-900 mb-2">Details</h6>
                          <p className="text-slate-700 leading-relaxed">{step.details}</p>
                        </div>

                        <div>
                          <h6 className="font-bold text-slate-900 mb-2">Responsible Parties</h6>
                          <div className="flex flex-wrap gap-2">
                            {step.responsibleIndividuals.map((person, i) => (
                              <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold">
                                {person}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h6 className="font-bold text-slate-900 mb-2">Expected Outputs ({step.outputs.length})</h6>
                          <ul className="space-y-1">
                            {step.outputs.map((output, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                <FileText className="w-4 h-4 text-blue-600" />
                                {output}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h6 className="font-bold text-slate-900 mb-2">Checkpoints ({step.checkpoints.length})</h6>
                          <div className="space-y-2">
                            {step.checkpoints.map((checkpoint, i) => {
                              const checkKey = `${idx}-${i}`;
                              const isChecked = stepProgress[checkKey] || false;
                              
                              return (
                                <label
                                  key={i}
                                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-purple-300 cursor-pointer transition-colors"
                                >
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={(e) => {
                                      setStepProgress(prev => ({
                                        ...prev,
                                        [checkKey]: e.target.checked
                                      }));
                                    }}
                                    className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                                  />
                                  <span className="text-sm text-slate-700">{checkpoint}</span>
                                </label>
                              );
                            })}
                          </div>
                        </div>

                        <div className="pt-2">
                          {isCompleted ? (
                            <button
                              onClick={() => setCompletedSteps(prev => prev.filter(s => s !== idx))}
                              className="w-full px-4 py-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-semibold"
                            >
                              Mark as Incomplete
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                if (!completedSteps.includes(idx)) {
                                  setCompletedSteps(prev => [...prev, idx]);
                                }
                              }}
                              className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
                            >
                              <CheckCircle className="w-5 h-5" />
                              Mark Step as Complete
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4: Track Progress */}
        {wizardStep === 4 && (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              Progress Tracking Dashboard
            </h4>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5">
                <div className="text-3xl font-bold text-purple-900 mb-1">{totalSteps}</div>
                <div className="text-sm font-semibold text-purple-700">Total Steps</div>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
                <div className="text-3xl font-bold text-green-900 mb-1">{completedCount}</div>
                <div className="text-sm font-semibold text-green-700">Completed</div>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5">
                <div className="text-3xl font-bold text-orange-900 mb-1">{totalSteps - completedCount}</div>
                <div className="text-sm font-semibold text-orange-700">Remaining</div>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
                <div className="text-3xl font-bold text-blue-900 mb-1">{Math.round(progressPercent)}%</div>
                <div className="text-sm font-semibold text-blue-700">Progress</div>
              </div>
            </div>

            {/* Phase Breakdown */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
              <h5 className="text-lg font-bold text-slate-900 mb-4">Progress by Phase</h5>
              {['Planning', 'Preparation', 'Implementation', 'Monitoring', 'Communication'].map(phase => {
                const phaseSteps = selectedWizardPolicy.implementationSteps.filter(s => s.phase === phase);
                const phaseCompleted = phaseSteps.filter((_, idx) => 
                  completedSteps.includes(selectedWizardPolicy.implementationSteps.indexOf(phaseSteps[idx]))
                ).length;
                const phasePercent = phaseSteps.length > 0 ? (phaseCompleted / phaseSteps.length) * 100 : 0;

                return phaseSteps.length > 0 && (
                  <div key={phase} className="mb-4 last:mb-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-700">{phase}</span>
                      <span className="text-sm text-slate-600">
                        {phaseCompleted} / {phaseSteps.length} steps
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-600 transition-all duration-500"
                        style={{ width: `${phasePercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Step Status List */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
              <h5 className="text-lg font-bold text-slate-900 mb-4">All Steps Status</h5>
              <div className="space-y-2">
                {selectedWizardPolicy.implementationSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      completedSteps.includes(idx) ? 'bg-green-50' : 'bg-slate-50'
                    }`}
                  >
                    {completedSteps.includes(idx) ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900">{step.activity}</div>
                      <div className="text-xs text-slate-600">{step.phase} • {step.timeline}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      completedSteps.includes(idx)
                        ? 'bg-green-200 text-green-800'
                        : 'bg-orange-200 text-orange-800'
                    }`}>
                      {completedSteps.includes(idx) ? 'Complete' : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Resources */}
        {wizardStep === 5 && (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-6 h-6 text-purple-600" />
              Resources & Templates
            </h4>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
              <p className="text-blue-800 text-sm">
                <strong>Resource Library:</strong> Below are all outputs, templates, and documents required for 
                implementing this policy. Use these as guides for your implementation process.
              </p>
            </div>

            {/* All Outputs */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
              <h5 className="text-lg font-bold text-slate-900 mb-4">Required Outputs & Templates</h5>
              <div className="grid grid-cols-2 gap-3">
                {selectedWizardPolicy.implementationSteps.flatMap(step => 
                  step.outputs.map((output, idx) => (
                    <div key={`${step.step}-${idx}`} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 text-sm">{output}</div>
                        <div className="text-xs text-slate-600">Step {step.step}: {step.activity}</div>
                      </div>
                      <Download className="w-4 h-4 text-slate-400" />
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Committee & Authority Info */}
            {selectedWizardPolicy.committeeInvolved && (
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
                <h5 className="text-lg font-bold text-slate-900 mb-4">Involved Committees</h5>
                <div className="grid grid-cols-2 gap-3">
                  {selectedWizardPolicy.committeeInvolved.map(committeeId => {
                    const committee = committeesDatabase[committeeId];
                    return committee && (
                      <div
                        key={committeeId}
                        onClick={() => {
                          setSelectedCommittee(committee);
                        }}
                        className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border-2 border-purple-200 hover:border-purple-400 cursor-pointer transition-all"
                      >
                        <Users className="w-6 h-6 text-purple-600 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="font-bold text-slate-900">{committee.name}</div>
                          <div className="text-xs text-slate-600">{committee.composition.length} members</div>
                        </div>
                        <Eye className="w-4 h-4 text-purple-600" />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Approval Chain */}
            {selectedWizardPolicy.approvalChain && (
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
                <h5 className="text-lg font-bold text-slate-900 mb-4">Approval Chain</h5>
                <div className="space-y-3">
                  {selectedWizardPolicy.approvalChain.map((approval, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-900">{approval.level}</div>
                        <div className="text-sm text-slate-600">{approval.for}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 6: Summary */}
        {wizardStep === 6 && (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-6 h-6 text-purple-600" />
              Implementation Summary & Report
            </h4>

            {/* Completion Status */}
            <div className={`rounded-xl p-8 text-white ${
              progressPercent === 100
                ? 'bg-gradient-to-r from-green-600 to-green-700'
                : 'bg-gradient-to-r from-orange-500 to-orange-600'
            }`}>
              <div className="flex items-center gap-4 mb-4">
                {progressPercent === 100 ? (
                  <CheckCircle className="w-16 h-16" />
                ) : (
                  <Clock className="w-16 h-16" />
                )}
                <div>
                  <h3 className="text-3xl font-bold mb-1">
                    {progressPercent === 100 ? 'Implementation Complete!' : 'Implementation In Progress'}
                  </h3>
                  <p className="text-lg opacity-90">
                    {progressPercent === 100
                      ? 'All implementation steps have been completed successfully.'
                      : `${completedCount} of ${totalSteps} steps completed (${Math.round(progressPercent)}%)`
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Critical Success Factors */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-6">
              <h5 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Critical Success Factors
              </h5>
              <ul className="space-y-2">
                {selectedWizardPolicy.criticalSuccess?.map((factor, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            {/* Risk Mitigation */}
            {selectedWizardPolicy.risks && selectedWizardPolicy.risks.length > 0 && (
              <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                <h5 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Risk Management
                </h5>
                <div className="space-y-3">
                  {selectedWizardPolicy.risks.map((risk, idx) => (
                    <div key={idx} className="bg-orange-50 rounded-lg p-4">
                      <div className="font-bold text-orange-900 mb-1">Risk: {risk.risk}</div>
                      <div className="text-sm text-orange-800">
                        <strong>Mitigation:</strong> {risk.mitigation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-bold">
                <Download className="w-5 h-5" />
                Download Implementation Report
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-600 text-white rounded-xl hover:bg-slate-700 transition-colors font-bold">
                <Printer className="w-5 h-5" />
                Print Summary
              </button>
            </div>

            {progressPercent < 100 && (
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <strong>Note:</strong> Implementation is not yet complete. Return to "Execute Steps" to finish 
                    remaining tasks before final sign-off.
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Policy Implementation Encyclopedia</h2>
                  <p className="text-blue-100">Comprehensive guide for directors and management</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* View Tabs */}
            <div className="flex gap-2">
              {views.map((view) => {
                const ViewIcon = view.icon;
                return (
                  <button
                    key={view.id}
                    onClick={() => setActiveView(view.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                      activeView === view.id
                        ? 'bg-white text-blue-700 shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <ViewIcon className="w-4 h-4" />
                    {view.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
            {activeView === 'overview' && renderOverview()}
            {activeView === 'policies' && renderPolicyLibrary()}
            {activeView === 'committees' && renderCommittees()}
            {activeView === 'authorities' && renderAuthorityMatrix()}
            {activeView === 'wizard' && (
              <div className="text-center py-12">
                <Zap className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Implementation Wizard</p>
                <p className="text-sm text-slate-500 mt-1">Step-by-step guided implementation - Coming Soon</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedPolicy && renderPolicyDetails()}
      {selectedCommittee && renderCommitteeDetails()}
    </>
  );
};

export default PolicyImplementation;
