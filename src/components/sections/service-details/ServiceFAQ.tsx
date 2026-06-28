"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ChevronDown } from "lucide-react"
import type { DetailedServiceData } from "@/data/services/types"

export function ServiceFAQ({ service }: { service: DetailedServiceData }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0) // Open the first one by default

  if (!service.faq || service.faq.length === 0) return null

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section spacing="lg" className="border-t border-white/5">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            badge="Got Questions?"
            title="Frequently Asked Questions"
            align="center"
          />

          <div className="mt-12 space-y-4">
            {service.faq.map((item, idx) => {
              const isOpen = openIndex === idx

              return (
                <div 
                  key={idx} 
                  className="border border-white/10 rounded-xl bg-white/5 overflow-hidden transition-colors hover:bg-white/10"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold text-white pr-8">{item.question}</span>
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
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
