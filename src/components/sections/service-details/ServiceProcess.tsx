"use client"

import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import type { DetailedServiceData } from "@/data/services/types"

export function ServiceProcess({ service }: { service: DetailedServiceData }) {
  if (!service.process || service.process.length === 0) return null

  return (
    <Section spacing="lg" className="border-t border-white/5 bg-black/20">
      <Container>
        <SectionHeading 
          badge="How It Works"
          title="Transparent Service Process"
          subtitle="We believe in complete transparency. Here is exactly what happens when you book this service."
          align="center"
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-12">
            {service.process.map((step, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={idx} className="relative flex items-center md:justify-between flex-col md:flex-row gap-8 md:gap-0">
                  
                  {/* Left Side Content (Desktop) */}
                  <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Center Number Marker */}
                  <div className={`absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-black border-2 border-primary shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center justify-center z-10 md:-translate-x-1/2`}>
                    <span className="text-lg font-bold text-white">{step.step}</span>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={`hidden md:block w-[45%] ${isEven ? "order-2" : ""}`} />
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
