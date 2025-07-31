

// app/api/contact/route.ts

import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS
const TO_USER = process.env.TO_USER

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json()

    const {
      name,
      email,
      phone,
      message,
      investmentType,
      budget,
      subscribed,
    } = formData

    const transporter = nodemailer.createTransport({
      host: "maxpo.interactivedns.com",
    //    host: "mail.assetsglobal.in",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    const htmlContent = `
      <h2>New Investment Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Investment Interest:</strong> ${investmentType || "Not specified"}</p>
      <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
      <p><strong>Subscribed to Newsletter:</strong> ${subscribed ? "Yes" : "No"}</p>
      <p><strong>Message:</strong><br/>${message || "No message provided."}</p>
    `

    const mailOptions = {
      from: `"Website Enquiry" <${EMAIL_USER}>`,
      to: TO_USER,
      subject: "New Investment Enquiry Submitted",
      html: htmlContent,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Enquiry sent successfully!" }, { status: 200 })
    
  } catch (error) {
    console.error("Error sending enquiry email:", error)
    return NextResponse.json({ success: false, message: "Failed to send enquiry." }, { status: 500 })
  }
}


