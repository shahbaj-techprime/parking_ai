// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function CoreAISection() {
//   useEffect(() => {
//     gsap.utils.toArray(".ai-card").forEach((card) => {
//       gsap.from(card, {
//         scrollTrigger: {
//           trigger: card,
//           start: "top 80%",
//         },
//         y: 80,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//       });
//     });
//   }, []);

//   const features = [
//     {
//       title: "50mm Increment Optimization",
//       subtitle: "We find the space your architects miss",
//       points: [
//         "AI detects exact internal spans between columns and walls.",
//         "Identifies residual gaps too small for standard bays.",
//         "Applies 50–100mm tolerance overlap within safety limits.",
//         "Distributes space to improve door swing and user comfort.",
//       ],
//     },
//     {
//       title: "Dead Space Absorption",
//       subtitle: "No gap is left unused",
//       points: [
//         "Detects residual gaps between bays and driveways.",
//         "Incrementally widens driveways to absorb dead space.",
//         "Re-aligns bay modules to lock into the grid.",
//         "Improves circulation clarity without reducing capacity.",
//       ],
//     },
//     {
//       title: "Capacity-Driven Reverse Engineering",
//       subtitle: "Tell us the number. We solve the geometry.",
//       points: [
//         "Start with a required parking count instead of guessing.",
//         "Runs multiple iterations with varying bay dimensions.",
//         "Tests 0°, 45°, 60°, and 90° parking angles.",
//         "Generates constraint reports when targets are unreachable.",
//       ],
//     },
//   ];

//   return (
//     <section id="features" className="py-32 bg-[#111317] text-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* SECTION HEADER */}
//         <div className="max-w-3xl mb-24">
//           <h2 className="text-4xl font-bold">
//             The “Greedy” Expansion Engine
//           </h2>
//           <p className="text-gray-300 mt-4">
//             Every 50mm matters. Our AI replaces fixed grids with intelligent
//             expansion logic to absorb dead space and maximize parking yield.
//           </p>
//         </div>

//         {/* ALTERNATING SCROLL CARDS */}
//         <div className="space-y-32">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`ai-card flex flex-col md:flex-row ${
//                 index % 2 === 1 ? "md:flex-row-reverse" : ""
//               } items-center gap-16`}
//             >
//               {/* TEXT CARD */}
//               <div className="md:w-1/2 p-8 bg-black/40 border border-white/10 rounded-2xl">
//                 <h3 className="text-2xl font-semibold">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-400 mt-2">
//                   {feature.subtitle}
//                 </p>

//                 <ul className="mt-6 space-y-3 text-gray-300">
//                   {feature.points.map((point, i) => (
//                     <li key={i} className="flex gap-3">
//                       <span className="text-lime-400 font-bold">✓</span>
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* IMAGE / VISUAL PLACEHOLDER */}
//               <div className="md:w-1/2 h-[300px] rounded-2xl border border-dashed border-white/20 flex items-center justify-center text-gray-500">
//                 AI DIAGRAM / GIF / CAD ANIMATION
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoreAISection() {
  useEffect(() => {
    gsap.utils.toArray(".ai-card").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);

  const features = [
    {
      title: "50mm Increment Optimization",
      subtitle: "We find the space your architects miss",
      points: [
        "Gap Detection & Identification: The AI establishes hard constraints (columns/walls) and calculates the exact internal span.",
        "The Squeeze Phase: If a gap is slightly too small for an extra bay, the engine checks for Tolerance Overlap. It allows a 50mm-100mm overlap per side on column footprints to maintain the bay count, equally compressing bays within safety limits.",
        "The Absorption Phase: If a positive gap remains, the engine triggers a 50mm increment loop. It divides the gap into 50mm units and distributes them to improve user comfort and door-swing clearance",
        "Priority Distribution: Units are first given to End Bays touching columns to help with door swings, then to Primary Bays near main circulation paths",
      ],
    },
    {
      title: "Dead Space Absorption",
      subtitle: "Every gap is absorbed intelligently",
      points: [
        "The system detects residual gaps between the edge of a bay and the driveway.",
        "It will incrementally widen driveways to improve circulation clarity and absorb the gap.",
        "Adjusts bay widths and lengths in 50mm increments.",
        "Locks modules into the grid without reducing capacity.",
      ],
    },
    {
      title: "Capacity-Driven Reverse Engineering",
      subtitle: "Tell us how many cars you need. We solve the rest.",
      points: [
        "Stop guessing and start solving. Our \"Reverse Engineering\" mode allows you to design backward from a required bay count",
        "Input Your Targets: Define your required car slots, dimensional constraints (min/max bay sizes), and site boundaries",
        "The Iterative Solver: The engine runs multiple iterations, varying bay dimensions, driveway widths, and parking angles (0°, 45°, 60°, 90°)",
        "Constraint Reporting: If your target is unreachable, the system returns the maximum possible count and generates a Constraint Report identifying the bottleneck (e.g., \"Column grid limits capacity\")",
      ],
    },
  ];

  return (
    <section id="features" className="py-32 bg-[#111317] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl font-bold">The “Greedy” Expansion Engine</h2>
          <p className="text-gray-300 mt-4">
            Every 50mm is absorbed intelligently. Our AI replaces fixed-grid
            parking with adaptive logic to maximize yield and eliminate dead
            space.
          </p>
        </div>

        {/* ALTERNATING TEXT CARDS */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`ai-card flex ${
                index % 2 === 1 ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <div className="w-full md:w-[70%] p-8 bg-black/40 border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400 mt-2">{feature.subtitle}</p>

                <ul className="mt-6 space-y-3 text-gray-300">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-lime-400 font-bold">✓</span>
                      {point}
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
