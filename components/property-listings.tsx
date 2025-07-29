import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Home, Square, Calendar } from "lucide-react"

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
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Property Listings</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src={property.image || "/placeholder.svg"} alt={property.name} fill className="object-cover" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-800">{property.name}</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">{property.priceLabel}</div>
                    <div className="text-2xl font-bold text-slate-800">{property.price}</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-1" />
                    {property.bhk}
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    {property.area}
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  {property.possession}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    View Details
                  </Button>
                  <Button className="flex-1 bg-[#7AB945] hover:bg-green-600">Enquire Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3">View all Properties</Button>
        </div>
      </div>
    </section>
  )
}
