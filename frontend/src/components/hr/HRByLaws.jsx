import React, { useState } from 'react';
import { Search, Download, Eye, ChevronDown, ChevronUp, Scale } from 'lucide-react';
import { HR_BYLAWS } from '../../data/hrDemoData';

const HRByLaws = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredByLaws = HR_BYLAWS.filter(bylaw => 
    searchQuery === '' || 
    bylaw.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bylaw.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Human Resource By-Laws</h1>
            <p className="text-sm text-slate-600 mt-1">Guidelines for professional behavior and organizational policies</p>
          </div>
          <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center shadow-md">
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
              placeholder="Search by-laws..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredByLaws.map((bylaw) => (
            <div key={bylaw.section} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-400 transition-all shadow-sm">
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
      </div>
    </div>
  );
};

export default HRByLaws;