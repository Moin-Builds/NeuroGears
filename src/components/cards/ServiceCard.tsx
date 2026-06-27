"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/Card"
import { buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/Badge"
import { Clock, Star, ArrowRight } from "lucide-react"
import type { ServiceData } from "@/data/services"
import { IconMap } from "@/data/services"

interface ServiceCardProps {
  service: ServiceData
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = IconMap[service.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full flex"
    >
      <Card variant="glass" className="flex flex-col h-full overflow-hidden hover:border-primary/40 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <img 
            src={service.imageUrl} 
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
          />
          <div className="absolute top-4 left-4 z-20">
            <Badge className="bg-primary text-white shadow-lg border-none flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-white" />
              {service.rating}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
            <div className="p-2 bg-black/50 backdrop-blur-md rounded-md border border-white/10">
              {Icon && <Icon className="w-5 h-5 text-primary" />}
            </div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
            {service.shortDescription}
          </p>

          <div className="flex items-center justify-between py-4 border-y border-white/5 mb-6">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Starting at</span>
              <span className="text-lg font-bold text-white">{service.startingPrice}</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col items-end">
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Duration
              </span>
              <span className="text-sm font-medium text-white">{service.estimatedDuration}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-auto">
            <Link 
              href={`/booking?service=${service.slug}`} 
              className={cn(buttonVariants({ variant: "default" }), "flex-1 shadow-[0_0_15px_rgba(220,38,38,0.4)]")}
            >
              Book Now
            </Link>
            <Link 
              href={`/services/${service.slug}`} 
              aria-label={`Learn more about ${service.title}`}
              className={cn(buttonVariants({ variant: "glass" }), "px-4")}
            >
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
