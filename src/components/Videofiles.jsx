// "use client";
// import { useRef, useState, useEffect } from "react";

// // Load GSAP from CDN via useEffect
// export default function VideoHero() {
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);
//   const heroRef = useRef(null);
//   const section2Ref = useRef(null);
//   const section3Ref = useRef(null);
//   const overlayTextRef = useRef(null);
//   const muteButtonRef = useRef(null);
//   const scrollIndicatorRef = useRef(null);

//   const [isMuted, setIsMuted] = useState(true);
//   const [gsapLoaded, setGsapLoaded] = useState(false);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//     }
//   };

//   // Dynamically load GSAP + ScrollTrigger
//   useEffect(() => {
//     const loadGSAP = async () => {
//       if (window.gsap && window.ScrollTrigger) {
//         setGsapLoaded(true);
//         return;
//       }

//       const gsapScript = document.createElement("script");
//       gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
//       gsapScript.onload = () => {
//         const stScript = document.createElement("script");
//         stScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
//         stScript.onload = () => setGsapLoaded(true);
//         document.head.appendChild(stScript);
//       };
//       document.head.appendChild(gsapScript);
//     };

//     loadGSAP();
//   }, []);

//   // Init animations once GSAP is loaded
//   useEffect(() => {
//     if (!gsapLoaded) return;

//     const { gsap } = window;
//     const { ScrollTrigger } = window;

//     gsap.registerPlugin(ScrollTrigger);

//     // --- Hero entrance animation ---
//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//     tl.fromTo(
//       videoRef.current,
//       { scale: 1.12, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 1.4 }
//     )
//       .fromTo(
//         overlayTextRef.current,
//         { y: 60, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.9 },
//         "-=0.6"
//       )
//       .fromTo(
//         muteButtonRef.current,
//         { x: 30, opacity: 0 },
//         { x: 0, opacity: 1, duration: 0.5 },
//         "-=0.3"
//       )
//       .fromTo(
//         scrollIndicatorRef.current,
//         { y: -10, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5, repeat: -1, yoyo: true },
//         "-=0.2"
//       );

//     // --- Parallax on hero video while scrolling ---
//     gsap.to(videoRef.current, {
//       yPercent: 25,
//       ease: "none",
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, [gsapLoaded]);

//   return (
//     <>
//       <style>{`

//         /* ── HERO ── */
//         .vh-hero {
//           position: relative;
//           width: 100%;
//           height: 100svh;
//           overflow: hidden;
//           background: #000;
//         }

//         .vh-video {
//           position: absolute;
//           inset: 0;
//           width: 80%;
//           height:100%;
//           margin:auto;
//           object-fit: cover;
//           display: block;
//           will-change: transform;
//           border-redius:10px;
//         }

//         .vh-hero-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to bottom,
//             rgba(0,0,0,0.15) 0%,
//             rgba(0,0,0,0.6) 100%
//           );
//           pointer-events: none;
//         }

//         .vh-hero-text {
//           position: absolute;
//           bottom: clamp(60px, 10vw, 120px);
//           left: clamp(20px, 6vw, 80px);
//           right: clamp(20px, 6vw, 80px);
//         }

//         .vh-hero-eyebrow {
//           font-family: 'DM Sans', sans-serif;
//           font-size: clamp(11px, 1.2vw, 13px);
//           font-weight: 500;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: rgba(240,236,228,0.55);
//           margin-bottom: 12px;
//         }

//         .vh-hero-title {
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: clamp(56px, 9vw, 140px);
//           line-height: 0.95;
//           letter-spacing: 0.02em;
//           color: #f0ece4;
//           text-shadow: 0 4px 40px rgba(0,0,0,0.5);
//         }

//         .vh-hero-title span {
//           color: #e8c97a;
//         }

