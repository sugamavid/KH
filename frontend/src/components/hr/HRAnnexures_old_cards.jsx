import React, { useState } from 'react';
import { 
  Search, Download, Filter, FileText, X, Eye, Printer, Calendar, 
  CheckCircle, Shield, Scale, Building, Users, ClipboardCheck, Star,
  Clock, RefreshCw, BookOpen, Award
} from 'lucide-react';
import { HR_ANNEXURES } from '../../data/hrDemoData';

const HRAnnexures = ({ setActiveModule }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [selectedAnnexure, setSelectedAnnexure] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', ...new Set(HR_ANNEXURES.map(a => a.category))];

  const filteredAnnexures = HR_ANNEXURES.filter(annexure => {
    const matchesSearch = searchQuery === '' || 
      annexure.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      annexure.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'All' || annexure.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    const icons = {
      'Recruitment': Users,
      'Leave Management': Calendar,
      'Performance': Award,
      'Compliance': Shield,
      'Legal': Scale,
      'Operations': Building,
    };
    return icons[category] || FileText;
  };

  const renderDocumentPreview = (annexure) => {
    return (
      <div className="bg-white shadow-sm">
        {/* Professional Legal Document Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-16 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Hospital Logo */}
              <img 
                src="https://customer-assets.emergentagent.com/job_project-hub-123/artifacts/mpnrrrfw_images.jpeg" 
                alt="Koyili Hospital Logo" 
                className="w-20 h-20 object-contain bg-white rounded-lg p-2 shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
                <p className="text-blue-200 text-sm mt-1">Human Resources Department</p>
                <p className="text-blue-300 text-xs mt-0.5">Pallikkunnu, Talap, Kannur, Kerala</p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <p className="text-xs text-blue-200 mb-1">Document Classification</p>
                <p className="text-sm font-bold">INTERNAL USE ONLY</p>
              </div>
            </div>
          </div>
        </div>

        {/* Document Metadata Bar */}
        <div className="bg-gray-50 px-16 py-4 border-b-2 border-blue-900">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">Document Code:</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold">{annexure.code}</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">Category:</span>
                <span>{annexure.category}</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">Format:</span>
                <span>{annexure.format}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Version:</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">v1.0</span>
            </div>
          </div>
        </div>

        {/* Document Title Section */}
        <div className="px-16 py-10 bg-white border-b border-gray-200">
          <div className="mb-6">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Administrative Annexure
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{annexure.name}</h2>
            <p className="text-sm text-gray-600">Effective Date: 01 January 2024 | Version 1.0</p>
          </div>
          
          {/* Approval Authority Badge */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg p-4 inline-flex items-center space-x-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs text-amber-700 font-semibold uppercase tracking-wider">Approval Authority</div>
              <div className="text-sm font-bold text-gray-900">{annexure.approval}</div>
            </div>
          </div>
        </div>

        {/* Document Content */}
        <div className="px-16 py-12 bg-white">
          {/* Purpose Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-blue-900">
              <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Purpose</h3>
            </div>
            <p className="text-[15px] leading-relaxed text-gray-800 text-justify">
              This document serves as an official administrative form for {annexure.name.toLowerCase()} 
              at Koyili Hospital. It is designed to ensure compliance with hospital policies, legal requirements, 
              and best practices in human resource management. All information provided in this form is treated 
              as confidential and used solely for official hospital purposes.
            </p>
          </div>

          {/* Instructions Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-blue-900">
              <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                <ClipboardCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Instructions for Completion</h3>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3 mt-1 text-lg">●</span>
                  <span className="flex-1 text-[15px] text-gray-800">Complete all mandatory fields marked with an asterisk (*)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3 mt-1 text-lg">●</span>
                  <span className="flex-1 text-[15px] text-gray-800">Use black or blue ink for manual forms; type for digital submissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3 mt-1 text-lg">●</span>
                  <span className="flex-1 text-[15px] text-gray-800">Ensure all information provided is accurate and verifiable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3 mt-1 text-lg">●</span>
                  <span className="flex-1 text-[15px] text-gray-800">Attach all required supporting documents as specified</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3 mt-1 text-lg">●</span>
                  <span className="flex-1 text-[15px] text-gray-800">Submit completed form to {annexure.approval} for review and approval</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3 mt-1 text-lg">●</span>
                  <span className="flex-1 text-[15px] text-gray-800">Retain a copy for your records after submission</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Fields Preview */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-blue-900">
              <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Form Structure</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Section boxes */}
              <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-blue-900 text-white rounded flex items-center justify-center font-bold text-xs">1</div>
                  <h4 className="font-bold text-gray-900">Personal Information</h4>
                </div>
                <p className="text-sm text-gray-600">Employee details, contact information, and identification</p>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-blue-900 text-white rounded flex items-center justify-center font-bold text-xs">2</div>
                  <h4 className="font-bold text-gray-900">Request Details</h4>
                </div>
                <p className="text-sm text-gray-600">Specific information related to the form purpose</p>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-blue-900 text-white rounded flex items-center justify-center font-bold text-xs">3</div>
                  <h4 className="font-bold text-gray-900">Supporting Documents</h4>
                </div>
                <p className="text-sm text-gray-600">Required attachments and documentary evidence</p>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-blue-900 text-white rounded flex items-center justify-center font-bold text-xs">4</div>
                  <h4 className="font-bold text-gray-900">Declarations & Signatures</h4>
                </div>
                <p className="text-sm text-gray-600">Applicant and approver signatures with dates</p>
              </div>
            </div>
          </div>

          {/* Compliance Notice */}
          <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-2 border-amber-400 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span>Legal & Compliance Notice</span>
                </h4>
                <p className="text-sm text-gray-800 leading-relaxed">
                  This document is prepared in accordance with applicable labor laws, hospital bylaws, and HR policies. 
                  Any false information provided may result in disciplinary action. All data collected is protected under 
                  hospital data privacy policies and applicable regulations. By submitting this form, you acknowledge that 
                  you have read and understood the terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Footer */}
        <div className="border-t-2 border-blue-900 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 px-16 py-8">
          <div className="grid grid-cols-4 gap-8 text-white mb-4">
            <div>
              <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Document Code</p>
              <p className="text-sm font-semibold">{annexure.code}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Version</p>
              <p className="text-sm font-semibold">1.0</p>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Effective Date</p>
              <p className="text-sm font-semibold">01 January 2024</p>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Next Review</p>
              <p className="text-sm font-semibold">31 December 2024</p>
            </div>
          </div>
          <div className="border-t border-blue-700 pt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Scale className="w-4 h-4 text-amber-400" />
              <p className="text-xs text-blue-200">Compliant with Labor Laws & ISO 9001:2015 Standards</p>
            </div>
            <p className="text-xs text-blue-300">© 2024 Koyili Hospital. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Professional Header with Branding */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Hospital Logo */}
            <img 
              src="https://customer-assets.emergentagent.com/job_project-hub-123/artifacts/mpnrrrfw_images.jpeg" 
              alt="Koyili Hospital Logo" 
              className="w-16 h-16 object-contain bg-white rounded-lg p-2 shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Administrative Annexures</h1>
              <p className="text-blue-200 text-sm mt-1">Professional Forms, Templates & Legal Documents</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200">Total Documents</p>
              <p className="text-2xl font-bold">{HR_ANNEXURES.length}</p>
            </div>
            <button className="px-5 py-2.5 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center shadow-md">
              <Download className="w-5 h-5 mr-2" />
              Download All
            </button>
          </div>
        </div>
      </div>

      {/* Compliance Badge */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3">
        <div className="flex items-center justify-center space-x-4 text-white">
          <Shield className="w-5 h-5" />
          <span className="font-semibold text-sm">ISO 9001:2015 Certified | NABH Accredited | Labor Law Compliant</span>
          <Scale className="w-5 h-5" />
        </div>
      </div>

      <div className="p-8 space-y-6">
        {/* Enhanced Search and Filter */}
        <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by document name, code, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 w-5 h-5" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="pl-12 pr-8 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none cursor-pointer min-w-[250px] bg-white font-semibold text-gray-900"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <p className="text-gray-600">
              Showing <span className="font-bold text-blue-900">{filteredAnnexures.length}</span> of <span className="font-bold text-blue-900">{HR_ANNEXURES.length}</span> documents
            </p>
          </div>
        </div>

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnnexures.map((annexure) => {
            const CategoryIcon = getCategoryIcon(annexure.category);
            return (
              <div 
                key={annexure.code} 
                className="bg-white rounded-xl border-2 border-blue-200 hover:border-blue-500 hover:shadow-2xl transition-all group overflow-hidden"
              >
                {/* Card Header with Gradient */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                      {annexure.code}
                    </span>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded text-xs font-semibold">
                    {annexure.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">
                    {annexure.name}
                  </h3>

                  {/* Document Metadata */}
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2 text-sm">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-600">Format:</span>
                      </div>
                      <span className="text-gray-900 font-bold">{annexure.format}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2 text-sm">
                        <Shield className="w-4 h-4 text-amber-600" />
                        <span className="text-gray-600">Approval:</span>
                      </div>
                      <span className="text-gray-900 font-semibold text-xs text-right">{annexure.approval}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Status:</span>
                      </div>
                      <span className="text-green-700 font-bold text-xs">ACTIVE</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setSelectedAnnexure(annexure)}
                      className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold flex items-center justify-center space-x-2 shadow-md"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </button>
                    <button className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-md">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors shadow-md">
                      <Printer className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="bg-gray-50 px-5 py-3 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>Updated: Jan 2024</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span>Version 1.0</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Document Preview Modal */}
      {selectedAnnexure && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Eye className="w-6 h-6" />
                <div>
                  <h2 className="text-xl font-bold">Document Preview</h2>
                  <p className="text-sm text-blue-200">{selectedAnnexure.code}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold flex items-center space-x-2">
                  <Printer className="w-4 h-4" />
                  <span>Print</span>
                </button>
                <button 
                  onClick={() => setSelectedAnnexure(null)}
                  className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              {renderDocumentPreview(selectedAnnexure)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HRAnnexures;