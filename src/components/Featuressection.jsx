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



// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const features = [
//   {
//     icon: "🎯",
//     title: "Intelligent Space Optimization (50mm Increment Logic)",
//     description:
//       "Parking AI absorbs dead space when sweat, a 4,900 mm column span yields 3 spaces with waste. Placing AI yields 4 spaces. By distributing 900 mm intelligently across bays, On a 6-level basement that's, 15–45 extra spaces = ₹5–₹45 lakh revenue gain.",
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
//       "Parking target (zone-specific norms)",
//     ],
//     footer: "One issue found? AI suggests auto-repair. One click to fix.",
//   },
//   {
//     icon: "📐",
//     title: "Native AutoCAD Integration",
//     description:
//       "Works directly with DXF and DWG files. No redrawing required. Exports contractor-ready CAD with proper layers, color-coding, annotations. Architects never leave their CAD workflow.",
//   },
//   {
//     icon: "🔧",
//     title: "Manual Override + Reactive AI",
//     description:
//       "You're in control. Move a column? AI updates surrounding bays instantly. Swap a bay to 4-wheeler? System re-validates in real time. Full version control (RI saved edit, RI backed undo etc.)",
//   },
//   {
//     icon: "📊",
//     title: "Capacity-Driven Reverse Engineering",
//     description:
//       "Design backward from parking target. Set your goal (750 spaces), and the engine calculates if it's feasible. If not, it tells you why and suggests solutions (add a level, expand the ramp, etc.)",
//   },
//   {
//     icon: "🚴",
//     title: "Bike Parking Auto-Integration",
//     description:
//       "Residual zones classified: If 'Can a 2km × 2km bike bay fit more efficient than forcing car parking', the engine auto-converts and flags it for your approval.",
//   },
// ];

// export default function FeaturesSection() {
//   const cardsRef = useRef([]);
//   const connectorsRef = useRef([]);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   useEffect(() => {
//     // Only animate on desktop
//     if (window.innerWidth >= 768) {
//       cardsRef.current.forEach((card, index) => {
//         if (!card) return;
//         const delay = index * 0.15;
//         gsap.fromTo(
//           card,
//           { opacity: 0, y: 60, scale: 0.9 },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 0.8,
//             delay,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 85%",
//               end: "top 60%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });

//       connectorsRef.current.forEach((connector, index) => {
//         if (!connector) return;
//         gsap.fromTo(
//           connector,
//           { scaleX: 0, opacity: 0 },
//           {
//             scaleX: 1,
//             opacity: 0.3,
//             duration: 0.6,
//             delay: index * 0.15 + 0.3,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: connector,
//               start: "top 90%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });

//       return () => {
//         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       };
//     }
//   }, []);

//   return (
//     <section
//       style={{
//         backgroundColor: "#000000",
//          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
//   backgroundRepeat: "repeat",
//   backgroundSize: "120px 120px",
//         color: "#ffffff",
//         padding: "8rem 0",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background grid */}
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

//       <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>
//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: "6rem" }}>
//           <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1.5rem", lineHeight: "1.2" }}>
//             Features Built for Real Parking
//           </h2>
//           <p style={{ fontSize: "1rem", color: "#888", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
//             Every feature designed to save time, maximize revenue, and guarantee compliance.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div
//       className="features-grid"
//         >
//           {features.map((feature, index) => (
//             <div key={index} style={{ position: "relative" }}>
//               {/* Connector lines */}
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
//                   }}
//                 />
//               )}
//               {index % 2 === 1 && index < features.length - 1 && (
//                 <div
//                   ref={(el) => (connectorsRef.current[index + features.length] = el)}
//                   style={{
//                     position: "absolute",
//                     bottom: "-3rem",
//                     left: "50%",
//                     width: "1px",
//                     height: "3rem",
//                     backgroundColor: "rgba(255,255,255,0.2)",
//                     transformOrigin: "top",
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
//                   padding: "2rem",
//                   border: "2px solid #0092b8",
//                   borderRadius: "1rem",
//                   backgroundColor: hoveredIndex === index ? "rgba(255,255,255,0.03)" : "transparent",
//                   cursor: "pointer",
//                   overflow: "hidden",
//                   zIndex: hoveredIndex === index ? 10 : 1,
//                   transform: hoveredIndex === index ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
//                   transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
//                 }}
//               >
//                 {/* Icon */}
//                 <div
//                   style={{
//                     width: "3.5rem",
//                     height: "3.5rem",
//                     borderRadius: "0.75rem",
//                     border: "2px solid #0092b8",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "1.8rem",
//                     marginBottom: "1rem",
//                   }}
//                 >
//                   {feature.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.75rem" }}>
//                   {feature.title}
//                 </h3>

