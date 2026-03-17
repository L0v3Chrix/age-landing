import { NextRequest, NextResponse } from "next/server";
import { getRedis } from "@/lib/redis";

const TTL_SECONDS = 60 * 60 * 24 * 90; // 90 days

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { businessName, submittedAt } = body;

    const ts = Date.now();
    const id = `OB-${ts}-${slug(businessName || "unknown")}`;
    const key = `onboarding:${id}`;

    const redis = await getRedis();
    await redis.set(key, JSON.stringify({ id, ...body }), { EX: TTL_SECONDS });

    // Also write a lightweight index entry so we can list all submissions
    await redis.lPush("onboarding:index", JSON.stringify({
      id,
      businessName: businessName || "Unknown",
      contactEmail: body.contactEmail || "",
      submittedAt: submittedAt || new Date().toISOString(),
    }));

    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error("save-onboarding error:", err);
    return NextResponse.json({ success: false, error: "Failed to save" }, { status: 500 });
  }
}
