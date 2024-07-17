import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <Link
      className="hover:scale-70 border h-[260px] hover:shadow-md transition-all   "
      href={`/product/${item.id_product}`}
    >
      <div className="w-full  bg-gray-200 text-black flex flex-col items-center justify-center dark:text-white dark:bg-slate-800">
        <div className="bg-gray-200 flex items-center justify-center">
          <Image
            src={item.image_url}
            width={250}
            height={200}
            alt="image-product"
            className="drop-shadow-xl"
          />
        </div>
        <div className="bg-white  px-4 py-2 text-sm w-full flex flex-col dark:bg-slate-700">
          <p className="font-bold h-[20px]">{item.name_product}</p>
          <span>${item.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
