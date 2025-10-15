import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Search, 
  Sparkles, 
  BookOpen, 
  FileText, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  AlertCircle,
  TrendingUp,
  ClipboardList,
  MessageSquare,
  Loader2,
  Clock,
  Star,
  Bookmark,
  Download,
  Share2,
  History,
  Filter,
  Zap,
  Target,
  Award,
  ThumbsUp,
  Send,
  X,
  ChevronRight,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

const SmartGuidance = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('answer');
  const searchInputRef = useRef(null);

  // Load search history and bookmarks from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('hr_search_history');
    const savedBookmarks = localStorage.getItem('hr_bookmarks');
    if (savedHistory) setSearchHistory(JSON.parse(savedHistory));
    if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
  }, []);

  // Common scenarios with comprehensive queries
  const scenarios = [
    {
      id: 'bylaw-implementation',
      title: 'By-Laws Implementation',
      description: 'Complete process from ideation to board approval',
      icon: BookOpen,
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-600',
      query: 'Provide a complete step-by-step guide for implementing or amending By-Laws at Koyili Hospital. Include: 1) How to identify the need 2) Legal consultation process 3) Drafting procedures 4) Department review process 5) Approval chain from departments to board 6) Communication with lawyers 7) Stakeholder discussions 8) Final notification and implementation. For each step, explain What, When, Where, How, Why, and Whom.'
    },
    {
      id: 'recruitment',
      title: 'Recruitment Process',
      description: 'End-to-end hiring workflow with approvals',
      icon: Users,
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
      query: 'Explain the complete recruitment process at Koyili Hospital including position approval, job posting, candidate screening, interview process, selection criteria, offer approval, documentation required, and onboarding. Include all approval authorities and timelines.'
    },
    {
      id: 'leave-management',
      title: 'Leave Management',
      description: 'Leave application and approval workflow',
      icon: CheckCircle,
      color: 'purple',
      gradient: 'from-purple-500 to-violet-600',
      query: 'How does leave management work at Koyili Hospital? Include different types of leave, application process, approval authorities, required forms, timelines, and special considerations for emergency leave.'
    },
    {
      id: 'disciplinary',
      title: 'Disciplinary Actions',
      description: 'Handling employee conduct issues',
      icon: AlertCircle,
      color: 'red',
      gradient: 'from-red-500 to-rose-600',
      query: 'What is the disciplinary action process? Include investigation procedures, documentation requirements, hearing process, decision-making authority, appeals process, and timeline for each step.'
    },
    {
      id: 'performance',
      title: 'Performance Review',
      description: 'Evaluation and appraisal process',
      icon: TrendingUp,
      color: 'orange',
      gradient: 'from-orange-500 to-amber-600',
      query: 'Explain the performance management cycle including evaluation criteria, review schedules, feedback mechanisms, goal setting, rating system, and promotion considerations.'
    },
    {
      id: 'grievance',
      title: 'Grievance Resolution',
      description: 'Employee complaint handling',
      icon: MessageSquare,
      color: 'teal',
      gradient: 'from-teal-500 to-cyan-600',
      query: 'What is the grievance handling procedure? Include how to file a grievance, investigation process, resolution timeline, escalation path, and confidentiality measures.'
    },
    {
      id: 'training',
      title: 'Training Programs',
      description: 'Employee development and certification',
      icon: Lightbulb,
      color: 'indigo',
      gradient: 'from-indigo-500 to-blue-600',
      query: 'How do I organize training programs? Include approval process, budget allocation, vendor selection, attendance tracking, certification, and mandatory vs optional training.'
    },
    {
      id: 'sop-creation',
      title: 'Create New SOP',
      description: 'SOP development workflow',
      icon: ClipboardList,
      color: 'amber',
      gradient: 'from-amber-500 to-yellow-600',
      query: 'Guide me through creating a new SOP including drafting guidelines, review process, approval chain, version control, and communication to staff.'
    }
  ];

  // Suggestion keywords that trigger autocomplete
  const suggestions = [
    'How do I implement By-Laws?',
    'What is the recruitment approval process?',
    'How to handle employee grievances?',
    'Leave application procedure',
    'Disciplinary action steps',
    'Performance review process',
    'Training program approval',
    'Create new SOP',
    'Who approves medical leave?',
    'Emergency leave procedure',
    'New employee onboarding',
    'Promotion criteria',
    'Salary revision process',
    'Exit interview procedure',
    'Transfer request process'
  ];

  // Filter suggestions based on current query
  const filteredSuggestions = suggestions.filter(s => 
    s.toLowerCase().includes(query.toLowerCase()) && query.length > 2
  );

  const handleSearch = async (searchQuery = query) => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setResponse(null);
    setShowSuggestions(false);
    
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const res = await fetch(`${backendUrl}/api/guidance/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: searchQuery,
          session_id: `guidance-${Date.now()}`
        })
      });
      
      if (!res.ok) {
        throw new Error('Failed to get guidance');
      }
      
      const data = await res.json();
      setResponse(data);
      
      // Add to search history
      const newHistory = [
        { query: searchQuery, timestamp: new Date().toISOString(), answer: data.answer.substring(0, 200) },
        ...searchHistory.slice(0, 9) // Keep last 10
      ];
      setSearchHistory(newHistory);
      localStorage.setItem('hr_search_history', JSON.stringify(newHistory));
      
    } catch (error) {
      console.error('Error getting guidance:', error);
      setResponse({
        answer: 'I apologize, but I encountered an error processing your request. Please try again or contact support if the issue persists.',
        related_documents: [],
        suggested_actions: [],
        process_steps: []
      });
    } finally {
      setLoading(false);
    }
  };

  const handleScenarioClick = (scenario) => {
    setQuery(scenario.query);
    handleSearch(scenario.query);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  const handleBookmark = () => {
    if (!response) return;
    const bookmark = {
      query: query,
      answer: response.answer,
      timestamp: new Date().toISOString()
    };
    const newBookmarks = [bookmark, ...bookmarks];
    setBookmarks(newBookmarks);
    localStorage.setItem('hr_bookmarks', JSON.stringify(newBookmarks));
  };

  const handleCopy = () => {
    if (response) {
      navigator.clipboard.writeText(response.answer);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatAnswer = (answer) => {
    // Split by headers (###)
    const sections = answer.split(/(?=###)/);
    
    return sections.map((section, sectionIdx) => {
      if (section.startsWith('###')) {
        // It's a header section
        const lines = section.split('\n');
        const header = lines[0].replace('###', '').trim();
        const content = lines.slice(1).join('\n');
        
        return (
          <div key={sectionIdx} className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
              {header}
            </h3>
            {formatContent(content)}
          </div>
        );
      } else {
        return <div key={sectionIdx}>{formatContent(section)}</div>;
      }
    });
  };

  const formatContent = (content) => {
    const lines = content.split('\n').filter(line => line.trim());
    
    return lines.map((line, idx) => {
      // Check for numbered list with bold (####)
      if (line.startsWith('####')) {
        const text = line.replace(/####/g, '').trim();
        return (
          <div key={idx} className="ml-6 mb-3 flex items-start">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-blue-600">{idx + 1}</span>
            </div>
            <p className="text-slate-800 font-semibold leading-relaxed flex-1 pt-1">{text}</p>
          </div>
        );
      }
      // Check for regular numbered list
      else if (line.match(/^\d+\./)) {
        return (
          <div key={idx} className="ml-4 mb-2">
            <p className="text-slate-800 leading-relaxed">{line}</p>
          </div>
        );
      }
      // Check for bullet points with **bold**
      else if (line.match(/^[-•*]\s\*\*/)) {
        const text = line.replace(/^[-•*]\s/, '').replace(/\*\*/g, '');
        return (
          <div key={idx} className="ml-6 mb-2 flex items-start">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-3 mt-2 flex-shrink-0"></div>
            <p className="text-slate-700 font-semibold">{text}</p>
          </div>
        );
      }
      // Check for regular bullet points
      else if (line.match(/^[-•*]/)) {
        return (
          <div key={idx} className="ml-6 mb-2 flex items-start">
            <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 mt-2 flex-shrink-0"></div>
            <p className="text-slate-700">{line.replace(/^[-•*]\s/, '')}</p>
          </div>
        );
      }
      // Regular paragraph
      else {
        return (
          <p key={idx} className="text-slate-800 leading-relaxed mb-3">
            {line}
          </p>
        );
      }
    });
  };

  // Related questions based on current query
  const getRelatedQuestions = () => {
    if (!query) return [];
    const related = [];
    if (query.toLowerCase().includes('leave')) {
      related.push('What types of leave are available?', 'Who approves emergency leave?', 'How much notice is required for leave?');
    } else if (query.toLowerCase().includes('recruitment')) {
      related.push('What documents are needed for new hires?', 'Who approves new positions?', 'What is the interview process?');
    } else if (query.toLowerCase().includes('bylaw') || query.toLowerCase().includes('by-law')) {
      related.push('How often are By-Laws reviewed?', 'Who drafts By-Laws amendments?', 'What is the approval timeline?');
    } else {
      related.push('How do I access policy documents?', 'Who can I contact for help?', 'What forms do I need?');
    }
    return related;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Stunning Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 border-2 border-white/20">
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              AI-Powered HR Intelligence
            </h1>
            <p className="text-xl text-white/90 mb-2">
              Your Smart Assistant for Hospital Administration
            </p>
            <p className="text-white/80 max-w-2xl mx-auto">
              Ask anything about By-Laws, SOPs, policies, procedures, or general hospital administration. 
              Get instant, comprehensive guidance with step-by-step processes.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <Sparkles className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">AI-Powered</p>
              <p className="text-sm text-white/70">Smart Responses</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <BookOpen className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">30</p>
              <p className="text-sm text-white/70">By-Laws Sections</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <FileText className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">68</p>
              <p className="text-sm text-white/70">Standard SOPs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <ClipboardList className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">85</p>
              <p className="text-sm text-white/70">Forms & Templates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Advanced Search Section */}
        <div className="mb-8 -mt-20 relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-purple-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mr-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Ask Your Question</h2>
                <p className="text-sm text-slate-600">Natural language search powered by AI</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setShowSuggestions(e.target.value.length > 2);
                    }}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    onFocus={() => setShowSuggestions(query.length > 2)}
                    placeholder="Type your question... e.g., 'How do I implement By-Laws?' or 'What is the leave policy?'"
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-purple-500 text-lg pr-12"
                  />
                  {query && (
                    <button
                      onClick={() => {setQuery(''); setShowSuggestions(false);}}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                  
                  {/* Autocomplete Suggestions */}
                  {showSuggestions && filteredSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border-2 border-purple-200 max-h-80 overflow-y-auto z-50">
                      {filteredSuggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full text-left px-6 py-3 hover:bg-purple-50 flex items-center transition-colors border-b border-slate-100 last:border-0"
                        >
                          <Search className="w-4 h-4 text-purple-600 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{suggestion}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <button
                  onClick={() => handleSearch()}
                  disabled={loading || !query.trim()}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center shadow-lg hover:shadow-xl transition-all"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Thinking...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Ask AI
                    </>
                  )}
                </button>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-1 text-yellow-500" />
                    <span>Instant answers</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-1 text-green-500" />
                    <span>Comprehensive guidance</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1 text-blue-500" />
                    <span>Expert-level responses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Response Section */}
        {response && (
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
              {/* Response Header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-slate-100">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">AI Guidance Response</h2>
                    <p className="text-sm text-slate-600">Comprehensive answer to your query</p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handleBookmark}
                    className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 flex items-center transition-colors"
                  >
                    <Bookmark className="w-4 h-4 mr-2" />
                    Save
                  </button>
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 flex items-center transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </>
                    )}
                  </button>
                  <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 flex items-center transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 flex items-center transition-colors">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>

              {/* Response Content */}
              <div className="prose max-w-none">
                {formatAnswer(response.answer)}
              </div>

              {/* Related Questions */}
              {getRelatedQuestions().length > 0 && (
                <div className="mt-8 pt-8 border-t-2 border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                    Related Questions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {getRelatedQuestions().map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => {setQuery(q); handleSearch(q);}}
                        className="text-left px-4 py-3 bg-slate-50 hover:bg-purple-50 rounded-lg text-sm text-slate-700 hover:text-purple-700 transition-colors border border-slate-200 hover:border-purple-300"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Scenario Cards - Only show when no response */}
        {!response && (
          <>
            {/* Quick Scenarios */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Popular Scenarios</h2>
                  <p className="text-slate-600 mt-1">Click any card for instant comprehensive guidance</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {scenarios.map((scenario) => {
                  const Icon = scenario.icon;
                  return (
                    <button
                      key={scenario.id}
                      onClick={() => handleScenarioClick(scenario)}
                      className="group relative bg-white rounded-2xl p-6 text-left transition-all hover:shadow-2xl border-2 border-slate-200 hover:border-transparent overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${scenario.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                      
                      <div className="relative">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${scenario.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-2 transition-colors">{scenario.title}</h3>
                        <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors mb-4">{scenario.description}</p>
                        <div className="flex items-center text-sm font-semibold text-purple-600 group-hover:text-white transition-colors">
                          Get Instant Guidance
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search History */}
            {searchHistory.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <History className="w-5 h-5 text-slate-600 mr-2" />
                  Recent Searches
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchHistory.slice(0, 4).map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {setQuery(item.query); handleSearch(item.query);}}
                      className="text-left p-4 bg-white rounded-xl border-2 border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-semibold text-slate-900 text-sm line-clamp-1">{item.query}</p>
                        <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2">{item.answer}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Features Grid */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">What Makes This Special?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3">AI-Powered Intelligence</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Natural language understanding</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Context-aware responses</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Learns from documents</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3">Comprehensive Coverage</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>30 By-Laws sections</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>68 Standard Operating Procedures</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>85 Forms & Annexures</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3">Expert Guidance</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Step-by-step processes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Approval chains & timelines</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Required documents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SmartGuidance;
