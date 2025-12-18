import type { NextRequest } from 'next/server';
import { Resend } from 'resend';

const toEmail = 'subedisushant781@gmail.com';

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;

  // If the API key is missing, log a simulation for development/build, or return an error.
  if (!apiKey) {
    try {
      const { name, email, message } = await req.json();
      console.log("--- New Contact Form Submission (Simulation) ---");
      console.log("Recipient:", toEmail);
      console.log("From:", `${name} <${email}>`);
      console.log("Message:", message);
      console.log("--- RESEND_API_KEY not found. Email not sent. ---");
      return new Response(JSON.stringify({ message: "Email sent successfully (simulated)!" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
       console.error("Failed to parse request or simulate email:", error);
       return new Response(JSON.stringify({ message: "Server configuration error or bad request." }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  // If API key is present, proceed with sending the email.
  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: 'onboarding@resend.dev', // This must be a verified domain in Resend
      to: toEmail,
      subject: `New message from ${name} on your portfolio`,
      reply_to: email,
      html: `<p>You have a new contact form submission from ${name} (${email}):</p><p>${message}</p>`,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
