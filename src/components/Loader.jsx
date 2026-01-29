"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          gsap.to(".loader", {
            opacity: 0,
            y: -40,
            duration: 0.8,
            ease: "power3.inOut",
            onComplete,
          });

          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loader fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-semibold mb-4">Parking AI</h1>
      <div className="w-64 h-1 bg-gray-700 rounded overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-sm text-gray-400">{progress}%</p>
    </div>
  );
}
