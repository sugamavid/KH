import React, { useState } from 'react';
import { X, GraduationCap, Award, Calendar, Users, CheckCircle, Clock, Download, BookOpen, Video, FileText } from 'lucide-react';

const SOPTrainingCertification = ({ isOpen, onClose, onNavigate }) => {
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedTraining, setSelectedTraining] = useState(null);

  // Mock training programs
  const trainingPrograms = [
    {
      id: 'TRN-SOP-001',
      sopId: 'SOP-003',
      sopTitle: 'Leave Application Process',
      trainingTitle: 'Leave Management Fundamentals',
      mandatory: true,
      targetRoles: ['All Employees'],
      duration: '30 mins',
      format: 'Interactive E-Learning',
      enrolledUsers: 524,
      completedUsers: 498,
      certifiedUsers: 487,
      averageScore: 92,
      expiryPeriod: '1 year',
      nextSession: '2024-02-01',
      instructor: 'HR Training Team',
      competencyLevel: 'Basic',
    },
    {
      id: 'TRN-SOP-002',
      sopId: 'SOP-005',
      sopTitle: 'Emergency Response',
      trainingTitle: 'Emergency Response Protocols',
      mandatory: true,
      targetRoles: ['All Staff', 'Clinical', 'Emergency'],
      duration: '2 hours',
      format: 'Classroom + Simulation',
      enrolledUsers: 524,
      completedUsers: 512,
      certifiedUsers: 506,
      averageScore: 96,
      expiryPeriod: '6 months',
      nextSession: '2024-01-25',
      instructor: 'Dr. Emily Rodriguez',
      competencyLevel: 'Advanced',
    },
    {
      id: 'TRN-SOP-003',
      sopId: 'SOP-009',
      sopTitle: 'Data Security Procedure',
      trainingTitle: 'Information Security Essentials',
      mandatory: true,
      targetRoles: ['All Employees', 'IT Staff'],
      duration: '1 hour',
      format: 'Video + Assessment',
      enrolledUsers: 524,
      completedUsers: 456,
      certifiedUsers: 442,
      averageScore: 88,
      expiryPeriod: '1 year',
      nextSession: '2024-02-05',
      instructor: 'IT Security Team',
      competencyLevel: 'Intermediate',
    },
    {
      id: 'TRN-SOP-004',
      sopId: 'SOP-011',
      sopTitle: 'Medication Administration',
      trainingTitle: 'Safe Medication Administration',
      mandatory: true,
      targetRoles: ['Nurses', 'Clinical Staff'],
      duration: '3 hours',
      format: 'Hands-on Workshop',
      enrolledUsers: 156,
      completedUsers: 152,
      certifiedUsers: 149,
      averageScore: 97,
      expiryPeriod: '1 year',
      nextSession: '2024-01-28',
      instructor: 'Pharmacy Director',
      competencyLevel: 'Advanced',
    },
    {
      id: 'TRN-SOP-005',
      sopId: 'SOP-001',
      sopTitle: 'Employee Onboarding',
      trainingTitle: 'New Employee Orientation',
      mandatory: true,
      targetRoles: ['New Hires'],
      duration: '4 hours',
      format: 'Blended Learning',
      enrolledUsers: 24,
      completedUsers: 22,
      certifiedUsers: 22,
      averageScore: 91,
      expiryPeriod: 'One-time',
      nextSession: '2024-02-10',
      instructor: 'HR Onboarding Team',
      competencyLevel: 'Basic',
    },
  ];

  // Mock certifications
  const certifications = [
    {
      id: 'CERT-001',
      employeeName: 'Sarah Johnson',
      sopId: 'SOP-005',
      sopTitle: 'Emergency Response',
      trainingId: 'TRN-SOP-002',
      issueDate: '2023-08-15',
      expiryDate: '2024-02-15',
      score: 98,
      status: 'Expiring Soon',
      daysUntilExpiry: 25,
    },
    {
      id: 'CERT-002',
      employeeName: 'Michael Chen',
      sopId: 'SOP-009',
      sopTitle: 'Data Security Procedure',
      trainingId: 'TRN-SOP-003',
      issueDate: '2023-06-20',
      expiryDate: '2024-06-20',
      score: 95,
      status: 'Valid',
      daysUntilExpiry: 152,
    },
    {
      id: 'CERT-003',
      employeeName: 'Dr. Emily Rodriguez',
      sopId: 'SOP-011',
      sopTitle: 'Medication Administration',
      trainingId: 'TRN-SOP-004',
      issueDate: '2023-02-10',
      expiryDate: '2024-02-10',
      score: 100,
      status: 'Expiring Soon',
      daysUntilExpiry: 20,
    },
    {
      id: 'CERT-004',
      employeeName: 'James Wilson',
      sopId: 'SOP-005',
      sopTitle: 'Emergency Response',
      trainingId: 'TRN-SOP-002',
      issueDate: '2023-12-05',
      expiryDate: '2024-06-05',
      score: 92,
      status: 'Valid',
      daysUntilExpiry: 136,
    },
  ];

  // Mock competency assessments
  const competencyResults = [
    { skill: 'SOP Knowledge', score: 94, benchmark: 90, status: 'Exceeds' },
    { skill: 'Practical Application', score: 88, benchmark: 85, status: 'Meets' },
    { skill: 'Compliance Awareness', score: 96, benchmark: 90, status: 'Exceeds' },
    { skill: 'Documentation Skills', score: 82, benchmark: 85, status: 'Below' },
    { skill: 'Problem Solving', score: 90, benchmark: 85, status: 'Exceeds' },
  ];

  const getCompletionColor = (completed, total) => {
    const percentage = (completed / total) * 100;
    if (percentage >= 95) return 'text-green-600';
    if (percentage >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCompletionBgColor = (completed, total) => {
    const percentage = (completed / total) * 100;
    if (percentage >= 95) return 'bg-green-500';
    if (percentage >= 85) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getCertStatusColor = (status) => {
    const colors = {
      'Valid': 'bg-green-100 text-green-700 border-green-300',
      'Expiring Soon': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'Expired': 'bg-red-100 text-red-700 border-red-300',
    };
    return colors[status] || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  const getCompetencyColor = (status) => {
    const colors = {
      'Exceeds': 'bg-green-500',
      'Meets': 'bg-blue-500',
      'Below': 'bg-red-500',
    };
    return colors[status] || 'bg-gray-500';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-bold">SOP Training & Certification Hub</h2>
              <p className="text-sm text-indigo-100">Competency Management & Certification Tracking</p>
            </div>
          </div>
          <button onClick={onClose} className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* View Tabs */}
        <div className="bg-gray-50 border-b border-gray-200 px-6">
          <div className="flex space-x-6">
            {['dashboard', 'programs', 'certifications', 'competency'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`py-3 px-4 font-semibold border-b-2 transition-colors ${
                  activeView === view
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-indigo-600'
                }`}
              >
                {view === 'dashboard' && 'Training Dashboard'}
                {view === 'programs' && 'Training Programs'}
                {view === 'certifications' && 'Certifications'}
                {view === 'competency' && 'Competency Assessments'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 160px)' }}>
          {/* Training Dashboard */}
          {activeView === 'dashboard' && (
            <div>
              {/* Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-600">ACTIVE</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">5</div>
                  <div className="text-sm text-gray-600">Training Programs</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Award className="w-8 h-8 text-green-600" />
                    <span className="text-xs font-semibold text-green-600">ISSUED</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">1,606</div>
                  <div className="text-sm text-gray-600">Total Certifications</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="w-8 h-8 text-yellow-600" />
                    <span className="text-xs font-semibold text-yellow-600">PENDING</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">88</div>
                  <div className="text-sm text-gray-600">Pending Completions</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="w-8 h-8 text-purple-600" />
                    <span className="text-xs font-semibold text-purple-600">AVG SCORE</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">93%</div>
                  <div className="text-sm text-gray-600">Average Performance</div>
                </div>
              </div>

              {/* Training Programs Overview */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Training Programs Overview</h3>
                <div className="space-y-4">
                  {trainingPrograms.map((program) => {
                    const completionRate = (program.completedUsers / program.enrolledUsers) * 100;
                    return (
                      <div key={program.id} className="bg-white border-2 border-gray-200 rounded-lg p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">
                                {program.id}
                              </span>
                              {program.mandatory && (
                                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">
                                  MANDATORY
                                </span>
                              )}
                              <h4 className="font-bold text-gray-800">{program.trainingTitle}</h4>
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                              <span className="font-semibold">{program.sopId}</span> - {program.sopTitle}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{program.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Video className="w-4 h-4" />
                                <span>{program.format}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="w-4 h-4" />
                                <span>{program.enrolledUsers} enrolled</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Progress Bars */}
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">Completion Rate</span>
                            <span className={`text-sm font-bold ${getCompletionColor(program.completedUsers, program.enrolledUsers)}`}>
                              {completionRate.toFixed(0)}% ({program.completedUsers}/{program.enrolledUsers})
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getCompletionBgColor(program.completedUsers, program.enrolledUsers)}`}
                              style={{ width: `${completionRate}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm bg-gray-50 rounded-lg p-3">
                          <div>
                            <span className="text-gray-500">Certified:</span>
                            <div className="font-bold text-gray-700">{program.certifiedUsers}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Avg Score:</span>
                            <div className="font-bold text-gray-700">{program.averageScore}%</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Next Session:</span>
                            <div className="font-bold text-gray-700">{program.nextSession}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Expires In:</span>
                            <div className="font-bold text-gray-700">{program.expiryPeriod}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Certifications View */}
          {activeView === 'certifications' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Employee Certifications</h3>
                  <p className="text-gray-600">Track and manage SOP certifications</p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Export Report</span>
                </button>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Certificate ID</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Employee</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">SOP</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Issue Date</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Expiry Date</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Score</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {certifications.map((cert) => (
                      <tr key={cert.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-bold text-indigo-600">{cert.id}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{cert.employeeName}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="font-semibold">{cert.sopId}</div>
                          <div className="text-xs text-gray-500">{cert.sopTitle}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{cert.issueDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{cert.expiryDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                            {cert.score}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCertStatusColor(cert.status)}`}>
                            {cert.status}
                          </span>
                          {cert.daysUntilExpiry <= 30 && (
                            <div className="text-xs text-orange-600 mt-1">{cert.daysUntilExpiry} days left</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <button className="text-indigo-600 hover:text-indigo-700 font-semibold">View</button>
                            <button className="text-green-600 hover:text-green-700 font-semibold">Download</button>
                            {cert.status === 'Expiring Soon' && (
                              <button className="text-orange-600 hover:text-orange-700 font-semibold">Renew</button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Competency Assessments */}
          {activeView === 'competency' && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Competency Assessment Results</h3>
                <p className="text-gray-600">Evaluate employee competency levels against benchmarks</p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-gray-800 mb-4">Overall Competency Profile</h4>
                <div className="space-y-4">
                  {competencyResults.map((result, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700">{result.skill}</span>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600">Score: <strong>{result.score}%</strong></span>
                          <span className="text-sm text-gray-600">Benchmark: <strong>{result.benchmark}%</strong></span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getCompetencyColor(result.status)}`}>
                            {result.status}
                          </span>
                        </div>
                      </div>
                      <div className="relative w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${getCompetencyColor(result.status)}`}
                          style={{ width: `${result.score}%` }}
                        ></div>
                        <div
                          className="absolute top-0 h-3 border-r-2 border-gray-700"
                          style={{ left: `${result.benchmark}%` }}
                          title={`Benchmark: ${result.benchmark}%`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Generate Competency Report</span>
                </button>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Schedule Re-certification</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SOPTrainingCertification;