import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { Card } from "@/components/ui/Card"
import { Button, buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { Lock } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16">
      <Container>
        <div className="max-w-md mx-auto w-full">
          <Card variant="glass" className="p-8 md:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">Login Required</h1>
            <p className="text-muted-foreground mb-8">
              To finalize your booking and view your dashboard, please log in or create an account.
            </p>

            <div className="w-full space-y-4">
              <Button size="lg" className="w-full shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                Continue to Login
              </Button>
              <Link 
                href="/"
                className={cn(buttonVariants({ size: "default", variant: "glass" }), "w-full")}
              >
                Return Home
              </Link>
            </div>
            
            <p className="text-xs text-muted-foreground mt-8">
              Authentication module placeholder. Ready for Supabase integration.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  )
}
