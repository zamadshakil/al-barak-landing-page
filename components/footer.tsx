import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Plumbing & Drain Cleaning",
  "Heavy Crane Services",
  "HVAC & AC Maintenance",
  "Painting & Decor",
  "Electrical Services",
  "General Construction",
]

export function Footer() {
  return (
    <footer id="contact" className="relative">
      {/* Emergency CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-accent/10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-foreground font-medium">24/7 Emergency Line Active</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground tracking-tight mb-6">
            <span className="text-balance">Need Urgent Assistance?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Our emergency response team is available around the clock. Get expert help within 60 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-16 px-10 text-lg font-medium group">
              <Phone className="w-5 h-5 mr-3" />
              Call +971 4 555 1234
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary h-16 px-10 text-lg font-medium">
              <Mail className="w-5 h-5 mr-3" />
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main Footer */}
      <div className="bg-secondary/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">AB</span>
                </div>
                <div>
                  <span className="text-foreground font-semibold text-lg tracking-tight">Al Barak</span>
                  <span className="text-muted-foreground text-sm block -mt-1">Technical Services</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Engineering reliability across the UAE since 2009. Your trusted partner for premium technical and maintenance services.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">Business Bay, Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm text-muted-foreground">+971 4 555 1234</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm text-muted-foreground">info@albarak.ae</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-foreground font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      href="#services"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Business Hours */}
            <div>
              <h4 className="text-foreground font-semibold mb-6">Business Hours</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-foreground font-medium">Regular Hours</p>
                    <p className="text-sm text-muted-foreground">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <p className="text-sm text-foreground font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Emergency Services
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Available 24/7, 365 days a year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Al Barak Technical Services LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
