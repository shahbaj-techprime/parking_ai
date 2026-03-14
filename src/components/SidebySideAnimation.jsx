// "use client";
// import { useState, useEffect, useRef, useCallback } from "react";

// const SCENE_DURATION = 3500;
// const GAP_BETWEEN = 500;
// const RESTART_DELAY = 10000;

// const CARS = [
//   { body: "#f5c518", win: "#444" },
//   { body: "#e63946", win: "#2d2d4e" },
//   { body: "#06d6a0", win: "#1b4332" },
//   { body: "#9b5de5", win: "#3a0ca3" },
//   { body: "#ff9f1c", win: "#5c3d00" },
//   { body: "#a8dadc", win: "#457b9d" },
// ];

// function Car({ c, dropped }) {
//   return (
//     <div
//       style={{
//         transition:
//           "transform .85s cubic-bezier(.22,1,.36,1), opacity .6s ease",
//         transform: dropped
//           ? "translateY(0) scale(1)"
//           : "translateY(-90px) scale(.8)",
//         opacity: dropped ? 1 : 0,
//       }}
//     >
//       <svg width="38" height="66" viewBox="0 0 38 66">
//         <ellipse cx="19" cy="62" rx="13" ry="3.5" fill="rgba(0,0,0,.22)" />
//         <rect x="3" y="14" width="32" height="44" rx="8" fill={c.body} />
//         <rect x="6" y="6" width="26" height="22" rx="6" fill={c.body} />
//         <rect
//           x="9"
//           y="8"
//           width="20"
//           height="13"
//           rx="3.5"
//           fill={c.win}
//           opacity=".85"
//         />
//         <rect
//           x="9"
//           y="39"
//           width="20"
//           height="9"
//           rx="2.5"
//           fill={c.win}
//           opacity=".7"
//         />
//         <rect x="0" y="17" width="6" height="11" rx="3" fill="#111" />
//         <rect x="32" y="17" width="6" height="11" rx="3" fill="#111" />
//         <rect x="0" y="40" width="6" height="11" rx="3" fill="#111" />
//         <rect x="32" y="40" width="6" height="11" rx="3" fill="#111" />
//         <rect
//           x="8"
//           y="51"
//           width="7"
//           height="3.5"
//           rx="1.5"
//           fill="#fff"
//           opacity=".9"
//         />
//         <rect
//           x="23"
//           y="51"
//           width="7"
//           height="3.5"
//           rx="1.5"
//           fill="#fff"
//           opacity=".9"
//         />
//       </svg>
//     </div>
//   );
// }

// /* ── Upload Card ─────────────────────────────────────────────────── */
// function UploadCard({ tick, visible }) {
//   const phase = tick < 18 ? 0 : tick < 45 ? 1 : tick < 78 ? 2 : 3;
//   const progress =
//     phase === 2 ? Math.min(100, ((tick - 45) / 33) * 100) : phase > 2 ? 100 : 0;
//   const done = phase === 3;
//   //   "layout_v3.mp4", "parking_data.csv",
//   const files = ["site_map.dxf"];

//   return (
//     <div
//       style={{
//         flex: "1 1 0",
//         background: "rgba(13,20,40,.92)",
//         backdropFilter: "blur(24px)",
//         border: `1.5px solid ${done ? "rgba(74,222,128,.45)" : "rgba(56,189,248,.28)"}`,
//         borderRadius: 22,
//         padding: "22px 18px 20px",
//         position: "relative",
//         overflow: "hidden",
//         transition:
//           "opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1), border-color .6s",
//         opacity: visible ? 1 : 0,
//         transform: visible
//           ? "translateX(0) scale(1)"
//           : "translateX(-40px) scale(.97)",
//         display: "flex",
//         flexDirection: "column",
//         gap: 12,
//       }}
//     >
//       {/* progress bar */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           height: 3,
//           background: "rgba(51,65,85,.45)",
//           borderRadius: "22px 22px 0 0",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             height: "100%",
//             width: `${tick}%`,
//             background: "linear-gradient(90deg,#38bdf8,#818cf8)",
//             transition: "width .08s linear",
//           }}
//         />
//       </div>
//       {/* glow */}
//       <div
//         style={{
//           position: "absolute",
//           top: -50,
//           right: -50,
//           width: 160,
//           height: 160,
//           borderRadius: "50%",
//           background:
//             "radial-gradient(ellipse,rgba(56,189,248,.13) 0%,transparent 70%)",
//           pointerEvents: "none",
//         }}
//       />

//       {/* header */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//           <div
//             style={{
//               width: 32,
//               height: 32,
//               borderRadius: 9,
//               background: "rgba(56,189,248,.14)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flexShrink: 0,
//             }}
//           >
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="#38bdf8"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//               <polyline points="17 8 12 3 7 8" />
//               <line x1="12" y1="3" x2="12" y2="15" />
//             </svg>
//           </div>
//           <div>
//             <p
//               style={{
//                 margin: 0,
//                 fontSize: 13,
//                 fontWeight: 600,
//                 color: "#e2e8f0",
//                 fontFamily: "'DM Sans',sans-serif",
//                 lineHeight: 1.2,
//               }}
//             >
//               Upload Site Plan
//             </p>
//             {/* <p style={{margin:0,fontSize:10,color:"#64748b",fontFamily:"'DM Sans',sans-serif"}}>Step 01</p> */}
//           </div>
//         </div>
//         {done && <StatusBadge />}
//       </div>

//       {/* drop zone */}
//       <div
//         style={{
//           height: 200,
//           border: `2px dashed ${phase >= 1 ? "#38bdf8" : "#2a3a52"}`,
//           borderRadius: 12,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: 5,
//           background: phase >= 1 ? "rgba(56,189,248,.06)" : "rgba(15,23,42,.4)",
//           transition: "all .5s",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {phase >= 1 && (
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background:
//                 "radial-gradient(ellipse at 50% 0%,rgba(56,189,248,.15) 0%,transparent 70%)",
//             }}
//           />
//         )}
//         <p
//           style={{
//             margin: 0,
//             color: phase >= 1 ? "#38bdf8" : "#4a5568",
//             fontSize: 11.5,
//             fontFamily: "'DM Sans',sans-serif",
//             position: "relative",
//             transition: "color .4s",
//           }}
//         >
//           {phase === 0
//             ? "Drop files here"
//             : phase === 1
//               ? "Release to upload…"
//               : phase === 2
//                 ? "Uploading…"
//                 : "✓ All files uploaded!"}
//         </p>
//         {done && (
//           <p
//             style={{
//               margin: 0,
//               color: "#4ade80",
//               fontSize: 10.5,
//               fontFamily: "'DM Sans',sans-serif",
//               position: "relative",
//             }}
//           >
//             Ready for AI
//           </p>
//         )}
//       </div>

