import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative w-full max-w-5xl mx-auto mb-8">
            <div className="relative h-34 rounded-full md:h-80 rounded-5xl overflow-hidden ">
              <Image src="/images/about.png" alt="Our professional team" fill className="object-cover" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-slate-800 mb-8">About Us</h2>

          <div className="max-w-6xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              At Assets Global, We Empower Real Estate Developers With End-To-End Growth Solutions—From AI-Driven Demand
              Generation To Accelerated Sales Execution. Our Data-Powered Platform Delivers Hyper-Targeted Buyer
              Acquisition, Strategic Pricing Insights, And Optimized Campaign Performance For Unmatched Visibility And
              Monetization Speed.
            </p>

            <p className="text-lg">
              For Institutional Investors And UHNWIs, We Specialize In Exclusive, Off-Market Early Stage Real Estate
              Opportunities—Rigorously Vetted For High-Growth Potential. Our Team Combines Local Market Expertise With
              Deep Due Diligence, Uncovering Early-Stage Investments In Residential, Commercial, And Mixed-Use
              Developments That Align With Sophisticated Portfolio Goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
