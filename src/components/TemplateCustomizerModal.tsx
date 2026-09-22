import React, { useState } from 'react';
import { X, Sliders, Palette, Building2, DollarSign, Download, RotateCcw, Check, Copy } from 'lucide-react';
import { useBusiness, themeMap } from '../context/BusinessContext';
import { AccentColor } from '../types';

export const TemplateCustomizerModal: React.FC = () => {
  const {
    config,
    updateConfig,
    resetConfig,
    services,
    updateServicePrice,
    isCustomizerOpen,
    setIsCustomizerOpen,
    theme
  } = useBusiness();

  const [activeTab, setActiveTab] = useState<'profile' | 'theme' | 'pricing' | 'export'>('profile');
  const [copied, setCopied] = useState(false);

  if (!isCustomizerOpen) return null;

  const colorOptions: { id: AccentColor; label: string; bg: string }[] = [
    { id: 'orange', label: 'Apex Orange (Reference)', bg: 'bg-orange-600' },
    { id: 'red', label: 'Performance Crimson', bg: 'bg-red-600' },
    { id: 'blue', label: 'Electric Blue', bg: 'bg-sky-600' },
    { id: 'emerald', label: 'British Racing Green', bg: 'bg-emerald-600' },
    { id: 'amber', label: 'Luxury Gold', bg: 'bg-amber-600' },
  ];

  const handleCopyJson = () => {
    const data = {
      business: config,
      services: services
    };
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#12151b] border border-zinc-800 rounded-2xl max-w-2xl w-full text-white shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg ${theme.bgPrimary} flex items-center justify-center text-white shrink-0`}>
              <Sliders className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-heading font-black text-sm sm:text-base uppercase tracking-tight text-white truncate">
                TEMPLATE CUSTOMIZER & EDITOR
              </h3>
              <div className="text-[11px] sm:text-xs text-zinc-400 truncate">
                Adapt this conversion template for any local car detailing business
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher - horizontal scroll on small devices */}
        <div className="flex border-b border-zinc-800 bg-zinc-900/50 p-2 gap-1 overflow-x-auto no-scrollbar shrink-0">
          {[
            { id: 'profile', label: 'Business Profile', icon: Building2 },
            { id: 'theme', label: 'Color Accent', icon: Palette },
            { id: 'pricing', label: 'Services & Pricing', icon: DollarSign },
            { id: 'export', label: 'Export & Backup', icon: Download },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shrink-0 min-h-[40px] ${
                  isActive
                    ? `${theme.bgPrimary} text-white`
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Business Profile */}
        {activeTab === 'profile' && (
          <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-heading font-bold uppercase text-zinc-400 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  value={config.businessName}
                  onChange={(e) => updateConfig({ businessName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase text-zinc-400 mb-1">
                  Tagline / Sub-badge
                </label>
                <input
                  type="text"
                  value={config.tagline}
                  onChange={(e) => updateConfig({ tagline: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase text-zinc-400 mb-1">
                  Owner / Specialist Name
                </label>
                <input
                  type="text"
                  value={config.ownerName}
                  onChange={(e) => updateConfig({ ownerName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase text-zinc-400 mb-1">
                  Years of Experience
                </label>
                <input
                  type="number"
                  value={config.yearsExperience}
                  onChange={(e) => updateConfig({ yearsExperience: Number(e.target.value) || 0 })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase text-zinc-400 mb-1">
                  Phone Number (Tap-to-call)
                </label>
                <input
                  type="text"
                  value={config.phone}
                  onChange={(e) => updateConfig({ phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase text-zinc-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={config.email}
                  onChange={(e) => updateConfig({ email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase text-zinc-400 mb-1">
                  Location / City / County
                </label>
                <input
                  type="text"
                  value={config.location}
                  onChange={(e) => updateConfig({ location: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase text-zinc-400 mb-1">
                  Currency Symbol
                </label>
                <input
                  type="text"
                  value={config.currencySymbol}
                  onChange={(e) => updateConfig({ currencySymbol: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:border-orange-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-heading font-bold uppercase text-zinc-400 mb-1">
                Serviced Towns (Comma-separated for Coverage Checker)
              </label>
              <textarea
                rows={2}
                value={config.servicedTowns.join(', ')}
                onChange={(e) =>
                  updateConfig({
                    servicedTowns: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:border-orange-500 outline-none"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Theme Accent */}
        {activeTab === 'theme' && (
          <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
            <p className="text-zinc-400 text-xs">
              Choose the brand accent color used for buttons, highlight badges, and key icons across the entire website template.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {colorOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => updateConfig({ accentColor: opt.id })}
                  className={`p-3 sm:p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer min-h-[44px] ${
                    config.accentColor === opt.id
                      ? 'border-white bg-zinc-800 ring-2 ring-white/30'
                      : 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full ${opt.bg} shadow-md`} />
                    <span className="text-xs font-bold text-white">{opt.label}</span>
                  </div>
                  {config.accentColor === opt.id && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Pricing & Services */}
        {activeTab === 'pricing' && (
          <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
            <p className="text-zinc-400 text-xs">
              Edit the starting prices for each service. Changes update instantly across all service cards and the booking price estimator.
            </p>

            <div className="space-y-3">
              {services.map((srv) => (
                <div key={srv.id} className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">{srv.title}</div>
                    <div className="text-[10px] text-zinc-400 truncate">{srv.duration}</div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-zinc-400">From {config.currencySymbol}</span>
                    <input
                      type="text"
                      value={srv.price}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val.toUpperCase() === 'POA') {
                          updateServicePrice(srv.id, 'POA');
                        } else {
                          const num = Number(val);
                          updateServicePrice(srv.id, isNaN(num) ? val as any : num);
                        }
                      }}
                      className="w-20 px-2 py-1.5 rounded bg-zinc-800 border border-zinc-700 text-xs font-bold text-white text-center min-h-[38px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Export */}
        {activeTab === 'export' && (
          <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
            <p className="text-zinc-400 text-xs leading-relaxed">
              Export your tailored website template configuration. You can copy the business parameters as JSON or reset the website back to the Aberdeenshire reference defaults.
            </p>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleCopyJson}
                className="w-full py-3 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY BUSINESS CONFIG (JSON)'}</span>
              </button>

              <button
                onClick={() => {
                  if (confirm('Reset template to reference defaults?')) {
                    resetConfig();
                  }
                }}
                className="w-full py-3 px-4 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-800/80 text-red-300 text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <RotateCcw className="w-4 h-4" />
                <span>RESET TO DEFAULT REFERENCE</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-900/80 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-[11px] text-zinc-400">
            Changes are saved in browser local storage automatically.
          </span>

          <button
            onClick={() => setIsCustomizerOpen(false)}
            className={`px-5 py-2 rounded-lg text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} cursor-pointer`}
          >
            DONE & CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};
