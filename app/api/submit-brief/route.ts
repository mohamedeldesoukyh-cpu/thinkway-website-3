import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { brand, email, budget, audience, timeline, platforms, goals } = body;

  const html = `
    <h2 style="font-family:sans-serif;color:#0a0f1e;">New Campaign Brief — ${brand}</h2>
    <p><strong>Client Email:</strong> ${email}</p>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;">
      <tr><td style="padding:8px 16px 8px 0;color:#888;width:160px;">Brand</td><td style="padding:8px 0;color:#0a0f1e;">${brand}</td></tr>
      <tr><td style="padding:8px 16px 8px 0;color:#888;">Contact Email</td><td style="padding:8px 0;color:#0a0f1e;">${email}</td></tr>
      <tr><td style="padding:8px 16px 8px 0;color:#888;">Budget</td><td style="padding:8px 0;color:#0a0f1e;">${budget || "—"}</td></tr>
      <tr><td style="padding:8px 16px 8px 0;color:#888;">Platforms</td><td style="padding:8px 0;color:#0a0f1e;">${platforms?.join(", ") || "—"}</td></tr>
      <tr><td style="padding:8px 16px 8px 0;color:#888;">Goals</td><td style="padding:8px 0;color:#0a0f1e;">${goals?.join(", ") || "—"}</td></tr>
      <tr><td style="padding:8px 16px 8px 0;color:#888;">Target Audience</td><td style="padding:8px 0;color:#0a0f1e;">${audience || "—"}</td></tr>
      <tr><td style="padding:8px 16px 8px 0;color:#888;">Timeline</td><td style="padding:8px 0;color:#0a0f1e;">${timeline || "—"}</td></tr>
    </table>
  `;

  const { error } = await resend.emails.send({
  from: "Thinkway Media <noreply@thinkwaymedia.com>",
    to: "hello@thinkwaymedia.com",
    replyTo: email,
    subject: `New Campaign Inquiry from ${brand}`,
    html,
  });

  if (error) {
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
