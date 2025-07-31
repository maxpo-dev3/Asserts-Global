// app/thank-you/page.tsx
import Link from "next/link"
import { Users, PlayCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thank You For Your Enquiry!
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          You are now part of the Bengaluru Plot Expo community.
        </p>
        {/* <p className="text-md text-gray-600 mb-6">
          Our team will get in touch with you soon.
          <br />
          We look forward to welcoming you at the Bengaluru International Exhibition Center
          from <strong>12 October – 13 October 2025</strong>
        </p> */}

        {/* <div className="flex justify-center gap-6 mb-8">
          <Link
            href="/participants"
            className="flex items-center gap-2 text-cyan-700 hover:text-cyan-900 font-medium"
          >
            <Users className="w-5 h-5" />
            See Who's Participating
          </Link>
          <Link
            href="/speakers"
            className="flex items-center gap-2 text-cyan-700 hover:text-cyan-900 font-medium"
          >
            <PlayCircle className="w-5 h-5" />
            View All Speakers
          </Link>
        </div> */}

        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          ← Back to Homepage
        </Link>
      </div>
    </div>
  )
}
