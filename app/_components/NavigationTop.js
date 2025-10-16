"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";

function NavigatoinTop() {
  return (
    <div className="left-0 top-0 z-10 flex w-screen items-center justify-between bg-primary px-5 py-2 text-white md:px-small lg:px-big">
      <div className="flex flex-col items-center gap-2 md:flex-row md:gap-0">
        <div className="flex cursor-pointer items-center">
          <FaPhoneAlt className="text-xs" />
          <span
            className="tracking-wideest mx-1 text-xs font-semibold"
            onClick={() => {
              navigator.clipboard.writeText("07515106586");
              toast.success("Phone number copied to clipboard");
            }}
          >
            07515106586
          </span>
          <span className="mr-1 text-xs">/</span>
          <span
            className="tracking-wideest text-xs font-semibold"
            onClick={() => {
              navigator.clipboard.writeText("02033766160");
              toast.success("Phone number copied to clipboard");
            }}
          >
            02033766160
          </span>
        </div>
        <Link
          className="-ml-3 flex items-center md:ml-3"
          href={"mailto:info@tradegolimited.co.uk"}
        >
          <IoMailOpen className="text-base" />
          <span className="mx-1 text-xs font-semibold">
            info@tradegolimited.co.uk
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <FaFacebook className="text-lg" />
        <FaInstagram className="text-xl text-white" />
        <FaTwitter className="text-lg text-white" />
      </div>
    </div>
  );
}

export default NavigatoinTop;
