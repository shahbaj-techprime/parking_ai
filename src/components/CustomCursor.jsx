// // components/CustomCursor.jsx
// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function CustomCursor() {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     gsap.set(cursor, { x: -100, y: -100 });

//     const handleMove = (e) => {
//       gsap.to(cursor, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.25,
//         ease: "power3.out",
//       });
//     };

//     const handleLeave = () => {
//       gsap.to(cursor, { autoAlpha: 0, duration: 0.2 });
//     };

//     const handleEnter = () => {
//       gsap.to(cursor, { autoAlpha: 1, duration: 0.2 });
//     };

//     window.addEventListener("mousemove", handleMove);
//     window.addEventListener("mouseleave", handleLeave);
//     window.addEventListener("mouseenter", handleEnter);

//     return () => {
//       window.removeEventListener("mousemove", handleMove);
//       window.removeEventListener("mouseleave", handleLeave);
//       window.removeEventListener("mouseenter", handleEnter);
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="pointer-events-none fixed z-[9999] w-4 h-4 rounded-full bg-white mix-blend-difference"
//       style={{ transform: "translate(-50%, -50%)" }}
//     />
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function CustomCursor() {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     gsap.set(cursor, { x: -100, y: -100 });

//     const handleMove = (e) => {
//       const dir = document.documentElement.dir;

//       const x =
//         dir === "rtl"
//           ? window.innerWidth - e.clientX
//           : e.clientX;

//       gsap.to(cursor, {
//         x: x,
//         y: e.clientY,
//         duration: 0.25,
//         ease: "power3.out",
//       });
//     };

//     const handleLeave = () => {
//       gsap.to(cursor, { autoAlpha: 0 });
//     };

//     const handleEnter = () => {
//       gsap.to(cursor, { autoAlpha: 1 });
//     };

//     window.addEventListener("mousemove", handleMove);
//     window.addEventListener("mouseleave", handleLeave);
//     window.addEventListener("mouseenter", handleEnter);

//     return () => {
//       window.removeEventListener("mousemove", handleMove);
//       window.removeEventListener("mouseleave", handleLeave);
//       window.removeEventListener("mouseenter", handleEnter);
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="pointer-events-none fixed z-[9999] w-4 h-4 rounded-full bg-[#05df72]"
//       style={{ transform: "translate(-50%, -50%)" }}
//     />
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// export default function CustomCursor() {
//   const cursorRef = useRef(null);
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     // Start offscreen
//     gsap.set(cursor, { x: -100, y: -100, autoAlpha: 0 });

//     // Move cursor
//     const handleMove = (e) => {
//       gsap.to(cursor, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.2,
//         ease: "power3.out",
//         autoAlpha: 1,
//       });
//     };

//     const handleLeave = () => {
//       gsap.to(cursor, { autoAlpha: 0, duration: 0.3 });
//     };

//     const handleEnter = () => {
//       gsap.to(cursor, { autoAlpha: 1, duration: 0.3 });
//     };

//     window.addEventListener("mousemove", handleMove);
//     window.addEventListener("mouseleave", handleLeave);
//     window.addEventListener("mouseenter", handleEnter);

//     // Hover effect on interactive elements
//     const hoverElements = document.querySelectorAll("button, a, .hover-cursor");
//     hoverElements.forEach((el) => {
//       el.addEventListener("mouseenter", () => setHovered(true));
//       el.addEventListener("mouseleave", () => setHovered(false));
//     });

//     return () => {
//       window.removeEventListener("mousemove", handleMove);
//       window.removeEventListener("mouseleave", handleLeave);
//       window.removeEventListener("mouseenter", handleEnter);

//       hoverElements.forEach((el) => {
//         el.removeEventListener("mouseenter", () => setHovered(true));
//         el.removeEventListener("mouseleave", () => setHovered(false));
//       });
//     };
//   }, []);

//   // Animate hover change
//   useEffect(() => {
//     if (!cursorRef.current) return;

//     if (hovered) {
//       gsap.to(cursorRef.current, {
//         scale: 2, // enlarge cursor
//         backgroundColor: "#ff0000", // red on hover
//         duration: 0.2,
//         ease: "power3.out",
//       });
//     } else {
//       gsap.to(cursorRef.current, {
//         scale: 1,
//         backgroundColor: "#05df72", // default green
//         duration: 0.2,
//         ease: "power3.out",
//       });
//     }
//   }, [hovered]);

//   return (
//     <div
//       ref={cursorRef}
//       className="pointer-events-none fixed z-[9999] w-4 h-4 rounded-full"
//       style={{ transform: "translate(-50%, -50%)", backgroundColor: "#05df72" }}
//     />
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { useLanguage } from "@/app/translations/context/LanguageContext";

// export default function CustomCursor() {
//   const { lang } = useLanguage();
//   const cursorRef = useRef(null);
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     gsap.set(cursor, { x: -100, y: -100, autoAlpha: 0 });

//     const handleMove = (e) => {
//       const dir = document.documentElement.dir || "ltr";
//       const x = dir === "rtl" ? window.innerWidth - e.clientX : e.clientX;
//       const y = e.clientY;

//       gsap.to(cursor, {
//         x,
//         y,
//         duration: 0.2,
//         ease: "power3.out",
//         autoAlpha: 1,
//       });
//     };

//     const handleLeave = () => gsap.to(cursor, { autoAlpha: 0, duration: 0.3 });
//     const handleEnter = () => gsap.to(cursor, { autoAlpha: 1, duration: 0.3 });

//     window.addEventListener("mousemove", handleMove);
//     window.addEventListener("mouseleave", handleLeave);
//     window.addEventListener("mouseenter", handleEnter);

//     const hoverElements = document.querySelectorAll("button, a, .hover-cursor");
//     const enterHover = () => setHovered(true);
//     const leaveHover = () => setHovered(false);

//     hoverElements.forEach((el) => {
//       el.addEventListener("mouseenter", enterHover);
//       el.addEventListener("mouseleave", leaveHover);
//     });

//     return () => {
//       window.removeEventListener("mousemove", handleMove);
//       window.removeEventListener("mouseleave", handleLeave);
//       window.removeEventListener("mouseenter", handleEnter);

//       hoverElements.forEach((el) => {
//         el.removeEventListener("mouseenter", enterHover);
//         el.removeEventListener("mouseleave", leaveHover);
//       });
//     };
//   }, [lang]); // re-run effect when language changes

//   useEffect(() => {
//     if (!cursorRef.current) return;
//     gsap.to(cursorRef.current, {
//       scale: hovered ? 2 : 1,
//       backgroundColor: hovered ? "#ff0000" : "#05df72",
//       duration: 0.2,
//       ease: "power3.out",
//     });
//   }, [hovered]);

//   return (
//     <div
//       ref={cursorRef}
//       className="pointer-events-none fixed z-[9999] w-4 h-4 rounded-full"
//       style={{
//         transform: "translate(-50%, -50%)",
//         backgroundColor: "#05df72",
//       }}
//     />
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLanguage } from "@/app/translations/context/LanguageContext";

