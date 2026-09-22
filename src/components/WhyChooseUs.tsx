import React from 'react';
import { CheckCircle2, Phone, Calendar } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const WhyChooseUs: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  const reasons = [
    {
      title: '30 Years of Professional Detailing Experience',
      desc: `${config.ownerName} brings three decades of dedicated automotive care to every vehicle. We know how to read clear coat depth, safely work on delicate paintwork, and revive weathered interiors.`
    },
    {
      title: 'Fully Mobile Detailing Service',
      desc: `Our fully self-contained mobile unit arrives directly at your home or workplace across ${config.location.split(',')[0]}. Enjoy your day while your vehicle is meticulously detailed.`
    },
    {
      title: 'Quality-First, Swirl-Free Detailing Process',
      desc: 'We are never a rushed 10-minute splash-and-dash. We utilize two-bucket grit guard systems, plush microfibres, pH-neutral snow foams, and dual-action polishers that protect your clear coat.'
    },
    {
      title: 'Fully Insured & Professional Service',
      desc: 'Complete public liability and motor trade insurance cover. We treat every vehicle with the utmost care, honest communication, and pride in our workmanship.'
    },
    {
      title: 'Customer-Focused Vehicle Care',
      desc: "We inspect every panel, seam, and stitch before handover. You don't pay until the work is thoroughly reviewed and you are completely thrilled with the transformation."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white text-zinc-900 border-b border-zinc-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
            OUR PROMISE TO YOU
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
            Why Choose Moar Detail for Your Vehicle?
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            When it comes to choosing a vehicle detailer in {config.location.split(',')[0]}, {config.businessName} stands out for quality, consistency, and {config.yearsExperience} years of customer care. Here's why local car owners trust {config.ownerName.split(' ')[0]}:
          </p>
        </div>

        {/* 5 Master Points */}
        <div className="space-y-4 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-[#F8FAFC] border border-zinc-200 hover:border-zinc-300 transition-all flex items-start gap-4 shadow-2xs"
            >
              <div className={`mt-0.5 p-1 rounded-full ${theme.textPrimary} shrink-0`}>
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-zinc-950 uppercase tracking-tight mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Subtext and CTAs */}
        <div className="text-center pt-6 border-t border-zinc-200">
          <p className="text-zinc-600 text-xs sm:text-sm mb-6">
            Ready to schedule a detail? Give us a call or book your preferred slot online to reserve your appointment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal()}
              className={`w-full sm:w-auto px-7 py-3.5 rounded font-heading font-extrabold text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]`}
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK NOW / GET A QUOTE</span>
            </button>

            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded font-heading font-bold text-xs uppercase tracking-wider text-zinc-800 bg-white hover:bg-zinc-100 border border-zinc-300 transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Phone className={`w-4 h-4 ${theme.textPrimary}`} />
              <span>CALL: {config.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
