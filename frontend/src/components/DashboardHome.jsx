import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  BookOpen, 
  FolderOpen, 
  Wrench, 
  TrendingUp, 
  Building2, 
  ArrowRight, 
  Activity,
  Shield,
  Clock,
  Users,
  CheckCircle2,
  BarChart3,
  Bell,
  Calendar,
  Download
} from 'lucide-react';

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
    { 
      title: 'By-Laws & Policies', 
      value: totalStats.bylaws, 
      icon: FileText, 
      color: 'blue',
      bgColor: 'from-blue-500 to-blue-600',
      lightBg: 'bg-blue-50',
      textColor: 'text-blue-600',
      change: '+12%',
      changeType: 'positive'
    },
    { 
      title: 'Standard Operating Procedures', 
      value: totalStats.sops, 
      icon: BookOpen, 
      color: 'green',
      bgColor: 'from-green-500 to-green-600',
      lightBg: 'bg-green-50',
      textColor: 'text-green-600',
      change: '+8%',
      changeType: 'positive'
    },
    { 
      title: 'Forms & Documents', 
      value: totalStats.annexures, 
      icon: FolderOpen, 
      color: 'purple',
      bgColor: 'from-purple-500 to-purple-600',
      lightBg: 'bg-purple-50',
      textColor: 'text-purple-600',
      change: '+15%',
      changeType: 'positive'
    },
    { 
      title: 'Operational Tools', 
      value: totalStats.tools, 
      icon: Wrench, 
      color: 'orange',
      bgColor: 'from-orange-500 to-orange-600',
      lightBg: 'bg-orange-50',
      textColor: 'text-orange-600',
      change: '+5%',
      changeType: 'positive'
    }
  ];

  const recentActivity = [
    { action: 'HR Policy Update', dept: 'Human Resources', time: '2 hours ago', icon: FileText, color: 'blue' },
    { action: 'New SOP Published', dept: 'Clinical Services', time: '5 hours ago', icon: BookOpen, color: 'green' },
    { action: 'Form Template Updated', dept: 'Finance', time: '1 day ago', icon: FolderOpen, color: 'purple' }
  ];

  const quickActions = [
    { title: 'Access All By-Laws', icon: FileText, color: 'blue', count: totalStats.bylaws },
    { title: 'Browse SOPs Library', icon: BookOpen, color: 'green', count: totalStats.sops },
    { title: 'Download Forms', icon: Download, color: 'purple', count: totalStats.annexures },
    { title: 'Use Calculators', icon: Wrench, color: 'orange', count: totalStats.tools }
  ];

  return (
    <div className="space-y-6">
      {/* Premium Welcome Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 shadow-xl border border-slate-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Welcome to Department Dashboard</h1>
            <p className="text-slate-300 text-lg">
              Comprehensive management system for <span className="font-semibold text-white">KOYILI HOSPITAL</span>
            </p>
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-2 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">System Active</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Last Updated: Today</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium">{departments.length} Departments</span>
              </div>
            </div>
          </div>
          <Activity className="w-32 h-32 text-white opacity-10" />
        </div>
      </div>

      {/* Premium Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all overflow-hidden"
            data-testid={`stat-card-${index}`}
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.bgColor}`}></div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 ${stat.lightBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-7 h-7 ${stat.textColor}`} />
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-600">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-slate-600">{stat.title}</p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <button className={`text-sm font-semibold ${stat.textColor} hover:underline flex items-center`}>
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Departments - Takes 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Active Departments</h2>
                <p className="text-slate-600 text-sm mt-1">
                  {activeDepartments.length} of {departments.length} departments fully operational
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <BarChart3 className="w-4 h-4 text-slate-400" />
                <span className="text-slate-600 font-medium">View Analytics</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeDepartments.map((dept) => (
                <div
                  key={dept.id}
                  onClick={() => navigate(`/department/${dept.id}`)}
                  className="group relative bg-gradient-to-br from-slate-50 to-white rounded-xl p-5 border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer"
                  data-testid={`dept-card-${dept.id}`}
                >
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center space-x-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Active</span>
                    </span>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${dept.color}-100 mb-4`}>
                    <Building2 className={`w-6 h-6 text-${dept.color}-600`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">{dept.description}</p>
                  
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900">{dept.stats.bylaws}</p>
                      <p className="text-xs text-slate-500">By-Laws</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900">{dept.stats.sops}</p>
                      <p className="text-xs text-slate-500">SOPs</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900">{dept.stats.annexures}</p>
                      <p className="text-xs text-slate-500">Forms</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900">{dept.stats.tools}</p>
                      <p className="text-xs text-slate-500">Tools</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-blue-600 font-semibold text-sm mt-4 group-hover:translate-x-1 transition-transform">
                    <span>Open Dashboard</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Takes 1 column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-600" />
              Quick Actions
            </h3>
            <div className="space-y-3">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white rounded-lg hover:from-blue-50 hover:to-blue-50 border border-slate-200 hover:border-blue-300 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-${action.color}-100 rounded-lg flex items-center justify-center`}>
                      <action.icon className={`w-5 h-5 text-${action.color}-600`} />
                    </div>
                    <span className="font-semibold text-slate-900 text-sm">{action.title}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-slate-500">{action.count}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <Bell className="w-5 h-5 mr-2 text-purple-600" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start space-x-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className={`w-10 h-10 bg-${activity.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <activity.icon className={`w-5 h-5 text-${activity.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900">{activity.action}</p>
                    <p className="text-xs text-slate-600">{activity.dept}</p>
                    <span className="text-xs text-slate-400 mt-1 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {activity.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border-2 border-green-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">System Status</h3>
              <div className="flex items-center space-x-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700 font-medium">All Systems</span>
                <span className="text-green-600 font-bold">Operational</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700 font-medium">Uptime</span>
                <span className="text-slate-900 font-bold">99.9%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700 font-medium">Last Backup</span>
                <span className="text-slate-900 font-bold">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Departments */}
      {upcomingDepartments.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Coming Soon</h2>
              <p className="text-slate-600 text-sm mt-1">{upcomingDepartments.length} departments in preparation</p>
            </div>
            <Calendar className="w-8 h-8 text-slate-400" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {upcomingDepartments.map((dept) => (
              <div
                key={dept.id}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 border border-slate-200 text-center"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${dept.color}-100 mx-auto mb-3`}>
                  <Building2 className={`w-6 h-6 text-${dept.color}-600`} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1 line-clamp-2">{dept.name}</h3>
                <span className="inline-block text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-semibold">
                  Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;