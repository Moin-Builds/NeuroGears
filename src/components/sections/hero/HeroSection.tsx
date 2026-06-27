import * as React from "react"
import { Container } from "@/components/layout/Container"
import { BackgroundEffects } from "./BackgroundEffects"
import { HeroContent } from "./HeroContent"
import { HeroVisual } from "./HeroVisual"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center pt-24 pb-16 overflow-hidden">
      <BackgroundEffects />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>
    </section>
  )
}
