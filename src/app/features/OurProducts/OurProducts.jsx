"use client";
import ProductCard from "@/Components/ProductCard/ProductCard";
import Link from "next/link";
import { useState } from "react";

const OurProducts = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  const list = ["All", "phones", "Laptops", "headphones", "Ipads"];

  const handleFilter = (cat, index) => {
    setActiveIndex(index);
    setFilter(cat);
  };

  const products =
    filter === "All"
      ? data
      : data.filter((prod) => prod.name_category === filter);

  return (
    <div className="text-black   flex flex-col gap-4  mt-28">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="  font-bold text-4xl">Our Products</h2>
        <ul className="flex gap-4 items-center">
          {list.map((item, index) => (
            <li
              onClick={() => handleFilter(item, index)}
              className={`py-2 px-2 text-gray-400 cursor-pointer transition ${
                activeIndex === index
                  ? `text-slate-950 py-0 border-b-2 border-[#007580]`
                  : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <section className="">
        <div className=" py-4 w-full md:h-[600px] grid grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {products.slice(0, 8).map((item) => (
            <ProductCard key={item.id_product} item={item} />
          ))}
        </div>
        <Link
          href={`category/${filter}`}
          className=" border-gray-300 hover:scale-70 transition mx-auto"
        >
          View More
        </Link>
      </section>
    </div>
  );
};

export default OurProducts;
