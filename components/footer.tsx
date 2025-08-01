import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image";
import {  Mail, MapPin, Phone } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-[#07173A] text-white py-12">
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

            <p className="text-white text-sm leading-relaxed">
              Your Trusted Partner In Amplifying Asset Returns Through Premium Real Estate Investments And Advisory
              Services, Connecting Developers With Sophisticated Investors With Precision And Trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#7AB945] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/services" className=" hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/properties" className=" hover:text-white">
                  Featured Properties
                </Link>
              </li>
              <li>
                <Link href="/investments" className=" hover:text-white">
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link href="/about" className=" hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" hover:text-white">
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
                <Link href="/services/lead-generation" className=" hover:text-white">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services/sales-conversion" className=" hover:text-white">
                  Sales Conversion
                </Link>
              </li>
              <li>
                <Link href="/services/investment-advisory" className=" hover:text-white">
                  Investment Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/property-management" className=" hover:text-white">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="/services/legal-support" className=" hover:text-white">
                  Legal Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="font-semibold text-[#7AB945] mb-4">Stay Connected</h4>
            <div className="space-y-2 text-sm  mb-4">
              <a href="tel:+919035603484" className="flex items-center space-x-2 text-white ">
                <Phone className="w-5 h-5" />
                <span>+91 9035603484</span>
              </a>


              <a href="mailto:sandeep@assetsglobal.in" className="flex items-center  space-x-2 text-white ">
                <Mail className="w-5 h-5" />
                <span>sandeep@assetsglobal.in</span>
              </a>

              <a href="https://share.google/ZySqXqyzhaOboY9Cf" className="flex items-center  justify-between text-white  space-x-2 w-full ">
                <div className="flex">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="">Sky View Business Cener, Tower, The Citadel - 40th Floor - Business Bay - Dubai - United Arab Emirates</p>
              </a>
              {/* <p>Sky View Business Cener, Tower, The Citadel - 40th Floor - Business Bay - Dubai - United Arab Emirates</p> */}



            </div>

            <div>
              <h5 className="font-medium mb-2 text-[#7AB945]">Newsletter</h5>
              <div className="flex">
                <Input
                  placeholder="Your email"
                  className="bg-white border-slate-700 text-black placeholder:text-gray-400 rounded-r-none"
                />
                <Button className="bg-[#7AB945] text-black cursor-pointer hover:bg-[#7AB945]-600 rounded-l-none ">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-[#7AB945] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
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
