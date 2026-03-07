"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  Send,
  CheckCircle,
  Building2,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const contactInfo = [
  {
    icon: Phone,
    label: "Amir Hussain",
    value: "+971 56 955 6726",
    href: "tel:+971569556726",
    description: "Primary contact",
  },
  {
    icon: Phone,
    label: "Abuzar",
    value: "+971 50 878 2516",
    href: "tel:+971508782516",
    description: "Secondary contact",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mahrabuzar143@gmail.com",
    href: "mailto:mahrabuzar143@gmail.com",
    description: "We reply within 2 business hours",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Send a message",
    href: "https://wa.me/971569556726",
    description: "Quick responses on WhatsApp",
  },
]

const serviceOptions = [
  "Painting Contracting",
  "Carpentry & Wood Flooring Works",
  "Glass & Aluminum Installation & Maintenance",
  "Floor & Wall Tiling Works",
  "Metal Parts & Erections Contracting",
  "Steel Products Installation & Maintenance",
  "Plumbing & Sanitary Installation",
  "Plaster Works",
  "Sanitary Installation & Pipes Repairing",
  "Insulation Contracting",
  "Other / Multiple Services",
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // In production this would POST to a server action or API route.
    // For now we show a success state.
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main id="main-content">
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-linear-to-b from-primary/5 via-background to-background"
          aria-labelledby="contact-hero-heading"
        >
          <div
            className="absolute top-24 left-16 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-10 w-96 h-96 bg-primary/6 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="text-sm text-primary font-medium">We&rsquo;d Love to Hear From You</span>
            </div>

            <h1
              id="contact-hero-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6"
            >
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or need urgent technical services? Reach out and our
              team will get back to you within hours — not days.
            </p>
          </div>
        </section>

        {/* ── Contact Cards ─────────────────────────────────────────── */}
        <section className="py-12 bg-background" aria-label="Contact information">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "WhatsApp" ? "_blank" : undefined}
                  rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-semibold text-foreground mb-1">{item.label}</h2>
                  <p className="text-primary font-medium text-sm mb-1">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form + Map ────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-secondary/40" aria-labelledby="contact-form-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form Column */}
              <div className="lg:col-span-3">
                <h2
                  id="contact-form-heading"
                  className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4"
                >
                  Send Us a <span className="text-primary">Message</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Fill in the details below and we will get back to you with a
                  free quote or answer to your enquiry.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 bg-card rounded-2xl border border-border text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6" aria-hidden="true">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground max-w-md mb-6">
                      Thank you for reaching out. A member of our team will
                      contact you within 2 business hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring text-sm"
                          placeholder="Ahmed Al Rashid"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone Number <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring text-sm"
                          placeholder="+971 50 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring text-sm"
                        placeholder="ahmed@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Service Required <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        required
                        defaultValue=""
                        className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus-visible:outline-2 focus-visible:outline-ring text-sm appearance-none"
                      >
                        <option value="" disabled>
                          Select a service…
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring text-sm resize-y"
                        placeholder="Tell us about your project or describe the issue..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-base font-medium shadow-lg shadow-primary/20 w-full sm:w-auto"
                    >
                      <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* Right Column — Business Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Map / Address placeholder */}
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card aspect-4/3">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-secondary/30">
                    <Building2 className="w-12 h-12 text-primary/40 mb-4" aria-hidden="true" />
                    <p className="font-semibold text-foreground mb-1">AL BARZAK TECHNICAL SERVICES L.L.C</p>
                    <p className="text-sm text-muted-foreground mb-4">First Floor, Office 101, AL ZAHRA TECHNO CENTER, Dubai, UAE</p>
                    <Button asChild variant="outline" size="sm">
                      <a
                        href="https://maps.google.com/?q=AL+ZAHRA+TECHNO+CENTER+Dubai+UAE"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                        <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Visitor Instructions */}
                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-amber-900 dark:text-amber-200 text-sm mb-1">Visitor Instructions</p>
                      <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                        Please use the lift to come to the first floor. Do not use the escalators/electric stairs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                    Business Hours
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Monday – Saturday</dt>
                      <dd className="font-medium text-foreground">8:00 AM – 6:00 PM</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Sunday</dt>
                      <dd className="font-medium text-foreground">9:00 AM – 2:00 PM</dd>
                    </div>
                    <div className="pt-3 mt-3 border-t border-border">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                        <span className="font-medium text-foreground">Emergency Services</span>
                      </div>
                      <p className="text-muted-foreground mt-1">Available 24/7, 365 days a year</p>
                    </div>
                  </dl>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-base font-medium shadow-lg shadow-primary/20"
                  >
                    <Link href="tel:+971569556726" aria-label="Call Amir at +971 56 955 6726">
                      <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                      Call Amir: +971 56 955 6726
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-14 text-base font-medium border-foreground/20 hover:bg-primary/5 hover:border-primary/40"
                  >
                    <Link href="tel:+971508782516" aria-label="Call Abuzar at +971 50 878 2516">
                      <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                      Call Abuzar: +971 50 878 2516
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-14 text-base font-medium border-foreground/20 hover:bg-primary/5 hover:border-primary/40"
                  >
                    <a
                      href="https://wa.me/971569556726"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Message us on WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                      Message on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
