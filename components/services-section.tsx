import { Button } from "@/components/ui/button"
import { Users, Settings, TrendingUp, Handshake, FileCheck, Shield } from "lucide-react"

const developerServices = [
  {
    icon: Users,
    title: "AI- Driven Sales",
    description: "AI Marketing Technology Delivers Verified, High-Intent Prospects Shorten Sales Cycles",
  },
  {
    icon: Settings,
    title: "Sales Mandates",
    description:
      "Accelerated Brand Growth & Faster Closures We Amplify Developer Visibility With AI-Driven Demand Generation, Ensuring Premium Positioning And Rapid Sales Velocity.",
  },
  {
    icon: TrendingUp,
    title: "Capital For Developers",
    description:
      "We Provide Strategic Capital Partnerships To Developers Across All Project Stages, Ensuring Seamless Funding Access And Aligned Growth.",
  },
]

const investmentServices = [
  {
    icon: Handshake,
    title: "Curated Deals",
    description: "Exclusive Access To Early Stage Real Estate Investments Off-Market Deals",
  },
  {
    icon: FileCheck,

    title: "Stringent Due-Diligence",
    description:
      "Every Opportunity Is Rigorously Vetted—Backed By Local Market Potential And Flawless Legal Due Diligence. We Ensure Secure, High-Growth Opportunities From The Ground Up.",
  },
  {
    icon: Shield,
    title: "Regulatory Framework",
    description:
      "Each Opportunity Is Carefully Curated, Transparently Structured, And Fully Compliant With Regulatory Frameworks To Ensure Security, Trust, And Ease Of Investments.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Comprehensive Real Estate Solutions For Developers And Investors, Designed To Maximize Returns And Minimize
            Risks.
          </p>
        </div>

        {/* For Real Estate Developers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">For Real Estate Developers</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {developerServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-lg border-2 border-black hover:border-green-200 transition-colors rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[24px] rounded-br-[24px] flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6  ">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3">Explore Partnership</Button>
          </div>
        </div>

        {/* Early Stage Investments */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Early Stage Investments</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {investmentServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-lg border-2 border-black hover:border-green-200 transition-colors rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[24px] rounded-br-[24px] flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
