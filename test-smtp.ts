// import nodemailer from 'nodemailer';

// async function testSMTP() {
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.your-email-provider.com', // e.g., smtp.gmail.com
//     port: 587,
//     secure: false,
//     auth: {
//       user: 'your@email.com',
//       pass: 'your-app-password',
//     },
//   });

//   try {
//     const info = await transporter.sendMail({
//       from: '"Test Mailer" <your@email.com>',
//       to: 'your@email.com',
//       subject: 'SMTP Test',
//       text: 'Hello! This is a test email.',
//     });

//     console.log('✅ Email sent:', info.messageId);
//   } catch (error) {
//     console.error('❌ Error sending email:', error);
//   }
// }

// testSMTP();


// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// async function main() {
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_PORT),
//     secure: false,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   const info = await transporter.sendMail({
//     from: `"Test Mailer" <${process.env.SMTP_USER}>`,
//     to: "your-email@example.com", // replace with your actual email
//     subject: "SMTP Test ✔",
//     text: "This is a test email",
//   });

//   console.log("Message sent: %s", info.messageId);
// }

// main().catch(console.error);
