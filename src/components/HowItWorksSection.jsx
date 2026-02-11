



// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   {
//     number: 1,
//     title: "Upload Floor Plan",
//     description: "Import any DXF or DWG file directly from your CAD system. No redrawing. No simplification. Just upload.",
//     icon: "https://img.sanishtech.com/u/1dcee97a4324c4b5d37d475d81fd2792.png",
//     direction: "up", // animate from left
//   },
//   {
//     number: 2,
//     title: "Set Parameters",
//     description: "Define bay dimensions, aisle widths, PH requirements, parking target. AI auto-calculates compliance needs per NBC 2016.",
//     icon: "https://img.sanishtech.com/u/f48893c87bfc12cb0ab7caa41444e36d.png",
//     direction: "up", // animate from right
//   },
//   {
//     number: 3,
//     title: "AI Generates",
//     description: "In seconds, the engine tests thousands of configurations. Detects columns, obstacles, ramps. Optimizes layout. Checks all 8 NBC rules.",
//     icon: "https://img.sanishtech.com/u/35801d56985614bf2ca7702ba9958982.png",
//     direction: "up", // animate from bottom
//   },
//   {
//     number: 4,
//     title: "Review & Export",
//     description: "Review layout. Make manual tweaks if needed. Export contractor-ready CAD with layers, annotations, color-coding.",
//     icon: "https://img.sanishtech.com/u/8ea0fccbd4dac8d65eb9aaec21afd09c.png",
//     direction: "up", // animate from top
//   },
// ];

// export default function HowItWorksSection() {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);
//   const linesRef = useRef([]);
//   const [activeStep, setActiveStep] = useState(0);

//   useEffect(() => {
//     // Animate cards on scroll
//     cardsRef.current.forEach((card, index) => {
//       if (!card) return;

//       const direction = steps[index].direction;
//       let fromVars = { opacity: 0 };
      
//       switch(direction) {
//         case 'left':
//           fromVars = { opacity: 0, x: -100 };
//           break;
//         case 'right':
//           fromVars = { opacity: 0, x: 100 };
//           break;
//         case 'up':
//           fromVars = { opacity: 0, y: 100 };
//           break;
//         case 'down':
//           fromVars = { opacity: 0, y: -100 };
//           break;
//       }

//       gsap.fromTo(
//         card,
//         fromVars,
//         {
//           opacity: 1,
//           x: 0,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 80%",
//             end: "top 50%",
//             scrub: 1,
//             onEnter: () => setActiveStep(index),
//             onEnterBack: () => setActiveStep(index),
//           },
//         }
//       );
//     });

//     // Animate connecting lines
//     linesRef.current.forEach((line, index) => {
//       if (!line) return;

