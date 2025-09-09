import { Leaf, Users, Target, Award, Heart } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "Building strong relationships between farmers and buyers through trust and transparency."
    },
    {
      icon: Target,
      title: "Fair Trade",
      description: "Ensuring farmers receive fair prices for their hard work and quality produce."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Verified farmers and quality checks to guarantee the best agricultural products."
    },
    {
      icon: Heart,
      title: "Sustainable Future",
      description: "Supporting sustainable farming practices for a healthier planet."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former agricultural scientist with 15 years of experience in sustainable farming."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech entrepreneur passionate about using technology to solve agricultural challenges."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Farmer Relations",
      bio: "Third-generation farmer dedicated to empowering agricultural communities."
    },
    {
      name: "David Kim",
      role: "Head of Marketplace",
      bio: "E-commerce veteran focused on creating seamless buying experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Leaf className="h-12 w-12 text-primary" />
            <span className="text-4xl font-bold text-primary">Agrevon</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Connecting Farmers and Buyers for Fair Agriculture
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize agriculture by creating direct connections between farmers and buyers,
            ensuring fair prices, quality produce, and sustainable farming practices.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower farmers by providing them with a direct platform to sell their produce at fair prices,
                while connecting buyers with fresh, quality agricultural products. We believe in transparency,
                sustainability, and building stronger agricultural communities.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every farmer has access to fair markets, every buyer can source quality produce
                directly from farmers, and sustainable agriculture practices are the norm. We envision a transparent,
                efficient, and equitable agricultural marketplace.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="mb-16">
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Agrevon was born from a simple observation: farmers work incredibly hard to grow quality produce,
                  yet often struggle to get fair prices for their crops. Meanwhile, buyers want fresh, quality
                  products but lack direct access to the source.
                </p>
                <p>
                  Founded in 2024 by a team of agricultural experts and technology enthusiasts, Agrevon bridges
                  this gap by creating a transparent marketplace where farmers can showcase their produce and
                  connect directly with buyers.
                </p>
                <p>
                  Today, we're proud to serve thousands of farmers and buyers across the country, facilitating
                  fair trade and promoting sustainable agriculture practices. Our platform has helped farmers
                  increase their income by an average of 30% while providing buyers with access to the freshest,
                  highest-quality produce.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>


      </main>

      <Footer />
    </div>
  );
}

/*
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-soft">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-card rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-card rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Farmers Registered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Buyers Connected</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-muted-foreground">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">States Served</div>
            </div>
          </div>
        </div>
*/