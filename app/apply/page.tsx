"use client";
import { useState, useRef, useEffect } from "react";

const BUSINESS_TYPES = [
  "Local Service Business",
  "Professional Services / Consulting",
  "E-commerce / Product",
  "Real Estate",
  "Healthcare / Wellness",
  "Hospitality / Food & Beverage",
  "Trades / Construction",
  "Something else",
];

const PROBLEMS = [
  "I'm bleeding time on things that should be automated",
  "My leads are falling through the cracks",
  "I can't scale \u2014 everything still needs me",
  "My follow-up is inconsistent or nonexistent",
  "I don't have visibility into what's working",
  "All of the above, honestly",
];

const TEAM_SIZES = ["Just me", "2\u20135", "6\u201315", "16\u201350", "50+"];

const TRIED_OPTIONS = [
  "Hired a VA or assistant",
  "Tried Zapier / Make / automation tools",
  "Worked with a marketing agency",
  "Bought courses or coaching",
  "Hired someone full-time",
  "Nothing yet \u2014 just grinding",
];

const LOADING_STEPS = [
  "\u2713 Found your website",
  "\u2713 Pulling your business history",
  "\u2713 Identifying your market position",
  "\u2713 Spotting gaps your competitors missed",
  "\u2713 Designing your first agent",
];

