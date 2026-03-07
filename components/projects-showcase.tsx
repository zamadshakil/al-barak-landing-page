import Image from "next/image"
import Link from "next/link"
import { Phone, ClipboardCheck, Ruler, Hammer, ThumbsUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
    {
        number: "01",
        icon: Phone,
        title: "Get in Touch",
        description:
            "Call us, WhatsApp, or fill out the contact form. Tell us what you need — we respond within minutes, not hours.",
        accent: "bg-primary",
    },
    {
        number: "02",
        icon: Ruler,
        title: "Free Site Inspection",
        description:
            "Our expert visits your location, assesses the scope of work, takes measurements, and provides a transparent, no-obligation quote.",
        accent: "bg-accent",
    },
    {
        number: "03",
        icon: Hammer,
        title: "Professional Execution",
        description:
            "Our licensed team gets to work — on time, on budget, and with premium materials. You get regular progress updates throughout.",
        accent: "bg-primary",
    },
    {
        number: "04",
        icon: ThumbsUp,
        title: "Quality Handover",
        description:
            "We do a final walkthrough with you, ensure everything meets our quality standards, and hand over a clean, completed project.",
        accent: "bg-accent",
    },
]

export function ProcessSection() {
    return (
        <section
            className="relative py-20 lg:py-28 overflow-hidden bg-background"
            aria-labelledby="process-heading"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
                        Simple & Transparent
                    </p>
                    <h2
                        id="process-heading"
                        className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-6"
                    >
                        How It <span className="text-primary">Works</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        From your first call to project handover — we keep it straightforward, professional, and stress-free.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* ── Left — Image + floating badge ─────────────────────── */}
                    <div className="relative order-2 lg:order-1">
                        {/* Decorative blobs */}
                        <div className="absolute -top-10 -left-10 w-56 h-56 bg-primary/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                            <Image
                                src="/images/process-hero.png"
                                alt="AL BARZAK site supervisor reviewing project blueprints on tablet at a modern Dubai construction site"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" aria-hidden="true" />
                        </div>

                        {/* Floating Quality Badge */}
                        <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-card p-4 sm:p-5 rounded-2xl shadow-xl border border-border z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center" aria-hidden="true">
                                    <ClipboardCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-foreground">100%</p>
                                    <p className="text-xs text-muted-foreground">Transparent Pricing</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Response Badge */}
                        <div className="hidden md:block absolute -top-4 -left-4 bg-card p-4 rounded-2xl shadow-xl border border-border z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center" aria-hidden="true">
                                    <Phone className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-foreground">&lt; 30 min</p>
                                    <p className="text-xs text-muted-foreground">Avg. Response</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Right — Process Steps ─────────────────────────────── */}
                    <div className="order-1 lg:order-2">
                        <ol className="relative space-y-6 list-none">
                            {/* Vertical connecting line */}
                            <div
                                className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-accent/30 to-primary/30 hidden sm:block"
                                aria-hidden="true"
                            />

                            {steps.map((step) => (
                                <li key={step.number} className="relative flex gap-4 sm:gap-5 group">
                                    {/* Step Number Circle */}
                                    <div
                                        className={`relative z-10 shrink-0 w-10 h-10 rounded-full ${step.accent} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
                                    </div>

                                    {/* Step Content Card */}
                                    <div className="flex-1 bg-card rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-2">
                                            <step.icon className={`w-5 h-5 ${step.accent === "bg-primary" ? "text-primary" : "text-accent"}`} aria-hidden="true" />
                                            <h3 className="font-semibold text-foreground text-base sm:text-lg">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        {/* CTA */}
                        <div className="mt-8 ml-14 sm:ml-[60px]">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 font-medium shadow-lg shadow-primary/20 group"
                            >
                                <Link href="/contact">
                                    Start Your Project
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
