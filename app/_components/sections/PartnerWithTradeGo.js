import Link from "next/link";

function PartnerWithTradeGo() {
  return (
    <div className="bg-primary py-12 text-white md:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 text-xl font-extrabold uppercase md:text-3xl md:font-bold">
          Partner with TradeGO Limited
        </h2>
        <p className="mb-8 text-sm md:text-xl">
          Get tailored services and dependable support that keeps your business
          running at its best.
        </p>
        <Link
          href={"/contact"}
          className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-gray-100 md:px-8 md:py-3 md:text-base"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
}

export default PartnerWithTradeGo;
