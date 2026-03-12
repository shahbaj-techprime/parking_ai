
"use client";

import { useLanguage } from "@/app/translations/context/LanguageContext";
import { useEffect, useRef, useState } from "react";

export default function WhyChoose() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const { t, lang } = useLanguage();

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
      title:  t.fasterDesign,
      subtitle: "(25 hours → 10 minutes)",
    },
    {
      end: 15,
      suffix: "%",
      title:  t.moreParking,
      subtitle: "(₹50–₹300L revenue)",
    },
    {
      end: 100,
      suffix: "%",
      title: t.compliant,
      subtitle: "(Zero rejections)",
    },
    {
      end: 0,
      suffix: "",
      title: t.redraw,
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
         {t.whyTitle}
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
