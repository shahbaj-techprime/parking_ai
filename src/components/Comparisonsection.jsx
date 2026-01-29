// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const comparisons = [
//   {
//     title: "Parking AI vs. TestFit",
//     data: [
//       {
//         dimension: "Structured Parking",
//         parkingAI: "Purpose-built, optimized",
//         competitor: '"Angled parking NOT YET compatible with structured parking"',
//         winner: "Parking AI",
//       },
//       {
//         dimension: "NBC Compliance",
//         parkingAI: "Built-in (India-native)",
//         competitor: "US zoning only",
//         winner: "Parking AI",
//       },
//       {
//         dimension: "Space Optimization",
//         parkingAI: "50mm increment logic",
//         competitor: "Degree-angle adjustment",
//         winner: "Parking AI",
//       },
//       {
//         dimension: "Design Conflict Detection",
//         parkingAI: "8 automated checks + auto-repair",
//         competitor: "Basic validation",
//         winner: "Parking AI",
//       },
//       {
//         dimension: "AutoCAD Integration",
//         parkingAI: "Native (direct DXF/DWG)",
//         competitor: "Parcel data workflow",
//         winner: "Parking AI",
//       },
//     ],
//   },
//   {
//     title: "Parking AI vs. ParkCAD",
//     data: [
//       {
//         dimension: "Technology",
//         parkingAI: "AI-driven generative algorithms",
//         competitor: "CAD tool with automation",
//         winner: "Parking AI",
//       },
//       {
//         dimension: "Speed",
//         parkingAI: "10 minutes (AI generates)",
//         competitor: "30–60 minutes (manual with tools)",
//         winner: "Parking AI",
//       },
//       {
//         dimension: "NBC Compliance",
//         parkingAI: "Fully embedded",
//         competitor: "Not built for Indian standards",
//         winner: "Parking AI",
//       },
//       {
//         dimension: "Compliance Flags",
//         parkingAI: "8 automated checks + auto-repair suggestions",
//         competitor: "Manual verification required",
//         winner: "Parking AI",
//       },
//       {
//         dimension: "User Interface",
//         parkingAI: "Modern, real-time, reactive",
//         competitor: "Dated CAD interface",
//         winner: "Parking AI",
//       },
//     ],
//   },
// ];

// export default function ComparisonSection() {
//   const sectionRef = useRef(null);
//   const tablesRef = useRef([]);
//   const rowsRef = useRef([]);
//   const [hoveredRow, setHoveredRow] = useState(null);

//   useEffect(() => {
//     // Animate tables
//     tablesRef.current.forEach((table, index) => {
//       if (!table) return;

//       gsap.fromTo(
//         table,
//         { opacity: 0, y: 60 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: table,
//             start: "top 80%",
//             end: "top 50%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });

//     // Animate rows
//     rowsRef.current.forEach((row, index) => {
//       if (!row) return;

//       gsap.fromTo(
//         row,
//         { opacity: 0, x: -30 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.6,
//           delay: (index % 5) * 0.1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: row,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         backgroundColor:'#111317',
//         // backgroundColor: "#000000",
//         color: "#ffffff",
//         padding: "8rem 0",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background texture */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage:
//             "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)",
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
//               border: "1px solid #0092B8",
//               borderRadius: "2rem",
//               marginBottom: "1.5rem",
//               fontSize: "0.875rem",
//               letterSpacing: "0.1em",
//               textTransform: "uppercase",
//               color: "#0092B8",
//             }}
//           >
//             Competitive Analysis
//           </div> */}

//           <h2
//             style={{
//               fontSize: "3.5rem",
//               fontWeight: "700",
//               marginBottom: "1rem",
//               letterSpacing: "-0.03em",
//               lineHeight: "1.1",
//             }}
//           >
//             Why Parking AI Wins
//           </h2>

//           <p
//             style={{
//               fontSize: "1.25rem",
//               color: "#888888",
//               maxWidth: "700px",
//               margin: "0 auto",
//             }}
//           >
//             Direct comparison with market alternatives.
//           </p>
//         </div>

