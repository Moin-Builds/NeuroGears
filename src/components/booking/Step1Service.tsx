"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SERVICES_DATA, IconMap } from "@/data/services"
import type { BookingData } from "./BookingWizard"

interface StepProps {
  data: BookingData
  updateData: (data: Partial<BookingData>) => void
}

export function Step1Service({ data, updateData }: StepProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES_DATA.map((service) => {
          const Icon = IconMap[service.icon]
          const isSelected = data.serviceSlug === service.slug

          return (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                // When service changes, we should clear the package choice
                updateData({ serviceSlug: service.slug, packageId: "" })
              }}
              className={`relative cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
                isSelected 
                  ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(220,38,38,0.2)]" 
                  : "bg-white/5 border-white/10 hover:border-white/30"
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(220,38,38,1)]" />
              )}
              <div className={`p-3 w-fit rounded-lg mb-4 ${isSelected ? "bg-primary/20" : "bg-black/50"}`}>
                {Icon && <Icon className={`w-6 h-6 ${isSelected ? "text-primary" : "text-white"}`} />}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
