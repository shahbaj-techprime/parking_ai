// "use client";

// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [activeSection, setActiveSection] = useState("");

//   const navLinks = [
//     { label: "Features", id: "features" },
//     { label: "Why Different", id: "why" },
//     { label: "Pricing", id: "pricing" },
//     { label: "FAQ", id: "faq" },
//   ];

//   // 🔹 Smooth scroll (NO active set here)
//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;

//     const yOffset = -80;
//     const y =
//       el.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({
//       top: y,
//       behavior: "smooth",
//     });
//   };

//   // 🔹 Scroll spy (ONLY source of truth)
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY + 120;

//       let current = "";

//       navLinks.forEach((item) => {
//         const section = document.getElementById(item.id);
//         if (!section) return;

//         const top = section.offsetTop;
//         const height = section.offsetHeight;

//         if (scrollPos >= top && scrollPos < top + height) {
//           current = item.id;
//         }
//       });

//       setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // run once on load

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/20">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
//         {/* LOGO */}
//         <div className="flex items-center gap-3 cursor-pointer">
//           <div className="w-10 h-10 bg-[#0092b8] rounded-lg flex items-center justify-center">
//             <span className="text-black text-xl font-bold ">P</span>
//           </div>
//           <span className="text-xl font-semibold text-white">
//             Parking AI
//           </span>
//         </div>

//         {/* NAV LINKS */}
//         <div className="md:flex items-center gap-8">
//           {navLinks.map((item) => (
//             <button
//               key={item.label}
//               onClick={() => scrollToSection(item.id)}
//               className={`
//                 relative
//                 bg-transparent
//                 border-none
//                 text-md
//                 cursor-pointer
//                 transition-colors
//                 ${
//                   activeSection === item.id
//                     ? "text-white after:w-full"
//                     : "text-gray-300 hover:text-white"
//                 }

//                 after:content-['']
//                 after:absolute
//                 after:left-0
//                 after:-bottom-1
//                 after:h-[2px]
//                 after:bg-white
//                 after:w-0
//                 after:transition-all
//                 after:duration-300
//                 hover:after:w-full
//               `}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Features", id: "features" },
    { label: "Why Different", id: "why" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
  ];

  // 🔹 Smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false); // close mobile menu
  };

  // 🔹 Scroll spy
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-[#0092b8] rounded-lg flex items-center justify-center">
              <span className="text-black text-xl font-bold">P</span>
            </div>
            <span className="text-xl font-semibold text-white">
              Parking AI
            </span>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-md transition-colors
                  ${
                    activeSection === item.id
                      ? "text-white after:w-full"
                      : "text-gray-300 hover:text-white"
                  }
                  after:content-['']
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-white
                  after:w-0 after:transition-all
                  hover:after:w-full
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* HAMBURGER (MOBILE) */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/20">
          <span className="text-white text-lg font-semibold">
            Menu
          </span>
          <button onClick={() => setOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className={`text-left text-lg
                ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-300"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
