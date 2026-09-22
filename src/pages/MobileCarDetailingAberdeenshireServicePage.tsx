import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Phone, 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Award, 
  Star, 
  CheckCircle2, 
  Droplets, 
  Zap, 
  Calendar, 
  MapPin, 
  Wind, 
  Sun, 
  Flame, 
  ChevronRight,
  HelpCircle,
  Plus,
  Minus,
  Check,
  X
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { CoverageChecker } from '../components/CoverageChecker';
import { ReviewsSection } from '../components/ReviewsSection';
import { LeadFormSection } from '../components/LeadFormSection';

export const MobileCarDetailingAberdeenshireServicePage: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  // Accordion state for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'Do You Offer Mobile Car Detailing in Aberdeenshire?',
      a: 'Yes! We operate our dedicated mobile detailing van across Aberdeenshire on a regular schedule, covering Peterhead, Aberdeen, Inverurie, Stonehaven, Westhill, Ellon, and Fraserburgh. We travel directly to your home driveway or workplace.'
    },
    {
      q: 'Can You Detail My Car at My Home or Workplace in Aberdeenshire?',
      a: 'Absolutely. We regularly detail vehicles on residential driveways, private courtyard parking, and corporate car parks across Aberdeenshire. All we need is safe permission to park our mobile van next to your car.'
    },
    {
      q: 'What Mobile Car Detailing Services Do You Offer in Aberdeenshire?',
      a: 'We provide a complete suite of services across Aberdeenshire: mobile valeting maintenance, deep interior antibacterial extraction, exterior decontamination washes, multi-stage machine paint correction, and certified 9H ceramic quartz paint protection.'
    },
    {
      q: 'How Much Does Car Detailing Cost in Aberdeenshire?',
      a: 'Pricing in Aberdeenshire starts at £50 for regular mobile valets, £95 for interior deep extraction, £195 for machine paint correction, and £320 for multi-year ceramic quartz coatings. Exact prices depend on vehicle size and paint condition.'
    },
    {
      q: 'How Long Does Mobile Car Detailing Take?',
      a: 'Standard valets take approximately 1.5 to 2.5 hours. Deep interior cleans take 2.5 to 4 hours. Machine paint correction and multi-year ceramic coatings take between 5 hours and 2 days depending on defect severity.'
    },
    {
      q: 'Do You Bring Your Own Water and Equipment in Aberdeenshire?',
      a: 'Yes, 100%. Our mobile detailing van is fully self-sufficient. We carry over 500 litres of ultra-pure deionised water (zero TDS for spot-free rinsing) and an onboard quiet generator. You do not need to provide outdoor taps or electrical cables.'
    },
    {
      q: 'Can You Detail Cars, SUVs and 4x4s in Aberdeenshire?',
      a: 'Yes, we detail all vehicle types in Aberdeenshire—including compact city cars, executive saloons, sports cars, large family SUVs, 4x4s, and commercial fleet vehicles.'
    }
  ];

  return (
    <div className="bg-[#0B0D10] text-zinc-100 min-h-screen">
      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-zinc-600" /></li>
            <li>
              <Link to="/services/" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-zinc-600" /></li>
            <li className="text-zinc-200 font-medium truncate max-w-[200px] sm:max-w-none">
              Mobile Car Detailing in Aberdeen
            </li>
          </ol>
          <div className="hidden sm:flex items-center gap-2 text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span className="font-heading font-semibold text-[11px] uppercase tracking-wider">
              Serving All Aberdeenshire
            </span>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          HERO SECTION
          Exact H1: Mobile Car Detailing in Aberdeenshire — Professional Auto Spa Delivered to Your Doorstep
          ========================================================================= */}
      <section className="relative py-16 sm:py-24 bg-[#0B0D10] border-b border-zinc-800/80 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-heading font-bold uppercase tracking-wider mb-6">
            <Truck className="w-3.5 h-3.5 text-orange-400" />
            <span>100% SELF-CONTAINED MOBILE VAN • WATER & POWER ON-BOARD</span>
          </div>

          {/* EXACT H1 */}
          <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.1] mb-6">
            Mobile Car Detailing in Aberdeen
          </h1>

          {/* Prompt Hero Copy */}
          <p className="max-w-3xl mx-auto text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
            Our mobile car detailing service brings professional vehicle cleaning and detailing directly to your home, workplace, or another suitable location in Aberdeen. Call us today.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={() => openBookingModal('Mobile Car Detailing in Aberdeen')}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black text-sm uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer min-h-[48px]`}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Get Free Instant Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer min-h-[48px]"
            >
              <Phone className={`w-4 h-4 ${theme.textPrimary}`} />
              <span>Call Founder ({config.phone})</span>
            </a>
          </div>

          {/* Trust Indicators Bar */}
          <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-heading font-bold text-white uppercase">5.0 Star Rating</span>
              <span className="text-[11px] text-zinc-400">50+ Local Reviews</span>
            </div>

            <div className="flex flex-col items-center">
              <Award className={`w-4 h-4 ${theme.textPrimary} mb-1`} />
              <span className="text-xs font-heading font-bold text-white uppercase">30 Years Experience</span>
              <span className="text-[11px] text-zinc-400">Master Craftsman</span>
            </div>

            <div className="flex flex-col items-center">
              <Truck className={`w-4 h-4 ${theme.textPrimary} mb-1`} />
              <span className="text-xs font-heading font-bold text-white uppercase">100% Mobile Van</span>
              <span className="text-[11px] text-zinc-400">Water & Power Onboard</span>
            </div>

            <div className="flex flex-col items-center">
              <ShieldCheck className={`w-4 h-4 ${theme.textPrimary} mb-1`} />
              <span className="text-xs font-heading font-bold text-white uppercase">Fully Insured</span>
              <span className="text-[11px] text-zinc-400">Public & Motor Trade</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: Professional Mobile Car Detailing Services
          Exact H2: Professional Mobile Car Detailing Services
          With image on the right side of this section
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top H2 Split Layout: Content on Left, Image on Right */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Content */}
              <div className="lg:col-span-7">
                <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2.5`}>
                  COMPLETE AUTOMOTIVE CARE
                </span>
                {/* EXACT H2 */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-zinc-950 tracking-tight mb-5 leading-tight">
                  Professional Mobile Car Detailing Services
                </h2>
                <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Professional mobile car detailing goes beyond a standard car wash. We pay attention to the interior, exterior, paintwork, wheels, tyres, and other areas that collect dirt and contamination through everyday driving.
                  </p>
                  <p>
                    Our services can include exterior washing, interior cleaning, wheel and tyre cleaning, paintwork decontamination, interior deep cleaning, and paintwork protection, depending on the package selected.
                  </p>
                  <p>
                    Whether your vehicle needs a regular maintenance detail or a more intensive clean, we can recommend a suitable service based on its condition and your requirements.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openBookingModal('Professional Mobile Car Detailing Services - Aberdeen')}
                    className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all cursor-pointer min-h-[44px]`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Book Service in Aberdeen</span>
                  </button>
                  <a
                    href={`tel:${config.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-zinc-800 bg-white hover:bg-zinc-100 border border-zinc-300 transition-colors min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-orange-600" />
                    <span>Call: {config.phone}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 w-full h-72 sm:h-80 lg:h-[400px] rounded-2xl overflow-hidden bg-zinc-200 border border-zinc-200 shadow-sm relative">
                <img
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional Mobile Car Detailing Services"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Our Detailing Packages
          Bronze, Silver, Gold Packages
          ========================================================================= */}
      <section id="packages" className="py-16 sm:py-24 bg-black text-white border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              Choose Your Service
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight mb-3">
              Our Detailing Packages
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Bronze, Silver, and Gold packages, priced by your vehicle. Request a quote for an exact number, usually within the hour.
            </p>
          </div>

          {/* Pricing Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Bronze Package */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-zinc-700 transition-all">
              <div>
                <div className="mb-6 pb-6 border-b border-zinc-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded-full inline-block mb-3">
                    Essential Care
                  </span>
                  <h4 className="font-heading font-black text-2xl text-white uppercase tracking-tight mb-1">
                    Bronze
                  </h4>
                  <p className="text-zinc-400 text-sm font-medium">
                    The Quick Refresh · Interior & Exterior
                  </p>
                </div>

                <ul className="space-y-3 mb-8 text-sm">
                  {/* Included */}
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Floor mat cleaning & vacuum</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Carpet & seat vacuum</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Surface wipe-down & cleaning</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Foam bath & hand wash</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Tire shine</span>
                  </li>

                  {/* Excluded */}
                  <li className="flex items-start gap-3 text-zinc-500">
                    <div className="w-5 h-5 rounded-full bg-zinc-800/60 text-zinc-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="line-through decoration-zinc-600">Carpet shampoo & extraction</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-500">
                    <div className="w-5 h-5 rounded-full bg-zinc-800/60 text-zinc-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="line-through decoration-zinc-600">Leather seat conditioning</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-500">
                    <div className="w-5 h-5 rounded-full bg-zinc-800/60 text-zinc-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="line-through decoration-zinc-600">Clay bar treatment</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-500">
                    <div className="w-5 h-5 rounded-full bg-zinc-800/60 text-zinc-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="line-through decoration-zinc-600">Full interior steam clean</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-500">
                    <div className="w-5 h-5 rounded-full bg-zinc-800/60 text-zinc-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="line-through decoration-zinc-600">12-month exterior protection</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => openBookingModal('Bronze Package - The Quick Refresh')}
                className={`w-full py-3.5 px-6 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all cursor-pointer min-h-[44px]`}
              >
                Get a Quote
              </button>
            </div>

            {/* Silver Package - Highlighted / Most Popular */}
            <div className="bg-zinc-900/95 border-2 border-orange-500 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white font-heading font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-xs">
                Most Popular
              </div>
              <div>
                <div className="mb-6 pb-6 border-b border-zinc-800 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full inline-block mb-3">
                    Enhanced Detail
                  </span>
                  <h4 className="font-heading font-black text-2xl text-white uppercase tracking-tight mb-1">
                    Silver
                  </h4>
                  <p className="text-zinc-400 text-sm font-medium">
                    The Glow Up · Interior & Exterior
                  </p>
                </div>

                <ul className="space-y-3 mb-8 text-sm">
                  {/* Included */}
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Floor mat cleaning & vacuum</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Carpet & seat vacuum</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Surface wipe-down & cleaning</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Foam bath & hand wash</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Tire shine</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-200 font-medium">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Full interior blow-out</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-200 font-medium">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Carpet shampoo & extraction</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-200 font-medium">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Leather seat conditioning</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-200 font-medium">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Clay bar treatment</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-200 font-medium">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>60-day wax</span>
                  </li>

                  {/* Excluded */}
                  <li className="flex items-start gap-3 text-zinc-500">
                    <div className="w-5 h-5 rounded-full bg-zinc-800/60 text-zinc-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="line-through decoration-zinc-600">Full interior steam clean</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-500">
                    <div className="w-5 h-5 rounded-full bg-zinc-800/60 text-zinc-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="line-through decoration-zinc-600">Pet hair removal</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-500">
                    <div className="w-5 h-5 rounded-full bg-zinc-800/60 text-zinc-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="line-through decoration-zinc-600">Odor removal & ozone treatment</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-500">
                    <div className="w-5 h-5 rounded-full bg-zinc-800/60 text-zinc-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="line-through decoration-zinc-600">12-month exterior protection</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => openBookingModal('Silver Package - The Glow Up')}
                className={`w-full py-3.5 px-6 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all cursor-pointer min-h-[44px]`}
              >
                Get a Quote
              </button>
            </div>

            {/* Gold Package - Complete Transformation */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-zinc-700 transition-all relative">
              <div>
                <div className="mb-6 pb-6 border-b border-zinc-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-800/50 px-3 py-1 rounded-full inline-block mb-3">
                    The Ultimate Reset
                  </span>
                  <h4 className="font-heading font-black text-2xl text-white uppercase tracking-tight mb-1">
                    Gold
                  </h4>
                  <p className="text-zinc-400 text-sm font-medium">
                    The Total Reset · Interior & Exterior
                  </p>
                </div>

                <ul className="space-y-3 mb-8 text-sm">
                  {/* All Included */}
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Floor mat cleaning & vacuum</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Carpet & seat vacuum</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Surface wipe-down & cleaning</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Foam bath & hand wash</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Tire shine</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Full interior blow-out</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Carpet shampoo & extraction</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Leather seat conditioning</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Clay bar treatment</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Full interior steam clean</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Pet hair removal</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Odor removal & ozone treatment</span>
                  </li>
                  <li className="flex items-start gap-3 text-white font-semibold">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>12-month exterior protection</span>
                  </li>
                  <li className="flex items-start gap-3 text-white font-semibold">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Priority scheduling</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => openBookingModal('Gold Package - The Total Reset')}
                className={`w-full py-3.5 px-6 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all cursor-pointer min-h-[44px]`}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: What's Included in Our Mobile Car Detailing Packages
          Exact H2: What's Included in Our Mobile Car Detailing Packages
          H3s with relevant images
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2.5`}>
              DETAILED BREAKDOWN
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-zinc-950 tracking-tight mb-4 leading-tight">
              What's Included in Our Mobile Car Detailing Packages
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              The exact services included depend on the package you choose and the condition of your vehicle. Our detailing services can cover the main interior and exterior areas of your vehicle.
            </p>
          </div>

          {/* Row 1: Core Exterior & Interior Services (2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Exterior Car Cleaning */}
            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col">
              <div className="w-full h-56 sm:h-64 overflow-hidden bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=80"
                  alt="Exterior Car Cleaning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-zinc-950 uppercase tracking-tight mb-3">
                    Exterior Car Cleaning
                  </h3>
                  <div className="space-y-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
                    <p>
                      Exterior cleaning removes everyday road dirt, dust, mud, traffic film, and other surface contamination from your vehicle. We carefully clean the bodywork and pay attention to areas where dirt commonly builds up, including lower panels, grilles, door shuts, and other exterior surfaces.
                    </p>
                    <p>
                      A thorough exterior clean helps restore a cleaner and fresher appearance without relying on a quick automated car wash.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interior Car Cleaning */}
            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col">
              <div className="w-full h-56 sm:h-64 overflow-hidden bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80"
                  alt="Interior Car Cleaning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-zinc-950 uppercase tracking-tight mb-3">
                    Interior Car Cleaning
                  </h3>
                  <div className="space-y-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
                    <p>
                      Interior car cleaning focuses on removing dust, dirt, crumbs, and everyday debris from the vehicle's cabin. Depending on the selected package, this can include vacuuming the seats, carpets, mats, boot area, and other interior surfaces.
                    </p>
                    <p>
                      Dashboard, door panels, centre consoles, and other suitable surfaces can also be cleaned to leave the interior fresher and more comfortable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Wheel, Paintwork & Deep Cleaning (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wheel and Tyre Cleaning */}
            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col">
              <div className="w-full h-52 overflow-hidden bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80"
                  alt="Wheel and Tyre Cleaning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-lg sm:text-xl text-zinc-950 uppercase tracking-tight mb-3">
                    Wheel and Tyre Cleaning
                  </h3>
                  <div className="space-y-3 text-zinc-600 text-sm leading-relaxed">
                    <p>
                      Wheels and tyres collect brake dust, road grime, mud, and other contaminants during everyday driving. Our wheel and tyre cleaning service removes this build-up as part of the detailing process.
                    </p>
                    <p>
                      Clean wheels and tyres also help complete the overall appearance of the vehicle after the exterior has been detailed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paintwork Cleaning and Protection */}
            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col">
              <div className="w-full h-52 overflow-hidden bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=80"
                  alt="Paintwork Cleaning and Protection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-lg sm:text-xl text-zinc-950 uppercase tracking-tight mb-3">
                    Paintwork Cleaning and Protection
                  </h3>
                  <div className="space-y-3 text-zinc-600 text-sm leading-relaxed">
                    <p>
                      Your vehicle's paintwork can accumulate road film and environmental contamination that ordinary washing may not completely remove. Depending on the selected package, additional paintwork cleaning and protection can be carried out.
                    </p>
                    <p>
                      Where appropriate, a protective product can be applied to help maintain the finish and make future cleaning easier.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interior Deep Cleaning */}
            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col md:col-span-2 lg:col-span-1">
              <div className="w-full h-52 overflow-hidden bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
                  alt="Interior Deep Cleaning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-lg sm:text-xl text-zinc-950 uppercase tracking-tight mb-3">
                    Interior Deep Cleaning
                  </h3>
                  <div className="space-y-3 text-zinc-600 text-sm leading-relaxed">
                    <p>
                      Interior deep cleaning provides additional attention to areas where dirt, stains, spills, pet hair, and unwanted odours can accumulate. Depending on the vehicle's condition, this may include more detailed cleaning of carpets, upholstery, mats, and other interior surfaces.
                    </p>
                    <p>
                      The cleaning method used will depend on the material and condition of each surface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Mobile Car Detailing at Your Home or Workplace
          Exact H2: Mobile Car Detailing at Your Home or Workplace (No image needed)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-black text-white border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sm:p-12 shadow-xs">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              CONVENIENT ON-SITE SERVICE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight mb-5 leading-tight">
              Mobile Car Detailing at Your Home or Workplace
            </h2>
            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Mobile detailing makes professional vehicle care more convenient by bringing the service to you. Rather than arranging time to drop off and collect your vehicle, you can have your car detailed at home, at work, or at another suitable location.
              </p>
              <p>
                This is particularly useful for busy vehicle owners in Aberdeen who want professional car detailing without having to spend additional time travelling to a detailing centre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Mobile Car Detailing for Cars, SUVs and Vans
          Exact H2: Mobile Car Detailing for Cars, SUVs and Vans
          Image on right-hand side of text
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-zinc-50 text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-4">
              <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block`}>
                ALL VEHICLE SIZES & TYPES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-zinc-950 tracking-tight leading-tight">
                Mobile Car Detailing for Cars, SUVs and Vans
              </h2>
              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed pt-2">
                <p>
                  Our mobile car detailing services can be adapted to different types of vehicles, including everyday cars, family SUVs, 4x4s, and vans.
                </p>
                <p>
                  The size and condition of the vehicle can affect the amount of time and work required. During the initial assessment, we can recommend the most suitable package based on the vehicle's condition and your detailing requirements.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 w-full h-72 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden bg-zinc-200 border border-zinc-200 shadow-sm relative">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80"
                alt="Mobile Car Detailing for Cars, SUVs and Vans"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Benefits of Detailing for Your Vehicle
          Exact H2: Benefits of Detailing for Your Vehicle (No image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-black text-white border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sm:p-12 shadow-xs">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              LONG-TERM VALUE & CARE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight mb-6 leading-tight">
              Benefits of Detailing for Your Vehicle
            </h2>
            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Regular vehicle detailing does more than improve your car’s appearance. It helps keep the interior and exterior clean, protected, and well maintained.
              </p>
              <p>
                Professional detailing removes road grime, dirt, dust, and other contaminants that can build up on your vehicle’s paintwork. Depending on the service, protective treatments can also help maintain the finish and make future cleaning easier.
              </p>
              <p>
                Interior detailing removes dust, food debris, stains, pet hair, and unwanted odours from carpets, seats, mats, and other surfaces. Regular cleaning can help keep the cabin fresher and more comfortable.
              </p>
              <p>
                Detailing also improves the overall appearance of your vehicle, from the paintwork and wheels to the dashboard and upholstery. Keeping your car clean and properly maintained can help preserve its condition over time.
              </p>
              <p>
                Whether you drive every day or simply want to take better care of your vehicle, regular detailing provides a convenient way to keep it looking clean, fresh, and well cared for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Step-by-Step Mobile Detailing Process
          Exact H2: Step-by-Step Mobile Detailing Process
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-950 text-xs font-heading font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
              <span>METICULOUS QUALITY CONTROL</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-[1.15] mb-4">
              Step-by-Step Mobile Detailing Process
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Transparency is key to our service. We follow a strict, standardized operating procedure to ensure your vehicle is treated safely and systematically, avoiding cross-contamination or cutting corners.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-orange-600 text-white font-heading font-black text-lg flex items-center justify-center shrink-0">
                1
              </div>
              <div className="flex-grow">
                <h3 className="font-heading font-black text-lg sm:text-xl text-zinc-950 uppercase tracking-tight mb-2.5">
                  Step 1: Pre-Rinse and Scratch-Free Foam Cannon Wash
                </h3>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Before we ever touch your vehicle's paint with a wash mitt, we blanket the exterior in a thick, pH-neutral snow foam. This specialized foam encapsulates and lifts heavy dirt and road grime away from the clear coat. We then perform a high-pressure pre-rinse, followed by a meticulous two-bucket hand wash using ultra-plush microfiber mitts to ensure zero swirl marks are introduced.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-orange-600 text-white font-heading font-black text-lg flex items-center justify-center shrink-0">
                2
              </div>
              <div className="flex-grow">
                <h3 className="font-heading font-black text-lg sm:text-xl text-zinc-950 uppercase tracking-tight mb-2.5">
                  Step 2: Wheel, Tire, and Fender Well Decontamination
                </h3>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  Wheels are often the dirtiest part of a vehicle. We use dedicated wheel buckets and non-acidic, iron-activating chemical cleaners to dissolve baked-on brake dust. Soft bristle brushes agitate dirt out of the barrel of the rims, lug nut crevices, and tire sidewalls. We finish by flushing out the fender wells and applying a no-sling, UV-blocking tire dressing.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-orange-600 text-white font-heading font-black text-lg flex items-center justify-center shrink-0">
                3
              </div>
              <div className="flex-grow">
                <h3 className="font-heading font-black text-lg sm:text-xl text-zinc-950 uppercase tracking-tight mb-2.5">
                  Step 3: Interior Compressed Air Blowout and Vacuuming
                </h3>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  We start the interior process by using compressed air (the high-pressure tornado method) to blow trapped dust and debris out of tight seat rails, air conditioning vents, and console crevices. Once everything is forced to the floorboards, we perform a thorough, multi-pass vacuuming of the carpets, floor mats, and trunk.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-orange-600 text-white font-heading font-black text-lg flex items-center justify-center shrink-0">
                4
              </div>
              <div className="flex-grow">
                <h3 className="font-heading font-black text-lg sm:text-xl text-zinc-950 uppercase tracking-tight mb-2.5">
                  Step 4: Hot Water Extraction and Leather Hydration
                </h3>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  For fabric seats and carpets, we treat stains with a specialized fabric enzyme before using a commercial hot water extractor to pull out years of embedded dirt and sweat. For leather interiors, we utilize gentle horsehair brushes and pH-balanced cleaners to safely strip away body oils and dye transfer, finishing with a premium leather conditioner to restore softness and prevent cracking.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-orange-600 text-white font-heading font-black text-lg flex items-center justify-center shrink-0">
                5
              </div>
              <div className="flex-grow">
                <h3 className="font-heading font-black text-lg sm:text-xl text-zinc-950 uppercase tracking-tight mb-2.5">
                  Step 5: Glass Polishing and Paint Sealant Application
                </h3>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  We conclude the detail by applying a synthetic polymer sealant or ceramic spray to the exterior paint, locking in gloss and providing weeks of hydrophobic water-beading protection. Finally, all interior and exterior glass is polished using a two-towel method to guarantee a streak-free, crystal-clear finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Why Choose Moar Detail for Your Vehicle?
          Exact Eyebrow: OUR PROMISE TO YOU
          Exact H2: Why Choose Moar Detail for Your Vehicle?
          Matches Location Page (/locations/peterhead-car-detailing/) Design & Layout
          ========================================================================= */}
      <section id="why-choose-us" className="py-20 bg-black text-white border-b border-zinc-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              OUR PROMISE TO YOU
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Why Choose Moar Detail for Your Vehicle?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              When it comes to choosing a vehicle detailer in Aberdeenshire, Moar Detail stands out for quality, consistency, and 30 years of customer care. Here's why local car owners trust Hamish:
            </p>
          </div>

          {/* 5 Master Points */}
          <div className="space-y-4 mb-12">
            <div className="p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all flex items-start gap-4 shadow-2xs">
              <div className={`mt-0.5 p-1 rounded-full ${theme.textPrimary} shrink-0`}>
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white uppercase tracking-tight mb-1.5">
                  30 Years of Professional Detailing Experience
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {config.ownerName} brings three decades of dedicated Scottish automotive care to every vehicle. We know how to read clear coat depth, safely work on delicate paintwork, and revive weathered interiors.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all flex items-start gap-4 shadow-2xs">
              <div className={`mt-0.5 p-1 rounded-full ${theme.textPrimary} shrink-0`}>
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white uppercase tracking-tight mb-1.5">
                  Fully Mobile Detailing Service
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Our fully self-contained mobile workshop van arrives directly at your home or workplace across Aberdeenshire. Enjoy your day while your vehicle is meticulously detailed with zero water or power needed from you.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all flex items-start gap-4 shadow-2xs">
              <div className={`mt-0.5 p-1 rounded-full ${theme.textPrimary} shrink-0`}>
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white uppercase tracking-tight mb-1.5">
                  Quality-First, Swirl-Free Detailing Process
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We are never a rushed 10-minute splash-and-dash. We utilize two-bucket grit guard systems, plush microfibres, pH-neutral snow foams, and dual-action polishers that protect your clear coat.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all flex items-start gap-4 shadow-2xs">
              <div className={`mt-0.5 p-1 rounded-full ${theme.textPrimary} shrink-0`}>
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white uppercase tracking-tight mb-1.5">
                  Fully Insured & Professional Service
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Complete £5,000,000 public liability and motor trade insurance cover. We treat every vehicle with the utmost care, honest communication, and pride in our workmanship.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all flex items-start gap-4 shadow-2xs">
              <div className={`mt-0.5 p-1 rounded-full ${theme.textPrimary} shrink-0`}>
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white uppercase tracking-tight mb-1.5">
                  Customer-Focused Vehicle Care
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We inspect every panel, seam, and stitch before handover. You don't pay until the work is thoroughly reviewed and you are completely thrilled with the transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Subtext and CTAs */}
          <div className="text-center pt-6 border-t border-zinc-800">
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">
              Ready to schedule a detail in Aberdeenshire? Give us a call or book your preferred slot online to reserve your appointment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal('Aberdeenshire Mobile Detailing')}
                className={`w-full sm:w-auto px-7 py-3.5 rounded font-heading font-extrabold text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]`}
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK NOW / GET A QUOTE</span>
              </button>

              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded font-heading font-bold text-xs uppercase tracking-wider text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Phone className={`w-4 h-4 ${theme.textPrimary}`} />
                <span>CALL: {config.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: Mobile Car Detailing & Valeting Across Aberdeenshire (Coverage Checker)
          ========================================================================= */}
      <CoverageChecker />

      {/* =========================================================================
          REVIEWS SECTION
          ========================================================================= */}
      <ReviewsSection />

      {/* =========================================================================
          LEAD FORM SECTION
          ========================================================================= */}
      <LeadFormSection />

      {/* =========================================================================
          SECTION: Car Detailing FAQs for Aberdeenshire
          Exact H2: Car Detailing FAQs for Aberdeenshire
          Styled & Designed Identically to Location Page (/locations/peterhead-car-detailing/)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0B0D10] text-zinc-100 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              COMMON QUESTIONS ANSWERED
            </span>
            {/* EXACT H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight">
              Car Detailing FAQs for Aberdeenshire
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              Everything you need to know about our mobile car detailing service in Aberdeenshire.
            </p>
          </div>

          <div className="space-y-3 mb-10">
            {faqs.map((faq, idx) => {
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
                  Need custom advice for Aberdeenshire car detailing?
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
          BOOKING CTA BANNER
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-950 text-xs font-heading font-bold uppercase tracking-wider mb-6">
            <Calendar className="w-3.5 h-3.5 text-orange-600" />
            <span>DISPATCH TO YOUR DRIVEWAY</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-[1.15] mb-5">
            Book Your Mobile Car Detailing Service in Aberdeenshire
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Tell us your vehicle make, model, and location anywhere in Aberdeenshire. We'll provide an instant confirmed quote and reserve your dedicated detailing slot with zero hassle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal('Mobile Car Detailing Service in Aberdeenshire')}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black text-sm uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-lg shadow-orange-500/20 transition-all duration-200 cursor-pointer min-h-[48px]`}
            >
              Reserve Your Appointment
            </button>

            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-zinc-900 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>Call Founder ({config.phone})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
