import ProductCard from "@/Components/ProductCard/ProductCard";

const page = async ({ params }) => {
  const category = params.category;
  const resp = await fetch(
    `http://localhost:4000/api/products/category/${category}`
  );
  const data = await resp.json();

  return (
    <div className="h-auto w-full grid grid-cols-3 gap-6 ">
      {data.products?.map((item) => (
        <div className="">
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default page;
