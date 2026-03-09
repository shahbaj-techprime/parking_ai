"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/app/translations/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
  const { t } = useLanguage();
  const pricingPlans = t.pricingPlans || [];
  // useEffect(() => {
  //   // Only initialize animations on desktop (min-width: 768px)
  //   if (window.innerWidth >= 768) {
  //     // Initialize AOS
  //     AOS.init({
  //       duration: 1000,
  //       once: true,
  //       easing: 'ease-out-cubic',
  //     });

  //     // GSAP animations for cards
  //     const cards = document.querySelectorAll('.pricing-card');
  //     cards.forEach((card, index) => {
  //       gsap.fromTo(
  //         card,
  //         { opacity: 0, y: 100, scale: 0.9 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           scale: 1,
  //           duration: 0.8,
  //           delay: index * 0.2,
  //           ease: 'power3.out',
  //           scrollTrigger: {
  //             trigger: card,
  //             start: 'top 80%',
  //             end: 'bottom 20%',
  //             toggleActions: 'play none none reverse',
  //           },
  //         }
  //       );
  //     });

  //     // Floating animation for popular badge
  //     gsap.to('.popular-badge', {
  //       y: -5,
  //       duration: 1.5,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: 'power1.inOut',
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (window.innerWidth >= 768) {

  //     const cards = document.querySelectorAll(".pricing-card");

  //     // initial state
  //     gsap.set(cards, { opacity: 0, y: 60, scale: 0.95 });

  //     // batch animation (faster than loop)
  //     ScrollTrigger.batch(cards, {
  //       start: "top 95%",
  //       onEnter: (batch) =>
  //         gsap.to(batch, {
  //           opacity: 1,
  //           y: 0,
  //           scale: 1,
  //           duration: 0.35,
  //           stagger: 0.08,
  //           ease: "power1.out",
  //         }),
  //     });

  //     // floating popular badge
  //     gsap.to(".popular-badge", {
  //       y: -4,
  //       duration: 1.2,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "power1.inOut",
  //     });

  //   }

  //   return () => {
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //   };
  // }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // fixed navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  // const pricingPlans = [
  //   {
  //     name: "Starter",
  //     price: "₹50K",
  //     period: "per project",
  //     description: "Up to 5 projects/quarter",
  //     features: [
  //       "Unlimited layouts per project",
  //       "Unlimited revisions",
  //       "CAD outputs",
  //       "Compliance validation",
  //       "Email support",
  //     ],
  //     buttonText: "Get Started",
  //     popular: false,
  //     align: "left",
  //   },
  //   {
  //     name: "Growth",
  //     price: "₹1.25L",
  //     period: "per quarter",
  //     description: "Up to 10 projects/quarter",
  //     features: [
  //       "All Starter features",
  //       "Unlimited projects",
  //       "Team access (5 seats)",
  //       "Priority support",
  //       "Analytics reports",
  //     ],
  //     buttonText: "Most Popular",
  //     popular: true,
  //     align: "center",
  //   },
  //   {
  //     name: "Enterprise",
  //     price: "₹2.5L",
  //     period: "per quarter",
  //     description: "20+ projects/quarter",
  //     features: [
  //       "All Growth features",
  //       "Unlimited team seats",
  //       "API access",
  //       "Dedicated support",
  //       "Custom compliance rules",
  //     ],
  //     buttonText: "Contact Sales",
  //     popular: false,
  //     align: "right",
  //   },
  // ];

  return (
    <section className="min-h-screen bg-[#111317] text-white py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 text-white">
            {t?.pricingtitle}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">{t?.pricingdescription}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative border-2 ${
                plan.popular ? "border-[#05df72]" : "border-gray-800"
              } rounded-2xl p-8 hover:border-[#05df72] transition-all duration-500`}
              //  hover:shadow-[0_0_30px_rgba(5,223,114,0.3)] group
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="popular-badge absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#05df72] text-black px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  POPULAR
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#05df72] transition-colors duration-300">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-white to-[#05df72] bg-clip-text text-transparent">
                  {plan.price}
                </span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-[#05df72] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("contactus")}
                className={`group w-full py-3 rounded-lg font-semibold transition-all duration-300 
  flex items-center justify-center gap-2
  ${
    plan.popular
      ? "bg-[#05df72] text-black hover:bg-[#05df72] shadow-lg hover:shadow-[0_0_20px_rgba(0,146,184,0.5)]"
      : "bg-transparent border-2 border-[#05df72] text-[#05df72] hover:bg-[#05df72] hover:text-black"
  } transform hover:scale-105`}
              >
                {plan.buttonText}

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

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#05df72]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <div className="border-2 border-[#05df72] rounded-2xl p-8 text-center hover:border-[#05df72] transition-all duration-500">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-[#05df72] bg-clip-text text-transparent">
            {t?.ro}
          </h3>

          <div className="space-y-4 text-gray-300">
            <p className="text-lg">
              {t?.project}{" "}
              <span className="text-[#05df72] font-bold">{t?.ho}</span> ×
              {t?.cost} <span className="text-white font-bold">{t?.eight}</span>
            </p>
            <p className="text-lg">
              {t?.parking}{" "}
              <span className="text-[#05df72] font-bold">{t?.space}</span> ×{" "}
              {t?.revenue}{" "}
              <span className="text-white font-bold">{t?.revenueGain}</span>
            </p>
            <p className="text-xl font-bold mt-6 text-[#05df72]">{t?.pro}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
