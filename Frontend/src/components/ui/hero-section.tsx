import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-agrevon.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh crops and farmers in agricultural field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary-light/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Connecting Farmers
            <span className="block text-secondary">and Buyers</span>
            <span className="block text-white">for Fair Agriculture</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the modern marketplace where farmers get fair prices and buyers access fresh, 
            quality produce directly from verified local growers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="btn-hero text-lg px-8 py-4">
              <Users className="h-5 w-5 mr-2" />
              Join as Farmer
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Shield className="h-5 w-5 mr-2" />
              Join as Buyer
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-hover bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-secondary mb-2">5,000+</div>
              <div className="text-white/90">Active Farmers</div>
            </div>
            <div className="card-hover bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-secondary mb-2">10,000+</div>
              <div className="text-white/90">Fresh Listings</div>
            </div>
            <div className="card-hover bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-secondary mb-2">98%</div>
              <div className="text-white/90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <TrendingUp className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  );
}