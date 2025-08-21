import { Heart, ShoppingCart, MessageSquare, Star, Search, Filter, TrendingUp } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function BuyerDashboard() {
  // Mock data for dashboard
  const stats = [
    { title: "Saved Items", value: "18", icon: Heart, change: "+3", color: "text-red-500" },
    { title: "Active Inquiries", value: "7", icon: MessageSquare, change: "+2", color: "text-primary" },
    { title: "Orders This Month", value: "12", icon: ShoppingCart, change: "+4", color: "text-green-600" },
    { title: "Favorite Farmers", value: "8", icon: Star, change: "+1", color: "text-yellow-600" }
  ];

  const savedItems = [
    {
      id: 1,
      title: "Fresh Organic Tomatoes",
      farmer: "Green Valley Farm",
      price: "$4.50/lb",
      location: "California, USA",
      image: "🍅",
      available: true,
      rating: 4.8
    },
    {
      id: 2,
      title: "Premium Sweet Corn",
      farmer: "Sunrise Acres",
      price: "$3.20/dozen",
      location: "Iowa, USA",
      image: "🌽",
      available: true,
      rating: 4.9
    },
    {
      id: 3,
      title: "Fresh Strawberries",
      farmer: "Berry Best Farm",
      price: "$6.00/basket",
      location: "Florida, USA",
      image: "🍓",
      available: false,
      rating: 4.7
    }
  ];

  const recentInquiries = [
    {
      id: 1,
      farmer: "Green Valley Farm",
      product: "Organic Tomatoes",
      quantity: "100 lbs",
      status: "Responded",
      time: "1 hour ago"
    },
    {
      id: 2,
      farmer: "Sunrise Acres",
      product: "Sweet Corn",
      quantity: "50 dozen",
      status: "Pending",
      time: "3 hours ago"
    },
    {
      id: 3,
      farmer: "Earth Harvest Co",
      product: "Organic Carrots",
      quantity: "75 lbs",
      status: "Negotiating",
      time: "1 day ago"
    }
  ];

  const recommendations = [
    {
      id: 1,
      title: "Organic Bell Peppers",
      farmer: "Pepper Paradise",
      price: "$5.25/lb",
      location: "California, USA",
      image: "🫑",
      reason: "Based on your tomato purchases"
    },
    {
      id: 2,
      title: "Fresh Herbs Mix",
      farmer: "Herb Heaven",
      price: "$2.80/bunch",
      location: "Oregon, USA",
      image: "🌿",
      reason: "Popular with similar buyers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Buyer Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back, Sarah! Discover fresh produce from local farmers.</p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Search className="h-4 w-4 mr-2" />
              Browse Marketplace
            </Button>
            <Button className="btn-hero">
              <Heart className="h-4 w-4 mr-2" />
              Saved Items
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Search */}
        <Card className="mb-8 shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for crops, farmers, or locations..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button className="btn-hero">
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Saved Items */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Saved Items
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardTitle>
                <CardDescription>
                  Products you've saved for later
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savedItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="text-4xl">{item.image}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.farmer} • {item.location}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm font-medium text-primary">{item.price}</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-secondary fill-current mr-1" />
                            <span className="text-xs text-muted-foreground">{item.rating}</span>
                          </div>
                          <Badge variant={item.available ? "default" : "destructive"} className="text-xs">
                            {item.available ? "Available" : "Out of Stock"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" disabled={!item.available} className="btn-hero">
                          Contact
                        </Button>
                        <Button variant="outline" size="sm">
                          <Heart className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="mt-8 shadow-soft">
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>
                  Based on your preferences and purchase history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {recommendations.map((item) => (
                    <div key={item.id} className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-3xl">{item.image}</div>
                        <div className="flex-1">
                          <h5 className="font-medium text-foreground">{item.title}</h5>
                          <p className="text-sm text-muted-foreground">{item.farmer}</p>
                          <p className="text-sm font-medium text-primary">{item.price}</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{item.reason}</p>
                      <Button size="sm" className="w-full btn-hero">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Inquiries */}
          <div>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Recent Inquiries</CardTitle>
                <CardDescription>
                  Your communications with farmers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium text-foreground text-sm">{inquiry.farmer}</h5>
                        <span className="text-xs text-muted-foreground">{inquiry.time}</span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-1">{inquiry.product}</p>
                      <p className="text-xs text-muted-foreground mb-2">Qty: {inquiry.quantity}</p>
                      <div className="flex items-center justify-between">
                        <Badge 
                          variant={inquiry.status === "Responded" ? "default" : inquiry.status === "Pending" ? "secondary" : "outline"}
                          className="text-xs"
                        >
                          {inquiry.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6 shadow-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Search className="h-4 w-4 mr-2" />
                    Browse Marketplace
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Heart className="h-4 w-4 mr-2" />
                    Manage Saved Items
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    View All Messages
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Star className="h-4 w-4 mr-2" />
                    My Favorite Farmers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}