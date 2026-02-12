// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function WhyChoose() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//       offset: 100,
//       easing: "ease-out",
//     });
//   }, []);

//   const features = [
//     {
//       number: "10x",
//       title: "Faster Design",
//       subtitle: "(25 hours → 10 minutes)",
//       animation: "fade-left",
//     },
//     {
//       number: "15%",
//       title: "More Parking",
//       subtitle: "(₹50–₹300L revenue)",
//       animation: "fade-up",
//     },
//     {
//       number: "100%",
//       title: "NBC Compliant",
//       subtitle: "(Zero rejections)",
//       animation: "fade-down",
//     },
//     {
//       number: "0",
//       title: "Redrawing Required",
//       subtitle: "(Native CAD integration)",
//       animation: "fade-right",
//     },
//   ];

//   return (
//     <section className="py-24 bg-[#111317]">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2
//           data-aos="fade-up"
//           className="text-4xl md:text-5xl font-bold text-center text-white mb-20"
//         >
//           Why Teams Choose Parking AI
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               data-aos={feature.animation}
//               data-aos-delay={index * 100}
//               className=" p-8 text-center bg-black/40 border border-[#0092b8] rounded-xl hover:shadow-2xl hover:shadow-white/10 transition-all duration-300"
//             >
//               <div className="text-6xl font-bold text-white mb-4">
//                 {feature.number}
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-400 text-sm">{feature.subtitle}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function WhyChoose() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     setIsMobile(window.innerWidth < 768);

//     AOS.init({
//   duration: 900,
//   once: true,   // 🔥 important
//   offset: 80,
//   easing: "ease-out-cubic",
//     });
//   }, []);

//   const features = [
//     {
//       number: "10x",
//       title: "Faster Design",
//       subtitle: "(25 hours → 10 minutes)",
//       animation: "fade-up",
//     },
//     {
//       number: "15%",
//       title: "More Parking",
//       subtitle: "(₹50–₹300L revenue)",
//       animation: "fade-up",
//     },
//     {
//       number: "100%",
//       title: "NBC Compliant",
//       subtitle: "(Zero rejections)",
//       animation: "fade-up",
//     },
//     {
//       number: "0",
//       title: "Redrawing Required",
//       subtitle: "(Native CAD integration)",
//       animation: "fade-up",
//     },
//   ];

//   return (
//     <section className="py-16 md:py-24 bg-[#111317] overflow-x-hidden">
//       <div className="max-w-7xl mx-auto px-4 md:px-6">
//         <h2
//           data-aos="fade-up"
//           className="text-3xl md:text-5xl font-bold text-center text-white mb-14 md:mb-20"
//         >
//           Why Teams Choose Parking AI
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               data-aos={isMobile ? "fade-up" : feature.animation}
//               data-aos-delay={index * 80}
//               className="
//                 p-6 md:p-8
//                 text-center
//                 bg-black/40
//                 border border-[#0092b8]
//                 rounded-xl
//                 transition-all
//                 duration-300
//                 hover:shadow-xl
//                 hover:shadow-white/10
//               "
//             >
//               <div className="text-5xl md:text-6xl font-bold text-white mb-3">
//                 {feature.number}
//               </div>
//               <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-400 text-xs md:text-sm">
//                 {feature.subtitle}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function WhyChoose() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Detect mobile
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     // Initialize AOS
//     AOS.init({
//       duration: 900,
//       once: true, // ✅ prevents re-trigger (fixes scroll jump)
//       offset: 80,
//       easing: "ease-out-cubic",
//     });

