import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Droplets, 
  Zap, 
  Car, 
  Award,
  ChevronRight
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { FaqSection } from '../components/FaqSection';
import { LeadFormSection } from '../components/LeadFormSection';

export const ServicesPage: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  // The core requested services + corporate fleet
  const coreServices = [
    {
      id: 'mobile-car-detailing-aberdeenshire',
      slug: 'mobile-car-detailing-service-in-aberdeenshire',
      title: 'Mobile Car Detailing Aberdeenshire',
      tagline: 'Professional Auto Spa Delivered Directly to Your Doorstep Across Aberdeenshire',
      price: 55,
      duration: '1.5 - 5 Hours',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80',
      badge: 'MOST POPULAR',
      shortDesc: 'Complete luxury auto spa experience brought directly to your home, office, or fleet yard in Aberdeenshire. Fully equipped mobile vans with spot-free water filtration, quiet commercial generators, and pro-grade machinery.',
      bulletPoints: [
        '100% self-contained mobile van with spot-free deionised water & quiet generator',
        'Residential driveway, corporate office park & commercial fleet servicing',
        'Pre-rinse foam cannon, safe two-bucket wash & wheel decontamination',
        'Hot water interior extraction, compressed air blowout & steam sanitation',
        'Clay bar decontamination & single-stage machine gloss polish',
        'On-site ceramic coatings, headlight restoration & engine bay degreasing'
      ],
      recommendedFor: 'Car owners, busy professionals, and fleets across Aberdeenshire seeking doorstep luxury care',
      hasDedicatedPage: true
    },
    {
      id: 'interior-detailing',
      slug: 'interior-detailing',
      title: 'Interior Detailing',
      tagline: 'Deep Steam Sanitation, Hot-Water Extraction & Leather Conditioning',
      price: 85,
      duration: '2.5 - 4 Hours',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80',
      badge: 'DEEP RESTORATION',
      shortDesc: 'A clinical, restorative deep cleanse designed to eliminate stubborn stains, spills, pet hair, dust mites, and persistent odours from every inch of your vehicle’s cabin.',
      bulletPoints: [
        'Compressed air tornado blowers to expel deep grit from seat rails & seams',
        'Hot-water injection extraction on fabric seats, carpets, and footwell mats',
        'High-pressure dry vapor steam disinfection of air vents and cupholders',
        'pH-balanced leather shampooing using soft natural horsehair brushes',
        'Non-greasy, OEM matte leather nourishing balm with UV inhibitors',
        'Enzymatic bacterial neutralisation for smoke, pet, and milk spills',
        'Headliner spot-stain treatment and pedal cleansing'
      ],
      recommendedFor: 'Cars with spilled drinks, pet hair, smoking odours, or used car purchase refresh',
      hasDedicatedPage: true
    },
    {
      id: 'exterior-detailing',
      slug: 'exterior-detailing',
      title: 'Exterior Detailing',
      tagline: 'Multi-Stage Decontamination, Clay Bar Glide & High-Grade Carnauba / Sealant',
      price: 110,
      duration: '3 - 4 Hours',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80',
      badge: 'SEASONAL SHIELD',
      shortDesc: 'A surgical exterior cleanse that removes embedded industrial brake dust fallout, road tar splatters, tree sap, and hard water minerals that regular car washes leave behind.',
      bulletPoints: [
        'Intensive citrus pre-wash soak to dissolve oily traffic film safely',
        'Acid-free iron fallout remover (chemically turns purple upon dissolving brake dust)',
        'Solvent-based tar, glue, and bitumen dissolution on lower sills and arches',
        'Fine-grade clay bar treatment leaving paintwork silky smooth like polished glass',
        'Hand application of premium Collinite carnauba paste wax or synthetic sealant',
        'Exterior plastic trim and rubber weatherstrip nourishment & UV restoration',
        'Exhaust tip stainless steel metal polish'
      ],
      recommendedFor: 'Pre-winter weatherproofing or spring post-winter salt decontamination',
      hasDedicatedPage: true
    },
    {
      id: 'ceramic-coating',
      slug: 'ceramic-coating',
      title: 'Ceramic Coating',
      tagline: 'Permanent 9H SiO2 Quartz Glass Shield (2 to 5 Years Durability)',
      price: 320,
      duration: '1 - 2 Days',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80',
      badge: 'ULTIMATE PROTECTION',
      shortDesc: 'The ultimate chemical barrier against Scottish road salts, UV oxidation, bird droppings, acid rain, and tree sap. Produces liquid mirror gloss and hyper-hydrophobic self-cleaning action.',
      bulletPoints: [
        'Full 24-step chemical fallout and clay bar decontamination',
        'Single-stage machine jewelling polish to maximize clear-coat optical clarity',
        'Residue-free isopropyl alcohol (IPA) panel wipe for 100% chemical bonding',
        'Hand application of professional 9H high-solids SiO2 ceramic quartz layer',
        'Wheel faces and glass rain-repellent hydrophobic coating included',
        'Infrared short-wave heat lamp curing process',
        'Written warranty certificate, thickness report & aftercare maintenance guide'
      ],
      recommendedFor: 'Brand new car protection, performance sports cars, and luxury daily vehicles',
      hasDedicatedPage: true
    },
    {
      id: 'paint-correction',
      slug: 'paint-correction',
      title: 'Paint Correction',
      tagline: 'Machine Swirl Removal, Scratch Leveling & Showroom Mirror Clarity',
      price: 195,
      duration: '1 - 2 Days',
      image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=900&q=80',
      badge: 'MIRROR FINISH',
      shortDesc: 'Eliminates up to 90%+ of swirl marks, wash marring, buffer trails, and light clear-coat scratches. We measure paint thickness with digital ultrasonic gauges before machine compounding.',
      bulletPoints: [
        'Digital ultrasonic paint depth readings on every panel to ensure clear coat safety',
        'Precision masking of rubber seals, plastic mouldings, and badges with low-tack tape',
        'Stage 1: Heavy cutting compound on microfibre or wool pads to level scratches',
        'Stage 2: Micro-fine jewelling finishing polish on soft open-cell foam pads',
        'High-CRI sun inspection lamps to verify true defect removal (zero silicone fillers)',
        'Application of high-gloss protective sealant or ceramic prep base'
      ],
      recommendedFor: 'Vehicles with faded, scratched, or swirled paint seeking true showroom perfection',
      hasDedicatedPage: true
    }
  ];

  return (
    <div className="bg-[#0B0D10] min-h-screen">
      {/* Breadcrumb & Sub-Header */}
      <div className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-white font-medium">Services</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Mobile Van Booking Open Across {config.location}</span>
          </div>
        </div>
      </div>

      {/* Services Hero Banner (#0B0D10) */}
      <section className="py-14 sm:py-20 relative overflow-hidden bg-[#0B0D10] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 mb-5">
            <Sparkles className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>SPECIALIST AUTOMOTIVE DETAILING SERVICES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight uppercase text-white max-w-4xl mx-auto">
            PRECISION DETAILING & VALETING <span className={theme.textPrimary}>SERVICES</span>
          </h1>

          <p className="mt-5 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From routine swirl-free mobile hand valeting to surgical multi-stage paint correction and 9H ceramic coatings, explore our five core detailing services brought directly to your doorstep.
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-center">
              <div className={`text-xl sm:text-2xl font-black font-heading ${theme.textPrimary}`}>100%</div>
              <div className="text-[11px] text-zinc-400 uppercase font-semibold mt-0.5">Mobile Van Service</div>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-center">
              <div className={`text-xl sm:text-2xl font-black font-heading ${theme.textPrimary}`}>0 TDS</div>
              <div className="text-[11px] text-zinc-400 uppercase font-semibold mt-0.5">Pure Filtered Water</div>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-center">
              <div className={`text-xl sm:text-2xl font-black font-heading ${theme.textPrimary}`}>30+ Yrs</div>
              <div className="text-[11px] text-zinc-400 uppercase font-semibold mt-0.5">Scottish Heritage</div>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-center">
              <div className={`text-xl sm:text-2xl font-black font-heading ${theme.textPrimary}`}>9H SiO2</div>
              <div className="text-[11px] text-zinc-400 uppercase font-semibold mt-0.5">Ceramic Quartz Pro</div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Core Services Detailed Section (#FFFFFF) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {coreServices.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.slug}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center bg-[#F8FAFC] border border-zinc-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm transition-all hover:shadow-md`}
              >
                {/* Image Column */}
                <div className="w-full lg:w-1/2 relative rounded-xl sm:rounded-2xl overflow-hidden aspect-4/3 sm:aspect-16/10 border border-zinc-200 group shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} shadow-lg`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Price Pill */}
                  <div className="absolute bottom-4 right-4 bg-zinc-950/90 backdrop-blur-md border border-zinc-700/80 px-4 py-2 rounded-xl text-right">
                    <span className="text-[10px] text-zinc-400 block font-semibold uppercase">From</span>
                    <span className="text-xl sm:text-2xl font-black font-heading text-white">
                      {config.currencySymbol}{service.price}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-800">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Text & Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-heading font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      SERVICE 0{index + 1}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-zinc-950 uppercase">
                      {service.title}
                    </h2>

                    <p className={`text-xs sm:text-sm font-semibold mt-1 mb-4 ${theme.textPrimary}`}>
                      {service.tagline}
                    </p>

                    <p className="text-zinc-700 text-sm leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Bullet Checklist */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-xs font-heading font-bold uppercase tracking-wider text-zinc-900 mb-2">
                        WHAT IS INCLUDED:
                      </div>
                      {service.bulletPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${theme.textPrimary}`} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-zinc-200 text-xs text-zinc-600 mb-6 shadow-xs">
                      <span className="font-bold text-zinc-900">Recommended for: </span>
                      {service.recommendedFor}
                    </div>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200">
                    <button
                      onClick={() => openBookingModal(service.id)}
                      className={`px-5 py-3 rounded-lg text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all active:scale-95 cursor-pointer min-h-[44px] flex items-center gap-2`}
                    >
                      <span>BOOK {service.title.toUpperCase()}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <Link
                      to={`/services/${service.slug}/`}
                      className="px-4 py-3 rounded-lg text-xs font-heading font-bold uppercase tracking-wider text-zinc-800 hover:text-zinc-950 bg-white hover:bg-zinc-50 border border-zinc-300 transition-all min-h-[44px] flex items-center gap-1.5 shadow-xs"
                    >
                      <span>PROCESS DETAILS</span>
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Matrix Table (#F8FAFC) */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              TRANSPARENT FEATURE BREAKDOWN
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-zinc-950 tracking-tight">
              SERVICES COMPARISON MATRIX
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm mt-2">
              Compare treatments at a glance to identify exactly which detailing tier matches your vehicle’s condition.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-zinc-200 shadow-sm p-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 text-zinc-500 font-heading font-bold uppercase tracking-wider">
                  <th className="py-4 px-4">Core Treatment / Step</th>
                  <th className="py-4 px-3 text-center">Mobile Detailing</th>
                  <th className="py-4 px-3 text-center">Interior Detailing</th>
                  <th className="py-4 px-3 text-center">Exterior Detailing</th>
                  <th className="py-4 px-3 text-center">Ceramic Coating</th>
                  <th className="py-4 px-3 text-center">Paint Correction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-700">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-zinc-950">Safe Two-Bucket Hand Wash</td>
                  <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Included</td>
                  <td className="py-3.5 px-3 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Included</td>
                  <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Included</td>
                  <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-zinc-950">Hot-Water Fabric Extraction</td>
                  <td className="py-3.5 px-3 text-center text-zinc-500">Vacuum Only</td>
                  <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Deep Wet Injection</td>
                  <td className="py-3.5 px-3 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-3 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-3 text-center text-zinc-400">—</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-zinc-950">Chemical Decontamination & Clay Bar</td>
                  <td className="py-3.5 px-3 text-center text-zinc-500">Alloy Wheel Pre-Soak</td>
                  <td className="py-3.5 px-3 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Iron & Tar Pull</td>
                  <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ 24-Step Full Pull</td>
                  <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ 24-Step Full Pull</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-zinc-950">Machine Polishing / Swirl Removal</td>
                  <td className="py-3.5 px-3 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-3 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-3 text-center text-zinc-500">Hand Wax Gloss</td>
                  <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Single-Stage Jewelling</td>
                  <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ 1 or 2-Stage Multi-Pad</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-zinc-950">Paint Protection Type</td>
                  <td className="py-3.5 px-3 text-center text-zinc-700">Hydrophobic Gloss Seal</td>
                  <td className="py-3.5 px-3 text-center text-zinc-500">Leather UV Balm</td>
                  <td className="py-3.5 px-3 text-center text-zinc-700">Collinite Carnauba Wax</td>
                  <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">9H SiO2 Quartz (2-5 Yrs)</td>
                  <td className="py-3.5 px-3 text-center text-zinc-700">Polymer Ceramic Prep</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-zinc-950">Starting Price</td>
                  <td className="py-3.5 px-3 text-center font-bold text-zinc-950">From {config.currencySymbol}65</td>
                  <td className="py-3.5 px-3 text-center font-bold text-zinc-950">From {config.currencySymbol}85</td>
                  <td className="py-3.5 px-3 text-center font-bold text-zinc-950">From {config.currencySymbol}110</td>
                  <td className="py-3.5 px-3 text-center font-bold text-zinc-950">From {config.currencySymbol}320</td>
                  <td className="py-3.5 px-3 text-center font-bold text-zinc-950">From {config.currencySymbol}195</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GET IN TOUCH FOR A CUSTOM VALET OR DETAIL (Lead Form)
          ========================================================================= */}
      <LeadFormSection />

      {/* Services FAQs (Duplicated from Home Page with exact matching design) */}
      <FaqSection />

      {/* Mobile Rig Independence Callout (#0B0D10) */}
      <section className="py-16 sm:py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${theme.bgPrimary} flex items-center justify-center text-white shrink-0`}>
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-black text-lg sm:text-xl text-white uppercase">
                  ZERO UTILITIES NEEDED FROM YOUR HOME
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-xl">
                  Our custom Mercedes Sprinter detailing rig carries 500 litres of ultra-pure deionised water (0 TDS) and a quiet Honda inverter generator. We require zero hose connections and zero domestic power cords.
                </p>
              </div>
            </div>

            <button
              onClick={() => openBookingModal()}
              className={`px-6 py-3.5 rounded-xl text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl shrink-0 cursor-pointer min-h-[44px]`}
            >
              CHECK VAN AVAILABILITY
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
