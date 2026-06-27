"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" aria-label="Toggle Menu">
        <Menu className="w-6 h-6" />
      </Button>
      {/* Mobile Menu Dropdown / Sheet will be implemented here */}
    </div>
  )
}
