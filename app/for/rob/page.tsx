import Link from "next/link";

const feed = [
  { time: "6:45 AM", agent: "The Job Costing Agent", action: "Last night's job finished. Labor hours logged, materials reconciled, margin calculated. Report waiting in your inbox before your first coffee.", status: "done" },
  { time: "7:30 AM", agent: "The Scheduler", action: "3 cabinet makers scheduled for today. Conflicts flagged yesterday — resolved before anyone showed up to the wrong site.", status: "done" },
  { time: "9:00 AM", agent: "The Estimator", action: "New residential inquiry from referral came in overnight. Scope pulled, ballpark estimate drafted ($38k), follow-up sequence armed.", status: "done" },
  { time: "10:15 AM", agent: "The Qualifier", action: "2 inbound leads from Google. One qualified ($45k kitchen remodel). One screened out (budget mismatch). Sales team only sees the real ones.", status: "done" },
  { time: "1:00 PM", agent: "Rob", action: "Reviewed morning report. Approved estimate. Met with a client. No fires to put out.", status: "you" },
  { time: "3:30 PM", agent: "The Referral", action: "Job completed last week — thank you sent, review request fired on day 3, referral ask queued for day 7.", status: "done" },
  { time: "Now", agent: "You", action: "Reading this. Your agents kept the operation running.", status: "live" },
];

export default function RobDeliverable() {
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
          <span style={{fontSize:11,color:"rgba(255,255,255,0.65)",fontWeight:600}}>BUILT FOR ROB COLVARD</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{padding:"52px 24px 36px",maxWidth:620,margin:"0 auto",animation:"fadeUp 0.65s ease both"}}>
        <div style={{marginBottom:28}}>
          <p style={{fontSize:15,fontWeight:800,color:"#fff"}}>Rob Colvard</p>
          <p style={{fontSize:11,color:"rgba(255,255,255,0.65)",marginTop:2}}>Rob's Custom Cabinet Company · Austin, TX · 20 years</p>
        </div>

        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.22em",color:"#f59e0b",marginBottom:14}}>AGENT GENESIS ENGINE</p>
        <h1 className="h1" style={{fontSize:40,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.03em",color:"#fff",marginBottom:18}}>
          20 years of craft.<br />The operations should<br />run as clean as the work.
        </h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.92)",lineHeight:1.7}}>
          You told us the real pain: <span style={{color:"#fff",fontWeight:600}}>payroll, job costing, scheduling, keeping good people.</span> At $100k months with a team of 15, those aren't small problems. Here's what it looks like when agents handle the operational weight — so you can focus on the work that actually requires Rob Colvard.
        </p>
      </section>

      {/* LIVE FEED */}
      <section style={{padding:"0 24px 40px",maxWidth:620,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
          <span className="live-dot" />
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"rgba(255,255,255,0.65)"}}>ROB'S CUSTOM CABINET CO. · AGENT ACTIVITY LOG</p>
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
          15 people. $100k months. The agents handle the overhead — you run the operation.
        </p>
      </section>

      {/* THE DIAGNOSIS */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.15)",borderRadius:14,padding:"24px"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:12}}>WHY ANGIE DIDN'T WORK — AND WHAT DOES</p>
          <p style={{fontSize:16,fontWeight:800,color:"#fff",lineHeight:1.5,letterSpacing:"-0.01em",marginBottom:10}}>
            Angie sends volume. You need quality.<br />A $40k cabinet job doesn't come from a lead marketplace.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.7}}>
            Your best clients come from referrals — people who already trust the work before they call. The problem isn't lead generation, it's lead capture and follow-through. When a referral reaches out and you're slammed, do they hear back fast enough? When a job closes, does anyone systematically ask for the next referral? Agents don't replace word of mouth — they make sure none of it falls through the cracks.
          </p>
        </div>
      </section>

      {/* YOUR TEAM */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>THE AGENTS WE'D HATCH FOR ROB'S CABINET CO.</p>
        {[
          { icon:"📊", name:"The Job Costing Agent", desc:"Every job tracked in real time — labor hours, materials, margin. Catches overruns before they eat your profit. Morning report ready before your crew arrives." },
          { icon:"📅", name:"The Scheduler", desc:"Coordinates your 10 cabinet makers across active jobs. Flags conflicts before they happen. Right people, right site, every day — without the admin scramble." },
          { icon:"🎯", name:"The Qualifier", desc:"Every inbound inquiry pre-screened before it hits your sales team. Budget, scope, timeline — only real $30k+ jobs get through. No more chasing tire-kickers." },
          { icon:"💼", name:"The Estimator", desc:"New inquiry comes in — scope analyzed, ballpark drafted, follow-up sequence armed. Your sales team walks into every call already prepared." },
          { icon:"🤝", name:"The Referral", desc:"Post-job sequence: thank you, review request on day 3, referral ask on day 7. 20 years of satisfied clients — agents make sure they're actively sending you more." },
          { icon:"👷", name:"The Retention Agent", desc:"Check-ins with your team. Pulse on morale. Flags disengagement before someone walks. Employee retention built into your operations, not an afterthought." },
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
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>YOUR WEEK. BEFORE AND AFTER.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",letterSpacing:"0.1em",marginBottom:14}}>BEFORE</p>
            {["Chase job costing manually","Scramble to fix scheduling conflicts","Follow up on quotes yourself","Hope referrals mention you","Lose good people without warning","Admin work crowds out real work"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.65)",lineHeight:1.6,marginBottom:4}}>— {t}</p>
            ))}
          </div>
          <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.2)",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"#f59e0b",letterSpacing:"0.1em",marginBottom:14}}>AFTER</p>
            {["Margin reports waiting each morning","Schedule conflicts caught the night before","Estimates drafted before you're asked","Referral sequences fire automatically","Team pulse monitored and flagged","You run the business, not the busywork"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.94)",lineHeight:1.6,marginBottom:4}}>✓ {t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section style={{padding:"0 24px 72px",maxWidth:480,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:"clamp(22px,4vw,30px)",fontWeight:900,lineHeight:1.2,letterSpacing:"-0.025em",color:"#fff",marginBottom:10}}>
          20 years building something real.<br />
          <span style={{color:"#f59e0b"}}>Let the agents handle<br />everything that isn't the craft.</span>
        </p>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.72)",marginBottom:28,lineHeight:1.6}}>
          Payroll headaches, job costing gaps, scheduling fires, good people leaving — those aren't cabinet problems. They're operations problems. And operations problems have agents.
        </p>
        <a className="cta" href="/apply" style={{display:"flex",maxWidth:380,margin:"0 auto"}}>
          Let's Build Your Agent Team, Rob →
        </a>
        <p style={{marginTop:12,fontSize:11,color:"rgba(255,255,255,0.15)"}}>
          Agent Genesis Engine · Built for Rob Colvard · Rob's Custom Cabinet Company · Austin, TX
        </p>
      </section>
    </>
  );
}
