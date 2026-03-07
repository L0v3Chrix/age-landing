"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0d0d0f; color: #e8e8e8; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .dot { width:8px;height:8px;border-radius:50%;background:#ef4444;display:inline-block;flex-shrink:0;animation:pulse 1.4s infinite; }
        .cta { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#0d0d0f;font-size:18px;font-weight:800;font-family:inherit;letter-spacing:-0.01em;padding:18px 36px;border-radius:10px;border:none;cursor:pointer;text-decoration:none;transition:transform 0.15s,background 0.15s; }
        .cta:hover { transform:translateY(-2px);background:#fbbf24; }
        .cta:active { transform:translateY(0); }
        @media(max-width:600px) {
          .h1 { font-size: 38px !important; }
          .sub { font-size: 17px !important; }
          .hero-pad { padding: 0 20px 52px !important; }
          .cta { width: 100%; font-size: 17px !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{position:"relative",minHeight:"100svh",display:"flex",flexDirection:"column"}}>
        <div style={{position:"absolute",inset:0,zIndex:0}}>
          <Image
            src="/assets/gate-hero.png"
            alt=""
            fill
            priority
            style={{objectFit:"cover",objectPosition:"center"}}
          />
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(13,13,15,0.4) 0%, rgba(13,13,15,0.3) 30%, rgba(13,13,15,0.8) 70%, #0d0d0f 100%)"}} />
        </div>

        {/* Nav */}
        <div style={{position:"relative",zIndex:10,padding:"22px 28px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:14,fontWeight:900,letterSpacing:"0.2em",color:"#fff"}}>AGE</span>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span className="dot" />
            <span style={{fontSize:12,color:"rgba(255,255,255,0.5)",letterSpacing:"0.06em"}}>COHORT 3 — 3 SPOTS</span>
          </div>
        </div>

        {/* Hero copy — bottom */}
        <div className="hero-pad" style={{position:"relative",zIndex:10,marginTop:"auto",padding:"0 32px 68px",maxWidth:660,animation:"fadeUp 0.8s ease both"}}>
          <p style={{fontSize:12,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:18}}>AGENT GROWTH ENGINE</p>
          <h1 className="h1" style={{fontSize:54,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.03em",color:"#fff",marginBottom:20}}>
            Your business running<br />
            the way you always<br />
            <span style={{color:"#f59e0b"}}>imagined it.</span>
          </h1>
          <p className="sub" style={{fontSize:19,color:"rgba(255,255,255,0.58)",lineHeight:1.6,marginBottom:36,maxWidth:460}}>
            No friction. No headache. No army of employees or a $5k/month agency. Just your vision, finally running.
          </p>
          <a className="cta" href="/apply">
            Let's See If We're a Fit →
          </a>
        </div>
      </section>

      {/* BELOW FOLD */}
      <section style={{padding:"80px 28px 96px",maxWidth:580,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:15,color:"#444",lineHeight:1.85,marginBottom:36}}>
          We're builders. We've been in this space a long time.<br />
          We've got our pulse right at the curve — and we're ready for what's coming next.
        </p>
        <p style={{fontSize:"clamp(26px,3.5vw,34px)",fontWeight:800,lineHeight:1.38,color:"#fff",letterSpacing:"-0.02em",marginBottom:16}}>
          We help cool people<br />we actually want to work with.
        </p>
        <p style={{fontSize:16,color:"#444",marginBottom:48,lineHeight:1.6}}>
          Not everyone gets in. That's not a pitch — we literally can't help everyone, so we choose carefully.
        </p>
        <a className="cta" href="/apply">
          Start the Conversation →
        </a>
      </section>
    </>
  );
}
