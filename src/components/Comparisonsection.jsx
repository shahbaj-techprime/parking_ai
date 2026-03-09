"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/app/translations/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

// const comparisons = [
//   {
//     title: "Parking AI vs. TestFit",
//     data: [
//       {
//         dimension: "Structured Parking",
//         parkingAI: "Purpose-built, optimized",
//         competitor:
//           '"Angled parking NOT YET compatible with structured parking"',
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

export default function ComparisonSection() {
     const { t } = useLanguage();
      const comparisons = t.comparisons || [];
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
        // gsap.fromTo(
        //   row,
        //   { opacity: 0, x: -30 },
        //   {
        //     opacity: 1,
        //     x: 0,
        //     duration: 1,
        //     // delay: (index % 5) * 0.1,
        //     ease: "power2.out",
        //     scrollTrigger: {
        //       trigger: row,
        //       start: "top 85%",
        //       toggleActions: "play none none reverse",
        //     },
        //   },
        // );
        gsap.fromTo(
          row,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.35,
            ease: "power1.out",
            scrollTrigger: {
              trigger: row,
              start: "top 95%", // earlier trigger
              toggleActions: "play none none none",
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
           {t.comparisontitle}
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          {t.comparisondescription}
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
                  <div className="grid grid-cols-[1.5fr_2fr_2fr_1fr] bg-[#05df72] border-b border-white/15 text-black">
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
                          <div className="px-6 py-4 font-semibold text-[#05df72] flex items-center text-sm md:text-base border-r border-white/5">
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
                              className={`text-black px-3 py-1 rounded-md text-xs md:text-sm font-bold uppercase bg-[#05df72] border border-[#05df72] transition-all ${
                                hoveredRow === globalRowIndex
                                  ? "shadow-lg shadow-[#05df72]/40"
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
              <div className="absolute -top-2 -left-2 w-10 h-10 border-2 border-[#05df72] border-r-0 border-b-0 rounded-tl-md" />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-2 border-[#05df72] border-l-0 border-t-0 rounded-br-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
