// "use client";

// import { useEffect, useState } from "react";

// export default function CookieConsent() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const consent = localStorage.getItem("cookieConsent");
//     if (!consent) {
//       setTimeout(() => setShow(true), 700);
//     }
//   }, []);

//   const handleConsent = (value) => {
//     localStorage.setItem("cookieConsent", value);
//     setShow(false);
//   };

//   if (!show) return null;

//   return (
//     <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
//       <div className="relative max-w-md bg-[#0e1116]/95 backdrop-blur-xl border border-white/10 text-white rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

//         {/* Close Button */}
//         <button
//           onClick={() => setShow(false)}
//           className="absolute top-4 right-4 text-gray-400 hover:text-white transition cursor-pointer"
//         >
//           ✕
//         </button>

//         {/* Text */}
//         <p className="text-md text-gray-300 leading-relaxed mb-6">
//           This website uses cookies, pixel tags, and local storage for
//           performance, personalization, and marketing purposes. We use our own
//           cookies and some from third parties. Only essential cookies are
//           turned on by default.
//           <button className="underline ml-1 hover:text-white cursor-pointer">
//             Cookies settings
//           </button>
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col gap-3">

//           {/* Allow Button */}
//           <button
//             onClick={() => handleConsent("allow")}
//             className="group relative flex items-center justify-center bg-white text-black py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer overflow-hidden"
//           >
//             Allow all cookies
//             <span className="absolute left-6 opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
//               →
//             </span>

//           </button>

//           {/* Deny Button */}
//           <button
//             onClick={() => handleConsent("deny")}
//             className="group relative flex items-center justify-center border border-white/20 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.03] cursor-pointer overflow-hidden"
//           >
//             Do not allow cookies

//             <span className="absolute left-6 opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
//               →
//             </span>
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";

// const cookieCategories = [
//   {
//     id: "essential",
//     label: "Essential",
//     description: "These items are necessary for the website to work.",
//     locked: true,
//     defaultOn: true,
//   },
//   {
//     id: "marketing",
//     label: "Marketing",
//     description:
//       "These items help deliver advertising that's more relevant to you. They may also be used to limit the number of times you see an ad and measure the effectiveness of ad campaigns. These are third party cookies provided by our advertising partners.",
//     locked: false,
//     defaultOn: false,
//   },
//   {
//     id: "personalization",
//     label: "Personalization",
//     description:
//       "These items let the website remember choices you make (like user name, language, or region) and personalize features for you. For example, we may show you different content depending on which of our sites you've visited and content you've read.",
//     locked: false,
//     defaultOn: false,
//   },
//   {
//     id: "analytics",
//     label: "Analytics",
//     description:
//       "These items help us understand visitor interactions, measure website performance, and spot potential technical issues. These don't include essential cookies that provide incidental analytics while making the website work.",
//     locked: false,
//     defaultOn: false,
//   },
// ];

// function Toggle({ enabled, locked, onChange }) {
//   return (
//     <button
//       onClick={() => !locked && onChange(!enabled)}
//       disabled={locked}
//       className={`relative inline-flex items-center w-11 h-6 rounded-full transition-all duration-300 focus:outline-none ${
//         locked
//           ? "bg-white/30 cursor-not-allowed"
//           : enabled
//           ? "bg-white cursor-pointer"
//           : "bg-white/10 border border-white/20 cursor-pointer"
//       }`}
//       aria-checked={enabled}
//       role="switch"
//     >
//       <span
//         className={`inline-block w-4 h-4 rounded-full transition-all duration-300 shadow-md ${
//           enabled ? "translate-x-6 bg-black" : "translate-x-1 bg-white/50"
//         }`}
//       />
//     </button>
//   );
// }

// function PreferencesModal({ onClose, onSave }) {
//   const [prefs, setPrefs] = useState(() =>
//     Object.fromEntries(
//       cookieCategories.map((c) => [c.id, c.defaultOn || c.locked])
//     )
//   );

//   const toggle = (id, val) => setPrefs((p) => ({ ...p, [id]: val }));

