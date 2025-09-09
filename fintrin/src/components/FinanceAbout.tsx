import React from 'react';
import { Shield, Users, Award, Globe, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FinanceAbout = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Your financial data is protected with enterprise-grade security and privacy measures.'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Designed with simplicity and accessibility in mind, making finance understandable for everyone.'
    },
    {
      icon: Award,
      title: 'Expert Knowledge',
      description: 'Built on comprehensive financial expertise and up-to-date regulatory knowledge.'
    },
    {
      icon: Globe,
      title: 'Inclusive',
      description: 'Supporting multiple languages to serve diverse communities and backgrounds.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Queries Answered', icon: Target },
    { number: '99.9%', label: 'Accuracy Rate', icon: Award },
    { number: '24/7', label: 'Availability', icon: Shield },
    { number: '2', label: 'Languages', icon: Globe }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Fintrin.ai
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering individuals and businesses with intelligent financial guidance through cutting-edge AI technology.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To democratize financial expertise by making professional-grade financial guidance accessible to everyone, 
              regardless of their background or financial literacy level. We believe that smart financial decisions 
              shouldn't be limited to those who can afford expensive advisors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through our AI-powered platform, we're breaking down language barriers and complex financial jargon 
              to create a world where anyone can make informed financial decisions with confidence.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
};

export default FinanceAbout;