

// import { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const advantages = [
//   {
//     title: "Design Iterations = Project Delays",
//     points: [
//       "Every parking layout starts manually. Shifts a column? Redraw 20+ bays. Authority rejection? Redesign everything. Average project: 3–5 revision cycles, 4–6 weeks lost, ₹37.5K–₹75K in design costs.",
//     ],
//     image: "https://www.onethreadapp.com/blog/wp-content/uploads/2023/08/Project-Delays-A-Complete-Guide-on-Causes-And-Solutions.png",
//   },
//   {
//     title: "NBC Compliance is a Minefield",
//     points: [
//       "National Building Code has 10+ strict parking rules (turning radius, aisle width, PH bays, ramp landings). One missed rule = municipal rejection. Most designs fail compliance after submission, forcing costly redesigns.",
//     ],
//     image: "IMAGE / GIF – SPEED & APPROVALS",
//   },
//   {
//     title: "Lost Revenue From Suboptimal Layouts",
//     points: [
//       "Manual layouts capture only 85–90% of maximum spaces. Dead zones, oversized circulation, poor angles. Result: 650 spaces instead of 750 = ₹50–₹300 lakh in lost revenue on a single project",
//     ],
//     image: "IMAGE / GIF – SPACE OPTIMIZATION",
//   },
//   {
//     title: "Structural Coordination Chaos",
//     points: [
//       "Column placement, ramp position, lift cores—none coordinate smoothly with parking. Back-and-forth emails. No what-if analysis. No single source of truth. Result: suboptimal parking OR suboptimal structure OR 2-week delay.",
//     ],
//     image: "IMAGE / GIF – COST SAVINGS",
//   },
//   {
//     title: "Compliance Errors With Legal Consequences",
//     points: [
//       "PH bays placed in tandem positions. Ramp entries too close to aisles. Missing landing distances. Municipal inspector flags issues after submission. Redesign, reschedule, reputation damage.",
//     ],
//     image: "IMAGE / GIF – LEGAL COMPLIANCE",
//   },
// ];

// export default function SolutionSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     // Small delay to ensure DOM is ready
//     setTimeout(() => {
//       advantages.forEach((_, index) => {
//         ScrollTrigger.create({
//           trigger: `#adv-${index}`,
//           start: "top center+=100",
//           end: "bottom center",
//           onEnter: () => setActiveIndex(index),
//           onEnterBack: () => setActiveIndex(index),
//         });
//       });
//     }, 100);

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       id="solution"
//       style={{
//         paddingTop: "8rem",
//         paddingBottom: "8rem",
//         backgroundColor: "#000000",
//         color: "#ffffff",
//       }}
//     >
//       <div
//         style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
//       >
//         {/* INTRODUCTION */}
//         <div style={{ maxWidth: "48rem", marginBottom: "6rem" }}>
//           <h2 style={{ fontSize: "2.25rem", fontWeight: "bold" }}>
//             The Parking Design Crisis
//           </h2>

//           <p style={{ color: "#d1d5db", marginTop: "1rem" }}>
//             Parking design is costing you time, money, and regulatory headaches.
//             Here's why.
//           </p>
//         </div>

//         {/* SCROLL STORY SECTION */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "4rem",
//           }}
//         >
//           {/* LEFT – SCROLLING ADVANTAGES */}
//           <div
//             style={{ display: "flex", flexDirection: "column", gap: "8rem" }}
//           >
//             {advantages.map((item, index) => (
//               <div
//                 key={index}
//                 id={`adv-${index}`}
//                 style={{
//                   borderRadius: "1rem",
//                   padding: "2rem",
//                   border:
//                     activeIndex === index
//                       ? "2px solid rgba(0, 146, 184, 0.8)"
//                       : "2px solid transparent",
//                   background:
//                     activeIndex === index
//                       ? "linear-gradient(to bottom right, rgba(0, 146, 184, 0.1), rgba(0, 146, 184, 0.05))"
//                       : "transparent",
//                   boxShadow:
//                     activeIndex === index
//                       ? "0 10px 15px -3px rgba(0, 146, 184, 0.2)"
//                       : "none",
//                   transition: "all 0.5s ease",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "flex-start",
//                     gap: "1rem",
//                   }}
//                 >
//                   <div
//                     style={{
//                       flexShrink: 0,
//                       width: "3rem",
//                       height: "3rem",
//                       borderRadius: "50%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontSize: "1.25rem",
//                       fontWeight: "bold",
//                       backgroundColor:
//                         activeIndex === index
//                           ? "#0092B8"
//                           : "rgba(0, 146, 184, 0.2)",
//                       color: activeIndex === index ? "#ffffff" : "#0092B8",
//                       transition: "all 0.5s ease",
//                     }}
//                   >
//                     {index + 1}
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <h3
//                       style={{
//                         fontSize: "1.5rem",
//                         fontWeight: "600",
//                         color: activeIndex === index ? "#0092B8" : "#ffffff",
//                         transition: "color 0.5s ease",
//                       }}
//                     >
//                       {item.title}
//                     </h3>

