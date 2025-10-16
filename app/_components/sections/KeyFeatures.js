import { FiPackage } from "react-icons/fi";
import { MdOutlineShield } from "react-icons/md";

function KeyFeatures({ features }) {
  return (
    <section className="w-screen py-5">
      {features.length && (
        <div className="mx-auto w-[92%] rounded-lg bg-primary px-6 pb-3 pt-8 text-white shadow-md md:w-[80%] md:px-12 md:py-12">
          <div className="flex items-center gap-2">
            <FiPackage className="text-2xl" />
            <h3 className="text-base font-bold uppercase md:text-xl">
              Key Features
            </h3>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="my-5 text-justify">
              {Object.entries(feature).map(([key, value], i) => (
                <div key={i} className="">
                  <MdOutlineShield className="inline text-xl" />
                  <span className="mx-2 text-sm font-bold md:text-base">
                    {key}:
                  </span>
                  <span className="text-xs md:text-sm">{value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default KeyFeatures;
