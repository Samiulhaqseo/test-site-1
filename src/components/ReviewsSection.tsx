import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

interface CustomerReview {
  id: string;
  author: string;
  location: string;
  vehicle: string;
  service: string;
  quote: string;
  date: string;
  stars: number;
}

export const ReviewsSection: React.FC = () => {
  const { config, theme } = useBusiness();

  const reviews: CustomerReview[] = [
    {
      id: 'rev-1',
      author: 'David M.',
      location: 'Aberdeen (West End)',
      vehicle: 'BMW M3 Competition',
      service: 'Paint Correction & Ceramic Quartz 9H',
      quote: 'Hamish transformed my M3 right on my Aberdeen driveway. The swirl marks from previous automated car washes were completely eradicated, and the ceramic gloss is breathtaking. Unmatched attention to detail.',
      date: 'Verified Customer',
      stars: 5
    },
    {
      id: 'rev-2',
      author: 'Callum R.',
      location: 'Inverurie',
      vehicle: 'Range Rover Sport',
      service: 'Decontamination Wash & Deep Interior Cleanse',
      quote: 'Living just outside Inverurie, finding a high-end detailer who comes directly to the farm was incredible. With muddy country lanes and two dogs, the interior was a disaster. It came back looking factory-fresh.',
      date: 'Verified Customer',
      stars: 5
    },
    {
      id: 'rev-3',
      author: 'Fiona B.',
      location: 'Westhill',
      vehicle: 'Porsche Macan GTS',
      service: 'Mobile Car Valeting & Wax Protection',
      quote: 'So convenient having Hamish detail my car while I worked from home in Westhill. Spotless inside and out, zero mess left on the drive, and whisper-quiet operation. Will book regularly!',
      date: 'Verified Customer',
      stars: 5
    },
    {
      id: 'rev-4',
      author: 'Alistair M.',
      location: 'Cults, Aberdeen',
      vehicle: 'Porsche 911 Carrera 4S',
      service: 'Machine Polishing & Swirl Removal',
      quote: 'Hamish spent 7 hours on my 911 in my driveway. The two-stage machine polishing removed years of paint haze and brought out deep metallic flake reflections. True master craftsmanship.',
      date: 'Verified Customer',
      stars: 5
    },
    {
      id: 'rev-5',
      author: 'Graeme K.',
      location: 'Stonehaven',
      vehicle: 'Audi RS6 Avant',
      service: 'Full Winter Decontamination & Ceramic Shield',
      quote: 'Coastal sea salt had begun dulling the clear coat on my RS6. Hamish completed an extensive chemical fallout dissolve and applied ceramic protection. Water now sheets off effortlessly.',
      date: 'Verified Customer',
      stars: 5
    },
    {
      id: 'rev-6',
      author: 'Sarah L.',
      location: 'Banchory, Deeside',
      vehicle: 'Volvo XC90',
      service: 'Interior Deep Cleanse & Leather Treatment',
      quote: 'Spilled coffee stains in the rear carpets and weathered leather seats were completely restored. Hamish took his time and the hot water extraction left the interior smelling fresh and clean.',
      date: 'Verified Customer',
      stars: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with requested exact H2 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>5.0 AVERAGE RATING</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
            50+ Five-Star Reviews From Local Customers
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Read genuine feedback from car enthusiasts, daily commuters, and family SUV owners across {config.location.split(',')[0]} who trust {config.businessName} with their vehicles.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all duration-300 shadow-2xs"
            >
              <div>
                {/* Stars and Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>{rev.date}</span>
                  </div>
                </div>

                {/* Review Quote */}
                <p className="text-zinc-700 text-sm leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author & Vehicle metadata */}
              <div className="pt-4 border-t border-zinc-200/80">
                <div className="font-heading font-bold text-sm text-zinc-950">
                  {rev.author}
                </div>
                <div className="text-xs text-zinc-500 font-medium mt-0.5">
                  {rev.location} • <span className="text-zinc-700 font-semibold">{rev.vehicle}</span>
                </div>
                <div className="text-[11px] font-medium text-orange-600 mt-1">
                  Service: {rev.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Strip */}
        <div className="rounded-xl bg-zinc-950 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-zinc-800">
          <div className="text-center sm:text-left">
            <div className="text-lg font-heading font-black uppercase text-white tracking-tight">
              PROUDLY SERVING OVER 500+ ABERDEENSHIRE VEHICLES
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              From residential driveways to executive car parks, 100% swirl-free satisfaction guaranteed.
            </div>
          </div>
          <div className="flex items-center gap-6 shrink-0 text-xs font-semibold text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Self-Contained Mobile Van</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