//       gsap.fromTo(
//         line,
//         { scaleY: 0, opacity: 0 },
//         {
//           scaleY: 1,
//           opacity: 1,
//           duration: 0.8,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: line,
//             start: "top 85%",
//             end: "top 60%",
//             scrub: 1,
//           },
//         }
//       );
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       style={{
//         backgroundColor: '#111317',
//         color: '#ffffff',
//         padding: '8rem 0',
//         position: 'relative',
//         overflow: 'hidden'
//       }}
//     >
//       {/* Background pattern */}
//       <div style={{
//         position: 'absolute',
//         inset: 0,
//         backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
//         backgroundSize: '40px 40px',
//         pointerEvents: 'none'
//       }} />

//       <div style={{ maxWidth: '1350px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
//         {/* Header */}
//         <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
//           <h2 style={{ 
//             fontSize: '3rem', 
//             fontWeight: '700',
//             marginBottom: '1rem',
//             letterSpacing: '-0.02em'
//           }}>
//             The AI Solution: How It Works
//           </h2>
//           <p style={{ 
//             fontSize: '1.25rem', 
//             color: '#888888',
//             maxWidth: '600px',
//             margin: '0 auto'
//           }}>
//             Four simple steps to NBC-compliant, optimized parking layouts.
//           </p>
//         </div>

//         {/* Steps Container */}
//         <div style={{ position: 'relative' }}>
//           {steps.map((step, index) => (
//             <div key={index}>
//               {/* Card */}
//               <div
//                 ref={(el) => (cardsRef.current[index] = el)}
//                 style={{
//                   display: 'grid',
//                   gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
//                   gap: '4rem',
//                   alignItems: 'center',
//                   marginBottom: '6rem',
//                   direction: index % 2 === 0 ? 'ltr' : 'rtl'
//                 }}
//               >
//                 {/* Content Side */}
//                 <div style={{ 
//                   direction: 'ltr',
//                   textAlign: index % 2 === 0 ? 'right' : 'left',
//                   padding: '2rem'
//                 }}>
//                   <div style={{
//                     display: 'inline-block',
//                     width: '3.5rem',
//                     height: '3.5rem',
//                     borderRadius: '50%',
//                     border: activeStep === index ? '2px solid #0092b8' : '2px solid #444444',
//                     backgroundColor: activeStep === index ? '#0092b8' : 'transparent',
//                     color: activeStep === index ? '#000000' : '#ffffff',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '1.5rem',
//                     fontWeight: 'bold',
//                     marginBottom: '1.5rem',
//                     transition: 'all 0.5s ease'
//                   }}>
//                     {step.number}
//                   </div>
                  
//                   <h3 style={{
//                     fontSize: '2rem',
//                     fontWeight: '600',
//                     marginBottom: '1rem',
//                     color: activeStep === index ? '#ffffff' : '#888888',
//                     transition: 'color 0.5s ease'
//                   }}>
//                    {step.title}
//                   </h3>
                  
//                   <p style={{
//                     fontSize: '1.125rem',
//                     color: '#999999',
//                     lineHeight: '1.7'
//                   }}>
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* Icon/Visual Side */}
//                 <div style={{ 
//                   direction: 'ltr',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center'
//                 }}>
//                   <div style={{
//                     width: '560px',
//                     height: '400px',
//                     border: activeStep === index ? '2px solid #0092b8' : '2px solid #333333',
//                     borderRadius: '1rem',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '6rem',
//                     background: activeStep === index 
//                       ? 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))'
//                       : 'transparent',
//                     transition: 'all 0.5s ease',
//                     boxShadow: activeStep === index 
//                       ? '0 20px 60px rgba(255,255,255,0.1)' 
//                       : 'none'
//                   }}>
//                     {/* {step.icon} */}
//                     <img src={step.icon} alt={step.title}/>
//                   </div>
//                 </div>
//               </div>

//               {/* Connecting Line */}
//               {index < steps.length - 1 && (
//                 <div
//                   ref={(el) => (linesRef.current[index] = el)}
//                   style={{
//                     width: '2px',
//                     height: '80px',
//                     backgroundColor: '#333333',
//                     margin: '0 auto',
//                     marginBottom: '3rem',
//                     transformOrigin: 'top',
//                     position: 'relative'
//                   }}
//                 >
//                   {/* Animated dot */}
//                   <div style={{
//                     position: 'absolute',
//                     bottom: '-6px',
//                     left: '50%',
//                     transform: 'translateX(-50%)',
//                     width: '10px',
//                     height: '10px',
//                     backgroundColor: '#ffffff',
//                     borderRadius: '50%',
//                     animation: activeStep >= index ? 'pulse 2s infinite' : 'none'
//                   }} />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS Animation */}
//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 1;
//             transform: translateX(-50%) scale(1);
//           }
//           50% {
//             opacity: 0.5;
//             transform: translateX(-50%) scale(1.2);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }





// // // jdfaks
// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   {
//     number: 1,
//     title: "Upload Floor Plan",
//     description: "Import any DXF or DWG file directly from your CAD system. No redrawing. No simplification. Just upload.",
//     icon: "https://github.com/shahbaj-techprime/parking_ai/blob/main/image/uploadfile.png?raw=true",
//     direction: "up", // animate from left
//   },
//   {
//     number: 2,
//     title: "Set Parameters",
//     description: "Define bay dimensions, aisle widths, PH requirements, parking target. AI auto-calculates compliance needs per NBC 2016.",
//     icon: "https://github.com/shahbaj-techprime/parking_ai/blob/main/image/pioneverse.com_phoenix_parkingai_beta_(Nest%20Hub)%20(3).png?raw=true",
//     direction: "up", // animate from right
//   },
//   {
//     number: 3,
//     title: "AI Generates",
//     description: "In seconds, the engine tests thousands of configurations. Detects columns, obstacles, ramps. Optimizes layout. Checks all 8 NBC rules.",
//     icon: "https://github.com/shahbaj-techprime/parking_ai/blob/main/image/pioneverse.com_phoenix_parkingai_beta_(Nest%20Hub)%20(4).png?raw=true",
//     direction: "up", // animate from bottom
//   },
//   {
//     number: 4,
//     title: "Review & Export",
//     description: "Review layout. Make manual tweaks if needed. Export contractor-ready CAD with layers, annotations, color-coding.",
//     icon: "https://github.com/shahbaj-techprime/parking_ai/blob/main/image/pioneverse.com_phoenix_parkingai_beta_(Nest%20Hub%20Max).png?raw=true",
//     direction: "up", // animate from top
//   },
// ];

// export default function HowItWorksSection() {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);
//   const linesRef = useRef([]);
//   const [activeStep, setActiveStep] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Check if mobile
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     const isMobileView = window.innerWidth < 768;

//     // Only animate on desktop
//     if (!isMobileView) {
//       // Animate cards on scroll
//       cardsRef.current.forEach((card, index) => {
//         if (!card) return;

//         const direction = steps[index].direction;
//         let fromVars = { opacity: 0 };
        
//         switch(direction) {
//           case 'left':
//             fromVars = { opacity: 0, x: -100 };
//             break;
//           case 'right':
//             fromVars = { opacity: 0, x: 100 };
//             break;
//           case 'up':
//             fromVars = { opacity: 0, y: 100 };
//             break;
//           case 'down':
//             fromVars = { opacity: 0, y: -100 };
//             break;
//         }

//         gsap.fromTo(
//           card,
//           fromVars,
//           {
//             opacity: 1,
//             x: 0,
//             y: 0,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 80%",
//               end: "top 50%",
//               scrub: 1,
//               onEnter: () => setActiveStep(index),
//               onEnterBack: () => setActiveStep(index),
//             },
//           }
//         );
//       });

//       // Animate connecting lines
//       linesRef.current.forEach((line, index) => {
//         if (!line) return;

//         gsap.fromTo(
//           line,
//           { scaleY: 0, opacity: 0 },
//           {
//             scaleY: 1,
//             opacity: 1,
//             duration: 0.8,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: line,
//               start: "top 85%",
//               end: "top 60%",
//               scrub: 1,
//             },
//           }
//         );
//       });
//     }

//     return () => {
//       window.removeEventListener("resize", checkMobile);
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         backgroundColor: "#111317",
//         color: "#ffffff",
//         padding: isMobile ? "4rem 0" : "8rem 0",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background pattern */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage:
//             "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
//           backgroundSize: isMobile ? "30px 30px" : "40px 40px",
//           pointerEvents: "none",
//         }}
//       />

//       <div
//         style={{
//           maxWidth: "1350px",
//           margin: "0 auto",
//           padding: isMobile ? "0 1rem" : "0 1.5rem",
//           position: "relative",
//         }}
//       >
//         {/* Header */}
//         <div
//           style={{
//             textAlign: "center",
//             marginBottom: isMobile ? "3rem" : "5rem",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: isMobile ? "2rem" : "3rem",
//               fontWeight: "700",
//               marginBottom: "1rem",
//               letterSpacing: "-0.02em",
//             }}
//           >
//             The AI Solution: How It Works
//           </h2>
//           <p
//             style={{
//               fontSize: isMobile ? "1rem" : "1.25rem",
//               color: "#888888",
//               maxWidth: "600px",
//               margin: "0 auto",
//               padding: isMobile ? "0 1rem" : "0",
//             }}
//           >
//             Four simple steps to NBC-compliant, optimized parking layouts.
//           </p>
//         </div>

//         {/* Steps Container */}
//         <div style={{ position: "relative" }}>
//           {steps.map((step, index) => (
//             <div key={index}>
//               {/* Card */}
//               <div
//                 ref={(el) => (cardsRef.current[index] = el)}
//                 style={{
//                   display: isMobile ? "flex" : "grid",
//                   flexDirection: isMobile ? "column" : undefined,
//                   gridTemplateColumns: isMobile
//                     ? undefined
//                     : index % 2 === 0
//                       ? "1fr 1fr"
//                       : "1fr 1fr",
//                   gap: isMobile ? "1.5rem" : "4rem",
//                   alignItems: "center",
//                   marginBottom: isMobile ? "3rem" : "6rem",
//                   direction: isMobile ? "ltr" : index % 2 === 0 ? "ltr" : "rtl",
//                 }}
//               >
//                 {/* Content Side */}
//                 <div
//                   style={{
//                     direction: "ltr",
//                     textAlign: isMobile
//                       ? "left"
//                       : index % 2 === 0
//                         ? "right"
//                         : "left",
//                     padding: isMobile ? "1rem" : "2rem",
//                     order: isMobile ? 2 : undefined,
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "inline-flex",
//                       width: isMobile ? "2.5rem" : "3.5rem",
//                       height: isMobile ? "2.5rem" : "3.5rem",
//                       borderRadius: "50%",
//                       border:
//                         activeStep === index
//                           ? "2px solid #0092b8"
//                           : "2px solid #444444",
//                       backgroundColor:
//                         activeStep === index ? "#0092b8" : "transparent",
//                       color: activeStep === index ? "#000000" : "#ffffff",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontSize: isMobile ? "1.25rem" : "1.5rem",
//                       fontWeight: "bold",
//                       marginBottom: "1.5rem",
//                       transition: "all 0.5s ease",
//                     }}
//                   >
//                     {step.number}
//                   </div>

//                   <h3
//                     style={{
//                       fontSize: isMobile ? "1.5rem" : "2rem",
//                       fontWeight: "600",
//                       marginBottom: "1rem",
//                       color: activeStep === index ? "#ffffff" : "#888888",
//                       transition: "color 0.5s ease",
//                     }}
//                   >
//                     {step.title}
//                   </h3>

//                   <p
//                     style={{
//                       fontSize: isMobile ? "0.95rem" : "1.125rem",
//                       color: "#999999",
//                       lineHeight: "1.7",
//                     }}
//                   >
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* Icon/Visual Side */}
//                 <div
//                   style={{
//                     direction: "ltr",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     order: isMobile ? 1 : undefined,
//                   }}
//                 >
//                   <div
//                     style={{
                     
