"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080608; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes orbPulse { 0%,100%{filter:brightness(1) drop-shadow(0 0 16px rgba(245,158,11,0.6))} 50%{filter:brightness(1.5) drop-shadow(0 0 36px rgba(245,158,11,1))} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .dot { width:8px;height:8px;border-radius:50%;background:#ef4444;display:inline-block;flex-shrink:0;animation:pulse 1.5s infinite; }
        .cta { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#080608;font-size:18px;font-weight:900;font-family:inherit;letter-spacing:-0.01em;padding:18px 40px;border-radius:10px;text-decoration:none;transition:transform 0.15s,background 0.15s; }
        .cta:hover { transform:translateY(-2px);background:#fbbf24; }
        .cta:active { transform:translateY(0); }
        @media(max-width:640px) {
          .cta { width:100%;font-size:17px;padding:17px 24px; }
          .h1 { font-size:38px !important;line-height:1.1 !important; }
          .sub { font-size:17px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{padding:"20px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #141418"}}>
        <span style={{fontSize:14,fontWeight:900,letterSpacing:"0.2em",color:"#fff"}}>AGE</span>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span className="dot" />
          <span style={{fontSize:12,color:"rgba(255,255,255,0.4)",letterSpacing:"0.07em",fontWeight:600}}>COHORT 3 · 3 SPOTS</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{position:"relative",minHeight:"100svh",display:"flex",alignItems:"center",background:"#080608"}}>
        <div style={{position:"absolute",inset:0,zIndex:0}}>
          <Image src="/assets/gate-hero.png" alt="" fill priority style={{objectFit:"cover",objectPosition:"center 35%"}} />
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(8,6,8,0.55) 0%,rgba(8,6,8,0.45) 40%,rgba(8,6,8,0.88) 80%,#080608 100%)"}} />
        </div>
        <div style={{position:"relative",zIndex:10,padding:"80px 24px 48px",maxWidth:640,width:"100%",animation:"fadeUp 0.75s ease both"}}>
          <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:14}}>AGENT GENESIS ENGINE</p>
          <h1 className="h1" style={{fontSize:52,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.03em",color:"#fff",marginBottom:16}}>
            We hatch the agents<br />your business<br /><span style={{color:"#f59e0b"}}>actually needs.</span>
          </h1>
          <p className="sub" style={{fontSize:18,color:"#fff",lineHeight:1.55,maxWidth:480,marginBottom:10,fontWeight:600}}>
            Not a pre-packaged team. Not a tool. Not an agency.
          </p>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.82)",lineHeight:1.6,maxWidth:480,marginBottom:28}}>
            You tell us about your business. We build your agents from scratch — custom-hatched, context-engineered, leveled for how you work.
          </p>
          <a className="cta" href="/apply">Start Your Genesis →</a>
          <p style={{marginTop:10,fontSize:12,color:"rgba(255,255,255,0.25)"}}>We're selective. You'll hear from us within 24 hours.</p>
        </div>
      </section>

      {/* PROTOCOL */}
      <section style={{padding:"36px 24px 32px",maxWidth:580,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.18em",color:"#f59e0b",marginBottom:20}}>THE PROTOCOL</p>
        {[
          { n:"01", title:"Tell Us Your Story", body:"No forms. A real conversation about your business, your gaps, and where you want to go." },
          { n:"02", title:"We Design Your Team", body:"We map exactly which agents your operation needs. Custom roster, built for your business and no one else's." },
          { n:"03", title:"The Hatching Protocol", body:"Your agents are spawned, context-engineered, and begin leveling. They learn your business from the inside out." },
          { n:"04", title:"Autonomous in 90 Days", body:"Front end and back end running without you having to run it. The way you always imagined." },
        ].map(s => (
          <div key={s.n} style={{display:"flex",gap:16,marginBottom:22,alignItems:"flex-start"}}>
            <span style={{fontSize:10,fontWeight:900,color:"#f59e0b",letterSpacing:"0.1em",minWidth:22,paddingTop:4}}>{s.n}</span>
            <div>
              <p style={{fontSize:16,fontWeight:800,color:"#fff",marginBottom:3,letterSpacing:"-0.01em"}}>{s.title}</p>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.65}}>{s.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* DIVIDER — orb + cars line */}
      <div style={{borderTop:"1px solid #1a1a1a",borderBottom:"1px solid #1a1a1a",padding:"32px 24px",textAlign:"center",background:"#0c0a0c"}}>
        <img
          src="/assets/orb-graphic.png"
          alt=""
          width={80}
          height={80}
          style={{display:"block",margin:"0 auto 20px",animation:"orbPulse 2s ease-in-out infinite"}}
        />
        <p style={{fontSize:"clamp(21px,3.5vw,28px)",fontWeight:900,lineHeight:1.35,color:"#fff",letterSpacing:"-0.02em",maxWidth:460,margin:"0 auto"}}>
          Cars drive themselves now.
        </p>
        <p style={{fontSize:"clamp(21px,3.5vw,28px)",fontWeight:900,lineHeight:1.35,color:"#f59e0b",letterSpacing:"-0.02em",maxWidth:460,margin:"2px auto 0"}}>
          Why is your business still manual?
        </p>
      </div>

      {/* FINAL CTA */}
      <section style={{padding:"36px 24px 60px",textAlign:"center"}}>
        <div style={{maxWidth:420,margin:"0 auto"}}>
          <p style={{fontSize:"clamp(26px,4vw,38px)",fontWeight:900,lineHeight:1.1,letterSpacing:"-0.025em",color:"#fff",marginBottom:12}}>
            You're exactly who<br />we built this for.
          </p>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.65)",marginBottom:28,lineHeight:1.6}}>
            Builders. Owners. People who've been waiting for the real thing.
          </p>
          <a className="cta" href="/apply" style={{display:"flex",maxWidth:340,margin:"0 auto"}}>
            Start Your Genesis →
          </a>
        </div>
      </section>
    </>
  );
}
