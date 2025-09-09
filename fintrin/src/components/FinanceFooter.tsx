import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, Globe, Shield, Heart } from 'lucide-react';

const FinanceFooter = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'About', href: '#about' }
  ];

  const services = [
    { name: 'Tax Advisory', href: '#tax-advisory' },
    { name: 'Investment Planning', href: '#investment' },
    { name: 'Accounting Support', href: '#accounting' },
    { name: 'Financial Planning', href: '#planning' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Disclaimer', href: '#disclaimer' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/b1ec2f82-0fc4-4a95-8fa2-616c6ae3c2c2.png" 
                alt="Fintrin.ai" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your intelligent financial companion providing expert guidance in finance, accounting, 
              tax management, and investment advisory.
            </p>
            
            {/* Language Support */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Globe className="w-4 h-4" />
              <span>Available in English & Hindi</span>
            </div>
            
            {/* Security Badge */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <span>Secure & Private</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact & Legal</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">fintrinai@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9416927795</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">India</span>
              </div>
            </div>

            {/* Legal Links */}
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Fintrin.ai. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for better financial decisions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            <strong>Disclaimer:</strong> Fintrin.ai provides general financial information and guidance. 
            This should not be considered as personalized financial advice. Always consult with qualified 
            financial advisors for important financial decisions. We are not responsible for any financial 
            losses based on the information provided.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FinanceFooter;