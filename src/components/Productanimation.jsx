"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const SCENE_DURATION = 4000;
const TRANSITION_MS  = 500;
const PAUSE_AFTER_ALL = 1500;

const CARS = [
  { body:"#f5c518", win:"#555"    },
  { body:"#e63946", win:"#2d2d4e" },
  { body:"#06d6a0", win:"#1b4332" },
  { body:"#9b5de5", win:"#3a0ca3" },
  { body:"#ff9f1c", win:"#5c3d00" },
  { body:"#a8dadc", win:"#457b9d" },
];

function Car({ c, dropped }) {
  return (
    <div style={{
      transition:"transform .8s cubic-bezier(.22,1,.36,1),opacity .6s ease",
      transform: dropped?"translateY(0) scale(1)":"translateY(-80px) scale(.85)",
      opacity: dropped?1:0,
    }}>
      <svg width="44" height="76" viewBox="0 0 44 76">
        <ellipse cx="22" cy="71" rx="16" ry="4" fill="rgba(0,0,0,.2)"/>
        <rect x="4"  y="16" width="36" height="50" rx="9"   fill={c.body}/>
        <rect x="8"  y="8"  width="28" height="24" rx="7"   fill={c.body}/>
        <rect x="10" y="10" width="24" height="14" rx="4"   fill={c.win} opacity=".85"/>
        <rect x="10" y="44" width="24" height="10" rx="3"   fill={c.win} opacity=".7"/>
        <rect x="0"  y="20" width="7"  height="12" rx="3.5" fill="#1a1a1a"/>
        <rect x="37" y="20" width="7"  height="12" rx="3.5" fill="#1a1a1a"/>
        <rect x="0"  y="46" width="7"  height="12" rx="3.5" fill="#1a1a1a"/>
        <rect x="37" y="46" width="7"  height="12" rx="3.5" fill="#1a1a1a"/>
        <rect x="9"  y="58" width="9"  height="4"  rx="2"   fill="#fff" opacity=".9"/>
        <rect x="26" y="58" width="9"  height="4"  rx="2"   fill="#fff" opacity=".9"/>
      </svg>
    </div>
  );
}

