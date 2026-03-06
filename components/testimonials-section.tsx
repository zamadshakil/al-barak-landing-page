"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Martin Foster",
    role: "Property Manager",
    company: "Emirates Tower Complex",
    content: "Described as fantastic, helpful, and reliable. I appreciated the quick response to crane breakdowns and specialist equipment needs. Excellent communication, professionalism, and support, along with flexible and efficient service.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bryan Cirius",
    role: "Facilities Director",
    company: "Dubai Marina Residences",
    content: "Al Barak Technical Services was commended for their speedy response, flexible appointments, and reasonable pricing. Had great satisfaction with their work. They are always my first call!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jane Dowser",
    role: "Operations Manager",
    company: "Abu Dhabi Industrial Zone",
    content: "Received praise for their professionalism, dependability, and quality of work. They are the best, very professional, and dependable after a bad experience with other companies. Really appreciated the staff's professionalism, punctuality, and knowledge.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ahmad Al-Rashid",
    role: "General Manager",
    company: "The Palms Hotel Group",
    content: "In hospitality, we cannot afford downtime. Al Barak understands this and delivers accordingly. Their 24/7 availability and rapid response has saved us countless times. Truly reliable partners we can count on!",
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
    <section id="testimonials" className="relative py-20 lg:py-28 overflow-hidden bg-background">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">What Our Customers Say</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-6">
            <span className="text-balance">Trusted by Hundreds of Happy Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Do not just take our word for it. Here is what our satisfied customers have to say about our services.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-border bg-card shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-border bg-card shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Featured Testimonial */}
          <div className="bg-card p-8 lg:p-12 rounded-3xl border border-border shadow-lg relative">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />
            
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 relative z-10">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-foreground font-semibold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                <p className="text-sm text-primary">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`h-3 rounded-full transition-all ${
                  i === currentIndex ? 'bg-primary w-8' : 'bg-border w-3 hover:bg-primary/50'
                }`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Mini Testimonials Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.filter((_, i) => i !== currentIndex).slice(0, 3).map((testimonial) => (
            <div 
              key={testimonial.id}
              className="p-6 rounded-2xl bg-secondary/50 border border-border hover:bg-card hover:shadow-md transition-all cursor-pointer"
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
              <p className="text-foreground line-clamp-2 text-sm mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
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
    </section>
  )
}
