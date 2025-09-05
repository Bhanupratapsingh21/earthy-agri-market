import { useState } from "react";
import { Search, Filter, MapPin, Calendar, DollarSign, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";

// Mock data for crop listings
const cropListings = [
  {
    id: 1,
    title: "Fresh Organic Tomatoes",
    farmer: "Green Valley Farm",
    location: "California, USA",
    price: "$4.50",
    unit: "per lb",
    rating: 4.8,
    reviews: 24,
    harvestDate: "2024-01-15",
    quantity: "500 lbs available",
    image: "🍅",
    verified: true,
    category: "Vegetables"
  },
  {
    id: 2,
    title: "Premium Sweet Corn",
    farmer: "Sunrise Acres",
    location: "Iowa, USA",
    price: "$3.20",
    unit: "per dozen",
    rating: 4.9,
    reviews: 18,
    harvestDate: "2024-01-20",
    quantity: "200 dozen available",
    image: "🌽",
    verified: true,
    category: "Vegetables"
  },
  {
    id: 3,
    title: "Fresh Strawberries",
    farmer: "Berry Best Farm",
    location: "Florida, USA",
    price: "$6.00",
    unit: "per basket",
    rating: 4.7,
    reviews: 31,
    harvestDate: "2024-01-18",
    quantity: "150 baskets available",
    image: "🍓",
    verified: true,
    category: "Fruits"
  },
  {
    id: 4,
    title: "Organic Carrots",
    farmer: "Earth Harvest Co",
    location: "Oregon, USA",
    price: "$2.80",
    unit: "per lb",
    rating: 4.6,
    reviews: 12,
    harvestDate: "2024-01-22",
    quantity: "300 lbs available",
    image: "🥕",
    verified: true,
    category: "Vegetables"
  },
  {
    id: 5,
    title: "Fresh Lettuce",
    farmer: "Green Leaf Farms",
    location: "Arizona, USA",
    price: "$1.50",
    unit: "per head",
    rating: 4.8,
    reviews: 27,
    harvestDate: "2024-01-16",
    quantity: "400 heads available",
    image: "🥬",
    verified: true,
    category: "Vegetables"
  },
  {
    id: 6,
    title: "Sweet Peaches",
    farmer: "Orchard Hills",
    location: "Georgia, USA",
    price: "$5.25",
    unit: "per lb",
    rating: 4.9,
    reviews: 19,
    harvestDate: "2024-01-14",
    quantity: "250 lbs available",
    image: "🍑",
    verified: true,
    category: "Fruits"
  }
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Vegetables", "Fruits", "Grains", "Herbs"];

  const filteredListings = cropListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || listing.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Fresh Produce Marketplace</h1>
          <p className="text-xl text-muted-foreground">Discover fresh, quality crops directly from verified farmers</p>
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
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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
                className={selectedCategory === category ? "btn-hero" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <Card key={listing.id} className="crop-card overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gradient-card flex items-center justify-center text-6xl">
                  {listing.image}
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
                  <h3 className="text-xl font-semibold text-foreground">{listing.title}</h3>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">{listing.price}</div>
                    <div className="text-sm text-muted-foreground">{listing.unit}</div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {listing.farmer} • {listing.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    Harvested: {new Date(listing.harvestDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {listing.quantity}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-secondary fill-current mr-1" />
                    <span className="text-sm font-medium">{listing.rating}</span>
                    <span className="text-sm text-muted-foreground ml-1">({listing.reviews})</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {listing.category}
                  </Badge>
                </div>

                <Button className="w-full btn-hero">
                  Contact Farmer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Load More Listings
          </Button>
        </div>
      </div>
    </div>
  );
}