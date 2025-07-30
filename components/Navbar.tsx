"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Properties",
    submenu: [
      {
        section: "India",
        links: [
          { name: "Bangalore", path: "/properties/bangalore" },
          { name: "Mumbai", path: "/properties/mumbai" },
        ],
      },
      {
        section: "Middle East",
        links: [
          { name: "Dubai", path: "/properties/dubai" },
          { name: "Abu Dhabi", path: "/properties/abudhabi" },
          { name: "Kuwait", path: "/properties/kuwait" },
        ],
      },
    ],
  },
  {
    name: "Services",
    submenu: [
      {
        section: "Services",
        links: [
          { name: "Real Estate Sales", path: "/services/real-estate-sales" },
          { name: "Capital For Developers", path: "/services/capital" },
          {
            name: "Sales & Marketing Mandate",
            path: "/services/sales-marketing",
          },
        ],
      },
    ],
  },
  {
    name: "Investments",
    submenu: [
      {
        section: "Investments",
        links: [
          { name: "India", path: "/investments/india" },
          { name: "Middle East", path: "/investments/middle-east" },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={120} height={40} />
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.path || "#"}
                className="text-lg font-semibold text-gray-900 hover:text-green-600 flex items-center gap-1"
              >
                {item.name}
                {item.submenu && <ChevronDown size={16} />}
              </Link>

              {/* Dropdown */}
              {item.submenu && activeDropdown === item.name && (
                <div className="absolute left-0 top-full mt-2 min-w-[220px] bg-white shadow-lg rounded-md border z-50">
                  {/* Triangle */}
                  <div className="absolute -top-2 left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white z-50" />
                  <div className="bg-white rounded-md overflow-hidden">
                    {item.submenu.map((section) => (
                      <div key={section.section} className="p-2 border-b last:border-none">
                        <div className="bg-[#0B1F3A] text-white text-sm px-3 py-1 font-semibold rounded">
                          {section.section}
                        </div>
                        <ul className="pl-4 pt-1 text-sm text-gray-800 list-disc">
                          {section.links.map((link) => (
                            <li key={link.name}>
                              <Link
                                href={link.path}
                                className="block py-1 hover:text-green-600"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
