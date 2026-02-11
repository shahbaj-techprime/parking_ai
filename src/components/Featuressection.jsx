// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const features = [
//   {
//     icon: "🎯",
//     title: "Intelligent Space Optimization (50mm Increment Logic)",
//     description: "Parking AI absorbs dead space when sweat, a 4,900 mm column span yields 3 spaces with waste. Placing AI yields 4 spaces. By distributing 900 mm intelligently across bays, On a 6-level basement that's, 15–45 extra spaces = ₹5–₹45 lakh revenue gain.",
//     highlight: "15–45 extra spaces",
//   },
//   {
//     icon: "✓",
//     title: "8 Automated Compliance Checks",
//     description: "Before you see the layout, Parking AI validates:",
//     checks: [
//       "Turning radius (8.00m outer radius per NBC)",
//       "Aisle widths (3.6m one-way, 6.0m two-way)",
//       "Bay minimum dimensions & width",
//       "Column obstruction/clearance (door fully rotated)",
//       "PH bays (3.6m × 5.0m with 2.4m+)",
//       "Fire exit path (door access)",
//       "Ramp pitch/landing (max. 20%)",
//       "Parking target (zone-specific norms)"
//     ],
//     footer: "One issue found? AI suggests auto-repair. One click to fix.",
//   },
//   {
//     icon: "📐",
//     title: "Native AutoCAD Integration",
//     description: "Works directly with DXF and DWG files. No redrawing required. Exports contractor-ready CAD with proper layers, color-coding, annotations. Architects never leave their CAD workflow.",
//   },
//   {
//     icon: "🔧",
//     title: "Manual Override + Reactive AI",
//     description: "You're in control. Move a column? AI updates surrounding bays instantly. Swap a bay to 4-wheeler? System re-validates in real time. Full version control (RI saved edit, RI backed undo etc.)",
//   },
//   {
//     icon: "📊",
//     title: "Capacity-Driven Reverse Engineering",
//     description: "Design backward from parking target. Set your goal (750 spaces), and the engine calculates if it's feasible. If not, it tells you why and suggests solutions (add a level, expand the ramp, etc.)",
//   },
//   {
//     icon: "🚴",
//     title: "Bike Parking Auto-Integration",
//     description: "Residual zones classified: If 'Can a 2km × 2km bike bay fit more efficient than forcing car parking', the engine auto-converts and flags it for your approval.",
//   },
// ];

// export default function FeaturesSection() {
//   const cardsRef = useRef([]);
//   const connectorsRef = useRef([]);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   useEffect(() => {
//     // Animate cards
//     cardsRef.current.forEach((card, index) => {
//       if (!card) return;

//       // Stagger animation based on position
//       const delay = index * 0.15;
      
//       gsap.fromTo(
//         card,
//         {
//           opacity: 0,
//           y: 60,
//           scale: 0.9,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.8,
//           delay: delay,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%",
//             end: "top 60%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });

//     // Animate connectors
//     connectorsRef.current.forEach((connector, index) => {
//       if (!connector) return;

//       gsap.fromTo(
//         connector,
//         {
//           scaleX: 0,
//           opacity: 0,
//         },
//         {
//           scaleX: 1,
//           opacity: 0.3,
//           duration: 0.6,
//           delay: index * 0.15 + 0.3,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: connector,
//             start: "top 90%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       style={{
//         backgroundColor: "#000000",
//         color: "#ffffff",
//         padding: "8rem 0",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Animated background grid */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//           pointerEvents: "none",
//         }}
//       />

//       <div
//         style={{
//           maxWidth: "1400px",
//           margin: "0 auto",
//           padding: "0 2rem",
//           position: "relative",
//         }}
//       >
//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: "6rem" }}>
//           {/* <div
//             style={{
//               display: "inline-block",
//               padding: "0.5rem 1.5rem",
//               border: "1px solid rgba(255,255,255,0.2)",
//               borderRadius: "2rem",
//               marginBottom: "1.5rem",
//               fontSize: "0.875rem",
//               letterSpacing: "0.1em",
//               textTransform: "uppercase",
//             }}
//           >
//             Why Choose Us
//           </div> */}

