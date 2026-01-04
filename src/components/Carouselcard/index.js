import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { CardCompo } from "../Card";

export function CarouselSpacing({
  title,
  description,
  buttons = [],
  items = [],
}) {
  const showNavigation = items.length > 3;
  return (
    <div className="w-full h-[715px] m-2 p-6">
      <div className="h-[76px] w-[417px] gap-[12px] flex flex-col">
        <h1 className="font-poppins text-[32px] leading-[32px] font-bold">
          {title || "Feature Hotel"}
        </h1>
        <span className="h-[32px] text-[#5A5A5A]">
          {description ||
            "Quality as judged by customers. Book at the ideal price!"}
        </span>
      </div>
      <div className="flex gap-[10px] flex-wrap pt-2">
        {buttons.map((label, index) => (
          <Button
            key={index}
            variant="outline"
            className="rounded-[25px] hover:bg-[#FFF0E4]"
          >
            {label}
          </Button>
        ))}
      </div>
      <Carousel className="w-full max-w-7xl px-6 pb-6 pt-2">
        <CarouselContent className="">
          {items.map((item, index) => (
            <CarouselItem key={index} className="p-2 md:basis-1/2 lg:basis-1/3">
              <CardCompo {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {showNavigation && (
          <>
            <CarouselPrevious className="size-8 -left-6" />
            <CarouselNext className="size-8 -right-4" />
          </>
        )}
      </Carousel>
    </div>
  );
}
