"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Home, Square, Calendar } from "lucide-react"
import { useRouter } from 'next/navigation'

const properties = [
  {
    id: 1,
    name: "Embassy Verde",
    location: "Bangalore North, India",
    price: "₹80L*",
    priceLabel: "Starting @",
    possession: "Possession - 2028",
    bhk: "2-3 BHK",
    area: "1200-1800 SqFt",
    image: "/images/embassy.png",
  },
  {
    id: 2,
    name: "Purva Aerocity",
    location: "Bangalore North, India",
    price: "₹1.4Cr*",
    priceLabel: "Starting @",
    possession: "Possession - 2029",
    bhk: "2-3 BHK",
    area: "1100-1800 SqFt",
    image: "/images/purva.png",
  },
  {
    id: 3,
    name: "Abhee Celestial City",
    location: "Bangalore South, India",
    price: "₹1.3Cr*",
    priceLabel: "Starting @",
    possession: "Possession - 2029",
    bhk: "2-3 BHK",
    area: "1000-1800 SqFt",
    image: "/images/abhee.png",
  },
]

export default function PropertyListings() {
  const router = useRouter()
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Property Listings</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {properties.map((property) => (
            <div key={property.id} className="bg-white shadow-lg overflow-hidden rounded-none">
              <div className="relative h-56 md:h-64">
                <Image src={property.image || "/placeholder.svg"} alt={property.name} fill className="object-cover" />
              </div>

              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800">{property.name}</h3>
                  <div className="text-right">
                    <div className="text-xs md:text-sm text-gray-600">{property.priceLabel}</div>
                    <div className="text-xl md:text-2xl font-bold text-slate-800">{property.price}</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{property.location}</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-1" />
                    {property.bhk}
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    {property.area}
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-5">
                  <Calendar className="h-4 w-4 mr-2" />
                  {property.possession}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="w-full sm:w-1/2 bg-transparent">
                    View Details
                  </Button>
                    <Button
      className="w-full sm:w-1/2 bg-[#7AB945] hover:bg-green-600"
      onClick={() => router.push('/contact')}
    >
      Enquire Now
    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 md:px-8 py-3">
            View all Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
