


"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/app/translations/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const CTASectionBold = () => {
  const { t } = useLanguage();
  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop / Tablet Animations
    mm.add("(min-width: 768px)", () => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      });

      const heading = document.querySelector(".cta-heading-bold");

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, clipPath: "inset(0 100% 0 0)" },
          {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: heading,
              start: "top 75%",
            },
          }
        );
      }

      // Pulse animation
      gsap.to(".pulse-ring", {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power2.out",
      });
    });

    // Mobile Reset (IMPORTANT FIX)
    mm.add("(max-width: 767px)", () => {
      gsap.set(".cta-heading-bold", {
        opacity: 1,
        clipPath: "none",
      });

      gsap.set(".pulse-ring", {
        scale: 1,
        opacity: 1,
      });
    });

    return () => mm.revert();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "120px 120px",
      }}
      className="min-h-[80vh] bg-black text-white py-16 px-4 flex items-center justify-center relative overflow-hidden"
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#0092b8 1px, transparent 1px), linear-gradient(90deg, #05df72 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="cta-heading-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-snug md:leading-tight">
            <span className="block text-white mb-2 sm:mb-3">
             {t?.ctatitle}
            </span>
            <span className="block text-[#05df72]">
            {t?.ctades}
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className="mb-8 sm:mb-12"
          // data-aos="fade-up"
          // data-aos-delay="200"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto relative inline-block">
            {t?.join}{" "}
            <span className="text-white font-semibold relative">
             {t?.h}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#05df72]" />
            </span>{" "}
          {t?.project}{" "}
            <span className="text-white font-semibold relative">
            {t?.p}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#05df72]" />
            </span>{" "}
           {t?.r}
          </p>
        </div>

        {/* Button */}
        <div
          className="relative inline-block"
          // data-aos="zoom-in"
          // data-aos-delay="400"
        >
          <div className="pulse-ring absolute inset-0 rounded-lg bg-[#05df72] -z-10"></div>

          <button
            onClick={() => scrollToSection("contactus")}
            className="relative bg-[#05df72] text-black px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-lg font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:bg-[#05df72] transition-all duration-300 inline-flex items-center gap-2 sm:gap-3"
          >
            <span>{t?.button}</span>

            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASectionBold;