//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div
//         className="relative w-full max-w-lg bg-[#0c0f14] border border-white/10 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden"
//         style={{ animation: "modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}
//       >
//         {/* Header */}
//         <div className="flex items-start justify-between p-6 pb-4 border-b border-white/8">
//           <div>
//             <h2 className="text-xl font-bold text-white tracking-tight">
//               Cookie Preferences
//             </h2>
//             <p className="text-sm text-gray-400 mt-1 leading-relaxed">
//               This website uses cookies, pixel tags, and local storage for
//               performance and marketing purposes. We use our own cookies and
//               some from third parties. If you opted to accept any non-essential
//               cookies, you can change or customize your selection at any time.{" "}
//               <button className="text-white underline underline-offset-2 hover:text-gray-200 transition-colors">
//                 Privacy Policy
//               </button>
//               .
//             </p>
//           </div>
//           <button
//             onClick={onClose}
//             className="ml-4 mt-0.5 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
//           >
//             <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//               <path
//                 d="M1 1l12 12M13 1L1 13"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Categories */}
//         <div className="p-6 space-y-5 max-h-[50vh] overflow-y-auto scrollbar-thin">
//           {cookieCategories.map((cat, i) => (
//             <div
//               key={cat.id}
//               className="flex gap-4"
//               style={{ animation: `fadeUp 0.3s ${i * 0.06}s both` }}
//             >
//               <div className="pt-0.5 flex-shrink-0">
//                 <Toggle
//                   enabled={prefs[cat.id]}
//                   locked={cat.locked}
//                   onChange={(val) => toggle(cat.id, val)}
//                 />
//               </div>
//               <div>
//                 <p className="text-white font-semibold text-sm tracking-widest uppercase mb-1">
//                   {cat.label}
//                   {cat.locked && (
//                     <span className="ml-2 text-[10px] font-normal text-gray-500 normal-case tracking-normal">
//                       Always on
//                     </span>
//                   )}
//                 </p>
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   {cat.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="p-6 pt-4 border-t border-white/8">
//           <button
//             onClick={() => onSave(prefs)}
//             className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-100 active:scale-[0.98] transition-all duration-200 text-sm tracking-wide"
//           >
//             Save preferences
//           </button>
//         </div>
//       </div>

//       <style>{`
//         @keyframes modalIn {
//           from { opacity: 0; transform: scale(0.92) translateY(16px); }
//           to   { opacity: 1; transform: scale(1) translateY(0); }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(8px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default function CookieConsent() {
//   const [show, setShow] = useState(false);
//   const [showPrefs, setShowPrefs] = useState(false);

//   useEffect(() => {
//     const consent = localStorage.getItem("cookieConsent");
//     if (!consent) {
//       setTimeout(() => setShow(true), 700);
//     }
//   }, []);

//   const handleConsent = (value) => {
//     localStorage.setItem("cookieConsent", JSON.stringify(value));
//     setShow(false);
//     setShowPrefs(false);
//   };

//   const handleSavePrefs = (prefs) => {
//     handleConsent({ type: "custom", prefs });
//   };

//   return (
//     <>
//       {/* Preferences Modal */}
//       {showPrefs && (
//         <PreferencesModal
//           onClose={() => setShowPrefs(false)}
//           onSave={handleSavePrefs}
//         />
//       )}

//       {/* Banner */}
//       {show && !showPrefs && (
//         <div className="fixed bottom-6 right-6 z-50" style={{ animation: "slideUp 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
//           <div className="relative max-w-md bg-[#0e1116]/95 backdrop-blur-xl border border-white/10 text-white rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

//             {/* Close */}
//             <button
//               onClick={() => setShow(false)}
//               className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
//             >
//               <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                 <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//               </svg>
//             </button>

//             {/* Text */}
//             <p className="text-sm text-gray-300 leading-relaxed mb-5 pr-4">
//               This website uses cookies, pixel tags, and local storage for
//               performance, personalization, and marketing purposes. We use our
//               own cookies and some from third parties. Only essential cookies
//               are turned on by default.{" "}
//               <button
//                 onClick={() => setShowPrefs(true)}
//                 className="text-white underline underline-offset-2 hover:text-gray-200 transition-colors"
//               >
//                 Cookie settings
//               </button>
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col gap-2.5">
//               <button
//                 onClick={() => handleConsent("allow")}
//                 className="group relative flex items-center justify-center bg-white text-black py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-gray-100 active:scale-[0.98]"
//               >
//                 Allow all cookies
//               </button>
//               <button
//                 onClick={() => handleConsent("deny")}
//                 className="group relative flex items-center justify-center border border-white/15 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-white/8 active:scale-[0.98]"
//               >
//                 Do not allow cookies
//               </button>
//             </div>
//           </div>

//           <style>{`
//             @keyframes slideUp {
//               from { opacity: 0; transform: translateY(24px) scale(0.96); }
//               to   { opacity: 1; transform: translateY(0) scale(1); }
//             }
//           `}</style>
//         </div>
//       )}
//     </>
//   );
// }

// "use client";

// import { useEffect, useState, useRef } from "react";

// const cookieCategories = [
//   {
//     id: "essential",
//     label: "ESSENTIAL",
//     description: "These items are necessary for the website to work.",
//     locked: true,
//     defaultOn: true,
//   },
//   {
//     id: "marketing",
//     label: "MARKETING",
//     description:
//       "These items help deliver advertising that's more relevant to you. They may also be used to limit the number of times you see an ad and measure the effectiveness of ad campaigns. These are third party cookies provided by our advertising partners.",
//     locked: false,
//     defaultOn: false,
//   },
//   {
//     id: "personalization",
//     label: "PERSONALIZATION",
//     description:
//       "These items let the website remember choices you make (like user name, language, or region) and personalize features for you. For example, we may show you different content depending on which of our sites you've visited and content you've read.",
//     locked: false,
//     defaultOn: false,
//   },
//   {
//     id: "analytics",
//     label: "ANALYTICS",
//     description:
//       "These items help us understand visitor interactions, measure website performance, and spot potential technical issues. These don't include essential cookies that provide incidental analytics while making the website work.",
//     locked: false,
//     defaultOn: false,
//   },
// ];

// function Toggle({ enabled, locked, onChange }) {
//   return (
//     <button
//       onClick={() => !locked && onChange(!enabled)}
//       disabled={locked}
//       aria-checked={enabled}
//       role="switch"
//       className={`relative flex-shrink-0 inline-flex items-center w-12 h-6 rounded-full border-2 transition-all duration-300 focus:outline-none ${
//         locked
//           ? "border-white/50 bg-white/25 cursor-not-allowed"
//           : enabled
//           ? "border-white bg-white cursor-pointer"
//           : "border-white/30 bg-transparent cursor-pointer"
//       }`}
//     >
//       <span
//         className={`inline-block w-4 h-4 rounded-full transition-all duration-300 ${
//           enabled ? "translate-x-6 bg-black" : "translate-x-0.5 bg-white/40"
//         }`}
//       />
//     </button>
//   );
// }

// function PreferencesModal({ onClose, onSave }) {
//   const [prefs, setPrefs] = useState(() =>
//     Object.fromEntries(
//       cookieCategories.map((c) => [c.id, c.defaultOn || c.locked])
//     )
//   );

//   const toggle = (id, val) => setPrefs((p) => ({ ...p, [id]: val }));

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/55"
//         style={{ backdropFilter: "blur(3px)" }}
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div
//         className="relative z-10 w-full bg-[#0f1115] text-white rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
//         style={{
//           maxWidth: 680,
//           maxHeight: "90vh",
//           animation: "modalIn 0.38s cubic-bezier(0.34,1.3,0.64,1) both",
//         }}
//       >
//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-5 right-5 z-20 text-gray-400 hover:text-white transition-colors"
//         >
//           <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//             <path
//               d="M2 2l14 14M16 2L2 16"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//             />
//           </svg>
//         </button>

//         {/* Scrollable body */}
//         <div className="overflow-y-auto flex-1 px-8 pt-8 pb-2">
//           <h2 className="text-[2rem] font-bold mb-5 leading-snug">
//             Cookie Preferences
//           </h2>

//           <p className="text-[15px] text-gray-300 leading-relaxed mb-8">
//             This website uses cookies, pixel tags, and local storage for
//             performance and marketing purposes. We use our own cookies and some
//             from third parties. If you opted to accept any non-essential
//             cookies, you can change or customize your selection at any time by
//             changing the boxes checked below. To learn more about our privacy
//             practices, please see our{" "}
//             <button className="text-white underline underline-offset-2 hover:opacity-75 transition-opacity">
//               Privacy Policy
//             </button>
//             .
//           </p>

//           {/* Category rows */}
//           <div>
//             {cookieCategories.map((cat, i) => (
//               <div
//                 key={cat.id}
//                 className="flex items-start gap-5 py-6 border-t border-white/10 first:border-t-0"
//                 style={{ animation: `fadeUp 0.3s ${0.04 + i * 0.07}s both` }}
//               >
//                 <Toggle
//                   enabled={prefs[cat.id]}
//                   locked={cat.locked}
//                   onChange={(val) => toggle(cat.id, val)}
//                 />
//                 <div>
//                   <p className="text-white font-bold text-[13px] tracking-[0.13em] mb-1.5">
//                     {cat.label}
//                   </p>
//                   <p className="text-gray-400 text-[14px] leading-relaxed">
//                     {cat.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Sticky footer */}
//         <div className="px-8 py-5">
//           <button
//             onClick={() => onSave(prefs)}
//             className="w-full bg-white text-black font-semibold py-4 rounded-xl text-[15px] hover:bg-gray-100 active:scale-[0.99] transition-all duration-150"
//           >
//             Save preferences
//           </button>
//         </div>
//       </div>

//       <style>{`
//         @keyframes modalIn {
//           from { opacity: 0; transform: scale(0.93) translateY(22px); }
//           to   { opacity: 1; transform: scale(1)   translateY(0); }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default function CookieConsent() {
//   const [show, setShow] = useState(false);
//   const [visible, setVisible] = useState(true);
//   const [showPrefs, setShowPrefs] = useState(false);
//   const lastScrollY = useRef(0);
//   const rafId = useRef(null);

//   // Delay reveal
//   useEffect(() => {
//     const consent = localStorage.getItem("cookieConsent");
//     if (!consent) {
//       const t = setTimeout(() => setShow(true), 700);
//       return () => clearTimeout(t);
//     }
//   }, []);

//   // Scroll hide/show
//   useEffect(() => {
//     if (!show) return;

//     const onScroll = () => {
//       if (rafId.current) return;
//       rafId.current = requestAnimationFrame(() => {
//         const currentY = window.scrollY;
//         const delta = currentY - lastScrollY.current;
//         if (delta > 10) setVisible(false);       // scrolling down
//         else if (delta < -10) setVisible(true);  // scrolling up
//         lastScrollY.current = currentY;
//         rafId.current = null;
//       });
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//     };
//   }, [show]);

//   const handleConsent = (value) => {
//     localStorage.setItem("cookieConsent", JSON.stringify(value));
//     setShow(false);
//     setShowPrefs(false);
//   };

//   if (!show) return null;

//   return (
//     <>
//       {showPrefs && (
//         <PreferencesModal
//           onClose={() => setShowPrefs(false)}
//           onSave={(prefs) => handleConsent({ type: "custom", prefs })}
//         />
//       )}

//       {/* Banner */}
//       <div
//         className="fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out"
//         style={{
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0)" : "translateY(28px)",
//           pointerEvents: visible ? "auto" : "none",
//           animation: "bannerIn 0.5s cubic-bezier(0.34,1.3,0.64,1) both",
//         }}
//       >
//         <div
//           className="relative bg-[#0f1115] border border-white/10 text-white rounded-2xl p-6 shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
//           style={{ width: 370 }}
//         >
//           {/* X */}
//           <button
//             onClick={() => setShow(false)}
//             className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
//           >
//             <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//               <path
//                 d="M1 1l12 12M13 1L1 13"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </button>

