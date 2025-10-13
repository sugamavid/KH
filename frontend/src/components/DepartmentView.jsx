import React, { useState, useEffect } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { FileText, BookOpen, FolderOpen, Wrench } from 'lucide-react';
import ByLawsTab from './ByLawsTab';
import SOPsTab from './SOPsTab';
import AnnexuresTab from './AnnexuresTab';
import ToolsTab from './ToolsTab';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const DepartmentView = () => {
  const { deptId } = useParams();
  const [department, setDepartment] = useState(null);
  const [activeTab, setActiveTab] = useState('bylaws');
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
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading department...</p>
        </div>
      </div>
    );
  }

  if (!department) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Department not found</p>
      </div>
    );
  }

  const tabs = [
    { id: 'bylaws', name: 'By-Laws', icon: FileText, count: department.stats.bylaws },
    { id: 'sops', name: 'SOPs', icon: BookOpen, count: department.stats.sops },
    { id: 'annexures', name: 'Forms & Annexures', icon: FolderOpen, count: department.stats.annexures },
    { id: 'tools', name: 'Tools', icon: Wrench, count: department.stats.tools }
  ];

  return (
    <div className="space-y-6">
      {/* Department Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
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
              <div className="flex items-center justify-between mb-2">
                <tab.icon className="w-6 h-6 text-gray-400" />
                <span className="text-2xl font-bold text-gray-900">{tab.count}</span>
              </div>
              <p className="text-sm text-gray-600">{tab.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
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

        {/* Tab Content */}
        <div className="p-6">
          {!department.populated ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Coming Soon</h3>
              <p className="text-gray-600">
                Documentation for {department.name} is currently being prepared.
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
    </div>
  );
};

export default DepartmentView;