//                     <ul
//                       style={{
//                         marginTop: "1.5rem",
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "0.75rem",
//                       }}
//                     >
//                       {item.points.map((point, i) => (
//                         <li key={i} style={{ display: "flex", gap: "0.75rem" }}>
//                           <span
//                             style={{
//                               fontWeight: "bold",
//                               color:
//                                 activeIndex === index ? "#0092B8" : "#4b5563",
//                               transition: "color 0.5s ease",
//                             }}
//                           >
//                             ✓
//                           </span>
//                           <span
//                             style={{
//                               color:
//                                 activeIndex === index ? "#e5e7eb" : "#6b7280",
//                               transition: "color 0.5s ease",
//                             }}
//                           >
//                             {point}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT – STICKY IMAGE */}
//           <div
//             style={{
//               position: "sticky",
//               top: "8rem",
//               height: "420px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <div
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 borderRadius: "1rem",
//                 border: "2px solid rgba(0, 146, 184, 0.8)",
//                 background:
//                   "linear-gradient(to bottom right, rgba(0, 146, 184, 0.1), rgba(0, 146, 184, 0.05))",
//                 boxShadow: "0 25px 50px -12px rgba(0, 146, 184, 0.2)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transition: "all 0.5s ease",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Animated background effect */}
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background:
//                     "linear-gradient(to bottom right, rgba(0, 146, 184, 0.05), transparent, rgba(0, 146, 184, 0.05))",
//                   animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//                 }}
//               ></div>

//               {/* Content */}
//               <div
//                 style={{
//                   position: "relative",
//                   zIndex: 10,
//                   textAlign: "center",
//                   padding: "2rem",
//                 }}
//               >
//                 {/* <div style={{ fontSize: "3.75rem", marginBottom: "1rem" }}>
//                   {activeIndex === 0 && "⚡"}
//                   {activeIndex === 1 && "📋"}
//                   {activeIndex === 2 && "💰"}
//                   {activeIndex === 3 && "🔧"}
//                   {activeIndex === 4 && "⚖️"}
//                 </div>
//                 <p
//                   style={{
//                     fontSize: "1.125rem",
//                     fontWeight: "500",
//                     color: "#0092B8",
//                   }}
//                 >
//                   {advantages[activeIndex].image}
//                 </p> */}
//                 <img src={advantages[activeIndex].image} alt="d"/>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







// import { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// gsap.registerPlugin(ScrollTrigger);

// const advantages = [
//   {
//     title: "Design Iterations = Project Delays",
//     points: [
//       "Every parking layout starts manually. Shifts a column? Redraw 20+ bays. Authority rejection? Redesign everything. Average project: 3–5 revision cycles, 4–6 weeks lost, ₹37.5K–₹75K in design costs.",
//     ],
//     // image: "https://www.onethreadapp.com/blog/wp-content/uploads/2023/08/Project-Delays-A-Complete-Guide-on-Causes-And-Solutions.png",
//     animation: 'flip-left'
//   },
//   {
//     title: "NBC Compliance is a Minefield",
//     points: [
//       "National Building Code has 10+ strict parking rules (turning radius, aisle width, PH bays, ramp landings). One missed rule = municipal rejection. Most designs fail compliance after submission, forcing costly redesigns.",
//     ],
//     // image: "IMAGE / GIF – SPEED & APPROVALS",
//     animation: 'flip-right'
//   },
//   {
//     title: "Lost Revenue From Suboptimal Layouts",
//     points: [
//       "Manual layouts capture only 85–90% of maximum spaces. Dead zones, oversized circulation, poor angles. Result: 650 spaces instead of 750 = ₹50–₹300 lakh in lost revenue on a single project",
//     ],
//     // image: "IMAGE / GIF – SPACE OPTIMIZATION",
//     animation: 'flip-up'
//   },
//   {
//     title: "Structural Coordination Chaos",
//     points: [
//       "Column placement, ramp position, lift cores—none coordinate smoothly with parking. Back-and-forth emails. No what-if analysis. No single source of truth. Result: suboptimal parking OR suboptimal structure OR 2-week delay.",
//     ],
//     // image: "IMAGE / GIF – COST SAVINGS",
//     animation: 'flip-down'
//   },
//   {
//     title: "Compliance Errors With Legal Consequences",
//     points: [
//       "PH bays placed in tandem positions. Ramp entries too close to aisles. Missing landing distances. Municipal inspector flags issues after submission. Redesign, reschedule, reputation damage.",
//     ],
//     // image: "IMAGE / GIF – LEGAL COMPLIANCE",
//     animation: 'zoom-in'
//   },
// ];

