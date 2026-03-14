// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// const advantages = [
//   {
//     number: "01",
//     title: "Design Iterations = Project Delay",
//     points:
//       "All parking designs are done manually. Move a column? Redesign 20+ bays. Rejected by the authority? Entire design needs to be done again. Average project: 3-5 cycles of design revisions, 4-6 weeks of lost time, ₹37.5K-₹75K in design costs.",
//     imageUrl:
//       "https://img.sanishtech.com/u/0b07c0b9e24e7948d47d01d604fd2a67.png",
//     tag: "TIME LOSS",
//   },
//   {
//     number: "02",
//     title: "NBC Compliance is a Minefield",
//     points:
//       "National Building Code has 10+ stringent parking standards (turning radius, aisle width, PH bays, ramp landings). Violate one, and the project gets rejected by the civic body. Most designs get rejected after submission, requiring costly redesigns.",
//     imageUrl:
//       "https://img.sanishtech.com/u/4d805ac2d72397dc9f006b6ed870b9c8.png",
//     tag: "COMPLIANCE",
//   },
//   {
//     number: "03",
//     title: "Lost Revenue Due to Inefficient Designs",
//     points:
//       "Manual designs can only capture 85-90% of the maximum parking capacity. Dead space, inefficient circulation paths, and inefficient angles. This translates to 650 parking spots instead of 750, resulting in lost revenue of ₹50-₹300 lakh on a single project.",
//     imageUrl:
//       "https://img.sanishtech.com/u/df5b41ef4b9ea6dc5395914c80fc8b61.png",
//     tag: "REVENUE",
//   },
//   {
//     number: "04",
//     title: "Structural Coordination Chaos",
//     points:
//       "Column locations, ramp locations, and lift cores do not coordinate well with parking designs. Emails back and forth. No what-if analysis. No single point of truth. This leads to either inefficient parking designs or inefficient structural designs or a 2-week delay.",
//     imageUrl:
//       "https://img.sanishtech.com/u/c33db8e58cdb93cbe5cbc4ed8b6c9fc7.png",
//     tag: "COORDINATION",
//   },
//   {
//     number: "05",
//     title: "Compliance Errors With Legal Consequences",
//     points:
//       "PH bays placed in tandem positions. Ramp entries too close to aisles. Missing landing distances. Municipal inspector flags issues after submission. Redesign, reschedule, reputation damage.",
//     imageUrl:
//       "https://img.sanishtech.com/u/087d132851e64f8115e85dbe21b02d2c.png",
//     tag: "LEGAL RISK",
//   },
// ];

// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setInView(true);
//       },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);

//   return { ref, inView };
// }

// function ProblemCard({ item, index }) {
//   const { ref, inView } = useInView(0.15);
//   const isEven = index % 2 === 0;

//   return (
//     <div
//       ref={ref}
//       className={[
//         "group relative flex flex-col md:flex-row items-center gap-8 md:gap-16",
//         "py-12 md:py-20 border-b border-white/[0.06]",
//         "transition-all duration-700 ease-out",
//         isEven ? "md:flex-row" : "md:flex-row-reverse",
//         inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
//       ].join(" ")}
//       style={{ transitionDelay: `${index * 60}ms` }}
//     >
//       {/* Image */}
//       <div
//         className={[
//           "relative w-full md:w-[42%] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden",
//           "border border-white/[0.07] bg-white/[0.03]",
//           "transition-transform duration-500 group-hover:scale-[1.02]",
//         ].join(" ")}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent z-10 pointer-events-none" />
//         <Image
//           src={item.imageUrl}
//           alt={item.title}
//           fill
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, 42vw"
//         />
//         <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-[0.2em] text-white/60">
//           {item.tag}
//         </span>
//       </div>

//       {/* Text */}
//       <div className="flex-1 space-y-4">
//         <div className="flex items-center gap-3 mb-2">
//           <span className="h-px w-8 bg-gradient-to-r from-red-500/70 to-transparent" />
//           <span className="text-[10px] font-mono tracking-[0.25em] text-red-400/70">
//             PROBLEM {item.number}
//           </span>
//         </div>

