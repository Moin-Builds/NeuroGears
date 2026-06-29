"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Phone, Mail, User } from "lucide-react"
import type { BookingData } from "./BookingWizard"

interface StepProps {
  data: BookingData
  updateData: (data: Partial<BookingData>) => void
}

const BRANCHES = [
  { id: "b1", name: "Lahore Branch", address: "Lahore, Pakistan" },
  { id: "b2", name: "Karachi Branch", address: "Karachi, Pakistan" },
  { id: "b3", name: "Islamabad Branch", address: "Islamabad, Pakistan" },
  { id: "b4", name: "Faisalabad Branch", address: "Faisalabad, Pakistan" },
  { id: "b5", name: "Gujranwala Branch", address: "Gujranwala, Pakistan" },
  { id: "b6", name: "Sargodha Branch", address: "Sargodha, Pakistan" },
  { id: "b7", name: "Multan Branch", address: "Multan, Pakistan" },
  { id: "b8", name: "Peshawar Branch", address: "Peshawar, Pakistan" },
]

export function Step4Branch({ data, updateData }: StepProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">Select a Branch to View Contact Info</h3>
        <p className="text-muted-foreground">Reach out to us directly for any immediate assistance.</p>
      </div>
      <div className="space-y-4">
        {BRANCHES.map((branch) => {
          const isSelected = data.branch === branch.id

          return (
            <motion.div
              key={branch.id}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => updateData({ branch: branch.id })}
              className={`relative cursor-pointer p-6 rounded-xl border transition-all duration-300 flex flex-col gap-4 ${
                isSelected 
                  ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(220,38,38,0.2)]" 
                  : "bg-white/5 border-white/10 hover:border-white/30"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${isSelected ? "bg-primary/20" : "bg-black/50"}`}>
                  <MapPin className={`w-6 h-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{branch.name}</h3>
                  <p className="text-sm text-muted-foreground">{branch.address}</p>
                </div>

                {isSelected && (
                  <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(220,38,38,1)]" />
                )}
              </div>

              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex items-center gap-2 text-white/90">
                      <User className="w-4 h-4 text-primary" />
                      <span className="font-medium">Muhammad Moin</span>
                    </div>
                    <a 
                      href="tel:+92256443147" 
                      className="flex items-center gap-2 text-white/90 hover:text-primary transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-primary/50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+92-256443147</span>
                    </a>
                    <a 
                      href="mailto:sheikhmoin463@gmail.com" 
                      className="flex items-center gap-2 text-white/90 hover:text-primary transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-primary/50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      <span>sheikhmoin463@gmail.com</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
