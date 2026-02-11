"use client";

import CallToActionSection from "@/components/CallToActionSection";
import ComparisonSection from "@/components/Comparisonsection";
import ComplianceAndOutputSection from "@/components/ComplianceAndOutputSection";
import CoreAISection from "@/components/CoreAISection";
import CTASectionBold from "@/components/Ctasectionbold";
import CTASection from "@/components/Ctasectionbold";
import DemoBookingSection from "@/components/Demobookingsection";
import FAQSectionMinimal from "@/components/Faqsection";
import FeaturesSection from "@/components/Featuressection";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import ImpactSection from "@/components/Impactsection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SolutionSection from "@/components/SolutionSection";
import TopBanner from "@/components/TopBanner";
import WhyChoose from "@/components/Whychoose";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    gsap.from(".fade-up", {
      scrollTrigger: {
        trigger: ".fade-up",
        start: "top 85%",
      },
      y: 80,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.2,
    });

    gsap.from(".hero-media", {
      scale: 0.85,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out",
    });
    gsap.from(".hero-media", { scale: 0.9, opacity: 0, duration: 1.2 });
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <TopBanner />
    
      <Navbar />
 
      <Hero />
      <WhyChoose />
      <SolutionSection />
      <HowItWorksSection />
      <section id="features" className="scroll-mt-20">
        <FeaturesSection />
      </section>
      <section id="why" className="scroll-mt-20">
        <ComparisonSection />
      </section>
      <ImpactSection />
      <section id="pricing" className="scroll-mt-20">
        <PricingSection />
      </section>
      <section id="contactus" className="scroll-mt-20">
        <DemoBookingSection />
      </section>
      <section id="faq" className="scroll-mt-20">
        <FAQSectionMinimal />
      </section>
      <CTASectionBold />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
