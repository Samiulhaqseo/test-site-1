import { BusinessConfig, ServiceItem, GalleryItem, FaqItem } from '../types';

export const initialBusinessConfig: BusinessConfig = {
  businessName: 'MOAR DETAILS',
  tagline: 'MOBILE VALETING & DETAILING',
  ownerName: 'Hamish Moar',
  yearsExperience: 30,
  phone: '+44 7354 690065',
  email: 'hamishmoar747@gmail.com',
  location: 'Aberdeenshire, UK',
  serviceRadius: 'All Aberdeenshire & surrounding areas',
  currencySymbol: '£',
  accentColor: 'orange',
  isEditable: false,
  servicedTowns: [
    'Peterhead',
    'Inverurie',
    'Stonehaven',
    'Fraserburgh',
    'Westhill',
    'Aberdeen City Centre',
    'Dyce',
    'Kingswells',
    'Cults & Bieldside',
    'Peterculter',
    'Banchory',
    'Bridge of Don',
    'Ellon',
    'Kintore'
  ],
  openingHours: {
    weekdays: 'Monday – Saturday: 8:00 AM – 6:30 PM',
    sunday: 'Sunday: By Appointment'
  }
};

export const defaultServices: ServiceItem[] = [
  {
    id: 'mobile-valeting',
    category: 'valeting',
    title: 'Mobile Car Valeting & Detailing',
    price: 65,
    duration: '2 - 3 Hours',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Complete interior and exterior hand valeting brought directly to your home or office. Thorough, safe, and swirl-free.',
    bulletPoints: [
      '100% Mobile service at your driveway or work',
      'Two-bucket swirl-prevention hand wash',
      'Alloy wheels, arches & barrel deep clean'
    ],
    fullProcess: [
      'Non-acidic citrus pre-wash soak to dissolve traffic film',
      'pH-neutral snow foam bath lifting surface grit safely',
      'Deep alloy wheel, barrel & inner arch degreasing with soft woolies',
      'Two-bucket hand wash with grit guards & plush microfibre wash mitts',
      'Hydrophobic gloss-enhancing rinse aid applied',
      'Ultra-plush twisted loop towel & warm air blower drying',
      'Interior vacuum of carpets, floor mats, seats & boot area',
      'Dash, console & door card cleansing with matte factory finish'
    ],
    recommendedFor: 'Routine monthly vehicle maintenance and daily drivers'
  },
  {
    id: 'interior-deep-cleanse',
    category: 'interior',
    title: 'Interior Deep Cleaning & Valeting',
    price: 85,
    duration: '2.5 - 4 Hours',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Intensive sanitation, wet vacuum extraction, stain removal, leather conditioning, and deep odour neutralisation.',
    bulletPoints: [
      'Hot water extraction on seats & carpets',
      'Steam cleaning & bacterial sanitisation',
      'Specialist leather deep cleanse & matte conditioner'
    ],
    fullProcess: [
      'Full dry vacuum with compressed tornador air blowers for crevices',
      'Deep shampoo and hot-water injection extraction on all fabrics',
      'Stubborn spot stain treatment (coffee, makeup, grease, mud)',
      'High-pressure dry steam sanitisation of vents, cup holders & trims',
      'pH-balanced leather cleanse with soft horsehair brushes',
      'UV-protective, non-greasy matte leather nourishing balm',
      'Antibacterial smoke/pet odour elimination treatment',
      'Crystal streak-free glass polish inside and out'
    ],
    recommendedFor: 'Cars with spilled drinks, pet hair, dirt buildup, or used car refresh'
  },
  {
    id: 'paint-correction',
    category: 'polishing',
    title: 'Machine Polishing & Paint Correction',
    price: 195,
    duration: '1 - 2 Days',
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Single and multi-stage machine polishing to permanently eliminate swirl marks, light scratches, oxidation, and buffer trails.',
    bulletPoints: [
      'Paint depth gauge inspection & panel masking',
      '1-Stage or 2-Stage dual-action machine correction',
      'Removes 70% to 90%+ of paint swirls & hazing'
    ],
    fullProcess: [
      'Multi-stage chemical and clay bar decontamination',
      'Digital ultrasonic paint depth measurement on every panel',
      'Precision delicate trim and rubber masking with low-tack tape',
      'Compound stage machine polishing with microfibre/wool pads',
      'Refining jewelling polish on soft foam pads for extreme gloss',
      'IPA panel wipe down to verify genuine correction under sun lights',
      'Synthetic sealant or spray ceramic base coat protection'
    ],
    recommendedFor: 'Cars with dull, faded, wash-scratched paint needing showroom clarity'
  },
  {
    id: 'decontamination-wax',
    category: 'decontamination',
    title: 'Decontamination Washes & Wax Protection',
    price: 110,
    duration: '3 - 4 Hours',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Specialised chemical fallout removal, clay bar treatment, and high-grade carnauba or synthetic seal protection.',
    bulletPoints: [
      'Citrus pre-wash & high-foaming bath',
      'Iron & fallout remover (turns purple on brake dust)',
      'Tar & glue dissolution treatment'
    ],
    fullProcess: [
      'Citrus degreaser pre-spray to dissolve road film',
      'Heavy foaming snow bath with safe agitation',
      'Specialist iron fallout remover dissolving embedded brake filings',
      'Solvent tar and glue remover targeting stubborn road splatter',
      'Grade-specific clay bar glide to pull remaining micro-contaminants',
      'Hand-applied premium Collinite or Swissvax Carnauba paste wax',
      'Exterior plastic & rubber trim rejuvenation'
    ],
    recommendedFor: 'Winter protection or post-winter salt and road grime decontamination'
  },
  {
    id: 'ceramic-coating',
    category: 'ceramic',
    title: 'Ceramic Coating & Paint Protection',
    price: 320,
    duration: '1 - 2 Days',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Ultra-durable 2 to 5-year ceramic quartz barrier protecting against UV rays, acid rain, bird lime, and road salts.',
    bulletPoints: [
      'Full chemical decontamination & prep wipe',
      'Single-stage machine polish enhancement',
      '9H ceramic glass coating application'
    ],
    fullProcess: [
      'Complete 24-step decontamination wash & clay bar prep',
      'Single-stage machine jewelling to maximize clear-coat gloss',
      'Residue-free alcohol panel prep to guarantee chemical bonding',
      'Hand application of 9H high-solids SiO2 ceramic quartz layer',
      'Wheel faces and exhaust tips coated for easy future cleaning',
      'Controlled infrared heat lamp curing',
      'Warranty certificate & care guide handover'
    ],
    recommendedFor: 'New vehicle protection, sports cars, and long-term weatherproofing'
  },
  {
    id: 'fleet-prestige',
    category: 'fleet',
    title: 'Fleet & Prestige Vehicle Detailing',
    price: 'POA',
    duration: 'Custom',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Tailored mobile maintenance contracts for luxury SUVs, commercial vans, classic restorations, and business fleets.',
    bulletPoints: [
      'Scheduled weekly, fortnightly, or monthly visits',
      'On-site mobile servicing at business premises',
      'Consistently pristine corporate image'
    ],
    fullProcess: [
      'Custom audit of your corporate or private fleet requirements',
      'Flexible off-peak or weekend scheduling directly at your facility',
      'Standardized multi-point valeting checklist for every unit',
      'Direct monthly invoicing and priority emergency callouts'
    ],
    recommendedFor: 'Executive car fleets, dealerships, wedding cars, and collectors'
  }
];