//           <h2
//             style={{
//               fontSize: "3.5rem",
//               fontWeight: "700",
//               marginBottom: "1.5rem",
//               letterSpacing: "-0.03em",
//               lineHeight: "1.1",
//             }}
//           >
//             Features Built for Real Parking
//           </h2>

//           <p
//             style={{
//               fontSize: "1.25rem",
//               color: "#888888",
//               maxWidth: "700px",
//               margin: "0 auto",
//               lineHeight: "1.6",
//             }}
//           >
//             Every feature designed to save time, maximize revenue, and guarantee
//             compliance.
//           </p>
//         </div>

//         {/* Features Grid with Connectors */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(2, 1fr)",
//             gap: "3rem",
//             position: "relative",
//           }}
//         >
//           {features.map((feature, index) => (
//             <div key={index} style={{ position: "relative" }}>
//               {/* Horizontal connector line (except last row) */}
//               {index < features.length - 2 && index % 2 === 0 && (
//                 <div
//                   ref={(el) => (connectorsRef.current[index] = el)}
//                   style={{
//                     position: "absolute",
//                     top: "50%",
//                     right: "-3rem",
//                     width: "3rem",
//                     height: "1px",
//                     backgroundColor: "rgba(255,255,255,0.2)",
//                     transformOrigin: "left",
//                     zIndex: 0,
                   
//                   }}
//                 />
//               )}

//               {/* Vertical connector line (for odd cards) */}
//               {index % 2 === 1 && index < features.length - 1 && (
//                 <div
//                   ref={(el) =>
//                     (connectorsRef.current[index + features.length] = el)
//                   }
//                   style={{
//                     position: "absolute",
//                     bottom: "-3rem",
//                     left: "50%",
//                     width: "1px",
//                     height: "3rem",
//                     backgroundColor: "rgba(255,255,255,0.2)",
//                     transformOrigin: "top",
//                     zIndex: 0,
//                   }}
//                 />
//               )}

//               {/* Feature Card */}
//               <div
//                 ref={(el) => (cardsRef.current[index] = el)}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 style={{
//                   position: "relative",
//                   padding: "2.5rem",
                 
//                   border:
//                     hoveredIndex === index
//                       ? "2px solid #0092b8"
//                       : "2px solid rgba(255,255,255,0.15)",
//                   borderRadius: "1rem",
//                    border:'2px solid #0092b8',
//                   backgroundColor:
//                     hoveredIndex === index
//                       ? "rgba(255,255,255,0.03)"
//                       : "transparent",
//                   transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//                   cursor: "pointer",
//                   overflow: "hidden",
//                   zIndex: hoveredIndex === index ? 10 : 1,
//                   transform:
//                     hoveredIndex === index
//                       ? "translateY(-8px) scale(1.02)"
//                       : "translateY(0) scale(1)",
//                 }}
//               >
//                 {/* Hover glow effect */}
//                 {hoveredIndex === index && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "-50%",
//                       left: "-50%",
//                       width: "200%",
//                       height: "200%",
//                       background:
//                         "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
//                       pointerEvents: "none",
//                       animation: "rotate 8s linear infinite",
//                     }}
//                   />
//                 )}

//                 {/* Icon */}
//                 <div
//                   style={{
//                     width: "4rem",
//                     height: "4rem",
//                     borderRadius: "0.75rem",
//                     border: "1px solid rgba(255,255,255,0.2)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "2rem",
//                     marginBottom: "1.5rem",
//                     border:'2px solid #0092b8',
//                     backgroundColor:
//                       hoveredIndex === index
//                         ? "rgba(255,255,255,0.1)"
//                         : "transparent",
//                     transition: "all 0.4s ease",
//                   }}
//                 >
//                   {feature.icon}
//                 </div>

//                 {/* Title */}
//                 <h3
//                   style={{
//                     fontSize: "1.5rem",
//                     fontWeight: "600",
//                     marginBottom: "1rem",
//                     lineHeight: "1.3",
//                     color:
//                       hoveredIndex === index ? "#ffffff" : "rgba(255,255,255,0.9)",
//                     transition: "color 0.3s ease",
//                   }}
//                 >
//                   {feature.title}
//                 </h3>

