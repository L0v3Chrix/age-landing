import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { runResearch } from "@/lib/research";
import { buildGenesisPrompt } from "@/lib/genesis-prompt";
import { storeDossier, type DossierContent } from "@/lib/kv";

export const maxDuration = 60;

interface RequestBody {
  businessName: string;
  websiteUrl: string | null;
  businessType: string;
  problem: string;
  teamSize: string;
  triedBefore: string[];
  vision: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestBody;

    const { businessName, websiteUrl, businessType, problem, teamSize, triedBefore, vision, firstName, lastName, email, phone } = body;

    if (!businessName || !firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Fire Discord webhook (non-blocking)
    const discordWebhook = process.env.DISCORD_WEBHOOK_URL;
    if (discordWebhook) {
      fetch(discordWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `<@1477450523509784587> \u{1F4CB} **NEW DOSSIER REQUEST**\n**Name:** ${firstName} ${lastName}\n**Business:** ${businessName}\n**Email:** ${email}\n**Phone:** ${phone}\n**Type:** ${businessType}\n**Problem:** ${problem}`,
        }),
      }).catch(() => {});
    }

    // Phase 1: Research
    const research = await runResearch(businessName, websiteUrl, businessType);

    // Phase 2: Generate dossier via Claude
    const prompt = buildGenesisPrompt({
      firstName,
      lastName,
      businessName,
      websiteUrl,
      businessType,
      teamSize,
      problem,
      triedBefore,
      vision,
      research,
    });

    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY!,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 4096,
        messages: [
          { role: "user", content: prompt.user },
        ],
        system: prompt.system,
      }),
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text();
      console.error("[DOSSIER] Claude API error:", anthropicRes.status, errText);
      return NextResponse.json({ error: "AI generation failed" }, { status: 500 });
    }

    const anthropicData = await anthropicRes.json();
    const rawContent = anthropicData.content?.[0]?.text || "";

    let dossier: DossierContent;
    try {
      dossier = JSON.parse(rawContent);
    } catch {
      // Try extracting JSON from potential markdown fences
      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        console.error("[DOSSIER] Failed to parse Claude response:", rawContent.slice(0, 500));
        return NextResponse.json({ error: "Failed to parse dossier" }, { status: 500 });
      }
      dossier = JSON.parse(jsonMatch[0]);
    }

    // Phase 3: Store in KV
    const token = nanoid(12);
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

    await storeDossier({
      token,
      lead: { businessName, websiteUrl, businessType, problem, teamSize, triedBefore, vision, firstName, lastName, email, phone },
      research,
      dossier,
      createdAt: now.toISOString(),
      expiresAt: expiresAt.toISOString(),
    });

    return NextResponse.json({ token, url: `/d/${token}` });
  } catch (err) {
    console.error("[DOSSIER] Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
