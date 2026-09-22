import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Phone, 
  ShieldCheck, 
  Droplets, 
  CheckCircle2, 
  MapPin, 
  Truck, 
  Car, 
  Wrench, 
  Zap, 
  Award,
  ChevronRight,
  Search,
  Calendar,
  Plus,
  Minus,
  HelpCircle,
  Wind,
  Layers,
  Sun
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { ReviewsSection } from '../components/ReviewsSection';
import { LeadFormSection } from '../components/LeadFormSection';

export const ExteriorDetailingServicePage: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  // Town & Postcode Checker State
  const [postcodeQuery, setPostcodeQuery] = useState('');
  const [coverageResult, setCoverageResult] = useState<{ checked: boolean; covered: boolean; message: string } | null>(null);

  // FAQ open/close state for the 8 requested Exterior Detailing FAQs
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
        message: `Great news! ${cleanInput} is inside our standard mobile exterior detailing service radius. Our equipped detailing van brings filtered spot-free water and power directly to your driveway.`
      });
    } else {
      setCoverageResult({
        checked: true,
        covered: true,
        message: `We cover all AB postcode districts across Aberdeenshire. Call us directly on ${config.phone} to schedule your mobile exterior detail.`
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
            <span className="text-white font-medium">Exterior Detailing</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <Truck className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>Mobile Van Dispatched Across {config.location}</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO SECTION: Dark (#0B0D10)
          Exact H1: Exterior Car Detailing & Paint Protection in Aberdeenshire
          ========================================================================= */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-[#0B0D10] border-b border-zinc-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=2000&q=80"
            alt="Exterior Car Detailing and Paint Protection in Aberdeenshire"
            className="w-full h-full object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10]/80 via-[#0B0D10]/95 to-[#0B0D10]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-heading font-bold uppercase tracking-wider text-orange-400 mb-6 shadow-xs">
            <Droplets className="w-3.5 h-3.5" />
            <span>SWIRL-FREE CONTACT WASHING & DECONTAMINATION</span>
          </div>

          {/* EXACT H1 */}
          <h1 className="font-heading font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] sm:leading-[1.08] uppercase mb-5 drop-shadow-lg max-w-4xl mx-auto">
            Exterior Car Detailing & Paint Protection in Aberdeenshire
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Treat your vehicle to master exterior detailing that eliminates harsh Scottish road film, industrial fallout, and embedded road tar. 30-year veteran Hamish Moar delivers safe two-bucket contact washing, multi-stage chemical decontamination, clay bar smoothing, and durable synthetic sealant protection straight to your doorstep.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={() => openBookingModal('Exterior Detailing')}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl hover:shadow-orange-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer`}
            >
              <Calendar className="w-4 h-4" />
              <span>Get Free Exterior Quote</span>
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
              <Droplets className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Pure Water Wash</div>
                <div className="text-[11px] text-zinc-400">Zero Mineral Water Spots</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Safe Hand Wash</div>
                <div className="text-[11px] text-zinc-400">Two-Bucket Scratch-Free</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">30 Yrs Experience</div>
                <div className="text-[11px] text-zinc-400">Master Automotive Detailer</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Mobile Unit</div>
                <div className="text-[11px] text-zinc-400">Onboard Power & Tank</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 1: Introduction (Light: #FFFFFF)
          Exact H2: Professional Mobile Exterior Detailing at Your Location
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-950 text-xs font-heading font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>FLAWLESS EXTERIOR RESTORATION</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-[1.15] mb-6">
                Professional Mobile Exterior Detailing at Your Location
              </h2>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                Automated roadside car washes and fast-paced hand car washes are notorious for inflicting spider-web swirl scratches, scouring delicate clear coats with gritty brushes, and leaving behind harsh traffic film that dulls your car's reflection.
              </p>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                Our mobile exterior car detailing service is entirely different. We arrive at your home or workplace equipped with specialized detailing tools, ultra-dense pH-neutral snow foams, filtered deionized water, and ultra-soft lambswool wash mitts that safely lift and encapsulate grime without touching your paint dry.
              </p>

              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-zinc-800 space-y-1.5">
                <div className="font-heading font-bold uppercase text-orange-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>The Moar Detail Exterior Difference</span>
                </div>
                <p className="text-zinc-700 leading-relaxed">
                  We don't just wash away surface dust—we decontaminate iron filings, dissolve road bitumen, deep clean wheel barrels behind brake calipers, and seal the vehicle with durable hydrophobic paint sealants that make future maintenance effortless.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => openBookingModal('Exterior Detail Booking')}
                  className={`px-6 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all cursor-pointer`}
                >
                  Book Exterior Detail
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=80"
                  alt="High gloss vehicle exterior detailing and snow foam wash"
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 bg-zinc-950 text-white border-t border-zinc-800">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-heading font-bold uppercase text-orange-400">Two-Bucket Method</span>
                    <span className="text-zinc-400">Scratch-Free Safe Wash</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Grit guards, twin buckets, and plush microfiber dry towels prevent paint marring and swirls.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: What Does Our Service Include? (Dark: #0B0D10)
          Exact H2: What Does Our Exterior Car Detailing Service Include?
          Exact H3s:
          • H3: Pre-Wash & Snow Foam Treatment
          • H3: Safe Two-Bucket Hand Wash
          • H3: Wheel, Tyre & Wheel Arch Deep Cleaning
          • H3: Paint Decontamination (Iron & Tar Removal)
          • H3: Clay Bar Treatment for Smooth Paintwork
          • H3: Glass Cleaning & Exterior Trim Dressing
          • H3: Paint Sealant or Protective Wax Application
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              FULL EXTERIOR BREAKDOWN
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              What Does Our Exterior Car Detailing Service Include?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Every exterior detail is an intensive multi-stage protocol designed to deep clean and safeguard every external element.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Wind className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Pre-Wash & Snow Foam Treatment
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  A dense blanket of pH-neutral snow foam dwells on vehicle paintwork to encapsulate loose grit, traffic film, and mud before any sponge or mitt touches the body.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Safe Two-Bucket Hand Wash
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Washed panel-by-panel using twin buckets with sediment grit guards, luxurious high-lubricity shampoo, and ultra-soft microfiber mitts to eliminate swirl marks.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Wheel, Tyre & Wheel Arch Deep Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Acid-free wheel cleansers, non-scratch barrel brushes, and high-pressure wheel arch flushes remove corrosive hot brake dust, road tar, and caked clay mud.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Paint Decontamination (Iron & Tar Removal)
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Targeted chemical fallout removers dissolve sintered metallic brake dust (iron bleed) and organic solvent removers safely melt sticky asphalt splatter.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Clay Bar Treatment for Smooth Paintwork
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  A fine detailing clay bar glides across clear coat with dedicated slick lubricant, sheering off remaining microscopic tree sap, industrial spray, and grit.
                </p>
              </div>
            </div>

            {/* H3 6 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Glass Cleaning & Exterior Trim Dressing
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Exterior windows are polished crystal-clear and hydrophobic sealed, while faded plastic trim, grilles, and rubber door seals are rehydrated and UV protected.
                </p>
              </div>
            </div>

            {/* H3 7 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all md:col-span-2 lg:col-span-3">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Paint Sealant or Protective Wax Application
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Finished with a premium fluoropolymer sealant or high-carnauba protective wax that creates deep optical gloss, intense water beading, and shields against acid rain and UV rays for months.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Exterior Detailing for Cleaner, Glossy, Protected (Light: #FFFFFF)
          Exact H2: Exterior Detailing for a Clean, Glossy, Protected Vehicle
          Exact H3s:
          • H3: Remove Road Dirt, Salt & Grime
          • H3: Remove Embedded Paint Contaminants
          • H3: Restore Paintwork Gloss & Clarity
          • H3: Protect Paintwork From Everyday Weather
          • H3: Make Washing Your Car Easier
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              LONG-TERM PROTECTION & SHINE
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Exterior Detailing for a Clean, Glossy, Protected Vehicle
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Preserve your vehicle's structural clear coat and maintain remarkable curb appeal in any Aberdeenshire climate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Wind className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Remove Road Dirt, Salt & Grime
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Neutralizes corrosive winter road salt, agricultural soil sprays, and oily diesel fumes that slowly corrode exposed paintwork and subframe components.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Remove Embedded Paint Contaminants
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Extracts microscopic iron filings from train lines, quarry dust, and roadway brake dust that rust into paint pores and cause rough sandpaper sensations.
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
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Restore Paintwork Gloss & Clarity
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Stripping traffic film and oxidised clear coat reveals rich, saturated paint colour, deep reflections, and pronounced metallic flake pop.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Sun className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Protect Paintwork From Everyday Weather
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  High-grade synthetic sealants establish a resilient barrier against acidic bird lime etchings, tree sap stains, and harsh solar UV oxidation.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Make Washing Your Car Easier
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  The super-slick hydrophobic surface prevents road dirt from adhering strongly, allowing subsequent washes to rinse clean in half the time.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: Our Exterior Detailing Process (Dark: #0B0D10)
          Exact H2: Our Exterior Detailing Process
          Exact H3s:
          • H3: Vehicle Inspection & Paint Assessment
          • H3: Wheel & Arch Cleaning
          • H3: Pre-Wash & Snow Foam Application
          • H3: Safe Contact Hand Wash
          • H3: Chemical & Mechanical Paint Decontamination
          • H3: Safe Drying With Plush Microfibre Towels
          • H3: Paint Sealant, Wax or Protective Coating
          • H3: Exterior Glass, Trim & Tyre Finishing
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              PRECISION EIGHT-STAGE WORKFLOW
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Our Exterior Detailing Process
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Every vehicle undergoes a disciplined, scratch-free multi-stage process from initial decontamination to final tyre dressing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Step 1 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 01</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Vehicle Inspection & Paint Assessment
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Detailed inspection under daylight inspection lamps to record existing stone chips, clear coat scratch severity, and delicate trim.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 02</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Wheel & Arch Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Dedicated pH-neutral rim cleaners, soft barrel brushes, and high-pressure arch flushes dissolve brake dust prior to washing body panels.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 03</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Pre-Wash & Snow Foam Application
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Thick active foam dissolves road films, bugs, and traffic oils without any physical contact, safely rinsing grit down the drain.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 04</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Safe Contact Hand Wash
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Two-bucket contact wash with grit guards, ultra-slick lubricated car shampoo, and high-pile microfiber mitts cleaned constantly.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 05</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Chemical & Mechanical Paint Decontamination
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Iron-dissolving chemical spray, tar solvent, and fine clay bar treatment physically extract bonded particles from clear coat.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 06</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Safe Drying With Plush Microfibre Towels
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Touchless warm filtered air blower in mirrors, badges, and grilles followed by ultra-absorbent 1200 GSM twisted-loop microfiber towels.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 07</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Paint Sealant, Wax or Protective Coating
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Application of ceramic spray sealant or carnauba wax to lock in gloss, generate tight water beads, and provide weather protection.
                </p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 08</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Exterior Glass, Trim & Tyre Finishing
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Exhaust tips polished, external glass cleansed streak-free, unpainted plastics conditioned, and tyres dressed with a satin non-sling gel.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: Different Vehicle Types (Light: #FFFFFF)
          Exact H2: Exterior Detailing for Different Types of Vehicles
          Exact H3s:
          • H3: Exterior Detailing for Daily-Driven Cars
          • H3: Exterior Detailing for SUVs & 4x4s
          • H3: Exterior Detailing for Sports & Prestige Cars
          • H3: Exterior Detailing for Commercial Vehicles
          • H3: Exterior Detailing for New Vehicles
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              TAILORED VEHICLE CARE
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Exterior Detailing for Different Types of Vehicles
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Specialized exterior techniques adapted to the paint characteristics and demands of each vehicle category.
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
                  Exterior Detailing for Daily-Driven Cars
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Removes daily commute film, industrial railway dust, and road salts, applying slick protective sealants for hassle-free weekly washes.
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
                  Exterior Detailing for SUVs & 4x4s
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Deep arch washing, chassis mud clearance, roof cleaning, and textured plastic fender reconditioning on Range Rovers, Land Cruisers, and family crossovers.
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
                  Exterior Detailing for Sports & Prestige Cars
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Ultra-delicate paint handling for soft German clear coats (Porsche, BMW) and Italian supercars, with ceramic wheel protection and gloss enhancement.
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
                  Exterior Detailing for Commercial Vehicles
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Heavy traffic film removal, vinyl graphic preservation, and durable commercial paint sealants for company vans and executive transporter fleets.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Exterior Detailing for New Vehicles
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Dealership pre-delivery preparation is frequently rushed. We remove transit glue, rail fallout, and apply superior paint protection from day one.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: Why Choose Moar Detail (Dark: #0B0D10)
          Exact H2: Why Choose Moar Detail for Exterior Detailing?
          Exact H3s:
          • H3: 30 Years of Professional Detailing Experience
          • H3: Safe Washing Techniques That Protect Paintwork
          • H3: Professional Detailing Products & Equipment
          • H3: Complete Paint Decontamination Process
          • H3: Fully Mobile Exterior Detailing Service
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              CRAFTSMANSHIP YOU CAN TRUST
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Why Choose Moar Detail for Exterior Detailing?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Three decades of hands-on automotive expertise backing every wash, decontamination, and sealant application.
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
                  Founder Hamish Moar has perfected automotive preparation across 30 years, understanding the exact quirks and nuances of different manufacturer paint systems.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Safe Washing Techniques That Protect Paintwork
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Zero sponges, zero abrasive brushes, and zero dirty recycling tanks. We use filtered spot-free water, fresh microfiber mitts, and twin-bucket filtration.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Professional Detailing Products & Equipment
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We use only industry-leading professional car care chemicals, Japanese clay bars, and German synthetic sealants for unmatched durability and finish.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Complete Paint Decontamination Process
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Both chemical dissolution of brake dust and mechanical clay extraction of road fallout ensure your paint is glass-smooth before protection is applied.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Fully Mobile Exterior Detailing Service
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Our custom detailing van arrives at your home, office, or workshop equipped with independent generator power and pure water tanks for complete autonomy.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: Packages & Additional Options (Light: #FFFFFF)
          Exact H2: Exterior Detailing Packages & Additional Options
          Exact H3s:
          • H3: Standard Exterior Detail
          • H3: Decontamination & Gloss Enhancement
          • H3: Machine Polishing & Paint Correction
          • H3: Ceramic Coating Upgrade
          • H3: Engine Bay Detailing
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              CUSTOMISABLE FINISHES
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Exterior Detailing Packages & Additional Options
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Select from our foundational exterior package through to advanced paint enhancement and engine bay detailing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Standard Exterior Detail
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Pre-wash snow foam, two-bucket hand wash, wheel face and barrel cleaning, door shuts wiped, plush towel dry, and spray sealant application.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Decontamination & Gloss Enhancement
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Full iron fallout removal, tar dissolving, clay bar treatment, and machine gloss refining to maximize clear coat shine and paint smoothness.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Machine Polishing & Paint Correction
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Multi-stage rotary and dual-action machine polishing that safely removes 70% to 90%+ of swirl marks, light scratches, and haze.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Ceramic Coating Upgrade
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Upgrade your exterior sealant to a 3-year or 5-year 9H ceramic coating for rock-hard chemical resistance and extreme hydrophobic self-cleaning.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Engine Bay Detailing
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Safe dry-steam cleaning and degreasing of engine bay plastics, intake manifolds, and painted inner wings, dressed in factory-satin heat-resistant dressing.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: Pricing (Dark: #0B0D10)
          Exact H2: Exterior Car Detailing Prices in Aberdeenshire
          Exact H3s:
          • H3: What Affects Exterior Detailing Cost?
          • H3: Vehicle Size & Exterior Condition
          • H3: Level of Cleaning & Decontamination Required
          • H3: Paint Protection Options Chosen
          • H3: Additional Exterior Services
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              HONEST & CLEAR PRICING
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Exterior Car Detailing Prices in Aberdeenshire
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Fixed, upfront quotations tailored to vehicle dimensions and required paint preparation depth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  What Affects Exterior Detailing Cost?
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Costs reflect labor hours, the complexity of contamination removal, and whether machine polishing or ceramic coatings are selected.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Vehicle Size & Exterior Condition
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Larger surface areas on SUVs, 4x4 pickups, and commercial vans take significantly more time to wash, clay, and polish than a hatchback.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Level of Cleaning & Decontamination Required
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Vehicles with dense industrial fallout, baked-on tar spots, or tree sap crust require multiple chemical soak and clay passes.
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
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Paint Protection Options Chosen
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  From economical 6-month spray sealants and natural paste waxes to multi-year professional ceramic coatings.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Additional Exterior Services
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Add-on services such as wheel ceramic coating, exterior glass rain repellency, headlight clarity restoration, and engine bay cleaning.
                </p>
              </div>
            </div>

          </div>

          {/* Pricing CTA Banner */}
          <div className="p-6 rounded-2xl bg-zinc-900 text-white border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-lg font-heading font-black uppercase text-white tracking-tight">
                Exterior Detailing From £75
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Transparent quotes tailored to your exact car size and paint requirements.
              </div>
            </div>
            <button
              onClick={() => openBookingModal('Exterior Detailing Quote')}
              className={`px-6 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all shrink-0 cursor-pointer`}
            >
              Get Free Instant Quote
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: Regional Coverage Area
          Exact H2: Mobile Exterior Car Detailing Across Aberdeenshire
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              DOORSTEP SERVICE RADIUS
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Mobile Exterior Car Detailing Across Aberdeenshire
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              We travel directly to your home, office, or workshop with onboard power and spot-free water tanks.
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
                Check Exterior Detailing Availability In Your Area
              </div>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6">
                Enter your postcode or town to verify immediate coverage for our mobile exterior detailing service.
              </p>

              <form onSubmit={handleCoverageCheck} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-grow">
                    <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={postcodeQuery}
                      onChange={(e) => setPostcodeQuery(e.target.value)}
                      placeholder="e.g. AB10, Westhill, Inverurie..."
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
                <div className="mt-4 p-4 rounded-xl border border-emerald-500/40 bg-emerald-50 text-emerald-800 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{coverageResult.message}</span>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-zinc-200 text-xs text-zinc-500">
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
                title="Exterior Detailing Aberdeenshire Coverage Map"
                src="https://maps.google.com/maps?q=Aberdeenshire,%20Scotland&t=&z=9&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105"
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
          SECTION 10: FAQs (Exact Same Font Style & Size as Home Page FaqSection)
          Exact H2: Exterior Car Detailing FAQs
          Exact H3s:
          • H3: What Is Included in Exterior Car Detailing?
          • H3: How Long Does Exterior Detailing Take?
          • H3: What Is Paint Decontamination?
          • H3: Will Exterior Detailing Remove Scratches?
          • H3: What Type of Paint Protection Do You Apply?
          • H3: Can You Detail My Car at My Home or Workplace?
          • H3: How Often Should I Have Exterior Detailing Done?
          • H3: Do You Need Access to Water and Electricity?
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
              Exterior Car Detailing FAQs
            </h2>
            <p className="text-xs sm:text-sm font-normal text-zinc-400 max-w-2xl mx-auto">
              Clear answers to common questions regarding our two-bucket wash methods, paint decontamination, sealants, and mobile visits.
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
                  What Is Included in Exterior Car Detailing?
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
                    Our exterior detailing service includes snow foam pre-wash, safe two-bucket contact wash, wheel and arch deep cleaning, iron fallout and tar chemical decontamination, clay bar mechanical decontamination, safe microfibre towel drying, application of synthetic sealant or wax, and exterior trim and tyre dressing.
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
                  How Long Does Exterior Detailing Take?
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
                    A standard comprehensive exterior detail generally takes between 2 to 3.5 hours depending on vehicle dimensions, wheel complexity, and the degree of embedded tar or fallout requiring decontamination.
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
                  What Is Paint Decontamination?
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
                    Paint decontamination is the process of removing contaminants that normal car washing cannot budge. Chemical fallout removers dissolve airborne iron particles (from brakes and rail tracks) that turn into rust specs, while clay bar treatment physically lifts bonded road tar, tree sap, and industrial fallout, leaving paint as smooth as glass.
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
                  Will Exterior Detailing Remove Scratches?
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
                    A standard exterior detail cleans, decontaminates, and protects the paint, which significantly improves gloss and disguises faint marring. However, true scratch and swirl mark removal requires machine polishing (Paint Correction), which can be added to your exterior detail package.
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
                  What Type of Paint Protection Do You Apply?
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
                    Our baseline exterior detail includes a durable synthetic fluoropolymer spray sealant or premium carnauba wax offering 3 to 6 months of intense hydrophobic protection. Clients can also upgrade to 3-year or 5-year 9H Ceramic Coatings for maximum longevity.
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
                  Can You Detail My Car at My Home or Workplace?
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
                    Yes! Our mobile detailing van is fully equipped to come straight to your home driveway, workplace car park, or private property across Aberdeenshire, allowing you to carry on with your day uninterrupted.
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
                  How Often Should I Have Exterior Detailing Done?
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
                    We recommend a comprehensive decontamination and sealant detail twice per year—once before winter to shield against salt and gritting slurry, and once in spring to remove built-up contamination and refresh UV protection for the summer months.
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
                  Do You Need Access to Water and Electricity?
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
                    Our customized mobile detailing van carries its own pure water tanks and whisper-quiet generator, meaning we can operate completely self-sufficiently. If an outdoor tap or standard plug socket is accessible, we can also plug in directly.
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
                  Have a question about your car exterior?
                </div>
                <div className="text-xs text-zinc-400">
                  Speak directly with master detailer Hamish Moar for advice on decontamination or paint protection.
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
          SECTION 11: Booking CTA Banner (Light: #FFFFFF)
          Exact H2: Book Your Exterior Car Detailing Service
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-950 text-xs font-heading font-bold uppercase tracking-wider mb-6">
            <Calendar className="w-3.5 h-3.5 text-orange-600" />
            <span>DISPATCH TO YOUR DOORSTEP</span>
          </div>

          {/* EXACT H2 */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight mb-6 text-zinc-950">
            Book Your Exterior Car Detailing Service
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Give your vehicle deep gloss, glass-smooth paintwork, and durable weather protection. Contact founder Hamish Moar today for a free bespoke quote or instant mobile booking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal('Exterior Detailing Booking')}
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
