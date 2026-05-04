
"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/app/translations/context/LanguageContext";

// const advantages = [
//   {
//     title: "Design Iterations = Project Delay",
//     points: [
//       "All parking designs are done manually. Move a column? Redesign 20+ bays. Rejected by the authority? Entire design needs to be done again. Average project: 3-5 cycles of design revisions, 4-6 weeks of lost time, ₹37.5K-₹75K in design costs",
//     ],
//     imageUrl:
//       "https://img.sanishtech.com/u/0b07c0b9e24e7948d47d01d604fd2a67.png",
//   },
//   {
//     title: "NBC Compliance is a Minefield",
//     points: [
//       "National Building Code has 10+ stringent parking standards (turning radius, aisle width, PH bays, ramp landings). Violate one, and the project gets rejected by the civic body. Most designs get rejected after submission, requiring costly redesigns.",
//     ],
//     imageUrl:
//       "https://img.sanishtech.com/u/4d805ac2d72397dc9f006b6ed870b9c8.png",
//   },
//   {
//     title: "Lost Revenue Due to Inefficient Designs",
//     points: [
//       "Manual designs can only capture 85-90% of the maximum parking capacity. Dead space, inefficient circulation paths, and inefficient angles. This translates to 650 parking spots instead of 750, resulting in lost revenue of ₹50-₹300 lakh on a single project.",
//     ],
//     imageUrl:
//       "https://img.sanishtech.com/u/df5b41ef4b9ea6dc5395914c80fc8b61.png",
//   },
//   {
//     title: "Structural Coordination Chaos",
//     points: [
//       "Column locations, ramp locations, and lift cores do not coordinate well with parking designs. Emails back and forth. No what-if analysis. No single point of truth. This leads to either inefficient parking designs or inefficient structural designs or a 2-week delay.",
//     ],
//     imageUrl:
//       "https://img.sanishtech.com/u/c33db8e58cdb93cbe5cbc4ed8b6c9fc7.png",
//   },
//   {
//     title: "Compliance Errors With Legal Consequences",
//     points: [
//       "PH bays placed in tandem positions. Ramp entries too close to aisles. Missing landing distances. Municipal inspector flags issues after submission. Redesign, reschedule, reputation damage.",
//     ],
//     imageUrl:
//       "https://img.sanishtech.com/u/087d132851e64f8115e85dbe21b02d2c.png",
//   },
// ];

