import { CarouselSpacing } from "@/components/Carouselcard";
import FlightOffers from "@/components/FlightOffers";
import { ImageCarousel } from "@/components/ImageCarousel";
import PopularCities from "@/components/PopularCities";
import PromoCards from "@/components/Promocard";
import SearchHotel from "@/components/SearchHotel";
import { MapPin, Users } from "lucide-react";
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
      price: 19000,
      priceUnit: "person",
    },
    {
      image: "/images/d0b3f8a52477155cd1f94270b0975337d2da51c7.jpg",
      heading: "Ocean View Palace",
      subheading: "Dubai, UAE",
      subheadingIcon: MapPin,
      rating: 4.96,
      reviewCount: 672,
      badge: "6 Days",
      price: 19000,
      priceUnit: "person",
    },
    {
      image: "/images/94ba1798548c4f598ef66d22aa545565c4905775.jpg",
      heading: "Silver Maple Inn",
      subheading: " Toronto, Canada",
      subheadingIcon: MapPin,
      rating: 4.96,
      reviewCount: 672,
      badge: "6 Days",
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
      price: 19000,
      priceUnit: "person",
    },
  ];

  const popularPackages = [
    {
      image: "/images/f6c59fc01bb2816401ddaebe0746a3c656f604d6.png",
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
      image: "/images/55dab0682e9003ba537c7bab9c67a48fb42cc934.jpg",
      heading: "Ocean View Palace",
      subheading: "Dubai, UAE",
      subheadingIcon: MapPin,
      rating: 4.96,
      reviewCount: 672,
      badge: "6 Days",
      features: "Hotels • Car • Guide • 8 Activities",
      price: 19000,
      priceUnit: "person",
    },
    {
      image: "/images/c1d0e4e1904fcb7e9ba2248df55c6da120214e78.png",
      heading: "Silver Maple Inn",
      subheading: " Toronto, Canada",
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

  const cityServices = [
    {
      image: "/images/b2853f76d449825acbb320dfae0195614672d387.jpg",
      heading: "Tokyo Jr Club",
      subheading: "4 Passenger",
      subheadingIcon: Users,
      badge: "Sedan",
      features: "Ac • Silent Ride • USB Charging",
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
          title="Featured Hotels"
          description="Quality as judged by customers. Book at the ideal price!"
          buttons={[
            "All",
            "Luxury",
            "Standard",
            "Villa",
            "Cottage",
            "Shared Spaces",
          ]}
        />
        <PopularCities />
        <CarouselSpacing
          title="Popular Packages"
          description="Explore our most sought-after travel experiences around the world!"
          items={popularPackages}
          buttons={[
            "All",
            "Luxury",
            "Standard",
            "Villa",
            "Cottage",
            "Shared Spaces",
          ]}
        />
        <FlightOffers />
        <CarouselSpacing
          title="City Taxi Services"
          description="Find reliable taxi services across major cities!"
          items={cityServices}
          buttons={[
            "Newyork",
            "Tokyo",
            "Paris",
            "Duabi",
            "Syadney",
            "Austeralia",
          ]}
        />
      </div>
      <ImageCarousel images={images} />
    </>
  );
}
