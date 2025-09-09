"use client"

import { useState } from "react"
import { ArrowLeft, Search, MapPin, Calendar, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function ToolsMachineryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["All", "Tractor", "Harvester", "Tillage", "Spraying", "Processing", "Seeding"]

  const equipment = [
    {
      id: 1,
      name: "Tractor - Mahindra 575 DI",
      category: "Tractor",
      price: 800,
      location: "Ludhiana, Punjab",
      owner: "Rajesh Kumar",
      features: ["50 HP", "Power Steering", "Hydraulic Lift"],
      status: "Available",
      image: "/mahindra-tractor-fieldwork.png",
    },
    {
      id: 2,
      name: "Combine Harvester - John Deere",
      category: "Harvester",
      price: 2500,
      location: "Karnal, Haryana",
      owner: "Sukhwinder Singh",
      features: ["Self-Propelled", "Grain Tank", "Cutting Width: 12ft"],
      status: "Available",
      image: "/john-deere-combine-harvester.jpg",
    },
    {
      id: 3,
      name: "Rotavator - Fieldking",
      category: "Tillage",
      price: 300,
      location: "Meerut, UP",
      owner: "Ramesh Yadav",
      features: ["6 feet width", "Heavy Duty", "Side Transmission"],
      status: "Booked",
      image: "/rotavator-fieldking.jpg",
    },
    {
      id: 4,
      name: "Tractor - New Holland 3630",
      category: "Tractor",
      price: 900,
      location: "Hisar, Haryana",
      owner: "Vikram Singh",
      features: ["55 HP", "4WD", "Air Conditioning"],
      status: "Available",
      image: "/new-holland-tractor.jpg",
    },
    {
      id: 5,
      name: "Seed Drill - Lemken",
      category: "Seeding",
      price: 400,
      location: "Panipat, Haryana",
      owner: "Harpreet Kaur",
      features: ["Pneumatic", "12 Row", "Fertilizer Box"],
      status: "Available",
      image: "/lemken-seed-drill.jpg",
    },
    {
      id: 6,
      name: "Sprayer - Stihl",
      category: "Spraying",
      price: 200,
      location: "Sirsa, Haryana",
      owner: "Manjeet Singh",
      features: ["200L Tank", "Boom Sprayer", "Adjustable Nozzles"],
      status: "Available",
      image: "/placeholder-vxaih.png",
    },
    {
      id: 7,
      name: "Thresher - Mahindra",
      category: "Processing",
      price: 600,
      location: "Gurgaon, Haryana",
      owner: "Deepak Sharma",
      features: ["Multi Crop", "High Capacity", "Low Maintenance"],
      status: "Available",
      image: "/mahindra-thresher.jpg",
    },
    {
      id: 8,
      name: "Cultivator - Sonalika",
      category: "Tillage",
      price: 250,
      location: "Faridabad, Haryana",
      owner: "Ravi Kumar",
      features: ["9 Tyne", "Spring Loaded", "Adjustable Width"],
      status: "Available",
      image: "/sonalika-cultivator.jpg",
    },
    {
      id: 9,
      name: "Harvester - Preet 987",
      category: "Harvester",
      price: 2200,
      location: "Delhi",
      owner: "Amarjeet Singh",
      features: ["Self-Propelled", "Straw Management", "GPS Ready"],
      status: "Booked",
      image: "/preet-harvester.jpg",
    },
    {
      id: 10,
      name: "Tractor - Swaraj 855",
      category: "Tractor",
      price: 750,
      location: "Jaipur, Rajasthan",
      owner: "Mohan Lal",
      features: ["60 HP", "Dual Clutch", "Oil Immersed Brakes"],
      status: "Available",
      image: "/swaraj-tractor.jpg",
    },
    {
      id: 11,
      name: "Disc Harrow - Lemken",
      category: "Tillage",
      price: 350,
      location: "Ludhiana, Punjab",
      owner: "Jasbir Singh",
      features: ["Heavy Duty", "20 Discs", "Hydraulic Lift"],
      status: "Available",
      image: "/lemken-disc-harrow.jpg",
    },
    {
      id: 12,
      name: "Planter - John Deere 1760",
      category: "Seeding",
      price: 500,
      location: "Karnal, Haryana",
      owner: "Balwinder Singh",
      features: ["Precision Planting", "Variable Rate", "12 Row"],
      status: "Available",
      image: "/john-deere-planter.jpg",
    },
    {
      id: 13,
      name: "Mower - Kuhn",
      category: "Processing",
      price: 300,
      location: "Meerut, UP",
      owner: "Suresh Chandra",
      features: ["Disc Mower", "2.4m Width", "Quick Hitch"],
      status: "Available",
      image: "/kuhn-disc-mower.jpg",
    },
    {
      id: 14,
      name: "Sprayer - Aspee",
      category: "Spraying",
      price: 180,
      location: "Hisar, Haryana",
      owner: "Pawan Kumar",
      features: ["Knapsack", "Manual Pump", "Brass Nozzle"],
      status: "Available",
      image: "/aspee-knapsack-sprayer.jpg",
    },
    {
      id: 15,
      name: "Tractor - Massey Ferguson 241",
      category: "Tractor",
      price: 850,
      location: "Panipat, Haryana",
      owner: "Kuldeep Singh",
      features: ["42 HP", "Multi Speed PTO", "Comfortable Seat"],
      status: "Available",
      image: "/massey-ferguson-tractor.jpg",
    },
    {
      id: 16,
      name: "Reaper - VST Shakti",
      category: "Harvester",
      price: 1800,
      location: "Sirsa, Haryana",
      owner: "Gurpreet Singh",
      features: ["Self Propelled", "Track Type", "4.9 HP Engine"],
      status: "Available",
      image: "/vst-shakti-reaper.jpg",
    },
    {
      id: 17,
      name: "Subsoiler - Mahindra",
      category: "Tillage",
      price: 400,
      location: "Gurgaon, Haryana",
      owner: "Naresh Kumar",
      features: ["3 Shank", "Deep Tillage", "Heavy Frame"],
      status: "Booked",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 18,
      name: "Broadcaster - Fieldking",
      category: "Seeding",
      price: 150,
      location: "Faridabad, Haryana",
      owner: "Rajesh Gupta",
      features: ["Fertilizer Spreader", "Adjustable Rate", "PTO Driven"],
      status: "Available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 19,
      name: "Chaff Cutter - Kirloskar",
      category: "Processing",
      price: 250,
      location: "Delhi",
      owner: "Ashok Kumar",
      features: ["Electric Motor", "Safety Guard", "Easy Operation"],
      status: "Available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 20,
      name: "Power Tiller - VST Shakti",
      category: "Tractor",
      price: 400,
      location: "Jaipur, Rajasthan",
      owner: "Gopal Singh",
      features: ["8 HP", "Diesel Engine", "Multi Purpose"],
      status: "Available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 21,
      name: "Boom Sprayer - Mahindra",
      category: "Spraying",
      price: 450,
      location: "Ludhiana, Punjab",
      owner: "Simran Kaur",
      features: ["Tractor Mounted", "12m Boom", "400L Tank"],
      status: "Available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 22,
      name: "Potato Planter - Grimme",
      category: "Seeding",
      price: 800,
      location: "Karnal, Haryana",
      owner: "Jatinder Singh",
      features: ["2 Row", "Automatic", "Fertilizer Unit"],
      status: "Available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 23,
      name: "Baler - New Holland",
      category: "Processing",
      price: 1200,
      location: "Meerut, UP",
      owner: "Dinesh Kumar",
      features: ["Round Baler", "Variable Chamber", "Net Wrap"],
      status: "Booked",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 24,
      name: "Laser Land Leveler - Fieldking",
      category: "Tillage",
      price: 600,
      location: "Hisar, Haryana",
      owner: "Satpal Singh",
      features: ["Laser Guided", "Precision Leveling", "GPS Compatible"],
      status: "Available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 25,
      name: "Transplanter - Kubota",
      category: "Seeding",
      price: 700,
      location: "Panipat, Haryana",
      owner: "Raman Singh",
      features: ["Rice Transplanter", "6 Row", "Hydraulic Lift"],
      status: "Available",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const filteredEquipment = equipment.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5" />
          <h1 className="text-xl font-semibold">Tools & Machinery Access</h1>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search equipment by name, type, or location..."
            className="pl-10 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${activeCategory === category ? "bg-green-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEquipment.map((item) => (
            <Card key={item.id} className="bg-white shadow-sm overflow-hidden">
              <div className="relative">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                <Badge
                  className={`absolute top-3 right-3 ${item.status === "Available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                >
                  {item.status}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.category}</p>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-green-600 font-semibold text-lg">₹{item.price}/day</span>
                  <span className="text-sm text-gray-500">per day</span>
                </div>

                <div className="flex items-center gap-1 mb-2">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-sm text-gray-600">{item.location}</span>
                </div>

                <p className="text-sm text-gray-600 mb-3">Owner: {item.owner}</p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    className={`flex-1 ${item.status === "Available"
                      ? "bg-amber-400 hover:bg-amber-500 text-black"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    disabled={item.status === "Booked"}
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.status === "Available" ? "Book Now" : "Booked"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* List Your Equipment Section */}
        <Card className="bg-white shadow-sm mb-8">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Wrench className="w-6 h-6 text-gray-600" />
              <h2 className="text-2xl font-semibold text-gray-800">List Your Equipment</h2>
            </div>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Have farming equipment to rent out? Join our equipment sharing platform and earn extra income.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Easy Listing</h3>
                <p className="text-gray-600 text-sm">Simple form to list your equipment</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Flexible Booking</h3>
                <p className="text-gray-600 text-sm">Set your own availability</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">₹</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Earn Income</h3>
                <p className="text-gray-600 text-sm">Get paid for equipment rental</p>
              </div>
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">List My Equipment (Coming Soon)</Button>
          </CardContent>
        </Card>

        {/* Bottom Info Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Rental Guidelines</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Book equipment 24 hours in advance</li>
                <li>• Verify equipment condition before use</li>
                <li>• Return equipment in same condition</li>
                <li>• Fuel costs may be additional</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Need Help?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Contact our equipment specialists for guidance on choosing the right machinery.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Contact Specialist
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
