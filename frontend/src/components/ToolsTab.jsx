import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calculator, ArrowRight, Wrench } from 'lucide-react';
import ToolCalculator from './ToolCalculator';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ToolsTab = ({ deptId }) => {
  const [tools, setTools] = useState([]);
  const [selectedTool, setSelectedTool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTools();
  }, [deptId]);

  const fetchTools = async () => {
    try {
      const response = await axios.get(`${API}/tools/${deptId}`);
      setTools(response.data);
    } catch (error) {
      console.error('Error fetching tools:', error);
    } finally {
      setLoading(false);
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      teal: 'bg-teal-100 text-teal-600 border-teal-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      pink: 'bg-pink-100 text-pink-600 border-pink-200',
      cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200',
      lime: 'bg-lime-100 text-lime-600 border-lime-200'
    };
    return colors[color] || 'bg-gray-100 text-gray-600 border-gray-200';
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (selectedTool) {
    return <ToolCalculator tool={selectedTool} onBack={() => setSelectedTool(null)} />;
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready Reckoner Tools</h2>
        <p className="text-gray-600">
          Interactive calculators and tools to help with day-to-day operations and calculations.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all cursor-pointer overflow-hidden"
            onClick={() => setSelectedTool(tool)}
            data-testid={`tool-${tool.id}`}
          >
            <div className="p-6">
              <div className={`w-14 h-14 rounded-lg ${getColorClasses(tool.color)} border-2 flex items-center justify-center mb-4`}>
                <Calculator className="w-7 h-7" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tool.description}</p>
              
              <div className="space-y-2 mb-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-1">Inputs:</p>
                  <div className="flex flex-wrap gap-1">
                    {tool.inputs.slice(0, 3).map((input, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {input}
                      </span>
                    ))}
                    {tool.inputs.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        +{tool.inputs.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-1">Outputs:</p>
                  <div className="flex flex-wrap gap-1">
                    {tool.outputs.slice(0, 2).map((output, idx) => (
                      <span key={idx} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">
                        {output}
                      </span>
                    ))}
                    {tool.outputs.length > 2 && (
                      <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">
                        +{tool.outputs.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center">
                Open Calculator
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {tools.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <Wrench className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">No tools available for this department yet.</p>
        </div>
      )}
    </div>
  );
};

export default ToolsTab;