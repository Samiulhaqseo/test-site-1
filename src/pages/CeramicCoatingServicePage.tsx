import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Phone, 
  Star, 
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
  Sun,
  Flame,
  Layers
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { ReviewsSection } from '../components/ReviewsSection';
import { LeadFormSection } from '../components/LeadFormSection';

export const CeramicCoatingServicePage: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  // Town & Postcode Checker State
  const [postcodeQuery, setPostcodeQuery] = useState('');
  const [coverageResult, setCoverageResult] = useState<{ checked: boolean; covered: boolean; message: string } | null>(null);

  // FAQ open/close state for the 8 requested Ceramic Coating FAQs
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
        message: `Great news! ${cleanInput} is inside our standard mobile detailing operating area. Full ceramic coating packages with enclosed weather setups are available at your location.`
      });
    } else {
      setCoverageResult({
        checked: true,
        covered: true,
        message: `We cover all AB postcode districts across Aberdeenshire. Call us directly on ${config.phone} to schedule your mobile ceramic coating service.`
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
            <span className="text-white font-medium">Ceramic Coating</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <Truck className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>Mobile Van Dispatched Across {config.location}</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO SECTION: Dark (#0B0D10)
          Exact H1: Ceramic Coating & Paint Protection in Aberdeenshire
          ========================================================================= */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-[#0B0D10] border-b border-zinc-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80"
            alt="Ceramic Coating and Paint Protection in Aberdeenshire"
            className="w-full h-full object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10]/80 via-[#0B0D10]/95 to-[#0B0D10]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-heading font-bold uppercase tracking-wider text-orange-400 mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CERTIFIED 9H SIO2 CERAMIC QUARTZ SPECIALISTS</span>
          </div>

          {/* EXACT H1 */}
          <h1 className="font-heading font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] sm:leading-[1.08] uppercase mb-5 drop-shadow-lg max-w-4xl mx-auto">
            Ceramic Coating & Paint Protection in Aberdeenshire
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Preserve your vehicle’s exterior with state-of-the-art 9H SiO2 ceramic quartz protection. Applied directly at your home or workplace across Aberdeen and Aberdeenshire by master detailer Hamish Moar, delivering extreme water beading, chemical resistance, and rich glass-like clarity.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={() => openBookingModal('Ceramic Coating & Paint Protection')}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl hover:shadow-orange-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer`}
            >
              <Calendar className="w-4 h-4" />
              <span>Get Free Coating Quote</span>
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
              <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">9H Hardness</div>
                <div className="text-[11px] text-zinc-400">SiO2 Quartz Glass Barrier</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Droplets className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Self-Cleaning</div>
                <div className="text-[11px] text-zinc-400">Extreme Hydrophobic Beading</div>
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
                <div className="text-xs font-bold text-white uppercase">Mobile Application</div>
                <div className="text-[11px] text-zinc-400">At Your Driveway or Premise</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 1: Introduction (Light: #FFFFFF)
          Exact H2: Professional Ceramic Coating for Long-Lasting Paint Protection
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-950 text-xs font-heading font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                <span>UNCOMPROMISING SURFACE DEFENSE</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-[1.15] mb-6">
                Professional Ceramic Coating for Long-Lasting Paint Protection
              </h2>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                Aberdeenshire roads pose severe environmental threats to automotive clear coats. Harsh winter road salts, gritty agricultural traffic film, coastal sea spray, acidic bird droppings, and industrial fallout rapidly degrade unprotected automotive paint.
              </p>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                Traditional carnauba waxes and synthetic polymer sealants wash away in Scottish rainy weather within weeks. By contrast, our professional ceramic coating chemically fuses with your clear coat on a molecular level, creating a sacrificial, semi-permanent nano-crystalline glass barrier that endures for years.
              </p>

              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-zinc-800 space-y-1.5">
                <div className="font-heading font-bold uppercase text-orange-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>The Moar Detail Ceramic Standard</span>
                </div>
                <p className="text-zinc-700 leading-relaxed">
                  We never apply coatings over untreated or swirled paintwork. Every ceramic installation begins with multi-stage chemical decontamination and machine polishing to reveal an unblemished, high-gloss surface that allows maximum chemical cross-linking.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => openBookingModal('Ceramic Coating Assessment')}
                  className={`px-6 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all cursor-pointer`}
                >
                  Book Paint Assessment
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=80"
                  alt="Ceramic coating paint application inspection"
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 bg-zinc-950 text-white border-t border-zinc-800">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-heading font-bold uppercase text-orange-400">Chemical Bond</span>
                    <span className="text-zinc-400">9H Hardness Rating</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Permanent covalent cross-linking impervious to detergents, road salts, and UV degradation.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: What Is Ceramic Coating? (Dark: #0B0D10)
          Exact H2: What Is Ceramic Coating?
          Exact H3s:
          • H3: How Ceramic Coating Bonds to Vehicle Paint
          • H3: Ceramic Coating vs Traditional Wax & Sealants
          • H3: How Ceramic Coating Protects Your Vehicle's Paintwork
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              THE SCIENCE BEHIND NANO-COATINGS
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              What Is Ceramic Coating?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Understanding how liquid silicon dioxide (SiO2) creates an ultra-durable, hydrophobic glass armor over your vehicle's factory clear coat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-800 text-orange-400 flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  How Ceramic Coating Bonds to Vehicle Paint
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Unlike waxes that merely sit atop paintwork, ceramic coating contains active nano-particles of silicon dioxide (SiO2) suspended in a carrier resin. When hand-applied to bare clear coat, the molecules seep into the microscopic valleys and pores of the paint, curing into a hard, crystalline covalent bond that cannot simply wash off.
                </p>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 pt-4 border-t border-zinc-800">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Permanent molecular cross-linking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Impermeable to aggressive pH chemicals</span>
                </li>
              </ul>
            </div>

            {/* H3 2 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-800 text-orange-400 flex items-center justify-center mb-6">
                  <Flame className="w-6 h-6" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Ceramic Coating vs Traditional Wax & Sealants
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Natural carnauba wax melts under engine heat and dissolves after just a few automatic car wash detergents or heavy rains. Polymer sealants last only 3 to 6 months. Ceramic coatings endure high heat up to 600°C, resist harsh winter salts, and maintain protective properties for 2 to 5+ years without breaking down.
                </p>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 pt-4 border-t border-zinc-800">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Wax: 4-8 weeks durability</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Ceramic Coating: 24-60 months durability</span>
                </li>
              </ul>
            </div>

            {/* H3 3 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-800 text-orange-400 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  How Ceramic Coating Protects Your Vehicle's Paintwork
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  The cured ceramic layer acts as a sacrificially resilient transparent skin. It absorbs UV radiation to stop paint oxidation and clear-coat failure, prevents chemical etching from corrosive bird droppings and tree resin, and keeps road grime from locking into the paintwork.
                </p>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 pt-4 border-t border-zinc-800">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Neutralizes acidic environmental attacks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Prevents clear coat sun fading & fading</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Benefits of Ceramic Coating (Light: #FFFFFF)
          Exact H2: Benefits of Ceramic Coating for Your Vehicle
          Exact H3s:
          • H3: Enhanced Gloss & Paint Clarity
          • H3: Protection From Road Grime & Environmental Contamination
          • H3: Hydrophobic Water-Repellent Protection
          • H3: Easier Vehicle Washing & Maintenance
          • H3: Long-Lasting Paint Protection
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              REAL PERFORMANCE ADVANTAGES
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Benefits of Ceramic Coating for Your Vehicle
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Why car owners, daily commuters, and supercar collectors throughout Aberdeenshire invest in professional ceramic protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Enhanced Gloss & Paint Clarity
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  The optical density of cured SiO2 functions like a solid sheet of glass. It amplifies metallic paint flakes, enhances color saturation, and delivers deep, wet-look candy reflections that turn heads in any lighting condition.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Protection From Road Grime & Environmental Contamination
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Aberdeenshire roads feature heavy winter de-icing salts, slurry from farm equipment, and stubborn road oils. The dense non-porous ceramic skin stops these aggressive contaminants from bonding to the raw factory paintwork.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Hydrophobic Water-Repellent Protection
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Water contact angles exceed 110 degrees, forcing rainwater to form tight, circular beads that roll straight off vertical and horizontal panels, picking up loose dirt and dust particles as they glide away.
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
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Easier Vehicle Washing & Maintenance
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Because mud, dead bugs, and road tar cannot physically latch onto the ultra-slick coating surface, routine maintenance washes take half the time and require significantly less mechanical agitation, drastically reducing swirl risks.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Long-Lasting Paint Protection
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  While wax washes off during the first rainy highway journey, our professional ceramic coatings provide durable year-round defense spanning up to 5 full years. It protects your automotive capital investment, preserves resale value, and ensures your vehicle always appears fresh from the showroom.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: Application Process (Dark: #0B0D10)
          Exact H2: Our Ceramic Coating Application Process
          Exact H3s:
          • H3: Vehicle Inspection & Paint Assessment
          • H3: Thorough Exterior Cleaning
          • H3: Paint Decontamination
          • H3: Machine Polishing & Paint Correction
          • H3: Paint Preparation Before Coating
          • H3: Professional Ceramic Coating Application
          • H3: Curing, Inspection & Final Quality Check
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              METICULOUS MULTI-STAGE CRAFTSMANSHIP
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Our Ceramic Coating Application Process
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Ceramic coating performance depends 90% on meticulous surface preparation. Every step is executed methodically by founder Hamish Moar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Step 1 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 01</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Vehicle Inspection & Paint Assessment
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We measure clear coat depth in microns across every panel with digital ultrasonic gauges to ensure safe polishing tolerances and examine existing scratches under high-CRI inspection lamps.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 02</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Thorough Exterior Cleaning
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  A high-foaming citrus pre-wash soak softens traffic film followed by a two-bucket safe contact wash with grit guards and pure deionised water to prevent introducing swirl marks.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 03</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Paint Decontamination
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Chemical iron fallout removers dissolve bonded metallic brake dust, tar dissolvers strip road bitumen, and synthetic clay bars glide over paint to pull out remaining embedded grit.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 04</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Machine Polishing & Paint Correction
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Dual-action machine polishers with micro-abrasive diminishing compounds eliminate wash swirls, hazing, and light scratches to reveal maximum optical depth and surface purity.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 05</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Paint Preparation Before Coating
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Every panel is meticulously wiped down with an isopropyl alcohol (IPA) panel prep solvent to strip away polishing oils, leaving completely bare, sterile paint for 100% molecular bonding.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 06</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Professional Ceramic Coating Application
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  The liquid SiO2 quartz coating is applied section-by-section with lint-free suede micro-applicators. The coating flashes, reveals its rainbow haze, and is carefully buffed to a seamless mirror finish.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between md:col-span-2 lg:col-span-3">
              <div>
                <div className="text-xs font-mono font-bold text-orange-400 mb-2">STEP 07</div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-tight mb-3">
                  Curing, Inspection & Final Quality Check
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  The vehicle undergoes controlled indoor or mobile enclosed curing. Every panel, edge, and badge crevice is verified under multi-spectrum LED inspection lighting to ensure zero high spots, streaks, or residue before handover.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: Vehicle Options (Light: #FFFFFF)
          Exact H2: Ceramic Coating Options for Different Vehicles
          Exact H3s:
          • H3: Ceramic Coating for Cars
          • H3: Ceramic Coating for SUVs & 4x4s
          • H3: Ceramic Coating for Prestige & Luxury Vehicles
          • H3: Ceramic Coating for New Vehicles
          • H3: Ceramic Coating for Daily-Driven Vehicles
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              TAILORED VEHICLE PACKAGES
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Ceramic Coating Options for Different Vehicles
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Whether you have collected a brand new car from an Aberdeen dealership or drive an all-weather SUV across rural Deeside, we have the ideal package.
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
                  Ceramic Coating for Cars
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  From compact city runabouts to executive saloons, our car coating service enhances metallic flake and defends clear coats against city grime, tight parking marring, and urban industrial fallout.
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
                  Ceramic Coating for SUVs & 4x4s
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Land Rovers, Range Rovers, Audis, and pickups face large panel surface areas and rigorous exposure to muddy rural lanes, high-speed gravel spray, and road grit across Aberdeenshire.
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
                  Ceramic Coating for Prestige & Luxury Vehicles
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Porsches, Ferraris, Aston Martins, and AMGs demand flawless multi-stage paint correction followed by multi-layered 9H ceramic quartz applications on bodywork, alloy wheels, and glass.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Ceramic Coating for New Vehicles
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Brand new vehicles arrive from dealerships with transit fallout and improper preparation. We remove factory defects and seal the pristine clear coat before road miles cause permanent damage.
                </p>
              </div>
            </div>

            {/* H3 5 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-2">
                  Ceramic Coating for Daily-Driven Vehicles
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  For high-mileage commuters traveling between Aberdeen, Peterhead, and Inverurie, ceramic coating delivers self-cleaning ease, making weekly washing effortless and keeping paint sparkling through winter salt blasts.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: Why Choose Moar Detail (Dark: #0B0D10)
          Exact H2: Why Choose Moar Detail for Ceramic Coating?
          Exact H3s:
          • H3: 30 Years of Professional Detailing Experience
          • H3: Thorough Paint Preparation Before Coating
          • H3: Professional-Grade Ceramic Coating Products
          • H3: Careful Application & Quality Control
          • H3: Fully Mobile Ceramic Coating Service
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              THE MOAR DETAIL DIFFERENCE
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Why Choose Moar Detail for Ceramic Coating?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Master-level application standards backed by 30 years of hands-on automotive expertise.
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
                  Hamish Moar has perfected automotive surface finishing over three decades, working with vintage nitrocellulose lacquers, modern ceramic clears, and fragile exotic finishes.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Thorough Paint Preparation Before Coating
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We never rush. Multi-stage chemical decontamination, claying, and precision machine polishing ensure the coating seals an optically pure, defect-free paint surface.
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
                  Professional-Grade Ceramic Coating Products
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We only install high-solids SiO2 and SiC coatings from industry-leading ceramic manufacturers with genuine scratch-resistant, hydrophobic laboratory validation.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-2">
                  Careful Application & Quality Control
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Coating is leveled panel-by-panel under multiple light angles to prevent high spots and uneven flash-off, ensuring total uniformity across every body line and recess.
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
                  Fully Mobile Ceramic Coating Service
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  No need to leave your car stranded at a distant workshop for days. Our mobile detailing unit arrives fully equipped with pure deionised water, generators, lighting rigs, and mobile shelter setups.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: How Long Does It Last? (Light: #FFFFFF)
          Exact H2: How Long Does Ceramic Coating Last?
          Exact H3s:
          • H3: Factors That Affect Ceramic Coating Durability
          • H3: Vehicle Use & Environmental Exposure
          • H3: Proper Washing & Maintenance
          • H3: Recommended Ceramic Coating Maintenance
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              LONGEVITY & DURABILITY EXPECTATIONS
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              How Long Does Ceramic Coating Last?
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              High-end professional ceramic coatings typically provide 2 to 5 years of verified paint protection when cared for properly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Factors That Affect Ceramic Coating Durability
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Durability is influenced by preparation quality, coating solids percentage, initial cure environment, and the total annual mileage driven through harsh Scottish road salt conditions.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Sun className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Vehicle Use & Environmental Exposure
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  A garaged weekend vehicle driven in summer will maintain optimal hydrophobicity for 5+ years, whereas a 20,000-mile-per-year daily driver exposed to harsh winter grit may benefit from annual refresh top-ups.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Proper Washing & Maintenance
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Using safe two-bucket washing, pH-neutral vehicle shampoos, and plush microfibre drying towels preserves the coating’s slickness and eliminates premature micro-marring.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Recommended Ceramic Coating Maintenance
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  We offer convenient 6-month or annual mobile maintenance decontaminations to strip mineral clogging and apply ceramic booster sprays that replenish the water-beading performance.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: Maintenance & Aftercare (Dark: #0B0D10)
          Exact H2: Ceramic Coating Maintenance & Aftercare
          Exact H3s:
          • H3: How to Wash a Ceramic-Coated Vehicle
          • H3: Products to Use on Ceramic Coating
          • H3: Products and Washing Methods to Avoid
          • H3: Maintaining Hydrophobic Performance & Gloss
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              EXPERT AFTERCARE GUIDANCE
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Ceramic Coating Maintenance & Aftercare
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Follow these simple best practices to ensure your ceramic coating maintains peak hydrophobicity and mirror gloss for years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* H3 1 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  How to Wash a Ceramic-Coated Vehicle
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-3">
                  Always start with a contactless snow foam soak to loosen road film. Follow with the two-bucket method using high-lubricity microfibre wash mitts, and dry with twisted-loop towels or filtered warm air blowers.
                </p>
              </div>
            </div>

            {/* H3 2 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Products to Use on Ceramic Coating
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-3">
                  Use dedicated pH-neutral ceramic car shampoos free from gloss enhancers or silicone oils. Periodic application of SiO2 ceramic detailer sprays helps replenish the slick sacrificial barrier.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Products and Washing Methods to Avoid
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-3">
                  Strictly avoid automated drive-through brush car washes, cheap roadside hand washes using abrasive TFR (Traffic Film Remover) caustic chemicals, acidic wheel cleaners, or abrasive compounding pastes.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 text-orange-400 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight mb-3">
                  Maintaining Hydrophobic Performance & Gloss
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-3">
                  If you notice water beading diminishing after heavy winter driving, it is almost always due to surface mineral contamination masking the coating. A chemical decontamination wash quickly clears the pores and restores water repellency.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: Pricing (Light: #FFFFFF)
          Exact H2: Ceramic Coating Prices in Aberdeenshire
          Exact H3s:
          • H3: What Affects Ceramic Coating Cost?
          • H3: Vehicle Size & Condition
          • H3: Paint Correction & Preparation Requirements
          • H3: Coating Type & Protection Level
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              TRANSPARENT VALUE
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              Ceramic Coating Prices in Aberdeenshire
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal">
              Our ceramic coating installations are tailored to vehicle size and required paint enhancement levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

            {/* H3 1 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  What Affects Ceramic Coating Cost?
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Ceramic coating pricing directly reflects the extensive hours of prep work, machine polishing stages, and professional product quality needed to guarantee a defect-free, long-lasting bond.
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
                  Vehicle Size & Condition
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Larger vehicles like Range Rovers or 7-seater SUVs possess nearly double the square meters of painted body panels compared to a compact hatchback, requiring more application time and coating volume.
                </p>
              </div>
            </div>

            {/* H3 3 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Paint Correction & Preparation Requirements
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  A brand new car may only require a single-stage enhancement polish, whereas a daily driver with years of swirl marks requires 2 to 3 compounding stages to level clear coat imperfections prior to coating.
                </p>
              </div>
            </div>

            {/* H3 4 */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                {/* EXACT H3 */}
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase tracking-tight mb-3">
                  Coating Type & Protection Level
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Packages range from entry 2-year ceramic quartz barriers to 5-year multi-layer 9H systems including specialized coatings for alloy wheel faces, glass rain repellents, and plastic trim rejuvenators.
                </p>
              </div>
            </div>

          </div>

          {/* Pricing CTA Bar */}
          <div className="p-6 rounded-2xl bg-zinc-900 text-white border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-lg font-heading font-black uppercase text-white tracking-tight">
                Packages From £320 - Contact For Free Assessment
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Receive an honest, transparent quotation tailored to your vehicle's make, model, and paint condition.
              </div>
            </div>
            <button
              onClick={() => openBookingModal('Ceramic Coating Quote')}
              className={`px-6 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all shrink-0 cursor-pointer`}
            >
              Get Free Instant Quote
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: Coverage Area (Light / Dark transition)
          Exact H2: Ceramic Coating Across Aberdeenshire
          ========================================================================= */}
      <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`text-xs font-heading font-black tracking-widest uppercase ${theme.textPrimary} block mb-3`}>
              DOORSTEP SERVICE RADIUS
            </span>
            {/* EXACT H2 */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              Ceramic Coating Across Aberdeenshire
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              We travel directly to your home, workplace, or private facility across the entire North East of Scotland.
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
                Check Ceramic Coating Availability In Your Area
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                Enter your postcode or town to verify immediate coverage for our mobile detailing and ceramic installation unit.
              </p>

              <form onSubmit={handleCoverageCheck} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-grow">
                    <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={postcodeQuery}
                      onChange={(e) => setPostcodeQuery(e.target.value)}
                      placeholder="e.g. AB15, Inverurie, Westhill..."
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
                title="Ceramic Coating Aberdeenshire Coverage Map"
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
          Exact H2: Ceramic Coating FAQs
          Exact H3s:
          • H3: Is Ceramic Coating Worth It?
          • H3: Does Ceramic Coating Prevent Scratches?
          • H3: Does Ceramic Coating Protect Against Bird Droppings & Road Grime?
          • H3: Can Ceramic Coating Be Applied to a New Car?
          • H3: Does Paint Correction Need to Be Done Before Ceramic Coating?
          • H3: How Long Does Ceramic Coating Take to Apply?
          • H3: How Should I Maintain Ceramic Coating?
          • H3: Can Ceramic Coating Be Applied at My Home or Workplace?
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
              Ceramic Coating FAQs
            </h2>
            <p className="text-xs sm:text-sm font-normal text-zinc-400 max-w-2xl mx-auto">
              Everything you need to know about professional ceramic coating, durability, preparation, and maintenance in Aberdeenshire.
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
                  Is Ceramic Coating Worth It?
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
                    Yes, absolutely. For vehicle owners in Aberdeenshire, ceramic coating provides unbeatable long-term value. It eliminates the recurring cost of waxes, protects raw factory clear coat from caustic winter road salts, cuts maintenance washing time in half, and preserves higher vehicle resale value.
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
                  Does Ceramic Coating Prevent Scratches?
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
                    Ceramic coating provides significant 9H scratch resistance against micro-marring, wash swirls, and towel drag. However, it is not an impenetrable bulletproof shield against flying gravel chips or intentional key scratches. For rock-chip defense, Paint Protection Film (PPF) is recommended.
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
                  Does Ceramic Coating Protect Against Bird Droppings & Road Grime?
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
                    Yes. The non-porous chemical structure of SiO2 quartz resists acids and alkalis between pH 2 and pH 12. This creates a sacrificial buffer that prevents acidic bird droppings, insect acids, and tree sap from burning directly into the clear coat before you can rinse them away.
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
                  Can Ceramic Coating Be Applied to a New Car?
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
                    Yes, in fact, brand new cars are ideal candidates! Applying ceramic coating immediately locks in showroom perfection before road grime, winter salts, and improper dealer washing mar the clear coat. We carry out a single-stage enhancement polish to maximize optical clarity before applying the coating.
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
                  Does Paint Correction Need to Be Done Before Ceramic Coating?
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
                    Yes. Ceramic coating is completely transparent. If applied over existing swirl marks, water etchings, or scratches, those defects will be permanently locked beneath the glass-like coating. Machine polishing levels the clear coat so the coating bonds to an immaculate surface.
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
                  How Long Does Ceramic Coating Take to Apply?
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
                    A professional ceramic coating package typically requires between 1 to 2 full working days. The majority of this time is dedicated to multi-stage decontamination and machine polishing, followed by meticulous application and controlled curing.
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
                  How Should I Maintain Ceramic Coating?
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
                    Wash regularly using pH-neutral shampoo and the two-bucket method. Avoid abrasive brushes or harsh commercial truck washes. We also provide aftercare maintenance guides and offer periodic maintenance details to replenish coating hydrophobicity.
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
                  Can Ceramic Coating Be Applied at My Home or Workplace?
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
                    Yes! Our mobile van is fully self-contained with onboard water, electricity, and inspection lighting. During dry, temperate weather or inside a garage, carport, or commercial unit, we apply ceramic coatings seamlessly at your location. If weather conditions are inclement, we utilize mobile protective canopies.
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
                  Have a question not listed here?
                </div>
                <div className="text-xs text-zinc-400">
                  Speak directly with master detailer Hamish Moar for ceramic coating advice.
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
          Exact H2: Book Your Ceramic Coating Service
          ========================================================================= */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-950 text-xs font-heading font-bold uppercase tracking-wider mb-6">
            <Calendar className="w-3.5 h-3.5 text-orange-600" />
            <span>DISPATCH TO YOUR DRIVEWAY</span>
          </div>

          {/* EXACT H2 */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight mb-6 text-zinc-950">
            Book Your Ceramic Coating Service
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Give your vehicle lasting 9H glass armor and effortless hydrophobic maintenance. Contact founder Hamish Moar today for a bespoke quotation or instant booking across Aberdeenshire.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal('Ceramic Coating Booking')}
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
