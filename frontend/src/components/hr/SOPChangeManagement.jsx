import React, { useState } from 'react';
import { X, GitCommit, Clock, CheckCircle, AlertCircle, Users, Calendar, FileText, Send, Eye, Download } from 'lucide-react';

const SOPChangeManagement = ({ isOpen, onClose, onNavigate }) => {
  const [activeView, setActiveView] = useState('requests');
  const [selectedChange, setSelectedChange] = useState(null);

  // Mock change requests data
  const changeRequests = [
    {
      id: 'CR-001',
      sopId: 'SOP-003',
      sopTitle: 'Leave Application Process',
      requestedBy: 'Sarah Johnson',
      department: 'HR',
      dateRequested: '2024-01-15',
      status: 'Pending Approval',
      priority: 'High',
      changeType: 'Major Revision',
      currentVersion: 'v2.3',
      proposedVersion: 'v3.0',
      impactLevel: 'High',
      approvalProgress: 2,
      totalApprovals: 4,
      description: 'Update leave policy to include new wellness leave category and revise approval workflow for extended leaves',
      affectedUsers: 524,
      estimatedEffort: '40 hours',
      approvers: [
        { name: 'HR Director', status: 'Approved', date: '2024-01-16' },
        { name: 'Legal Counsel', status: 'Approved', date: '2024-01-17' },
        { name: 'CFO', status: 'Pending', date: null },
        { name: 'CEO', status: 'Pending', date: null },
      ],
    },
    {
      id: 'CR-002',
      sopId: 'SOP-009',
      sopTitle: 'Data Security Procedure',
      requestedBy: 'Michael Chen',
      department: 'IT',
      dateRequested: '2024-01-18',
      status: 'Under Review',
      priority: 'Critical',
      changeType: 'Security Update',
      currentVersion: 'v5.0',
      proposedVersion: 'v5.1',
      impactLevel: 'Critical',
      approvalProgress: 1,
      totalApprovals: 3,
      description: 'Implement new encryption standards and multi-factor authentication requirements for all data access',
      affectedUsers: 450,
      estimatedEffort: '120 hours',
      approvers: [
        { name: 'IT Director', status: 'Approved', date: '2024-01-18' },
        { name: 'Security Officer', status: 'Pending', date: null },
        { name: 'CTO', status: 'Pending', date: null },
      ],
    },
    {
      id: 'CR-003',
      sopId: 'SOP-005',
      sopTitle: 'Emergency Response',
      requestedBy: 'Dr. Emily Rodriguez',
      department: 'Emergency',
      dateRequested: '2024-01-12',
      status: 'Approved',
      priority: 'High',
      changeType: 'Protocol Update',
      currentVersion: 'v3.5',
      proposedVersion: 'v3.6',
      impactLevel: 'High',
      approvalProgress: 3,
      totalApprovals: 3,
      description: 'Update triage protocol based on latest clinical guidelines and add pandemic response procedures',
      affectedUsers: 524,
      estimatedEffort: '60 hours',
      approvers: [
        { name: 'Medical Director', status: 'Approved', date: '2024-01-13' },
        { name: 'Safety Officer', status: 'Approved', date: '2024-01-14' },
        { name: 'COO', status: 'Approved', date: '2024-01-15' },
      ],
    },
    {
      id: 'CR-004',
      sopId: 'SOP-001',
      sopTitle: 'Employee Onboarding',
      requestedBy: 'James Wilson',
      department: 'HR',
      dateRequested: '2024-01-20',
      status: 'Rejected',
      priority: 'Medium',
      changeType: 'Minor Update',
      currentVersion: 'v2.1',
      proposedVersion: 'v2.2',
      impactLevel: 'Low',
      approvalProgress: 1,
      totalApprovals: 3,
      description: 'Simplify documentation requirements for new hires',
      affectedUsers: 85,
      estimatedEffort: '15 hours',
      approvers: [
        { name: 'HR Director', status: 'Rejected', date: '2024-01-21', reason: 'Documentation requirements are mandated by compliance regulations' },
        { name: 'Compliance Officer', status: 'Not Reviewed', date: null },
        { name: 'COO', status: 'Not Reviewed', date: null },
      ],
    },
    {
      id: 'CR-005',
      sopId: 'SOP-011',
      sopTitle: 'Medication Administration',
      requestedBy: 'Nurse Lisa Martinez',
      department: 'Clinical',
      dateRequested: '2024-01-10',
      status: 'Implemented',
      priority: 'High',
      changeType: 'Safety Enhancement',
      currentVersion: 'v4.2',
      proposedVersion: 'v4.3',
      impactLevel: 'High',
      approvalProgress: 3,
      totalApprovals: 3,
      description: 'Add barcode scanning requirement and double-check protocol for high-risk medications',
      affectedUsers: 156,
      estimatedEffort: '80 hours',
      implementedDate: '2024-01-17',
      approvers: [
        { name: 'Pharmacy Director', status: 'Approved', date: '2024-01-11' },
        { name: 'Medical Director', status: 'Approved', date: '2024-01-12' },
        { name: 'COO', status: 'Approved', date: '2024-01-13' },
      ],
    },
  ];

  // Mock version history
  const versionHistory = [
    { version: 'v4.3', date: '2024-01-17', author: 'Nurse Lisa Martinez', changeType: 'Safety Enhancement', status: 'Current', changes: 12, description: 'Added barcode scanning and double-check protocol' },
    { version: 'v4.2', date: '2023-11-05', author: 'Dr. Robert Kim', changeType: 'Protocol Update', status: 'Archived', changes: 8, description: 'Updated dosage calculation methods' },
    { version: 'v4.1', date: '2023-08-20', author: 'Pharmacy Director', changeType: 'Compliance Update', status: 'Archived', changes: 5, description: 'Added new regulatory requirements' },
    { version: 'v4.0', date: '2023-05-15', author: 'Medical Director', changeType: 'Major Revision', status: 'Archived', changes: 24, description: 'Complete rewrite of medication administration protocol' },
    { version: 'v3.8', date: '2023-03-10', author: 'Safety Committee', changeType: 'Safety Enhancement', status: 'Archived', changes: 6, description: 'Enhanced error reporting procedures' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Pending Approval': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'Under Review': 'bg-blue-100 text-blue-700 border-blue-300',
      'Approved': 'bg-green-100 text-green-700 border-green-300',
      'Rejected': 'bg-red-100 text-red-700 border-red-300',
      'Implemented': 'bg-purple-100 text-purple-700 border-purple-300',
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

  const getImpactColor = (impact) => {
    const colors = {
      'Critical': 'text-red-600',
      'High': 'text-orange-600',
      'Medium': 'text-yellow-600',
      'Low': 'text-green-600',
    };
    return colors[impact] || 'text-gray-600';
  };

  const getApprovalStatusIcon = (status) => {
    if (status === 'Approved') return <CheckCircle className="w-5 h-5 text-green-600" />;
    if (status === 'Rejected') return <AlertCircle className="w-5 h-5 text-red-600" />;
    return <Clock className="w-5 h-5 text-gray-400" />;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <GitCommit className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-bold">SOP Change Management</h2>
              <p className="text-sm text-blue-100">Version Control & Approval Workflows</p>
            </div>
          </div>
          <button onClick={onClose} className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* View Tabs */}
        <div className="bg-gray-50 border-b border-gray-200 px-6">
          <div className="flex space-x-6">
            {['requests', 'approvals', 'history', 'rollback'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`py-3 px-4 font-semibold border-b-2 transition-colors ${
                  activeView === view
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                {view === 'requests' && 'Change Requests'}
                {view === 'approvals' && 'My Approvals'}
                {view === 'history' && 'Version History'}
                {view === 'rollback' && 'Rollback Center'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 160px)' }}>
          {/* Change Requests View */}
          {activeView === 'requests' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Active Change Requests</h3>
                  <p className="text-gray-600">Track and manage all SOP change requests</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Submit New Request</span>
                </button>
              </div>

              <div className="space-y-4">
                {changeRequests.map((request) => (
                  <div key={request.id} className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                            {request.id}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-semibold">
                            {request.sopId}
                          </span>
                          <h4 className="font-bold text-gray-800 text-lg">{request.sopTitle}</h4>
                        </div>
                        <p className="text-gray-600 mb-3">{request.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                          <div>
                            <span className="text-gray-500">Requested By:</span>
                            <div className="font-semibold text-gray-700">{request.requestedBy}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Department:</span>
                            <div className="font-semibold text-gray-700">{request.department}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Date:</span>
                            <div className="font-semibold text-gray-700">{request.dateRequested}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Change Type:</span>
                            <div className="font-semibold text-gray-700">{request.changeType}</div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 space-y-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border block text-center ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                        <div className="flex items-center space-x-1">
                          <div className={`w-2 h-2 rounded-full ${getPriorityColor(request.priority)}`}></div>
                          <span className="text-xs font-semibold text-gray-600">{request.priority}</span>
                        </div>
                      </div>
                    </div>

                    {/* Version Info */}
                    <div className="flex items-center space-x-6 mb-3 text-sm bg-gray-50 rounded-lg p-3">
                      <div>
                        <span className="text-gray-500">Current Version:</span>
                        <span className="font-bold text-gray-700 ml-2">{request.currentVersion}</span>
                      </div>
                      <span className="text-gray-400">→</span>
                      <div>
                        <span className="text-gray-500">Proposed Version:</span>
                        <span className="font-bold text-blue-600 ml-2">{request.proposedVersion}</span>
                      </div>
                      <div className="border-l border-gray-300 pl-6">
                        <span className="text-gray-500">Impact:</span>
                        <span className={`font-bold ml-2 ${getImpactColor(request.impactLevel)}`}>{request.impactLevel}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Affected Users:</span>
                        <span className="font-bold text-gray-700 ml-2">{request.affectedUsers}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Effort:</span>
                        <span className="font-bold text-gray-700 ml-2">{request.estimatedEffort}</span>
                      </div>
                    </div>

                    {/* Approval Progress */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">Approval Progress</span>
                        <span className="text-sm text-gray-600">{request.approvalProgress}/{request.totalApprovals} approved</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${(request.approvalProgress / request.totalApprovals) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedChange(request)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-1"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors">
                        View Impact Analysis
                      </button>
                      {request.status === 'Implemented' && (
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex items-center space-x-1">
                          <Download className="w-4 h-4" />
                          <span>Download {request.proposedVersion}</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Version History View */}
          {activeView === 'history' && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Version History</h3>
                <p className="text-gray-600">Complete audit trail of all SOP changes</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Version</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Author</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Change Type</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Changes</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {versionHistory.map((version, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-bold text-blue-600">{version.version}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{version.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{version.author}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-semibold text-gray-700">{version.changeType}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                            {version.changes} changes
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            version.status === 'Current' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {version.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-700 font-semibold">View</button>
                            <button className="text-gray-600 hover:text-gray-700 font-semibold">Download</button>
                            {version.status !== 'Current' && (
                              <button className="text-orange-600 hover:text-orange-700 font-semibold">Restore</button>
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
        </div>

        {/* Change Details Modal */}
        {selectedChange && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Change Request Details</h3>
                  <p className="text-sm text-blue-100">{selectedChange.id} - {selectedChange.sopTitle}</p>
                </div>
                <button onClick={() => setSelectedChange(null)} className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 80px)' }}>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-700">{selectedChange.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Approval Chain</h4>
                  <div className="space-y-3">
                    {selectedChange.approvers.map((approver, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-gray-50 rounded-lg p-3">
                        {getApprovalStatusIcon(approver.status)}
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800">{approver.name}</div>
                          <div className="text-sm text-gray-600">
                            {approver.status} {approver.date && `on ${approver.date}`}
                          </div>
                          {approver.reason && (
                            <div className="mt-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded p-2">
                              <strong>Reason:</strong> {approver.reason}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Approve Request
                  </button>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Reject Request
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                    Request Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SOPChangeManagement;