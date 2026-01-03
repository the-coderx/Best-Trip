"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);

  const navigation = [
    { name: "Team", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white w-full border-b-2">
      <div className="flex h-16 md:h-16.25 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 text-red-600 text-sm md:text-base">
          <Image
            src="/images/image.png"
            alt="Best Trip"
            width={60}
            height={20}
            className="object-contain w-10 md:w-15"
          />
          <span className="font-semibold">BESTTRIPDEALS</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7.5 ml-auto h-11.5">
          <Button variant="ghost">Home</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                More
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {navigation.map((item) => (
            <Button key={item.name} variant="ghost">
              {item.name}
            </Button>
          ))}
          <Button variant="primary">Login</Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-8">
              <Button
                variant="ghost"
                className="justify-start w-full"
                onClick={() => setSheetOpen(false)}
              >
                Home
              </Button>

              {/* Mobile More Section */}
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold text-gray-700 px-3 py-2">
                  More
                </span>
                <Button
                  variant="ghost"
                  className="justify-start w-full pl-6"
                  onClick={() => setSheetOpen(false)}
                >
                  Documentation
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start w-full pl-6"
                  onClick={() => setSheetOpen(false)}
                >
                  Support
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start w-full pl-6"
                  onClick={() => setSheetOpen(false)}
                >
                  Contact
                </Button>
              </div>

              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="justify-start w-full"
                  onClick={() => setSheetOpen(false)}
                >
                  {item.name}
                </Button>
              ))}

              <Button
                variant="primary"
                className="w-full mt-4"
                onClick={() => setSheetOpen(false)}
              >
                Login
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
