/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BusinessProvider } from './context/BusinessContext';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyActionFooter } from './components/MobileStickyActionFooter';
import { QuoteBookingModal } from './components/QuoteBookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { TemplateCustomizerModal } from './components/TemplateCustomizerModal';
import { FloatingEditorButton } from './components/FloatingEditorButton';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { MobileCarDetailingAberdeenshireServicePage } from './pages/MobileCarDetailingAberdeenshireServicePage';
import { CeramicCoatingServicePage } from './pages/CeramicCoatingServicePage';
import { PaintCorrectionServicePage } from './pages/PaintCorrectionServicePage';
import { InteriorDetailingServicePage } from './pages/InteriorDetailingServicePage';
import { ExteriorDetailingServicePage } from './pages/ExteriorDetailingServicePage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { LocationAPage } from './pages/LocationAPage';
import { LocationBPage } from './pages/LocationBPage';
import { LocationCPage } from './pages/LocationCPage';
import { LocationDPage } from './pages/LocationDPage';
import { LocationWesthillPage } from './pages/LocationWesthillPage';
import { Location1Page } from './pages/Location1Page';
import { Location2Page } from './pages/Location2Page';
import { Location3Page } from './pages/Location3Page';
import { Location4Page } from './pages/Location4Page';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostDetailPage } from './pages/BlogPostDetailPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <BusinessProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[#0B0D10] text-zinc-100 flex flex-col selection:bg-orange-500 selection:text-white pb-16 md:pb-0">
          {/* Top utility announcement and contact bar */}
          <TopBar />

          {/* Sticky primary navigation with real page links */}
          <Navbar />

          {/* Dynamic Page Router */}
          <main className="flex-grow">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* Services Hub & Dedicated Service Pages */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/" element={<ServicesPage />} />

              {/* Mobile Car Detailing Service in Aberdeenshire / Aberdeen */}
              <Route path="/services/mobile-car-detailing-service-in-aberdeenshire" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/services/mobile-car-detailing-service-in-aberdeenshire/" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/services/mobile-car-detailing-aberdeenshire" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/services/mobile-car-detailing-aberdeenshire/" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/services/mobile-car-detailing-in-aberdeenshire" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/services/mobile-car-detailing-in-aberdeenshire/" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/service/mobile-car-detailing-service-in-aberdeenshire" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/service/mobile-car-detailing-service-in-aberdeenshire/" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/mobile-car-detailing-service-in-aberdeenshire" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/mobile-car-detailing-service-in-aberdeenshire/" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/services/mobile-car-detailing-in-aberdeen" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/services/mobile-car-detailing-in-aberdeen/" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/services/mobile-car-detailing-aberdeen" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/services/mobile-car-detailing-aberdeen/" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/mobile-car-detailing-in-aberdeen" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/mobile-car-detailing-in-aberdeen/" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/mobile-car-detailing-aberdeen" element={<MobileCarDetailingAberdeenshireServicePage />} />
              <Route path="/mobile-car-detailing-aberdeen/" element={<MobileCarDetailingAberdeenshireServicePage />} />

              {/* Ceramic Coating */}
              <Route path="/services/ceramic-coating" element={<CeramicCoatingServicePage />} />
              <Route path="/services/ceramic-coating/" element={<CeramicCoatingServicePage />} />
              <Route path="/service/ceramic-coating" element={<CeramicCoatingServicePage />} />
              <Route path="/service/ceramic-coating/" element={<CeramicCoatingServicePage />} />
              <Route path="/ceramic-coating" element={<CeramicCoatingServicePage />} />
              <Route path="/ceramic-coating/" element={<CeramicCoatingServicePage />} />

              {/* Paint Correction */}
              <Route path="/services/paint-correction" element={<PaintCorrectionServicePage />} />
              <Route path="/services/paint-correction/" element={<PaintCorrectionServicePage />} />
              <Route path="/service/paint-correction" element={<PaintCorrectionServicePage />} />
              <Route path="/service/paint-correction/" element={<PaintCorrectionServicePage />} />
              <Route path="/paint-correction" element={<PaintCorrectionServicePage />} />
              <Route path="/paint-correction/" element={<PaintCorrectionServicePage />} />

              {/* Interior Detailing */}
              <Route path="/services/interior-detailing" element={<InteriorDetailingServicePage />} />
              <Route path="/services/interior-detailing/" element={<InteriorDetailingServicePage />} />
              <Route path="/service/interior-detailing" element={<InteriorDetailingServicePage />} />
              <Route path="/service/interior-detailing/" element={<InteriorDetailingServicePage />} />
              <Route path="/interior-detailing" element={<InteriorDetailingServicePage />} />
              <Route path="/interior-detailing/" element={<InteriorDetailingServicePage />} />

              {/* Exterior Detailing */}
              <Route path="/services/exterior-detailing" element={<ExteriorDetailingServicePage />} />
              <Route path="/services/exterior-detailing/" element={<ExteriorDetailingServicePage />} />
              <Route path="/service/exterior-detailing" element={<ExteriorDetailingServicePage />} />
              <Route path="/service/exterior-detailing/" element={<ExteriorDetailingServicePage />} />
              <Route path="/exterior-detailing" element={<ExteriorDetailingServicePage />} />
              <Route path="/exterior-detailing/" element={<ExteriorDetailingServicePage />} />

              {/* Dynamic Service Fallback */}
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/services/:slug/" element={<ServiceDetailPage />} />

              {/* Locations Hub & Dedicated Location Pages */}
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/locations/" element={<LocationsPage />} />

              {/* Locations Hub */}
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/locations/" element={<LocationsPage />} />
              <Route path="/Locations" element={<LocationsPage />} />
              <Route path="/Locations/" element={<LocationsPage />} />

              {/* Peterhead */}
              <Route path="/locations/peterhead-car-detailing" element={<LocationAPage />} />
              <Route path="/locations/peterhead-car-detailing/" element={<LocationAPage />} />
              <Route path="/Locations/Peterhead-Car-Detailing" element={<LocationAPage />} />
              <Route path="/Locations/Peterhead-Car-Detailing/" element={<LocationAPage />} />
              <Route path="/Locations/peterhead-car-detailing" element={<LocationAPage />} />
              <Route path="/Locations/peterhead-car-detailing/" element={<LocationAPage />} />
              <Route path="/peterhead-car-detailing" element={<LocationAPage />} />
              <Route path="/peterhead-car-detailing/" element={<LocationAPage />} />
              <Route path="/locations/peterhead" element={<LocationAPage />} />
              <Route path="/locations/peterhead/" element={<LocationAPage />} />
              <Route path="/locations/location-a" element={<LocationAPage />} />
              <Route path="/locations/location-a/" element={<LocationAPage />} />
              <Route path="/location-a" element={<LocationAPage />} />
              <Route path="/location-a/" element={<LocationAPage />} />

              {/* Inverurie (Location B) */}
              <Route path="/locations/inverurie-car-detailing" element={<LocationBPage />} />
              <Route path="/locations/inverurie-car-detailing/" element={<LocationBPage />} />
              <Route path="/Locations/Inverurie-Car-Detailing" element={<LocationBPage />} />
              <Route path="/Locations/Inverurie-Car-Detailing/" element={<LocationBPage />} />
              <Route path="/Locations/inverurie-car-detailing" element={<LocationBPage />} />
              <Route path="/Locations/inverurie-car-detailing/" element={<LocationBPage />} />
              <Route path="/inverurie-car-detailing" element={<LocationBPage />} />
              <Route path="/inverurie-car-detailing/" element={<LocationBPage />} />
              <Route path="/locations/inverurie" element={<LocationBPage />} />
              <Route path="/locations/inverurie/" element={<LocationBPage />} />
              <Route path="/locations/location-b" element={<LocationBPage />} />
              <Route path="/locations/location-b/" element={<LocationBPage />} />
              <Route path="/location-b" element={<LocationBPage />} />
              <Route path="/location-b/" element={<LocationBPage />} />

              {/* Stonehaven (Location C) */}
              <Route path="/locations/stonehaven-car-detailing" element={<LocationCPage />} />
              <Route path="/locations/stonehaven-car-detailing/" element={<LocationCPage />} />
              <Route path="/Locations/Stonehaven-Car-Detailing" element={<LocationCPage />} />
              <Route path="/Locations/Stonehaven-Car-Detailing/" element={<LocationCPage />} />
              <Route path="/Locations/stonehaven-car-detailing" element={<LocationCPage />} />
              <Route path="/Locations/stonehaven-car-detailing/" element={<LocationCPage />} />
              <Route path="/stonehaven-car-detailing" element={<LocationCPage />} />
              <Route path="/stonehaven-car-detailing/" element={<LocationCPage />} />
              <Route path="/locations/stonehaven" element={<LocationCPage />} />
              <Route path="/locations/stonehaven/" element={<LocationCPage />} />
              <Route path="/locations/location-c" element={<LocationCPage />} />
              <Route path="/locations/location-c/" element={<LocationCPage />} />
              <Route path="/location-c" element={<LocationCPage />} />
              <Route path="/location-c/" element={<LocationCPage />} />

              {/* Fraserburgh (Location D) */}
              <Route path="/locations/fraserburgh-car-detailing" element={<LocationDPage />} />
              <Route path="/locations/fraserburgh-car-detailing/" element={<LocationDPage />} />
              <Route path="/Locations/Fraserburgh-Car-Detailing" element={<LocationDPage />} />
              <Route path="/Locations/Fraserburgh-Car-Detailing/" element={<LocationDPage />} />
              <Route path="/Locations/fraserburgh-car-detailing" element={<LocationDPage />} />
              <Route path="/Locations/fraserburgh-car-detailing/" element={<LocationDPage />} />
              <Route path="/fraserburgh-car-detailing" element={<LocationDPage />} />
              <Route path="/fraserburgh-car-detailing/" element={<LocationDPage />} />
              <Route path="/locations/fraserburgh" element={<LocationDPage />} />
              <Route path="/locations/fraserburgh/" element={<LocationDPage />} />
              <Route path="/locations/location-d" element={<LocationDPage />} />
              <Route path="/locations/location-d/" element={<LocationDPage />} />
              <Route path="/location-d" element={<LocationDPage />} />
              <Route path="/location-d/" element={<LocationDPage />} />

              {/* Westhill (New Location) */}
              <Route path="/locations/westhill-car-detailing" element={<LocationWesthillPage />} />
              <Route path="/locations/westhill-car-detailing/" element={<LocationWesthillPage />} />
              <Route path="/Locations/Westhill-Car-Detailing" element={<LocationWesthillPage />} />
              <Route path="/Locations/Westhill-Car-Detailing/" element={<LocationWesthillPage />} />
              <Route path="/Locations/westhill-car-detailing" element={<LocationWesthillPage />} />
              <Route path="/Locations/westhill-car-detailing/" element={<LocationWesthillPage />} />
              <Route path="/westhill-car-detailing" element={<LocationWesthillPage />} />
              <Route path="/westhill-car-detailing/" element={<LocationWesthillPage />} />
              <Route path="/locations/westhill" element={<LocationWesthillPage />} />
              <Route path="/locations/westhill/" element={<LocationWesthillPage />} />

              {/* Dynamic Location Fallback */}
              <Route path="/locations/:slug" element={<LocationDetailPage />} />
              <Route path="/locations/:slug/" element={<LocationDetailPage />} />
              <Route path="/Locations/:slug" element={<LocationDetailPage />} />
              <Route path="/Locations/:slug/" element={<LocationDetailPage />} />

              {/* Company & Knowledge Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/" element={<AboutPage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/about-us/" element={<AboutPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/team/" element={<TeamPage />} />
              <Route path="/team-member" element={<TeamPage />} />
              <Route path="/team-member/" element={<TeamPage />} />
              <Route path="/team-members" element={<TeamPage />} />
              <Route path="/team-members/" element={<TeamPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/faq/" element={<FaqPage />} />
              <Route path="/faqs" element={<FaqPage />} />
              <Route path="/faqs/" element={<FaqPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/contact/" element={<ContactPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/contact-us/" element={<ContactPage />} />

              {/* Blog Hub & 6 Blog Post Pages */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/" element={<BlogPage />} />
              <Route path="/Blog" element={<BlogPage />} />
              <Route path="/Blog/" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostDetailPage />} />
              <Route path="/blog/:slug/" element={<BlogPostDetailPage />} />
              <Route path="/blog-post-1" element={<BlogPostDetailPage />} />
              <Route path="/blog-post-1/" element={<BlogPostDetailPage />} />
              <Route path="/blog-post-2" element={<BlogPostDetailPage />} />
              <Route path="/blog-post-2/" element={<BlogPostDetailPage />} />
              <Route path="/blog-post-3" element={<BlogPostDetailPage />} />
              <Route path="/blog-post-3/" element={<BlogPostDetailPage />} />
              <Route path="/blog-post-4" element={<BlogPostDetailPage />} />
              <Route path="/blog-post-4/" element={<BlogPostDetailPage />} />
              <Route path="/blog-post-5" element={<BlogPostDetailPage />} />
              <Route path="/blog-post-5/" element={<BlogPostDetailPage />} />
              <Route path="/blog-post-6" element={<BlogPostDetailPage />} />
              <Route path="/blog-post-6/" element={<BlogPostDetailPage />} />

              {/* Catch-all fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Rich 4-column footer */}
          <Footer />

          {/* Persistent bottom quick-action bar for mobile users */}
          <MobileStickyActionFooter />

          {/* Interactive Modals */}
          <QuoteBookingModal />
          <ServiceDetailModal />
          <TemplateCustomizerModal />

          {/* Floating Quick Customizer Button */}
          <FloatingEditorButton />
        </div>
      </BusinessProvider>
    </BrowserRouter>
  );
}
