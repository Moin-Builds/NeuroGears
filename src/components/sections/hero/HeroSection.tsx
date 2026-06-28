import * as React from "react"
import { Container } from "@/components/layout/Container"
import { BackgroundEffects } from "./BackgroundEffects"
import { HeroContent } from "./HeroContent"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center pt-24 pb-16 overflow-hidden bg-[#0a0a0a]">
      <BackgroundEffects />
      
      <Container className="relative z-10 w-full h-full flex items-center">
        <div className="w-full lg:w-1/2 relative z-20">
          <HeroContent />
        </div>
      </Container>
    </section>
  )
}
