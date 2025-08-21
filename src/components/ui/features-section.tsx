import { Handshake, Search, Award, Truck, DollarSign, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Easy Discovery",
      description: "Browse thousands of fresh crops with advanced filters by location, price, and harvest date."
    },
    {
      icon: Handshake,
      title: "Direct Connection",
      description: "Connect directly with verified farmers and buyers without middlemen taking cuts."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "All farmers go through verification process ensuring quality and authentic produce."
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Transparent pricing that ensures farmers get fair value for their hard work."
    },
    {
      icon: MapPin,
      title: "Local Focus",
      description: "Support local agriculture and reduce carbon footprint with nearby farmer connections."
    },
    {
      icon: Truck,
      title: "Logistics Support",
      description: "Optional delivery coordination and logistics support for seamless transactions."
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How <span className="text-primary">Agrevon</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform simplifies agricultural commerce by connecting farmers and buyers 
            through a transparent, fair, and efficient marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="crop-card group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}