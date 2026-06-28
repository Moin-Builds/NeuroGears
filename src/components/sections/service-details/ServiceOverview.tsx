"use client"

import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CheckCircle2 } from "lucide-react"
import type { DetailedServiceData } from "@/data/services/types"

export function ServiceOverview({ service }: { service: DetailedServiceData }) {
  if (!service.benefits || service.benefits.length === 0) return null

  return (
    <Section spacing="lg" className="border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Why Choose Us */}
          <div>
            <SectionHeading 
              badge="Why Choose Us"
              title="Uncompromising Quality & Precision"
              subtitle="We combine expert craftsmanship with cutting-edge AI technology to deliver the best service experience for your vehicle."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1.5 bg-primary/20 rounded-full mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual or Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
            <div className="relative border border-white/10 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-md p-8 md:p-12 shadow-[0_0_40px_rgba(220,38,38,0.1)]">
              <h3 className="text-2xl font-bold text-white mb-6">Service Guarantee</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every {service.title.toLowerCase()} service is backed by our nationwide satisfaction guarantee. We don't just fix vehicles; we optimize them for peak performance and longevity.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                <div>
                  <span className="block text-4xl font-extrabold text-white mb-1">100%</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">Satisfaction</span>
                </div>
                <div>
                  <span className="block text-4xl font-extrabold text-white mb-1">OEM</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">Certified Parts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
