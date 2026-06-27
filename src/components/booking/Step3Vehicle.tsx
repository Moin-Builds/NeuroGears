"use client"

import * as React from "react"
import type { BookingData } from "./BookingWizard"

interface StepProps {
  data: BookingData
  updateData: (data: Partial<BookingData>) => void
}

export function Step3Vehicle({ data, updateData }: StepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateData({
      vehicle: { ...data.vehicle, [e.target.name]: e.target.value }
    })
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Vehicle Make</label>
          <input 
            type="text" 
            name="make"
            placeholder="e.g. Toyota, BMW" 
            value={data.vehicle.make}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Vehicle Model</label>
          <input 
            type="text" 
            name="model"
            placeholder="e.g. Camry, X5" 
            value={data.vehicle.model}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Manufacturing Year</label>
          <input 
            type="text" 
            name="year"
            placeholder="e.g. 2021" 
            value={data.vehicle.year}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white">License Plate Number</label>
          <input 
            type="text" 
            name="plate"
            placeholder="e.g. ABC 1234" 
            value={data.vehicle.plate}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors uppercase"
          />
        </div>

      </div>

      <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
        <p className="text-sm text-primary">
          <strong>Privacy Note:</strong> Your vehicle details are securely stored and only used to prepare the necessary parts for your service appointment.
        </p>
      </div>
    </div>
  )
}