//                 {/* Description */}
//                 <p
//                   style={{
//                     fontSize: "1rem",
//                     color: "rgba(255,255,255,0.6)",
//                     lineHeight: "1.7",
//                     marginBottom: feature.checks ? "1rem" : "0",
//                   }}
//                 >
//                   {feature.description}
//                 </p>

//                 {/* Checks List (if exists) */}
//                 {feature.checks && (
//                   <ul
//                     style={{
//                       listStyle: "none",
//                       padding: 0,
//                       margin: "1rem 0",
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "0.5rem",
//                     }}
//                   >
//                     {feature.checks.map((check, i) => (
//                       <li
//                         key={i}
//                         style={{
//                           fontSize: "0.9rem",
//                           color: "rgba(255,255,255,0.5)",
//                           paddingLeft: "1.5rem",
//                           position: "relative",
//                         }}
//                       >
//                         <span
//                           style={{
//                             position: "absolute",
//                             left: 0,
//                             color: "rgba(255,255,255,0.4)",
//                           }}
//                         >
//                           ✓
//                         </span>
//                         {check}
//                       </li>
//                     ))}
//                   </ul>
//                 )}

//                 {/* Footer (if exists) */}
//                 {feature.footer && (
//                   <p
//                     style={{
//                       fontSize: "0.9rem",
//                       color: "rgba(255,255,255,0.7)",
//                       marginTop: "1rem",
//                       fontStyle: "italic",
//                     }}
//                   >
//                     {feature.footer}
//                   </p>
//                 )}

//                 {/* Highlight Badge (if exists) */}
//                 {feature.highlight && (
//                   <div
//                     style={{
//                       display: "inline-block",
//                       padding: "0.5rem 1rem",
//                       backgroundColor: "rgba(255,255,255,0.1)",
//                       border: "1px solid rgba(255,255,255,0.2)",
//                       borderRadius: "0.5rem",
//                       fontSize: "0.875rem",
//                       fontWeight: "600",
//                       marginTop: "1rem",
//                     }}
//                   >
//                     {feature.highlight}
//                   </div>
//                 )}

//                 {/* Number indicator */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "1.5rem",
//                     right: "1.5rem",
//                     width: "2rem",
//                     height: "2rem",
//                     borderRadius: "50%",
//                     border: "1px solid rgba(255,255,255,0.2)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "0.75rem",
//                     fontWeight: "600",
//                     color: "rgba(255,255,255,0.4)",
//                   }}
//                 >
//                   {String(index + 1).padStart(2, "0")}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "🎯",
    title: "Intelligent Space Optimization (50mm Increment Logic)",
    description:
      "Parking AI absorbs dead space when sweat, a 4,900 mm column span yields 3 spaces with waste. Placing AI yields 4 spaces. By distributing 900 mm intelligently across bays, On a 6-level basement that's, 15–45 extra spaces = ₹5–₹45 lakh revenue gain.",
    highlight: "15–45 extra spaces",
  },
  {
    icon: "✓",
    title: "8 Automated Compliance Checks",
    description: "Before you see the layout, Parking AI validates:",
    checks: [
      "Turning radius (8.00m outer radius per NBC)",
      "Aisle widths (3.6m one-way, 6.0m two-way)",
      "Bay minimum dimensions & width",
      "Column obstruction/clearance (door fully rotated)",
      "PH bays (3.6m × 5.0m with 2.4m+)",
      "Fire exit path (door access)",
      "Ramp pitch/landing (max. 20%)",
      "Parking target (zone-specific norms)",
    ],
    footer: "One issue found? AI suggests auto-repair. One click to fix.",
  },
  {
    icon: "📐",
    title: "Native AutoCAD Integration",
    description:
      "Works directly with DXF and DWG files. No redrawing required. Exports contractor-ready CAD with proper layers, color-coding, annotations. Architects never leave their CAD workflow.",
  },
  {
    icon: "🔧",
    title: "Manual Override + Reactive AI",
    description:
      "You're in control. Move a column? AI updates surrounding bays instantly. Swap a bay to 4-wheeler? System re-validates in real time. Full version control (RI saved edit, RI backed undo etc.)",
  },
  {
    icon: "📊",
    title: "Capacity-Driven Reverse Engineering",
    description:
      "Design backward from parking target. Set your goal (750 spaces), and the engine calculates if it's feasible. If not, it tells you why and suggests solutions (add a level, expand the ramp, etc.)",
  },
  {
    icon: "🚴",
    title: "Bike Parking Auto-Integration",
    description:
      "Residual zones classified: If 'Can a 2km × 2km bike bay fit more efficient than forcing car parking', the engine auto-converts and flags it for your approval.",
  },
];

