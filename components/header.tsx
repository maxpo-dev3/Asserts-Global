"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type DropdownItem = {
  label: string;
  href: string;
};

type MenuItem = {
  title: string;
  href?: string;
  dropdown?: {
    [section: string]: DropdownItem[];
  };
};

const menuItems: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "#about" },
  {
    title: "Properties",
    dropdown: {
      India: [
        { label: "Bangalore", href: "#properties" },
        // { label: "Mumbai", href: "#properties" },
      ],
      "Middle East": [
        { label: "Dubai", href: "#properties" },
        // { label: "Abu Dhabi", href: "#properties" },
        // { label: "Kuwait", href: "#properties" },
      ],
    },
  },
  {
    title: "Services",
    dropdown: {
      Services: [
        { label: "Real Estate Sales", href: "#services" },
        { label: "Capital For Developers", href: "#services" },
        { label: "Sales & Marketing Mandate", href: "#services" },
      ],
    },
  },
  {
    title: "Investments",
    dropdown: {
      Investments: [
        { label: "India", href: "#investments" },
        { label: "Middle East", href: "#investments" },
      ],
    },
  },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<number | null>(null);

  return (
    <header className="bg-white z-50 sticky top-0">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center pl-xl md:pl-2xl">
            <Link href="/">
              <Image
                src="/images/blacklogo.png"
                alt="Assets Global Logo"
                width={274}
                height={70}
                className="h-auto min-w-40 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-[18px] font-medium relative">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="relative text-[1rem] text-slate-700 hover:text-slate-900 after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#7AB945] after:to-[#7AB945] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <button className="flex items-center text-[1rem] text-slate-700 hover:text-slate-900">
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                )}

                {item.dropdown && activeIndex === index && (
                  <div className="absolute top-full left-0  min-w-[240px] bg-white border rounded-lg shadow-lg z-50">
                    {Object.entries(item.dropdown).map(
                      ([section, links], secIndex) => (
                        <div key={secIndex}>
                          <div className="bg-[#0D1C51] text-white px-4 py-2 font-semibold rounded-t-md  text-[1rem]">
                            {section}
                          </div>
                          <ul className="px-4 py-2">
                            {links.map((link, lIndex) => (
                              <li key={lIndex} className="py-1 flex gap-1 items-start">
                                •
                                <Link
                                  href={link.href}
                                  className="block text-[#0D1C51] hover:text-[#4A90E2]  text-[1rem]"
                                >
                                   {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3 text-white">
            <Button
              variant="outline"
              className="bg-[#07173A] font-bold text-white hover:bg-[#07173A] cursor-not-allowed  hover:text-white rounded-md"
            >
              Login
            </Button>
            <Button className="bg-[#7AB945] font-bold hover:bg-green-600 text-black cursor-not-allowed rounded-md ">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md border-t py-4 space-y-4 rounded-b-4xl">
            {menuItems.map((item, index) => (
              <div key={index} className="px-4">
                {item.href ? (
                  <Link href={item.href} className="block  text-slate-700">
                    {item.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      className="flex justify-between items-center w-full text-slate-700 font-medium"
                      onClick={() =>
                        setExpandedDropdown(
                          expandedDropdown === index ? null : index
                        )
                      }
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`ml-2 transition-transform ${
                          expandedDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {item.dropdown && expandedDropdown === index && (
                      <div className="mt-2 pl-4 border-l">
                        {Object.entries(item.dropdown).map(
                          ([section, links], secIndex) => (
                            <div key={secIndex} className="mb-2">
                              <div className="font-semibold text-[#0D1C51]">
                                {section}
                              </div>
                              <ul className="mt-1 space-y-1">
                                {links.map((link, lIndex) => (
                                  <li key={lIndex}>
                                    <Link
                                      href={link.href}
                                      className="block text-sm text-slate-700 hover:text-blue-600"
                                    >
                                      • {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="px-4 flex flex-col gap-2 pt-4">
              <Button
                variant="outline"
                className="bg-[#07173A] text-white border-slate-800 hover:bg-slate-700 w-full"
              >
                Login
              </Button>
              <Button className="bg-[#7AB945] hover:bg-green-600 text-black w-full">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
