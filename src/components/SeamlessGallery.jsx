// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function SeamlessGallery() {
//   const galleryRef = useRef(null);
//   const cardsRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       gsap.to("img", { opacity: 1, delay: 0.1 });

//       let iteration = 0;

//       const spacing = 0.1;
//       const snap = gsap.utils.snap(spacing);
//       const cards = gsap.utils.toArray(".cards li");

//       const seamlessLoop = buildSeamlessLoop(cards, spacing);

//       const scrub = gsap.to(seamlessLoop, {
//         totalTime: 0,
//         duration: 0.5,
//         ease: "power3",
//         paused: true,
//       });

//       const trigger = ScrollTrigger.create({
//         start: 0,
//         end: "+=3000",
//         pin: galleryRef.current,
//         onUpdate(self) {
//           if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
//             wrapForward(self);
//           } else if (
//             self.progress < 1e-5 &&
//             self.direction < 0 &&
//             !self.wrapping
//           ) {
//             wrapBackward(self);
//           } else {
//             scrub.vars.totalTime = snap(
//               (iteration + self.progress) * seamlessLoop.duration()
//             );
//             scrub.invalidate().restart();
//             self.wrapping = false;
//           }
//         },
//       });

//       function wrapForward(trigger) {
//         iteration++;
//         trigger.wrapping = true;
//         trigger.scroll(trigger.start + 1);
//       }

//       function wrapBackward(trigger) {
//         iteration--;
//         if (iteration < 0) {
//           iteration = 9;
//           seamlessLoop.totalTime(
//             seamlessLoop.totalTime() + seamlessLoop.duration() * 10
//           );
//           scrub.pause();
//         }
//         trigger.wrapping = true;
//         trigger.scroll(trigger.end - 1);
//       }

//       function scrubTo(totalTime) {
//         let progress =
//           (totalTime - seamlessLoop.duration() * iteration) /
//           seamlessLoop.duration();

//         if (progress > 1) {
//           wrapForward(trigger);
//         } else if (progress < 0) {
//           wrapBackward(trigger);
//         } else {
//           trigger.scroll(
//             trigger.start + progress * (trigger.end - trigger.start)
//           );
//         }
//       }

//       document
//         .querySelector(".next")
//         .addEventListener("click", () =>
//           scrubTo(scrub.vars.totalTime + spacing)
//         );

//       document
//         .querySelector(".prev")
//         .addEventListener("click", () =>
//           scrubTo(scrub.vars.totalTime - spacing)
//         );

//       function buildSeamlessLoop(items, spacing) {
//         let overlap = Math.ceil(1 / spacing),
//           startTime = items.length * spacing + 0.5,
//           loopTime = (items.length + overlap) * spacing + 1,
//           rawSequence = gsap.timeline({ paused: true }),
//           seamlessLoop = gsap.timeline({
//             paused: true,
//             repeat: -1,
//             onRepeat() {
//               this._time === this._dur &&
//                 (this._tTime += this._dur - 0.01);
//             },
//           }),
//           l = items.length + overlap * 2,
//           time = 0,
//           i,
//           index,
//           item;

//         gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

//         for (i = 0; i < l; i++) {
//           index = i % items.length;
//           item = items[index];
//           time = i * spacing;

//           rawSequence
//             .fromTo(
//               item,
//               { scale: 0, opacity: 0 },
//               {
//                 scale: 1,
//                 opacity: 1,
//                 zIndex: 100,
//                 duration: 0.5,
//                 yoyo: true,
//                 repeat: 1,
//                 ease: "power1.in",
//                 immediateRender: false,
//               },
//               time
//             )
//             .fromTo(
//               item,
//               { xPercent: 400 },
//               {
//                 xPercent: -400,
//                 duration: 1,
//                 ease: "none",
//                 immediateRender: false,
//               },
//               time
//             );

//           i <= items.length && seamlessLoop.add("label" + i, time);
//         }

//         rawSequence.time(startTime);

//         seamlessLoop
//           .to(rawSequence, {
//             time: loopTime,
//             duration: loopTime - startTime,
//             ease: "none",
//           })
//           .fromTo(
//             rawSequence,
//             { time: overlap * spacing + 1 },
//             {
//               time: startTime,
//               duration: startTime - (overlap * spacing + 1),
//               immediateRender: false,
//               ease: "none",
//             }
//           );

//         return seamlessLoop;
//       }
//     }, galleryRef);

//     return () => ctx.revert(); // cleanup
//   }, []);

//   return (
//     <div ref={galleryRef} className="gallery">
//       <ul className="cards" ref={cardsRef}>
//         {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, index) => (
//           <li key={index}>
//             <img
//               src={`https://assets.codepen.io/16327/portrait-number-${num}.png`}
//               alt=""
//             />
//           </li>
//         ))}
//       </ul>

//       <div className="actions">
//         <button className="prev">Prev</button>
//         <button className="next">Next</button>
//       </div>

//       <style jsx>{`
//         * {
//           box-sizing: border-box;
//         }

//         .gallery {
//           position: relative;
//           width: 100%;
//           height: 100vh;
//           overflow: hidden;
//           background: #111;
//         }

//         .cards {
//           position: absolute;
//           width: 14rem;
//           height: 18rem;
//           top: 40%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//         }

//         .cards li {
//           list-style: none;
//           width: 14rem;
//           height: 18rem;
//           position: absolute;
//           top: 0;
//           left: 0;
//           border-radius: 0.8rem;
//         }