//                       border:
//                         activeStep === index
//                           ? "2px solid #0092b8"
//                           : "2px solid #333333",
//                       borderRadius: "1rem",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontSize: "6rem",
//                       background:
//                         activeStep === index
//                           ? "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
//                           : "transparent",
//                       transition: "all 0.5s ease",
//                       boxShadow:
//                         activeStep === index
//                           ? "0 20px 60px rgba(255,255,255,0.1)"
//                           : "none",
//                       overflow: "hidden",
//                     }}
//                   >
//                     <img
//                       src={step.icon}
//                       alt={step.title}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Connecting Line */}
//               {index < steps.length - 1 && (
//                 <div
//                   ref={(el) => (linesRef.current[index] = el)}
//                   style={{
//                     width: "2px",
//                     height: isMobile ? "60px" : "80px",
//                     backgroundColor: "#333333",
//                     margin: "0 auto",
//                     marginBottom: isMobile ? "2rem" : "3rem",
//                     transformOrigin: "top",
//                     position: "relative",
//                   }}
//                 >
//                   {/* Animated dot */}
//                   <div
//                     style={{
//                       position: "absolute",
//                       bottom: "-6px",
//                       left: "50%",
//                       transform: "translateX(-50%)",
//                       width: isMobile ? "8px" : "10px",
//                       height: isMobile ? "8px" : "10px",
//                       backgroundColor: "#ffffff",
//                       borderRadius: "50%",
//                       animation:
//                         activeStep >= index ? "pulse 2s infinite" : "none",
//                     }}
//                   />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS Animation */}
//       <style jsx>{`
//         @keyframes pulse {
//           0%,
//           100% {
//             opacity: 1;
//             transform: translateX(-50%) scale(1);
//           }
//           50% {
//             opacity: 0.5;
//             transform: translateX(-50%) scale(1.2);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
// odl


