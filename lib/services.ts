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
  imageAlt: string
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
    slug: "painting-contracting",
    title: "Painting Contracting",
    shortDescription:
      "Professional interior and exterior painting services for residential, commercial, and industrial properties across the UAE.",
    heroDescription:
      "Transform your space with our expert painting contracting services. From villa repaints to large-scale commercial projects, we deliver flawless finishes using premium paints and meticulous surface preparation techniques.",
    image: "/images/service-painting-contracting.jpg",
    imageAlt: "Professional painter applying premium wall coatings in Dubai",
    icon: "Paintbrush",
    color: "primary",
    features: [
      "Interior Painting",
      "Exterior Coating",
      "Texture Finishes",
      "Waterproofing Paint",
      "Colour Consultation",
      "Surface Preparation",
    ],
    details: [
      {
        heading: "Interior & Exterior Painting",
        text: "From single rooms to entire building facades, our painters deliver clean, even finishes with minimal disruption. We prepare all surfaces thoroughly — filling cracks, sanding, and priming — to ensure paint adhesion and longevity.",
      },
      {
        heading: "Commercial & Industrial Painting",
        text: "We handle large-scale painting projects for offices, warehouses, retail spaces, and industrial facilities. Our team works around your schedule to minimise business disruption while delivering exceptional results.",
      },
      {
        heading: "Speciality Finishes",
        text: "We offer decorative finishes including Venetian plaster, metallic effects, textured walls, and anti-graffiti coatings. Our skilled painters create bespoke finishes that elevate any environment.",
      },
    ],
    benefits: [
      "Premium paints from trusted brands (Jotun, Dulux, National)",
      "Thorough surface preparation for lasting results",
      "Colour consultation included",
      "Clean, professional work practices",
      "Satisfaction guarantee on all projects",
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
    slug: "carpentry-wood-flooring",
    title: "Carpentry & Wood Flooring Works",
    shortDescription:
      "Expert carpentry and premium wood flooring installation, repair, and restoration services for homes and businesses in Dubai.",
    heroDescription:
      "From custom joinery and built-in furniture to hardwood floor installation and restoration, our skilled carpenters deliver precision craftsmanship that adds warmth and value to your property.",
    image: "/images/service-carpentry-wood-flooring.jpg",
    imageAlt: "Skilled carpenter installing hardwood flooring in a UAE residence",
    icon: "Hammer",
    color: "accent",
    features: [
      "Custom Joinery",
      "Wood Floor Installation",
      "Floor Sanding & Polishing",
      "Built-in Furniture",
      "Door & Window Fitting",
      "Partition Work",
    ],
    details: [
      {
        heading: "Custom Carpentry & Joinery",
        text: "Our carpenters create bespoke wardrobes, kitchen cabinets, shelving units, and furniture pieces tailored to your exact specifications. We work with a variety of woods and finishes to match your interior design.",
      },
      {
        heading: "Wood Flooring Installation",
        text: "We install all types of wood flooring including solid hardwood, engineered wood, parquet, and laminate. Our team ensures precise levelling, proper acclimatisation, and seamless installation for a beautiful, lasting floor.",
      },
      {
        heading: "Floor Restoration & Refinishing",
        text: "Breathe new life into worn wooden floors with our professional sanding, staining, and sealing services. We restore damaged or aged floors to their original beauty while protecting them against future wear.",
      },
    ],
    benefits: [
      "Skilled craftsmen with years of experience",
      "High-quality materials and hardware",
      "Custom designs to your specifications",
      "Clean installation with minimal disruption",
      "After-service support and warranty",
    ],
    faqs: [
      {
        question: "What types of wood flooring do you install?",
        answer:
          "We install solid hardwood, engineered wood, parquet, laminate, and vinyl plank flooring. We can advise on the best option based on your usage, budget, and climate considerations.",
      },
      {
        question: "Can you build custom furniture?",
        answer:
          "Yes, our carpenters specialise in bespoke furniture including wardrobes, kitchen cabinets, TV units, bookshelves, and office desks — all made to measure.",
      },
      {
        question: "How long does wood floor installation take?",
        answer:
          "A standard apartment typically takes 3–5 days for installation, including subfloor preparation. Larger villas may take 7–10 days depending on the scope.",
      },
    ],
  },
  {
    slug: "glass-aluminum",
    title: "Glass & Aluminum Installation & Maintenance",
    shortDescription:
      "Professional glass and aluminium installation, replacement, and maintenance for windows, doors, facades, and partitions across Dubai.",
    heroDescription:
      "We specialise in the installation and maintenance of glass and aluminium systems including curtain walls, storefronts, shower enclosures, office partitions, and window replacements — built to withstand the UAE climate.",
    image: "/images/service-glass-aluminum.jpg",
    imageAlt: "Glass and aluminium window installation on a Dubai commercial building",
    icon: "Layers",
    color: "primary",
    features: [
      "Window Installation",
      "Aluminium Doors",
      "Glass Partitions",
      "Curtain Walls",
      "Shower Enclosures",
      "Facade Maintenance",
    ],
    details: [
      {
        heading: "Window & Door Systems",
        text: "We install and replace aluminium windows and doors with energy-efficient, double-glazed units. Our systems offer superior thermal and acoustic insulation, perfect for the UAE environment.",
      },
      {
        heading: "Glass Partitions & Enclosures",
        text: "Create modern, open-plan spaces with frameless glass partitions, shower enclosures, and balustrades. We supply tempered and laminated safety glass to meet all building code requirements.",
      },
      {
        heading: "Facade & Curtain Wall Maintenance",
        text: "Our maintenance team handles re-sealing, glass replacement, and structural repairs for building facades and curtain wall systems. We keep your building looking pristine and watertight.",
      },
    ],
    benefits: [
      "Energy-efficient glazing solutions",
      "Safety-rated tempered and laminated glass",
      "Professional sealant application",
      "Compliance with UAE building codes",
      "Expert facade maintenance services",
    ],
    faqs: [
      {
        question: "Can you replace individual glass panels in a facade?",
        answer:
          "Yes, we replace individual broken or damaged panels in curtain walls and facades. We match the existing glass specification for a seamless result.",
      },
      {
        question: "Do you install frameless shower enclosures?",
        answer:
          "Absolutely. We install frameless, semi-frameless, and framed shower enclosures using tempered safety glass in various thicknesses and finishes.",
      },
      {
        question: "What types of aluminium systems do you work with?",
        answer:
          "We work with all major aluminium profile systems including Technal, Schüco, Alumil, and local UAE brands. We can match existing profiles for renovation work.",
      },
    ],
  },
  {
    slug: "floor-wall-tiling",
    title: "Floor & Wall Tiling Works",
    shortDescription:
      "Expert floor and wall tiling installation and repair for kitchens, bathrooms, living areas, and commercial spaces throughout Dubai.",
    heroDescription:
      "Our skilled tilers deliver precision tile installation for every space — from porcelain and ceramic to natural stone and mosaic. We handle full bathroom and kitchen tiling, floor-to-ceiling installations, and intricate pattern work.",
    image: "/images/service-floor-wall-tiling.jpg",
    imageAlt: "Precise floor tiling and grouting works for a modern bathroom",
    icon: "Grid3X3",
    color: "accent",
    features: [
      "Porcelain Tiles",
      "Natural Stone",
      "Mosaic Work",
      "Bathroom Tiling",
      "Kitchen Backsplash",
      "Waterproof Membrane",
    ],
    details: [
      {
        heading: "Residential Tiling",
        text: "We transform bathrooms, kitchens, and living areas with precision tile installation. Our team handles surface preparation, waterproof membranes, and grouting to deliver beautiful, durable tiled surfaces.",
      },
      {
        heading: "Commercial Tiling",
        text: "From hotel lobbies to office flooring, we handle large-scale commercial tiling projects with speed and precision. We work with architects and designers to achieve the exact look specified.",
      },
      {
        heading: "Tile Repair & Replacement",
        text: "We repair cracked, chipped, or loose tiles and regrout worn joints. Our tile-matching service ensures seamless repairs that blend with existing installations.",
      },
    ],
    benefits: [
      "Precision cutting and laying",
      "Proper waterproofing under wet-area tiles",
      "Wide range of tile types and sizes",
      "Clean, grout-consistent finishes",
      "Repair service for existing tiled surfaces",
    ],
    faqs: [
      {
        question: "What tile sizes can you work with?",
        answer:
          "We work with all sizes from small mosaics to large-format tiles (120×60 cm and above). Our team has the equipment and experience for precision installation of any size.",
      },
      {
        question: "Do you provide waterproofing before tiling?",
        answer:
          "Yes, we always apply proper waterproof membranes in wet areas like bathrooms, kitchens, and balconies before tiling. This is essential for preventing water damage.",
      },
      {
        question: "Can you tile over existing tiles?",
        answer:
          "In some cases yes, provided the existing tiles are firmly bonded and the surface is properly prepared. We will assess and advise on the best approach during our site visit.",
      },
    ],
  },
  {
    slug: "metal-parts-erections",
    title: "Metal Parts & Erections Contracting",
    shortDescription:
      "Structural steel fabrication, metal parts supply, and erection services for construction and industrial projects in the UAE.",
    heroDescription:
      "We provide complete metal parts contracting — from fabrication and supply to on-site erection of structural steel, metal frameworks, railings, and industrial components with full safety compliance.",
    image: "/images/service-metal-parts-erections.jpg",
    imageAlt: "Steel structure erection and metal fabrication on a Dubai site",
    icon: "HardHat",
    color: "primary",
    features: [
      "Structural Steelwork",
      "Metal Fabrication",
      "Railing & Handrails",
      "Steel Erection",
      "Welding Services",
      "Industrial Metalwork",
    ],
    details: [
      {
        heading: "Structural Steel Erection",
        text: "Our certified erection teams handle steel frame assembly for buildings, warehouses, and industrial structures. We follow strict safety protocols and quality standards to deliver reliable structural work.",
      },
      {
        heading: "Metal Fabrication & Supply",
        text: "We fabricate custom metal components including gates, railings, staircases, canopies, and industrial parts. Our workshop produces precision metalwork using mild steel, stainless steel, and aluminium.",
      },
      {
        heading: "On-Site Welding & Repairs",
        text: "Our qualified welders perform on-site structural welding, equipment repairs, and metal modifications. We carry portable welding equipment and work across all emirates.",
      },
    ],
    benefits: [
      "Certified welders and erection teams",
      "In-house fabrication workshop",
      "Full compliance with safety standards",
      "Both ferrous and non-ferrous metals",
      "On-site and off-site capabilities",
    ],
    faqs: [
      {
        question: "What types of metal do you work with?",
        answer:
          "We work with mild steel, galvanised steel, stainless steel (304 and 316 grades), and aluminium. We can source and fabricate in any metal required for your project.",
      },
      {
        question: "Do you handle structural steel for buildings?",
        answer:
          "Yes, we provide complete structural steel services including design support, fabrication, delivery, and erection for commercial and industrial buildings.",
      },
      {
        question: "Are your welders certified?",
        answer:
          "Yes, all our welders hold valid certifications and are trained in multiple welding processes including MIG, TIG, and stick welding.",
      },
    ],
  },
  {
    slug: "steel-products",
    title: "Steel Products Installation & Maintenance",
    shortDescription:
      "Expert installation and maintenance of steel products including doors, gates, frames, handrails, and security grilles across Dubai.",
    heroDescription:
      "We install and maintain a wide range of steel products — from security doors and gates to handrails, bollards, and steel shelving. Our team ensures durable installations with proper anti-corrosion treatment for the UAE climate.",
    image: "/images/service-steel-products.jpg",
    imageAlt: "Installation of durable steel products, gates, and handrails",
    icon: "Wrench",
    color: "accent",
    features: [
      "Steel Door Installation",
      "Security Gates",
      "Handrails & Balustrades",
      "Bollard Installation",
      "Anti-corrosion Treatment",
      "Maintenance & Repair",
    ],
    details: [
      {
        heading: "Steel Door & Gate Installation",
        text: "We install fire-rated steel doors, security gates, roller shutters, and industrial doors for commercial, residential, and industrial applications. All installations meet UAE fire safety and security standards.",
      },
      {
        heading: "Handrails, Balustrades & Safety Barriers",
        text: "Our team installs stainless steel and mild steel handrails, balustrades, and safety barriers for staircases, balconies, ramps, and parking structures. All work meets accessibility and safety regulations.",
      },
      {
        heading: "Steel Product Maintenance",
        text: "Protect your steel installations from the harsh UAE climate with our maintenance services. We provide anti-rust treatment, repainting, hinge and lock repairs, and structural inspections.",
      },
    ],
    benefits: [
      "Fire-rated and security-compliant installations",
      "Anti-corrosion and weather protection",
      "Wide product range from gates to shelving",
      "Both supply and installation services",
      "Preventive maintenance programmes",
    ],
    faqs: [
      {
        question: "Do you supply and install fire-rated doors?",
        answer:
          "Yes, we supply and install fire-rated steel doors that meet UAE Civil Defence requirements. We provide all necessary certificates and documentation.",
      },
      {
        question: "Can you repair or refurbish existing steel products?",
        answer:
          "Absolutely. We repair, repaint, and refurbish steel doors, gates, railings, and other products. We can often restore steel items to like-new condition at a fraction of replacement cost.",
      },
      {
        question: "What anti-corrosion treatments do you offer?",
        answer:
          "We offer hot-dip galvanising, powder coating, anti-rust primer application, and marine-grade coatings — chosen based on the product and its exposure level.",
      },
    ],
  },
  {
    slug: "plumbing-sanitary",
    title: "Plumbing & Sanitary Installation",
    shortDescription:
      "Complete plumbing and sanitary installation services for new builds, renovations, and maintenance across Dubai and the UAE.",
    heroDescription:
      "From new plumbing installations to bathroom fit-outs and water heater setups, our licensed plumbers deliver reliable, code-compliant work for residential and commercial properties throughout the UAE.",
    image: "/images/service-plumbing-sanitary.jpg",
    imageAlt: "Licensed plumber performing sanitary installations and pipe fittings",
    icon: "Droplets",
    color: "primary",
    features: [
      "New Installations",
      "Bathroom Fit-outs",
      "Water Heaters",
      "Drainage Systems",
      "Fixture Installation",
      "Emergency Repairs",
    ],
    details: [
      {
        heading: "New Plumbing Installations",
        text: "We handle complete plumbing systems for new construction and major renovations — including water supply lines, drainage, waste systems, and fixture connections. All work is done to Dubai Municipality standards.",
      },
      {
        heading: "Bathroom & Kitchen Fit-outs",
        text: "Our plumbers install complete bathroom and kitchen plumbing including sinks, toilets, showers, bathtubs, dishwashers, and water filtration systems. We coordinate with tilers and other trades for seamless fit-outs.",
      },
      {
        heading: "Water Heater Installation",
        text: "We install and service all types of water heaters including tank, tankless, and solar systems. Our team handles both residential and commercial installations with full safety compliance.",
      },
    ],
    benefits: [
      "Licensed and insured plumbers",
      "Same-day service availability",
      "Transparent pricing with no hidden fees",
      "12-month warranty on all work",
      "Emergency response available",
    ],
    faqs: [
      {
        question: "Do you handle complete bathroom plumbing?",
        answer:
          "Yes, we provide full bathroom plumbing services from rough-in to finishing — including all fixtures, drainage, water supply, and water heater connections.",
      },
      {
        question: "Are your plumbers licensed?",
        answer:
          "Absolutely. All our plumbers hold valid trade licenses and meet Dubai Municipality requirements for plumbing work.",
      },
      {
        question: "Do you provide free estimates?",
        answer:
          "Yes, we provide free on-site estimates for all plumbing work. There are no call-out fees during regular business hours.",
      },
    ],
  },
  {
    slug: "plaster-works",
    title: "Plaster Works",
    shortDescription:
      "Professional plastering services including gypsum work, wall rendering, decorative mouldings, and false ceiling installation.",
    heroDescription:
      "Our plastering team delivers smooth, perfectly finished walls and ceilings for new builds and renovations. We specialise in gypsum plastering, wall rendering, decorative cornices, and false ceiling installations across Dubai.",
    image: "/images/service-plaster-works.jpg",
    imageAlt: "Expert applying smooth gypsum plaster finish to interior walls",
    icon: "PaintBucket",
    color: "accent",
    features: [
      "Gypsum Plastering",
      "Wall Rendering",
      "False Ceilings",
      "Decorative Mouldings",
      "Skim Coating",
      "Plaster Repairs",
    ],
    details: [
      {
        heading: "Gypsum Plastering & Rendering",
        text: "We apply machine and hand-applied gypsum plaster to walls and ceilings, creating perfectly smooth surfaces ready for painting. Our rendering services cover both interior and exterior walls with weather-resistant finishes.",
      },
      {
        heading: "False Ceilings & Partitions",
        text: "We install gypsum board false ceilings in various designs — flat, curved, multi-level, and with integrated lighting channels. We also build gypsum board partitions for office and residential space division.",
      },
      {
        heading: "Decorative Mouldings & Cornices",
        text: "Add elegance to any room with our decorative gypsum cornices, ceiling roses, and wall mouldings. We offer standard profiles and custom designs to complement your interior style.",
      },
    ],
    benefits: [
      "Smooth, paint-ready finishes",
      "Machine-applied plaster for consistency",
      "Creative false ceiling designs",
      "Custom decorative mouldings",
      "Fast turnaround times",
    ],
    faqs: [
      {
        question: "What is the difference between gypsum and cement plaster?",
        answer:
          "Gypsum plaster provides a smoother finish and is ideal for interior walls and ceilings. Cement plaster is more durable and moisture-resistant, making it suitable for exterior walls and wet areas.",
      },
      {
        question: "Can you install multi-level false ceilings?",
        answer:
          "Yes, we design and install multi-level gypsum board ceilings with integrated lighting channels, curves, and decorative elements to your specifications.",
      },
      {
        question: "How long does plastering take for a typical apartment?",
        answer:
          "A standard 2-bedroom apartment typically takes 5–7 days for complete plastering, including drying time. This may vary based on the condition of existing surfaces.",
      },
    ],
  },
  {
    slug: "sanitary-pipes-repairing",
    title: "Sanitary Installation & Pipes Repairing",
    shortDescription:
      "Specialised sanitary pipe repair, replacement, and maintenance services including leak detection, drain cleaning, and pipe relining.",
    heroDescription:
      "When pipes leak, drains clog, or sanitary systems fail, our expert team responds fast. We provide comprehensive pipe repair, replacement, drain cleaning, and leak detection services for homes and businesses across Dubai.",
    image: "/images/service-sanitary-pipes-repairing.jpg",
    imageAlt: "Plumbing technician repairing water pipes and resolving leaks",
    icon: "Pipette",
    color: "primary",
    features: [
      "Leak Detection",
      "Pipe Repair",
      "Drain Cleaning",
      "Pipe Replacement",
      "Hydro-jetting",
      "CCTV Inspection",
    ],
    details: [
      {
        heading: "Leak Detection & Pipe Repair",
        text: "We use advanced leak detection equipment to locate hidden leaks without unnecessary demolition. Our repair methods include pipe welding, clamping, epoxy lining, and sectional replacement to restore your system quickly.",
      },
      {
        heading: "Drain Cleaning & Unblocking",
        text: "We clear blocked drains, toilets, and sewer lines using high-pressure hydro-jetting and mechanical snaking. Our CCTV camera inspection identifies the cause and location of blockages for targeted solutions.",
      },
      {
        heading: "Pipe Replacement & Relining",
        text: "When repair is not enough, we provide full pipe replacement using modern CPVC, PPR, and PVC materials. For minimal disruption, we also offer trenchless pipe relining technology.",
      },
    ],
    benefits: [
      "Non-invasive leak detection technology",
      "24/7 emergency response available",
      "CCTV pipe inspection capability",
      "Modern pipe materials and methods",
      "Preventive maintenance programmes",
    ],
    faqs: [
      {
        question: "How do you detect hidden leaks?",
        answer:
          "We use thermal imaging, acoustic detection, and moisture meters to locate leaks behind walls, under floors, and in concealed pipe runs — all without breaking walls unless absolutely necessary.",
      },
      {
        question: "Can you clear tree root blockages?",
        answer:
          "Yes, we use high-pressure hydro-jetting and root-cutting equipment to clear tree root intrusions from drainage pipes. We also advise on long-term solutions to prevent recurrence.",
      },
      {
        question: "Do you provide emergency pipe repair?",
        answer:
          "Yes, we offer emergency pipe repair services. Call us and our team will respond as quickly as possible to prevent water damage to your property.",
      },
    ],
  },
  {
    slug: "insulation-contracting",
    title: "Insulation Contracting",
    shortDescription:
      "Thermal, acoustic, and waterproof insulation solutions for buildings, pipelines, ductwork, and industrial facilities in Dubai.",
    heroDescription:
      "Beat the UAE heat and reduce energy costs with our professional insulation services. We provide thermal, acoustic, and waterproof insulation for roofs, walls, pipes, HVAC ducts, and industrial equipment across Dubai.",
    image: "/images/service-insulation-contracting.jpg",
    imageAlt: "Contractor installing thermal and acoustic insulation materials in UAE building",
    icon: "Shield",
    color: "accent",
    features: [
      "Thermal Insulation",
      "Roof Waterproofing",
      "Acoustic Insulation",
      "Pipe Insulation",
      "Duct Insulation",
      "Cool Roof Systems",
    ],
    details: [
      {
        heading: "Thermal & Roof Insulation",
        text: "We install high-performance thermal insulation for roofs, walls, and floors using materials like polyurethane foam, rock wool, and XPS boards. Proper insulation can reduce AC energy costs by up to 40% in the UAE climate.",
      },
      {
        heading: "Waterproofing Solutions",
        text: "Protect your building from water ingress with our waterproofing solutions for roofs, basements, bathrooms, and terraces. We use membrane systems, liquid coatings, and crystalline treatments for lasting protection.",
      },
      {
        heading: "Pipe & Duct Insulation",
        text: "We insulate chilled and hot water pipes, HVAC ductwork, and industrial pipelines to prevent condensation, energy loss, and noise transmission. Our materials meet UAE Estidama and green building requirements.",
      },
    ],
    benefits: [
      "Significant energy cost savings",
      "Protection against water damage",
      "Improved indoor comfort and acoustics",
      "Green building compliant materials",
      "Long-term performance warranties",
    ],
    faqs: [
      {
        question: "How much can insulation save on energy bills?",
        answer:
          "Proper roof and wall insulation in the UAE can reduce cooling costs by 25–40%. The investment typically pays for itself within 2–3 years through energy savings.",
      },
      {
        question: "What waterproofing systems do you use?",
        answer:
          "We use APP and SBS modified bitumen membranes, polyurethane liquid coatings, cementitious crystalline systems, and EPDM rubber membranes — selected based on the application and exposure conditions.",
      },
      {
        question: "Can you insulate existing buildings?",
        answer:
          "Yes, we retrofit insulation in existing buildings. Options include external wall insulation, roof overlays, spray foam application, and pipe/duct wrapping — all achievable without major structural changes.",
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
