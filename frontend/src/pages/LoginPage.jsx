import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Shield, Award, Heart, Activity } from 'lucide-react';

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-200 rounded-full animate-float-delay-1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-200 rounded-full animate-float-delay-2"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-pink-200 rounded-full animate-float-delay-3"></div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          
          {/* Left Side - Branding & Info */}
          <div className="lg:col-span-2 text-white space-y-8 animate-fade-in-left">
            {/* Logo */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-white rounded-2xl p-2 shadow-2xl animate-bounce-slow">
                <img 
                  src="https://customer-assets.emergentagent.com/job_project-hub-123/artifacts/mpnrrrfw_images.jpeg" 
                  alt="Koyili Hospital" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight">Koyili Hospital</h1>
                <p className="text-blue-200 text-lg">Kannur, Kerala</p>
              </div>
            </div>

            {/* Tagline */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Advanced Department<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Management System
                </span>
              </h2>
              <p className="text-blue-100 text-lg">
                Streamlining healthcare operations with cutting-edge technology
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Shield className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <p className="font-semibold">Secure & Compliant</p>
                  <p className="text-sm text-blue-200">Industry-standard security protocols</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Activity className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <p className="font-semibold">Real-time Analytics</p>
                  <p className="text-sm text-blue-200">Instant insights and reporting</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Heart className="w-6 h-6 text-pink-300" />
                </div>
                <div>
                  <p className="font-semibold">Patient-Centered Care</p>
                  <p className="text-sm text-blue-200">Enhancing healthcare delivery</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-blue-200">
                📍 Pallikkunnu, PO, Talap, Kannur, Kerala 670002
              </p>
              <p className="text-sm text-blue-200 mt-1">
                📧 info@koyilihospital.com | 📞 +91 (497) XXX XXXX
              </p>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="lg:col-span-3 animate-fade-in-right">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-600">Sign in to access your dashboard</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                      placeholder="admin@koyilihospital.com"
                      required
                      data-testid="email-input"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                      placeholder="Enter your password"
                      required
                      data-testid="password-input"
                    />
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all" 
                    />
                    <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                      Remember me
                    </span>
                  </label>
                  <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
                  data-testid="login-button"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    <>
                      Sign In to Dashboard
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <a href="#" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    Contact Administrator
                  </a>
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-8">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-medium">SSL Secured</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-medium">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs font-medium">Patient Safe</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-center text-sm text-white/60 mt-6">
              © 2025 Koyili Hospital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;