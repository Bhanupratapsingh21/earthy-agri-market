"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, Bot, Send, User, Loader2, Camera, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function KrishiAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "नमस्कार! मैं राम सिंह हूँ, 40 साल से खेती कर रहा हूँ। मैं आपकी खेती की समस्याओं में मदद कर सकता हूँ। आप मुझसे फसल, मिट्टी, कीट-पतंगे, मौसम या कोई भी खेती से जुड़ा सवाल पूछ सकते हैं।",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      // Use axios and environment variable for API base URL
      // Make sure to install axios: npm install axios

      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";
      const response = await axios.post(
        `${apiBaseUrl}/chat`,
        {
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error sending message:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "माफ करिए, मुझे कुछ तकनीकी समस्या हो रही है। कृपया थोड़ी देर बाद कोशिश करें।",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "गेहूं की बुआई का सही समय क्या है?",
    "मिट्टी की जांच कैसे करें?",
    "धान में कीड़े लग गए हैं, क्या करूं?",
    "बारिश के बाद फसल की देखभाल कैसे करें?",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5" />
          <Bot className="w-6 h-6" />
          <div>
            <h1 className="text-xl font-semibold">Krishi Sahayak AI</h1>
            <p className="text-green-100 text-sm">आपका व्यक्तिगत खेती सलाहकार</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[calc(100vh-80px)]">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === "user" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
                    }`}
                >
                  {message.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <Card className={`${message.role === "user" ? "bg-blue-500 text-white" : "bg-white border-green-200"}`}>
                  <CardContent className="p-3">
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-2 ${message.role === "user" ? "text-blue-100" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString("hi-IN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <Card className="bg-white border-green-200">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <p className="text-sm text-gray-600">राम सिंह जी सोच रहे हैं...</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <p className="text-sm text-gray-600 mb-2">आम सवाल:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs h-auto py-2 px-3 bg-white hover:bg-green-50 border-green-200"
                  onClick={() => setInputMessage(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t bg-white p-4">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="अपना सवाल यहाँ लिखें... (हिंदी या अंग्रेजी में)"
                className="min-h-[50px] max-h-[120px] resize-none pr-20"
                disabled={isLoading}
              />
              <div className="absolute right-2 bottom-2 flex gap-1">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Camera className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Mic className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 h-[50px]"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            राम सिंह जी 40 साल के अनुभव के साथ आपकी मदद करने के लिए तैयार हैं
          </p>
        </div>
      </div>
    </div>
  )
}
