import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function PromoCards() {
  return (
    <div className="flex flex-col gap-6">
      {/* ================= CARD 1 ================= */}
      <div className="relative w-[388px] h-[202px] overflow-hidden rounded-xl">
        <Image
          src="/images/promocard1.png"
          alt="Travel promo banner"
          fill
          priority
          className="object-cover"
        />

        {/* HEADING */}
        <div
          className="
            absolute
            top-[70.5px]
            left-[178.28px]
            w-[200.72px]
            h-[64.5px]
            flex items-center
            font-bold
            text-[23px]
            leading-[32px]
            text-white
            font-[Manrope,sans-serif]
          "
        >
          We Make Every Trips Special
        </div>

        {/* BUTTON */}
        <Button
          className="
            absolute
            top-[155px]
            left-[224.59px]
            w-[128.41px]
            h-[32px]
            rounded-full
            bg-[#FEFA17]
            flex items-center justify-center gap-2
            cursor-pointer
            hover:bg-[#FEFA17]
          "
        >
          <span className="font-bold text-[12px] leading-[18px] text-black font-[Manrope,sans-serif]">
            View More
          </span>

          <ArrowRight size="12" color="black"/>
        </Button>
      </div>

      {/* ================= CARD 2 ================= */}
      <div className="relative w-[388px] h-[202px] overflow-hidden rounded-xl">
        <Image
          src="/images/promocard2.png"
          alt="Limited offer banner"
          fill
          className="object-cover"
        />

        {/* LIMITED OFFERS */}
        <div
          className="
            absolute
            top-[52px]
            left-[30px]
            w-[108.95px]
            font-bold
            text-[16px]
            leading-[26px]
            text-black
            font-[Manrope,sans-serif]
          "
        >
          Limited Offers
        </div>

        {/* MAIN HEADING */}
        <div
          className="
            absolute
            top-[76.5px]
            left-[30px]
            w-[200.44px]
            h-[64.5px]
            flex items-center
            font-bold
            
            text-[22px]
            leading-[32px]
            text-black
            font-[Manrope,sans-serif]
          "
        >
          Buy 1, Get 1 Free Attractions
        </div>

        {/* BUTTON */}
        <Button
          className="
            absolute
            top-[155px]
            left-[30px]
            w-[128.41px]
            h-[32px]
            rounded-full
            bg-[#FEFA17]
            flex items-center justify-center gap-2
            cursor-pointer
            hover:bg-[#FEFA17]
          "
        >
          <span className="font-bold text-[12px] leading-[18px] text-black font-[Manrope,sans-serif]">
            View More
          </span>

          <ArrowRight size="12" color="black" />
        </Button>
      </div>
    </div>
  );
}
