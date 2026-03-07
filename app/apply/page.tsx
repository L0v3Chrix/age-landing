"use client";
import { useState } from "react";

export default function Apply() {
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
        body { background: #0d0d0f; color: #e8e8e8; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; min-height: 100svh; }
        input { background:#1a1a1f;border:1.5px solid #252530;border-radius:10px;color:#fff;font-size:16px;font-family:inherit;padding:15px 16px;width:100%;outline:none;transition:border-color 0.2s; }
        input:focus { border-color:#f59e0b; }
        input::placeholder { color:#3a3a44; }
        .submit { background:#f59e0b;border:none;border-radius:10px;color:#0d0d0f;cursor:pointer;font-size:17px;font-weight:800;font-family:inherit;padding:17px;width:100%;transition:opacity 0.2s;letter-spacing:-0.01em; }
        .submit:hover { opacity:0.88; }
        .submit:disabled { opacity:0.4;cursor:not-allowed; }
      `}</style>

      <div style={{minHeight:"100svh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"48px 24px",maxWidth:420,margin:"0 auto"}}>
        <a href="/" style={{fontSize:13,fontWeight:900,letterSpacing:"0.2em",color:"#fff",textDecoration:"none",marginBottom:48,display:"block"}}>AGE</a>

        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.14em",color:"#f59e0b",marginBottom:12}}>COHORT 3 — 3 SPOTS</p>
        <h1 style={{fontSize:36,fontWeight:900,lineHeight:1.1,letterSpacing:"-0.03em",color:"#fff",marginBottom:12}}>Start the conversation.</h1>
        <p style={{fontSize:15,color:"#555",lineHeight:1.6,marginBottom:36}}>No pitch deck. Just a real talk to see if we're a fit.</p>

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
            inputMode="numeric"
            value={form.phone}
            onChange={e => setForm(f => ({...f, phone: e.target.value}))}
            required
          />
          <button className="submit" type="submit" disabled={loading}>
            {loading ? "Sending..." : "I'm In →"}
          </button>
        </form>

        <p style={{marginTop:16,fontSize:11,color:"#252530",textAlign:"center"}}>No spam. You'll hear from us within 24 hours.</p>
      </div>
    </>
  );
}
