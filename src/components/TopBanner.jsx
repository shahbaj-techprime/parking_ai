// "use client";

// import { useEffect, useState } from "react";
// import gsap from "gsap";

// export default function TopBanner() {
//   const [visible, setVisible] = useState(true);
//   const [hours, setHours] = useState("00");
//   const [minutes, setMinutes] = useState("00");
//   const [seconds, setSeconds] = useState("00");

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;

//     const yOffset = -80;
//     const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   // 🔥 Scroll Hide / Show
//   useEffect(() => {
//     let lastScroll = 0;

//     const handleScroll = () => {
//       if (window.scrollY > 100 && window.scrollY > lastScroll) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }
//       lastScroll = window.scrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 🔥 GSAP Animation
//   useEffect(() => {
//     gsap.to(".top-banner", {
//       y: visible ? 0 : -60,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   }, [visible]);

//   // 🔥 Daily 12PM Countdown
//   useEffect(() => {
//     const updateTimer = () => {
//       const now = new Date();

//       const target = new Date();
//       target.setHours(12, 0, 0, 0);

//       if (now >= target) {
//         target.setDate(target.getDate() + 1);
//       }

//       const diff = target - now;

//       const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
//       const m = Math.floor((diff / (1000 * 60)) % 60);
//       const s = Math.floor((diff / 1000) % 60);

//       setHours(String(h).padStart(2, "0"));
//       setMinutes(String(m).padStart(2, "0"));
//       setSeconds(String(s).padStart(2, "0"));
//     };

//     updateTimer();
//     const interval = setInterval(updateTimer, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="top-banner fixed top-0 left-0 w-full z-50 bg-lime-400 text-black">
//       <div className="max-w-7xl  mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-center lg:gap-6  text-sm font-medium">

//         {/* Text */}
//         <span>
//           Don’t miss the limited-time deals!
//         </span>

//         {/* Timer */}
//         <div className="flex items-center gap-3 font-semibold">
//           <span>{hours}H</span>
//           <span>{minutes}M</span>
//           <span>{seconds}S</span>
//         </div>

//         {/* Button */}
//         <button
//           onClick={() => scrollToSection("pricing")}
//           className="underline font-semibold hover:opacity-80 transition"
//         >
//           Explore
//         </button>

//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import gsap from "gsap";

// export default function TopBanner() {
//   const [visible, setVisible] = useState(true);
//   const [hours, setHours] = useState("00");
//   const [minutes, setMinutes] = useState("00");
//   const [seconds, setSeconds] = useState("00");

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;

//     const yOffset = -80;
//     const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   // Hide / Show on scroll
//   useEffect(() => {
//     let lastScroll = 0;

//     const handleScroll = () => {
//       if (window.scrollY > 100 && window.scrollY > lastScroll) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }
//       lastScroll = window.scrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // GSAP animation
//   useEffect(() => {
//     gsap.to(".top-banner", {
//       y: visible ? 0 : -60,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   }, [visible]);

//   // Daily 12PM Countdown
//   useEffect(() => {
//     const updateTimer = () => {
//       const now = new Date();

//       const target = new Date();
//       target.setHours(12, 0, 0, 0);

//       if (now >= target) {
//         target.setDate(target.getDate() + 1);
//       }

//       const diff = target - now;

//       const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
//       const m = Math.floor((diff / (1000 * 60)) % 60);
//       const s = Math.floor((diff / 1000) % 60);

//       setHours(String(h).padStart(2, "0"));
//       setMinutes(String(m).padStart(2, "0"));
//       setSeconds(String(s).padStart(2, "0"));
//     };

//     updateTimer();
//     const interval = setInterval(updateTimer, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="top-banner fixed top-0 left-0 w-full h-[60px] z-50 bg-lime-400 text-black">
//       <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-center gap-6 text-sm font-medium">
//         <span>Don’t miss the limited-time deals!</span>

//         <div className="flex items-center gap-2 font-semibold">
//           <span>{hours}H</span>
//           <span>{minutes}M</span>
//           <span>{seconds}S</span>
//         </div>

//         <button
//           onClick={() => scrollToSection("pricing")}
//           className="underline font-semibold hover:opacity-80 transition"
//         >
//           Explore
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function TopBanner() {
  const [visible, setVisible] = useState(true);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // ✅ Show only when at very top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation
  useEffect(() => {
    gsap.to(".top-banner", {
      y: visible ? 0 : -60,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [visible]);

  // Daily 12PM Countdown
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const target = new Date();

      target.setHours(12, 0, 0, 0);

      if (now >= target) {
        target.setDate(target.getDate() + 1);
      }

      const diff = target - now;

      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setHours(String(h).padStart(2, "0"));
      setMinutes(String(m).padStart(2, "0"));
      setSeconds(String(s).padStart(2, "0"));
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="top-banner fixed top-0 left-0 w-full 
h-[50px] 
sm:h-[55px] 
md:h-[60px] 
lg:h-[40px] 
z-50 bg-lime-400 text-black"
    >
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-center gap-6 text-sm font-medium">
        <span>Don’t miss the limited-time deals!</span>

        <div className="flex items-center gap-2 font-semibold">
          <span>{hours}H</span>
          <span>{minutes}M</span>
          <span>{seconds}S</span>
        </div>

        <button
          onClick={() => scrollToSection("contactus")}
          className="underline font-semibold hover:opacity-80 transition cursor-pointer"
        >
          Explore
        </button>
      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import gsap from "gsap";

// export default function TopBanner() {
//   const [visible, setVisible] = useState(true);
//   const [timeLeft, setTimeLeft] = useState({
//     days: 2,
//     hours: 16,
//     minutes: 11,
//     seconds: 31,
//   });

//   useEffect(() => {
//     let lastScroll = 0;

//     const handleScroll = () => {
//       if (window.scrollY > 100 && window.scrollY > lastScroll) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }
//       lastScroll = window.scrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     gsap.to(".top-banner", {
//       y: visible ? 0 : -80,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   }, [visible]);

//   // Countdown timer
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes, seconds } = prev;

//         if (seconds > 0) {
//           seconds--;
//         } else if (minutes > 0) {
//           minutes--;
//           seconds = 59;
//         } else if (hours > 0) {
//           hours--;
//           minutes = 59;
//           seconds = 59;
//         } else if (days > 0) {
//           days--;
//           hours = 23;
//           minutes = 59;
//           seconds = 59;
//         }

//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="top-banner fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-3 text-sm md:text-base">
//         {/* Icon */}
//         <div className="flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-5 h-5 animate-pulse"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           <span className="font-semibold">Limited Time Offer!</span>
//         </div>

//         {/* Message */}
//         <span className="hidden sm:inline">Don't miss out on exclusive deals</span>

//         {/* Countdown */}
//         <div className="flex items-center gap-2">
//           <span className="hidden sm:inline">⏰</span>
//           <div className="flex gap-1.5">
//             <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[2.5rem] text-center">
//               <div className="font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
//               <div className="text-[10px] opacity-90">Days</div>
//             </div>
//             <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[2.5rem] text-center">
//               <div className="font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
//               <div className="text-[10px] opacity-90">Hrs</div>
//             </div>
//             <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[2.5rem] text-center">
//               <div className="font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
//               <div className="text-[10px] opacity-90">Min</div>
//             </div>
//             <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[2.5rem] text-center">
//               <div className="font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
//               <div className="text-[10px] opacity-90">Sec</div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <a
//           href="#"
//           className="bg-white text-red-600 px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-md"
//         >
//           Shop Now →
//         </a>
//       </div>
//     </div>
//   );
// }
