"use client";

import { useState } from "react";
import Image from "next/image";

const agents = [
  { file: "daniel-avatar.png", name: "Daniel" },
  { file: "aria-growth-avatar.png", name: "Aria" },
  { file: "creative-avatar.png", name: "Creative" },
  { file: "operations-avatar.png", name: "Operations" },
  { file: "strategy-avatar.png", name: "Strategy" },
  { file: "seo-avatar.png", name: "SEO" },
  { file: "content-avatar.png", name: "Content" },
  { file: "email-avatar.png", name: "Email" },
  { file: "media-avatar.png", name: "Media" },
  { file: "social-avatar.png", name: "Social" },
  { file: "cro-avatar.png", name: "CRO" },
  { file: "analyst-avatar.png", name: "Analyst" },
  { file: "builder-avatar.png", name: "Builder" },
  { file: "qa-avatar.png", name: "QA" },
  { file: "research-avatar.png", name: "Research" },
  { file: "pm-avatar.png", name: "PM" },
  { file: "foreman-avatar.png", name: "Foreman" },
  { file: "copy-avatar.png", name: "Copy" },
  { file: "video-avatar.png", name: "Video" },
  { file: "design-avatar.png", name: "Design" },
  { file: "support-avatar.png", name: "Support" },
  { file: "integrations-avatar.png", name: "Integrations" },
];

const particles = [
  { top: "8%", left: "15%", size: 3, delay: 0 },
  { top: "12%", left: "82%", size: 2, delay: 1.2 },
  { top: "20%", left: "45%", size: 4, delay: 0.5 },
  { top: "25%", left: "10%", size: 2, delay: 2.1 },
  { top: "18%", left: "70%", size: 3, delay: 0.8 },
  { top: "35%", left: "25%", size: 2, delay: 1.5 },
  { top: "40%", left: "60%", size: 5, delay: 0.3 },
  { top: "30%", left: "90%", size: 2, delay: 1.8 },
  { top: "45%", left: "5%", size: 3, delay: 2.5 },
  { top: "50%", left: "50%", size: 2, delay: 0.7 },
  { top: "55%", left: "78%", size: 4, delay: 1.1 },
  { top: "15%", left: "35%", size: 2, delay: 2.8 },
  { top: "60%", left: "20%", size: 3, delay: 0.4 },
  { top: "65%", left: "88%", size: 2, delay: 1.6 },
  { top: "70%", left: "42%", size: 3, delay: 2.2 },
  { top: "22%", left: "55%", size: 2, delay: 0.9 },
  { top: "38%", left: "75%", size: 4, delay: 1.3 },
  { top: "48%", left: "30%", size: 2, delay: 2.6 },
  { top: "75%", left: "12%", size: 3, delay: 0.6 },
  { top: "80%", left: "65%", size: 2, delay: 1.9 },
  { top: "10%", left: "95%", size: 3, delay: 2.4 },
  { top: "42%", left: "8%", size: 2, delay: 0.2 },
  { top: "58%", left: "52%", size: 3, delay: 1.7 },
  { top: "85%", left: "38%", size: 2, delay: 2.9 },
  { top: "33%", left: "48%", size: 4, delay: 0.1 },
];

const TICKER =
  "AI OUTREACH \u00b7 VOICE CALLS \u00b7 CALENDAR BOOKING \u00b7 CONTENT CREATION \u00b7 SEO \u00b7 LEAD NURTURING \u00b7 STRATEGY \u00b7 24/7 OPERATIONS \u00b7 ZERO OVERHEAD \u00b7 ";

