import React from 'react';
import { Calculator, PieChart, FileText, TrendingUp, Shield, Clock, Users, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FinanceFeatures = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Tax Management',
      description: 'Get personalized tax advice, deduction strategies, and compliance guidance for individuals and businesses.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: PieChart,
      title: 'Investment Advisory',
      description: 'Receive tailored investment recommendations, portfolio analysis, and market insights based on your goals.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: FileText,
      title: 'Accounting Support',
      description: 'Streamline your accounting processes with automated bookkeeping guidance and financial reporting.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      title: 'Financial Planning',
      description: 'Create comprehensive financial plans, budget strategies, and long-term wealth building roadmaps.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const capabilities = [
    {
      icon: Clock,
      title: 'Real-time Responses',
      description: 'Get instant answers to complex financial questions 24/7'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Communicate in English or Hindi for better understanding'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your financial data is encrypted and kept completely confidential'
    },
    {
      icon: Users,
      title: 'Expert Knowledge',
      description: 'Powered by extensive financial expertise and regulatory knowledge'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Assistance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fintrin.ai covers all aspects of personal and business finance, providing expert guidance whenever you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Capabilities Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Fintrin.ai?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with cutting-edge AI technology to provide reliable, accurate, and personalized financial guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{capability.title}</h4>
                  <p className="text-sm text-gray-600">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Available Support</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">2</div>
            <div className="text-gray-600">Languages Supported</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
            <div className="text-gray-600">Queries Handled</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceFeatures;