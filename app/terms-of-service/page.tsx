import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing the use of Al Barzak Technical Services website and services in the UAE.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: true, follow: true },
}

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-linear-to-b from-primary/5 via-background to-background"
          aria-labelledby="terms-heading"
        >
          <div
            className="absolute top-24 left-20 w-64 h-64 bg-accent/8 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex w-16 h-16 rounded-2xl bg-accent/10 items-center justify-center mb-6" aria-hidden="true">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h1
              id="terms-heading"
              className="font-serif text-4xl sm:text-5xl font-semibold text-foreground tracking-tight mb-4"
            >
              Terms of Service
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
                  These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Al Barzak Technical Services LLC website and the engagement of our maintenance, construction, and technical services within the United Arab Emirates. By using our website or engaging our services, you agree to be bound by these Terms.
                </p>
              </div>

              <TermsSection number={1} title="Definitions">
                <ul>
                  <li><strong>&ldquo;Company&rdquo;</strong> refers to Al Barzak Technical Services LLC, registered in Dubai, UAE.</li>
                  <li><strong>&ldquo;Client&rdquo;</strong> refers to any individual or entity that engages our services or uses our website.</li>
                  <li><strong>&ldquo;Services&rdquo;</strong> refers to all technical, maintenance, construction, and related services offered by the Company.</li>
                  <li><strong>&ldquo;Website&rdquo;</strong> refers to the Company&apos;s website and all its pages.</li>
                </ul>
              </TermsSection>

              <TermsSection number={2} title="Services & Quotations">
                <ul>
                  <li>All quotations are valid for 30 days from the date of issue unless otherwise stated.</li>
                  <li>Prices are in UAE Dirhams (AED) and are exclusive of VAT (5%) unless explicitly stated as VAT-inclusive.</li>
                  <li>The scope of work is limited to what is described in the accepted quotation. Additional work will be quoted separately.</li>
                  <li>We reserve the right to adjust quotations if site conditions differ materially from what was assessed.</li>
                </ul>
              </TermsSection>

              <TermsSection number={3} title="Payment Terms">
                <ul>
                  <li>A deposit of up to 50% may be required before work commences, depending on the project scope.</li>
                  <li>The remaining balance is due upon completion unless an alternative payment schedule is agreed in writing.</li>
                  <li>We accept bank transfer, cash, and major credit/debit cards.</li>
                  <li>Late payments may incur a charge of 2% per month on the outstanding balance.</li>
                </ul>
              </TermsSection>

              <TermsSection number={4} title="Warranty & Guarantee">
                <ul>
                  <li>All workmanship carries a 12-month warranty from the date of project completion.</li>
                  <li>Material warranties are as provided by the respective manufacturers.</li>
                  <li>The warranty does not cover damage caused by misuse, negligence, or third-party interference.</li>
                  <li>Warranty claims must be reported in writing within the warranty period.</li>
                </ul>
              </TermsSection>

              <TermsSection number={5} title="Scheduling & Access">
                <ul>
                  <li>The Client must provide safe and reasonable access to the work site at agreed times.</li>
                  <li>We will make every effort to meet agreed timelines. However, delays caused by circumstances beyond our control (including but not limited to weather, supply chain issues, and regulatory requirements) do not constitute a breach of these Terms.</li>
                  <li>Cancellations made less than 24 hours before a scheduled appointment may incur a cancellation fee.</li>
                </ul>
              </TermsSection>

              <TermsSection number={6} title="Client Responsibilities">
                <ul>
                  <li>Provide accurate information about the nature and location of the work required.</li>
                  <li>Ensure the work area is accessible and cleared of personal belongings where necessary.</li>
                  <li>Obtain any necessary building management or landlord approvals before work begins.</li>
                  <li>Inform us of any known hazards or issues that may affect the safety of our team.</li>
                </ul>
              </TermsSection>

              <TermsSection number={7} title="Limitation of Liability">
                <ul>
                  <li>Our total liability for any claim arising from our services shall not exceed the total amount paid by the Client for the specific service giving rise to the claim.</li>
                  <li>We are not liable for indirect, incidental, or consequential damages.</li>
                  <li>We maintain comprehensive insurance coverage for our operations in accordance with UAE regulations.</li>
                </ul>
              </TermsSection>

              <TermsSection number={8} title="Intellectual Property">
                <p>All content on our website — including text, images, logos, and design — is the property of Al Barzak Technical Services LLC and is protected under UAE intellectual property law. You may not reproduce, distribute, or use our content without prior written consent.</p>
              </TermsSection>

              <TermsSection number={9} title="Website Use">
                <ul>
                  <li>You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or impair the website.</li>
                  <li>We make reasonable efforts to ensure website information is accurate but do not guarantee it is error-free or up to date at all times.</li>
                  <li>Links to third-party websites are provided for convenience; we are not responsible for their content or privacy practices.</li>
                </ul>
              </TermsSection>

              <TermsSection number={10} title="Dispute Resolution">
                <p>Any disputes arising from these Terms or our services shall be governed by the laws of the United Arab Emirates. Both parties agree to attempt to resolve disputes amicably before pursuing legal action. Any unresolved disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.</p>
              </TermsSection>

              <TermsSection number={11} title="Emergency Services">
                <ul>
                  <li>Emergency callout fees may apply outside regular business hours.</li>
                  <li>Emergency service availability is subject to technician availability and safety conditions.</li>
                  <li>Emergency quotations are provided on-site and must be approved before work begins.</li>
                </ul>
              </TermsSection>

              <TermsSection number={12} title="Changes to These Terms">
                <p>We reserve the right to update these Terms at any time. Changes take effect upon publication on our website. Continued use of our services after changes constitutes acceptance of the updated Terms.</p>
              </TermsSection>

              <TermsSection number={13} title="Contact">
                <p>For questions or concerns about these Terms, please contact:</p>
                <ul>
                  <li><strong>Email:</strong> <Link href="mailto:info@albarzak.online" className="text-primary hover:underline font-medium">info@albarzak.online</Link></li>
                  <li><strong>Phone:</strong> <Link href="tel:+97145551234" className="text-primary hover:underline font-medium">+971 4 555 1234</Link></li>
                  <li><strong>Address:</strong> Al Barzak Technical Services LLC, Business Bay, Dubai, UAE</li>
                </ul>
              </TermsSection>
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
function TermsSection({
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
          className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold"
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
