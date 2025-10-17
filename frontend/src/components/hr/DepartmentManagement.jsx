import React, { useState, useEffect } from 'react';
import {
  Building2, Users, Plus, Edit, Trash2, Save, X, Search, Filter, ChevronDown,
  User, Mail, Phone, MapPin, Briefcase, Calendar, DollarSign, Target,
  CheckCircle, AlertCircle, TrendingUp, FileText, Settings
} from 'lucide-react';

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Initial departments data
  const initialDepartments = [
    {
      id: 'DEPT-001',
      name: 'Clinical Services',
      code: 'CLIN',
      head: 'Dr. Sarah Johnson',
      headEmail: 'sarah.johnson@koyilihospital.com',
      headPhone: '+91-9876543210',
      employeeCount: 45,
      budget: 5000000,
      status: 'active',
      location: 'Main Building - Floor 2',
      description: 'Primary clinical care services including consultations, diagnostics, and treatment',
      establishedDate: '2018-01-15',
      functions: ['Patient Care', 'Diagnostics', 'Treatment Planning', 'Clinical Research'],
      kpis: {
        patientSatisfaction: 92,
        avgWaitTime: '15 mins',
        staffUtilization: 88
      }
    },
    {
      id: 'DEPT-002',
      name: 'Human Resources',
      code: 'HR',
      head: 'Ms. Priya Sharma',
      headEmail: 'priya.sharma@koyilihospital.com',
      headPhone: '+91-9876543211',
      employeeCount: 12,
      budget: 2000000,
      status: 'active',
      location: 'Admin Building - Floor 1',
      description: 'Manages recruitment, employee relations, payroll, and HR operations',
      establishedDate: '2018-01-15',
      functions: ['Recruitment', 'Training', 'Payroll', 'Employee Relations', 'Compliance'],
      kpis: {
        timeToHire: '21 days',
        employeeSatisfaction: 85,
        trainingCompletion: 94
      }
    },
    {
      id: 'DEPT-003',
      name: 'Nursing Department',
      code: 'NURS',
      head: 'Ms. Anjali Desai',
      headEmail: 'anjali.desai@koyilihospital.com',
      headPhone: '+91-9876543212',
      employeeCount: 68,
      budget: 3500000,
      status: 'active',
      location: 'Main Building - All Floors',
      description: 'Comprehensive nursing care across all departments and wards',
      establishedDate: '2018-01-15',
      functions: ['Patient Care', 'Medication Administration', 'Ward Management', 'Emergency Response'],
      kpis: {
        patientCareScore: 94,
        medicationAccuracy: 99,
        staffTurnover: 8
      }
    },
    {
      id: 'DEPT-004',
      name: 'Emergency Services',
      code: 'EMER',
      head: 'Dr. Rajesh Kumar',
      headEmail: 'rajesh.kumar@koyilihospital.com',
      headPhone: '+91-9876543213',
      employeeCount: 32,
      budget: 4000000,
      status: 'active',
      location: 'Main Building - Ground Floor',
      description: '24/7 emergency medical services and trauma care',
      establishedDate: '2018-01-15',
      functions: ['Emergency Care', 'Trauma Management', 'Critical Care', 'Ambulance Services'],
      kpis: {
        responseTime: '5 mins',
        survivalRate: 96,
        bedUtilization: 82
      }
    },
    {
      id: 'DEPT-005',
      name: 'Laboratory',
      code: 'LAB',
      head: 'Dr. Meera Patel',
      headEmail: 'meera.patel@koyilihospital.com',
      headPhone: '+91-9876543214',
      employeeCount: 18,
      budget: 2500000,
      status: 'active',
      location: 'Main Building - Floor 1',
      description: 'Diagnostic laboratory services including pathology, microbiology, and biochemistry',
      establishedDate: '2018-02-01',
      functions: ['Pathology', 'Microbiology', 'Biochemistry', 'Blood Bank'],
      kpis: {
        turnaroundTime: '2 hours',
        accuracy: 99.5,
        testVolume: 450
      }
    },
    {
      id: 'DEPT-006',
      name: 'Finance & Accounts',
      code: 'FIN',
      head: 'Mr. Arun Verma',
      headEmail: 'arun.verma@koyilihospital.com',
      headPhone: '+91-9876543215',
      employeeCount: 15,
      budget: 1800000,
      status: 'active',
      location: 'Admin Building - Floor 2',
      description: 'Financial management, accounting, billing, and budgeting',
      establishedDate: '2018-01-15',
      functions: ['Accounting', 'Billing', 'Budgeting', 'Financial Reporting', 'Audit'],
      kpis: {
        revenueCollection: 98,
        paymentProcessing: '24 hours',
        auditCompliance: 100
      }
    }
  ];

  // Load departments on mount from backend
  useEffect(() => {
    fetchDepartments();
  }, []);

  // Fetch departments from backend
  const fetchDepartments = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/departments`);
      if (response.ok) {
        const data = await response.json();
        // If backend has no departments or has only basic departments, use our detailed initial departments
        if (data.length === 0) {
          setDepartments(initialDepartments);
        } else {
          setDepartments(data);
        }
      } else {
        // Fallback to initial departments if API fails
        setDepartments(initialDepartments);
      }
    } catch (error) {
      console.error('Failed to fetch departments:', error);
      // Fallback to initial departments
      setDepartments(initialDepartments);
    }
  };

  // Form state for add/edit
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    head: '',
    headEmail: '',
    headPhone: '',
    employeeCount: 0,
    budget: 0,
    status: 'active',
    location: '',
    description: '',
    establishedDate: '',
    functions: []
  });

  const resetForm = () => {
    setFormData({
      name: '',
      code: '',
      head: '',
      headEmail: '',
      headPhone: '',
      employeeCount: 0,
      budget: 0,
      status: 'active',
      location: '',
      description: '',
      establishedDate: '',
      functions: []
    });
  };

  const handleAddDepartment = async () => {
    const newDept = {
      id: formData.code.toLowerCase() || `dept-${Date.now()}`,
      name: formData.name,
      description: formData.description,
      icon: 'folder',
      color: 'blue'
    };
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/departments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDept)
      });
      
      if (response.ok) {
        const createdDept = await response.json();
        // Add full details to created department for display
        const fullDept = {
          ...createdDept,
          code: formData.code,
          head: formData.head,
          headEmail: formData.headEmail,
          headPhone: formData.headPhone,
          employeeCount: formData.employeeCount,
          budget: formData.budget,
          status: formData.status,
          location: formData.location,
          establishedDate: formData.establishedDate,
          functions: formData.functions,
          kpis: {
            patientSatisfaction: 0,
            avgWaitTime: 'N/A',
            staffUtilization: 0
          }
        };
        setDepartments([...departments, fullDept]);
        setShowAddModal(false);
        resetForm();
      } else {
        const error = await response.json();
        alert(`Failed to create department: ${error.detail}`);
      }
    } catch (error) {
      console.error('Error creating department:', error);
      alert('Failed to create department. Please try again.');
    }
  };

  const handleEditDepartment = async () => {
    const updatedDept = {
      id: selectedDepartment.id,
      name: formData.name,
      description: formData.description,
      icon: selectedDepartment.icon || 'folder',
      color: selectedDepartment.color || 'blue'
    };
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/departments/${selectedDepartment.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedDept)
      });
      
      if (response.ok) {
        const updated = await response.json();
        // Update with full details
        const fullUpdated = {
          ...updated,
          code: formData.code,
          head: formData.head,
          headEmail: formData.headEmail,
          headPhone: formData.headPhone,
          employeeCount: formData.employeeCount,
          budget: formData.budget,
          status: formData.status,
          location: formData.location,
          establishedDate: formData.establishedDate,
          functions: formData.functions,
          kpis: selectedDepartment.kpis
        };
        setDepartments(departments.map(dept => 
          dept.id === selectedDepartment.id ? fullUpdated : dept
        ));
        setShowEditModal(false);
        setSelectedDepartment(null);
        resetForm();
      } else {
        const error = await response.json();
        alert(`Failed to update department: ${error.detail}`);
      }
    } catch (error) {
      console.error('Error updating department:', error);
      alert('Failed to update department. Please try again.');
    }
  };

  const handleDeleteDepartment = async (id) => {
    if (window.confirm('Are you sure you want to delete this department? This action cannot be undone.')) {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/departments/${id}`, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          setDepartments(departments.filter(dept => dept.id !== id));
        } else {
          const error = await response.json();
          alert(`Failed to delete department: ${error.detail}`);
        }
      } catch (error) {
        console.error('Error deleting department:', error);
        alert('Failed to delete department. Please try again.');
      }
    }
  };

  const openEditModal = (dept) => {
    setSelectedDepartment(dept);
    setFormData({
      name: dept.name,
      code: dept.code,
      head: dept.head,
      headEmail: dept.headEmail,
      headPhone: dept.headPhone,
      employeeCount: dept.employeeCount,
      budget: dept.budget,
      status: dept.status,
      location: dept.location,
      description: dept.description,
      establishedDate: dept.establishedDate,
      functions: dept.functions
    });
    setShowEditModal(true);
  };

  // Filter departments
  const filteredDepartments = departments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dept.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dept.head.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || dept.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: departments.length,
    active: departments.filter(d => d.status === 'active').length,
    inactive: departments.filter(d => d.status === 'inactive').length,
    totalEmployees: departments.reduce((sum, d) => sum + d.employeeCount, 0),
    totalBudget: departments.reduce((sum, d) => sum + d.budget, 0)
  };

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            Department Management
          </h1>
          <p className="text-slate-600 mt-1">Manage hospital departments, staff, and operations</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center shadow-lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Department
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-4 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
              <div className="text-xs text-slate-600">Total Departments</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{stats.active}</div>
              <div className="text-xs text-slate-600">Active</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">{stats.inactive}</div>
              <div className="text-xs text-slate-600">Inactive</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{stats.totalEmployees}</div>
              <div className="text-xs text-slate-600">Total Staff</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">₹{(stats.totalBudget/100000).toFixed(1)}L</div>
              <div className="text-xs text-slate-600">Total Budget</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl p-4 border-2 border-slate-200 shadow-sm">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-600" />
            <input
              type="text"
              placeholder="Search departments by name, code, or head..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDepartments.map(dept => (
          <div key={dept.id} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{dept.name}</h3>
                  <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">{dept.code}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                dept.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {dept.status ? dept.status.toUpperCase() : 'ACTIVE'}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-slate-600">
                <User className="w-4 h-4 mr-2" />
                {dept.head}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Mail className="w-4 h-4 mr-2" />
                {dept.headEmail}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <MapPin className="w-4 h-4 mr-2" />
                {dept.location}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-slate-50 rounded p-2">
                <div className="text-xs text-slate-600">Employees</div>
                <div className="font-bold text-slate-900">{dept.employeeCount}</div>
              </div>
              <div className="bg-slate-50 rounded p-2">
                <div className="text-xs text-slate-600">Budget</div>
                <div className="font-bold text-slate-900">₹{(dept.budget/100000).toFixed(1)}L</div>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-4 line-clamp-2">{dept.description}</p>

            <div className="flex gap-2">
              <button
                onClick={() => openEditModal(dept)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
              >
                <Edit className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={() => handleDeleteDepartment(dept.id)}
                className="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDepartments.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border-2 border-slate-200">
          <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-600 font-medium">No departments found</p>
          <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Add Department Modal */}
      {showAddModal && (
        <DepartmentModal
          title="Add New Department"
          formData={formData}
          setFormData={setFormData}
          onSave={handleAddDepartment}
          onClose={() => { setShowAddModal(false); resetForm(); }}
        />
      )}

      {/* Edit Department Modal */}
      {showEditModal && (
        <DepartmentModal
          title="Edit Department"
          formData={formData}
          setFormData={setFormData}
          onSave={handleEditDepartment}
          onClose={() => { setShowEditModal(false); setSelectedDepartment(null); resetForm(); }}
        />
      )}
    </div>
  );
};

// Department Modal Component
const DepartmentModal = ({ title, formData, setFormData, onSave, onClose }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-160px)]">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Department Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="e.g., Cardiology"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Department Code *</label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="e.g., CARD"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Department Head *</label>
              <input
                type="text"
                name="head"
                value={formData.head}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="e.g., Dr. John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
              <input
                type="email"
                name="headEmail"
                value={formData.headEmail}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="email@koyilihospital.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
              <input
                type="tel"
                name="headPhone"
                value={formData.headPhone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="+91-9876543210"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Building - Floor"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Employee Count</label>
              <input
                type="number"
                name="employeeCount"
                value={formData.employeeCount}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Budget (₹)</label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Established Date</label>
              <input
                type="date"
                name="establishedDate"
                value={formData.establishedDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Status *</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Brief description of the department..."
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <Save className="w-5 h-5" />
            Save Department
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentManagement;