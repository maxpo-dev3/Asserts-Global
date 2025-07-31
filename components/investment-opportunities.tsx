import { Button } from "@/components/ui/button"

const opportunities = [
  {
    title: "Land Development Stage Opportunity",
    features: ["2x Asset Backed", "Minimum Investment @ ₹1Cr Onwards", "Tenure 2-3 Years", "Target IRR 22%"],
    bgColor: "bg-[#07173A]",
  },
  {
    title: "RERA Registered Project Capital Opportunity",
    features: ["1.5x Asset Backed", "Minimum Investment @ ₹50L", "Tenure 2 Years", "Fixed Returns 16%P.A"],
    bgColor: "bg-[#07173A]",
  },
  {
    title: "Fractional Ownership Opportunity",
    features: ["1.3x Asset Backed", "Minimum Investment @ ₹30L", "Tenure 2 Years", "Fixed Returns 14%P.A"],
    bgColor: "bg-[#07173A]",
  },
]

export default function InvestmentOpportunities() {
  return (
    <section className="py-6 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">
            Early Stage Real Estate Opportunities
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
            Curated High-Yield Real Estate Investments Designed Specifically For High Net Worth Individuals Seeking
            Superior Returns With Calculated Risks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {opportunities.map((opportunity, index) => (
            <div key={index} className={`${opportunity.bgColor} text-white rounded-none p-6 md:p-8`}>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 leading-tight">{opportunity.title}</h3>

              <div className="h-1 bg-gradient-to-r from-[#7AB945] to-[#7AB94500] w-48 md:w-48 mb-4 md:mb-6"></div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-sm md:text-base">
                {opportunity.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-full bg-transparent border-white text-white hover:bg-white hover:text-slate-800"
              >
                Express Interest
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl md:text-3xl font-bold text-slate-800 mb-4">
            Ready To Explore Investment Opportunities?
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            Schedule A Consultation With Our Investment Advisors To Discuss Personalized Investment Strategies Tailored
            To Your Financial Goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3">
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-6 py-3 bg-transparent"
            >
              Download Investment Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
