"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080608; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        @keyframes dot { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes orbPulse { 0%,100%{filter:brightness(1) drop-shadow(0 0 16px rgba(245,158,11,0.5))} 50%{filter:brightness(1.5) drop-shadow(0 0 36px rgba(245,158,11,0.95))} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        .dot { width:8px;height:8px;border-radius:50%;background:#ef4444;display:inline-block;flex-shrink:0;animation:dot 1.5s infinite; }
        .cta { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#080608;font-size:18px;font-weight:900;font-family:inherit;letter-spacing:-0.01em;padding:17px 36px;border-radius:10px;text-decoration:none;transition:transform 0.15s,background 0.15s; }
        .cta:hover { transform:translateY(-2px);background:#fbbf24; }
        .cta:active { transform:translateY(0); }
        @media(max-width:640px) {
          .cta { width:100%;font-size:17px;padding:16px 24px; }
          .h1 { font-size:36px !important;line-height:1.1 !important; }
          .sub { font-size:16px !important; }
          .body { font-size:15px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{padding:"18px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #141418",position:"sticky",top:0,zIndex:100,background:"rgba(8,6,8,0.92)",backdropFilter:"blur(12px)"}}>
        <span style={{fontSize:14,fontWeight:900,letterSpacing:"0.2em"}}>AGE</span>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span className="dot" />
          <span style={{fontSize:11,color:"rgba(255,255,255,0.4)",letterSpacing:"0.08em",fontWeight:600}}>COHORT 3 · 3 SPOTS LEFT</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{position:"relative",minHeight:"100svh",display:"flex",alignItems:"center",background:"#080608"}}>
        <div style={{position:"absolute",inset:0,zIndex:0}}>
          <Image src="/assets/gate-hero.png" alt="" fill priority style={{objectFit:"cover",objectPosition:"center 35%"}} />
          <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(8,6,8,0.82) 0%,rgba(8,6,8,0.55) 50%,rgba(8,6,8,0.9) 100%)"}} />
        </div>
        <div style={{position:"relative",zIndex:10,padding:"72px 24px 48px",maxWidth:600,width:"100%",animation:"fadeUp 0.7s ease both"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.22em",color:"#f59e0b",marginBottom:16}}>AGENT GENESIS ENGINE</p>
          <h1 className="h1" style={{fontSize:50,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.03em",color:"#fff",marginBottom:18}}>
            We hatch the agents<br />your business<br />
            <span style={{color:"#f59e0b"}}>actually needs.</span>
          </h1>
          <p className="sub" style={{fontSize:17,color:"#fff",fontWeight:700,lineHeight:1.5,maxWidth:460,marginBottom:8}}>
            Not a pre-packaged team. Not a tool. Not an agency.
          </p>
          <p className="body" style={{fontSize:16,color:"rgba(255,255,255,0.75)",lineHeight:1.65,maxWidth:460,marginBottom:32}}>
            Tell us about your business. We build your custom agent team from scratch — hatched, leveled, and engineered around how you work.
          </p>
          <a className="cta" href="/apply">Start Your Genesis →</a>
          <p style={{marginTop:10,fontSize:11,color:"rgba(255,255,255,0.22)"}}>Selective by design. You'll hear from us in 24 hours.</p>
        </div>
      </section>

      {/* PROTOCOL */}
      <section style={{padding:"40px 24px 36px",maxWidth:560,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:24}}>THE PROTOCOL</p>
        {[
          { n:"01", title:"Tell Us Your Story",     body:"A real conversation. No forms, no decks." },
          { n:"02", title:"We Design Your Team",    body:"Custom agent roster mapped to your exact operation." },
          { n:"03", title:"The Hatching Protocol",  body:"Agents are spawned, leveled, and engineered for your business." },
          { n:"04", title:"Autonomous in 90 Days",  body:"Front and back end running. The way you always imagined." },
        ].map(s => (
          <div key={s.n} style={{display:"flex",gap:16,marginBottom:20,alignItems:"flex-start"}}>
            <span style={{fontSize:10,fontWeight:900,color:"#f59e0b",letterSpacing:"0.1em",minWidth:22,paddingTop:3,flexShrink:0}}>{s.n}</span>
            <div>
              <p style={{fontSize:15,fontWeight:800,color:"#fff",marginBottom:2,letterSpacing:"-0.01em"}}>{s.title}</p>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.45)",lineHeight:1.6}}>{s.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ORB DIVIDER */}
      <div style={{borderTop:"1px solid #181618",borderBottom:"1px solid #181618",padding:"32px 24px",textAlign:"center",background:"#0b090b"}}>
        <img src="/assets/orb-graphic.png" alt="" width={72} height={72}
          style={{display:"block",margin:"0 auto 18px",animation:"orbPulse 2s ease-in-out infinite"}} />
        <p style={{fontSize:"clamp(20px,3.5vw,27px)",fontWeight:900,lineHeight:1.35,color:"#fff",letterSpacing:"-0.02em"}}>
          Cars drive themselves now.
        </p>
        <p style={{fontSize:"clamp(20px,3.5vw,27px)",fontWeight:900,lineHeight:1.35,color:"#f59e0b",letterSpacing:"-0.02em",marginBottom:0}}>
          Why is your business still manual?
        </p>
      </div>

      {/* FINAL CTA */}
      <section style={{padding:"40px 24px 64px",textAlign:"center"}}>
        <div style={{maxWidth:400,margin:"0 auto"}}>
          <p style={{fontSize:"clamp(26px,4vw,36px)",fontWeight:900,lineHeight:1.1,letterSpacing:"-0.025em",color:"#fff",marginBottom:10}}>
            You're exactly who<br />we built this for.
          </p>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.55)",marginBottom:26,lineHeight:1.55}}>
            Builders. Owners. People ready for the real thing.
          </p>
          <a className="cta" href="/apply" style={{display:"flex",maxWidth:320,margin:"0 auto"}}>
            Start Your Genesis →
          </a>
        </div>
      </section>
    </>
  );
}
