// lib/nodemailer.ts

import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail", // change this if not using Gmail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendContactEmail(data: {
  name: string
  email: string
  phone: string
  message: string
  investmentType?: string
  budget?: string
  subscribed?: boolean
}) {
  const { name, email, phone, message, investmentType, budget, subscribed } = data

  const mailOptions = {
    from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Enquiry from ${name}`,
    html: `
      <h2>New Contact Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Investment Type:</strong> ${investmentType || "N/A"}</p>
      <p><strong>Budget:</strong> ${budget || "N/A"}</p>
      <p><strong>Subscribed to Newsletter:</strong> ${subscribed ? "Yes" : "No"}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  }

  return transporter.sendMail(mailOptions)
}
