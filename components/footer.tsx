import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react"
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
      <section className="relative py-12 sm:py-20 lg:py-28 overflow-hidden bg-primary" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:72px_72px]" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" aria-hidden="true" />
            <span className="text-xs sm:text-sm text-primary-foreground font-medium">Have an Emergency? We are Here to Help!</span>
          </div>
          
          <h2 id="cta-heading" className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground tracking-tight mb-4 sm:mb-6">
            <span className="text-balance">Ready to Get Started? Contact Us Today!</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
            Need help with gas leakage or a clogged drain? We offer affordable emergency services that are just a call away.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-14 sm:h-16 px-6 sm:px-10 text-base sm:text-lg font-semibold group shadow-xl w-full sm:w-auto" asChild>
              <a href="tel:+97145551234">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" aria-hidden="true" />
                +971 4 555 1234
                <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 sm:h-16 px-6 sm:px-10 text-base sm:text-lg font-medium w-full sm:w-auto" asChild>
              <a href="https://wa.me/97145551234" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" aria-hidden="true" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main Footer */}
      <div className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg sm:text-xl">AB</span>
                </div>
                <div>
                  <span className="text-background font-semibold text-lg sm:text-xl tracking-tight">Al Barak</span>
                  <span className="text-background/60 text-xs sm:text-sm block -mt-0.5 sm:-mt-1">Technical Services</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-background/70 leading-relaxed mb-4 sm:mb-6">
                Your trusted partner for premium technical and maintenance services across the UAE since 2009. Quality, reliability, and customer satisfaction guaranteed!
              </p>
              <address className="space-y-2 sm:space-y-3 not-italic">
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm text-background/70">Business Bay, Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" aria-hidden="true" />
                  <a href="tel:+97145551234" className="text-xs sm:text-sm text-background/70 hover:text-primary transition-colors">+971 4 555 1234</a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" aria-hidden="true" />
                  <a href="mailto:info@albarak.ae" className="text-xs sm:text-sm text-background/70 hover:text-primary transition-colors">info@albarak.ae</a>
                </div>
              </address>
            </div>
            
            {/* Quick Links */}
            <nav aria-label="Quick links">
              <h4 className="text-background font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Services */}
            <nav aria-label="Services">
              <h4 className="text-background font-semibold text-base sm:text-lg mb-4 sm:mb-6">Our Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      href="#services"
                      className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Business Hours */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-background font-semibold text-base sm:text-lg mb-4 sm:mb-6">Business Hours</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs sm:text-sm text-background font-medium">Regular Hours</p>
                    <p className="text-xs sm:text-sm text-background/70">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-xs sm:text-sm text-background/70">Sunday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-primary/20 border border-primary/30">
                  <p className="text-xs sm:text-sm text-background font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                    Emergency Services
                  </p>
                  <p className="text-xs sm:text-sm text-background/70 mt-1">Available 24/7, 365 days a year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-background/60 text-center sm:text-left">
              {new Date().getFullYear()} Al Barak Technical Services LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="#" className="text-xs sm:text-sm text-background/60 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs sm:text-sm text-background/60 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
