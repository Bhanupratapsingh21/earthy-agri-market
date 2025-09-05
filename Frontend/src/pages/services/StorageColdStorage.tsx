"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Phone, Building2, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function StoragePage() {
  const [activeTab, setActiveTab] = useState<"warehouse" | "cold-storage">("warehouse")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg font-medium">Back</span>
          <span className="text-lg font-medium ml-8">Storage & Cold Storage</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="flex">
          <button
            onClick={() => setActiveTab("warehouse")}
            className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium transition-colors ${
              activeTab === "warehouse"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Warehouse</span>
          </button>
          <button
            onClick={() => setActiveTab("cold-storage")}
            className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium transition-colors ${
              activeTab === "cold-storage"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Snowflake className="w-4 h-4" />
            <span>Cold Storage</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "warehouse" ? (
          <>
            {/* Available Warehouses Header */}
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Available Warehouses</h2>
            </div>

            {/* Warehouse Cards */}
            <div className="space-y-4">
              {/* Punjab Grains Warehouse */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Punjab Grains Warehouse</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      Available
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <MapPin className="w-4 h-4" />
                        <span>Ludhiana, Punjab</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Capacity:</p>
                      <p className="text-gray-800">500 tons</p>
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
                    <p className="text-sm text-gray-600 mb-2">Facilities:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Pest Control
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Climate Control
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        24/7 Security
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹8/kg/month</div>
                      <div className="text-sm text-gray-600">Storage cost</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-gray-600 bg-transparent">
                        View Details
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Book Storage</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Haryana Storage Solutions */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Haryana Storage Solutions</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      Available
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <MapPin className="w-4 h-4" />
                        <span>Karnal, Haryana</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Capacity:</p>
                      <p className="text-gray-800">750 tons</p>
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
                    <p className="text-sm text-gray-600 mb-2">Facilities:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Fumigation
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Quality Testing
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Loading/Unloading
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹10/kg/month</div>
                      <div className="text-sm text-gray-600">Storage cost</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-gray-600 bg-transparent">
                        View Details
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Book Storage</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <>
            {/* Available Cold Storage Header */}
            <div className="flex items-center gap-2 mb-6">
              <Snowflake className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Available Cold Storage</h2>
            </div>

            {/* Cold Storage Cards */}
            <div className="space-y-4">
              {/* Delhi Cold Chain */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Delhi Cold Chain</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      Available
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <MapPin className="w-4 h-4" />
                        <span>Ghaziabad, Delhi NCR</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Capacity:</p>
                      <p className="text-gray-800">300 tons</p>
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
                    <p className="text-sm text-gray-600 mb-2">Facilities:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Temperature Control (-18°C to +5°C)
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Humidity Control
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        24/7 Monitoring
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹15/kg/month</div>
                      <div className="text-sm text-gray-600">Storage cost</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-gray-600 bg-transparent">
                        View Details
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Book Storage</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mumbai Fresh Storage */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Mumbai Fresh Storage</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      Available
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <MapPin className="w-4 h-4" />
                        <span>Navi Mumbai, Maharashtra</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Capacity:</p>
                      <p className="text-gray-800">450 tons</p>
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
                    <p className="text-sm text-gray-600 mb-2">Facilities:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Multi-Temperature Zones
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Quick Freezing
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Loading Docks
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹18/kg/month</div>
                      <div className="text-sm text-gray-600">Storage cost</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-gray-600 bg-transparent">
                        View Details
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Book Storage</Button>
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
