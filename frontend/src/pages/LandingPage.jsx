import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Building2, Search, TrendingUp, FileText, Wrench } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LandingPage = () => {
  const [departments, setDepartments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${API}/departments`);
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getIconColor = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600',
      pink: 'bg-pink-100 text-pink-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      teal: 'bg-teal-100 text-teal-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      cyan: 'bg-cyan-100 text-cyan-600',
      rose: 'bg-rose-100 text-rose-600',
      lime: 'bg-lime-100 text-lime-600',
      amber: 'bg-amber-100 text-amber-600',
      slate: 'bg-slate-100 text-slate-600',
      violet: 'bg-violet-100 text-violet-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

  const totalStats = departments.reduce((acc, dept) => ({
    bylaws: acc.bylaws + dept.stats.bylaws,
    sops: acc.sops + dept.stats.sops,
    annexures: acc.annexures + dept.stats.annexures,
    tools: acc.tools + dept.stats.tools
  }), { bylaws: 0, sops: 0, annexures: 0, tools: 0 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="gradient-bg text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Koyili Hospital</h1>
          </div>
          <p className="text-center text-lg md:text-xl text-indigo-100 mb-8">
            Department Management Dashboard
          </p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center">
              <FileText className="w-8 h-8 mx-auto mb-2" />
              <p className="text-3xl font-bold">{totalStats.bylaws}</p>
              <p className="text-sm text-indigo-100">By-Laws</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center">
              <FileText className="w-8 h-8 mx-auto mb-2" />
              <p className="text-3xl font-bold">{totalStats.sops}</p>
              <p className="text-sm text-indigo-100">SOPs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center">
              <FileText className="w-8 h-8 mx-auto mb-2" />
              <p className="text-3xl font-bold">{totalStats.annexures}</p>
              <p className="text-sm text-indigo-100">Forms</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center">
              <Wrench className="w-8 h-8 mx-auto mb-2" />
              <p className="text-3xl font-bold">{totalStats.tools}</p>
              <p className="text-sm text-indigo-100">Tools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search departments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              data-testid="search-departments"
            />
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Departments</h2>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600">Loading departments...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepartments.map((dept) => (
              <div
                key={dept.id}
                onClick={() => navigate(`/department/${dept.id}`)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer card-hover overflow-hidden"
                data-testid={`dept-card-${dept.id}`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-lg ${getIconColor(dept.color)} flex items-center justify-center`}>
                      <Building2 className="w-7 h-7" />
                    </div>
                    {dept.populated && (
                      <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                        Active
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dept.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">By-Laws</p>
                      <p className="text-lg font-bold text-gray-800">{dept.stats.bylaws}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">SOPs</p>
                      <p className="text-lg font-bold text-gray-800">{dept.stats.sops}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Forms</p>
                      <p className="text-lg font-bold text-gray-800">{dept.stats.annexures}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Tools</p>
                      <p className="text-lg font-bold text-gray-800">{dept.stats.tools}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center text-indigo-600 font-medium">
                    <span className="text-sm">View Dashboard</span>
                    <TrendingUp className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredDepartments.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-600">No departments found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;