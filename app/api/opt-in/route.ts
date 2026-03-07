import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, phone, email } = body as {
    firstName: string;
    phone: string;
    email?: string;
  };

  if (!firstName || !phone) {
    return NextResponse.json(
      { error: "firstName and phone are required" },
      { status: 400 }
    );
  }

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    dateStyle: "short",
    timeStyle: "short",
  });

  // Fire Discord webhook instantly
  const discordWebhook = process.env.DISCORD_WEBHOOK_URL;
  if (discordWebhook) {
    await fetch(discordWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `<@1477450523509784587> 🔥 **NEW AGE LEAD**\n**Name:** ${firstName}\n**Phone:** ${phone}\n**Email:** ${email || "not provided"}\n**Time:** ${timestamp} CT`,
      }),
    });
  }

  console.log(`[LEAD] ${timestamp} | ${firstName} | ${phone} | ${email || "no email"}`);

  return NextResponse.json({ success: true });
}
