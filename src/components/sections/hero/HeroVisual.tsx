"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { ShieldCheck, Cpu, CheckCircle2 } from "lucide-react"

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center"
    >
      {/* Central Image Placeholder / Composition */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-border">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1600" 
          alt="Luxury Vehicle" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* Floating Card 1: AI Diagnosis */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 -left-6 lg:-left-12 z-20"
      >
        <Card variant="premium" className="w-64 p-4 border border-border bg-card/90 backdrop-blur-sm shadow-xl">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <Cpu className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Engine Diagnostics</p>
              <p className="text-xs text-primary">Scanning active...</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary" 
                initial={{ w: "0%" }} 
                animate={{ width: "85%" }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
              />
            </div>
            <p className="text-xs text-muted-foreground text-right">85% Complete</p>
          </div>
        </Card>
      </motion.div>

      {/* Floating Card 2: Booking Success */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-24 -right-6 lg:-right-12 z-20"
      >
        <Card variant="glass" className="w-56 p-4 border border-border bg-card/90 backdrop-blur-sm shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-full text-green-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Booking Confirmed</p>
              <p className="text-xs text-muted-foreground">Today at 14:00</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Floating Card 3: Service Shield */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-8 z-20"
      >
        <Card variant="glass" className="p-3 flex items-center justify-center rounded-full border border-border bg-card/90 backdrop-blur-sm shadow-md">
          <ShieldCheck className="w-6 h-6 text-primary" />
        </Card>
      </motion.div>
    </motion.div>
  )
}
