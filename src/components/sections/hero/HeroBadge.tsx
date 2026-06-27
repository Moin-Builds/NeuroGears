"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/Badge"

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary mb-6 py-1.5 px-4 flex items-center gap-2 w-fit shadow-[0_0_15px_rgba(220,38,38,0.2)]">
        <Sparkles className="w-3.5 h-3.5" />
        <span className="font-medium tracking-wide">AI-Powered Automobile Platform</span>
      </Badge>
    </motion.div>
  )
}
