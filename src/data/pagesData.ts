export interface CoreService {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  startingPrice: number;
  duration: string;
  image: string;
  heroImage: string;
  overview: string;
  whyNeeded: string;
  stages: {
    title: string;
    description: string;
  }[];
  vehiclePricing: {
    vehicle: string;
    description: string;
    price: string;
  }[];
  features: string[];
  equipment: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface CityLocation {
  id: string;
  slug: string;
  cityName: string;
  displayName: string;
  districtName: string;
  postcodes: string[];
  heroImage: string;
  description: string;
  responseTime: string;
  coverageAreas: string[];
  popularServices: string[];
  review: {
    author: string;
    car: string;
    quote: string;
    stars: number;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  image: string;
  specialty: string;
  bio: string;
  certifications: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      tip?: string;
    }[];
    conclusion: string;
  };
}

export const CORE_SERVICES: CoreService[] = [
  {
    id: 'mobile-car-detailing',
    slug: 'mobile-car-detailing-service-in-aberdeenshire',
    title: 'Mobile Car Detailing Aberdeenshire',
    subtitle: '100% Self-Contained Doorstep Valeting & Detailing',
    startingPrice: 65,
    duration: '2 - 3 Hours',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80',
    heroImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1400&q=85',
    overview: 'Our flagship mobile detailing service brings master-grade car care directly to your driveway or workplace. Powered by our custom-built van equipped with 500L of 0PPM de-ionised pure water and whisper-quiet power generation, we deliver a flawless finish without requiring your water or electricity.',
    whyNeeded: 'Routine roadside hand washes and mechanical car washes use harsh caustic chemicals, contaminated sponges, and gritty water that permanently haze your paint with swirl marks. Our multi-stage mobile detailing preserves your vehicle clear coat, eliminates interior bacteria, and maintains peak resale value.',
    stages: [
      {
        title: 'Stage 1: Citrus Pre-Wash & Engine Bay De-greasing',
        description: 'Bio-degradable citrus degreaser applied to lower body panels, wheel wells, and sills to lift road film, insect splatter, and winter salts before contact.'
      },
      {
        title: 'Stage 2: pH-Neutral High Density Snow Foam',
        description: 'Thick lubricating foam bath envelopes the vehicle, encapsulating micro-grit and gently sliding it off paintwork to prevent micro-marring.'
      },
      {
        title: 'Stage 3: Deep Alloy Barrel & Caliper Cleansing',
        description: 'Non-acidic wheel cleaners agitated with soft horsehair woolies and detail brushes into brake calipers, lug holes, and wheel barrel depths.'
      },
      {
        title: 'Stage 4: Two-Bucket Grit Guard Hand Wash',
        description: 'Plush Korean microfibre wash mitts rinsed thoroughly after every single panel in grit-guarded pure water buckets to guarantee swirl-free contact.'
      },
      {
        title: 'Stage 5: Touchless Heated Warm Air & Plush Towel Drying',
        description: 'Filtered warm air blowers eject moisture trapped in door handles, grilles, and mirrors, followed by ultra-absorbent 1400GSM drying towels.'
      },
      {
        title: 'Stage 6: Interior Vacuum, Extraction & Matte Trims',
        description: 'Full interior vacuum, footwell hot water extraction, leather gentle scrubbing, and OEM matte UV protectant applied to consoles.'
      },
      {
        title: 'Stage 7: Hydrophobic Sealant & Streak-Free Glass',
        description: 'Spray ceramic hydrophobic sealant buffed over paint for 3 months of water beading, with crystal clear streak-free interior/exterior glass polish.'
      }
    ],
    vehiclePricing: [
      { vehicle: 'Hatchback / Small Saloon', description: 'VW Golf, Ford Fiesta, BMW 1 Series, Audi A3', price: '£65' },
      { vehicle: 'Saloon / Estate / Mid SUV', description: 'BMW 3/5 Series, Audi A4/A6, Mercedes C/E, Nissan Qashqai', price: '£75' },
      { vehicle: 'Large 4x4 / 7-Seater', description: 'Range Rover, BMW X5, Audi Q7, Volvo XC90', price: '£85' },
      { vehicle: 'Commercial Van / Pickup', description: 'Ford Transit, VW Transporter, Toyota Hilux', price: '£95+' }
    ],
    features: [
      '100% self-contained van: pure water & electricity provided',
      'pH-neutral citrus pre-wash & snow foam bath',
      'Two-bucket scratch prevention method with grit guards',
      'Alloy barrels, arches, and exhaust tip cleansing',
      'Tornador air pulse crevice interior vacuuming',
      'Streak-free optical glass polishing inside & out',
      '3-month hydrophobic protective paint shield'
    ],
    equipment: [
      '500-Litre On-board 0PPM Spot-Free Pure Water Tank',
      'Kranzle Commercial 140-Bar Pressure Washer System',
      'Whisper-Quiet On-board Inverter Power Generator',
      'BigBoi BlowR Mini Touchless Warm Air Vehicle Dryer',
      'Tornador Black Interior Pulse Cleansing Tool'
    ],
    faqs: [
      {
        question: 'Do I need to supply water or plug into my electricity?',
        answer: 'No! Our mobile detailing van is 100% self-sufficient with its own purified water reservoir and low-decibel generator. We can work comfortably in driveways, business car parks, and private roads.'
      },
      {
        question: 'How long will the appointment take?',
        answer: 'A comprehensive Mobile Car Detailing appointment typically takes 2 to 3 hours depending on the size and initial condition of your vehicle.'
      },
      {
        question: 'What happens if it rains on the scheduled day?',
        answer: 'Light rain or overcast weather is easily handled under our heavy-duty waterproof pop-up canopy. If severe gales or torrential storms occur, we will proactively contact you to reschedule at your earliest convenience.'
      }
    ]
  },
  {
    id: 'interior-detailing',
    slug: 'interior-detailing',
    title: 'Interior Detailing',
    subtitle: 'Surgical Cabin Sanitisation, Steam Cleaning & Leather Care',
    startingPrice: 85,
    duration: '2.5 - 4 Hours',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=85',
    overview: 'Our Interior Detailing service is an intensive restoration process designed to extract embedded grime, eliminate deep-set odours (smoke, pets, spilled milk), sanitise air vents with medical-grade dry steam, and condition leather back to an authentic matte factory finish.',
    whyNeeded: 'Automotive cabins accumulate bacteria, dust mites, skin oils, and allergens that ordinary household vacuums cannot reach. We utilize hot-water injection extraction and 150°C dry steam to disinfect touchpoints and restore a hygienic cabin environment.',
    stages: [
      {
        title: 'Stage 1: Rubbish Removal & High-Pressure Blowout',
        description: 'Loose debris cleared and high-pressure compressed air pulsed under seat rails, into air conditioning vents, and between seat bolsters.'
      },
      {
        title: 'Stage 2: Heavy-Duty Multi-Stage Vacuuming',
        description: 'Carpets, headlining, parcel shelves, door bins, and luggage compartment vacuumed with high-flow dual-motor extraction.'
      },
      {
        title: 'Stage 3: Wet Injection Extraction on Fabrics & Mats',
        description: 'Enzyme spot cleaners injected into carpets and fabric upholstery, agitated, and vacuum extracted with hot water to pull deep stains.'
      },
      {
        title: 'Stage 4: 150°C Dry Steam Disinfection',
        description: 'Chemical-free high-temperature steam sanitises steering wheel, dashboard, cup holders, seat belts, and A/C ventilation ducting.'
      },
      {
        title: 'Stage 5: Leather Deep Scrub & Matte Nourishing Balm',
        description: 'Natural horsehair brushes gently cleanse leather pores of body oils, followed by UV-protective non-slippery matte leather conditioner.'
      },
      {
        title: 'Stage 6: Streak-Free Glass & Odour Neutraliser',
        description: 'Interior windshield, sunroof, and side glass polished to crystal transparency with long-lasting antibacterial freshness mist.'
      }
    ],
    vehiclePricing: [
      { vehicle: 'Hatchback / Saloon', description: 'Full cabin extraction & steam clean', price: '£85' },
      { vehicle: 'Mid SUV / Estate', description: 'Full cabin extraction, boot & pet hair removal', price: '£95' },
      { vehicle: 'Large 4x4 / 7-Seater', description: '3 rows of seating extraction & leather treatment', price: '£115' },
      { vehicle: 'Extreme Pet Hair / Odour Treatment', description: 'Dedicated enzyme fogging & ozone shock', price: '+£30' }
    ],
    features: [
      'Hot water extraction on fabric seats, carpets & mats',
      '150°C steam sterilisation across all ventilation ducts',
      'Stubborn spot stain eradication (coffee, drinks, mud, oils)',
      'Specialist pet hair removal tools without damaging fibers',
      'pH-balanced leather deep scrub & UV nourishing balm',
      'Anti-bacterial smoke and pet odour neutralisation'
    ],
    equipment: [
      'Karcher Commercial Hot-Water Spray Extraction Unit',
      'Tecnovap Dry Steam Generative Sanitiser (150°C)',
      'Tornador Pulse Interior Cleaning Guns',
      'Dedicated Rubber Pet Hair Removal Blades'
    ],
    faqs: [
      {
        question: 'Will my vehicle seats be wet when you finish?',
        answer: 'No! Our high-powered vacuum extraction pulls 90% of moisture immediately, and our heated warm-air blowers leave seats completely dry and ready to drive in approximately 60 minutes.'
      },
      {
        question: 'Can you get rid of harsh cigarette or pet smells?',
        answer: 'Yes. We treat the physical source with enzyme wash and steam, followed by antibacterial fogging to neutralize organic odour compounds at the molecular level.'
      }
    ]
  },
  {
    id: 'exterior-detailing',
    slug: 'exterior-detailing',
    title: 'Exterior Detailing',
    subtitle: 'Decontamination Washes, Clay Bar Treatment & High Gloss Wax',
    startingPrice: 75,
    duration: '2.5 - 3.5 Hours',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=85',
    overview: 'Our Exterior Detailing service is a clinical decontamination and gloss enhancement package. We chemically dissolve embedded brake dust fallout, tar splatter, and tree sap, followed by clay bar treatment and hand-buffed carnauba paste wax or polymer sealant.',
    whyNeeded: 'Every day your car travels on motorways and city roads, airborne iron particles from brake discs embed themselves into the warm clear coat. If left untreated, these particles oxidize and cause rust micro-pitting. Exterior detailing restores silky glass-smooth paintwork.',
    stages: [
      {
        title: 'Stage 1: Citrus Pre-Cleanse & Wheel Arches Flush',
        description: 'High-pressure underbody and arch blowout to eject packed winter grit and road debris.'
      },
      {
        title: 'Stage 2: pH-Neutral Snow Foam Bath',
        description: 'High foaming snow soak to loosen abrasive grit before any wash contact.'
      },
      {
        title: 'Stage 3: Chemical Iron Fallout Reaction',
        description: 'Specialist iron-dissolving solution turns bright purple as it breaks down sharp embedded brake dust.'
      },
      {
        title: 'Stage 4: Tar & Bitumen Dissolution',
        description: 'Solvent safe formula removes sticky road tar spots along sills and rear bumpers without scratching.'
      },
      {
        title: 'Stage 5: Clay Bar Surface Decontamination',
        description: 'Grade-specific clay bar lubricated over paintwork to shear off micro-contaminants, leaving a glass-smooth finish.'
      },
      {
        title: 'Stage 6: Hand-Buffed Carnauba Wax / Sealant',
        description: 'Layer of ultra-glossy paste wax applied to lock in gloss, enhance metallic flake, and provide water beading.'
      }
    ],
    vehiclePricing: [
      { vehicle: 'Hatchback / Saloon', description: 'Full exterior decontamination & wax', price: '£75' },
      { vehicle: 'SUV / Estate', description: 'Full exterior decontamination & wax', price: '£85' },
      { vehicle: 'Large 4x4 / Luxury Coupe', description: 'Full exterior decontamination & wax', price: '£95' }
    ],
    features: [
      'Chemical iron fallout remover dissolving metallic brake dust',
      'Tar and glue remover for lower door sills',
      'Clay bar mechanical decontamination for glass-smooth touch',
      'Hand-applied high-carnauba paste wax or synthetic sealant',
      'Black exterior rubber and plastic trim UV dressing',
      'Alloy wheels sealed and tyre sidewalls treated to satin finish'
    ],
    equipment: [
      'Bilt Hamber Auto-Foam & Korrosol Chemical Fallout Removers',
      'Bespoke Clay Bars with Dedicated Synthetic Lube',
      'Collinite 845 / Swissvax Hand Carnauba Waxes',
      'Gtechniq T1 Tyre & Trim Satin Dressings'
    ],
    faqs: [
      {
        question: 'How do I know if my paint needs clay barring?',
        answer: 'Wash your car, place your hand inside a thin plastic sandwich bag, and gently rub your fingers across the paint. If it feels rough like sandpaper, your clear coat is heavily contaminated with industrial fallout and requires claying.'
      }
    ]
  },
  {
    id: 'ceramic-coating',
    slug: 'ceramic-coating',
    title: 'Ceramic Coating',
    subtitle: 'Semi-Permanent 9H Nano-Quartz Clear Coat Armor (2–5 Year Durability)',
    startingPrice: 320,
    duration: '1 - 2 Days',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85',
    overview: 'Ceramic Coating is the pinnacle of modern automotive clear coat protection. Utilizing high-solids SiO2 (Silicon Dioxide) nano-technology, it chemically bonds to your factory clear coat to create a sacrificial, ultra-hard 9H quartz barrier that repels water, road salt, bird lime, and chemical etching for years.',
    whyNeeded: 'Traditional waxes melt off in summer heat and wear away after a few washes. A genuine ceramic quartz coating forms a cross-linked covalent bond with clear coat molecules, providing extreme hydrophobic self-cleaning properties, UV protection against paint fade, and a constant candy-like mirror gloss.',
    stages: [
      {
        title: 'Stage 1: Multi-Stage Chemical Decontamination',
        description: 'Complete iron fallout, tar dissolution, and clay bar treatment to ensure the clear coat is 100% sterile.'
      },
      {
        title: 'Stage 2: Single-Stage Gloss Enhancement Polish',
        description: 'Fine machine jewelling to remove micro-scratches, wash hazing, and maximize mirror reflectivity before coating.'
      },
      {
        title: 'Stage 3: Isopropyl Alcohol (IPA) Panel Wipe',
        description: 'Multi-pass alcohol panel prep removing all polishing oils, allowing direct molecular bonding with clear coat.'
      },
      {
        title: 'Stage 4: 9H Ceramic Quartz Hand Application',
        description: 'Layer by layer application using lint-free suede applicators, monitored panel-by-panel with high-CRI inspection lights.'
      },
      {
        title: 'Stage 5: Infrared Lamp Curing & Wheel Face Coating',
        description: 'Infrared heat lamps accelerate cross-linking, and wheel faces are coated to prevent brake dust bonding.'
      },
      {
        title: 'Stage 6: Warranty Certification & Aftercare Pack',
        description: 'Vehicle handed over with official durability certificate, maintenance schedule, and pH-neutral wash kit.'
      }
    ],
    vehiclePricing: [
      { vehicle: '2-Year Ceramic Coating Package', description: 'Single stage polish + 2-year SiO2 quartz layer', price: '£320' },
      { vehicle: '3-Year Professional Ceramic Package', description: 'Dual stage polish + 3-year multi-layer ceramic', price: '£450' },
      { vehicle: '5-Year Ultimate Ceramic Armor', description: 'Full paint correction + 5-year dual-layer 9H + wheels & glass', price: '£595' }
    ],
    features: [
      'True 9H pencil hardness scratch-resistance against wash marring',
      'Ultra-hydrophobic self-cleaning water beading (110° contact angle)',
      'Protection against bird droppings, tree sap, and acid rain',
      'UV blocking stops paint fading, oxidation, and clear coat failure',
      'Wheel faces and glass coated for effortless maintenance',
      'Official written durability guarantee and aftercare guide'
    ],
    equipment: [
      'Gtechniq / CarPro Professional 9H Ceramic Quartz Systems',
      'Rupes BigFoot Dual Action Random Orbital Polishers',
      'Short-Wave Infrared Paint Curing Heaters',
      'Scangrip High-CRI Sunmatch Inspection Lighting'
    ],
    faqs: [
      {
        question: 'Does ceramic coating make my car scratch-proof?',
        answer: 'No coating makes paint bulletproof against heavy key scratches or rock chips, but genuine 9H ceramic significantly elevates resistance against wash swirls, bird dropping acid etching, and light brush marring.'
      },
      {
        question: 'Can ceramic coating be applied on a mobile appointment?',
        answer: 'Yes! We apply ceramic coatings inside a sheltered garage or with our enclosed commercial temperature-controlled mobile setup.'
      }
    ]
  },
  {
    id: 'paint-correction',
    slug: 'paint-correction',
    title: 'Paint Correction',
    subtitle: 'Machine Polishing to Eradicate Swirls, Scratches & Buffer Marks',
    startingPrice: 195,
    duration: '1 - 2 Days',
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=900&q=80',
    heroImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85',
    overview: 'Paint Correction is the art and science of leveling automotive clear coat with precision machine polishers to permanently remove swirl marks, wash scratches, water spot etching, and oxidation. It transforms dull, faded paint back into a mirror-like show car reflection.',
    whyNeeded: 'Waxes and cheap glazes only temporarily fill in scratches with silicone oils, which wash out after two weeks. Machine paint correction uses microscopic abrasive compounds to gently level the clear coat down to the scratch trough, permanently removing the defect forever.',
    stages: [
      {
        title: 'Stage 1: Multi-Point Digital Paint Depth Gauge Inspection',
        description: 'Ultrasonic depth measurement across 60+ points on every panel to verify safe clear coat thickness in microns.'
      },
      {
        title: 'Stage 2: Precision Protective Masking',
        description: 'Low-tack automotive tape carefully covers sensitive rubber seals, badges, plastics, and chrome trim.'
      },
      {
        title: 'Stage 3: Heavy Cut Compound Phase (Stage 1 Correction)',
        description: 'Dual-action machine polishing with microfibre or wool cutting pads and diminishing abrasives to level 70-85% of scratches.'
      },
      {
        title: 'Stage 4: Jewelling Finish Phase (Stage 2 Correction)',
        description: 'Ultra-soft foam finishing pad paired with fine jewelling polish to remove compound hazing and maximize optical clarity.'
      },
      {
        title: 'Stage 5: High-CRI LED Inspection & Alcohol Wipe',
        description: 'Panels wiped clean of polishing oils under 5000K sunlight LED lamps to verify zero filler deception.'
      },
      {
        title: 'Stage 6: Long-Life Sealant or Ceramic Foundation',
        description: 'Freshly corrected crystal clear coat sealed with synthetic polymer sealant or prepared for ceramic quartz.'
      }
    ],
    vehiclePricing: [
      { vehicle: 'Stage 1 Gloss Enhancement Polish', description: 'Removes 50-65% swirls, boosts gloss dramatically', price: '£195' },
      { vehicle: 'Stage 2 Full Paint Correction', description: 'Removes 80-90%+ swirls, deep scratches & holograms', price: '£340' },
      { vehicle: 'Stage 3 Major Restoration (Wet Sanding)', description: 'Orange peel reduction & deep scratch feathering', price: '£550+' }
    ],
    features: [
      'Permanent scratch elimination — no fillers or temporary glazes',
      'Electronic paint depth inspection ensures factory safe margins',
      'Eliminates circular spider-web wash swirls & dealer buffer trails',
      'Restores deep showroom reflection and metallic flake pop',
      'Carried out by 30-year veteran master craftsman Hamish Moar',
      'Pre-wax cleaner and durable polymer sealant applied upon completion'
    ],
    equipment: [
      'Elcometer Electronic Digital Paint Depth Micron Gauge',
      'Rupes LHR21 Mark III & LHR15 Dual Action Polishers',
      'Rupes iBrid Nano Mini Polisher for Tight Grilles & A-Pillars',
      'Menzerna, Koch-Chemie & Sonax Professional Compounds',
      'Scangrip Multimatch High-CRI Colour-Check Lights'
    ],
    faqs: [
      {
        question: 'Will machine polishing thin my clear coat excessively?',
        answer: 'No. Modern Dual Action polishers combined with digital ultrasonic paint depth gauges allow us to eliminate scratches by removing only 2 to 4 microns of clear coat (less than the thickness of a single red blood cell).'
      },
      {
        question: 'How long do the paint correction results last?',
        answer: 'Permanently! Because the scratches are genuinely removed rather than filled with silicone glazes, the results stay permanent. Following our recommended safe two-bucket washing technique keeps the paint swirl-free for years.'
      }
    ]
  }
];

