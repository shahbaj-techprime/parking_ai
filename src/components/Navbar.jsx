// "use client";

// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [activeSection, setActiveSection] = useState("");
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [visible, setVisible] = useState(true);
//   const [lastScroll, setLastScroll] = useState(0);

//   const navLinks = [
//     { label: "Features", id: "features" },
//     { label: "Why Different", id: "why" },
//     { label: "Pricing", id: "pricing" },
//     { label: "FAQ", id: "faq" },
//   ];

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;

//     const yOffset = -100;
//     const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: "smooth" });
//     setOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;
//       const scrollPos = currentScroll + 120;

//       setScrolled(currentScroll > 80);

//       if (currentScroll > lastScroll && currentScroll > 200) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }

//       setLastScroll(currentScroll);

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
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScroll]);

//   return (
//     <>
//       <nav
//         className={`fixed left-0 w-full z-40 border-b border-white/10
//         transition-all duration-500 ease-in-out
//         ${visible ? "translate-y-0" : "-translate-y-full"}
//         ${
//           scrolled
//             ? "top-0 bg-black/80 backdrop-blur-xl shadow-lg"
//             : "top-[45px] bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-3 cursor-pointer">
//             <div className="w-10 h-10 bg-[#05df72] rounded-lg flex items-center justify-center">
//               <span className="text-black text-xl font-bold">P</span>
//             </div>
//             <span className="text-xl font-semibold text-white">Parking AI</span>
//           </div>

//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`relative text-md transition-colors
//                 ${
//                   activeSection === item.id
//                     ? "text-white after:w-full"
//                     : "text-gray-300 hover:text-white"
//                 }
//                 after:content-['']
//                 after:absolute after:left-0 after:-bottom-1
//                 after:h-[2px] after:bg-white
//                 after:w-0 after:transition-all
//                 hover:after:w-full`}
//               >
//                 {item.label}
//               </button>
//             ))}

//             <button
//   onClick={() => scrollToSection("contactus")}
//   className="group ml-4 px-6 py-2 rounded-lg
//   relative overflow-hidden
//   flex items-center gap-2
//   text-black font-semibold
//   bg-[#05df72]
//   animate-waterflow
//   transition-all duration-300"
// >
//   Contact Us

//   <svg
//     className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={3}
//       d="M17 8l4 4m0 0l-4 4m4-4H3"
//     />
//   </svg>
// </button>

//           </div>

//           <button
//             className="md:hidden text-white"
//             onClick={() => setOpen(true)}
//           >
//             <Menu size={28} />
//           </button>
//         </div>
//       </nav>

//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="fixed inset-0 bg-black/60 z-30"
//         />
//       )}

//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-black z-50
//         transform transition-transform duration-300
//         ${open ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="p-6 flex items-center justify-between border-b border-white/20">
//           <span className="text-white text-lg font-semibold">Menu</span>
//           <button onClick={() => setOpen(false)}>
//             <X size={24} className="text-white" />
//           </button>
//         </div>

//         <div className="flex flex-col p-6 gap-6">
//           {navLinks.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className={`text-left text-lg transition-colors
//               ${
//                 activeSection === item.id
//                   ? "text-white"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               {item.label}
//             </button>
//           ))}

//           <button
//             onClick={() => scrollToSection("contactus")}
//             className="ml-4 px-6 py-2 rounded-lg
//   relative overflow-hidden
//   text-black font-semibold
//   bg-[#05df72]
//   animate-waterflow
//   transition-all duration-300"
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/app/translations/context/LanguageContext";
// import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, changeLanguage, t } = useLanguage();

  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { label: t.features, id: "features" },
    { label: t.why, id: "why" },
    // { label: t.pricing, id: "pricing" },
    { label: t.faq, id: "faq" },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" },
    { code: "ko", label: "Korean" },
  ];
  const currentLang = languages.find((l) => l.code === lang);
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollPos = currentScroll + 120;

      setScrolled(currentScroll > 80);

      if (currentScroll > lastScroll && currentScroll > 200) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);

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
  }, [lastScroll, lang]);

  return (
    <>
      <nav
        className={`fixed left-0 w-full z-40 border-b border-white/10
      transition-all duration-500 ease-in-out
      ${visible ? "translate-y-0" : "-translate-y-full"}
      ${scrolled ? "top-0 bg-black/80 backdrop-blur-xl shadow-lg" : "top-[45px] bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-[#05df72] rounded-lg flex items-center justify-center">
              <span className="text-black text-xl font-bold">P</span>
            </div>
            <span className="text-xl font-semibold text-white">
              {t.parkingai}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-md transition-colors
                ${activeSection === item.id ? "text-white after:w-full" : "text-gray-300 hover:text-white"}
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-white
                after:w-0 after:transition-all
                hover:after:w-full corsor-pointer`}
              >
                {item.label}
              </button>
            ))}

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <Globe size={18} />
                {currentLang?.label?.toUpperCase()}
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-3 w-36 bg-black border border-white/10 rounded-lg shadow-lg">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        changeLanguage(l.code);
                        setLangOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white"
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => scrollToSection("contactus")}
              className="ml-4 px-6 py-2 rounded-lg text-black font-semibold bg-[#05df72] flex items-center gap-2"
            >
              {t.contact}

              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>
      {/* Sidebar Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-30"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black z-50
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/20">
          <span className="text-white text-lg font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-6 gap-6 relative">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left text-lg transition-colors ${
                activeSection === item.id
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("contactus")}
            className="ml-4 px-6 py-2 rounded-lg relative overflow-hidden
                 text-black font-semibold bg-[#05df72]
                 animate-waterflow transition-all duration-300"
          >
            Contact Us
          </button>

          {/* Language Dropdown */}
          <div className="relative mt-4">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center justify-between w-full px-4 py-2 bg-gray-900 text-gray-300 rounded-lg"
            >
              {currentLang?.label?.toUpperCase()}
              <ChevronDown size={16} />
            </button>

            {langOpen && (
              <div className="absolute top-full mt-1 left-0 w-full bg-black border border-white/10 rounded-lg shadow-lg z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      changeLanguage(l.code);
                      setLangOpen(false);
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
