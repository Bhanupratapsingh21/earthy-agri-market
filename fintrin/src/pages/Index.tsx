
import React, { useEffect } from "react";
import FinanceNavbar from "@/components/FinanceNavbar";
import FinanceHero from "@/components/FinanceHero";
import FinanceFeatures from "@/components/FinanceFeatures";
import ChatInterface from "@/components/ChatInterface";
import HowItWorks from "@/components/HowItWorks";
import FinanceAbout from "@/components/FinanceAbout";
import FinanceFooter from "@/components/FinanceFooter";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);


  return (
    <div className="min-h-screen">
      <FinanceNavbar />
      <main id="home">
        <FinanceHero />
        <section id="features">
          <FinanceFeatures />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="chat-interface" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Try
                </h2>
                <img 
                  src="/lovable-uploads/b1ec2f82-0fc4-4a95-8fa2-616c6ae3c2c2.png" 
                  alt="Fintrin.ai" 
                  className="h-14 w-auto"
                />
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Now
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Start your conversation with our AI financial assistant. Ask any question about finance, taxes, investments, or accounting.
              </p>
            </div>
            <ChatInterface />
          </div>
        </section>
        <section id="about">
          <FinanceAbout />
        </section>
        <section id="contact">
          <FinanceFooter />
        </section>
      </main>
    </div>
  );
};

export default Index;
