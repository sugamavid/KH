import React, { useState } from 'react';
import HRSidebar from './HRSidebar';
import HRDashboardHome from './HRDashboardHome';
import AdminIntelligenceDashboard from './AdminIntelligenceDashboard';
import EmployeeManagement from './EmployeeManagement';
import AttendanceLeave from './AttendanceLeave';
import PayrollManagement from './PayrollManagement';
import PerformanceManagement from './PerformanceManagement';
import RecruitmentManagement from './RecruitmentManagement';
import TrainingManagement from './TrainingManagement';
import ReportsAnalytics from './ReportsAnalytics';
import ToolsCalculators from './ToolsCalculators';
import IntelligentGuidance from './IntelligentGuidance';
import SmartGuidance from './SmartGuidance';
import HRByLaws from './HRByLaws';
import HRSOPs from './HRSOPs';
import HRAnnexures from './HRAnnexures';
import ProfessionalAnnexures from './ProfessionalAnnexures';
import DocumentManagement from './DocumentManagement';
import DepartmentManagement from './DepartmentManagement';

const HRDashboard = () => {
  const [activeModule, setActiveModule] = useState('dashboard');

  // Define modules that should hide the HR sidebar (legal documents)
  const legalDocumentModules = ['bylaws', 'sops', 'annexures'];
  const fullScreenModules = ['intelligence']; // Intelligence dashboard is full-screen
  const shouldHideSidebar = legalDocumentModules.includes(activeModule) || fullScreenModules.includes(activeModule);

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <HRDashboardHome setActiveModule={setActiveModule} />;
      case 'intelligence':
        return <AdminIntelligenceDashboard setActiveModule={setActiveModule} />;
      case 'employees':
        return <EmployeeManagement />;
      case 'attendance':
        return <AttendanceLeave />;
      case 'payroll':
        return <PayrollManagement />;
      case 'documents':
        return <DocumentManagement />;
      case 'performance':
        return <PerformanceManagement />;
      case 'recruitment':
        return <RecruitmentManagement />;
      case 'training':
        return <TrainingManagement />;
      case 'bylaws':
        return <HRByLaws setActiveModule={setActiveModule} />;
      case 'sops':
        return <HRSOPs setActiveModule={setActiveModule} />;
      case 'annexures':
        return <HRAnnexures setActiveModule={setActiveModule} />;
      case 'reckoner':
        return <SmartGuidance />;
      case 'tools':
        return <ToolsCalculators />;
      case 'reports':
        return <ReportsAnalytics />;
      case 'departments':
        return <DepartmentManagement />;
      default:
        return <HRDashboardHome setActiveModule={setActiveModule} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Conditionally render HR Sidebar - hide for legal documents */}
      {!shouldHideSidebar && (
        <HRSidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      )}
      <div className="flex-1 overflow-auto">
        {renderModule()}
      </div>
    </div>
  );
};

export default HRDashboard;
