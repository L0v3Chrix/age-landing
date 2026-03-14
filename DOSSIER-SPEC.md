# AGE Operator Dossier — Full Build Spec
_Written: 2026-03-14 | Status: Ready for implementation_

---

## What We're Building

Replace the current 2-field `/apply` form with a multi-step quiz that collects enough intel to run an "iSpy investigation" on the lead, then uses the AGE Genesis prompt framework to produce a fully personalized **Lite Operator Dossier** — a private page that shows them their custom agent fleet, their business diagnosis, and positions us as the solution.

**The standard is the Steve Williams / Bennu Coffee page.** That quality. That depth. Generated automatically.

---

## The Flow

```
Offer Page CTA → /apply (Quiz) → /api/generate-dossier → Loading Screen → /d/[token] (Dossier)
```

---

## 1. Quiz — `/apply` (replaces current 2-field form)

### Design
- Same dark aesthetic (`#080608` background, amber `#f59e0b` accents)
- One question per screen, full-page focus
- Animated progress bar at top
- Smooth fadeUp transitions between steps
- "Back" button on every step after step 1
- Mobile-first

### Steps (in order)

**Step 1 — Hook**
> "Before we show you what's possible, let us do our homework."
> CTA: "Let's do this →"
_(No question, just primes them for the experience. Sets expectation: "we're going to research you.")_

**Step 2 — Business Name**
> "What's the name of your business?"
- Text input, free-form

**Step 3 — Website**
> "What's your website?"
- URL input, auto-prefix https://
- "No website yet" checkbox

**Step 4 — Business Type**
> "What best describes your business?"
- Grid of cards (tap to select):
  - Local Service Business
  - Professional Services / Consulting
  - E-commerce / Product
  - Real Estate
  - Healthcare / Wellness
  - Hospitality / Food & Beverage
  - Trades / Construction
  - Something else

**Step 5 — The Problem**
> "What's eating at you most right now?"
- Cards (tap to select):
  - "I'm bleeding time on things that should be automated"
  - "My leads are falling through the cracks"
  - "I can't scale — everything still needs me"
  - "My follow-up is inconsistent or nonexistent"
  - "I don't have visibility into what's working"
  - "All of the above, honestly"

**Step 6 — Team Size**
> "How many people are in your operation?"
- Cards:
  - Just me
  - 2–5
  - 6–15
  - 16–50
  - 50+

**Step 7 — What You've Tried**
> "What have you already thrown at this problem?"
- Multi-select cards:
  - Hired a VA or assistant
  - Tried Zapier / Make / automation tools
  - Worked with a marketing agency
  - Bought courses or coaching
  - Hired someone full-time
  - Nothing yet — just grinding

**Step 8 — The Vision**
> "If we did our job perfectly, what would your life look like in 90 days?"
- Text area, free-form (optional but seeded with placeholder)

**Step 9 — Contact Gate**
> "Now we go to work. Where should we send your dossier?"
- First Name (required)
- Last Name (required)
- Email (required)
- Phone (required, tel input)

Submit button: **"Build My Dossier →"**

Small print: _"We'll research your business and build your custom operator blueprint. Ready in under 2 minutes."_

---

## 2. Loading Screen — `/apply` (post-submit state)

After submit, stay on `/apply` but show a loading state:

```
[Live pulsing dot] RESEARCHING [BUSINESS NAME]...

Progress log (appears line by line, staggered 2s apart):
✓ Found your website
✓ Pulling your business history  
✓ Identifying your market position
✓ Spotting gaps your competitors missed
✓ Designing your first agent
[pulsing] Building your dossier...
```

- Fake log items appear on a stagger while real API call runs in background
- Redirect to `/d/[token]` when generation completes
- Max wait: 45 seconds. If timeout, show error with "We'll email you when it's ready" option.

---

## 3. API Route — `/api/generate-dossier`

### Input
```typescript
{
  businessName: string
  websiteUrl: string | null
  businessType: string
  problem: string
  teamSize: string
  triedBefore: string[]
  vision: string
  firstName: string
  lastName: string
  email: string
  phone: string
}
```

### Pipeline

**Phase 1 — Research (parallel where possible)**
1. Scrape their website (fetch HTML, extract: headline, subheadline, CTAs, about content, any social links)
2. Brave Search queries (rate-limited, 1.1s between):
   - `"[businessName]" [city from website or context] history story`
   - `"[businessName]" reviews OR testimonials`
   - `"[businessName]" founder OR owner`
   - `"[businessName]" news OR press OR featured`
   - `[businessName] [businessType] competitors [city]`
3. Parse results into research bundle: `{ story, founder, reviews, press, competitors }`

**Phase 2 — AGE Genesis Prompt (Claude claude-3-5-sonnet-20241022 via direct fetch)**

The prompt is the "iSpy + AGE Genesis framework" — see Section 4 below.

**Phase 3 — Store & Return**
- Generate token: `nanoid(12)` (e.g. `V3kXpQ8mNjR2`)
- Store in **Vercel KV** (key: `dossier:V3kXpQ8mNjR2`):
  ```json
  {
    "token": "V3kXpQ8mNjR2",
    "lead": { ...all quiz fields },
    "research": { ...scraped bundle },
    "dossier": { ...AGE Genesis output },
    "createdAt": "ISO timestamp",
    "expiresAt": "ISO timestamp (14 days)",
  }
  ```
- KV TTL: 14 days (1209600 seconds)
- Return `{ token, url: "/d/V3kXpQ8mNjR2" }`

### Dependencies to add
```
@vercel/kv
@anthropic-ai/sdk  (or use direct fetch like fun-fun-aff does)
nanoid
```

---

## 4. The AGE Genesis Prompt Framework

This is the core IP. The prompt takes all research and quiz answers and produces a structured JSON dossier.

```
SYSTEM: You are an elite business intelligence analyst and AI systems architect working for Raize The Vibe, an AI-first agency. Your job is to study a business, find their story, diagnose their real problem, then architect a custom AI agent fleet that solves it — and present it all as if you've been studying them for weeks.

You write with authority, warmth, and specificity. No generic copy. No corporate voice. Every line should make the reader feel: "They actually know me."

USER PROMPT:

=== INTEL FILE: [BUSINESS NAME] ===

LEAD INFO:
Name: [firstName] [lastName]
Business: [businessName]
Website: [websiteUrl]
Type: [businessType]
Team Size: [teamSize]

THEIR WORDS:
Biggest problem: "[problem]"
What they've tried: [triedBefore list]
What winning looks like: "[vision]"

RESEARCH BUNDLE:
Website headline: [scraped headline]
Website subheadline: [scraped subheadline]
About content: [scraped about text, max 500 chars]
Story/history found: [research.story]
Founder info: [research.founder]
Reviews found: [research.reviews]
Press mentions: [research.press]
Competitors: [research.competitors]

YOUR TASK:
Produce a personalized AGE Operator Dossier for [firstName]. This is not a generic pitch — it is a specific diagnosis and blueprint for THIS business.

Return structured JSON:

{
  "heroHeadline": "A 1-2 line headline written specifically for their business situation. Make it feel like you've been watching them.",
  "heroSubheadline": "1 sentence that names their exact problem and hints at the solution.",
  
  "introBody": "2-3 paragraphs that demonstrate we did our homework. Reference specific things we found in the research — their story, their history, something they probably forgot we'd find. End with: 'This isn't a discovery problem. It's a deployment problem.'",
  
  "diagnosis": {
    "headline": "A 1-line diagnosis of their specific bottleneck",
    "body": "2 paragraphs. First: here is why you're stuck (name the real root cause, not the symptom they named). Second: here is what's actually available to you if you had the right system."
  },
  
  "agents": [
    {
      "emoji": "relevant emoji",
      "name": "The [Something] — a named agent with personality",
      "role": "1 sentence: what this agent does 24/7",
      "detail": "2-3 sentences: specific to their business. What it watches for, what it does, what it produces. Make it feel real."
    }
    // 3-5 agents total, each designed for their specific situation
  ],
  
  "agentActivityLog": [
    // 5-6 fake-but-realistic log entries showing the agents at work for THIS specific business
    // Format: { time: "2:07 AM", agent: "The [Name]", action: "specific action at their business", status: "done" | "live" }
    // Last entry: { time: "Now", agent: "You", action: "Reading this. Your fleet is waiting.", status: "you" }
  ],
  
  "before": [
    // 5-6 bullets: what life looks like without the fleet (specific to their problem answers)
  ],
  
  "after": [
    // 5-6 bullets: what life looks like after (mirror the before, flip to positive)
  ],
  
  "closingHeadline": "1-2 lines. Emotional. References something from their story or vision.",
  "closingBody": "2-3 sentences. Warm, direct. Ties their vision statement back to what we just built. Ends with a forward-looking line.",
  
  "ctaText": "Personalized CTA — uses their first name and business name. E.g. 'Let's Build This for [firstName] & [businessName] →'"
}

RULES:
- Every field must be specific to THIS person and business. No generic filler.
- The agents should have names that fit their industry (like "The Night Owl" for a bar, "The Fellowship" for recovery community — that level of specificity)  
- The activity log should feel like a real week at their specific business
- Research findings that they didn't mention = highest-value content (the "wow" moment)
- Tone: confident, warm, intelligent. Not salesy. Not corporate. Like a brilliant friend who happens to be an AI systems architect.
- If research is thin, extrapolate intelligently from business type + problem + vision. Never say "I couldn't find much on you."

Return ONLY valid JSON. No other text.
```

