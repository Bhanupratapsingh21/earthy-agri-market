import { BarChart3, Package, MessageSquare, DollarSign, Plus, Eye, Star, TrendingUp } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FarmerDashboard() {
  // Mock data for dashboard
  const stats = [
    { title: "Active Listings", value: "12", icon: Package, change: "+2", color: "text-primary" },
    { title: "Total Inquiries", value: "48", icon: MessageSquare, change: "+8", color: "text-secondary" },
    { title: "This Month Revenue", value: "$3,240", icon: DollarSign, change: "+15%", color: "text-green-600" },
    { title: "Avg. Rating", value: "4.8", icon: Star, change: "+0.2", color: "text-yellow-600" }
  ];

  const recentListings = [
    {
      id: 1,
      title: "Fresh Organic Tomatoes",
      quantity: "500 lbs",
      price: "$4.50/lb",
      status: "Active",
      inquiries: 8,
      views: 124
    },
    {
      id: 2,
      title: "Sweet Corn",
      quantity: "200 dozen",
      price: "$3.20/dozen",
      status: "Active",
      inquiries: 5,
      views: 89
    },
    {
      id: 3,
      title: "Organic Carrots",
      quantity: "300 lbs",
      price: "$2.80/lb",
      status: "Low Stock",
      inquiries: 3,
      views: 67
    }
  ];

  const recentInquiries = [
    {
      id: 1,
      buyer: "Fresh Market Co.",
      product: "Organic Tomatoes",
      quantity: "100 lbs",
      message: "Interested in weekly deliveries...",
      time: "2 hours ago"
    },
    {
      id: 2,
      buyer: "Green Grocers",
      product: "Sweet Corn",
      quantity: "50 dozen",
      message: "Need for weekend farmers market...",
      time: "4 hours ago"
    },
    {
      id: 3,
      buyer: "Local Restaurant",
      product: "Organic Carrots",
      quantity: "25 lbs",
      message: "Looking for consistent supply...",
      time: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Farmer Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back, John! Here's your farm overview.</p>
          </div>
          <Button className="btn-hero mt-4 sm:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Create New Listing
          </Button>
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Listings */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Listings
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardTitle>
                <CardDescription>
                  Manage your active produce listings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentListings.map((listing) => (
                    <div key={listing.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{listing.title}</h4>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-muted-foreground">{listing.quantity}</span>
                          <span className="text-sm font-medium text-primary">{listing.price}</span>
                          <Badge 
                            variant={listing.status === "Active" ? "default" : "destructive"}
                            className="text-xs"
                          >
                            {listing.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {listing.views}
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {listing.inquiries}
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
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
                  New messages from buyers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium text-foreground text-sm">{inquiry.buyer}</h5>
                        <span className="text-xs text-muted-foreground">{inquiry.time}</span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-1">{inquiry.product}</p>
                      <p className="text-xs text-muted-foreground mb-2">Qty: {inquiry.quantity}</p>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{inquiry.message}</p>
                      <Button size="sm" className="w-full btn-hero">
                        Respond
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 shadow-soft">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks to manage your farm business
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Plus className="h-5 w-5 mb-2" />
                <span className="text-sm">New Listing</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Package className="h-5 w-5 mb-2" />
                <span className="text-sm">My Listings</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <MessageSquare className="h-5 w-5 mb-2" />
                <span className="text-sm">Messages</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <BarChart3 className="h-5 w-5 mb-2" />
                <span className="text-sm">Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}