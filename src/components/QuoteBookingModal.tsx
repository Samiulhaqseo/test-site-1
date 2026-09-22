import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Car, MapPin, User, Phone, Mail, ShieldCheck } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { BookingFormData, ServiceItem } from '../types';

export const QuoteBookingModal: React.FC = () => {
  const {
    config,
    services,
    isBookingOpen,
    closeBookingModal,
    selectedServiceForBooking,
    theme
  } = useBusiness();

  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: '',
    vehicleType: 'Hatchback / Saloon',
    name: '',
    phone: '',
    email: '',
    postcode: '',
    date: '',
    timeSlot: 'Morning (8am - 12pm)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServiceForBooking) {
      setFormData(prev => ({ ...prev, serviceId: selectedServiceForBooking.id }));
    } else if (services.length > 0) {
      setFormData(prev => ({ ...prev, serviceId: prev.serviceId || services[0].id }));
    }
  }, [selectedServiceForBooking, services]);

  if (!isBookingOpen) return null;

  const allServiceChoices = [...services];
  if (selectedServiceForBooking && !allServiceChoices.some(s => s.id === selectedServiceForBooking.id)) {
    allServiceChoices.unshift(selectedServiceForBooking);
  }

  const currentService = allServiceChoices.find(s => s.id === formData.serviceId) || allServiceChoices[0];

  // Vehicle size price modifier
  const vehicleMultipliers: Record<string, number> = {
    'Hatchback / Saloon': 0,
    'SUV / Estate': 15,
    'Large 4x4 / Truck': 30,
    'Commercial Van': 45
  };

  const basePrice = typeof currentService?.price === 'number' ? currentService.price : 0;
  const sizeAdjustment = vehicleMultipliers[formData.vehicleType] || 0;
  const estimatedTotal = basePrice > 0 ? basePrice + sizeAdjustment : 'POA';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#12151b] border border-zinc-800 rounded-2xl max-w-2xl w-full text-white shadow-2xl overflow-hidden relative my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg ${theme.bgPrimary} flex items-center justify-center text-white shrink-0`}>
              <Calendar className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-heading font-black text-sm sm:text-lg uppercase tracking-tight text-white truncate">
                BOOK APPOINTMENT / GET QUOTE
              </h3>
              <div className="text-[11px] sm:text-xs text-zinc-400 truncate">
                100% Mobile Service directly at your doorstep in {config.location.split(',')[0]}
              </div>
            </div>
          </div>

          <button
            onClick={closeBookingModal}
            className="p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-500/50">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h4 className="font-heading font-black text-2xl uppercase tracking-tight text-white">
              BOOKING REQUEST RECEIVED!
            </h4>

            <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. {config.ownerName} will review your slot for{' '}
              <span className="text-orange-400 font-semibold">{currentService?.title}</span> and contact you shortly at{' '}
              <span className="text-white font-semibold">{formData.phone}</span> to confirm arrival time.
            </p>

            {/* Booking Summary Box */}
            <div className="bg-zinc-900/90 rounded-xl p-4 border border-zinc-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Service:</span>
                <span className="font-bold text-white">{currentService?.title}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Vehicle Type:</span>
                <span className="font-bold text-white">{formData.vehicleType}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Location / Postcode:</span>
                <span className="font-bold text-white">{formData.postcode || config.location}</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-bold">
                <span className="text-zinc-300">Estimated Total:</span>
                <span className={theme.textPrimary}>
                  {typeof estimatedTotal === 'number'
                    ? `${config.currencySymbol}${estimatedTotal}`
                    : estimatedTotal}
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className={`px-6 py-3 rounded text-xs font-heading font-bold uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} flex items-center justify-center gap-2`}
              >
                <Phone className="w-4 h-4" />
                <span>CALL HAMISH FOR INSTANT CONFIRMATION</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  closeBookingModal();
                }}
                className="px-6 py-3 rounded text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 bg-zinc-800 hover:bg-zinc-700"
              >
                DONE
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Form */
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1">
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-heading font-bold tracking-wider uppercase text-zinc-300 mb-2">
                1. SELECT DETAILING SERVICE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {allServiceChoices.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceId: srv.id })}
                    className={`p-3 rounded-lg text-left border transition-all cursor-pointer flex items-center justify-between ${
                      formData.serviceId === srv.id
                        ? `${theme.borderPrimary} bg-zinc-800/90 ring-1 ${theme.ringPrimary}`
                        : 'border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/50'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white">{srv.title}</div>
                      <div className="text-[10px] text-zinc-400">{srv.duration}</div>
                    </div>
                    <div className={`text-xs font-black ${theme.textPrimary}`}>
                      {typeof srv.price === 'number' ? `${config.currencySymbol}${srv.price}` : srv.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Vehicle Size */}
            <div>
              <label className="block text-xs font-heading font-bold tracking-wider uppercase text-zinc-300 mb-2">
                2. VEHICLE CATEGORY (Affects wash surface area)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Hatchback / Saloon', 'SUV / Estate', 'Large 4x4 / Truck', 'Commercial Van'] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setFormData({ ...formData, vehicleType: v })}
                    className={`p-2.5 rounded-lg text-center border text-xs font-semibold transition-all cursor-pointer ${
                      formData.vehicleType === v
                        ? `${theme.borderPrimary} ${theme.bgPrimary} text-white`
                        : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    <Car className="w-4 h-4 mx-auto mb-1 opacity-75" />
                    <span className="block text-[11px] leading-tight">{v}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Location and Preferred Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1.5">
                  POSTCODE / STREET ADDRESS
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="text"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    placeholder="e.g. AB15 4TY, Westhill..."
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder:text-zinc-500 focus:border-orange-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1.5">
                  PREFERRED DATE
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:border-orange-500 outline-none"
                />
              </div>
            </div>

            {/* Step 4: Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1.5">
                  FULL NAME
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder:text-zinc-500 focus:border-orange-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1.5">
                  PHONE NUMBER
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 07354 690065"
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder:text-zinc-500 focus:border-orange-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Dynamic Estimated Total Banner */}
            <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <ShieldCheck className={`w-4 h-4 ${theme.textPrimary}`} />
                <span>Zero advance deposit required. Pay only after inspection.</span>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-zinc-400 font-bold uppercase">Estimated Quote</div>
                <div className={`text-lg font-heading font-black ${theme.textPrimary}`}>
                  {typeof estimatedTotal === 'number'
                    ? `${config.currencySymbol}${estimatedTotal}`
                    : estimatedTotal}
                </div>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className={`w-full py-3.5 rounded-lg text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-lg transition-all cursor-pointer`}
            >
              REQUEST THIS APPOINTMENT
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
