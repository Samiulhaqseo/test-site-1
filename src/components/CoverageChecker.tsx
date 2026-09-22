import React, { useState } from 'react';
import { MapPin, Search, CheckCircle, Truck, Phone, Navigation, ExternalLink } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export interface CoverageCheckerProps {
  title?: string;
  descriptionParagraphs?: string[];
  defaultQuery?: string;
}

export const CoverageChecker: React.FC<CoverageCheckerProps> = ({
  title = "Mobile Car Detailing & Valeting Across Aberdeenshire",
  descriptionParagraphs,
  defaultQuery = ''
}) => {
  const { config, openBookingModal, theme } = useBusiness();
  const [query, setQuery] = useState(defaultQuery);
  const defaultLocation = `${config.location || 'Aberdeenshire, UK'}`;
  const [mapLocation, setMapLocation] = useState(defaultLocation);
  const [result, setResult] = useState<{ checked: boolean; covered: boolean; message: string } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const q = query.toLowerCase().trim();
    setMapLocation(`${query.trim()}, Aberdeenshire, UK`);
    // Check if query matches any serviced town or common postcodes
    const isCovered = config.servicedTowns.some(town => town.toLowerCase().includes(q) || q.includes(town.toLowerCase())) ||
      q.startsWith('ab') || q.includes('aberdeen') || q.includes('stone') || q.includes('inver') || q.includes('west') || q.includes('dyce');

    if (isCovered) {
      setResult({
        checked: true,
        covered: true,
        message: `Great news! "${query}" is within our primary daily mobile valeting & detailing service radius. No travel surcharge applied.`
      });
    } else {
      setResult({
        checked: true,
        covered: true, // We still service surrounding areas
        message: `We can service "${query}"! Depending on exact mileage, a small travel fee or minimum service booking may apply. Contact Hamish for exact slot confirmation.`
      });
    }
  };

  return (
    <section id="coverage" className="py-20 bg-[#f8fafc] text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Postcode checker & town chips */}
          <div className="lg:col-span-7">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              MOBILE CONVENIENCE
            </span>

            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-[1.15] mb-5">
              {title}
            </h2>

            <div className="space-y-3 text-zinc-700 text-sm sm:text-base leading-relaxed mb-8">
              {descriptionParagraphs && descriptionParagraphs.length > 0 ? (
                descriptionParagraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))
              ) : (
                <>
                  <p>
                    Based in {config.location.split(',')[0]}, we bring our mobile valeting and detailing unit directly to you. We regularly detail vehicles across{' '}
                    <strong className="text-zinc-900 font-semibold">
                      {config.servicedTowns.slice(0, 6).join(', ')}
                    </strong>
                    , and surrounding districts.
                  </p>
                  <p>
                    Clients call upon <strong className="text-zinc-900 font-semibold">{config.businessName}</strong> because they know they'll receive consistent, high-standard results, honest pricing, and true attention to detail every single time — all without wasting hours sitting in waiting areas or arranging drop-offs.
                  </p>
                </>
              )}
            </div>

            {/* Interactive Postcode / Town Checker Form */}
            <div className="bg-white p-5 rounded-xl border border-zinc-300 shadow-sm mb-6">
              <label htmlFor="coverage-input" className="block text-xs font-heading font-black tracking-wider uppercase text-zinc-800 mb-2">
                CHECK IF WE SERVICE YOUR POSTCODE OR TOWN:
              </label>

              <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <MapPin className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="coverage-input"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. Westhill, Dyce, AB15, Stonehaven..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm outline-none text-zinc-900 placeholder:text-zinc-400"
                  />
                </div>
                <button
                  type="submit"
                  className={`px-6 py-2.5 rounded-lg text-xs font-heading font-black tracking-wider uppercase text-white ${theme.bgPrimary} ${theme.bgHover} transition-colors flex items-center justify-center gap-1.5 cursor-pointer`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>CHECK</span>
                </button>
              </form>

              {/* Instant Checker Result Notice */}
              {result && (
                <div className="mt-3 p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-start gap-2 animate-in fade-in">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1 font-medium">{result.message}</div>
                </div>
              )}
            </div>

            {/* Regular Serviced Areas list */}
            <div>
              <div className="text-[11px] font-heading font-black uppercase tracking-wider text-zinc-600 mb-2.5">
                REGULAR SERVICED AREAS:
              </div>
              <div className="flex flex-wrap gap-2">
                {config.servicedTowns.map((town) => (
                  <button
                    key={town}
                    onClick={() => {
                      setQuery(town);
                      setMapLocation(`${town}, Aberdeenshire, UK`);
                      setResult({
                        checked: true,
                        covered: true,
                        message: `Verified: ${town} is covered by our daily mobile service routes!`
                      });
                    }}
                    className="text-xs px-3 py-1.5 rounded bg-zinc-200/80 hover:bg-zinc-300 text-zinc-800 font-medium transition-colors cursor-pointer"
                  >
                    {town}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Map of Service Radius */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-zinc-300 shadow-xl overflow-hidden flex flex-col">
              
              {/* Map Card Header */}
              <div className="p-4 bg-zinc-900 text-white flex items-center justify-between gap-3 border-b border-zinc-800">
                <div className="flex items-center gap-2 min-w-0">
                  <div className={`w-8 h-8 rounded-lg ${theme.bgPrimary} flex items-center justify-center text-white shrink-0`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-zinc-400">
                      SERVICE AREA MAP
                    </div>
                    <div className="text-xs font-heading font-bold text-white uppercase truncate">
                      {mapLocation.replace(', UK', '')}
                    </div>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapLocation)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-[11px] font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <span>Open Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="relative w-full h-[360px] sm:h-[400px] bg-zinc-100">
                <iframe
                  title={`Google Map showing service area for ${mapLocation}`}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(mapLocation)}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
                />
              </div>

              {/* Map Footer Information & Call CTA */}
              <div className="p-4 bg-zinc-50 border-t border-zinc-200 space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-600">
                  <span className="flex items-center gap-1.5">
                    <Truck className={`w-3.5 h-3.5 ${theme.textPrimary}`} />
                    <span className="font-medium">100% Self-Contained Mobile Unit</span>
                  </span>
                  <span className="text-[11px] text-zinc-500">Zero Travel Surcharge</span>
                </div>

                <a
                  id="map-call-btn"
                  href={`tel:${config.phone.replace(/\s+/g, '')}`}
                  className={`w-full py-3 px-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all flex items-center justify-center gap-2 text-center cursor-pointer min-h-[44px]`}
                >
                  <Phone className="w-4 h-4" />
                  <span>BOOK VALET AT YOUR LOCATION: {config.phone}</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
