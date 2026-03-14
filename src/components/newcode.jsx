"use client";
import { useState, useRef, useEffect, useCallback } from "react";

// ─── ICONS ───────────────────────────────────────────────────────────────────
const UploadIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
  </svg>
);
const SparkleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
  </svg>
);
const CarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
  </svg>
);

// ─── TABS ─────────────────────────────────────────────────────────────────────
const TABS = ["Upload & Animate", "AI Generator", "Parking Layout"];

// ─── PARKING SLOT DATA ────────────────────────────────────────────────────────
const buildParkingData = () =>
  Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    row: Math.floor(i / 10),
    col: i % 10,
    status: Math.random() < 0.35 ? "occupied" : Math.random() < 0.08 ? "reserved" : "free",
    type: i < 4 ? "disabled" : i < 8 ? "ev" : "standard",
  }));

// ─── ANIMATED PRODUCT CARD ────────────────────────────────────────────────────
function ProductCard({ file, url }) {
  const [angle, setAngle] = useState(0);
  const [playing, setPlaying] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    if (playing) {
      const step = () => {
        setAngle((a) => (a + 1.2) % 360);
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    } else {
      cancelAnimationFrame(rafRef.current);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [playing]);

  const isVideo = file?.type?.startsWith("video");
  const isImage = file?.type?.startsWith("image");

  return (
    <div className="product-card-wrapper">
      <div
        className="product-stage"
        style={{ "--angle": `${angle}deg` }}
      >
        {isImage && (
          <img
            src={url}
            alt="product"
            className="product-media"
            style={{ transform: `rotateY(${angle}deg) scale(${playing ? 1.04 : 1})` }}
          />
        )}
        {isVideo && (
          <video src={url} className="product-media" autoPlay loop muted playsInline />
        )}
        {!file && (
          <div className="product-placeholder">
            <div className="placeholder-ring" style={{ transform: `rotateY(${angle}deg)` }} />
            <span>No file uploaded</span>
          </div>
        )}
        <div className="stage-glow" />
      </div>

      <div className="anim-controls">
        <button className={`ctrl-btn ${playing ? "active" : ""}`} onClick={() => setPlaying((p) => !p)}>
          {playing ? "⏸ Pause" : "▶ Rotate"}
        </button>
        <button className="ctrl-btn" onClick={() => setAngle(0)}>↺ Reset</button>
        <input
          type="range" min="0" max="360" value={angle}
          onChange={(e) => { setPlaying(false); setAngle(+e.target.value); }}
          className="angle-slider"
        />
        <span className="angle-label">{Math.round(angle)}°</span>
      </div>
    </div>
  );
}

// ─── FILE UPLOAD TAB ──────────────────────────────────────────────────────────
function UploadTab() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [drag, setDrag] = useState(false);
  const inputRef = useRef(null);

  const handleFile = (f) => {
    if (!f) return;
    setFile(f);
    setUrl(URL.createObjectURL(f));
  };

  return (
    <div className="tab-content">
      <div className="upload-split">
        {/* Drop zone */}
        <div
          className={`dropzone ${drag ? "dragging" : ""} ${file ? "has-file" : ""}`}
          onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => { e.preventDefault(); setDrag(false); handleFile(e.dataTransfer.files[0]); }}
          onClick={() => inputRef.current?.click()}
        >
          <input ref={inputRef} type="file" accept="image/*,video/*" hidden onChange={(e) => handleFile(e.target.files[0])} />
          {!file ? (
            <>
              <div className="drop-icon"><UploadIcon /></div>
              <p className="drop-title">Drop product file here</p>
              <p className="drop-sub">Supports JPG, PNG, MP4, WebM</p>
            </>
          ) : (
            <>
              <div className="file-thumb">
                {file.type.startsWith("image") && <img src={url} alt="" />}
                {file.type.startsWith("video") && <video src={url} muted />}
              </div>
              <p className="drop-filename">{file.name}</p>
              <p className="drop-sub">{(file.size / 1024).toFixed(1)} KB · Click to change</p>
            </>
          )}
        </div>

        {/* Preview + animation */}
        <ProductCard file={file} url={url} />
      </div>

      {/* Metadata strip */}
      {file && (
        <div className="meta-strip">
          {[
            ["Name", file.name],
            ["Type", file.type],
            ["Size", `${(file.size / 1024).toFixed(1)} KB`],
            ["Modified", new Date(file.lastModified).toLocaleDateString()],
          ].map(([k, v]) => (
            <div key={k} className="meta-item">
              <span className="meta-key">{k}</span>
              <span className="meta-val">{v}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── AI GENERATOR TAB ─────────────────────────────────────────────────────────
function AIGeneratorTab() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const generate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: `You are an expert product designer. When given a product description, respond ONLY with valid JSON (no markdown):
{
  "name": "Product name",
  "tagline": "Short punchy tagline",
  "description": "2-3 sentence product description",
  "colors": ["#hex1","#hex2","#hex3"],
  "features": ["feature 1","feature 2","feature 3","feature 4"],
  "animationStyle": "one of: float|spin|pulse|bounce|glow",
  "shape": "one of: sphere|cube|cylinder|diamond|capsule"
}`,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json();
    try {
      const text = data.content.find((b) => b.type === "text")?.text || "{}";
      const parsed = JSON.parse(text);
      setResult(parsed);
      setHistory((h) => [{ prompt, result: parsed }, ...h.slice(0, 4)]);
    } catch {
      setResult({ name: "Parse error", tagline: "Try again", description: data.content?.[0]?.text, colors: ["#ff6b6b"], features: [], animationStyle: "pulse", shape: "sphere" });
    }
    setLoading(false);
  };

  return (
    <div className="tab-content">
      <div className="ai-layout">
        {/* Input panel */}
        <div className="ai-input-panel">
          <label className="ai-label">Describe your product</label>
          <textarea
            className="ai-textarea"
            rows={4}
            placeholder="e.g. A sleek wireless earphone with noise cancellation, futuristic design, metallic finish..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && e.ctrlKey && generate()}
          />
          <button className={`generate-btn ${loading ? "loading" : ""}`} onClick={generate} disabled={loading || !prompt.trim()}>
            {loading ? (
              <span className="spinner" />
            ) : (
              <><SparkleIcon /> Generate Product</>
            )}
          </button>

          {/* History */}
          {history.length > 0 && (
            <div className="history-panel">
              <p className="history-title">Recent generations</p>
              {history.map((h, i) => (
                <button key={i} className="history-item" onClick={() => { setPrompt(h.prompt); setResult(h.result); }}>
                  <span className="h-dot" style={{ background: h.result.colors?.[0] }} />
                  {h.result.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Result card */}
        <div className="ai-result-panel">
          {loading && (
            <div className="ai-loading">
              <div className="ai-loading-orb" />
              <p>Generating your product...</p>
            </div>
          )}
          {result && !loading && <AIProductCard product={result} />}
          {!result && !loading && (
            <div className="ai-empty">
              <div className="empty-icon">✦</div>
              <p>Your AI-generated product will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AIProductCard({ product }) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setFrame((f) => f + 1), 50);
    return () => clearInterval(id);
  }, []);

  const anim = product.animationStyle || "float";
  const t = frame / 20;
  let transform = "";
  if (anim === "float") transform = `translateY(${Math.sin(t) * 8}px)`;
  if (anim === "spin") transform = `rotateY(${frame * 2}deg)`;
  if (anim === "pulse") transform = `scale(${1 + Math.sin(t) * 0.06})`;
  if (anim === "bounce") transform = `translateY(${Math.abs(Math.sin(t)) * -14}px)`;
  if (anim === "glow") transform = `scale(${1 + Math.sin(t) * 0.03})`;

  const shapeClass = `shape-${product.shape || "sphere"}`;
  const [c1, c2, c3] = product.colors || ["#6366f1", "#818cf8", "#c7d2fe"];

  return (
    <div className="product-result-card" style={{ "--c1": c1, "--c2": c2, "--c3": c3 }}>
      <div className="product-visual">
        <div className={`product-3d ${shapeClass}`} style={{ transform, background: `linear-gradient(135deg, ${c1}, ${c2})`, boxShadow: `0 0 40px ${c1}66` }} />
        {anim === "glow" && <div className="glow-ring" style={{ opacity: 0.4 + Math.sin(t) * 0.3 }} />}
      </div>
      <div className="product-info">
        <h2 className="prod-name">{product.name}</h2>
        <p className="prod-tagline" style={{ color: c1 }}>{product.tagline}</p>
        <p className="prod-desc">{product.description}</p>
        <div className="prod-features">
          {product.features?.map((f, i) => (
            <span key={i} className="feat-tag" style={{ borderColor: c2, color: c2 }}>{f}</span>
          ))}
        </div>
        <div className="color-swatches">
          {product.colors?.map((c, i) => (
            <span key={i} className="swatch" style={{ background: c }} title={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PARKING LAYOUT TAB ───────────────────────────────────────────────────────
function ParkingTab() {
  const [slots, setSlots] = useState(buildParkingData);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const [generating, setGenerating] = useState(false);
  const [aiLayout, setAiLayout] = useState(null);

  const stats = {
    total: slots.length,
    free: slots.filter((s) => s.status === "free").length,
    occupied: slots.filter((s) => s.status === "occupied").length,
    reserved: slots.filter((s) => s.status === "reserved").length,
  };

  const toggleSlot = (id) => {
    setSlots((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: s.status === "free" ? "occupied" : s.status === "occupied" ? "reserved" : "free" } : s
      )
    );
    setSelected(id);
  };

  const generateAILayout = async () => {
    setGenerating(true);
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: `You are a smart parking system AI. Respond ONLY with JSON (no markdown):
{
  "recommendation": "1-2 sentence smart parking insight",
  "bestSlot": 12,
  "zones": [{"name":"Zone A","slots":[1,2,3],"type":"EV"},{"name":"Zone B","slots":[5,6,7,8],"type":"VIP"}],
  "efficiency": 87,
  "tip": "Short actionable tip"
}`,
        messages: [{ role: "user", content: `Parking lot: ${stats.total} slots, ${stats.free} free, ${stats.occupied} occupied, ${stats.reserved} reserved. Analyze and give smart recommendation.` }],
      }),
    });
    const data = await res.json();
    try {
      const text = data.content.find((b) => b.type === "text")?.text || "{}";
      setAiLayout(JSON.parse(text));
    } catch {
      setAiLayout({ recommendation: "Keep Zone A clear for peak hours.", bestSlot: 5, efficiency: 72, tip: "Add EV chargers to boost utilization." });
    }
    setGenerating(false);
  };

  const visibleSlots = filter === "all" ? slots : slots.filter((s) => s.status === filter || s.type === filter);

  return (
    <div className="tab-content">
      {/* Stats bar */}
      <div className="parking-stats">
        {[
          { label: "Total", value: stats.total, color: "#94a3b8" },
          { label: "Free", value: stats.free, color: "#34d399" },
          { label: "Occupied", value: stats.occupied, color: "#f87171" },
          { label: "Reserved", value: stats.reserved, color: "#fbbf24" },
        ].map(({ label, value, color }) => (
          <div key={label} className="stat-card" style={{ "--accent": color }}>
            <span className="stat-val" style={{ color }}>{value}</span>
            <span className="stat-lbl">{label}</span>
            <div className="stat-bar" style={{ width: `${(value / stats.total) * 100}%`, background: color }} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="parking-controls">
        <div className="filter-btns">
          {["all", "free", "occupied", "reserved", "ev", "disabled"].map((f) => (
            <button key={f} className={`filter-btn ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <button className={`ai-parking-btn ${generating ? "loading" : ""}`} onClick={generateAILayout} disabled={generating}>
          {generating ? <span className="spinner sm" /> : <><SparkleIcon /> AI Analyze</>}
        </button>
      </div>

      {/* AI recommendation */}
      {aiLayout && (
        <div className="ai-rec-card">
          <div className="ai-rec-header">
            <SparkleIcon />
            <span>AI Recommendation</span>
            <span className="eff-badge">Efficiency: {aiLayout.efficiency}%</span>
          </div>
          <p className="ai-rec-text">{aiLayout.recommendation}</p>
          <p className="ai-tip">💡 {aiLayout.tip}</p>
          <p className="ai-best">Best available slot: <strong>#{aiLayout.bestSlot}</strong></p>
        </div>
      )}

      {/* Parking grid */}
      <div className="parking-map">
        <div className="road-label left">ENTRANCE →</div>
        <div className="parking-grid">
          {slots.filter((s) => filter === "all" || s.status === filter || s.type === filter).map((slot) => (
            <button
              key={slot.id}
              className={`parking-slot ${slot.status} ${slot.type} ${selected === slot.id ? "selected" : ""} ${aiLayout?.bestSlot === slot.id ? "best" : ""}`}
              onClick={() => toggleSlot(slot.id)}
              title={`Slot #${slot.id} — ${slot.status} (${slot.type})`}
            >
              {slot.status === "occupied" ? <CarIcon /> : slot.type === "ev" ? "⚡" : slot.type === "disabled" ? "♿" : slot.id}
              {aiLayout?.bestSlot === slot.id && <span className="best-badge">★</span>}
            </button>
          ))}
        </div>
        <div className="road-label right">← EXIT</div>
      </div>

      {/* Legend */}
      <div className="parking-legend">
        {[["free","#34d399","Free"],["occupied","#f87171","Occupied"],["reserved","#fbbf24","Reserved"],["ev","#60a5fa","EV"],["disabled","#a78bfa","Disabled"]].map(([cls,color,label]) => (
          <div key={cls} className="legend-item">
            <span className="legend-dot" style={{ background: color }} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #080c14;
          --surface: #0f1623;
          --surface2: #161f30;
          --border: #1e2d45;
          --text: #e2e8f0;
          --muted: #64748b;
          --accent: #38bdf8;
          --accent2: #818cf8;
          --success: #34d399;
          --warning: #fbbf24;
          --danger: #f87171;
          --radius: 14px;
        }

        body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; min-height: 100vh; }

        .app-shell {
          max-width: 1100px;
          margin: 0 auto;
          padding: 32px 20px;
        }

        /* HEADER */
        .app-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .app-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 800;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }
        .app-sub {
          color: var(--muted);
          margin-top: 8px;
          font-size: 15px;
        }

        /* TABS */
        .tab-nav {
          display: flex;
          gap: 4px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 5px;
          margin-bottom: 28px;
        }
        .tab-btn {
          flex: 1;
          padding: 11px;
          border: none;
          background: transparent;
          color: var(--muted);
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 600;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.3px;
        }
        .tab-btn:hover { color: var(--text); background: var(--surface2); }
        .tab-btn.active {
          background: linear-gradient(135deg, rgba(56,189,248,0.2), rgba(129,140,248,0.15));
          color: var(--accent);
          border: 1px solid rgba(56,189,248,0.25);
        }

        /* TAB CONTENT */
        .tab-content { animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

        /* ── UPLOAD TAB ── */
        .upload-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 680px) { .upload-split { grid-template-columns: 1fr; } }

        .dropzone {
          border: 2px dashed var(--border);
          border-radius: var(--radius);
          padding: 36px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.25s;
          background: var(--surface);
          min-height: 240px;
          text-align: center;
        }
        .dropzone:hover, .dropzone.dragging {
          border-color: var(--accent);
          background: rgba(56,189,248,0.04);
        }
        .drop-icon { color: var(--accent); opacity: 0.8; }
        .drop-title { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--text); font-size: 16px; }
        .drop-sub { font-size: 13px; color: var(--muted); }
        .drop-filename { font-size: 13px; color: var(--accent); word-break: break-all; }
        .file-thumb { width: 80px; height: 80px; border-radius: 10px; overflow: hidden; }
        .file-thumb img, .file-thumb video { width: 100%; height: 100%; object-fit: cover; }

        /* Product animation stage */
        .product-card-wrapper {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .product-stage {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          perspective: 600px;
        }
        .product-media {
          max-width: 180px;
          max-height: 180px;
          object-fit: contain;
          border-radius: 10px;
          transition: transform 0.05s linear;
          filter: drop-shadow(0 8px 24px rgba(56,189,248,0.25));
        }
        .product-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: var(--muted);
          font-size: 13px;
        }
        .placeholder-ring {
          width: 80px; height: 80px;
          border-radius: 50%;
          border: 3px solid var(--border);
          border-top-color: var(--accent);
          transition: transform 0.05s linear;
        }
        .stage-glow {
          position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
          width: 100px; height: 20px;
          background: radial-gradient(ellipse, rgba(56,189,248,0.3), transparent 70%);
          filter: blur(4px);
        }
        .anim-controls { display: flex; align-items: center; gap: 10px; width: 100%; flex-wrap: wrap; }
        .ctrl-btn {
          padding: 7px 14px;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text);
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .ctrl-btn:hover, .ctrl-btn.active { border-color: var(--accent); color: var(--accent); }
        .angle-slider { flex: 1; min-width: 80px; accent-color: var(--accent); }
        .angle-label { font-size: 12px; color: var(--muted); min-width: 36px; }

        .meta-strip {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 10px;
        }
        .meta-item {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 12px 14px;
        }
        .meta-key { display: block; font-size: 11px; color: var(--muted); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
        .meta-val { font-size: 13px; font-weight: 500; word-break: break-all; }

        /* ── AI GENERATOR TAB ── */
        .ai-layout {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 20px;
        }
        @media (max-width: 780px) { .ai-layout { grid-template-columns: 1fr; } }

        .ai-input-panel { display: flex; flex-direction: column; gap: 14px; }
        .ai-label { font-size: 13px; font-weight: 500; color: var(--muted); }
        .ai-textarea {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          padding: 14px;
          resize: vertical;
          transition: border-color 0.2s;
          line-height: 1.6;
        }
        .ai-textarea:focus { outline: none; border-color: var(--accent); }

        .generate-btn {
          padding: 13px;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          border: none;
          border-radius: var(--radius);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: opacity 0.2s, transform 0.15s;
        }
        .generate-btn:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
        .generate-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .history-panel { display: flex; flex-direction: column; gap: 6px; }
        .history-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--muted); }
        .history-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          color: var(--text);
          font-size: 13px;
          transition: border-color 0.2s;
          text-align: left;
        }
        .history-item:hover { border-color: var(--accent); }
        .h-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }

        .ai-result-panel {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          min-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ai-loading { display: flex; flex-direction: column; align-items: center; gap: 16px; color: var(--muted); }
        .ai-loading-orb {
          width: 60px; height: 60px; border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          animation: pulse 1s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.15); opacity: 1; } }

        .ai-empty { text-align: center; color: var(--muted); }
        .empty-icon { font-size: 36px; margin-bottom: 12px; opacity: 0.4; }

        /* Product result */
        .product-result-card {
          width: 100%;
          padding: 24px;
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 20px;
          align-items: start;
        }
        @media (max-width: 500px) { .product-result-card { grid-template-columns: 1fr; } }

        .product-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 160px;
          position: relative;
        }
        .product-3d {
          width: 100px; height: 100px;
          position: relative;
        }
        .shape-sphere { border-radius: 50%; }
        .shape-cube { border-radius: 10px; }
        .shape-cylinder { border-radius: 50px; }
        .shape-diamond { border-radius: 0; transform-origin: center; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
        .shape-capsule { border-radius: 60px; width: 70px; height: 110px; }
        .glow-ring {
          position: absolute;
          width: 130px; height: 130px;
          border-radius: 50%;
          border: 2px solid var(--c1, #6366f1);
          top: 50%; left: 50%; transform: translate(-50%, -50%);
        }
        .product-info { display: flex; flex-direction: column; gap: 10px; }
        .prod-name { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; }
        .prod-tagline { font-size: 13px; font-weight: 600; letter-spacing: 0.3px; }
        .prod-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
        .prod-features { display: flex; flex-wrap: wrap; gap: 6px; }
        .feat-tag { font-size: 12px; padding: 4px 10px; border-radius: 20px; border: 1px solid; font-weight: 500; }
        .color-swatches { display: flex; gap: 8px; margin-top: 4px; }
        .swatch { width: 20px; height: 20px; border-radius: 50%; cursor: pointer; transition: transform 0.2s; }
        .swatch:hover { transform: scale(1.3); }

        /* ── PARKING TAB ── */
        .parking-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 16px;
        }
        @media (max-width: 600px) { .parking-stats { grid-template-columns: repeat(2, 1fr); } }

        .stat-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 14px 16px;
          position: relative;
          overflow: hidden;
        }
        .stat-val { display: block; font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; }
        .stat-lbl { font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; }
        .stat-bar { position: absolute; bottom: 0; left: 0; height: 3px; transition: width 0.5s ease; }

        .parking-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 16px;
        }
        .filter-btns { display: flex; flex-wrap: wrap; gap: 6px; }
        .filter-btn {
          padding: 6px 12px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          color: var(--muted);
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: capitalize;
        }
        .filter-btn:hover { border-color: var(--accent); color: var(--accent); }
        .filter-btn.active { background: rgba(56,189,248,0.1); border-color: var(--accent); color: var(--accent); }

        .ai-parking-btn {
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(56,189,248,0.2), rgba(129,140,248,0.15));
          border: 1px solid rgba(56,189,248,0.3);
          border-radius: 8px;
          color: var(--accent);
          font-size: 13px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
        }
        .ai-parking-btn:hover:not(:disabled) { background: rgba(56,189,248,0.15); }
        .ai-parking-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .ai-rec-card {
          background: linear-gradient(135deg, rgba(56,189,248,0.06), rgba(129,140,248,0.04));
          border: 1px solid rgba(56,189,248,0.2);
          border-radius: var(--radius);
          padding: 16px 20px;
          margin-bottom: 16px;
        }
        .ai-rec-header { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14px; color: var(--accent); }
        .eff-badge { margin-left: auto; background: rgba(52,211,153,0.15); color: var(--success); font-size: 12px; padding: 2px 8px; border-radius: 20px; border: 1px solid rgba(52,211,153,0.3); }
        .ai-rec-text { font-size: 14px; line-height: 1.6; margin-bottom: 8px; }
        .ai-tip { font-size: 13px; color: var(--muted); margin-bottom: 6px; }
        .ai-best { font-size: 13px; color: var(--muted); }
        .ai-best strong { color: var(--accent); }

        .parking-map {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px;
          margin-bottom: 12px;
          position: relative;
        }
        .road-label {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--muted);
          writing-mode: vertical-rl;
        }
        .road-label.left { left: 4px; }
        .road-label.right { right: 4px; transform: translateY(-50%) rotate(180deg); }

        .parking-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 6px;
          margin: 0 24px;
        }
        @media (max-width: 680px) { .parking-grid { grid-template-columns: repeat(5, 1fr); } }

        .parking-slot {
          aspect-ratio: 1;
          border-radius: 6px;
          border: 1.5px solid transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          background: var(--surface2);
          color: var(--muted);
          font-family: 'Inter', sans-serif;
        }
        .parking-slot:hover { transform: scale(1.08); z-index: 2; }
        .parking-slot.free { background: rgba(52,211,153,0.12); border-color: rgba(52,211,153,0.3); color: var(--success); }
        .parking-slot.occupied { background: rgba(248,113,113,0.12); border-color: rgba(248,113,113,0.3); color: var(--danger); }
        .parking-slot.reserved { background: rgba(251,191,36,0.12); border-color: rgba(251,191,36,0.3); color: var(--warning); }
        .parking-slot.ev { outline: 1px solid rgba(96,165,250,0.5); }
        .parking-slot.disabled { outline: 1px solid rgba(167,139,250,0.5); }
        .parking-slot.selected { box-shadow: 0 0 0 2px var(--accent); z-index: 3; }
        .parking-slot.best { box-shadow: 0 0 0 2px #fbbf24, 0 0 12px rgba(251,191,36,0.4); }
        .best-badge {
          position: absolute;
          top: -4px; right: -4px;
          font-size: 8px;
          color: #fbbf24;
          line-height: 1;
        }

        .parking-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          font-size: 12px;
          color: var(--muted);
        }
        .legend-item { display: flex; align-items: center; gap: 6px; }
        .legend-dot { width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; }

        /* ── SPINNER ── */
        .spinner {
          display: inline-block;
          width: 18px; height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        .spinner.sm { width: 14px; height: 14px; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="app-shell">
        <header className="app-header">
          <h1 className="app-title">Product Studio ✦ AI Platform</h1>
          <p className="app-sub">Upload · Animate · Generate · Smart Parking</p>
        </header>

        <nav className="tab-nav">
          {TABS.map((t, i) => (
            <button key={t} className={`tab-btn ${activeTab === i ? "active" : ""}`} onClick={() => setActiveTab(i)}>
              {t}
            </button>
          ))}
        </nav>

        {activeTab === 0 && <UploadTab />}
        {activeTab === 1 && <AIGeneratorTab />}
        {activeTab === 2 && <ParkingTab />}
      </div>
    </>
  );
}