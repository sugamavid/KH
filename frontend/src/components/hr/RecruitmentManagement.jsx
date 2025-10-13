import React, { useState } from 'react';
import { 
  Search, Filter, PlusCircle, Briefcase, MapPin, Clock, Users, Eye, 
  Edit, Trash2, CheckCircle2, Calendar, Download, UserPlus
} from 'lucide-react';
import { DEMO_JOB_POSTINGS } from '../../data/hrDemoData';

const RecruitmentManagement = () => {
  const [jobPostings] = useState(DEMO_JOB_POSTINGS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeView, setActiveView] = useState('postings');

  const statusOptions = ['All', 'Active', 'Closed', 'Draft'];

  // Mock candidate data
  const candidates = [
    { id: 'CAN001', name: 'Ms. Divya Menon', position: 'Staff Nurse', appliedDate: '2025-01-10', status: 'Interview Scheduled', experience: '3 years', phone: '+91 98765 43210' },
    { id: 'CAN002', name: 'Mr. Rahul Kumar', position: 'Lab Technician', appliedDate: '2025-01-08', status: 'Under Review', experience: '2 years', phone: '+91 98765 43211' },
    { id: 'CAN003', name: 'Ms. Priya Shah', position: 'Receptionist', appliedDate: '2025-01-12', status: 'Shortlisted', experience: '1 year', phone: '+91 98765 43212' }
  ];

  const filteredJobs = jobPostings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || job.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Recruitment Management</h1>
            <p className="text-sm text-slate-600 mt-1">Manage job postings and applicant tracking</p>
          </div>
          <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center shadow-md">
            <PlusCircle className="w-5 h-5 mr-2" />
            Post New Job
          </button>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => setActiveView('postings')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeView === 'postings' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}>
            <Briefcase className="w-4 h-4 inline mr-1" />
            Job Postings
          </button>
          <button
            onClick={() => setActiveView('candidates')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeView === 'candidates' ? 'bg-green-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}>
            <Users className="w-4 h-4 inline mr-1" />
            Candidates ({candidates.length})
          </button>
          <button
            onClick={() => setActiveView('interviews')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeView === 'interviews' ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}>
            <Calendar className="w-4 h-4 inline mr-1" />
            Interviews
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{jobPostings.length}</p>
            <p className="text-sm text-slate-600 mt-1">Active Postings</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900\">{jobPostings.reduce((sum, job) => sum + job.applicants, 0)}</p>
            <p className="text-sm text-slate-600 mt-1\">Total Applicants</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{jobPostings.reduce((sum, job) => sum + job.positions, 0)}</p>
            <p className="text-sm text-slate-600 mt-1">Open Positions</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">5</p>
            <p className="text-sm text-slate-600 mt-1">Pending Interviews</p>
          </div>
        </div>

        {activeView === 'postings' && (
          <>
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by job title or department..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                  {statusOptions.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                      <p className="text-sm text-slate-500">{job.id}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      job.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {job.status}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-600">
                      <Briefcase className="w-4 h-4 mr-2 text-slate-400" />
                      {job.department}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">
                        <Clock className="w-4 h-4 inline mr-1 text-slate-400" />
                        {job.type}
                      </span>
                      <span className="text-slate-600">Experience: {job.experience}</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-slate-700">Applicant Progress</span>
                      <span className="text-sm font-bold text-blue-600">{job.applicants} / {job.positions * 10} target</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${Math.min((job.applicants / (job.positions * 10)) * 100, 100)}%` }}></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div>
                      <p className="text-xs text-slate-500">Posted: {new Date(job.postedDate).toLocaleDateString()}</p>
                      <p className="text-xs text-slate-500">Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{job.positions} Position{job.positions > 1 ? 's' : ''}</p>
                      <p className="text-xs text-slate-500">{job.applicants} Applicants</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button onClick={() => setSelectedJob(job)} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold flex items-center justify-center">
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </button>
                    <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeView === 'candidates' && (
          <div className="space-y-3">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-green-400 transition-all shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold">
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-bold text-slate-900">{candidate.name}</h3>
                        <span className="text-xs text-slate-500">{candidate.id}</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-xs text-slate-500">Position</p>
                          <p className="font-medium text-slate-900">{candidate.position}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Experience</p>
                          <p className="font-medium text-slate-900">{candidate.experience}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Applied On</p>
                          <p className="font-medium text-slate-900">{new Date(candidate.appliedDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Contact</p>
                          <p className="font-medium text-slate-900">{candidate.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 ml-4">
                    <span className={`px-4 py-2 rounded-lg text-xs font-bold ${
                      candidate.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-700' :
                      candidate.status === 'Shortlisted' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {candidate.status}
                    </span>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold flex items-center">
                      <UserPlus className="w-4 h-4 mr-1" />
                      Hire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeView === 'interviews' && (
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Interview Schedule</h3>
              <p className="text-slate-600">Interview management module coming soon</p>
            </div>
          </div>
        )}
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedJob(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{selectedJob.title}</h2>
                <p className="text-slate-600">{selectedJob.department} • {selectedJob.location}</p>
              </div>
              <button onClick={() => setSelectedJob(null)} className="text-slate-400 hover:text-slate-600 text-2xl">✕</button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Job Type</p>
                <p className="text-sm font-medium text-slate-900">{selectedJob.type}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Experience Required</p>
                <p className="text-sm font-medium text-slate-900">{selectedJob.experience}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Positions Available</p>
                <p className="text-sm font-medium text-slate-900">{selectedJob.positions}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Total Applicants</p>
                <p className="text-sm font-medium text-slate-900">{selectedJob.applicants}</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">Job Description</h3>
              <p className="text-sm text-slate-700 mb-4">
                We are looking for a qualified {selectedJob.title} to join our {selectedJob.department}. 
                The ideal candidate should have {selectedJob.experience} of experience in healthcare environment.
              </p>
            </div>

            <div className="flex space-x-3 mt-6">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                View Applicants
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Schedule Interview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruitmentManagement;
