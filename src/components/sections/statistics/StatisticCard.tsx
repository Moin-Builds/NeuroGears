"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/Card"
import { Counter } from "@/components/shared/Counter"
import { LucideIcon } from "lucide-react"

export interface StatisticCardProps {
  title: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  icon: LucideIcon
  delay?: number
}

export function StatisticCard({ 
  title, 
  value, 
  prefix, 
  suffix, 
  decimals, 
  icon: Icon, 
  delay = 0 
}: StatisticCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Card 
        variant="glass" 
        className="h-full flex flex-col items-center justify-center p-8 text-center transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_25px_rgba(220,38,38,0.15)]"
      >
        <div className="p-3 bg-primary/10 rounded-full mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        
        <h4 className="text-4xl font-bold text-white mb-2 tracking-tight">
          <Counter 
            value={value} 
            prefix={prefix} 
            suffix={suffix} 
            decimals={decimals} 
            duration={2.5} 
          />
        </h4>
        
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </p>
      </Card>
    </motion.div>
  )
}
