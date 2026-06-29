"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import type { DetailedServiceData } from "@/data/services/types"

export function StickyBookingSummary({ service }: { service: DetailedServiceData }) {
  // Simple scroll spy to show the sticky bar after scrolling past the hero
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400, 500], [0, 0, 1])
  const y = useTransform(scrollY, [0, 400, 500], [100, 100, 0])

  return (
    <motion.div 
      style={{ opacity, y }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <div className="bg-background/80 backdrop-blur-xl border border-white/10 p-4 md:px-6 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-0.5">Starting at</span>
            <span className="text-2xl font-bold text-white">{service.startingPrice}</span>
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button className={cn(buttonVariants({ variant: "glass" }), "hidden md:flex")}>
              View Packages
            </button>
            <Link 
              href={`/booking?service=${service.slug}`}
              className={cn(buttonVariants({ size: "lg", variant: "default" }), "w-full sm:w-auto shadow-[0_0_20px_rgba(220,38,38,0.4)]")}
            >
              Book Service Now
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
