import React, { useState } from 'react';
import { 
  X, ChevronRight, ChevronLeft, CheckCircle, Circle, AlertCircle,
  Users, Shield, FileText, Calendar, TrendingUp, BookOpen, Heart,
  Activity, Home, DollarSign, MessageSquare, Lock, LogOut, Monitor,
  Globe, MessageCircle, UserCheck, Smile, AlertTriangle, Zap, Clock,
  Gift, CheckSquare, Scale, Search, Filter, Award, Download, ArrowRight
} from 'lucide-react';

const GovernanceWizard = ({ onClose, onNavigateToSection }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userRole, setUserRole] = useState('');
  const [userDepartment, setUserDepartment] = useState('');
  const [selectedScenario, setSelectedScenario] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  // Define comprehensive scenarios based on byLaws content
  const wizardSteps = [
    {
      id: 'welcome',
      title: 'Welcome to Governance Wizard',
      description: 'Smart guidance system for navigating Koyili Hospital HR By-Laws',
    },
    {
      id: 'role',
      title: 'Select Your Role',
      description: 'Help us provide tailored guidance based on your position',
    },
    {
      id: 'department',
      title: 'Select Your Department',
      description: 'Different departments have specific policy requirements',
    },
    {
      id: 'scenario',
      title: 'What Do You Need Help With?',
      description: 'Choose the area where you need guidance',
    },
    {
      id: 'recommendations',
      title: 'Your Personalized Guidance',
      description: 'Based on your selections, here are the relevant sections',
    }
  ];

  const roles = [
    { id: 'leadership', name: 'Senior Leadership', icon: Award, desc: 'C-Suite, Directors, VPs' },
    { id: 'manager', name: 'Department Manager', icon: Users, desc: 'Team leads, Supervisors' },
    { id: 'hr', name: 'HR Professional', icon: FileText, desc: 'HR team members' },
    { id: 'clinical', name: 'Clinical Staff', icon: Activity, desc: 'Doctors, Nurses, Medical staff' },
    { id: 'support', name: 'Support Staff', icon: UserCheck, desc: 'Admin, IT, Facilities' },
    { id: 'new_employee', name: 'New Employee', icon: Smile, desc: 'Recently joined staff' }
  ];

  const departments = [
    { id: 'clinical', name: 'Clinical Services', icon: Activity },
    { id: 'emergency', name: 'Emergency Department', icon: AlertCircle },
    { id: 'administration', name: 'Administration', icon: FileText },
    { id: 'hr', name: 'Human Resources', icon: Users },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'it', name: 'Information Technology', icon: Monitor },
    { id: 'facilities', name: 'Facilities Management', icon: Home },
    { id: 'research', name: 'Research & Development', icon: BookOpen }
  ];

  const scenarios = [
    {
      id: 'onboarding',
      name: 'New Employee Onboarding',
      icon: Users,
      desc: 'Understanding policies for new hires',
      relevantSections: ['preamble', 'section1', 'section2', 'section3', 'section9']
    },
    {
      id: 'recruitment',
      name: 'Recruitment & Hiring',
      icon: UserCheck,
      desc: 'Hiring processes and policies',
      relevantSections: ['section2', 'section5', 'section9']
    },
    {
      id: 'conduct',
      name: 'Code of Conduct Issues',
      icon: Shield,
      desc: 'Professional ethics and behavior',
      relevantSections: ['section3', 'section4', 'section14', 'section25']
    },
    {
      id: 'performance',
      name: 'Performance Management',
      icon: TrendingUp,
      desc: 'Appraisals, reviews, and improvement',
      relevantSections: ['section8', 'section9', 'section4']
    },
    {
      id: 'leave',
      name: 'Leave & Attendance',
      icon: Calendar,
      desc: 'Managing time off and attendance',
      relevantSections: ['section7', 'section21']
    },
    {
      id: 'compliance',
      name: 'Compliance & Audits',
      icon: CheckSquare,
      desc: 'Regulatory compliance and audits',
      relevantSections: ['section14', 'section22', 'section29']
    },
    {
      id: 'dei',
      name: 'Diversity & Inclusion',
      icon: Heart,
      desc: 'DEI initiatives and policies',
      relevantSections: ['section5', 'section21', 'section23']
    },
    {
      id: 'patient_care',
      name: 'Patient Care Standards',
      icon: Activity,
      desc: 'Clinical care and patient interaction',
      relevantSections: ['section6', 'section3', 'section15']
    },
    {
      id: 'training',
      name: 'Training & Development',
      icon: BookOpen,
      desc: 'Professional development programs',
      relevantSections: ['section9', 'section4', 'section8']
    },
    {
      id: 'grievance',
      name: 'Grievance Resolution',
      icon: MessageSquare,
      desc: 'Handling complaints and concerns',
      relevantSections: ['section12', 'section4', 'section21']
    },
    {
      id: 'safety',
      name: 'Health & Safety',
      icon: Shield,
      desc: 'Workplace safety policies',
      relevantSections: ['section13', 'section4', 'section18']
    },
    {
      id: 'termination',
      name: 'Termination & Exit',
      icon: LogOut,
      desc: 'End of employment procedures',
      relevantSections: ['section16', 'section14', 'section2']
    },
    {
      id: 'remote_work',
      name: 'Remote Work Policies',
      icon: Home,
      desc: 'Work from home guidelines',
      relevantSections: ['section10', 'section17', 'section8']
    },
    {
      id: 'data_privacy',
      name: 'Data Protection & Privacy',
      icon: Lock,
      desc: 'Confidentiality and data security',
      relevantSections: ['section15', 'section17', 'section3']
    },
    {
      id: 'wellness',
      name: 'Employee Wellness',
      icon: Smile,
      desc: 'Support programs and well-being',
      relevantSections: ['section20', 'section24', 'section27']
    },
    {
      id: 'compensation',
      name: 'Compensation & Benefits',
      icon: DollarSign,
      desc: 'Salary, benefits, and perks',
      relevantSections: ['section11', 'section2', 'section4']
    }
  ];

  const sectionInfo = {
    preamble: { title: 'Preamble', icon: BookOpen, color: 'amber' },
    section1: { title: 'Preliminary', icon: FileText, color: 'blue' },
    section2: { title: 'Recruitment and Employment', icon: Users, color: 'green' },
    section3: { title: 'Code of Conduct', icon: Shield, color: 'red' },
    section4: { title: 'Employee Rights and Responsibilities', icon: Award, color: 'purple' },
    section5: { title: 'Diversity, Equity, and Inclusion (DEI)', icon: Heart, color: 'pink' },
    section6: { title: 'Patient Interaction and Care Standards', icon: Activity, color: 'blue' },
    section7: { title: 'Attendance and Leave Policy', icon: Calendar, color: 'cyan' },
    section8: { title: 'Performance Management', icon: TrendingUp, color: 'orange' },
    section9: { title: 'Training and Development', icon: BookOpen, color: 'teal' },
    section10: { title: 'Remote Work and Flexible Scheduling', icon: Home, color: 'lime' },
    section11: { title: 'Compensation and Benefits', icon: DollarSign, color: 'green' },
    section12: { title: 'Grievance Redressal Mechanism', icon: MessageSquare, color: 'blue' },
    section13: { title: 'Workplace Health and Safety', icon: Shield, color: 'red' },
    section14: { title: 'Disciplinary Actions and Compliance', icon: AlertCircle, color: 'orange' },
    section15: { title: 'Data Protection and Confidentiality', icon: Lock, color: 'purple' },
    section16: { title: 'Termination and Exit Process', icon: LogOut, color: 'red' },
    section17: { title: 'Technology Use and Digital Conduct', icon: Monitor, color: 'blue' },
    section18: { title: 'Environmental Responsibility and Sustainability', icon: Globe, color: 'green' },
    section19: { title: 'Internal Communication and Information Sharing', icon: MessageCircle, color: 'blue' },
    section20: { title: 'Employee Assistance Programs (EAPs)', icon: Heart, color: 'pink' },
    section21: { title: 'Special Provisions for Sensitive Situations', icon: UserCheck, color: 'purple' },
    section22: { title: 'Compliance and Regular Audits', icon: CheckCircle, color: 'green' },
    section23: { title: 'Workplace Culture and Team Building', icon: Users, color: 'blue' },
    section24: { title: 'Employee Wellness and Support Programs', icon: Smile, color: 'amber' },
    section25: { title: 'Handling Conflicts of Interest', icon: AlertTriangle, color: 'orange' },
    section26: { title: 'Innovation and Continuous Improvement', icon: Zap, color: 'yellow' },
    section27: { title: 'Work-Life Balance Initiatives', icon: Clock, color: 'blue' },
    section28: { title: 'Corporate Social Responsibility (CSR) Policies', icon: Gift, color: 'green' },
    section29: { title: 'Compliance with Industry Standards and Best Practices', icon: CheckSquare, color: 'blue' },
    section30: { title: 'Miscellaneous Provisions', icon: FileText, color: 'slate' }
  };

  const handleNext = () => {
    if (currentStep === 3 && selectedScenario) {
      // Generate recommendations based on selected scenario
      const scenario = scenarios.find(s => s.id === selectedScenario);
      if (scenario) {
        setRecommendations(scenario.relevantSections);
      }
    }
    setCurrentStep(Math.min(currentStep + 1, wizardSteps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep(Math.max(currentStep - 1, 0));
  };

  const handleSectionClick = (sectionId) => {
    onNavigateToSection(sectionId);
    onClose();
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <Scale className="w-14 h-14 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Governance Wizard
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Noto Serif', Georgia, serif" }}>
              Your intelligent guide to navigating Koyili Hospital's HR By-Laws. Get personalized recommendations 
              based on your role, department, and specific needs.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-900">30</div>
                <div className="text-sm text-blue-700">Sections</div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-900">Smart</div>
                <div className="text-sm text-green-700">Guidance</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-900">Fast</div>
                <div className="text-sm text-purple-700">Results</div>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="inline-block w-6 h-6 ml-2" />
            </button>
          </div>
        );

      case 1:
        return (
          <div className="py-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
              What is your role at Koyili Hospital?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {roles.map((role) => {
                const RoleIcon = role.icon;
                return (
                  <button
                    key={role.id}
                    onClick={() => setUserRole(role.id)}
                    className={`p-6 rounded-xl border-2 transition-all text-left group hover:shadow-lg ${
                      userRole === role.id
                        ? 'border-blue-600 bg-blue-50 shadow-lg'
                        : 'border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${userRole === role.id ? 'bg-blue-600' : 'bg-slate-100 group-hover:bg-blue-100'} transition-colors`}>
                        <RoleIcon className={`w-6 h-6 ${userRole === role.id ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-900 mb-1">{role.name}</div>
                        <div className="text-sm text-slate-600">{role.desc}</div>
                      </div>
                      {userRole === role.id && (
                        <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="py-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
              Which department do you work in?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {departments.map((dept) => {
                const DeptIcon = dept.icon;
                return (
                  <button
                    key={dept.id}
                    onClick={() => setUserDepartment(dept.id)}
                    className={`p-5 rounded-xl border-2 transition-all text-left group hover:shadow-lg ${
                      userDepartment === dept.id
                        ? 'border-green-600 bg-green-50 shadow-lg'
                        : 'border-slate-200 hover:border-green-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${userDepartment === dept.id ? 'bg-green-600' : 'bg-slate-100 group-hover:bg-green-100'} transition-colors`}>
                        <DeptIcon className={`w-6 h-6 ${userDepartment === dept.id ? 'text-white' : 'text-slate-600 group-hover:text-green-600'}`} />
                      </div>
                      <div className="flex-1 font-bold text-slate-900">{dept.name}</div>
                      {userDepartment === dept.id && (
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="py-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
              What do you need help with today?
            </h3>
            <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
              {scenarios.map((scenario) => {
                const ScenarioIcon = scenario.icon;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => setSelectedScenario(scenario.id)}
                    className={`p-5 rounded-xl border-2 transition-all text-left group hover:shadow-lg ${
                      selectedScenario === scenario.id
                        ? 'border-purple-600 bg-purple-50 shadow-lg'
                        : 'border-slate-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${selectedScenario === scenario.id ? 'bg-purple-600' : 'bg-slate-100 group-hover:bg-purple-100'} transition-colors`}>
                        <ScenarioIcon className={`w-5 h-5 ${selectedScenario === scenario.id ? 'text-white' : 'text-slate-600 group-hover:text-purple-600'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-900 text-sm mb-1">{scenario.name}</div>
                        <div className="text-xs text-slate-600">{scenario.desc}</div>
                      </div>
                      {selectedScenario === scenario.id && (
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 4:
        const selectedScenarioData = scenarios.find(s => s.id === selectedScenario);
        return (
          <div className="py-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                Your Personalized Guidance
              </h3>
              <p className="text-slate-600" style={{ fontFamily: "'Noto Serif', Georgia, serif" }}>
                Based on your selections, here are the most relevant By-Law sections for:
              </p>
              <div className="inline-block mt-3 px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-semibold">
                {selectedScenarioData?.name}
              </div>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {recommendations.map((sectionId, index) => {
                const section = sectionInfo[sectionId];
                if (!section) return null;
                const IconComponent = section.icon;
                
                return (
                  <button
                    key={sectionId}
                    onClick={() => handleSectionClick(sectionId)}
                    className="w-full p-5 bg-white border-2 border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-700 font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {index + 1}
                      </div>
                      <div className="flex-1 flex items-center gap-3">
                        <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <IconComponent className="w-6 h-6 text-slate-600 group-hover:text-blue-600" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {section.title}
                          </div>
                          <div className="text-sm text-slate-500">
                            Click to view this section
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <strong>Pro Tip:</strong> These sections are prioritized based on your scenario. 
                  Start with Section 1 for foundational understanding, then explore the others.
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return true;
      case 1:
        return userRole !== '';
      case 2:
        return userDepartment !== '';
      case 3:
        return selectedScenario !== '';
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                {wizardSteps[currentStep].title}
              </h2>
              <p className="text-blue-100 text-sm">{wizardSteps[currentStep].description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-8 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center justify-between mb-2">
            {wizardSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${
                  index < currentStep
                    ? 'bg-green-600 text-white'
                    : index === currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  {index < currentStep ? <CheckCircle className="w-6 h-6" /> : index + 1}
                </div>
                {index < wizardSteps.length - 1 && (
                  <div className={`h-1 w-16 mx-2 rounded ${
                    index < currentStep ? 'bg-green-600' : 'bg-slate-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-sm text-slate-600 text-center">
            Step {currentStep + 1} of {wizardSteps.length}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentStep === 0
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="text-sm text-slate-500">
            {currentStep === 4 ? 'Review your recommendations' : 'Fill in the details to continue'}
          </div>

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                canProceed()
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 shadow-lg hover:shadow-xl transition-all"
            >
              Done
              <CheckCircle className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GovernanceWizard;
