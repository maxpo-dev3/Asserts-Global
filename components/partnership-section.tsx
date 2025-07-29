import Image from "next/image"

export default function PartnershipSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-8">Why Partner With Us?</h2>
        </div>

        <div className="space-y-0">
          {/* For Developers */}
          <div className="relative h-64 md:h-80 rounded-t-lg overflow-hidden">
            <Image
              src="/images/developers.png"
              alt="City skyline for developers"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4">For Developers:</h3>
                  <p className="text-lg text-gray-200">
                    Seamless Capital Access, Premium Positioning, And Faster Sales Velocity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* For Investors */}
          <div className="relative h-64 md:h-80 rounded-b-lg overflow-hidden">
            <Image
              src="/images/investor.png"
              alt="Investment growth concept"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-green-900/80 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-bold text-white mb-4">For Investors:</h3>
                  <p className="text-lg text-gray-200">
                    Off-Market Access To Curated Assets With Strong Fundamentals And Upside. Where Strategic Capital
                    Meets High-Conviction Real Estate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
