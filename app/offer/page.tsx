"use client";
import Link from "next/link";
import Image from "next/image";

const timelineLeft = [
  { month: "Months 1–3", label: "Research tools", sub: "ChatGPT, Zapier, 14 other tabs" },
  { month: "Months 4–6", label: "Trial & error", sub: "Build something. It breaks." },
  { month: "Months 7–9", label: "Wrong hire", sub: "$3k/mo VA who doesn't deliver" },
  { month: "Months 10–12", label: "Burned budget", sub: "Ads, agencies, consultants" },
  { month: "Months 13–18", label: "Start over", sub: "With a little more scar tissue" },
];

const timelineRight = [
  { week: "Week 1", label: "Interview complete", sub: "We know your business" },
  { week: "Week 1", label: "First agent live", sub: "Working on your actual problem" },
  { week: "Week 2–4", label: "You learn to lead it", sub: "Train it. Direct it. Own it." },
  { week: "Month 2", label: "Second agent hatched", sub: "Team is forming" },
  { week: "Month 3", label: "Running without you", sub: "You show up to the output" },
];

export default function OfferPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #080608; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.88)} }
        .live-dot { width:8px;height:8px;border-radius:50%;background:#22c55e;display:inline-block;animation:pulse 1.5s infinite;flex-shrink:0; }
        .amber-dot { width:8px;height:8px;border-radius:50%;background:#f59e0b;display:inline-block;animation:pulse 2s infinite;flex-shrink:0; }
        .cta-btn { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#080608;font-size:17px;font-weight:900;font-family:inherit;padding:17px 40px;border-radius:10px;text-decoration:none;transition:transform 0.15s,background 0.15s; }
        .cta-btn:hover { transform:translateY(-2px);background:#fbbf24; }
        hr.dim { border:none;border-top:1px solid #111011;margin:0; }
        .step-line { border-left:1px dashed rgba(245,158,11,0.2);margin-left:11px;height:32px; }
        @media(max-width:680px) {
          .cta-btn { width:100%; }
          .hero-h1 { font-size:32px !important; }
          .timeline-grid { grid-template-columns:1fr !important; }
          .two-col { grid-template-columns:1fr !important; }
          .phase-img { height:180px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #0f0f0f",background:"rgba(8,6,8,0.98)",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(16px)"}}>
        <Link href="/" style={{fontSize:13,fontWeight:900,letterSpacing:"0.2em",color:"#fff",textDecoration:"none"}}>AGE</Link>
        <div style={{display:"flex",alignItems:"center",gap:7}}>
          <span className="live-dot" />
          <span style={{fontSize:11,color:"rgba(255,255,255,0.4)",fontWeight:600,letterSpacing:"0.04em"}}>GENESIS IN PROGRESS</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{padding:"60px 24px 0",maxWidth:640,margin:"0 auto",animation:"fadeUp 0.6s ease both"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:22}}>
          <span className="live-dot" />
          <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.16em",color:"#22c55e"}}>YOUR GENESIS HAS BEGUN</span>
        </div>
        <h1 className="hero-h1" style={{fontSize:42,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.035em",color:"#fff",marginBottom:18}}>
          Check your texts.<br />
          <span style={{color:"#f59e0b"}}>Your interview just started.</span>
        </h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.65)",lineHeight:1.75,marginBottom:24}}>
          We texted you your first question. Answer honestly — there are no wrong answers, just incomplete ones. The more you give us, the more precisely we build what you actually need.
        </p>
        <div style={{background:"#0d0b0d",border:"1px solid rgba(245,158,11,0.15)",borderRadius:12,padding:"18px 20px",display:"flex",gap:14,alignItems:"flex-start",marginBottom:48}}>
          <span style={{fontSize:20,flexShrink:0}}>📱</span>
          <div>
            <p style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:4}}>Keep this page open while you text.</p>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.6}}>Read what's below. By the time the interview ends, you'll understand exactly what we're building — and why it changes everything.</p>
          </div>
        </div>
      </section>

      {/* ── GENESIS EGG IMAGE ── */}
      <div style={{maxWidth:760,margin:"0 auto",padding:"0 0 0"}}>
        <Image
          src="/assets/2026-03-07-offer-genesis-egg.png"
          alt="Genesis moment — the beginning of something enormous"
          width={1024}
          height={512}
          style={{width:"100%",height:"auto",display:"block",objectFit:"cover"}}
          priority
        />
      </div>

      <hr className="dim" />

      {/* ── WHAT'S HAPPENING ── */}
      <section style={{padding:"56px 24px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>HERE'S WHAT'S HAPPENING RIGHT NOW</p>
        <h2 style={{fontSize:30,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:32,lineHeight:1.15}}>
          Three things about to happen<br />in this exact order.
        </h2>

        {[
          { num:"1", title:"The Interview", badge:"HAPPENING NOW", badgeColor:"#22c55e", badgeBg:"rgba(34,197,94,0.1)", desc:"10 questions over text. About your business, your bottleneck, your goals, what you've already tried. This is how we build something real instead of something generic.", active:true },
          { num:"2", title:"Your Custom Build", badge:null, desc:"We take your answers, research your business, and build a specific plan — which agents we'd hatch, what they'd do, and what changes in your first 90 days. Built around your actual situation.", active:false },
          { num:"3", title:"The Call", badge:null, desc:"We text you the link. You confirm you've seen it. Your phone rings. One conversation — no pitch deck, no pressure. Just a real talk about what we'd build and whether we're a fit.", active:false },
        ].map((s,i) => (
          <div key={i}>
            <div style={{display:"flex",gap:16,alignItems:"flex-start"}}>
              <div style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:26,height:26,borderRadius:"50%",background:s.active?"#22c55e":"#1a1a1a",border:s.active?"none":"1px solid #2a2a2a",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontSize:11,fontWeight:900,color:s.active?"#080608":"rgba(255,255,255,0.3)"}}>{s.num}</span>
                </div>
                {i < 2 && <div className="step-line" />}
              </div>
              <div style={{paddingBottom: i < 2 ? 20 : 0}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6,flexWrap:"wrap"}}>
                  <p style={{fontSize:15,fontWeight:800,color:s.active?"#fff":"rgba(255,255,255,0.45)"}}>{s.title}</p>
                  {s.badge && <span style={{fontSize:10,fontWeight:700,color:s.badgeColor,background:s.badgeBg,padding:"2px 8px",borderRadius:20,letterSpacing:"0.08em"}}>{s.badge}</span>}
                </div>
                <p style={{fontSize:14,color:s.active?"rgba(255,255,255,0.6)":"rgba(255,255,255,0.3)",lineHeight:1.7}}>{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <hr className="dim" />

      {/* ── THE 1.5 YEAR TRUTH ── */}
      <section style={{padding:"56px 24px",maxWidth:800,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:16,maxWidth:640,marginLeft:"auto",marginRight:"auto"}}>THE HONEST MATH</p>
        <h2 style={{fontSize:30,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:10,lineHeight:1.15,maxWidth:640,margin:"0 auto 10px"}}>
          It would take you 18 months<br />to figure this out alone.
        </h2>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.5)",lineHeight:1.7,marginBottom:36,maxWidth:540,margin:"0 auto 36px",textAlign:"center"}}>
          We know because we spent 3 years doing exactly that — so you don't have to. This isn't a shortcut. It's an already-paved road.
        </p>

        {/* Timeline comparison */}
        <div className="timeline-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,maxWidth:760,margin:"0 auto"}}>
          {/* The long way */}
          <div style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:14,padding:"22px 20px"}}>
            <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",color:"rgba(255,255,255,0.3)",marginBottom:18}}>THE LONG WAY ALONE</p>
            {timelineLeft.map((t,i) => (
              <div key={i} style={{display:"flex",gap:12,marginBottom:i<4?16:0,alignItems:"flex-start"}}>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0,marginTop:2}}>
                  <div style={{width:6,height:6,borderRadius:"50%",background:"#2a2a2a",border:"1px solid #333"}} />
                  {i<4 && <div style={{width:1,height:16,background:"#1e1e1e",margin:"3px 0"}} />}
                </div>
                <div>
                  <p style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.25)",letterSpacing:"0.06em",marginBottom:2}}>{t.month.toUpperCase()}</p>
                  <p style={{fontSize:13,fontWeight:700,color:"rgba(255,255,255,0.45)"}}>{t.label}</p>
                  <p style={{fontSize:11,color:"rgba(255,255,255,0.25)",marginTop:1,fontStyle:"italic"}}>{t.sub}</p>
                </div>
              </div>
            ))}
            <div style={{marginTop:18,paddingTop:14,borderTop:"1px solid #1a1a1a"}}>
              <p style={{fontSize:12,color:"rgba(255,255,255,0.25)",lineHeight:1.6}}>Total: 18 months. Maybe a working system. Definitely a lot of money spent finding out.</p>
            </div>
          </div>

          {/* With AGE */}
          <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.2)",borderRadius:14,padding:"22px 20px"}}>
            <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",color:"#f59e0b",marginBottom:18}}>WITH AGE</p>
            {timelineRight.map((t,i) => (
              <div key={i} style={{display:"flex",gap:12,marginBottom:i<4?16:0,alignItems:"flex-start"}}>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0,marginTop:2}}>
                  <div style={{width:6,height:6,borderRadius:"50%",background:"#f59e0b"}} />
                  {i<4 && <div style={{width:1,height:16,background:"rgba(245,158,11,0.2)",margin:"3px 0"}} />}
                </div>
                <div>
                  <p style={{fontSize:10,fontWeight:700,color:"rgba(245,158,11,0.6)",letterSpacing:"0.06em",marginBottom:2}}>{t.week.toUpperCase()}</p>
                  <p style={{fontSize:13,fontWeight:700,color:"#fff"}}>{t.label}</p>
                  <p style={{fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:1}}>{t.sub}</p>
                </div>
              </div>
            ))}
            <div style={{marginTop:18,paddingTop:14,borderTop:"1px solid rgba(245,158,11,0.12)"}}>
              <p style={{fontSize:12,color:"rgba(255,255,255,0.55)",lineHeight:1.6}}>Total: 90 days. A real team. Running without you.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="dim" />

      {/* ── WHY THE QUESTIONS ── */}
      <section style={{padding:"56px 24px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>WHY WE ASK WHAT WE ASK</p>
        <h2 style={{fontSize:30,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:16,lineHeight:1.15}}>
          Every answer shapes<br />what we build for you.
        </h2>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.55)",lineHeight:1.75,marginBottom:28}}>
          Most tools ask for your email and call it personalization. We ask about your frustration, your best month, your failed experiments — because the thing that broke is almost always the first agent we build.
        </p>
        <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[
            {q:"What's your frustration?", a:"This becomes the first agent's purpose."},
            {q:"What's a good month look like?", a:"This becomes the success metric."},
            {q:"Where do customers come from?", a:"This shapes how we build the intake."},
            {q:"What's already failed?", a:"This tells us what NOT to build."},
          ].map((item,i) => (
            <div key={i} style={{background:"#0c0a0c",border:"1px solid #1a1a1a",borderRadius:10,padding:"16px"}}>
              <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:6,fontStyle:"italic"}}>"{item.q}"</p>
              <p style={{fontSize:13,fontWeight:700,color:"rgba(255,255,255,0.8)"}}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PHASE EVOLUTION IMAGE ── */}
      <div style={{maxWidth:900,margin:"0 auto",padding:"20px 0 0"}}>
        <Image
          src="/assets/2026-03-07-offer-phase-evolution.png"
          alt="The Genesis progression: Hatch → Learn → Grow → Empire"
          width={1600}
          height={640}
          style={{width:"100%",height:"auto",display:"block"}}
        />
      </div>

      {/* ── THE JOURNEY ── */}
      <section style={{padding:"0 24px 56px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20,paddingTop:40}}>WHERE THIS LEADS</p>
        <h2 style={{fontSize:30,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:12,lineHeight:1.15}}>
          This is a progression.<br />Not a product.
        </h2>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.5)",lineHeight:1.7,marginBottom:36}}>
          Every empire starts with a single genesis. Yours starts with your first agent. What happens next is up to how far you want to take it.
        </p>

        {[
          { icon:"🥚", phase:"01 — HATCH", title:"Your first agent is born.", body:"Custom-built around the single biggest thing eating your time or killing your growth. Not a template. Not a package. Built for your business, your voice, your problem. Most people start here and change their business within 30 days." },
          { icon:"🎓", phase:"02 — LEARN", title:"You become its operator.", body:"We teach you how to work with it. How to train it when it's off. How to correct it, redirect it, replace it if needed. You're not a user — you're the boss. This is where most AI tools abandon you. We don't." },
          { icon:"🌱", phase:"03 — GROW", title:"One becomes a team.", body:"Your first agent proves itself. You see the hours come back, the revenue move. Then you hatch another. And another. Each one custom. Each one emerging from what the last one revealed. This is not a menu — it's an evolution." },
          { icon:"🏛️", phase:"04 — EMPIRE", title:"It runs without you running it.", body:"Your agents coordinate. They hand off work. They run overnight. You show up to the output. Not the process. This is what it actually means to build a business that doesn't need you for everything." },
        ].map((p,i) => (
          <div key={i} style={{display:"flex",gap:18,padding:"22px 0",borderBottom:i<3?"1px solid #111011":"none",alignItems:"flex-start"}}>
            <div style={{flexShrink:0,fontSize:24,paddingTop:2}}>{p.icon}</div>
            <div>
              <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:5}}>{p.phase}</p>
              <p style={{fontSize:16,fontWeight:800,color:"#fff",marginBottom:8,letterSpacing:"-0.01em",lineHeight:1.3}}>{p.title}</p>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.5)",lineHeight:1.7}}>{p.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── AGENT NETWORK IMAGE ── */}
      <div style={{maxWidth:"100%",position:"relative"}}>
        <Image
          src="/assets/2026-03-07-offer-agent-network.png"
          alt="Agents coordinating autonomously"
          width={1600}
          height={600}
          style={{width:"100%",height:"auto",display:"block",opacity:0.85}}
        />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, #080608 0%, transparent 20%, transparent 80%, #080608 100%)"}} />
        <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"}}>
          <div style={{textAlign:"center",maxWidth:520}}>
            <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:12}}>THE EMPIRE PHASE</p>
            <p style={{fontSize:"clamp(20px,3.5vw,28px)",fontWeight:900,color:"#fff",lineHeight:1.2,letterSpacing:"-0.025em"}}>
              Your agents work while you sleep. Coordinate while you're with your family. Deliver while you're living your life.
            </p>
          </div>
        </div>
      </div>

      <hr className="dim" />

      {/* ── NOT SAAS ── */}
      <section style={{padding:"56px 24px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>LET'S BE CLEAR</p>
        <h2 style={{fontSize:30,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:16,lineHeight:1.15}}>
          No dashboard. No subscription.<br />No pre-packaged team of 22.
        </h2>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.6)",lineHeight:1.75,marginBottom:16}}>
          There's no seat to buy. No feature to unlock. No generic team of agents built for someone else's business. You get exactly the agents your business actually needs — built custom, owned by you, run for you.
        </p>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.6)",lineHeight:1.75}}>
          We hatch the agents. We train you to lead them. We stay as coaches. As your business grows, your team evolves with it. This is a relationship — not a product.
        </p>

        <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:32}}>
          {[
            ["❌ Not a SaaS tool", "✅ A custom-built AI team"],
            ["❌ Not a template package", "✅ Agents built for your business"],
            ["❌ Not a one-time build", "✅ An ongoing relationship"],
            ["❌ Not 22 agents by default", "✅ Exactly the agents you need"],
          ].map(([no, yes], i) => (
            <div key={i} style={{background:"#0c0a0c",border:"1px solid #1a1a1a",borderRadius:10,padding:"14px 16px"}}>
              <p style={{fontSize:12,color:"rgba(255,255,255,0.25)",marginBottom:6}}>{no}</p>
              <p style={{fontSize:13,fontWeight:700,color:"rgba(255,255,255,0.85)"}}>{yes}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="dim" />

      {/* ── PROOF ── */}
      <section style={{padding:"56px 24px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>WHY WE CAN PROMISE THIS</p>
        <h2 style={{fontSize:30,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:16,lineHeight:1.15}}>
          We ran this on our own business<br />before we offered it to anyone.
        </h2>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.6)",lineHeight:1.75,marginBottom:16}}>
          3 years of building, breaking, rebuilding. The hatching protocol, the training methodology, the agent coordination, the overnight autonomous work — all of it tested on our own operation before a single client ever saw it.
        </p>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.6)",lineHeight:1.75}}>
          We know what it feels like to wake up to work done. To show up to calls already booked. To watch your agents hand off to each other while you're at dinner with your family. We're not selling a theory. We're handing you keys to something we already drive.
        </p>
      </section>

      <hr className="dim" />

      {/* ── KEEP TEXTING ── */}
      <section style={{padding:"56px 24px 80px",maxWidth:640,margin:"0 auto"}}>
        <div style={{background:"#0d0b0d",border:"1px solid rgba(245,158,11,0.2)",borderRadius:14,padding:"32px 28px",textAlign:"center"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:16}}>
            <span className="amber-dot" />
            <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.18em",color:"#f59e0b"}}>YOUR INTERVIEW IS STILL RUNNING</p>
          </div>
          <h3 style={{fontSize:26,fontWeight:900,letterSpacing:"-0.02em",color:"#fff",marginBottom:12,lineHeight:1.2}}>
            Answer every question.<br />Don't leave anything out.
          </h3>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.5)",lineHeight:1.7,marginBottom:8,maxWidth:380,margin:"0 auto 8px"}}>
            The depth of your custom plan depends on the depth of your answers. The more honest you are, the more powerful what we build will be.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.35)",lineHeight:1.6,maxWidth:380,margin:"0 auto"}}>
            When you finish — we send you a link. When you confirm you've seen it — your phone rings. That's the moment. Don't miss it.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <div style={{borderTop:"1px solid #111011",padding:"24px",textAlign:"center"}}>
        <p style={{fontSize:11,color:"rgba(255,255,255,0.2)"}}>Agent Genesis Engine · Your genesis is in progress</p>
      </div>
    </>
  );
}
