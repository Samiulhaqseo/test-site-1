import React from 'react';
import { Calendar, Phone, Sparkles } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  bookingContext?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ title, subtitle, bookingContext }) => {
  const { config, openBookingModal, theme } = useBusiness();

  return (
    <section id="cta-banner" className="relative py-24 bg-white text-zinc-900 overflow-hidden border-b border-zinc-200">
      {/* Subtle luxury vehicle watermark on light background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury car headlights"
          className="w-full h-full object-cover object-center opacity-[0.06] filter contrast-125 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/85 to-white pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className={`inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase ${theme.textPrimary} mb-4`}>
          <Sparkles className="w-4 h-4" />
          <span>EXPERT AUTOMOTIVE CARE IN {config.location.split(',')[0].toUpperCase()}</span>
        </div>

        {/* Title */}
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight mb-6 text-zinc-950">
          {title || "Book Your Mobile Car Detailing Appointment"}
        </h2>

        {/* Paragraph */}
        <p className="text-zinc-600 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed mb-8">
          {subtitle || `When your vehicle needs expert care, our ${config.yearsExperience}-year veteran detailing specialist is ready to help. Whether it's refreshing the interior, restoring shine to the paint, or protecting your investment with decontamination and high-grade quartz wax, we've got you covered right at your doorstep.`}
        </p>

        {/* Badge */}
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-600 border border-zinc-200 px-3.5 py-1.5 rounded-full bg-zinc-100">
            RAPID RESPONSE — BOOK ONLINE OR CALL TODAY
          </span>
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openBookingModal(bookingContext)}
            className={`w-full sm:w-auto px-8 py-4 rounded font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]`}
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK NOW</span>
          </button>

          <a
            href={`tel:${config.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-8 py-4 rounded font-heading font-bold text-xs uppercase tracking-wider text-zinc-800 bg-white hover:bg-zinc-100 border border-zinc-300 hover:border-zinc-400 transition-all flex items-center justify-center gap-2 min-h-[44px]"
          >
            <Phone className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>CALL: {config.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
