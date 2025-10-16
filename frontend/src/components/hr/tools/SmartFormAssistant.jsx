import React, { useState } from 'react';
import { X, Brain, Search, ArrowRight, FileText } from 'lucide-react';

const SmartFormAssistant = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const formDatabase = [
    { code: 'B1', name: 'Manpower Requisition Form', keywords: ['hire', 'recruit', 'vacancy', 'position', 'need staff'] },
    { code: 'B5', name: 'Interview Assessment Form', keywords: ['interview', 'candidate', 'assess', 'evaluation'] },
    { code: 'B9', name: 'Offer Letter', keywords: ['offer', 'job offer', 'hiring', 'selected candidate'] },
    { code: 'C1', name: 'Orientation Checklist', keywords: ['onboard', 'new joiner', 'induction', 'welcome'] },
    { code: 'E1', name: 'Attendance Register', keywords: ['attendance', 'present', 'absent', 'leave'] },
    { code: 'D1', name: 'Goal Setting', keywords: ['performance', 'kpi', 'objectives', 'targets'] },
    { code: 'M1', name: 'Grievance Filing', keywords: ['complaint', 'grievance', 'issue', 'problem'] },
    { code: 'N1', name: 'Resignation Form', keywords: ['resign', 'quit', 'leave job', 'exit'] },
    { code: 'N4', name: 'Full & Final Settlement', keywords: ['exit', 'settlement', 'final payment', 'clearance'] },
    { code: 'I1', name: 'Payroll Processing', keywords: ['salary', 'payroll', 'wages', 'payment'] },
    { code: 'J1', name: 'Training Nomination', keywords: ['training', 'course', 'learning', 'development'] },
    { code: 'K1', name: 'IT Access Form', keywords: ['computer', 'access', 'login', 'system'] },
    { code: 'L1', name: 'EAP Referral', keywords: ['counseling', 'mental health', 'wellness', 'support'] }
  ];

  const analyzeQuery = () => {
    setLoading(true);
    setTimeout(() => {
      const q = query.toLowerCase();
      const matches = formDatabase.filter(form => 
        form.keywords.some(keyword => q.includes(keyword)) ||
        form.name.toLowerCase().includes(q)
      );
      setRecommendations(matches.length > 0 ? matches : []);
      setLoading(false);
    }, 800);
  };

  const exampleQueries = [
    'I need to hire a new nurse',
    'An employee wants to resign',
    'How do I process monthly payroll?',
    'Someone filed a complaint',
    'Need to conduct training',
    'New employee joining tomorrow'
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-t-2xl z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">AI Form Intelligence Assistant</h2>
                <p className="text-purple-100 text-sm">Ask in natural language, get smart recommendations</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              What do you need help with?
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && analyzeQuery()}
                placeholder="Type your question... e.g., 'I need to hire a nurse'"
                className="flex-1 px-4 py-3 border-2 border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-lg"
              />
              <button
                onClick={analyzeQuery}
                disabled={!query || loading}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50 flex items-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>{loading ? 'Analyzing...' : 'Analyze'}</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Try these examples:</h3>
            <div className="flex flex-wrap gap-2">
              {exampleQueries.map((example, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuery(example)}
                  className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition text-sm"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          {recommendations.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <ArrowRight className="w-6 h-6 mr-2 text-purple-600" />
                Recommended Forms ({recommendations.length})
              </h3>
              {recommendations.map((form, idx) => (
                <div key={idx} className="bg-white border-2 border-purple-200 rounded-xl p-4 hover:border-purple-400 transition">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-purple-100 text-purple-700 font-bold px-4 py-2 rounded-lg">
                        {form.code}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">{form.name}</h4>
                        <p className="text-sm text-gray-500">Form {form.code}</p>
                      </div>
                    </div>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition font-semibold">
                      Open Form
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {recommendations.length === 0 && query && !loading && (
            <div className="text-center py-8 bg-gray-50 rounded-xl">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">No matching forms found. Try rephrasing your question.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartFormAssistant;