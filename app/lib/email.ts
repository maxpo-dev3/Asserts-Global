import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailProps = {
  name: string;
  email: string;
  message: string;
};

export async function sendEmail({ name, email, message }: EmailProps) {
  const response = await resend.emails.send({
from: 'Asia Health <info@asiahealthfive.com>',
     
    to: ['avalasandeep02@gmail.com'],        // hardcoded recipient
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  return response;
}
