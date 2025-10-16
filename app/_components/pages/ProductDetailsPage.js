"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import { products } from "@/app/_data/products";
import PageHeader from "../PageHeader";
import KeyFeatures from "../sections/KeyFeatures";
import ApplicationsAndUsage from "../sections/ApplicationsAndUsages";
import Safety from "../sections/Safety";

function ProductDetailsPage() {
  const params = useParams();

  const product = products.find((product) => product.slug === params.slug);

  return (
    <>
      <PageHeader
        image_url={"/clothes.jpg"}
        title={"Product Details"}
        page={"products"}
        product_id={product.id}
        product_name={product.title}
      />

      <section className="mx-auto w-full px-5 py-6 text-center md:py-medium lg:px-big">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="text-justify md:w-[65%]">
            <h1 className="text-xl font-extrabold uppercase text-primary-heading-main md:text-3xl">
              {product.title}
            </h1>
            {product.description.map((paragraph, index) => (
              <p key={index} className="my-4 text-sm leading-7 md:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative overflow-hidden md:h-96 md:w-[30%]">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              loading="lazy"
              className="object-center"
            />
          </div>
        </div>
      </section>

      {product.keys && <KeyFeatures features={product.keys} />}
      {product.applications && product.usages && (
        <ApplicationsAndUsage
          applications={product.applications}
          usages={product.usages}
        />
      )}
      {product.safety && <Safety safety={product.safety} />}
    </>
  );
}

export default ProductDetailsPage;
