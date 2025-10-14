import React, { useState } from 'react';
import { 
  X, FileText, Download, Printer, Eye, Edit, Copy, Trash2,
  Search, Filter, Plus, Clock, CheckCircle, AlertCircle,
  File, Folder, Star, TrendingUp, Calendar, Users, Settings,
  ChevronRight, ChevronDown, Upload, Save, Send, Mail,
  Briefcase, Award, Shield, BookOpen, Target, Zap
} from 'lucide-react';

const DocumentGenerator = ({ onClose, onNavigateToSection }) => {
  const [activeView, setActiveView] = useState('templates'); // templates, generator, history, favorites
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [generatorStep, setGeneratorStep] = useState(1); // 1: select template, 2: fill form, 3: preview
  const [formData, setFormData] = useState({});
  const [expandedCategory, setExpandedCategory] = useState(null);

  // Comprehensive document templates
  const documentTemplates = [
    // Employment Documents
    { id: 'DOC-001', title: 'Offer Letter', category: 'Employment', type: 'letter', usage: 245, rating: 4.9, format: ['PDF', 'DOCX'], fields: 12, byLawsSection: 'section2', description: 'Official job offer letter for new employees', lastUsed: '2024-10-12', popular: true },
    { id: 'DOC-002', title: 'Employment Contract', category: 'Employment', type: 'contract', usage: 198, rating: 4.8, format: ['PDF', 'DOCX'], fields: 25, byLawsSection: 'section2', description: 'Comprehensive employment agreement', lastUsed: '2024-10-10', popular: true },
    { id: 'DOC-003', title: 'Appointment Letter', category: 'Employment', type: 'letter', usage: 156, rating: 4.7, format: ['PDF'], fields: 10, byLawsSection: 'section3', description: 'Formal appointment confirmation', lastUsed: '2024-10-08' },
    { id: 'DOC-004', title: 'Probation Confirmation Letter', category: 'Employment', type: 'letter', usage: 134, rating: 4.8, format: ['PDF', 'DOCX'], fields: 8, byLawsSection: 'section4', description: 'Confirmation of successful probation completion', lastUsed: '2024-10-05' },
    { id: 'DOC-005', title: 'Promotion Letter', category: 'Employment', type: 'letter', usage: 89, rating: 4.9, format: ['PDF', 'DOCX'], fields: 10, byLawsSection: 'section8', description: 'Employee promotion announcement', lastUsed: '2024-10-01' },
    { id: 'DOC-006', title: 'Termination Letter', category: 'Employment', type: 'letter', usage: 67, rating: 4.6, format: ['PDF', 'DOCX'], fields: 15, byLawsSection: 'section17', description: 'Employment termination notice', lastUsed: '2024-09-28' },
    { id: 'DOC-007', title: 'Resignation Acceptance', category: 'Employment', type: 'letter', usage: 78, rating: 4.7, format: ['PDF'], fields: 8, byLawsSection: 'section17', description: 'Acknowledgment of employee resignation', lastUsed: '2024-09-25' },
    
    // Leave & Attendance
    { id: 'DOC-008', title: 'Leave Application Form', category: 'Leave & Attendance', type: 'form', usage: 523, rating: 4.9, format: ['PDF', 'DOCX'], fields: 10, byLawsSection: 'section7', description: 'Standard leave request form', lastUsed: '2024-10-13', popular: true },
    { id: 'DOC-009', title: 'Leave Approval Letter', category: 'Leave & Attendance', type: 'letter', usage: 412, rating: 4.8, format: ['PDF'], fields: 7, byLawsSection: 'section7', description: 'Leave approval notification', lastUsed: '2024-10-12', popular: true },
    { id: 'DOC-010', title: 'Attendance Regularization Form', category: 'Leave & Attendance', type: 'form', usage: 234, rating: 4.6, format: ['PDF', 'DOCX'], fields: 9, byLawsSection: 'section7', description: 'Request for attendance correction', lastUsed: '2024-10-11' },
    { id: 'DOC-011', title: 'Remote Work Request', category: 'Leave & Attendance', type: 'form', usage: 189, rating: 4.7, format: ['PDF', 'DOCX'], fields: 11, byLawsSection: 'section10', description: 'Work from home authorization form', lastUsed: '2024-10-09' },
    
    // Performance Management
    { id: 'DOC-012', title: 'Performance Appraisal Form', category: 'Performance', type: 'form', usage: 267, rating: 4.8, format: ['PDF', 'DOCX', 'XLSX'], fields: 20, byLawsSection: 'section8', description: 'Annual performance evaluation', lastUsed: '2024-10-10', popular: true },
    { id: 'DOC-013', title: 'Goal Setting Template', category: 'Performance', type: 'form', usage: 178, rating: 4.7, format: ['PDF', 'DOCX'], fields: 12, byLawsSection: 'section8', description: 'Employee objective setting', lastUsed: '2024-10-07' },
    { id: 'DOC-014', title: 'Performance Improvement Plan', category: 'Performance', type: 'form', usage: 95, rating: 4.5, format: ['PDF', 'DOCX'], fields: 18, byLawsSection: 'section8', description: 'PIP documentation', lastUsed: '2024-10-03' },
    
    // Compliance & Policy
    { id: 'DOC-015', title: 'Code of Conduct Acknowledgment', category: 'Compliance', type: 'form', usage: 345, rating: 4.9, format: ['PDF'], fields: 6, byLawsSection: 'section6', description: 'Employee policy acceptance form', lastUsed: '2024-10-12', popular: true },
    { id: 'DOC-016', title: 'Confidentiality Agreement', category: 'Compliance', type: 'agreement', usage: 289, rating: 4.8, format: ['PDF', 'DOCX'], fields: 10, byLawsSection: 'section14', description: 'Non-disclosure agreement', lastUsed: '2024-10-11', popular: true },
    { id: 'DOC-017', title: 'Conflict of Interest Declaration', category: 'Compliance', type: 'form', usage: 156, rating: 4.7, format: ['PDF'], fields: 8, byLawsSection: 'section18', description: 'COI disclosure form', lastUsed: '2024-10-08' },
    { id: 'DOC-018', title: 'Data Privacy Consent', category: 'Compliance', type: 'form', usage: 312, rating: 4.9, format: ['PDF'], fields: 7, byLawsSection: 'section14', description: 'HIPAA compliance form', lastUsed: '2024-10-13' },
    
    // Training & Development
    { id: 'DOC-019', title: 'Training Enrollment Form', category: 'Training', type: 'form', usage: 201, rating: 4.7, format: ['PDF', 'DOCX'], fields: 9, byLawsSection: 'section9', description: 'Training program registration', lastUsed: '2024-10-09' },
    { id: 'DOC-020', title: 'Training Completion Certificate', category: 'Training', type: 'certificate', usage: 234, rating: 4.9, format: ['PDF'], fields: 8, byLawsSection: 'section9', description: 'Course completion certificate', lastUsed: '2024-10-10', popular: true },
    { id: 'DOC-021', title: 'Training Feedback Form', category: 'Training', type: 'form', usage: 167, rating: 4.6, format: ['PDF', 'DOCX'], fields: 12, byLawsSection: 'section9', description: 'Training evaluation survey', lastUsed: '2024-10-08' },
    
    // Disciplinary & Grievance
    { id: 'DOC-022', title: 'Grievance Form', category: 'Disciplinary', type: 'form', usage: 145, rating: 4.8, format: ['PDF', 'DOCX'], fields: 15, byLawsSection: 'section12', description: 'Employee complaint submission', lastUsed: '2024-10-07' },
    { id: 'DOC-023', title: 'Warning Letter - Verbal', category: 'Disciplinary', type: 'letter', usage: 98, rating: 4.5, format: ['PDF'], fields: 11, byLawsSection: 'section16', description: 'First warning documentation', lastUsed: '2024-10-05' },
    { id: 'DOC-024', title: 'Warning Letter - Written', category: 'Disciplinary', type: 'letter', usage: 87, rating: 4.6, format: ['PDF', 'DOCX'], fields: 13, byLawsSection: 'section16', description: 'Formal written warning', lastUsed: '2024-10-02' },
    { id: 'DOC-025', title: 'Show Cause Notice', category: 'Disciplinary', type: 'letter', usage: 76, rating: 4.5, format: ['PDF'], fields: 12, byLawsSection: 'section16', description: 'Explanation request notice', lastUsed: '2024-09-30' },
    
    // Compensation & Benefits
    { id: 'DOC-026', title: 'Salary Certificate', category: 'Compensation', type: 'certificate', usage: 398, rating: 4.9, format: ['PDF'], fields: 8, byLawsSection: 'section11', description: 'Income proof certificate', lastUsed: '2024-10-13', popular: true },
    { id: 'DOC-027', title: 'Salary Increment Letter', category: 'Compensation', type: 'letter', usage: 156, rating: 4.8, format: ['PDF', 'DOCX'], fields: 9, byLawsSection: 'section11', description: 'Pay raise notification', lastUsed: '2024-10-08' },
    { id: 'DOC-028', title: 'Bonus Letter', category: 'Compensation', type: 'letter', usage: 134, rating: 4.9, format: ['PDF'], fields: 7, byLawsSection: 'section11', description: 'Performance bonus announcement', lastUsed: '2024-10-06' },
    
    // General HR
    { id: 'DOC-029', title: 'Experience Certificate', category: 'General', type: 'certificate', usage: 267, rating: 4.9, format: ['PDF'], fields: 10, byLawsSection: 'section17', description: 'Service record certificate', lastUsed: '2024-10-11', popular: true },
    { id: 'DOC-030', title: 'Transfer Letter', category: 'General', type: 'letter', usage: 123, rating: 4.7, format: ['PDF', 'DOCX'], fields: 11, byLawsSection: 'section8', description: 'Internal transfer notification', lastUsed: '2024-10-05' },
    { id: 'DOC-031', title: 'Reference Letter', category: 'General', type: 'letter', usage: 189, rating: 4.8, format: ['PDF'], fields: 9, byLawsSection: 'section17', description: 'Employment reference', lastUsed: '2024-10-09' },
    { id: 'DOC-032', title: 'No Objection Certificate', category: 'General', type: 'certificate', usage: 145, rating: 4.7, format: ['PDF'], fields: 7, byLawsSection: 'section17', description: 'NOC for various purposes', lastUsed: '2024-10-07' }
  ];

  const documentHistory = [
    { id: 'GEN-2024-1245', template: 'Offer Letter', employee: 'Dr. Sarah Johnson', generatedBy: 'HR Manager', date: '2024-10-12', time: '10:30 AM', status: 'sent', format: 'PDF' },
    { id: 'GEN-2024-1244', template: 'Leave Approval Letter', employee: 'Nurse Mary Wilson', generatedBy: 'Dept. Head', date: '2024-10-12', time: '09:15 AM', status: 'sent', format: 'PDF' },
    { id: 'GEN-2024-1243', template: 'Performance Appraisal Form', employee: 'Dr. Michael Brown', generatedBy: 'HR Specialist', date: '2024-10-11', time: '03:45 PM', status: 'draft', format: 'DOCX' },
    { id: 'GEN-2024-1242', template: 'Salary Certificate', employee: 'Admin Officer', generatedBy: 'Payroll Manager', date: '2024-10-11', time: '02:20 PM', status: 'sent', format: 'PDF' },
    { id: 'GEN-2024-1241', template: 'Training Completion Certificate', employee: 'Nurse Emily Davis', generatedBy: 'Training Coord.', date: '2024-10-10', time: '11:00 AM', status: 'sent', format: 'PDF' },
    { id: 'GEN-2024-1240', template: 'Employment Contract', employee: 'Dr. James Wilson', generatedBy: 'HR Director', date: '2024-10-10', time: '09:30 AM', status: 'sent', format: 'PDF' },
    { id: 'GEN-2024-1239', template: 'Confidentiality Agreement', employee: 'IT Manager', generatedBy: 'Legal Officer', date: '2024-10-09', time: '04:15 PM', status: 'sent', format: 'PDF' },
    { id: 'GEN-2024-1238', template: 'Warning Letter - Written', employee: 'Staff Member', generatedBy: 'Supervisor', date: '2024-10-08', time: '01:30 PM', status: 'draft', format: 'PDF' }
  ];

  const categories = [...new Set(documentTemplates.map(d => d.category))];
  
  // Stats
  const totalTemplates = documentTemplates.length;
  const popularTemplates = documentTemplates.filter(d => d.popular).length;
  const recentlyUsed = documentHistory.filter(h => h.date === '2024-10-12' || h.date === '2024-10-11').length;
  const drafts = documentHistory.filter(h => h.status === 'draft').length;

  const views = [
    { id: 'templates', name: 'Templates', icon: FileText },
    { id: 'generator', name: 'Generate', icon: Zap },
    { id: 'history', name: 'History', icon: Clock },
    { id: 'favorites', name: 'Favorites', icon: Star }
  ];

  const renderTemplates = () => {
    const filteredTemplates = documentTemplates.filter(template => {
      const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           template.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filterCategory === 'all' || template.category === filterCategory;
      return matchesSearch && matchesCategory;
    });

    const groupedTemplates = categories.reduce((acc, category) => {
      acc[category] = filteredTemplates.filter(t => t.category === category);
      return acc;
    }, {});

    return (
      <div className="space-y-6">
        {/* Search and Filter */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search document templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:outline-none"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:outline-none font-semibold"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
            <div className="text-2xl font-bold text-purple-900">{totalTemplates}</div>
            <div className="text-xs font-semibold text-purple-700">Total Templates</div>
          </div>
          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
            <div className="text-2xl font-bold text-orange-900">{popularTemplates}</div>
            <div className="text-xs font-semibold text-orange-700">Popular</div>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
            <div className="text-2xl font-bold text-blue-900">{recentlyUsed}</div>
            <div className="text-xs font-semibold text-blue-700">Recently Used</div>
          </div>
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
            <div className="text-2xl font-bold text-green-900">{categories.length}</div>
            <div className="text-xs font-semibold text-green-700">Categories</div>
          </div>
        </div>

        {/* Templates by Category */}
        <div className="space-y-4">
          {Object.entries(groupedTemplates).map(([category, templates]) => (
            templates.length > 0 && (
              <div key={category} className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden">
                <div
                  onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
                  className="p-5 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Folder className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-slate-900">{category}</h4>
                    <span className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-xs font-bold">
                      {templates.length} templates
                    </span>
                  </div>
                  {expandedCategory === category ? (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  )}
                </div>

                {expandedCategory === category && (
                  <div className="p-4 space-y-2">
                    {templates.map(template => (
                      <div
                        key={template.id}
                        onClick={() => setSelectedTemplate(template)}
                        className="p-4 border-2 border-slate-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-mono text-xs text-slate-600">{template.id}</span>
                              <h5 className="font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                                {template.title}
                              </h5>
                              {template.popular && (
                                <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs font-bold flex items-center gap-1">
                                  <Star className="w-3 h-3 fill-orange-700" />
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-slate-600 mb-3">{template.description}</p>
                            
                            <div className="flex items-center gap-4 text-xs text-slate-600">
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                Used {template.usage} times
                              </span>
                              <span className="flex items-center gap-1">
                                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                {template.rating}
                              </span>
                              <span className="flex items-center gap-1">
                                <File className="w-3 h-3" />
                                {template.fields} fields
                              </span>
                              <span>
                                Formats: {template.format.join(', ')}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedTemplate(template);
                              setActiveView('generator');
                              setGeneratorStep(2);
                            }}
                            className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-sm flex items-center gap-2"
                          >
                            <Zap className="w-4 h-4" />
                            Generate
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      </div>
    );
  };

  const renderGenerator = () => {
    if (!selectedTemplate) {
      return (
        <div className="text-center py-20">
          <FileText className="w-20 h-20 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Select a Template</h3>
          <p className="text-slate-600 mb-6">Choose a document template from the library to get started</p>
          <button
            onClick={() => setActiveView('templates')}
            className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-bold"
          >
            Browse Templates
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Progress Steps */}
        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">{selectedTemplate.title}</h3>
              <p className="text-sm text-slate-600">{selectedTemplate.description}</p>
            </div>
            <button
              onClick={() => {
                setSelectedTemplate(null);
                setGeneratorStep(1);
                setFormData({});
              }}
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-semibold"
            >
              Change Template
            </button>
          </div>

          <div className="flex gap-4">
            {[
              { step: 1, label: 'Select Template', icon: FileText },
              { step: 2, label: 'Fill Details', icon: Edit },
              { step: 3, label: 'Preview & Generate', icon: Eye }
            ].map(({ step, label, icon: Icon }) => (
              <button
                key={step}
                onClick={() => setGeneratorStep(step)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                  generatorStep >= step
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Fill Form */}
        {generatorStep === 2 && (
          <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
            <h4 className="text-lg font-bold text-slate-900 mb-4">Document Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Employee Name *</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Employee ID *</label>
                <input
                  type="text"
                  placeholder="Enter employee ID"
                  className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Department *</label>
                <select className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none">
                  <option>Select department</option>
                  <option>Emergency</option>
                  <option>ICU</option>
                  <option>Surgery</option>
                  <option>Pediatrics</option>
                  <option>Administration</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Designation *</label>
                <input
                  type="text"
                  placeholder="Enter designation"
                  className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Date *</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Effective Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Template Specific Fields */}
            <div className="mt-6 p-4 bg-purple-50 border-2 border-purple-200 rounded-lg">
              <h5 className="font-bold text-purple-900 mb-3">Template Specific Information</h5>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {selectedTemplate.title === 'Offer Letter' ? 'Annual Salary' : 'Remarks'}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter details"
                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Additional Notes</label>
                  <textarea
                    rows="3"
                    placeholder="Enter any additional information"
                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setGeneratorStep(3)}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-bold flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                Preview Document
              </button>
              <button className="px-6 py-3 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition-colors font-bold">
                Save as Draft
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Preview & Generate */}
        {generatorStep === 3 && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-slate-200 rounded-xl p-8">
              <div className="bg-slate-50 border-2 border-slate-300 rounded-lg p-8 min-h-[500px]">
                <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg">
                  {/* Document Preview */}
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">KOYILI HOSPITAL</h2>
                    <p className="text-sm text-slate-600">Healthcare Excellence Since 1985</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-slate-600 mb-4">Date: October 14, 2024</div>
                    <div className="text-sm text-slate-600 mb-4">Ref: {selectedTemplate.id}/2024</div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                    {selectedTemplate.title.toUpperCase()}
                  </h3>

                  <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                    <p>Dear [Employee Name],</p>
                    <p>
                      This is to inform you that [document specific content based on template type].
                      As per the hospital's By-Laws and policies outlined in {selectedTemplate.byLawsSection},
                      we hereby [action specific to document].
                    </p>
                    <p>
                      The details are as follows:<br />
                      • Employee ID: [EMP-ID]<br />
                      • Department: [Department Name]<br />
                      • Designation: [Job Title]<br />
                      • Effective Date: [Date]
                    </p>
                    <p>
                      [Additional template-specific content and terms]
                    </p>
                    <p>We wish you continued success in your endeavors.</p>
                    <p className="mt-8">
                      Sincerely,<br />
                      <br />
                      <strong>HR Department</strong><br />
                      Koyili Hospital
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-4">Generate Options</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Output Format</label>
                  <select className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none">
                    {selectedTemplate.format.map(fmt => (
                      <option key={fmt} value={fmt}>{fmt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Action After Generation</label>
                  <select className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none">
                    <option>Download only</option>
                    <option>Download and Email</option>
                    <option>Save to records</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-6 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-bold flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Generate & Download
                </button>
                <button className="px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-bold flex items-center justify-center gap-2">
                  <Printer className="w-5 h-5" />
                  Print
                </button>
                <button className="px-6 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-bold flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Email
                </button>
              </div>

              <button
                onClick={() => onNavigateToSection && onNavigateToSection(selectedTemplate.byLawsSection)}
                className="w-full mt-4 px-6 py-3 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition-colors font-bold flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                View Related By-Laws Section
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderHistory = () => (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
          <div className="text-2xl font-bold text-blue-900">{documentHistory.length}</div>
          <div className="text-xs font-semibold text-blue-700">Total Generated</div>
        </div>
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
          <div className="text-2xl font-bold text-green-900">{documentHistory.filter(h => h.status === 'sent').length}</div>
          <div className="text-xs font-semibold text-green-700">Sent</div>
        </div>
        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
          <div className="text-2xl font-bold text-orange-900">{drafts}</div>
          <div className="text-xs font-semibold text-orange-700">Drafts</div>
        </div>
        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
          <div className="text-2xl font-bold text-purple-900">{recentlyUsed}</div>
          <div className="text-xs font-semibold text-purple-700">This Week</div>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b-2 border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Document ID</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Template</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Employee</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Generated By</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Date & Time</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {documentHistory.map(doc => (
                <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm font-semibold text-slate-900">{doc.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">{doc.template}</div>
                    <div className="text-xs text-slate-600">{doc.format}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{doc.employee}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{doc.generatedBy}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    <div>{doc.date}</div>
                    <div className="text-xs text-slate-500">{doc.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      doc.status === 'sent' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {doc.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-purple-600 hover:bg-purple-50 rounded transition-colors">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Document Generator</h2>
                  <p className="text-purple-100">Generate professional HR documents instantly</p>
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
                        ? 'bg-white text-purple-700 shadow-lg'
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
            {activeView === 'templates' && renderTemplates()}
            {activeView === 'generator' && renderGenerator()}
            {activeView === 'history' && renderHistory()}
            {activeView === 'favorites' && (
              <div className="text-center py-12">
                <Star className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Favorite Templates</p>
                <p className="text-sm text-slate-500 mt-1">Mark templates as favorites for quick access</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Template Details Modal */}
      {selectedTemplate && activeView === 'templates' && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{selectedTemplate.title}</h3>
                  <p className="text-purple-100">{selectedTemplate.id} • {selectedTemplate.category}</p>
                </div>
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Description</h4>
                  <p className="text-slate-700 leading-relaxed">{selectedTemplate.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Usage Count</div>
                    <div className="font-bold text-slate-900 text-xl">{selectedTemplate.usage}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Rating</div>
                    <div className="font-bold text-slate-900 text-xl flex items-center gap-2">
                      {selectedTemplate.rating}
                      <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Form Fields</div>
                    <div className="font-bold text-slate-900 text-xl">{selectedTemplate.fields}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Last Used</div>
                    <div className="font-bold text-slate-900">{selectedTemplate.lastUsed}</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setActiveView('generator');
                      setGeneratorStep(2);
                    }}
                    className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-bold flex items-center justify-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    Start Generating
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTemplate(null);
                      onNavigateToSection && onNavigateToSection(selectedTemplate.byLawsSection);
                    }}
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-bold flex items-center justify-center gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    View By-Laws
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DocumentGenerator;
