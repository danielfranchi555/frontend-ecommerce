import ProductCard from "@/Components/ProductCard/ProductCard";
import Image from "next/image";
import React from "react";

const BestSeller = ({ products }) => {
  return (
    <div className=" mb-20 text-black md:container">
      <h4 className="text-center text-2xl font-bold py-4 text-black">
        Best Seller
      </h4>
      <div className="grid grid-cols-2 w-[97%] mx-auto md:grid md:grid-cols-5 gap-4 ">
        {products.slice(0, 10).map((item) => (
          <div className="border rounded-md hover:shadow-md transition-all duration-300">
            <ProductCard item={item} />
            <div className="flex justify-between px-2 py-2  h-[54px] w-full rounded-md">
              <p className="text-sm">{item.name_product}</p>
              <p className="text-sm font-bold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