//     AOS.refresh(); // ✅ Important for Next.js

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const features = [
//     {
//       number: "10x",
//       title: "Faster Design",
//       subtitle: "(25 hours → 10 minutes)",
//       animation: "fade-up",
//     },
//     {
//       number: "15%",
//       title: "More Parking",
//       subtitle: "(₹50–₹300L revenue)",
//       animation: "fade-up",
//     },
//     {
//       number: "100%",
//       title: "NBC Compliant",
//       subtitle: "(Zero rejections)",
//       animation: "fade-up",
//     },
//     {
//       number: "0",
//       title: "Redrawing Required",
//       subtitle: "(Native CAD integration)",
//       animation: "fade-up",
//     },
//   ];

//   return (
//     <section
//       id="why"
//       className="py-16 md:py-24 bg-[#111317] overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-4 md:px-6">
//         {/* Heading */}
//         <h2
//           data-aos="fade-up"
//           className="text-3xl md:text-5xl font-bold text-center text-white mb-14 md:mb-20"
//         >
//           Why Teams Choose Parking AI
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               data-aos={isMobile ? "fade-up" : feature.animation}
//               data-aos-delay={index * 100}
//               className="
//                 p-6 md:p-8
//                 text-center
//                 bg-black/40
//                 border border-[#0092b8]
//                 rounded-xl
//                 transition-all
//                 duration-300
//                 hover:shadow-xl
//                 hover:shadow-cyan-500/20
//                 hover:-translate-y-2
//               "
//             >
//               <div className="text-5xl md:text-6xl font-bold text-white mb-3">
//                 {feature.number}
//               </div>

//               <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
//                 {feature.title}
//               </h3>

//               <p className="text-gray-400 text-xs md:text-sm">
//                 {feature.subtitle}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// export default function WhyChoose() {
//   useEffect(() => {
//     AOS.init({
//       duration: 900,
//       once: true,
//       offset: 80,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   const features = [
//     {
//       end: 10,
//       suffix: "x",
//       title: "Faster Design",
//       subtitle: "(25 hours → 10 minutes)",
//     },
//     {
//       end: 15,
//       suffix: "%",
//       title: "More Parking",
//       subtitle: "(₹50–₹300L revenue)",
//     },
//     {
//       end: 100,
//       suffix: "%",
//       title: "NBC Compliant",
//       subtitle: "(Zero rejections)",
//     },
//     {
//       end: 0,
//       suffix: "",
//       title: "Redrawing Required",
//       subtitle: "(Native CAD integration)",
//     },
//   ];

//   return (
//     <section id="why" className="py-16 md:py-24 bg-[#111317] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 md:px-6">
//         <h2
//           data-aos="fade-up"
//           className="text-3xl md:text-5xl font-bold text-center text-white mb-14 md:mb-20"
//         >
//           Why Teams Choose Parking AI
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {features.map((feature, index) => (
//             <AnimatedCard key={index} feature={feature} delay={index * 100} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* 🔥 Separate Card Component */
// function AnimatedCard({ feature, delay }) {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   return (
//     <div
//       ref={ref}
//       data-aos="fade-up"
//       data-aos-delay={delay}
//       className="
//         p-6 md:p-8
//         text-center
//         bg-black/40
//         border border-[#0092b8]
//         rounded-xl
//         transition-all
//         duration-300
//         hover:shadow-xl
//         hover:shadow-cyan-500/20
//         hover:-translate-y-2
//       "
//     >
//       <div className="text-5xl md:text-6xl font-bold text-white mb-3">
//         {inView && (
//           <CountUp
//             start={0}
//             end={feature.end}
//             duration={2}
//             separator=","
//             suffix={feature.suffix}
//           />
//         )}
//       </div>

//       <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
//         {feature.title}
//       </h3>

//       <p className="text-gray-400 text-xs md:text-sm">
//         {feature.subtitle}
//       </p>
//     </div>
//   );
// }



// "use client";

// import { useEffect } from "react";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function WhyChoose() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//     });
//   }, []);

//   const features = [
//     {
//       end: 10,
//       suffix: "x",
//       title: "Faster Design",
//       subtitle: "(25 hours → 10 minutes)",
//     },
//     {
//       end: 15,
//       suffix: "%",
//       title: "More Parking",
//       subtitle: "(₹50–₹300L revenue)",
//     },
//     {
//       end: 100,
//       suffix: "%",
//       title: "NBC Compliant",
//       subtitle: "(Zero rejections)",
//     },
//     {
//       end: 0,
//       suffix: "",
//       title: "Redrawing Required",
//       subtitle: "(Native CAD integration)",
//     },
//   ];

//   return (
//     <section
//       id="why"
//       className="py-16 md:py-24 bg-[#111317] overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-4 md:px-6">
//         <h2
//           data-aos="fade-up"
//           className="text-3xl md:text-5xl font-bold text-center text-white mb-14 md:mb-20"
//         >
//           Why Teams Choose Parking AI
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {features.map((feature, index) => (
//             <CounterCard key={index} feature={feature} delay={index * 100} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* 🔥 Counter Card Component */
// function CounterCard({ feature, delay }) {
//   const { ref, inView } = useInView({
//     triggerOnce: true,   // animate only once
//     threshold: 0.5,      // trigger when 50% visible
//   });

//   return (
//     <div
//       ref={ref}
//       data-aos="fade-up"
//       data-aos-delay={delay}
//       className="
//         p-6 md:p-8
//         text-center
//         bg-black/40
//         border border-[#0092b8]
//         rounded-xl
//         transition-all
//         duration-300
//       "
//     >
//       <div className="text-5xl md:text-6xl font-bold text-white mb-3">
//         {inView ? (
//           <CountUp
//             start={0}
//             end={feature.end}
//             duration={2}
//             suffix={feature.suffix}
//           />
//         ) : (
//           0
//         )}
//       </div>

//       <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
//         {feature.title}
//       </h3>

//       <p className="text-gray-400 text-xs md:text-sm">
//         {feature.subtitle}
//       </p>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function WhyChoose() {
//   const sectionRef = useRef(null);
//   const [startCount, setStartCount] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStartCount(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const features = [
//     {
//       end: 10,
//       suffix: "x",
//       title: "Faster Design",
//       subtitle: "(25 hours → 10 minutes)",
//     },
//     {
//       end: 15,
//       suffix: "%",
//       title: "More Parking",
//       subtitle: "(₹50–₹300L revenue)",
//     },
//     {
//       end: 100,
//       suffix: "%",
//       title: "NBC Compliant",
//       subtitle: "(Zero rejections)",
//     },
//     {
//       end: 0,
//       suffix: "",
//       title: "Redrawing Required",
//       subtitle: "(Native CAD integration)",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       id="why"
//       className="py-20 bg-[#111317] overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
//           Why Teams Choose Parking AI
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((item, index) => (
//             <CounterCard
//               key={index}
//               start={startCount}
//               end={item.end}
//               suffix={item.suffix}
//               title={item.title}
//               subtitle={item.subtitle}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* 🔥 Counter Animation Component */
// function CounterCard({ start, end, suffix, title, subtitle }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!start) return;

//     let startValue = 0;
//     const duration = 2000;
//     const incrementTime = 20;
//     const steps = duration / incrementTime;
//     const increment = end / steps;

//     const timer = setInterval(() => {
//       startValue += increment;
//       if (startValue >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(startValue));
//       }
//     }, incrementTime);

//     return () => clearInterval(timer);
//   }, [start, end]);

//   return (
//     <div className="p-8 text-center  rounded-xl">
//       <div className="text-5xl md:text-6xl font-bold text-white mb-3">
//         {count}
//         {suffix}
//       </div>
//       <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
//       <p className="text-gray-400 text-sm">{subtitle}</p>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyChoose() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      end: 10,
      suffix: "x",
      title: "Faster Design",
      subtitle: "(25 hours → 10 minutes)",
    },
    {
      end: 15,
      suffix: "%",
      title: "More Parking",
      subtitle: "(₹50–₹300L revenue)",
    },
    {
      end: 100,
      suffix: "%",
      title: "NBC Compliant",
      subtitle: "(Zero rejections)",
    },
    {
      end: 0,
      suffix: "",
      title: "Redrawing Required",
      subtitle: "(Native CAD integration)",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="why"
      className="py-20 bg-[#111317] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          Why Teams Choose Parking AI
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <CounterCard
              key={index}
              start={startCount}
              end={item.end}
              suffix={item.suffix}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 🔥 Counter Card */
function CounterCard({ start, end, suffix, title, subtitle }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000;
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <div className="p-8 text-center rounded-xl">
      <div className="flex justify-center items-center text-5xl md:text-6xl font-bold text-white mb-3 h-[70px] overflow-hidden">
        <RollingNumber number={count} />
        <span className="ml-1">{suffix}</span>
      </div>

      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
  );
}

/* 🔥 Rolling Number Component */
function RollingNumber({ number }) {
  const digits = number.toString().split("");

  return (
    <div className="flex">
      {digits.map((digit, index) => (
        <Digit key={index} digit={digit} />
      ))}
    </div>
  );
}

/* 🔥 Single Digit Vertical Roller */
function Digit({ digit }) {
  const numbers = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="relative h-[70px] w-[40px] overflow-hidden">
      <div
        className="absolute left-0 top-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(-${digit * 70}px)`,
        }}
      >
        {numbers.map((num) => (
          <div
            key={num}
            className="h-[70px] flex items-center justify-center"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}