//         .vh-mute-btn {
//           position: absolute;
//           bottom: clamp(20px, 4vw, 36px);
//           right: clamp(16px, 4vw, 36px);
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 10px 18px;
//           background: rgba(240,236,228,0.08);
//           backdrop-filter: blur(12px);
//           border: 1px solid rgba(240,236,228,0.18);
//           color: #f0ece4;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 13px;
//           font-weight: 500;
//           letter-spacing: 0.05em;
//           cursor: pointer;
//           border-radius: 4px;
//           transition: background 0.2s, border-color 0.2s;
//           z-index: 10;
//         }
//         .vh-mute-btn:hover {
//           background: rgba(232,201,122,0.15);
//           border-color: rgba(232,201,122,0.4);
//         }

//         .vh-scroll-indicator {
//           position: absolute;
//           bottom: clamp(20px, 4vw, 36px);
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 8px;
//           opacity: 0.5;
//           z-index: 10;
//           pointer-events: none;
//         }
//         .vh-scroll-indicator span {
//           font-size: 10px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//         }
//         .vh-scroll-arrow {
//           width: 1px;
//           height: 40px;
//           background: linear-gradient(to bottom, rgba(240,236,228,0.8), transparent);
//         }

//         /* ── SECTION 2 ── */
//         .vh-section2 {
//           width: 100%;
//           min-height: 100svh;
//           background: #0d0c0b;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           align-items: center;
//           gap: 0;
//           overflow: hidden;
//         }

//         @media (max-width: 768px) {
//           .vh-section2 {
//             grid-template-columns: 1fr;
//             min-height: auto;
//             padding: 80px 0;
//           }
//         }

//         .vh-section2-visual {
//           position: relative;
//           height: 100svh;
//           overflow: hidden;
//         }

//         @media (max-width: 768px) {
//           .vh-section2-visual { height: 50vw; min-height: 280px; }
//         }

