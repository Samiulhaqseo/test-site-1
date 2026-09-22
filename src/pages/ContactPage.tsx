import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ChevronRight, 
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const ContactPage: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();
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
    <div className="bg-[#0B0D10] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-white font-medium">Contact Us</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Customer Enquiries Open Today until 6:30 PM</span>
          </div>
        </div>
      </div>

      {/* Hero Banner (#0B0D10) */}
      <section className="py-14 sm:py-20 relative overflow-hidden bg-[#0B0D10] border-b border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 mb-5">
            <MessageSquare className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>DIRECT CRAFTSMAN COMMUNICATION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight uppercase text-white">
            CONTACT <span className={theme.textPrimary}>{config.businessName}</span>
          </h1>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have questions about your vehicle’s clear coat, ceramic coating longevity, or booking a mobile slot? Reach out directly to founder Hamish Moar.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info + Form (#FFFFFF) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Direct Contact Info (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className={`text-xs font-black tracking-widest uppercase ${theme.textPrimary} block mb-1`}>
                  PERSONAL DISPATCH
                </span>
                <h2 className="text-2xl font-heading font-black uppercase text-zinc-950 tracking-tight">
                  SPEAK DIRECTLY WITH OUR TEAM
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  No automated call centers or subcontracted cleaners. When you contact us, you speak directly with seasoned detailing specialists.
                </p>
              </div>

              {/* Direct Phone Card */}
              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all flex items-start gap-4 group block shadow-xs"
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
                href={`mailto:${config.email}`}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all flex items-start gap-4 group block shadow-xs"
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
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex items-start gap-4 shadow-xs">
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
                    Daily mobile routes across City 1 (Aberdeen), City 2 (Inverurie), Stonehaven, Westhill, Ellon & Peterhead
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex items-start gap-4 shadow-xs">
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

            {/* Right Column: Interactive Contact Form (7 Cols) */}
            <div className="lg:col-span-7 bg-[#F8FAFC] border border-zinc-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-sm">
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
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-heading font-bold uppercase tracking-wider text-zinc-600 hover:text-zinc-950 underline cursor-pointer"
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
                        <label className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John MacDonald"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
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
                        <label className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                          Postcode or Town *
                        </label>
                        <input
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
                        <label className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                          Vehicle Make & Model
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 2023 BMW M3 / Audi Q7"
                          value={formData.vehicle}
                          onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                          Service of Interest
                        </label>
                        <select
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
                      <label className="block text-xs font-heading font-bold uppercase text-zinc-700 mb-1.5">
                        Tell Us About Your Car or Questions
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe current paint condition, specific stains, pet hair, or preferred dates..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors resize-none shadow-2xs"
                      ></textarea>
                    </div>

                    <button
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

      {/* Reassurance Footer Banner (#0B0D10) */}
      <section className="py-16 bg-[#0B0D10] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-heading font-black uppercase tracking-tight">
              LOOKING FOR INSTANT ONLINE BOOKING?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              You don’t have to wait for an email. Use our 60-second interactive reservation scheduler to secure a van slot right now.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => openBookingModal()}
                className={`px-8 py-3.5 rounded-xl text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl cursor-pointer min-h-[44px] flex items-center gap-2`}
              >
                <span>OPEN ONLINE BOOKING WIDGET</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
