import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { brand, email, budget, audience, timeline, platforms, goals } = body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const text = [
    `Brand: ${brand}`,
    `Contact Email: ${email}`,
    `Budget: ${budget}`,
    `Platforms: ${platforms?.join(", ") || "—"}`,
    `Goals: ${goals?.join(", ") || "—"}`,
    `Target Audience: ${audience}`,
    `Timeline: ${timeline}`,
  ].join("\n");

  await transporter.sendMail({
    from: process.env.SMTP_FROM || "no-reply@thinkwaymedia.com",
    to: "hello@thinkwaymedia.com",
    subject: `New Campaign Brief — ${brand}`,
    text,
  });

  return NextResponse.json({ ok: true });
}
