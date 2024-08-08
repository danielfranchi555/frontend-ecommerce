import { fetchProducts } from "@/app/lib/data";
import ProductCard from "@/Components/ProductCard/ProductCard";

const Page = async ({ searchParams, params }) => {
  const category = params.category;
  const query = searchParams.price;
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = await fetchProducts(category, query);
  console.log(data);

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-6 ">
        {data?.products.map((item) => (
          <div className="border rounded-md hover:shadow-md transition-all duration-300 w-full bg-none">
            <ProductCard item={item} key={item.id_product} />
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

export default Page;