//         <h3 className="text-2xl md:text-3xl font-semibold text-white/90 leading-tight tracking-tight">
//           {item.title}
//         </h3>

//         <p className="text-[15px] text-white/40 leading-relaxed font-light">
//           {item.points}
//         </p>

//         <div
//           className={[
//             "h-px bg-gradient-to-r from-red-500/50 to-transparent",
//             "transition-all duration-700 delay-300",
//             inView ? "w-24" : "w-0",
//           ].join(" ")}
//         />
//       </div>
//     </div>
//   );
// }

// export default function ProblemSection() {
//   const { ref: headerRef, inView: headerVisible } = useInView(0.1);

//   return (
//     <section className="relative bg-[#080808] min-h-screen overflow-hidden">
//       {/* Noise texture */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.015]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//           backgroundRepeat: "repeat",
//           backgroundSize: "128px 128px",
//         }}
//       />

//       {/* Red glow */}
//       <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-red-600/10 blur-[120px]" />

//       <div className="relative max-w-5xl mx-auto px-5 md:px-10 py-20 md:py-32">
//         {/* Header */}
//         <div
//           ref={headerRef}
//           className={[
//             "mb-16 md:mb-24 max-w-2xl transition-all duration-700 ease-out",
//             headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
//           ].join(" ")}
//         >
//           <p className="text-[10px] font-mono tracking-[0.35em] text-red-400/60 mb-4">
//             THE CORE PROBLEM
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-white/90 leading-[1.1] tracking-tight">
//             Why manual parking{" "}
//             <span className="text-white/30">design is</span>{" "}
//             <span className="relative">
//               broken
//               <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-red-500 to-transparent" />
//             </span>
//           </h2>
//           <p className="mt-5 text-white/35 text-base leading-relaxed font-light max-w-lg">
//             Every project runs into the same walls — wasted weeks, rejected
//             submissions, and revenue left on the table.
//           </p>
//         </div>

//         {/* Cards */}
//         <div>
//           {advantages.map((item, i) => (
//             <ProblemCard key={item.number} item={item} index={i} />
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6">
//           <button className="group relative px-7 py-3.5 rounded-xl bg-white text-black text-sm font-semibold tracking-wide overflow-hidden transition-transform hover:scale-[1.03] active:scale-[0.98]">
//             <span className="relative z-10">See How We Fix This →</span>
//             <span className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </button>
//           <p className="text-white/25 text-xs font-mono tracking-wide">
//             NBC-compliant · Auto-optimized · 10× faster
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// const advantages = [
//   {
//     number: "01",
//     title: "Design Iterations = Project Delay",
//     points:
//       "All parking designs are done manually. Move a column? Redesign 20+ bays. Rejected by the authority? Entire design needs to be done again. Average project: 3-5 cycles of design revisions, 4-6 weeks of lost time, ₹37.5K-₹75K in design costs.",
//     imageUrl:
//       "https://img.sanishtech.com/u/0b07c0b9e24e7948d47d01d604fd2a67.png",
//     tag: "TIME LOSS",
//   },
//   {
//     number: "02",
//     title: "NBC Compliance is a Minefield",
//     points:
//       "National Building Code has 10+ stringent parking standards (turning radius, aisle width, PH bays, ramp landings). Violate one, and the project gets rejected by the civic body. Most designs get rejected after submission, requiring costly redesigns.",
//     imageUrl:
//       "https://img.sanishtech.com/u/4d805ac2d72397dc9f006b6ed870b9c8.png",
//     tag: "COMPLIANCE",
//   },
//   {
//     number: "03",
//     title: "Lost Revenue Due to Inefficient Designs",
//     points:
//       "Manual designs can only capture 85-90% of the maximum parking capacity. Dead space, inefficient circulation paths, and inefficient angles. This translates to 650 parking spots instead of 750, resulting in lost revenue of ₹50-₹300 lakh on a single project.",
//     imageUrl:
//       "https://img.sanishtech.com/u/df5b41ef4b9ea6dc5395914c80fc8b61.png",
//     tag: "REVENUE",
//   },
//   {
//     number: "04",
//     title: "Structural Coordination Chaos",
//     points:
//       "Column locations, ramp locations, and lift cores do not coordinate well with parking designs. Emails back and forth. No what-if analysis. No single point of truth. This leads to either inefficient parking designs or inefficient structural designs or a 2-week delay.",
//     imageUrl:
//       "https://img.sanishtech.com/u/c33db8e58cdb93cbe5cbc4ed8b6c9fc7.png",
//     tag: "COORDINATION",
//   },
//   {
//     number: "05",
//     title: "Compliance Errors With Legal Consequences",
//     points:
//       "PH bays placed in tandem positions. Ramp entries too close to aisles. Missing landing distances. Municipal inspector flags issues after submission. Redesign, reschedule, reputation damage.",
//     imageUrl:
//       "https://img.sanishtech.com/u/087d132851e64f8115e85dbe21b02d2c.png",
//     tag: "LEGAL RISK",
//   },
// ];

// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setInView(true);
//       },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);

//   return { ref, inView };
// }

// function ProblemCard({ item, index }) {
//   const { ref, inView } = useInView(0.15);
//   const isEven = index % 2 === 0;

//   return (
//     <div
//       ref={ref}
//       className={[
//         "group relative flex flex-col md:flex-row items-center gap-8 md:gap-16",
//         "py-12 md:py-20 border-b border-white/[0.06]",
//         "transition-all duration-700 ease-out",
//         isEven ? "md:flex-row" : "md:flex-row-reverse",
//         inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
//       ].join(" ")}
//       style={{ transitionDelay: `${index * 60}ms` }}
//     >
//       {/* Image */}
//       <div
//         className={[
//           "relative w-full md:w-[42%] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden",
//           "border border-white/[0.07] bg-white/[0.03]",
//           "transition-transform duration-500 group-hover:scale-[1.02]",
//         ].join(" ")}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent z-10 pointer-events-none" />
//         <img
//           src={item.imageUrl}
//           alt={item.title}
//           fill
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, 42vw"
//         />
//         <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-[0.2em] text-white/60">
//           {item.tag}
//         </span>
//       </div>

//       {/* Text */}
//       <div className="flex-1 space-y-4">
//         <div className="flex items-center gap-3 mb-2">
//           <span className="h-px w-8 bg-gradient-to-r from-red-500/70 to-transparent" />
//           <span className="text-[10px] font-mono tracking-[0.25em] text-red-400/70">
//             PROBLEM {item.number}
//           </span>
//         </div>

//         <h3 className="text-2xl md:text-3xl font-semibold text-white/90 leading-tight tracking-tight">
//           {item.title}
//         </h3>

//         <p className="text-[15px] text-white/40 leading-relaxed font-light">
//           {item.points}
//         </p>

//         <div
//           className={[
//             "h-px bg-gradient-to-r from-red-500/50 to-transparent",
//             "transition-all duration-700 delay-300",
//             inView ? "w-24" : "w-0",
//           ].join(" ")}
//         />
//       </div>
//     </div>
//   );
// }

// export default function ProblemSection() {
//   const { ref: headerRef, inView: headerVisible } = useInView(0.1);

//   return (
//     <section className="relative bg-[#080808] min-h-screen overflow-hidden">
//       {/* Noise texture */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.015]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//           backgroundRepeat: "repeat",
//           backgroundSize: "128px 128px",
//         }}
//       />

//       {/* Red glow */}
//       <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-red-600/10 blur-[120px]" />

//       <div className="relative max-w-5xl mx-auto px-5 md:px-10 py-20 md:py-32">
//         {/* Header */}
//         <div
//           ref={headerRef}
//           className={[
//             "mb-16 md:mb-24 max-w-2xl transition-all duration-700 ease-out",
//             headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
//           ].join(" ")}
//         >
//           <p className="text-[10px] font-mono tracking-[0.35em] text-red-400/60 mb-4">
//             THE CORE PROBLEM
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-white/90 leading-[1.1] tracking-tight">
//             Why manual parking{" "}
//             <span className="text-white/30">design is</span>{" "}
//             <span className="relative">
//               broken
//               <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-red-500 to-transparent" />
//             </span>
//           </h2>
//           <p className="mt-5 text-white/35 text-base leading-relaxed font-light max-w-lg">
//             Every project runs into the same walls — wasted weeks, rejected
//             submissions, and revenue left on the table.
//           </p>
//         </div>