export const CITIES_DATA: CityLocation[] = [
  {
    id: 'city-1',
    slug: 'city-1-car-detailing',
    cityName: 'City 1',
    displayName: 'City 1 (Aberdeen & City Centre)',
    districtName: 'Aberdeen City Centre, West End, Rosemount & Cults',
    postcodes: ['AB10', 'AB11', 'AB15', 'AB24', 'AB25'],
    heroImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85',
    description: 'Looking for the premier mobile car detailing in City 1? Our fully equipped mobile valeting unit travels directly to your driveway, underground apartment parking, or corporate office across City 1 and surrounding districts. With 30 years of trade expertise, we bring 100% off-grid pure water and power directly to you.',
    responseTime: 'Same-day / Next-day appointments available',
    coverageAreas: [
      'City 1 Centre & Quayside',
      'West End & Rubislaw Den',
      'Cults, Bieldside & Milltimber',
      'Rosemount & Midstocket',
      'Bridge of Don & Grandhome',
      'Altens & Tullos Corporate Hubs'
    ],
    popularServices: [
      'Mobile Car Valeting (Interior + Exterior)',
      'Machine Paint Correction & Swirl Eradication',
      'Ceramic Quartz 9H Paint Protection',
      'Executive Fleet Valeting for Corporate Offices'
    ],
    review: {
      author: 'Alistair M., West End City 1',
      car: 'Porsche 911 Carrera 4S',
      quote: 'Hamish spent 7 hours on my 911 in my driveway in City 1. The machine polishing completely removed years of previous owner car-wash scratches. Stunning work.',
      stars: 5
    }
  },
  {
    id: 'city-2',
    slug: 'city-2-car-detailing',
    cityName: 'City 2',
    displayName: 'City 2 (Inverurie & Garioch)',
    districtName: 'Inverurie, Kintore, Kemnay & Oldmeldrum',
    postcodes: ['AB51', 'AB52'],
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85',
    description: 'Premier mobile detailing throughout City 2 and the Garioch region. We bring master craftsmanship to residential driveways, farm estates, and local businesses in City 2 with complete off-grid pure water systems.',
    responseTime: 'Regular visits Monday through Saturday',
    coverageAreas: [
      'City 2 Central & Retail Park',
      'Port Elphinstone',
      'Kintore Town & Midmill',
      'Kemnay Village & Surrounds',
      'Oldmeldrum & Daviot'
    ],
    popularServices: [
      'Full Mobile Detail & Decontamination Wash',
      'Fabric & Carpet Wet Extraction',
      'Winter Road Salt Undercarriage Blast'
    ],
    review: {
      author: 'Craig S., City 2',
      car: 'BMW X5 xDrive30d',
      quote: 'With two dogs and muddy country lanes in City 2, our X5 was a disaster. Hamish removed every single trace of pet hair and mud. Smells and looks brand new!',
      stars: 5
    }
  },
  {
    id: 'city-3',
    slug: 'city-3-car-detailing',
    cityName: 'City 3',
    displayName: 'City 3 (Westhill & Kingswells)',
    districtName: 'Westhill, Kingswells, Prime Four & Elrick',
    postcodes: ['AB32', 'AB15'],
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=85',
    description: 'Professional on-site car detailing across City 3, residential neighborhoods, and the Prime Four Business Park. We service executive saloons, family SUVs, and performance sports cars without disturbing your workday.',
    responseTime: 'Priority corporate and residential slots available',
    coverageAreas: [
      'City 3 Business Parks & Offices',
      'Elrick & Broadshade',
      'Kingswells Village & Prime Four',
      'Kirkton of Skene & Dunecht'
    ],
    popularServices: [
      'Corporate Office Car Park Valeting',
      'Ceramic Coating Armor (3-Year)',
      'Leather Cleansing & Matte UV Protection'
    ],
    review: {
      author: 'Fiona B., City 3',
      car: 'Range Rover Sport HSE',
      quote: 'So convenient having Hamish detail my car right while I was working from home in City 3. Spotless inside and out, and no noisy machinery!',
      stars: 5
    }
  },
  {
    id: 'city-4',
    slug: 'city-4-car-detailing',
    cityName: 'City 4',
    displayName: 'City 4 (Stonehaven & Mearns)',
    districtName: 'Stonehaven, Portlethen, Newtonhill & Dunnottar',
    postcodes: ['AB39', 'AB12'],
    heroImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1400&q=85',
    description: 'Protect your vehicle against coastal sea air and road grime with our specialist mobile valeting service in City 4. From harbour residences to new development driveways, our pure water wash guarantees zero water spots.',
    responseTime: 'Weekly scheduled routes across City 4',
    coverageAreas: [
      'City 4 Old Town & Harbour',
      'Fetteresso & Mineralwell',
      'Newtonhill Coastal Strip',
      'Portlethen Village & Retail'
    ],
    popularServices: [
      'Coastal Salt Neutralisation Wash',
      'Machine Swirl Removal Polishing',
      'Interior Sanitisation & Steam Clean'
    ],
    review: {
      author: 'Gordon T., City 4',
      car: 'Audi RS6 Avant',
      quote: 'Living right by the coast in City 4, road salt and marine air eat paint. The ceramic coating Hamish installed has kept water and grime literally flying off.',
      stars: 5
    }
  },
  {
    id: 'city-5',
    slug: 'city-5-car-detailing',
    cityName: 'City 5',
    displayName: 'City 5 (Dyce & Airport Corridor)',
    districtName: 'Dyce, Stoneywood, Kirkhill & Newmachar',
    postcodes: ['AB21', 'AB22'],
    heroImage: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1400&q=85',
    description: 'Fast, dependable mobile detailing in City 5, airport industrial estates, and nearby commuter villages. Perfect for executives catching flights or local residents wanting pristine vehicles.',
    responseTime: 'Rapid airport corridor booking available',
    coverageAreas: [
      'City 5 Airport Business Parks',
      'Kirkhill Industrial Estate',
      'Stoneywood & Wellheads',
      'Newmachar & Kingseat'
    ],
    popularServices: [
      'Pre-Flight Executive Valet',
      'Fleet Detailing Packages',
      'Full Interior & Leather Restoration'
    ],
    review: {
      author: 'Mark E., City 5',
      car: 'Mercedes-Benz E300d Estate',
      quote: 'Booked Hamish while I was away on a business trip. Came back to a showroom-finish car parked in my driveway. Exemplary communication and skill.',
      stars: 5
    }
  },
  {
    id: 'city-6',
    slug: 'city-6-car-detailing',
    cityName: 'City 6',
    displayName: 'City 6 (Peterhead & North Coast)',
    districtName: 'Peterhead, Ellon, Cruden Bay & Boddam',
    postcodes: ['AB42', 'AB41'],
    heroImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=85',
    description: 'Expert mobile car valeting and paint restoration serving City 6 and the surrounding coastal communities. We battle heavy industrial fallout and maritime weather with heavy-duty ceramic barriers.',
    responseTime: 'Bi-weekly dedicated northern routes',
    coverageAreas: [
      'City 6 Coastal Harbor & Docks',
      'Ellon Town & Ythanbank',
      'Cruden Bay & Hatton',
      'Mintlaw & Longside'
    ],
    popularServices: [
      'Industrial Fallout Iron Dissolve',
      'Multi-Year Ceramic Quartz Coat',
      'Complete Deep Valet & Wax'
    ],
    review: {
      author: 'Kieran L., City 6',
      car: 'Ford Ranger Wildtrak 4x4',
      quote: 'Commercial pickup was coated in industrial grime and iron filings from work sites in City 6. Hamish decontaminated the clear coat and made it mirror-smooth.',
      stars: 5
    }
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'hamish-moar',
    name: 'Hamish Moar',
    role: 'Founder & Master Craftsman',
    experienceYears: 30,
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80',
    specialty: 'Machine Paint Correction & 9H Ceramic Quartz Applications',
    bio: 'With over three decades dedicated to the automotive detailing craft, Hamish has worked on everything from daily commuter saloons to rare vintage Ferraris and supercars. A staunch believer in conservative paint preservation, Hamish never cuts corners and treats every vehicle as if it were his own.',
    certifications: [
      'IDA (International Detailing Association) Certified Master',
      'Rupes BigFoot Advanced Machine Polishing Certified',
      'Gtechniq Accredited Ceramic Coating Installer',
      'Elcometer Ultrasonic Paint Gauge Calibration Specialist'
    ]
  },
  {
    id: 'callum-ross',
    name: 'Callum Ross',
    role: 'Senior Paint Correction Specialist',
    experienceYears: 12,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    specialty: 'Dual-Action Rotary Polishing & Orange Peel Reduction',
    bio: 'Callum is a perfectionist with an encyclopedic understanding of automotive paint clear-coat formulations across German, Japanese, and British manufacturers. He specializes in reviving soft Japanese clear coats and tough German ceramic finishes without buffer trails.',
    certifications: [
      'Koch-Chemie Approved Polishing Technician',
      'Wet Sanding & Defect Removal Specialist',
      'Dual-Action Microfibre Compound Mastery'
    ]
  },
  {
    id: 'sarah-macleod',
    name: 'Sarah MacLeod',
    role: 'Interior Sanitisation & Leather Specialist',
    experienceYears: 8,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    specialty: 'Steam Extraction, Leather Restoration & Odour Elimination',
    bio: 'Sarah leads our interior department with clinical precision. Trained in advanced textile care, she uses high-temperature dry steam and enzyme formulations to sanitize cabins, remove deep stains, and restore delicate Napa leather to a non-greasy factory matte sheen.',
    certifications: [
      'Leather Clinic Certified Leather Repair & Dyeing',
      'Dry-Steam Sanitation & Bio-Hazard Remediation',
      'Enzyme-Based Odour Neutralisation Specialist'
    ]
  },
  {
    id: 'david-keith',
    name: 'David Keith',
    role: 'Decontamination & Fleet Operations Technician',
    experienceYears: 6,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    specialty: 'Safe Multi-Stage Washes & Off-Grid Van Systems',
    bio: 'David oversees our mobile fleet logistics and pure water filtration systems. He ensures our spot-free 0PPM water quality is rigorously tested daily, ensuring spotless finishes under direct sunlight without water etching.',
    certifications: [
      '0PPM Reverse Osmosis Deionisation Systems Operator',
      'Safe Wash Two-Bucket Certification',
      'Chemical Safety & Hazardous Waste Compliance'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'blog-post-1',
    title: 'Why Roadside Hand Car Washes Ruin Your Clear Coat (And How to Fix Swirls)',
    excerpt: 'Discover why £10 supermarket car washes cause severe spider-web scratching and how professional two-bucket methods preserve paint clarity.',
    category: 'Paint Care',
    readTime: '5 min read',
    publishDate: 'October 12, 2025',
    author: 'Hamish Moar',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85',
    content: {
      intro: 'It is a common sight across every town: roadside hand car washes promising a "full exterior wash for £10 in 10 minutes". While the price and speed are tempting, vehicle owners are often horrified to find their paintwork covered in circular spider-web scratch marks when parked under direct sunlight. Here is the scientific truth behind roadside wash damage.',
      sections: [
        {
          heading: '1. The Caustic Traffic Film Remover (TFR) Problem',
          paragraphs: [
            'Roadside car washes rely on ultra-aggressive, high-alkaline chemical solutions known as Caustic TFR. These industrial chemicals strip road grease quickly, but they also strip all protective wax, dry out rubber window seals, and chemically etch raw aluminum trims and chrome badges.',
            'Over time, frequent caustic washes turn black plastic trims chalky grey and cause the clear coat to lose its natural UV filters.'
          ],
          tip: 'A true professional detailer exclusively uses pH-neutral citrus pre-washes that soften grime without attacking delicate trim or paintwork.'
        },
        {
          heading: '2. The "One Dirty Bucket" & Contaminated Sponge Trap',
          paragraphs: [
            'Watch the workers at a budget wash: they use the same sponge or wash brush on wheel arches, brake dust, and lower sills, before dragging it across your bonnet and roof.',
            'Sand, grit, and microscopic metal shards become lodged inside porous yellow sponges. As the worker presses hard against your paint, that sponge behaves essentially like 800-grit sandpaper, scoring millions of circular micro-scratches into the clear coat.'
          ]
        },
        {
          heading: '3. How to Repair the Damage: Machine Paint Correction',
          paragraphs: [
            'The good news is that swirl marks and wash scratches exist in the upper clear coat. Through multi-stage dual-action machine polishing, a master detailer can level the clear coat by just 2 to 3 microns, completely erasing the swirls and restoring a crystal mirror reflection.',
            'Once corrected, switching to a safe two-bucket wash method with grit guards and plush microfibre mitts ensures your vehicle remains swirl-free permanently.'
          ]
        }
      ],
      conclusion: 'Your vehicle is likely one of the largest financial investments you will make. Spending £10 on a caustic wash can easily cause £500 in clear coat paint damage over a single year. Protect your pride and joy with safe mobile detailing.'
    }
  },
  {
    id: 'blog-2',
    slug: 'blog-post-2',
    title: 'Ceramic Coating vs Traditional Carnauba Wax: Which Is Best for Your Vehicle?',
    excerpt: 'Comparing durability, gloss, cost, and maintenance between modern 9H ceramic quartz coatings and traditional hand-buffed carnauba paste waxes.',
    category: 'Ceramic Protection',
    readTime: '6 min read',
    publishDate: 'November 3, 2025',
    author: 'Callum Ross',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=85',
    content: {
      intro: 'When looking to protect automotive paintwork against wet weather, winter road salt, and harmful UV radiation, car owners generally choose between two technologies: traditional organic carnauba paste wax or state-of-the-art ceramic quartz nano-coatings. Which one is right for your driving habits?',
      sections: [
        {
          heading: 'The Natural Appeal of Brazilian Carnauba Wax',
          paragraphs: [
            'Derived from the leaves of the Brazilian Copernicia prunifera palm tree, carnauba wax has been the enthusiast standard for over a century. It provides an unmistakably warm, deep, organic liquid glow, particularly on rich colours like dark red, navy blue, and non-metallic black.',
            'However, carnauba wax sits on top of the clear coat without chemically bonding. Because its melting point is around 82°C, hot engine bonnets and detergent washes cause it to degrade rapidly, usually lasting only 6 to 10 weeks.'
          ]
        },
        {
          heading: 'The Science of 9H Ceramic Quartz Coatings',
          paragraphs: [
            'Ceramic coatings are synthesized from Silicon Dioxide (SiO2) and Titanium Dioxide (TiO2). When applied to sterile clear coat, the solvent carrier evaporates, allowing the ceramic molecules to cross-link and form covalent bonds with clear coat pores.',
            'This creates a glass-like sacrificial shield measuring 1 to 2 microns thick with a pencil hardness rating of 9H. It will not wash off with shampoo, will not melt under summer heat, and typically lasts between 2 and 5 years.'
          ],
          tip: 'Ceramic coatings exhibit a water contact angle exceeding 110 degrees, creating the famous "lotus effect" where dirt and rainwater slide right off the bodywork.'
        },
        {
          heading: 'Head-to-Head Comparison',
          paragraphs: [
            'Durability: Ceramic (2-5 Years) vs Wax (2-3 Months)',
            'Chemical Resistance: Ceramic withstands pH 2 to pH 12, whereas wax is stripped by a single alkaline wash.',
            'Application: Wax takes 1 hour; Ceramic requires full machine polishing and controlled curing.'
          ]
        }
      ],
      conclusion: 'If you enjoy hand-waxing your weekend classic car on a Sunday afternoon, carnauba wax remains a wonderful hobby. But for daily commuter vehicles and luxury modern cars needing durable all-weather defense, ceramic coating is unmatched in longevity and value.'
    }
  },
  {
    id: 'blog-3',
    slug: 'blog-post-3',
    title: 'The Ultimate Interior Detailing Guide: Eliminating Pet Hair, Coffee Stains & Odours',
    excerpt: 'Step-by-step professional secrets to sanitizing automotive cabins, removing stubborn embedded pet hair, and keeping leather supple and matte.',
    category: 'Interior Care',
    readTime: '4 min read',
    publishDate: 'November 20, 2025',
    author: 'Sarah MacLeod',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=85',
    content: {
      intro: 'We spend hundreds of hours every year inside our cars. Between drive-thru coffees, family road trips, muddy dog walks, and daily commutes, car cabins accumulate astonishing amounts of bacteria, food crumbs, and microscopic allergens. Here is how professional interior detailing cleans beneath the surface.',
      sections: [
        {
          heading: 'Why Household Vacuums Struggle With Pet Hair',
          paragraphs: [
            'Pet hair features microscopic barbed cuticles that weave themselves tightly into automotive nylon carpet loops. Normal suction merely skims the surface.',
            'Professionals use specialised rubber static blades and compressed-air pulse guns to vibrate the carpet backing, dislodging the barbed hair shafts so high-flow extractors can pull them out effortlessly.'
          ]
        },
        {
          heading: 'Hot Water Extraction vs Surface Scrubbing',
          paragraphs: [
            'Spraying carpet foam from a can only pushes stains deeper into the foam underlay beneath the carpet. When it dries, the stain wicks right back up to the surface.',
            'True extraction injects 60°C heated enzyme cleaner under pressure, emulsifies the milk, coffee, or mud, and immediately vacuums the filthy liquid into an external waste tank.'
          ],
          tip: 'Never use washing-up liquid on car upholstery—it contains high sodium chloride (salt) levels that promote mold and carpet mildew.'
        },
        {
          heading: 'The Truth About Leather: Matte vs Shiny',
          paragraphs: [
            'Many car owners believe shiny leather is clean leather. In reality, shiny leather is coated in body oils, sebum, and dirt trapped against the grain. Clean leather is always completely soft and matte.',
            'Gentle horsehair scrubbing followed by a water-based UV conditioner protects against drying, cracking, and dye transfer from blue jeans.'
          ]
        }
      ],
      conclusion: 'A thoroughly detailed interior does not just look rewarding—it protects your respiratory health, eliminates stale odours, and ensures your daily drive feels like sitting in a brand-new vehicle.'
    }
  },
  {
    id: 'blog-4',
    slug: 'blog-post-4',
    title: 'What Is Paint Correction? 1-Stage vs 2-Stage Machine Polishing Explained',
    excerpt: 'Learn how multi-stage machine polishing safely removes swirl marks and holograms to restore showroom depth without damaging clear coat.',
    category: 'Paint Care',
    readTime: '7 min read',
    publishDate: 'December 8, 2025',
    author: 'Hamish Moar',
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=85',
    content: {
      intro: 'When walking past cars in a sunny car park, you will notice that almost every vehicle has circular spider-web scratching that dulls its paint. This optical defect is caused by light scattering off thousands of random micro-scratches. Paint correction is the definitive solution.',
      sections: [
        {
          heading: 'What Is Automotive Clear Coat?',
          paragraphs: [
            'Modern factory paintwork consists of three distinct layers: the primer on bare metal, the colour base coat (which is paper-thin at 15-20 microns), and the transparent clear coat (typically 35-50 microns thick).',
            'All swirl marks and light scratches sit within that transparent clear coat layer. By leveling the microscopic high points down to the scratch valleys, the surface becomes optically flat, allowing sunlight to reflect directly like a mirror.'
          ]
        },
        {
          heading: 'Stage 1: Single-Stage Enhancement Polish',
          paragraphs: [
            'A 1-stage correction uses a medium-grade foam or microfibre pad paired with an all-in-one diminishing abrasive compound. It is designed to remove 50% to 70% of light swirl marks and haze in a single pass.',
            'This is the ideal package for newer lease vehicles, budget-conscious daily drivers, or cars preparing for immediate sale.'
          ]
        },
        {
          heading: 'Stage 2: Two-Stage Precision Paint Correction',
          paragraphs: [
            'A 2-stage correction begins with a heavy cutting compound on wool or microfibre to eliminate 85% to 95%+ of all swirls, buffer trails, and moderate scratches.',
            'Because heavy cutting leaves light micro-marring or cloudiness, a second stage using an ultra-soft jewelling pad and micro-fine polish is conducted to refine the clear coat to an unblemished, deep gloss reflection.'
          ],
          tip: 'Always insist that your detailer uses an electronic paint depth gauge before touching a machine polisher to your car to ensure adequate clear coat thickness.'
        }
      ],
      conclusion: 'Paint correction is not a quick wash—it is precision automotive craftsmanship requiring years of tactile experience. The outcome is a finish that frequently exceeds the quality of a brand-new factory delivery.'
    }
  },
  {
    id: 'blog-5',
    slug: 'blog-post-5',
    title: 'How Our Fully Off-Grid Mobile Detailing Van Operates at Your Driveway',
    excerpt: 'Inside our custom detailing rig: 500L pure water filtration, low-decibel onboard power, commercial Kranzle pressure systems, and warm air blowers.',
    category: 'Mobile Tech',
    readTime: '4 min read',
    publishDate: 'January 14, 2026',
    author: 'David Keith',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=85',
    content: {
      intro: 'When customers book MOAR DETAILS for the first time, their most frequent question is: "Do I need an outdoor tap or an extension cord run out of my front door?" The answer is always an absolute no. Here is an inside look at how our custom mobile valeting rig operates completely off-grid.',
      sections: [
        {
          heading: 'The 0PPM Spot-Free Pure Water System',
          paragraphs: [
            'Standard tap water contains dissolved calcium, magnesium, and mineral salts (measured as Total Dissolved Solids, or TDS, typically 150-350 PPM). If ordinary tap water dries on your car under the sun, it leaves stubborn white mineral rings that etch into clear coat.',
            'Our van carries an onboard 500-litre baffled water tank fed through industrial deionisation resin filters, producing 0PPM laboratory-grade pure water. It leaves absolutely zero chalky residue and enhances final paint gloss.'
          ]
        },
        {
          heading: 'Whisper-Quiet Power Generation',
          paragraphs: [
            'To run commercial 140-bar Kranzle pressure washers, hot water extractors, and machine polishers, our van utilizes a fully enclosed, sound-attenuated digital inverter generator.',
            'It operates at a whisper-quiet decibel level that will never disturb your neighbours, whether we are working on a residential street or an office business park.'
          ],
          tip: 'Because we are fully self-sufficient, we can detail your vehicle at your workplace or golf club while you go about your day.'
        },
        {
          heading: 'Touchless Warm Air Drying Systems',
          paragraphs: [
            'Dragging dry towels across dry paint can cause friction marring. Our van is equipped with high-volume twin-motor filtered warm-air blowers that blast water out of window trims, wing mirrors, grilles, and lug nuts before a single towel touches the car.'
          ]
        }
      ],
      conclusion: 'Mobile valeting has evolved far beyond a garden hose and a bucket. Our custom engineering brings state-of-the-art studio capabilities directly to your doorstep.'
    }
  },
  {
    id: 'blog-6',
    slug: 'blog-post-6',
    title: 'Decontamination Washes: How to Dissolve Iron Fallout, Tar & Road Salt',
    excerpt: 'Why normal car shampoo cannot remove embedded brake dust and asphalt tar, and how chemical decontamination restores glass-smooth paint.',
    category: 'Maintenance',
    readTime: '5 min read',
    publishDate: 'February 2, 2026',
    author: 'Callum Ross',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=85',
    content: {
      intro: 'Have you ever thoroughly washed your car, dried it off, and run your hand over the paintwork only to find it feels rough like sandpaper? You are feeling embedded contamination that ordinary car shampoo cannot remove.',
      sections: [
        {
          heading: 'The Enemy: Sintered Iron Brake Dust',
          paragraphs: [
            'Every time vehicles brake on roads and motorways, tiny red-hot metallic iron filings are ejected into the air. These airborne particles embed themselves deep into the softened clear coat of passing vehicles.',
            'Left on the car, rain and oxygen cause the metal particles to oxidize (rust), expanding in size and creating microscopic pits in the paintwork. On white and silver cars, these appear as tiny orange rust speckles.'
          ]
        },
        {
          heading: 'Chemical Iron Dissolution (The Purple Bleed)',
          paragraphs: [
            'Never try to scrub iron fallout off with a sponge—you will drag sharp metal across your clear coat. Instead, professional detailers spray an acid-free pH-balanced iron fallout remover containing sodium thioglycolate.',
            'This chemical reacts specifically with iron oxide, turning deep purple as it dissolves the solid metal into a water-soluble liquid that rinses away effortlessly.'
          ],
          tip: 'An iron decontamination wash twice a year (autumn before winter salt, and spring after winter) prevents premature clear coat corrosion.'
        },
        {
          heading: 'Tar Removal & Clay Bar Finishing',
          paragraphs: [
            'After iron removal, solvent-based tar removers liquefy black asphalt specks thrown up by tires. Finally, a synthetic clay bar glides over lubricated paint to shear off remaining tree sap and overspray, leaving the finish silky smooth.'
          ]
        }
      ],
      conclusion: 'A decontaminated car is significantly easier to wash, repels dirt for longer, and allows protective waxes and ceramic coatings to bond cleanly to raw clear coat.'
    }
  }
];
