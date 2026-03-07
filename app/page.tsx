"use client";

import { useState, FormEvent } from "react";

const divisions = [
  "Marketing",
  "Sales",
  "Operations",
  "Finance",
  "Customer Success",
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement)
        .value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email:
        (form.elements.namedItem("email") as HTMLInputElement).value || undefined,
    };

    try {
      const res = await fetch("/api/opt-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen">
      {/* ── HERO ── */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 inline-block rounded-full border border-purple/40 bg-purple/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple">
          Now Enrolling — Cohort 3
        </span>

        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          You do not need more people.{" "}
          <span className="text-purple">You need a fleet.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 sm:text-xl">
          22 AI agents. 5 divisions. 90 days to a business that runs without
          you.
        </p>

        <a
          href="#apply"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-purple px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-purple/80"
        >
          See If You Qualify
          <span aria-hidden="true">→</span>
        </a>
      </section>

      {/* ── PAIN ── */}
      <section className="mx-auto max-w-2xl px-6 py-24">
        <ul className="space-y-5 text-lg sm:text-xl">
          {[
            "Employees who quit after you finally train them.",
            "Agencies where you are client #47 on the priority list.",
            "Software that costs $2k/month to do absolutely nothing.",
          ].map((line) => (
            <li key={line} className="flex items-start gap-3 text-zinc-300">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs text-red-400">
                ✕
              </span>
              {line}
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-xl font-semibold text-gold">
          There is a better move.
        </p>
      </section>

      {/* ── WHAT IS AGE ── */}
      <section className="bg-light px-6 py-24 text-zinc-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            AGE is a 22-agent AI system built around{" "}
            <span className="text-purple">your</span> business.
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {divisions.map((d) => (
              <span
                key={d}
                className="rounded-full bg-purple/10 px-4 py-1.5 text-sm font-medium text-purple"
              >
                {d}
              </span>
            ))}
          </div>

          <p className="mt-10 text-lg text-zinc-600">
            Coordinating 24/7 — so you don&apos;t have to.
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section id="apply" className="px-6 py-24">
        <div className="mx-auto max-w-md">
          {submitted ? (
            <div className="text-center">
              <p className="text-2xl font-semibold">You are in the queue.</p>
              <p className="mt-3 text-zinc-400">
                Expect a text from Chrix shortly. 🫶
              </p>
            </div>
          ) : (
            <>
              <h2 className="mb-8 text-center text-3xl font-bold">
                See If You Qualify
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="firstName"
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-purple"
                />
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-purple"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email (optional)"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-purple"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-purple py-3.5 text-sm font-semibold text-white transition hover:bg-purple/80 disabled:opacity-50"
                >
                  {loading ? "Submitting…" : "Apply Now →"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