//         {/* Cards */}
//         <div>
//           {advantages.map((item, i) => (
//             <ProblemCard key={item.number} item={item} index={i} />
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6">
//           <button className="group relative px-7 py-3.5 rounded-xl bg-white text-black text-sm font-semibold tracking-wide overflow-hidden transition-transform hover:scale-[1.03] active:scale-[0.98]">
//             <span className="relative z-10">See How We Fix This →</span>
//             <span className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </button>
//           <p className="text-white/25 text-xs font-mono tracking-wide">
//             NBC-compliant · Auto-optimized · 10× faster
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";

// const problems = [
//   {
//     num: "01",
//     icon: "⏱",
//     tag: "TIME LOSS",
//     title: "Design Iterations = Project Delay",
//     body: "Move a column? Redesign 20+ bays. 3–5 revision cycles, 4–6 weeks lost, ₹37.5K–₹75K in design costs.",
//   },
//   {
//     num: "02",
//     icon: "📋",
//     tag: "COMPLIANCE",
//     title: "NBC Compliance is a Minefield",
//     body: "10+ standards — violate one and civic body rejects. Most designs need costly redesigns post-submission.",
//   },
//   {
//     num: "03",
//     icon: "💸",
//     tag: "REVENUE",
//     title: "Lost Revenue: Inefficient Designs",
//     body: "Manual designs hit only 85–90% capacity. 650 spots instead of 750 = ₹50–₹300 lakh lost per project.",
//   },
//   {
//     num: "04",
//     icon: "🔀",
//     tag: "COORDINATION",
//     title: "Structural Coordination Chaos",
//     body: "Columns, ramps, lift cores clash. No source of truth. Emails back and forth. 2-week delay guaranteed.",
//   },
//   {
//     num: "05",
//     icon: "⚠️",
//     tag: "LEGAL RISK",
//     title: "Compliance Errors & Legal Risk",
//     body: "PH bays tandem-placed. Ramp entries too close. Inspector flags after submission — redesign & reschedule.",
//   },
// ];

// const W = 520;
// const H = 520;
// const CX = 260;
// const CY = 260;
// const R = 200;

// function getPos(angle, i) {
//   const a = ((angle + i * (360 / problems.length) - 90) * Math.PI) / 180;
//   return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
// }

// function getCardPos(x, y) {
//   let px = x < CX ? x - 218 : x + 38;
//   let py = y - 72;
//   px = Math.max(2, Math.min(px, W - 214));
//   py = Math.max(2, Math.min(py, H - 185));
//   return { px, py };
// }

// export default function RotatingNodes() {
//   const [angle, setAngle] = useState(0);
//   const [active, setActive] = useState(0);
//   const [seq, setSeq] = useState(0);
//   const [spinning, setSpinning] = useState(true);

//   const angleRef = useRef(0);
//   const seqRef = useRef(0);

//   useEffect(() => {
//     seqRef.current = seq;
//   }, [seq]);

//   // Spin loop
//   useEffect(() => {
//     if (!spinning) return;
//     let id;
//     const loop = () => {
//       angleRef.current = (angleRef.current + 0.16) % 360;
//       setAngle(angleRef.current);
//       id = requestAnimationFrame(loop);
//     };
//     id = requestAnimationFrame(loop);
//     return () => cancelAnimationFrame(id);
//   }, [spinning]);

//   // Auto sequence
//   useEffect(() => {
//     if (!spinning) return;
//     const interval = setInterval(() => {
//       const next = (seqRef.current + 1) % problems.length;
//       seqRef.current = next;
//       setSeq(next);
//       setActive(next);
//     }, 2800);
//     return () => clearInterval(interval);
//   }, [spinning]);

//   const show = useCallback((i) => {
//     setActive((prev) => (prev === i ? -1 : i));
//     setSeq(i);
//     seqRef.current = i;
//   }, []);

