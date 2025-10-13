import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  Users, 
  DollarSign, 
  Stethoscope, 
  HeartPulse, 
  Briefcase, 
  Building, 
  Award, 
  Pill, 
  FlaskConical, 
  Scan, 
  Ambulance, 
  CalendarCheck, 
  Bed, 
  FolderOpen, 
  Computer,
  ChevronRight,
  TrendingUp,
  BarChart3
} from 'lucide-react';

const iconMap = {
  'users': Users,
  'dollar-sign': DollarSign,
  'stethoscope': Stethoscope,
  'heart-pulse': HeartPulse,
  'briefcase': Briefcase,
  'building': Building,
  'award': Award,
  'pill': Pill,
  'flask': FlaskConical,
  'scan': Scan,
  'ambulance': Ambulance,
  'calendar-check': CalendarCheck,
  'bed': Bed,
  'folder': FolderOpen,
  'computer': Computer
};

const Sidebar = ({ departments, isOpen, currentPath }) => {
  const navigate = useNavigate();

  const getIcon = (iconName) => {
    const Icon = iconMap[iconName] || FolderOpen;
    return Icon;
  };

  const isActive = (path) => {
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  return (
    <aside
      className={`fixed left-0 top-20 h-[calc(100vh-5rem)] bg-gradient-to-b from-slate-900 to-slate-800 transition-all duration-300 overflow-hidden border-r-2 border-slate-700 shadow-xl z-40 ${
        isOpen ? 'w-72' : 'w-0 lg:w-0'
      }`}
    >
      <div className={`${isOpen ? 'block' : 'hidden'} h-full flex flex-col`}>
        {/* Dashboard Home */}
        <div className="p-4 border-b border-slate-700">
          <button
            onClick={() => navigate('/')}
            className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all font-semibold ${
              currentPath === '/' 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                : 'text-slate-300 hover:bg-slate-700/50'
            }`}
            data-testid="nav-home"
          >
            <Home className="w-5 h-5" />
            <span>Dashboard Home</span>
            {currentPath === '/' && <ChevronRight className="w-4 h-4 ml-auto" />}
          </button>
        </div>

        {/* Departments Section */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="mb-3 px-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
              Hospital Departments
            </h3>
            <p className="text-xs text-slate-500">{departments.length} Total Departments</p>
          </div>
          
          <div className="space-y-1">
            {departments.map((dept) => {
              const Icon = getIcon(dept.icon);
              const deptPath = `/department/${dept.id}`;
              const active = isActive(deptPath);
              
              return (
                <button
                  key={dept.id}
                  onClick={() => navigate(deptPath)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${
                    active
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                  data-testid={`nav-dept-${dept.id}`}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      active ? 'bg-white/20' : 'bg-slate-700/50 group-hover:bg-slate-700'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="text-sm font-semibold leading-tight">{dept.name}</p>
                      {dept.populated && (
                        <p className="text-xs opacity-75 mt-0.5">Active</p>
                      )}
                    </div>
                  </div>
                  
                  {active && <ChevronRight className="w-4 h-4" />}
                  {!active && dept.populated && (
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Stats Footer */}
        <div className="p-4 border-t border-slate-700 bg-slate-800/50">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Quick Stats</h3>
              <BarChart3 className="w-4 h-4 text-slate-400" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Total Departments</span>
                <span className="text-sm font-bold text-white">{departments.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Active</span>
                <span className="text-sm font-bold text-green-400">
                  {departments.filter(d => d.populated).length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Coming Soon</span>
                <span className="text-sm font-bold text-yellow-400">
                  {departments.filter(d => !d.populated).length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;