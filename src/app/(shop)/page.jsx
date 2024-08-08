import Hero from "@/Components/Hero/Hero";
import OurProducts from "../features/OurProducts/OurProducts";
import Clients from "@/Components/Clients/Clients";
import Banner from "@/Components/Banner/Banner";
import BestSeller from "../features/BestSeller/BestSeller";
import HeroOffert from "@/Components/HeroOffert/HeroOffert";

const page = async () => {
  const resp = await fetch("http://localhost:4000/api/products", {
    next: { revalidate: 3600 },
  });
  const products = await resp.json();

  return (
    <div className="text-green-400 w-[100%] ">
      <Hero />
      <Banner />
      <section className="flex flex-col max-w-[100%] mx-auto">
        <OurProducts products={products} />
        <HeroOffert />
        <BestSeller products={products} />
      </section>
      <Clients />
    </div>
  );
};

export default page;
