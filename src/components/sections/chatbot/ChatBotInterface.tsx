"use client"

import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, AlertTriangle, Paperclip, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { cn } from "@/lib/utils"
import { EmergencyAssistanceCard } from "@/components/sections/emergency/EmergencyAssistanceCard"

interface Message {
  id: string;
  role: "bot" | "user";
  content: string;
  timestamp: Date;
  imageUrl?: string;
  isEmergency?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    role: "bot",
    content: "Hello! I am your AI Workshop Assistant. If you're experiencing a vehicle emergency or need quick diagnostic advice, please describe the symptoms below (e.g., 'My engine is making a grinding noise' or 'Check engine light is flashing').",
    timestamp: new Date(),
  }
];

export function ChatBotInterface() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && !selectedImage) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
      ...(selectedImage && { imageUrl: selectedImage }),
    };

    // Check for emergency keywords
    const lowerInput = input.toLowerCase();
    const emergencyKeywords = ["accident", "brake failure", "smoke", "engine failure", "car not starting", "overheating"];
    const isEmergency = emergencyKeywords.some(keyword => lowerInput.includes(keyword));

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setSelectedImage(null);
    setIsTyping(true);

    // Simulate AI response
    let botResponseText = "";
    if (isEmergency) {
      botResponseText = "I've detected a potential emergency situation based on your description. Please review our emergency assistance options below and get to a safe location immediately.";
    } else if (selectedImage) {
      botResponseText = "I've analyzed the image you uploaded. While I cannot repair the vehicle remotely, I can see that this issue needs professional attention. For your safety, I suggest you visit a nearby repair shop for a thorough inspection. Would you like me to find the nearest NeuroGears partnered shop?";
    } else {
      botResponseText = "I've analyzed your symptoms. Based on my AI diagnostics database, this sounds like an issue that requires a physical inspection. Would you like me to connect you with our emergency roadside assistance or schedule an immediate tow to our premium workshop?";
    }

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: botResponseText,
        timestamp: new Date(),
        isEmergency,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[70vh] max-h-[800px] w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-background/50 backdrop-blur-md relative">
      
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="p-2 rounded-full bg-destructive/20 border border-destructive/30 text-destructive shadow-[0_0_15px_rgba(220,38,38,0.3)]">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-bold text-lg text-white">Emergency AI Diagnosis</h2>
          <p className="text-xs text-slate-400">Powered by NeuroGears Diagnostic Engine</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={cn("flex w-full", msg.role === "user" ? "justify-end" : "justify-start")}
          >
            <div className={cn("flex gap-3 max-w-[85%] md:max-w-[75%]", msg.role === "user" ? "flex-row-reverse" : "flex-row")}>
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                msg.role === "user" 
                  ? "bg-primary text-primary-foreground border-primary/50" 
                  : "bg-slate-800 text-white border-slate-700"
              )}>
                {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              
              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed",
                msg.role === "user" 
                  ? "bg-primary text-primary-foreground rounded-tr-sm shadow-[0_0_15px_rgba(220,38,38,0.2)]" 
                  : "bg-slate-800/80 text-slate-200 rounded-tl-sm border border-white/5"
              )}>
                {msg.imageUrl && (
                  <div className="mb-3 rounded-lg overflow-hidden border border-white/10">
                    <img src={msg.imageUrl} alt="Uploaded attachment" className="max-w-full h-auto max-h-48 object-cover" />
                  </div>
                )}
                {msg.content}
                {msg.isEmergency && (
                  <div className="mt-4 w-full">
                    <EmergencyAssistanceCard compact={true} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex w-full justify-start">
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border bg-slate-800 text-white border-slate-700">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/80 text-slate-400 rounded-tl-sm border border-white/5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-black/40 border-t border-white/10 backdrop-blur-xl">
        {selectedImage && (
          <div className="mb-3 relative inline-block">
            <div className="relative rounded-lg overflow-hidden border border-primary/30 w-24 h-24">
              <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <button 
              type="button" 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 bg-slate-800 text-white rounded-full p-1 border border-white/20 hover:bg-slate-700 hover:text-red-400 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}
        <form onSubmit={handleSend} className="flex items-center gap-2 relative">
          <input 
            type="file" 
            accept="image/*" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            className="hidden" 
          />
          <Button 
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0 h-12 w-12 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
            onClick={() => fileInputRef.current?.click()}
            disabled={isTyping}
          >
            <Paperclip className="w-5 h-5" />
          </Button>
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={selectedImage ? "Add a message with your image..." : "Describe your vehicle's symptoms..."}
            className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-full pl-4 pr-12 focus-visible:ring-primary focus-visible:border-primary transition-all h-12"
            disabled={isTyping}
          />
          <Button 
            type="submit" 
            size="icon" 
            className="absolute right-1.5 top-1.5 bottom-1.5 h-auto w-9 rounded-full bg-primary hover:bg-primary/90 text-white shadow-sm"
            disabled={(!input.trim() && !selectedImage) || isTyping}
          >
            <Send className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>

    </div>
  )
}
