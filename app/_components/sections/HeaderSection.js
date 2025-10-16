"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function HeaderSection() {
  const router = useRouter();

  return (
    <header className="h-64 w-screen overflow-hidden md:h-96">
      <div className="relative flex h-64 w-screen items-center md:h-96">
        <Image
          src={"/header.jpg"}
          alt={"header"}
          width={2000}
          height={1000}
          className="object-center"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-primary opacity-50"></div>
      </div>
      <div className="absolute right-0 top-[25%] w-full -translate-y-1/2 px-5 text-white md:w-[70%] md:px-small lg:top-[37%] lg:w-[58%] lg:px-big">
        <h1 className="text-xl font-extrabold md:text-[2rem]">
          Profession Clean Washing Chemicals
        </h1>
        <p className="my-1 mb-2 text-justify text-xs tracking-wide md:my-2 md:text-sm">
          We specialize in delivering high-quality cleaning chemicals tailored
          for commercial laundry operations.
        </p>

        <button
          onClick={() => router.push("/products")}
          className="group relative my-2 overflow-hidden rounded-sm bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary transition-colors duration-[500ms] ease-in-out hover:text-white md:px-4 md:py-2 md:text-base"
        >
          <span className="relative z-10">Products</span>
          <span className="absolute left-0 top-0 h-[110%] w-[110%] -translate-x-full bg-primary-heading-main transition-transform duration-[500ms] ease-in-out group-hover:translate-x-0"></span>
        </button>
      </div>
    </header>
  );
}

export default HeaderSection;
