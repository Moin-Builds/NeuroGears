import Link from "next/link"
import { MapPin, Phone, Mail, Wrench } from "lucide-react"
import { Container } from "./Container"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-t from-black via-zinc-950 to-zinc-900 border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Wrench className="w-6 h-6 text-primary transition-transform group-hover:rotate-12" />
              <span className="font-bold text-xl tracking-tight text-white">NeuroGears</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              The modern, AI-powered automobile service platform for booking fast, professional, and reliable vehicle services.
            </p>
          </div>
          
          {/* Services Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services/car-repair" className="hover:text-primary transition-colors">Car Repair</Link></li>
              <li><Link href="/services/bike-repair" className="hover:text-primary transition-colors">Bike Repair</Link></li>
              <li><Link href="/services/ai-diagnosis" className="hover:text-primary transition-colors">AI Diagnosis</Link></li>
              <li><Link href="/services/spare-parts" className="hover:text-primary transition-colors">Spare Parts</Link></li>
              <li><Link href="/services/rentals" className="hover:text-primary transition-colors">Vehicle Rentals</Link></li>
            </ul>
          </div>
          
          {/* Branches Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Branches</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/branches/new-york" className="hover:text-primary transition-colors">New York</Link></li>
              <li><Link href="/branches/los-angeles" className="hover:text-primary transition-colors">Los Angeles</Link></li>
              <li><Link href="/branches/chicago" className="hover:text-primary transition-colors">Chicago</Link></li>
              <li><Link href="/branches/houston" className="hover:text-primary transition-colors">Houston</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact & Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>123 Auto Avenue, Tech City, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:support@neurogears.com" className="hover:text-primary transition-colors">support@neurogears.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© {currentYear} NeuroGears. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-foreground transition-colors">Sitemap</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
