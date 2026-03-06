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
    <section id="services" className="relative py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">How Can We Help You?</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-6">
            <span className="text-balance">Our Professional Services</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 15 years of experience, our team of experts is ready to tackle any project, big or small.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${service.color === 'primary' ? 'bg-primary' : 'bg-accent'} flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 font-medium group/btn">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/25">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
