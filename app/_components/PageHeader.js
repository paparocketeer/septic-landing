import Image from "next/image";
import Link from "next/link";

function PageHeader({ image_url, title, page, product_id, product_name }) {
  return (
    <header className="relative flex h-64 w-screen items-center overflow-hidden md:h-96">
      <Image
        src={image_url ? image_url : "/clothes-3.jpg"}
        alt={title}
        width={2000}
        height={1000}
        className="overflow-hidden object-center"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-primary opacity-50"></div>
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white md:left-28">
        <h1 className="text-2xl font-extrabold uppercase md:text-5xl">
          {title}
        </h1>
        <div className="text-xs md:text-base">
          <Link href={"/"} className="hover:text-primary">
            Home/
          </Link>
          {page == "about" ? (
            <Link href={"/about"} className="hover:text-primary">
              About
            </Link>
          ) : (
            <Link href={"/products"} className="hover:text-primary">
              Products
            </Link>
          )}
          {page == "products" && product_id && (
            <Link
              href={`/products/${product_id}`}
              className="hover:text-primary"
            >
              /{product_name}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
