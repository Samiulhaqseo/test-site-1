import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye, X, MoveHorizontal } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { defaultGallery } from '../data/defaultConfig';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [sliderPos, setSliderPos] = useState<number>(50);

  const categories = [
    { id: 'all', label: 'ALL' },
    { id: 'correction', label: 'PAINT CORRECTION' },
    { id: 'polishing', label: 'MACHINE POLISHING' },
    { id: 'interior', label: 'INTERIOR CLEANSE' },
    { id: 'decontamination', label: 'DECONTAMINATION' },
    { id: 'valet', label: 'MOBILE VALET' },
    { id: 'ceramic', label: 'CERAMIC COATING' }
  ];

  const filteredGallery = activeCategory === 'all'
    ? defaultGallery
    : defaultGallery.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-[#0B0D10] text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
            AUTHENTIC RECENT WORK
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
            Our Recent Car Detailing & Valeting Work
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-normal">
            Real vehicles detailed across {config.location.split(',')[0]}. High optical clarity, swirl-free gloss, and immaculate interior restoration.
          </p>
        </div>

        {/* Filter Tabs - Horizontal scroll on touch screens */}
        <div className="flex items-center sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-2 mb-8 sm:mb-12 px-1 -mx-4 sm:mx-0 px-4 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 min-h-[36px] ${
                activeCategory === cat.id
                  ? `${theme.bgPrimary} text-white shadow-md shadow-orange-950/40`
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveItem(item);
                setSliderPos(50);
              }}
              className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer hover:border-zinc-600 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 h-72"
            >
              <img
                src={item.afterImage}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Badges and Text */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-heading font-black tracking-widest uppercase px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-amber-400 border border-amber-500/40">
                    {item.categoryLabel}
                  </span>

                  <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-tight mb-1 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="text-center pt-6 border-t border-zinc-800/80">
          <p className="text-zinc-400 text-xs sm:text-sm mb-4">
            Want your vehicle to look like this? Let's discuss your vehicle's requirements.
          </p>

          <button
            onClick={() => openBookingModal()}
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded font-heading font-extrabold text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl shadow-orange-950/30 transition-all cursor-pointer`}
          >
            <span>BOOK YOUR CAR IN WITH {config.ownerName.split(' ')[0].toUpperCase()}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Interactive Lightbox / Before & After Slider Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#12151b] border border-zinc-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <span className={`text-[11px] font-heading font-black tracking-widest uppercase ${theme.textPrimary}`}>
                  {activeItem.categoryLabel}
                </span>
                <h3 className="font-heading font-bold text-lg text-white uppercase">
                  {activeItem.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveItem(null)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Before / After comparison slider or zoom */}
            <div className="relative h-[360px] sm:h-[460px] bg-black select-none overflow-hidden">
              {activeItem.beforeImage ? (
                <>
                  {/* Before image */}
                  <img
                    src={activeItem.beforeImage}
                    alt="Before detailing"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-black/80 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                    BEFORE (SWIRLS & HAZE)
                  </div>

                  {/* After image with clip-path */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                  >
                    <img
                      src={activeItem.afterImage}
                      alt="After detailing"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded bg-orange-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                      AFTER ({config.businessName} GLOSS)
                    </div>
                  </div>

                  {/* Drag line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-lg border-2 border-orange-500">
                      <MoveHorizontal className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Range input for easy dragging */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                    aria-label="Before after comparison slider"
                  />
                </>
              ) : (
                <img
                  src={activeItem.afterImage}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Modal Footer with details & CTA */}
            <div className="p-4 sm:p-5 bg-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-zinc-300 text-xs sm:text-sm max-w-xl">
                {activeItem.description}
              </p>

              <button
                onClick={() => {
                  setActiveItem(null);
                  openBookingModal();
                }}
                className={`w-full sm:w-auto px-6 py-2.5 rounded text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all whitespace-nowrap cursor-pointer`}
              >
                REQUEST THIS DETAIL
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
