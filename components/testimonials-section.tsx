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
    <section id="testimonials" className="relative py-12 sm:py-20 lg:py-28 overflow-hidden bg-background" aria-labelledby="testimonials-heading">
      {/* Decorative Elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-primary font-semibold mb-2 sm:mb-3 tracking-wide uppercase text-xs sm:text-sm">What Our Customers Say</p>
          <h2 id="testimonials-heading" className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-4 sm:mb-6">
            <span className="text-balance">Trusted by Hundreds of Happy Clients</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            Do not just take our word for it. Here is what our satisfied customers have to say about our services.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation - Hidden on small mobile, visible from sm */}
          <div className="hidden sm:block absolute -left-2 md:-left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-border bg-card shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
          <div className="hidden sm:block absolute -right-2 md:-right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-border bg-card shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
          
          {/* Featured Testimonial */}
          <div className="bg-card p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-border shadow-lg relative">
            <Quote className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-16 sm:h-16 text-primary/10" aria-hidden="true" />
            
            {/* Stars */}
            <div className="flex items-center gap-0.5 sm:gap-1 mb-4 sm:mb-6" role="img" aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}>
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent" aria-hidden="true" />
              ))}
            </div>
            
            <blockquote className="text-base sm:text-xl lg:text-2xl text-foreground leading-relaxed mb-6 sm:mb-8 relative z-10">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>
            
            <footer className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                <span className="text-base sm:text-lg font-bold text-primary">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <cite className="text-foreground font-semibold text-base sm:text-lg not-italic">{testimonials[currentIndex].name}</cite>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                <p className="text-xs sm:text-sm text-primary">{testimonials[currentIndex].company}</p>
              </div>
            </footer>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full border-border bg-card shadow-md"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`h-2.5 rounded-full transition-all ${
                    i === currentIndex ? 'bg-primary w-6' : 'bg-border w-2.5 hover:bg-primary/50'
                  }`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === currentIndex ? 'true' : undefined}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full border-border bg-card shadow-md"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Pagination Dots - Desktop only */}
          <div className="hidden sm:flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`h-3 rounded-full transition-all ${
                  i === currentIndex ? 'bg-primary w-8' : 'bg-border w-3 hover:bg-primary/50'
                }`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
        
        {/* Mini Testimonials Preview - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6 mt-10 lg:mt-12">
          {testimonials.filter((_, i) => i !== currentIndex).slice(0, 3).map((testimonial) => (
            <div 
              key={testimonial.id}
              className="p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-secondary/50 border border-border hover:bg-card hover:shadow-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === testimonial.id))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setCurrentIndex(testimonials.findIndex(t => t.id === testimonial.id))
                }
              }}
              aria-label={`View testimonial from ${testimonial.name}`}
            >
              <div className="flex items-center gap-1 mb-2 lg:mb-3" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="text-foreground line-clamp-2 text-sm mb-3 lg:mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <span className="text-xs lg:text-sm font-semibold text-primary">
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
