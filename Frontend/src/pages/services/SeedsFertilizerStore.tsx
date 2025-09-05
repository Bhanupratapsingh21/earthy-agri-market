"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Phone, Sprout, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SeedsPage() {
  const [activeTab, setActiveTab] = useState<"seeds" | "fertilizers">("seeds")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg font-medium">Back</span>
          <span className="text-lg font-medium ml-8">Seeds & Fertilizers</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="flex">
          <button
            onClick={() => setActiveTab("seeds")}
            className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium transition-colors ${activeTab === "seeds"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
          >
            <Sprout className="w-4 h-4" />
            <span>Seeds</span>
          </button>
          <button
            onClick={() => setActiveTab("fertilizers")}
            className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium transition-colors ${activeTab === "fertilizers"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
          >
            <Leaf className="w-4 h-4" />
            <span>Fertilizers</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "seeds" ? (
          <>
            {/* Available Seeds Header */}
            <div className="flex items-center gap-2 mb-6">
              <Sprout className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Available Seeds</h2>
            </div>

            {/* Seeds Cards */}
            <div className="space-y-4">
              {/* Premium Wheat Seeds */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Premium Wheat Seeds (HD-2967)</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      In Stock
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Supplier:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <MapPin className="w-4 h-4" />
                        <span>Punjab Agro Seeds, Ludhiana</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Quantity Available:</p>
                      <p className="text-gray-800">500 quintals</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Contact:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <Phone className="w-4 h-4" />
                        <span>+91 98765 43210</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Features:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        High Yield Variety
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Disease Resistant
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Certified Seeds
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹2,500/quintal</div>
                      <div className="text-sm text-gray-600">Seed price</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-gray-600 bg-transparent">
                        View Details
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Order Seeds</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hybrid Rice Seeds */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Hybrid Rice Seeds (Pusa RH-10)</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      In Stock
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Supplier:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <MapPin className="w-4 h-4" />
                        <span>Haryana Seeds Corp, Karnal</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Quantity Available:</p>
                      <p className="text-gray-800">300 quintals</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Contact:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <Phone className="w-4 h-4" />
                        <span>+91 87654 32109</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Features:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Hybrid Variety
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Water Efficient
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Premium Quality
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹3,200/quintal</div>
                      <div className="text-sm text-gray-600">Seed price</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-gray-600 bg-transparent">
                        View Details
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Order Seeds</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <>
            {/* Available Fertilizers Header */}
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Available Fertilizers</h2>
            </div>

            {/* Fertilizers Cards */}
            <div className="space-y-4">
              {/* NPK Fertilizer */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">NPK Fertilizer (12:32:16)</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      In Stock
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Supplier:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <MapPin className="w-4 h-4" />
                        <span>IFFCO, Delhi</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Quantity Available:</p>
                      <p className="text-gray-800">1000 bags (50kg each)</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Contact:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <Phone className="w-4 h-4" />
                        <span>+91 99887 65432</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Features:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Balanced NPK
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Quick Release
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        All Crops
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹1,200/bag</div>
                      <div className="text-sm text-gray-600">50kg bag price</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-gray-600 bg-transparent">
                        View Details
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Order Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Organic Compost */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Organic Compost Fertilizer</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      In Stock
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Supplier:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <MapPin className="w-4 h-4" />
                        <span>Green Earth Organics, Pune</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Quantity Available:</p>
                      <p className="text-gray-800">800 bags (40kg each)</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Contact:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <Phone className="w-4 h-4" />
                        <span>+91 88776 54321</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Features:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        100% Organic
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Soil Enriching
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Eco-Friendly
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹800/bag</div>
                      <div className="text-sm text-gray-600">40kg bag price</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-gray-600 bg-transparent">
                        View Details
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Order Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
