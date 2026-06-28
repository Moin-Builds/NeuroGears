import Link from "next/link"
import { Wrench } from "lucide-react"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group w-fit">
      <Wrench className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
      <span className="font-bold text-xl tracking-tight text-foreground">NeuroGears</span>
    </Link>
  )
}
