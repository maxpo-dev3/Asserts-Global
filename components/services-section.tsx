"use client"
import Image, { StaticImageData } from "next/image"
import { Button } from "@/components/ui/button"

import aidriven from "@/public/icons/work.png"
import settingsIcon from "@/public/icons/salesmandates.png"
import trendingIcon from "@/public/icons/capital.png"
import handshakeIcon from "@/public/icons/curated.png"
import fileCheckIcon from "@/public/icons/stringent.png"
import shieldIcon from "@/public/icons/regulatory.png"

import { useState } from "react"
import DeveloperFormModal from "./DeveloperFormModal" 
import Link from "next/link"

type Service = {
  image: StaticImageData
  title: string
  description: string
}

const developerServices: Service[] = [
  {
    image: aidriven,
    title: "AI- Driven Sales",
    description: "AI Marketing Technology Delivers Verified, High-Intent Prospects Shorten Sales Cycles",
  },
  {
    image: settingsIcon,
    title: "Sales Mandates",
    description:
      "Accelerated Brand Growth & Faster Closures We Amplify Developer Visibility With AI-Driven Demand Generation, Ensuring Premium Positioning And Rapid Sales Velocity.",
  },
  {
    image: trendingIcon,
    title: "Capital For Developers",
    description:
      "We Provide Strategic Capital Partnerships To Developers Across All Project Stages, Ensuring Seamless Funding Access And Aligned Growth.",
  },
]

const investmentServices: Service[] = [
  {
    image: handshakeIcon,
    title: "Curated Deals",
    description: "Exclusive Access To Early Stage Real Estate Investments Off-Market Deals",
  },
  {
    image: fileCheckIcon,
    title: "Stringent Due-Diligence",
    description:
      "Every Opportunity Is Rigorously Vetted—Backed By Local Market Potential And Flawless Legal Due Diligence. We Ensure Secure, High-Growth Opportunities From The Ground Up.",
  },
  {
    image: shieldIcon,
    title: "Regulatory Framework",
    description:
      "Each Opportunity Is Carefully Curated, Transparently Structured, And Fully Compliant With Regulatory Frameworks To Ensure Security, Trust, And Ease Of Investments.",
  },
]

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
                className="bg-white pl-6 pr-6 pt-0 pb-6 shadow-lg border-2 border-black hover:border-green-200 transition-colors rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[24px] rounded-br-[24px] flex flex-col items-center text-center"
              >
                <div className="w-15 h-12 bg-[#07173A] rounded-none flex items-center justify-center mb-6">
                  <Image src={service.image} alt={service.title} width={32} height={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href={"/contact"}>
           
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 cursor-pointer">
              Explore Partnership
            </Button>
             </Link>
          </div>
        </div>

        {/* Early Stage Investments */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Early Stage Investments</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {investmentServices.map((service, index) => (
              <div
                key={index}
                className="bg-white pl-6 pr-6 pt-0 pb-6 shadow-lg border-2 border-black hover:border-green-200 transition-colors rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[0px] rounded-br-[0px] flex flex-col items-center text-center"
              >
                <div className="w-15 h-12 bg-[#07173A] rounded-none flex items-center justify-center mb-6">
                  <Image src={service.image} alt={service.title} width={32} height={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

<div className="text-center mt-12">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 cursor-pointer"
          >
            Contact Us
          </Button>
        </div>
        </div>
      </div>
       <DeveloperFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
