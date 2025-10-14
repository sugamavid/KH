import React, { useState, useMemo } from 'react';
import { 
  X, BookOpen, Search, Filter, Calendar, Clock, Award, CheckCircle,
  PlayCircle, Users, AlertCircle, Download, TrendingUp, Target,
  Shield, Activity, Heart, Lock, Monitor, MessageSquare, Globe,
  Zap, Star, ChevronRight, Video, FileText, Headphones, ExternalLink,
  BarChart, RefreshCw, Mail, User, MapPin, Phone
} from 'lucide-react';

const TrainingHub = ({ onClose, onNavigateToSection }) => {
  const [activeView, setActiveView] = useState('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTraining, setSelectedTraining] = useState(null);

  // Training programs based on By-Laws Section 9
  const trainingPrograms = [
    {
      id: 'TRN-001',
      title: 'HIPAA Compliance Training',
      category: 'Compliance & Regulatory',
      icon: Lock,
      color: 'purple',
      duration: '2 hours',
      type: 'mandatory',
      status: 'completed',
      progress: 100,
      deadline: '2024-01-31',
      instructor: 'Compliance Officer',
      nextSession: '2024-04-15',
      enrolled: 524,
      rating: 4.8,
      description: 'Essential training on patient data protection and HIPAA regulations',
      completionDate: '2024-01-20',
      certificateAvailable: true,
      relatedSection: 'section15'
    },
    {
      id: 'TRN-002',
      title: 'Fire Safety and Emergency Procedures',
      category: 'Safety & Emergency',
      icon: Shield,
      color: 'red',
      duration: '3 hours',
      type: 'mandatory',
      status: 'in_progress',
      progress: 67,
      deadline: '2024-03-15',
      instructor: 'Safety Officer',
      nextSession: '2024-03-01',
      enrolled: 489,
      rating: 4.9,
      description: 'Comprehensive fire safety protocols and emergency response procedures',
      completionDate: null,
      certificateAvailable: false,
      relatedSection: 'section13'
    },
    {
      id: 'TRN-003',
      title: 'CPR and Basic Life Support (BLS)',
      category: 'Clinical & Medical',
      icon: Activity,
      color: 'red',
      duration: '4 hours',
      type: 'mandatory',
      status: 'not_started',
      progress: 0,
      deadline: '2024-03-30',
      instructor: 'Dr. Sarah Johnson',
      nextSession: '2024-02-20',
      enrolled: 312,
      rating: 4.9,
      description: 'Hands-on CPR training and basic life support techniques',
      completionDate: null,
      certificateAvailable: false,
      relatedSection: 'section13'
    },
    {
      id: 'TRN-004',
      title: 'Advanced Cardiac Life Support (ACLS)',
      category: 'Clinical & Medical',
      icon: Heart,
      color: 'pink',
      duration: '8 hours',
      type: 'optional',
      status: 'completed',
      progress: 100,
      deadline: null,
      instructor: 'Dr. Michael Chen',
      nextSession: '2024-04-10',
      enrolled: 156,
      rating: 4.7,
      description: 'Advanced cardiac emergency response and life support',
      completionDate: '2024-01-10',
      certificateAvailable: true,
      relatedSection: 'section9'
    },
    {
      id: 'TRN-005',
      title: 'Code of Conduct and Professional Ethics',
      category: 'Compliance & Regulatory',
      icon: Shield,
      color: 'blue',
      duration: '1.5 hours',
      type: 'mandatory',
      status: 'completed',
      progress: 100,
      deadline: '2024-02-15',
      instructor: 'HR Compliance Committee',
      nextSession: '2024-08-15',
      enrolled: 524,
      rating: 4.6,
      description: 'Professional ethics, conduct standards, and workplace behavior',
      completionDate: '2024-02-01',
      certificateAvailable: true,
      relatedSection: 'section3'
    },
    {
      id: 'TRN-006',
      title: 'Data Protection and Cybersecurity',
      category: 'Compliance & Regulatory',
      icon: Lock,
      color: 'indigo',
      duration: '2 hours',
      type: 'mandatory',
      status: 'in_progress',
      progress: 45,
      deadline: '2024-03-20',
      instructor: 'IT Security Team',
      nextSession: '2024-03-05',
      enrolled: 498,
      rating: 4.5,
      description: 'Digital security, data protection, and cybersecurity best practices',
      completionDate: null,
      certificateAvailable: false,
      relatedSection: 'section17'
    },
    {
      id: 'TRN-007',
      title: 'Patient Care Standards and Quality',
      category: 'Clinical & Medical',
      icon: Activity,
      color: 'blue',
      duration: '3 hours',
      type: 'mandatory',
      status: 'completed',
      progress: 100,
      deadline: '2024-02-28',
      instructor: 'Medical Director',
      nextSession: '2024-05-15',
      enrolled: 387,
      rating: 4.8,
      description: 'Patient interaction, care standards, and quality protocols',
      completionDate: '2024-02-10',
      certificateAvailable: true,
      relatedSection: 'section6'
    },
    {
      id: 'TRN-008',
      title: 'Leadership and Management Skills',
      category: 'Professional Development',
      icon: Users,
      color: 'orange',
      duration: '6 hours',
      type: 'optional',
      status: 'not_started',
      progress: 0,
      deadline: null,
      instructor: 'HR Development Team',
      nextSession: '2024-03-25',
      enrolled: 89,
      rating: 4.7,
      description: 'Leadership fundamentals, team management, and decision-making',
      completionDate: null,
      certificateAvailable: false,
      relatedSection: 'section9'
    },
    {
      id: 'TRN-009',
      title: 'Diversity, Equity, and Inclusion (DEI)',
      category: 'Professional Development',
      icon: Heart,
      color: 'pink',
      duration: '2 hours',
      type: 'mandatory',
      status: 'completed',
      progress: 100,
      deadline: '2024-02-10',
      instructor: 'DEI Coordinator',
      nextSession: '2024-08-10',
      enrolled: 524,
      rating: 4.9,
      description: 'Cultural sensitivity, inclusion practices, and diversity awareness',
      completionDate: '2024-02-05',
      certificateAvailable: true,
      relatedSection: 'section5'
    },
    {
      id: 'TRN-010',
      title: 'Effective Communication Skills',
      category: 'Soft Skills',
      icon: MessageSquare,
      color: 'teal',
      duration: '4 hours',
      type: 'optional',
      status: 'in_progress',
      progress: 30,
      deadline: null,
      instructor: 'Communications Expert',
      nextSession: '2024-03-12',
      enrolled: 143,
      rating: 4.6,
      description: 'Communication techniques, active listening, and conflict resolution',
      completionDate: null,
      certificateAvailable: false,
      relatedSection: 'section19'
    },
    {
      id: 'TRN-011',
      title: 'Infection Control and Prevention',
      category: 'Clinical & Medical',
      icon: Shield,
      color: 'green',
      duration: '2.5 hours',
      type: 'mandatory',
      status: 'not_started',
      progress: 0,
      deadline: '2024-03-25',
      instructor: 'Infection Control Team',
      nextSession: '2024-02-28',
      enrolled: 412,
      rating: 4.8,
      description: 'Infection prevention protocols, hygiene standards, and PPE usage',
      completionDate: null,
      certificateAvailable: false,
      relatedSection: 'section13'
    },
    {
      id: 'TRN-012',
      title: 'Performance Management and Appraisals',
      category: 'Professional Development',
      icon: TrendingUp,
      color: 'purple',
      duration: '3 hours',
      type: 'optional',
      status: 'not_started',
      progress: 0,
      deadline: null,
      instructor: 'HR Manager',
      nextSession: '2024-04-05',
      enrolled: 67,
      rating: 4.5,
      description: 'Performance evaluation, goal setting, and feedback techniques',
      completionDate: null,
      certificateAvailable: false,
      relatedSection: 'section8'
    },
    {
      id: 'TRN-013',
      title: 'Mental Health First Aid',
      category: 'Safety & Emergency',
      icon: Heart,
      color: 'pink',
      duration: '5 hours',
      type: 'optional',
      status: 'not_started',
      progress: 0,
      deadline: null,
      instructor: 'Mental Health Specialist',
      nextSession: '2024-03-18',
      enrolled: 98,
      rating: 4.9,
      description: 'Mental health awareness, crisis intervention, and support techniques',
      completionDate: null,
      certificateAvailable: false,
      relatedSection: 'section20'
    },
    {
      id: 'TRN-014',
      title: 'Environmental Sustainability Practices',
      category: 'Compliance & Regulatory',
      icon: Globe,
      color: 'green',
      duration: '1.5 hours',
      type: 'mandatory',
      status: 'completed',
      progress: 100,
      deadline: '2024-02-20',
      instructor: 'Sustainability Coordinator',
      nextSession: '2024-08-20',
      enrolled: 524,
      rating: 4.4,
      description: 'Green practices, waste management, and sustainability initiatives',
      completionDate: '2024-02-08',
      certificateAvailable: true,
      relatedSection: 'section18'
    },
    {
      id: 'TRN-015',
      title: 'Time Management and Productivity',
      category: 'Soft Skills',
      icon: Clock,
      color: 'blue',
      duration: '2 hours',
      type: 'optional',
      status: 'not_started',
      progress: 0,
      deadline: null,
      instructor: 'Productivity Coach',
      nextSession: '2024-03-22',
      enrolled: 124,
      rating: 4.7,
      description: 'Time management strategies, prioritization, and productivity tools',
      completionDate: null,
      certificateAvailable: false,
      relatedSection: 'section27'
    },
    {
      id: 'TRN-016',
      title: 'Grievance Handling and Conflict Resolution',
      category: 'Professional Development',
      icon: MessageSquare,
      color: 'orange',
      duration: '3 hours',
      type: 'optional',
      status: 'not_started',
      progress: 0,
      deadline: null,
      instructor: 'Grievance Officer',
      nextSession: '2024-04-08',
      enrolled: 54,
      rating: 4.6,
      description: 'Conflict management, mediation techniques, and grievance procedures',
      completionDate: null,
      certificateAvailable: false,
      relatedSection: 'section12'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: trainingPrograms.length },
    { id: 'Clinical & Medical', name: 'Clinical & Medical', icon: Activity, count: trainingPrograms.filter(t => t.category === 'Clinical & Medical').length },
    { id: 'Compliance & Regulatory', name: 'Compliance & Regulatory', icon: Shield, count: trainingPrograms.filter(t => t.category === 'Compliance & Regulatory').length },
    { id: 'Safety & Emergency', name: 'Safety & Emergency', icon: AlertCircle, count: trainingPrograms.filter(t => t.category === 'Safety & Emergency').length },
    { id: 'Professional Development', name: 'Professional Development', icon: TrendingUp, count: trainingPrograms.filter(t => t.category === 'Professional Development').length },
    { id: 'Soft Skills', name: 'Soft Skills', icon: MessageSquare, count: trainingPrograms.filter(t => t.category === 'Soft Skills').length }
  ];

  const types = [
    { id: 'all', name: 'All Types', count: trainingPrograms.length },
    { id: 'mandatory', name: 'Mandatory', count: trainingPrograms.filter(t => t.type === 'mandatory').length },
    { id: 'optional', name: 'Optional', count: trainingPrograms.filter(t => t.type === 'optional').length }
  ];

  const views = [
    { id: 'catalog', name: 'Browse Catalog', icon: BookOpen },
    { id: 'my_trainings', name: 'My Trainings', icon: User },
    { id: 'certifications', name: 'Certifications', icon: Award },
    { id: 'schedule', name: 'Schedule', icon: Calendar }
  ];

  const stats = {
    completed: trainingPrograms.filter(t => t.status === 'completed').length,
    inProgress: trainingPrograms.filter(t => t.status === 'in_progress').length,
    notStarted: trainingPrograms.filter(t => t.status === 'not_started').length,
    mandatory: trainingPrograms.filter(t => t.type === 'mandatory').length,
    certificates: trainingPrograms.filter(t => t.certificateAvailable).length
  };

  // Filter trainings
  const filteredTrainings = useMemo(() => {
    let filtered = trainingPrograms;

    // Filter by view
    if (activeView === 'my_trainings') {
      filtered = filtered.filter(t => t.status !== 'not_started');
    } else if (activeView === 'certifications') {
      filtered = filtered.filter(t => t.certificateAvailable);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(t => t.category === selectedCategory);
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(t => t.type === selectedType);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(t =>
        t.title.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.instructor.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedType, activeView]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'green';
      case 'in_progress': return 'blue';
      case 'not_started': return 'slate';
      default: return 'slate';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in_progress': return 'In Progress';
      case 'not_started': return 'Not Started';
      default: return status;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in_progress': return PlayCircle;
      case 'not_started': return Clock;
      default: return Clock;
    }
  };

  const handleTrainingClick = (training) => {
    setSelectedTraining(training);
  };

  const handleViewSection = (sectionId) => {
    onNavigateToSection(sectionId);
    onClose();
  };

  const renderTrainingCard = (training) => {
    const TrainingIcon = training.icon;
    const StatusIcon = getStatusIcon(training.status);
    const statusColor = getStatusColor(training.status);

    return (
      <div
        key={training.id}
        onClick={() => handleTrainingClick(training)}
        className="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-red-400 hover:shadow-lg transition-all cursor-pointer group"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3 flex-1">
            <div className={`p-3 bg-${training.color}-100 rounded-xl group-hover:bg-red-100 transition-colors`}>
              <TrainingIcon className={`w-6 h-6 text-${training.color}-600 group-hover:text-red-600 transition-colors`} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-slate-900 mb-1 group-hover:text-red-700 transition-colors line-clamp-2">
                {training.title}
              </h4>
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="text-xs text-slate-600">{training.id}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                  training.type === 'mandatory' 
                    ? 'bg-red-100 text-red-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {training.type === 'mandatory' ? 'MANDATORY' : 'OPTIONAL'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {training.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {training.enrolled} enrolled
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  {training.rating}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {training.status !== 'not_started' && (
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-slate-600">Progress</span>
              <span className="font-bold text-slate-900">{training.progress}%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-${statusColor}-600 transition-all`}
                style={{ width: `${training.progress}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <StatusIcon className={`w-4 h-4 text-${statusColor}-600`} />
            <span className={`text-sm font-semibold text-${statusColor}-700`}>
              {getStatusLabel(training.status)}
            </span>
          </div>
          {training.deadline && training.status !== 'completed' && (
            <div className="text-xs text-red-600 font-semibold">
              Due: {new Date(training.deadline).toLocaleDateString()}
            </div>
          )}
          {training.completionDate && (
            <div className="text-xs text-green-600 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              {new Date(training.completionDate).toLocaleDateString()}
            </div>
          )}
        </div>

        <div className="mt-3 flex gap-2">
          {training.status === 'not_started' ? (
            <button
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
            >
              <PlayCircle className="w-4 h-4" />
              Enroll Now
            </button>
          ) : training.status === 'completed' && training.certificateAvailable ? (
            <button
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
            >
              <Download className="w-4 h-4" />
              Download Certificate
            </button>
          ) : (
            <button
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              <PlayCircle className="w-4 h-4" />
              Continue
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderTrainingDetails = () => {
    if (!selectedTraining) return null;

    const TrainingIcon = selectedTraining.icon;
    const statusColor = getStatusColor(selectedTraining.status);
    const StatusIcon = getStatusIcon(selectedTraining.status);

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-br from-${selectedTraining.color}-500 to-${selectedTraining.color}-600 px-8 py-6 text-white`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                  <TrainingIcon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold">{selectedTraining.id}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                      selectedTraining.type === 'mandatory' 
                        ? 'bg-red-600' 
                        : 'bg-blue-600'
                    }`}>
                      {selectedTraining.type === 'mandatory' ? 'MANDATORY' : 'OPTIONAL'}
                    </span>
                    <span className={`px-2 py-0.5 bg-${statusColor}-600 rounded text-xs font-bold`}>
                      {getStatusLabel(selectedTraining.status)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{selectedTraining.title}</h3>
                  <div className="text-white/90">{selectedTraining.category}</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedTraining(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
            {/* Description */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-slate-900 mb-3">About This Training</h4>
              <p className="text-slate-700 leading-relaxed">{selectedTraining.description}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs">Duration</span>
                </div>
                <div className="font-semibold text-slate-900">{selectedTraining.duration}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-xs">Enrolled</span>
                </div>
                <div className="font-semibold text-slate-900">{selectedTraining.enrolled} students</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <User className="w-4 h-4" />
                  <span className="text-xs">Instructor</span>
                </div>
                <div className="font-semibold text-slate-900">{selectedTraining.instructor}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs">Next Session</span>
                </div>
                <div className="font-semibold text-slate-900">
                  {new Date(selectedTraining.nextSession).toLocaleDateString()}
                </div>
              </div>
              {selectedTraining.deadline && (
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <div className="flex items-center gap-2 text-red-600 mb-1">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-xs">Deadline</span>
                  </div>
                  <div className="font-semibold text-red-900">
                    {new Date(selectedTraining.deadline).toLocaleDateString()}
                  </div>
                </div>
              )}
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-600 mb-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-xs">Rating</span>
                </div>
                <div className="font-semibold text-slate-900">{selectedTraining.rating} / 5.0</div>
              </div>
            </div>

            {/* Progress (if applicable) */}
            {selectedTraining.status !== 'not_started' && (
              <div className="mb-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="text-sm font-bold text-blue-900 mb-3">Your Progress</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-700">Completion</span>
                  <span className="font-bold text-blue-900">{selectedTraining.progress}%</span>
                </div>
                <div className="w-full h-3 bg-blue-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600"
                    style={{ width: `${selectedTraining.progress}%` }}
                  ></div>
                </div>
                {selectedTraining.completionDate && (
                  <div className="mt-3 text-sm text-green-700 font-semibold flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Completed on {new Date(selectedTraining.completionDate).toLocaleDateString()}
                  </div>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              {selectedTraining.status === 'not_started' ? (
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  <PlayCircle className="w-5 h-5" />
                  Enroll in Training
                </button>
              ) : selectedTraining.status === 'completed' && selectedTraining.certificateAvailable ? (
                <>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    <Download className="w-5 h-5" />
                    Download Certificate
                  </button>
                  <button
                    onClick={() => handleViewSection(selectedTraining.relatedSection)}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    <FileText className="w-5 h-5" />
                    View Policy
                  </button>
                </>
              ) : (
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  <PlayCircle className="w-5 h-5" />
                  Continue Training
                </button>
              )}
            </div>
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
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Training Hub
                  </h2>
                  <p className="text-teal-100">Professional development and skill enhancement center</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-5 gap-3 mb-4">
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.completed}</div>
                <div className="text-xs text-teal-100">Completed</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.inProgress}</div>
                <div className="text-xs text-teal-100">In Progress</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.notStarted}</div>
                <div className="text-xs text-teal-100">Not Started</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.mandatory}</div>
                <div className="text-xs text-teal-100">Mandatory</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{stats.certificates}</div>
                <div className="text-xs text-teal-100">Certificates</div>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-600" />
              <input
                type="text"
                placeholder="Search trainings by title, instructor, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-white/30 bg-white/95 focus:outline-none focus:ring-2 focus:ring-white text-slate-900 placeholder-slate-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            {/* View Tabs */}
            <div className="flex gap-2 mt-4">
              {views.map((view) => {
                const ViewIcon = view.icon;
                return (
                  <button
                    key={view.id}
                    onClick={() => setActiveView(view.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                      activeView === view.id
                        ? 'bg-white text-teal-700 shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <ViewIcon className="w-4 h-4" />
                    {view.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filters */}
          <div className="px-8 py-4 bg-slate-50 border-b border-slate-200 flex gap-4 overflow-x-auto">
            <div className="flex gap-2">
              <span className="text-sm font-semibold text-slate-600 py-2">Category:</span>
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-teal-600 text-white shadow-lg'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <CatIcon className="w-4 h-4" />
                    {cat.name} ({cat.count})
                  </button>
                );
              })}
            </div>
          </div>

          <div className="px-8 py-3 bg-white border-b border-slate-200 flex gap-4">
            <div className="flex gap-2">
              <span className="text-sm font-semibold text-slate-600 py-2">Type:</span>
              {types.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedType === type.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {type.name} ({type.count})
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-slate-600">
                Showing {filteredTrainings.length} of {trainingPrograms.length} trainings
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm font-semibold border border-slate-200">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTrainings.map(renderTrainingCard)}
            </div>

            {filteredTrainings.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">No trainings found</p>
                <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Training Details Modal */}
      {selectedTraining && renderTrainingDetails()}
    </>
  );
};

export default TrainingHub;