//   const goNext = () => {
//     const n = (seqRef.current + 1) % problems.length;
//     seqRef.current = n;
//     setSeq(n);
//     setActive(n);
//   };

//   const goPrev = () => {
//     const p = (seqRef.current - 1 + problems.length) % problems.length;
//     seqRef.current = p;
//     setSeq(p);
//     setActive(p);
//   };

//   const nodePositions = problems.map((_, i) => getPos(angle, i));

//   return (
//     <div
//       className="flex flex-col items-center py-9 px-5 min-h-screen"
//       style={{ background: "#0a0a0a" }}
//     >
//       {/* Arena */}
//       <div
//         className="relative"
//         style={{ width: W, height: H, maxWidth: "min(100%, 520px)" }}
//       >
//         {/* Orbit rings */}
//         {[{ size: 400, opacity: "0.06" }, { size: 160, opacity: "0.08" }].map(({ size, opacity }) => (
//           <div
//             key={size}
//             className="absolute rounded-full pointer-events-none"
//             style={{
//               top: "50%",
//               left: "50%",
//               width: size,
//               height: size,
//               transform: "translate(-50%, -50%)",
//               border: `1px solid rgba(255,255,255,${opacity})`,
//             }}
//           />
//         ))}

//         {/* SVG lines */}
//         <svg
//           className="absolute top-0 left-0 overflow-visible pointer-events-none"
//           style={{ width: "100%", height: "100%" }}
//         >
//           {problems.map((_, i) => {
//             const { x, y } = nodePositions[i];
//             const on = i === active;
//             return (
//               <g key={i}>
//                 <line
//                   x1={CX} y1={CY} x2={x} y2={y}
//                   stroke={on ? "#c0392b" : "rgba(255,255,255,0.07)"}
//                   strokeWidth={on ? 1.5 : 0.5}
//                   strokeDasharray={on ? undefined : "6 5"}
//                 />
//                 {on && (
//                   <circle
//                     cx={x} cy={y} r={37}
//                     fill="none"
//                     stroke="#c0392b"
//                     strokeWidth={0.8}
//                     opacity={0.3}
//                   />
//                 )}
//               </g>
//             );
//           })}
//         </svg>

//         {/* Center node */}
//         <div
//           className="absolute z-10 rounded-full flex flex-col items-center justify-center text-center"
//           style={{
//             top: "50%",
//             left: "50%",
//             width: 140,
//             height: 140,
//             transform: "translate(-50%, -50%)",
//             background: "#111",
//             border: "1px solid rgba(255,255,255,0.12)",
//             padding: 12,
//           }}
//         >
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: 500,
//               color: "#fff",
//               lineHeight: 1.35,
//             }}
//           >
//             Manual Parking Design
//           </span>
//           <span
//             style={{
//               fontSize: 10,
//               color: "rgba(255,255,255,0.3)",
//               marginTop: 3,
//               letterSpacing: "0.05em",
//             }}
//           >
//             5 problems
//           </span>
//         </div>

//         {/* Nodes */}
//         {problems.map((p, i) => {
//           const { x, y } = nodePositions[i];
//           const on = i === active;
//           return (
//             <button
//               key={i}
//               onClick={() => show(i)}
//               className="absolute flex flex-col items-center justify-center rounded-full z-[5] cursor-pointer select-none"
//               style={{
//                 width: 66,
//                 height: 66,
//                 left: x - 33,
//                 top: y - 33,
//                 background: on ? "#1a0a09" : "#111",
//                 border: `1px solid ${on ? "#c0392b" : "rgba(255,255,255,0.1)"}`,
//                 transition: "border-color 0.25s, background 0.25s, transform 0.18s",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.12)")}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <span
//                 style={{
//                   fontSize: 8,
//                   fontWeight: 500,
//                   color: "rgba(255,255,255,0.25)",
//                   letterSpacing: "0.12em",
//                 }}
//               >
//                 {p.num}
//               </span>
//               <span style={{ fontSize: 18, lineHeight: 1.2 }}>{p.icon}</span>
//             </button>
//           );
//         })}

