import Image from "next/image"
import { ArrowRight, Shield, Clock, Award, CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-20 overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      {/* Decorative Elements - Hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="hidden sm:block absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="text-xs sm:text-sm text-primary font-medium">24/7 Emergency Services Available</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
              <span className="text-balance">Your Trusted Partner for Technical Excellence in the UAE</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From plumbing and HVAC to crane services and construction, our expert team delivers reliable, high-quality solutions for homes and businesses across the UAE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-medium group shadow-lg shadow-primary/25 w-full sm:w-auto" asChild>
                <a href="tel:+97145551234">
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  Call Now
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-medium w-full sm:w-auto" asChild>
                <a href="#services">
                  View Our Services
                </a>
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">Fully Licensed</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">Fast Response</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">15+ Years</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image with Stats */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl aspect-[4/3] sm:aspect-auto">
              <Image
                src="/images/hero-technician.jpg"
                alt="Professional technician in blue uniform ready to assist with technical services"
                width={600}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" aria-hidden="true" />
            </div>
            
            {/* Floating Stats Cards - Adjusted for mobile */}
            <div className="hidden sm:block absolute -left-4 lg:-left-6 top-1/4 bg-card p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-border">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">2,500+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Projects Done</p>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block absolute -right-2 lg:-right-4 bottom-1/4 bg-card p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-border">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                  <span className="text-lg sm:text-xl font-bold text-accent">98%</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">Client Satisfaction</p>
                  <p className="text-xs text-muted-foreground">Based on reviews</p>
                </div>
              </div>
            </div>
            
            {/* Mobile Stats Bar */}
            <div className="sm:hidden flex justify-center gap-4 mt-4">
              <div className="flex items-center gap-2 bg-card px-3 py-2 rounded-full border border-border shadow-sm">
                <CheckCircle className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">2,500+ Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-3 py-2 rounded-full border border-border shadow-sm">
                <span className="text-sm font-bold text-accent">98%</span>
                <span className="text-sm text-muted-foreground">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