//       {/* file rows */}
//       <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//         {files.map((f, i) => (
//           <div
//             key={f}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 8,
//               background: "rgba(15,23,42,.55)",
//               borderRadius: 9,
//               padding: "7px 10px",
//               border: "1px solid rgba(51,65,85,.55)",
//               opacity: phase >= 1 ? 1 : 0.2,
//               transition: `opacity .5s ease ${i * 100}ms`,
//             }}
//           >
//             <div
//               style={{
//                 width: 22,
//                 height: 22,
//                 borderRadius: 5,
//                 background: "rgba(56,189,248,.1)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexShrink: 0,
//               }}
//             >
//               <svg
//                 width="11"
//                 height="11"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="#38bdf8"
//                 strokeWidth="2"
//               >
//                 <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
//                 <polyline points="13 2 13 9 20 9" />
//               </svg>
//             </div>
//             <div style={{ flex: 1, minWidth: 0 }}>
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: 11,
//                   color: "#e2e8f0",
//                   fontFamily: "'DM Sans',sans-serif",
//                   whiteSpace: "nowrap",
//                   overflow: "hidden",
//                   textOverflow: "ellipsis",
//                 }}
//               >
//                 {f}
//               </p>
//               {i === 0 && phase === 2 && (
//                 <div
//                   style={{
//                     marginTop: 3,
//                     height: 2,
//                     borderRadius: 2,
//                     background: "#1e293b",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <div
//                     style={{
//                       height: "100%",
//                       width: `${progress}%`,
//                       background: "linear-gradient(90deg,#38bdf8,#818cf8)",
//                       transition: "width .1s linear",
//                     }}
//                   />
//                 </div>
//               )}
//             </div>
//             {(done || (i === 0 && progress >= 98)) && (
//               <svg
//                 width="11"
//                 height="11"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="#4ade80"
//                 strokeWidth="3"
//               >
//                 <polyline points="20 6 9 17 4 12" />
//               </svg>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ── AI Card ─────────────────────────────────────────────────────── */
// function AICard({ tick, visible }) {
//   const done = tick > 88;
//   const angle = tick * 4.32;
//   const pulse = 1 + Math.sin(tick * 0.18) * 0.04;
//   const orbits = [0, 60, 120];
//   const steps = ["Parsing vehicle data", "Optimizing slots", "Generating grid"];

//   return (
//     <div
//       style={{
//         flex: "1 1 0",
//         background: "rgba(13,20,40,.92)",
//         backdropFilter: "blur(24px)",
//         border: `1.5px solid ${done ? "rgba(74,222,128,.45)" : "rgba(129,140,248,.3)"}`,
//         borderRadius: 22,
//         padding: "22px 18px 20px",
//         position: "relative",
//         overflow: "hidden",
//         transition:
//           "opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1), border-color .6s",
//         opacity: visible ? 1 : 0,
//         transform: visible
//           ? "translateY(0) scale(1)"
//           : "translateY(30px) scale(.97)",
//         display: "flex",
//         flexDirection: "column",
//         gap: 14,
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           height: 3,
//           background: "rgba(51,65,85,.45)",
//           borderRadius: "22px 22px 0 0",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             height: "100%",
//             width: `${tick}%`,
//             background: "linear-gradient(90deg,#818cf8,#38bdf8)",
//             transition: "width .08s linear",
//           }}
//         />
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           top: -50,
//           left: -50,
//           width: 160,
//           height: 160,
//           borderRadius: "50%",
//           background:
//             "radial-gradient(ellipse,rgba(129,140,248,.11) 0%,transparent 70%)",
//           pointerEvents: "none",
//         }}
//       />

//       {/* header */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//           <div
//             style={{
//               width: 32,
//               height: 32,
//               borderRadius: 9,
//               background: "rgba(129,140,248,.14)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flexShrink: 0,
//             }}
//           >
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="#818cf8"
//               strokeWidth="2"
//             >
//               <circle cx="12" cy="12" r="3" />
//               <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
//             </svg>
//           </div>
//           <div>
//             <p
//               style={{
//                 margin: 0,
//                 fontSize: 13,
//                 fontWeight: 600,
//                 color: "#e2e8f0",
//                 fontFamily: "'DM Sans',sans-serif",
//                 lineHeight: 1.2,
//               }}
//             >
//               AI Processing
//             </p>
//             {/* <p
//               style={{
//                 margin: 0,
//                 fontSize: 10,
//                 color: "#64748b",
//                 fontFamily: "'DM Sans',sans-serif",
//               }}
//             >
//               Step 02
//             </p> */}
//           </div>
//         </div>
//         {done && <StatusBadge />}
//       </div>

//       {/* atom */}
//       <div style={{ position: "relative", width: 120, height: 120 }}>
//         <div
//           style={{
//             position: "absolute",
//             inset: -12,
//             borderRadius: "50%",
//             background:
//               "radial-gradient(ellipse,rgba(129,140,248,.2) 0%,transparent 70%)",
//             transform: `scale(${pulse})`,
//           }}
//         />
//         <svg
//           width="120"
//           height="120"
//           viewBox="-60 -60 120 120"
//           style={{ position: "absolute", top: 0, left: 0 }}
//         >
//           {orbits.map((tilt, i) => {
//             const a = ((angle + i * 120) * Math.PI) / 180;
//             const x = Math.cos(a) * 50,
//               y = Math.sin(a) * 25;
//             return (
//               <g key={i} transform={`rotate(${tilt})`}>
//                 <ellipse
//                   cx="0"
//                   cy="0"
//                   rx="50"
//                   ry="25"
//                   fill="none"
//                   stroke="rgba(129,140,248,.4)"
//                   strokeWidth="1.5"
//                 />
//                 <circle cx={x} cy={y} r="4" fill="#fff" />
//                 <circle cx={x} cy={y} r="6.5" fill="rgba(255,255,255,.18)" />
//               </g>
//             );
//           })}
//           <circle
//             cx="0"
//             cy="0"
//             r="24"
//             fill="rgba(13,20,40,.95)"
//             stroke="rgba(129,140,248,.5)"
//             strokeWidth="1.5"
//           />
//           <text
//             x="0"
//             y="7"
//             textAnchor="middle"
//             fill="#818cf8"
//             fontSize="17"
//             fontWeight="700"
//             fontFamily="'Space Grotesk',sans-serif"
//           >
//             AI
//           </text>
//         </svg>
//       </div>

