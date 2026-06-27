"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { SERVICES_DATA } from "@/data/services"
import { ChevronRight, Save } from "lucide-react"

// Import steps (we'll build these next)
import { Step1Service } from "./Step1Service"
import { Step2Package } from "./Step2Package"
import { Step3Vehicle } from "./Step3Vehicle"
import { Step4Branch } from "./Step4Branch"
import { Step5DateTime } from "./Step5DateTime"
import { Step6Addons } from "./Step6Addons"
import { Step7Summary } from "./Step7Summary"

export interface BookingData {
  serviceSlug: string
  packageId: string
  vehicle: { make: string; model: string; year: string; plate: string }
  branch: string
  date: Date | null
  timeSlot: string
  addons: string[]
}

const initialData: BookingData = {
  serviceSlug: "",
  packageId: "",
  vehicle: { make: "", model: "", year: "", plate: "" },
  branch: "",
  date: null,
  timeSlot: "",
  addons: []
}

const TOTAL_STEPS = 7
const STEP_TITLES = [
  "Select Service",
  "Choose Package",
  "Vehicle Details",
  "Select Branch",
  "Date & Time",
  "Add-ons",
  "Summary"
]

export function BookingWizard() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<BookingData>(initialData)

  // Initialize from URL params
  useEffect(() => {
    const serviceParam = searchParams.get("service")
    const packageParam = searchParams.get("package")
    
    if (serviceParam) {
      setData(prev => ({ ...prev, serviceSlug: serviceParam }))
      if (packageParam) {
        setData(prev => ({ ...prev, packageId: packageParam }))
        setCurrentStep(3)
      } else {
        setCurrentStep(2)
      }
    }
  }, [searchParams])

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) setCurrentStep(c => c + 1)
    else router.push("/auth/login") // Final step -> Auth placeholder
  }

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(c => c - 1)
  }

  return (
    <Card variant="glass" className="overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {/* Wizard Header / Progress Bar */}
      <div className="p-6 border-b border-white/10 bg-black/40">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm font-medium text-primary mb-1">Step {currentStep} of {TOTAL_STEPS}</p>
            <h2 className="text-2xl font-bold text-white">{STEP_TITLES[currentStep - 1]}</h2>
          </div>
          <Button variant="outline" size="sm" className="hidden sm:flex" onClick={() => alert("Progress saved locally!")}>
            <Save className="w-4 h-4 mr-2" /> Save Progress
          </Button>
        </div>

        {/* Progress Tracker */}
        <div className="flex items-center gap-2">
          {Array.from({ length: TOTAL_STEPS }).map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                idx + 1 < currentStep ? "bg-primary/50" : 
                idx + 1 === currentStep ? "bg-primary shadow-[0_0_10px_rgba(220,38,38,0.8)]" : "bg-white/10"
              }`} 
            />
          ))}
        </div>
      </div>

      {/* Wizard Body */}
      <div className="p-6 md:p-10 min-h-[400px]">
        {currentStep === 1 && <Step1Service data={data} updateData={(updates) => setData(p => ({ ...p, ...updates }))} />}
        {currentStep === 2 && <Step2Package data={data} updateData={(updates) => setData(p => ({ ...p, ...updates }))} />}
        {currentStep === 3 && <Step3Vehicle data={data} updateData={(updates) => setData(p => ({ ...p, ...updates }))} />}
        {currentStep === 4 && <Step4Branch data={data} updateData={(updates) => setData(p => ({ ...p, ...updates }))} />}
        {currentStep === 5 && <Step5DateTime data={data} updateData={(updates) => setData(p => ({ ...p, ...updates }))} />}
        {currentStep === 6 && <Step6Addons data={data} updateData={(updates) => setData(p => ({ ...p, ...updates }))} />}
        {currentStep === 7 && <Step7Summary data={data} updateData={(updates) => setData(p => ({ ...p, ...updates }))} />}
      </div>

      {/* Wizard Footer / Controls */}
      <div className="p-6 border-t border-white/10 bg-black/40 flex items-center justify-between">
        <Button 
          variant="outline" 
          onClick={handlePrev} 
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button 
          onClick={handleNext}
          className="shadow-[0_0_15px_rgba(220,38,38,0.3)]"
          disabled={currentStep === 1 && !data.serviceSlug}
        >
          {currentStep === TOTAL_STEPS ? "Confirm Booking" : "Continue"}
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  )
}
