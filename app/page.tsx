"use client";

import { useState } from "react";
import Image from "next/image";

const TICKER_ITEMS = [
  "AI OUTREACH",
  "VOICE CALLS IN YOUR VOICE",
  "CALENDAR BOOKING",
  "CONTENT CREATION",
  "SEO",
  "LEAD NURTURING",
  "STRATEGY",
  "24/7 OPERATIONS",
  "ZERO OVERHEAD",
  "NO EMPLOYEES",
  "NO AGENCY",
];
const TICKER = TICKER_ITEMS.map((t) => `· ${t} `).join("");

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

export default function Home() {
  const [form, setForm] = useState({ firstName: "", phone: "" });
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
      {/* ===== HERO — ABOVE THE FOLD ===== */}
      <section className="relative h-screen flex flex-col overflow-hidden" style={{ background: "#080808" }}>
        {/* Background image */}
        <Image
          src="/assets/gate-hero.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1]" style={{ background: "rgba(0,0,0,0.75)" }} />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-6 py-5">
          <span className="text-sm font-bold tracking-[0.25em]" style={{ color: "#7c3aed" }}>
            AGE
          </span>
          <span className="hidden sm:block text-xs" style={{ color: "#6b7280" }}>
            22 Agents · 5 Divisions · 90 Days
          </span>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.25)",
            }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: "#ef4444", animation: "pulse-red 1.5s ease-in-out infinite" }}
            />
            <span className="text-xs font-semibold" style={{ color: "#f87171" }}>
              ⚡ 3 spots remaining in Cohort 3
            </span>
          </div>

          {/* H1 */}
          <h1
            className="text-center font-extrabold mb-4"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            <span className="text-white">Your competitors just hired</span>
            <br />
            <span className="text-white">22 people. </span>
            <span style={{ color: "#f59e0b" }}>Zero salaries.</span>
          </h1>

          {/* Subhead */}
          <p
            className="text-center max-w-xl mb-8"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.125rem)", color: "#9ca3af", lineHeight: 1.6 }}
          >
            AGE deploys a full AI workforce around your business in 90 days.
            Growth. Creative. Operations. Strategy. Command. All of it.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="w-full max-w-[440px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                required
                className="w-full px-4 py-3.5 rounded-lg text-white text-[15px] outline-none transition-all placeholder:text-white/25"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.6)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                required
                className="w-full px-4 py-3.5 rounded-lg text-white text-[15px] outline-none transition-all placeholder:text-white/25"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.6)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {error && <p className="text-sm mb-2" style={{ color: "#f87171" }}>{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-lg font-bold tracking-wide transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              style={{
                background: loading ? "#4c1d95" : "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                border: "none",
                color: "#f59e0b",
                fontSize: 16,
              }}
              onMouseEnter={(e) => {
                if (!loading) (e.currentTarget.style.transform = "translateY(-1px)");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {loading ? "Sending you in..." : "See If You Qualify →"}
            </button>
          </form>

          {/* Microcopy */}
          <p className="text-center mt-4 text-xs max-w-[440px]" style={{ color: "#4b5563", lineHeight: 1.5 }}>
            No pitch decks. No agencies. Just a real conversation — probably
            from an AI that sounds exactly like me. 😈
          </p>
        </div>
      </section>

      {/* ===== SECTION 2 — TICKER ===== */}
      <section
        className="relative overflow-hidden"
        style={{ height: 40, background: "#111", lineHeight: "40px" }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "ticker-scroll 20s linear infinite", width: "max-content" }}
        >
          <span className="text-xs font-bold uppercase text-white" style={{ letterSpacing: "0.12em" }}>
            {TICKER}
          </span>
          <span className="text-xs font-bold uppercase text-white" style={{ letterSpacing: "0.12em" }}>
            {TICKER}
          </span>
        </div>
      </section>

      {/* ===== SECTION 3 — COPY BREAK ===== */}
      <section className="py-16 px-6 text-center" style={{ background: "#080808" }}>
        <blockquote className="max-w-2xl mx-auto">
          <p
            className="font-bold italic mb-4"
            style={{
              fontSize: "clamp(1.3rem, 3.5vw, 2.25rem)",
              lineHeight: 1.3,
              color: "#9ca3af",
            }}
          >
            &ldquo;Most people will read this page, think{" "}
            <span className="not-italic text-white">that&apos;s wild,</span>{" "}
            and go back to doing everything themselves.&rdquo;
          </p>
          <p className="text-sm" style={{ color: "#6b7280" }}>
            The ones who don&apos;t?{" "}
            <span className="text-white font-semibold">They&apos;re in Cohort 2 right now.</span>
          </p>
        </blockquote>
      </section>

      {/* ===== SECTION 4 — THE FLEET ===== */}
      <section className="py-20 px-6" style={{ background: "#080808" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center text-white font-bold mb-4"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.25rem)" }}
          >
            Your fleet. Their job titles.
          </h2>
          <p className="text-center text-sm mb-14" style={{ color: "#6b7280" }}>
            22 agents across 5 divisions — deployed around your business in 90 days.
          </p>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-4 md:gap-5 justify-items-center">
            {agents.map((agent) => (
              <div key={agent.file} className="agent-card flex flex-col items-center gap-1.5 cursor-default">
                <div className="agent-glow w-12 h-12 md:w-16 md:h-16 relative rounded-full overflow-hidden">
                  <Image
                    src={`/assets/agents/${agent.file}`}
                    alt={agent.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-medium text-center leading-tight" style={{ color: "#9ca3af" }}>
                  {agent.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — BOTTOM CTA ===== */}
      <section className="py-20 px-6 text-center" style={{ background: "#080808" }}>
        <div className="max-w-md mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#7c3aed" }}>
            Still here?
          </p>
          <h2
            className="text-white font-extrabold mb-6"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", lineHeight: 1.15 }}
          >
            While you&apos;re reading,
            <br />
            <span style={{ color: "#f59e0b" }}>someone else is deploying.</span>
          </h2>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-block w-full max-w-sm py-4 rounded-lg font-bold tracking-wide transition-all"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
              color: "#f59e0b",
              fontSize: 16,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            See If You Qualify →
          </a>
          <p className="mt-4 text-xs" style={{ color: "#4b5563" }}>
            3 spots left in Cohort 3. We&apos;re not saying that to be cute.
          </p>
        </div>
      </section>
    </>
  );
}
