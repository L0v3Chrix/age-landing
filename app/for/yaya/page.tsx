"use client";
import Link from "next/link";

const feed = [
  { time: "Mon 7am", biz: "Yaya's", agent: "The Neighbor", action: "Posted in 4 Orlando neighborhood Facebook groups and Nextdoor: 'This week's basket is almost full — 2 spots left. 3 dinners + homemade bread, delivered Wednesday.' 6 DMs by 9am.", status: "done" },
  { time: "Mon 8am", biz: "LOVe Lab", agent: "The Recruiter", action: "Sent warm intro to 3 Orlando couples therapists: 'I run a guided 2-3 day experience for couples. Would love to offer your clients a complimentary date night as a gift from your practice.' 1 reply within the hour.", status: "done" },
  { time: "Mon 9am", biz: "Yaya's", agent: "The Reminder", action: "Texted last week's 6 families: 'Hey! This week's basket is ready — want to grab your spot?' 5 said yes before 10am.", status: "done" },
  { time: "Mon 11am", biz: "LOVe Lab", agent: "The Matchmaker", action: "Sarah & Mike completed the quiz. Matched 7 Blocks from the library: Intimacy Reset + Playfulness tone + Slow Morning ritual. 3-day experience assembled and emailed automatically.", status: "done" },
  { time: "Tue 9am", biz: "Yaya's", agent: "The Story", action: "Posted this week's basket contents: roasted chicken, lemon pasta, hearty stew, sourdough. 34 saves. 5 new people asked about next week.", status: "done" },
  { time: "Tue 2pm", biz: "LOVe Lab", agent: "The Concierge", action: "Day 2 nudge sent to Sarah & Mike: 'Today's experiment: cook together. Your playlist is in the app. No phones at the table tonight.' Opened within 4 minutes.", status: "done" },
  { time: "Wed", biz: "Yaya's", agent: "YaYa", action: "Cooked. Delivered 6 baskets. Every slot full before you started.", status: "you" },
  { time: "Wed 5pm", biz: "Yaya's", agent: "The Waitlist", action: "3 people tried to order after slots filled. Captured on waitlist. First in line next week. No lost sales.", status: "done" },
  { time: "Fri", biz: "LOVe Lab", agent: "The Follow-Up", action: "Post-experience check-in to Sarah & Mike: 'How was it?' They replied with a paragraph. Testimonial captured. Offered Date Night Chemistry subscription. They said yes.", status: "done" },
  { time: "Now", biz: "Both", agent: "You", action: "Reading this. The agents kept everything warm.", status: "live" },
];

const yayas_agents = [
  { icon: "🏘️", name: "The Neighbor", desc: "Posts in Orlando local Facebook groups, Nextdoor, and neighborhood apps every week. 'This week's basket is ready.' Consistent presence without you lifting a finger. Shows up where your customers actually are." },
  { icon: "💬", name: "The Reminder", desc: "Texts last week's customers every Monday morning. They already love you — they just need to be reminded to grab their spot before it's gone. The easiest sale you'll ever make." },
  { icon: "📋", name: "The Waitlist", desc: "When the 6 slots fill (and they will), captures everyone who tried to order late. Automatically puts them first next week. Turns 'sorry we're full' into 'you're first for next week.'" },
  { icon: "📸", name: "The Story", desc: "Weekly content about what's in the basket — what's fresh, what's seasonal, why you made the choices you made. Builds a loyal audience that feels like regulars before they even order." },
];

const lovelabs_agents = [
  { icon: "🧪", name: "The Matchmaker", desc: "Sends couples a short intake quiz. Parses their responses — energy level, relationship goals, comfort zones, love languages. Selects the right Blocks from your 100-block library and assembles a personalized 2-3 day experience. No two couples get the same plan. You do nothing." },
  { icon: "🎯", name: "The Concierge", desc: "Once a couple starts their experience, sends daily guidance, reminders, and prompts at the right time each day. Morning ritual at 8am. Evening reflection at 7pm. Playlists, recipes, and conversation starters — all from your Block system, delivered on autopilot." },
  { icon: "💌", name: "The Follow-Up", desc: "3 days after the experience ends: 'How was it?' Captures their story, asks for a testimonial, and offers a gentle upsell to Date Night Chemistry or LOVe Language Lab subscription. One message. Three outcomes." },
  { icon: "🤝", name: "The Recruiter", desc: "Quietly reaches out to couples therapists, marriage counselors, and relationship coaches in your area. Warm, human intro — not spam. Offers a complimentary experience for one of their clients. One good therapist referral relationship could keep you booked for months." },
  { icon: "💎", name: "The Subscriber", desc: "Manages your Date Night Chemistry and LOVe Language Lab subscriptions. Sends monthly personalized content assembled from your Blocks. Keeps subscribers engaged and reduces churn. Your most reliable recurring income." },
];

