import Image from "next/image";
import { popularCities } from "./data";

export default function PopularCities() {
  return (
    <section className="w-full px-4 md:px-8 py-10">
      {/* Heading */}
        <div className="mb-8 text-left">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Our Hotel in Popular Cities
        </h2>
        <p className="mt-2 text-sm md:text-base text-[#5A5A5A]">
            Quality as judged by customers. Book at the ideal price!
        </p>
        </div>

      {/* Cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {popularCities.map((city) => (
          <div
            key={city.name}
            className="relative min-w-[160px] h-[220px] rounded-xl overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <Image
              src={city.image}
              alt={city.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Bottom centered text */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
              <h3 className="text-sm md:text-base font-semibold">
                {city.name}
              </h3>
              <p className="text-xs md:text-sm opacity-90 mt-1">
                {city.hotels} Hotels
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
