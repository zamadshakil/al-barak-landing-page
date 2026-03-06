"use client"

import { useEffect, useState, useRef } from "react"
import { CheckCircle2, Users, Building2, Headphones } from "lucide-react"

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOut * end))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div ref={ref} className="font-serif text-5xl lg:text-6xl font-medium text-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

const stats = [
  {
    icon: Users,
    value: 850,
    suffix: "+",
    label: "Active Clients",
    description: "Across residential & commercial sectors"
  },
  {
    icon: Building2,
    value: 2500,
    suffix: "+",
    label: "Projects Delivered",
    description: "On time, every time"
  },
  {
    icon: CheckCircle2,
    value: 15,
    suffix: "",
    label: "Years in Industry",
    description: "Trusted since 2009"
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Emergency response team"
  },
]

const certifications = [
  "ISO 9001:2015",
  "Dubai Municipality Approved",
  "DEWA Certified",
  "Civil Defense Certified",
]

export function TrustSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">The Al Barak Standard</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-foreground tracking-tight mb-6">
            <span className="text-balance">Built on Trust. Delivered with Excellence.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over 15 years, we have been the trusted partner for enterprises, government facilities, and premium residential properties across the UAE. Our commitment to quality is not just a promise — it&apos;s our foundation.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="p-8 rounded-2xl bg-background border border-border hover:border-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-foreground font-medium mt-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="flex flex-wrap items-center gap-6 p-6 rounded-2xl bg-background border border-border">
          <span className="text-sm text-muted-foreground font-medium">Certifications:</span>
          {certifications.map((cert) => (
            <div key={cert} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
