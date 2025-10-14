import React, { useState, useMemo, useRef } from 'react';
import { 
  Home, FileText, Search, Download, Printer, X, Menu, ArrowLeft, 
  ChevronRight, Scale, CheckCircle, Clock, Shield, Users, 
  Calendar, Award, Building, BookOpen, ClipboardCheck
} from 'lucide-react';
import { annexuresData, annexuresQuickRef } from '../../data/annexuresData';

const HRAnnexures = ({ setActiveModule }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const contentRef = useRef(null);

  // Navigation structure
  const navigation = useMemo(() => {
    const navItems = [
      { id: 'dashboard', title: 'Dashboard', icon: Home, category: 'Overview' }
,
      { id: 'preamble', title: 'Preamble', icon: BookOpen, category: 'Introduction' }
    ];
    
    // Add all annexures
    Object.entries(annexuresData).forEach(([key, annexure]) => {
      if (key !== 'preamble' && annexure.number && annexure.title) {
        navItems.push({
          id: key,
          title: `${annexure.number}: ${annexure.title}`,
          icon: FileText,
          category: annexure.category || 'General'
        });
      }
    });
    
    return navItems;
  }, []);

  // Group by category
  const navigationByCategory = useMemo(() => {
    const grouped = {};
    navigation.forEach(nav => {
      if (!grouped[nav.category]) {
        grouped[nav.category] = [];
      }
      grouped[nav.category].push(nav);
    });
    return grouped;
  }, [navigation]);

  // Search functionality
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearch(false);
      return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    Object.entries(annexuresData).forEach(([sectionId, section]) => {
      if (section.title && section.title.toLowerCase().includes(lowerQuery)) {
        results.push({
          sectionId,
          title: section.title,
          type: 'title',
          preview: section.title
        });
      }

      if (section.searchTerms) {
        section.searchTerms.forEach(term => {
          if (term.toLowerCase().includes(lowerQuery)) {
            results.push({
              sectionId,
              title: section.title,
              type: 'keyword',
              preview: `Keyword match: ${term}`
            });
          }
        });
      }

      if (section.content && section.content.toLowerCase().includes(lowerQuery)) {
        const index = section.content.toLowerCase().indexOf(lowerQuery);
        const preview = section.content.substring(Math.max(0, index - 50), Math.min(section.content.length, index + 150));
        results.push({
          sectionId,
          title: section.title,
          type: 'content',
          preview: '...' + preview + '...'
        });
      }

      if (section.subsections) {
        section.subsections.forEach((subsection, idx) => {
          if (subsection.title && subsection.title.toLowerCase().includes(lowerQuery)) {
            results.push({
              sectionId,
              subsectionIdx: idx,
              title: `${section.title} - ${subsection.title}`,
              type: 'subsection',
              preview: subsection.title
            });
          }

          if (subsection.points) {
            subsection.points.forEach((point, pointIdx) => {
              if (point.toLowerCase().includes(lowerQuery)) {
                results.push({
                  sectionId,
                  subsectionIdx: idx,
                  pointIdx,
                  title: `${section.title} - ${subsection.title}`,
                  type: 'point',
                  preview: point.substring(0, 150) + (point.length > 150 ? '...' : '')
                });
              }
            });
          }
        });
      }
    });

    setSearchResults(results);
    setShowSearch(true);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    performSearch(query);
  };

  const jumpToSection = (sectionId) => {
    setActiveSection(sectionId);
    setShowSearch(false);
    setSearchQuery('');
    setSearchResults([]);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Recruitment': Users,
      'Leave Management': Calendar,
      'Performance': Award,
      'Training': BookOpen,
      'Employee Records': FileText,
      'Separation': ArrowLeft,
      'Disciplinary': Shield,
      'Compliance': ClipboardCheck,
      'Certificates': Award,
      'Operations': Building,
    };
    return icons[category] || FileText;
  };

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full -ml-40 -mb-40"></div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-4">
                Administrative Forms & Templates
              </div>
              <h1 className="text-4xl font-bold mb-3">HR Annexures Library</h1>
              <p className="text-blue-100 text-lg max-w-3xl leading-relaxed">
                Comprehensive collection of official forms, templates, and administrative documents for all HR processes. 
                Standardized formats ensuring compliance, consistency, and operational efficiency.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
              <div className="text-3xl font-bold mb-1">35+</div>
              <div className="text-sm text-blue-100">Total Forms</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
              <div className="text-3xl font-bold mb-1">9</div>
              <div className="text-sm text-blue-100">Categories</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-blue-100">Compliant</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
              <div className="text-3xl font-bold mb-1">v1.0</div>
              <div className="text-sm text-blue-100">Current Version</div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Annexures Process Workflow</h2>
          <p className="text-gray-600">How administrative forms flow through the organization</p>
        </div>
        
        <div className="bg-white rounded-xl border-2 border-gray-200 p-8 shadow-sm">
          <div className="flex items-center justify-between">
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="font-bold text-gray-900 mb-1">1. Form Selection</div>
              <div className="text-sm text-gray-600">Choose appropriate form from library</div>
            </div>
            
            <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0 mx-2" />
            
            {/* Step 2 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <ClipboardCheck className="w-10 h-10 text-white" />
              </div>
              <div className="font-bold text-gray-900 mb-1">2. Completion</div>
              <div className="text-sm text-gray-600">Fill all mandatory fields accurately</div>
            </div>
            
            <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0 mx-2" />
            
            {/* Step 3 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="font-bold text-gray-900 mb-1">3. Approval</div>
              <div className="text-sm text-gray-600">Submit to designated authority</div>
            </div>
            
            <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0 mx-2" />
            
            {/* Step 4 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="font-bold text-gray-900 mb-1">4. Processing</div>
              <div className="text-sm text-gray-600">HR processes and archives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Forms by Category */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Forms by Category</h2>
          <p className="text-gray-600">Browse annexures organized by HR function</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(navigationByCategory)
            .filter(([category]) => category !== 'Overview' && category !== 'Introduction')
            .map(([category, items]) => {
              const CategoryIcon = getCategoryIcon(category);
              return (
                <div key={category} className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CategoryIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{category}</h3>
                      <p className="text-sm text-gray-600">{items.length} forms</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {items.slice(0, 3).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => jumpToSection(item.id)}
                        className="w-full text-left text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-2 rounded transition-colors"
                      >
                        {item.title}
                      </button>
                    ))}
                    {items.length > 3 && (
                      <div className="text-xs text-gray-500 pt-1">
                        +{items.length - 3} more forms
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Quick Reference */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(annexuresQuickRef).map(([key, refData]) => (
            <div key={key} className="bg-white rounded-xl p-5 border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all hover:border-blue-400">
              <h3 className="font-bold text-gray-800 mb-3 text-lg">{refData.title}</h3>
              <ul className="space-y-2">
                {refData.steps.map((step, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* All Forms List */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Administrative Forms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {navigation.filter(nav => nav.id !== 'dashboard' && nav.id !== 'preamble').map((nav) => {
            const IconComponent = nav.icon;
            return (
              <button
                key={nav.id}
                onClick={() => setActiveSection(nav.id)}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-400 border-2 border-gray-200 transition-all text-left group"
              >
                <IconComponent className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-900 flex-1">{nav.title}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderSection = (sectionId) => {
    const section = annexuresData[sectionId];
    if (!section) return null;

    if (sectionId === 'preamble') {
      return (
        <div className="bg-white shadow-sm">
          {/* Professional Header */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-16 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_project-hub-123/artifacts/mpnrrrfw_images.jpeg" 
                  alt="Koyili Hospital Logo" 
                  className="w-20 h-20 object-contain bg-white rounded-lg p-2 shadow-lg"
                />
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
                  <p className="text-blue-200 text-sm mt-1">Human Resources Department</p>
                  <p className="text-blue-300 text-xs mt-0.5">Pallikkunnu, Talap, Kannur, Kerala</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <p className="text-xs text-blue-200">ISO 9001:2015 | NABH</p>
                </div>
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="px-16 py-10 bg-white border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{section.title}</h2>
            <p className="text-sm text-gray-600">Administrative Annexures Manual - 2025</p>
          </div>

          {/* Content */}
          <div className="px-16 py-12 bg-white">
            <div className="text-[15px] leading-[1.8] text-gray-800 text-justify space-y-4">
              {section.content.split('\n\n').map((para, idx) => (
                <p key={idx} className="text-justify">{para}</p>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t-2 border-blue-900 bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 px-16 py-8">
            <div className="grid grid-cols-4 gap-8 text-white mb-4">
              <div>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Version</p>
                <p className="text-sm font-semibold">{section.version}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Effective Date</p>
                <p className="text-sm font-semibold">{section.effectiveDate}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Approved By</p>
                <p className="text-sm font-semibold">Board of Directors</p>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Classification</p>
                <p className="text-sm font-semibold">Internal Use Only</p>
              </div>
            </div>
            <div className="border-t border-blue-700 pt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Scale className="w-4 h-4 text-amber-400" />
                <p className="text-xs text-blue-200">Compliant with NABH & ISO 9001:2015 Standards</p>
              </div>
              <p className="text-xs text-blue-300">© 2024 Koyili Hospital. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      );
    }

    // Regular annexure rendering
    return (
      <div className="bg-white shadow-sm">
        {/* Professional Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-16 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_project-hub-123/artifacts/mpnrrrfw_images.jpeg" 
                alt="Koyili Hospital Logo" 
                className="w-20 h-20 object-contain bg-white rounded-lg p-2 shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold tracking-tight">KOYILI HOSPITAL</h1>
                <p className="text-blue-200 text-sm mt-1">Human Resources Department</p>
                <p className="text-blue-300 text-xs mt-0.5">Administrative Forms & Templates</p>
              </div>
            </div>
            <div className="text-right space-y-2">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 inline-block">
                <p className="text-xs text-blue-200">ISO 9001:2015 | NABH Accredited</p>
              </div>
              <div className="flex items-center justify-end space-x-4 text-xs text-blue-200">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold">Doc #:</span>
                  <span>{section.number}</span>
                </div>
                <div className="w-px h-4 bg-blue-600"></div>
                <div className="flex items-center space-x-1">
                  <span className="font-semibold">Version:</span>
                  <span>1.0</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Title Section */}
          <div className="border-t-2 border-blue-700/50 pt-6">
            <div className="flex items-baseline justify-between">
              <div className="flex-1">
                <div className="flex items-baseline space-x-4 mb-2">
                  <span className="text-amber-400 font-bold text-lg">{section.number}</span>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="flex items-center space-x-4 text-xs text-blue-300">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Effective: 01 Jan 2024</span>
                  </div>
                  <div className="w-px h-3 bg-blue-600"></div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Status: Active</span>
                  </div>
                  <div className="w-px h-3 bg-blue-600"></div>
                  <div className="flex items-center space-x-1">
                    <span>Category: {section.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Document Metadata Bar */}
        <div className="bg-gray-50 px-16 py-3 border-b border-gray-300">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">Form Type:</span>
                <span>Administrative Document</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">Format:</span>
                <span>PDF / Digital</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">Applicability:</span>
                <span>All Employees</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Classification:</span>
              <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-semibold">Internal Use Only</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-16 py-12 bg-white">
          {section.subsections && section.subsections.map((subsection, idx) => (
            <div key={idx} className="mb-10">
              <div className="mb-6 pb-3 border-b-2 border-blue-900 bg-gradient-to-r from-blue-50 to-transparent px-4 py-3 -mx-4">
                <div className="flex items-baseline space-x-4">
                  <span className="text-2xl font-bold text-blue-900 min-w-[3rem]">{subsection.number}</span>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">{subsection.title}</h3>
                </div>
              </div>

              {subsection.content && (
                <div className="mb-6 pl-12">
                  <div className="text-[15px] leading-[1.8] text-gray-800 text-justify space-y-4">
                    {subsection.content.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx} className="text-justify">{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {subsection.points && (
                <ul className="pl-12 space-y-3 mb-6">
                  {subsection.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start">
                      <span className="text-blue-700 font-bold mr-3 mt-1 text-lg">●</span>
                      <p className="text-[15px] leading-[1.8] text-gray-800 flex-1 text-justify">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {subsection.table && (
                <div className="pl-12 mb-8">
                  <div className="border-2 border-gray-300 overflow-hidden rounded-lg shadow-sm">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-900 to-indigo-800">
                          {subsection.table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="px-6 py-4 text-left text-sm font-bold text-white border-r border-blue-700 last:border-r-0">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {subsection.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={`${rIdx % 2 === 0 ? 'bg-white' : 'bg-blue-50'} border-b border-gray-200 last:border-b-0 hover:bg-blue-100 transition-colors`}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-6 py-3.5 text-[14px] leading-relaxed text-gray-800 border-r border-gray-200 last:border-r-0 align-top">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t-2 border-blue-900 bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 px-16 py-8">
          <div className="grid grid-cols-3 gap-8 mb-4">
            <div>
              <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Document Information</p>
              <div className="space-y-1 text-white">
                <p className="text-sm"><span className="font-semibold">Reference:</span> {section.number}</p>
                <p className="text-sm"><span className="font-semibold">Category:</span> {section.category}</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Version Control</p>
              <div className="space-y-1 text-white">
                <p className="text-sm"><span className="font-semibold">Version:</span> 1.0</p>
                <p className="text-sm"><span className="font-semibold">Last Updated:</span> Jan 2024</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Status</p>
              <div className="space-y-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Active & Current
                </div>
                <p className="text-xs text-blue-200 mt-2">Next Review: Jan 2025</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700 pt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Scale className="w-4 h-4 text-amber-400" />
              <p className="text-xs text-blue-200">Compliant with NABH, ISO 9001:2015 Standards</p>
            </div>
            <p className="text-xs text-blue-300">© 2024 Koyili Hospital. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-80'} bg-white border-r-2 border-gray-300 flex flex-col transition-all duration-300 shadow-xl`}>
        {setActiveModule && !sidebarCollapsed && (
          <div className="p-3 border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => setActiveModule('dashboard')}
              className="w-full flex items-center space-x-2 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to HR Dashboard</span>
            </button>
          </div>
        )}

        <div className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 p-4 border-b-2 border-amber-500">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <FileText className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">HR Annexures</h2>
                  <p className="text-xs text-blue-200">35+ Forms</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {!sidebarCollapsed ? (
            <div className="space-y-1 px-2">
              {Object.entries(navigationByCategory).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <div className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {category}
                  </div>
                  {items.map((nav) => {
                    const IconComponent = nav.icon;
                    return (
                      <button
                        key={nav.id}
                        onClick={() => jumpToSection(nav.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                          activeSection === nav.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm font-medium truncate">{nav.title}</span>
                        {activeSection === nav.id && (
                          <ChevronRight className="w-4 h-4 ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2 px-2">
              {navigation.map((nav) => {
                const IconComponent = nav.icon;
                return (
                  <button
                    key={nav.id}
                    onClick={() => jumpToSection(nav.id)}
                    className={`w-full p-3 rounded-lg transition-all ${
                      activeSection === nav.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    title={nav.title}
                  >
                    <IconComponent className="w-5 h-5 mx-auto" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="bg-white border-b-2 border-gray-300 px-6 py-4 shadow-lg z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <h1 className="text-xl font-bold text-gray-900">Koyili Hospital • HR Annexures</h1>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                  Official Forms
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search forms, categories, keywords..."
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => searchQuery && setShowSearch(true)}
                  className="pl-12 pr-10 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-96 text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSearchResults([]);
                      setShowSearch(false);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                {searchQuery && <span className="absolute -bottom-6 left-0 text-xs text-gray-600">{searchResults.length} results found</span>}
              </div>

              {/* Action Buttons */}
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold flex items-center text-sm">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center text-sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>
          </div>

          {/* Search Results Dropdown */}
          {showSearch && searchResults.length > 0 && (
            <div className="absolute top-16 right-6 w-[450px] bg-white border-2 border-gray-300 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50 mt-2">
              <div className="p-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900">
                  Search Results ({searchResults.length})
                </span>
                <button
                  onClick={() => setShowSearch(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="divide-y divide-gray-100">
                {searchResults.slice(0, 20).map((result, idx) => (
                  <button
                    key={idx}
                    onClick={() => jumpToSection(result.sectionId)}
                    className="w-full p-4 text-left hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex items-start space-x-3">
                      <FileText className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">
                          {result.title}
                        </p>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                          {result.preview}
                        </p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                          {result.type}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Scrollable Content */}
        <div ref={contentRef} className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto">
            {activeSection === 'dashboard' ? renderDashboard() : renderSection(activeSection)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRAnnexures;
