import Image from "next/image"
import { 
  Droplets, 
  Container, 
  Wind, 
  Paintbrush, 
  Zap, 
  HardHat,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Droplets,
    title: "Plumbing & Drain Cleaning",
    description: "Whether it is cleaning a clogged drain or replacing pipes, our team knows what is right and will offer you the best solution at affordable prices.",
    features: ["Emergency Repairs", "Drain Cleaning", "Water Heater Services"],
    image: "/images/service-plumbing.jpg",
    color: "primary",
  },
  {
    icon: Container,
    title: "Heavy Crane Services",
    description: "We provide professional crane operations for construction, industrial lifting, and specialized heavy equipment positioning with top safety standards.",
    features: ["Mobile Cranes", "Tower Cranes", "Safe Operations"],
    image: "/images/service-crane.jpg",
    color: "accent",
  },
  {
    icon: Wind,
    title: "HVAC & AC Maintenance",
    description: "Stay cool and comfortable! Our expert technicians handle AC installation, maintenance, duct cleaning, and emergency repairs around the clock.",
    features: ["AC Installation", "Duct Cleaning", "24/7 Emergency"],
    image: "/images/service-hvac.jpg",
    color: "primary",
  },
  {
    icon: Paintbrush,
    title: "Painting & Decor",
    description: "Transform your space with our professional painting services. We offer interior and exterior painting with expert color consultation.",
    features: ["Interior Painting", "Exterior Coating", "Wallpaper"],
    image: "/images/service-painting.jpg",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Our licensed electricians provide safe and reliable electrical solutions, from simple repairs to complete wiring and smart home systems.",
    features: ["Electrical Repairs", "Panel Upgrades", "Smart Systems"],
    image: "/images/service-electrical.jpg",
    color: "primary",
  },
  {
    icon: HardHat,
    title: "General Construction",
    description: "From renovations to fit-outs, our construction team delivers quality workmanship with attention to detail and project management expertise.",
    features: ["Renovations", "Fit-outs", "Project Management"],
    image: "/images/service-construction.jpg",
    color: "accent",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-12 sm:py-20 lg:py-28 bg-background" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-primary font-semibold mb-2 sm:mb-3 tracking-wide uppercase text-xs sm:text-sm">How Can We Help You?</p>
          <h2 id="services-heading" className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-4 sm:mb-6">
            <span className="text-balance">Our Professional Services</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            With over 15 years of experience, our team of experts is ready to tackle any project, big or small.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <article 
              key={service.title}
              className="group bg-card rounded-xl sm:rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - professional service in action`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" aria-hidden="true" />
                <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${service.color === 'primary' ? 'bg-primary' : 'bg-accent'} flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" aria-hidden="true" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm line-clamp-3">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 font-medium group/btn text-sm">
                  Learn More 
                  <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-10 sm:mt-16 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base shadow-lg shadow-primary/25" asChild>
            <a href="#contact">
              Request a Free Quote
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
