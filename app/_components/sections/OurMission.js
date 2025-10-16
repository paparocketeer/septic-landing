import Image from "next/image";

function OurMission() {
  return (
    <section className="mx-auto w-full bg-primary px-5 py-small text-center text-white md:py-medium lg:px-big">
      <h1 className="tranking-wide mb-2 text-xl font-extrabold uppercase text-white md:mb-4 md:text-3xl">
        Our Mission
      </h1>
      <p className="mx-auto w-full px-5 text-sm text-white/90 md:w-[60%] md:px-0 md:text-base">
        Our primary mission is to empower commercial businesses with high
        quality, eco-friendly, and innovative cleaning supplies
      </p>

      <div className="mt-6 flex flex-col justify-between md:mt-12 md:flex-row">
        <div className="relative rounded-md border-8 border-white md:h-56 md:w-[40%] md:border-0 lg:h-[21.75rem]">
          <Image
            src="/about/about-4.jpg"
            alt="mission"
            width={1000}
            height={500}
            loading="lazy"
            className="relative z-10 object-cover md:rounded-lg"
          />

          <div className="absolute left-3 top-2 z-0 hidden h-full w-full rounded-lg bg-white md:block lg:left-5 lg:top-5"></div>
        </div>

        <div className="mt-8 text-left md:mt-0 md:w-[55%]">
          <h1 className="text-base font-bold uppercase md:text-xl md:font-extrabold">
            EMPOWER COMMERCIAL BUSINESSES
          </h1>
          <p className="mt-2 text-justify text-sm text-white/90 md:mt-3 md:text-left md:text-base md:leading-7">
            At TradeGO Limited, our mission is to empower commercial laundries
            with exceptional cleaning solutions that deliver spotless results
            every time. We are dedicated to providing high-quality, innovative
            products that not only meet the toughest cleaning challenges but
            also uphold our commitment to environmental sustainability.
          </p>
          <h1 className="mt-8 text-base font-bold uppercase md:text-xl md:font-extrabold">
            ECO-FRIENDLY SOLUTIONS
          </h1>
          <p className="mt-2 text-justify text-sm text-white/90 md:mt-3 md:text-left md:text-base md:leading-7">
            We believe in creating value for our customers by combining
            performance, reliability, and eco-consciousness in everything we do.
            By prioritizing your success and satisfaction, we strive to build
            long-lasting partnerships that help your business thrive. Whether
            it&apos;s achieving impeccable cleanliness, optimizing operational
            efficiency, or reducing environmental impact, TradeGO Limited is
            here to support your goals every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
