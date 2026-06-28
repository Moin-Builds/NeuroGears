"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    question: "How does the AI Vehicle Diagnosis work?",
    answer: "Our system analyzes images of your vehicle, diagnostic codes from OBD scanners, and descriptions of symptoms to accurately identify potential issues and provide an estimated repair cost.",
  },
  {
    question: "Do you offer warranties on your repairs?",
    answer: "Yes, all our repairs come with a standard 12-month or 10,000-mile warranty on both parts and labor. Premium services may include extended warranties.",
  },
  {
    question: "Can I track the status of my vehicle during service?",
    answer: "Absolutely. Once your vehicle is booked, you can track its real-time status through our portal, from diagnosis to final quality check.",
  },
  {
    question: "Are your mechanics certified?",
    answer: "Every NeuroGears expert is fully certified and undergoes regular training to stay updated with the latest automotive technologies and repair methodologies.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section spacing="md" id="faq" className="relative">
      <Container>
        <SectionHeading 
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services, booking process, and AI features."
          align="center"
        />

        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx

            return (
              <div 
                key={idx} 
                className="border border-border rounded-xl bg-card overflow-hidden transition-colors hover:bg-secondary/50"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-foreground pr-8">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

