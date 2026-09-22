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
  Wind,
  Layers,
  Heart
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { ReviewsSection } from '../components/ReviewsSection';
import { LeadFormSection } from '../components/LeadFormSection';

export const InteriorDetailingServicePage: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  // Town & Postcode Checker State
  const [postcodeQuery, setPostcodeQuery] = useState('');
  const [coverageResult, setCoverageResult] = useState<{ checked: boolean; covered: boolean; message: string } | null>(null);

  // FAQ open/close state for the 8 requested Interior Detailing FAQs
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
        message: `Great news! ${cleanInput} is inside our standard mobile interior detailing service radius. Our heated extraction and steam sanitation van comes directly to your location.`
      });
    } else {
      setCoverageResult({
        checked: true,
        covered: true,
        message: `We cover all AB postcode districts across Aberdeenshire. Call us directly on ${config.phone} to schedule your mobile interior detail.`
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
            <span className="text-white font-medium">Interior Detailing</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <Truck className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>Mobile Van Dispatched Across {config.location}</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO SECTION: Dark (#0B0D10)
          Exact H1: Interior Car Detailing & Deep Cleaning in Aberdeenshire
          ========================================================================= */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-[#0B0D10] border-b border-zinc-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=2000&q=80"
            alt="Interior Car Detailing and Deep Cleaning in Aberdeenshire"
            className="w-full h-full object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10]/80 via-[#0B0D10]/95 to-[#0B0D10]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-heading font-bold uppercase tracking-wider text-orange-400 mb-6 shadow-xs">
            <Wind className="w-3.5 h-3.5" />
            <span>STEAM SANITATION & FABRIC EXTRACTION SPECIALISTS</span>
          </div>

          {/* EXACT H1 */}
          <h1 className="font-heading font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] sm:leading-[1.08] uppercase mb-5 drop-shadow-lg max-w-4xl mx-auto">
            Interior Car Detailing & Deep Cleaning in Aberdeenshire
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Restore your vehicle’s cabin to factory-clean freshness. Master detailer Hamish Moar provides professional hot-water fabric extraction, high-pressure steam sanitation, leather conditioning, pet hair removal, and odour neutralisation directly at your home or workplace across Aberdeenshire.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={() => openBookingModal('Interior Detailing')}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl hover:shadow-orange-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer`}
            >
              <Calendar className="w-4 h-4" />
              <span>Get Free Interior Quote</span>
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
              <Wind className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Steam Sanitised</div>
                <div className="text-[11px] text-zinc-400">99.9% Bacteria & Odour Neutralised</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Droplets className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Deep Extraction</div>
                <div className="text-[11px] text-zinc-400">Hot Water Fabric Rinse</div>
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
                <div className="text-[11px] text-zinc-400">At Your Home or Office</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 1: Introduction (Light: #FFFFFF)
          Exact H2: Professional Interior Car Detailing for a Cleaner, Fresher Vehicle
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-950 text-xs font-heading font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-orange-600" />
                <span>HYGIENIC CABIN RESTORATION</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-[1.15] mb-6">
                Professional Interior Car Detailing for a Cleaner, Fresher Vehicle
              </h2>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                Most drivers spend hours every week inside their vehicles. Over time, dust, allergens, food spills, beverage stains, pet hair, and mud accumulate deep within carpet fibers, seat cushions, air vents, and console crevices.
              </p>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                Quick forecourt vacuuming merely removes loose surface debris, leaving behind stubborn stains, biological bacteria, and ground-in grit that degrades interior fabrics and leather. Our professional mobile interior detailing goes far deeper, providing a surgical, restorative cleanse that sanitises every surface.
              </p>

              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-zinc-800 space-y-1.5">
                <div className="font-heading font-bold uppercase text-orange-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>The Moar Detail Interior Standard</span>
                </div>
                <p className="text-zinc-700 leading-relaxed">
                  We treat delicate automotive materials with custom care—using pH-neutral leather conditioners that leave an OEM non-greasy matte finish, dry-vapor steam to sterilize ventilation channels without chemical perfumes, and hot-water injection extraction that leaves upholstery fresh and dry within hours.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => openBookingModal('Interior Cleanse Assessment')}
                  className={`px-6 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all cursor-pointer`}
                >
                  Book Interior Detail
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80"
                  alt="Interior detailing dashboard and leather seat deep cleaning"
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 bg-zinc-950 text-white border-t border-zinc-800">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-heading font-bold uppercase text-orange-400">OEM Matte Finish</span>
                    <span className="text-zinc-400">Zero Sticky Residue</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Leather conditioned with natural oils and UV inhibitors for lasting softness and suppleness.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: What Does Our Service Include? (Dark: #0B0D10)
          Exact H2: What Does Our Interior Car Detailing Service Include?
          Exact H3s:
          • H3: Thorough Interior Vacuuming
          • H3: Carpet & Floor Mat Cleaning
          • H3: Upholstery & Fabric Seat Cleaning
          • H3: Leather Seat Cleaning & Conditioning
          • H3: Dashboard, Console & Trim Cleaning
          • H3: Door Panels & Interior Surface Cleaning
          • H3: Interior Glass & Mirror Cleaning
          • H3: Boot & Luggage Area Cleaning
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              COMPREHENSIVE CABIN CARE
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              What Does Our Interior Car Detailing Service Include?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Every component of your vehicle’s passenger compartment receives dedicated, material-specific cleaning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* H3 1 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Wind className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Thorough Interior Vacuuming
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  High-powered extraction and compressed-air vortex guns blast deep-seated crumbs, sand, and grit out from seat rails, tight seams, and under pedals.
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
                  Carpet & Floor Mat Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Textile floor mats and main footwell carpets are agitated with enzyme cleaners and hot-water injection extracted to pull out ground-in mud and salt.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Upholstery & Fabric Seat Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Dedicated spot-treatment on drink stains, grease marks, and water halos followed by steam sanitisation and fiber extraction.
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
                  Leather Seat Cleaning & Conditioning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Gentle pH-balanced leather foaming shampoo removes body oils and denim dye transfer, topped with nourishing balm that prevents drying and cracking.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Dashboard, Console & Trim Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Soft boar-hair detailing brushes cleanse air vents, gear selector bezels, infotainment screens, and buttons, finished with non-reflective anti-static protection.
                </p>
              </div>
            </div>

            {/* H3 6 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Door Panels & Interior Surface Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Door cards, armrests, cup holders, speaker grilles, and rubber storage pockets are scrubbed free of sticky residues, shoe scuffs, and grime.
                </p>
              </div>
            </div>

            {/* H3 7 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Interior Glass & Mirror Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Streak-free alcohol-based glass polishes remove oily haze, vaping/smoking films, and fingerprints from windscreens, rear screens, and vanity mirrors.
                </p>
              </div>
            </div>

            {/* H3 8 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Boot & Luggage Area Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Full luggage compartment vacuum, spare wheel well cleansing, parcel shelf brush-down, and heavy dog hair extraction from cargo linings.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Common Problems Solved (Light: #FFFFFF)
          Exact H2: Interior Deep Cleaning for Common Vehicle Problems
          Exact H3s:
          • H3: Dirt, Dust & Everyday Grime
          • H3: Food & Drink Stains
          • H3: Pet Hair & Animal Mess
          • H3: Mud & Ground-In Carpet Dirt
          • H3: Unpleasant Interior Odours
          • H3: Greasy or Heavily Soiled Interior Surfaces
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              TARGETED SOILING REMOVAL
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Interior Deep Cleaning for Common Vehicle Problems
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Specialized chemical and mechanical extraction designed to solve tough, real-world cabin headaches.
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
                  Dirt, Dust & Everyday Grime
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Eliminates the layer of road dust and skin flakes that creates dull film over instrument clusters, switches, and steering wheel textures.
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
                  Food & Drink Stains
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Coffee spills, sugary soft drinks, chocolate, and baby food stains dissolved and extracted with commercial hot-water soil extractors.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Pet Hair & Animal Mess
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Specialized rubber pet hair pumices and static brushes remove deeply interwoven dog hair from velour seats, carpets, and boot walls.
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
                  Mud & Ground-In Carpet Dirt
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Country lane slurry, clay soil, and salty winter slush pulverized and pulled from deep carpet pile, restoring rich color and texture.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Unpleasant Interior Odours
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Eliminates tobacco smoke, spilled dairy, damp dog smells, and air conditioning mildew at their biological source rather than masking with perfumes.
                </p>
              </div>
            </div>

            {/* H3 6 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Greasy or Heavily Soiled Interior Surfaces
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Strips away oily hand sanitizer residue, greasy silicone shine sprays from prior cheap valets, and restores OEM satin matte texture.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: Interior Detailing Process (Dark: #0B0D10)
          Exact H2: Our Interior Detailing Process
          Exact H3s:
          • H3: Interior Inspection & Condition Assessment
          • H3: Removal of Rubbish & Loose Debris
          • H3: Detailed Vacuuming
          • H3: Carpet & Upholstery Deep Cleaning
          • H3: Leather Cleaning & Conditioning
          • H3: Dashboard, Trim & Surface Cleaning
          • H3: Interior Glass Cleaning
          • H3: Final Inspection & Quality Check
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              METHODICAL EIGHT-STEP HYGIENE SYSTEM
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Our Interior Detailing Process
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Every interior detail is conducted step-by-step with precision tools and gentle, fabric-safe solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Step 1 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 01</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Interior Inspection & Condition Assessment
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We examine material types (leather, Alcantara, woven textiles), note delicate electronics, and assess persistent stains or odours.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 02</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Removal of Rubbish & Loose Debris
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  All loose debris, drink bottles, and floor clutter are safely cleared from footwells, cup holders, and door pockets.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 03</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Detailed Vacuuming
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Deep vacuum passes across seats, carpets, parcel shelves, air vent slots, and crevices utilizing rotating crevice tools.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 04</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Carpet & Upholstery Deep Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Foam agitation and hot-water injection extraction flush out stains and biological grime from fabric seats, mats, and floor carpeting.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 05</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Leather Cleaning & Conditioning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Leather hides are shampooed with soft natural bristles to lift ingrained body oil, followed by essential lipid conditioners.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 06</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Dashboard, Trim & Surface Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  All dashboard plastics, center consoles, air grilles, and steering controls are dusted and cleansed to a satin finish.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 07</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Interior Glass Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Windscreens, side windows, rearview mirrors, and sunroof panels are degreased for crystal-clear, reflection-free visibility.
                </p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 08</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-2">
                  Final Inspection & Quality Check
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  A comprehensive inspection with inspection lamps ensures no missed crevices, sticky patches, or streaks prior to client handover.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: Different Vehicle Types (Light: #FFFFFF)
          Exact H2: Interior Detailing for Different Vehicle Types
          Exact H3s:
          • H3: Cars & Family Vehicles
          • H3: SUVs & 4x4s
          • H3: Prestige & Luxury Vehicles
          • H3: Work & Commercial Vehicles
          • H3: Fleet Vehicles
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              ANY MAKE OR MODEL
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Interior Detailing for Different Vehicle Types
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Tailored interior solutions crafted for everyday family runabouts through to executive fleets.
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
                  Cars & Family Vehicles
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Kid-friendly sanitation targeting food spills, sweet stickiness in child car seats, and dirty footmarks on seat backs.
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
                  SUVs & 4x4s
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Deep carpet soil extraction and pet hair eradication on larger cabins, 7-seater vehicles, and boot spaces exposed to muddy country walks.
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
                  Prestige & Luxury Vehicles
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Bespoke care for delicate Nappa leather, hand-stitched leather dashboards, Alcantara headliners, open-pore timber veneers, and carbon accents.
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
                  Work & Commercial Vehicles
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Vans, pickups, and work 4x4s coated in construction dust, diesel grime, and coffee spills sanitized for a fresh, professional working cabin.
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
                  Fleet Vehicles
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Turnkey change-of-driver sanitation and end-of-lease vehicle decontamination for corporate fleets and executive chauffeur vehicles across Aberdeenshire.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: Benefits (Dark: #0B0D10)
          Exact H2: Benefits of Professional Interior Car Detailing
          Exact H3s:
          • H3: A Cleaner & More Comfortable Interior
          • H3: Improved Appearance of Seats, Carpets & Trim
          • H3: Removal of Built-Up Dirt & Contamination
          • H3: Fresher-Smelling Vehicle Interior
          • H3: Better Care of Interior Materials
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              WHY INVEST IN INTERIOR DETAILING
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Benefits of Professional Interior Car Detailing
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Experience the profound comfort, health, and financial benefits of a professionally restored vehicle cabin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  A Cleaner & More Comfortable Interior
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Driving in a clinically spotless, dust-free cabin dramatically reduces driving fatigue, allergic reactions, and enhances everyday journey enjoyment.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Improved Appearance of Seats, Carpets & Trim
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Restores natural matte textures, revives deep carpet hues, and eliminates unsightly tide marks and beverage rings permanently.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Wind className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Removal of Built-Up Dirt & Contamination
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Strips away abrasive microscopic grit embedded within fabric weaves and leather grain that would otherwise grind and tear seams over time.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Fresher-Smelling Vehicle Interior
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Neutralizes biological bacteria, sour milk residues, and tobacco chemicals at their root cause, leaving a clean, neutral aroma.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Better Care of Interior Materials
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Conditioning protects leather against UV dry-rot and hardening, while plastic trim protectants shield against sun fading, safeguarding higher vehicle resale value.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: Why Choose Moar Detail (Light: #FFFFFF)
          Exact H2: Why Choose Moar Detail for Interior Detailing?
          Exact H3s:
          • H3: 30 Years of Professional Detailing Experience
          • H3: Careful Attention to Interior Materials
          • H3: Professional Detailing Equipment & Products
          • H3: Thorough, Detail-Focused Cleaning Process
          • H3: Fully Mobile Interior Detailing Service
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              THE MASTER DETAILER STANDARD
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Why Choose Moar Detail for Interior Detailing?
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Experienced, insured, and dedicated to unmatched automotive craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  30 Years of Professional Detailing Experience
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Founder Hamish Moar has deep experience restoring automotive interiors from rare Connolly vintage leathers to modern synthetic Alcantara weaves.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Careful Attention to Interior Materials
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  We use dedicated soft brushes and zero caustic cleaners to ensure screens, delicate stitchings, and sensitive control dials remain completely undamaged.
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
                  Professional Detailing Equipment & Products
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  We invest in commercial Italian dry-vapor steam generators, heated soil extractors, and pH-neutral European detailing chemicals.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Thorough, Detail-Focused Cleaning Process
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  We clean where others cut corners: under seat rails, spare tyre cavities, sun visor vanity seams, air vents, and tight pedal boxes.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Fully Mobile Interior Detailing Service
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Our mobile detailing van is fully independent with pure water tanks and onboard electrical power, servicing your vehicle directly on your driveway or office car park.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: Heavily Soiled Vehicles (Dark: #0B0D10)
          Exact H2: Interior Detailing for Heavily Soiled Vehicles
          Exact H3s:
          • H3: Deep Cleaning for Neglected Interiors
          • H3: Stain Removal & Spot Treatment
          • H3: Pet Hair Removal
          • H3: Deep Carpet & Upholstery Cleaning
          • H3: Odour Treatment & Interior Freshening
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              RESTORATIVE RESCUE SERVICES
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Interior Detailing for Heavily Soiled Vehicles
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Specialist restorative treatments for neglected vehicles, farm 4x4s, work vans, and secondhand purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Deep Cleaning for Neglected Interiors
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Vehicles that haven't seen a thorough valet in years are disassembled where needed (removing floor mats, trunk liners) for ground-up restorative decontamination.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Stain Removal & Spot Treatment
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Enzymatic cleaners break down protein-based stains, grease spots, oil drips, and hard-water halos from fabric seats and door card inserts.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Wind className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Pet Hair Removal
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Specialist wire and rubber extraction tools mechanically dislodge barbed pet hairs deeply embedded in tight carpeting pile and boot liners.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Deep Carpet & Upholstery Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Heated pressurized extraction rinses away dirty water until completely clear, removing years of accumulated soil and road salt.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Odour Treatment & Interior Freshening
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Thermal fogging and enzyme treatments neutralize persistent bacteria from smoking, wet dogs, or damp HVAC systems without cheap artificial fragrance.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: Pricing (Light: #FFFFFF)
          Exact H2: Interior Car Detailing Prices in Aberdeenshire
          Exact H3s:
          • H3: What Affects Interior Detailing Cost?
          • H3: Vehicle Size & Interior Condition
          • H3: Level of Cleaning Required
          • H3: Stains, Pet Hair & Additional Treatment
          • H3: Additional Interior Protection Services
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              TRANSPARENT VALUE
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Interior Car Detailing Prices in Aberdeenshire
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Fair, straightforward pricing based on vehicle size and required cabin restoration level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  What Affects Interior Detailing Cost?
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Interior pricing is determined by the hours required to properly deep clean, extract, and condition all passenger surfaces.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Vehicle Size & Interior Condition
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  A 7-seater SUV or large family estate has more seats, carpets, and luggage surface area than a 2-seater sports coupe.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Wind className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Level of Cleaning Required
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Routine maintenance valeting requires less time than full steam sanitation and hot-water injection extraction on neglected fabrics.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Stains, Pet Hair & Additional Treatment
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Heavy pet hair entwinement, bio-hazard spills, or deep oil stains require specialized extraction tools and enzymatic treatments.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Additional Interior Protection Services
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Upgrade your clean with hydrophobic fabric ceramic coatings, carpet spill guards, and leather ceramic shields to repel future stains.
                </p>
              </div>
            </div>

          </div>

          {/* Pricing CTA Bar */}
          <div className="p-6 rounded-2xl bg-zinc-900 text-white border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-lg font-heading font-black uppercase text-white tracking-tight">
                Interior Detailing Packages From £85
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Get a transparent fixed-price quote based on your vehicle's make, model, and cabin condition.
              </div>
            </div>
            <button
              onClick={() => openBookingModal('Interior Detailing Quote')}
              className={`px-6 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all shrink-0 cursor-pointer`}
            >
              Get Free Instant Quote
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: Regional Coverage Area
          Exact H2: Mobile Interior Car Detailing Across Aberdeenshire
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              DOORSTEP SERVICE RADIUS
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Mobile Interior Car Detailing Across Aberdeenshire
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Our self-contained mobile detailing van brings steam sanitation and fabric extraction straight to your driveway.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Postcode checker */}
            <div className="lg:col-span-6 bg-zinc-900 rounded-2xl border border-zinc-800 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-orange-400 mb-2">
                <MapPin className="w-4 h-4" />
                <span>Coverage Checker</span>
              </div>
              <div className="font-heading font-black text-xl text-white uppercase tracking-tight mb-2">
                Check Interior Detailing Availability In Your Area
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                Enter your postcode or town to verify immediate coverage for our mobile interior detailing service.
              </p>

              <form onSubmit={handleCoverageCheck} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-grow">
                    <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={postcodeQuery}
                      onChange={(e) => setPostcodeQuery(e.target.value)}
                      placeholder="e.g. AB10, Westhill, Inverurie..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-800/90 border border-zinc-700 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition-colors"
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
                <div className="mt-4 p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{coverageResult.message}</span>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-zinc-800 text-xs text-zinc-400">
                <div className="font-bold text-zinc-200 uppercase mb-2">Regularly Serviced Towns:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Aberdeen City', 'Inverurie', 'Westhill', 'Stonehaven', 'Banchory', 'Ellon', 'Peterhead', 'Alford', 'Dyce', 'Kemnay', 'Oldmeldrum', 'Cults'].map((town) => (
                    <span key={town} className="px-2.5 py-1 rounded-md bg-zinc-800/70 border border-zinc-700/60 text-[11px] text-zinc-300">
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 h-[380px] shadow-lg">
              <iframe
                title="Interior Detailing Aberdeenshire Coverage Map"
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
          SECTION 11: FAQs (Exact Same Font Style & Size as Home Page FaqSection)
          Exact H2: Interior Car Detailing FAQs
          Exact H3s:
          • H3: What Is Included in Interior Car Detailing?
          • H3: How Long Does Interior Detailing Take?
          • H3: Can You Remove Stains From Car Seats and Carpets?
          • H3: Can You Remove Pet Hair From a Car Interior?
          • H3: Can Interior Detailing Remove Bad Odours?
          • H3: Can You Clean Leather Car Seats?
          • H3: How Often Should I Have My Car Interior Professionally Cleaned?
          • H3: Can You Detail My Car at Home or Work?
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
              Interior Car Detailing FAQs
            </h2>
            <p className="text-xs sm:text-sm font-normal text-zinc-400 max-w-2xl mx-auto">
              Everything you need to know about our interior deep cleaning, stain extraction, leather care, and mobile visits.
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
                  What Is Included in Interior Car Detailing?
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
                    Our interior detailing includes deep vacuuming of all carpets, boot, and seats; hot-water injection extraction on fabrics; gentle shampooing and conditioning of leather hides; steam sanitisation of ventilation channels and cup holders; detailed dusting of dashboard and consoles; and streak-free interior glass polishing.
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
                  How Long Does Interior Detailing Take?
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
                    A comprehensive interior detail typically takes between 2.5 to 4 hours depending on vehicle size, cabin configuration, and initial level of staining or pet hair present.
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
                  Can You Remove Stains From Car Seats and Carpets?
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
                    Yes. We utilize commercial-grade hot water soil extraction machines paired with specialized enzyme stain lifters that break down and suck out stubborn coffee spills, food residues, water rings, and mud. We successfully eliminate over 90% of vehicle stains.
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
                  Can You Remove Pet Hair From a Car Interior?
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
                    Yes. We have dedicated pet hair removal tools, including specialized rubber pumices and static friction scrapers that safely pull deeply embedded dog and cat hairs from velour carpeting and luggage liners where regular vacuums fail.
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
                  Can Interior Detailing Remove Bad Odours?
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
                    Yes. We do not use overpowering air fresheners that merely mask smells. We treat the bacterial source of the odour through deep extraction, dry steam sanitisation, and antibacterial fogging to permanently eliminate smoke, pet, and damp smells.
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
                  Can You Clean Leather Car Seats?
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
                    Yes, with master-level care. We use pH-neutral leather shampoos and soft horsehair brushes to lift ingrained oils and denim dye transfer safely. We follow with a non-greasy conditioning treatment that restores the factory matte sheen and suppleness.
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
                  How Often Should I Have My Car Interior Professionally Cleaned?
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
                    For regular commuters, family SUVs with children, or pet owners, we recommend a thorough interior detail every 6 months (ideally before winter and after spring). For lower mileage vehicles, an annual deep clean keeps materials supple and pristine.
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
                  Can You Detail My Car at Home or Work?
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
                    Yes! That is the core of our business. Our customized mobile detailing van brings its own electrical power generator, hot water extraction units, and commercial steam equipment directly to your driveway, private parking space, or office car park.
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
                  Have a question about your car interior?
                </div>
                <div className="text-xs text-zinc-400">
                  Speak directly with master detailer Hamish Moar for advice on stains or leather care.
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
          SECTION 12: Booking CTA Banner (Light: #FFFFFF)
          Exact H2: Book Your Interior Car Detailing Service
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-950 text-xs font-heading font-bold uppercase tracking-wider mb-6">
            <Calendar className="w-3.5 h-3.5 text-orange-600" />
            <span>DISPATCH TO YOUR DOORSTEP</span>
          </div>

          {/* EXACT H2 */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight mb-6 text-zinc-950">
            Book Your Interior Car Detailing Service
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Enjoy that immaculate, showroom-fresh interior feeling again. Contact founder Hamish Moar today for a bespoke quotation or instant mobile booking across Aberdeenshire.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal('Interior Detailing Booking')}
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
