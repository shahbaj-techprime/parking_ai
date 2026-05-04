"use client";

import { useEffect, useRef, useState } from "react";

const problems = [
  {
    num: 1,
    icon: "⏱",
    tag: "TIME LOSS",
    title: "Design Iterations = Project Delay",
    body: "All parking designs are done manually. Move a column? Redesign 20+ bays. Rejected by the authority? Entire design needs to be done again.",
  },
  {
    num: 2,
    icon: "📋",
    tag: "COMPLIANCE",
    title: "NBC Compliance is a Minefield",
    body: "10+ stringent parking standards. Violate one and the civic body rejects the project. Most designs need costly redesigns after submission.",
  },
  {
    num: 3,
    icon: "💸",
    tag: "REVENUE",
    title: "Lost Revenue: Inefficient Designs",
    body: "Manual designs hit only 85–90% capacity. 650 spots instead of 750 = ₹50–₹300 lakh lost revenue on a single project.",
  },
  {
    num: 4,
    icon: "🔀",
    tag: "COORDINATION",
    title: "Structural Coordination Chaos",
    body: "Columns, ramps, lift cores clash with parking layouts. Emails back and forth. No single source of truth. 2-week delay minimum.",
  },
  {
    num: 5,
    icon: "⚠️",
    tag: "LEGAL RISK",
    title: "Compliance Errors & Legal Risk",
    body: "PH bays tandem-placed. Ramp entries too close to aisles. Municipal inspector flags issues after submission — redesign, reschedule.",
  },
];

const W = 520;
const H = 520;
const CX = 260;
const CY = 260;
const R = 190;
const STEP = 360 / problems.length;
const WINDOW = 45;

function getPos(angle, i) {
  const a = ((angle + i * STEP - 90) * Math.PI) / 180;
  return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
}

function degFromTop(angle, i) {
  let d = ((angle + i * STEP) % 360 + 360) % 360;
  if (d > 180) d = 360 - d;
  return d;
}

function getTargetAngle(ti) {
  return (((-ti * STEP) % 360) + 360) % 360;
}

function arcPath() {
  const a1 = ((-90 - WINDOW) * Math.PI) / 180;
  const a2 = ((-90 + WINDOW) * Math.PI) / 180;
  const x1 = CX + R * Math.cos(a1);
  const y1 = CY + R * Math.sin(a1);
  const x2 = CX + R * Math.cos(a2);
  const y2 = CY + R * Math.sin(a2);
  return `M${x1},${y1} A${R},${R} 0 0,1 ${x2},${y2}`;
}

