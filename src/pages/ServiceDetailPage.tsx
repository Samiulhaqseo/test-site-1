import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Clock, 
  Droplets, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Phone, 
  Star, 
  ChevronRight, 
  Sparkles, 
  HelpCircle, 
  Truck 
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { FaqSection } from '../components/FaqSection';
import { LeadFormSection } from '../components/LeadFormSection';
import { MobileCarDetailingAberdeenshireServicePage } from './MobileCarDetailingAberdeenshireServicePage';

interface ServiceDetailConfig {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  basePrice: number;
  duration: string;
  heroImage: string;
  overview: string;
  vehiclePricing: {
    type: string;
    description: string;
    price: number;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  includedPoints: string[];
  equipmentUsed: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const servicesDetailMap: Record<string, ServiceDetailConfig> = {
  'interior-detailing': {
    slug: 'interior-detailing',
    title: 'Interior Detailing',
    subtitle: 'Medical-Grade Steam Sanitisation, Hot-Water Extraction & Leather Spa',
    badge: 'DEEP CABIN RESTORATION',
    basePrice: 85,
    duration: '2.5 - 4 Hours',
    heroImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    overview: 'Your car cabin is subject to daily spills, pet hair, dust mites, and bacteria inside air conditioning channels. Our intensive interior detailing service extracts deep-seated stains and revives leather back to its factory velvety matte finish.',
    vehiclePricing: [
      { type: 'Small / Hatchback', description: 'Deep extraction & steam cleanse', price: 85 },
      { type: 'Saloon / Estate', description: 'All seats, floor mats, and boot', price: 95 },
      { type: 'Mid to Large SUV', description: '5 or 7 seats full extraction', price: 110 },
      { type: 'Commercial Van Cab', description: 'Work vehicle cabin deep sanitation', price: 105 }
    ],
    processSteps: [
      { step: '01', title: 'High-Velocity Tornador Air Blowout', description: 'Blows micro-sand and crumbs out of deep carpet pile and seat stitching.' },
      { step: '02', title: 'Hot Water Injection Extraction', description: 'Pressurized hot detergent is injected into seat fabric and immediately extracted with high vacuum lift.' },
      { step: '03', title: 'pH-Balanced Leather Shampoo', description: 'Gentle horsehair brushes lift oils and dirt from leather grain without stripping dye.' },
      { step: '04', title: 'Dry Vapor Steam Disinfection', description: '150°C dry steam sanitizes air conditioning vents, cup holders, and switches.' },
      { step: '05', title: 'UV Shield & Matte Conditioner', description: 'Nourishes leather and plastics with zero sticky or shiny residue.' }
    ],
    includedPoints: [
      'Hot water extraction on all upholstery and footwell carpets',
      'Specialist spot stain removal (coffee, mud, makeup, juice)',
      'Natural horsehair leather cleanse & UV matte seal',
      'Air vent steam disinfection and odour neutralisation',
      'Headliner spot cleaning and seatbelt wash'
    ],
    equipmentUsed: [
      'Kärcher Puzzi 10/1 Commercial Hot-Water Carpet Extractor',
      'Professional Dry Vapor Steam Machine (150°C)',
      'Tornador Black Pneumatic Crevice Blowers',
      'Colourlock Leather Restorative Products'
    ],
    faqs: [
      { question: 'Will my seats be soaking wet when you finish?', answer: 'No. Our commercial extraction units use twin-stage vacuum motors that pull out 90% of moisture immediately. Seats are dry to the touch within 1-2 hours.' },
      { question: 'Can you remove stubborn pet hair and smoke smell?', answer: 'Yes! We use rubber hair removal blades, pneumatic blowers, and antibacterial enzymatic treatments specifically formulated to break down odour molecules.' }
    ]
  },
  'exterior-detailing': {
    slug: 'exterior-detailing',
    title: 'Exterior Detailing & Decontamination',
    subtitle: 'Chemical Fallout Removal, Clay Bar Glass Smoothness & Carnauba Seal',
    badge: 'SURGICAL EXTERIOR REJUVENATION',
    basePrice: 110,
    duration: '3 - 4 Hours',
    heroImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80',
    overview: 'Regular washing cannot remove embedded iron particles from brake rotors or sticky road bitumen. Our exterior detailing package chemically dissolves contaminants and applies a resilient seasonal barrier.',
    vehiclePricing: [
      { type: 'Small / Hatchback', description: 'Full chemical decon & Collinite wax', price: 110 },
      { type: 'Saloon / Estate', description: 'Complete exterior glass and wax shield', price: 125 },
      { type: 'Mid to Large SUV', description: 'Comprehensive wheel, arch, and panel wax', price: 145 },
      { type: 'Commercial Van / Pickup', description: 'Full exterior decontamination and trim revive', price: 160 }
    ],
    processSteps: [
      { step: '01', title: 'Citrus & Snow Foam Pre-Rinse', description: 'Dissolves surface road film and road salt safely.' },
      { step: '02', title: 'Iron Fallout Chemical Dissolution', description: 'Acid-free spray turns bright purple as it melts brake dust filings embedded in paint.' },
      { step: '03', title: 'Tar & Bitumen Spot Removal', description: 'Dissolves sticky tar specks from lower wheel arches and rocker panels.' },
      { step: '04', title: 'Clay Bar Treatment', description: 'Pulls remaining micro-contaminants leaving paint slick like fresh glass.' },
      { step: '05', title: 'Hand-Applied Carnauba Wax / Sealant', description: 'Provides deep warm gloss and 4 to 6 months of weather protection.' }
    ],
    includedPoints: [
      'Multi-stage chemical iron fallout and tar removal',
      'Fine grade clay bar glide across all painted panels',
      'Deep alloy wheel barrel and brake caliper cleanse',
      'Hand applied Collinite 845 or Swissvax Carnauba wax',
      'Exterior rubber trim and plastic restoration'
    ],
    equipmentUsed: [
      'Grade-specific automotive detailing clay bars',
      'pH-neutral iron fallout reactive agents',
      'Collinite Insulator Wax / Soft99 Fusso Coat',
      'Ultra-plush microfibre buffing towels'
    ],
    faqs: [
      { question: 'What does clay bar actually do?', answer: 'Clay bar shears off embedded environmental contaminants that washing cannot remove, making the paint feel silky smooth.' },
      { question: 'How long will the wax protection last?', answer: 'Our Collinite and hybrid synthetic waxes typically provide 4 to 6 months of resilient hydrophobic beading.' }
    ]
  },
  'ceramic-coating': {
    slug: 'ceramic-coating',
    title: 'Ceramic Coating',
    subtitle: '9H SiO2 Quartz Glass Armour: Multi-Year Weather & Swirl Resistance',
    badge: 'ULTIMATE PERMANENT PROTECTION',
    basePrice: 320,
    duration: '1 - 2 Days',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    overview: 'Unlike waxes that wash away, a professional 9H ceramic coating chemically fuses with your clear coat, forming a semi-permanent sacrificial glass layer that shields against UV bleaching, acid rain, bird lime, and road salts for up to 5 years.',
    vehiclePricing: [
      { type: '2-Year Ceramic Package', description: '1-stage polish + 2-year SiO2 quartz layer', price: 320 },
      { type: '3-Year Premium Ceramic Package', description: '1-stage polish + 3-year dual-layer quartz', price: 420 },
      { type: '5-Year Master Ceramic Package', description: 'Multi-stage paint correction + 5-year 9H coating', price: 580 },
      { type: 'Alloy Wheels & Glass Coating Add-on', description: 'Wheel faces and hydrophobic windscreen coating', price: 120 }
    ],
    processSteps: [
      { step: '01', title: '24-Step Decontamination Prep', description: 'Thorough iron fallout, tar, and clay bar treatment to ensure naked clear coat.' },
      { step: '02', title: 'Single-Stage Machine Polish', description: 'Removes light haze and jewells clear coat to reveal optical depth.' },
      { step: '03', title: 'Residue-Free Alcohol Panel Wipe', description: 'Eliminates all polishing oils so the ceramic coat bonds directly to clear coat pores.' },
      { step: '04', title: '9H SiO2 Application', description: 'Hand applied panel by panel with suede microfibre applicators.' },
      { step: '05', title: 'Infrared Lamp Curing', description: 'Short-wave heat lamps accelerate crystallization for immediate hardness.' }
    ],
    includedPoints: [
      '2 to 5 years of certified paintwork protection',
      'Hyper-hydrophobic water sheeting (>110° contact angle)',
      'Resistance against bird droppings and chemical corrosion',
      'Machine polishing step included prior to application',
      'Official warranty certificate & maintenance wash kit'
    ],
    equipmentUsed: [
      'Professional 9H SiO2 Quartz Liquid Glass Coating',
      'Rupes Bigfoot Dual-Action Polishing Systems',
      'Short-Wave Infrared Paint Curing Lamps',
      'Scangrip High-CRI Sun Inspection Lighting'
    ],
    faqs: [
      { question: 'Will ceramic coating prevent all rock chips?', answer: 'No coating can stop high-velocity stone chips (only PPF film can). However, ceramic coating dramatically reduces micro-marring, chemical etching, and oxidation.' },
      { question: 'How do I wash my car after ceramic coating?', answer: 'Washing becomes effortless. Most dirt slides off with a simple pressure rinse. We provide a full aftercare guide and recommended pH-neutral shampoos.' }
    ]
  },
  'paint-correction': {
    slug: 'paint-correction',
    title: 'Paint Correction & Machine Polishing',
    subtitle: 'Permanent Swirl Mark Removal, Scratch Leveling & Showroom Reflections',
    badge: 'SURGICAL RESTORATION',
    basePrice: 195,
    duration: '1 - 2 Days',
    heroImage: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80',
    overview: 'Does your car look grey, milky, or covered in spiderweb scratches when the sun shines on it? True machine paint correction physically levels the microscopic clear coat to permanently remove defects and restore liquid reflections.',
    vehiclePricing: [
      { type: 'Stage 1: Gloss Enhancement', description: 'Removes 60-75% of light wash swirls & haze', price: 195 },
      { type: 'Stage 2: Full Paint Correction', description: 'Removes 85-95% of deep swirls and buffer trails', price: 340 },
      { type: 'Stage 3: Wet Sanding / Texture Level', description: 'Orange peel removal on classic or show cars', price: 490 },
      { type: 'Spot Scratch Removal', description: 'Isolated deep scratch feathering & blend', price: 60 }
    ],
    processSteps: [
      { step: '01', title: 'Digital Ultrasonic Paint Depth Audit', description: 'We map paint thickness across all panels to verify safe clear coat margins.' },
      { step: '02', title: 'Delicate Trim & Badge Masking', description: 'Low-tack automotive tape protects plastic trims, rubber seals, and washer jets.' },
      { step: '03', title: 'Compounding Cut Stage', description: 'Microfibre and wool pads level peaks and valleys around scratches.' },
      { step: '04', title: 'Jewelling Refining Stage', description: 'Fine diminishing abrasives eliminate compound haze to reveal pure mirror gloss.' },
      { step: '05', title: 'IPA Inspection Wipe', description: 'Solvent wipe verifies zero fillers remain—what you see is true corrected paint.' }
    ],
    includedPoints: [
      'Full chemical decontamination and clay bar prep included',
      'Ultrasonic paint depth readings on every body panel',
      'Dual-action machine polishing eliminating buffer holograms',
      'Removes swirl marks, car wash scratches, and water spots',
      'High-grade synthetic sealant or ceramic prep base applied'
    ],
    equipmentUsed: [
      'DeFelsko PosiTector Digital Paint Depth Gauge',
      'Rupes LHR21 & LHR75 Dual-Action Polishers',
      'Menzerna, Koch-Chemie & Meguiar’s Professional Compounds',
      'Microfibre and Japanese Uro-Wool Cutting Pads'
    ],
    faqs: [
      { question: 'Will machine polishing thin my paint too much?', answer: 'We measure paint thickness digitally before touching any pad to the vehicle. A 1-stage enhancement removes less than 2-3 microns of clear coat out of the typical 40+ microns.' },
      { question: 'Does paint correction fill the scratches?', answer: 'Never. We do not use silicone glazes or temporary fillers. The defects are physically leveled and eliminated permanently.' }
    ]
  }
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const { config, openBookingModal, theme } = useBusiness();

  // Match requested slug or default to mobile-car-detailing-service-in-aberdeenshire
  const currentSlug = slug || 'ceramic-coating';

  if (
    currentSlug === 'mobile-car-detailing-service-in-aberdeenshire' ||
    currentSlug === 'mobile-car-detailing-aberdeenshire' ||
    currentSlug === 'mobile-car-detailing-in-aberdeenshire' ||
    currentSlug === 'mobile-car-detailing-in-aberdeen' ||
    currentSlug === 'mobile-car-detailing-aberdeen'
  ) {
    return <MobileCarDetailingAberdeenshireServicePage />;
  }

  const service = servicesDetailMap[currentSlug] || servicesDetailMap['ceramic-coating'];

  return (
    <div className="bg-[#0B0D10] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <Link to="/services/" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-white font-medium">{service.title}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <Truck className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>Mobile Van Dispatched Across {config.location}</span>
          </div>
        </div>
      </div>

      {/* Hero Section (#0B0D10) */}
      <section className="relative py-14 sm:py-20 overflow-hidden bg-[#0B0D10] border-b border-zinc-800">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-20 filter blur-xs"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700 text-[11px] font-heading font-black uppercase tracking-wider text-zinc-300 mb-4">
              <Sparkles className={`w-3.5 h-3.5 ${theme.textPrimary}`} />
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase">
              {service.title}
            </h1>

            <p className={`text-sm sm:text-base font-bold mt-2 ${theme.textPrimary}`}>
              {service.subtitle}
            </p>

            <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              {service.overview}
            </p>

            {/* Quick badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 px-3.5 py-2 rounded-xl text-xs text-zinc-300">
                <Clock className="w-4 h-4 text-zinc-400" />
                <span>Duration: <strong>{service.duration}</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 px-3.5 py-2 rounded-xl text-xs text-zinc-300">
                <span className="text-zinc-400">Starting from:</span>
                <span className="text-white font-heading font-black text-sm">{config.currencySymbol}{service.basePrice}</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 px-3.5 py-2 rounded-xl text-xs text-zinc-300">
                <Droplets className="w-4 h-4 text-cyan-400" />
                <span>Pure Deionised Water (0 TDS)</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openBookingModal(service.slug)}
                className={`px-6 py-3.5 rounded-lg text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl transition-all active:scale-95 cursor-pointer min-h-[44px] flex items-center gap-2`}
              >
                <span>BOOK {service.title.toUpperCase()} NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className="px-5 py-3.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 transition-all min-h-[44px] flex items-center gap-2"
              >
                <Phone className={`w-4 h-4 ${theme.textPrimary}`} />
                <span>CALL: {config.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing by Vehicle Size (#FFFFFF) */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              HONEST & CLEAR RATES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black uppercase text-zinc-950 tracking-tight">
              TRANSPARENT VEHICLE SIZE PRICING
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1.5">
              Fixed, honest pricing with zero surprise charges on the day. Select your vehicle category below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.vehiclePricing.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-zinc-200 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="text-xs font-heading font-bold uppercase tracking-wider text-zinc-500 mb-1">
                    CATEGORY {idx + 1}
                  </div>
                  <h3 className="font-heading font-black text-lg text-zinc-950 uppercase">
                    {item.type}
                  </h3>
                  <p className="text-zinc-600 text-xs mt-2 min-h-[36px]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase">Price</span>
                    <span className="text-2xl font-black font-heading text-zinc-950">
                      {config.currencySymbol}{item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => openBookingModal(service.slug)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-heading font-bold uppercase text-white ${theme.bgPrimary} ${theme.bgHover} transition-all cursor-pointer min-h-[38px]`}
                  >
                    SELECT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Detailing Process (#F8FAFC) */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              THE DETAILED PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black uppercase text-zinc-950 tracking-tight">
              STEP-BY-STEP DETAILING WORKFLOW
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-2">
              Every vehicle undergoes our structured multi-stage quality protocol. Here is exactly what we do from the moment our mobile van arrives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-zinc-200 shadow-sm rounded-xl p-5 flex items-start gap-4 hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 rounded-lg ${theme.bgPrimary} flex items-center justify-center font-heading font-black text-sm text-white shrink-0`}>
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-zinc-950 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Mobile Rig Specs (#FFFFFF) */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checklist */}
            <div className="bg-[#F8FAFC] border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-heading font-black uppercase text-zinc-950 mb-4 flex items-center gap-2">
                <CheckCircle2 className={`w-5 h-5 ${theme.textPrimary}`} />
                <span>WHAT IS ALWAYS INCLUDED</span>
              </h3>
              <div className="space-y-3">
                {service.includedPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700">
                    <span className={`w-1.5 h-1.5 rounded-full ${theme.bgPrimary} mt-2 shrink-0`}></span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Van Rig Equipment */}
            <div className="bg-[#F8FAFC] border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-heading font-black uppercase text-zinc-950 mb-4 flex items-center gap-2">
                <Truck className={`w-5 h-5 ${theme.textPrimary}`} />
                <span>MOBILE RIG EQUIPMENT ONBOARD</span>
              </h3>
              <div className="space-y-3">
                {service.equipmentUsed.map((eq, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 shrink-0"></span>
                    <span>{eq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GET IN TOUCH FOR A CUSTOM VALET OR DETAIL (Lead Form)
          ========================================================================= */}
      <LeadFormSection />

      {/* FAQs (Duplicated from Home Page with exact matching design) */}
      <FaqSection>
        <div className="text-center pt-2">
          <Link
            to="/services/"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            <span>← BROWSE ALL 5 DETAILING SERVICES</span>
          </Link>
        </div>
      </FaqSection>

      {/* Bottom Booking CTA (#0B0D10) */}
      <section className="py-16 sm:py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden max-w-3xl mx-auto">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase text-white tracking-tight">
                READY TO BOOK {service.title.toUpperCase()}?
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-3">
                We travel directly to your home or work address across {config.location}. Fast 60-second online quote and slot reservation.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => openBookingModal(service.slug)}
                  className={`px-8 py-4 rounded-xl text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-2xl transition-all active:scale-95 cursor-pointer min-h-[48px] flex items-center gap-2`}
                >
                  <span>RESERVE YOUR APPOINTMENT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${config.phone.replace(/\s+/g, '')}`}
                  className="px-6 py-4 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all min-h-[48px] flex items-center gap-2"
                >
                  <Phone className={`w-4 h-4 ${theme.textPrimary}`} />
                  <span>{config.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
