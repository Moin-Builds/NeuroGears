"use client"

import * as React from "react"
import { motion } from "framer-motion"

const STATS = [
  { label: "Happy Customers", value: "5,000+" },
  { label: "Active Branches", value: "25+" },
  { label: "Expert Support", value: "24/7" },
]

export function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex items-center gap-8 pt-6 border-t border-border w-full"
    >
      {STATS.map((stat, index) => (
        <div key={index} className="flex flex-col">
          <span className="text-2xl font-bold text-white">{stat.value}</span>
          <span className="text-sm text-zinc-400">{stat.label}</span>
        </div>
      ))}
    </motion.div>
  )
}
