import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  language?: 'en' | 'hi';
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your smart financial assistant. How can I help you with finance, accounting, taxes, or investments today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'hi'>('en');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
      language: selectedLanguage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response (replace with actual n8n API call)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your question! I'm here to help with your financial queries. This is a demo response - in production, this would connect to our n8n AI agent for real-time financial assistance.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };


  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-elegant border border-gray-100">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/b1ec2f82-0fc4-4a95-8fa2-616c6ae3c2c2.png" 
                alt="Fintrin.ai Logo" 
                className="h-5 w-auto"
              />
              <span className="font-semibold text-gray-900">Assistant</span>
            </div>
            <p className="text-sm text-gray-500">Comprehensive Financial Assistance</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant={selectedLanguage === 'en' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedLanguage('en')}
            className="text-xs"
          >
            EN
          </Button>
          <Button
            variant={selectedLanguage === 'hi' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedLanguage('hi')}
            className="text-xs"
          >
            हिं
          </Button>
          <Languages className="w-4 h-4 text-gray-400 ml-2" />
        </div>
      </div>

      {/* Messages Area */}
      <div className="h-96 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                message.isUser
                  ? 'bg-primary text-white ml-4'
                  : 'bg-gray-50 text-gray-900 mr-4'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <span className={`text-xs mt-2 block ${
                message.isUser ? 'text-white/70' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-50 text-gray-900 mr-4 p-4 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-gray-100">
        <div className="flex gap-3">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={selectedLanguage === 'en' ? "Ask about finance, taxes, investments..." : "वित्त, कर, निवेश के बारे में पूछें..."}
            className="flex-1 rounded-full border-gray-200 focus:border-primary"
            disabled={isTyping}
          />
          <Button
            onClick={sendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="rounded-full w-12 h-12 p-0 flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;