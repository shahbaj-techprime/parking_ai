'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });

    // GSAP animation for footer columns
    const columns = document.querySelectorAll('.footer-column');
    columns.forEach((column, index) => {
      gsap.fromTo(
        column,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: column,
            start: 'top 90%',
          },
        }
      );
    });
  }, []);

  const footerData = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Why Parking AI', href: '#why' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    company: [
      { label: 'Contact Sales', href: '#contact' },
      { label: 'Support', href: '#support' },
      { label: 'Blog', href: '#blog' },
      { label: 'Case Studies', href: '#case-studies' },
    ],
    resources: [
      { label: 'NBC 2016 Guide', href: '#nbc-guide' },
      { label: 'Video Tutorials', href: '#tutorials' },
      { label: 'Sample DWG Files', href: '#samples' },
      { label: 'Best Practices', href: '#practices' },
    ],
    trustSecurity: [
      { label: 'NBC 2016 Compliant', icon: true },
      { label: 'India-Based Servers', icon: true },
      { label: 'SOC 2 Type II', icon: true },
      { label: '24-Hour Support', icon: true },
    ],
  };

  return (
    <footer className="bg-[#111317] text-white pt-16 pb-8 px-4 border-t-2 border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Product Column */}
          <div className="footer-column" data-aos="fade-up">
            <h3 className="text-[#0092b8] text-lg font-bold mb-6 uppercase tracking-wide">
              Product
            </h3>
            <ul className="space-y-3">
              {footerData.product.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-[#0092b8] text-lg font-bold mb-6 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              {footerData.company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-[#0092b8] text-lg font-bold mb-6 uppercase tracking-wide">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerData.resources.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Security Column */}
          <div className="footer-column" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-[#0092b8] text-lg font-bold mb-6 uppercase tracking-wide">
              Trust & Security
            </h3>
            <ul className="space-y-3">
              {footerData.trustSecurity.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#0092b8] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-400 text-base">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 Parking AI. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-[#0092b8] transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="#terms"
              className="text-gray-400 hover:text-[#0092b8] transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;