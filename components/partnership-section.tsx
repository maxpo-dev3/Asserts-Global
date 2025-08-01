import Image from "next/image";

export default function PartnershipSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-slate-800 mb-6 md:mb-8">
          Why Partner With Us?
        </h2>
      </div>

      <div className="space-y-0">
        {/* For Developers */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <Image
            src="/images/developers.png"
            alt="City skyline for developers"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 flex items-center">
            <div className="w-full px-4 md:px-8">
              <div className="max-w-6xl mx-auto text-center md:text-left">
                <div className="md:mt-40 mt-24">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                    For Developers:
                  </h3>
                  <p className="text-sm md:text-lg text-gray-200">
                    Seamless Capital Access, Premium Positioning, And Faster Sales Velocity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For Investors */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <Image
            src="/images/investor.png"
            alt="Investment growth concept"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-green-900/80 flex items-center">
            <div className="w-full px-4 md:px-8">
              <div className="max-w-6xl mx-auto text-center md:text-left">
                <div className="md:mt-40 mt-24">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                    For Investors:
                  </h3>
                  <p className="text-sm md:text-lg text-gray-200">
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
  );
}
