import React, { useState } from 'react';
import { X, Download, Calendar, Clock, Users, CheckSquare, Plus, Trash2, AlertCircle } from 'lucide-react';

const DailyTaskGenerator = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [customTask, setCustomTask] = useState({ task: '', time: '', priority: 'Medium', assignee: '' });

  const departments = [
    'All Departments', 'HR', 'Finance', 'Nursing', 'Medical', 'Administration',
    'IT', 'Pharmacy', 'Laboratory', 'Housekeeping', 'Security'
  ];

  const priorityColors = {
    High: 'red',
    Medium: 'yellow',
    Low: 'green'
  };

  const autoGenerateTasks = () => {
    const autoTasks = [
      { task: 'Review pending leave applications', time: '09:00 AM - 09:30 AM', priority: 'High', department: 'HR', assignee: 'HR Manager' },
      { task: 'Update attendance register', time: '09:30 AM - 10:00 AM', priority: 'High', department: 'HR', assignee: 'HR Executive' },
      { task: 'Process new recruitment requisitions', time: '10:00 AM - 11:00 AM', priority: 'Medium', department: 'HR', assignee: 'Recruitment Team' },
      { task: 'Conduct orientation for new joiners', time: '11:00 AM - 12:00 PM', priority: 'High', department: 'HR', assignee: 'Training Coordinator' },
      { task: 'Review and approve expense reimbursements', time: '02:00 PM - 03:00 PM', priority: 'Medium', department: 'Finance', assignee: 'Finance Head' },
      { task: 'Update employee master data', time: '03:00 PM - 04:00 PM', priority: 'Low', department: 'HR', assignee: 'HR Data Analyst' },
      { task: 'Prepare daily staffing report', time: '04:00 PM - 04:30 PM', priority: 'High', department: 'Nursing', assignee: 'Nursing Supervisor' },
      { task: 'Review IT security logs', time: '04:30 PM - 05:00 PM', priority: 'Medium', department: 'IT', assignee: 'IT Security Officer' },
      { task: 'Complete pending performance appraisals', time: '02:00 PM - 03:30 PM', priority: 'High', department: 'HR', assignee: 'Department Heads' },
      { task: 'Verify and submit training attendance', time: '03:30 PM - 04:00 PM', priority: 'Low', department: 'Training', assignee: 'Training Coordinator' }
    ];

    // Filter by selected departments
    let filtered = autoTasks;
    if (selectedDepartments.length > 0 && !selectedDepartments.includes('All Departments')) {
      filtered = autoTasks.filter(t => selectedDepartments.includes(t.department));
    }

    setTasks(filtered);
  };

  const addCustomTask = () => {
    if (customTask.task && customTask.time) {
      setTasks([...tasks, { ...customTask, department: selectedDepartments[0] || 'General' }]);
      setCustomTask({ task: '', time: '', priority: 'Medium', assignee: '' });
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const exportToPDF = () => {
    window.print();
  };

  const exportToExcel = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Task,Time,Priority,Department,Assignee\n"
      + tasks.map(t => `"${t.task}","${t.time}","${t.priority}","${t.department}","${t.assignee}"`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `daily_tasks_${selectedDate}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-t-2xl z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckSquare className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Daily Task List Generator</h2>
                <p className="text-blue-100 text-sm">Auto-generate time-bound tasks for all departments</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Configuration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Select Departments
              </label>
              <select
                multiple
                value={selectedDepartments}
                onChange={(e) => setSelectedDepartments([...e.target.selectedOptions].map(opt => opt.value))}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={autoGenerateTasks}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition flex items-center justify-center space-x-2"
            >
              <Trash2 className="w-5 h-5" />
              <span>Auto-Generate Tasks</span>
            </button>
            <button
              onClick={exportToPDF}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Export PDF</span>
            </button>
            <button
              onClick={exportToExcel}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Export Excel</span>
            </button>
          </div>

          {/* Add Custom Task */}
          <div className="bg-slate-50 rounded-xl p-4 border-2 border-slate-200">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-blue-600" />
              Add Custom Task
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Task description"
                value={customTask.task}
                onChange={(e) => setCustomTask({...customTask, task: e.target.value})}
                className="px-3 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Time (e.g., 09:00 AM)"
                value={customTask.time}
                onChange={(e) => setCustomTask({...customTask, time: e.target.value})}
                className="px-3 py-2 border rounded-lg"
              />
              <select
                value={customTask.priority}
                onChange={(e) => setCustomTask({...customTask, priority: e.target.value})}
                className="px-3 py-2 border rounded-lg"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <button
                onClick={addCustomTask}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Add Task
              </button>
            </div>
          </div>

          {/* Tasks List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center justify-between">
              <span>Generated Tasks ({tasks.length})</span>
              <span className="text-sm text-gray-500 font-normal">For {selectedDate}</span>
            </h3>

            {tasks.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-xl">
                <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No tasks generated yet</p>
                <p className="text-gray-400 text-sm">Click "Auto-Generate Tasks" to get started</p>
              </div>
            ) : (
              <div className="space-y-3">
                {tasks.map((task, idx) => (
                  <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 transition">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${priorityColors[task.priority]}-100 text-${priorityColors[task.priority]}-700`}>
                            {task.priority}
                          </span>
                          <span className="text-sm text-gray-500">{task.department}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 text-lg mb-1">{task.task}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {task.time}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {task.assignee}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeTask(idx)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTaskGenerator;