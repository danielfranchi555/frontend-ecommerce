"use client";
import ProductCard from "@/Components/ProductCard/ProductCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const search = useSearchParams();

  const searchQuery = search ? search.get("q") : null;

  const getProducts = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const resp = await fetch(
        `http://localhost:4000/api/search?q=${searchQuery}`
      );
      const data = await resp.json();
      setProducts(data);
      if (resp.status === 404) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    } catch (error) {
      console.log({ message: error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [searchQuery]);

  const param = search.get("q");

  return (
    <div className="max-w-[97%] mx-auto mt-10">
      <p className="text-1xl font-bold py-2">
        Searching: "{param.toLocaleUpperCase()}"
      </p>
      {loading ? (
        <p>LOADING...</p>
      ) : (
        <div className="grid  grid-cols-5 gap-4">
          {notFound ? (
            <p className="text-center">not found</p>
          ) : (
            products?.map((item) => (
              <Link href={`/product/${item.id_product}`}>
                <ProductCard item={item} />
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default page;
