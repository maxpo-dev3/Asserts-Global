import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
<div>
  <div className="mb-4">
    <Image
      src="/images/logo.png" // Replace with your image path
      alt="Assets Global Logo"
      width={120}
      height={40}
      className="h-auto w-auto"
    />
  </div>

  <p className="text-gray-400 text-sm leading-relaxed">
    Your Trusted Partner In Amplifying Asset Returns Through Premium Real Estate Investments And Advisory
    Services, Connecting Developers With Sophisticated Investors With Precision And Trust.
  </p>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#7AB945] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-400 hover:text-white">
                  Featured Properties
                </Link>
              </li>
              <li>
                <Link href="/investments" className="text-gray-400 hover:text-white">
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#7AB945] mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/lead-generation" className="text-gray-400 hover:text-white">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services/sales-conversion" className="text-gray-400 hover:text-white">
                  Sales Conversion
                </Link>
              </li>
              <li>
                <Link href="/services/investment-advisory" className="text-gray-400 hover:text-white">
                  Investment Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/property-management" className="text-gray-400 hover:text-white">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="/services/legal-support" className="text-gray-400 hover:text-white">
                  Legal Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="font-semibold text-[#7AB945] mb-4">Stay Connected</h4>
            <div className="space-y-2 text-sm text-gray-400 mb-4">
              <p>+91 9035603484</p>
              <p>sandeep@assetsglobal.in</p>
              <p># 50 2nd Floor, MM Road, Frazer Town, Bengaluru, Karnataka 560005</p>
            </div>

            <div>
              <h5 className="font-medium mb-2 text-[#7AB945]">Newsletter</h5>
              <div className="flex">
                <Input
                  placeholder="Your email"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 rounded-r-none"
                />
                <Button className="bg-[#7AB945] text-black hover:bg-green-600 rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 Assets Global. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/rera" className="hover:text-white">
                RERA Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
