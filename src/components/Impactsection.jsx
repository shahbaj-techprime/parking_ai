

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/app/translations/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

// const personas = [
//   {
//     title: "For Developers",
//     icon: (
//    <svg
//   width="40"
//   height="40"
//   viewBox="0 0 24 24"
//   fill="none"
//   stroke="url(#grad1)"
//   strokeWidth="2"
//   strokeLinecap="round"
//   strokeLinejoin="round"
// >
//   <defs>
//     <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
//       <stop offset="0%" stopColor="#3b82f6" />
//       <stop offset="100%" stopColor="#9333ea" />
//     </linearGradient>
//   </defs>
//   <polyline points="16 18 22 12 16 6" />
//   <polyline points="8 6 2 12 8 18" />
// </svg>
//     ),
//     before: {
//       label: "Before:",
//       text: "25 hours design + 4–6 weeks approvals + ₹37.5K–₹75K cost + 650 spaces = lost revenue",
//     },
//     after: {
//       label: "After:",
//       text: "10 minutes design + 1–2 days approvals + tool cost + 750 spaces = ",
//       highlight: "₹50–₹300L revenue gain",
//     },
//   },
//   {
//     title: "For Architects",
//     icon: "📐",
//     before: {
//       label: "Before:",
//       text: "15–30 hours per project on parking (unpredictable iterations, compliance risk)",
//     },
//     after: {
//       label: "After:",
//       text: "10 minutes per project on parking + ",
//       highlight: "reclaim 15–30 hours for higher-value design work",
//       suffix: " + zero compliance liability",
//     },
//   },
//   {
//     title: "For Structural Consultants",
//     icon: "🔧",
//     before: {
//       label: "Before:",
//       text: "2–3 week back-and-forth on column placement vs. parking feasibility",
//     },
//     after: {
//       label: "After:",
//       text: "",
//       highlight: "Parking constraints known day 1",
//       suffix:
//         " + structural grid optimized with parking pre-validated + zero conflicts",
//     },
//   },
// ];

