import Link from "next/link";

const feed = [
  { time: "Mon 8am", agent: "The Neighbor", action: "Posted in 3 Orlando local Facebook groups: 'This week's basket is almost full — 2 spots left.' 4 DMs received.", status: "done" },
  { time: "Mon 9am", agent: "The Reminder", action: "Text sent to last 6 customers: 'Hey! This week's basket is ready — want to reserve yours?' 4 said yes before noon.", status: "done" },
  { time: "Tue 10am", agent: "The Story", action: "Posted what's inside this week's basket — photo, description, warmth. 22 saves on Instagram. 3 new inquiries.", status: "done" },
  { time: "Wed", agent: "YaYa", action: "Prepped 6 baskets. Delivered to the same neighbors who've been waiting since Sunday.", status: "you" },
  { time: "Wed 5pm", agent: "The Waitlist", action: "3 people tried to order after the 6 slots filled. Waitlist captured. First in line for next week.", status: "done" },
  { time: "Now", agent: "You", action: "Reading this. The agents kept the list warm.", status: "live" },
];

export default function YayaDeliverable() {
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
          <span style={{fontSize:11,color:"rgba(255,255,255,0.4)",fontWeight:600}}>BUILT FOR YAYA</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{padding:"52px 24px 36px",maxWidth:620,margin:"0 auto",animation:"fadeUp 0.65s ease both"}}>
        <div style={{marginBottom:28}}>
          <p style={{fontSize:15,fontWeight:800,color:"#fff"}}>YaYa</p>
          <p style={{fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:2}}>YaYa's Baskets · Orlando, FL · Local Kitchen</p>
        </div>

        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.22em",color:"#f59e0b",marginBottom:14}}>AGENT GENESIS ENGINE</p>
        <h1 className="h1" style={{fontSize:40,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.03em",color:"#fff",marginBottom:18}}>
          6 baskets a week,<br />sold before you start cooking.
        </h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.7)",lineHeight:1.7}}>
          You told us the goal: <span style={{color:"#fff",fontWeight:600}}>stay local, stay small, get in front of the right people.</span> Right now that means texting 8 people and hoping your daughter posts in the right group. Here's what it looks like when agents do that work for you — quietly, consistently, every single week.
        </p>
      </section>

      {/* LIVE FEED */}
      <section style={{padding:"0 24px 40px",maxWidth:620,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
          <span className="live-dot" />
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"rgba(255,255,255,0.4)"}}>YAYA'S BASKETS · AGENT ACTIVITY LOG</p>
        </div>
        <div style={{background:"#0c0a0c",border:"1px solid #1a1a1a",borderRadius:14,overflow:"hidden"}}>
          {feed.map((item, i) => (
            <div key={i} style={{
              display:"flex",gap:14,padding:"14px 18px",
              borderBottom: i < feed.length - 1 ? "1px solid #141414" : "none",
              background: item.status === "live" ? "rgba(245,158,11,0.06)" : item.status === "you" ? "rgba(255,255,255,0.02)" : "transparent",
              alignItems:"flex-start"
            }}>
              <span style={{fontSize:11,color:"rgba(255,255,255,0.25)",minWidth:52,paddingTop:2,flexShrink:0}}>{item.time}</span>
              <div style={{flex:1}}>
                <p style={{fontSize:11,fontWeight:700,color:item.status==="live"?"#f59e0b":item.status==="you"?"rgba(255,255,255,0.5)":"#f59e0b",letterSpacing:"0.06em",marginBottom:3}}>
                  {item.agent.toUpperCase()}
                </p>
                <p style={{fontSize:13,color:item.status==="live"?"#fff":"rgba(255,255,255,0.65)",lineHeight:1.5}}>{item.action}</p>
              </div>
              {item.status === "done" && <span style={{fontSize:10,color:"#22c55e",marginTop:3,flexShrink:0}}>✓</span>}
              {item.status === "live" && <span className="live-dot" style={{marginTop:5}} />}
            </div>
          ))}
        </div>
        <p style={{marginTop:12,fontSize:12,color:"rgba(255,255,255,0.25)",textAlign:"center"}}>
          Small kitchen. Local reach. Agents that keep the 6 slots full every week.
        </p>
      </section>

      {/* THE DIAGNOSIS */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.15)",borderRadius:14,padding:"24px"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:12}}>WHY 8 TEXTS AND A FACEBOOK POST ISN'T ENOUGH</p>
          <p style={{fontSize:16,fontWeight:800,color:"#fff",lineHeight:1.5,letterSpacing:"-0.01em",marginBottom:10}}>
            You have something people want.<br />They just don't know it exists yet.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.6)",lineHeight:1.7}}>
            Word of mouth from one neighbor and an occasional Facebook post means your baskets fill based on luck, not consistency. The fix isn't running ads or going viral — it's showing up in the right local groups every single week, reminding past customers before they forget, and capturing the people who were too late this week so they're first in line next week.
          </p>
        </div>
      </section>

      {/* YOUR TEAM */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>THE AGENTS WE'D HATCH FOR YAYA'S BASKETS</p>
        {[
          { icon:"🏘️", name:"The Neighbor", desc:"Posts in Orlando local Facebook groups, Nextdoor, and neighborhood apps every week. 'This week's basket is ready.' Consistent presence without you lifting a finger." },
          { icon:"💬", name:"The Reminder", desc:"Texts last week's customers every Monday. They already love you — they just need to be reminded to grab their spot before it's gone." },
          { icon:"📋", name:"The Waitlist", desc:"When the 6 slots fill up (and they will), captures everyone who tried to order late. Automatically puts them first next week. No more lost sales." },
          { icon:"📸", name:"The Story", desc:"Weekly content about what's inside the basket — what's fresh, what's seasonal, why you made the choices you made. Builds connection and makes people feel like regulars before they even order." },
        ].map((a,i) => (
          <div key={i} style={{display:"flex",gap:16,padding:"16px 0",borderBottom:"1px solid #141414",alignItems:"flex-start"}}>
            <span style={{fontSize:22,flexShrink:0,paddingTop:2}}>{a.icon}</span>
            <div>
              <p style={{fontSize:15,fontWeight:800,color:"#fff",marginBottom:4}}>{a.name}</p>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.55)",lineHeight:1.65}}>{a.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* BEFORE / AFTER */}
      <section style={{padding:"0 24px 36px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>YOUR WEEK. BEFORE AND AFTER.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.3)",letterSpacing:"0.1em",marginBottom:14}}>BEFORE</p>
            {["Text 8 people and hope","Rely on your daughter to post","Forget who ordered last week","Lose track of people who asked late","Some weeks sell out, some don't","Marketing is another thing on the list"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.6,marginBottom:4}}>— {t}</p>
            ))}
          </div>
          <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.2)",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"#f59e0b",letterSpacing:"0.1em",marginBottom:14}}>AFTER</p>
            {["Local groups posted every week","Regulars reminded automatically","Waitlist captures the latecomers","Basket stories build loyal fans","6 slots filled before Wednesday","Marketing runs while you cook"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.75)",lineHeight:1.6,marginBottom:4}}>✓ {t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section style={{padding:"0 24px 72px",maxWidth:480,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:"clamp(22px,4vw,30px)",fontWeight:900,lineHeight:1.2,letterSpacing:"-0.025em",color:"#fff",marginBottom:10}}>
          You make something people love.<br />
          <span style={{color:"#f59e0b"}}>Let the agents make sure<br />people can find it.</span>
        </p>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.45)",marginBottom:28,lineHeight:1.6}}>
          Small, local, under the radar — that's the goal. These agents don't take you viral. They just make sure your 6 spots are full every single week.
        </p>
        <a className="cta" href="/apply" style={{display:"flex",maxWidth:360,margin:"0 auto"}}>
          Let's Grow YaYa's Baskets →
        </a>
        <p style={{marginTop:12,fontSize:11,color:"rgba(255,255,255,0.15)"}}>
          Agent Genesis Engine · Built for YaYa · YaYa's Baskets · Orlando, FL
        </p>
      </section>
    </>
  );
}
