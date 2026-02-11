
"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (show) {
      gsap.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(buttonRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [show]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="cursor-pointer fixed bottom-8 right-8 z-50 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#0092b8] text-white shadow-lg transition-all duration-300 hover:bg-[#007a9c] hover:scale-110 hover:shadow-xl active:scale-95 opacity-0"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
      <span className="text-[10px] font-bold mt-0.5">TOP</span>
    </button>
  );
}