//         {/* Classic Cards */}
//         {problems.map((p, i) => {
//           const { x, y } = nodePositions[i];
//           const { px, py } = getCardPos(x, y);
//           const on = i === active;
//           return (
//             <div
//               key={i}
//               className="absolute z-30 overflow-hidden"
//               style={{
//                 width: 210,
//                 left: px,
//                 top: py,
//                 background: "#111",
//                 border: "1px solid rgba(255,255,255,0.1)",
//                 borderRadius: 14,
//                 opacity: on ? 1 : 0,
//                 transform: on
//                   ? "translateY(0) scale(1)"
//                   : "translateY(6px) scale(0.95)",
//                 pointerEvents: on ? "auto" : "none",
//                 transition: "opacity 0.22s, transform 0.22s",
//               }}
//             >
//               {/* Card header */}
//               <div
//                 style={{
//                   padding: "14px 14px 10px",
//                   borderBottom: "1px solid rgba(255,255,255,0.06)",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: 8,
//                     fontWeight: 500,
//                     letterSpacing: "0.18em",
//                     color: "#c0392b",
//                     marginBottom: 6,
//                   }}
//                 >
//                   {p.tag}
//                 </div>
//                 <div
//                   style={{
//                     fontSize: 12,
//                     fontWeight: 500,
//                     color: "#fff",
//                     lineHeight: 1.45,
//                   }}
//                 >
//                   {p.title}
//                 </div>
//               </div>

//               {/* Card body */}
//               <div style={{ padding: "10px 14px 14px", position: "relative" }}>
//                 <div
//                   style={{
//                     fontSize: 11,
//                     color: "rgba(255,255,255,0.45)",
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   {p.body}
//                 </div>
//                 {/* Ghost number */}
//                 <div
//                   style={{
//                     fontSize: 32,
//                     fontWeight: 500,
//                     color: "rgba(255,255,255,0.06)",
//                     position: "absolute",
//                     bottom: 8,
//                     right: 12,
//                     letterSpacing: "-0.02em",
//                     userSelect: "none",
//                   }}
//                 >
//                   {p.num}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Progress dots */}
//       <div className="flex gap-1.5 mt-4">
//         {problems.map((_, i) => (
//           <div
//             key={i}
//             style={{
//               width: 5,
//               height: 5,
//               borderRadius: "50%",
//               background:
//                 i === active ? "#c0392b" : "rgba(255,255,255,0.12)",
//               transform: i === active ? "scale(1.4)" : "scale(1)",
//               transition: "background 0.3s, transform 0.3s",
//             }}
//           />
//         ))}
//       </div>

//       {/* Controls */}
//       <div className="flex gap-2 mt-3">
//         {[
//           { label: "← Prev", onClick: goPrev },
//           {
//             label: spinning ? "❚❚ Pause" : "▶ Play",
//             onClick: () => setSpinning((s) => !s),
//           },
//           { label: "Next →", onClick: goNext },
//         ].map((btn) => (
//           <button
//             key={btn.label}
//             onClick={btn.onClick}
//             style={{
//               fontSize: 11,
//               color: "rgba(255,255,255,0.35)",
//               border: "1px solid rgba(255,255,255,0.1)",
//               borderRadius: 8,
//               padding: "5px 14px",
//               background: "transparent",
//               cursor: "pointer",
//               letterSpacing: "0.04em",
//               transition: "background 0.15s, color 0.15s",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = "rgba(255,255,255,0.06)";
//               e.currentTarget.style.color = "rgba(255,255,255,0.7)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = "transparent";
//               e.currentTarget.style.color = "rgba(255,255,255,0.35)";
//             }}
//           >
//             {btn.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }




"use client";

import { useEffect, useRef, useState } from "react";

