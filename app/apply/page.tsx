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
        html, body { height: 100%; background: #080608; }
        body { font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; color: #fff; }
        input {
          background: #111010;
          border: 1.5px solid #1e1c1e;
          border-radius: 10px;
          color: #fff;
          font-size: 16px;
          font-family: inherit;
          padding: 15px 16px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        input:focus { border-color: #f59e0b; background: #151315; }
        input::placeholder { color: #333; }
        .submit {
          background: #f59e0b;
          border: none;
          border-radius: 10px;
          color: #080608;
          cursor: pointer;
          font-size: 17px;
          font-weight: 900;
          font-family: inherit;
          padding: 17px;
          width: 100%;
          letter-spacing: -0.01em;
          transition: opacity 0.2s, transform 0.15s;
        }
        .submit:hover { opacity: 0.88; transform: translateY(-1px); }
        .submit:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
      `}</style>

      <div style={{minHeight:"100svh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"48px 24px",maxWidth:400,margin:"0 auto"}}>

        <a href="/" style={{fontSize:13,fontWeight:900,letterSpacing:"0.2em",color:"#fff",textDecoration:"none",marginBottom:44,display:"block"}}>← AGE</a>

        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:10}}>COHORT 3 · 3 SPOTS LEFT</p>
        <h1 style={{fontSize:34,fontWeight:900,lineHeight:1.1,letterSpacing:"-0.03em",color:"#fff",marginBottom:10}}>Start Your Genesis.</h1>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.6)",lineHeight:1.6,marginBottom:32}}>
          A real conversation to see if we're a fit. No pitch decks. No agencies.
        </p>

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
            inputMode="tel"
            value={form.phone}
            onChange={e => setForm(f => ({...f, phone: e.target.value}))}
            required
          />
          <button className="submit" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Begin My Genesis →"}
          </button>
        </form>

        <p style={{marginTop:14,fontSize:11,color:"rgba(255,255,255,0.2)",textAlign:"center"}}>
          You'll hear from us within 24 hours.
        </p>
      </div>
    </>
  );
}
