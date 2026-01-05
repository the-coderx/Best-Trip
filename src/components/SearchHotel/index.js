import { MapPin, CalendarDays, Users, Search } from "lucide-react";

export default function SearchHotel() {
  return (
    <section className="w-full px-6 py-8 m-2">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4 text-[32px] leading-[32px] font-poppins">
        Search Hotel
      </h1>

      {/* Container */}
      <div className="w-[775px] h-[180px] rounded-2xl border border-gray-200 bg-white p-5">
        {/* Fields */}
        <div className="flex items-center justify-between mb-5">
          
          {/* Location */}
          <div className="flex items-center gap-3 flex-1">
            <MapPin className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Location</p>
              <p className="text-sm font-semibold text-gray-900">
                Shimla
              </p>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-200 mx-6" />

          {/* Check In */}
          <div className="flex items-center gap-3 flex-1">
            <CalendarDays className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Check In</p>
              <p className="text-sm font-semibold text-gray-900">
                02 January 2025
              </p>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-200 mx-6" />

          {/* Check Out */}
          <div className="flex items-center gap-3 flex-1">
            <CalendarDays className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Check Out</p>
              <p className="text-sm font-semibold text-gray-900">
                05 January 2025
              </p>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-200 mx-6" />

          {/* Guests */}
          <div className="flex items-center gap-3 flex-1">
            <Users className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Guest</p>
              <p className="text-sm font-semibold text-gray-900">
                2 adults, 2 children
              </p>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full h-[52px] rounded-xl bg-[#FF7A00] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#e96f00] transition">
          <Search className="w-5 h-5" />
          Search
        </button>
      </div>
    </section>
  );
}
