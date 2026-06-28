"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { HeroBadge } from "./HeroBadge"
import { HeroActions } from "./HeroActions"
import { HeroStats } from "./HeroStats"

export function HeroContent() {
  return (
    <div className="flex flex-col items-start text-left max-w-2xl">
      <HeroBadge />
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 mb-4 leading-[1.1]"
      >
        Premium Vehicle Care, <br />
        <span className="text-white">Powered by AI.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-base md:text-lg text-zinc-400 leading-relaxed mb-6 max-w-xl"
      >
        Book professional car and bike services, get instant AI-driven vehicle diagnosis, and track your maintenance history in one seamlessly modern platform.
      </motion.p>

      <HeroActions />
      <HeroStats />
    </div>
  )
}
