// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { Target } from "lucide-react";

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
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;

//     const yOffset = -80;
//     const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   return (
//     <section
//       ref={heroRef}
//       className=" bg-black relative min-h-screen flex items-center pt-28 md:pt-32 overflow-hidden"
//     >
//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white ">
//         {/* LEFT CONTENT */}
//         <div className="hero-left text-center md:text-left">
//           <h1 className="text-3xl md:text-4xl font-extrabold leading-snug md:leading-tight ">
//             Design Parking Layouts 10x Faster. Guarantee NBC Compliance.
//             Maximize Revenue Per Square Meter.
//           </h1>

//           <p
//             className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed"
//             style={{ opacity: 0.9 }}
//           >
//             The AI-driven parking design engine developed for the commercial
//             real estate sector in India. Optimize parking designs in 10 minutes,
//             not days. Unleash 5-15% additional parking capacity from the same
//             land area. Avoid rejection of designs due to compliance issues
//           </p>
//           <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <button
//               onClick={() => scrollToSection("contactus")}
//               className="group flex items-center gap-2 bg-[#05df72] px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-[#04c465] transition text-black"
//             >
//               Book a Demo Now
//               <svg
//                 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={3}
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </button>

//             <button
//               onClick={() =>
//                 window.open(
//                   "https://nexelvr.com/try-parking/",
//                   "_blank",

//                   // (target = "_blank"),
//                 )
//               }
//               className="group flex items-center gap-2 border-2 border-[#05df72] text-[#05df72] px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-[#05df72]/10 transition"
//             >
//               Start Free Trial
//               <svg
//                 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={3}
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </button>
//           </div>
//           <p className="text-xs md:text-sm text-gray-400 mt-6 mb-8">
//             {/* ✓ */}
//             Used by leading commercial real estate developers and architecture
//             firms across Hyderabad, Bangalore, and Mumbai
//           </p>
//         </div>

//         {/* RIGHT SIDE VIDEO CARD */}
//         <div className="hero-right flex justify-center mb-8">
//           <div className="">
//             <video
//               className="h-[280px] sm:h-[350px] md:h-[450px] rounded-xl bg-black "
//               src="https://image2url.com/r2/default/videos/1770828237888-97a165b2-1e2b-486b-b4d8-05f6999bf627.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
























"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/app/translations/context/LanguageContext";

export default function Hero() {

  const { t, lang } = useLanguage();
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

  return (
    <section
      ref={heroRef}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-black relative min-h-screen flex items-center pt-28 md:pt-32 overflow-hidden"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">

        <div className="hero-left text-center md:text-left">

          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug md:leading-tight">
            {t.heroTitle}
          </h1>

          <p className="text-base md:text-lg text-gray-300 mt-5 leading-relaxed">
            {t.heroDesc}
          </p>

          {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <button className="group flex items-center gap-2 bg-[#05df72] px-6 py-3 rounded-lg font-semibold text-black">
              {t.demo}
            </button>

            <button className="group flex items-center gap-2 border-2 border-[#05df72] text-[#05df72] px-6 py-3 rounded-lg font-semibold">
              {t.trial}
            </button>

          </div> */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <button
              onClick={() => scrollToSection("contactus")}
              className="group flex items-center gap-2 bg-[#05df72] px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-[#04c465] transition text-black"
            >
              {t.demo}
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://nexelvr.com/try-parking/",
                  "_blank",

                  // (target = "_blank"),
                )
              }
              className="group flex items-center gap-2 border-2 border-[#05df72] text-[#05df72] px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-[#05df72]/10 transition"
            >
               {t.trial}
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
          <p className="text-xs md:text-sm text-gray-400 mt-6 mb-8">
             {/* ✓ */}
            {t.trustedBy}
          </p>

        </div>

        <div className="hero-right flex justify-center mb-8">
          <video
            className="h-[280px] sm:h-[350px] md:h-[450px] rounded-xl bg-black"
            src="https://image2url.com/r2/default/videos/1770828237888-97a165b2-1e2b-486b-b4d8-05f6999bf627.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

      </div>
    </section>
  );
}







