"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.phone) {
      setError("Name and phone required.");
      return;
    }
    setLoading(true);
    await fetch("/api/opt-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("https://age-v5.vercel.app");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
        padding: "24px",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 520, width: "100%",
        textAlign: "center",
      }}>

        {/* Badge */}
        <div style={{
          display: "inline-block",
          background: "rgba(124,58,237,0.15)",
          border: "1px solid rgba(124,58,237,0.4)",
          borderRadius: 100,
          padding: "6px 16px",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "#a78bfa",
          textTransform: "uppercase",
          marginBottom: 28,
          fontWeight: 600,
        }}>
          Cohort 3 — Limited Spots
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 800,
          lineHeight: 1.05,
          color: "#ffffff",
          margin: "0 0 16px",
          letterSpacing: "-0.02em",
        }}>
          You don&apos;t need<br />
          more people.<br />
          <span style={{ color: "#7c3aed" }}>You need a fleet.</span>
        </h1>

        {/* Subhead */}
        <p style={{
          fontSize: "clamp(15px, 2vw, 18px)",
          color: "#9ca3af",
          margin: "0 0 36px",
          lineHeight: 1.6,
          fontWeight: 400,
        }}>
          22 AI agents. 5 divisions. 90 days.<br />
          See if you qualify.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            type="text"
            placeholder="First Name"
            value={form.firstName}
            onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
            style={{
              width: "100%",
              padding: "14px 18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              color: "#fff",
              fontSize: 15,
              outline: "none",
              boxSizing: "border-box",
              transition: "border 0.2s",
            }}
            onFocus={e => e.target.style.borderColor = "rgba(124,58,237,0.6)"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            style={{
              width: "100%",
              padding: "14px 18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              color: "#fff",
              fontSize: 15,
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={e => e.target.style.borderColor = "rgba(124,58,237,0.6)"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
          />

          {error && <p style={{ color: "#f87171", fontSize: 13, margin: 0 }}>{error}</p>}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "15px 18px",
              background: loading ? "#4c1d95" : "linear-gradient(135deg, #7c3aed, #6d28d9)",
              border: "none",
              borderRadius: 10,
              color: "#fff",
              fontSize: 16,
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s, transform 0.1s",
            }}
            onMouseEnter={e => { if (!loading) (e.target as HTMLButtonElement).style.opacity = "0.9"; }}
            onMouseLeave={e => { (e.target as HTMLButtonElement).style.opacity = "1"; }}
          >
            {loading ? "Sending you in..." : "See If You Qualify →"}
          </button>
        </form>

        {/* Fine print */}
        <p style={{
          marginTop: 14,
          fontSize: 12,
          color: "#4b5563",
          lineHeight: 1.5,
        }}>
          No spam. No pitch decks. Just a real conversation.
        </p>

      </div>
    </main>
  );
}
