"use client"

import { useState } from "react"
import { ArrowLeft, Search, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const newsData = [
  {
    id: 1,
    title: "New PM-KISAN Scheme Benefits Announced for 2024",
    description:
      "Government announces additional benefits under PM-KISAN scheme including increased financial assistance and simplified application process.",
    category: "Government Scheme",
    categoryColor: "bg-blue-500",
    date: "2024-01-20",
    readTime: "3 min read",
    scope: "National",
    crop: "All Crops",
    source: "Ministry of Agriculture",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Wheat Price Support Measures for Punjab Farmers",
    description:
      "Punjab government announces minimum support price increase and procurement centers expansion for wheat farmers.",
    category: "Price Support",
    categoryColor: "bg-green-500",
    date: "2024-01-18",
    readTime: "4 min read",
    scope: "Punjab",
    crop: "Wheat",
    source: "Punjab Agricultural Department",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Climate-Resilient Rice Varieties Research Breakthrough",
    description:
      "Scientists develop new rice varieties that can withstand extreme weather conditions while maintaining high yield.",
    category: "Research & Technology",
    categoryColor: "bg-purple-500",
    date: "2024-01-15",
    readTime: "5 min read",
    scope: "National",
    crop: "Rice",
    source: "ICAR Research Institute",
    image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "Fertilizer Subsidy Program Extended Till March 2024",
    description:
      "Central government extends fertilizer subsidy program with additional allocation of ₹50,000 crores for farmers.",
    category: "Subsidy Program",
    categoryColor: "bg-orange-500",
    date: "2024-01-12",
    readTime: "3 min read",
    scope: "National",
    crop: "All Crops",
    source: "Department of Fertilizers",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "Organic Farming Certification Made Easier in Haryana",
    description:
      "Haryana government launches digital platform for organic farming certification reducing paperwork and processing time.",
    category: "Certification",
    categoryColor: "bg-teal-500",
    date: "2024-01-10",
    readTime: "4 min read",
    scope: "Haryana",
    crop: "Organic",
    source: "Haryana Agriculture Board",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    title: "Cotton Farmers Get Insurance Coverage Boost",
    description:
      "Enhanced crop insurance coverage announced for cotton farmers with premium support and faster claim settlement.",
    category: "Insurance",
    categoryColor: "bg-indigo-500",
    date: "2024-01-08",
    readTime: "3 min read",
    scope: "Gujarat",
    crop: "Cotton",
    source: "Agricultural Insurance Company",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=250&fit=crop",
  },
  {
    id: 7,
    title: "Solar Pump Subsidy Scheme Launched in Rajasthan",
    description:
      "Rajasthan launches comprehensive solar pump subsidy scheme offering up to 90% subsidy for small and marginal farmers.",
    category: "Energy Scheme",
    categoryColor: "bg-yellow-500",
    date: "2024-01-05",
    readTime: "4 min read",
    scope: "Rajasthan",
    crop: "All Crops",
    source: "Rajasthan Renewable Energy Corporation",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop",
  },
  {
    id: 8,
    title: "Drip Irrigation Technology Adoption Incentives",
    description:
      "New incentive program launched to promote drip irrigation technology adoption with 75% cost subsidy for farmers.",
    category: "Water Management",
    categoryColor: "bg-cyan-500",
    date: "2024-01-03",
    readTime: "5 min read",
    scope: "National",
    crop: "All Crops",
    source: "Ministry of Water Resources",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=250&fit=crop",
  },
  {
    id: 9,
    title: "Sugarcane Price Hike Announced for UP Farmers",
    description:
      "Uttar Pradesh government announces significant price increase for sugarcane procurement benefiting over 45 lakh farmers.",
    category: "Price Support",
    categoryColor: "bg-green-500",
    date: "2024-01-01",
    readTime: "3 min read",
    scope: "Uttar Pradesh",
    crop: "Sugarcane",
    source: "UP Cane Development Department",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=250&fit=crop",
  },
  {
    id: 10,
    title: "Digital Agriculture Platform Launched Nationwide",
    description:
      "Government launches comprehensive digital platform connecting farmers with markets, weather data, and expert advice.",
    category: "Digital Initiative",
    categoryColor: "bg-pink-500",
    date: "2023-12-28",
    readTime: "6 min read",
    scope: "National",
    crop: "All Crops",
    source: "Ministry of Electronics & IT",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
  },
  {
    id: 11,
    title: "Millet Production Incentive Program 2024",
    description:
      "Special incentive program launched to promote millet cultivation with bonus payments and guaranteed procurement.",
    category: "Crop Promotion",
    categoryColor: "bg-amber-500",
    date: "2023-12-25",
    readTime: "4 min read",
    scope: "National",
    crop: "Millets",
    source: "National Food Security Mission",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop",
  },
  {
    id: 12,
    title: "Livestock Insurance Scheme Expansion",
    description:
      "Livestock insurance scheme expanded to cover more animals with reduced premium rates and simplified claim process.",
    category: "Insurance",
    categoryColor: "bg-indigo-500",
    date: "2023-12-22",
    readTime: "3 min read",
    scope: "National",
    crop: "Livestock",
    source: "Department of Animal Husbandry",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=250&fit=crop",
  },
  {
    id: 13,
    title: "Horticulture Mission Gets Budget Boost",
    description:
      "National Horticulture Mission receives additional funding of ₹2,000 crores for infrastructure development and farmer support.",
    category: "Budget Allocation",
    categoryColor: "bg-emerald-500",
    date: "2023-12-20",
    readTime: "4 min read",
    scope: "National",
    crop: "Fruits & Vegetables",
    source: "Ministry of Agriculture",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
  },
  {
    id: 14,
    title: "Soil Health Card Distribution Accelerated",
    description:
      "Government accelerates soil health card distribution with target to cover remaining 2 crore farmers by March 2024.",
    category: "Soil Management",
    categoryColor: "bg-stone-500",
    date: "2023-12-18",
    readTime: "3 min read",
    scope: "National",
    crop: "All Crops",
    source: "Soil Health Management Division",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
  },
  {
    id: 15,
    title: "Fisheries Development Fund Launched",
    description:
      "New fisheries development fund of ₹20,000 crores launched to boost fish production and create employment.",
    category: "Fisheries",
    categoryColor: "bg-blue-600",
    date: "2023-12-15",
    readTime: "5 min read",
    scope: "National",
    crop: "Fisheries",
    source: "Department of Fisheries",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
  },
  {
    id: 16,
    title: "Beekeeping Promotion Scheme Extended",
    description:
      "National Beekeeping & Honey Mission extended with additional support for equipment and training programs.",
    category: "Allied Agriculture",
    categoryColor: "bg-yellow-600",
    date: "2023-12-12",
    readTime: "3 min read",
    scope: "National",
    crop: "Honey",
    source: "National Bee Board",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=250&fit=crop",
  },
  {
    id: 17,
    title: "Mushroom Cultivation Training Centers Opened",
    description:
      "50 new mushroom cultivation training centers opened across the country to promote alternative farming practices.",
    category: "Training Program",
    categoryColor: "bg-gray-500",
    date: "2023-12-10",
    readTime: "4 min read",
    scope: "National",
    crop: "Mushroom",
    source: "Agricultural Training Institute",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=250&fit=crop",
  },
  {
    id: 18,
    title: "Bamboo Mission Gets Technology Upgrade",
    description:
      "National Bamboo Mission introduces modern processing technology and market linkage support for bamboo farmers.",
    category: "Technology Upgrade",
    categoryColor: "bg-green-600",
    date: "2023-12-08",
    readTime: "4 min read",
    scope: "National",
    crop: "Bamboo",
    source: "National Bamboo Mission",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
  },
  {
    id: 19,
    title: "Spice Board Launches Export Promotion Drive",
    description:
      "Spice Board of India launches comprehensive export promotion drive with quality certification and market development support.",
    category: "Export Promotion",
    categoryColor: "bg-red-500",
    date: "2023-12-05",
    readTime: "5 min read",
    scope: "National",
    crop: "Spices",
    source: "Spice Board of India",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=250&fit=crop",
  },
  {
    id: 20,
    title: "Tea Garden Workers Welfare Scheme Enhanced",
    description:
      "Enhanced welfare scheme for tea garden workers includes housing, healthcare, and education support with increased budget allocation.",
    category: "Worker Welfare",
    categoryColor: "bg-green-700",
    date: "2023-12-03",
    readTime: "4 min read",
    scope: "Assam, West Bengal",
    crop: "Tea",
    source: "Tea Board of India",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
  },
  {
    id: 21,
    title: "Rubber Plantation Modernization Program",
    description:
      "Comprehensive modernization program for rubber plantations with new clones, processing equipment, and technical support.",
    category: "Modernization",
    categoryColor: "bg-slate-500",
    date: "2023-12-01",
    readTime: "4 min read",
    scope: "Kerala, Karnataka",
    crop: "Rubber",
    source: "Rubber Board",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
  },
  {
    id: 22,
    title: "Coconut Development Board Launches New Initiatives",
    description:
      "New initiatives for coconut farmers including value addition support, market linkage, and technology transfer programs.",
    category: "Development Program",
    categoryColor: "bg-brown-500",
    date: "2023-11-28",
    readTime: "3 min read",
    scope: "Southern States",
    crop: "Coconut",
    source: "Coconut Development Board",
    image: "https://images.unsplash.com/photo-1447279506476-3faec8071eee?w=400&h=250&fit=crop",
  },
  {
    id: 23,
    title: "Cashew Processing Units Get Financial Support",
    description:
      "Financial support announced for setting up modern cashew processing units with subsidized loans and technical assistance.",
    category: "Processing Support",
    categoryColor: "bg-orange-600",
    date: "2023-11-25",
    readTime: "4 min read",
    scope: "Goa, Karnataka, Kerala",
    crop: "Cashew",
    source: "Cashew Export Promotion Council",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=250&fit=crop",
  },
  {
    id: 24,
    title: "Floriculture Mission Expands to New States",
    description:
      "National Floriculture Mission expands to 5 new states with focus on export-oriented flower cultivation and cold chain development.",
    category: "Mission Expansion",
    categoryColor: "bg-pink-600",
    date: "2023-11-22",
    readTime: "5 min read",
    scope: "Multi-State",
    crop: "Flowers",
    source: "National Horticulture Board",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=250&fit=crop",
  },
  {
    id: 25,
    title: "Medicinal Plants Cultivation Incentive Scheme",
    description:
      "New incentive scheme for medicinal plants cultivation with buyback guarantee and processing unit establishment support.",
    category: "Incentive Scheme",
    categoryColor: "bg-purple-600",
    date: "2023-11-20",
    readTime: "4 min read",
    scope: "National",
    crop: "Medicinal Plants",
    source: "National Medicinal Plants Board",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=250&fit=crop",
  },
]

const states = [
  "All",
  "National",
  "Punjab",
  "Haryana",
  "Uttar Pradesh",
  "Gujarat",
  "Rajasthan",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Andhra Pradesh",
  "Telangana",
  "West Bengal",
  "Bihar",
  "Odisha",
  "Madhya Pradesh",
  "Chhattisgarh",
  "Jharkhand",
  "Assam",
  "Kerala",
  "Goa",
]

const crops = [
  "All",
  "All Crops",
  "Wheat",
  "Rice",
  "Cotton",
  "Sugarcane",
  "Millets",
  "Fruits & Vegetables",
  "Spices",
  "Tea",
  "Coffee",
  "Rubber",
  "Coconut",
  "Cashew",
  "Flowers",
  "Medicinal Plants",
  "Organic",
  "Livestock",
  "Fisheries",
  "Honey",
  "Mushroom",
  "Bamboo",
]

export default function AgriNewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("All")
  const [selectedCrop, setSelectedCrop] = useState("All")

  const filteredNews = newsData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === "All" || item.scope.includes(selectedState)
    const matchesCrop = selectedCrop === "All" || item.crop === selectedCrop

    return matchesSearch && matchesState && matchesCrop
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5" />
          <h1 className="text-xl font-semibold">Agri News & Government Schemes</h1>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search news and schemes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
          <div className="flex gap-4">
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="w-40 bg-white">
                <SelectValue placeholder="State: All" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedCrop} onValueChange={setSelectedCrop}>
              <SelectTrigger className="w-40 bg-white">
                <SelectValue placeholder="Crop: All" />
              </SelectTrigger>
              <SelectContent>
                {crops.map((crop) => (
                  <SelectItem key={crop} value={crop}>
                    {crop}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <Card key={item.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-3 left-3">
                  <span className={`${item.categoryColor} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                  <span>{item.scope}</span>
                  <span>{item.crop}</span>
                </div>

                <div className="text-xs text-gray-500 mb-3">Source: {item.source}</div>

                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read More
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No news or schemes found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
