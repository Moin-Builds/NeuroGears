import * as React from "react"
import { Container } from "@/components/layout/Container"
import { ChatBotInterface } from "@/components/sections/chatbot/ChatBotInterface"

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

        <ChatBotInterface />
      </Container>
    </div>
  )
}
