import React, { useState } from 'react';
import { Search, Download, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { HR_SOPS } from '../../data/hrDemoData';

const HRSOPs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredSOPs = HR_SOPS.filter(sop => 
    searchQuery === '' || 
    sop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sop.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Standard Operating Procedures</h1>
            <p className="text-sm text-slate-600 mt-1">Standardized processes and operational guidelines</p>
          </div>
          <button className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center shadow-md">
            <Download className="w-5 h-5 mr-2" />
            Download All
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search SOPs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredSOPs.map((sopCategory) => (
            <div key={sopCategory.category} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-green-400 transition-all shadow-sm">
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
      </div>
    </div>
  );
};

export default HRSOPs;