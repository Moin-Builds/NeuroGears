"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/layout/Container"
import { Badge } from "@/components/ui/Badge"
import { buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Star, Clock } from "lucide-react"
import type { DetailedServiceData } from "@/data/services/types"
import { IconMap } from "@/data/services"

export function ServiceHero({ service }: { service: DetailedServiceData }) {
  const Icon = IconMap[service.icon]

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/20 backdrop-blur-md rounded-xl border border-primary/30 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
              {Icon && <Icon className="w-8 h-8 text-primary" />}
            </div>
            <Badge className="bg-white/10 text-white hover:bg-white/20 border-none backdrop-blur-md text-sm py-1.5 px-3">
              Premium Service
            </Badge>
            <Link 
              href={`/booking?service=${service.slug}`}
              className={cn(buttonVariants({ size: "lg", variant: "default" }), "shadow-[0_0_20px_rgba(220,38,38,0.4)]")}
            >
              Book Now
            </Link>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6">
            {service.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            {service.longDescription}
          </p>

          <div className="flex flex-wrap items-center gap-6 md:gap-12 pt-8 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Starting Price</span>
              <span className="text-3xl font-bold text-white">{service.startingPrice}</span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Estimated Time
              </span>
              <span className="text-xl font-semibold text-white">{service.estimatedDuration}</span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-2">
                <Star className="w-4 h-4 text-primary fill-primary" /> Rating
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold text-white">{service.rating}</span>
                <span className="text-sm text-muted-foreground">({service.reviewsCount} reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
