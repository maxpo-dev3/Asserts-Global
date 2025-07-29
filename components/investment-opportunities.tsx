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
    title: "Fractional Ownership Opportunity     ",
    features: ["1.3x Asset Backed", "Minimum Investment @ ₹30L", "Tenure 2 Years", "Fixed Returns 14%P.A"],
    bgColor: "bg-[#07173A]",
  },
]

export default function InvestmentOpportunities() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Early Stage Real Estate Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Curated High-Yield Real Estate Investments Designed Specifically For High Net Worth Individuals Seeking
            Superior Returns With Calculated Risks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {opportunities.map((opportunity, index) => (
            <div key={index} className={`${opportunity.bgColor} text-white rounded-lg p-8`}>
              <h3 className="text-xl font-bold mb-6 leading-tight">{opportunity.title}</h3>

              <div className="h-1 bg-gradient-to-r from-[#7AB945] to-[#7AB94500] w-80 mb-6"></div>

              <ul className="space-y-4 mb-8">
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
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Ready To Explore Investment Opportunities?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule A Consultation With Our Investment Advisors To Discuss Personalized Investment Strategies Tailored
            To Your Financial Goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3">Schedule Consultation</Button>
            <Button
              variant="outline"
              className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 bg-transparent"
            >
              Download Investment Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
