"use client"

import { ArrowLeft, Clock, Users, MessageCircle, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SupportPage() {
  const handleCallNow = () => {
    window.location.href = "tel:919350176831"
  }

  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=+919350176831&text=Hello%2C+I+would+love+to+know+more+about+agrevon.&type=phone_number&app_absent=0", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 cursor-pointer" onClick={() => window.history.back()} />
          <h1 className="text-xl font-semibold">AgriCare Support</h1>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 text-green-600">
              <MessageCircle className="w-8 h-8" />
              <MessageCircle className="w-6 h-6" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Need Help? We're Here!</h1>
          <p className="text-gray-600 text-lg">Get expert assistance for all your agricultural needs</p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white shadow-sm text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">Average response time under 30 minutes</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Agricultural experts and technical specialists</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Multiple Channels</h3>
              <p className="text-gray-600 text-sm">Phone, WhatsApp, email, and file support</p>
            </CardContent>
          </Card>
        </div>

        {/* Support Methods */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Call Support */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Support</h3>
                <p className="text-gray-600 mb-6">Direct phone support for urgent queries</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold text-gray-800">9350176831</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">9 AM - 6 PM (Mon-Sat)</span>
                  </div>
                </div>

                <Button
                  onClick={handleCallNow}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp Support */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp Support</h3>
                <p className="text-gray-600 mb-6">Quick responses via WhatsApp</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold text-gray-800">9350176831</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">24/7 Available</span>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Open WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Email Support Section */}
        <div className="mt-12 text-center">
          <Card className="bg-white shadow-sm max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-4">For detailed queries or file attachments, reach out to us via email</p>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="font-semibold text-green-600">support@agricare.com</span>
              </div>
              <p className="text-sm text-gray-500">
                We typically respond to emails within 2-4 hours during business hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
