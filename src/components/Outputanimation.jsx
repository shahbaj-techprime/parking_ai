// // import React from 'react'

// // export default function Outputanimation() {
// //   return (
// //     <div className='h-[200px] w-full text-white bg-black '>Outputanimation</div>
// //   )
// // }

// "use client";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register GSAP plugins
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function ScrollPage() {
//   const containerRef = useRef(null);
//   const uploadSectionRef = useRef(null);
//   const aiSectionRef = useRef(null);
//   const parkingSectionRef = useRef(null);
//   const parkingGridRef = useRef(null);

//   const [uploadDone, setUploadDone] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const uploadBtnRef = useRef(null);
//   const tickRef = useRef(null);

//   // --- Upload simulation ---
//   const handleUpload = () => {
//     if (uploading || uploadDone) return;
//     setUploading(true);
//     let p = 0;
//     const iv = setInterval(() => {
//       p += Math.random() * 12 + 4;
//       if (p >= 100) {
//         p = 100;
//         clearInterval(iv);
//         setProgress(100);
//         setTimeout(() => {
//           setUploading(false);
//           setUploadDone(true);
//         }, 400);
//       } else {
//         setProgress(Math.floor(p));
//       }
//     }, 120);
//   };

//   // --- GSAP scroll animations ---
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // AI section: fade in when entering
//       gsap.fromTo(
//         aiSectionRef.current,
//         { opacity: 0, y: 60 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: aiSectionRef.current,
//             start: "top 75%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       );

//       // Parking section: entire section slides up together (all-at-once)
//       gsap.fromTo(
//         parkingSectionRef.current,
//         { opacity: 0, y: 100, scale: 0.95 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1.1,
//           ease: "expo.out",
//           scrollTrigger: {
//             trigger: parkingSectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       );

//       // Individual car stagger inside parking grid
//       gsap.fromTo(
//         ".car-item",
//         { opacity: 0, scale: 0.5, y: 30 },
//         {
//           opacity: 1,
//           scale: 1,
//           y: 0,
//           duration: 0.6,
//           stagger: 0.08,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: parkingGridRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="bg-[#0a0a0f] min-h-screen font-sans text-white"
//       style={{ fontFamily: "'DM Sans', sans-serif" }}
//     >
//       {/* Google Font */}
//       <style>{`

//         .upload-card {
//           background: rgba(255,255,255,0.03);
//           border: 1.5px solid rgba(255,255,255,0.08);
//           border-radius: 28px;
//           backdrop-filter: blur(24px);
//           box-shadow: 0 0 80px rgba(59,130,246,0.08), 0 24px 64px rgba(0,0,0,0.6);
//           transition: border-color 0.3s;
//         }
//         .upload-card:hover { border-color: rgba(59,130,246,0.3); }

//         .upload-btn {
//           background: linear-gradient(135deg, #3b82f6, #6366f1);
//           border: none;
//           border-radius: 14px;
//           color: white;
//           font-weight: 600;
//           font-size: 15px;
//           letter-spacing: 0.5px;
//           cursor: pointer;
//           transition: opacity 0.2s, transform 0.2s;
//           box-shadow: 0 4px 24px rgba(99,102,241,0.4);
//         }
//         .upload-btn:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
//         .upload-btn:disabled { opacity: 0.5; cursor: default; }

//         .progress-bar {
//           height: 4px;
//           background: rgba(255,255,255,0.08);
//           border-radius: 99px;
//           overflow: hidden;
//         }
//         .progress-fill {
//           height: 100%;
//           border-radius: 99px;
//           background: linear-gradient(90deg, #3b82f6, #818cf8);
//           transition: width 0.15s ease;
//         }

//         .done-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: rgba(34,197,94,0.12);
//           border: 1px solid rgba(34,197,94,0.3);
//           color: #4ade80;
//           border-radius: 99px;
//           padding: 6px 16px;
//           font-size: 14px;
//           font-weight: 500;
//         }

//         .ai-section {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-height: 100vh;
//           padding: 80px 24px;
//         }
//         .ai-glow {
//           border-radius: 32px;
//           box-shadow: 0 0 120px rgba(59,130,246,0.25), 0 40px 80px rgba(0,0,0,0.5);
//           overflow: hidden;
//         }

//         .parking-section {
//           min-height: 100vh;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           padding: 80px 24px;
//         }
//         .parking-bg {
//           background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
//           border-radius: 32px;
//           padding: 48px;
//           position: relative;
//           overflow: hidden;
//           width: 100%;
//           max-width: 860px;
//           box-shadow: 0 0 100px rgba(59,130,246,0.15), 0 40px 80px rgba(0,0,0,0.6);
//           border: 1px solid rgba(59,130,246,0.15);
//         }
//         .parking-bg::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 60%);
//           pointer-events: none;
//         }

//         .parking-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 16px;
//           position: relative;
//           z-index: 1;
//         }

//         .parking-slot {
//           aspect-ratio: 0.55;
//           border: 2px dashed rgba(255,255,255,0.12);
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(255,255,255,0.03);
//           position: relative;
//         }
//         .parking-slot.occupied {
//           border-color: transparent;
//           background: transparent;
//         }

//         .car-item img {
//           width: 80%;
//           height: 80%;
//           object-fit: contain;
//           filter: drop-shadow(0 8px 16px rgba(0,0,0,0.5));
//         }

//         .section-label {
//           font-family: 'Space Mono', monospace;
//           font-size: 11px;
//           letter-spacing: 3px;
//           text-transform: uppercase;
//           color: rgba(99,102,241,0.8);
//           margin-bottom: 12px;
//         }
//         .section-title {
//           font-size: clamp(28px, 4vw, 44px);
//           font-weight: 700;
//           letter-spacing: -1px;
//           color: #fff;
//           margin-bottom: 8px;
//         }
//         .section-sub {
//           font-size: 16px;
//           color: rgba(255,255,255,0.45);
//           font-weight: 400;
//         }

//         .upload-file-icon {
//           width: 80px;
//           height: 80px;
//           background: rgba(59,130,246,0.1);
//           border: 1.5px solid rgba(59,130,246,0.25);
//           border-radius: 18px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0 auto 16px;
//         }

//         @keyframes pulse-ring {
//           0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
//           70% { transform: scale(1); box-shadow: 0 0 0 12px rgba(59,130,246,0); }
//           100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0); }
//         }
//         .pulse { animation: pulse-ring 2s infinite; }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }
//         .float { animation: float 3s ease-in-out infinite; }
//       `}</style>

//       {/* ─── SECTION 1: UPLOAD ─── */}
//       <section
//         ref={uploadSectionRef}
//         className="min-h-screen flex flex-col items-center justify-center px-6"
//         style={{ padding: "80px 24px" }}
//       >
//         <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
//           <p className="section-label">Step 01</p>
//           <h2 className="section-title">Upload Your File</h2>
//           <p className="section-sub" style={{ marginBottom: 40 }}>
//             Drag &amp; drop or click to get started
//           </p>

//           <div className="upload-card" style={{ padding: "40px 36px" }}>
//             {/* File icon */}
//             <div
//               className={`upload-file-icon ${!uploadDone ? "float" : ""}`}
//               style={{ transition: "all 0.3s" }}
//             >
//               {uploadDone ? (
//                 <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
//                   <path
//                     d="M20 6L9 17l-5-5"
//                     stroke="#4ade80"
//                     strokeWidth="2.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               ) : (
//                 <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
//                   <path
//                     d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
//                     stroke="#3b82f6"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                   <polyline
//                     points="17 8 12 3 7 8"
//                     stroke="#3b82f6"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                   <line
//                     x1="12"
//                     y1="3"
//                     x2="12"
//                     y2="15"
//                     stroke="#3b82f6"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               )}
//             </div>

//             {/* Filename */}
//             <p
//               style={{
//                 color: "rgba(255,255,255,0.7)",
//                 fontWeight: 500,
//                 fontSize: 15,
//                 marginBottom: 6,
//               }}
//             >
//               TheCrew.mp4
//             </p>
//             <p
//               style={{
//                 color: "rgba(255,255,255,0.3)",
//                 fontSize: 13,
//                 marginBottom: 28,
//               }}
//             >
//               MP4 · 248 MB
//             </p>

//             {/* Progress bar */}
//             {uploading && (
//               <div style={{ marginBottom: 20 }}>
//                 <div className="progress-bar">
//                   <div
//                     className="progress-fill"
//                     style={{ width: `${progress}%` }}
//                   />
//                 </div>
//                 <p
//                   style={{
//                     fontSize: 12,
//                     color: "rgba(255,255,255,0.4)",
//                     marginTop: 8,
//                     fontFamily: "'Space Mono', monospace",
//                   }}
//                 >
//                   {progress}%
//                 </p>
//               </div>
//             )}

//             {/* Done badge */}
//             {uploadDone && (
//               <div style={{ marginBottom: 24 }}>
//                 <span className="done-badge">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//                     <path
//                       d="M20 6L9 17l-5-5"
//                       stroke="#4ade80"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                   Upload Complete
//                 </span>
//                 <p
//                   style={{
//                     color: "rgba(255,255,255,0.3)",
//                     fontSize: 13,
//                     marginTop: 12,
//                   }}
//                 >
//                   Scroll down to see AI processing →
//                 </p>
//               </div>
//             )}

//             {/* Button */}
//             {!uploadDone && (
//               <button
//                 ref={uploadBtnRef}
//                 onClick={handleUpload}
//                 disabled={uploading}
//                 className="upload-btn pulse"
//                 style={{ width: "100%", padding: "14px 0" }}
//               >
//                 {uploading ? `Uploading… ${progress}%` : "Upload"}
//               </button>
//             )}
//           </div>

//           {/* Scroll hint */}
//           {uploadDone && (
//             <div
//               style={{
//                 marginTop: 32,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: 8,
//                 color: "rgba(255,255,255,0.2)",
//                 animation: "float 2s ease-in-out infinite",
//               }}
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M12 5v14M5 12l7 7 7-7"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                 />
//               </svg>
//               <span
//                 style={{
//                   fontSize: 12,
//                   fontFamily: "'Space Mono', monospace",
//                   letterSpacing: 2,
//                 }}
//               >
//                 SCROLL
//               </span>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ─── SECTION 2: AI ANIMATION ─── */}
//       <section ref={aiSectionRef} className="ai-section" style={{ opacity: 0 }}>
//         <div style={{ maxWidth: 700, width: "100%", textAlign: "center" }}>
//           <p className="section-label">Step 02</p>
//           <h2 className="section-title">AI Processing</h2>
//           <p className="section-sub" style={{ marginBottom: 40 }}>
//             Our model is analyzing your content in real-time
//           </p>
//           <div className="ai-glow" style={{ display: "inline-block" }}>
//             <img
//               src="/gifs/ai-animation.gif"
//               alt="AI Animation"
//               style={{ maxWidth: "100%", width: 480, display: "block" }}
//               onError={(e) => {
//                 // Fallback placeholder if gif not found
//                 e.target.style.display = "none";
//                 e.target.nextSibling.style.display = "flex";
//               }}
//             />
//             {/* Fallback visual */}
//             <div
//               style={{
//                 display: "none",
//                 width: 480,
//                 height: 360,
//                 background: "linear-gradient(135deg, #0d1b4b, #1a2980)",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexDirection: "column",
//                 gap: 20,
//                 maxWidth: "100%",
//               }}
//             >
//               <div
//                 style={{
//                   width: 100,
//                   height: 100,
//                   border: "3px solid transparent",
//                   borderTopColor: "#3b82f6",
//                   borderRightColor: "#6366f1",
//                   borderRadius: "50%",
//                   animation: "spin 1s linear infinite",
//                 }}
//               />
//               <span
//                 style={{
//                   color: "#3b82f6",
//                   fontSize: 32,
//                   fontWeight: 700,
//                   letterSpacing: 4,
//                 }}
//               >
//                 AI
//               </span>
//               <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── SECTION 3: PARKING LAYOUT ─── */}
//       <section
//         ref={parkingSectionRef}
//         className="parking-section"
//         style={{ opacity: 0 }}
//       >
//         <div style={{ maxWidth: 900, width: "100%", textAlign: "center" }}>
//           <p className="section-label">Step 03</p>
//           <h2 className="section-title">Parking Layout</h2>
//           <p className="section-sub" style={{ marginBottom: 40 }}>
//             Smart slot detection — all spaces mapped at once
//           </p>

//           <div className="parking-bg">
//             {/* Top lane label */}
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginBottom: 12,
//                 padding: "0 4px",
//               }}
//             >
//               <span
//                 style={{
//                   fontFamily: "'Space Mono', monospace",
//                   fontSize: 10,
//                   color: "rgba(255,255,255,0.25)",
//                   letterSpacing: 2,
//                 }}
//               >
//                 ROW A
//               </span>
//               <span
//                 style={{
//                   fontFamily: "'Space Mono', monospace",
//                   fontSize: 10,
//                   color: "rgba(59,130,246,0.5)",
//                   letterSpacing: 2,
//                 }}
//               >
//                 6 / 8 OCCUPIED
//               </span>
//             </div>

//             <div ref={parkingGridRef} className="parking-grid">
//               {/* Row A */}
//               {/* Slot 1 – empty */}
//               <div className="parking-slot car-item">
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   style={{ opacity: 0.2 }}
//                 >
//                   <rect
//                     x="4"
//                     y="4"
//                     width="16"
//                     height="16"
//                     rx="2"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeDasharray="3 2"
//                   />
//                 </svg>
//               </div>
//               {/* Slot 2 – yellow */}
//               <div className="parking-slot occupied car-item">
//                 <img
//                   src="/gifs/parking-layout.gif"
//                   alt="Yellow Car"
//                   style={{
//                     width: "85%",
//                     objectFit: "contain",
//                     filter: "drop-shadow(0 6px 12px rgba(250,204,21,0.4))",
//                   }}
//                   onError={(e) => {
//                     e.target.style.display = "none";
//                     e.target.nextSibling.style.display = "block";
//                   }}
//                 />
//                 <div
//                   style={{
//                     display: "none",
//                     width: "72%",
//                     aspectRatio: "0.55",
//                     background: "#facc15",
//                     borderRadius: 8,
//                     boxShadow: "0 4px 16px rgba(250,204,21,0.4)",
//                   }}
//                 />
//               </div>
//               {/* Slot 3 – empty */}
//               <div className="parking-slot car-item">
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   style={{ opacity: 0.2 }}
//                 >
//                   <rect
//                     x="4"
//                     y="4"
//                     width="16"
//                     height="16"
//                     rx="2"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeDasharray="3 2"
//                   />
//                 </svg>
//               </div>
//               {/* Slot 4 – purple */}
//               <div className="parking-slot occupied car-item">
//                 <div
//                   style={{
//                     width: "72%",
//                     aspectRatio: "0.55",
//                     background: "linear-gradient(160deg, #a855f7, #7c3aed)",
//                     borderRadius: 10,
//                     boxShadow: "0 4px 20px rgba(168,85,247,0.5)",
//                     position: "relative",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "15%",
//                       left: "10%",
//                       right: "10%",
//                       height: "28%",
//                       background: "rgba(0,0,0,0.35)",
//                       borderRadius: 4,
//                     }}
//                   />
//                   <div
//                     style={{
//                       position: "absolute",
//                       bottom: "12%",
//                       left: "10%",
//                       right: "10%",
//                       height: "22%",
//                       background: "rgba(0,0,0,0.25)",
//                       borderRadius: 4,
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Row B */}
//               {/* Slot 5 – white */}
//               <div className="parking-slot occupied car-item">
//                 <div
//                   style={{
//                     width: "72%",
//                     aspectRatio: "0.55",
//                     background: "linear-gradient(160deg, #e2e8f0, #cbd5e1)",
//                     borderRadius: 10,
//                     boxShadow: "0 4px 20px rgba(203,213,225,0.3)",
//                     position: "relative",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "15%",
//                       left: "10%",
//                       right: "10%",
//                       height: "28%",
//                       background: "rgba(100,150,200,0.4)",
//                       borderRadius: 4,
//                     }}
//                   />
//                 </div>
//               </div>
//               {/* Slot 6 – red */}
//               <div className="parking-slot occupied car-item">
//                 <div
//                   style={{
//                     width: "72%",
//                     aspectRatio: "0.55",
//                     background: "linear-gradient(160deg, #ef4444, #b91c1c)",
//                     borderRadius: 10,
//                     boxShadow: "0 4px 20px rgba(239,68,68,0.5)",
//                     position: "relative",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "15%",
//                       left: "10%",
//                       right: "10%",
//                       height: "28%",
//                       background: "rgba(0,0,0,0.3)",
//                       borderRadius: 4,
//                     }}
//                   />
//                   <div
//                     style={{
//                       position: "absolute",
//                       bottom: "12%",
//                       left: "10%",
//                       right: "10%",
//                       height: "22%",
//                       background: "rgba(0,0,0,0.2)",
//                       borderRadius: 4,
//                     }}
//                   />
//                 </div>
//               </div>
//               {/* Slot 7 – sports white */}
//               <div className="parking-slot occupied car-item">
//                 <div
//                   style={{
//                     width: "72%",
//                     aspectRatio: "0.55",
//                     background: "linear-gradient(160deg, #f8fafc, #e2e8f0)",
//                     borderRadius: 14,
//                     boxShadow: "0 4px 20px rgba(248,250,252,0.3)",
//                     position: "relative",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "20%",
//                       left: "8%",
//                       right: "8%",
//                       height: "30%",
//                       background: "rgba(120,100,80,0.5)",
//                       borderRadius: 4,
//                     }}
//                   />
//                 </div>
//               </div>
//               {/* Slot 8 – teal */}
//               <div className="parking-slot occupied car-item">
//                 <div
//                   style={{
//                     width: "72%",
//                     aspectRatio: "0.55",
//                     background: "linear-gradient(160deg, #14b8a6, #0d9488)",
//                     borderRadius: 10,
//                     boxShadow: "0 4px 20px rgba(20,184,166,0.5)",
//                     position: "relative",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "15%",
//                       left: "10%",
//                       right: "10%",
//                       height: "28%",
//                       background: "rgba(0,0,0,0.3)",
//                       borderRadius: 4,
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Legend */}
//             <div
//               style={{
//                 display: "flex",
//                 gap: 24,
//                 justifyContent: "center",
//                 marginTop: 28,
//                 flexWrap: "wrap",
//               }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                 <div
//                   style={{
//                     width: 10,
//                     height: 10,
//                     borderRadius: 3,
//                     background: "#3b82f6",
//                   }}
//                 />
//                 <span
//                   style={{
//                     fontSize: 12,
//                     color: "rgba(255,255,255,0.4)",
//                     fontFamily: "'Space Mono', monospace",
//                   }}
//                 >
//                   Occupied
//                 </span>
//               </div>
//               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                 <div
//                   style={{
//                     width: 10,
//                     height: 10,
//                     borderRadius: 3,
//                     border: "1.5px dashed rgba(255,255,255,0.25)",
//                   }}
//                 />
//                 <span
//                   style={{
//                     fontSize: 12,
//                     color: "rgba(255,255,255,0.4)",
//                     fontFamily: "'Space Mono', monospace",
//                   }}
//                 >
//                   Available
//                 </span>
//               </div>
//               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                 <div
//                   style={{
//                     width: 10,
//                     height: 10,
//                     borderRadius: 99,
//                     background: "#4ade80",
//                   }}
//                 />
//                 <span
//                   style={{
//                     fontSize: 12,
//                     color: "rgba(255,255,255,0.4)",
//                     fontFamily: "'Space Mono', monospace",
//                   }}
//                 >
//                   AI Detected
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer spacer */}
//       <div style={{ height: 120 }} />
//     </div>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function HorizontalScrollPage() {
//   const trackRef = useRef(null);
//   const containerRef = useRef(null);

//   const [uploadDone, setUploadDone] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [activeStep, setActiveStep] = useState(0);

//   // Convert vertical scroll to horizontal movement
//   useEffect(() => {
//     const container = containerRef.current;
//     const track = trackRef.current;
//     if (!container || !track) return;

//     const onScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll = container.scrollHeight - window.innerHeight;
//       const pct = Math.min(scrollY / maxScroll, 1);
//       const maxX = track.scrollWidth - window.innerWidth;
//       track.style.transform = `translateX(-${pct * maxX}px)`;

