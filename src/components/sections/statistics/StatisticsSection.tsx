import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { StatisticCard } from "./StatisticCard"
import { MapPin, Users, Car, Star } from "lucide-react"

const STATISTICS = [
  {
    title: "Branches",
    value: 25,
    suffix: "+",
    icon: MapPin,
  },
  {
    title: "Happy Customers",
    value: 15,
    suffix: "K+",
    icon: Users,
  },
  {
    title: "Vehicles Serviced",
    value: 50,
    suffix: "K+",
    icon: Car,
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
    <Section spacing="sm" className="relative bg-background pt-8 md:pt-12">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
