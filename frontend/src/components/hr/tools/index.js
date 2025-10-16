import { Users, TrendingUp, Clock, DollarSign, GraduationCap, Lock, Heart, AlertCircle, UserX, Calendar, BarChart3, Upload, Activity } from 'lucide-react';
import ToolPlaceholder from './ToolPlaceholder';

export const RecruitmentPipeline = ({ onClose }) => (
  <ToolPlaceholder title="Smart Recruitment Pipeline" description="End-to-end hiring workflow management" icon={Users} onClose={onClose} />
);

export const OnboardingHub = ({ onClose }) => (
  <ToolPlaceholder title="Onboarding Automation Hub" description="Automated onboarding workflows" icon={Users} onClose={onClose} />
);

export const PerformanceScheduler = ({ onClose }) => (
  <ToolPlaceholder title="Performance Review Scheduler" description="Automated performance management" icon={TrendingUp} onClose={onClose} />
);

export const AttendanceDashboard = ({ onClose }) => (
  <ToolPlaceholder title="Attendance & Leave Dashboard" description="Real-time attendance tracking" icon={Clock} onClose={onClose} />
);

export const PayrollProcessor = ({ onClose }) => (
  <ToolPlaceholder title="Payroll Pre-Processor" description="Automate payroll calculations" icon={DollarSign} onClose={onClose} />
);

export const TrainingTracker = ({ onClose }) => (
  <ToolPlaceholder title="Training & Competency Tracker" description="Training management system" icon={GraduationCap} onClose={onClose} />
);

export const SecurityCompliance = ({ onClose }) => (
  <ToolPlaceholder title="IT Security Compliance Monitor" description="Security and compliance tracking" icon={Lock} onClose={onClose} />
);

export const WellnessMonitor = ({ onClose }) => (
  <ToolPlaceholder title="Employee Wellness Monitor" description="Health and wellness tracking" icon={Heart} onClose={onClose} />
);

export const GrievanceTracker = ({ onClose }) => (
  <ToolPlaceholder title="Grievance Resolution Tracker" description="Track grievances and resolutions" icon={AlertCircle} onClose={onClose} />
);

export const ExitAutomation = ({ onClose }) => (
  <ToolPlaceholder title="Exit Process Automation" description="Automated exit workflows" icon={UserX} onClose={onClose} />
);

export const ComplianceCalendar = ({ onClose }) => (
  <ToolPlaceholder title="Compliance Calendar" description="Track compliance deadlines" icon={Calendar} onClose={onClose} />
);

export const BulkFormGenerator = ({ onClose }) => (
  <ToolPlaceholder title="Bulk Form Generator" description="Generate multiple forms at once" icon={Upload} onClose={onClose} />
);

export const AnalyticsDashboard = ({ onClose }) => (
  <ToolPlaceholder title="Real-Time Analytics Hub" description="Form completion analytics" icon={BarChart3} onClose={onClose} />
);

export const DocumentLifecycle = ({ onClose }) => (
  <ToolPlaceholder title="Document Lifecycle Manager" description="Track document status" icon={Activity} onClose={onClose} />
);
