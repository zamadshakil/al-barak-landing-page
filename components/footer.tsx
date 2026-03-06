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
      <section className="relative py-20 lg:py-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
            <span className="text-sm text-primary-foreground font-medium">Have an Emergency? We are Here to Help!</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground tracking-tight mb-6">
            <span className="text-balance">We are Here to Help! Call Us Today!</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Need help with gas leakage or a clogged drain? We offer affordable emergency services that are just a call away.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-16 px-10 text-lg font-semibold group shadow-xl">
              <Phone className="w-5 h-5 mr-3" />
              +971 4 555 1234
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-16 px-10 text-lg font-medium">
              <MessageCircle className="w-5 h-5 mr-3" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main Footer */}
      <div className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">AB</span>
                </div>
                <div>
                  <span className="text-background font-semibold text-xl tracking-tight">Al Barak</span>
                  <span className="text-background/60 text-sm block -mt-1">Technical Services</span>
                </div>
              </div>
              <p className="text-background/70 leading-relaxed mb-6">
                Your trusted partner for premium technical and maintenance services across the UAE since 2009. Quality, reliability, and customer satisfaction guaranteed!
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-background/70">Business Bay, Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-background/70">+971 4 555 1234</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-background/70">info@albarak.ae</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-background font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-background font-semibold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      href="#services"
                      className="text-background/70 hover:text-primary transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Business Hours */}
            <div>
              <h4 className="text-background font-semibold text-lg mb-6">Business Hours</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-background font-medium">Regular Hours</p>
                    <p className="text-sm text-background/70">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-background/70">Sunday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-primary/20 border border-primary/30">
                  <p className="text-sm text-background font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Emergency Services
                  </p>
                  <p className="text-sm text-background/70 mt-1">Available 24/7, 365 days a year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              {new Date().getFullYear()} Al Barak Technical Services LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
