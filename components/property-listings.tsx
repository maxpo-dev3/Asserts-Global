"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Square, Calendar, HandCoins } from "lucide-react";
import { useRouter } from "next/navigation";
import { KeenSliderPlugin } from "keen-slider";
import PropertyCard from "./ui/propertyCard";

const properties = [
  {
    id: 1,
    name: "Z-Hub by Sumadhura",
    badge: "Commercial",
    location: "Bangalore South, India",
    price: "₹42L*",
    priceLabel: "Starting @",
    possession: "Possession - 2026",
    bhk: "Rental Yield upto 8%",
    area: "0275-3400 SqFt",
    icon: HandCoins,
    image: "/images/sumadhura.png",
  },
  {
    id: 2,
    name: "Sparkling Springs",
    badge: "Villa",
    location: "Bangalore South, India",
    price: "₹4.99Cr*",
    priceLabel: "Starting @",
    possession: "Possession - 2027",
    bhk: "3-4 BHK",
    area: "2932-3683 SqFt",
    image: "/images/sparkling.jpeg",
  },
  {
    id: 3,
    name: "Embassy Verde",
    badge: "Residential",
    location: "Bangalore North, India",
    price: "₹80L*",
    priceLabel: "Starting @",
    possession: "Possession - 2028",
    bhk: "2-3 BHK",
    area: "1200-1800 SqFt",
    image: "/images/embassy.png",
  },
  {
    id: 4,
    name: "Purva Aerocity",
    badge: "Residential",
    location: "Bangalore North, India",
    price: "₹1.4Cr*",
    priceLabel: "Starting @",
    possession: "Possession - 2029",
    bhk: "2-3 BHK",
    area: "1100-1800 SqFt",
    image: "/images/purva.png",
  },
  {
    id: 5,
    name: "Abhee Celestial City",
    badge: "Residential",
    location: "Bangalore South, India",
    price: "₹1.3Cr*",
    priceLabel: "Starting @",
    possession: "Possession - 2029",
    bhk: "2-3 BHK",
    area: "1000-1800 SqFt",
    image: "/images/abhee.png",
  },
];

// Autoplay plugin
const autoplay = (run = true): KeenSliderPlugin => (slider) => {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  const clearNextTimeout = () => clearTimeout(timeout);
  const nextTimeout = () => {
    clearTimeout(timeout);
    if (mouseOver || !run) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 3000);
  };

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
};

export default function PropertyListings() {

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      slides: {
        perView: 3,
        spacing: 32,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: { perView: 2.2, spacing: 24 },
        },
        "(max-width: 640px)": {
          slides: { perView: 1.2, spacing: 16 },
        },
      },
    },
    [autoplay()]
  );

  return (
    <section className="py-16 bg-gray-50" id="properties">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Property Listings
          </h2>
        </div>

        {/* Desktop/Tablet: Keen Slider */}
        <div className="hidden sm:block">
          <div ref={sliderRef} className="keen-slider mb-12">
            {properties.map((property) => (
              <div key={property.id} className="keen-slider__slide p-2 mb-4">
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Stacked */}
        <div className="sm:hidden flex flex-col gap-6 mb-12">
          {properties.map((property) => (
            <div key={property.id} className="p-2">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 md:px-8 py-3 rounded-4xl cursor-not-allowed">
            View all Properties
          </Button>
        </div>
      </div>
    </section>
  );
}