/* ── Scene 1: Upload ─────────────────────────────────────────────── */
function UploadScene({ tick }) {
  const phase    = tick < 20 ? 0 : tick < 50 ? 1 : tick < 80 ? 2 : 3;
  const progress = phase===2 ? Math.min(100,((tick-50)/30)*100) : phase>2?100:0;
  const files    = ["layout_v3.mp4","parking_data.csv","site_map.pdf"];

  return (
    <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:14,width:"100%" }}>
      <div style={{
        width:"100%",height:130,
        border:`2px dashed ${phase>=1?"#38bdf8":"#334155"}`,borderRadius:16,
        display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,
        background: phase>=1?"rgba(56,189,248,.07)":"rgba(15,23,42,.5)",
        transition:"all .5s",position:"relative",overflow:"hidden",
      }}>
        {phase>=1&&<div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 0%,rgba(56,189,248,.16) 0%,transparent 70%)"}}/>}
        <div style={{
          width:42,height:42,borderRadius:11,
          background:phase>=1?"rgba(56,189,248,.18)":"rgba(51,65,85,.5)",
          display:"flex",alignItems:"center",justifyContent:"center",
          transform:phase===1?"scale(1.12)":"scale(1)",transition:"all .4s",
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={phase>=1?"#38bdf8":"#64748b"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
        </div>
        <p style={{margin:0,color:phase>=1?"#38bdf8":"#64748b",fontSize:12,fontFamily:"'DM Sans',sans-serif",transition:"color .4s",position:"relative"}}>
          {phase===0?"Drop files here":phase===1?"Release to upload…":phase===2?"Uploading…":"✓ Upload complete!"}
        </p>
        {phase===3&&<p style={{margin:0,color:"#4ade80",fontSize:11,fontFamily:"'DM Sans',sans-serif",position:"relative"}}>Ready for AI</p>}
      </div>
      {files.map((f,i)=>(
        <div key={f} style={{
          display:"flex",alignItems:"center",gap:9,width:"100%",
          background:"rgba(15,23,42,.7)",borderRadius:9,padding:"8px 11px",
          border:"1px solid rgba(51,65,85,.7)",
          opacity:phase>=1?1:0.25,transition:`opacity .5s ease ${i*100}ms`,
        }}>
          <div style={{width:26,height:26,borderRadius:6,background:"rgba(56,189,248,.12)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
            </svg>
          </div>
          <div style={{flex:1}}>
            <p style={{margin:0,fontSize:12,color:"#e2e8f0",fontFamily:"'DM Sans',sans-serif"}}>{f}</p>
            {i===0&&phase===2&&(
              <div style={{marginTop:4,height:2,borderRadius:2,background:"#1e293b",overflow:"hidden"}}>
                <div style={{height:"100%",width:`${progress}%`,background:"linear-gradient(90deg,#38bdf8,#818cf8)",transition:"width .1s linear"}}/>
              </div>
            )}
          </div>
          {(phase===3||(i===0&&progress>=98))&&(
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Scene 2: AI ─────────────────────────────────────────────────── */
function AIScene({ tick }) {
  const angle = tick * 4.32;
  const done  = tick > 85;
  const pulse = 1 + Math.sin(tick * 0.18) * 0.04;
  const orbits= [0,60,120];
  const steps = ["Parsing vehicle data","Optimizing slot allocation","Generating layout grid"];

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:16}}>
      <div style={{position:"relative",width:160,height:160}}>
        <div style={{position:"absolute",inset:-20,borderRadius:"50%",
          background:"radial-gradient(ellipse,rgba(56,189,248,.22) 0%,transparent 70%)",
          transform:`scale(${pulse})`}}/>
        <svg width="160" height="160" viewBox="-80 -80 160 160" style={{position:"absolute",top:0,left:0}}>
          {orbits.map((tilt,i)=>{
            const a=(angle+i*120)*Math.PI/180;
            const x=Math.cos(a)*68, y=Math.sin(a)*34;
            return(
              <g key={i} transform={`rotate(${tilt})`}>
                <ellipse cx="0" cy="0" rx="68" ry="34" fill="none" stroke="rgba(56,189,248,.35)" strokeWidth="1.5"/>
                <circle cx={x} cy={y} r="4.5" fill="#fff"/>
                <circle cx={x} cy={y} r="7"   fill="rgba(255,255,255,.18)"/>
              </g>
            );
          })}
          <circle cx="0" cy="0" r="30" fill="rgba(15,23,42,.95)" stroke="rgba(56,189,248,.5)" strokeWidth="1.5"/>
          <text x="0" y="7" textAnchor="middle" fill="#38bdf8" fontSize="20" fontWeight="700" fontFamily="'Space Grotesk',sans-serif">AI</text>
        </svg>
      </div>

      <p style={{margin:0,color:done?"#4ade80":"#38bdf8",fontSize:13,fontFamily:"'DM Sans',sans-serif",transition:"color .5s"}}>
        {done?"✓ Layout generated!":"Analyzing parking layout…"}
      </p>
      {!done&&(
        <div style={{display:"flex",gap:5}}>
          {[0,1,2].map(i=>(
            <div key={i} style={{width:6,height:6,borderRadius:"50%",background:"#38bdf8",
              animation:`bop 1s ease-in-out ${i*0.2}s infinite`}}/>
          ))}
        </div>
      )}

      {steps.map((s,i)=>{
        const sd=done||tick>35+i*20;
        return(
          <div key={s} style={{display:"flex",alignItems:"center",gap:7,width:"100%",
            opacity:tick>10+i*15?1:0,transition:`opacity .5s ease ${i*200}ms`}}>
            <div style={{
              width:16,height:16,borderRadius:"50%",flexShrink:0,
              background:sd?"rgba(74,222,128,.18)":"rgba(56,189,248,.18)",
              border:`1.5px solid ${sd?"#4ade80":"#38bdf8"}`,
              display:"flex",alignItems:"center",justifyContent:"center",
            }}>
              {sd
                ?<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                :<div style={{width:4,height:4,borderRadius:"50%",background:"#38bdf8"}}/>}
            </div>
            <span style={{fontSize:11,color:sd?"#94a3b8":"#cbd5e1",fontFamily:"'DM Sans',sans-serif"}}>{s}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ── Scene 3: Parking ────────────────────────────────────────────── */
function ParkingScene({ tick }) {
  const spots=[
    {ci:null},{ci:0},{ci:null},{ci:1},{ci:null},
    {ci:2},{ci:null},{ci:3},{ci:null},{ci:4},
  ];
  return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:12}}>
      <div style={{display:"flex",gap:14,alignItems:"center"}}>
        {[["#4ade80","Available (5)"],["#f87171","Occupied (5)"]].map(([c,l])=>(
          <div key={l} style={{display:"flex",alignItems:"center",gap:5}}>
            <div style={{width:9,height:9,borderRadius:2,background:c}}/>
            <span style={{fontSize:10,color:"#94a3b8",fontFamily:"'DM Sans',sans-serif"}}>{l}</span>
          </div>
        ))}
      </div>
      <div style={{
        display:"grid",gridTemplateColumns:"repeat(5,54px)",gridTemplateRows:"repeat(2,86px)",
        gap:5,padding:10,background:"#1e293b",borderRadius:14,
        border:"1px solid rgba(51,65,85,.8)",
      }}>
        {spots.map((sp,i)=>{
          const occ=sp.ci!==null;
          const dropped=occ&&tick>5+i*7;
          return(
            <div key={i} style={{
              width:54,height:86,
              background:occ?"rgba(248,113,113,.08)":"rgba(74,222,128,.08)",
              border:`1.5px solid ${occ?"rgba(248,113,113,.35)":"rgba(74,222,128,.35)"}`,
              borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",
              position:"relative",overflow:"hidden",
            }}>
              <span style={{position:"absolute",top:3,left:5,fontSize:8,
                color:occ?"rgba(248,113,113,.7)":"rgba(74,222,128,.7)",
                fontFamily:"'DM Mono',monospace",fontWeight:600}}>
                {String(i+1).padStart(2,"0")}
              </span>
              {occ&&<Car c={CARS[sp.ci%CARS.length]} dropped={dropped}/>}
            </div>
          );
        })}
      </div>
      <div style={{
        display:"flex",width:"100%",
        background:"rgba(15,23,42,.8)",borderRadius:10,overflow:"hidden",
        border:"1px solid rgba(51,65,85,.5)",
      }}>
        {[["10","Total"],["5","Occupied"],["5","Free"],["50%","Fill"]].map(([v,l],i)=>(
          <div key={l} style={{flex:1,textAlign:"center",padding:"8px 2px",
            borderRight:i<3?"1px solid rgba(51,65,85,.4)":"none"}}>
            <p style={{margin:0,fontSize:14,color:"#e2e8f0",fontWeight:700,fontFamily:"'Space Grotesk',sans-serif"}}>{v}</p>
            <p style={{margin:0,fontSize:9,color:"#64748b",fontFamily:"'DM Sans',sans-serif"}}>{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Root ────────────────────────────────────────────────────────── */
function delay(ms){ return new Promise(r=>setTimeout(r,ms)); }

export default function ProductAnimations() {
  const [scene,    setScene]    = useState(0);
  const [tick,     setTick]     = useState(0);
  const [showAll,  setShowAll]  = useState(false);
  const [allTick,  setAllTick]  = useState(0);
  const [fading,   setFading]   = useState(false);
  const [cycle,    setCycle]    = useState(0);
  const rafRef  = useRef(null);
  const stopRef = useRef(false);

  const animateTick = useCallback((setter, duration, onDone) => {
    let start = null;
    const step = (ts) => {
      if (stopRef.current) return;
      if (!start) start = ts;
      const t = Math.min(((ts-start)/duration)*100, 100);
      setter(t);
      if (t < 100) rafRef.current = requestAnimationFrame(step);
      else onDone?.();
    };
    rafRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    stopRef.current = false;

    const run = async () => {
      while (!stopRef.current) {
        setCycle(c => c+1);
        setShowAll(false);

        // — Scene 1 —
        setScene(0); setTick(0); setFading(false);
        await new Promise(res => animateTick(setTick, SCENE_DURATION, res));
        if (stopRef.current) return;
        await delay(200);

        // — Scene 2 —
        setFading(true); await delay(TRANSITION_MS);
        setScene(1); setTick(0); setFading(false);
        await new Promise(res => animateTick(setTick, SCENE_DURATION, res));
        if (stopRef.current) return;
        await delay(200);

        // — Scene 3 —
        setFading(true); await delay(TRANSITION_MS);
        setScene(2); setTick(0); setFading(false);
        await new Promise(res => animateTick(setTick, SCENE_DURATION, res));
        if (stopRef.current) return;
        await delay(400);

        // — All Together —
        setFading(true); await delay(TRANSITION_MS);
        setShowAll(true); setAllTick(0); setFading(false);
        await new Promise(res => animateTick(setAllTick, SCENE_DURATION, res));
        if (stopRef.current) return;

        await delay(PAUSE_AFTER_ALL);
        setFading(true); await delay(TRANSITION_MS);
        setFading(false);
      }
    };

    run();
    return () => {
      stopRef.current = true;
      cancelAnimationFrame(rafRef.current);
    };
  }, [animateTick]);

  const LABELS = ["Upload Files","AI Processing","Parking Layout"];

  return (
    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(135deg,#020817 0%,#0f172a 55%,#080d1a 100%)",
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
      padding:"28px 16px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Space+Grotesk:wght@600;700&family=DM+Mono:wght@500&display=swap');
        *{box-sizing:border-box}
        @keyframes bop{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,.4)}50%{box-shadow:0 0 0 6px rgba(74,222,128,0)}}
      `}</style>

      {/* Title */}
      <div style={{textAlign:"center",marginBottom:28,animation:"fadeUp .7s ease both"}}>
        <p style={{fontSize:10,letterSpacing:4,color:"#38bdf8",textTransform:"uppercase",
          fontFamily:"'DM Mono',monospace",marginBottom:6}}>Smart Parking System</p>
        <h1 style={{fontSize:24,fontWeight:700,fontFamily:"'Space Grotesk',sans-serif",
          color:"#f1f5f9",letterSpacing:"-.5px",margin:0}}>
          AI-Powered Layout Generator
        </h1>
      </div>

      {/* Step bar */}
      <div style={{display:"flex",alignItems:"center",marginBottom:28}}>
        {LABELS.map((l,i)=>{
          const active = showAll || scene===i;
          const done   = !showAll && scene>i;
          return(
            <div key={l} style={{display:"flex",alignItems:"center"}}>
              <div style={{
                display:"flex",alignItems:"center",gap:6,padding:"6px 13px",borderRadius:24,
                background:active?"rgba(56,189,248,.13)":"transparent",
                border:`1px solid ${active?"#38bdf8":"rgba(51,65,85,.5)"}`,
                transition:"all .4s",
              }}>
                <div style={{
                  width:20,height:20,borderRadius:"50%",
                  background: showAll?"#38bdf8": done?"#4ade80": active?"#38bdf8":"rgba(51,65,85,.7)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:10,fontWeight:700,
                  color:active||done?"#0f172a":"#64748b",
                  transition:"all .4s",
                  animation: showAll?"pulse 2s infinite":undefined,
                }}>
                  {done&&!showAll?"✓":i+1}
                </div>
                <span style={{fontSize:11,color:active?"#e2e8f0":"#64748b",
                  fontWeight:active?600:400,fontFamily:"'DM Sans',sans-serif"}}>{l}</span>
              </div>
              {i<2&&<div style={{width:24,height:1,
                background:scene>i||showAll?"rgba(74,222,128,.5)":"rgba(51,65,85,.5)",
                transition:"background .5s",margin:"0 2px"}}/>}
            </div>
          );
        })}
      </div>

      {/* Main content */}
      <div style={{
        opacity: fading?0:1,
        transition:`opacity ${TRANSITION_MS}ms ease`,
        width:"100%",maxWidth: showAll?980:460,
        display:"flex",
        flexDirection: showAll?"row":"column",
        alignItems:"center",justifyContent:"center",
        gap: showAll?16:0,
        flexWrap:"wrap",
      }}>
        {showAll ? (
          [0,1,2].map(i=>(
            <div key={i} style={{
              background:"rgba(15,23,42,.88)",
              backdropFilter:"blur(20px)",
              border:"1px solid rgba(56,189,248,.22)",
              borderRadius:22,padding:"24px 18px",
              flex:"1",minWidth:260,maxWidth:300,
              minHeight:400,
              display:"flex",flexDirection:"column",alignItems:"center",
              position:"relative",overflow:"hidden",
              animation:"fadeUp .5s ease both",
              animationDelay:`${i*80}ms`,
            }}>
              <div style={{position:"absolute",top:-40,left:"50%",transform:"translateX(-50%)",
                width:150,height:80,
                background:"radial-gradient(ellipse,rgba(56,189,248,.14) 0%,transparent 70%)",
                pointerEvents:"none"}}/>
              {/* Top progress bar */}
              <div style={{position:"absolute",top:0,left:0,right:0,height:2,
                background:"rgba(51,65,85,.5)",borderRadius:"22px 22px 0 0",overflow:"hidden"}}>
                <div style={{height:"100%",width:`${allTick}%`,
                  background:`linear-gradient(90deg,${["#38bdf8","#818cf8","#4ade80"][i]},${["#818cf8","#4ade80","#38bdf8"][i]})`,
                  transition:"width .1s linear"}}/>
              </div>
              <p style={{fontSize:9,letterSpacing:3,color:"#38bdf8",textTransform:"uppercase",
                fontFamily:"'DM Mono',monospace",marginBottom:16,alignSelf:"flex-start",marginTop:6}}>
                0{i+1} — {LABELS[i]}
              </p>
              <div style={{width:"100%",flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                {i===0&&<UploadScene  tick={allTick}/>}
                {i===1&&<AIScene      tick={allTick}/>}
                {i===2&&<ParkingScene tick={allTick}/>}
              </div>
            </div>
          ))
        ) : (
          <div style={{
            width:"100%",
            background:"rgba(15,23,42,.88)",
            backdropFilter:"blur(20px)",
            border:"1px solid rgba(56,189,248,.22)",
            borderRadius:26,padding:"32px 26px",
            minHeight:430,
            display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
            position:"relative",overflow:"hidden",
          }}>
            {/* Corner glows */}
            <div style={{position:"absolute",top:-50,right:-50,width:180,height:180,borderRadius:"50%",
              background:"radial-gradient(ellipse,rgba(56,189,248,.11) 0%,transparent 70%)",pointerEvents:"none"}}/>
            <div style={{position:"absolute",bottom:-50,left:-50,width:180,height:180,borderRadius:"50%",
              background:"radial-gradient(ellipse,rgba(129,140,248,.09) 0%,transparent 70%)",pointerEvents:"none"}}/>
            {/* Top progress */}
            <div style={{position:"absolute",top:0,left:0,right:0,height:3,
              background:"rgba(51,65,85,.5)",borderRadius:"26px 26px 0 0",overflow:"hidden"}}>
              <div style={{height:"100%",width:`${tick}%`,
                background:"linear-gradient(90deg,#38bdf8,#818cf8)",transition:"width .08s linear"}}/>
            </div>
            {/* Scene label */}
            <p style={{position:"absolute",top:16,left:22,fontSize:9,letterSpacing:3,
              color:"rgba(56,189,248,.6)",textTransform:"uppercase",fontFamily:"'DM Mono',monospace"}}>
              0{scene+1} — {LABELS[scene]}
            </p>
            <div style={{width:"100%",paddingTop:18}}>
              {scene===0&&<UploadScene  tick={tick}/>}
              {scene===1&&<AIScene      tick={tick}/>}
              {scene===2&&<ParkingScene tick={tick}/>}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{marginTop:22,display:"flex",alignItems:"center",gap:8}}>
        <div style={{width:7,height:7,borderRadius:"50%",background:"#4ade80",
          boxShadow:"0 0 8px #4ade80",animation:"bop 2s ease-in-out infinite"}}/>
        <span style={{fontSize:11,color:"#475569",fontFamily:"'DM Sans',sans-serif"}}>
          {showAll?`Cycle ${cycle} — All scenes running · Auto-restarting…`:`Cycle ${cycle} · Scene ${scene+1}/3 auto-running`}
        </span>
      </div>
    </div>
  );
}