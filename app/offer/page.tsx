"use client";
import Link from "next/link";

export default function OfferPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #080608; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(0.92)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        .live-dot { width:8px;height:8px;border-radius:50%;background:#22c55e;display:inline-block;animation:pulse 1.5s infinite;flex-shrink:0; }
        .amber-dot { width:8px;height:8px;border-radius:50%;background:#f59e0b;display:inline-block;animation:pulse 2s infinite;flex-shrink:0; }
        .cta-btn { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#080608;font-size:17px;font-weight:900;font-family:inherit;padding:17px 40px;border-radius:10px;text-decoration:none;transition:transform 0.15s,background 0.15s; }
        .cta-btn:hover { transform:translateY(-2px);background:#fbbf24; }
        hr.dim { border:none;border-top:1px solid #111011;margin:0; }
        .step-line { border-left:1px dashed rgba(245,158,11,0.2);margin-left:11px;height:32px; }
        @media(max-width:640px) {
          .cta-btn { width:100%; }
          .hero-h1 { font-size:32px !important; }
          .two-col { grid-template-columns:1fr !important; }
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

      {/* ── SECTION 1: CONFIRMATION ── */}
      <section style={{padding:"60px 24px 56px",maxWidth:640,margin:"0 auto",animation:"fadeUp 0.6s ease both"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:22}}>
          <span className="live-dot" />
          <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.16em",color:"#22c55e"}}>YOUR GENESIS HAS BEGUN</span>
        </div>
        <h1 className="hero-h1" style={{fontSize:42,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.035em",color:"#fff",marginBottom:18}}>
          Check your texts.<br />
          <span style={{color:"#f59e0b"}}>Your interview just started.</span>
        </h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.65)",lineHeight:1.75,marginBottom:20}}>
          We texted you a question. Answer it honestly — there are no wrong answers, just incomplete ones. The more you give us, the more precisely we can build what you actually need.
        </p>
        <div style={{background:"#0d0b0d",border:"1px solid rgba(245,158,11,0.15)",borderRadius:12,padding:"18px 20px",display:"flex",gap:14,alignItems:"flex-start"}}>
          <span style={{fontSize:20,flexShrink:0}}>📱</span>
          <div>
            <p style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:4}}>Keep this page open while you text.</p>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.6}}>
              While we learn about your business, read what's below. By the time the interview ends, you'll understand exactly what we're building — and why it's going to change how your business operates.
            </p>
          </div>
        </div>
      </section>

      <hr className="dim" />

      {/* ── SECTION 2: WHAT'S HAPPENING ── */}
      <section style={{padding:"56px 24px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>HERE'S WHAT'S HAPPENING RIGHT NOW</p>
        <h2 style={{fontSize:30,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:32,lineHeight:1.15}}>
          Three things are about to occur<br />in this exact order.
        </h2>

        {/* Step 1 — active */}
        <div style={{display:"flex",gap:16,alignItems:"flex-start"}}>
          <div style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:24,height:24,borderRadius:"50%",background:"#22c55e",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontSize:11,fontWeight:900,color:"#080608"}}>1</span>
            </div>
            <div className="step-line" />
          </div>
          <div style={{paddingBottom:28}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
              <p style={{fontSize:15,fontWeight:800,color:"#fff"}}>The Interview</p>
              <span style={{fontSize:10,fontWeight:700,color:"#22c55e",background:"rgba(34,197,94,0.1)",padding:"2px 8px",borderRadius:20,letterSpacing:"0.08em"}}>HAPPENING NOW</span>
            </div>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.55)",lineHeight:1.7}}>We're asking you 10 short questions over text. About your business, your problem, your goals, and what you've already tried. This is how we build something real instead of something generic.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div style={{display:"flex",gap:16,alignItems:"flex-start"}}>
          <div style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:24,height:24,borderRadius:"50%",background:"#1a1a1a",border:"1px solid #2a2a2a",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontSize:11,fontWeight:900,color:"rgba(255,255,255,0.4)"}}>2</span>
            </div>
            <div className="step-line" />
          </div>
          <div style={{paddingBottom:28}}>
            <p style={{fontSize:15,fontWeight:800,color:"rgba(255,255,255,0.5)",marginBottom:6}}>Your Custom Build</p>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.35)",lineHeight:1.7}}>We take your answers, research your business, and build a custom deliverable — a specific plan for the agents we'd hatch for you. Not a template. Built around exactly what you told us.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div style={{display:"flex",gap:16,alignItems:"flex-start"}}>
          <div style={{flexShrink:0}}>
            <div style={{width:24,height:24,borderRadius:"50%",background:"#1a1a1a",border:"1px solid #2a2a2a",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontSize:11,fontWeight:900,color:"rgba(255,255,255,0.4)"}}>3</span>
            </div>
          </div>
          <div>
            <p style={{fontSize:15,fontWeight:800,color:"rgba(255,255,255,0.5)",marginBottom:6}}>The Call</p>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.35)",lineHeight:1.7}}>We text you a link to your custom plan. When you confirm you've seen it, we call you. One conversation. No pitch deck. Just a real talk about what we'd build and whether we're a fit.</p>
          </div>
        </div>
      </section>

      <hr className="dim" />

      {/* ── SECTION 3: WHY THE QUESTIONS ── */}
      <section style={{padding:"56px 24px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>WHY WE ASK WHAT WE ASK</p>
        <h2 style={{fontSize:30,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:16,lineHeight:1.15}}>
          Every answer shapes<br />what we build for you.
        </h2>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.6)",lineHeight:1.75,marginBottom:28}}>
          Most AI tools ask for your name and email and call it "personalization." We ask about your frustration, your best month, your failed experiments — because that's where the real opportunity lives. The thing that broke is almost always the thing we build first.
        </p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}} className="two-col">
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

      <hr className="dim" />

      {/* ── SECTION 4: THE JOURNEY ── */}
      <section style={{padding:"56px 24px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>WHERE THIS LEADS</p>
        <h2 style={{fontSize:30,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:12,lineHeight:1.15}}>
          This isn't a product.<br />It's a progression.
        </h2>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.55)",lineHeight:1.7,marginBottom:36}}>
          Most people think they need 15 agents on day one. They need one that works. What we've found is that every empire starts with a single genesis — and grows from there.
        </p>

        {[
          { icon:"🥚", phase:"01 — HATCH", title:"Your first agent is born.", body:"Custom-built around the single biggest thing eating your time or killing your growth. Not a template. Not a package. Built for your business, your voice, your problem." },
          { icon:"🎓", phase:"02 — LEARN", title:"You become its operator.", body:"We teach you how to work with it. How to train it when it's off. How to correct it, redirect it, replace it if needed. You're not a user — you're the boss. We make sure you know it." },
          { icon:"🌱", phase:"03 — GROW", title:"One agent becomes a team.", body:"Your first agent proves itself. You see the hours come back. Then you hatch another. Each one custom. Each one solving a real problem. Your team evolves with your business — not from a menu." },
          { icon:"🏛️", phase:"04 — EMPIRE", title:"It runs without you running it.", body:"Your agents coordinate. They hand off work. They run overnight. You show up to the output — not the process. This is what it actually means to build a business that doesn't need you for every task." },
        ].map((p,i) => (
          <div key={i} style={{display:"flex",gap:18,padding:"22px 0",borderBottom: i<3 ? "1px solid #111011":"none",alignItems:"flex-start"}}>
            <div style={{flexShrink:0,fontSize:24,paddingTop:2}}>{p.icon}</div>
            <div>
              <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:5}}>{p.phase}</p>
              <p style={{fontSize:16,fontWeight:800,color:"#fff",marginBottom:8,letterSpacing:"-0.01em",lineHeight:1.3}}>{p.title}</p>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.5)",lineHeight:1.7}}>{p.body}</p>
            </div>
          </div>
        ))}
      </section>

      <hr className="dim" />

      {/* ── SECTION 5: WHAT YOU'RE NOT GETTING ── */}
      <section style={{padding:"56px 24px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>LET'S BE CLEAR</p>
        <h2 style={{fontSize:30,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:16,lineHeight:1.15}}>
          This is not a software subscription.<br />This is not an agency retainer.
        </h2>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.6)",lineHeight:1.75,marginBottom:24}}>
          There's no dashboard to log into. No feature to unlock. No seat to buy. You get a real AI team — agents that live in your workflow, know your business, work on your behalf. Built for you. Owned by you.
        </p>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.6)",lineHeight:1.75}}>
          We hatch the agents. We train you. We stay on as coaches. As your business grows, your team grows with it. This is a relationship — not a product.
        </p>
      </section>

      <hr className="dim" />

      {/* ── SECTION 6: PROOF ── */}
      <section style={{padding:"56px 24px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>WHY WE CAN PROMISE THIS</p>
        <h2 style={{fontSize:30,fontWeight:900,letterSpacing:"-0.025em",color:"#fff",marginBottom:16,lineHeight:1.15}}>
          We ran this on our own business<br />before we offered it to anyone.
        </h2>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.6)",lineHeight:1.75,marginBottom:16}}>
          Everything in this system — the hatching protocol, the training, the coordination, the overnight autonomous work — we built it for ourselves first. Three years of running it before we opened a single spot to anyone outside.
        </p>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.6)",lineHeight:1.75}}>
          We know what it feels like to wake up to work done. To show up to calls already booked. To have your agents hand off to each other while you sleep. We're not selling a theory. We're handing you the keys to something we already drive daily.
        </p>
      </section>

      <hr className="dim" />

      {/* ── SECTION 7: KEEP TEXTING + SOFT CTA ── */}
      <section style={{padding:"56px 24px 80px",maxWidth:640,margin:"0 auto"}}>
        <div style={{background:"#0d0b0d",border:"1px solid rgba(245,158,11,0.2)",borderRadius:14,padding:"32px 28px",textAlign:"center"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:16}}>
            <span className="amber-dot" />
            <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.18em",color:"#f59e0b"}}>YOUR INTERVIEW IS STILL RUNNING</p>
          </div>
          <h3 style={{fontSize:26,fontWeight:900,letterSpacing:"-0.02em",color:"#fff",marginBottom:12,lineHeight:1.2}}>
            Answer every question.<br />Don't leave anything out.
          </h3>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.5)",lineHeight:1.7,marginBottom:24,maxWidth:380,margin:"0 auto 24px"}}>
            The depth of your custom plan depends entirely on the depth of your answers. The more honest you are, the more powerful what we build for you will be.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.35)",lineHeight:1.6}}>
            When you finish, we'll send you a link. When you confirm you've seen it — your phone rings. That's the moment. Don't miss it.
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
