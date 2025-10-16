import { BsFillLightningChargeFill } from "react-icons/bs";
import { VscBeaker } from "react-icons/vsc";
import { FaRecycle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

function WhyUs() {
  return (
    <section className="mx-auto w-full py-small text-center md:py-medium lg:px-big">
      <h1 className="tranking-wide mb-2 text-xl font-extrabold uppercase text-primary-heading-main md:mb-4 md:text-3xl">
        Why Choose Us
      </h1>
      <p className="mx-auto w-full px-5 text-sm text-gray-700 md:w-[60%] md:px-0 md:text-base">
        At TradeGO Limited, we understand the unique needs of commercial laundry
        operations and are committed to providing solutions that drive
        efficiency, quality, and satisfaction.
      </p>
      <div className="mx-auto mt-4 grid w-full grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 lg:grid-cols-4">
        <WhyUsCard
          icon={<BsFillLightningChargeFill />}
          title="High Performance"
          description="Our cleaning chemicals are expertly formulated to tackle even the toughest stains while preserving fabric integrity. With every wash, you can expect brilliant, consistent results that exceed expectations."
        />
        <WhyUsCard
          icon={<VscBeaker />}
          title="Custom Solutions"
          description="Every business is different, and we tailor our products and dosing solutions to meet the specific requirements of your industry. Whether you're managing hotel linens or hospital scrubs, we have the right solution for you."
        />
        <WhyUsCard
          icon={<FaRecycle />}
          title="Eco-Friendly"
          description="Sustainability is at the heart of our operations. We offer biodegradable and low-impact cleaning chemicals that align with environmental standards, helping you reduce your ecological footprint without compromising on performance."
        />
        <WhyUsCard
          icon={<TbTruckDelivery />}
          title="Fast Delivery"
          description="We value your time. Place your order by 11 AM, and we'll ensure delivery within 24 hours for most locations, so you can keep your operations running smoothly."
        />
      </div>
    </section>
  );
}

export default WhyUs;

function WhyUsCard({ icon, title, description }) {
  return (
    <div className="p-2 text-center md:p-4">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-3xl text-white md:h-16 md:w-16">
        {icon}
      </div>
      <h2 className="mb-2 mt-4 font-bold text-gray-800 md:mb-3 md:mt-6 md:text-xl">
        {title}
      </h2>
      <p className="px-2 text-justify text-sm leading-6 text-gray-600 md:text-center md:text-base md:leading-7">
        {description}
      </p>
    </div>
  );
}
