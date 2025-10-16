import HeaderSection from "@/app/_components/sections/HeaderSection";
import WhyUs from "@/app/_components/sections/WhyUs";
import Products from "@/app/_components/sections/Products";
import Industries from "@/app/_components/sections/Industries";
import Services from "@/app/_components/sections/Services";
import FAQ from "@/app/_components/sections/FAQ";

function HomePage() {
  return (
    <main>
      <HeaderSection />
      <WhyUs />
      <Products />
      <Industries />
      <Services />
      <FAQ />
    </main>
  );
}

export default HomePage;
