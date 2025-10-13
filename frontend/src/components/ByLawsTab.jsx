import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronDown, ChevronUp, FileText, Search } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ByLawsTab = ({ deptId }) => {
  const [bylaws, setBylaws] = useState([]);
  const [expandedSections, setExpandedSections] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBylaws();
  }, [deptId]);

  const fetchBylaws = async () => {
    try {
      const response = await axios.get(`${API}/bylaws/${deptId}`);
      setBylaws(response.data);
    } catch (error) {
      console.error('Error fetching bylaws:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const filteredBylaws = bylaws.filter(bylaw =>
    bylaw.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bylaw.description.toLowerCase().includes(searchQuery.toLowerCase())
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
            placeholder="Search by-laws..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            data-testid="search-bylaws"
          />
        </div>
      </div>

      {/* By-Laws List */}
      <div className="space-y-4">
        {filteredBylaws.map((bylaw) => (
          <div
            key={bylaw.id}
            className="bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors"
            data-testid={`bylaw-${bylaw.section}`}
          >
            <div
              className="p-6 cursor-pointer"
              onClick={() => toggleSection(bylaw.section)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Section {bylaw.section}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">{bylaw.title}</h3>
                  </div>
                  <p className="text-gray-600 mt-2">{bylaw.description}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {bylaw.subsections} subsection{bylaw.subsections !== 1 ? 's' : ''}
                  </p>
                </div>
                <button className="ml-4 text-gray-400 hover:text-gray-600">
                  {expandedSections[bylaw.section] ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {expandedSections[bylaw.section] && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="mt-4 bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>This section covers:</strong> {bylaw.description}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Total subsections: {bylaw.subsections}
                  </p>
                  <div className="mt-4 flex space-x-3">
                    <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                      View Full Document
                    </button>
                    <button className="text-sm text-gray-600 hover:text-gray-700 font-medium">
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredBylaws.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">No by-laws found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default ByLawsTab;