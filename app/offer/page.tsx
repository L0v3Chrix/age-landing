"use client";
import Link from "next/link";
import Image from "next/image";

/* ─── TEXT SCALE & COLOR SYSTEM ───────────────────────────
   Primary text:    #fff (headlines, bold callouts)
   Body text:       rgba(255,255,255,0.85)
   Secondary body:  rgba(255,255,255,0.72)
   Dim/support:     rgba(255,255,255,0.55)
   Micro:           rgba(255,255,255,0.38)
   Accent:          #f59e0b
   ─────────────────────────────────────────────────────── */

const timelineLeft = [
  { month: "Months 1–3",  label: "Research tools",   sub: "ChatGPT, Zapier, 14 other tabs" },
  { month: "Months 4–6",  label: "Trial & error",    sub: "Build something. It breaks." },
  { month: "Months 7–9",  label: "Wrong hire",       sub: "$3k/mo VA who doesn't deliver" },
  { month: "Months 10–12",label: "Burned budget",    sub: "Ads, agencies, consultants" },
  { month: "Months 13–18",label: "Start over",       sub: "With a little more scar tissue" },
];

const timelineRight = [
  { week: "Week 1",   label: "Interview complete",     sub: "We know your business" },
  { week: "Week 1",   label: "First agent live",       sub: "Working on your actual problem" },
  { week: "Week 2–4", label: "You learn to lead it",  sub: "Train it. Direct it. Own it." },
  { week: "Month 2",  label: "Second agent hatched",  sub: "Team is forming" },
  { week: "Month 3",  label: "Running without you",   sub: "You show up to the output" },
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
        .live-dot  { width:9px;height:9px;border-radius:50%;background:#22c55e;display:inline-block;animation:pulse 1.5s infinite;flex-shrink:0; }
        .amber-dot { width:9px;height:9px;border-radius:50%;background:#f59e0b;display:inline-block;animation:pulse 2s infinite;flex-shrink:0; }
        .cta-btn { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#080608;font-size:18px;font-weight:900;font-family:inherit;padding:18px 44px;border-radius:12px;text-decoration:none;transition:transform 0.15s,background 0.15s; }
        .cta-btn:hover { transform:translateY(-2px);background:#fbbf24; }
        hr.dim { border:none;border-top:1px solid #111011;margin:0; }
        .step-line { border-left:1px dashed rgba(245,158,11,0.25);margin-left:12px;height:36px; }
        @media(max-width:680px) {
          .cta-btn { width:100%; font-size:17px; }
          .hero-h1  { font-size:34px !important; }
          .sec-h2   { font-size:30px !important; }
          .timeline-grid { grid-template-columns:1fr !important; }
          .two-col  { grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{padding:"18px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #0f0f0f",background:"rgba(8,6,8,0.98)",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(16px)"}}>
        <Link href="/" style={{fontSize:14,fontWeight:900,letterSpacing:"0.2em",color:"#fff",textDecoration:"none"}}>AGE</Link>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span className="live-dot" />
          <span style={{fontSize:12,color:"rgba(255,255,255,0.55)",fontWeight:700,letterSpacing:"0.05em"}}>GENESIS IN PROGRESS</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{padding:"64px 24px 0",maxWidth:660,margin:"0 auto",animation:"fadeUp 0.6s ease both"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:24}}>
          <span className="live-dot" />
          <span style={{fontSize:12,fontWeight:700,letterSpacing:"0.16em",color:"#22c55e"}}>YOUR GENESIS HAS BEGUN</span>
        </div>
        <h1 className="hero-h1" style={{fontSize:46,fontWeight:900,lineHeight:1.06,letterSpacing:"-0.035em",color:"#fff",marginBottom:20}}>
          Check your texts.<br />
          <span style={{color:"#f59e0b"}}>Your interview<br />just started.</span>
        </h1>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.85)",lineHeight:1.7,marginBottom:28}}>
          We texted you your first question. Answer honestly — there are no wrong answers, just incomplete ones. The more you give us, the more precisely we build what you actually need.
        </p>
        <div style={{background:"#0d0b0d",border:"1px solid rgba(245,158,11,0.2)",borderRadius:14,padding:"22px 22px",display:"flex",gap:16,alignItems:"flex-start",marginBottom:52}}>
          <span style={{fontSize:32,flexShrink:0}}>📱</span>
          <div>
            <p style={{fontSize:16,fontWeight:800,color:"#fff",marginBottom:6}}>Keep this page open while you text.</p>
            <p style={{fontSize:15,color:"rgba(255,255,255,0.72)",lineHeight:1.65}}>Read what's below. By the time the interview ends, you'll understand exactly what we're building — and why it changes how your business operates.</p>
          </div>
        </div>
      </section>

      {/* ── IMAGE 1: GENESIS EGG ── */}
      <div style={{maxWidth:800,margin:"0 auto"}}>
        <Image src="/assets/2026-03-07-offer-genesis-egg.png" alt="The genesis moment — something enormous is beginning" width={1024} height={512} style={{width:"100%",height:"auto",display:"block"}} priority />
      </div>

      <hr className="dim" />

      {/* ── WHAT'S HAPPENING ── */}
      <section style={{padding:"60px 24px",maxWidth:660,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:22}}>HERE'S WHAT'S HAPPENING RIGHT NOW</p>
        <h2 className="sec-h2" style={{fontSize:36,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:36,lineHeight:1.12}}>
          Three things about to happen<br />in this exact order.
        </h2>

        {[
          { num:"1", title:"The Interview",     badge:"HAPPENING NOW", bc:"#22c55e", bg:"rgba(34,197,94,0.1)",  desc:"10 short questions over text. About your business, your bottleneck, your goals, and what you've already tried. This is how we build something real — not something generic.", active:true  },
          { num:"2", title:"Your Custom Build", badge:null, desc:"We take your answers, research your business, and build a specific plan — which agents we'd hatch, what they'd do, and what changes in your first 90 days. Built around your actual situation.", active:false },
          { num:"3", title:"The Call",          badge:null, desc:"We text you the link to your custom plan. You confirm you've seen it. Your phone rings. One real conversation — no pitch deck, no pressure. Just clarity on what we'd build and whether we're the right fit.", active:false },
        ].map((s,i) => (
          <div key={i}>
            <div style={{display:"flex",gap:18,alignItems:"flex-start"}}>
              <div style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:30,height:30,borderRadius:"50%",background:s.active?"#22c55e":"#1a1a1a",border:s.active?"none":"1px solid #2a2a2a",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontSize:13,fontWeight:900,color:s.active?"#080608":"rgba(255,255,255,0.35)"}}>{s.num}</span>
                </div>
                {i<2 && <div className="step-line" />}
              </div>
              <div style={{paddingBottom:i<2?24:0}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8,flexWrap:"wrap"}}>
                  <p style={{fontSize:18,fontWeight:800,color:s.active?"#fff":"rgba(255,255,255,0.45)"}}>{s.title}</p>
                  {s.badge && <span style={{fontSize:11,fontWeight:700,color:s.bc,background:s.bg,padding:"3px 10px",borderRadius:20,letterSpacing:"0.08em"}}>{s.badge}</span>}
                </div>
                <p style={{fontSize:16,color:s.active?"rgba(255,255,255,0.82)":"rgba(255,255,255,0.38)",lineHeight:1.7}}>{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── IMAGE 2: INTERVIEW FLOW ── */}
      <div style={{maxWidth:800,margin:"0 auto"}}>
        <Image src="/assets/2026-03-07-offer-interview-flow.png" alt="Information flowing — your interview in progress" width={1024} height={512} style={{width:"100%",height:"auto",display:"block"}} />
      </div>

      <hr className="dim" />

      {/* ── 1.5-YEAR TRUTH ── */}
      <section style={{padding:"60px 24px",maxWidth:820,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18,textAlign:"center"}}>THE HONEST MATH</p>
        <h2 className="sec-h2" style={{fontSize:36,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:12,lineHeight:1.12,textAlign:"center"}}>
          It would take you 18 months<br />to figure this out alone.
        </h2>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.72)",lineHeight:1.7,marginBottom:40,maxWidth:520,margin:"0 auto 40px",textAlign:"center"}}>
          We know — because we spent 3 years doing exactly that, so you don't have to. This isn't a shortcut. It's an already-paved road.
        </p>

        {/* ── IMAGE 3: CHAOS VS CLARITY ── */}
        <div style={{marginBottom:32,borderRadius:14,overflow:"hidden"}}>
          <Image src="/assets/2026-03-07-offer-chaos-vs-clarity.png" alt="Chaos vs clarity — the two paths" width={1600} height={700} style={{width:"100%",height:"auto",display:"block"}} />
        </div>

        <div className="timeline-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
          <div style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:14,padding:"24px 22px"}}>
            <p style={{fontSize:12,fontWeight:700,letterSpacing:"0.12em",color:"rgba(255,255,255,0.35)",marginBottom:20}}>THE LONG WAY ALONE</p>
            {timelineLeft.map((t,i) => (
              <div key={i} style={{display:"flex",gap:14,marginBottom:i<4?18:0,alignItems:"flex-start"}}>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0,marginTop:3}}>
                  <div style={{width:7,height:7,borderRadius:"50%",background:"#222",border:"1px solid #333"}} />
                  {i<4 && <div style={{width:1,height:18,background:"#1e1e1e",margin:"3px 0"}} />}
                </div>
                <div>
                  <p style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.35)",letterSpacing:"0.06em",marginBottom:3}}>{t.month.toUpperCase()}</p>
                  <p style={{fontSize:15,fontWeight:700,color:"rgba(255,255,255,0.5)"}}>{t.label}</p>
                  <p style={{fontSize:13,color:"rgba(255,255,255,0.35)",marginTop:2,fontStyle:"italic"}}>{t.sub}</p>
                </div>
              </div>
            ))}
            <div style={{marginTop:20,paddingTop:16,borderTop:"1px solid #1a1a1a"}}>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.35)",lineHeight:1.6}}>Total: 18 months. Maybe a working system. Definitely a lot of money spent finding out.</p>
            </div>
          </div>

          <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.25)",borderRadius:14,padding:"24px 22px"}}>
            <p style={{fontSize:12,fontWeight:700,letterSpacing:"0.12em",color:"#f59e0b",marginBottom:20}}>WITH AGE</p>
            {timelineRight.map((t,i) => (
              <div key={i} style={{display:"flex",gap:14,marginBottom:i<4?18:0,alignItems:"flex-start"}}>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0,marginTop:3}}>
                  <div style={{width:7,height:7,borderRadius:"50%",background:"#f59e0b"}} />
                  {i<4 && <div style={{width:1,height:18,background:"rgba(245,158,11,0.25)",margin:"3px 0"}} />}
                </div>
                <div>
                  <p style={{fontSize:11,fontWeight:700,color:"rgba(245,158,11,0.7)",letterSpacing:"0.06em",marginBottom:3}}>{t.week.toUpperCase()}</p>
                  <p style={{fontSize:15,fontWeight:700,color:"#fff"}}>{t.label}</p>
                  <p style={{fontSize:13,color:"rgba(255,255,255,0.55)",marginTop:2}}>{t.sub}</p>
                </div>
              </div>
            ))}
            <div style={{marginTop:20,paddingTop:16,borderTop:"1px solid rgba(245,158,11,0.15)"}}>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.72)",lineHeight:1.6}}>Total: 90 days. A real team. Running without you.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="dim" />

      {/* ── WHY THE QUESTIONS ── */}
      <section style={{padding:"60px 24px",maxWidth:660,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:22}}>WHY WE ASK WHAT WE ASK</p>
        <h2 className="sec-h2" style={{fontSize:36,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:18,lineHeight:1.12}}>
          Every answer you text<br />shapes what we build.
        </h2>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.82)",lineHeight:1.7,marginBottom:32}}>
          Most tools ask for your email and call it personalization. We ask about your frustration, your best month, your failed experiments — because the thing that broke is almost always the first agent we build.
        </p>
        <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {[
            {q:"What's your frustration?",           a:"This becomes the first agent's purpose."},
            {q:"What's a good month look like?",     a:"This becomes the success metric we build toward."},
            {q:"Where do customers come from?",      a:"This shapes how we build the intake system."},
            {q:"What's already failed?",             a:"This tells us exactly what NOT to build."},
          ].map((item,i) => (
            <div key={i} style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:12,padding:"18px"}}>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.45)",marginBottom:8,fontStyle:"italic",lineHeight:1.5}}>"{item.q}"</p>
              <p style={{fontSize:15,fontWeight:700,color:"rgba(255,255,255,0.9)",lineHeight:1.5}}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE 4: PHASE EVOLUTION ── */}
      <div style={{maxWidth:"100%",margin:"0 auto"}}>
        <Image src="/assets/2026-03-07-offer-phase-evolution.png" alt="Hatch → Learn → Grow → Empire" width={1600} height={640} style={{width:"100%",height:"auto",display:"block"}} />
      </div>

      {/* ── THE JOURNEY ── */}
      <section style={{padding:"60px 24px",maxWidth:660,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:22}}>WHERE THIS LEADS</p>
        <h2 className="sec-h2" style={{fontSize:36,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:14,lineHeight:1.12}}>
          This is a progression.<br />Not a product.
        </h2>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.72)",lineHeight:1.7,marginBottom:44}}>
          Every empire starts with a single genesis. Yours starts with your first agent. What happens next depends on how far you want to take it.
        </p>

        {/* HATCH */}
        <div style={{marginBottom:16}}>
          <Image src="/assets/2026-03-07-offer-hatch-moment.png" alt="Hatch — your first agent is born" width={1024} height={480} style={{width:"100%",height:"auto",display:"block",borderRadius:14}} />
        </div>
        <div style={{padding:"28px 0 44px",borderBottom:"1px solid #111011"}}>
          <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:10}}>🥚  01 — HATCH</p>
          <h3 style={{fontSize:24,fontWeight:900,color:"#fff",marginBottom:12,letterSpacing:"-0.02em",lineHeight:1.2}}>Your first agent is born.</h3>
          <p style={{fontSize:17,color:"rgba(255,255,255,0.82)",lineHeight:1.72}}>Custom-built around the single biggest thing eating your time or killing your growth. Not a template. Not a package from a menu. Built for your business, your voice, your problem. Most people start here and change their business within 30 days.</p>
        </div>

        {/* LEARN */}
        <div style={{marginBottom:16,marginTop:44}}>
          <Image src="/assets/2026-03-07-offer-learn-moment.png" alt="Learn — you become its operator" width={1024} height={480} style={{width:"100%",height:"auto",display:"block",borderRadius:14}} />
        </div>
        <div style={{padding:"28px 0 44px",borderBottom:"1px solid #111011"}}>
          <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:10}}>🎓  02 — LEARN</p>
          <h3 style={{fontSize:24,fontWeight:900,color:"#fff",marginBottom:12,letterSpacing:"-0.02em",lineHeight:1.2}}>You become its operator.</h3>
          <p style={{fontSize:17,color:"rgba(255,255,255,0.82)",lineHeight:1.72}}>We teach you how to work with it. How to train it when it's off. How to correct it, redirect it, replace it if it underperforms. You're not a user — you're the boss. This is where most AI tools abandon you. We don't.</p>
        </div>

        {/* GROW */}
        <div style={{marginBottom:16,marginTop:44}}>
          <Image src="/assets/2026-03-07-offer-grow-moment.png" alt="Grow — one becomes a team" width={1024} height={480} style={{width:"100%",height:"auto",display:"block",borderRadius:14}} />
        </div>
        <div style={{padding:"28px 0 44px",borderBottom:"1px solid #111011"}}>
          <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:10}}>🌱  03 — GROW</p>
          <h3 style={{fontSize:24,fontWeight:900,color:"#fff",marginBottom:12,letterSpacing:"-0.02em",lineHeight:1.2}}>One becomes a team.</h3>
          <p style={{fontSize:17,color:"rgba(255,255,255,0.82)",lineHeight:1.72}}>Your first agent proves itself. You see the hours come back. The revenue move. Then you hatch another. And another. Each one custom. Each one emerging from what the last one revealed. This is not a menu — it's an evolution.</p>
        </div>

        {/* EMPIRE */}
        <div style={{position:"relative",marginTop:44}}>
          <Image src="/assets/2026-03-07-offer-agent-network.png" alt="Empire — runs without you" width={1600} height={600} style={{width:"100%",height:"auto",display:"block",borderRadius:14,opacity:0.85}} />
          <div style={{position:"absolute",inset:0,borderRadius:14,background:"linear-gradient(to bottom, transparent 40%, rgba(8,6,8,0.92) 100%)"}} />
          <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"28px"}}>
            <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:8}}>🏛️  04 — EMPIRE</p>
            <h3 style={{fontSize:24,fontWeight:900,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.2}}>It runs without you running it.</h3>
          </div>
        </div>
        <div style={{padding:"28px 0 0"}}>
          <p style={{fontSize:17,color:"rgba(255,255,255,0.82)",lineHeight:1.72}}>Your agents coordinate. They hand off work. They run overnight. You show up to the output — not the process. This is what it actually means to build a business that doesn't need you for everything.</p>
        </div>
      </section>

      <hr className="dim" />

      {/* ── NOT SAAS ── */}
      <section style={{padding:"60px 24px",maxWidth:660,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:22}}>LET'S BE CLEAR</p>
        <h2 className="sec-h2" style={{fontSize:36,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:18,lineHeight:1.12}}>
          No dashboard. No subscription.<br />No pre-packaged team of 22.
        </h2>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.82)",lineHeight:1.72,marginBottom:18}}>
          There's no seat to buy. No feature to unlock. No generic team built for someone else's business. You get exactly the agents your business actually needs — built custom, owned by you, run for you.
        </p>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.72)",lineHeight:1.72,marginBottom:32}}>
          We hatch the agents. We teach you to lead them. We stay as coaches. As your business grows, your team evolves with it. This is a relationship — not a product.
        </p>
        <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {[
            ["❌  Not a SaaS tool",            "✅  A custom-built AI team"],
            ["❌  Not a template package",      "✅  Agents built for your business"],
            ["❌  Not a one-time build",        "✅  An ongoing relationship"],
            ["❌  Not 22 agents by default",    "✅  Exactly the agents you need"],
          ].map(([no,yes],i) => (
            <div key={i} style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:12,padding:"16px 18px"}}>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.38)",marginBottom:8}}>{no}</p>
              <p style={{fontSize:15,fontWeight:700,color:"rgba(255,255,255,0.92)"}}>{yes}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="dim" />

      {/* ── PROOF ── */}
      <section style={{padding:"60px 24px 0",maxWidth:660,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:22}}>WHY WE CAN PROMISE THIS</p>
        <h2 className="sec-h2" style={{fontSize:36,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:18,lineHeight:1.12}}>
          We ran this on our own<br />business first.
        </h2>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.82)",lineHeight:1.72,marginBottom:18}}>
          3 years of building, breaking, rebuilding. The hatching protocol, the training methodology, the coordination, the overnight autonomous work — all of it tested on our own operation before a single client ever saw it.
        </p>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.72)",lineHeight:1.72,marginBottom:40}}>
          We know what it feels like to wake up to work done. To show up to calls already booked. To watch your agents hand off to each other while you're at dinner with your family. We're not selling a theory. We're handing you keys to something we already drive.
        </p>
      </section>

      {/* ── IMAGE: PROOF WORKSPACE ── */}
      <div style={{maxWidth:"100%",margin:"0 auto"}}>
        <Image src="/assets/2026-03-07-offer-proof-workspace.png" alt="3 years of building — proven and running" width={1600} height={700} style={{width:"100%",height:"auto",display:"block",opacity:0.9}} />
      </div>

      <hr className="dim" />

      {/* ── KEEP TEXTING ── */}
      <section style={{padding:"60px 24px 80px",maxWidth:660,margin:"0 auto"}}>
        <div style={{background:"#0d0b0d",border:"1px solid rgba(245,158,11,0.25)",borderRadius:16,padding:"36px 28px",textAlign:"center"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:9,marginBottom:18}}>
            <span className="amber-dot" />
            <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.18em",color:"#f59e0b"}}>YOUR INTERVIEW IS STILL RUNNING</p>
          </div>
          <h3 style={{fontSize:30,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:14,lineHeight:1.15}}>
            Answer every question.<br />Don't leave anything out.
          </h3>
          <p style={{fontSize:17,color:"rgba(255,255,255,0.75)",lineHeight:1.7,marginBottom:12,maxWidth:400,margin:"0 auto 12px"}}>
            The depth of your custom plan depends entirely on the depth of your answers. The more honest you are, the more powerful what we build will be.
          </p>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.55)",lineHeight:1.65,maxWidth:400,margin:"0 auto"}}>
            When you finish — we send you a link. When you confirm you've seen it — your phone rings. That's the moment. Don't miss it.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div style={{borderTop:"1px solid #111011",padding:"28px",textAlign:"center"}}>
        <p style={{fontSize:12,color:"rgba(255,255,255,0.25)"}}>Agent Genesis Engine · Your genesis is in progress</p>
      </div>
    </>
  );
}
