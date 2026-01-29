'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQSectionMinimal = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });

    // GSAP animations for FAQ items
    const faqItems = document.querySelectorAll('.faq-item-minimal');
    faqItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: index * 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
        }
      );
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Won't this replace our architects?",
      answer:
        "No. Parking design is 10% of architectural work. Parking AI eliminates the tedious, repetitive part (31 hours of manual drafting), freeing your architects to focus on building aesthetics, user experience, sustainability—the value-add work. This tool makes architects <strong>more valuable</strong>, not less.",
    },
    {
      question: "How accurate is the NBC compliance?",
      answer:
        "100% for the built-in checks. The AI compliance rules (turning radius, aisle width, bay dimensions, PH access, junction logic, fire exit aisles, stacking distances) are NBC 2016 standards and automatically validated. If something violates a rule, the design won't export and we'll show Error: Some invalid/join has additional constraints (early MVP). Instead review.",
    },
    {
      question: "What if our column grid doesn't support our parking target?",
      answer:
        'The tool tells you upfront: "It runs a constraint analysis and reports: \'Row 7B6 space target requires bay widths of 2.4m, which is below NBC minimum of 2.5m. Recommended: Design for 650 spaces, or add a 4th basement level, or convert one level to mixed-use parking + retail.\'" This clarity coming early design saves weeks of wasted effort.',
    },
    {
      question: "Can we use it if we don't have DXF/DWG files yet?",
      answer:
        "Yes. You can draw a simple floor plan in any CAD tool (even SketchUp, then export as DWG), or manually draw it fully at the boundary and column grid we defined. Parking AI can work with it. No need for detailed architectural plans—parking design only needs structural and boundary info.",
    },
    {
      question: "What about mechanical parking systems?",
      answer:
        "Parking AI is optimized for standard ramp-based structural parking (the 98% use case in India). Mechanical parking systems (puzzle parking, stack parking, car-skid automation) have different logic and are currently outside scope. We're evaluating mechanical parking as a future feature (2026 roadmap).",
    },
    {
      question: "Do you offer customization for unique parking rules?",
      answer:
        "For standard NBC 2016, no customization needed—rules are built in. For specific municipal variations or unusual site constraints, we can discuss custom rule sets (Enterprise tier only; additional fees apply). Contact our sales team for details.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#111317] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="faq-item-minimal border-b-2 border-gray-800 last:border-b-0"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
                aria-expanded={openIndex === index}
              >
                <span className="text-base md:text-lg font-medium text-white group-hover:text-[#0092b8] transition-colors duration-200 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-[#0092b8] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer Panel */}
              <div
                className={`transition-all duration-400 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[600px] opacity-100 mb-5' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pr-12">
                  <p
                    className="text-gray-400 text-sm md:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-12 pt-8 border-t-2 border-gray-800" data-aos="fade-up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-base">
              Still have questions? We're here to help!
            </p>
            <button className="border-2 border-[#0092b8] text-[#0092b8] px-6 py-2 rounded-lg font-medium hover:bg-[#0092b8] hover:text-white transition-all duration-300 whitespace-nowrap">
              Contact Support
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FAQSectionMinimal;