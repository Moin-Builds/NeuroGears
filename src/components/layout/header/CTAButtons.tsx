import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function CTAButtons() {
  return (
    <div className="flex items-center gap-4">
      <Link 
        href="/auth/login"
        className={cn(buttonVariants({ variant: "ghost" }), "hidden sm:inline-flex")}
      >
        Sign In
      </Link>
      <Link 
        href="/booking" 
        className={cn(buttonVariants({ size: "default", variant: "default" }), "shadow-[0_0_15px_rgba(220,38,38,0.4)]")}
      >
        Book Service
      </Link>
    </div>
  )
}
