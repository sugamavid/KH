import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  CheckCircle,
  Users,
  FileText,
  ArrowRight,
  Clock,
  AlertCircle,
  ChevronRight,
  BookOpen,
  Sparkles,
  Copy,
  Download,
  Share2,
  Bookmark,
  Check,
  Info,
  Target,
  TrendingUp,
  Award
} from 'lucide-react';

const WorldClassResponse = ({ answer, query }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copied, setCopied] = useState(false);

  // Parse the answer to extract structured information
  const parseAnswer = (text) => {
    const sections = [];
    const lines = text.split('\n');
    let currentSection = null;
    let currentContent = [];

    lines.forEach(line => {
      // Detect section headers (###)
      if (line.startsWith('###')) {
        if (currentSection) {
          sections.push({
            ...currentSection,
            content: currentContent.join('\n')
          });
        }
        currentSection = {
          title: line.replace(/###/g, '').trim(),
          type: 'section',
          content: ''
        };
        currentContent = [];
      } else if (line.trim()) {
        currentContent.push(line);
      }
    });

    if (currentSection) {
      sections.push({
        ...currentSection,
        content: currentContent.join('\n')
      });
    }

    return sections;
  };

  const sections = parseAnswer(answer);

  // Extract process steps for flowchart and clean markdown
  const extractSteps = (text) => {
    const stepPattern = /####\s*(\d+)\.\s*([^\n]+)/g;
    const steps = [];
    let match;

    while ((match = stepPattern.exec(text)) !== null) {
      // Clean markdown from title - remove **, ###, etc.
      let cleanTitle = match[2].trim()
        .replace(/\*\*/g, '')  // Remove bold markers
        .replace(/\*/g, '')    // Remove italic markers
        .replace(/###/g, '')   // Remove headers
        .replace(/####/g, '')  // Remove sub-headers
        .replace(/`/g, '')     // Remove code markers
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // Convert links to text
      
      steps.push({
        number: match[1],
        title: cleanTitle
      });
    }

    return steps;
  };

  const steps = extractSteps(answer);

  // Custom markdown components
  const components = {
    h3: ({node, ...props}) => (
      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center border-b-2 border-blue-200 pb-3">
        <ChevronRight className="w-6 h-6 text-blue-600 mr-2" />
        {props.children}
      </h3>
    ),
    h4: ({node, ...props}) => (
      <h4 className="text-xl font-bold text-slate-800 mt-6 mb-3 flex items-start">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-0.5">
          {props.children.toString().match(/\d+/)?.[0] || '•'}
        </div>
        <span className="flex-1 pt-0.5">{props.children}</span>
      </h4>
    ),
    p: ({node, ...props}) => (
      <p className="text-slate-700 leading-relaxed mb-4 text-base">
        {props.children}
      </p>
    ),
    ul: ({node, ...props}) => (
      <ul className="space-y-2 mb-4 ml-4">
        {props.children}
      </ul>
    ),
    li: ({node, ...props}) => (
      <li className="flex items-start text-slate-700">
        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
        <span className="flex-1">{props.children}</span>
      </li>
    ),
    strong: ({node, ...props}) => (
      <strong className="font-bold text-slate-900">
        {props.children}
      </strong>
    ),
    code: ({node, inline, ...props}) => (
      inline ? (
        <code className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-mono text-sm">
          {props.children}
        </code>
      ) : (
        <code className="block bg-slate-50 p-4 rounded-lg border-2 border-slate-200 font-mono text-sm overflow-x-auto">
          {props.children}
        </code>
      )
    )
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(answer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Create flowchart for process steps
  const ProcessFlowchart = ({ steps }) => {
    if (steps.length === 0) return null;

    return (
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 text-purple-600 mr-2" />
          Process Flowchart
        </h3>
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative mb-6 flex items-start">
              {/* Step circle */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
              </div>
              
              {/* Step content */}
              <div className="ml-6 flex-1">
                <div className="bg-white rounded-xl p-5 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-blue-600" />
                      <span>Step {step.number}</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-1 text-green-600" />
                      <span>Required</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 bottom-0 transform translate-y-full">
                  <ArrowRight className="w-4 h-4 text-blue-500 transform rotate-90 -translate-x-1.5" />
                </div>
              )}
            </div>
          ))}
          
          {/* Final success indicator */}
          <div className="relative flex items-start mt-2">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="ml-6 flex-1">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-200">
                <h4 className="text-lg font-bold text-green-900 mb-1 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Process Complete
                </h4>
                <p className="text-sm text-green-700">All steps successfully executed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Quick summary box
  const QuickSummary = () => {
    const summaryPoints = answer.split('\n')
      .filter(line => line.match(/^[-•*]\s\*\*/))
      .slice(0, 4)
      .map(line => line.replace(/^[-•*]\s\*\*/, '').replace(/\*\*/g, '').trim());

    if (summaryPoints.length === 0) return null;

    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border-2 border-blue-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
          <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
          Quick Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {summaryPoints.map((point, idx) => (
            <div key={idx} className="flex items-start bg-white rounded-lg p-3 shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium">{point}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Key information cards
  const KeyInfoCards = () => {
    const hasWhat = answer.toLowerCase().includes('what');
    const hasWhen = answer.toLowerCase().includes('when');
    const hasWho = answer.toLowerCase().includes('who') || answer.toLowerCase().includes('whom');
    const hasWhere = answer.toLowerCase().includes('where');

    const colorMap = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', gradient: 'from-blue-500 to-blue-600' },
      green: { bg: 'bg-green-50', border: 'border-green-200', gradient: 'from-green-500 to-green-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', gradient: 'from-purple-500 to-purple-600' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', gradient: 'from-orange-500 to-orange-600' }
    };

    const cards = [];
    
    if (hasWhat) cards.push({ title: 'What', icon: Info, color: 'blue', desc: 'Actions & Requirements' });
    if (hasWhen) cards.push({ title: 'When', icon: Clock, color: 'green', desc: 'Timeline & Schedule' });
    if (hasWho) cards.push({ title: 'Who', icon: Users, color: 'purple', desc: 'Stakeholders Involved' });
    if (hasWhere) cards.push({ title: 'Where', icon: Target, color: 'orange', desc: 'Location & Departments' });

    if (cards.length === 0) return null;

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          const colors = colorMap[card.color];
          return (
            <div key={idx} className={`${colors.bg} rounded-xl p-4 border-2 ${colors.border}`}>
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-3`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{card.title}</h4>
              <p className="text-xs text-slate-600">{card.desc}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border-2 border-green-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">AI Guidance Response</h2>
              <p className="text-green-100 text-sm">Comprehensive answer to your query</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg flex items-center transition-all border border-white/30"
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
            <button className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg flex items-center transition-all border border-white/30">
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </button>
            <button className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg flex items-center transition-all border border-white/30">
              <Download className="w-4 h-4 mr-2" />
              PDF
            </button>
            <button className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg flex items-center transition-all border border-white/30">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'overview'
                ? 'bg-white text-green-600'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Overview
          </button>
          {steps.length > 0 && (
            <button
              onClick={() => setActiveTab('flowchart')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'flowchart'
                  ? 'bg-white text-green-600'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Process Flow
            </button>
          )}
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'details'
                ? 'bg-white text-green-600'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Detailed Guide
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {activeTab === 'overview' && (
          <div>
            <QuickSummary />
            <KeyInfoCards />
            
            {/* Main content with proper markdown */}
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={components}
              >
                {answer}
              </ReactMarkdown>
            </div>
          </div>
        )}

        {activeTab === 'flowchart' && (
          <div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-6 border-2 border-purple-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
                <Info className="w-5 h-5 text-purple-600 mr-2" />
                Interactive Process Visualization
              </h3>
              <p className="text-sm text-slate-600">
                Follow this step-by-step visual guide to understand the complete process workflow
              </p>
            </div>
            <ProcessFlowchart steps={steps} />
          </div>
        )}

        {activeTab === 'details' && (
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold mr-3">
                    {idx + 1}
                  </div>
                  {section.title}
                </h3>
                <div className="prose max-w-none">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={components}
                  >
                    {section.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-slate-50 border-t-2 border-slate-200 px-8 py-4">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
            <span>Based on: Koyili Hospital By-Laws, SOPs & Annexures</span>
          </div>
          <div className="flex items-center">
            <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
            <span>Powered by AI Intelligence</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldClassResponse;
