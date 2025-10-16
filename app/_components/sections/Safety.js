import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { MdOutlineShield } from "react-icons/md";
import { TbAlertTriangle } from "react-icons/tb";

function Safety({ safety }) {
  return (
    <section className="mx-auto w-full px-5 py-6 md:pb-big lg:px-big">
      <div className="rounded-lg border border-red-500 px-4 py-4 md:px-8 md:py-5">
        <h1 className="tranking-wide mb-2 flex items-center gap-2 text-base font-extrabold uppercase text-red-500 md:mb-4 md:text-xl">
          <BsFillExclamationTriangleFill className="inline text-xl text-red-500 md:text-2xl" />
          Safety Precautions
        </h1>

        {safety.map((app, index) => (
          <div key={index} className="my-5 text-justify text-red-500">
            {Object.entries(app).map(([key, value], i) => (
              <div key={i} className="">
                <MdOutlineShield className="inline text-lg md:text-xl" />
                <span
                  className={`mx-1 text-sm font-bold md:mx-2 md:text-base ${isNaN(key) ? "" : "hidden"}`}
                >
                  {key}:
                </span>
                <span className="text-xs md:text-sm">{value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Safety;
