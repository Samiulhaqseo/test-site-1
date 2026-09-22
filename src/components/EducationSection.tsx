import React from 'react';
import { AlertTriangle, AlertOctagon, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const EducationSection: React.FC = () => {
  const { config, theme } = useBusiness();

  const mistakes = [
    {
      title: 'Improper Washing & Drying With Sponges or Chamois',
      desc: 'Traditional household sponges trap coarse road grit on their flat surface and drag it across your clear coat, causing circular spiderweb swirls. Cheap rubber blades or old bath towels introduce deep micro-scratches that ruin gloss.'
    },
    {
      title: 'Leaving Buffer Trails & Holograms After Polishing',
      desc: 'Untrained use of aggressive rotary polishers or hardware store buffing pads overheats paint and leaves greasy-looking 3D holographic swirls that become embarrassingly visible whenever sunlight strikes the car.'
    },
    {
      title: 'Washing Over Road Tar & Iron Fallout',
      desc: 'Washing a car without chemical decontamination drags embedded metal brake dust particles across the paintwork. These tiny iron filings rust and pit your clear coat if not dissolved safely with dedicated fallout removers.'
    },
    {
      title: 'Allowing Bird Droppings & Road Salt to Damage Paint',
      desc: 'Harsh coastal and road weather subjects paint to heavy road salt and acid rain. Highly acidic bird droppings begin etching into clear coats in under 24 hours, causing permanent clear coat scarring if not neutralized.'
    },
    {
      title: 'Using Household Dish Detergents on Vehicle Paint',
      desc: 'Washing with household degreasers rapidly strips away all existing waxes and sealants, dries out rubber seals, and leaves paint completely unprotected against UV rays and environmental fallout.'
    }
  ];

  return (
    <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
            EXPERT CAR CARE ADVICE
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight">
            Common DIY Car Detailing Mistakes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual with Clear Coat Warning Overlay */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 sm:border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=900&q=80"
                alt="Paint inspection and clear coat damage prevention"
                className="w-full h-[280px] sm:h-[380px] lg:h-[450px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Warning overlay card */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/60 text-white">
                <div className="flex items-center gap-2 text-amber-400 font-heading font-bold text-xs uppercase tracking-wider mb-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>CLEAR COAT PRESERVATION</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                  Clear coat is thinner than a Post-it note. Avoid permanent damage by using safe, non-contact pre-washes and pH-neutral chemistry.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: List of 5 Common Mistakes */}
          <div className="lg:col-span-7 space-y-6">
            {mistakes.map((mistake, idx) => (
              <div key={idx} className="flex items-start gap-4 pb-5 border-b border-zinc-200 last:border-0 last:pb-0">
                <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  <AlertOctagon className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-zinc-900 uppercase tracking-tight mb-1">
                    {mistake.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {mistake.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* How We Prevent This Solution Box */}
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-300 text-emerald-950 flex items-start gap-3 mt-8">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <strong className="font-bold text-emerald-900">How We Prevent This: </strong>
                {config.businessName} follows a strict 3-stage pre-wash, two-bucket hand wash with grit guards, and dual-action machine correction that never leaves buffer marks or holograms.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
