import Link from "next/link";
import Image from "next/image";

const feed = [
  { time: "6:12 AM", agent: "The Qualifier", action: "3 new leads from last night's Facebook ads. Screened. 1 booked. 2 in nurture.", status: "done" },
  { time: "6:47 AM", agent: "The Authority", action: "Published: 'Why Your GHL Snapshot Isn't Closing Deals' — LinkedIn + YouTube short.", status: "done" },
  { time: "8:03 AM", agent: "The Setter", action: "Pre-call sequence fired for 9am booking. Video sent. Reminder queued.", status: "done" },
  { time: "9:00 AM", agent: "Adam", action: "Showed up to a call. Lead already knew the AOF method. Asked to buy.", status: "you" },
  { time: "11:22 AM", agent: "The Closer", action: "Follow-up sent to 4 leads who went cold last week. 1 replied.", status: "done" },
  { time: "2:15 PM", agent: "The Architect", action: "Proposal generated from morning call transcript. $18,500. Sent.", status: "done" },
  { time: "4:41 PM", agent: "The Qualifier", action: "2 more leads screened. 1 qualified. Calendar link sent.", status: "done" },
  { time: "Now", agent: "You", action: "Reading this. The agents kept working.", status: "live" },
];

export default function AdamDeliverable() {
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
          <span style={{fontSize:11,color:"rgba(255,255,255,0.65)",fontWeight:600}}>BUILT FOR ADAM MCINNES</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{padding:"52px 24px 36px",maxWidth:620,margin:"0 auto",animation:"fadeUp 0.65s ease both"}}>
        <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:28}}>
          <Image src="/assets/adam-mcinnes.jpg" alt="Adam McInnes" width={56} height={56}
            style={{borderRadius:"50%",border:"2px solid #f59e0b",flexShrink:0}} />
          <div>
            <p style={{fontSize:15,fontWeight:800,color:"#fff"}}>Adam McInnes</p>
            <p style={{fontSize:11,color:"rgba(255,255,255,0.65)",marginTop:2}}>GHL Mastery · Calgary 🇨🇦 · 7 years</p>
          </div>
        </div>

        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.22em",color:"#f59e0b",marginBottom:14}}>AGENT GENESIS ENGINE</p>
        <h1 className="h1" style={{fontSize:40,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.03em",color:"#fff",marginBottom:18}}>
          This is what Monday looks like<br />when your agents are live.
        </h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.92)",lineHeight:1.7,marginBottom:0}}>
          You told us your problem: <span style={{color:"#fff",fontWeight:600}}>low quality appointments.</span> Not enough of the right ones. You tried boosting. It didn't work. Here's why — and here's the fix. Built specifically for GHL Mastery.
        </p>
      </section>

      {/* LIVE FEED */}
      <section style={{padding:"0 24px 40px",maxWidth:620,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
          <span className="live-dot" />
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"rgba(255,255,255,0.65)"}}>GHL MASTERY · AGENT ACTIVITY LOG</p>
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
          This isn't a demo. This is what a real Monday looks like. Your agents run whether you do or not.
        </p>
      </section>

      {/* THE DIAGNOSIS */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.15)",borderRadius:14,padding:"24px"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:12}}>WHY BOOSTING DIDN'T WORK</p>
          <p style={{fontSize:16,fontWeight:800,color:"#fff",lineHeight:1.5,letterSpacing:"-0.01em",marginBottom:10}}>
            Facebook → $7 offer → lead form → calendar.<br />No filter. No quality control. Volume without signal.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.7}}>
            Boosting sends more people through the same broken path. More bad appointments, not better ones. The fix isn't more traffic — it's a layer between the form and your calendar that only lets the right people through. That's The Qualifier. It runs 24/7 and it never lets a bad lead touch your time.
          </p>
        </div>
      </section>

      {/* YOUR TEAM */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>THE AGENTS WE'D HATCH FOR YOU</p>
        {[
          { icon:"🎯", name:"The Qualifier", desc:"Every Facebook lead gets screened before they see your calendar. Scores intent. Books the ones worth your time. Sends the rest to nurture." },
          { icon:"📅", name:"The Setter", desc:"Pre-call sequence runs after every booking. Sends a video, a primer, a reminder. They show up sold before you say a word." },
          { icon:"🔄", name:"The Closer", desc:"90-day follow-up sequence for every lead who went cold. 12 touchpoints. Brings them back when they're ready — you never see the list." },
          { icon:"✍️", name:"The Authority", desc:"Daily GHL content across every channel. Built around your framework and voice. Organic leads find you before they find an ad." },
          { icon:"📐", name:"The Architect", desc:"Call transcript in → $10K–$25K AOF proposal out. Your pricing, their business, your brand. Done before you close the Zoom." },
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
            {["Scroll through lead form submissions","Manually text back every lead","Show up to calls with tire-kickers","Spend hours on proposals","Chase cold leads yourself","Run the ads, then run the follow-up"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.65)",lineHeight:1.6,marginBottom:4}}>— {t}</p>
            ))}
          </div>
          <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.2)",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"#f59e0b",letterSpacing:"0.1em",marginBottom:14}}>AFTER</p>
            {["Calendar already filtered","Leads pre-warmed before the call","Every call is a buyer","Proposals write themselves","Follow-up runs for 90 days","Agents handle it while you sleep"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.94)",lineHeight:1.6,marginBottom:4}}>✓ {t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section style={{padding:"0 24px 72px",maxWidth:480,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:"clamp(22px,4vw,30px)",fontWeight:900,lineHeight:1.2,letterSpacing:"-0.025em",color:"#fff",marginBottom:10}}>
          7 years building GHL Mastery.<br />
          <span style={{color:"#f59e0b"}}>90 days to make it run<br />without you running it.</span>
        </p>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.72)",marginBottom:28,lineHeight:1.6}}>
          These agents exist. They're ready. The only question is whether they're working for GHL Mastery or someone else.
        </p>
        <a className="cta" href="/apply" style={{display:"flex",maxWidth:340,margin:"0 auto"}}>
          Let's Hatch Your Team, Adam →
        </a>
        <p style={{marginTop:12,fontSize:11,color:"rgba(255,255,255,0.15)"}}>
          Agent Genesis Engine · Built for Adam McInnes · GHL Mastery
        </p>
      </section>
    </>
  );
}
