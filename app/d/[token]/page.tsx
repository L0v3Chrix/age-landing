import Link from "next/link";
import { fetchDossier } from "@/lib/kv";
import { DossierClient } from "./client";

export default async function DossierPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const record = await fetchDossier(token);

  // Not found or expired
  if (!record || new Date(record.expiresAt) < new Date()) {
    return (
      <>
        <style>{baseStyles}</style>
        <div style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "48px 24px", background: "#080608", textAlign: "center" }}>
          <p style={{ fontSize: 14, fontWeight: 900, letterSpacing: "0.2em", color: "#fff", marginBottom: 32 }}>AGE</p>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 14, letterSpacing: "-0.02em" }}>This dossier has expired.</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, maxWidth: 380, marginBottom: 36 }}>
            Dossiers are live for 14 days after generation. If you'd like a fresh one, take the quiz again.
          </p>
          <Link href="/apply" className="cta">Build My Dossier &rarr;</Link>
        </div>
      </>
    );
  }

  const { lead, dossier, createdAt, expiresAt } = record;
  const createdDate = new Date(createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const expiryDate = new Date(expiresAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const initials = `${lead.firstName[0] || ""}${lead.lastName[0] || ""}`.toUpperCase();

  return (
    <>
      <style>{baseStyles}</style>
      <style>{printStyles}</style>

      {/* NAV */}
      <nav style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #141418", background: "rgba(8,6,8,0.95)", position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)" }}>
        <Link href="/" style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.2em", color: "#fff", textDecoration: "none" }}>AGE</Link>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span className="live-dot" />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>
            BUILT FOR {lead.firstName.toUpperCase()} {lead.lastName.toUpperCase()} &middot; {lead.businessName.toUpperCase()}
          </span>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ position: "relative", width: "100%", minHeight: 340, overflow: "hidden", background: "linear-gradient(135deg, #0a0a0a 0%, #111 30%, #080608 100%)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 80%, rgba(245,158,11,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", padding: "80px 24px 48px", maxWidth: 620, margin: "0 auto" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", color: "#f59e0b", marginBottom: 14 }}>AGENT GENESIS ENGINE</p>
          <h1 className="h1" style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff", marginBottom: 14 }}
            dangerouslySetInnerHTML={{ __html: dossier.heroHeadline.replace(/\n/g, "<br />") }}
          />
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.88)", lineHeight: 1.6 }}>{dossier.heroSubheadline}</p>
        </div>
      </div>

      {/* INTRO */}
      <section style={{ padding: "32px 24px 36px", maxWidth: 620, margin: "0 auto", animation: "fadeUp 0.65s ease both" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: "2px solid #f59e0b", flexShrink: 0, background: "#110a00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: "#f59e0b" }}>
            {initials}
          </div>
          <div>
            <p style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>{lead.firstName} {lead.lastName}</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>
              {lead.businessName} &middot; {lead.businessType} &middot; Team: {lead.teamSize}
            </p>
          </div>
        </div>
        <div style={{ fontSize: 16, color: "rgba(255,255,255,0.92)", lineHeight: 1.75 }}
          dangerouslySetInnerHTML={{ __html: formatParagraphs(dossier.introBody) }}
        />
      </section>

      {/* DIAGNOSIS */}
      <section style={{ padding: "0 24px 32px", maxWidth: 620, margin: "0 auto" }}>
        <div style={{ background: "#0c0a0c", border: "1px solid rgba(245,158,11,0.15)", borderRadius: 14, padding: 24 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", color: "#f59e0b", marginBottom: 12 }}>THE DIAGNOSIS</p>
          <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", lineHeight: 1.5, letterSpacing: "-0.01em", marginBottom: 12 }}>{dossier.diagnosis.headline}</p>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: formatParagraphs(dossier.diagnosis.body) }}
          />
        </div>
      </section>

      {/* AGENT ACTIVITY LOG */}
      <section style={{ padding: "8px 24px 40px", maxWidth: 620, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <span className="live-dot" />
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", color: "rgba(255,255,255,0.65)" }}>
            AGENT ACTIVITY LOG &mdash; {lead.businessName.toUpperCase()}
          </p>
        </div>
        <div style={{ background: "#0c0a0c", border: "1px solid #1a1a1a", borderRadius: 14, overflow: "hidden" }}>
          {dossier.agentActivityLog.map((item, i) => (
            <div key={i} style={{
              display: "flex", gap: 14, padding: "14px 18px",
              borderBottom: i < dossier.agentActivityLog.length - 1 ? "1px solid #141414" : "none",
              background: item.status === "live" ? "rgba(245,158,11,0.06)" : item.status === "you" ? "rgba(255,255,255,0.02)" : "transparent",
              alignItems: "flex-start",
            }}>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", minWidth: 44, paddingTop: 2, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>{item.time}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: item.status === "you" ? "rgba(255,255,255,0.78)" : "#f59e0b", letterSpacing: "0.06em", marginBottom: 3 }}>
                  {item.agent.toUpperCase()}
                </p>
                <p style={{ fontSize: 13, color: item.status === "live" ? "#fff" : "rgba(255,255,255,0.88)", lineHeight: 1.5 }}>{item.action}</p>
              </div>
              {item.status === "done" && <span style={{ fontSize: 10, color: "#22c55e", marginTop: 3, flexShrink: 0 }}>&check;</span>}
              {item.status === "live" && <span className="live-dot" style={{ marginTop: 5 }} />}
            </div>
          ))}
        </div>
      </section>

      {/* AGENT ROSTER */}
      <section style={{ padding: "0 24px 32px", maxWidth: 620, margin: "0 auto" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#f59e0b", marginBottom: 18 }}>
          THE AGENTS WE'D BUILD FOR {lead.businessName.toUpperCase()}
        </p>
        {dossier.agents.map((a, i) => (
          <div key={i} style={{ display: "flex", gap: 16, padding: "16px 0", borderBottom: "1px solid #141414", alignItems: "flex-start" }}>
            <span style={{ fontSize: 22, flexShrink: 0, paddingTop: 2 }}>{a.emoji}</span>
            <div>
              <p style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 2 }}>{a.name}</p>
              <p style={{ fontSize: 12, color: "#f59e0b", marginBottom: 4 }}>{a.role}</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", lineHeight: 1.65 }}>{a.detail}</p>
            </div>
          </div>
        ))}
      </section>

      {/* BEFORE / AFTER */}
      <section style={{ padding: "8px 24px 36px", maxWidth: 620, margin: "0 auto" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#f59e0b", marginBottom: 18 }}>
          {lead.businessName.toUpperCase()}'S WEEK. BEFORE AND AFTER.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "#0c0a0c", border: "1px solid #1e1c1e", borderRadius: 12, padding: "18px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", marginBottom: 14 }}>BEFORE</p>
            {dossier.before.map((t, i) => (
              <p key={i} style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: 4 }}>&mdash; {t}</p>
            ))}
          </div>
          <div style={{ background: "#0c0a0c", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 12, padding: "18px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#f59e0b", letterSpacing: "0.1em", marginBottom: 14 }}>AFTER</p>
            {dossier.after.map((t, i) => (
              <p key={i} style={{ fontSize: 12, color: "rgba(255,255,255,0.94)", lineHeight: 1.6, marginBottom: 4 }}>&check; {t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ padding: "0 24px 80px", maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.025em", color: "#fff", marginBottom: 12 }}
          dangerouslySetInnerHTML={{ __html: dossier.closingHeadline.replace(/\n/g, "<br />") }}
        />
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", marginBottom: 32, lineHeight: 1.7 }}>{dossier.closingBody}</p>
        <Link href="/apply" className="cta" style={{ display: "flex", maxWidth: 420, margin: "0 auto", justifyContent: "center" }}>
          {dossier.ctaText}
        </Link>
      </section>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #141414", padding: "28px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
          Built for {lead.firstName} {lead.lastName} &middot; {lead.businessName} &middot; Generated {createdDate} &middot; Expires {expiryDate}
        </p>
      </div>

      {/* PDF BUTTON (client component) */}
      <DossierClient />
    </>
  );
}

function formatParagraphs(text: string): string {
  return text
    .split(/\n\n|\n/)
    .filter((p) => p.trim())
    .map((p) => `<p style="margin-bottom:12px">${p.trim()}</p>`)
    .join("");
}

const baseStyles = `
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
    .h1 { font-size:28px !important; }
  }
`;

const printStyles = `
  @media print {
    nav, .cta, .pdf-btn { display: none !important; }
    body { background: #fff !important; color: #000 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
`;
