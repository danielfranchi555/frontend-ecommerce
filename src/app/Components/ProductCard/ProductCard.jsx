import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <Link
      className="border  hover:scale-70 hover:shadow-md transition-all  "
      href={`/product/${item.id_product}`}
    >
      <div className=" bg-gray-200 text-black flex flex-col items-center   dark:text-white dark:bg-slate-800">
        <div className="bg-gray-200">
          <Image
            src={item.image_url}
            width={300}
            height={200}
            alt="image-product"
            className="drop-shadow-md"
          />
        </div>
        <div className="bg-white px-4 py-2 text-sm w-full flex flex-col dark:bg-slate-700">
          <p className="font-bold">{item.name_product}</p>
          <span>${item.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