export default function CustomCursor() {
  const { lang } = useLanguage();
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Start offscreen and invisible
    gsap.set(cursor, { x: -100, y: -100, autoAlpha: 0 });

    const handleMove = (e) => {
      const dir = document.documentElement.dir || "ltr";
      const x = dir === "rtl" ? window.innerWidth - e.clientX : e.clientX;
      const y = e.clientY;

      gsap.to(cursor, {
        x,
        y,
        duration: 0.2,
        ease: "power3.out",
        autoAlpha: 1,
      });
    };

    const handleLeave = () => gsap.to(cursor, { autoAlpha: 0, duration: 0.3 });
    const handleEnter = () => gsap.to(cursor, { autoAlpha: 1, duration: 0.3 });

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mouseenter", handleEnter);

    // Query all hoverable elements (re-run on language change)
    const hoverElements = document.querySelectorAll("button, a, .hover-cursor");
    const enterHover = () => setHovered(true);
    const leaveHover = () => setHovered(false);

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", enterHover);
      el.addEventListener("mouseleave", leaveHover);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mouseenter", handleEnter);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", enterHover);
        el.removeEventListener("mouseleave", leaveHover);
      });
    };
  }, [lang]); // Re-run effect whenever language changes

  // Hover animation
  useEffect(() => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      scale: hovered ? 2 : 1,
      backgroundColor: hovered ? "#ff0000" : "#05df72",
      duration: 0.2,
      ease: "power3.out",
    });
  }, [hovered]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] w-4 h-4 rounded-full"
      style={{
        transform: "translate(-50%, -50%)",
        backgroundColor: "#05df72",
      }}
    />
  );
}
// components/CustomCursor.jsx
// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function CustomCursor() {
//   const dotRef = useRef(null);
//   const ringRef = useRef(null);

