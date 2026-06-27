"use client"

import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { StatisticCard } from "./StatisticCard"
import { MapPin, Users, Car, Wrench, Clock, Star } from "lucide-react"

const STATISTICS = [
  {
    title: "Branches",
    value: 25,
    suffix: "+",
    icon: MapPin,
  },
  {
    title: "Happy Customers",
    value: 15000,
    suffix: "+",
    icon: Users,
  },
  {
    title: "Vehicles Serviced",
    value: 50000,
    suffix: "+",
    icon: Car,
  },
  {
    title: "Certified Experts",
    value: 120,
    suffix: "+",
    icon: Wrench,
  },
  {
    title: "Emergency Support",
    value: 24,
    suffix: "/7",
    icon: Clock,
  },
  {
    title: "Customer Rating",
    value: 4.9,
    decimals: 1,
    icon: Star,
  },
]

export function StatisticsSection() {
  return (
    <Section spacing="lg" className="relative border-t border-white/5 bg-black/50">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {STATISTICS.map((stat, index) => (
            <StatisticCard
              key={stat.title}
              {...stat}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
