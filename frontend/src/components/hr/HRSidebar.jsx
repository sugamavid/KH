import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Briefcase,
  GraduationCap,
  Scale,
  BarChart3,
  Calculator,
  FileText,
  FolderOpen,
  BookOpen
} from 'lucide-react';

const HRSidebar = ({ activeModule, setActiveModule }) => {
  const modules = [
    { id: 'dashboard', name: 'HR Dashboard', icon: LayoutDashboard, color: 'blue' },
    { id: 'employees', name: 'Employee Management', icon: Users, color: 'green' },
    { id: 'attendance', name: 'Attendance & Leave', icon: Clock, color: 'purple' },
    { id: 'payroll', name: 'Payroll Management', icon: DollarSign, color: 'emerald' },
    { id: 'documents', name: 'Document Management', icon: FolderOpen, color: 'indigo' },
    { id: 'performance', name: 'Performance Management', icon: TrendingUp, color: 'orange' },
    { id: 'recruitment', name: 'Recruitment', icon: Briefcase, color: 'pink' },
    { id: 'training', name: 'Training & Development', icon: GraduationCap, color: 'violet' },
    { id: 'bylaws', name: 'HR By-Laws', icon: Scale, color: 'red' },
    { id: 'sops', name: 'Standard Operating Procedures', icon: BookOpen, color: 'blue' },
    { id: 'annexures', name: 'Administrative Annexures', icon: FileText, color: 'purple' },
    { id: 'reckoner', name: 'Ready Reckoner', icon: Calculator, color: 'amber' },
    { id: 'reports', name: 'Reports & Analytics', icon: BarChart3, color: 'cyan' }
  ];

  return (
    <div className="w-72 bg-gradient-to-b from-slate-900 to-slate-800 h-screen border-r-2 border-slate-700 flex flex-col">
      <div className="p-4 border-b border-slate-700">
        <h2 className="text-white font-bold text-lg">HR Management System</h2>
        <p className="text-slate-400 text-xs mt-1">Human Resources Department</p>
      </div>
      
      <div className="p-4 space-y-1 overflow-y-auto flex-1">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => setActiveModule(module.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
              activeModule === module.id
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
            }`}
          >
            <module.icon className="w-5 h-5" />
            <span className="text-sm font-semibold">{module.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HRSidebar;
