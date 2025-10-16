#!/bin/bash

# Create H2 Form (Appraisal Format)
cat > /app/frontend/src/components/hr/forms/ProfessionalH2Form.jsx << 'H2EOF'
import React, { useState, useRef } from 'react';
import { Save, Upload, RotateCcw, Printer, Download, Plus, Trash2, Award } from 'lucide-react';

const ProfessionalH2Form = () => {
  const [formData, setFormData] = useState({
    effective_date: '', emp_name: '', emp_id: '', emp_dept: '', emp_desig: '',
    reporting_manager: '', review_period: '', overall_rating: '', strengths: '',
    improvements: '', training_needs: '', emp_comments: '', mgr_comments: '',
    hr_validation: '', sig_emp_name: '', sig_emp_date: '', sig_mgr_name: '',
    sig_mgr_date: '', sig_hr_name: '', sig_hr_date: '', sig_dir_name: '', sig_dir_date: ''
  });

  const [perfRows, setPerfRows] = useState([
    { goal: '', weight: '', target: '', self: '', mgr: '', final: '', remarks: '' }
  ]);

  const [compRows, setCompRows] = useState([
    { area: '', rating: '', comments: '' }
  ]);

  const [logoData, setLogoData] = useState('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
  const fileInputRef = useRef(null);
  const loadInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePerfChange = (index, field, value) => {
    const updated = [...perfRows];
    updated[index][field] = value;
    if (field === 'weight' || field === 'mgr') {
      const weight = parseFloat(updated[index].weight) || 0;
      const mgr = parseFloat(updated[index].mgr) || 0;
      updated[index].final = ((weight * mgr) / 100).toFixed(2);
    }
    setPerfRows(updated);
  };

  const handleCompChange = (index, field, value) => {
    const updated = [...compRows];
    updated[index][field] = value;
    setCompRows(updated);
  };

  const addPerfRow = () => setPerfRows([...perfRows, { goal: '', weight: '', target: '', self: '', mgr: '', final: '', remarks: '' }]);
  const removePerfRow = (index) => perfRows.length > 1 && setPerfRows(perfRows.filter((_, i) => i !== index));
  const addCompRow = () => setCompRows([...compRows, { area: '', rating: '', comments: '' }]);
  const removeCompRow = (index) => compRows.length > 1 && setCompRows(compRows.filter((_, i) => i !== index));

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setLogoData(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const data = { logo: logoData, formData, perfRows, compRows };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Annexure_H2_Appraisal.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          if (data.logo) setLogoData(data.logo);
          if (data.formData) setFormData(data.formData);
          if (data.perfRows) setPerfRows(data.perfRows);
          if (data.compRows) setCompRows(data.compRows);
        } catch (err) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all fields?')) {
      setFormData({
        effective_date: '', emp_name: '', emp_id: '', emp_dept: '', emp_desig: '',
        reporting_manager: '', review_period: '', overall_rating: '', strengths: '',
        improvements: '', training_needs: '', emp_comments: '', mgr_comments: '',
        hr_validation: '', sig_emp_name: '', sig_emp_date: '', sig_mgr_name: '',
        sig_mgr_date: '', sig_hr_name: '', sig_hr_date: '', sig_dir_name: '', sig_dir_date: ''
      });
      setPerfRows([{ goal: '', weight: '', target: '', self: '', mgr: '', final: '', remarks: '' }]);
      setCompRows([{ area: '', rating: '', comments: '' }]);
      setLogoData('https://customer-assets.emergentagent.com/job_koyili-hrms/artifacts/0pgv6z3a_koyili-logo.png');
    }
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-3 print:hidden">
        <div className="flex items-center gap-3 flex-wrap">
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm font-semibold"><Save className="w-4 h-4" /> Save</button>
          <button onClick={() => loadInputRef.current?.click()} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm font-semibold"><Upload className="w-4 h-4" /> Load</button>
          <button onClick={handleReset} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2 text-sm font-semibold"><RotateCcw className="w-4 h-4" /> Reset</button>
          <button onClick={handlePrint} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 text-sm font-semibold"><Printer className="w-4 h-4" /> Print</button>
          <button onClick={() => fileInputRef.current?.click()} className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 flex items-center gap-2 text-sm font-semibold"><Download className="w-4 h-4" /> Change Logo</button>
        </div>
      </div>
      <input ref={fileInputRef} type="file" accept="image/*,.svg" onChange={handleLogoUpload} className="hidden" />
      <input ref={loadInputRef} type="file" accept=".json" onChange={handleLoad} className="hidden" />

      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-8 py-6">
        <div className="flex items-center justify-between gap-6">
          <div className="flex-shrink-0">
            {logoData && <img src={logoData} alt="Koyili Hospital Logo" className="w-24 h-24 bg-white rounded-lg p-2 shadow-xl object-contain" />}
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-bold tracking-wide mb-1">KOYILI HOSPITAL</h1>
            <p className="text-blue-200 text-sm font-semibold">Human Resources Department</p>
            <p className="text-blue-300 text-xs">NABH Accredited • Pallikkunnu, Talap, Kannur, Kerala</p>
            <div className="mt-3 pt-3 border-t border-blue-400/30">
              <h2 className="text-xl font-bold">APPRAISAL FORMAT</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">H2</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200">Version 1.0</p>
            </div>
            <div className="bg-yellow-500/90 px-3 py-1 rounded-full">
              <p className="text-xs font-bold text-blue-900">NABH</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Employee Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Name</label><input type="text" name="emp_name" value={formData.emp_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label><input type="text" name="emp_id" value={formData.emp_id} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Department</label><input type="text" name="emp_dept" value={formData.emp_dept} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label><input type="text" name="emp_desig" value={formData.emp_desig} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Reporting Manager</label><input type="text" name="reporting_manager" value={formData.reporting_manager} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Review Period</label><input type="text" name="review_period" value={formData.review_period} onChange={handleChange} placeholder="e.g., Jan-Jun 2025" className="w-full px-3 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Award className="w-5 h-5" />Performance Evaluation ({perfRows.length} rows)</h3>
            <button onClick={addPerfRow} className="px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm font-semibold">
              <Plus className="w-4 h-4" /> Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-200 px-2 py-2 text-left">#</th>
                  <th className="border border-gray-200 px-2 py-2 text-left">Goal/KPI</th>
                  <th className="border border-gray-200 px-2 py-2 text-left">Weight %</th>
                  <th className="border border-gray-200 px-2 py-2 text-left">Target vs Achievement</th>
                  <th className="border border-gray-200 px-2 py-2 text-left">Self</th>
                  <th className="border border-gray-200 px-2 py-2 text-left">Mgr</th>
                  <th className="border border-gray-200 px-2 py-2 text-left">Final</th>
                  <th className="border border-gray-200 px-2 py-2 text-left">Remarks</th>
                  <th className="border border-gray-200 px-2 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {perfRows.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 px-2 py-2 text-center">{index + 1}</td>
                    <td className="border border-gray-200 px-2 py-2"><input value={row.goal} onChange={(e) => handlePerfChange(index, 'goal', e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded text-sm" /></td>
                    <td className="border border-gray-200 px-2 py-2"><input type="number" value={row.weight} onChange={(e) => handlePerfChange(index, 'weight', e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded text-sm" /></td>
                    <td className="border border-gray-200 px-2 py-2"><input value={row.target} onChange={(e) => handlePerfChange(index, 'target', e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded text-sm" /></td>
                    <td className="border border-gray-200 px-2 py-2"><input type="number" min="0" max="5" step="0.1" value={row.self} onChange={(e) => handlePerfChange(index, 'self', e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded text-sm" /></td>
                    <td className="border border-gray-200 px-2 py-2"><input type="number" min="0" max="5" step="0.1" value={row.mgr} onChange={(e) => handlePerfChange(index, 'mgr', e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded text-sm" /></td>
                    <td className="border border-gray-200 px-2 py-2"><input value={row.final} readOnly className="w-full px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm" /></td>
                    <td className="border border-gray-200 px-2 py-2"><input value={row.remarks} onChange={(e) => handlePerfChange(index, 'remarks', e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded text-sm" /></td>
                    <td className="border border-gray-200 px-2 py-2 text-center">
                      <button onClick={() => removePerfRow(index)} disabled={perfRows.length === 1} className="p-1 text-red-600 hover:text-red-800 disabled:text-gray-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Competency Assessment ({compRows.length} rows)</h3>
            <button onClick={addCompRow} className="px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm font-semibold">
              <Plus className="w-4 h-4" /> Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-200 px-2 py-2 text-left">#</th>
                  <th className="border border-gray-200 px-2 py-2 text-left">Competency Area</th>
                  <th className="border border-gray-200 px-2 py-2 text-left">Rating (1-5)</th>
                  <th className="border border-gray-200 px-2 py-2 text-left">Comments</th>
                  <th className="border border-gray-200 px-2 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {compRows.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 px-2 py-2 text-center">{index + 1}</td>
                    <td className="border border-gray-200 px-2 py-2"><input value={row.area} onChange={(e) => handleCompChange(index, 'area', e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded text-sm" /></td>
                    <td className="border border-gray-200 px-2 py-2"><input type="number" min="0" max="5" step="0.1" value={row.rating} onChange={(e) => handleCompChange(index, 'rating', e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded text-sm" /></td>
                    <td className="border border-gray-200 px-2 py-2"><input value={row.comments} onChange={(e) => handleCompChange(index, 'comments', e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded text-sm" /></td>
                    <td className="border border-gray-200 px-2 py-2 text-center">
                      <button onClick={() => removeCompRow(index)} disabled={compRows.length === 1} className="p-1 text-red-600 hover:text-red-800 disabled:text-gray-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Overall Summary</h3>
          <div className="space-y-4">
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Strengths Identified</label><textarea name="strengths" value={formData.strengths} onChange={handleChange} rows="2" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Areas for Improvement</label><textarea name="improvements" value={formData.improvements} onChange={handleChange} rows="2" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" /></div>
            <div><label className="block text-sm font-semibold text-gray-700 mb-1">Training/Development Needs</label><textarea name="training_needs" value={formData.training_needs} onChange={handleChange} rows="2" className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none" /></div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Signatures</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-gray-200 px-3 py-2 text-left">Role</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Name</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Employee</td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_emp_name" value={formData.sig_emp_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_emp_date" value={formData.sig_emp_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Reporting Manager</td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_mgr_name" value={formData.sig_mgr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_mgr_date" value={formData.sig_mgr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">HR Manager</td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_hr_name" value={formData.sig_hr_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_hr_date" value={formData.sig_hr_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Director</td>
                <td className="border border-gray-200 px-3 py-2"><input name="sig_dir_name" value={formData.sig_dir_name} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
                <td className="border border-gray-200 px-3 py-2"><input type="date" name="sig_dir_date" value={formData.sig_dir_date} onChange={handleChange} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-8 py-5 mt-8">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xs">NABH</span>
            </div>
            <div>
              <p className="text-sm font-semibold">© 2024 Koyili Hospital</p>
              <p className="text-xs text-blue-200">NABH Accredited • Confidential Document • Version-controlled</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold">Form H2</p>
            <p className="text-xs text-blue-200">Appraisal Format</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalH2Form;
H2EOF

echo "H2 created"

