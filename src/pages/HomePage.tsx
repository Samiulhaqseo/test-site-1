import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { GallerySection } from '../components/GallerySection';
import { EducationSection } from '../components/EducationSection';
import { BuyersGuide } from '../components/BuyersGuide';
import { CoverageChecker } from '../components/CoverageChecker';
import { ReviewsSection } from '../components/ReviewsSection';
import { LeadFormSection } from '../components/LeadFormSection';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <main>
      {/* Hero with conversion CTA & fast trust signals */}
      <Hero />

      {/* 30+ Years craftsman story */}
      <AboutSection />

      {/* Comprehensive services showcase */}
      <ServicesSection />

      {/* Why Choose Us & Guarantees */}
      <WhyChooseUs />

      {/* Before / After Slider and Portfolio */}
      <GallerySection />

      {/* Educational Detailing Mistakes Guide */}
      <EducationSection />

      {/* Buyer's guide comparison table */}
      <BuyersGuide />

      {/* Mobile coverage postcode & town checker */}
      <CoverageChecker />

      {/* 50+ Five-Star Reviews From Local Customers */}
      <ReviewsSection />

      {/* Direct Contact & Lead Enquiry Form */}
      <LeadFormSection />

      {/* Common questions and transparent answers */}
      <FaqSection dark />

      {/* Bottom high-converting booking banner */}
      <CtaBanner />
    </main>
  );
};
