import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Download, FolderOpen, Search, Filter } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AnnexuresTab = ({ deptId }) => {
  const [annexures, setAnnexures] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnexures();
    fetchCategories();
  }, [deptId]);

  const fetchAnnexures = async () => {
    try {
      const response = await axios.get(`${API}/annexures/${deptId}`);
      setAnnexures(response.data);
    } catch (error) {
      console.error('Error fetching annexures:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API}/annexures/${deptId}/categories`);
      setCategories(['All', ...response.data.categories]);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filteredAnnexures = annexures.filter(annexure => {
    const matchesSearch = 
      annexure.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      annexure.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      annexure.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || annexure.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      'HR Policy': 'bg-blue-100 text-blue-700',
      'Recruitment': 'bg-green-100 text-green-700',
      'Performance': 'bg-purple-100 text-purple-700',
      'Attendance': 'bg-orange-100 text-orange-700',
      'Leave': 'bg-pink-100 text-pink-700',
      'Training': 'bg-indigo-100 text-indigo-700',
      'Compliance': 'bg-red-100 text-red-700',
      'Grievance': 'bg-yellow-100 text-yellow-700',
      'Payroll': 'bg-teal-100 text-teal-700',
      'Exit': 'bg-gray-100 text-gray-700',
      'Wellness': 'bg-cyan-100 text-cyan-700',
      'IT': 'bg-violet-100 text-violet-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search forms and annexures..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            data-testid="search-annexures"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-12 pr-8 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer min-w-[200px]"
            data-testid="filter-category"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Annexures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAnnexures.map((annexure) => (
          <div
            key={annexure.id}
            className="bg-white rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all p-5"
            data-testid={`annexure-${annexure.code}`}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-xs font-semibold">
                {annexure.code}
              </span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(annexure.category)}`}>
                {annexure.category}
              </span>
            </div>
            
            <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2">
              {annexure.name}
            </h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium mr-2">Format:</span>
                <span>{annexure.format}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium mr-2">Approval:</span>
                <span className="line-clamp-1">{annexure.approval}</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium flex items-center justify-center">
                <FolderOpen className="w-4 h-4 mr-2" />
                View Form
              </button>
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAnnexures.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <FolderOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">No forms or annexures found matching your criteria.</p>
        </div>
      )}

      {/* Summary */}
      <div className="mt-6 bg-white rounded-lg border border-gray-200 p-4">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold text-gray-900">{filteredAnnexures.length}</span> of{' '}
          <span className="font-semibold text-gray-900">{annexures.length}</span> forms
        </p>
      </div>
    </div>
  );
};

export default AnnexuresTab;