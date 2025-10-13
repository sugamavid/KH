import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, BookOpen, FolderOpen, Wrench, TrendingUp, Building2, ArrowRight, Activity } from 'lucide-react';

const DashboardHome = ({ departments }) => {
  const navigate = useNavigate();

  const totalStats = departments.reduce((acc, dept) => ({
    bylaws: acc.bylaws + dept.stats.bylaws,
    sops: acc.sops + dept.stats.sops,
    annexures: acc.annexures + dept.stats.annexures,
    tools: acc.tools + dept.stats.tools
  }), { bylaws: 0, sops: 0, annexures: 0, tools: 0 });

  const activeDepartments = departments.filter(d => d.populated);
  const upcomingDepartments = departments.filter(d => !d.populated);

  const statCards = [
    { title: 'By-Laws', value: totalStats.bylaws, icon: FileText, color: 'blue', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    { title: 'SOPs', value: totalStats.sops, icon: BookOpen, color: 'green', bgColor: 'bg-green-50', textColor: 'text-green-600' },
    { title: 'Forms & Annexures', value: totalStats.annexures, icon: FolderOpen, color: 'purple', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
    { title: 'Ready Reckoner Tools', value: totalStats.tools, icon: Wrench, color: 'orange', bgColor: 'bg-orange-50', textColor: 'text-orange-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome to Koyili Hospital Dashboard</h1>
            <p className="text-blue-100 text-lg">
              Comprehensive department management system for streamlined operations
            </p>
          </div>
          <Activity className="w-16 h-16 opacity-50" />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            data-testid={`stat-card-${index}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
              <TrendingUp className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Active Departments */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Active Departments</h2>
          <span className="text-sm text-gray-500">{activeDepartments.length} of {departments.length} departments</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeDepartments.map((dept) => (
            <div
              key={dept.id}
              onClick={() => navigate(`/department/${dept.id}`)}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer group"
              data-testid={`dept-card-${dept.id}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${dept.color}-100`}>
                  <Building2 className={`w-6 h-6 text-${dept.color}-600`} />
                </div>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                  Active
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {dept.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{dept.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">By-Laws</p>
                  <p className="text-lg font-bold text-gray-900">{dept.stats.bylaws}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">SOPs</p>
                  <p className="text-lg font-bold text-gray-900">{dept.stats.sops}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Forms</p>
                  <p className="text-lg font-bold text-gray-900">{dept.stats.annexures}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Tools</p>
                  <p className="text-lg font-bold text-gray-900">{dept.stats.tools}</p>
                </div>
              </div>
              
              <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                <span>View Dashboard</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Departments */}
      {upcomingDepartments.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
            <span className="text-sm text-gray-500">{upcomingDepartments.length} departments</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingDepartments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${dept.color}-100`}>
                    <Building2 className={`w-5 h-5 text-${dept.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900">{dept.name}</h3>
                    <span className="text-xs text-yellow-600">Coming Soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-blue-900">View All By-Laws</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <BookOpen className="w-5 h-5 text-green-600" />
            <span className="font-medium text-green-900">Browse SOPs</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <FolderOpen className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-purple-900">Download Forms</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;