import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Al Barak Technical Services | Premium Maintenance & Engineering UAE',
    template: '%s | Al Barak Technical Services',
  },
  description: 'Engineering reliability across the UAE. Premium technical and maintenance services including plumbing, HVAC, electrical, heavy crane services, painting, and construction in Dubai, Abu Dhabi & Sharjah. Licensed professionals, 24/7 emergency response.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://albarak.online'
  ),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'maintenance services Dubai',
    'technical services UAE',
    'plumbing Dubai',
    'HVAC maintenance Dubai',
    'AC repair Dubai',
    'electrical services UAE',
    'heavy crane services Dubai',
    'painting services Dubai',
    'construction company UAE',
    'emergency plumbing Dubai',
    '24/7 maintenance UAE',
    'Al Barak Technical Services',
    'home maintenance Dubai',
    'building maintenance UAE',
    'villa renovation Dubai',
    'fit-out contractor Dubai',
  ],
  openGraph: {
    title: 'Al Barak Technical Services | Premium Maintenance & Engineering UAE',
    description: 'Licensed professionals delivering plumbing, HVAC, electrical, crane, painting, and construction services across the UAE. Available 24/7.',
    siteName: 'Al Barak Technical Services',
    locale: 'en_AE',
    type: 'website',
    url: 'https://albarak.online',
    images: [
      {
        url: '/Logo.jpeg',
        width: 512,
        height: 512,
        alt: 'Al Barak Technical Services Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Barak Technical Services | Premium Maintenance & Engineering UAE',
    description: 'Licensed professionals delivering plumbing, HVAC, electrical, crane, painting, and construction services across the UAE.',
    images: ['/Logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'YOUR_VERIFICATION_CODE',
  },
  icons: {
    icon: '/Logo.jpeg',
    apple: '/Logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {/* JSON-LD Structured Data — LocalBusiness + GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://albarak.online/#business',
              name: 'Al Barak Technical Services',
              alternateName: 'Al Barak Technical Services LLC',
              url: 'https://albarak.online',
              logo: 'https://albarak.online/Logo.jpeg',
              image: 'https://albarak.online/Logo.jpeg',
              description:
                'Premium technical and maintenance services across the UAE including plumbing, HVAC, electrical, heavy crane services, painting, and construction.',
              telephone: '+97145551234',
              email: 'info@albarak.online',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Business Bay',
                addressLocality: 'Dubai',
                addressRegion: 'Dubai',
                addressCountry: 'AE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 25.1865,
                longitude: 55.2622,
              },
              areaServed: [
                { '@type': 'City', name: 'Dubai' },
                { '@type': 'City', name: 'Abu Dhabi' },
                { '@type': 'City', name: 'Sharjah' },
                { '@type': 'City', name: 'Ajman' },
                { '@type': 'City', name: 'Ras Al Khaimah' },
                { '@type': 'Country', name: 'United Arab Emirates' },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Saturday',
                  ],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              priceRange: '$$',
              currenciesAccepted: 'AED',
              paymentAccepted: 'Cash, Credit Card, Bank Transfer',
              sameAs: ['https://wa.me/97145551234'],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Technical Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plumbing & Drain Cleaning' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heavy Crane Services' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HVAC & AC Maintenance' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Painting & Decor' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical Services' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'General Construction' } },
                ],
              },
            }),
          }}
        />
        {/* Skip-to-content link for keyboard / screen-reader users */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