// export default function SolutionSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//       mirror: true,
//     });

//     // Small delay to ensure DOM is ready
//     setTimeout(() => {
//       advantages.forEach((_, index) => {
//         ScrollTrigger.create({
//           trigger: `#adv-${index}`,
//           start: "top center+=100",
//           end: "bottom center",
//           onEnter: () => setActiveIndex(index),
//           onEnterBack: () => setActiveIndex(index),
//         });
//       });
//     }, 100);

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       id="solution"
//       style={{
//         paddingTop: "8rem",
//         paddingBottom: "8rem",
//         backgroundColor: "#000000",
//         color: "#ffffff",
//       }}
//     >
//       <div
//         style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
//       >
//         {/* INTRODUCTION */}
//         <div style={{ maxWidth: "48rem", marginBottom: "6rem" }}>
//           <h2 style={{ fontSize: "2.25rem", fontWeight: "bold" }}>
//             The Parking Design Crisis
//           </h2>

//           <p style={{ color: "#d1d5db", marginTop: "1rem" }}>
//             Parking design is costing you time, money, and regulatory headaches.
//             Here's why.
//           </p>
//         </div>

//         {/* GRID SECTION */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(2, 1fr)",
//             gap: "2rem",
//           }}
//         >
//           {advantages.map((item, index) => (
//             <div
//               key={index}
//               id={`adv-${index}`}
//               data-aos={item.animation}
//               data-aos-duration="1000"
//               style={{
//                 borderRadius: "1rem",
//                 padding: "2rem",
//                 border: '2px solid rgba(0, 146, 184, 0.8)',
//                 background: "linear-gradient(to bottom right, rgba(0, 146, 184, 0.1), rgba(0, 146, 184, 0.05))",
//                 boxShadow: "0 10px 15px -3px rgba(0, 146, 184, 0.2)",
//                 transition: "all 0.5s ease",
//                 // Center the 5th card (index 4)
//                 gridColumn: index === 4 ? "1 / -1" : "auto",
//                 maxWidth: index === 4 ? "600px" : "100%",
//                 margin: index === 4 ? "0 auto" : "0",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-start",
//                   gap: "1rem",
//                 }}
//               >
//                 <div
//                   style={{
//                     flexShrink: 0,
//                     width: "3rem",
//                     height: "3rem",
//                     borderRadius: "50%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "1.25rem",
//                     fontWeight: "bold",
//                     backgroundColor: "#0092B8",
//                     color: "#ffffff",
//                     transition: "all 0.5s ease",
//                   }}
//                 >
//                   {index + 1}
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <h3
//                     style={{
//                       fontSize: "1.5rem",
//                       fontWeight: "600",
//                       color: "#0092B8",
//                       transition: "color 0.5s ease",
//                     }}
//                   >
//                     {item.title}
//                   </h3>

