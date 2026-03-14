"use client";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function Home() {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    function initPlayer() {
      if (!window.YT?.Player) return;
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: "A3BhGU47QdM",
        playerVars: {
          autoplay: 1,
          mute: 1,
          rel: 0,
          modestbranding: 1,
          controls: 1,
          color: "white",
          iv_load_policy: 3,
          playsinline: 1,
        },
        events: {
          onReady: (e: any) => { e.target.playVideo(); setPlaying(true); },
          onStateChange: (e: any) => { setPlaying(e.data === 1); },
        },
      });
    }

    if (window.YT?.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
      if (!document.getElementById("yt-api")) {
        const tag = document.createElement("script");
        tag.id = "yt-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
    }
  }, []);

  function handleUnmute() {
    if (playerRef.current?.unMute) {
      playerRef.current.unMute();
      playerRef.current.setVolume(100);
      setMuted(false);
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080608; color: #fff; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.15} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.85)} }
        @keyframes orbGlow { 0%,100%{filter:drop-shadow(0 0 12px rgba(245,158,11,0.4))} 50%{filter:drop-shadow(0 0 30px rgba(245,158,11,0.85))} }
        .live-dot { width:7px;height:7px;border-radius:50%;background:#ef4444;display:inline-block;flex-shrink:0;animation:blink 1.4s infinite; }
        .eyebrow { font-size:10px;font-weight:700;letter-spacing:0.22em;color:#f59e0b; }
        .cta-primary { display:inline-flex;align-items:center;justify-content:center;background:#f59e0b;color:#080608;font-size:18px;font-weight:900;font-family:inherit;letter-spacing:-0.01em;padding:18px 44px;border-radius:10px;text-decoration:none;transition:transform 0.15s,background 0.15s; }
        .cta-primary:hover { transform:translateY(-2px);background:#fbbf24; }
        .cta-ghost { display:inline-flex;align-items:center;justify-content:center;background:transparent;color:rgba(255,255,255,0.5);font-size:16px;font-weight:700;font-family:inherit;padding:17px 32px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);text-decoration:none;transition:all 0.15s; }
        .cta-ghost:hover { color:#fff;border-color:rgba(255,255,255,0.28); }
        @media(max-width:640px) {
          .hero-h1 { font-size:32px !important;line-height:1.08 !important; }
          .hero-sub { font-size:15px !important; }
          .copy-h2 { font-size:26px !important; }
          .cta-primary { width:100%;font-size:17px;padding:17px 24px; }
          .cta-ghost { width:100%;font-size:16px; }
          .cta-row { flex-direction:column !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{padding:"18px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #111011",position:"sticky",top:0,zIndex:100,background:"rgba(8,6,8,0.96)",backdropFilter:"blur(14px)"}}>
        <span style={{fontSize:14,fontWeight:900,letterSpacing:"0.2em"}}>AGE</span>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span className="live-dot" />
          <span style={{fontSize:11,color:"rgba(255,255,255,0.38)",letterSpacing:"0.08em",fontWeight:600}}>COHORT 3 · 3 SPOTS LEFT</span>
        </div>
      </nav>

      {/* ── HERO — HEADLINE + VIDEO ── */}
      <section style={{background:"#020102",paddingBottom:64}}>

        {/* Headline block */}
        <div style={{maxWidth:700,margin:"0 auto",padding:"72px 28px 40px",textAlign:"center",animation:"fadeUp 0.65s ease both"}}>
          <p className="eyebrow" style={{marginBottom:16}}>AGENT GENESIS ENGINE</p>
          <h1 className="hero-h1" style={{fontSize:52,fontWeight:900,lineHeight:1.06,letterSpacing:"-0.032em",color:"#fff",marginBottom:16}}>
            Every business has a ceiling.<br />
            <span style={{color:"#f59e0b"}}>We break it.</span>
          </h1>
          <p className="hero-sub" style={{fontSize:17,color:"rgba(255,255,255,0.48)",lineHeight:1.65,maxWidth:480,margin:"0 auto"}}>
            The bottleneck isn't strategy. It's capacity. Watch the 5-minute pitch — then apply.
          </p>
        </div>

        {/* Video Player */}
        <div style={{maxWidth:940,margin:"0 auto",padding:"0 20px",position:"relative"}}>

          {/* Player wrapper */}
          <div style={{
            position:"relative",
            paddingBottom:"56.25%",
            height:0,
            overflow:"hidden",
            borderRadius:6,
            background:"#000",
            boxShadow:"0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.7)",
          }}>
            <div id="yt-player" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} />
          </div>

          {/* Unmute overlay */}
          {muted && (
            <div style={{
              position:"absolute",
              bottom:20,
              left:"50%",
              transform:"translateX(-50%)",
              zIndex:10,
              animation:"fadeUp 0.5s ease 1.5s both",
            }}>
              <button
                onClick={handleUnmute}
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:10,
                  background:"rgba(8,6,8,0.9)",
                  border:"1px solid rgba(245,158,11,0.4)",
                  borderRadius:40,
                  color:"#fff",
                  fontSize:14,
                  fontWeight:700,
                  fontFamily:"inherit",
                  padding:"11px 22px",
                  cursor:"pointer",
                  letterSpacing:"0.01em",
                  backdropFilter:"blur(12px)",
                  transition:"all 0.2s",
                  whiteSpace:"nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(245,158,11,0.9)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(245,158,11,0.4)")}
              >
                <span style={{fontSize:18}}>🔇</span>
                <span>Tap to unmute</span>
                <span style={{
                  width:7,height:7,borderRadius:"50%",background:"#f59e0b",
                  display:"inline-block",animation:"pulse 1.2s infinite",marginLeft:2
                }} />
              </button>
            </div>
          )}
        </div>

        {/* CTAs below video */}
        <div className="cta-row" style={{display:"flex",justifyContent:"center",gap:12,padding:"36px 24px 0",flexWrap:"wrap"}}>
          <a className="cta-primary" href="/apply">Start Your Genesis →</a>
          <a className="cta-ghost" href="#more">What is AGE? ↓</a>
        </div>
        <p style={{textAlign:"center",marginTop:12,fontSize:11,color:"rgba(255,255,255,0.16)"}}>Selective by design. Operator interviews only.</p>
      </section>

      {/* ── THE PROBLEM ── */}
      <section id="more" style={{padding:"72px 28px",maxWidth:620,margin:"0 auto",borderBottom:"1px solid #111011"}}>
        <p className="eyebrow" style={{marginBottom:18}}>THE PROBLEM</p>
        <h2 className="copy-h2" style={{fontSize:38,fontWeight:900,lineHeight:1.1,letterSpacing:"-0.025em",color:"#fff",marginBottom:18}}>
          You tried AI tools.<br />
          <span style={{color:"rgba(255,255,255,0.35)"}}>You needed a team.</span><br />
          <span style={{color:"#f59e0b"}}>You got a calculator.</span>
        </h2>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.55)",lineHeight:1.72}}>
          A chatbot isn't a team member. A prompt isn't a workflow. A tool that forgets everything the moment you close the tab isn't an employee. You needed infrastructure — not another subscription.
        </p>
      </section>

      {/* ── THE REVELATION ── */}
      <section style={{padding:"72px 28px",maxWidth:620,margin:"0 auto",borderBottom:"1px solid #111011"}}>
        <p className="eyebrow" style={{marginBottom:18}}>THE REVELATION</p>
        <h2 className="copy-h2" style={{fontSize:38,fontWeight:900,lineHeight:1.1,letterSpacing:"-0.025em",color:"#fff",marginBottom:18}}>
          What if you could hatch<br />your own agents?
        </h2>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.55)",lineHeight:1.72,marginBottom:14}}>
          Not pre-built templates. Not generic bots. Agents designed specifically for your business — your customers, your operations, your goals.
        </p>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.55)",lineHeight:1.72}}>
          Agents that know who you are. That remember everything. That level up through demonstrated performance. That coordinate with each other.
        </p>
        <p style={{fontSize:20,fontWeight:800,color:"#fff",marginTop:20,letterSpacing:"-0.015em"}}>A team that belongs to you.</p>
      </section>

      {/* ── THE PROTOCOL ── */}
      <section style={{padding:"72px 28px",maxWidth:580,margin:"0 auto",borderBottom:"1px solid #111011"}}>
        <p className="eyebrow" style={{marginBottom:28}}>THE PROTOCOL</p>
        {[
          { n:"01", title:"Tell Us Your Story",    body:"A real conversation. Your customers, your workflows, your bottlenecks. We build your Operator Dossier — a complete picture before we design a single agent." },
          { n:"02", title:"We Design Your Team",   body:"Not 22 pre-built agents. Yours. The exact agents your business needs — architected around the bottleneck costing you the most." },
          { n:"03", title:"The Hatching Protocol", body:"Nine stages. Each agent born knowing your business. They don't go live until they prove they can. Ninety percent quality threshold. No exceptions." },
          { n:"04", title:"Autonomous in 90 Days", body:"Your agents coordinate. They hand off work. They run overnight. You show up to the output — not the operation." },
        ].map(s => (
          <div key={s.n} style={{display:"flex",gap:20,marginBottom:28,alignItems:"flex-start"}}>
            <span style={{fontSize:10,fontWeight:900,color:"#f59e0b",letterSpacing:"0.1em",minWidth:24,paddingTop:4,flexShrink:0}}>{s.n}</span>
            <div>
              <p style={{fontSize:16,fontWeight:800,color:"#fff",marginBottom:6,letterSpacing:"-0.01em"}}>{s.title}</p>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.4)",lineHeight:1.72}}>{s.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── OWNERSHIP ── */}
      <section style={{padding:"72px 28px",maxWidth:620,margin:"0 auto",borderBottom:"1px solid #111011"}}>
        <p className="eyebrow" style={{marginBottom:18}}>WHAT YOU OWN</p>
        <h2 className="copy-h2" style={{fontSize:38,fontWeight:900,lineHeight:1.1,letterSpacing:"-0.025em",color:"#fff",marginBottom:18}}>
          The platform is the subscription.<br />
          <span style={{color:"#f59e0b"}}>The team is yours.</span>
        </h2>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.55)",lineHeight:1.72}}>
          Your local runtime. Your agents. Your soul files. Cancel tomorrow — they stay on your machine. Forever. We're not renting you tools. We're building you infrastructure.
        </p>
      </section>

      {/* ── QUOTE ── */}
      <div style={{padding:"64px 28px",textAlign:"center",background:"#0a080a",borderTop:"1px solid #111011",borderBottom:"1px solid #111011"}}>
        <img src="/assets/orb-graphic.png" alt="" width={46} height={46}
          style={{display:"block",margin:"0 auto 22px",animation:"orbGlow 2s ease-in-out infinite"}} />
        <blockquote style={{fontSize:"clamp(18px,2.5vw,24px)",fontWeight:700,lineHeight:1.55,color:"rgba(255,255,255,0.85)",letterSpacing:"-0.01em",maxWidth:540,margin:"0 auto",fontStyle:"normal"}}>
          "Most people will think <span style={{color:"#f59e0b"}}>'that's interesting.'</span><br />
          The ones who act will wonder how they ever ran their business without it."
        </blockquote>
      </div>

      {/* ── FINAL CTA ── */}
      <section style={{padding:"80px 28px 96px",textAlign:"center",background:"#080608"}}>
        <div style={{maxWidth:460,margin:"0 auto"}}>
          <p className="eyebrow" style={{marginBottom:18}}>OPERATOR INTERVIEWS OPEN</p>
          <h2 style={{fontSize:"clamp(30px,4.5vw,44px)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.03em",color:"#fff",marginBottom:10}}>
            Book your operator interview.
          </h2>
          <h2 style={{fontSize:"clamp(30px,4.5vw,44px)",fontWeight:900,lineHeight:1.08,letterSpacing:"-0.03em",color:"#f59e0b",marginBottom:24}}>
            This is how it begins.
          </h2>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.42)",marginBottom:36,lineHeight:1.7,maxWidth:380,margin:"0 auto 36px"}}>
            A conversation, not a sales pitch. A fit check — we decide together if AGE is right for your business, and you'll know exactly what your first 90 days look like before you spend a dollar.
          </p>
          <a className="cta-primary" href="/apply" style={{display:"flex",maxWidth:340,margin:"0 auto",justifyContent:"center"}}>
            Start Your Genesis →
          </a>
          <p style={{marginTop:14,fontSize:11,color:"rgba(255,255,255,0.16)"}}>Operator seats are limited. You'll hear from us in 24 hours.</p>
        </div>
      </section>
    </>
  );
}
