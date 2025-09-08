import { Heart, ShoppingCart, MessageSquare, Star, Search, Filter, TrendingUp } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function BuyerDashboard() {

  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const user = useSelector((state: RootState) => state.user.user);
  const token = useSelector((state: RootState) => state.user.accessToken);
  const [myBids, setMyBids] = useState<any[]>([]);



  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');

      return;
    }

    fetchBids();
  }, [isAuthenticated])
  // Mock data for dashboard
  const stats = [
    { title: "Saved Items", value: "18", icon: Heart, change: "+3", color: "text-red-500" },
    { title: "Active Inquiries", value: "7", icon: MessageSquare, change: "+2", color: "text-primary" },
    { title: "Orders This Month", value: "12", icon: ShoppingCart, change: "+4", color: "text-green-600" },
    { title: "Favorite Farmers", value: "8", icon: Star, change: "+1", color: "text-yellow-600" }
  ];

  const fetchBids = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/bids/my-bids`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.data && res.data.crops) {
        setMyBids(res.data.crops);
      }
    } catch (error) {
      console.error("Error fetching my bids:", error);
    }
  };


  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Buyer Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back, {user.firstName}! Discover fresh produce from local farmers.</p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => navigate('/marketplace')}>
              <Search className="h-4 w-4 mr-2" />
              Browse Marketplace
            </Button>
            <Button className="btn-hero"
              onClick={() => navigate('/comingsoon')}>
              <Heart className="h-4 w-4 mr-2" />
              Saved Items
            </Button>
          </div>
        </div>

        {/* Quick Search */}
        <Card className="mb-8 shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for crops, farmers..."
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
                  Bids Product
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardTitle>
                <CardDescription>
                  Products you added bid
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myBids.map((item) => (
                    <div key={item.bidId} className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="text-4xl">
                        {item.crop.images && item.crop.images.length > 0 ? (
                          <img
                            src={item.crop.images[0].url}
                            alt={item.crop.images[0].alt || "Crop Image"}
                            className="h-16 w-16 rounded-md object-cover"
                          />
                        ) : (
                          "🫑"
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{item.crop.cropName}</h4>
                        <p className="text-sm text-muted-foreground">{item.crop.farmerId.firstName} </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm font-medium text-primary">${item.bidAmount}</span>
                          <Badge variant={item.crop.status === 'active' ? "default" : "destructive"} className="text-xs">
                            {item.crop.status === 'active' ? "active" : "Out of Stock"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" disabled={item.crop.status !== 'active'} className="btn-hero">
                          Contact
                        </Button>
                      </div>
                    </div>
                  ))}

                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            {/* <Card className="mt-8 shadow-soft">
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
            </Card> */}
          </div>

          {/* Recent Inquiries */}
          <div>


            {/* Quick Actions */}
            <Card className="mt-6 shadow-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => navigate('/marketplace')}>
                    <Search className="h-4 w-4 mr-2" />
                    Browse Marketplace
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