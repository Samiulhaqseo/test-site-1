import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Search, 
  Truck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  ChevronRight, 
  ShieldCheck,
  Phone
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { locationsList } from '../data/locationsData';
import { FaqSection } from '../components/FaqSection';

export const LocationsPage: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = locationsList.filter((loc) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      loc.cityNumber.toLowerCase().includes(q) ||
      loc.cityName.toLowerCase().includes(q) ||
      loc.postcodes.some(p => p.toLowerCase().includes(q)) ||
      loc.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-[#0B0D10] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-white font-medium">Locations</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <Truck className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>Mobile Detailing Van Coverage Across All 6 Cities</span>
          </div>
        </div>
      </div>

      {/* Locations Hero Banner (#0B0D10) */}
      <section className="py-14 sm:py-20 relative overflow-hidden bg-[#0B0D10] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 mb-5">
            <MapPin className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>COVERAGE ACROSS SIX KEY CITIES & DISTRICTS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight uppercase text-white max-w-4xl mx-auto">
            MOBILE CAR DETAILING <span className={theme.textPrimary}>LOCATIONS</span>
          </h1>

          <p className="mt-5 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We deliver 100% mobile car valeting, paint correction, and ceramic coatings straight to your doorstep across Peterhead, Inverurie, Westhill, Stonehaven, and beyond. Zero water or power required from your property.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search by location (Peterhead, Inverurie, Westhill, etc.), town name, or postcode..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all shadow-xl"
            />
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-4" />
          </div>
        </div>
      </section>

      {/* Six Cities Grid (#FFFFFF) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              SCOTTISH SERVICE NETWORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black uppercase text-zinc-950 tracking-tight">
              SELECT YOUR LOCATION FOR LOCAL SERVICE & PRICING
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm mt-2">
              Explore dedicated pages for Peterhead, Inverurie, Stonehaven, Fraserburgh, and Westhill detailing specific mobile routes, postcodes, and weather protection advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((loc) => (
              <div
                key={loc.id}
                className="bg-[#F8FAFC] border border-zinc-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group shadow-sm"
              >
                {/* Card Image */}
                <div className="relative aspect-16/9 overflow-hidden border-b border-zinc-200">
                  <img
                    src={loc.image}
                    alt={`${loc.cityNumber} Car Detailing`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* City Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} shadow-lg`}>
                      {loc.cityNumber}
                    </span>
                  </div>

                  {/* City Name Header */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-heading font-black text-xl text-white uppercase truncate">
                      {loc.cityNumber}: {loc.cityName}
                    </h3>
                    <div className="text-[11px] text-zinc-300 flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span className="truncate">{loc.travelTime}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-zinc-700 text-xs leading-relaxed line-clamp-3 mb-4">
                      {loc.description}
                    </p>

                    {/* Postcodes */}
                    <div className="mb-4">
                      <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                        POSTCODES COVERED:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {loc.postcodes.map(p => (
                          <span key={p} className="px-2 py-0.5 rounded bg-white text-[10px] font-mono text-zinc-800 border border-zinc-300 shadow-2xs">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Popular Services */}
                    <div className="mb-4 space-y-1">
                      <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-zinc-500 mb-1">
                        POPULAR IN {loc.cityName.toUpperCase()}:
                      </div>
                      {loc.popularServices.slice(0, 2).map((srv, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${theme.textPrimary} shrink-0`} />
                          <span className="truncate">{srv}</span>
                        </div>
                      ))}
                    </div>

                    {/* Local Review Quote */}
                    <div className="p-3 rounded-xl bg-white border border-zinc-200 text-[11px] text-zinc-600 italic mb-4 shadow-2xs">
                      "{loc.localReview.quote.slice(0, 95)}..."
                      <div className="text-zinc-900 font-semibold not-italic text-[10px] mt-1">
                        — {loc.localReview.author} ({loc.localReview.vehicle})
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-zinc-200 flex items-center justify-between gap-2">
                    <Link
                      to={`/locations/${loc.slug}/`}
                      className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-heading font-bold uppercase tracking-wider text-center text-white ${theme.bgPrimary} ${theme.bgHover} transition-all flex items-center justify-center gap-1.5 min-h-[40px] shadow-xs`}
                    >
                      <span>VIEW {loc.cityNumber} PAGE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => openBookingModal()}
                      className="py-2.5 px-3 rounded-lg text-xs font-heading font-bold uppercase tracking-wider text-zinc-800 hover:text-zinc-950 bg-white hover:bg-zinc-50 border border-zinc-300 transition-all min-h-[40px] shadow-2xs"
                    >
                      BOOK
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations FAQs (Duplicated from Home Page with exact matching design) */}
      <FaqSection />

      {/* Van Dispatch Guarantee Banner (#0B0D10) */}
      <section className="py-16 sm:py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-white tracking-tight">
              CAN'T FIND YOUR SPECIFIC POSTCODE?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed">
              Our mobile detailing van frequently travels beyond our primary six cities for multi-car bookings, fleet contracts, and machine paint correction packages.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal()}
                className={`px-6 py-3.5 rounded-xl text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl cursor-pointer min-h-[44px]`}
              >
                REQUEST A SPECIAL LOCATION QUOTE
              </button>
              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className="px-5 py-3.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all min-h-[44px] flex items-center gap-2"
              >
                <Phone className={`w-4 h-4 ${theme.textPrimary}`} />
                <span>SPEAK TO HAMISH: {config.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