//         .vh-section2-img-placeholder {
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(135deg, #1a1612 0%, #2a2018 50%, #0e0c0b 100%);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .vh-section2-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2px;
//           width: 100%;
//           height: 100%;
//         }

//         .vh-grid-block {
//           background: linear-gradient(135deg, #1c1714, #252018);
//           display: flex;
//           align-items: flex-end;
//           padding: 20px;
//           position: relative;
//           overflow: hidden;
//         }

//         .vh-grid-block::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, rgba(232,201,122,0.04), transparent);
//           pointer-events: none;
//         }

//         .vh-grid-block-label {
//           font-size: 11px;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           color: rgba(232,201,122,0.5);
//         }

//         .vh-section2-content {
//           padding: clamp(40px, 7vw, 100px) clamp(32px, 6vw, 80px);
//         }

//         .vh-tag {
//           display: inline-block;
//           font-size: 11px;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: #e8c97a;
//           border: 1px solid rgba(232,201,122,0.3);
//           padding: 5px 14px;
//           border-radius: 2px;
//           margin-bottom: 28px;
//         }

//         .vh-section-title {
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: clamp(42px, 5.5vw, 80px);
//           line-height: 1;
//           letter-spacing: 0.02em;
//           color: #f0ece4;
//           margin-bottom: 24px;
//         }

//         .vh-section-body {
//           font-size: clamp(15px, 1.4vw, 17px);
//           line-height: 1.7;
//           color: rgba(240,236,228,0.5);
//           max-width: 440px;
//           margin-bottom: 40px;
//         }

//         .vh-cta {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           font-size: 13px;
//           font-weight: 500;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: #e8c97a;
//           text-decoration: none;
//           cursor: pointer;
//           background: none;
//           border: none;
//           padding: 0;
//           transition: gap 0.25s;
//         }
//         .vh-cta:hover { gap: 20px; }
//         .vh-cta-arrow {
//           width: 40px;
//           height: 1px;
//           background: #e8c97a;
//           position: relative;
//         }
//         .vh-cta-arrow::after {
//           content: '';
//           position: absolute;
//           right: 0;
//           top: -3px;
//           width: 7px;
//           height: 7px;
//           border-top: 1px solid #e8c97a;
//           border-right: 1px solid #e8c97a;
//           transform: rotate(45deg);
//         }

//         /* ── SECTION 3 ── */
//         .vh-section3 {
//           width: 100%;
//           min-height: 100svh;
//           background: #f0ece4;
//           color: #0d0c0b;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           padding: clamp(60px, 10vw, 120px) clamp(20px, 6vw, 80px);
//           text-align: center;
//           overflow: hidden;
//         }

//         .vh-section3 .vh-tag {
//           color: #0d0c0b;
//           border-color: rgba(13,12,11,0.25);
//           margin-bottom: 24px;
//         }

//         .vh-section3 .vh-section-title {
//           color: #0d0c0b;
//           font-size: clamp(48px, 7vw, 110px);
//           max-width: 900px;
//           margin-bottom: 20px;
//         }

//         .vh-section3 .vh-section-body {
//           color: rgba(13,12,11,0.5);
//           max-width: 560px;
//           margin: 0 auto 56px;
//         }

//         .vh-card-row {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: clamp(12px, 2vw, 24px);
//           width: 100%;
//           max-width: 900px;
//         }

//         @media (max-width: 600px) {
//           .vh-card-row { grid-template-columns: 1fr; }
//         }

//         .vh-card {
//           background: #0d0c0b;
//           color: #f0ece4;
//           padding: clamp(24px, 3vw, 40px) clamp(20px, 2.5vw, 32px);
//           border-radius: 4px;
//           text-align: left;
//           position: relative;
//           overflow: hidden;
//         }

//         .vh-card::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 2px;
//           background: linear-gradient(90deg, #e8c97a, transparent);
//         }

//         .vh-card-num {
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: 48px;
//           color: rgba(232,201,122,0.2);
//           line-height: 1;
//           margin-bottom: 16px;
//         }

//         .vh-card-title {
//           font-weight: 500;
//           font-size: 16px;
//           margin-bottom: 10px;
//           letter-spacing: 0.02em;
//         }

//         .vh-card-desc {
//           font-size: 13px;
//           line-height: 1.65;
//           color: rgba(240,236,228,0.45);
//         }
//       `}</style>

//       <div className="vh-root" ref={containerRef}>

//         {/* ── HERO SECTION ── */}
//         <section className="vh-hero" ref={heroRef}>
//           <video
//             ref={videoRef}
//             className="vh-video"
//             src="/video/og-watermark.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//           />

//           <button className="vh-mute-btn" ref={muteButtonRef} onClick={toggleMute}>
//             <span>{isMuted ? "🔇" : "🔊"}</span>
//             {isMuted ? "Unmute" : "Mute"}
//           </button>

//         </section>

//       </div>
//     </>
//   );
// }

// "use client";
// import { useRef, useState, useEffect } from "react";

// export default function VideoHero() {
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);
//   const heroRef = useRef(null);
//   const overlayTextRef = useRef(null);
//   const muteButtonRef = useRef(null);
//   const scrollIndicatorRef = useRef(null);

//   const [isMuted, setIsMuted] = useState(true);
//   const [gsapLoaded, setGsapLoaded] = useState(false);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//     }
//   };

//   useEffect(() => {
//     const loadGSAP = async () => {
//       if (window.gsap && window.ScrollTrigger) {
//         setGsapLoaded(true);
//         return;
//       }
//       const gsapScript = document.createElement("script");
//       gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
//       gsapScript.onload = () => {
//         const stScript = document.createElement("script");
//         stScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
//         stScript.onload = () => setGsapLoaded(true);
//         document.head.appendChild(stScript);
//       };
//       document.head.appendChild(gsapScript);
//     };
//     loadGSAP();
//   }, []);

//   useEffect(() => {
//     if (!gsapLoaded) return;
//     const { gsap, ScrollTrigger } = window;
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
//     tl.fromTo(videoRef.current, { scale: 1.12, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4 })
//       .fromTo(muteButtonRef.current, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, "-=0.3")
//       .fromTo(scrollIndicatorRef.current, { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, repeat: -1, yoyo: true }, "-=0.2");

