"use client";

import Link from "next/link";
import toast from "react-hot-toast";

function Footer() {
  return (
    <footer
      id="footer"
      className="mx-auto w-screen bg-primary-footer px-5 py-10 text-center md:px-medium md:py-small lg:px-big"
    >
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <NavigationColumn />
        <ServicesColumn />
        <ContactColumn />
      </div>
      <div className="mt-7 h-2 w-full border-t border-white pt-4 text-xs font-extralight text-white md:text-xs">
        <span className="text-xs font-bold uppercase tracking-widest">
          TradeGo Limited{" "}
        </span>{" "}
        &copy; 2025 All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;

function NavigationColumn() {
  return (
    <div className="text-center md:text-left">
      <h2 className="font-extrabold uppercase tracking-wider text-primary-heading-second md:text-xl">
        Navigation
      </h2>
      <div className="mt-2 flex flex-col gap-2 text-center text-xs tracking-wider text-white md:mt-4 md:gap-3 md:text-left md:text-sm">
        <Link href={"/about"} className="hover:text-primary-heading-second">
          About Us
        </Link>
        <Link href={"/products"} className="hover:text-primary-heading-second">
          Products
        </Link>
        <Link href={"/services"} className="hover:text-primary-heading-second">
          Services
        </Link>
        <Link href={"/faqs"} className="hover:text-primary-heading-second">
          FAQs
        </Link>
      </div>
    </div>
  );
}

function ServicesColumn() {
  return (
    <div className="md:text-left">
      <h2 className="font-extrabold uppercase tracking-wider text-primary-heading-second md:text-xl">
        Services
      </h2>
      <div className="mt-2 flex flex-col gap-2 text-center text-xs tracking-wider text-white md:mt-4 md:gap-3 md:text-left md:text-sm">
        <p>Technical Support</p>
        <p>Custom Solutions</p>
        <p>Training Staff</p>
        <p>Reliable Delivery</p>
      </div>
    </div>
  );
}

function ContactColumn() {
  return (
    <div className="md:text-left">
      <h2 className="font-extrabold uppercase tracking-wider text-primary-heading-second md:text-xl">
        Get in touch
      </h2>
      <div className="mt-2 flex flex-col gap-2 text-center text-xs tracking-wider text-white md:mt-4 md:gap-3 md:text-left md:text-sm">
        <p className="">
          <span className="font-bold">Phone: </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText("07515106586");
              toast.success("Phone number copied to clipboard");
            }}
          >
            07515106586
          </span>
          <span className="mx-1.5">/</span>
          <span
            className="cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText("02033766160");
              toast.success("Phone number copied to clipboard");
            }}
          >
            02033766160
          </span>
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText("info@tradegolimited.co.uk");
            toast.success("Email copied to clipboard");
          }}
        >
          <span className="font-bold">Email:</span> info@tradegolimited.co.uk
        </p>
        <p className="">
          <span className="font-bold">Registered Address:</span> 135 Tiptree
          Crescent, Ilford IG5 0SX, United Kingdom
        </p>
        <Link
          href={"https://www.tradegolimited.co.uk"}
          target="_blank"
          className="hover:text-primary-heading-second"
        >
          <span>
            <span className="font-bold">Website:</span> www.tradegolimited.co.uk
          </span>
        </Link>
      </div>
    </div>
  );
}
