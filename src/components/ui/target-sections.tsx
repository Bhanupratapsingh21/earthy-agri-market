import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tractor, ShoppingBasket, TrendingUp, Users, CheckCircle, Globe } from "lucide-react";

export function TargetSections() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* For Farmers Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="flex items-center mb-6">
                <Tractor className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-4xl font-bold text-foreground">For Farmers</h2>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Sell Your Crops Directly to Buyers
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Skip the middlemen and connect directly with buyers who value quality produce. 
                Set your own prices, manage your listings, and grow your agricultural business.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span className="text-foreground">List your produce with photos and details</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span className="text-foreground">Connect with verified, serious buyers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span className="text-foreground">Get fair prices for your hard work</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span className="text-foreground">Track inquiries and manage orders</span>
                </div>
              </div>
              
              <Button size="lg" className="btn-hero">
                <Tractor className="h-5 w-5 mr-2" />
                Start Selling Today
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="crop-card">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Higher Profits</h4>
                  <p className="text-muted-foreground text-sm">Earn 20-40% more by selling directly</p>
                </CardContent>
              </Card>
              <Card className="crop-card">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Direct Relationships</h4>
                  <p className="text-muted-foreground text-sm">Build lasting buyer partnerships</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* For Buyers Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="crop-card">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Quality Assured</h4>
                  <p className="text-muted-foreground text-sm">Verified farmers and fresh produce</p>
                </CardContent>
              </Card>
              <Card className="crop-card">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Local & Fresh</h4>
                  <p className="text-muted-foreground text-sm">Support local agriculture</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2 fade-in">
              <div className="flex items-center mb-6">
                <ShoppingBasket className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-4xl font-bold text-foreground">For Buyers</h2>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Source Fresh Produce Directly from Farms
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Access fresh, high-quality produce directly from verified farmers. 
                Browse by location, season, and crop type to find exactly what you need.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span className="text-foreground">Browse thousands of fresh listings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span className="text-foreground">Contact farmers directly for best prices</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span className="text-foreground">Support local farming communities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span className="text-foreground">Get verified quality and freshness</span>
                </div>
              </div>
              
              <Button size="lg" className="btn-secondary">
                <ShoppingBasket className="h-5 w-5 mr-2" />
                Start Buying Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}