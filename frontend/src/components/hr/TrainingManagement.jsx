import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, PlusCircle, BookOpen, Calendar, Users, Clock, Award, Eye, Edit, Trash2, CheckCircle2,
  PlayCircle, AlertCircle, Download, TrendingUp, Target, Shield, Activity, Heart, Lock, 
  Monitor, MessageSquare, Globe, Zap, Star, ChevronRight, Video, FileText, Headphones, 
  ExternalLink, BarChart, RefreshCw, Mail, User, MapPin, Phone, X
} from 'lucide-react';

const TrainingManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [activeView, setActiveView] = useState('catalog');

  // Comprehensive Training Programs (Based on By-Laws Section 9)
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

  const filteredTrainings = trainings.filter(training => {
    const matchesSearch = training.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         training.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || training.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Training & Development</h1>
          <p className="text-slate-600 mt-1">Manage employee training programs and certifications</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center shadow-lg">
          <PlusCircle className="w-5 h-5 mr-2" />
          Create Training
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by training title or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-12 pr-8 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 appearance-none cursor-pointer min-w-[200px] bg-white"
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-slate-900">{trainings.length}</h3>
          <p className="text-sm text-slate-600">Total Programs</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-slate-900">{trainings.reduce((sum, t) => sum + t.enrolled, 0)}</h3>
          <p className="text-sm text-slate-600">Total Enrolled</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-slate-900">{trainings.filter(t => t.status === 'Completed').length}</h3>
          <p className="text-sm text-slate-600">Completed</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-slate-900">{trainings.filter(t => t.type === 'Certification').length}</h3>
          <p className="text-sm text-slate-600">Certifications</p>
        </div>
      </div>

      {/* Training Programs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTrainings.map((training) => (
          <div key={training.id} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 flex-1">{training.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ml-2 ${
                    training.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    training.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {training.status}
                  </span>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${typeColors[training.type] || 'bg-slate-100 text-slate-700'}`}>
                  {training.type}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center text-sm text-slate-600">
                <BookOpen className="w-4 h-4 mr-2 text-slate-400" />
                {training.department}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Clock className="w-4 h-4 mr-2 text-slate-400" />
                Duration: {training.duration}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                {new Date(training.startDate).toLocaleDateString()} - {new Date(training.endDate).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Users className="w-4 h-4 mr-2 text-slate-400" />
                Trainer: {training.trainer}
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-700">Enrollment</span>
                <span className="text-sm font-bold text-blue-600">{training.enrolled} / {training.capacity}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all" 
                  style={{ width: `${(training.enrolled / training.capacity) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                {training.capacity - training.enrolled} seats remaining
              </p>
            </div>

            <div className="flex space-x-2">
              <button 
                onClick={() => setSelectedTraining(training)}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold flex items-center justify-center"
              >
                <Eye className="w-4 h-4 mr-1" />
                View Details
              </button>
              <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
              <button className="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Training Details Modal */}
      {selectedTraining && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedTraining(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{selectedTraining.title}</h2>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[selectedTraining.type]}`}>
                    {selectedTraining.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedTraining.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    selectedTraining.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {selectedTraining.status}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-2">{selectedTraining.id}</p>
              </div>
              <button onClick={() => setSelectedTraining(null)} className="text-slate-400 hover:text-slate-600 text-2xl">
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Department</p>
                <p className="text-sm font-medium text-slate-900">{selectedTraining.department}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Duration</p>
                <p className="text-sm font-medium text-slate-900">{selectedTraining.duration}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Start Date</p>
                <p className="text-sm font-medium text-slate-900">{new Date(selectedTraining.startDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">End Date</p>
                <p className="text-sm font-medium text-slate-900">{new Date(selectedTraining.endDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Trainer</p>
                <p className="text-sm font-medium text-slate-900">{selectedTraining.trainer}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Enrollment</p>
                <p className="text-sm font-medium text-slate-900">{selectedTraining.enrolled} / {selectedTraining.capacity}</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-slate-900 mb-3">Training Overview</h3>
              <p className="text-sm text-slate-700 mb-4">
                This training program on {selectedTraining.title} is designed to enhance employee skills and knowledge.
                It is a {selectedTraining.type.toLowerCase()} program for {selectedTraining.department}.
              </p>
              <h4 className="font-semibold text-slate-900 mb-2">Learning Objectives:</h4>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 mb-4">
                <li>Understand core concepts and principles</li>
                <li>Develop practical skills through hands-on exercises</li>
                <li>Apply knowledge to real-world scenarios</li>
                <li>Achieve certification standards (if applicable)</li>
              </ul>
              <h4 className="font-semibold text-slate-900 mb-2">Prerequisites:</h4>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Current hospital employee</li>
                <li>Relevant department experience</li>
                <li>Basic knowledge of hospital procedures</li>
              </ul>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                View Participants
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Enroll Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingManagement;