import Link from "next/link";
import Image from "next/image";

const feed = [
  { time: "2:07 AM", agent: "The Night Owl", action: "Last call at Dirty 6th. 1,200 people within 2 miles now actively looking for somewhere to land. Ad served: 'Still up? So are we. Always.' 34 click-throughs.", status: "done" },
  { time: "7:15 AM", agent: "The Fellowship", action: "Monday morning recovery post live. Pushed to 18 Austin AA, NA, and sober living communities. 'A place that gets it' — 12 shares, 4 new follows in first hour.", status: "done" },
  { time: "9:41 AM", agent: "The Street Team", action: "QR sticker scan report: 6th St placement → 47 profile visits since Friday. Congress placement → 31. Jacob Fontaine → 19. Best performer: the one across from Barbarella.", status: "done" },
  { time: "11:03 AM", agent: "The Weird Austin", action: "Posted: 'No dress code. No last call. No judgment. Just us, your order, and however long you need.' — 680 organic reach. 3 shares. One comment: 'this place saved my life.'", status: "done" },
  { time: "1:52 PM", agent: "The Regular", action: "Re-engagement campaign hit 340 lapsed customers. Subject: 'The coffee you used to love is waiting.' 27 opened same day. 9 replied. 3 said they were coming in tonight.", status: "done" },
  { time: "Now", agent: "You", action: "Reading this. The three locations are already running.", status: "live" },
];

export default function SteveDeliverable() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080608; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes slowPulse { 0%,100%{opacity:0.85} 50%{opacity:1} }
        .cta { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#080608;font-size:17px;font-weight:900;font-family:inherit;padding:16px 36px;border-radius:10px;text-decoration:none;transition:transform 0.15s,background 0.15s; }
        .cta:hover { transform:translateY(-2px);background:#fbbf24; }
        .live-dot { width:7px;height:7px;border-radius:50%;background:#22c55e;display:inline-block;animation:blink 1.2s infinite;flex-shrink:0; }
        @media(max-width:640px) {
          .cta { width:100%; }
          .h1 { font-size:28px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #141418",background:"rgba(8,6,8,0.95)",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(12px)"}}>
        <Link href="/" style={{fontSize:13,fontWeight:900,letterSpacing:"0.2em",color:"#fff",textDecoration:"none"}}>AGE</Link>
        <div style={{display:"flex",alignItems:"center",gap:7}}>
          <span className="live-dot" />
          <span style={{fontSize:11,color:"rgba(255,255,255,0.65)",fontWeight:600}}>BUILT FOR STEVE WILLIAMS · BENNU COFFEE</span>
        </div>
      </nav>

      {/* HERO IMAGE — full bleed */}
      <div style={{position:"relative",width:"100%",height:"420px",overflow:"hidden"}}>
        <Image
          src="/assets/steve/bennu-hero.png"
          alt="Bennu Coffee — Austin's 24-hour sanctuary"
          fill
          style={{objectFit:"cover",objectPosition:"center",filter:"brightness(0.75)"}}
          priority
        />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 30%, #080608 100%)"}} />
        <div style={{position:"absolute",bottom:36,left:0,right:0,padding:"0 24px",maxWidth:620,margin:"0 auto"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.22em",color:"#f59e0b",marginBottom:10}}>AGENT GENESIS ENGINE</p>
          <h1 className="h1" style={{fontSize:38,fontWeight:900,lineHeight:1.08,letterSpacing:"-0.03em",color:"#fff"}}>
            The only light on<br />in Austin at 3 AM<br /><span style={{color:"#f59e0b"}}>deserves to be found.</span>
          </h1>
        </div>
      </div>

      {/* INTRO */}
      <section style={{padding:"32px 24px 36px",maxWidth:620,margin:"0 auto",animation:"fadeUp 0.65s ease both"}}>
        <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:24}}>
          <div style={{width:52,height:52,borderRadius:"50%",border:"2px solid #f59e0b",flexShrink:0,background:"#110a00",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>
            ☕
          </div>
          <div>
            <p style={{fontSize:15,fontWeight:800,color:"#fff"}}>Steve & Stephanie Williams</p>
            <p style={{fontSize:11,color:"rgba(255,255,255,0.65)",marginTop:2}}>Bennu Coffee · Austin, TX 🤘 · 3 Locations · Open 24/7 since 2009</p>
          </div>
        </div>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.92)",lineHeight:1.75}}>
          We did our homework, Steve. Not just your website — your story.{" "}
          <span style={{color:"#fff",fontWeight:600}}>You and Stephanie met at a coffee shop.</span>{" "}
          You opened Bennu East on MLK in 2009. You invented a cold brew recipe in year one that became{" "}
          <span style={{color:"#fff",fontWeight:600}}>Chameleon Cold Brew — now sold in tens of thousands of stores nationwide and acquired by Nestlé.</span>{" "}
          You bought Dominican Joe's in 2017 and kept their honey latte on the menu because that's who you are. You opened a third location at Highland. You built a volunteer program for your own employees. You named your shop after the Egyptian phoenix — the Bennu bird — because{" "}
          <span style={{color:"#fff",fontWeight:600}}>you believe in rebirth.</span>{" "}
          Down 20% isn't a failure. It's your next comeback story. And you've already written enough of those to know how they end.
        </p>
      </section>

      {/* BENNU BIRD — full bleed section */}
      <div style={{position:"relative",width:"100%",height:"280px",overflow:"hidden",margin:"0 0 0 0"}}>
        <Image
          src="/assets/steve/bennu-bird.png"
          alt="The Bennu Bird — symbol of rebirth"
          fill
          style={{objectFit:"cover",objectPosition:"center",filter:"brightness(0.85)"}}
        />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, #080608 0%, transparent 20%, transparent 80%, #080608 100%)"}} />
        <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:8,padding:"0 24px",textAlign:"center"}}>
          <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.22em",color:"#f59e0b"}}>THE NAME MEANS SOMETHING</p>
          <p style={{fontSize:"clamp(18px,3.5vw,26px)",fontWeight:900,color:"#fff",lineHeight:1.2,letterSpacing:"-0.02em",maxWidth:480}}>
            The Bennu bird is the Egyptian phoenix.<br />Symbol of rebirth. Symbol of resurrection.
          </p>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.82)",maxWidth:400,lineHeight:1.6}}>
            Steve chose that name when he and Stephanie started a new chapter together. This campaign is another one.
          </p>
        </div>
      </div>

      {/* LIVE FEED */}
      <section style={{padding:"40px 24px 40px",maxWidth:620,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
          <span className="live-dot" />
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"rgba(255,255,255,0.65)"}}>BENNU COFFEE · ALL THREE LOCATIONS · AGENT ACTIVITY LOG</p>
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
          This isn't a demo. This is what a real week looks like across three locations when the right people know Bennu exists.
        </p>
      </section>

      {/* THE DIAGNOSIS */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.15)",borderRadius:14,padding:"24px"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",color:"#f59e0b",marginBottom:12}}>WHY YOU'RE DOWN 20%</p>
          <p style={{fontSize:16,fontWeight:800,color:"#fff",lineHeight:1.5,letterSpacing:"-0.01em",marginBottom:12}}>
            Bennu didn't get worse.<br />Austin just forgot to look up.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.8,marginBottom:12}}>
            The pandemic broke habits. People found closer options out of necessity and never drifted back. The two audiences who need Bennu most — the late-night crowd that has nowhere to go after last call, and Austin's recovery community that needs a third place that isn't a bar — they exist in massive numbers. They're just not being reached.
          </p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.8}}>
            You have three 24-hour locations at strategic points across the city. You serve fair-trade organic beans from Texas Coffee Traders. You have a cold brew recipe so good Steve turned it into a national brand. <span style={{color:"#fff",fontWeight:600}}>This isn't a product problem. It's a discovery problem.</span>
          </p>
        </div>
      </section>

      {/* TWO AUDIENCES */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:16}}>THE TWO AUDIENCES NOBODY IS REACHING FOR YOU</p>

        {/* Late Night */}
        <div style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:14,overflow:"hidden",marginBottom:12}}>
          <div style={{position:"relative",height:220,overflow:"hidden"}}>
            <Image src="/assets/steve/bennu-window.png" alt="After last call" fill style={{objectFit:"cover",objectPosition:"center",filter:"brightness(0.7)"}} />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 40%, #0c0a0c 100%)"}} />
          </div>
          <div style={{padding:"20px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"#f59e0b",letterSpacing:"0.1em",marginBottom:8}}>🌙 THE LATE NIGHT CROWD</p>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.92)",lineHeight:1.7}}>
              Every bar and club in Austin closes. Dirty 6th, Rainey Street, 4th Street — thousands of people suddenly awake, mobile, and with nowhere obvious to go. Bennu is one of the only full-service indoor spaces in the city that catches them. They just don't know it yet. The Night Owl agent retargets bar-district audience data in real time. When last call happens, Bennu is already in their feed.
            </p>
          </div>
        </div>

        {/* Recovery */}
        <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.12)",borderRadius:14,overflow:"hidden"}}>
          <div style={{position:"relative",height:220,overflow:"hidden"}}>
            <Image src="/assets/steve/bennu-recovery.png" alt="The recovery community" fill style={{objectFit:"cover",objectPosition:"center",filter:"brightness(0.65)"}} />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 40%, #0c0a0c 100%)"}} />
          </div>
          <div style={{padding:"20px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"#f59e0b",letterSpacing:"0.1em",marginBottom:8}}>🤝 THE RECOVERY COMMUNITY</p>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.92)",lineHeight:1.7}}>
              Austin's recovery community is one of the largest and most tight-knit in Texas. They meet throughout the week, they support each other, and they are fiercely loyal to businesses that see them. Bennu's roots in community service — BEVO, the nonprofit partnerships, the come-as-you-are atmosphere — this isn't marketing positioning. It's who you've been since 2009. The Fellowship agent makes sure they know it.
            </p>
          </div>
        </div>
      </section>

      {/* THE AGENTS */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>THE AGENTS WE'D BUILD FOR BENNU</p>
        {[
          { icon:"🌙", name:"The Night Owl", desc:"Runs retargeting campaigns against late-night bar and club audience data. Fires automatically after midnight across all three coverage zones — MLK, Congress, Highland. 'Still thirsty? We never close.'" },
          { icon:"🤝", name:"The Fellowship", desc:"Organic outreach to Austin's recovery community: AA/NA/SMART Recovery groups, sober living houses, meeting-adjacent neighborhoods. Content that speaks their language because Bennu already speaks it. Builds loyalty that lasts years." },
          { icon:"📍", name:"The Street Team", desc:"Coordinates your guerrilla QR sticker campaign — register placements at all three locations, outside bars and clubs on 6th, Rainey, and 4th. Tracks scans by placement. Tells you which stickers are working." },
          { icon:"🤘", name:"The Weird Austin", desc:"Daily content that sounds like Bennu actually wrote it. No corporate voice. No filter. Local, weird, come as you are — the reason people share it. The content that makes Austin say 'that's my spot.'" },
          { icon:"🔁", name:"The Regular", desc:"Re-engagement sequences for lapsed customers across all three locations. Not pushy. Just a warm reminder that the place they used to love is still here, still open, still theirs." },
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

      {/* THREE LOCATIONS */}
      <section style={{padding:"0 24px 32px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:16}}>THREE LOCATIONS. ONE CAMPAIGN.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          {[
            { name:"East Austin", addr:"2001 E MLK Jr Blvd", note:"The original. Since 2009. Where it all started." },
            { name:"South Congress", addr:"515 S Congress Ave", note:"Formerly Dominican Joe's. Honoring their legacy." },
            { name:"Highland", addr:"109 Jacob Fontaine Ln", note:"Next to ACC. The north Austin anchor." },
          ].map((loc, i) => (
            <div key={i} style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:12,padding:"16px 14px"}}>
              <p style={{fontSize:11,fontWeight:800,color:"#fff",marginBottom:4}}>{loc.name}</p>
              <p style={{fontSize:10,color:"rgba(255,255,255,0.5)",marginBottom:8,lineHeight:1.4}}>{loc.addr}</p>
              <p style={{fontSize:11,color:"rgba(255,255,255,0.72)",lineHeight:1.5}}>{loc.note}</p>
            </div>
          ))}
        </div>
        <p style={{marginTop:14,fontSize:13,color:"rgba(255,255,255,0.65)",lineHeight:1.7}}>
          Three coverage zones across the city means the campaign reaches people wherever they are. The Night Owl and Fellowship agents run geo-targeted across all three. One strategy, three multiplied results.
        </p>
      </section>

      {/* BEFORE / AFTER */}
      <section style={{padding:"0 24px 36px",maxWidth:620,margin:"0 auto"}}>
        <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:"#f59e0b",marginBottom:18}}>BENNU'S WEEK. BEFORE AND AFTER.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div style={{background:"#0c0a0c",border:"1px solid #1e1c1e",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",letterSpacing:"0.1em",marginBottom:14}}>BEFORE</p>
            {[
              "Down 20%, unclear why",
              "Bar crowd doesn't think 'coffee' at 2 AM",
              "Recovery community doesn't know you specifically",
              "QR stickers placed manually, never tracked",
              "Lapsed customers silently drifted",
              "17 years of brand equity, invisible online"
            ].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.65)",lineHeight:1.6,marginBottom:4}}>— {t}</p>
            ))}
          </div>
          <div style={{background:"#0c0a0c",border:"1px solid rgba(245,158,11,0.2)",borderRadius:12,padding:"18px 16px"}}>
            <p style={{fontSize:11,fontWeight:700,color:"#f59e0b",letterSpacing:"0.1em",marginBottom:14}}>AFTER</p>
            {[
              "Two warm growing audiences",
              "Bennu is in their feed when bars close",
              "Recovery community knows Bennu by name",
              "Every sticker tracked, best placements scaled",
              "Re-engagement running for all 3 locations",
              "Austin's best-kept secret isn't one anymore"
            ].map((t,i) => (
              <p key={i} style={{fontSize:12,color:"rgba(255,255,255,0.94)",lineHeight:1.6,marginBottom:4}}>✓ {t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section style={{padding:"0 24px 80px",maxWidth:500,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:"clamp(22px,4vw,32px)",fontWeight:900,lineHeight:1.15,letterSpacing:"-0.025em",color:"#fff",marginBottom:12}}>
          You named your shop after<br />a bird that rises from the ashes.<br />
          <span style={{color:"#f59e0b"}}>Time to rise again.</span>
        </p>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.72)",marginBottom:32,lineHeight:1.7}}>
          You built Chameleon Cold Brew from a single recipe in a small East Austin coffee shop and watched it go national. You know how to build something real. This campaign is just making sure the right people in Austin remember where it all started.
        </p>
        <a className="cta" href="/apply" style={{display:"flex",maxWidth:360,margin:"0 auto",justifyContent:"center"}}>
          Let's Build This for Bennu, Steve →
        </a>
        <p style={{marginTop:14,fontSize:11,color:"rgba(255,255,255,0.12)"}}>
          Agent Genesis Engine · Built for Steve & Stephanie Williams · Bennu Coffee · Austin, TX · Est. 2009
        </p>
      </section>
    </>
  );
}
