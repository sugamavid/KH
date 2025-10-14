import React, { useState, useMemo } from 'react';
import { 
  X, Search, Filter, ChevronRight, Users, Shield, FileText, 
  CheckCircle, AlertCircle, Award, TrendingUp, Calendar, MessageSquare,
  BookOpen, Home, DollarSign, Lock, LogOut, Activity, Heart, UserCheck,
  Scale, Zap, Building, Mail, Phone, MapPin, ExternalLink
} from 'lucide-react';

const AuthorityFinder = ({ onClose, onNavigateToSection }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAuthority, setSelectedAuthority] = useState(null);

  // Define authority database from By-Laws analysis
  const authorities = [
    {
      id: 'board',
      name: 'Board of Directors',
      role: 'Supreme Authority',
      level: 'executive',
      icon: Shield,
      color: 'red',
      responsibilities: [
        'Approve and amend HR By-Laws',
        'Final approval for major policy changes',
        'Strategic HR decisions',
        'Executive appointments and terminations'
      ],
      relatedSections: ['section1', 'section2', 'section14', 'section16'],
      contact: {
        email: 'board@koyilihospital.com',
        phone: '+91-XXX-XXX-XXXX',
        office: 'Executive Suite, 5th Floor'
      }
    },
    {
      id: 'hr_committee',
      name: 'HR Compliance Committee',
      role: 'Policy Review & Implementation',
      level: 'senior',
      icon: Users,
      color: 'blue',
      responsibilities: [
        'Review and recommend policy amendments',
        'Oversee compliance with By-Laws',
        'Conduct periodic policy reviews',
        'Monitor implementation effectiveness'
      ],
      relatedSections: ['section1', 'section14', 'section22', 'section29'],
      contact: {
        email: 'hrcommittee@koyilihospital.com',
        phone: '+91-XXX-XXX-XXXX',
        office: 'HR Department, 2nd Floor'
      }
    },
    {
      id: 'hr_director',
      name: 'HR Director',
      role: 'Human Resources Leadership',
      level: 'senior',
      icon: Award,
      color: 'purple',
      responsibilities: [
        'Oversee all HR operations',
        'Approve recruitment and terminations',
        'Final authority on employee matters',
        'Performance management oversight'
      ],
      relatedSections: ['section2', 'section7', 'section8', 'section11', 'section12', 'section16'],
      contact: {
        email: 'hrdirector@koyilihospital.com',
        phone: '+91-XXX-XXX-XXXX',
        office: 'HR Director Office, 2nd Floor'
      }
    },
    {
      id: 'dept_heads',
      name: 'Department Heads',
      role: 'Departmental Authority',
      level: 'management',
      icon: Building,
      color: 'green',
      responsibilities: [
        'Approve leave requests',
        'Conduct performance appraisals',
        'Recommend promotions and transfers',
        'Handle initial grievances',
        'Approve training requests'
      ],
      relatedSections: ['section2', 'section7', 'section8', 'section9', 'section12'],
      contact: {
        email: 'depthead@koyilihospital.com',
        phone: '+91-XXX-XXX-XXXX',
        office: 'Various Departments'
      }
    },
    {
      id: 'hr_manager',
      name: 'HR Manager',
      role: 'HR Operations',
      level: 'management',
      icon: UserCheck,
      color: 'cyan',
      responsibilities: [
        'Process recruitment and onboarding',
        'Manage employee records',
        'Coordinate training programs',
        'Handle routine HR matters',
        'Employee relations'
      ],
      relatedSections: ['section2', 'section9', 'section12', 'section19'],
      contact: {
        email: 'hrmanager@koyilihospital.com',
        phone: '+91-XXX-XXX-XXXX',
        office: 'HR Department, 2nd Floor'
      }
    },
    {
      id: 'medical_director',
      name: 'Medical Director',
      role: 'Clinical Authority',
      level: 'senior',
      icon: Activity,
      color: 'pink',
      responsibilities: [
        'Oversee clinical staff',
        'Approve patient care protocols',
        'Clinical performance standards',
        'Medical staff credentialing'
      ],
      relatedSections: ['section6', 'section8', 'section13'],
      contact: {
        email: 'medicaldirector@koyilihospital.com',
        phone: '+91-XXX-XXX-XXXX',
        office: 'Medical Administration, 3rd Floor'
      }
    },
    {
      id: 'compliance_officer',
      name: 'Compliance Officer',
      role: 'Regulatory Compliance',
      level: 'management',
      icon: CheckCircle,
      color: 'teal',
      responsibilities: [
        'Monitor regulatory compliance',
        'Conduct internal audits',
        'Review policy adherence',
        'Report compliance issues'
      ],
      relatedSections: ['section14', 'section15', 'section22', 'section29'],
      contact: {
        email: 'compliance@koyilihospital.com',
        phone: '+91-XXX-XXX-XXXX',
        office: 'Compliance Office, 2nd Floor'
      }
    },
    {
      id: 'training_coordinator',
      name: 'Training & Development Coordinator',
      role: 'Learning & Development',
      level: 'coordination',
      icon: BookOpen,
      color: 'orange',
      responsibilities: [
        'Coordinate training programs',
        'Track certifications',
        'Schedule mandatory training',
        'Evaluate training effectiveness'
      ],
      relatedSections: ['section9', 'section8'],
      contact: {
        email: 'training@koyilihospital.com',
        phone: '+91-XXX-XXX-XXXX',
        office: 'Training Center, 1st Floor'
      }
    },
    {
      id: 'payroll_manager',
      name: 'Payroll Manager',
      role: 'Compensation & Benefits',
      level: 'management',
      icon: DollarSign,
      color: 'green',
      responsibilities: [
        'Process payroll',
        'Manage benefits administration',
        'Handle compensation queries',
        'Ensure payment compliance'
      ],
      relatedSections: ['section11', 'section2'],
      contact: {
        email: 'payroll@koyilihospital.com',
        phone: '+91-XXX-XXX-XXXX',
        office: 'Finance Department, 2nd Floor'
      }
    },
    {
      id: 'safety_officer',
      name: 'Health & Safety Officer',
      role: 'Workplace Safety',
      level: 'management',
      icon: Shield,
      color: 'red',
      responsibilities: [
        'Monitor workplace safety',
        'Conduct safety audits',
        'Investigate incidents',
        'Implement safety protocols'
      ],
      relatedSections: ['section13', 'section18'],
      contact: {
        email: 'safety@koyilihospital.com',
        phone: '+91-XXX-XXX-XXXX',
        office: 'Safety Office, Ground Floor'
      }
    },
    {
      id: 'dei_coordinator',
      name: 'DEI Coordinator',
      role: 'Diversity & Inclusion',
      level: 'coordination',
      icon: Heart,
      color: 'pink',
      responsibilities: [
        'Promote diversity initiatives',
        'Monitor DEI compliance',
        'Handle discrimination complaints',
        'Organize cultural programs'
      ],
      relatedSections: ['section5', 'section21', 'section23'],
      contact: {
        email: 'dei@koyilihospital.com',
        phone: '+91-XXX-XXX-XXXX',
        office: 'HR Department, 2nd Floor'
      }
    },
    {
      id: 'grievance_officer',
      name: 'Grievance Redressal Officer',
      role: 'Employee Relations',
      level: 'management',
      icon: MessageSquare,
      color: 'blue',
      responsibilities: [
        'Handle employee grievances',
        'Mediate conflicts',
        'Investigate complaints',
        'Ensure fair resolution'
      ],
      relatedSections: ['section12', 'section21', 'section4'],
      contact: {
        email: 'grievance@koyilihospital.com',
        phone: '+91-XXX-XXX-XXXX',
        office: 'Employee Relations, 2nd Floor'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Authorities', icon: Users, count: authorities.length },
    { id: 'executive', name: 'Executive Level', icon: Shield, count: authorities.filter(a => a.level === 'executive').length },
    { id: 'senior', name: 'Senior Management', icon: Award, count: authorities.filter(a => a.level === 'senior').length },
    { id: 'management', name: 'Management', icon: Building, count: authorities.filter(a => a.level === 'management').length },
    { id: 'coordination', name: 'Coordination', icon: UserCheck, count: authorities.filter(a => a.level === 'coordination').length }
  ];

  const quickLookups = [
    { query: 'Who approves leave?', authorityId: 'dept_heads', icon: Calendar },
    { query: 'Who handles recruitment?', authorityId: 'hr_manager', icon: Users },
    { query: 'Who reviews performance?', authorityId: 'dept_heads', icon: TrendingUp },
    { query: 'Who approves policies?', authorityId: 'board', icon: FileText },
    { query: 'Who handles grievances?', authorityId: 'grievance_officer', icon: MessageSquare },
    { query: 'Who manages compliance?', authorityId: 'compliance_officer', icon: CheckCircle },
    { query: 'Who oversees training?', authorityId: 'training_coordinator', icon: BookOpen },
    { query: 'Who manages payroll?', authorityId: 'payroll_manager', icon: DollarSign }
  ];

  // Filter authorities based on search and category
  const filteredAuthorities = useMemo(() => {
    let filtered = authorities;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(a => a.level === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(a =>
        a.name.toLowerCase().includes(query) ||
        a.role.toLowerCase().includes(query) ||
        a.responsibilities.some(r => r.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleQuickLookup = (authorityId) => {
    const authority = authorities.find(a => a.id === authorityId);
    if (authority) {
      setSelectedAuthority(authority);
    }
  };

  const handleAuthorityClick = (authority) => {
    setSelectedAuthority(authority);
  };

  const handleSectionClick = (sectionId) => {
    onNavigateToSection(sectionId);
    onClose();
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'executive': return 'red';
      case 'senior': return 'purple';
      case 'management': return 'blue';
      case 'coordination': return 'green';
      default: return 'slate';
    }
  };

  const getLevelLabel = (level) => {
    switch (level) {
      case 'executive': return 'Executive';
      case 'senior': return 'Senior Management';
      case 'management': return 'Management';
      case 'coordination': return 'Coordination';
      default: return level;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex">
        {/* Left Panel - Search & List */}
        <div className="w-2/5 border-r border-slate-200 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Authority Finder
                  </h2>
                  <p className="text-orange-100 text-sm">Quick lookup for authorities and approvals</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-600" />
              <input
                type="text"
                placeholder="Search by name, role, or responsibility..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-white/30 bg-white/95 focus:outline-none focus:ring-2 focus:ring-white text-slate-900 placeholder-slate-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>

          {/* Quick Lookups */}
          <div className="px-6 py-4 bg-orange-50 border-b border-orange-100">
            <h3 className="text-xs font-bold text-orange-900 uppercase mb-3">Quick Lookups</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLookups.map((lookup) => {
                const LookupIcon = lookup.icon;
                return (
                  <button
                    key={lookup.query}
                    onClick={() => handleQuickLookup(lookup.authorityId)}
                    className="flex items-center gap-2 p-2 bg-white rounded-lg hover:bg-orange-100 border border-orange-200 hover:border-orange-300 transition-all text-left"
                  >
                    <LookupIcon className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span className="text-xs text-slate-700 font-medium">{lookup.query}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filters */}
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === category.id
                        ? 'bg-orange-600 text-white shadow-lg'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <CategoryIcon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      selectedCategory === category.id ? 'bg-white/20' : 'bg-slate-200'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Authority List */}
          <div className="flex-1 overflow-y-auto p-4">
            {filteredAuthorities.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">No authorities found</p>
                <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredAuthorities.map((authority) => {
                  const AuthorityIcon = authority.icon;
                  const isSelected = selectedAuthority?.id === authority.id;
                  return (
                    <button
                      key={authority.id}
                      onClick={() => handleAuthorityClick(authority)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        isSelected
                          ? 'border-orange-500 bg-orange-50 shadow-lg'
                          : 'border-slate-200 hover:border-orange-300 bg-white hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-${authority.color}-100`}>
                          <AuthorityIcon className={`w-5 h-5 text-${authority.color}-600`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-slate-900 mb-1">{authority.name}</div>
                          <div className="text-sm text-slate-600 mb-2">{authority.role}</div>
                          <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-${getLevelColor(authority.level)}-100 text-${getLevelColor(authority.level)}-700`}>
                            {getLevelLabel(authority.level)}
                          </div>
                        </div>
                        {isSelected && (
                          <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Details */}
        <div className="flex-1 flex flex-col">
          {selectedAuthority ? (
            <>
              {/* Authority Details Header */}
              <div className={`bg-gradient-to-br from-${selectedAuthority.color}-500 to-${selectedAuthority.color}-600 px-8 py-6 text-white`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                    <selectedAuthority.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{selectedAuthority.name}</h3>
                    <p className="text-white/90 text-lg">{selectedAuthority.role}</p>
                    <div className="mt-2 inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                      {getLevelLabel(selectedAuthority.level)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Authority Details Content */}
              <div className="flex-1 overflow-y-auto p-8">
                {/* Contact Information */}
                <div className="bg-slate-50 rounded-xl p-6 mb-6 border border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-slate-600" />
                    Contact Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-700">
                      <Mail className="w-4 h-4 text-slate-500" />
                      <span className="font-medium">Email:</span>
                      <a href={`mailto:${selectedAuthority.contact.email}`} className="text-blue-600 hover:underline">
                        {selectedAuthority.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <Phone className="w-4 h-4 text-slate-500" />
                      <span className="font-medium">Phone:</span>
                      <span>{selectedAuthority.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span className="font-medium">Office:</span>
                      <span>{selectedAuthority.contact.office}</span>
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Key Responsibilities
                  </h4>
                  <div className="space-y-2">
                    {selectedAuthority.responsibilities.map((responsibility, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 font-bold text-xs flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-slate-700 leading-relaxed">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related By-Laws Sections */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Related By-Laws Sections
                  </h4>
                  <div className="space-y-2">
                    {selectedAuthority.relatedSections.map((sectionId) => {
                      const sectionInfo = {
                        preamble: { title: 'Preamble', icon: BookOpen },
                        section1: { title: 'Section 1: Preliminary', icon: FileText },
                        section2: { title: 'Section 2: Recruitment and Employment', icon: Users },
                        section4: { title: 'Section 4: Employee Rights and Responsibilities', icon: Award },
                        section5: { title: 'Section 5: Diversity, Equity, and Inclusion', icon: Heart },
                        section6: { title: 'Section 6: Patient Interaction and Care Standards', icon: Activity },
                        section7: { title: 'Section 7: Attendance and Leave Policy', icon: Calendar },
                        section8: { title: 'Section 8: Performance Management', icon: TrendingUp },
                        section9: { title: 'Section 9: Training and Development', icon: BookOpen },
                        section11: { title: 'Section 11: Compensation and Benefits', icon: DollarSign },
                        section12: { title: 'Section 12: Grievance Redressal Mechanism', icon: MessageSquare },
                        section13: { title: 'Section 13: Workplace Health and Safety', icon: Shield },
                        section14: { title: 'Section 14: Disciplinary Actions and Compliance', icon: AlertCircle },
                        section15: { title: 'Section 15: Data Protection and Confidentiality', icon: Lock },
                        section16: { title: 'Section 16: Termination and Exit Process', icon: LogOut },
                        section18: { title: 'Section 18: Environmental Responsibility', icon: Activity },
                        section19: { title: 'Section 19: Internal Communication', icon: MessageSquare },
                        section21: { title: 'Section 21: Special Provisions', icon: UserCheck },
                        section22: { title: 'Section 22: Compliance and Regular Audits', icon: CheckCircle },
                        section23: { title: 'Section 23: Workplace Culture', icon: Users },
                        section29: { title: 'Section 29: Industry Standards', icon: CheckCircle }
                      }[sectionId] || { title: sectionId, icon: FileText };

                      const SectionIcon = sectionInfo.icon;

                      return (
                        <button
                          key={sectionId}
                          onClick={() => handleSectionClick(sectionId)}
                          className="w-full flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group"
                        >
                          <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                            <SectionIcon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                          </div>
                          <span className="flex-1 text-left font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {sectionInfo.title}
                          </span>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center mb-6">
                <Search className="w-14 h-14 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Select an Authority</h3>
              <p className="text-slate-600 max-w-md leading-relaxed mb-6" style={{ fontFamily: "'Noto Serif', Georgia, serif" }}>
                Choose an authority from the list to view their responsibilities, contact information, 
                and related By-Laws sections.
              </p>
              <div className="flex gap-3">
                <div className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-semibold">
                  {authorities.length} Authorities
                </div>
                <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold">
                  Quick Lookup
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorityFinder;
