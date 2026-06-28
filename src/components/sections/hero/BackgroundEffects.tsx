"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Vehicle Background Image */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Vehicle Hero" 
          className="w-full h-full object-cover object-center lg:object-right"
        />
        
        {/* Seamless Gradient Mask (Fades left side into charcoal) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent lg:via-[#0a0a0a]/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Cinematic Lighting Enhancements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[180px]"
      />
      
      {/* Dark Ambient Haze for readability */}
      <div className="absolute inset-0 bg-[#0a0a0a]/30" />
    </div>
  )
}
