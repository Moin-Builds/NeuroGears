"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import type { BookingData } from "./BookingWizard"

interface StepProps {
  data: BookingData
  updateData: (data: Partial<BookingData>) => void
}

const ADDONS = [
  { id: "a1", name: "Premium Interior Detailing", price: "Rs. 5,000", description: "Deep cleaning of carpets, seats, and dashboard." },
  { id: "a2", name: "Engine Bay Wash", price: "Rs. 3,000", description: "Safe degreasing and cleaning of the engine compartment." },
  { id: "a3", name: "AC Sanitization", price: "Rs. 2,000", description: "Eliminate odors and bacteria from your AC vents." },
  { id: "a4", name: "Pick-up & Drop-off Service", price: "Rs. 1,500", description: "We will fetch your vehicle and return it once done." },
]

export function Step6Addons({ data, updateData }: StepProps) {
  const toggleAddon = (addonId: string) => {
    if (data.addons.includes(addonId)) {
      updateData({ addons: data.addons.filter(id => id !== addonId) })
    } else {
      updateData({ addons: [...data.addons, addonId] })
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Enhance Your Service</h3>
        <p className="text-muted-foreground">Select any optional add-ons you'd like to include with your booking.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ADDONS.map((addon) => {
          const isSelected = data.addons.includes(addon.id)

          return (
            <motion.div
              key={addon.id}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => toggleAddon(addon.id)}
              className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                isSelected 
                  ? "bg-primary/10 border-primary" 
                  : "bg-white/5 border-white/10 hover:border-white/30"
              }`}
            >
              <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                isSelected ? "bg-primary border-primary" : "border-white/30"
              }`}>
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-white">{addon.name}</h4>
                  <span className="text-primary font-bold">{addon.price}</span>
                </div>
                <p className="text-xs text-muted-foreground">{addon.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