//       {/* status */}
//       <p
//         style={{
//           margin: 0,
//           color: done ? "#4ade80" : "#818cf8",
//           fontSize: 12,
//           fontFamily: "'DM Sans',sans-serif",
//           transition: "color .5s",
//           textAlign: "center",
//         }}
//       >
//         {done ? "✓ Layout generated!" : "Analyzing parking layout…"}
//       </p>
//       {!done && (
//         <div style={{ display: "flex", gap: 5 }}>
//           {[0, 1, 2].map((i) => (
//             <div
//               key={i}
//               style={{
//                 width: 5,
//                 height: 5,
//                 borderRadius: "50%",
//                 background: "#818cf8",
//                 animation: `bop 1s ease-in-out ${i * 0.2}s infinite`,
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* steps */}
//       <div
//         style={{
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           gap: 7,
//         }}
//       >
//         {steps.map((s, i) => {
//           const sd = done || tick > 35 + i * 20;
//           return (
//             <div
//               key={s}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 7,
//                 opacity: tick > 10 + i * 15 ? 1 : 0,
//                 transition: `opacity .5s ease ${i * 180}ms`,
//               }}
//             >
//               <div
//                 style={{
//                   width: 16,
//                   height: 16,
//                   borderRadius: "50%",
//                   flexShrink: 0,
//                   background: sd
//                     ? "rgba(74,222,128,.14)"
//                     : "rgba(129,140,248,.14)",
//                   border: `1.5px solid ${sd ? "#4ade80" : "#818cf8"}`,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 {sd ? (
//                   <svg
//                     width="7"
//                     height="7"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#4ade80"
//                     strokeWidth="3"
//                   >
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                 ) : (
//                   <div
//                     style={{
//                       width: 4,
//                       height: 4,
//                       borderRadius: "50%",
//                       background: "#818cf8",
//                     }}
//                   />
//                 )}
//               </div>
//               <span
//                 style={{
//                   fontSize: 11,
//                   color: sd ? "#94a3b8" : "#cbd5e1",
//                   fontFamily: "'DM Sans',sans-serif",
//                 }}
//               >
//                 {s}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// /* ── Parking Card ────────────────────────────────────────────────── */
// function ParkingCard({ tick, visible }) {
//   const done = tick > 90;
//   const spots = [
//     { ci: null },
//     { ci: 2 },
//     { ci: 3 },
//     { ci: 4 },
//     { ci: 5 },
//     { ci: 6 },
//     { ci: 7 },
//     { ci: null },
//     { ci: 9 },
//     { ci: null },
//   ];

//   return (
//     <div
//       style={{
//         flex: "1 1 0",
//         background: "rgba(13,20,40,.92)",
//         backdropFilter: "blur(24px)",
//         border: `1.5px solid ${done ? "rgba(74,222,128,.45)" : "rgba(74,222,128,.22)"}`,
//         borderRadius: 22,
//         padding: "22px 18px 20px",
//         position: "relative",
//         overflow: "hidden",
//         transition:
//           "opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1), border-color .6s",
//         opacity: visible ? 1 : 0,
//         transform: visible
//           ? "translateX(0) scale(1)"
//           : "translateX(40px) scale(.97)",
//         display: "flex",
//         flexDirection: "column",
//         gap: 12,
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           height: 3,
//           background: "rgba(51,65,85,.45)",
//           borderRadius: "22px 22px 0 0",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             height: "100%",
//             width: `${tick}%`,
//             background: "linear-gradient(90deg,#4ade80,#38bdf8)",
//             transition: "width .08s linear",
//           }}
//         />
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           bottom: -50,
//           right: -50,
//           width: 160,
//           height: 160,
//           borderRadius: "50%",
//           background:
//             "radial-gradient(ellipse,rgba(74,222,128,.09) 0%,transparent 70%)",
//           pointerEvents: "none",
//         }}
//       />

//       {/* header */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//           <div
//             style={{
//               width: 32,
//               height: 32,
//               borderRadius: 9,
//               background: "rgba(74,222,128,.12)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flexShrink: 0,
//             }}
//           >
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="#4ade80"
//               strokeWidth="2"
//             >
//               <rect x="3" y="3" width="18" height="18" rx="2" />
//               <path d="M3 9h18M9 21V9" />
//             </svg>
//           </div>
//           <div>
//             <p
//               style={{
//                 margin: 0,
//                 fontSize: 13,
//                 fontWeight: 600,
//                 color: "#e2e8f0",
//                 fontFamily: "'DM Sans',sans-serif",
//                 lineHeight: 1.2,
//               }}
//             >
//               Parking Layout
//             </p>
//             {/* <p
//               style={{
//                 margin: 0,
//                 fontSize: 10,
//                 color: "#64748b",
//                 fontFamily: "'DM Sans',sans-serif",
//               }}
//             >
//               Step 03
//             </p> */}
//           </div>
//         </div>
//         {done && <StatusBadge />}
//       </div>

//       {/* legend */}
//       <div style={{ display: "flex", gap: 12 }}>
//         {[
//           ["#4ade80", "Available"],
//           ["#f87171", "Occupied"],
//         ].map(([c, l]) => (
//           <div
//             key={l}
//             style={{ display: "flex", alignItems: "center", gap: 4 }}
//           >
//             <div
//               style={{ width: 8, height: 8, borderRadius: 2, background: c }}
//             />
//             <span
//               style={{
//                 fontSize: 10,
//                 color: "#94a3b8",
//                 fontFamily: "'DM Sans',sans-serif",
//               }}
//             >
//               {l}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(5,1fr)",
//           gap: 4,
//           background: "#131e33",
//           borderRadius: 11,
//           padding: 7,
//           border: "1px solid rgba(51,65,85,.6)",
//         }}
//       >
//         {spots.map((sp, i) => {
//           const occ = sp.ci !== null;
//           const dropped = occ && tick > 6 + i * 8;
//           return (
//             <div
//               key={i}
//               style={{
//                 aspectRatio: "0.58",
//                 background: occ
//                   ? "rgba(248,113,113,.08)"
//                   : "rgba(74,222,128,.07)",
//                 border: `1.5px solid ${occ ? "rgba(248,113,113,.28)" : "rgba(74,222,128,.28)"}`,
//                 borderRadius: 6,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               <span
//                 style={{
//                   position: "absolute",
//                   top: 2,
//                   left: 4,
//                   fontSize: 7,
//                   color: occ ? "rgba(248,113,113,.65)" : "rgba(74,222,128,.65)",
//                   fontFamily: "'DM Mono',monospace",
//                   fontWeight: 600,
//                 }}
//               >
//                 {String(i + 1).padStart(2, "0")}
//               </span>
//               {occ && <Car c={CARS[sp.ci % CARS.length]} dropped={dropped} />}
//             </div>
//           );
//         })}
//       </div>

//       {/* stats */}
//       <div
//         style={{
//           display: "flex",
//           background: "rgba(13,20,40,.65)",
//           borderRadius: 9,
//           overflow: "hidden",
//           border: "1px solid rgba(51,65,85,.4)",
//         }}
//       >
//         {[
//           ["10", "Total"],
//           ["7", "Occupied"],
//           ["3", "Free"],
//           ["70%", "Fill"],
//         ].map(([v, l], i) => (
//           <div
//             key={l}
//             style={{
//               flex: 1,
//               textAlign: "center",
//               padding: "7px 2px",
//               borderRight: i < 3 ? "1px solid rgba(51,65,85,.4)" : "none",
//             }}
//           >
//             <p
//               style={{
//                 margin: 0,
//                 fontSize: 13,
//                 color: "#e2e8f0",
//                 fontWeight: 700,
//                 fontFamily: "'Space Grotesk',sans-serif",
//               }}
//             >
//               {v}
//             </p>
//             <p
//               style={{
//                 margin: 0,
//                 fontSize: 9,
//                 color: "#64748b",
//                 fontFamily: "'DM Sans',sans-serif",
//               }}
//             >
//               {l}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ── Shared badge ────────────────────────────────────────────────── */
// function StatusBadge() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         gap: 4,
//         background: "rgba(74,222,128,.1)",
//         border: "1px solid rgba(74,222,128,.35)",
//         borderRadius: 20,
//         padding: "3px 9px",
//         flexShrink: 0,
//       }}
//     >
//       <div
//         style={{
//           width: 5,
//           height: 5,
//           borderRadius: "50%",
//           background: "#4ade80",
//         }}
//       />
//       <span
//         style={{
//           fontSize: 10.5,
//           color: "#4ade80",
//           fontFamily: "'DM Sans',sans-serif",
//           fontWeight: 600,
//         }}
//       >
//         Done
//       </span>
//     </div>
//   );
// }

// /* ── Countdown ───────────────────────────────────────────────────── */
// function Countdown({ seconds }) {
//   const r = 20;
//   const circ = 2 * Math.PI * r;
//   const pct = seconds / (RESTART_DELAY / 1000);
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         gap: 10,
//         background: "rgba(15,23,42,.8)",
//         border: "1px solid rgba(56,189,248,.2)",
//         borderRadius: 50,
//         padding: "8px 18px 8px 10px",
//       }}
//     >
//       <svg
//         width="48"
//         height="48"
//         style={{ transform: "rotate(-90deg)", flexShrink: 0 }}
//       >
//         <circle
//           cx="24"
//           cy="24"
//           r={r}
//           fill="none"
//           stroke="rgba(51,65,85,.5)"
//           strokeWidth="3"
//         />
//         <circle
//           cx="24"
//           cy="24"
//           r={r}
//           fill="none"
//           stroke="#38bdf8"
//           strokeWidth="3"
//           strokeDasharray={circ}
//           strokeDashoffset={circ * (1 - pct)}
//           style={{ transition: "stroke-dashoffset 1s linear" }}
//         />
//         <text
//           x="24"
//           y="24"
//           textAnchor="middle"
//           dominantBaseline="middle"
//           fill="#38bdf8"
//           fontSize="13"
//           fontWeight="700"
//           fontFamily="'DM Mono',monospace"
//           style={{ transform: "rotate(90deg)", transformOrigin: "24px 24px" }}
//         >
//           {seconds}
//         </text>
//       </svg>
//       <div>
//         <p
//           style={{
//             margin: 0,
//             fontSize: 12,
//             fontWeight: 600,
//             color: "#e2e8f0",
//             fontFamily: "'DM Sans',sans-serif",
//           }}
//         >
//           All Complete!
//         </p>
//         <p
//           style={{
//             margin: 0,
//             fontSize: 10,
//             color: "#64748b",
//             fontFamily: "'DM Sans',sans-serif",
//           }}
//         >
//           Restarting in {seconds}s…
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ── Connector arrow ─────────────────────────────────────────────── */
// function Arrow({ visible }) {
//   return (
//     <div
//       style={{
//         flexShrink: 0,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         width: 28,
//         opacity: visible ? 1 : 0,
//         transition: "opacity .5s ease",
//       }}
//     >
//       <svg width="28" height="20" viewBox="0 0 28 20">
//         <defs>
//           <linearGradient id="ag" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="#38bdf8" stopOpacity=".6" />
//             <stop offset="100%" stopColor="#818cf8" stopOpacity=".6" />
//           </linearGradient>
//         </defs>
//         <line
//           x1="2"
//           y1="10"
//           x2="22"
//           y2="10"
//           stroke="url(#ag)"
//           strokeWidth="2"
//           strokeDasharray="4 3"
//         />
//         <polyline
//           points="16,4 24,10 16,16"
//           fill="none"
//           stroke="#818cf8"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </div>
//   );
// }

// /* ── Main ────────────────────────────────────────────────────────── */
// function delay(ms) {
//   return new Promise((r) => setTimeout(r, ms));
// }

// export default function SidebySideAnimation() {
//   const [show1, setShow1] = useState(false);
//   const [show2, setShow2] = useState(false);
//   const [show3, setShow3] = useState(false);
//   const [tick1, setTick1] = useState(0);
//   const [tick2, setTick2] = useState(0);
//   const [tick3, setTick3] = useState(0);
//   const [countdown, setCountdown] = useState(null);
//   const [cycle, setCycle] = useState(0);

//   const rafRef = useRef(null);
//   const stopRef = useRef(false);

//   const animateTick = useCallback((setter, duration) => {
//     return new Promise((resolve) => {
//       let start = null;
//       const step = (ts) => {
//         if (stopRef.current) return;
//         if (!start) start = ts;
//         const t = Math.min(((ts - start) / duration) * 100, 100);
//         setter(t);
//         if (t < 100) rafRef.current = requestAnimationFrame(step);
//         else resolve();
//       };
//       rafRef.current = requestAnimationFrame(step);
//     });
//   }, []);

//   useEffect(() => {
//     stopRef.current = false;
//     const run = async () => {
//       while (!stopRef.current) {
//         // reset
//         setCycle((c) => c + 1);
//         setShow1(false);
//         setShow2(false);
//         setShow3(false);
//         setTick1(0);
//         setTick2(0);
//         setTick3(0);
//         setCountdown(null);
//         await delay(400);

//         // card 1
//         setShow1(true);
//         await animateTick(setTick1, SCENE_DURATION);
//         if (stopRef.current) return;
//         await delay(GAP_BETWEEN);

//         // card 2
//         setShow2(true);
//         await animateTick(setTick2, SCENE_DURATION);
//         if (stopRef.current) return;
//         await delay(GAP_BETWEEN);

//         // card 3
//         setShow3(true);
//         await animateTick(setTick3, SCENE_DURATION);
//         if (stopRef.current) return;

//         // 10s countdown
//         for (let s = RESTART_DELAY / 1000; s >= 1; s--) {
//           setCountdown(s);
//           await delay(1000);
//           if (stopRef.current) return;
//         }
//         setCountdown(null);
//         await delay(300);
//       }
//     };
//     run();
//     return () => {
//       stopRef.current = true;
//       cancelAnimationFrame(rafRef.current);
//     };
//   }, [animateTick]);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background:
//           "radial-gradient(ellipse at 20% 50%, #0a1628 0%, #020a14 60%, #070d1c 100%)",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "32px 24px",
//       }}
//     >
//       <style>{`
//         @keyframes bop{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
//         @keyframes fadeDown{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:none}}
//         @keyframes scanline{from{background-position:0 0}to{background-position:0 100%}}
//       `}</style>

//       {/* Title */}
//       <div
//         style={{
//           textAlign: "center",
//           marginBottom: 36,
//           animation: "fadeDown .7s ease both",
//         }}
//       >
//         <p
//           style={{
//             fontSize: 10,
//             letterSpacing: 4,
//             color: "#38bdf8",
//             textTransform: "uppercase",
//             fontFamily: "'DM Mono',monospace",
//             marginBottom: 8,
//           }}
//         >
//           Smart Parking System
//         </p>
//         <h1
//           style={{
//             fontSize: 28,
//             fontWeight: 700,
//             fontFamily: "'Space Grotesk',sans-serif",
//             color: "#f1f5f9",
//             letterSpacing: "-.5px",
//           }}
//         >
//           AI-Powered Layout Generator
//         </h1>
//         {/* <p style={{marginTop:6,fontSize:12,color:"#475569",fontFamily:"'DM Sans',sans-serif"}}>
//           Cycle #{cycle} · Fully automated demo
//         </p> */}
//       </div>

//       {/* Three cards side by side */}
//       <div
//         style={{
//           display: "flex",
//           //   gap:20,
//           flexDirection: "row",
//           alignItems: "stretch",
//           gap: "30px",
//           width: "100%",
//           maxWidth: 1250,
//           //   border:'1px solid red',
//         }}
//       >
//         <UploadCard tick={tick1} visible={show1} />
//         {/* <Arrow visible={show2} /> */}
//         <AICard tick={tick2} visible={show2} />
//         {/* <Arrow visible={show3} /> */}
//         <ParkingCard tick={tick3} visible={show3} />
//       </div>

//       {/* Countdown / status */}
//       <div
//         style={{
//           marginTop: 28,
//           minHeight: 52,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {countdown !== null ? (
//           <Countdown seconds={countdown} />
//         ) : (
//           <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
//             <div
//               style={{
//                 width: 7,
//                 height: 7,
//                 borderRadius: "50%",
//                 background: "#38bdf8",
//                 boxShadow: "0 0 8px #38bdf8",
//                 animation: "bop 1.8s ease-in-out infinite",
//               }}
//             />
//             <span
//               style={{
//                 fontSize: 11.5,
//                 color: "#475569",
//                 fontFamily: "'DM Sans',sans-serif",
//               }}
//             >
//               {!show1
//                 ? "Initializing…"
//                 : !show2
//                   ? "Step 1 running…"
//                   : !show3
//                     ? "Step 2 running…"
//                     : "Step 3 running…"}
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useLanguage } from "@/app/translations/context/LanguageContext";
import { useState, useEffect, useRef, useCallback } from "react";

