"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const phases = [
  {
    num: "01",
    name: "Hatch",
    sub: "Your first agent is born.",
    body: "We interview you. We study your business. We find the one thing eating your time or killing your growth — and we build a custom agent around it. Not a template. Not a package. Yours. Built for your workflow, your voice, your problem.",
    detail: "Most people think they need 10 agents on day one. They don't. They need one agent that actually works. That's the genesis.",
  },
  {
    num: "02",
    name: "Learn",
    sub: "You become the boss.",
    body: "We teach you how to work with your agent. How to train it when it's off. How to correct it. How to fire it if it underperforms. You're not a user of this tool — you're its operator. This is a new kind of working relationship and we walk you through every part of it.",
    detail: "This is where most AI tools fail you. They hand you a product and disappear. We hand you a teammate and teach you how to lead them.",
  },
  {
    num: "03",
    name: "Grow",
    sub: "One becomes a team.",
    body: "Your first agent proves itself. You see the hours come back. The revenue move. Then you hatch another. And another. Each one custom. Each one solving a real problem. Not a pre-packaged division — a team that evolves with your business.",
    detail: "There's no menu to order from. Your second agent emerges from what your first one reveals. That's the intelligence of the Genesis process.",
  },
  {
    num: "04",
    name: "Empire",
    sub: "It runs without you running it.",
    body: "Your agents coordinate with each other. They hand off work. They run overnight. You show up to the output. Not the process. You become the visionary your business always needed you to be — because everything else has a home now.",
    detail: "This isn't a dream state. It's a destination. And we know the exact path to get there because we built one ourselves.",
  },
];