//         {/* Comparison Tables */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
//           {comparisons.map((comparison, tableIndex) => (
//             <div
//               key={tableIndex}
//               ref={(el) => (tablesRef.current[tableIndex] = el)}
//               style={{
//                 position: "relative",
//               }}
//             >
//               {/* Table Title */}
//               <h3
//                 style={{
//                   fontSize: "2rem",
//                   fontWeight: "600",
//                   marginBottom: "2rem",
//                   paddingBottom: "1rem",
//                   borderBottom: "2px solid rgba(255,255,255,0.1)",
//                 }}
//               >
//                 {comparison.title}
//               </h3>

//               {/* Table Container */}
//               <div
//                 style={{
//                   border: "1px solid rgba(255,255,255,0.15)",
//                   borderRadius: "1rem",
//                   overflow: "hidden",
//                   backgroundColor: "rgba(255,255,255,0.02)",
//                 }}
//               >
//                 {/* Table Header */}
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "1.5fr 2fr 2fr 1fr",
//                     backgroundColor: "#0092B8",
//                     borderBottom: "1px solid rgba(255,255,255,0.15)",
//                   }}
//                 >
//                   <div
//                     style={{
//                       padding: "1.25rem 1.5rem",
//                       fontSize: "0.875rem",
//                       fontWeight: "700",
//                       letterSpacing: "0.05em",
//                       textTransform: "uppercase",
//                       borderRight: "1px solid rgba(255,255,255,0.1)",
//                     }}
//                   >
//                     Dimension
//                   </div>
//                   <div
//                     style={{
//                       padding: "1.25rem 1.5rem",
//                       fontSize: "0.875rem",
//                       fontWeight: "700",
//                       letterSpacing: "0.05em",
//                       textTransform: "uppercase",
//                       borderRight: "1px solid rgba(255,255,255,0.1)",
//                     }}
//                   >
//                     Parking AI
//                   </div>
//                   <div
//                     style={{
//                       padding: "1.25rem 1.5rem",
//                       fontSize: "0.875rem",
//                       fontWeight: "700",
//                       letterSpacing: "0.05em",
//                       textTransform: "uppercase",
//                       borderRight: "1px solid rgba(255,255,255,0.1)",
//                     }}
//                   >
//                     {comparison.title.includes("TestFit")
//                       ? "TestFit"
//                       : "ParkCAD"}
//                   </div>
//                   <div
//                     style={{
//                       padding: "1.25rem 1.5rem",
//                       fontSize: "0.875rem",
//                       fontWeight: "700",
//                       letterSpacing: "0.05em",
//                       textTransform: "uppercase",
//                       textAlign: "center",
//                     }}
//                   >
//                     Winner
//                   </div>
//                 </div>

//                 {/* Table Body */}
//                 <div>
//                   {comparison.data.map((row, rowIndex) => {
//                     const globalRowIndex =
//                       tableIndex * comparison.data.length + rowIndex;

//                     return (
//                       <div
//                         key={rowIndex}
//                         ref={(el) => (rowsRef.current[globalRowIndex] = el)}
//                         onMouseEnter={() => setHoveredRow(globalRowIndex)}
//                         onMouseLeave={() => setHoveredRow(null)}
//                         style={{
//                           display: "grid",
//                           gridTemplateColumns: "1.5fr 2fr 2fr 1fr",
//                           borderBottom:
//                             rowIndex < comparison.data.length - 1
//                               ? "1px solid rgba(255,255,255,0.05)"
//                               : "none",
//                           backgroundColor:
//                             hoveredRow === globalRowIndex
//                               ? "rgba(255,255,255,0.05)"
//                               : "transparent",
//                           transition: "all 0.3s ease",
//                           cursor: "pointer",
//                         }}
//                       >
//                         {/* Dimension */}
//                         <div
//                           style={{
//                             padding: "1.5rem 1.5rem",
//                             fontSize: "1rem",
//                             fontWeight: "600",
//                             borderRight: "1px solid rgba(255,255,255,0.05)",
//                             display: "flex",
//                             alignItems: "center",
//                           }}
//                         >
//                           {row.dimension}
//                         </div>

//                         {/* Parking AI */}
//                         <div
//                           style={{
//                             padding: "1.5rem 1.5rem",
//                             fontSize: "0.95rem",
//                             color: "#0092B8",
//                             fontWeight: "600",
//                             borderRight: "1px solid rgba(255,255,255,0.05)",
//                             display: "flex",
//                             alignItems: "center",
//                             lineHeight: "1.6",
//                           }}
//                         >
//                           {row.parkingAI}
//                         </div>

