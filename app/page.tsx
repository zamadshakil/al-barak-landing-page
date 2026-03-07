import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

const TrustSection = dynamic(() => import("@/components/trust-section").then((mod) => mod.TrustSection), { ssr: true })
const ServicesSection = dynamic(() => import("@/components/services-section").then((mod) => mod.ServicesSection), { ssr: true })
const ProjectsShowcase = dynamic(() => import("@/components/projects-showcase").then((mod) => mod.ProcessSection), { ssr: true })
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then((mod) => mod.TestimonialsSection), { ssr: true })

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <TrustSection />
        <ServicesSection />
        <ProjectsShowcase />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
