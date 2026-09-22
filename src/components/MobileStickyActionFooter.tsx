import React from 'react';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const MobileStickyActionFooter: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0c0e12]/95 backdrop-blur-md border-t border-zinc-800 p-2.5 px-3 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.6)]"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${config.phone.replace(/\s+/g, '')}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-zinc-900 active:bg-zinc-800 border border-zinc-700 text-white text-xs font-heading font-bold uppercase tracking-wider min-h-[44px] transition-colors"
          id="mobile-bottom-call-btn"
        >
          <Phone className={`w-4 h-4 ${theme.textPrimary} shrink-0`} />
          <span className="truncate">Call {config.phone.split(' ')[0] || config.phone}</span>
        </a>

        <button
          onClick={() => openBookingModal()}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg ${theme.bgPrimary} ${theme.bgHover} active:scale-[0.98] text-white text-xs font-heading font-black uppercase tracking-wider min-h-[44px] shadow-lg shadow-orange-950/40 transition-all`}
          id="mobile-bottom-quote-btn"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span>Book / Quote</span>
        </button>
      </div>
    </div>
  );
};
