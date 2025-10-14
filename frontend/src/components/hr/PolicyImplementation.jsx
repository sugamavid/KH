import React, { useState } from 'react';
import { 
  X, CheckCircle, Clock, Users, AlertCircle, ChevronRight, 
  PlayCircle, PauseCircle, Calendar, FileText, Target, Zap,
  TrendingUp, Filter, Search, Plus, Edit, Trash2, MoreVertical,
  BookOpen, Shield, Award, UserCheck, Building, Scale, Briefcase,
  ClipboardCheck, Info, AlertTriangle, CheckSquare, ArrowRight,
  Download, Printer, Eye, ChevronDown, List, GitBranch
} from 'lucide-react';

const PolicyImplementation = ({ onClose, onNavigateToSection }) => {
  const [activePhase, setActivePhase] = useState('planning');
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  // Implementation projects
  const projects = [
    {
      id: 'IMPL-001',
      policy: 'Remote Work Policy',
      section: 'section10',
      status: 'in_progress',
      phase: 'implementation',
      progress: 65,
      startDate: '2024-01-15',
      targetDate: '2024-03-31',
      owner: 'HR Director',
      team: ['HR Manager', 'IT Head', 'Department Heads'],
      tasks: {
        planning: { total: 8, completed: 8, status: 'completed' },
        preparation: { total: 12, completed: 12, status: 'completed' },
        implementation: { total: 15, completed: 10, status: 'in_progress' },
        monitoring: { total: 6, completed: 0, status: 'pending' }
      },
      milestones: [
        { name: 'Policy Approval', date: '2024-01-20', status: 'completed' },
        { name: 'Infrastructure Setup', date: '2024-02-15', status: 'completed' },
        { name: 'Pilot Program', date: '2024-03-01', status: 'in_progress' },
        { name: 'Full Rollout', date: '2024-03-31', status: 'pending' }
      ]
    },
    {
      id: 'IMPL-002',
      policy: 'DEI Policy Enhancement',
      section: 'section5',
      status: 'in_progress',
      phase: 'preparation',
      progress: 40,
      startDate: '2024-02-01',
      targetDate: '2024-04-30',
      owner: 'DEI Coordinator',
      team: ['HR Team', 'Legal Counsel', 'All Department Heads'],
      tasks: {
        planning: { total: 6, completed: 6, status: 'completed' },
        preparation: { total: 10, completed: 4, status: 'in_progress' },
        implementation: { total: 12, completed: 0, status: 'pending' },
        monitoring: { total: 5, completed: 0, status: 'pending' }
      },
      milestones: [
        { name: 'Baseline Assessment', date: '2024-02-10', status: 'completed' },
        { name: 'Training Development', date: '2024-03-01', status: 'in_progress' },
        { name: 'Staff Training', date: '2024-03-31', status: 'pending' },
        { name: 'Policy Launch', date: '2024-04-30', status: 'pending' }
      ]
    },
    {
      id: 'IMPL-003',
      policy: 'Performance Management System',
      section: 'section8',
      status: 'planning',
      phase: 'planning',
      progress: 25,
      startDate: '2024-02-15',
      targetDate: '2024-06-30',
      owner: 'HR Director',
      team: ['Performance Team', 'Department Heads', 'IT Support'],
      tasks: {
        planning: { total: 10, completed: 3, status: 'in_progress' },
        preparation: { total: 14, completed: 0, status: 'pending' },
        implementation: { total: 18, completed: 0, status: 'pending' },
        monitoring: { total: 8, completed: 0, status: 'pending' }
      },
      milestones: [
        { name: 'System Selection', date: '2024-03-01', status: 'in_progress' },
        { name: 'Configuration', date: '2024-04-15', status: 'pending' },
        { name: 'Manager Training', date: '2024-05-31', status: 'pending' },
        { name: 'Go Live', date: '2024-06-30', status: 'pending' }
      ]
    },
    {
      id: 'IMPL-004',
      policy: 'Workplace Safety Protocol',
      section: 'section13',
      status: 'completed',
      phase: 'monitoring',
      progress: 100,
      startDate: '2023-11-01',
      targetDate: '2024-01-31',
      owner: 'Safety Officer',
      team: ['Facilities', 'HR', 'Department Supervisors'],
      tasks: {
        planning: { total: 7, completed: 7, status: 'completed' },
        preparation: { total: 9, completed: 9, status: 'completed' },
        implementation: { total: 11, completed: 11, status: 'completed' },
        monitoring: { total: 4, completed: 4, status: 'completed' }
      },
      milestones: [
        { name: 'Risk Assessment', date: '2023-11-15', status: 'completed' },
        { name: 'Equipment Procurement', date: '2023-12-10', status: 'completed' },
        { name: 'Staff Training', date: '2024-01-15', status: 'completed' },
        { name: 'Certification', date: '2024-01-31', status: 'completed' }
      ]
    }
  ];

  const phases = [
    { id: 'planning', name: 'Planning', icon: Target, color: 'blue' },
    { id: 'preparation', name: 'Preparation', icon: FileText, color: 'purple' },
    { id: 'implementation', name: 'Implementation', icon: Zap, color: 'orange' },
    { id: 'monitoring', name: 'Monitoring', icon: TrendingUp, color: 'green' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'green';
      case 'in_progress': return 'blue';
      case 'planning': return 'purple';
      case 'delayed': return 'red';
      default: return 'slate';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in_progress': return 'In Progress';
      case 'planning': return 'Planning';
      case 'delayed': return 'Delayed';
      default: return status;
    }
  };

  const renderProjectCard = (project) => {
    const statusColor = getStatusColor(project.status);
    
    return (
      <div
        key={project.id}
        onClick={() => setSelectedPolicy(project)}
        className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-slate-900">{project.policy}</h3>
              <span className={`px-2 py-1 rounded text-xs font-bold bg-${statusColor}-100 text-${statusColor}-700`}>
                {getStatusLabel(project.status)}
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">Project ID: {project.id}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-700">Overall Progress</span>
            <span className="text-sm font-bold text-blue-700">{project.progress}%</span>
          </div>
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Phase Indicators */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {phases.map((phase) => {
            const task = project.tasks[phase.id];
            return (
              <div key={phase.id} className={`text-center p-2 rounded-lg ${
                task.status === 'completed' ? 'bg-green-50 border border-green-200' :
                task.status === 'in_progress' ? 'bg-blue-50 border border-blue-200' :
                'bg-slate-50 border border-slate-200'
              }`}>
                <div className={`text-xs font-semibold mb-1 ${
                  task.status === 'completed' ? 'text-green-700' :
                  task.status === 'in_progress' ? 'text-blue-700' :
                  'text-slate-500'
                }`}>
                  {phase.name}
                </div>
                <div className="text-xs text-slate-600">{task.completed}/{task.total}</div>
              </div>
            );
          })}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200">
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-slate-500" />
            <span className="text-slate-600">{project.owner}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span className="text-slate-600">{new Date(project.targetDate).toLocaleDateString()}</span>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigateToSection(project.section);
            onClose();
          }}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
        >
          <FileText className="w-4 h-4" />
          View Policy
        </button>
      </div>
    );
  };

  const renderProjectDetails = () => {
    if (!selectedPolicy) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-1">{selectedPolicy.policy}</h3>
                <p className="text-blue-100">{selectedPolicy.id}</p>
              </div>
              <button
                onClick={() => setSelectedPolicy(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-160px)]">
            {/* Progress Overview */}
            <div className="mb-6 bg-blue-50 rounded-lg p-5 border border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-blue-900">Implementation Progress</h4>
                <span className="text-3xl font-bold text-blue-700">{selectedPolicy.progress}%</span>
              </div>
              <div className="w-full h-4 bg-blue-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600"
                  style={{ width: `${selectedPolicy.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Phases */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-slate-900 mb-4">Implementation Phases</h4>
              <div className="space-y-3">
                {phases.map((phase) => {
                  const PhaseIcon = phase.icon;
                  const task = selectedPolicy.tasks[phase.id];
                  const isActive = selectedPolicy.phase === phase.id;
                  
                  return (
                    <div key={phase.id} className={`p-4 rounded-lg border-2 ${
                      isActive ? 'border-blue-500 bg-blue-50' : 'border-slate-200'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 bg-${phase.color}-100 rounded-lg`}>
                            <PhaseIcon className={`w-5 h-5 text-${phase.color}-600`} />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900">{phase.name}</div>
                            <div className="text-sm text-slate-600">{task.completed} of {task.total} tasks completed</div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          task.status === 'completed' ? 'bg-green-100 text-green-700' :
                          task.status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {task.status === 'completed' ? 'Completed' :
                           task.status === 'in_progress' ? 'In Progress' : 'Pending'}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-${phase.color}-600`}
                          style={{ width: `${(task.completed / task.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Milestones */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-slate-900 mb-4">Key Milestones</h4>
              <div className="space-y-2">
                {selectedPolicy.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      milestone.status === 'completed' ? 'bg-green-100' :
                      milestone.status === 'in_progress' ? 'bg-blue-100' :
                      'bg-slate-200'
                    }`}>
                      {milestone.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : milestone.status === 'in_progress' ? (
                        <PlayCircle className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Clock className="w-5 h-5 text-slate-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900">{milestone.name}</div>
                      <div className="text-sm text-slate-600">{new Date(milestone.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="mb-6 bg-slate-50 rounded-lg p-5">
              <h4 className="text-sm font-bold text-slate-700 mb-3">Implementation Team</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                    Owner
                  </span>
                  <span className="text-slate-900 font-semibold">{selectedPolicy.owner}</span>
                </div>
                {selectedPolicy.team.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm">
                      Member
                    </span>
                    <span className="text-slate-700">{member}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-sm text-green-600 mb-1">Start Date</div>
                <div className="text-lg font-bold text-green-900">
                  {new Date(selectedPolicy.startDate).toLocaleDateString()}
                </div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="text-sm text-orange-600 mb-1">Target Date</div>
                <div className="text-lg font-bold text-orange-900">
                  {new Date(selectedPolicy.targetDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 flex gap-3">
            <button
              onClick={() => {
                onNavigateToSection(selectedPolicy.section);
                setSelectedPolicy(null);
                onClose();
              }}
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View Related Policy
            </button>
            <button
              onClick={() => setSelectedPolicy(null)}
              className="px-4 py-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Policy Implementation</h2>
                  <p className="text-blue-100">Guided policy rollout and execution</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{projects.length}</div>
                <div className="text-xs text-blue-100">Total Projects</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">
                  {projects.filter(p => p.status === 'in_progress').length}
                </div>
                <div className="text-xs text-blue-100">Active</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">
                  {projects.filter(p => p.status === 'completed').length}
                </div>
                <div className="text-xs text-blue-100">Completed</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">
                  {Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%
                </div>
                <div className="text-xs text-blue-100">Avg Progress</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
            <div className="mb-4 text-sm text-slate-600">
              Showing {projects.length} implementation projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map(renderProjectCard)}
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedPolicy && renderProjectDetails()}
    </>
  );
};

export default PolicyImplementation;
