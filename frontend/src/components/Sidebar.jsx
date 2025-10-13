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
  ChevronRight
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
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 overflow-y-auto ${
        isOpen ? 'w-64' : 'w-0'
      }`}
    >
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <div className="p-4">
          <button
            onClick={() => navigate('/')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              currentPath === '/' 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            data-testid="nav-home"
          >
            <Home className="w-5 h-5" />
            <span>Dashboard Home</span>
          </button>
        </div>

        <div className="px-4 pb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
            Departments
          </h3>
          
          <div className="space-y-1">
            {departments.map((dept) => {
              const Icon = getIcon(dept.icon);
              const deptPath = `/department/${dept.id}`;
              const active = isActive(deptPath);
              
              return (
                <button
                  key={dept.id}
                  onClick={() => navigate(deptPath)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all group ${
                    active
                      ? 'bg-blue-50 text-blue-600 font-medium shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  data-testid={`nav-dept-${dept.id}`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${
                      active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                    }`} />
                    <span className="text-sm">{dept.name}</span>
                  </div>
                  
                  {dept.populated && (
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                  )}
                  
                  {active && (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Stats in Sidebar */}
        <div className="px-4 py-4 border-t border-gray-200">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
            Quick Stats
          </h3>
          <div className="space-y-2 px-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total Departments</span>
              <span className="font-semibold text-gray-900">{departments.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Active</span>
              <span className="font-semibold text-green-600">
                {departments.filter(d => d.populated).length}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Coming Soon</span>
              <span className="font-semibold text-yellow-600">
                {departments.filter(d => !d.populated).length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;