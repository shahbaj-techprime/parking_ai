"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/app/translations/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const DemoBookingSection = () => {
  // const roleOptions = [
  //   "Select your role",
  //   "Architect",
  //   "Developer",
  //   "Project Manager",
  //   "Urban Planner",
  //   "Real Estate Professional",
  //   "Other",
  // ];

  // const timelineOptions = [
  //   "When do you need parking design?",
  //   "Immediately",
  //   "Within 1 week",
  //   "Within 1 month",
  //   "Within 3 months",
  //   "Just exploring",
  // ];
  const { t } = useLanguage();
  const timelineOptions = t.timelineOptions || [];
  const roleOptions = t.roleOptions || [];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    role: "",
    timeline: "",
    projectDetails: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          ".demo-form-container",
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".demo-form-container",
              start: "top 80%",
            },
          },
        );

        gsap.utils.toArray(".form-field").forEach((field, i) => {
          gsap.fromTo(
            field,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: 0.2 + i * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: field,
                start: "top 90%",
              },
            },
          );
        });
      });

      return () => mm.revert();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://pioneverse.com/parkingai/contactus/leads.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Thank you! Our team will contact you shortly.");
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          role: "",
          timeline: "",
          projectDetails: "",
        });
      } else {
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%232a2f2e' stroke-width='0.5' fill='none' opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' /%3E%3Ccircle cx='90' cy='30' r='6' /%3E%3Cpath d='M10 90 Q20 80 30 90 T50 90' /%3E%3Cpath d='M70 70 l15 -10 l5 20 z' /%3E%3Cpath d='M40 40 l10 -10 l10 10 l-10 10 z' /%3E%3Cpath d='M80 95 l10 10' /%3E%3Cpath d='M95 60 a8 8 0 0 1 -16 0 a8 8 0 0 1 16 0' /%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "120px 120px",
      }}
      className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden "
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0092b8]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0092b8]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">{t?.contacttitle}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">{t?.contactdec}</p>
        </div>

        {/* Form */}
        <div className="demo-form-container max-w-5xl mx-auto">
          <div className="border-2 border-[#05df72] rounded-3xl p-6 md:p-12 shadow-2xl hover:border-[#05df72]/50 transition-all">
            <h3 className="text-3xl font-bold text-center mb-10">
            {t?.demo}
            </h3>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Full Name */}
              <div className="form-field">
                <label className="block text-sm mb-2">
                 {t?.name}<span className="text-[#05df72]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder={t?.nameplaceholder}
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black border-2 rounded-lg transition-all
                    ${
                      focusedField === "fullName"
                        ? "border-[#0092b8] shadow-[0_0_15px_rgba(0,146,184,0.3)]"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                />
              </div>

              {/* Email */}
              <div className="form-field">
                <label className="block text-sm mb-2">
                  {t?.email} <span className="text-[#05df72]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t?.emailplaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black border-2 rounded-lg transition-all
                    ${
                      focusedField === "email"
                        ? "border-[#0092b8] shadow-[0_0_15px_rgba(0,146,184,0.3)]"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                />
              </div>

              {/* Company */}
              <div className="form-field">
                <label className="block text-sm mb-2">
                  {t?.company} <span className="text-[#05df72]">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  placeholder={t?.companyplaceholder}
                  value={formData.companyName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("companyName")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black border-2 rounded-lg transition-all
                    ${
                      focusedField === "companyName"
                        ? "border-[#0092b8] shadow-[0_0_15px_rgba(0,146,184,0.3)]"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                />
              </div>

              {/* Role */}
              <div className="form-field">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t?.role} <span className="text-[#05df72]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("role")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 sm:py-3 bg-black border-2 rounded-lg focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${
                      focusedField === "role"
                        ? "border-[#0092b8] shadow-[0_0_15px_rgba(0,146,184,0.3)]"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    {roleOptions.map((option, index) => (
                      <option key={index} value={option} disabled={index === 0}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="form-field md:col-span-2">
                <label className="block text-sm mb-2">
                  {t?.timeline} <span className="text-[#05df72]">*</span>
                </label>
                <select
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-lg"
                >
                  {timelineOptions.map((o, i) => (
                    <option key={i} value={o} disabled={i === 0}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Details */}
              <div className="form-field md:col-span-2">
                <label className="block text-sm mb-2">
                  {t.projectdetails}
                </label>
                <textarea
                  name="projectDetails"
                  rows="5"
                  placeholder={t.projectdetailsplaceholder}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("projectDetails")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-4 bg-black border-2 rounded-xl resize-none transition-all transform
                    ${
                      focusedField === "projectDetails"
                        ? "border-[#0092b8] scale-[1.01] shadow-[0_0_25px_rgba(0,146,184,0.35)]"
                        : "border-gray-700 hover:border-gray-600 hover:scale-[1.01]"
                    }`}
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="text-black submit-button w-full bg-[#05df72] py-4 rounded-lg font-semibold 
  hover:bg-[#05df72] transition-all shadow-lg hover:shadow-[0_0_25px_rgba(0,146,184,0.5)]
  flex items-center justify-center gap-2 group"
                >
                 {loading ? t?.submit : t?.book}

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
                {message && (
                  <p className="text-center text-sm mt-4">{message}</p>
                )}
                <p className="text-center text-sm text-gray-400 mt-4">
                {t?.wefollowup}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBookingSection;