//     gsap.to(videoRef.current, {
//       yPercent: 10,
//       ease: "none",
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, [gsapLoaded]);

//   return (
//     <>
//       <style>{`
//         /* ── HERO ── */
//         .vh-hero {
//           position: relative;
//           width: 100%;
//           height: 100svh;
//           overflow: hidden;
//           background: #000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* Centered video with padding from edges */
//         .vh-video-wrapper {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 82%;
//           height: 88%;
//           border-radius: 18px;
//           overflow: hidden;
//           will-change: transform;
//         }

//         .vh-video {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* Subtle gradient vignette inside the video card */
//         .vh-video-wrapper::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to bottom,
//             rgba(0,0,0,0.08) 0%,
//             rgba(0,0,0,0.55) 100%
//           );
//           pointer-events: none;
//           border-radius: 18px;
//         }

//         /* Mute button — bottom-right inside the video card */
//         .vh-mute-btn {
//           position: absolute;
//           bottom: clamp(28px, 5svh, 56px);
//           right: calc(9% + clamp(16px, 2vw, 28px));
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 10px 18px;
//           background: rgba(240,236,228,0.08);
//           backdrop-filter: blur(14px);
//           -webkit-backdrop-filter: blur(14px);
//           border: 1px solid rgba(240,236,228,0.18);
//           color: #f0ece4;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 13px;
//           font-weight: 500;
//           letter-spacing: 0.05em;
//           cursor: pointer;
//           border-radius: 6px;
//           transition: background 0.2s, border-color 0.2s;
//           z-index: 10;
//         }
//         .vh-mute-btn:hover {
//           background: rgba(232,201,122,0.15);
//           border-color: rgba(232,201,122,0.4);
//         }

//         /* Scroll indicator — bottom center of the full screen, outside video */
//         .vh-scroll-indicator {
//           position: absolute;
//           bottom: clamp(16px, 2.5svh, 28px);
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 8px;
//           opacity: 0.45;
//           z-index: 10;
//           pointer-events: none;
//           color: #f0ece4;
//         }
//         .vh-scroll-indicator span {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 10px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//         }
//         .vh-scroll-arrow {
//           width: 1px;
//           height: 36px;
//           background: linear-gradient(to bottom, rgba(240,236,228,0.8), transparent);
//         }
//       `}</style>

//       <div ref={containerRef}>
//         <section className="vh-hero" ref={heroRef}>

//           {/* Centered, padded video */}
//           <div className="vh-video-wrapper" ref={videoRef}>
//             <video
//               className="vh-video"
//               src="/video/og-watermark.mp4"
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//           </div>

//           {/* Mute button — floats over bottom-right of video */}
//           <button className="vh-mute-btn" ref={muteButtonRef} onClick={toggleMute}>
//             <span>{isMuted ? "🔇" : "🔊"}</span>
//             {isMuted ? "Unmute" : "Mute"}
//           </button>

//           {/* Scroll indicator — sits below the video card */}
//           <div className="vh-scroll-indicator" ref={scrollIndicatorRef}>
//             <span>Scroll</span>
//             <div className="vh-scroll-arrow" />
//           </div>

//         </section>
//       </div>
//     </>
//   );
// }

// "use client";
// import { useRef, useState, useEffect } from "react";

// export default function VideoHero() {
//   const videoRef = useRef(null);       // points to <video> — for mute control
//   const wrapperRef = useRef(null);     // points to wrapper div — for GSAP animation
//   const containerRef = useRef(null);
//   const heroRef = useRef(null);
//   const overlayTextRef = useRef(null);
//   const muteButtonRef = useRef(null);
//   const scrollIndicatorRef = useRef(null);

//   const [isMuted, setIsMuted] = useState(true);
//   const [gsapLoaded, setGsapLoaded] = useState(false);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//     }
//   };

