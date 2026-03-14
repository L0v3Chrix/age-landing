import Link from "next/link";

const feed = [
  { time: "6:08 AM", agent: "The Dispatcher", action: "Emergency call came in at 6am. Screened, qualified, routed to your calendar. Lead already has your ETA.", status: "done" },
  { time: "7:30 AM", agent: "The Reputation", action: "3 completed jobs from yesterday — Google review requests sent to all 3. 1 already left 5 stars.", status: "done" },
  { time: "9:15 AM", agent: "The Follow-Up", action: "Quote sent Thursday still open. Nudge fired: 'Hey, just wanted to make sure you got that estimate — any questions?' Reply incoming.", status: "done" },
  { time: "11:02 AM", agent: "The Authority", action: "Posted: 'Why your water heater is making that noise (and when to call)' — Facebook + Nextdoor. 14 reactions.", status: "done" },
  { time: "1:30 PM", agent: "Justin", action: "Showed up to the job. Customer already trusted you before you knocked.", status: "you" },
  { time: "3:45 PM", agent: "The Referral", action: "Post-job sequence fired. Thank you text sent. Referral ask queued for day 3.", status: "done" },
  { time: "Now", agent: "You", action: "Reading this. Your agents kept the phone ringing.", status: "live" },
];

export default function JustinDeliverable() {
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
          <span style={{fontSize:11,color:"rgba(255,255,255,0.65)",fontWeight:600}}>BUILT FOR JUSTIN SIMS</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{padding:"52px 24px 36px",maxWidth:620,margin:"0 auto",animation:"fadeUp 0.65s ease both"}}>
        <div style={{marginBottom:28}}>
          <p style={{fontSize:15,fontWeight:800,color:"#fff"}}>Justin Sims</p>
          <p style={{fontSize:11,color:"rgba(255,255,255,0.65)",marginTop:2}}>SimsCo Mechanical & Plumbing · Austin, TX · 7 years</p>
        </div>

        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.22em",color:"#f59e0b",marginBottom:14}}>AGENT GENESIS ENGINE</p>
        <h1 className="h1" style={{fontSize:40,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.03em",color:"#fff",marginBottom:18}}>
          This is what Monday looks like<br />when your phone rings itself.
        </h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.92)",lineHeight:1.7}}>
          You built SimsCo on <span style={{color:"#fff",fontWeight:600}}>word of mouth, Facebook, and showing up.</span> That got you to $50–75k months. Here's what happens when you add agents that work the leads while you work the jobs.
        </p>
      </section>

      {/* LIVE FEED */}
      <section style={{padding:"0 24px 40px",maxWidth:620,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
          <span className="live-dot" />
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"rgba(255,255,255,0.65)"}}>SIMSCO MECHANICAL & PLUMBING · AGENT ACTIVITY LOG</p>
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
          This isn't a demo. This is what a real Monday looks like for a plumber with agents on the clock.
        </p>
      </section>

      {/* THE DIAGNOSIS */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.15)",borderRadius:14,padding:"24px"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:12}}>WHY WORD OF MOUTH HAS A CEILING</p>
          <p style={{fontSize:16,fontWeight:800,color:"#fff",lineHeight:1.5,letterSpacing:"-0.01em",marginBottom:10}}>
            Word of mouth works — until it doesn't.<br />You can't scale what only happens when you're not busy.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.7}}>
            When you're slammed, you're not following up. When you're slow, you're scrambling. The agents break that cycle — they follow up on quotes, ask for reviews after every job, and post content on Facebook and Nextdoor whether you're on a job site or at church. The phone keeps ringing on both kinds of days.
          </p>
        </div>
      </section>

      {/* YOUR TEAM */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>THE AGENTS WE'D HATCH FOR SIMSCO</p>
        {[
          { icon:"📞", name:"The Dispatcher", desc:"Every inbound lead gets screened and routed fast. Emergency calls get priority. Non-urgent gets scheduled. Nobody waits and wonders." },
          { icon:"⭐", name:"The Reputation", desc:"After every completed job, a review request goes out automatically. Google, Facebook — wherever you need it. More 5-star reviews, less manual asking." },
          { icon:"🔁", name:"The Follow-Up", desc:"Every quote that goes cold gets a nudge. Friendly, timed, not pushy. Converts the maybes into booked jobs without you chasing them." },
          { icon:"📣", name:"The Authority", desc:"Weekly plumbing tips on Facebook and Nextdoor. Seasonal content. Position SimsCo as the go-to in Austin before anyone even needs a plumber." },
          { icon:"🤝", name:"The Referral", desc:"Post-job sequence: thank you text, then a referral ask on day 3. Turns happy customers into your best salespeople — automatically." },
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
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>YOUR MONDAY. BEFORE AND AFTER.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",letterSpacing:"0.1em",marginBottom:14}}>BEFORE</p>
            {["Chase quotes that went quiet","Manually ask for Google reviews","Post on Facebook when you have time","Miss calls while on a job","Hope referrals come in on their own","Hustle harder on slow weeks"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.65)",lineHeight:1.6,marginBottom:4}}>— {t}</p>
            ))}
          </div>
          <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.2)",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"#f59e0b",letterSpacing:"0.1em",marginBottom:14}}>AFTER</p>
            {["Follow-ups run automatically","Reviews requested after every job","Content posts on schedule","Leads routed while you're on-site","Referral sequences fire on day 3","Pipeline stays full whether you're busy or slow"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.94)",lineHeight:1.6,marginBottom:4}}>✓ {t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section style={{padding:"0 24px 72px",maxWidth:480,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:"clamp(22px,4vw,30px)",fontWeight:900,lineHeight:1.2,letterSpacing:"-0.025em",color:"#fff",marginBottom:10}}>
          7 years building SimsCo on hustle.<br />
          <span style={{color:"#f59e0b"}}>Now let the agents<br />do the hustling.</span>
        </p>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.72)",marginBottom:28,lineHeight:1.6}}>
          These agents are built for plumbers. Not templates — built for SimsCo, Austin, the way you work. The only question is whether they're running for you or your competition.
        </p>
        <a className="cta" href="/apply" style={{display:"flex",maxWidth:360,margin:"0 auto"}}>
          Let's Hatch Your Team, Justin →
        </a>
        <p style={{marginTop:12,fontSize:11,color:"rgba(255,255,255,0.15)"}}>
          Agent Genesis Engine · Built for Justin Sims · SimsCo Mechanical & Plumbing
        </p>
      </section>
    </>
  );
}
