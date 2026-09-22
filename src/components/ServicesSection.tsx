import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, ArrowRight, Info, Phone, ChevronRight } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const { config, services, openBookingModal, openDetailModal, theme } = useBusiness();
  const [activeTab, setActiveTab] = useState<string>('all');

  const getServicePageUrl = (service: ServiceItem) => {
    if (service.category === 'valeting') return '/services/mobile-car-detailing-service-in-aberdeenshire/';
    if (service.category === 'interior') return '/services/interior-detailing/';
    if (service.category === 'polishing') return '/services/paint-correction/';
    if (service.category === 'decontamination') return '/services/exterior-detailing/';
    if (service.id.includes('ceramic') || service.title.toLowerCase().includes('ceramic')) return '/services/ceramic-coating/';
    return '/services/mobile-car-detailing-service-in-aberdeenshire/';
  };

  const filterTabs = [
    { id: 'all', label: 'ALL SERVICES' },
    { id: 'valeting', label: 'MOBILE VALETING' },
    { id: 'interior', label: 'INTERIOR DEEP CLEANSE' },
    { id: 'polishing', label: 'MACHINE POLISHING' },
    { id: 'decontamination', label: 'DECONTAMINATION & WAX' },
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
            PROFESSIONAL AUTOMOTIVE CARE
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
            Mobile Valeting & Car Detailing Services in Aberdeenshire
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal">
            From mobile valeting at your doorstep to multi-stage machine paint correction, every service is carried out with {config.yearsExperience} years of meticulous craftsmanship.
          </p>
        </div>

        {/* Filter Tabs - Horizontal scroll on mobile/tablet */}
        <div className="flex items-center sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-2 mb-8 sm:mb-12 px-1 -mx-4 sm:mx-0 px-4 sm:px-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 sm:px-4 py-2 sm:py-2 rounded text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 min-h-[38px] ${
                activeTab === tab.id
                  ? `${theme.bgPrimary} text-white shadow-md shadow-orange-950/40`
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-[#12151b] rounded-xl overflow-hidden border border-zinc-800/90 flex flex-col hover:border-zinc-700 transition-all duration-300 group hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Card Image Area with Badges */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-transparent to-black/30" />

                {/* Price Badge in top-right corner */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-block px-3 py-1 rounded text-xs font-heading font-black tracking-wider uppercase text-white ${theme.bgPrimary} shadow-md`}>
                    {typeof service.price === 'number'
                      ? `FROM ${config.currencySymbol}${service.price}`
                      : `FROM ${service.price}`}
                  </span>
                </div>

                {/* Duration Badge in bottom-left corner */}
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-zinc-300 text-[11px] font-semibold border border-zinc-700/60">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{service.duration}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white uppercase tracking-tight mb-2 group-hover:text-orange-400 transition-colors">
                    <Link to={getServicePageUrl(service)} className="hover:text-orange-400 transition-colors">
                      {service.title}
                    </Link>
                  </h3>
                  
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6 border-t border-zinc-800/80 pt-4">
                    {service.bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className={`w-3.5 h-3.5 ${theme.textPrimary} shrink-0 mt-0.5`} />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <button
                    onClick={() => openBookingModal(service)}
                    className={`w-full py-2.5 px-3 rounded text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer`}
                  >
                    <span>BOOK NOW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    to={getServicePageUrl(service)}
                    className="w-full py-2.5 px-3 rounded text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:text-white transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>SPECS & GUIDE</span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Hub CTA */}
        <div className="text-center mb-12">
          <Link
            to="/services/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md"
          >
            <span>Explore All 5 Detailing Services & Full Comparison Table</span>
            <ArrowRight className="w-4 h-4 text-orange-500" />
          </Link>
        </div>

        {/* Bottom Custom Fleet Callout Banner */}
        <div className="bg-[#151921] rounded-xl p-6 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg bg-zinc-800/80 flex items-center justify-center shrink-0 ${theme.textPrimary}`}>
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-bold text-sm sm:text-base text-white uppercase">
                Need a custom package or fleet quote?
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                We customize packages for classic cars, commercial fleets, and multiple family vehicles.
              </div>
            </div>
          </div>

          <a
            href={`tel:${config.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-5 py-3 rounded text-xs font-heading font-extrabold uppercase tracking-wider text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>CALL {config.ownerName.split(' ')[0].toUpperCase()} DIRECTLY</span>
          </a>
        </div>

      </div>
    </section>
  );
};
