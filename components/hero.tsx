import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Clock, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-linear-to-b from-secondary/50 via-background to-background"
      aria-label="Welcome to AL BARZAK Technical Services"
    >
      {/* Decorative blobs — hidden from assistive tech */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="text-sm text-primary font-medium">24/7 Emergency Services Available</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
              The Most Reliable{" "}
              <span className="text-primary">Technical Services</span>{" "}
              in UAE!
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Professional painting, carpentry, glass & aluminium, tiling, steel works, plumbing, and insulation services across Dubai. Licensed experts ready to serve you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-medium group shadow-lg shadow-primary/20"
              >
                <Link href="/contact">
                  Request a Callback
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-foreground hover:bg-primary/5 hover:border-primary/60 h-14 px-8 text-base font-medium"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <ul className="flex flex-wrap gap-6 pt-4 list-none" aria-label="Key benefits">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Fully Licensed</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center" aria-hidden="true">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">Fast Response</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">15+ Years Experience</span>
              </li>
            </ul>
          </div>

          {/* Right Content - Hero Image with Stats */}
          <div className="relative hidden sm:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/5">
              <Image
                src="/images/hero-technician.jpg"
                alt="AL BARZAK technician in uniform performing a safety inspection on-site in Dubai"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/20 to-transparent" aria-hidden="true" />
            </div>

            {/* Floating Stats Cards — only visible on large screens to prevent overflow */}
            <div className="hidden lg:flex absolute -left-6 top-1/4 bg-card p-4 rounded-2xl shadow-xl border border-border items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center" aria-hidden="true">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2,500+</p>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
            </div>

            <div className="hidden lg:flex absolute -right-4 bottom-1/4 bg-card p-4 rounded-2xl shadow-xl border border-border items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center" aria-hidden="true">
                <span className="text-xl font-bold text-accent">98%</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Client Satisfaction</p>
                <p className="text-xs text-muted-foreground">Based on reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
