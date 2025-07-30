// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover pointer-events-none"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src="/videos/headder.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-slate-900/40" />

//       {/* Content */}
//       <div className="relative container mx-auto px-4 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//           <span className="text-[#7AB945]">Real Estate</span> <span className="text-[#7AB945]">Advisory Services</span>
//         </h1>

//         <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
//           End-To-End Solutions For Real Estate Developers From Lead Generation To Conversion. Exclusive High-Yield
//           Investment Opportunities For HNI Clients.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Button
//             variant="outline"
//             className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg"
//           >
//             Explore Investments →
//           </Button>
//         <Link href={"/register"}>
//           <Button className="bg-[#7AB945] hover:bg-green-600 text-white px-8 py-3 text-lg cursor-pointer">Developer Services</Button>
        
//         </Link>
//         </div>

//         {/* Dots indicator */}
//         {/* <div className="flex justify-center space-x-2 mt-12">
//           <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-white/30 rounded-full"></div>
//           <div className="w-3 h-3 bg-white/30 rounded-full"></div>
//           <div className="w-3 h-3 bg-white/30 rounded-full"></div>
//         </div> */}
//       </div>
//     </section>
//   )
// }





"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import DeveloperFormModal from "./DeveloperFormModal"

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Video */}
      <video className="absolute inset-0 w-screen h-full object-cover pointer-events-none" autoPlay muted loop playsInline>
        <source src="/videos/headder.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-slate-900/40" />

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="text-[#7AB945]">Real Estate</span>{" "}
          <span className="text-[#7AB945]">Advisory Services</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
          End-To-End Solutions For Real Estate Developers From Lead Generation To Conversion. Exclusive High-Yield
          Investment Opportunities For HNI Clients.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
            Explore Investments →
          </Button>
          <Button onClick={() => setIsOpen(true)} className="bg-[#7AB945] hover:bg-green-600 text-white px-8 py-3 text-lg cursor-pointer">
            Developer Services
          </Button>
        </div>
      </div>

      {/* Modal */}
      <DeveloperFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

    </section>
  )
}

