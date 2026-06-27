import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const containerVariants = cva("mx-auto w-full px-4 md:px-6 lg:px-8", {
  variants: {
    variant: {
      default: "max-w-7xl",
      wide: "max-w-[1400px]",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export function Container({ className, variant, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ variant }), className)} {...props} />
  )
}
