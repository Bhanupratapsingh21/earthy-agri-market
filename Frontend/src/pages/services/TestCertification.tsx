"use client"

import { useState } from "react"
import { ArrowLeft, FileText, Droplets, TestTube, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function TestCertificationPage() {
  const [activeTab, setActiveTab] = useState("other")

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5" />
          <h1 className="text-xl font-semibold">Test & Certification</h1>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-4 py-6">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("soil")}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${activeTab === "soil" ? "bg-white shadow-md text-green-700" : "bg-white/60 text-gray-600 hover:bg-white/80"
              }`}
          >
            <TestTube className="w-4 h-4 text-red-500" />
            Soil Test
          </button>
          <button
            onClick={() => setActiveTab("water")}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${activeTab === "water"
                ? "bg-white shadow-md text-green-700"
                : "bg-white/60 text-gray-600 hover:bg-white/80"
              }`}
          >
            <Droplets className="w-4 h-4 text-blue-500" />
            Water Test
          </button>
          <button
            onClick={() => setActiveTab("other")}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${activeTab === "other"
                ? "bg-white shadow-md text-green-700"
                : "bg-white/60 text-gray-600 hover:bg-white/80"
              }`}
          >
            <FileText className="w-4 h-4 text-orange-500" />
            Other Tests
          </button>
        </div>

        {/* Other Tests Tab */}
        {activeTab === "other" && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-800">Other Certification Tests</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Organic Certification",
                  description: "Verify organic farming practices",
                  price: "₹2,500",
                },
                {
                  title: "Pesticide Residue Test",
                  description: "Check for harmful residues",
                  price: "₹1,800",
                },
                {
                  title: "Nutritional Analysis",
                  description: "Complete crop nutrition profile",
                  price: "₹3,200",
                },
                {
                  title: "Seed Quality Test",
                  description: "Germination and purity testing",
                  price: "₹1,200",
                },
              ].map((test, index) => (
                <Card key={index} className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{test.title}</h3>
                        <p className="text-gray-600 text-sm">{test.description}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-green-600 font-semibold text-lg">{test.price}</span>
                        <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6">
                          Book Test
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Water Test Tab */}
        {activeTab === "water" && (
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Droplets className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold text-gray-800">What Water Testing Covers</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Water Quality Parameters:</h3>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• pH and Total Dissolved Solids (TDS)</li>
                      <li>• Electrical Conductivity (EC)</li>
                      <li>• Salinity levels</li>
                      <li>• Heavy metals contamination</li>
                      <li>• Bacterial contamination</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Why Test Water:</h3>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Ensure safe irrigation practices</li>
                      <li>• Prevent crop damage from poor water</li>
                      <li>• Optimize water treatment if needed</li>
                      <li>• Comply with safety standards</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <p className="text-blue-700 text-sm font-medium">Test water sources before each growing season</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Book Water Test</h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="water-source" className="text-sm font-medium text-gray-700">
                      Water Source Type
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Borewell" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="borewell">Borewell</SelectItem>
                        <SelectItem value="river">River</SelectItem>
                        <SelectItem value="pond">Pond</SelectItem>
                        <SelectItem value="well">Well</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="source-location" className="text-sm font-medium text-gray-700">
                      Source Location
                    </Label>
                    <div className="relative mt-1">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input id="source-location" placeholder="Location of water source" className="pl-10" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="collection-date" className="text-sm font-medium text-gray-700">
                        Collection Date
                      </Label>
                      <div className="relative mt-1">
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input id="collection-date" placeholder="dd/mm/yyyy" className="pl-10" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="contact-number" className="text-sm font-medium text-gray-700">
                        Contact Number
                      </Label>
                      <Input id="contact-number" placeholder="Your mobile number" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="special-requirements" className="text-sm font-medium text-gray-700">
                      Special Requirements
                    </Label>
                    <Textarea
                      id="special-requirements"
                      placeholder="Any specific tests needed"
                      className="mt-1 min-h-[80px]"
                    />
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-semibold text-gray-800">Test Cost: ₹600</p>
                        <p className="text-sm text-gray-600">Report in 3-5 days</p>
                      </div>
                      <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-8">
                        📋 Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Soil Test Tab */}
        {activeTab === "soil" && (
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TestTube className="w-5 h-5 text-red-500" />
                  <h2 className="text-xl font-semibold text-gray-800">Why Soil Testing is Important</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Benefits of Soil Testing:</h3>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Optimize fertilizer usage and reduce costs</li>
                      <li>• Improve crop yield and quality</li>
                      <li>• Prevent soil degradation</li>
                      <li>• Detect nutrient deficiencies early</li>
                      <li>• Maintain soil pH balance</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">What We Test:</h3>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• pH Level</li>
                      <li>• Organic Carbon</li>
                      <li>• Nitrogen, Phosphorus, Potassium</li>
                      <li>• Micronutrients (Zn, Fe, Mn, Cu)</li>
                      <li>• Electrical Conductivity</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-600">💡</span>
                      <p className="text-yellow-700 text-sm font-medium">
                        Tip: Test your soil at least once a year for optimal results
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Book Soil Test</h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="farm-location" className="text-sm font-medium text-gray-700">
                      Farm Location
                    </Label>
                    <div className="relative mt-1">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input id="farm-location" placeholder="Enter your farm address" className="pl-10" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="farm-size" className="text-sm font-medium text-gray-700">
                        Farm Size (acres)
                      </Label>
                      <Input id="farm-size" placeholder="10" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="crop-type" className="text-sm font-medium text-gray-700">
                        Crop Type
                      </Label>
                      <Input id="crop-type" placeholder="Wheat, Rice, etc." className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="preferred-date" className="text-sm font-medium text-gray-700">
                      Preferred Date
                    </Label>
                    <div className="relative mt-1">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input id="preferred-date" placeholder="dd/mm/yyyy" className="pl-10" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-number-soil" className="text-sm font-medium text-gray-700">
                      Contact Number
                    </Label>
                    <Input id="contact-number-soil" placeholder="Your mobile number" className="mt-1" />
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-semibold text-gray-800">Test Cost: ₹800</p>
                        <p className="text-sm text-gray-600">Sample collection included</p>
                      </div>
                      <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-8">
                        📋 Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
