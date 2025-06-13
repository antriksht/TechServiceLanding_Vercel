import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Quality Engineering Assurance/Hero";
import CertificationsSection from "@/components/CertificationsSection";
import TrustedBySection from "@/components/TrustedBySection";
import ServicesSection from "@/components/Quality Engineering Assurance/ServicesSection";
import WhyUsSection from "@/components/Quality Engineering Assurance/WhyUsSection";
import LocationsSection from "@/components/LocationsSection";
import CTASection from "@/components/CTASection";

const Home: React.FC = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Quality Engineering Assurance | Intelegencia</title>
        <meta
          name="description"
          content="Intelegencia offers end-to-end quality engineering services—from AI-powered test automation to UAT, integration, and compliance testing—ensuring faster releases, system integrity, and audit readiness."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Quality Engineering Assurance | Intelegencia" />
        <meta property="og:description" content="Intelegencia offers end-to-end quality engineering services—from AI-powered test automation to UAT, integration, and compliance testing—ensuring faster releases, system integrity, and audit readiness." />
        <meta property="og:site_name" content="Intelegencia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quality Engineering Assurance | Intelegencia" />
        <meta name="twitter:description" content="Intelegencia offers end-to-end quality engineering services—from AI-powered test automation to UAT, integration, and compliance testing—ensuring faster releases, system integrity, and audit readiness." />
      </Helmet>
      
      <Header />

      <main className="flex-grow pt-24 md:pt-32">

        {/* Mobile view - Form appears after heading */}
        <div className="container mx-auto px-4">
          <div className="lg:hidden">
            <Hero />
            <div className="mb-12">
              <ContactForm />
            </div>
            <CertificationsSection />
            <TrustedBySection />
            {typeof window !== "undefined" && window.innerWidth < 1024 ? (
                <section id="services" className="scroll-mt-32">
                  <ServicesSection />
                </section>
              ) : (
                <ServicesSection />
              )}
            {typeof window !== "undefined" && window.innerWidth < 1024 ? (
                <section id="why-us" className="scroll-mt-32">
                  <WhyUsSection />
                </section>
              ) : (
                <WhyUsSection />
              )}

              {typeof window !== "undefined" && window.innerWidth < 1024 ? (
                <section id="locations" className="scroll-mt-32">
                  <LocationsSection />
                </section>
              ) : (
                <LocationsSection />
              )}
            <CTASection />
          </div>

          {/* Desktop view - Two column layout */}
          <div className="hidden lg:flex lg:flex-row lg:gap-8">
            {/* Left Column - Content */}
            <div className="w-2/3">
              <Hero />
              <CertificationsSection />
              <TrustedBySection />
              {typeof window !== "undefined" && window.innerWidth >= 1024 ? (
                  <section id="services" className="scroll-mt-32">
                    <ServicesSection />
                  </section>
                ) : (
                  <ServicesSection />
                )}
              {typeof window !== "undefined" && window.innerWidth >= 1024 ? (
                  <section id="why-us" className="scroll-mt-32">
                    <WhyUsSection />
                  </section>
                ) : (
                  <WhyUsSection />
                )}

                {typeof window !== "undefined" && window.innerWidth >= 1024 ? (
                  <section id="locations" className="scroll-mt-32">
                    <LocationsSection />
                  </section>
                ) : (
                  <LocationsSection />
                )}
              <CTASection />
            </div>

            {/* Right Column - Sticky Form */}
              <div className="w-1/3 pl-12 pr-4">
                <div className="sticky top-24 max-h-screen h-[calc(100vh-150px)] flex items-center">
                  {/* Make ContactForm stretch fully */}
                  <div className="w-full min-w-0">
                    <ContactForm />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </main>

      <ScrollToTop />
    </div>
  );
};

export default Home;