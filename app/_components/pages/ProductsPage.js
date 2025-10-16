import PageHeader from "@/app/_components/PageHeader";
import Products from "@/app/_components/sections/Products";

function ProductsPage() {
  return (
    <>
      <PageHeader
        image_url={"/bedroom.jpg"}
        title={"Our Products"}
        page={"products"}
      />
      <Products
        all_products={true}
        class_name="md:pt-16 pb-6 md:py-10 md:pb-10"
      />
    </>
  );
}

export default ProductsPage;
