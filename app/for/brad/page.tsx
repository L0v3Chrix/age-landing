import Link from "next/link";

const feed = [
  { time: "7:14 AM", agent: "The Qualifier", action: "4 DM replies from last night's IG content. Screened. 2 booked. 2 in nurture.", status: "done" },
  { time: "8:02 AM", agent: "The Authority", action: "Published: 'The One Line That Kills Every Close' — IG Reel + YouTube Short.", status: "done" },
  { time: "9:30 AM", agent: "The Setter", action: "Pre-call sequence fired for 10am. Video sent. Mindset primer delivered.", status: "done" },
  { time: "10:00 AM", agent: "Brad", action: "Showed up to a call. Prospect already knew the framework. Asked about pricing.", status: "you" },
  { time: "12:15 PM", agent: "The Closer", action: "Follow-up sent to 6 leads from last month who went cold. 2 replied.", status: "done" },
  { time: "3:00 PM", agent: "The Qualifier", action: "Referral came in. Pre-qualified. Calendar link sent automatically.", status: "done" },
  { time: "5:45 PM", agent: "The Authority", action: "Tomorrow's content scheduled. 3 posts queued across IG and YouTube.", status: "done" },
  { time: "Now", agent: "You", action: "Reading this. The agents kept working.", status: "live" },
];

