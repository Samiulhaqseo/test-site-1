import React from 'react';
import { Calendar, Phone, Award, Sparkles, ShieldCheck, Truck, Check } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const Hero: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  const heroBadges = [
    'Mobile Valeting',
    'Interior Deep Cleanse',
    'Machine Polishing',
    'Decontamination & Wax'
  ];

  const trustMetrics = [
    {
      icon: Award,
      title: `${config.yearsExperience} Years`,
      subtitle: 'Hands-on Experience'
    },
    {
      icon: Sparkles,
      title: 'Swirl-Free',
      subtitle: 'Machine Polishing'
    },
    {
      icon: Truck,
      title: '100% Mobile',
      subtitle: 'Direct to Your Door'
    },
    {
      icon: ShieldCheck,
      title: 'Fully Insured',
      subtitle: 'Satisfaction Guaranteed'
    }
  ];

  return (
    <section id="home" className="relative bg-[#0B0D10] overflow-hidden border-b border-zinc-800/80">
      {/* Background Image with dramatic automotive detailing aesthetic */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85"
          alt="High Gloss Luxury Car Detailing"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform filter brightness-75 contrast-125"
        />
        {/* Deep Vignette and subtle radial glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/70 to-[#0c0e12]/85" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0c0e12]/40 to-[#0c0e12]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12 sm:pb-14 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-zinc-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 shadow-md shadow-black/60 max-w-full truncate">
          <Award className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${theme.textPrimary} shrink-0`} />
          <span className="truncate">{config.yearsExperience} YEARS DETAILING • 100% MOBILE</span>
        </div>

        {/* Big High-Impact Headline */}
        <h1 className="font-heading font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] sm:leading-[1.08] uppercase mb-4 sm:mb-6 drop-shadow-lg max-w-4xl mx-auto">
          Mobile Car Valeting &{' '}
          <span className={`${theme.textPrimary} drop-shadow-sm inline-block`}>
            Detailing
          </span>{' '}
          in Aberdeenshire
        </h1>

        {/* Descriptive Subheadline */}
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-normal leading-relaxed mb-5 sm:mb-6">
          Premium interior and exterior detailing and mobile hand car valet services brought direct to your doorstep or workplace. Backed by three decades of precision craftsmanship right to your driveway.
        </p>

        {/* Feature Checkpoints */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 mb-6 sm:mb-8 text-[11px] sm:text-xs md:text-sm font-semibold text-zinc-300 text-left sm:text-center">
          {heroBadges.map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5">
              <Check className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${theme.textPrimary} stroke-[3] shrink-0`} />
              <span className="truncate">{badge}</span>
            </span>
          ))}
        </div>

        {/* Urgent Availability Banner */}
        <div className="inline-block mb-6 sm:mb-8 w-full sm:w-auto">
          <span className="block sm:inline-block text-[10px] sm:text-xs font-extrabold tracking-widest uppercase text-amber-400 bg-amber-950/50 border border-amber-800/70 px-3 sm:px-4 py-2 sm:py-1.5 rounded-lg sm:rounded-md leading-snug">
            FAST ON-SITE APPOINTMENTS — BOOK ONLINE OR CALL TODAY
          </span>
        </div>

        {/* Conversion CTA Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
          <button
            onClick={() => openBookingModal()}
            id="hero-book-now-btn"
            className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl shadow-orange-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer min-h-[48px]`}
          >
            <Calendar className="w-4 h-4 text-white shrink-0" />
            <span>BOOK NOW / GET QUOTE</span>
          </button>

          <a
            href={`tel:${config.phone.replace(/\s+/g, '')}`}
            id="hero-call-now-btn"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-all flex items-center justify-center gap-2.5 hover:text-white min-h-[48px]"
          >
            <Phone className={`w-4 h-4 ${theme.textPrimary} shrink-0`} />
            <span>CALL: {config.phone}</span>
          </a>
        </div>

        {/* 4-Item Trust Metric Bar */}
        <div className="pt-6 sm:pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6 text-left max-w-4xl mx-auto">
          {trustMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="flex items-center sm:items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/70">
                <div className={`p-1.5 sm:p-2 rounded bg-zinc-800/90 ${theme.textPrimary} shrink-0`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-heading font-black text-xs sm:text-sm text-white uppercase tracking-tight truncate">
                    {metric.title}
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 truncate">
                    {metric.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
