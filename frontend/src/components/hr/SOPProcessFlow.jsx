import React, { useState } from 'react';
import { X, GitBranch, ZoomIn, ZoomOut, Download } from 'lucide-react';

const SOPProcessFlow = ({ isOpen, onClose, onNavigate }) => {
  const [selectedProcess, setSelectedProcess] = useState('onboarding');

  const processes = {
    onboarding: {
      title: 'Employee Onboarding Process',
      nodes: [
        { id: 1, type: 'start', label: 'New Hire Joins' },
        { id: 2, type: 'process', label: 'Complete Documentation' },
        { id: 3, type: 'process', label: 'System Access Setup' },
        { id: 4, type: 'decision', label: 'Background Check Complete?' },
        { id: 5, type: 'process', label: 'Orientation Training' },
        { id: 6, type: 'process', label: 'Department Assignment' },
        { id: 7, type: 'end', label: 'Onboarding Complete' },
      ],
    },
    leave: {
      title: 'Leave Application Process',
      nodes: [
        { id: 1, type: 'start', label: 'Employee Submits Request' },
        { id: 2, type: 'process', label: 'Manager Review' },
        { id: 3, type: 'decision', label: 'Approved?' },
        { id: 4, type: 'process', label: 'Update Leave Balance' },
        { id: 5, type: 'process', label: 'Send Notification' },
        { id: 6, type: 'end', label: 'Process Complete' },
      ],
    },
    performance: {
      title: 'Performance Review Process',
      nodes: [
        { id: 1, type: 'start', label: 'Review Period Begins' },
        { id: 2, type: 'process', label: 'Self Assessment' },
        { id: 3, type: 'process', label: 'Manager Evaluation' },
        { id: 4, type: 'process', label: 'Review Meeting' },
        { id: 5, type: 'decision', label: 'Goals Met?' },
        { id: 6, type: 'process', label: 'Set New Goals' },
        { id: 7, type: 'end', label: 'Review Complete' },
      ],
    },
  };

  const currentProcess = processes[selectedProcess];

  const getNodeStyle = (type) => {
    const styles = {
      start: 'bg-green-100 border-green-500 text-green-800',
      process: 'bg-blue-100 border-blue-500 text-blue-800',
      decision: 'bg-yellow-100 border-yellow-500 text-yellow-800',
      end: 'bg-red-100 border-red-500 text-red-800',
    };
    return styles[type] || styles.process;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white bg-opacity-20 backdrop-blur rounded-xl flex items-center justify-center">
                <GitBranch className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Process Flow Visualizer</h2>
                <p className="text-teal-100">Visual flowcharts for SOP procedures</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
          <div className="space-y-6">
            {/* Process Selector */}
            <div className="flex gap-3">
              {Object.keys(processes).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedProcess(key)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedProcess === key
                      ? 'bg-teal-600 text-white'
                      : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-teal-400'
                  }`}
                >
                  {processes[key].title}
                </button>
              ))}
            </div>

            {/* Flowchart */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">{currentProcess.title}</h3>
                <div className="flex gap-2">
                  <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200">
                    <ZoomIn className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200">
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                {currentProcess.nodes.map((node, idx) => (
                  <div key={node.id} className="flex flex-col items-center">
                    <div className={`w-48 h-24 border-4 rounded-xl flex items-center justify-center font-bold text-center p-4 ${getNodeStyle(node.type)}`}>
                      <span className={node.type === 'decision' ? 'transform -rotate-45' : ''}>
                        {node.label}
                      </span>
                    </div>
                    {idx < currentProcess.nodes.length - 1 && (
                      <div className="w-1 h-8 bg-slate-400"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-4">Legend</h4>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-green-100 border-2 border-green-500 rounded"></div>
                  <span className="text-sm text-slate-700">Start</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-blue-100 border-2 border-blue-500 rounded"></div>
                  <span className="text-sm text-slate-700">Process</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-yellow-100 border-2 border-yellow-500 rounded transform rotate-45"></div>
                  <span className="text-sm text-slate-700">Decision</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-red-100 border-2 border-red-500 rounded"></div>
                  <span className="text-sm text-slate-700">End</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOPProcessFlow;
