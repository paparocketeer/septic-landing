"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavigationMain() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/products", text: "Products" },
    { href: "/services", text: "Services" },
    { href: "/faqs", text: "FAQs" },
    { href: "/contact", text: "Contact" },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-30 flex w-screen items-center justify-between bg-white px-4 py-3 text-gray-600 shadow-md md:px-small lg:px-big">
      <Link href={"/"} className="flex items-center gap-2">
        <div className="relative h-6 w-6 -translate-x-[0.12rem]">
          <Image
            src="/logo-large.png"
            alt="logo"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <h3 className="text-base font-extrabold text-primary-heading-main">
          TradeGo Limited
        </h3>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="block md:hidden"
        onClick={handleMenuClick}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 text-xs font-medium uppercase md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`border-b-2 border-transparent px-1 transition-all duration-300 ease-in-out hover:text-primary-heading-main ${
              pathname === link.href &&
              "border-primary text-primary-heading-main"
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}

      <div
        className={`absolute left-0 right-0 top-full z-50 transform bg-white px-4 py-2 shadow-lg transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block border-l-4 border-transparent py-3 pl-4 text-sm transition-all duration-300 ease-in-out hover:border-primary hover:text-primary-heading-main ${
              pathname === link.href &&
              "border-primary text-primary-heading-main"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavigationMain;
