import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, MessageSquare } from "lucide-react";

interface ServicePageTemplateProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  howToUse: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; slug: string }[];
}

export default function ServicePageTemplate({
  icon: IconComponent,
  title,
  tagline,
  description,
  features,
  howToUse,
  faqs,
  relatedServices
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-6 text-muted-foreground hover:text-foreground"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mx-auto mb-6 p-4 rounded-full bg-primary/10 w-fit">
            <IconComponent className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Badge variant="secondary" className="mt-1">
                        {index + 1}
                      </Badge>
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How to Use */}
            <Card>
              <CardHeader>
                <CardTitle>How to Use</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {howToUse.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQs */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-foreground">{faq.question}</h4>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Our support team is here to assist you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" variant="default">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat with Support
                </Button>
                <Button className="w-full" variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support
                </Button>
                <Button className="w-full" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
              </CardContent>
            </Card>

            {/* Related Services */}
            <Card>
              <CardHeader>
                <CardTitle>Related Services</CardTitle>
                <CardDescription>
                  Other services that might interest you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {relatedServices.map((service, index) => (
                    <a 
                      key={index}
                      href={`/services/${service.slug}`}
                      className="block p-3 rounded-md border hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <p className="font-medium">{service.title}</p>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}