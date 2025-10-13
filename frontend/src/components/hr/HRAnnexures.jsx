import React, { useState } from 'react';
import { Search, Download, Filter, FileText } from 'lucide-react';
import { HR_ANNEXURES } from '../../data/hrDemoData';

const HRAnnexures = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', ...new Set(HR_ANNEXURES.map(a => a.category))];

  const filteredAnnexures = HR_ANNEXURES.filter(annexure => {
    const matchesSearch = searchQuery === '' || 
      annexure.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      annexure.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'All' || annexure.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Administrative Annexures</h1>
            <p className="text-sm text-slate-600 mt-1">Forms, templates and administrative documents</p>
          </div>
          <button className="px-5 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center shadow-md">
            <Download className="w-5 h-5 mr-2" />
            Download All
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search annexures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="pl-12 pr-8 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer min-w-[200px] bg-white"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAnnexures.map((annexure) => (
            <div key={annexure.code} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-400 transition-all shadow-sm">
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
      </div>
    </div>
  );
};

export default HRAnnexures;