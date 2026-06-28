import * as React from "react"
import { Card } from "@/components/ui/Card"
import { Counter } from "@/components/shared/Counter"
import { LucideIcon } from "lucide-react"

export interface StatisticCardProps {
  title: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  icon: LucideIcon
  delay?: number
}

export function StatisticCard({ 
  title, 
  value, 
  prefix, 
  suffix, 
  decimals, 
  icon: Icon, 
}: StatisticCardProps) {
  return (
    <div className="group h-full">
      <Card 
        variant="glass" 
        className="h-full flex flex-col items-center justify-center p-4 py-6 text-center transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 bg-[lab(6_0_-1.12)] border-b-[rgb(39,39,42)]"
      >
        <div className="p-2 bg-primary/10 rounded-full mb-3 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        
        <h4 className="text-2xl lg:text-3xl font-bold text-foreground mb-1 tracking-tight">
          <Counter 
            value={value} 
            prefix={prefix} 
            suffix={suffix} 
            decimals={decimals} 
            duration={2.5} 
          />
        </h4>
        
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </p>
      </Card>
    </div>
  )
}
