import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, FileText, BookOpen, FolderOpen, Wrench, Search, Download, ChevronRight } from 'lucide-react';
import ByLawsTab from '../components/ByLawsTab';
import SOPsTab from '../components/SOPsTab';
import AnnexuresTab from '../components/AnnexuresTab';
import ToolsTab from '../components/ToolsTab';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const DepartmentDashboard = () => {
  const { deptId } = useParams();
  const navigate = useNavigate();
  const [department, setDepartment] = useState(null);
  const [activeTab, setActiveTab] = useState('bylaws');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDepartment();
  }, [deptId]);

  const fetchDepartment = async () => {
    try {
      const response = await axios.get(`${API}/departments/${deptId}`);
      setDepartment(response.data);
    } catch (error) {
      console.error('Error fetching department:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-gray-600">Loading department...</p>
        </div>
      </div>
    );
  }

  if (!department) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Department not found</p>
          <button
            onClick={() => navigate('/')}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'bylaws', name: 'By-Laws', icon: FileText, count: department.stats.bylaws },
    { id: 'sops', name: 'SOPs', icon: BookOpen, count: department.stats.sops },
    { id: 'annexures', name: 'Forms & Annexures', icon: FolderOpen, count: department.stats.annexures },
    { id: 'tools', name: 'Ready Reckoner Tools', icon: Wrench, count: department.stats.tools }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              data-testid="back-button"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Departments
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{department.name}</h1>
              <p className="text-gray-600 mt-1">{department.description}</p>
            </div>
            {!department.populated && (
              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
                Coming Soon
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            {tabs.map((tab) => (
              <div key={tab.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <tab.icon className="w-6 h-6 text-gray-400" />
                  <span className="text-2xl font-bold text-gray-900">{tab.count}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{tab.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                data-testid={`tab-${tab.id}`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                <span className="font-medium">{tab.name}</span>
                <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {!department.populated ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Coming Soon</h3>
            <p className="text-gray-600">
              By-Laws, SOPs, and Forms for {department.name} are currently being prepared.
            </p>
          </div>
        ) : (
          <div>
            {activeTab === 'bylaws' && <ByLawsTab deptId={deptId} />}
            {activeTab === 'sops' && <SOPsTab deptId={deptId} />}
            {activeTab === 'annexures' && <AnnexuresTab deptId={deptId} />}
            {activeTab === 'tools' && <ToolsTab deptId={deptId} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentDashboard;