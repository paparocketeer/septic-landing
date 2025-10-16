"use client";

import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import PartnerWithTradeGo from "@/app/_components/sections/PartnerWithTradeGo";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <Image
          src="/laundromat.jpg"
          alt="Laundry facility"
          width={1000}
          height={500}
          className="h-72 w-full object-cover md:h-96"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-70">
          <div className="text-center text-white">
            <h1 className="mb-2 text-3xl font-extrabold uppercase md:mb-4 md:text-5xl">
              Frequently Asked Questions (FAQs)
            </h1>
            <p className="mx-auto max-w-[90%] px-2.5 py-2.5 text-sm md:max-w-5xl md:px-0 md:py-0 md:text-xl">
              At TradeGO Limited, we offer a comprehensive range of services
              designed to support your commercial laundry operations and ensure
              your business thrives.
            </p>
          </div>
        </div>
      </div>

      <FAQSection />

      <PartnerWithTradeGo />
    </div>
  );
};

export default FAQPage;

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef({});

  const faqs = [
    {
      question: "What types of washing chemicals do you offer?",
      answer:
        "We offer a wide range of products, including detergents, fabric softeners, stain removers, bleaching agents, pH neutralizers, and specialty additives designed specifically for commercial laundry operations.",
    },
    {
      question: "Are your products environmentally friendly?",
      answer:
        "Yes, we are committed to sustainability. Many of our products feature biodegradable formulations and are designed to minimize environmental impact while maintaining superior cleaning performance.",
    },
    {
      question:
        "Can your products be used with all types of laundry equipment?",
      answer:
        "Our washing chemicals are compatible with most commercial laundry machines. We also offer expert guidance to ensure proper chemical dosing and equipment compatibility.",
    },
    {
      question: "Do you provide custom chemical formulations?",
      answer:
        "Yes, we can create custom formulations tailored to your specific needs, whether it’s for unique stains, fabric types, or industry-specific requirements.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We cater to a variety of industries, including hospitality, healthcare, industrial laundries, and specialty markets such as gyms, spas, and salons.",
    },
    {
      question: "How do I know which products are right for my business?",
      answer:
        "Our team of experts can help you select the best products based on your laundry volume, fabric types, and specific cleaning needs.",
    },
    {
      question: "Are your products safe to use?",
      answer:
        "All our products comply with safety standards and come with detailed Safety Data Sheets (SDS). We also offer guidance to ensure safe handling and storage.",
    },
    {
      question: "Do you offer bulk purchasing options?",
      answer:
        "Yes, we provide bulk purchasing options for businesses to ensure cost-effectiveness and consistent supply.",
    },
    {
      question: "How quickly can I receive my order?",
      answer:
        "For most locations, we offer delivery within 24 hours if the order is placed by 11 AM. Larger orders may require additional time, and our team will keep you updated on delivery schedules.",
    },
    {
      question: "What support services do you provide?",
      answer:
        "We offer a range of support services, including technical advice on chemical dosing and machine compatibility, guidance for your team, and troubleshooting and process optimization.",
    },
    {
      question: "Do you provide samples for testing?",
      answer:
        "Yes, we provide product samples so you can test them in your operations before committing to a purchase.",
    },
    {
      question: "What payment options do you accept?",
      answer:
        "We accept various payment methods, including credit/debit cards, bank transfers, and invoicing for approved accounts.",
    },
    {
      question: "How do I store your chemicals safely?",
      answer:
        "Our products come with clear storage guidelines to ensure safety. Typically, they should be stored in a cool, dry place, away from direct sunlight and incompatible materials.",
    },
    {
      question: "What makes your products different from competitors?",
      answer:
        "Our products are known for their high efficiency, superior stain removal, eco-friendly formulations, and compatibility with modern commercial laundry systems. Additionally, our dedicated customer support ensures you get the most out of our solutions.",
    },
    {
      question: "How can I contact your team for more information?",
      answer:
        "You can reach us via:\n• Phone: 0044-07515106586\n• Email: info@tradegolimited.co.uk\n• Website: www.tradegolimited.co.uk",
    },
  ];

  return (
    <div className="max-w-screen mx-auto px-4 py-12 md:max-w-4xl">
      <div className="mb-12 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-md"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-base font-bold text-gray-900 md:text-lg md:font-semibold">
                  {faq.question}
                </span>
                <div className="transition-transform duration-300 ease-in-out">
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96" : "max-h-0"
                }`}
                ref={(el) => (contentRefs.current[index] = el)}
              >
                <div className="px-6 py-4 md:py-0">
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
