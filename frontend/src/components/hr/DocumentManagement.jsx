import React, { useState } from 'react';
import { Search, Upload, Download, FileText, AlertCircle, CheckCircle, Clock, Filter, Eye } from 'lucide-react';

const DocumentManagement = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const documentCategories = [
    { id: 'all', label: 'All Documents', count: 45, icon: FileText },
    { id: 'personal', label: 'Personal Documents', count: 15, icon: FileText },
    { id: 'legal', label: 'Legal Documents', count: 12, icon: FileText },
    { id: 'compliance', label: 'Compliance Certificates', count: 10, icon: CheckCircle },
    { id: 'contracts', label: 'Contracts', count: 8, icon: FileText }
  ];

  const mockDocuments = [
    { id: 1, name: 'Employment Contract - Dr. Rajesh Kumar', category: 'legal', uploadDate: '2024-01-15', expiryDate: '2025-12-31', status: 'active', size: '2.5 MB' },
    { id: 2, name: 'Medical License Renewal', category: 'compliance', uploadDate: '2024-03-20', expiryDate: '2025-01-25', status: 'expiring', size: '1.2 MB' },
    { id: 3, name: 'Nursing Certification - Ms. Priya', category: 'compliance', uploadDate: '2024-02-10', expiryDate: '2024-12-20', status: 'expired', size: '890 KB' },
    { id: 4, name: 'Vendor Agreement - Medical Supplies', category: 'contracts', uploadDate: '2024-06-01', expiryDate: '2025-05-31', status: 'active', size: '3.1 MB' }
  ];

  const filteredDocuments = mockDocuments.filter(doc => {
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    const matchesSearch = searchQuery === '' || doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Document Management Center</h1>
            <p className="text-sm text-slate-600 mt-1">Central repository for all HR documents and compliance files</p>
          </div>
          <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center shadow-md">
            <Upload className="w-5 h-5 mr-2" />
            Upload Document
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {documentCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                activeCategory === cat.id
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg'
                  : 'bg-white border-slate-200 hover:border-blue-400'
              }`}
            >
              <cat.icon className={`w-6 h-6 mb-2 ${activeCategory === cat.id ? 'text-white' : 'text-blue-600'}`} />
              <p className={`text-sm font-semibold ${activeCategory === cat.id ? 'text-white' : 'text-slate-900'}`}>{cat.label}</p>
              <p className={`text-2xl font-bold ${activeCategory === cat.id ? 'text-white' : 'text-slate-900'}`}>{cat.count}</p>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-5">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Expiry Alerts</h3>
              <p className="text-sm text-slate-700">2 documents expiring within 30 days. Please review and renew.</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {filteredDocuments.map((doc) => (
            <div key={doc.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-400 transition-all shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-1">{doc.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-slate-600">
                      <span>Uploaded: {new Date(doc.uploadDate).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>Expires: {new Date(doc.expiryDate).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    doc.status === 'active' ? 'bg-green-100 text-green-700' :
                    doc.status === 'expiring' ? 'bg-orange-100 text-orange-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {doc.status === 'active' ? 'Active' : doc.status === 'expiring' ? 'Expiring Soon' : 'Expired'}
                  </span>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Eye className="w-5 h-5 text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Download className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentManagement;