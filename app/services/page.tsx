import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Droplets,
  Paintbrush,
  Hammer,
  Layers,
  Grid3X3,
  HardHat,
  Wrench,
  PaintBucket,
  Pipette,
  Shield,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional painting, carpentry, glass & aluminium, tiling, metal works, plumbing, plastering, and insulation services across Dubai, UAE. Licensed experts.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | AL BARZAK Technical Services",
    description:
      "Professional contracting and technical services across Dubai, UAE. Licensed and insured professionals.",
    url: "/services",
  },
}

/* Map icon name → Lucide component */
const iconMap: Record<string, LucideIcon> = {
  Paintbrush,
  Hammer,
  Layers,
  Grid3X3,
  HardHat,
  Wrench,
  Droplets,
  PaintBucket,
  Pipette,
  Shield,
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* ── Hero Banner ────────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-linear-to-b from-primary/5 via-background to-background"
          aria-labelledby="services-hero-heading"
        >
          <div
            className="absolute top-24 right-16 w-80 h-80 bg-primary/8 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-10 w-96 h-96 bg-accent/6 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="text-sm text-primary font-medium">
                Licensed &amp; Insured Professionals
              </span>
            </div>

            <h1
              id="services-hero-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6"
            >
              Professional{" "}
              <span className="text-primary">Technical Services</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From painting and carpentry to plumbing and insulation, AL BARZAK delivers
              reliable, high-quality contracting solutions across Dubai. Explore our full
              range of services below.
            </p>
          </div>
        </section>

        {/* ── Services Grid ─────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-background" aria-label="All services">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {services.map((service) => {
                const Icon = iconMap[service.icon] ?? HardHat
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    role="listitem"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div
                        className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent"
                        aria-hidden="true"
                      />
                      <div
                        className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${service.color === "primary"
                          ? "bg-primary"
                          : "bg-accent"
                          } flex items-center justify-center shadow-lg`}
                        aria-hidden="true"
                      >
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {service.shortDescription}
                      </p>

                      {/* Feature Badges */}
                      <ul
                        className="flex flex-wrap gap-2 mb-5 list-none"
                        aria-label={`${service.title} features`}
                      >
                        {service.features.slice(0, 3).map((f) => (
                          <li key={f}>
                            <span className="inline-block px-3 py-1 text-xs font-medium text-foreground bg-secondary rounded-full">
                              {f}
                            </span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li>
                            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                              +{service.features.length - 3} more
                            </span>
                          </li>
                        )}
                      </ul>

                      <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                        View Details
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us Strip ───────────────────────────────────── */}
        <section
          className="py-16 lg:py-20 bg-secondary/40"
          aria-labelledby="why-us-heading"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2
              id="why-us-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-12"
            >
              Why Choose <span className="text-primary">AL BARZAK</span>?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  stat: "10+",
                  label: "Licensed Services",
                  desc: "Fully licensed in Dubai",
                },
                {
                  stat: "2,500+",
                  label: "Projects Completed",
                  desc: "Residential & commercial",
                },
                {
                  stat: "98%",
                  label: "Client Satisfaction",
                  desc: "Based on verified reviews",
                },
                {
                  stat: "24/7",
                  label: "Emergency Response",
                  desc: "365 days a year",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 bg-card rounded-2xl border border-border"
                >
                  <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {item.stat}
                  </p>
                  <p className="font-semibold text-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
