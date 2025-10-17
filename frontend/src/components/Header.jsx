import React, { useState } from 'react';
import { Menu, Bell, Search, User, LogOut, Settings, Building2, ChevronDown, HelpCircle, ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onLogout, sidebarOpen, setSidebarOpen, isInDepartment }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const navigate = useNavigate();

  const notifications = [
    { id: 1, title: 'New HR Policy Published', time: '2 hours ago', type: 'info', unread: true },
    { id: 2, title: 'System Maintenance Scheduled', time: '5 hours ago', type: 'warning', unread: true },
    { id: 3, title: 'Monthly Report Available', time: '1 day ago', type: 'success', unread: false }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  // Search data - departments, modules, and quick links
  const searchableItems = [
    { type: 'Department', name: 'Human Resources', path: '/department/human-resources', icon: '👥' },
    { type: 'Department', name: 'Finance', path: '/department/finance', icon: '💰' },
    { type: 'Department', name: 'Operations', path: '/department/operations', icon: '⚙️' },
    { type: 'Department', name: 'Quality Assurance', path: '/department/quality-assurance', icon: '✓' },
    { type: 'Department', name: 'Medical Records', path: '/department/medical-records', icon: '📋' },
    { type: 'Department', name: 'IT & Technology', path: '/department/it-technology', icon: '💻' },
    { type: 'Module', name: 'HR Dashboard', path: '/department/human-resources', icon: '📊', keywords: 'hr admin attendance leave payroll' },
    { type: 'Module', name: 'By-Laws', path: '/department/human-resources', icon: '📜', keywords: 'bylaws policies rules regulations' },
    { type: 'Module', name: 'SOPs', path: '/department/human-resources', icon: '📄', keywords: 'sop procedures operations standard' },
    { type: 'Module', name: 'Annexures', path: '/department/human-resources', icon: '📎', keywords: 'forms annexure documents' },
    { type: 'Module', name: 'Intelligence Center', path: '/department/human-resources', icon: '🧠', keywords: 'ai analytics intelligence reports' }
  ];

  // Filter search results
  const searchResults = searchQuery.length > 0 
    ? searchableItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.keywords && item.keywords.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 8)
    : [];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSearchResults(value.length > 0);
  };

  const handleSearchResultClick = (path) => {
    navigate(path);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-white border-b-2 border-slate-200 z-50 shadow-sm">
      <div className="h-full px-3 md:px-6 flex items-center justify-between">
        {/* Left Section - Logo & Menu/Back Button */}
        <div className="flex items-center space-x-2 md:space-x-6">
          {isInDepartment ? (
            // Show "Back to Dashboard" button when inside a department
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 px-3 md:px-4 py-2 md:py-2.5 hover:bg-slate-100 rounded-xl transition-colors group"
              data-testid="back-to-dashboard"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
              <span className="hidden md:inline text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">Back to Dashboard</span>
              <Home className="w-4 h-4 md:hidden text-slate-700 group-hover:text-blue-600 transition-colors" />
            </button>
          ) : (
            // Show hamburger menu when on main dashboard
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 md:p-2.5 hover:bg-slate-100 rounded-xl transition-colors"
              data-testid="sidebar-toggle"
            >
              <Menu className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
            </button>
          )}
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Building2 className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base md:text-xl font-black tracking-wide text-slate-900">KOYILI HOSPITAL</h1>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:block">Management Portal</p>
            </div>
          </div>
        </div>

        {/* Center - Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-2xl mx-8 relative">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              onFocus={() => searchQuery && setShowSearchResults(true)}
              placeholder="Search departments, policies, SOPs, forms..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder-slate-400 font-medium"
              data-testid="global-search"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowSearchResults(false);
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
          
          {/* Search Results Dropdown */}
          {showSearchResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-200 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto">
              <div className="p-2">
                <div className="text-xs font-semibold text-slate-500 uppercase px-3 py-2">
                  {searchResults.length} Results
                </div>
                {searchResults.map((result, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSearchResultClick(result.path)}
                    className="w-full flex items-center space-x-3 px-3 py-3 hover:bg-blue-50 rounded-lg transition-colors text-left group"
                  >
                    <span className="text-2xl">{result.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 group-hover:text-blue-600">
                        {result.name}
                      </div>
                      <div className="text-xs text-slate-500">{result.type}</div>
                    </div>
                    <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-600 rotate-180" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {showSearchResults && searchQuery && searchResults.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-200 rounded-xl shadow-2xl z-50 p-8 text-center">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-medium">No results found for "{searchQuery}"</p>
              <p className="text-sm text-slate-400 mt-1">Try searching for departments, policies, or SOPs</p>
            </div>
          )}
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center space-x-1 md:space-x-3">
          {/* Help - Hidden on mobile */}
          <button className="hidden md:block p-2.5 hover:bg-slate-100 rounded-xl transition-colors relative group">
            <HelpCircle className="w-5 h-5 text-slate-600" />
            <span className="absolute -bottom-10 right-0 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Help & Support</span>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 md:p-2.5 hover:bg-slate-100 rounded-xl transition-colors relative"
            >
              <Bell className="w-5 h-5 text-slate-600" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-xl shadow-2xl border-2 border-slate-200 overflow-hidden z-50">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3">
                  <h3 className="text-white font-bold text-sm">Notifications</h3>
                  <p className="text-blue-100 text-xs">{unreadCount} unread messages</p>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notif => (
                    <div key={notif.id} className={`px-4 py-3 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors ${notif.unread ? 'bg-blue-50' : ''}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className={`text-sm font-semibold text-slate-900 ${notif.unread ? 'font-bold' : ''}`}>{notif.title}</p>
                          <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                        </div>
                        {notif.unread && <span className="w-2 h-2 bg-blue-600 rounded-full mt-1"></span>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-3 bg-slate-50 text-center">
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All Notifications</button>
                </div>
              </div>
            )}
          </div>
          
          {/* Settings - Hidden on small mobile */}
          <button className="hidden sm:block p-2 md:p-2.5 hover:bg-slate-100 rounded-xl transition-colors">
            <Settings className="w-5 h-5 text-slate-600" />
          </button>

          {/* Divider */}
          <div className="hidden md:block h-10 w-px bg-slate-300"></div>

          {/* User Profile */}
          <div className="relative">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 md:space-x-3 px-2 md:px-3 py-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <div className="hidden lg:block text-right">
                <p className="text-sm font-bold text-slate-900">Admin User</p>
                <p className="text-xs text-slate-500 font-medium">Administrator</p>
              </div>
              <div className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-base">
                AU
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
            </button>
            
            {/* User Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border-2 border-slate-200 overflow-hidden z-50">
                <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                  <p className="font-bold text-slate-900">Admin User</p>
                  <p className="text-xs text-slate-600">admin@koyilihospital.com</p>
                </div>
                <div className="py-2">
                  <a href="#" className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    <User className="w-4 h-4 mr-3 text-slate-400" />
                    <span className="font-medium">My Profile</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    <Settings className="w-4 h-4 mr-3 text-slate-400" />
                    <span className="font-medium">Account Settings</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    <HelpCircle className="w-4 h-4 mr-3 text-slate-400" />
                    <span className="font-medium">Help & Support</span>
                  </a>
                </div>
                <div className="border-t border-slate-200">
                  <button
                    onClick={onLogout}
                    className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors font-semibold"
                    data-testid="logout-button"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;