"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* Track scroll for subtle header shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  /* Close mobile menu on Escape */
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [mobileMenuOpen, handleKeyDown])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b transition-shadow duration-300 ${scrolled ? "border-border shadow-md" : "border-transparent shadow-none"
        }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            aria-label="AL BARZAK Technical Services — Home"
          >
            <Image
              src="/Logo.jpeg"
              alt="AL BARZAK Technical Services logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg object-contain"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-foreground font-semibold text-lg tracking-tight">AL BARZAK</span>
              <span className="text-muted-foreground text-sm block leading-tight">Technical Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="tel:+971569556726"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label="Call us at +971 56 955 6726"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>+971 56 955 6726</span>
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2.5 -mr-2 rounded-lg text-foreground hover:bg-secondary/60 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — slide-down with animation */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-112 opacity-100" : "max-h-0 opacity-0"
          }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="px-6 pb-6 pt-2 border-t border-border" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary/60 transition-colors text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-border space-y-3">
            <Link
              href="tel:+971569556726"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary/60 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              tabIndex={mobileMenuOpen ? 0 : -1}
              aria-label="Call us at +971 56 955 6726"
            >
              <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-medium">+971 56 955 6726</span>
            </Link>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full h-12 text-base"
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                Get a Quote
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
