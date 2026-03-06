import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Al Barak Technical Services",
  description:
    "Learn how Al Barak Technical Services collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-linear-to-b from-primary/5 via-background to-background"
          aria-labelledby="privacy-heading"
        >
          <div
            className="absolute top-24 right-20 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex w-16 h-16 rounded-2xl bg-primary/10 items-center justify-center mb-6" aria-hidden="true">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1
              id="privacy-heading"
              className="font-serif text-4xl sm:text-5xl font-semibold text-foreground tracking-tight mb-4"
            >
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* ── Content ───────────────────────────────────────────────── */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-card rounded-2xl border border-border p-8 sm:p-12 space-y-10">
              {/* Intro */}
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Al Barak Technical Services LLC (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy of visitors to our website and users of our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services within the United Arab Emirates.
                </p>
              </div>

              {/* Sections */}
              <PolicySection number={1} title="Information We Collect">
                <p>We may collect the following types of personal information:</p>
                <ul>
                  <li><strong>Contact Information:</strong> name, email address, phone number, and physical address when you submit a form, request a quote, or contact us directly.</li>
                  <li><strong>Service Information:</strong> details about the services you request, property location, and project specifications.</li>
                  <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our site, collected automatically via cookies and analytics tools.</li>
                  <li><strong>Communication Records:</strong> records of calls, emails, and WhatsApp messages exchanged with our team.</li>
                </ul>
              </PolicySection>

              <PolicySection number={2} title="How We Use Your Information">
                <p>Your information is used to:</p>
                <ul>
                  <li>Provide quotes and deliver the services you request</li>
                  <li>Communicate with you about your enquiry or ongoing project</li>
                  <li>Send appointment reminders and service follow-ups</li>
                  <li>Improve our website, services, and customer experience</li>
                  <li>Comply with legal obligations under UAE law</li>
                </ul>
                <p>We do <strong>not</strong> sell, rent, or trade your personal data to third parties for marketing purposes.</p>
              </PolicySection>

              <PolicySection number={3} title="Cookies & Tracking">
                <p>Our website may use cookies and similar technologies to enhance your browsing experience and gather analytics data. You can control cookie preferences through your browser settings. We use:</p>
                <ul>
                  <li><strong>Essential Cookies:</strong> necessary for the website to function correctly.</li>
                  <li><strong>Analytics Cookies:</strong> help us understand visitor behaviour to improve our site.</li>
                </ul>
              </PolicySection>

              <PolicySection number={4} title="Data Sharing & Third Parties">
                <p>We may share your information with:</p>
                <ul>
                  <li><strong>Service Partners:</strong> trusted subcontractors who assist in delivering our services, bound by confidentiality agreements.</li>
                  <li><strong>Legal Authorities:</strong> when required to comply with UAE laws, regulations, or legal processes.</li>
                  <li><strong>Technology Providers:</strong> hosting, analytics, and communication platforms that process data on our behalf.</li>
                </ul>
              </PolicySection>

              <PolicySection number={5} title="Data Security">
                <p>We implement appropriate technical and organisational measures to protect your personal data, including:</p>
                <ul>
                  <li>Encrypted data transmission (HTTPS/TLS)</li>
                  <li>Access controls limiting data to authorised personnel</li>
                  <li>Regular security reviews and updates</li>
                </ul>
                <p>While we strive to protect your information, no method of transmission over the Internet is 100% secure.</p>
              </PolicySection>

              <PolicySection number={6} title="Data Retention">
                <p>We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy or as required by law. Service records may be retained for up to 7 years for warranty and legal compliance purposes.</p>
              </PolicySection>

              <PolicySection number={7} title="Your Rights">
                <p>Under UAE data protection regulations, you have the right to:</p>
                <ul>
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal data (subject to legal obligations)</li>
                  <li>Withdraw consent for marketing communications at any time</li>
                </ul>
                <p>To exercise these rights, please contact us at <Link href="mailto:info@albarak.ae" className="text-primary hover:underline font-medium">info@albarak.ae</Link>.</p>
              </PolicySection>

              <PolicySection number={8} title="Children's Privacy">
                <p>Our services are not directed at individuals under the age of 18. We do not knowingly collect personal data from children.</p>
              </PolicySection>

              <PolicySection number={9} title="Changes to This Policy">
                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.</p>
              </PolicySection>

              <PolicySection number={10} title="Contact Us">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                  <li><strong>Email:</strong> <Link href="mailto:info@albarak.ae" className="text-primary hover:underline font-medium">info@albarak.ae</Link></li>
                  <li><strong>Phone:</strong> <Link href="tel:+97145551234" className="text-primary hover:underline font-medium">+971 4 555 1234</Link></li>
                  <li><strong>Address:</strong> Al Barak Technical Services LLC, Business Bay, Dubai, UAE</li>
                </ul>
              </PolicySection>
            </div>

            {/* Back link */}
            <div className="mt-10 text-center">
              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <Link href="/">
                  <ArrowLeft className="mr-2 w-4 h-4" aria-hidden="true" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ── Reusable section component ────────────────────────────────────── */
function PolicySection({
  number,
  title,
  children,
}: {
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground mb-4">
        <span
          className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold"
          aria-hidden="true"
        >
          {number}
        </span>
        {title}
      </h2>
      <div className="pl-11 space-y-3 text-muted-foreground leading-relaxed text-sm [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-foreground">
        {children}
      </div>
    </div>
  )
}
