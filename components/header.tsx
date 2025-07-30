'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  {
    title: 'Properties',
    dropdown: {
      India: [
        { label: 'Bangalore', href: '/properties/india/bangalore' },
        { label: 'Mumbai', href: '/properties/india/mumbai' },
      ],
      'Middle East': [
        { label: 'Dubai', href: '/properties/middleeast/dubai' },
        { label: 'Abu Dhabi', href: '/properties/middleeast/abudhabi' },
        { label: 'Kuwait', href: '/properties/middleeast/kuwait' },
      ],
    },
  },
  {
    title: 'Services',
    dropdown: {
      Services: [
        { label: 'Real Estate Sales', href: '/services/real-estate-sales' },
        { label: 'Capital For Developers', href: '/services/capital' },
        { label: 'Sales & Marketing Mandate', href: '/services/mandate' },
      ],
    },
  },
  {
    title: 'Investments',
    dropdown: {
      Investments: [
        { label: 'India', href: '/investments/india' },
        { label: 'Middle East', href: '/investments/middleeast' },
      ],
    },
  },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<number | null>(null);

  return (
    <header className="bg-white shadow-sm z-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center pl-0 md:pl-2xl">
            <Link href="/">
              <Image
                src="/images/blacklogo.png"
                alt="Assets Global Logo"
                width={274}
                height={70}
                className="h-auto min-w-46 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[18px] font-medium relative">
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
                    className="text-slate-700 hover:text-slate-900"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <button className="flex items-center text-slate-700 hover:text-slate-900">
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                )}

                {item.dropdown && activeIndex === index && (
                  <div className="absolute top-full left-0 mt-2 min-w-[240px] bg-white border rounded-lg shadow-lg z-50">
                    {Object.entries(item.dropdown).map(([section, links], secIndex) => (
                      <div key={secIndex}>
                        <div className="bg-[#0D1C51] text-white px-4 py-2 font-semibold rounded-t-md">
                          {section}
                        </div>
                        <ul className="px-4 py-2">
                          {links.map((link, lIndex) => (
                            <li key={lIndex} className="py-1">
                              <Link
                                href={link.href}
                                className="block text-[#0D1C51] hover:text-[#4A90E2]"
                              >
                                • {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              className="bg-slate-800 text-white border-slate-800 hover:bg-slate-700"
            >
              Login
            </Button>
            <Button className="bg-[#7AB945] hover:bg-green-600 text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md border-t py-4 space-y-4">
            {menuItems.map((item, index) => (
              <div key={index} className="px-4">
                {item.href ? (
                  <Link href={item.href} className="block py-2 text-slate-700">
                    {item.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      className="flex justify-between items-center w-full text-slate-700 font-medium"
                      onClick={() =>
                        setExpandedDropdown(expandedDropdown === index ? null : index)
                      }
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`ml-2 transition-transform ${
                          expandedDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {item.dropdown && expandedDropdown === index && (
                      <div className="mt-2 pl-4 border-l">
                        {Object.entries(item.dropdown).map(([section, links], secIndex) => (
                          <div key={secIndex} className="mb-2">
                            <div className="font-semibold text-[#0D1C51]">{section}</div>
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
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="px-4 flex flex-col gap-2 pt-4">
              <Button
                variant="outline"
                className="bg-slate-800 text-white border-slate-800 hover:bg-slate-700 w-full"
              >
                Login
              </Button>
              <Button className="bg-[#7AB945] hover:bg-green-600 text-white w-full">
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