export default function Home() {
  const [form, setForm] = useState({ firstName: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName.trim() || !form.phone.trim()) {
      setError("Name and phone are required.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await fetch("/api/opt-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim() || undefined,
        }),
      });
      window.location.href = "https://age-v5.vercel.app";
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <>
      {/* ===== SECTION 1 — HERO ===== */}
      <section className="relative min-h-screen flex flex-col justify-end items-center overflow-hidden">
        <Image
          src="/assets/hero-commander.png"
          alt="Commander of the AI fleet"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.4) 40%, rgba(10,10,10,0.85) 75%, #0a0a0a 100%)",
          }}
        />

        {/* Particle field */}
        <div className="absolute inset-0 z-[15] pointer-events-none">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                background: "#7c3aed",
                boxShadow: "0 0 8px 3px rgba(124,58,237,0.4)",
                animation: `particle-glow ${3 + p.delay}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        {/* AGE wordmark */}
        <div className="absolute top-6 left-6 z-20">
          <span
            className="text-sm font-bold"
            style={{ color: "#7c3aed", letterSpacing: "0.25em" }}
          >
            AGE
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-20 text-center px-6 pb-12 md:pb-20 max-w-3xl mx-auto">
          {/* Enrollment badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{
                background: "#ef4444",
                animation: "pulse-red 2s ease-in-out infinite",
              }}
            />
            <span
              className="text-xs font-semibold uppercase"
              style={{ color: "#a78bfa", letterSpacing: "0.14em" }}
            >
              Cohort 3 — Limited Enrollment
            </span>
          </div>

          <h1
            className="font-extrabold text-white mb-5"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            You don&apos;t need more people.
            <br />
            You need a fleet.
          </h1>

          <p
            className="mb-10"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
              color: "#9ca3af",
              lineHeight: 1.6,
            }}
          >
            22 AI agents. One mission. Your business — fully deployed in 90
            days.
          </p>

          <a
            href="#proof"
            className="inline-block text-2xl"
            style={{
              color: "rgba(255,255,255,0.35)",
              animation: "bounce-down 2s ease-in-out infinite",
            }}
            aria-label="Scroll down"
          >
            ↓
          </a>
        </div>
      </section>

      {/* ===== SECTION 2 — PROOF STRIP ===== */}
      <section
        id="proof"
        className="relative overflow-hidden py-4"
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid rgba(124,58,237,0.15)",
          borderBottom: "1px solid rgba(124,58,237,0.15)",
        }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "ticker-scroll 15s linear infinite",
            width: "max-content",
          }}
        >
          <span
            className="text-sm md:text-base font-bold uppercase"
            style={{ color: "#7c3aed", letterSpacing: "0.15em" }}
          >
            {TICKER}
          </span>
          <span
            className="text-sm md:text-base font-bold uppercase"
            style={{ color: "#7c3aed", letterSpacing: "0.15em" }}
          >
            {TICKER}
          </span>
        </div>
      </section>

      {/* ===== SECTION 3 — THE HOOK ===== */}
      <section
        className="py-24 md:py-36 px-6 text-center"
        style={{ background: "#0a0a0a" }}
      >
        <p
          className="font-bold max-w-2xl mx-auto mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
            lineHeight: 1.25,
          }}
        >
          <span style={{ color: "#6b7280" }}>While you read this,</span>
          <br />
          <span className="text-white">
            someone else is deploying their fleet.
          </span>
        </p>
        <p className="text-sm" style={{ color: "#6b7280" }}>
          There are{" "}
          <span className="text-white font-semibold">3 spots left</span> in
          Cohort 3.
        </p>
      </section>

      {/* ===== SECTION 4 — THE FLEET ===== */}
      <section className="py-20 md:py-28 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center text-white font-bold mb-14"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
          >
            Meet your team.
          </h2>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-4 md:gap-5 justify-items-center">
            {agents.map((agent) => (
              <div
                key={agent.file}
                className="agent-card flex flex-col items-center gap-1.5 cursor-default"
              >
                <div className="agent-glow w-12 h-12 md:w-16 md:h-16 relative rounded-full overflow-hidden">
                  <Image
                    src={`/assets/agents/${agent.file}`}
                    alt={agent.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <span
                  className="text-[10px] md:text-xs font-medium text-center leading-tight"
                  style={{ color: "#9ca3af" }}
                >
                  {agent.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — THE APPLICATION ===== */}
      <section
        id="apply"
        className="relative py-24 md:py-32 px-6 flex items-center justify-center"
        style={{ minHeight: "80vh" }}
      >
        <Image
          src="/assets/operator-hero.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.85) 50%, rgba(10,10,10,0.95) 100%)",
          }}
        />

        <div className="relative z-20 w-full max-w-md mx-auto text-center">
          <h2
            className="text-white font-extrabold mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            See If You Qualify
          </h2>
          <p className="text-sm mb-8" style={{ color: "#9ca3af" }}>
            We review every application personally.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="First Name *"
              value={form.firstName}
              onChange={(e) =>
                setForm((f) => ({ ...f, firstName: e.target.value }))
              }
              required
              className="w-full px-4 py-3.5 rounded-xl text-white text-[15px] outline-none transition-colors placeholder:text-white/30"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(124,58,237,0.6)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={form.phone}
              onChange={(e) =>
                setForm((f) => ({ ...f, phone: e.target.value }))
              }
              required
              className="w-full px-4 py-3.5 rounded-xl text-white text-[15px] outline-none transition-colors placeholder:text-white/30"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(124,58,237,0.6)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
            <input
              type="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              className="w-full px-4 py-3.5 rounded-xl text-white text-[15px] outline-none transition-colors placeholder:text-white/30"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(124,58,237,0.6)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />

            {error && (
              <p className="text-sm m-0" style={{ color: "#f87171" }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold tracking-wide transition-all cursor-pointer disabled:cursor-not-allowed"
              style={{
                background: loading
                  ? "#4c1d95"
                  : "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                border: "none",
                color: "#f59e0b",
                fontSize: 17,
              }}
              onMouseEnter={(e) => {
                if (!loading)
                  (e.target as HTMLButtonElement).style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.opacity = "1";
              }}
            >
              {loading ? "Sending you in..." : "Apply Now \u2192"}
            </button>
          </form>

          <p
            className="mt-5 text-xs leading-relaxed"
            style={{ color: "#4b5563" }}
          >
            No spam. No pitch decks. Just a real conversation — possibly from an
            AI that sounds exactly like Chrix. 😈
          </p>
        </div>
      </section>
    </>
  );
}