// ── Timing ───────────────────────────────────────────────────────────────────
const SCENE_DURATION = 3500;
const GAP_BETWEEN = 500;
const RESTART_DELAY = 10000;

// ── Responsive hook ──────────────────────────────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// ── Car SVG ──────────────────────────────────────────────────────────────────
const CARS = [
  { body: "#f5c518", win: "#444" },
  { body: "#e63946", win: "#2d2d4e" },
  { body: "#06d6a0", win: "#1b4332" },
  { body: "#9b5de5", win: "#3a0ca3" },
  { body: "#ff9f1c", win: "#5c3d00" },
  { body: "#a8dadc", win: "#457b9d" },
];

function Car({ c, dropped }) {
  return (
    <div
      style={{
        transition:
          "transform .85s cubic-bezier(.22,1,.36,1), opacity .6s ease",
        transform: dropped
          ? "translateY(0) scale(1)"
          : "translateY(-90px) scale(.8)",
        opacity: dropped ? 1 : 0,
      }}
    >
      <svg width="38" height="66" viewBox="0 0 38 66">
        <ellipse cx="19" cy="62" rx="13" ry="3.5" fill="rgba(0,0,0,.22)" />
        <rect x="3" y="14" width="32" height="44" rx="8" fill={c.body} />
        <rect x="6" y="6" width="26" height="22" rx="6" fill={c.body} />
        <rect
          x="9"
          y="8"
          width="20"
          height="13"
          rx="3.5"
          fill={c.win}
          opacity=".85"
        />
        <rect
          x="9"
          y="39"
          width="20"
          height="9"
          rx="2.5"
          fill={c.win}
          opacity=".7"
        />
        <rect x="0" y="17" width="6" height="11" rx="3" fill="#111" />
        <rect x="32" y="17" width="6" height="11" rx="3" fill="#111" />
        <rect x="0" y="40" width="6" height="11" rx="3" fill="#111" />
        <rect x="32" y="40" width="6" height="11" rx="3" fill="#111" />
        <rect
          x="8"
          y="51"
          width="7"
          height="3.5"
          rx="1.5"
          fill="#fff"
          opacity=".9"
        />
        <rect
          x="23"
          y="51"
          width="7"
          height="3.5"
          rx="1.5"
          fill="#fff"
          opacity=".9"
        />
      </svg>
    </div>
  );
}

