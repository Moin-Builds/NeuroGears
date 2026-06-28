"use client"

import * as React from "react"
import { Container } from "@/components/layout/Container"
import { ChatBotInterface } from "@/components/sections/chatbot/ChatBotInterface"
import { Bot, AlertTriangle, Phone } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export default function ChatBotPage() {
  return (
    <div className="min-h-screen pt-40 lg:pt-48 pb-24 bg-background relative overflow-hidden flex flex-col">
      {/* Background styling elements matching the premium aesthetic */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <Container className="relative z-10 flex-1 flex flex-col items-center pt-8 md:pt-12">
        <div className="text-center mb-8 max-w-2xl mx-auto mt-16 md:mt-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            AI Workshop Assistant
          </h1>
          <p className="text-lg text-slate-400">
            Describe your vehicle's issues and get instant preliminary diagnostics powered by NeuroGears AI.
          </p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto mb-12">
          {/* Card 1: Start AI Diagnosis */}
          <Card variant="glass" className="flex flex-col p-6 bg-slate-900 border-primary/20 hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Start AI Diagnosis</h3>
            <p className="text-sm text-slate-400 mb-6 flex-1">
              Upload an image or describe your vehicle problem for instant help.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
              Start Diagnosis
            </Button>
          </Card>

          {/* Card 2: Emergency Roadside Assistance */}
          <Card variant="glass" className="flex flex-col p-6 bg-slate-900 border-red-500/30 hover:border-red-500/60 shadow-[0_0_15px_rgba(220,38,38,0.1)] transition-colors">
            <div className="p-3 bg-red-500/20 rounded-full w-fit mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Emergency Assistance</h3>
            <p className="text-sm text-slate-400 mb-6 flex-1">
              Vehicle stopped? Need urgent help? Find the nearest NeuroGears workshop instantly.
            </p>
            <Link href="/emergency" className="w-full">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Get Emergency Help
              </Button>
            </Link>
          </Card>

          {/* Card 3: Contact Support */}
          <Card variant="glass" className="flex flex-col p-6 bg-slate-900 border-blue-500/20 hover:border-blue-500/50 transition-colors">
            <div className="p-3 bg-blue-500/10 rounded-full w-fit mb-4">
              <Phone className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Contact Support</h3>
            <p className="text-sm text-slate-400 mb-6 flex-1">
              Speak directly with our support team for any queries or manual bookings.
            </p>
            <a href="tel:+15550123456" className="w-full">
              <Button variant="outline" className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
                Call Support
              </Button>
            </a>
          </Card>
        </div>

        <ChatBotInterface />
      </Container>
    </div>
  )
}