const problems = [
  {
    num: "01",
    icon: "⏱",
    tag: "TIME LOSS",
    title: "Design Iterations = Project Delay",
    body: "Move a column? Redesign 20+ bays. 3–5 revision cycles, 4–6 weeks lost, ₹37.5K–₹75K in design costs.",
  },
  {
    num: "02",
    icon: "📋",
    tag: "COMPLIANCE",
    title: "NBC Compliance is a Minefield",
    body: "10+ standards — violate one and civic body rejects. Most designs need costly redesigns post-submission.",
  },
  {
    num: "03",
    icon: "💸",
    tag: "REVENUE",
    title: "Lost Revenue: Inefficient Designs",
    body: "Manual designs hit only 85–90% capacity. 650 spots instead of 750 = ₹50–₹300 lakh lost per project.",
  },
  {
    num: "04",
    icon: "🔀",
    tag: "COORDINATION",
    title: "Structural Coordination Chaos",
    body: "Columns, ramps, lift cores clash. No source of truth. Emails back and forth. 2-week delay guaranteed.",
  },
  {
    num: "05",
    icon: "⚠️",
    tag: "LEGAL RISK",
    title: "Compliance Errors & Legal Risk",
    body: "PH bays tandem-placed. Ramp entries too close. Inspector flags after submission — redesign & reschedule.",
  },
];

const W = 520;
const H = 520;
const CX = 260;
const CY = 260;
const R = 200;
const STEP = 360 / problems.length;

function getPos(angle, i) {
  const a = ((angle + i * STEP - 90) * Math.PI) / 180;
  return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
}

function getClosestToTop(angle) {
  let closestI = 0;
  let minDist = Infinity;
  problems.forEach((_, i) => {
    const { y } = getPos(angle, i);
    const dist = Math.abs(y - (CY - R));
    if (dist < minDist) {
      minDist = dist;
      closestI = i;
    }
  });
  return { index: closestI, dist: minDist };
}

function getTargetAngle(targetIndex) {
  return (((-targetIndex * STEP) % 360) + 360) % 360;
}

