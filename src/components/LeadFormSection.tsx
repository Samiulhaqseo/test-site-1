import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const LeadFormSection: React.FC = () => {
  const { config, theme } = useBusiness();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    vehicle: '',
    service: 'Mobile Car Detailing',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="lead-enquiry" className="py-16 sm:py-24 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Optional Section Eyebrow Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-3">
            <MessageSquare className={`w-3.5 h-3.5 ${theme.textPrimary}`} />
            <span>DIRECT CRAFTSMAN DISPATCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-black tracking-tight uppercase text-zinc-950">
            GET IN TOUCH FOR A CUSTOM VALET OR DETAIL
          </h2>
          <p className="mt-3 text-zinc-600 text-xs sm:text-sm leading-relaxed">
            Connect directly with founder Hamish Moar for honest clear-coat appraisals, tailored vehicle packages, or instant answers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: SPEAK DIRECTLY WITH OUR TEAM (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-1`}>
                PERSONAL DISPATCH
              </span>
              <h3 className="text-2xl font-heading font-black uppercase text-zinc-950 tracking-tight">
                SPEAK DIRECTLY WITH OUR TEAM
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed">
                No automated call centers or subcontracted cleaners. When you contact us, you speak directly with seasoned detailing specialists.
              </p>
            </div>

            {/* Direct Phone Card */}
            <a
              id="home-lead-phone"
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all flex items-start gap-4 group block shadow-2xs min-h-[44px]"
            >
              <div className={`w-11 h-11 rounded-xl ${theme.bgPrimary} flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform`}>
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-zinc-500">
                  DIRECT CALL / DISPATCH LINE
                </div>
                <div className="text-lg font-heading font-black text-zinc-950 group-hover:text-orange-600 transition-colors">
                  {config.phone}
                </div>
                <div className="text-xs text-zinc-600 mt-1">
                  Click to call immediately for same-day mobile questions
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              id="home-lead-email"
              href={`mailto:${config.email}`}
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all flex items-start gap-4 group block shadow-2xs min-h-[44px]"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-800 shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 text-zinc-600" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-zinc-500">
                  DIRECT EMAIL
                </div>
                <div className="text-sm font-heading font-bold text-zinc-950 truncate group-hover:text-orange-600 transition-colors">
                  {config.email}
                </div>
                <div className="text-xs text-zinc-600 mt-1">
                  Send photos of paint defects for accurate appraisals
                </div>
              </div>
            </a>

            {/* Location & Coverage */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex items-start gap-4 shadow-2xs">
              <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-800 shrink-0">
                <MapPin className="w-5 h-5 text-zinc-600" />
              </div>
              <div>
                <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-zinc-500">
                  MOBILE VAN COVERAGE RADIUS
                </div>
                <div className="text-sm font-heading font-bold text-zinc-950 mt-0.5">
                  {config.location} & Surrounding Districts
                </div>
                <div className="text-xs text-zinc-600 mt-1">
                  Daily mobile routes across Aberdeen, Inverurie, Stonehaven, Westhill, Dyce, and Ellon
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex items-start gap-4 shadow-2xs">
              <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-800 shrink-0">
                <Clock className="w-5 h-5 text-zinc-600" />
              </div>
              <div>
                <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-zinc-500">
                  OPERATING & BOOKING HOURS
                </div>
                <div className="text-xs text-zinc-700 mt-1 space-y-1">
                  <div>{config.openingHours.weekdays}</div>
                  <div>{config.openingHours.sunday}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: SEND AN ENQUIRY OR ESTIMATE REQUEST (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-zinc-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-xs">
            {submitted ? (
              <div className="py-12 text-center my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-black uppercase text-zinc-950">
                  ENQUIRY RECEIVED!
                </h3>
                <p className="text-zinc-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you for contacting {config.businessName}. Hamish or our operations team will review your vehicle details and reply within 2 to 4 business hours.
                </p>
                <div className="mt-6">
                  <button
                    id="lead-form-reset"
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        postcode: '',
                        vehicle: '',
                        service: 'Mobile Car Detailing',
                        message: ''
                      });
                    }}
                    className="text-xs font-heading font-bold uppercase tracking-wider text-zinc-600 hover:text-zinc-950 underline cursor-pointer min-h-[44px]"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-heading font-black uppercase text-zinc-950 tracking-tight">
                    SEND AN ENQUIRY OR ESTIMATE REQUEST
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                    Fill in your details below and we will get back to you promptly with recommendations and pricing.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-name" className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        required
                        placeholder="e.g. John MacDonald"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-phone" className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        required
                        placeholder="e.g. 07123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-email" className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-postcode" className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                        Postcode or Town *
                      </label>
                      <input
                        id="lead-postcode"
                        type="text"
                        required
                        placeholder="e.g. AB15 or Inverurie"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-vehicle" className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                        Vehicle Make & Model
                      </label>
                      <input
                        id="lead-vehicle"
                        type="text"
                        placeholder="e.g. 2023 BMW M3 / Audi Q7"
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-service" className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        id="lead-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors shadow-2xs"
                      >
                        <option value="Mobile Car Detailing">Mobile Car Detailing</option>
                        <option value="Interior Detailing">Interior Detailing</option>
                        <option value="Exterior Detailing">Exterior Detailing</option>
                        <option value="Ceramic Coating">Ceramic Coating (2-5 Yrs)</option>
                        <option value="Paint Correction">Paint Correction & Machine Polish</option>
                        <option value="Fleet Care">Commercial / Fleet Maintenance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lead-message" className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                      Tell Us About Your Car or Questions
                    </label>
                    <textarea
                      id="lead-message"
                      rows={4}
                      placeholder="Describe current paint condition, specific stains, pet hair, or preferred dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors resize-none shadow-2xs"
                    ></textarea>
                  </div>

                  <button
                    id="lead-submit-btn"
                    type="submit"
                    className={`w-full py-4 rounded-xl text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md transition-all active:scale-[0.98] cursor-pointer min-h-[48px] flex items-center justify-center gap-2`}
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND DIRECT ENQUIRY</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
