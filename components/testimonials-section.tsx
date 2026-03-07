"use client"

import { useState, useCallback, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Martin Foster",
    role: "Property Manager",
    company: "Emirates Tower Complex",
    content:
      "Described as fantastic, helpful, and reliable. I appreciated the quick response to crane breakdowns and specialist equipment needs. Excellent communication, professionalism, and support, along with flexible and efficient service.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bryan Cirius",
    role: "Facilities Director",
    company: "Dubai Marina Residences",
    content:
      "AL BARZAK Technical Services was commended for their speedy response, flexible appointments, and reasonable pricing. Had great satisfaction with their work. They are always my first call!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jane Dowser",
    role: "Operations Manager",
    company: "Abu Dhabi Industrial Zone",
    content:
      "Received praise for their professionalism, dependability, and quality of work. They are the best, very professional, and dependable after a bad experience with other companies. Really appreciated the staff's professionalism, punctuality, and knowledge.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ahmad Al-Rashid",
    role: "General Manager",
    company: "The Palms Hotel Group",
    content:
      "In hospitality, we cannot afford downtime. AL BARZAK understands this and delivers accordingly. Their 24/7 availability and rapid response has saved us countless times. Truly reliable partners we can count on!",
    rating: 5,
  },
]

function StarRating({ count, size = "w-5 h-5" }: { count: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${size} fill-accent text-accent`} aria-hidden="true" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % testimonials.length),
    []
  )
  const prev = useCallback(
    () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    []
  )

  /* Keyboard navigation inside the carousel */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); prev() }
      if (e.key === "ArrowRight") { e.preventDefault(); next() }
    },
    [next, prev]
  )

  /* Auto-advance every 8 s, pause on hover/focus */
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 8000)
    return () => clearInterval(id)
  }, [paused, next])

  const current = testimonials[currentIndex]

  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-28 overflow-hidden bg-background"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
            What Our Customers Say
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-6"
          >
            Trusted by Hundreds of Happy Clients
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Do not just take our word for it. Here is what our satisfied customers have to say about our services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={handleKeyDown}
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          {/* Navigation Arrows */}
          <div className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-border bg-card shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
          <div className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-border bg-card shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>

          {/* Featured Testimonial — live region for screen readers */}
          <div
            className="bg-card p-8 lg:p-12 rounded-3xl border border-border shadow-lg relative"
            aria-live="polite"
            aria-atomic="true"
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${currentIndex + 1} of ${testimonials.length}`}
          >
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10 pointer-events-none" aria-hidden="true" />

            <StarRating count={current.rating} size="w-6 h-6" />

            <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mt-6 mb-8 relative z-10">
              <p>&ldquo;{current.content}&rdquo;</p>
            </blockquote>

            <footer className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="text-lg font-bold text-primary select-none">
                  {current.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <cite className="not-italic">
                  <p className="text-foreground font-semibold text-lg">{current.name}</p>
                  <p className="text-sm text-muted-foreground">{current.role}</p>
                  <p className="text-sm text-primary font-medium">{current.company}</p>
                </cite>
              </div>
            </footer>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-3 mt-8" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === currentIndex}
                className={`h-3 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${i === currentIndex
                    ? "bg-primary w-8"
                    : "bg-border w-3 hover:bg-primary/40"
                  }`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial by ${t.name}`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials
            .filter((_, i) => i !== currentIndex)
            .slice(0, 3)
            .map((testimonial) => (
              <button
                key={testimonial.id}
                type="button"
                className="text-left p-6 rounded-2xl bg-secondary/50 border border-border hover:bg-card hover:shadow-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                onClick={() => setCurrentIndex(testimonials.findIndex((t) => t.id === testimonial.id))}
                aria-label={`Read full testimonial by ${testimonial.name}`}
              >
                <StarRating count={testimonial.rating} size="w-4 h-4" />
                <p className="text-foreground line-clamp-2 text-sm mt-3 mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <span className="text-sm font-semibold text-primary select-none">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </button>
            ))}
        </div>
      </div>
    </section>
  )
}
