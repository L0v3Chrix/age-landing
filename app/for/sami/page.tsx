import Link from "next/link";

const feed = [
  { time: "6:30 AM", agent: "The Researcher", action: "Overnight market scan complete. 3 niche opportunities flagged with demand signals, competitor gaps, and monetization angles. Report in your inbox.", status: "done" },
  { time: "7:15 AM", agent: "The Builder", action: "New offer landing page drafted from yesterday's validated concept. Copy, structure, and funnel flow — ready for your review in 20 minutes.", status: "done" },
  { time: "9:00 AM", agent: "The Launcher", action: "Brand 3 funnel went live. First opt-ins coming in. A/B test running on headline variants. Early data in 48 hours.", status: "done" },
  { time: "11:30 AM", agent: "The Outreach Agent", action: "Direct outreach sequence fired to 40 qualified prospects across 2 brands. Personalized, not blasted. 6 replies already.", status: "done" },
  { time: "1:00 PM", agent: "Sami", action: "Reviewed overnight research. Approved one new brand concept. Killed another. Zero execution required.", status: "you" },
  { time: "3:00 PM", agent: "The Content Engine", action: "YouTube scripts drafted for 3 brands. LinkedIn posts scheduled. Authority content publishing while you're building the next thing.", status: "done" },
  { time: "Now", agent: "You", action: "Reading this. Your agents ran 4 experiments today. You made the calls.", status: "live" },
];

