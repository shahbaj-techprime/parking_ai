// 'use client';

// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const PricingSection = () => {
//   useEffect(() => {
//     // Initialize AOS
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: 'ease-out-cubic',
//     });

//     // GSAP animations for cards
//     const cards = document.querySelectorAll('.pricing-card');
    
//     cards.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         {
//           opacity: 0,
//           y: 100,
//           scale: 0.9,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.8,
//           delay: index * 0.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: card,
//             start: 'top 80%',
//             end: 'bottom 20%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       );
//     });

//     // Floating animation for popular badge
//     gsap.to('.popular-badge', {
//       y: -5,
//       duration: 1.5,
//       repeat: -1,
//       yoyo: true,
//       ease: 'power1.inOut',
//     });
//   }, []);
// const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;

//     const yOffset = -80; // fixed navbar height
//     const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({
//       top: y,
//       behavior: "smooth",
//     });
//   };
//   const pricingPlans = [
//     {
//       name: 'Starter',
//       price: '₹50K',
//       period: 'per project',
//       description: 'Up to 5 projects/quarter',
//       features: [
//         'Unlimited layouts per project',
//         'Unlimited revisions',
//         'CAD outputs',
//         'Compliance validation',
//         'Email support',
//       ],
//       buttonText: 'Get Started',
//       popular: false,
//       align: 'left',
//     },
//     {
//       name: 'Growth',
//       price: '₹1.25L',
//       period: 'per quarter',
//       description: 'Up to 10 projects/quarter',
//       features: [
//         'All Starter features',
//         'Unlimited projects',
//         'Team access (5 seats)',
//         'Priority support',
//         'Analytics reports',
//       ],
//       buttonText: 'Most Popular',
//       popular: true,
//       align: 'center',
//     },
//     {
//       name: 'Enterprise',
//       price: '₹2.5L',
//       period: 'per quarter',
//       description: '20+ projects/quarter',
//       features: [
//         'All Growth features',
//         'Unlimited team seats',
//         'API access',
//         'Dedicated support',
//         'Custom compliance rules',
//       ],
//       buttonText: 'Contact Sales',
//       popular: false,
//       align: 'right',
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-[#111317] text-white py-20 px-4 overflow-hidden">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16" data-aos="fade-down">
//           <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
//             Simple, Transparent Pricing
//           </h2>
//           <p className="text-gray-400 text-lg md:text-xl">
//             Choose the tier that matches your project volume.
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3  mb-16">
//           {pricingPlans.map((plan, index) => (
//             <div
//               key={index}
//               className={`pricing-card relative  border-2 ${
//                 plan.popular ? 'border-[#0092b8]' : 'border-gray-800'
//               } rounded-2xl p-8 hover:border-[#0092b8] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,146,184,0.3)] group ${
//                 plan.align === 'left'
//                   ? 'md:translate-x-0'
//                   : plan.align === 'right'
//                   ? 'md:translate-x-0'
//                   : 'md:scale-105'
//               }`}
//               data-aos={
//                 plan.align === 'left'
//                   ? 'fade-right'
//                   : plan.align === 'right'
//                   ? 'fade-left'
//                   : 'fade-up'
//               }
//               data-aos-delay={index * 100}
//             >
//               {/* Popular Badge */}
//               {plan.popular && (
//                 <div className="popular-badge absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#0092b8] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
//                   POPULAR
//                 </div>
//               )}

//               {/* Plan Name */}
//               <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#0092b8] transition-colors duration-300">
//                 {plan.name}
//               </h3>

//               {/* Price */}
//               <div className="mb-4">
//                 <span className="text-5xl font-bold bg-gradient-to-r from-white to-[#0092b8] bg-clip-text text-transparent">
//                   {plan.price}
//                 </span>
//                 <span className="text-gray-400 ml-2">{plan.period}</span>
//               </div>

//               {/* Description */}
//               <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>

//               {/* Features */}
//               <ul className="space-y-4 mb-8">
//                 {plan.features.map((feature, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-start gap-3 text-gray-300"
//                     data-aos="fade-left"
//                     data-aos-delay={idx * 50 + 200}
//                   >
//                     <svg
//                       className="w-5 h-5 text-[#0092b8] mt-0.5 flex-shrink-0"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     <span className="text-sm">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* CTA Button */}
//               <button
//                 onClick={() => scrollToSection("contactus")}
//                 className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
//                   plan.popular
//                     ? 'bg-[#0092b8] text-white hover:bg-[#007a9a] shadow-lg hover:shadow-[0_0_20px_rgba(0,146,184,0.5)]'
//                     : 'bg-transparent border-2 border-[#0092b8] text-[#0092b8] hover:bg-[#0092b8] hover:text-white'
//                 } transform hover:scale-105`}
//               >
//                 {plan.buttonText}
//               </button>

//               {/* Decorative Corner */}
//               <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#0092b8]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             </div>
//           ))}
//         </div>

//         {/* ROI Calculator Section */}
//         <div
//           className="border-2 border-gray-800 rounded-2xl p-8 text-center hover:border-[#0092b8] transition-all duration-500"
//           data-aos="zoom-in"
//           data-aos-delay="400"
//         >
//           <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-[#0092b8] bg-clip-text text-transparent">
//             ROI Calculator
//           </h3>
          
//           <div className="space-y-4 text-gray-300">
//             <p className="text-lg">
//               Design time saved per project:{' '}
//               <span className="text-[#0092b8] font-bold">20 hours</span> × ₹750/hour
//               architect rate ={' '}
//               <span className="text-white font-bold">₹18,750</span>
//             </p>
//             <p className="text-lg">
//               Parking count increase:{' '}
//               <span className="text-[#0092b8] font-bold">100 additional spaces</span> ×
//               ₹50,000/space ={' '}
//               <span className="text-white font-bold">₹50 lakh revenue</span>
//             </p>
//             <p className="text-xl font-bold mt-6 text-[#0092b8]">
//               Payback: 1-2 projects. Value captured: 10-100x tool investment.
//             </p>
//           </div>

//           {/* Animated Progress Bar */}
//           {/* <div className="mt-8 bg-gray-800 rounded-full h-3 overflow-hidden">
//             <div
//               className="h-full bg-gradient-to-r from-[#0092b8] to-[#00c6ff] rounded-full roi-progress"
//               style={{ width: '0%' }}
//               data-aos="slide-right"
//               data-aos-delay="600"
//               data-aos-duration="2000"
//             ></div>
//           </div> */}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideRight {
//           to {
//             width: 100%;
//           }
//         }
        
//         [data-aos='slide-right'].aos-animate .roi-progress {
//           animation: slideRight 2s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PricingSection;




'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
  useEffect(() => {
    // Only initialize animations on desktop (min-width: 768px)
    if (window.innerWidth >= 768) {
      // Initialize AOS
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
      });

      // GSAP animations for cards
      const cards = document.querySelectorAll('.pricing-card');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Floating animation for popular badge
      gsap.to('.popular-badge', {
        y: -5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // fixed navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹50K',
      period: 'per project',
      description: 'Up to 5 projects/quarter',
      features: [
        'Unlimited layouts per project',
        'Unlimited revisions',
        'CAD outputs',
        'Compliance validation',
        'Email support',
      ],
      buttonText: 'Get Started',
      popular: false,
      align: 'left',
    },
    {
      name: 'Growth',
      price: '₹1.25L',
      period: 'per quarter',
      description: 'Up to 10 projects/quarter',
      features: [
        'All Starter features',
        'Unlimited projects',
        'Team access (5 seats)',
        'Priority support',
        'Analytics reports',
      ],
      buttonText: 'Most Popular',
      popular: true,
      align: 'center',
    },
    {
      name: 'Enterprise',
      price: '₹2.5L',
      period: 'per quarter',
      description: '20+ projects/quarter',
      features: [
        'All Growth features',
        'Unlimited team seats',
        'API access',
        'Dedicated support',
        'Custom compliance rules',
      ],
      buttonText: 'Contact Sales',
      popular: false,
      align: 'right',
    },
  ];

  return (
    <section className="min-h-screen bg-[#111317] text-white py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Choose the tier that matches your project volume.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative border-2 ${
                plan.popular ? 'border-[#0092b8]' : 'border-gray-800'
              } rounded-2xl p-8 hover:border-[#0092b8] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,146,184,0.3)] group`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="popular-badge absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#0092b8] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  POPULAR
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#0092b8] transition-colors duration-300">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-white to-[#0092b8] bg-clip-text text-transparent">
                  {plan.price}
                </span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <svg
                      className="w-5 h-5 text-[#0092b8] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('contactus')}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#0092b8] text-white hover:bg-[#007a9a] shadow-lg hover:shadow-[0_0_20px_rgba(0,146,184,0.5)]'
                    : 'bg-transparent border-2 border-[#0092b8] text-[#0092b8] hover:bg-[#0092b8] hover:text-white'
                } transform hover:scale-105`}
              >
                {plan.buttonText}
              </button>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#0092b8]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <div className="border-2 border-gray-800 rounded-2xl p-8 text-center hover:border-[#0092b8] transition-all duration-500">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-[#0092b8] bg-clip-text text-transparent">
            ROI Calculator
          </h3>

          <div className="space-y-4 text-gray-300">
            <p className="text-lg">
              Design time saved per project:{' '}
              <span className="text-[#0092b8] font-bold">20 hours</span> × ₹750/hour
              architect rate = <span className="text-white font-bold">₹18,750</span>
            </p>
            <p className="text-lg">
              Parking count increase:{' '}
              <span className="text-[#0092b8] font-bold">100 additional spaces</span> ×
              ₹50,000/space = <span className="text-white font-bold">₹50 lakh revenue</span>
            </p>
            <p className="text-xl font-bold mt-6 text-[#0092b8]">
              Payback: 1-2 projects. Value captured: 10-100x tool investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
