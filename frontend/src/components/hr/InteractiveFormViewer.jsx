import React, { useState } from 'react';
import { X, Download, Save, Send, CheckCircle, Calendar, Upload, User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

const InteractiveFormViewer = ({ form, onClose }) => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderFormField = (field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'tel':
        return (
          <input
            type={field.type}
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        );
      
      case 'textarea':
        return (
          <textarea
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            rows={field.rows || 4}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        );
      
      case 'select':
        return (
          <select
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            required={field.required}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="">Select {field.label}</option>
            {field.options.map((option, idx) => (
              <option key={idx} value={option.value || option}>
                {option.label || option}
              </option>
            ))}
          </select>
        );
      
      case 'date':
        return (
          <input
            type="date"
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            required={field.required}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        );
      
      case 'file':
        return (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500">{field.acceptedFormats || 'PDF, DOC, JPG (max 5MB)'}</p>
            <input
              type="file"
              onChange={(e) => handleInputChange(field.id, e.target.files[0])}
              accept={field.accept}
              className="hidden"
            />
          </div>
        );
      
      case 'radio':
        return (
          <div className="space-y-2">
            {field.options.map((option, idx) => (
              <label key={idx} className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer">
                <input
                  type="radio"
                  name={field.id}
                  value={option.value || option}
                  checked={formData[field.id] === (option.value || option)}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">{option.label || option}</span>
              </label>
            ))}
          </div>
        );
      
      case 'checkbox':
        return (
          <label className="flex items-start space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer">
            <input
              type="checkbox"
              checked={formData[field.id] || false}
              onChange={(e) => handleInputChange(field.id, e.target.checked)}
              className="w-5 h-5 text-blue-600 mt-0.5"
            />
            <span className="text-gray-700 text-sm">{field.text}</span>
          </label>
        );
      
      default:
        return null;
    }
  };

  const currentSection = form.sections[currentStep];
  const isLastStep = currentStep === form.sections.length - 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_project-hub-123/artifacts/mpnrrrfw_images.jpeg" 
                alt="Koyili Hospital Logo" 
                className="w-16 h-16 object-contain bg-white rounded-lg p-2 shadow-lg"
              />
              <div>
                <h2 className="text-2xl font-bold">{form.title}</h2>
                <p className="text-sm text-blue-200">{form.code} | {form.category}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center space-x-2">
            {form.sections.map((section, idx) => (
              <React.Fragment key={idx}>
                <div className={`flex items-center space-x-2 ${idx <= currentStep ? 'opacity-100' : 'opacity-50'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    idx < currentStep ? 'bg-green-500' : idx === currentStep ? 'bg-white text-blue-900' : 'bg-blue-700'
                  }`}>
                    {idx < currentStep ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                  </div>
                  <span className="text-sm font-medium hidden md:inline">{section.title}</span>
                </div>
                {idx < form.sections.length - 1 && (
                  <div className={`flex-1 h-1 rounded ${idx < currentStep ? 'bg-green-500' : 'bg-blue-700'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentSection.title}</h3>
            {currentSection.description && (
              <p className="text-gray-600 mb-6">{currentSection.description}</p>
            )}

            <div className="space-y-6">
              {currentSection.fields.map((field, idx) => (
                <div key={idx}>
                  <label className="block mb-2">
                    <span className="text-sm font-semibold text-gray-900">
                      {field.label}
                      {field.required && <span className="text-red-600 ml-1">*</span>}
                    </span>
                    {field.helperText && (
                      <span className="block text-xs text-gray-500 mt-1">{field.helperText}</span>
                    )}
                  </label>
                  {renderFormField(field)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 border-t border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Step {currentStep + 1} of {form.sections.length}
          </div>
          <div className="flex items-center space-x-3">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Previous
              </button>
            )}
            <button
              className="px-6 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition-colors flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Draft</span>
            </button>
            {!isLastStep ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Form</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFormViewer;
