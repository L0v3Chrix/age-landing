"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// ─── Section definitions ──────────────────────────────────────────────────────
const INDUSTRIES = [
  "E-commerce / Product",
  "Local Service Business",
  "Professional Services / Consulting",
  "Real Estate",
  "Healthcare / Wellness",
  "Hospitality / Food & Beverage",
  "Trades / Construction",
  "SaaS / Software",
  "Media / Content",
  "Other",
];

const REVENUE_RANGES = [
  "Under $10K/mo",
  "$10K–$25K/mo",
  "$25K–$75K/mo",
  "$75K–$150K/mo",
  "$150K–$500K/mo",
  "$500K+/mo",
  "Prefer not to say",
];

const VISITOR_RANGES = [
  "Under 1,000/mo",
  "1K–5K/mo",
  "5K–20K/mo",
  "20K–100K/mo",
  "100K+/mo",
  "Don't track it",
];

const AD_SPEND_RANGES = [
  "Nothing yet",
  "Under $1K/mo",
  "$1K–$5K/mo",
  "$5K–$20K/mo",
  "$20K–$50K/mo",
  "$50K+/mo",
];

const EMAIL_LIST_RANGES = [
  "No list yet",
  "Under 500",
  "500–2,000",
  "2K–10K",
  "10K–50K",
  "50K+",
];

const WEBSITE_PLATFORMS = [
  "Shopify",
  "WooCommerce",
  "BigCommerce",
  "Squarespace",
  "Webflow",
  "Custom / Built in-house",
  "Other",
];

const EMAIL_PLATFORMS = [
  "Klaviyo",
  "Mailchimp",
  "ActiveCampaign",
  "HubSpot",
  "ConvertKit",
  "None / just Gmail",
  "Other",
];

const CRM_OPTIONS = [
  "HubSpot",
  "Salesforce",
  "GHL (GoHighLevel)",
  "Pipedrive",
  "Notion / spreadsheet",
  "None",
  "Other",
];

const AD_CHANNELS = [
  "Google Ads",
  "Meta (Facebook/Instagram)",
  "TikTok Ads",
  "YouTube Ads",
  "Pinterest Ads",
  "LinkedIn Ads",
  "None yet",
  "Other",
];

const ORGANIC_CHANNELS = [
  "SEO / Blog",
  "Instagram",
  "TikTok (organic)",
  "YouTube (organic)",
  "Facebook Groups",
  "Email list",
  "Word of mouth / referral",
  "None that's working",
];

const AGENT_PRIORITIES = [
  "Lead generation & outreach",
  "Follow-up & nurture sequences",
  "Customer support & FAQs",
  "Content & social media",
  "Reporting & analytics",
  "Sales process automation",
  "All of the above",
];

const TOTAL_SECTIONS = 12;

// ─── Main component wrapper ───────────────────────────────────────────────────
export default function OnboardingPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100svh", background: "#080608" }} />}>
      <OnboardingForm />
    </Suspense>
  );
}

