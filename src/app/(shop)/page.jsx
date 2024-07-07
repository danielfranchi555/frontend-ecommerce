import React from "react";
import ProductCard from "../Components/ProductCard/ProductCard";

const page = async () => {
  const resp = await fetch("http://localhost:4000/api/products", {
    next: { revalidate: 3600 },
  });
  const data = await resp.json();

  return (
    <div className="text-green-400 border max-w-[90%] mx-auto grid grid-cols-5 gap-4">
      {data.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  );
};

export default page;
