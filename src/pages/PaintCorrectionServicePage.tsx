import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Phone, 
  ShieldCheck, 
  Clock, 
  Droplets, 
  CheckCircle2, 
  MapPin, 
  Truck, 
  ArrowRight, 
  Car, 
  Wrench, 
  Zap, 
  Award,
  ChevronRight,
  Search,
  Check,
  Calendar,
  Plus,
  Minus,
  HelpCircle,
  Eye,
  Disc
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { ReviewsSection } from '../components/ReviewsSection';
import { LeadFormSection } from '../components/LeadFormSection';

export const PaintCorrectionServicePage: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  // Town & Postcode Checker State
  const [postcodeQuery, setPostcodeQuery] = useState('');
  const [coverageResult, setCoverageResult] = useState<{ checked: boolean; covered: boolean; message: string } | null>(null);

  // FAQ open/close state for the 9 requested Paint Correction FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleCoverageCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcodeQuery.trim()) return;

    const cleanInput = postcodeQuery.trim().toUpperCase();
    const abMatches = cleanInput.match(/^AB\d{1,2}/i);
    const popularAberdeenTowns = [
      'ABERDEEN', 'INVERURIE', 'WESTHILL', 'STONEHAVEN', 'ELLON', 'BANCHORY',
      'DYCE', 'PETERHEAD', 'ALFORD', 'HUNTLY', 'ABOYNE', 'KILDRUMMY', 'KEMNAY',
      'TURRIFF', 'PORTSOY', 'FRASERBURGH', 'OLDMELDRUM', 'KINGSWELLS', 'BRIDGE OF DON'
    ];

    const isTownMatch = popularAberdeenTowns.some(town => cleanInput.includes(town));

    if (abMatches || isTownMatch || cleanInput.includes('AB')) {
      setCoverageResult({
        checked: true,
        covered: true,
        message: `Excellent! ${cleanInput} is within our standard mobile detailing operating area. Full machine polishing and paint correction services are available at your driveway or premises.`
      });
    } else {
      setCoverageResult({
        checked: true,
        covered: true,
        message: `We cover all AB postcode districts across Aberdeenshire. Call us directly on ${config.phone} to schedule your mobile paint correction.`
      });
    }
  };

  return (
    <div className="bg-[#0B0D10] text-zinc-100 min-h-screen">
      
      {/* Breadcrumb Top Bar */}
      <div className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-white font-medium">Paint Correction</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <Truck className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>Mobile Detailing Dispatched Across {config.location}</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO SECTION: Dark (#0B0D10)
          Exact H1: Paint Correction & Machine Polishing in Aberdeenshire
          ========================================================================= */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-[#0B0D10] border-b border-zinc-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=2000&q=80"
            alt="Paint Correction and Machine Polishing in Aberdeenshire"
            className="w-full h-full object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10]/80 via-[#0B0D10]/95 to-[#0B0D10]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-heading font-bold uppercase tracking-wider text-orange-400 mb-6 shadow-xs">
            <Disc className="w-3.5 h-3.5" />
            <span>SWIRL REMOVAL & MACHINE POLISHING SPECIALISTS</span>
          </div>

          {/* EXACT H1 */}
          <h1 className="font-heading font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] sm:leading-[1.08] uppercase mb-5 drop-shadow-lg max-w-4xl mx-auto">
            Paint Correction & Machine Polishing in Aberdeenshire
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Permanently eliminate wash swirls, holograms, buffer trails, and dull oxidation. Master detailer Hamish Moar uses precision digital paint gauges and dual-action rotary polishers to restore deep optical reflections and showroom clarity right on your driveway.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={() => openBookingModal('Paint Correction Service')}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl hover:shadow-orange-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer`}
            >
              <Calendar className="w-4 h-4" />
              <span>Get Free Correction Quote</span>
            </button>
            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-zinc-100 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call Hamish: {config.phone}</span>
            </a>
          </div>

          {/* Key Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-zinc-800/80 text-left">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Defect Removal</div>
                <div className="text-[11px] text-zinc-400">Up to 85-95%+ Swirl Free</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Disc className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Paint Safe</div>
                <div className="text-[11px] text-zinc-400">Digital Ultrasonic Gauging</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">30 Yrs Experience</div>
                <div className="text-[11px] text-zinc-400">Founder Hamish Moar</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Mobile Delivery</div>
                <div className="text-[11px] text-zinc-400">Direct To Home Or Work</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 1: Introduction (Light: #FFFFFF)
          Exact H2: Professional Paint Correction for Swirl-Free, Glossy Paintwork
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-950 text-xs font-heading font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>OPTICAL PERFECTION & CLARITY</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-[1.15] mb-6">
                Professional Paint Correction for Swirl-Free, Glossy Paintwork
              </h2>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                When sunlight hits your car, do you notice spider-web scratches, dull gray haze, or circular wash marring? These defects scatter light rays rather than reflecting them directly, robbing your vehicle's paintwork of gloss, depth, and vibrant color flake.
              </p>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                Paint correction is not a temporary glaze or filler wax that washes away after two rains. It is the skilled, mechanical leveling of the transparent clear coat using specialized diminishing abrasive compounds, wool/foam pads, and dual-action machine polishers to permanently eliminate defects.
              </p>

              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-zinc-800 space-y-1.5">
                <div className="font-heading font-bold uppercase text-orange-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>The Moar Detail Machine Polishing Standard</span>
                </div>
                <p className="text-zinc-700 leading-relaxed">
                  Every vehicle's paint varies in hardness—from soft Japanese clears to rock-hard German ceramic finishes. With 30 years of hands-on experience, Hamish Moar tests specific pad and compound combinations to preserve clear-coat integrity while achieving stunning clarity.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => openBookingModal('Paint Correction Inspection')}
                  className={`px-6 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all cursor-pointer`}
                >
                  Book Paint Inspection
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=80"
                  alt="Machine polishing paint correction on car"
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 bg-zinc-950 text-white border-t border-zinc-800">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-heading font-bold uppercase text-orange-400">Micro-Measurement</span>
                    <span className="text-zinc-400">Safe Clear Coat Preserved</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Defects permanently leveled without excessive paint removal or risk of strike-through.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: What Is Paint Correction? (Dark: #0B0D10)
          Exact H2: What Is Paint Correction?
          Exact H3s:
          • H3: How Paint Correction Improves Vehicle Paintwork
          • H3: Paint Correction vs Machine Polishing
          • H3: Paint Correction vs Car Polishing Products
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              THE SCIENCE OF RESTORATION
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              What Is Paint Correction?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Understanding the mechanical process of leveling clear coat to achieve sharp, undistorted mirror reflections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-800 text-orange-400 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  How Paint Correction Improves Vehicle Paintwork
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Every swirl mark or light scratch has two raised microscopic edges that catch sunlight and reflect white glare. Paint correction microscopic leveling smooths down these ridges until the surface is uniform, allowing light to penetrate directly to the base color coat and bounce back cleanly.
                </p>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 pt-4 border-t border-zinc-800">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Restores true optical depth and clarity</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Eliminates milky, washed-out paint haze</span>
                </li>
              </ul>
            </div>

            {/* H3 2 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-800 text-orange-400 flex items-center justify-center mb-6">
                  <Disc className="w-6 h-6" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Paint Correction vs Machine Polishing
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Standard machine polishing is a single-step gloss enhancement aimed at brightening dull paint. Paint correction is an intensive, multi-stage restorative procedure involving heavy compounding to eliminate deeper defects followed by micro-finishing jewelling pads.
                </p>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 pt-4 border-t border-zinc-800">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Polishing: Quick gloss booster (50-60% defect reduction)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Correction: Precision surgical leveling (85-95%+ defect removal)</span>
                </li>
              </ul>
            </div>

            {/* H3 3 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-800 text-orange-400 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Paint Correction vs Car Polishing Products
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Over-the-counter hand polishes and showroom "all-in-one" glazes rely on heavy silicone oils and chalk fillers that temporarily hide scratches. Within a few weeks or washes, the fillers evaporate, revealing the exact same swirl marks underneath. Paint correction physically removes them forever.
                </p>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 pt-4 border-t border-zinc-800">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Zero masking fillers or temporary silicone glazes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Permanent, true optical defect elimination</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Paint Defects We Can Correct (Light: #FFFFFF)
          Exact H2: Paint Defects We Can Correct
          Exact H3s:
          • H3: Swirl Marks & Fine Scratches
          • H3: Buffer Trails & Holograms
          • H3: Oxidation & Dull Paintwork
          • H3: Water Spots & Surface Marring
          • H3: Light Paint Defects & Surface Imperfections
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              COMMON CLEAR COAT FLAWS
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Paint Defects We Can Correct
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              We diagnose and safely level all manner of automotive clear coat damage across Scottish daily drivers and enthusiast vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Disc className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Swirl Marks & Fine Scratches
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Caused by improper hand wash techniques, dirty sponges, automatic car wash brushes, and gritty road dust dragging across the surface during wiping.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Buffer Trails & Holograms
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Ghostly, 3D ghost trails left behind by inexperienced bodyshop technicians or high-speed rotary polishers using dirty wool pads and incorrect compounding techniques.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Oxidation & Dull Paintwork
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Sun exposure, acid rain, and weather degradation cause the upper clear coat to dry out, lose oils, and develop a chalky, dead, faded finish.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Water Spots & Surface Marring
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Hard tap water minerals and acidic rainwater baked onto hot panels, etching shallow craters into the paintwork that regular shampoo cannot dissolve.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Light Paint Defects & Surface Imperfections
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Scratches from fingernails under door handles, hedge brushes along narrow rural Aberdeenshire lanes, scuffs from bags on boot sills, and shallow bird lime etchings.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: Paint Correction Process (Dark: #0B0D10)
          Exact H2: Our Paint Correction Process
          Exact H3s:
          • H3: Vehicle Inspection & Paint Assessment
          • H3: Thorough Exterior Cleaning
          • H3: Paint Decontamination
          • H3: Paint Thickness Assessment
          • H3: Machine Polishing & Defect Removal
          • H3: Refining & Gloss Enhancement
          • H3: Final Inspection & Paint Protection
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              SURGICAL SEVEN-STAGE WORKFLOW
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Our Paint Correction Process
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Every vehicle undergoes a disciplined, paint-safe restorative protocol executed by founder Hamish Moar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Step 1 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STAGE 01</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Vehicle Inspection & Paint Assessment
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We inspect each panel under multi-spectrum high-CRI detailing lights to identify defect types, prior resprays, edge thinness, and clear coat characteristics.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STAGE 02</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Thorough Exterior Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  High-foaming citrus pre-wash bath dissolves road grime, followed by a gentle two-bucket safe hand wash using plush microfibre mitts and pure deionised water.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STAGE 03</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Paint Decontamination
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Chemical fallout removers dissolve bonded iron brake dust, specialized solvents dissolve road tar, and fine clay bars pull out embedded grit so pads never grind particles into paint.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STAGE 04</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Paint Thickness Assessment
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Using digital ultrasonic paint depth gauges, we record total coating thickness across all metal and composite panels to verify safe compound leveling thresholds.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STAGE 05</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Machine Polishing & Defect Removal
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Precision dual-action or rotary polishers with tailored microfibre or foam cutting pads and diminishing abrasive compounds level swirl marks, scratches, and water etchings.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STAGE 06</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Refining & Gloss Enhancement
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  An ultra-fine finishing pad and jewelling polish eliminate any micro-marring from cutting stages, refining the surface to an intense, liquid mirror-like reflection.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between md:col-span-2 lg:col-span-3">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STAGE 07</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Final Inspection & Paint Protection
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  IPA panel wipes strip all polishing lubricating oils to verify 100% defect removal. We then apply your chosen protective barrier—from premium carnauba waxes to multi-year 9H ceramic coatings.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: Correction Packages (Light: #FFFFFF)
          Exact H2: Paint Correction Packages for Different Levels of Defects
          Exact H3s:
          • H3: Single-Stage Paint Correction
          • H3: Multi-Stage Paint Correction
          • H3: Gloss Enhancement & Light Correction
          • H3: Deeper Defect Correction
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              FLEXIBLE CORRECTION TIERS
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Paint Correction Packages for Different Levels of Defects
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Select the ideal machine polishing package matched to your vehicle’s condition, goals, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* H3 1 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-heading font-black px-2.5 py-1 rounded-md bg-orange-100 text-orange-950 uppercase">
                    MOST POPULAR
                  </span>
                  <span className="text-sm font-bold text-zinc-500">65-75% Defect Removal</span>
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-xl text-zinc-950 uppercase tracking-tight mb-3">
                  Single-Stage Paint Correction
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Utilizes an all-in-one diminishing abrasive pad and compound combination. It strikes the perfect balance between cutting away moderate swirl marks and refining clear coat gloss in a single pass. Ideal for newer cars and well-maintained daily drivers.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-heading font-black px-2.5 py-1 rounded-md bg-zinc-900 text-white uppercase">
                    SHOWROOM RESTORATION
                  </span>
                  <span className="text-sm font-bold text-zinc-500">85-95%+ Defect Removal</span>
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-xl text-zinc-950 uppercase tracking-tight mb-3">
                  Multi-Stage Paint Correction
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  A heavy compounding cutting stage with microfibre or wool pads levels deep scratches, etching, and severe swirl damage. Followed by a secondary refining jewelling stage that leaves behind deep, flawless mirror reflections.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-heading font-black px-2.5 py-1 rounded-md bg-zinc-200 text-zinc-800 uppercase">
                    ENTRY TIER
                  </span>
                  <span className="text-sm font-bold text-zinc-500">40-50% Defect Removal</span>
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-xl text-zinc-950 uppercase tracking-tight mb-3">
                  Gloss Enhancement & Light Correction
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Designed for vehicles with minor paint hazing or for clients preparing a car for sale or lease return. Uses fine finishing polish to clean clear coat surface oxidation and enhance gloss without aggressive cutting.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-heading font-black px-2.5 py-1 rounded-md bg-orange-600 text-white uppercase">
                    BESPOKE INTENSIVE
                  </span>
                  <span className="text-sm font-bold text-zinc-500">Maximum Safe Correction</span>
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-xl text-zinc-950 uppercase tracking-tight mb-3">
                  Deeper Defect Correction
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Includes localized wet-sanding on deep isolated scratches (RIDS), bird dropping acid burn removal, and orange peel reduction on classic restorations and high-end exotics where absolute perfection is demanded.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: Expected Results (Dark: #0B0D10)
          Exact H2: What Results Can You Expect From Paint Correction?
          Exact H3s:
          • H3: Improved Paint Gloss & Clarity
          • H3: Reduced Swirl Marks & Surface Defects
          • H3: Smoother, Cleaner-Looking Paintwork
          • H3: Enhanced Appearance Before Paint Protection
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              THE VISUAL TRANSFORMATION
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              What Results Can You Expect From Paint Correction?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              A profound aesthetic transformation that makes your vehicle look noticeably better than the day it left the dealership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Improved Paint Gloss & Clarity
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Reflections become razor-sharp rather than fuzzy or milky. Metallic and pearlescent paint flakes pop vividly in sunlight with intense color saturation.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Disc className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Reduced Swirl Marks & Surface Defects
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Up to 90%+ of webbed circular scratches, towel drag lines, and car wash marring are permanently leveled and physically gone.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Smoother, Cleaner-Looking Paintwork
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Decontamination and compounding make the clear coat silky smooth to the touch, preventing dirt and road film from clinging as easily.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Enhanced Appearance Before Paint Protection
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Creating an unblemished, optically flat foundation ensures waxes, sealants, or ceramic coatings bond with maximum durability and showcase peak brilliance.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: Different Vehicle Types (Light: #FFFFFF)
          Exact H2: Paint Correction for Different Types of Vehicles
          Exact H3s:
          • H3: Paint Correction for Daily-Driven Cars
          • H3: Paint Correction for SUVs & 4x4s
          • H3: Paint Correction for Prestige & Luxury Vehicles
          • H3: Paint Correction for Classic & Enthusiast Cars
          • H3: Paint Correction for Newer Vehicles
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              TAILORED PAINT CARE
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Paint Correction for Different Types of Vehicles
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Every vehicle category receives a customized approach respecting paint hardness, panel contours, and clear coat depth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Paint Correction for Daily-Driven Cars
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Restores high-mileage hatchbacks and commuter saloons suffering from years of brush car wash abrasions and harsh winter road grit across Aberdeen.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Paint Correction for SUVs & 4x4s
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Carefully levels hedge branch pin-stripes, lower door sill rock abrasion, and traffic film staining on Range Rovers, Land Cruisers, and family SUVs.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Paint Correction for Prestige & Luxury Vehicles
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Aston Martins, Porsches, Ferraris, and Bentleys demand expert handling of complex curves, delicate piano black trims, and composite carbon panels.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Paint Correction for Classic & Enthusiast Cars
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Single-stage vintage lacquers and older cellulose finishes lack modern clear coats and require vintage-experienced hands and gentle compound formulations.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Paint Correction for Newer Vehicles
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Dealerships often introduce swirls during aggressive pre-delivery valet wiping. A single-stage refinement cleans factory defects before sealing with ceramic armor.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: Why Choose Moar Detail (Dark: #0B0D10)
          Exact H2: Why Choose Moar Detail for Paint Correction?
          Exact H3s:
          • H3: 30 Years of Professional Detailing Experience
          • H3: Careful Paint Inspection Before Polishing
          • H3: Professional Machine Polishing Equipment
          • H3: Paint-Focused Correction Process
          • H3: Quality Inspection After Every Correction
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              THE MOAR DETAIL PEDIGREE
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Why Choose Moar Detail for Paint Correction?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Trusted by prestige vehicle collectors and daily drivers across Aberdeenshire for over 30 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  30 Years of Professional Detailing Experience
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Founder Hamish Moar has machine-polished thousands of vehicles over three decades, knowing precisely how every clear coat system reacts to pad friction and heat.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Careful Paint Inspection Before Polishing
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We measure clear coat depth with digital ultrasonic micrometers to identify thin or resprayed areas, ensuring safe work that never burns edges or thins clear coat dangerously.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Disc className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Professional Machine Polishing Equipment
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We utilize industry-standard Rupes and Flex dual-action random orbital polishers with diminishing abrasives that produce zero buffer trails or rotary holograms.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Paint-Focused Correction Process
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We test an isolated panel spot first to verify the least aggressive pad and compound combination that safely achieves maximum correction.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Quality Inspection After Every Correction
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  After chemical panel wipes strip all polishing oils, every section is inspected under both concentrated daylight and high-CRI LED inspection lights to guarantee true results.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: Before Ceramic Coating (Light: #FFFFFF)
          Exact H2: Paint Correction Before Ceramic Coating
          Exact H3s:
          • H3: Why Paint Preparation Matters Before Ceramic Coating
          • H3: Removing Surface Defects Before Protection
          • H3: Creating a Clean, Glossy Surface for Coating
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              THE FOUNDATION OF PROTECTION
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Paint Correction Before Ceramic Coating
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Why professional paint correction is an indispensable prerequisite prior to locking in ceramic quartz protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Why Paint Preparation Matters Before Ceramic Coating
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Ceramic coatings form a semi-permanent covalent bond to whatever surface they touch. If applied over swirls, scratches, or bonded contaminants, those defects become permanently sealed beneath hard glass armor.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Removing Surface Defects Before Protection
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Leveling clear coat defects beforehand guarantees that what you are sealing is 100% pure, optically flat paintwork that reflects light directly with breathtaking clarity.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Creating a Clean, Glossy Surface for Coating
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  A machine-polished surface provides optimal surface tension and microscopic pore cleanliness, allowing SiO2 ceramic molecules to cross-link with maximum bond strength and durability.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: Pricing (Dark: #0B0D10)
          Exact H2: Paint Correction Prices in Aberdeenshire
          Exact H3s:
          • H3: What Affects Paint Correction Cost?
          • H3: Vehicle Size & Paint Condition
          • H3: Level of Paint Correction Required
          • H3: Paint Decontamination & Preparation
          • H3: Additional Paint Protection Options
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              TRANSPARENT VALUE
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Paint Correction Prices in Aberdeenshire
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Every vehicle receives an honest quotation tailored to actual paint condition and desired correction level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            {/* H3 1 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  What Affects Paint Correction Cost?
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Machine polishing is highly labor-intensive, requiring 6 to 18+ hours of concentrated machine pad work depending on paint hardness and severity of defects.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Vehicle Size & Paint Condition
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  A large Land Rover Discovery has substantially more painted body panel area than a compact hatchback, requiring additional time and polishing passes.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Disc className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Level of Paint Correction Required
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  A single-stage enhancement takes approximately 6-8 hours, whereas a multi-stage major correction for deep defects requires 1.5 to 2 days of methodical passes.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Paint Decontamination & Preparation
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  All packages include multi-stage chemical decontamination and clay bar treatments to prevent embedded grit from marring panels during machine polishing.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-7 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Additional Paint Protection Options
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  You can pair your corrected paintwork with Collinite carnauba paste wax or upgrade to multi-year 9H ceramic quartz protection for ultimate durability.
                </p>
              </div>
            </div>

          </div>

          {/* Pricing CTA Bar */}
          <div className="p-6 rounded-2xl bg-zinc-900 text-white border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-lg font-heading font-black uppercase text-white tracking-tight">
                Enhancement Polishing From £195 | Full Multi-Stage From £350
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Receive an accurate, transparent quote based on your vehicle model and defect inspection.
              </div>
            </div>
            <button
              onClick={() => openBookingModal('Paint Correction Quote')}
              className={`px-6 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all shrink-0 cursor-pointer`}
            >
              Get Free Instant Quote
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 11: Regional Coverage Area
          Exact H2: Paint Correction Across Aberdeenshire
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              DOORSTEP RESTORATION RADIUS
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Paint Correction Across Aberdeenshire
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Our fully equipped mobile detailing workshop travels directly to your home or premises anywhere in Aberdeenshire.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Postcode checker */}
            <div className="lg:col-span-6 bg-[#F8FAFC] rounded-2xl border border-zinc-200 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-orange-600 mb-2">
                <MapPin className="w-4 h-4" />
                <span>Coverage Checker</span>
              </div>
              <div className="font-heading font-black text-xl text-zinc-950 uppercase tracking-tight mb-2">
                Check Paint Correction Availability In Your Area
              </div>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6">
                Enter your postcode or town to verify immediate coverage for our mobile machine polishing unit.
              </p>

              <form onSubmit={handleCoverageCheck} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-grow">
                    <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={postcodeQuery}
                      onChange={(e) => setPostcodeQuery(e.target.value)}
                      placeholder="e.g. AB21, Dyce, Inverurie..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className={`px-6 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} transition-all shrink-0 cursor-pointer`}
                  >
                    Check Area
                  </button>
                </div>
              </form>

              {coverageResult && (
                <div className="mt-4 p-4 rounded-xl border border-emerald-500/40 bg-emerald-50 text-emerald-900 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{coverageResult.message}</span>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-zinc-200 text-xs text-zinc-600">
                <div className="font-bold text-zinc-800 uppercase mb-2">Regularly Serviced Towns:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Aberdeen City', 'Inverurie', 'Westhill', 'Stonehaven', 'Banchory', 'Ellon', 'Peterhead', 'Alford', 'Dyce', 'Kemnay', 'Oldmeldrum', 'Cults'].map((town) => (
                    <span key={town} className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-[11px] text-zinc-700">
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 h-[380px] shadow-lg">
              <iframe
                title="Paint Correction Aberdeenshire Coverage Map"
                src="https://maps.google.com/maps?q=Aberdeenshire,%20Scotland&t=&z=9&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          CUSTOMER REVIEWS SECTION (Above FAQs)
          Exact H2: 50+ Five-Star Reviews From Local Customers
          ========================================================================= */}
      <ReviewsSection />

      {/* =========================================================================
          GET IN TOUCH FOR A CUSTOM VALET OR DETAIL (Lead Form)
          ========================================================================= */}
      <LeadFormSection />

      {/* =========================================================================
          SECTION 12: FAQs (Exact Same Font Style & Size as Home Page FaqSection)
          Exact H2: Paint Correction FAQs
          Exact H3s:
          • H3: What Is the Difference Between Paint Correction and Polishing?
          • H3: Can Paint Correction Remove Scratches?
          • H3: Can Paint Correction Remove Swirl Marks?
          • H3: How Many Stages of Paint Correction Does My Car Need?
          • H3: How Long Does Paint Correction Take?
          • H3: Is Paint Correction Safe for My Vehicle?
          • H3: Does Paint Correction Remove Clear Coat?
          • H3: Should I Apply Ceramic Coating After Paint Correction?
          • H3: How Should I Maintain Corrected Paintwork?
          ========================================================================= */}
      <section id="faqs" className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl tracking-tight uppercase leading-tight mb-4 text-white">
              Paint Correction FAQs
            </h2>
            <p className="text-xs sm:text-sm font-normal text-zinc-400 max-w-2xl mx-auto">
              Everything you need to know about machine polishing, swirl removal, clear-coat safety, and lasting results.
            </p>
          </div>

          {/* Accordion List - Same font style & size as Home Page FaqSection */}
          <div className="space-y-3 mb-12">

            {/* FAQ 1 */}
            <div
              className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                openFaqIndex === 0
                  ? 'border-zinc-700 bg-zinc-900/90'
                  : 'border-zinc-800/90 bg-[#12151b] hover:border-zinc-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(0)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
                aria-expanded={openFaqIndex === 0}
              >
                {/* EXACT H3 */}
                <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-white">
                  What Is the Difference Between Paint Correction and Polishing?
                </h3>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  openFaqIndex === 0
                    ? `${theme.textPrimary} bg-orange-950/50`
                    : 'text-zinc-400 bg-zinc-800'
                }`}>
                  {openFaqIndex === 0 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaqIndex === 0 && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-zinc-800 text-zinc-300 animate-in fade-in slide-in-from-top-1 duration-150">
                  <p>
                    Standard polishing is a lighter, single-stage process aimed at enhancing gloss and cleaning minor surface hazing. Paint correction is a surgical, multi-stage procedure utilizing specialized micro-abrasives to physically level clear coat defects, permanently eliminating up to 85-95%+ of swirl marks and scratches.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div
              className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                openFaqIndex === 1
                  ? 'border-zinc-700 bg-zinc-900/90'
                  : 'border-zinc-800/90 bg-[#12151b] hover:border-zinc-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(1)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
                aria-expanded={openFaqIndex === 1}
              >
                {/* EXACT H3 */}
                <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-white">
                  Can Paint Correction Remove Scratches?
                </h3>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  openFaqIndex === 1
                    ? `${theme.textPrimary} bg-orange-950/50`
                    : 'text-zinc-400 bg-zinc-800'
                }`}>
                  {openFaqIndex === 1 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaqIndex === 1 && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-zinc-800 text-zinc-300 animate-in fade-in slide-in-from-top-1 duration-150">
                  <p>
                    Yes, provided the scratch is contained within the transparent clear coat layer. A simple rule of thumb: if you run your fingernail gently across the scratch and it doesn't catch deeply, paint correction can completely eradicate or substantially diminish it. If it catches your nail or exposes primer/metal, touch-up paint is required.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div
              className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                openFaqIndex === 2
                  ? 'border-zinc-700 bg-zinc-900/90'
                  : 'border-zinc-800/90 bg-[#12151b] hover:border-zinc-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(2)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
                aria-expanded={openFaqIndex === 2}
              >
                {/* EXACT H3 */}
                <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-white">
                  Can Paint Correction Remove Swirl Marks?
                </h3>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  openFaqIndex === 2
                    ? `${theme.textPrimary} bg-orange-950/50`
                    : 'text-zinc-400 bg-zinc-800'
                }`}>
                  {openFaqIndex === 2 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaqIndex === 2 && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-zinc-800 text-zinc-300 animate-in fade-in slide-in-from-top-1 duration-150">
                  <p>
                    Yes, absolutely. Swirl marks are the primary reason vehicle owners book paint correction. Our dual-action machines and tailored cutting pads level the raised edges of swirl marks, eradicating circular spider-webbing under direct sunlight.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div
              className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                openFaqIndex === 3
                  ? 'border-zinc-700 bg-zinc-900/90'
                  : 'border-zinc-800/90 bg-[#12151b] hover:border-zinc-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(3)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
                aria-expanded={openFaqIndex === 3}
              >
                {/* EXACT H3 */}
                <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-white">
                  How Many Stages of Paint Correction Does My Car Need?
                </h3>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  openFaqIndex === 3
                    ? `${theme.textPrimary} bg-orange-950/50`
                    : 'text-zinc-400 bg-zinc-800'
                }`}>
                  {openFaqIndex === 3 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaqIndex === 3 && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-zinc-800 text-zinc-300 animate-in fade-in slide-in-from-top-1 duration-150">
                  <p>
                    This depends on your vehicle's paint condition and expectations. A single-stage correction is great for light swirling and brings back 65-75% clarity. A multi-stage correction (heavy compound followed by finishing polish) is required for moderate to severe swirls and yields 85-95%+ clarity.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div
              className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                openFaqIndex === 4
                  ? 'border-zinc-700 bg-zinc-900/90'
                  : 'border-zinc-800/90 bg-[#12151b] hover:border-zinc-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(4)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
                aria-expanded={openFaqIndex === 4}
              >
                {/* EXACT H3 */}
                <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-white">
                  How Long Does Paint Correction Take?
                </h3>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  openFaqIndex === 4
                    ? `${theme.textPrimary} bg-orange-950/50`
                    : 'text-zinc-400 bg-zinc-800'
                }`}>
                  {openFaqIndex === 4 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaqIndex === 4 && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-zinc-800 text-zinc-300 animate-in fade-in slide-in-from-top-1 duration-150">
                  <p>
                    A single-stage enhancement takes approximately 6 to 8 hours. A comprehensive multi-stage correction typically requires 1 to 2 full working days due to multiple compounding passes, thorough decontamination, and panel-by-panel jewelling.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div
              className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                openFaqIndex === 5
                  ? 'border-zinc-700 bg-zinc-900/90'
                  : 'border-zinc-800/90 bg-[#12151b] hover:border-zinc-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(5)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
                aria-expanded={openFaqIndex === 5}
              >
                {/* EXACT H3 */}
                <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-white">
                  Is Paint Correction Safe for My Vehicle?
                </h3>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  openFaqIndex === 5
                    ? `${theme.textPrimary} bg-orange-950/50`
                    : 'text-zinc-400 bg-zinc-800'
                }`}>
                  {openFaqIndex === 5 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaqIndex === 5 && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-zinc-800 text-zinc-300 animate-in fade-in slide-in-from-top-1 duration-150">
                  <p>
                    Yes, 100% safe when performed by an experienced professional. With 30 years of detailing experience, Hamish Moar measures paint depth digitally on every panel before touching a polishing machine to the car, ensuring ample clear coat remains untouched.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 7 */}
            <div
              className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                openFaqIndex === 6
                  ? 'border-zinc-700 bg-zinc-900/90'
                  : 'border-zinc-800/90 bg-[#12151b] hover:border-zinc-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(6)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
                aria-expanded={openFaqIndex === 6}
              >
                {/* EXACT H3 */}
                <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-white">
                  Does Paint Correction Remove Clear Coat?
                </h3>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  openFaqIndex === 6
                    ? `${theme.textPrimary} bg-orange-950/50`
                    : 'text-zinc-400 bg-zinc-800'
                }`}>
                  {openFaqIndex === 6 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaqIndex === 6 && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-zinc-800 text-zinc-300 animate-in fade-in slide-in-from-top-1 duration-150">
                  <p>
                    It removes a microscopic fraction of the upper clear coat—typically between 1 to 3 microns out of an automotive clear coat that is 40 to 60 microns thick. We preserve the vast majority of factory clear coat to ensure enduring UV protection.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 8 */}
            <div
              className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                openFaqIndex === 7
                  ? 'border-zinc-700 bg-zinc-900/90'
                  : 'border-zinc-800/90 bg-[#12151b] hover:border-zinc-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(7)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
                aria-expanded={openFaqIndex === 7}
              >
                {/* EXACT H3 */}
                <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-white">
                  Should I Apply Ceramic Coating After Paint Correction?
                </h3>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  openFaqIndex === 7
                    ? `${theme.textPrimary} bg-orange-950/50`
                    : 'text-zinc-400 bg-zinc-800'
                }`}>
                  {openFaqIndex === 7 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaqIndex === 7 && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-zinc-800 text-zinc-300 animate-in fade-in slide-in-from-top-1 duration-150">
                  <p>
                    We highly recommend it. Once your paint is corrected and free of defects, applying a 9H ceramic coating seals in that immaculate mirror finish, protects against future wash swirls, and makes ongoing maintenance washing quick and easy.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 9 */}
            <div
              className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                openFaqIndex === 8
                  ? 'border-zinc-700 bg-zinc-900/90'
                  : 'border-zinc-800/90 bg-[#12151b] hover:border-zinc-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(8)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
                aria-expanded={openFaqIndex === 8}
              >
                {/* EXACT H3 */}
                <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-white">
                  How Should I Maintain Corrected Paintwork?
                </h3>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  openFaqIndex === 8
                    ? `${theme.textPrimary} bg-orange-950/50`
                    : 'text-zinc-400 bg-zinc-800'
                }`}>
                  {openFaqIndex === 8 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaqIndex === 8 && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-zinc-800 text-zinc-300 animate-in fade-in slide-in-from-top-1 duration-150">
                  <p>
                    Always practice safe washing methods: use a pre-wash snow foam, the two-bucket contact wash method with grit guards, and plush microfibre drying towels. Never use automated roller brushes or drive-through car washes, which will quickly re-introduce swirl marks.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Bottom Help Helpline Banner matching Home Page FaqSection */}
          <div className="p-5 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#12151b] border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-zinc-800 text-orange-500">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  Have a question about your car's paintwork?
                </div>
                <div className="text-xs text-zinc-400">
                  Speak directly with master detailer Hamish Moar for honest, technical guidance.
                </div>
              </div>
            </div>
            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className={`px-5 py-2.5 rounded-lg text-xs font-heading font-black tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer ${theme.bgPrimary} ${theme.bgHover} text-white shrink-0`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {config.phone}</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 13: Booking CTA Banner (Light: #FFFFFF)
          Exact H2: Book Your Paint Correction Service
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-950 text-xs font-heading font-bold uppercase tracking-wider mb-6">
            <Calendar className="w-3.5 h-3.5 text-orange-600" />
            <span>EXPERT POLISHING AT YOUR DOORSTEP</span>
          </div>

          {/* EXACT H2 */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight mb-6 text-zinc-950">
            Book Your Paint Correction Service
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Transform your vehicle's paintwork from swirled and dull to deep, mirror-gloss perfection. Contact founder Hamish Moar today for a bespoke assessment or instant booking anywhere in Aberdeenshire.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal('Paint Correction Booking')}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl hover:shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer`}
            >
              <Calendar className="w-4 h-4" />
              <span>Request Free Quotation</span>
            </button>
            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-zinc-900 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>Call: {config.phone}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
