"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "Features", id: "features" },
    { label: "Why Different", id: "why" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
  ];

  // 🔹 Smooth scroll (NO active set here)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  // 🔹 Scroll spy (ONLY source of truth)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      let current = "";

      navLinks.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-[#0092b8] rounded-lg flex items-center justify-center">
            <span className="text-black text-xl font-bold ">P</span>
          </div>
          <span className="text-xl font-semibold text-white">
            Parking AI
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative
                bg-transparent
                border-none
                text-md
                cursor-pointer
                transition-colors
                ${
                  activeSection === item.id
                    ? "text-white after:w-full"
                    : "text-gray-300 hover:text-white"
                }

                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:bg-white
                after:w-0
                after:transition-all
                after:duration-300
                hover:after:w-full
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
