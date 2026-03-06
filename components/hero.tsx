import { ArrowRight, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      
      {/* Accent Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">24/7 Emergency Services Available</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1]">
              <span className="text-balance">Engineering Reliability Across the UAE.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Premium technical and maintenance services for commercial and residential properties. Certified expertise, uncompromising quality, and round-the-clock availability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-medium group">
                Request a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary h-14 px-8 text-base font-medium">
                View Our Services
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">60-Min Response Time</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">ISO 9001 Certified</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Stats Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 p-8 rounded-2xl bg-secondary border border-border">
                <div className="flex items-end gap-1">
                  <span className="font-serif text-6xl lg:text-7xl font-medium text-foreground">15</span>
                  <span className="text-2xl text-accent mb-2">+</span>
                </div>
                <p className="text-muted-foreground mt-2">Years of Excellence in Technical Services</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary border border-border">
                <div className="flex items-end gap-1">
                  <span className="font-serif text-4xl lg:text-5xl font-medium text-foreground">2,500</span>
                  <span className="text-lg text-accent mb-1">+</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary border border-border">
                <div className="flex items-end gap-1">
                  <span className="font-serif text-4xl lg:text-5xl font-medium text-foreground">98</span>
                  <span className="text-lg text-accent mb-1">%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Client Satisfaction</p>
              </div>
              <div className="col-span-2 p-6 rounded-2xl bg-accent/10 border border-accent/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium">Ready to Start?</p>
                    <p className="text-sm text-muted-foreground">Get a free estimate within 24 hours</p>
                  </div>
                  <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
