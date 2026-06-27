"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { useServiceCart } from "@/context/ServiceCartContext"
import type { DetailedServiceData, ServiceCategory, SubService } from "@/data/services/types"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Check, ShieldCheck, Clock } from "lucide-react"

export function ServiceInteractiveBuilder({ service }: { service: DetailedServiceData }) {
  const { 
    setServiceSlug, 
    selectedSubServices, 
    toggleSubService, 
    selectedBookingType,
    setBookingType,
    selectedAddons,
    toggleAddon,
    calculateTotal 
  } = useServiceCart()

  const router = useRouter()

  // Initialize service slug
  useEffect(() => {
    setServiceSlug(service.slug)
    // Pre-select Normal booking by default if not set
    if (!selectedBookingType && service.bookingTypes.length > 0) {
      setBookingType(service.bookingTypes[0])
    }
  }, [service.slug, setServiceSlug, service.bookingTypes, setBookingType])

  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    service.categories.length > 0 ? service.categories[0].id : ""
  )

  if (service.categories.length === 0) {
    return <div className="py-20 text-center text-muted-foreground">Detailed categories not configured for this service yet.</div>
  }

  const activeCategory = service.categories.find(c => c.id === activeCategoryId)

  const { subtotal, markup, addonsTotal, grandTotal } = calculateTotal()

  const handleBookNow = () => {
    if (selectedSubServices.length === 0) {
      alert("Please select at least one repair service.")
      return
    }
    // Pass "custom" as package to automatically bypass Step 1 and Step 2 in the wizard
    router.push(`/booking?service=${service.slug}&package=custom`)
  }

  return (
    <Section className="bg-black/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* Main Interactive Panel */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Category Tabs */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">1. Select Repair Category</h2>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {service.categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                      activeCategoryId === cat.id 
                        ? "bg-primary text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]" 
                        : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sub Services List */}
            <div className="min-h-[300px]">
              <h2 className="text-2xl font-bold text-white mb-6">2. Available {activeCategory?.name} Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                  {activeCategory?.subServices.map(sub => {
                    const isSelected = selectedSubServices.some(s => s.id === sub.id)

                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={sub.id}
                        onClick={() => toggleSubService(sub)}
                        className={`relative cursor-pointer p-5 rounded-xl border transition-all duration-300 flex flex-col h-full ${
                          isSelected 
                            ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(220,38,38,0.15)]" 
                            : "bg-white/5 border-white/10 hover:border-white/30"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-[0_0_10px_rgba(220,38,38,0.8)]">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                        {sub.isRecommended && !isSelected && (
                          <span className="absolute top-4 right-4 text-[10px] font-bold text-primary uppercase tracking-wider">
                            Recommended
                          </span>
                        )}
                        
                        <h3 className="font-bold text-white mb-2 pr-8">{sub.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-1">{sub.description}</p>
                        
                        <div className="flex items-end justify-between mt-auto pt-4 border-t border-white/5">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" /> {sub.estimatedTime}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <ShieldCheck className="w-3 h-3 text-primary" /> {sub.warranty}
                            </div>
                          </div>
                          <div className="text-lg font-bold text-white">Rs. {sub.startingPrice.toLocaleString()}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* Booking Type */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">3. Booking Priority</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.bookingTypes.map(type => {
                  const isSelected = selectedBookingType?.id === type.id
                  return (
                    <div
                      key={type.id}
                      onClick={() => setBookingType(type)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                        isSelected 
                          ? "bg-primary/10 border-primary" 
                          : "bg-white/5 border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{type.name}</h4>
                        {isSelected && <Check className="w-4 h-4 text-primary" />}
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{type.description}</p>
                      <div className="text-sm font-bold text-primary">
                        {type.markupPercentage === 0 ? "No Extra Charge" : `+${type.markupPercentage}% Markup`}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Addons */}
            {service.addons.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">4. Optional Add-ons</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.addons.map(addon => {
                    const isSelected = selectedAddons.some(a => a.id === addon.id)
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon)}
                        className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                          isSelected 
                            ? "bg-primary/10 border-primary" 
                            : "bg-white/5 border-white/10 hover:border-white/30"
                        }`}
                      >
                        <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                          isSelected ? "bg-primary border-primary" : "border-white/30"
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-semibold text-white">{addon.name}</h4>
                            <span className="text-primary font-bold">Rs. {addon.price.toLocaleString()}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{addon.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Sticky Calculator Sidebar */}
          <div className="lg:col-span-1 relative">
            <div className="sticky top-24 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <h3 className="text-xl font-bold text-white mb-6">Live Price Calculator</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-muted-foreground">Repairs Subtotal ({selectedSubServices.length} items)</span>
                  <span className="font-medium text-white">Rs. {subtotal.toLocaleString()}</span>
                </div>
                
                {selectedSubServices.map(sub => (
                  <div key={sub.id} className="flex justify-between items-start pl-2 border-l-2 border-white/10">
                    <span className="text-xs text-muted-foreground truncate pr-4">{sub.name}</span>
                    <span className="text-xs text-white">Rs. {sub.startingPrice.toLocaleString()}</span>
                  </div>
                ))}

                {markup > 0 && (
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-muted-foreground">Priority Markup ({selectedBookingType?.markupPercentage}%)</span>
                    <span className="font-medium text-primary">+ Rs. {markup.toLocaleString()}</span>
                  </div>
                )}

                {addonsTotal > 0 && (
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-muted-foreground">Add-ons Total</span>
                    <span className="font-medium text-white">+ Rs. {addonsTotal.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-base text-muted-foreground">Grand Total</span>
                  <span className="text-4xl font-extrabold text-white">Rs. {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                onClick={handleBookNow}
              >
                Proceed to Checkout
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                No payment required yet.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  )
}
