import { useState, useEffect } from "react";
import { Search, Filter, MapPin, Calendar, DollarSign, Star, Heart, Weight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cropListings, setCropListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const categories = ["All", "vegetables", "fruits", "grains", "herbs"];

  // Fetch crops from backend
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/crops`);
        console.log(res.data);
        if (res.data.success) {
          setCropListings(res.data.crops);
        }
      } catch (error) {
        console.error("Error fetching crops:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCrops();
  }, []);

  // ✅ Fixed search + category filter
  const filteredListings = cropListings.filter((listing) => {
    const matchesSearch =
      listing.cropName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.farmerId?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location?.state?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location?.district?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      listing.category?.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Fresh Produce Marketplace
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover fresh, quality crops directly from verified farmers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search crops, farmers, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "btn-hero"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        {loading ? (
          <p className="text-center text-muted-foreground">Loading crops...</p>
        ) : filteredListings.length === 0 ? (
          <p className="text-center text-muted-foreground">No crops found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <Card key={listing._id} className="crop-card overflow-hidden">
                <div className="relative">
                  <div className="h-48 bg-gradient-card flex items-center justify-center text-6xl">
                    {listing.images?.[0]?.url ? (
                      <img
                        src={listing.images[0].url}
                        alt={listing.images[0].alt || listing.cropName}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      "🌱"
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  {listing.verified && (
                    <Badge className="absolute top-2 left-2 bg-success text-success-foreground">
                      Verified
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {listing.cropName}
                    </h3>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">
                        ₹{listing.price?.basePrice}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {listing.quantity?.unit || "per unit"}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {listing.farmerId?.email} • {listing.location?.state || "Unknown"}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      Harvested:{" "}
                      {listing.harvestDate
                        ? new Date(listing.harvestDate).toLocaleDateString()
                        : "N/A"}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Weight className="h-4 w-4 mr-1" />
                      {listing.quantity?.amount} {listing.quantity?.unit}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-secondary fill-current mr-1" />
                      <span className="text-sm font-medium">
                        {listing.rating || "4.5"}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        ({listing.reviews || 0})
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {listing.category}
                    </Badge>
                  </div>

                  <Button
                    className="w-full btn-hero"
                    onClick={() => navigate(`/contact-farmer/${listing._id}`)}
                  >
                    Contact Farmer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Load More Listings
          </Button>
        </div>
      </div>
    </div>
  );
}
