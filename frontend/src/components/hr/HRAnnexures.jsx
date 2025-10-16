import React, { useState } from 'react';
import { 
  FileText, Search, ArrowRight, TrendingUp, Clock, CheckCircle, 
  Users, Calendar, Award, AlertCircle, Download, Sparkles, Zap,
  Menu, X, ChevronRight, Home, Grid3x3
} from 'lucide-react';
import InteractiveFormViewer from './InteractiveFormViewer';
import formTemplates, { formScenarios } from '../../data/formTemplates';
import ProfessionalA1Form from './forms/ProfessionalA1Form';
import ProfessionalA2Form from './forms/ProfessionalA2Form';
import ProfessionalA3Form from './forms/ProfessionalA3Form';
import ProfessionalA4Form from './forms/ProfessionalA4Form';
import ProfessionalB1Form from './forms/ProfessionalB1Form';
import ProfessionalB2Form from './forms/ProfessionalB2Form';
import ProfessionalB3Form from './forms/ProfessionalB3Form';
import ProfessionalB4Form from './forms/ProfessionalB4Form';
import ProfessionalB5Form from './forms/ProfessionalB5Form';
import ProfessionalB6Form from './forms/ProfessionalB6Form';
import ProfessionalB7Form from './forms/ProfessionalB7Form';
import ProfessionalB8Form from './forms/ProfessionalB8Form';
import ProfessionalB9Form from './forms/ProfessionalB9Form';
import ProfessionalB10Form from './forms/ProfessionalB10Form';
import ProfessionalC1Form from './forms/ProfessionalC1Form';
import ProfessionalC2Form from './forms/ProfessionalC2Form';
import ProfessionalC3Form from './forms/ProfessionalC3Form';
import ProfessionalC4Form from './forms/ProfessionalC4Form';
import ProfessionalC5Form from './forms/ProfessionalC5Form';
import ProfessionalD1Form from './forms/ProfessionalD1Form';
import ProfessionalD2Form from './forms/ProfessionalD2Form';
import ProfessionalD3Form from './forms/ProfessionalD3Form';
import ProfessionalD4Form from './forms/ProfessionalD4Form';
import ProfessionalD5Form from './forms/ProfessionalD5Form';
import ProfessionalE1Form from './forms/ProfessionalE1Form';
import ProfessionalE2Form from './forms/ProfessionalE2Form';
import ProfessionalE3Form from './forms/ProfessionalE3Form';
import ProfessionalE4Form from './forms/ProfessionalE4Form';
import ProfessionalE5Form from './forms/ProfessionalE5Form';
import ProfessionalF1Form from './forms/ProfessionalF1Form';
import ProfessionalF2Form from './forms/ProfessionalF2Form';
import ProfessionalF3Form from './forms/ProfessionalF3Form';
import ProfessionalF4Form from './forms/ProfessionalF4Form';
import ProfessionalF5Form from './forms/ProfessionalF5Form';
import ProfessionalG1Form from './forms/ProfessionalG1Form';
import ProfessionalG2Form from './forms/ProfessionalG2Form';
import ProfessionalG3Form from './forms/ProfessionalG3Form';
import ProfessionalG4Form from './forms/ProfessionalG4Form';
import ProfessionalG5Form from './forms/ProfessionalG5Form';
import ProfessionalH1Form from './forms/ProfessionalH1Form';
import ProfessionalH2Form from './forms/ProfessionalH2Form';
import ProfessionalH3Form from './forms/ProfessionalH3Form';
import ProfessionalH4Form from './forms/ProfessionalH4Form';
import ProfessionalH5Form from './forms/ProfessionalH5Form';
import ProfessionalH6Form from './forms/ProfessionalH6Form';
import ProfessionalI1Form from './forms/ProfessionalI1Form';
import ProfessionalI2Form from './forms/ProfessionalI2Form';
import ProfessionalI3Form from './forms/ProfessionalI3Form';
import ProfessionalI4Form from './forms/ProfessionalI4Form';
import ProfessionalI6Form from './forms/ProfessionalI6Form';
import ProfessionalJ1Form from './forms/ProfessionalJ1Form';
import ProfessionalJ2Form from './forms/ProfessionalJ2Form';
import ProfessionalJ3Form from './forms/ProfessionalJ3Form';
import ProfessionalJ4Form from './forms/ProfessionalJ4Form';
import ProfessionalJ5Form from './forms/ProfessionalJ5Form';
import ProfessionalJ6Form from './forms/ProfessionalJ6Form';
import ProfessionalK1Form from './forms/ProfessionalK1Form';
import ProfessionalK2Form from './forms/ProfessionalK2Form';
import ProfessionalK3Form from './forms/ProfessionalK3Form';

