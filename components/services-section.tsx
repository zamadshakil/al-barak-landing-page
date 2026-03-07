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
import { services } from "@/lib/services"

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

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-background" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">How Can We Help You?</p>
          <h2 id="services-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Licensed and experienced professionals ready to tackle any project, big or small. Explore our full range of contracting and technical services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {services.slice(0, 6).map((service) => {
            const Icon = iconMap[service.icon] ?? HardHat
            return (
              <article
                key={service.slug}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                role="listitem"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent" aria-hidden="true" />
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${service.color === "primary" ? "bg-primary" : "bg-accent"
                      } flex items-center justify-center shadow-lg`}
                    aria-hidden="true"
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {service.shortDescription}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-wrap gap-2 mb-5 list-none" aria-label={`${service.title} features`}>
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature}>
                        <span className="inline-block px-3 py-1 text-xs font-medium text-foreground bg-secondary rounded-full">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm group/btn focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