export default function RotatingNodes() {
  const [angle, setAngle] = useState(0);
  const [active, setActive] = useState(-1);
  const [spinning, setSpinning] = useState(true);

  const angleRef = useRef(0);
  const activeRef = useRef(-1);
  const rafRef = useRef(null);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Main spin loop
  useEffect(() => {
    if (!spinning) return;

    const loop = () => {
      angleRef.current = (angleRef.current + 0.22) % 360;
      setAngle(angleRef.current);

      const { index, dist } = getClosestToTop(angleRef.current);
      if (dist < 18 && index !== activeRef.current) {
        activeRef.current = index;
        setActive(index);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [spinning]);

  const jumpTo = (targetIndex) => {
    const desired = getTargetAngle(targetIndex);
    angleRef.current = desired;
    setAngle(desired);
    activeRef.current = targetIndex;
    setActive(targetIndex);
  };

  const goNext = () => jumpTo((activeRef.current + 1) % problems.length);
  const goPrev = () =>
    jumpTo((activeRef.current - 1 + problems.length) % problems.length);
  const toggleSpin = () => setSpinning((s) => !s);

  const nodePositions = problems.map((_, i) => getPos(angle, i));

  // Card is fixed above the top position
  const cardLeft = CX - 110;
  const cardTop = CY - R - 115;
  const activeData = active >= 0 ? problems[active] : null;

  return (
    <div
      className="flex flex-col items-center py-9 px-5 min-h-screen"
      style={{ background: "#0a0a0a" }}
    >
      {/* Arena */}
      <div
        className="relative"
        style={{ width: W, height: H, maxWidth: "min(100%, 520px)" }}
      >
        {/* Orbit rings */}
        {[
          { size: 400, alpha: "0.06" },
          { size: 160, alpha: "0.08" },
        ].map(({ size, alpha }) => (
          <div
            key={size}
            className="absolute rounded-full pointer-events-none"
            style={{
              top: "50%",
              left: "50%",
              width: size,
              height: size,
              transform: "translate(-50%, -50%)",
              border: `1px solid rgba(255,255,255,${alpha})`,
            }}
          />
        ))}

        {/* SVG: lines + top marker */}
        <svg
          className="absolute top-0 left-0 overflow-visible pointer-events-none"
          style={{ width: "100%", height: "100%" }}
        >
          {/* Red dot at top position */}
          <circle cx={CX} cy={CY - R} r={5} fill="#c0392b" opacity={0.4} />

          {problems.map((_, i) => {
            const { x, y } = nodePositions[i];
            const on = i === active;
            return (
              <g key={i}>
                <line
                  x1={CX}
                  y1={CY}
                  x2={x}
                  y2={y}
                  stroke={on ? "#c0392b" : "rgba(255,255,255,0.07)"}
                  strokeWidth={on ? 1.5 : 0.5}
                  strokeDasharray={on ? undefined : "6 5"}
                />
                {on && (
                  <circle
                    cx={x}
                    cy={y}
                    r={37}
                    fill="none"
                    stroke="#c0392b"
                    strokeWidth={0.8}
                    opacity={0.3}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Center node */}
        <div
          className="absolute z-10 rounded-full flex flex-col items-center justify-center text-center"
          style={{
            top: "50%",
            left: "50%",
            width: 140,
            height: 140,
            transform: "translate(-50%, -50%)",
            background: "#111",
            border: "1px solid rgba(255,255,255,0.12)",
            padding: 12,
          }}
        >
          <span
            style={{ fontSize: 12, fontWeight: 500, color: "#fff", lineHeight: 1.35 }}
          >
            Manual Parking Design
          </span>
          <span
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.3)",
              marginTop: 3,
              letterSpacing: "0.05em",
            }}
          >
            5 problems
          </span>
        </div>

        {/* Rotating nodes */}
        {problems.map((p, i) => {
          const { x, y } = nodePositions[i];
          const on = i === active;
          return (
            <div
              key={i}
              className="absolute flex flex-col items-center justify-center rounded-full z-[5]"
              style={{
                width: 66,
                height: 66,
                left: x - 33,
                top: y - 33,
                background: on ? "#1a0a09" : "#111",
                border: `1px solid ${on ? "#c0392b" : "rgba(255,255,255,0.1)"}`,
                transition: "border-color 0.25s, background 0.25s",
              }}
            >
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.12em",
                }}
              >
                {p.num}
              </span>
              <span style={{ fontSize: 18, lineHeight: 1.2 }}>{p.icon}</span>
            </div>
          );
        })}

        {/* Classic Card — fixed above top position */}
        <div
          className="absolute z-30 overflow-hidden"
          style={{
            width: 220,
            left: cardLeft,
            top: cardTop,
            background: "#111",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 14,
            opacity: activeData ? 1 : 0,
            transform: activeData
              ? "translateY(0) scale(1)"
              : "translateY(8px) scale(0.94)",
            transition: "opacity 0.25s, transform 0.25s",
            pointerEvents: "none",
          }}
        >
          {activeData && (
            <>
              {/* Card header */}
              <div
                style={{
                  padding: "14px 14px 10px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: 8,
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    color: "#c0392b",
                    marginBottom: 6,
                  }}
                >
                  {activeData.tag}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#fff",
                    lineHeight: 1.45,
                  }}
                >
                  {activeData.title}
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "10px 14px 14px", position: "relative" }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.6,
                  }}
                >
                  {activeData.body}
                </div>
                {/* Ghost number watermark */}
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.06)",
                    position: "absolute",
                    bottom: 8,
                    right: 12,
                    letterSpacing: "-0.02em",
                    userSelect: "none",
                  }}
                >
                  {activeData.num}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 mt-4">
        {problems.map((_, i) => (
          <div
            key={i}
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background:
                i === active ? "#c0392b" : "rgba(255,255,255,0.12)",
              transform: i === active ? "scale(1.4)" : "scale(1)",
              transition: "background 0.3s, transform 0.3s",
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-2 mt-3">
        {[
          { label: "← Prev", onClick: goPrev },
          { label: spinning ? "❚❚ Pause" : "▶ Play", onClick: toggleSpin },
          { label: "Next →", onClick: goNext },
        ].map((btn) => (
          <button
            key={btn.label}
            onClick={btn.onClick}
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.35)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              padding: "5px 14px",
              background: "transparent",
              cursor: "pointer",
              letterSpacing: "0.04em",
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.color = "rgba(255,255,255,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "rgba(255,255,255,0.35)";
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}