import { 
  Droplets, 
  Crane, 
  Wind, 
  Paintbrush, 
  Zap, 
  HardHat,
  ArrowUpRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Droplets,
    title: "Plumbing & Drain Cleaning",
    description: "Expert plumbing solutions from emergency repairs to complete system installations. 24/7 drain cleaning and water management.",
    features: ["Emergency Repairs", "System Installation", "Water Heater Services"],
    featured: true,
  },
  {
    icon: Crane,
    title: "Heavy Crane Services",
    description: "Licensed crane operations for construction, industrial lifting, and specialized heavy equipment positioning.",
    features: ["Mobile Cranes", "Tower Cranes", "Rigging Solutions"],
    featured: false,
  },
  {
    icon: Wind,
    title: "HVAC & AC Maintenance",
    description: "Complete climate control solutions including installation, maintenance, and 24/7 emergency AC repairs.",
    features: ["AC Installation", "Preventive Maintenance", "Duct Cleaning"],
    featured: true,
  },
  {
    icon: Paintbrush,
    title: "Painting & Decor",
    description: "Premium interior and exterior painting services with expert color consultation and surface preparation.",
    features: ["Interior Painting", "Exterior Coating", "Wallpaper Installation"],
    featured: false,
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Licensed electrical contractors providing comprehensive solutions from wiring to smart home systems.",
    features: ["Electrical Repairs", "Panel Upgrades", "Smart Systems"],
    featured: false,
  },
  {
    icon: HardHat,
    title: "General Construction",
    description: "Full-scale construction and renovation services including structural work, finishing, and project management.",
    features: ["Renovations", "Fit-outs", "Project Management"],
    featured: true,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">Our Services</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
              <span className="text-balance">Comprehensive Technical Solutions</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            From routine maintenance to complex installations, we deliver enterprise-grade solutions for every technical challenge.
          </p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`group relative p-8 rounded-2xl border border-border bg-secondary/50 hover:bg-secondary hover:border-accent/30 transition-all duration-300 ${
                service.featured && index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
              } ${service.featured && index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-accent/50 group-hover:bg-accent/5 transition-all">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-3">
                {service.title}
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span 
                    key={feature}
                    className="px-3 py-1 text-xs font-medium text-muted-foreground bg-background rounded-full border border-border"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
