"use client"

import * as React from "react"
import { SERVICES_DATA } from "@/data/services"
import { useServiceCart } from "@/context/ServiceCartContext"
import { CheckCircle2 } from "lucide-react"
import type { BookingData } from "./BookingWizard"

interface StepProps {
  data: BookingData
  updateData: (data: Partial<BookingData>) => void
}

export function Step7Summary({ data }: StepProps) {
  const service = SERVICES_DATA.find(s => s.slug === data.serviceSlug)
  const pkg = service?.packages?.find(p => p.name.toLowerCase().replace(" ", "-") === data.packageId)
  
  const { selectedSubServices, selectedBookingType, selectedAddons, calculateTotal } = useServiceCart()
  const isCustomCart = selectedSubServices.length > 0

  const { grandTotal, subtotal, markup, addonsTotal } = calculateTotal()
  const displayPrice = isCustomCart ? `Rs. ${grandTotal.toLocaleString()}` : (pkg?.price || service?.startingPrice || "TBD")
  const displayDuration = isCustomCart ? "Calculated by AI" : (pkg?.estimatedTime || service?.estimatedDuration || "TBD")

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <div className="bg-black/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl">
        <div className="p-6 bg-primary/10 border-b border-primary/20 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Booking Summary</h3>
            <p className="text-sm text-primary">Please review your details before confirming.</p>
          </div>
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Service & Package Details */}
            <div>
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Service Selected</h4>
              <p className="text-lg font-semibold text-white">{service?.title || "Not selected"}</p>
              {isCustomCart ? (
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-primary">Custom Builder</p>
                  <p className="text-xs text-muted-foreground">{selectedSubServices.length} Repairs Selected</p>
                  {selectedBookingType && <p className="text-xs text-muted-foreground">Priority: {selectedBookingType.name}</p>}
                </div>
              ) : (
                pkg && <p className="text-sm text-primary mt-1">Package: {pkg.name}</p>
              )}
            </div>

            {/* Date & Time */}
            <div>
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Appointment</h4>
              <p className="text-white">
                {data.date ? data.date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }) : "Not selected"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{data.timeSlot || "Any time"}</p>
            </div>

            {/* Vehicle Details */}
            <div>
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Vehicle</h4>
              <p className="text-white">
                {data.vehicle.year} {data.vehicle.make} {data.vehicle.model}
              </p>
              <p className="text-sm text-muted-foreground mt-1 uppercase">{data.vehicle.plate}</p>
            </div>

            {/* Addons */}
            <div>
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Add-ons</h4>
              {(isCustomCart ? selectedAddons.length > 0 : data.addons.length > 0) ? (
                <ul className="text-sm text-white list-disc list-inside">
                  {isCustomCart 
                    ? selectedAddons.map(a => <li key={a.id}>{a.name}</li>)
                    : data.addons.map(addonId => <li key={addonId}>{addonId}</li>)
                  }
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">None selected</p>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-end justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Estimated Duration</p>
              <p className="text-white font-medium">{displayDuration}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Estimated Total</p>
              <p className="text-4xl font-extrabold text-white">{displayPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