export default function BradDeliverable() {
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
        @media(max-width:640px) {
          .cta { width:100%; }
          .h1 { font-size:30px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #141418",background:"rgba(8,6,8,0.95)",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(12px)"}}>
        <Link href="/" style={{fontSize:13,fontWeight:900,letterSpacing:"0.2em",color:"#fff",textDecoration:"none"}}>AGE</Link>
        <div style={{display:"flex",alignItems:"center",gap:7}}>
          <span className="live-dot" />
          <span style={{fontSize:11,color:"rgba(255,255,255,0.65)",fontWeight:600}}>BUILT FOR BRAD RASCHKE</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{padding:"52px 24px 36px",maxWidth:620,margin:"0 auto",animation:"fadeUp 0.65s ease both"}}>
        <div style={{marginBottom:28}}>
          <p style={{fontSize:17,fontWeight:800,color:"#fff"}}>Brad Raschke</p>
          <p style={{fontSize:12,color:"rgba(255,255,255,0.65)",marginTop:4}}>Brad Raschke Sales · Austin, TX 🤘 · 3 years · Solo operator</p>
        </div>

        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.22em",color:"#f59e0b",marginBottom:14}}>AGENT GENESIS ENGINE</p>
        <h1 className="h1" style={{fontSize:40,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.03em",color:"#fff",marginBottom:18}}>
          This is what Monday looks like<br />when your agents are live.
        </h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.92)",lineHeight:1.7}}>
          You told us your problem: <span style={{color:"#fff",fontWeight:600}}>not enough qualified leads showing up ready to buy.</span> You burned $5k on paid ads with nothing to show. Here's why that didn't work — and what will.
        </p>
      </section>

      {/* LIVE FEED */}
      <section style={{padding:"0 24px 40px",maxWidth:620,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
          <span className="live-dot" />
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"rgba(255,255,255,0.65)"}}>BRAD RASCHKE SALES · AGENT ACTIVITY LOG</p>
        </div>
        <div style={{background:"#0c0a0c",border:"1px solid #1a1a1a",borderRadius:14,overflow:"hidden"}}>
          {feed.map((item, i) => (
            <div key={i} style={{
              display:"flex",gap:14,padding:"14px 18px",
              borderBottom: i < feed.length - 1 ? "1px solid #141414" : "none",
              background: item.status === "live" ? "rgba(245,158,11,0.06)" : item.status === "you" ? "rgba(255,255,255,0.02)" : "transparent",
              alignItems:"flex-start"
            }}>
              <span style={{fontSize:11,color:"rgba(255,255,255,0.45)",minWidth:48,paddingTop:2,flexShrink:0,fontVariantNumeric:"tabular-nums"}}>{item.time}</span>
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
          This isn't a demo. This is what a real Monday looks like. Agents run whether you do or not.
        </p>
      </section>

      {/* THE DIAGNOSIS */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.15)",borderRadius:14,padding:"24px"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:12}}>WHY PAID ADS BURNED $5K</p>
          <p style={{fontSize:16,fontWeight:800,color:"#fff",lineHeight:1.5,letterSpacing:"-0.01em",marginBottom:10}}>
            Cold traffic → landing page → calendar = strangers on your calls.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.7}}>
            Paid ads work when there's trust already built. You're killing it on Instagram because people <em>know</em> you before they book. The fix isn't more spend — it's turning your content into a machine that warms leads before they ever hit your calendar. That's what the agents do.
          </p>
        </div>
      </section>

      {/* YOUR QUOTE */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <div style={{borderLeft:"3px solid #f59e0b",paddingLeft:16}}>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.85)",fontStyle:"italic",lineHeight:1.65}}>
            "Not enough qualified leads showing up to calls ready to buy."
          </p>
          <p style={{fontSize:11,color:"rgba(255,255,255,0.5)",marginTop:6,fontWeight:600}}>— Brad Raschke</p>
        </div>
      </section>

      {/* AGENTS */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>THE AGENTS WE'D HATCH FOR YOU</p>
        {[
          { icon:"🎯", name:"The Qualifier", desc:"Every IG DM, every referral gets screened before they see your calendar. Scores intent. Books the ones ready to buy. Sends the rest to nurture until they are." },
          { icon:"📅", name:"The Setter", desc:"Pre-call sequence fires after booking. Video intro, framework primer, mindset reset. They show up knowing your method and wanting it." },
          { icon:"🔄", name:"The Closer", desc:"90-day automated follow-up for every lead who ghosted. 12 touchpoints. Brings them back when the timing's right — without you chasing." },
          { icon:"✍️", name:"The Authority", desc:"Daily content across IG and YouTube built from your frameworks. Reels, shorts, carousels — all your voice, automated. Organic leads stack while you coach." },
          { icon:"📊", name:"The Tracker", desc:"Every client interaction logged. Renewal reminders. Churn risk alerts. At $2k/mo per client, one saved client pays for itself 10x." },
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

      {/* THE MATH */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <div style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:14,padding:"24px"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:14}}>THE MATH</p>
          <p style={{fontSize:16,fontWeight:800,color:"#fff",lineHeight:1.5,marginBottom:10}}>
            A good month is 15 clients × $2,000 = $30,000.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.7}}>
            If The Qualifier adds 2 qualified calls a week and The Closer saves 1 churning client a month — that's $6k/mo you weren't getting. The $5k you burned on ads? This would've been smarter.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section style={{padding:"0 24px 36px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>YOUR MONDAY. BEFORE AND AFTER.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",letterSpacing:"0.1em",marginBottom:14}}>BEFORE</p>
            {["Reply to every DM manually","Show up to calls with tire-kickers","Post content when you remember","Chase cold leads yourself","Hope referrals keep coming","Solo everything"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.65)",lineHeight:1.6,marginBottom:4}}>— {t}</p>
            ))}
          </div>
          <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.2)",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"#f59e0b",letterSpacing:"0.1em",marginBottom:14}}>AFTER</p>
            {["DMs screened automatically","Every call is a buyer","Content runs daily without you","Follow-up runs for 90 days","Referrals get qualified instantly","You coach. Agents handle the rest."].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.94)",lineHeight:1.6,marginBottom:4}}>✓ {t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section style={{padding:"0 24px 72px",maxWidth:480,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:"clamp(22px,4vw,30px)",fontWeight:900,lineHeight:1.2,letterSpacing:"-0.025em",color:"#fff",marginBottom:10}}>
          3 years building Brad Raschke Sales.<br />
          <span style={{color:"#f59e0b"}}>90 days to make it run<br />without you running it.</span>
        </p>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.72)",marginBottom:28,lineHeight:1.6}}>
          These agents exist. They're ready. The only question is whether they're working for you or someone else in Austin.
        </p>
        <a className="cta" href="/apply" style={{display:"flex",maxWidth:340,margin:"0 auto"}}>
          Let's Hatch Your Team, Brad →
        </a>
        <p style={{marginTop:12,fontSize:11,color:"rgba(255,255,255,0.15)"}}>
          Agent Genesis Engine · Built for Brad Raschke · Austin, TX
        </p>
      </section>
    </>
  );
}
