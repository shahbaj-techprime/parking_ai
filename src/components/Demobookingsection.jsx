'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DemoBookingSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    role: '',
    timeline: '',
    projectDetails: '',
  });

  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    // GSAP animations for form container
    gsap.fromTo(
      '.demo-form-container',
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.demo-form-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate form fields
    const fields = document.querySelectorAll('.form-field');
    fields.forEach((field, index) => {
      gsap.fromTo(
        field,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.3 + index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: field,
            start: 'top 90%',
          },
        }
      );
    });

    // Button hover animation
    const button = document.querySelector('.submit-button');
    if (button) {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const roleOptions = [
    'Select your role',
    'Architect',
    'Developer',
    'Project Manager',
    'Urban Planner',
    'Real Estate Professional',
    'Other',
  ];

  const timelineOptions = [
    'When do you need parking design?',
    'Immediately',
    'Within 1 week',
    'Within 1 month',
    'Within 3 months',
    'Just exploring',
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0092b8]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0092b8]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Ready to Transform Your Parking Design?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Book a demo to see Parking AI in action (5 minutes). Or start a free 15-day trial immediately.
          </p>
        </div>

        {/* Form Container */}
        <div className="demo-form-container max-w-2xl mx-auto">
          <div className=" border-2 border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-[#0092b8]/50 transition-all duration-500">
            {/* Form Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center" data-aos="fade-up">
              Schedule Your Demo
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="form-field">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name <span className="text-[#0092b8]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                    focusedField === 'fullName'
                      ? 'border-[#0092b8] shadow-[0_0_15px_rgba(0,146,184,0.3)]'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Address */}
              <div className="form-field">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address <span className="text-[#0092b8]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                    focusedField === 'email'
                      ? 'border-[#0092b8] shadow-[0_0_15px_rgba(0,146,184,0.3)]'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Company Name */}
              <div className="form-field">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name <span className="text-[#0092b8]">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('companyName')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                    focusedField === 'companyName'
                      ? 'border-[#0092b8] shadow-[0_0_15px_rgba(0,146,184,0.3)]'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  placeholder="Your company name"
                />
              </div>

              {/* Your Role */}
              <div className="form-field">
                <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Role <span className="text-[#0092b8]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('role')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-black border-2 rounded-lg focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${
                      focusedField === 'role'
                        ? 'border-[#0092b8] shadow-[0_0_15px_rgba(0,146,184,0.3)]'
                        : 'border-gray-700 hover:border-gray-600'
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

              {/* Project Timeline */}
              <div className="form-field">
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Timeline <span className="text-[#0092b8]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('timeline')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-black border-2 rounded-lg focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${
                      focusedField === 'timeline'
                        ? 'border-[#0092b8] shadow-[0_0_15px_rgba(0,146,184,0.3)]'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    {timelineOptions.map((option, index) => (
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

              {/* Project Details */}
              <div className="form-field">
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details <span className="text-gray-500">(Optional)</span>
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows="4"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('projectDetails')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black border-2 rounded-lg focus:outline-none transition-all duration-300 resize-none ${
                    focusedField === 'projectDetails'
                      ? 'border-[#0092b8] shadow-[0_0_15px_rgba(0,146,184,0.3)]'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  placeholder="Tell us about your parking needs..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-button w-full bg-[#0092b8] text-white font-semibold py-4 rounded-lg hover:bg-[#007a9a] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,146,184,0.5)] relative overflow-hidden group"
              >
                <span className="relative z-10">Book Demo (Free)</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              {/* Footer Text */}
              <p className="text-center text-sm text-gray-400 mt-4" data-aos="fade-up" data-aos-delay="400">
                We'll follow up within 2 hours during business hours.
              </p>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm" data-aos="fade-up" data-aos-delay="500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0092b8]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0092b8]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>5-minute demo</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0092b8]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              <span>Instant support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBookingSection;