// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ComplianceAndSystemsSection() {
//   useEffect(() => {
//     gsap.utils.toArray(".point-card").forEach((card) => {
//       gsap.from(card, {
//         scrollTrigger: {
//           trigger: card,
//           start: "top 85%",
//         },
//         y: 60,
//         opacity: 0,
//         duration: 0.9,
//         ease: "power3.out",
//       });
//     });
//   }, []);

//   // Data for cards
//   const cards = [
//     {
//       title: "Automated NBC Compliance: Zero-Risk Design",
//       points: [
//         "Parking Monster enforces National Building Code (NBC) rules in every layout.",
//         "Turning Radius Validation: All vehicle movements maintain a minimum 6.0m outer turning radius.",
//         "Ramp Architecture: Entry and exit ramps are separated logically.",
//         "Mandatory flat landing distances are auto-inserted based on ramp slope and direction.",
//         "No-Clash Junctions: Maximum two aisles allowed at any ramp junction.",
//         "Aisle Width Enforcement: 3.6m for one-way aisles and 6.0m for two-way aisles.",
//         "Fire & Safety Access: 1.0–1.2m clear access paths to fire stairs and jump lifts.",
//         "Parking or obstructions in safety zones are completely blocked by the system.",
//       ],
//     },
//     {
//       title: "Physically Handicapped (PH) Automation",
//       points: [
//         "PH slot requirements are calculated automatically at basement level.",
//         "First 200 parking slots require 6 PH bays.",
//         "Every additional 100 slots adds 1 extra PH bay.",
//         "PH bays have a minimum width of 3.6m.",
//         "PH bays are placed near lift cores or main entry points.",
//         "PH bays must always have direct access.",
//         "Tandem or blocked PH slots are automatically flagged.",
//       ],
//     },
//     {
//       title: "Adaptive Geometry & Monetization",
//       points: [
//         "Parking aisles follow irregular site boundary lines.",
//         "Boundary-aligned aisles maximize usable floor area.",
//         "Unusable pockets and dead zones are minimized.",
//         "Residual Zone Scanning identifies low-efficiency areas.",
//         "Zones unsuitable for cars are evaluated for bike parking.",
//         "Bike bay size: 1.0m × 2.0m with 2.0m aisles.",
//         "Yield comparison determines car vs bike allocation.",
//         "Bike parking is physically separated from car circulation.",
//         "Bike parking always maintains direct access.",
//       ],
//     },
//     {
//       title: "The “Glass Box”: User-Led Manual Intervention",
//       points: [
//         "Users can manually move driveways, bays, or columns.",
//         "Layout reacts instantly to manual changes.",
//         "Surrounding bays are auto-updated in real time.",
//         "Moving a column re-runs the 50mm optimization logic.",
//         "Every manual change is saved as a new version (R1, R2, etc.).",
//         "Original AI output (R0) is always preserved.",
//         "Sessions can be duplicated to test different scenarios.",
//       ],
//     },
//     {
//       title: "Real-Time Conflict Flags & AI Advice",
//       points: [
//         "CR-01 Dead-End Radii Violation: Triggered when turning space is insufficient.",
//         "ST-02 Column-in-Door-Zone: Triggered when columns block door swing (500–1200mm).",
//         "AI suggests corrective actions automatically.",
//         "Suggestions include aisle widening or bike slot conversion.",
//       ],
//     },
//     {
//       title: "Contractor-Ready Output",
//       points: [
//         "Works directly with DXF and DWG files.",
//         "No redrawing or geometry simplification required.",
//         "Separate layers for Primary (2.5m × 5.0m) and Secondary bays.",
//         "Bays include intelligent attribute metadata.",
//         "Color-coded bays improve site marking clarity.",
//         "Turning radii exported as smooth curves.",
//         "Instant statistics for parking count and efficiency.",
//         "Circulation area and utilization reports generated automatically.",
//       ],
//     },
//   ];

//   return (
//     <section id="compliance" className="py-32 bg-[#111317] text-white">
//       <div className="max-w-6xl mx-auto px-6 space-y-28">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`point-card flex flex-col md:flex-row items-start gap-8 ${
//               index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//             }`}
//           >
//             <div className="w-full md:w-[70%] p-8 bg-black/40 border border-white/10 rounded-2xl">
//               <h2 className="text-4xl font-bold">{card.title}</h2>
//               <ul className="mt-8 space-y-3 text-gray-300">
//                 {card.points.map((point, i) => (
//                   <li key={i} className="flex gap-3">
//                     <span className="text-lime-400 font-bold">✓</span>
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ComplianceAndSystemsSection() {
  useEffect(() => {
    gsap.utils.toArray(".point-card").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    });
  }, []);

  const cards = [
    {
      title: "Automated NBC Compliance: Zero-Risk Design",
      points: [
        "Parking Monster enforces National Building Code (NBC) rules in every layout.",
        "Turning Radius Validation: All vehicle movements maintain a minimum 6.0m outer turning radius.",
        "Ramp Architecture: Entry and exit ramps are separated logically.",
        "Mandatory flat landing distances are auto-inserted based on ramp slope and direction.",
        "No-Clash Junctions: Maximum two aisles allowed at any ramp junction.",
        "Aisle Width Enforcement: 3.6m for one-way aisles and 6.0m for two-way aisles.",
        "Fire & Safety Access: 1.0–1.2m clear access paths to fire stairs and jump lifts.",
        "Parking or obstructions in safety zones are completely blocked by the system.",
      ],
    },
    {
      title: "Physically Handicapped (PH) Automation",
      points: [
        "PH slot requirements are calculated automatically at basement level.",
        "First 200 parking slots require 6 PH bays.",
        "Every additional 100 slots adds 1 extra PH bay.",
        "PH bays have a minimum width of 3.6m.",
        "PH bays are placed near lift cores or main entry points.",
        "PH bays must always have direct access.",
        "Tandem or blocked PH slots are automatically flagged.",
      ],
    },
    {
      title: "Adaptive Geometry & Monetization",
      points: [
        "Parking aisles follow irregular site boundary lines.",
        "Boundary-aligned aisles maximize usable floor area.",
        "Unusable pockets and dead zones are minimized.",
        "Residual Zone Scanning identifies low-efficiency areas.",
        "Zones unsuitable for cars are evaluated for bike parking.",
        "Bike bay size: 1.0m × 2.0m with 2.0m aisles.",
        "Yield comparison determines car vs bike allocation.",
        "Bike parking is physically separated from car circulation.",
        "Bike parking always maintains direct access.",
      ],
    },
    {
      title: "The “Glass Box”: User-Led Manual Intervention",
      points: [
        "Users can manually move driveways, bays, or columns.",
        "Layout reacts instantly to manual changes.",
        "Surrounding bays are auto-updated in real time.",
        "Moving a column re-runs the 50mm optimization logic.",
        "Every manual change is saved as a new version (R1, R2, etc.).",
        "Original AI output (R0) is always preserved.",
        "Sessions can be duplicated to test different scenarios.",
      ],
    },
    {
      title: "Real-Time Conflict Flags & AI Advice",
      points: [
        "CR-01 Dead-End Radii Violation: Triggered when turning space is insufficient.",
        "ST-02 Column-in-Door-Zone: Triggered when columns block door swing (500–1200mm).",
        "AI suggests corrective actions automatically.",
        "Suggestions include aisle widening or bike slot conversion.",
      ],
    },
    {
      title: "Contractor-Ready Output",
      points: [
        "Works directly with DXF and DWG files.",
        "No redrawing or geometry simplification required.",
        "Separate layers for Primary (2.5m × 5.0m) and Secondary bays.",
        "Bays include intelligent attribute metadata.",
        "Color-coded bays improve site marking clarity.",
        "Turning radii exported as smooth curves.",
        "Instant statistics for parking count and efficiency.",
        "Circulation area and utilization reports generated automatically.",
      ],
    },
  ];

  return (
  <section id="compliance" className="py-32 bg-[#111317] text-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* ================= HEADER ================= */}
    <div className="mb-24 max-w-4xl">
      <h1 className="text-4xl font-bold text-white">
 Hard-Coded Regulation Safety
      </h1>
      {/* <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white/80">
        1. Hard-Coded Regulation Safety
      </h2> */}
      <p className="mt-6 text-gray-300 text-lg leading-relaxed">
        Design with immunity from municipal rejection. Parking Monster doesn’t
        just suggest — it enforces National Building Code (NBC) standards in
        every layout.
      </p>
    </div>

    {/* ================= GRID ================= */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-16 items-stretch">
  {cards.map((card, index) => (
    <div
      key={index}
      className={`point-card ${
        index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
      }`}
    >
      <div className="h-full p-8 bg-black/40 border border-white/10 rounded-2xl flex flex-col">
        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-6">
          {card.title}
        </h2>

        {/* CONTENT */}
        <ul className="space-y-4 text-gray-300 flex-1">
          {card.points.map((point, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-lime-400 font-bold">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

  </div>
</section>

  );
}
