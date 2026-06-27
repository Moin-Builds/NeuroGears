"use client"

import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Card } from "@/components/ui/Card"
import { Star, User } from "lucide-react"
import type { ServiceData } from "@/data/services"

export function ServiceReviews({ service }: { service: ServiceData }) {
  if (!service.reviews || service.reviews.length === 0) return null

  return (
    <Section spacing="lg" className="border-t border-white/5 bg-black/30">
      <Container>
        <SectionHeading 
          badge="Real Feedback"
          title="Customer Reviews"
          subtitle={`Read what our customers have to say about the ${service.title} service.`}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {service.reviews.map((review, idx) => (
            <Card key={idx} variant="glass" className="p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? "text-primary fill-primary" : "text-muted-foreground"}`} 
                  />
                ))}
              </div>
              
              <p className="text-white/90 leading-relaxed mb-8 flex-1 italic">
                "{review.content}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-full">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="font-medium text-white">{review.author}</span>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
