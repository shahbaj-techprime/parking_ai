



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
    icon: "https://img.sanishtech.com/u/1dcee97a4324c4b5d37d475d81fd2792.png",
    direction: "up", // animate from left
  },
  {
    number: 2,
    title: "Set Parameters",
    description: "Define bay dimensions, aisle widths, PH requirements, parking target. AI auto-calculates compliance needs per NBC 2016.",
    icon: "https://img.sanishtech.com/u/f48893c87bfc12cb0ab7caa41444e36d.png",
    direction: "up", // animate from right
  },
  {
    number: 3,
    title: "AI Generates",
    description: "In seconds, the engine tests thousands of configurations. Detects columns, obstacles, ramps. Optimizes layout. Checks all 8 NBC rules.",
    icon: "https://img.sanishtech.com/u/35801d56985614bf2ca7702ba9958982.png",
    direction: "up", // animate from bottom
  },
  {
    number: 4,
    title: "Review & Export",
    description: "Review layout. Make manual tweaks if needed. Export contractor-ready CAD with layers, annotations, color-coding.",
    icon: "https://img.sanishtech.com/u/8ea0fccbd4dac8d65eb9aaec21afd09c.png",
    direction: "up", // animate from top
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const linesRef = useRef([]);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const isMobileView = window.innerWidth < 768;

    // Only animate on desktop
    if (!isMobileView) {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const direction = steps[index].direction;
        let fromVars = { opacity: 0 };
        
        switch(direction) {
          case 'left':
            fromVars = { opacity: 0, x: -100 };
            break;
          case 'right':
            fromVars = { opacity: 0, x: 100 };
            break;
          case 'up':
            fromVars = { opacity: 0, y: 100 };
            break;
          case 'down':
            fromVars = { opacity: 0, y: -100 };
            break;
        }

        gsap.fromTo(
          card,
          fromVars,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
              onEnter: () => setActiveStep(index),
              onEnterBack: () => setActiveStep(index),
            },
          }
        );
      });

      // Animate connecting lines
      linesRef.current.forEach((line, index) => {
        if (!line) return;

        gsap.fromTo(
          line,
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      });
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{
        backgroundColor: '#111317',
        color: '#ffffff',
        padding: isMobile ? '4rem 0' : '8rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: isMobile ? '30px 30px' : '40px 40px',
        pointerEvents: 'none'
      }} />

      <div style={{ 
        maxWidth: '1350px', 
        margin: '0 auto', 
        padding: isMobile ? '0 1rem' : '0 1.5rem', 
        position: 'relative' 
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '3rem' : '5rem' 
        }}>
          <h2 style={{ 
            fontSize: isMobile ? '2rem' : '3rem', 
            fontWeight: '700',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            The AI Solution: How It Works
          </h2>
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.25rem', 
            color: '#888888',
            maxWidth: '600px',
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Four simple steps to NBC-compliant, optimized parking layouts.
          </p>
        </div>

        {/* Steps Container */}
        <div style={{ position: 'relative' }}>
          {steps.map((step, index) => (
            <div key={index}>
              {/* Card */}
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  display: isMobile ? 'flex' : 'grid',
                  flexDirection: isMobile ? 'column' : undefined,
                  gridTemplateColumns: isMobile ? undefined : (index % 2 === 0 ? '1fr 1fr' : '1fr 1fr'),
                  gap: isMobile ? '1.5rem' : '4rem',
                  alignItems: 'center',
                  marginBottom: isMobile ? '3rem' : '6rem',
                  direction: isMobile ? 'ltr' : (index % 2 === 0 ? 'ltr' : 'rtl')
                }}
              >
                {/* Content Side */}
                <div style={{ 
                  direction: 'ltr',
                  textAlign: isMobile ? 'left' : (index % 2 === 0 ? 'right' : 'left'),
                  padding: isMobile ? '1rem' : '2rem',
                  order: isMobile ? 2 : undefined
                }}>
                  <div style={{
                    display: 'inline-flex',
                    width: isMobile ? '2.5rem' : '3.5rem',
                    height: isMobile ? '2.5rem' : '3.5rem',
                    borderRadius: '50%',
                    border: activeStep === index ? '2px solid #0092b8' : '2px solid #444444',
                    backgroundColor: activeStep === index ? '#0092b8' : 'transparent',
                    color: activeStep === index ? '#000000' : '#ffffff',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '1.25rem' : '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1.5rem',
                    transition: 'all 0.5s ease'
                  }}>
                    {step.number}
                  </div>
                  
                  <h3 style={{
                    fontSize: isMobile ? '1.5rem' : '2rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: activeStep === index ? '#ffffff' : '#888888',
                    transition: 'color 0.5s ease'
                  }}>
                   {step.title}
                  </h3>
                  
                  <p style={{
                    fontSize: isMobile ? '0.95rem' : '1.125rem',
                    color: '#999999',
                    lineHeight: '1.7'
                  }}>
                    {step.description}
                  </p>
                </div>

                {/* Icon/Visual Side */}
                <div style={{ 
                  direction: 'ltr',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  order: isMobile ? 1 : undefined
                }}>
                  <div style={{
                    width: isMobile ? '100%' : '560px',
                    height: isMobile ? '250px' : '400px',
                    maxWidth: isMobile ? '100%' : undefined,
                    border: activeStep === index ? '2px solid #0092b8' : '2px solid #333333',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '6rem',
                    background: activeStep === index 
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))'
                      : 'transparent',
                    transition: 'all 0.5s ease',
                    boxShadow: activeStep === index 
                      ? '0 20px 60px rgba(255,255,255,0.1)' 
                      : 'none',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={step.icon} 
                      alt={step.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  ref={(el) => (linesRef.current[index] = el)}
                  style={{
                    width: '2px',
                    height: isMobile ? '60px' : '80px',
                    backgroundColor: '#333333',
                    margin: '0 auto',
                    marginBottom: isMobile ? '2rem' : '3rem',
                    transformOrigin: 'top',
                    position: 'relative'
                  }}
                >
                  {/* Animated dot */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: isMobile ? '8px' : '10px',
                    height: isMobile ? '8px' : '10px',
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    animation: activeStep >= index ? 'pulse 2s infinite' : 'none'
                  }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translateX(-50%) scale(1.2);
          }
        }
      `}</style>
    </section>
  );
}