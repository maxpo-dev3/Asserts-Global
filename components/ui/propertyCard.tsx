import { Calendar, Home, MapPin, Square } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from './button';

const PropertyCard = ({ property }: any) => {
  const router = useRouter();
  const Icon = property.icon || Home;

  return (
    <div className="w-full relative bg-white shadow-lg overflow-hidden rounded-4xl transform transition duration-300 ease-in-out hover:scale-[1.02] cursor-pointer p-2">
      {property.badge && (
        <p className="absolute top-5 right-5 bg-[#7AB945] text-white text-xs px-2 py-1 rounded-4xl z-10">
          {property.badge}
        </p>
      )}

      <div className="relative h-56 md:h-64">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.name}
          fill
          className="object-cover rounded-t-4xl"
        />
      </div>

      <div className="p-4 md:p-6">
        <div className="flex justify-between items-start mb-3 md:mb-4">
          <h3 className="text-lg md:text-xl font-bold text-slate-800">
            {property.name}
          </h3>
          <div className="text-right">
            <div className="text-xs md:text-sm text-gray-600">
              {property.priceLabel}
            </div>
            <div className="text-xl md:text-2xl font-bold text-slate-800">
              {property.price}
            </div>
          </div>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{property.location}</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Icon className="h-4 w-4 mr-1" />
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
          <Button
            variant="outline"
            className="w-full sm:w-1/2 bg-transparent rounded-4xl"
          >
            View Details
          </Button>
          <Button
            className="w-full sm:w-1/2 bg-[#7AB945] hover:bg-green-600 rounded-4xl"
            onClick={() => router.push("/contact")}
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  
  )
}

export default PropertyCard