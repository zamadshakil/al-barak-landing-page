"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { CheckCircle2, Users, Building2, Headphones, ThumbsUp } from "lucide-react"

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
    <div ref={ref} className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

const stats = [
  {
    icon: Users,
    value: 850,
    suffix: "+",
    label: "Happy Clients",
    description: "Across residential & commercial"
  },
  {
    icon: Building2,
    value: 2500,
    suffix: "+",
    label: "Projects Completed",
    description: "On time, every time"
  },
  {
    icon: ThumbsUp,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Trusted since 2009"
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Always here for you"
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
    <section id="about" className="relative py-12 sm:py-20 lg:py-28 overflow-hidden bg-secondary/30" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
              <Image
                src="/images/team.jpg"
                alt="Our diverse team of professional technicians standing together in matching uniforms"
                width={600}
                height={500}
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-auto"
              />
            </div>
            {/* Experience Badge - Adjusted for mobile */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
              <p className="text-2xl sm:text-4xl font-bold">15+</p>
              <p className="text-xs sm:text-sm">Years of Excellence</p>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="text-center lg:text-left mt-8 lg:mt-0">
            <p className="text-primary font-semibold mb-2 sm:mb-3 tracking-wide uppercase text-xs sm:text-sm">Who Are We?</p>
            <h2 id="about-heading" className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-4 sm:mb-6">
              <span className="text-balance">A Team of Reliable Professionals</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              With over 15 years of experience in technical services, our team of 30+ experts are here to help you with all your maintenance needs. Whether it is a complicated issue or one that just needs a quick fix, we will help you figure it out and fix it at the most affordable cost.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              We take pride in delivering exceptional quality and customer satisfaction across every project, from residential homes to large commercial facilities throughout the UAE.
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-card rounded-full border border-border">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" aria-hidden="true" />
                  <span className="text-xs sm:text-sm text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-24">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-card border border-border hover:shadow-lg hover:shadow-primary/5 transition-all group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" aria-hidden="true" />
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-sm sm:text-base text-foreground font-semibold mt-1 sm:mt-2">{stat.label}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1 hidden sm:block">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
