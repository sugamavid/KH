import React, { useState, useMemo } from 'react';
import { 
  Search, Download, Filter, FileText, ChevronRight, Scale, Home,
  Printer, X, Check, AlertCircle, Calendar, Users, Award, Book,
  ArrowLeft, Eye, ExternalLink, Folder, CheckCircle, Clock, TrendingUp, Menu
} from 'lucide-react';
import { annexuresData, annexCategories } from './annexuresData';

const HRAnnexuresNew = ({ setActiveModule }) => {
  const [activeView, setActiveView] = useState('dashboard'); // dashboard, category, form
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Get all annexures as flat array
  const allAnnexures = useMemo(() => {
    const annexes = [];
    Object.entries(annexuresData).forEach(([key, annex]) => {
      if (annex.forms) {
        annex.forms.forEach(form => {
          annexes.push({
            ...form,
            annexNumber: annex.number,
            annexTitle: annex.title,
            category: annex.category
          });
        });
      }
    });
    return annexes;
  }, []);

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const results = [];
    const lowerQuery = searchQuery.toLowerCase();
    
    allAnnexures.forEach(form => {
      if (
        form.name.toLowerCase().includes(lowerQuery) ||
        form.code.toLowerCase().includes(lowerQuery) ||
        form.description.toLowerCase().includes(lowerQuery) ||
        form.category.toLowerCase().includes(lowerQuery)
      ) {
        results.push(form);
      }
    });
    
    return results;
  }, [searchQuery, allAnnexures]);

  // Filter by category
  const filteredForms = useMemo(() => {
    if (filterCategory === 'All') return allAnnexures;
    return allAnnexures.filter(form => form.category === filterCategory);
  }, [filterCategory, allAnnexures]);

  const categories = ['All', ...new Set(allAnnexures.map(f => f.category))];

  const iconMap = {
    'Recruitment & Onboarding': Users,
    'Leave Management': Calendar,
    'Time Management': Clock,
    'Performance Management': TrendingUp,
    'Compensation': Award,
    'Learning': Book,
    'Employee Relations': Users,
    'Separation': FileText,
    'Administration': Folder,
    'Compliance': CheckCircle
  };

  const colorMap = {
    'Recruitment & Onboarding': 'blue',
    'Leave Management': 'green',
    'Time Management': 'orange',
    'Performance Management': 'purple',
    'Compensation': 'amber',
    'Learning': 'indigo',
    'Employee Relations': 'teal',
    'Separation': 'red',
    'Administration': 'gray',
    'Compliance': 'emerald'
  };

  const handleDownloadPDF = (form) => {
    // Simple client-side PDF generation placeholder
    // In production, this would call a backend API to generate proper PDFs
    const fileName = `${form.code}_${form.name.replace(/\s+/g, '_')}.pdf`;
    
    // Create a simple text content for demonstration
    let content = `KOYILI HOSPITAL\nHuman Resources Department\n\n`;
    content += `Form Code: ${form.code}\n`;
    content += `Form Name: ${form.name}\n`;
    content += `Category: ${form.category}\n\n`;
    content += `Description: ${form.description}\n\n`;
    
    if (form.sections) {
      content += `FORM STRUCTURE:\n\n`;
      form.sections.forEach((section, idx) => {
        content += `${idx + 1}. ${section.title}\n`;
        section.fields.forEach(field => {
          content += `   - ${field}\n`;
        });
        content += `\n`;
      });
    }
    
    if (form.instructions) {
      content += `\nINSTRUCTIONS:\n${form.instructions}\n`;
    }
    
    // Create a blob and download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show notification (optional)
    alert(`Downloading ${form.name}...\n\nNote: This is a demo text file. In production, this would be a properly formatted PDF with fillable fields.`);
  };

  const handlePrintForm = (form) => {
    alert('Print functionality would open the form in a print-friendly format.\n\nIn production, this would generate a printable PDF version.');
  };

  const handleFillOnline = (form) => {
    alert('Fill Online functionality would open an interactive form.\n\nIn production, this would redirect to an online form builder or fillable PDF interface.');
  };

  const handleFormClick = (form) => {
    setSelectedForm(form);
    setActiveView('form');
  };

  const handleCategoryClick = (categoryData) => {
    // Find the annexure data that matches this category
    const annexure = Object.values(annexuresData).find(annex => annex.category === categoryData.name);
    if (annexure) {
      setSelectedCategory(annexure);
      setFilterCategory(categoryData.name);
      setActiveView('category');
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Board Approval Banner */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 border-2 border-purple-400 rounded-2xl p-8 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full opacity-10 -mr-32 -mt-32"></div>
        <div className="relative flex items-start space-x-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center flex-shrink-0 shadow-lg">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-2xl font-bold text-purple-900">Official Administrative Annexures</h3>
              <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full shadow-sm">
                APPROVED
              </span>
            </div>
            <p className="text-base text-purple-900 mb-3 leading-relaxed">
              Standardized forms, templates, and documents for HR operations at Koyili Hospital. 
              All forms comply with legal requirements and organizational policies. Available in 
              digital and printable PDF formats for immediate download.
            </p>
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-purple-300">
              <div>
                <p className="text-xs text-purple-700 font-semibold">Total Forms</p>
                <p className="text-sm font-bold text-purple-900">{allAnnexures.length} Documents</p>
              </div>
              <div>
                <p className="text-xs text-purple-700 font-semibold">Categories</p>
                <p className="text-sm font-bold text-purple-900">{annexCategories.length} Groups</p>
              </div>
              <div>
                <p className="text-xs text-purple-700 font-semibold">Format</p>
                <p className="text-sm font-bold text-purple-900">PDF & Digital</p>
              </div>
              <div>
                <p className="text-xs text-purple-700 font-semibold">Access</p>
                <p className="text-sm font-bold text-purple-900">Instant Download</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Header */}
      <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 rounded-2xl p-10 text-white shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-700 rounded-full opacity-10 -mr-48 -mt-48"></div>
        <div className="relative">
          <div className="flex items-center space-x-4 mb-4">
            <FileText className="w-12 h-12 text-purple-300" />
            <div>
              <h1 className="text-4xl font-bold">Administrative Annexures</h1>
              <p className="text-purple-200 mt-1">Comprehensive Forms & Document Library</p>
            </div>
          </div>
          <p className="text-purple-100 text-lg max-w-3xl">
            Access all HR forms, templates, and administrative documents. Streamlined processes 
            for recruitment, leave management, performance tracking, and more.
          </p>
          <div className="flex space-x-3 mt-6">
            <button className="px-6 py-3 bg-white text-purple-900 rounded-xl hover:bg-purple-50 transition-all font-bold flex items-center shadow-lg">
              <Download className="w-5 h-5 mr-2" />
              Download All Forms
            </button>
            <button className="px-6 py-3 bg-purple-700 text-white rounded-xl hover:bg-purple-600 transition-all font-bold flex items-center">
              <Printer className="w-5 h-5 mr-2" />
              Print Catalog
            </button>
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Form Categories</h2>
            <p className="text-slate-600 text-sm mt-1">Browse forms by category</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(annexuresData).filter(([key]) => key !== 'preamble').map(([key, annex]) => {
            const IconComponent = iconMap[annex.category] || FileText;
            const color = colorMap[annex.category] || 'purple';
            
            return (
              <div 
                key={key}
                onClick={() => handleCategoryClick(annex)}
                className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-purple-400 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-${color}-100 flex items-center justify-center mb-4 shadow-md`}>
                  <IconComponent className={`w-7 h-7 text-${color}-600`} />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{annex.title}</h3>
                    <p className="text-sm text-slate-600">{annex.category}</p>
                  </div>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">
                    {annex.forms.length} Forms
                  </span>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center text-purple-600 font-semibold text-sm">
                    View Forms
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Access - Recently Used Forms */}
      <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Access Forms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allAnnexures.slice(0, 8).map((form, idx) => (
            <button
              key={idx}
              onClick={() => handleFormClick(form)}
              className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl hover:bg-purple-50 hover:border-purple-400 border-2 border-slate-200 transition-all text-left"
            >
              <FileText className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">{form.name}</p>
                <p className="text-xs text-slate-600">{form.code}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <Users className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-3xl font-bold mb-1">{allAnnexures.filter(f => f.category === 'Recruitment & Onboarding').length}</p>
          <p className="text-blue-100 text-sm">Recruitment Forms</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
          <Calendar className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-3xl font-bold mb-1">{allAnnexures.filter(f => f.category === 'Leave Management').length}</p>
          <p className="text-green-100 text-sm">Leave Forms</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <TrendingUp className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-3xl font-bold mb-1">{allAnnexures.filter(f => f.category === 'Performance Management').length}</p>
          <p className="text-purple-100 text-sm">Performance Forms</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
          <CheckCircle className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-3xl font-bold mb-1">{allAnnexures.filter(f => f.category === 'Compliance').length}</p>
          <p className="text-emerald-100 text-sm">Compliance Forms</p>
        </div>
      </div>
    </div>
  );

  const renderCategoryView = () => {
    const formsInCategory = allAnnexures.filter(f => f.category === selectedCategory?.category);
    const color = colorMap[selectedCategory?.category] || 'purple';
    const IconComponent = iconMap[selectedCategory?.category] || FileText;

    return (
      <div className="space-y-6">
        {/* Category Header */}
        <div className={`relative bg-gradient-to-br from-${color}-900 via-${color}-800 to-${color}-900 rounded-2xl p-8 text-white shadow-2xl overflow-hidden`}>
          <div className={`absolute top-0 right-0 w-96 h-96 bg-${color}-700 rounded-full opacity-10 -mr-48 -mt-48`}></div>
          <div className="relative flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-white bg-opacity-20 flex items-center justify-center">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <p className={`text-${color}-200 text-sm font-semibold uppercase tracking-wider`}>{selectedCategory?.number}</p>
                <h1 className="text-3xl font-bold mt-1">{selectedCategory?.title}</h1>
                <p className={`text-${color}-200 mt-2`}>{formsInCategory.length} Forms Available</p>
              </div>
            </div>
            <button
              onClick={() => setActiveView('dashboard')}
              className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </button>
          </div>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formsInCategory.map((form, idx) => (
            <div
              key={idx}
              onClick={() => handleFormClick(form)}
              className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-purple-400 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg text-xs font-bold">
                  {form.code}
                </span>
                <FileText className="w-6 h-6 text-slate-400" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{form.name}</h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">{form.description}</p>
              <div className="flex space-x-2 pt-4 border-t border-slate-200">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold flex items-center justify-center">
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </button>
                <button className="bg-slate-200 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-300 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderFormView = () => {
    if (!selectedForm) return null;

    return (
      <div className="space-y-6">
        {/* Form Header */}
        <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-xl bg-white bg-opacity-20 flex items-center justify-center">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <span className="px-3 py-1 bg-purple-700 rounded-lg text-xs font-bold">
                    {selectedForm.code}
                  </span>
                  <span className="px-3 py-1 bg-white bg-opacity-20 rounded-lg text-xs font-bold">
                    {selectedForm.category}
                  </span>
                </div>
                <h1 className="text-3xl font-bold">{selectedForm.name}</h1>
              </div>
            </div>
            <button
              onClick={() => setActiveView(selectedCategory ? 'category' : 'dashboard')}
              className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
          </div>
          <p className="text-purple-100 mb-6">{selectedForm.description}</p>
          <div className="flex space-x-3">
            <button 
              onClick={() => handleDownloadPDF(selectedForm)}
              className="px-6 py-3 bg-white text-purple-900 rounded-xl hover:bg-purple-50 transition-all font-bold flex items-center shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </button>
            <button 
              onClick={() => handlePrintForm(selectedForm)}
              className="px-6 py-3 bg-purple-700 text-white rounded-xl hover:bg-purple-600 transition-all font-bold flex items-center"
            >
              <Printer className="w-5 h-5 mr-2" />
              Print Form
            </button>
            <button 
              onClick={() => handleFillOnline(selectedForm)}
              className="px-6 py-3 bg-purple-700 text-white rounded-xl hover:bg-purple-600 transition-all font-bold flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Fill Online
            </button>
          </div>
        </div>

        {/* Form Content - Detailed Sections */}
        {selectedForm.sections && selectedForm.sections.length > 0 && (
          <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-slate-200">
              <FileText className="w-8 h-8 text-purple-600" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Form Structure & Fields</h2>
                <p className="text-sm text-slate-600 mt-1">Complete form template with all required sections</p>
              </div>
            </div>

            <div className="space-y-6">
              {selectedForm.sections.map((section, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold mr-3">
                      {idx + 1}
                    </span>
                    {section.title}
                  </h3>
                  <div className="space-y-3 ml-11">
                    {section.fields.map((field, fieldIdx) => (
                      <div key={fieldIdx} className="flex items-start space-x-3 text-sm">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-700 leading-relaxed">{field}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Form Details */}
        <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Form Details & Requirements</h3>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm text-slate-600 mb-1">Form Code</p>
              <p className="font-semibold text-slate-900">{selectedForm.code}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Category</p>
              <p className="font-semibold text-slate-900">{selectedForm.category}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Annexure Reference</p>
              <p className="font-semibold text-slate-900">{selectedForm.annexNumber}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Format</p>
              <p className="font-semibold text-slate-900">PDF, Digital</p>
            </div>
            {selectedForm.approvalRequired && (
              <div>
                <p className="text-sm text-slate-600 mb-1">Approval Required</p>
                <p className="font-semibold text-slate-900">{selectedForm.approvalRequired}</p>
              </div>
            )}
            {selectedForm.processingTime && (
              <div>
                <p className="text-sm text-slate-600 mb-1">Processing Time</p>
                <p className="font-semibold text-slate-900">{selectedForm.processingTime}</p>
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        {selectedForm.instructions && (
          <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-900 mb-3">Instructions for Use</h4>
                <p className="text-sm text-blue-800 mb-3">{selectedForm.instructions}</p>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Complete all mandatory fields marked with asterisk (*)</li>
                  <li>• Ensure all information is accurate and up-to-date</li>
                  <li>• Attach supporting documents where required</li>
                  <li>• Obtain necessary approvals before submission</li>
                  <li>• Submit to HR Department within specified timeline</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-72'} bg-white border-r-2 border-slate-300 flex flex-col transition-all duration-300 shadow-xl`}>
        {/* Back Button */}
        {setActiveModule && !sidebarCollapsed && (
          <div className="p-3 border-b border-slate-200 bg-slate-50">
            <button
              onClick={() => setActiveModule('dashboard')}
              className="w-full flex items-center space-x-2 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to HR Dashboard</span>
            </button>
          </div>
        )}

        {/* Sidebar Header */}
        <div className="p-4 border-b-2 border-slate-200 bg-gradient-to-r from-purple-800 to-indigo-900">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white bg-opacity-20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Annexures</h2>
                  <p className="text-xs text-purple-200">{allAnnexures.length} Forms</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {!sidebarCollapsed ? (
            <div className="space-y-1 px-2">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                  activeView === 'dashboard'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="text-sm font-medium">Dashboard</span>
              </button>
              
              <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider mt-4">
                Categories
              </div>
              
              {Object.entries(annexuresData).filter(([key]) => key !== 'preamble').map(([key, annex]) => {
                const IconComponent = iconMap[annex.category] || FileText;
                return (
                  <button
                    key={key}
                    onClick={() => handleCategoryClick(annex)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                      selectedCategory?.id === annex.id
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium truncate">{annex.title}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-2 px-2">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`w-full p-3 rounded-lg transition-all ${
                  activeView === 'dashboard' ? 'bg-purple-600 text-white' : 'text-slate-700 hover:bg-slate-100'
                }`}
                title="Dashboard"
              >
                <Home className="w-5 h-5 mx-auto" />
              </button>
              {Object.entries(annexuresData).filter(([key]) => key !== 'preamble').map(([key, annex]) => {
                const IconComponent = iconMap[annex.category] || FileText;
                return (
                  <button
                    key={key}
                    onClick={() => handleCategoryClick(annex)}
                    className={`w-full p-3 rounded-lg transition-all ${
                      selectedCategory?.id === annex.id ? 'bg-purple-600 text-white' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                    title={annex.title}
                  >
                    <IconComponent className="w-5 h-5 mx-auto" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="bg-white border-b-2 border-slate-300 px-6 py-4 shadow-lg z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">Koyili Hospital • Administrative Annexures</h1>
              <p className="text-sm text-slate-600 mt-0.5">HR Forms & Document Library</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search forms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery && setShowSearch(true)}
                className="pl-12 pr-10 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-80 text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setShowSearch(false);
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Search Results */}
          {showSearch && searchResults.length > 0 && (
            <div className="absolute top-16 right-6 w-96 bg-white border-2 border-slate-300 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50 mt-2">
              <div className="p-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">
                  {searchResults.length} Results Found
                </span>
                <button onClick={() => setShowSearch(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {searchResults.map((result, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      handleFormClick(result);
                      setShowSearch(false);
                    }}
                    className="w-full p-4 text-left hover:bg-purple-50 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <FileText className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-900">{result.name}</p>
                        <p className="text-xs text-slate-600 mt-0.5">{result.code} • {result.category}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto">
            {activeView === 'dashboard' && renderDashboard()}
            {activeView === 'category' && renderCategoryView()}
            {activeView === 'form' && renderFormView()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRAnnexuresNew;
