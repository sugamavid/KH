import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Shield, Award, Clock, CheckCircle2, Building2, Phone } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      if (email && password) {
        onLogin();
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Sophisticated Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Main Container */}
      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Professional Branding */}
            <div className="text-white space-y-10 animate-fade-in-left">
              {/* Logo and Hospital Name */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-xl">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_project-hub-123/artifacts/mpnrrrfw_images.jpeg" 
                      alt="KOYILI HOSPITAL" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-black tracking-widest" style={{letterSpacing: '0.15em'}}>
                      KOYILI HOSPITAL
                    </h1>
                    <p className="text-blue-200 text-sm font-medium tracking-wide">Kannur, Kerala</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                    Department<br />Management<br />
                    <span className="text-blue-300">Portal</span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                    Secure, compliant, and comprehensive healthcare management system for modern hospital operations.
                  </p>
                </div>
              </div>

              {/* Professional Features Grid */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Enterprise-Grade Security</h3>
                    <p className="text-sm text-slate-300">Bank-level encryption with multi-layer authentication</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Regulatory Compliance</h3>
                    <p className="text-sm text-slate-300">HIPAA, NABH, and ISO certified operations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">24/7 Availability</h3>
                    <p className="text-sm text-slate-300">Always accessible with 99.9% uptime guarantee</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-8 space-y-3 border-t border-white/10">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Building2 className="w-4 h-4 flex-shrink-0" />
                  <p className="text-sm">Pallikkunnu, PO, Talap, Kannur, Kerala 670002</p>
                </div>
                <div className="flex items-center space-x-6 text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <p className="text-sm font-medium">0497 271 4400</p>
                  </div>
                  <div className="w-px h-4 bg-slate-500"></div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <p className="text-sm">info@koyilihospital.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Premium Login Form */}
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-slate-200">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Secure Access Portal</h2>
                  <p className="text-slate-600 font-medium">Authorized personnel only</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">
                      Email Address
                    </label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Mail className="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900 placeholder-slate-400 font-medium"
                        placeholder="your.email@koyilihospital.com"
                        required
                        data-testid="email-input"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">
                      Password
                    </label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Lock className="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900 placeholder-slate-400 font-medium"
                        placeholder="Enter your secure password"
                        required
                        data-testid="password-input"
                      />
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between pt-2">
                    <label className="flex items-center cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 text-blue-600 border-2 border-slate-300 rounded focus:ring-2 focus:ring-blue-500 transition-all" 
                      />
                      <span className="ml-3 text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                        Keep me signed in
                      </span>
                    </label>
                    <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wide">
                      Reset Password
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-bold text-base uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group mt-8"
                    data-testid="login-button"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Authenticating...
                      </span>
                    ) : (
                      <>
                        Access Dashboard
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                {/* Additional Info */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-slate-600 font-medium">
                    Need access?{' '}
                    <a href="#" className="font-bold text-blue-600 hover:text-blue-700 transition-colors">
                      Contact IT Administrator
                    </a>
                  </p>
                </div>

                {/* Security Badges */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="flex flex-col items-center">
                      <Shield className="w-6 h-6 text-green-600 mb-1" />
                      <span className="text-xs font-bold text-slate-600 uppercase">SSL Encrypted</span>
                    </div>
                    <div className="w-px h-8 bg-slate-300"></div>
                    <div className="flex flex-col items-center">
                      <Award className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs font-bold text-slate-600 uppercase">HIPAA Compliant</span>
                    </div>
                    <div className="w-px h-8 bg-slate-300"></div>
                    <div className="flex flex-col items-center">
                      <CheckCircle2 className="w-6 h-6 text-indigo-600 mb-1" />
                      <span className="text-xs font-bold text-slate-600 uppercase">ISO Certified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Footer */}
              <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                © 2025 KOYILI HOSPITAL. All Rights Reserved. | Protected by Advanced Security Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;