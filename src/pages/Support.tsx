import { useState } from "react";
import { ChevronDown, ChevronUp, Search, Phone, Mail, MessageSquare, Users } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function Support() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create an account on Agrevon?",
          answer: "Simply click on 'Sign Up' and choose whether you're a farmer or buyer. Fill in your details, verify your email, and you're ready to start using the platform."
        },
        {
          question: "Is Agrevon free to use?",
          answer: "Basic registration and browsing are free. We charge a small commission only when successful transactions are completed through our platform."
        },
        {
          question: "What types of produce can I find on Agrevon?",
          answer: "You can find a wide variety of fresh produce including vegetables, fruits, grains, herbs, and specialty crops from verified farmers across the country."
        }
      ]
    },
    {
      category: "For Farmers",
      questions: [
        {
          question: "How do I list my produce for sale?",
          answer: "After creating your farmer account, go to 'Create Listing' in your dashboard. Add photos, description, quantity, price, and harvest date. Your listing will be live after verification."
        },
        {
          question: "How do I get verified as a farmer?",
          answer: "Upload your farm documentation, certifications, and photos in your profile. Our team reviews applications within 24-48 hours and awards verification badges."
        },
        {
          question: "When do I receive payment?",
          answer: "Payments are processed within 3-5 business days after the buyer confirms receipt of the produce and completes the transaction."
        },
        {
          question: "Can I set minimum order quantities?",
          answer: "Yes, you can set minimum order quantities for each listing to ensure orders are economically viable for your farming operation."
        }
      ]
    },
    {
      category: "For Buyers",
      questions: [
        {
          question: "How do I contact farmers about their produce?",
          answer: "Click on any listing and use the 'Contact Farmer' button to send an inquiry with your requirements. Farmers will respond directly to discuss availability and arrangements."
        },
        {
          question: "Are the farmers on Agrevon verified?",
          answer: "Yes, we have a comprehensive verification process. Look for the 'Verified' badge on farmer profiles to ensure you're dealing with legitimate agricultural producers."
        },
        {
          question: "Can I request specific harvest dates?",
          answer: "Absolutely! When contacting farmers, you can discuss your timing requirements. Many farmers can accommodate specific harvest windows for bulk orders."
        },
        {
          question: "What payment methods are accepted?",
          answer: "We accept major credit cards, bank transfers, and business checks. Payment methods may vary by farmer, and this information is displayed in each listing."
        }
      ]
    },
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How is shipping handled?",
          answer: "Shipping arrangements are made directly between farmers and buyers. Many farmers offer local delivery, while others work with shipping partners for longer distances."
        },
        {
          question: "What if my produce arrives damaged?",
          answer: "Contact our support team immediately with photos. We have policies in place to protect both farmers and buyers, and we'll work to resolve any quality issues."
        },
        {
          question: "Can I track my order?",
          answer: "Yes, once shipping arrangements are made, farmers will provide tracking information when available. You'll receive updates through our platform."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "I'm having trouble uploading photos",
          answer: "Ensure your images are in JPG or PNG format and under 5MB each. Clear your browser cache and try again. Contact support if issues persist."
        },
        {
          question: "How do I update my profile information?",
          answer: "Go to your dashboard and click on 'Profile Settings'. You can update your contact information, address, and verification documents there."
        },
        {
          question: "I forgot my password. How do I reset it?",
          answer: "Click 'Forgot Password' on the login page and enter your email. You'll receive a reset link within a few minutes."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Support & FAQ</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions or get help from our support team
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center shadow-soft hover:shadow-elegant transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Live Chat</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get instant help from our support team
              </p>
              <Button className="btn-hero">Start Chat</Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-elegant transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Send us an email and we'll respond within 24 hours
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-elegant transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Call us Mon-Fri, 9AM-6PM EST
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                (555) 123-4567
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          
          {filteredFaqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  {category.category}
                </h3>
                
                <div className="space-y-3">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <Collapsible key={questionIndex} open={isOpen} onOpenChange={() => toggleItem(globalIndex)}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                          <span className="font-medium text-foreground">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                          {faq.answer}
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Need Help */}
        <Card className="mt-12 bg-gradient-card shadow-soft">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Still Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help you succeed on Agrevon.
            </p>
            <Button className="btn-hero">Contact Support</Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}