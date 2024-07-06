"use client";
import { getProducts } from "@/api/api";
import { useState } from "react";

const ButtonProducts = () => {
  const [products, setProducts] = useState([]);

  const get = async () => {
    const products = await getProducts();
    setProducts(products);
    console.log(products);
  };

  return (
    <div>
      <button className="bg-slate-700 px-4 py-2" onClick={() => get()}>
        Get Products
      </button>
      <div className="text-center ">
        <h2 className="text-sm">Products</h2>
      </div>
      <div>{products.length > 0 && JSON.stringify(products)}</div>
    </div>
  );
};

export default ButtonProducts;
