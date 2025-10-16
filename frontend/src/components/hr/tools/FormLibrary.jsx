import React, { useState } from 'react';
import { X, Search, Filter, Grid, List } from 'lucide-react';
import HRAnnexures from '../HRAnnexures';

const FormLibrary = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 shadow-lg z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <Grid className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Form Library & Repository</h2>
              <p className="text-indigo-100 text-sm">Access all 76 professional annexure forms</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6">
        <HRAnnexures />
      </div>
    </div>
  );
};

export default FormLibrary;