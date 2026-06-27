"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import type { BookingData } from "./BookingWizard"

interface StepProps {
  data: BookingData
  updateData: (data: Partial<BookingData>) => void
}

const BRANCHES = [
  { id: "b1", name: "Downtown Service Center", address: "123 Main St, New York, NY", distance: "2.4 miles" },
  { id: "b2", name: "Northside Auto Spa", address: "456 North Ave, New York, NY", distance: "5.1 miles" },
  { id: "b3", name: "Westend Performance Hub", address: "789 West Blvd, New York, NY", distance: "7.8 miles" },
]

export function Step4Branch({ data, updateData }: StepProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <div className="space-y-4">
        {BRANCHES.map((branch) => {
          const isSelected = data.branch === branch.id

          return (
            <motion.div
              key={branch.id}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => updateData({ branch: branch.id })}
              className={`relative cursor-pointer p-6 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                isSelected 
                  ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(220,38,38,0.2)]" 
                  : "bg-white/5 border-white/10 hover:border-white/30"
              }`}
            >
              <div className={`p-3 rounded-full ${isSelected ? "bg-primary/20" : "bg-black/50"}`}>
                <MapPin className={`w-6 h-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{branch.name}</h3>
                <p className="text-sm text-muted-foreground">{branch.address}</p>
              </div>

              <div className="text-sm font-medium text-white bg-white/10 px-3 py-1 rounded-full">
                {branch.distance}
              </div>

              {isSelected && (
                <div className="absolute top-1/2 -translate-y-1/2 right-6 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(220,38,38,1)]" />
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