//                         {/* Competitor */}
//                         <div
//                           style={{
//                             padding: "1.5rem 1.5rem",
//                             fontSize: "0.95rem",
//                             color: "rgba(255,255,255,0.6)",
//                             borderRight: "1px solid rgba(255,255,255,0.05)",
//                             display: "flex",
//                             alignItems: "center",
//                             lineHeight: "1.6",
//                             fontStyle: row.competitor.includes('"')
//                               ? "italic"
//                               : "normal",
//                           }}
//                         >
//                           {row.competitor}
//                         </div>

//                         {/* Winner Badge */}
//                         <div
//                           style={{
//                             padding: "1.5rem 1.5rem",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <div
//                             style={{
//                               padding: "0.5rem 1rem",
//                               backgroundColor: "#0092B8",
//                               border: "1px solid #0092B8",
//                               borderRadius: "0.5rem",
//                               fontSize: "0.75rem",
//                               fontWeight: "700",
//                               letterSpacing: "0.05em",
//                               textTransform: "uppercase",
//                               transition: "all 0.3s ease",
//                               whiteSpace: "nowrap",
//                               boxShadow:
//                                 hoveredRow === globalRowIndex
//                                   ? "0 4px 12px rgba(0, 146, 184, 0.4)"
//                                   : "none",
//                             }}
//                           >
//                             {row.winner}
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Decorative corner elements */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "-10px",
//                   left: "-10px",
//                   width: "40px",
//                   height: "40px",
//                   border: "2px solid #0092B8",
//                   borderRight: "none",
//                   borderBottom: "none",
//                   borderRadius: "1rem 0 0 0",
//                 }}
//               />
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "-10px",
//                   right: "-10px",
//                   width: "40px",
//                   height: "40px",
//                   border: "2px solid #0092B8",
//                   borderLeft: "none",
//                   borderTop: "none",
//                   borderRadius: "0 0 1rem 0",
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA Note */}
//         {/* <div
//           style={{
//             marginTop: "5rem",
//             textAlign: "center",
//             padding: "2rem",
//             border: "1px solid rgba(255,255,255,0.1)",
//             borderRadius: "1rem",
//             backgroundColor: "rgba(255,255,255,0.02)",
//           }}
//         >
//           <p
//             style={{
//               fontSize: "1.125rem",
//               color: "rgba(255,255,255,0.7)",
//               lineHeight: "1.6",
//             }}
//           >
//             Every dimension favors Parking AI. Purpose-built for Indian
//             architects and NBC 2016 standards.
//             <br />
//             <span style={{ color: "#0092B8", fontWeight: "600" }}>
//               No learning curve. No compromises.
//             </span>
//           </p>
//         </div> */}
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const comparisons = [
  {
    title: "Parking AI vs. TestFit",
    data: [
      {
        dimension: "Structured Parking",
        parkingAI: "Purpose-built, optimized",
        competitor:
          '"Angled parking NOT YET compatible with structured parking"',
        winner: "Parking AI",
      },
      {
        dimension: "NBC Compliance",
        parkingAI: "Built-in (India-native)",
        competitor: "US zoning only",
        winner: "Parking AI",
      },
      {
        dimension: "Space Optimization",
        parkingAI: "50mm increment logic",
        competitor: "Degree-angle adjustment",
        winner: "Parking AI",
      },
      {
        dimension: "Design Conflict Detection",
        parkingAI: "8 automated checks + auto-repair",
        competitor: "Basic validation",
        winner: "Parking AI",
      },
      {
        dimension: "AutoCAD Integration",
        parkingAI: "Native (direct DXF/DWG)",
        competitor: "Parcel data workflow",
        winner: "Parking AI",
      },
    ],
  },
  {
    title: "Parking AI vs. ParkCAD",
    data: [
      {
        dimension: "Technology",
        parkingAI: "AI-driven generative algorithms",
        competitor: "CAD tool with automation",
        winner: "Parking AI",
      },
      {
        dimension: "Speed",
        parkingAI: "10 minutes (AI generates)",
        competitor: "30–60 minutes (manual with tools)",
        winner: "Parking AI",
      },
      {
        dimension: "NBC Compliance",
        parkingAI: "Fully embedded",
        competitor: "Not built for Indian standards",
        winner: "Parking AI",
      },
      {
        dimension: "Compliance Flags",
        parkingAI: "8 automated checks + auto-repair suggestions",
        competitor: "Manual verification required",
        winner: "Parking AI",
      },
      {
        dimension: "User Interface",
        parkingAI: "Modern, real-time, reactive",
        competitor: "Dated CAD interface",
        winner: "Parking AI",
      },
    ],
  },
];

