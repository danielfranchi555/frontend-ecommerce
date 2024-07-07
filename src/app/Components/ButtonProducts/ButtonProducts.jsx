"use client";
import { getProducts } from "@/api/api";
import { useState } from "react";

const ButtonProducts = () => {
  const [data, setData] = useState([]);

  const get = async () => {
    const products = await getProducts();
    setData(products);
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
      <div>{data.length > 0 && JSON.stringify(data)}</div>
    </div>
  );
};

export default ButtonProducts;
