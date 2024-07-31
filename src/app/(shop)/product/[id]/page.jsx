// "use client";
import DetailProduct from "@/app/features/DetailProduct/DetailProduct";
import CarouselImages from "@/Components/CarouselImages/CarouselImages";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { getSession } from "@/lib/getUser";

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
  console.log(data);

  return (
    <div className=" w-[85%] mx-auto mt-10 md:mt-0 md:w-[90%] md:mx-auto flex flex-col items-center justify-center">
      <DetailProduct
        data={product[0]}
        id_user={id_user}
        sizes={sizes}
        imagesRow={imagesRow}
      />
      <CarouselImages data={data} />
    </div>
  );
};

export default page;