export default function ImpactSection() {
     const { t } = useLanguage();
      const personas = t.personas || [];
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const isMobileView = window.innerWidth < 768;

    // Only animate on desktop
    if (!isMobileView && sectionRef.current) {
      // Create a timeline for sequential animations
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Each card animates in sequence as you scroll
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // Start animation when card is 85% down the viewport
              end: "bottom 15%", // Keep it visible until it's almost out of view
              toggleActions: "play none none reverse",
              scrub: false, // Smooth animation without scrubbing
            },
          },
        );

        // Animate the before card
        const beforeCard = card.querySelector("[data-before]");
        if (beforeCard) {
          gsap.fromTo(
            beforeCard,
            {
              opacity: 0,
              x: -60,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        // Animate the arrow
        const arrow = card.querySelector("[data-arrow]");
        if (arrow) {
          gsap.fromTo(
            arrow,
            {
              opacity: 0,
              scale: 0,
              rotation: -180,
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.5,
              delay: 0.3,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        // Animate the after card
        const afterCard = card.querySelector("[data-after]");
        if (afterCard) {
          gsap.fromTo(
            afterCard,
            {
              opacity: 0,
              x: 60,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        // Animate connecting line
        const connectingLine = card.querySelector("[data-line]");
        if (connectingLine) {
          gsap.fromTo(
            connectingLine,
            {
              scaleY: 0,
              transformOrigin: "top center",
            },
            {
              scaleY: 1,
              duration: 0.5,
              delay: 0.8,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#000000",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "120px 120px",
        color: "#ffffff",
        padding: isMobile ? "4rem 0" : "8rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: isMobile ? "30px 30px" : "50px 50px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isMobile ? "0 1rem" : "0 2rem",
          position: "relative",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: isMobile ? "3rem" : "5rem" }}>
          <h2
            style={{
              fontSize: isMobile ? "2rem" : "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
              letterSpacing: "-0.03em",
              lineHeight: "1.1",
              color: "#ffffff",
            }}
          >
           {t.ImpactSectiontitle}
          </h2>

          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.25rem",
              color: "#999999",
              maxWidth: "700px",
              lineHeight: "1.6",
            }}
          >
            {t.ImpactSectiondec}
          </p>
        </div>

        {/* Persona Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "3rem" : "4rem",
          }}
        >
          {personas.map((persona, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                position: "relative",
              }}
            >
              {/* Persona Title with Icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: isMobile ? "0.75rem" : "1rem",
                  marginBottom: isMobile ? "1.5rem" : "2rem",
                }}
              >
                <div
                  style={{
                    width: isMobile ? "2.5rem" : "3.5rem",
                    height: isMobile ? "2.5rem" : "3.5rem",
                    borderRadius: "0.75rem",
                    border: "2px solid #05df72",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isMobile ? "1.25rem" : "1.75rem",
                  }}
                >
                  {persona.icon}
                </div>
                <h3
                  style={{
                    fontSize: isMobile ? "1.25rem" : "2rem",
                    fontWeight: "700",
                    margin: 0,
                    color: "#ffffff",
                  }}
                >
                  {persona.title}
                </h3>
              </div>

              {/* Before/After Comparison */}
              <div
                style={{
                  display: isMobile ? "flex" : "grid",
                  flexDirection: isMobile ? "column" : undefined,
                  gridTemplateColumns: isMobile ? undefined : "1fr auto 1fr",
                  gap: isMobile ? "1rem" : "2rem",
                  alignItems: isMobile ? "stretch" : "center",
                }}
              >
                {/* Before Card */}
                <div
                  data-before
                  style={{
                    padding: isMobile ? "1.25rem" : "2rem",
                    border: "2px solid rgba(255,255,255,0.2)",
                    borderRadius: "1rem",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 40px rgba(255,255,255,0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(255,255,255,0.05)";
                    }
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? "0.65rem" : "0.75rem",
                      fontWeight: "700",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#666666",
                      marginBottom: isMobile ? "0.75rem" : "1rem",
                    }}
                  >
                    {persona.before.label}
                  </div>
                  <p
                    style={{
                      fontSize: isMobile ? "0.9rem" : "1.125rem",
                      color: "#cccccc",
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    {persona.before.text}
                  </p>
                </div>

                {/* Arrow */}
                {isMobile ? (
                  <div
                    data-arrow
                    style={{
                      width: isMobile ? "2.5rem" : "3rem",
                      height: isMobile ? "2.5rem" : "3rem",
                      borderRadius: "50%",
                      border: "2px solid #ffffff",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: isMobile ? "1.25rem" : "1.5rem",
                      fontWeight: "700",
                      color: "#ffffff",
                      boxShadow: "0 4px 12px rgba(255,255,255,0.1)",
                      zIndex: 10,
                      alignSelf: isMobile ? "center" : undefined,
                    }}
                  >
                    ↓
                  </div>
                ) : (
                  <div
                    data-arrow
                    style={{
                      width: isMobile ? "2.5rem" : "3rem",
                      height: isMobile ? "2.5rem" : "3rem",
                      borderRadius: "50%",
                      border: "2px solid #ffffff",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: isMobile ? "1.25rem" : "1.5rem",
                      fontWeight: "700",
                      color: "#ffffff",
                      boxShadow: "0 4px 12px rgba(255,255,255,0.1)",
                      zIndex: 10,
                      alignSelf: isMobile ? "center" : undefined,
                      transform: isMobile ? "rotate(90deg)" : undefined,
                    }}
                  >
                    →
                  </div>
                )}

                {/* After Card */}
                <div
                  data-after
                  style={{
                    padding: isMobile ? "1.25rem" : "2rem",
                    border: "2px solid #05df72",
                    borderRadius: "1rem",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform =
                        "translateY(-8px) scale(1.02)";
                      e.currentTarget.style.boxShadow =
                        "0 25px 50px rgba(255,255,255,0.15)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(255,255,255,0.08)";
                    }
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? "0.65rem" : "0.75rem",
                      fontWeight: "700",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#ffffff",
                      marginBottom: isMobile ? "0.75rem" : "1rem",
                    }}
                  >
                    {persona.after.label}
                  </div>
                  <p
                    style={{
                      fontSize: isMobile ? "0.9rem" : "1.125rem",
                      color: "#ffffff",
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    {persona.after.text}
                    <span
                      style={{
                        color: "#05df72",
                        fontWeight: "700",
                        padding: isMobile
                          ? "0.15rem 0.35rem"
                          : "0.25rem 0.5rem",
                        borderRadius: "0.25rem",
                        display: "inline-block",
                        marginLeft: persona.after.text ? "0.25rem" : "0",
                      }}
                    >
                      {persona.after.highlight}
                    </span>
                    {persona.after.suffix}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < personas.length - 1 && (
                <div
                  data-line
                  style={{
                    width: "2px",
                    height: isMobile ? "3rem" : "4rem",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    margin: isMobile ? "1.5rem auto" : "2rem auto",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-6px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: isMobile ? "8px" : "10px",
                      height: isMobile ? "8px" : "10px",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
