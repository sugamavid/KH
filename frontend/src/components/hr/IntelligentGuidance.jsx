import React, { useState } from 'react';
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
  Loader2
} from 'lucide-react';

const IntelligentGuidance = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState(null);

  // Common scenarios
  const scenarios = [
    {
      id: 'bylaw-implementation',
      title: 'By-Laws Implementation',
      description: 'Complete process from ideation to board approval',
      icon: BookOpen,
      color: 'blue',
      query: 'How do I implement or amend By-Laws in Koyili Hospital? Provide detailed step-by-step process from when someone identifies the need for new/amended By-Laws, through legal consultation, department discussions, examination, and final board notification.'
    },
    {
      id: 'recruitment',
      title: 'Recruitment Process',
      description: 'End-to-end hiring workflow',
      icon: Users,
      color: 'green',
      query: 'What is the complete recruitment process at Koyili Hospital? Include approval chain, required forms, timelines, and departments involved.'
    },
    {
      id: 'disciplinary',
      title: 'Disciplinary Action',
      description: 'Handling employee conduct issues',
      icon: AlertCircle,
      color: 'red',
      query: 'What is the disciplinary action process? Include investigation steps, documentation required, and approval authorities.'
    },
    {
      id: 'leave-approval',
      title: 'Leave Approval',
      description: 'Leave application and approval workflow',
      icon: CheckCircle,
      color: 'purple',
      query: 'How does the leave approval process work? Who approves different types of leave, what forms are needed, and what are the timelines?'
    },
    {
      id: 'performance',
      title: 'Performance Management',
      description: 'Evaluation and review process',
      icon: TrendingUp,
      color: 'orange',
      query: 'Explain the performance management process including evaluation cycles, forms, approval chain, and documentation requirements.'
    },
    {
      id: 'grievance',
      title: 'Grievance Handling',
      description: 'Employee complaint resolution',
      icon: MessageSquare,
      color: 'teal',
      query: 'What is the process for handling employee grievances? Include filing procedures, investigation steps, and resolution timeline.'
    },
    {
      id: 'training',
      title: 'Training Programs',
      description: 'Employee training and development',
      icon: Lightbulb,
      color: 'indigo',
      query: 'How do I organize training programs? Include approval process, budget requirements, and documentation needed.'
    },
    {
      id: 'sop-creation',
      title: 'Creating New SOPs',
      description: 'SOP development and approval',
      icon: ClipboardList,
      color: 'amber',
      query: 'What is the process for creating and approving new SOPs? Include drafting, review, approval chain, and implementation steps.'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        hover: 'hover:bg-blue-100'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        hover: 'hover:bg-green-100'
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: 'text-red-600',
        hover: 'hover:bg-red-100'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        hover: 'hover:bg-purple-100'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        hover: 'hover:bg-orange-100'
      },
      teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        icon: 'text-teal-600',
        hover: 'hover:bg-teal-100'
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        icon: 'text-indigo-600',
        hover: 'hover:bg-indigo-100'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        icon: 'text-amber-600',
        hover: 'hover:bg-amber-100'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setResponse(null);
    
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const res = await fetch(`${backendUrl}/api/guidance/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query,
          session_id: `guidance-${Date.now()}`
        })
      });
      
      if (!res.ok) {
        throw new Error('Failed to get guidance');
      }
      
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error getting guidance:', error);
      setResponse({
        answer: 'Sorry, I encountered an error processing your request. Please try again or contact support.',
        related_documents: [],
        suggested_actions: [],
        process_steps: []
      });
    } finally {
      setLoading(false);
    }
  };

  const handleScenarioClick = (scenario) => {
    setSelectedScenario(scenario);
    setQuery(scenario.query);
    handleSearchWithQuery(scenario.query);
  };

  const handleSearchWithQuery = async (searchQuery) => {
    setLoading(true);
    setResponse(null);
    
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
    } catch (error) {
      console.error('Error getting guidance:', error);
      setResponse({
        answer: 'Sorry, I encountered an error processing your request. Please try again or contact support.',
        related_documents: [],
        suggested_actions: [],
        process_steps: []
      });
    } finally {
      setLoading(false);
    }
  };

  const formatAnswer = (answer) => {
    // Split by double newlines for paragraphs
    const paragraphs = answer.split('\n\n');
    return paragraphs.map((para, idx) => {
      // Check if it's a numbered list item
      if (para.match(/^\d+\./)) {
        return (
          <div key={idx} className="ml-4 mb-3">
            <p className="text-slate-800 leading-relaxed">{para}</p>
          </div>
        );
      }
      // Check if it's a bullet point
      else if (para.match(/^[-•]/)) {
        return (
          <div key={idx} className="ml-4 mb-2">
            <p className="text-slate-700">{para}</p>
          </div>
        );
      }
      // Regular paragraph
      else {
        return (
          <p key={idx} className="text-slate-800 leading-relaxed mb-4">
            {para}
          </p>
        );
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="w-14 h-14 mr-4" />
                <div>
                  <h1 className="text-4xl font-bold">AI-Powered HR Guidance</h1>
                  <p className="text-purple-100 mt-2">Intelligent Assistant for By-Laws, SOPs & Annexures</p>
                </div>
              </div>
              <p className="text-white/90 max-w-3xl">
                Ask anything about HR processes, policies, and procedures. Get comprehensive step-by-step 
                guidance with relevant document references and approval workflows.
              </p>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Sparkles className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm text-purple-100">AI-Powered</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <BookOpen className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm text-purple-100">30 By-Laws</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <FileText className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm text-purple-100">68 SOPs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200">
            <div className="flex items-center mb-4">
              <Search className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-xl font-bold text-slate-900">Ask Your HR Question</h2>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Type your question... e.g., 'How do I implement By-Laws?'"
                className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-purple-500 text-lg"
              />
              <button
                onClick={handleSearch}
                disabled={loading || !query.trim()}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Thinking...
                  </>
                ) : (
                  <>
                    Get Answer
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              💡 Try asking: "What is the complete process for implementing By-Laws?" or "How do I handle employee grievances?"
            </p>
          </div>
        </div>

        {/* Response Section */}
        {response && (
          <div className="mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
              <div className="flex items-center mb-6">
                <Sparkles className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">AI Guidance</h2>
              </div>
              <div className="prose max-w-none">
                {formatAnswer(response.answer)}
              </div>
            </div>
          </div>
        )}

        {/* Common Scenarios */}
        {!response && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Popular Scenarios</h2>
              <p className="text-slate-600 mb-6">Click on any scenario to get instant comprehensive guidance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scenarios.map((scenario) => {
                const colors = getColorClasses(scenario.color);
                const Icon = scenario.icon;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => handleScenarioClick(scenario)}
                    className={`${colors.bg} ${colors.border} ${colors.hover} border-2 rounded-xl p-6 text-left transition-all hover:shadow-lg`}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4`}>
                      <Icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{scenario.title}</h3>
                    <p className="text-sm text-slate-600">{scenario.description}</p>
                    <div className="mt-4 flex items-center text-sm font-semibold text-purple-600">
                      Get Guidance
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Information Section */}
        {!response && (
          <div className="mt-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border-2 border-purple-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What Can I Help You With?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
                  Process Guidance
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Step-by-step workflows</li>
                  <li>• Approval chains</li>
                  <li>• Required documents</li>
                  <li>• Timeline expectations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <FileText className="w-5 h-5 text-purple-600 mr-2" />
                  Policy Information
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• By-Laws interpretation</li>
                  <li>• SOP explanations</li>
                  <li>• Form requirements</li>
                  <li>• Compliance rules</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <Users className="w-5 h-5 text-purple-600 mr-2" />
                  Authority & Contacts
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Who approves what</li>
                  <li>• Department contacts</li>
                  <li>• Escalation procedures</li>
                  <li>• Committee information</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntelligentGuidance;
