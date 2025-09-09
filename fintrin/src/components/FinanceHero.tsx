import React from 'react';
import { ArrowRight, Shield, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatInterface from './ChatInterface';

const FinanceHero = () => {
  const scrollToChat = () => {
    // Removed automatic scrolling
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-100 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Big Logo */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/b1ec2f82-0fc4-4a95-8fa2-616c6ae3c2c2.png" 
                alt="Fintrin.ai" 
                className="h-80 w-auto mx-auto lg:-ml-4 lg:mx-0"
              />
            </div>

            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4" style={{ color: '#0D1B2A' }} />
              <span className="text-sm font-medium" style={{ color: '#0D1B2A' }}>AI-Powered Financial Assistant</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Meet{' '}
              <span className="font-bold text-gray-900">Fintrin.ai</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your intelligent companion for{' '}
              <span className="font-semibold" style={{ color: '#8b7aa0' }}>finance</span>,{' '}
              <span className="font-semibold" style={{ color: '#0D1B2A' }}>accounting</span>,{' '}
              <span className="font-semibold" style={{ color: '#1D4ED8' }}>tax management</span>, and{' '}
              <span className="font-semibold" style={{ color: '#7C3AED' }}>investment advisory</span>
            </h2>

            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
              Get instant, accurate answers to your financial questions in real-time. 
              Supporting both English and Hindi for seamless communication.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-4 text-base font-semibold"
                onClick={scrollToChat}
              >
                Start Chatting
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" style={{ color: '#0D1B2A' }} />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" style={{ color: '#1D4ED8' }} />
                <span>Multilingual Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" style={{ color: '#7C3AED' }} />
                <span>Real-time Responses</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Chat Preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0D1B2A]/20 to-[#1D4ED8]/20 rounded-3xl blur-lg"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-1">
              <ChatInterface />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceHero;