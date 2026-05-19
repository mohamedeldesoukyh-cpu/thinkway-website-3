import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const body = await req.json();

const { name, email, social, followers, message } = body;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const social = formData.get("social");
    const followers = formData.get("followers");
    const message = formData.get("message");

    const html = `
      <div style="font-family:sans-serif;padding:20px;">
        <h2>New Creator Program Application</h2>

        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px;font-weight:bold;">Full Name</td>
            <td style="padding:10px;">${name}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Email</td>
            <td style="padding:10px;">${email}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Social</td>
            <td style="padding:10px;">${social}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Followers</td>
            <td style="padding:10px;">${followers}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Message</td>
            <td style="padding:10px;">${message}</td>
          </tr>
        </table>
      </div>
    `;

    await resend.emails.send({
      from: "Thinkway Media <noreply@thinkwaymedia.com>",
      to: "hello@thinkwaymedia.com",
      replyTo: String(email),
      subject: `New Creator Application — ${name}`,
      html,
    });

    await resend.emails.send({
      from: "Thinkway Media <noreply@thinkwaymedia.com>",
      to: String(email),
      subject: "We Received Your Application",
      html: `
        <div style="font-family:sans-serif;padding:20px;">
          <h2>Thank You for Applying</h2>

          <p>
            Your Creator Program application has been received successfully.
          </p>

          <p>
            Our team will review your profile and contact you shortly.
          </p>

          <br/>

          <strong>Thinkway Media</strong>
        </div>
      `,
    });

    return NextResponse.redirect(
  new URL("/application-submitted", req.url)
);

  } catch (error) {
    console.error(error);

    return NextResponse.json({ success: true });
  }
}
