"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Phone, Wrench, Tractor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<"tools" | "machinery">("tools")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg font-medium">Back</span>
          <span className="text-lg font-medium ml-8">Tools & Machinery Rental</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="flex">
          <button
            onClick={() => setActiveTab("tools")}
            className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium transition-colors ${
              activeTab === "tools"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>Tools</span>
          </button>
          <button
            onClick={() => setActiveTab("machinery")}
            className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium transition-colors ${
              activeTab === "machinery"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Tractor className="w-4 h-4" />
            <span>Machinery</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "tools" ? (
          <>
            {/* Available Tools Header */}
            <div className="flex items-center gap-2 mb-6">
              <Wrench className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Available Tools</h2>
            </div>

            {/* Tools Cards */}
            <div className="space-y-4">
              {/* Punjab Farm Tools */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Punjab Farm Tools</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      Available
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <MapPin className="w-4 h-4" />
                        <span>Amritsar, Punjab</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Tool Set:</p>
                      <p className="text-gray-800">Hand Tools & Equipment</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Contact:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <Phone className="w-4 h-4" />
                        <span>+91 98765 11111</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Available Tools:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Sickles & Scythes
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Spades & Hoes
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Pruning Tools
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹50/day</div>
                      <div className="text-sm text-gray-600">Rental cost</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-gray-600 bg-transparent">
                        View Details
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Rent Tools</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Haryana Tool Center */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Haryana Tool Center</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      Available
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <MapPin className="w-4 h-4" />
                        <span>Panipat, Haryana</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Tool Set:</p>
                      <p className="text-gray-800">Power Tools & Equipment</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Contact:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <Phone className="w-4 h-4" />
                        <span>+91 87654 22222</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Available Tools:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Chainsaws
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Brush Cutters
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Sprayers
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹150/day</div>
                      <div className="text-sm text-gray-600">Rental cost</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-gray-600 bg-transparent">
                        View Details
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Rent Tools</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <>
            {/* Available Machinery Header */}
            <div className="flex items-center gap-2 mb-6">
              <Tractor className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Available Machinery</h2>
            </div>

            {/* Machinery Cards */}
            <div className="space-y-4">
              {/* Delhi Tractor Rentals */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Delhi Tractor Rentals</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      Available
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <MapPin className="w-4 h-4" />
                        <span>Sonipat, Delhi NCR</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Fleet Size:</p>
                      <p className="text-gray-800">15 Tractors</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Contact:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <Phone className="w-4 h-4" />
                        <span>+91 99887 33333</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Available Equipment:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Mahindra 575 DI (50 HP)
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        John Deere 5050D (50 HP)
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Implements Included
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹800/day</div>
                      <div className="text-sm text-gray-600">Rental cost</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-gray-600 bg-transparent">
                        View Details
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Rent Tractor</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Maharashtra Heavy Equipment */}
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Maharashtra Heavy Equipment</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      Available
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <MapPin className="w-4 h-4" />
                        <span>Pune, Maharashtra</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Fleet Size:</p>
                      <p className="text-gray-800">8 Harvesters</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Contact:</p>
                      <div className="flex items-center gap-1 text-gray-800">
                        <Phone className="w-4 h-4" />
                        <span>+91 88776 44444</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Available Equipment:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Combine Harvesters
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Threshing Machines
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                        Operator Included
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹2500/day</div>
                      <div className="text-sm text-gray-600">Rental cost</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-gray-600 bg-transparent">
                        View Details
                      </Button>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Rent Harvester</Button>
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