const setupPhases = [
  {
    phase: "Phase 1 — Your Mac",
    timing: "Day 1",
    steps: [
      "Plug it in and turn it on",
      "Sign in with your Apple ID — or create one free at appleid.apple.com",
      "System Settings → General → Software Update → install everything",
      "That's it for Day 1. Let it update overnight.",
    ]
  },
  {
    phase: "Phase 2 — GitHub Account",
    timing: "Day 1–2",
    steps: [
      "Go to github.com → click Sign Up",
      "Use your personal email address",
      "Pick a username (suggestion: yayalovelab or your name)",
      "Choose the free plan — it covers everything you need",
      "Verify your email when they send the confirmation",
      "No coding needed. This is just your account — like a Google account for your projects.",
    ]
  },
  {
    phase: "Phase 3 — Vercel Account",
    timing: "Day 2",
    steps: [
      "Go to vercel.com → click Sign Up",
      "Choose 'Continue with GitHub' — connects your accounts automatically",
      "Free plan covers everything to start",
      "This is where your websites live. Think of it as your hosting, already included.",
      "Chrix walks you through importing your first project — takes about 10 minutes.",
    ]
  },
  {
    phase: "Phase 4 — OpenClaw Install",
    timing: "Day 2–3 (Chrix does this with you)",
    steps: [
      "OpenClaw is the engine that runs your agents",
      "Chrix installs it for you — takes about 20 minutes on a call",
      "You don't write code. You don't touch the terminal. You just watch.",
      "Once installed, it runs quietly in the background on your Mac",
      "Think of it like hiring a staff member who works 24/7 and never calls in sick",
    ]
  },
  {
    phase: "Phase 5 — First Agent Live",
    timing: "Week 1",
    steps: [
      "Start with The Neighbor for Yaya's Baskets — it's the simplest and fastest win",
      "Chrix sets it up, you read and approve the message before anything posts",
      "It goes live in your Orlando neighborhood groups",
      "Expect your first DMs within 48 hours",
      "You haven't cooked anything yet. The agent already has people asking.",
    ]
  },
  {
    phase: "Phase 6 — LOVe Lab Block System",
    timing: "Week 2–3",
    steps: [
      "Export your Block library as a folder of text files (Chrix shows you exactly how)",
      "Blocks get loaded into The Matchmaker so it can pull from them automatically",
      "Build the intake quiz together — 6-8 questions, takes one session",
      "Test with one couple: a friend or family member works great",
      "Refine based on their feedback, then open to paying customers",
      "Your year of work finally has an engine.",
    ]
  },
];

const faqs = [
  { q: "Do I need to know how to code?", a: "No. Not at all. Chrix handles every technical step. Your job is to approve messages, read results, and keep cooking." },
  { q: "What if something breaks?", a: "Chrix fixes it. That's part of what the $300/month covers — ongoing support, maintenance, and making sure everything keeps running. You're not on your own." },
  { q: "What if it doesn't work for my businesses?", a: "You'll know within the first 30 days. If Yaya's Baskets isn't filling consistently by day 30, we'll tell you honestly — and we'll either adjust the approach or tell you to pause. We'd rather lose $300 than your trust." },
  { q: "Can I cancel anytime?", a: "Yes. Month to month. No contracts. No penalty. Just let Chrix know." },
  { q: "What happens to my Block system if I cancel?", a: "It's yours. Always. You own every Block you created. If you ever leave, you take it with you. We'd never hold your own content hostage." },
  { q: "Do I even need a new Mac if I have a computer already?", a: "Maybe not! What do you have? If it's a Mac from 2020 or later, you might be fine. If it's a PC, Windows makes this significantly harder. Text Chrix and tell him what you're working with before you buy anything." },
  { q: "Is this the right call if I'm on a fixed income?", a: "Honest answer: only if Yaya's Baskets gets to 4+ families/week within 60 days. At 4 families that's $700–800/month coming in — enough to cover costs and then some. If you're not there by day 60, we'd tell you to pause the membership until you are. We'd rather you succeed slowly than spend money that isn't coming back." },
  { q: "How do I get my Block library into the system?", a: "You copy your blocks into a folder of plain text files — one block per file. Chrix walks you through it. Takes about an hour the first time. After that, adding new blocks is as easy as adding a new file." },
  { q: "What's the Date Night Chemistry subscription and how does it work?", a: "It's one of your LOVe Lab products — couples pay monthly to receive personalized date night plans. The Subscriber agent pulls from your Block library, assembles a plan based on their profile, and delivers it. Recurring revenue with no extra work from you once it's set up." },
];

