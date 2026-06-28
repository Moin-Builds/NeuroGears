import * as React from "react"
import Link from "next/link"
import Image from "next/image"
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
    <div className="group h-full flex">
      <Card
        variant="glass"
        className="flex flex-col h-full overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 bg-[lab(6_0_-1.12)] border-primary/30 hover:border-primary/50 shadow-[0_0_20px_oklch(0.55_0.22_25/0.15)]"
      >
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 to-transparent" />
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={index < 4}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 z-20">
            <Badge className="shadow-sm border-none flex items-center gap-1.5 bg-primary text-primary-foreground">
              <Star className="w-3.5 h-3.5 fill-primary-foreground" />
              {service.rating}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
            <div className="p-2 backdrop-blur-md rounded-md border bg-primary/20 border-primary/30">
              {Icon && <Icon className="w-5 h-5 shadow-sm text-primary" />}
            </div>
            <h3 className="text-xl font-bold drop-shadow-sm text-white">{service.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 bg-[lab(6_0_-1.12)]">
          <p className="text-sm line-clamp-2 mb-4 flex-1 text-slate-300">
            {service.shortDescription}
          </p>

          <div className="flex items-center justify-between py-4 border-y mb-6 border-slate-800">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider mb-1 font-semibold text-slate-400">Starting at</span>
              <span className="text-lg font-bold text-white">{service.startingPrice}</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div className="flex flex-col items-end">
              <span className="text-xs uppercase tracking-wider mb-1 font-semibold flex items-center gap-1 text-slate-400">
                <Clock className="w-3 h-3" /> Duration
              </span>
              <span className="text-sm font-medium text-slate-200">{service.estimatedDuration}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-auto">
            <Link
              href={`/booking?service=${service.slug}`}
              className={cn(buttonVariants({ variant: "default" }), "flex-1 shadow-md hover:shadow-lg transition-shadow bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20 hover:shadow-primary/40 border-none")}
            >
              Book Now
            </Link>
            <Link
              href={`/services/${service.slug}`}
              aria-label={`Learn more about ${service.title}`}
              className={cn(buttonVariants({ variant: "outline" }), "px-4 bg-transparent border-primary/30 text-primary hover:bg-primary/10 hover:text-primary")}
            >
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

