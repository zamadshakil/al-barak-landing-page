import Link from "next/link"
import Image from "next/image"
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
        className="relative py-14 lg:py-20 overflow-hidden bg-primary"
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
              Need Technical Services? We are Here to Help!
            </span>
          </div>

          <h2
            id="cta-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground tracking-tight mb-6"
          >
            Call Us Today for Fast, Professional Service
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            From painting and carpentry to plumbing and steel works — our licensed team delivers quality service across Dubai. Just a call away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/80 h-16 px-10 text-lg font-semibold group shadow-xl"
            >
              <Link href="tel:+971569556726" aria-label="Call Amir at +971 56 955 6726">
                <Phone className="w-5 h-5 mr-3" aria-hidden="true" />
                +971 56 955 6726
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground h-16 px-10 text-lg font-medium"
            >
              <Link
                href="https://wa.me/971569556726"
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
              <Link href="/" className="inline-flex items-center gap-3 mb-6 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background/50" aria-label="AL BARZAK Technical Services — Home">
                <Image
                  src="/Logo.jpeg"
                  alt="AL BARZAK Technical Services logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-xl object-contain"
                />
                <div>
                  <span className="text-background font-semibold text-xl tracking-tight">AL BARZAK</span>
                  <span className="text-background/60 text-sm block leading-tight">Technical Services</span>
                </div>
              </Link>
              <p className="text-background/70 leading-relaxed mb-6">
                Your trusted partner for professional contracting and technical services in Dubai, UAE. Quality workmanship, licensed professionals, and customer satisfaction guaranteed.
              </p>
              <address className="not-italic space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-sm text-background/70">First Floor, Office 101, AL ZAHRA TECHNO CENTER, Dubai, UAE</span>
                </div>
                <Link
                  href="tel:+971569556726"
                  className="flex items-center gap-3 hover:text-primary transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background/50"
                  aria-label="Call Amir at +971 56 955 6726"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm text-background/70">+971 56 955 6726</span>
                </Link>
                <Link
                  href="tel:+971508782516"
                  className="flex items-center gap-3 hover:text-primary transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background/50"
                  aria-label="Call Abuzar at +971 50 878 2516"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm text-background/70">+971 50 878 2516</span>
                </Link>
                <Link
                  href="mailto:mahrabuzar143@gmail.com"
                  className="flex items-center gap-3 hover:text-primary transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background/50"
                  aria-label="Email mahrabuzar143@gmail.com"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm text-background/70">mahrabuzar143@gmail.com</span>
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
                    <p className="text-sm text-background/70">Mon – Sat: 9:00 AM – 5:00 PM</p>
                    <p className="text-sm text-background/70">Sunday: Closed</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-background/60">
                &copy; {new Date().getFullYear()} AL BARZAK TECHNICAL SERVICES L.L.C. All rights reserved.
              </p>
              <p className="text-xs text-background/40 mt-1">
                Trade License No: 1592934
              </p>
            </div>
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
