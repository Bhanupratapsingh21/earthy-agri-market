"use client"

import { useState } from "react"
import { ArrowLeft, Filter, RefreshCw, TrendingUp, TrendingDown, MapPin, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MarketPricesPage() {
  const [selectedCommodity, setSelectedCommodity] = useState("all")
  const [selectedDistrict, setSelectedDistrict] = useState("all")

  const districts = ["Hisar", "PANIPAT", "SIRSA", "GURGAON", "FARIDABAD", "DELHI", "JAIPUR"]

  // Expanded market data with more realistic information
  const marketData = [
    {
      commodity: "Wheat",
      location: "Hisar",
      market: "Hisar Grain Market",
      minPrice: 2275,
      maxPrice: 2350,
      modalPrice: 2310,
      trend: "+2.3%",
      trendDirection: "up",
      updated: "45 minutes ago",
    },
    {
      commodity: "Rice",
      location: "PANIPAT",
      market: "Panipat Rice Mandi",
      minPrice: 2850,
      maxPrice: 3200,
      modalPrice: 3025,
      trend: "-1.2%",
      trendDirection: "down",
      updated: "1 hour ago",
    },
    {
      commodity: "Corn",
      location: "SIRSA",
      market: "Sirsa Agricultural Market",
      minPrice: 1950,
      maxPrice: 2150,
      modalPrice: 2050,
      trend: "+3.7%",
      trendDirection: "up",
      updated: "2 hours ago",
    },
    {
      commodity: "Barley",
      location: "GURGAON",
      market: "Gurgaon Grain Exchange",
      minPrice: 1750,
      maxPrice: 1900,
      modalPrice: 1825,
      trend: "+0.8%",
      trendDirection: "up",
      updated: "30 minutes ago",
    },
    {
      commodity: "Sugarcane",
      location: "FARIDABAD",
      market: "Faridabad Sugarcane Depot",
      minPrice: 320,
      maxPrice: 350,
      modalPrice: 335,
      trend: "-0.5%",
      trendDirection: "down",
      updated: "3 hours ago",
    },
    {
      commodity: "Cotton",
      location: "DELHI",
      market: "Delhi Cotton Exchange",
      minPrice: 6500,
      maxPrice: 7200,
      modalPrice: 6850,
      trend: "+4.2%",
      trendDirection: "up",
      updated: "1 hour ago",
    },
    {
      commodity: "Mustard",
      location: "JAIPUR",
      market: "Jaipur Oilseeds Market",
      minPrice: 5200,
      maxPrice: 5600,
      modalPrice: 5400,
      trend: "+1.5%",
      trendDirection: "up",
      updated: "2 hours ago",
    },
    {
      commodity: "Soybean",
      location: "Hisar",
      market: "Hisar Oilseeds Mandi",
      minPrice: 4200,
      maxPrice: 4500,
      modalPrice: 4350,
      trend: "-2.1%",
      trendDirection: "down",
      updated: "4 hours ago",
    },
    {
      commodity: "Bajra",
      location: "PANIPAT",
      market: "Panipat Millet Market",
      minPrice: 1850,
      maxPrice: 2100,
      modalPrice: 1975,
      trend: "+0.9%",
      trendDirection: "up",
      updated: "5 hours ago",
    },
    {
      commodity: "Chana",
      location: "SIRSA",
      market: "Sirsa Pulses Market",
      minPrice: 5200,
      maxPrice: 5600,
      modalPrice: 5400,
      trend: "-1.8%",
      trendDirection: "down",
      updated: "2 hours ago",
    },
    {
      commodity: "Moong",
      location: "GURGAON",
      market: "Gurgaon Pulses Exchange",
      minPrice: 7200,
      maxPrice: 7800,
      modalPrice: 7500,
      trend: "+2.5%",
      trendDirection: "up",
      updated: "1 hour ago",
    },
    {
      commodity: "Potato",
      location: "FARIDABAD",
      market: "Faridabad Vegetable Market",
      minPrice: 850,
      maxPrice: 1100,
      modalPrice: 950,
      trend: "-3.2%",
      trendDirection: "down",
      updated: "3 hours ago",
    },
    {
      commodity: "Onion",
      location: "DELHI",
      market: "Delhi Onion Market",
      minPrice: 1200,
      maxPrice: 1500,
      modalPrice: 1350,
      trend: "+5.1%",
      trendDirection: "up",
      updated: "2 hours ago",
    },
    {
      commodity: "Tomato",
      location: "JAIPUR",
      market: "Jaipur Vegetable Mandi",
      minPrice: 800,
      maxPrice: 1200,
      modalPrice: 1000,
      trend: "-4.3%",
      trendDirection: "down",
      updated: "4 hours ago",
    },
  ]

  // Filter data based on selections
  const filteredData = marketData.filter(item => {
    const commodityMatch = selectedCommodity === "all" || item.commodity.toLowerCase() === selectedCommodity
    const districtMatch = selectedDistrict === "all" || item.location.toLowerCase() === selectedDistrict
    return commodityMatch && districtMatch
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5" />
          <h1 className="text-xl font-semibold">Mandi Bhav - Live Market Prices</h1>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <label className="text-sm font-medium text-gray-700">Filter by Commodity</label>
            </div>
            <Select value={selectedCommodity} onValueChange={setSelectedCommodity}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="All Commodities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Commodities</SelectItem>
                <SelectItem value="wheat">Wheat</SelectItem>
                <SelectItem value="rice">Rice</SelectItem>
                <SelectItem value="corn">Corn</SelectItem>
                <SelectItem value="barley">Barley</SelectItem>
                <SelectItem value="sugarcane">Sugarcane</SelectItem>
                <SelectItem value="cotton">Cotton</SelectItem>
                <SelectItem value="mustard">Mustard</SelectItem>
                <SelectItem value="soybean">Soybean</SelectItem>
                <SelectItem value="bajra">Bajra</SelectItem>
                <SelectItem value="chana">Chana</SelectItem>
                <SelectItem value="moong">Moong</SelectItem>
                <SelectItem value="potato">Potato</SelectItem>
                <SelectItem value="onion">Onion</SelectItem>
                <SelectItem value="tomato">Tomato</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-gray-600" />
              <label className="text-sm font-medium text-gray-700">Filter by District</label>
            </div>
            <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="All Districts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Districts</SelectItem>
                {districts.map((district) => (
                  <SelectItem key={district} value={district.toLowerCase()}>
                    {district}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end gap-2">
            <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-4">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" className="font-medium px-4">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Commodities</p>
                  <p className="text-2xl font-bold text-green-700">14</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Markets Covered</p>
                  <p className="text-2xl font-bold text-blue-700">7</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Last Updated</p>
                  <p className="text-lg font-bold text-amber-700">Today, 10:45 AM</p>
                </div>
                <div className="bg-amber-100 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Prices Table */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-800">Market Prices (Demo Data)</h2>
              </div>
              <p className="text-sm text-gray-600">
                Showing {filteredData.length} of {marketData.length} records
              </p>
            </div>

            {filteredData.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p>No market data found for the selected filters.</p>
                <p className="text-sm mt-2">Try changing your commodity or district selection.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Commodity</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Market</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Min Price (₹/q)</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Max Price (₹/q)</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Modal Price (₹/q)</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">Trend</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-green-50/30" : "bg-amber-50/30"}`}
                      >
                        <td className="py-4 px-2">
                          <div>
                            <div className="font-semibold text-gray-800">{item.commodity}</div>
                            <div className="text-sm text-gray-600 flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {item.location}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2 text-gray-600">{item.market}</td>
                        <td className="py-4 px-2 text-right text-gray-800">₹{item.minPrice.toLocaleString()}</td>
                        <td className="py-4 px-2 text-right text-gray-800">₹{item.maxPrice.toLocaleString()}</td>
                        <td className="py-4 px-2 text-right">
                          <span className="font-semibold text-green-600">₹{item.modalPrice.toLocaleString()}</span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          <div
                            className={`flex items-center justify-center gap-1 ${item.trendDirection === "up" ? "text-green-600" : "text-red-600"
                              }`}
                          >
                            {item.trendDirection === "up" ? (
                              <TrendingUp className="w-4 h-4" />
                            ) : (
                              <TrendingDown className="w-4 h-4" />
                            )}
                            <span className="font-medium">{item.trend}</span>
                          </div>
                        </td>
                        <td className="py-4 px-2 text-right text-sm text-gray-600">{item.updated}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Coming Soon Features */}
        <Card className="bg-white shadow-sm mt-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📱</span>
              <h3 className="font-semibold text-gray-800">Coming Soon Features:</h3>
            </div>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Real-time price updates every 30 minutes</li>
              <li>• Price history and trend analysis</li>
              <li>• Push notifications for price alerts</li>
              <li>• Regional price comparisons</li>
              <li>• Historical data charts</li>
              <li>• Mobile app for on-the-go access</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}