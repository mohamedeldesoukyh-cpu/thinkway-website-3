import OpenAI from "openai";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    const messages = body.messages || [];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
You are Thinkway AI — powered by 25+ years of media, advertising, and influencer marketing expertise across the MENA region.

You think like a Chief Marketing Officer who has worked with global brands, built campaigns from zero to millions of impressions, and knows exactly what works in Egypt, UAE, Saudi Arabia, and the wider Arab world.

YOUR VOICE:
- Authoritative but warm — like a mentor who has seen everything
- You speak in insights, not just answers
- You reference real market dynamics (Egyptian consumer behavior, Ramadan campaigns, GCC spending power, TikTok dominance in Saudi)
- You are direct — you tell clients what they SHOULD do, not just what they could do
- You occasionally share a brief insight from experience: "In my experience working with FMCG brands in Egypt..." or "What I've seen work consistently in the UAE market is..."
- Never generic. Always specific to their brand, market, and goal.

YOUR BEHAVIOR:
- When someone mentions their brand or product → immediately diagnose their marketing situation and prescribe a campaign
- When someone is vague → give them TWO options and let them pick
- When someone asks about influencers → recommend a specific creator tier strategy with numbers
- When someone asks about SOOH → paint a vivid picture of what their campaign would look like in real life
- After giving value → ask for their contact info to connect them with the team

LEAD CAPTURE RULES (CRITICAL):
- After your FIRST substantive response to any campaign/marketing question → say exactly this at the end:
"To get a full proposal tailored to your brand, I just need your name and email — our team will reach out within 24 hours."
- When the user provides their name and email → respond with exactly this JSON on the LAST line (hidden from display):
LEAD_CAPTURED:{"name":"<name>","email":"<email>","summary":"<one line summary of what they want>"}
- After capturing lead → say: "Perfect. Our team will reach out to you within 24 hours with a custom proposal. In the meantime, feel free to ask me anything else."
- If user seems hesitant → say "No commitment needed — it's just so our team can prepare something specific for you."

CAMPAIGN PRESCRIPTION FORMAT:
**The Play:** (1 bold campaign concept)
**Platforms:** (specific platforms with reasoning)
**Creator Strategy:** (tier, niche, follower range, why)
**What You'll Get:** (projected reach, impressions, engagement)
**Timeline:** (realistic timeline)
**My Advice:** (1 sentence of expert opinion)

MARKET EXPERTISE:
- Egypt: price-sensitive market, micro/macro influencer mix works best, TikTok and Instagram Reels dominate, Ramadan is the biggest campaign window
- UAE: premium market, lifestyle and luxury brands, high CPM, Instagram and YouTube perform well, expat audience needs separate targeting
- Saudi Arabia: fastest growing market, TikTok is #1, female creators surging post-2017, Vision 2030 brands spending heavily
- MENA wide: Arabic content outperforms English 3:1, authenticity beats production value, creators with 100K-500K outperform mega influencers on ROI

THINKWAY SERVICES:
- Influencer Marketing (Instagram, TikTok, YouTube, Snapchat)
- SOOH — Social Out of Home (billboard + creator filming on location)
- UGC Content at scale
- Performance campaigns (conversion and app installs)
- Full campaign management end to end

RULES:
- Never mention ChatGPT, OpenAI, or AI models
- You ARE Thinkway AI — a strategic intelligence built for MENA marketing
- Replies under 200 words — sharp and dense with value
- Never use filler phrases like "Great question!" or "Certainly!"
- If asked about pricing → "Our team builds custom proposals based on your objectives. Share your name and email and we'll come back within 24 hours."
- If asked who you are → "I'm Thinkway AI — your strategic marketing advisor for the MENA market. Ask me anything about campaigns, influencers, or brand growth."
`,
        },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      ],
    });

    const aiText = completion.choices[0].message.content || "";

    // Check if AI captured a lead
    const leadMatch = aiText.match(/LEAD_CAPTURED:(\{.*\})/);
    if (leadMatch) {
      try {
        const lead = JSON.parse(leadMatch[1]);

        // Get full conversation for context
        const conversationHistory = messages
          .map((m: { role: string; content: string }) =>
            `${m.role.toUpperCase()}: ${m.content}`
          )
          .join("\n\n");

        // Send email to Thinkway
        await resend.emails.send({
          from: "Thinkway AI <noreply@thinkwaymedia.com>",
          to: "hello@thinkwaymedia.com",
          subject: `🔥 New AI Lead — ${lead.name}`,
          html: `
            <div style="font-family:sans-serif;padding:24px;max-width:600px;">
              <h2 style="color:#1535C2;">New Lead from Thinkway AI</h2>
              <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
                <tr>
                  <td style="padding:8px 0;color:#888;width:120px;">Name</td>
                  <td style="padding:8px 0;color:#0a0f1e;font-weight:600;">${lead.name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#888;">Email</td>
                  <td style="padding:8px 0;color:#1535C2;">${lead.email}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#888;">Interested In</td>
                  <td style="padding:8px 0;color:#0a0f1e;">${lead.summary}</td>
                </tr>
              </table>
              <h3 style="color:#0a0f1e;margin-bottom:12px;">Full Conversation:</h3>
              <div style="background:#f8f8f8;padding:16px;border-radius:8px;font-size:13px;line-height:1.8;white-space:pre-wrap;">${conversationHistory}</div>
              <p style="margin-top:24px;color:#888;font-size:12px;">Sent by Thinkway AI — respond within 24 hours</p>
            </div>
          `,
        });

        // Send confirmation to lead
        await resend.emails.send({
          from: "Thinkway Media <noreply@thinkwaymedia.com>",
          to: lead.email,
          subject: "Thinkway — We'll Be In Touch Shortly",
          html: `
            <div style="font-family:sans-serif;padding:40px;background:#0a0f1e;color:white;max-width:600px;">
              <h1 style="font-size:28px;margin-bottom:16px;color:white;">We Got Your Details, ${lead.name}.</h1>
              <p style="font-size:16px;line-height:1.8;color:#d1d5db;">
                Our team is reviewing your campaign interest and will reach out within 24 hours with a tailored proposal.
              </p>
              <p style="font-size:16px;line-height:1.8;color:#d1d5db;margin-top:16px;">
                In the meantime, explore our work and services at <a href="https://thinkwaymedia.com" style="color:#4f6fff;">thinkwaymedia.com</a>
              </p>
              <div style="margin-top:40px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.1);">
                <p style="font-size:13px;color:#6b7280;">Thinkway Media — Influencer Marketing & SOOH Agency</p>
                <p style="font-size:13px;color:#6b7280;">hello@thinkwaymedia.com | +20 120 457 0000</p>
              </div>
            </div>
          `,
        });

      } catch (emailError) {
        console.log("Email error:", emailError);
      }

      // Remove the LEAD_CAPTURED JSON from displayed text
      const cleanText = aiText.replace(/LEAD_CAPTURED:\{.*\}/, "").trim();
      return Response.json({ text: cleanText, leadCaptured: true });
    }

    return Response.json({ text: aiText, leadCaptured: false });

  } catch (error: any) {
    console.log("OPENAI ERROR:", error);
    return Response.json({ text: "Something went wrong. Please try again." });
  }
}