export default function YayaDeliverable() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #080608; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .cta { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#080608;font-size:17px;font-weight:900;font-family:inherit;padding:16px 36px;border-radius:10px;text-decoration:none;transition:transform 0.15s,background 0.15s; }
        .cta:hover { transform:translateY(-2px);background:#fbbf24; }
        .live-dot { width:7px;height:7px;border-radius:50%;background:#22c55e;display:inline-block;animation:blink 1.2s infinite;flex-shrink:0; }
        .mini-nav a { color:rgba(255,255,255,0.78);text-decoration:none;font-size:11px;font-weight:700;letter-spacing:0.12em;transition:color 0.15s; }
        .mini-nav a:hover { color:#f59e0b; }
        .check { color:#22c55e;margin-right:8px;flex-shrink:0; }
        @media(max-width:640px) { .cta { width:100%; } .h1 { font-size:28px !important; } .mini-nav { gap:12px !important; flex-wrap:wrap; } }
      `}</style>

      {/* NAV */}
      <nav style={{padding:"14px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #141418",background:"rgba(8,6,8,0.97)",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(12px)"}}>
        <Link href="/" style={{fontSize:13,fontWeight:900,letterSpacing:"0.2em",color:"#fff",textDecoration:"none"}}>AGE</Link>
        <div className="mini-nav" style={{display:"flex",alignItems:"center",gap:20}}>
          <a href="#yayas">Yaya&apos;s</a>
          <a href="#lovelabs">LOVe Lab</a>
          <a href="#blocks">Block System</a>
          <a href="#hardware">Hardware</a>
          <a href="#setup">Setup</a>
          <a href="#pricing">Pricing</a>
          <a href="#timeline">Timeline</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{padding:"60px 24px 44px",maxWidth:640,margin:"0 auto",animation:"fadeUp 0.65s ease both"}}>
        <div style={{marginBottom:28}}>
          <p style={{fontSize:15,fontWeight:800,color:"#fff"}}>YaYa</p>
          <p style={{fontSize:11,color:"rgba(255,255,255,0.65)",marginTop:2}}>Yaya&apos;s Baskets · LOVe Lab Experiments · Orlando, FL</p>
        </div>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.22em",color:"#f59e0b",marginBottom:14}}>AGENT GENESIS ENGINE</p>
        <h1 className="h1" style={{fontSize:42,fontWeight:900,lineHeight:1.07,letterSpacing:"-0.03em",color:"#fff",marginBottom:20}}>
          You built two things<br />worth owning.<br />
          <span style={{color:"#f59e0b"}}>Now let&apos;s make them<br />work while you sleep.</span>
        </h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.92)",lineHeight:1.75}}>
          You spent nearly a year building your Block system. You launched two websites. You had real customers, real feedback, and real results — and then hit a wall called <span style={{color:"#fff",fontWeight:600}}>marketing</span>. This page covers everything: the agents we&apos;d build for both businesses, the exact hardware to buy, a step-by-step setup guide, and honest pricing math. Read it at your own pace. Ask questions when you&apos;re ready.
        </p>
      </section>

      {/* LIVE FEED */}
      <section style={{padding:"0 24px 48px",maxWidth:640,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
          <span className="live-dot" />
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"rgba(255,255,255,0.65)"}}>AGENT ACTIVITY — YAYA&apos;S BASKETS + LOVe LAB</p>
        </div>
        <div style={{background:"#0c0a0c",border:"1px solid #1a1a1a",borderRadius:14,overflow:"hidden"}}>
          {feed.map((item, i) => (
            <div key={i} style={{
              display:"flex",gap:14,padding:"14px 18px",
              borderBottom: i < feed.length - 1 ? "1px solid #141414" : "none",
              background: item.status === "live" ? "rgba(245,158,11,0.06)" : item.status === "you" ? "rgba(255,255,255,0.02)" : "transparent",
              alignItems:"flex-start"
            }}>
              <span style={{fontSize:11,color:"rgba(255,255,255,0.45)",minWidth:52,paddingTop:2,flexShrink:0}}>{item.time}</span>
              <div style={{flex:1}}>
                <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:3}}>
                  <p style={{fontSize:11,fontWeight:700,color:item.status==="live"?"#f59e0b":item.status==="you"?"rgba(255,255,255,0.78)":"#f59e0b",letterSpacing:"0.06em"}}>
                    {item.agent.toUpperCase()}
                  </p>
                  <span style={{fontSize:9,color:"rgba(255,255,255,0.65)",fontWeight:600,letterSpacing:"0.08em"}}>{item.biz.toUpperCase()}</span>
                </div>
                <p style={{fontSize:13,color:item.status==="live"?"#fff":"rgba(255,255,255,0.88)",lineHeight:1.55}}>{item.action}</p>
              </div>
              {item.status === "done" && <span style={{fontSize:10,color:"#22c55e",marginTop:3,flexShrink:0}}>✓</span>}
              {item.status === "live" && <span className="live-dot" style={{marginTop:5}} />}
            </div>
          ))}
        </div>
      </section>

      {/* YAYA'S BASKETS */}
      <section id="yayas" style={{padding:"0 24px 48px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:6}}>BUSINESS ONE</p>
        <h2 style={{fontSize:28,fontWeight:900,letterSpacing:"-0.02em",color:"#fff",marginBottom:8}}>Yaya&apos;s Baskets</h2>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.78)",marginBottom:24}}>6 families. $175–200/week. Sold before you start cooking.</p>

        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.15)",borderRadius:14,padding:"22px",marginBottom:24}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:12}}>THE DIAGNOSIS</p>
          <p style={{fontSize:15,fontWeight:800,color:"#fff",lineHeight:1.5,marginBottom:10}}>You have something people want. They just don&apos;t know it exists yet.</p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.7}}>8 texts and your daughter&apos;s occasional Facebook post means your baskets fill based on luck, not consistency. The fix isn&apos;t ads or going viral — it&apos;s showing up in the right local groups every single week, reminding past customers before they forget, and capturing the people who were too late so they&apos;re first in line next week.</p>
        </div>

        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>YOUR AGENT TEAM</p>
        {yayas_agents.map((a,i) => (
          <div key={i} style={{display:"flex",gap:16,padding:"16px 0",borderBottom:"1px solid #141414",alignItems:"flex-start"}}>
            <span style={{fontSize:24,flexShrink:0,paddingTop:2}}>{a.icon}</span>
            <div>
              <p style={{fontSize:15,fontWeight:800,color:"#fff",marginBottom:5}}>{a.name}</p>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.82)",lineHeight:1.65}}>{a.desc}</p>
            </div>
          </div>
        ))}

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:28}}>
          <div style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",letterSpacing:"0.1em",marginBottom:14}}>BEFORE</p>
            {["Text 8 people and hope","Rely on your daughter to post","Forget who ordered last week","Lose latecomers forever","Some weeks fill, some don't","Marketing = another thing on your list"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.65)",lineHeight:1.6,marginBottom:4}}>— {t}</p>
            ))}
          </div>
          <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.2)",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"#f59e0b",letterSpacing:"0.1em",marginBottom:14}}>AFTER</p>
            {["Local groups posted every week","Regulars reminded automatically","Waitlist captures the latecomers","Basket stories build loyal fans","6 slots full before Wednesday","Marketing runs while you cook"].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.94)",lineHeight:1.6,marginBottom:4}}>✓ {t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* LOVE LAB */}
      <section id="lovelabs" style={{padding:"0 24px 48px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:6}}>BUSINESS TWO</p>
        <h2 style={{fontSize:28,fontWeight:900,letterSpacing:"-0.02em",color:"#fff",marginBottom:8}}>LOVe Lab Experiments</h2>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.78)",marginBottom:24}}>Personalized couples experiences. Powered by your Block library. Scalable without you doing more work.</p>

        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>YOUR AGENT TEAM</p>
        {lovelabs_agents.map((a,i) => (
          <div key={i} style={{display:"flex",gap:16,padding:"16px 0",borderBottom:"1px solid #141414",alignItems:"flex-start"}}>
            <span style={{fontSize:24,flexShrink:0,paddingTop:2}}>{a.icon}</span>
            <div>
              <p style={{fontSize:15,fontWeight:800,color:"#fff",marginBottom:5}}>{a.name}</p>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.82)",lineHeight:1.65}}>{a.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* BLOCK SYSTEM */}
      <section id="blocks" style={{padding:"0 24px 48px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:12}}>YOUR INTELLECTUAL PROPERTY</p>
        <h2 style={{fontSize:28,fontWeight:900,letterSpacing:"-0.02em",color:"#fff",marginBottom:20}}>The Block System — You Already Built the Hard Part</h2>

        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.2)",borderRadius:14,padding:"28px",marginBottom:24}}>
          <p style={{fontSize:16,fontWeight:800,color:"#fff",lineHeight:1.55,marginBottom:14}}>
            100 modular blocks. Energy tones. Emotional tones. Customer responses dictate the assembly.<br/>
            <span style={{color:"#f59e0b"}}>You didn&apos;t build a hobby project. You built a content architecture system.</span>
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.88)",lineHeight:1.75,marginBottom:14}}>Companies pay consultants $50,000 to build what you built by yourself over a year. The reason AI gave you inconsistent results wasn&apos;t that AI doesn&apos;t work — it&apos;s that raw prompts with no guardrails produce random output. Your Block system IS the guardrails. You were just missing an engine that could actually use them.</p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.88)",lineHeight:1.75}}>You weren&apos;t wrong. You were ahead of the tools available to you at the time.</p>
        </div>

        <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.14em",color:"rgba(255,255,255,0.65)",marginBottom:16}}>HOW IT FLOWS WITH AGE</p>
        {[
          { step:"01", label:"Customer Quiz", desc:"The Matchmaker sends 6-8 questions: energy level, relationship goals, comfort zones, love languages, what they want more of." },
          { step:"02", label:"Block Selection", desc:"Quiz responses are scored. The agent selects the right subset of your 100 blocks — maybe 7-12 blocks for a 3-day experience — based on the couple's profile." },
          { step:"03", label:"Experience Assembly", desc:"Blocks are assembled into a structured 2-3 day itinerary: morning ritual, afternoon activity, evening connection, daily theme. Personalized. Automatic." },
          { step:"04", label:"Delivery & Guidance", desc:"The Concierge delivers the right content at the right time each day — texts, emails, or both. Every couple gets a different experience. You do nothing extra." },
        ].map((s,i) => (
          <div key={i} style={{display:"flex",gap:16,padding:"16px 0",borderBottom:"1px solid #141414",alignItems:"flex-start"}}>
            <span style={{fontSize:20,fontWeight:900,color:"rgba(245,158,11,0.4)",minWidth:28,flexShrink:0}}>{s.step}</span>
            <div>
              <p style={{fontSize:15,fontWeight:800,color:"#fff",marginBottom:4}}>{s.label}</p>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.82)",lineHeight:1.65}}>{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* HARDWARE */}
      <section id="hardware" style={{padding:"0 24px 48px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:12}}>WHAT TO BUY</p>
        <h2 style={{fontSize:28,fontWeight:900,letterSpacing:"-0.02em",color:"#fff",marginBottom:20}}>Hardware</h2>

        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.3)",borderRadius:14,padding:"28px",marginBottom:20}}>
          <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.14em",color:"#f59e0b",marginBottom:8}}>THE RECOMMENDATION</p>
          <p style={{fontSize:24,fontWeight:900,color:"#fff",letterSpacing:"-0.02em",marginBottom:4}}>Mac Mini M4</p>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.85)",marginBottom:16}}>16GB RAM · 512GB SSD · <span style={{color:"#f59e0b",fontWeight:700}}>$799</span></p>
          <a href="https://apple.com/shop/buy-mac/mac-mini" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"10px 20px",background:"rgba(245,158,11,0.15)",border:"1px solid rgba(245,158,11,0.3)",borderRadius:8,color:"#f59e0b",fontSize:12,fontWeight:700,textDecoration:"none",marginBottom:20}}>Buy at apple.com/shop/buy-mac/mac-mini →</a>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {[
              { q:"Why not the $599 base?", a:"You have two businesses and a 100-block content library. 256GB fills up fast. The extra $200 buys you room." },
              { q:"Why not the M4 Pro at $1,399?", a:"Overkill. $600 more for power you won't use running two small businesses. Save it." },
              { q:"What else do you need?", a:"Just power (included) and a monitor — which you may already have. Any HDMI monitor works. Keyboard and mouse too, or buy Apple's for ~$150 bundle." },
            ].map((item,i) => (
              <div key={i} style={{borderTop:"1px solid #1e1c1e",paddingTop:10}}>
                <p style={{fontSize:12,fontWeight:700,color:"rgba(255,255,255,0.92)",marginBottom:4}}>{item.q}</p>
                <p style={{fontSize:12,color:"rgba(255,255,255,0.72)",lineHeight:1.6}}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
        <p style={{fontSize:12,color:"rgba(255,255,255,0.45)",textAlign:"center"}}>Before you buy — text Chrix and tell him what computer you already have. If you have a Mac from 2020 or later, you may not need new hardware at all.</p>
      </section>

      {/* SETUP GUIDE */}
      <section id="setup" style={{padding:"0 24px 48px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:12}}>STEP BY STEP</p>
        <h2 style={{fontSize:28,fontWeight:900,letterSpacing:"-0.02em",color:"#fff",marginBottom:8}}>Setup Guide</h2>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.72)",marginBottom:32}}>No coding. No IT background needed. Just follow the phases.</p>

        {setupPhases.map((phase, pi) => (
          <div key={pi} style={{marginBottom:28,background:"#0c0a0c",border:"1px solid #1a1a1a",borderRadius:14,padding:"22px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
              <p style={{fontSize:15,fontWeight:900,color:"#fff"}}>{phase.phase}</p>
              <span style={{fontSize:11,color:"#f59e0b",fontWeight:700,flexShrink:0,marginLeft:12}}>{phase.timing}</span>
            </div>
            {phase.steps.map((step, si) => (
              <div key={si} style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10}}>
                <span className="check">☐</span>
                <p style={{fontSize:13,color:"rgba(255,255,255,0.88)",lineHeight:1.6}}>{step}</p>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* PRICING */}
      <section id="pricing" style={{padding:"0 24px 48px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:12}}>WHAT IT COSTS</p>
        <h2 style={{fontSize:28,fontWeight:900,letterSpacing:"-0.02em",color:"#fff",marginBottom:8}}>Pricing</h2>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.72)",marginBottom:28}}>Line by line. No surprises.</p>

        <div style={{background:"#0c0a0c",border:"1px solid #1a1a1a",borderRadius:14,overflow:"hidden",marginBottom:24}}>
          {[
            { label:"Mac Mini M4 (16GB/512GB)", amount:"$799", note:"One-time. You own it forever.", highlight:false },
            { label:"Hive Mind Membership", amount:"$300/mo", note:"Discord community, shared intelligence, ongoing Chrix support.", highlight:false },
            { label:"Setup Fee", amount:"TBD by Chrix", note:"One-time. Covers your first 2-3 agents across both businesses.", highlight:false },
            { label:"API costs (Claude/OpenAI)", amount:"~$20–50/mo", note:"Scales with usage. Starts very small.", highlight:false },
            { label:"Vercel hosting", amount:"Free", note:"Free tier covers everything you need to start.", highlight:false },
            { label:"GitHub", amount:"Free", note:"Free plan. Always.", highlight:false },
          ].map((row,i) => (
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"14px 20px",borderBottom:"1px solid #141414",gap:12}}>
              <div style={{flex:1}}>
                <p style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:3}}>{row.label}</p>
                <p style={{fontSize:11,color:"rgba(255,255,255,0.55)",lineHeight:1.5}}>{row.note}</p>
              </div>
              <p style={{fontSize:14,fontWeight:900,color:"#f59e0b",flexShrink:0}}>{row.amount}</p>
            </div>
          ))}
        </div>

        <div style={{background:"rgba(245,158,11,0.08)",border:"1px solid rgba(245,158,11,0.2)",borderRadius:14,padding:"24px"}}>
          <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.14em",color:"#f59e0b",marginBottom:12}}>THE MATH FOR YAYA&apos;S BASKETS ALONE</p>
          {[
            ["6 baskets × $175/week × 4 weeks", "$4,200/mo gross"],
            ["Food costs ($80/basket × 24)", "−$1,920/mo"],
            ["Gross profit", "$2,280/mo"],
            ["AGE costs (all-in)", "−$400–450/mo"],
            ["Net monthly profit", "~$1,830–1,880/mo"],
            ["Break-even point", "2 baskets/week consistently"],
          ].map(([label, val], i) => (
            <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:"1px solid rgba(245,158,11,0.1)"}}>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.85)"}}>{label}</p>
              <p style={{fontSize:13,fontWeight:700,color:"#fff"}}>{val}</p>
            </div>
          ))}
          <p style={{fontSize:12,color:"rgba(255,255,255,0.65)",marginTop:14,lineHeight:1.6}}>Food cost estimate is rough — yours may be higher or lower. The point: even with real expenses, 6 baskets/week clears your costs and then some. LOVe Lab subscription revenue stacks on top of this.</p>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" style={{padding:"0 24px 48px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:12}}>WHAT TO EXPECT</p>
        <h2 style={{fontSize:28,fontWeight:900,letterSpacing:"-0.02em",color:"#fff",marginBottom:28}}>Realistic Timeline</h2>

        {[
          { when:"Day 1–3", what:"Hardware arrives. Setup begins. GitHub + Vercel accounts created." },
          { when:"Week 1", what:"First agents live for Yaya's Baskets. The Neighbor posting. The Reminder texting. First DMs coming in." },
          { when:"Week 2", what:"Basket slots filling more consistently. Waitlist capturing latecomers." },
          { when:"Week 3", what:"LOVe Lab Block library uploaded. The Matchmaker quiz built and tested with one couple." },
          { when:"Month 1", what:"Both businesses running with agents. You're cooking and creating — agents handle the marketing." },
          { when:"Month 2", what:"LOVe Lab subscriptions converting. Block system fully automated. Waitlist building for Yaya's." },
          { when:"Month 3", what:"Functional. Agents handling marketing, intake, follow-up, and delivery coordination for both businesses. You review results, not tasks." },
        ].map((item, i) => (
          <div key={i} style={{display:"flex",gap:20,padding:"16px 0",borderBottom:"1px solid #141414",alignItems:"flex-start"}}>
            <span style={{fontSize:11,fontWeight:700,color:"#f59e0b",minWidth:70,flexShrink:0,paddingTop:2}}>{item.when}</span>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.92)",lineHeight:1.65}}>{item.what}</p>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section id="faq" style={{padding:"0 24px 48px",maxWidth:640,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:12}}>QUESTIONS ANSWERED</p>
        <h2 style={{fontSize:28,fontWeight:900,letterSpacing:"-0.02em",color:"#fff",marginBottom:28}}>FAQ</h2>

        {faqs.map((faq, i) => (
          <div key={i} style={{padding:"20px 0",borderBottom:"1px solid #141414"}}>
            <p style={{fontSize:15,fontWeight:800,color:"#fff",marginBottom:8}}>{faq.q}</p>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.7}}>{faq.a}</p>
          </div>
        ))}
      </section>

      {/* CLOSE */}
      <section style={{padding:"0 24px 80px",maxWidth:520,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:"clamp(22px,4vw,32px)",fontWeight:900,lineHeight:1.2,letterSpacing:"-0.025em",color:"#fff",marginBottom:16}}>
          You didn&apos;t quit.<br/>
          <span style={{color:"#f59e0b"}}>Let&apos;s put an engine on what you built.</span>
        </p>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.78)",marginBottom:10,lineHeight:1.7}}>
          You spent a year building something most people would have given up on in a week. The Block system, the two websites, the real customers — that&apos;s not a hobby. That&apos;s a foundation.
        </p>
        <p style={{fontSize:15,color:"rgba(255,255,255,0.78)",marginBottom:32,lineHeight:1.7}}>
          When you&apos;re ready, hit the button below. Or just text Chrix. Either works.
        </p>
        <a className="cta" href="/apply" style={{display:"flex",maxWidth:380,margin:"0 auto",justifyContent:"center"}}>
          I&apos;m Ready to Start →
        </a>
        <p style={{marginTop:16,fontSize:11,color:"rgba(255,255,255,0.15)"}}>
          Agent Genesis Engine · Built for YaYa · Yaya&apos;s Baskets + LOVe Lab Experiments · Orlando, FL
        </p>
      </section>
    </>
  );
}
