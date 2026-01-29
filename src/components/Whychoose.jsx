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


"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChoose() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    AOS.init({
      duration: 900,
      once: false,
      offset: 80,
      easing: "ease-out-cubic",
      disable: false,
    });
  }, []);

  const features = [
    {
      number: "10x",
      title: "Faster Design",
      subtitle: "(25 hours → 10 minutes)",
      animation: "fade-left",
    },
    {
      number: "15%",
      title: "More Parking",
      subtitle: "(₹50–₹300L revenue)",
      animation: "fade-up",
    },
    {
      number: "100%",
      title: "NBC Compliant",
      subtitle: "(Zero rejections)",
      animation: "fade-up",
    },
    {
      number: "0",
      title: "Redrawing Required",
      subtitle: "(Native CAD integration)",
      animation: "fade-right",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#111317] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-center text-white mb-14 md:mb-20"
        >
          Why Teams Choose Parking AI
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos={isMobile ? "fade-up" : feature.animation}
              data-aos-delay={index * 80}
              className="
                p-6 md:p-8
                text-center
                bg-black/40
                border border-[#0092b8]
                rounded-xl
                transition-all
                duration-300
                hover:shadow-xl
                hover:shadow-white/10
              "
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                {feature.number}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
