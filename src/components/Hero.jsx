// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function Hero() {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".hero-left > *", {
//         x: -60,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.15,
//         ease: "power3.out",
//       });

//       gsap.from(".hero-right", {
//         x: 80,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power3.out",
//       });

//       gsap.from(".hero-svg path", {
//         drawSVG: 0,
//         opacity: 0,
//         duration: 1.5,
//         stagger: 0.05,
//         ease: "power2.out",
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);
//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;

//     const yOffset = -80; // fixed navbar height
//     const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({
//       top: y,
//       behavior: "smooth",
//     });
//   };
//   return (
//     <section className="min-h-screen flex items-center pt-32 bg-black">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
//         <div>
//           <h1 className="text-4xl font-extrabold leading-tight fade-up text-white">
//             Design Parking Layouts 10x Faster. Guarantee NBC Compliance.
//             Maximize Revenue Per Square Meter.
//           </h1>
//           <p className="text-lg text-gray-300 mt-6 fade-up leading-relaxed">
//             The AI-powered parking design engine built for India's commercial
//             real estate. Generate optimal parking layouts in 10 minutes—not
//             days. Unlock 5–15% more parking spaces from the same footprint.
//             Eliminate compliance rejections.
//           </p>

//           <div className="mt-8 flex gap-4 fade-up">
//             <button
//               onClick={() => scrollToSection("contactus")}
//               className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-600 transition"
//             >
//               Book a Demo Now
//             </button>
//             <button
//               onClick={() => {
//                 alert("coming soon");
//               }}
//               className="border-2 border-cyan-500 text-cyan-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition"
//             >
//               Start Free Trial
//             </button>
//           </div>

//           <p className="text-sm text-gray-400 mt-8 fade-up">
//             ✓ Used by leading commercial real estate developers and architecture
//             firms across Hyderabad, Bangalore, and Mumbai
//           </p>
//         </div>

//         {/* HERO MEDIA PLACEHOLDER */}
//         {/* border border-dashed bg-white/5*/}
//         <div className="hero-media h-[480px] rounded-2xl  border-white/30 flex items-center justify-center text-gray-400 ">
//         <img style={{height:'450px'}} src="https://img.sanishtech.com/u/3af8a5401d7cea950e90df4143a2c80b.gif" alt="ezgif.com-animated-gif-maker.gif"/>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-left > *", {
        x: -60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".hero-right", {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center pt-28 md:pt-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="hero-left text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug md:leading-tight text-white">
            Design Parking Layouts 10x Faster. Guarantee NBC Compliance.
            Maximize Revenue Per Square Meter.
          </h1>

          <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
            The AI-powered parking design engine built for India's commercial
            real estate. Generate optimal parking layouts in 10 minutes—not
            days. Unlock 5–15% more parking spaces from the same footprint.
            Eliminate compliance rejections.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("contactus")}
              className="bg-cyan-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-cyan-600 transition"
            >
              Book a Demo Now
            </button>

            <button
              onClick={() => alert("coming soon")}
              className="border-2 border-cyan-500 text-cyan-500 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-cyan-500/10 transition"
            >
              Start Free Trial
            </button>
          </div>

          <p className="text-xs md:text-sm text-gray-400 mt-6">
            ✓ Used by leading commercial real estate developers and architecture
            firms across Hyderabad, Bangalore, and Mumbai
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right flex justify-center">
          <img
            className="h-[280px] sm:h-[350px] md:h-[450px] rounded-xl"
            src="https://img.sanishtech.com/u/3af8a5401d7cea950e90df4143a2c80b.gif"
            alt="Parking AI Demo"
          />
        </div>
      </div>
    </section>
  );
}
