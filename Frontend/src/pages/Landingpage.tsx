import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/djwzwq4cu/image/upload/v1757072380/f079a010-e3e9-4cb0-89f9-c3c71a9d3b57_1_zd4yf8.jpg')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-between px-8 md:px-16 lg:px-24">
        {/* Left Side - Welcome Text */}
        <div className="flex-1 max-w-2xl flex flex-col justify-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-green-600 mb-6 leading-tight text-left">
            Welcome
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight text-balance text-left">
            JOIN THE PLATFORM TRANSFORMING INDIAN AGRICULTURE
          </p>
          <div className="flex gap-4 justify-start items-center mb-16 mt-8">
            <Button size="lg" className="btn-hero text-lg px-8 py-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Join as Farmer
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-hero border-white text-white  text-lg px-8 py-4 flex items-center"
            >
              <Shield className="h-5 w-5 mr-2" />
              Join as Buyer
            </Button>
          </div>
        </div>

        {/* Right Side - Logo and Tagline */}
        <div className="flex-1 flex flex-col items-end text-right max-w-md">
          {/* Logo */}
          <div className="mb-4">
            <div className="flex items-center justify-end mb-2">
              {/* Leaf Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full text-green-600 fill-current">
                  {/* Stylized leaf/plant design */}
                  <path d="M50 10 C30 20, 20 40, 30 60 C40 50, 50 45, 60 50 C70 40, 80 20, 50 10 Z" />
                  <path d="M50 15 C35 25, 25 45, 35 65 C45 55, 55 50, 65 55 C75 45, 85 25, 50 15 Z" opacity="0.7" />
                  <path d="M50 20 C40 30, 30 50, 40 70 C50 60, 60 55, 70 60 C80 50, 90 30, 50 20 Z" opacity="0.4" />
                  {/* Horizontal lines representing fields */}
                  <line x1="10" y1="75" x2="90" y2="75" stroke="currentColor" strokeWidth="2" opacity="0.8" />
                  <line x1="15" y1="80" x2="85" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                  <line x1="20" y1="85" x2="80" y2="85" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                </svg>
              </div>
            </div>

            {/* Brand Name */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">AGREVON</h2>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-700 font-medium">From Field to Future</p>
          </div>
        </div>
      </div>
    </div>
  )
}