export default function SeamlessGallery() {
   const { t } = useLanguage();
  const advantages = t.advantages || [];
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".problem-card");

    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === sectionRef.current) {
        trigger.kill();
      }
    });

    let activeIndex = 0;

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=3000",
      pin: galleryRef.current,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.min(
          Math.floor(progress * advantages.length),
          advantages.length - 1,
        );

        if (newIndex !== activeIndex) {
          activeIndex = newIndex;
          setCurrentIndex(newIndex);
          updateCards(newIndex);
        }
      },
    });

    function updateCards(activeIndex) {
      cards.forEach((card, index) => {
        const offset = index - activeIndex;

        gsap.to(card, {
          x: offset * 120 + "%",
          scale: offset === 0 ? 1 : 0.8,
          opacity: Math.abs(offset) > 2 ? 0 : offset === 0 ? 1 : 0.5,
          zIndex: offset === 0 ? 100 : 10 - Math.abs(offset),
          duration: 0.5,
          ease: "power2.out",
        });
      });
    }

    updateCards(0);

    const handleNext = () => {
      if (activeIndex < advantages.length - 1) {
        activeIndex++;
        setCurrentIndex(activeIndex);
        updateCards(activeIndex);

        const newProgress = (activeIndex + 0.5) / advantages.length;
        gsap.to(window, {
          scrollTo: {
            y:
              scrollTrigger.start +
              (scrollTrigger.end - scrollTrigger.start) * newProgress,
          },
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    };

    const handlePrev = () => {
      if (activeIndex > 0) {
        activeIndex--;
        setCurrentIndex(activeIndex);
        updateCards(activeIndex);

        const newProgress = (activeIndex + 0.5) / advantages.length;
        gsap.to(window, {
          scrollTo: {
            y:
              scrollTrigger.start +
              (scrollTrigger.end - scrollTrigger.start) * newProgress,
          },
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    };

    const nextBtn = document.querySelector(".gallery-next");
    const prevBtn = document.querySelector(".gallery-prev");

    nextBtn?.addEventListener("click", handleNext);
    prevBtn?.addEventListener("click", handlePrev);

    return () => {
      scrollTrigger.kill();
      nextBtn?.removeEventListener("click", handleNext);
      prevBtn?.removeEventListener("click", handlePrev);
    };
  }, [isMobile]);

  const handleMobileNext = () => {
    if (currentIndex < advantages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleMobilePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Mobile version
  if (isMobile) {
    return (
      <section className="relative w-full bg-black py-12 px-4">
        <div
          className="max-w-lg mx-auto"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "120px 120px",
          }}
        >
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className=" text-3xl md:text-4xl font-bold text-white  mb-3">
            {t.crisisTitle}
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
                {t.crisisDesc}
            </p>
          </div>

          {/* Mobile Card Slider */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {advantages.map((advantage, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="relative group">
                    {/* bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 */}
                    <div className="absolute inset-0 rounded-2xl  opacity-75 blur-sm"></div>

                    <div className="relative  rounded-2xl p-6 min-h-[450px] flex flex-col border border-gray-800">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                            <span className="text-xs font-bold text-blue-400">
                              Problem #{index + 1}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white leading-tight">
                            {advantage.title}
                          </h3>
                        </div>

                        {/* <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20">
                          {index + 1}
                        </div> */}
                      </div>

                      <div className="flex-1 mb-4">
                        {advantage.points.map((point, pointIndex) => (
                          <p
                            key={pointIndex}
                            className="text-gray-300 leading-relaxed text-sm"
                          >
                            {point}
                          </p>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-gray-800">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="relative">
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                              <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                            </div>
                            <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                              {t.criticalIssue}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {advantages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-500 w-8" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-between mt-6 gap-4">
            <button
              onClick={handleMobilePrev}
              disabled={currentIndex === 0}
              className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              ← Prev
            </button>
            <button
              onClick={handleMobileNext}
              disabled={currentIndex === advantages.length - 1}
              className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Next →
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Desktop version
  return (
    <section ref={sectionRef} className="relative w-full">
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "120px 120px",
        }}
        ref={galleryRef}
        className="gallery h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden relative"
      >
        {/* Header Section */}
        <div className="absolute top-16 md:top-20 left-0 right-0 z-10 text-center px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
          {t.crisisTitle}
          </h2>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
             {t.crisisDesc}
          </p>
        </div>

        {/* Cards Container */}
        <div className="cards-container relative w-full h-full flex items-center justify-center mt-32 md:mt-40">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="problem-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transformOrigin: "center center" }}
            >
              <div className="relative group w-[450px] lg:w-[500px] xl:w-[550px] min-h-[50px] rounded-2xl overflow-hidden border-2 border-[#05df72]">
                {/* 1️⃣ Background Image (Inside Card Only) */}
                {/* <div
                  className="absolute inset-0 bg-cover bg-center  scale-105"
                  style={{ backgroundImage: `url(${advantage.imageUrl})` }}
                ></div> */}

                {/* 2️⃣ Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* 3️⃣ Content */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                        <span className="text-sm font-bold text-blue-400">
                          Problem #{index + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {advantage.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1 mb-6">
                    {advantage.points.map((point, pointIndex) => (
                      <p
                        key={pointIndex}
                        className="text-gray-200 leading-relaxed text-base"
                      >
                        {point}
                      </p>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                         {t.criticalIssue}
                        </span>
                      </div>

                      <div className="flex gap-1">
                        {[...Array(advantages.length)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              i === currentIndex
                                ? "bg-blue-400 scale-125"
                                : "bg-gray-600"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
