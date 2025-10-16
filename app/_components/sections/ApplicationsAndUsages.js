"use client";

import { useState } from "react";
import { MdOutlineShield } from "react-icons/md";

function ApplicationsAndUsages({ applications, usages }) {
  const [activeTab, setActiveTab] = useState("applications");

  return (
    <section className="mx-auto w-full px-5 py-6 md:py-medium lg:px-big">
      <div className="flex items-center justify-between gap-2 overflow-hidden rounded-lg bg-gray-300/40 px-3 py-2 md:px-5">
        <button
          onClick={() => setActiveTab("applications")}
          className={`w-full rounded-lg px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 md:py-3 md:text-base ${
            activeTab === "applications"
              ? "bg-primary/80 text-white"
              : "bg-gray-300/40"
          }`}
        >
          Applications
        </button>
        <button
          onClick={() => setActiveTab("usages")}
          className={`w-full rounded-lg px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 md:py-3 md:text-base ${
            activeTab === "usages"
              ? "bg-primary/80 text-white"
              : "bg-gray-300/40"
          }`}
        >
          Usages
        </button>
      </div>

      {activeTab === "applications" && (
        <Applications applications={applications} />
      )}
      {activeTab === "usages" && <Usages usages={usages} />}
    </section>
  );
}

export default ApplicationsAndUsages;

function Applications({ applications }) {
  return (
    <div className="mx-auto mt-6 w-full rounded-lg border border-gray-200 px-5 py-3 text-center shadow-sm md:px-small md:py-6">
      {applications.map((app, index) => (
        <div key={index} className="my-5 text-justify">
          {Object.entries(app).map(([key, value], i) => (
            <div key={i} className="">
              <MdOutlineShield className="inline text-xl" />
              <span
                className={`mx-2 text-base font-bold ${isNaN(key) ? "" : "hidden"}`}
              >
                {key}:
              </span>
              <span className={`text-sm ${isNaN(key) ? "" : "ml-2"}`}>
                {value}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Usages({ usages }) {
  return (
    <div className="mx-auto mt-6 w-full rounded-lg border border-gray-200 px-5 py-3 text-center shadow-sm md:px-small md:py-6">
      {usages.map((use, index) => (
        <div key={index} className="my-5 text-justify">
          {Object.entries(use).map(([key, value], i) => (
            <div key={i} className="">
              <MdOutlineShield className="inline text-xl" />
              <span
                className={`mx-2 text-base font-bold ${isNaN(key) ? "" : "hidden"}`}
              >
                {key}:
              </span>
              <span className={`text-sm ${isNaN(key) ? "" : "ml-2"}`}>
                {value}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