export default function ComparisonSection() {
  const sectionRef = useRef(null);
  const tablesRef = useRef([]);
  const rowsRef = useRef([]);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    // Only animate on desktop
    if (window.innerWidth >= 768) {
      tablesRef.current.forEach((table) => {
        if (!table) return;
        gsap.fromTo(
          table,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: table,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      rowsRef.current.forEach((row, index) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: (index % 5) * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 bg-[#111317] text-white"
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
            Why Parking AI Wins
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Direct comparison with market alternatives.
          </p>
        </div>

        {/* Comparison Tables */}
        <div className="flex flex-col gap-20">
          {comparisons.map((comparison, tableIndex) => (
            <div
              key={tableIndex}
              ref={(el) => (tablesRef.current[tableIndex] = el)}
              className="relative"
            >
              {/* Table Title */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 pb-2 border-b border-b-white/10">
                {comparison.title}
              </h3>

              {/* Table Container */}
              <div className="overflow-x-auto">
                <div className="min-w-[800px] border border-white/15 rounded-lg bg-white/5">
                  {/* Table Header */}
                  <div className="grid grid-cols-[1.5fr_2fr_2fr_1fr] bg-[#0092b8] border-b border-white/15 text-white">
                    {[
                      "Dimension",
                      "Parking AI",
                      comparison.title.includes("TestFit")
                        ? "TestFit"
                        : "ParkCAD",
                      "Winner",
                    ].map((header, idx) => (
                      <div
                        key={idx}
                        className={`px-6 py-4 font-bold text-sm uppercase ${
                          idx < 3 ? "border-r border-white/10" : "text-center"
                        }`}
                      >
                        {header}
                      </div>
                    ))}
                  </div>

                  {/* Table Body */}
                  <div>
                    {comparison.data.map((row, rowIndex) => {
                      const globalRowIndex =
                        tableIndex * comparison.data.length + rowIndex;
                      return (
                        <div
                          key={rowIndex}
                          ref={(el) => (rowsRef.current[globalRowIndex] = el)}
                          onMouseEnter={() => setHoveredRow(globalRowIndex)}
                          onMouseLeave={() => setHoveredRow(null)}
                          className={`grid grid-cols-[1.5fr_2fr_2fr_1fr] border-b border-white/5 transition-all duration-300 cursor-pointer ${
                            hoveredRow === globalRowIndex ? "bg-white/5" : ""
                          }`}
                        >
                          <div className="px-6 py-4 font-semibold flex items-center text-sm md:text-base border-r border-white/5">
                            {row.dimension}
                          </div>
                          <div className="px-6 py-4 font-semibold text-[#0092b8] flex items-center text-sm md:text-base border-r border-white/5">
                            {row.parkingAI}
                          </div>
                          <div
                            className={`px-6 py-4 text-white/70 flex items-center text-sm md:text-base border-r border-white/5 ${
                              row.competitor.includes('"') ? "italic" : ""
                            }`}
                          >
                            {row.competitor}
                          </div>
                          <div className="px-6 py-4 flex items-center justify-center">
                            <div
                              className={`px-3 py-1 rounded-md text-xs md:text-sm font-bold uppercase bg-[#0092b8] border border-[#0092b8] transition-all ${
                                hoveredRow === globalRowIndex
                                  ? "shadow-lg shadow-[#0092b8]/40"
                                  : ""
                              }`}
                            >
                              {row.winner}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-10 h-10 border-2 border-[#0092b8] border-r-0 border-b-0 rounded-tl-md" />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-2 border-[#0092b8] border-l-0 border-t-0 rounded-br-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