// Classic card matching the screenshot
function ClassicCard({ data, total }) {
  if (!data) return null;
  return (
    <div
      style={{
        position: "relative",
        background: "#0d0d0d",
        border: "1.5px solid #1aff7a",
        borderRadius: 16,
        padding: "28px 28px 20px",
        width: "100%",
        maxWidth: 480,
        overflow: "hidden",
        boxShadow:
          "0 0 0 1px rgba(26,255,122,0.08), inset 0 0 40px rgba(26,255,122,0.03)",
      }}
    >
      {/* Subtle bg pattern */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
          pointerEvents: "none",
        }}
        viewBox="0 0 480 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#1aff7a" strokeWidth="0.5" fill="none">
          <circle cx="420" cy="30" r="20" />
          <circle cx="420" cy="30" r="12" />
          <circle cx="60" cy="160" r="20" />
          <circle cx="60" cy="160" r="12" />
          <circle cx="380" cy="150" r="15" />
          <circle cx="380" cy="150" r="8" />
          <path d="M440 80 L452 68 M440 68 L452 80" />
          <path d="M30 60 L42 48 M30 48 L42 60" />
        </g>
      </svg>

      {/* Badge */}
      <div
        style={{
          display: "inline-block",
          background: "linear-gradient(135deg,#1a2a6c,#2d1b6e)",
          border: "1px solid rgba(100,80,220,0.4)",
          borderRadius: 20,
          padding: "4px 14px",
          fontSize: 12,
          fontWeight: 600,
          color: "#a89fe8",
          letterSpacing: "0.03em",
          marginBottom: 18,
        }}
      >
        Problem #{data.num}
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.25,
          marginBottom: 16,
        }}
      >
        {data.title}
      </div>

      {/* Body */}
      <div
        style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7,
          marginBottom: 24,
        }}
      >
        {data.body}
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: "rgba(255,255,255,0.08)",
          marginBottom: 16,
        }}
      />

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Critical issue */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: "#e05050",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#e05050",
              flexShrink: 0,
            }}
          />
          CRITICAL ISSUE
        </div>

        {/* Pagination dots */}
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              style={{
                width: i === data.num - 1 ? 9 : 7,
                height: 7,
                borderRadius: "50%",
                background:
                  i === data.num - 1
                    ? "#1aff7a"
                    : "rgba(255,255,255,0.15)",
                transition: "background 0.3s, width 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RotatingNodes() {
  const [angle, setAngle] = useState(0);
  const [activeI, setActiveI] = useState(-1);
  const [spinning, setSpinning] = useState(true);

  const angleRef = useRef(0);
  const activeIRef = useRef(-1);
  const rafRef = useRef(null);

  useEffect(() => {
    activeIRef.current = activeI;
  }, [activeI]);

  useEffect(() => {
    if (!spinning) return;
    const loop = () => {
      angleRef.current = (angleRef.current + 0.22) % 360;
      setAngle(angleRef.current);

      let winner = -1;
      problems.forEach((_, i) => {
        if (degFromTop(angleRef.current, i) <= WINDOW) winner = i;
      });

      if (winner !== activeIRef.current) {
        activeIRef.current = winner;
        setActiveI(winner);
      }

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [spinning]);

  const jumpTo = (ti) => {
    const desired = getTargetAngle(ti);
    angleRef.current = desired;
    setAngle(desired);
    activeIRef.current = ti;
    setActiveI(ti);
  };

  const goNext = () => jumpTo((activeIRef.current + 1) % problems.length);
  const goPrev = () =>
    jumpTo((activeIRef.current - 1 + problems.length) % problems.length);
  const toggleSpin = () => setSpinning((s) => !s);

  const nodePositions = problems.map((_, i) => getPos(angle, i));
  const activeData = activeI >= 0 ? problems[activeI] : null;
  const arc = arcPath();

  return (
    <div
      className="flex flex-col items-center py-9 px-5 min-h-screen gap-8"
      style={{ background: "#0a0a0a" }}
    >
      {/* Classic Card */}
      <div
        style={{
          width: "100%",
          maxWidth: W,
          minHeight: 200,
          transition: "opacity 0.25s",
          opacity: activeData ? 1 : 0,
        }}
      >
        <ClassicCard data={activeData} total={problems.length} />
      </div>

      {/* Arena */}
      <div
        className="relative"
        style={{ width: W, height: H, maxWidth: "min(100%, 520px)" }}
      >
        {/* Orbit rings */}
        {[
          { size: 400, alpha: "0.06" },
          { size: 160, alpha: "0.08" },
        ].map(({ size, alpha }) => (
          <div
            key={size}
            className="absolute rounded-full pointer-events-none"
            style={{
              top: "50%",
              left: "50%",
              width: size,
              height: size,
              transform: "translate(-50%,-50%)",
              border: `1px solid rgba(255,255,255,${alpha})`,
            }}
          />
        ))}

        {/* SVG lines + arc */}
        <svg
          className="absolute top-0 left-0 overflow-visible pointer-events-none"
          style={{ width: "100%", height: "100%" }}
        >
          <circle cx={CX} cy={CY - R} r={5} fill="#1aff7a" opacity={0.5} />
          <path
            d={arc}
            fill="none"
            stroke="#1aff7a"
            strokeWidth={1}
            opacity={0.2}
            strokeDasharray="4 3"
          />
          {problems.map((_, i) => {
            const { x, y } = nodePositions[i];
            const on = i === activeI;
            return (
              <g key={i}>
                <line
                  x1={CX} y1={CY} x2={x} y2={y}
                  stroke={on ? "#1aff7a" : "rgba(255,255,255,0.07)"}
                  strokeWidth={on ? 1.5 : 0.5}
                  strokeDasharray={on ? undefined : "6 5"}
                />
                {on && (
                  <circle
                    cx={x} cy={y} r={37}
                    fill="none"
                    stroke="#1aff7a"
                    strokeWidth={0.8}
                    opacity={0.25}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Center */}
        <div
          className="absolute z-10 rounded-full flex flex-col items-center justify-center text-center"
          style={{
            top: "50%", left: "50%",
            width: 140, height: 140,
            transform: "translate(-50%,-50%)",
            background: "#111",
            border: "1px solid rgba(26,255,122,0.15)",
            padding: 12,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 500, color: "#fff", lineHeight: 1.35 }}>
            Manual Parking Design
          </span>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 3, letterSpacing: "0.05em" }}>
            5 problems
          </span>
        </div>

        {/* Nodes */}
        {problems.map((p, i) => {
          const { x, y } = nodePositions[i];
          const on = i === activeI;
          return (
            <div
              key={i}
              className="absolute flex flex-col items-center justify-center rounded-full z-[5]"
              style={{
                width: 66, height: 66,
                left: x - 33, top: y - 33,
                background: on ? "#0d1a10" : "#111",
                border: `1.5px solid ${on ? "#1aff7a" : "rgba(255,255,255,0.1)"}`,
                boxShadow: on ? "0 0 14px rgba(26,255,122,0.2)" : "none",
                transition: "border-color 0.25s, background 0.25s, box-shadow 0.25s",
              }}
            >
              <span style={{ fontSize: 8, fontWeight: 500, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em" }}>
                {String(p.num).padStart(2, "0")}
              </span>
              <span style={{ fontSize: 18, lineHeight: 1.2 }}>{p.icon}</span>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        {[
          { label: "← Prev", onClick: goPrev },
          { label: spinning ? "❚❚ Pause" : "▶ Play", onClick: toggleSpin },
          { label: "Next →", onClick: goNext },
        ].map((btn) => (
          <button
            key={btn.label}
            onClick={btn.onClick}
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.35)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              padding: "5px 14px",
              background: "transparent",
              cursor: "pointer",
              letterSpacing: "0.04em",
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(26,255,122,0.06)";
              e.currentTarget.style.color = "#1aff7a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "rgba(255,255,255,0.35)";
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}