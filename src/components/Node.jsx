"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const features = [
  {
    icon: "🎯",
    title: "Intelligent Space Optimization",
    description:
      "Parking AI absorbs dead space. A 4,900mm column span yields 4 spaces instead of 3. By distributing 900mm intelligently across bays, on a 6-level basement that's 15–45 extra spaces = ₹5–₹45 lakh revenue gain.",
    highlight: "15–45 extra spaces",
    color: "#FF6B35",
  },
  {
    icon: "✓",
    title: "8 Automated Compliance Checks",
    description:
      "Before you see the layout, Parking AI validates turning radius (8.00m NBC), aisle widths, bay dimensions, column clearance, PH bays, fire exits, ramp pitch, and parking targets. One click to auto-fix any issue found.",
    highlight: "Zero compliance risk",
    color: "#00D4AA",
  },
  {
    icon: "📐",
    title: "Native AutoCAD Integration",
    description:
      "Works directly with DXF and DWG files. No redrawing required. Exports contractor-ready CAD with proper layers, color-coding, and annotations. Architects never leave their CAD workflow.",
    highlight: "DXF & DWG native",
    color: "#4A9EFF",
  },
  {
    icon: "🔧",
    title: "Manual Override + Reactive AI",
    description:
      "You're in control. Move a column? AI updates surrounding bays instantly. Swap a bay to 4-wheeler? System re-validates in real time. Full version control with saved edits and unlimited undo.",
    highlight: "Full version control",
    color: "#FFD700",
  },
  {
    icon: "📊",
    title: "Capacity-Driven Reverse Engineering",
    description:
      "Design backward from your parking target. Set your goal (750 spaces), and the engine calculates feasibility. If not achievable, it tells you why and suggests solutions — add a level, expand the ramp.",
    highlight: "Target-first design",
    color: "#FF4D8D",
  },
  {
    icon: "🚴",
    title: "Bike Parking Auto-Integration",
    description:
      "Residual zones auto-classified. If a 2m×2m bike bay fits more efficiently than forcing car parking, the engine auto-converts and flags it for your approval. Zero wasted space.",
    highlight: "Zero wasted space",
    color: "#A855F7",
  },
];

const TOTAL = features.length;
const RADIUS = 260;

