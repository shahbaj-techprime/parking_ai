// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CTASectionBold = () => {
//   useEffect(() => {
//     // Initialize AOS
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out-cubic",
//     });

//     // Typewriter effect for heading
//     const heading = document.querySelector(".cta-heading-bold");
//     if (heading) {
//       gsap.fromTo(
//         heading,
//         {
//           opacity: 0,
//           clipPath: "inset(0 100% 0 0)",
//         },
//         {
//           opacity: 1,
//           clipPath: "inset(0 0% 0 0)",
//           duration: 1.5,
//           ease: "power2.inOut",
//           scrollTrigger: {
//             trigger: heading,
//             start: "top 75%",
//           },
//         },
//       );
//     }

//     // Pulse animation for button
//     gsap.to(".pulse-ring", {
//       scale: 1.5,
//       opacity: 0,
//       duration: 2,
//       repeat: -1,
//       ease: "power2.out",
//     });
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
//     <section className="min-h-[80vh] bg-black text-white py-20 px-4 flex items-center justify-center relative overflow-hidden">
//       {/* Animated grid background */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(#0092b8 1px, transparent 1px), linear-gradient(90deg, #0092b8 1px, transparent 1px)`,
//             backgroundSize: "50px 50px",
//           }}
//         ></div>
//       </div>

//       <div className="max-w-6xl mx-auto text-center relative z-10">
//         {/* Main Heading */}
//         <div className="mb-8">
//           <h1 className="cta-heading-bold text-5xl sm:text-6xl md:text-7xl lg:text-5xl font-black leading-tight">
//             <span className="block text-white mb-3">
//               Stop Wasting Time on Parking.
//             </span>
//             <span className="block text-[#0092b8]">
//               Start Winning Projects.
//             </span>
//           </h1>
//         </div>

//         {/* Subtitle with animated underline */}
//         <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
//           <p className="text-xl sm:text-2xl md:text-2xl text-gray-400 max-w-4xl mx-auto relative inline-block">
//             Join developers and architects who've reclaimed{" "}
//             <span className="text-white font-semibold relative">
//               25+ hours
//               <span className="absolute bottom-0 left-0 w-full h-1 bg-[#0092b8]"></span>
//             </span>{" "}
//             per project and recovered{" "}
//             <span className="text-white font-semibold relative">
//               ₹50L+
//               <span className="absolute bottom-0 left-0 w-full h-1 bg-[#0092b8]"></span>
//             </span>{" "}
//             in parking revenue.
//           </p>
//         </div>

//         {/* CTA Button with pulse effect */}
//         <div
//           className="relative inline-block"
//           data-aos="zoom-in"
//           data-aos-delay="400"
//         >
//           {/* Pulse ring */}
//           <div className="pulse-ring absolute inset-0 rounded-lg bg-[#0092b8] -z-10"></div>

//           <button
//             onClick={() => scrollToSection("contactus")}
//             className="relative bg-[#0092b8] text-white px-12 py-6 rounded-lg font-bold text-xl hover:bg-[#007a9a] transition-all duration-300 inline-flex items-center gap-4 group"
//           >
//             <span>Book a 5-Minute Demo</span>
//             <svg
//               className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={3}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASectionBold;

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASectionBold = () => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Initialize AOS only on tablet+desktop
    if (!isMobile) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      });
    }

    // Typewriter effect for heading (desktop/tablet only)
    if (!isMobile) {
      const heading = document.querySelector(".cta-heading-bold");
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, clipPath: "inset(0 100% 0 0)" },
          {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: heading,
              start: "top 75%",
            },
          },
        );
      }

      // Pulse animation for button
      gsap.to(".pulse-ring", {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power2.out",
      });
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="min-h-[80vh] bg-black text-white py-16 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#0092b8 1px, transparent 1px), linear-gradient(90deg, #0092b8 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="cta-heading-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-snug sm:leading-snug md:leading-tight lg:leading-tight">
            <span className="block text-white mb-2 sm:mb-3">
              Stop Wasting Time on Parking.
            </span>
            <span className="block text-[#0092b8]">
              Start Winning Projects.
            </span>
          </h1>
        </div>

        {/* Subtitle with underline */}
        <div className="mb-8 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto relative inline-block">
            Join developers and architects who've reclaimed{" "}
            <span className="text-white font-semibold relative">
              25+ hours
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#0092b8]"></span>
            </span>{" "}
            per project and recovered{" "}
            <span className="text-white font-semibold relative">
              ₹50L+
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#0092b8]"></span>
            </span>{" "}
            in parking revenue.
          </p>
        </div>

        {/* CTA Button */}
        <div
          className="relative inline-block"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          {/* Pulse ring */}
          <div className="pulse-ring absolute inset-0 rounded-lg bg-[#0092b8] -z-10"></div>

          <button
            onClick={() => scrollToSection("contactus")}
            className="relative bg-[#0092b8] text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-lg font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:bg-[#007a9a] transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-4"
          >
            <span>Book a 5-Minute Demo</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300"
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
      </div>
    </section>
  );
};

export default CTASectionBold;
