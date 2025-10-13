import React from 'react';
import { Heart, Mail, Phone, MapPin, Shield, Award, Clock, ExternalLink, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t-4 border-blue-600 mt-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1 - Hospital Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-wider text-white">KOYILI HOSPITAL</h3>
                <p className="text-xs text-blue-300 font-semibold uppercase tracking-wide">Kannur, Kerala</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Delivering excellence in healthcare with compassion and advanced medical technology. Our comprehensive management system ensures streamlined operations and superior patient care across all departments.
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-xs font-bold text-slate-200">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold text-slate-200">ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                <Award className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-slate-200">NABH Accredited</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Connect With Us</p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors border border-slate-700 hover:border-blue-500">
                  <Facebook className="w-5 h-5 text-slate-300" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors border border-slate-700 hover:border-blue-400">
                  <Twitter className="w-5 h-5 text-slate-300" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors border border-slate-700 hover:border-blue-600">
                  <Linkedin className="w-5 h-5 text-slate-300" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors border border-slate-700 hover:border-pink-500">
                  <Instagram className="w-5 h-5 text-slate-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Contact Information */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-widest flex items-center">
              <span className="w-8 h-0.5 bg-blue-600 mr-3"></span>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-700 group-hover:border-blue-600 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 mb-1">Hospital Address</p>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Pallikkunnu, PO, Talap<br />
                    Kannur, Kerala 670002
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-700 group-hover:border-green-600 transition-colors">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 mb-1">Phone Number</p>
                  <a href="tel:04972714400" className="text-sm font-bold text-white hover:text-green-400 transition-colors">
                    0497 271 4400
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-700 group-hover:border-purple-600 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 mb-1">Email Address</p>
                  <a href="mailto:info@koyilihospital.com" className="text-sm text-slate-200 hover:text-purple-400 transition-colors">
                    info@koyilihospital.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-widest flex items-center">
              <span className="w-8 h-0.5 bg-blue-600 mr-3"></span>
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="#" className="flex items-center text-sm text-slate-300 hover:text-white transition-colors group">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:w-6 transition-all"></span>
                Emergency Services
              </a>
              <a href="#" className="flex items-center text-sm text-slate-300 hover:text-white transition-colors group">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:w-6 transition-all"></span>
                OPD Timings
              </a>
              <a href="#" className="flex items-center text-sm text-slate-300 hover:text-white transition-colors group">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:w-6 transition-all"></span>
                Department Directory
              </a>
              <a href="#" className="flex items-center text-sm text-slate-300 hover:text-white transition-colors group">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:w-6 transition-all"></span>
                Policies & Procedures
              </a>
              <a href="#" className="flex items-center text-sm text-slate-300 hover:text-white transition-colors group">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:w-6 transition-all"></span>
                Patient Portal
              </a>
              <a href="#" className="flex items-center text-sm text-slate-300 hover:text-white transition-colors group">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:w-6 transition-all"></span>
                Help & Support
              </a>
              <a href="#" className="flex items-center text-sm text-slate-300 hover:text-white transition-colors group">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:w-6 transition-all"></span>
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* System Status Bar */}
      <div className="border-t border-slate-700 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-slate-400 font-medium">All Systems Operational</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-slate-500">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-medium">Uptime: 99.9%</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-slate-500">
              <a href="#" className="hover:text-white transition-colors font-medium flex items-center">
                System Status <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors font-medium">API Status</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors font-medium">Documentation</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-sm text-slate-400 font-medium text-center md:text-left">
              © 2025 <span className="font-bold text-white">KOYILI HOSPITAL</span>. All rights reserved. | Protected by Advanced Security Systems
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Terms of Service</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;