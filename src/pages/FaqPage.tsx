import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  Plus, 
  Minus, 
  Phone, 
  ChevronRight,
  Calendar
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

interface CategorizedFaq {
  id: string;
  category: 'mobile' | 'ceramic' | 'interior' | 'weather' | 'pricing';
  question: string;
  answer: string;
}

const detailedFaqs: CategorizedFaq[] = [
  {
    id: 'faq-1',
    category: 'mobile',
    question: 'Do you come directly to my location in Aberdeenshire?',
    answer: 'Yes! MOAR DETAILS is a 100% mobile valeting and detailing service. We come directly to your home driveway, apartment parking, or workplace anywhere across Aberdeen City and throughout Aberdeenshire including Westhill, Dyce, Kingswells, Cults, Banchory, Inverurie, Stonehaven, and Ellon.'
  },
  {
    id: 'faq-2',
    category: 'mobile',
    question: 'Do you need access to water and electricity?',
    answer: 'Our bespoke mobile detailing van is completely self-contained with its own pure spot-free water tank and onboard whisper-quiet power generation. We can comfortably work in driveways, corporate car parks, or residential streets without needing to plug into your supplies unless specifically requested.'
  },
  {
    id: 'faq-3',
    category: 'mobile',
    question: 'What is the difference between a quick car wash and detailing?',
    answer: 'A standard roadside hand car wash or automated roller wash frequently uses harsh caustic traffic film removers, dirty sponges, and gritty water that permanently score clear coats with swirl marks. Detailing is a surgical, restorative craft utilizing pH-neutral snow foams, two-bucket hand washing with grit guards, chemical fallout dissolution, paint depth measurement, and precision dual-action machine polishing.'
  },
  {
    id: 'faq-4',
    category: 'mobile',
    question: 'How long does a typical service take?',
    answer: 'A comprehensive Mobile Valet usually takes 2 to 3 hours. An Interior Deep Cleanse takes 2.5 to 4 hours. Multi-stage Machine Polishing or Ceramic Coating packages require between 1 and 2 full working days to allow proper surface correction and coating cure time.'
  },
  {
    id: 'faq-5',
    category: 'pricing',
    question: 'How do I pay for my service?',
    answer: 'We accept all major credit/debit cards on-site via our mobile contactless card terminal (Visa, Mastercard, Apple Pay, Google Pay), instant bank transfer, or cash upon thorough inspection and complete customer satisfaction.'
  },
  {
    id: 'faq-6',
    category: 'mobile',
    question: 'Do I need to stay while you work on the vehicle?',
    answer: 'Not at all. You are welcome to inspect the vehicle with Hamish at the start, hand over the keys, and relax indoors or continue your workday. We will notify you 15 minutes before completion so you can conduct a final walkthrough inspection.'
  },
  {
    id: 'faq-7',
    category: 'ceramic',
    question: 'How often should I book a mobile valet or detail?',
    answer: 'For everyday commuter vehicles, we recommend a maintenance mobile valet every 3 to 4 weeks. High-grade waxes and ceramic sealants should receive a chemical decontamination de-salting wash every 4 to 6 months to maintain peak water-beading performance.'
  },
  {
    id: 'faq-8',
    category: 'pricing',
    question: 'How do I book an appointment with Hamish?',
    answer: 'You can tap any of the "Book Now / Get Quote" buttons to submit your vehicle details, or call/message Hamish directly at +44 7354 690065. We will confirm your preferred date, time slot, and address promptly.'
  },
  {
    id: 'f-2',
    category: 'mobile',
    question: 'Can you detail my car while I am at work or away from home?',
    answer: 'Yes, this is one of our most popular booking formats. We frequently service cars in corporate car parks, office buildings, and hospital staff lots across Aberdeen, Westhill, Dyce, and surrounding areas. You simply unlock the vehicle for us or leave keys with reception.'
  },
  {
    id: 'f-3',
    category: 'mobile',
    question: 'How much space do you need around the vehicle?',
    answer: 'We ideally need about 1 to 1.5 metres of clearance around all vehicle panels so our technicians can safely position microfibre wash carts and machine polishing lights without brushing against obstacles.'
  },
  {
    id: 'f-4',
    category: 'weather',
    question: 'What happens if it rains on the day of my booking?',
    answer: 'Scottish weather can be unpredictable! For routine valets and interior extractions, we carry heavy-duty commercial pop-up vehicle canopies. If severe gales or torrential rainfall prevent safe machine polishing or ceramic bonding, we contact you well in advance to reschedule to the next convenient slot with zero cancellation fees.'
  },
  {
    id: 'f-5',
    category: 'ceramic',
    question: 'How long does a 9H ceramic coating actually last?',
    answer: 'Depending on the package selected, our certified high-solids SiO2 quartz coatings provide verified durability of 2 to 5 years. Unlike waxes that wash away within 6-8 weeks, ceramic quartz cross-links into the clear coat pores and can only be removed via machine abrasives.'
  },
  {
    id: 'f-6',
    category: 'ceramic',
    question: 'Can I wash my car immediately after ceramic coating?',
    answer: 'We cure the ceramic coating under short-wave infrared heat lamps before handover so the vehicle can be safely driven in the rain immediately. However, we advise avoiding high-pressure washes and shampoos for 7 days to allow full chemical polymer cross-linking.'
  },
  {
    id: 'f-7',
    category: 'ceramic',
    question: 'Will ceramic coating protect against rock chips?',
    answer: 'No ceramic coating can stop high-velocity gravel or stone chips (only physical Paint Protection Film / PPF can do that). What ceramic coatings do prevent is chemical damage from bird droppings, bug splatter etching, acid rain, road salt oxidation, and minor wash swirls.'
  },
  {
    id: 'f-8',
    category: 'interior',
    question: 'Will my seats be soaking wet after interior shampooing?',
    answer: 'No. Our industrial Kärcher extraction units inject heated water and instantly vacuum it out under extreme negative lift pressure, recovering over 90% of moisture immediately. In normal room temperature conditions, upholstery is touch-dry within 1 to 2 hours.'
  },
  {
    id: 'f-9',
    category: 'interior',
    question: 'Can you completely eliminate pet hair and smoke odours?',
    answer: 'Yes. We utilize specialized rubber hair lifters, pneumatic high-pressure blowers for deep carpet seams, and medical-grade dry vapor steam combined with enzymatic bacterial neutralizers that eradicate odour-causing bacteria rather than merely masking them with cheap perfumes.'
  },
  {
    id: 'f-10',
    category: 'pricing',
    question: 'How do you calculate vehicle pricing?',
    answer: 'Our pricing is determined by vehicle category (Hatchback/Saloon, Estate/SUV, Large 4x4, Commercial Van) and condition. Our website quotes are transparent and fixed—we do not surprise you with hidden arrival fees.'
  }
];

