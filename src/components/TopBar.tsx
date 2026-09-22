import React from 'react';
import { Phone, Award, Sliders, MapPin } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const TopBar: React.FC = () => {
  const { config, toggleCustomizer, theme } = useBusiness();

  return (
    <header className="bg-[#0B0D10] text-zinc-400 text-xs py-2 px-3 sm:px-4 border-b border-zinc-800/80 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Experience & Coverage statement */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-left truncate">
          <span className="inline-flex items-center gap-1.5 font-semibold text-zinc-200 uppercase tracking-wider text-[10px] sm:text-[11px] shrink-0">
            <Award className={`w-3.5 h-3.5 ${theme.textPrimary}`} />
            <span>{config.yearsExperience} YRS EXP</span>
          </span>
          <span className="text-zinc-600 hidden xs:inline">•</span>
          <span className="inline-flex items-center gap-1 text-zinc-400 text-[10px] sm:text-xs truncate">
            <MapPin className="w-3 h-3 text-zinc-500 shrink-0 hidden sm:inline" />
            <span className="truncate">Mobile in {config.location.split(',')[0]}</span>
          </span>
        </div>

        {/* Right side contact & template controls */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href={`tel:${config.phone.replace(/\s+/g, '')}`}
            className={`flex items-center gap-1.5 font-medium transition-colors ${theme.textPrimary} hover:text-white text-[11px] sm:text-xs py-1`}
            id="topbar-phone-link"
          >
            <Phone className="w-3 h-3 shrink-0" />
            <span className="hidden sm:inline">{config.phone}</span>
            <span className="sm:hidden font-bold">Call Now</span>
          </a>

          <button
            onClick={toggleCustomizer}
            className="flex items-center gap-1 bg-zinc-800/90 hover:bg-zinc-700 active:bg-zinc-600 text-zinc-200 px-2 py-1 sm:px-2.5 sm:py-0.5 rounded text-[10px] sm:text-[11px] font-medium border border-zinc-700 transition-colors cursor-pointer min-h-[32px] sm:min-h-0"
            id="topbar-edit-template-btn"
            title="Edit Business Details & Theme"
          >
            <Sliders className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="hidden xs:inline">Customize</span>
          </button>
        </div>
      </div>
    </header>
  );
};
