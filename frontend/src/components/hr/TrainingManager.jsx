import React, { useState } from 'react';
import { 
  X, BookOpen, Calendar, Award, Users, Clock, CheckCircle, 
  AlertCircle, Download, Printer, Search, Filter, TrendingUp,
  Play, Plus, Edit, Trash2, Eye, ChevronRight, ChevronDown,
  Target, BarChart, Star, Video, FileText, Globe, Zap,
  Bell, Mail, Settings, Upload
} from 'lucide-react';

const TrainingManager = ({ onClose, onNavigateToSection }) => {
  const [activeView, setActiveView] = useState('dashboard'); // dashboard, catalog, mytrainings, schedule, certificates, reports
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [expandedSession, setExpandedSession] = useState(null);

  // Mock training data
  const trainingPrograms = [
    { id: 'TRN-001', title: 'New Employee Orientation', category: 'Onboarding', type: 'mandatory', duration: '4 hours', instructor: 'HR Director', capacity: 25, enrolled: 24, nextSession: '2024-10-20', status: 'upcoming', completion: 0, rating: 4.8, byLawsSection: 'section2', description: 'Comprehensive orientation covering hospital policies, culture, and expectations' },
    { id: 'TRN-002', title: 'Code of Conduct Training', category: 'Ethics & Compliance', type: 'mandatory', duration: '2 hours', instructor: 'Compliance Officer', capacity: 30, enrolled: 28, nextSession: '2024-10-18', status: 'upcoming', completion: 0, rating: 4.9, byLawsSection: 'section6', description: 'Understanding ethical standards and professional conduct expectations' },
    { id: 'TRN-003', title: 'Workplace Safety Fundamentals', category: 'Safety & Health', type: 'mandatory', duration: '3 hours', instructor: 'Safety Officer', capacity: 30, enrolled: 30, nextSession: '2024-10-22', status: 'full', completion: 0, rating: 4.7, byLawsSection: 'section13', description: 'Essential safety protocols and emergency procedures' },
    { id: 'TRN-004', title: 'Data Privacy & HIPAA Compliance', category: 'Compliance', type: 'mandatory', duration: '2.5 hours', instructor: 'Legal Advisor', capacity: 35, enrolled: 32, nextSession: '2024-10-25', status: 'upcoming', completion: 0, rating: 4.6, byLawsSection: 'section14', description: 'Patient data protection and privacy regulations' },
    { id: 'TRN-005', title: 'Performance Management Best Practices', category: 'Professional Development', type: 'optional', duration: '3 hours', instructor: 'HR Manager', capacity: 20, enrolled: 15, nextSession: '2024-10-28', status: 'available', completion: 0, rating: 4.5, byLawsSection: 'section8', description: 'Effective performance evaluation and feedback techniques' },
    { id: 'TRN-006', title: 'Infection Control Protocols', category: 'Clinical Training', type: 'mandatory', duration: '2 hours', instructor: 'Infection Control Officer', capacity: 40, enrolled: 38, nextSession: '2024-10-19', status: 'upcoming', completion: 0, rating: 4.9, byLawsSection: 'section24', description: 'Prevention and control of healthcare-associated infections' },
    { id: 'TRN-007', title: 'Emergency Preparedness & Response', category: 'Safety & Health', type: 'mandatory', duration: '4 hours', instructor: 'Emergency Coordinator', capacity: 30, enrolled: 25, nextSession: '2024-10-30', status: 'available', completion: 0, rating: 4.8, byLawsSection: 'section25', description: 'Emergency protocols and disaster response procedures' },
    { id: 'TRN-008', title: 'Diversity & Inclusion Workshop', category: 'DEI', type: 'mandatory', duration: '3 hours', instructor: 'DEI Coordinator', capacity: 25, enrolled: 22, nextSession: '2024-11-02', status: 'available', completion: 0, rating: 4.7, byLawsSection: 'section5', description: 'Creating an inclusive and respectful workplace' },
    { id: 'TRN-009', title: 'Grievance Handling Procedures', category: 'HR Operations', type: 'optional', duration: '2 hours', instructor: 'HR Director', capacity: 20, enrolled: 18, nextSession: '2024-11-05', status: 'available', completion: 0, rating: 4.6, byLawsSection: 'section12', description: 'Proper handling of employee complaints and grievances' },
    { id: 'TRN-010', title: 'Leadership Development Program', category: 'Professional Development', type: 'optional', duration: '6 hours', instructor: 'External Coach', capacity: 15, enrolled: 14, nextSession: '2024-11-08', status: 'available', completion: 0, rating: 4.9, byLawsSection: 'section9', description: 'Advanced leadership skills for supervisors and managers' },
    { id: 'TRN-011', title: 'Patient Rights & Care Standards', category: 'Clinical Training', type: 'mandatory', duration: '2.5 hours', instructor: 'Medical Director', capacity: 35, enrolled: 33, nextSession: '2024-11-10', status: 'upcoming', completion: 0, rating: 4.8, byLawsSection: 'section26', description: 'Understanding and upholding patient rights' },
    { id: 'TRN-012', title: 'Disciplinary Actions & Documentation', category: 'HR Operations', type: 'optional', duration: '2 hours', instructor: 'HR Manager', capacity: 20, enrolled: 12, nextSession: '2024-11-12', status: 'available', completion: 0, rating: 4.5, byLawsSection: 'section16', description: 'Proper procedures for disciplinary matters' },
    { id: 'TRN-013', title: 'Conflict Resolution Skills', category: 'Soft Skills', type: 'optional', duration: '3 hours', instructor: 'HR Specialist', capacity: 25, enrolled: 20, nextSession: '2024-11-15', status: 'available', completion: 0, rating: 4.7, byLawsSection: 'section18', description: 'Managing workplace conflicts effectively' },
    { id: 'TRN-014', title: 'Communication Excellence', category: 'Soft Skills', type: 'optional', duration: '2.5 hours', instructor: 'Communications Manager', capacity: 30, enrolled: 25, nextSession: '2024-11-18', status: 'available', completion: 0, rating: 4.6, byLawsSection: 'section21', description: 'Effective professional communication strategies' },
    { id: 'TRN-015', title: 'Remote Work Best Practices', category: 'HR Operations', type: 'optional', duration: '2 hours', instructor: 'IT Manager', capacity: 25, enrolled: 23, nextSession: '2024-11-20', status: 'available', completion: 0, rating: 4.5, byLawsSection: 'section10', description: 'Productivity and collaboration in remote settings' },
    { id: 'TRN-016', title: 'Annual Compliance Refresher', category: 'Compliance', type: 'mandatory', duration: '1.5 hours', instructor: 'Compliance Officer', capacity: 50, enrolled: 45, nextSession: '2024-11-22', status: 'available', completion: 0, rating: 4.4, byLawsSection: 'section1', description: 'Annual review of key compliance requirements' }
  ];

  const myTrainings = [
    { ...trainingPrograms[0], enrolledDate: '2024-09-15', status: 'enrolled', progress: 0 },
    { ...trainingPrograms[1], enrolledDate: '2024-09-10', status: 'in-progress', progress: 65, lastAccessed: '2024-10-10' },
    { ...trainingPrograms[3], enrolledDate: '2024-09-01', status: 'completed', progress: 100, completedDate: '2024-09-20', certificateId: 'CERT-2024-001' },
    { ...trainingPrograms[5], enrolledDate: '2024-08-20', status: 'completed', progress: 100, completedDate: '2024-09-05', certificateId: 'CERT-2024-002' },
    { ...trainingPrograms[7], enrolledDate: '2024-09-25', status: 'enrolled', progress: 0 }
  ];

  const certificates = [
    { id: 'CERT-2024-001', training: 'Data Privacy & HIPAA Compliance', issuedDate: '2024-09-20', expiryDate: '2025-09-20', status: 'active' },
    { id: 'CERT-2024-002', training: 'Infection Control Protocols', issuedDate: '2024-09-05', expiryDate: '2025-09-05', status: 'active' },
    { id: 'CERT-2023-015', training: 'Workplace Safety Fundamentals', issuedDate: '2023-11-15', expiryDate: '2024-11-15', status: 'expiring-soon' },
    { id: 'CERT-2023-008', training: 'Code of Conduct Training', issuedDate: '2023-08-10', expiryDate: '2024-08-10', status: 'expired' }
  ];

  const upcomingSessions = [
    { training: 'Code of Conduct Training', date: '2024-10-18', time: '09:00 AM', location: 'Training Room A', seats: '28/30' },
    { training: 'Infection Control Protocols', date: '2024-10-19', time: '02:00 PM', location: 'Conference Hall', seats: '38/40' },
    { training: 'New Employee Orientation', date: '2024-10-20', time: '09:00 AM', location: 'Auditorium', seats: '24/25' },
    { training: 'Workplace Safety Fundamentals', date: '2024-10-22', time: '10:00 AM', location: 'Training Room B', seats: '30/30 (Full)' },
    { training: 'Data Privacy & HIPAA Compliance', date: '2024-10-25', time: '01:00 PM', location: 'Conference Hall', seats: '32/35' }
  ];

  // Stats
  const totalPrograms = trainingPrograms.length;
  const mandatoryPrograms = trainingPrograms.filter(t => t.type === 'mandatory').length;
  const myEnrolled = myTrainings.length;
  const myCompleted = myTrainings.filter(t => t.status === 'completed').length;
  const myInProgress = myTrainings.filter(t => t.status === 'in-progress').length;
  const activeCertificates = certificates.filter(c => c.status === 'active').length;
  const expiringCertificates = certificates.filter(c => c.status === 'expiring-soon').length;

  const views = [
    { id: 'dashboard', name: 'Dashboard', icon: TrendingUp },
    { id: 'catalog', name: 'Training Catalog', icon: BookOpen },
    { id: 'mytrainings', name: 'My Trainings', icon: Users },
    { id: 'schedule', name: 'Schedule', icon: Calendar },
    { id: 'certificates', name: 'Certificates', icon: Award },
    { id: 'reports', name: 'Reports', icon: BarChart }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'green';
      case 'in-progress': return 'blue';
      case 'enrolled': return 'purple';
      case 'available': return 'slate';
      case 'upcoming': return 'blue';
      case 'full': return 'red';
      default: return 'slate';
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold">{totalPrograms}</div>
              <div className="text-orange-100 text-sm font-semibold mt-1">Total Programs</div>
            </div>
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <BookOpen className="w-7 h-7" />
            </div>
          </div>
          <div className="text-xs text-orange-100">{mandatoryPrograms} mandatory courses</div>
        </div>

        <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold text-blue-700">{myEnrolled}</div>
              <div className="text-slate-600 text-sm font-semibold mt-1">My Enrollments</div>
            </div>
            <Users className="w-10 h-10 text-blue-600" />
          </div>
          <div className="text-xs text-slate-500">{myCompleted} completed</div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold text-green-700">{activeCertificates}</div>
              <div className="text-slate-600 text-sm font-semibold mt-1">Active Certificates</div>
            </div>
            <Award className="w-10 h-10 text-green-600" />
          </div>
          <div className="text-xs text-slate-500">{expiringCertificates} expiring soon</div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-4xl font-bold text-purple-700">{upcomingSessions.length}</div>
              <div className="text-slate-600 text-sm font-semibold mt-1">Upcoming Sessions</div>
            </div>
            <Calendar className="w-10 h-10 text-purple-600" />
          </div>
          <div className="text-xs text-slate-500">Next 30 days</div>
        </div>
      </div>

      {/* My Training Progress */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            My Training Progress
          </h4>
          <div className="space-y-4">
            {myTrainings.slice(0, 3).map(training => (
              <div key={training.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 text-sm">{training.title}</span>
                  <span className="text-sm font-bold text-blue-700">{training.progress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      training.progress === 100 ? 'bg-green-600' :
                      training.progress > 0 ? 'bg-blue-600' : 'bg-slate-400'
                    } transition-all duration-500`}
                    style={{ width: `${training.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                    training.status === 'completed' ? 'bg-green-100 text-green-700' :
                    training.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {training.status.replace('-', ' ').toUpperCase()}
                  </span>
                  {training.status === 'in-progress' && (
                    <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      Continue
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setActiveView('mytrainings')}
            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View All My Trainings
          </button>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            Upcoming Training Sessions
          </h4>
          <div className="space-y-3">
            {upcomingSessions.slice(0, 4).map((session, idx) => (
              <div key={idx} className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="font-bold text-slate-900 text-sm mb-1">{session.training}</div>
                <div className="flex items-center gap-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {session.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {session.time}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-slate-600">{session.location}</span>
                  <span className="text-xs font-semibold text-purple-700">{session.seats}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificates Alert */}
      {expiringCertificates > 0 && (
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-yellow-900 mb-1">Certification Renewal Required</h5>
              <p className="text-sm text-yellow-800">
                You have {expiringCertificates} certificate(s) expiring soon. Renew your certifications to maintain compliance.
              </p>
              <button
                onClick={() => setActiveView('certificates')}
                className="mt-3 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-semibold text-sm"
              >
                View Certificates
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h4>
        <div className="grid grid-cols-4 gap-3">
          <button 
            onClick={() => setActiveView('catalog')}
            className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition-all text-left group"
          >
            <BookOpen className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-bold text-slate-900 text-sm">Browse Catalog</div>
            <div className="text-xs text-slate-600 mt-1">Explore trainings</div>
          </button>
          <button 
            onClick={() => setActiveView('schedule')}
            className="p-4 bg-purple-50 border-2 border-purple-200 rounded-xl hover:bg-purple-100 transition-all text-left group"
          >
            <Calendar className="w-6 h-6 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-bold text-slate-900 text-sm">View Schedule</div>
            <div className="text-xs text-slate-600 mt-1">Check calendar</div>
          </button>
          <button 
            onClick={() => setActiveView('certificates')}
            className="p-4 bg-green-50 border-2 border-green-200 rounded-xl hover:bg-green-100 transition-all text-left group"
          >
            <Award className="w-6 h-6 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-bold text-slate-900 text-sm">My Certificates</div>
            <div className="text-xs text-slate-600 mt-1">Download certs</div>
          </button>
          <button className="p-4 bg-orange-50 border-2 border-orange-200 rounded-xl hover:bg-orange-100 transition-all text-left group">
            <Bell className="w-6 h-6 text-orange-600 mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-bold text-slate-900 text-sm">Notifications</div>
            <div className="text-xs text-slate-600 mt-1">3 new alerts</div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderCatalog = () => {
    const filteredPrograms = trainingPrograms.filter(program => {
      const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           program.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filterCategory === 'all' || program.category === filterCategory;
      const matchesType = filterType === 'all' || program.type === filterType;
      return matchesSearch && matchesCategory && matchesType;
    });

    const categories = ['all', ...new Set(trainingPrograms.map(t => t.category))];

    return (
      <div className="space-y-6">
        {/* Search and Filters */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search training programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none font-semibold"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none font-semibold"
          >
            <option value="all">All Types</option>
            <option value="mandatory">Mandatory</option>
            <option value="optional">Optional</option>
          </select>
        </div>

        {/* Training Cards */}
        <div className="grid grid-cols-2 gap-4">
          {filteredPrograms.map(program => (
            <div
              key={program.id}
              onClick={() => setSelectedTraining(program)}
              className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-slate-600">{program.id}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                      program.type === 'mandatory' 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {program.type.toUpperCase()}
                    </span>
                  </div>
                  <h5 className="text-lg font-bold text-slate-900 mb-1">{program.title}</h5>
                  <p className="text-sm text-slate-600 line-clamp-2">{program.description}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-400 flex-shrink-0 ml-2" />
              </div>

              <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {program.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {program.enrolled}/{program.capacity}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  {program.rating}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-xs font-bold">
                  {program.category}
                </span>
                <span className="text-sm text-slate-600">Next: {program.nextSession}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderMyTrainings = () => (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
          <div className="text-3xl font-bold text-blue-900 mb-1">{myEnrolled}</div>
          <div className="text-sm font-semibold text-blue-700">Total Enrolled</div>
        </div>
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
          <div className="text-3xl font-bold text-green-900 mb-1">{myCompleted}</div>
          <div className="text-sm font-semibold text-green-700">Completed</div>
        </div>
        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5">
          <div className="text-3xl font-bold text-purple-900 mb-1">{myInProgress}</div>
          <div className="text-sm font-semibold text-purple-700">In Progress</div>
        </div>
        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5">
          <div className="text-3xl font-bold text-orange-900 mb-1">{myEnrolled - myCompleted - myInProgress}</div>
          <div className="text-sm font-semibold text-orange-700">Upcoming</div>
        </div>
      </div>

      {/* Training List */}
      <div className="space-y-3">
        {myTrainings.map(training => {
          const statusColor = getStatusColor(training.status);
          return (
            <div
              key={training.id}
              className="bg-white border-2 border-slate-200 rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h5 className="text-lg font-bold text-slate-900">{training.title}</h5>
                    <span className={`px-3 py-1 bg-${statusColor}-100 text-${statusColor}-700 rounded-full text-xs font-bold`}>
                      {training.status.toUpperCase().replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>Category: {training.category}</span>
                    <span>Enrolled: {training.enrolledDate}</span>
                    {training.completedDate && <span>Completed: {training.completedDate}</span>}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-700">Progress</span>
                  <span className="text-sm font-bold text-blue-700">{training.progress}%</span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      training.progress === 100 ? 'bg-green-600' :
                      training.progress > 0 ? 'bg-blue-600' : 'bg-slate-400'
                    } transition-all duration-500`}
                    style={{ width: `${training.progress}%` }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                {training.status === 'in-progress' && (
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Continue Learning
                  </button>
                )}
                {training.status === 'completed' && training.certificateId && (
                  <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Certificate
                  </button>
                )}
                {training.status === 'enrolled' && (
                  <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Start Training
                  </button>
                )}
                <button
                  onClick={() => onNavigateToSection && onNavigateToSection(training.byLawsSection)}
                  className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-semibold"
                >
                  View By-Laws Section
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Training Manager</h2>
                  <p className="text-orange-100">Comprehensive training and certification management</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* View Tabs */}
            <div className="flex gap-2">
              {views.map((view) => {
                const ViewIcon = view.icon;
                return (
                  <button
                    key={view.id}
                    onClick={() => setActiveView(view.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                      activeView === view.id
                        ? 'bg-white text-orange-700 shadow-lg'
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

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
            {activeView === 'dashboard' && renderDashboard()}
            {activeView === 'catalog' && renderCatalog()}
            {activeView === 'mytrainings' && renderMyTrainings()}
            {activeView === 'schedule' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-slate-900">Training Schedule</h4>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                    Export Calendar
                  </button>
                </div>

                {/* Upcoming Sessions */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
                  <h5 className="text-lg font-bold text-slate-900 mb-4">This Week's Sessions</h5>
                  <div className="space-y-3">
                    {upcomingSessions.map((session, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                        <div className="text-center min-w-[80px]">
                          <div className="text-2xl font-bold text-blue-700">{session.date.split('-')[2]}</div>
                          <div className="text-xs text-blue-600 font-semibold">OCT 2024</div>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900 mb-1">{session.training}</div>
                          <div className="flex items-center gap-4 text-sm text-slate-600">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {session.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Globe className="w-4 h-4" />
                              {session.location}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-slate-900 text-sm">{session.seats}</div>
                          <div className="text-xs text-slate-600">seats</div>
                        </div>
                        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm">
                          Register
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calendar View */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
                  <h5 className="text-lg font-bold text-slate-900 mb-4">October 2024</h5>
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="text-center font-bold text-slate-600 text-sm py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 35 }).map((_, idx) => {
                      const day = idx - 1;
                      const hasTraining = [18, 19, 20, 22, 25, 28, 30].includes(day);
                      
                      return (
                        <div
                          key={idx}
                          className={`aspect-square p-2 border rounded-lg text-center ${
                            day < 1 || day > 31
                              ? 'bg-slate-50 text-slate-300'
                              : hasTraining
                              ? 'bg-orange-50 border-orange-300 cursor-pointer hover:bg-orange-100'
                              : 'bg-white border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {day > 0 && day <= 31 && (
                            <>
                              <div className="font-semibold text-slate-900">{day}</div>
                              {hasTraining && (
                                <div className="w-2 h-2 bg-orange-600 rounded-full mx-auto mt-1"></div>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {activeView === 'certificates' && (
              <div className="space-y-6">
                {/* Certificate Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
                    <div className="text-3xl font-bold text-green-900 mb-1">{activeCertificates}</div>
                    <div className="text-sm font-semibold text-green-700">Active Certificates</div>
                  </div>
                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5">
                    <div className="text-3xl font-bold text-yellow-900 mb-1">{expiringCertificates}</div>
                    <div className="text-sm font-semibold text-yellow-700">Expiring Soon</div>
                  </div>
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
                    <div className="text-3xl font-bold text-red-900 mb-1">{certificates.filter(c => c.status === 'expired').length}</div>
                    <div className="text-sm font-semibold text-red-700">Expired</div>
                  </div>
                </div>

                {/* Certificates List */}
                <div className="space-y-3">
                  {certificates.map(cert => (
                    <div
                      key={cert.id}
                      className={`bg-white border-2 rounded-xl p-6 ${
                        cert.status === 'active' ? 'border-green-200' :
                        cert.status === 'expiring-soon' ? 'border-yellow-200' :
                        'border-red-200'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                            cert.status === 'active' ? 'bg-green-100' :
                            cert.status === 'expiring-soon' ? 'bg-yellow-100' :
                            'bg-red-100'
                          }`}>
                            <Award className={`w-7 h-7 ${
                              cert.status === 'active' ? 'text-green-600' :
                              cert.status === 'expiring-soon' ? 'text-yellow-600' :
                              'text-red-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h5 className="text-lg font-bold text-slate-900">{cert.training}</h5>
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                cert.status === 'active' ? 'bg-green-100 text-green-700' :
                                cert.status === 'expiring-soon' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {cert.status.toUpperCase().replace('-', ' ')}
                              </span>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div>
                                <div className="text-slate-600 text-xs mb-1">Certificate ID</div>
                                <div className="font-semibold text-slate-900">{cert.id}</div>
                              </div>
                              <div>
                                <div className="text-slate-600 text-xs mb-1">Issued Date</div>
                                <div className="font-semibold text-slate-900">{cert.issuedDate}</div>
                              </div>
                              <div>
                                <div className="text-slate-600 text-xs mb-1">Expiry Date</div>
                                <div className={`font-semibold ${
                                  cert.status === 'expired' ? 'text-red-700' :
                                  cert.status === 'expiring-soon' ? 'text-yellow-700' :
                                  'text-green-700'
                                }`}>
                                  {cert.expiryDate}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Download
                          </button>
                          {cert.status !== 'active' && (
                            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                              Renew
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeView === 'reports' && (
              <div className="space-y-6">
                {/* Report Templates */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Quick Reports</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <button className="p-4 bg-orange-50 border-2 border-orange-200 rounded-xl hover:bg-orange-100 transition-all text-left">
                      <Download className="w-6 h-6 text-orange-600 mb-2" />
                      <div className="font-bold text-slate-900">Training Summary</div>
                      <div className="text-xs text-slate-600 mt-1">Overall completion report</div>
                    </button>
                    <button className="p-4 bg-green-50 border-2 border-green-200 rounded-xl hover:bg-green-100 transition-all text-left">
                      <Award className="w-6 h-6 text-green-600 mb-2" />
                      <div className="font-bold text-slate-900">Certifications</div>
                      <div className="text-xs text-slate-600 mt-1">Active certificates report</div>
                    </button>
                    <button className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition-all text-left">
                      <Users className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-bold text-slate-900">Enrollment Stats</div>
                      <div className="text-xs text-slate-600 mt-1">Training participation</div>
                    </button>
                  </div>
                </div>

                {/* Completion Rates */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Training Completion Rates</h4>
                  <div className="space-y-4">
                    {[
                      { category: 'Mandatory Trainings', completion: 88, total: 156, completed: 137 },
                      { category: 'Safety & Health', completion: 92, total: 80, completed: 74 },
                      { category: 'Compliance', completion: 85, total: 60, completed: 51 },
                      { category: 'Professional Development', completion: 65, total: 45, completed: 29 },
                      { category: 'Clinical Training', completion: 90, total: 70, completed: 63 }
                    ].map((cat, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-slate-700">{cat.category}</span>
                          <span className="text-sm text-slate-600">
                            {cat.completed}/{cat.total} completed ({cat.completion}%)
                          </span>
                        </div>
                        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              cat.completion >= 90 ? 'bg-green-600' :
                              cat.completion >= 75 ? 'bg-blue-600' :
                              cat.completion >= 60 ? 'bg-orange-500' :
                              'bg-red-600'
                            }`}
                            style={{ width: `${cat.completion}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Department Performance */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Department-wise Performance</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { dept: 'Emergency', completion: 95, trainings: 24 },
                      { dept: 'ICU', completion: 92, trainings: 22 },
                      { dept: 'Surgery', completion: 88, trainings: 20 },
                      { dept: 'Pediatrics', completion: 85, trainings: 18 },
                      { dept: 'Radiology', completion: 82, trainings: 16 },
                      { dept: 'Administration', completion: 78, trainings: 15 }
                    ].map((dept, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-slate-900">{dept.dept}</span>
                          <span className="text-2xl font-bold text-orange-700">{dept.completion}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-2">
                          <div
                            className="h-full bg-orange-600"
                            style={{ width: `${dept.completion}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-slate-600">{dept.trainings} trainings completed</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Training Details Modal */}
      {selectedTraining && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{selectedTraining.title}</h3>
                  <p className="text-orange-100">{selectedTraining.id}</p>
                </div>
                <button
                  onClick={() => setSelectedTraining(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Description</h4>
                  <p className="text-slate-700 leading-relaxed">{selectedTraining.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Duration</div>
                    <div className="font-bold text-slate-900">{selectedTraining.duration}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Instructor</div>
                    <div className="font-bold text-slate-900">{selectedTraining.instructor}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Available Seats</div>
                    <div className="font-bold text-slate-900">{selectedTraining.enrolled}/{selectedTraining.capacity}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Next Session</div>
                    <div className="font-bold text-slate-900">{selectedTraining.nextSession}</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-bold">
                    Enroll Now
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTraining(null);
                      onNavigateToSection && onNavigateToSection(selectedTraining.byLawsSection);
                    }}
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-bold"
                  >
                    View Related By-Laws
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrainingManager;