export default function ApplyQuiz() {
  const [step, setStep] = useState(0);
  const [businessName, setBusinessName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [noWebsite, setNoWebsite] = useState(false);
  const [businessType, setBusinessType] = useState("");
  const [problem, setProblem] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [triedBefore, setTriedBefore] = useState<string[]>([]);
  const [vision, setVision] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to top on step change
  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  function next() {
    setStep((s) => s + 1);
  }
  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  function toggleTried(val: string) {
    setTriedBefore((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  }

  async function submit() {
    if (!firstName || !lastName || !email || !phone) return;
    setSubmitting(true);
    setLoadingPhase(true);
    setError("");

    // Start staggered loading steps
    const interval = setInterval(() => {
      setLoadingStep((s) => {
        if (s < LOADING_STEPS.length - 1) return s + 1;
        return s;
      });
    }, 2000);

    try {
      const res = await fetch("/api/generate-dossier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          websiteUrl: noWebsite ? null : websiteUrl || null,
          businessType,
          problem,
          teamSize,
          triedBefore,
          vision,
          firstName,
          lastName,
          email,
          phone,
        }),
      });

      clearInterval(interval);

      if (!res.ok) {
        setError("Something went wrong. We'll email you when your dossier is ready.");
        setSubmitting(false);
        return;
      }

      const data = await res.json();
      window.location.href = data.url;
    } catch {
      clearInterval(interval);
      setError("Something went wrong. We'll email you when your dossier is ready.");
      setSubmitting(false);
    }
  }

  const progress = ((step + 1) / 10) * 100;

  // Loading screen
  if (loadingPhase) {
    return (
      <>
        <style>{quizStyles}</style>
        <div style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "48px 24px", background: "#080608" }}>
          <div style={{ maxWidth: 440, width: "100%", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 32 }}>
              <span className="pulse-dot" />
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: "#f59e0b" }}>
                RESEARCHING {businessName.toUpperCase()}...
              </span>
            </div>

            <div style={{ textAlign: "left" }}>
              {LOADING_STEPS.map((text, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 15,
                    color: i <= loadingStep ? "rgba(255,255,255,0.92)" : "transparent",
                    marginBottom: 14,
                    transition: "color 0.5s ease",
                    lineHeight: 1.5,
                  }}
                >
                  {text}
                </p>
              ))}
              {loadingStep >= LOADING_STEPS.length - 1 && !error && (
                <p style={{ fontSize: 15, color: "#f59e0b", marginTop: 8, animation: "slowPulse 2s infinite" }}>
                  Building your dossier...
                </p>
              )}
            </div>

            {error && (
              <div style={{ marginTop: 32, background: "#0c0a0c", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 12, padding: "20px" }}>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.92)", lineHeight: 1.6 }}>{error}</p>
                <button
                  onClick={() => { setLoadingPhase(false); setSubmitting(false); setLoadingStep(0); }}
                  className="quiz-btn"
                  style={{ marginTop: 16, width: "100%" }}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{quizStyles}</style>

      {/* Progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 3, background: "#111" }}>
        <div style={{ height: "100%", background: "#f59e0b", width: `${progress}%`, transition: "width 0.4s ease" }} />
      </div>

      <div ref={containerRef} style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px 24px", maxWidth: 480, margin: "0 auto" }}>
        {/* Back button */}
        {step > 0 && !submitting && (
          <button onClick={back} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: 14, fontWeight: 600, cursor: "pointer", padding: "0 0 24px", textAlign: "left", fontFamily: "inherit" }}>
            \u2190 Back
          </button>
        )}

        {/* STEP 0: Hook */}
        {step === 0 && (
          <div className="fade-up">
            <a href="/" style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.2em", color: "#fff", textDecoration: "none", marginBottom: 44, display: "block" }}>\u2190 AGE</a>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#f59e0b", marginBottom: 16 }}>OPERATOR DOSSIER</p>
            <h1 style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", marginBottom: 16 }}>
              Before we show you what's possible, let us do our homework.
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 36 }}>
              We're going to research your business and build your custom operator blueprint. Answer a few questions. Takes 90 seconds.
            </p>
            <button className="quiz-btn" onClick={next}>Let's do this \u2192</button>
          </div>
        )}

        {/* STEP 1: Business Name */}
        {step === 1 && (
          <div className="fade-up">
            <p className="step-label">STEP 1 OF 8</p>
            <h2 className="step-q">What's the name of your business?</h2>
            <input
              className="quiz-input"
              placeholder="e.g. Bennu Coffee"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && businessName && next()}
            />
            <button className="quiz-btn" onClick={next} disabled={!businessName}>Continue \u2192</button>
          </div>
        )}

        {/* STEP 2: Website */}
        {step === 2 && (
          <div className="fade-up">
            <p className="step-label">STEP 2 OF 8</p>
            <h2 className="step-q">What's your website?</h2>
            <input
              className="quiz-input"
              placeholder="https://yourbusiness.com"
              type="url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              disabled={noWebsite}
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && (websiteUrl || noWebsite) && next()}
            />
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginBottom: 20, marginTop: -4 }}>
              <input
                type="checkbox"
                checked={noWebsite}
                onChange={(e) => { setNoWebsite(e.target.checked); if (e.target.checked) setWebsiteUrl(""); }}
                style={{ accentColor: "#f59e0b", width: 18, height: 18 }}
              />
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.78)" }}>No website yet</span>
            </label>
            <button className="quiz-btn" onClick={next} disabled={!websiteUrl && !noWebsite}>Continue \u2192</button>
          </div>
        )}

        {/* STEP 3: Business Type */}
        {step === 3 && (
          <div className="fade-up">
            <p className="step-label">STEP 3 OF 8</p>
            <h2 className="step-q">What best describes your business?</h2>
            <div className="card-grid">
              {BUSINESS_TYPES.map((t) => (
                <button
                  key={t}
                  className={`card-option ${businessType === t ? "card-selected" : ""}`}
                  onClick={() => { setBusinessType(t); setTimeout(next, 200); }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: Problem */}
        {step === 4 && (
          <div className="fade-up">
            <p className="step-label">STEP 4 OF 8</p>
            <h2 className="step-q">What's eating at you most right now?</h2>
            <div className="card-grid single">
              {PROBLEMS.map((p) => (
                <button
                  key={p}
                  className={`card-option ${problem === p ? "card-selected" : ""}`}
                  onClick={() => { setProblem(p); setTimeout(next, 200); }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: Team Size */}
        {step === 5 && (
          <div className="fade-up">
            <p className="step-label">STEP 5 OF 8</p>
            <h2 className="step-q">How many people are in your operation?</h2>
            <div className="card-grid">
              {TEAM_SIZES.map((s) => (
                <button
                  key={s}
                  className={`card-option ${teamSize === s ? "card-selected" : ""}`}
                  onClick={() => { setTeamSize(s); setTimeout(next, 200); }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 6: What You've Tried */}
        {step === 6 && (
          <div className="fade-up">
            <p className="step-label">STEP 6 OF 8</p>
            <h2 className="step-q">What have you already thrown at this problem?</h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>Select all that apply</p>
            <div className="card-grid single">
              {TRIED_OPTIONS.map((t) => (
                <button
                  key={t}
                  className={`card-option ${triedBefore.includes(t) ? "card-selected" : ""}`}
                  onClick={() => toggleTried(t)}
                >
                  {triedBefore.includes(t) ? "\u2713 " : ""}{t}
                </button>
              ))}
            </div>
            <button className="quiz-btn" onClick={next} disabled={triedBefore.length === 0} style={{ marginTop: 8 }}>Continue \u2192</button>
          </div>
        )}

        {/* STEP 7: Vision */}
        {step === 7 && (
          <div className="fade-up">
            <p className="step-label">STEP 7 OF 8</p>
            <h2 className="step-q">If we did our job perfectly, what would your life look like in 90 days?</h2>
            <textarea
              className="quiz-input"
              placeholder="I wake up and the first thing I see is booked appointments and qualified leads that came in overnight..."
              value={vision}
              onChange={(e) => setVision(e.target.value)}
              rows={4}
              style={{ resize: "vertical", minHeight: 120 }}
            />
            <button className="quiz-btn" onClick={next}>Continue \u2192</button>
          </div>
        )}

        {/* STEP 8: Contact Gate */}
        {step === 8 && (
          <div className="fade-up">
            <p className="step-label">STEP 8 OF 8</p>
            <h2 className="step-q">Now we go to work. Where should we send your dossier?</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <input
                  className="quiz-input"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoFocus
                />
                <input
                  className="quiz-input"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <input
                className="quiz-input"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="quiz-input"
                placeholder="Phone"
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button
              className="quiz-btn"
              onClick={submit}
              disabled={!firstName || !lastName || !email || !phone || submitting}
              style={{ marginTop: 8 }}
            >
              {submitting ? "Building..." : "Build My Dossier \u2192"}
            </button>
            <p style={{ marginTop: 12, fontSize: 12, color: "rgba(255,255,255,0.65)", textAlign: "center", lineHeight: 1.5 }}>
              We'll research your business and build your custom operator blueprint. Ready in under 2 minutes.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

const quizStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; background: #080608; }
  body { font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; color: #fff; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes slowPulse { 0%, 100% { opacity: 0.85; } 50% { opacity: 1; } }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

  .fade-up { animation: fadeUp 0.5s ease both; }

  .pulse-dot {
    width: 10px; height: 10px; border-radius: 50%; background: #f59e0b;
    display: inline-block; animation: blink 1.2s infinite; flex-shrink: 0;
  }

  .step-label {
    font-size: 10px; font-weight: 700; letter-spacing: 0.2em; color: #f59e0b; margin-bottom: 16px;
  }

  .step-q {
    font-size: 28px; font-weight: 900; line-height: 1.15; letter-spacing: -0.025em;
    color: #fff; margin-bottom: 24px;
  }

  .quiz-input {
    background: #111010;
    border: 1.5px solid #1e1c1e;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    font-family: inherit;
    padding: 15px 16px;
    width: 100%;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    margin-bottom: 16px;
  }
  .quiz-input:focus { border-color: #f59e0b; background: #151315; }
  .quiz-input::placeholder { color: #333; }
  .quiz-input:disabled { opacity: 0.3; }

  .quiz-btn {
    background: #f59e0b;
    border: none;
    border-radius: 10px;
    color: #080608;
    cursor: pointer;
    font-size: 17px;
    font-weight: 900;
    font-family: inherit;
    padding: 17px;
    width: 100%;
    letter-spacing: -0.01em;
    transition: opacity 0.2s, transform 0.15s;
  }
  .quiz-btn:hover { opacity: 0.88; transform: translateY(-1px); }
  .quiz-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 16px;
  }
  .card-grid.single {
    grid-template-columns: 1fr;
  }

  .card-option {
    background: #0c0a0c;
    border: 1.5px solid #1e1c1e;
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    font-family: inherit;
    font-weight: 600;
    padding: 16px 14px;
    cursor: pointer;
    text-align: left;
    transition: border-color 0.2s, background 0.2s, color 0.2s;
    line-height: 1.4;
  }
  .card-option:hover {
    border-color: rgba(245, 158, 11, 0.4);
    background: #110e10;
  }
  .card-selected {
    border-color: #f59e0b !important;
    background: rgba(245, 158, 11, 0.08) !important;
    color: #fff !important;
  }

  @media (max-width: 480px) {
    .step-q { font-size: 24px !important; }
    .card-grid { grid-template-columns: 1fr; }
  }
`;
