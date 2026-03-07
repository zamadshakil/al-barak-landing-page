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
    default: 'AL BARZAK Technical Services | Professional Contracting & Maintenance Dubai',
    template: '%s | AL BARZAK Technical Services',
  },
  description: 'AL BARZAK TECHNICAL SERVICES L.L.C — Licensed contracting and technical services in Dubai, UAE. Painting, carpentry, glass & aluminium, tiling, plumbing, steel works, insulation, and more. Call +971 56 955 6726.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://albarak.online'
  ),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'technical services Dubai',
    'painting contractor Dubai',
    'carpentry Dubai',
    'glass aluminium installation Dubai',
    'tiling works Dubai',
    'plumbing services Dubai',
    'steel installation Dubai',
    'insulation contractor Dubai',
    'metal fabrication Dubai',
    'plaster works Dubai',
    'maintenance services UAE',
    'AL BARZAK Technical Services',
    'building maintenance Dubai',
    'contracting company Dubai',
    'fit-out contractor Dubai',
    'sanitary pipe repair Dubai',
  ],
  openGraph: {
    title: 'AL BARZAK Technical Services | Professional Contracting & Maintenance Dubai',
    description: 'Licensed professionals delivering painting, carpentry, glass & aluminium, tiling, plumbing, steel, and insulation services across Dubai, UAE.',
    siteName: 'AL BARZAK Technical Services',
    locale: 'en_AE',
    type: 'website',
    url: 'https://albarak.online',
    images: [
      {
        url: '/Logo.jpeg',
        width: 512,
        height: 512,
        alt: 'AL BARZAK Technical Services Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AL BARZAK Technical Services | Professional Contracting & Maintenance Dubai',
    description: 'Licensed professionals delivering painting, carpentry, glass & aluminium, tiling, plumbing, steel, and insulation services across Dubai, UAE.',
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
              name: 'AL BARZAK TECHNICAL SERVICES L.L.C',
              alternateName: 'AL BARZAK Technical Services',
              url: 'https://albarak.online',
              logo: 'https://albarak.online/Logo.jpeg',
              image: 'https://albarak.online/Logo.jpeg',
              description:
                'Licensed contracting and technical services company in Dubai, UAE. Painting, carpentry, glass & aluminium, tiling, metal works, steel products, plumbing, plastering, pipe repair, and insulation.',
              telephone: '+971569556726',
              email: 'mahrabuzar143@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'First Floor, Office 101, AL ZAHRA TECHNO CENTER',
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
              sameAs: ['https://wa.me/971569556726'],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Technical Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Painting Contracting' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carpentry & Wood Flooring Works' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Glass & Aluminum Installation & Maintenance' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Floor & Wall Tiling Works' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Metal Parts & Erections Contracting' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Steel Products Installation & Maintenance' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plumbing & Sanitary Installation' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plaster Works' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sanitary Installation & Pipes Repairing' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Insulation Contracting' } },
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
