"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SERVICES_DATA } from "@/data/services"
import { CheckCircle2, Clock, CarFront, ShieldCheck } from "lucide-react"
import type { BookingData } from "./BookingWizard"

interface StepProps {
  data: BookingData
  updateData: (data: Partial<BookingData>) => void
}

export function Step2Package({ data, updateData }: StepProps) {
  const selectedService = SERVICES_DATA.find(s => s.slug === data.serviceSlug)

  if (!selectedService) {
    return <div className="text-center text-muted-foreground py-12">Please select a service first.</div>
  }

  if (!selectedService.packages || selectedService.packages.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-bold text-white mb-2">Standard Service Selected</h3>
        <p className="text-muted-foreground mb-6">This service does not have tiered packages. Click continue.</p>
        <button 
          onClick={() => updateData({ packageId: "standard" })}
          className={`px-6 py-2 rounded-lg border ${data.packageId === "standard" ? "bg-primary text-white border-primary" : "bg-white/5 text-white border-white/10"}`}
        >
          Confirm Standard Package
        </button>
      </div>
    )
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedService.packages.map((pkg: any) => {
          const packageId = pkg.name.toLowerCase().replace(" ", "-")
          const isSelected = data.packageId === packageId

          return (
            <motion.div
              key={pkg.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => updateData({ packageId })}
              className={`relative cursor-pointer p-6 rounded-xl border transition-all duration-300 flex flex-col ${
                isSelected 
                  ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(220,38,38,0.2)]" 
                  : "bg-white/5 border-white/10 hover:border-white/30"
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(220,38,38,1)]" />
              )}
              {pkg.isPopular && !isSelected && (
                <div className="absolute top-4 right-4 text-xs font-bold text-primary tracking-wider uppercase">Popular</div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="text-3xl font-extrabold text-white mb-6">{pkg.price}</div>

              <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10 mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase flex items-center gap-1 mb-1">
                    <Clock className="w-3 h-3" /> Time
                  </span>
                  <span className="text-xs font-medium text-white">{pkg.estimatedTime}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase flex items-center gap-1 mb-1">
                    <ShieldCheck className="w-3 h-3 text-primary" /> Warranty
                  </span>
                  <span className="text-xs font-medium text-white">{pkg.warranty}</span>
                </div>
              </div>

              <div className="flex-1 space-y-3">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
