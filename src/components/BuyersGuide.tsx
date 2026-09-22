import React from 'react';
import { CheckCircle2, Phone, Calendar, ArrowRight, Shield } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const BuyersGuide: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  const tips = [
    {
      title: 'Check Genuine Detailing Work & Natural-Light Photos',
      desc: 'True detailing quality shows in close-up inspection under high-CRI inspection lights and direct sunlight, not just filtered distant garage shots. Our portfolio displays authentic, untouched finishes.'
    },
    {
      title: 'Look for Proven Detailing Experience',
      desc: `Clear coats are delicate. With ${config.yearsExperience} years of dedicated craft, ${config.ownerName.split(' ')[0]} knows how to treat sensitive German, British, Italian, and Japanese paints safely.`
    },
    {
      title: 'Ask About Mobile Detailing Equipment & Water Supply',
      desc: 'Our self-sufficient mobile setup is designed to operate seamlessly at your home or workplace with minimal interruption to your day.'
    },
    {
      title: 'Ask About Professional & pH-Neutral Detailing Products',
      desc: 'Acidic traffic film removers (TFR) used at cheap roadside washes will stain aluminium trims and prematurely oxidise plastic trim. We only apply safe, premium automotive chemistry.'
    }
  ];

  return (
    <section className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-[#14171e] grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Rich Orange/Warm Accent Panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-orange-600 via-orange-600 to-amber-600 text-white">
            <div>
              <span className="text-xs font-black tracking-widest uppercase bg-black/20 text-white px-3 py-1 rounded inline-block mb-3">
                BUYER'S GUIDE
              </span>

              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight leading-tight mb-4">
                How to Choose a Trusted Car Detailer in Aberdeenshire
              </h2>

              <p className="text-white/90 text-xs sm:text-sm mb-8 font-medium leading-relaxed">
                Here are a few key points to keep in mind when choosing a mobile detailer across {config.location.split(',')[0]}:
              </p>

              {/* 4 Guidelines */}
              <div className="space-y-5 mb-8">
                {tips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-xs sm:text-sm uppercase tracking-tight text-white mb-1">
                        {tip.title}
                      </h3>
                      <p className="text-xs text-white/85 leading-relaxed">
                        {tip.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-white/20">
              <button
                onClick={() => openBookingModal()}
                className="px-6 py-3 rounded bg-zinc-950 hover:bg-black text-white text-xs font-heading font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className="px-5 py-3 rounded bg-white/15 hover:bg-white/25 text-white text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{config.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Porsche 911 detail image */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
              alt="Porsche 911 high-gloss finish"
              className="w-full h-full object-cover object-center brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          </div>

        </div>
      </div>
    </section>
  );
};
