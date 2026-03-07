"use client";
import { useState } from "react";
import Image from "next/image";

const agents = [
  { name: "Daniel", file: "daniel-avatar.png" },
  { name: "Aria", file: "aria-growth-avatar.png" },
  { name: "Creative", file: "creative-avatar.png" },
  { name: "Ops", file: "operations-avatar.png" },
  { name: "Strategy", file: "strategy-avatar.png" },
  { name: "SEO", file: "seo-avatar.png" },
  { name: "Content", file: "content-avatar.png" },
  { name: "Email", file: "email-avatar.png" },
  { name: "Media", file: "media-avatar.png" },
  { name: "Social", file: "social-avatar.png" },
  { name: "CRO", file: "cro-avatar.png" },
  { name: "Analyst", file: "analyst-avatar.png" },
  { name: "Builder", file: "builder-avatar.png" },
  { name: "QA", file: "qa-avatar.png" },
  { name: "Research", file: "research-avatar.png" },
  { name: "PM", file: "pm-avatar.png" },
  { name: "Foreman", file: "foreman-avatar.png" },
  { name: "Copy", file: "copy-avatar.png" },
  { name: "Video", file: "video-avatar.png" },
  { name: "Design", file: "design-avatar.png" },
  { name: "Support", file: "support-avatar.png" },
  { name: "Integrations", file: "integrations-avatar.png" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ firstName: "", phone: "" });
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.phone) return;
    setLoading(true);
    await fetch("/api/opt-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    window.location.href = "https://age-v5.vercel.app";
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { font-size: 16px; }
        body { background: #0d0d0f; color: #e8e8e8; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }

        @keyframes modalIn { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .dot { width:8px;height:8px;border-radius:50%;background:#ef4444;display:inline-block;flex-shrink:0;animation:pulse 1.4s infinite; }

        .cta { display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#f59e0b;color:#0d0d0f;font-size:17px;font-weight:800;font-family:inherit;letter-spacing:-0.01em;padding:17px 32px;border-radius:10px;border:none;cursor:pointer;transition:transform 0.15s,background 0.15s;width:100%;max-width:340px; }
        .cta:hover { transform:translateY(-2px);background:#fbbf24; }
        .cta:active { transform:translateY(0); }

        input { background:#1a1a1f;border:1.5px solid #2a2a32;border-radius:10px;color:#fff;font-size:16px;font-family:inherit;padding:15px 16px;width:100%;outline:none;transition:border-color 0.2s,background 0.2s; }
        input:focus { border-color:#f59e0b;background:#1e1e24; }
        input::placeholder { color:#3a3a44; }

        .submit { background:#f59e0b;border:none;border-radius:10px;color:#0d0d0f;cursor:pointer;font-size:17px;font-weight:800;font-family:inherit;padding:17px;width:100%;transition:opacity 0.2s; }
        .submit:hover { opacity:0.88; }
        .submit:disabled { opacity:0.4;cursor:not-allowed; }

        .agent img { border-radius:50%;transition:box-shadow 0.2s; }
        .agent:hover img { box-shadow:0 0 0 2px #f59e0b; }

        @media(max-width:600px) {
          .h1 { font-size: 38px !important; line-height: 1.1 !important; }
          .sub { font-size: 17px !important; }
          .section-pad { padding: 56px 20px !important; }
          .agent-grid { grid-template-columns: repeat(5,1fr) !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{padding:"22px 28px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #16161c"}}>
        <span style={{fontSize:14,fontWeight:900,letterSpacing:"0.2em",color:"#fff"}}>AGE</span>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span className="dot" />
          <span style={{fontSize:12,color:"#555",letterSpacing:"0.06em"}}>COHORT 3 — 3 SPOTS</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{padding:"72px 24px 80px",maxWidth:720,margin:"0 auto",textAlign:"center",animation:"fadeUp 0.7s ease both"}}>

        <p style={{fontSize:12,fontWeight:600,letterSpacing:"0.14em",color:"#f59e0b",marginBottom:24}}>
          AGENT GROWTH ENGINE
        </p>

        <h1 className="h1" style={{fontSize:58,fontWeight:900,lineHeight:1.06,letterSpacing:"-0.03em",color:"#fff",marginBottom:24}}>
          Your business running<br />
          the way you always<br />
          <span style={{color:"#f59e0b"}}>imagined it.</span>
        </h1>

        <p className="sub" style={{fontSize:19,color:"#888",lineHeight:1.65,maxWidth:520,margin:"0 auto 16px"}}>
          No friction. No headache. No army of employees or $5k/month agencies eating your margin.
        </p>

        <p style={{fontSize:17,color:"#666",lineHeight:1.65,maxWidth:480,margin:"0 auto 44px"}}>
          We're builders. We've been in this space a long time. We know what's coming — and we're taking some people with us.
        </p>

        <button className="cta" onClick={() => setOpen(true)}>
          Let's See If We're a Fit →
        </button>

        <p style={{marginTop:16,fontSize:12,color:"#333"}}>
          We're selective. Not everyone gets in. That's not a pitch — it's just true.
        </p>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{borderTop:"1px solid #16161c",maxWidth:640,margin:"0 auto"}} />

      {/* ── MIDDLE COPY ── */}
      <section className="section-pad" style={{padding:"72px 24px",maxWidth:620,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:"clamp(24px,3.5vw,34px)",fontWeight:800,lineHeight:1.4,color:"#fff",letterSpacing:"-0.02em",marginBottom:20}}>
          "Most people will think about it,<br />
          <span style={{color:"#555"}}>and go back to doing everything themselves."</span>
        </p>
        <p style={{fontSize:17,color:"#f59e0b",fontWeight:600}}>
          The ones who don't? They're already in.
        </p>
      </section>

      {/* ── FLEET ── */}
      <section style={{padding:"16px 24px 80px",maxWidth:800,margin:"0 auto"}}>
        <p style={{fontSize:11,color:"#333",letterSpacing:"0.14em",fontWeight:600,textAlign:"center",marginBottom:24}}>
          YOUR TEAM — 22 SPECIALISTS — DAY ONE
        </p>
        <div className="agent-grid" style={{display:"grid",gridTemplateColumns:"repeat(11,1fr)",gap:"14px 10px"}}>
          {agents.map(a => (
            <div key={a.name} className="agent" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5}}>
              <Image src={`/assets/agents/${a.file}`} alt={a.name} width={54} height={54} style={{borderRadius:"50%"}} />
              <span style={{fontSize:9,color:"#3a3a44",textAlign:"center",lineHeight:1.2}}>{a.name}</span>
            </div>
          ))}
        </div>

        <div style={{textAlign:"center",marginTop:48}}>
          <button className="cta" onClick={() => setOpen(true)}>
            Let's See If We're a Fit →
          </button>
        </div>
      </section>

      {/* ── MODAL ── */}
      {open && (
        <div
          onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}
          style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",zIndex:1000,display:"flex",alignItems:"flex-end",justifyContent:"center",backdropFilter:"blur(4px)"}}
        >
          <div style={{background:"#13131a",borderRadius:"20px 20px 0 0",padding:"32px 28px 48px",width:"100%",maxWidth:460,animation:"modalIn 0.28s ease",borderTop:"1px solid #2a2a35"}}>

            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:28}}>
              <div>
                <p style={{fontSize:22,fontWeight:800,color:"#fff",letterSpacing:"-0.02em"}}>Start the conversation.</p>
                <p style={{fontSize:13,color:"#555",marginTop:4}}>3 spots left. No pitch. Just a real talk.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{background:"#1e1e28",border:"none",color:"#666",width:34,height:34,borderRadius:"50%",cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}
              >✕</button>
            </div>

            <form onSubmit={submit} style={{display:"flex",flexDirection:"column",gap:12}}>
              <input
                placeholder="First Name"
                value={form.firstName}
                onChange={e => setForm(f => ({...f, firstName: e.target.value}))}
                required
                autoFocus
              />
              <input
                placeholder="Phone Number"
                type="tel"
                value={form.phone}
                onChange={e => setForm(f => ({...f, phone: e.target.value}))}
                required
              />
              <button className="submit" type="submit" disabled={loading}>
                {loading ? "Sending..." : "I'm In →"}
              </button>
            </form>

            <p style={{marginTop:14,fontSize:11,color:"#2a2a35",textAlign:"center"}}>
              No spam. You'll hear from us within 24 hours.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
