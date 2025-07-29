import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
<div className="flex items-center pl-8">
  <Image
    src="/images/blacklogo.png" // Replace with your actual logo path
    alt="Assets Global Logo"
    width={160} // Adjust width
    height={50} // Adjust height
    className="h-auto w-auto"
  />
</div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-5">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-slate-900 font-medium">
              About Us
            </Link>
            <div className="relative group">
              <button className="flex items-center text-slate-700 hover:text-slate-900 font-medium">
                Properties
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link
                    href="/properties/residential"
                    className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded"
                  >
                    Residential
                  </Link>
                  <Link
                    href="/properties/commercial"
                    className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded"
                  >
                    Commercial
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-slate-700 hover:text-slate-900 font-medium">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link
                    href="/services/advisory"
                    className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded"
                  >
                    Advisory
                  </Link>
                  <Link
                    href="/services/investment"
                    className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded"
                  >
                    Investment
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/investments" className="text-slate-700 hover:text-slate-900 font-medium">
              Investments
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="bg-slate-800 text-white border-slate-800 hover:bg-slate-700">
              Login
            </Button>
            <Button className="bg-[#7AB945] hover:bg-green-600 text-white">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