//   useEffect(() => {
//     const dot = dotRef.current;
//     const ring = ringRef.current;
//     if (!dot || !ring) return;

//     // Start off screen
//     gsap.set([dot, ring], { x: -100, y: -100 });

//     const handleMove = (e) => {
//       const x = e.clientX;
//       const y = e.clientY;

//       // Dot follows instantly
//       gsap.to(dot, {
//         x,
//         y,
//         duration: 0.08,
//         ease: "power2.out",
//       });

//       // Ring follows with lag — classic effect
//       gsap.to(ring, {
//         x,
//         y,
//         duration: 0.45,
//         ease: "power3.out",
//       });
//     };

//     const handleLeave = () => {
//       gsap.to([dot, ring], { autoAlpha: 0, duration: 0.2 });
//     };

//     const handleEnter = () => {
//       gsap.to([dot, ring], { autoAlpha: 1, duration: 0.2 });
//     };

//     // Hover on clickable elements — grow ring, shrink dot
//     const handleHoverIn = () => {
//       gsap.to(ring, {
//         scale: 1.8,
//         borderColor: "rgba(255,255,255,0.9)",
//         duration: 0.25,
//         ease: "power2.out",
//       });
//       gsap.to(dot, {
//         scale: 0.4,
//         duration: 0.2,
//         ease: "power2.out",
//       });
//     };

//     const handleHoverOut = () => {
//       gsap.to(ring, {
//         scale: 1,
//         borderColor: "rgba(255,255,255,0.5)",
//         duration: 0.25,
//         ease: "power2.out",
//       });
//       gsap.to(dot, {
//         scale: 1,
//         duration: 0.2,
//         ease: "power2.out",
//       });
//     };

//     // Click effect — quick pulse
//     const handleClick = () => {
//       gsap.timeline()
//         .to(ring, { scale: 2.2, opacity: 0.4, duration: 0.15, ease: "power2.out" })
//         .to(ring, { scale: 1, opacity: 1, duration: 0.25, ease: "power3.out" });
//     };

//     // Attach hover listeners to interactive elements
//     const interactives = document.querySelectorAll(
//       "a, button, [role='button'], input, textarea, select, label, [tabindex]"
//     );
//     interactives.forEach((el) => {
//       el.addEventListener("mouseenter", handleHoverIn);
//       el.addEventListener("mouseleave", handleHoverOut);
//     });

//     window.addEventListener("mousemove", handleMove);
//     window.addEventListener("mouseleave", handleLeave);
//     window.addEventListener("mouseenter", handleEnter);
//     window.addEventListener("click", handleClick);

