"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"
import type { BookingData } from "./BookingWizard"

interface StepProps {
  data: BookingData
  updateData: (data: Partial<BookingData>) => void
}

const TIME_SLOTS = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
]

export function Step5DateTime({ data, updateData }: StepProps) {
  // In a real app, we'd use a DatePicker component from Radix/Shadcn.
  // Using a simplified native input for layout purposes.
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateData({ date: e.target.value ? new Date(e.target.value) : null })
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Date Selection */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" /> Select Date
          </h3>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <input 
              type="date" 
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              onChange={handleDateChange}
              value={data.date ? data.date.toISOString().split('T')[0] : ''}
              min={new Date().toISOString().split('T')[0]} // Cannot book in the past
            />
            <p className="text-xs text-muted-foreground mt-4">
              Select a preferred date. Our team will confirm exact availability shortly after booking.
            </p>
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" /> Select Time Slot
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {TIME_SLOTS.map((time) => {
              const isSelected = data.timeSlot === time

              return (
                <motion.button
                  key={time}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => updateData({ timeSlot: time })}
                  className={`py-3 px-4 rounded-lg border text-sm font-medium transition-colors ${
                    isSelected 
                      ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(220,38,38,0.3)]" 
                      : "bg-white/5 text-muted-foreground border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {time}
                </motion.button>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