export default function FeaturesSection() {
  const cardsRef = useRef([]);
  const connectorsRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Only animate on desktop
    if (window.innerWidth >= 768) {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const delay = index * 0.15;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      connectorsRef.current.forEach((connector, index) => {
        if (!connector) return;
        gsap.fromTo(
          connector,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 0.3,
            duration: 0.6,
            delay: index * 0.15 + 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: connector,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#000000",
         backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
  backgroundRepeat: "repeat",
  backgroundSize: "120px 120px",
        color: "#ffffff",
        padding: "8rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1.5rem", lineHeight: "1.2" }}>
            Features Built for Real Parking
          </h2>
          <p style={{ fontSize: "1rem", color: "#888", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
            Every feature designed to save time, maximize revenue, and guarantee compliance.
          </p>
        </div>

        {/* Features Grid */}
        <div
      className="features-grid"
        >
          {features.map((feature, index) => (
            <div key={index} style={{ position: "relative" }}>
              {/* Connector lines */}
              {index < features.length - 2 && index % 2 === 0 && (
                <div
                  ref={(el) => (connectorsRef.current[index] = el)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "-3rem",
                    width: "3rem",
                    height: "1px",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    transformOrigin: "left",
                  }}
                />
              )}
              {index % 2 === 1 && index < features.length - 1 && (
                <div
                  ref={(el) => (connectorsRef.current[index + features.length] = el)}
                  style={{
                    position: "absolute",
                    bottom: "-3rem",
                    left: "50%",
                    width: "1px",
                    height: "3rem",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    transformOrigin: "top",
                  }}
                />
              )}

              {/* Feature Card */}
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  padding: "2rem",
                  border: "2px solid #0092b8",
                  borderRadius: "1rem",
                  backgroundColor: hoveredIndex === index ? "rgba(255,255,255,0.03)" : "transparent",
                  cursor: "pointer",
                  overflow: "hidden",
                  zIndex: hoveredIndex === index ? 10 : 1,
                  transform: hoveredIndex === index ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                  transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "0.75rem",
                    border: "2px solid #0092b8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                  }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.75rem" }}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: "1.6", marginBottom: feature.checks ? "0.5rem" : "0" }}>
                  {feature.description}
                </p>

                {/* Checks */}
                {feature.checks && (
                  <ul style={{ listStyle: "none", padding: 0, margin: "0.5rem 0", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    {feature.checks.map((check, i) => (
                      <li key={i} style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", paddingLeft: "1.2rem", position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.4)" }}>✓</span>
                        {check}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer */}
                {feature.footer && <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "0.5rem", fontStyle: "italic" }}>{feature.footer}</p>}

                {/* Highlight */}
                {feature.highlight && (
                  <div style={{ display: "inline-block", padding: "0.4rem 0.8rem", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.5rem", fontSize: "0.75rem", fontWeight: "600", marginTop: "0.5rem" }}>
                    {feature.highlight}
                  </div>
                )}

                {/* Number */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    width: "1.8rem",
                    height: "1.8rem",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile grid override */}
     <style jsx>{`
  .features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (max-width: 768px) {
    .features-grid {
      grid-template-columns: 1fr;
      gap:3rem
    }
  }
`}</style>
    </section>
  );
}
