"use client";
import { useState, useEffect, useRef, useCallback } from "react";

// ── Timing ───────────────────────────────────────────────────────────────────
const SCENE_DURATION = 3500; // ms each scene animates
const GAP_BETWEEN    = 600;  // pause before next scene appears
const RESTART_DELAY  = 5000; // 5 sec pause before restart

// ── Car SVG ──────────────────────────────────────────────────────────────────
const CARS = [
  { body:"#f5c518", win:"#444"    },
  { body:"#e63946", win:"#2d2d4e" },
  { body:"#06d6a0", win:"#1b4332" },
  { body:"#9b5de5", win:"#3a0ca3" },
  { body:"#ff9f1c", win:"#5c3d00" },
  { body:"#a8dadc", win:"#457b9d" },
];

function Car({ c, dropped }) {
  return (
    <div style={{
      transition: "transform .85s cubic-bezier(.22,1,.36,1), opacity .6s ease",
      transform:  dropped ? "translateY(0) scale(1)" : "translateY(-90px) scale(.8)",
      opacity:    dropped ? 1 : 0,
    }}>
      <svg width="42" height="72" viewBox="0 0 42 72">
        <ellipse cx="21" cy="68" rx="15" ry="4" fill="rgba(0,0,0,.22)"/>
        <rect x="4"  y="15" width="34" height="48" rx="9"   fill={c.body}/>
        <rect x="7"  y="7"  width="28" height="24" rx="7"   fill={c.body}/>
        <rect x="10" y="9"  width="22" height="14" rx="4"   fill={c.win} opacity=".85"/>
        <rect x="10" y="42" width="22" height="10" rx="3"   fill={c.win} opacity=".7"/>
        <rect x="0"  y="19" width="7"  height="12" rx="3.5" fill="#111"/>
        <rect x="35" y="19" width="7"  height="12" rx="3.5" fill="#111"/>
        <rect x="0"  y="44" width="7"  height="12" rx="3.5" fill="#111"/>
        <rect x="35" y="44" width="7"  height="12" rx="3.5" fill="#111"/>
        <rect x="9"  y="55" width="8"  height="4"  rx="2"   fill="#fff" opacity=".9"/>
        <rect x="25" y="55" width="8"  height="4"  rx="2"   fill="#fff" opacity=".9"/>
      </svg>
    </div>
  );
}

