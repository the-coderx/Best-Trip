import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { flightOffers } from "./data";
import { ArrowLeftRight } from "lucide-react";

export default function FlightOffers() {
  const showNavigation = flightOffers.length > 3;

  return (
    <section className="w-full h-auto p-6 m-2">
      {/* Header */}
      <div className="h-[76px] w-full max-w-[417px] gap-[12px] flex flex-col mb-4">
        <h1 className="font-poppins text-[32px] leading-[32px] font-bold">
          Flight Offer Deals
        </h1>
        <span className="h-[32px] text-[#5A5A5A]">
          Competitive fares for your route-specific searches.
        </span>
      </div>

      {/* Carousel */}
      <Carousel className="w-full max-w-7xl px-4 pb-6 pt-2 mx-auto">
        <CarouselContent>
          {flightOffers.map((offer, index) => (
            <CarouselItem key={index} className="p-2 md:basis-1/2 lg:basis-1/4">
              {/* CARD */}
              <div className="rounded-[20px] border border-gray-200 bg-white p-6 shadow-sm">
                {/* Airline */}
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={offer.logo}
                    alt={offer.airline}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />

                  {/* TWO-LINE AIRLINE NAME */}
                  <h3 className="text-base font-semibold leading-tight">
                    American
                    <br />
                    Airlines
                  </h3>
                </div>

                {/* Route */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-semibold">{offer.from}</span>

                  <ArrowLeftRight className="w-5 h-5 text-gray-600" />

                  <span className="text-base font-semibold">{offer.to}</span>
                </div>

                {/* Date */}
                <p className="text-sm text-gray-600 mb-6">{offer.date}</p>

                {/* Bottom section - Economy and Price on same line */}
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-gray-600">Economy</p>
                  <p className="text-base font-bold text-gray-900">
                    From ₹{offer.price.toLocaleString()}
                  </p>
                </div>

                {/* Book Now Button - Right aligned */}
                <div className="flex justify-end">
                  <Button className="h-[40px] rounded-md bg-[#FF7A00] px-6 text-sm font-semibold hover:bg-[#e96f00]">
                    Book Now
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        {showNavigation && (
          <>
            <CarouselPrevious className="size-8 -left-8" />
            <CarouselNext className="size-8 -right-4" />
          </>
        )}
      </Carousel>
    </section>
  );
}
