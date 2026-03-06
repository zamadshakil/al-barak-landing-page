import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

import { services as allServices } from "@/lib/services"

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer id="contact">
      {/* ── Emergency CTA Section ──────────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden bg-primary"
        aria-labelledby="cta-heading"
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[72px_72px]"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/15 border border-primary-foreground/25 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" aria-hidden="true" />
            <span className="text-sm text-primary-foreground font-medium">
              Have an Emergency? We are Here to Help!
            </span>
          </div>

          <h2
            id="cta-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground tracking-tight mb-6"
          >
            Call Us Today for Fast, Professional Service
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Need help with gas leakage or a clogged drain? We offer affordable emergency services that are just a call away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-16 px-10 text-lg font-semibold group shadow-xl"
            >
              <Link href="tel:+97145551234" aria-label="Call us at +971 4 555 1234">
                <Phone className="w-5 h-5 mr-3" aria-hidden="true" />
                +971 4 555 1234
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-16 px-10 text-lg font-medium"
            >
              <Link
                href="https://wa.me/97145551234"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 mr-3" aria-hidden="true" />
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Main Footer ────────────────────────────────────────────────── */}
      <div className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background/50" aria-label="Al Barak Technical Services — Home">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center" aria-hidden="true">
                  <span className="text-primary-foreground font-bold text-xl select-none">AB</span>
                </div>
                <div>
                  <span className="text-background font-semibold text-xl tracking-tight">Al Barak</span>
                  <span className="text-background/60 text-sm block leading-tight">Technical Services</span>
                </div>
              </Link>
              <p className="text-background/70 leading-relaxed mb-6">
                Your trusted partner for premium technical and maintenance services across the UAE since 2009. Quality, reliability, and customer satisfaction guaranteed!
              </p>
              <address className="not-italic space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-sm text-background/70">Business Bay, Dubai, UAE</span>
                </div>
                <Link
                  href="tel:+97145551234"
                  className="flex items-center gap-3 hover:text-primary transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background/50"
                  aria-label="Call +971 4 555 1234"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm text-background/70">+971 4 555 1234</span>
                </Link>
                <Link
                  href="mailto:info@albarak.ae"
                  className="flex items-center gap-3 hover:text-primary transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background/50"
                  aria-label="Email info@albarak.ae"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm text-background/70">info@albarak.ae</span>
                </Link>
              </address>
            </div>

            {/* Quick Links */}
            <nav aria-label="Quick links">
              <h4 className="text-background font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 list-none">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors text-sm rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background/50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="Our services">
              <h4 className="text-background font-semibold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3 list-none">
                {allServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-background/70 hover:text-primary transition-colors text-sm rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background/50"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Business Hours */}
            <div>
              <h4 className="text-background font-semibold text-lg mb-6">Business Hours</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-background font-medium">Regular Hours</p>
                    <p className="text-sm text-background/70">Mon – Sat: 8:00 AM – 6:00 PM</p>
                    <p className="text-sm text-background/70">Sunday: 9:00 AM – 2:00 PM</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-primary/20 border border-primary/30">
                  <p className="text-sm text-background font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
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
              &copy; {new Date().getFullYear()} Al Barak Technical Services LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-background/60 hover:text-primary transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background/50"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-background/60 hover:text-primary transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background/50"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
