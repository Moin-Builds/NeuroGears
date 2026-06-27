"use client"

import * as React from "react"
import { createContext, useContext, useState } from "react"
import type { SubService, BookingType, ServiceAddon } from "@/data/services/types"

interface ServiceCartState {
  serviceSlug: string | null
  selectedSubServices: SubService[]
  selectedBookingType: BookingType | null
  selectedAddons: ServiceAddon[]
}

interface ServiceCartContextType extends ServiceCartState {
  setServiceSlug: (slug: string) => void
  toggleSubService: (subService: SubService) => void
  setBookingType: (type: BookingType) => void
  toggleAddon: (addon: ServiceAddon) => void
  calculateTotal: () => { subtotal: number; markup: number; addonsTotal: number; grandTotal: number }
  clearCart: () => void
}

const ServiceCartContext = createContext<ServiceCartContextType | undefined>(undefined)

export function ServiceCartProvider({ children }: { children: React.ReactNode }) {
  const [serviceSlug, setServiceSlug] = useState<string | null>(null)
  const [selectedSubServices, setSelectedSubServices] = useState<SubService[]>([])
  const [selectedBookingType, setSelectedBookingType] = useState<BookingType | null>(null)
  const [selectedAddons, setSelectedAddons] = useState<ServiceAddon[]>([])

  const toggleSubService = (subService: SubService) => {
    setSelectedSubServices(prev => {
      const exists = prev.find(item => item.id === subService.id)
      if (exists) return prev.filter(item => item.id !== subService.id)
      return [...prev, subService]
    })
  }

  const toggleAddon = (addon: ServiceAddon) => {
    setSelectedAddons(prev => {
      const exists = prev.find(item => item.id === addon.id)
      if (exists) return prev.filter(item => item.id !== addon.id)
      return [...prev, addon]
    })
  }

  const calculateTotal = () => {
    const subtotal = selectedSubServices.reduce((sum, item) => sum + item.startingPrice, 0)
    const markup = selectedBookingType ? (subtotal * selectedBookingType.markupPercentage) / 100 : 0
    const addonsTotal = selectedAddons.reduce((sum, item) => sum + item.price, 0)
    const grandTotal = subtotal + markup + addonsTotal

    return { subtotal, markup, addonsTotal, grandTotal }
  }

  const clearCart = () => {
    setSelectedSubServices([])
    setSelectedBookingType(null)
    setSelectedAddons([])
  }

  return (
    <ServiceCartContext.Provider value={{
      serviceSlug,
      selectedSubServices,
      selectedBookingType,
      selectedAddons,
      setServiceSlug,
      toggleSubService,
      setBookingType: setSelectedBookingType,
      toggleAddon,
      calculateTotal,
      clearCart
    }}>
      {children}
    </ServiceCartContext.Provider>
  )
}

export function useServiceCart() {
  const context = useContext(ServiceCartContext)
  if (context === undefined) {
    throw new Error("useServiceCart must be used within a ServiceCartProvider")
  }
  return context
}