const HRAnnexures = ({ setActiveModule }) => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeAnnexure, setActiveAnnexure] = useState(null);
  const [viewMode, setViewMode] = useState('dashboard'); // 'dashboard' or 'annexure'

  // Professional Annexures List (Batch 1 & 2)
  const professionalAnnexures = [
    {
      code: 'A1',
      title: 'HR Policy Revision Request Format',
      category: 'HR Policy',
      linkedSOP: 'SOP A.1',
      color: 'blue'
    },
    {
      code: 'A2',
      title: 'Finalized Organizational Structure Template',
      category: 'HR Policy',
      linkedSOP: 'SOP A.1',
      color: 'green'
    },
    {
      code: 'A3',
      title: 'Standard Job Description Template',
      category: 'Recruitment',
      linkedSOP: 'SOP B.1',
      color: 'purple'
    },
    {
      code: 'A4',
      title: 'Employee Handbook Acknowledgment Form',
      category: 'Onboarding',
      linkedSOP: 'SOP B.2',
      color: 'orange'
    },
    {
      code: 'B1',
      title: 'Manpower Requisition Form',
      category: 'Recruitment',
      linkedSOP: 'SOP B.1',
      color: 'teal'
    },
    {
      code: 'B2',
      title: 'Recruitment Approval Note',
      category: 'Recruitment',
      linkedSOP: 'SOP B.2',
      color: 'emerald'
    },
    {
      code: 'B3',
      title: 'Job Advertisement & Posting Template',
      category: 'Recruitment',
      linkedSOP: 'SOP B.3',
      color: 'indigo'
    },
    {
      code: 'B4',
      title: 'Resume Screening Tracker',
      category: 'Recruitment',
      linkedSOP: 'SOP B.4',
      color: 'cyan'
    },
    {
      code: 'B5',
      title: 'Interview Panel Evaluation Sheet',
      category: 'Recruitment',
      linkedSOP: 'SOP B.5',
      color: 'violet'
    },
    {
      code: 'B6',
      title: 'Candidate Evaluation Summary',
      category: 'Recruitment',
      linkedSOP: 'SOP B.6',
      color: 'rose'
    },
    {
      code: 'B7',
      title: 'Background Verification Authorization Form',
      category: 'Recruitment',
      linkedSOP: 'SOP B.7',
      color: 'amber'
    },
    {
      code: 'B8',
      title: 'Pre-Employment Medical Fitness Certificate',
      category: 'Recruitment',
      linkedSOP: 'SOP B.8',
      color: 'green'
    },
    {
      code: 'B9',
      title: 'Offer Letter Template',
      category: 'Recruitment',
      linkedSOP: 'SOP B.9',
      color: 'sky'
    },
    {
      code: 'B10',
      title: 'Appointment Letter Template',
      category: 'Recruitment',
      linkedSOP: 'SOP B.10',
      color: 'navy'
    },
    {
      code: 'C1',
      title: 'Orientation Program Checklist',
      category: 'Onboarding',
      linkedSOP: 'SOP C.1',
      color: 'lime'
    },
    {
      code: 'B8',
      title: 'Pre-Employment Medical Fitness Certificate',
      category: 'Recruitment',
      linkedSOP: 'SOP B.8',
      color: 'green'
    },
    {
      code: 'B9',
      title: 'Offer Letter Template',
      category: 'Recruitment',
      linkedSOP: 'SOP B.9',
      color: 'sky'
    },
    {
      code: 'B10',
      title: 'Appointment Letter Template',
      category: 'Recruitment',
      linkedSOP: 'SOP B.10',
      color: 'blue'
    },
    {
      code: 'C2',
      title: 'Uniform & ID Card Issue Register',
      category: 'Onboarding',
      linkedSOP: 'SOP C.2',
      color: 'slate'
    },
    {
      code: 'C3',
      title: 'HRMS Biometric Access Request Form',
      category: 'Onboarding',
      linkedSOP: 'SOP C.3',
      color: 'zinc'
    },
    {
      code: 'C4',
      title: 'Confidentiality Declaration Form',
      category: 'Onboarding',
      linkedSOP: 'SOP C.4',
      color: 'stone'
    },
    {
      code: 'C5',
      title: 'Clinical Credentialing Application Form',
      category: 'Onboarding',
      linkedSOP: 'SOP C.5',
      color: 'neutral'
    },
    {
      code: 'D1',
      title: 'Personnel File Checklist',
      category: 'Personnel Management',
      linkedSOP: 'SOP D.1',
      color: 'gray'
    },
    {
      code: 'D2',
      title: 'Document Verification Register',
      category: 'Personnel Management',
      linkedSOP: 'SOP D.2',
      color: 'indigo'
    },
    {
      code: 'D3',
      title: 'Statutory Register Format (PF/ESI/Bonus/Gratuity)',
      category: 'Statutory Compliance',
      linkedSOP: 'SOP D.3',
      color: 'purple'
    },
    {
      code: 'D4',
      title: 'Display Board Compliance Checklist',
      category: 'Compliance',
      linkedSOP: 'SOP D.4',
      color: 'teal'
    },
    {
      code: 'D5',
      title: 'KYC / UAN / ESIC Mapping Sheet',
      category: 'Statutory Compliance',
      linkedSOP: 'SOP D.5',
      color: 'orange'
    },
    {
      code: 'E1',
      title: 'Biometric Attendance Report Format',
      category: 'Attendance Management',
      linkedSOP: 'SOP E.1',
      color: 'rose'
    },
    {
      code: 'E2',
      title: 'Shift Roster Template',
      category: 'Shift Management',
      linkedSOP: 'SOP E.2',
      color: 'blue'
    },
    {
      code: 'E3',
      title: 'Leave / Short Leave Entry Log',
      category: 'Leave Management',
      linkedSOP: 'SOP E.3',
      color: 'emerald'
    },
    {
      code: 'E4',
      title: 'Holiday Calendar Format',
      category: 'Holiday Management',
      linkedSOP: 'SOP E.4',
      color: 'fuchsia'
    },
    {
      code: 'E5',
      title: 'Compensatory Off Application Form',
      category: 'Leave Management',
      linkedSOP: 'SOP E.5',
      color: 'cyan'
    },
    {
      code: 'F1',
      title: 'Leave Application Form',
      category: 'Leave Management',
      linkedSOP: 'SOP F.1',
      color: 'sky'
    },
    {
      code: 'F2',
      title: 'Emergency Leave Escalation Note',
      category: 'Leave Management',
      linkedSOP: 'SOP F.2',
      color: 'red'
    },
    {
      code: 'F3',
      title: 'Maternity / Paternity / Bereavement Leave Declaration',
      category: 'Special Leave',
      linkedSOP: 'SOP F.3',
      color: 'pink'
    },
    {
      code: 'F4',
      title: 'Leave Encashment Approval Sheet',
      category: 'Leave Benefits',
      linkedSOP: 'SOP F.4',
      color: 'green'
    },
    {
      code: 'F5',
      title: 'Leave Without Pay (LOP) Request Format',
      category: 'Leave Management',
      linkedSOP: 'SOP F.5',
      color: 'amber'
    },
    {
      code: 'G1',
      title: 'Dress Code Acknowledgment Form',
      category: 'Compliance',
      linkedSOP: 'SOP G.1',
      color: 'indigo'
    },
    {
      code: 'G2',
      title: 'Code of Ethics & Conduct Declaration',
      category: 'Ethics & Conduct',
      linkedSOP: 'SOP G.2',
      color: 'purple'
    },
    {
      code: 'G3',
      title: 'Conflict of Interest Disclosure Form',
      category: 'Governance',
      linkedSOP: 'SOP G.3',
      color: 'amber'
    },
    {
      code: 'G4',
      title: 'Disciplinary Action Reporting Form',
      category: 'Compliance',
      linkedSOP: 'SOP G.4',
      color: 'red'
    },
    {
      code: 'G5',
      title: 'Intoxication Screening & Fitness to Work Format',
      category: 'Safety',
      linkedSOP: 'SOP G.5',
      color: 'blue'
    },
    {
      code: 'H1',
      title: 'Goal Setting & KPI Sheet',
      category: 'Performance Management',
      linkedSOP: 'SOP H.1',
      color: 'green'
    },
    {
      code: 'H2',
      title: 'Appraisal Format (Mid-Year / Year-End)',
      category: 'Performance Management',
      linkedSOP: 'SOP H.2',
      color: 'green'
    },
    {
      code: 'H3',
      title: '360-Degree Feedback Form',
      category: 'Performance Management',
      linkedSOP: 'SOP H.3',
      color: 'green'
    },
    {
      code: 'H4',
      title: 'Performance Improvement Plan (PIP)',
      category: 'Performance Management',
      linkedSOP: 'SOP H.4',
      color: 'green'
    },
    {
      code: 'H5',
      title: 'Promotion & Internal Job Posting Application',
      category: 'Performance Management',
      linkedSOP: 'SOP H.5',
      color: 'green'
    },
    {
      code: 'H6',
      title: 'Employee Recognition Nomination Form',
      category: 'Performance Management',
      linkedSOP: 'SOP H.6',
      color: 'green'
    },
    {
      code: 'I1',
      title: 'Payroll Input Sheet',
      category: 'Payroll & Compensation',
      linkedSOP: 'SOP I.1',
      color: 'orange'
    },
    {
      code: 'I2',
      title: 'Overtime Approval Sheet',
      category: 'Payroll & Compensation',
      linkedSOP: 'SOP I.2',
      color: 'orange'
    },
    {
      code: 'I3',
      title: 'Allowance Disbursement Form',
      category: 'Payroll & Compensation',
      linkedSOP: 'SOP I.3',
      color: 'orange'
    },
    {
      code: 'I4',
      title: 'Bonus Calculation Format',
      category: 'Payroll & Compensation',
      linkedSOP: 'SOP I.4',
      color: 'orange'
    },
    {
      code: 'I6',
      title: 'Salary Slip Format & Payroll Helpdesk Query Form',
      category: 'Payroll & Compensation',
      linkedSOP: 'SOP I.6',
      color: 'orange'
    },
    {
      code: 'J1',
      title: 'Training Needs Assessment Tracker',
      category: 'Training & Development',
      linkedSOP: 'SOP J.1',
      color: 'purple'
    },
    {
      code: 'J2',
      title: 'Training Calendar Template',
      category: 'Training & Development',
      linkedSOP: 'SOP J.2',
      color: 'purple'
    },
    {
      code: 'J3',
      title: 'Clinical Competency Assessment Checklist',
      category: 'Training & Development',
      linkedSOP: 'SOP J.3',
      color: 'purple'
    },
    {
      code: 'J4',
      title: 'External Training Approval Request',
      category: 'Training & Development',
      linkedSOP: 'SOP J.4',
      color: 'purple'
    },
    {
      code: 'J5',
      title: 'Training Tracker & Certificate Record',
      category: 'Training & Development',
      linkedSOP: 'SOP J.5',
      color: 'purple'
    },
    {
      code: 'J6',
      title: 'Leadership Succession Plan Matrix',
      category: 'Training & Development',
      linkedSOP: 'SOP J.6',
      color: 'purple'
    },
    {
      code: 'K1',
      title: 'Internet and Email Usage Declaration',
      category: 'IT Security & Digital Compliance',
      linkedSOP: 'SOP K.1',
      color: 'teal'
    },
    {
      code: 'K2',
      title: 'IT Security Awareness Acknowledgment',
      category: 'IT Security & Digital Compliance',
      linkedSOP: 'SOP K.2',
      color: 'teal'
    },
    {
      code: 'K3',
      title: 'Device Allocation and Return Register',
      category: 'IT Security & Digital Compliance',
      linkedSOP: 'SOP K.3',
      color: 'teal'
    },
  ];

  // Mock data for dashboard stats
  const dashboardStats = {
    pendingForms: 5,
    submittedThisMonth: 23,
    approvedForms: 18,
    deadlinesThisWeek: 2
  };

  // Popular forms
  const popularForms = [
    { key: 'leaveApplication', title: 'Leave Application', uses: 156, trend: '+12%' },
    { key: 'performanceAppraisal', title: 'Performance Appraisal', uses: 89, trend: '+8%' },
    { key: 'salaryCertificate', title: 'Salary Certificate', uses: 67, trend: '+15%' },
    { key: 'overtimeAuthorization', title: 'Overtime Authorization', uses: 54, trend: '+5%' },
  ];

  const getFormByKey = (key) => {
    return formTemplates[key];
  };

  const handleAnnexureClick = (annexure) => {
    setActiveAnnexure(annexure);
    setViewMode('annexure');
  };

  const handleBackToDashboard = () => {
    setActiveAnnexure(null);
    setViewMode('dashboard');
  };

  // Sidebar Component
  const Sidebar = () => (
    <div className={`fixed left-0 top-0 h-full bg-white border-r-2 border-slate-200 transition-all duration-300 z-40 ${
      sidebarOpen ? 'w-80' : 'w-0'
    } overflow-hidden`}>
      <div className="h-full flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b-2 border-slate-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-slate-900">Professional Annexures</h3>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 hover:bg-slate-200 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-slate-600">Batches 1-10: 54 Forms (All Complete ✓)</p>
        </div>

        {/* Back to Dashboard Button */}
        <div className="p-3 border-b border-slate-200">
          <button
            onClick={handleBackToDashboard}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
              viewMode === 'dashboard'
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Dashboard Home</span>
          </button>
        </div>

        {/* Annexures List */}
        <div className="flex-1 overflow-y-auto p-3">
          <div className="space-y-2">
            {professionalAnnexures.map((annexure) => (
              <button
                key={annexure.code}
                onClick={() => handleAnnexureClick(annexure)}
                className={`w-full text-left px-3 py-3 rounded-lg transition-all ${
                  activeAnnexure?.code === annexure.code
                    ? 'bg-blue-100 border-2 border-blue-400 shadow-sm'
                    : 'hover:bg-slate-50 border-2 border-transparent'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        activeAnnexure?.code === annexure.code
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}>
                        {annexure.code}
                      </span>
                      <span className="text-xs text-slate-500">{annexure.category}</span>
                    </div>
                    <h4 className={`text-sm font-semibold leading-tight ${
                      activeAnnexure?.code === annexure.code
                        ? 'text-blue-900'
                        : 'text-slate-900'
                    }`}>
                      {annexure.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">{annexure.linkedSOP}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 ml-2 ${
                    activeAnnexure?.code === annexure.code
                      ? 'text-blue-600'
                      : 'text-slate-400'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-6 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
            <p className="text-xs font-semibold text-purple-900 mb-1">Implementation Progress</p>
            <p className="text-xs text-purple-700">49 complete, 0 in development</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Annexure Content View
  const AnnexureContent = ({ annexure }) => {
    // Load the appropriate form component based on annexure code
    if (annexure.code === 'A1') {
      return <ProfessionalA1Form />;
    }
    if (annexure.code === 'A2') {
      return <ProfessionalA2Form />;
    }
    if (annexure.code === 'A3') {
      return <ProfessionalA3Form />;
    }
    if (annexure.code === 'A4') {
      return <ProfessionalA4Form />;
    }
    if (annexure.code === 'B1') {
      return <ProfessionalB1Form />;
    }
    if (annexure.code === 'B2') {
      return <ProfessionalB2Form />;
    }
    if (annexure.code === 'B3') {
      return <ProfessionalB3Form />;
    }
    if (annexure.code === 'B4') {
      return <ProfessionalB4Form />;
    }
    if (annexure.code === 'B5') {
      return <ProfessionalB5Form />;
    }
    if (annexure.code === 'B6') {
      return <ProfessionalB6Form />;
    }
    if (annexure.code === 'B7') {
      return <ProfessionalB7Form />;
    }
    if (annexure.code === 'B8') {
      return <ProfessionalB8Form />;
    }
    if (annexure.code === 'B9') {
      return <ProfessionalB9Form />;
    }
    if (annexure.code === 'B10') {
      return <ProfessionalB10Form />;
    }
    if (annexure.code === 'C1') {
      return <ProfessionalC1Form />;
    }
    if (annexure.code === 'C2') {
      return <ProfessionalC2Form />;
    }
    if (annexure.code === 'C3') {
      return <ProfessionalC3Form />;
    }
    if (annexure.code === 'C4') {
      return <ProfessionalC4Form />;
    }
    if (annexure.code === 'C5') {
      return <ProfessionalC5Form />;
    }
    if (annexure.code === 'D1') {
      return <ProfessionalD1Form />;
    }
    if (annexure.code === 'D2') {
      return <ProfessionalD2Form />;
    }
    if (annexure.code === 'D3') {
      return <ProfessionalD3Form />;
    }
    if (annexure.code === 'D4') {
      return <ProfessionalD4Form />;
    }
    if (annexure.code === 'D5') {
      return <ProfessionalD5Form />;
    }
    if (annexure.code === 'E1') {
      return <ProfessionalE1Form />;
    }
    if (annexure.code === 'E2') {
      return <ProfessionalE2Form />;
    }
    if (annexure.code === 'E3') {
      return <ProfessionalE3Form />;
    }
    if (annexure.code === 'E4') {
      return <ProfessionalE4Form />;
    }
    if (annexure.code === 'E5') {
      return <ProfessionalE5Form />;
    }
    if (annexure.code === 'F1') {
      return <ProfessionalF1Form />;
    }
    if (annexure.code === 'F2') {
      return <ProfessionalF2Form />;
    }
    if (annexure.code === 'F3') {
      return <ProfessionalF3Form />;
    }
    if (annexure.code === 'F4') {
      return <ProfessionalF4Form />;
    }
    if (annexure.code === 'F5') {
      return <ProfessionalF5Form />;
    }
    if (annexure.code === 'G1') {
      return <ProfessionalG1Form />;
    }
    if (annexure.code === 'G2') {
      return <ProfessionalG2Form />;
    }
    if (annexure.code === 'G3') {
      return <ProfessionalG3Form />;
    }
    if (annexure.code === 'G4') {
      return <ProfessionalG4Form />;
    }
    if (annexure.code === 'G5') {
      return <ProfessionalG5Form />;
    }
    if (annexure.code === 'H1') {
      return <ProfessionalH1Form />;
    }
    if (annexure.code === 'H2') {
      return <ProfessionalH2Form />;
    }
    if (annexure.code === 'H3') {
      return <ProfessionalH3Form />;
    }
    if (annexure.code === 'H4') {
      return <ProfessionalH4Form />;
    }
    if (annexure.code === 'H5') {
      return <ProfessionalH5Form />;
    }
    if (annexure.code === 'H6') {
      return <ProfessionalH6Form />;
    }
    if (annexure.code === 'I1') {
      return <ProfessionalI1Form />;
    }
    if (annexure.code === 'I2') {
      return <ProfessionalI2Form />;
    }
    if (annexure.code === 'I3') {
      return <ProfessionalI3Form />;
    }
    if (annexure.code === 'I4') {
      return <ProfessionalI4Form />;
    }
    if (annexure.code === 'I6') {
      return <ProfessionalI6Form />;
    }
    if (annexure.code === 'J1') {
      return <ProfessionalJ1Form />;
    }
    if (annexure.code === 'J2') {
      return <ProfessionalJ2Form />;
    }
    if (annexure.code === 'J3') {
      return <ProfessionalJ3Form />;
    }
    if (annexure.code === 'J4') {
      return <ProfessionalJ4Form />;
    }
    if (annexure.code === 'J5') {
      return <ProfessionalJ5Form />;
    }
    if (annexure.code === 'J6') {
      return <ProfessionalJ6Form />;
    }
    if (annexure.code === 'K1') {
      return <ProfessionalK1Form />;
    }
    if (annexure.code === 'K2') {
      return <ProfessionalK2Form />;
    }
    if (annexure.code === 'K3') {
      return <ProfessionalK3Form />;
    }

    // Fallback for future forms
    return (
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 overflow-hidden">
          {/* Document Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg font-bold text-lg">
                    {annexure.code}
                  </span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded text-sm">
                    {annexure.category}
                  </span>
                </div>
                <h1 className="text-2xl font-bold mb-1">{annexure.title}</h1>
                <p className="text-blue-100 text-sm">{annexure.linkedSOP} • Professional HR Form</p>
              </div>
              <FileText className="w-16 h-16 opacity-20" />
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                Interactive Form Coming Soon
              </h3>
              <p className="text-sm text-slate-600">
                The detailed interactive form for {annexure.title} will be implemented in the next update.
                This form will include all fields from your HTML template with React state management,
                validation, save/load functionality, and PDF export.
              </p>
            </div>

            {/* Placeholder sections */}
            <div className="space-y-6">
              <section className="border-2 border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Document Control</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600 font-semibold">Document Title:</span>
                    <p className="text-slate-900">{annexure.title}</p>
                  </div>
                  <div>
                    <span className="text-slate-600 font-semibold">Annexure Number:</span>
                    <p className="text-slate-900">{annexure.code}</p>
                  </div>
                  <div>
                    <span className="text-slate-600 font-semibold">Linked SOP:</span>
                    <p className="text-slate-900">{annexure.linkedSOP}</p>
                  </div>
                  <div>
                    <span className="text-slate-600 font-semibold">Category:</span>
                    <p className="text-slate-900">{annexure.category}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Sidebar Toggle Button (when closed) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed left-4 top-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-80' : 'ml-0'}`}>
        {viewMode === 'annexure' && activeAnnexure ? (
          // Show selected annexure
          <div className="p-8">
            <button
              onClick={handleBackToDashboard}
              className="mb-4 flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              <ArrowRight className="w-5 h-5 mr-2 transform rotate-180" />
              Back to Dashboard
            </button>
            <AnnexureContent annexure={activeAnnexure} />
          </div>
        ) : (
          // Show original dashboard
          <>
            {/* Hero Section */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-90"></div>
              
              <div className="relative px-8 py-12">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-4xl font-bold text-white mb-2">Administrative Annexures</h1>
                      <p className="text-blue-100 text-lg">Interactive Forms & Templates</p>
                      <p className="text-white/90 mt-2">
                        Access fillable forms, professional templates, and scenario-based workflows
                      </p>
                    </div>
                    <div className="hidden lg:flex gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                        <p className="text-3xl font-bold text-white">15</p>
                        <p className="text-sm text-blue-100">Professional Forms</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                        <p className="text-3xl font-bold text-white">{Object.keys(formTemplates).length}</p>
                        <p className="text-sm text-blue-100">Interactive Templates</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Stats */}
            <div className="max-w-7xl mx-auto px-8 -mt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600 font-semibold">Pending Forms</p>
                      <p className="text-3xl font-bold text-orange-600 mt-1">{dashboardStats.pendingForms}</p>
                    </div>
                    <Clock className="w-10 h-10 text-orange-600" />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600 font-semibold">Submitted This Month</p>
                      <p className="text-3xl font-bold text-blue-600 mt-1">{dashboardStats.submittedThisMonth}</p>
                    </div>
                    <TrendingUp className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600 font-semibold">Approved Forms</p>
                      <p className="text-3xl font-bold text-green-600 mt-1">{dashboardStats.approvedForms}</p>
                    </div>
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600 font-semibold">Deadlines This Week</p>
                      <p className="text-3xl font-bold text-red-600 mt-1">{dashboardStats.deadlinesThisWeek}</p>
                    </div>
                    <AlertCircle className="w-10 h-10 text-red-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Rest of the original dashboard content... */}
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Grid3x3 className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-slate-900">Quick Access</h2>
                </div>
                <p className="text-slate-600 mb-4">
                  Use the sidebar (left) to access professional annexure forms, or explore interactive templates below.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Open Professional Forms
                  </button>
                  <button
                    onClick={() => setSelectedForm('leaveApplication')}
                    className="px-4 py-2 bg-white border-2 border-blue-300 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Try Interactive Templates
                  </button>
                </div>
              </div>
            </div>
            {/* Interactive Forms Section - Popular Templates */}
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center">
                  <Sparkles className="w-7 h-7 text-blue-600 mr-3" />
                  Interactive Form Templates
                </h2>
                <p className="text-slate-600">
                  Quick access to fillable forms for common HR scenarios
                </p>
              </div>

              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search forms by name, category, or purpose..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none text-slate-900"
                  />
                </div>
              </div>

              {/* Popular Forms Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {popularForms.map((form) => {
                  const formTemplate = getFormByKey(form.key);
                  if (!formTemplate) return null;

                  return (
                    <div 
                      key={form.key}
                      className="bg-white rounded-xl shadow-lg border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedForm(form.key)}
                    >
                      {/* Card Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-semibold text-white">
                              {formTemplate.code}
                            </span>
                            <h3 className="text-white font-bold text-lg mt-2 group-hover:text-yellow-200 transition-colors">
                              {formTemplate.title}
                            </h3>
                            <p className="text-blue-100 text-sm mt-1">{formTemplate.category}</p>
                          </div>
                          <FileText className="w-10 h-10 text-white/30" />
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5">
                        {/* Stats */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center text-sm text-slate-600">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{form.uses} uses</span>
                          </div>
                          <div className="flex items-center text-sm text-green-600 font-semibold">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            <span>{form.trend}</span>
                          </div>
                        </div>

                        {/* Sections Info */}
                        <div className="mb-4">
                          <p className="text-xs text-slate-500 mb-2">{formTemplate.sections.length} Sections</p>
                          <div className="flex flex-wrap gap-2">
                            {formTemplate.sections.slice(0, 3).map((section, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg">
                                {section.title}
                              </span>
                            ))}
                            {formTemplate.sections.length > 3 && (
                              <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg">
                                +{formTemplate.sections.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Action Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedForm(form.key);
                          }}
                          className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                        >
                          <span>Fill Form</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* All Forms Section */}
              <div className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-slate-900">Additional Interactive Forms</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  More interactive templates coming soon including: Performance Appraisal, Salary Certificate, Overtime Authorization, Training Request, Exit Interview, Grievance Form, and more.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    'Performance Appraisal',
                    'Salary Certificate',
                    'Overtime Request',
                    'Training Request',
                    'Exit Interview',
                    'Grievance Form',
                    'Transfer Request',
                    'Promotion Request'
                  ].map((formName, idx) => (
                    <div key={idx} className="bg-white/60 border border-purple-200 rounded-lg p-3 text-center">
                      <p className="text-sm font-semibold text-slate-700">{formName}</p>
                      <p className="text-xs text-purple-600 mt-1">Coming Soon</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Interactive Form Viewer Modal */}
        {selectedForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Interactive Form</h2>
                <button
                  onClick={() => setSelectedForm(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                <InteractiveFormViewer 
                  formKey={selectedForm}
                  onClose={() => setSelectedForm(null)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HRAnnexures;
