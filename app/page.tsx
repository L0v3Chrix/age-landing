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

const ticker = "· AI OUTREACH · VOICE CALLS · CALENDAR BOOKING · CONTENT · SEO · LEAD NURTURING · 24/7 OPS · ZERO OVERHEAD · NO EMPLOYEES · NO AGENCY ·";

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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { font-size: 16px; }
        body { background: #080808; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.85)} }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes modalIn { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        .dot { width:9px;height:9px;border-radius:50%;background:#ef4444;display:inline-block;animation:pulse 1.3s infinite;margin-right:7px;flex-shrink:0; }
        .ticker-wrap { overflow:hidden;white-space:nowrap;background:#0f0f0f;border-top:1px solid #1a1a1a;border-bottom:1px solid #1a1a1a; }
        .ticker-inner { display:inline-block;padding:12px 0;animation:ticker 22s linear infinite; }
        .cta-btn { background:linear-gradient(135deg,#7c3aed 0%,#6d28d9 100%);border:none;border-radius:12px;color:#f59e0b;cursor:pointer;font-size:18px;font-weight:800;letter-spacing:0.02em;padding:18px 36px;display:inline-block;transition:transform 0.15s,opacity 0.15s;width:100%;max-width:360px; }
        .cta-btn:hover { transform:translateY(-2px);opacity:0.92; }
        .cta-btn:active { transform:translateY(0); }
        input { background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.1);border-radius:10px;color:#fff;font-size:16px;font-family:inherit;padding:14px 16px;width:100%;outline:none;transition:border 0.2s; }
        input:focus { border-color:rgba(124,58,237,0.8);background:rgba(124,58,237,0.08); }
        input::placeholder { color:#444; }
        .submit-btn { background:linear-gradient(135deg,#7c3aed,#6d28d9);border:none;border-radius:10px;color:#f59e0b;cursor:pointer;font-size:17px;font-weight:800;font-family:inherit;padding:16px;width:100%;transition:opacity 0.2s; }
        .submit-btn:hover { opacity:0.88; }
        .submit-btn:disabled { opacity:0.45;cursor:not-allowed; }
        .agent-grid { display:grid;grid-template-columns:repeat(11,1fr);gap:10px; }
        @media(max-width:700px) { .agent-grid{grid-template-columns:repeat(6,1fr)} }
        @media(max-width:420px) { .agent-grid{grid-template-columns:repeat(4,1fr)} }
        .agent { display:flex;flex-direction:column;align-items:center;gap:4px;cursor:default; }
        .agent img { border-radius:50%;border:2px solid transparent;transition:border-color 0.2s,box-shadow 0.2s; }
        .agent:hover img { border-color:#7c3aed;box-shadow:0 0 14px rgba(124,58,237,0.5); }
        .agent span { font-size:9px;color:#444;text-align:center;line-height:1.2; }
        @media(max-width:700px) {
          .hero-h1 { font-size: 42px !important; }
          .hero-sub { font-size: 17px !important; }
        }
        @media(max-width:420px) {
          .hero-h1 { font-size: 34px !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{position:"relative",minHeight:"100svh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",overflow:"hidden"}}>

        {/* Background image */}
        <div style={{position:"absolute",inset:0,zIndex:0}}>
          <Image
            src="/assets/gate-hero.png"
            alt=""
            fill
            priority
            style={{objectFit:"cover",objectPosition:"60% center"}}
          />
          {/* Gradient: lighter at top for readability, darker bottom */}
          <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.5) 40%, rgba(8,8,8,0.85) 80%, #080808 100%)"}} />
        </div>

        {/* Nav */}
        <div style={{position:"absolute",top:0,left:0,right:0,zIndex:10,padding:"20px 28px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:15,fontWeight:900,letterSpacing:"0.18em",color:"#fff"}}>AGE</span>
          <span style={{fontSize:11,color:"rgba(255,255,255,0.4)",letterSpacing:"0.1em",display:"none"}}>22 AGENTS · 5 DIVISIONS</span>
        </div>

        {/* Main content */}
        <div style={{position:"relative",zIndex:10,padding:"100px 24px 60px",maxWidth:600,animation:"fadeUp 0.8s ease both"}}>

          {/* Badge */}
          <div style={{display:"inline-flex",alignItems:"center",background:"rgba(239,68,68,0.12)",border:"1px solid rgba(239,68,68,0.3)",borderRadius:100,padding:"6px 16px",fontSize:12,fontWeight:700,letterSpacing:"0.08em",color:"#fca5a5",marginBottom:28}}>
            <span className="dot" />
            COHORT 3 — 3 SPOTS REMAINING
          </div>

          {/* Headline */}
          <h1 className="hero-h1" style={{fontSize:56,fontWeight:900,lineHeight:1.08,letterSpacing:"-0.025em",marginBottom:20,color:"#fff"}}>
            You don't need<br />
            more people.<br />
            <span style={{color:"#f59e0b"}}>You need a fleet.</span>
          </h1>

          {/* Sub */}
          <p className="hero-sub" style={{fontSize:19,color:"rgba(255,255,255,0.65)",lineHeight:1.6,marginBottom:36,maxWidth:480,margin:"0 auto 36px"}}>
            22 AI agents. 5 divisions. 90 days to a business that runs without you.
          </p>

          {/* CTA — opens modal */}
          <button className="cta-btn" onClick={()=>setOpen(true)}>
            Begin Application →
          </button>

          <p style={{marginTop:14,fontSize:12,color:"rgba(255,255,255,0.25)"}}>
            No pitch decks. No agencies. Just a real conversation. 😈
          </p>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          <span style={{fontSize:12,fontWeight:600,letterSpacing:"0.14em",color:"#7c3aed"}}>{ticker}{ticker}{ticker}</span>
        </div>
      </div>

      {/* ── COPY BREAK ── */}
      <section style={{padding:"60px 24px",textAlign:"center"}}>
        <div style={{maxWidth:580,margin:"0 auto"}}>
          <p style={{fontSize:"clamp(22px,3.5vw,32px)",fontWeight:800,lineHeight:1.4,color:"#fff",marginBottom:12}}>
            "Most people will think <em style={{fontStyle:"normal",color:"rgba(255,255,255,0.4)"}}>'that's wild'</em> and go back to doing everything themselves."
          </p>
          <p style={{fontSize:18,color:"#f59e0b",fontWeight:700}}>The ones who don't? They're in Cohort 2 right now.</p>
          <button className="cta-btn" onClick={()=>setOpen(true)} style={{marginTop:32,fontSize:16,padding:"16px 32px"}}>
            Begin Application →
          </button>
        </div>
      </section>

      {/* ── FLEET ── */}
      <section style={{padding:"48px 24px 64px",maxWidth:820,margin:"0 auto"}}>
        <p style={{fontSize:11,color:"rgba(255,255,255,0.25)",letterSpacing:"0.12em",marginBottom:24,textAlign:"center",fontWeight:600}}>YOUR TEAM — DEPLOYED DAY ONE</p>
        <div className="agent-grid">
          {agents.map(a=>(
            <div key={a.name} className="agent">
              <Image src={`/assets/agents/${a.file}`} alt={a.name} width={56} height={56} style={{borderRadius:"50%"}} />
              <span>{a.name}</span>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:40}}>
          <button className="cta-btn" onClick={()=>setOpen(true)} style={{fontSize:16,padding:"16px 32px"}}>
            Begin Application →
          </button>
        </div>
      </section>

      {/* ── MODAL ── */}
      {open && (
        <div
          onClick={e=>{if(e.target===e.currentTarget)setOpen(false)}}
          style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",zIndex:1000,display:"flex",alignItems:"flex-end",justifyContent:"center",padding:"0 0 0"}}
        >
          <div style={{background:"#111",borderRadius:"20px 20px 0 0",padding:"36px 28px 48px",width:"100%",maxWidth:480,animation:"modalIn 0.3s ease",borderTop:"1px solid rgba(124,58,237,0.3)"}}>
            {/* Close */}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
              <div>
                <p style={{fontSize:20,fontWeight:800}}>Begin Application</p>
                <p style={{fontSize:13,color:"rgba(255,255,255,0.4)",marginTop:2}}>3 spots left in Cohort 3</p>
              </div>
              <button onClick={()=>setOpen(false)} style={{background:"rgba(255,255,255,0.08)",border:"none",color:"#fff",width:36,height:36,borderRadius:"50%",cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
            </div>

            <form onSubmit={submit} style={{display:"flex",flexDirection:"column",gap:12}}>
              <input
                placeholder="First Name"
                value={form.firstName}
                onChange={e=>setForm(f=>({...f,firstName:e.target.value}))}
                required
                autoFocus
              />
              <input
                placeholder="Phone Number"
                type="tel"
                value={form.phone}
                onChange={e=>setForm(f=>({...f,phone:e.target.value}))}
                required
              />
              <button className="submit-btn" type="submit" disabled={loading}>
                {loading ? "Sending you in..." : "Submit Application →"}
              </button>
            </form>
            <p style={{marginTop:12,fontSize:11,color:"rgba(255,255,255,0.2)",textAlign:"center",lineHeight:1.5}}>
              No spam. You'll hear from us within 24 hours.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
