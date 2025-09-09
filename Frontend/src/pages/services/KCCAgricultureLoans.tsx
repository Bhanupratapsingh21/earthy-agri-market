"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Search,
  Filter,
  CreditCard,
  GraduationCap,
  Users,
  Building,
  Heart,
  Briefcase,
  Shield,
  Banknote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function LoansSchemesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedState, setSelectedState] = useState("all")

  const schemes = [
    {
      id: 1,
      title: "Credit Enhancement Guarantee Scheme For The Scheduled Castes",
      description:
        "Loan scheme for SC entrepreneurs to take up new ventures with guarantee cover from ₹0.15 crore to ₹5.00 crore",
      category: "Business & Entrepreneurship",
      eligibility: "SC individuals, proprietorship firms, registered companies with 51% SC shareholding",
      amount: "₹0.15 - ₹5.00 crore",
      state: "National",
      ministry: "Ministry of Social Justice and Empowerment",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
      tags: ["SC", "Guarantee", "Business"],
    },
    {
      id: 2,
      title: "Dairy Farming Scheme (HSFDC)",
      description: "50% subsidy on dairy farming projects for BPL families with veterinary guidance and training",
      category: "Agriculture & Farming",
      eligibility: "Haryana residents from SC BPL families, age 18-55, annual income ≤ ₹1,80,000",
      amount: "50% subsidy, max ₹10,000",
      state: "Haryana",
      ministry: "Haryana Scheduled Castes Finance and Development Corporation",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=200&fit=crop",
      tags: ["Dairy", "BPL", "Subsidy"],
    },
    {
      id: 3,
      title: "Amended Technology Upgradation Fund (ATUF)",
      description: "Capital investment subsidy for modernization and technology upgradation of textile industry",
      category: "Industry & Manufacturing",
      eligibility: "Companies registered under Companies Act with textile production line",
      amount: "Varies by segment",
      state: "National",
      ministry: "Ministry of Textiles",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
      tags: ["Textile", "Technology", "Modernization"],
    },
    {
      id: 4,
      title: "Assistance for Purchase of House (HBOCWWB)",
      description: "Interest-free loan for registered construction workers to purchase or construct a house",
      category: "Housing & Infrastructure",
      eligibility: "Registered construction workers with 5+ years membership, 8+ years before age 60",
      amount: "Interest-free loan",
      state: "Haryana",
      ministry: "Haryana Building & Other Construction Workers Welfare Board",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop",
      tags: ["Housing", "Construction Workers", "Interest-free"],
    },
    {
      id: 5,
      title: "Atal Beemit Vyakti Kalyan Yojana (ABVKY)",
      description: "Cash compensation for unemployment relief - 50% of average daily earnings for max 90 days",
      category: "Social Security & Insurance",
      eligibility: "ESIC insured persons with 2+ years employment, 78+ days contribution",
      amount: "50% of daily earnings, max 90 days",
      state: "National",
      ministry: "Employees' State Insurance Corporation",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop",
      tags: ["Unemployment", "ESIC", "Relief"],
    },
    {
      id: 6,
      title: "Atal Pension Yojana (APY)",
      description: "Old-age income security scheme with fixed monthly pension ₹1,000 to ₹5,000 after age 60",
      category: "Pension & Retirement",
      eligibility: "Indian citizens age 18-40 with savings account, non-income tax payers",
      amount: "₹1,000 - ₹5,000/month",
      state: "National",
      ministry: "Ministry of Finance",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=200&fit=crop",
      tags: ["Pension", "Retirement", "Security"],
    },
    {
      id: 7,
      title: "Education Loan Scheme under NSFDC- Haryana",
      description: "Educational loans up to ₹10 lakh (India) and ₹20 lakh (abroad) for SC students",
      category: "Education & Skill Development",
      eligibility: "SC students from Haryana with admission to professional/technical courses",
      amount: "₹10 lakh (India), ₹20 lakh (abroad)",
      state: "Haryana",
      ministry: "Haryana Scheduled Castes Finance and Development Corporation",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=200&fit=crop",
      tags: ["Education", "SC", "Professional Courses"],
    },
    {
      id: 8,
      title: "Pradhan Mantri Mudra Yojana (PMMY)",
      description: "Micro-credit loans up to ₹10 lakh for non-corporate, non-farming small enterprises",
      category: "Business & Entrepreneurship",
      eligibility: "Indian citizens with business plan for non-farm income-generating activity",
      amount: "₹50,000 (Shishu), ₹5 lakh (Kishor), ₹10 lakh (Tarun)",
      state: "National",
      ministry: "Ministry of Finance",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
      tags: ["MUDRA", "Micro-credit", "Small Business"],
    },
    {
      id: 9,
      title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      description: "Comprehensive crop insurance covering pre-sowing to post-harvest losses",
      category: "Agriculture & Farming",
      eligibility: "All farmers including tenant farmers and sharecroppers growing notified crops",
      amount: "Varies by crop and area",
      state: "National",
      ministry: "Ministry of Agriculture and Farmers Welfare",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=200&fit=crop",
      tags: ["Crop Insurance", "Farmers", "Risk Coverage"],
    },
    {
      id: 10,
      title: "Stand-Up India",
      description: "Bank loans ₹10 lakh to ₹1 crore for SC/ST and women entrepreneurs for greenfield enterprises",
      category: "Business & Entrepreneurship",
      eligibility: "SC/ST or women entrepreneurs for greenfield manufacturing/services/trading projects",
      amount: "₹10 lakh - ₹1 crore",
      state: "National",
      ministry: "Ministry of Finance",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=200&fit=crop",
      tags: ["Women", "SC/ST", "Greenfield"],
    },
    {
      id: 11,
      title: "Prime Minister's Employment Generation Programme (PMEGP)",
      description: "Credit-linked subsidy scheme with 15-35% subsidy for new micro-enterprises",
      category: "Business & Entrepreneurship",
      eligibility: "Individuals above 18 years, 8th pass for projects >₹10 lakh manufacturing/₹5 lakh service",
      amount: "₹50 lakh (manufacturing), ₹20 lakh (service)",
      state: "National",
      ministry: "Ministry of Micro, Small and Medium Enterprises",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      tags: ["Employment", "Subsidy", "Micro-enterprises"],
    },
    {
      id: 12,
      title: "Kisan Vikas Patra Scheme",
      description: "Certificate savings scheme with 7.5% interest rate, investment doubles in 115 months",
      category: "Savings & Investment",
      eligibility: "Any adult Indian citizen, parents/guardians can purchase for minors",
      amount: "No maximum limit",
      state: "National",
      ministry: "Ministry of Finance",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=200&fit=crop",
      tags: ["Savings", "Investment", "Fixed Returns"],
    },
    {
      id: 13,
      title: "Mahila Samman Savings Certificate",
      description: "Savings scheme for women with 7.5% interest, max deposit ₹2 lakh for 2 years",
      category: "Women Empowerment",
      eligibility: "Any woman or girl in India, including minors with guardian",
      amount: "Max ₹2 lakh",
      state: "National",
      ministry: "Ministry of Finance",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=200&fit=crop",
      tags: ["Women", "Savings", "Financial Security"],
    },
    {
      id: 14,
      title: "National Pension Scheme For Traders",
      description: "Voluntary pension scheme for traders with ₹3,000 minimum monthly pension after age 60",
      category: "Pension & Retirement",
      eligibility: "Small traders/self-employed, age 18-40, turnover ≤₹1.5 crore",
      amount: "₹3,000/month minimum",
      state: "National",
      ministry: "Ministry of Labour and Employment",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
      tags: ["Traders", "Pension", "Self-employed"],
    },
    {
      id: 15,
      title: "Indira Gandhi National Disability Pension Scheme",
      description: "Monthly pension for differently-abled individuals from BPL families with 80%+ disability",
      category: "Disability Support",
      eligibility: "Age 18-79, BPL family, 80%+ severe disability",
      amount: "Monthly pension",
      state: "National",
      ministry: "Ministry of Rural Development",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
      tags: ["Disability", "BPL", "Pension"],
    },
    {
      id: 16,
      title: "Coconut Palm Insurance Scheme",
      description: "Insurance for healthy coconut palms against natural perils, minimum 5 palms required",
      category: "Agriculture & Farming",
      eligibility: "Individual farmers with 5+ healthy nut-bearing palms, age 4-60 years",
      amount: "Premium shared: 50% CDB, 25% State, 25% farmer",
      state: "National",
      ministry: "Coconut Development Board",
      image: "https://images.unsplash.com/photo-1447279506476-3faec8071eee?w=400&h=200&fit=crop",
      tags: ["Coconut", "Insurance", "Natural Perils"],
    },
    {
      id: 17,
      title: "Green Business Scheme",
      description: "Financial assistance for climate-friendly income-generating activities for SC entrepreneurs",
      category: "Environment & Sustainability",
      eligibility: "SC community members with annual family income up to ₹3 lakh",
      amount: "Varies by project",
      state: "National",
      ministry: "Ministry of Social Justice and Empowerment",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=200&fit=crop",
      tags: ["Green Business", "SC", "Climate"],
    },
    {
      id: 18,
      title: "Skill Loan Scheme",
      description: "Loans up to ₹1,50,000 for skill development training without collateral",
      category: "Education & Skill Development",
      eligibility: "Individuals with admission to ITI, Polytechnic, or recognized training courses",
      amount: "Up to ₹1,50,000",
      state: "National",
      ministry: "Ministry of Skill Development and Entrepreneurship",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=200&fit=crop",
      tags: ["Skill Development", "Training", "No Collateral"],
    },
    {
      id: 19,
      title: "Poultry Farming Scheme (HSFDC)",
      description: "Loans and subsidies for SC BPL families to start poultry farming for livelihood",
      category: "Agriculture & Farming",
      eligibility: "Haryana SC residents from BPL families, annual income ≤₹1,80,000",
      amount: "Loan with subsidy",
      state: "Haryana",
      ministry: "Haryana Scheduled Castes Finance and Development Corporation",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=200&fit=crop",
      tags: ["Poultry", "SC", "BPL"],
    },
    {
      id: 20,
      title: "New Swarnima Scheme For Women",
      description: "Term loans up to ₹2,00,000 for women entrepreneurs from backward classes at 5% interest",
      category: "Women Empowerment",
      eligibility: "Women from backward classes, age 18-55, annual family income <₹3 lakh",
      amount: "Up to ₹2,00,000",
      state: "National",
      ministry: "Ministry of Social Justice and Empowerment",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=200&fit=crop",
      tags: ["Women", "Backward Classes", "Low Interest"],
    },
  ]

  const categories = [
    { value: "all", label: "All Categories", icon: CreditCard },
    { value: "Business & Entrepreneurship", label: "Business & Entrepreneurship", icon: Briefcase },
    { value: "Agriculture & Farming", label: "Agriculture & Farming", icon: Users },
    { value: "Education & Skill Development", label: "Education & Skill Development", icon: GraduationCap },
    { value: "Social Security & Insurance", label: "Social Security & Insurance", icon: Shield },
    { value: "Women Empowerment", label: "Women Empowerment", icon: Heart },
    { value: "Housing & Infrastructure", label: "Housing & Infrastructure", icon: Building },
    { value: "Pension & Retirement", label: "Pension & Retirement", icon: Banknote },
  ]

  const states = [
    "all",
    "National",
    "Haryana",
    "Punjab",
    "Delhi",
    "Uttar Pradesh",
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
    "Madhya Pradesh",
  ]

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch =
      scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || scheme.category === selectedCategory
    const matchesState = selectedState === "all" || scheme.state === selectedState

    return matchesSearch && matchesCategory && matchesState
  })

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find((cat) => cat.value === category)
    return categoryData ? categoryData.icon : CreditCard
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Business & Entrepreneurship": "bg-blue-100 text-blue-800",
      "Agriculture & Farming": "bg-green-100 text-green-800",
      "Education & Skill Development": "bg-purple-100 text-purple-800",
      "Social Security & Insurance": "bg-orange-100 text-orange-800",
      "Women Empowerment": "bg-pink-100 text-pink-800",
      "Housing & Infrastructure": "bg-gray-100 text-gray-800",
      "Pension & Retirement": "bg-yellow-100 text-yellow-800",
      "Environment & Sustainability": "bg-emerald-100 text-emerald-800",
      "Industry & Manufacturing": "bg-indigo-100 text-indigo-800",
      "Savings & Investment": "bg-cyan-100 text-cyan-800",
      "Disability Support": "bg-red-100 text-red-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5" />
          <h1 className="text-xl font-semibold">Government Loans & Schemes</h1>
        </div>
        <p className="text-green-100 text-sm mt-1">
          Comprehensive database of 95+ government schemes and financial assistance programs
        </p>
      </div>

      {/* Search and Filters */}
      <div className="px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search schemes by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-64">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center gap-2">
                        <category.icon className="w-4 h-4" />
                        {category.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="State/National" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state === "all" ? "All States" : state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-green-600">{filteredSchemes.length}</span> schemes
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
            {selectedState !== "all" && ` for ${selectedState}`}
          </p>
        </div>

        {/* Schemes Grid */}
        <div className="grid gap-6">
          {filteredSchemes.map((scheme) => {
            const IconComponent = getCategoryIcon(scheme.category)
            return (
              <Card key={scheme.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-80 h-48 lg:h-auto">
                      <img
                        src={scheme.image || "/placeholder.svg"}
                        alt={scheme.title}
                        className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-5 h-5 text-green-600" />
                          <Badge className={getCategoryColor(scheme.category)}>{scheme.category}</Badge>
                          <Badge variant="outline">{scheme.state}</Badge>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600 text-lg">{scheme.amount}</p>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-2">{scheme.title}</h3>

                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{scheme.description}</p>

                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Eligibility:</p>
                        <p className="text-sm text-gray-700 line-clamp-2">{scheme.eligibility}</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Implementing Agency:</p>
                        <p className="text-sm text-gray-700">{scheme.ministry}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {scheme.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {scheme.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{scheme.tags.length - 3} more
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button className="bg-green-600 hover:bg-green-700" size="sm">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No schemes found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">95+</div>
              <div className="text-sm opacity-90">Total Schemes</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">₹50L+</div>
              <div className="text-sm opacity-90">Max Loan Amount</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-90">States Covered</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm opacity-90">Categories</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
