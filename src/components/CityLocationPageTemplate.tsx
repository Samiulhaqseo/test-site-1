import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Truck, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  Phone, 
  ChevronRight,
  Droplets,
  Calendar,
  Sparkles,
  Award,
  Layers,
  Car,
  Home,
  Briefcase,
  Disc,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { CityConfig } from '../data/citiesConfig';
import { ReviewsSection } from './ReviewsSection';
import { LeadFormSection } from './LeadFormSection';
import { CoverageChecker } from './CoverageChecker';
import { GallerySection } from './GallerySection';
import { BuyersGuide } from './BuyersGuide';
import { CtaBanner } from './CtaBanner';

interface CityLocationPageTemplateProps {
  city: CityConfig;
}

export const CityLocationPageTemplate: React.FC<CityLocationPageTemplateProps> = ({ city }) => {
  const { config, openBookingModal, theme } = useBusiness();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => prev === index ? null : index);
  };

  const servicesData = [
    {
      title: 'Mobile Car Valeting & Detailing',
      desc: `Our mobile car valeting and detailing service brings professional vehicle care directly to your home or workplace in ${city.cityName}. We provide thorough exterior cleaning, interior care, paintwork preparation and finishing using professional detailing products and equipment. Whether your vehicle needs a regular valet, a deeper clean or more detailed preparation, we tailor the service to its condition and your requirements. Our mobile approach makes professional vehicle care convenient without requiring you to travel to a detailing centre.`,
      price: 'From £50',
      duration: '1.5 - 2.5 hrs',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Interior Car Detailing',
      desc: `Our interior car detailing service helps restore a cleaner, fresher and more comfortable vehicle cabin in ${city.cityName}. We carefully clean carpets, floor mats, seats, upholstery, leather, dashboards, door panels, trim and interior glass. Deep cleaning can help remove accumulated dirt, dust, stains, pet hair and everyday grime from frequently used areas. Each interior is assessed before work begins so the cleaning approach can be matched to the vehicle's materials, condition and level of soiling.`,
      price: 'From £95',
      duration: '2.5 - 4 hrs',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Exterior Car Detailing',
      desc: `Our exterior car detailing service focuses on safely cleaning and maintaining your vehicle's paintwork, wheels, tyres, glass and exterior surfaces across ${city.cityName}. The process can include pre-washing, careful hand washing, wheel cleaning, drying and finishing to remove everyday road grime and traffic film. For vehicles requiring additional treatment, exterior detailing can also include paint decontamination and protective finishes. We focus on careful cleaning methods designed to maintain the appearance and condition of your vehicle's exterior.`,
      price: 'From £85',
      duration: '2 - 3 hrs',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Paint Correction & Machine Polishing',
      desc: `Paint correction and machine polishing are designed to improve the appearance of tired or marked vehicle paintwork in ${city.cityName}. Depending on the condition of the paint, the process can help reduce the appearance of swirl marks, light scratches, oxidation, holograms and other surface imperfections. We assess the paint before selecting an appropriate polishing approach. The aim is to refine the surface, improve gloss and clarity, and create a better foundation for future paint protection.`,
      price: 'From £195',
      duration: '1 - 2 Days',
      icon: Disc,
      image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Paint Decontamination & Wax Protection',
      desc: `Paint decontamination removes contaminants that ordinary washing may leave behind on a vehicle's exterior surfaces. Road tar, iron fallout, bonded grime and other contaminants can affect how paint looks and feels. Our detailing process in ${city.cityName} can include appropriate chemical and mechanical decontamination before applying a suitable protective finish. Wax protection adds a layer of surface protection while enhancing gloss and making routine washing easier. The treatment is selected according to the vehicle's condition and desired level of protection.`,
      price: 'From £120',
      duration: '3 - 4 hrs',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Ceramic Coating & Paint Protection',
      desc: `Ceramic coating provides a durable protective layer designed to bond to properly prepared vehicle paintwork. Before application, the surface needs thorough cleaning, decontamination and, where appropriate, paint correction to create a suitable foundation. Once applied and cured according to the product requirements, ceramic coating can provide hydrophobic properties, enhance gloss and make the vehicle easier to maintain. We can assess your vehicle in ${city.cityName} and recommend an appropriate preparation and coating solution based on its condition and use.`,
      price: 'From £320',
      duration: '1 - 2 Days',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Fleet & Prestige Vehicle Detailing',
      desc: `We provide professional detailing for prestige vehicles, luxury cars, commercial vehicles and fleets in ${city.cityName}. Different vehicles can require different cleaning methods, products and levels of attention, particularly when maintaining high-value paintwork or multiple vehicles. Our service can cover regular valeting, interior cleaning, exterior detailing, paint decontamination, polishing and protection. For businesses managing several vehicles, a consistent detailing routine can help maintain presentation and provide convenient vehicle care at the workplace or another suitable location.`,
      price: 'Custom Quote',
      duration: 'Bespoke',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const vehiclesData = [
    {
      title: 'Cars & Family Vehicles',
      desc: `Our mobile car detailing service is suitable for everyday cars and family vehicles in ${city.cityName}. Regular driving can leave interiors covered in dust, food marks, pet hair and general grime, while exterior paintwork can collect road dirt and traffic film. We tailor the level of cleaning to your vehicle's condition, from routine valeting to more detailed interior and exterior cleaning. Our mobile service allows you to have your vehicle professionally cared for at home or work.`,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'SUVs & 4x4s',
      desc: `SUVs and 4x4 vehicles often require additional attention because of their larger interiors, bigger wheels and greater exposure to road and off-road conditions. Our mobile detailing service can include thorough interior cleaning, exterior washing, wheel and tyre cleaning, paint decontamination and protective treatments. We adapt the detailing process to the size and condition of your vehicle, helping maintain both its appearance and everyday usability. Service can be arranged at your home, workplace or another suitable location in ${city.cityName}.`,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Prestige & Luxury Vehicles',
      desc: `Prestige and luxury vehicles require careful handling, particularly when maintaining high-quality paintwork, leather interiors and specialist finishes. Our detailing approach focuses on safe cleaning methods, appropriate products and careful attention to individual surfaces. Services can include exterior detailing, interior deep cleaning, paint decontamination, machine polishing and ceramic coating preparation. Before starting, we assess the vehicle's condition and discuss your requirements in ${city.cityName} so the detailing process can be tailored to the vehicle and the level of care you expect.`,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Classic & Enthusiast Vehicles',
      desc: `Classic and enthusiast vehicles often have unique paintwork, trim, interiors and finishes that require a more considered detailing approach. We assess the vehicle before cleaning and select suitable methods for its materials and condition. Our services can include gentle exterior cleaning, paint decontamination, machine polishing, interior detailing and protective treatments. Whether you are preparing a cherished vehicle for an event or simply maintaining its appearance, our mobile service provides professional vehicle care at a convenient ${city.cityName} location.`,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Commercial & Fleet Vehicles',
      desc: `Commercial vehicles and fleets need to remain clean, presentable and ready for everyday business use. Our mobile detailing service can help businesses maintain multiple vehicles without requiring drivers to take them to a detailing centre. We can provide exterior cleaning, interior detailing, wheel and tyre care, paint decontamination and protective treatments according to your fleet's requirements. For businesses in ${city.cityName}, mobile fleet detailing can be arranged at a suitable workplace location, helping keep vehicles looking professional while minimising disruption to daily operations.`,
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const whyChooseReasons = [
    {
      title: '30 Years of Professional Detailing Experience',
      desc: `${config.ownerName} brings three decades of dedicated Scottish automotive care to every vehicle. We know how to read clear coat depth, safely work on delicate paintwork, and revive weathered interiors.`
    },
    {
      title: 'Fully Mobile Detailing Service',
      desc: `Our fully self-contained mobile workshop van arrives directly at your home or workplace across ${city.cityName} & ${city.regionName}. Enjoy your day while your vehicle is meticulously detailed with zero water or power needed from you.`
    },
    {
      title: 'Quality-First, Swirl-Free Detailing Process',
      desc: 'We are never a rushed 10-minute splash-and-dash. We utilize two-bucket grit guard systems, plush microfibres, pH-neutral snow foams, and dual-action polishers that protect your clear coat.'
    },
    {
      title: 'Fully Insured & Professional Service',
      desc: 'Complete £5,000,000 public liability and motor trade insurance cover. We treat every vehicle with the utmost care, honest communication, and pride in our workmanship.'
    },
    {
      title: 'Customer-Focused Vehicle Care',
      desc: "We inspect every panel, seam, and stitch before handover. You don't pay until the work is thoroughly reviewed and you are completely thrilled with the transformation."
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Vehicle Assessment & Consultation',
      desc: `Full walkaround measuring paint depth with digital gauges, diagnosing stone chips, swirl severity, and discussing your exact expectations in ${city.cityName}.`,
      icon: ShieldCheck
    },
    {
      step: '02',
      title: 'Exterior & Interior Preparation',
      desc: 'Citrus pre-wash dissolves road grime and traffic film before contactless snow foam encapsulation lifts abrasive grit safely away from the surface.',
      icon: Droplets
    },
    {
      step: '03',
      title: 'Professional Cleaning & Detailing',
      desc: 'Two-bucket hand wash with grit guards, pure deionised spot-free water rinse, deep interior steam extraction, and leather conditioning.',
      icon: Sparkles
    },
    {
      step: '04',
      title: 'Paint Decontamination & Surface Treatment',
      desc: 'Chemical iron fallout dissolution, clay bar treatment removing bonded contaminants, followed by machine polishing or ceramic sealant.',
      icon: Disc
    },
    {
      step: '05',
      title: 'Final Inspection & Quality Check',
      desc: '360-degree LED sun inspection checking glass clarity, door shut perfection, tyre dressing, and complete customer walkthrough.',
      icon: CheckCircle2
    }
  ];

  return (
    <div className="bg-[#0B0D10] text-zinc-100 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <Link to="/locations" className="hover:text-white transition-colors">Locations</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-white font-medium">{city.cityName}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <Truck className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>Mobile Van Dispatches Across {city.cityName} & {city.regionName}</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO SECTION
          Exact H1: Mobile Car Detailing & Valeting in {cityName}
          ========================================================================= */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-[#0B0D10] border-b border-zinc-800">
        <div className="absolute inset-0 z-0">
          <img
            src={city.heroImage}
            alt={`Mobile Car Detailing & Valeting in ${city.cityName}`}
            className="w-full h-full object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10]/80 via-[#0B0D10]/95 to-[#0B0D10]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-heading font-bold uppercase tracking-wider text-orange-400 mb-6 shadow-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>{city.heroTagline}</span>
          </div>

          {/* EXACT H1 */}
          <h1 className="font-heading font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] uppercase mb-5 drop-shadow-lg max-w-4xl mx-auto">
            Mobile Car Detailing & Valeting in {city.cityName}
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            {city.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => openBookingModal(`${city.cityName} Mobile Detailing`)}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl hover:shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer`}
            >
              <Calendar className="w-4 h-4" />
              <span>Book {city.cityName} Service</span>
            </button>
            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call: {config.phone}</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl flex items-center gap-3 text-left">
              <Star className="w-5 h-5 text-amber-400 shrink-0 fill-amber-400" />
              <div>
                <div className="text-xs font-bold text-white uppercase">5.0 Star Rated</div>
                <div className="text-[11px] text-zinc-400">Trusted {city.cityName} clients</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl flex items-center gap-3 text-left">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Fully Insured</div>
                <div className="text-[11px] text-zinc-400">£5M public liability</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl flex items-center gap-3 text-left">
              <Truck className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Doorstep Service</div>
                <div className="text-[11px] text-zinc-400">Zero power/water needed</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl flex items-center gap-3 text-left">
              <Award className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">30 Years Exp.</div>
                <div className="text-[11px] text-zinc-400">Master Scottish detailer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Professional Mobile Car Detailing Services in {cityName}
          Exact H2: Professional Mobile Car Detailing Services in {cityName}
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              COMPLETE AUTOMOTIVE CARE
            </span>
            {/* EXACT H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-zinc-950 tracking-tight">
              Professional Mobile Car Detailing Services in {city.cityName}
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
              {city.weatherChallenge}
            </p>
          </div>

          {/* Multiple Rows: Each row has 2 columns (Content on one side, Relevant Image on the other) */}
          <div className="space-y-8 sm:space-y-12">
            {servicesData.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-zinc-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md hover:border-orange-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
                >
                  {/* Column 1: Content (Left Hand Side) */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full order-2 lg:order-1">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-zinc-700 uppercase bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
                          {svc.duration}
                        </span>
                        <span className="text-xs font-extrabold text-orange-600 uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                          {svc.price}
                        </span>
                      </div>

                      {/* EXACT H3 */}
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-zinc-950 uppercase tracking-tight mb-3.5 group-hover:text-orange-600 transition-colors">
                        {svc.title}
                      </h3>

                      <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                      <button
                        onClick={() => openBookingModal(`${city.cityName} - ${svc.title}`)}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xs hover:shadow transition-all cursor-pointer min-h-[44px]`}
                      >
                        <span>Book Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={`tel:${config.phone.replace(/\s+/g, '')}`}
                        className="text-xs font-heading font-bold text-zinc-600 hover:text-orange-600 flex items-center gap-1.5 transition-colors py-2"
                      >
                        <Phone className="w-3.5 h-3.5 text-orange-600" />
                        <span>Call: {config.phone}</span>
                      </a>
                    </div>
                  </div>

                  {/* Column 2: Relevant Image (Right Hand Side) */}
                  <div className="lg:col-span-5 w-full h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200/90 shadow-2xs relative order-1 lg:order-2">
                    <img 
                      src={svc.image} 
                      alt={svc.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Mobile Car Detailing at Your Home or Workplace in {cityName}
          Exact H2: Mobile Car Detailing at Your Home or Workplace in {cityName}
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#12151b] text-zinc-100 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              MAXIMUM CONVENIENCE
            </span>
            {/* EXACT H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight">
              Mobile Car Detailing at Your Home or Workplace in {city.cityName}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
              No need to waste hours sitting in car wash queues or arranging lifts. We bring complete salon-grade car care directly to your doorstep in {city.cityName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
                <Home className="w-5 h-5" />
              </div>
              {/* EXACT H3 */}
              <h3 className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                Home Driveway Mobile Detailing
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Relax inside while we meticulously valet your car outside. We operate quietly with self-contained power and deionised water that leaves zero spotting.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              {/* EXACT H3 */}
              <h3 className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                Workplace & Corporate Vehicle Detailing
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Maximize productivity by having your company vehicle or personal daily car detailed while you work in {city.cityName} offices or industrial parks.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              {/* EXACT H3 */}
              <h3 className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                Mobile Detailing With Professional Equipment
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Our custom-equipped detailing van carries 500L pure spot-free water, Honda quiet generators, Rupes polishers, and steam extractors.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              {/* EXACT H3 */}
              <h3 className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                Convenient Doorstep Vehicle Care
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Simple online booking, prompt arrival, and flexible appointment slots tailored around your personal schedule across {city.cityName}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Car Detailing for Different Vehicles in {cityName}
          Exact H2: Car Detailing for Different Vehicles in {cityName}
          (NO BULLETS, NO ICONS - TEXT, CTAS AND IMAGES ONLY)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0B0D10] text-zinc-100 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              SPECIALIZED CAPABILITIES
            </span>
            {/* EXACT H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight">
              Car Detailing for Different Vehicles in {city.cityName}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
              From family hatchbacks dealing with daily school runs to luxury sports cars requiring concourse optical gloss, we detail every vehicle with expert precision in {city.cityName}.
            </p>
          </div>

          {/* Multiple Rows: Each row has 2 columns (Content on left, Relevant Image on right) */}
          <div className="space-y-8 sm:space-y-12">
            {vehiclesData.map((veh, idx) => {
              return (
                <div 
                  key={idx}
                  className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:border-orange-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
                >
                  {/* Column 1: Content (Left Hand Side) */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full order-2 lg:order-1">
                    <div>
                      {/* EXACT H3 */}
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-4 group-hover:text-orange-400 transition-colors">
                        {veh.title}
                      </h3>

                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                        {veh.desc}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                      <button
                        onClick={() => openBookingModal(`${city.cityName} - ${veh.title}`)}
                        className={`inline-flex items-center justify-center px-6 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xs hover:shadow transition-all cursor-pointer min-h-[44px]`}
                      >
                        <span>Book Detailing</span>
                      </button>

                      <a
                        href={`tel:${config.phone.replace(/\s+/g, '')}`}
                        className="text-xs font-heading font-bold text-zinc-400 hover:text-orange-400 transition-colors py-2"
                      >
                        <span>Call: {config.phone}</span>
                      </a>
                    </div>
                  </div>

                  {/* Column 2: Relevant Image (Right Hand Side) */}
                  <div className="lg:col-span-5 w-full h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700/80 shadow-md relative order-1 lg:order-2">
                    <img 
                      src={veh.image} 
                      alt={veh.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Why Choose Moar Detail for Your Vehicle?
          Exact H2: Why Choose Moar Detail for Your Vehicle?
          ========================================================================= */}
      <section id="why-choose-us" className="py-20 bg-white text-zinc-900 border-b border-zinc-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              OUR PROMISE TO YOU
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Why Choose Moar Detail for Your Vehicle?
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              When it comes to choosing a vehicle detailer in {city.cityName} & {city.regionName}, Moar Detail stands out for quality, consistency, and 30 years of customer care. Here's why local car owners trust Hamish:
            </p>
          </div>

          {/* 5 Master Points */}
          <div className="space-y-4 mb-12">
            {whyChooseReasons.map((reason, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#F8FAFC] border border-zinc-200 hover:border-zinc-300 transition-all flex items-start gap-4 shadow-2xs"
              >
                <div className={`mt-0.5 p-1 rounded-full ${theme.textPrimary} shrink-0`}>
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-zinc-950 uppercase tracking-tight mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Subtext and CTAs */}
          <div className="text-center pt-6 border-t border-zinc-200">
            <p className="text-zinc-600 text-xs sm:text-sm mb-6">
              Ready to schedule a detail in {city.cityName}? Give us a call or book your preferred slot online to reserve your appointment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal(`${city.cityName} Mobile Detailing`)}
                className={`w-full sm:w-auto px-7 py-3.5 rounded font-heading font-extrabold text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]`}
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK NOW / GET A QUOTE</span>
              </button>

              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded font-heading font-bold text-xs uppercase tracking-wider text-zinc-800 bg-white hover:bg-zinc-100 border border-zinc-300 transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Phone className={`w-4 h-4 ${theme.textPrimary}`} />
                <span>CALL: {config.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: Our Mobile Car Detailing Process in {cityName}
          Exact H2: Our Mobile Car Detailing Process in {cityName}
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0B0D10] text-zinc-100 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              METHODICAL 5-STEP PROTOCOL
            </span>
            {/* EXACT H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight">
              Our Mobile Car Detailing Process in {city.cityName}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
              Every vehicle undergoes our structured 5-stage treatment process to guarantee safe cleaning and stunning optical results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 relative hover:border-zinc-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-black font-heading text-orange-500 tracking-wider block mb-2">
                      STAGE {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* EXACT H3 */}
                    <h3 className="font-heading font-bold text-sm sm:text-base text-white uppercase tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Our Recent Car Detailing & Valeting Work
          Exact Component from Home Page: GallerySection
          ========================================================================= */}
      <GallerySection />

      {/* =========================================================================
          SECTION: How to Choose a Trusted Car Detailer in Aberdeenshire
          Exact Component from Home Page: BuyersGuide
          ========================================================================= */}
      <BuyersGuide />

      {/* =========================================================================
          SECTION: Mobile Car Detailing & Valeting Across {cityName}
          Exact Component from Home Page: CoverageChecker with Custom Title & Text
          ========================================================================= */}
      <CoverageChecker 
        title={`Mobile Car Detailing & Valeting Across ${city.cityName}`}
        descriptionParagraphs={city.coverageDescription}
        defaultQuery={city.cityName}
      />

      {/* =========================================================================
          SECTION: 50+ Five-Star Reviews From Local Customers
          Exact Component: ReviewsSection
          ========================================================================= */}
      <ReviewsSection />

      {/* =========================================================================
          SECTION: GET IN TOUCH FOR A CUSTOM VALET OR DETAIL
          Exact Component: LeadFormSection
          ========================================================================= */}
      <LeadFormSection />

      {/* =========================================================================
          SECTION: Car Detailing Near {cityName}
          Exact H2: Car Detailing Near {cityName}
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0B0D10] text-zinc-100 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              LOCAL PROXIMITY & CONVENIENCE
            </span>
            {/* EXACT H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight">
              Car Detailing Near {city.cityName}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
              Wherever you are situated in or around {city.cityName}, Moar Detail provides convenient on-demand vehicle treatments that fit your busy life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Near 1 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
                <Home className="w-5 h-5" />
              </div>
              {/* EXACT H3 */}
              <h3 className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                Mobile Detailing at Your Home
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Enjoy hassle-free vehicle maintenance while you relax in your house in {city.cityName}. We work quietly on your driveway with self-contained power and deionised water that leaves zero spotting.
              </p>
            </div>

            {/* Near 2 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              {/* EXACT H3 */}
              <h3 className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                Mobile Detailing at Your Workplace
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Maximize productivity by having your company car, commercial van, or executive fleet valeted while you attend to business in {city.cityName}.
              </p>
            </div>

            {/* Near 3 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              {/* EXACT H3 */}
              <h3 className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                Convenient Appointments Around {city.cityName}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Flexible morning, afternoon, and Saturday slots available across {city.cityName} with simple online booking and prompt telephone confirmations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Car Detailing FAQs for {cityName}
          Exact H2: Car Detailing FAQs for {cityName}
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0B0D10] text-zinc-100 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              COMMON QUESTIONS ANSWERED
            </span>
            {/* EXACT H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight">
              Car Detailing FAQs for {city.cityName}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              Everything you need to know about our mobile car detailing service in {city.cityName}.
            </p>
          </div>

          <div className="space-y-3 mb-10">
            {city.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                    isOpen ? 'border-zinc-700 bg-zinc-900/90' : 'border-zinc-800/90 bg-[#12151b] hover:border-zinc-700'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
                    aria-expanded={isOpen}
                  >
                    {/* EXACT H3 */}
                    <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-white">
                      {faq.q}
                    </h3>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen ? `${theme.textPrimary} bg-orange-950/50` : 'text-zinc-400 bg-zinc-800'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-zinc-800 text-zinc-300">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Helpline banner */}
          <div className="p-5 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#12151b] border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-zinc-800 text-orange-400">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  Need custom advice for {city.cityName} car detailing?
                </div>
                <div className="text-xs text-zinc-400">
                  Speak directly with Hamish Moar for honest, professional Scottish vehicle advice.
                </div>
              </div>
            </div>
            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="px-5 py-2.5 rounded-lg text-xs font-heading font-black uppercase tracking-wider text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shrink-0"
            >
              Call: {config.phone}
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Book Mobile Car Detailing in {cityName}
          Exact Component: CtaBanner
          ========================================================================= */}
      <CtaBanner 
        title={`Book Mobile Car Detailing in ${city.cityName}`}
        subtitle={`When your vehicle in ${city.cityName} needs expert care, our 30-year veteran detailing specialist is ready to help. Whether it's refreshing the interior, restoring shine to the paint, or protecting your investment with decontamination and high-grade quartz wax, we've got you covered right at your doorstep.`}
        bookingContext={`${city.cityName} Detailing`}
      />
    </div>
  );
};
