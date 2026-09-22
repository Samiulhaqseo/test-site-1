import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Sparkles, ChevronRight, ChevronDown } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const Navbar: React.FC = () => {
  const { config, openBookingModal, theme } = useBusiness();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const location = useLocation();
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const locationsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }, [location.pathname]);

  const serviceDropdownItems = [
    { name: 'Mobile Detailing Aberdeenshire', href: '/services/mobile-car-detailing-service-in-aberdeenshire/', desc: 'Doorstep auto spa across Aberdeenshire' },
    { name: 'Ceramic Coating', href: '/services/ceramic-coating/', desc: '9H quartz 3 & 5-year shields' },
    { name: 'Paint Correction', href: '/services/paint-correction/', desc: 'Swirl mark & scratch eradication' },
    { name: 'Interior Detailing', href: '/services/interior-detailing/', desc: 'Deep extraction & steam hygiene' },
    { name: 'Exterior Detailing', href: '/services/exterior-detailing/', desc: 'Two-bucket decontamination' },
    { name: 'View All Services →', href: '/services/', desc: 'Complete service pricing & packages' },
  ];

  const locationDropdownItems = [
    { name: 'Peterhead', href: '/locations/peterhead-car-detailing/', desc: 'Mobile car detailing & valeting in Peterhead' },
    { name: 'Inverurie', href: '/locations/inverurie-car-detailing/', desc: 'Garioch & rural estate detailing' },
    { name: 'Stonehaven', href: '/locations/stonehaven-car-detailing/', desc: 'Coastal salt-spray protection' },
    { name: 'Fraserburgh', href: '/locations/fraserburgh-car-detailing/', desc: 'North coast mobile valeting & detailing' },
    { name: 'Westhill', href: '/locations/westhill-car-detailing/', desc: 'Business park & home driveway detailing' },
    { name: 'View All Locations →', href: '/locations/', desc: 'Full postcode & regional service map' },
  ];

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '/services/', hasDropdown: true },
    { name: 'LOCATIONS', href: '/locations/', hasDropdown: true },
    { name: 'ABOUT', href: '/about/' },
    { name: 'TEAM', href: '/team/' },
    { name: 'BLOG', href: '/blog/' },
    { name: 'FAQS', href: '/faq/' },
    { name: 'CONTACT', href: '/contact/' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/' || location.pathname === '';
    }
    return location.pathname.startsWith(href) || location.pathname === href.replace(/\/$/, '');
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleLocationsMouseEnter = () => {
    if (locationsTimeoutRef.current) clearTimeout(locationsTimeoutRef.current);
    setLocationsOpen(true);
  };

  const handleLocationsMouseLeave = () => {
    locationsTimeoutRef.current = setTimeout(() => {
      setLocationsOpen(false);
    }, 150);
  };

  return (
    <nav className="bg-[#0B0D10]/95 backdrop-blur-md border-b border-zinc-800/80 sticky top-[37px] sm:top-[33px] z-30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0" id="nav-brand-logo">
            <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg ${theme.bgPrimary} flex items-center justify-center text-white shadow-lg shadow-black/40 group-hover:scale-105 transition-transform shrink-0`}>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <span className="block font-heading font-black text-base sm:text-xl tracking-wider text-white uppercase leading-none truncate">
                {config.businessName}
              </span>
              <span className="block text-[9px] sm:text-[10px] tracking-[0.18em] font-semibold text-zinc-400 uppercase mt-1 truncate">
                {config.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop & Tablet-Wide Nav Links with Dropdowns */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-5">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              if (link.name === 'SERVICES') {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <Link
                      to={link.href}
                      className={`text-xs font-bold tracking-widest transition-colors duration-150 py-2 inline-flex items-center gap-1 hover:text-white ${
                        active
                          ? `${theme.textPrimary}`
                          : 'text-zinc-300'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-orange-400' : 'text-zinc-500'}`} />
                    </Link>

                    {/* Services Dropdown Menu */}
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-[#12151b] border border-zinc-700/80 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-[10px] font-heading font-black uppercase tracking-wider text-orange-400 px-3 py-1.5 border-b border-zinc-800">
                          Car Detailing Services
                        </div>
                        <div className="py-1 space-y-0.5">
                          {serviceDropdownItems.map((item, idx) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={`block px-3 py-2 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors ${
                                idx === serviceDropdownItems.length - 1 ? 'border-t border-zinc-800/80 mt-1 pt-2 font-bold text-orange-400' : ''
                              }`}
                            >
                              <div className="text-white font-medium">{item.name}</div>
                              <div className="text-[10px] text-zinc-500 font-normal">{item.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === 'LOCATIONS') {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleLocationsMouseEnter}
                    onMouseLeave={handleLocationsMouseLeave}
                  >
                    <Link
                      to={link.href}
                      className={`text-xs font-bold tracking-widest transition-colors duration-150 py-2 inline-flex items-center gap-1 hover:text-white ${
                        active
                          ? `${theme.textPrimary}`
                          : 'text-zinc-300'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${locationsOpen ? 'rotate-180 text-orange-400' : 'text-zinc-500'}`} />
                    </Link>

                    {/* Locations Dropdown Menu */}
                    {locationsOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-[#12151b] border border-zinc-700/80 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-[10px] font-heading font-black uppercase tracking-wider text-orange-400 px-3 py-1.5 border-b border-zinc-800">
                          Serviced Locations
                        </div>
                        <div className="py-1 space-y-0.5">
                          {locationDropdownItems.map((item, idx) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={`block px-3 py-2 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors ${
                                idx === locationDropdownItems.length - 1 ? 'border-t border-zinc-800/80 mt-1 pt-2 font-bold text-orange-400' : ''
                              }`}
                            >
                              <div className="text-white font-medium">{item.name}</div>
                              <div className="text-[10px] text-zinc-500 font-normal">{item.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs font-bold tracking-widest transition-colors duration-150 relative py-1 hover:text-white ${
                    active
                      ? `${theme.textPrimary} after:w-full after:h-[2px] after:bg-orange-500 after:absolute after:bottom-0 after:left-0`
                      : 'text-zinc-300 hover:after:w-full after:w-0 after:h-[2px] after:bg-orange-500 after:absolute after:bottom-0 after:left-0 after:transition-all'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs (Tablet & Desktop) */}
          <div className="hidden md:flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => openBookingModal()}
              id="nav-get-quote-btn"
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded text-xs font-extrabold uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-md shadow-orange-950/30 transition-all transform active:scale-95 cursor-pointer flex items-center gap-1.5 min-h-[40px]`}
            >
              <span>GET QUOTE</span>
            </button>

            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              id="nav-call-btn"
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded text-xs font-bold tracking-wider text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 transition-all flex items-center gap-2 hover:text-white min-h-[40px]"
            >
              <Phone className={`w-3.5 h-3.5 ${theme.textPrimary}`} />
              <span className="hidden xl:inline">CALL: {config.phone}</span>
              <span className="xl:hidden">CALL</span>
            </a>
          </div>

          {/* Mobile & Small Tablet controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => openBookingModal()}
              className={`px-3 py-1.5 rounded text-xs font-extrabold uppercase text-white ${theme.bgPrimary} md:hidden min-h-[38px] flex items-center cursor-pointer`}
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 active:bg-zinc-700 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
              id="mobile-nav-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e12]/98 backdrop-blur-xl border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-3 rounded-lg text-sm font-bold tracking-wider transition-colors flex items-center justify-between min-h-[44px] ${
                isActive('/') ? `bg-zinc-900 ${theme.textPrimary}` : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <span>HOME</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </Link>

            {/* Services with expandable dropdown */}
            <div>
              <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-bold tracking-wider bg-zinc-900/60 text-zinc-300 min-h-[44px]">
                <Link
                  to="/services/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-white"
                >
                  SERVICES
                </Link>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-1 rounded text-orange-400 hover:text-white"
                  aria-label="Toggle services submenu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-zinc-950/60 rounded-b-lg border-l-2 border-orange-500 ml-2 mt-1">
                  {serviceDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-xs text-zinc-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations with expandable dropdown */}
            <div>
              <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-bold tracking-wider bg-zinc-900/60 text-zinc-300 min-h-[44px]">
                <Link
                  to="/locations/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-white"
                >
                  LOCATIONS
                </Link>
                <button
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className="p-1 rounded text-orange-400 hover:text-white"
                  aria-label="Toggle locations submenu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {mobileLocationsOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-zinc-950/60 rounded-b-lg border-l-2 border-orange-500 ml-2 mt-1">
                  {locationDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-xs text-zinc-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other nav links */}
            {[
              { name: 'ABOUT', href: '/about/' },
              { name: 'TEAM', href: '/team/' },
              { name: 'BLOG', href: '/blog/' },
              { name: 'FAQS', href: '/faq/' },
              { name: 'CONTACT', href: '/contact/' },
            ].map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-3 rounded-lg text-sm font-bold tracking-wider transition-colors flex items-center justify-between min-h-[44px] ${
                    active ? `bg-zinc-900 ${theme.textPrimary}` : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-600" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal();
              }}
              className={`w-full py-3.5 rounded-lg text-center text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-lg active:scale-[0.98] transition-all min-h-[44px] cursor-pointer`}
            >
              GET A FREE INSTANT QUOTE
            </button>

            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="w-full py-3 rounded-lg text-center text-xs font-bold tracking-wider text-zinc-200 bg-zinc-900 border border-zinc-700 flex items-center justify-center gap-2 active:bg-zinc-800 min-h-[44px]"
            >
              <Phone className={`w-4 h-4 ${theme.textPrimary}`} />
              <span>CALL DIRECT: {config.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

