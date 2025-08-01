"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import DeveloperFormModal from "./DeveloperFormModal";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative px-2">
      <div className="relative flex items-center container mx-auto h-[85dvh]  min-h-[600px] w-[90dvw] sm:w-full overflow-hidden mt-5 md:mt-8 rounded-4xl">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/60" />

        {/* Foreground Content */}
        <div className="relative z-10 w-full px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-[#7AB945]">Real Estate</span>{" "}
            <span className="text-[#7AB945]">Advisory Services</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            End-To-End Solutions For Real Estate Developers From Lead Generation
            To Conversion. Exclusive High-Yield Investment Opportunities For HNI
            Clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto bg-transparent cursor-not-allowed border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-base sm:text-lg rounded-4xl"
            >
              Explore Investments →
            </Button>
            <Button
              onClick={() => setIsOpen(true)}
              className="w-full sm:w-auto bg-[#7AB945] hover:bg-green-600 text-black px-8 py-3 text-base sm:text-lg cursor-pointer rounded-4xl"
            >
              Developer Services
            </Button>
          </div>
        </div>

        {/* Modal */}
        <DeveloperFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </section>
  );
}
