// "use client";
import Filter from "@/Components/Filter/Filter";
import ProductCard from "@/Components/ProductCard/ProductCard";
import Link from "next/link";

export default async function page({ searchParams }) {
  const resp = await fetch(
    `http://localhost:4000/api/search?q=${searchParams.query}`
  );

  const data = await resp.json();

  return (
    <div className=" mt-5 flex-grow container w-full  min-h-screen ">
      <h1 className="text-2xl font-bold pb-4">
        {" "}
        {data.length > 0 ? <p>Buscando: "{searchParams.query}" </p> : ""}
      </h1>
      {/* <Filter /> */}
      <div></div>
      <div
        className={`  ${
          data.length > 0
            ? "grid  grid-cols-2  md:grid md:grid-cols-5"
            : "flex w-full h-full items-center justify-center md:flex md:w-full md:justify-center md:items-center md:h-full"
        } gap-2 w-full h-full`}
      >
        {data.length > 0 ? (
          data.map((item) => (
            <Link href={`/product/${item.id_product}`}>
              <div className="border rounded-md hover:shadow-md transition-all duration-300 w-full">
                <ProductCard item={item} key={item.id_product} />
                <div className="flex justify-between px-2 py-2  h-[54px] w-full rounded-md">
                  <p className="text-sm">{item.name_product}</p>
                  <p className="text-sm font-bold">${item.price}</p>
                </div>
              </div>{" "}
            </Link>
          ))
        ) : (
          <p className="text-1xl">
            <span className="font-bold">Resultado</span>: Producto no encontrado
          </p>
        )}
      </div>
    </div>
  );
}
