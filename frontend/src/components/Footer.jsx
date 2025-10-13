import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Koyili Hospital</h3>
            <p className="text-sm text-gray-600 mb-4">
              Providing quality healthcare services with compassion and excellence since our establishment.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Caring for our community</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Koyili Hospital, Pallikkunnu, PO<br />Talap, Kannur, Kerala 670002</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 (497) XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@koyilihospital.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Emergency Services
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                OPD Timings
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Department Directory
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Policies & Procedures
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2025 Koyili Hospital. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;