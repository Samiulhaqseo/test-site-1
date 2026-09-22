import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { teamMembersList } from '../data/teamData';

export const TeamPage: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  return (
    <div className="bg-[#0B0D10] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-white font-medium">Team Members</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <Award className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>IDA Certified Automotive Specialists</span>
          </div>
        </div>
      </div>

      {/* Hero Banner (#0B0D10) */}
      <section className="py-14 sm:py-20 relative overflow-hidden bg-[#0B0D10] border-b border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 mb-5">
            <Users className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>THE CRAFTSMEN BEHIND THE SHINE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight uppercase text-white">
            MEET OUR SPECIALIST <span className={theme.textPrimary}>TEAM</span>
          </h1>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every vehicle entrusted to {config.businessName} is handled exclusively by trained, certified detailers who treat automotive clear coats with scientific precision and respect.
          </p>
        </div>
      </section>

      {/* Team Cards Grid (#FFFFFF) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              CERTIFIED TECHNICIANS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black uppercase text-zinc-950 tracking-tight">
              DEDICATED AUTOMOTIVE ARTISANS
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm mt-2">
              Our mobile technicians are master detailers, IDA certified, and equipped with the industry's finest tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembersList.map((member) => (
              <div
                key={member.id}
                className="bg-[#F8FAFC] border border-zinc-200 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group shadow-sm"
              >
                {/* Member Top Area */}
                <div>
                  <div className="relative aspect-16/10 overflow-hidden border-b border-zinc-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    {/* Experience Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} shadow-lg`}>
                        {member.yearsInTrade} YEARS IN TRADE
                      </span>
                    </div>

                    {/* Member Name and Role */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading font-black text-2xl text-white uppercase">
                        {member.name}
                      </h3>
                      <div className={`text-xs font-bold uppercase tracking-wider text-orange-300 mt-0.5`}>
                        {member.role}
                      </div>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="p-6 space-y-4">
                    <div className="inline-block px-2.5 py-1 rounded bg-white border border-zinc-300 text-[11px] font-semibold text-zinc-800 shadow-2xs">
                      Specialty: <strong className="text-zinc-950">{member.specialization}</strong>
                    </div>

                    <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Certifications Checklist */}
                    <div className="space-y-1.5 pt-2">
                      <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-zinc-500">
                        CERTIFICATIONS & ACCREDITATIONS:
                      </div>
                      {member.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-800">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${theme.textPrimary} shrink-0`} />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>

                    {/* Favorite Tool */}
                    <div className="p-3.5 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-600 flex items-start gap-2.5 shadow-2xs">
                      <Wrench className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-zinc-950">Go-To Detailing Weapon: </span>
                        {member.favoriteTool}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => openBookingModal()}
                    className={`w-full py-3 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all active:scale-[0.98] cursor-pointer min-h-[44px] flex items-center justify-center gap-2`}
                  >
                    <span>BOOK WITH OUR SPECIALISTS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Philosophy Callout (#F8FAFC) */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              CRAFTSMAN STANDARDS
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-zinc-950 tracking-tight">
              OUR UNCOMPROMISING CODE OF EXCELLENCE
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm mt-3 leading-relaxed">
              We never rush a vehicle to meet a volume quota. We allocate dedicated half-day or full-day booking slots so every panel receives the meticulous attention it deserves.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-white border border-zinc-200 text-left shadow-xs">
              <ShieldCheck className={`w-6 h-6 ${theme.textPrimary} mb-2`} />
              <h4 className="font-heading font-bold text-sm text-zinc-950 uppercase">Insured Up to £5M</h4>
              <p className="text-zinc-600 text-xs mt-1">Full damage-in-charge and public liability cover for ultimate peace of mind.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-zinc-200 text-left shadow-xs">
              <Sparkles className={`w-6 h-6 ${theme.textPrimary} mb-2`} />
              <h4 className="font-heading font-bold text-sm text-zinc-950 uppercase">Zero Temporary Glazes</h4>
              <p className="text-zinc-600 text-xs mt-1">Defects are physically corrected, never hidden with oily filler waxes.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-zinc-200 text-left shadow-xs">
              <Award className={`w-6 h-6 ${theme.textPrimary} mb-2`} />
              <h4 className="font-heading font-bold text-sm text-zinc-950 uppercase">Continuous Training</h4>
              <p className="text-zinc-600 text-xs mt-1">Regular certifications in emerging high-solid coatings and new pad technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Booking Banner (#0B0D10) */}
      <section className="py-16 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-heading font-black uppercase tracking-tight">
              REQUEST OUR MASTER DETAILERS DIRECTLY
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Have Hamish or our accredited team arrive directly at your location with our fully equipped mobile studio van.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => openBookingModal()}
                className={`px-8 py-3.5 rounded-xl text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl cursor-pointer min-h-[44px] flex items-center gap-2`}
              >
                <span>BOOK YOUR VEHICLE APPOINTMENT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
