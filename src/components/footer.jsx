"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/app/translations/context/LanguageContext";
import { Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { lang, changeLanguage, t } = useLanguage();

  const [langOpen, setLangOpen] = useState(false);
  const product = t.product || [];
  const company = t.newarraycompany || [];
  const resources = t.newarrayresources || [];
  // const trustSecurity = t.trustSecurity || [];
  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" },
    { code: "ko", label: "Korean" },
  ];
  const currentLang = languages.find((l) => l.code === lang);
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      disable: "mobile",
    });

    const columns = document.querySelectorAll(".footer-column");
    columns.forEach((column, index) => {
      gsap.fromTo(
        column,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: column,
            start: "top 90%",
            once: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  // const product = [
  //   { label: "Features", href: "#features" },
  //   { label: "Why Parking AI", href: "#why" },
  //   { label: "Pricing", href: "#pricing" },
  //   { label: "FAQ", href: "#faq" },
  // ];
  // const company = [
  //   { label: "Contact Sales", href: "#contact" },
  //   { label: "Support", href: "#support" },
  //   { label: "Blog", href: "#blog" },
  //   { label: "Case Studies", href: "#case-studies" },
  // ];
  // const resources = [
  //   { label: "NBC 2016 Guide", href: "#nbc-guide" },
  //   { label: "Video Tutorials", href: "#tutorials" },
  //   { label: "Sample DWG Files", href: "#samples" },
  //   { label: "Best Practices", href: "#practices" },
  // ];
  // const trustSecurity = [
  //   { label: "NBC 2016 Compliant" },
  //   { label: "India-Based Servers" },
  //   { label: "SOC 2 Type II" },
  //   { label: "24-Hour Support" },
  // ];

  const socialLinks = [
    // {
    //   name: "Website",
    //   href: "https://nexelvr.com/", // change to your real URL
    //   icon: (
    //     <svg
    //       className="w-5 h-5"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="1.8"
    //       viewBox="0 0 24 24"
    //     >
    //       <circle cx="12" cy="12" r="9" />
    //       <path d="M3 12h18" />
    //       <path d="M12 3a15 15 0 010 18" />
    //       <path d="M12 3a15 15 0 000 18" />
    //     </svg>
    //   ),
    // },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/nexel-vr/posts/?feedView=all",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    // {
    //   name: "Twitter",
    //   href: "#",
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "Instagram",
    //   href: "#",
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "YouTube",
    //   href: "#",
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    //     </svg>
    //   ),
    // },
  ];

  return (
    <footer className=" bg-gradient-to-b from-[#0a0b0e] to-[#111317] text-white pt-20 pb-6 h-full relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0092b8]/5 via-transparent to-transparent pointer-events-none  height-[200vh]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* LEFT LOGO SECTION */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <img
              src="/image/NEXO_LVR.png"
              alt="Parking AI Logo"
              className="w-180  ml-[-20] mb-6 brightness-110"
            />
            {/* <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-sm">
              AI-powered parking design engine built for India's commercial real
              estate.
            </p> */}

            {/* Trust Badges */}
            {/* <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <svg className="w-4 h-4 text-[#0092b8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium text-gray-300">NBC 2016</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <svg className="w-4 h-4 text-[#0092b8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium text-gray-300">SOC 2 Certified</span>
              </div>
            </div> */}

            {/* <div className="relative">
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
           
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-[#05df72] hover:text-white hover:border-[#05df72] transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                  target="_black"
                >
                  {social.icon}
                </a>
              ))}
            </div> */}

            <div className="flex items-center gap-4">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <Globe size={28} />
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

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-[#05df72] hover:text-white hover:border-[#05df72] transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                    target="_blank"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT GRID */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product */}
            <div className="footer-column">
              <h3 className="text-white text-sm font-bold mb-5 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-[#05df72] rounded-full" />
                {t?.products}
              </h3>
              <ul className="space-y-3">
                {product.map((item, index) => (
                  // console.log(item)
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-[#05df72] transition-colors duration-200 text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-[#05df72] transition-all duration-200" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer-column">
              <h3 className="text-white text-sm font-bold mb-5 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-[#05df72] rounded-full" />
                {t?.Companys}
              </h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-[#05df72] transition-colors duration-200 text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-[#05df72] transition-all duration-200" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-column">
              <h3 className="text-white text-sm font-bold mb-5 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-[#05df72] rounded-full" />
                {t?.res}
              </h3>
              <ul className="space-y-3">
                {resources.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-[#05df72] transition-colors duration-200 text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-[#05df72] transition-all duration-200" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-column">
              <h3 className="text-white text-sm font-bold mb-5 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-[#05df72] rounded-full" />
                {t?.newcontact}
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 text-[#05df72] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:hello@parkingai.in"
                    className="hover:text-[#05df72] transition-colors"
                  >
                    {t?.newemail}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 text-[#05df72] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="hover:text-[#05df72] transition-colors">
                    {t?.newnumber}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 text-[#05df72] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="hover:text-[#05df72] transition-colors">
                    {t?.newcity}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500 flex items-center gap-2">
            <span>
              {t?.copyright}{" "}
              <a
                href="https://nexelvr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#05df72] font-semibold hover:underline"
              >
                {t?.powder}
              </a>
            </span>
            <span className="hidden sm:inline">{t?.All}</span>
            {/* <span className="inline-flex items-center gap-1 text-xs bg-white/5 px-2 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Made in India
            </span> */}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-gray-500 hover:text-[#05df72] transition-colors"
            >
              {t?.privacy}
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="#terms"
              className="text-gray-500 hover:text-[#05df72] transition-colors"
            >
              {t?.terms}
            </a>
            {/* <span className="text-gray-700">•</span>
            <a href="#cookies" className="text-gray-500 hover:text-[#0092b8] transition-colors">
              Cookies
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
