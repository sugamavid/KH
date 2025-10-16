import React from 'react';
import { X, Construction } from 'lucide-react';

const ToolPlaceholder = ({ title, description, icon: Icon, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {Icon && <Icon className="w-8 h-8" />}
              <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-blue-100 text-sm">{description}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-12 text-center">
          <Construction className="w-24 h-24 text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Tool Coming Soon</h3>
          <p className="text-gray-600 text-lg mb-6">
            This powerful tool is being developed with advanced features for {title.toLowerCase()}.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 text-left">
            <h4 className="font-bold text-gray-900 mb-3">Planned Features:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Automated workflows and process management
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Real-time tracking and notifications
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Analytics and reporting capabilities
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Integration with existing forms and data
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolPlaceholder;
