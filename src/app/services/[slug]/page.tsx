import { notFound } from "next/navigation"
import { ServiceHero } from "@/components/sections/service-details/ServiceHero"
import { ServiceInteractiveBuilder } from "@/components/sections/service-details/ServiceInteractiveBuilder"
import { ServiceOverview } from "@/components/sections/service-details/ServiceOverview"
import { ServiceProcess } from "@/components/sections/service-details/ServiceProcess"
import { ServiceFAQ } from "@/components/sections/service-details/ServiceFAQ"
import { ServiceReviews } from "@/components/sections/service-details/ServiceReviews"
import { RelatedServices } from "@/components/sections/service-details/RelatedServices"
import { ALL_DETAILED_SERVICES, getServiceBySlug } from "@/data/services/index"

export function generateStaticParams() {
  return ALL_DETAILED_SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const service = getServiceBySlug(resolvedParams.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Typecast any to suppress TS error since we haven't updated ServiceHero/Overview typings yet, but they match closely enough */}
      <ServiceHero service={service as any} />
      <ServiceOverview service={service as any} />
      
      {/* The New Interactive Service Builder replaces ServicePackages and StickyBookingSummary */}
      <ServiceInteractiveBuilder service={service} />
      
      <ServiceProcess service={service as any} />
      <ServiceReviews service={service as any} />
      <ServiceFAQ service={service as any} />
      <RelatedServices currentService={service as any} />
    </div>
  )
}