export const FaqPage: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  // Open the first item by default, matching the home page
  const [openId, setOpenId] = useState<string>('faq-1');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'mobile', label: 'Mobile Van & Utilities' },
    { id: 'ceramic', label: 'Ceramic Coating & Paint' },
    { id: 'interior', label: 'Interior & Stains' },
    { id: 'weather', label: 'Scottish Weather' },
    { id: 'pricing', label: 'Pricing & Payment' }
  ];

  const filteredFaqs = detailedFaqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || (
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q)
    );
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (faqId: string) => {
    setOpenId(prev => prev === faqId ? '' : faqId);
  };

  return (
    <div className="bg-[#0B0D10] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-white font-medium">FAQs</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <HelpCircle className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>Transparent Valeting & Detailing Answers</span>
          </div>
        </div>
      </div>

      {/* Hero Banner (#0B0D10) */}
      <section className="py-14 sm:py-20 relative overflow-hidden bg-[#0B0D10] border-b border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 mb-5">
            <HelpCircle className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>KNOWLEDGE BASE & GUIDELINES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight uppercase text-white">
            FREQUENTLY ASKED <span className={theme.textPrimary}>QUESTIONS</span>
          </h1>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our mobile service vans, paint correction safety, curing times, and booking policies in {config.location.split(',')[0]}.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <input
              type="text"
              placeholder="Search questions (e.g. water, electricity, weather, ceramic)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-all shadow-xl"
            />
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-4" />
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section (#FFFFFF) - EXACT DESIGN MATCHING HOME PAGE */}
      <section className="py-16 sm:py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header matching Home Page FAQ styling */}
          <div className="text-center mb-10">
            <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-2`}>
              HAVE QUESTIONS?
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-zinc-950 tracking-tight uppercase leading-tight mb-4">
              CAR DETAILING FAQS
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto">
              Everything you need to know about our mobile valeting, machine polishing, water/power requirements, and booking in {config.location.split(',')[0]}.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase whitespace-nowrap transition-all cursor-pointer min-h-[40px] shadow-2xs ${
                    activeCategory === cat.id
                      ? `${theme.bgPrimary} text-white shadow-md`
                      : 'bg-[#F8FAFC] text-zinc-700 hover:text-zinc-950 border border-zinc-300 hover:bg-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion List - EXACT home page structure */}
          {filteredFaqs.length === 0 ? (
            <div className="py-12 text-center text-zinc-500 bg-zinc-50 rounded-xl border border-zinc-200 p-8 mb-12">
              No questions found matching "{searchQuery}". Try another keyword or call us directly.
            </div>
          ) : (
            <div className="space-y-3 mb-12">
              {filteredFaqs.map((faq, idx) => {
                const currentFaqId = faq.id || `faq-${idx}`;
                const isOpen = openId === currentFaqId;
                return (
                  <div
                    key={currentFaqId}
                    className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                      isOpen ? 'border-zinc-300 bg-zinc-50/50' : 'border-zinc-200 bg-white hover:border-zinc-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(currentFaqId)}
                      className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-zinc-900">
                        {faq.question}
                      </span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isOpen ? `${theme.textPrimary} bg-orange-50` : 'text-zinc-400 bg-zinc-100'}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 animate-in fade-in slide-in-from-top-1 duration-150">
                        {faq.answer.replace(/MOAR DETAILS/g, config.businessName).replace(/Aberdeenshire/g, config.location.split(',')[0])}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Help Contact Card - EXACT home page layout */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-black text-sm uppercase text-zinc-900">
                  HAVE MORE SPECIFIC QUESTIONS?
                </h4>
                <p className="text-zinc-600 text-xs mt-0.5">
                  Call our head detailer directly or request a custom callback.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className={`w-full sm:w-auto px-5 py-2.5 rounded font-heading font-bold text-xs uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} transition-all flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px]`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL: {config.phone}</span>
              </a>
              <button
                onClick={() => openBookingModal()}
                className="w-full sm:w-auto px-5 py-2.5 rounded font-heading font-bold text-xs uppercase tracking-wider text-zinc-800 bg-white hover:bg-zinc-100 border border-zinc-300 transition-all flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px] cursor-pointer"
              >
                BOOK ONLINE
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner (#0B0D10) */}
      <section className="py-16 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-heading font-black uppercase tracking-tight">
              READY FOR A SHOWROOM FINISH?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Book our mobile van to your driveway or workplace in under 60 seconds.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => openBookingModal()}
                className={`px-8 py-3.5 rounded-xl text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl cursor-pointer min-h-[44px] flex items-center gap-2`}
              >
                <span>BOOK MOBILE DETAILING</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
