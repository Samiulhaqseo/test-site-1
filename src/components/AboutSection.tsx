import React from 'react';
import { CheckCircle2, Phone, Calendar, Sparkles } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const AboutSection: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  const keyDifferentiators = [
    'Safe 2-Bucket Hand Washing',
    'Swirl-Free Machine Polishing',
    'Hot Water Steam Extraction',
    `Covering All ${config.location.split(',')[0]}`
  ];

  return (
    <section id="about" className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with authentic craftsman badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=85"
                alt="Master Detailer at work"
                className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Iconic Floating Badge matching reference */}
            <div className="relative -mt-8 mx-4 sm:mx-0 sm:absolute sm:-bottom-6 sm:-right-3 md:right-4 lg:-right-3 bg-zinc-950 text-white p-3.5 sm:p-5 rounded-xl shadow-2xl border-2 border-orange-500/80 flex items-center gap-3.5 max-w-xs animate-in fade-in zoom-in duration-300 z-10">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg ${theme.bgPrimary} flex items-center justify-center font-heading font-black text-xl sm:text-2xl text-white shrink-0 shadow-md`}>
                {config.yearsExperience}
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-zinc-100 truncate">
                  YEARS IN THE TRADE
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium flex items-center gap-1 mt-0.5 truncate">
                  <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>Master Detailing Craft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative and bullet points */}
          <div className="lg:col-span-7 lg:pl-4 mt-6 lg:mt-0">
            {/* Eyebrow */}
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              ABOUT {config.businessName}
            </span>

            {/* Headline */}
            <div className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-[1.15] mb-6">
              {config.location.split(',')[0].toUpperCase()}'S MOST TRUSTED MOBILE DETAILING AND VALETING SERVICES
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                If you're looking for a dependable detailer to take meticulous care of your vehicle, <strong className="font-bold text-zinc-950">{config.businessName}</strong> is the trusted choice drivers rely on throughout {config.location.split(',')[0]} and surrounding areas. We offer comprehensive interior and exterior detailing services directly at your home or workplace.
              </p>
              <p>
                Led by <strong className="font-bold text-zinc-950">{config.ownerName}</strong>, with over <strong className="font-bold text-orange-600">{config.yearsExperience} years of hands-on experience</strong> in the automotive care industry, whether your daily driver needs an intensive interior deep cleanse or your pride-and-joy requires multi-stage swirl removal and machine paint correction, we deliver results with quality you will immediately notice.
              </p>
              <p>
                Everything is performed conveniently on-site using our self-sufficient mobile setup. You get consistent, guaranteed perfection without the hassle of drop-offs or waiting rooms. Relax at home or focus on your work while we restore your vehicle to immaculate showroom condition.
              </p>
            </div>

            {/* 4 Checked bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {keyDifferentiators.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className={`w-5 h-5 ${theme.textPrimary} shrink-0`} />
                  <span className="text-sm font-semibold text-zinc-800">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => openBookingModal()}
                id="about-quote-btn"
                className={`px-7 py-3.5 rounded font-heading font-extrabold text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-lg shadow-orange-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer`}
              >
                <Calendar className="w-4 h-4" />
                <span>REQUEST A FREE QUOTE</span>
              </button>

              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                id="about-call-btn"
                className="px-6 py-3.5 rounded font-heading font-bold text-xs uppercase tracking-wider text-zinc-800 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 transition-all flex items-center justify-center gap-2"
              >
                <Phone className={`w-4 h-4 ${theme.textPrimary}`} />
                <span>{config.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