//       // Update active step based on scroll progress
//       if (pct < 0.33) setActiveStep(0);
//       else if (pct < 0.66) setActiveStep(1);
//       else setActiveStep(2);
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleUpload = () => {
//     if (uploading || uploadDone) return;
//     setUploading(true);
//     let p = 0;
//     const iv = setInterval(() => {
//       p += Math.random() * 12 + 4;
//       if (p >= 100) {
//         p = 100;
//         clearInterval(iv);
//         setProgress(100);
//         setTimeout(() => {
//           setUploading(false);
//           setUploadDone(true);
//         }, 400);
//       } else {
//         setProgress(Math.floor(p));
//       }
//     }, 120);
//   };

//   const parkingSlots = [
//     { color: null }, // empty
//     { color: "#facc15", shadow: "rgba(250,204,21,0.5)" },
//     { color: null }, // empty
//     { color: "linear-gradient(160deg,#a855f7,#7c3aed)", shadow: "rgba(168,85,247,0.5)" },
//     { color: "linear-gradient(160deg,#e2e8f0,#cbd5e1)", shadow: "rgba(200,213,225,0.25)" },
//     { color: "linear-gradient(160deg,#ef4444,#b91c1c)", shadow: "rgba(239,68,68,0.5)" },
//     { color: "linear-gradient(160deg,#f8fafc,#e2e8f0)", shadow: "rgba(248,250,252,0.2)" },
//     { color: "linear-gradient(160deg,#14b8a6,#0d9488)", shadow: "rgba(20,184,166,0.5)" },
//   ];

//   return (
//     <>
//       <style>{`

//         .scroll-container {
//           height: 400vh;
//           position: relative;
//         }

//         .sticky-viewport {
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           overflow: hidden;
//         }

//         /* Animated grid background */
//         .grid-bg {
//           position: fixed;
//           inset: 0;
//           background-image:
//             linear-gradient(rgba(0,180,255,0.04) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,180,255,0.04) 1px, transparent 1px);
//           background-size: 48px 48px;
//           z-index: 0;
//           pointer-events: none;
//         }

//         /* Ambient orbs */
//         .orb {
//           position: fixed;
//           border-radius: 50%;
//           filter: blur(120px);
//           pointer-events: none;
//           z-index: 0;
//         }
//         .orb-1 { width: 600px; height: 600px; background: rgba(0,100,255,0.12); top: -200px; left: -200px; }
//         .orb-2 { width: 400px; height: 400px; background: rgba(0,200,255,0.08); bottom: -100px; right: 30%; }
//         .orb-3 { width: 300px; height: 300px; background: rgba(80,0,200,0.1); top: 20%; right: 10%; }

//         /* Horizontal track */
//         .h-track {
//           display: flex;
//           align-items: center;
//           width: max-content;
//           height: 100vh;
//           padding: 0 10vw;
//           gap: 0;
//           transition: transform 0.05s linear;
//           position: relative;
//           z-index: 1;
//         }

//         /* PANEL */
//         .panel {
//           width: 100vw;
//           height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//           position: relative;
//         }

//         /* Connector line between panels */
//         .connector {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 180px;
//           flex-shrink: 0;
//           position: relative;
//           z-index: 2;
//         }
//         .connector-line {
//           width: 100%;
//           height: 2px;
//           background: linear-gradient(90deg, rgba(0,180,255,0.2), rgba(0,180,255,0.7), rgba(0,180,255,0.2));
//           position: relative;
//         }
//         .connector-line::before,
//         .connector-line::after {
//           content: '';
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           background: #00b4ff;
//           box-shadow: 0 0 12px #00b4ff;
//         }
//         .connector-line::before { left: 20px; }
//         .connector-line::after { right: 20px; }
//         .connector-dot-mid {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           background: rgba(0,180,255,0.4);
//           border: 1px solid rgba(0,180,255,0.6);
//           animation: dotPulse 2s ease-in-out infinite;
//         }
//         @keyframes dotPulse {
//           0%,100% { opacity: 0.4; transform: translate(-50%,-50%) scale(1); }
//           50% { opacity: 1; transform: translate(-50%,-50%) scale(1.4); }
//         }

//         /* Moving data particles on connector */
//         .data-particle {
//           position: absolute;
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: #00e5ff;
//           box-shadow: 0 0 8px #00e5ff;
//           top: 50%;
//           transform: translateY(-50%);
//           animation: travel 2s linear infinite;
//         }
//         .data-particle:nth-child(2) { animation-delay: 0.7s; }
//         .data-particle:nth-child(3) { animation-delay: 1.4s; }
//         @keyframes travel {
//           from { left: 0%; opacity: 0; }
//           10% { opacity: 1; }
//           90% { opacity: 1; }
//           to { left: 100%; opacity: 0; }
//         }

//         /* Step label */
//         .step-badge {
//           font-family: 'IBM Plex Mono', monospace;
//           font-size: 11px;
//           letter-spacing: 3px;
//           color: rgba(0,180,255,0.7);
//           text-transform: uppercase;
//           margin-bottom: 10px;
//         }

//         /* ── SECTION 1: UPLOAD ── */
//         .upload-card {
//           background: rgba(255,255,255,0.02);
//           border: 1px solid rgba(0,180,255,0.2);
//           border-radius: 24px;
//           padding: 44px 40px;
//           width: 420px;
//           backdrop-filter: blur(20px);
//           box-shadow: 0 0 60px rgba(0,100,255,0.12), inset 0 1px 0 rgba(255,255,255,0.06);
//           transition: border-color 0.3s;
//         }
//         .upload-card:hover { border-color: rgba(0,180,255,0.4); }

//         .file-icon-wrap {
//           width: 72px;
//           height: 72px;
//           background: rgba(0,100,255,0.1);
//           border: 1px solid rgba(0,180,255,0.3);
//           border-radius: 16px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0 auto 20px;
//           animation: floatAnim 3s ease-in-out infinite;
//         }
//         @keyframes floatAnim {
//           0%,100% { transform: translateY(0); }
//           50% { transform: translateY(-6px); }
//         }

//         .upload-btn {
//           width: 100%;
//           padding: 13px 0;
//           background: linear-gradient(135deg, #0ea5e9, #3b82f6);
//           border: none;
//           border-radius: 12px;
//           color: white;
//           font-family: 'Rajdhani', sans-serif;
//           font-size: 15px;
//           font-weight: 700;
//           letter-spacing: 1px;
//           cursor: pointer;
//           box-shadow: 0 4px 20px rgba(14,165,233,0.4);
//           transition: opacity 0.2s, transform 0.15s;
//           text-transform: uppercase;
//         }
//         .upload-btn:hover:not(:disabled) { opacity: 0.85; transform: translateY(-1px); }
//         .upload-btn:disabled { opacity: 0.4; cursor: default; }

//         .progress-bar {
//           height: 3px;
//           background: rgba(255,255,255,0.08);
//           border-radius: 99px;
//           overflow: hidden;
//           margin-bottom: 6px;
//         }
//         .progress-fill {
//           height: 100%;
//           background: linear-gradient(90deg, #0ea5e9, #38bdf8);
//           border-radius: 99px;
//           transition: width 0.12s ease;
//           box-shadow: 0 0 8px #38bdf8;
//         }
//         .done-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 7px;
//           background: rgba(34,197,94,0.1);
//           border: 1px solid rgba(34,197,94,0.3);
//           color: #4ade80;
//           border-radius: 99px;
//           padding: 5px 14px;
//           font-size: 13px;
//           font-weight: 600;
//           letter-spacing: 0.5px;
//         }

//         /* ── SECTION 2: AI ENGINE ── */
//         .ai-card {
//           width: 460px;
//           text-align: center;
//         }
//         .brain-wrap {
//           width: 200px;
//           height: 200px;
//           margin: 0 auto 32px;
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .brain-ring {
//           position: absolute;
//           border-radius: 50%;
//           border: 1px solid rgba(0,180,255,0.3);
//           animation: ringPulse 2s ease-in-out infinite;
//         }
//         .brain-ring:nth-child(1) { width: 200px; height: 200px; animation-delay: 0s; }
//         .brain-ring:nth-child(2) { width: 160px; height: 160px; animation-delay: 0.4s; border-color: rgba(0,180,255,0.5); }
//         .brain-ring:nth-child(3) { width: 120px; height: 120px; animation-delay: 0.8s; border-color: rgba(0,180,255,0.7); }
//         @keyframes ringPulse {
//           0%,100% { transform: scale(1); opacity: 0.5; }
//           50% { transform: scale(1.06); opacity: 1; }
//         }
//         .brain-core {
//           width: 80px;
//           height: 80px;
//           background: radial-gradient(circle at 40% 40%, #00b4ff, #0051cc);
//           border-radius: 50%;
//           box-shadow: 0 0 40px rgba(0,180,255,0.6), 0 0 80px rgba(0,100,255,0.3);
//           z-index: 1;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-family: 'IBM Plex Mono', monospace;
//           font-size: 13px;
//           font-weight: 600;
//           letter-spacing: 2px;
//           animation: corePulse 1.5s ease-in-out infinite;
//         }
//         @keyframes corePulse {
//           0%,100% { box-shadow: 0 0 40px rgba(0,180,255,0.6), 0 0 80px rgba(0,100,255,0.3); }
//           50% { box-shadow: 0 0 60px rgba(0,220,255,0.9), 0 0 120px rgba(0,140,255,0.5); }
//         }

//         .processing-tags {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//           justify-content: center;
//           margin-top: 24px;
//         }
//         .proc-tag {
//           font-family: 'IBM Plex Mono', monospace;
//           font-size: 11px;
//           padding: 4px 12px;
//           border-radius: 99px;
//           border: 1px solid rgba(0,180,255,0.25);
//           color: rgba(0,180,255,0.8);
//           background: rgba(0,100,255,0.08);
//           letter-spacing: 1px;
//           animation: tagFlicker 3s ease-in-out infinite;
//         }
//         .proc-tag:nth-child(1) { animation-delay: 0s; }
//         .proc-tag:nth-child(2) { animation-delay: 0.5s; }
//         .proc-tag:nth-child(3) { animation-delay: 1s; }
//         .proc-tag:nth-child(4) { animation-delay: 1.5s; }
//         @keyframes tagFlicker {
//           0%,100% { opacity: 0.5; }
//           50% { opacity: 1; border-color: rgba(0,220,255,0.6); color: #00e5ff; }
//         }

//         /* ── SECTION 3: PARKING ── */
//         .parking-card {
//           width: 560px;
//         }
//         .parking-bg {
//           background: linear-gradient(135deg, #0a1628 0%, #0d2040 60%, #0a2a5a 100%);
//           border-radius: 24px;
//           padding: 36px;
//           border: 1px solid rgba(0,100,255,0.2);
//           box-shadow: 0 0 80px rgba(0,80,200,0.15), 0 40px 80px rgba(0,0,0,0.6);
//           position: relative;
//           overflow: hidden;
//         }
//         .parking-bg::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(ellipse at 50% -10%, rgba(0,100,255,0.15), transparent 60%);
//           pointer-events: none;
//         }

//         .parking-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 12px;
//           position: relative;
//           z-index: 1;
//         }
//         .p-slot {
//           aspect-ratio: 0.55;
//           border: 1.5px dashed rgba(255,255,255,0.1);
//           border-radius: 10px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(255,255,255,0.02);
//         }
//         .p-slot.occ { border-color: transparent; background: transparent; }
//         .car-shape {
//           width: 70%;
//           aspect-ratio: 0.55;
//           border-radius: 10px;
//           position: relative;
//         }
//         .car-window {
//           position: absolute;
//           top: 15%;
//           left: 10%;
//           right: 10%;
//           height: 27%;
//           background: rgba(0,0,0,0.35);
//           border-radius: 4px;
//         }
//         .car-bumper {
//           position: absolute;
//           bottom: 12%;
//           left: 10%;
//           right: 10%;
//           height: 20%;
//           background: rgba(0,0,0,0.22);
//           border-radius: 4px;
//         }

//         .parking-header {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 12px;
//           padding: 0 2px;
//         }

//         .legend {
//           display: flex;
//           gap: 20px;
//           justify-content: center;
//           margin-top: 20px;
//           flex-wrap: wrap;
//         }
//         .legend-item {
//           display: flex;
//           align-items: center;
//           gap: 7px;
//           font-family: 'IBM Plex Mono', monospace;
//           font-size: 10px;
//           color: rgba(255,255,255,0.35);
//           letter-spacing: 1px;
//         }
//         .legend-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 3px;
//         }

//         /* Progress nav dots */
//         .nav-dots {
//           position: fixed;
//           bottom: 32px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           gap: 10px;
//           z-index: 100;
//         }
//         .nav-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.2);
//           border: 1px solid rgba(0,180,255,0.3);
//           transition: all 0.3s;
//         }
//         .nav-dot.active {
//           background: #00b4ff;
//           box-shadow: 0 0 12px #00b4ff;
//           width: 24px;
//           border-radius: 4px;
//         }

//         /* Scroll hint */
//         .scroll-hint {
//           position: fixed;
//           right: 32px;
//           bottom: 32px;
//           font-family: 'IBM Plex Mono', monospace;
//           font-size: 10px;
//           letter-spacing: 2px;
//           color: rgba(255,255,255,0.2);
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           z-index: 100;
//           animation: floatAnim 2s ease-in-out infinite;
//         }

//         h2.section-title {
//           font-size: clamp(26px, 3vw, 40px);
//           font-weight: 700;
//           letter-spacing: -0.5px;
//           color: #fff;
//           margin-bottom: 6px;
//           line-height: 1.1;
//         }
//         .section-sub {
//           font-size: 15px;
//           color: rgba(255,255,255,0.4);
//           font-weight: 500;
//           margin-bottom: 32px;
//         }

//         /* Car entry animation */
//         @keyframes carEntry {
//           from { opacity: 0; transform: scale(0.6) translateY(20px); }
//           to { opacity: 1; transform: scale(1) translateY(0); }
//         }
//         .car-animate { animation: carEntry 0.5s ease both; }
//         ${parkingSlots.map((_, i) => `.car-animate:nth-child(${i+1}) { animation-delay: ${i * 0.07}s; }`).join('\n')}
//       `}</style>

//       {/* Ambient background */}
//       <div className="grid-bg" />
//       <div className="orb orb-1" />
//       <div className="orb orb-2" />
//       <div className="orb orb-3" />

//       {/* Navigation dots */}
//       <div className="nav-dots">
//         {["Upload", "AI Engine", "Output"].map((label, i) => (
//           <div key={i} className={`nav-dot ${activeStep === i ? "active" : ""}`} title={label} />
//         ))}
//       </div>

//       {/* Scroll hint */}
//       <div className="scroll-hint">
//         <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//           <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//         </svg>
//         SCROLL
//       </div>

//       {/* Main horizontal scroll container */}
//       <div className="scroll-container" ref={containerRef}>
//         <div className="sticky-viewport">
//           <div className="h-track" ref={trackRef}>

//             {/* ── PANEL 1: UPLOAD ── */}
//             <div className="panel">
//               <div>
//                 <p className="step-badge">01 — INPUT</p>
//                 <h2 className="section-title">Upload Your File</h2>
//                 <p className="section-sub">Drag &amp; drop or click to get started</p>

//                 <div className="upload-card">
//                   <div className="file-icon-wrap" style={uploadDone ? { animation: "none" } : {}}>
//                     {uploadDone ? (
//                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
//                         <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//                       </svg>
//                     ) : (
//                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
//                         <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
//                         <polyline points="17 8 12 3 7 8" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
//                         <line x1="12" y1="3" x2="12" y2="15" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
//                       </svg>
//                     )}
//                   </div>

//                   <p style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600, fontSize: 15, marginBottom: 4, textAlign: "center", fontFamily: "'IBM Plex Mono', monospace" }}>
//                     site-plan.dwx
//                   </p>
//                   <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginBottom: 24, textAlign: "center", fontFamily: "'IBM Plex Mono', monospace" }}>
//                     DWX · 248 MB
//                   </p>

//                   {uploading && (
//                     <div style={{ marginBottom: 18 }}>
//                       <div className="progress-bar">
//                         <div className="progress-fill" style={{ width: `${progress}%` }} />
//                       </div>
//                       <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 6, fontFamily: "'IBM Plex Mono', monospace", textAlign: "center" }}>
//                         {progress}%
//                       </p>
//                     </div>
//                   )}

//                   {uploadDone && (
//                     <div style={{ textAlign: "center", marginBottom: 20 }}>
//                       <span className="done-badge">
//                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//                           <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
//                         </svg>
//                         Upload Complete
//                       </span>
//                       <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, marginTop: 10, fontFamily: "'IBM Plex Mono', monospace" }}>
//                         Scroll → to continue
//                       </p>
//                     </div>
//                   )}

//                   {!uploadDone && (
//                     <button onClick={handleUpload} disabled={uploading} className="upload-btn">
//                       {uploading ? `Uploading… ${progress}%` : "Upload File"}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Connector 1→2 */}
//             <div className="connector">
//               <div className="connector-line">
//                 <div className="data-particle" />
//                 <div className="data-particle" />
//                 <div className="data-particle" />
//                 <div className="connector-dot-mid" />
//               </div>
//             </div>

//             {/* ── PANEL 2: AI ENGINE ── */}
//             <div className="panel">
//               <div className="ai-card">
//                 <p className="step-badge">02 — PROCESSING</p>
//                 <h2 className="section-title">AI Engine</h2>
//                 <p className="section-sub">Analyzing layout and spatial data</p>

//                 <div className="brain-wrap">
//                   <div className="brain-ring" />
//                   <div className="brain-ring" />
//                   <div className="brain-ring" />
//                   <div className="brain-core">AI</div>
//                 </div>

//                 <div className="processing-tags">
//                   <span className="proc-tag">OBJECT DETECT</span>
//                   <span className="proc-tag">SPATIAL MAP</span>
//                   <span className="proc-tag">SLOT ANALYSIS</span>
//                   <span className="proc-tag">LAYOUT GEN</span>
//                 </div>
//               </div>
//             </div>

//             {/* Connector 2→3 */}
//             <div className="connector">
//               <div className="connector-line">
//                 <div className="data-particle" />
//                 <div className="data-particle" />
//                 <div className="data-particle" />
//                 <div className="connector-dot-mid" />
//               </div>
//             </div>

//             {/* ── PANEL 3: PARKING OUTPUT ── */}
//             <div className="panel">
//               <div className="parking-card">
//                 <p className="step-badge">03 — OUTPUT</p>
//                 <h2 className="section-title">Parking Layout</h2>
//                 <p className="section-sub">Car parking &amp; driveway design detected</p>

//                 <div className="parking-bg">
//                   <div className="parking-header">
//                     <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: 2 }}>ROW A</span>
//                     <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "rgba(0,180,255,0.5)", letterSpacing: 2 }}>6 / 8 OCCUPIED</span>
//                   </div>

//                   <div className="parking-grid">
//                     {parkingSlots.map((slot, i) => (
//                       slot.color === null ? (
//                         <div key={i} className="p-slot car-animate">
//                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.2 }}>
//                             <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" />
//                           </svg>
//                         </div>
//                       ) : (
//                         <div key={i} className="p-slot occ car-animate">
//                           <div
//                             className="car-shape"
//                             style={{ background: slot.color, boxShadow: `0 4px 16px ${slot.shadow}` }}
//                           >
//                             <div className="car-window" />
//                             <div className="car-bumper" />
//                           </div>
//                         </div>
//                       )
//                     ))}
//                   </div>

//                   <div className="legend">
//                     <div className="legend-item">
//                       <div className="legend-dot" style={{ background: "#0ea5e9" }} />
//                       OCCUPIED
//                     </div>
//                     <div className="legend-item">
//                       <div className="legend-dot" style={{ border: "1.5px dashed rgba(255,255,255,0.25)", background: "transparent" }} />
//                       AVAILABLE
//                     </div>
//                     <div className="legend-item">
//                       <div className="legend-dot" style={{ background: "#4ade80", borderRadius: "50%" }} />
//                       AI DETECTED
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function HorizontalScrollPage() {
//   const containerRef = useRef(null);
//   const [scrollPct, setScrollPct] = useState(0);
//   const [uploadDone, setUploadDone] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const container = containerRef.current;
//       if (!container) return;
//       const maxScroll = container.scrollHeight - window.innerHeight;
//       const pct = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
//       setScrollPct(pct);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleUpload = () => {
//     if (uploading || uploadDone) return;
//     setUploading(true);
//     let p = 0;
//     const iv = setInterval(() => {
//       p += Math.random() * 12 + 4;
//       if (p >= 100) {
//         clearInterval(iv);
//         setProgress(100);
//         setTimeout(() => { setUploading(false); setUploadDone(true); }, 400);
//       } else {
//         setProgress(Math.floor(p));
//       }
//     }, 120);
//   };

//   // ── PHASES ──────────────────────────────────────────────
//   // Phase A (0.00–0.20): Panel 1 alone, full screen
//   // Phase B (0.20–0.40): Panel 2 slides in from right → both at 50%
//   // Phase C (0.40–0.60): Panel 3 slides in → all three at 33%
//   // Phase D (0.60–1.00): Panel 1+2 shrink away, Panel 3 fills 100%

//   const easeInOut = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

//   const phaseB = easeInOut(Math.min(Math.max((scrollPct - 0.20) / 0.20, 0), 1));
//   const phaseC = easeInOut(Math.min(Math.max((scrollPct - 0.40) / 0.20, 0), 1));
//   const phaseD = easeInOut(Math.min(Math.max((scrollPct - 0.60) / 0.40, 0), 1));

//   // Panel widths in vw
//   let p1 = 100, p2 = 0, p3 = 0;
//   if (scrollPct <= 0.20) {
//     p1 = 100; p2 = 0; p3 = 0;
//   } else if (scrollPct <= 0.40) {
//     p1 = 100 - phaseB * 50; p2 = phaseB * 50; p3 = 0;
//   } else if (scrollPct <= 0.60) {
//     p1 = 50 - phaseC * (50 / 3); p2 = 50 - phaseC * (50 / 3); p3 = phaseC * (100 / 3);
//   } else {
//     const base = 100 / 3;
//     p1 = base * (1 - phaseD);
//     p2 = base * (1 - phaseD);
//     p3 = base + phaseD * (100 - base);
//   }

//   // Connector widths & opacity
//   const connW = 60;
//   const conn1 = scrollPct > 0.20 && scrollPct < 0.92 ? Math.min(phaseB, 1 - phaseD) : 0;
//   const conn2 = scrollPct > 0.40 && scrollPct < 0.92 ? Math.min(phaseC, 1 - phaseD) : 0;

//   const p3Expanded = scrollPct > 0.80;
//   const p3ContentVisible = p3 > 6;

//   const parkingSlots = [
//     { color: null },
//     { color: "#facc15", shadow: "rgba(250,204,21,0.5)" },
//     { color: null },
//     { color: "linear-gradient(160deg,#a855f7,#7c3aed)", shadow: "rgba(168,85,247,0.5)" },
//     { color: "linear-gradient(160deg,#e2e8f0,#cbd5e1)", shadow: "rgba(200,213,225,0.2)" },
//     { color: "linear-gradient(160deg,#ef4444,#b91c1c)", shadow: "rgba(239,68,68,0.5)" },
//     { color: "linear-gradient(160deg,#f8fafc,#e2e8f0)", shadow: "rgba(248,250,252,0.2)" },
//     { color: "linear-gradient(160deg,#14b8a6,#0d9488)", shadow: "rgba(20,184,166,0.5)" },
//   ];

//   const activeStep = scrollPct < 0.33 ? 0 : scrollPct < 0.66 ? 1 : 2;

//   return (
//     <>
//       <style>{`
//         // @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap');
//         // *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         body { background: #020b18; color: white; font-family: 'Rajdhani', sans-serif; overflow-x: hidden; }

//         .grid-bg {
//           position: fixed; inset: 0; pointer-events: none; z-index: 0;
//           background-image:
//             linear-gradient(rgba(0,180,255,0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,180,255,0.03) 1px, transparent 1px);
//           background-size: 52px 52px;
//         }
//         .orb { position: fixed; border-radius: 50%; filter: blur(130px); pointer-events: none; z-index: 0; }
//         .orb1 { width: 700px; height: 700px; background: rgba(0,80,220,0.12); top: -250px; left: -200px; }
//         .orb2 { width: 400px; height: 400px; background: rgba(0,200,255,0.07); bottom: -80px; right: 20%; }

//         .scroll-outer { height: 600vh; position: relative; }
//         .sticky { position: sticky; top: 0; height: 100vh; display: flex; overflow: hidden; z-index: 1; align-items: stretch; }

//         .panel {
//           height: 100%; display: flex; align-items: center; justify-content: center;
//           overflow: hidden; flex-shrink: 0; position: relative;
//         }
//         .panel-inner { width: 420px; max-width: 90%; }

//         /* CONNECTOR */
//         .connector {
//           display: flex; align-items: center; justify-content: center;
//           flex-shrink: 0; overflow: hidden; position: relative;
//         }
//         .conn-line {
//           height: 2px; width: 100%; position: relative; overflow: visible;
//           background: linear-gradient(90deg, rgba(0,180,255,0.1), rgba(0,210,255,0.8), rgba(0,180,255,0.1));
//         }
//         .conn-dot { position: absolute; top: 50%; transform: translateY(-50%); width: 7px; height: 7px; border-radius: 50%; background: #00d4ff; box-shadow: 0 0 10px #00d4ff; }
//         .conn-dot.l { left: 0; } .conn-dot.r { right: 0; }
//         .particle { position: absolute; top: 50%; transform: translateY(-50%); width: 5px; height: 5px; border-radius: 50%; background: #00eeff; box-shadow: 0 0 7px #00eeff; animation: travel 1.8s linear infinite; }
//         .particle:nth-child(3){animation-delay:0.6s} .particle:nth-child(4){animation-delay:1.2s}
//         @keyframes travel { from{left:0%;opacity:0} 8%{opacity:1} 92%{opacity:1} to{left:100%;opacity:0} }

//         /* UPLOAD */
//         .upload-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(0,180,255,0.2); border-radius: 24px; padding: 38px 34px; backdrop-filter: blur(20px); box-shadow: 0 0 60px rgba(0,100,255,0.1), inset 0 1px 0 rgba(255,255,255,0.05); }
//         .file-icon { width: 66px; height: 66px; background: rgba(0,100,255,0.1); border: 1px solid rgba(0,180,255,0.3); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; animation: floatUp 3s ease-in-out infinite; }
//         @keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
//         .upload-btn { width:100%; padding:12px 0; background:linear-gradient(135deg,#0ea5e9,#3b82f6); border:none; border-radius:12px; color:white; font-family:'Rajdhani',sans-serif; font-size:15px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; cursor:pointer; box-shadow:0 4px 20px rgba(14,165,233,0.35); transition:opacity 0.2s,transform 0.15s; }
//         .upload-btn:hover:not(:disabled){opacity:0.85;transform:translateY(-1px)} .upload-btn:disabled{opacity:0.4;cursor:default}
//         .progress-bar{height:3px;background:rgba(255,255,255,0.07);border-radius:99px;overflow:hidden;margin-bottom:6px}
//         .progress-fill{height:100%;background:linear-gradient(90deg,#0ea5e9,#38bdf8);border-radius:99px;transition:width 0.12s;box-shadow:0 0 6px #38bdf8}
//         .done-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.3);color:#4ade80;border-radius:99px;padding:5px 14px;font-size:13px;font-weight:600;letter-spacing:0.5px}

//         /* AI ENGINE */
//         .brain-wrap{width:170px;height:170px;margin:0 auto 24px;position:relative;display:flex;align-items:center;justify-content:center}
//         .ring{position:absolute;border-radius:50%;border:1px solid rgba(0,180,255,0.35);animation:ringPulse 2.2s ease-in-out infinite}
//         .ring:nth-child(1){width:170px;height:170px} .ring:nth-child(2){width:132px;height:132px;animation-delay:0.4s;border-color:rgba(0,200,255,0.5)} .ring:nth-child(3){width:94px;height:94px;animation-delay:0.8s;border-color:rgba(0,220,255,0.7)}
//         @keyframes ringPulse{0%,100%{transform:scale(1);opacity:0.5}50%{transform:scale(1.07);opacity:1}}
//         .brain-core{width:64px;height:64px;z-index:1;background:radial-gradient(circle at 38% 38%,#00d4ff,#0046cc);border-radius:50%;box-shadow:0 0 36px rgba(0,200,255,0.6),0 0 80px rgba(0,100,255,0.3);display:flex;align-items:center;justify-content:center;font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:600;animation:corePulse 1.6s ease-in-out infinite}
//         @keyframes corePulse{0%,100%{box-shadow:0 0 36px rgba(0,200,255,0.6),0 0 80px rgba(0,100,255,0.3)}50%{box-shadow:0 0 60px rgba(0,230,255,0.9),0 0 120px rgba(0,140,255,0.5)}}
//         .tags{display:flex;flex-wrap:wrap;gap:7px;justify-content:center;margin-top:18px}
//         .tag{font-family:'IBM Plex Mono',monospace;font-size:10px;padding:4px 11px;border-radius:99px;border:1px solid rgba(0,180,255,0.2);color:rgba(0,200,255,0.75);background:rgba(0,100,255,0.07);letter-spacing:1px;animation:tagFlicker 3s ease-in-out infinite}
//         .tag:nth-child(2){animation-delay:0.5s}.tag:nth-child(3){animation-delay:1s}.tag:nth-child(4){animation-delay:1.5s}
//         @keyframes tagFlicker{0%,100%{opacity:0.5}50%{opacity:1;border-color:rgba(0,220,255,0.5);color:#00e5ff}}

//         /* PARKING */
//         .parking-inner-wrap { width: 100%; transition: all 0.5s ease; }
//         .parking-bg{background:linear-gradient(135deg,#0a1628,#0d2040 60%,#0a2a5a);border-radius:24px;padding:30px;border:1px solid rgba(0,100,255,0.2);box-shadow:0 0 80px rgba(0,80,200,0.12),0 40px 80px rgba(0,0,0,0.5);position:relative;overflow:hidden;transition:border-radius 0.6s ease,padding 0.5s ease}
//         .parking-bg.expanded{border-radius:0;padding:48px}
//         .parking-bg::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% -5%,rgba(0,100,255,0.12),transparent 55%)}
//         .p-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:11px;position:relative;z-index:1;transition:gap 0.5s}
//         .p-grid.expanded{gap:20px}
//         .p-slot{aspect-ratio:0.55;border:1.5px dashed rgba(255,255,255,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.02)}
//         .p-slot.occ{border-color:transparent;background:transparent}
//         .car{width:70%;aspect-ratio:0.55;border-radius:10px;position:relative}
//         .car-w{position:absolute;top:15%;left:10%;right:10%;height:27%;background:rgba(0,0,0,0.35);border-radius:4px}
//         .car-b{position:absolute;bottom:12%;left:10%;right:10%;height:20%;background:rgba(0,0,0,0.22);border-radius:4px}
//         .p-header{display:flex;justify-content:space-between;margin-bottom:11px}
//         .legend{display:flex;gap:16px;justify-content:center;margin-top:18px;flex-wrap:wrap}
//         .leg-item{display:flex;align-items:center;gap:6px;font-family:'IBM Plex Mono',monospace;font-size:10px;color:rgba(255,255,255,0.35);letter-spacing:1px}
//         .leg-dot{width:8px;height:8px;border-radius:3px}

//         /* SHARED */
//         .step-label{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:3px;color:rgba(0,180,255,0.65);text-transform:uppercase;margin-bottom:9px}
//         h2{font-size:clamp(22px,2.4vw,36px);font-weight:700;letter-spacing:-0.5px;color:#fff;margin-bottom:5px;line-height:1.1}
//         .sub{font-size:14px;color:rgba(255,255,255,0.38);font-weight:500;margin-bottom:26px}

//         .scroll-hint{position:fixed;bottom:26px;right:26px;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:2px;color:rgba(255,255,255,0.18);display:flex;align-items:center;gap:8px;z-index:100;animation:floatUp 2s ease-in-out infinite}
//         .pdots{position:fixed;bottom:26px;left:50%;transform:translateX(-50%);display:flex;gap:9px;z-index:100}
//         .pdot{height:6px;border-radius:3px;border:1px solid rgba(0,180,255,0.3);background:rgba(255,255,255,0.12);transition:width 0.4s,background 0.3s,box-shadow 0.3s;width:6px}
//         .pdot.active{width:22px;background:#00b4ff;box-shadow:0 0 10px #00b4ff;border-color:#00b4ff}

//         /* Parking slot entry animation — triggered when panel3 becomes visible */
//         @keyframes slotPop { from{opacity:0;transform:scale(0.55) translateY(14px)} to{opacity:1;transform:none} }
//       `}</style>

//       <div className="grid-bg" />
//       <div className="orb orb1" />
//       <div className="orb orb2" />

//       <div className="pdots">
//         {[0,1,2].map(i => <div key={i} className={`pdot ${activeStep === i ? "active" : ""}`} />)}
//       </div>
//       <div className="scroll-hint">
//         <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//           <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//         </svg>
//         SCROLL
//       </div>

//       <div className="scroll-outer" ref={containerRef}>
//         <div className="sticky">

//           {/* PANEL 1: UPLOAD */}
//           <div className="panel" style={{ width: `${p1}vw`, transition: "width 0.05s linear" }}>
//             <div className="panel-inner" style={{ opacity: p1 < 4 ? 0 : 1, transition: "opacity 0.2s" }}>
//               <p className="step-label">01 — INPUT</p>
//               <h2>Upload Your File</h2>
//               <p className="sub">Drag &amp; drop or click to begin</p>
//               <div className="upload-card">
//                 <div className="file-icon" style={uploadDone ? { animation: "none" } : {}}>
//                   {uploadDone ? (
//                     <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                   ) : (
//                     <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
//                       <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
//                       <polyline points="17 8 12 3 7 8" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
//                       <line x1="12" y1="3" x2="12" y2="15" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
//                     </svg>
//                   )}
//                 </div>
//                 <p style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: 14, textAlign: "center", fontFamily: "'IBM Plex Mono',monospace", marginBottom: 4 }}>site-plan.dwx</p>
//                 <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 12, textAlign: "center", fontFamily: "'IBM Plex Mono',monospace", marginBottom: 20 }}>DWX · 248 MB</p>
//                 {uploading && (
//                   <div style={{ marginBottom: 14 }}>
//                     <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }}/></div>
//                     <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 5, fontFamily: "'IBM Plex Mono',monospace", textAlign: "center" }}>{progress}%</p>
//                   </div>
//                 )}
//                 {uploadDone ? (
//                   <div style={{ textAlign: "center", marginBottom: 16 }}>
//                     <span className="done-badge">
//                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/></svg>
//                       Upload Complete
//                     </span>
//                     <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, marginTop: 8, fontFamily: "'IBM Plex Mono',monospace" }}>↓ Scroll to continue</p>
//                   </div>
//                 ) : (
//                   <button onClick={handleUpload} disabled={uploading} className="upload-btn">
//                     {uploading ? `Uploading… ${progress}%` : "Upload File"}
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* CONNECTOR 1↔2 */}
//           <div className="connector" style={{ width: conn1 > 0.02 ? `${connW}px` : "0px", opacity: conn1, transition: "width 0.05s, opacity 0.2s" }}>
//             <div className="conn-line">
//               <div className="conn-dot l"/><div className="conn-dot r"/>
//               <div className="particle"/><div className="particle"/><div className="particle"/>
//             </div>
//           </div>

//           {/* PANEL 2: AI ENGINE */}
//           <div className="panel" style={{ width: `${p2}vw`, transition: "width 0.05s linear" }}>
//             <div className="panel-inner" style={{ opacity: p2 < 6 ? 0 : 1, transform: `translateX(${p2 < 6 ? 40 : 0}px)`, transition: "opacity 0.3s, transform 0.3s" }}>
//               <p className="step-label">02 — PROCESSING</p>
//               <h2>AI Engine</h2>
//               <p className="sub">Analyzing spatial layout data</p>
//               <div style={{ textAlign: "center" }}>
//                 <div className="brain-wrap">
//                   <div className="ring"/><div className="ring"/><div className="ring"/>
//                   <div className="brain-core">AI</div>
//                 </div>
//                 <div className="tags">
//                   <span className="tag">OBJECT DETECT</span>
//                   <span className="tag">SPATIAL MAP</span>
//                   <span className="tag">SLOT ANALYSIS</span>
//                   <span className="tag">LAYOUT GEN</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* CONNECTOR 2↔3 */}
//           <div className="connector" style={{ width: conn2 > 0.02 ? `${connW}px` : "0px", opacity: conn2, transition: "width 0.05s, opacity 0.2s" }}>
//             <div className="conn-line">
//               <div className="conn-dot l"/><div className="conn-dot r"/>
//               <div className="particle"/><div className="particle"/><div className="particle"/>
//             </div>
//           </div>

//           {/* PANEL 3: PARKING OUTPUT */}
//           <div className="panel" style={{ width: `${p3}vw`, transition: "width 0.05s linear" }}>
//             {p3ContentVisible && (
//               <div
//                 style={{
//                   width: p3Expanded ? "100%" : "520px",
//                   maxWidth: p3Expanded ? "100%" : "calc(100% - 48px)",
//                   transition: "width 0.6s ease, max-width 0.6s ease",
//                   opacity: p3 < 6 ? 0 : 1,
//                   transform: `translateX(${p3 < 6 ? 50 : 0}px)`,
//                 }}
//               >
//                 {!p3Expanded && (
//                   <>
//                     <p className="step-label">03 — OUTPUT</p>
//                     <h2>Parking Layout</h2>
//                     <p className="sub">Car parking &amp; driveway design detected</p>
//                   </>
//                 )}
//                 <div className={`parking-bg ${p3Expanded ? "expanded" : ""}`}>
//                   <div className="p-header">
//                     <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "rgba(255,255,255,0.22)", letterSpacing: 2 }}>ROW A</span>
//                     <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "rgba(0,180,255,0.5)", letterSpacing: 2 }}>6 / 8 OCCUPIED</span>
//                   </div>
//                   <div className={`p-grid ${p3Expanded ? "expanded" : ""}`}>
//                     {parkingSlots.map((slot, i) =>
//                       slot.color === null ? (
//                         <div key={i} className="p-slot" style={{ animation: `slotPop 0.45s ${i * 0.07}s ease both` }}>
//                           <svg width="17" height="17" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.18 }}>
//                             <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="1.5" strokeDasharray="3 2"/>
//                           </svg>
//                         </div>
//                       ) : (
//                         <div key={i} className="p-slot occ" style={{ animation: `slotPop 0.45s ${i * 0.07}s ease both` }}>
//                           <div className="car" style={{ background: slot.color, boxShadow: `0 4px 16px ${slot.shadow}` }}>
//                             <div className="car-w"/><div className="car-b"/>
//                           </div>
//                         </div>
//                       )
//                     )}
//                   </div>
//                   <div className="legend">
//                     <div className="leg-item"><div className="leg-dot" style={{ background: "#0ea5e9" }}/>OCCUPIED</div>
//                     <div className="leg-item"><div className="leg-dot" style={{ border: "1.5px dashed rgba(255,255,255,0.22)", background: "transparent" }}/>AVAILABLE</div>
//                     <div className="leg-item"><div className="leg-dot" style={{ background: "#4ade80", borderRadius: "50%" }}/>AI DETECTED</div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function HorizontalScrollPage() {
//   const containerRef = useRef(null);
//   const [uploadDone, setUploadDone] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [progress, setProgress] = useState(0);

//   const p1Ref = useRef(null);
//   const p2Ref = useRef(null);
//   const p3Ref = useRef(null);
//   const c1Ref = useRef(null);
//   const c2Ref = useRef(null);
//   const p2InnerRef = useRef(null);
//   const p3InnerRef = useRef(null);
//   const parkingBgRef = useRef(null);
//   const parkingGridRef = useRef(null);
//   const p3HeaderRef = useRef(null);
//   const dotRefs = useRef([]);

//   const CONN_W = 64;

//   useEffect(() => {
//     const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
//     const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
//     const phase = (pct, from, to) =>
//       ease(clamp((pct - from) / (to - from), 0, 1));

//     let raf;
//     const update = () => {
//       const container = containerRef.current;
//       if (!container) {
//         raf = requestAnimationFrame(update);
//         return;
//       }
//       const maxScroll = container.scrollHeight - window.innerHeight;
//       const pct = clamp(window.scrollY / maxScroll, 0, 1);
//       const vw = window.innerWidth;

//       const phB = phase(pct, 0.18, 0.38);
//       const phC = phase(pct, 0.38, 0.58);
//       const phD = phase(pct, 0.58, 1.0);

//       let w1, w2, w3, conn1, conn2;

//       if (pct <= 0.18) {
//         w1 = vw;
//         w2 = 0;
//         w3 = 0;
//         conn1 = 0;
//         conn2 = 0;
//       } else if (pct <= 0.38) {
//         const half = (vw - CONN_W) / 2;
//         w2 = phB * half;
//         conn1 = phB * CONN_W;
//         w1 = vw - conn1 - w2;
//         w3 = 0;
//         conn2 = 0;
//       } else if (pct <= 0.58) {
//         const third = (vw - 2 * CONN_W) / 3;
//         w3 = phC * third;
//         conn2 = phC * CONN_W;
//         const rem = vw - CONN_W - conn2 - w3;
//         w1 = rem / 2;
//         w2 = rem / 2;
//         conn1 = CONN_W;
//       } else {
//         const third = (vw - 2 * CONN_W) / 3;
//         const s = 1 - phD;
//         w1 = third * s;
//         w2 = third * s;
//         conn1 = CONN_W * s;
//         conn2 = CONN_W * s;
//         w3 = vw - w1 - w2 - conn1 - conn2;
//       }

//       if (p1Ref.current) p1Ref.current.style.width = w1 + "px";
//       if (p2Ref.current) p2Ref.current.style.width = w2 + "px";
//       if (p3Ref.current) p3Ref.current.style.width = w3 + "px";

//       if (c1Ref.current) {
//         c1Ref.current.style.width = conn1 + "px";
//         c1Ref.current.style.opacity = conn1 < 4 ? "0" : "1";
//       }
//       if (c2Ref.current) {
//         c2Ref.current.style.width = conn2 + "px";
//         c2Ref.current.style.opacity = conn2 < 4 ? "0" : "1";
//       }

//       if (p2InnerRef.current) {
//         const vis = clamp((w2 - 40) / 80, 0, 1);
//         p2InnerRef.current.style.opacity = String(vis);
//         p2InnerRef.current.style.transform = `translateX(${(1 - vis) * 36}px)`;
//       }

//       if (p3InnerRef.current) {
//         const vis = clamp((w3 - 40) / 100, 0, 1);
//         p3InnerRef.current.style.opacity = String(vis);
//         p3InnerRef.current.style.transform = `translateX(${(1 - vis) * 36}px)`;
//       }

//       if (parkingBgRef.current) {
//         parkingBgRef.current.style.borderRadius = 24 * (1 - phD) + "px";
//         parkingBgRef.current.style.maxWidth = phD > 0.01 ? "none" : "560px";
//       }
//       if (parkingGridRef.current) {
//         parkingGridRef.current.style.gap = 11 + phD * 10 + "px";
//       }

//       if (p3HeaderRef.current) {
//         const headVis = clamp(1 - phD * 4, 0, 1);
//         p3HeaderRef.current.style.opacity = String(headVis);
//         p3HeaderRef.current.style.maxHeight = headVis < 0.05 ? "0px" : "160px";
//       }

//       const activeStep = pct < 0.33 ? 0 : pct < 0.66 ? 1 : 2;
//       dotRefs.current.forEach((dot, i) => {
//         if (!dot) return;
//         if (i === activeStep) {
//           dot.style.width = "22px";
//           dot.style.background = "#00b4ff";
//           dot.style.boxShadow = "0 0 10px #00b4ff";
//         } else {
//           dot.style.width = "6px";
//           dot.style.background = "rgba(255,255,255,0.12)";
//           dot.style.boxShadow = "none";
//         }
//       });

//       raf = requestAnimationFrame(update);
//     };

//     raf = requestAnimationFrame(update);
//     return () => cancelAnimationFrame(raf);
//   }, []);

//   const handleUpload = () => {
//     if (uploading || uploadDone) return;
//     setUploading(true);
//     let p = 0;
//     const iv = setInterval(() => {
//       p += Math.random() * 12 + 4;
//       if (p >= 100) {
//         clearInterval(iv);
//         setProgress(100);
//         setTimeout(() => {
//           setUploading(false);
//           setUploadDone(true);
//         }, 400);
//       } else {
//         setProgress(Math.floor(p));
//       }
//     }, 120);
//   };

//   const parkingSlots = [
//     { color: null },
//     { color: "#facc15", shadow: "rgba(250,204,21,0.5)" },
//     { color: null },
//     {
//       color: "linear-gradient(160deg,#a855f7,#7c3aed)",
//       shadow: "rgba(168,85,247,0.5)",
//     },
//     {
//       color: "linear-gradient(160deg,#e2e8f0,#cbd5e1)",
//       shadow: "rgba(200,213,225,0.2)",
//     },
//     {
//       color: "linear-gradient(160deg,#ef4444,#b91c1c)",
//       shadow: "rgba(239,68,68,0.5)",
//     },
//     {
//       color: "linear-gradient(160deg,#f8fafc,#e2e8f0)",
//       shadow: "rgba(248,250,252,0.2)",
//     },
//     {
//       color: "linear-gradient(160deg,#14b8a6,#0d9488)",
//       shadow: "rgba(20,184,166,0.5)",
//     },
//   ];

//   return (
//     <>
//       <style>{`
//         // @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap');
//         // *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
//         body{background:#020b18;color:white;font-family:'Rajdhani',sans-serif;overflow-x:hidden}
//         .grid-bg{position:fixed;inset:0;pointer-events:none;z-index:0;background-image:linear-gradient(rgba(0,180,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,255,0.03) 1px,transparent 1px);background-size:52px 52px}
//         .orb{position:fixed;border-radius:50%;filter:blur(130px);pointer-events:none;z-index:0}
//         .orb1{width:700px;height:700px;background:rgba(0,80,220,0.12);top:-250px;left:-200px}
//         .orb2{width:400px;height:400px;background:rgba(0,200,255,0.07);bottom:-80px;right:20%}
//         .scroll-outer{height:600vh;position:relative}
//         .sticky{position:sticky;top:0;height:100vh;display:flex;overflow:hidden;z-index:1;align-items:stretch}
//         .panel{height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;position:relative;width:0}
//         .panel-inner{width:420px;max-width:calc(100% - 40px);will-change:opacity,transform}
//         #p1{width:100vw}
//         #p1 .panel-inner{opacity:1;transform:none}
//         .connector{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;width:0}
//         .conn-line{height:2px;width:100%;position:relative;overflow:visible;background:linear-gradient(90deg,rgba(0,180,255,0.08),rgba(0,210,255,0.85),rgba(0,180,255,0.08))}
//         .conn-dot{position:absolute;top:50%;transform:translateY(-50%);width:7px;height:7px;border-radius:50%;background:#00d4ff;box-shadow:0 0 10px #00d4ff}
//         .conn-dot.l{left:0}.conn-dot.r{right:0}
//         .particle{position:absolute;top:50%;transform:translateY(-50%);width:5px;height:5px;border-radius:50%;background:#00eeff;box-shadow:0 0 7px #00eeff;animation:travel 1.8s linear infinite}
//         .particle:nth-child(3){animation-delay:0.6s}.particle:nth-child(4){animation-delay:1.2s}
//         @keyframes travel{from{left:0%;opacity:0}8%{opacity:1}92%{opacity:1}to{left:100%;opacity:0}}
//         .upload-card{background:rgba(255,255,255,0.02);border:1px solid rgba(0,180,255,0.2);border-radius:24px;padding:38px 34px;backdrop-filter:blur(20px);box-shadow:0 0 60px rgba(0,100,255,0.1),inset 0 1px 0 rgba(255,255,255,0.05)}
//         .file-icon{width:66px;height:66px;background:rgba(0,100,255,0.1);border:1px solid rgba(0,180,255,0.3);border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;animation:floatUp 3s ease-in-out infinite}
//         @keyframes floatUp{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
//         .upload-btn{width:100%;padding:12px 0;background:linear-gradient(135deg,#0ea5e9,#3b82f6);border:none;border-radius:12px;color:white;font-family:'Rajdhani',sans-serif;font-size:15px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;box-shadow:0 4px 20px rgba(14,165,233,0.35);transition:opacity 0.2s,transform 0.15s}
//         .upload-btn:hover:not(:disabled){opacity:0.85;transform:translateY(-1px)}.upload-btn:disabled{opacity:0.4;cursor:default}
//         .progress-bar{height:3px;background:rgba(255,255,255,0.07);border-radius:99px;overflow:hidden;margin-bottom:6px}
//         .progress-fill{height:100%;background:linear-gradient(90deg,#0ea5e9,#38bdf8);border-radius:99px;transition:width 0.12s;box-shadow:0 0 6px #38bdf8}
//         .done-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.3);color:#4ade80;border-radius:99px;padding:5px 14px;font-size:13px;font-weight:600}
//         .brain-wrap{width:170px;height:170px;margin:0 auto 24px;position:relative;display:flex;align-items:center;justify-content:center}
//         .ring{position:absolute;border-radius:50%;border:1px solid rgba(0,180,255,0.35);animation:ringPulse 2.2s ease-in-out infinite}
//         .ring:nth-child(1){width:170px;height:170px}.ring:nth-child(2){width:132px;height:132px;animation-delay:0.4s;border-color:rgba(0,200,255,0.5)}.ring:nth-child(3){width:94px;height:94px;animation-delay:0.8s;border-color:rgba(0,220,255,0.7)}
//         @keyframes ringPulse{0%,100%{transform:scale(1);opacity:0.5}50%{transform:scale(1.07);opacity:1}}
//         .brain-core{width:64px;height:64px;z-index:1;background:radial-gradient(circle at 38% 38%,#00d4ff,#0046cc);border-radius:50%;box-shadow:0 0 36px rgba(0,200,255,0.6),0 0 80px rgba(0,100,255,0.3);display:flex;align-items:center;justify-content:center;font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:600;animation:corePulse 1.6s ease-in-out infinite}
//         @keyframes corePulse{0%,100%{box-shadow:0 0 36px rgba(0,200,255,0.6),0 0 80px rgba(0,100,255,0.3)}50%{box-shadow:0 0 60px rgba(0,230,255,0.9),0 0 120px rgba(0,140,255,0.5)}}
//         .tags{display:flex;flex-wrap:wrap;gap:7px;justify-content:center;margin-top:18px}
//         .tag{font-family:'IBM Plex Mono',monospace;font-size:10px;padding:4px 11px;border-radius:99px;border:1px solid rgba(0,180,255,0.2);color:rgba(0,200,255,0.75);background:rgba(0,100,255,0.07);letter-spacing:1px;animation:tagFlicker 3s ease-in-out infinite}
//         .tag:nth-child(2){animation-delay:0.5s}.tag:nth-child(3){animation-delay:1s}.tag:nth-child(4){animation-delay:1.5s}
//         @keyframes tagFlicker{0%,100%{opacity:0.5}50%{opacity:1;border-color:rgba(0,220,255,0.5);color:#00e5ff}}
//         .parking-outer{width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:0}
//         .parking-bg{background:linear-gradient(135deg,#0a1628,#0d2040 60%,#0a2a5a);padding:30px;border:1px solid rgba(0,100,255,0.2);box-shadow:0 0 80px rgba(0,80,200,0.12);position:relative;overflow:hidden;width:100%;max-width:560px;will-change:border-radius}
//         .parking-bg::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% -5%,rgba(0,100,255,0.12),transparent 55%)}
//         .p-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:11px;position:relative;z-index:1}
//         .p-slot{aspect-ratio:0.55;border:1.5px dashed rgba(255,255,255,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.02)}
//         .p-slot.occ{border-color:transparent;background:transparent}
//         .car{width:70%;aspect-ratio:0.55;border-radius:10px;position:relative}
//         .car-w{position:absolute;top:15%;left:10%;right:10%;height:27%;background:rgba(0,0,0,0.35);border-radius:4px}
//         .car-b{position:absolute;bottom:12%;left:10%;right:10%;height:20%;background:rgba(0,0,0,0.22);border-radius:4px}
//         .p-header{display:flex;justify-content:space-between;margin-bottom:11px}
//         .legend{display:flex;gap:16px;justify-content:center;margin-top:18px;flex-wrap:wrap}
//         .leg-item{display:flex;align-items:center;gap:6px;font-family:'IBM Plex Mono',monospace;font-size:10px;color:rgba(255,255,255,0.35);letter-spacing:1px}
//         .leg-dot{width:8px;height:8px;border-radius:3px}
//         .step-label{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:3px;color:rgba(0,180,255,0.65);text-transform:uppercase;margin-bottom:9px}
//         h2{font-size:clamp(22px,2.4vw,36px);font-weight:700;letter-spacing:-0.5px;color:#fff;margin-bottom:5px;line-height:1.1}
//         .sub{font-size:14px;color:rgba(255,255,255,0.38);font-weight:500;margin-bottom:26px}
//         #p3-header{overflow:hidden;transition:max-height 0.3s ease,opacity 0.25s;max-height:160px}
//         .scroll-hint{position:fixed;bottom:26px;right:26px;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:2px;color:rgba(255,255,255,0.18);display:flex;align-items:center;gap:8px;z-index:100;animation:floatUp 2s ease-in-out infinite}
//         .pdots{position:fixed;bottom:26px;left:50%;transform:translateX(-50%);display:flex;gap:9px;z-index:100}
//         .pdot{height:6px;border-radius:3px;border:1px solid rgba(0,180,255,0.3);background:rgba(255,255,255,0.12);width:6px}
//         @keyframes slotPop{from{opacity:0;transform:scale(0.55) translateY(14px)}to{opacity:1;transform:none}}
//       `}</style>

//       <div className="grid-bg" />
//       <div className="orb orb1" />
//       <div className="orb orb2" />

//       <div className="pdots">
//         {[0, 1, 2].map((i) => (
//           <div
//             key={i}
//             className="pdot"
//             ref={(el) => (dotRefs.current[i] = el)}
//             style={
//               i === 0
//                 ? {
//                     width: "22px",
//                     background: "#00b4ff",
//                     boxShadow: "0 0 10px #00b4ff",
//                   }
//                 : {}
//             }
//           />
//         ))}
//       </div>

//       <div className="scroll-hint">
//         <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//           <path
//             d="M12 5v14M5 12l7 7 7-7"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//           />
//         </svg>
//         SCROLL
//       </div>

//       <div className="scroll-outer" ref={containerRef}>
//         <div className="sticky">
//           <div className="panel" id="p1" ref={p1Ref}>
//             <div className="panel-inner">
//               <p className="step-label">01 — INPUT</p>
//               <h2>Upload Your File</h2>
//               <p className="sub">Drag &amp; drop or click to begin</p>
//               <div className="upload-card">
//                 <div
//                   className="file-icon"
//                   style={uploadDone ? { animation: "none" } : {}}
//                 >
//                   {uploadDone ? (
//                     <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
//                       <path
//                         d="M20 6L9 17l-5-5"
//                         stroke="#4ade80"
//                         strokeWidth="2.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   ) : (
//                     <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
//                       <path
//                         d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
//                         stroke="#38bdf8"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                       />
//                       <polyline
//                         points="17 8 12 3 7 8"
//                         stroke="#38bdf8"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                       />
//                       <line
//                         x1="12"
//                         y1="3"
//                         x2="12"
//                         y2="15"
//                         stroke="#38bdf8"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                   )}
//                 </div>
//                 <p
//                   style={{
//                     color: "rgba(255,255,255,0.7)",
//                     fontWeight: 600,
//                     fontSize: 14,
//                     textAlign: "center",
//                     fontFamily: "'IBM Plex Mono',monospace",
//                     marginBottom: 4,
//                   }}
//                 >
//                   site-plan.dwx
//                 </p>
//                 <p
//                   style={{
//                     color: "rgba(255,255,255,0.28)",
//                     fontSize: 12,
//                     textAlign: "center",
//                     fontFamily: "'IBM Plex Mono',monospace",
//                     marginBottom: 20,
//                   }}
//                 >
//                   DWX · 248 MB
//                 </p>
//                 {uploading && (
//                   <div style={{ marginBottom: 14 }}>
//                     <div className="progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{ width: `${progress}%` }}
//                       />
//                     </div>
//                     <p
//                       style={{
//                         fontSize: 11,
//                         color: "rgba(255,255,255,0.3)",
//                         marginTop: 5,
//                         fontFamily: "'IBM Plex Mono',monospace",
//                         textAlign: "center",
//                       }}
//                     >
//                       {progress}%
//                     </p>
//                   </div>
//                 )}
//                 {uploadDone ? (
//                   <div style={{ textAlign: "center", marginBottom: 16 }}>
//                     <span className="done-badge">
//                       <svg
//                         width="12"
//                         height="12"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                       >
//                         <path
//                           d="M20 6L9 17l-5-5"
//                           stroke="#4ade80"
//                           strokeWidth="2.5"
//                           strokeLinecap="round"
//                         />
//                       </svg>
//                       Upload Complete
//                     </span>
//                     <p
//                       style={{
//                         color: "rgba(255,255,255,0.2)",
//                         fontSize: 11,
//                         marginTop: 8,
//                         fontFamily: "'IBM Plex Mono',monospace",
//                       }}
//                     >
//                       ↓ Scroll to continue
//                     </p>
//                   </div>
//                 ) : (
//                   <button
//                     onClick={handleUpload}
//                     disabled={uploading}
//                     className="upload-btn"
//                   >
//                     {uploading ? `Uploading… ${progress}%` : "Upload File"}
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="connector" ref={c1Ref}>
//             <div className="conn-line">
//               <div className="conn-dot l" />
//               <div className="conn-dot r" />
//               <div className="particle" />
//               <div className="particle" />
//               <div className="particle" />
//             </div>
//           </div>

//           <div className="panel" ref={p2Ref}>
//             <div
//               className="panel-inner"
//               ref={p2InnerRef}
//               style={{ opacity: 0 }}
//             >
//               <p className="step-label">02 — PROCESSING</p>
//               <h2>AI Engine</h2>
//               <p className="sub">Analyzing spatial layout data</p>
//               <div style={{ textAlign: "center" }}>
//                 <div className="brain-wrap">
//                   <div className="ring" />
//                   <div className="ring" />
//                   <div className="ring" />
//                   <div className="brain-core">AI</div>
//                 </div>
//                 <div className="tags">
//                   <span className="tag">OBJECT DETECT</span>
//                   <span className="tag">SPATIAL MAP</span>
//                   <span className="tag">SLOT ANALYSIS</span>
//                   <span className="tag">LAYOUT GEN</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="connector" ref={c2Ref}>
//             <div className="conn-line">
//               <div className="conn-dot l" />
//               <div className="conn-dot r" />
//               <div className="particle" />
//               <div className="particle" />
//               <div className="particle" />
//             </div>
//           </div>

//           <div className="panel" ref={p3Ref}>
//             <div
//               className="panel-inner"
//               ref={p3InnerRef}
//               style={{ opacity: 0, width: "100%", maxWidth: "100%" }}
//             >
//               <div id="p3-header" ref={p3HeaderRef}>
//                 <p className="step-label">03 — OUTPUT</p>
//                 <h2>Parking Layout</h2>
//                 <p className="sub">
//                   Car parking &amp; driveway design detected
//                 </p>
//               </div>
//               <div className="parking-outer">
//                 <div className="parking-bg" ref={parkingBgRef}>
//                   <div className="p-header">
//                     <span
//                       style={{
//                         fontFamily: "'IBM Plex Mono',monospace",
//                         fontSize: 10,
//                         color: "rgba(255,255,255,0.22)",
//                         letterSpacing: 2,
//                       }}
//                     >
//                       ROW A
//                     </span>
//                     <span
//                       style={{
//                         fontFamily: "'IBM Plex Mono',monospace",
//                         fontSize: 10,
//                         color: "rgba(0,180,255,0.5)",
//                         letterSpacing: 2,
//                       }}
//                     >
//                       6 / 8 OCCUPIED
//                     </span>
//                   </div>
//                   <div className="p-grid" ref={parkingGridRef}>
//                     {parkingSlots.map((slot, i) =>
//                       slot.color === null ? (
//                         <div
//                           key={i}
//                           className="p-slot"
//                           style={{
//                             animation: `slotPop 0.45s ${i * 0.07}s ease both`,
//                           }}
//                         >
//                           <svg
//                             width="17"
//                             height="17"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             style={{ opacity: 0.18 }}
//                           >
//                             <rect
//                               x="4"
//                               y="4"
//                               width="16"
//                               height="16"
//                               rx="2"
//                               stroke="white"
//                               strokeWidth="1.5"
//                               strokeDasharray="3 2"
//                             />
//                           </svg>
//                         </div>
//                       ) : (
//                         <div
//                           key={i}
//                           className="p-slot occ"
//                           style={{
//                             animation: `slotPop 0.45s ${i * 0.07}s ease both`,
//                           }}
//                         >
//                           <div
//                             className="car"
//                             style={{
//                               background: slot.color,
//                               boxShadow: `0 4px 16px ${slot.shadow}`,
//                             }}
//                           >
//                             <div className="car-w" />
//                             <div className="car-b" />
//                           </div>
//                         </div>
//                       ),
//                     )}
//                   </div>
//                   <div className="legend">
//                     <div className="leg-item">
//                       <div
//                         className="leg-dot"
//                         style={{ background: "#0ea5e9" }}
//                       />
//                       OCCUPIED
//                     </div>
//                     <div className="leg-item">
//                       <div
//                         className="leg-dot"
//                         style={{
//                           border: "1.5px dashed rgba(255,255,255,0.22)",
//                           background: "transparent",
//                         }}
//                       />
//                       AVAILABLE
//                     </div>
//                     <div className="leg-item">
//                       <div
//                         className="leg-dot"
//                         style={{ background: "#4ade80", borderRadius: "50%" }}
//                       />
//                       AI DETECTED
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function HorizontalScrollPage() {
//   const containerRef = useRef(null);
//   const [scrollPct, setScrollPct] = useState(0);
//   const [uploadDone, setUploadDone] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const container = containerRef.current;
//       if (!container) return;
//       const maxScroll = container.scrollHeight - window.innerHeight;
//       const pct = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
//       setScrollPct(pct);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleUpload = () => {
//     if (uploading || uploadDone) return;
//     setUploading(true);
//     let p = 0;
//     const iv = setInterval(() => {
//       p += Math.random() * 12 + 4;
//       if (p >= 100) {
//         clearInterval(iv);
//         setProgress(100);
//         setTimeout(() => { setUploading(false); setUploadDone(true); }, 400);
//       } else {
//         setProgress(Math.floor(p));
//       }
//     }, 120);
//   };

//   // ease helper
//   const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

//   // PHASES:
//   // 0.00–0.20 → Panel 1 alone (full screen)
//   // 0.20–0.40 → Panel 2 slides in → both 50/50
//   // 0.40–0.60 → Panel 3 slides in → all three 33/33/33
//   // 0.60–1.00 → All three panels slide OFF to the LEFT together (translateX)

//   const phaseB = ease(Math.min(Math.max((scrollPct - 0.20) / 0.20, 0), 1));
//   const phaseC = ease(Math.min(Math.max((scrollPct - 0.40) / 0.20, 0), 1));
//   const phaseD = ease(Math.min(Math.max((scrollPct - 0.60) / 0.40, 0), 1));

//   // Panel widths during phases A–C (stop at 33% each once phase C done)
//   let p1w, p2w, p3w;
//   if (scrollPct <= 0.20) {
//     p1w = 100; p2w = 0; p3w = 0;
//   } else if (scrollPct <= 0.40) {
//     p1w = 100 - phaseB * 50; p2w = phaseB * 50; p3w = 0;
//   } else if (scrollPct <= 0.60) {
//     const base = 100 / 3;
//     p1w = 50 - phaseC * (50 - base);
//     p2w = 50 - phaseC * (50 - base);
//     p3w = phaseC * base;
//   } else {
//     // All three locked at 33% — entire row slides left via translateX
//     const base = 100 / 3;
//     p1w = base; p2w = base; p3w = base;
//   }

//   // Phase D: slide entire row left by 100vw
//   const rowTranslate = phaseD * -100; // vw units → use % on wrapper

//   // Connector visibility
//   const conn1 = scrollPct > 0.20 && scrollPct <= 0.60
//     ? Math.min(phaseB * 5, 1)
//     : scrollPct > 0.60
//       ? Math.max(1 - phaseD * 3, 0)
//       : 0;

//   const conn2 = scrollPct > 0.40 && scrollPct <= 0.60
//     ? Math.min(phaseC * 5, 1)
//     : scrollPct > 0.60
//       ? Math.max(1 - phaseD * 3, 0)
//       : 0;

//   const activeStep = scrollPct < 0.33 ? 0 : scrollPct < 0.66 ? 1 : 2;

//   const parkingSlots = [
//     { color: null },
//     { color: "#facc15", shadow: "rgba(250,204,21,0.5)" },
//     { color: null },
//     { color: "linear-gradient(160deg,#a855f7,#7c3aed)", shadow: "rgba(168,85,247,0.5)" },
//     { color: "linear-gradient(160deg,#e2e8f0,#cbd5e1)", shadow: "rgba(200,213,225,0.2)" },
//     { color: "linear-gradient(160deg,#ef4444,#b91c1c)", shadow: "rgba(239,68,68,0.5)" },
//     { color: "linear-gradient(160deg,#f8fafc,#e2e8f0)", shadow: "rgba(248,250,252,0.2)" },
//     { color: "linear-gradient(160deg,#14b8a6,#0d9488)", shadow: "rgba(20,184,166,0.5)" },
//   ];

//   return (
//     <>
//       <style>{`
//         // @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap');
//         // *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         body { background: #020b18; color: white; font-family: 'Rajdhani', sans-serif; overflow-x: hidden; }

//         .grid-bg {
//           position: fixed; inset: 0; pointer-events: none; z-index: 0;
//           background-image:
//             linear-gradient(rgba(0,180,255,0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,180,255,0.03) 1px, transparent 1px);
//           background-size: 52px 52px;
//         }
//         .orb { position: fixed; border-radius: 50%; filter: blur(130px); pointer-events: none; z-index: 0; }
//         .orb1 { width: 700px; height: 700px; background: rgba(0,80,220,0.12); top: -250px; left: -200px; }
//         .orb2 { width: 400px; height: 400px; background: rgba(0,200,255,0.07); bottom: -80px; right: 20%; }

//         .scroll-outer { height: 600vh; position: relative; }

//         .sticky {
//           position: sticky; top: 0; height: 100vh;
//           overflow: hidden; z-index: 1;
//         }

//         /* The row that holds all panels — slides left in phase D */
//         .panels-row {
//           display: flex;
//           align-items: center;
//           height: 100%;
//           width: 100%;
//         }

//         .panel {
//           height: 100%; display: flex; align-items: center; justify-content: center;
//           overflow: hidden; flex-shrink: 0; position: relative;
//         }

//         /* CONNECTOR */
//         .connector {
//           display: flex; align-items: center; justify-content: center;
//           flex-shrink: 0; overflow: hidden; position: relative;
//         }
//         .conn-line {
//           height: 2px; width: 100%; position: relative; overflow: visible;
//           background: linear-gradient(90deg, rgba(0,180,255,0.1), rgba(0,210,255,0.85), rgba(0,180,255,0.1));
//         }
//         .conn-dot { position: absolute; top: 50%; transform: translateY(-50%); width: 7px; height: 7px; border-radius: 50%; background: #00d4ff; box-shadow: 0 0 10px #00d4ff; }
//         .conn-dot.l { left: 0; } .conn-dot.r { right: 0; }
//         .particle { position: absolute; top: 50%; transform: translateY(-50%); width: 5px; height: 5px; border-radius: 50%; background: #00eeff; box-shadow: 0 0 7px #00eeff; animation: travel 1.8s linear infinite; }
//         .particle:nth-child(3){animation-delay:0.6s} .particle:nth-child(4){animation-delay:1.2s}
//         @keyframes travel { from{left:0%;opacity:0} 8%{opacity:1} 92%{opacity:1} to{left:100%;opacity:0} }

//         /* UPLOAD */
//         .upload-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(0,180,255,0.2); border-radius: 24px; padding: 36px 32px; backdrop-filter: blur(20px); box-shadow: 0 0 60px rgba(0,100,255,0.1), inset 0 1px 0 rgba(255,255,255,0.05); }
//         .file-icon { width: 64px; height: 64px; background: rgba(0,100,255,0.1); border: 1px solid rgba(0,180,255,0.3); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; animation: floatUp 3s ease-in-out infinite; }
//         @keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
//         .upload-btn { width:100%; padding:12px 0; background:linear-gradient(135deg,#0ea5e9,#3b82f6); border:none; border-radius:12px; color:white; font-family:'Rajdhani',sans-serif; font-size:15px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; cursor:pointer; box-shadow:0 4px 20px rgba(14,165,233,0.35); transition:opacity 0.2s,transform 0.15s; }
//         .upload-btn:hover:not(:disabled){opacity:0.85;transform:translateY(-1px)} .upload-btn:disabled{opacity:0.4;cursor:default}
//         .progress-bar{height:3px;background:rgba(255,255,255,0.07);border-radius:99px;overflow:hidden;margin-bottom:6px}
//         .progress-fill{height:100%;background:linear-gradient(90deg,#0ea5e9,#38bdf8);border-radius:99px;transition:width 0.12s;box-shadow:0 0 6px #38bdf8}
//         .done-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.3);color:#4ade80;border-radius:99px;padding:5px 14px;font-size:13px;font-weight:600}

//         /* AI ENGINE */
//         .brain-wrap{width:160px;height:160px;margin:0 auto 22px;position:relative;display:flex;align-items:center;justify-content:center}
//         .ring{position:absolute;border-radius:50%;border:1px solid rgba(0,180,255,0.35);animation:ringPulse 2.2s ease-in-out infinite}
//         .ring:nth-child(1){width:160px;height:160px}
//         .ring:nth-child(2){width:122px;height:122px;animation-delay:0.4s;border-color:rgba(0,200,255,0.5)}
//         .ring:nth-child(3){width:84px;height:84px;animation-delay:0.8s;border-color:rgba(0,220,255,0.7)}
//         @keyframes ringPulse{0%,100%{transform:scale(1);opacity:0.5}50%{transform:scale(1.07);opacity:1}}
//         .brain-core{width:58px;height:58px;z-index:1;background:radial-gradient(circle at 38% 38%,#00d4ff,#0046cc);border-radius:50%;box-shadow:0 0 36px rgba(0,200,255,0.6),0 0 80px rgba(0,100,255,0.3);display:flex;align-items:center;justify-content:center;font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:600;animation:corePulse 1.6s ease-in-out infinite}
//         @keyframes corePulse{0%,100%{box-shadow:0 0 36px rgba(0,200,255,0.6),0 0 80px rgba(0,100,255,0.3)}50%{box-shadow:0 0 60px rgba(0,230,255,0.9),0 0 120px rgba(0,140,255,0.5)}}
//         .tags{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:16px}
//         .tag{font-family:'IBM Plex Mono',monospace;font-size:10px;padding:4px 10px;border-radius:99px;border:1px solid rgba(0,180,255,0.2);color:rgba(0,200,255,0.75);background:rgba(0,100,255,0.07);letter-spacing:1px;animation:tagFlicker 3s ease-in-out infinite}
//         .tag:nth-child(2){animation-delay:0.5s}.tag:nth-child(3){animation-delay:1s}.tag:nth-child(4){animation-delay:1.5s}
//         @keyframes tagFlicker{0%,100%{opacity:0.5}50%{opacity:1;border-color:rgba(0,220,255,0.5);color:#00e5ff}}

//         /* PARKING — normal card, no expansion */
//         .parking-card { width: 100%; max-width: 480px; }
//         .parking-bg{background:linear-gradient(135deg,#0a1628,#0d2040 60%,#0a2a5a);border-radius:20px;padding:26px;border:1px solid rgba(0,100,255,0.2);box-shadow:0 0 60px rgba(0,80,200,0.12),0 30px 60px rgba(0,0,0,0.5);position:relative;overflow:hidden}
//         .parking-bg::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% -5%,rgba(0,100,255,0.12),transparent 55%)}
//         .p-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;position:relative;z-index:1}
//         .p-slot{aspect-ratio:0.55;border:1.5px dashed rgba(255,255,255,0.1);border-radius:8px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.02)}
//         .p-slot.occ{border-color:transparent;background:transparent}
//         .car{width:68%;aspect-ratio:0.55;border-radius:9px;position:relative}
//         .car-w{position:absolute;top:15%;left:10%;right:10%;height:27%;background:rgba(0,0,0,0.35);border-radius:3px}
//         .car-b{position:absolute;bottom:12%;left:10%;right:10%;height:20%;background:rgba(0,0,0,0.22);border-radius:3px}
//         .p-header{display:flex;justify-content:space-between;margin-bottom:10px}
//         .legend{display:flex;gap:14px;justify-content:center;margin-top:16px;flex-wrap:wrap}
//         .leg-item{display:flex;align-items:center;gap:5px;font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(255,255,255,0.35);letter-spacing:1px}
//         .leg-dot{width:7px;height:7px;border-radius:2px}

//         @keyframes slotPop{from{opacity:0;transform:scale(0.55) translateY(12px)}to{opacity:1;transform:none}}

//         /* SHARED TEXT */
//         .step-label{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:3px;color:rgba(0,180,255,0.65);text-transform:uppercase;margin-bottom:8px}
//         h2{font-size:clamp(22px,2.2vw,34px);font-weight:700;letter-spacing:-0.5px;color:#fff;margin-bottom:5px;line-height:1.1}
//         .sub{font-size:13px;color:rgba(255,255,255,0.38);font-weight:500;margin-bottom:24px}

//         .scroll-hint{position:fixed;bottom:26px;right:26px;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:2px;color:rgba(255,255,255,0.18);display:flex;align-items:center;gap:8px;z-index:100;animation:floatUp 2s ease-in-out infinite}
//         .pdots{position:fixed;bottom:26px;left:50%;transform:translateX(-50%);display:flex;gap:9px;z-index:100}
//         .pdot{height:6px;border-radius:3px;border:1px solid rgba(0,180,255,0.3);background:rgba(255,255,255,0.12);transition:width 0.4s,background 0.3s,box-shadow 0.3s;width:6px}
//         .pdot.active{width:22px;background:#00b4ff;box-shadow:0 0 10px #00b4ff;border-color:#00b4ff}
//       `}</style>

//       <div className="grid-bg" />
//       <div className="orb orb1" />
//       <div className="orb orb2" />

//       <div className="pdots">
//         {[0,1,2].map(i => <div key={i} className={`pdot ${activeStep === i ? "active" : ""}`} />)}
//       </div>

//       <div className="scroll-hint">
//         <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//           <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//         </svg>
//         SCROLL
//       </div>

//       <div className="scroll-outer" ref={containerRef}>
//         <div className="sticky">
//           {/* The whole row slides left together in phase D */}
//           <div
//             className="panels-row"
//             style={{
//               transform: `translateX(${rowTranslate}vw)`,
//               transition: "transform 0.05s linear",
//             }}
//           >
//             {/* ── PANEL 1: UPLOAD ── */}
//             <div className="panel" style={{ width: `${p1w}vw`, transition: "width 0.05s linear" }}>
//               <div style={{
//                 width: 400, maxWidth: "88%",
//                 opacity: p1w < 5 ? 0 : 1,
//                 transition: "opacity 0.2s",
//               }}>
//                 <p className="step-label">01 — INPUT</p>
//                 <h2>Upload Your File</h2>
//                 <p className="sub">Drag &amp; drop or click to begin</p>
//                 <div className="upload-card">
//                   <div className="file-icon" style={uploadDone ? { animation: "none" } : {}}>
//                     {uploadDone ? (
//                       <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
//                         <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     ) : (
//                       <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
//                         <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
//                         <polyline points="17 8 12 3 7 8" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
//                         <line x1="12" y1="3" x2="12" y2="15" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
//                       </svg>
//                     )}
//                   </div>
//                   <p style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: 14, textAlign: "center", fontFamily: "'IBM Plex Mono',monospace", marginBottom: 4 }}>site-plan.dwx</p>
//                   <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 12, textAlign: "center", fontFamily: "'IBM Plex Mono',monospace", marginBottom: 20 }}>DWX · 248 MB</p>
//                   {uploading && (
//                     <div style={{ marginBottom: 14 }}>
//                       <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }}/></div>
//                       <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 5, fontFamily: "'IBM Plex Mono',monospace", textAlign: "center" }}>{progress}%</p>
//                     </div>
//                   )}
//                   {uploadDone ? (
//                     <div style={{ textAlign: "center", marginBottom: 16 }}>
//                       <span className="done-badge">
//                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/></svg>
//                         Upload Complete
//                       </span>
//                       <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, marginTop: 8, fontFamily: "'IBM Plex Mono',monospace" }}>↓ Scroll to continue</p>
//                     </div>
//                   ) : (
//                     <button onClick={handleUpload} disabled={uploading} className="upload-btn">
//                       {uploading ? `Uploading… ${progress}%` : "Upload File"}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* CONNECTOR 1↔2 */}
//             <div
//               className="connector"
//               style={{
//                 width: conn1 > 0.02 ? "70px" : "0px",
//                 opacity: conn1,
//                 transition: "width 0.1s, opacity 0.2s",
//               }}
//             >
//               <div className="conn-line">
//                 <div className="conn-dot l"/><div className="conn-dot r"/>
//                 <div className="particle"/><div className="particle"/><div className="particle"/>
//               </div>
//             </div>

//             {/* ── PANEL 2: AI ENGINE ── */}
//             <div className="panel" style={{ width: `${p2w}vw`, transition: "width 0.05s linear" }}>
//               <div style={{
//                 width: 380, maxWidth: "88%", textAlign: "center",
//                 opacity: p2w < 5 ? 0 : 1,
//                 transform: `translateX(${p2w < 8 ? 30 : 0}px)`,
//                 transition: "opacity 0.3s, transform 0.3s",
//               }}>
//                 <p className="step-label">02 — PROCESSING</p>
//                 <h2>AI Engine</h2>
//                 <p className="sub">Analyzing spatial layout data</p>
//                 <div className="brain-wrap">
//                   <div className="ring"/><div className="ring"/><div className="ring"/>
//                   <div className="brain-core">AI</div>
//                 </div>
//                 <div className="tags">
//                   <span className="tag">OBJECT DETECT</span>
//                   <span className="tag">SPATIAL MAP</span>
//                   <span className="tag">SLOT ANALYSIS</span>
//                   <span className="tag">LAYOUT GEN</span>
//                 </div>
//               </div>
//             </div>

//             {/* CONNECTOR 2↔3 */}
//             <div
//               className="connector"
//               style={{
//                 width: conn2 > 0.02 ? "70px" : "0px",
//                 opacity: conn2,
//                 transition: "width 0.1s, opacity 0.2s",
//               }}
//             >
//               <div className="conn-line">
//                 <div className="conn-dot l"/><div className="conn-dot r"/>
//                 <div className="particle"/><div className="particle"/><div className="particle"/>
//               </div>
//             </div>

//             {/* ── PANEL 3: PARKING OUTPUT ── */}
//             <div className="panel" style={{ width: `${p3w}vw`, transition: "width 0.05s linear" }}>
//               <div style={{
//                 opacity: p3w < 5 ? 0 : 1,
//                 transform: `translateX(${p3w < 8 ? 40 : 0}px)`,
//                 transition: "opacity 0.3s, transform 0.3s",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}>
//                 <p className="step-label">03 — OUTPUT</p>
//                 <h2>Parking Layout</h2>
//                 <p className="sub">Car parking &amp; driveway design detected</p>
//                 <div className="parking-card">
//                   <div className="parking-bg">
//                     <div className="p-header">
//                       <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: "rgba(255,255,255,0.22)", letterSpacing: 2 }}>ROW A</span>
//                       <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: "rgba(0,180,255,0.5)", letterSpacing: 2 }}>6 / 8 OCCUPIED</span>
//                     </div>
//                     <div className="p-grid">
//                       {parkingSlots.map((slot, i) =>
//                         slot.color === null ? (
//                           <div key={i} className="p-slot" style={{ animation: p3w > 10 ? `slotPop 0.4s ${i * 0.06}s ease both` : "none" }}>
//                             <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.18 }}>
//                               <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="1.5" strokeDasharray="3 2"/>
//                             </svg>
//                           </div>
//                         ) : (
//                           <div key={i} className="p-slot occ" style={{ animation: p3w > 10 ? `slotPop 0.4s ${i * 0.06}s ease both` : "none" }}>
//                             <div className="car" style={{ background: slot.color, boxShadow: `0 3px 12px ${slot.shadow}` }}>
//                               <div className="car-w"/><div className="car-b"/>
//                             </div>
//                           </div>
//                         )
//                       )}
//                     </div>
//                     <div className="legend">
//                       <div className="leg-item"><div className="leg-dot" style={{ background: "#0ea5e9" }}/>OCCUPIED</div>
//                       <div className="leg-item"><div className="leg-dot" style={{ border: "1.5px dashed rgba(255,255,255,0.22)", background: "transparent" }}/>AVAILABLE</div>
//                       <div className="leg-item"><div className="leg-dot" style={{ background: "#4ade80", borderRadius: "50%" }}/>AI DETECTED</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>{/* end panels-row */}
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function HorizontalScrollPage() {
//   const containerRef = useRef(null);
//   const [scrollPct, setScrollPct] = useState(0);
//   const [uploadDone, setUploadDone] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const container = containerRef.current;
//       if (!container) return;
//       const maxScroll = container.scrollHeight - window.innerHeight;
//       const pct = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
//       setScrollPct(pct);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleUpload = () => {
//     if (uploading || uploadDone) return;
//     setUploading(true);
//     let p = 0;
//     const iv = setInterval(() => {
//       p += Math.random() * 10 + 4;
//       if (p >= 100) {
//         clearInterval(iv);
//         setProgress(100);
//         setTimeout(() => { setUploading(false); setUploadDone(true); }, 400);
//       } else {
//         setProgress(Math.floor(p));
//       }
//     }, 120);
//   };

//   // Smooth easing
//   const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

//   // ── SCROLL PHASES ──
//   // 0.00 – 0.25 : Panel 1 only, centered (full width)
//   // 0.25 – 0.45 : Panel 2 slides in from right → P1 & P2 each 50vw
//   // 0.45 – 0.65 : Panel 3 slides in → all 3 exactly 33.33vw each
//   // 0.65 – 1.00 : All 3 locked at 33vw, entire row slides LEFT off screen

//   const phaseB = ease(Math.min(Math.max((scrollPct - 0.25) / 0.20, 0), 1));
//   const phaseC = ease(Math.min(Math.max((scrollPct - 0.45) / 0.20, 0), 1));
//   const phaseD = ease(Math.min(Math.max((scrollPct - 0.65) / 0.35, 0), 1));

//   // Once all 3 are visible (phaseC = 1), lock all at exactly 33.333vw
//   const THIRD = 100 / 3;

//   let p1w, p2w, p3w;
//   if (scrollPct <= 0.25) {
//     // Phase A: panel1 fills screen, centered
//     p1w = 100; p2w = 0; p3w = 0;
//   } else if (scrollPct <= 0.45) {
//     // Phase B: panel2 slides in
//     p1w = 100 - phaseB * (100 - THIRD * 2); // 100 → ~66.7 (but we do 50/50 interim)
//     // Actually simpler: go 100→50 as panel2 goes 0→50
//     p1w = 100 - phaseB * 50;
//     p2w = phaseB * 50;
//     p3w = 0;
//   } else if (scrollPct <= 0.65) {
//     // Phase C: panel3 slides in, all three equalize to THIRD
//     // p1: 50 → THIRD, p2: 50 → THIRD, p3: 0 → THIRD
//     p1w = 50 - phaseC * (50 - THIRD);
//     p2w = 50 - phaseC * (50 - THIRD);
//     p3w = phaseC * THIRD;
//   } else {
//     // Phase D: all locked at THIRD, row slides left
//     p1w = THIRD; p2w = THIRD; p3w = THIRD;
//   }

//   // Phase D: translateX the whole row from 0 → -100vw
//   const rowX = phaseD * -100;

//   // Connector widths: fixed 72px, fade in/out
//   const conn1Opacity = scrollPct > 0.25
//     ? Math.min(phaseB * 4, 1) * (1 - Math.max(phaseD - 0.5, 0) * 4)
//     : 0;
//   const conn2Opacity = scrollPct > 0.45
//     ? Math.min(phaseC * 4, 1) * (1 - Math.max(phaseD - 0.5, 0) * 4)
//     : 0;

//   const CONN_W = 64; // px

//   const activeStep = scrollPct < 0.35 ? 0 : scrollPct < 0.65 ? 1 : 2;

//   const parkingSlots = [
//     { color: null },
//     { color: "#facc15", shadow: "rgba(250,204,21,0.45)" },
//     { color: null },
//     { color: "linear-gradient(160deg,#a855f7,#7c3aed)", shadow: "rgba(168,85,247,0.45)" },
//     { color: "linear-gradient(160deg,#e2e8f0,#cbd5e1)", shadow: "rgba(200,213,225,0.18)" },
//     { color: "linear-gradient(160deg,#ef4444,#b91c1c)", shadow: "rgba(239,68,68,0.45)" },
//     { color: "linear-gradient(160deg,#f8fafc,#e2e8f0)", shadow: "rgba(248,250,252,0.18)" },
//     { color: "linear-gradient(160deg,#14b8a6,#0d9488)", shadow: "rgba(20,184,166,0.45)" },
//   ];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         body { background: #020c1b; color: white; font-family: 'Rajdhani', sans-serif; overflow-x: hidden; }

//         /* ── BACKGROUND ── */
//         .grid-bg {
//           position: fixed; inset: 0; pointer-events: none; z-index: 0;
//           background-image:
//             linear-gradient(rgba(0,180,255,0.028) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,180,255,0.028) 1px, transparent 1px);
//           background-size: 56px 56px;
//         }
//         .orb {
//           position: fixed; border-radius: 50%;
//           filter: blur(140px); pointer-events: none; z-index: 0;
//         }
//         .orb1 { width: 800px; height: 800px; background: rgba(0,70,200,0.11); top: -300px; left: -250px; }
//         .orb2 { width: 500px; height: 500px; background: rgba(0,180,255,0.07); bottom: -150px; right: 10%; }

//         /* ── LAYOUT ── */
//         .scroll-outer { height: 700vh; position: relative; }

//         .sticky {
//           position: sticky; top: 0; height: 100vh;
//           overflow: hidden; z-index: 1;
//         }

//         /* The row — slides left in phase D */
//         .panels-row {
//           display: flex;
//           align-items: center;
//           height: 100%;
//           /* width is dynamic — set via style */
//         }

//         /* ── PANEL ── */
//         .panel {
//           height: 100%;
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           position: relative;
//         }

//         /* ── CONNECTOR ── */
//         .connector {
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           position: relative;
//         }
//         .conn-line {
//           height: 2px;
//           width: 100%;
//           background: linear-gradient(90deg,
//             rgba(0,180,255,0.05),
//             rgba(0,220,255,0.9),
//             rgba(0,180,255,0.05));
//           position: relative;
//           overflow: visible;
//         }
//         .cdot {
//           position: absolute; top: 50%; transform: translateY(-50%);
//           width: 7px; height: 7px; border-radius: 50%;
//           background: #00d4ff; box-shadow: 0 0 10px #00d4ff;
//         }
//         .cdot.l { left: -1px; } .cdot.r { right: -1px; }
//         .pt {
//           position: absolute; top: 50%; transform: translateY(-50%);
//           width: 5px; height: 5px; border-radius: 50%;
//           background: #00f0ff; box-shadow: 0 0 8px #00f0ff;
//           animation: travelPt 1.9s linear infinite;
//         }
//         .pt:nth-child(3) { animation-delay: 0.63s; }
//         .pt:nth-child(4) { animation-delay: 1.26s; }
//         @keyframes travelPt {
//           from { left: 0%; opacity: 0; }
//           8% { opacity: 1; }
//           92% { opacity: 1; }
//           to { left: 100%; opacity: 0; }
//         }

//         /* ── UPLOAD CARD ── */
//         .upload-card {
//           background: rgba(255,255,255,0.025);
//           border: 1px solid rgba(0,180,255,0.18);
//           border-radius: 22px;
//           padding: 34px 30px;
//           backdrop-filter: blur(18px);
//           box-shadow: 0 0 50px rgba(0,100,255,0.09), inset 0 1px 0 rgba(255,255,255,0.045);
//           transition: border-color 0.3s;
//         }
//         .upload-card:hover { border-color: rgba(0,180,255,0.38); }

//         .file-icon {
//           width: 62px; height: 62px;
//           background: rgba(0,100,255,0.1);
//           border: 1px solid rgba(0,180,255,0.28);
//           border-radius: 15px;
//           display: flex; align-items: center; justify-content: center;
//           margin: 0 auto 14px;
//           animation: floatY 3s ease-in-out infinite;
//         }
//         @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }

//         .upload-btn {
//           width: 100%; padding: 13px 0;
//           background: linear-gradient(135deg, #0ea5e9, #2563eb);
//           border: none; border-radius: 12px;
//           color: white; font-family: 'Rajdhani', sans-serif;
//           font-size: 15px; font-weight: 700;
//           letter-spacing: 2px; text-transform: uppercase;
//           cursor: pointer;
//           box-shadow: 0 4px 22px rgba(14,165,233,0.38);
//           transition: opacity 0.2s, transform 0.15s;
//         }
//         .upload-btn:hover:not(:disabled) { opacity: 0.84; transform: translateY(-1px); }
//         .upload-btn:disabled { opacity: 0.38; cursor: default; }

//         .prog-bar { height: 3px; background: rgba(255,255,255,0.07); border-radius: 99px; overflow: hidden; margin-bottom: 5px; }
//         .prog-fill { height: 100%; background: linear-gradient(90deg, #0ea5e9, #38bdf8); border-radius: 99px; transition: width 0.12s; box-shadow: 0 0 5px #38bdf8; }

//         .done-badge {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.28);
//           color: #4ade80; border-radius: 99px;
//           padding: 5px 13px; font-size: 13px; font-weight: 600;
//         }

//         /* ── AI ENGINE ── */
//         .brain-wrap {
//           width: 168px; height: 168px;
//           margin: 0 auto 22px;
//           position: relative;
//           display: flex; align-items: center; justify-content: center;
//         }
//         .ring {
//           position: absolute; border-radius: 50%;
//           border: 1px solid rgba(0,180,255,0.32);
//           animation: ringP 2.3s ease-in-out infinite;
//         }
//         .ring:nth-child(1) { width: 168px; height: 168px; }
//         .ring:nth-child(2) { width: 128px; height: 128px; animation-delay: 0.45s; border-color: rgba(0,200,255,0.48); }
//         .ring:nth-child(3) { width: 88px; height: 88px; animation-delay: 0.9s; border-color: rgba(0,220,255,0.7); }
//         @keyframes ringP { 0%,100%{transform:scale(1);opacity:0.45} 50%{transform:scale(1.08);opacity:1} }

//         .brain-core {
//           width: 60px; height: 60px; z-index: 1;
//           background: radial-gradient(circle at 36% 36%, #00d4ff, #0044cc);
//           border-radius: 50%;
//           box-shadow: 0 0 34px rgba(0,200,255,0.65), 0 0 70px rgba(0,100,255,0.3);
//           display: flex; align-items: center; justify-content: center;
//           font-family: 'IBM Plex Mono', monospace;
//           font-size: 11px; font-weight: 600;
//           animation: coreP 1.7s ease-in-out infinite;
//         }
//         @keyframes coreP {
//           0%,100%{box-shadow:0 0 34px rgba(0,200,255,0.65),0 0 70px rgba(0,100,255,0.3)}
//           50%{box-shadow:0 0 58px rgba(0,230,255,0.95),0 0 110px rgba(0,140,255,0.5)}
//         }

//         .tags { display: flex; flex-wrap: wrap; gap: 7px; justify-content: center; margin-top: 18px; }
//         .tag {
//           font-family: 'IBM Plex Mono', monospace; font-size: 10px;
//           padding: 4px 11px; border-radius: 99px;
//           border: 1px solid rgba(0,180,255,0.2);
//           color: rgba(0,200,255,0.72);
//           background: rgba(0,100,255,0.07);
//           letter-spacing: 1px;
//           animation: tagF 3.2s ease-in-out infinite;
//         }
//         .tag:nth-child(2){animation-delay:0.5s}.tag:nth-child(3){animation-delay:1s}.tag:nth-child(4){animation-delay:1.5s}
//         @keyframes tagF { 0%,100%{opacity:0.45} 50%{opacity:1;border-color:rgba(0,220,255,0.5);color:#00e8ff} }

//         /* ── PARKING ── */
//         .parking-card {
//           width: 100%;
//           max-width: 420px;
//         }
//         .parking-bg {
//           background: linear-gradient(140deg, #071422 0%, #0c1e3a 55%, #092240 100%);
//           border-radius: 20px;
//           padding: 24px;
//           border: 1px solid rgba(0,100,255,0.18);
//           box-shadow: 0 0 60px rgba(0,80,200,0.1), 0 24px 50px rgba(0,0,0,0.45);
//           position: relative; overflow: hidden;
//         }
//         .parking-bg::before {
//           content: ''; position: absolute; inset: 0; pointer-events: none;
//           background: radial-gradient(ellipse at 50% -8%, rgba(0,100,255,0.1), transparent 58%);
//         }
//         .p-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 9px;
//           position: relative; z-index: 1;
//         }
//         .p-slot {
//           aspect-ratio: 0.55;
//           border: 1.5px dashed rgba(255,255,255,0.1);
//           border-radius: 8px;
//           display: flex; align-items: center; justify-content: center;
//           background: rgba(255,255,255,0.018);
//         }
//         .p-slot.occ { border-color: transparent; background: transparent; }
//         .car { width: 66%; aspect-ratio: 0.55; border-radius: 8px; position: relative; }
//         .car-w { position: absolute; top: 15%; left: 10%; right: 10%; height: 26%; background: rgba(0,0,0,0.34); border-radius: 3px; }
//         .car-b { position: absolute; bottom: 11%; left: 10%; right: 10%; height: 20%; background: rgba(0,0,0,0.21); border-radius: 3px; }

//         .p-header { display: flex; justify-content: space-between; margin-bottom: 10px; }
//         .legend { display: flex; gap: 13px; justify-content: center; margin-top: 14px; flex-wrap: wrap; }
//         .leg-item { display: flex; align-items: center; gap: 5px; font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: rgba(255,255,255,0.32); letter-spacing: 1px; }
//         .leg-dot { width: 7px; height: 7px; border-radius: 2px; }

//         @keyframes slotIn { from{opacity:0;transform:scale(0.5) translateY(12px)} to{opacity:1;transform:none} }

//         /* ── SHARED TEXT ── */
//         .step-lbl { font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:3px; color:rgba(0,180,255,0.6); text-transform:uppercase; margin-bottom:8px; }
//         .sec-title { font-size: clamp(20px, 2vw, 32px); font-weight: 700; letter-spacing: -0.4px; color: #fff; margin-bottom: 4px; line-height: 1.1; }
//         .sec-sub { font-size: 13px; color: rgba(255,255,255,0.36); font-weight: 500; margin-bottom: 22px; }

//         /* ── UI ── */
//         .pdots { position:fixed; bottom:24px; left:50%; transform:translateX(-50%); display:flex; gap:8px; z-index:100; }
//         .pdot { height:5px; border-radius:3px; border:1px solid rgba(0,180,255,0.28); background:rgba(255,255,255,0.1); transition: width 0.4s cubic-bezier(.4,0,.2,1), background 0.3s, box-shadow 0.3s; width:5px; }
//         .pdot.active { width:20px; background:#00b4ff; box-shadow:0 0 9px #00b4ff; border-color:#00b4ff; }

//         .scroll-hint { position:fixed; bottom:22px; right:24px; font-family:'IBM Plex Mono',monospace; font-size:9px; letter-spacing:2px; color:rgba(255,255,255,0.16); display:flex; align-items:center; gap:7px; z-index:100; animation:floatY 2.2s ease-in-out infinite; }

//         /* Divider line between panels */
//         .panel-divider {
//           width: 1px;
//           height: 50vh;
//           background: linear-gradient(to bottom, transparent, rgba(0,180,255,0.15), transparent);
//           flex-shrink: 0;
//         }
//       `}</style>

//       <div className="grid-bg" />
//       <div className="orb orb1" />
//       <div className="orb orb2" />

//       {/* Progress dots */}
//       <div className="pdots">
//         {[0,1,2].map(i => (
//           <div key={i} className={`pdot ${activeStep === i ? "active" : ""}`} />
//         ))}
//       </div>

//       {/* Scroll hint */}
//       <div className="scroll-hint">
//         <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//           <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//         </svg>
//         SCROLL
//       </div>

//       <div className="scroll-outer" ref={containerRef}>
//         <div className="sticky">
//           {/* Row that slides left in phase D */}
//           <div
//             className="panels-row"
//             style={{
//               transform: `translateX(${rowX}vw)`,
//               transition: "transform 0.06s linear",
//               width: `${p1w + p2w + p3w + (conn1Opacity > 0.01 ? CONN_W/window?.innerWidth*100 : 0) + (conn2Opacity > 0.01 ? CONN_W/window?.innerWidth*100 : 0)}vw`,
//               // simpler: just let it be auto
//               willChange: "transform",
//             }}
//           >

//             {/* ═══ PANEL 1: UPLOAD ═══ */}
//             <div
//               className="panel"
//               style={{
//                 width: `${p1w}vw`,
//                 transition: "width 0.06s linear",
//               }}
//             >
//               <div style={{
//                 width: 360,
//                 maxWidth: "calc(100% - 48px)",
//                 opacity: p1w < 4 ? 0 : 1,
//                 transition: "opacity 0.2s",
//               }}>
//                 <p className="step-lbl">01 — Input</p>
//                 <h2 className="sec-title">Upload Your File</h2>
//                 <p className="sec-sub">Drag &amp; drop or click to begin</p>

//                 <div className="upload-card">
//                   <div className="file-icon" style={uploadDone ? { animation: "none" } : {}}>
//                     {uploadDone ? (
//                       <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
//                         <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     ) : (
//                       <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
//                         <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
//                         <polyline points="17 8 12 3 7 8" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
//                         <line x1="12" y1="3" x2="12" y2="15" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
//                       </svg>
//                     )}
//                   </div>

//                   <p style={{ color:"rgba(255,255,255,0.72)", fontWeight:600, fontSize:14, textAlign:"center", fontFamily:"'IBM Plex Mono',monospace", marginBottom:3 }}>
//                     site-plan.dwx
//                   </p>
//                   <p style={{ color:"rgba(255,255,255,0.26)", fontSize:12, textAlign:"center", fontFamily:"'IBM Plex Mono',monospace", marginBottom:20 }}>
//                     DWX · 248 MB
//                   </p>

//                   {uploading && (
//                     <div style={{ marginBottom:14 }}>
//                       <div className="prog-bar">
//                         <div className="prog-fill" style={{ width:`${progress}%` }}/>
//                       </div>
//                       <p style={{ fontSize:10, color:"rgba(255,255,255,0.28)", marginTop:4, fontFamily:"'IBM Plex Mono',monospace", textAlign:"center" }}>
//                         {progress}%
//                       </p>
//                     </div>
//                   )}

//                   {uploadDone ? (
//                     <div style={{ textAlign:"center", marginBottom:14 }}>
//                       <span className="done-badge">
//                         <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//                           <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/>
//                         </svg>
//                         Upload Complete
//                       </span>
//                       <p style={{ color:"rgba(255,255,255,0.18)", fontSize:10, marginTop:8, fontFamily:"'IBM Plex Mono',monospace" }}>
//                         ↓ Scroll to continue
//                       </p>
//                     </div>
//                   ) : (
//                     <button onClick={handleUpload} disabled={uploading} className="upload-btn">
//                       {uploading ? `Uploading… ${progress}%` : "Upload File"}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Divider + Connector 1↔2 */}
//             {conn1Opacity > 0.01 && (
//               <div style={{ display:"flex", alignItems:"center", flexShrink:0, gap:0 }}>
//                 <div className="panel-divider" style={{ opacity: conn1Opacity }} />
//                 <div
//                   className="connector"
//                   style={{ width:`${CONN_W}px`, opacity: conn1Opacity, transition:"opacity 0.25s" }}
//                 >
//                   <div className="conn-line">
//                     <div className="cdot l"/><div className="cdot r"/>
//                     <div className="pt"/><div className="pt"/><div className="pt"/>
//                   </div>
//                 </div>
//                 <div className="panel-divider" style={{ opacity: conn1Opacity }} />
//               </div>
//             )}

//             {/* ═══ PANEL 2: AI ENGINE ═══ */}
//             <div
//               className="panel"
//               style={{
//                 width: `${p2w}vw`,
//                 transition: "width 0.06s linear",
//               }}
//             >
//               <div style={{
//                 width: 340,
//                 maxWidth: "calc(100% - 48px)",
//                 textAlign: "center",
//                 opacity: p2w < 5 ? 0 : 1,
//                 transform: `translateX(${p2w < 8 ? 28 : 0}px)`,
//                 transition: "opacity 0.3s, transform 0.4s cubic-bezier(.22,1,.36,1)",
//               }}>
//                 <p className="step-lbl">02 — Processing</p>
//                 <h2 className="sec-title">AI Engine</h2>
//                 <p className="sec-sub">Analyzing spatial layout data</p>

//                 <div className="brain-wrap">
//                   <div className="ring"/><div className="ring"/><div className="ring"/>
//                   <div className="brain-core">AI</div>
//                 </div>

//                 <div className="tags">
//                   <span className="tag">OBJECT DETECT</span>
//                   <span className="tag">SPATIAL MAP</span>
//                   <span className="tag">SLOT ANALYSIS</span>
//                   <span className="tag">LAYOUT GEN</span>
//                 </div>
//               </div>
//             </div>

//             {/* Divider + Connector 2↔3 */}
//             {conn2Opacity > 0.01 && (
//               <div style={{ display:"flex", alignItems:"center", flexShrink:0, gap:0 }}>
//                 <div className="panel-divider" style={{ opacity: conn2Opacity }} />
//                 <div
//                   className="connector"
//                   style={{ width:`${CONN_W}px`, opacity: conn2Opacity, transition:"opacity 0.25s" }}
//                 >
//                   <div className="conn-line">
//                     <div className="cdot l"/><div className="cdot r"/>
//                     <div className="pt"/><div className="pt"/><div className="pt"/>
//                   </div>
//                 </div>
//                 <div className="panel-divider" style={{ opacity: conn2Opacity }} />
//               </div>
//             )}

//             {/* ═══ PANEL 3: PARKING OUTPUT ═══ */}
//             <div
//               className="panel"
//               style={{
//                 width: `${p3w}vw`,
//                 transition: "width 0.06s linear",
//               }}
//             >
//               <div style={{
//                 width: 380,
//                 maxWidth: "calc(100% - 32px)",
//                 opacity: p3w < 5 ? 0 : 1,
//                 transform: `translateX(${p3w < 8 ? 36 : 0}px)`,
//                 transition: "opacity 0.3s, transform 0.4s cubic-bezier(.22,1,.36,1)",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}>
//                 <p className="step-lbl">03 — Output</p>
//                 <h2 className="sec-title">Parking Layout</h2>
//                 <p className="sec-sub">Car parking &amp; driveway design detected</p>

//                 <div className="parking-card">
//                   <div className="parking-bg">
//                     <div className="p-header">
//                       <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:9, color:"rgba(255,255,255,0.2)", letterSpacing:2 }}>ROW A</span>
//                       <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:9, color:"rgba(0,180,255,0.5)", letterSpacing:2 }}>6 / 8 OCCUPIED</span>
//                     </div>

//                     <div className="p-grid">
//                       {parkingSlots.map((slot, i) =>
//                         slot.color === null ? (
//                           <div key={i} className="p-slot"
//                             style={{ animation: p3w > 12 ? `slotIn 0.38s ${i*0.055}s ease both` : "none" }}
//                           >
//                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ opacity:0.16 }}>
//                               <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="1.5" strokeDasharray="3 2"/>
//                             </svg>
//                           </div>
//                         ) : (
//                           <div key={i} className="p-slot occ"
//                             style={{ animation: p3w > 12 ? `slotIn 0.38s ${i*0.055}s ease both` : "none" }}
//                           >
//                             <div className="car" style={{ background:slot.color, boxShadow:`0 3px 10px ${slot.shadow}` }}>
//                               <div className="car-w"/><div className="car-b"/>
//                             </div>
//                           </div>
//                         )
//                       )}
//                     </div>

//                     <div className="legend">
//                       <div className="leg-item">
//                         <div className="leg-dot" style={{ background:"#0ea5e9" }}/>OCCUPIED
//                       </div>
//                       <div className="leg-item">
//                         <div className="leg-dot" style={{ border:"1.5px dashed rgba(255,255,255,0.2)", background:"transparent" }}/>AVAILABLE
//                       </div>
//                       <div className="leg-item">
//                         <div className="leg-dot" style={{ background:"#4ade80", borderRadius:"50%" }}/>AI DETECTED
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>{/* end panels-row */}
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function HorizontalScrollPage() {
//   const containerRef = useRef(null);
//   const [scrollPct, setScrollPct] = useState(0);
//   const [uploadDone, setUploadDone] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const container = containerRef.current;
//       if (!container) return;
//       const maxScroll = container.scrollHeight - window.innerHeight;
//       const pct = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
//       setScrollPct(pct);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleUpload = () => {
//     if (uploading || uploadDone) return;
//     setUploading(true);
//     let p = 0;
//     const iv = setInterval(() => {
//       p += Math.random() * 10 + 4;
//       if (p >= 100) {
//         clearInterval(iv);
//         setProgress(100);
//         setTimeout(() => {
//           setUploading(false);
//           setUploadDone(true);
//         }, 400);
//       } else {
//         setProgress(Math.floor(p));
//       }
//     }, 120);
//   };

//   const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

//   // PHASES (scroll 0→1 maps to 0→500vh):
//   // 0.00–0.30 : Panel 1 only (full screen, sticky)
//   // 0.30–0.55 : Panel 2 slides in → both 50/50
//   // 0.55–0.80 : Panel 3 slides in → all three 33.33vw each
//   // 0.80–1.00 : sticky ends, section scrolls up naturally (handled by scroll-outer height)

//   const phaseB = ease(Math.min(Math.max((scrollPct - 0.3) / 0.25, 0), 1));
//   const phaseC = ease(Math.min(Math.max((scrollPct - 0.55) / 0.25, 0), 1));

//   const THIRD = 100 / 3;

//   let p1w, p2w, p3w;
//   if (scrollPct <= 0.3) {
//     p1w = 100;
//     p2w = 0;
//     p3w = 0;
//   } else if (scrollPct <= 0.55) {
//     p1w = 100 - phaseB * 50;
//     p2w = phaseB * 50;
//     p3w = 0;
//   } else {
//     p1w = 50 - phaseC * (50 - THIRD);
//     p2w = 50 - phaseC * (50 - THIRD);
//     p3w = phaseC * THIRD;
//   }

//   // Connector opacity
//   const conn1 = scrollPct > 0.3 ? Math.min(phaseB * 3, 1) : 0;
//   const conn2 = scrollPct > 0.55 ? Math.min(phaseC * 3, 1) : 0;

//   const activeStep = scrollPct < 0.4 ? 0 : scrollPct < 0.7 ? 1 : 2;

//   const parkingSlots = [
//     { color: null },
//     { color: "#facc15", shadow: "rgba(250,204,21,0.45)" },
//     { color: null },
//     {
//       color: "linear-gradient(160deg,#a855f7,#7c3aed)",
//       shadow: "rgba(168,85,247,0.45)",
//     },
//     {
//       color: "linear-gradient(160deg,#e2e8f0,#cbd5e1)",
//       shadow: "rgba(200,213,225,0.18)",
//     },
//     {
//       color: "linear-gradient(160deg,#ef4444,#b91c1c)",
//       shadow: "rgba(239,68,68,0.45)",
//     },
//     {
//       color: "linear-gradient(160deg,#f8fafc,#e2e8f0)",
//       shadow: "rgba(248,250,252,0.18)",
//     },
//     {
//       color: "linear-gradient(160deg,#14b8a6,#0d9488)",
//       shadow: "rgba(20,184,166,0.45)",
//     },
//   ];

//   return (
//     <>
//       <style>{`
//         body { background: black; color: white
//         .grid-bg {
//           position: fixed; inset: 0; pointer-events: none; z-index: 0;
//           background-image:
//             linear-gradient(rgba(0,180,255,0.028) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,180,255,0.028) 1px, transparent 1px);
//           background-size: 56px 56px;
//         }
//         .orb { position: fixed; border-radius: 50%; filter: blur(140px); pointer-events: none; z-index: 0; }
//         .orb1 { width: 800px; height: 800px; background: rgba(0,70,200,0.11); top: -300px; left: -250px; }
//         .orb2 { width: 500px; height: 500px; background: rgba(0,180,255,0.07); bottom: -150px; right: 10%; }

//         /*
//           scroll-outer height controls how long panels stay sticky.
//           The sticky section pins for 400vh, then page scrolls normally.
//         */
//         .scroll-outer {
//           height: 500vh;
//           position: relative;
//         }

//         /* sticky wrapper — pins for the first 400vh of scroll-outer */
//         .sticky-wrap {
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           overflow: hidden;
//           z-index: 1;
//         }

//         /* After sticky ends (scroll-outer height - 100vh = 400vh scroll done),
//            the scroll-outer continues scrolling the sticky-wrap up naturally */

//         .panels-row {
//           display: flex;
//           align-items: center;
//           height: 100%;
//           width: 100%;
//         }

//         .panel {
//           height: 100%;
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           position: relative;
//           /* Subtle right border when neighbours exist */
//         }

//         .panel-sep {
//           width: 1px;
//           height: 45vh;
//           flex-shrink: 0;
//           background: linear-gradient(to bottom,
//             transparent,
//             rgba(0,180,255,0.12) 30%,
//             rgba(0,180,255,0.12) 70%,
//             transparent);
//           transition: opacity 0.4s;
//         }

//         /* CONNECTOR */
//         .connector {
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           overflow: visible;
//         }
//         .conn-line {
//           height: 2px;
//           width: 100%;
//           background: linear-gradient(90deg,
//             rgba(0,200,255,0.05),
//             rgba(0,220,255,0.9),
//             rgba(0,200,255,0.05));
//           position: relative;
//           overflow: visible;
//         }
//         .cdot {
//           position: absolute; top: 50%; transform: translateY(-50%);
//           width: 7px; height: 7px; border-radius: 50%;
//           background: #00d4ff; box-shadow: 0 0 9px #00d4ff;
//         }
//         .cdot.l { left: -2px; } .cdot.r { right: -2px; }
//         .pt {
//           position: absolute; top: 50%; transform: translateY(-50%);
//           width: 5px; height: 5px; border-radius: 50%;
//           background: #00f0ff; box-shadow: 0 0 7px #00f0ff;
//           animation: travelPt 1.9s linear infinite;
//         }
//         .pt:nth-child(3){animation-delay:0.63s} .pt:nth-child(4){animation-delay:1.26s}
//         @keyframes travelPt {
//           from{left:0%;opacity:0} 8%{opacity:1} 92%{opacity:1} to{left:100%;opacity:0}
//         }

//         /* UPLOAD */
//         .upload-card {
//           background: rgba(255,255,255,0.025);
//           border: 1px solid rgba(0,180,255,0.18);
//           border-radius: 22px; padding: 34px 30px;
//           backdrop-filter: blur(18px);
//           box-shadow: 0 0 50px rgba(0,100,255,0.09), inset 0 1px 0 rgba(255,255,255,0.045);
//           transition: border-color 0.3s;
//         }
//         .upload-card:hover { border-color: rgba(0,180,255,0.35); }

//         .file-icon {
//           width: 62px; height: 62px;
//           background: rgba(0,100,255,0.1);
//           border: 1px solid rgba(0,180,255,0.28);
//           border-radius: 15px;
//           display: flex; align-items: center; justify-content: center;
//           margin: 0 auto 14px;
//           animation: floatY 3s ease-in-out infinite;
//         }
//         @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }

//         .upload-btn {
//           width: 100%; padding: 13px 0;
//           background: linear-gradient(135deg, #0ea5e9, #2563eb);
//           border: none; border-radius: 12px; color: white;
//           font-family: 'Rajdhani', sans-serif;
//           font-size: 15px; font-weight: 700;
//           letter-spacing: 2px; text-transform: uppercase;
//           cursor: pointer;
//           box-shadow: 0 4px 22px rgba(14,165,233,0.38);
//           transition: opacity 0.2s, transform 0.15s;
//         }
//         .upload-btn:hover:not(:disabled) { opacity: 0.84; transform: translateY(-1px); }
//         .upload-btn:disabled { opacity: 0.38; cursor: default; }

//         .prog-bar { height: 3px; background: rgba(255,255,255,0.07); border-radius: 99px; overflow: hidden; margin-bottom: 5px; }
//         .prog-fill { height: 100%; background: linear-gradient(90deg,#0ea5e9,#38bdf8); border-radius: 99px; transition: width 0.12s; box-shadow: 0 0 5px #38bdf8; }
//         .done-badge {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.28);
//           color: #4ade80; border-radius: 99px;
//           padding: 5px 13px; font-size: 13px; font-weight: 600;
//         }

//         /* AI ENGINE */
//         .brain-wrap {
//           width: 168px; height: 168px;
//           margin: 0 auto 22px;
//           position: relative;
//           display: flex; align-items: center; justify-content: center;
//         }
//         .ring {
//           position: absolute; border-radius: 50%;
//           border: 1px solid rgba(0,180,255,0.32);
//           animation: ringP 2.3s ease-in-out infinite;
//         }
//         .ring:nth-child(1){width:168px;height:168px}
//         .ring:nth-child(2){width:128px;height:128px;animation-delay:0.45s;border-color:rgba(0,200,255,0.48)}
//         .ring:nth-child(3){width:88px;height:88px;animation-delay:0.9s;border-color:rgba(0,220,255,0.7)}
//         @keyframes ringP { 0%,100%{transform:scale(1);opacity:0.45} 50%{transform:scale(1.08);opacity:1} }

//         .brain-core {
//           width: 60px; height: 60px; z-index: 1;
//           background: radial-gradient(circle at 36% 36%, #00d4ff, #0044cc);
//           border-radius: 50%;
//           box-shadow: 0 0 34px rgba(0,200,255,0.65),0 0 70px rgba(0,100,255,0.3);
//           display: flex; align-items: center; justify-content: center;
//           font-family: 'IBM Plex Mono',monospace; font-size: 11px; font-weight: 600;
//           animation: coreP 1.7s ease-in-out infinite;
//         }
//         @keyframes coreP {
//           0%,100%{box-shadow:0 0 34px rgba(0,200,255,0.65),0 0 70px rgba(0,100,255,0.3)}
//           50%{box-shadow:0 0 58px rgba(0,230,255,0.95),0 0 110px rgba(0,140,255,0.5)}
//         }

//         .tags { display:flex; flex-wrap:wrap; gap:7px; justify-content:center; margin-top:18px; }
//         .tag {
//           font-family:'IBM Plex Mono',monospace; font-size:10px;
//           padding:4px 11px; border-radius:99px;
//           border:1px solid rgba(0,180,255,0.2); color:rgba(0,200,255,0.72);
//           background:rgba(0,100,255,0.07); letter-spacing:1px;
//           animation:tagF 3.2s ease-in-out infinite;
//         }
//         .tag:nth-child(2){animation-delay:0.5s}.tag:nth-child(3){animation-delay:1s}.tag:nth-child(4){animation-delay:1.5s}
//         @keyframes tagF{0%,100%{opacity:0.45}50%{opacity:1;border-color:rgba(0,220,255,0.5);color:#00e8ff}}

//         /* PARKING */
//         .parking-bg {
//           background: linear-gradient(140deg,#071422 0%,#0c1e3a 55%,#092240 100%);
//           border-radius: 20px; padding: 24px;
//           border: 1px solid rgba(0,100,255,0.18);
//           box-shadow: 0 0 60px rgba(0,80,200,0.1),0 24px 50px rgba(0,0,0,0.45);
//           position: relative; overflow: hidden;
//           width: 100%;
//         }
//         .parking-bg::before {
//           content:''; position:absolute; inset:0; pointer-events:none;
//           background:radial-gradient(ellipse at 50% -8%,rgba(0,100,255,0.1),transparent 58%);
//         }
//         .p-grid {
//           display:grid; grid-template-columns:repeat(4,1fr);
//           gap:9px; position:relative; z-index:1;
//         }
//         .p-slot {
//           aspect-ratio:0.55; border:1.5px dashed rgba(255,255,255,0.1);
//           border-radius:8px; display:flex; align-items:center; justify-content:center;
//           background:rgba(255,255,255,0.018);
//         }
//         .p-slot.occ{border-color:transparent;background:transparent}
//         .car{width:66%;aspect-ratio:0.55;border-radius:8px;position:relative}
//         .car-w{position:absolute;top:15%;left:10%;right:10%;height:26%;background:rgba(0,0,0,0.34);border-radius:3px}
//         .car-b{position:absolute;bottom:11%;left:10%;right:10%;height:20%;background:rgba(0,0,0,0.21);border-radius:3px}
//         .p-header{display:flex;justify-content:space-between;margin-bottom:10px}
//         .legend{display:flex;gap:13px;justify-content:center;margin-top:14px;flex-wrap:wrap}
//         .leg-item{display:flex;align-items:center;gap:5px;font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(255,255,255,0.32);letter-spacing:1px}
//         .leg-dot{width:7px;height:7px;border-radius:2px}
//         @keyframes slotIn{from{opacity:0;transform:scale(0.5) translateY(10px)}to{opacity:1;transform:none}}

//         /* SHARED */
//         .step-lbl{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:3px;color:rgba(0,180,255,0.6);text-transform:uppercase;margin-bottom:8px}
//         .sec-title{font-size:clamp(20px,2vw,32px);font-weight:700;letter-spacing:-0.4px;color:#fff;margin-bottom:4px;line-height:1.1}
//         .sec-sub{font-size:13px;color:rgba(255,255,255,0.36);font-weight:500;margin-bottom:22px}

//         .pdots{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);display:flex;gap:8px;z-index:100}
//         .pdot{height:5px;border-radius:3px;border:1px solid rgba(0,180,255,0.28);background:rgba(255,255,255,0.1);transition:width 0.4s cubic-bezier(.4,0,.2,1),background 0.3s,box-shadow 0.3s;width:5px}
//         .pdot.active{width:20px;background:#00b4ff;box-shadow:0 0 9px #00b4ff;border-color:#00b4ff}

//         .scroll-hint{position:fixed;bottom:22px;right:24px;font-family:'IBM Plex Mono',monospace;font-size:9px;letter-spacing:2px;color:rgba(255,255,255,0.16);display:flex;align-items:center;gap:7px;z-index:100;animation:floatY 2.2s ease-in-out infinite}
//       `}</style>

//       <div className="grid-bg" />
//       <div className="orb orb1" />
//       <div className="orb orb2" />

//       {/* <div className="pdots">
//         {[0,1,2].map(i => (
//           <div key={i} className={`pdot ${activeStep === i ? "active" : ""}`} />
//         ))}
//       </div> */}

//       {/* <div className="scroll-hint">
//         <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//           <path
//             d="M12 5v14M5 12l7 7 7-7"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//           />
//         </svg>
//         SCROLL
//       </div> */}

//       {/*
//         scroll-outer: 500vh total
//         sticky-wrap pins for first 400vh of scroll distance,
//         then the section naturally scrolls up for the last 100vh
//       */}
//       <div className="scroll-outer" ref={containerRef} style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
//             backgroundRepeat: "repeat",
//             backgroundSize: "120px 120px",
//       }}>
//         <div className="sticky-wrap">
//           <div className="panels-row">
//             {/* ═══ PANEL 1: UPLOAD ═══ */}
//             <div
//               className="panel"
//               style={{
//                 width: `${p1w}vw`,
//                 transition: "width 0.06s linear",
//               }}
//             >
//               <div
//                 style={{
//                   width: 350,
//                   maxWidth: "calc(100% - 48px)",
//                   opacity: p1w < 4 ? 0 : 1,
//                   transition: "opacity 0.2s",

//                 }}
//               >
//                 {/* <p className="step-lbl">01 — Input</p> */}
//                 <h2 className="sec-title">Upload Your File</h2>
//                 <p className="sec-sub">Drag &amp; drop or click to begin</p>

//                 <img src="/image/upload2.gif"/>
//               </div>
//             </div>

//             {/* Sep + Connector 1↔2 */}
//             {/* {conn1 > 0.01 && (
//               <>
//                 <div className="panel-sep" style={{ opacity: conn1 }} />
//                 <div
//                   className="connector"
//                   style={{
//                     width: "30px",
//                     opacity: conn1,
//                     transition: "opacity 0.3s",
//                   }}
//                 >
//                   <div className="conn-line">
//                     <div className="cdot l" />
//                     <div className="cdot r" />
//                     <div className="pt" />
//                     <div className="pt" />
//                     <div className="pt" />
//                   </div>
//                 </div>
//                 <div className="panel-sep" style={{ opacity: conn1 }} />
//               </>
//             )} */}

//             {/* ═══ PANEL 2: AI ENGINE ═══ */}
//             <div
//               className="panel"
//               style={{
//                 width: `${p2w}vw`,
//                 transition: "width 0.06s linear",
//               }}
//             >
//               <div
//                 style={{
//                   width:250,
//                   maxWidth: "calc(100% - 48px)",
//                   textAlign: "center",
//                   opacity: p2w < 5 ? 0 : 1,
//                   transform: `translateX(${p2w < 10 ? 24 : 0}px)`,
//                   transition:
//                     "opacity 0.3s, transform 0.45s cubic-bezier(.22,1,.36,1)",

//                 }}
//               >
//                 {/* <p className="step-lbl">02 — Processing</p> */}
//                 <h2 className="sec-title">AI Engine</h2>
//                 <p className="sec-sub">Analyzing spatial layout data</p>

//                   <img src="/image/ai.gif"/>
//                 <div className="tags">
//                   <span className="tag">OBJECT DETECT</span>
//                   <span className="tag">SPATIAL MAP</span>
//                   <span className="tag">SLOT ANALYSIS</span>
//                   <span className="tag">LAYOUT GEN</span>
//                 </div>
//               </div>
//             </div>

//             {/* Sep + Connector 2↔3 */}
//             {/* {conn2 > 0.01 && (
//               <>
//                 <div className="panel-sep" style={{ opacity: conn2 }} />
//                 <div
//                   className="connector"
//                   style={{
//                     width: "30px",
//                     opacity: conn2,
//                     transition: "opacity 0.3s",
//                   }}
//                 >
//                   <div className="conn-line">
//                     <div className="cdot l" />
//                     <div className="cdot r" />
//                     <div className="pt" />
//                     <div className="pt" />
//                     <div className="pt" />
//                   </div>
//                 </div>
//                 <div className="panel-sep" style={{ opacity: conn2 }} />
//               </>
//             )} */}

//             {/* ═══ PANEL 3: PARKING OUTPUT ═══ */}
//             <div
//               className="panel"
//               style={{
//                 width: `${p3w}vw`,
//                 transition: "width 0.06s linear",
//               }}
//             >
//               <div
//                 style={{
//                   width: 380,
//                   maxWidth: "calc(100% - 32px)",
//                   opacity: p3w < 5 ? 0 : 1,
//                   transform: `translateX(${p3w < 10 ? 30 : 0}px)`,
//                   transition:
//                     "opacity 0.3s, transform 0.45s cubic-bezier(.22,1,.36,1)",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}
//               >
//                 {/* <p className="step-lbl">03 — Output</p> */}
//                 <h2 className="sec-title">Parking Layout</h2>
//                 <p className="sec-sub">
//                   Car parking &amp; driveway design detected
//                 </p>
//                 <img src="/image/parking.gif"/>

//               </div>
//             </div>
//           </div>

//         </div>

//       </div>

//     </>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function HorizontalScrollPage() {
//   const containerRef = useRef(null);
//   const [scrollPct, setScrollPct] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const container = containerRef.current;
//       if (!container) return;
//       const maxScroll = container.scrollHeight - window.innerHeight;
//       const pct = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
//       setScrollPct(pct);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

//   // PHASES:
//   // 0.00–0.25 : All panels shown at equal 33.33vw (intro state)
//   // 0.25–0.55 : Panel 1 expands to full, panels 2 & 3 collapse
//   // 0.55–1.00 : Panel 1 shrinks, panels come back equally

//   // Simpler approach: panels always equal width (33.33vw each)
//   // Scroll animates CONTENT within each panel: fade, scale, translate
//   // Each panel activates at different scroll positions

//   const THIRD = 100 / 3;

//   // Panel reveal progress (0 → 1)
//   const p1Progress = ease(Math.min(Math.max(scrollPct / 0.28, 0), 1));
//   const p2Progress = ease(Math.min(Math.max((scrollPct - 0.3) / 0.28, 0), 1));
//   const p3Progress = ease(Math.min(Math.max((scrollPct - 0.6) / 0.28, 0), 1));

//   const activeStep = scrollPct < 0.35 ? 0 : scrollPct < 0.65 ? 1 : 2;

//   return (
//     <>
//       <style>{`
//         // @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap');

//         // *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         body {
//           background: #020509;
//           // color: white;
//           // font-family: 'Syne', sans-serif;
//           // overflow-x: hidden;
//         }

//         /* ── AMBIENT BACKGROUND ── */
//         .grid-bg {
//           // position: fixed; inset: 0; pointer-events: none; z-index: 0;
//           // background-image:
//           //   linear-gradient(rgba(0,180,255,0.022) 1px, transparent 1px),
//           //   linear-gradient(90deg, rgba(0,180,255,0.022) 1px, transparent 1px);
//           // background-size: 64px 64px;
//         }

//         .orb {
//           position: fixed; border-radius: 50%;
//           filter: blur(120px); pointer-events: none; z-index: 0;
//         }
//         .orb1 { width: 700px; height: 700px; background: rgba(0,60,180,0.13); top: -200px; left: -200px; }
//         .orb2 { width: 500px; height: 500px; background: rgba(0,160,255,0.08); bottom: -100px; right: 5%; }
//         .orb3 { width: 400px; height: 400px; background: rgba(100,0,255,0.06); top: 30%; left: 40%; }

//         /* ── SCROLL CONTAINER ── */
//         .scroll-outer {
//           height: 500vh;
//           position: relative;
//         }

//         .sticky-wrap {
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           overflow: hidden;
//           z-index: 1;
//           display: flex;
//           flex-direction: column;
//         }

//         /* ── TOP HEADER BAR ── */
//         .header-bar {
//           position: relative;
//           z-index: 10;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 18px 32px;
//           border-bottom: 1px solid rgba(0,180,255,0.07);
//           background: rgba(2,5,9,0.6);
//           backdrop-filter: blur(20px);
//           flex-shrink: 0;
//         }

//         .logo-text {
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 11px;
//           font-weight: 600;
//           letter-spacing: 4px;
//           color: rgba(0,180,255,0.7);
//           text-transform: uppercase;
//         }

//         .header-steps {
//           display: flex;
//           align-items: center;
//           gap: 0;
//         }

//         .h-step {
//           display: flex;
//           align-items: center;
//           gap: 9px;
//           padding: 6px 16px;
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 10px;
//           font-weight: 500;
//           letter-spacing: 2px;
//           color: rgba(255,255,255,0.2);
//           text-transform: uppercase;
//           transition: color 0.5s ease;
//           position: relative;
//         }

//         .h-step.active {
//           color: rgba(0,200,255,0.9);
//         }

//         .h-step-num {
//           width: 20px; height: 20px;
//           border-radius: 50%;
//           border: 1px solid rgba(255,255,255,0.1);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 9px;
//           transition: all 0.5s ease;
//           flex-shrink: 0;
//         }

//         .h-step.active .h-step-num {
//           border-color: rgba(0,200,255,0.6);
//           background: rgba(0,200,255,0.1);
//           color: #00d4ff;
//           box-shadow: 0 0 12px rgba(0,200,255,0.25);
//         }

//         .h-sep {
//           width: 32px; height: 1px;
//           background: rgba(255,255,255,0.06);
//         }

//         /* ── PANELS ROW ── */
//         .panels-row {
//           display: flex;
//           align-items: stretch;
//           flex: 1;
//           min-height: 0;
//         }

//         /* ── INDIVIDUAL PANEL ── */
//         .panel {
//           width: 33.333vw;
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           position: relative;
//           padding: 32px;
//         }

//         /* Vertical dividers between panels */
//         .panel:not(:last-child)::after {
//           content: '';
//           position: absolute;
//           right: 0; top: 10%; bottom: 10%;
//           width: 1px;
//           background: linear-gradient(
//             to bottom,
//             transparent,
//             rgba(0,180,255,0.1) 30%,
//             rgba(0,180,255,0.1) 70%,
//             transparent
//           );
//         }

//         /* ── PANEL CONTENT WRAPPER ── */
//         .panel-inner {
//           width: 100%;
//           max-width: 340px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           gap: 0;
//         }

//         /* ── SHARED TEXT STYLES ── */
//         .step-label {
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 9px;
//           font-weight: 500;
//           letter-spacing: 4px;
//           color: rgba(0,180,255,0.5);
//           text-transform: uppercase;
//           margin-bottom: 10px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .step-label::before, .step-label::after {
//           content: '';
//           width: 18px; height: 1px;
//           background: rgba(0,180,255,0.3);
//         }

//         .panel-title {
//           font-size: clamp(22px, 2.2vw, 34px);
//           font-weight: 800;
//           letter-spacing: -0.5px;
//           color: #ffffff;
//           line-height: 1.1;
//           margin-bottom: 8px;
//         }

//         .panel-sub {
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 11px;
//           color: rgba(255,255,255,0.3);
//           font-weight: 400;
//           margin-bottom: 28px;
//           letter-spacing: 0.3px;
//         }

//         /* ── GIF / MEDIA FRAME ── */
//         .media-frame {
//           width: 100%;
//           aspect-ratio: 1;
//           max-width: 240px;
//           border-radius: 20px;
//           overflow: hidden;
//           position: relative;
//           margin-bottom: 24px;
//           border: 1px solid rgba(0,180,255,0.12);
//           box-shadow:
//             0 0 0 1px rgba(0,180,255,0.05),
//             0 20px 60px rgba(0,0,0,0.5),
//             inset 0 1px 0 rgba(255,255,255,0.04);
//           background: rgba(255,255,255,0.02);
//         }

//         .media-frame img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* Corner accents on frame */
//         .media-frame::before,
//         .media-frame::after {
//           content: '';
//           position: absolute;
//           width: 14px; height: 14px;
//           z-index: 2;
//         }
//         .media-frame::before {
//           top: 8px; left: 8px;
//           border-top: 1.5px solid rgba(0,200,255,0.5);
//           border-left: 1.5px solid rgba(0,200,255,0.5);
//           border-radius: 3px 0 0 0;
//         }
//         .media-frame::after {
//           bottom: 8px; right: 8px;
//           border-bottom: 1.5px solid rgba(0,200,255,0.5);
//           border-right: 1.5px solid rgba(0,200,255,0.5);
//           border-radius: 0 0 3px 0;
//         }

//         /* ── STATUS BADGE ── */
//         .status-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 7px;
//           padding: 7px 14px;
//           border-radius: 99px;
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 10px;
//           font-weight: 500;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           border: 1px solid rgba(0,180,255,0.2);
//           background: rgba(0,100,255,0.07);
//           color: rgba(0,200,255,0.7);
//         }

//         .status-dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: #00d4ff;
//           box-shadow: 0 0 8px #00d4ff;
//           animation: dotPulse 2s ease-in-out infinite;
//         }

//         @keyframes dotPulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.4; transform: scale(0.7); }
//         }

//         /* ── TAGS ── */
//         .tags-row {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 6px;
//           justify-content: center;
//           margin-top: 16px;
//         }

//         .tag {
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 9px;
//           padding: 4px 10px;
//           border-radius: 4px;
//           border: 1px solid rgba(0,180,255,0.15);
//           color: rgba(0,200,255,0.55);
//           background: rgba(0,100,255,0.05);
//           letter-spacing: 1.5px;
//           animation: tagFade 3s ease-in-out infinite;
//         }
//         .tag:nth-child(2) { animation-delay: 0.4s; }
//         .tag:nth-child(3) { animation-delay: 0.8s; }
//         .tag:nth-child(4) { animation-delay: 1.2s; }

//         @keyframes tagFade {
//           0%, 100% { opacity: 0.45; }
//           50% { opacity: 1; border-color: rgba(0,220,255,0.4); color: #00d4ff; }
//         }

//         /* ── PROGRESS DOTS ── */
//         .pdots {
//           position: fixed;
//           bottom: 28px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           gap: 8px;
//           z-index: 100;
//         }

//         .pdot {
//           height: 4px;
//           border-radius: 2px;
//           background: rgba(255,255,255,0.1);
//           border: 1px solid rgba(0,180,255,0.2);
//           transition: width 0.5s cubic-bezier(.4,0,.2,1), background 0.4s, box-shadow 0.4s;
//           width: 4px;
//         }

//         .pdot.active {
//           width: 24px;
//           background: #00b4ff;
//           box-shadow: 0 0 10px rgba(0,180,255,0.6);
//           border-color: #00b4ff;
//         }

//         /* ── SCROLL INDICATOR ── */
//         .scroll-track {
//           position: fixed;
//           right: 24px;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 2px;
//           height: 120px;
//           background: rgba(255,255,255,0.05);
//           border-radius: 1px;
//           z-index: 100;
//           overflow: hidden;
//         }

//         .scroll-fill {
//           width: 100%;
//           background: linear-gradient(to bottom, #00b4ff, #0060ff);
//           border-radius: 1px;
//           box-shadow: 0 0 8px rgba(0,180,255,0.5);
//           transition: height 0.1s linear;
//         }

//         /* ── PANEL ANIMATION STATES ── */
//         /* Each panel content animates in based on its progress prop via inline styles */

//       `}</style>

//       {/* Ambient BG */}
//       <div className="grid-bg" />
//       <div className="orb orb1" />
//       <div className="orb orb2" />
//       <div className="orb orb3" />

//       {/* Progress dots */}
//       <div className="pdots">
//         {[0, 1, 2].map(i => (
//           <div key={i} className={`pdot ${activeStep === i ? "active" : ""}`} />
//         ))}
//       </div>

//       {/* Scroll track */}
//       <div className="scroll-track">
//         <div className="scroll-fill" style={{ height: `${scrollPct * 100}%` }} />
//       </div>

//       {/* Main scroll container */}
//       <div className="scroll-outer" ref={containerRef}>
//         <div className="sticky-wrap">

//           {/* Header bar */}
//           <div className="header-bar">
//             <div className="logo-text">ParkAI · System</div>
//             <div className="header-steps">
//               {[
//                 { num: "01", label: "Upload" },
//                 { num: "02", label: "Process" },
//                 { num: "03", label: "Output" },
//               ].map((s, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center" }}>
//                   {i > 0 && <div className="h-sep" />}
//                   <div className={`h-step ${activeStep === i ? "active" : ""}`}>
//                     <div className="h-step-num">{s.num}</div>
//                     {s.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div style={{
//               fontFamily: "'JetBrains Mono', monospace",
//               fontSize: "10px",
//               color: "rgba(0,180,255,0.35)",
//               letterSpacing: "2px"
//             }}>
//               {Math.round(scrollPct * 100)}% SCANNED
//             </div>
//           </div>

//           {/* Panels row — all always equal 33.33vw */}
//           <div className="panels-row">

//             {/* ═══ PANEL 1: UPLOAD ═══ */}
//             <div className="panel">
//               <div
//                 className="panel-inner"
//                 style={{
//                   opacity: p1Progress,
//                   transform: `translateY(${(1 - p1Progress) * 28}px)`,
//                   transition: "none",
//                 }}
//               >
//                 <div className="step-label">01 — Input</div>
//                 <h2 className="panel-title">Upload Your File</h2>
//                 <p className="panel-sub">Drag & drop or click to begin</p>

//                 <div className="media-frame">
//                   <img src="/image/upload2.gif" alt="Upload" />
//                 </div>

//                 <div className="status-badge">
//                   <div className="status-dot" />
//                   Ready to Accept
//                 </div>
//               </div>
//             </div>

//             {/* ═══ PANEL 2: AI ENGINE ═══ */}
//             <div className="panel">
//               <div
//                 className="panel-inner"
//                 style={{
//                   opacity: p2Progress,
//                   transform: `translateY(${(1 - p2Progress) * 28}px)`,
//                   transition: "none",
//                 }}
//               >
//                 <div className="step-label">02 — Processing</div>
//                 <h2 className="panel-title">AI Engine</h2>
//                 <p className="panel-sub">Analysing spatial layout data</p>

//                 <div className="media-frame">
//                   <img src="/image/ai.gif" alt="AI Engine" />
//                 </div>

//                 <div className="tags-row">
//                   <span className="tag">OBJECT DETECT</span>
//                   <span className="tag">SPATIAL MAP</span>
//                   <span className="tag">SLOT ANALYSIS</span>
//                   <span className="tag">LAYOUT GEN</span>
//                 </div>
//               </div>
//             </div>

//             {/* ═══ PANEL 3: PARKING OUTPUT ═══ */}
//             <div className="panel">
//               <div
//                 className="panel-inner"
//                 style={{
//                   opacity: p3Progress,
//                   transform: `translateY(${(1 - p3Progress) * 28}px)`,
//                   transition: "none",
//                 }}
//               >
//                 <div className="step-label">03 — Output</div>
//                 <h2 className="panel-title">Parking Layout</h2>
//                 <p className="panel-sub">Car parking & driveway design detected</p>

//                 <div className="media-frame">
//                   <img src="/image/parking.gif" alt="Parking Layout" />
//                 </div>

//                 <div className="status-badge" style={{
//                   borderColor: "rgba(34,197,94,0.25)",
//                   background: "rgba(34,197,94,0.07)",
//                   color: "rgba(74,222,128,0.8)",
//                 }}>
//                   <div className="status-dot" style={{
//                     background: "#4ade80",
//                     boxShadow: "0 0 8px #4ade80",
//                   }} />
//                   Layout Generated
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function HorizontalScrollPage() {
//   const containerRef = useRef(null);
//   const [scrollPct, setScrollPct] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const container = containerRef.current;
//       if (!container) return;
//       const maxScroll = container.scrollHeight - window.innerHeight;
//       const pct = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
//       setScrollPct(pct);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

//   // PHASES:
//   // 0.00–0.25 : All panels shown at equal 33.33vw (intro state)
//   // 0.25–0.55 : Panel 1 expands to full, panels 2 & 3 collapse
//   // 0.55–1.00 : Panel 1 shrinks, panels come back equally

//   // Simpler approach: panels always equal width (33.33vw each)
//   // Scroll animates CONTENT within each panel: fade, scale, translate
//   // Each panel activates at different scroll positions

//   const THIRD = 100 / 3;

//   // Panel reveal progress (0 → 1)
//   const p1Progress = ease(Math.min(Math.max(scrollPct / 0.28, 0), 1));
//   const p2Progress = ease(Math.min(Math.max((scrollPct - 0.3) / 0.28, 0), 1));
//   const p3Progress = ease(Math.min(Math.max((scrollPct - 0.6) / 0.28, 0), 1));

//   // Active step matches which panel is currently being revealed
//   // Panel 1: 0–0.28, Panel 2: 0.30–0.58, Panel 3: 0.60–0.88
//   // Step stays on current panel until next panel starts coming in
//   const activeStep = scrollPct < 0.3 ? 0 : scrollPct < 0.6 ? 1 : 2;

//   return (
//     <>
//       <style>{`
    

//         body {
//           background: #020509;
//         }

//         /* ── AMBIENT BACKGROUND ── */
//         .grid-bg {
//           position: fixed; inset: 0; pointer-events: none; z-index: 0;
//           background-image:
//             linear-gradient(rgba(0,180,255,0.022) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,180,255,0.022) 1px, transparent 1px);
//           background-size: 64px 64px;
//         }

//         .orb {
//           position: fixed; border-radius: 50%;
//           filter: blur(120px); pointer-events: none; z-index: 0;
//         }
//         .orb1 { width: 700px; height: 700px; background: rgba(0,60,180,0.13); top: -200px; left: -200px; }
//         .orb2 { width: 500px; height: 500px; background: rgba(0,160,255,0.08); bottom: -100px; right: 5%; }
//         .orb3 { width: 400px; height: 400px; background: rgba(100,0,255,0.06); top: 30%; left: 40%; }

//         /* ── SCROLL CONTAINER ── */
//         .scroll-outer {
//           height: 500vh;
//           position: relative;
//         }

//         .sticky-wrap {
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           overflow: hidden;
//           z-index: 1;
//           display: flex;
//           flex-direction: column;
//         }

//         /* ── TOP HEADER BAR ── */
//         .header-bar {
//           position: relative;
//           z-index: 10;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 18px 32px;
//           border-bottom: 1px solid rgba(0,180,255,0.07);
//           background: rgba(2,5,9,0.6);
//           backdrop-filter: blur(20px);
//           flex-shrink: 0;
//         }

//         .logo-text {
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 11px;
//           font-weight: 600;
//           letter-spacing: 4px;
//           color: rgba(0,180,255,0.7);
//           text-transform: uppercase;
//         }

//         .header-steps {
//           display: flex;
//           align-items: center;
//           gap: 0;
//         }

//         .h-step {
//           display: flex;
//           align-items: center;
//           gap: 9px;
//           padding: 6px 16px;
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 10px;
//           font-weight: 500;
//           letter-spacing: 2px;
//           color: rgba(255,255,255,0.2);
//           text-transform: uppercase;
//           transition: color 0.5s ease;
//           position: relative;
//         }

//         .h-step.active {
//           color: rgba(0,200,255,0.9);
//         }

//         .h-step-num {
//           width: 20px; height: 20px;
//           border-radius: 50%;
//           border: 1px solid rgba(255,255,255,0.1);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 9px;
//           transition: all 0.5s ease;
//           flex-shrink: 0;
//         }

//         .h-step.active .h-step-num {
//           border-color: rgba(0,200,255,0.6);
//           background: rgba(0,200,255,0.1);
//           color: #00d4ff;
//           box-shadow: 0 0 12px rgba(0,200,255,0.25);
//         }

//         .h-sep {
//           width: 32px; height: 1px;
//           background: rgba(255,255,255,0.06);
//         }

//         /* ── PANELS ROW ── */
//         .panels-row {
//           display: flex;
//           align-items: stretch;
//           flex: 1;
//           min-height: 0;
//         }
          

//         /* ── INDIVIDUAL PANEL ── */
//         .panel {
//           width: 33.333vw;
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           position: relative;
//           padding: 32px;
//         }

//         /* Vertical dividers between panels */
//         .panel:not(:last-child)::after {
//           content: '';
//           position: absolute;
//           right: 0; top: 10%; bottom: 10%;
//           width: 1px;
//           background: linear-gradient(
//             to bottom,
//             transparent,
//             rgba(0,180,255,0.1) 30%,
//             rgba(0,180,255,0.1) 70%,
//             transparent
//           );
//         }

//         /* ── PANEL CONTENT WRAPPER ── */
//         .panel-inner {
//           width: 100%;
//           max-width: 340px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           gap: 0;
//         }

//         /* ── SHARED TEXT STYLES ── */
//         .step-label {
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 9px;
//           font-weight: 500;
//           letter-spacing: 4px;
//           color: rgba(0,180,255,0.5);
//           text-transform: uppercase;
//           margin-bottom: 10px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .step-label::before, .step-label::after {
//           content: '';
//           width: 18px; height: 1px;
//           background: rgba(0,180,255,0.3);
//         }

//         .panel-title {
//           font-size: clamp(22px, 2.2vw, 34px);
//           font-weight: 800;
//           letter-spacing: -0.5px;
//           color: #ffffff;
//           line-height: 1.1;
//           margin-bottom: 8px;
//         }

//         .panel-sub {
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 11px;
//           color: rgba(255,255,255,0.3);
//           font-weight: 400;
//           margin-bottom: 28px;
//           letter-spacing: 0.3px;
//         }

//         /* ── GIF / MEDIA FRAME ── */
//         .media-frame {
//           width: 100%;
//           aspect-ratio: 1;
//           max-width: 240px;
//           border-radius: 20px;
//           overflow: hidden;
//           position: relative;
//           margin-bottom: 24px;
//           border: 1px solid rgba(0,180,255,0.12);
//           box-shadow:
//             0 0 0 1px rgba(0,180,255,0.05),
//             0 20px 60px rgba(0,0,0,0.5),
//             inset 0 1px 0 rgba(255,255,255,0.04);
//           background: rgba(255,255,255,0.02);
//         }

//         .media-frame img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* Corner accents on frame */
//         .media-frame::before,
//         .media-frame::after {
//           content: '';
//           position: absolute;
//           width: 14px; height: 14px;
//           z-index: 2;
//         }
//         .media-frame::before {
//           top: 8px; left: 8px;
//           border-top: 1.5px solid rgba(0,200,255,0.5);
//           border-left: 1.5px solid rgba(0,200,255,0.5);
//           border-radius: 3px 0 0 0;
//         }
//         .media-frame::after {
//           bottom: 8px; right: 8px;
//           border-bottom: 1.5px solid rgba(0,200,255,0.5);
//           border-right: 1.5px solid rgba(0,200,255,0.5);
//           border-radius: 0 0 3px 0;
//         }

//         /* ── STATUS BADGE ── */
//         .status-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 7px;
//           padding: 7px 14px;
//           border-radius: 99px;
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 10px;
//           font-weight: 500;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           border: 1px solid rgba(0,180,255,0.2);
//           background: rgba(0,100,255,0.07);
//           color: rgba(0,200,255,0.7);
//         }

//         .status-dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: #00d4ff;
//           box-shadow: 0 0 8px #00d4ff;
//           animation: dotPulse 2s ease-in-out infinite;
//         }

//         @keyframes dotPulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.4; transform: scale(0.7); }
//         }

//         /* ── TAGS ── */
//         .tags-row {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 6px;
//           justify-content: center;
//           margin-top: 16px;
//         }

//         .tag {
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 9px;
//           padding: 4px 10px;
//           border-radius: 4px;
//           border: 1px solid rgba(0,180,255,0.15);
//           color: rgba(0,200,255,0.55);
//           background: rgba(0,100,255,0.05);
//           letter-spacing: 1.5px;
//           animation: tagFade 3s ease-in-out infinite;
//         }
//         .tag:nth-child(2) { animation-delay: 0.4s; }
//         .tag:nth-child(3) { animation-delay: 0.8s; }
//         .tag:nth-child(4) { animation-delay: 1.2s; }

//         @keyframes tagFade {
//           0%, 100% { opacity: 0.45; }
//           50% { opacity: 1; border-color: rgba(0,220,255,0.4); color: #00d4ff; }
//         }

//         /* ── PROGRESS DOTS ── */
//         .pdots {
//           position: fixed;
//           bottom: 28px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           gap: 8px;
//           z-index: 100;
//         }

//         .pdot {
//           height: 4px;
//           border-radius: 2px;
//           background: rgba(255,255,255,0.1);
//           border: 1px solid rgba(0,180,255,0.2);
//           transition: width 0.5s cubic-bezier(.4,0,.2,1), background 0.4s, box-shadow 0.4s;
//           width: 4px;
//         }

//         .pdot.active {
//           width: 24px;
//           background: #00b4ff;
//           box-shadow: 0 0 10px rgba(0,180,255,0.6);
//           border-color: #00b4ff;
//         }

//         /* ── SCROLL INDICATOR ── */
//         .scroll-track {
//           position: fixed;
//           right: 24px;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 2px;
//           height: 120px;
//           background: rgba(255,255,255,0.05);
//           border-radius: 1px;
//           z-index: 100;
//           overflow: hidden;
//         }

//         .scroll-fill {
//           width: 100%;
//           background: linear-gradient(to bottom, #00b4ff, #0060ff);
//           border-radius: 1px;
//           box-shadow: 0 0 8px rgba(0,180,255,0.5);
//           transition: height 0.1s linear;
//         }

//         /* ── PANEL ANIMATION STATES ── */
//         /* Each panel content animates in based on its progress prop via inline styles */

//       `}</style>

//       {/* Ambient BG */}
//       {/* <div className="grid-bg" />
//       <div className="orb orb1" />
//       <div className="orb orb2" />
//       <div className="orb orb3" /> */}

//       {/* Progress dots */}
//       {/* <div className="pdots">
//         {[0, 1, 2].map(i => (
//           <div key={i} className={`pdot ${activeStep === i ? "active" : ""}`} />
//         ))}
//       </div> */}

//       {/* Scroll track */}
//       {/* <div className="scroll-track">
//         <div
//           className="scroll-fill"
//           style={{ height: `${scrollPct * 100}%` }}
//         />
//       </div> */}

//       {/* Main scroll container */}
//       <div className="scroll-outer" ref={containerRef}>
//         <div className="sticky-wrap">
//           {/* Header bar */}
//           {/* <div className="header-bar">
//             <div className="logo-text">ParkAI · System</div>
//             <div className="header-steps">
//               {[
//                 { num: "01", label: "Upload",  prog: p1Progress },
//                 { num: "02", label: "Process", prog: p2Progress },
//                 { num: "03", label: "Output",  prog: p3Progress },
//               ].map((s, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center" }}>
//                   {i > 0 && <div className="h-sep" style={{ background: `rgba(0,180,255,${0.04 + s.prog * 0.14})` }} />}
//                   <div
//                     className="h-step"
//                     style={{
//                       color: `rgba(${i === activeStep ? "0,210,255" : "255,255,255"},${0.18 + s.prog * 0.82})`,
//                       transition: "color 0.6s ease",
//                     }}
//                   >
//                     <div
//                       className="h-step-num"
//                       style={{
//                         borderColor: `rgba(0,200,255,${0.08 + s.prog * 0.55})`,
//                         background: `rgba(0,200,255,${s.prog * 0.12})`,
//                         color: `rgba(0,${180 + Math.round(s.prog * 55)},255,${0.3 + s.prog * 0.7})`,
//                         boxShadow: s.prog > 0.5 ? `0 0 ${Math.round(s.prog * 14)}px rgba(0,200,255,${s.prog * 0.3})` : "none",
//                         transition: "all 0.4s ease",
//                       }}
//                     >
//                       {s.num}
//                     </div>
//                     {s.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div style={{
//               fontFamily: "'JetBrains Mono', monospace",
//               fontSize: "10px",
//               color: "rgba(0,180,255,0.35)",
//               letterSpacing: "2px"
//             }}>
//               {Math.round(scrollPct * 100)}% SCANNED
//             </div>
//           </div> */}

//           {/* Panels row — all always equal 33.33vw */}
//           <div className="panels-row">
//             {/* ═══ PANEL 1: UPLOAD ═══ */}
//             <div className="panel">
//               <div
//                 className="panel-inner"
//                 style={{
//                   opacity: p1Progress,
//                   transform: `translateY(${(1 - p1Progress) * 28}px)`,
//                   transition: "none",
//                 }}
//               >
//                 <div className="step-label">01 — Input</div>
//                 <h2 className="panel-title">Upload Your File</h2>
//                 <p className="panel-sub">Drag & drop or click to begin</p>

//                 <div className="media-frame">
//                   <img src="/image/upload2.gif" alt="Upload" />
//                 </div>

//                 <div className="status-badge">
//                   <div className="status-dot" />
//                   Ready to Accept
//                 </div>
//               </div>
//             </div>

//             {/* ═══ PANEL 2: AI ENGINE ═══ */}
//             <div className="panel">
//               <div
//                 className="panel-inner"
//                 style={{
//                   opacity: p2Progress,
//                   transform: `translateY(${(1 - p2Progress) * 28}px)`,
//                   transition: "none",
//                 }}
//               >
//                 <div className="step-label">02 — Processing</div>
//                 <h2 className="panel-title">AI Engine</h2>
//                 <p className="panel-sub">Analysing spatial layout data</p>

//                 <div className="media-frame">
//                   <img src="/image/ai.gif" alt="AI Engine" />
//                 </div>

//                 <div className="tags-row">
//                   <span className="tag">OBJECT DETECT</span>
//                   <span className="tag">SPATIAL MAP</span>
//                   <span className="tag">SLOT ANALYSIS</span>
//                   <span className="tag">LAYOUT GEN</span>
//                 </div>
//               </div>
//             </div>

//             {/* ═══ PANEL 3: PARKING OUTPUT ═══ */}
//             <div className="panel">
//               <div
//                 className="panel-inner"
//                 style={{
//                   opacity: p3Progress,
//                   transform: `translateY(${(1 - p3Progress) * 28}px)`,
//                   transition: "none",
//                 }}
//               >
//                 <div className="step-label">03 — Output</div>
//                 <h2 className="panel-title">Parking Layout</h2>
//                 <p className="panel-sub">
//                   Car parking & driveway design detected
//                 </p>

//                 <div className="media-frame">
//                   <img src="/image/parking.gif" alt="Parking Layout" style={{width:'300px'}} />
//                 </div>

//                 <div
//                   className="status-badge"
//                   style={{
//                     borderColor: "rgba(34,197,94,0.25)",
//                     background: "rgba(34,197,94,0.07)",
//                     color: "rgba(74,222,128,0.8)",
//                   }}
//                 >
//                   <div
//                     className="status-dot"
//                     style={{
//                       background: "#4ade80",
//                       boxShadow: "0 0 8px #4ade80",
//                     }}
//                   />
//                   Layout Generated
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }










"use client";
import { useState, useEffect, useRef } from "react";

// ─── Helpers ────────────────────────────────────────────────────────────────
const CAR_COLORS = [
  { body: "#f5c518", window: "#555", shadow: "#c9a000" },
  { body: "#e63946", window: "#2d2d4e", shadow: "#9b1b28" },
  { body: "#a8dadc", window: "#457b9d", shadow: "#6bb3c0" },
  { body: "#9b5de5", window: "#3a0ca3", shadow: "#6a0dad" },
  { body: "#06d6a0", window: "#1b4332", shadow: "#048a68" },
  { body: "#ff9f1c", window: "#5c3d00", shadow: "#c97400" },
];

function ParkingCar({ color, delay, parked }) {
  return (
    <div
      style={{
        transition: `transform 0.9s cubic-bezier(.22,1,.36,1) ${delay}ms, opacity 0.6s ease ${delay}ms`,
        transform: parked ? "translateY(0)" : "translateY(-120px)",
        opacity: parked ? 1 : 0,
      }}
    >
      <svg width="52" height="90" viewBox="0 0 52 90">
        {/* Shadow */}
        <ellipse cx="26" cy="84" rx="20" ry="5" fill="rgba(0,0,0,.25)" />
        {/* Body */}
        <rect x="6" y="20" width="40" height="58" rx="10" fill={color.body} />
        {/* Roof */}
        <rect x="10" y="10" width="32" height="28" rx="8" fill={color.body} />
        {/* Windshield */}
        <rect x="13" y="13" width="26" height="16" rx="5" fill={color.window} opacity="0.85" />
        {/* Rear glass */}
        <rect x="13" y="52" width="26" height="12" rx="4" fill={color.window} opacity="0.7" />
        {/* Wheels */}
        <rect x="2" y="26" width="8" height="14" rx="4" fill="#222" />
        <rect x="42" y="26" width="8" height="14" rx="4" fill="#222" />
        <rect x="2" y="56" width="8" height="14" rx="4" fill="#222" />
        <rect x="42" y="56" width="8" height="14" rx="4" fill="#222" />
        {/* Headlights */}
        <rect x="12" y="68" width="10" height="5" rx="2" fill="#fff" opacity="0.9" />
        <rect x="30" y="68" width="10" height="5" rx="2" fill="#fff" opacity="0.9" />
      </svg>
    </div>
  );
}

// ─── Scene 1: Upload ─────────────────────────────────────────────────────────
function UploadScene({ active, onDone }) {
  const [phase, setPhase] = useState(0); // 0=idle 1=dragging 2=uploading 3=done
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) { setPhase(0); setProgress(0); return; }
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1200);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 4;
      if (p >= 100) { p = 100; clearInterval(interval); }
      setProgress(Math.min(p, 100));
    }, 120);
    const t3 = setTimeout(() => { setPhase(3); }, 2800);
    const t4 = setTimeout(() => onDone?.(), 3600);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [active]);

  const files = ["layout_v3.mp4", "parking_data.csv", "site_map.pdf"];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      {/* Drop zone */}
      <div style={{
        width: 340, height: 200,
        border: `2px dashed ${phase >= 1 ? "#38bdf8" : "#334155"}`,
        borderRadius: 20,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12,
        background: phase >= 1 ? "rgba(56,189,248,.07)" : "rgba(15,23,42,.6)",
        transition: "all 0.4s ease",
        position: "relative", overflow: "hidden",
      }}>
        {/* Glow */}
        {phase >= 1 && (
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 50% 0%, rgba(56,189,248,.18) 0%, transparent 70%)",
          }} />
        )}
        {/* Icon */}
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: phase >= 1 ? "rgba(56,189,248,.2)" : "rgba(51,65,85,.6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.4s",
          transform: phase === 1 ? "scale(1.1)" : "scale(1)",
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={phase >= 1 ? "#38bdf8" : "#64748b"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </div>
        <p style={{ color: phase >= 1 ? "#38bdf8" : "#64748b", fontSize: 14, margin: 0, fontFamily: "'DM Sans', sans-serif", transition: "color 0.4s" }}>
          {phase === 0 ? "Drop files here or click to browse" : phase === 1 ? "Release to upload…" : phase === 2 ? "Uploading…" : "✓ Upload complete!"}
        </p>
        {phase === 3 && (
          <p style={{ color: "#4ade80", fontSize: 12, margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
            Files ready for AI processing
          </p>
        )}
      </div>

      {/* File list */}
      <div style={{ width: 340, display: "flex", flexDirection: "column", gap: 8 }}>
        {files.map((f, i) => {
          const fileActive = phase >= 2 && i === 0 ? true : phase === 3;
          const done = phase === 3 || (phase === 2 && progress === 100 && i === 0);
          return (
            <div key={f} style={{
              display: "flex", alignItems: "center", gap: 12,
              background: "rgba(15,23,42,.7)", borderRadius: 12, padding: "10px 14px",
              border: "1px solid rgba(51,65,85,.7)",
              opacity: phase >= 1 ? 1 : 0.3,
              transition: `opacity 0.5s ease ${i * 150}ms`,
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(56,189,248,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: 13, color: "#e2e8f0", fontFamily: "'DM Sans', sans-serif" }}>{f}</p>
                {phase === 2 && i === 0 && (
                  <div style={{ marginTop: 5, height: 3, borderRadius: 2, background: "#1e293b", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg,#38bdf8,#818cf8)", borderRadius: 2, transition: "width 0.1s linear" }} />
                  </div>
                )}
              </div>
              {(phase === 3 || (phase === 2 && i === 0 && progress === 100)) && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Scene 2: AI Generating ──────────────────────────────────────────────────
function AIScene({ active, onDone }) {
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [pulseScale, setPulseScale] = useState(1);
  const [particles, setParticles] = useState([]);
  const [phase, setPhase] = useState(0); // 0=dormant, 1=spinning, 2=done
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) { setPhase(0); return; }
    setPhase(1);
    // Spawn particles
    const pts = Array.from({ length: 20 }, (_, i) => ({
      id: i, angle: Math.random() * 360, radius: 60 + Math.random() * 60,
      speed: 0.4 + Math.random() * 0.6, size: 2 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.7,
    }));
    setParticles(pts);

    let angle = 0;
    let frame = 0;
    const animate = () => {
      angle += 1.2;
      frame++;
      setPulseScale(1 + Math.sin(frame * 0.05) * 0.04);
      setOrbitAngle(angle);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    const t = setTimeout(() => { setPhase(2); cancelAnimationFrame(rafRef.current); }, 3200);
    const t2 = setTimeout(() => onDone?.(), 4000);
    return () => { cancelAnimationFrame(rafRef.current); clearTimeout(t); clearTimeout(t2); };
  }, [active]);

  const orbits = [
    { rx: 90, ry: 45, tilt: 0 },
    { rx: 90, ry: 45, tilt: 60 },
    { rx: 90, ry: 45, tilt: 120 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
      <div style={{ position: "relative", width: 220, height: 220 }}>
        {/* Glow */}
        <div style={{
          position: "absolute", inset: -20,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(56,189,248,.25) 0%, transparent 70%)",
          transform: `scale(${pulseScale})`,
          transition: "transform 0.1s",
        }} />

        <svg width="220" height="220" viewBox="-110 -110 220 220" style={{ position: "absolute", top: 0, left: 0 }}>
          {/* Orbit rings */}
          {orbits.map((o, i) => (
            <ellipse key={i}
              cx="0" cy="0" rx={o.rx} ry={o.ry}
              fill="none" stroke="rgba(56,189,248,.35)" strokeWidth="1.5"
              transform={`rotate(${o.tilt})`}
            />
          ))}
          {/* Orbit dots */}
          {orbits.map((o, i) => {
            const a = ((orbitAngle + i * 120) * Math.PI) / 180;
            const x = Math.cos(a) * o.rx;
            const y = Math.sin(a) * o.ry;
            return (
              <g key={i} transform={`rotate(${o.tilt})`}>
                <circle cx={x} cy={y} r="5" fill="#fff" />
                <circle cx={x} cy={y} r="8" fill="rgba(255,255,255,.2)" />
              </g>
            );
          })}
          {/* Center */}
          <circle cx="0" cy="0" r="42" fill="rgba(15,23,42,.9)" stroke="rgba(56,189,248,.5)" strokeWidth="1.5" />
          <text x="0" y="8" textAnchor="middle" fill="#38bdf8" fontSize="26" fontWeight="700" fontFamily="'Space Grotesk', sans-serif">AI</text>
        </svg>
      </div>

      {/* Status */}
      <div style={{ textAlign: "center" }}>
        {phase === 1 ? (
          <>
            <p style={{ margin: 0, color: "#38bdf8", fontSize: 15, fontFamily: "'DM Sans', sans-serif" }}>Analyzing parking layout…</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 10 }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: 8, height: 8, borderRadius: "50%", background: "#38bdf8",
                  animation: `bounce 1s ease-in-out ${i * 0.2}s infinite`,
                }} />
              ))}
            </div>
          </>
        ) : phase === 2 ? (
          <p style={{ margin: 0, color: "#4ade80", fontSize: 15, fontFamily: "'DM Sans', sans-serif" }}>
            ✓ Layout generated successfully
          </p>
        ) : null}
      </div>

      {/* Processing steps */}
      {["Parsing vehicle data", "Optimizing slot allocation", "Generating layout grid"].map((step, i) => (
        <div key={step} style={{
          display: "flex", alignItems: "center", gap: 10,
          opacity: phase >= 1 ? 1 : 0,
          transition: `opacity 0.5s ease ${i * 300 + 200}ms`,
          width: 280,
        }}>
          <div style={{
            width: 20, height: 20, borderRadius: "50%",
            background: phase === 2 ? "rgba(74,222,128,.2)" : "rgba(56,189,248,.2)",
            border: `1.5px solid ${phase === 2 ? "#4ade80" : "#38bdf8"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            {phase === 2
              ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
              : <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#38bdf8" }} />
            }
          </div>
          <span style={{ fontSize: 13, color: phase === 2 ? "#94a3b8" : "#cbd5e1", fontFamily: "'DM Sans', sans-serif" }}>{step}</span>
        </div>
      ))}

      <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }`}</style>
    </div>
  );
}

// ─── Scene 3: Parking Layout ─────────────────────────────────────────────────
function ParkingScene({ active }) {
  const [parked, setParked] = useState(false);

  useEffect(() => {
    if (!active) { setParked(false); return; }
    const t = setTimeout(() => setParked(true), 200);
    return () => clearTimeout(t);
  }, [active]);

  const spots = [
    { row: 0, col: 0, carIdx: null },
    { row: 0, col: 1, carIdx: 0 },
    { row: 0, col: 2, carIdx: null },
    { row: 0, col: 3, carIdx: 1 },
    { row: 0, col: 4, carIdx: null },
    { row: 1, col: 0, carIdx: 2 },
    { row: 1, col: 1, carIdx: null },
    { row: 1, col: 2, carIdx: 3 },
    { row: 1, col: 3, carIdx: null },
    { row: 1, col: 4, carIdx: 4 },
  ];

  const COLS = 5;
  const ROWS = 2;
  const SPOT_W = 70;
  const SPOT_H = 110;
  const GAP = 8;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: 3, background: "#4ade80" }} />
          <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>Available (5)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: 3, background: "#f87171" }} />
          <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>Occupied (5)</span>
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${COLS}, ${SPOT_W}px)`,
        gridTemplateRows: `repeat(${ROWS}, ${SPOT_H}px)`,
        gap: GAP,
        padding: 16,
        background: "#1e293b",
        borderRadius: 20,
        border: "1px solid rgba(51,65,85,.8)",
      }}>
        {spots.map((spot, i) => {
          const occupied = spot.carIdx !== null;
          return (
            <div key={i} style={{
              width: SPOT_W, height: SPOT_H,
              background: occupied ? "rgba(248,113,113,.08)" : "rgba(74,222,128,.08)",
              border: `1.5px solid ${occupied ? "rgba(248,113,113,.35)" : "rgba(74,222,128,.35)"}`,
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden",
            }}>
              {/* Spot number */}
              <span style={{
                position: "absolute", top: 5, left: 8,
                fontSize: 10, color: occupied ? "rgba(248,113,113,.7)" : "rgba(74,222,128,.7)",
                fontFamily: "'DM Mono', monospace", fontWeight: 600,
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {occupied && (
                <ParkingCar
                  color={CAR_COLORS[spot.carIdx % CAR_COLORS.length]}
                  delay={i * 80}
                  parked={parked}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Stats bar */}
      <div style={{
        display: "flex", gap: 16, width: "100%", maxWidth: 400,
        background: "rgba(15,23,42,.8)", borderRadius: 12, padding: "12px 16px",
        border: "1px solid rgba(51,65,85,.5)",
      }}>
        {[["Total", "10"], ["Occupied", "5"], ["Available", "5"], ["Efficiency", "50%"]].map(([label, val]) => (
          <div key={label} style={{ flex: 1, textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: 16, color: "#e2e8f0", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>{val}</p>
            <p style={{ margin: 0, fontSize: 10, color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function ProductAnimation() {
  const [scene, setScene] = useState(0); // 0=upload 1=ai 2=parking
  const [animKey, setAnimKey] = useState(0);

  const handleSceneDone = () => {
    setScene(s => Math.min(s + 1, 2));
  };

  const restart = () => {
    setScene(0);
    setAnimKey(k => k + 1);
  };

  const SCENES = ["Upload Files", "AI Processing", "Parking Layout"];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #020817 0%, #0f172a 50%, #0a0f1e 100%)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: 32,
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Space+Grotesk:wght@600;700&family=DM+Mono:wght@500&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <p style={{ margin: "0 0 8px", fontSize: 12, letterSpacing: 4, color: "#38bdf8", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>
          Smart Parking System
        </p>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", color: "#f1f5f9" }}>
          AI-Powered Layout Generator
        </h1>
      </div>

      {/* Step indicator */}
      <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 40 }}>
        {SCENES.map((s, i) => (
          <div key={s} style={{ display: "flex", alignItems: "center" }}>
            <div
              onClick={() => setScene(i)}
              style={{
                display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
                padding: "8px 16px", borderRadius: 24,
                background: scene === i ? "rgba(56,189,248,.15)" : "transparent",
                border: `1px solid ${scene === i ? "#38bdf8" : "rgba(51,65,85,.5)"}`,
                transition: "all 0.3s",
              }}>
              <div style={{
                width: 24, height: 24, borderRadius: "50%",
                background: scene > i ? "#4ade80" : scene === i ? "#38bdf8" : "rgba(51,65,85,.8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700, color: scene >= i ? "#0f172a" : "#64748b",
                transition: "all 0.3s",
              }}>
                {scene > i ? "✓" : i + 1}
              </div>
              <span style={{ fontSize: 13, color: scene === i ? "#e2e8f0" : "#64748b", fontWeight: scene === i ? 600 : 400 }}>{s}</span>
            </div>
            {i < SCENES.length - 1 && (
              <div style={{ width: 32, height: 1, background: scene > i ? "#4ade80" : "rgba(51,65,85,.5)", transition: "background 0.5s", margin: "0 4px" }} />
            )}
          </div>
        ))}
      </div>

      {/* Scene Card */}
      <div style={{
        width: "100%", maxWidth: 480,
        background: "rgba(15,23,42,.8)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(56,189,248,.2)",
        borderRadius: 28,
        padding: "40px 32px",
        display: "flex", flexDirection: "column", alignItems: "center",
        minHeight: 460,
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Corner glow */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(56,189,248,.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(129,140,248,.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div key={`${animKey}-${scene}`} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {scene === 0 && <UploadScene active={true} onDone={handleSceneDone} />}
          {scene === 1 && <AIScene active={true} onDone={handleSceneDone} />}
          {scene === 2 && <ParkingScene active={true} />}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
        {scene < 2 && (
          <button onClick={handleSceneDone} style={{
            padding: "10px 24px", borderRadius: 12, border: "1px solid rgba(51,65,85,.7)",
            background: "rgba(15,23,42,.8)", color: "#94a3b8", cursor: "pointer", fontSize: 13,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Skip →
          </button>
        )}
        <button onClick={restart} style={{
          padding: "10px 24px", borderRadius: 12, border: "none",
          background: "linear-gradient(135deg, #0ea5e9, #6366f1)", color: "#fff", cursor: "pointer", fontSize: 13,
          fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
        }}>
          ↺ Restart Demo
        </button>
      </div>
    </div>
  );
}