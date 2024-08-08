// "use client";
import DetailProduct from "@/app/features/DetailProduct/DetailProduct";
import CarouselDetail from "@/Components/CarouselDetail/CarouselDetail";
import CarouselImages from "@/Components/CarouselImages/CarouselImages";
import Count from "@/Components/Count/Count";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { Button } from "@/Components/ui/button";
import { getSession } from "@/lib/getUser";
import Image from "next/image";

const page = async ({ params }) => {
  const session = await getSession();
  const id_user = session ? session.id_user : null;

  const id = params.id;
  const productId = await fetch(`http://localhost:4000/api/products/${id}`);
  const product = await productId.json();
  const sizes = product.sizesRow;
  const imagesRow = product?.images_row;

  const category = product[0].name_category;

  const resp = await fetch(
    `http://localhost:4000/api/products/category/${category}`
  );
  const data = await resp.json();

  return (
    <div className=" w-full md:container flex-grow">
      {/* detalle del product */}
      <section className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-5 ">
        <CarouselDetail imagesRow={imagesRow} product={product} />
        <DetailProduct
          data={product[0]}
          id_user={id_user}
          sizes={sizes}
          imagesRow={imagesRow}
        />
      </section>
      <CarouselImages data={data} />
    </div>
  );
};

export default page;
