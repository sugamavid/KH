import React, { useState } from 'react';
import { 
  FileText, Search, ArrowRight, TrendingUp, Clock, CheckCircle, 
  Users, Calendar, Award, AlertCircle, Download, Sparkles, Zap,
  Menu, X, ChevronRight, Home, Grid3x3
} from 'lucide-react';
import InteractiveFormViewer from './InteractiveFormViewer';
import formTemplates, { formScenarios } from '../../data/formTemplates';
import ProfessionalA1Form from './forms/ProfessionalA1Form';

const HRAnnexures = ({ setActiveModule }) => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeAnnexure, setActiveAnnexure] = useState(null);
  const [viewMode, setViewMode] = useState('dashboard'); // 'dashboard' or 'annexure'

  // Professional Annexures List (Batch 1)
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
          <p className="text-xs text-slate-600">Batch 1: 5 Forms Available</p>
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
            <p className="text-xs font-semibold text-purple-900 mb-1">More Annexures Coming</p>
            <p className="text-xs text-purple-700">Batches 2-17 will be added progressively</p>
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

    // For other forms (A2, A3, A4, B1) show coming soon
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
                        <p className="text-3xl font-bold text-white">{professionalAnnexures.length}</p>
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
          </>
        )}
      </div>
    </div>
  );
};

export default HRAnnexures;
