import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronDown, ChevronUp, BookOpen, Search, FileText } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const SOPsTab = ({ deptId }) => {
  const [sops, setSops] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSOPs();
  }, [deptId]);

  const fetchSOPs = async () => {
    try {
      const response = await axios.get(`${API}/sops/${deptId}`);
      setSops(response.data);
    } catch (error) {
      console.error('Error fetching SOPs:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredSOPs = sops.filter(sop =>
    sop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sop.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sop.sops.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search SOPs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            data-testid="search-sops"
          />
        </div>
      </div>

      {/* SOPs List */}
      <div className="space-y-4">
        {filteredSOPs.map((sopCategory) => (
          <div
            key={sopCategory.id}
            className="bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors"
            data-testid={`sop-category-${sopCategory.category}`}
          >
            <div
              className="p-6 cursor-pointer"
              onClick={() => toggleCategory(sopCategory.category)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Category {sopCategory.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">{sopCategory.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {sopCategory.sops.length} SOP{sopCategory.sops.length !== 1 ? 's' : ''} in this category
                  </p>
                </div>
                <button className="ml-4 text-gray-400 hover:text-gray-600">
                  {expandedCategories[sopCategory.category] ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {expandedCategories[sopCategory.category] && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="mt-4 space-y-3">
                  {sopCategory.sops.map((sop, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      data-testid={`sop-${sop.code}`}
                    >
                      <FileText className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-sm text-indigo-600 font-semibold">
                            {sop.code}
                          </span>
                          <span className="text-gray-900">{sop.name}</span>
                        </div>
                      </div>
                      <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium ml-4">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredSOPs.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">No SOPs found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default SOPsTab;