function getTriangleVertices(cx, cy, r) {
  return [0, 1, 2].map((i) => {
    const angle = (i * 120 - 90) * (Math.PI / 180);
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
}

export default function ParkingFeatures() {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const nodesRef = useRef([]);
  const triangleRef = useRef(null);
  const rotTween = useRef(null);
  const cx = 300,
    cy = 300,
    nodeR = 260;

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TOTAL);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Sync rotation to active index
  useEffect(() => {
    const targetRot = -(active * 60);
    if (rotTween.current) rotTween.current.kill();
    rotTween.current = gsap.to(triangleRef.current, {
      rotate: targetRot,
      duration: 0.85,
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
      onUpdate: () => {
        const r = gsap.getProperty(triangleRef.current, "rotate");
        setRotation(Number(r));
      },
    });
  }, [active]);

  // Card animation on active change
  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 24, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power2.out" },
    );
  }, [active]);

  // Entry animation
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );
    nodesRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: 0.1 + i * 0.08,
          ease: "back.out(1.7)",
        },
      );
    });
  }, []);

  // Node positions (evenly spaced on circle, rotate with rotation state)
  const nodeAngles = features.map((_, i) => {
    const base = (i * 60 - 90) * (Math.PI / 180);
    const rot = rotation * (Math.PI / 180);
    return {
      x: cx + nodeR * Math.cos(base + rot),
      y: cy + nodeR * Math.sin(base + rot),
    };
  });

  const f = features[active];

  return (
    <section
      style={{
        fontFamily: "'Syne', 'Space Grotesk', sans-serif",
        background: "#060912",
      }}
      className="min-h-screen w-full flex flex-col items-center justify-center py-16 px-4 overflow-hidden"
    >
      {/* Google Font */}
      <style>{`
        // @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');
        .glow-line { filter: drop-shadow(0 0 6px currentColor); }
        .node-pulse::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid currentColor;
          opacity: 0.3;
          animation: pulse-ring 2s infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .tri-glow {
          filter: drop-shadow(0 0 12px rgba(74,158,255,0.35));
        }
      `}</style>

      <div ref={containerRef} className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            style={{
              color: "#4A9EFF",
              letterSpacing: "0.22em",
              fontSize: "0.72rem",
            }}
            className="uppercase font-semibold mb-3 tracking-widest"
          >
            Parking AI Platform
          </p>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            Six Core{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #4A9EFF, #00D4AA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Capabilities
            </span>
          </h2>
          <p
            style={{ color: "#64748b", maxWidth: 480, margin: "12px auto 0" }}
            className="text-sm leading-relaxed"
          >
            Click any node to explore, or watch the system cycle automatically
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* SVG Rotating Triangle */}
          <div
            className="relative flex-shrink-0"
            style={{ width: 600, height: 600 }}
          >
            <svg width="600" height="600" viewBox="0 0 600 600">
              {/* Outer subtle ring */}
              <circle
                cx={cx}
                cy={cy}
                r={nodeR + 12}
                fill="none"
                stroke="#1a2235"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              <circle
                cx={cx}
                cy={cy}
                r={nodeR - 12}
                fill="none"
                stroke="#1a2235"
                strokeWidth="0.5"
              />

              {/* Rotating group */}
              <g
                ref={triangleRef}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              >
            
                {[0, 1, 2].map((i) => {
                  const verts = getTriangleVertices(cx, cy, nodeR - 2);
                  const a = verts[i],
                    b = verts[(i + 1) % 3];
                  return (
                //     <line
                //       key={i}
                //       x1={a.x}
                //       y1={a.y}
                //       x2={b.x}
                //       y2={b.y}
                //       stroke="#1e3a5f"
                //       strokeWidth="1.5"
                //       className="tri-glow"
                //     />
                <></>
                  );
                })}

  
                {/* {(() => {
                  const verts = getTriangleVertices(cx, cy, nodeR * 0.38);
                  const d = `M ${verts[0].x} ${verts[0].y} L ${verts[1].x} ${verts[1].y} L ${verts[2].x} ${verts[2].y} Z`;
                  return (
                    <path d={d} fill="none" stroke="#0f2040" strokeWidth="1" />
                  );
                })()} */}

               
                <circle cx={cx} cy={cy} r="4" fill="#4A9EFF" opacity="0.5" />
              </g>

              {/* Static nodes (not rotating with triangle) */}
              {features.map((feat, i) => {
                const pos = nodeAngles[i];
                const isActive = i === active;
                return (
                  <g
                    key={i}
                    ref={(el) => (nodesRef.current[i] = el)}
                    style={{ cursor: "pointer" }}
                    onClick={() => setActive(i)}
                  >
                    {/* Pulse ring for active */}
                    {isActive && (
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={30}
                        fill="none"
                        stroke={feat.color}
                        strokeWidth="1"
                        opacity="0.25"
                      >
                        <animate
                          attributeName="r"
                          from="28"
                          to="46"
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.3"
                          to="0"
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    {/* Node background */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isActive ? 30 : 24}
                      fill={isActive ? feat.color + "22" : "#0d1829"}
                      stroke={isActive ? feat.color : "#1e3a5f"}
                      strokeWidth={isActive ? 2 : 1}
                      style={{ transition: "all 0.3s ease" }}
                    />

                    {/* Connector line to center */}
                    <line
                      x1={cx}
                      y1={cy}
                      x2={pos.x}
                      y2={pos.y}
                      stroke={isActive ? feat.color : "#1a2744"}
                      strokeWidth={isActive ? 1.5 : 0.8}
                      strokeDasharray={isActive ? "none" : "4 6"}
                      opacity={isActive ? 0.6 : 0.4}
                      style={{ transition: "all 0.3s" }}
                    />

                    {/* Icon text */}
                    <text
                      x={pos.x}
                      y={pos.y + 6}
                      textAnchor="middle"
                      fontSize={isActive ? "18" : "16"}
                      style={{ userSelect: "none" }}
                    >
                      {feat.icon}
                    </text>

                    {/* Index badge */}
                    <text
                      x={pos.x + (isActive ? 22 : 18)}
                      y={pos.y - (isActive ? 18 : 16)}
                      textAnchor="middle"
                      fontSize="9"
                      fill={isActive ? feat.color : "#334155"}
                      fontFamily="'Syne', sans-serif"
                      fontWeight="700"
                      style={{ userSelect: "none" }}
                    >
                      0{i + 1}
                    </text>
                  </g>
                );
              })}

              {/* Center active icon */}
              <text
                x={cx}
                y={cy + 10}
                textAnchor="middle"
                fontSize="26"
                style={{ userSelect: "none" }}
              >
                {f.icon}
              </text>
            </svg>
          </div>

          {/* Feature Card */}
          <div className="flex-1 max-w-md w-full">
            <div
              ref={cardRef}
              style={{
                background: "linear-gradient(145deg, #0d1829, #111c2e)",
                border: `1px solid ${f.color}33`,
                borderRadius: 20,
                padding: "2.2rem",
                boxShadow: `0 0 40px ${f.color}18, 0 20px 60px rgba(0,0,0,0.5)`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* BG accent */}
              <div
                style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${f.color}18 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Number + highlight */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "2.8rem",
                    color: f.color,
                    lineHeight: 1,
                    opacity: 0.25,
                  }}
                >
                  0{active + 1}
                </span>
                <span
                  style={{
                    background: f.color + "22",
                    color: f.color,
                    border: `1px solid ${f.color}55`,
                    borderRadius: 30,
                    padding: "4px 14px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {f.highlight}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "#fff",
                  lineHeight: 1.25,
                  marginBottom: "1rem",
                }}
              >
                {f.icon} {f.title}
              </h3>

              {/* Divider */}
              <div
                style={{
                  height: 2,
                  width: 48,
                  background: `linear-gradient(90deg, ${f.color}, transparent)`,
                  marginBottom: "1rem",
                  borderRadius: 2,
                }}
              />

              {/* Description */}
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.92rem",
                  lineHeight: 1.75,
                }}
              >
                {f.description}
              </p>

              {/* Progress dots */}
              <div className="flex gap-2 mt-6">
                {features.map((feat, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      width: i === active ? 28 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: i === active ? feat.color : "#1e3a5f",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Nav arrows */}
            <div className="flex gap-3 mt-4 justify-end">
              <button
                onClick={() => setActive((p) => (p - 1 + TOTAL) % TOTAL)}
                style={{
                  background: "#0d1829",
                  border: "1px solid #1e3a5f",
                  borderRadius: 10,
                  color: "#64748b",
                  width: 44,
                  height: 44,
                  cursor: "pointer",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = f.color;
                  e.currentTarget.style.color = f.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1e3a5f";
                  e.currentTarget.style.color = "#64748b";
                }}
              >
                ←
              </button>
              <button
                onClick={() => setActive((p) => (p + 1) % TOTAL)}
                style={{
                  background: f.color,
                  border: "none",
                  borderRadius: 10,
                  color: "#000",
                  width: 44,
                  height: 44,
                  cursor: "pointer",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  transition: "all 0.2s",
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