//     return () => {
//       window.removeEventListener("mousemove", handleMove);
//       window.removeEventListener("mouseleave", handleLeave);
//       window.removeEventListener("mouseenter", handleEnter);
//       window.removeEventListener("click", handleClick);
//       interactives.forEach((el) => {
//         el.removeEventListener("mouseenter", handleHoverIn);
//         el.removeEventListener("mouseleave", handleHoverOut);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Small sharp dot — instant follow */}
//       <div
//         ref={dotRef}
//         className="pointer-events-none fixed z-[9999]"
//         style={{
//           width: 6,
//           height: 6,
//           borderRadius: "50%",
//           backgroundColor: "#fff",
//           transform: "translate(-50%, -50%)",
//           willChange: "transform",
//         }}
//       />

//       {/* Outer ring — lagging follow */}
//       <div
//         ref={ringRef}
//         className="pointer-events-none fixed z-[9998]"
//         style={{
//           width: 36,
//           height: 36,
//           borderRadius: "50%",
//           border: "1.5px solid rgba(255,255,255,0.5)",
//           transform: "translate(-50%, -50%)",
//           willChange: "transform",
//           mixBlendMode: "difference",
//         }}
//       />
//     </>
//   );
// }

// // components/CustomCursor.jsx
// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// export default function CustomCursor() {
//   const cursorRef = useRef(null);
//   const glowRef = useRef(null);
//   const textRef = useRef(null);
//   const posRef = useRef({ x: -200, y: -200 });
//   const [label, setLabel] = useState("");

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     const glow = glowRef.current;
//     const textEl = textRef.current;
//     if (!cursor || !glow) return;

//     gsap.set([cursor, glow], { x: -200, y: -200, xPercent: -50, yPercent: -50 });

//     /* ── Mouse move ── */
//     const onMove = (e) => {
//       posRef.current = { x: e.clientX, y: e.clientY };

//       gsap.to(cursor, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.12,
//         ease: "power2.out",
//         overwrite: "auto",
//       });

//       gsap.to(glow, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.55,
//         ease: "power3.out",
//         overwrite: "auto",
//       });
//     };

//     /* ── Mouse leave / enter ── */
//     const onLeave = () => gsap.to([cursor, glow], { autoAlpha: 0, duration: 0.3 });
//     const onEnter = () => gsap.to([cursor, glow], { autoAlpha: 1, duration: 0.2 });

//     /* ── Click burst ── */
//     const onClick = () => {
//       gsap.timeline()
//         .to(cursor, { scale: 0.6, duration: 0.1, ease: "power2.in" })
//         .to(cursor, { scale: 1, duration: 0.35, ease: "elastic.out(1.2, 0.5)" });
//       gsap.timeline()
//         .to(glow, { scale: 2.4, opacity: 0, duration: 0.4, ease: "power2.out" })
//         .set(glow, { scale: 1, opacity: 0.18 });
//     };

//     /* ── Hover states ── */
//     const enterLink = (e) => {
//       const el = e.currentTarget;
//       const cursorLabel = el.dataset.cursor || "";
//       setLabel(cursorLabel);

//       if (cursorLabel) {
//         // Text mode
//         gsap.to(cursor, {
//           width: "auto",
//           height: 36,
//           borderRadius: 20,
//           paddingLeft: 14,
//           paddingRight: 14,
//           backgroundColor: "#fff",
//           scale: 1,
//           duration: 0.3,
//           ease: "power3.out",
//         });
//         gsap.to(glow, { scale: 0, duration: 0.2 });
//       } else {
//         // Expand ring
//         gsap.to(cursor, {
//           scale: 2.2,
//           backgroundColor: "transparent",
//           borderColor: "rgba(255,255,255,0.9)",
//           borderWidth: 1,
//           duration: 0.3,
//           ease: "power3.out",
//         });
//         gsap.to(glow, { scale: 1.5, opacity: 0.3, duration: 0.3 });
//       }
//     };

