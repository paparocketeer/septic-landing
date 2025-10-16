"use client";

import { useRouter } from "next/navigation";

import ProductCard from "@/app/_components/ProductCard";
import { products } from "@/app/_data/products";

function Products({ all_products = false, class_name = "" }) {
  const router = useRouter();
  let num_of_items = 4;
  if (all_products) num_of_items = products.length;

  return (
    <section className={`mx-auto w-full text-center lg:px-big ${class_name}`}>
      {!all_products && (
        <h1 className="title-our-products text-xl font-extrabold uppercase tracking-wide text-primary-heading-main md:mb-10 md:text-3xl">
          Our Products
        </h1>
      )}
      {products.slice(0, num_of_items).map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          slug={product.slug}
          title={product.title}
          description={product.description}
          image={product.image}
          image_reversed={product.id % 2 === 0}
        />
      ))}

      {!all_products && (
        <button
          onClick={() => router.push("/products")}
          className="group relative overflow-hidden rounded-sm bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-[500ms] ease-in-out hover:text-white md:my-2 md:text-base"
        >
          <span className="relative z-10">All Products</span>
          <span className="absolute left-0 top-0 h-[110%] w-[110%] -translate-x-full bg-primary-heading-main transition-transform duration-[500ms] ease-in-out group-hover:translate-x-0"></span>
        </button>
      )}
    </section>
  );
}

export default Products;