// ── Scene 1 — Upload ─────────────────────────────────────────────────────────
function UploadCard({ tick, visible }) {
  const phase    = tick < 18 ? 0 : tick < 45 ? 1 : tick < 78 ? 2 : 3;
  const progress = phase === 2 ? Math.min(100, ((tick - 45) / 33) * 100) : phase > 2 ? 100 : 0;
  const files    = ["layout_v3.mp4", "parking_data.csv", "site_map.pdf"];
  const done     = phase === 3;

  return (
    <div style={{
      width: "100%",
      background: "rgba(15,23,42,.9)",
      backdropFilter: "blur(24px)",
      border: `1.5px solid ${done ? "rgba(74,222,128,.4)" : "rgba(56,189,248,.25)"}`,
      borderRadius: 20,
      padding: "22px 20px",
      position: "relative",
      overflow: "hidden",
      transition: "border-color .6s ease",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transitionProperty: "opacity, transform",
      transitionDuration: "0.5s",
      transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
    }}>
      {/* Top progress bar */}
      <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"rgba(51,65,85,.5)",borderRadius:"20px 20px 0 0",overflow:"hidden"}}>
        <div style={{height:"100%",width:`${tick}%`,background:"linear-gradient(90deg,#38bdf8,#818cf8)",transition:"width .08s linear"}}/>
      </div>

      {/* Corner glow */}
      <div style={{position:"absolute",top:-40,right:-40,width:140,height:140,borderRadius:"50%",
        background:"radial-gradient(ellipse,rgba(56,189,248,.12) 0%,transparent 70%)",pointerEvents:"none"}}/>

      {/* Header */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:30,height:30,borderRadius:8,background:"rgba(56,189,248,.15)",
            display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          </div>
          <span style={{fontSize:13,fontWeight:600,color:"#e2e8f0",fontFamily:"'DM Sans',sans-serif"}}>Upload Files</span>
        </div>
        {done && (
          <div style={{display:"flex",alignItems:"center",gap:5,background:"rgba(74,222,128,.12)",
            border:"1px solid rgba(74,222,128,.3)",borderRadius:20,padding:"3px 10px"}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:"#4ade80"}}/>
            <span style={{fontSize:11,color:"#4ade80",fontFamily:"'DM Sans',sans-serif",fontWeight:600}}>Complete</span>
          </div>
        )}
      </div>

      {/* Drop zone */}
      <div style={{
        height:90,border:`2px dashed ${phase>=1?"#38bdf8":"#334155"}`,borderRadius:12,
        display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,
        background:phase>=1?"rgba(56,189,248,.06)":"rgba(15,23,42,.4)",
        transition:"all .5s",position:"relative",overflow:"hidden",marginBottom:12,
      }}>
        {phase>=1&&<div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 0%,rgba(56,189,248,.14) 0%,transparent 70%)"}}/>}
        <p style={{margin:0,color:phase>=1?"#38bdf8":"#64748b",fontSize:12,fontFamily:"'DM Sans',sans-serif",
          position:"relative",transition:"color .4s"}}>
          {phase===0?"Drop files here":phase===1?"Release to upload…":phase===2?"Uploading files…":"✓ All files uploaded!"}
        </p>
        {done&&<p style={{margin:0,color:"#4ade80",fontSize:11,fontFamily:"'DM Sans',sans-serif",position:"relative"}}>Ready for AI processing</p>}
      </div>

      {/* Files */}
      {files.map((f,i)=>(
        <div key={f} style={{
          display:"flex",alignItems:"center",gap:9,marginBottom:i<2?7:0,
          background:"rgba(15,23,42,.6)",borderRadius:9,padding:"7px 10px",
          border:"1px solid rgba(51,65,85,.6)",
          opacity:phase>=1?1:0.2,transition:`opacity .5s ease ${i*100}ms`,
        }}>
          <div style={{width:24,height:24,borderRadius:6,background:"rgba(56,189,248,.1)",
            display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
            </svg>
          </div>
          <div style={{flex:1}}>
            <p style={{margin:0,fontSize:11,color:"#e2e8f0",fontFamily:"'DM Sans',sans-serif"}}>{f}</p>
            {i===0&&phase===2&&(
              <div style={{marginTop:3,height:2,borderRadius:2,background:"#1e293b",overflow:"hidden"}}>
                <div style={{height:"100%",width:`${progress}%`,background:"linear-gradient(90deg,#38bdf8,#818cf8)",transition:"width .1s linear"}}/>
              </div>
            )}
          </div>
          {(done||(i===0&&progress>=98))&&(
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Scene 2 — AI ─────────────────────────────────────────────────────────────
function AICard({ tick, visible }) {
  const angle = tick * 4.32;
  const done  = tick > 88;
  const pulse = 1 + Math.sin(tick * 0.18) * 0.04;
  const orbits = [0, 60, 120];
  const steps  = ["Parsing vehicle data", "Optimizing slot allocation", "Generating layout grid"];

  return (
    <div style={{
      width: "100%",
      background: "rgba(15,23,42,.9)",
      backdropFilter: "blur(24px)",
      border: `1.5px solid ${done ? "rgba(74,222,128,.4)" : "rgba(129,140,248,.3)"}`,
      borderRadius: 20,
      padding: "22px 20px",
      position: "relative",
      overflow: "hidden",
      transition: "border-color .6s, opacity .5s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.22,1,.36,1)",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
    }}>
      {/* Top progress */}
      <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"rgba(51,65,85,.5)",borderRadius:"20px 20px 0 0",overflow:"hidden"}}>
        <div style={{height:"100%",width:`${tick}%`,background:"linear-gradient(90deg,#818cf8,#38bdf8)",transition:"width .08s linear"}}/>
      </div>

      <div style={{position:"absolute",top:-40,left:-40,width:140,height:140,borderRadius:"50%",
        background:"radial-gradient(ellipse,rgba(129,140,248,.1) 0%,transparent 70%)",pointerEvents:"none"}}/>

      {/* Header */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:30,height:30,borderRadius:8,background:"rgba(129,140,248,.15)",
            display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
            </svg>
          </div>
          <span style={{fontSize:13,fontWeight:600,color:"#e2e8f0",fontFamily:"'DM Sans',sans-serif"}}>AI Processing</span>
        </div>
        {done && (
          <div style={{display:"flex",alignItems:"center",gap:5,background:"rgba(74,222,128,.12)",
            border:"1px solid rgba(74,222,128,.3)",borderRadius:20,padding:"3px 10px"}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:"#4ade80"}}/>
            <span style={{fontSize:11,color:"#4ade80",fontFamily:"'DM Sans',sans-serif",fontWeight:600}}>Complete</span>
          </div>
        )}
      </div>

      {/* Atom + Steps side by side */}
      <div style={{display:"flex",alignItems:"center",gap:16}}>
        {/* Atom */}
        <div style={{position:"relative",width:110,height:110,flexShrink:0}}>
          <div style={{position:"absolute",inset:-10,borderRadius:"50%",
            background:"radial-gradient(ellipse,rgba(129,140,248,.2) 0%,transparent 70%)",
            transform:`scale(${pulse})`}}/>
          <svg width="110" height="110" viewBox="-55 -55 110 110" style={{position:"absolute",top:0,left:0}}>
            {orbits.map((tilt,i)=>{
              const a=(angle+i*120)*Math.PI/180;
              const x=Math.cos(a)*46, y=Math.sin(a)*23;
              return(
                <g key={i} transform={`rotate(${tilt})`}>
                  <ellipse cx="0" cy="0" rx="46" ry="23" fill="none" stroke="rgba(129,140,248,.4)" strokeWidth="1.5"/>
                  <circle cx={x} cy={y} r="4" fill="#fff"/>
                  <circle cx={x} cy={y} r="6" fill="rgba(255,255,255,.2)"/>
                </g>
              );
            })}
            <circle cx="0" cy="0" r="22" fill="rgba(15,23,42,.95)" stroke="rgba(129,140,248,.5)" strokeWidth="1.5"/>
            <text x="0" y="6" textAnchor="middle" fill="#818cf8" fontSize="15" fontWeight="700" fontFamily="'Space Grotesk',sans-serif">AI</text>
          </svg>
        </div>

        {/* Steps */}
        <div style={{flex:1,display:"flex",flexDirection:"column",gap:8}}>
          <p style={{margin:"0 0 4px",color:done?"#4ade80":"#818cf8",fontSize:12,fontFamily:"'DM Sans',sans-serif",transition:"color .5s"}}>
            {done?"✓ Layout generated!":"Analyzing layout…"}
          </p>
          {!done&&(
            <div style={{display:"flex",gap:4,marginBottom:4}}>
              {[0,1,2].map(i=>(
                <div key={i} style={{width:5,height:5,borderRadius:"50%",background:"#818cf8",
                  animation:`bop 1s ease-in-out ${i*.2}s infinite`}}/>
              ))}
            </div>
          )}
          {steps.map((s,i)=>{
            const sd=done||tick>35+i*20;
            return(
              <div key={s} style={{display:"flex",alignItems:"center",gap:6,
                opacity:tick>10+i*15?1:0,transition:`opacity .5s ease ${i*180}ms`}}>
                <div style={{
                  width:15,height:15,borderRadius:"50%",flexShrink:0,
                  background:sd?"rgba(74,222,128,.15)":"rgba(129,140,248,.15)",
                  border:`1.5px solid ${sd?"#4ade80":"#818cf8"}`,
                  display:"flex",alignItems:"center",justifyContent:"center",
                }}>
                  {sd
                    ?<svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    :<div style={{width:4,height:4,borderRadius:"50%",background:"#818cf8"}}/>}
                </div>
                <span style={{fontSize:10.5,color:sd?"#94a3b8":"#cbd5e1",fontFamily:"'DM Sans',sans-serif"}}>{s}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Scene 3 — Parking ─────────────────────────────────────────────────────────
function ParkingCard({ tick, visible }) {
  const done  = tick > 90;
  const spots = [
    {ci:null},{ci:0},{ci:null},{ci:1},{ci:null},
    {ci:2},{ci:null},{ci:3},{ci:null},{ci:4},
  ];

  return (
    <div style={{
      width: "100%",
      background: "rgba(15,23,42,.9)",
      backdropFilter: "blur(24px)",
      border: `1.5px solid ${done ? "rgba(74,222,128,.4)" : "rgba(74,222,128,.2)"}`,
      borderRadius: 20,
      padding: "22px 20px",
      position: "relative",
      overflow: "hidden",
      transition: "border-color .6s, opacity .5s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.22,1,.36,1)",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
    }}>
      {/* Top progress */}
      <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"rgba(51,65,85,.5)",borderRadius:"20px 20px 0 0",overflow:"hidden"}}>
        <div style={{height:"100%",width:`${tick}%`,background:"linear-gradient(90deg,#4ade80,#38bdf8)",transition:"width .08s linear"}}/>
      </div>

      <div style={{position:"absolute",bottom:-40,right:-40,width:140,height:140,borderRadius:"50%",
        background:"radial-gradient(ellipse,rgba(74,222,128,.09) 0%,transparent 70%)",pointerEvents:"none"}}/>

      {/* Header */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:30,height:30,borderRadius:8,background:"rgba(74,222,128,.12)",
            display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <span style={{fontSize:13,fontWeight:600,color:"#e2e8f0",fontFamily:"'DM Sans',sans-serif"}}>Parking Layout</span>
        </div>
        {done && (
          <div style={{display:"flex",alignItems:"center",gap:5,background:"rgba(74,222,128,.12)",
            border:"1px solid rgba(74,222,128,.3)",borderRadius:20,padding:"3px 10px"}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:"#4ade80"}}/>
            <span style={{fontSize:11,color:"#4ade80",fontFamily:"'DM Sans',sans-serif",fontWeight:600}}>Complete</span>
          </div>
        )}
      </div>

      {/* Legend */}
      <div style={{display:"flex",gap:14,marginBottom:10}}>
        {[["#4ade80","Available"],["#f87171","Occupied"]].map(([c,l])=>(
          <div key={l} style={{display:"flex",alignItems:"center",gap:4}}>
            <div style={{width:8,height:8,borderRadius:2,background:c}}/>
            <span style={{fontSize:10,color:"#94a3b8",fontFamily:"'DM Sans',sans-serif"}}>{l}</span>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:5,
        background:"#1e293b",borderRadius:12,padding:8,
        border:"1px solid rgba(51,65,85,.7)",marginBottom:12,
      }}>
        {spots.map((sp,i)=>{
          const occ=sp.ci!==null;
          const dropped=occ&&tick>6+i*8;
          return(
            <div key={i} style={{
              aspectRatio:"0.6",
              background:occ?"rgba(248,113,113,.08)":"rgba(74,222,128,.08)",
              border:`1.5px solid ${occ?"rgba(248,113,113,.3)":"rgba(74,222,128,.3)"}`,
              borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",
              position:"relative",overflow:"hidden",
            }}>
              <span style={{position:"absolute",top:3,left:4,fontSize:7.5,
                color:occ?"rgba(248,113,113,.7)":"rgba(74,222,128,.7)",
                fontFamily:"'DM Mono',monospace",fontWeight:600}}>
                {String(i+1).padStart(2,"0")}
              </span>
              {occ&&<Car c={CARS[sp.ci%CARS.length]} dropped={dropped}/>}
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div style={{display:"flex",background:"rgba(15,23,42,.7)",borderRadius:9,overflow:"hidden",
        border:"1px solid rgba(51,65,85,.4)"}}>
        {[["10","Total"],["5","Occupied"],["5","Free"],["50%","Fill"]].map(([v,l],i)=>(
          <div key={l} style={{flex:1,textAlign:"center",padding:"7px 2px",
            borderRight:i<3?"1px solid rgba(51,65,85,.4)":"none"}}>
            <p style={{margin:0,fontSize:13,color:"#e2e8f0",fontWeight:700,fontFamily:"'Space Grotesk',sans-serif"}}>{v}</p>
            <p style={{margin:0,fontSize:9,color:"#64748b",fontFamily:"'DM Sans',sans-serif"}}>{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Countdown ring ────────────────────────────────────────────────────────────
function CountdownRing({ seconds }) {
  const r   = 22;
  const circ= 2 * Math.PI * r;
  const pct = seconds / (RESTART_DELAY / 1000);
  return (
    <div style={{display:"flex",alignItems:"center",gap:8}}>
      <svg width="54" height="54" style={{transform:"rotate(-90deg)"}}>
        <circle cx="27" cy="27" r={r} fill="none" stroke="rgba(51,65,85,.5)" strokeWidth="3"/>
        <circle cx="27" cy="27" r={r} fill="none" stroke="#38bdf8" strokeWidth="3"
          strokeDasharray={circ} strokeDashoffset={circ*(1-pct)}
          style={{transition:"stroke-dashoffset 1s linear"}}/>
        <text x="27" y="27" textAnchor="middle" dominantBaseline="middle"
          fill="#38bdf8" fontSize="13" fontWeight="700" fontFamily="'DM Mono',monospace"
          style={{transform:"rotate(90deg)",transformOrigin:"27px 27px"}}>
          {seconds}
        </text>
      </svg>
      <div>
        <p style={{margin:0,fontSize:13,fontWeight:600,color:"#e2e8f0",fontFamily:"'DM Sans',sans-serif"}}>All Done!</p>
        <p style={{margin:0,fontSize:11,color:"#64748b",fontFamily:"'DM Sans',sans-serif"}}>Restarting in {seconds}s…</p>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

export default function NewAnimation() {
  // Which cards are visible
  const [show1, setShow1]       = useState(false);
  const [show2, setShow2]       = useState(false);
  const [show3, setShow3]       = useState(false);

  // Per-card tick 0→100
  const [tick1, setTick1]       = useState(0);
  const [tick2, setTick2]       = useState(0);
  const [tick3, setTick3]       = useState(0);

  // Countdown state
  const [countdown, setCountdown] = useState(null); // null | number

  const rafRef  = useRef(null);
  const stopRef = useRef(false);

  const animateTick = useCallback((setter, duration) => {
    return new Promise(resolve => {
      let start = null;
      const step = ts => {
        if (stopRef.current) return;
        if (!start) start = ts;
        const t = Math.min(((ts - start) / duration) * 100, 100);
        setter(t);
        if (t < 100) rafRef.current = requestAnimationFrame(step);
        else resolve();
      };
      rafRef.current = requestAnimationFrame(step);
    });
  }, []);

  useEffect(() => {
    stopRef.current = false;

    const run = async () => {
      while (!stopRef.current) {
        // ── Reset ──
        setShow1(false); setShow2(false); setShow3(false);
        setTick1(0);     setTick2(0);     setTick3(0);
        setCountdown(null);
        await delay(300);

        // ── Card 1 appears & animates ──
        setShow1(true);
        await animateTick(setTick1, SCENE_DURATION);
        if (stopRef.current) return;
        await delay(GAP_BETWEEN);

        // ── Card 2 appears & animates (card 1 stays) ──
        setShow2(true);
        await animateTick(setTick2, SCENE_DURATION);
        if (stopRef.current) return;
        await delay(GAP_BETWEEN);

        // ── Card 3 appears & animates (1 & 2 stay) ──
        setShow3(true);
        await animateTick(setTick3, SCENE_DURATION);
        if (stopRef.current) return;

        // ── Countdown 5→0 ──
        for (let s = Math.round(RESTART_DELAY / 1000); s >= 1; s--) {
          setCountdown(s);
          await delay(1000);
          if (stopRef.current) return;
        }
        setCountdown(null);
        await delay(200);
      }
    };

    run();
    return () => {
      stopRef.current = true;
      cancelAnimationFrame(rafRef.current);
    };
  }, [animateTick]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#020817 0%,#0c1526 60%,#080d1a 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 16px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Space+Grotesk:wght@600;700&family=DM+Mono:wght@500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes bop { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:none} }
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position:  400px 0; }
        }
      `}</style>

      {/* Title */}
      <div style={{textAlign:"center",marginBottom:32,animation:"fadeDown .7s ease both"}}>
        <p style={{fontSize:10,letterSpacing:4,color:"#38bdf8",textTransform:"uppercase",
          fontFamily:"'DM Mono',monospace",marginBottom:7}}>Smart Parking System</p>
        <h1 style={{fontSize:26,fontWeight:700,fontFamily:"'Space Grotesk',sans-serif",
          color:"#f1f5f9",letterSpacing:"-.5px"}}>
          AI-Powered Layout Generator
        </h1>
      </div>

      {/* Cards column — max width 460, stack vertically */}
      <div style={{
        width: "100%",
        maxWidth: 460,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}>
        {/* Always reserve space for card 1 */}
        <div style={{
          minHeight: show1 ? undefined : 0,
          overflow: "hidden",
          transition: "min-height .4s",
        }}>
          <UploadCard  tick={tick1} visible={show1} />
        </div>

        {show2 && <AICard      tick={tick2} visible={show2} />}
        {show3 && <ParkingCard tick={tick3} visible={show3} />}
      </div>

      {/* Countdown */}
      <div style={{
        marginTop: 24,
        minHeight: 54,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity .4s",
        opacity: countdown !== null ? 1 : 0,
      }}>
        {countdown !== null && <CountdownRing seconds={countdown} />}
      </div>

      {/* Footer dot */}
      {countdown === null && (
        <div style={{marginTop:8,display:"flex",alignItems:"center",gap:6}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:"#38bdf8",
            boxShadow:"0 0 8px #38bdf8",animation:"bop 1.8s ease-in-out infinite"}}/>
          <span style={{fontSize:11,color:"#475569",fontFamily:"'DM Sans',sans-serif"}}>
            {!show1 ? "Starting…" : !show2 ? "Step 1 running…" : !show3 ? "Step 2 running…" : "Step 3 running…"}
          </span>
        </div>
      )}
    </div>
  );
}