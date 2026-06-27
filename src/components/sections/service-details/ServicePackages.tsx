"use client"

import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Card } from "@/components/ui/Card"
import { buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { CheckCircle2, Clock, CarFront, ShieldCheck } from "lucide-react"
import type { ServiceData } from "@/data/services"

export function ServicePackages({ service }: { service: ServiceData }) {
  if (!service.packages || service.packages.length === 0) return null

  return (
    <Section spacing="lg" className="bg-black/40">
      <Container>
        <SectionHeading 
          badge="Pricing Options"
          title="Available Packages"
          subtitle="Choose the perfect package that fits your vehicle's needs. All packages come with our standard quality guarantee."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {service.packages.map((pkg, idx) => (
            <Card 
              key={idx} 
              variant={pkg.isPopular ? "premium" : "glass"}
              className={`flex flex-col p-8 transition-transform duration-300 ${pkg.isPopular ? "scale-105 z-10 border-primary/50 shadow-[0_0_30px_rgba(220,38,38,0.2)]" : "scale-100 opacity-90 hover:opacity-100"}`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-red-400 to-primary" />
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                </div>
              </div>

              {/* Package Metadata */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 mb-6">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase flex items-center gap-1.5 mb-1">
                    <Clock className="w-3 h-3" /> Time
                  </span>
                  <span className="text-sm font-medium text-white">{pkg.estimatedTime}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-3 h-3 text-primary" /> Warranty
                  </span>
                  <span className="text-sm font-medium text-white">{pkg.warranty}</span>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <CarFront className={`w-4 h-4 ${pkg.pickupDrop ? "text-green-400" : "text-muted-foreground"}`} />
                  <span className="text-sm font-medium text-white">
                    {pkg.pickupDrop ? "Pickup & Drop Available" : "Drop-in Only"}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 space-y-4 mb-8">
                <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">Included Features</p>
                {pkg.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href={`/booking?service=${service.slug}&package=${pkg.name.toLowerCase().replace(" ", "-")}`}
                className={cn(buttonVariants({ variant: pkg.isPopular ? "default" : "outline" }), "w-full group")}
              >
                Book {pkg.name} Package
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
