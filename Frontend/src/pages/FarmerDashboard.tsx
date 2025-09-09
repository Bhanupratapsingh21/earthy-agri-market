import { BarChart3, Package, MessageSquare, DollarSign, Plus, Eye, Star, TrendingUp, ArrowRight, Edit, Calendar, MapPin, Users, ShoppingCart, Menu, X } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function FarmerDashboard() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const [recentProducts, setRecentProducts] = useState<any[]>([]);
  const [isMobile, setIsMobile] = useState(false);



  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    fetchFarmerCrops();

    // Check screen size
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isAuthenticated]);

  const activeProductsCount = recentProducts.filter(
    (product) => product.status?.toLowerCase() === "active"
  ).length;

  const stats = [
    {
      title: "Active Listings",
      value: activeProductsCount,
      icon: Package,
      change: "+2",
      color: "text-green-600",
      bgColor: "bg-green-100",
      trend: "positive"
    },
  ];

  const fetchFarmerCrops = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/crops/farmer/${user.id}?page=1&limit=10`);
      if (res.data) {
        setRecentProducts(res.data.data.crops);
      }
    } catch (error) {
      console.error("Error fetching farmer crops:", error);
    }
  }

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800 border-green-200";
      case "sold": return "bg-blue-100 text-blue-800 border-blue-200";
      case "pending": return "bg-amber-100 text-amber-800 border-amber-200";
      case "expired": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  }



  const handleDeleteCrop = async (cropId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this crop? This action cannot be undone.");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_BASE_URL}/crops/${cropId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setRecentProducts(prev => prev.filter(crop => crop._id !== cropId));

      toast.error("Crop deleted successfully!");


    } catch (error: any) {
      console.error("Error deleting crop:", error);
      toast.error(
        `Failed to delete crop: ${error.response?.data?.message || error.message}`
      );

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/80 to-amber-50/80 backdrop-blur-sm">
      <Navigation />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8">
          <div className="space-y-1 md:space-y-2 mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
              Farm Dashboard
            </h1>
            <p className="text-green-700/90 text-sm sm:text-base md:text-lg">
              Welcome back, {user.firstName}! 🌱 Your farm overview
            </p>
          </div>
          <Button
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
            onClick={() => navigate("/add/crops")}
          >
            <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
            Add New Crop
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 md:mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg rounded-xl sm:rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-xs sm:text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-xs sm:text-sm flex items-center ${stat.trend === "positive" ? "text-green-600" : "text-red-600"}`}>
                      <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${stat.bgColor} rounded-full flex items-center justify-center shadow-inner`}>
                    <stat.icon className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Recent Listings - Main Content */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl rounded-2xl md:rounded-3xl overflow-hidden bg-white/90 backdrop-blur-sm border border-white/20">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 md:py-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="p-1 md:p-2 bg-white/20 rounded-lg">
                      <Package className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl md:text-2xl">Your Recent Products</CardTitle>
                      <CardDescription className="text-green-100/90 text-sm md:text-base">
                        Manage your active produce listings
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm text-xs md:text-sm">
                    View All
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-4 md:space-y-6">
                  {recentProducts.map((product) => (
                    <div
                      key={product._id}
                      className="group flex flex-col sm:flex-row items-start sm:items-center p-4 md:p-6 border border-green-100/50 rounded-xl md:rounded-2xl bg-white hover:shadow-lg md:hover:shadow-xl transition-all duration-300 hover:border-green-300/50 backdrop-blur-sm gap-4 sm:gap-6"
                    >
                      {/* Image Section */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 relative">
                        <div className="w-full h-full rounded-lg md:rounded-xl overflow-hidden border-2 border-green-100/50 group-hover:border-green-300/70 transition-colors">
                          <img
                            src={product.images?.[0]?.url || "/placeholder.svg"}
                            alt={product.cropName}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)}`}>
                          {String(product.status)}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0 space-y-2 md:space-y-3">
                        <h4 className="font-bold text-gray-900 text-lg md:text-xl group-hover:text-green-800 transition-colors">
                          {product.cropName}
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs md:text-sm text-gray-600 bg-gray-100/80 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-gray-200">
                            {product.quantity?.amount} {product.quantity?.unit}
                          </span>
                          <span className="text-sm md:text-lg font-bold text-green-700 bg-green-100/50 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-green-200">
                            ₹{product.price?.basePrice}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 text-xs md:text-sm text-gray-500">
                          {product.harvestDate && (
                            <div className="flex items-center bg-amber-50/80 px-2 py-1 rounded-lg text-amber-700">
                              <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                              {new Date(product.harvestDate).toLocaleDateString()}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto sm:space-y-2 ml-0 sm:ml-4 md:ml-6">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-green-700 border-green-300 hover:bg-green-50 hover:text-green-800 hover:border-green-400 transition-all text-xs md:text-sm flex-1 sm:flex-none"
                          onClick={() => handleDeleteCrop(product._id)}
                        >
                          <Edit className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                          Edit
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-green-700 hover:bg-green-50/50 transition-all text-xs md:text-sm flex-1 sm:flex-none"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}

                  {recentProducts.length === 0 && (
                    <div className="text-center py-8 md:py-12 lg:py-16">
                      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-green-100/50 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                        <Package className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-600/70" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">No products yet</h3>
                      <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                        Start by adding your first crop listing to get started
                      </p>
                      <Button
                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 md:px-8 md:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
                        onClick={() => navigate("/add/crops")}
                      >
                        <Plus className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                        Add Your First Product
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats & Actions Sidebar */}
          <div className="space-y-4 md:space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-lg md:shadow-xl rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden bg-white/90 backdrop-blur-sm border border-white/20">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3 md:py-4 lg:py-5">
                <CardTitle className="text-white text-base md:text-lg flex items-center">
                  <Star className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  <Button
                    variant="outline"
                    className="justify-start h-12 md:h-14 text-blue-700 border-blue-200 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300 rounded-lg md:rounded-xl transition-all text-sm md:text-base"
                    onClick={() => navigate("/add/crops")}
                  >
                    <Plus className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                    <span className="text-sm font-medium">Add New Product</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start h-12 md:h-14 text-green-700 border-green-200 hover:bg-green-50 hover:text-green-800 hover:border-green-300 rounded-lg md:rounded-xl transition-all text-sm md:text-base"
                  >
                    <Package className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                    <span className="text-sm font-medium">Manage Inventory</span>
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