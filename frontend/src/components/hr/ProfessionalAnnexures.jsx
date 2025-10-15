import React, { useState } from 'react';
import {
  FileText,
  Download,
  Save,
  Upload,
  Printer,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Search,
  Filter,
  Grid3x3,
  List
} from 'lucide-react';

const ProfessionalAnnexures = () => {
  const [selectedAnnexure, setSelectedAnnexure] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  // First batch of 5 annexures
  const annexures = [
    {
      id: 'A1',
      code: 'A1',
      title: 'HR Policy Revision Request Format',
      category: 'HR Policy',
      linkedSOP: 'SOP A.1 – HR Policy Framework',
      byLawsRef: 'Section 4.2 – HR Governance & Compliance',
      description: 'Uniform mechanism for proposing, reviewing, and approving revisions to HR policies',
      color: 'blue',
      icon: FileText
    },
    {
      id: 'A2',
      code: 'A2',
      title: 'Finalized Organizational Structure Template',
      category: 'HR Policy',
      linkedSOP: 'SOP A.1 – HR Policy Framework',
      byLawsRef: 'Section 2 – Organization Structure',
      description: 'Visual representation of hospital organizational hierarchy and reporting lines',
      color: 'green',
      icon: Grid3x3
    },
    {
      id: 'A3',
      code: 'A3',
      title: 'Standard Job Description Template',
      category: 'Recruitment',
      linkedSOP: 'SOP B.1 – Recruitment & Selection',
      byLawsRef: 'Section 5 – Employment Terms',
      description: 'Standardized template for creating comprehensive job descriptions',
      color: 'purple',
      icon: FileText
    },
    {
      id: 'A4',
      code: 'A4',
      title: 'Employee Handbook Acknowledgment Form',
      category: 'Onboarding',
      linkedSOP: 'SOP B.2 – Onboarding Process',
      byLawsRef: 'Section 3 – Code of Conduct',
      description: 'Formal acknowledgment of receipt and understanding of employee handbook',
      color: 'orange',
      icon: CheckCircle
    },
    {
      id: 'B1',
      code: 'B1',
      title: 'Manpower Requisition Form',
      category: 'Recruitment',
      linkedSOP: 'SOP B.1 – Recruitment & Selection',
      byLawsRef: 'Section 5.1 – Recruitment Policy',
      description: 'Request form for new employee requisition with justification and approval workflow',
      color: 'teal',
      icon: FileText
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        gradient: 'from-blue-500 to-indigo-600',
        hover: 'hover:border-blue-400'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        gradient: 'from-green-500 to-emerald-600',
        hover: 'hover:border-green-400'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-700',
        gradient: 'from-purple-500 to-violet-600',
        hover: 'hover:border-purple-400'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-700',
        gradient: 'from-orange-500 to-amber-600',
        hover: 'hover:border-orange-400'
      },
      teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        text: 'text-teal-700',
        gradient: 'from-teal-500 to-cyan-600',
        hover: 'hover:border-teal-400'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  if (selectedAnnexure) {
    // Show the selected annexure form
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Will implement form component */}
        <div className="bg-white border-b-2 border-slate-200 p-4">
          <button
            onClick={() => setSelectedAnnexure(null)}
            className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Annexures
          </button>
        </div>
        <div className="max-w-7xl mx-auto p-6">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              {annexures.find(a => a.id === selectedAnnexure)?.title}
            </h2>
            <p className="text-slate-600 mt-2">Form content will be loaded here...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Administrative Annexures</h1>
              <p className="text-blue-100 text-lg">Professional HR Forms & Templates</p>
              <p className="text-white/90 mt-2">
                Interactive, fillable forms linked to By-Laws and SOPs
              </p>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <p className="text-3xl font-bold">{annexures.length}</p>
                <p className="text-sm text-blue-100">Forms Available</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <FileText className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm text-blue-100">Batch 1 of 17</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Toolbar */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6 border-2 border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search annexures..."
                  className="pl-10 pr-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="px-4 py-2 border-2 border-slate-200 rounded-lg hover:border-blue-400 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Annexures Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {annexures.map((annexure) => {
              const colors = getColorClasses(annexure.color);
              const Icon = annexure.icon;
              return (
                <button
                  key={annexure.id}
                  onClick={() => setSelectedAnnexure(annexure.id)}
                  className={`${colors.bg} rounded-2xl p-6 border-2 ${colors.border} ${colors.hover} hover:shadow-xl transition-all text-left group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full bg-white ${colors.text} font-bold text-sm`}>
                      {annexure.code}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{annexure.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start text-xs">
                      <span className="text-slate-500 font-semibold mr-2">Category:</span>
                      <span className={`${colors.text} font-semibold`}>{annexure.category}</span>
                    </div>
                    <div className="flex items-start text-xs">
                      <span className="text-slate-500 font-semibold mr-2">SOP:</span>
                      <span className="text-slate-700">{annexure.linkedSOP}</span>
                    </div>
                    <div className="flex items-start text-xs">
                      <span className="text-slate-500 font-semibold mr-2">By-Laws:</span>
                      <span className="text-slate-700">{annexure.byLawsRef}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-600 mb-4">{annexure.description}</p>
                  
                  <div className="flex items-center text-sm font-semibold text-blue-600">
                    Open Form
                    <FileText className="w-4 h-4 ml-2" />
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {annexures.map((annexure) => {
              const colors = getColorClasses(annexure.color);
              const Icon = annexure.icon;
              return (
                <button
                  key={annexure.id}
                  onClick={() => setSelectedAnnexure(annexure.id)}
                  className={`w-full ${colors.bg} rounded-xl p-6 border-2 ${colors.border} ${colors.hover} hover:shadow-lg transition-all text-left group flex items-center gap-6`}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full bg-white ${colors.text} font-bold text-sm`}>
                        {annexure.code}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">{annexure.title}</h3>
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-2">{annexure.description}</p>
                    
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center">
                        <span className="text-slate-500 font-semibold mr-2">Category:</span>
                        <span className={`${colors.text} font-semibold`}>{annexure.category}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-slate-500 font-semibold mr-2">SOP:</span>
                        <span className="text-slate-700">{annexure.linkedSOP}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-blue-600 font-semibold flex-shrink-0">
                    Open →
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">About Administrative Annexures</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                <FileText className="w-5 h-5 text-blue-600 mr-2" />
                Interactive Forms
              </h4>
              <p className="text-sm text-slate-600">
                Fillable, saveable forms with validation and professional layouts
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                Compliance Ready
              </h4>
              <p className="text-sm text-slate-600">
                Linked to By-Laws and SOPs for complete compliance traceability
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                <Download className="w-5 h-5 text-purple-600 mr-2" />
                Export & Print
              </h4>
              <p className="text-sm text-slate-600">
                Save as JSON, export to PDF, or print for physical records
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalAnnexures;
