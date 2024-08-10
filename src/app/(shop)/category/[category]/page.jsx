import { fetchProducts } from "@/app/lib/data";
import ProductCard from "@/Components/ProductCard/ProductCard";

const Page = async ({ searchParams, params }) => {
  const category = params.category;
  const query = searchParams.price;
  const data = await fetchProducts(category, query);
  console.log(data);

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-6 ">
        {data?.products.map((item) => (
          <div className="border rounded-md hover:shadow-md transition-all duration-300 w-full bg-none">
            <ProductCard item={item} key={item.id_product} />
            <div className="flex flex-col justify-between gap-1 md:flex-row md:py-4 md:px-2 px-1 w-full h-[55px] rounded-md ">
              <p className="text-xs md:text-[14px]">{item.name_product}</p>
              <p className="text-xs font-bold md:text-[14px]">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
