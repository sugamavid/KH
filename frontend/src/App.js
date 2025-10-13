import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DepartmentDashboard from './pages/DepartmentDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/department/:deptId" element={<DepartmentDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;