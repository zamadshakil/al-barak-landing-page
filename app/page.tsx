import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustSection } from "@/components/trust-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <TrustSection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
