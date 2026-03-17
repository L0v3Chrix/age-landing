import { NextRequest, NextResponse } from "next/server";
import { getRedis } from "@/lib/redis";

const TTL_SECONDS = 60 * 60 * 24 * 90; // 90 days

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function field(label: string, value: unknown): string {
  if (!value || (Array.isArray(value) && value.length === 0)) return "";
  const v = Array.isArray(value) ? value.join(", ") : String(value);
  if (!v.trim()) return "";
  return `**${label}**\n${v}\n`;
}

async function postToDiscord(id: string, body: Record<string, unknown>) {
  const webhookUrl = process.env.DISCORD_ONBOARDING_WEBHOOK;
  if (!webhookUrl) return;

  const {
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
    submittedAt,
  } = body as Record<string, string | string[]>;

  const embeds = [
    {
      title: `🥚 New Onboarding — ${businessName}`,
      url: typeof websiteUrl === "string" ? websiteUrl : undefined,
      color: 0xf59e0b,
      description: `**Submission ID:** \`${id}\`\n**Submitted:** ${submittedAt}\n**Contact:** ${contactName} · ${contactEmail} · ${contactPhone}`,
      fields: [],
      footer: { text: "hatchyouragent.com/onboarding" },
    },
    {
      title: "📦 Products & Business",
      color: 0x1a1a1a,
      description: [
        field("Industry", industry),
        field("Years Operating", yearsOperating),
        field("Product Range", productRange),
        field("Top Sellers", topSellers),
        field("Avg Order Value", avgOrderValue),
        field("Gross Margin", grossMargin),
      ].filter(Boolean).join("\n") || "—",
    },
    {
      title: "👤 Customers & Numbers",
      color: 0x1a1a1a,
      description: [
        field("Ideal Customer", icpDescription),
        field("Geography", geography),
        field("Acquisition Channels", acquisitionChannels),
        field("Buying Objections", buyingObjections),
        field("Revenue Range", revenueRange),
        field("Monthly Visitors", visitorRange),
        field("Email List", emailListRange),
        field("Ad Spend", adSpendRange),
      ].filter(Boolean).join("\n") || "—",
    },
    {
      title: "🛠️ Tech Stack & Marketing",
      color: 0x1a1a1a,
      description: [
        field("Website Platform", websitePlatform),
        field("Email Platform", emailPlatform),
        field("CRM", crm),
        field("Ad Channels", adChannels),
        field("Other Tools", otherTools),
        field("Working Channels", workingChannels),
        field("Failed Channels", failedChannels),
        field("Follow-Up Process", followUpProcess),
        field("Missing Asset", missingAsset),
      ].filter(Boolean).join("\n") || "—",
    },
    {
      title: "⚙️ Operations & Competitors",
      color: 0x1a1a1a,
      description: [
        field("Biggest Time Sucks", biggestTimeSucks),
        field("Tasks to Automate", manualTasksToAutomate),
        field("Team Structure", teamStructure),
        field("Customer Complaints", customerComplaints),
        field("Competitor 1", competitor1),
        field("Competitor 2", competitor2),
        field("Competitor 3", competitor3),
        field("Your Advantage", yourAdvantage),
        field("Their Advantage", theirAdvantage),
      ].filter(Boolean).join("\n") || "—",
    },
    {
      title: "🎯 Agent Mission & Brand Voice",
      color: 0x1a1a1a,
      description: [
        field("Why AGE", whyAge),
        field("90-Day Success", successIn90Days),
        field("Agent Priorities", agentPriorities),
        field("Worries", worries),
        field("Hard No's", hardNos),
        field("Brand in 3 Words", brandWords),
        field("ICP Voice", icpVoice),
        field("Tone Guide", toneDescription),
        field("Admired Brands", admiredBrands),
        field("Phrases to Avoid", phrasesToAvoid),
      ].filter(Boolean).join("\n") || "—",
    },
    {
      title: "🧠 Full Data Dump",
      color: 0x1a1a1a,
      description: [
        field("Open Dump", dataDump),
        field("Compliance Notes", complianceNotes),
      ].filter(Boolean).join("\n") || "—",
    },
  ];

  // Discord embed description max is 4096 chars — truncate safely
  for (const embed of embeds) {
    if (embed.description && embed.description.length > 4000) {
      embed.description = embed.description.slice(0, 3990) + "\n…[truncated]";
    }
  }

  // Post each embed (Discord max 10 embeds/message, split into 2 calls)
  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "AGE Onboarding",
      avatar_url: "https://hatchyouragent.com/assets/orb-graphic.png",
      embeds: embeds.slice(0, 4),
    }),
  });

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "AGE Onboarding",
      avatar_url: "https://hatchyouragent.com/assets/orb-graphic.png",
      embeds: embeds.slice(4),
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { businessName, submittedAt } = body;

    const ts = Date.now();
    const id = `OB-${ts}-${slug(businessName || "unknown")}`;
    const key = `onboarding:${id}`;

    // Save to KV (with fallback — KV may not be provisioned)
    try {
      const redis = await getRedis();
      await redis.set(key, JSON.stringify({ id, ...body }), { EX: TTL_SECONDS });
      await redis.lPush("onboarding:index", JSON.stringify({
        id,
        businessName: businessName || "Unknown",
        contactEmail: body.contactEmail || "",
        submittedAt: submittedAt || new Date().toISOString(),
      }));
    } catch (kvErr) {
      console.warn("KV save failed (non-fatal):", kvErr);
    }

    // Always post to Discord
    await postToDiscord(id, body);

    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error("save-onboarding error:", err);
    return NextResponse.json({ success: false, error: "Failed to save" }, { status: 500 });
  }
}
