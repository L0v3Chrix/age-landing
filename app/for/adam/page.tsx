import Link from "next/link";
import Image from "next/image";

export default function AdamDeliverable() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080608; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .cta { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#080608;font-size:17px;font-weight:900;font-family:inherit;padding:16px 36px;border-radius:10px;text-decoration:none;transition:transform 0.15s,background 0.15s; }
        .cta:hover { transform:translateY(-2px);background:#fbbf24; }
        .card { background:#0f0d0f;border:1px solid #1e1c1e;border-radius:14px;padding:24px; }
        @media(max-width:640px) {
          .cta { width:100%; }
          .h1 { font-size:32px !important; }
          .profile-row { flex-direction:column !important;align-items:flex-start !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{padding:"18px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #141418",background:"rgba(8,6,8,0.95)",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(12px)"}}>
        <Link href="/" style={{fontSize:13,fontWeight:900,letterSpacing:"0.2em",color:"#fff",textDecoration:"none"}}>AGE</Link>
        <span style={{fontSize:11,color:"#f59e0b",letterSpacing:"0.08em",fontWeight:700}}>BUILT FOR ADAM MCINNES</span>
      </nav>

      {/* HERO */}
      <section style={{padding:"52px 24px 40px",maxWidth:640,margin:"0 auto",animation:"fadeUp 0.7s ease both"}}>

        {/* Profile row */}
        <div className="profile-row" style={{display:"flex",alignItems:"center",gap:16,marginBottom:32}}>
          <Image
            src="/assets/adam-mcinnes.jpg"
            alt="Adam McInnes"
            width={64}
            height={64}
            style={{borderRadius:"50%",border:"2px solid #f59e0b",flexShrink:0}}
          />
          <div>
            <p style={{fontSize:16,fontWeight:800,color:"#fff"}}>Adam McInnes</p>
            <p style={{fontSize:12,color:"rgba(255,255,255,0.45)",marginTop:2}}>GHL Mastery · Calgary, Alberta 🇨🇦 · 7 years running</p>
          </div>
        </div>

        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:14}}>AGENT GENESIS ENGINE · CUSTOM BUILD PLAN</p>
        <h1 className="h1" style={{fontSize:42,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.03em",color:"#fff",marginBottom:20}}>
          Adam, we built this<br />specifically for<br /><span style={{color:"#f59e0b"}}>GHL Mastery.</span>
        </h1>

        {/* His own words */}
        <div style={{borderLeft:"3px solid #f59e0b",paddingLeft:16,marginBottom:24}}>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.6)",fontStyle:"italic",lineHeight:1.65}}>
            "My biggest frustration is low quality appointments and not enough great appointments."
          </p>
          <p style={{fontSize:11,color:"rgba(255,255,255,0.3)",marginTop:6,fontWeight:600}}>— Adam McInnes, 5 minutes ago</p>
        </div>

        <p style={{fontSize:16,color:"rgba(255,255,255,0.8)",lineHeight:1.7}}>
          You've been running this for 7 years. The model works. Your $7 offer is getting eyeballs. The problem isn't the top of funnel — it's what happens after the form. Here's what we'd build.
        </p>
      </section>

      <div style={{borderTop:"1px solid #1a1a1a",maxWidth:640,margin:"0 auto"}} />

      {/* THE CORE INSIGHT */}
      <section style={{padding:"36px 24px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:16}}>THE DIAGNOSIS</p>
        <div className="card" style={{background:"#0c0a0c",borderColor:"rgba(245,158,11,0.2)"}}>
          <p style={{fontSize:17,fontWeight:800,color:"#fff",lineHeight:1.5,marginBottom:10,letterSpacing:"-0.01em"}}>
            Facebook ads → lead form → $7 offer → calendar = volume without quality control.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.6)",lineHeight:1.7}}>
            Boosting didn't fix it because the problem isn't reach — it's pre-qualification. You need a layer between "they clicked" and "they're on your calendar." That layer doesn't exist yet. We build it.
          </p>
        </div>
      </section>

      {/* AGENTS */}
      <section style={{padding:"8px 24px 36px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:20}}>YOUR 5 CUSTOM AGENTS</p>

        {/* Agent 1 — with mock output */}
        <div className="card" style={{marginBottom:16}}>
          <div style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:14}}>
            <span style={{fontSize:24,flexShrink:0}}>🎯</span>
            <div>
              <p style={{fontSize:15,fontWeight:900,color:"#fff"}}>The Qualifier</p>
              <p style={{fontSize:10,color:"#f59e0b",fontWeight:700,letterSpacing:"0.1em",marginTop:2}}>LEAD QUALITY AGENT</p>
            </div>
          </div>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.75)",lineHeight:1.65,marginBottom:16}}>
            Screens every Facebook lead before they touch your calendar. Asks the right questions, scores intent, only books the ones worth your time.
          </p>
          {/* Mock output */}
          <div style={{background:"#080608",borderRadius:10,padding:"14px 16px",border:"1px solid #1a1a1a"}}>
            <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.1em",color:"rgba(255,255,255,0.3)",marginBottom:10}}>SAMPLE — QUALIFIER IN ACTION</p>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {[
                {from:"qualifier",msg:"Hey! Just saw you grabbed the GHL Mastery access. Quick question before we get you booked — how long have you been running your agency?"},
                {from:"lead",msg:"About 6 months"},
                {from:"qualifier",msg:"Nice, you're in the right spot. Are you currently making money with GHL or still setting things up?"},
                {from:"lead",msg:"Making some, around 2-3k/mo"},
                {from:"qualifier",msg:"Perfect. That's exactly where this helps most. What's your goal — $10k/mo, $25k, or more?"},
              ].map((m,i) => (
                <div key={i} style={{display:"flex",justifyContent:m.from==="lead"?"flex-end":"flex-start"}}>
                  <div style={{background:m.from==="qualifier"?"#1a1a24":"rgba(245,158,11,0.15)",borderRadius:10,padding:"8px 12px",maxWidth:"80%"}}>
                    <p style={{fontSize:12,color:m.from==="qualifier"?"rgba(255,255,255,0.75)":"#f59e0b",lineHeight:1.5}}>{m.msg}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:10}}>Only leads who pass the qualifier get a calendar link. Everyone else stays in nurture.</p>
          </div>
        </div>

        {[
          {
            icon:"📅", name:"The Setter", role:"APPOINTMENT AGENT",
            body:"Runs a pre-call sequence after booking. Sends them a short video, a mindset primer, and a reminder 30 min before the call. They show up knowing what they're getting into — and wanting it.",
          },
          {
            icon:"🔄", name:"The Closer", role:"FOLLOW-UP AGENT",
            body:"90-day automated nurture for every lead who didn't book or went cold. Touches them 12 times across SMS and email. Brings them back when the timing's right — without you lifting a finger.",
          },
          {
            icon:"✍️", name:"The Authority", role:"CONTENT AGENT",
            body:"Publishes GHL-specific content daily across your channels. Shorts, posts, emails — all built around your framework. Positions you as the obvious choice before a lead ever sees your ad.",
          },
          {
            icon:"📐", name:"The Architect", role:"PROPOSAL AGENT",
            body:"Takes any discovery call and generates a fully scoped $10K–$25K AOF proposal in minutes. Your brand, their business, your pricing. Done before you leave the Zoom.",
          },
        ].map((a,i) => (
          <div key={i} className="card" style={{marginBottom:16}}>
            <div style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:12}}>
              <span style={{fontSize:24,flexShrink:0}}>{a.icon}</span>
              <div>
                <p style={{fontSize:15,fontWeight:900,color:"#fff"}}>{a.name}</p>
                <p style={{fontSize:10,color:"#f59e0b",fontWeight:700,letterSpacing:"0.1em",marginTop:2}}>{a.role}</p>
              </div>
            </div>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.75)",lineHeight:1.65}}>{a.body}</p>
          </div>
        ))}
      </section>

      {/* COMPETITIVE */}
      <section style={{padding:"0 24px 36px",maxWidth:640,margin:"0 auto"}}>
        <div className="card" style={{background:"#0c0a0c",borderColor:"rgba(245,158,11,0.15)"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",color:"#f59e0b",marginBottom:12}}>WHILE YOU WERE READING THIS</p>
          <p style={{fontSize:16,fontWeight:800,color:"#fff",lineHeight:1.5,letterSpacing:"-0.01em"}}>
            Every other GHL consultant is still manually screening calls. Reading lead forms. Sending follow-ups one at a time.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.55)",lineHeight:1.65,marginTop:10}}>
            You won't be. Your agents run 24/7. They don't take days off and they don't forget to follow up. 7 years of building the business — 90 days to make it run without you running it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"0 24px 72px",maxWidth:480,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:"clamp(24px,4vw,32px)",fontWeight:900,lineHeight:1.15,letterSpacing:"-0.025em",color:"#fff",marginBottom:10}}>
          These agents are<br />ready to be hatched.
        </p>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.5)",marginBottom:28,lineHeight:1.6}}>
          Built for GHL Mastery. Not a template. Not a guess. Your business, your agents.
        </p>
        <a className="cta" href="/apply" style={{display:"flex",maxWidth:340,margin:"0 auto"}}>
          Let's Talk, Adam →
        </a>
        <p style={{marginTop:12,fontSize:11,color:"rgba(255,255,255,0.2)"}}>
          Agent Genesis Engine · Built for Adam McInnes
        </p>
      </section>
    </>
  );
}
