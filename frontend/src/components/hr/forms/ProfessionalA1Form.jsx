import React, { useState, useRef, useEffect } from 'react';
import {
  Download,
  Upload,
  Printer,
  Save,
  FileText,
  AlertCircle,
  CheckCircle2,
  Clock,
  Shield,
  BookOpen,
  Users,
  Building2,
  Calendar,
  Edit3,
  Trash2,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Check,
  X,
  Info,
  ArrowRight
} from 'lucide-react';

const ProfessionalA1Form = () => {
  const [formData, setFormData] = useState({
    documentNumber: `KH/HR/A1/${new Date().getFullYear()}/${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
    effectiveDate: new Date().toISOString().split('T')[0],
    submissionDate: new Date().toISOString().split('T')[0],
    status: 'draft',
    
    // Requestor Details
    reqName: '',
    reqEmployeeId: '',
    reqDesignation: '',
    reqDepartment: '',
    reqEmail: '',
    reqContactNumber: '',
    
    // Policy Reference
    policyTitle: '',
    policyVersion: '',
    policyDate: '',
    policyClause: '',
    policyDocument: '',
    
    // Nature of Revision
    revisionType: [],
    revisionPriority: 'normal',
    revisionRationale: '',
    revisionImpact: '',
    revisionImplementationDate: '',
    
    // Supporting Documents
    attachments: [],
    
    // Approval Workflow
    hodName: '',
    hodDate: '',
    hodRemarks: '',
    hodStatus: 'pending',
    
    hrName: '',
    hrDate: '',
    hrRemarks: '',
    hrStatus: 'pending',
    
    complianceName: '',
    complianceDate: '',
    complianceRemarks: '',
    complianceStatus: 'pending',
    
    ceoName: '',
    ceoDate: '',
    ceoRemarks: '',
    ceoStatus: 'pending'
  });

  const [logoUrl, setLogoUrl] = useState('/koyili-logo.png');
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);
  const [validationErrors, setValidationErrors] = useState({});
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  // Auto-save functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      autoSave();
    }, 3000);
    return () => clearTimeout(timer);
  }, [formData]);

  // Calculate completion percentage
  useEffect(() => {
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(val => {
      if (Array.isArray(val)) return val.length > 0;
      if (typeof val === 'string') return val.trim() !== '';
      return true;
    }).length;
    setCompletionPercentage(Math.round((filledFields / totalFields) * 100));
  }, [formData]);

  const autoSave = () => {
    setIsAutoSaving(true);
    localStorage.setItem('a1_form_draft', JSON.stringify({ formData, logoUrl, timestamp: new Date().toISOString() }));
    setLastSaved(new Date());
    setTimeout(() => setIsAutoSaving(false), 1000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const currentArray = formData[name] || [];
      const newArray = checked 
        ? [...currentArray, value]
        : currentArray.filter(item => item !== value);
      setFormData(prev => ({ ...prev, [name]: newArray }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateSection = (section) => {
    const errors = {};
    
    if (section === 1) {
      if (!formData.reqName) errors.reqName = 'Full name is required';
      if (!formData.reqEmployeeId) errors.reqEmployeeId = 'Employee ID is required';
      if (!formData.reqDepartment) errors.reqDepartment = 'Department is required';
    }
    
    if (section === 2) {
      if (!formData.policyTitle) errors.policyTitle = 'Policy title is required';
      if (!formData.policyClause) errors.policyClause = 'Clause/Section is required';
    }
    
    if (section === 3) {
      if (formData.revisionType.length === 0) errors.revisionType = 'Select at least one revision type';
      if (!formData.revisionRationale || formData.revisionRationale.length < 50) {
        errors.revisionRationale = 'Provide detailed rationale (minimum 50 characters)';
      }
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setLogoUrl(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const dataToSave = {
      formData,
      logoUrl,
      version: '1.0',
      savedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(dataToSave, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `A1_HR_Policy_Revision_${formData.documentNumber.replace(/\//g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoad = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const loaded = JSON.parse(reader.result);
          if (loaded.formData) setFormData(loaded.formData);
          if (loaded.logoUrl) setLogoUrl(loaded.logoUrl);
        } catch (err) {
          alert('Invalid file format');
        }
      };
      reader.readAsText(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getStatusColor = (status) => {
    const colors = {
      draft: 'bg-gray-100 text-gray-700',
      pending: 'bg-yellow-100 text-yellow-700',
      approved: 'bg-green-100 text-green-700',
      rejected: 'bg-red-100 text-red-700'
    };
    return colors[status] || colors.draft;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      low: 'bg-blue-100 text-blue-700',
      normal: 'bg-green-100 text-green-700',
      high: 'bg-orange-100 text-orange-700',
      critical: 'bg-red-100 text-red-700'
    };
    return colors[priority] || colors.normal;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Professional Toolbar */}
      <div className="sticky top-0 z-50 bg-white border-b-2 border-slate-300 shadow-md print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Document Info */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Annexure A1</h3>
                  <p className="text-xs text-slate-600">{formData.documentNumber}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(formData.status)}`}>
                  {formData.status.toUpperCase()}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getPriorityColor(formData.revisionPriority)}`}>
                  {formData.revisionPriority.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Middle: Progress */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-slate-700">{completionPercentage}%</span>
              </div>
              
              {isAutoSaving && (
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <Save className="w-3 h-3 animate-pulse" />
                  <span>Saving...</span>
                </div>
              )}
              
              {lastSaved && !isAutoSaving && (
                <div className="text-xs text-slate-500">
                  Saved {new Date(lastSaved).toLocaleTimeString()}
                </div>
              )}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-2 border-2 border-slate-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 flex items-center gap-2 text-sm font-semibold transition-all"
                title="Upload Hospital Logo"
              >
                <Upload className="w-4 h-4" />
                Logo
              </button>
              
              <button
                onClick={handleSave}
                className="px-3 py-2 border-2 border-slate-300 rounded-lg hover:border-green-400 hover:bg-green-50 flex items-center gap-2 text-sm font-semibold transition-all"
                title="Save as JSON"
              >
                <Download className="w-4 h-4" />
                Save
              </button>
              
              <input ref={loadInputRef} type="file" accept="application/json" onChange={handleLoad} className="hidden" />
              <button
                onClick={() => loadInputRef.current?.click()}
                className="px-3 py-2 border-2 border-slate-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 flex items-center gap-2 text-sm font-semibold transition-all"
                title="Load from JSON"
              >
                <Upload className="w-4 h-4" />
                Load
              </button>
              
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 flex items-center gap-2 text-sm font-semibold shadow-lg transition-all"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
                Print / PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-200 overflow-hidden">
          
          {/* Professional Document Header */}
          <div className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white overflow-hidden">
            {/* Watermark Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 text-9xl font-bold transform -rotate-45">KOYILI</div>
              <div className="absolute bottom-10 right-10 text-9xl font-bold transform -rotate-45">HOSPITAL</div>
            </div>
            
            <div className="relative grid grid-cols-[200px_1fr_200px] gap-6 items-center p-8">
              {/* Hospital Logo */}
              <div className="bg-white rounded-xl p-4 shadow-xl">
                <img
                  src={logoUrl}
                  alt="Koyili Hospital"
                  className="w-full h-32 object-contain"
                />
              </div>
              
              {/* Document Title */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Shield className="w-6 h-6" />
                  <span className="text-sm font-semibold tracking-wider">OFFICIAL DOCUMENT</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">HR POLICY REVISION REQUEST</h1>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Annexure A1</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">SOP A.1</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Version 1.0</span>
                </div>
              </div>
              
              {/* QR Code Placeholder */}
              <div className="bg-white rounded-xl p-4 shadow-xl">
                <div className="w-full h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-xs text-slate-600 font-semibold">VERIFICATION</p>
                    <p className="text-xs text-slate-500">{formData.documentNumber}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Document Control Strip */}
            <div className="bg-blue-900/50 backdrop-blur-sm px-8 py-3 grid grid-cols-5 gap-4 text-xs">
              <div>
                <p className="text-blue-200 font-semibold">Document No.</p>
                <p className="text-white font-bold">{formData.documentNumber}</p>
              </div>
              <div>
                <p className="text-blue-200 font-semibold">Effective Date</p>
                <p className="text-white font-bold">{new Date(formData.effectiveDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-blue-200 font-semibold">By-Laws Reference</p>
                <p className="text-white font-bold">Section 4.2</p>
              </div>
              <div>
                <p className="text-blue-200 font-semibold">Custodian</p>
                <p className="text-white font-bold">Human Resources</p>
              </div>
              <div>
                <p className="text-blue-200 font-semibold">Approval Authority</p>
                <p className="text-white font-bold">CEO / Medical Director</p>
              </div>
            </div>
          </div>

          {/* Purpose Banner */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b-4 border-blue-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Purpose of This Document</h3>
                <p className="text-slate-700 leading-relaxed">
                  This Annexure provides a <strong>uniform, auditable, and legally compliant mechanism</strong> through which 
                  revisions to HR policies at Koyili Hospital are proposed, reviewed, and approved. It ensures that all 
                  amendments align with statutory compliance requirements, internal governance practices, and the provisions 
                  of the Hospital By-Laws on HR Governance & Compliance (Section 4.2).
                </p>
              </div>
            </div>
          </div>

          {/* Form Content - Will continue in next part... */}
          <div className="p-8 space-y-8">
            
            {/* Section 1: Requestor Details */}
            <section className="border-2 border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold">Requestor Information</h3>
                    <p className="text-sm text-blue-100">Details of the person initiating this revision request</p>
                  </div>
                </div>
                <Users className="w-6 h-6 opacity-50" />
              </div>
              
              <div className="p-6 bg-white">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="reqName"
                      value={formData.reqName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                        validationErrors.reqName 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-slate-300 focus:border-blue-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {validationErrors.reqName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <X className="w-3 h-3" />
                        {validationErrors.reqName}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Employee ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="reqEmployeeId"
                      value={formData.reqEmployeeId}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                        validationErrors.reqEmployeeId 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-slate-300 focus:border-blue-500'
                      }`}
                      placeholder="e.g., KH2024001"
                    />
                    {validationErrors.reqEmployeeId && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <X className="w-3 h-3" />
                        {validationErrors.reqEmployeeId}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="reqDesignation"
                      value={formData.reqDesignation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                      placeholder="Your job title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Department <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="reqDepartment"
                      value={formData.reqDepartment}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                        validationErrors.reqDepartment 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-slate-300 focus:border-blue-500'
                      }`}
                    >
                      <option value="">Select Department</option>
                      <option value="Human Resources">Human Resources</option>
                      <option value="Medical">Medical Services</option>
                      <option value="Nursing">Nursing</option>
                      <option value="Administration">Administration</option>
                      <option value="Finance">Finance & Accounts</option>
                      <option value="IT">Information Technology</option>
                      <option value="Operations">Operations</option>
                      <option value="Quality">Quality Assurance</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="reqEmail"
                      value={formData.reqEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                      placeholder="your.email@koyilihospital.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="reqContactNumber"
                      value={formData.reqContactNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Policy Reference */}
            <section className="border-2 border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-bold">Policy Reference</h3>
                    <p className="text-sm text-purple-100">Identify the policy and specific section requiring revision</p>
                  </div>
                </div>
                <BookOpen className="w-6 h-6 opacity-50" />
              </div>
              
              <div className="p-6 bg-white">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Policy Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="policyTitle"
                        value={formData.policyTitle}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                          validationErrors.policyTitle 
                            ? 'border-red-500 bg-red-50' 
                            : 'border-slate-300 focus:border-purple-500'
                        }`}
                        placeholder="e.g., Recruitment and Selection Policy"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Current Version & Date
                      </label>
                      <input
                        type="text"
                        name="policyVersion"
                        value={formData.policyVersion}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all"
                        placeholder="e.g., Version 2.1 - Jan 2024"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Clause / Section for Revision <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="policyClause"
                      value={formData.policyClause}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                        validationErrors.policyClause 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-slate-300 focus:border-purple-500'
                      }`}
                      placeholder="e.g., Section 3.2 - Background Verification"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Policy Document Reference
                    </label>
                    <input
                      type="text"
                      name="policyDocument"
                      value={formData.policyDocument}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all"
                      placeholder="Document number or file location"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Revision Details */}
            <section className="border-2 border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold">Nature of Proposed Revision</h3>
                    <p className="text-sm text-orange-100">Specify the type and details of the revision request</p>
                  </div>
                </div>
                <Edit3 className="w-6 h-6 opacity-50" />
              </div>
              
              <div className="p-6 bg-white space-y-6">
                {/* Revision Type */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Revision Type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer px-4 py-3 border-2 border-slate-300 rounded-lg hover:border-green-400 transition-all">
                      <input
                        type="checkbox"
                        name="revisionType"
                        value="addition"
                        checked={formData.revisionType.includes('addition')}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-green-600"
                      />
                      <span className="font-semibold text-slate-700">Addition</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer px-4 py-3 border-2 border-slate-300 rounded-lg hover:border-blue-400 transition-all">
                      <input
                        type="checkbox"
                        name="revisionType"
                        value="amendment"
                        checked={formData.revisionType.includes('amendment')}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-blue-600"
                      />
                      <span className="font-semibold text-slate-700">Amendment</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer px-4 py-3 border-2 border-slate-300 rounded-lg hover:border-red-400 transition-all">
                      <input
                        type="checkbox"
                        name="revisionType"
                        value="deletion"
                        checked={formData.revisionType.includes('deletion')}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-red-600"
                      />
                      <span className="font-semibold text-slate-700">Deletion</span>
                    </label>
                  </div>
                  {validationErrors.revisionType && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <X className="w-3 h-3" />
                      {validationErrors.revisionType}
                    </p>
                  )}
                </div>

                {/* Priority Level */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Revision Priority
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {['low', 'normal', 'high', 'critical'].map(priority => (
                      <label key={priority} className="cursor-pointer">
                        <input
                          type="radio"
                          name="revisionPriority"
                          value={priority}
                          checked={formData.revisionPriority === priority}
                          onChange={handleInputChange}
                          className="hidden"
                        />
                        <div className={`px-4 py-3 border-2 rounded-lg text-center font-semibold transition-all ${
                          formData.revisionPriority === priority
                            ? `${getPriorityColor(priority)} border-transparent`
                            : 'border-slate-300 hover:border-slate-400'
                        }`}>
                          {priority.charAt(0).toUpperCase() + priority.slice(1)}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Detailed Rationale */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Detailed Rationale for Revision <span className="text-red-500">*</span>
                  </label>
                  <p className="text-xs text-slate-600 mb-2">
                    Provide comprehensive justification including: regulatory updates, operational efficiency improvements, 
                    compliance requirements, or governance alignment needs.
                  </p>
                  <textarea
                    name="revisionRationale"
                    value={formData.revisionRationale}
                    onChange={handleInputChange}
                    rows="6"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                      validationErrors.revisionRationale 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-slate-300 focus:border-orange-500'
                    }`}
                    placeholder="Describe the reason for this revision in detail..."
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-slate-500">
                      {formData.revisionRationale.length} characters (minimum 50 required)
                    </span>
                    {validationErrors.revisionRationale && (
                      <p className="text-red-500 text-xs flex items-center gap-1">
                        <X className="w-3 h-3" />
                        {validationErrors.revisionRationale}
                      </p>
                    )}
                  </div>
                </div>

                {/* Impact Assessment */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Expected Impact & Implementation Timeline
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <textarea
                      name="revisionImpact"
                      value={formData.revisionImpact}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-orange-500"
                      placeholder="Describe expected impact on operations, employees, and compliance..."
                    />
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Proposed Implementation Date
                      </label>
                      <input
                        type="date"
                        name="revisionImplementationDate"
                        value={formData.revisionImplementationDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Approval Workflow */}
            <section className="border-2 border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-bold">Approval Workflow</h3>
                    <p className="text-sm text-green-100">Multi-level authorization and sign-off process</p>
                  </div>
                </div>
                <CheckCircle2 className="w-6 h-6 opacity-50" />
              </div>
              
              <div className="p-6 bg-white space-y-6">
                {/* Head of Department */}
                <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-slate-900">1. Head of Department</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(formData.hodStatus)}`}>
                      {formData.hodStatus.toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="hodName"
                        value={formData.hodName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-green-500"
                        placeholder="HOD name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Date</label>
                      <input
                        type="date"
                        name="hodDate"
                        value={formData.hodDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-green-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-bold text-slate-700 mb-2">Remarks</label>
                      <textarea
                        name="hodRemarks"
                        value={formData.hodRemarks}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-green-500"
                        placeholder="Comments or conditions..."
                      />
                    </div>
                  </div>
                  <div className="mt-4 h-20 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
                    <div className="text-center">
                      <Edit3 className="w-6 h-6 mx-auto mb-1" />
                      <p className="text-xs">Digital Signature Area</p>
                    </div>
                  </div>
                </div>

                {/* HR Manager */}
                <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-slate-900">2. HR Manager</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(formData.hrStatus)}`}>
                      {formData.hrStatus.toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="hrName"
                        value={formData.hrName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="HR Manager name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Date</label>
                      <input
                        type="date"
                        name="hrDate"
                        value={formData.hrDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-bold text-slate-700 mb-2">Remarks</label>
                      <textarea
                        name="hrRemarks"
                        value={formData.hrRemarks}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Comments or conditions..."
                      />
                    </div>
                  </div>
                  <div className="mt-4 h-20 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
                    <div className="text-center">
                      <Edit3 className="w-6 h-6 mx-auto mb-1" />
                      <p className="text-xs">Digital Signature Area</p>
                    </div>
                  </div>
                </div>

                {/* Compliance Officer */}
                <div className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-slate-900">3. Compliance Officer</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(formData.complianceStatus)}`}>
                      {formData.complianceStatus.toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="complianceName"
                        value={formData.complianceName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-purple-500"
                        placeholder="Compliance Officer name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Date</label>
                      <input
                        type="date"
                        name="complianceDate"
                        value={formData.complianceDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-bold text-slate-700 mb-2">Remarks</label>
                      <textarea
                        name="complianceRemarks"
                        value={formData.complianceRemarks}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-purple-500"
                        placeholder="Comments or conditions..."
                      />
                    </div>
                  </div>
                  <div className="mt-4 h-20 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
                    <div className="text-center">
                      <Edit3 className="w-6 h-6 mx-auto mb-1" />
                      <p className="text-xs">Digital Signature Area</p>
                    </div>
                  </div>
                </div>

                {/* CEO / Medical Director */}
                <div className="border-2 border-red-200 rounded-xl p-6 bg-red-50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-slate-900">4. CEO / Medical Director (Final Authority)</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(formData.ceoStatus)}`}>
                      {formData.ceoStatus.toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="ceoName"
                        value={formData.ceoName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-red-500"
                        placeholder="CEO / Medical Director name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Date</label>
                      <input
                        type="date"
                        name="ceoDate"
                        value={formData.ceoDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-bold text-slate-700 mb-2">Final Decision & Remarks</label>
                      <textarea
                        name="ceoRemarks"
                        value={formData.ceoRemarks}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-red-500"
                        placeholder="Final approval decision, comments, or conditions..."
                      />
                    </div>
                  </div>
                  <div className="mt-4 h-24 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
                    <div className="text-center">
                      <Shield className="w-8 h-8 mx-auto mb-1" />
                      <p className="text-xs font-bold">FINAL AUTHORITY SIGNATURE</p>
                      <p className="text-xs">Digital Signature & Official Stamp</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Notice */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-600 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Important Legal Notes</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>This Annexure shall be read in conjunction with <strong>SOP A.1 (Creation and Revision of Human Resource Policies and By-laws)</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>All revisions must comply with the Hospital By-Laws governing <strong>HR Governance and Compliance (Section 4.2)</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No revision shall be valid unless approved and incorporated into the official HR Policy Manual through this documented format</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>All approvers are accountable for ensuring statutory compliance and alignment with organizational governance practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>

          {/* Professional Footer */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-6">
            <div className="grid grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-bold mb-2">Koyili Hospital</p>
                <p className="text-slate-400 text-xs">
                  Professional Healthcare Services<br />
                  Committed to Excellence
                </p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-xs mb-2">This is a controlled document</p>
                <p className="font-bold">© {new Date().getFullYear()} Koyili Hospital</p>
                <p className="text-slate-400 text-xs mt-2">
                  Confidential • For Internal Use Only • Version-Controlled
                </p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-xs mb-2">Document Reference</p>
                <p className="font-mono font-bold text-xs">{formData.documentNumber}</p>
                <p className="text-slate-400 text-xs mt-2">
                  Generated: {new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfessionalA1Form;