//                 {/* Description */}
//                 <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: "1.6", marginBottom: feature.checks ? "0.5rem" : "0" }}>
//                   {feature.description}
//                 </p>

//                 {/* Checks */}
//                 {feature.checks && (
//                   <ul style={{ listStyle: "none", padding: 0, margin: "0.5rem 0", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
//                     {feature.checks.map((check, i) => (
//                       <li key={i} style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", paddingLeft: "1.2rem", position: "relative" }}>
//                         <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.4)" }}>✓</span>
//                         {check}
//                       </li>
//                     ))}
//                   </ul>
//                 )}

//                 {/* Footer */}
//                 {feature.footer && <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "0.5rem", fontStyle: "italic" }}>{feature.footer}</p>}

//                 {/* Highlight */}
//                 {feature.highlight && (
//                   <div style={{ display: "inline-block", padding: "0.4rem 0.8rem", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.5rem", fontSize: "0.75rem", fontWeight: "600", marginTop: "0.5rem" }}>
//                     {feature.highlight}
//                   </div>
//                 )}

//                 {/* Number */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "1rem",
//                     right: "1rem",
//                     width: "1.8rem",
//                     height: "1.8rem",
//                     borderRadius: "50%",
//                     border: "1px solid rgba(255,255,255,0.2)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "0.7rem",
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

//       {/* Mobile grid override */}
//      <style jsx>{`
//   .features-grid {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     gap: 3rem;
//   }

//   @media (max-width: 768px) {
//     .features-grid {
//       grid-template-columns: 1fr;
//       gap:3rem
//     }
//   }
// `}</style>
//     </section>
//   );
// }


// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const features = [
//   {
//     icon: "🎯",
//     title: "Intelligent Space Optimization (50mm Increment Logic)",
//     description:
//       "Parking AI absorbs dead space when sweat, a 4,900 mm column span yields 3 spaces with waste. Placing AI yields 4 spaces. By distributing 900 mm intelligently across bays, On a 6-level basement that's, 15–45 extra spaces = ₹5–₹45 lakh revenue gain.",
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
//       "Parking target (zone-specific norms)",
//     ],
//     footer: "One issue found? AI suggests auto-repair. One click to fix.",
//   },
//   {
//     icon: "📐",
//     title: "Native AutoCAD Integration",
//     description:
//       "Works directly with DXF and DWG files. No redrawing required. Exports contractor-ready CAD with proper layers, color-coding, annotations. Architects never leave their CAD workflow.",
//   },
//   {
//     icon: "🔧",
//     title: "Manual Override + Reactive AI",
//     description:
//       "You're in control. Move a column? AI updates surrounding bays instantly. Swap a bay to 4-wheeler? System re-validates in real time. Full version control (RI saved edit, RI backed undo etc.)",
//   },
//   {
//     icon: "📊",
//     title: "Capacity-Driven Reverse Engineering",
//     description:
//       "Design backward from parking target. Set your goal (750 spaces), and the engine calculates if it's feasible. If not, it tells you why and suggests solutions (add a level, expand the ramp, etc.)",
//   },
//   {
//     icon: "🚴",
//     title: "Bike Parking Auto-Integration",
//     description:
//       "Residual zones classified: If 'Can a 2km × 2km bike bay fit more efficient than forcing car parking', the engine auto-converts and flags it for your approval.",
//   },
// ];

// export default function FeaturesSection() {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);
//   const titleRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate title - fast and snappy
//       gsap.from(titleRef.current, {
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//         opacity: 0,
//         y: 60,
//         scale: 0.9,
//         duration: 0.8,
//         ease: "power3.out",
//       });

//       // Animate cards with stagger - much faster
//       cardsRef.current.forEach((card, index) => {
//         if (!card) return;

//         const isEven = index % 2 === 0;
//         const delay = index * 0.1; // Stagger delay

//         // Main card entrance - FAST
//         gsap.from(card, {
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//             onEnter: () => setActiveIndex(index),
//             onLeave: () => setActiveIndex(null),
//             onEnterBack: () => setActiveIndex(index),
//             onLeaveBack: () => setActiveIndex(null),
//           },
//           x: isEven ? -100 : 100,
//           opacity: 0,
//           rotateY: isEven ? -15 : 15,
//           scale: 0.85,
//           duration: 0.7,
//           delay: delay,
//           ease: "power2.out",
//         });

