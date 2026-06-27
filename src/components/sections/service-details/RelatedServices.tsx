"use client"

import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ServiceCard } from "@/components/cards/ServiceCard"
import { SERVICES_DATA, type ServiceData } from "@/data/services"

export function RelatedServices({ currentService }: { currentService: ServiceData }) {
  // Simply pick 3 other random or sequential services
  const related = SERVICES_DATA.filter(s => s.id !== currentService.id).slice(0, 3)

  if (related.length === 0) return null

  return (
    <Section spacing="lg" className="border-t border-white/5 bg-black/40">
      <Container>
        <SectionHeading 
          title="Related Services"
          subtitle="Explore other premium services that might benefit your vehicle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {related.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
