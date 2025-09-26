'use client';

import {
  StarIcon,
  ArchiveIcon,
  Trash2Icon,
  MailIcon,
  ClockIcon,
  CheckCircleIcon,
  BedDoubleIcon,
  BathIcon,
  SquareIcon,
  HeartIcon,
  MapPinIcon
} from 'lucide-react';
import Image from 'next/image';

export const DeviceMockup = () => {
  const formattedDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const properties = [
    {
      id: 1,
      name: 'The Horizon at Mission Bay',
      location: 'Mission Bay',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80',
      price: '$1.2M',
      beds: 2,
      baths: 2,
      sqft: 1450,
      completion: 'Dec 2023'
    },
    {
      id: 2,
      name: 'Solstice Oakland Hills',
      location: 'Oakland Hills',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80',
      price: '$875K',
      beds: 3,
      baths: 2.5,
      sqft: 1890,
      completion: 'Mar 2024'
    },
    {
      id: 3,
      name: 'Presidio Heights Collection',
      location: 'Presidio Heights',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80',
      price: '$1.8M',
      beds: 4,
      baths: 3.5,
      sqft: 2450,
      completion: 'Jul 2024'
    }
  ];

  return (
    <div className="relative">
      <div className="relative z-10 rounded-[36px] overflow-hidden border-[12px] border-black shadow-xl">
        <div className="bg-white aspect-[9/19] w-full overflow-hidden">

          <div className="w-full h-full flex flex-col">
            <div className="bg-wild-sand h-8 w-full flex items-center justify-between px-4">
              <div className="text-xs font-medium text-gray-700">9:41</div>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-mirage rounded-sm" />
                <div className="w-2 h-2 bg-mirage rounded-full" />
                <div className="w-2 h-2 bg-mirage rounded-full" />
              </div>
            </div>

            <div className="bg-white border-b border-gray/20 p-3">
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-vulcan">Inbox</div>
                <div className="flex space-x-2">
                  <ArchiveIcon size={16} className="text-pale-sky" />
                  <Trash2Icon size={16} className="text-pale-sky" />
                </div>
              </div>
            </div>
            <div className="flex-1 bg-alabaster overflow-y-auto">
              <div className="bg-white px-3 py-2 border-b border-gray/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-2 text-[#ff6e6e]">
                      <MailIcon size={14} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-x-1">
                        <div className="font-medium text-[12px]/none text-vulcan">New Construction Alerts</div>
                        <CheckCircleIcon className="text-blue-500" size={12} />
                      </div>
                      <div className="flex items-center gap-x-1 text-pale-sky">
                        <ClockIcon width={12} height={12} />
                        <div className="text-[11px]/none mt-[2px]">{formattedDate}</div>
                      </div>
                    </div>
                  </div>
                  <StarIcon size={16} className="text-gray" />
                </div>
                <h3 className="text-sm font-medium font-opensauce text-gray-900 mt-3">Your Weekly Property Update</h3>
              </div>
              <div className="p-3">
                <div className="text-xs text-bright-gray">
                  <p>Hi Alex,</p>
                  <p className="mt-1">We found 3 new construction properties that match your criteria this week.</p>
                </div>
                <div className="space-y-4 mt-3">
                  {properties.map(property => (
                    <div key={property.id} className="bg-white rounded-md shadow-sm overflow-hidden">
                      <div className="relative">
                        <Image
                          src={property.image}
                          alt={property.name}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute top-1 left-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-full flex items-center">
                          <MapPinIcon size={10} className="mr-0.5" />
                          {property.location}
                        </div>
                        <button className="absolute top-1 right-1 bg-white/80 p-1 rounded-full">
                          <HeartIcon size={12} className="text-gray-500" />
                        </button>
                      </div>
                      <div className="p-2">
                        <div className="flex justify-between items-start">
                          <div className="text-xs font-medium text-vulcan">{property.name}</div>
                          <div className="text-[10px] text-pale-sky">Complete {property.completion}</div>
                        </div>
                        <div className="mt-1.5 flex items-center justify-between">
                          <div className="text-xs font-bold text-[#ff6e6e]">{property.price}</div>
                          <div className="flex items-center gap-x-1 text-[10px] text-trout">
                            <div className="flex items-center gap-x-0.5 text-trout">
                              <BedDoubleIcon  size={10} />
                              <span>{property.beds}</span>
                            </div>
                            <div className="flex items-center gap-x-0.5 text-trout">
                              <BathIcon  size={10} />
                              <span>{property.baths}</span>
                            </div>
                            <div className="flex items-center gap-x-0.5 text-trout">
                              <SquareIcon size={10} />
                              <span>{property.sqft.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-center">
                  <a href="#" className="text-blue-600 font-medium">View all matches</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}