export const defaultGallery: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Deep Gloss Paint Enhancement',
    category: 'correction',
    categoryLabel: 'PAINT CORRECTION',
    badge: 'STAGE 2 CORRECTION',
    afterImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=900&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=900&q=80',
    description: 'Black metallic paintwork restored after years of automated rotary brush wash damage. 85%+ swirl elimination.'
  },
  {
    id: 'g2',
    title: 'Precision Swirl Removal',
    category: 'polishing',
    categoryLabel: 'MACHINE POLISHING',
    badge: 'SWIRL REMOVAL',
    afterImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=900&q=80',
    description: '50/50 bonnet split showing heavy holograms eradicated under 5000K LED inspection lighting.'
  },
  {
    id: 'g3',
    title: 'Interior Deep Extraction & Leather Care',
    category: 'interior',
    categoryLabel: 'INTERIOR CLEANSE',
    badge: 'DEEP SANITISATION',
    afterImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=900&q=80',
    description: 'Full leather deep scrub, extraction of stained floor mats, and satin UV protection on all dash panels.'
  },
  {
    id: 'g4',
    title: 'Paint Decontamination & Wax Protection',
    category: 'decontamination',
    categoryLabel: 'DECONTAMINATION',
    badge: 'IRON FALLOUT & WAX',
    afterImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80',
    description: 'Severe industrial fallout chemical dissolve followed by hand-buffed carnauba wax shield.'
  },
  {
    id: 'g5',
    title: 'Luxury 4x4 Mobile Valeting',
    category: 'valet',
    categoryLabel: 'MOBILE VALET',
    badge: 'DRIVEWAY VALET',
    afterImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80',
    description: 'Complete mobile overhaul on customer driveway with on-board filtered water and quiet generator.'
  },
  {
    id: 'g6',
    title: 'Ceramic Coating & Showroom Gloss',
    category: 'ceramic',
    categoryLabel: 'CERAMIC COATING',
    badge: '9H QUARTZ COAT',
    afterImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    description: '3-year ceramic quartz application delivering extreme water beading and deep mirror reflection.'
  }
];

