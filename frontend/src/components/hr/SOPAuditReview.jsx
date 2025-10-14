import React, { useState } from 'react';
import { X, Search, Calendar, CheckCircle, AlertCircle, FileText, Users, TrendingUp, Clock } from 'lucide-react';

const SOPAuditReview = ({ isOpen, onClose, onNavigate }) => {
  const [activeView, setActiveView] = useState('schedule');
  const [selectedAudit, setSelectedAudit] = useState(null);

  // Mock audit schedule data
  const auditSchedule = [
    {
      id: 'AUD-001',
      sopId: 'SOP-003',
      sopTitle: 'Leave Application Process',
      auditType: 'Periodic Review',
      scheduledDate: '2024-02-15',
      frequency: 'Annual',
      auditor: 'HR Director',
      status: 'Scheduled',
      lastAudit: '2023-02-12',
      findings: 0,
      priority: 'Medium',
    },
    {
      id: 'AUD-002',
      sopId: 'SOP-005',
      sopTitle: 'Emergency Response',
      auditType: 'Compliance Audit',
      scheduledDate: '2024-01-30',
      frequency: 'Semi-Annual',
      auditor: 'Safety Officer',
      status: 'In Progress',
      lastAudit: '2023-07-15',
      findings: 2,
      priority: 'High',
    },
    {
      id: 'AUD-003',
      sopId: 'SOP-009',
      sopTitle: 'Data Security Procedure',
      auditType: 'Security Audit',
      scheduledDate: '2024-02-01',
      frequency: 'Quarterly',
      auditor: 'IT Security Team',
      status: 'Scheduled',
      lastAudit: '2023-11-02',
      findings: 0,
      priority: 'Critical',
    },
    {
      id: 'AUD-004',
      sopId: 'SOP-011',
      sopTitle: 'Medication Administration',
      auditType: 'Clinical Audit',
      scheduledDate: '2024-02-20',
      frequency: 'Quarterly',
      auditor: 'Pharmacy Director',
      status: 'Scheduled',
      lastAudit: '2023-11-18',
      findings: 0,
      priority: 'Critical',
    },
    {
      id: 'AUD-005',
      sopId: 'SOP-001',
      sopTitle: 'Employee Onboarding',
      auditType: 'Process Review',
      scheduledDate: '2024-01-18',
      frequency: 'Annual',
      auditor: 'HR Compliance Committee',
      status: 'Completed',
      lastAudit: '2024-01-18',
      findings: 3,
      priority: 'Low',
    },
  ];

  // Mock findings data
  const auditFindings = [
    {
      id: 'FIND-001',
      auditId: 'AUD-005',
      sopId: 'SOP-001',
      sopTitle: 'Employee Onboarding',
      findingType: 'Minor Non-Conformance',
      severity: 'Low',
      description: 'Documentation checklist not always completed within 48 hours as specified',
      identifiedDate: '2024-01-18',
      identifiedBy: 'HR Compliance Committee',
      rootCause: 'Heavy workload during peak hiring periods causing delays',
      correctiveAction: 'Implement automated reminders and allocate additional HR support during peak periods',
      responsiblePerson: 'HR Manager',
      targetDate: '2024-02-28',
      status: 'Open',
      verificationStatus: 'Pending',
    },
    {
      id: 'FIND-002',
      auditId: 'AUD-005',
      sopId: 'SOP-001',
      sopTitle: 'Employee Onboarding',
      findingType: 'Observation',
      severity: 'Low',
      description: 'New hire orientation materials not consistently updated with latest policy changes',
      identifiedDate: '2024-01-18',
      identifiedBy: 'HR Compliance Committee',
      rootCause: 'No formal process for updating orientation materials when policies change',
      correctiveAction: 'Establish quarterly review process and assign ownership to HR Coordinator',
      responsiblePerson: 'HR Coordinator',
      targetDate: '2024-02-15',
      status: 'In Progress',
      verificationStatus: 'Pending',
    },
    {
      id: 'FIND-003',
      auditId: 'AUD-005',
      sopId: 'SOP-001',
      sopTitle: 'Employee Onboarding',
      findingType: 'Best Practice Opportunity',
      severity: 'Low',
      description: 'Digital onboarding portal could improve efficiency and tracking',
      identifiedDate: '2024-01-18',
      identifiedBy: 'HR Compliance Committee',
      rootCause: 'Current paper-based process is time-consuming and difficult to track',
      correctiveAction: 'Evaluate and implement digital onboarding solution',
      responsiblePerson: 'IT Director',
      targetDate: '2024-06-30',
      status: 'Planned',
      verificationStatus: 'Not Started',
    },
    {
      id: 'FIND-004',
      auditId: 'AUD-002',
      sopId: 'SOP-005',
      sopTitle: 'Emergency Response',
      findingType: 'Major Non-Conformance',
      severity: 'High',
      description: 'Emergency evacuation drill not conducted in Q4 2023 as required',
      identifiedDate: '2024-01-25',
      identifiedBy: 'Safety Officer',
      rootCause: 'Scheduling conflicts and lack of coordination between departments',
      correctiveAction: 'Schedule and conduct emergency drill immediately; implement annual drill calendar',
      responsiblePerson: 'Safety Officer',
      targetDate: '2024-02-10',
      status: 'Open',
      verificationStatus: 'Pending',
    },
    {
      id: 'FIND-005',
      auditId: 'AUD-002',
      sopId: 'SOP-005',
      sopTitle: 'Emergency Response',
      findingType: 'Minor Non-Conformance',
      severity: 'Medium',
      description: 'Some emergency contact lists outdated (not updated in past 6 months)',
      identifiedDate: '2024-01-26',
      identifiedBy: 'Safety Officer',
      rootCause: 'No systematic process for maintaining updated contact information',
      correctiveAction: 'Implement quarterly contact list review and update process',
      responsiblePerson: 'HR Manager',
      targetDate: '2024-02-20',
      status: 'In Progress',
      verificationStatus: 'Pending',
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Scheduled': 'bg-blue-100 text-blue-700 border-blue-300',
      'In Progress': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'Completed': 'bg-green-100 text-green-700 border-green-300',
      'Overdue': 'bg-red-100 text-red-700 border-red-300',
    };
    return colors[status] || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'Critical': 'bg-red-500',
      'High': 'bg-orange-500',
      'Medium': 'bg-yellow-500',
      'Low': 'bg-green-500',
    };
    return colors[priority] || 'bg-gray-500';
  };

  const getSeverityColor = (severity) => {
    const colors = {
      'Critical': 'bg-red-100 text-red-700 border-red-300',
      'High': 'bg-orange-100 text-orange-700 border-orange-300',
      'Medium': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'Low': 'bg-green-100 text-green-700 border-green-300',
    };
    return colors[severity] || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  const getFindingStatusColor = (status) => {
    const colors = {
      'Open': 'bg-red-100 text-red-700 border-red-300',
      'In Progress': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'Completed': 'bg-green-100 text-green-700 border-green-300',
      'Planned': 'bg-blue-100 text-blue-700 border-blue-300',
    };
    return colors[status] || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Search className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-bold">SOP Audit & Review System</h2>
              <p className="text-sm text-orange-100">Scheduled Audits, Findings & CAPA Management</p>
            </div>
          </div>
          <button onClick={onClose} className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* View Tabs */}
        <div className="bg-gray-50 border-b border-gray-200 px-6">
          <div className="flex space-x-6">
            {['schedule', 'findings', 'capa', 'reports'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`py-3 px-4 font-semibold border-b-2 transition-colors ${
                  activeView === view
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-orange-600'
                }`}
              >
                {view === 'schedule' && 'Audit Schedule'}
                {view === 'findings' && 'Audit Findings'}
                {view === 'capa' && 'Corrective Actions'}
                {view === 'reports' && 'Audit Reports'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 160px)' }}>
          {/* Audit Schedule View */}
          {activeView === 'schedule' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Audit Schedule</h3>
                  <p className="text-gray-600">Manage periodic SOP audits and reviews</p>
                </div>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Schedule New Audit</span>
                </button>
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-gray-600">Scheduled Audits</div>
                </div>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-600">1</div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">1</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-600">5</div>
                  <div className="text-sm text-gray-600">Total Findings</div>
                </div>
              </div>

              {/* Audit Schedule Table */}
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Audit ID</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">SOP</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Audit Type</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Scheduled Date</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Auditor</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Priority</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {auditSchedule.map((audit) => (
                      <tr key={audit.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-bold text-orange-600">{audit.id}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="font-semibold">{audit.sopId}</div>
                          <div className="text-xs text-gray-500">{audit.sopTitle}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{audit.auditType}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{audit.scheduledDate}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{audit.auditor}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-1">
                            <div className={`w-3 h-3 rounded-full ${getPriorityColor(audit.priority)}`}></div>
                            <span className="text-sm font-semibold text-gray-700">{audit.priority}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(audit.status)}`}>
                            {audit.status}
                          </span>
                          {audit.findings > 0 && (
                            <div className="text-xs text-orange-600 mt-1">{audit.findings} findings</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setSelectedAudit(audit)}
                              className="text-orange-600 hover:text-orange-700 font-semibold"
                            >
                              View
                            </button>
                            {audit.status === 'Completed' && (
                              <button className="text-green-600 hover:text-green-700 font-semibold">Report</button>
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

          {/* Audit Findings View */}
          {activeView === 'findings' && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Audit Findings</h3>
                <p className="text-gray-600">Track non-conformances and observations</p>
              </div>

              <div className="space-y-4">
                {auditFindings.map((finding) => (
                  <div key={finding.id} className="bg-white border-2 border-gray-200 rounded-lg p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">
                            {finding.id}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-semibold">
                            {finding.sopId}
                          </span>
                          <h4 className="font-bold text-gray-800">{finding.sopTitle}</h4>
                        </div>
                        <div className="flex items-center space-x-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(finding.severity)}`}>
                            {finding.severity} Severity
                          </span>
                          <span className="text-sm text-gray-600">{finding.findingType}</span>
                          <span className="text-sm text-gray-600">•</span>
                          <span className="text-sm text-gray-600">Identified: {finding.identifiedDate}</span>
                        </div>
                      </div>
                      <span className={`ml-4 px-3 py-1 rounded-full text-xs font-semibold border ${getFindingStatusColor(finding.status)}`}>
                        {finding.status}
                      </span>
                    </div>

                    {/* Finding Details */}
                    <div className="space-y-3 mb-4">
                      <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                        <div className="text-xs font-semibold text-red-700 mb-1">Finding Description</div>
                        <div className="text-sm text-gray-700">{finding.description}</div>
                      </div>
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
                        <div className="text-xs font-semibold text-yellow-700 mb-1">Root Cause Analysis</div>
                        <div className="text-sm text-gray-700">{finding.rootCause}</div>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                        <div className="text-xs font-semibold text-green-700 mb-1">Corrective Action Plan (CAPA)</div>
                        <div className="text-sm text-gray-700">{finding.correctiveAction}</div>
                      </div>
                    </div>

                    {/* Responsibility & Timeline */}
                    <div className="grid grid-cols-3 gap-4 text-sm bg-gray-50 rounded-lg p-3">
                      <div>
                        <span className="text-gray-500">Responsible Person:</span>
                        <div className="font-bold text-gray-700">{finding.responsiblePerson}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Target Completion:</span>
                        <div className="font-bold text-gray-700">{finding.targetDate}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Verification:</span>
                        <div className="font-bold text-gray-700">{finding.verificationStatus}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SOPAuditReview;