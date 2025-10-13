import React, { useState } from 'react';
import HRSidebar from './HRSidebar';
import HRDashboardHome from './HRDashboardHome';
import EmployeeManagement from './EmployeeManagement';
import AttendanceLeave from './AttendanceLeave';
import PayrollManagement from './PayrollManagement';
import PerformanceManagement from './PerformanceManagement';
import RecruitmentManagement from './RecruitmentManagement';
import TrainingManagement from './TrainingManagement';
import LegalOperationsCompliance from './LegalOperationsCompliance';
import ReportsAnalytics from './ReportsAnalytics';
import ToolsCalculators from './ToolsCalculators';

const HRDashboard = () => {
  const [activeModule, setActiveModule] = useState('dashboard');

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <HRDashboardHome />;
      case 'employees':
        return <EmployeeManagement />;
      case 'attendance':
        return <AttendanceLeave />;
      case 'payroll':
        return <PayrollManagement />;
      case 'performance':
        return <PerformanceManagement />;
      case 'recruitment':
        return <RecruitmentManagement />;
      case 'training':
        return <TrainingManagement />;
      case 'legal':
        return <LegalOperationsCompliance />;
      case 'reports':
        return <ReportsAnalytics />;
      case 'tools':
        return <ToolsCalculators />;
      default:
        return <HRDashboardHome />;
    }
  };

  return (
    <div className="flex h-full min-h-screen bg-slate-50">
      <HRSidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      <div className="flex-1 overflow-auto">
        {renderModule()}
      </div>
    </div>
  );
};

export default HRDashboard;
