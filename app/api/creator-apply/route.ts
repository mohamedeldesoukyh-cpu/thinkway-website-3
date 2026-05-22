import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, social, followers, message } = body;

    // EMAIL TO THINKWAY
    await resend.emails.send({
      from: "Thinkway Media <noreply@thinkwaymedia.com>",
      to: "hello@thinkwaymedia.com",
      replyTo: email,
      subject: `New Creator Application — ${name}`,
      html: `
        <div style="font-family:sans-serif;padding:20px;">
          <h2>New Creator Application</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Social:</strong> ${social}</p>
          <p><strong>Followers:</strong> ${followers}</p>

          <br/>

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    // CONFIRMATION EMAIL TO APPLICANT
    await resend.emails.send({
      from: "Thinkway Media <noreply@thinkwaymedia.com>",
      to: email,
      subject: "Your THINKWAY Creator Application Was Received",
      html: `
        <div style="font-family:sans-serif;padding:40px;background:#0a0f1e;color:white;">
          
          <h1 style="font-size:32px;margin-bottom:20px;">
            Application Submitted Successfully
          </h1>

          <p style="font-size:16px;line-height:1.8;color:#d1d5db;">
            Thank you for applying to the THINKWAY Creator Program.
          </p>

          <p style="font-size:16px;line-height:1.8;color:#d1d5db;">
            Our creator management team is currently reviewing your application.
            If your profile matches our upcoming campaigns and creator initiatives,
            we will contact you shortly.
          </p>

          <div style="margin-top:40px;">
            <p style="font-size:14px;color:#9ca3af;">
              THINKWAY Media
              <br/>
              Influencer Marketing & Creator Growth
            </p>
          </div>

        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
