// import { NextResponse } from 'next/server';
// import { sendEmail } from '@/app/lib/email';

// export async function POST(req: Request) {
//   try {
//     const { name, email, message } = await req.json();
//     const result = await sendEmail({ name, email, message });

//     console.log("✅ Email Sent:", result);
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("❌ Email Error:", error);
//     return NextResponse.json({ success: false, error }, { status: 500 });
//   }
// }

// app/api/contact/route.ts

import { NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, phone, message } = body

    if (!name || !email || !message || !phone) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    await sendContactEmail(body)

    return NextResponse.json({ success: true, message: "Email sent successfully." })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
  }
}

