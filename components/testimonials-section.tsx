"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Ahmad Al-Rashid",
    role: "Facilities Director",
    company: "Emirates Tower Complex",
    content: "Al Barak has been our exclusive maintenance partner for over 5 years. Their response time and quality of work is unmatched in the UAE. They handle everything from our HVAC systems to emergency plumbing with the same level of professionalism.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Property Manager",
    company: "Dubai Marina Residences",
    content: "The team at Al Barak transformed our approach to property maintenance. Their preventive maintenance program has reduced our emergency calls by 70%. Exceptional service, fair pricing, and true professionals.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohammed Al-Hashemi",
    role: "Operations Manager",
    company: "Abu Dhabi Industrial Zone",
    content: "We needed heavy crane services for a complex industrial installation. Al Barak delivered flawlessly — on time, within budget, and with impeccable safety standards. They are now our go-to for all technical services.",
    rating: 5,
  },
  {
    id: 4,
    name: "Lisa Chen",
    role: "General Manager",
    company: "The Palms Hotel Group",
    content: "In hospitality, we cannot afford downtime. Al Barak understands this and delivers accordingly. Their 24/7 availability and rapid response has saved us countless times. Truly reliable partners.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">Client Testimonials</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
              <span className="text-balance">Trusted by Industry Leaders</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-border hover:bg-secondary hover:border-accent/50"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-border hover:bg-secondary hover:border-accent/50"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Testimonial */}
          <div className="lg:col-span-1 p-8 lg:p-10 rounded-2xl bg-background border border-border relative">
            <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/20" />
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-medium">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-lg font-semibold text-accent">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-foreground font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                <p className="text-sm text-accent">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>
          
          {/* Mini Testimonials */}
          <div className="space-y-4">
            {testimonials.filter((_, i) => i !== currentIndex).slice(0, 3).map((testimonial) => (
              <div 
                key={testimonial.id}
                className="p-6 rounded-2xl bg-background border border-border hover:border-accent/30 transition-colors cursor-pointer"
                onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === testimonial.id))}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setCurrentIndex(testimonials.findIndex(t => t.id === testimonial.id))
                  }
                }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground line-clamp-2 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-accent w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
