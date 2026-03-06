import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Droplets,
  Container,
  Wind,
  Paintbrush,
  Zap,
  HardHat,
  ArrowRight,
  ArrowLeft,
  Phone,
  CheckCircle,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  services,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/lib/services"

/* Map icon name → Lucide component */
const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Container,
  Wind,
  Paintbrush,
  Zap,
  HardHat,
}

/* ── Static params for all service slugs ─────────────────────────── */
export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

/* ── Dynamic metadata ────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Service Not Found" }

  return {
    title: `${service.title} | Al Barak Technical Services`,
    description: service.heroDescription,
  }
}

/* ── Page component ──────────────────────────────────────────────── */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const Icon = iconMap[service.icon] ?? HardHat

  /* Pick 2 related services (not including current) */
  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 2)

  return (
    <>
      <Header />
      <main id="main-content">
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
          aria-labelledby="detail-hero-heading"
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={service.image}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-foreground/75" aria-hidden="true" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-background/70">
                <li>
                  <Link
                    href="/"
                    className="hover:text-background transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background/50"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-background transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background/50"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-background font-medium" aria-current="page">
                  {service.title}
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div
                className={`inline-flex w-16 h-16 rounded-2xl ${
                  service.color === "primary" ? "bg-primary" : "bg-accent"
                } items-center justify-center shadow-lg mb-6`}
                aria-hidden="true"
              >
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h1
                id="detail-hero-heading"
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-background tracking-tight mb-6"
              >
                {service.title}
              </h1>
              <p className="text-lg lg:text-xl text-background/80 max-w-2xl leading-relaxed mb-8">
                {service.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 font-medium shadow-lg shadow-primary/30"
                >
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-background/60 bg-transparent text-background hover:bg-background/20 hover:text-background h-14 px-8 font-medium"
                >
                  <Link href="tel:+97145551234" aria-label="Call +971 4 555 1234">
                    <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features Badges ───────────────────────────────────────── */}
        <section className="py-12 bg-secondary/40" aria-label="Service capabilities">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ul className="flex flex-wrap justify-center gap-3 list-none">
              {service.features.map((f) => (
                <li key={f}>
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground shadow-sm">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Detailed Sections ─────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="details-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2
              id="details-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-12 text-center"
            >
              What We <span className="text-primary">Offer</span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {service.details.map((d, i) => (
                <div
                  key={d.heading}
                  className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${
                      i % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                    } flex items-center justify-center mb-5 font-bold text-lg`}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {d.heading}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {d.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ──────────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-20 bg-secondary/40"
          aria-labelledby="benefits-heading"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2
              id="benefits-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-10 text-center"
            >
              Why Choose Our{" "}
              <span className="text-primary">{service.title}</span>
            </h2>

            <ul className="grid sm:grid-cols-2 gap-4 list-none">
              {service.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-foreground font-medium text-sm">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQs ──────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2
              id="faq-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-12 text-center"
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>

            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-card border border-border rounded-2xl overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 text-foreground font-medium hover:bg-secondary/40 transition-colors [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span
                      className="shrink-0 w-5 h-5 flex items-center justify-center text-muted-foreground group-open:rotate-45 transition-transform"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 pt-0 text-muted-foreground leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Services ──────────────────────────────────────── */}
        <section
          className="py-16 lg:py-20 bg-secondary/40"
          aria-labelledby="related-heading"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2
              id="related-heading"
              className="font-serif text-3xl font-semibold text-foreground tracking-tight mb-10 text-center"
            >
              Related Services
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {related.map((r) => {
                const RIcon = iconMap[r.icon] ?? HardHat
                return (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}`}
                    className="group flex items-start gap-5 p-6 bg-card rounded-2xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <div
                      className={`shrink-0 w-14 h-14 rounded-xl ${
                        r.color === "primary" ? "bg-primary" : "bg-accent"
                      } flex items-center justify-center`}
                      aria-hidden="true"
                    >
                      <RIcon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {r.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {r.shortDescription}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>

            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <Link href="/services">
                  <ArrowLeft className="mr-2 w-4 h-4" aria-hidden="true" />
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