export default function SamiDeliverable() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080608; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .cta { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#080608;font-size:17px;font-weight:900;font-family:inherit;padding:16px 36px;border-radius:10px;text-decoration:none;transition:transform 0.15s,background 0.15s; }
        .cta:hover { transform:translateY(-2px);background:#fbbf24; }
        .live-dot { width:7px;height:7px;border-radius:50%;background:#22c55e;display:inline-block;animation:blink 1.2s infinite;flex-shrink:0; }
        @media(max-width:640px) { .cta { width:100%; } .h1 { font-size:28px !important; } }
      `}</style>

      {/* NAV */}
      <nav style={{padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #141418",background:"rgba(8,6,8,0.95)",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(12px)"}}>
        <Link href="/" style={{fontSize:13,fontWeight:900,letterSpacing:"0.2em",color:"#fff",textDecoration:"none"}}>AGE</Link>
        <div style={{display:"flex",alignItems:"center",gap:7}}>
          <span className="live-dot" />
          <span style={{fontSize:11,color:"rgba(255,255,255,0.65)",fontWeight:600}}>BUILT FOR SAMI</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{padding:"52px 24px 36px",maxWidth:620,margin:"0 auto",animation:"fadeUp 0.65s ease both"}}>
        <div style={{marginBottom:28}}>
          <p style={{fontSize:15,fontWeight:800,color:"#fff"}}>Sami</p>
          <p style={{fontSize:11,color:"rgba(255,255,255,0.65)",marginTop:2}}>Elevated Wealth Organization · Austin, TX · AI-First Venture Studio</p>
        </div>

        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.22em",color:"#f59e0b",marginBottom:14}}>AGENT GENESIS ENGINE</p>
        <h1 className="h1" style={{fontSize:40,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.03em",color:"#fff",marginBottom:18}}>
          You already think in agents.<br />Now build with them.
        </h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.92)",lineHeight:1.7}}>
          You told us the real problem: <span style={{color:"#fff",fontWeight:600}}>scaling execution without scaling headcount.</span> You've got the strategy, the ideas, the vision. The bottleneck is the fragmented workflow — too many tools, too many manual steps, too many experiments slowed down by execution. Here's what it looks like when the execution layer runs itself.
        </p>
      </section>

      {/* LIVE FEED */}
      <section style={{padding:"0 24px 40px",maxWidth:620,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
          <span className="live-dot" />
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"rgba(255,255,255,0.65)"}}>ELEVATED WEALTH ORGANIZATION · AGENT ACTIVITY LOG</p>
        </div>
        <div style={{background:"#0c0a0c",border:"1px solid #1a1a1a",borderRadius:14,overflow:"hidden"}}>
          {feed.map((item, i) => (
            <div key={i} style={{
              display:"flex",gap:14,padding:"14px 18px",
              borderBottom: i < feed.length - 1 ? "1px solid #141414" : "none",
              background: item.status === "live" ? "rgba(245,158,11,0.06)" : item.status === "you" ? "rgba(255,255,255,0.02)" : "transparent",
              alignItems:"flex-start"
            }}>
              <span style={{fontSize:11,color:"rgba(255,255,255,0.45)",minWidth:44,paddingTop:2,flexShrink:0,fontVariantNumeric:"tabular-nums"}}>{item.time}</span>
              <div style={{flex:1}}>
                <p style={{fontSize:11,fontWeight:700,color:item.status==="live"?"#f59e0b":item.status==="you"?"rgba(255,255,255,0.78)":"#f59e0b",letterSpacing:"0.06em",marginBottom:3}}>
                  {item.agent.toUpperCase()}
                </p>
                <p style={{fontSize:13,color:item.status==="live"?"#fff":"rgba(255,255,255,0.88)",lineHeight:1.5}}>{item.action}</p>
              </div>
              {item.status === "done" && <span style={{fontSize:10,color:"#22c55e",marginTop:3,flexShrink:0}}>✓</span>}
              {item.status === "live" && <span className="live-dot" style={{marginTop:5}} />}
            </div>
          ))}
        </div>
        <p style={{marginTop:12,fontSize:12,color:"rgba(255,255,255,0.45)",textAlign:"center"}}>
          Multiple brands. Multiple experiments. One operator. The agents handle the execution layer.
        </p>
      </section>

      {/* THE DIAGNOSIS */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.15)",borderRadius:14,padding:"24px"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:12}}>WHY VAS AND TOOLS COULDN'T KEEP UP</p>
          <p style={{fontSize:16,fontWeight:800,color:"#fff",lineHeight:1.5,letterSpacing:"-0.01em",marginBottom:10}}>
            You need speed of experimentation.<br />VAs give you speed of execution — on one thing, slowly.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.7}}>
            A venture studio running multiple brands in parallel doesn't have a people problem — it has a coordination problem. Every new brand, offer, or experiment requires the same manual setup: research, funnel, copy, outreach, content. Multiply that by 4 or 5 simultaneous experiments and even a great VA team becomes the bottleneck. Agents don't coordinate — they just execute, in parallel, without being managed.
          </p>
        </div>
      </section>

      {/* YOUR TEAM */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>THE AGENTS WE'D HATCH FOR EWO</p>
        {[
          { icon:"🔬", name:"The Researcher", desc:"Market scans, competitor analysis, demand validation. For every new brand concept or offer idea — overnight research, morning report. You wake up to data, not tasks." },
          { icon:"🏗️", name:"The Builder", desc:"Landing pages, funnel copy, offer structures. New concept approved → page drafted, funnel mapped, copy written. From idea to testable in hours, not weeks." },
          { icon:"🚀", name:"The Launcher", desc:"A/B tests set up, traffic experiments fired, early signals tracked. Each brand gets its own launch sequence. You review results — not run the playbook." },
          { icon:"📣", name:"The Outreach Agent", desc:"Direct outreach across multiple brands, personalized by niche. Referral sequences, partnership pings, warm lead follow-ups. Runs on every brand simultaneously." },
          { icon:"✍️", name:"The Content Engine", desc:"YouTube scripts, LinkedIn posts, short-form content — tied to each brand's authority strategy. Publishing while you're building the next thing." },
          { icon:"📊", name:"The Validator", desc:"Tracks what's working across all experiments. Revenue signals, conversion data, engagement patterns. Tells you what to scale and what to kill before you waste another week on it." },
        ].map((a,i) => (
          <div key={i} style={{display:"flex",gap:16,padding:"16px 0",borderBottom:"1px solid #141414",alignItems:"flex-start"}}>
            <span style={{fontSize:22,flexShrink:0,paddingTop:2}}>{a.icon}</span>
            <div>
              <p style={{fontSize:15,fontWeight:800,color:"#fff",marginBottom:4}}>{a.name}</p>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.82)",lineHeight:1.65}}>{a.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* BEFORE / AFTER */}
      <section style={{padding:"0 24px 36px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>EWO. BEFORE AND AFTER.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",letterSpacing:"0.1em",marginBottom:14}}>BEFORE</p>
            {["Manual setup for every new brand","VA coordination slows experiments","Research takes days, not hours","Funnels built one at a time","Content creation competes with building","Kill decisions made on gut, not data"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.65)",lineHeight:1.6,marginBottom:4}}>— {t}</p>
            ))}
          </div>
          <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.2)",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"#f59e0b",letterSpacing:"0.1em",marginBottom:14}}>AFTER</p>
            {["New brand = new agent stack, live in days","Agents execute in parallel across all brands","Overnight research, morning decisions","Funnels drafted while you sleep","Content engine runs per brand, on schedule","Validator tells you what to scale or kill"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.94)",lineHeight:1.6,marginBottom:4}}>✓ {t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* THE MATCH */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.15)",borderRadius:14,padding:"24px"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:12}}>WHY EWO AND AGE ARE THE SAME IDEA</p>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.94)",lineHeight:1.8}}>
            You're building an AI-first venture studio. We built an AI-first agency to run itself. The architecture is the same — lean operator, agent execution layer, parallel experiments, systems that scale without headcount. You already know this model works. The question is whether you build it yourself over 18 months, or hatch it in 90 days with people who already built it once.
          </p>
        </div>
      </section>

      {/* CLOSE */}
      <section style={{padding:"0 24px 72px",maxWidth:480,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:"clamp(22px,4vw,30px)",fontWeight:900,lineHeight:1.2,letterSpacing:"-0.025em",color:"#fff",marginBottom:10}}>
          4 months into building EWO.<br />
          <span style={{color:"#f59e0b"}}>The execution layer is the<br />last thing you should build manually.</span>
        </p>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.72)",marginBottom:28,lineHeight:1.6}}>
          You've already validated the model. You know what needs to be automated. The agents exist. The only question is how fast you want to move.
        </p>
        <a className="cta" href="/apply" style={{display:"flex",maxWidth:380,margin:"0 auto"}}>
          Let's Build Your Agent Stack, Sami →
        </a>
        <p style={{marginTop:12,fontSize:11,color:"rgba(255,255,255,0.15)"}}>
          Agent Genesis Engine · Built for Sami · Elevated Wealth Organization · Austin, TX
        </p>
      </section>
    </>
  );
}