// ─── Form component ───────────────────────────────────────────────────────────
function OnboardingForm() {
  const searchParams = useSearchParams();
  const prefillName = searchParams.get("name") || "";
  const prefillUrl = searchParams.get("url") || "";

  const containerRef = useRef<HTMLDivElement>(null);
  const [section, setSection] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Section 1 — Business Basics
  const [businessName, setBusinessName] = useState(prefillName);
  const [websiteUrl, setWebsiteUrl] = useState(prefillUrl);
  const [industry, setIndustry] = useState("");
  const [yearsOperating, setYearsOperating] = useState("");

  // Section 2 — Products & Pricing
  const [productRange, setProductRange] = useState("");
  const [topSellers, setTopSellers] = useState("");
  const [avgOrderValue, setAvgOrderValue] = useState("");
  const [grossMargin, setGrossMargin] = useState("");

  // Section 3 — Customers
  const [icpDescription, setIcpDescription] = useState("");
  const [geography, setGeography] = useState("");
  const [acquisitionChannels, setAcquisitionChannels] = useState("");
  const [buyingObjections, setBuyingObjections] = useState("");

  // Section 4 — Current Numbers
  const [revenueRange, setRevenueRange] = useState("");
  const [visitorRange, setVisitorRange] = useState("");
  const [emailListRange, setEmailListRange] = useState("");
  const [adSpendRange, setAdSpendRange] = useState("");

  // Section 5 — Tech Stack
  const [websitePlatform, setWebsitePlatform] = useState("");
  const [emailPlatform, setEmailPlatform] = useState("");
  const [crm, setCrm] = useState("");
  const [adChannels, setAdChannels] = useState<string[]>([]);
  const [otherTools, setOtherTools] = useState("");

  // Section 6 — Marketing & Sales
  const [workingChannels, setWorkingChannels] = useState<string[]>([]);
  const [failedChannels, setFailedChannels] = useState("");
  const [followUpProcess, setFollowUpProcess] = useState("");
  const [missingAsset, setMissingAsset] = useState("");

  // Section 7 — Operations
  const [biggestTimeSucks, setBiggestTimeSucks] = useState("");
  const [manualTasksToAutomate, setManualTasksToAutomate] = useState("");
  const [teamStructure, setTeamStructure] = useState("");
  const [customerComplaints, setCustomerComplaints] = useState("");

  // Section 8 — Competitors
  const [competitor1, setCompetitor1] = useState("");
  const [competitor2, setCompetitor2] = useState("");
  const [competitor3, setCompetitor3] = useState("");
  const [yourAdvantage, setYourAdvantage] = useState("");
  const [theirAdvantage, setTheirAdvantage] = useState("");

  // Section 9 — Agent Mission
  const [whyAge, setWhyAge] = useState("");
  const [successIn90Days, setSuccessIn90Days] = useState("");
  const [agentPriorities, setAgentPriorities] = useState<string[]>([]);
  const [worries, setWorries] = useState("");
  const [hardNos, setHardNos] = useState("");

  // Section 10 — Brand Voice
  const [brandWords, setBrandWords] = useState("");
  const [icpVoice, setIcpVoice] = useState("");
  const [toneDescription, setToneDescription] = useState("");
  const [admiredBrands, setAdmiredBrands] = useState("");
  const [phrasesToAvoid, setPhrasesToAvoid] = useState("");

  // Section 11 — Data Dump
  const [dataDump, setDataDump] = useState("");
  const [complianceNotes, setComplianceNotes] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [section]);

  const progress = (section / TOTAL_SECTIONS) * 100;

  function next() { setSection((s) => s + 1); }
  function back() { setSection((s) => Math.max(0, s - 1)); }
  function toggle(val: string, arr: string[], setArr: (v: string[]) => void) {
    setArr(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  }

  async function submit() {
    setSubmitting(true);
    setError("");
    try {
      const payload = {
        businessName, websiteUrl, industry, yearsOperating,
        productRange, topSellers, avgOrderValue, grossMargin,
        icpDescription, geography, acquisitionChannels, buyingObjections,
        revenueRange, visitorRange, emailListRange, adSpendRange,
        websitePlatform, emailPlatform, crm, adChannels, otherTools,
        workingChannels, failedChannels, followUpProcess, missingAsset,
        biggestTimeSucks, manualTasksToAutomate, teamStructure, customerComplaints,
        competitor1, competitor2, competitor3, yourAdvantage, theirAdvantage,
        whyAge, successIn90Days, agentPriorities, worries, hardNos,
        brandWords, icpVoice, toneDescription, admiredBrands, phrasesToAvoid,
        dataDump, complianceNotes,
        contactName, contactEmail, contactPhone,
        submittedAt: new Date().toISOString(),
      };
      const res = await fetch("/api/save-onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Save failed");
      const data = await res.json();
      setSubmissionId(data.id);
      setSubmitted(true);
    } catch {
      setError("Something went wrong — please try again or contact your RTV representative.");
    } finally {
      setSubmitting(false);
    }
  }

  // ─── Thank you screen ───────────────────────────────────────────────────────
  if (submitted) {
    return (
      <>
        <style>{styles}</style>
        <div style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "48px 24px", background: "#080608" }}>
          <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 24 }}>🥚</div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#f59e0b", marginBottom: 16 }}>SUBMITTED</p>
            <h1 style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", marginBottom: 16 }}>
              You&rsquo;re in the queue.
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 32 }}>
              Your onboarding data has been received. Your RTV team is reviewing it now and will be in touch within 24 hours to schedule your agent hatching session.
            </p>
            <div style={{ background: "#0c0a0c", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>Reference ID</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b", fontFamily: "monospace", letterSpacing: "0.05em" }}>{submissionId}</p>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              Keep this ID handy. Your team may reference it.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>

      {/* Progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 3, background: "#111" }}>
        <div style={{ height: "100%", background: "#f59e0b", width: `${progress}%`, transition: "width 0.4s ease" }} />
      </div>

      <div
        ref={containerRef}
        style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 24px 48px", maxWidth: 560, margin: "0 auto" }}
      >
        {section > 0 && (
          <button onClick={back} className="back-btn">← Back</button>
        )}

        {/* ── SECTION 0: Intro ─────────────────────────────────────────── */}
        {section === 0 && (
          <div className="fade-up">
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#f59e0b", marginBottom: 20 }}>AGENT GENESIS ENGINE</p>
            <h1 className="section-h1">
              Welcome to your onboarding.
            </h1>
            <p className="section-sub">
              This is where we get deep. We&rsquo;re going to ask you everything — your business, your customers, your numbers, your brand, your goals. The more you give us, the sharper your agents will be.
            </p>
            <p className="section-sub" style={{ marginTop: 0, color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
              Takes about 10–15 minutes. Grab a coffee. This is worth your time.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              {["12 sections", "~40 questions", "All confidential"].map((tag) => (
                <span key={tag} style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.5)", background: "#111", border: "1px solid #1e1c1e", borderRadius: 6, padding: "6px 12px", letterSpacing: "0.05em" }}>{tag}</span>
              ))}
            </div>
            <button className="primary-btn" onClick={next}>Start Onboarding →</button>
          </div>
        )}

        {/* ── SECTION 1: Business Basics ───────────────────────────────── */}
        {section === 1 && (
          <div className="fade-up">
            <SectionHeader n={1} total={TOTAL_SECTIONS} label="Business Basics" />
            <h2 className="section-h2">Let&rsquo;s start with the fundamentals.</h2>

            <Label>Business name</Label>
            <input className="field" placeholder="e.g. Robust Garage Solutions" value={businessName} onChange={(e) => setBusinessName(e.target.value)} autoFocus />

            <Label>Website URL</Label>
            <input className="field" placeholder="https://yourdomain.com" type="url" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} />

            <Label>Industry / business type</Label>
            <div className="card-grid">
              {INDUSTRIES.map((t) => (
                <button key={t} className={`card ${industry === t ? "card-on" : ""}`} onClick={() => setIndustry(t)}>{t}</button>
              ))}
            </div>

            <Label>How long have you been operating?</Label>
            <input className="field" placeholder="e.g. 3 years, launched Jan 2023" value={yearsOperating} onChange={(e) => setYearsOperating(e.target.value)} />

            <button className="primary-btn" onClick={next} disabled={!businessName || !industry}>Continue →</button>
          </div>
        )}

        {/* ── SECTION 2: Products & Pricing ────────────────────────────── */}
        {section === 2 && (
          <div className="fade-up">
            <SectionHeader n={2} total={TOTAL_SECTIONS} label="Products & Pricing" />
            <h2 className="section-h2">What are you actually selling?</h2>

            <Label>Describe your full product / service range</Label>
            <textarea className="field" rows={4} placeholder="Walk us through what you sell — categories, flagship products, services, everything." value={productRange} onChange={(e) => setProductRange(e.target.value)} />

            <Label>Top 3 products or categories by revenue</Label>
            <textarea className="field" rows={3} placeholder="1. Car lifts (2-post, 4-post)\n2. Garage flooring\n3. Accessories" value={topSellers} onChange={(e) => setTopSellers(e.target.value)} />

            <Label>Average order value (approx)</Label>
            <input className="field" placeholder="e.g. $1,200 AUD" value={avgOrderValue} onChange={(e) => setAvgOrderValue(e.target.value)} />

            <Label>Gross margin % range</Label>
            <input className="field" placeholder="e.g. 30–45%" value={grossMargin} onChange={(e) => setGrossMargin(e.target.value)} />

            <button className="primary-btn" onClick={next} disabled={!productRange}>Continue →</button>
          </div>
        )}

        {/* ── SECTION 3: Customers ─────────────────────────────────────── */}
        {section === 3 && (
          <div className="fade-up">
            <SectionHeader n={3} total={TOTAL_SECTIONS} label="Your Customers" />
            <h2 className="section-h2">Tell us about the people who buy from you.</h2>

            <Label>Describe your ideal customer</Label>
            <textarea className="field" rows={4} placeholder="Who are they? Age, income, occupation, what they care about, why they buy from you specifically..." value={icpDescription} onChange={(e) => setIcpDescription(e.target.value)} />

            <Label>Where do they live? (geographic markets)</Label>
            <input className="field" placeholder="e.g. Australia-wide, mainly QLD/NSW/VIC" value={geography} onChange={(e) => setGeography(e.target.value)} />

            <Label>How do they find you today?</Label>
            <input className="field" placeholder="e.g. Google search, word of mouth, Facebook, Instagram ads..." value={acquisitionChannels} onChange={(e) => setAcquisitionChannels(e.target.value)} />

            <Label>What objections do they have before buying?</Label>
            <textarea className="field" rows={3} placeholder="What do they hesitate about? What questions do they always ask? What makes them leave without buying?" value={buyingObjections} onChange={(e) => setBuyingObjections(e.target.value)} />

            <button className="primary-btn" onClick={next} disabled={!icpDescription}>Continue →</button>
          </div>
        )}

        {/* ── SECTION 4: Numbers ───────────────────────────────────────── */}
        {section === 4 && (
          <div className="fade-up">
            <SectionHeader n={4} total={TOTAL_SECTIONS} label="Current Numbers" />
            <h2 className="section-h2">Let&rsquo;s talk about where you are right now.</h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 24, lineHeight: 1.6 }}>All numbers are confidential. We use these to calibrate your agent targets.</p>

            <Label>Monthly revenue (approx)</Label>
            <div className="card-grid">
              {REVENUE_RANGES.map((r) => (
                <button key={r} className={`card ${revenueRange === r ? "card-on" : ""}`} onClick={() => setRevenueRange(r)}>{r}</button>
              ))}
            </div>

            <Label>Monthly website visitors</Label>
            <div className="card-grid">
              {VISITOR_RANGES.map((r) => (
                <button key={r} className={`card ${visitorRange === r ? "card-on" : ""}`} onClick={() => setVisitorRange(r)}>{r}</button>
              ))}
            </div>

            <Label>Email list size</Label>
            <div className="card-grid">
              {EMAIL_LIST_RANGES.map((r) => (
                <button key={r} className={`card ${emailListRange === r ? "card-on" : ""}`} onClick={() => setEmailListRange(r)}>{r}</button>
              ))}
            </div>

            <Label>Monthly ad spend</Label>
            <div className="card-grid">
              {AD_SPEND_RANGES.map((r) => (
                <button key={r} className={`card ${adSpendRange === r ? "card-on" : ""}`} onClick={() => setAdSpendRange(r)}>{r}</button>
              ))}
            </div>

            <button className="primary-btn" onClick={next} disabled={!revenueRange}>Continue →</button>
          </div>
        )}

        {/* ── SECTION 5: Tech Stack ────────────────────────────────────── */}
        {section === 5 && (
          <div className="fade-up">
            <SectionHeader n={5} total={TOTAL_SECTIONS} label="Tech Stack" />
            <h2 className="section-h2">What tools run your business?</h2>

            <Label>Website platform</Label>
            <div className="card-grid">
              {WEBSITE_PLATFORMS.map((p) => (
                <button key={p} className={`card ${websitePlatform === p ? "card-on" : ""}`} onClick={() => setWebsitePlatform(p)}>{p}</button>
              ))}
            </div>

            <Label>Email marketing platform</Label>
            <div className="card-grid">
              {EMAIL_PLATFORMS.map((p) => (
                <button key={p} className={`card ${emailPlatform === p ? "card-on" : ""}`} onClick={() => setEmailPlatform(p)}>{p}</button>
              ))}
            </div>

            <Label>CRM / customer management</Label>
            <div className="card-grid">
              {CRM_OPTIONS.map((c) => (
                <button key={c} className={`card ${crm === c ? "card-on" : ""}`} onClick={() => setCrm(c)}>{c}</button>
              ))}
            </div>

            <Label>Ad platforms you use (select all that apply)</Label>
            <div className="card-grid">
              {AD_CHANNELS.map((c) => (
                <button key={c} className={`card ${adChannels.includes(c) ? "card-on" : ""}`} onClick={() => toggle(c, adChannels, setAdChannels)}>{adChannels.includes(c) ? "✓ " : ""}{c}</button>
              ))}
            </div>

            <Label>Other tools we should know about</Label>
            <textarea className="field" rows={3} placeholder="Any other software, apps, or platforms that are important to how you operate..." value={otherTools} onChange={(e) => setOtherTools(e.target.value)} />

            <button className="primary-btn" onClick={next} disabled={!websitePlatform}>Continue →</button>
          </div>
        )}

        {/* ── SECTION 6: Marketing & Sales ────────────────────────────── */}
        {section === 6 && (
          <div className="fade-up">
            <SectionHeader n={6} total={TOTAL_SECTIONS} label="Marketing & Sales" />
            <h2 className="section-h2">What&rsquo;s actually moving the needle right now?</h2>

            <Label>Channels that are working (select all that apply)</Label>
            <div className="card-grid">
              {ORGANIC_CHANNELS.map((c) => (
                <button key={c} className={`card ${workingChannels.includes(c) ? "card-on" : ""}`} onClick={() => toggle(c, workingChannels, setWorkingChannels)}>{workingChannels.includes(c) ? "✓ " : ""}{c}</button>
              ))}
            </div>

            <Label>Channels you&rsquo;ve tried and abandoned (and why)</Label>
            <textarea className="field" rows={3} placeholder="e.g. Facebook ads — spent $3K, zero ROI. Pinterest — tried for 2 months, no traffic..." value={failedChannels} onChange={(e) => setFailedChannels(e.target.value)} />

            <Label>Describe your current follow-up process</Label>
            <textarea className="field" rows={3} placeholder="What happens after someone gives you their email? After they buy? After they abandon cart? Be honest — even if it&apos;s &apos;nothing yet&apos;." value={followUpProcess} onChange={(e) => setFollowUpProcess(e.target.value)} />

            <Label>What marketing asset do you wish you had but don&rsquo;t?</Label>
            <input className="field" placeholder="e.g. Case studies, video testimonials, a comparison page, a quiz, weekly email..." value={missingAsset} onChange={(e) => setMissingAsset(e.target.value)} />

            <button className="primary-btn" onClick={next}>Continue →</button>
          </div>
        )}

        {/* ── SECTION 7: Operations ────────────────────────────────────── */}
        {section === 7 && (
          <div className="fade-up">
            <SectionHeader n={7} total={TOTAL_SECTIONS} label="Operations" />
            <h2 className="section-h2">Where does your time actually go?</h2>

            <Label>What are your biggest time sucks every week?</Label>
            <textarea className="field" rows={4} placeholder="Be specific. What tasks feel like they shouldn't require you — but still do?" value={biggestTimeSucks} onChange={(e) => setBiggestTimeSucks(e.target.value)} />

            <Label>What do you do manually that you know should be automated?</Label>
            <textarea className="field" rows={3} placeholder="e.g. Copy-pasting leads into spreadsheets, sending the same quote email, manually checking stock levels..." value={manualTasksToAutomate} onChange={(e) => setManualTasksToAutomate(e.target.value)} />

            <Label>Describe your team structure</Label>
            <textarea className="field" rows={3} placeholder="Who does what? Include yourself, employees, VAs, contractors. Don&apos;t need full names — just roles." value={teamStructure} onChange={(e) => setTeamStructure(e.target.value)} />

            <Label>What do customers complain about most?</Label>
            <textarea className="field" rows={3} placeholder="Shipping times, unclear pricing, lack of follow-up, hard to get support..." value={customerComplaints} onChange={(e) => setCustomerComplaints(e.target.value)} />

            <button className="primary-btn" onClick={next} disabled={!biggestTimeSucks}>Continue →</button>
          </div>
        )}

        {/* ── SECTION 8: Competitors ───────────────────────────────────── */}
        {section === 8 && (
          <div className="fade-up">
            <SectionHeader n={8} total={TOTAL_SECTIONS} label="Competitive Landscape" />
            <h2 className="section-h2">Who else is in the arena?</h2>

            <Label>Competitor 1 (name + URL)</Label>
            <input className="field" placeholder="e.g. GarageLift Pro — garagelifpro.com.au" value={competitor1} onChange={(e) => setCompetitor1(e.target.value)} />

            <Label>Competitor 2 (name + URL)</Label>
            <input className="field" placeholder="Optional" value={competitor2} onChange={(e) => setCompetitor2(e.target.value)} />

            <Label>Competitor 3 (name + URL)</Label>
            <input className="field" placeholder="Optional" value={competitor3} onChange={(e) => setCompetitor3(e.target.value)} />

            <Label>What&rsquo;s your unfair advantage? Why do customers choose you?</Label>
            <textarea className="field" rows={3} placeholder="What do you do, offer, or stand for that competitors don&apos;t?" value={yourAdvantage} onChange={(e) => setYourAdvantage(e.target.value)} />

            <Label>What do they do better than you right now?</Label>
            <textarea className="field" rows={3} placeholder="Be honest. What do you lose deals to?" value={theirAdvantage} onChange={(e) => setTheirAdvantage(e.target.value)} />

            <button className="primary-btn" onClick={next} disabled={!competitor1 || !yourAdvantage}>Continue →</button>
          </div>
        )}

        {/* ── SECTION 9: Agent Mission ─────────────────────────────────── */}
        {section === 9 && (
          <div className="fade-up">
            <SectionHeader n={9} total={TOTAL_SECTIONS} label="Agent Mission" />
            <h2 className="section-h2">Why are you here? What do you actually need?</h2>

            <Label>What made you pull the trigger on AGE? What&rsquo;s the core problem?</Label>
            <textarea className="field" rows={4} placeholder="What's been keeping you up? What's the thing that finally made you commit to this?" value={whyAge} onChange={(e) => setWhyAge(e.target.value)} />

            <Label>What does success look like in 90 days? Be specific.</Label>
            <textarea className="field" rows={4} placeholder="e.g. 30 qualified leads/month from outreach agents. Email automation running without me. 40% of support questions handled automatically." value={successIn90Days} onChange={(e) => setSuccessIn90Days(e.target.value)} />

            <Label>Where should agents focus first? (select all that apply)</Label>
            <div className="card-grid single">
              {AGENT_PRIORITIES.map((p) => (
                <button key={p} className={`card ${agentPriorities.includes(p) ? "card-on" : ""}`} onClick={() => toggle(p, agentPriorities, setAgentPriorities)}>{agentPriorities.includes(p) ? "✓ " : ""}{p}</button>
              ))}
            </div>

            <Label>What are you most nervous about with this?</Label>
            <textarea className="field" rows={3} placeholder="Brand consistency, cost, privacy, team pushback, it not working..." value={worries} onChange={(e) => setWorries(e.target.value)} />

            <Label>Hard no&rsquo;s — what should agents never do?</Label>
            <textarea className="field" rows={3} placeholder="Things you absolutely don&apos;t want automated or touched. Any off-limits topics, actions, or audiences." value={hardNos} onChange={(e) => setHardNos(e.target.value)} />

            <button className="primary-btn" onClick={next} disabled={!whyAge || !successIn90Days}>Continue →</button>
          </div>
        )}

        {/* ── SECTION 10: Brand Voice ──────────────────────────────────── */}
        {section === 10 && (
          <div className="fade-up">
            <SectionHeader n={10} total={TOTAL_SECTIONS} label="Brand Voice" />
            <h2 className="section-h2">How do you sound? How should your agents sound?</h2>

            <Label>Describe your brand in exactly 3 words</Label>
            <input className="field" placeholder="e.g. Reliable. Direct. Honest." value={brandWords} onChange={(e) => setBrandWords(e.target.value)} />

            <Label>Describe your ideal customer the way you&rsquo;d describe them to a new employee</Label>
            <textarea className="field" rows={4} placeholder="Imagine you're briefing someone before they get on a call. Who are they, what do they care about, how should you talk to them?" value={icpVoice} onChange={(e) => setIcpVoice(e.target.value)} />

            <Label>Tone guide — how should agents communicate?</Label>
            <textarea className="field" rows={3} placeholder="e.g. Confident but not pushy. Expert-level product knowledge. Plain language, no jargon. Friendly but not chatty." value={toneDescription} onChange={(e) => setToneDescription(e.target.value)} />

            <Label>What brands or voices do you admire and why?</Label>
            <textarea className="field" rows={3} placeholder="Any company — inside or outside your industry — whose communication style you respect. What do they do right?" value={admiredBrands} onChange={(e) => setAdmiredBrands(e.target.value)} />

            <Label>Phrases, tones, or approaches to NEVER use</Label>
            <textarea className="field" rows={3} placeholder="e.g. Never use 'synergy', never be overly salesy, no exclamation marks in support emails..." value={phrasesToAvoid} onChange={(e) => setPhrasesToAvoid(e.target.value)} />

            <button className="primary-btn" onClick={next} disabled={!brandWords}>Continue →</button>
          </div>
        )}

        {/* ── SECTION 11: Data Dump + Contact ─────────────────────────── */}
        {section === 11 && (
          <div className="fade-up">
            <SectionHeader n={11} total={TOTAL_SECTIONS} label="Final Data Dump" />
            <h2 className="section-h2">Pretend we&rsquo;re on a call. Tell us everything.</h2>

            <Label>Open dump — anything and everything we should know</Label>
            <textarea
              className="field"
              rows={8}
              placeholder="The context that doesn't fit anywhere else. Backstory, weird edge cases, things you've never told a vendor before, what would change everything for this business, your biggest fear, your biggest opportunity. Nothing is irrelevant."
              value={dataDump}
              onChange={(e) => setDataDump(e.target.value)}
            />

            <Label>Any legal, compliance, or privacy considerations?</Label>
            <textarea className="field" rows={3} placeholder="e.g. HIPAA, GDPR, Australian Privacy Act, industry regulations, anything agents should be aware of..." value={complianceNotes} onChange={(e) => setComplianceNotes(e.target.value)} />

            <div style={{ borderTop: "1px solid #1e1c1e", marginTop: 12, paddingTop: 28, marginBottom: 4 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.55)", marginBottom: 20, letterSpacing: "0.08em" }}>YOUR CONTACT INFO</p>
            </div>

            <Label>Your name</Label>
            <input className="field" placeholder="Full name" value={contactName} onChange={(e) => setContactName(e.target.value)} />

            <Label>Email</Label>
            <input className="field" type="email" placeholder="your@email.com" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />

            <Label>Best phone / WhatsApp</Label>
            <input className="field" type="tel" placeholder="+61 4xx xxx xxx" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} />

            {error && (
              <p style={{ fontSize: 14, color: "#ef4444", marginBottom: 16, lineHeight: 1.5 }}>{error}</p>
            )}

            <button
              className="primary-btn"
              onClick={submit}
              disabled={submitting || !contactName || !contactEmail}
            >
              {submitting ? "Submitting..." : "Submit Onboarding →"}
            </button>

            <p style={{ marginTop: 12, fontSize: 12, color: "rgba(255,255,255,0.4)", textAlign: "center", lineHeight: 1.6 }}>
              Your data is encrypted and stored securely. Only your RTV team can access it.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

// ─── Helper components ────────────────────────────────────────────────────────
function SectionHeader({ n, total, label }: { n: number; total: number; label: string }) {
  return (
    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", color: "#f59e0b", marginBottom: 12 }}>
      SECTION {n} OF {total} — {label.toUpperCase()}
    </p>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.65)", marginBottom: 8, marginTop: 20, letterSpacing: "0.02em" }}>
      {children}
    </p>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; background: #080608; }
  body { font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; color: #fff; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

  .fade-up { animation: fadeUp 0.45s ease both; }

  .section-h1 {
    font-size: 36px; font-weight: 900; line-height: 1.1; letter-spacing: -0.03em;
    color: #fff; margin-bottom: 20px;
  }
  .section-h2 {
    font-size: 26px; font-weight: 900; line-height: 1.15; letter-spacing: -0.025em;
    color: #fff; margin-bottom: 4px;
  }
  .section-sub {
    font-size: 16px; color: rgba(255,255,255,0.72); line-height: 1.7; margin-bottom: 24px;
  }

  .field {
    background: #0e0c0e;
    border: 1.5px solid #1e1c1e;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
    font-family: inherit;
    padding: 14px 16px;
    width: 100%;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    display: block;
    margin-bottom: 4px;
  }
  .field:focus { border-color: #f59e0b; background: #121012; }
  .field::placeholder { color: #2e2c2e; }
  textarea.field { resize: vertical; min-height: 80px; }

  .primary-btn {
    background: #f59e0b;
    border: none; border-radius: 10px;
    color: #080608; cursor: pointer;
    font-size: 17px; font-weight: 900; font-family: inherit;
    padding: 17px; width: 100%;
    letter-spacing: -0.01em;
    transition: opacity 0.2s, transform 0.15s;
    margin-top: 28px; display: block;
  }
  .primary-btn:hover { opacity: 0.88; transform: translateY(-1px); }
  .primary-btn:disabled { opacity: 0.35; cursor: not-allowed; transform: none; }

  .back-btn {
    background: none; border: none;
    color: rgba(255,255,255,0.4); font-size: 13px;
    font-weight: 700; cursor: pointer;
    padding: 0 0 20px; text-align: left;
    font-family: inherit;
    transition: color 0.15s;
  }
  .back-btn:hover { color: rgba(255,255,255,0.7); }

  .card-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 8px; margin-bottom: 4px;
  }
  .card-grid.single { grid-template-columns: 1fr; }

  .card {
    background: #0c0a0c;
    border: 1.5px solid #1e1c1e; border-radius: 10px;
    color: rgba(255,255,255,0.65); font-size: 13px;
    font-family: inherit; font-weight: 600;
    padding: 14px 12px; cursor: pointer;
    text-align: left; line-height: 1.35;
    transition: border-color 0.2s, background 0.2s, color 0.2s;
  }
  .card:hover { border-color: rgba(245,158,11,0.3); background: #110e10; }
  .card-on {
    border-color: #f59e0b !important;
    background: rgba(245,158,11,0.07) !important;
    color: #fff !important;
  }

  @media (max-width: 520px) {
    .section-h1 { font-size: 28px !important; }
    .section-h2 { font-size: 22px !important; }
    .card-grid { grid-template-columns: 1fr; }
  }
`;