//     const leaveLink = () => {
//       setLabel("");
//       gsap.to(cursor, {
//         scale: 1,
//         width: 10,
//         height: 10,
//         borderRadius: "50%",
//         paddingLeft: 0,
//         paddingRight: 0,
//         backgroundColor: "#fff",
//         borderColor: "transparent",
//         borderWidth: 0,
//         duration: 0.35,
//         ease: "power3.out",
//       });
//       gsap.to(glow, { scale: 1, opacity: 0.18, duration: 0.3 });
//     };

//     /* ── Magnetic pull on buttons ── */
//     const onMagneticMove = (e) => {
//       const el = e.currentTarget;
//       const rect = el.getBoundingClientRect();
//       const cx = rect.left + rect.width / 2;
//       const cy = rect.top + rect.height / 2;
//       const dx = (e.clientX - cx) * 0.35;
//       const dy = (e.clientY - cy) * 0.35;

//       gsap.to(cursor, {
//         x: cx + dx,
//         y: cy + dy,
//         duration: 0.25,
//         ease: "power2.out",
//         overwrite: "auto",
//       });
//     };

//     const onMagneticLeave = () => {
//       gsap.to(cursor, {
//         x: posRef.current.x,
//         y: posRef.current.y,
//         duration: 0.45,
//         ease: "elastic.out(1, 0.5)",
//         overwrite: "auto",
//       });
//     };

//     /* ── Attach listeners ── */
//     const links = document.querySelectorAll("a, [data-cursor]");
//     const buttons = document.querySelectorAll("button, [data-magnetic]");

//     links.forEach((el) => {
//       el.addEventListener("mouseenter", enterLink);
//       el.addEventListener("mouseleave", leaveLink);
//     });

//     buttons.forEach((el) => {
//       el.addEventListener("mouseenter", enterLink);
//       el.addEventListener("mouseleave", leaveLink);
//       el.addEventListener("mousemove", onMagneticMove);
//       el.addEventListener("mouseleave", onMagneticLeave);
//     });

//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("mouseleave", onLeave);
//     window.addEventListener("mouseenter", onEnter);
//     window.addEventListener("click", onClick);

//     return () => {
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("mouseleave", onLeave);
//       window.removeEventListener("mouseenter", onEnter);
//       window.removeEventListener("click", onClick);
//       links.forEach((el) => {
//         el.removeEventListener("mouseenter", enterLink);
//         el.removeEventListener("mouseleave", leaveLink);
//       });
//       buttons.forEach((el) => {
//         el.removeEventListener("mouseenter", enterLink);
//         el.removeEventListener("mouseleave", leaveLink);
//         el.removeEventListener("mousemove", onMagneticMove);
//         el.removeEventListener("mouseleave", onMagneticLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* ── Dot / pill cursor ── */}
//       <div
//         ref={cursorRef}
//         className="pointer-events-none fixed z-[9999] flex items-center justify-center overflow-hidden"
//         style={{
//           width: 20,
//           height:20,
//           borderRadius: "50%",
//           backgroundColor: "#fff",
//           top: 0,
//           left: 0,
//           willChange: "transform",
//           mixBlendMode: "difference",
//         }}
//       >
//         <span
//           ref={textRef}
//           className="text-black text-[11px] font-semibold tracking-widest uppercase whitespace-nowrap select-none"
//           style={{ opacity: label ? 1 : 0, transition: "opacity 0.15s" }}
//         >
//           {label}
//         </span>
//       </div>

//       {/* ── Soft glow ring ── */}
//       <div
//         ref={glowRef}
//         className="pointer-events-none fixed z-[9998]"
//         style={{
//           width: 50,
//           height: 50,
//           borderRadius: "50%",
//           top: 0,
//           left: 0,
//           opacity: 0.18,
//           background:
//             "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%)",
//           willChange: "transform",
//           filter: "blur(2px)",
//         }}
//       />
//     </>
//   );
// }
