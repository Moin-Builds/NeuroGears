"use client"

import * as React from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

export interface CounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  decimals?: number
}

export function Counter({
  value,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
  decimals = 0,
}: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  })

  React.useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  const display = useTransform(spring, (current) => {
    if (decimals > 0) {
      return `${prefix}${current.toFixed(decimals)}${suffix}`
    }
    // Formats numbers with commas (e.g., 15000 -> 15,000)
    return `${prefix}${Math.round(current).toLocaleString()}${suffix}`
  })

  return <motion.span ref={ref} className={className}>{display}</motion.span>
}
