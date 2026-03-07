"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080608; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

        .dot { width:8px;height:8px;border-radius:50%;background:#ef4444;display:inline-block;flex-shrink:0;animation:pulse 1.5s infinite; }

        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f59e0b;
          color: #080608;
          font-size: 18px;
          font-weight: 900;
          font-family: inherit;
          letter-spacing: -0.01em;
          padding: 18px 40px;
          border-radius: 10px;
          text-decoration: none;
          transition: transform 0.15s, background 0.15s;
        }
        .cta:hover { transform: translateY(-2px); background: #fbbf24; }
        .cta:active { transform: translateY(0); }

        @media (max-width: 640px) {
          .cta { width: 100%; font-size: 17px; padding: 17px 24px; }
          .h1 { font-size: 38px !important; line-height: 1.1 !important; }
          .sub { font-size: 17px !important; }
          .below { padding: 64px 24px !important; }
          .proof-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{position:"relative",minHeight:"100svh",display:"flex",flexDirection:"column",background:"#080608"}}>

        {/* Genesis image — upper half */}
        <div style={{position:"absolute",top:0,left:0,right:0,height:"65%",zIndex:0}}>
          <Image
            src="/assets/gate-hero.png"
            alt=""
            fill
            priority
            style={{objectFit:"cover",objectPosition:"center 40%"}}
          />
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(8,6,8,0.15) 0%, rgba(8,6,8,0.0) 30%, rgba(8,6,8,1) 100%)"}} />
        </div>

        {/* Nav */}
        <nav style={{position:"relative",zIndex:10,padding:"24px 32px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:14,fontWeight:900,letterSpacing:"0.2em",color:"#fff"}}>AGE</span>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span className="dot" />
            <span style={{fontSize:12,color:"rgba(255,255,255,0.45)",letterSpacing:"0.07em",fontWeight:600}}>COHORT 3 · 3 SPOTS</span>
          </div>
        </nav>

        {/* Copy — sits below the image center */}
        <div style={{position:"relative",zIndex:10,marginTop:"auto",padding:"0 32px 64px",maxWidth:640,animation:"fadeUp 0.75s ease both"}}>

          <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>
            AGENT GENESIS ENGINE
          </p>

          <h1 className="h1" style={{fontSize:54,fontWeight:900,lineHeight:1.06,letterSpacing:"-0.03em",color:"#fff",marginBottom:22}}>
            We hatch the agents<br />
            your business<br />
            <span style={{color:"#f59e0b"}}>actually needs.</span>
          </h1>

          <p className="sub" style={{fontSize:19,color:"rgba(255,255,255,0.55)",lineHeight:1.65,maxWidth:500,marginBottom:16}}>
            Not a pre-packaged team. Not a tool. Not an agency.
          </p>
          <p style={{fontSize:18,color:"rgba(255,255,255,0.8)",fontWeight:500,lineHeight:1.65,maxWidth:500,marginBottom:40}}>
            You tell us about your business. We build your agents from scratch — custom-hatched for your exact operation, leveled and context-engineered for how you work.
          </p>

          <a className="cta" href="/apply">
            Start Your Genesis →
          </a>
          <p style={{marginTop:14,fontSize:12,color:"#333"}}>We're selective. You'll hear from us within 24 hours.</p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="below" style={{padding:"80px 32px",maxWidth:640,margin:"0 auto"}}>

        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.18em",color:"#f59e0b",marginBottom:32}}>THE PROTOCOL</p>

        {[
          { n:"01", title:"Tell Us Your Story", body:"No forms. A real conversation about your business, your gaps, and where you want to go." },
          { n:"02", title:"We Design Your Team", body:"We map exactly which agents your operation needs. Custom roster, built for your business and no one else's." },
          { n:"03", title:"The Hatching Protocol", body:"Your agents are spawned, context-engineered, and begin leveling. They learn your business from the inside out." },
          { n:"04", title:"Autonomous in 90 Days", body:"Front end and back end of your business, running without you having to run it. The way you always imagined." },
        ].map(step => (
          <div key={step.n} style={{display:"flex",gap:24,marginBottom:40,alignItems:"flex-start"}}>
            <span style={{fontSize:12,fontWeight:900,color:"#f59e0b",letterSpacing:"0.1em",minWidth:28,paddingTop:3}}>{step.n}</span>
            <div>
              <p style={{fontSize:18,fontWeight:800,color:"#fff",marginBottom:6,letterSpacing:"-0.01em"}}>{step.title}</p>
              <p style={{fontSize:15,color:"#555",lineHeight:1.7}}>{step.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── DIVIDER ── */}
      <div style={{borderTop:"1px solid #141418",borderBottom:"1px solid #141418",padding:"48px 32px",textAlign:"center"}}>
        <p style={{fontSize:"clamp(22px,3vw,30px)",fontWeight:800,lineHeight:1.4,color:"#fff",letterSpacing:"-0.02em",maxWidth:520,margin:"0 auto"}}>
          "Most people will think{" "}
          <span style={{color:"#333"}}>'that's interesting'</span>
          {" "}and go back to doing everything themselves."
        </p>
        <p style={{marginTop:14,fontSize:16,color:"#f59e0b",fontWeight:700}}>The ones who don't? They're already inside.</p>
      </div>

      {/* ── SECOND CTA ── */}
      <section style={{padding:"80px 32px 96px",textAlign:"center"}}>
        <div style={{maxWidth:480,margin:"0 auto"}}>
          <p style={{fontSize:13,fontWeight:700,letterSpacing:"0.14em",color:"#333",marginBottom:20}}>IF YOU'VE READ THIS FAR</p>
          <p style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:900,lineHeight:1.12,letterSpacing:"-0.025em",color:"#fff",marginBottom:12}}>
            You're exactly who<br />we built this for.
          </p>
          <p style={{fontSize:16,color:"#555",marginBottom:40,lineHeight:1.6}}>
            Builders. Owners. People who've been waiting for the real thing.
          </p>
          <a className="cta" href="/apply" style={{display:"flex",maxWidth:360,margin:"0 auto"}}>
            Start Your Genesis →
          </a>
        </div>
      </section>
    </>
  );
}
