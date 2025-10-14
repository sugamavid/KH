import React, { useState } from 'react';
import { X, GitBranch, Download, ZoomIn, ZoomOut } from 'lucide-react';

const SOPProcessFlow = ({ onClose }) => {
  const [selectedProcess, setSelectedProcess] = useState('recruitment');

  const processes = {
    recruitment: {
      title: 'Recruitment Process Flow',
      nodes: [
        { id: 1, label: 'Position Requisition', type: 'start' },
        { id: 2, label: 'HOD Approval', type: 'decision' },
        { id: 3, label: 'Job Posting', type: 'process' },
        { id: 4, label: 'Application Screening', type: 'process' },
        { id: 5, label: 'Interview Panel', type: 'process' },
        { id: 6, label: 'Selection Decision', type: 'decision' },
        { id: 7, label: 'Offer Letter', type: 'process' },
        { id: 8, label: 'Joining Complete', type: 'end' }
      ]
    },
    leave: {
      title: 'Leave Approval Flow',
      nodes: [
        { id: 1, label: 'Employee Request', type: 'start' },
        { id: 2, label: 'Supervisor Review', type: 'decision' },
        { id: 3, label: 'HR Verification', type: 'process' },
        { id: 4, label: 'Final Approval', type: 'decision' },
        { id: 5, label: 'Leave Granted', type: 'end' }
      ]
    },
    performance: {
      title: 'Performance Appraisal Flow',
      nodes: [
        { id: 1, label: 'Self Assessment', type: 'start' },
        { id: 2, label: 'Supervisor Review', type: 'process' },
        { id: 3, label: 'HOD Evaluation', type: 'process' },
        { id: 4, label: 'HR Review', type: 'process' },
        { id: 5, label: 'Final Rating', type: 'decision' },
        { id: 6, label: 'Feedback Meeting', type: 'process' },
        { id: 7, label: 'Appraisal Complete', type: 'end' }
      ]
    }
  };

  const getNodeStyle = (type) => {
    switch (type) {
      case 'start': return 'bg-green-100 border-green-500 text-green-900';
      case 'end': return 'bg-red-100 border-red-500 text-red-900';
      case 'decision': return 'bg-yellow-100 border-yellow-500 text-yellow-900 transform rotate-45';
      case 'process': return 'bg-blue-100 border-blue-500 text-blue-900';
      default: return 'bg-slate-100 border-slate-500 text-slate-900';
    }
  };

  const currentProcess = processes[selectedProcess];

  return (
    <div className=\"fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4\">\n      <div className=\"bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col\">\n        <div className=\"bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6\">\n          <div className=\"flex items-center justify-between\">\n            <div className=\"flex items-center gap-3\">\n              <div className=\"w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center\">\n                <GitBranch className=\"w-8 h-8 text-white\" />\n              </div>\n              <div>\n                <h2 className=\"text-3xl font-bold text-white\">Process Flow Visualizer</h2>\n                <p className=\"text-teal-100\">Visual flowcharts for SOP procedures</p>\n              </div>\n            </div>\n            <button onClick={onClose} className=\"p-2 hover:bg-white/20 rounded-lg transition-colors\">\n              <X className=\"w-6 h-6 text-white\" />\n            </button>\n          </div>\n        </div>\n\n        <div className=\"flex-1 overflow-y-auto p-8 bg-slate-50\">\n          <div className=\"space-y-6\">\n            {/* Process Selector */}\n            <div className=\"flex gap-3\">\n              {Object.keys(processes).map(key => (\n                <button\n                  key={key}\n                  onClick={() => setSelectedProcess(key)}\n                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${\n                    selectedProcess === key\n                      ? 'bg-teal-600 text-white'\n                      : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-teal-400'\n                  }`}\n                >\n                  {processes[key].title}\n                </button>\n              ))}\n            </div>\n\n            {/* Flowchart */}\n            <div className=\"bg-white border-2 border-slate-200 rounded-xl p-8\">\n              <div className=\"flex items-center justify-between mb-6\">\n                <h3 className=\"text-xl font-bold text-slate-900\">{currentProcess.title}</h3>\n                <div className=\"flex gap-2\">\n                  <button className=\"p-2 bg-slate-100 rounded-lg hover:bg-slate-200\">\n                    <ZoomIn className=\"w-5 h-5\" />\n                  </button>\n                  <button className=\"p-2 bg-slate-100 rounded-lg hover:bg-slate-200\">\n                    <ZoomOut className=\"w-5 h-5\" />\n                  </button>\n                  <button className=\"px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 flex items-center gap-2\">\n                    <Download className=\"w-4 h-4\" />\n                    Export\n                  </button>\n                </div>\n              </div>\n\n              <div className=\"flex flex-col items-center gap-6\">\n                {currentProcess.nodes.map((node, idx) => (\n                  <div key={node.id} className=\"flex flex-col items-center\">\n                    <div className={`w-48 h-24 border-4 rounded-xl flex items-center justify-center font-bold text-center p-4 ${\n                      getNodeStyle(node.type)\n                    }`}>\n                      <span className={node.type === 'decision' ? 'transform -rotate-45' : ''}>\n                        {node.label}\n                      </span>\n                    </div>\n                    {idx < currentProcess.nodes.length - 1 && (\n                      <div className=\"w-1 h-8 bg-slate-400\"></div>\n                    )}\n                  </div>\n                ))}\n              </div>\n            </div>\n\n            {/* Legend */}\n            <div className=\"bg-white border-2 border-slate-200 rounded-xl p-6\">\n              <h4 className=\"font-bold text-slate-900 mb-4\">Legend</h4>\n              <div className=\"grid grid-cols-4 gap-4\">\n                <div className=\"flex items-center gap-3\">\n                  <div className=\"w-12 h-8 bg-green-100 border-2 border-green-500 rounded\"></div>\n                  <span className=\"text-sm text-slate-700\">Start</span>\n                </div>\n                <div className=\"flex items-center gap-3\">\n                  <div className=\"w-12 h-8 bg-blue-100 border-2 border-blue-500 rounded\"></div>\n                  <span className=\"text-sm text-slate-700\">Process</span>\n                </div>\n                <div className=\"flex items-center gap-3\">\n                  <div className=\"w-12 h-8 bg-yellow-100 border-2 border-yellow-500 rounded transform rotate-45\"></div>\n                  <span className=\"text-sm text-slate-700\">Decision</span>\n                </div>\n                <div className=\"flex items-center gap-3\">\n                  <div className=\"w-12 h-8 bg-red-100 border-2 border-red-500 rounded\"></div>\n                  <span className=\"text-sm text-slate-700\">End</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default SOPProcessFlow;
