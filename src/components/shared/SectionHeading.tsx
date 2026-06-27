import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  badge?: string
}

export function SectionHeading({ 
  title, 
  subtitle, 
  align = "center", 
  badge,
  className, 
  ...props 
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "flex flex-col space-y-4 mb-10 md:mb-16",
        {
          "items-start text-left": align === "left",
          "items-center text-center": align === "center",
          "items-end text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary shadow-[0_0_15px_rgba(220,38,38,0.2)]">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[700px] text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