---

## 5. Dossier Page — `/d/[token]`

### On Load
1. Fetch from KV by token
2. If not found or expired → show expired screen with new CTA
3. If found → render full dossier

### Expiry Screen
```
[AGE wordmark]

"This dossier has expired."

Dossiers are live for 14 days after generation.
If you'd like a fresh one, take the quiz again.

[CTA: Build My Dossier →] → /apply
```

### Dossier Layout (matches Steve/Bennu design system exactly)

```
NAV: "AGE" wordmark left | "BUILT FOR [FIRSTNAME] [LASTNAME] · [BUSINESSNAME]" right (with live dot)

HERO: 
  - Dark gradient hero (no image needed, use CSS gradient)
  - dossier.heroHeadline (large, bold)
  - dossier.heroSubheadline
  - "AGENT GENESIS ENGINE" label

INTRO SECTION:
  - Lead identity card (initials avatar, full name, business, type, team size)
  - dossier.introBody

DIAGNOSIS CARD:
  - dossier.diagnosis.headline
  - dossier.diagnosis.body

AGENT LIVE FEED:
  - "AGENT ACTIVITY LOG — [BUSINESSNAME]" header with live dot
  - dossier.agentActivityLog rendered as feed table (like Steve page)

AGENT ROSTER:
  - "THE AGENTS WE'D BUILD FOR [BUSINESSNAME]" header
  - dossier.agents rendered as list with emoji + name + role + detail

BEFORE / AFTER:
  - Two-column grid
  - dossier.before / dossier.after

CLOSE:
  - dossier.closingHeadline (large)
  - dossier.closingBody
  - CTA button: dossier.ctaText → /offer (or /apply again if they want to book)

FOOTER:
  - "Built for [firstName] [lastName] · [businessName] · Generated [date] · Expires [expiryDate]"
  - PDF download button

PDF BUTTON:
  - Fixed bottom-right corner OR in close section
  - Label: "Download as PDF"
  - On click: window.print()
  - Include a <style> block for @media print that hides nav, CTA, and PDF button itself
```

---

## 6. Offer Page CTA Update

Change the current "Begin My Genesis →" CTA on `/offer` to:
```
"Get My Operator Dossier →"  →  /apply
```

Also update the subtitle under the CTA from "A real conversation to see if we're a fit" to:
```
"We'll research your business and build your custom agent blueprint. Free. No call required."
```

---

## 7. Env Vars Needed

Add to `.env.local` and Vercel dashboard:
```
ANTHROPIC_API_KEY=sk-ant-...
BRAVE_API_KEY=...           (already exists in fun-fun-aff — get same key)
KV_REST_API_URL=...         (from Vercel KV dashboard)
KV_REST_API_TOKEN=...       (from Vercel KV dashboard)
```

---

## 8. File Structure

```
app/
  apply/
    page.tsx          ← REPLACE: multi-step quiz + loading state
  d/
    [token]/
      page.tsx        ← NEW: dossier viewer (server component, fetch from KV)
  api/
    generate-dossier/
      route.ts        ← NEW: research + generate + store pipeline
    opt-in/
      route.ts        ← KEEP as-is (still useful for direct opt-ins)
lib/
  research.ts         ← NEW: website scraper + Brave search (port from fun-fun-aff)
  genesis-prompt.ts   ← NEW: AGE Genesis prompt builder
  kv.ts               ← NEW: KV store/fetch helpers
```

---

## 9. Quality Bar

The output dossier must meet the Steve/Bennu standard:
- Names custom agents that feel real and specific (not "Agent 1")
- References actual details found in research (the "wow" moment)
- Diagnosis names the ROOT CAUSE not just the symptom
- Activity log feels like a real week at THEIR business
- Closing line references their own story or vision back to them

If the research comes back thin, use the business type + problem + vision to extrapolate intelligently. The page should never feel generic.

---

## 10. Self-Destruct Notes

- TTL handled by Vercel KV (set `EX 1209600` on store)
- Page checks `expiresAt` on load, shows expired screen if past
- No cron needed — lazy expiry on read is sufficient
- Future enhancement: email them a "your dossier expires in 3 days" reminder

---

_Spec complete. Ready to build._
