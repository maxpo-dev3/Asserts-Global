import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PropertyListings from "@/components/property-listings"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import InvestmentOpportunities from "@/components/investment-opportunities"
import PartnershipSection from "@/components/partnership-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
        <ServicesSection />
          <AboutSection />
            <PartnershipSection />
{/*       
      <PropertyListings />
    
    
      <InvestmentOpportunities />
    
      <ContactSection /> */}
      <Footer />
    </main>
  )
}