export const defaultFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do you come directly to my location in Aberdeenshire?',
    answer: 'Yes! MOAR DETAILS is a 100% mobile valeting and detailing service. We come directly to your home driveway, apartment parking, or workplace anywhere across Aberdeen City and throughout Aberdeenshire including Westhill, Dyce, Kingswells, Cults, Banchory, Inverurie, Stonehaven, and Ellon.'
  },
  {
    id: 'faq-2',
    question: 'Do you need access to water and electricity?',
    answer: 'Our bespoke mobile detailing van is completely self-contained with its own pure spot-free water tank and onboard whisper-quiet power generation. We can comfortably work in driveways, corporate car parks, or residential streets without needing to plug into your supplies unless specifically requested.'
  },
  {
    id: 'faq-3',
    question: 'What is the difference between a quick car wash and detailing?',
    answer: 'A standard roadside hand car wash or automated roller wash frequently uses harsh caustic traffic film removers, dirty sponges, and gritty water that permanently score clear coats with swirl marks. Detailing is a surgical, restorative craft utilizing pH-neutral snow foams, two-bucket hand washing with grit guards, chemical fallout dissolution, paint depth measurement, and precision dual-action machine polishing.'
  },
  {
    id: 'faq-4',
    question: 'How long does a typical service take?',
    answer: 'A comprehensive Mobile Valet usually takes 2 to 3 hours. An Interior Deep Cleanse takes 2.5 to 4 hours. Multi-stage Machine Polishing or Ceramic Coating packages require between 1 and 2 full working days to allow proper surface correction and coating cure time.'
  },
  {
    id: 'faq-5',
    question: 'How do I pay for my service?',
    answer: 'We accept all major credit/debit cards on-site via our mobile contactless card terminal (Visa, Mastercard, Apple Pay, Google Pay), instant bank transfer, or cash upon thorough inspection and complete customer satisfaction.'
  },
  {
    id: 'faq-6',
    question: 'Do I need to stay while you work on the vehicle?',
    answer: 'Not at all. You are welcome to inspect the vehicle with Hamish at the start, hand over the keys, and relax indoors or continue your workday. We will notify you 15 minutes before completion so you can conduct a final walkthrough inspection.'
  },
  {
    id: 'faq-7',
    question: 'How often should I book a mobile valet or detail?',
    answer: 'For everyday commuter vehicles, we recommend a maintenance mobile valet every 3 to 4 weeks. High-grade waxes and ceramic sealants should receive a chemical decontamination de-salting wash every 4 to 6 months to maintain peak water-beading performance.'
  },
  {
    id: 'faq-8',
    question: 'How do I book an appointment with Hamish?',
    answer: 'You can tap any of the "Book Now / Get Quote" buttons to submit your vehicle details, or call/message Hamish directly at +44 7354 690065. We will confirm your preferred date, time slot, and address promptly.'
  }
];
