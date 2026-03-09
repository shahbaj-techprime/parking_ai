"use client";

import { useLanguage } from "@/app/translations/context/LanguageContext";
import { useEffect, useState, useRef } from "react";

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
//       "These items let the website remember choices you make (like user name, language, or region) and personalize features for you.",
//     locked: false,
//     defaultOn: false,
//   },
//   {
//     id: "analytics",
//     label: "ANALYTICS",
//     description:
//       "These items help us understand visitor interactions, measure website performance, and spot potential technical issues.",
//     locked: false,
//     defaultOn: false,
//   },
// ];

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
  const { t } = useLanguage();
  const cookieCategories = t.cookieCategories || [];
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
           {t?.coookietitle}
          </h2>
          <p className="text-[13.5px] text-gray-400 leading-relaxed mb-6">
           {t?.cookiesdesc}.{" "}
            <button className="text-gray-200 underline underline-offset-2 hover:text-white transition-colors">
              {t?.nweprivacy}
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
            {t?.button4}
            </button>
            <button
              onClick={() => onSave(prefs)}
              className="cursor-pointer bg-[#05df72] text-black text-[13px] font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-100 active:scale-[0.98] transition-all duration-150"
            >
              {t?.button3}
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
  const { t } = useLanguage();
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
            {t?.title}{" "}
            <button
              onClick={() => setShowPrefs(true)}
              className="text-gray-200 underline underline-offset-2 hover:text-white transition-colors cursor-pointer"
            >
              {t?.cookiesetting}
            </button>
          </p>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleConsent("allow")}
              className="flex items-center justify-center text-black cursor-pointer w-full bg-[#05df72] hover:bg-[#05df72] border border-white/8 font-medium py-3 rounded-xl text-[13.5px] transition-colors duration-150 active:scale-[0.98] gap-2"
            >
             {t?.button1}
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
            <button
              onClick={() => handleConsent("deny")}
              className="flex items-center justify-center text-black cursor-pointer w-full bg-[#05df72] hover:bg-[#05df72] border border-white/8 font-medium py-3 rounded-xl text-[13.5px] transition-colors duration-150 active:scale-[0.98] gap-2"
            >
                {t?.button2}
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
