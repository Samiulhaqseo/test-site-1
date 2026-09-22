import React, { useState } from 'react';
import { Plus, Minus, Phone, HelpCircle } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { defaultFaqs } from '../data/defaultConfig';

export interface FaqItemType {
  id?: string;
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  faqs?: FaqItemType[];
  className?: string;
  children?: React.ReactNode;
  dark?: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  id = 'faqs',
  badge = 'HAVE QUESTIONS?',
  title = 'Frequently Asked Questions About Car Detailing',
  subtitle,
  faqs,
  className = '',
  children,
  dark = false
}) => {
  const { config, theme } = useBusiness();
  const faqList = faqs || defaultFaqs;
  const initialOpenId = faqList[0]?.id || 'faq-1';
  // Open the first question by default just like on the home page
  const [openId, setOpenId] = useState<string>(initialOpenId);

  const toggleFaq = (faqId: string) => {
    setOpenId(prev => prev === faqId ? '' : faqId);
  };

  const resolvedSubtitle = subtitle || 
    `Everything you need to know about our mobile valeting, machine polishing, water/power requirements, and booking in ${config.location.split(',')[0]}.`;

  return (
    <section
      id={id}
      className={`py-20 border-b transition-colors duration-200 ${
        dark
          ? 'bg-[#0B0D10] text-white border-zinc-800'
          : 'bg-white text-zinc-900 border-zinc-200'
      } ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
            {badge}
          </span>
          <h2 className={`font-heading font-black text-2xl sm:text-4xl tracking-tight uppercase leading-tight mb-4 ${
            dark ? 'text-white' : 'text-zinc-950'
          }`}>
            {title}
          </h2>
          <p className={`text-xs sm:text-sm font-normal ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {resolvedSubtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-12">
          {faqList.map((faq, idx) => {
            const currentFaqId = faq.id || `faq-${idx}`;
            const isOpen = openId === currentFaqId;
            return (
              <div
                key={currentFaqId}
                className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                  dark
                    ? isOpen
                      ? 'border-zinc-700 bg-zinc-900/90'
                      : 'border-zinc-800/90 bg-[#12151b] hover:border-zinc-700'
                    : isOpen
                      ? 'border-zinc-300 bg-zinc-50/50'
                      : 'border-zinc-200 bg-white hover:border-zinc-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(currentFaqId)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <h3 className={`font-heading font-bold text-xs sm:text-sm uppercase tracking-tight ${
                    dark ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                    dark
                      ? isOpen
                        ? `${theme.textPrimary} bg-orange-950/50`
                        : 'text-zinc-400 bg-zinc-800'
                      : isOpen
                        ? `${theme.textPrimary} bg-orange-50`
                        : 'text-zinc-400 bg-zinc-100'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t animate-in fade-in slide-in-from-top-1 duration-150 ${
                    dark
                      ? 'text-zinc-300 border-zinc-800'
                      : 'text-zinc-600 border-zinc-200/60'
                  }`}>
                    {faq.answer.replace(/MOAR DETAILS/g, config.businessName).replace(/Aberdeenshire/g, config.location.split(',')[0])}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Helpline Banner */}
        <div className={`p-5 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
          dark
            ? 'bg-[#12151b] border-zinc-800'
            : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
              dark
                ? 'bg-zinc-800 text-orange-500'
                : `bg-white shadow-sm ${theme.textPrimary}`
            }`}>
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className={`text-xs sm:text-sm font-bold ${dark ? 'text-white' : 'text-zinc-900'}`}>
                Have a question not listed here?
              </div>
              <div className={`text-xs ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Call or message {config.ownerName.split(' ')[0]} directly for immediate advice on your car's paintwork or interior.
              </div>
            </div>
          </div>

          <a
            href={`tel:${config.phone.replace(/\s+/g, '')}`}
            className={`w-full sm:w-auto px-5 py-2.5 rounded font-heading font-bold text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} transition-all flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px]`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>CALL: {config.phone}</span>
          </a>
        </div>

        {/* Optional Extra Children */}
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}

      </div>
    </section>
  );
};
