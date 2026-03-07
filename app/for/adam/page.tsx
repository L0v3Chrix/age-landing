import Link from "next/link";

export default function AdamDeliverable() {
  const agents = [
    {
      name: "The Qualifier",
      role: "Lead Quality Agent",
      problem: "You're getting leads. They're just the wrong ones.",
      solution: "Screens every inbound lead before they touch your calendar. Asks the right questions, scores intent, books only the ones worth your time.",
      icon: "🎯",
    },
    {
      name: "The Setter",
      role: "Appointment Agent",
      problem: "Your $7 offer attracts browsers, not buyers.",
      solution: "Runs a pre-call sequence that reframes the prospect before the call. They show up knowing what they're getting into — and excited about it.",
      icon: "📅",
    },
    {
      name: "The Closer",
      role: "Follow-Up Agent",
      problem: "Most leads go cold after one touch.",
      solution: "Automated nurture sequence that runs for 90 days. Warms up every lead who didn't book. Brings them back when they're ready.",
      icon: "🔄",
    },
    {
      name: "The Authority",
      role: "Content Agent",
      problem: "You're running paid ads to cold audiences.",
      solution: "Publishes content daily that attracts $10K–$25K buyers organically. Positions GHL Mastery as the obvious choice before they ever see an ad.",
      icon: "✍️",
    },
    {
      name: "The Architect",
      role: "Proposal Agent",
      problem: "Every AOF proposal takes hours to build.",
      solution: "Takes a call transcript or brief and generates a fully customized $10K–$25K system proposal in minutes. Your brand, their business.",
      icon: "📐",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080608; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .cta { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#080608;font-size:17px;font-weight:900;font-family:inherit;padding:16px 36px;border-radius:10px;text-decoration:none;transition:transform 0.15s,background 0.15s; }
        .cta:hover { transform:translateY(-2px);background:#fbbf24; }
        @media(max-width:640px) {
          .cta { width:100%;font-size:16px; }
          .h1 { font-size:32px !important; }
          .grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{padding:"18px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #141418",background:"rgba(8,6,8,0.95)"}}>
        <Link href="/" style={{fontSize:13,fontWeight:900,letterSpacing:"0.2em",color:"#fff",textDecoration:"none"}}>AGE</Link>
        <span style={{fontSize:11,color:"rgba(255,255,255,0.35)",letterSpacing:"0.08em",fontWeight:600}}>BUILT FOR ADAM · GHL MASTERY</span>
      </nav>

      {/* HERO */}
      <section style={{padding:"60px 24px 48px",maxWidth:640,margin:"0 auto",animation:"fadeUp 0.7s ease both"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:16}}>AGENT GENESIS ENGINE · CUSTOM ANALYSIS</p>
        <h1 className="h1" style={{fontSize:44,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.03em",color:"#fff",marginBottom:20}}>
          Here's what AGE would do<br />
          for <span style={{color:"#f59e0b"}}>GHL Mastery.</span>
        </h1>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.7)",lineHeight:1.65,marginBottom:12}}>
          You told us the problem: low quality appointments. Not enough of the right ones.
        </p>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.85)",fontWeight:500,lineHeight:1.65,marginBottom:0}}>
          Here are the 5 agents we'd hatch for your business — each one custom-built around GHL Mastery's model, your $7 offer funnel, and your goal of filling your calendar with $10K+ buyers.
        </p>
      </section>

      {/* DIVIDER */}
      <div style={{borderTop:"1px solid #1a1a1a",maxWidth:640,margin:"0 auto"}} />

      {/* AGENTS */}
      <section style={{padding:"40px 24px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:28}}>YOUR CUSTOM AGENT TEAM</p>
        <div className="grid" style={{display:"grid",gridTemplateColumns:"1fr",gap:20}}>
          {agents.map((a, i) => (
            <div key={i} style={{background:"#0f0d0f",border:"1px solid #1e1c1e",borderRadius:14,padding:"24px 22px"}}>
              <div style={{display:"flex",alignItems:"flex-start",gap:14,marginBottom:12}}>
                <span style={{fontSize:28,flexShrink:0}}>{a.icon}</span>
                <div>
                  <p style={{fontSize:16,fontWeight:900,color:"#fff",letterSpacing:"-0.01em"}}>{a.name}</p>
                  <p style={{fontSize:11,color:"#f59e0b",fontWeight:700,letterSpacing:"0.1em",marginTop:2}}>{a.role.toUpperCase()}</p>
                </div>
              </div>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.4)",lineHeight:1.6,marginBottom:8,fontStyle:"italic"}}>
                "{a.problem}"
              </p>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.65}}>
                {a.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT THIS MEANS */}
      <section style={{padding:"8px 24px 40px",maxWidth:640,margin:"0 auto"}}>
        <div style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:14,padding:"28px 24px"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:14}}>WHAT THIS MEANS FOR GHL MASTERY</p>
          <p style={{fontSize:17,fontWeight:800,color:"#fff",lineHeight:1.5,marginBottom:12,letterSpacing:"-0.01em"}}>
            Your $7 offer keeps running. The agents just make sure only the right people get through.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.65)",lineHeight:1.7}}>
            Instead of hoping Facebook's algorithm figures it out — your Qualifier screens every lead, your Setter warms them up, your Closer follows up for 90 days. You show up to calls with people who are already sold on the concept. You close more. You work less.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"0 24px 72px",maxWidth:480,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:"clamp(24px,4vw,32px)",fontWeight:900,lineHeight:1.15,letterSpacing:"-0.025em",color:"#fff",marginBottom:10}}>
          These agents are<br />ready to be hatched.
        </p>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.5)",marginBottom:28,lineHeight:1.6}}>
          7 years in. You know what good looks like. Let's build the system that gets you there consistently.
        </p>
        <a className="cta" href="/apply">
          Let's Talk, Adam →
        </a>
        <p style={{marginTop:12,fontSize:11,color:"rgba(255,255,255,0.2)"}}>
          Built specifically for GHL Mastery · Agent Genesis Engine
        </p>
      </section>
    </>
  );
}
