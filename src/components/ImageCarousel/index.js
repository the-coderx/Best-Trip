import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function ImageCarousel({ images = [] }) {
  const showNavigation = images.length > 1;
  return (
    <>
      <Carousel className="mx-auto w-full max-w-7xl pb-6 items-center ">
        <CarouselContent className="">
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="relative w-full h-[390px]">
                  <Image
                    src="/images/img2.png"
                    alt="Image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {showNavigation && (
          <>
            <CarouselPrevious className="size-12 -left-16" />
            <CarouselNext className="size-12 -right-16" />
          </>
        )}
      </Carousel>
    </>
  );
}
