import { CarouselSpacing } from "@/components/Carouselcard";
import { MapPin } from "lucide-react";
import Image from "next/image";
export default function Home() {
  const categories = [
    { label: "Hotels", icon: "/icons/hotel.png" },
    { label: "Group Tour", icon: "/icons/group.png" },
    { label: "Tailor made Holiday", icon: "/icons/holiday.png" },
    { label: "Flights", icon: "/icons/flight.png" },
    { label: "Flights+Hotel", icon: "/icons/flight.png" },
    { label: "Taxi", icon: "/icons/taxi.png" },
  ];

  const hotelData = [
    {
      image: "/images/img1.jpg",
      heading: "Goa Beach Holiday",
      subheading: "North Goa",
      subheadingIcon: MapPin,
      rating: 4.96,
      reviewCount: 672,
      badge: "6 Days",
      features: "Hotels • Car • Guide • 8 Activities",
      price: 19000,
      priceUnit: "person",
    },
  ];
  return (
    <>
      <div className="w-full h-[75px] px-3 bg-[#FFF0E4]/80 py-4">
        <div className="flex items-center justify-center gap-6">
          {categories.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-[44px] h-[44px] flex items-center justify-center shrink-0">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={43}
                  height={43}
                  className="w-full h-full object-cover rounded-[5px]"
                />
              </div>

              <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <CarouselSpacing
        items={hotelData}
        buttons={[
          "All",
          "Luxury",
          "Standard",
          "Villa",
          "Cottage",
          "Shared Spaces",
        ]}
      />
    </>
  );
}
