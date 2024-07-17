import React from "react";
import { getSession } from "@/lib/getUser";
import Hero from "@/Components/Hero/Hero";
import OurProducts from "../features/OurProducts/OurProducts";
import Clients from "@/Components/Clients/Clients";

const page = async () => {
  const resp = await fetch("http://localhost:4000/api/products", {
    next: { revalidate: 2600 },
  });
  const data = await resp.json();

  return (
    <div className="text-green-400 w-full">
      <Hero />
      <section className="flex flex-col max-w-[80%] mx-auto">
        <OurProducts data={data} />
      </section>
      <Clients />
    </div>
  );
};

export default page;
