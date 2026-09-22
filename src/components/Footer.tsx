import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const Footer: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services Hub', href: '/services/' },
    { label: 'Locations Hub', href: '/locations/' },
    { label: 'Peterhead Detailing', href: '/locations/peterhead-car-detailing/' },
    { label: 'Inverurie Detailing', href: '/locations/inverurie-car-detailing/' },
    { label: 'Stonehaven Detailing', href: '/locations/stonehaven-car-detailing/' },
    { label: 'Fraserburgh Detailing', href: '/locations/fraserburgh-car-detailing/' },
    { label: 'Westhill Detailing', href: '/locations/westhill-car-detailing/' },
    { label: 'About Hamish Moar', href: '/about/' },
    { label: 'Team Members', href: '/team/' },
    { label: 'Car Care Blog', href: '/blog/' },
    { label: 'FAQs', href: '/faq/' },
    { label: 'Contact Us', href: '/contact/' },
  ];

  const servicesList = [
    { label: 'Mobile Detailing Aberdeenshire', href: '/services/mobile-car-detailing-service-in-aberdeenshire/' },
    { label: 'Interior Detailing', href: '/services/interior-detailing/' },
    { label: 'Exterior Detailing', href: '/services/exterior-detailing/' },
    { label: 'Ceramic Coating', href: '/services/ceramic-coating/' },
    { label: 'Paint Correction', href: '/services/paint-correction/' }
  ];

  return (
    <footer id="contact" className="bg-[#0B0D10] text-zinc-400 text-xs border-t border-zinc-800/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className={`w-9 h-9 rounded-lg ${theme.bgPrimary} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-heading font-black text-lg tracking-wider text-white uppercase leading-none">
                  {config.businessName}
                </span>
                <span className="block text-[9px] tracking-[0.2em] font-semibold text-zinc-400 uppercase mt-1">
                  {config.tagline}
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-xs leading-relaxed mb-6 max-w-sm">
              Come and visit us today, or let us come directly to your driveway across our six serviced cities so that we can take care of your vehicle in the most efficient, meticulous, and professional manner possible. Backed by over {config.yearsExperience} years of dedicated detailing expertise.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-zinc-500">
              <span className="text-[11px] font-semibold text-zinc-400">Master Craftsmanship</span>
              <span>•</span>
              <span className="text-[11px] font-semibold text-zinc-400">100% Self-Contained Van</span>
              <span>•</span>
              <span className="text-[11px] font-semibold text-zinc-400">0PPM Spot-Free Pure Water</span>
            </div>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-black text-xs uppercase tracking-widest text-white mb-4">
              CONTACT DIRECT
            </h4>

            <div className="space-y-3.5">
              <div className="flex items-start gap-2.5">
                <Phone className={`w-4 h-4 ${theme.textPrimary} shrink-0 mt-0.5`} />
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Phone & WhatsApp</div>
                  <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className="text-zinc-200 hover:text-white font-medium">
                    {config.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className={`w-4 h-4 ${theme.textPrimary} shrink-0 mt-0.5`} />
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Direct Email</div>
                  <a href={`mailto:${config.email}`} className="text-zinc-200 hover:text-white font-medium break-all">
                    {config.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className={`w-4 h-4 ${theme.textPrimary} shrink-0 mt-0.5`} />
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Operating Base & 6 Cities</div>
                  <div className="text-zinc-300 font-medium">
                    {config.location}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className={`w-4 h-4 ${theme.textPrimary} shrink-0 mt-0.5`} />
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Operating Hours</div>
                  <div className="text-zinc-300 font-medium">
                    {config.openingHours.weekdays}
                  </div>
                  <div className="text-zinc-400 text-[11px]">
                    {config.openingHours.sunday}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-black text-xs uppercase tracking-widest text-white mb-4">
              PAGES & NAVIGATION
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-zinc-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Col */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-black text-xs uppercase tracking-widest text-white mb-4">
              OUR 5 CORE SERVICES
            </h4>
            <ul className="space-y-2">
              {servicesList.map((srv) => (
                <li key={srv.label}>
                  <Link
                    to={srv.href}
                    className="text-left text-zinc-400 hover:text-white transition-colors block"
                  >
                    {srv.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-zinc-800">
              <Link
                to="/services/"
                className={`text-xs font-heading font-bold uppercase tracking-wider ${theme.textPrimary} hover:underline`}
              >
                View Full Services Catalog →
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 text-[11px]">
          <div>
            Copyright © {new Date().getFullYear()} <strong className="text-zinc-300">{config.businessName}</strong>. All Rights Reserved. {config.location}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span>Specialist: {config.ownerName} ({config.yearsExperience} Yrs Exp)</span>
            <span>•</span>
            <Link to="/contact/" className="hover:text-white">
              Contact Us
            </Link>
            <span>•</span>
            <button
              onClick={() => openBookingModal()}
              className={`${theme.textPrimary} hover:underline font-semibold cursor-pointer`}
            >
              Book Online
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
