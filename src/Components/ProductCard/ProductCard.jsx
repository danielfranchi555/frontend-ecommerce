import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <div className="relative group block">
      <Link
        href={`/product/${item.id_product}`}
        className="relative w-[200px] md:w-[300px] block"
      >
        <Image
          src={item.image_url}
          width={500}
          height={100}
          className="w-[200px] md:w-[300px] h-full"
        />
        <div className="absolute w-auto inset-0 md:bg-gradient-to-t md:from-black/40 md:to-transparent md:opacity-0 md:group-hover:opacity-80 md:transition-opacity md:duration-300"></div>
        <div className="absolute inset-0 w-[200px] md:w-[290px] md:flex justify-center items-center md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
          <span className="bg-white text-black py-2 px-4 rounded cursor-pointer hidden md:block">
            View Detail
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
