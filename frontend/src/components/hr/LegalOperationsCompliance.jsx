import React, { useState } from 'react';
import { Scale, FileText, BookOpen, FolderOpen, FileSignature, Shield, Search, Download, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { HR_BYLAWS, HR_SOPS, HR_ANNEXURES, DEMO_CONTRACTS } from '../../data/hrDemoData';

const LegalOperationsCompliance = () => {
  const [activeSection, setActiveSection] = useState('bylaws');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState({});

  const sections = [
    { id: 'bylaws', name: 'By-Laws', icon: FileText, count: HR_BYLAWS.length, color: 'blue' },
    { id: 'sops', name: 'SOPs', icon: BookOpen, count: HR_SOPS.length, color: 'green' },
    { id: 'annexures', name: 'Forms & Annexures', icon: FolderOpen, count: HR_ANNEXURES.length, color: 'purple' },
    { id: 'contracts', name: 'Contracts', icon: FileSignature, count: DEMO_CONTRACTS.length, color: 'orange' },
    { id: 'compliance', name: 'Compliance Dashboard', icon: Shield, count: null, color: 'red' }
  ];

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getColorClasses = (color, isActive) => {
    if (isActive) {
      const colorMap = {
        blue: 'bg-blue-600 text-white shadow-lg',
        green: 'bg-green-600 text-white shadow-lg',
        purple: 'bg-purple-600 text-white shadow-lg',
        orange: 'bg-orange-600 text-white shadow-lg',
        red: 'bg-red-600 text-white shadow-lg'
      };
      return colorMap[color] || 'bg-blue-600 text-white shadow-lg';
    }
    return 'bg-slate-50 text-slate-700 hover:bg-slate-100';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Legal Operations & Compliance</h1>
        <p className="text-slate-600 mt-1">Comprehensive legal documentation and compliance management</p>
      </div>

      {/* Section Tabs */}
      <div className="bg-white rounded-xl p-2 border-2 border-slate-200 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all font-semibold ${getColorClasses(section.color, activeSection === section.id)}`}
            >
              <section.icon className="w-5 h-5" />
              <span>{section.name}</span>
              {section.count && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeSection === section.id ? 'bg-white/20' : 'bg-slate-200'
                }`}>
                  {section.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      {activeSection !== 'compliance' && (
        <div className="bg-white rounded-xl p-4 border-2 border-slate-200 shadow-sm">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder={`Search ${sections.find(s => s.id === activeSection)?.name}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
      )}

      {/* By-Laws Section */}
      {activeSection === 'bylaws' && (
        <div className="space-y-4">
          {HR_BYLAWS.filter(bylaw => 
            searchQuery === '' || 
            bylaw.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bylaw.description.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((bylaw) => (
            <div key={bylaw.section} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-all shadow-sm">
              <div className="flex justify-between items-start cursor-pointer" onClick={() => toggleExpand(`bylaw-${bylaw.section}`)}>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold">
                      Section {bylaw.section}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{bylaw.title}</h3>
                  </div>
                  <p className="text-slate-600 mt-2">{bylaw.description}</p>
                  <p className="text-sm text-slate-500 mt-2">{bylaw.subsections} subsections</p>
                </div>
                <button className="ml-4 text-slate-400 hover:text-slate-600">
                  {expandedItems[`bylaw-${bylaw.section}`] ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
              </div>
              
              {expandedItems[`bylaw-${bylaw.section}`] && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex space-x-3">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      View Full Document
                    </button>
                    <button className="bg-slate-200 text-slate-700 px-6 py-2 rounded-lg hover:bg-slate-300 transition-colors font-semibold text-sm flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* SOPs Section */}
      {activeSection === 'sops' && (
        <div className="space-y-4">
          {HR_SOPS.filter(sop => 
            searchQuery === '' || 
            sop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sop.category.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((sopCategory) => (
            <div key={sopCategory.category} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-green-400 transition-all shadow-sm">
              <div className="flex justify-between items-start cursor-pointer" onClick={() => toggleExpand(`sop-${sopCategory.category}`)}>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">
                      Category {sopCategory.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{sopCategory.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">{sopCategory.sops.length} SOPs in this category</p>
                </div>
                <button className="ml-4 text-slate-400 hover:text-slate-600">
                  {expandedItems[`sop-${sopCategory.category}`] ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
              </div>
              
              {expandedItems[`sop-${sopCategory.category}`] && (
                <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
                  {sopCategory.sops.map((sop, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-sm font-bold text-green-600">{sop.code}</span>
                        <span className="text-slate-900 font-medium">{sop.name}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">View</button>
                        <button className="text-slate-600 hover:text-slate-700 text-sm font-semibold">Download</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Annexures Section */}
      {activeSection === 'annexures' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {HR_ANNEXURES.filter(annexure => 
            searchQuery === '' || 
            annexure.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            annexure.category.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((annexure) => (
            <div key={annexure.code} className="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-purple-400 transition-all shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-xs font-bold">
                  {annexure.code}
                </span>
                <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-semibold">
                  {annexure.category}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-3 line-clamp-2">{annexure.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <span className="text-slate-500 mr-2">Format:</span>
                  <span className="text-slate-900 font-medium">{annexure.format}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-slate-500 mr-2">Approval:</span>
                  <span className="text-slate-900 font-medium text-xs">{annexure.approval}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold">
                  View
                </button>
                <button className="bg-slate-200 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-300 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Contracts Section */}
      {activeSection === 'contracts' && (
        <div className="space-y-4">
          {DEMO_CONTRACTS.filter(contract => 
            searchQuery === '' || 
            contract.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contract.party.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((contract) => (
            <div key={contract.id} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-orange-400 transition-all shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold">
                      {contract.type}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{contract.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-500">Party</p>
                      <p className="text-sm font-medium text-slate-900">{contract.party}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">Start Date</p>
                      <p className="text-sm font-medium text-slate-900">{new Date(contract.startDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">End Date</p>
                      <p className="text-sm font-medium text-slate-900">{new Date(contract.endDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">Value</p>
                      <p className="text-sm font-medium text-slate-900">{contract.value}</p>
                    </div>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-lg text-xs font-semibold ml-4 ${
                  contract.status === 'Active' ? 'bg-green-100 text-green-700' :
                  contract.status === 'Expiring Soon' ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {contract.status}
                </span>
              </div>
              <div className="flex space-x-3 mt-4">
                <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  View Contract
                </button>
                <button className="bg-slate-200 text-slate-700 px-6 py-2 rounded-lg hover:bg-slate-300 transition-colors font-semibold text-sm flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Compliance Dashboard */}
      {activeSection === 'compliance' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-sm">
              <Shield className="w-10 h-10 text-green-600 mb-3" />
              <p className="text-3xl font-bold text-slate-900">95%</p>
              <p className="text-sm text-slate-600">Compliance Score</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-sm">
              <FileText className="w-10 h-10 text-blue-600 mb-3" />
              <p className="text-3xl font-bold text-slate-900">{HR_BYLAWS.length + HR_SOPS.length + HR_ANNEXURES.length}</p>
              <p className="text-sm text-slate-600">Total Documents</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-orange-200 shadow-sm">
              <FileSignature className="w-10 h-10 text-orange-600 mb-3" />
              <p className="text-3xl font-bold text-slate-900">{DEMO_CONTRACTS.filter(c => c.status === 'Expiring Soon').length}</p>
              <p className="text-sm text-slate-600">Contracts Expiring</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Compliance Checklist</h2>
            <div className="space-y-3">
              {[
                { item: 'All By-Laws Documented', status: 'completed' },
                { item: 'SOPs Updated (Current Year)', status: 'completed' },
                { item: 'Mandatory Forms Available', status: 'completed' },
                { item: 'Active Contracts Monitored', status: 'completed' },
                { item: 'Annual Policy Review', status: 'pending' },
                { item: 'HIPAA Compliance Audit', status: 'completed' },
                { item: 'ISO Certification Renewal', status: 'in-progress' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="text-slate-900 font-medium">{item.item}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'completed' ? 'bg-green-100 text-green-700' :
                    item.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {item.status === 'completed' ? 'Completed' : item.status === 'in-progress' ? 'In Progress' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalOperationsCompliance;
