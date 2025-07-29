import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="text-[#7AB945]">Real Estate</span> <span className="text-[#7AB945]">Advisory Services</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
          End-To-End Solutions For Real Estate Developers From Lead Generation To Conversion. Exclusive High-Yield
          Investment Opportunities For HNI Clients.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg"
          >
            Explore Investments →
          </Button>
          <Button className="bg-[#7AB945] hover:bg-green-600 text-white px-8 py-3 text-lg">Developer Services</Button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-12">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-white/30 rounded-full"></div>
          <div className="w-3 h-3 bg-white/30 rounded-full"></div>
          <div className="w-3 h-3 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
