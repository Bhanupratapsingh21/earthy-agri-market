"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Phone, Building2, Snowflake, User, Calendar, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import coldStorageData from "./coldstorage"
import warehouseData from "./wareHouseData"

export default function StoragePage() {
  const [activeTab, setActiveTab] = useState<"warehouse" | "cold-storage">("cold-storage")
  const [selectedDistrict, setSelectedDistrict] = useState<string>("All")

  // Get unique districts for filter
  const districts = ["All", ...new Set(coldStorageData.map(item => item.district))]

  // Filter cold storage facilities based on selected district
  const filteredColdStorages = selectedDistrict === "All"
    ? coldStorageData
    : coldStorageData.filter(storage => storage.district === selectedDistrict)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-medium ml-8">Storage & Cold Storage</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="flex">
          <button
            onClick={() => setActiveTab("warehouse")}
            className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium transition-colors ${activeTab === "warehouse"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Warehouse</span>
          </button>
          <button
            onClick={() => setActiveTab("cold-storage")}
            className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium transition-colors ${activeTab === "cold-storage"
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
            {
              warehouseData.map((warehouse) => (
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{warehouse.name}</h3>
                      <Badge
                        variant="secondary"
                        className={`${warehouse.status === "Available"
                          ? "bg-green-100 text-green-700 border-green-200"
                          : "bg-red-100 text-red-700 border-red-200"
                          }`}
                      >
                        {warehouse.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Location:</p>
                        <div className="flex items-center gap-1 text-gray-800">
                          <MapPin className="w-4 h-4" />
                          <span>{warehouse.location}</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Capacity:</p>
                        <p className="text-gray-800">{warehouse.capacity}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Contact:</p>
                        <div className="flex items-center gap-1 text-gray-800">
                          <Phone className="w-4 h-4" />
                          <span>{warehouse.contact}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Facilities:</p>
                      <div className="flex flex-wrap gap-2">
                        {warehouse.facilities.map((facility, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-blue-600 border-blue-200 bg-blue-50"
                          >
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">{warehouse.price}</div>
                        <div className="text-sm text-gray-600">Storage cost</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="text-gray-600 bg-transparent">
                          View Details
                        </Button>
                        <Button className={warehouse.buttonVariant}>
                          {warehouse.buttonText}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            }
          </>
        ) : (
          <>
            {/* Available Cold Storage Header */}
            <div className="flex items-center gap-2 mb-6">
              <Snowflake className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Available Cold Storage</h2>
            </div>

            {/* District Filter */}
            <div className="mb-6">
              <label htmlFor="district-filter" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by District:
              </label>
              <select
                id="district-filter"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="block w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            {/* Cold Storage Cards */}
            <div className="space-y-4">
              {filteredColdStorages.map((storage) => (
                <Card key={storage.id} className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{storage.name}</h3>
                      <Badge
                        variant="secondary"
                        className={
                          storage.remarks && storage.remarks.includes("Not in Working")
                            ? "bg-red-100 text-red-700 border-red-200"
                            : "bg-green-100 text-green-700 border-green-200"
                        }
                      >
                        {storage.remarks && storage.remarks.includes("Not in Working")
                          ? "Not Operational"
                          : "Available"}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Location:</p>
                        <div className="flex items-center gap-1 text-gray-800">
                          <MapPin className="w-4 h-4" />
                          <span>{storage.district}, Haryana</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Capacity:</p>
                        <div className="flex items-center gap-1 text-gray-800">
                          <span>{storage.capacity} MT</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Contact:</p>
                        <div className="flex items-center gap-1 text-gray-800">
                          <Phone className="w-4 h-4" />
                          <span>{storage.contact || "Not available"}</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Established:</p>
                        <div className="flex items-center gap-1 text-gray-800">
                          <Calendar className="w-4 h-4" />
                          <span>{storage.year || "Unknown"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Owner:</p>
                        <div className="flex items-center gap-1 text-gray-800">
                          <User className="w-4 h-4" />
                          <span>{storage.owner || "Not specified"}</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Scheme:</p>
                        <div className="flex items-center gap-1 text-gray-800">
                          <Info className="w-4 h-4" />
                          <span>{storage.scheme || "Not specified"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Produces Stored:</p>
                      <div className="flex flex-wrap gap-2">
                        {storage.produce ? (
                          storage.produce.split(/[,/&]/).map((item, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-blue-600 border-blue-200 bg-blue-50"
                            >
                              {item.trim()}
                            </Badge>
                          ))
                        ) : (
                          <span className="text-gray-500">Not specified</span>
                        )}
                      </div>
                    </div>

                    {storage.remarks && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Remarks:</p>
                        <p className="text-sm text-gray-800">{storage.remarks}</p>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          {storage.capacity > 1000 ? "₹12/kg/month" : "₹15/kg/month"}
                        </div>
                        <div className="text-sm text-gray-600">Estimated storage cost</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="text-gray-600 bg-transparent">
                          View Details
                        </Button>
                        <Button
                          className="bg-yellow-500 hover:bg-yellow-600 text-black"
                          disabled={storage.remarks && storage.remarks.includes("Not in Working")}
                        >
                          {storage.remarks && storage.remarks.includes("Not in Working")
                            ? "Not Available"
                            : "Book Storage"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}