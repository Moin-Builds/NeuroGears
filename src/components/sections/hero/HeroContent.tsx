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
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 mb-6 leading-[1.1]"
      >
        Premium Vehicle Care, <br />
        <span className="text-white">Powered by AI.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
      >
        Book professional car and bike services, get instant AI-driven vehicle diagnosis, and track your maintenance history in one seamlessly modern platform.
      </motion.p>

      <HeroActions />
      <HeroStats />
    </div>
  )
}
