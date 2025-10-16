"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import Image from "next/image";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "07515106586 / 02033766160",
      href: "tel:07515106586",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@tradegolimited.co.uk",
      href: "mailto:info@tradegolimited.co.uk",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Registered Address",
      content: "135 Tiptree Crescent, Ilford IG5 0SX, United Kingdom",
      href: "https://maps.google.com/?q=135+Tiptree+Crescent+Ilford+IG5+0SX+United+Kingdom",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website",
      content: "www.tradegolimited.co.uk",
      href: "https://www.tradegolimited.co.uk",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/contact.jpg"
          alt="Contact Us"
          width={1000}
          height={500}
          className="h-64 w-full object-cover md:h-96"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="mb-2 text-3xl font-bold uppercase md:mb-4 md:text-5xl">
              Contact Us
            </h1>
            <p className="max-w-2xl text-base md:text-xl">
              Ready to elevate your laundry operations? Get in touch with us
              today!
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="gap-16 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="mb-8 text-center text-2xl font-extrabold uppercase text-primary-heading-main md:text-left">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="text-primary-heading-main">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {info.title}
                    </h3>
                    <p className="text-gray-600">{info.content}</p>
                    {info.subContent && (
                      <p className="mt-1 text-sm text-gray-500">
                        {info.subContent}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
