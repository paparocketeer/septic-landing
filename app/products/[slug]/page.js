import ProductDetailsPage from "@/app/_components/pages/ProductDetailsPage";
import { products } from "@/app/_data/products";

export const metadata = {
  title: "Product Details",
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

function Page() {
  return <ProductDetailsPage />;
}

export default Page;