//           {/* Body text */}
//           <p className="text-[14px] text-gray-300 leading-relaxed mb-5 pr-4">
//             This website uses cookies, pixel tags, and local storage for
//             performance, personalization, and marketing purposes. We use our
//             own cookies and some from third parties. Only essential cookies are
//             turned on by default.{" "}
//             <button
//               onClick={() => setShowPrefs(true)}
//               className="text-white underline underline-offset-2 hover:opacity-75 transition-opacity"
//             >
//               Cookies settings
//             </button>
//           </p>

//           {/* Action buttons */}
//           <div className="flex flex-col gap-2.5">
//             <button
//               onClick={() => handleConsent("allow")}
//               className="w-full bg-[#252830] hover:bg-[#2e323d] text-white font-medium py-3.5 rounded-xl text-[14px] transition-colors duration-150 active:scale-[0.98]"
//             >
//               Allow all cookies
//             </button>
//             <button
//               onClick={() => handleConsent("deny")}
//               className="w-full bg-[#252830] hover:bg-[#2e323d] text-white font-medium py-3.5 rounded-xl text-[14px] transition-colors duration-150 active:scale-[0.98]"
//             >
//               Do not allow cookies
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes bannerIn {
//           from { opacity: 0; transform: translateY(30px) scale(0.95); }
//           to   { opacity: 1; transform: translateY(0)   scale(1); }
//         }
//       `}</style>
//     </>
//   );
// }

"use client";

import { useEffect, useState, useRef } from "react";

const cookieCategories = [
  {
    id: "essential",
    label: "ESSENTIAL",
    description: "These items are necessary for the website to work.",
    locked: true,
    defaultOn: true,
  },
  {
    id: "marketing",
    label: "MARKETING",
    description:
      "These items help deliver advertising that's more relevant to you. They may also be used to limit the number of times you see an ad and measure the effectiveness of ad campaigns. These are third party cookies provided by our advertising partners.",
    locked: false,
    defaultOn: false,
  },
  {
    id: "personalization",
    label: "PERSONALIZATION",
    description:
      "These items let the website remember choices you make (like user name, language, or region) and personalize features for you.",
    locked: false,
    defaultOn: false,
  },
  {
    id: "analytics",
    label: "ANALYTICS",
    description:
      "These items help us understand visitor interactions, measure website performance, and spot potential technical issues.",
    locked: false,
    defaultOn: false,
  },
];

function Toggle({ enabled, locked, onChange }) {
  return (
    <button
      onClick={() => !locked && onChange(!enabled)}
      disabled={locked}
      aria-checked={enabled}
      role="switch"
      className={`relative flex-shrink-0 inline-flex items-center w-10 h-5 rounded-full border-2 transition-all duration-300 focus:outline-none ${
        locked
          ? "border-white/40 bg-white/20 cursor-not-allowed"
          : enabled
            ? "border-white bg-white cursor-pointer"
            : "border-white/25 bg-transparent cursor-pointer"
      }`}
    >
      <span
        className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${
          enabled ? "translate-x-5 bg-black" : "translate-x-0.5 bg-white/35"
        }`}
      />
    </button>
  );
}

function PreferencesModal({ onClose, onSave }) {
  const [prefs, setPrefs] = useState(() =>
    Object.fromEntries(
      cookieCategories.map((c) => [c.id, c.defaultOn || c.locked]),
    ),
  );

  const toggle = (id, val) => setPrefs((p) => ({ ...p, [id]: val }));

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        style={{ backdropFilter: "blur(4px)" }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full bg-[#0d0f12] text-white rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.85)] overflow-hidden"
        style={{
          maxWidth: 620,
          animation: "modalIn 0.35s cubic-bezier(0.34,1.3,0.64,1) both",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className=" cursor-pointer absolute top-5 right-5 z-20 w-7 h-7 flex items-center justify-center rounded-full bg-white/8 text-gray-400 hover:text-white hover:bg-white/15 transition-all"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M1 1l10 10M11 1L1 11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="px-7 pt-7 pb-6">
          {/* Header */}
          <h2 className="text-[1.6rem] font-bold mb-3 leading-tight pr-8">
            Cookie Preferences
          </h2>
          <p className="text-[13.5px] text-gray-400 leading-relaxed mb-6">
            This website uses cookies, pixel tags, and local storage for
            performance and marketing purposes. We use our own cookies and some
            from third parties. If you opted to accept any non-essential
            cookies, you can change or customize your selection at any time by
            changing the boxes checked below. To learn more about our privacy
            practices, please see our .{" "}
            <button className="text-gray-200 underline underline-offset-2 hover:text-white transition-colors">
              Privacy Policy
            </button>
            .
          </p>

          {/* Categories */}
          <div className="space-y-0">
            {cookieCategories.map((cat, i) => (
              <div
                key={cat.id}
                className="flex items-start gap-4 py-4 border-t border-white/[0.07]"
                style={{ animation: `fadeUp 0.28s ${0.05 + i * 0.06}s both` }}
              >
                <div className="pt-0.5">
                  <Toggle
                    enabled={prefs[cat.id]}
                    locked={cat.locked}
                    onChange={(val) => toggle(cat.id, val)}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-white font-semibold text-[11.5px] tracking-[0.14em]">
                      {cat.label}
                    </p>
                    {cat.locked && (
                      <span className="text-[10px] text-gray-500 font-normal tracking-normal">
                        Always active
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-[12.5px] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer — compact save button + secondary link */}
          <div className="flex items-center justify-between mt-5 pt-5 border-t border-white/[0.07]">
            <button
              onClick={onClose}
              className="cursor-pointer text-[12.5px] text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-2"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(prefs)}
              className="cursor-pointer bg-white text-black text-[13px] font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-100 active:scale-[0.98] transition-all duration-150"
            >
              Save preferences
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(18px); }
          to   { opacity: 1; transform: scale(1)   translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showPrefs, setShowPrefs] = useState(false);
  const lastScrollY = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const t = setTimeout(() => setShow(true), 700);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;
        if (delta > 10) setVisible(false);
        else if (delta < -10) setVisible(true);
        lastScrollY.current = currentY;
        rafId.current = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [show]);

  const handleConsent = (value) => {
    localStorage.setItem("cookieConsent", JSON.stringify(value));
    setShow(false);
    setShowPrefs(false);
  };

  if (!show) return null;

  return (
    <>
      {showPrefs && (
        <PreferencesModal
          onClose={() => setShowPrefs(false)}
          onSave={(prefs) => handleConsent({ type: "custom", prefs })}
        />
      )}

      {/* Banner */}
      <div
        className="fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          pointerEvents: visible ? "auto" : "none",
          animation: "bannerIn 0.5s cubic-bezier(0.34,1.3,0.64,1) both",
        }}
      >
        <div
          className="relative bg-[#0d0f12] border border-white/10 text-white rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
          style={{ width: 355 }}
        >
          <button
            onClick={() => setShow(false)}
            className="cursor-pointer absolute top-3.5 right-3.5 w-6 h-6 flex items-center justify-center rounded-full bg-white/8 text-gray-500 hover:text-white hover:bg-white/15 transition-all"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M1 1l8 8M9 1L1 9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <p className="text-md text-gray-400 leading-relaxed mb-4 pr-5">
            This website uses cookies, pixel tags, and local storage for
            performance, personalization, and marketing purposes. We use our own
            cookies and some from third parties. Only essential cookies are
            turned on by default.{" "}
            <button
              onClick={() => setShowPrefs(true)}
              className="text-gray-200 underline underline-offset-2 hover:text-white transition-colors cursor-pointer"
            >
              Cookie settings
            </button>
          </p>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleConsent("allow")}
              className="cursor-pointer w-full bg-[#1e2128] hover:bg-[#272b35] border border-white/8 text-white font-medium py-3 rounded-xl text-[13.5px] transition-colors duration-150 active:scale-[0.98]"
            >
              Allow all cookies
            </button>
            <button
              onClick={() => handleConsent("deny")}
              className="cursor-pointer w-full bg-[#1e2128] hover:bg-[#272b35] border border-white/8 text-white font-medium py-3 rounded-xl text-[13.5px] transition-colors duration-150 active:scale-[0.98]"
            >
              Do not allow cookies
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bannerIn {
          from { opacity: 0; transform: translateY(28px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
    </>
  );
}
