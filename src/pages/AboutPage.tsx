import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Droplets, 
  ChevronRight, 
  CheckCircle2, 
  Users, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const AboutPage: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  return (
    <div className="bg-[#0B0D10] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-white font-medium">About Us</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <Award className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>30+ Years Scottish Automotive Heritage</span>
          </div>
        </div>
      </div>

      {/* Hero Banner (#0B0D10) */}
      <section className="py-14 sm:py-20 relative overflow-hidden bg-[#0B0D10] border-b border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 mb-5">
            <Sparkles className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>MASTER CRAFTSMANSHIP ON WHEELS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight uppercase text-white">
            ABOUT <span className={theme.textPrimary}>{config.businessName}</span>
          </h1>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Founded by Hamish Moar, we have spent over 30 years mastering vehicle clear coats, eliminating paint swirls, and bringing bespoke mobile detailing right to Scottish driveways.
          </p>
        </div>
      </section>

      {/* Founder Story Section (#FFFFFF) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-xl aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Hamish Moar - Founder & Master Detailer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xl font-heading font-black text-white uppercase">{config.ownerName}</div>
                  <div className={`text-xs font-bold uppercase ${theme.textPrimary} mt-0.5`}>
                    Founder & Master Detailer (30+ Years In Trade)
                  </div>
                </div>
              </div>

              {/* Float badge */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-zinc-200 p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${theme.bgPrimary} flex items-center justify-center text-white font-heading font-black text-base`}>
                  30+
                </div>
                <div className="text-xs">
                  <div className="font-bold text-zinc-900 uppercase">Years of Polish</div>
                  <div className="text-zinc-500">Trusted Locally</div>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-heading font-bold uppercase tracking-widest text-zinc-500">
                OUR HERITAGE & PHILOSOPHY
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase text-zinc-950 tracking-tight">
                A REFUSAL TO COMPROMISE ON CLEAR COAT INTEGRITY
              </h2>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                When Hamish Moar first began polishing vehicles in Aberdeenshire three decades ago, automotive detailing was an art reserved for classic car collections and concours lawns. Most motorists were accustomed to roadside hand washes using abrasive yellow sponges, harsh caustic wheel acids, and gritty wash water.
              </p>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                Recognizing that modern clear coats are as delicate as they are thin, Hamish built {config.businessName} on one unwavering premise: treat every car—from a family estate to a rare Porsche—with the surgical care of a precision workshop.
              </p>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                Today, that ethos lives in our custom mobile detailing units. We carry pure deionised water, gentle pH-neutral chemical dissolvers, and digital ultrasonic paint depth gauges directly to your home, saving you hours of time while protecting your vehicle's long-term resale value.
              </p>

              {/* Quality Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-zinc-200">
                  <CheckCircle2 className={`w-4 h-4 ${theme.textPrimary} mt-0.5 shrink-0`} />
                  <div className="text-xs text-zinc-700">
                    <strong className="text-zinc-950 block">Zero Sponges or Brooms</strong>
                    Plush microfibre wash mitts and twin grit guards only.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-zinc-200">
                  <CheckCircle2 className={`w-4 h-4 ${theme.textPrimary} mt-0.5 shrink-0`} />
                  <div className="text-xs text-zinc-700">
                    <strong className="text-zinc-950 block">0-TDS Deionised Water</strong>
                    Filtered mineral-free water leaves zero white chalk spots.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-zinc-200">
                  <CheckCircle2 className={`w-4 h-4 ${theme.textPrimary} mt-0.5 shrink-0`} />
                  <div className="text-xs text-zinc-700">
                    <strong className="text-zinc-950 block">Digital Gauge Safety</strong>
                    Panel-by-panel ultrasonic clear coat thickness testing.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-zinc-200">
                  <CheckCircle2 className={`w-4 h-4 ${theme.textPrimary} mt-0.5 shrink-0`} />
                  <div className="text-xs text-zinc-700">
                    <strong className="text-zinc-950 block">Certified Installers</strong>
                    Accredited in 9H SiO2 ceramic quartz protection.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/team/"
                  className="px-5 py-3 rounded-lg text-xs font-heading font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 transition-all flex items-center gap-2 min-h-[44px]"
                >
                  <Users className="w-4 h-4" />
                  <span>MEET OUR SPECIALIST TEAM</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the Mobile Van Rig (#F8FAFC) */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              SELF-CONTAINED MOBILE WORKSHOP
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase text-zinc-950 tracking-tight">
              A COMPLETE DETACHED WORKSHOP ON WHEELS
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm mt-2">
              Why our mobile van requires zero utilities from your home or corporate parking space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-zinc-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className={`w-12 h-12 rounded-xl ${theme.bgPrimary} flex items-center justify-center text-white mb-4`}>
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase">
                  500L PURE DEIONISED TANK
                </h3>
                <p className="text-zinc-600 text-xs mt-2 leading-relaxed">
                  Our water goes through a multi-stage reverse osmosis and deionising resin bed. It has zero minerals (0 Total Dissolved Solids), so when it evaporates on glass or bodywork, it leaves zero mineral rings or etchings.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] text-zinc-700 font-semibold">
                ✓ No outside tap required
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-zinc-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className={`w-12 h-12 rounded-xl ${theme.bgPrimary} flex items-center justify-center text-white mb-4`}>
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase">
                  HONDA SILENT GENERATOR
                </h3>
                <p className="text-zinc-600 text-xs mt-2 leading-relaxed">
                  Equipped with an ultra-quiet Honda inverter generator, our van supplies clean sinusoidal AC power to run commercial hot water extractors, steam boilers, and rotary polishers without plugging into your mains.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] text-zinc-700 font-semibold">
                ✓ No household electricity needed
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-zinc-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className={`w-12 h-12 rounded-xl ${theme.bgPrimary} flex items-center justify-center text-white mb-4`}>
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-black text-lg text-zinc-950 uppercase">
                  £5,000,000 TRADES INSURANCE
                </h3>
                <p className="text-zinc-600 text-xs mt-2 leading-relaxed">
                  Full motor trade, public liability, and damage-in-charge insurance protecting prestige sports cars, exotic supercars, commercial fleets, and your home property throughout every booking.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] text-zinc-700 font-semibold">
                ✓ Comprehensive peace of mind
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA (#0B0D10) */}
      <section className="py-16 sm:py-20 bg-[#0B0D10] text-white border-b border-zinc-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-white tracking-tight">
              EXPERIENCE CRAFTSMAN VALETING FIRST-HAND
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Book your mobile detailing slot in 60 seconds or browse our comprehensive service portfolio.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => openBookingModal()}
                className={`px-8 py-3.5 rounded-xl text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl cursor-pointer min-h-[44px] flex items-center gap-2`}
              >
                <span>GET AN INSTANT ESTIMATE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/services/"
                className="px-6 py-3.5 rounded-xl text-xs font-heading font-bold uppercase text-zinc-300 hover:text-white bg-zinc-800 border border-zinc-700 min-h-[44px] flex items-center"
              >
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
