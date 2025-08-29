import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Bot, 
  QrCode, 
  Calculator, 
  FileCheck, 
  Warehouse, 
  Truck, 
  Sprout, 
  Wrench, 
  TrendingUp, 
  Newspaper, 
  CreditCard, 
  HeadphonesIcon 
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Commodity Trade",
    description: "Buy and sell crops directly with farmers and buyers",
  },
  {
    icon: Bot,
    title: "Krishi Sahayak AI",
    description: "Chat-based farming advisor for expert guidance",
  },
  {
    icon: QrCode,
    title: "NUVETRA",
    description: "Blockchain Crop Identity (QR) for traceability",
  },
  {
    icon: Calculator,
    title: "Fintrin",
    description: "Finance AI & Tracker for agricultural finances",
  },
  {
    icon: FileCheck,
    title: "Test & Certification",
    description: "Book quality testing for your agricultural produce",
  },
  {
    icon: Warehouse,
    title: "Storage & Cold Storage",
    description: "Find storage facilities for your crops",
  },
  {
    icon: Truck,
    title: "Transport Calculator",
    description: "Calculate transport costs for efficient logistics",
  },
  {
    icon: Sprout,
    title: "Seeds & Fertilizer Store",
    description: "Agricultural supplies for optimal crop growth",
  },
  {
    icon: Wrench,
    title: "Tools & Machinery",
    description: "Access farming equipment and modern tools",
  },
  {
    icon: TrendingUp,
    title: "Mandi Bhav",
    description: "Live market rates and price analytics",
  },
  {
    icon: Newspaper,
    title: "Agri News & Schemes",
    description: "Latest updates on agriculture and government schemes",
  },
  {
    icon: CreditCard,
    title: "KCC & Agriculture Loans",
    description: "Financial assistance and loan services",
  },
  {
    icon: HeadphonesIcon,
    title: "AgriCare Support",
    description: "Get help and support for all your needs",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive agricultural solutions designed to empower farmers and buyers 
            with modern technology, fair trade practices, and expert support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Agricultural Journey?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers and buyers who trust Agrevon for their agricultural needs. 
              Start exploring our services today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/signup" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-primary font-medium hover:bg-white/90 transition-colors"
              >
                Get Started Today
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-md border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}