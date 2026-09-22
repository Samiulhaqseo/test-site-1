import React from 'react';
import { Sliders, Sparkles } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const FloatingEditorButton: React.FC = () => {
  const { toggleCustomizer, theme } = useBusiness();

  return (
    <div className="fixed bottom-20 md:bottom-5 right-4 md:right-5 z-40 flex flex-col gap-2 items-end">
      <button
        onClick={toggleCustomizer}
        className="group bg-zinc-900/95 hover:bg-zinc-800 text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-2xl border border-zinc-700/80 flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
        id="floating-template-editor-btn"
        title="Customize Website Template (Business name, phone, colors, prices)"
      >
        <div className={`w-6 h-6 rounded-full ${theme.bgPrimary} flex items-center justify-center text-white shrink-0`}>
          <Sliders className="w-3.5 h-3.5" />
        </div>
        <span className="hidden sm:inline">Customize Template</span>
      </button>
    </div>
  );
};
