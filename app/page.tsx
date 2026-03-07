"use client";
import { useState } from "react";
import Image from "next/image";

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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0d0d0f; color: #e8e8e8; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes modalIn { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .dot { width:8px;height:8px;border-radius:50%;background:#ef4444;display:inline-block;flex-shrink:0;animation:pulse 1.4s infinite; }

        .cta { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#0d0d0f;font-size:18px;font-weight:800;font-family:inherit;letter-spacing:-0.01em;padding:18px 36px;border-radius:10px;border:none;cursor:pointer;transition:transform 0.15s,background 0.15s; }
        .cta:hover { transform:translateY(-2px);background:#fbbf24; }
        .cta:active { transform:translateY(0); }

        input { background:#1a1a1f;border:1.5px solid #252530;border-radius:10px;color:#fff;font-size:16px;font-family:inherit;padding:15px 16px;width:100%;outline:none;transition:border-color 0.2s; }
        input:focus { border-color:#f59e0b; }
        input::placeholder { color:#3a3a44; }

        .submit { background:#f59e0b;border:none;border-radius:10px;color:#0d0d0f;cursor:pointer;font-size:17px;font-weight:800;font-family:inherit;padding:17px;width:100%;transition:opacity 0.2s;letter-spacing:-0.01em; }
        .submit:hover { opacity:0.88; }
        .submit:disabled { opacity:0.4;cursor:not-allowed; }

        @media(max-width:600px) {
          .h1 { font-size: 36px !important; }
          .sub { font-size: 17px !important; }
          .hero-content { padding: 0 20px 48px !important; }
        }
      `}</style>

      {/* ── HERO — full bleed image ── */}
      <section style={{position:"relative",minHeight:"100svh",display:"flex",flexDirection:"column"}}>

        {/* Image */}
        <div style={{position:"absolute",inset:0,zIndex:0}}>
          <Image
            src="/assets/gate-hero.png"
            alt=""
            fill
            priority
            style={{objectFit:"cover",objectPosition:"center 30%"}}
          />
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(13,13,15,0.35) 0%, rgba(13,13,15,0.2) 35%, rgba(13,13,15,0.75) 70%, #0d0d0f 100%)"}} />
        </div>

        {/* Nav */}
        <div style={{position:"relative",zIndex:10,padding:"22px 28px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:14,fontWeight:900,letterSpacing:"0.2em",color:"#fff"}}>AGE</span>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span className="dot" />
            <span style={{fontSize:12,color:"rgba(255,255,255,0.5)",letterSpacing:"0.06em"}}>COHORT 3 — 3 SPOTS</span>
          </div>
        </div>

        {/* Hero text — bottom of the image */}
        <div className="hero-content" style={{position:"relative",zIndex:10,marginTop:"auto",padding:"0 28px 64px",maxWidth:680,animation:"fadeUp 0.8s ease both"}}>
          <p style={{fontSize:12,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:20}}>AGENT GROWTH ENGINE</p>
          <h1 className="h1" style={{fontSize:52,fontWeight:900,lineHeight:1.08,letterSpacing:"-0.03em",color:"#fff",marginBottom:20}}>
            Your business running<br />
            the way you always<br />
            <span style={{color:"#f59e0b"}}>imagined it.</span>
          </h1>
          <p className="sub" style={{fontSize:18,color:"rgba(255,255,255,0.6)",lineHeight:1.6,marginBottom:36,maxWidth:480}}>
            No friction. No headache. No bloated agency eating your margin. Just your vision, finally running.
          </p>
          <button className="cta" onClick={() => setOpen(true)}>
            Let's See If We're a Fit →
          </button>
        </div>
      </section>

      {/* ── BELOW FOLD ── */}
      <section style={{padding:"80px 28px",maxWidth:620,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:14,color:"#555",lineHeight:1.8,marginBottom:32}}>
          We're builders. We've been in this space a long time. We've got our pulse right at the curve and we're ready for what's coming next.
        </p>
        <p style={{fontSize:"clamp(24px,3.5vw,32px)",fontWeight:800,lineHeight:1.4,color:"#fff",letterSpacing:"-0.02em",marginBottom:16}}>
          We help cool people<br />we actually want to work with.
        </p>
        <p style={{fontSize:16,color:"#555",marginBottom:44}}>
          Not everyone gets in. That's not a pitch — we literally can't help everyone, so we choose.
        </p>
        <button className="cta" onClick={() => setOpen(true)}>
          Start the Conversation →
        </button>
      </section>

      {/* ── MODAL — centered, keyboard-safe ── */}
      {open && (
        <div
          onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}
          style={{
            position:"fixed",inset:0,
            background:"rgba(0,0,0,0.8)",
            zIndex:1000,
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            padding:"20px",
            backdropFilter:"blur(6px)",
            overflowY:"auto"
          }}
        >
          <div style={{
            background:"#13131a",
            borderRadius:20,
            padding:"36px 28px",
            width:"100%",
            maxWidth:420,
            animation:"modalIn 0.25s ease",
            border:"1px solid #1e1e28",
            position:"relative"
          }}>
            <button
              onClick={() => setOpen(false)}
              style={{position:"absolute",top:16,right:16,background:"#1e1e28",border:"none",color:"#555",width:32,height:32,borderRadius:"50%",cursor:"pointer",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"}}
            >✕</button>

            <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.14em",color:"#f59e0b",marginBottom:8}}>AGENT GROWTH ENGINE</p>
            <p style={{fontSize:22,fontWeight:800,color:"#fff",letterSpacing:"-0.02em",marginBottom:6}}>Start the conversation.</p>
            <p style={{fontSize:13,color:"#555",marginBottom:28,lineHeight:1.5}}>3 spots left in Cohort 3. No pitch deck. Just a real talk to see if we're a fit.</p>

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
            <p style={{marginTop:14,fontSize:11,color:"#252530",textAlign:"center"}}>No spam. You'll hear from us within 24 hours.</p>
          </div>
        </div>
      )}
    </>
  );
}