//         .cards li img {
//           max-width: 90%;
//           opacity: 0;
//         }

//         .actions {
//           position: absolute;
//           bottom: 25px;
//           left: 50%;
//           transform: translateX(-50%);
//         }

//         button {
//           padding: 12px 25px;
//           border-radius: 99px;
//           margin: 1rem;
//           cursor: pointer;
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function SeamlessGallery() {
//   const galleryRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       const spacing = 0.1;
//       const snap = gsap.utils.snap(spacing);
//       const cards = gsap.utils.toArray(".cards li");

//       // Fade in images
//       gsap.to(".cards li img", { opacity: 1, delay: 0.1 });

//       const seamlessLoop = buildSeamlessLoop(cards, spacing);

//       const scrub = gsap.to(seamlessLoop, {
//         totalTime: 0,
//         duration: 0.5,
//         ease: "power3",
//         paused: true,
//       });

//       // ✅ UPDATED ScrollTrigger (No wrapping logic)
//       ScrollTrigger.create({
//         start: 0,
//         end: "+=3000",
//         pin: galleryRef.current,
//         onUpdate(self) {
//           scrub.vars.totalTime = snap(
//             self.progress * seamlessLoop.duration()
//           );
//           scrub.invalidate().restart();
//         },
//       });

//       // ✅ Updated Button Controls (No scroll reset)
//       const nextBtn = document.querySelector(".next");
//       const prevBtn = document.querySelector(".prev");

//       nextBtn?.addEventListener("click", () => {
//         scrub.vars.totalTime = Math.min(
//           scrub.vars.totalTime + spacing,
//           seamlessLoop.duration()
//         );
//         scrub.invalidate().restart();
//       });

//       prevBtn?.addEventListener("click", () => {
//         scrub.vars.totalTime = Math.max(
//           scrub.vars.totalTime - spacing,
//           0
//         );
//         scrub.invalidate().restart();
//       });

//       function buildSeamlessLoop(items, spacing) {
//         let overlap = Math.ceil(1 / spacing),
//           startTime = items.length * spacing + 0.5,
//           loopTime = (items.length + overlap) * spacing + 1,
//           rawSequence = gsap.timeline({ paused: true }),
//           seamlessLoop = gsap.timeline({
//             paused: true,
//           }),
//           l = items.length + overlap * 2,
//           time = 0,
//           i,
//           index,
//           item;

//         gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

//         for (i = 0; i < l; i++) {
//           index = i % items.length;
//           item = items[index];
//           time = i * spacing;

//           rawSequence
//             .fromTo(
//               item,
//               { scale: 0, opacity: 0 },
//               {
//                 scale: 1,
//                 opacity: 1,
//                 zIndex: 100,
//                 duration: 0.5,
//                 yoyo: true,
//                 repeat: 1,
//                 ease: "power1.in",
//                 immediateRender: false,
//               },
//               time
//             )
//             .fromTo(
//               item,
//               { xPercent: 400 },
//               {
//                 xPercent: -400,
//                 duration: 1,
//                 ease: "none",
//                 immediateRender: false,
//               },
//               time
//             );
//         }

//         rawSequence.time(startTime);

//         seamlessLoop.to(rawSequence, {
//           time: loopTime,
//           duration: loopTime - startTime,
//           ease: "none",
//         });

//         return seamlessLoop;
//       }
//     }, galleryRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={galleryRef} className="gallery">
//       <ul className="cards">
//         {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, index) => (
//           <li key={index}>
//             <img
//               src={`https://assets.codepen.io/16327/portrait-number-${num}.png`}
//               alt=""
//             />
//           </li>
//         ))}
//       </ul>

//       <div className="actions">
//         <button className="prev">Prev</button>
//         <button className="next">Next</button>
//       </div>

//       <style jsx>{`
//         * {
//           box-sizing: border-box;
//         }

//         .gallery {
//           position: relative;
//           width: 100%;
//           height: 100vh;
//           overflow: hidden;
//           background: #111;
//         }

//         .cards {
//           position: absolute;
//           width: 14rem;
//           height: 18rem;
//           top: 40%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//         }

//         .cards li {
//           list-style: none;
//           width: 14rem;
//           height: 18rem;
//           position: absolute;
//           top: 0;
//           left: 0;
//           border-radius: 0.8rem;
//         }

//         .cards li img {
//           max-width: 90%;
//           opacity: 0;
//         }

//         .actions {
//           position: absolute;
//           bottom: 25px;
//           left: 50%;
//           transform: translateX(-50%);
//         }

//         button {
//           padding: 12px 25px;
//           border-radius: 99px;
//           margin: 1rem;
//           cursor: pointer;
//           border: none;
//           background: white;
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const advantages = [
//   {
//     title: "Design Iterations = Project Delay",
//     points: [
//       "All parking designs are done manually. Move a column? Redesign 20+ bays. Rejected by the authority? Entire design needs to be done again. Average project: 3-5 cycles of design revisions, 4-6 weeks of lost time, ₹37.5K-₹75K in design costs",
//     ],
//   },
//   {
//     title: "NBC Compliance is a Minefield",
//     points: [
//       "National Building Code has 10+ stringent parking standards (turning radius, aisle width, PH bays, ramp landings). Violate one, and the project gets rejected by the civic body. Most designs get rejected after submission, requiring costly redesigns.",
//     ],
//   },
//   {
//     title: "Lost Revenue Due to Inefficient Designs",
//     points: [
//       "Manual designs can only capture 85-90% of the maximum parking capacity. Dead space, inefficient circulation paths, and inefficient angles. This translates to 650 parking spots instead of 750, resulting in lost revenue of ₹50-₹300 lakh on a single project.",
//     ],
//   },
//   {
//     title: "Structural Coordination Chaos",
//     points: [
//       "Column locations, ramp locations, and lift cores do not coordinate well with parking designs. Emails back and forth. No what-if analysis. No single point of truth. This leads to either inefficient parking designs or inefficient structural designs or a 2-week delay.",
//     ],
//   },
//   {
//     title: "Compliance Errors With Legal Consequences",
//     points: [
//       "PH bays placed in tandem positions. Ramp entries too close to aisles. Missing landing distances. Municipal inspector flags issues after submission. Redesign, reschedule, reputation damage.",
//     ],
//   },
// ];

// export default function SeamlessGallery() {
//   const galleryRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       const spacing = 0.15;
//       const snap = gsap.utils.snap(spacing);
//       const cards = gsap.utils.toArray(".cards li");

//       const seamlessLoop = buildSeamlessLoop(cards, spacing);

//       const scrub = gsap.to(seamlessLoop, {
//         totalTime: 0,
//         duration: 0.5,
//         ease: "power3",
//         paused: true,
//       });

//       ScrollTrigger.create({
//         start: 0,
//         end: "+=3000",
//         pin: galleryRef.current,
//         onUpdate(self) {
//           scrub.vars.totalTime = snap(self.progress * seamlessLoop.duration());
//           scrub.invalidate().restart();
//         },
//       });

//       function buildSeamlessLoop(items, spacing) {
//         let overlap = Math.ceil(1 / spacing),
//           startTime = items.length * spacing + 0.5,
//           loopTime = (items.length + overlap) * spacing + 1,
//           rawSequence = gsap.timeline({ paused: true }),
//           seamlessLoop = gsap.timeline({ paused: true }),
//           l = items.length + overlap * 2,
//           time = 0,
//           i,
//           index,
//           item;

//         gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

//         for (i = 0; i < l; i++) {
//           index = i % items.length;
//           item = items[index];
//           time = i * spacing;

//           rawSequence
//             .fromTo(
//               item,
//               { scale: 0, opacity: 0 },
//               {
//                 scale: 1,
//                 opacity: 1,
//                 zIndex: 100,
//                 duration: 0.6,
//                 yoyo: true,
//                 repeat: 1,
//                 ease: "power1.inOut",
//                 immediateRender: false,
//               },
//               time,
//             )
//             .fromTo(
//               item,
//               { xPercent: 400 },
//               {
//                 xPercent: -400,
//                 duration: 1.2,
//                 ease: "none",
//                 immediateRender: false,
//               },
//               time,
//             );
//         }

//         rawSequence.time(startTime);

//         seamlessLoop.to(rawSequence, {
//           time: loopTime,
//           duration: loopTime - startTime,
//           ease: "none",
//         });

//         return seamlessLoop;
//       }
//     }, galleryRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={galleryRef} className="gallery">
//       <ul className="cards">
//         {advantages.map((item, index) => (
//           <li key={index} className="card">
//             <div className="card-inner">
//               <div className="card-number">0{index + 1}</div>
//               <div className="card-content">
//                 <h3>{item.title}</h3>
//                 <div className="divider"></div>
//                 {item.points.map((point, i) => (
//                   <p key={i}>{point}</p>
//                 ))}
//               </div>
//               <div className="card-gradient"></div>
//             </div>
//           </li>
//         ))}
//       </ul>

//       <style jsx>{`
//         .gallery {
//           position: relative;
//           border:1px solid red;
//           width: 100%;
//           height: 100vh;
//           overflow: hidden;
//           background: linear-gradient(135deg, #000000 0%, #1a0a0a 100%);
//           color: white;
//         }

//         .cards {
//           position: absolute;
//           width: 420px;
//           height: 520px;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           padding: 0;
//           margin: 0;
//         }

//         .cards li {
//           list-style: none;
//           width: 420px;
//           height: 520px;
//           position: absolute;
//           top: 0;
//           left: 0;
//         }

//         .card-inner {
//           width: 100%;
//           height: 100%;
//           position: relative;
//           border-radius: 24px;
//           background: linear-gradient(
//             145deg,
//             rgba(30, 30, 30, 0.95) 0%,
//             rgba(15, 15, 15, 0.98) 100%
//           );
//           padding: 40px;
//           box-shadow:
//             0 30px 60px rgba(0, 0, 0, 0.8),
//             0 0 0 1px rgba(255, 255, 255, 0.1),
//             inset 0 1px 0 rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(255, 60, 60, 0.2);
//           overflow: hidden;
//           transition: all 0.3s ease;
//         }

//         .card-inner:hover {
//           transform: translateY(-5px);
//           box-shadow:
//             0 40px 80px rgba(255, 60, 60, 0.3),
//             0 0 0 1px rgba(255, 60, 60, 0.3),
//             inset 0 1px 0 rgba(255, 255, 255, 0.1);
//           border-color: rgba(255, 60, 60, 0.4);
//         }

//         .card-gradient {
//           position: absolute;
//           top: 0;
//           right: 0;
//           width: 200px;
//           height: 200px;
//           background: radial-gradient(
//             circle at top right,
//             rgba(255, 60, 60, 0.15) 0%,
//             transparent 70%
//           );
//           pointer-events: none;
//         }

//         .card-number {
//           position: absolute;
//           top: 25px;
//           right: 35px;
//           font-size: 80px;
//           font-weight: 900;
//           color: rgba(255, 60, 60, 0.08);
//           line-height: 1;
//           font-family: system-ui, -apple-system, sans-serif;
//           user-select: none;
//         }

//         .card-content {
//           position: relative;
//           z-index: 2;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//         }

//         .card-content h3 {
//           font-size: 26px;
//           font-weight: 800;
//           margin: 0 0 20px 0;
//           color: #ff3c3c;
//           line-height: 1.3;
//           letter-spacing: -0.5px;
//           text-shadow: 0 2px 10px rgba(255, 60, 60, 0.3);
//         }

//         .divider {
//           width: 60px;
//           height: 3px;
//           background: linear-gradient(90deg, #ff3c3c 0%, transparent 100%);
//           margin-bottom: 25px;
//           border-radius: 2px;
//         }

//         .card-content p {
//           font-size: 15px;
//           color: #d4d4d4;
//           line-height: 1.8;
//           margin: 0;
//           font-weight: 400;
//           letter-spacing: 0.2px;
//         }

//         @media (max-width: 768px) {
//           .cards {
//             width: 340px;
//             height: 480px;
//           }

//           .cards li {
//             width: 340px;
//             height: 480px;
//           }

//           .card-inner {
//             padding: 30px;
//             border-radius: 20px;
//           }

//           .card-number {
//             font-size: 60px;
//             top: 20px;
//             right: 25px;
//           }

//           .card-content h3 {
//             font-size: 22px;
//             margin-bottom: 15px;
//           }

//           .card-content p {
//             font-size: 14px;
//             line-height: 1.7;
//           }

//           .divider {
//             width: 50px;
//             margin-bottom: 20px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const advantages = [
//   {
//     title: "Design Iterations = Project Delay",
//     points: [
//       "All parking designs are done manually. Move a column? Redesign 20+ bays. Rejected by the authority? Entire design needs to be done again. Average project: 3-5 cycles of design revisions, 4-6 weeks of lost time, ₹37.5K-₹75K in design costs",
//     ],
//   },
//   {
//     title: "NBC Compliance is a Minefield",
//     points: [
//       "National Building Code has 10+ stringent parking standards (turning radius, aisle width, PH bays, ramp landings). Violate one, and the project gets rejected by the civic body. Most designs get rejected after submission, requiring costly redesigns.",
//     ],
//   },
//   {
//     title: "Lost Revenue Due to Inefficient Designs",
//     points: [
//       "Manual designs can only capture 85-90% of the maximum parking capacity. Dead space, inefficient circulation paths, and inefficient angles. This translates to 650 parking spots instead of 750, resulting in lost revenue of ₹50-₹300 lakh on a single project.",
//     ],
//   },
//   {
//     title: "Structural Coordination Chaos",
//     points: [
//       "Column locations, ramp locations, and lift cores do not coordinate well with parking designs. Emails back and forth. No what-if analysis. No single point of truth. This leads to either inefficient parking designs or inefficient structural designs or a 2-week delay.",
//     ],
//   },
//   {
//     title: "Compliance Errors With Legal Consequences",
//     points: [
//       "PH bays placed in tandem positions. Ramp entries too close to aisles. Missing landing distances. Municipal inspector flags issues after submission. Redesign, reschedule, reputation damage.",
//     ],
//   },
// ];

// export default function SeamlessGallery() {
//   const sectionRef = useRef(null);
//   const galleryRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const cards = gsap.utils.toArray(".problem-card");

//     // Kill any existing ScrollTriggers
//     ScrollTrigger.getAll().forEach(trigger => {
//       if (trigger.vars.trigger === sectionRef.current) {
//         trigger.kill();
//       }
//     });

//     let currentIndex = 0;

//     // Create the ScrollTrigger
//     const scrollTrigger = ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "+=3000",
//       pin: galleryRef.current,
//       scrub: 1,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         const newIndex = Math.min(
//           Math.floor(progress * advantages.length),
//           advantages.length - 1
//         );

//         if (newIndex !== currentIndex) {
//           currentIndex = newIndex;
//           updateCards(currentIndex);
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

//     // Initialize cards
//     updateCards(0);

//     // Button handlers
//     const handleNext = () => {
//       if (currentIndex < advantages.length - 1) {
//         currentIndex++;
//         updateCards(currentIndex);

//         const newProgress = (currentIndex + 0.5) / advantages.length;
//         gsap.to(window, {
//           scrollTo: {
//             y: scrollTrigger.start + (scrollTrigger.end - scrollTrigger.start) * newProgress,
//           },
//           duration: 0.5,
//           ease: "power2.inOut",
//         });
//       }
//     };

//     const handlePrev = () => {
//       if (currentIndex > 0) {
//         currentIndex--;
//         updateCards(currentIndex);

//         const newProgress = (currentIndex + 0.5) / advantages.length;
//         gsap.to(window, {
//           scrollTo: {
//             y: scrollTrigger.start + (scrollTrigger.end - scrollTrigger.start) * newProgress,
//           },
//           duration: 0.5,
//           ease: "power2.inOut",
//         });
//       }
//     };

//     const nextBtn = document.querySelector(".gallery-next");
//     const prevBtn = document.querySelector(".gallery-prev");

//     nextBtn?.addEventListener("click", handleNext);
//     prevBtn?.addEventListener("click", handlePrev);

//     return () => {
//       scrollTrigger.kill();
//       nextBtn?.removeEventListener("click", handleNext);
//       prevBtn?.removeEventListener("click", handlePrev);
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative w-full">
//       <div
//         ref={galleryRef}
//         className="gallery h-screen w-full flex items-center justify-center bg-black overflow-hidden relative"
//       >
//         <div className="cards-container relative w-full h-full flex items-center justify-center">
//           {advantages.map((advantage, index) => (
//             <div
//               key={index}
//               className="problem-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//               style={{ transformOrigin: "center center" }}
//             >
//               <div className="relative group">
//                 {/* Card border glow */}
//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>

//                 {/* Main card */}
//                 <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-3xl p-8 w-[450px] min-h-[550px] flex flex-col border border-gray-800">
//                   {/* Header with number badge */}
//                   <div className="flex items-start justify-between mb-6">
//                     <div className="flex-1">
//                       <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
//                         <span className="text-sm font-bold text-blue-400">
//                           Problem #{index + 1}
//                         </span>
//                       </div>
//                       <h3 className="text-2xl font-bold text-white leading-tight">
//                         {advantage.title}
//                       </h3>
//                     </div>

//                     {/* Large number in corner */}
//                     <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20">
//                       {index + 1}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1 mb-6">
//                     {advantage.points.map((point, pointIndex) => (
//                       <p
//                         key={pointIndex}
//                         className="text-gray-300 leading-relaxed text-base"
//                       >
//                         {point}
//                       </p>
//                     ))}
//                   </div>

//                   {/* Footer with animated indicator */}
//                   <div className="pt-6 border-t border-gray-800">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <div className="relative">
//                           <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//                           <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
//                         </div>
//                         <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
//                           Critical Issue
//                         </span>
//                       </div>
//                       <div className="flex gap-1">
//                         {[...Array(5)].map((_, i) => (
//                           <div
//                             key={i}
//                             className={`w-1.5 h-1.5 rounded-full ${
//                               i === index ? "bg-blue-500" : "bg-gray-700"
//                             }`}
//                           ></div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* <button className="gallery-prev absolute left-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
//           ← Prev
//         </button>
//         <button className="gallery-next absolute right-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
//           Next →
//         </button> */}
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const advantages = [
//   {
//     title: "Design Iterations = Project Delay",
//     points: [
//       "All parking designs are done manually. Move a column? Redesign 20+ bays. Rejected by the authority? Entire design needs to be done again. Average project: 3-5 cycles of design revisions, 4-6 weeks of lost time, ₹37.5K-₹75K in design costs",
//     ],
//   },
//   {
//     title: "NBC Compliance is a Minefield",
//     points: [
//       "National Building Code has 10+ stringent parking standards (turning radius, aisle width, PH bays, ramp landings). Violate one, and the project gets rejected by the civic body. Most designs get rejected after submission, requiring costly redesigns.",
//     ],
//   },
//   {
//     title: "Lost Revenue Due to Inefficient Designs",
//     points: [
//       "Manual designs can only capture 85-90% of the maximum parking capacity. Dead space, inefficient circulation paths, and inefficient angles. This translates to 650 parking spots instead of 750, resulting in lost revenue of ₹50-₹300 lakh on a single project.",
//     ],
//   },
//   {
//     title: "Structural Coordination Chaos",
//     points: [
//       "Column locations, ramp locations, and lift cores do not coordinate well with parking designs. Emails back and forth. No what-if analysis. No single point of truth. This leads to either inefficient parking designs or inefficient structural designs or a 2-week delay.",
//     ],
//   },
//   {
//     title: "Compliance Errors With Legal Consequences",
//     points: [
//       "PH bays placed in tandem positions. Ramp entries too close to aisles. Missing landing distances. Municipal inspector flags issues after submission. Redesign, reschedule, reputation damage.",
//     ],
//   },
// ];

// export default function SeamlessGallery() {
//   const sectionRef = useRef(null);
//   const galleryRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     if (isMobile) return; // Skip GSAP animations on mobile

//     gsap.registerPlugin(ScrollTrigger);

//     const cards = gsap.utils.toArray(".problem-card");

//     // Kill any existing ScrollTriggers
//     ScrollTrigger.getAll().forEach((trigger) => {
//       if (trigger.vars.trigger === sectionRef.current) {
//         trigger.kill();
//       }
//     });

//     let activeIndex = 0;

//     // Create the ScrollTrigger
//     const scrollTrigger = ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "+=3000",
//       pin: galleryRef.current,
//       scrub: 1,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         const newIndex = Math.min(
//           Math.floor(progress * advantages.length),
//           advantages.length - 1,
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

//     // Initialize cards
//     updateCards(0);

//     // Button handlers
//     const handleNext = () => {
//       if (activeIndex < advantages.length - 1) {
//         activeIndex++;
//         setCurrentIndex(activeIndex);
//         updateCards(activeIndex);

//         const newProgress = (activeIndex + 0.5) / advantages.length;
//         gsap.to(window, {
//           scrollTo: {
//             y:
//               scrollTrigger.start +
//               (scrollTrigger.end - scrollTrigger.start) * newProgress,
//           },
//           duration: 0.5,
//           ease: "power2.inOut",
//         });
//       }
//     };

//     const handlePrev = () => {
//       if (activeIndex > 0) {
//         activeIndex--;
//         setCurrentIndex(activeIndex);
//         updateCards(activeIndex);

//         const newProgress = (activeIndex + 0.5) / advantages.length;
//         gsap.to(window, {
//           scrollTo: {
//             y:
//               scrollTrigger.start +
//               (scrollTrigger.end - scrollTrigger.start) * newProgress,
//           },
//           duration: 0.5,
//           ease: "power2.inOut",
//         });
//       }
//     };

//     const nextBtn = document.querySelector(".gallery-next");
//     const prevBtn = document.querySelector(".gallery-prev");

//     nextBtn?.addEventListener("click", handleNext);
//     prevBtn?.addEventListener("click", handlePrev);

//     return () => {
//       scrollTrigger.kill();
//       nextBtn?.removeEventListener("click", handleNext);
//       prevBtn?.removeEventListener("click", handlePrev);
//     };
//   }, [isMobile]);

//   // Mobile handlers
//   const handleMobileNext = () => {
//     if (currentIndex < advantages.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handleMobilePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   // Mobile version
//   if (isMobile) {
//     return (
//       <section
//         className="relative w-full bg-black py-12 px-4"

//       >
//         <div className="max-w-lg mx-auto">
//           <h2 className="text-3xl font-bold text-white text-center mb-8">
//             Critical Problems
//           </h2>

//           {/* Mobile Card Slider */}
//           <div className="relative overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-out"
//               style={{
//                 transform: `translateX(-${currentIndex * 100}%)`,
//               }}
//             >
//               {advantages.map((advantage, index) => (
//                 <div key={index} className="w-full flex-shrink-0 px-2">
//                   <div className="relative group">
//                     {/* Card border glow */}
//                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-sm"></div>

//                     {/* Main card */}
//                     <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-2xl p-6 min-h-[450px] flex flex-col border border-gray-800">
//                       {/* Header with number badge */}
//                       <div className="flex items-start justify-between mb-4">
//                         <div className="flex-1">
//                           <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
//                             <span className="text-xs font-bold text-blue-400">
//                               Problem #{index + 1}
//                             </span>
//                           </div>
//                           <h3 className="text-xl font-bold text-white leading-tight">
//                             {advantage.title}
//                           </h3>
//                         </div>

//                         {/* Large number in corner */}
//                         <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20">
//                           {index + 1}
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="flex-1 mb-4">
//                         {advantage.points.map((point, pointIndex) => (
//                           <p
//                             key={pointIndex}
//                             className="text-gray-300 leading-relaxed text-sm"
//                           >
//                             {point}
//                           </p>
//                         ))}
//                       </div>

//                       {/* Footer with animated indicator */}
//                       <div className="pt-4 border-t border-gray-800">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-2">
//                             <div className="relative">
//                               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//                               <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
//                             </div>
//                             <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
//                               Critical Issue
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Dots Navigation */}
//           <div className="flex justify-center gap-2 mt-6">
//             {advantages.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? "bg-blue-500 w-8" : "bg-gray-600"
//                 }`}
//               />
//             ))}
//           </div>

//           {/* Mobile Buttons */}
//           <div className="flex justify-between mt-6 gap-4">
//             <button
//               onClick={handleMobilePrev}
//               disabled={currentIndex === 0}
//               className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
//             >
//               ← Prev
//             </button>
//             <button
//               onClick={handleMobileNext}
//               disabled={currentIndex === advantages.length - 1}
//               className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
//             >
//               Next →
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // Desktop version
//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full "

//     >
//       <div
//        style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
//         backgroundRepeat: "repeat",
//         backgroundSize: "120px 120px",
//         // border:'1px solid red',
//       }}
//         ref={galleryRef}
//         className="gallery h-screen w-full flex items-center justify-center bg-black overflow-hidden relative"
//       >
//         <div className="cards-container relative w-full h-full flex items-center justify-center">
//           {advantages.map((advantage, index) => (
//             <div
//               key={index}
//               className="problem-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//               style={{ transformOrigin: "center center" }}
//             >
//               <div className="relative group">
//                 {/* Card border glow */}
//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>

//                 {/* Main card */}
//                 <div
//                   className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-3xl p-8 w-[450px] min-h-[50px] flex flex-col border border-gray-800
//                   lg:w-[500px] xl:w-[550px]"
//                 >
//                   {/* Header with number badge */}
//                   <div className="flex items-start justify-between mb-6">
//                     <div className="flex-1">
//                       <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
//                         <span className="text-sm font-bold text-blue-400">
//                           Problem #{index + 1}
//                         </span>
//                       </div>
//                       <h3 className="text-2xl font-bold text-white leading-tight">
//                         {advantage.title}
//                       </h3>
//                     </div>

//                     {/* Large number in corner */}
//                     {/* <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20">
//                       {index + 1}
//                     </div> */}
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1 mb-6">
//                     {advantage.points.map((point, pointIndex) => (
//                       <p
//                         key={pointIndex}
//                         className="text-gray-300 leading-relaxed text-base"
//                       >
//                         {point}
//                       </p>
//                     ))}
//                   </div>

//                   {/* Footer with animated indicator */}
//                   <div className="pt-6 border-t border-gray-800">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <div className="relative">
//                           <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//                           <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
//                         </div>
//                         <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
//                           Critical Issue
//                         </span>
//                       </div>
//                       <div className="flex gap-1">
//                         {[...Array(5)].map((_, i) => (
//                           <div
//                             key={i}
//                             className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
//                               i === currentIndex
//                                 ? "bg-blue-500 scale-125"
//                                 : "bg-gray-700"
//                             }`}
//                           ></div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* <button className="gallery-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
//           <span className="hidden md:inline">← Prev</span>
//           <span className="md:hidden">←</span>
//         </button>
//         <button className="gallery-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
//           <span className="hidden md:inline">Next →</span>
//           <span className="md:hidden">→</span>
//         </button> */}
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const advantages = [
  {
    title: "Design Iterations = Project Delay",
    points: [
      "All parking designs are done manually. Move a column? Redesign 20+ bays. Rejected by the authority? Entire design needs to be done again. Average project: 3-5 cycles of design revisions, 4-6 weeks of lost time, ₹37.5K-₹75K in design costs",
    ],
    imageUrl:
      "https://img.sanishtech.com/u/0b07c0b9e24e7948d47d01d604fd2a67.png",
  },
  // https://miro.medium.com/v2/resize:fit:1400/0*WW5SWzwoE71tMlrQ.jpg
  {
    title: "NBC Compliance is a Minefield",
    points: [
      "National Building Code has 10+ stringent parking standards (turning radius, aisle width, PH bays, ramp landings). Violate one, and the project gets rejected by the civic body. Most designs get rejected after submission, requiring costly redesigns.",
    ],
    imageUrl:
      "https://img.sanishtech.com/u/4d805ac2d72397dc9f006b6ed870b9c8.png",
  },
  {
    title: "Lost Revenue Due to Inefficient Designs",
    points: [
      "Manual designs can only capture 85-90% of the maximum parking capacity. Dead space, inefficient circulation paths, and inefficient angles. This translates to 650 parking spots instead of 750, resulting in lost revenue of ₹50-₹300 lakh on a single project.",
    ],
    imageUrl:
      "https://img.sanishtech.com/u/df5b41ef4b9ea6dc5395914c80fc8b61.png",
  },
  {
    title: "Structural Coordination Chaos",
    points: [
      "Column locations, ramp locations, and lift cores do not coordinate well with parking designs. Emails back and forth. No what-if analysis. No single point of truth. This leads to either inefficient parking designs or inefficient structural designs or a 2-week delay.",
    ],
    imageUrl:
      "https://img.sanishtech.com/u/c33db8e58cdb93cbe5cbc4ed8b6c9fc7.png",
  },
  {
    title: "Compliance Errors With Legal Consequences",
    points: [
      "PH bays placed in tandem positions. Ramp entries too close to aisles. Missing landing distances. Municipal inspector flags issues after submission. Redesign, reschedule, reputation damage.",
    ],
    imageUrl:
      "https://img.sanishtech.com/u/087d132851e64f8115e85dbe21b02d2c.png",
  },
];

export default function SeamlessGallery() {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    const cards = gsap.utils.toArray(".problem-card");

    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === sectionRef.current) {
        trigger.kill();
      }
    });

    let activeIndex = 0;

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=3000",
      pin: galleryRef.current,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.min(
          Math.floor(progress * advantages.length),
          advantages.length - 1,
        );

        if (newIndex !== activeIndex) {
          activeIndex = newIndex;
          setCurrentIndex(newIndex);
          updateCards(newIndex);
        }
      },
    });

    function updateCards(activeIndex) {
      cards.forEach((card, index) => {
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

    updateCards(0);

    const handleNext = () => {
      if (activeIndex < advantages.length - 1) {
        activeIndex++;
        setCurrentIndex(activeIndex);
        updateCards(activeIndex);

        const newProgress = (activeIndex + 0.5) / advantages.length;
        gsap.to(window, {
          scrollTo: {
            y:
              scrollTrigger.start +
              (scrollTrigger.end - scrollTrigger.start) * newProgress,
          },
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    };

    const handlePrev = () => {
      if (activeIndex > 0) {
        activeIndex--;
        setCurrentIndex(activeIndex);
        updateCards(activeIndex);

        const newProgress = (activeIndex + 0.5) / advantages.length;
        gsap.to(window, {
          scrollTo: {
            y:
              scrollTrigger.start +
              (scrollTrigger.end - scrollTrigger.start) * newProgress,
          },
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    };

    const nextBtn = document.querySelector(".gallery-next");
    const prevBtn = document.querySelector(".gallery-prev");

    nextBtn?.addEventListener("click", handleNext);
    prevBtn?.addEventListener("click", handlePrev);

    return () => {
      scrollTrigger.kill();
      nextBtn?.removeEventListener("click", handleNext);
      prevBtn?.removeEventListener("click", handlePrev);
    };
  }, [isMobile]);

  const handleMobileNext = () => {
    if (currentIndex < advantages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleMobilePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Mobile version
  if (isMobile) {
    return (
      <section className="relative w-full bg-black py-12 px-4">
        <div
          className="max-w-lg mx-auto"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "120px 120px",
          }}
        >
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className=" text-3xl md:text-4xl font-bold text-white  mb-3">
              The Parking Design Crisis
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Parking design is costing you time, money, and regulatory
              headaches.
            </p>
          </div>

          {/* Mobile Card Slider */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {advantages.map((advantage, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="relative group">
                    {/* bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 */}
                    <div className="absolute inset-0 rounded-2xl  opacity-75 blur-sm"></div>

                    <div className="relative  rounded-2xl p-6 min-h-[450px] flex flex-col border border-gray-800">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                            <span className="text-xs font-bold text-blue-400">
                              Problem #{index + 1}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white leading-tight">
                            {advantage.title}
                          </h3>
                        </div>

                        {/* <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20">
                          {index + 1}
                        </div> */}
                      </div>

                      <div className="flex-1 mb-4">
                        {advantage.points.map((point, pointIndex) => (
                          <p
                            key={pointIndex}
                            className="text-gray-300 leading-relaxed text-sm"
                          >
                            {point}
                          </p>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-gray-800">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="relative">
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                              <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                            </div>
                            <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                              Critical Issue
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
//              <div key={index} className="w-full flex-shrink-0 px-2">
//   {/* <div className="relative rounded-2xl overflow-hidden border border-gray-800 h-[350px]"> */}
// <div className="relative h-[350px] rounded-2xl overflow-hidden border border-gray-800">
//     {/* Background Image */}
//  <img
//     src={advantage.imageUrl}
//     alt="background"
//     className="absolute inset-0 w-full h-full object-cover z-0"
//   />

//     {/* Dark overlay for readability */}
// <div className="absolute inset-0 bg-black/60 z-10"></div>

//     {/* Content */}
//     <div className="relative z-10 p-6 flex flex-col h-full text-white">

//       <div className="mb-4">
//         <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30">
//           <span className="text-xs font-bold text-blue-400">
//             Problem #{index + 1}
//           </span>
//         </div>

//         <h3 className="text-xl font-bold leading-tight">
//           {advantage.title}
//         </h3>
//       </div>

//       <div className="flex-1 mb-4 overflow-hidden">
//         {advantage.points.map((point, pointIndex) => (
//           <p
//             key={pointIndex}
//             className="text-gray-200 leading-relaxed text-sm"
//           >
//             {point}
//           </p>
//         ))}
//       </div>

//       <div className="pt-4 border-t border-white/20">
//         <div className="flex items-center gap-2">
//           <div className="relative">
//             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//             <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
//           </div>
//           <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
//             Critical Issue
//           </span>
//         </div>
//       </div>

//     </div>
//   </div>
// </div>

              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {advantages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-500 w-8" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-between mt-6 gap-4">
            <button
              onClick={handleMobilePrev}
              disabled={currentIndex === 0}
              className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              ← Prev
            </button>
            <button
              onClick={handleMobileNext}
              disabled={currentIndex === advantages.length - 1}
              className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Next →
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Desktop version
  return (
    <section ref={sectionRef} className="relative w-full">
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "120px 120px",
        }}
        ref={galleryRef}
        className="gallery h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden relative"
      >
        {/* Header Section */}
        <div className="absolute top-16 md:top-20 left-0 right-0 z-10 text-center px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            The Parking Design Crisis
          </h2>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            Parking design is costing you time, money, and regulatory headaches.
          </p>
        </div>

        {/* Cards Container */}
        <div className="cards-container relative w-full h-full flex items-center justify-center mt-32 md:mt-40">
          {advantages.map((advantage, index) => (
            // <div
            //   key={index}
            //   className="problem-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            //   style={{ transformOrigin: "center center" }}
            // >
            //   <div className="relative group">
            //     {/* bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 */}
            //     <div className="absolute inset-0 rounded-3xl  opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>

            //     <div className="relative rounded-3xl p-8 w-[450px] min-h-[50px] flex flex-col border border-[#0092b8] lg:w-[500px] xl:w-[550px]">

            //       <div className="flex items-start justify-between mb-6">
            //         <div className="flex-1">
            //           <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
            //             <span className="text-sm font-bold text-blue-400">
            //               Problem #{index + 1}
            //             </span>
            //           </div>
            //           <h3 className="text-2xl font-bold text-white leading-tight">
            //             {advantage.title}
            //           </h3>
            //         </div>
            //       </div>

            //       <div className="flex-1 mb-6">
            //         {advantage.points.map((point, pointIndex) => (
            //           <p
            //             key={pointIndex}
            //             className="text-gray-300 leading-relaxed text-base"
            //           >
            //             {point}
            //           </p>
            //         ))}
            //       </div>

            //       <div className="pt-6 border-t border-gray-800">
            //         <div className="flex items-center justify-between">
            //           <div className="flex items-center gap-2">
            //             <div className="relative">
            //               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            //               <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            //             </div>
            //             <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
            //               Critical Issue
            //             </span>
            //           </div>
            //           <div className="flex gap-1">
            //             {[...Array(5)].map((_, i) => (
            //               <div
            //                 key={i}
            //                 className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            //                   i === currentIndex
            //                     ? "bg-blue-500 scale-125"
            //                     : "bg-gray-700"
            //                 }`}
            //               ></div>
            //             ))}
            //           </div>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>

            <div
              key={index}
              className="problem-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transformOrigin: "center center" }}
            >
              <div className="relative group w-[450px] lg:w-[500px] xl:w-[550px] min-h-[50px] rounded-2xl overflow-hidden border border-[#0092b8]">
                {/* 1️⃣ Background Image (Inside Card Only) */}
                <div
                  className="absolute inset-0 bg-cover bg-center  scale-105"
                  style={{ backgroundImage: `url(${advantage.imageUrl})` }}
                ></div>

                {/* 2️⃣ Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* 3️⃣ Content */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                        <span className="text-sm font-bold text-blue-400">
                          Problem #{index + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {advantage.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1 mb-6">
                    {advantage.points.map((point, pointIndex) => (
                      <p
                        key={pointIndex}
                        className="text-gray-200 leading-relaxed text-base"
                      >
                        {point}
                      </p>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                          Critical Issue
                        </span>
                      </div>

                      <div className="flex gap-1">
                        {[...Array(advantages.length)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              i === currentIndex
                                ? "bg-blue-400 scale-125"
                                : "bg-gray-600"
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
  );
}
