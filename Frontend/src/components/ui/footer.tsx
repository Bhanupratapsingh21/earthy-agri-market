import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold">Agrevon</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Connecting farmers and buyers for fair, sustainable agriculture.
              Building stronger communities through direct trade relationships.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-primary-foreground/70 hover:text-secondary transition-colors cursor-pointer" />
              <Twitter className="h-5 w-5 text-primary-foreground/70 hover:text-secondary transition-colors cursor-pointer" />
              <Instagram className="h-5 w-5 text-primary-foreground/70 hover:text-secondary transition-colors cursor-pointer" />
              <Linkedin className="h-5 w-5 text-primary-foreground/70 hover:text-secondary transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Platform</h3>
            <ul className="space-y-3">
              <li><a href="/marketplace" className="text-primary-foreground/80 hover:text-secondary transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">How it Works</a></li>
              <li><a href="/login" className="text-primary-foreground/80 hover:text-secondary transition-colors">Farmer Dashboard</a></li>
              <li><a href="/login" className="text-primary-foreground/80 hover:text-secondary transition-colors">Buyer Dashboard</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Getting Started</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Community Forum</a></li>
              <li><a href="/support" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>

            <div className="space-y-4">
              {/* Emails */}
              <div>
                <div className="flex items-center mb-2">
                  <Mail className="h-5 w-5 text-secondary mr-3" />
                  <span className="font-medium text-primary-foreground">Email:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2 pl-8">
                  <span className="text-primary-foreground/80">agrevon@gmail.com</span>
                  <span className="text-primary-foreground/80">nuvetra@gmail.com</span>
                  <span className="text-primary-foreground/80">fintrinal@gmail.com</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-3" />
                <span className="text-primary-foreground/80">+91 9350176831</span>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mr-3 mt-1" />
                <span className="text-primary-foreground/80">
                  123 Agriculture Way<br />
                  Farm Valley, CA 94102
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Agrevon. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}