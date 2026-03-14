interface GenesisInput {
  firstName: string;
  lastName: string;
  businessName: string;
  websiteUrl: string | null;
  businessType: string;
  teamSize: string;
  problem: string;
  triedBefore: string[];
  vision: string;
  research: {
    headline: string;
    subheadline: string;
    aboutContent: string;
    story: string;
    founder: string;
    reviews: string;
    press: string;
    competitors: string;
  };
}

export function buildGenesisPrompt(input: GenesisInput): { system: string; user: string } {
  const system = `You are an elite business intelligence analyst and AI systems architect working for Raize The Vibe, an AI-first agency. Your job is to study a business, find their story, diagnose their real problem, then architect a custom AI agent fleet that solves it — and present it all as if you've been studying them for weeks.

You write with authority, warmth, and specificity. No generic copy. No corporate voice. Every line should make the reader feel: "They actually know me."`;

  const user = `=== INTEL FILE: ${input.businessName} ===

LEAD INFO:
Name: ${input.firstName} ${input.lastName}
Business: ${input.businessName}
Website: ${input.websiteUrl || "No website provided"}
Type: ${input.businessType}
Team Size: ${input.teamSize}

THEIR WORDS:
Biggest problem: "${input.problem}"
What they've tried: ${input.triedBefore.join(", ")}
What winning looks like: "${input.vision}"

RESEARCH BUNDLE:
Website headline: ${input.research.headline || "Not found"}
Website subheadline: ${input.research.subheadline || "Not found"}
About content: ${input.research.aboutContent || "Not found"}
Story/history found: ${input.research.story || "Not found"}
Founder info: ${input.research.founder || "Not found"}
Reviews found: ${input.research.reviews || "Not found"}
Press mentions: ${input.research.press || "Not found"}
Competitors: ${input.research.competitors || "Not found"}

YOUR TASK:
Produce a personalized AGE Operator Dossier for ${input.firstName}. This is not a generic pitch — it is a specific diagnosis and blueprint for THIS business.

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
  ],

  "agentActivityLog": [
    { "time": "2:07 AM", "agent": "The [Name]", "action": "specific action at their business", "status": "done" },
    { "time": "7:15 AM", "agent": "The [Name]", "action": "specific action", "status": "done" },
    { "time": "9:41 AM", "agent": "The [Name]", "action": "specific action", "status": "done" },
    { "time": "11:03 AM", "agent": "The [Name]", "action": "specific action", "status": "done" },
    { "time": "1:52 PM", "agent": "The [Name]", "action": "specific action", "status": "done" },
    { "time": "Now", "agent": "You", "action": "Reading this. Your fleet is waiting.", "status": "you" }
  ],

  "before": [
    "5-6 bullets: what life looks like without the fleet (specific to their problem answers)"
  ],

  "after": [
    "5-6 bullets: what life looks like after (mirror the before, flip to positive)"
  ],

  "closingHeadline": "1-2 lines. Emotional. References something from their story or vision.",
  "closingBody": "2-3 sentences. Warm, direct. Ties their vision statement back to what we just built. Ends with a forward-looking line.",

  "ctaText": "Personalized CTA — uses their first name and business name. E.g. 'Let's Build This for ${input.firstName} & ${input.businessName} →'"
}

RULES:
- Every field must be specific to THIS person and business. No generic filler.
- Return 3-5 agents total, each designed for their specific situation.
- The agents should have names that fit their industry (like "The Night Owl" for a bar, "The Fellowship" for recovery community — that level of specificity)
- The activity log should have 5-6 entries plus the final "You" entry, and feel like a real week at their specific business
- Research findings that they didn't mention = highest-value content (the "wow" moment)
- Tone: confident, warm, intelligent. Not salesy. Not corporate. Like a brilliant friend who happens to be an AI systems architect.
- If research is thin, extrapolate intelligently from business type + problem + vision. Never say "I couldn't find much on you."

Return ONLY valid JSON. No other text. No markdown code fences.`;

  return { system, user };
}
