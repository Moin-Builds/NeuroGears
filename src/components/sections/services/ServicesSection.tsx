import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ServiceCard } from "@/components/cards/ServiceCard"
import { SERVICES_DATA } from "@/data/services"

export function ServicesSection() {
  return (
    <Section spacing="sm" id="services" className="relative overflow-hidden">
      <Container>
        <SectionHeading 
          badge="Our Expertise"
          title="Premium Automobile Services"
          subtitle="From AI-driven diagnostics to luxury detailing and emergency assistance, we provide end-to-end vehicle care with uncompromising quality."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {SERVICES_DATA.map((service, index) => (
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