//                   <ul
//                     style={{
//                       marginTop: "1.5rem",
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "0.75rem",
//                     }}
//                   >
//                     {item.points.map((point, i) => (
//                       <li key={i} style={{ display: "flex", gap: "0.75rem" }}>
//                         <span
//                           style={{
//                             fontWeight: "bold",
//                             color: "#0092B8",
//                             transition: "color 0.5s ease",
//                           }}
//                         >
//                           ✓
//                         </span>
//                         <span
//                           style={{
//                             color: "#e5e7eb",
//                             transition: "color 0.5s ease",
//                           }}
//                         >
//                           {point}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Image placeholder */}
//                   {/* {item.image.startsWith('http') ? (
//                     <div style={{ marginTop: "1.5rem", borderRadius: "0.5rem", overflow: "hidden" }}>
//                       <img 
//                         src={item.image} 
//                         alt={item.title}
//                         style={{ width: "100%", height: "auto", display: "block" }}
//                       />
//                     </div>
//                   ) : (
//                     <div
//                       style={{
//                         marginTop: "1.5rem",
//                         padding: "1rem",
//                         borderRadius: "0.5rem",
//                         backgroundColor: "rgba(0, 146, 184, 0.1)",
//                         textAlign: "center",
//                         color: "#0092B8",
//                         fontSize: "0.875rem",
//                       }}
//                     >
//                       {item.image}
//                     </div>
//                   )} */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    title: "Design Iterations = Project Delays",
    points: [
      "Every parking layout starts manually. Shifts a column? Redraw 20+ bays. Authority rejection? Redesign everything. Average project: 3–5 revision cycles, 4–6 weeks lost, ₹37.5K–₹75K in design costs.",
    ],
    animation: "flip-left",
  },
  {
    title: "NBC Compliance is a Minefield",
    points: [
      "National Building Code has 10+ strict parking rules (turning radius, aisle width, PH bays, ramp landings). One missed rule = municipal rejection.",
    ],
    animation: "flip-right",
  },
  {
    title: "Lost Revenue From Suboptimal Layouts",
    points: [
      "Manual layouts capture only 85–90% of maximum spaces. Result: ₹50–₹300 lakh lost on one project.",
    ],
    animation: "flip-up",
  },
  {
    title: "Structural Coordination Chaos",
    points: [
      "Column placement, ramp position, lift cores—no what-if analysis. 2-week delays.",
    ],
    animation: "flip-down",
  },
  {
    title: "Compliance Errors With Legal Consequences",
    points: [
      "Municipal rejections, redesigns, rescheduling, reputation damage.",
    ],
    animation: "zoom-in",
  },
];

export default function SolutionSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    AOS.init({
      duration: mobile ? 700 : 1000,
      once: false,
      mirror: false,
      easing: "ease-out-cubic",
    });

    if (!mobile) {
      // Desktop GSAP ScrollTrigger ONLY
      setTimeout(() => {
        advantages.forEach((_, index) => {
          ScrollTrigger.create({
            trigger: `#adv-${index}`,
            start: "top center+=100",
            end: "bottom center",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        });
      }, 100);
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="solution"
      style={{
        padding: isMobile ? "4rem 0" : "8rem 0",
        backgroundColor: "#000",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
        {/* INTRO */}
        <div style={{ maxWidth: "48rem", marginBottom: isMobile ? "3rem" : "6rem" }}>
          <h2 style={{ fontSize: isMobile ? "1.75rem" : "2.25rem", fontWeight: "bold" }}>
            The Parking Design Crisis
          </h2>
          <p style={{ color: "#d1d5db", marginTop: "1rem" }}>
            Parking design is costing you time, money, and regulatory headaches.
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "1.5rem",
          }}
        >
          {advantages.map((item, index) => (
            <div
              key={index}
              id={`adv-${index}`}
              data-aos={isMobile ? "fade-up" : item.animation}
              style={{
                borderRadius: "1rem",
                padding: isMobile ? "1.5rem" : "2rem",
                border: "2px solid rgba(0,146,184,0.8)",
                background:
                  "linear-gradient(to bottom right, rgba(0,146,184,0.1), rgba(0,146,184,0.05))",
                gridColumn:
                  !isMobile && index === 4 ? "1 / -1" : "auto",
                maxWidth:
                  !isMobile && index === 4 ? "600px" : "100%",
                margin:
                  !isMobile && index === 4 ? "0 auto" : "0",
              }}
            >
              <h3
                style={{
                  fontSize: isMobile ? "1.25rem" : "1.5rem",
                  fontWeight: "600",
                  color: "#0092B8",
                }}
              >
                {item.title}
              </h3>

              <ul style={{ marginTop: "1rem" }}>
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      color: "#e5e7eb",
                      fontSize: isMobile ? "0.875rem" : "1rem",
                    }}
                  >
                    <span style={{ color: "#0092B8" }}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
