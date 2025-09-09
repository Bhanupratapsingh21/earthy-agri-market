import React, { useState } from 'react';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinanceNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Features', href: 'features' },
    { name: 'How it Works', href: 'how-it-works' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' }
  ];

  const scrollToChat = () => {
    const chatSection = document.getElementById('chat-interface');
    chatSection?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Account for fixed navbar
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#b3a2c7]/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b1ec2f82-0fc4-4a95-8fa2-616c6ae3c2c2.png" 
              alt="Fintrin.ai Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-800 hover:text-[#1D4ED8] transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Globe className="w-4 h-4" />
              <button className="hover:text-[#1D4ED8] transition-colors">EN</button>
              <span>|</span>
              <button className="hover:text-[#1D4ED8] transition-colors">हिं</button>
            </div>
            <Button 
              onClick={scrollToChat}
              className="rounded-full px-6"
            >
              Try AI
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-800 hover:text-[#1D4ED8] transition-colors duration-200 font-medium py-2 w-full text-left"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Button 
                  onClick={scrollToChat}
                  className="w-full rounded-full"
                >
                  Try AI
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FinanceNavbar;