//   useEffect(() => {
//     const loadGSAP = async () => {
//       if (window.gsap && window.ScrollTrigger) {
//         setGsapLoaded(true);
//         return;
//       }
//       const gsapScript = document.createElement("script");
//       gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
//       gsapScript.onload = () => {
//         const stScript = document.createElement("script");
//         stScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
//         stScript.onload = () => setGsapLoaded(true);
//         document.head.appendChild(stScript);
//       };
//       document.head.appendChild(gsapScript);
//     };
//     loadGSAP();
//   }, []);

//   useEffect(() => {
//     if (!gsapLoaded) return;
//     const { gsap, ScrollTrigger } = window;
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
//     tl.fromTo(wrapperRef.current, { scale: 1.12, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4 })
//       .fromTo(muteButtonRef.current, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, "-=0.3")
//       .fromTo(scrollIndicatorRef.current, { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, repeat: -1, yoyo: true }, "-=0.2");

//     gsap.to(wrapperRef.current, {
//       yPercent: 10,
//       ease: "none",
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, [gsapLoaded]);

//   return (
//     <>
//       <style>{`

//         /* ── HERO ── */
//         .vh-hero {
//           position: relative;
//           width: 100%;
//           height: 100svh;
//           overflow: hidden;
//           background: #000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* Centered video with padding from edges */
//         .vh-video-wrapper {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 82%;
//           height: 88%;
//           border-radius: 18px;
//           overflow: hidden;
//           will-change: transform;
//         }

//         .vh-video {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* Subtle gradient vignette inside the video card */
//         .vh-video-wrapper::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to bottom,
//             rgba(0,0,0,0.08) 0%,
//             rgba(0,0,0,0.55) 100%
//           );
//           pointer-events: none;
//           border-radius: 18px;
//         }

//         /* Mute button — bottom-right inside the video card */
//         .vh-mute-btn {
//           position: absolute;
//           bottom: clamp(28px, 5svh, 56px);
//           right: calc(9% + clamp(16px, 2vw, 28px));
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 10px 18px;
//           background: rgba(240,236,228,0.08);
//           backdrop-filter: blur(14px);
//           -webkit-backdrop-filter: blur(14px);
//           border: 1px solid rgba(240,236,228,0.18);
//           color: #f0ece4;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 13px;
//           font-weight: 500;
//           letter-spacing: 0.05em;
//           cursor: pointer;
//           border-radius: 6px;
//           transition: background 0.2s, border-color 0.2s;
//           z-index: 10;
//         }
//         .vh-mute-btn:hover {
//           background: rgba(232,201,122,0.15);
//           border-color: rgba(232,201,122,0.4);
//         }

//         /* Scroll indicator — bottom center of the full screen, outside video */
//         .vh-scroll-indicator {
//           position: absolute;
//           bottom: clamp(16px, 2.5svh, 28px);
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 8px;
//           opacity: 0.45;
//           z-index: 10;
//           pointer-events: none;
//           color: #f0ece4;
//         }
//         .vh-scroll-indicator span {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 10px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//         }
//         .vh-scroll-arrow {
//           width: 1px;
//           height: 36px;
//           background: linear-gradient(to bottom, rgba(240,236,228,0.8), transparent);
//         }
//       `}</style>

//       <div ref={containerRef}>
//         <section className="vh-hero" ref={heroRef}>

//           {/* Centered, padded video */}
//           <div className="vh-video-wrapper" ref={wrapperRef}>
//             <video
//               ref={videoRef}
//               className="vh-video"
//               src="/video/og-watermark.mp4"
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//           </div>

//           {/* Mute button — floats over bottom-right of video */}
//           <button className="vh-mute-btn" ref={muteButtonRef} onClick={toggleMute}>
//             <span>{isMuted ? "🔇" : "🔊"}</span>
//             {isMuted ? "Unmute" : "Mute"}
//           </button>

//           {/* Scroll indicator — sits below the video card */}
//           <div className="vh-scroll-indicator" ref={scrollIndicatorRef}>
//             <span>Scroll</span>
//             <div className="vh-scroll-arrow" />
//           </div>