// ── Shared Done Badge ────────────────────────────────────────────────────────
function StatusBadge() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        background: "rgba(74,222,128,.1)",
        border: "1px solid rgba(74,222,128,.35)",
        borderRadius: 20,
        padding: "3px 9px",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#4ade80",
        }}
      />
      <span
        style={{
          fontSize: 10.5,
          color: "#4ade80",
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 600,
        }}
      >
        Done
      </span>
    </div>
  );
}

// ── Arrow — horizontal (desktop) or vertical (mobile) ───────────────────────
function Arrow({ visible, vertical }) {
  return (
    <div
      style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: vertical ? "100%" : 28,
        height: vertical ? 28 : "auto",
        opacity: visible ? 1 : 0,
        transition: "opacity .5s ease",
      }}
    >
      {vertical ? (
        // ↓ vertical arrow for mobile
        <svg width="20" height="28" viewBox="0 0 20 28">
          <defs>
            <linearGradient id="agv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity=".6" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity=".6" />
            </linearGradient>
          </defs>
          <line
            x1="10"
            y1="2"
            x2="10"
            y2="22"
            stroke="url(#agv)"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          <polyline
            points="4,16 10,24 16,16"
            fill="none"
            stroke="#818cf8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        // → horizontal arrow for desktop
        <svg width="28" height="20" viewBox="0 0 28 20">
          <defs>
            <linearGradient id="agh" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity=".6" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity=".6" />
            </linearGradient>
          </defs>
          <line
            x1="2"
            y1="10"
            x2="22"
            y2="10"
            stroke="url(#agh)"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          <polyline
            points="16,4 24,10 16,16"
            fill="none"
            stroke="#818cf8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

// ── Upload Card ──────────────────────────────────────────────────────────────
function UploadCard({ tick, visible, isMobile, t }) {
  const phase = tick < 18 ? 0 : tick < 45 ? 1 : tick < 78 ? 2 : 3;
  const progress =
    phase === 2 ? Math.min(100, ((tick - 45) / 33) * 100) : phase > 2 ? 100 : 0;
  const done = phase === 3;
  // "layout_v3.mp4", "parking_data.csv",
  const files = ["site_map.dxf"];

  return (
    <div
      style={{
        flex: isMobile ? "unset" : "1 1 0",
        width: isMobile ? "100%" : "auto",
        background: "#000000",
        backdropFilter: "blur(24px)",
        border: `1.5px solid ${done ? "rgba(74,222,128,.45)" : "rgba(56,189,248,.28)"}`,
        borderRadius: 22,
        padding: isMobile ? "18px 16px" : "22px 18px 20px",
        position: "relative",
        overflow: "hidden",
        transition:
          "opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1), border-color .6s",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate(0,0) scale(1)"
          : isMobile
            ? "translateY(-20px) scale(.97)"
            : "translateX(-40px) scale(.97)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* progress bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "rgba(51,65,85,.45)",
          borderRadius: "22px 22px 0 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${tick}%`,
            background: "#05df72",
            transition: "width .08s linear",
          }}
        />
      </div>
      {/* glow */}
      <div
        style={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse,rgba(56,189,248,.13) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: "rgba(56,189,248,.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                fontWeight: 600,
                color: "#e2e8f0",
                fontFamily: "'DM Sans',sans-serif",
                lineHeight: 1.2,
              }}
            >
             {t?.uploadfiles}
            </p>
            {/* <p
              style={{
                margin: 0,
                fontSize: 10,
                color: "#64748b",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              Step 01
            </p> */}
          </div>
        </div>
        {done && <StatusBadge />}
      </div>

      {/* drop zone */}
      <div
        style={{
          height: isMobile ? 72 : 158,
          border: `2px dashed ${phase >= 1 ? "#38bdf8" : "#2a3a52"}`,
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          background: phase >= 1 ? "rgba(56,189,248,.06)" : "rgba(15,23,42,.4)",
          transition: "all .5s",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {phase >= 1 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 0%,rgba(56,189,248,.15) 0%,transparent 70%)",
            }}
          />
        )}
        <p
          style={{
            margin: 0,
            color: phase >= 1 ? "#38bdf8" : "#4a5568",
            fontSize: 11.5,
            fontFamily: "'DM Sans',sans-serif",
            position: "relative",
            transition: "color .4s",
          }}
        >
          {phase === 0
            ? "Drop files here"
            : phase === 1
              ? "Release to upload…"
              : phase === 2
                ? "Uploading…"
                : "✓ All files uploaded!"}
        </p>
        {done && (
          <p
            style={{
              margin: 0,
              color: "#4ade80",
              fontSize: 10.5,
              fontFamily: "'DM Sans',sans-serif",
              position: "relative",
            }}
          >
            Ready for AI
          </p>
        )}
      </div>

      {/* file rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {files.map((f, i) => (
          <div
            key={f}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(15,23,42,.55)",
              borderRadius: 9,
              padding: "7px 10px",
              border: "1px solid rgba(51,65,85,.55)",
              opacity: phase >= 1 ? 1 : 0.2,
              transition: `opacity .5s ease ${i * 100}ms`,
            }}
          >
            <div
              style={{
                width: 22,
                height: 30,
                borderRadius: 5,
                background: "rgba(56,189,248,.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: "#e2e8f0",
                  // fontFamily: "'DM Sans',sans-serif",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {f}
              </p>
              {i === 0 && phase === 2 && (
                <div
                  style={{
                    marginTop: 3,
                    height: 2,
                    borderRadius: 2,
                    background: "#1e293b",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${progress}%`,
                      background: "linear-gradient(90deg,#38bdf8,#818cf8)",
                      transition: "width .1s linear",
                    }}
                  />
                </div>
              )}
            </div>
            {(done || (i === 0 && progress >= 98)) && (
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4ade80"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── AI Card ──────────────────────────────────────────────────────────────────
function AICard({ tick, visible, isMobile, t }) {
  const done = tick > 88;
  const angle = tick * 4.32;
  const pulse = 1 + Math.sin(tick * 0.18) * 0.04;
  const orbits = [0, 60, 120];
  const steps = ["Parsing vehicle data", "Optimizing slots", "Generating grid"];

  return (
    <div
      style={{
        flex: isMobile ? "unset" : "1 1 0",
        width: isMobile ? "100%" : "auto",
        background: "#000000",
        backdropFilter: "blur(24px)",
        border: `1.5px solid ${done ? "rgba(74,222,128,.45)" : "rgba(129,140,248,.3)"}`,
        borderRadius: 22,
        padding: isMobile ? "18px 16px" : "22px 18px 20px",
        position: "relative",
        overflow: "hidden",
        transition:
          "opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1), border-color .6s",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(30px) scale(.97)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "rgba(51,65,85,.45)",
          borderRadius: "22px 22px 0 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${tick}%`,
            background: "#05df72",
            transition: "width .08s linear",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: -50,
          left: -50,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse,rgba(129,140,248,.11) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: "rgba(129,140,248,.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#818cf8"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                fontWeight: 600,
                color: "#e2e8f0",
                fontFamily: "'DM Sans',sans-serif",
                lineHeight: 1.2,
              }}
            >
              {t?.parkinaiprogess}
            </p>
            {/* <p
              style={{
                margin: 0,
                fontSize: 10,
                color: "#64748b",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              Step 02
            </p> */}
          </div>
        </div>
        {done && <StatusBadge />}
      </div>

      {/* atom */}
      <div
        style={{
          position: "relative",
          width: isMobile ? 100 : 150,
          height: isMobile ? 100 : 150,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: -12,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse,rgba(129,140,248,.2) 0%,transparent 70%)",
            transform: `scale(${pulse})`,
          }}
        />
        <svg
          width={isMobile ? 100 : 150}
          height={isMobile ? 100 : 150}
          viewBox="-60 -60 120 120"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {orbits.map((tilt, i) => {
            const a = ((angle + i * 120) * Math.PI) / 180;
            const x = Math.cos(a) * 50,
              y = Math.sin(a) * 25;
            return (
              <g key={i} transform={`rotate(${tilt})`}>
                <ellipse
                  cx="0"
                  cy="0"
                  rx="50"
                  ry="25"
                  fill="none"
                  stroke="rgba(129,140,248,.4)"
                  strokeWidth="1.5"
                />
                <circle cx={x} cy={y} r="4" fill="#fff" />
                <circle cx={x} cy={y} r="6.5" fill="rgba(255,255,255,.18)" />
              </g>
            );
          })}
          <circle
            cx="0"
            cy="0"
            r="24"
            fill="rgba(13,20,40,.95)"
            stroke="rgba(129,140,248,.5)"
            strokeWidth="1.5"
          />
          <text
            x="0"
            y="7"
            textAnchor="middle"
            fill="#818cf8"
            fontSize="17"
            fontWeight="700"
            fontFamily="'Space Grotesk',sans-serif"
          >
            AI
          </text>
        </svg>
      </div>

      <p
        style={{
          margin: 0,
          color: done ? "#4ade80" : "#818cf8",
          fontSize: 12,
          fontFamily: "'DM Sans',sans-serif",
          transition: "color .5s",
          textAlign: "center",
        }}
      >
        {done ?  `✓ ${t?.layoutdone}` : t?.parsingvehicledata}
      </p>
      {!done && (
        <div style={{ display: "flex", gap: 5 }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#818cf8",
                animation: `bop 1s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 7,
        }}
      >
        {steps.map((s, i) => {
          const sd = done || tick > 35 + i * 20;
          return (
            <div
              key={s}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                opacity: tick > 10 + i * 15 ? 1 : 0,
                transition: `opacity .5s ease ${i * 180}ms`,
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: sd
                    ? "rgba(74,222,128,.14)"
                    : "rgba(129,140,248,.14)",
                  border: `1.5px solid ${sd ? "#4ade80" : "#818cf8"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {sd ? (
                  <svg
                    width="7"
                    height="7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#818cf8",
                    }}
                  />
                )}
              </div>
              <span
                style={{
                  fontSize: 11,
                  color: sd ? "#94a3b8" : "#cbd5e1",
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                {s}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Parking Card ─────────────────────────────────────────────────────────────
function ParkingCard({ tick, visible, isMobile,t }) {
  const done = tick > 90;
  const spots = [
    { ci: null },
    { ci: 0 },
    { ci: 1 },
    { ci: 2 },
    { ci: null },
    { ci: 3 },
    { ci: 4 },
    { ci: 5 },
    { ci: null },
    { ci: 6 },
  ];

  return (
    <div
      style={{
        flex: isMobile ? "unset" : "1 1 0",
        width: isMobile ? "100%" : "auto",
        // rgba(13,20,40,.92)
        background: "#000000",
        backdropFilter: "blur(24px)",
        border: `1.5px solid ${done ? "rgba(74,222,128,.45)" : "rgba(74,222,128,.22)"}`,
        borderRadius: 22,
        padding: isMobile ? "18px 16px" : "22px 18px 20px",
        position: "relative",
        overflow: "hidden",
        transition:
          "opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1), border-color .6s",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate(0,0) scale(1)"
          : isMobile
            ? "translateY(20px) scale(.97)"
            : "translateX(40px) scale(.97)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "rgba(51,65,85,.45)",
          borderRadius: "22px 22px 0 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${tick}%`,
            background: "#05df72",
            transition: "width .08s linear",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: -50,
          right: -50,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse,rgba(74,222,128,.09) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: "rgba(74,222,128,.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4ade80"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                fontWeight: 600,
                color: "#e2e8f0",
                fontFamily: "'DM Sans',sans-serif",
                lineHeight: 1.2,
              }}
            >
            {t?.ParkingLayout}
            </p>
            {/* <p
              style={{
                margin: 0,
                fontSize: 10,
                color: "#64748b",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              Step 03
            </p> */}
          </div>
        </div>
        {done && <StatusBadge />}
      </div>

      {/* legend */}
      <div style={{ display: "flex", gap: 12 }}>
        {[
          ["#4ade80", "Available"],
          ["#f87171", "Occupied"],
        ].map(([c, l]) => (
          <div
            key={l}
            style={{ display: "flex", alignItems: "center", gap: 4 }}
          >
            <div
              style={{ width: 8, height: 8, borderRadius: 2, background: c }}
            />
            <span
              style={{
                fontSize: 10,
                color: "#94a3b8",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {l}
            </span>
          </div>
        ))}
      </div>

      {/* grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: isMobile ? 4 : 4,
          background: "#131e33",
          borderRadius: 11,
          padding: isMobile ? 6 : 7,
          border: "1px solid rgba(51,65,85,.6)",
        }}
      >
        {spots.map((sp, i) => {
          const occ = sp.ci !== null;
          const dropped = occ && tick > 6 + i * 8;
          return (
            <div
              key={i}
              style={{
                aspectRatio: "0.58",
                background: occ
                  ? "rgba(248,113,113,.08)"
                  : "rgba(74,222,128,.07)",
                border: `1.5px solid ${occ ? "rgba(248,113,113,.28)" : "rgba(74,222,128,.28)"}`,
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 2,
                  left: 3,
                  fontSize: 7,
                  color: occ ? "rgba(248,113,113,.65)" : "rgba(74,222,128,.65)",
                  fontFamily: "'DM Mono',monospace",
                  fontWeight: 600,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {occ && <Car c={CARS[sp.ci % CARS.length]} dropped={dropped} />}
            </div>
          );
        })}
      </div>

      {/* stats */}
      <div
        style={{
          display: "flex",
          background: "rgba(13,20,40,.65)",
          borderRadius: 9,
          overflow: "hidden",
          border: "1px solid rgba(51,65,85,.4)",
        }}
      >
        {[
          ["10", "Total"],
          ["7", "Occupied"],
          ["5", "Free"],
          ["70%", "Fill"],
        ].map(([v, l], i) => (
          <div
            key={l}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "7px 2px",
              borderRight: i < 3 ? "1px solid rgba(51,65,85,.4)" : "none",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: "#e2e8f0",
                fontWeight: 700,
                fontFamily: "'Space Grotesk',sans-serif",
              }}
            >
              {v}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 9,
                color: "#64748b",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {l}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Countdown ────────────────────────────────────────────────────────────────
function Countdown({ seconds }) {
  const r = 20;
  const circ = 2 * Math.PI * r;
  const pct = seconds / (RESTART_DELAY / 1000);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "rgba(15,23,42,.8)",
        border: "1px solid rgba(56,189,248,.2)",
        borderRadius: 50,
        padding: "8px 18px 8px 10px",
      }}
    >
      <svg
        width="48"
        height="48"
        style={{ transform: "rotate(-90deg)", flexShrink: 0 }}
      >
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke="rgba(51,65,85,.5)"
          strokeWidth="3"
        />
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - pct)}
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
        <text
          x="24"
          y="24"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#38bdf8"
          fontSize="13"
          fontWeight="700"
          fontFamily="'DM Mono',monospace"
          style={{ transform: "rotate(90deg)", transformOrigin: "24px 24px" }}
        >
          {seconds}
        </text>
      </svg>
      <div>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            fontWeight: 600,
            color: "#e2e8f0",
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          All Complete!
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 10,
            color: "#64748b",
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          Restarting in {seconds}s…
        </p>
      </div>
    </div>
  );
}

// ── delay util ───────────────────────────────────────────────────────────────
function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function ProductAnimation() {
  const isMobile = useIsMobile();
    const { lang, changeLanguage, t } = useLanguage();

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [tick1, setTick1] = useState(0);
  const [tick2, setTick2] = useState(0);
  const [tick3, setTick3] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [cycle, setCycle] = useState(0);

  const rafRef = useRef(null);
  const stopRef = useRef(false);

  const animateTick = useCallback((setter, duration) => {
    return new Promise((resolve) => {
      let start = null;
      const step = (ts) => {
        if (stopRef.current) return;
        if (!start) start = ts;
        const t = Math.min(((ts - start) / duration) * 100, 100);
        setter(t);
        if (t < 100) rafRef.current = requestAnimationFrame(step);
        else resolve();
      };
      rafRef.current = requestAnimationFrame(step);
    });
  }, []);

  useEffect(() => {
    stopRef.current = false;
    const run = async () => {
      while (!stopRef.current) {
        setCycle((c) => c + 1);
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setTick1(0);
        setTick2(0);
        setTick3(0);
        setCountdown(null);
        await delay(400);

        setShow1(true);
        await animateTick(setTick1, SCENE_DURATION);
        if (stopRef.current) return;
        await delay(GAP_BETWEEN);

        setShow2(true);
        await animateTick(setTick2, SCENE_DURATION);
        if (stopRef.current) return;
        await delay(GAP_BETWEEN);

        setShow3(true);
        await animateTick(setTick3, SCENE_DURATION);
        if (stopRef.current) return;

        for (let s = RESTART_DELAY / 1000; s >= 1; s--) {
          setCountdown(s);
          await delay(1000);
          if (stopRef.current) return;
        }
        setCountdown(null);
        await delay(300);
      }
    };
    run();
    return () => {
      stopRef.current = true;
      cancelAnimationFrame(rafRef.current);
    };
  }, [animateTick]);

  return (
    <div
      style={{
        minHeight: "100vh",

        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "120px 120px",
        backgroundColor: "black",
        // background:
        //   "radial-gradient(ellipse at 20% 50%, #0a1628 0%, #020a14 60%, #070d1c 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "24px 16px" : "32px 24px",
      }}
    >
      <style>{`
        @keyframes bop { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:none} }
      `}</style>

      {/* ── Title ── */}
      <div
        style={{
          textAlign: "center",
          marginBottom: isMobile ? 24 : 36,
          animation: "fadeDown .7s ease both",
          width: "100%",
        }}
      >
        <p
          style={{
            fontSize: 18,
            letterSpacing: 4,
            color: "#05df72",
            textTransform: "uppercase",
            fontFamily: "'DM Mono',monospace",
            marginBottom: 8,
          }}
        >
          {t?.parkingtitle}
        </p>
        <h1
          style={{
            fontSize: isMobile ? 20 : 28,
            fontWeight: 700,
            fontFamily: "'Space Grotesk',sans-serif",
            color: "#f1f5f9",
            letterSpacing: "-.5px",
          }}
        >
          {t?.parkingdesc}
        </h1>
        {/* <p
          style={{
            marginTop: 6,
            fontSize: 12,
            color: "#475569",
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          Cycle #{cycle} · Fully automated demo
        </p> */}
      </div>

      {/* ── Cards container ── */}
      {/* MOBILE: column | DESKTOP: row */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "stretch" : "stretch",
          gap: "30px",
          width: "100%",
          maxWidth: isMobile ? 480 : 1250,
        }}
      >
        <UploadCard tick={tick1} visible={show1} isMobile={isMobile} t={t} />
        {/* <Arrow visible={show2} vertical={isMobile} /> */}
        <AICard tick={tick2} visible={show2} isMobile={isMobile} t={t} />
        {/* <Arrow visible={show3} vertical={isMobile} /> */}
        <ParkingCard tick={tick3} visible={show3} isMobile={isMobile} t={t} />
      </div>

      {/* ── Countdown / status ── */}
      {/* <div
        style={{
          marginTop: 24,
          minHeight: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {countdown !== null ? (
          <Countdown seconds={countdown} />
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#38bdf8",
                boxShadow: "0 0 8px #38bdf8",
                animation: "bop 1.8s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: 11.5,
                color: "#475569",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {!show1
                ? "Initializing…"
                : !show2
                  ? "Step 1 running…"
                  : !show3
                    ? "Step 2 running…"
                    : "Step 3 running…"}
            </span>
          </div>
        )}
      </div> */}
    </div>
  );
}
