import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Card } from "@/components/ui/Card"
import { Star } from "lucide-react"
import Image from "next/image"

const TESTIMONIALS = [
  {
    name: "James Wilson",
    role: "Tesla Model S Owner",
    content: "The AI diagnosis feature correctly identified a subtle battery issue before it became a major problem. The repair was handled flawlessly.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Yamaha R1 Rider",
    content: "NeuroGears treats my bike with the same respect I do. Their premium detailing service is simply unmatched.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Porsche 911 Enthusiast",
    content: "I exclusively use NeuroGears for all my maintenance. The transparency and expertise they offer is exactly what premium vehicle owners need.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <Section spacing="md" id="testimonials" className="relative border-t border-border bg-background pb-8 md:pb-12">
      <Container>
        <SectionHeading 
          badge="Customer Stories"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Hear from owners who trust us with their premium vehicles."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="group h-full">
              <Card variant="glass" className="h-full flex flex-col p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] bg-[lab(6_0_-1.12)] border-b-[rgb(39,39,42)]">
                <div className="flex items-center gap-1 mb-4 text-primary">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
