import React, { useState } from 'react';
import { 
  Calendar, CheckSquare, Users, TrendingUp, Shield, Heart, 
  FileText, AlertCircle, Clock, BarChart3, Zap, Brain,
  UserPlus, Award, DollarSign, GraduationCap, Lock, UserX,
  ClipboardCheck, Search, Download, Upload, Settings, Activity
} from 'lucide-react';

// Import tool components
import DailyTaskGenerator from './tools/DailyTaskGenerator';
import SmartFormAssistant from './tools/SmartFormAssistant';
import FormLibrary from './tools/FormLibrary';
import {
  RecruitmentPipeline,
  OnboardingHub,
  PerformanceScheduler,
  AttendanceDashboard,
  PayrollProcessor,
  TrainingTracker,
  SecurityCompliance,
  WellnessMonitor,
  GrievanceTracker,
  ExitAutomation,
  ComplianceCalendar,
  BulkFormGenerator,
  AnalyticsDashboard,
  DocumentLifecycle
} from './tools/index';

const SmartAnnexuresDashboard = () => {
  const [activeTool, setActiveTool] = useState(null);

  const toolCategories = [
    {
      name: 'Daily Operations',
      color: 'blue',
      icon: Zap,
      tools: [
        {
          id: 'daily-tasks',
          name: 'Daily Task List Generator',
          icon: CheckSquare,
          description: 'Generate time-bound task lists for all departments with smart scheduling',
          color: 'blue',
          badge: 'ESSENTIAL'
        },
        {
          id: 'smart-assistant',
          name: 'AI Form Intelligence Assistant',
          icon: Brain,
          description: 'Natural language form recommendations - "I need to hire a nurse"',
          color: 'purple',
          badge: 'AI-POWERED'
        },
        {
          id: 'compliance-calendar',
          name: 'Compliance Calendar',
          icon: Calendar,
          description: 'Track NABH/JCI deadlines, mandatory forms, and audit schedules',
          color: 'red',
          badge: 'CRITICAL'
        },
        {
          id: 'analytics',
          name: 'Real-Time Analytics Hub',
          icon: BarChart3,
          description: 'Form completion rates, bottlenecks, department performance metrics',
          color: 'green',
          badge: 'INSIGHTS'
        }
      ]
    },
    {
      name: 'Recruitment & Onboarding',
      color: 'green',
      icon: UserPlus,
      tools: [
        {
          id: 'recruitment-pipeline',
          name: 'Smart Recruitment Pipeline',
          icon: Users,
          description: 'End-to-end hiring workflow from requisition to appointment (B1-B10)',
          color: 'green',
          badge: 'AUTOMATED'
        },
        {
          id: 'onboarding-hub',
          name: 'Onboarding Automation Hub',
          icon: UserPlus,
          description: 'Automated onboarding workflows with checklists and document generation (C1-C5)',
          color: 'teal',
          badge: 'WORKFLOW'
        },
        {
          id: 'bulk-generator',
          name: 'Bulk Form Generator',
          icon: Upload,
          description: 'Generate multiple forms for multiple employees simultaneously',
          color: 'indigo',
          badge: 'BULK'
        }
      ]
    },
    {
      name: 'Performance & Development',
      color: 'orange',
      icon: TrendingUp,
      tools: [
        {
          id: 'performance-scheduler',
          name: 'Performance Review Scheduler',
          icon: Award,
          description: 'Automated goal setting, review cycles, and appraisal workflows (D1-D5, H1-H6)',
          color: 'orange',
          badge: 'SCHEDULED'
        },
        {
          id: 'training-tracker',
          name: 'Training & Competency Tracker',
          icon: GraduationCap,
          description: 'Training calendar, needs assessment, and competency management (G1-G5, J1-J6)',
          color: 'violet',
          badge: 'DEVELOPMENT'
        }
      ]
    },
    {
      name: 'Payroll & Attendance',
      color: 'emerald',
      icon: DollarSign,
      tools: [
        {
          id: 'attendance-dashboard',
          name: 'Attendance & Leave Dashboard',
          icon: Clock,
          description: 'Real-time attendance tracking, leave management, and shift planning (E1-E5)',
          color: 'cyan',
          badge: 'LIVE'
        },
        {
          id: 'payroll-processor',
          name: 'Payroll Pre-Processor',
          icon: DollarSign,
          description: 'Automate payroll calculations, statutory deductions, and payslip generation (F1-F5, I1-I6)',
          color: 'emerald',
          badge: 'AUTOMATED'
        }
      ]
    },
    {
      name: 'Compliance & Security',
      color: 'red',
      icon: Shield,
      tools: [
        {
          id: 'security-compliance',
          name: 'IT Security Compliance Monitor',
          icon: Lock,
          description: 'Track device allocation, access logs, and cybersecurity incidents (K1-K5)',
          color: 'red',
          badge: 'SECURITY'
        },
        {
          id: 'wellness-monitor',
          name: 'Employee Wellness Monitor',
          icon: Heart,
          description: 'Health screenings, EAP referrals, and work-life balance tracking (L1-L5)',
          color: 'pink',
          badge: 'WELLNESS'
        }
      ]
    },
    {
      name: 'Grievance & Exit Management',
      color: 'rose',
      icon: AlertCircle,
      tools: [
        {
          id: 'grievance-tracker',
          name: 'Grievance Resolution Tracker',
          icon: AlertCircle,
          description: 'Track grievances, POSH complaints, and disciplinary actions (M1-M5)',
          color: 'rose',
          badge: 'SENSITIVE'
        },
        {
          id: 'exit-automation',
          name: 'Exit Process Automation',
          icon: UserX,
          description: 'Automated resignation, exit interviews, clearances, and F&F settlement (N1-N4)',
          color: 'slate',
          badge: 'AUTOMATED'
        }
      ]
    },
    {
      name: 'Document Management',
      color: 'indigo',
      icon: FileText,
      tools: [
        {
          id: 'form-library',
          name: 'Form Library & Repository',
          icon: Search,
          description: 'Access, search, and manage all 76 professional annexure forms',
          color: 'indigo',
          badge: '76 FORMS'
        },
        {
          id: 'document-lifecycle',
          name: 'Document Lifecycle Manager',
          icon: Activity,
          description: 'Track form status: Draft → Submitted → Approved → Archived',
          color: 'sky',
          badge: 'TRACKING'
        }
      ]
    }
  ];

  const renderToolCard = (tool) => (
    <div
      key={tool.id}
      onClick={() => setActiveTool(tool.id)}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer border-2 border-transparent hover:border-blue-400 transform hover:-translate-y-1"
    >
      {/* Badge */}
      <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-bold bg-${tool.color}-100 text-${tool.color}-700`}>
        {tool.badge}
      </div>

      {/* Icon */}
      <div className={`w-14 h-14 bg-gradient-to-br from-${tool.color}-400 to-${tool.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <tool.icon className="w-7 h-7 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {tool.name}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {tool.description}
      </p>

      {/* Arrow indicator */}
      <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        Open Tool
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  const renderToolContent = () => {
    switch(activeTool) {
      case 'daily-tasks': return <DailyTaskGenerator onClose={() => setActiveTool(null)} />;
      case 'smart-assistant': return <SmartFormAssistant onClose={() => setActiveTool(null)} />;
      case 'recruitment-pipeline': return <RecruitmentPipeline onClose={() => setActiveTool(null)} />;
      case 'onboarding-hub': return <OnboardingHub onClose={() => setActiveTool(null)} />;
      case 'performance-scheduler': return <PerformanceScheduler onClose={() => setActiveTool(null)} />;
      case 'attendance-dashboard': return <AttendanceDashboard onClose={() => setActiveTool(null)} />;
      case 'payroll-processor': return <PayrollProcessor onClose={() => setActiveTool(null)} />;
      case 'training-tracker': return <TrainingTracker onClose={() => setActiveTool(null)} />;
      case 'security-compliance': return <SecurityCompliance onClose={() => setActiveTool(null)} />;
      case 'wellness-monitor': return <WellnessMonitor onClose={() => setActiveTool(null)} />;
      case 'grievance-tracker': return <GrievanceTracker onClose={() => setActiveTool(null)} />;
      case 'exit-automation': return <ExitAutomation onClose={() => setActiveTool(null)} />;
      case 'compliance-calendar': return <ComplianceCalendar onClose={() => setActiveTool(null)} />;
      case 'bulk-generator': return <BulkFormGenerator onClose={() => setActiveTool(null)} />;
      case 'analytics': return <AnalyticsDashboard onClose={() => setActiveTool(null)} />;
      case 'form-library': return <FormLibrary onClose={() => setActiveTool(null)} />;
      default: return null;
    }
  };

  if (activeTool) {
    return renderToolContent();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 p-6">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Zap className="w-10 h-10 text-yellow-400" />
                  <h1 className="text-4xl font-black">Smart Annexures Hub</h1>
                </div>
                <p className="text-blue-100 text-lg font-medium">AI-Powered Administrative Automation Platform</p>
              </div>
              <div className="text-right">
                <div className="bg-white/20 backdrop-blur-md rounded-xl px-6 py-3 border border-white/30">
                  <div className="text-3xl font-black text-yellow-400">76</div>
                  <div className="text-sm text-blue-100">Forms Available</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">18</div>
                <div className="text-sm text-blue-200">Smart Tools</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-blue-200">NABH Compliant</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Automation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">AI</div>
                <div className="text-sm text-blue-200">Powered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto space-y-8">
        {toolCategories.map((category, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br from-${category.color}-400 to-${category.color}-600 rounded-xl flex items-center justify-center`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                <p className="text-sm text-gray-500">{category.tools.length} powerful tools</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map(tool => renderToolCard(tool))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats Footer */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-300 mb-1">Powered by Koyili Hospital HRMS</div>
              <div className="text-xs text-slate-400">International Standard • NABH Accredited • ISO 9001 Compliant</div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <CheckSquare className="w-4 h-4 text-green-400" />
                <span>All Systems Operational</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Secure & Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAnnexuresDashboard;
