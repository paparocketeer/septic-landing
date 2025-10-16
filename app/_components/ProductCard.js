// "use client";

// import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

function ProductCard({
  id,
  slug,
  image,
  title,
  description,
  image_reversed = false,
}) {
  // const component = useRef(null);
  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       component.current,
  //       { opacity: 0, y: 90 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.5,
  //         // delay: 0.5,
  //         ease: "power2.in",
  //         scrollTrigger: {
  //           trigger: component.current,
  //           start: "top bottom",
  //           end: "top 0px",
  //           toggleActions: "play none none none",
  //         },
  //       },
  //     );

  //     return () => ctx.revert(); // Cleanup
  //   }, component);
  // }, []);

  return (
    <div
      className={`my-0 flex flex-col items-start justify-between px-5 md:flex-row md:px-small ${
        image_reversed && "md:flex-row-reverse"
      }`}
      // ref={component}
    >
      <div className="my-6 w-full text-left md:my-0 md:w-[50%] lg:w-[70%]">
        <Link
          href={`/products/${slug}`}
          className="mb-3 block text-lg font-bold text-primary md:text-2xl"
        >
          {title}
        </Link>
        <Link
          href={`/products/${slug}`}
          className="relative h-[25rem] w-[25rem] cursor-pointer overflow-hidden rounded-md md:hidden"
        >
          <Image
            src={image}
            alt={title}
            width={390}
            height={390}
            loading="lazy"
            className="rounded-md object-cover"
          />
        </Link>
        <p className="mt-4 text-justify text-sm leading-6 text-gray-800 md:m-0 md:text-base md:leading-7">
          {description.map((paragraph, index) => (
            <p key={index} className={`my-2 ${index === 1 && "truncate"}`}>
              {paragraph}
            </p>
          ))}
          <Link
            href={`/products/${slug}`}
            className="cursor-pointer border-b-2 border-primary-footer p-0.5 text-sm font-semibold text-primary-footer"
          >
            See more.
          </Link>
        </p>
      </div>
      <Link
        href={`/products/${slug}`}
        className="relative hidden h-[20rem] w-[18rem] cursor-pointer overflow-hidden rounded-md md:block"
      >
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          loading="lazy"
          className="overflow-hidden rounded-md object-cover"
        />
      </Link>
    </div>
  );
}

export default ProductCard;
