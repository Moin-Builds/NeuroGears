"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Cpu } from "lucide-react"
import { buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto"
    >
      <Link 
        href="/booking" 
        className={cn(buttonVariants({ size: "lg", variant: "default" }), "w-full sm:w-auto text-base group")}
      >
        Book a Service
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
      <Link 
        href="/services/ai-diagnosis" 
        className={cn(buttonVariants({ size: "lg", variant: "glass" }), "w-full sm:w-auto text-base group")}
      >
        <Cpu className="w-4 h-4 mr-2 text-primary" />
        Explore AI Diagnosis
      </Link>
    </motion.div>
  )
}