//         // Icon pop animation - separate and snappy
//         const icon = card.querySelector(".feature-icon");
//         if (icon) {
//           gsap.from(icon, {
//             scrollTrigger: {
//               trigger: card,
//               start: "top 80%",
//               toggleActions: "play none none reverse",
//             },
//             scale: 0,
//             rotation: -180,
//             duration: 0.6,
//             delay: delay + 0.2,
//             ease: "back.out(2)",
//           });
//         }

//         // Highlight shimmer effect
//         const highlight = card.querySelector(".feature-highlight");
//         if (highlight) {
//           gsap.fromTo(
//             highlight,
//             { backgroundPosition: "-200% center" },
//             {
//               backgroundPosition: "200% center",
//               duration: 3,
//               repeat: -1,
//               ease: "none",
//               delay: delay,
//             }
//           );
//         }

//         // Number fade in
//         const number = card.querySelector(".card-number");
//         if (number) {
//           gsap.from(number, {
//             scrollTrigger: {
//               trigger: card,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//             opacity: 0,
//             scale: 0.5,
//             duration: 0.5,
//             delay: delay + 0.3,
//             ease: "power2.out",
//           });
//         }
//       });

//       // Parallax background grid - subtle
//       gsap.to(".bg-grid", {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 0.5,
//         },
//         y: -50,
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
//   backgroundRepeat: "repeat",
//   backgroundSize: "120px 120px",
//         position: "relative",
//         minHeight: "100vh",
//         padding: "8rem 2rem",
//         backgroundColor: "#000",
//         overflow: "hidden",
//       }}
//     >
//       {/* Animated background grid */}
//       <div
//         className="bg-grid"
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: `
//             linear-gradient(rgba(0,146,184,0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,146,184,0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: "50px 50px",
//           opacity: 0.3,
//         }}
//       />

//       {/* Floating particles */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "radial-gradient(circle at 20% 50%, rgba(0,146,184,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,146,184,0.15) 0%, transparent 50%)",
//           pointerEvents: "none",
//         }}
//       />

//       <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
//         {/* Header */}
//         <div
//           ref={titleRef}
//           style={{
//             textAlign: "center",
//             marginBottom: "5rem",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "clamp(2rem, 5vw, 3rem)",
//               fontWeight: "800",
//               color: "#fff",
//               // background: "linear-gradient(135deg, #fff 0%, #0092b8 100%)",
//               // WebkitBackgroundClip: "text",
//               // WebkitTextFillColor: "transparent",
//               // marginBottom: "1rem",
//               // letterSpacing: "-0.02em",
//             }}
//           >
//             Features Built for Real Parking
//           </h2>
//           <p
//             style={{
//               fontSize: "1.25rem",
//               color: "rgba(255,255,255,0.7)",
//               maxWidth: "600px",
//               margin: "0 auto",
//             }}
//           >
//             Every feature designed to save time, maximize revenue, and guarantee
//             compliance.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//             gap: "2rem",
//             perspective: "1000px",
//           }}
//         >
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               ref={(el) => (cardsRef.current[index] = el)}
//               style={{
//                 position: "relative",
//                 padding: "2.5rem",
//                 // background:
//                 //   activeIndex === index
//                 //     ? "linear-gradient(135deg, rgba(0,146,184,0.15) 0%, rgba(0,146,184,0.05) 100%)"
//                 //     : "rgba(255,255,255,0.02)",
//                 border: `2px solid ${
//                   activeIndex === index
//                     ? "rgba(0,146,184,0.8)"
//                     : "rgba(0,146,184,0.3)"
//                 }`,
//                 borderRadius: "1.5rem",
//                 transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
//                 transformStyle: "preserve-3d",
//                 cursor: "pointer",
//                 overflow: "hidden",
//               }}
//               // onMouseEnter={() => setActiveIndex(index)}
//               // onMouseLeave={() => setActiveIndex(null)}
//             >
//               {/* Glow effect */}
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: -2,
//                   // background:
//                   //   "linear-gradient(135deg, transparent, rgba(0,146,184,0.3), transparent)",
//                   borderRadius: "1.5rem",
//                   // opacity: activeIndex === index ? 1 : 0,
//                   transition: "opacity 0.5s",
//                   filter: "blur(10px)",
//                   zIndex: -1,
//                 }}
//               />

//               {/* Card number */}
//               {/* <div
//                 className="card-number"
//                 style={{
//                   position: "absolute",
//                   top: "1rem",
//                   right: "1rem",
//                   fontSize: "4rem",
//                   fontWeight: "900",
//                   color: "rgba(0,146,184,0.1)",
//                   lineHeight: 1,
//                 }}
//               >
//                 {String(index + 1).padStart(2, "0")}
//               </div> */}

//               {/* Icon */}
//               <div
//                 className="feature-icon"
//                 style={{
//                   fontSize: "3.5rem",
//                   marginBottom: "1.5rem",
//                   display: "inline-block",
//                   filter: "drop-shadow(0 0 20px rgba(0,146,184,0.5))",
//                 }}
//               >
//                 {feature.icon}
//               </div>

//               {/* Title */}
//               <h3
//                 style={{
//                   fontSize: "1.5rem",
//                   fontWeight: "700",
//                   color: "#fff",
//                   marginBottom: "1rem",
//                   lineHeight: 1.3,
//                 }}
//               >
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p
//                 style={{
//                   fontSize: "1rem",
//                   color: "rgba(255,255,255,0.7)",
//                   lineHeight: 1.6,
//                   marginBottom: feature.checks ? "1.5rem" : "0",
//                 }}
//               >
//                 {feature.description}
//               </p>

//               {/* Checks */}
//               {feature.checks && (
//                 <ul
//                   style={{
//                     listStyle: "none",
//                     padding: 0,
//                     margin: "1.5rem 0",
//                   }}
//                 >
//                   {feature.checks.map((check, i) => (
//                     <li
//                       key={i}
//                       style={{
//                         fontSize: "0.9rem",
//                         color: "rgba(255,255,255,0.6)",
//                         marginBottom: "0.5rem",
//                         paddingLeft: "1.5rem",
//                         position: "relative",
//                       }}
//                     >
//                       <span
//                         style={{
//                           position: "absolute",
//                           left: 0,
//                           color: "#0092b8",
//                         }}
//                       >
//                         ✓
//                       </span>
//                       {check}
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               {/* Footer */}
//               {feature.footer && (
//                 <p
//                   style={{
//                     fontSize: "0.95rem",
//                     color: "#0092b8",
//                     fontWeight: "600",
//                     marginTop: "1rem",
//                   }}
//                 >
//                   {feature.footer}
//                 </p>
//               )}

//               {/* Highlight */}
//               {feature.highlight && (
//                 <div
//                   className="feature-highlight"
//                   style={{
//                     marginTop: "1.5rem",
//                     padding: "1rem 1.5rem",
//                     background:
//                       "linear-gradient(90deg, rgba(0,146,184,0.2), rgba(0,146,184,0.4), rgba(0,146,184,0.2))",
//                     backgroundSize: "200% 100%",
//                     borderRadius: "0.75rem",
//                     border: "1px solid rgba(0,146,184,0.5)",
//                     textAlign: "center",
//                     fontSize: "1.1rem",
//                     fontWeight: "700",
//                     color: "#fff",
//                   }}
//                 >
//                   {feature.highlight}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// ldfksa



// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // const advantages = [
// //   {
// //     title: "Design Iterations = Project Delay",
// //     points: [
// //       "All parking designs are done manually. Move a column? Redesign 20+ bays. Rejected by the authority? Entire design needs to be done again. Average project: 3-5 cycles of design revisions, 4-6 weeks of lost time, ₹37.5K-₹75K in design costs",
// //     ],
// //   },
// //   {
// //     title: "NBC Compliance is a Minefield",
// //     points: [
// //       "National Building Code has 10+ stringent parking standards (turning radius, aisle width, PH bays, ramp landings). Violate one, and the project gets rejected by the civic body. Most designs get rejected after submission, requiring costly redesigns.",
// //     ],
// //   },
// //   {
// //     title: "Lost Revenue Due to Inefficient Designs",
// //     points: [
// //       "Manual designs can only capture 85-90% of the maximum parking capacity. Dead space, inefficient circulation paths, and inefficient angles. This translates to 650 parking spots instead of 750, resulting in lost revenue of ₹50-₹300 lakh on a single project.",
// //     ],
// //   },
// //   {
// //     title: "Structural Coordination Chaos",
// //     points: [
// //       "Column locations, ramp locations, and lift cores do not coordinate well with parking designs. Emails back and forth. No what-if analysis. No single point of truth. This leads to either inefficient parking designs or inefficient structural designs or a 2-week delay.",
// //     ],
// //   },
// //   {
// //     title: "Compliance Errors With Legal Consequences",
// //     points: [
// //       "PH bays placed in tandem positions. Ramp entries too close to aisles. Missing landing distances. Municipal inspector flags issues after submission. Redesign, reschedule, reputation damage.",
// //     ],
// //   },
// // ];

// const features = [
//   {
//     icon: "🎯",
//     title: "Intelligent Space Optimization (50mm Increment Logic)",
//     description:
//       "Parking AI absorbs dead space when sweat, a 4,900 mm column span yields 3 spaces with waste. Placing AI yields 4 spaces. By distributing 900 mm intelligently across bays, On a 6-level basement that's, 15–45 extra spaces = ₹5–₹45 lakh revenue gain.",
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
//       "Parking target (zone-specific norms)",
//     ],
//     footer: "One issue found? AI suggests auto-repair. One click to fix.",
//   },
//   {
//     icon: "📐",
//     title: "Native AutoCAD Integration",
//     description:
//       "Works directly with DXF and DWG files. No redrawing required. Exports contractor-ready CAD with proper layers, color-coding, annotations. Architects never leave their CAD workflow.",
//   },
//   {
//     icon: "🔧",
//     title: "Manual Override + Reactive AI",
//     description:
//       "You're in control. Move a column? AI updates surrounding bays instantly. Swap a bay to 4-wheeler? System re-validates in real time. Full version control (RI saved edit, RI backed undo etc.)",
//   },
//   {
//     icon: "📊",
//     title: "Capacity-Driven Reverse Engineering",
//     description:
//       "Design backward from parking target. Set your goal (750 spaces), and the engine calculates if it's feasible. If not, it tells you why and suggests solutions (add a level, expand the ramp, etc.)",
//   },
//   {
//     icon: "🚴",
//     title: "Bike Parking Auto-Integration",
//     description:
//       "Residual zones classified: If 'Can a 2km × 2km bike bay fit more efficient than forcing car parking', the engine auto-converts and flags it for your approval.",
//   },
// ];

// export default function SeamlessGallery() {
//   const sectionRef = useRef(null);
//   const galleryRef = useRef(null);
//   const featuresSectionRef = useRef(null);
//   const featuresGalleryRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     if (isMobile) return;

//     gsap.registerPlugin(ScrollTrigger);

//     // Problems Gallery
//     const cards = gsap.utils.toArray(".problem-card");

//     ScrollTrigger.getAll().forEach((trigger) => {
//       if (trigger.vars.trigger === sectionRef.current) {
//         trigger.kill();
//       }
//     });

//     let activeIndex = 0;

//     const scrollTrigger = ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "+=3000",
//       pin: galleryRef.current,
//       scrub: 1,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         const newIndex = Math.min(
//           Math.floor(progress * advantages?.length),
//           advantages?.length - 1
//         );

//         if (newIndex !== activeIndex) {
//           activeIndex = newIndex;
//           setCurrentIndex(newIndex);
//           updateCards(newIndex);
//         }
//       },
//     });

//     function updateCards(activeIndex) {
//       cards.forEach((card, index) => {
//         const offset = index - activeIndex;

//         gsap.to(card, {
//           x: offset * 120 + "%",
//           scale: offset === 0 ? 1 : 0.8,
//           opacity: Math.abs(offset) > 2 ? 0 : offset === 0 ? 1 : 0.5,
//           zIndex: offset === 0 ? 100 : 10 - Math.abs(offset),
//           duration: 0.5,
//           ease: "power2.out",
//         });
//       });
//     }

//     updateCards(0);

//     // Features Gallery
//     const featureCards = gsap.utils.toArray(".feature-card");

//     ScrollTrigger.getAll().forEach((trigger) => {
//       if (trigger.vars.trigger === featuresSectionRef.current) {
//         trigger.kill();
//       }
//     });

//     let activeFeatureIndex = 0;

//     const featuresScrollTrigger = ScrollTrigger.create({
//       trigger: featuresSectionRef.current,
//       start: "top top",
//       end: "+=3000",
//       pin: featuresGalleryRef.current,
//       scrub: 1,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         const newIndex = Math.min(
//           Math.floor(progress * features.length),
//           features.length - 1
//         );

//         if (newIndex !== activeFeatureIndex) {
//           activeFeatureIndex = newIndex;
//           setCurrentFeatureIndex(newIndex);
//           updateFeatureCards(newIndex);
//         }
//       },
//     });

//     function updateFeatureCards(activeIndex) {
//       featureCards.forEach((card, index) => {
//         const offset = index - activeIndex;

//         gsap.to(card, {
//           x: offset * 120 + "%",
//           scale: offset === 0 ? 1 : 0.8,
//           opacity: Math.abs(offset) > 2 ? 0 : offset === 0 ? 1 : 0.5,
//           zIndex: offset === 0 ? 100 : 10 - Math.abs(offset),
//           duration: 0.5,
//           ease: "power2.out",
//         });
//       });
//     }

//     updateFeatureCards(0);

//     return () => {
//       scrollTrigger.kill();
//       featuresScrollTrigger.kill();
//     };
//   }, [isMobile]);

//   const handleMobileNext = () => {
//     if (currentIndex < advantages?.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handleMobilePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const handleMobileFeatureNext = () => {
//     if (currentFeatureIndex < features.length - 1) {
//       setCurrentFeatureIndex(currentFeatureIndex + 1);
//     }
//   };

//   const handleMobileFeaturePrev = () => {
//     if (currentFeatureIndex > 0) {
//       setCurrentFeatureIndex(currentFeatureIndex - 1);
//     }
//   };

//   // Mobile version
//   if (isMobile) {
//     return (
//       <>
//         {/* Features Section */}
//         <section className="relative w-full bg-black py-12 px-4">
//           <div className="max-w-lg mx-auto">
//             <div className="text-center mb-10">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
//               Features Built for Real Parking
//               </h2>
//               <p className="text-gray-400 text-sm md:text-base">
//                Every feature designed to save time, maximize revenue, and guarantee compliance.
//               </p>
//             </div>

//             <div className="relative overflow-hidden">
//               <div
//                 className="flex transition-transform duration-500 ease-out"
//                 style={{
//                   transform: `translateX(-${currentFeatureIndex * 100}%)`,
//                 }}
//               >
//                 {features.map((feature, index) => (
//                   <div key={index} className="w-full flex-shrink-0 px-2">
//                     <div className="relative group">
//                       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 opacity-75 blur-sm"></div>

//                       <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-2xl p-6 min-h-[450px] flex flex-col border border-gray-800">
//                         <div className="mb-4">
//                           <div className="text-4xl mb-3">{feature.icon}</div>
//                           <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
//                             <span className="text-xs font-bold text-green-400">
//                               Solution #{index + 1}
//                             </span>
//                           </div>
//                           <h3 className="text-xl font-bold text-white leading-tight">
//                             {feature.title}
//                           </h3>
//                         </div>

//                         <div className="flex-1 mb-4">
//                           <p className="text-gray-300 leading-relaxed text-sm mb-3">
//                             {feature.description}
//                           </p>
                          
//                           {feature.checks && (
//                             <ul className="space-y-1 text-xs text-gray-400 mb-3">
//                               {feature.checks.map((check, checkIndex) => (
//                                 <li key={checkIndex} className="flex items-start gap-2">
//                                   <span className="text-green-400 mt-0.5">✓</span>
//                                   <span>{check}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}

//                           {feature.highlight && (
//                             <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg">
//                               <span className="text-sm font-bold text-green-400">
//                                 {feature.highlight}
//                               </span>
//                             </div>
//                           )}

//                           {feature.footer && (
//                             <p className="text-xs text-gray-400 italic mt-3">
//                               {feature.footer}
//                             </p>
//                           )}
//                         </div>

//                         <div className="pt-4 border-t border-gray-800">
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-2">
//                               <div className="relative">
//                                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                                 <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
//                               </div>
//                               <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">
//                                 AI-Powered
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex justify-center gap-2 mt-6">
//               {features.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentFeatureIndex(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     index === currentFeatureIndex
//                       ? "bg-green-500 w-8"
//                       : "bg-gray-600"
//                   }`}
//                 />
//               ))}
//             </div>

//             <div className="flex justify-between mt-6 gap-4">
//               <button
//                 onClick={handleMobileFeaturePrev}
//                 disabled={currentFeatureIndex === 0}
//                 className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
//               >
//                 ← Prev
//               </button>
//               <button
//                 onClick={handleMobileFeatureNext}
//                 disabled={currentFeatureIndex === features.length - 1}
//                 className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
//               >
//                 Next →
//               </button>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   }

//   // Desktop version
//   return (
//     <>
//       {/* Features Section */}
//       <section ref={featuresSectionRef} className="relative w-full">
//         <div
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
//             backgroundRepeat: "repeat",
//             backgroundSize: "120px 120px",
//           }}
//           ref={featuresGalleryRef}
//           className="gallery h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden relative"
//         >
//           <div className="absolute top-16 md:top-20 left-0 right-0 z-10 text-center px-4">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
//               Features Built for Real Parking
//             </h2>
//             <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
//               Every feature designed to save time, maximize revenue, and guarantee compliance.
//             </p>
//           </div>

//           <div className="cards-container relative w-full h-full flex items-center justify-center mt-32 md:mt-40">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="feature-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                 style={{ transformOrigin: "center center" }}
//               >
//                 <div className="relative group">
//                   <div className="absolute inset-0 rounded-3xl  opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>

//                   <div className="relative rounded-3xl p-8 w-[450px] max-h-[600px] overflow-y-auto flex flex-col border border-[#0092b8] lg:w-[500px] xl:w-[550px]">
//                     <div className="mb-6">
//                       {/* <div className="text-5xl mb-4">{feature.icon}</div> */}
//                       {/* <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
//                         <span className="text-sm font-bold text-green-400">
//                           Solution #{index + 1}
//                         </span>
//                       </div> */}
//                       <h3 className="text-2xl font-bold text-white leading-tight">
//                         {feature.title}
//                       </h3>
//                     </div>

//                     <div className="flex-1 mb-6">
//                       <p className="text-gray-300 leading-relaxed text-base mb-4">
//                         {feature.description}
//                       </p>

//                       {feature.checks && (
//                         <ul className="space-y-2 text-sm text-gray-400 mb-4">
//                           {feature.checks.map((check, checkIndex) => (
//                             <li
//                               key={checkIndex}
//                               className="flex items-start gap-2"
//                             >
//                               <span className="text-green-400 mt-0.5">✓</span>
//                               <span>{check}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       )}

//                       {feature.highlight && (
//                         <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg mb-4">
//                           <span className="text-base font-bold text-green-400">
//                             {feature.highlight}
//                           </span>
//                         </div>
//                       )}

//                       {feature.footer && (
//                         <p className="text-sm text-gray-400 italic">
//                           {feature.footer}
//                         </p>
//                       )}
//                     </div>

//                     <div className="pt-6 border-t border-gray-800">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <div className="relative">
//                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                             <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
//                           </div>
//                           <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">
//                             AI-Powered
//                           </span>
//                         </div>
//                         <div className="flex gap-1">
//                           {[...Array(6)].map((_, i) => (
//                             <div
//                               key={i}
//                               className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
//                                 i === currentFeatureIndex
//                                   ? "bg-green-500 scale-125"
//                                   : "bg-gray-700"
//                               }`}
//                             ></div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }







"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

export default function SeamlessGallery() {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const featuresSectionRef = useRef(null);
  const featuresGalleryRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    // Features Gallery
    const featureCards = gsap.utils.toArray(".feature-card");

    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === featuresSectionRef.current) {
        trigger.kill();
      }
    });

    let activeFeatureIndex = 0;

    const featuresScrollTrigger = ScrollTrigger.create({
      trigger: featuresSectionRef.current,
      start: "top top",
      end: "+=3000",
      pin: featuresGalleryRef.current,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.min(
          Math.floor(progress * features.length),
          features.length - 1
        );

        if (newIndex !== activeFeatureIndex) {
          activeFeatureIndex = newIndex;
          setCurrentFeatureIndex(newIndex);
          updateFeatureCards(newIndex);
        }
      },
    });

    function updateFeatureCards(activeIndex) {
      featureCards.forEach((card, index) => {
        const offset = index - activeIndex;

        gsap.to(card, {
          x: offset * 120 + "%",
          scale: offset === 0 ? 1 : 0.8,
          opacity: Math.abs(offset) > 2 ? 0 : offset === 0 ? 1 : 0.5,
          zIndex: offset === 0 ? 100 : 10 - Math.abs(offset),
          duration: 0.5,
          ease: "power2.out",
        });
      });
    }

    updateFeatureCards(0);

    return () => {
      featuresScrollTrigger.kill();
    };
  }, [isMobile]);

  const handleMobileFeatureNext = () => {
    if (currentFeatureIndex < features.length - 1) {
      setCurrentFeatureIndex(currentFeatureIndex + 1);
    }
  };

  const handleMobileFeaturePrev = () => {
    if (currentFeatureIndex > 0) {
      setCurrentFeatureIndex(currentFeatureIndex - 1);
    }
  };

  // Mobile version
  if (isMobile) {
    return (
      <>
        {/* Features Section */}
        <section className="relative w-full bg-black py-12 px-4" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "120px 120px",
          }}>
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Features Built for Real Parking
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                Every feature designed to save time, maximize revenue, and guarantee compliance.
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentFeatureIndex * 100}%)`,
                }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="relative group">
                      <div className="absolute inset-0 rounded-2xl  opacity-75 blur-sm"></div>

                      <div className="relative rounded-2xl p-6 min-h-[450px] flex flex-col border border-gray-800">
                        <div className="mb-4">
                          {/* <div className="text-4xl mb-3">{feature.icon}</div>
                          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                            <span className="text-xs font-bold text-green-400">
                              Solution #{index + 1}
                            </span>
                          </div> */}
                          <h3 className="text-xl font-bold text-white leading-tight">
                            {feature.title}
                          </h3>
                        </div>

                        <div className="flex-1 mb-4">
                          <p className="text-gray-300 leading-relaxed text-sm mb-3">
                            {feature.description}
                          </p>
                          
                          {feature.checks && (
                            <ul className="space-y-1 text-xs text-gray-400 mb-3">
                              {feature.checks.map((check, checkIndex) => (
                                <li key={checkIndex} className="flex items-start gap-2">
                                  <span className="text-green-400 mt-0.5">✓</span>
                                  <span>{check}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {feature.highlight && (
                            <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg">
                              <span className="text-sm font-bold text-green-400">
                                {feature.highlight}
                              </span>
                            </div>
                          )}

                          {feature.footer && (
                            <p className="text-xs text-gray-400 italic mt-3">
                              {feature.footer}
                            </p>
                          )}
                        </div>

                        <div className="pt-4 border-t border-gray-800">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="relative">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                              </div>
                              <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">
                                AI-Powered
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeatureIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentFeatureIndex
                      ? "bg-green-500 w-8"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-between mt-6 gap-4">
              <button
                onClick={handleMobileFeaturePrev}
                disabled={currentFeatureIndex === 0}
                className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                ← Prev
              </button>
              <button
                onClick={handleMobileFeatureNext}
                disabled={currentFeatureIndex === features.length - 1}
                className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Next →
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Desktop version
  return (
    <>
      {/* Features Section */}
      <section ref={featuresSectionRef} className="relative w-full">
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "120px 120px",
          }}
          ref={featuresGalleryRef}
          className="gallery border h-[750px] w-full flex flex-col items-center justify-center bg-black overflow-hidden relative"
        >
          <div className="absolute top-16 md:top-20 left-0 right-0 z-10 text-center px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
              Features Built for Real Parking
            </h2>
            <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
              Every feature designed to save time, maximize revenue, and guarantee compliance.
            </p>
          </div>

          <div className="cards-container relative w-full h-full flex items-center justify-center mt-32 md:mt-40">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transformOrigin: "center center" }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 rounded-3xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative rounded-3xl p-8 w-[450px] max-h-[600px] overflow-y-auto flex flex-col border border-[#0092b8] lg:w-[500px] xl:w-[550px] ">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {feature.title}
                      </h3>
                    </div>

                    <div className="flex-1 mb-6">
                      <p className="text-gray-300 leading-relaxed text-base mb-4">
                        {feature.description}
                      </p>

                      {feature.checks && (
                        <ul className="space-y-2 text-sm text-gray-400 mb-4">
                          {feature.checks.map((check, checkIndex) => (
                            <li
                              key={checkIndex}
                              className="flex items-start gap-2"
                            >
                              <span className="text-green-400 mt-0.5">✓</span>
                              <span>{check}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {feature.highlight && (
                        <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg mb-4">
                          <span className="text-base font-bold text-green-400">
                            {feature.highlight}
                          </span>
                        </div>
                      )}

                      {feature.footer && (
                        <p className="text-sm text-gray-400 italic">
                          {feature.footer}
                        </p>
                      )}
                    </div>

                    <div className="pt-6 border-t border-gray-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                          </div>
                          <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">
                            AI-Powered
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                i === currentFeatureIndex
                                  ? "bg-green-500 scale-125"
                                  : "bg-gray-700"
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}