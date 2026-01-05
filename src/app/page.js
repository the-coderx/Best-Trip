import { CarouselSpacing } from "@/components/Carouselcard";
import { ImageCarousel } from "@/components/ImageCarousel";
import PopularCities from "@/components/PopularCities";
import FlightOffers from "@/components/FlightOffers";
import PromoCards from "@/components/Promocard";
import SearchHotel from "@/components/SearchHotel";
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

  const images = ["/images/img1.jpg", "/images/img1.jpg", "/images/img1.jpg"];
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
      <div className="flex justify-end mt-[10px] mr-[40px]">
        <SearchHotel />
        <PromoCards />
      </div>
      <div className="-mt-35">
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
        {/* Popular Cities section */}
            <PopularCities />
            <FlightOffers />
            

       
      </div>
      <ImageCarousel images={images} />
     
    </>
  );
}
