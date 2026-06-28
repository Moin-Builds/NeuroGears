import * as React from "react"
import { Suspense } from "react"
import { BookingWizard } from "@/components/booking/BookingWizard"
import { Container } from "@/components/layout/Container"

export default function BookingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      
      <Container>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Service</h1>
            <p className="text-muted-foreground">Follow the steps below to secure your appointment.</p>
          </div>
          
          <Suspense fallback={<div className="h-96 flex items-center justify-center text-primary">Loading Wizard...</div>}>
            <BookingWizard />
          </Suspense>
        </div>
      </Container>
    </div>
  )
}
