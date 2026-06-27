import { Logo } from "./Logo"
import { NavLinks } from "./NavLinks"
import { CTAButtons } from "./CTAButtons"
import { MobileMenu } from "./MobileMenu"
import { Container } from "../Container"

export function Navbar() {
  return (
    <Container>
      <div className="flex h-16 items-center justify-between">
        <Logo />
        <NavLinks />
        <div className="flex items-center gap-4">
          <CTAButtons />
          <MobileMenu />
        </div>
      </div>
    </Container>
  )
}
