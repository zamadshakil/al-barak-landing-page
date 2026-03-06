/**
 * Central services data — single source of truth used by:
 *   • /services listing page
 *   • /services/[slug] detail pages
 *   • Landing page services section
 *   • Footer service links
 */

export interface Service {
  slug: string
  title: string
  shortDescription: string
  heroDescription: string
  image: string
  icon: string // lucide icon name
  color: "primary" | "accent"
  features: string[]
  details: {
    heading: string
    text: string
  }[]
  benefits: string[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const services: Service[] = [
  {
    slug: "plumbing-drain-cleaning",
    title: "Plumbing & Drain Cleaning",
    shortDescription:
      "Whether it is cleaning a clogged drain or replacing pipes, our team knows what is right and will offer you the best solution at affordable prices.",
    heroDescription:
      "From minor leak repairs to full pipe replacements, our licensed plumbers deliver fast, reliable solutions across residential and commercial properties in the UAE. We use modern equipment and techniques to ensure lasting results.",
    image: "/images/service-plumbing.jpg",
    icon: "Droplets",
    color: "primary",
    features: [
      "Emergency Repairs",
      "Drain Cleaning",
      "Water Heater Services",
      "Pipe Replacement",
      "Leak Detection",
      "Bathroom Renovation",
    ],
    details: [
      {
        heading: "24/7 Emergency Plumbing",
        text: "Water emergencies do not wait for business hours. Our emergency plumbing team is available around the clock to handle burst pipes, severe leaks, and flooding situations. We guarantee a rapid response time across Dubai, Abu Dhabi, and Sharjah.",
      },
      {
        heading: "Advanced Drain Cleaning",
        text: "We use high-pressure hydro-jetting and CCTV camera inspection to locate and clear even the most stubborn blockages. Our preventive drain maintenance programmes keep your systems flowing smoothly year-round.",
      },
      {
        heading: "Water Heater Installation & Repair",
        text: "Whether you need a new water heater installed or your existing unit serviced, our technicians are trained on all major brands. We handle both tank and tankless systems for residential and commercial applications.",
      },
    ],
    benefits: [
      "Licensed and insured plumbers",
      "Same-day service availability",
      "Transparent pricing with no hidden fees",
      "12-month warranty on all repairs",
      "Eco-friendly solutions available",
    ],
    faqs: [
      {
        question: "How quickly can you respond to a plumbing emergency?",
        answer:
          "We aim to arrive within 60 minutes for emergency calls in Dubai. For other Emirates, response times are typically 1–2 hours depending on location.",
      },
      {
        question: "Do you provide free estimates?",
        answer:
          "Yes, we provide free on-site estimates for all plumbing work. There are no call-out fees during regular business hours.",
      },
      {
        question: "Are your plumbers licensed?",
        answer:
          "Absolutely. All our plumbers are Dubai Municipality approved and hold valid trade licenses for their specialisations.",
      },
    ],
  },
  {
    slug: "heavy-crane-services",
    title: "Heavy Crane Services",
    shortDescription:
      "We provide professional crane operations for construction, industrial lifting, and specialized heavy equipment positioning with top safety standards.",
    heroDescription:
      "Our crane division operates a fleet of mobile and tower cranes capable of handling lifts from 5 to 500 tonnes. Every operation is planned and executed by certified operators with a perfect safety record.",
    image: "/images/service-crane.jpg",
    icon: "Container",
    color: "accent",
    features: [
      "Mobile Cranes",
      "Tower Cranes",
      "Safe Operations",
      "Heavy Lifting",
      "Industrial Transport",
      "Equipment Positioning",
    ],
    details: [
      {
        heading: "Mobile Crane Hire",
        text: "Our fleet of mobile cranes ranges from 25-tonne city cranes to 500-tonne all-terrain models. Each unit comes with a certified operator, rigging team, and comprehensive insurance coverage.",
      },
      {
        heading: "Tower Crane Operations",
        text: "For long-term construction projects, we provide tower crane installation, operation, and maintenance services. Our engineers handle everything from foundation design to dismantling.",
      },
      {
        heading: "Lift Planning & Engineering",
        text: "Every heavy lift begins with detailed engineering analysis. Our qualified lift planners calculate load weights, determine rigging configurations, and produce comprehensive method statements for every operation.",
      },
    ],
    benefits: [
      "Certified crane operators",
      "Comprehensive insurance coverage",
      "Detailed lift planning included",
      "Fleet range: 25T to 500T",
      "Perfect safety record",
    ],
    faqs: [
      {
        question: "What is the maximum lifting capacity?",
        answer:
          "Our largest mobile crane can handle up to 500 tonnes. For heavier lifts, we provide tandem lift solutions using multiple cranes.",
      },
      {
        question: "Do you handle permits and approvals?",
        answer:
          "Yes, we assist with all necessary permits from Dubai Municipality, RTA road closure permits, and any other regulatory approvals required for the operation.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least 1–2 weeks in advance for standard lifts. Emergency mobilisation is available within 24–48 hours subject to fleet availability.",
      },
    ],
  },
  {
    slug: "hvac-ac-maintenance",
    title: "HVAC & AC Maintenance",
    shortDescription:
      "Stay cool and comfortable! Our expert technicians handle AC installation, maintenance, duct cleaning, and emergency repairs around the clock.",
    heroDescription:
      "UAE temperatures demand reliable air conditioning. Our HVAC division provides complete climate control solutions — from routine maintenance that prevents breakdowns to emergency repairs that restore comfort fast.",
    image: "/images/service-hvac.jpg",
    icon: "Wind",
    color: "primary",
    features: [
      "AC Installation",
      "Duct Cleaning",
      "24/7 Emergency",
      "Preventive Maintenance",
      "Chiller Services",
      "Indoor Air Quality",
    ],
    details: [
      {
        heading: "Annual Maintenance Contracts",
        text: "Our AMC plans include regular inspections, filter replacements, coil cleaning, and gas top-ups. Preventive maintenance extends the life of your AC systems by up to 40% and reduces energy consumption significantly.",
      },
      {
        heading: "Duct Cleaning & Sanitisation",
        text: "Over time, dust, mould, and allergens accumulate in ductwork. Our specialised cleaning equipment removes contaminants and improves indoor air quality, which is especially important in the dusty UAE climate.",
      },
      {
        heading: "Emergency AC Repair",
        text: "When your AC breaks down in the middle of summer, we understand the urgency. Our 24/7 emergency team carries common replacement parts and can resolve most issues in a single visit.",
      },
    ],
    benefits: [
      "All major brands serviced",
      "Energy efficiency improvements",
      "DEWA-compliant installations",
      "Parts availability for fast repairs",
      "AMC plans from AED 500/year",
    ],
    faqs: [
      {
        question: "How often should AC maintenance be performed?",
        answer:
          "We recommend servicing your AC units at least twice a year — once before summer and once before winter. Monthly filter cleaning is also advisable in the UAE climate.",
      },
      {
        question: "Can you service centralised AC systems?",
        answer:
          "Yes, we service all types including split units, centralised systems, VRF/VRV systems, and chiller-based cooling for commercial buildings.",
      },
      {
        question: "Do you offer annual maintenance contracts?",
        answer:
          "Yes, our AMC plans cover regular servicing, priority emergency response, and discounted repair rates. Plans start from AED 500 per year for residential units.",
      },
    ],
  },
  {
    slug: "painting-decor",
    title: "Painting & Decor",
    shortDescription:
      "Transform your space with our professional painting services. We offer interior and exterior painting with expert color consultation.",
    heroDescription:
      "A fresh coat of paint transforms any space. Our painting and decoration team handles everything from villa repaints to large commercial projects, delivering flawless finishes with premium materials and meticulous preparation.",
    image: "/images/service-painting.jpg",
    icon: "Paintbrush",
    color: "accent",
    features: [
      "Interior Painting",
      "Exterior Coating",
      "Wallpaper Installation",
      "Colour Consultation",
      "Texture Finishes",
      "Waterproofing Paint",
    ],
    details: [
      {
        heading: "Interior Painting",
        text: "From single rooms to entire buildings, our painters deliver clean, even finishes with minimal disruption. We prepare all surfaces properly — filling cracks, sanding, and priming — to ensure the paint lasts for years.",
      },
      {
        heading: "Exterior Coating & Protection",
        text: "UAE sun, sand, and humidity demand specialised exterior coatings. We use weather-resistant paints and waterproof finishes that protect your building and maintain their appearance in harsh conditions.",
      },
      {
        heading: "Wallpaper & Decorative Finishes",
        text: "We install all types of wallpaper including vinyl, fabric, and custom-printed designs. Our team also creates bespoke decorative finishes like Venetian plaster, metallic effects, and textured walls.",
      },
    ],
    benefits: [
      "Premium paints from trusted brands",
      "Thorough surface preparation",
      "Colour consultation included",
      "Clean, tidy work practices",
      "Satisfaction guarantee",
    ],
    faqs: [
      {
        question: "How long does it take to paint a villa?",
        answer:
          "A typical 3-bedroom villa interior takes 4–6 days. This includes preparation, two coats of paint, and touch-ups. Timelines vary based on condition and scope.",
      },
      {
        question: "Do you supply the paint?",
        answer:
          "Yes, we supply premium paints from brands like Jotun, Dulux, and National Paints. You can also supply your own paint if preferred.",
      },
      {
        question: "Can you match existing colours?",
        answer:
          "Absolutely. We use computerised colour-matching equipment to replicate any existing colour with precision.",
      },
    ],
  },
  {
    slug: "electrical-services",
    title: "Electrical Services",
    shortDescription:
      "Our licensed electricians provide safe and reliable electrical solutions, from simple repairs to complete wiring and smart home systems.",
    heroDescription:
      "Electrical work demands precision and safety. Our DEWA-certified electricians handle everything from socket repairs to full building rewiring, smart home automation, and energy-efficient lighting upgrades across the UAE.",
    image: "/images/service-electrical.jpg",
    icon: "Zap",
    color: "primary",
    features: [
      "Electrical Repairs",
      "Panel Upgrades",
      "Smart Systems",
      "Lighting Design",
      "Safety Inspections",
      "EV Charger Installation",
    ],
    details: [
      {
        heading: "Residential Electrical Services",
        text: "From replacing a faulty socket to rewiring an entire villa, our residential electricians handle it all. We perform thorough diagnostics before any work begins and ensure all installations meet DEWA standards.",
      },
      {
        heading: "Commercial & Industrial",
        text: "Our commercial division handles office fit-outs, warehouse installations, and industrial panel work. We work with project managers and contractors to deliver on schedule and within budget.",
      },
      {
        heading: "Smart Home Automation",
        text: "We design and install smart home systems including automated lighting, motorised blinds, smart thermostats, and integrated security systems. Compatible with major platforms like Control4, KNX, and Lutron.",
      },
    ],
    benefits: [
      "DEWA-certified electricians",
      "Compliance certificates provided",
      "Emergency callout available",
      "Smart home integration",
      "Energy audit services",
    ],
    faqs: [
      {
        question: "Are your electricians DEWA certified?",
        answer:
          "Yes, all our electricians hold valid DEWA certification and Dubai Municipality trade licences. We provide compliance certificates for all installations.",
      },
      {
        question: "Can you install EV chargers?",
        answer:
          "Yes, we install home and commercial EV charging stations from brands like ABB, Wallbox, and Tesla. We handle the DEWA application process as well.",
      },
      {
        question: "Do you provide electrical safety inspections?",
        answer:
          "Yes, we offer comprehensive electrical safety audits for homes and businesses. Our reports identify potential hazards and recommend corrective actions.",
      },
    ],
  },
  {
    slug: "general-construction",
    title: "General Construction",
    shortDescription:
      "From renovations to fit-outs, our construction team delivers quality workmanship with attention to detail and project management expertise.",
    heroDescription:
      "Whether you are renovating a bathroom, fitting out an office, or building an extension, our construction team delivers quality workmanship on time and on budget. We manage every phase from design to handover.",
    image: "/images/service-construction.jpg",
    icon: "HardHat",
    color: "accent",
    features: [
      "Renovations",
      "Fit-outs",
      "Project Management",
      "Floor & Tile Work",
      "Carpentry",
      "Waterproofing",
    ],
    details: [
      {
        heading: "Villa & Apartment Renovation",
        text: "We transform dated properties into modern living spaces. Our renovation services include kitchen and bathroom remodelling, flooring replacement, partition work, and complete interior redesigns.",
      },
      {
        heading: "Commercial Fit-outs",
        text: "From retail shops to corporate offices, we deliver turnkey fit-out solutions. Our team coordinates with architects and designers to bring your vision to life, handling MEP, joinery, and finishing.",
      },
      {
        heading: "Project Management",
        text: "Every project gets a dedicated project manager who oversees timelines, budgets, and quality. We provide regular progress reports and maintain transparent communication throughout the project lifecycle.",
      },
    ],
    benefits: [
      "End-to-end project management",
      "Transparent cost breakdowns",
      "Dubai Municipality approved",
      "Quality materials sourced locally",
      "Post-handover support",
    ],
    faqs: [
      {
        question: "Do you handle municipality approvals?",
        answer:
          "Yes, we assist with all Dubai Municipality and relevant authority permits required for renovation and construction projects.",
      },
      {
        question: "Can you work while we occupy the space?",
        answer:
          "Yes, we regularly complete phased renovations in occupied homes and businesses. We plan the work to minimise disruption to your daily routine.",
      },
      {
        question: "What warranty do you provide?",
        answer:
          "We provide a 12-month defects liability period on all construction work. Structural elements carry extended warranties as per UAE building codes.",
      },
    ],
  },
]

/** Look up a service by its URL slug */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

/** All valid slugs — used by generateStaticParams */
export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
