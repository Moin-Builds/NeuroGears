import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Card } from "@/components/ui/Card"
import { Shield, Cpu, Clock, Wrench } from "lucide-react"

const REASONS = [
  {
    title: "AI-Powered Diagnostics",
    description: "Our proprietary AI engine instantly analyzes your vehicle's health and provides accurate, transparent repair estimates.",
    icon: Cpu,
  },
  {
    title: "Certified Experts",
    description: "Every mechanic in our network goes through rigorous testing and certification to ensure top-tier service quality.",
    icon: Wrench,
  },
  {
    title: "Genuine Parts Guarantee",
    description: "We only use OEM and high-quality aftermarket parts backed by our comprehensive service warranty.",
    icon: Shield,
  },
  {
    title: "Time-Saving Convenience",
    description: "From door-step pickup to real-time status tracking, we value your time as much as you do.",
    icon: Clock,
  },
]

export function WhyChooseUsSection() {
  return (
    <Section spacing="md" id="why-choose-us" className="relative overflow-hidden bg-secondary">
      <Container>
        <SectionHeading 
          badge="The NeuroGears Advantage"
          title="Why Choose Us"
          subtitle="Experience the future of automobile maintenance with our unique blend of cutting-edge technology and mechanical expertise."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="group h-full">
                <Card variant="glass" className="h-full flex flex-col p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </Card>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
