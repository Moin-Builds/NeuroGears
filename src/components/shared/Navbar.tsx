import Link from "next/link";
import { Wrench } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full glass border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Wrench className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-bold text-xl tracking-tight">NeuroGears</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
          <Link href="#diagnosis" className="text-muted-foreground hover:text-primary transition-colors">AI Diagnosis</Link>
          <Link href="#rentals" className="text-muted-foreground hover:text-primary transition-colors">Rentals</Link>
          <Link href="#branches" className="text-muted-foreground hover:text-primary transition-colors">Branches</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Sign In
          </Link>
          <Link href="/book" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            Book Service
          </Link>
        </div>
      </div>
    </header>
  );
}