export default function OfferPage() {
  const router = useRouter();
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #080608; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .live-dot { width:6px;height:6px;border-radius:50%;background:#f59e0b;display:inline-block;animation:blink 2s infinite;flex-shrink:0; }
        .cta-btn { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#080608;font-size:18px;font-weight:900;font-family:inherit;padding:18px 44px;border-radius:12px;text-decoration:none;border:none;cursor:pointer;transition:transform 0.15s,background 0.15s;letter-spacing:-0.01em; }
        .cta-btn:hover { transform:translateY(-3px);background:#fbbf24; }
        .phase-num { font-size:11px;font-weight:900;letter-spacing:0.2em;color:#f59e0b; }
        hr.dim { border:none;border-top:1px solid #141414;margin:0; }
        @media(max-width:640px) {
          .cta-btn { width:100%;font-size:16px; }
          .hero-h1 { font-size:36px !important; }
          .section-h2 { font-size:28px !important; }
          .phase-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #0f0f0f",background:"rgba(8,6,8,0.98)",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(16px)"}}>
        <Link href="/" style={{fontSize:13,fontWeight:900,letterSpacing:"0.2em",color:"#fff",textDecoration:"none"}}>AGE</Link>
        <button onClick={() => router.push("/apply")} style={{background:"transparent",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.7)",fontSize:12,fontWeight:700,padding:"8px 18px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",letterSpacing:"0.04em"}}>Begin Genesis →</button>
      </nav>

      {/* HERO */}
      <section style={{padding:"80px 24px 80px",maxWidth:760,margin:"0 auto",animation:"fadeUp 0.7s ease both"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:24}}>
          <span className="live-dot" />
          <span style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"rgba(255,255,255,0.35)"}}>AGENT GENESIS ENGINE</span>
        </div>

        <h1 className="hero-h1" style={{fontSize:56,fontWeight:900,lineHeight:1.03,letterSpacing:"-0.04em",color:"#fff",marginBottom:24}}>
          We don't sell you<br />a team of agents.<br />
          <span style={{color:"#f59e0b"}}>We hatch the ones<br />you actually need.</span>
        </h1>

        <p style={{fontSize:18,color:"rgba(255,255,255,0.65)",lineHeight:1.75,maxWidth:580,marginBottom:0}}>
          Every business has different bottlenecks. Different gaps. Different things that are eating time, killing deals, or keeping the founder stuck in the weeds. A pre-packaged team of 22 agents doesn't fix that. A custom-built one does.
        </p>
      </section>

      <hr className="dim" />

      {/* THE PROBLEM */}
      <section style={{padding:"72px 24px",maxWidth:760,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>THE HONEST TRUTH</p>
        <h2 className="section-h2" style={{fontSize:38,fontWeight:900,lineHeight:1.1,letterSpacing:"-0.03em",color:"#fff",marginBottom:20}}>
          Most AI tools give you access.<br />Nobody gives you <em style={{fontStyle:"italic"}}>ownership.</em>
        </h2>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.6)",lineHeight:1.8,marginBottom:16}}>
          You've tried the tools. You've paid for the subscriptions. Maybe you even hired someone to "do AI." But you still don't have a team. You have a collection of tabs.
        </p>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.6)",lineHeight:1.8}}>
          The difference between someone winning with AI and someone just using it is simple: ownership. Knowing who's doing what. Being able to train, redirect, replace. Having agents that work while you don't. That's not access — that's a workforce. And that's what we build.
        </p>
      </section>

      <hr className="dim" />

      {/* THE JOURNEY */}
      <section style={{padding:"72px 24px",maxWidth:760,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:12}}>THE GENESIS JOURNEY</p>
        <h2 className="section-h2" style={{fontSize:38,fontWeight:900,lineHeight:1.1,letterSpacing:"-0.03em",color:"#fff",marginBottom:48}}>
          Every empire starts<br />with a single genesis.
        </h2>

        <div style={{position:"relative"}}>
          {/* Vertical line */}
          <div style={{position:"absolute",left:20,top:0,bottom:0,width:1,background:"linear-gradient(to bottom, #f59e0b, rgba(245,158,11,0.05))",display:"none"}} />

          {phases.map((p, i) => (
            <div key={i} style={{marginBottom: i < phases.length - 1 ? 56 : 0}}>
              <div style={{display:"flex",gap:24,alignItems:"flex-start"}}>
                {/* Number column */}
                <div style={{flexShrink:0,width:48}}>
                  <div style={{width:48,height:48,borderRadius:"50%",background: i===0 ? "#f59e0b" : "#0f0d0f",border: i===0 ? "none" : "1px solid #1e1c1e",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <span style={{fontSize:13,fontWeight:900,color: i===0 ? "#080608" : "#f59e0b"}}>{p.num}</span>
                  </div>
                </div>
                {/* Content */}
                <div style={{flex:1,paddingTop:8}}>
                  <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:6}}>{p.name.toUpperCase()}</p>
                  <h3 style={{fontSize:26,fontWeight:900,color:"#fff",letterSpacing:"-0.02em",marginBottom:14,lineHeight:1.2}}>{p.sub}</h3>
                  <p style={{fontSize:15,color:"rgba(255,255,255,0.65)",lineHeight:1.75,marginBottom:12}}>{p.body}</p>
                  <p style={{fontSize:14,color:"rgba(255,255,255,0.35)",lineHeight:1.7,fontStyle:"italic"}}>{p.detail}</p>
                </div>
              </div>
              {i < phases.length - 1 && (
                <div style={{marginLeft:24,marginTop:20,marginBottom:0,borderLeft:"1px dashed rgba(245,158,11,0.15)",height:36}} />
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="dim" />

      {/* HOW IT WORKS */}
      <section style={{padding:"72px 24px",maxWidth:760,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>THE HATCHING PROTOCOL</p>
        <h2 className="section-h2" style={{fontSize:38,fontWeight:900,lineHeight:1.1,letterSpacing:"-0.03em",color:"#fff",marginBottom:16}}>
          Here's exactly what happens<br />when you click the button.
        </h2>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.5)",marginBottom:40,lineHeight:1.7}}>
          No onboarding forms. No 90-minute demo calls. We start by actually understanding your business.
        </p>

        {[
          { step:"1", title:"The Interview", desc:"You get a short text-based interview. 10 questions. 10 minutes. We learn what you do, what's breaking, where the money is, and what you've already tried." },
          { step:"2", title:"The Analysis", desc:"We research your business, your market, your competitors. We find the exact bottleneck that's holding the most revenue hostage. Then we design the agent that breaks it." },
          { step:"3", title:"The Genesis", desc:"Your first agent is built. Named. Given a purpose, a voice, and a scope. We walk you through it. You meet your first teammate." },
          { step:"4", title:"The Training", desc:"We teach you how to work with them. How to give direction. How to course-correct. How to know when they're performing and when they need to be replaced." },
          { step:"5", title:"The Expansion", desc:"Once your first agent proves itself, we hatch the next one together. And the one after that. Your team grows from your results — not from a menu." },
        ].map((s, i) => (
          <div key={i} style={{display:"flex",gap:20,padding:"20px 0",borderBottom: i < 4 ? "1px solid #0f0f0f" : "none",alignItems:"flex-start"}}>
            <div style={{width:28,height:28,borderRadius:6,background:"rgba(245,158,11,0.1)",border:"1px solid rgba(245,158,11,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>
              <span style={{fontSize:11,fontWeight:900,color:"#f59e0b"}}>{s.step}</span>
            </div>
            <div>
              <p style={{fontSize:15,fontWeight:800,color:"#fff",marginBottom:6}}>{s.title}</p>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.5)",lineHeight:1.7}}>{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <hr className="dim" />

      {/* NOT SAAS */}
      <section style={{padding:"72px 24px",maxWidth:760,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>THIS IS NOT A SOFTWARE SUBSCRIPTION</p>
        <h2 className="section-h2" style={{fontSize:38,fontWeight:900,lineHeight:1.1,letterSpacing:"-0.03em",color:"#fff",marginBottom:20}}>
          We're not selling you seats.<br />We're hatching your team.
        </h2>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.6)",lineHeight:1.8,marginBottom:16}}>
          There's no dashboard to log into. No features to unlock. No pricing tier to upgrade. You get a real AI team — agents that live in your workflow, know your business, and work on your behalf. Built for you. Owned by you.
        </p>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.6)",lineHeight:1.8}}>
          We're also not a one-and-done agency. This is a relationship. We hatch your agents, train you, watch the system run, and expand it as your business evolves. Think of us as the people who built your team and stay on as coaches.
        </p>

        <div style={{marginTop:40,display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}} className="phase-grid">
          {[
            ["❌ Not a SaaS tool", "✅ A custom-built AI team"],
            ["❌ Not a template package", "✅ Agents built for your business"],
            ["❌ Not a one-time build", "✅ An ongoing working relationship"],
            ["❌ Not 22 agents by default", "✅ Exactly the agents you need"],
          ].map(([no, yes], i) => (
            <div key={i} style={{background:"#0c0a0c",border:"1px solid #1a1a1a",borderRadius:10,padding:"16px"}}>
              <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:6}}>{no}</p>
              <p style={{fontSize:13,fontWeight:700,color:"#fff"}}>{yes}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="dim" />

      {/* PROOF */}
      <section style={{padding:"72px 24px",maxWidth:760,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>THIS ALREADY HAPPENED</p>
        <h2 className="section-h2" style={{fontSize:38,fontWeight:900,lineHeight:1.1,letterSpacing:"-0.03em",color:"#fff",marginBottom:40}}>
          We built this for ourselves first.
        </h2>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.6)",lineHeight:1.8,marginBottom:16}}>
          Everything in this system — the hatching protocol, the training methodology, the team coordination, the overnight autonomous work — we built it and ran it on our own business first. For 3 years. Before we offered it to anyone else.
        </p>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.6)",lineHeight:1.8}}>
          We know what it feels like to show up to work done that you didn't do. To wake up to calls already booked. To have your agents hand off work to each other while you sleep. We're not selling a theory. We're handing you the keys to something we already drive.
        </p>
      </section>

      {/* FINAL CTA */}
      <section style={{padding:"72px 24px 100px",background:"#0a080a",borderTop:"1px solid #141414"}}>
        <div style={{maxWidth:580,margin:"0 auto",textAlign:"center"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>THE GENESIS STARTS HERE</p>
          <h2 style={{fontSize:"clamp(28px,5vw,48px)",fontWeight:900,lineHeight:1.1,letterSpacing:"-0.03em",color:"#fff",marginBottom:16}}>
            Everything that's about to change<br />for your business starts<br />
            <span style={{color:"#f59e0b"}}>with this click.</span>
          </h2>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.45)",lineHeight:1.7,marginBottom:36,maxWidth:440,margin:"0 auto 36px"}}>
            10 questions. 10 minutes. We do the rest. Your first agent could be live inside a week.
          </p>
          <Link href="/apply" className="cta-btn">Begin My Genesis →</Link>
          <p style={{marginTop:16,fontSize:12,color:"rgba(255,255,255,0.2)"}}>
            We only take a handful of new builds per month. Not a sales tactic — just the reality of doing this properly.
          </p>
        </div>
      </section>
    </>
  );
}
