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

  const webhookUrl = process.env.WEBHOOK_URL;
  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, phone, email }),
    });
  }

  return NextResponse.json({ success: true });
}
