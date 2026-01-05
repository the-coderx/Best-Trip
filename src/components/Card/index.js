import Image from "next/image";
import { Card } from "../ui/card";
import { Heart, MapPin, Star } from "lucide-react";
import { Button } from "../ui/button";

export function CardCompo({
  image,
  heading,
  subheading,
  subheadingIcon,
  rating,
  reviewCount,
  badge,
  features,
  price,
  priceUnit,
}) {
  const SubheadingIcon = subheadingIcon;
  return (
    <>
      <Card className="w-[450px] max-w-full rounded-[30px] overflow-hidden shadow-lg bg-white p-0">
        {/* IMAGE SECTION */}
        <div className="relative h-[320px] w-full ">
          <Image src={image} alt={heading} fill className="object-cover" />

          {/* Wishlist */}
          <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow z-20 hover:bg-[#FFF0E4]">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>

          {/* Rating Badge */}
          {rating && reviewCount && (
            <div className="absolute bottom-12 left-4 bg-white p-1.75 rounded-full flex items-center gap-1 text-xs shadow-lg z-20">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-gray-900">{rating}</span>
              <span className="text-gray-500">({reviewCount} reviews)</span>
            </div>
          )}

          {/* Days Badge */}
          <div className="absolute bottom-12 right-4 bg-white p-1.75 rounded-full flex items-center justify-center text-xs font-semibold text-gray-900 shadow-lg z-20">
            {badge}
          </div>
        </div>

        {/* WHITE CONTENT SECTION */}
        <div className="-mt-8 bg-white rounded-t-[30px] pt-10 pb-10 px-10 flex flex-col gap-2.5 relative z-10">
          <h3 className="text-xl font-semibold">{heading}</h3>

          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <SubheadingIcon className="w-4 h-4" />
            <span>{subheading}</span>
          </div>
          {features && (
            <div className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-md w-fit">
              {features}
            </div>
          )}

          {/* PRICE + CTA */}
          <div className="flex items-center justify-between pt-[10px]">
            <div>
              <span className="text-xl font-bold">₹ {price}</span>
              <span className="text-sm text-muted-foreground">
                {" "}
                {priceUnit}
              </span>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 px-6 py-2.5 h-[40px] w-[153px] py-[9px] px-[17px]">
              Book Now
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
