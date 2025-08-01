// app/api/newsletter/route.ts

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS
const TO_USER = process.env.TO_USER // Admin email

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'maxpo.interactivedns.com',
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    const htmlContent = `
      <h2>New Newsletter Subscription</h2>
      <p><strong>Email:</strong> ${email}</p>
    `

    await transporter.sendMail({
      from: `"Website Newsletter" <${EMAIL_USER}>`,
      to: TO_USER,
      subject: 'New Newsletter Subscriber',
      html: htmlContent,
    })

    return NextResponse.json({ message: 'Subscription successful!' }, { status: 200 })
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
