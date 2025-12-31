import Image from "next/image";
import { MapPin, Clock, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-white border-t w-full mt-auto shrink-0">
      {/* Background Illustration */}
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-60 md:h-80 overflow-hidden">
        <Image
          src="/images/image_bg.png"
          alt="City Illustration"
          fill
          className="object-cover object-top"
          priority={false}
        />
      </div>

      {/* Top Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-8">
            {/* Logo + Info */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/image.png"
                  alt="Best Trip Deals"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <span className="text-base sm:text-lg font-bold text-red-600">
                  BESTTRIPDEALS
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="shrink-0 mt-0.5" />
                  <span>45, Main Bazar, Delhi</span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock size={16} className="shrink-0 mt-0.5" />
                  <span>Hours: 8:00 - 17:00, Mon - Sat</span>
                </p>
                <p className="flex items-start gap-2">
                  <Mail size={16} className="shrink-0 mt-0.5" />
                  <span>support@travila.com</span>
                </p>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                About Us
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Best Taxi Ride
                </li>
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Group Tour Holiday
                </li>
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Tailor Made Holiday
                </li>
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Hotel Booking
                </li>
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Tourist Guide
                </li>
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Prepurchase Flight
                </li>
              </ul>
            </div>

            {/* Partnership */}
            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Our Partnership
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Taxi Partner
                </li>
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Hotelier
                </li>
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Guide Partner
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Help
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  List Your Hotel
                </li>
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Term & Conditions
                </li>
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Reporting
                </li>
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Documentation
                </li>
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Support Policy
                </li>
                <li className="hover:text-[#FC811A] cursor-pointer transition-colors">
                  Privacy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacer for Background */}
      <div className="h-24 sm:h-32 md:h-40" />
    </footer>
  );
}