//         </section>
//       </div>
//     </>
//   );
// }

"use client";
import { useRef, useState, useEffect } from "react";

export default function VideoHero() {
  const videoRef = useRef(null); // points to <video> — for mute control
  const wrapperRef = useRef(null); // points to wrapper div — for GSAP animation
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const overlayTextRef = useRef(null);
  const muteButtonRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    const loadGSAP = async () => {
      if (window.gsap && window.ScrollTrigger) {
        setGsapLoaded(true);
        return;
      }
      const gsapScript = document.createElement("script");
      gsapScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
      gsapScript.onload = () => {
        const stScript = document.createElement("script");
        stScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
        stScript.onload = () => setGsapLoaded(true);
        document.head.appendChild(stScript);
      };
      document.head.appendChild(gsapScript);
    };
    loadGSAP();
  }, []);

  useEffect(() => {
    if (!gsapLoaded) return;
    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      wrapperRef.current,
      { scale: 1.12, opacity: 0, transformOrigin: "center center" },
      { scale: 1, opacity: 1, duration: 1.4 },
    )
      .fromTo(
        muteButtonRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        "-=0.3",
      )
      .fromTo(
        scrollIndicatorRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, repeat: -1, yoyo: true },
        "-=0.2",
      );

    gsap.to(wrapperRef.current, {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [gsapLoaded]);

  return (
    <>
      <style>{`


        /* ── HERO ── */
        .vh-hero {
          position: relative;
          width: 100%;
          height: 100svh;
          overflow: hidden;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Centered video with padding from edges */
       .vh-video-wrapper {
  width: 70%;
  aspect-ratio: 16 / 9;
  border-radius: 18px;
  overflow: hidden;
}

.vh-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

        /* Subtle gradient vignette inside the video card */
        .vh-video-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.08) 0%,
            rgba(0,0,0,0.55) 100%
          );
          pointer-events: none;
          border-radius: 18px;
        }

        /* Mute button — bottom-right inside the video card */
        .vh-mute-btn {
          position: absolute;
          bottom: clamp(28px, 5svh, 56px);
          right: calc(9% + clamp(16px, 2vw, 28px));
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: rgba(240,236,228,0.08);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(240,236,228,0.18);
          color: #f0ece4;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          cursor: pointer;
          border-radius: 6px;
          transition: background 0.2s, border-color 0.2s;
          z-index: 10;
        }
        .vh-mute-btn:hover {
          background: rgba(232,201,122,0.15);
          border-color: rgba(232,201,122,0.4);
        }

        /* Scroll indicator — bottom center of the full screen, outside video */
        .vh-scroll-indicator {
          position: absolute;
          bottom: clamp(16px, 2.5svh, 28px);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.45;
          z-index: 10;
          pointer-events: none;
          color: #f0ece4;
        }
        .vh-scroll-indicator span {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .vh-scroll-arrow {
          width: 1px;
          height: 36px;
          background: linear-gradient(to bottom, rgba(240,236,228,0.8), transparent);
        }
      `}</style>

      <div ref={containerRef}>
        <section className="vh-hero" ref={heroRef}>
          {/* Centered, padded video */}
          <div className="vh-video-wrapper" ref={wrapperRef}>
            <video
              ref={videoRef}
              className="vh-video"
              src="/video/og-watermark.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Mute button — floats over bottom-right of video */}
          <button
            className="vh-mute-btn"
            ref={muteButtonRef}
            onClick={toggleMute}
          >
            <span>{isMuted ? "🔇" : "🔊"}</span>
            {isMuted ? "Unmute" : "Mute"}
          </button>

          {/* Scroll indicator — sits below the video card */}
          {/* <div className="vh-scroll-indicator" ref={scrollIndicatorRef}>
            <span>Scroll</span>
            <div className="vh-scroll-arrow" />
          </div> */}
        </section>
      </div>
    </>
  );
}
