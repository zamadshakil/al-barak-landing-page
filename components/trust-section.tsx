"use client"

import { useEffect, useState, useRef } from "react"
import { motion, Variants } from "framer-motion"
import {
  CheckCircle2,
  Users,
  Building2,
  Headphones,
  ThumbsUp,
  Shield,
  Zap,
  Award,
  Wrench,
  Target,
  Clock,
} from "lucide-react"

/**
 * Animated number counter — respects prefers-reduced-motion.
 */
function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          if (prefersReducedMotion) {
            setCount(end)
            return
          }

          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOut * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  const displayValue = `${count.toLocaleString()}${suffix}`
  const finalValue = `${end.toLocaleString()}${suffix}`

  return (
    <div ref={ref} className="font-serif text-4xl lg:text-5xl font-bold text-foreground" aria-hidden="true">
      {displayValue}
      <span className="sr-only">{finalValue}</span>
    </div>
  )
}

const stats = [
  {
    icon: Users,
    value: 850,
    suffix: "+",
    label: "Happy Clients",
    description: "Across residential & commercial",
  },
  {
    icon: Building2,
    value: 2500,
    suffix: "+",
    label: "Projects Completed",
    description: "On time, every time",
  },
  {
    icon: ThumbsUp,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Trusted since 2009",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Always here for you",
  },
]

const strengths = [
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Trade License No. 1592934 — every project is backed by proper insurance and licensing from Dubai authorities.",
    color: "bg-primary",
  },
  {
    icon: Zap,
    title: "Same-Day Response",
    description: "Emergency or scheduled — our teams mobilise fast. Most requests get a technician on-site within hours.",
    color: "bg-accent",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Premium materials, skilled craftsmen, and rigorous quality checks on every project, big or small.",
    color: "bg-primary",
  },
  {
    icon: Target,
    title: "10 Licensed Trades",
    description: "One company, every trade — painting, carpentry, plumbing, steel, glass, tiling, insulation, and more.",
    color: "bg-accent",
  },
]

const certifications = [
  "ISO 9001:2015",
  "Dubai Municipality Approved",
  "DEWA Certified",
  "Civil Defense Certified",
]

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function TrustSection() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-secondary/30" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left — Visual Strength Cards ───────────────────────── */}
          <div className="relative">
            {/* Decorative background shapes */}
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

            {/* 2×2 Card Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="relative grid grid-cols-1 sm:grid-cols-2 gap-4"
              role="list"
              aria-label="Our core strengths"
            >
              {strengths.map((item, index) => (
                <motion.div
                  variants={slideUp}
                  key={item.title}
                  className={`group relative bg-card rounded-2xl border border-border p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${index === 1 ? "sm:mt-6" : index === 2 ? "sm:-mt-6" : ""
                    }`}
                  role="listitem"
                >
                  {/* Accent line at top */}
                  <div className={`absolute top-0 left-6 right-6 h-1 ${item.color} rounded-b-full opacity-60`} aria-hidden="true" />

                  <div
                    className={`w-12 h-12 rounded-xl ${item.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <item.icon className={`w-6 h-6 ${item.color === "bg-primary" ? "text-primary" : "text-accent"}`} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:-bottom-6 lg:left-auto lg:translate-x-0 lg:-right-6 z-10">
              <div className="flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 rounded-2xl shadow-xl shadow-primary/25">
                <Clock className="w-6 h-6" aria-hidden="true" />
                <div>
                  <p className="text-2xl font-bold leading-none">15+</p>
                  <p className="text-xs font-medium opacity-80">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right — Content ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">Who We Are</p>
            <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-6">
              Built on Trust,{" "}
              <span className="text-primary">Delivered with Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AL BARZAK TECHNICAL SERVICES L.L.C is a Dubai-based contracting company
              with over 15 years of hands-on experience. We hold 10 licensed trade
              activities — making us a true one-stop solution for residential, commercial,
              and industrial projects across the UAE.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From painting and carpentry to plumbing, steel fabrication, and insulation —
              our team of 30+ skilled professionals delivers quality workmanship at
              competitive rates. We don&apos;t just fix problems; we build lasting relationships
              with every client.
            </p>

            {/* Key differentiators */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
                <Wrench className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">30+ Skilled Experts</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
                <Shield className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Fully Insured</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
                <Zap className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
                <Target className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">10 Licensed Trades</span>
              </div>
            </div>

            {/* Certifications */}
            <ul className="flex flex-wrap gap-3 list-none" aria-label="Certifications">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm text-foreground font-medium">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Stats Grid ──────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-24"
          role="list"
          aria-label="Company statistics"
        >
          {stats.map((stat) => (
            <motion.div
              variants={slideUp}
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:shadow-primary/5 transition-all group"
              role="listitem"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-colors" aria-hidden="true">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-foreground font-semibold mt-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
