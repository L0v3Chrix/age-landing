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

const tickerItems = "· AI OUTREACH · VOICE CALLS IN YOUR VOICE · CALENDAR BOOKING · CONTENT · SEO · LEAD NURTURING · 24/7 OPS · ZERO OVERHEAD · NO EMPLOYEES · NO AGENCY · NO BULLSHIT ·";

export default function Home() {
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
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; color: #fff; font-family: 'Inter', sans-serif; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        .dot { width:8px;height:8px;border-radius:50%;background:#ef4444;display:inline-block;animation:pulse 1.2s infinite;margin-right:6px; }
        .ticker-wrap { overflow:hidden;white-space:nowrap;background:#111;padding:10px 0; }
        .ticker-inner { display:inline-block;animation:ticker 18s linear infinite; }
        .bounce { animation:bounce 1.5s ease-in-out infinite; }
        input { background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#fff;font-size:15px;padding:12px 16px;width:100%;outline:none;transition:border 0.2s; }
        input:focus { border-color:rgba(124,58,237,0.7); }
        input::placeholder { color:#555; }
        .btn { background:linear-gradient(135deg,#7c3aed,#6d28d9);border:none;border-radius:8px;color:#f59e0b;cursor:pointer;font-size:16px;font-weight:700;letter-spacing:0.03em;padding:14px;width:100%;transition:opacity 0.2s; }
        .btn:hover { opacity:0.88; }
        .btn:disabled { opacity:0.5;cursor:not-allowed; }
        .agent { display:flex;flex-direction:column;align-items:center;gap:4px; }
        .agent img { border-radius:50%;border:2px solid transparent;transition:border 0.2s,box-shadow 0.2s; }
        .agent:hover img { border-color:#7c3aed;box-shadow:0 0 12px rgba(124,58,237,0.6); }
        .agent span { font-size:10px;color:#555;text-align:center; }
      `}</style>

      {/* HERO — full viewport, form above fold */}
      <section style={{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",overflow:"hidden"}}>
        {/* Background */}
        <div style={{position:"absolute",inset:0,zIndex:0}}>
          <Image src="/assets/gate-hero.png" alt="" fill style={{objectFit:"cover",objectPosition:"center"}} priority />
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.82) 60%, #080808 100%)"}} />
        </div>

        {/* Top bar */}
        <div style={{position:"absolute",top:0,left:0,right:0,zIndex:10,padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:13,fontWeight:800,letterSpacing:"0.15em",color:"#fff"}}>AGE</span>
          <span style={{fontSize:11,color:"#555",letterSpacing:"0.08em"}}>22 AGENTS · 5 DIVISIONS · 90 DAYS</span>
        </div>

        {/* Content */}
        <div style={{position:"relative",zIndex:10,maxWidth:520,margin:"0 auto",padding:"80px 24px 40px",textAlign:"center"}}>

          {/* Badge */}
          <div style={{display:"inline-flex",alignItems:"center",background:"rgba(124,58,237,0.15)",border:"1px solid rgba(124,58,237,0.35)",borderRadius:100,padding:"5px 14px",fontSize:11,letterSpacing:"0.1em",color:"#a78bfa",marginBottom:20,fontWeight:600}}>
            <span className="dot" />
            3 SPOTS · COHORT 3
          </div>

          {/* Headline — movie trailer pacing */}
          <div style={{marginBottom:16}}>
            <p style={{fontSize:"clamp(13px,1.8vw,15px)",color:"#6b7280",letterSpacing:"0.05em",marginBottom:8}}>YOU FILLED OUT A FORM.</p>
            <h1 style={{fontSize:"clamp(38px,5.5vw,60px)",fontWeight:900,lineHeight:1.05,letterSpacing:"-0.02em"}}>
              An AI called you<br />
              in <span style={{color:"#f59e0b"}}>his voice.</span><br />
              Booked his calendar.<br />
              <span style={{color:"#6b7280",fontSize:"0.65em",fontWeight:400}}>He was on a plane.</span>
            </h1>
          </div>

          <p style={{fontSize:14,color:"#6b7280",marginBottom:28,lineHeight:1.6}}>
            This isn't Synthflow. This isn't a chatbot.<br />
            AGE is 22 specialists who work 24/7 and have never asked for a raise.
          </p>

          {/* Form — ABOVE THE FOLD */}
          <form onSubmit={submit} style={{display:"flex",flexDirection:"column",gap:10}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              <input placeholder="First Name" value={form.firstName} onChange={e=>setForm(f=>({...f,firstName:e.target.value}))} required />
              <input placeholder="Phone Number" type="tel" value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} required />
            </div>
            <button className="btn" disabled={loading}>{loading ? "Sending you in..." : "Begin Application →"}</button>
          </form>

          <p style={{marginTop:10,fontSize:11,color:"#3f3f3f",lineHeight:1.5}}>
            No pitch decks. Just a real conversation — probably from an AI that sounds exactly like me. 😈
          </p>

          {/* Scroll indicator */}
          <div className="bounce" style={{marginTop:32,color:"#333",fontSize:20}}>↓</div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          <span style={{fontSize:11,fontWeight:600,letterSpacing:"0.12em",color:"#7c3aed"}}>{tickerItems}{tickerItems}</span>
        </div>
      </div>

      {/* COPY BREAK */}
      <section style={{padding:"48px 24px",textAlign:"center",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:"clamp(20px,3vw,28px)",fontWeight:700,lineHeight:1.4,color:"#fff"}}>
          "Most people will think <em style={{color:"#6b7280",fontStyle:"normal"}}>'that's wild'</em> and go back to their $3,000/month agency."
        </p>
        <p style={{marginTop:12,fontSize:16,color:"#f59e0b",fontWeight:600}}>The ones who don't? They're in Cohort 2 right now.</p>
      </section>

      {/* FLEET */}
      <section style={{padding:"32px 24px 48px",maxWidth:800,margin:"0 auto"}}>
        <p style={{fontSize:11,color:"#555",letterSpacing:"0.1em",marginBottom:20,textAlign:"center"}}>YOUR TEAM</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(11,1fr)",gap:12}}>
          {agents.map(a=>(
            <div key={a.name} className="agent">
              <Image src={`/assets/agents/${a.file}`} alt={a.name} width={52} height={52} style={{borderRadius:"50%"}} />
              <span>{a.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECOND CTA */}
      <section style={{padding:"32px 24px 64px",maxWidth:480,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:12,color:"#f59e0b",letterSpacing:"0.1em",marginBottom:8}}>STILL READING?</p>
        <p style={{fontSize:"clamp(22px,3vw,30px)",fontWeight:800,marginBottom:20}}>Good. That means you're serious.</p>
        <form onSubmit={submit} style={{display:"flex",flexDirection:"column",gap:10}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            <input placeholder="First Name" value={form.firstName} onChange={e=>setForm(f=>({...f,firstName:e.target.value}))} required />
            <input placeholder="Phone Number" type="tel" value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} required />
          </div>
          <button className="btn" disabled={loading}>{loading ? "Sending you in..." : "Begin Application →"}</button>
        </form>
      </section>
    </>
  );
}
