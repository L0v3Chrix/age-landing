"use client";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; }
        body {
          background: #0a0a0c;
          color: #fff;
          font-family: 'Inter', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.25} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .dot { width:9px;height:9px;border-radius:50%;background:#ef4444;display:inline-block;flex-shrink:0;animation:pulse 1.5s infinite; }
        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f59e0b;
          color: #0a0a0c;
          font-size: 18px;
          font-weight: 900;
          font-family: inherit;
          letter-spacing: -0.01em;
          padding: 18px 40px;
          border-radius: 10px;
          text-decoration: none;
          transition: transform 0.15s, background 0.15s;
          white-space: nowrap;
        }
        .cta:hover { transform: translateY(-2px); background: #fbbf24; }
        .cta:active { transform: translateY(0); }
        @media (max-width: 640px) {
          .cta { width: 100%; font-size: 17px; }
          .eyebrow { font-size: 11px !important; }
          .h1 { font-size: 40px !important; letter-spacing: -0.025em !important; }
          .sub { font-size: 18px !important; }
          .section-inner { padding: 64px 24px !important; }
          .divider-text { font-size: 22px !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{padding:"24px 32px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #141418"}}>
        <span style={{fontSize:14,fontWeight:900,letterSpacing:"0.2em",color:"#fff"}}>AGE</span>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span className="dot" />
          <span style={{fontSize:12,color:"#555",letterSpacing:"0.07em",fontWeight:600}}>COHORT 3 · 3 SPOTS LEFT</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{minHeight:"calc(100svh - 73px)",display:"flex",alignItems:"center",padding:"0 32px"}}>
        <div className="section-inner" style={{padding:"80px 0",maxWidth:700,width:"100%",animation:"fadeUp 0.7s ease both"}}>

          <p className="eyebrow" style={{fontSize:12,fontWeight:700,letterSpacing:"0.18em",color:"#f59e0b",marginBottom:28}}>
            FOR BUSINESS OWNERS WHO ARE READY.
          </p>

          <h1 className="h1" style={{fontSize:60,fontWeight:900,lineHeight:1.04,letterSpacing:"-0.03em",color:"#fff",marginBottom:28}}>
            You already know<br />
            what your business<br />
            could be.<br />
            <span style={{color:"#f59e0b"}}>You just needed<br />the right team.</span>
          </h1>

          <p className="sub" style={{fontSize:20,color:"rgba(255,255,255,0.55)",lineHeight:1.65,maxWidth:520,marginBottom:16}}>
            You've tried hiring. You've tried agencies. You've tried the tools. None of it ran the way you imagined.
          </p>
          <p style={{fontSize:18,color:"rgba(255,255,255,0.75)",lineHeight:1.65,maxWidth:520,marginBottom:44,fontWeight:500}}>
            AGE is 22 specialists working your business 24/7. Not software. Not an agency. What you've been looking for.
          </p>

          <div style={{display:"flex",flexDirection:"column",gap:14,maxWidth:360}}>
            <a className="cta" href="/apply">
              Let's See If We're a Fit →
            </a>
            <p style={{fontSize:12,color:"#333",lineHeight:1.5,paddingLeft:4}}>
              We're selective. You'll hear from us within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIVIDER STATEMENT ── */}
      <div style={{borderTop:"1px solid #141418",borderBottom:"1px solid #141418",padding:"48px 32px",textAlign:"center"}}>
        <p className="divider-text" style={{fontSize:28,fontWeight:800,lineHeight:1.4,color:"#fff",letterSpacing:"-0.02em",maxWidth:560,margin:"0 auto"}}>
          "Most people will read this,<br />
          <span style={{color:"#444"}}>think 'that's interesting,'<br />
          and go back to doing everything themselves."</span>
        </p>
        <p style={{marginTop:16,fontSize:16,color:"#f59e0b",fontWeight:700}}>The ones who don't? They're already inside.</p>
      </div>

      {/* ── SECOND CTA ── */}
      <section style={{padding:"80px 32px",textAlign:"center"}}>
        <div style={{maxWidth:480,margin:"0 auto"}}>
          <p style={{fontSize:13,fontWeight:700,letterSpacing:"0.14em",color:"#555",marginBottom:20}}>IF YOU'VE READ THIS FAR</p>
          <p style={{fontSize:"clamp(28px,4vw,38px)",fontWeight:900,lineHeight:1.15,letterSpacing:"-0.025em",color:"#fff",marginBottom:32}}>
            You're exactly who<br />we built this for.
          </p>
          <a className="cta" href="/apply" style={{display:"flex",maxWidth:340,margin:"0 auto"}}>
            Start the Conversation →
          </a>
        </div>
      </section>
    </>
  );
}
