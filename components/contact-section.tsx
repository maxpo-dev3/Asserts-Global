import { MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-[#07173A] to-[#7AB945] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
            Ready To Explore Premium Real Estate Opportunities? Contact Our
            Experts For Personalized Consultation And Exclusive Property Access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              Let's Discuss Your Investment Goals
            </h3>
            <p className="text-gray-200 mb-6 md:mb-8">
              Our Team Of Real Estate Experts Is Ready To Help You Find The
              Perfect Investment Opportunity That Aligns With Your Financial
              Objectives.
            </p>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8 text-sm md:text-base">
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-gray-200">+91 9035603484</p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-200">sandeep@assetsglobal.in</p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Office</h4>
                <p className="text-gray-200">
                  <MapPin className="w-4 h-4 inline-block mr-2" />
                  50 2nd Floor, MM Road, Frazer Town, Bengaluru, Karnataka
                  560005
                </p>
                <p className="text-gray-200">
                  <MapPin className="w-4 h-4 inline-block mr-2" />
                  Sky View Business Cener, Tower, The Citadel - 40th Floor -
                  Business Bay - Dubai - United Arab Emirates
                </p>
              </div>
            </div>

            <div className="bg-white/70 text-black  p-4 md:p-6 rounded-4xl">
              <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 ">
                Why Choose Assets Global?
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  "15+ Years Of Real Estate Expertise",
                  "₹500+ Crores In Successful Transactions",
                  "Exclusive Access To Pre-Launch Properties",
                  "End-To-End Investment Support",
                  "Legal And Documentation Assistance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
