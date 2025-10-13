import React from 'react';
import { Heart, Mail, Phone, MapPin, Shield, Award, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-white border-t-2 border-slate-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Hospital */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-black tracking-wide text-slate-900">KOYILI HOSPITAL</h3>
                <p className="text-xs text-slate-600 font-semibold">Kannur, Kerala</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Providing quality healthcare services with compassion and excellence. Our comprehensive management system ensures streamlined operations and superior patient care.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-600">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600">
                <Award className="w-4 h-4 text-green-600" />
                <span className="text-xs font-semibold">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-400" />
                <p className="text-sm text-slate-600 leading-relaxed">Pallikkunnu, PO, Talap,<br />Kannur, Kerala 670002</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-slate-400" />
                <p className="text-sm font-semibold text-slate-900">0497 271 4400</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-slate-400" />
                <p className="text-sm text-slate-600">info@koyilihospital.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Quick Access</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium">Emergency Services</a>
              <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium">Department Directory</a>
              <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium">Policies & Procedures</a>
              <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium">Help & Support</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-slate-600">
              <p className="font-medium">© 2025 KOYILI HOSPITAL. All rights reserved.</p>
              <div className="hidden md:flex items-center space-x-2 text-slate-400">
                <Clock className="w-4 h-4" />
                <span className="text-xs">System Active • Uptime 99.9%</span>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium">Terms of Service</a>
              <a href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium">System Status</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;