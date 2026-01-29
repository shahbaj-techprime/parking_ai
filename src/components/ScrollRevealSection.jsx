"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealSection({ title, items }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-item", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 border-b border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          {title}
        </h2>

        <div className="space-y-6">
          {items.map((text, i) => (
            <p
              key={i}
              className="reveal-item text-lg md:text-xl text-gray-400 leading-relaxed"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
