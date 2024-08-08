import Fade from "@/app/utils/MotionTransitions/Fade/Fade";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <Fade className="">
      <Link
        href={`/product/${item.id_product}`}
        className="relative w-[150px] md:w-[240px]  duration-500 "
      >
        <Image
          src={item.image_url}
          width={253}
          height={100}
          className="md:w-full "
          alt="img-product"
        />
      </Link>
    </Fade>
  );
};

export default ProductCard;
