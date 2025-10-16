import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdOutlineLocalHospital } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { IoMdBusiness } from "react-icons/io";

function Industries() {
  return (
    <section
      id="industries"
      className="mx-auto w-full py-medium text-center md:py-medium lg:px-big"
    >
      <h1 className="tranking-wide mb-2 text-xl font-extrabold uppercase text-primary-heading-main md:mb-4 md:text-3xl">
        Industries We Serve
      </h1>
      <p className="mx-auto w-full px-5 text-sm text-gray-700 md:w-[60%] md:px-0 md:text-base">
        {" "}
        At TradeGO Limited, we cater to a wide range of industries, providing
        specialized cleaning solutions to meet the distinct needs of each
        sector. Our expertise ensures that you achieve exceptional results,
        regardless of the scale or complexity of your laundry operations.
      </p>
      <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <IndustryCard
          icon={<LiaHandsHelpingSolid />}
          title="Hospitality"
          description="We help hotels, resorts, and other hospitality businesses create unforgettable guest experiences with perfectly laundered linens, towels, and uniforms. Our cleaning solutions deliver pristine freshness, softness, and longevity, elevating the standard of your service."
        />
        <IndustryCard
          icon={<MdOutlineLocalHospital />}
          title="Healthcare"
          description="Hygiene is paramount in healthcare, and our hospital-grade cleaning chemicals are designed to meet the strictest standards. From sanitizing patient bedding to maintaining staff uniforms, our products ensure safe, reliable, and effective cleaning for medical facilities."
        />
        <IndustryCard
          icon={<LiaIndustrySolid />}
          title="Industrial"
          description="For large-scale laundry operations handling heavy loads, we offer robust, heavy-duty cleaning solutions. Our products are engineered to tackle high volumes, tough stains, and intensive washing cycles while ensuring efficiency and cost-effectiveness."
        />
        <IndustryCard
          icon={<IoMdBusiness />}
          title="Specialty Businesses"
          description="We provide tailored cleaning products for niche industries such as spas, gyms, and salons. Whether it's ensuring the softness of spa towels or maintaining the freshness of gym wear, our solutions are designed to meet the specific demands of your business."
        />
      </div>
    </section>
  );
}

export default Industries;

function IndustryCard({ icon, title, description }) {
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