// new
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: 1,
    title: "Upload Floor Plan",
    description: "Import any DXF or DWG file directly from your CAD system. No redrawing. No simplification. Just upload.",
    icon: "https://github.com/shahbaj-techprime/parking_ai/blob/main/image/uploadfile.png?raw=true",
  },
  {
    number: 2,
    title: "Set Parameters",
    description: "Define bay dimensions, aisle widths, PH requirements, parking target. AI auto-calculates compliance needs per NBC 2016.",
    icon: "https://github.com/shahbaj-techprime/parking_ai/blob/main/image/pioneverse.com_phoenix_parkingai_beta_(Nest%20Hub)%20(3).png?raw=true",
  },
  {
    number: 3,
    title: "AI Generates",
    description: "In seconds, the engine tests thousands of configurations. Detects columns, obstacles, ramps. Optimizes layout. Checks all 8 NBC rules.",
    icon: "https://github.com/shahbaj-techprime/parking_ai/blob/main/image/pioneverse.com_phoenix_parkingai_beta_(Nest%20Hub)%20(4).png?raw=true",
  },
  {
    number: 4,
    title: "Review & Export",
    description: "Review layout. Make manual tweaks if needed. Export contractor-ready CAD with layers, annotations, color-coding.",
    icon: "https://github.com/shahbaj-techprime/parking_ai/blob/main/image/pioneverse.com_phoenix_parkingai_beta_(Nest%20Hub%20Max).png?raw=true",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (window.innerWidth >= 1024) {
      // Pin the content
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${steps.length * 100}%`,
        pin: contentRef.current,
        pinSpacing: true,
      });

      // Animate each step
      steps.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: () => `top+=${index * window.innerHeight} top`,
          end: () => `top+=${(index + 1) * window.innerHeight} top`,
          onEnter: () => animateToStep(index),
          onEnterBack: () => animateToStep(index),
        });
      });

      // Initial state
      animateToStep(0);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const animateToStep = (index) => {
    setActiveStep(index);

    // Animate text items
    textRefs.current.forEach((text, i) => {
      if (!text) return;
      
      if (i === index) {
        gsap.to(text, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      } else {
        gsap.to(text, {
          opacity: 0,
          y: i < index ? -30 : 30,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    });

    // Animate images
    imageRefs.current.forEach((img, i) => {
      if (!img) return;
      
      if (i === index) {
        gsap.to(img, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      } else {
        gsap.to(img, {
          opacity: 0,
          scale: 0.95,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ minHeight: !isMobile ? `${(steps.length + 1) * 100}vh` : 'auto' }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
          How It Works
        </h2>
        <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
          Four simple steps to NBC-compliant, optimized parking layouts
        </p>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="relative z-10">
        {!isMobile ? (
          // Desktop Version
          <div className="mt-[-100] flex items-center py-20">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="grid grid-cols-2 gap-20 items-center">
                
                {/* Left Side - Text */}
                <div className="relative" style={{ minHeight: '600px' }}>
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      ref={(el) => (textRefs.current[index] = el)}
                      className="absolute inset-0 flex items-center"
                      style={{ pointerEvents: activeStep === index ? 'auto' : 'none' }}
                    >
                      <div className="w-full">
                        {/* Step Number */}
                        <div className="flex items-center gap-4 mb-8">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500 ${
                            activeStep === index
                              ? "bg-white text-black shadow-2xl shadow-white/20"
                              : "bg-gray-800 text-gray-500"
                          }`}>
                            {step.number}
                          </div>
                          <div className="flex-1 h-0.5 bg-gray-800">
                            <div 
                              className="h-full bg-white transition-all duration-500"
                              style={{ width: activeStep === index ? '100%' : '0%' }}
                            />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-8">
                          {step.description}
                        </p>

                        {/* Step Indicators */}
                        <div className="flex items-center gap-3">
                          {steps.map((_, i) => (
                            <div key={i} className={`transition-all duration-300 ${
                              i === activeStep
                                ? "w-12 h-2 bg-white rounded-full"
                                : i < activeStep
                                ? "w-8 h-2 bg-gray-600 rounded-full"
                                : "w-2 h-2 bg-gray-800 rounded-full"
                            }`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Side - Image */}
                <div className="relative flex items-center justify-center" style={{ minHeight: '600px' }}>
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      ref={(el) => (imageRefs.current[index] = el)}
                      className="absolute inset-0 flex items-center justify-center p-4"
                      style={{ zIndex: activeStep === index ? 10 : 0 }}
                    >
                      <div className={`relative w-full max-w-[600px] aspect-[16/10] rounded-2xl overflow-hidden transition-all duration-500 ${
                        activeStep === index
                          ? "ring-4 ring-white shadow-2xl shadow-white/10"
                          : "ring-1 ring-gray-800"
                      }`}>
                        <img
                          src={step.icon}
                          alt={step.title}
                          className="w-full h-full object-contain bg-gray-900"
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ) : (
          // Mobile Version
          <div className="pb-20">
            {steps.map((step, index) => (
              <div key={index} className="mb-16 px-6">
                {/* Step Number */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-white text-black shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex-1 h-0.5 bg-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>

                {/* Image */}
                <div className="mb-6 rounded-xl overflow-hidden shadow-xl ring-2 ring-white bg-gray-900">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
// new



// import { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const advantages = [
//   {
//     title: "Design Iterations = Project Delays",
//     points: [
//       "Every parking layout starts manually. Shifts a column? Redraw 20+ bays. Authority rejection? Redesign everything. Average project: 3–5 revision cycles, 4–6 weeks lost, ₹37.5K–₹75K in design costs.",
//     ],
//     image: "https://www.onethreadapp.com/blog/wp-content/uploads/2023/08/Project-Delays-A-Complete-Guide-on-Causes-And-Solutions.png",
//   },
//   {
//     title: "NBC Compliance is a Minefield",
//     points: [
//       "National Building Code has 10+ strict parking rules (turning radius, aisle width, PH bays, ramp landings). One missed rule = municipal rejection. Most designs fail compliance after submission, forcing costly redesigns.",
//     ],
//     image: "IMAGE / GIF – SPEED & APPROVALS",
//   },
//   {
//     title: "Lost Revenue From Suboptimal Layouts",
//     points: [
//       "Manual layouts capture only 85–90% of maximum spaces. Dead zones, oversized circulation, poor angles. Result: 650 spaces instead of 750 = ₹50–₹300 lakh in lost revenue on a single project",
//     ],
//     image: "IMAGE / GIF – SPACE OPTIMIZATION",
//   },
//   {
//     title: "Structural Coordination Chaos",
//     points: [
//       "Column placement, ramp position, lift cores—none coordinate smoothly with parking. Back-and-forth emails. No what-if analysis. No single source of truth. Result: suboptimal parking OR suboptimal structure OR 2-week delay.",
//     ],
//     image: "IMAGE / GIF – COST SAVINGS",
//   },
//   {
//     title: "Compliance Errors With Legal Consequences",
//     points: [
//       "PH bays placed in tandem positions. Ramp entries too close to aisles. Missing landing distances. Municipal inspector flags issues after submission. Redesign, reschedule, reputation damage.",
//     ],
//     image: "IMAGE / GIF – LEGAL COMPLIANCE",
//   },
// ];

// export default function SolutionSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     // Small delay to ensure DOM is ready
//     setTimeout(() => {
//       advantages.forEach((_, index) => {
//         ScrollTrigger.create({
//           trigger: `#adv-${index}`,
//           start: "top center+=100",
//           end: "bottom center",
//           onEnter: () => setActiveIndex(index),
//           onEnterBack: () => setActiveIndex(index),
//         });
//       });
//     }, 100);

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       id="solution"
//       style={{
//         paddingTop: "8rem",
//         paddingBottom: "8rem",
//         backgroundColor: "#000000",
//         color: "#ffffff",
//       }}
//     >
//       <div
//         style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
//       >
//         {/* INTRODUCTION */}
//         <div style={{ maxWidth: "48rem", marginBottom: "6rem" }}>
//           <h2 style={{ fontSize: "2.25rem", fontWeight: "bold" }}>
//             The Parking Design Crisis
//           </h2>

//           <p style={{ color: "#d1d5db", marginTop: "1rem" }}>
//             Parking design is costing you time, money, and regulatory headaches.
//             Here's why.
//           </p>
//         </div>

//         {/* SCROLL STORY SECTION */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "4rem",
//           }}
//         >
//           {/* LEFT – SCROLLING ADVANTAGES */}
//           <div
//             style={{ display: "flex", flexDirection: "column", gap: "8rem" }}
//           >
//             {advantages.map((item, index) => (
//               <div
//                 key={index}
//                 id={`adv-${index}`}
//                 style={{
//                   borderRadius: "1rem",
//                   padding: "2rem",
//                   border:
//                     activeIndex === index
//                       ? "2px solid rgba(0, 146, 184, 0.8)"
//                       : "2px solid transparent",
//                   background:
//                     activeIndex === index
//                       ? "linear-gradient(to bottom right, rgba(0, 146, 184, 0.1), rgba(0, 146, 184, 0.05))"
//                       : "transparent",
//                   boxShadow:
//                     activeIndex === index
//                       ? "0 10px 15px -3px rgba(0, 146, 184, 0.2)"
//                       : "none",
//                   transition: "all 0.5s ease",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "flex-start",
//                     gap: "1rem",
//                   }}
//                 >
//                   <div
//                     style={{
//                       flexShrink: 0,
//                       width: "3rem",
//                       height: "3rem",
//                       borderRadius: "50%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontSize: "1.25rem",
//                       fontWeight: "bold",
//                       backgroundColor:
//                         activeIndex === index
//                           ? "#0092B8"
//                           : "rgba(0, 146, 184, 0.2)",
//                       color: activeIndex === index ? "#ffffff" : "#0092B8",
//                       transition: "all 0.5s ease",
//                     }}
//                   >
//                     {index + 1}
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <h3
//                       style={{
//                         fontSize: "1.5rem",
//                         fontWeight: "600",
//                         color: activeIndex === index ? "#0092B8" : "#ffffff",
//                         transition: "color 0.5s ease",
//                       }}
//                     >
//                       {item.title}
//                     </h3>

//                     <ul
//                       style={{
//                         marginTop: "1.5rem",
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "0.75rem",
//                       }}
//                     >
//                       {item.points.map((point, i) => (
//                         <li key={i} style={{ display: "flex", gap: "0.75rem" }}>
//                           <span
//                             style={{
//                               fontWeight: "bold",
//                               color:
//                                 activeIndex === index ? "#0092B8" : "#4b5563",
//                               transition: "color 0.5s ease",
//                             }}
//                           >
//                             ✓
//                           </span>
//                           <span
//                             style={{
//                               color:
//                                 activeIndex === index ? "#e5e7eb" : "#6b7280",
//                               transition: "color 0.5s ease",
//                             }}
//                           >
//                             {point}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT – STICKY IMAGE */}
//           <div
//             style={{
//               position: "sticky",
//               top: "8rem",
//               height: "420px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <div
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 borderRadius: "1rem",
//                 border: "2px solid rgba(0, 146, 184, 0.8)",
//                 background:
//                   "linear-gradient(to bottom right, rgba(0, 146, 184, 0.1), rgba(0, 146, 184, 0.05))",
//                 boxShadow: "0 25px 50px -12px rgba(0, 146, 184, 0.2)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transition: "all 0.5s ease",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Animated background effect */}
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background:
//                     "linear-gradient(to bottom right, rgba(0, 146, 184, 0.05), transparent, rgba(0, 146, 184, 0.05))",
//                   animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//                 }}
//               ></div>

//               {/* Content */}
//               <div
//                 style={{
//                   position: "relative",
//                   zIndex: 10,
//                   textAlign: "center",
//                   padding: "2rem",
//                 }}
//               >
//                 {/* <div style={{ fontSize: "3.75rem", marginBottom: "1rem" }}>
//                   {activeIndex === 0 && "⚡"}
//                   {activeIndex === 1 && "📋"}
//                   {activeIndex === 2 && "💰"}
//                   {activeIndex === 3 && "🔧"}
//                   {activeIndex === 4 && "⚖️"}
//                 </div>
//                 <p
//                   style={{
//                     fontSize: "1.125rem",
//                     fontWeight: "500",
//                     color: "#0092B8",
//                   }}
//                 >
//                   {advantages[activeIndex].image}
//                 </p> */}
//                 <img src={advantages[activeIndex].image} alt="d"/>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }