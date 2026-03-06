"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Al Barak Technical Services - Home">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-base sm:text-lg">AB</span>
            </div>
            <div className="hidden xs:block sm:block">
              <span className="text-foreground font-semibold text-base sm:text-lg tracking-tight">Al Barak</span>
              <span className="text-muted-foreground text-xs sm:text-sm block -mt-0.5 sm:-mt-1">Technical Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Link 
              href="tel:+97145551234" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-1"
              aria-label="Call us at +971 4 555 1234"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden lg:inline">+971 4 555 1234</span>
              <span className="lg:hidden">Call</span>
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 text-sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            {/* Quick Call Button on Mobile */}
            <Link 
              href="tel:+97145551234" 
              className="p-2 bg-primary text-primary-foreground rounded-lg"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 sm:py-6 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:bg-secondary transition-colors text-base font-medium py-3 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="border-t border-border mt-4 pt-4 space-y-3">
              <Link 
                href="tel:+97145551234" 
                className="flex items-center justify-center gap-2 text-base text-foreground bg-secondary hover:bg-secondary/80 transition-colors py-3 px-4 rounded-lg font-medium"
                aria-label="Call us at +971 4 555 1234"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>+971 4 555 1234</span>
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full h-12 text-base font-medium">
                Get a Free Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
