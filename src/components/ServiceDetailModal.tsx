import React from 'react';
import { X, Clock, Check, Calendar, ArrowRight, Shield } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const ServiceDetailModal: React.FC = () => {
  const {
    config,
    isDetailModalOpen,
    closeDetailModal,
    selectedServiceForDetail,
    openBookingModal,
    theme
  } = useBusiness();

  if (!isDetailModalOpen || !selectedServiceForDetail) return null;

  const service = selectedServiceForDetail;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#12151b] border border-zinc-800 rounded-2xl max-w-2xl w-full text-white shadow-2xl overflow-hidden relative my-auto max-h-[92vh] flex flex-col">
        
        {/* Header Image with Badges */}
        <div className="relative h-44 xs:h-52 sm:h-64 overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-transparent to-black/60" />

          <button
            onClick={closeDetailModal}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 rounded-full bg-black/70 text-white hover:bg-black transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex flex-col xs:flex-row xs:items-end justify-between gap-1">
            <div>
              <span className={`text-[9px] sm:text-[10px] font-heading font-black tracking-widest uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-black/80 text-white border border-white/20 inline-block mb-1 sm:mb-2`}>
                PROCESS BREAKDOWN
              </span>
              <h3 className="font-heading font-black text-lg sm:text-2xl uppercase tracking-tight text-white leading-tight">
                {service.title}
              </h3>
            </div>

            <div className="text-left xs:text-right shrink-0 mt-1 xs:mt-0">
              <div className={`text-base sm:text-lg font-heading font-black ${theme.textPrimary}`}>
                {typeof service.price === 'number' ? `FROM ${config.currencySymbol}${service.price}` : `FROM ${service.price}`}
              </div>
              <div className="text-[10px] sm:text-[11px] text-zinc-300 font-medium flex items-center xs:justify-end gap-1">
                <Clock className="w-3 h-3 text-zinc-400" />
                <span>{service.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body - Scrollable on mobile */}
        <div className="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1">
          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Recommended For Box */}
          {service.recommendedFor && (
            <div className="p-3 sm:p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-2.5 text-xs">
              <Shield className={`w-4 h-4 ${theme.textPrimary} shrink-0 mt-0.5`} />
              <div>
                <span className="font-bold text-white uppercase tracking-wider text-[10px] sm:text-[11px] block">
                  IDEAL FOR:
                </span>
                <span className="text-zinc-400 text-xs">{service.recommendedFor}</span>
              </div>
            </div>
          )}

          {/* Step-by-Step Multi-Stage Process */}
          <div>
            <h4 className="font-heading font-bold text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 mb-2.5">
              WHAT IS INCLUDED IN THIS SERVICE:
            </h4>
            <div className="space-y-2">
              {(service.fullProcess || service.bulletPoints).map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800/80">
                  <span className={`w-5 h-5 rounded-full ${theme.bgPrimary} text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5`}>
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            <button
              onClick={() => {
                closeDetailModal();
                openBookingModal(service);
              }}
              className={`flex-1 py-3.5 rounded-lg text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]`}
            >
              <span>BOOK THIS PACKAGE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={closeDetailModal}
              className="px-5 py-3 rounded-lg text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 min-h-[44px]"
            >
              CLOSE
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
