"use client";
import Link from "next/link";
import Image from "next/image";

const timelineLeft = [
  { month: "Months 1–3",   label: "Research tools",    sub: "ChatGPT, Zapier, 14 other tabs open" },
  { month: "Months 4–6",   label: "Trial & error",     sub: "Build something. It breaks." },
  { month: "Months 7–9",   label: "Wrong hire",        sub: "$3k/mo for someone who doesn't deliver" },
  { month: "Months 10–12", label: "Burned budget",     sub: "Ads, agencies, consultants — nothing sticks" },
  { month: "Months 13–18", label: "Start over",        sub: "With a little more scar tissue" },
];

const timelineRight = [
  { week: "Week 1",    label: "Interview complete",    sub: "We know your business cold" },
  { week: "Week 1",   label: "First agent live",      sub: "Running on your actual problem" },
  { week: "Week 2–4", label: "You learn to lead it",  sub: "Train it. Direct it. Own it." },
  { week: "Month 2",  label: "Second agent hatched",  sub: "The team is forming" },
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
        .step-line { border-left:1px dashed rgba(245,158,11,0.25);margin-left:14px;height:36px; }
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
        <h1 className="hero-h1" style={{fontSize:48,fontWeight:900,lineHeight:1.06,letterSpacing:"-0.035em",color:"#fff",marginBottom:20}}>
          Check your texts.<br />
          <span style={{color:"#f59e0b"}}>Your interview<br />just started.</span>
        </h1>
        <p style={{fontSize:19,color:"rgba(255,255,255,0.92)",lineHeight:1.72,marginBottom:14}}>
          This isn't a form. What you're texting right now gets turned into a blueprint. Every answer tightens what we build. The more specific you are, the more dangerous what we hand you back will be.
        </p>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.72)",lineHeight:1.72,marginBottom:32}}>
          Read everything below while you answer. By the time you hit send on the last question, you'll understand exactly what you're signing up for — and why it's different from everything else you've tried.
        </p>
        <div style={{background:"#0d0b0d",border:"1px solid rgba(245,158,11,0.2)",borderRadius:14,padding:"22px 22px",display:"flex",gap:16,alignItems:"flex-start",marginBottom:52}}>
          <span style={{fontSize:32,flexShrink:0}}>📱</span>
          <div>
            <p style={{fontSize:17,fontWeight:800,color:"#fff",marginBottom:8}}>Keep this page open while you text us back.</p>
            <p style={{fontSize:16,color:"rgba(255,255,255,0.85)",lineHeight:1.65}}>Scroll between replies. What's below will answer every question you're about to have — before you even think to ask it.</p>
          </div>
        </div>
      </section>

      {/* ── IMAGE: GENESIS EGG ── */}
      <div style={{maxWidth:800,margin:"0 auto"}}>
        <Image src="/assets/2026-03-07-offer-genesis-egg.png" alt="The genesis moment" width={1024} height={512} style={{width:"100%",height:"auto",display:"block"}} priority />
      </div>

      <hr className="dim" />

      {/* ── WHAT'S HAPPENING ── */}
      <section style={{padding:"60px 24px",maxWidth:660,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:22}}>HERE'S WHAT'S HAPPENING RIGHT NOW</p>
        <h2 className="sec-h2" style={{fontSize:40,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:14,lineHeight:1.12}}>
          Three things are about<br />to happen in sequence.
        </h2>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.85)",lineHeight:1.7,marginBottom:36}}>
          Not on a timeline. Not on a call. Right now, in this text thread. Here's the exact path from where you are to where you're going.
        </p>

        {[
          { num:"1", title:"The Interview", badge:"HAPPENING NOW", bc:"#22c55e", bg:"rgba(34,197,94,0.1)",
            desc:"Ten questions. No fluff, no filler. We're finding the exact place your business is bleeding — the bottleneck that's costing you the most time, money, or sanity right now. Every answer becomes part of the architecture. Shallow answers build shallow agents. Give us the truth and we'll build something that actually hits.", active:true },
          { num:"2", title:"Your Custom Build", badge:null,
            desc:"We take what you told us, research your business and your market, and design the agents that break your specific bottleneck. Not a template pulled from a library. Not a guess. A blueprint built entirely from what you just shared with us. You'll see it before we talk.", active:false },
          { num:"3", title:"The Call", badge:null,
            desc:"We text you the link to your custom plan. Read it. Sit with it. When you're ready, one message back and your phone rings. No pitch deck. No demo theater. One real conversation about what your first 90 days actually looks like and whether we're the right fit to make it happen.", active:false },
        ].map((s,i) => (
          <div key={i}>
            <div style={{display:"flex",gap:18,alignItems:"flex-start"}}>
              <div style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:30,height:30,borderRadius:"50%",background:s.active?"#22c55e":"#1a1a1a",border:s.active?"none":"1px solid #2a2a2a",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontSize:13,fontWeight:900,color:s.active?"#080608":"rgba(255,255,255,0.35)"}}>{s.num}</span>
                </div>
                {i<2 && <div className="step-line" />}
              </div>
              <div style={{paddingBottom:i<2?28:0}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,flexWrap:"wrap"}}>
                  <p style={{fontSize:19,fontWeight:800,color:s.active?"#fff":"rgba(255,255,255,0.4)"}}>{s.title}</p>
                  {s.badge && <span style={{fontSize:11,fontWeight:700,color:s.bc,background:s.bg,padding:"3px 10px",borderRadius:20,letterSpacing:"0.08em"}}>{s.badge}</span>}
                </div>
                <p style={{fontSize:16,color:s.active?"rgba(255,255,255,0.85)":"rgba(255,255,255,0.4)",lineHeight:1.72}}>{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── IMAGE: INTERVIEW FLOW ── */}
      <div style={{maxWidth:800,margin:"0 auto"}}>
        <Image src="/assets/2026-03-07-offer-interview-flow.png" alt="Your interview in motion" width={1024} height={512} style={{width:"100%",height:"auto",display:"block"}} />
      </div>

      <hr className="dim" />

      {/* ── 1.5-YEAR TRUTH ── */}
      <section style={{padding:"60px 24px",maxWidth:820,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18,textAlign:"center"}}>THE HONEST MATH</p>
        <h2 className="sec-h2" style={{fontSize:40,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:16,lineHeight:1.12,textAlign:"center"}}>
          You could figure this out<br />without us. Here's what that looks like.
        </h2>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.82)",lineHeight:1.72,maxWidth:560,margin:"0 auto 40px",textAlign:"center"}}>
          Six months researching tools. Three months building the wrong thing. Six more wondering why it's not working. By month 18 you have a YouTube channel about AI and a business that still runs on your calendar. We spent three years in that loop — so we know exactly where it breaks. You don't have to.
        </p>

        <div style={{marginBottom:32,borderRadius:14,overflow:"hidden"}}>
          <Image src="/assets/2026-03-07-offer-chaos-vs-clarity.png" alt="The two paths" width={1600} height={700} style={{width:"100%",height:"auto",display:"block"}} />
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
                  <p style={{fontSize:14,color:"rgba(255,255,255,0.52)",marginTop:2,fontStyle:"italic"}}>{t.sub}</p>
                </div>
              </div>
            ))}
            <div style={{marginTop:20,paddingTop:16,borderTop:"1px solid #1a1a1a"}}>
              <p style={{fontSize:15,color:"rgba(255,255,255,0.55)",lineHeight:1.65}}>Total: 18 months. Maybe a working system. Definitely a lot of money spent finding out what doesn't work.</p>
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
                  <p style={{fontSize:14,color:"rgba(255,255,255,0.72)",marginTop:2}}>{t.sub}</p>
                </div>
              </div>
            ))}
            <div style={{marginTop:20,paddingTop:16,borderTop:"1px solid rgba(245,158,11,0.15)"}}>
              <p style={{fontSize:15,color:"rgba(255,255,255,0.88)",lineHeight:1.65}}>Total: 90 days. A real team. Running without you at the center of everything.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="dim" />

      {/* ── WHY THE QUESTIONS ── */}
      <section style={{padding:"60px 24px",maxWidth:660,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:22}}>WHY WE ASK WHAT WE ASK</p>
        <h2 className="sec-h2" style={{fontSize:40,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:18,lineHeight:1.12}}>
          We're not collecting your info.<br />We're running a diagnostic.
        </h2>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.92)",lineHeight:1.72,marginBottom:12}}>
          Every question exists because it maps directly to a decision we're about to make about your build. Nothing gets asked that doesn't feed the blueprint.
        </p>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.82)",lineHeight:1.72,marginBottom:32}}>
          The thing that frustrates you most? That's where the first agent lives. The thing that's already failed? That's the first guardrail we build around. Give us shallow answers, we build shallow agents. Give us the truth, we build something that hits.
        </p>
        <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {[
            {q:"What's your frustration?",         a:"Becomes the first agent's entire purpose."},
            {q:"What's a good month look like?",   a:"Becomes the target we build every agent toward."},
            {q:"Where do customers come from?",    a:"Shapes how we build your intake and qualifier."},
            {q:"What's already failed?",           a:"Tells us exactly what NOT to touch."},
          ].map((item,i) => (
            <div key={i} style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:12,padding:"18px"}}>
              <p style={{fontSize:15,color:"rgba(255,255,255,0.62)",marginBottom:10,fontStyle:"italic",lineHeight:1.5}}>"{item.q}"</p>
              <p style={{fontSize:15,fontWeight:700,color:"rgba(255,255,255,0.92)",lineHeight:1.5}}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE: PHASE EVOLUTION ── */}
      <div style={{maxWidth:"100%",margin:"0 auto"}}>
        <Image src="/assets/2026-03-07-offer-phase-evolution.png" alt="Hatch → Learn → Grow → Empire" width={1600} height={640} style={{width:"100%",height:"auto",display:"block"}} />
      </div>

      {/* ── THE JOURNEY ── */}
      <section style={{padding:"60px 24px",maxWidth:660,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:22}}>WHERE THIS LEADS</p>
        <h2 className="sec-h2" style={{fontSize:40,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:14,lineHeight:1.12}}>
          Four phases. One destination.
        </h2>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.85)",lineHeight:1.7,marginBottom:48}}>
          Nobody gets an empire on day one. What they get is a first agent that actually works — and then the sequence takes over.
        </p>

        {/* HATCH */}
        <div style={{marginBottom:16}}>
          <Image src="/assets/2026-03-07-offer-hatch-moment.png" alt="Hatch" width={1024} height={480} style={{width:"100%",height:"auto",display:"block",borderRadius:14}} />
        </div>
        <div style={{padding:"28px 0 48px",borderBottom:"1px solid #111011"}}>
          <p style={{fontSize:12,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:12}}>🥚&nbsp;&nbsp;01 — HATCH</p>
          <h3 style={{fontSize:28,fontWeight:900,color:"#fff",marginBottom:14,letterSpacing:"-0.02em",lineHeight:1.2}}>Your first agent is born.</h3>
          <p style={{fontSize:18,color:"rgba(255,255,255,0.92)",lineHeight:1.72,marginBottom:12}}>
            You've been trying to solve everything at once. That's why nothing's working. Your first agent does one thing — the thing that matters most right now. We find it in the interview. We build it in the first week.
          </p>
          <p style={{fontSize:18,color:"rgba(255,255,255,0.82)",lineHeight:1.72}}>
            Run it for 30 days and watch what happens to your calendar, your revenue, your mental load. Most people don't believe how much one focused agent can change until they see it. Then they want more.
          </p>
        </div>

        {/* LEARN */}
        <div style={{marginBottom:16,marginTop:48}}>
          <Image src="/assets/2026-03-07-offer-learn-moment.png" alt="Learn" width={1024} height={480} style={{width:"100%",height:"auto",display:"block",borderRadius:14}} />
        </div>
        <div style={{padding:"28px 0 48px",borderBottom:"1px solid #111011"}}>
          <p style={{fontSize:12,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:12}}>🎓&nbsp;&nbsp;02 — LEARN</p>
          <h3 style={{fontSize:28,fontWeight:900,color:"#fff",marginBottom:14,letterSpacing:"-0.02em",lineHeight:1.2}}>You become the operator.</h3>
          <p style={{fontSize:18,color:"rgba(255,255,255,0.92)",lineHeight:1.72,marginBottom:12}}>
            This is the part nobody else sells you. AI tools hand you access and disappear. We stay and teach you how to lead what we built together.
          </p>
          <p style={{fontSize:18,color:"rgba(255,255,255,0.82)",lineHeight:1.72}}>
            You'll learn how to give your agent direction. How to know when it's performing and when it's drifting. How to correct it, redirect it, and replace it if it needs to be replaced. You're not a user. You're the boss — and we make sure you actually know what that means.
          </p>
        </div>

        {/* GROW */}
        <div style={{marginBottom:16,marginTop:48}}>
          <Image src="/assets/2026-03-07-offer-grow-moment.png" alt="Grow" width={1024} height={480} style={{width:"100%",height:"auto",display:"block",borderRadius:14}} />
        </div>
        <div style={{padding:"28px 0 48px",borderBottom:"1px solid #111011"}}>
          <p style={{fontSize:12,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:12}}>🌱&nbsp;&nbsp;03 — GROW</p>
          <h3 style={{fontSize:28,fontWeight:900,color:"#fff",marginBottom:14,letterSpacing:"-0.02em",lineHeight:1.2}}>One becomes a team.</h3>
          <p style={{fontSize:18,color:"rgba(255,255,255,0.92)",lineHeight:1.72,marginBottom:12}}>
            Your second agent doesn't come from a menu. It emerges from what your first one reveals. Maybe your first agent qualifies leads — and now you see they're booking calls but not closing. The next agent is built around that gap.
          </p>
          <p style={{fontSize:18,color:"rgba(255,255,255,0.82)",lineHeight:1.72}}>
            Your team evolves from your actual results. That's not a feature — that's the entire architecture. Every agent you hatch makes the picture clearer for the next one.
          </p>
        </div>

        {/* EMPIRE */}
        <div style={{position:"relative",marginTop:48}}>
          <Image src="/assets/2026-03-07-offer-agent-network.png" alt="Empire" width={1600} height={600} style={{width:"100%",height:"auto",display:"block",borderRadius:14,opacity:0.85}} />
          <div style={{position:"absolute",inset:0,borderRadius:14,background:"linear-gradient(to bottom, transparent 30%, rgba(8,6,8,0.95) 100%)"}} />
          <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"28px"}}>
            <p style={{fontSize:12,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:10}}>🏛️&nbsp;&nbsp;04 — EMPIRE</p>
            <h3 style={{fontSize:28,fontWeight:900,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.2}}>It runs without you running it.</h3>
          </div>
        </div>
        <div style={{padding:"28px 0 0"}}>
          <p style={{fontSize:18,color:"rgba(255,255,255,0.92)",lineHeight:1.72,marginBottom:12}}>
            Your agents coordinate. They hand off work. They run overnight. They don't take sick days, forget to follow up, or need a Monday morning meeting to get moving.
          </p>
          <p style={{fontSize:18,color:"rgba(255,255,255,0.82)",lineHeight:1.72}}>
            You stop being the person who keeps everything running and start being the person who decides where it goes. Most founders never get there. Not because they don't want to — because they never built the infrastructure. Now you are.
          </p>
        </div>
      </section>

      <hr className="dim" />

      {/* ── THE HIVE MIND ── */}
      <section style={{padding:"60px 24px 0",maxWidth:660,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:22}}>THE UNFAIR ADVANTAGE</p>
        <h2 className="sec-h2" style={{fontSize:40,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:18,lineHeight:1.12}}>
          Your team gets smarter<br />because of everyone else's team.
        </h2>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.92)",lineHeight:1.72,marginBottom:14}}>
          Every AGE operator is connected to the Hive Mind — a shared intelligence layer that every member contributes to and benefits from. When someone in the network solves a problem — a qualifier script that's converting at 80%, a follow-up sequence that closed a deal nobody expected — that learning enters the network.
        </p>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.85)",lineHeight:1.72,marginBottom:14}}>
          Your agents improve without you touching them. Not because we pushed an update. Because the collective got smarter and you're plugged into it.
        </p>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.92)",lineHeight:1.72,marginBottom:32}}>
          $300 a month is your seat in that network. It covers your access to the AGE Discord — where you connect with every other operator, get real-time support, and stay in the room where the sharpest builds are happening. It's the cheapest unfair advantage in business.
        </p>
        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.2)",borderRadius:14,padding:"24px 22px"}}>
          <p style={{fontSize:16,fontWeight:800,color:"#fff",marginBottom:10}}>What $300/month actually buys you:</p>
          {[
            "Access to the AGE Discord community",
            "The Hive Mind network — shared agent intelligence across every operator",
            "Real-time support as you build and scale",
            "Updates to the protocol as the system evolves",
            "A room full of people running the same infrastructure as you",
          ].map((item,i) => (
            <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:i<4?10:0}}>
              <span style={{color:"#f59e0b",fontWeight:900,flexShrink:0,marginTop:1}}>→</span>
              <p style={{fontSize:17,color:"rgba(255,255,255,0.90)",lineHeight:1.6}}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE: HIVE MIND ── */}
      <div style={{maxWidth:"100%",margin:"0 auto"}}>
        <Image src="/assets/2026-03-07-offer-hive-mind-v2.png" alt="The Hive Mind — collective intelligence network" width={1600} height={700} style={{width:"100%",height:"auto",display:"block"}} />
      </div>

      <hr className="dim" />

      {/* ── THE REAL INVESTMENT ── */}
      <section style={{padding:"60px 24px",maxWidth:660,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:22}}>THE REAL INVESTMENT</p>
        <h2 className="sec-h2" style={{fontSize:40,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:18,lineHeight:1.12}}>
          We're going to be completely straight with you.
        </h2>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.92)",lineHeight:1.72,marginBottom:14}}>
          The wrong person getting in wastes everyone's time — including yours. So here's the full picture before we ever get on a call.
        </p>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.82)",lineHeight:1.72,marginBottom:36}}>
          This is not a passive purchase. This is not a tool you subscribe to and forget. This is a commitment — and we need you to go in with eyes open.
        </p>

        {[
          { label:"$300 / month", title:"Hive Mind + Discord Membership", body:"Your ongoing access to the network, the community, and the collective intelligence. This is the baseline. Everything else is built on top of it." },
          { label:"One-time fee", title:"The Install", body:"Your first agent, fully built and deployed. We scope this together on the call — it covers setup, the hatching protocol, your onboarding, and your first 30 days live." },
          { label:"Optional", title:"Revenue Share on Custom Builds", body:"If you want us to go deeper — more complex agent design, custom automation, deeper integration — we'll take a percentage of what it generates. We only win when you win. There's no incentive to build something that doesn't perform." },
          { label:"Your hardware", title:"This Runs on Your Infrastructure", body:"AGE lives on your machine. That means you own everything — your data, your agents, your IP. Nobody can pull the plug on you. But you need the right hardware. We'll tell you exactly what, and it's a one-time purchase.", img:"/assets/2026-03-07-offer-hardware-v2.png" },
          { label:"2-3 hours / day", title:"Your Time While Setting Up", body:"Not forever. But while your agents are being built and trained, expect to put in real hours. This is the investment that most people underestimate — and the one that separates operators from observers. If you want a tool you can ignore, this isn't it.", img:"/assets/2026-03-07-offer-time.png" },
        ].map((item: {label:string,title:string,body:string,img?:string},i,arr) => (
          <div key={i} style={{padding:"22px 0",borderBottom:i<arr.length-1?"1px solid #111011":"none"}}>
            <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",color:"#f59e0b",marginBottom:6}}>{item.label.toUpperCase()}</p>
            <p style={{fontSize:19,fontWeight:800,color:"#fff",marginBottom:10,letterSpacing:"-0.01em"}}>{item.title}</p>
            <p style={{fontSize:17,color:"rgba(255,255,255,0.88)",lineHeight:1.72,marginBottom:item.img?16:0}}>{item.body}</p>
            {item.img && <Image src={item.img} alt={item.title} width={800} height={380} style={{width:"100%",height:"auto",display:"block",borderRadius:12,marginTop:8}} />}
          </div>
        ))}

        <div style={{marginTop:36,background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.15)",borderRadius:14,padding:"22px"}}>
          <p style={{fontSize:17,fontWeight:800,color:"#fff",marginBottom:8}}>If that sounds like a lot — it means this isn't for you. And that's fine.</p>
          <p style={{fontSize:17,color:"rgba(255,255,255,0.82)",lineHeight:1.7}}>If it sounds like a fair trade for a team that works while you sleep, qualifies your leads before they hit your calendar, follows up for 90 days without you asking, and gets smarter every day because of a network you're now part of — keep reading. And keep texting.</p>
        </div>
      </section>

      <hr className="dim" />

      {/* ── PROOF ── */}
      <section style={{padding:"60px 24px 0",maxWidth:660,margin:"0 auto"}}>
        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:22}}>WHY WE CAN PROMISE THIS</p>
        <h2 className="sec-h2" style={{fontSize:40,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:18,lineHeight:1.12}}>
          We built AGE for our own<br />business first. Not as a prototype.
        </h2>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.92)",lineHeight:1.72,marginBottom:14}}>
          As the actual operating system for how we run. Our agents handle outreach, qualification, follow-up, content, and operations — every day, without us managing them. We've been running this for three years.
        </p>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.82)",lineHeight:1.72,marginBottom:40}}>
          The hatching protocol, the Hive Mind, the training methodology, the overnight autonomous work — none of it shipped until it worked for us. We know what it feels like to wake up to work done. To show up to calls already booked. To watch your agents hand off to each other while you're at dinner with your family. We're not selling a theory. We're handing you keys to something we already drive every single day.
        </p>
      </section>

      {/* ── IMAGE: PROOF WORKSPACE ── */}
      <div style={{maxWidth:"100%",margin:"0 auto"}}>
        <Image src="/assets/2026-03-07-offer-proof-workspace.png" alt="Built and proven over 3 years" width={1600} height={700} style={{width:"100%",height:"auto",display:"block",opacity:0.9}} />
      </div>

      <hr className="dim" />

      {/* ── IMAGE: THE CALL ── */}
      <div style={{maxWidth:600,margin:"0 auto",padding:"0 24px"}}>
        <Image src="/assets/2026-03-07-offer-the-call.png" alt="The moment — your phone rings" width={900} height={900} style={{width:"100%",height:"auto",display:"block",borderRadius:20}} />
      </div>

      {/* ── CTA ── */}
      <section style={{padding:"40px 24px 80px",maxWidth:660,margin:"0 auto",textAlign:"center"}}>
        <Link href="/apply" className="cta-btn" style={{display:"inline-flex",maxWidth:420,margin:"0 auto"}}>
          Get My Operator Dossier &rarr;
        </Link>
        <p style={{marginTop:16,fontSize:15,color:"rgba(255,255,255,0.5)",lineHeight:1.6,maxWidth:420,margin:"16px auto 0"}}>
          We'll research your business and build your custom agent blueprint. Free. No call required.
        </p>
      </section>

      <div style={{borderTop:"1px solid #111011",padding:"28px",textAlign:"center"}}>
        <p style={{fontSize:12,color:"rgba(255,255,255,0.22)"}}>Agent Genesis Engine · Your genesis is in progress</p>
      </div>
    </>
  );
}
