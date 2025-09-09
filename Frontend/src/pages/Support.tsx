import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MessageSquare, Clock, Users, FileText, Headphones, UploadIcon, ExternalLink } from 'lucide-react';
import { Navigation } from '@/components/ui/navigation';

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    category: '',
    issue: '',
    files: [] as File[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, files: Array.from(e.target.files as FileList) }));
    }
  };

  const handleCallNow = () => {
    window.location.href = "tel:919350176831"
  }

  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=+919350176831&text=Hello%2C+I+would+love+to+know+more+about+agrevon.&type=phone_number&app_absent=0", "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Support ticket submitted successfully!');
  };

  return (
    <><Navigation />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Headphones className="mx-auto h-14 w-14 text-green-800 mb-4" />
            <h1 className="text-4xl font-bold text-black mb-4">Need Help? We're Here!</h1>
            <p className="text-xl text-gray-600">Get expert assistance for all your agricultural needs</p>
          </div>
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="mx-auto h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
                <p className="text-gray-600">Average response time under 30 minutes</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Agricultural experts and technical specialists</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MessageSquare className="mx-auto h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Multiple Channels</h3>
                <p className="text-gray-600">Phone, WhatsApp, email, and file support</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
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


          {/* Email Support */}
          <Card className="border-2 border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Email Support</CardTitle>
              </div>
              <CardDescription>Reach out via email for different needs</CardDescription>
            </CardHeader>

            <CardContent>
              {/* Make these 3 support cards in a row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-1">General Inquiries</h4>
                  <p className="text-sm text-gray-600 mb-2">For general questions and platform support</p>
                  <div className="flex items-center justify-between">
                    <p className="text-green-600 font-medium">agrevon@gmail.com</p>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-1">NUVETRA Support</h4>
                  <p className="text-sm text-gray-600 mb-2">Blockchain crop identity and QR code issues</p>
                  <div className="flex items-center justify-between">
                    <p className="text-green-600 font-medium">nuvetra@gmail.com</p>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-1">Fintrin Support</h4>
                  <p className="text-sm text-gray-600 mb-2">Financial AI and tracking related queries</p>
                  <div className="flex items-center justify-between">
                    <p className="text-green-600 font-medium">fintrinal@gmail.com</p>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Support Ticket Form */}
          <Card className="mb-12 mt-9">
            <CardHeader>
              <CardTitle>Submit Support Ticket</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactNumber">Contact Number</Label>
                    <Input
                      id="contactNumber"
                      name="contactNumber"
                      placeholder="Enter your mobile number"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Issue Category</Label>
                  <Select value={formData.category} onValueChange={handleCategoryChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Inquiry</SelectItem>
                      <SelectItem value="product">Product Information</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="issue">Describe Your Issue</Label>
                  <Textarea
                    id="issue"
                    name="issue"
                    placeholder="Please describe your issue in detail..."
                    rows={5}
                    value={formData.issue}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <UploadIcon />
                  <Label htmlFor="files">Attach Files (Optional)</Label>
                  <Input
                    id="files"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="cursor-pointer"
                  />
                  <p className="text-sm text-gray-500">Upload screenshots, documents, or other files</p>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Submit Support Ticket
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div >
    </>
  );
};

export default SupportPage;